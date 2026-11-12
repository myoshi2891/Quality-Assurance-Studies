import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import { sourceModule } from '../tests/helpers/source-module';
import inventory from '../docs/migration-inventory/iso-iec-29110-5-1-2-2025-beginner-guide.json';
import { load } from 'cheerio';
/** Fix invalid source labels and script-initialized counters before comparing. */
function applyReviewCorrections(html:string){const $=load(html);$('script').remove();$('label label').each((_,n)=>{ $(n).replaceWith($(n).contents()); });$('.progress-label').text('0 / 8 完了');return $('body').html()!;}
function publicationLabel(svg:string){return svg;}

const base='app/iso-iec-29110-5-1-2-2025-beginner-guide';
const globals=readFileSync('node_modules/tailwindcss/preflight.css','utf8')+readFileSync('app/globals.css','utf8');
const retained=readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css','utf8');
const shared=readFileSync('components/Mermaid.tsx','utf8');
const globalConfig=Function('return ('+shared.match(/mermaid.initialize\((\{[\s\S]*?\n\})\);/)![1]+');')() as object;
const fixupsStart=shared.indexOf('function applySvgFixups');
const fixups=transformSync(shared.slice(fixupsStart,shared.indexOf('/**',fixupsStart)),{filename:'fixups.ts',jsc:{parser:{syntax:'typescript'}}}).code as string;

/** Render the real server page with just the effect-driven shared SVG renderer stubbed. */
function markup(){const Page=sourceModule(`${base}/page.tsx`).default as React.ComponentType;return renderToStaticMarkup(React.createElement(Page));}
const selectors=['.sidebar','.side-title','.sidebar a','.content','.hero','.eyebrow','.hero h1','.hero-sub','.hero-formal','.pills','.pill','.pk','.pv','h2','h3','p','ul','li','a','strong','.source-line','.table-scroll','table','th','td','.callout','.callout-head','.callout-body p','.diagram','.diagram-scroll','.diagram figcaption','.faq-toolbar','.btn-ghost','.faq-list','.faq-item','.faq-item summary','.q-badge','.a-badge','.faq-answer','.a-body p','.gloss-toolbar','.gloss-search','.gloss-count','.gloss-grid','.gloss-card','.gloss-term','.gloss-def','.gloss-empty','.check-card','.check-head','.check-title','.check-hint','.checklist','.checklist li','.checklist label','.checklist input','.progress','.progress-track','.progress-fill','.progress-label','.quiz-card','.quiz-card summary','.qz-hint','.qz-answer','.qz-a-body','.footer-note'];
const properties=['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','lineHeight','letterSpacing','textAlign','textTransform','whiteSpace','marginTop','marginRight','marginBottom','marginLeft','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderTopColor','borderRightColor','borderBottomColor','borderLeftColor','borderRadius','display','width','minWidth','maxWidth','minHeight','listStyleType','boxShadow','backgroundImage','overflowX','verticalAlign','webkitTextFillColor'];

