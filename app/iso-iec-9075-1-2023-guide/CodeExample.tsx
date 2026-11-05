import React from 'react';
const TOKEN = /('[^']*'|--.*$|\b(?:0x[0-9A-Fa-f]+|0b[01]+|\d[\d_]*|CREATE|TABLE|UNIQUE|NULLS|NOT|DISTINCT|INSERT|INTO|VALUES|SELECT|FROM|WHERE|GROUP|BY|AS|MATCH|COLUMNS|PROPERTY|GRAPH|VERTEX|TABLES|EDGE|IS|VARCHAR|GREATEST|LPAD|ANY_VALUE|COUNT|GRAPH_TABLE)\b)/g;
const FUNCTIONS = new Set(['GREATEST','LPAD','ANY_VALUE','COUNT','GRAPH_TABLE']);
export default function CodeExample({ code }: { code: string }) {
    const lines = code.split('\n');
    return <pre className="sql"><code>{lines.map((line, i) => <React.Fragment key={i}><span className="code-line">{line.split(TOKEN).map((part, j) => {
        if (j % 2 === 0) return part;
        const kind = part.startsWith('--') ? 'c' : part.startsWith("'") ? 's' : /^\d/.test(part) ? 'n' : FUNCTIONS.has(part) ? 'f' : 'k';
        return <span key={j} className={`tok-${kind}`}>{part}</span>;
    })}</span>{i < lines.length - 1 ? '\n' : null}</React.Fragment>)}</code></pre>;
}
