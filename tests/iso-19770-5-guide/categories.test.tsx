import { expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import inventory from '../../docs/migration-inventory/iso-19770-5-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/iso-19770-5-guide';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
function tree(node: AnyNode | undefined): unknown {
    if (!node) throw new Error('Missing element');
    if (node.type === 'text') return norm(node.data) || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs }; if (attrs.style) attrs.style = attrs.style.replace(/\s+/g, '').replace(/;$/, ''); delete attrs['aria-current']; delete attrs['aria-labelledby'];
    if (attrs.class) attrs.class = attrs.class.replace(/\s+active\b/g, '').replace(/\s+open\b/g, '');
    if (attrs.class === 'mermaid-diagram') { return { tag: node.tagName, attrs, children: [] }; }
    if (node.tagName === 'pre') return { tag: 'pre', attrs, code: load(node).text() };
    return { tag: node.tagName, attrs, children: node.children.map(tree).filter(x => x !== null) };
}
const categories = [{ name: 'Hero', items: inventory.groups.hero.items }, ...inventory.categories, { name: 'Footer', items: inventory.groups.footer.items }];
for (const category of categories) it(category.name+': every original element in order', () => {
    const Component = sourceModule(base+'/'+category.name+'.tsx').default as React.ComponentType;
    const $ = load(renderToStaticMarkup(<Component />));
    expect($('body').contents().toArray().map(tree).filter(Boolean)).toEqual(category.items);
});
