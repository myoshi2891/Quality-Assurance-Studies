'use client';
import React, { useState } from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
import { DIAGRAM_LABELS } from './diagram-labels';

/** Render the source diagram and expose its explanation outside the image if rendering fails. */
export default function Diagram({ index }: { index: number }) {
  const [failed, setFailed] = useState(false);
  const label = DIAGRAM_LABELS[index]!;
  return <>
    <div className="mermaid-source" data-diagram={`diagram-${index}`} role="img" aria-label={label} tabIndex={0}>
      <Mermaid chart={DIAGRAMS[index]!} onRenderError={() => setFailed(true)} />
    </div>
    {failed && <><p role="alert">図表の描画に失敗しました。以下の説明文と本文を参照してください。</p><p>{label}</p></>}
  </>;
}
