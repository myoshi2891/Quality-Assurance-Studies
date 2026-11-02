import { expect, it } from 'bun:test';
import React from 'react';
import type { AnyNode } from 'domhandler';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { load } from 'cheerio';
import postcss from 'postcss';
import rawInventory from '../../docs/migration-inventory/iso-iec-ieee-29119-3-2021-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/iso-iec-ieee-29119-3-2021-guide';
const inventory = rawInventory;
function tree(n: AnyNode): unknown {
    if (n.type === 'text') return n.data.replace(/\s+/g, ' ').trim() || null;
    if (n.type !== 'tag') return null;
    if (n.attribs.class === 'mermaid-container') return { tag: 'diagram', id: n.attribs.id, key:n.attribs['data-key'] };
    const attrs = { ...n.attribs }; delete attrs['aria-current'];
    return { tag: n.name, attrs, children: n.children.map(tree).filter(Boolean) };
}
function html() { const Page = sourceModule(base + '/page.tsx').default as React.ComponentType; return load(renderToStaticMarkup(<Page />)); }
for (const [key, group] of Object.entries(inventory.groups)) {
    it(key + ' exact count and order', () => expect(html()(group.selector).toArray().map(tree)).toEqual(group.items));
    group.items.forEach((item, i) => it(key + ' ' + i, () => expect(tree(html()(group.selector)[i]!)).toEqual(item)));
}
for (const development of [true, false]) it('complete main DOM SWC ' + development, () => {
    const Page = sourceModule(base + '/page.tsx', { development }).default as React.ComponentType;
    expect(load(renderToStaticMarkup(<Page />))('main').contents().toArray().map(tree).filter(Boolean)).toEqual(inventory.main);
});
inventory.categories.forEach((nodes, i) => it('category ' + i + ' complete structure', () => {
    const Category = sourceModule(base + '/Category' + i + '.tsx').default as React.ComponentType;
    expect(load(renderToStaticMarkup(<Category />))('body').contents().toArray().map(tree).filter(Boolean)).toEqual(nodes);
}));
inventory.css.forEach((r, i) => it('CSS ' + i + ' ' + r.selector, () => {
    const selector = r.selector.split(',').map(s => [':root', 'html', 'body'].includes(s.trim()) ? '.iso291193-page' : '.iso291193-page ' + s.trim()).join(', ');
    const found: unknown[] = [];
    postcss.parse(readFileSync(base + '/iso-iec-ieee-29119-3-2021-guide.css', 'utf8')).walkRules(rule => {
        if (rule.selector === selector && (rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : null) === r.media)
            found.push(rule.nodes.filter(d => d.type === 'decl').map(d => { const v = d as postcss.Declaration; return [v.prop, v.value, v.important || false]; }));
    }); expect(found).toContainEqual(r.decls);
}));
inventory.diagrams.forEach((d, i) => it('diagram ' + i + ' exact source chart and original theme configuration', async () => {
 const charts = sourceModule(base + '/diagrams.ts') as Record<string,string>;
 const chart = charts['DIAGRAM_' + i]!;
 expect(chart).toBe(charts.MERMAID_CONFIG + '\n' + d.chart.split('\n').map(l => l.trim()).join('\n').trim());
 expect(JSON.parse(charts.MERMAID_CONFIG!.slice('%%{init: '.length, -'}%%'.length))).toEqual({ ...inventory.config, flowchart:{ ...inventory.config.flowchart, padding:15 } });
 const runtimeBundle: string = 'mermaid/dist/mermaid.esm.min.mjs';
 const mermaid = (await import(runtimeBundle)).default;
 expect(await mermaid.parse(chart)).toBeTruthy();
}));
for (const ext of ['html', 'md'] as const) it('archive ' + ext + ' exact bytes and tracked relocation', () => {
    const path = 'archive/' + ext + '-archive/iso/Iso-iec-ieee-29119-3-2021-guide.' + ext;
    expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(inventory.hashes[ext]);
    expect(existsSync('Iso-iec-ieee-29119-3-2021-guide.' + ext)).toBe(false);
    expect(execFileSync('git', ['ls-files', '--', path], { encoding: 'utf8' }).trim()).toBe(path);
});
it('route registered', () => expect(readFileSync('lib/navigation.ts', 'utf8')).toContain("href: '/iso-iec-ieee-29119-3-2021-guide'"));
it('unique IDs and resolving anchors', () => { const $ = html(); const ids = $('[id]').map((_, e) => $(e).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length); $('a[href^="#"]').each((_, a) => expect(ids.filter(id => id === $(a).attr('href')!.slice(1))).toHaveLength(1)); });
it('no whitespace text inside table structure', () => { const $ = html(); expect($('table,thead,tbody,tfoot,tr').toArray().filter(e => e.children.some(c => c.type === 'text'))).toEqual([]); });
it('imports scoped CSS and exact title metadata', () => {
    expect(readFileSync(base + '/page.tsx', 'utf8')).toContain("import './iso-iec-ieee-29119-3-2021-guide.css'");
    expect(sourceModule(base + '/page.tsx').metadata).toEqual({ title: inventory.title });
});

it('passes every original chart to the shared renderer in document order', () => {
    const charts = sourceModule(base + '/diagrams.ts') as Record<string,string>;
    const actual: string[] = [];
    function visit(value: React.ReactNode): void {
        React.Children.forEach(value, child => {
            if (!React.isValidElement<{ chart?: string; children?: React.ReactNode }>(child)) return;
            if (child.props.chart) actual.push(child.props.chart);
            if (child.props.children) visit(child.props.children);
        });
    }
    inventory.categories.forEach((_,i)=> {
        const Category = sourceModule(base + '/Category' + i + '.tsx').default as () => React.ReactNode;
        visit(Category());
    });
    expect(actual).toEqual(inventory.diagrams.map((_, i)=>charts['DIAGRAM_'+i]));
});

