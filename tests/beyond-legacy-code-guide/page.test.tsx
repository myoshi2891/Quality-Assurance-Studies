import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import type { Element as HtmlElement } from 'domhandler';
import postcss from 'postcss';
import type { Window as HappyWindow } from 'happy-dom';
import inventory from '../../docs/migration-inventory/beyond-legacy-code-guide.json';
import { NAV_ITEMS } from '../../lib/navigation';
import { PAGES, EXPECTED_PAGE_COUNT } from '../../e2e/pages';

// Font delivery is verified through markup; unit tests must not fetch external CSS.
const browserSettings = (window as unknown as HappyWindow).happyDOM.settings;
let previousCSSLoading = browserSettings.disableCSSFileLoading;
let previousDisabledLoading = browserSettings.handleDisabledFileLoadingAsSuccess;
beforeEach(() => {
  previousCSSLoading = browserSettings.disableCSSFileLoading;
  previousDisabledLoading = browserSettings.handleDisabledFileLoadingAsSuccess;
  browserSettings.disableCSSFileLoading = true;
  browserSettings.handleDisabledFileLoadingAsSuccess = true;
});
afterEach(() => {
  cleanup();
  browserSettings.disableCSSFileLoading = previousCSSLoading;
  browserSettings.handleDisabledFileLoadingAsSuccess = previousDisabledLoading;
});
const directory = 'app/beyond-legacy-code-guide/';
const norm = (value: string) => value.replace(/\s+/g, '').trim();
function signatures(html: string, selector = '*'): { tag: string; attrs: string[][]; text: string }[] {
  const $ = load(html, null, false);
  $('.mermaid-wrapper').remove();
  return $(selector).toArray().filter((node): node is HtmlElement => 'tagName' in node).map(node => ({
    tag: node.tagName,
    attrs: Object.entries(node.attribs).filter(([key]) => !key.startsWith('aria-') && key !== 'role').sort(([a], [b]) => a.localeCompare(b)),
    text: norm($(node).text()),
  }));
}
async function markup(name: string) {
  const { default: Component } = await import('../../app/beyond-legacy-code-guide/' + name);
  return renderToStaticMarkup(<Component />);
}
for (const group of inventory.groups) describe(group.name, () => {
  it('preserves complete DOM structure and full text in document order', async () => {
    expect(signatures(await markup(group.name))).toEqual(group.structure);
  });
  for (const [selector, items] of Object.entries(group.items)) {
    it('preserves exact ordered inventory for ' + selector, async () => {
      expect(signatures(await markup(group.name), selector)).toEqual(items);
    });
    items.forEach((expected, index) => it('preserves ' + selector + ' #' + (index + 1), async () => {
      expect(signatures(await markup(group.name), selector)[index]).toEqual(expected);
    }));
  }
});

