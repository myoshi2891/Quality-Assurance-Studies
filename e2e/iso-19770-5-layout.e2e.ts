import { test, expect } from '@playwright/test';
import React from 'react';
import { load } from 'cheerio';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../docs/migration-inventory/iso-19770-5-guide.json';
import { sourceModule } from '../tests/helpers/source-module';
const base = 'app/iso-19770-5-guide';
const retained = readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css', 'utf8');
const preflight = readFileSync('node_modules/tailwindcss/preflight.css', 'utf8');
const globals = readFileSync('app/globals.css', 'utf8');
const shared = readFileSync('components/Mermaid.tsx', 'utf8');
const initialization = shared.match(/mermaid.initialize\((\{[\s\S]*?\n\})\);/)?.[1];
if (!initialization) throw new Error('Missing shared Mermaid initialization');
const globalConfig = Function(`return (${initialization});`)() as object;
const start = shared.indexOf('function applySvgFixups');
const fixups = transformSync(shared.slice(start, shared.indexOf('/**', start)), { filename: 'fixups.ts', jsc: { parser: { syntax: 'typescript' } } }).code as string;
function markup() { const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType; return renderToStaticMarkup(React.createElement(Page)); }
// レビューで更新した 19770-10 の発行状態と mmd-9 のテキスト代替を原本にも反映し、CSS差だけを比較する
const previouslyReviewedBody = ([
    [
        `                                <tr class="even">
                                    <td><strong>19770-8</strong>:2020</td>
                                    <td>業界プラクティスのマッピング指針</td>
                                    <td>ガイドライン</td>
                                    <td>他の業界慣行と19770シリーズを対応づける文書の作り方</td>
                                </tr>`,
        `                                <tr class="even">
                                    <td><strong>19770-8</strong>:2020</td>
                                    <td>業界プラクティスのマッピング指針</td>
                                    <td>ガイドライン</td>
                                    <td>他の業界慣行と19770シリーズを対応づける文書の作り方</td>
                                </tr>
                                <tr class="odd">
                                    <td><strong>19770-10</strong>:2025</td>
                                    <td>ITAM実装ガイダンス（Guidance for implementing ITAM）</td>
                                    <td>技術仕様書（TS・第1版 / Edition 1）</td>
                                    <td>ITAMを実装するための実践的な指針（Technical Specification）</td>
                                </tr>`,
    ],
    [
        `                                <tr class="even">
                                    <td>19770-10</td>
                                    <td>
                                        19770-1とMSS（マネジメントシステム規格）のガイダンス（技術報告書の可能性）
                                    </td>
                                </tr>
                                <tr class="odd">
                                    <td>19770-11</td>
                                    <td>ITAMシステムの審査・認証を行う機関への要求事項</td>
                                </tr>`,
        `                                <tr class="even">
                                    <td>19770-11</td>
                                    <td>ITAMシステムの審査・認証を行う機関への要求事項</td>
                                </tr>`,
    ],
    [
        `                    <h3 id="8-2-初学者向け5ステップ学習プラン">`,
        `                    <p id="mmd-9-desc">「何を知りたいですか？」という問いから、5つの目的ごとに読む規格へ進みます。まず全体を知りたい場合は全体像と用語（19770-5を読む）、運用体制・認証は組織の仕組みを作る（19770-1を読む）、インストール状況はソフトの識別データ（19770-2とNISTIR 8060）、ライセンス条件はライセンス権利のデータ（19770-3を読む）、利用量の測定は利用実績の計測データ（19770-4を読む）へ進みます。</p>\n                    <h3 id="8-2-初学者向け5ステップ学習プラン">`,
    ],
] as const).reduce((body, [from, to]) => {
    if (body.split(from).length !== 2) throw new Error(`Missing or ambiguous reviewed source text: ${from}`);
    return body.replace(from, to);
}, inventory.originalBody);
// Keep the archived CSS comparison aligned with the additional reviewed content.
const reviewedSource = load(previouslyReviewedBody);
const publishedParts = reviewedSource('#4-1-各パートの役割').next('.table-scroll').find('tbody');
publishedParts.find('tr').filter((_, row) => reviewedSource(row).find('strong').first().text() === '19770-8').attr('class', 'odd').before(`<tr class="even">
<td><strong>19770-6</strong>:2024</td>
<td>ハードウェア識別タグ</td>
<td>データ標準</td>
<td>ハードウェアを識別・説明するためのデータ形式</td>
</tr>`);
publishedParts.find('tr').filter((_, row) => reviewedSource(row).find('strong').first().text() === '19770-10').attr('class', 'even').after(`<tr class="odd">
<td><strong>19770-11</strong>:2021</td>
<td>ITAMシステムの審査・認証を行う機関への要求事項</td>
<td>国際規格（第1版 / Edition 1）</td>
<td>19770-1に基づくITAMシステムの審査・認証を行う機関への要求事項と指針</td>
</tr>`);
publishedParts.append(`<tr class="even">
<td><strong>19770-13</strong>:2026</td>
<td>ITAMシステムへの持続可能性の組込みに関する指針</td>
<td>発行済み・技術仕様書（TS・第1版 / Edition 1）</td>
<td>IT資産マネジメントシステム（ITAMS）に持続可能性の観点を組み込むためのガイダンス</td>
</tr>`);
const plannedParts = reviewedSource('#4-3-今後追加が計画されているパート');
plannedParts.next('p').html('ITAM Standardsの「Coming Soon」ページは古い計画資料です。以下では現行の改訂計画と過去の計画を区別しています。現行の改訂計画として確認できるのは19770-5と19770-11（第2版）です。19770-7などの過去の計画は現行計画ではなく、最新状況はISO公式で確認してください（<strong>計画段階のため変更・中止の可能性あり</strong>）。');
const plannedTable = plannedParts.nextAll('.table-scroll').first();
plannedTable.find('th').first().text('パート（現行計画・過去の計画）');
plannedTable.find('tbody tr').filter((_, row) => reviewedSource(row).find('td').first().text().trim() === '19770-2').find('td').last().text('過去の計画（現行の改訂計画は未確認）：SWID 第3版の改訂');
const historicalPart8 = plannedTable.find('tbody tr').filter((_, row) => reviewedSource(row).find('td').first().text().trim() === '19770-8の次版');
historicalPart8.find('td').first().text('19770-8');
historicalPart8.find('td').last().text('過去の計画：業界プラクティスと19770ファミリーを相互にマッピングするための指針（2020年版は発行済み。次版の改訂計画は未確認）');
plannedTable.find('tbody tr').filter((_, row) => reviewedSource(row).find('td').first().text().trim() === '19770-6').remove();
plannedTable.find('tbody tr').filter((_, row) => reviewedSource(row).find('td').first().text().trim() === '19770-7').find('td').last().text('過去の計画（現行計画ではない）：ITAMデータ構造要素のオーケストレーション（技術報告書の可能性）');
plannedTable.find('tbody tr').filter((_, row) => reviewedSource(row).find('td').first().text().trim() === '19770-11').find('td').first().text('19770-11（第2版）');
plannedTable.find('tbody tr').each((index, row) => { reviewedSource(row).attr('class', index % 2 === 0 ? 'odd' : 'even'); });
reviewedSource('a[href="https://itamstandards.org/coming-soon/"]').closest('tr').find('td').last().text('古い計画資料。19770-6:2024、TS 19770-10:2025、19770-11:2021は発行済み。今後の改訂として確認できるのは19770-5と19770-11（第2版）で、19770-7等の過去の計画は現行計画と区別し、最新状況はISO公式で確認する');
reviewedSource('#mmd-7').attr('aria-label', '正確なIT資産データが支える管理活動の関係図').attr('aria-describedby', 'mmd-7-desc').after('<p id="mmd-7-desc">正確なIT資産データ（台帳・SWID等）から、脆弱性管理（影響範囲の特定）、パッチ管理（適用漏れの発見）、ライセンス遵守（監査対応）、コスト最適化へ矢印が伸びています。資産ごとのソフトウェアを把握することで、必要なパッチと未適用の資産を特定できます。</p>');
const reviewedBody = reviewedSource('body').html()!;
const selectors = ['.main','main','.hero','.eyebrow','.hero-title','.hero-sub','.hero-meta','.hero-meta .m','.hero-meta .k','.hero-meta .v','h2','h3','main p:not([id$="-desc"])','main ul','main ol','main li','strong','.table-scroll','table','th','td','td strong','td a','.callout','.callout-icon','.callout-body','.page-footer','.brand','.brand .dot','.brand span','.sidebar ul','.sidebar li','.sidebar a','.nav-toggle','.scrim','main code','.checklist-card','.checklist-progress','.cp-label','.cp-bar','.cp-fill','.cp-count','.checklist label','.checklist input'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor'];
for (const width of [390,980,981,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
            const own = readFileSync(`${base}/iso-19770-5-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).filter(el => !el.closest('svg')).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.itam-page ' });
            const differences: unknown[] = [];
            for (const selector of selectors) {
                const a = actual[selector]!, e = expected[selector]!;
                if (a.length !== e.length) differences.push([selector, 'count', a.length, e.length]);
                for (let i=0; i<Math.min(a.length,e.length); i++) for (const prop of properties) if (a[i]![prop] !== e[i]![prop]) differences.push([selector,i,prop,a[i]![prop],e[i]![prop]]);
            }
            expect(differences).toEqual([]);
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
            await expect(page.locator('.hero')).toHaveCSS('min-height','0px');
            await expect(page.locator('.nav-toggle')).toHaveCSS('display', width <= 980 ? 'block' : 'none');
            for (const pseudo of ['::before','::after']) {
                const props = ['content','backgroundImage','width','height','position','top','right'];
                const snapshot = (el: Element, { pseudo, props }: { pseudo: string; props: string[] }) => Object.fromEntries(props.map(prop => [prop, getComputedStyle(el, pseudo)[prop as keyof CSSStyleDeclaration]]));
                expect(await page.locator('.hero').evaluate(snapshot, { pseudo, props })).toEqual(await reference.locator('.hero').evaluate(snapshot, { pseudo, props }));
            }
            const rowStyles = (row: Element) => ({ background: getComputedStyle(row).backgroundColor, cells: Array.from(row.children, cell => ({ background: getComputedStyle(cell).backgroundColor, color: getComputedStyle(cell).color })) });
            await reference.locator('tbody tr').first().hover(); await page.locator('tbody tr').first().hover();
            expect(await page.locator('tbody tr').first().evaluate(rowStyles)).toEqual(await reference.locator('tbody tr').first().evaluate(rowStyles));
            await reference.close();
        });
    }
}
for (const width of [390,980,981,1440]) {
    for (const [id, diagram] of Object.entries(inventory.diagrams)) {
        test(`${width}px ${id}: source SVG semantics palette and horizontal reachability`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
            const css = preflight + globals + readFileSync(`${base}/iso-19770-5-guide.css`, 'utf8');
            await page.setContent(`<style>${css}</style>${markup()}`);
            await page.addScriptTag({ path: 'node_modules/mermaid/dist/mermaid.min.js' });
            const reference = await page.context().newPage(); await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody}`);
            const collect = (outer: Element) => {
                const norm = (s: string | null) => (s ?? '').replace(/\s+/g,' ').trim();
                const nodes = Array.from(outer.querySelectorAll('g.node'), node => ({ id: node.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''), label: (node.querySelector('.nodeLabel p')!.innerHTML).split(/<br\s*\/?\s*>/i).map(line => { const span = document.createElement('span'); span.innerHTML = line; return norm(span.textContent); }), shape: node.firstElementChild!.tagName.toLowerCase(), color: getComputedStyle(node.querySelector('.nodeLabel')!).color, fill: getComputedStyle(node.firstElementChild!).fill, stroke: getComputedStyle(node.firstElementChild!).stroke }));
                const messages = Array.from(outer.querySelectorAll('.messageText'), el => ({ label: norm(el.textContent), fill: getComputedStyle(el).fill }));
                const actors = Array.from(outer.querySelectorAll('text.actor'), el => ({ label: norm(el.textContent), fill: getComputedStyle(el).fill }));
                const labels = Array.from(outer.querySelectorAll('g.edgeLabels > g.edgeLabel'), el => norm(el.textContent)).filter(Boolean);
                const clusters = Array.from(outer.querySelectorAll('g.cluster'), cluster => ({ label: norm(cluster.querySelector('.cluster-label')?.textContent ?? ''), fill: getComputedStyle(cluster.querySelector('rect')!).fill, stroke: getComputedStyle(cluster.querySelector('rect')!).stroke }));
                const paths = Array.from(outer.querySelectorAll('path.flowchart-link'), path => { const style = getComputedStyle(path); return {stroke: style.stroke, width: style.strokeWidth, dash: style.strokeDasharray}; });
                const labelColors = Array.from(outer.querySelectorAll('g.edgeLabels > g.edgeLabel'), label => { const span=label.querySelector('span'); return norm(label.textContent) && span ? { color: getComputedStyle(span).color, background: getComputedStyle(span).backgroundColor } : null; }).filter(Boolean);
                return { nodes, labels, actors, messages, clusters, paths, labelColors };
            };
            const expected = await reference.locator('#'+id).evaluate(collect);
            await page.evaluate(async ({ id, chart, globalConfig, fixups }) => {
                const mermaid = (window as unknown as { mermaid: { initialize: (config: object) => void; render: (id: string, chart: string) => Promise<{ svg: string }> } }).mermaid;
                mermaid.initialize(globalConfig); const { svg } = await mermaid.render(`sql-${id}`, chart);
                const inner = document.getElementById(id)!.querySelector('.mermaid-wrapper')!; inner.innerHTML = svg;
                Function(`${fixups};return applySvgFixups;`)()(inner.querySelector('svg'), chart);
            }, { id, chart: DIAGRAMS[id]!, globalConfig, fixups });
            const actual = await page.locator('#'+id).evaluate(collect);
            if (id === 'mmd-6') {
                // This diagram intentionally corrects the archived tag-to-tag lifecycle.
                const rgb = (hex: string) => `rgb(${[1,3,5].map(i => parseInt(hex.slice(i,i+2),16)).join(', ')})`;
                expect(actual.nodes).toEqual(diagram.nodes.map(node => ({
                    id: node.id, label: node.labelLines, shape: node.shape,
                    color: rgb(node.color), fill: rgb(node.fill), stroke: rgb(node.stroke),
                })));
                expect(actual.labels).toEqual(diagram.edges.map(edge => edge.label));
                expect(actual.paths).toEqual(diagram.edges.map(edge => expected.paths[edge.dotted ? 2 : 0]));
                expect(actual.labelColors).toEqual(diagram.edges.map(() => expected.labelColors[0]));
            } else {
                expect(actual).toEqual(expected);
            }
            const edges = await page.locator('#'+id+' path.flowchart-link').evaluateAll(els => els.map(el => ({ id: el.id.replace(/^sql-mmd-\d+-/,''), dotted: el.classList.contains('edge-pattern-dotted'), start: !!el.getAttribute('marker-start'), end: !!el.getAttribute('marker-end') })));
            expect(edges).toEqual(diagram.edges.map(({id,dotted,start,end})=>({id,dotted,start,end})));
            const reach = await page.locator('#'+id).evaluate(el => { const svg = el.querySelector('svg')!; const initial = svg.getBoundingClientRect().left; el.scrollLeft = el.scrollWidth; return { initial, left: el.getBoundingClientRect().left, movement: initial-svg.getBoundingClientRect().left, scroll: el.scrollLeft, required: el.scrollWidth-el.clientWidth }; });
            expect(reach.initial).toBeGreaterThanOrEqual(reach.left); expect(Math.abs(reach.scroll-reach.required)).toBeLessThanOrEqual(1); expect(Math.abs(reach.movement-reach.scroll)).toBeLessThanOrEqual(1);
            await expect(page.locator('#'+id+' .mermaid-wrapper')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
            await reference.close();
        });
    }
}
for (const width of [390,1440]) test(`${width}px completed checklist preserves source progress and strike-through styles`, async ({ page }) => {
    const reference = await page.context().newPage();
    await reference.setViewportSize({width,height:900}); await page.setViewportSize({width,height:900});
    await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody}`);
    const own = readFileSync(`${base}/iso-19770-5-guide.css`, 'utf8');
    await page.setContent(`<style>${preflight+globals+retained+own}</style>${markup()}`);
    const complete = () => { document.querySelectorAll('.checklist li').forEach(li=> { li.classList.add('done'); (li.querySelector('input') as HTMLInputElement).checked = true; }); (document.querySelector('.cp-fill') as HTMLElement).style.width='100%'; document.querySelector('.cp-count b')!.textContent='8'; };
    await page.evaluate(complete); await reference.evaluate(complete);
    const finishProgress = (el: Element) => { void getComputedStyle(el).width; el.getAnimations().forEach(animation => animation.finish()); };
    await page.locator('.cp-fill').evaluate(finishProgress); await reference.locator('.cp-fill').evaluate(finishProgress);
    const snapshot = () => Array.from(document.querySelectorAll('.checklist li, .checklist label, .checklist input, .cp-fill, .cp-count'), el => {const style=getComputedStyle(el);return [style.color,style.textDecorationLine,style.textDecorationColor,style.backgroundImage,style.width,style.fontSize,style.marginTop,style.marginBottom];});
    expect(await page.evaluate(snapshot)).toEqual(await reference.evaluate(snapshot));
    await reference.close();
});
