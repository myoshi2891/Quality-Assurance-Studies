import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../docs/migration-inventory/iso-11179-1-2023-guide.json';
import { sourceModule } from '../tests/helpers/source-module';
const base = 'app/iso-11179-1-2023-guide';
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
// レビューで追加した diagram-12 / diagram-14 のテキスト代替を原本にも挿入し、追加分ではなく CSS 差だけを比較する
const textAlternativesBody = ([
    ['Section08.tsx', '\n<h3 id="7-3-命名定義のルールは別パートへ">'],
    ['Section10.tsx', '\n<h3 id="9-2-設計時のチェックリスト">'],
] as const).reduce((body, [file, anchor]) => {
    const Section = sourceModule(`${base}/${file}`).default as React.ComponentType;
    const list = renderToStaticMarkup(React.createElement(Section)).match(/<ol>[\s\S]*?<\/ol>/)?.[0];
    if (!list || !body.includes(anchor)) throw new Error(`Missing ${file} text alternative or source anchor`);
    return body.replace(anchor, `\n${list}${anchor}`);
}, inventory.originalBody);
// レビューで更新した Part 32 の発行状態、付録 C の出典 S22・根拠行、YAML の許容範囲（min/max）を原本にも反映する
const reviewedBody = ([
    ['<td>Metamodel for concept system registration</td>\n<td><strong>概念体系</strong>の登録</td>\n<td>Part 1 の目次で記載を確認</td>',
     '<td>Metamodel for concept system registration</td>\n<td><strong>概念体系</strong>の登録</td>\n<td>2023年1月発行（Edition 1）</td>'],
    ['https://www.iso.org/standard/81743.html</a></td>\n</tr>\n',
     'https://www.iso.org/standard/81743.html</a></td>\n</tr>\n<tr class="odd">\n<td>S22</td>\n<td>ISO/IEC 11179-32:2023（概念体系登録のメタモデル）</td>\n<td><a href="https://www.iso.org/standard/78926.html" target="_blank" rel="noopener noreferrer">https://www.iso.org/standard/78926.html</a></td>\n</tr>\n'],
    ['<td>Part 34 の発行（2024年5月）</td>\n<td>S5</td>\n</tr>\n',
     '<td>Part 34 の発行（2024年5月）</td>\n<td>S5</td>\n</tr>\n<tr class="even">\n<td>Part 32 の発行（2023年1月）</td>\n<td>S22</td>\n</tr>\n'],
    ...([['0', '300'], ['0.0', '40.0']] as const).map(([min, max]) => [
     `<span class="tk-k">permissible_range</span>: <span class="tk-n">[${min}, ${max}]</span>`,
     `<span class="tk-k">permissible_range</span>:\n      <span class="tk-k">min</span>: <span class="tk-n">${min}</span>\n      <span class="tk-k">max</span>: <span class="tk-n">${max}</span>`] as const),
] as const).reduce((body, [from, to]) => {
    if (body.split(from).length !== 2) throw new Error(`Missing or ambiguous reviewed source text: ${from}`);
    return body.replace(from, to);
}, textAlternativesBody);
const selectors = ['.main','.hero','.eyebrow','.hero-title','.hero-sub','.hero-meta','.hm','.hm-l','.hm-v','.hero-note','h2','h3','h4','main p','main ul','main ol','main li','strong','.table-scroll','table','th','td','td strong','td a','.callout','.callout-icon','.callout-body','.callout-title','.page-footer','.sb-title','.sidebar ul','.sidebar li','.sidebar a','.menu-btn','main code','pre','pre span','.checklist-card','.checklist','.checklist label','.checklist li','.cb','.checklist-progress','.cp-bar','.cp-fill','.cp-count'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor'];
for (const width of [390,960,961,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
            const own = readFileSync(`${base}/iso-11179-1-2023-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).filter(el => !el.closest('svg')).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.iso-11179-page ' });
            const differences: unknown[] = [];
            for (const selector of selectors) {
                const a = actual[selector]!, e = expected[selector]!;
                if (a.length !== e.length) differences.push([selector, 'count', a.length, e.length]);
                for (let i=0; i<Math.min(a.length,e.length); i++) for (const prop of properties) if (a[i]![prop] !== e[i]![prop]) differences.push([selector,i,prop,a[i]![prop],e[i]![prop]]);
            }
            expect(differences).toEqual([]);
            for (let i = 0; i < inventory.groups.codes.items.length; i++) {
                const block = page.locator('pre').nth(i), source = reference.locator('pre').nth(i);
                expect(await block.textContent()).toBe(inventory.groups.codes.items[i]!.code);
                expect((await block.boundingBox())!.height).toBe((await source.boundingBox())!.height);
                const ends = await block.evaluate(el => { el.scrollLeft = el.scrollWidth; return { actual: el.scrollLeft, required: el.scrollWidth-el.clientWidth }; });
                expect(Math.abs(ends.actual-ends.required)).toBeLessThanOrEqual(1);
            }
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
            await expect(page.locator('.hero')).toHaveCSS('min-height','0px');
            await expect(page.locator('.menu-btn')).toHaveCSS('display', width <= 960 ? 'block' : 'none');
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
for (const width of [390,960,961,1440]) {
    for (const [id, diagram] of Object.entries(inventory.diagrams)) {
        test(`${width}px ${id}: source SVG semantics palette and horizontal reachability`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
            const css = preflight + globals + readFileSync(`${base}/iso-11179-1-2023-guide.css`, 'utf8');
            await page.setContent(`<style>${css}</style>${markup()}`);
            await page.addScriptTag({ path: 'node_modules/mermaid/dist/mermaid.min.js' });
            const reference = await page.context().newPage(); await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody}`);
            const collect = (outer: Element) => {
                const norm = (s: string | null) => (s ?? '').replace(/\s+/g,' ').trim();
                const nodes = Array.from(outer.querySelectorAll('g.node'), node => ({ id: node.id.replace(/^.*flowchart-/,'').replace(/^.*classId-/,'').replace(/-\d+$/,''), label: norm(node.querySelector('.nodeLabel')?.textContent ?? ''), shape: node.firstElementChild?.tagName === 'polygon' ? 'diamond' : node.firstElementChild?.tagName === 'g' && node.querySelector('path') ? 'stadium' : 'rect', color: getComputedStyle(node.querySelector('.nodeLabel')!).color, fill: getComputedStyle(node.querySelector('rect, polygon, path')!).fill }));
                const messages = Array.from(outer.querySelectorAll('.messageText'), el => ({ label: norm(el.textContent), fill: getComputedStyle(el).fill }));
                const actors = Array.from(outer.querySelectorAll('text.actor'), el => ({ label: norm(el.textContent), fill: getComputedStyle(el).fill }));
                const labels = Array.from(outer.querySelectorAll('g.edgeLabels > g.edgeLabel'), el => norm(el.textContent));
                const clusters = Array.from(outer.querySelectorAll('g.cluster'), el => ({ id: el.id.replace(/^mdr-diagram-\d+-/,''), label: norm(el.querySelector('.cluster-label')?.textContent ?? '') })).sort((a,b)=>a.id.localeCompare(b.id));
                const relations = Array.from(outer.querySelectorAll('path.relation'), el => ({ id: el.id.replace(/^mdr-diagram-\d+-/,''), start: (el.getAttribute('marker-start') ?? '').replace(/^.*class-/,''), end: (el.getAttribute('marker-end') ?? '').replace(/^.*class-/,'') }));
                nodes.sort((a,b)=>a.id.localeCompare(b.id));
                return { nodes, labels, actors, messages, clusters, relations };
            };
            const expected = await reference.locator('#'+id).evaluate(collect);
            // レビューで追加した diagram-5 の移行元ノード（原本 SVG に座標なし）は、同じ「従来の構成」ノードの配色で期待値へ補う
            const added = diagram.nodes.filter(n => n.position === null);
            const template = expected.nodes.find(n => n.id === 'N4_O3');
            if (added.length && template) {
                expected.nodes.push(...added.map(n => ({ ...template, id: n.id, label: n.label.replace(/<br>/g, '') })));
                expected.nodes.sort((a,b)=>a.id.localeCompare(b.id));
            }
            await page.evaluate(async ({ id, chart, globalConfig, fixups }) => {
                const mermaid = (window as unknown as { mermaid: { initialize: (config: object) => void; render: (id: string, chart: string) => Promise<{ svg: string }> } }).mermaid;
                mermaid.initialize(globalConfig); const { svg } = await mermaid.render(`mdr-${id}`, chart);
                const inner = document.getElementById(id)!.querySelector('.mermaid-wrapper')!; inner.innerHTML = svg;
                Function(`${fixups};return applySvgFixups;`)()(inner.querySelector('svg'), chart);
            }, { id, chart: DIAGRAMS[id]!, globalConfig, fixups });
            expect(await page.locator('#'+id).evaluate(collect)).toEqual(expected);
            const edges = await page.locator('#'+id+' path.flowchart-link').evaluateAll(els => els.map(el => ({ id: el.id.replace(/^mdr-diagram-\d+-/,''), dotted: el.classList.contains('edge-pattern-dotted'), thick: el.classList.contains('edge-thickness-thick'), arrow: !!el.getAttribute('marker-end') })));
            // Mermaid groups cluster edges in its SVG; compare every connection independently of that DOM regrouping.
            expect(edges.sort((a,b)=>a.id.localeCompare(b.id))).toEqual(diagram.edges.map(e => ({ id: `L_${e.from}_${e.to}_0`, dotted: e.dotted, thick: e.thick, arrow: e.arrow })).sort((a,b)=>a.id.localeCompare(b.id)));
            const reach = await page.locator('#'+id).evaluate(el => { const svg = el.querySelector('svg')!; const initial = svg.getBoundingClientRect().left; el.scrollLeft = el.scrollWidth; return { initial, left: el.getBoundingClientRect().left, movement: initial-svg.getBoundingClientRect().left, scroll: el.scrollLeft, required: el.scrollWidth-el.clientWidth }; });
            expect(reach.initial).toBeGreaterThanOrEqual(reach.left); expect(Math.abs(reach.scroll-reach.required)).toBeLessThanOrEqual(1); expect(Math.abs(reach.movement-reach.scroll)).toBeLessThanOrEqual(1);
            await expect(page.locator('#'+id+' .mermaid-wrapper')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
            await reference.close();
        });
    }
}
