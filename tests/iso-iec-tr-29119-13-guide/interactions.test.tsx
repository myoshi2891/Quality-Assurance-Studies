import { afterEach, describe, expect, it } from 'bun:test';
import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot, type Root } from 'react-dom/client';
import inventory from '../../docs/migration-inventory/iso-iec-tr-29119-13-guide.json';
import { sourceModule } from '../helpers/source-module';

const base = 'app/iso-iec-tr-29119-13-guide';
afterEach(cleanup);

/** Install deterministic media/observer/frame fixtures and restore the original browser state. */
function navigationFixture() {
  const originals = { media:window.matchMedia, io:globalThis.IntersectionObserver, raf:globalThis.requestAnimationFrame, caf:globalThis.cancelAnimationFrame, scroll:Object.getOwnPropertyDescriptor(window,'scrollY') };
  let matches = true;
  let notify: (()=>void) | undefined;
  let observerNotify: (()=>void) | undefined;
  let disconnected = false;
  const observed: string[] = [];
  const frames = new Map<number,FrameRequestCallback>(); let sequence = 0;
  window.matchMedia = (()=>({ get matches() { return matches; }, addEventListener: (_:string, cb:()=>void)=> { notify=cb; }, removeEventListener:()=> { notify=undefined; } })) as unknown as typeof window.matchMedia;
  globalThis.IntersectionObserver = class { constructor(cb:()=>void) { observerNotify=cb; } observe(n:HTMLElement) { observed.push(n.id); } disconnect() { disconnected=true; } } as unknown as typeof IntersectionObserver;
  globalThis.requestAnimationFrame = cb=> { frames.set(++sequence,cb); return sequence; };
  globalThis.cancelAnimationFrame = id=> { frames.delete(id); };
  const Nav = sourceModule(`${base}/NavBar.tsx`).default as React.ComponentType;
  const r = render(<div className="iso29119-13-page"><div className="app"><Nav /><div className="main">{Array.from({length:19},(_,i)=><h2 id={['s1','s2','s3','s5','s8','s9','s13','s18','s21','s26','s31','s34','s37','s39','s43','s47','s48','s51','s56'][i]} key={i}>Section</h2>)}</div></div></div>);
  return { ...r, observed, disconnected:()=>disconnected, resize:(value:boolean)=>act(()=> { matches=value; notify?.(); }), observer:()=>act(()=>observerNotify?.()), flush:()=>act(()=> { const queued=[...frames.values()]; frames.clear(); queued.forEach(cb=>cb(0)); }), restore:()=> { r.unmount(); window.matchMedia=originals.media; globalThis.IntersectionObserver=originals.io; globalThis.requestAnimationFrame=originals.raf; globalThis.cancelAnimationFrame=originals.caf; if(originals.scroll) Object.defineProperty(window,'scrollY',originals.scroll); window.history.replaceState(null,'','/'); } };
}

describe('mobile TOC', () => {
  it('opens with first-link focus, aria state, inert content and scroll isolation; Escape restores focus', () => {
    const r=navigationFixture();
    try {
      const button=r.getByRole('button',{name:'目次を開く'}); const main=r.container.querySelector('.main')!;
      fireEvent.keyDown(document,{key:'Escape'}); expect(document.activeElement).not.toBe(button);
      fireEvent.click(button);
      expect(button.getAttribute('aria-expanded')).toBe('true'); expect(main.hasAttribute('inert')).toBe(true);
      expect(r.container.querySelector('.app')!.classList.contains('toc-open')).toBe(true);
      expect(document.activeElement).toBe(r.container.querySelector('.toc a'));
      fireEvent.keyDown(document,{key:'Escape'});
      expect(button.getAttribute('aria-expanded')).toBe('false'); expect(main.hasAttribute('inert')).toBe(false);
      expect(document.activeElement).toBe(button);
    } finally { r.restore(); }
  });
  it('cycles forward and backward between all nineteen links and the floating close button', () => {
    const r=navigationFixture();
    try {
      const button=r.getByRole('button',{name:'目次を開く'}); fireEvent.click(button);
      const links=Array.from(r.container.querySelectorAll('.toc a'));
      for(const link of [...links.slice(1),button,links[0]!]) { fireEvent.keyDown(document,{key:'Tab'}); expect(document.activeElement).toBe(link); }
      fireEvent.keyDown(document,{key:'Tab',shiftKey:true}); expect(document.activeElement).toBe(button);
      fireEvent.keyDown(document,{key:'Tab',shiftKey:true}); expect(document.activeElement).toBe(links.at(-1)!);
    } finally { r.restore(); }
  });
  for(const mode of ['backdrop','link','breakpoint','unmount']) it(`closes on ${mode} and restores content/scroll state`,()=> {
    const overflow=document.body.style.overflow; const r=navigationFixture();
    try {
      const button=r.getByRole('button',{name:'目次を開く'}); fireEvent.click(button);
      expect(document.body.style.overflow).toBe('hidden');
      if(mode==='backdrop') fireEvent.click(r.container.querySelector('.toc-backdrop')!);
      if(mode==='link') fireEvent.click(r.container.querySelector('.toc a')!);
      if(mode==='breakpoint') r.resize(false);
      if(mode==='unmount') r.unmount();
      expect(r.container.querySelector('.main')?.hasAttribute('inert') ?? false).toBe(false);
      expect(document.body.style.overflow).toBe(overflow);
      if(mode==='backdrop') expect(document.activeElement).toBe(button);
      if(mode==='link') expect(document.activeElement).not.toBe(button);
    } finally { r.restore(); }
  });
  for(const modifier of ['ctrlKey','metaKey','shiftKey','altKey']) it(`preserves native modified link behavior: ${modifier}`,()=> {
    const r=navigationFixture(); try { const button=r.getByRole('button',{name:'目次を開く'}); fireEvent.click(button); fireEvent.click(r.container.querySelector('.toc a')!,{[modifier]:true}); expect(button.getAttribute('aria-expanded')).toBe('true'); } finally {r.restore();}
  });
  it('observes every section and disconnects on unmount',()=> { const r=navigationFixture(); expect(r.observed).toEqual(['s1','s2','s3','s5','s8','s9','s13','s18','s21','s26','s31','s34','s37','s39','s43','s47','s48','s51','s56']); r.restore(); expect(r.disconnected()).toBe(true); });
  it('tracks measured headings when scrolling down/up and resolves hashes without stale observer ordering',()=> {
    const r=navigationFixture();
    try {
      const headings=Array.from(r.container.querySelectorAll('h2')); let chosen=5;
      headings.forEach((h,i)=>{ h.getBoundingClientRect=()=>({top:(i-chosen)*100+20} as DOMRect); });
      Object.defineProperty(window,'scrollY',{configurable:true,value:-100000});
      r.flush(); expect(r.container.querySelector('[aria-current="location"]')?.getAttribute('href')).toBe('#s9');
      chosen=2; fireEvent.scroll(window); r.flush(); expect(r.container.querySelector('[aria-current="location"]')?.getAttribute('href')).toBe('#s3');
      window.history.replaceState(null,'','#s48'); fireEvent(window,new Event('hashchange')); expect(r.container.querySelector('[aria-current="location"]')?.getAttribute('href')).toBe('#s48');
      window.history.replaceState(null,'','#unknown'); fireEvent(window,new Event('hashchange')); expect(r.container.querySelector('[aria-current="location"]')?.getAttribute('href')).toBe('#s48');
      Object.defineProperty(window,'scrollY',{configurable:true,value:100000}); fireEvent.scroll(window); r.flush(); expect(r.container.querySelector('[aria-current="location"]')?.getAttribute('href')).toBe('#s56');
    } finally {r.restore();}
  });
});

