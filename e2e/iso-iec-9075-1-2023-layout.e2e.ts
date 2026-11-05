import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../docs/migration-inventory/iso-iec-9075-1-2023-guide.json';
import { sourceModule } from '../tests/helpers/source-module';
const base = 'app/iso-iec-9075-1-2023-guide';
const globals = readFileSync('node_modules/tailwindcss/preflight.css','utf8') + readFileSync('app/globals.css','utf8');
const retained = readFileSync('app/iso-9075-1-guide/iso-9075-1-guide.css','utf8');
const shared = readFileSync('components/Mermaid.tsx','utf8');
const initialization = shared.match(/mermaid.initialize\((\{[\s\S]*?\n\})\);/)?.[1];
if (!initialization) throw new Error('Missing shared Mermaid initialization');
const globalConfig = Function(`return (${initialization});`)() as object;
const start = shared.indexOf('function applySvgFixups');
const fixups = transformSync(shared.slice(start,shared.indexOf('/**',start)), { filename:'fixups.ts',jsc:{parser:{syntax:'typescript'}} }).code as string;
const markup = () => { const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType; return renderToStaticMarkup(React.createElement(Page)); };
const selectors = ['.main','.hero','.eyebrow','.hero-title','.hero-meta','.hero-meta .m','.hero-meta .l','.hero-meta .v','.hero-links','h2','h3','main p:not([hidden])','main ul','main ol','main li','main strong','.table-scroll','table','th','td','td strong','td a','.callout-tip','.callout-warn','.callout-note','.callout-icon','.callout-body','.page-footer','.side-title','.side-sub','.sidebar ul','.sidebar li','.sidebar a','.nav-toggle','hr','main code','pre','.gloss-grid','.gloss-card','.gloss-icon','.gloss-term','.gloss-def','.faq-list','.faq-card','.faq-card summary','.faq-a','.qa-badge','.checklist-card','.cp-title','.cp-pct','.cnt','.cp-reset','.bar','.fill','.ck-row','.ck-box','.ck-num','.ck-text','.ck-done'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','lineHeight','letterSpacing','marginTop','marginRight','marginBottom','marginLeft','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','textTransform','verticalAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor'];
for (const width of [390,900,901,1440]) for (const order of ['before','after'] as const) {
    test(`${width}px CSS ${order}: every original design element, SQL line height, FAQ and hover`, async ({page}) => {
        await page.setViewportSize({width,height:900}); const reference=await page.context().newPage(); await reference.setViewportSize({width,height:900});
        await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody}`);
        const own=readFileSync(`${base}/guide.css`,'utf8');
        await page.setContent(`<style>${globals}${order==='before'?retained+own:own+retained}</style>${markup()}`);
        const collect=({root,selectors,properties}:{root:string;selectors:string[];properties:string[]})=>Object.fromEntries(selectors.map(selector=>[selector,Array.from(document.querySelectorAll(root+selector)).filter(el=>!el.closest('svg')).map(el=>{const style=getComputedStyle(el);return Object.fromEntries(properties.map(key=>[key,style[key as keyof CSSStyleDeclaration]]));})]));
        const expected=await reference.evaluate(collect,{root:'',selectors,properties}),actual=await page.evaluate(collect,{root:'.sql-framework-page ',selectors,properties});
        const differences: unknown[]=[];
        for(const selector of selectors){const a=actual[selector]!,e=expected[selector]!;if(a.length!==e.length)differences.push([selector,'count',a.length,e.length]);for(let i=0;i<Math.min(a.length,e.length);i++)for(const prop of properties)if(a[i]![prop]!==e[i]![prop])differences.push([selector,i,prop,a[i]![prop],e[i]![prop]]);}
        expect(differences).toEqual([]);
        for (let i=0;i<2;i++) { const block=page.locator('pre').nth(i),source=reference.locator('pre').nth(i);expect(await block.textContent()).toBe(inventory.groups.codes.items[i]!.code);expect((await block.boundingBox())!.height).toBe((await source.boundingBox())!.height); }
        expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
        for (const selector of ['.hero','h3','.ck-box','.faq-chev']) for(const pseudo of ['::before','::after']) {
            const snapshot=(el:Element,pseudo:string)=>{const s=getComputedStyle(el,pseudo);return [s.content,s.width,s.height,s.backgroundImage,s.backgroundColor,s.position,s.transform];};
            expect(await page.locator(selector).first().evaluate(snapshot,pseudo)).toEqual(await reference.locator(selector).first().evaluate(snapshot,pseudo));
        }
        for(const browser of [page,reference])await browser.locator('.faq-card summary').first().click();
        await expect(page.locator('.faq-card').first()).not.toHaveAttribute('open');
        const row=(el:Element)=>Array.from(el.children,n=>[getComputedStyle(n).backgroundColor,getComputedStyle(n).color]);
        await page.locator('tbody tr').first().hover();await reference.locator('tbody tr').first().hover();expect(await page.locator('tbody tr').first().evaluate(row)).toEqual(await reference.locator('tbody tr').first().evaluate(row));
        await reference.close();
    });
}
for(const width of [390,1440])for(const [id,diagram]of Object.entries(inventory.diagrams)) {
    test(`${width}px ${id}: exact SVG node and edge semantics, palette and scroll reachability`,async({page})=>{
        await page.setViewportSize({width,height:900});await page.setContent(`<style>${globals}${readFileSync(`${base}/guide.css`,'utf8')}</style>${markup()}`);
        await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
        const {DIAGRAMS}=sourceModule(`${base}/diagrams.ts`) as {DIAGRAMS:Record<string,string>};
        const reference=await page.context().newPage();await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody}`);
        const collect=(outer:Element)=>{
            const norm=(s:string|null)=>(s??'').replace(/\s+/g,' ').trim();
            const nodes=Array.from(outer.querySelectorAll('g.node'),n=>({id:n.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''),label:norm(n.querySelector('.nodeLabel')?.textContent??''),color:getComputedStyle(n.querySelector('.nodeLabel')!).color,fill:getComputedStyle(n.firstElementChild!).fill}));
            const labels=Array.from(outer.querySelectorAll('g.edgeLabels > g.edgeLabel'),n=>norm(n.textContent));
            const edges=Array.from(outer.querySelectorAll('g.edgePaths path[data-id]'),n=>({id:n.getAttribute('data-id')||n.id,dotted:n.classList.contains('edge-pattern-dotted'),stroke:getComputedStyle(n).stroke}));
            const clusters=Array.from(outer.querySelectorAll('g.cluster rect'),n=>({fill:getComputedStyle(n).fill,stroke:getComputedStyle(n).stroke}));
            return {nodes,labels,edges,clusters};
        };
        const expected=await reference.locator('#'+id).evaluate(collect);
        await page.evaluate(async({id,chart,globalConfig,fixups})=>{const mermaid=(window as unknown as {mermaid:{initialize:(c:object)=>void;render:(id:string,chart:string)=>Promise<{svg:string}>}}).mermaid;mermaid.initialize(globalConfig);const {svg}=await mermaid.render('sql-new-'+id,chart);const inner=document.getElementById(id)!.querySelector('.mermaid-wrapper')!;inner.innerHTML=svg;Function(`${fixups};return applySvgFixups;`)()(inner.querySelector('svg'),chart);},{id,chart:DIAGRAMS[id]!,globalConfig,fixups});
        expect(await page.locator('#'+id).evaluate(collect)).toEqual(expected);
        expect(await page.locator('#'+id+' .nodeLabel').count()).toBe(diagram.labels.length);
        const reach=await page.locator('#'+id).evaluate(el=>{const svg=el.querySelector('svg')!,initial=svg.getBoundingClientRect().left;el.scrollLeft=el.scrollWidth;return {initial,left:el.getBoundingClientRect().left,movement:initial-svg.getBoundingClientRect().left,scroll:el.scrollLeft,required:el.scrollWidth-el.clientWidth};});
        expect(reach.initial).toBeGreaterThanOrEqual(reach.left);expect(Math.abs(reach.scroll-reach.required)).toBeLessThanOrEqual(1);expect(Math.abs(reach.movement-reach.scroll)).toBeLessThanOrEqual(1);
        await expect(page.locator('#'+id+' .mermaid-wrapper')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');await reference.close();
    });
}
for (const width of [390,900,901,1440]) test(`${width}px: every anchor clears the fixed header, disclaimer and mobile toggle`,async({page})=>{
    await page.setViewportSize({width,height:900});
    const banner=width<=900?76:38;
    await page.setContent(`<style>:root{--disclaimer-height:${banner}px}${globals}${readFileSync(`${base}/guide.css`,'utf8')}</style>${markup()}`);
    await page.evaluate(banner => document.documentElement.style.setProperty('--disclaimer-height', `${banner}px`), banner);
    expect(await page.locator('main h2[id],main h3[id]').evaluateAll(els=>els.map(el=>getComputedStyle(el).scrollMarginTop))).toEqual(Array(45).fill(`${(width<=900?120:80)+banner}px`));
    await expect(page.locator('.sidebar')).toHaveCSS('top',`${60+banner}px`);
    await expect(page.locator('.nav-toggle')).toHaveCSS('top',`${72+banner}px`);
});
