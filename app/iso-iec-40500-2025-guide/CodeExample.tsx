import React from 'react';
export default function CodeExample({ code, language }: { code: string; language: string }) {
    const lines = code.split('\n');
    return <pre className={language}><code>{lines.map((line,i) => <div className="code-line" key={i}>{line}{i < lines.length - 1 ? '\n' : null}</div>)}</code></pre>;
}
