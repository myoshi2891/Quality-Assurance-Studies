import { afterEach, expect, it } from 'bun:test';
import React, {act} from 'react';
import {render,fireEvent,cleanup} from '@testing-library/react';
import {sourceModule} from '../helpers/source-module';
const base='app/iso-iec-42001-2023-beginner-guide';
afterEach(()=>{cleanup();localStorage.clear();});
/** Test mobile mode without browser geometry dependencies. */
function mobile() {
  const original=window.matchMedia;
  window.matchMedia=((query:string)=>({matches:query.includes('900px'),media:query,addEventListener(){},removeEventListener(){}})) as unknown as typeof window.matchMedia;
  return ()=>{window.matchMedia=original;};
}

it('mobile TOC toggles, makes background inert, closes on link/Escape, restores focus and preserves modified links',()=>{
  const restore=mobile();
  try {
    const C=sourceModule(`${base}/NavBar.tsx`).default as React.ComponentType;
    const r=render(<div className="iso42001-page"><C/><main className="main"/></div>);
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


it('all 22 items, six category counters, persistence, remount, reset and storage failures',async()=>{const C=sourceModule(base+'/Section18.tsx').default as React.ComponentType;let r=render(<C/>);const boxes=r.getAllByRole('checkbox') as HTMLInputElement[];expect(boxes).toHaveLength(22);for(const box of boxes){box.focus();fireEvent.click(box);expect(box.checked).toBe(true);expect(box.closest('li')!.className).toBe('done');expect(document.activeElement).toBe(box);}expect(r.getByRole('status').textContent).toBe('22 / 22');expect(r.container.querySelectorAll('.check-card.complete')).toHaveLength(6);expect([...r.container.querySelectorAll('.check-bar i')].every(n=>(n as HTMLElement).style.width==='100%')).toBe(true);expect(JSON.parse(localStorage.getItem('iso42001-checklist')!)).toEqual(Array(22).fill(true));r.unmount();r=render(<C/>);expect((r.getAllByRole('checkbox') as HTMLInputElement[]).every(b=>b.checked)).toBe(true);fireEvent.click(r.getByRole('button',{name:'リセット'}));expect(r.getByRole('status').textContent).toBe('0 / 22');expect(r.container.querySelectorAll('.complete,.done')).toHaveLength(0);expect(JSON.parse(localStorage.getItem('iso42001-checklist')!)).toEqual(Array(22).fill(false));// A pending storage event must not let a stale tab overwrite another tab's selection.
localStorage.setItem('iso42001-checklist',JSON.stringify([true]));
fireEvent.click(r.getAllByRole('checkbox')[1]!);
expect(JSON.parse(localStorage.getItem('iso42001-checklist')!).slice(0,2)).toEqual([true,true]);
expect(r.getByRole('status').textContent).toBe('2 / 22');
localStorage.setItem('iso42001-checklist',JSON.stringify([false,false,true]));
fireEvent(window,new StorageEvent('storage',{key:'iso42001-checklist',storageArea:localStorage}));
expect((r.getAllByRole('checkbox')[0] as HTMLInputElement).checked).toBe(false);
expect((r.getAllByRole('checkbox')[2] as HTMLInputElement).checked).toBe(true);
expect(r.getByRole('status').textContent).toBe('1 / 22');
localStorage.clear();
fireEvent(window,new StorageEvent('storage',{key:null,storageArea:localStorage}));
expect(r.getByRole('status').textContent).toBe('0 / 22');
r.unmount();localStorage.setItem('iso42001-checklist','invalid');r=render(<C/>);expect(r.getByRole('status').textContent).toBe('0 / 22');await act(async()=>{});});
