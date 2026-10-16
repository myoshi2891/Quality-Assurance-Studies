import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution.json';

const base = 'app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution';
const scope = '.ctal-tae-ch7-page';
const pageEntry = '../../app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/page';
const diagramsEntry = '../../app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/diagrams';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
async function page() { return (await import(pageEntry)).default as React.ComponentType; }
async function html() { return load(renderToStaticMarkup(React.createElement(await page()))); }
// Normalize only the documented interactive/accessibility additions. Code whitespace is exact.
function tree(node: AnyNode | undefined, code = false): unknown {
    if (!node) throw new Error('Missing original inventory element');
    if (node.type === 'text') return code ? node.data : norm(node.data) || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs };
    delete attrs['aria-current'];
    if (attrs.class) attrs.class = attrs.class.replace(/\s+active\b/g, '').replace(/\s+open\b/g, '');
    if (attrs.id === 'sidebar') delete attrs['aria-label'];
    if (attrs.class?.startsWith('language-')) {
        attrs.class = attrs.class.replace(/\s+hljs\b/g, '');
        const text = (n: AnyNode): string => n.type === 'text' ? n.data : isTag(n) ? n.children.map(text).join('') : '';
        return { tag: node.tagName, attrs, children: [node.children.map(text).join('')] };
    }
    if (attrs.class === 'cp-bar') {
        for (const key of ['role', 'aria-valuemin', 'aria-valuemax', 'aria-valuenow', 'aria-label']) delete attrs[key];
    }
    if (attrs.class === 'cp-bar-fill') delete attrs.style;
    if (attrs.class === 'cp-count') delete attrs['aria-live'];
    return { tag: node.tagName, attrs, children: attrs.class === 'mermaid-diagram' ? [] : node.children.map(c => tree(c, code || node.tagName === 'pre')).filter(x => x !== null) };
}
const css = () => postcss.parse(readFileSync(`${base}/ctal-tae-ch7.css`, 'utf8'));
const scoped = (selector: string) => selector.split(',').map(s => [':root', 'html', 'body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
afterEach(cleanup);

describe('original content inventory', () => {
    for (const [category, group] of Object.entries(inventory.groups)) {
        it(`${category}: exact ordered inventory, no missing or extra entries`, async () => {
            const $ = await html();
            expect($(group.selector).length).toBe(group.items.length);
        });
        group.items.forEach((expected, i) => {
            it(`${category}[${i}]: all text, cells, attributes and child structure`, async () => {
                const $ = await html();
                expect(tree($(group.selector)[i])).toEqual(expected);
            });
        });
    }
    for (const [category, items] of Object.entries(inventory.parts)) {
        it(`category ${category}: complete original direct-child sequence`, async () => {
            const $ = await html();
            const ids = items.filter(item => item.tag === 'h2').map(item => (item.attrs as { id: string }).id);
            const children = $('main').children().toArray();
            const begin = children.findIndex(el => el.attribs.id === ids[0]);
            expect(begin).toBeGreaterThanOrEqual(0);
            let end = begin + 1;
            while (end < children.length) {
                const el = children[end];
                if (el?.tagName === 'h2' && !ids.includes(el.attribs.id ?? '')) break;
                end++;
            }
            expect(children.slice(begin, end).map(el => tree(el))).toEqual(items);
        });
    }
    it('preserves entire main/sidebar DOM and imports the scoped stylesheet', async () => {
        const $ = await html();
        expect(tree($('main')[0])).toEqual(inventory.main);
        expect(tree($('.sidebar')[0])).toEqual(inventory.sidebar);
        expect($(`${scope} main`).length).toBe(1);
        expect($('script,style').length).toBe(0);
        expect(readFileSync(`${base}/page.tsx`, 'utf8')).toContain("import './ctal-tae-ch7.css'");
    });
    inventory.code.forEach((code, i) => {
        it(`${code.language}: exact code text including all indentation, blank lines and final newline`, async () => {
            const $ = await html();
            expect($('pre.code-block code').eq(i).attr('class')).toBe(`language-${code.language} hljs`);
            expect($('pre.code-block code').eq(i).text()).toBe(code.text);
        });
    });
});

describe('design contract', () => {
    inventory.css.forEach((original, index) => {
        it(`CSS[${index}] ${original.media ?? 'desktop'} ${original.selector}: complete declaration order`, () => {
            const candidates: unknown[] = [];
            css().walkRules(rule => {
                const media = rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : null;
                if (rule.selector === scoped(original.selector) && media === original.media) {
                    candidates.push(rule.nodes.filter(n => n.type === 'decl').map(n => {
                        const d = n as postcss.Declaration;
                        return [d.prop, d.value, d.important ?? null];
                    }));
                }
            });
            expect(candidates).toContainEqual(original.decls);
        });
    });
    it('scopes every selector including highlights, pseudo-elements and media rules', () => {
        css().walkRules(rule => rule.selectors.forEach(s => expect(s.startsWith(scope)).toBe(true)));
    });
    // Assert final page declarations as well as original copies: copying CSS alone must not pass.
    const overrides = [
        ['.hero', 'min-height', '0'], ['.hero', 'display', 'block'], ['.hero::after', 'content', 'none'],
        ['.main', 'max-width', 'none'], ['td', 'color', 'var(--text)'], ['th', 'font-family', 'inherit'],
        ['th', 'white-space', 'nowrap'], ['.main ul', 'list-style-type', 'disc'], ['.main ol', 'list-style-type', 'decimal'],
        ['.checklist-card ul', 'list-style-type', 'none'], ['.mermaid-wrapper', 'display', 'block'],
        ['.mermaid-wrapper', 'max-width', 'none'], ['.mermaid-wrapper', 'background', 'transparent'],
        ['.mermaid-wrapper svg', 'max-width', 'none'], ['.mermaid-diagram', 'display', 'block'],
        ['.mermaid-wrapper foreignObject', 'overflow', 'visible'],
    ] as const;
    for (const [selector, property, value] of overrides) {
        it(`final cascade protection: ${selector} ${property}`, () => {
            let actual: string | undefined;
            css().walkRules(rule => {
                if (rule.parent?.type !== 'atrule' && rule.selectors.includes(`${scope} ${selector}`)) {
                    rule.walkDecls(property, d => { actual = d.value; });
                }
            });
            expect(actual).toBe(value);
        });
    }
    it('preserves hero decoration and original mobile spacing while compensating app chrome', () => {
        const source = css().toString();
        expect(source).toContain('calc(60px + var(--disclaimer-height, 0px))');
        expect(source).toContain('scroll-margin-top');
        expect(source).toContain('prefers-reduced-motion');
        const mobile: string[] = [];
        css().walkAtRules('media', r => { mobile.push(r.params); });
        expect(mobile).toContain('(max-width: 900px)');
        expect(source).toContain('.hero::before');
        expect(source).toContain('linear-gradient(135deg, #eef3ff 0%, #f7f9fd 60%, #ffffff 100%)');
        expect(mobile).toContain('(max-width: 640px)');
    });
});

describe('Mermaid diagrams', () => {
    it('exports exactly the 11 original IDs in order with a single valid light config', async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry);
        expect(Object.keys(DIAGRAMS)).toEqual(Object.keys(inventory.diagrams));
        expect(MERMAID_CONFIG).not.toContain("'");
        const config = JSON.parse(MERMAID_CONFIG.replace(/^%%\{init:\s*/, '').replace(/\}%%$/, ''));
        expect(config.theme).toBe('base');
        expect(config.flowchart.nodeSpacing).toBe(60);
        expect(config.flowchart.rankSpacing).toBe(60);
        expect(config.themeVariables.edgeLabelBackground).toBe('#ffffff');
        expect(config.themeVariables.actorTextColor).toBe('#1c2536');
    });
    for (const [id, original] of Object.entries(inventory.diagrams)) {
        it(`${id}: exact original labels/connections/classes and real parser acceptance`, async () => {
            const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry);
            const chart = DIAGRAMS[id] as string;
            expect(chart.startsWith(MERMAID_CONFIG)).toBe(true);
            expect(chart.slice(MERMAID_CONFIG.length).trim()).toBe(original.split('\n').map(s => s.trim()).join('\n').trim());
            const entry: string = 'mermaid/dist/mermaid.esm.mjs';
            const real = (await import(entry)).default as { parse: (s: string) => Promise<unknown> };
            expect(await real.parse(chart)).toBeTruthy();
        });
    }
    it('wires every diagram into the shared renderer in DOM order', async () => {
        const Page = await page();
        const { DIAGRAMS } = await import(diagramsEntry);
        const calls: string[] = [];
        const original = mermaid.render;
        mermaid.render = mock(async (_id: string, chart: string) => {
            calls.push(chart);
            return { svg: '<svg viewBox="0 0 200 100"><text>diagram</text></svg>', diagramType: 'flowchart' };
        }) as unknown as typeof mermaid.render;
        try {
            const { container } = render(<Page />);
            await waitFor(() => expect(calls).toEqual(Object.values(DIAGRAMS)));
            await waitFor(() => expect(container.querySelectorAll('.mermaid-container svg')).toHaveLength(11));
        } finally { cleanup(); mermaid.render = original; }
    });
});

