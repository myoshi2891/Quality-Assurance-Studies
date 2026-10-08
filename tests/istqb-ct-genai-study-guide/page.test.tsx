import { afterEach, describe, expect, it } from 'bun:test';
import React from 'react';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/istqb-ct-genai-study-guide.json';
import { NAV_ITEMS } from '../../lib/navigation';
import { PAGES } from '../../e2e/pages';
afterEach(cleanup);
const norm = (s: string) => s.replace(/\s+/g, '').trim();
function signature(node: Element) {
 const clone = node.cloneNode(true) as Element;
 clone.querySelectorAll('.mermaid-wrapper').forEach(n => n.remove());
 return { tag: clone.tagName.toLowerCase(), attrs: [...clone.attributes].filter(a => !a.name.startsWith('aria-') && a.name !== 'role').map(a => [a.name,a.value]).sort(([a],[b]) => a!.localeCompare(b!)), text: norm(clone.textContent ?? '') };
}
async function category(name: string) {
 const { default: Component } = await import('../../app/istqb-ct-genai-study-guide/' + name);
 return render(<Component />).container;
}
for (const group of inventory.groups) describe(group.name, () => {
 it('preserves every element and all text in exact order', async () => {
  const root = await category(group.name);
  const actual = [...root.querySelectorAll('*')].filter(n => !n.closest('.mermaid-wrapper')).map(signature);
  expect(actual).toEqual(group.structure);
 });
 for (const [selector, items] of Object.entries(group.items)) {
  it('preserves ordered inventory: ' + selector, async () => {
   const root = await category(group.name);
   expect([...root.querySelectorAll(selector)].filter(n => !n.closest('.mermaid-wrapper')).map(signature)).toEqual(items);
  });
  items.forEach((expected,index) => it('preserves ' + selector + ' item ' + (index+1), async () => {
   const root = await category(group.name);
   const actual = [...root.querySelectorAll(selector)].filter(n => !n.closest('.mermaid-wrapper'))[index];
   expect(actual).toBeDefined();
   expect(signature(actual!)).toEqual(expected);
  }));
 }
});
describe('Styles', () => {
 it('prevents inner flex centering and nested scrolling from hiding the left edge', () => {
  const css=postcss.parse(readFileSync('app/istqb-ct-genai-study-guide/istqb-ct-genai-study-guide.css','utf8'));
  const values: Record<string,string> = {};
  css.walkRules(rule => {
   if(rule.selector === '.ct-genai-study-page .mermaid-wrapper')rule.walkDecls(decl => {values[decl.prop]=decl.value;});
  });
  expect(values.display).toBe('block');
  expect(values.overflow).toBe('visible');
 });
 inventory.css.forEach((expected,index) => it('preserves source CSS rule ' + index + ': ' + expected.selector, () => {
  const css = postcss.parse(readFileSync('app/istqb-ct-genai-study-guide/istqb-ct-genai-study-guide.css', 'utf8'));
  const selector = expected.selector.split(',').map(s => [':root','html','body'].includes(s.trim()) ? '.ct-genai-study-page' : '.ct-genai-study-page ' + s.trim()).join(', ');
  const found: unknown[] = [];
  css.walkRules(r => { if(r.selector === selector && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : '') === expected.media) found.push(r.nodes.filter(n => n.type === 'decl').map(n => [(n as postcss.Declaration).prop,(n as postcss.Declaration).value.replace(/\s+/g,' ').trim(),(n as postcss.Declaration).important || false])); });
  expect(found).toContainEqual(expected.declarations);
 }));
 it('isolates every CSS selector from existing pages', () => {
  const css=postcss.parse(readFileSync('app/istqb-ct-genai-study-guide/istqb-ct-genai-study-guide.css','utf8'));
  css.walkRules(r => r.selector.split(',').forEach(s => expect(s.trim().startsWith('.ct-genai-study-page')).toBe(true)));
 });
 it('resets global interference with exact original values', () => {
  const css=postcss.parse(readFileSync('app/istqb-ct-genai-study-guide/istqb-ct-genai-study-guide.css','utf8'));
  const value=(selector:string,prop:string) => { let result=''; css.walkRules(r => { if(r.selector.split(',').map(s=>s.trim()).includes(selector))r.walkDecls(prop,d=>{result=d.value;}); });return result; };
  for(const [selector,prop,expected] of [
   ['.ct-genai-study-page .hero','min-height','0'],['.ct-genai-study-page .hero','display','block'],
   ['.ct-genai-study-page .hero::after','content','none'],['.ct-genai-study-page .main','max-width','none'],
   ['.ct-genai-study-page td','color','var(--text)'],['.ct-genai-study-page th','white-space','normal'],
   ['.ct-genai-study-page .callout strong','color','var(--text)'],['.ct-genai-study-page .mermaid-wrapper','max-width','none'],
   ['.ct-genai-study-page .mermaid-wrapper','background','transparent'],['.ct-genai-study-page .mermaid-wrapper foreignObject','overflow','visible'],
   ['.ct-genai-study-page .sidebar','top','calc(60px + var(--disclaimer-height, 0px))']
  ])expect(value(selector!,prop!)).toBe(expected!);
 });
});
describe('Diagrams', () => {
 for(const [id,raw] of Object.entries(inventory.charts))it('preserves and parses '+id,async()=>{
  const diagrams=await import('../../app/istqb-ct-genai-study-guide/diagrams');
  const chart=diagrams[('DIAGRAM_'+id.split('-').at(-1)) as keyof typeof diagrams] as string;
  const expected=raw.split('\n').map(l=>l.trim()).join('\n').replaceAll('（','(').replaceAll('）',')').replaceAll('―','-').replaceAll('：',':').replace(/\{([^"{}]+)\}/g,'{"$1"}');
  expect(chart.replace(/^%%\{init:[\s\S]*?\}%%\n/,'')).toBe(expected);
  const parserPath = 'mermaid/dist/mermaid.esm.mjs';
  const {default:mermaid}=await import(parserPath) as { default: typeof import('mermaid').default };
  expect(await mermaid.parse(chart)).toBeTruthy();
  const config=JSON.parse(chart.match(/^%%\{init: ([\s\S]*?)\}%%/)![1]!);
  expect(config.theme).toBe('base');expect(config.themeVariables.mainBkg).toBe('#eff6ff');expect(config.flowchart.useMaxWidth).toBe(false);
 });
});
describe('Navigation', () => {
 it('keeps every TOC link and anchor in order', async()=>{
  const root=await category('NavBar');
  const actual=[...root.querySelectorAll('nav a')].map(n=>{const s=signature(n);s.attrs=s.attrs.map(([k,v])=>[k!,k==='class'?v!.replace(' active',''):v!] as [string,string]);return s;});
  expect(actual).toEqual(inventory.navigation);
 });
 it('opens and closes mobile navigation and supports Escape',async()=>{
  const root=await category('NavBar');const button=root.querySelector('button')!;const nav=root.querySelector('nav')!;
  expect(button.getAttribute('aria-expanded')).toBe('false');
  fireEvent.click(button);expect(nav.classList.contains('open')).toBe(true);expect(button.getAttribute('aria-expanded')).toBe('true');
  fireEvent.keyDown(document,{key:'Escape'});expect(nav.classList.contains('open')).toBe(false);
  expect(document.activeElement).toBe(button);
  fireEvent.click(button);fireEvent.click(nav.querySelector('a')!);expect(nav.classList.contains('open')).toBe(false);
 });
 it('observes all TOC headings and disconnects on unmount',async()=>{
  const Native=window.IntersectionObserver;const ids:string[]=[];let disconnected=false;let callback:IntersectionObserverCallback=()=>{};
  window.IntersectionObserver=class { constructor(cb:IntersectionObserverCallback,options?:IntersectionObserverInit){callback=cb;expect(options?.rootMargin).toBe('-15% 0px -75% 0px');} observe(n:Element){ids.push(n.id);} disconnect(){disconnected=true;} } as unknown as typeof IntersectionObserver;
  try { const {default:Page}=await import('../../app/istqb-ct-genai-study-guide/page');const result=render(<Page/>);
   expect(ids).toEqual(inventory.navigation.map(n=>n.attrs.find(([k])=>k==='data-target')![1]!));
   const target=result.container.querySelector('main h3')!;
   act(() => callback([{isIntersecting:true,target}] as IntersectionObserverEntry[],{} as IntersectionObserver));
   await waitFor(()=>expect(result.container.querySelector('nav a[aria-current="location"]')?.getAttribute('href')).toBe('#'+target.id));
   result.unmount();expect(disconnected).toBe(true);
  }finally{window.IntersectionObserver=Native;}
 });
});
describe('Integration',()=>{
 it('binds each diagram to its original placeholder',async()=>{
  const {default:mermaid}=await import('mermaid');
  const original=mermaid.render;
  mermaid.render=async(_id,chart)=>({svg:'<svg data-chart="'+createHash('sha256').update(chart).digest('hex')+'"></svg>',diagramType:'flowchart'});
  try {
   const diagrams=await import('../../app/istqb-ct-genai-study-guide/diagrams');
   const root=await category('page');
   await waitFor(()=>expect(root.querySelectorAll('.mermaid-target svg')).toHaveLength(13));
   for(const id of Object.keys(inventory.charts)){
    const chart=diagrams[('DIAGRAM_'+id.split('-').at(-1)) as keyof typeof diagrams];
    expect(root.querySelector('#'+id+' svg')?.getAttribute('data-chart')).toBe(createHash('sha256').update(chart).digest('hex'));
   }
  }finally{mermaid.render=original;}
 });
 it('adds a distinct specialist route and smoke entry',()=>{
  expect(NAV_ITEMS.find(n=>n.href==='/istqb-ct-genai-study-guide')?.category).toBe('istqb-specialist');
  expect(PAGES.find(n=>n.path==='/istqb-ct-genai-study-guide')).toBeDefined();
  expect(NAV_ITEMS.find(n=>n.href==='/istqb-ct-genai-complete-guide')).toBeDefined();
 });
 it('assembles every category and diagram exactly once',async()=>{
  const root=await category('page');
  for(const selector of ['h1,h2,h3,h4','table','.callout','.mermaid-target','main a']){
   const key=selector==='main a'?'a':selector;
   expect([...root.querySelectorAll(selector)].filter(n=>!n.closest('.mermaid-wrapper')).map(signature)).toEqual(inventory.groups.flatMap(g=>g.items[key as keyof typeof g.items]));
  }
  await waitFor(()=>expect(root.querySelectorAll('.mermaid-target svg')).toHaveLength(13));
  for(const link of root.querySelectorAll('nav a'))expect(document.getElementById(link.getAttribute('data-target')!)).not.toBeNull();
  expect(root.querySelectorAll('script,style')).toHaveLength(0);
 });
 it('retains existing CT-GenAI screens byte for byte',()=>{
  for(const [path,expected] of Object.entries(inventory.existing))expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(expected);
 });
 it('imports scoped page CSS',()=>expect(readFileSync('app/istqb-ct-genai-study-guide/page.tsx','utf8')).toContain("import './istqb-ct-genai-study-guide.css'"));
});
describe('Archive',()=>{
 for(const [extension,key] of [['html','html'],['md','md']] as const)it('archives original '+extension+' without byte changes',()=>{
  const path='archive/'+(extension==='html'?'html-archive':'md-archive')+'/ct-specialist/Ct-genai-study-guide.'+extension;
  expect(existsSync(path)).toBe(true);
  expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(inventory.sourceHashes[key]);
  expect(existsSync('Ct-genai-study-guide.'+extension)).toBe(false);
 });
});
describe('Table accessible names',()=>{
 const expectedCounts: Record<string,number>={Chapter1:4,Chapter2:9,Chapter3:4,Chapter5:4,Overview:2,References:1};
 for(const [name,count] of Object.entries(expectedCounts))it(name+' labels every table by its own section heading',async()=>{
  const root=await category(name);
  const tables=[...root.querySelectorAll('table')];
  expect(tables).toHaveLength(count);
  const labels=tables.map(table=>{
   const nodes=[...root.querySelectorAll('h2[id],h3[id],h4[id],table')];
   const heading=nodes.slice(0,nodes.indexOf(table)).reverse().find(n=>n.tagName!=='TABLE');
   expect(heading).toBeDefined();
   expect(table.getAttribute('aria-labelledby')).toBe(heading!.id);
   const label=root.querySelector('[id="'+heading!.id+'"]');
   expect(norm(label?.textContent ?? '')).not.toBe('');
   return norm(label!.textContent ?? '');
  });
  expect(new Set(labels).size).toBe(labels.length);
 });
});
