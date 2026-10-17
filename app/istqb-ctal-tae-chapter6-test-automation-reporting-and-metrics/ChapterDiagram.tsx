import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAMS, type DiagramId } from './diagrams';

export default function ChapterDiagram({ id }: { id: DiagramId }) {
    return <div className="mermaid-container" id={id}><Mermaid chart={DIAGRAMS[id]} /></div>;
}
