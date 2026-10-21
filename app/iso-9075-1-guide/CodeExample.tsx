import React from 'react';

// Match the source's lightweight SQL highlighter, with React escaping every text token.
const TOKENS = /(--[^\n]*|'[^']*'|\b(?:SELECT|FROM|WHERE|GROUP BY|ORDER BY|CREATE|PROPERTY|GRAPH|VERTEX|EDGE|TABLES|KEY|SOURCE|DESTINATION|REFERENCES|PROPERTIES|MATCH|COLUMNS|IS|AS|COUNT|UNIQUE|NULLS|NOT|DISTINCT|BY)\b)/g;
function highlight(line: string) {
    return line.split(TOKENS).map((token, i) => {
        const kind = token.startsWith('--') ? 'tok-c' : token.startsWith("'") ? 'tok-s' : /^(SELECT|FROM|WHERE|GROUP BY|ORDER BY|CREATE|PROPERTY|GRAPH|VERTEX|EDGE|TABLES|KEY|SOURCE|DESTINATION|REFERENCES|PROPERTIES|MATCH|COLUMNS|IS|AS|COUNT|UNIQUE|NULLS|NOT|DISTINCT|BY)$/.test(token) ? 'tok-k' : '';
        return kind ? <span key={i} className={kind}>{token}</span> : token;
    });
}
export default function CodeExample({ source, className }: { source: string; className: string }) {
    const lines = source.split('\n');
    return <pre className="sql"><code className={className || undefined}>{lines.map((line, i) => React.createElement('div', { className: 'code-line', key: i }, highlight(line), i < lines.length - 1 ? '\n' : null))}</code></pre>;
}
