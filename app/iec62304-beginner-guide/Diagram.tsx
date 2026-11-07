import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
export default function Diagram({id}: {id:string}) { return <div className="mermaid-diagram" id={id} role="img" aria-label={'IEC 62304 図 '+(Number(id.split('-')[1])+1)}><Mermaid chart={DIAGRAMS[id]!} /></div>; }
