import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import { sourceModule } from '../tests/helpers/source-module';
import inventory from '../docs/migration-inventory/iso-iec-42001-2023-beginner-guide.json';
const applyReviewCorrections = (html: string) => html;

const base='app/iso-iec-42001-2023-beginner-guide';
const globals=readFileSync('node_modules/tailwindcss/preflight.css','utf8')+readFileSync('app/globals.css','utf8');
const retained=readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css','utf8');
const shared=readFileSync('components/Mermaid.tsx','utf8');
const globalConfig=Function('return ('+shared.match(/mermaid.initialize\((\{[\s\S]*?\n\})\);/)![1]+');')() as object;
const fixupsStart=shared.indexOf('function applySvgFixups');
const fixups=transformSync(shared.slice(fixupsStart,shared.indexOf('/**',fixupsStart)),{filename:'fixups.ts',jsc:{parser:{syntax:'typescript'}}}).code as string;

/** Render the real server page with just the effect-driven shared SVG renderer stubbed. */
function markup(){const Page=sourceModule(`${base}/page.tsx`).default as React.ComponentType;return renderToStaticMarkup(React.createElement(Page));}
const selectors=[".sidebar",".sidebar .brand",".sidebar ul",".sidebar a",".toggle",".main",".hero",".eyebrow",".hero h1",".meta",".meta-item",".meta-item span",".meta-item b","h2","h3","h4","p","li","a","strong","code",".table-scroll","table","th","td","blockquote","blockquote p",".callout-practice",".glossary",".glossary p",".glossary ul",".glossary li",".mermaid-diagram",".mermaid-diagram svg",".mermaid-diagram p",".check-overall",".ov-top",".ov-top b",".ov-count",".ov-reset",".check-card",".check-head",".check-badge",".check-head h4",".check-count",".check-bar",".check-bar i","ul.checklist","ul.checklist li","ul.checklist label","ul.checklist input[type=checkbox]","ul.checklist .txt",".footer"];
const properties=['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','lineHeight','letterSpacing','textAlign','textTransform','whiteSpace','marginTop','marginRight','marginBottom','marginLeft','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderTopColor','borderRightColor','borderBottomColor','borderLeftColor','borderRadius','display','width','minWidth','maxWidth','minHeight','listStyleType','boxShadow','backgroundImage','overflowX','verticalAlign','webkitTextFillColor'];

for(const width of [390,768,900,901,1440]) for(const order of ['before','after']) test(`${width}px retained CSS ${order}: all source design declarations`,async({page})=>{
  await page.setViewportSize({width,height:900});
  const ref=await page.context().newPage();await ref.setViewportSize({width,height:900});
  await ref.setContent(`<style>${inventory.originalCss}</style>${applyReviewCorrections(inventory.originalBody)}`);
  const own=readFileSync(`${base}/guide.css`,'utf8');
  await page.setContent(`<style>${globals}${order==='before'?retained+own:own+retained}</style>${markup()}`);
  // Compare initial source state; current-location highlighting is validated by interaction tests.
  await page.locator('.sidebar a.active').evaluateAll(links=>links.forEach(a=>a.classList.remove('active')));
  await ref.locator('.mermaid-diagram').evaluateAll(nodes=>nodes.forEach(n=>n.replaceChildren()));
  await page.locator('.mermaid-diagram').evaluateAll(nodes=>nodes.forEach(n=>n.replaceChildren()));
  const collect=({root,selectors,properties}:{root:string;selectors:string[];properties:string[]})=>Object.fromEntries(selectors.map(selector=>[selector,Array.from(document.querySelectorAll(root+selector),el=>{const style=getComputedStyle(el);return Object.fromEntries(properties.map(p=>[p,style[p as keyof CSSStyleDeclaration]]));})]));
  const expected=await ref.evaluate(collect,{root:'',selectors,properties}),actual=await page.evaluate(collect,{root:'.iso42001-page ',selectors,properties});
  for(const selector of selectors) expect.soft(actual[selector],selector).toEqual(expected[selector]);
  for(const [selector,pseudo] of [['.hero','::before'],['.hero','::after'],['h3','::before']]){
    const collectPseudo=(n:Element,pseudo:string)=>{const s=getComputedStyle(n,pseudo);return {content:s.content,width:s.width,height:s.height,background:s.backgroundImage,color:s.backgroundColor,position:s.position,top:s.top,right:s.right};};
    expect(await page.locator(selector!).first().evaluate(collectPseudo,pseudo!)).toEqual(await ref.locator(selector!).first().evaluate(collectPseudo,pseudo!));
  }
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await expect(page.locator('.toggle')).toHaveCSS('display',width<=900?'block':'none');
  await ref.close();
});


for (const width of [390,768,900,901,1440]) test(width+'px chrome offsets',async({page})=>{await page.setViewportSize({width,height:900});await page.setContent('<style>'+globals+readFileSync(base+'/guide.css','utf8')+'</style>'+markup());for(const height of [38,76,120]) {await page.evaluate(h=>document.documentElement.style.setProperty('--disclaimer-height',h+'px'),height);await expect(page.locator('.sidebar')).toHaveCSS('top',(60+height)+'px');await expect(page.locator('.toggle')).toHaveCSS('top',(72+height)+'px');if(width<=900){await page.locator('.sidebar').evaluate(el=>el.classList.add('open'));await page.locator('.toggle').click({trial:true});}}});
