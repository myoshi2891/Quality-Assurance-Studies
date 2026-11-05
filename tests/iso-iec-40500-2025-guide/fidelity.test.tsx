import { describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/iso-iec-40500-2025-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/iso-iec-40500-2025-guide';
const scope = '.wcag-40500-page';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
// Intentional accessibility corrections only: safe external links and invalid nested labels.
function correct(html: string) {
    const $ = load(html);
    $('a[href^="http"]').attr('target', '_blank').attr('rel', 'noopener noreferrer');
    $('.ck-text > label').each((_, el) => { $(el).replaceWith($(el).contents()); });

    // Table indentation is not content: React forbids these whitespace children.
    // The raw-DOM and hydration regressions independently reject them in the page.
    $('table,thead,tbody,tfoot,tr,colgroup').contents().filter((_, node) => node.type === 'text' && /^\s*$/.test(node.data)).remove();
    return $;
}
function tree(n: AnyNode | undefined): unknown {
    if (!n) throw new Error('Missing source element');
    if (n.type === 'text') return norm(n.data) || null;
    if (!isTag(n)) return null;
    const attrs = { ...n.attribs };
    for (const key of ['aria-current','aria-controls','aria-expanded','inert','tabindex','role','aria-label','aria-labelledby','aria-describedby','aria-valuemin','aria-valuemax','aria-valuenow']) delete attrs[key];
    if (attrs.class === 'mermaid-diagram') return { tag: n.tagName, attrs, children: [] };
    if (n.tagName === 'pre') return { tag: n.tagName, attrs, code: load('')(n).text() };
    if (attrs.class === 'cp-fill') delete attrs.style;
    return { tag: n.tagName, attrs, children: n.children.map(tree).filter(x => x !== null) };
}
function renderFile(file: string, development = false) {
    const Component = sourceModule(`${base}/${file}.tsx`, { development }).default as React.ComponentType;
    return correct(renderToStaticMarkup(<Component />));
}
const source = correct(inventory.originalBody);
for (const [i, category] of inventory.sections.entries()) {
    describe(`category ${String(i).padStart(2, '0')}: ${category.name}`, () => {
        for (const development of [false, true]) it(`exact complete structure, text, attributes and order (SWC development=${development})`, () => {
            const actual = renderFile(`Section${String(i).padStart(2, '0')}`, development);
            const expected = correct(category.html);
            expect(actual('body').contents().toArray().map(tree).filter(Boolean)).toEqual(expected('body').contents().toArray().map(tree).filter(Boolean));
            // Full text also detects whitespace lost between adjacent inline elements.
            actual('.mermaid-diagram').empty(); expected('.mermaid-diagram').empty();
            expect(norm(actual('body').text())).toBe(norm(expected('body').text()));
        });
    });
}
describe('foundation CSS', () => {
    for (const [i, rule] of inventory.css.entries()) it(`CSS ${i}: ${rule.selector} (${rule.media ?? 'desktop'})`, () => {
        const expectedSelector = rule.selector.split(',').map(s => [':root','html','body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
        const found: unknown[] = [];
        postcss.parse(readFileSync(`${base}/guide.css`, 'utf8')).walkRules(r => {
            if (r.selector === expectedSelector && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === rule.media)
                found.push(r.nodes.filter(n => n.type === 'decl').map(d => { const n = d as postcss.Declaration; return [n.prop,n.value,n.important ?? null]; }));
        });
        expect(found).toContainEqual(rule.decls);
    });
    it('scopes every rule and guards application chrome, SVG labels and global card styles', () => {
        const css = readFileSync(`${base}/guide.css`, 'utf8');
        postcss.parse(css).walkRules(r => r.selectors.forEach(s => expect(s.startsWith(scope)).toBe(true)));
        for (const text of ['var(--disclaimer-height, 0px)', '.mermaid-wrapper', 'max-width: none', 'foreignObject', 'overflow: visible']) expect(css).toContain(text);
    });
});
describe('assembled page', () => {
    for (const [name, group] of Object.entries(inventory.groups)) {
        it(`${name}: exact ordered inventory length`, () => expect(renderFile('page')(group.selector)).toHaveLength(group.items.length));
        group.items.forEach((_, i) => it(`${name} ${i}: exact source structure`, () => {
            const $ = renderFile('page'); expect(tree($(group.selector)[i])).toEqual(tree(source(group.selector)[i]));
        }));
    }
    it('preserves complete body content order, heading IDs, footer and all citation destinations', () => {
        const $ = renderFile('page');
        expect($('main').contents().toArray().map(tree).filter(Boolean)).toEqual(source('main').contents().toArray().map(tree).filter(Boolean));
        const ids = $('[id]').map((_, n) => $(n).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length);
        $('a[href^="#"]').each((_, n) => expect(ids.filter(id => id === $(n).attr('href')!.slice(1))).toHaveLength(1));
        const entry = readFileSync(`${base}/page.tsx`, 'utf8'); expect(entry).toContain("import './guide.css'"); expect(entry).toContain('noto-sans-jp-800.css');
        expect(sourceModule(`${base}/page.tsx`).metadata).toMatchObject({ title: inventory.title });
        expect($('script,style,svg')).toHaveLength(0);
        expect($('table,thead,tbody,tr').contents().filter((_,n) => n.type === 'text')).toHaveLength(0);
    });
});
// correct() rewrites these attributes, so only the uncorrected output can detect a regression.
describe('rendered page before test corrections', () => {
    const raw = () => load(renderToStaticMarkup(React.createElement(sourceModule(`${base}/page.tsx`).default as React.ComponentType)));
    it('marks every external link as safe', () => {
        const links = raw()('a[href^="http"]').toArray();
        expect(links.length).toBeGreaterThan(0);
        expect(links.filter(link => link.attribs.target !== '_blank' || link.attribs.rel !== 'noopener noreferrer').map(link => link.attribs.href)).toEqual([]);
    });
    it('does not nest labels inside the checklist text', () => expect(raw()('.ck-text > label')).toHaveLength(0));
});
describe('diagram semantics', () => {
    for (const [id, original] of Object.entries(inventory.diagrams)) it(`${id}: HTML-derived source, SVG node order and actual Mermaid parsing`, async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string>; MERMAID_CONFIG: string };
        expect(DIAGRAMS[id]).toBe(`${MERMAID_CONFIG}\n${original.chart.split('\n').map(s => s.trim()).join('\n')}`);
        expect(MERMAID_CONFIG).not.toContain("'");
        const entry: string = 'mermaid/dist/mermaid.esm.mjs'; const mermaid = (await import(entry)).default;
        expect((await mermaid.parse(DIAGRAMS[id])).diagramType).toBe('flowchart-v2');
        const labels = original.chart.match(/\["([^"\n]+)"\]|\{"([^"\n]+)"\}/g) ?? [];
        expect(labels.length).toBeGreaterThan(0);
    });
    const accessibleName = (id: string) => {
        const Component = sourceModule(`${base}/Diagram.tsx`).default as React.ComponentType<{ id: string }>;
        return load(renderToStaticMarkup(<Component id={id} />))('[role="img"]').attr('aria-label');
    };
    for (const id of Object.keys(inventory.diagrams)) it(`${id}: retains the original accessible figure name`, () => {
        expect(accessibleName(id)).toBe(source(`[id="${id}"]`).attr('aria-label'));
    });
    it('passes all nine definitions to the shared renderer in source order', () => {
        const charts: string[] = [];
        const Component = sourceModule(`${base}/page.tsx`, { onMermaidChart: chart => charts.push(chart) }).default as React.ComponentType;
        renderToStaticMarkup(<Component />);
        const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
        expect(charts).toEqual(Object.values(DIAGRAMS));
    });
});
describe('original archives', () => {
    // Bind the fixed inventory to the archived original, as parsed and re-serialized HTML.
    it('inventory body is exactly the parsed body of the archived HTML', () => {
        expect(load(readFileSync(`archive/html-archive/iso/${inventory.source}.html`, 'utf8'))('body').html()).toBe(inventory.originalBody);
    });
    for (const ext of ['html','md'] as const) it(`${ext}: moved out of root with identical SHA-256`, () => {
        expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
        expect(createHash('sha256').update(readFileSync(`archive/${ext}-archive/iso/${inventory.source}.${ext}`)).digest('hex')).toBe(inventory.hashes[ext]);
    });
});
