import { describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/iso-27031-2025-guide.json';
import { sourceModule } from '../helpers/source-module';
import { applyReviewCorrections, reviewedDiagrams } from './review-corrections';

const base = 'app/iso-27031-2025-guide';
const scope = '.iso27031-page';

// 図はレビューで承認した補正を適用した定義と照合する。インベントリ自体は原本の記録として変更しない。
const diagrams = reviewedDiagrams(inventory.diagrams);
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();

function tree(n: AnyNode): unknown {
    if (n.type === 'text') return norm(n.data) || null;
    if (!isTag(n)) return null;
    const attrs = { ...n.attribs };
    for (const k of ['role', 'aria-label', 'aria-describedby', 'aria-current', 'aria-expanded', 'aria-controls', 'tabindex', 'type']) delete attrs[k];
    if (attrs.class) {
        attrs.class = attrs.class.replace(/(^|\s+)active\b/g, '').trim();
        if (!attrs.class) delete attrs.class;
    }
    if (attrs.style) attrs.style = attrs.style.replace(/\s+/g, '').replace(/;$/, '');
    return { tag: n.tagName, attrs, children: attrs.class === 'mermaid-diagram' ? [] : n.children.map(tree).filter(Boolean) };
}

function source(html: string) {
    const $ = load(applyReviewCorrections(html));
    $('a[href^="http"]').attr('target', '_blank').attr('rel', 'noopener noreferrer');
    // React disallows indentation text directly under table structure.
    $('table,thead,tbody,tfoot,tr,colgroup').contents().filter((_, n) => n.type === 'text' && /^\s*$/.test(n.data)).remove();
    return $;
}

function render(file: string, development = false) {
    const C = sourceModule(`${base}/${file}.tsx`, { development }).default as React.ComponentType;
    return load(renderToStaticMarkup(<C />));
}

for (const [i, category] of inventory.sections.entries()) {
    describe(`category ${String(i).padStart(2, '0')}: ${category.name}`, () => {
        for (const development of [false, true]) it(`complete DOM and inline text, SWC development=${development}`, () => {
            const actual = render(`Section${String(i).padStart(2, '0')}`, development);
            const expected = source(category.html);
            expect(actual('body').contents().toArray().map(tree).filter(Boolean)).toEqual(expected('body').contents().toArray().map(tree).filter(Boolean));
            actual('.mermaid-diagram').empty();
            expected('.mermaid-diagram').empty();
            expect(norm(actual('body').text())).toBe(norm(expected('body').text()));
        });
    });
}

describe('foundation CSS', () => {
    inventory.css.forEach((original, i) => it(`CSS ${i}: every declaration ${original.selector}`, () => {
        const candidates: unknown[] = [];
        const expected = original.selector.split(',').map(s => [':root', 'html', 'body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
        postcss.parse(readFileSync(`${base}/guide.css`, 'utf8')).walkRules(r => {
            if (r.selector === expected && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === original.media)
                candidates.push(r.nodes.filter(n => n.type === 'decl').map(d => { const n = d as postcss.Declaration; return [n.prop, n.value, n.important || null]; }));
        });
        expect(candidates).toContainEqual(original.decls);
    }));

    it('isolates all rules and offsets fixed chrome and headings', () => {
        const css = readFileSync(`${base}/guide.css`, 'utf8');
        postcss.parse(css).walkRules(r => r.selectors.forEach(s => expect(s.startsWith(scope)).toBe(true)));
        for (const text of ['scroll-margin-top', 'foreignObject', 'max-width: none', '(max-width: 900px)']) expect(css).toContain(text);
    });
});

function expectChartMatches(chart: string, diagram: typeof inventory.diagrams[number]) {
    for (const node of diagram.nodes) expect(chart).toContain(node.shape === 'polygon' ? `${node.id}{"${node.label}"}` : `${node.id}["${node.label}"]`);
    for (const edge of diagram.edges) expect(chart).toContain(`${edge.from} ${edge.invisible ? '~~~' : edge.dotted ? '-.->' : '-->'}${edge.label ? `|"${edge.label}"|` : ''} ${edge.to}`);
    for (const cluster of diagram.clusters) expect(chart).toContain(`subgraph ${cluster.id}["${cluster.label}"]`);
    const body = chart.split('}%%')[1]!.split('\n').map(line => line.trim());
    expect(body.filter(line => /^\w+[[{]/.test(line))).toHaveLength(diagram.nodes.length);
    expect(body.filter(line => / (-->|-\.->|~~~)/.test(line))).toHaveLength(diagram.edges.length);
}

describe('source diagrams', () => {
    for (const diagram of diagrams) it(`${diagram.id}: exact HTML nodes, shapes, edges, labels and clusters reach shared Mermaid`, async () => {
        const charts: string[] = [];
        const C = sourceModule(`${base}/Diagram.tsx`, { onMermaidChart: chart => charts.push(chart) }).default as React.ComponentType<{ id: string }>;
        renderToStaticMarkup(<C id={diagram.id} />);
        expect(charts).toHaveLength(1);
        const entry: string = 'mermaid/dist/mermaid.esm.mjs';
        const mermaid = (await import(entry)).default;
        await expect(mermaid.parse(charts[0]!)).resolves.toBeTruthy();
        if (diagram.direction !== 'sequence') {
            expectChartMatches(charts[0]!, diagram);
        }
        expect(charts[0]!).toContain('"mainBkg": "#12233b"');
        expect(charts[0]!.split('}%%')[0]).not.toContain("'");
    });
});

describe('assembled source inventory', () => {
    let cached: ReturnType<typeof render>;
    const page = () => cached ??= render('page');
    for (const [name, group] of Object.entries(inventory.groups)) {
        it(`${name}: exact ordered count`, () => expect(page()(group.selector)).toHaveLength(group.items.length));
    }
});
