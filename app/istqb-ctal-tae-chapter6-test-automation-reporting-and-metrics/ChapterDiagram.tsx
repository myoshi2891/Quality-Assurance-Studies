import React from 'react';

/** Retains the source diagram slots until the rendering category is implemented. */
export default function ChapterDiagram({ id }: { id: string }) {
    return <div className="mermaid-container" id={id} />;
}
