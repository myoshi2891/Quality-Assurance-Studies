import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/quality-is-free-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/quality-is-free-guide';
const scope = '.quality-is-free-page';
const pageEntry = '../../app/quality-is-free-guide/page';
const diagramsEntry = '../../app/quality-is-free-guide/diagrams';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
async function page() { return (await import(pageEntry)).default as React.ComponentType; }
async function html() { return load(renderToStaticMarkup(React.createElement(await page()))); }
function tree(node: AnyNode | undefined): unknown {
    if (!node) throw new Error('Missing original element');
    if (node.type === 'text') return norm(node.data) || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs };
    if (node.tagName === 'a' && /^https?:/.test(attrs.href ?? '')) { delete attrs.rel; delete attrs.target; }
    delete attrs['aria-current'];
    if (attrs.class) attrs.class = attrs.class.replace(/\s+active\b/g, '').replace(/\s+open\b/g, '');
    if (attrs.id === 'sidebar') delete attrs['aria-label'];
    if (attrs.id === 'mobileToggle') { for (const key of ['type','aria-controls','aria-expanded']) delete attrs[key]; attrs['aria-label'] = 'メニューを開く'; }
    if (attrs.id === 'checkCount') delete attrs['aria-live'];
    if (node.tagName === 'table') delete attrs['aria-labelledby'];
    if (attrs.class === 'table-title' && attrs.id?.startsWith('qif-')) delete attrs.id;
    return { tag: node.tagName, attrs, children: attrs.id?.startsWith('dg-') ? [] : node.children.map(tree).filter(x => x !== null) };
}
const css = () => postcss.parse(readFileSync(`${base}/quality-is-free-guide.css`, 'utf8'));
const scoped = (selector: string) => selector.split(',').map(s => [':root','html','body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
afterEach(cleanup);
describe('source inventory', () => {
    for (const [category, group] of Object.entries(inventory.groups)) {
        it(`${category}: exact ordered count including excess entries`, async () => { const $ = await html(); expect($(group.selector).length).toBe(group.items.length); });
        group.items.forEach((expected, index) => {
            it(`${category}[${index}]: exact text, attributes, all cells and nested structure`, async () => { const $ = await html(); expect(tree($(group.selector)[index])).toEqual(expected); });
        });
    }
    for (const [id, expected] of Object.entries(inventory.sections)) {
        it(`section ${id}: complete original DOM`, async () => { const $ = await html(); expect(tree($(`#${id}`)[0])).toEqual(expected); });
    }
    it('preserves entire main/sidebar/mobile structure and imports the scoped stylesheet', async () => {
        const $ = await html();
        expect(tree($('main')[0])).toEqual(inventory.main);
        expect(tree($('.sidebar')[0])).toEqual(inventory.sidebar);
        expect(tree($('.mobile-bar')[0])).toEqual(inventory.mobile);
        expect($('pre,script,style')).toHaveLength(0);
        expect(readFileSync(`${base}/page.tsx`, 'utf8')).toContain("import './quality-is-free-guide.css'");
    });
    it('renders the same source main DOM after Next.js/SWC compilation', () => {
        const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType;
        const $ = load(renderToStaticMarkup(<Page />));
        expect(tree($('main')[0])).toEqual(inventory.main);
    });
    it('names every table by its visible title through a unique id', async () => {
        const $ = await html();
        const tables = $('.table-wrap table').toArray();
        expect(tables).toHaveLength(6);
        const ids = tables.map(table => $(table).attr('aria-labelledby'));
        expect(new Set(ids).size).toBe(tables.length);
        tables.forEach((table, i) => {
            const title = $(`#${ids[i]}`);
            expect(title).toHaveLength(1);
            expect(title.hasClass('table-title')).toBe(true);
            expect(title.next()[0]).toBe(table);
        });
    });
    inventory.groups.external.items.forEach((expected, i) => {
        it(`external[${i}]: original URL and safe new-tab attributes`, async () => {
            const $ = await html(); const a = $('a[href^="http"]').eq(i);
            expect(a.attr('href')).toBe(expected.attrs.href); expect(a.attr('target')).toBe('_blank'); expect(a.attr('rel')).toBe('noopener noreferrer');
        });
    });
});
describe('design inventory', () => {
    inventory.css.forEach((original, index) => {
        it(`CSS[${index}] ${original.media ?? 'desktop'} ${original.selector}: every original declaration`, () => {
            const candidates: unknown[] = [];
            css().walkRules(rule => {
                const media = rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : null;
                if (rule.selector === scoped(original.selector) && media === original.media) candidates.push(rule.nodes.filter(n => n.type === 'decl').map(d => { const decl = d as postcss.Declaration; return [decl.prop, decl.value, decl.important ?? null]; }));
            });
            expect(candidates).toContainEqual(original.decls);
        });
    });
    it('scopes every selector, retains responsive breakpoint and compensates shared chrome', () => {
        css().walkRules(rule => rule.selectors.forEach(s => expect(s.startsWith(scope)).toBe(true)));
        expect(css().toString()).toContain('(max-width: 960px)');
        expect(css().toString()).toContain('var(--disclaimer-height, 0px)');
    });
});
describe('diagrams', () => {
    it('exports exactly the eight original IDs in DOM order and an explicit paper theme', async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry);
        expect(Object.keys(DIAGRAMS).sort()).toEqual(Object.keys(inventory.diagrams).sort());
        expect(MERMAID_CONFIG).not.toContain("'");
        const config = JSON.parse(MERMAID_CONFIG.replace(/^%%\{init:\s*/, '').replace(/\}%%$/, ''));
        expect(config.theme).toBe('base'); expect(config.themeVariables.mainBkg).toBe('#fffdf7');
        expect(config.themeVariables.primaryTextColor).toBe('#2a241c'); expect(config.themeVariables.edgeLabelBackground).toBe('#fffdf7');
    });
    for (const [id, source] of Object.entries(inventory.diagrams)) {
        it(`${id}: all original nodes, labels, classDefs, connections and real parser acceptance`, async () => {
            const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry);
            const chart = DIAGRAMS[id] as string;
            expect(chart.slice(MERMAID_CONFIG.length).trim()).toBe(source.split('\n').map(s => s.trim()).join('\n').trim());
            const entry: string = 'mermaid/dist/mermaid.esm.mjs'; const real = (await import(entry)).default;
            expect(await real.parse(chart)).toBeTruthy();
        });
    }
});
async function mounted(run: (result: ReturnType<typeof render>) => void | Promise<void>) {
    const original = mermaid.render; const calls: string[] = [];
    mermaid.render = mock(async (_id: string, chart: string) => { calls.push(chart); return { svg: '<svg viewBox="0 0 200 100"><text>diagram</text></svg>', diagramType: 'flowchart' }; }) as unknown as typeof mermaid.render;
    try { const Page = await page(); const result = render(<Page />); await waitFor(() => expect(result.container.querySelectorAll('.diagram-block svg')).toHaveLength(8)); const { DIAGRAMS } = await import(diagramsEntry); expect(calls).toEqual(inventory.groups.diagrams.items.map(item => DIAGRAMS[item.attrs.id])); await run(result); }
    finally { cleanup(); mermaid.render = original; }
}
describe('interactive behavior', () => {
    it('selects and clears all eleven source checks through their labels, count and done state', async () => {
        await mounted(({ container, getByLabelText }) => {
            const boxes = Array.from(container.querySelectorAll<HTMLInputElement>('#qifChecklist input'));
            expect(boxes).toHaveLength(11);
            const count = container.querySelector('#checkCount')!; expect(count.textContent).toBe('0'); expect(count.getAttribute('aria-live')).toBe('polite');
            boxes.forEach((box, i) => { expect(box.checked).toBe(false); const label = box.nextElementSibling!; expect(getByLabelText(label.textContent!.trim())).toBe(box); fireEvent.click(box); expect(box.checked).toBe(true); expect(box.closest('li')?.classList.contains('done')).toBe(true); expect(count.textContent).toBe(String(i + 1)); });
            [...boxes].reverse().forEach((box, i) => { fireEvent.click(box); expect(box.closest('li')?.classList.contains('done')).toBe(false); expect(count.textContent).toBe(String(10 - i)); });
        });
    });
    it('opens/closes mobile menu, closes every link, scrim and Escape, restores focus', async () => {
        await mounted(({ container, getByRole }) => {
            const toggle = getByRole('button', { name: 'メニューを開く' }); expect(toggle.getAttribute('aria-expanded')).toBe('false'); expect(toggle.getAttribute('aria-controls')).toBe('sidebar');
            fireEvent.click(toggle); expect(container.querySelector('.sidebar.open')).not.toBeNull(); fireEvent.click(toggle); expect(toggle.getAttribute('aria-expanded')).toBe('false');
            for (const a of container.querySelectorAll('.nav-a')) { expect(document.getElementById(a.getAttribute('href')!.slice(1))).not.toBeNull(); fireEvent.click(toggle); fireEvent.click(a); expect(toggle.getAttribute('aria-expanded')).toBe('false'); }
            fireEvent.click(toggle); fireEvent.keyDown(document, { key: 'Escape' }); expect(toggle.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(toggle);
            fireEvent.click(toggle); fireEvent.click(container.querySelector('.sidebar-scrim.open')!); expect(toggle.getAttribute('aria-expanded')).toBe('false');
        });
    });
    it('observes all fifteen sections, switches active location, and disconnects', async () => {
        const original = window.IntersectionObserver; let callback: IntersectionObserverCallback | undefined; const observed: Element[] = []; let disconnected = false;
        window.IntersectionObserver = class { constructor(cb: IntersectionObserverCallback) { callback = cb; } observe(el: Element) { observed.push(el); } disconnect() { disconnected = true; } } as unknown as typeof IntersectionObserver;
        try { await mounted(({ container, unmount }) => { expect(observed.map(el => el.id)).toEqual(inventory.groups.toc.items.map(item => item.attrs.href.slice(1))); for (const target of observed) { act(() => callback?.([{ target, isIntersecting: true }] as IntersectionObserverEntry[], {} as IntersectionObserver)); const active = container.querySelectorAll('.nav-a[aria-current="location"]'); expect(active).toHaveLength(1); expect(active[0]?.getAttribute('href')).toBe('#' + target.id); } unmount(); expect(disconnected).toBe(true); }); }
        finally { window.IntersectionObserver = original; }
    });
});
