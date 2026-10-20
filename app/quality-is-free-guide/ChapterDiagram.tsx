import React from 'react';

// Preserve diagram slots while the content categories are assembled.
export default function ChapterDiagram({ id }: { id: string }) {
    return <div className="mermaid-wrapper" id={id} />;
}
