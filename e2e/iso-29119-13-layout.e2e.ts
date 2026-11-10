import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../docs/migration-inventory/iso-iec-tr-29119-13-guide.json';
import { sourceModule } from '../tests/helpers/source-module';

const base = 'app/iso-iec-tr-29119-13-guide';
const scope = '.iso29119-13-page';
const own = () => readFileSync(`${base}/guide.css`, 'utf8');
const preflight = readFileSync('node_modules/tailwindcss/preflight.css', 'utf8');
const globals = readFileSync('app/globals.css', 'utf8');
const retained = readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css', 'utf8');
const shared = readFileSync('components/Mermaid.tsx', 'utf8');
const globalConfig = Function('return (' + shared.match(/mermaid.initialize\((\{[\s\S]*?\n\})\);/)![1] + ')')() as object;
const sourceConfig = Function('return (' + inventory.originalBody.match(/mermaid.initialize\((\{[\s\S]*?\n      \})\);/)![1] + ')')() as object;
const start = shared.indexOf('function applySvgFixups');
const fixups = transformSync(shared.slice(start, shared.indexOf('/**', start)), { filename:'fixups.ts', jsc:{parser:{syntax:'typescript'}} }).code as string;
const original = inventory.originalBody.replace(/<script[\s\S]*?<\/script>/g, '');

/** Render the actual TSX page; only asynchronous Mermaid rendering is replaced below. */
function markup() {
  const C = sourceModule(`${base}/page.tsx`).default as React.ComponentType;
  return renderToStaticMarkup(React.createElement(C));
}

const selectors = ['.main','.hero','.eyebrow','.hero h1','main.doc','h2','h3','main p','main ul','main ol','main li','strong','em','main a','hr','.table-wrap','table','thead','th','td','td strong','blockquote','blockquote p','.tag','.tag-lead','.tag-tr','.tag-gen','.tag-ex','.progress','.progress-head','.progress-count','.progress-bar','.progress-fill','.checklist','.checklist label','.checklist input','.cl-text','.toc','.toc-title','.toc a','.toc-fab','.toc-fab .bar','.toc-backdrop'];
const properties = ['color','backgroundColor','backgroundImage','fontFamily','fontSize','fontWeight','fontStyle','lineHeight','letterSpacing','marginTop','marginRight','marginBottom','marginLeft','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderTopColor','borderRightColor','borderBottomColor','borderLeftColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','textDecorationLine','verticalAlign','appearance','textTransform'];
for (const width of [390,900,1024,1025,1440]) for (const order of ['before','after']) {
  test(`${width}px CSS ${order}: every source design component survives global and retained route styles`, async ({page}) => {
    await page.setViewportSize({width,height:900});
    const ref = await page.context().newPage(); await ref.setViewportSize({width,height:900});
    await ref.setContent(`<style>${inventory.originalCss}</style>${original}`);
    const interference = 'th, td { color: magenta !important; font-size: 2px !important; }';
    await page.setContent(`<style>${preflight}${globals}${order==='before'?retained+interference+own():own()+retained+interference}</style>${markup()}`);
    const collect = ({selectors,properties,prefix}:{selectors:string[];properties:string[];prefix:string}) => Object.fromEntries(selectors.map(s=>[s,Array.from(document.querySelectorAll(prefix+s),el=>Object.fromEntries(properties.map(k=>[k,getComputedStyle(el)[k as keyof CSSStyleDeclaration]])))]));
    const expected=await ref.evaluate(collect,{selectors,properties,prefix:''}); const actual=await page.evaluate(collect,{selectors,properties,prefix:scope+' '});
    for(const s of selectors) expect.soft(actual[s],s).toEqual(expected[s]);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator('.toc-fab')).toHaveCSS('display',width<=1024?'flex':'none');
    for(const pseudo of ['::before','::after']) {
      const read=(n:Element,pseudo:string)=>{const s=getComputedStyle(n,pseudo);return {content:s.content,background:s.backgroundImage,position:s.position,width:s.width,height:s.height};};
      expect(await page.locator('.hero').evaluate(read,pseudo)).toEqual(await ref.locator('.hero').evaluate(read,pseudo));
    }
    await ref.locator('tbody tr').first().hover(); await page.locator('tbody tr').first().hover();
    const hover=(n:Element)=>Array.from(n.children,c=>({background:getComputedStyle(c).backgroundColor,color:getComputedStyle(c).color}));
    expect(await page.locator('tbody tr').first().evaluate(hover)).toEqual(await ref.locator('tbody tr').first().evaluate(hover));
    await ref.addStyleTag({content:'* { transition: none !important; }'});
    await page.addStyleTag({content:'* { transition: none !important; }'});
    // Checked colors, custom tick image and line-through labels must survive preflight as well.
    await ref.locator('.checklist input').first().check(); await page.locator('.checklist input').first().check();
    const state=(n:Element)=>({bg:getComputedStyle(n).backgroundColor,image:getComputedStyle(n).backgroundImage,color:getComputedStyle(n).color,decoration:getComputedStyle(n).textDecorationLine});
    for(const s of ['.checklist input','.checklist label','.cl-text']) expect(await page.locator(s).first().evaluate(state)).toEqual(await ref.locator(s).first().evaluate(state));
    await ref.close();
  });
}

