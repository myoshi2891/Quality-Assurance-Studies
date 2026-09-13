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
 *
 * 正規表現 `/\/\*[\s\S]*?\*\//` で一括除去する旧実装は文字列リテラルの中身を
 * 認識しないため、文字列内に未終端のブロックコメント開始記号（スラッシュ+
 * アスタリスク）が含まれると、非貪欲マッチがその文字列を飛び越えて後続の
 * 実コード上の本物のブロックコメントの終了記号まで到達し、間に挟まった本物の
 * mock.module 呼び出しごと削除してしまう（＝違反の見逃し）。
 *
 * そのため単一パスの字句走査に置き換える。文字列リテラル（`'` `"` \`）に
 * 入っている間はエスケープを追跡しつつ内容を素通しし、リテラルの外側でのみ
 * 行コメント（スラッシュ2つ）とブロックコメントを本文除去する。
 */
function stripComments(source: string): string {
    let result = '';
    let quote: '"' | "'" | '`' | null = null;
    let i = 0;
    while (i < source.length) {
        const ch = source[i];

        if (quote) {
            result += ch;
            if (ch === '\\' && i + 1 < source.length) {
                result += source[i + 1]; // エスケープされた次の文字は判定対象から外し素通しする
                i += 2;
                continue;
            }
            if (ch === quote) quote = null;
            i++;
            continue;
        }

        if (ch === '"' || ch === "'" || ch === '`') {
            quote = ch;
            result += ch;
            i++;
            continue;
        }

        if (ch === '/' && source[i + 1] === '/') {
            i += 2;
            while (i < source.length && source[i] !== '\n') i++;
            continue;
        }

        if (ch === '/' && source[i + 1] === '*') {
            i += 2;
            while (i < source.length && !(source[i] === '*' && source[i + 1] === '/')) i++;
            i += 2; // 終端の */ を読み飛ばす（未終端の場合も範囲外アクセスにはならない）
            continue;
        }

        result += ch;
        i++;
    }
    return result;
}

describe('mermaid モックの分離', () => {
    it('tests/ 配下のどのテストも mock.module で mermaid を差し替えない', () => {
        const offenders = collectTestFiles(TESTS_DIR).filter((file) =>
            FORBIDDEN.test(stripComments(readFileSync(file, 'utf8'))),
        );
        expect(offenders.map((f) => f.slice(TESTS_DIR.length + 1))).toEqual([]);
    });

    it('共有 mermaid モックは happydom-setup.ts の 1 箇所のみで登録される', () => {
        const setup = stripComments(readFileSync(join(TESTS_DIR, '..', 'happydom-setup.ts'), 'utf8'));
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

    it('文字列リテラル内の未終端 /* に惑わされず、後続の実コードの mock.module 呼び出しを見逃さない（回帰テスト）', () => {
        // 文字列リテラルの中身を認識しない旧実装では、この /* が文字列内で閉じていない
        // ため非貪欲マッチが後方の本物のブロックコメントまで飛び越え、間の
        // mock.module(...) 呼び出しごと消えてしまっていた（誤検知の見逃し）。
        const source =
            "const s = 'unterminated /* comment';\nmock.module('mermaid', () => ({}));\n/* actual trailing comment */\n";
        expect(stripComments(source)).toContain("mock.module('mermaid'");
        expect(FORBIDDEN.test(stripComments(source))).toBe(true);
    });
});
