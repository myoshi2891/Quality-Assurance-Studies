import { existsSync, readFileSync } from 'node:fs';
export const html = readFileSync(
    existsSync('Langgraph-qa-agent-guide.html')
        ? 'Langgraph-qa-agent-guide.html'
        : 'archive/html-archive/books/Langgraph-qa-agent-guide.html',
    'utf8',
);
export const source = new DOMParser().parseFromString(
    html.replace(/<head>[\s\S]*?<\/head>/, '').replace(/<script[\s\S]*?<\/script>/g, ''),
    'text/html',
);
export const normalize = (text: string) => text.replace(/\s+/g, '');
export function signature(element: Element) {
    const clone = element.cloneNode(true) as Element;
    clone.querySelectorAll('.mermaid-wrapper').forEach((node) => node.remove());
    // Highlight spans add presentation only; retain every character for source comparison.
    clone.querySelectorAll('code .syntax-token').forEach(node => node.replaceWith(...node.childNodes));
    return [clone, ...clone.querySelectorAll('*')].map((node) => ({
        tag: node.tagName,
        attributes: [...node.attributes]
            .filter((a) => !['aria-current'].includes(a.name) && !(a.name === 'class' && a.value === 'active'))
            .map((a) => [
                a.name,
                a.name === 'rel'
                    ? 'noopener noreferrer'
                    : a.name === 'class'
                      ? a.value.replace(/ ?active/g, '')
                      : a.value,
            ])
            .sort(),
        text: node.children.length ? '' : normalize(node.textContent ?? ''),
    }));
}