describe('checklist',()=> {
  it('updates each exact item, percentage and complete state, reverses changes and retains focus',()=> {
    const C=sourceModule(`${base}/Section17.tsx`).default as React.ComponentType;
    const r=render(<C/>); const boxes=r.getAllByRole('checkbox');
    expect(boxes.map(b=>b.closest('label')!.textContent)).toEqual(inventory.groups.checklist.items.map(html=>html.replace(/<[^>]*>/g,'')));
    const progress=r.getByRole('progressbar');
    expect(progress.getAttribute('aria-valuenow')).toBe('0');
    for(const [i,box] of boxes.entries()) {
      box.focus(); fireEvent.click(box);
      expect(document.activeElement).toBe(box); expect(r.container.querySelector('.progress-count')!.textContent).toBe(`${i+1} / 10`);
      expect(r.container.querySelector<HTMLElement>('.progress-fill')!.style.width).toBe(`${(i+1)*10}%`);
      expect(progress.getAttribute('aria-valuenow')).toBe(String(i+1));
      expect(r.container.querySelector('.progress')!.classList.contains('complete')).toBe(i===9);
    }
    fireEvent.click(boxes[0]!); expect(progress.getAttribute('aria-valuenow')).toBe('9'); expect(r.container.querySelector('.progress')!.classList.contains('complete')).toBe(false);
  });
});

for(const [index,d] of inventory.diagrams.entries()) it(`${d.id}: meaningful accessible diagram name and visible error fallback`,()=> {
  let fail:(()=>void)|undefined;
  const C=sourceModule(`${base}/Diagram.tsx`,{onMermaidChart:(_chart,cb)=>{fail=cb;}}).default as React.ComponentType<{index:number}>;
  const r=render(<C index={index}/>); const img=r.getByRole('img'); const name=img.getAttribute('aria-label')!;
  expect(name).toContain(d.heading.replace(/\s+/g,' ').trim()); expect(name.length).toBeGreaterThan(40); expect(img.getAttribute('tabindex')).toBe('0');
  expect(r.queryByRole('alert')).toBeNull(); act(()=>fail?.()); expect(r.getByRole('alert').textContent).toContain('図表の描画に失敗しました'); expect(r.container.textContent).toContain(name);
});

for(const development of [false,true]) it(`hydrates actual page without warnings and connects checklist/TOC events, development=${development}`,async()=> {
  const Page=sourceModule(`${base}/page.tsx`,{development}).default as React.ComponentType;
  const host=document.createElement('div'); host.innerHTML=renderToString(<Page/>); document.body.append(host);
  const warnings:unknown[][]=[]; const errors:unknown[]=[]; const original=console.error; console.error=(...args)=>{warnings.push(args);}; let root:Root|undefined;
  try {
    await act(async()=>{root=hydrateRoot(host,<Page/>,{onRecoverableError:e=>errors.push(e)});});
    await act(async()=>fireEvent.click(host.querySelector('input')!)); expect(host.querySelector('.progress-count')!.textContent).toBe('1 / 10');
    expect(Array.from(host.querySelectorAll('table,thead,tbody,tr')).flatMap(n=>Array.from(n.childNodes).filter(n=>n.nodeType===Node.TEXT_NODE))).toHaveLength(0);
    expect(errors).toEqual([]); expect(warnings).toEqual([]);
  } finally {if(root) await act(async()=>root!.unmount()); console.error=original; host.remove();}
});
