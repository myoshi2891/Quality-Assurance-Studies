import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../docs/migration-inventory/iso-23009-1-2026-guide.json';
import { sourceModule } from '../tests/helpers/source-module';
const base = 'app/iso-23009-1-2026-guide';
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
const reviewedBody = inventory.originalBody;
const selectors = ['.main','.hero','.eyebrow','.hero-title','.hero-sub','.hero-lead','.hero-meta','.meta-item','.meta-label','.meta-value','h2','h3','h4','main p','main ul','main ol','main li','main strong','.table-scroll','table','th','td','td strong','td a','.callout','.callout-label','.callout p','.page-footer','.sidebar-title','.sidebar-title span','.nav-list','.nav-sub','.sidebar li','.sidebar a','.nav-toggle','main code:not(pre code)'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor'];
for (const width of [390,900,901,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
            const own = readFileSync(`${base}/iso-23009-1-2026-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).filter(el => !el.closest('svg')).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.dash-page ' });
            const differences: unknown[] = [];
            for (const selector of selectors) {
                const a = actual[selector]!, e = expected[selector]!;
                if (a.length !== e.length) differences.push([selector, 'count', a.length, e.length]);
                for (let i=0; i<Math.min(a.length,e.length); i++) for (const prop of properties) if (a[i]![prop] !== e[i]![prop]) differences.push([selector,i,prop,a[i]![prop],e[i]![prop]]);
            }
            expect(differences).toEqual([]);
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
    for (const id of Object.keys(inventory.diagrams)) {
        test(`${width}px ${id}: source SVG semantics palette and horizontal reachability`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
            const css = preflight + globals + readFileSync(`${base}/iso-23009-1-2026-guide.css`, 'utf8');
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
                // Solid-edge endpoint clipping depends on export geometry; compare line type plus endpoints/arrows.
                const paths = Array.from(outer.querySelectorAll('path.flowchart-link'), path => { const style = getComputedStyle(path); return {id: path.id.replace(/^.*?(?=L_)/, ''), start: !!path.getAttribute('marker-start'), end: !!path.getAttribute('marker-end'), stroke: style.stroke, width: style.strokeWidth, dash: path.classList.contains('edge-pattern-solid') ? 'solid' : style.strokeDasharray}; });
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
            expect(actual).toEqual(expected);
            const reach = await page.locator('#'+id).evaluate(el => { const svg = el.querySelector('svg')!; const initial = svg.getBoundingClientRect().left; el.scrollLeft = el.scrollWidth; return { initial, left: el.getBoundingClientRect().left, movement: initial-svg.getBoundingClientRect().left, scroll: el.scrollLeft, required: el.scrollWidth-el.clientWidth }; });
            expect(reach.initial).toBeGreaterThanOrEqual(reach.left); expect(Math.abs(reach.scroll-reach.required)).toBeLessThanOrEqual(1); expect(Math.abs(reach.movement-reach.scroll)).toBeLessThanOrEqual(1);
            await expect(page.locator('#'+id+' .mermaid-wrapper')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
            await reference.close();
        });
    }
}
for (const width of [390,1440]) {
    for (const [index, source] of inventory.codes.entries()) test(`${width}px XML ${index}: exact lines syntax colors and horizontal reachability`, async ({ page }) => {
        await page.setViewportSize({ width, height:900 });
        await page.setContent(`<style>${preflight+globals+retained+readFileSync(`${base}/iso-23009-1-2026-guide.css`, 'utf8')}</style>${markup()}`);
        const pre = page.locator('pre').nth(index);
        expect(await pre.textContent()).toBe(source);
        await expect(pre).toHaveCSS('font-size', '13.5px');
        await expect(pre.locator('code')).toHaveCSS('white-space','pre');
        await expect(pre).toHaveCSS('padding','16px 18px');
        expect(await pre.locator('.code-line').allTextContents()).toEqual(source.split('\n').map((line,i,lines)=>line+(i<lines.length-1?'\n':'')));
        for (const [selector,color] of [['.t-tag','rgb(124, 196, 255)'],['.t-attr','rgb(240, 178, 122)'],['.t-str','rgb(155, 226, 155)']] as const) {
            const colors = await pre.locator(selector).evaluateAll(els=>els.map(el=>getComputedStyle(el).color));
            expect(colors.length).toBeGreaterThan(0); expect(colors.every(value=>value===color)).toBe(true);
        }
        const metrics = await pre.evaluate(el=>({height:el.getBoundingClientRect().height,line:parseFloat(getComputedStyle(el).lineHeight)}));
        expect(Math.abs(metrics.height-(source.split('\n').length*metrics.line+32))).toBeLessThan(1);
        const reach = await pre.evaluate(el=>{const outer=el.closest('.code-block')!;outer.scrollLeft=outer.scrollWidth;return {scroll:outer.scrollLeft,required:outer.scrollWidth-outer.clientWidth};});
        expect(Math.abs(reach.scroll-reach.required)).toBeLessThanOrEqual(1);
    });
}
