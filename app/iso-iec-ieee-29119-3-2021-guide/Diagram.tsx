'use client';

import React, { useEffect, useRef } from 'react';
import Mermaid from '../../components/Mermaid';

/** This source already includes the full chart bounds; retain them after shared fixups. */
export function restoreSourceViewport(svg: SVGSVGElement): void {
    // The shared renderer writes this marker before extending the viewBox by 15px.
    // Clearing it makes observer callbacks idempotent and skips unfinished renders.
    if (svg.style.marginBottom !== '10px') return;
    const parts = svg.getAttribute('viewBox')?.split(/\s+/).map(Number);
    if (!parts || parts.length !== 4 || !parts.every(Number.isFinite) || parts[3]! <= 15) return;
    svg.setAttribute('viewBox', `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]! - 15}`);
    svg.style.margin = '0';
}

export default function Diagram({ chart, id, diagramKey }: { chart: string; id: string; diagramKey: string }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const container = ref.current;
        if (!container) return;
        const restore = () => container.querySelectorAll<SVGSVGElement>('svg').forEach(restoreSourceViewport);
        const observer = new MutationObserver(restore);
        observer.observe(container, { childList:true, subtree:true, attributes:true, attributeFilter:['viewBox','style'] });
        restore();
        return () => observer.disconnect();
    }, []);
    return <div className="mermaid-container" data-key={diagramKey} id={id} ref={ref} tabIndex={0}><Mermaid chart={chart} /></div>;
}