function cssRules() { return postcss.parse(readFileSync(directory + 'beyond-legacy-code-guide.css', 'utf8')); }
function cssValue(selector: string, prop: string, media = '') {
  let value = '';
  cssRules().walkRules(rule => {
    if (rule.selector.split(',').map(s => s.trim()).includes(selector) && (rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : '') === media) {
      rule.walkDecls(prop, decl => { value = decl.value; });
    }
  });
  return value;
}
describe('Styles', () => {
  inventory.css.forEach((expected, index) => it('preserves original CSS rule ' + index + ': ' + expected.selector, () => {
    const selector = expected.selector.split(',').map(s => [':root', 'html', 'body'].includes(s.trim()) ? '.beyond-legacy-page' : '.beyond-legacy-page ' + s.trim()).join(', ');
    const found: unknown[] = [];
    cssRules().walkRules(rule => {
      if (rule.selector === selector && (rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : '') === expected.media) {
        found.push(rule.nodes.filter(n => n.type === 'decl').map(d => { const decl = d as postcss.Declaration; return [decl.prop, decl.value.replace(/\s+/g, ' ').trim(), decl.important || false]; }));
      }
    });
    expect(found).toContainEqual(expected.declarations);
  }));
  it('scopes every selector to the new page', () => {
    cssRules().walkRules(rule => rule.selector.split(',').forEach(selector => expect(selector.trim().startsWith('.beyond-legacy-page')).toBe(true)));
  });
  const resets = [
    ['.hero', 'min-height', '0'], ['.hero', 'display', 'block'], ['.hero', 'overflow', 'visible'],
    ['.hero::after', 'content', 'none'], ['.hero h1', 'font-family', "'Source Serif 4', serif"],
    ['main.main', 'max-width', 'none'], ['main.main', 'margin-left', 'var(--sidebar-w)'],
    ['section + section', 'border-top', 'none'], ['ul', 'list-style-type', 'disc'], ['ol', 'list-style-type', 'decimal'],
    ['.step-list', 'list-style-type', 'none'], ['.nav-list', 'list-style-type', 'none'], ['.nav-sub', 'list-style-type', 'none'],
    ['td', 'color', 'var(--ink)'], ['td', 'line-height', 'inherit'], ['td', 'border-bottom', 'none'],
    ['th', 'font-family', 'inherit'], ['th', 'font-size', '1rem'], ['th', 'letter-spacing', 'normal'],
    ['thead th', 'color', '#fff'], ['thead tr', 'background', 'var(--indigo)'], ['thead tr', 'border-bottom', 'none'],
    ['tbody tr:hover td', 'background', 'transparent'], ['td strong', 'color', 'var(--ink)'],
    ['.callout strong', 'color', 'var(--ink)'], ['.callout', 'line-height', 'inherit'], ['.callout p + p', 'margin-top', '0'],
    ['.sidebar', 'top', 'calc(60px + var(--disclaimer-height, 0px))'],
    ['.sidebar', 'height', 'calc(100dvh - 60px - var(--disclaimer-height, 0px))'],
    ['.mobile-bar', 'top', 'calc(60px + var(--disclaimer-height, 0px))'],
    ['[id]', 'scroll-margin-top', 'calc(120px + var(--disclaimer-height, 0px))'],
    ['.mermaid-wrapper', 'display', 'block'], ['.mermaid-wrapper', 'overflow', 'visible'], ['.mermaid-wrapper', 'background', 'transparent'],
    ['.mermaid-wrapper', 'max-width', 'none'], ['.mermaid-wrapper', 'width', 'max-content'],
    ['.mermaid-wrapper svg', 'max-width', 'none'], ['.mermaid-wrapper', 'flex-shrink', '0'],
    ['.mermaid-wrapper foreignObject', 'overflow', 'visible'], ['.mermaid-wrapper .edgeLabel', 'background-color', '#fffdf7'],
    ['.mermaid-wrapper .edgeLabel span', 'color', '#2b2620'], ['.mermaid-wrapper .edgeLabels rect', 'fill', '#fffdf7'],
    ['*::-webkit-scrollbar-track', 'background', 'transparent'],
  ];
  resets.forEach(([selector, prop, expected]) => it('resets globals: ' + selector + ' / ' + prop, () => {
    expect(cssValue('.beyond-legacy-page ' + selector, prop!)).toBe(expected!);
  }));
  it('keeps mobile main offset at zero', () => expect(cssValue('.beyond-legacy-page main.main', 'margin-left', '(max-width: 900px)')).toBe('0'));
  it('starts the open mobile sidebar below the mobile bar so the toggle stays operable', () => {
    const media = '(max-width: 900px)';
    expect(cssValue('.beyond-legacy-page .mobile-bar', 'height', media)).toBe('var(--mobile-bar-h)');
    expect(cssValue('.beyond-legacy-page .sidebar', 'top', media)).toBe('calc(60px + var(--disclaimer-height, 0px) + var(--mobile-bar-h))');
    expect(cssValue('.beyond-legacy-page .sidebar', 'height', media)).toBe('calc(100dvh - 60px - var(--disclaimer-height, 0px) - var(--mobile-bar-h))');
  });
  // 本文サイズの文字色として使う変数は、文字が乗る紙色背景すべてで WCAG AA（4.5:1）を満たす
  const luminance = (hex: string) => {
    const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(c => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
    return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
  };
  const contrast = (a: string, b: string) => {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi! + 0.05) / (lo! + 0.05);
  };
  (['--ink-faint', '--gold'] as const).forEach(fg => (['--paper', '--paper-alt', '--paper-card'] as const).forEach(bg => it('meets 4.5:1 contrast: ' + fg + ' on ' + bg, () => {
    expect(contrast(cssValue('.beyond-legacy-page', fg), cssValue('.beyond-legacy-page', bg))).toBeGreaterThanOrEqual(4.5);
  })));
});

