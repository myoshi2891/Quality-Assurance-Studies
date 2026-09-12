import { describe, it, expect } from 'bun:test';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Bun の `mock.module()` はモジュールレジストリをプロセス全体で恒久的に差し替えるため、
 * afterEach / afterAll では元へ戻せない。`bun test` は全ファイルを単一プロセスで実行する
 * ので、あるテストが `mock.module('mermaid')` を呼ぶと、以降の全テストファイルが
 * happydom-setup.ts の共有モック（既定 SVG: `mock-mermaid`）ではなくそのスタブを掴む。
 *
 * 単体実行では常に pass し、ファイルの実行順が変わった時だけ壊れる典型的な順序依存バグで、
 * 実行時アサーションでは検知できない。そのため静的検査で混入を止める。
 *
 * 正しい方式: 共有モックの `render` プロパティのみを beforeAll で退避 → 差し替え、
 * afterAll で復元する（可逆なプロパティ差し替え）。
 */
const TESTS_DIR = join(import.meta.dir);
const SELF = import.meta.path;
const FORBIDDEN = /mock\.module\(\s*['"`](mermaid|.*components\/Mermaid)['"`]/;

/** tests/ 配下の全テストファイルを再帰的に列挙する（本ガード自身は除く）。 */
function collectTestFiles(dir: string): string[] {
    const found: string[] = [];
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) {
            found.push(...collectTestFiles(full));
            continue;
        }
        if (full === SELF) continue;
        if (/\.test\.tsx?$/.test(entry)) found.push(full);
    }
    return found;
}

/** コメント行を除いた実コードだけを対象にする（注意書きの引用で誤検知しないため）。 */
function stripComments(source: string): string {
    return source
        .split('\n')
        .filter((line) => !/^\s*(\/\/|\/\*|\*)/.test(line))
        .join('\n');
}

describe('mermaid モックの分離', () => {
    it('tests/ 配下のどのテストも mock.module で mermaid を差し替えない', () => {
        const offenders = collectTestFiles(TESTS_DIR).filter((file) =>
            FORBIDDEN.test(stripComments(readFileSync(file, 'utf8'))),
        );
        expect(offenders.map((f) => f.slice(TESTS_DIR.length + 1))).toEqual([]);
    });

    it('共有 mermaid モックは happydom-setup.ts の 1 箇所のみで登録される', () => {
        const setup = readFileSync(join(TESTS_DIR, '..', 'happydom-setup.ts'), 'utf8');
        expect(setup).toContain("mock.module('mermaid'");
    });
});
