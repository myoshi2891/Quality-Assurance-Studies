import { afterAll, beforeAll, describe, expect, it } from 'bun:test';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// 正本。走査本体は `# >>> pii-scan` と `# <<< pii-scan` の間に置き、下の全コピーをこれとバイト単位で一致させる。
const CANONICAL = '.claude/rules/no-absolute-paths.md';

// 同じ走査を収録する文書と、収録する走査の個数
const SOURCES: readonly (readonly [source: string, scans: number])[] = [
  [CANONICAL, 1],
  ['.gemini/rules/no-absolute-paths.md', 1],
  ['.gemini/skills/markdown-formatter/SKILL.md', 1],
  ['.claude/skills/markdown-formatter/SKILL.md', 1],
  ['.agents/skills/markdown-formatter/SKILL.md', 1],
  ['.claude/skills/docs-sync/SKILL.md', 1],
  ['.agents/skills/docs-sync/SKILL.md', 1],
  ['.claude/rules/migration-progress-sync.md', 2],
  ['.claude/rules/tdd-mandatory-cycle.md', 1],
];

// 同期の対象外。PR 全体の差分と未追跡ファイルを走査する別の検査で、staged diff を見る上の走査とは範囲が異なる。
const EXCLUDED = [
  '.claude/skills/html-to-nextjs-migration/SKILL.md',
  '.agents/skills/html-to-nextjs-migration/SKILL.md',
];

// このテスト自身が PII 検査に検出されないよう、保護された語は連結で組み立てる
const USERS = 'User' + 's';
const HOME = 'hom' + 'e';
const OPT = 'op' + 't';
const OTHER = 'ali' + 'ce';
const USERS_LOWER = 'user' + 's';
const ENCODED_USERS = '%55' + 'sers';
const ENCODED_HOME = '%68' + 'ome';
const ENCODED_HOME_MIXED = '%68' + '%6Fme';

const DETECTED = [
  `/${USERS}/${OTHER}/project`,
  `/${HOME}/${OTHER}/project`,
  `file:///${USERS}/${OTHER}/project`,
  `/${USERS}/JohnDoe/project`,
  `/${OPT}/johndoe/project`,
  // エンコードされた区切り文字
  `file:///${USERS}%2F${OTHER}/project`,
  `file:///${USERS}%2f${OTHER}/project`,
  `file:///Volumes/Ext%2F${USERS}%2F${OTHER}/project`,
  `file:///C:%5C${USERS}%5C${OTHER}%5Cproject`,
  // プレースホルダーより下にあるエンコードされた保護ディレクトリ
  `file:///${USERS}/johndoe/${ENCODED_USERS}/${OTHER}/project`,
  `file:///${USERS}/johndoe/${ENCODED_HOME}/${OTHER}/project`,
  `file:///${USERS}/johndoe/${ENCODED_HOME_MIXED}/${OTHER}/project`,
  `file:///${USERS}/johndoe/project%2F${USERS}%2F${OTHER}/project`,
  `/${USERS}/johndoe/${USERS}/${OTHER}/project`,
  // プレースホルダーを経由した親ディレクトリへの移動
  `/${USERS}/johndoe/../${OTHER}/project`,
  `/${USERS}/johndoe/%2e%2e/${OTHER}/project`,
  `file:///${USERS}%2Fjohndoe%2F..%2F${OTHER}/project`,
  `D:\\Data\\${USERS}\\johndoe\\..\\${OTHER}\\project`,
  // ネストした Users の検出
  `D:\\Data\\${USERS}\\${OTHER}\\project`,
  `D:\\Data\\${USERS}\\johndoe\\${USERS}\\${OTHER}\\project`,
  `D:\\${USERS}\\${OTHER}\\${USERS}\\johndoe\\project`,
  `/${OPT}/${OTHER}/${USERS}/johndoe/project`,
  // 空白を含む要素
  `C:\\Program Files\\${USERS}\\${OTHER}\\project`,
  // Windows の小文字表記
  `c:\\${USERS_LOWER}\\${OTHER}\\project`,
  // 区切り文字がスラッシュの Windows の file URL
  `file:///C:/${USERS}/${OTHER}/project`,
  // UNC パス
  `\\\\server\\${USERS}\\${OTHER}\\project`,
  `\\\\server\\share\\${USERS}\\${OTHER}\\project`,
];

