import React from 'react';

type CodeLanguage = 'python' | 'bash';

// Strings are matched before comments and keywords, so their contents stay intact.
const PYTHON_TOKENS = /#[^\n]*|[rRuUbBfF]{0,2}(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(?:False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b|\b(?:Any|Literal|Optional|TypedDict|bool|dict|enumerate|float|int|isinstance|len|list|print|range|set|str|super|tuple|type|zip)\b|\b(?:0[xX][\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/g;
const PYTHON_KEYWORDS = new Set('False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield'.split(' '));
const BASH_TOKENS = /#[^\n]*|"(?:\\.|[^"\\\n])*"|'[^'\n]*'|\b(?:pip|python|python3|streamlit)\b|\b(?:install|run|export|if|then|else|fi|for|do|done)\b|--?[\w-]+|\b\d+(?:\.\d+)?\b/g;

function tokenKind(token: string, language: CodeLanguage): string {
    if (token.startsWith('#')) return 'comment';
    if (/^[rRuUbBfF]{0,2}["']/.test(token)) return 'string';
    if (/^\d/.test(token)) return 'number';
    if (language === 'python') return PYTHON_KEYWORDS.has(token) ? 'keyword' : 'builtin';
    if (/^(pip|python|python3|streamlit)$/.test(token)) return 'command';
    return token.startsWith('-') ? 'option' : 'keyword';
}

/** Server-rendered Python/Bash highlighting; React escapes all source text. */
export default function SyntaxCode({ code, language }: { code: string; language: CodeLanguage }) {
    const pattern = language === 'python' ? PYTHON_TOKENS : BASH_TOKENS;
    const parts: React.ReactNode[] = [];
    let position = 0;
    for (const match of code.matchAll(pattern)) {
        const start = match.index;
        if (start > position) parts.push(code.slice(position, start));
        const token = match[0];
        parts.push(<span key={start} className={`syntax-token syntax-${tokenKind(token, language)}`}>{token}</span>);
        position = start + token.length;
    }
    parts.push(code.slice(position));
    return <code className={`language-${language}`}>{parts}</code>;
}
