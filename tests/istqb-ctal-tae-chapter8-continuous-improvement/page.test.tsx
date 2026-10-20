import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import mermaid from 'mermaid';
import { createRequire } from 'node:module';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter8-continuous-improvement.json';

const base = 'app/istqb-ctal-tae-chapter8-continuous-improvement';
const scope = '.ctal-tae-ch8-page';
const pageEntry = '../../app/istqb-ctal-tae-chapter8-continuous-improvement/page';
const diagramsEntry = '../../app/istqb-ctal-tae-chapter8-continuous-improvement/diagrams';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
async function page() { return (await import(pageEntry)).default as React.ComponentType; }
async function html() { return load(renderToStaticMarkup(React.createElement(await page()))); }
// Normalize only the documented interactive/accessibility additions. Code whitespace is exact.
function tree(node: AnyNode | undefined, code = false): unknown {
    if (!node) throw new Error('Missing original inventory element');
    if (node.type === 'text') return code ? node.data : norm(node.data) || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs };
    // Dedicated reference tests assert these migration-required attributes.
    if (node.tagName === 'a' && /^https?:/.test(attrs.href ?? '')) { delete attrs.target; delete attrs.rel; }
    delete attrs['aria-current'];
    if (attrs.class) attrs.class = attrs.class.replace(/\s+active\b/g, '').replace(/\s+open\b/g, '');
    if (attrs.id === 'sidebar') delete attrs['aria-label'];
    if (attrs.id === 'sidebarToggle') { delete attrs['aria-controls']; delete attrs['aria-expanded']; attrs['aria-label'] = '目次を開く'; }
    if (attrs['aria-current']) delete attrs['aria-current'];
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
const css = () => postcss.parse(readFileSync(`${base}/ctal-tae-ch8.css`, 'utf8'));
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
        expect(tree($('.page-footer')[0])).toEqual(inventory.footer);
        expect($(`${scope} main`).length).toBe(1);
        expect($('script,style').length).toBe(0);
        expect(readFileSync(`${base}/page.tsx`, 'utf8')).toContain("import './ctal-tae-ch8.css'");
    });
    inventory.code.forEach((code, i) => {
        it(`${code.language}: exact code text including all indentation, blank lines and final newline`, async () => {
            const $ = await html();
            expect($('.code-block pre code').eq(i).attr('class')).toBe(`language-${code.language} hljs`);
            expect($('.code-block pre code').eq(i).text()).toBe(code.text);
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
        ['.hero', 'min-height', '0'], ['.hero', 'display', 'block'],
        ['.hero-eyebrow', 'animation', 'none'], ['.hero-eyebrow', 'font-family', 'inherit'],
        ['.main', 'max-width', 'none'], ['.main', 'margin-left', 'var(--sidebar-width)'],
        ['tbody td', 'color', 'var(--text-dim)'], ['tbody td', 'font-size', '14.5px'],
        ['tbody td strong', 'color', 'var(--text)'], ['thead th', 'color', 'var(--accent-strong)'],
        ['thead th', 'background', 'var(--bg-elevated)'], ['.main ul', 'list-style-type', 'disc'],
        ['.main ol', 'list-style-type', 'decimal'], ['.code-block code', 'white-space', 'pre'],
        ['.code-line', 'display', 'inline'], ['.mermaid-diagram', 'display', 'block'],
        ['.mermaid-wrapper', 'max-width', 'none'], ['.mermaid-wrapper', 'background', 'transparent'],
        ['.mermaid-wrapper svg', 'max-width', 'none'], ['.mermaid-wrapper foreignObject', 'overflow', 'visible'],
        ['.mermaid-wrapper', 'display', 'block'], ['.mermaid-wrapper', 'overflow', 'visible'],
        ['.page-footer', 'text-align', 'left'], ['.page-footer', 'font-family', 'inherit'], ['.page-footer', 'margin-top', '0'],
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
        expect(source).toContain('linear-gradient(155deg, #eef3ff 0%, #ffffff 100%)');

    });
});