for(const width of [390,768,980,981,1440]) for(const order of ['before','after']) test(`${width}px retained CSS ${order}: all source design declarations`,async({page})=>{
  await page.setViewportSize({width,height:980});
  const ref=await page.context().newPage();await ref.setViewportSize({width,height:980});
  await ref.setContent(`<style>${inventory.originalCss}</style>${applyReviewCorrections(inventory.originalBody)}`);
  const own=readFileSync(`${base}/guide.css`,'utf8');
  await page.setContent(`<style>${globals}${order==='before'?retained+own:own+retained}</style>${markup()}`);
  // Compare initial source state; current-location highlighting is validated by interaction tests.
  await page.locator('.sidebar a.active').evaluateAll(links=>links.forEach(a=>a.classList.remove('active')));
  await ref.locator('.diagram-scroll').evaluateAll(nodes=>nodes.forEach(n=>n.replaceChildren()));
  await page.locator('.diagram-scroll').evaluateAll(nodes=>nodes.forEach(n=>n.replaceChildren()));
  const collect=({root,selectors,properties}:{root:string;selectors:string[];properties:string[]})=>Object.fromEntries(selectors.map(selector=>[selector,Array.from(document.querySelectorAll(root+selector),el=>{const style=getComputedStyle(el);return Object.fromEntries(properties.map(p=>[p,style[p as keyof CSSStyleDeclaration]]));})]));
  const expected=await ref.evaluate(collect,{root:'',selectors,properties}),actual=await page.evaluate(collect,{root:'.iso29110-page ',selectors,properties});
  for(const selector of selectors) expect.soft(actual[selector],selector).toEqual(expected[selector]);
  for(const [selector,pseudo] of [['.hero','::before'],['.hero','::after'],['.faq-item summary','::after']]){
    const collectPseudo=(n:Element,pseudo:string)=>{const s=getComputedStyle(n,pseudo);return {content:s.content,width:s.width,height:s.height,background:s.backgroundImage,color:s.backgroundColor,position:s.position,top:s.top,right:s.right};};
    expect(await page.locator(selector!).first().evaluate(collectPseudo,pseudo!)).toEqual(await ref.locator(selector!).first().evaluate(collectPseudo,pseudo!));
  }
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await expect(page.locator('.nav-toggle')).toHaveCSS('display',width<=980?'block':'none');
  await ref.close();
});


for (const width of [390,768,980,981,1440]) test(width+'px chrome offsets',async({page})=>{await page.setViewportSize({width,height:980});await page.setContent('<style>'+globals+readFileSync(base+'/guide.css','utf8')+'</style>'+markup());await page.emulateMedia({reducedMotion:'reduce'});await expect(page.locator('html')).toHaveCSS('scroll-behavior','auto');for(const height of [38,76,120]) {await page.evaluate(h=>document.documentElement.style.setProperty('--disclaimer-height',h+'px'),height);await expect(page.locator('.sidebar')).toHaveCSS('top',(60+height)+'px');if(width<=980){await expect(page.locator('.nav-toggle')).toHaveCSS('top',(72+height)+'px');await page.locator('.iso29110-page').evaluate(el=>el.classList.add('nav-open'));await page.locator('.nav-toggle').click({trial:true});}}});

