import {afterEach,expect,it} from 'bun:test';
import React,{act} from 'react';
import {render,fireEvent,cleanup} from '@testing-library/react';
import {renderToString} from 'react-dom/server';
import {hydrateRoot} from 'react-dom/client';
import {sourceModule} from '../helpers/source-module';
import inventory from '../../docs/migration-inventory/iso-iec-42005-2025-beginner-guide.json';
const base='app/iso-iec-42005-2025-beginner-guide';
afterEach(cleanup);
/** Load actual JSX through Next's SWC transform. */
function component(file:string){return sourceModule(`${base}/${file}.tsx`).default as React.ComponentType;}

it('mobile drawer handles toggle, backdrop, Escape, focus, modified links, inert, Tab and unmount',()=>{
 const original=window.matchMedia;window.matchMedia=(()=>({matches:true,addEventListener(){},removeEventListener(){}})) as unknown as typeof window.matchMedia;
 try{const C=component('NavBar');const r=render(<div className="iso42005-page"><C/><main className="main"/></div>);const nav=r.container.querySelector('aside')!,button=r.getByRole('button'),main=r.container.querySelector('main')!;
 expect(nav.hasAttribute('inert')).toBe(true);expect(button.getAttribute('aria-controls')).toBe(nav.id);
 for(const dismiss of ['escape','link','scrim']){fireEvent.click(button);expect(button.getAttribute('aria-expanded')).toBe('true');expect(main.hasAttribute('inert')).toBe(true);expect(document.body.style.overflow).toBe('hidden');const a=nav.querySelector('a')!;expect(document.activeElement).toBe(a);fireEvent.keyDown(document,{key:'Tab',shiftKey:true});expect(document.activeElement).toBe(button);fireEvent.keyDown(document,{key:'Tab'});expect(document.activeElement).toBe(a);for(const key of ['ctrlKey','metaKey','shiftKey','altKey']){fireEvent.click(a,{[key]:true});expect(button.getAttribute('aria-expanded')).toBe('true');}if(dismiss==='escape')fireEvent.keyDown(document,{key:'Escape'});else if(dismiss==='link')fireEvent.click(a);else fireEvent.click(r.container.querySelector('.scrim')!);expect(button.getAttribute('aria-expanded')).toBe('false');expect(main.hasAttribute('inert')).toBe(false);expect(document.activeElement).toBe(button);}
 const header=document.createElement('header');const globalButton=document.createElement('button');header.append(globalButton);document.body.append(header);
 const preserved=document.createElement('div');preserved.setAttribute('inert','');document.body.append(preserved);
 try{fireEvent.click(button);const dialog=r.getByRole('dialog',{name:'目次'});expect(dialog.getAttribute('aria-modal')).toBe('true');expect(dialog.contains(nav)).toBe(true);expect(dialog.contains(button)).toBe(true);expect(header.hasAttribute('inert')).toBe(true);expect(dialog.closest('[inert]')).toBeNull();fireEvent.keyDown(document,{key:'Escape'});expect(r.queryByRole('dialog')).toBeNull();expect(header.hasAttribute('inert')).toBe(false);expect(preserved.hasAttribute('inert')).toBe(true);expect(document.activeElement).toBe(button);}finally{header.remove();preserved.remove();}
 fireEvent.click(button);r.unmount();expect(document.body.style.overflow).toBe('');expect(main.hasAttribute('inert')).toBe(false);
 }finally{window.matchMedia=original;}
});
it('server-rendered page hydrates without text, table or nested-label warnings',async()=>{const C=component('page');const container=document.createElement('div');document.body.append(container);container.innerHTML=renderToString(<C/>);const errors:unknown[]=[];const previous=console.error;console.error=(...args)=>errors.push(args);let root:ReturnType<typeof hydrateRoot>|undefined;try{await act(async()=>{root=hydrateRoot(container,<C/>,{onRecoverableError:e=>errors.push(e)});});expect(errors).toEqual([]);}finally{await act(async()=>root?.unmount());console.error=previous;container.remove();}});
it('TOC observes all 14 headings, follows each fragment and disconnects on unmount',()=>{
 const saved=globalThis.IntersectionObserver;const observed:Element[]=[];let disconnected=false;
 globalThis.IntersectionObserver=class {observe(n:Element){observed.push(n);}disconnect(){disconnected=true;}} as unknown as typeof IntersectionObserver;
 const heads=document.createElement('div');heads.innerHTML=inventory.groups.toc.items.map(html=>{const href=html.match(/href="([^"]+)/)![1]!;return `<h2 id="${href.slice(1)}">heading</h2>`;}).join('');document.body.append(heads);
 try{const C=component('NavBar');const r=render(<div className="iso42005-page"><C/><main className="main"/></div>);expect(observed.map(n=>n.id)).toEqual([...heads.children].map(n=>n.id));for(const h of heads.children){history.replaceState(null,'','#'+h.id);fireEvent(window,new Event('hashchange'));const links=r.container.querySelectorAll('a[aria-current="location"]');expect(links).toHaveLength(1);expect(links[0]!.getAttribute('href')).toBe('#'+h.id);}r.unmount();expect(disconnected).toBe(true);
 }finally{globalThis.IntersectionObserver=saved;heads.remove();history.replaceState(null,'','/');}
});

