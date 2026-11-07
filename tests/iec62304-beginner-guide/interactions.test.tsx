import { describe, expect, it, afterEach } from 'bun:test';
import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { sourceModule } from '../helpers/source-module';
import inventory from '../../docs/migration-inventory/iec62304-beginner-guide.json';
const base='app/iec62304-beginner-guide';
afterEach(cleanup);
const nav=()=>sourceModule(`${base}/NavBar.tsx`).default as React.ComponentType;
describe('source TOC interactions',()=>{
    it('opens and closes by link, Escape restores toggle focus',()=>{
        const C=nav(),r=render(<C/>),button=r.getByRole('button',{name:'目次を開く'});
        expect(button.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(button);expect(button.getAttribute('aria-expanded')).toBe('true');
        expect(r.container.querySelector('.sidebar.open')).not.toBeNull();
        fireEvent.click(r.container.querySelector('.sidebar a')!);expect(button.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(button);fireEvent.keyDown(document,{key:'Escape'});expect(button.getAttribute('aria-expanded')).toBe('false');expect(document.activeElement).toBe(button);
    });
    it('observes all 21 source headings, marks active location and disconnects',()=>{
        const previous=globalThis.IntersectionObserver;
        let callback: IntersectionObserverCallback=()=>{};const observed: Element[]=[];let disconnected=false;
        globalThis.IntersectionObserver=class {
            constructor(cb:IntersectionObserverCallback,options:IntersectionObserverInit){callback=cb;expect(options.rootMargin).toBe('-15% 0px -75% 0px');}
            observe(n:Element){observed.push(n);} disconnect(){disconnected=true;}
        } as unknown as typeof IntersectionObserver;
        const headings=document.createElement('div');headings.innerHTML=inventory.groups.toc.items.map(html=>{const id=html.match(/data-target="([^"]+)"/)![1];return `<h2 id="${id}"></h2>`;}).join('');document.body.append(headings);
        try {const C=nav(),r=render(<C/>);expect(observed.map(n=>n.id)).toEqual(Array.from(headings.children).map(n=>n.id));
            act(()=>callback([{isIntersecting:true,target:observed[3]} as IntersectionObserverEntry],{} as IntersectionObserver));
            expect(r.container.querySelector('[aria-current="location"]')?.getAttribute('data-target')).toBe(observed[3]!.id);
            r.unmount();expect(disconnected).toBe(true);
        } finally {headings.remove();globalThis.IntersectionObserver=previous;}
    });
});
for(const development of [false,true]) it(`hydrates real page without recoverable errors or table nesting warnings, SWC=${development}`,async()=>{
    const C=sourceModule(`${base}/page.tsx`,{development}).default as React.ComponentType;
    const errors:unknown[]=[];const original=console.error;console.error=(...args:unknown[])=>{if(!String(args[0]).includes('outdated JSX transform'))errors.push(args);};
    const host=document.createElement('div');document.body.append(host);let root:ReturnType<typeof hydrateRoot>|undefined;
    try {host.innerHTML=renderToString(<C/>);await act(async()=>{root=hydrateRoot(host,<C/>,{onRecoverableError:e=>errors.push(e)});});
        expect(errors).toEqual([]);
        const button=host.querySelector('button')!;fireEvent.click(button);expect(button.getAttribute('aria-expanded')).toBe('true');
        expect(host.querySelectorAll('details')).toHaveLength(7);
        for(const detail of host.querySelectorAll('details')){expect(detail.open).toBe(false);detail.open=true;expect(detail.querySelector('summary')).not.toBeNull();}
        for(const node of host.querySelectorAll('table,thead,tbody,tfoot,tr'))expect(Array.from(node.childNodes).filter(n=>n.nodeType===3)).toHaveLength(0);
    }finally {if(root)await act(async()=>root!.unmount());host.remove();console.error=original;}
});
