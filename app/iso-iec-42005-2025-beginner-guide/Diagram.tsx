'use client';
import React, { useEffect, useRef, useState } from 'react';
import Mermaid from '../../components/Mermaid';
import { restoreDiagramLayout } from './restoreDiagramLayout';
import { DIAGRAMS, DESCRIPTIONS } from './diagrams';
/** Render each source chart with an accessible explanation and an error fallback. */
export default function Diagram({ index }: {
    index: number;
}) {
    const [failed, setFailed] = useState(false);
    const host = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const update = () => { const svg = host.current?.querySelector('svg'); if (svg) restoreDiagramLayout(svg, index); };
        const observer = new MutationObserver(update);
        if (host.current) observer.observe(host.current, {childList: true, subtree: true});
        update();
        return () => observer.disconnect();
    }, [index]);
    return <>
      <div ref={host} className="mermaid-source" data-diagram={'diagram-' + index} id={'diagram-' + index} role="img" aria-label={DESCRIPTIONS[index]}>
        <Mermaid chart={DIAGRAMS[index]!} onRenderError={() => setFailed(true)}/>
      </div>
      {failed && <p role="alert">図表の描画に失敗しました。{DESCRIPTIONS[index]}</p>}
    </>;
}
