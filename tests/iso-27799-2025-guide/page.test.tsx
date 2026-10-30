import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { cleanup, render, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import postcss from 'postcss';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/iso-27799-2025-guide.json';
import { sourceModule } from '../helpers/source-module';
import { tree } from './fidelity';
const base = 'app/iso-27799-2025-guide';
const scope = '.health-page';
const entry = '../../app/iso-27799-2025-guide/page';
const diagramsEntry = '../../app/iso-27799-2025-guide/diagrams';
const html = async () => { const Page = (await import(entry)).default; return load(renderToStaticMarkup(<Page />)); };
const css = () => postcss.parse(readFileSync(`${base}/iso-27799-2025-guide.css`, 'utf8'));
afterEach(cleanup);
describe('exact original inventory', () => {
    for (const [category, group] of Object.entries(inventory.groups)) {
        it(`${category}: exact count and order`, async () => expect((await html())(group.selector).toArray().map(tree)).toEqual(group.items));
        group.items.forEach((expected, i) => it(`${category}[${i}]: full text, attributes and nested structure`, async () => {
            const $ = await html(); expect(tree($(group.selector)[i])).toEqual(expected);
        }));
    }
    for (const development of [false, true]) it(`complete DOM after SWC development=${development}`, () => {
        const Page = sourceModule(`${base}/page.tsx`, { development }).default as React.ComponentType;
        const $ = load(renderToStaticMarkup(<Page />)); expect($('main').contents().toArray().map(tree).filter(Boolean)).toEqual(inventory.main);
    });
    it('every diagram is described by its own text summary', async () => {
        const $ = await html(); const diagrams = $('main .mermaid-diagram[role="img"]').toArray(); expect(diagrams).toHaveLength(11);
        const summaries = diagrams.map(el => {
            const id = $(el).attr('id')!; expect($(el).attr('aria-describedby')).toBe(`${id}-desc`);
            const desc = $('[id]').filter((_, d) => $(d).attr('id') === `${id}-desc`); expect(desc).toHaveLength(1);
            const text = desc.text().trim(); expect(text.length).toBeGreaterThan(40); return text;
        });
        expect(new Set(summaries).size).toBe(11);
        const flow = summaries[9]!; for (const step of ['対象範囲', '棚卸し', 'リスクアセスメント', '管理策', 'Comply or Explain', '適用宣言書', '教育訓練', '監視', 'レビュー', '継続的改善']) expect(flow).toContain(step);
    });
    it('scrollable table and diagram wrappers are keyboard-focusable with a visible focus outline', async () => {
        const $ = await html(); const tables = $('main .table-scroll').toArray(); const diagrams = $('main .mermaid-diagram').toArray();
        expect(tables).toHaveLength(31); expect(diagrams).toHaveLength(11);
        for (const el of [...tables, ...diagrams]) expect($(el).attr('tabindex')).toBe('0');
        expect(css().toString()).toMatch(/\.health-page \.table-scroll:focus-visible,\s*\.health-page \.mermaid-diagram:focus-visible\s*\{[^}]*outline:2px solid var\(--accent\)/);
    });
    it('heading anchors are revealed and outlined on keyboard focus', () => {
        const text = css().toString();
        expect(text).toMatch(/\.health-page h2 \.anchor:focus-visible,\s*\.health-page h3 \.anchor:focus-visible\s*\{[^}]*opacity:\s*0\.8[^}]*outline:\s*2px solid/);
    });
    it('unique IDs and every internal reference resolves once', async () => {
        const $ = await html(); const ids = $('[id]').map((_, el) => $(el).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length);
        $('a[href^="#"]').each((_, a) => expect($('[id]').filter((_, el) => $(el).attr('id') === $(a).attr('href')!.slice(1)).length).toBe(1));
        $('main a[href^="http"]').each((_, a) => { expect($(a).attr('target')).toBe('_blank'); expect($(a).attr('rel')).toBe('noopener noreferrer'); });
    });
});
describe('source CSS', () => {
    inventory.css.forEach((rule, i) => it(`CSS[${i}] ${rule.selector} ${rule.media ?? 'desktop'}`, () => {
        const selector = rule.selector.split(',').map(s => [':root', 'html', 'body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
        const found: unknown[] = []; css().walkRules(r => {
            if (r.selector === selector && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === rule.media)
                found.push(r.nodes.filter(n => n.type === 'decl').map(d => { const n = d as postcss.Declaration; return [n.prop, n.value, n.important ?? null]; }));
        }); expect(found).toContainEqual(rule.decls);
    }));
    it('scopes every selector and imports CSS and 800-weight font', () => {
        css().walkRules(r => r.selectors.forEach(s => expect(s.startsWith(scope)).toBe(true)));
        const entry = readFileSync(`${base}/page.tsx`, 'utf8'); expect(entry).toContain("import './iso-27799-2025-guide.css'"); expect(entry).toContain("import '../fonts/noto-sans-jp-800.css'");
        expect(css().toString()).toContain('var(--disclaimer-height, 0px)');
    });
});
describe('diagrams', () => {
    for (const [id, diagram] of Object.entries(inventory.diagrams)) it(`${id}: source SVG labels, original connections and real parser`, async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry); expect(DIAGRAMS[id].slice(MERMAID_CONFIG.length).trim()).toBe(diagram.chart);
        expect(MERMAID_CONFIG).not.toContain("'");
        const realEntry: string = 'mermaid/dist/mermaid.esm.mjs'; const real = (await import(realEntry)).default;
        expect((await real.parse(DIAGRAMS[id])).diagramType).toBe('flowchart-v2');
    });
    it('uses shared Mermaid renderer for all eleven diagrams in source order', async () => {
        const previous = mermaid.render; const calls: string[] = [];
        mermaid.render = mock(async (_id: string, chart: string) => { calls.push(chart); return { svg: '<svg viewBox="0 0 200 100"><text>diagram</text></svg>' }; }) as unknown as typeof mermaid.render;
        try { const Page = (await import(entry)).default; const view = render(<Page />); await waitFor(() => expect(view.container.querySelectorAll('.mermaid-diagram svg')).toHaveLength(11)); const { DIAGRAMS } = await import(diagramsEntry); expect(calls).toEqual(Object.values(DIAGRAMS)); } finally { cleanup(); mermaid.render = previous; }
    });
});