describe('interactive behavior', () => {
    it('observes all 40 anchors, switches active state and disconnects on unmount', async () => {
        const original = window.IntersectionObserver;
        let callback: IntersectionObserverCallback | undefined;
        const observed: Element[] = [];
        let disconnected = false;
        window.IntersectionObserver = class {
            constructor(cb: IntersectionObserverCallback) { callback = cb; }
            observe(el: Element) { observed.push(el); }
            disconnect() { disconnected = true; }
        } as unknown as typeof IntersectionObserver;
        try {
            const Page = await page();
            const { container, unmount } = render(<Page />);
            await waitFor(() => expect(container.querySelectorAll('.mermaid-container svg')).toHaveLength(11));
            const ids = inventory.groups.toc.items.map(item => (item.attrs as { 'data-target': string })['data-target']);
            expect(observed.map(el => el.id)).toEqual(ids);
            const target = observed[10];
            if (!target || !callback) throw new Error('Observer did not initialize');
            act(() => callback?.([{ target, isIntersecting: true }] as IntersectionObserverEntry[], {} as IntersectionObserver));
            expect(container.querySelector('.sidebar-nav a.active')?.getAttribute('data-target')).toBe(target.id);
            expect(container.querySelectorAll('.sidebar-nav a[aria-current="location"]')).toHaveLength(1);
            unmount(); expect(disconnected).toBe(true);
        } finally { cleanup(); window.IntersectionObserver = original; }
    });
    it('opens/closes mobile TOC, closes on link selection and exposes accessible state', async () => {
        const Page = await page();
        const { container, getByRole } = render(<Page />);
        await waitFor(() => expect(container.querySelectorAll('.mermaid-container svg')).toHaveLength(11));
        const toggle = getByRole('button', { name: 'メニュー' });
        expect(toggle.getAttribute('aria-controls')).toBe('sidebar');
        expect(toggle.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(toggle);
        expect(toggle.getAttribute('aria-expanded')).toBe('true');
        expect(container.querySelector('.sidebar.open')).not.toBeNull();
        fireEvent.click(toggle);
        expect(toggle.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(toggle);
        fireEvent.click(container.querySelector('.sidebar-nav a')!);
        expect(toggle.getAttribute('aria-expanded')).toBe('false');
        expect(container.querySelector('.sidebar.open')).toBeNull();
        fireEvent.click(toggle);
        fireEvent.click(container.querySelector('.sidebar-scrim.open')!);
        expect(toggle.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(toggle);
        fireEvent.keyDown(document, { key: 'Escape' });
        expect(toggle.getAttribute('aria-expanded')).toBe('false');
    });
    it('updates exact checklist progress for all 6 checks and reversals', async () => {
        const Page = await page();
        const { container, getAllByRole, getByRole } = render(<Page />);
        await waitFor(() => expect(container.querySelectorAll('.mermaid-container svg')).toHaveLength(11));
        const boxes = getAllByRole('checkbox') as HTMLInputElement[];
        expect(boxes).toHaveLength(6);
        const progress = getByRole('progressbar', { name: '学習の進捗' });
        const verify = (count: number) => {
            expect(container.querySelector('.cp-count')?.textContent).toBe(`${count} / 6 完了`);
            expect(progress.getAttribute('aria-valuenow')).toBe(String(count));
            expect(progress.getAttribute('aria-valuemax')).toBe('6');
            expect(parseFloat((container.querySelector('.cp-bar-fill') as HTMLElement).style.width)).toBeCloseTo(count / 6 * 100, 6);
        };
        verify(0);
        boxes.forEach((box, i) => {
            expect(box.closest('label')?.textContent?.trim()).toBeTruthy();
            expect(box.checked).toBe(false);
            fireEvent.click(box); expect(box.checked).toBe(true); verify(i + 1);
        });
        [...boxes].reverse().forEach((box, i) => { fireEvent.click(box); expect(box.checked).toBe(false); verify(5 - i); });
    });
    it('keeps all six independent native answer disclosures initially closed', async () => {
        const $ = await html();
        expect($('details')).toHaveLength(6);
        $('details').each((_, el) => {
            expect($(el).attr('open')).toBeUndefined();
            expect($(el).children('summary').text()).toBe('解答と解説');
            expect($(el).children('p').text().trim().length).toBeGreaterThan(0);
        });
    });
});

// Highlighting is frozen against the original 11.10.0 engine, not re-derived from implementation.
function highlightTokens(nodes: AnyNode[], classes: string[] = [], result: { text: string; classes: string[] }[] = []) {
    for (const node of nodes) {
        if (node.type === 'text' && node.data) {
            const last = result.at(-1);
            if (last && JSON.stringify(last.classes) === JSON.stringify(classes)) last.text += node.data;
            else result.push({ text: node.data, classes });
        } else if (isTag(node)) {
            const own = (node.attribs.class ?? '').split(/\s+/).filter(c => c && c !== 'code-line');
            highlightTokens(node.children, [...classes, ...own], result);
        }
    }
    return result;
}
describe('original syntax highlighting', () => {
    inventory.code.forEach((code, i) => {
        it(`highlight[${i}] ${code.language}: complete tokens and lossless line wrappers`, async () => {
            const $ = await html();
            const el = $('pre.code-block code')[i];
            if (!el) throw new Error('Missing highlighted code');
            expect(highlightTokens(el.children)).toEqual(code.tokens);
            const lines = $(el).children('.code-line');
            const expected = code.text.match(/[^\n]*\n|[^\n]+$/g) ?? [];
            expect(lines.map((_, line) => $(line).text()).get()).toEqual(expected);
        });
    });
    inventory.highlight.css.forEach((original, index) => {
        it(`Atom One Light CSS[${index}] preserves all original declarations`, () => {
            const candidates: unknown[] = [];
            const root = postcss.parse(readFileSync(`${base}/highlight.css`, 'utf8'));
            root.walkRules(rule => {
                if (rule.selector === scoped(original.selector)) candidates.push(rule.nodes.filter(n => n.type === 'decl').map(n => {
                    const d = n as postcss.Declaration;
                    return [d.prop, d.value, d.important ?? null];
                }));
                rule.selectors.forEach(selector => expect(selector.startsWith(scope)).toBe(true));
            });
            expect(candidates).toContainEqual(original.decls);
        });
    });
    it('keeps the theme license and imports scoped static highlighting without CDN scripts', async () => {
        expect(readFileSync(`${base}/highlight-LICENSE.txt`, 'utf8')).toBe(inventory.highlight.license);
        expect(readFileSync(`${base}/page.tsx`, 'utf8')).toContain("import './highlight.css'");
        const $ = await html();
        expect($('script,link[rel=stylesheet]')).toHaveLength(0);
    });
});
