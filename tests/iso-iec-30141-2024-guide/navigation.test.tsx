import { it, expect, afterEach } from 'bun:test';
import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { sourceModule } from '../helpers/source-module';
afterEach(cleanup);
it('opens, closes with Escape and restores focus; disconnects observer',()=>{
 let disconnected=false;const observed:string[]=[];const original=globalThis.IntersectionObserver;
 globalThis.IntersectionObserver=class{observe(el:Element){observed.push(el.id)}disconnect(){disconnected=true}} as unknown as typeof IntersectionObserver;
 try {const Nav=sourceModule('app/iso-iec-30141-2024-guide/NavBar.tsx').default as React.ComponentType;const view=render(<Nav/>);const button=view.getByRole('button');expect(button.getAttribute('aria-expanded')).toBe('false');fireEvent.click(button);expect(button.getAttribute('aria-expanded')).toBe('true');fireEvent.keyDown(document,{key:'Escape'});expect(button.getAttribute('aria-expanded')).toBe('false');expect(document.activeElement).toBe(button);fireEvent.click(button);fireEvent.click(view.getAllByRole('link')[0]!);expect(button.getAttribute('aria-expanded')).toBe('false');expect(view.getAllByRole('link')[0]!.getAttribute('aria-current')).toBe('location');view.unmount();expect(disconnected).toBe(true);}finally{globalThis.IntersectionObserver=original;}
});
it('observes every TOC heading, updates active link and releases every observer on unmount',()=>{
 const original=globalThis.IntersectionObserver;const headings:HTMLElement[]=[];const observed:string[]=[];let notify:IntersectionObserverCallback=()=>{};let disconnected=0;
 globalThis.IntersectionObserver=class{constructor(callback:IntersectionObserverCallback){notify=callback;}observe(el:Element){observed.push(el.id);}disconnect(){disconnected++;}} as unknown as typeof IntersectionObserver;
 try{
  const Nav=sourceModule('app/iso-iec-30141-2024-guide/NavBar.tsx').default as React.ComponentType;
  const seed=render(<Nav/>);const ids=seed.getAllByRole('link').map(a=>a.getAttribute('href')!.slice(1));seed.unmount();
  ids.forEach(id=>{const h=document.createElement('h2');h.id=id;document.body.appendChild(h);headings.push(h);});
  const view=render(<Nav/>);expect(observed).toEqual(ids);
  act(()=>notify([{isIntersecting:true,target:headings[12]} as IntersectionObserverEntry],{} as IntersectionObserver));
  expect(view.getAllByRole('link').filter(a=>a.getAttribute('aria-current')==='location').map(a=>a.getAttribute('href'))).toEqual(['#'+ids[12]]);
  view.unmount();expect(disconnected).toBe(2);
 }finally{headings.forEach(h=>h.remove());globalThis.IntersectionObserver=original;}
});
