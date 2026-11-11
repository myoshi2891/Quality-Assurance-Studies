'use client';
import React, { useState } from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS, DIAGRAM_LABELS } from './diagrams';

/** Render the original diagram through the shared renderer, with a visible description on failure. */
export default function Diagram({ index }: { index: number }) {
  const chart = DIAGRAMS[index]!;
  const label = DIAGRAM_LABELS[index]!;
  const [state,setState] = useState({chart, failed:false});
  if (state.chart !== chart) setState({chart,failed:false});
  return <><div className="mermaid-diagram" id={`diagram-${index+1}`} data-diagram={index} role="img" aria-label={label} tabIndex={0}><Mermaid chart={chart} onRenderError={()=>setState({chart,failed:true})}/></div>{state.failed && <><p role="alert">図表の描画に失敗しました。以下の説明文と本文を参照してください。</p><p>{label}</p></>}</>;
}
