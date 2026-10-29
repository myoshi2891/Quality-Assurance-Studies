import { test, expect } from '@playwright/test';
import React from 'react';
import { load } from 'cheerio';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../docs/migration-inventory/iso-14496-22-guide.json';
import { sourceModule } from '../tests/helpers/source-module';
const base = 'app/iso-14496-22-guide';
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
// Apply the reviewed content changes to the archived comparison document.
const reviewedSource = load(inventory.originalBody);
reviewedSource('a[href="https://www.iso.org/standard/87621.html"]').closest('tr').remove();
// Stop at the glossary so bibliography numbering cannot replace its terms.
const references = reviewedSource('#sources').nextUntil('#用語集', '.table-scroll');
references.find('a[href^="http"]').attr('target', '_blank').attr('rel', 'noopener noreferrer');
references.find('tbody tr').each((index, row) => {
    reviewedSource(row).find('td').first().text(String(index + 1));
});
references.find('tbody').each((_, body) => {
    reviewedSource(body).find('tr').each((index, row) => {
        reviewedSource(row).attr('class', index % 2 === 0 ? 'odd' : 'even');
    });
});
references.first().find('tbody tr').first().find('td').eq(1).text('ISO公式：ISO/IEC 14496-22:2026（ライフサイクル・1,003ページの記載）');
reviewedSource('.callout-new').filter((_, el) => reviewedSource(el).text().includes('3次ベジェ曲線')).find('code').text('GLYF');
reviewedSource('.callout-note').filter((_, el) => reviewedSource(el).text().includes('2段階を担う')).find('p').html('この「<strong>シェーピング（GSUB/GPOS）→\n描画</strong>」のうち、シェーピングを担う代表的なオープンソース実装が\n<strong>HarfBuzz</strong>です。描画は別の段階で、レンダラーが担います。Step 8 で触れます。');
reviewedSource('td').filter((_, el) => reviewedSource(el).text() === '65,536通り（GIDは最大65,535）').text('値は65,536通り。従来のグリフ数は最大65,535個（有効なGIDは0–65,534）');
reviewedSource('td').filter((_, el) => reviewedSource(el).text() === 'FDIS時点の掲載値が1,003ページ。発行版の値は未確認').text('発行版はISO公式ページで1,003ページと確認済み。ただし、規格本文は未確認');
const officialTable = reviewedSource('#-公式情報で確認できたこと').next('.table-scroll');
const secondaryTable = officialTable.clone();
secondaryTable.find('tbody').empty().append(officialTable.find('tbody tr').last());
officialTable.after('<h3 id="二次情報に基づく事項">二次情報に基づく事項</h3>', secondaryTable);
const reviewedBody = reviewedSource('body').html()!;
const selectors = ['.main','.hero','.eyebrow','.hero-title','.meta-row','.meta-item','.meta-label','.meta-value','h2','h3','main p:not([hidden])','main ul','main ol','main li','strong','.table-scroll','table','th','td','td strong','td a','.callout','.page-footer','.sidebar-title','.sidebar ul','.sidebar li','.sidebar a','.nav-toggle','hr','main code','pre'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor'];
for (const width of [390,900,901,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
            const own = readFileSync(`${base}/iso-14496-22-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).filter(el => !el.closest('svg')).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.off-page ' });
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
            await expect(page.locator('.nav-toggle')).toHaveCSS('display', width <= 900 ? 'block' : 'none');
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
for (const width of [390,900,901,1440]) {
    for (const [id, diagram] of Object.entries(inventory.diagrams)) {
        test(`${width}px ${id}: source SVG semantics palette and horizontal reachability`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
            const css = preflight + globals + readFileSync(`${base}/iso-14496-22-guide.css`, 'utf8');
            await page.setContent(`<style>${css}</style>${markup()}`);
            await page.addScriptTag({ path: 'node_modules/mermaid/dist/mermaid.min.js' });
            const reference = await page.context().newPage(); await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody}`);
            const collect = (outer: Element) => {
                const norm = (s: string | null) => (s ?? '').replace(/\s+/g,' ').trim();
                const nodes = Array.from(outer.querySelectorAll('g.node'), node => ({ id: node.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''), label: norm(node.querySelector('.nodeLabel')?.textContent ?? ''), shape: node.firstElementChild!.tagName.toLowerCase(), color: getComputedStyle(node.querySelector('.nodeLabel')!).color, fill: getComputedStyle(node.firstElementChild!).fill }));
                const messages = Array.from(outer.querySelectorAll('.messageText'), el => ({ label: norm(el.textContent), fill: getComputedStyle(el).fill }));
                const actors = Array.from(outer.querySelectorAll('text.actor'), el => ({ label: norm(el.textContent), fill: getComputedStyle(el).fill }));
                const labels = Array.from(outer.querySelectorAll('g.edgeLabels > g.edgeLabel'), el => norm(el.textContent)).filter(Boolean);
                const clusters = Array.from(outer.querySelectorAll('g.cluster'), cluster => ({ label: norm(cluster.querySelector('.cluster-label')?.textContent ?? ''), fill: getComputedStyle(cluster.querySelector('rect')!).fill, stroke: getComputedStyle(cluster.querySelector('rect')!).stroke }));
                return { nodes, labels, actors, messages, clusters };
            };
            const expected = await reference.locator('#'+id).evaluate(collect);
            await page.evaluate(async ({ id, chart, globalConfig, fixups }) => {
                const mermaid = (window as unknown as { mermaid: { initialize: (config: object) => void; render: (id: string, chart: string) => Promise<{ svg: string }> } }).mermaid;
                mermaid.initialize(globalConfig); const { svg } = await mermaid.render(`sql-${id}`, chart);
                const inner = document.getElementById(id)!.querySelector('.mermaid-wrapper')!; inner.innerHTML = svg;
                Function(`${fixups};return applySvgFixups;`)()(inner.querySelector('svg'), chart);
            }, { id, chart: DIAGRAMS[id]!, globalConfig, fixups });
            const actual = await page.locator('#'+id).evaluate(collect);
            expect(actual).toEqual(expected);
            const edges = await page.locator('#'+id+' path.flowchart-link').evaluateAll(els => els.map(el => ({ id: el.id.replace(/^sql-mmd-\d+-/,''), dotted: el.classList.contains('edge-pattern-dotted'), start: !!el.getAttribute('marker-start'), end: !!el.getAttribute('marker-end') })));
            expect(edges).toEqual(diagram.edges);
            const reach = await page.locator('#'+id).evaluate(el => { const svg = el.querySelector('svg')!; const initial = svg.getBoundingClientRect().left; el.scrollLeft = el.scrollWidth; return { initial, left: el.getBoundingClientRect().left, movement: initial-svg.getBoundingClientRect().left, scroll: el.scrollLeft, required: el.scrollWidth-el.clientWidth }; });
            expect(reach.initial).toBeGreaterThanOrEqual(reach.left); expect(Math.abs(reach.scroll-reach.required)).toBeLessThanOrEqual(1); expect(Math.abs(reach.movement-reach.scroll)).toBeLessThanOrEqual(1);
            await expect(page.locator('#'+id+' .mermaid-wrapper')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
            await reference.close();
        });
    }
}
