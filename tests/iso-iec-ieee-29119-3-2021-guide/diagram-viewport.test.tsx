import { it, expect } from 'bun:test';
import React, { act } from 'react';
import { render } from '@testing-library/react';
import { sourceModule } from '../helpers/source-module';
const path='app/iso-iec-ieee-29119-3-2021-guide/Diagram.tsx';
it('restores the original viewport once after shared renderer fixes, without modifying an unfinished render', () => {
    const restore=sourceModule(path).restoreSourceViewport as (svg: SVGSVGElement)=>void;
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 15 1024.8125 239');
    restore(svg); expect(svg.getAttribute('viewBox')).toBe('0 15 1024.8125 239');
    svg.style.margin='0 auto'; svg.style.marginBottom='10px';
    svg.setAttribute('viewBox','0 15 1024.8125 254');
    restore(svg); expect(svg.getAttribute('viewBox')).toBe('0 15 1024.8125 239'); expect(svg.style.margin).toBe('0px');
    restore(svg); expect(svg.getAttribute('viewBox')).toBe('0 15 1024.8125 239');
});
it('watches replacement SVGs and shared viewport updates, then disconnects on unmount', () => {
    let callback: MutationCallback | undefined;
    let disconnected=false; let target: Node | undefined; let options: MutationObserverInit | undefined;
    const original=globalThis.MutationObserver;
    globalThis.MutationObserver=class {
        constructor(cb:MutationCallback){ callback=cb; }
        observe(node:Node,opts:MutationObserverInit){target=node;options=opts;}
        disconnect(){disconnected=true;}
    } as unknown as typeof MutationObserver;
    try {
        const Diagram=sourceModule(path).default as React.ComponentType<{chart:string;id:string;diagramKey:string}>;
        const view=render(<Diagram chart="flowchart LR\nA --> B" id="mermaid-diagram-1" diagramKey="mm1" />);
        const container=view.container.querySelector('.mermaid-container')!;
        expect(target).toBe(container);
        expect(options).toEqual({childList:true,subtree:true,attributes:true,attributeFilter:['viewBox','style']});
        for (const height of [239,400]) {
            container.querySelector('.mermaid-wrapper')!.innerHTML=`<svg viewBox="0 15 1024.8125 ${height+15}" style="margin-bottom:10px"></svg>`;
            act(()=>callback!([],{} as MutationObserver));
            expect(container.querySelector('svg')!.getAttribute('viewBox')).toBe(`0 15 1024.8125 ${height}`);
        }
        view.unmount(); expect(disconnected).toBe(true);
    } finally { globalThis.MutationObserver=original; }
});
