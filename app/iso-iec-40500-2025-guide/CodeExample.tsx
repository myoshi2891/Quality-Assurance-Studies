import React from 'react';
export default function CodeExample({ code, label, language }: { code: string; label: string; language: string }) {
    const lines = code.split('\n');
    return <pre aria-label={label} className={language} role="region" tabIndex={0}><code>{lines.map((line,i) => <div className="code-line" key={i}>{line}{i < lines.length - 1 ? '\n' : null}</div>)}</code></pre>;
}