const ALLOWED = [
  `/${USERS}/johndoe/project`,
  `/${HOME}/johndoe/project`,
  `C:\\${USERS}\\johndoe\\project`,
  `file:///${USERS}/johndoe/project`,
  `file:///${USERS}%2Fjohndoe/project`,
  `file:///C:%5C${USERS}%5Cjohndoe%5Cproject`,
  // ネストしたプレースホルダー
  `D:\\Data\\${USERS}\\johndoe\\project`,
  `/mnt/c/${USERS}/johndoe/project`,
  // URL のパス部分と相対パスは対象外
  `https://example.com/${USERS}/${OTHER}/project`,
  `https://example.com/a%2F${USERS}%2F${OTHER}/project`,
  `./relative/${USERS}/project`,
  // 空白を含む要素・UNC・file URL のプレースホルダー
  `C:\\Program Files\\${USERS}\\johndoe\\project`,
  `\\\\server\\${USERS}\\johndoe\\project`,
  `file:///C:/${USERS}/johndoe/project`,
  // POSIX の小文字表記は対象外。ガイドの API 例（ユーザー一覧のルート）を誤検出するため、大文字始まりだけを検出する
  `/${USERS_LOWER}/123/orders`,
];

function extractScans(source: string): string[] {
  const content = readFileSync(source, 'utf8');
  return [...content.matchAll(/^# >>> pii-scan\n([\s\S]*?)\n# <<< pii-scan$/gm)].map((match) => match[1] ?? '');
}

const SCANS = SOURCES.flatMap(([source, scans]) =>
  Array.from({ length: scans }, (_, index) => [`${source} #${index + 1}`, source, index] as const),
);

describe.each(SCANS)('PII 検査: %s', (_label, source, index) => {
  const body = () => {
    const found = extractScans(source)[index];
    if (found === undefined) throw new Error(`PII 検査が見つかりません: ${source}`);
    return found;
  };
  let repository = '';
  let scriptPath = '';

  function scan(text: string) {
    writeFileSync(join(repository, 'staged.txt'), `${text}\n`);
    const added = spawnSync('git', ['add', 'staged.txt'], { cwd: repository, encoding: 'utf8' });
    if (added.status !== 0) throw new Error(added.stderr);
    return spawnSync('bash', [scriptPath], { cwd: repository, encoding: 'utf8' });
  }

  beforeAll(() => {
    repository = mkdtempSync(join(tmpdir(), 'pii-scan-'));
    scriptPath = join(repository, '.git-scan.sh');
    const initialized = spawnSync('git', ['init', '-q'], { cwd: repository, encoding: 'utf8' });
    if (initialized.status !== 0) throw new Error(initialized.stderr);
    writeFileSync(scriptPath, `${body()}\n`);
  });

  afterAll(() => {
    rmSync(repository, { recursive: true, force: true });
  });

  it('スクリプトに CR が含まれない', () => {
    expect(body()).not.toContain('\r');
  });

  it.each(DETECTED)('検出する: %s', (text) => {
    const result = scan(text);

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('PII detected');
  });

  it.each(ALLOWED)('許可する: %s', (text) => {
    const result = scan(text);

    expect(result.status).toBe(0);
    expect(result.stdout).toContain('PII check passed');
  });

  it('検出時はデコード前のパスを表示する', () => {
    const text = `file:///${USERS}/johndoe/${ENCODED_USERS}/${OTHER}/project`;

    const result = scan(text);

    expect(result.stdout).toContain(ENCODED_USERS);
  });
});

describe('PII 検査の同期', () => {
  it('.claude と .gemini のルールが一致する', () => {
    const [claude, gemini] = SOURCES.slice(0, 2).map(([source]) => readFileSync(source));

    expect(gemini?.equals(claude as Buffer)).toBe(true);
  });

  it.each(SOURCES.map(([source, scans]) => [source, scans] as const))('%s は正本と一致する', (source, scans) => {
    const [canonical] = extractScans(CANONICAL);

    const found = extractScans(source);

    expect(canonical).toBeDefined();
    expect(found).toEqual(Array.from({ length: scans }, () => canonical as string));
  });

  it('PII 検査を収録する文書はすべて同期対象か明示的な対象外である', () => {
    const roots = ['.claude', '.gemini', '.agents'];
    const listed = spawnSync('git', ['grep', '-l', 'PII check passed', '--', ...roots], { encoding: 'utf8' });

    const documents = listed.stdout.trim().split('\n').sort();

    expect(listed.status).toBe(0);
    expect(documents).toEqual([...SOURCES.map(([source]) => source), ...EXCLUDED].sort());
  });
});
