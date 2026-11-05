import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot, type Root } from 'react-dom/client';
import inventory from '../../docs/migration-inventory/iso-iec-40500-2025-guide.json';
import { sourceModule } from '../helpers/source-module';
const entry = '../../app/iso-iec-40500-2025-guide/';
const originalWidth = window.innerWidth;
afterEach(() => { cleanup(); window.history.replaceState(null,'','/'); Object.defineProperty(window,'innerWidth',{configurable:true,value:originalWidth}); });
describe('learning progress', () => {
    it('labels all ten checkboxes and updates each selection and deselection', async () => {
        const Checklist = (await import(entry+'Checklist')).default;
        const view = render(<Checklist />), boxes = view.getAllByRole('checkbox');
        expect(boxes).toHaveLength(10); expect(view.container.querySelector('.cp-count')?.textContent).toBe('0 / 10');
        for (const box of boxes) expect((box as HTMLInputElement).labels?.[0]?.textContent?.trim().length).toBeGreaterThan(5);
        for (const [i,box] of boxes.entries()) { fireEvent.click(box); expect(view.container.querySelector('.cp-count')?.textContent).toBe(`${i+1} / 10`); expect(view.getByRole('progressbar').getAttribute('aria-valuenow')).toBe(String((i+1)*10)); expect((view.container.querySelector('.cp-fill') as HTMLElement).style.width).toBe(`${(i+1)*10}%`); }
        for (const [i,box] of boxes.entries()) { fireEvent.click(box); expect(view.container.querySelector('.cp-count')?.textContent).toBe(`${9-i} / 10`); }
    });
    it('keeps progress local to each checklist', async () => {
        const Checklist = (await import(entry+'Checklist')).default; const view = render(<><Checklist /><Checklist /></>);
        fireEvent.click(view.getAllByRole('checkbox')[0]!); expect(Array.from(view.container.querySelectorAll('.cp-count'),n=>n.textContent)).toEqual(['1 / 10','0 / 10']);
    });
});
describe('hierarchical TOC', () => {
    async function setup() { Object.defineProperty(window,'innerWidth',{configurable:true,value:390}); const Nav = (await import(entry+'NavBar')).default; return render(<Nav />); }
    it('preserves all fifty ordered anchors and their exact hierarchy', async () => {
        const view=await setup(); expect(Array.from(view.container.querySelectorAll('nav a'),n=>[n.textContent,n.getAttribute('href'),n.className])).toEqual(inventory.groups.toc.items.map(n=>[n.children[0]!,n.attrs.href,n.attrs.class??'']));
        expect(view.container.querySelectorAll('.nav-sub')).toHaveLength(10);
    });
    it('hides closed mobile links from focus and closes with Escape and anchors', async () => {
        const view=await setup(),button=view.getByRole('button',{name:'目次を開閉'}),nav=view.container.querySelector('nav')!;
        expect(nav.hasAttribute('inert')).toBe(true); fireEvent.click(button); expect(nav.classList.contains('open')).toBe(true); expect(nav.hasAttribute('inert')).toBe(false);
        fireEvent.keyDown(document,{key:'Escape'}); expect(button.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(button);
        fireEvent.click(button); fireEvent.click(nav.querySelector('a')!); expect(button.getAttribute('aria-expanded')).toBe('false');
    });
    it('does not steal focus for Escape when the TOC is closed', async () => {
        const view=await setup(),input=document.createElement('input');document.body.append(input);input.focus();fireEvent.keyDown(document,{key:'Escape'});expect(document.activeElement).toBe(input);input.remove();view.unmount();
    });
    it('closes at desktop width and remains closed when returning to mobile', async () => {
        const view=await setup(),button=view.getByRole('button',{name:'目次を開閉'});fireEvent.click(button);
        Object.defineProperty(window,'innerWidth',{configurable:true,value:901});fireEvent(window,new Event('resize'));expect(button.getAttribute('aria-expanded')).toBe('false');expect(view.container.querySelector('nav')?.hasAttribute('inert')).toBe(false);
        Object.defineProperty(window,'innerWidth',{configurable:true,value:900});fireEvent(window,new Event('resize'));expect(view.container.querySelector('nav')?.hasAttribute('inert')).toBe(true);
    });
    it('tracks actual landing position, observes every heading and disconnects on unmount', async () => {
        const oldObserver=globalThis.IntersectionObserver,disconnect=mock(()=>{}),observe=mock(()=>{});
        globalThis.IntersectionObserver=class{observe=observe;disconnect=disconnect;unobserve(){}} as unknown as typeof IntersectionObserver;
        const host=document.createElement('div');host.innerHTML=inventory.groups.toc.items.map(n=>`<h2 id="${n.attrs['data-target']}" style="scroll-margin-top:120px"></h2>`).join('');document.body.append(host);
        let active=0;host.querySelectorAll('h2').forEach((h,i)=>{h.getBoundingClientRect=()=>({top:(i-active)*300+120})as DOMRect;});
        try { const view=await setup();expect(observe.mock.calls).toHaveLength(50);active=20;await act(async()=>{fireEvent.scroll(window);await new Promise(r=>setTimeout(r,30));});expect(view.container.querySelector('[aria-current="location"]')?.getAttribute('href')).toBe(inventory.groups.toc.items[20]!.attrs.href);view.unmount();expect(disconnect).toHaveBeenCalledTimes(1); }finally{host.remove();globalThis.IntersectionObserver=oldObserver;}
    });
});
for(const development of [false,true]) it(`hydrates the real page without DOM warnings, with functional TOC and checklist (development=${development})`,async()=>{
    const Page=sourceModule('app/iso-iec-40500-2025-guide/page.tsx',{development}).default as React.ComponentType;
    const host=document.createElement('div');host.innerHTML=renderToString(<Page />);document.body.append(host);
    const warnings:unknown[][]=[],errors:unknown[]=[],originalError=console.error;console.error=(...args:unknown[])=>warnings.push(args);let root:Root|undefined;
    try { await act(async()=>{root=hydrateRoot(host,<Page />,{onRecoverableError:e=>errors.push(e)});});const button=host.querySelector('.toggle')!;await act(async()=>{fireEvent.click(button);});expect(button.getAttribute('aria-expanded')).toBe('true');await act(async()=>{fireEvent.keyDown(document,{key:'Escape'});fireEvent.click(host.querySelector('input')!);});expect(host.querySelector('.cp-count')?.textContent).toBe('1 / 10');expect(errors).toEqual([]);expect(warnings).toEqual([]);expect(Array.from(host.querySelectorAll('table,thead,tbody,tr')).flatMap(n=>Array.from(n.childNodes).filter(c=>c.nodeType===Node.TEXT_NODE))).toHaveLength(0); }finally{if(root)await act(async()=>root!.unmount());console.error=originalError;host.remove();}
});
