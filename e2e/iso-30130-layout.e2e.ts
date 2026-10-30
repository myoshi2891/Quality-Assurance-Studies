import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { sourceModule } from '../tests/helpers/source-module';
const base='app/iso-30130-guide';
const preflight=readFileSync('node_modules/tailwindcss/preflight.css','utf8');
const globals=readFileSync('app/globals.css','utf8');
const retained=readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css','utf8');
const original=load(readFileSync('archive/html-archive/iso/Iso-30130-guide.html','utf8'));
const inventory={originalCss:original('head style').html()};
function markup() { const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType; return renderToStaticMarkup(React.createElement(Page)); }
const reviewedBody = original('body').html()!;
const selectors=['.main','.hero','.eyebrow','.hero-title','.hero-sub','.hero-lead','.hero-meta','.meta-item','h2','h3','main p','main ul','main ol','main li','main strong','.table-scroll','table','th','td','td strong','td a','.callout','.page-footer','.side-title','.side-title small','.sidebar ul','.sidebar li','.sidebar a','.nav-toggle','main code'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor'];
for (const width of [390,900,901,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
            const own = readFileSync(`${base}/iso-30130-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).filter(el => !el.closest('svg') && !el.closest('[hidden]')).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.iso30130-page ' });
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
for(let i=0;i<7;i++)test(`diagram ${i}: rendered labels, shapes and connections match source SVG`,async({page})=>{
 const charts=sourceModule(base+'/diagrams.ts') as Record<string,string>;
 await page.setContent(reviewedBody);
 const collect=(el:Element)=>({nodes:Array.from(el.querySelectorAll('g.node'),n=>({label:(n.querySelector('.nodeLabel')?.textContent??'').replace(/\s+/g,' ').trim(),shape:n.querySelector('rect,polygon,circle,path')?.tagName})),edges:el.querySelectorAll('.edgePaths path').length,clusters:Array.from(el.querySelectorAll('.cluster-label'),n=>(n.textContent??'').replace(/\s+/g,' ').trim())});
 const expected=await page.locator(`#mermaid-diagram-${i}`).evaluate(collect);
 await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
 const svg=await page.evaluate(async chart=>{const m=(window as unknown as {mermaid:{initialize:(config:object)=>void;render:(id:string,chart:string)=>Promise<{svg:string}>}}).mermaid;m.initialize({startOnLoad:false,securityLevel:'loose'});return (await m.render('diagram-check',chart)).svg;},charts[`DIAGRAM_${i}`]!);
 await page.setContent(`<div id="rendered">${svg}</div>`);
 expect(await page.locator('#rendered').evaluate(collect)).toEqual(expected);
});
