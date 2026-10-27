import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { load } from 'cheerio';
import { sourceModule } from '../tests/helpers/source-module';
import inventory from '../docs/migration-inventory/software-testing-craftsmans-approach-guide.json';
const base = 'app/software-testing-craftsmans-approach-guide';
const source = 'archive/html-archive/books/Software-testing-craftsmans-approach-guide.html';
const sourceText = readFileSync(existsSync(source) ? source : 'Software-testing-craftsmans-approach-guide.html','utf8');
const sourceInitialization = sourceText.split('mermaid.initialize(')[1]!.split(');')[0]!;
const sourceConfig = Function('return ('+sourceInitialization+')')() as object;
const original = load(sourceText);
const originalCss = original('style').text(); original('script,link').remove();
// Original document styles form the reference for computed design checks.

const body = original('body').html()!;
const preflight = readFileSync('node_modules/tailwindcss/preflight.css', 'utf8');
const globals = readFileSync('app/globals.css', 'utf8');
const retained = readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css', 'utf8');
const own = () => readFileSync(`${base}/software-testing-craftsmans-approach-guide.css`, 'utf8');
const markup = () => { const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType; const $ = load(renderToStaticMarkup(React.createElement(Page))); $('link').remove(); return $('body').html()!; };
const selectors = ['.content','.hero','.eyebrow','h1','.subtitle','.source-line','.section','h2','h3','.step-num','.prose p','.prose ul','.prose ol','.prose li','strong','.callout','.table-wrap','table','th','td','td strong','.ref-group-title','.ref-list','.ref-item','.ref-title','.ref-url','.footer','.brand','.brand-sub','.sidebar a'];
const properties = ['color','backgroundColor','backgroundImage','fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','display','marginTop','marginBottom','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderRadius','boxShadow','whiteSpace','textTransform','listStyleType','textDecorationLine','width','maxWidth','webkitTextFillColor'];
for (const width of [390,900,901,1440]) for (const order of ['before','after']) {
    test(`${width}px CSS ${order}: compare every source design element`, async ({page}) => {
        await page.setViewportSize({width,height:900}); const reference = await page.context().newPage(); await reference.setViewportSize({width,height:900});
        await reference.setContent(`<style>${originalCss}</style>${body}`);
        await page.setContent(`<style>${preflight+globals+(order==='before'?retained+own():own()+retained)}</style>${markup()}`);
        if (width <= 900) await page.locator('.sidebar').evaluate(el => el.classList.add('open'));
        const collect = ({root,selectors,properties}:{root:string;selectors:string[];properties:string[]}) => Object.fromEntries(selectors.map(selector=>[selector,Array.from(document.querySelectorAll(root+selector)).map(el=>Object.fromEntries(properties.map(prop=>[prop,getComputedStyle(el)[prop as keyof CSSStyleDeclaration]])))]));
        const expected = await reference.evaluate(collect,{root:'',selectors,properties}); const actual = await page.evaluate(collect,{root:'.craftsmans-page ',selectors,properties});
        const differences: unknown[] = [];
        for(const selector of selectors){const a=actual[selector]!,e=expected[selector]!; if(a.length!==e.length)differences.push([selector,'count',a.length,e.length]);for(let i=0;i<Math.min(a.length,e.length);i++)for(const prop of properties)if(a[i]![prop]!==e[i]![prop])differences.push([selector,i,prop,a[i]![prop],e[i]![prop]]);}
        expect([...new Map((differences as string[][]).map(d=>[d[0]+' '+d[2],d])).values()]).toEqual([]);
        for (const pseudo of ['::before','::after']) expect(await page.evaluate(pseudo => getComputedStyle(document.body,pseudo).content,pseudo)).toBe('none');
        expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
        await expect(page.locator('.toc-toggle')).toHaveCSS('display',width<=900?'block':'none');
        const rowStyles = (el: Element) => ({ background:getComputedStyle(el).backgroundColor, cells:Array.from(el.children, c=>getComputedStyle(c).backgroundColor) });
        await reference.locator('tbody tr').first().hover(); await page.locator('tbody tr').first().hover();
        expect(await page.locator('tbody tr').first().evaluate(rowStyles)).toEqual(await reference.locator('tbody tr').first().evaluate(rowStyles));
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
            const svg=inner.querySelector('svg')!;
            // components/Mermaid.tsx の applySvgFixups と同じ寸法指定（ページ CSS の max-width: none !important が maxWidth:100% に勝つことも検証する）
            svg.removeAttribute('width');svg.removeAttribute('height');Object.assign(svg.style,{height:'auto',overflow:'visible',display:'block',margin:'0 auto',marginBottom:'10px'});
            const box=svg.viewBox.baseVal;svg.style.width=box.width+'px';svg.style.maxWidth='100%';svg.setAttribute('viewBox',`${box.x} ${box.y} ${box.width} ${box.height+(/^\s*(sequenceDiagram|stateDiagram)/.test(chart.replace(/^\s*%%\{[\s\S]*?\}%%\s*/,''))?25:15)}`);
            const style=getComputedStyle(inner);const content=inner.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight);
            const actual=snapshot(inner);const initial=svg.getBoundingClientRect().left;inner.scrollLeft=inner.scrollWidth;
            return {actual,expected,left:inner.getBoundingClientRect().left,initial,moved:initial-svg.getBoundingClientRect().left,scroll:inner.scrollLeft,required:inner.scrollWidth-inner.clientWidth,overflowing:svg.viewBox.baseVal.width>content+1,rendered:svg.getBoundingClientRect().width,natural:box.width};
        },{chart:DIAGRAMS[id]!,originalChart:inventory.diagrams[id as keyof typeof inventory.diagrams],id,sourceConfig});
        expect(result.actual).toEqual(result.expected);expect(Math.abs(result.rendered-result.natural)).toBeLessThanOrEqual(1);if(result.overflowing)expect(result.required).toBeGreaterThan(0);expect(result.initial).toBeGreaterThanOrEqual(result.left);expect(Math.abs(result.scroll-result.required)).toBeLessThanOrEqual(1);expect(Math.abs(result.moved-result.scroll)).toBeLessThanOrEqual(1);
    });
}
