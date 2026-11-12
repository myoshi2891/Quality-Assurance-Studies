import { afterEach, describe, expect, it } from 'bun:test';
import React, { act } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { load } from 'cheerio';
import { sourceModule } from '../helpers/source-module';
import inventory from '../../docs/migration-inventory/iso-iec-awi-ts-42119-7-guide.json';
const base = 'app/iso-iec-awi-ts-42119-7-guide';
afterEach(cleanup);
const lists = load(inventory.originalBody)('.checklist-card').toArray().map(n=>load(n)('label').map((_,e)=>load(e).text()).get());

describe('independent preparation, execution and reporting checklists', () => {
  for (const [group, items] of lists.entries()) it(`group ${group}: all ${items.length} selections, reset, progress and focus`, () => {
    const C = sourceModule(`${base}/Checklist.tsx`).default as React.ComponentType<{items:string[]}>;
    const r = render(<C items={items} />), boxes = r.getAllByRole('checkbox') as HTMLInputElement[];
    expect(boxes).toHaveLength(items.length);
    items.forEach((item, i) => expect(r.getByRole('checkbox', { name: item.replace(/\s+/g, ' ').trim() })).toBe(boxes[i]!));
    expect(r.getByRole('status').textContent).toBe(`0 / ${items.length}`);
    boxes.forEach((box,i)=> {box.focus(); fireEvent.click(box); expect(box.checked).toBe(true); expect(box.closest('li')!.className).toBe('done'); expect(document.activeElement).toBe(box); expect(r.getByRole('status').textContent).toBe(`${i+1} / ${items.length}`); expect(r.getByRole('progressbar').getAttribute('aria-valuenow')).toBe(String(i+1)); expect((r.container.querySelector('.cp-fill') as HTMLElement).style.width).toBe(`${(i+1)/items.length*100}%`);});
    boxes.forEach((box,i)=> {fireEvent.click(box); expect(box.checked).toBe(false); expect(box.closest('li')!.className).toBe(''); expect(r.getByRole('status').textContent).toBe(`${items.length-i-1} / ${items.length}`);});
  });
  it('keeps all three counters independent', () => {
    const C = sourceModule(`${base}/Checklist.tsx`).default as React.ComponentType<{items:string[]}>;
    const r = render(<>{lists.map((items,i)=><C key={i} items={items}/>)}</>);
    fireEvent.click(r.getAllByRole('checkbox')[0]!);
    expect(r.getAllByRole('status').map(n=>n.textContent)).toEqual(['1 / 8','0 / 4','0 / 4']);
  });
});

for (const [index,d] of inventory.diagrams.entries()) it(`${d.id}: readable description and visible failure fallback`, () => {
  let fail: (()=>void)|undefined;
  const C = sourceModule(`${base}/Diagram.tsx`,{onMermaidChart:(_c,f)=>{fail=f;}}).default as React.ComponentType<{index:number}>;
  const r = render(<C index={index}/>);
  const label=r.getByRole('img').getAttribute('aria-label')!;
  for (const text of d.labels) expect(label).toContain(text);
  act(()=>fail?.());
  expect(r.getByRole('alert').textContent).toContain('図表の描画に失敗');
  expect(r.container.textContent).toContain(label);
});

/** Test mobile mode without browser geometry dependencies. */
function mobile() {
  const original=window.matchMedia;
  window.matchMedia=((query:string)=>({matches:query.includes('960px'),media:query,addEventListener(){},removeEventListener(){}})) as unknown as typeof window.matchMedia;
  return ()=>{window.matchMedia=original;};
}

it('mobile TOC toggles, makes background inert, closes on link/Escape, restores focus and preserves modified links',()=>{
  const restore=mobile();
  try {
    const C=sourceModule(`${base}/NavBar.tsx`).default as React.ComponentType;
    const r=render(<div className="iso42119-7-page"><C/><main className="main"/></div>);
    const button=r.getByRole('button'),nav=r.container.querySelector('.sidebar')!, main=r.container.querySelector('main')!;
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(nav.hasAttribute('inert')).toBe(true);
    fireEvent.click(button); expect(button.getAttribute('aria-expanded')).toBe('true'); expect(nav.classList.contains('open')).toBe(true); expect(main.hasAttribute('inert')).toBe(true);
    const a=nav.querySelector('a')!;
    fireEvent.click(a,{ctrlKey:true}); expect(button.getAttribute('aria-expanded')).toBe('true');
    fireEvent.click(a); expect(button.getAttribute('aria-expanded')).toBe('false'); expect(main.hasAttribute('inert')).toBe(false);
    fireEvent.click(button); fireEvent.keyDown(document,{key:'Escape'}); expect(button.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(button);
    fireEvent.click(button); r.unmount(); expect(main.hasAttribute('inert')).toBe(false);
  } finally {restore();}
});

it('observes all 78 heading targets and disconnects on unmount',()=>{
  const original=globalThis.IntersectionObserver;let observed=0,disconnected=0;
  globalThis.IntersectionObserver=class {observe(){observed++;} disconnect(){disconnected++;} unobserve(){} takeRecords(){return [];} root=null;rootMargin='';thresholds=[];} as unknown as typeof IntersectionObserver;
  try {
    const C=sourceModule(`${base}/NavBar.tsx`).default as React.ComponentType;
    const targets=inventory.toc.flatMap(t=>[t,...t.children]);
    const r=render(<><C/>{targets.map(t=><h2 key={t.target} id={t.target}>{t.text}</h2>)}</>);
    expect(observed).toBe(78); r.unmount(); expect(disconnected).toBe(1);
  } finally {globalThis.IntersectionObserver=original;}
});

it('hydrates the complete real page without changing source text or producing recoverable errors',async()=>{
  const Page=sourceModule(`${base}/page.tsx`).default as React.ComponentType;
  const host=document.createElement('div');document.body.appendChild(host);host.innerHTML=renderToString(<Page/>);
  const before=host.textContent,errors:unknown[]=[];
  let root:ReturnType<typeof hydrateRoot>;
  await act(async()=>{root=hydrateRoot(host,<Page/>,{onRecoverableError:e=>errors.push(e)});});
  expect(errors).toEqual([]); expect(host.textContent).toBe(before);
  await act(async()=>root!.unmount());host.remove();
});

it('uses measured heading positions for active TOC links on scroll and preserves mobile link focus',async()=>{
  const C=sourceModule(`${base}/NavBar.tsx`).default as React.ComponentType;
  const targets=inventory.toc.flatMap(t=>[t,...t.children]);
  const r=render(<><C/>{targets.map(t=><h2 key={t.target} id={t.target}>{t.text}</h2>)}</>);
  targets.forEach((t,i)=> {const h=document.getElementById(t.target)!;h.getBoundingClientRect=()=>({top:i<4?-200:300+i*100,bottom:400,left:0,right:100,width:100,height:30,x:0,y:0,toJSON(){}});});
  await act(async()=>{window.dispatchEvent(new Event('scroll'));await new Promise(resolve=>setTimeout(resolve,40));});
  expect(r.container.querySelector('[aria-current="location"]')!.getAttribute('data-target')).toBe(targets[3]!.target);
});