for(const width of [390,1440]) for(const [i,d] of inventory.diagrams.entries()) test(`${width}px ${d.id}: real Mermaid semantics, labels and palette`,async({page})=>{
  await page.setViewportSize({width,height:980});
  await page.setContent(`<style>${globals}${readFileSync(`${base}/guide.css`,'utf8')}</style>${markup()}`);
  await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
  const {DIAGRAMS}=sourceModule(`${base}/diagrams.ts`) as {DIAGRAMS:string[]};
  await page.evaluate(async({id,chart,globalConfig,fixups})=>{const m=(window as unknown as {mermaid:{initialize:(c:object)=>void;render:(id:string,c:string)=>Promise<{svg:string}>}}).mermaid;m.initialize(globalConfig);const{svg}=await m.render('generated-'+id,chart);document.getElementById(id)!.querySelector('.mermaid-wrapper')!.innerHTML=svg;Function(fixups+';return applySvgFixups;')()(document.getElementById(id)!.querySelector('svg'),chart);},{id:d.id,chart:DIAGRAMS[i]!,globalConfig,fixups});
  const ref=await page.context().newPage();await ref.setContent(`<style>${inventory.originalCss}</style><figure class="diagram"><div class="diagram-scroll">${publicationLabel(d.svg)}</div></figure>`);
  const collect=(el:Element)=>({nodes:Array.from(el.querySelectorAll('g.node'),n=>({id:n.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,'').replace(/D\d+_/g,''),font:getComputedStyle(n.querySelector('.nodeLabel')!).fontFamily,fontSize:getComputedStyle(n.querySelector('.nodeLabel')!).fontSize,lineHeight:getComputedStyle(n.querySelector('.nodeLabel')!).lineHeight,text:n.querySelector('.nodeLabel')!.textContent!.replace(/\s+/g,' ').trim(),shape:n.firstElementChild!.tagName,stroke:getComputedStyle(n.firstElementChild!).stroke,fill:getComputedStyle(n.firstElementChild!).fill,color:getComputedStyle(n.querySelector('.nodeLabel')!).color})),gradients:Array.from(el.querySelectorAll('linearGradient stop'),n=>({offset:n.getAttribute('offset'),color:getComputedStyle(n).stopColor,opacity:getComputedStyle(n).stopOpacity})),clusters:Array.from(el.querySelectorAll('.cluster rect'),n=>({fill:getComputedStyle(n).fill,stroke:getComputedStyle(n).stroke.replace(/#[^"]+-gradient/,'#diagram-gradient')})),edges:Array.from(el.querySelectorAll('path[data-edge]'),n=>({id:n.getAttribute('data-id')!.replace(/D\d+_/g,''),stroke:getComputedStyle(n).stroke,dash:getComputedStyle(n).strokeDasharray,strokeWidth:getComputedStyle(n).strokeWidth,end:!!n.getAttribute('marker-end')})),edgeLabels:Array.from(el.querySelectorAll('.edgeLabel .label'),n=>({text:n.textContent!.replace(/\s+/g,' ').trim(),color:getComputedStyle(n).color})),messages:Array.from(el.querySelectorAll('text.messageText'),n=>({text:n.textContent,color:getComputedStyle(n).fill})),actors:Array.from(el.querySelectorAll('text.actor'),n=>n.textContent!.replace(/\s+/g,' ').trim())});
  const expected=await ref.locator('.diagram-scroll').evaluate(collect),actual=await page.locator(`#${d.id}`).evaluate(collect);
  if(await ref.locator('.diagram-scroll linearGradient').count()>0){
    expect(expected.gradients.length).toBeGreaterThan(0);
    expect(actual.gradients.length).toBeGreaterThan(0);
  }
  expect(actual).toEqual(expected);

  // Compare each original connection on its flow axis; unrelated nodes can be centered differently by Dagre.
  const positions=(el:Element)=>Object.fromEntries(Array.from(el.querySelectorAll('g.node'),n=>[n.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,'').replace(/D\d+_/g,''),(n.getAttribute('transform')!.match(/[-\d.]+/g) ?? []).map(Number)]));
  const original=await ref.locator('.diagram-scroll').evaluate(positions),current=await page.locator(`#${d.id}`).evaluate(positions);
  for(const edge of d.edges.map(edge=>edge.id)){
    const [,from,to]=edge.split('_');
    const a=original[from!]!,b=original[to!]!,x=Math.abs(a[0]!-b[0]!),y=Math.abs(a[1]!-b[1]!);
    const axis=x>y?0:1;
    expect(Math.sign(current[to!]![axis]!-current[from!]![axis]!),edge).toBe(Math.sign(b[axis]!-a[axis]!));
  }
  const reachable=await page.locator(`#${d.id} .mermaid-wrapper`).evaluate(el=>{
    const svg=el.querySelector('svg')!;
    el.scrollLeft=0;
    const left=svg.getBoundingClientRect().left,outer=el.getBoundingClientRect().left;
    const overflowing=el.scrollWidth>el.clientWidth;
    el.scrollLeft=el.scrollWidth;
    return {left,outer,overflowing,moved:left-svg.getBoundingClientRect().left,scroll:el.scrollLeft};
  });
  expect(reachable.left).toBeGreaterThanOrEqual(reachable.outer);
  if(reachable.overflowing) {
    expect(reachable.scroll).toBeGreaterThan(0);
    expect(reachable.moved).toBeGreaterThan(0);
  }
  expect(Math.abs(reachable.moved-reachable.scroll)).toBeLessThanOrEqual(1);
  expect(await page.locator(`#${d.id} svg`).count()).toBe(1);
  await ref.close();
});

