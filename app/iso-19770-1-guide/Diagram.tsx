import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
export default function Diagram({id}: {id:string}) { return <div className="mermaid-diagram" id={id} role="img" aria-label={'ISO/IEC 19770-1 図 '+id.split('-').at(-1)}><Mermaid chart={DIAGRAMS[id]!} /></div>; }
