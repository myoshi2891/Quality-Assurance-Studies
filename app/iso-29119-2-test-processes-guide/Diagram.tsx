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
        const root = host.current;
        if (!root) return;
        const options: MutationObserverInit = { childList: true, subtree: true, attributes: true, attributeFilter: ['viewBox', 'style'] };
        const update = () => {
            const svg = root.querySelector('svg');
            if (!svg) return;
            observer.disconnect();
            try {
                restoreDiagramLayout(svg, index);
            } finally {
                observer.observe(root, options);
            }
        };
        const observer = new MutationObserver(update);
        observer.observe(root, options);
        update();
        return () => observer.disconnect();
    }, [index]);
    return <>
      <div ref={host} className="mermaid-source" data-diagram={'diagram-' + index} id={'diagram-' + index} role="img" aria-label={DESCRIPTIONS[index]}>
        <Mermaid chart={DIAGRAMS[index]!} onRenderError={() => setFailed(true)} onSvgReady={svg => restoreDiagramLayout(svg, index)}/>
      </div>
      {failed && <p role="alert">図表の描画に失敗しました。{DESCRIPTIONS[index]}</p>}
    </>;
}
