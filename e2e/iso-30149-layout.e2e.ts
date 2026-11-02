import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { load } from 'cheerio';
import { sourceModule } from '../tests/helpers/source-module';
const base='app/iso-iec-ts-30149-2024-guide';
const preflight=readFileSync('node_modules/tailwindcss/preflight.css','utf8');
const globals=readFileSync('app/globals.css','utf8');
const retained=readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css','utf8');
const original=load(readFileSync(existsSync('Iso-iec-ts-30149-2024-guide.html')?'Iso-iec-ts-30149-2024-guide.html':'archive/html-archive/iso/Iso-iec-ts-30149-2024-guide.html','utf8'));
const inventory={originalCss:original('head style').html()};
function markup() { const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType; return renderToStaticMarkup(React.createElement(Page)); }
const reviewedBody = original('body').html()!;
const selectors=['.main','.hero','.eyebrow','.hero-title','.hero-sub','.hero-meta','h2','h3','main p','main ul','main ol','main li','main strong','.table-scroll','table','th','td','td strong','td a','blockquote','h4','details','summary','.page-footer','.sidebar-title','.sidebar ul','.sidebar li','.sidebar a','.nav-toggle','main code','.meta-item','.meta-k','.meta-v','.checklist-card','.checklist-progress','.cp-label','.cp-bar','.cp-fill','.cp-count','.task-list label','.task-list input','main hr','.content','.hero-meta','.callout','.callout-info','.callout-warn','.callout-tip'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor'];
for (const width of [390,900,901,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
            const own = readFileSync(`${base}/iso-iec-ts-30149-2024-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).filter(el => !el.closest('svg') && !el.closest('[hidden]')).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.iso30149-page ' });
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

// Use the shared Mermaid initialization so inherited global theme settings cannot mask regressions.
const sharedInit = readFileSync('components/Mermaid.tsx','utf8').match(/mermaid.initialize\(([\s\S]*?)\);/)![1]!;
for (const width of [390,1440]) for(let i=0;i<11;i++) test(`${width}px diagram ${i}: exact source SVG semantics, palette and horizontal reachability`,async({page})=>{
 await page.setViewportSize({width,height:900});
 const charts=sourceModule(base+'/diagrams.ts') as Record<string,string>;
 await page.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
 const collect=(el:Element)=>{
  const normal=(s:string|null)=> (s??'').replace(/\s+/g,' ').trim();
  const style=(e:Element|null,keys:string[])=>e?Object.fromEntries(keys.map(k=>[k,getComputedStyle(e)[k as keyof CSSStyleDeclaration]])):null;
  return {
   nodes:Array.from(el.querySelectorAll('g.node'),n=>({id:n.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''),label:normal(n.querySelector('.nodeLabel')?.textContent??''),shape:n.querySelector('rect,polygon,circle,path')?.tagName,colors:style(n.querySelector('rect,polygon,circle,path'),['fill','stroke']),text:style(n.querySelector('.nodeLabel'),['color']),cluster:n.closest('g.root')?.querySelector(':scope > .clusters > .cluster')?.id.replace(/^diagram-check-/,'')??null})).sort((a,b)=>a.id.localeCompare(b.id)),
   edges:Array.from(el.querySelectorAll('.edgePaths path'),e=>({id:e.getAttribute('data-id'),colors:style(e,['stroke','strokeDasharray']),arrow:!!e.getAttribute('marker-end')})).sort((a,b)=>(a.id??'').localeCompare(b.id??'')),
   labels:Array.from(el.querySelectorAll('.edgeLabel .label'),e=>({id:e.getAttribute('data-id'),label:normal(e.querySelector('span.edgeLabel')?.textContent??'')})).sort((a,b)=>(a.id??'').localeCompare(b.id??'')),
   clusters:Array.from(el.querySelectorAll('.cluster'),e=>({id:e.id.replace(/^diagram-check-/,''),colors:style(e.querySelector('rect'),['fill','stroke']),label:normal(e.querySelector('.cluster-label')?.textContent??'')})).sort((a,b)=>a.id.localeCompare(b.id))
  };
 };
 const expected=await page.locator(`#mmd-${i+1}`).evaluate(collect);
 await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
 const svg=await page.evaluate(async({chart,init})=>{const m=(window as unknown as {mermaid:{initialize:(config:object)=>void;render:(id:string,chart:string)=>Promise<{svg:string}>}}).mermaid;m.initialize(Function('return ('+init+')')());return (await m.render('diagram-check',chart)).svg;},{chart:charts[`DIAGRAM_${i}`]!,init:sharedInit});
 const own=readFileSync(base+'/iso-iec-ts-30149-2024-guide.css','utf8');
 await page.setContent(`<style>${preflight+globals+own}</style><div class="iso30149-page"><div class="mermaid-diagram"><div class="mermaid-wrapper">${svg}</div></div></div>`);
 // Mirror the shared renderer's post-render sizing without a server or build.
 await page.locator('.mermaid-wrapper svg').evaluate(svg=>{const box=svg.getAttribute('viewBox')!.split(/\s+/).map(Number);svg.removeAttribute('width');svg.removeAttribute('height');(svg as SVGElement).style.width=box[2]+'px';});
 expect(await page.locator('.mermaid-wrapper').evaluate(collect)).toEqual(expected);
 const reach=await page.locator('.mermaid-diagram').evaluate(el=>{const svg=el.querySelector('svg')!;el.scrollLeft=0;const left=svg.getBoundingClientRect().left>=el.getBoundingClientRect().left;el.scrollLeft=el.scrollWidth;const right=svg.getBoundingClientRect().right<=el.getBoundingClientRect().right+1;return {left,right};});
 expect(reach).toEqual({left:true,right:true});
});

for (const width of [390,1440]) test(`${width}px sidebar: closed mobile TOC is unreachable by keyboard; open TOC is visible`, async ({ page }) => {
    await page.setViewportSize({ width, height:900 });
    const own=readFileSync(base+'/iso-iec-ts-30149-2024-guide.css','utf8');
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
    const own=readFileSync(base+'/iso-iec-ts-30149-2024-guide.css','utf8');
    await page.setContent(`<style>${preflight+globals+retained+own}</style>${markup()}`);
    const collect=(el:Element)=>Array.from(el.querySelectorAll('summary,p'), n=>{
        const s=getComputedStyle(n); const marker=getComputedStyle(n,'::before');
        return {text:n.textContent?.replace(/\s+/g,' ').trim(),visible:!!n.getBoundingClientRect().height,color:s.color,background:s.backgroundColor,padding:s.padding,margin:s.margin,lineHeight:s.lineHeight,content:marker.content,marker:marker.color};
    });
    expect(await page.locator('details.quiz').count()).toBe(5);
    for (let i=0;i<5;i++) for (const open of [false,true,false]) {
        const target=page.locator('details.quiz').nth(i), source=reference.locator('details.quiz').nth(i);
        if (open!==await target.evaluate(el=>(el as HTMLDetailsElement).open)) {
            await target.locator('summary').click(); await source.locator('summary').click();
        }
        expect(await target.evaluate(collect)).toEqual(await source.evaluate(collect));
        expect(await target.evaluate(el=>(el as HTMLDetailsElement).open)).toBe(open);
    }
    await reference.close();
});

test('TOC and headings clear the shared header and disclaimer at every source breakpoint', async ({ page }) => {
    const own=readFileSync(base+'/iso-iec-ts-30149-2024-guide.css','utf8');
    for (const width of [390,900,901,1440]) {
        await page.setViewportSize({ width,height:900 });
        await page.setContent(`<style>${preflight+globals+own}:root{--disclaimer-height:35px}</style>${markup()}`);
        await expect(page.locator('.sidebar')).toHaveCSS('top','95px');
        if (width <= 900) await expect(page.locator('.nav-toggle')).toHaveCSS('top','105px');
        for (const heading of await page.locator('.content h2[id],.content h3[id]').all()) await expect(heading).toHaveCSS('scroll-margin-top','115px');
    }
});
