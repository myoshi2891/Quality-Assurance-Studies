import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS } from './diagrams';
export default function Diagram({ id }: { id: string }) {
    return (
        <div className="mermaid" id={id}>
            <Mermaid chart={DIAGRAMS[id]!} />
        </div>
    );
}
