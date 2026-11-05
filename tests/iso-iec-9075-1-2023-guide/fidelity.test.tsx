import { describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/iso-iec-9075-1-2023-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/iso-iec-9075-1-2023-guide';
const scope = '.sql-framework-page';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
// Intentional accessibility corrections only: safe external links and invalid nested labels.
function correct(html: string) {
    const $ = load(html);
    $('a[href^="http"]').attr('target', '_blank').attr('rel', 'noopener noreferrer');
    $('.ck-text > label').each((_, el) => { $(el).replaceWith($(el).contents()); });
    $('.cnt').text('0 / 9');
    // Table indentation is not content: React forbids these whitespace children.
    // The raw-DOM and hydration regressions independently reject them in the page.
    $('table,thead,tbody,tfoot,tr,colgroup').contents().filter((_, node) => node.type === 'text' && /^\s*$/.test(node.data)).remove();
    return $;
}
// Reviewed source fix: the public contents page lists clause 8. Applied to the source only, so an unfixed page fails.
const CLAUSE_8 = /<td>8<\/td>\s*<td><strong>未確認<\/strong>（プレビューに掲載なし）<\/td>\s*<td>原文で確認してください<\/td>/;
const reviewed = (html: string) => html.replace(CLAUSE_8, '<td>8 Status codes</td><td>8.1 SQLSTATE</td><td>SQL文の実行状態を示す値と、その返し方を定める章</td>');
function tree(n: AnyNode | undefined): unknown {
    if (!n) throw new Error('Missing source element');
    if (n.type === 'text') return norm(n.data) || null;
    if (!isTag(n)) return null;
    const attrs = { ...n.attribs };
    for (const key of ['aria-current','aria-controls','aria-expanded','inert','tabindex','role','aria-label','aria-labelledby','aria-describedby','aria-valuemin','aria-valuemax','aria-valuenow']) delete attrs[key];
    if (attrs.class === 'mermaid-diagram') return { tag: n.tagName, attrs, children: [] };
    if (n.tagName === 'pre') return { tag: n.tagName, attrs, code: load('')(n).text() };
    if (attrs.class === 'fill') delete attrs.style;
    return { tag: n.tagName, attrs, children: n.children.map(tree).filter(x => x !== null) };
}
function renderFile(file: string, development = false) {
    const Component = sourceModule(`${base}/${file}.tsx`, { development }).default as React.ComponentType;
    return correct(renderToStaticMarkup(<Component />));
}
const source = correct(reviewed(inventory.originalBody));
for (const [i, category] of inventory.sections.entries()) {
    describe(`category ${String(i).padStart(2, '0')}: ${category.name}`, () => {
        for (const development of [false, true]) it(`exact complete structure, text, attributes and order (SWC development=${development})`, () => {
            const actual = renderFile(`Section${String(i).padStart(2, '0')}`, development);
            const expected = correct(reviewed(category.html));
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
        expect($('.ck-row label')).toHaveLength(0);
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
    for (const [id, original] of Object.entries(inventory.diagrams)) it(`${id}: Markdown source, SVG node order and actual Mermaid parsing`, async () => {
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
    it('mmd-5: names each conformance decision and the outcome of both branches', () => {
        expect(accessibleName('mmd-5')).toBe('標準準拠を主張したい場合の判断フロー。Core SQLの必須機能を満たすか判定する。満たさない場合（いいえ）は準拠を主張できない。満たす場合（はい）は最小適合の要件を確認し、追加機能も主張するか判定する。追加機能も主張する場合（はい）は機能ID単位で対応を宣言し、実装定義の要素は実装側で決めて文書化する。追加機能を主張しない場合（いいえ）はCore SQLの範囲で主張し、実装定義の要素は実装側で決めて文書化する。');
    });
    it('mmd-10: separates the standard-syntax and dialect-syntax paths with their follow-up tests', () => {
        expect(accessibleName('mmd-10')).toBe('DBMSの対応状況に応じた構文選択フロー。対象DBMSの適合性一覧を確認し、使いたい機能の機能IDを特定して、DBMSが対応しているか判定する。対応している場合（はい）は標準構文を採用し、標準構文の移植テストを作成する。対応していない場合（いいえ）は方言構文を分離して隔離し、方言差を吸収するテストを作成する。');
    });
    it('passes all ten definitions to the shared renderer in source order', () => {
        const charts: string[] = [];
        const Component = sourceModule(`${base}/page.tsx`, { onMermaidChart: chart => charts.push(chart) }).default as React.ComponentType;
        renderToStaticMarkup(<Component />);
        const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
        expect(charts).toEqual(Object.values(DIAGRAMS));
    });
});
describe('reviewed clause 8 row', () => {
    it('applies to the original source exactly once', () => expect(inventory.originalBody.match(new RegExp(CLAUSE_8, 'g'))).toHaveLength(1));
    it('names Status codes and SQLSTATE instead of an unconfirmed placeholder', () => {
        const row = renderFile('Section05')('tbody tr').filter((_, n) => load(n)('td').first().text().startsWith('8'));
        expect(row.find('td').map((_, n) => norm(load(n).text())).get()).toEqual(['8 Status codes', '8.1 SQLSTATE', 'SQL文の実行状態を示す値と、その返し方を定める章']);
        expect(row.text()).not.toContain('未確認');
    });
});
describe('original archives', () => {
    // The archive is formatted differently, so both sides are compared as parsed and re-serialized HTML.
    it('inventory body is exactly the parsed body of the archived HTML', () => {
        expect(load(readFileSync(`archive/html-archive/iso/${inventory.source}.html`, 'utf8'))('body').html()).toBe(inventory.originalBody);
    });
    for (const ext of ['html','md'] as const) it(`${ext}: moved out of root with identical SHA-256`, () => {
        expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
        expect(createHash('sha256').update(readFileSync(`archive/${ext}-archive/iso/${inventory.source}.${ext}`)).digest('hex')).toBe(inventory.hashes[ext]);
    });
});
