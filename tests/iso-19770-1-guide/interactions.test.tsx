import { describe, expect, it, afterEach, beforeEach } from 'bun:test';
import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { sourceModule } from '../helpers/source-module';
import inventory from '../../docs/migration-inventory/iso-19770-1-guide.json';
const base='app/iso-19770-1-guide';
afterEach(cleanup);
it('shows the text alternative outside the image for every diagram only after rendering fails',()=>{
    for(const {id} of inventory.diagrams){
        let fail:(()=>void)|undefined;
        const C=sourceModule(`${base}/Diagram.tsx`,{onMermaidChart:(_,onError)=>{fail=onError;}}).default as React.ComponentType<{id:string}>;
        const r=render(<C id={id}/>),image=r.getByRole('img'),label=image.getAttribute('aria-label')!;
        expect(r.queryByRole('alert')).toBeNull();expect(image.nextElementSibling).toBeNull();
        expect(fail).toBeFunction();act(()=>fail!());
        const alert=r.getByRole('alert');expect(alert.closest('[role="img"]')).toBeNull();
        const explanation=alert.nextElementSibling!;
        expect(explanation?.textContent).toBe(label);
        expect(explanation.closest('[role="img"],noscript,[hidden]')).toBeNull();
        expect(image.getAttribute('aria-label')).toBe(label);r.unmount();
    }
});
const nav=()=>sourceModule(`${base}/NavBar.tsx`).default as React.ComponentType;
const headingList=()=>{
    const headings=document.createElement('div');
    headings.innerHTML=inventory.groups.toc.items.map(html=>`<h2 id="${html.match(/data-target="([^"]+)"/)![1]}"></h2>`).join('');
    document.body.append(headings);return headings;
};
// index 番目までの見出しが着地線を通過した配置にする。-1 はどの見出しもまだ通過していない状態。
const place=(headings:Element,index:number)=>Array.from(headings.children).forEach((h,i)=>{h.getBoundingClientRect=()=>({top:(i-index)*300} as DOMRect);});
const current=(root:Element)=>root.querySelector('[aria-current="location"]')?.getAttribute('data-target');
// 実時間に依存しないよう、requestAnimationFrame を手動で流す。happy-dom では window と globalThis が別物なので、モジュールが参照する globalThis 側を差し替える。
let queued:FrameRequestCallback[]=[];
const flush=()=>{const callbacks=queued;queued=[];callbacks.forEach(callback=>callback(0));};
const realFrame=globalThis.requestAnimationFrame,realCancel=globalThis.cancelAnimationFrame;
// 既定はページ末尾ではない状態にする。happy-dom の scrollHeight は 0 で、常に末尾と判定されるため。
const scrollTo=(scrollHeight:number,scrollY=0)=>{
    Object.defineProperty(document.documentElement,'scrollHeight',{configurable:true,value:scrollHeight});
    Object.defineProperty(window,'scrollY',{configurable:true,value:scrollY});
};
// window は全テストファイルで共有される。scrollY は window 自身の値なので、削除せず元の定義へ戻す。
const realScrollY=Object.getOwnPropertyDescriptor(window,'scrollY');
const restore=()=>{
    delete (document.documentElement as unknown as {scrollHeight?:number}).scrollHeight;
    delete (window as unknown as {scrollY?:number}).scrollY;
    if(realScrollY)Object.defineProperty(window,'scrollY',realScrollY);
};
describe('source TOC interactions',()=>{
    beforeEach(()=>{queued=[];scrollTo(window.innerHeight+5000);
        globalThis.requestAnimationFrame=(callback:FrameRequestCallback)=>{queued.push(callback);return queued.length;};
        globalThis.cancelAnimationFrame=()=>{queued=[];};
    });
    afterEach(()=>{restore();globalThis.requestAnimationFrame=realFrame;globalThis.cancelAnimationFrame=realCancel;});
    it('opens and closes by link and Escape, making the closed mobile TOC inert immediately',()=>{
        const original=window.matchMedia;
        let change:(()=>void)|undefined;
        const query={matches:true,addEventListener:(_type:string,callback:()=>void)=>{change=callback;},removeEventListener:(_type:string,callback:()=>void)=>{expect(callback).toBe(change);change=undefined;}};
        window.matchMedia=(()=>query) as unknown as typeof window.matchMedia;
        try {
        const C=nav(),r=render(<C/>),button=r.getByRole('button',{name:'目次を開く'}),sidebar=r.container.querySelector('.sidebar')!;
        expect(button.getAttribute('aria-expanded')).toBe('false');
        expect(sidebar.hasAttribute('inert')).toBe(true);
        fireEvent.click(button);expect(button.getAttribute('aria-expanded')).toBe('true');
        expect(sidebar.hasAttribute('inert')).toBe(false);
        expect(r.container.querySelector('.sidebar.open')).not.toBeNull();
        fireEvent.click(r.container.querySelector('.sidebar a')!);expect(button.getAttribute('aria-expanded')).toBe('false');
        expect(sidebar.hasAttribute('inert')).toBe(true);
        fireEvent.click(button);fireEvent.keyDown(document,{key:'Escape'});expect(button.getAttribute('aria-expanded')).toBe('false');expect(document.activeElement).toBe(button);
        expect(sidebar.hasAttribute('inert')).toBe(true);
        query.matches=false;act(()=>change?.());expect(sidebar.hasAttribute('inert')).toBe(false);
        query.matches=true;act(()=>change?.());expect(sidebar.hasAttribute('inert')).toBe(true);
        r.unmount();expect(change).toBeUndefined();
        } finally {window.matchMedia=original;}
    });
    it('observes all 30 source headings, marks active location from measured positions and disconnects',()=>{
        const previous=globalThis.IntersectionObserver;
        let callback: IntersectionObserverCallback=()=>{};const observed: Element[]=[];let disconnected=false;
        globalThis.IntersectionObserver=class {
            constructor(cb:IntersectionObserverCallback,options:IntersectionObserverInit){callback=cb;expect(options.rootMargin).toBe('-15% 0px -75% 0px');}
            observe(n:Element){observed.push(n);} disconnect(){disconnected=true;}
        } as unknown as typeof IntersectionObserver;
        const headings=headingList();place(headings,0);
        try {const C=nav(),r=render(<C/>);expect(observed.map(n=>n.id)).toEqual(Array.from(headings.children).map(n=>n.id));
            const sidebar=r.container.querySelector('.sidebar') as HTMLElement;
            sidebar.getBoundingClientRect=()=>({top:0,bottom:600,height:600} as DOMRect);
            (r.container.querySelectorAll('.sidebar a')[3] as HTMLElement).getBoundingClientRect=()=>({top:1000,bottom:1020} as DOMRect);
            place(headings,3);
            act(()=>{callback([{isIntersecting:true,target:observed[3]} as IntersectionObserverEntry],{} as IntersectionObserver);flush();});
            expect(current(r.container)).toBe(observed[3]!.id);
            expect(sidebar.scrollTop).toBe(700);
            r.unmount();expect(disconnected).toBe(true);
        } finally {headings.remove();globalThis.IntersectionObserver=previous;}
    });
    it('re-measures when a diagram resizes, without any other notification',()=>{
        const previous=globalThis.ResizeObserver;
        let notify:ResizeObserverCallback=()=>{};const observed:Element[]=[];let disconnected=false;
        globalThis.ResizeObserver=class {
            constructor(cb:ResizeObserverCallback){notify=cb;}
            observe(n:Element){observed.push(n);} unobserve(){} disconnect(){disconnected=true;}
        } as unknown as typeof ResizeObserver;
        const headings=headingList(),ids=Array.from(headings.children,n=>n.id),diagram=document.createElement('div');
        diagram.className='mermaid-diagram';document.body.append(diagram);place(headings,2);
        try {const C=nav(),r=render(<C/>);act(flush);
            expect(observed).toEqual([diagram]);
            expect(current(r.container)).toBe(ids[2]);
            // 図の描画で見出しが動いた。リサイズ通知だけで選び直す。
            place(headings,6);act(()=>{notify([{target:diagram} as unknown as ResizeObserverEntry],{} as ResizeObserver);flush();});
            expect(current(r.container)).toBe(ids[6]);
            r.unmount();expect(disconnected).toBe(true);
        } finally {headings.remove();diagram.remove();globalThis.ResizeObserver=previous;}
    });
    it('scrolling up from Step 2 to Step 1 re-selects Step 1 even when no heading intersects the band',()=>{
        const headings=headingList(),ids=Array.from(headings.children,n=>n.id);
        const step1=ids.findIndex(id=>id.startsWith('step-1-')),step2=ids.findIndex(id=>id.startsWith('step-2-'));
        expect(step1).toBeGreaterThanOrEqual(0);expect(step2).toBeGreaterThan(step1);
        place(headings,step2);
        try {const C=nav(),r=render(<C/>);act(flush);
            expect(current(r.container)).toBe(ids[step2]);
            // 上方向のスクロールでは Step 2 が帯の下へ出るだけで、帯に入る見出しはない。通知がなくても位置から選び直す。
            place(headings,step1);act(()=>{window.dispatchEvent(new Event('scroll'));flush();});
            expect(current(r.container)).toBe(ids[step1]);
            place(headings,9);act(()=>{window.dispatchEvent(new Event('resize'));flush();});
            expect(current(r.container)).toBe(ids[9]);
        } finally {headings.remove();}
    });
    it('clears the highlight above every heading, honours scroll-margin-top and selects the last entry at the page end',()=>{
        const headings=headingList(),ids=Array.from(headings.children,n=>n.id);place(headings,4);
        try {const C=nav(),r=render(<C/>);act(flush);
            expect(current(r.container)).toBe(ids[4]);
            place(headings,-1);act(()=>{window.dispatchEvent(new Event('scroll'));flush();});
            expect(r.container.querySelector('[aria-current]')).toBeNull();
            // 着地位置（scroll-margin-top）ちょうどの見出しは通過済みとして扱う。
            place(headings,4);(headings.children[5] as HTMLElement).style.scrollMarginTop='76px';headings.children[5]!.getBoundingClientRect=()=>({top:76} as DOMRect);
            act(()=>{window.dispatchEvent(new Event('scroll'));flush();});
            expect(current(r.container)).toBe(ids[5]);
            // ページ末尾では、帯まで上がれない最後の見出しを選ぶ。
            place(headings,20);scrollTo(window.innerHeight+5000,5000);act(()=>{window.dispatchEvent(new Event('scroll'));flush();});
            expect(current(r.container)).toBe(ids[ids.length-1]);
            // 計測が保留中のままアンマウントし、保留中のフレームが取り消されることを確かめる。
            window.dispatchEvent(new Event('scroll'));expect(queued.length).toBeGreaterThan(0);
            r.unmount();expect(queued).toHaveLength(0);
            window.dispatchEvent(new Event('scroll'));expect(queued).toHaveLength(0);
        } finally {headings.remove();}
    });
});
for(const development of [false,true]) it(`hydrates real page without recoverable errors or table nesting warnings, SWC=${development}`,async()=>{
    const C=sourceModule(`${base}/page.tsx`,{development}).default as React.ComponentType;
    const errors:unknown[]=[];const original=console.error;console.error=(...args:unknown[])=>{if(!String(args[0]).includes('outdated JSX transform'))errors.push(args);};
    const host=document.createElement('div');document.body.append(host);let root:ReturnType<typeof hydrateRoot>|undefined;
    try {host.innerHTML=renderToString(<C/>);await act(async()=>{root=hydrateRoot(host,<C/>,{onRecoverableError:e=>errors.push(e)});});
        expect(errors).toEqual([]);
        const button=host.querySelector('button')!;fireEvent.click(button);expect(button.getAttribute('aria-expanded')).toBe('true');
        expect(host.querySelectorAll('details')).toHaveLength(6);
        for(const detail of host.querySelectorAll('details')){expect(detail.open).toBe(false);detail.open=true;expect(detail.querySelector('summary')).not.toBeNull();}
        for(const node of host.querySelectorAll('table,thead,tbody,tfoot,tr'))expect(Array.from(node.childNodes).filter(n=>n.nodeType===3)).toHaveLength(0);
    }finally {if(root)await act(async()=>root!.unmount());host.remove();console.error=original;}
});
