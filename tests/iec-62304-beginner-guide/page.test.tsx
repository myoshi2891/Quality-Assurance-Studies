import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/iec-62304-beginner-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/iec-62304-beginner-guide';
const scope = '.iec-62304-page';
const pageEntry = '../../app/iec-62304-beginner-guide/page';
const diagramsEntry = '../../app/iec-62304-beginner-guide/diagrams';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
async function page() { return (await import(pageEntry)).default as React.ComponentType; }
async function html() { return load(renderToStaticMarkup(React.createElement(await page()))); }
function tree(node: AnyNode | undefined): unknown {
    if (!node) throw new Error('Missing source element');
    if (node.type === 'text') return norm(node.data) || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs };
    delete attrs['aria-current'];
    if (attrs.style) attrs.style = attrs.style.replace(/:\s*/g, ': ');
    if (attrs.class) attrs.class = attrs.class.replace(/\s+active\b/g, '').replace(/\s+open\b/g, '');
    return { tag: node.tagName, attrs, children: attrs.class === 'mermaid-diagram' ? [] : node.children.map(tree).filter(x => x !== null) };
}
const css = () => postcss.parse(readFileSync(`${base}/iec-62304-beginner-guide.css`, 'utf8'));
const scoped = (selector: string) => selector.split(',').map(s => [':root','html','body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
afterEach(cleanup);
describe('exact original content inventory', () => {
    for (const [category, group] of Object.entries(inventory.groups)) {
        it(`${category}: exact ordered count detects missing and extra elements`, async () => { const $ = await html(); expect($(group.selector).length).toBe(group.items.length); });
        group.items.forEach((expected, index) => {
            it(`${category}[${index}]: all text, attributes, rows, cells and nested elements`, async () => { const $ = await html(); expect(tree($(group.selector)[index])).toEqual(expected); });
        });
    }
    it('preserves complete main DOM, hero, introductory warning and footer', async () => {
        const $ = await html(); expect(tree($('main')[0])).toEqual(inventory.main);
        expect(tree($('.sidebar')[0])).toEqual(inventory.sidebar);
        expect($('main script, main style, pre')).toHaveLength(0);
        expect(readFileSync(`${base}/page.tsx`, 'utf8')).toContain("import './iec-62304-beginner-guide.css'");
    });
    for (const development of [false, true]) {
        it(`Next.js/SWC development=${development}: complete source DOM survives compilation`, () => {
            const Page = sourceModule(`${base}/page.tsx`, { development }).default as React.ComponentType;
            const $ = load(renderToStaticMarkup(<Page />)); expect(tree($('main')[0])).toEqual(inventory.main);
        });
    }
    inventory.groups.references.items.forEach((expected, i) => {
        it(`reference ${i}: original URL, target and rel`, async () => {
            const $ = await html(); const a = $('main a[href^="http"]').eq(i);
            expect(a.attr('href')).toBe(expected.attrs.href); expect(a.attr('target')).toBe('_blank'); expect(a.attr('rel')).toBe('noopener noreferrer');
        });
    });
    it('all fifty anchors resolve exactly once without duplicate IDs', async () => {
        const $ = await html(); const ids = $('[id]').toArray().map(e => $(e).attr('id'));
        expect(new Set(ids).size).toBe(ids.length);
        $('.sidebar a').each((_, a) => expect($($(a).attr('href')!)).toHaveLength(1));
    });
});
describe('complete original design inventory', () => {
    inventory.css.forEach((original, index) => {
        it(`CSS[${index}] ${original.media ?? 'desktop'} ${original.selector}: preserves every declaration`, () => {
            const candidates: unknown[] = [];
            css().walkRules(rule => {
                const media = rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : null;
                if (rule.selector === scoped(original.selector) && media === original.media) candidates.push(rule.nodes.filter(n => n.type === 'decl').map(d => { const decl = d as postcss.Declaration; return [decl.prop, decl.value, decl.important ?? null]; }));
            });
            expect(candidates).toContainEqual(original.decls);
        });
    });
    it('scopes all selectors and compensates shared header/disclaimer without changing global components', () => {
        css().walkRules(rule => rule.selectors.forEach(s => expect(s.startsWith(scope)).toBe(true)));
        expect(css().toString()).toContain('(max-width: 960px)');
        expect(css().toString()).toContain('var(--disclaimer-height, 0px)');
        expect(css().toString()).toContain('foreignObject');
    });
});
describe('all eighteen source SVG diagrams', () => {
    it('registers exactly the source diagram IDs and uses the original dark palette', async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry);
        expect(Object.keys(DIAGRAMS)).toEqual(Object.keys(inventory.diagrams)); expect(MERMAID_CONFIG).not.toContain("'");
        const config = JSON.parse(MERMAID_CONFIG.replace(/^%%\{init:\s*/, '').replace(/\}%%$/, ''));
        expect(config.themeVariables.mainBkg).toBe('#13253f');
        expect(config.themeVariables.primaryTextColor).toBe('#e6edf7');
        expect(config.themeVariables.edgeLabelBackground).toBe('#0b1a2d');
    });
    for (const [id, source] of Object.entries(inventory.diagrams)) {
        it(`${id}: every node, decision shape, edge, edge label and cluster; real Mermaid parser`, async () => {
            const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry); const chart = DIAGRAMS[id] as string;
            expect(chart.slice(MERMAID_CONFIG.length).trim()).toBe(source.chart);
            const entry: string = 'mermaid/dist/mermaid.esm.mjs'; const real = (await import(entry)).default;
            expect(await real.parse(chart)).toEqual({ diagramType: 'flowchart-v2', config: expect.anything() });
        });
    }
    it('wires the shared Mermaid renderer to all source diagram definitions in order', async () => {
        const original = mermaid.render; const calls: string[] = [];
        mermaid.render = mock(async (_id: string, chart: string) => { calls.push(chart); return { svg: '<svg viewBox="0 0 200 100"><text>diagram</text></svg>', diagramType: 'flowchart' }; }) as unknown as typeof mermaid.render;
        try {
            const Page = await page(); const result = render(<Page />);
            await waitFor(() => expect(result.container.querySelectorAll('.mermaid-diagram svg')).toHaveLength(18));
            const { DIAGRAMS } = await import(diagramsEntry); expect(calls).toEqual(Object.keys(inventory.diagrams).map(id => DIAGRAMS[id]));
        } finally { cleanup(); mermaid.render = original; }
    });
});
describe('hierarchical TOC behavior', () => {
    it('opens, closes by link and Escape, updates aria-expanded and restores focus', async () => {
        const NavBar = (await import('../../app/iec-62304-beginner-guide/NavBar')).default;
        const result = render(<NavBar />); const button = result.getByRole('button', { name: '目次を開く' });
        expect(button.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(button); expect(button.getAttribute('aria-expanded')).toBe('true'); expect(result.container.querySelector('.sidebar.open')).not.toBeNull();
        fireEvent.click(result.container.querySelector('a')!); expect(button.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(button); fireEvent.keyDown(document, { key: 'Escape' }); expect(button.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(button);
    });
    it('observes every original anchor, expands the active parent, scrolls the sidebar and disconnects', async () => {
        const NavBar = (await import('../../app/iec-62304-beginner-guide/NavBar')).default;
        const previous = globalThis.IntersectionObserver;
        let callback: IntersectionObserverCallback | undefined; const observed: Element[] = []; const disconnect = mock(() => {});
        globalThis.IntersectionObserver = class { constructor(cb: IntersectionObserverCallback) { callback = cb; } observe(el: Element) { observed.push(el); } disconnect = disconnect; } as unknown as typeof IntersectionObserver;
        const targets = document.createElement('div'); targets.innerHTML = inventory.groups.toc.items.map(a => `<h2 id="${a.attrs['data-target']}">target</h2>`).join(''); document.body.appendChild(targets);
        try {
            const result = render(<NavBar />); expect(observed.map(e => e.id)).toEqual(inventory.groups.toc.items.map(a => a.attrs['data-target']));
            const sidebar = result.container.querySelector('.sidebar')!;
            const link = result.container.querySelector('a[href="#sec-3"]')!;
            link.getBoundingClientRect = () => ({ top: 500, bottom: 530 }) as DOMRect;
            sidebar.getBoundingClientRect = () => ({ top: 0, bottom: 300, height: 300 }) as DOMRect;
            act(() => callback!([{ isIntersecting: true, target: document.getElementById('sec-3')! }] as IntersectionObserverEntry[], {} as IntersectionObserver));
            expect(link.getAttribute('aria-current')).toBe('location'); expect(link.closest('.nav-h2')?.classList.contains('open')).toBe(true); expect(sidebar.scrollTop).toBe(400);
            act(() => callback!([{ isIntersecting: true, target: document.getElementById('sec-1')! }] as IntersectionObserverEntry[], {} as IntersectionObserver));
            expect(link.getAttribute('aria-current')).toBeNull(); expect(link.closest('.nav-h2')?.classList.contains('open')).toBe(false);
            result.unmount(); expect(disconnect).toHaveBeenCalledTimes(1);
        } finally { targets.remove(); globalThis.IntersectionObserver = previous; }
    });
});
