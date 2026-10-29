import { isTag, type AnyNode } from 'domhandler';
import { load } from 'cheerio';
export const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
export function tree(node: AnyNode | undefined): unknown {
    if (!node) throw new Error('Missing source element');
    if (node.type === 'text') return norm(node.data) || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs };
    delete attrs.target; delete attrs.rel; delete attrs['aria-current'];
    if (attrs.class) attrs.class = attrs.class.replace(/\s+(active|open)\b/g, '');
    if (attrs.class === 'cp-count') { delete attrs['aria-live']; delete attrs.role; }
    // レビューで追加したキーボード操作用の tabindex は原本にないため比較から除き、専用テストで検証する
    if (attrs.class === 'table-scroll') delete attrs.tabindex;
    if (attrs.class === 'mermaid-diagram') { delete attrs['aria-describedby']; delete attrs.tabindex; return { tag: node.tagName, attrs, children: [] }; }
    if (node.tagName === 'pre') return { tag: 'pre', attrs, code: load(node).text() };
    return { tag: node.tagName, attrs, children: node.children.map(tree).filter(x => x !== null) };
}
