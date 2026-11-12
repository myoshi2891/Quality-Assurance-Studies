import { expect, it } from 'bun:test';
import React from 'react';
import type { AnyNode } from 'domhandler';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { load, type CheerioAPI } from 'cheerio';
import postcss from 'postcss';
import rawInventory from '../../docs/migration-inventory/iso-iec-ts-30149-2024-guide.json';
import { sourceModule } from '../helpers/source-module';
import { DIAGRAM_EDGE_CORRECTIONS } from './review-corrections';
const base = 'app/iso-iec-ts-30149-2024-guide';
const inventory = rawInventory;
function tree(n: AnyNode): unknown {
    if (n.type === 'text') return n.data.replace(/\s+/g, ' ').trim() || null;
    if (n.type !== 'tag') return null;
    if (n.attribs.class === 'mermaid-diagram') {
        // 図の中身は図ごとの検証で扱う。ラッパーに class・id 以外の属性（領域名など）があれば照合する
        const id = n.attribs.id;
        const attrs = { ...n.attribs }; delete attrs.class; delete attrs.id;
        return Object.keys(attrs).length ? { tag: 'diagram', id, attrs } : { tag: 'diagram', id };
    }
    const attrs = { ...n.attribs }; delete attrs['aria-current'];
    return { tag: n.name, attrs, children: n.children.map(tree).filter(Boolean) };
}
// 読み取り専用の検証で共有するため、ソース変換・描画・解析は初回の 1 回だけ行う
let cachedDocument: CheerioAPI | undefined;
function html(): CheerioAPI {
    if (cachedDocument) return cachedDocument;
    const Page = sourceModule(base + '/page.tsx').default as React.ComponentType;
    cachedDocument = load(renderToStaticMarkup(<Page />));
    return cachedDocument;
}
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
    const selector = r.selector.split(',').map(s => [':root', 'html', 'body'].includes(s.trim()) ? '.iso30149-page' : '.iso30149-page ' + s.trim()).join(', ');
    const found: unknown[] = [];
    postcss.parse(readFileSync(base + '/iso-iec-ts-30149-2024-guide.css', 'utf8')).walkRules(rule => {
        if (rule.selector === selector && (rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : null) === r.media)
            found.push(rule.nodes.filter(d => d.type === 'decl').map(d => { const v = d as postcss.Declaration; return [v.prop, v.value, v.important || false]; }));
    }); expect(found).toContainEqual(r.decls);
}));
inventory.diagrams.forEach((d, i) => it('diagram ' + i + ' exact original node labels, shapes and edges', async () => {
 const charts = sourceModule(base + '/diagrams.ts') as Record<string,string>;
 const chart = charts['DIAGRAM_' + i]!;
 expect(chart.startsWith(charts.MERMAID_CONFIG! + '\n')).toBe(true);
 // 支援技術向けに、図の内容と流れを説明する accTitle / accDescr を図種別の直後に置く（原本は未設定）
 expect(chart.split('\n').slice(2, 4)).toEqual(['accTitle: ' + d.accTitle, 'accDescr: ' + d.accDescr]);
 for (const n of d.nodes) expect(chart).toContain(n.id + (n.shape === 'polygon' ? '{"' : '["') + n.html?.replace(/<br\s*\/?\s*>/g,'<br/>') + (n.shape === 'polygon' ? '"}' : '"]'));
 const md = readFileSync(existsSync('Iso-iec-ts-30149-2024-guide.md') ? 'Iso-iec-ts-30149-2024-guide.md' : 'archive/md-archive/iso/Iso-iec-ts-30149-2024-guide.md','utf8');
 const original = [...md.matchAll(/```mermaid\n([\s\S]*?)```/g)][i]![1]!;
 const sourceEdges = original.split('\n').filter(line=>/(?:-->|-\.->)/.test(line)).map(line=>line.trim().replace(/\b[A-Z][A-Z0-9]*\b/g, id => d.nodes.some(n => n.id === 'N' + (i+1) + '_' + id) ? 'N' + (i+1) + '_' + id : id));
 expect(chart.split('\n').filter(line => /(?:-->|-\.->)/.test(line))).toEqual([...(DIAGRAM_EDGE_CORRECTIONS[i] ?? sourceEdges)]);
 const mermaid = (await import('mermaid/dist/mermaid.esm.min.mjs')).default;
 expect(await mermaid.parse(chart)).toBeTruthy();
}));
for (const ext of ['html', 'md'] as const) it('archive ' + ext + ' exact bytes and tracked relocation', () => {
    const path = 'archive/' + ext + '-archive/iso/Iso-iec-ts-30149-2024-guide.' + ext;
    expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(inventory.hashes[ext]);
    expect(existsSync('Iso-iec-ts-30149-2024-guide.' + ext)).toBe(false);
    expect(execFileSync('git', ['ls-files', '--', path], { encoding: 'utf8' }).trim()).toBe(path);
});
it('mobile heading anchors land below the fixed TOC button and the disclaimer', () => {
    const found: string[] = [];
    postcss.parse(readFileSync(base + '/iso-iec-ts-30149-2024-guide.css', 'utf8')).walkRules('.iso30149-page .content h2[id], .iso30149-page .content h3[id]', rule => {
        if (rule.parent?.type === 'atrule' && (rule.parent as postcss.AtRule).params === '(max-width: 900px)') rule.walkDecls('scroll-margin-top', d => { found.push(d.value); });
    });
    expect(found).toEqual(['calc(120px + var(--disclaimer-height, 0px))']);
});
it('route registered', () => expect(readFileSync('lib/navigation.ts', 'utf8')).toContain("href: '/iso-iec-ts-30149-2024-guide'"));
it('unique IDs and resolving anchors', () => { const $ = html(); const ids = $('[id]').map((_, e) => $(e).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length); $('a[href^="#"]').each((_, a) => expect(ids.filter(id => id === $(a).attr('href')!.slice(1))).toHaveLength(1)); });
it('no whitespace text inside table structure', () => { const $ = html(); expect($('table,thead,tbody,tfoot,tr').toArray().filter(e => e.children.some(c => c.type === 'text'))).toEqual([]); });
it('imports scoped CSS and exact title metadata', () => {
    expect(readFileSync(base + '/page.tsx', 'utf8')).toContain("import './iso-iec-ts-30149-2024-guide.css'");
    expect(sourceModule(base + '/page.tsx').metadata).toEqual({ title: inventory.title, description: inventory.description });
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

// 原本の表は罫線色をブラウザー既定に任せており、既定値はブラウザーの版で異なるため、特定の色へ固定しない
it('leaves the table border colour to the browser default like the source', () => {
    const css = readFileSync('app/iso-iec-ts-30149-2024-guide/iso-iec-ts-30149-2024-guide.css', 'utf8');
    expect(css).toContain('.iso30149-page table { color:var(--text); border-color:revert; }');
});
