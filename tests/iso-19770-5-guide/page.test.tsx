import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/iso-19770-5-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/iso-19770-5-guide';
const scope = '.itam-page';
const pageEntry = '../../app/iso-19770-5-guide/page';
const diagramsEntry = '../../app/iso-19770-5-guide/diagrams';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
async function page() { return (await import(pageEntry)).default as React.ComponentType; }
async function html() { return load(renderToStaticMarkup(React.createElement(await page()))); }
function tree(node: AnyNode | undefined): unknown {
    if (!node) throw new Error('Missing element');
    if (node.type === 'text') return norm(node.data) || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs }; if (attrs.style) attrs.style = attrs.style.replace(/\s+/g, '').replace(/;$/, ''); delete attrs['aria-current']; delete attrs['aria-labelledby'];
    if (attrs.class) attrs.class = attrs.class.replace(/(^|\s)active\b/g, '').trim().replace(/\s+open\b/g, '');
    if (attrs.class === 'mermaid-diagram') { return { tag: node.tagName, attrs, children: [] }; }
    if (node.tagName === 'pre') return { tag: 'pre', attrs, code: load(node).text() };
    return { tag: node.tagName, attrs, children: node.children.map(tree).filter(x => x !== null) };
}
const css = () => postcss.parse(readFileSync(`${base}/iso-19770-5-guide.css`, 'utf8'));
const scoped = (s: string) => s.split(',').map(s => [':root','html','body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
afterEach(cleanup);
describe('exact original inventory', () => {
    for (const [category, group] of Object.entries(inventory.groups)) {
        it(`${category}: exact ordered count`, async () => expect((await html())(group.selector).length).toBe(group.items.length));
        group.items.forEach((expected, index) => it(`${category}[${index}]: full text, attributes and nested structure`, async () => {
            const $ = await html(); expect(tree($(group.selector)[index])).toEqual(expected);
        }));
    }
    for (const development of [false, true]) it(`complete body order after Next.js/SWC development=${development}`, () => {
        const Page = sourceModule(`${base}/page.tsx`, { development }).default as React.ComponentType;
        const $ = load(renderToStaticMarkup(<Page />));
        expect($('.main').contents().toArray().map(tree).filter(Boolean)).toEqual(inventory.main);
    });
    it('all heading IDs are unique and every TOC anchor resolves exactly once', async () => {
        const $ = await html(); const ids = $('[id]').map((_, el) => $(el).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length);
        $('.sidebar a').each((_, el) => expect($($(el).attr('href')!)).toHaveLength(1));
    });
});
describe('every original CSS declaration', () => {
    inventory.css.forEach((rule, i) => it(`CSS[${i}] ${rule.media ?? 'desktop'} ${rule.selector}`, () => {
        const found: unknown[] = []; css().walkRules(r => {
            if (r.selector === scoped(rule.selector) && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === rule.media)
                found.push(r.nodes.filter(n => n.type === 'decl').map(d => { const n = d as postcss.Declaration; return [n.prop, n.value, n.important ?? null]; }));
        }); expect(found).toContainEqual(rule.decls);
    }));
    it('scopes every selector, imports the CSS and 800 font and compensates fixed app chrome', () => {
        css().walkRules(r => r.selectors.forEach(s => expect(s.startsWith(scope)).toBe(true)));
        const entry = readFileSync(`${base}/page.tsx`, 'utf8'); expect(entry).toContain("import './iso-19770-5-guide.css'"); expect(entry).toContain("import '../fonts/noto-sans-jp-800.css'");
        expect(css().toString()).toContain('var(--disclaimer-height, 0px)');
    });
});
describe('all original diagrams', () => {
    for (const [id, diagram] of Object.entries(inventory.diagrams)) it(`${id}: exact HTML-derived definition and actual Mermaid parser`, async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry);
        expect(DIAGRAMS[id].slice(MERMAID_CONFIG.length).trim()).toBe(diagram.chart);
        expect(MERMAID_CONFIG).not.toContain("'");
        const entry: string = 'mermaid/dist/mermaid.esm.mjs'; const real = (await import(entry)).default;
        expect((await real.parse(DIAGRAMS[id])).diagramType).toBe('flowchart-v2');
    });
    it('uses the shared renderer for all nine definitions in order', async () => {
        const original = mermaid.render; const calls: string[] = [];
        mermaid.render = mock(async (_id: string, chart: string) => { calls.push(chart); return { svg: '<svg viewBox="0 0 200 100"><text>diagram</text></svg>' }; }) as unknown as typeof mermaid.render;
        try { const Page = await page(); const result = render(<Page />);
            await waitFor(() => expect(result.container.querySelectorAll('.mermaid-diagram svg')).toHaveLength(9));
            const { DIAGRAMS } = await import(diagramsEntry); expect(calls).toEqual(Object.values(DIAGRAMS));
        } finally { cleanup(); mermaid.render = original; }
    });
});
describe('TOC interactions', () => {
    it('toggles, closes on anchor, closes on Escape and restores focus', async () => {
        const entry = '../../app/iso-19770-5-guide/NavBar'; const Nav = (await import(entry)).default;
        const view = render(<Nav />); const button = view.getByRole('button', { name: '目次を開く' });
        expect(button.getAttribute('aria-expanded')).toBe('false'); fireEvent.click(button); expect(button.getAttribute('aria-expanded')).toBe('true'); expect(view.container.querySelector('.sidebar.open')).not.toBeNull();
        fireEvent.click(view.container.querySelector('a')!); expect(button.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(button); fireEvent.keyDown(document, { key: 'Escape' }); expect(button.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(button);
    });
    it('returns focus to the toggle only when a link closes the open TOC', async () => {
        const entry = '../../app/iso-19770-5-guide/NavBar'; const Nav = (await import(entry)).default;
        const view = render(<Nav />); const button = view.getByRole('button', { name: '目次を開く' }); const anchor = view.container.querySelector('a')!;
        anchor.focus(); fireEvent.click(anchor); expect(document.activeElement).toBe(anchor);
        fireEvent.click(button); anchor.focus(); fireEvent.click(anchor);
        expect(document.activeElement).toBe(button); expect(button.getAttribute('aria-expanded')).toBe('false');
    });
    it('observes all 29 anchors, selects each link and disconnects on unmount', async () => {
        const previous = globalThis.IntersectionObserver; let callback: IntersectionObserverCallback | undefined; const observed: Element[] = []; const disconnect = mock(() => {});
        globalThis.IntersectionObserver = class { constructor(cb: IntersectionObserverCallback) { callback = cb; } observe(el: Element) { observed.push(el); } disconnect = disconnect; } as unknown as typeof IntersectionObserver;
        const targets = document.createElement('div'); targets.innerHTML = inventory.groups.toc.items.map(a => `<h2 id="${a.attrs['data-target']}">target</h2>`).join(''); document.body.appendChild(targets);
        // 前のテストのリンククリックで残ったハッシュがマウント時の選択として扱われないよう初期化する
        history.replaceState(null, '', '#');
        try {
            const entry = '../../app/iso-19770-5-guide/NavBar'; const Nav = (await import(entry)).default; const view = render(<Nav />);
            expect(observed.map(el => el.id)).toEqual(inventory.groups.toc.items.map(a => a.attrs['data-target']));
            for (const target of observed) { act(() => callback!([{ isIntersecting: true, target }] as IntersectionObserverEntry[], {} as IntersectionObserver)); expect(view.container.querySelectorAll('a.active')).toHaveLength(1); expect(view.container.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#'+target.id); }
            view.unmount(); expect(disconnect).toHaveBeenCalledTimes(1);
        } finally { targets.remove(); globalThis.IntersectionObserver = previous; }
    });
});

it('closes the mobile scrim and returns focus without leaving the overlay open', async () => {
    const entry = '../../app/iso-19770-5-guide/NavBar'; const Nav = (await import(entry)).default;
    const view = render(<Nav />); const toggle = view.getByRole('button', { name: '目次を開く' });
    fireEvent.click(toggle); expect(view.container.querySelector('.scrim.show')).not.toBeNull();
    fireEvent.click(view.container.querySelector('.scrim')!); expect(toggle.getAttribute('aria-expanded')).toBe('false'); expect(view.container.querySelector('.scrim.show')).toBeNull(); expect(document.activeElement).toBe(toggle);
});

describe('review fixes', () => {
    const inOrder = (text: string, steps: string[]) => steps.map(s => text.indexOf(s)).every((p, i, a) => p >= 0 && (i === 0 || p > a[i - 1]!));
    it('lists 19770-10:2025 in the existing parts table with published title, Edition 1 and Technical Specification status, and removes it from planned parts', async () => {
        const $ = await html();
        const lastExistingRow = $('#4-1-各パートの役割').next('.table-scroll').find('tbody tr').last().find('td').map((_, td) => norm($(td).text())).get();
        expect(lastExistingRow).toEqual([
            '19770-10:2025',
            'ITAM実装ガイダンス（Guidance for implementing ITAM）',
            '技術仕様書（TS・第1版 / Edition 1）',
            'ITAMを実装するための実践的な指針（Technical Specification）',
        ]);
        const plannedParts = $('#4-3-今後追加が計画されているパート').nextAll('.table-scroll').first().find('tbody tr td:first-child').map((_, td) => norm($(td).text())).get();
        expect(plannedParts).toEqual(['19770-2', '19770-5', '19770-7', '19770-8の次版', '19770-11']);
        const existingParts = $('#4-1-各パートの役割').next('.table-scroll').find('tbody tr td:first-child').map((_, td) => norm($(td).text())).get();
        expect(existingParts).toContain('19770-6:2024');
    });
    it('gives mmd-4 a descriptive accessible name and nearby text explaining every relationship', async () => {
        const $ = await html();
        const mmd4 = $('#mmd-4');
        expect(mmd4.attr('aria-label')).toBe('19770ファミリー各パートの関係図');
        expect(mmd4.attr('aria-describedby')).toBe('mmd-4-desc');
        const desc = mmd4.next('p#mmd-4-desc');
        expect(desc).toHaveLength(1);
        const text = norm(desc.text());
        for (const part of ['19770-5', '19770-1', '19770-2', '19770-3', '19770-4', '19770-8', 'プロセスがデータを活用', '識別情報を整合', '権利情報を整合']) expect(text).toContain(part);
    });
    it('gives mmd-9 a concise accessible name and nearby text describing all five learning-goal routes', async () => {
        const $ = await html();
        const mmd9 = $('#mmd-9');
        expect(mmd9.attr('aria-label')).toBe('学びたい目的から次に読む規格への対応フロー図');
        expect(mmd9.attr('aria-describedby')).toBe('mmd-9-desc');
        const desc = mmd9.next('p#mmd-9-desc');
        expect(desc).toHaveLength(1);
        const text = norm(desc.text());
        expect(inOrder(text, [
            '何を知りたいですか？',
            'まず全体を知りたい',
            '19770-5',
            '運用体制・認証',
            '19770-1',
            'インストール状況',
            '19770-2とNISTIR 8060',
            'ライセンス条件',
            '19770-3',
            '利用量の測定',
            '19770-4',
        ])).toBe(true);
    });
});
