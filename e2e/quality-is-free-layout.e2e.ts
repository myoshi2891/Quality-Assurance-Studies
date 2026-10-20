import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../docs/migration-inventory/quality-is-free-guide.json';
import { sourceModule } from '../tests/quality-is-free-guide/source-renderer';
const base = 'app/quality-is-free-guide';
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
const selectors = ['.hero','.hero h1','.hero p','.sidebar-title','.sidebar-sub','.nav-a','.n-num','.content','.content section','.sec-head','.sec-head h2','.content h3','.content p','.content ul:not(.checklist)','.content ol','.content li','.table-wrap','.table-title','table','th','td','thead th','.kv-table th','blockquote','strong','.diagram-caption','.diagram-block > .mermaid-wrapper','.tag','.checklist-counter','.checklist li','.checklist label','.checklist input','.ref-card','.ref-title','.ref-note','.ref-url','.footer'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth'];
for (const width of [390,960,961,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody}`);
            const own = readFileSync(`${base}/quality-is-free-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.quality-is-free-page ' });
            // Header/footer app integration intentionally affects positioning, not these source styles.
            expect(actual).toEqual(expected);
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
            await expect(page.locator('.hero')).toHaveCSS('min-height','0px');
            await expect(page.locator('.mobile-bar')).toHaveCSS('display', width <= 960 ? 'flex' : 'none');
            await reference.close();
        });
    }
    for (const id of Object.keys(inventory.diagrams)) {
        test(`${width}px ${id}: real SVG, source palette and reachable scroll ends`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
            const css = preflight + globals + readFileSync(`${base}/quality-is-free-guide.css`, 'utf8');
            await page.setContent(`<style>${css}</style>${markup()}`);
            await page.addScriptTag({ path: 'node_modules/mermaid/dist/mermaid.min.js' });
            const result = await page.evaluate(async ({ id, chart, globalConfig, fixups }) => {
                const mermaid = (window as unknown as { mermaid: { initialize: (config: object) => void; render: (id: string, chart: string) => Promise<{ svg: string }> } }).mermaid;
                mermaid.initialize(globalConfig);
                const { svg } = await mermaid.render(`qif-${id}`, chart);
                const outer = document.getElementById(id)!; const inner = outer.querySelector('.mermaid-wrapper')!; inner.innerHTML = svg;
                const el = inner.querySelector('svg') as SVGSVGElement;
                Function(`${fixups};return applySvgFixups;`)()(el, chart);
                const initial = el.getBoundingClientRect().left; const left = outer.getBoundingClientRect().left;
                outer.scrollLeft = outer.scrollWidth; const right = outer.scrollLeft; const movement = initial - el.getBoundingClientRect().left; outer.scrollLeft = 0;
                const fills = Array.from(inner.querySelectorAll('.node .label-container'), node => getComputedStyle(node).fill);
                const colors = Array.from(inner.querySelectorAll('.nodeLabel'), node => getComputedStyle(node).color);
                return { fills, colors, initial, left, right, movement, required: outer.scrollWidth - outer.clientWidth, background: getComputedStyle(outer).backgroundColor, innerBackground: getComputedStyle(inner).backgroundColor };
            }, { id, chart: DIAGRAMS[id]!, globalConfig, fixups });
            expect(result.fills.length).toBeGreaterThan(0);
            for (const color of result.fills) expect(['rgb(255, 253, 247)','rgb(201, 196, 239)','rgb(191, 228, 210)']).toContain(color);
            for (const color of result.colors) expect(['rgb(42, 36, 28)','rgb(34, 31, 82)','rgb(18, 55, 34)']).toContain(color);
            expect(result.initial).toBeGreaterThanOrEqual(result.left);
            expect(Math.abs(result.right - result.required)).toBeLessThanOrEqual(1);
            expect(Math.abs(result.movement - result.right)).toBeLessThanOrEqual(1);
            expect(result.background).toBe('rgb(255, 253, 247)'); expect(result.innerBackground).toBe('rgba(0, 0, 0, 0)');
        });
    }
}
