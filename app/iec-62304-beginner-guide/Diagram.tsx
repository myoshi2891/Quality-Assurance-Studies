import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
export default function Diagram({ id, label }: { id: string; label: string }) { return <div className="mermaid-diagram" id={id} role="img" aria-label={label}><Mermaid chart={DIAGRAMS[id]!} /></div>; }
