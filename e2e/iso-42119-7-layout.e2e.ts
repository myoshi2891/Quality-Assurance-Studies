import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { sourceModule } from '../tests/helpers/source-module';
import inventory from '../docs/migration-inventory/iso-iec-awi-ts-42119-7-guide.json';

const base='app/iso-iec-awi-ts-42119-7-guide';
const globals=readFileSync('node_modules/tailwindcss/preflight.css','utf8')+readFileSync('app/globals.css','utf8');
const retained=readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css','utf8');
/** Render the real server page with just the effect-driven shared SVG renderer stubbed. */
function markup(){const Page=sourceModule(`${base}/page.tsx`).default as React.ComponentType;return renderToStaticMarkup(React.createElement(Page));}
const selectors=['.main','.hero','.hero-title','.hero-sub','.eyebrow','.hero-meta','.meta-item','.meta-label','.meta-value','h2','h3','main p','main li','main ul','main ol','main strong','main a','code','.table-scroll','table','th','td','.callout','.callout-head','.callout-body','.callout-intro','.callout-practice','.callout-note','.glossary','.glossary-head','.legend','.legend-head','.mermaid-diagram','.checklist-card','.checklist-progress','.cp-label','.cp-bar','.cp-fill','.cp-count','.checklist','.checklist input','.page-footer','.sidebar .sb-title','.sidebar .sb-title span','.nav-list','.nav-sub','.nav-h2','.nav-h2>a','.nav-sub a','.nav-toggle'];
const properties=['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','lineHeight','letterSpacing','textAlign','textTransform','whiteSpace','marginTop','marginRight','marginBottom','marginLeft','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderTopColor','borderRightColor','borderBottomColor','borderLeftColor','borderRadius','display','width','minWidth','maxWidth','minHeight','listStyleType','boxShadow','backgroundImage','overflowX','verticalAlign','webkitTextFillColor'];

for(const width of [390,768,960,961,1440]) for(const order of ['before','after']) test(`${width}px retained CSS ${order}: all source design declarations`,async({page})=>{
  await page.setViewportSize({width,height:900});
  const ref=await page.context().newPage();await ref.setViewportSize({width,height:900});
  await ref.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody}`);
  const own=readFileSync(`${base}/guide.css`,'utf8');
  await page.setContent(`<style>${globals}${order==='before'?retained+own:own+retained}</style>${markup()}`);
  // Compare initial source state; current-location highlighting is validated by interaction tests.
  await page.locator('.sidebar a.active').evaluateAll(links=>links.forEach(a=>a.classList.remove('active')));
  await page.locator('.mermaid-diagram').evaluateAll(nodes=>nodes.forEach(n=>n.replaceChildren()));
  const collect=({root,selectors,properties}:{root:string;selectors:string[];properties:string[]})=>Object.fromEntries(selectors.map(selector=>[selector,Array.from(document.querySelectorAll(root+selector),el=>{const style=getComputedStyle(el);return Object.fromEntries(properties.map(p=>[p,style[p as keyof CSSStyleDeclaration]]));})]));
  const expected=await ref.evaluate(collect,{root:'',selectors,properties}),actual=await page.evaluate(collect,{root:'.iso42119-7-page ',selectors,properties});
  for(const selector of selectors) expect.soft(actual[selector],selector).toEqual(expected[selector]);
  for(const [selector,pseudo] of [['.hero','::before'],['h3','::before']]){
    const collectPseudo=(n:Element,pseudo:string)=>{const s=getComputedStyle(n,pseudo);return {content:s.content,width:s.width,height:s.height,background:s.backgroundImage,color:s.backgroundColor,position:s.position,top:s.top,right:s.right};};
    expect(await page.locator(selector!).first().evaluate(collectPseudo,pseudo!)).toEqual(await ref.locator(selector!).first().evaluate(collectPseudo,pseudo!));
  }
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await expect(page.locator('.nav-toggle')).toHaveCSS('display',width<=960?'block':'none');
  await ref.close();
});

for(const width of [390,1440]) for(const [i,d] of inventory.diagrams.entries()) test(`${width}px ${d.id}: real Mermaid semantics, labels and palette`,async({page})=>{
  await page.setViewportSize({width,height:900});
  await page.setContent(`<style>${globals}${readFileSync(`${base}/guide.css`,'utf8')}</style>${markup()}`);
  await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
  const {DIAGRAMS}=sourceModule(`${base}/diagrams.ts`) as {DIAGRAMS:string[]};
  await page.evaluate(async({id,chart})=>{const m=(window as unknown as {mermaid:{initialize:(c:object)=>void;render:(id:string,c:string)=>Promise<{svg:string}>}}).mermaid;m.initialize({startOnLoad:false,securityLevel:'loose'});const{svg}=await m.render('generated-'+id,chart);document.getElementById(id)!.querySelector('.mermaid-wrapper')!.innerHTML=svg;},{id:d.id,chart:DIAGRAMS[i]!});
  const ref=await page.context().newPage();await ref.setContent(`<style>${inventory.originalCss}</style><div class="mermaid-diagram">${d.svg}</div>`);
  const collect=(el:Element)=>({nodes:Array.from(el.querySelectorAll('g.node'),n=>({id:n.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''),text:n.querySelector('.nodeLabel')!.textContent!.replace(/\s+/g,' ').trim(),fill:getComputedStyle(n.firstElementChild!).fill,color:getComputedStyle(n.querySelector('.nodeLabel')!).color})),edges:Array.from(el.querySelectorAll('path[data-edge]'),n=>({id:n.getAttribute('data-id'),stroke:getComputedStyle(n).stroke,end:!!n.getAttribute('marker-end')})),messages:Array.from(el.querySelectorAll('text.messageText'),n=>({text:n.textContent,color:getComputedStyle(n).fill})),actors:Array.from(el.querySelectorAll('text.actor'),n=>n.textContent)});
  expect(await page.locator(`#${d.id}`).evaluate(collect)).toEqual(await ref.locator('.mermaid-diagram').evaluate(collect));
  expect(await page.locator(`#${d.id} svg`).count()).toBe(1);
  await ref.close();
});
