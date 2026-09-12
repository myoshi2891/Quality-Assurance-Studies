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

/**
 * コメント「本文」だけを除去し、実コードは残す（注意書きの引用で誤検知しないため）。
 * 行単位で丸ごと捨てると、同一行で閉じたブロックコメントの後ろに続く
 * mock.module 呼び出しまで検査対象から消えてしまうため、テキスト単位で除去する。
 *
 * 行コメントは行頭だけでなく実コード末尾（`doSomething(); // ...`）にも現れるため、
 * 文字列リテラル（`'` `"` \`）の内側かどうかを1文字ずつ追跡し、リテラル外で見つけた
 * `//` 以降のみをコメントとして切り捨てる。これにより URL など文字列内の `//` を
 * 誤ってコメント開始と判定しない。
 */
function stripLineComment(line: string): string {
    let quote: '"' | "'" | '`' | null = null;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (quote) {
            if (ch === '\\') {
                i++; // エスケープされた次の文字は判定対象から外す
                continue;
            }
            if (ch === quote) quote = null;
            continue;
        }
        if (ch === '"' || ch === "'" || ch === '`') {
            quote = ch;
            continue;
        }
        if (ch === '/' && line[i + 1] === '/') {
            return line.slice(0, i);
        }
    }
    return line;
}

function stripComments(source: string): string {
    return source
        .replace(/\/\*[\s\S]*?\*\//g, '') // ブロックコメント（複数行・同一行を問わず本文のみ）
        .split('\n')
        .map(stripLineComment)
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
        // 「含まれる」だけでは二重登録を見逃すため、登録は 1 箇所だけであることを数で確認する
        const registrations = setup.match(/mock\.module\(\s*['"`]mermaid['"`]/g) ?? [];
        expect(registrations).toHaveLength(1);
    });

    it('実コード末尾の行コメント内の mock.module 呼び出しも除去される（回帰テスト）', () => {
        const source = "doSomething(); // mock.module('mermaid', () => ({}))\n";
        expect(FORBIDDEN.test(stripComments(source))).toBe(false);
    });

    it('文字列リテラル内の // はコメント開始とみなさず本文を保持する', () => {
        const source = "const url = 'https://example.com/mermaid-docs';\n";
        expect(stripComments(source)).toContain('https://example.com/mermaid-docs');
    });
});
