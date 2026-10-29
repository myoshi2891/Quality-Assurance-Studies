import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { cleanup, render, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import postcss from 'postcss';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/iso-23009-1-2026-guide.json';
import { sourceModule } from '../helpers/source-module';
import { tree } from './fidelity';
const base = 'app/iso-23009-1-2026-guide';
const scope = '.dash-page';
const entry = '../../app/iso-23009-1-2026-guide/page';
const diagramsEntry = '../../app/iso-23009-1-2026-guide/diagrams';
const html = async () => { const Page = (await import(entry)).default; return load(renderToStaticMarkup(<Page />)); };
const css = () => postcss.parse(readFileSync(`${base}/iso-23009-1-2026-guide.css`, 'utf8'));
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
        const entry = readFileSync(`${base}/page.tsx`, 'utf8'); expect(entry).toContain("import './iso-23009-1-2026-guide.css'"); expect(entry).toContain("import '../fonts/noto-sans-jp-800.css'");
        expect(css().toString()).toContain('var(--disclaimer-height, 0px)');
    });
});
describe('diagrams', () => {
    for (const [id, diagram] of Object.entries(inventory.diagrams)) it(`${id}: source SVG labels, original connections and real parser`, async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry); expect(DIAGRAMS[id].slice(MERMAID_CONFIG.length).trim()).toBe(diagram.chart);
        expect(MERMAID_CONFIG).not.toContain("'");
        const realEntry: string = 'mermaid/dist/mermaid.esm.mjs'; const real = (await import(realEntry)).default;
        expect((await real.parse(DIAGRAMS[id])).diagramType).toBe(id.endsWith('-6') ? 'sequence' : 'flowchart-v2');
    });
    it('uses shared Mermaid renderer for all six diagrams in source order', async () => {
        const previous = mermaid.render; const calls: string[] = [];
        mermaid.render = mock(async (_id: string, chart: string) => { calls.push(chart); return { svg: '<svg viewBox="0 0 200 100"><text>diagram</text></svg>' }; }) as unknown as typeof mermaid.render;
        try { const Page = (await import(entry)).default; const view = render(<Page />); await waitFor(() => expect(view.container.querySelectorAll('.mermaid-diagram svg')).toHaveLength(6)); const { DIAGRAMS } = await import(diagramsEntry); expect(calls).toEqual(Object.values(DIAGRAMS)); } finally { cleanup(); mermaid.render = previous; }
    });
});
describe('diagram accessible names and descriptions', () => {
    // 図ごとに関係・順序を伝える要素（出現順）。汎用の「図N」では内容が伝わらないため個別に検証する
    const steps: Record<string, string[]> = {
        'mermaid-diagram-1': ['エンコード', 'セグメント化', 'CDN', 'プレーヤー', '回線状況'],
        'mermaid-diagram-2': ['MPD', 'Period', 'AdaptationSet', 'Representation', 'Segment'],
        'mermaid-diagram-3': ['type', 'static', 'mediaPresentationDuration', 'dynamic', 'availabilityStartTime', 'minimumUpdatePeriod'],
        'mermaid-diagram-4': ['MPD を HTTP で取得', '解析', 'Representation を選ぶ', '初期化セグメント', 'メディアセグメント', '高いビットレート', '低いビットレート', 'Patch'],
        'mermaid-diagram-5': ['第6版', '代替メディア', 'コンテンツステアリング', 'セグメントシーケンス', 'パターン', 'CMCD', '非線形再生'],
        'mermaid-diagram-6': ['CDN A', '制御サーバー', '劣化', 'CDN B', '再生は継続'],
    };
    const inOrder = (text: string, words: string[]) => words.map(w => text.indexOf(w)).every((p, i, a) => p >= 0 && (i === 0 || p > a[i - 1]!));
    it('gives each diagram a concise specific aria-label and a hidden description conveying its relationships', async () => {
        const $ = await html(); const diagrams = $('.mermaid-diagram');
        expect(diagrams.map((_, el) => $(el).attr('id')).get()).toEqual(Object.keys(steps));
        const labels = diagrams.map((_, el) => $(el).attr('aria-label') ?? '').get();
        expect(new Set(labels).size).toBe(labels.length);
        diagrams.each((_, el) => {
            const id = $(el).attr('id')!; const label = $(el).attr('aria-label') ?? '';
            expect($(el).attr('role')).toBe('img');
            expect(label).not.toMatch(/^図\d+$/);
            expect(label.length).toBeGreaterThan(5); expect(label.length).toBeLessThanOrEqual(40);
            expect($(el).attr('aria-describedby')).toBe(`${id}-desc`);
            const desc = $(el).find(`[id="${id}-desc"]`);
            expect(desc).toHaveLength(1); expect(desc.attr('hidden')).toBeDefined();
            expect(inOrder(desc.text(), steps[id]!)).toBe(true);
        });
    });
});
describe('XML fidelity to undamaged Markdown original', () => {
    inventory.codes.forEach((code, i) => it(`XML[${i}]: exact indentation, blank lines and syntax tokens`, async () => {
        const $ = await html(); const pre = $('pre').eq(i); expect(pre.text()).toBe(code);
        expect(pre.text()).not.toContain('class="t-tag"');
        expect(pre.find('.code-line')).toHaveLength(code.split('\n').length);
        expect(pre.find('.t-tag').map((_, el) => $(el).text()).get()).toEqual(code.match(/<\/?[A-Za-z][\w:]*/g) ?? []);
        expect(pre.find('.t-str').map((_, el) => $(el).text()).get()).toEqual(code.match(/"[^"\n]*"/g) ?? []);
    }));
});
