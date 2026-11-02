import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { load } from 'cheerio';
import { sourceModule } from '../tests/helpers/source-module';
import { correctNormalized } from '../tests/iso-iec-30141-2024-guide/reviewed-corrections';
const base='app/iso-iec-30141-2024-guide';
const preflight=readFileSync('node_modules/tailwindcss/preflight.css','utf8');
const globals=readFileSync('app/globals.css','utf8');
const retained=readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css','utf8');
const original=load(readFileSync(existsSync('Iso-iec-30141-2024-guide.html')?'Iso-iec-30141-2024-guide.html':'archive/html-archive/iso/Iso-iec-30141-2024-guide.html','utf8'));
const inventory={originalCss:original('head style').html()};
function markup() { const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType; return renderToStaticMarkup(React.createElement(Page)); }
// レビュー修正を比較用の原本にも適用し、訂正による文字量の変化を原本側にも反映する
original('body *').contents().each((_, node) => { if (node.type === 'text') node.data = correctNormalized(node.data); });
const reviewedBody = original('body').html()!;
const selectors=['.main','.hero','.eyebrow','.hero-title','.hero-sub','.hero-meta','.hero-meta > div','h2','h3','main p','main ul','main ol','main li','main strong','.table-scroll','table','th','td','td strong','td a','.callout','.page-footer','.side-title','.side-title span','.sidebar ul','.sidebar li','.sidebar a','.nav-toggle','main code'];
selectors.push('h4','details','summary','.nav-list','.nav-sub','main hr');
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor'];
for (const width of [390,960,961,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
            const own = readFileSync(`${base}/iso-iec-30141-2024-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).filter(el => !el.closest('svg') && !el.closest('[hidden]')).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.iso30141-page ' });
            const differences: unknown[] = [];
            for (const selector of selectors) {
                const a = actual[selector]!, e = expected[selector]!;
                if (a.length !== e.length) differences.push([selector, 'count', a.length, e.length]);
                for (let i=0; i<Math.min(a.length,e.length); i++) for (const prop of properties) if (a[i]![prop] !== e[i]![prop]) differences.push([selector,i,prop,a[i]![prop],e[i]![prop]]);
            }
            expect(differences).toEqual([]);
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
}
for(let i=0;i<11;i++)test(`diagram ${i}: rendered labels, shapes and connections match source SVG`,async({page})=>{
 const charts=sourceModule(base+'/diagrams.ts') as Record<string,string>;
 await page.setContent(reviewedBody);
 const collect=(el:Element)=>({
   nodes:Array.from(el.querySelectorAll('g.node'),n=>({id:n.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''),label:(n.querySelector('.nodeLabel')?.textContent??'').replace(/\s+/g,' ').trim(),shape:n.querySelector('rect,polygon,circle,path')?.tagName,fill:getComputedStyle(n.querySelector('rect,polygon,circle,path')!).fill,stroke:getComputedStyle(n.querySelector('rect,polygon,circle,path')!).stroke,strokeWidth:getComputedStyle(n.querySelector('rect,polygon,circle,path')!).strokeWidth})).sort((a,b)=>a.id.localeCompare(b.id)),
   edges:Array.from(el.querySelectorAll('.edgePaths path[data-edge]'),e=>({id:e.getAttribute('data-id'),arrow:!!e.getAttribute('marker-end'),stroke:getComputedStyle(e).stroke,strokeWidth:getComputedStyle(e).strokeWidth,label:(el.querySelector('.edgeLabels [data-id="'+e.getAttribute('data-id')+'"]')?.textContent??'').replace(/\s+/g,' ').trim()})).sort((a,b)=>(a.id??'').localeCompare(b.id??'')),
   clusters:Array.from(el.querySelectorAll('g.cluster'),c=>({id:c.id.replace(/^.*(?=N\d+_)/,''),fill:getComputedStyle(c.querySelector('rect')!).fill,stroke:getComputedStyle(c.querySelector('rect')!).stroke,label:(c.querySelector('.cluster-label')?.textContent??'').replace(/\s+/g,' ').trim()})).sort((a,b)=>a.id.localeCompare(b.id))
 });
 const expected=await page.locator(`#diagram-${i+1}`).evaluate(collect);
 // レビュー修正: 図3（DIAGRAM_2）は2経路とも任意である旨を辺ラベルに明記したため、原本SVGの辺ラベルを置き換えて比較する
 if(i===2){const reviewed:Record<string,string>={'規範的参照':'規範的参照（任意）','参考にする':'直接参照（任意）','具体化':'DSRAに基づく（任意）'};expected.edges=expected.edges.map(e=>({...e,label:reviewed[e.label]??e.label}));}
 await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
 const svg=await page.evaluate(async chart=>{const m=(window as unknown as {mermaid:{initialize:(config:object)=>void;render:(id:string,chart:string)=>Promise<{svg:string}>}}).mermaid;m.initialize({startOnLoad:false,securityLevel:'loose'});return (await m.render('diagram-check',chart)).svg;},charts[`DIAGRAM_${i}`]!);
 await page.setContent(`<div id="rendered">${svg}</div>`);
 expect(await page.locator('#rendered').evaluate(collect)).toEqual(expected);
});
for(let i=0;i<11;i++)test(`390px diagram ${i}: wide SVG keeps natural width and stays horizontally reachable`,async({page})=>{
 await page.setViewportSize({width:390,height:900});
 const charts=sourceModule(base+'/diagrams.ts') as Record<string,string>;
 await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
 const svg=await page.evaluate(async chart=>{const m=(window as unknown as {mermaid:{initialize:(config:object)=>void;render:(id:string,chart:string)=>Promise<{svg:string}>}}).mermaid;m.initialize({startOnLoad:false,securityLevel:'loose'});return (await m.render('diagram-check',chart)).svg;},charts[`DIAGRAM_${i}`]!);
 const own=readFileSync(base+'/iso-iec-30141-2024-guide.css','utf8');
 await page.setContent(`<style>${preflight+globals+own}</style><div class="iso30141-page"><div class="mermaid-diagram"><div class="mermaid-wrapper">${svg}</div></div></div>`);
 // Mirror the shared renderer's post-render inline sizing (width:<viewBox>px; max-width:100%).
 const natural=await page.locator('.mermaid-wrapper svg').evaluate(el=>{const s=el as SVGSVGElement;const w=Number(s.getAttribute('viewBox')!.split(/\s+/)[2]);s.removeAttribute('width');s.removeAttribute('height');s.style.width=w+'px';s.style.maxWidth='100%';return w;});
 const result=await page.locator('.mermaid-diagram').evaluate(el=>{const svg=el.querySelector('svg')!;el.scrollLeft=0;const left=svg.getBoundingClientRect().left>=el.getBoundingClientRect().left-1;el.scrollLeft=el.scrollWidth;const right=svg.getBoundingClientRect().right<=el.getBoundingClientRect().right+1;return {width:svg.getBoundingClientRect().width,left,right};});
 expect(Math.abs(result.width-natural)).toBeLessThanOrEqual(1);
 expect({left:result.left,right:result.right}).toEqual({left:true,right:true});
});

for(const width of [390,1440])test(`${width}px native learning answers open and close like the source`,async({page})=>{
 await page.setViewportSize({width,height:900});
 const reference=await page.context().newPage();await reference.setViewportSize({width,height:900});
 await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
 await page.setContent(`<style>${preflight+globals+readFileSync(base+'/iso-iec-30141-2024-guide.css','utf8')}</style>${markup()}`);
 for(let i=0;i<8;i++){
   const answer=page.locator('details').nth(i),expected=reference.locator('details').nth(i);
   await answer.locator('summary').click();await expected.locator('summary').click();
   expect(await answer.getAttribute('open')).not.toBe(null);
   for(const element of [answer,expected])await expect.poll(()=>element.locator('summary').evaluate(el=>getComputedStyle(el,'::before').transform)).toBe('matrix(0, 1, -1, 0, 0, 0)');
   const collect=(el:Element)=>({height:el.getBoundingClientRect().height,color:getComputedStyle(el).color,background:getComputedStyle(el).backgroundColor,padding:getComputedStyle(el).padding,marker:getComputedStyle(el.querySelector('summary')!,'::before').transform});
   expect(await answer.evaluate(collect)).toEqual(await expected.evaluate(collect));
   await answer.locator('summary').click();expect(await answer.getAttribute('open')).toBe(null);
 }
 await reference.close();
});
