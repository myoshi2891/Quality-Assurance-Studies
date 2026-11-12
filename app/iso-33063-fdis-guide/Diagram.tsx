'use client';
import React, { useState } from 'react';
import Mermaid from '../../components/Mermaid';
import mermaid from 'mermaid';
import elkLayouts from '@mermaid-js/layout-elk/dist/mermaid-layout-elk.core.mjs';
import { DIAGRAMS, DESCRIPTIONS } from './diagrams';
// The extension loads its renderer lazily; registration stays local to this route.
if (typeof mermaid.registerLayoutLoaders === 'function') mermaid.registerLayoutLoaders(elkLayouts);
/** Render each source chart with an accessible explanation and an error fallback. */
export default function Diagram({ index }: {
    index: number;
}) { const [failed, setFailed] = useState(false); return <div className="mermaid-source" data-diagram={'diagram-' + index} id={'diagram-' + index} role="img" aria-label={DESCRIPTIONS[index]}><Mermaid chart={DIAGRAMS[index]!} onRenderError={() => setFailed(true)}/>{failed && <p role="alert">図表の描画に失敗しました。{DESCRIPTIONS[index]}</p>}</div>; }
