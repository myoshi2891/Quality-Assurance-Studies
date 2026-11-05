import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
const LABELS: Record<string,string> = {"mermaid-diagram-0":"図1","mermaid-diagram-1":"図2","mermaid-diagram-2":"図3","mermaid-diagram-3":"図4","mermaid-diagram-4":"図5","mermaid-diagram-5":"図6","mermaid-diagram-6":"図7","mermaid-diagram-7":"図8","mermaid-diagram-8":"図9"};
export default function Diagram({ id }: { id: string }) { return <div className="mermaid-diagram" id={id} role="img" aria-label={LABELS[id]} tabIndex={0}><Mermaid chart={DIAGRAMS[id]!} /></div>; }
