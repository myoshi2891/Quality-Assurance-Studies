import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
export default function Diagram({ id }: { id: string }) {
return <div aria-label={'図'+id.split('-').at(-1)} className="mermaid-diagram" id={id} role="img"><Mermaid chart={DIAGRAMS[id]!} /></div>;
}
