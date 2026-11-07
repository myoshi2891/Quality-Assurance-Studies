import { afterAll, beforeAll, describe, expect, it } from 'bun:test';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// 同じ PII 検査を収録し、レビューで同期を求められている 3 ファイル
const SOURCES = [
  '.claude/rules/no-absolute-paths.md',
  '.gemini/rules/no-absolute-paths.md',
  '.gemini/skills/markdown-formatter/SKILL.md',
];

// このテスト自身が PII 検査に検出されないよう、保護された語は連結で組み立てる
const USERS = 'User' + 's';
const HOME = 'hom' + 'e';
const OPT = 'op' + 't';
const OTHER = 'ali' + 'ce';
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
];

function extractScan(source: string): string {
  const content = readFileSync(source, 'utf8');
  const blocks = [...content.matchAll(/```bash\n([\s\S]*?)\n```/g)].map((match) => match[1] ?? '');
  const scan = blocks.find((block) => block.includes('PII check passed'));
  if (scan === undefined) throw new Error(`PII 検査が見つかりません: ${source}`);
  return scan;
}

describe.each(SOURCES)('PII 検査: %s', (source) => {
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
    writeFileSync(scriptPath, `${extractScan(source)}\n`);
  });

  afterAll(() => {
    rmSync(repository, { recursive: true, force: true });
  });

  it('スクリプトに CR が含まれない', () => {
    expect(extractScan(source)).not.toContain('\r');
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
    const [claude, gemini] = SOURCES.slice(0, 2).map((source) => readFileSync(source));

    expect(gemini?.equals(claude as Buffer)).toBe(true);
  });
});