describe('Mermaid diagrams', () => {
    it('exports exactly the 16 original IDs in order with a single valid light config', async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry);
        expect(Object.keys(DIAGRAMS)).toEqual(Object.keys(inventory.diagrams));
        expect(MERMAID_CONFIG).not.toContain("'");
        const config = JSON.parse(MERMAID_CONFIG.replace(/^%%\{init:\s*/, '').replace(/\}%%$/, ''));
        expect(config.theme).toBe('base');
        expect(config.themeVariables.mainBkg).toBe('#eef3ff');
        expect(config.themeVariables.titleColor).toBe('#1b2537');
        expect(config.xyChart).toEqual({ useMaxWidth: false, width: 800, height: 450, titleFontSize: 22, xAxis: { labelFontSize: 16, titleFontSize: 18 }, yAxis: { labelFontSize: 16, titleFontSize: 18 } });
        expect(config.flowchart.nodeSpacing).toBe(60);
        expect(config.flowchart.rankSpacing).toBe(65);
        expect(config.themeVariables.edgeLabelBackground).toBe('#ffffff');
        expect(config.themeVariables.actorTextColor).toBe('#1b2537');
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
            await waitFor(() => expect(container.querySelectorAll('.mermaid-container svg')).toHaveLength(16));
        } finally { cleanup(); mermaid.render = original; }
    });
});


