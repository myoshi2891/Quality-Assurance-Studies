import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { load } from 'cheerio';
import { sourceModule } from '../tests/helpers/source-module';
import { correct, correctNormalized } from '../tests/iso-iec-tr-29138-2-2009-guide/reviewed-corrections';
const base='app/iso-iec-tr-29138-2-2009-guide';
const preflight=readFileSync('node_modules/tailwindcss/preflight.css','utf8');
const globals=readFileSync('app/globals.css','utf8');
const retained=readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css','utf8');
const original=load(readFileSync(existsSync('Iso-iec-tr-29138-2-2009-guide.html')?'Iso-iec-tr-29138-2-2009-guide.html':'archive/html-archive/iso/Iso-iec-tr-29138-2-2009-guide.html','utf8'));
const inventory={originalCss:original('head style').html()};
function markup() { const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType; return renderToStaticMarkup(React.createElement(Page)); }
// レビュー修正を比較用の原本にも適用し、訂正による文字量・列幅の変化を原本側にも反映する
original('body *').contents().each((_, node) => { if (node.type === 'text') node.data = correctNormalized(node.data); });
original('a[href]').each((_, a) => { original(a).attr('href', correct(original(a).attr('href')!)); });
const reviewedBody = original('body').html()!;
const selectors=['.main','.hero','.eyebrow','.hero-title','.hero-sub','.meta','h2','h3','main p','main ul','main ol','main li','main strong','.table-scroll','table','th','td','td strong','td a','blockquote','h4','details','summary','.page-footer','.side-title','.sidebar ul','.sidebar li','.sidebar a','.menu-btn','main code','.meta-item','.ml','.mv','.gloss-title','.gloss-list','.callout-practice','main hr'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor'];
for (const width of [390,900,901,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
            const own = readFileSync(`${base}/iso-iec-tr-29138-2-2009-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).filter(el => !el.closest('svg') && !el.closest('[hidden]')).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.iso29138-page ' });
            const differences: unknown[] = [];
            for (const selector of selectors) {
                const a = actual[selector]!, e = expected[selector]!;
                if (a.length !== e.length) differences.push([selector, 'count', a.length, e.length]);
                for (let i=0; i<Math.min(a.length,e.length); i++) for (const prop of properties) if (a[i]![prop] !== e[i]![prop]) differences.push([selector,i,prop,a[i]![prop],e[i]![prop]]);
            }
            expect(differences).toEqual([]);
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
            await expect(page.locator('.hero')).toHaveCSS('min-height','0px');
            await expect(page.locator('.menu-btn')).toHaveCSS('display', width <= 900 ? 'block' : 'none');
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
for (const width of [390,1440]) for(let i=0;i<5;i++) test(`${width}px diagram ${i}: exact source SVG semantics, palette and horizontal reachability`,async({page})=>{
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
 const expected=await page.locator(`#mmd-${i}`).evaluate(collect);
 // レビュー修正: 図4（WK5）は③ではなく④の確認へ戻るため、原本SVGの該当エッジIDを置き換えて比較する
 if(i===4){const fix=(id:string|null)=>id?.replace(/^L_WK5_WK3_/,'L_WK5_WK4_')??null;const byId=(a:{id:string|null},b:{id:string|null})=>(a.id??'').localeCompare(b.id??'');expected.edges=expected.edges.map(e=>({...e,id:fix(e.id)})).sort(byId);expected.labels=expected.labels.map(e=>({...e,id:fix(e.id)})).sort(byId);}
 await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
 const svg=await page.evaluate(async({chart,init})=>{const m=(window as unknown as {mermaid:{initialize:(config:object)=>void;render:(id:string,chart:string)=>Promise<{svg:string}>}}).mermaid;m.initialize(Function('return ('+init+')')());return (await m.render('diagram-check',chart)).svg;},{chart:charts[`DIAGRAM_${i}`]!,init:sharedInit});
 const own=readFileSync(base+'/iso-iec-tr-29138-2-2009-guide.css','utf8');
 await page.setContent(`<style>${preflight+globals+own}</style><div class="iso29138-page"><div class="mermaid-diagram"><div class="mermaid-wrapper">${svg}</div></div></div>`);
 // Mirror the shared renderer's post-render sizing without a server or build.
 await page.locator('.mermaid-wrapper svg').evaluate(svg=>{const box=svg.getAttribute('viewBox')!.split(/\s+/).map(Number);svg.removeAttribute('width');svg.removeAttribute('height');(svg as SVGElement).style.width=box[2]+'px';});
 expect(await page.locator('.mermaid-wrapper').evaluate(collect)).toEqual(expected);
 const reach=await page.locator('.mermaid-diagram').evaluate(el=>{const svg=el.querySelector('svg')!;el.scrollLeft=0;const left=svg.getBoundingClientRect().left>=el.getBoundingClientRect().left;el.scrollLeft=el.scrollWidth;const right=svg.getBoundingClientRect().right<=el.getBoundingClientRect().right+1;return {left,right};});
 expect(reach).toEqual({left:true,right:true});
});

for (const width of [390,1440]) test(`${width}px YAML preserves exact content, block dimensions and scroll reachability`, async ({ page }) => {
    await page.setViewportSize({ width, height:900 });
    const reference = await page.context().newPage();
    await reference.setViewportSize({ width, height:900 });
    await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
    const own=readFileSync(base+'/iso-iec-tr-29138-2-2009-guide.css','utf8');
    await page.setContent(`<style>${preflight+globals+retained+own}</style>${markup()}`);
    const collect=(el:Element)=> {
        const code=el.querySelector('code')!;
        const style=getComputedStyle(el), text=getComputedStyle(code);
        return { text:code.textContent, height:el.getBoundingClientRect().height, width:el.getBoundingClientRect().width,
            padding:style.padding, background:style.backgroundColor, border:style.border, radius:style.borderRadius,
            font:text.fontFamily, fontSize:text.fontSize, lineHeight:text.lineHeight, whiteSpace:text.whiteSpace, color:text.color };
    };
    expect(await page.locator('pre.yaml').evaluate(collect)).toEqual(await reference.locator('pre.yaml').evaluate(collect));
    expect(await page.locator('pre.yaml').evaluate(el=>{el.scrollLeft=el.scrollWidth;return el.scrollLeft+el.clientWidth>=el.scrollWidth-1;})).toBe(true);
    await reference.close();
});

for (const width of [390,1440]) test(`${width}px sidebar: closed mobile TOC is unreachable by keyboard; open TOC is visible`, async ({ page }) => {
    await page.setViewportSize({ width, height:900 });
    const own=readFileSync(base+'/iso-iec-tr-29138-2-2009-guide.css','utf8');
    await page.setContent(`<style>${preflight+globals+retained+own}</style>${markup()}`);
    const sidebar=page.locator('#sidebar');
    const focusedInSidebar=async()=>{ await page.locator('#menuBtn').focus(); for(let i=0;i<3;i++) await page.keyboard.press('Tab'); return page.evaluate(()=>!!document.activeElement?.closest('#sidebar')); };
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