for(const[index,d]of inventory.diagrams.entries())it(`diagram ${index}: accessible failure fallback`,async()=>{let error:(()=>void)|undefined;const C=sourceModule(base+'/Diagram.tsx',{onMermaidChart:(_,cb)=>{error=cb;}}).default as React.ComponentType<{index:number}>;const r=render(<C index={index}/>);expect(r.getByRole('img').getAttribute('aria-label')).toBe(d.description);await act(async()=>error?.());const alert=r.getByRole('alert');expect(alert.textContent).toContain(d.description);expect(alert.closest('[role="img"]')).toBeNull();expect(alert.previousElementSibling).toBe(r.getByRole('img'));});

it('keeps the active TOC entry inside the sidebar viewport',()=>{const C=component('NavBar');const r=render(<C/>);const sidebar=r.container.querySelector('aside')!;const link=sidebar.querySelectorAll<HTMLAnchorElement>('a')[66]!;sidebar.getBoundingClientRect=()=>({top:100,bottom:700,height:600}) as DOMRect;link.getBoundingClientRect=()=>({top:900,bottom:930,height:30}) as DOMRect;history.replaceState(null,'',link.getAttribute('href')!);fireEvent(window,new Event('hashchange'));expect(sidebar.scrollTop).toBe(600);history.replaceState(null,'','/');});

it('keeps the desktop sidebar non-modal and the background interactive',()=>{const original=window.matchMedia;window.matchMedia=(()=>({matches:false,addEventListener(){},removeEventListener(){}})) as unknown as typeof window.matchMedia;try{const C=component('NavBar');const r=render(<div className="iso42005-page"><C/><main className="main"/></div>);expect(r.queryByRole('dialog')).toBeNull();expect(r.container.querySelector('aside')!.hasAttribute('inert')).toBe(false);expect(r.container.querySelector('main')!.hasAttribute('inert')).toBe(false);}finally{window.matchMedia=original;}});

it('checks every item, updates progress, persists and restores, then resets',()=>{
 localStorage.clear();const C=component('Checklist');let r=render(<C/>);const boxes=r.getAllByRole('checkbox');expect(boxes.length).toBe(13);expect(r.getByRole('progressbar').getAttribute('aria-valuenow')).toBe('0');
 boxes.forEach((box,i)=>{fireEvent.click(box);expect(r.getByRole('progressbar').getAttribute('aria-valuenow')).toBe(String(i+1));expect(box.closest('li')!.classList.contains('done')).toBe(true);});
 expect(r.container.querySelector('.checklist-card')!.classList.contains('complete')).toBe(true);expect(JSON.parse(localStorage.getItem('iso42005-cl-1')!)).toEqual(Array.from({length:13},(_,i)=>String(i+1)));r.unmount();
 r=render(<C/>);expect(r.getAllByRole('checkbox').every(b=>(b as HTMLInputElement).checked)).toBe(true);fireEvent.click(r.getByRole('button',{name:'リセット'}));expect(r.getAllByRole('checkbox').some(b=>(b as HTMLInputElement).checked)).toBe(false);expect(r.getByRole('progressbar').getAttribute('aria-valuenow')).toBe('0');expect(localStorage.getItem('iso42005-cl-1')).toBe('[]');localStorage.clear();
});
for(const saved of ['broken','{}','null','123','["unknown","1",1]'])it(`handles malformed or stale saved checklist: ${saved}`,()=>{localStorage.setItem('iso42005-cl-1',saved);const C=component('Checklist');const r=render(<C/>);expect(r.getAllByRole('checkbox').filter(b=>(b as HTMLInputElement).checked).length).toBe(saved.includes('unknown')?1:0);localStorage.clear();});
it('works when browser storage is unavailable',()=>{const get=Storage.prototype.getItem,set=Storage.prototype.setItem;Storage.prototype.getItem=()=>{throw Error('denied');};Storage.prototype.setItem=()=>{throw Error('denied');};try{const C=component('Checklist');const r=render(<C/>);fireEvent.click(r.getAllByRole('checkbox')[0]!);expect(r.getByRole('progressbar').getAttribute('aria-valuenow')).toBe('1');fireEvent.click(r.getByRole('button',{name:'リセット'}));expect(r.getByRole('progressbar').getAttribute('aria-valuenow')).toBe('0');}finally{Storage.prototype.getItem=get;Storage.prototype.setItem=set;}});
