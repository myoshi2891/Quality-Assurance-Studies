'use client';
import React, {useState} from 'react';
import Mermaid from '../../components/Mermaid';
import {DIAGRAMS, DESCRIPTIONS} from './diagrams';
/** Render each source chart with an accessible explanation and an error fallback. */
export default function Diagram({index}:{index:number}) {const [failed,setFailed]=useState(false);return <div className="mermaid-source" data-diagram={'diagram-'+index} id={'diagram-'+index} role="img" aria-label={DESCRIPTIONS[index]}><Mermaid chart={DIAGRAMS[index]!} onRenderError={()=>setFailed(true)}/>{failed&&<p role="alert">図表の描画に失敗しました。{DESCRIPTIONS[index]}</p>}</div>;}
