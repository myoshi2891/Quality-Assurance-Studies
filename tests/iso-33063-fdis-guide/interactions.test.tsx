import {afterEach,expect,it} from 'bun:test';
import React,{act} from 'react';
import {render,fireEvent,cleanup} from '@testing-library/react';
import {renderToString} from 'react-dom/server';
import {hydrateRoot} from 'react-dom/client';
import {sourceModule} from '../helpers/source-module';
import inventory from '../../docs/migration-inventory/iso-33063-fdis-guide.json';
const base='app/iso-33063-fdis-guide';
afterEach(cleanup);
/** Load actual JSX through Next's SWC transform. */
function component(file:string){return sourceModule(`${base}/${file}.tsx`).default as React.ComponentType;}

it('mobile drawer handles toggle, backdrop, Escape, focus, modified links, inert, Tab and unmount',()=>{
 const original=window.matchMedia;window.matchMedia=(()=>({matches:true,addEventListener(){},removeEventListener(){}})) as unknown as typeof window.matchMedia;
 try{const C=component('NavBar');const r=render(<div className="iso33063-page"><C/><main className="main"/></div>);const nav=r.container.querySelector('aside')!,button=r.getByRole('button'),main=r.container.querySelector('main')!;
 expect(nav.hasAttribute('inert')).toBe(true);expect(button.getAttribute('aria-controls')).toBe(nav.id);
 for(const dismiss of ['escape','link','scrim']){fireEvent.click(button);expect(button.getAttribute('aria-expanded')).toBe('true');expect(main.hasAttribute('inert')).toBe(true);expect(document.body.style.overflow).toBe('hidden');const a=nav.querySelector('a')!;expect(document.activeElement).toBe(a);fireEvent.keyDown(document,{key:'Tab',shiftKey:true});expect(document.activeElement).toBe(button);fireEvent.keyDown(document,{key:'Tab'});expect(document.activeElement).toBe(a);for(const key of ['ctrlKey','metaKey','shiftKey','altKey']){fireEvent.click(a,{[key]:true});expect(button.getAttribute('aria-expanded')).toBe('true');}if(dismiss==='escape')fireEvent.keyDown(document,{key:'Escape'});else if(dismiss==='link')fireEvent.click(a);else fireEvent.click(r.container.querySelector('.scrim')!);expect(button.getAttribute('aria-expanded')).toBe('false');expect(main.hasAttribute('inert')).toBe(false);expect(document.activeElement).toBe(button);}
 fireEvent.click(button);
 const panel=document.createElement('div');panel.id='global-nav-panel';const globalButton=document.createElement('button');panel.append(globalButton);document.body.append(panel);
 try{globalButton.focus();for(const key of ['Tab','Escape']){const event=new KeyboardEvent('keydown',{key,bubbles:true,cancelable:true});document.dispatchEvent(event);expect(event.defaultPrevented).toBe(false);expect(document.activeElement).toBe(globalButton);expect(button.getAttribute('aria-expanded')).toBe('true');}}finally{panel.remove();}
 fireEvent.keyDown(document,{key:'Tab'});expect(document.activeElement).toBe(nav.querySelector('a'));fireEvent.keyDown(document,{key:'Escape'});expect(button.getAttribute('aria-expanded')).toBe('false');expect(document.activeElement).toBe(button);
 fireEvent.click(button);r.unmount();expect(document.body.style.overflow).toBe('');expect(main.hasAttribute('inert')).toBe(false);
 }finally{window.matchMedia=original;}
});
it('server-rendered page hydrates without text, table or nested-label warnings',async()=>{const C=component('page');const container=document.createElement('div');document.body.append(container);container.innerHTML=renderToString(<C/>);const errors:unknown[]=[];const previous=console.error;console.error=(...args)=>errors.push(args);let root:ReturnType<typeof hydrateRoot>|undefined;try{await act(async()=>{root=hydrateRoot(container,<C/>,{onRecoverableError:e=>errors.push(e)});});expect(errors).toEqual([]);}finally{await act(async()=>root?.unmount());console.error=previous;container.remove();}});
it('TOC observes all 14 headings, follows each fragment and disconnects on unmount',()=>{
 const saved=globalThis.IntersectionObserver;const observed:Element[]=[];let disconnected=false;
 globalThis.IntersectionObserver=class {observe(n:Element){observed.push(n);}disconnect(){disconnected=true;}} as unknown as typeof IntersectionObserver;
 const heads=document.createElement('div');heads.innerHTML=inventory.groups.toc.items.map(html=>{const href=html.match(/href="([^"]+)/)![1]!;return `<h2 id="${href.slice(1)}">heading</h2>`;}).join('');document.body.append(heads);
 try{const C=component('NavBar');const r=render(<div className="iso33063-page"><C/><main className="main"/></div>);expect(observed.map(n=>n.id)).toEqual([...heads.children].map(n=>n.id));for(const h of heads.children){history.replaceState(null,'','#'+h.id);fireEvent(window,new Event('hashchange'));const links=r.container.querySelectorAll('a[aria-current="location"]');expect(links).toHaveLength(1);expect(links[0]!.getAttribute('href')).toBe('#'+h.id);}r.unmount();expect(disconnected).toBe(true);
 }finally{globalThis.IntersectionObserver=saved;heads.remove();history.replaceState(null,'','/');}
});

for(const[index,d]of inventory.diagrams.entries())it(`diagram ${index}: accessible failure fallback`,async()=>{let error:(()=>void)|undefined;const C=sourceModule(base+'/Diagram.tsx',{onMermaidChart:(_,cb)=>{error=cb;}}).default as React.ComponentType<{index:number}>;const r=render(<C index={index}/>);expect(r.getByRole('img').getAttribute('aria-label')).toBe(d.description);await act(async()=>error?.());const alert=r.getByRole('alert');expect(alert.textContent).toContain(d.description);expect(alert.closest('[role="img"]')).toBeNull();expect(alert.previousElementSibling).toBe(r.getByRole('img'));});

it('keeps the active TOC entry inside the sidebar viewport',()=>{const C=component('NavBar');const r=render(<C/>);const sidebar=r.container.querySelector('aside')!;const link=sidebar.querySelectorAll<HTMLAnchorElement>('a')[13]!;sidebar.getBoundingClientRect=()=>({top:100,bottom:700,height:600}) as DOMRect;link.getBoundingClientRect=()=>({top:900,bottom:930,height:30}) as DOMRect;history.replaceState(null,'',link.getAttribute('href')!);fireEvent(window,new Event('hashchange'));expect(sidebar.scrollTop).toBe(600);history.replaceState(null,'','/');});

it('explains every sequence message using the visible participant names',()=>{const d=inventory.diagrams[5]!;const names:Record<string,string>={SP:'スポンサー',AS:'アセッサ',ORG:'評価対象の組織'};const expected=d.sequence.map(e=>`${names[e.from!]} → ${names[e.to!]}：${e.message}${e.dotted?'（破線）':''}。`).join('');const C=sourceModule(base+'/Diagram.tsx').default as React.ComponentType<{index:number}>;const r=render(<C index={5}/>);expect(r.getByRole('img').getAttribute('aria-label')).toBe(expected);});
