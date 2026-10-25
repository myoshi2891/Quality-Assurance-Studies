import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { load } from 'cheerio';
import { sourceModule } from '../tests/helpers/source-module';
import inventory from '../docs/migration-inventory/testing-computer-software-guide.json';
const base = 'app/testing-computer-software-guide';
const source = 'archive/html-archive/books/Testing-computer-software-guide.html';
const sourceText = readFileSync(existsSync(source) ? source : 'Testing-computer-software-guide.html','utf8');
const sourceInitialization = sourceText.match(/mermaid.initialize\((\{[\s\S]*?\n                \})\);/)![1];
const sourceConfig = Function('return ('+sourceInitialization+')')() as object;
const original = load(sourceText);
const originalCss = original('style').text(); original('script,link').remove();
const body = original('body').html()!;
const preflight = readFileSync('node_modules/tailwindcss/preflight.css', 'utf8');
const globals = readFileSync('app/globals.css', 'utf8');
const retained = readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css', 'utf8');
const own = () => readFileSync(`${base}/testing-computer-software-guide.css`, 'utf8');
const markup = () => { const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType; const $ = load(renderToStaticMarkup(React.createElement(Page))); $('link').remove(); return $('body').html()!; };
const selectors = ['.main','.hero','.eyebrow','h1','.lead','.hero-meta','.chip','.section','.section-head','.section-icon','h2','h3','h4','.prose p','.prose ul','.prose ol','.prose li','strong','b','.callout','.callout-title','.table-wrap','table','th','td','td strong','.ref-group','.ref-list','.ref-list li','.ref-title','.ref-url','.step-list','.step-list li','.step-list li b','.checklist-counter','.checklist-counter span','.checklist','.checklist label','.checklist input','.footer','.footer p','.sidebar-brand','.nav-list','.nav-list li','.nav-a','.n-num','.mobile-bar','.mobile-bar button'];
const properties = ['color','backgroundColor','backgroundImage','fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','display','marginTop','marginBottom','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderRadius','boxShadow','whiteSpace','textTransform','listStyleType','textDecorationLine','width','maxWidth','webkitTextFillColor'];
for (const width of [390,960,961,1440]) for (const order of ['before','after']) {
    test(`${width}px CSS ${order}: compare every source design element`, async ({page}) => {
        await page.setViewportSize({width,height:900}); const reference = await page.context().newPage(); await reference.setViewportSize({width,height:900});
        await reference.setContent(`<style>${originalCss}</style>${body}`);
        await page.setContent(`<style>${preflight+globals+(order==='before'?retained+own():own()+retained)}</style>${markup()}`);
        const collect = ({root,selectors,properties}:{root:string;selectors:string[];properties:string[]}) => Object.fromEntries(selectors.map(selector=>[selector,Array.from(document.querySelectorAll(root+selector)).map(el=>Object.fromEntries(properties.map(prop=>[prop,getComputedStyle(el)[prop as keyof CSSStyleDeclaration]])))]));
        const expected = await reference.evaluate(collect,{root:'',selectors,properties}); const actual = await page.evaluate(collect,{root:'.tcs-page ',selectors,properties});
        const differences: unknown[] = [];
        for(const selector of selectors){const a=actual[selector]!,e=expected[selector]!; if(a.length!==e.length)differences.push([selector,'count',a.length,e.length]);for(let i=0;i<Math.min(a.length,e.length);i++)for(const prop of properties)if(a[i]![prop]!==e[i]![prop])differences.push([selector,i,prop,a[i]![prop],e[i]![prop]]);}
        expect(differences).toEqual([]);
        for (const pseudo of ['::before','::after']) expect(await page.evaluate(pseudo => getComputedStyle(document.body,pseudo).content,pseudo)).toBe('none');
        expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
        await expect(page.locator('.mobile-bar')).toHaveCSS('display',width<=960?'flex':'none');
        const rowStyles = (el: Element) => ({ background:getComputedStyle(el).backgroundColor, cells:Array.from(el.children, c=>getComputedStyle(c).backgroundColor) });
        await reference.locator('tbody tr').first().hover(); await page.locator('tbody tr').first().hover();
        expect(await page.locator('tbody tr').first().evaluate(rowStyles)).toEqual(await reference.locator('tbody tr').first().evaluate(rowStyles));
        for (const pseudo of ['::before','::after']) {
            const props = ['content','backgroundImage','color','width','height','borderRadius','position'];
            const snapshot = (el:Element,{pseudo,props}:{pseudo:string;props:string[]})=>Object.fromEntries(props.map(prop=>[prop,getComputedStyle(el,pseudo)[prop as keyof CSSStyleDeclaration]]));
            expect(await page.locator('.step-list li').first().evaluate(snapshot,{pseudo,props})).toEqual(await reference.locator('.step-list li').first().evaluate(snapshot,{pseudo,props}));
        }
        await reference.close();
    });
}
for(const width of [390,1440]) for(const id of Object.keys(inventory.diagrams)) {
    test(`${width}px ${id}: original SVG labels, edges, palette and scroll ends`,async({page})=>{
        await page.setViewportSize({width,height:900});await page.setContent(`<style>${preflight+globals+own()}</style>${markup()}`);await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
        const {DIAGRAMS} = sourceModule(`${base}/diagrams.ts`) as {DIAGRAMS:Record<string,string>};
        const result = await page.evaluate(async({chart,originalChart,id,sourceConfig})=>{
            const mermaid=(window as unknown as {mermaid:{initialize:(c:object)=>void;render:(id:string,chart:string)=>Promise<{svg:string}>}}).mermaid;
            const snapshot=(el:Element)=>({nodes:Array.from(el.querySelectorAll('g.node'),n=>({label:n.querySelector('.nodeLabel')?.textContent,fill:getComputedStyle(n.querySelector('rect,path,polygon')!).fill,color:getComputedStyle(n.querySelector('.nodeLabel')!).color})),edges:Array.from(el.querySelectorAll('path.flowchart-link'),e=>({id:e.id.replace(/^.*L_/, 'L_'),dotted:e.classList.contains('edge-pattern-dotted')})),labels:Array.from(el.querySelectorAll('g.edgeLabels > g.edgeLabel'),e=>e.textContent)});
            mermaid.initialize(sourceConfig);const ref=document.createElement('div');document.body.append(ref);ref.innerHTML=(await mermaid.render('source-'+id,originalChart)).svg;const expected=snapshot(ref);ref.remove();
            mermaid.initialize({startOnLoad:false,theme:'dark'});const inner=document.querySelector('#'+id+' .mermaid-wrapper')!;inner.innerHTML=(await mermaid.render('migrated-'+id,chart)).svg;
            const svg=inner.querySelector('svg')!;svg.removeAttribute('width');svg.removeAttribute('height');svg.style.width=svg.viewBox.baseVal.width+'px';svg.style.height='auto';
            const actual=snapshot(inner); const outer=inner.parentElement!.parentElement!;const initial=svg.getBoundingClientRect().left;outer.scrollLeft=outer.scrollWidth;
            return {actual,expected,left:outer.getBoundingClientRect().left,initial,moved:initial-svg.getBoundingClientRect().left,scroll:outer.scrollLeft,required:outer.scrollWidth-outer.clientWidth};
        },{chart:DIAGRAMS[id]!,originalChart:inventory.diagrams[id as keyof typeof inventory.diagrams],id,sourceConfig});
        expect(result.actual).toEqual(result.expected);expect(result.initial).toBeGreaterThanOrEqual(result.left);expect(Math.abs(result.scroll-result.required)).toBeLessThanOrEqual(1);expect(Math.abs(result.moved-result.scroll)).toBeLessThanOrEqual(1);
    });
}
