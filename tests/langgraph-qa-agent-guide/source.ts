import { readFileSync } from 'node:fs';
// archive/ は git 管理外のため、CI でも読めるよう追跡対象のフィクスチャを正とする
export const SOURCE_DIR = 'tests/fixtures/source-html/';
export const html = readFileSync(SOURCE_DIR + 'Langgraph-qa-agent-guide.html', 'utf8');
export const source = new DOMParser().parseFromString(
    html.replace(/<head>[\s\S]*?<\/head>/, '').replace(/<script[\s\S]*?<\/script>/g, ''),
    'text/html',
);
export const normalize = (text: string) => text.replace(/\s+/g, ' ').trim();
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
        // Elements with children record their direct text with a marker at each child element,
        // so whitespace at child boundaries (`foo <b>` vs `foo<b>`) stays significant; leaves keep full textContent.
        // Whitespace-only nodes containing a newline are source indentation, not rendered text, and are dropped.
        text: normalize(
            node.children.length
                ? [...node.childNodes]
                      .filter((child) => !(child.nodeType === Node.TEXT_NODE && /^\s*\n\s*$/.test(child.textContent ?? '')))
                      .map((child) =>
                          child.nodeType === Node.TEXT_NODE
                              ? (child.textContent ?? '')
                              : child.nodeType === Node.ELEMENT_NODE
                                ? '␟'
                                : '',
                      )
                      .join('')
                : (node.textContent ?? ''),
        ),
    }));
}
