import React from 'react';

// Preserve the original diagram slots during the staged migration.
export default function ChapterDiagram({ id }: { id: string }) {
    return <div className="mermaid-diagram" id={id} />;
}