async function withMountedPage(run: (result: ReturnType<typeof render>) => Promise<void> | void) {
    const original = mermaid.render;
    mermaid.render = mock(async () => ({ svg: '<svg viewBox="0 0 200 100"><text>diagram</text></svg>', diagramType: 'flowchart' })) as unknown as typeof mermaid.render;
    try { const Page = await page(); const result = render(<Page />); await waitFor(() => expect(result.container.querySelectorAll('.mermaid-container svg')).toHaveLength(16)); await run(result); }
    finally { cleanup(); mermaid.render = original; }
}
describe('interactive TOC', () => {
    it('opens, closes, closes on every link, Escape and scrim with accessible state', async () => {
        await withMountedPage(({ container, getByRole }) => {
            const toggle = getByRole('button', { name: '目次を開く' });
            expect(toggle.getAttribute('aria-controls')).toBe('sidebar');
            expect(toggle.getAttribute('aria-expanded')).toBe('false');
            fireEvent.click(toggle); expect(toggle.getAttribute('aria-expanded')).toBe('true');
            expect(container.querySelector('.sidebar.open')).not.toBeNull();
            fireEvent.click(toggle); expect(toggle.getAttribute('aria-expanded')).toBe('false');
            for (const link of container.querySelectorAll('.nav-list a')) {
                const target = link.getAttribute('href')!.slice(1);
                expect(container.querySelectorAll('[id]').length).toBeGreaterThan(0);
                expect(document.getElementById(target)).not.toBeNull();
                fireEvent.click(toggle); fireEvent.click(link);
                expect(toggle.getAttribute('aria-expanded')).toBe('false');
                expect(container.querySelector('.sidebar.open')).toBeNull();
            }
            fireEvent.click(toggle); fireEvent.keyDown(document, { key: 'Escape' });
            expect(toggle.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(toggle);
            fireEvent.click(toggle); fireEvent.click(container.querySelector('.sidebar-scrim.open')!);
            expect(toggle.getAttribute('aria-expanded')).toBe('false');
        });
    });
    it('observes exactly all 70 targets, updates active link, and disconnects on unmount', async () => {
        const original = window.IntersectionObserver;
        let callback: IntersectionObserverCallback | undefined; const observed: Element[] = []; let disconnected = false;
        window.IntersectionObserver = class { constructor(cb: IntersectionObserverCallback) { callback = cb; } observe(el: Element) { observed.push(el); } disconnect() { disconnected = true; } } as unknown as typeof IntersectionObserver;
        try {
            await withMountedPage(({ container, unmount }) => {
                const ids = inventory.groups.toc.items.map(item => item.attrs.href.slice(1));
                expect(observed.map(el => el.id)).toEqual(ids);
                for (const target of observed) {
                    act(() => callback?.([{ target, isIntersecting: true }] as IntersectionObserverEntry[], {} as IntersectionObserver));
                    const current = container.querySelectorAll('.nav-list a[aria-current="location"]');
                    expect(current).toHaveLength(1); expect(current[0]?.getAttribute('href')).toBe('#' + target.id);
                    expect(current[0]?.classList.contains('active')).toBe(true);
                }
                unmount(); expect(disconnected).toBe(true);
            });
        } finally { window.IntersectionObserver = original; }
    });
    it('retains the six questions with visible original answers and no invented checklists', async () => {
        const $ = await html(); expect($('.qa-card')).toHaveLength(6); expect($('.qa-card .callout-answer')).toHaveLength(6);
        expect($('details,input')).toHaveLength(0);
        const ids = $('[id]').map((_, el) => el.attribs.id).get(); expect(new Set(ids).size).toBe(ids.length);
    });
});

// Highlighting is frozen against the original 11.9.0 engine, not re-derived from implementation.
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
            const el = $('.code-block pre code')[i];
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

describe('standalone static code examples', () => {
    inventory.code.forEach((code, index) => {
        it(`CodeExample[${index}] renders the original highlighted text before page assembly`, async () => {
            const entry = '../../app/istqb-ctal-tae-chapter8-continuous-improvement/CodeExample';
            const CodeExample = (await import(entry)).default as React.ComponentType<{ index: number }>;
            const $ = load(renderToStaticMarkup(<CodeExample index={index} />));
            const el = $('pre code')[0];
            if (!el) throw new Error('Code example is missing');
            expect($(el).text()).toBe(code.text);
            expect(highlightTokens(el.children)).toEqual(code.tokens);
        });
    });
});

describe('external reference safety', () => {
    inventory.groups.references.items.forEach((reference, index) => {
        it(`reference[${index}]: opens the original URL with noopener noreferrer`, async () => {
            const $ = await html();
            const link = $('main a[href^="http"]').eq(index);
            expect(link.attr('href')).toBe(reference.attrs.href);
            expect(link.attr('target')).toBe('_blank');
            expect(link.attr('rel')).toBe('noopener noreferrer');
        });
    });
});

describe('code display cascade regression', () => {
    for (const [selector, property, value] of [
        ['.code-block pre code.hljs', 'padding', '0'],
        ['.code-block pre code.hljs', 'overflow', 'visible'],
        ['.code-block pre code.hljs', 'width', 'max-content'],
        ['.code-block pre code.hljs', 'min-width', '100%'],
        ['.code-block pre', 'white-space', 'pre'],
        ['.code-block pre', 'overflow-x', 'auto'],
        ['.code-block', 'overflow-x', 'hidden'],
    ] as const) {
        it(`${selector}: ${property} prevents nested scroll/spacing after navigation`, () => {
            let actual: string | undefined;
            css().walkRules(rule => {
                if (rule.parent?.type !== 'atrule' && rule.selectors.includes(`${scope} ${selector}`)) {
                    rule.walkDecls(property, declaration => { actual = declaration.value; });
                }
            });
            expect(actual).toBe(value);
        });
    }
});

// Next.js/SWC removes a numeric LF entity at the end of JSX text. Bun and
// TypeScript's JSX transform retain it, so they alone cannot verify this output.
describe('Next.js compiled code preserves line endings and indentation', () => {
    const requireSource = createRequire(`${process.cwd()}/package.json`);
    for (const [chapter, slug] of [
        [7, 'istqb-ctal-tae-chapter7-verifying-the-test-automation-solution'],
        [8, 'istqb-ctal-tae-chapter8-continuous-improvement'],
    ] as const) {
        const original = JSON.parse(readFileSync(`docs/migration-inventory/${slug}.json`, 'utf8')) as { code: { text: string }[] };
        for (const development of [true, false]) {
            original.code.forEach((code, index) => {
                it(`chapter ${chapter} example ${index + 1}: exact text and every line (development=${development})`, () => {
                    const filename = `app/${slug}/CodeExample.tsx`;
                    const output = transformSync(readFileSync(filename, 'utf8'), {
                        filename,
                        jsc: { parser: { syntax: 'typescript', tsx: true }, transform: { react: { runtime: 'classic', development } } },
                        module: { type: 'commonjs' },
                    });
                    const exported: { default?: React.ComponentType<{ index: number }> } = {};
                    Function('exports', 'require', output.code)(exported, requireSource);
                    const CodeExample = exported.default!;
                    const $ = load(renderToStaticMarkup(<CodeExample index={index} />));
                    expect($('pre code').text()).toBe(code.text);
                    expect($('.code-line').map((_, line) => $(line).text()).get()).toEqual(code.text.match(/[^\n]*\n|[^\n]+$/g) ?? []);
                });
            });
        }
    }
});