describe('Diagrams', () => {
  for (const [id, raw] of Object.entries(inventory.charts)) it('preserves source, theme and valid syntax: ' + id, async () => {
    const module = await import('../../app/beyond-legacy-code-guide/diagrams');
    const chart = module.DIAGRAMS[id as keyof typeof module.DIAGRAMS];
    const expected = raw.split('\n').map(line => line.trim()).join('\n').replace(/\{([^"{}]+)\}/g, '{"$1"}');
    expect(chart.replace(/^%%\{init: [\s\S]*?\}%%\n/, '')).toBe(expected);
    const config = JSON.parse(chart.match(/^%%\{init: ([\s\S]*?)\}%%/)![1]!);
    expect(config.theme).toBe('base');
    expect(config.themeVariables).toMatchObject({ primaryColor: '#efe8d8', primaryTextColor: '#2b2620', primaryBorderColor: '#c9bfa4', lineColor: '#8a8271', background: '#fffdf7', mainBkg: '#efe8d8', nodeTextColor: '#2b2620', fontFamily: 'Noto Sans JP, sans-serif', fontSize: '16px' });
    expect(config.flowchart).toMatchObject({ useMaxWidth: false, htmlLabels: true });
    expect(chart.split('}%%')[0]).not.toContain("'");
    const parserPath = 'mermaid/dist/mermaid.esm.mjs';
    const { default: mermaid } = await import(parserPath) as { default: typeof import('mermaid').default };
    expect(await mermaid.parse(chart)).toBeTruthy();
  });
});

describe('NavBar', () => {
  it('preserves all 18 links, numbers and hierarchy', async () => {
    const $ = load(await markup('NavBar'));
    expect(signatures($.html(), 'nav a').map(s => ({ ...s, attrs: s.attrs.filter(([key]) => key !== 'data-target') }))).toEqual(inventory.nav);
    expect($('nav .nav-sub a').map((_, el) => $(el).attr('href')).get()).toEqual(Array.from({ length: 9 }, (_, i) => '#practice-' + (i + 1)));
  });
  it('toggles mobile navigation, closes on selection and Escape, restores focus', async () => {
    const { default: NavBar } = await import('../../app/beyond-legacy-code-guide/NavBar');
    const view = render(<NavBar />);const button = view.getByRole('button');
    expect(button.getAttribute('aria-expanded')).toBe('false');expect(button.getAttribute('aria-controls')).toBe('sidebar');
    fireEvent.click(button);expect(button.getAttribute('aria-expanded')).toBe('true');expect(view.container.querySelector('nav')?.classList.contains('open')).toBe(true);
    fireEvent.click(view.container.querySelector('a[href="#practice-6"]')!);expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(view.container.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#practice-6');
    fireEvent.click(button);fireEvent.keyDown(document, { key: 'Escape' });expect(button.getAttribute('aria-expanded')).toBe('false');expect(document.activeElement).toBe(button);
  });
  it('follows nested target scroll position and cleans up listeners and pending frames', async () => {
    const { default: NavBar } = await import('../../app/beyond-legacy-code-guide/NavBar');
    const originalRAF = window.requestAnimationFrame;const originalCancel = window.cancelAnimationFrame;
    const callbacks: FrameRequestCallback[] = [];const canceled: number[] = [];
    window.requestAnimationFrame = callback => { callbacks.push(callback); return callbacks.length; };
    window.cancelAnimationFrame = id => { canceled.push(id); };
    const host = document.createElement('div');document.body.append(host);
    let current = 0;
    inventory.nav.forEach((link, index) => { const element = document.createElement('div');element.id = link.attrs.find(([key]) => key === 'href')![1]!.slice(1);element.getBoundingClientRect = () => ({ top: index <= current ? 0 : 10000 } as DOMRect);host.append(element); });
    try {
      const view = render(<NavBar />);expect(view.container.querySelector('a.active')?.getAttribute('href')).toBe('#background');
      current = 10;fireEvent.scroll(window);await act(async () => { callbacks.shift()?.(0); });
      expect(view.container.querySelector('a.active')?.getAttribute('href')).toBe('#practice-6');
      current = 13;fireEvent.resize(window);expect(view.container.querySelector('a.active')?.getAttribute('href')).toBe('#practice-9');
      fireEvent.scroll(window);view.unmount();expect(canceled.length).toBe(1);
      const count = callbacks.length;fireEvent.scroll(window);expect(callbacks.length).toBe(count);
    } finally {host.remove();window.requestAnimationFrame = originalRAF;window.cancelAnimationFrame = originalCancel;}
  });
  it('keeps an anchor target active when its scroll-margin-top exceeds 25% of a short viewport', async () => {
    const { default: NavBar } = await import('../../app/beyond-legacy-code-guide/NavBar');
    const originalHeight = window.innerHeight;const originalStyle = window.getComputedStyle;
    const host = document.createElement('div');document.body.append(host);
    // アンカー着地位置 = scroll-margin-top(120px)。高さ400pxでは25%閾値(100px)を上回る
    inventory.nav.forEach((link, index) => { const element = document.createElement('div');element.id = link.attrs.find(([key]) => key === 'href')![1]!.slice(1);element.getBoundingClientRect = () => ({ top: index <= 3 ? 120 : 10000 } as DOMRect);host.append(element); });
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 400 });
    window.getComputedStyle = (element => ({ ...originalStyle(element), scrollMarginTop: '120px' })) as typeof window.getComputedStyle;
    try {
      const view = render(<NavBar />);
      expect(view.container.querySelector('a.active')?.getAttribute('href')).toBe('#overview');
    } finally {host.remove();window.getComputedStyle = originalStyle;Object.defineProperty(window, 'innerHeight', { configurable: true, value: originalHeight });}
  });
  it('makes the closed mobile sidebar inert and reacts to desktop resize', async () => {
    const { default: NavBar } = await import('../../app/beyond-legacy-code-guide/NavBar');
    const original = window.matchMedia;let handler: (() => void) | undefined;let removed = false;
    const query = { matches: true, addEventListener: (_: string, fn: () => void) => { handler = fn; }, removeEventListener: () => { removed = true; } };
    window.matchMedia = (() => query) as unknown as typeof window.matchMedia;
    try {
      const view = render(<NavBar />);const nav = view.container.querySelector('nav')!;
      expect(nav.hasAttribute('inert')).toBe(true);fireEvent.click(view.getByRole('button'));expect(nav.hasAttribute('inert')).toBe(false);
      fireEvent.click(view.getByRole('button'));expect(nav.hasAttribute('inert')).toBe(true);
      query.matches = false;await act(async () => { handler?.(); });expect(nav.hasAttribute('inert')).toBe(false);
      view.unmount();expect(removed).toBe(true);
    } finally {window.matchMedia = original;}
  });
});

describe('Assembly', () => {
  it('preserves all original content and DOM in final order without duplicates', async () => {
    const $ = load(await markup('page'));
    $('.mobile-bar,.mermaid-wrapper').remove();
    expect(signatures($('main.main').html()!)).toEqual(inventory.mainStructure);
    expect($('.beyond-legacy-page')).toHaveLength(1);
    for (const link of $('nav a').toArray()) expect($(decodeURIComponent($(link).attr('href')!))).toHaveLength(1);
    expect(readFileSync(directory + 'page.tsx', 'utf8')).toContain("import './beyond-legacy-code-guide.css'");
  });
  it('wires each of the six charts to its original container', async () => {
    const { default: mermaid } = await import('mermaid');const original = mermaid.render;
    mermaid.render = async (_id, chart) => ({ svg: '<svg data-chart="' + createHash('sha256').update(chart).digest('hex') + '"></svg>', diagramType: 'flowchart' });
    try {
      const { default: Page } = await import('../../app/beyond-legacy-code-guide/page');
      const { DIAGRAMS } = await import('../../app/beyond-legacy-code-guide/diagrams');
      const view = render(<Page />);
      await waitFor(() => expect(view.container.querySelectorAll('.diagram-container svg')).toHaveLength(6));
      for (const [id, chart] of Object.entries(DIAGRAMS)) expect(view.container.querySelector('#' + id + ' svg')?.getAttribute('data-chart')).toBe(createHash('sha256').update(chart).digest('hex'));
    } finally {mermaid.render = original;}
  });
  it('loads the original editorial typeface and correct metadata', async () => {
    const $ = load(await markup('page'));
    expect($('link[rel="stylesheet"][href*="Source+Serif+4"]').length).toBe(1);
    const page = await import('../../app/beyond-legacy-code-guide/page');expect(page.metadata.title).toBe(inventory.title);
  });
});
describe('Registration', () => {
  it('registers the book guide and matching smoke test', () => {
    const item = NAV_ITEMS.find(item => item.href === '/beyond-legacy-code-guide');expect(item?.category).toBe('books-practices');expect(item?.description.length).toBeLessThanOrEqual(80);
    expect(PAGES.find(page => page.path === '/beyond-legacy-code-guide')?.h1.test('レガシーコードからの脱却')).toBe(true);
    expect(EXPECTED_PAGE_COUNT).toBe(NAV_ITEMS.length);
  });
});
describe('Archive', () => {
  for (const [kind, hash] of [['html', inventory.hashHtml], ['md', inventory.hashMd]] as const) it('archives original ' + kind + ' byte for byte', () => {
    const name = 'Beyond-legacy-code-guide.' + kind;
    expect(existsSync(name)).toBe(false);
    expect(createHash('sha256').update(readFileSync('archive/' + kind + '-archive/books/' + name)).digest('hex')).toBe(hash);
  });
});
