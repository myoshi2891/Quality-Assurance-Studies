import { describe, expect, it, afterEach, beforeEach } from 'bun:test';
import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { sourceModule } from '../helpers/source-module';
import inventory from '../../docs/migration-inventory/iec62304-beginner-guide.json';
const base='app/iec62304-beginner-guide';
afterEach(cleanup);
it('announces render failure outside the diagram while preserving its text alternative',()=>{
    let fail:(()=>void)|undefined;
    const C=sourceModule(`${base}/Diagram.tsx`,{onMermaidChart:(_,onError)=>{fail=onError;}}).default as React.ComponentType<{id:string}>;
    const r=render(<C id="mmd-3"/>),image=r.getByRole('img');
    expect(r.queryByRole('alert')).toBeNull();
    expect(image.getAttribute('aria-describedby')).toBe('mmd-3-description');
    expect(fail).toBeFunction();act(()=>fail!());
    const alert=r.getByRole('alert');
    expect(alert.closest('[role="img"]')).toBeNull();
    expect(image.nextElementSibling).toBe(alert);
    expect(image.getAttribute('aria-describedby')).toBe('mmd-3-description');
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
// window は全テストファイルで共有される。scrollY は window 自身の値なので、削除すると後続ファイルで undefined になる。元の定義へ戻す。
const realScrollY=Object.getOwnPropertyDescriptor(window,'scrollY');
const restore=()=>{
    delete (document.documentElement as unknown as {scrollHeight?:number}).scrollHeight;
    delete (window as unknown as {scrollY?:number}).scrollY;
    if(realScrollY)Object.defineProperty(window,'scrollY',realScrollY);
};
beforeEach(()=>{queued=[];scrollTo(window.innerHeight+5000);
    globalThis.requestAnimationFrame=(callback:FrameRequestCallback)=>{queued.push(callback);return queued.length;};
    globalThis.cancelAnimationFrame=()=>{queued=[];};
});
afterEach(()=>{restore();globalThis.requestAnimationFrame=realFrame;globalThis.cancelAnimationFrame=realCancel;});
describe('test isolation',()=>{
    it('restores window.scrollY so later files in the shared window still read a number',()=>{
        scrollTo(9000,123);
        restore();
        expect(typeof window.scrollY).toBe('number');
        expect(window.scrollY).not.toBe(123);
    });
});
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
        const headings=headingList();place(headings,0);
        try {const C=nav(),r=render(<C/>);expect(observed.map(n=>n.id)).toEqual(Array.from(headings.children).map(n=>n.id));
            place(headings,3);
            act(()=>{callback([{isIntersecting:true,target:observed[3]} as IntersectionObserverEntry],{} as IntersectionObserver);flush();});
            expect(current(r.container)).toBe(observed[3]!.id);
            r.unmount();expect(disconnected).toBe(true);
        } finally {headings.remove();globalThis.IntersectionObserver=previous;}
    });
    it('marks the first entry on load, before any heading reaches the landing line',()=>{
        const headings=headingList();place(headings,-1);
        try {const C=nav(),r=render(<C/>);act(flush);
            expect(current(r.container)).toBe(headings.children[0]!.id);
            expect(r.container.querySelector('[aria-current="location"]')?.className).toBe('active');
        } finally {headings.remove();}
    });
    it('follows a scroll that skips the observer band without any intersection notice',()=>{
        const headings=headingList();place(headings,0);
        try {const C=nav(),r=render(<C/>);act(flush);
            place(headings,9);act(()=>{window.dispatchEvent(new Event('scroll'));flush();});
            expect(current(r.container)).toBe(headings.children[9]!.id);
            place(headings,2);act(()=>{window.dispatchEvent(new Event('resize'));flush();});
            expect(current(r.container)).toBe(headings.children[2]!.id);
        } finally {headings.remove();}
    });
    it('keeps the first entry when scrolled back above every heading and honours scroll-margin-top',()=>{
        const headings=headingList();place(headings,4);
        try {const C=nav(),r=render(<C/>);act(flush);
            place(headings,-1);act(()=>{window.dispatchEvent(new Event('scroll'));flush();});
            expect(current(r.container)).toBe(headings.children[0]!.id);
            // 着地位置（scroll-margin-top）ちょうどの見出しは通過済みとして扱う。
            (headings.children[5] as HTMLElement).style.scrollMarginTop='76px';
            place(headings,4);headings.children[5]!.getBoundingClientRect=()=>({top:76} as DOMRect);
            act(()=>{window.dispatchEvent(new Event('scroll'));flush();});
            expect(current(r.container)).toBe(headings.children[5]!.id);
        } finally {headings.remove();}
    });
    it('selects the last entry at the end of the page even if its heading cannot reach the landing line',()=>{
        const headings=headingList();place(headings,18);
        const last=headings.children[20]!;last.getBoundingClientRect=()=>({top:500} as DOMRect);
        scrollTo(window.innerHeight+1000,1000);
        try {const C=nav(),r=render(<C/>);act(flush);
            expect(current(r.container)).toBe(last.id);
        } finally {headings.remove();}
    });
    it('cancels the pending measurement and removes its listeners on unmount',()=>{
        const headings=headingList();place(headings,0);
        try {const C=nav(),r=render(<C/>);
            // 計測が保留中のままアンマウントし、保留中のフレームが取り消されることを確かめる。
            expect(queued.length).toBeGreaterThan(0);
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
        expect(host.querySelectorAll('details')).toHaveLength(7);
        for(const detail of host.querySelectorAll('details')){expect(detail.open).toBe(false);detail.open=true;expect(detail.querySelector('summary')).not.toBeNull();}
        for(const node of host.querySelectorAll('table,thead,tbody,tfoot,tr'))expect(Array.from(node.childNodes).filter(n=>n.nodeType===3)).toHaveLength(0);
    }finally {if(root)await act(async()=>root!.unmount());host.remove();console.error=original;}
});
