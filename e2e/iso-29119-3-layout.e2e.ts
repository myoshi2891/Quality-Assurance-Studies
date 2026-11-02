import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { load } from 'cheerio';
import { transformSync } from 'next/dist/build/swc';
import { sourceModule } from '../tests/helpers/source-module';
import { applyReviewCorrections } from '../tests/iso-iec-ieee-29119-3-2021-guide/review-corrections';
const base='app/iso-iec-ieee-29119-3-2021-guide';
const preflight=readFileSync('node_modules/tailwindcss/preflight.css','utf8');
const globals=readFileSync('app/globals.css','utf8');
const retained=readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css','utf8');
const original=load(readFileSync(existsSync('Iso-iec-ieee-29119-3-2021-guide.html')?'Iso-iec-ieee-29119-3-2021-guide.html':'archive/html-archive/iso/Iso-iec-ieee-29119-3-2021-guide.html','utf8'));
applyReviewCorrections(original);
const sourceInventory=JSON.parse(readFileSync('docs/migration-inventory/iso-iec-ieee-29119-3-2021-guide.json','utf8'));
const inventory={originalCss:original('head style').html()};
original('script').remove();
function markup() { const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType; return renderToStaticMarkup(React.createElement(Page)); }
const reviewedBody = original('body').html()!;
const selectors=['.layout','.main','.hero','.eyebrow','.hero-title','.hero-sub','.hero-meta','.hero-meta div','.hero-meta small','.hero-meta span','h2','h3','main p','main ul','main ol','main li','main strong','.table-scroll','table','th','td','td strong','td a','blockquote','h4','details','summary','.brand','.sidebar ul','.sidebar li','.sidebar a','.toggle','main code','main hr','.mermaid-container'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor'];
for (const width of [390,900,901,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
            const own = readFileSync(`${base}/iso-iec-ieee-29119-3-2021-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).filter(el => !el.closest('svg') && !el.closest('[hidden]')).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.iso291193-page ' });
            const differences: unknown[] = [];
            for (const selector of selectors) {
                const a = actual[selector]!, e = expected[selector]!;
                if (a.length !== e.length) differences.push([selector, 'count', a.length, e.length]);
                for (let i=0; i<Math.min(a.length,e.length); i++) for (const prop of properties) if (a[i]![prop] !== e[i]![prop]) differences.push([selector,i,prop,a[i]![prop],e[i]![prop]]);
            }
            if (differences.length) console.log('DESIGN_DIFFS='+JSON.stringify(differences));
            expect(differences).toEqual([]);
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
            await expect(page.locator('.hero')).toHaveCSS('min-height','0px');
            await expect(page.locator('.toggle')).toHaveCSS('display', width <= 900 ? 'block' : 'none');
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

// Use the shared Mermaid initialization so inherited global theme settings cannot mask regressions.
const sharedSource=readFileSync('components/Mermaid.tsx','utf8');
const fixupSource=sharedSource.slice(sharedSource.indexOf('function applySvgFixups'),sharedSource.indexOf('/**\n * Renders a Mermaid'));
const compiledFixups=transformSync(fixupSource,{filename:'svg-fixups.ts',jsc:{parser:{syntax:'typescript'}}}).code;
const sharedInit = sharedSource.match(/mermaid.initialize\(([\s\S]*?)\);/)![1]!;
for (const width of [390,1440]) for(let i=0;i<12;i++) test(`${width}px diagram ${i}: exact source SVG semantics, palette and horizontal reachability`,async({page})=>{
 await page.setViewportSize({width,height:900});
 const charts=sourceModule(base+'/diagrams.ts') as Record<string,string>;
 await page.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
 const collect=(el:Element)=>{
  const normal=(s:string|null)=> (s??'').replace(/\s+/g,' ').trim();
  const style=(e:Element|null,keys:string[])=>e?Object.fromEntries(keys.map(k=>[k,getComputedStyle(e)[k as keyof CSSStyleDeclaration]])):null;
  return {
   viewBox:el.querySelector('svg')?.getAttribute('viewBox'),
   markers:Array.from(el.querySelectorAll('marker path'),p=>({path:p.getAttribute('d'),colors:style(p,['fill','stroke'])})),
   nodes:Array.from(el.querySelectorAll('g.node'),n=>({id:n.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''),label:normal(n.querySelector('.nodeLabel')?.textContent??''),shape:n.querySelector('rect,polygon,circle,path')?.tagName,colors:style(n.querySelector('rect,polygon,circle,path'),['fill','stroke','strokeWidth']),text:style(n.querySelector('.nodeLabel'),['color']),cluster:n.closest('g.root')?.querySelector(':scope > .clusters > .cluster')?.id.replace(/^diagram-(check|reference)-/,'')??null})).sort((a,b)=>a.id.localeCompare(b.id)),
   edges:Array.from(el.querySelectorAll('.edgePaths path'),e=>({id:e.getAttribute('data-id'),colors:style(e,['stroke','strokeDasharray','strokeWidth']),arrow:!!e.getAttribute('marker-end')})).sort((a,b)=>(a.id??'').localeCompare(b.id??'')),
   labels:Array.from(el.querySelectorAll('.edgeLabel .label'),e=>({id:e.getAttribute('data-id'),label:normal(e.querySelector('span.edgeLabel')?.textContent??''),text:style(e.querySelector('span.edgeLabel'),['color','backgroundColor']),background:style(e.querySelector('.labelBkg'),['backgroundColor'])})).sort((a,b)=>(a.id??'').localeCompare(b.id??'')),
   clusters:Array.from(el.querySelectorAll('.cluster'),e=>({id:e.id.replace(/^diagram-(check|reference)-/,''),colors:style(e.querySelector('rect'),['fill','stroke','strokeWidth']),label:normal(e.querySelector('.cluster-label')?.textContent??'')})).sort((a,b)=>a.id.localeCompare(b.id))
  };
 };
 await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
 const referenceSvg=await page.evaluate(async({chart,config})=>{const m=(window as unknown as {mermaid:{initialize:(config:object)=>void;render:(id:string,chart:string)=>Promise<{svg:string}>}}).mermaid;m.initialize(config);return (await m.render('diagram-reference',chart)).svg;},{chart:sourceInventory.diagrams[i].chart,config:sourceInventory.config});
 await page.locator('#mermaid-diagram-'+(i+1)).evaluate((el,svg)=>{el.innerHTML=svg;},referenceSvg);
 const expected=await page.locator('#mermaid-diagram-'+(i+1)).evaluate(collect);
 const svg=await page.evaluate(async({chart,init})=>{const m=(window as unknown as {mermaid:{initialize:(config:object)=>void;render:(id:string,chart:string)=>Promise<{svg:string}>}}).mermaid;m.initialize(Function('return ('+init+')')());return (await m.render('diagram-check',chart)).svg;},{chart:charts[`DIAGRAM_${i}`]!,init:sharedInit});
 const own=readFileSync(base+'/iso-iec-ieee-29119-3-2021-guide.css','utf8');
 await page.setContent(`<style>${preflight+globals+own}</style><div class="iso291193-page"><div class="mermaid-container"><div class="mermaid-wrapper">${svg}</div></div></div>`);
 // Execute the actual shared fixup function, then the page's actual viewport restoration.
 const restore=(sourceModule(base+'/Diagram.tsx').restoreSourceViewport as (svg:SVGSVGElement)=>void).toString();
 await page.locator('.mermaid-wrapper svg').evaluate((svg,{fixups,chart,restore})=>{Function(fixups+'; return applySvgFixups;')()(svg,chart);Function('return ('+restore+')')()(svg);},{fixups:compiledFixups,chart:charts[`DIAGRAM_${i}`]!,restore});
 expect(await page.locator('.mermaid-wrapper').evaluate(collect)).toEqual(expected);
 const reach=await page.locator('.mermaid-container').evaluate(el=>{const svg=el.querySelector('svg')!;el.scrollLeft=0;const left=svg.getBoundingClientRect().left>=el.getBoundingClientRect().left;el.scrollLeft=el.scrollWidth;const right=svg.getBoundingClientRect().right<=el.getBoundingClientRect().right+1;return {left,right};});
 expect(reach).toEqual({left:true,right:true});
});

for (const width of [390,1440]) test(`${width}px sidebar: closed mobile TOC is unreachable by keyboard; open TOC is visible`, async ({ page }) => {
    await page.setViewportSize({ width, height:900 });
    const own=readFileSync(base+'/iso-iec-ieee-29119-3-2021-guide.css','utf8');
    await page.setContent(`<style>${preflight+globals+retained+own}</style>${markup()}`);
    const sidebar=page.locator('#sidebar');
    const focusedInSidebar=async()=>{ await page.locator('#navToggle').focus(); for(let i=0;i<3;i++) await page.keyboard.press('Tab'); return page.evaluate(()=>!!document.activeElement?.closest('#sidebar')); };
    if (width <= 900) {
        await expect(sidebar).toHaveCSS('visibility','hidden');
        expect(await focusedInSidebar()).toBe(false);
        await sidebar.evaluate(el=>el.classList.add('open'));
        await expect(sidebar).toHaveCSS('visibility','visible');
        await expect(sidebar).toHaveCSS('transform','none');
        expect(await focusedInSidebar()).toBe(true);
    } else {
        await expect(sidebar).toHaveCSS('visibility','visible');
    }
});

for (const width of [390,1440]) test(`${width}px every quiz preserves closed/open answer styles and symbols`, async ({ page }) => {
    await page.setViewportSize({ width, height:900 });
    const reference=await page.context().newPage(); await reference.setViewportSize({ width, height:900 });
    await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
    const own=readFileSync(base+'/iso-iec-ieee-29119-3-2021-guide.css','utf8');
    await page.setContent(`<style>${preflight+globals+retained+own}</style>${markup()}`);
    const collect=(el:Element)=>[el,...Array.from(el.querySelectorAll('summary,p'))].map(n=>{
        const s=getComputedStyle(n); const marker=getComputedStyle(n,'::before');
        return {height:n.getBoundingClientRect().height,width:n.getBoundingClientRect().width,text:n.textContent?.replace(/\s+/g,' ').trim(),visible:!!n.getBoundingClientRect().height,color:s.color,background:s.backgroundColor,padding:s.padding,margin:s.margin,lineHeight:s.lineHeight,content:marker.content,marker:marker.color};
    });
    expect(await page.locator('details').count()).toBe(8);
    for (let i=0;i<8;i++) for (const open of [false,true,false]) {
        const target=page.locator('details').nth(i), source=reference.locator('details').nth(i);
        if (open!==await target.evaluate(el=>(el as HTMLDetailsElement).open)) {
            await target.locator('summary').click(); await source.locator('summary').click();
        }
        expect(await target.evaluate(collect)).toEqual(await source.evaluate(collect));
        expect(await target.evaluate(el=>(el as HTMLDetailsElement).open)).toBe(open);
    }
    await reference.close();
});

test('TOC and headings clear the shared header and disclaimer at every source breakpoint', async ({ page }) => {
    const own=readFileSync(base+'/iso-iec-ieee-29119-3-2021-guide.css','utf8');
    for (const width of [390,900,901,1440]) {
        await page.setViewportSize({ width,height:900 });
        await page.setContent(`<style>${preflight+globals+own}:root{--disclaimer-height:35px}</style>${markup()}`);
        await expect(page.locator('.sidebar')).toHaveCSS('top','95px');
        if (width <= 900) await expect(page.locator('.toggle')).toHaveCSS('top','105px');
        for (const heading of await page.locator('main h2[id],main h3[id]').all()) await expect(heading).toHaveCSS('scroll-margin-top','115px');
    }
});
