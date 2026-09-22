import { test, expect } from '@playwright/test';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Mermaid 図の「実際に描画された結果」を検証する E2E。
 *
 * tests/lib/mermaid-theme-contract.test.ts が静的に守れるのはソースの書き方までで、
 * 以下の3つは実際に描画しないと検知できないため、ここで押さえる。
 *   1. 左端切れ: overflow コンテナ内で中央寄せした図がコンテナより広いと、
 *      はみ出した左側はスクロールで到達できない（scrollLeft=0 が左端のため）
 *   2. スクロール到達性: スクロール領域が図の全幅をカバーしているか
 *   3. テーマ適用: %%{init}%% がライトテーマを指定しているのに、
 *      グローバルのダークテーマへフォールバックしていないか
 */

// Playwright はリポジトリルートから実行されるため cwd 基準で解決する
// （import.meta を使うと Playwright の TS 変換が ESM/CJS 混在で失敗する）
const APP_DIR = join(process.cwd(), 'app');

/** グローバル既定（ダークテーマ）の色。ライト指定ページでこれが出たら上書き失敗。 */
const GLOBAL_DARK_NODE_FILL = 'rgb(15, 32, 64)'; // #0f2040
const GLOBAL_DARK_CARD_BG = 'rgb(19, 25, 41)'; // #131929

interface MermaidRoute {
    readonly path: string;
    readonly expectsLightTheme: boolean;
}

/** components/Mermaid を使うページを app/ から収集する。 */
function mermaidRoutes(): MermaidRoute[] {
    const routes: MermaidRoute[] = [];
    for (const entry of readdirSync(APP_DIR, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        const pagePath = join(APP_DIR, entry.name, 'page.tsx');
        if (!existsSync(pagePath)) continue;
        const source = readFileSync(pagePath, 'utf8');
        if (!source.includes('components/Mermaid')) continue;
        routes.push({
            path: `/${entry.name}`,
            expectsLightTheme: /"theme"\s*:\s*"base"/.test(source),
        });
    }
    return routes;
}

const ROUTES = mermaidRoutes();

test.describe('mermaid: rendered layout and theme', () => {
    for (const route of ROUTES) {
        test(`${route.path} renders every diagram fully reachable`, async ({ page }) => {
            const response = await page.goto(route.path);
            expect(response?.status(), `HTTP status for ${route.path}`).toBe(200);

            // 図はクライアント描画なので、全 wrapper に SVG が出そろうまで待つ
            await page.waitForFunction(
                () => {
                    const wrappers = [...document.querySelectorAll('.mermaid-wrapper')];
                    return wrappers.length > 0 && wrappers.every((w) => w.querySelector('svg') !== null);
                },
                undefined,
                { timeout: 20_000 }
            );
            await page.waitForLoadState('networkidle');

            const diagrams = await page.evaluate(() => {
                /** 最も近い横スクロール可能な祖先を返す（なければ wrapper 自身）。 */
                const scrollerOf = (el: Element): Element => {
                    let node: Element | null = el;
                    while (node) {
                        const overflowX = getComputedStyle(node).overflowX;
                        if (overflowX === 'auto' || overflowX === 'scroll') return node;
                        node = node.parentElement;
                    }
                    return el;
                };

                return [...document.querySelectorAll('.mermaid-wrapper')].map((wrapper, index) => {
                    const svg = wrapper.querySelector('svg');
                    const scroller = scrollerOf(wrapper);
                    const node = svg?.querySelector('.node rect, .node polygon, .node path');
                    return {
                        index,
                        hasSvg: Boolean(svg),
                        failed: wrapper.textContent?.includes('図表の描画に失敗しました') ?? false,
                        // スクロール原点(0)における図の左端。負なら左側が永久に見えない
                        leftOverflow: svg
                            ? Math.round(
                                  svg.getBoundingClientRect().left -
                                      scroller.getBoundingClientRect().left +
                                      scroller.scrollLeft
                              )
                            : 0,
                        svgWidth: svg ? Math.round(svg.getBoundingClientRect().width) : 0,
                        scrollWidth: scroller.scrollWidth,
                        wrapperBg: getComputedStyle(wrapper).backgroundColor,
                        nodeFill: node ? getComputedStyle(node).fill : null,
                    };
                });
            });

            expect(diagrams.length, `${route.path} should contain at least one diagram`).toBeGreaterThan(0);

            for (const diagram of diagrams) {
                const where = `${route.path} diagram #${diagram.index}`;
                expect(diagram.failed, `${where} should render without a mermaid error`).toBe(false);
                expect(diagram.hasSvg, `${where} should produce an svg`).toBe(true);

                // 左端切れ: 中央寄せ + overflow の組み合わせで起きる典型的な描画欠落
                expect(diagram.leftOverflow, `${where} should not overflow past the scroll origin`)
                    .toBeGreaterThanOrEqual(0);

                // スクロールで図の右端まで到達できること（1px はレイアウト丸め誤差の許容）
                expect(
                    diagram.scrollWidth + 1,
                    `${where} should be fully reachable by horizontal scrolling`
                ).toBeGreaterThanOrEqual(diagram.leftOverflow + diagram.svgWidth);
            }

            if (route.expectsLightTheme) {
                for (const diagram of diagrams) {
                    const where = `${route.path} diagram #${diagram.index}`;
                    // %%{init}%% が壊れているとグローバルのダークテーマへ黙ってフォールバックする
                    expect(diagram.nodeFill, `${where} should not fall back to the global dark theme`)
                        .not.toBe(GLOBAL_DARK_NODE_FILL);
                    expect(diagram.wrapperBg, `${where} should not keep the global dark card background`)
                        .not.toBe(GLOBAL_DARK_CARD_BG);
                }
            }
        });
    }
});
