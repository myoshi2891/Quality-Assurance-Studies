import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/iso-14496-22-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/iso-14496-22-guide';
const scope = '.off-page';
const pageEntry = '../../app/iso-14496-22-guide/page';
const diagramsEntry = '../../app/iso-14496-22-guide/diagrams';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
function tree(node: AnyNode | undefined): unknown {
    if (!node) throw new Error('Missing element');
    if (node.type === 'text') return norm(node.data) || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs }; delete attrs['aria-current']; delete attrs['aria-labelledby'];
    if (attrs.class) attrs.class = attrs.class.replace(/\s+active\b/g, '').replace(/\s+open\b/g, '');
    if (attrs.class === 'mermaid-diagram') { delete attrs.role; delete attrs['aria-label']; delete attrs['aria-describedby']; return { tag: node.tagName, attrs, children: [] }; }
    if (node.tagName === 'pre') return { tag: 'pre', attrs, code: load(node).text() };
    return { tag: node.tagName, attrs, children: node.children.map(tree).filter(x => x !== null) };
}
const inventoryMain = inventory.main;
const starts = inventoryMain.flatMap((n,i) => n.tag === 'h2' ? [i] : []);
const categories = [{ name: 'Hero', from: 0, to: 1 }, ...starts.map((from,i) => ({ name: 'Section'+i, from, to: starts[i+1] ?? inventoryMain.length-1 })), { name: 'Footer', from: inventoryMain.length-1, to: inventoryMain.length }];
for (const category of categories) it(category.name+': every original element in order', () => {
    const Component = sourceModule(base+'/'+category.name+'.tsx').default as React.ComponentType;
    const $ = load(renderToStaticMarkup(<Component />));
    expect($('body').contents().toArray().map(tree).filter(Boolean)).toEqual(inventoryMain.slice(category.from,category.to));
});
