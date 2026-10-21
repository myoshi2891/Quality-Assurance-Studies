import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../docs/migration-inventory/iec-62304-beginner-guide.json';
import { sourceModule } from '../tests/helpers/source-module';
const base = 'app/iec-62304-beginner-guide';
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
const selectors = ['.main','.hero','.eyebrow','.hero-title','.hero-sub','.hero-meta','.meta-item','.meta-label','.meta-value','h2','h3','h4','main p','main ul','main ol','main li','strong','.table-scroll','table','th','td','td strong','td a','.callout','.callout-icon','.callout-body','.callout-body > p','.callout-body > ul','.page-footer','.brand','.brand-mark','.brand-text','.nav-list','.nav-sub','.nav-list a','.nav-sub a','.nav-h2','.nav-toggle'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX'];
for (const width of [390,960,961,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody}`);
            const own = readFileSync(`${base}/iec-62304-beginner-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.iec-62304-page ' });
            for (const selector of selectors) expect(actual[selector], selector).toEqual(expected[selector]);
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
            await expect(page.locator('.hero')).toHaveCSS('min-height','0px');
            await expect(page.locator('.nav-toggle')).toHaveCSS('display', width <= 960 ? 'block' : 'none');
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
    for (const [id, diagram] of Object.entries(inventory.diagrams)) {
        test(`${width}px ${id}: real SVG preserves nodes edges labels clusters and scroll ends`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
            const css = preflight + globals + readFileSync(`${base}/iec-62304-beginner-guide.css`, 'utf8');
            await page.setContent(`<style>${css}</style>${markup()}`); await page.addScriptTag({ path: 'node_modules/mermaid/dist/mermaid.min.js' });
            const result = await page.evaluate(async ({ id, chart, globalConfig, fixups }) => {
                const mermaid = (window as unknown as { mermaid: { initialize: (config: object) => void; render: (id: string, chart: string) => Promise<{ svg: string }> } }).mermaid;
                mermaid.initialize(globalConfig); const { svg } = await mermaid.render(`iec-${id}`, chart);
                const outer = document.getElementById(id)!; const inner = outer.querySelector('.mermaid-wrapper')!; inner.innerHTML = svg;
                const el = inner.querySelector('svg') as SVGSVGElement; Function(`${fixups};return applySvgFixups;`)()(el, chart);
                const initial = el.getBoundingClientRect().left; const left = outer.getBoundingClientRect().left; outer.scrollLeft = outer.scrollWidth; const right = outer.scrollLeft; const movement = initial - el.getBoundingClientRect().left; outer.scrollLeft = 0;
                const norm = (s: string | null) => (s ?? '').replace(/\s+/g,' ').trim();
                const nodes = Array.from(inner.querySelectorAll('g.node'), node => ({ id: node.id.replace(/^flowchart-/,'').replace(/-\d+$/,''), label: norm(node.querySelector('.nodeLabel')?.textContent ?? ''), shape: node.firstElementChild?.tagName === 'polygon' ? 'diamond' : 'rect', color: getComputedStyle(node.querySelector('.nodeLabel')!).color, fill: getComputedStyle(node.firstElementChild!).fill, x: node.getBoundingClientRect().x, y: node.getBoundingClientRect().y }));
                const edges = Array.from(inner.querySelectorAll('path.flowchart-link'), edge => ({ id: edge.id, dotted: edge.classList.contains('edge-pattern-dotted') }));
                const labels = Array.from(inner.querySelectorAll('g.edgeLabels > g.edgeLabel'), label => norm(label.textContent));
                const clusters = Array.from(inner.querySelectorAll('g.cluster'), cluster => ({ id: cluster.id, label: norm(cluster.querySelector('.cluster-label')?.textContent ?? '') }));
                return { nodes, edges, labels, clusters, initial, left, right, movement, required: outer.scrollWidth - outer.clientWidth, background: getComputedStyle(outer).backgroundColor, innerBackground: getComputedStyle(inner).backgroundColor };
            }, { id, chart: DIAGRAMS[id]!, globalConfig, fixups });
            const text = (s: string) => s.replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim();
            expect(result.nodes.map(n => ({ id: n.id, label: n.label, shape: n.shape })).sort((a,b) => a.id.localeCompare(b.id))).toEqual(diagram.nodes.map(n => ({ ...n, label: text(n.label) })).sort((a,b) => a.id.localeCompare(b.id)));
            expect(result.edges).toHaveLength(diagram.edges.length);
            for (const edge of diagram.edges) expect(result.edges).toContainEqual({ id: `L_${edge.from}_${edge.to}_0`, dotted: edge.dotted });
            expect(result.labels).toEqual(diagram.edges.map(e => text(e.label)));
            expect(result.clusters.sort((a,b) => a.id.localeCompare(b.id))).toEqual([...diagram.clusters].sort((a,b) => a.id.localeCompare(b.id)));
            for (const node of result.nodes) { expect(node.fill).toBe('rgb(19, 37, 63)'); expect(node.color).toBe('rgb(230, 237, 247)'); }
            if (['mmd-2','mmd-17'].includes(id)) expect(new Set(result.nodes.map(n => Math.round(n.x))).size).toBe(1);
            if (id === 'mmd-6') expect(result.nodes[0]!.y).toBeLessThan(result.nodes[1]!.y);
            expect(result.initial).toBeGreaterThanOrEqual(result.left);
            expect(Math.abs(result.right - result.required)).toBeLessThanOrEqual(1); expect(Math.abs(result.movement - result.right)).toBeLessThanOrEqual(1);
            expect(result.background).toBe('rgb(9, 21, 38)'); expect(result.innerBackground).toBe('rgba(0, 0, 0, 0)');
        });
    }
}
