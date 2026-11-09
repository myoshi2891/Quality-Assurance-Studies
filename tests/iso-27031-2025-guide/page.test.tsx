import { describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
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

    it('isolates all rules and offsets fixed chrome and headings without clobbering main margin or hero padding', () => {
        const css = readFileSync(`${base}/guide.css`, 'utf8');
        const root = postcss.parse(css);
        root.walkRules(r => r.selectors.forEach(s => expect(s.startsWith(scope)).toBe(true)));
        for (const text of [
            'var(--disclaimer-height, 0px)',
            '.iso27031-page .sidebar { top: calc(60px + var(--disclaimer-height, 0px)); }',
            '.iso27031-page .nav-toggle { top: calc(72px + var(--disclaimer-height, 0px)); }',
            'scroll-margin-top: calc(80px + var(--disclaimer-height, 0px))',
            'scroll-margin-top: calc(124px + var(--disclaimer-height, 0px))',
            'foreignObject',
            'max-width: none',
            '(max-width: 900px)',
            'visibility: hidden',
            'prefers-reduced-motion: reduce',
        ]) {
            expect(css).toContain(text);
        }
        // Regression guard: global reset rules must NOT force margin:0 !important or padding:0 !important on <main>,
        // nor padding-top:0 !important on .hero, which hid main content under the fixed 280px sidebar.
        const forbiddenMainHeroImportant: string[] = [];
        root.walkRules(r => {
            if (r.selectors.some(s => s === `${scope} main` || s === `${scope} .main` || s === `${scope} .hero`)) {
                r.walkDecls(d => {
                    if (d.important && ['margin', 'margin-left', 'padding', 'padding-top', 'overflow'].includes(d.prop)) {
                        forbiddenMainHeroImportant.push(`${r.selector} { ${d.prop}: ${d.value} !important }`);
                    }
                });
            }
        });
        expect(forbiddenMainHeroImportant).toEqual([]);

        let focusDeclarations: string[] = [];
        root.walkRules(r => {
            if (r.selectors.includes(`${scope} .table-scroll:focus-visible`)) {
                focusDeclarations = r.nodes.filter(n => n.type === 'decl').map(d => d.toString());
            }
        });
        expect(focusDeclarations).toEqual(['outline: 2px solid var(--accent)', 'outline-offset: 2px']);
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
        if (diagram.id === 'mmd-0') {
            expect(charts[0]!).toContain('classDef pt fill:#1e3a5f,stroke:#7c9eff,color:#ffffff');
            expect(charts[0]!).toContain('class A1,A2,A3 pt');
        }
        expect(charts[0]!).toContain('"mainBkg": "#12233b"');
        expect(charts[0]!).toContain('"lineColor": "#9cb0cf"');
        expect(charts[0]!).toContain('"signalColor": "#c7d6ec"');
        expect(charts[0]!).toContain('"clusterBorder": "#3b5a8c"');
        expect(charts[0]!).toContain('"edgeLabelBackground": "#07111e"');
        expect(charts[0]!.split('}%%')[0]).not.toContain("'");
    });
});

describe('assembled source inventory', () => {
    let cached: ReturnType<typeof render>;
    const page = () => cached ??= render('page');
    const expected = source(inventory.originalBody);
    for (const [name, group] of Object.entries(inventory.groups)) {
        it(`${name}: exact ordered count`, () => expect(page()(group.selector)).toHaveLength(group.items.length));
        group.items.forEach((html, i) =>
            it(`${name} ${i}: complete original element`, () =>
                expect(tree(page()(group.selector)[i]!)).toEqual(tree(source(html)('body').children()[0]!))),
        );
    }
    for (const development of [false, true]) {
        it(`complete page DOM and text, SWC development=${development}`, () => {
            const $ = render('page', development);
            expect(tree($('.nav-toggle')[0]!)).toEqual(tree(expected('.nav-toggle')[0]!));
            expect(tree($('main')[0]!)).toEqual(tree(expected('main')[0]!));
            expect(tree($('.sidebar')[0]!)).toEqual(tree(expected('.sidebar')[0]!));
            $('.mermaid-diagram').empty();
            const ref = source(inventory.originalBody);
            ref('.mermaid-diagram').empty();
            expect(norm($('main').text())).toBe(norm(ref('main').text()));
            const ids = $('[id]').map((_, n) => $(n).attr('id')).get();
            expect(new Set(ids).size).toBe(ids.length);
            $('.sidebar a').each((_, n) => expect(ids.filter(id => id === $(n).attr('href')!.slice(1))).toHaveLength(1));
            expect($('script,style,svg,table > div,tr > div')).toHaveLength(0);
            $('a[href^="http"]').each((_, n) => {
                expect($(n).attr('rel')).toBe('noopener noreferrer');
                expect($(n).attr('target')).toBe('_blank');
            });
            const entry = readFileSync(`${base}/page.tsx`, 'utf8');
            expect(entry).toContain("import './guide.css'");
            expect(entry).toContain('noto-sans-jp-800.css');
            expect(sourceModule(`${base}/page.tsx`).metadata).toMatchObject({ title: inventory.title });
        });
    }
    it('replaces literal Markdown asterisks with strong emphasis in Section14', () => {
        expect(inventory.sections[14]!.html).toContain('**');
        expect(applyReviewCorrections(inventory.sections[14]!.html)).not.toContain('**');
        const s14 = render('Section14');
        expect(s14('p strong').map((_, n) => s14(n).text()).get()).toContain('「最低限ここまでは維持できる」という現実的な水準（MBCO）');
        expect(page()('main').text()).not.toContain('**');
    });
});
