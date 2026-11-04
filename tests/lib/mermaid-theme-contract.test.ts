import { describe, it, expect } from 'bun:test';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Mermaid 図の「テーマ上書き契約」を機械的に守らせる回帰テスト。
 *
 * 背景（2026-09-21 に 3 度目の再発で恒久化）:
 * 図が「暗い箱に入って縮小され、文字が読めない」障害は、図の定義や
 * mermaid のテーマではなく **CSS カスケード** が原因で繰り返し発生してきた。
 *   1. globals.css の @layer 内で `.mermaid-wrapper` にダークカード既定
 *      （background / max-width:760px）が当たっている
 *   2. CSS 仕様上 `!important` 宣言だけはレイヤー順が逆転するため、
 *      レイヤー内の `!important` はページ固有 CSS（レイヤー外）から
 *      **絶対に上書きできない**
 * このテストは上記 2 点と、既知の `%%{init}%%` パース事故を検知する。
 */

const APP_DIR = join(import.meta.dir, '../../app');

/** CSS コメントを除去する（コメント中の !important を誤検知しないため）。 */
function stripCssComments(css: string): string {
    return css.replace(/\/\*[\s\S]*?\*\//g, '');
}

/** app/ 直下のページディレクトリ名を返す。 */
function pageDirs(): string[] {
    return readdirSync(APP_DIR, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name);
}

interface MermaidPage {
    readonly dir: string;
    readonly source: string;
    readonly cssFiles: readonly { path: string; content: string }[];
}

/** components/Mermaid を使うページと、その同ディレクトリの CSS を集める。 */
function mermaidPages(): MermaidPage[] {
    const pages: MermaidPage[] = [];
    for (const dir of pageDirs()) {
        const dirPath = join(APP_DIR, dir);
        const pagePath = join(dirPath, 'page.tsx');
        if (!existsSync(pagePath)) continue;

        const tsxFiles = readdirSync(dirPath).filter((name) => name.endsWith('.tsx'));
        const usesMermaid = tsxFiles.some((name) =>
            readFileSync(join(dirPath, name), 'utf8').includes('components/Mermaid')
        );
        if (!usesMermaid) continue;

        let source = '';
        for (const name of tsxFiles) {
            source += '\n' + readFileSync(join(dirPath, name), 'utf8');
        }

        const diagramsPath = join(dirPath, 'diagrams.ts');
        if (existsSync(diagramsPath)) {
            source += '\n' + readFileSync(diagramsPath, 'utf8');
        }

        const cssFiles = readdirSync(dirPath)
            .filter((name) => name.endsWith('.css'))
            .map((name) => ({
                path: `app/${dir}/${name}`,
                content: stripCssComments(readFileSync(join(dirPath, name), 'utf8')),
            }));
        pages.push({ dir, source, cssFiles });
    }
    return pages;
}

const PAGES = mermaidPages();

describe('globals.css の Mermaid 既定スタイル', () => {
    const globals = stripCssComments(readFileSync(join(APP_DIR, 'globals.css'), 'utf8'));

    it('has mermaid-wrapper defaults at all', () => {
        expect(globals).toContain('.mermaid-wrapper');
    });

    it('never uses !important in layered .mermaid-wrapper rules', () => {
        // @layer 内の !important はレイヤー外のページ固有 CSS から上書き不能になる。
        const offenders = globals
            .split('}')
            .filter((block) => block.includes('.mermaid-wrapper') && block.includes('!important'))
            .map((block) => `${block.trim()}}`);
        expect(offenders).toEqual([]);
    });
});

describe('Mermaid ページのテーマ上書き契約', () => {
    it('finds at least one page using Mermaid', () => {
        expect(PAGES.length).toBeGreaterThan(0);
    });

    for (const page of PAGES) {
        const usesInitDirective = page.source.includes('%%{init');
        const usesLightTheme = /"theme"\s*:\s*"base"/.test(page.source);

        if (usesInitDirective) {
            it(`${page.dir}: keeps the %%{init}%% directive free of single quotes`, () => {
                // ダブルクォート内のシングルクォートは mermaid の簡易パーサを黙って壊し、
                // グローバルのダークテーマへフォールバックする。
                const directives = page.source.match(/%%\{init:[\s\S]*?\}\}%%/g) ?? [];
                expect(directives.length).toBeGreaterThan(0);
                expect(directives.filter((d) => d.includes("'"))).toEqual([]);
            });

            it(`${page.dir}: prefixes every DIAGRAM_* constant with the shared config`, () => {
                const withoutConfig = [
                    ...page.source.matchAll(/(?:export )?const (DIAGRAM_\w+) = `([^\n]*)/g),
                ]
                    .filter(([, , head]) => !head.includes('${MERMAID_CONFIG}') && !head.includes('%%{init'))
                    .map(([, name]) => name);
                expect(withoutConfig).toEqual([]);
            });
        }

        if (usesLightTheme) {
            it(`${page.dir}: resets the global dark .mermaid-wrapper card`, () => {
                // ライト配色の図は globals.css の .mermaid-wrapper（暗い背景・max-width:760px）を
                // 打ち消さないと「暗い箱の中で縮小された読めない図」になる。
                const resets = page.cssFiles.filter((css) =>
                    /\.mermaid-wrapper\s*\{[^}]*background/.test(css.content)
                );
                expect(resets.length).toBeGreaterThan(0);
            });

            it(`${page.dir}: also releases the 760px max-width on .mermaid-wrapper`, () => {
                const released = page.cssFiles.filter((css) =>
                    /\.mermaid-wrapper\s*\{[^}]*max-width/.test(css.content)
                );
                expect(released.length).toBeGreaterThan(0);
            });
        }
    }
});

// 共有初期化の mainBkg はページの primaryColor より優先されるため、ページ側でも指定しないと既定ノードが #0f2040 になる
describe('base theme configs override the shared node background', () => {
    const CONFIG_FILES = ['app/appium-essentials-guide/page.tsx', 'app/iso-14496-22-2026-beginner-guide/diagrams.ts', 'app/iso-29119-1-2022-guide/diagrams.ts', 'app/iso-iec-30141-2024-guide/diagrams.ts', 'app/iso-iec-ts-30149-2024-guide/diagrams.ts', 'app/istqb-ctal-tm-chapter3-managing-the-team/diagrams.ts', 'app/testing-ai-confidence-engineering-guide/page.tsx', 'app/unit-testing-principles-practices-patterns-guide/page.tsx'];

    it.each(CONFIG_FILES)('%s sets mainBkg to its primaryColor', (file) => {
        const source = readFileSync(join(APP_DIR, '..', file), 'utf8');
        const primary = source.match(/"primaryColor"\s*:\s*"(#[0-9a-fA-F]+)"/)?.[1];
        expect(primary).toBeDefined();
        expect(source.match(/"mainBkg"\s*:\s*"(#[0-9a-fA-F]+)"/)?.[1]).toBe(primary);
    });
});

// 図が親より広いと素の center は左へはみ出し、スクロールの原点より左は到達できない
describe('overflowing diagrams stay reachable from the left edge', () => {
    const WRAPPER_RULES = [
        ['app/perfect-software-guide/perfect-software-guide.css', '.perfect-software-layout .mermaid-wrapper'],
        ['app/software-testing-with-generative-ai-guide/software-testing-with-generative-ai-guide.css', '.software-testing-genai-layout .mermaid-wrapper'],
        ['app/software-testing-with-generative-ai-guide/software-testing-with-generative-ai-guide.css', '.software-testing-genai-layout .mermaid-container'],
        ['app/istqb-ctel-tm-otm-complete-guide/istqb-ctel-tm-otm-complete-guide.css', '.istqb-ctel-tm-otm-page .mermaid-wrapper'],
    ] as const;

    it.each(WRAPPER_RULES)('%s %s uses safe center', (file, selector) => {
        const css = stripCssComments(readFileSync(join(APP_DIR, '..', file), 'utf8'));
        const body = [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].find((rule) => rule[1]!.split(',').some((part) => part.trim() === selector))?.[2];
        expect(body).toBeDefined();
        expect(body).toMatch(/justify-content:\s*safe center/);
    });
});