for(const width of [390,1440]) for(const [index,diagram] of inventory.diagrams.entries()) {
  test(`${width}px ${diagram.id}: real SVG labels, edges, shapes, colors, geometry and both scroll ends`,async({page})=> {
    await page.setViewportSize({width,height:900});
    await page.setContent(`<style>${preflight}${globals}${own()}</style>${markup()}`);
    await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
    const {DIAGRAMS}=sourceModule(`${base}/diagrams.ts`) as {DIAGRAMS:string[]};
    const ref=await page.context().newPage(); await ref.setViewportSize({width,height:900});
    await ref.setContent(`<style>${inventory.originalCss}</style>${original}`);
    await ref.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
    const draw=async({index,chart,config,fixups}:{index:number;chart:string;config:object;fixups:string|null})=> {
      const m=(window as unknown as {mermaid:{initialize:(c:object)=>void;render:(id:string,c:string)=>Promise<{svg:string}>}}).mermaid;
      m.initialize(config); const {svg}=await m.render('test-svg',chart);
      const target=fixups?document.querySelector(`[data-diagram="diagram-${index}"] .mermaid-wrapper`)!:document.querySelectorAll('pre.mermaid')[index]!;
      target.innerHTML=svg;
      if(fixups) Function(`${fixups};return applySvgFixups;`)()(target.querySelector('svg'),chart);
    };
    await ref.evaluate(draw,{index,chart:diagram.source,config:sourceConfig,fixups:null});
    await page.evaluate(draw,{index,chart:DIAGRAMS[index]!,config:globalConfig,fixups});
    const actualContainer=page.locator(`[data-diagram="${diagram.id}"]`); const expectedContainer=ref.locator('pre.mermaid').nth(index);
    const collect=(outer:Element)=> {
      const norm=(v:string|null)=>(v??'').replace(/\s+/g,' ').trim();
      const nodes=Array.from(outer.querySelectorAll('g.node'),n=>({id:n.id.replace(/^flowchart-/,'').replace(/-\d+$/,''),label:norm(n.querySelector('.nodeLabel')?.textContent??''),fill:getComputedStyle(n.firstElementChild!).fill,stroke:getComputedStyle(n.firstElementChild!).stroke,strokeWidth:getComputedStyle(n.firstElementChild!).strokeWidth,shape:n.firstElementChild!.tagName,color:getComputedStyle(n.querySelector('.nodeLabel')!).color,fontFamily:getComputedStyle(n.querySelector('.nodeLabel')!).fontFamily,fontSize:getComputedStyle(n.querySelector('.nodeLabel')!).fontSize,lineHeight:getComputedStyle(n.querySelector('.nodeLabel')!).lineHeight}));
      const edges=Array.from(outer.querySelectorAll('.edgePaths path'),n=>({id:n.getAttribute('data-id')||n.id,dotted:n.classList.contains('edge-pattern-dotted'),color:getComputedStyle(n).stroke,width:getComputedStyle(n).strokeWidth,end:!!n.getAttribute('marker-end'),start:!!n.getAttribute('marker-start')}));
      const clusters=Array.from(outer.querySelectorAll('.cluster'),n=>({id:n.id,label:norm(n.querySelector('.cluster-label')?.textContent??''),fill:getComputedStyle(n.querySelector('rect')!).fill,stroke:getComputedStyle(n.querySelector('rect')!).stroke}));
      const labels=Array.from(outer.querySelectorAll('.edgeLabels .edgeLabel'),n=>({text:norm(n.textContent),color:getComputedStyle(n.querySelector('span')??n).color,background:getComputedStyle(n.querySelector('span')??n).backgroundColor}));
      const pie=Array.from(outer.querySelectorAll('path.pieCircle,text.pieTitleText,text.legendText,text.slice'),n=>({tag:n.tagName,text:norm(n.textContent),fill:getComputedStyle(n).fill}));
      return {nodes,edges,clusters,labels,pie};
    };
    expect(await actualContainer.evaluate(collect)).toEqual(await expectedContainer.evaluate(collect));
    const geometry=(outer:Element)=>Array.from(outer.querySelectorAll('g.node'),n=>{const r=n.getBoundingClientRect();const g=n as SVGGraphicsElement;const attribute=g.transform.baseVal.consolidate()!.matrix;const computed=(g.parentElement as unknown as SVGGraphicsElement).getCTM()!.inverse().multiply(g.getCTM()!);return {width:r.width,height:r.height,expected:[attribute.a,attribute.b,attribute.c,attribute.d,attribute.e,attribute.f],actual:[computed.a,computed.b,computed.c,computed.d,computed.e,computed.f]};});
    const nodes=await actualContainer.evaluate(geometry); const originalNodes=await expectedContainer.evaluate(geometry);
    expect(nodes).toHaveLength(originalNodes.length);
    for(const n of nodes) {expect(n.width).toBeGreaterThan(0);expect(n.height).toBeGreaterThan(0);n.expected.forEach((v,i)=>expect(n.actual[i]).toBeCloseTo(v,3));}
    const viewbox=(n:Element)=>n.querySelector('svg')!.getAttribute('viewBox')!.split(/\s+/).map(Number);
    const expectedBox=await expectedContainer.evaluate(viewbox); const actualBox=await actualContainer.evaluate(viewbox);
    actualBox.forEach((v,i)=>expect(v).toBeCloseTo(expectedBox[i]!+(i===3?15:0),1));
    const reach=await actualContainer.locator('xpath=..').evaluate(el=>{const svg=el.querySelector('svg')!;const start=svg.getBoundingClientRect().left;el.scrollLeft=el.scrollWidth;return {start,left:el.getBoundingClientRect().left,movement:start-svg.getBoundingClientRect().left,scroll:el.scrollLeft,required:el.scrollWidth-el.clientWidth};});
    expect(reach.start).toBeGreaterThanOrEqual(reach.left); expect(Math.abs(reach.scroll-reach.required)).toBeLessThanOrEqual(1);expect(Math.abs(reach.movement-reach.scroll)).toBeLessThanOrEqual(1);
    await expect(actualContainer.locator('.mermaid-wrapper')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    await ref.close();
  });
}
for(const width of [390,900,1024,1025,1440]) test(`${width}px: grid and every anchor clear fixed header and dynamic disclaimer`,async({page})=> {
  await page.setViewportSize({width,height:900}); await page.setContent(`<style>${preflight}${globals}${own()}</style>${markup()}`);
  for(const banner of [38,96]) {
    await page.evaluate(h=>document.documentElement.style.setProperty('--disclaimer-height',h+'px'),banner);
    await expect(page.locator('.toc')).toHaveCSS('top',`${60+banner}px`);
    expect(await page.locator('h2,h3').evaluateAll(nodes=>nodes.map(n=>getComputedStyle(n).scrollMarginTop))).toEqual(Array(56).fill(`${80+banner}px`));
    const main=await page.locator('.main').boundingBox(); expect(main!.width).toBeCloseTo(width-(width<=1024?0:280),0);
    for(const id of ['s26','s43']) {
      await page.locator('#'+id).evaluate(n=>n.scrollIntoView({behavior:'instant'}));
      expect((await page.locator('#'+id).boundingBox())!.y).toBeGreaterThanOrEqual(60+banner);
    }
  }
});
