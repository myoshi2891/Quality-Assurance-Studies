import { afterEach, beforeEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import postcss from 'postcss';
import { isTag, type AnyNode } from 'domhandler';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter5-implementation-deployment-strategies.json';
import Page from '../../app/istqb-ctal-tae-chapter5-implementation-deployment-strategies/page';
import { DIAGRAMS, MERMAID_CONFIG } from '../../app/istqb-ctal-tae-chapter5-implementation-deployment-strategies/diagrams';

const slug = 'istqb-ctal-tae-chapter5-implementation-deployment-strategies';
const base = `app/${slug}`;
const scope = '.ctal-tae-ch5-page';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
// Compare every tag, attribute and text node, excluding only Mermaid's generated SVG
// and navigation's active state. Whitespace-only formatting nodes are immaterial.
function tree(el: AnyNode | undefined): unknown {
  if (!el) return null;
  if (el.type === 'text') return norm(el.data) || null;
  if (!isTag(el)) return null;
  const attrs = { ...el.attribs };
  delete attrs['aria-current'];
  if (attrs.class) attrs.class = attrs.class.replace(/\s+active\b/g, '');
  return { tag: el.tagName, attrs, children: attrs['data-diagram'] ? [] : el.children.map(tree).filter(Boolean) };
}
const html = () => load(renderToStaticMarkup(<Page />));
const css = () => postcss.parse(readFileSync(`${base}/ctal-tae-ch5.css`, 'utf8'));
const scoped = (selector: string) => selector.split(',').map(s => {
  s = s.trim();
  return [':root', 'body', 'html'].includes(s) ? scope : `${scope} ${s}`;
}).join(', ');
afterEach(cleanup);

describe('original content and DOM inventory', () => {
  for (const [category, group] of Object.entries(inventory.groups)) {
    it(`${category}: exact ordered count, no omissions or extras`, () => {
      const $ = html();
      expect($(group.selector).length).toBe(group.items.length);
    });
    group.items.forEach((item, index) => {
      it(`${category}[${index}]: complete text, attributes and nested structure`, () => {
        const $ = html();
        expect(tree($(group.selector)[index])).toEqual(item);
      });
    });
  }
  it('preserves the entire main and sidebar trees including all prose and inline emphasis', () => {
    const $ = html();
    expect(tree($('main')[0])).toEqual(inventory.main);
    expect(tree($('aside')[0])).toEqual(inventory.sidebar);
    expect($(`${scope} main`).length).toBe(1);
    expect($('script,style').length).toBe(0);
  });
  it('imports scoped CSS and self-hosts original font and icon resources', () => {
    expect(readFileSync(`${base}/page.tsx`, 'utf8')).toContain("import './ctal-tae-ch5.css'");
    const content = readFileSync(`${base}/ctal-tae-ch5.css`, 'utf8');
    // フォントは共有レイアウトから Fontsource で自前配信し、Google Fonts へは通信しない
    expect(inventory.stylesheets.some(url => url.includes('fonts.googleapis.com'))).toBe(false);
    expect(content).not.toContain('fonts.googleapis.com');
    expect(content).not.toMatch(/@import[^;]*@tabler/);
    const layout = readFileSync('app/layout.tsx', 'utf8');
    for (const weight of [600, 700]) expect(layout).toContain(`import '@fontsource/source-serif-4/${weight}.css';`);
    for (const weight of [400, 500, 600, 700]) expect(layout).toContain(`import '@fontsource/noto-sans-jp/${weight}.css';`);
    expect(content).toContain("--font-serif: 'Source Serif 4', serif;");
    expect(readFileSync('app/layout.tsx', 'utf8')).toMatch(/@tabler\/icons-webfont@[\d.]+\/dist\/tabler-icons.min.css/);
  });
  it('preserves every reference link with secure external attributes', () => {
    const $ = html();
    $('a[target="_blank"]').each((_, el) => expect($(el).attr('rel')).toBe('noopener noreferrer'));
  });
});

describe('design fidelity: every original CSS rule', () => {
  inventory.css.forEach((original, index) => {
    it(`CSS[${index}] ${original.media ?? 'desktop'} ${original.selector}: all declarations in order`, () => {
      const matches: unknown[] = [];
      css().walkRules(rule => {
        const media = rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : null;
        if (rule.selector === scoped(original.selector) && media === original.media) {
          matches.push(rule.nodes.filter(n => n.type === 'decl').map(n => {
            const d = n as postcss.Declaration;
            return [d.prop, d.value, d.important ?? null];
          }));
        }
      });
      expect(matches).toContainEqual(original.decls);
    });
  });
  it('scopes every rule to the page including media rules', () => {
    css().walkRules(rule => rule.selectors.forEach(s => expect(s.trim().startsWith(scope)).toBe(true)));
  });
  it('protects layout and typography from global CSS and compensates app chrome', () => {
    const content = css().toString();
    expect(content).toContain('calc(60px + var(--disclaimer-height, 0px))');
    for (const selector of ['.hero', 'section', '.main-content', 'td', 'th', 'strong', 'ul', '.mermaid-wrapper', '.mermaid-wrapper svg', '.mermaid-wrapper foreignObject']) {
      let found = false;
      css().walkRules(rule => {
        if (rule.selectors.includes(`${scope} ${selector}`) && rule.nodes.some(n => n.type === 'decl' && n.important)) found = true;
      });
      expect(found).toBe(true);
    }
    expect(content).toContain('prefers-reduced-motion');
    expect(content).toContain('scroll-margin-top');
  });
});

describe('Mermaid sources and rendering', () => {
  it('uses the complete original five diagrams with a valid page light theme', () => {
    expect(Object.keys(DIAGRAMS)).toEqual(Object.keys(inventory.diagrams));
    expect(MERMAID_CONFIG).not.toContain("'");
    const config = JSON.parse(MERMAID_CONFIG.replace(/^%%\{init:\s*/, '').replace(/\}%%$/, ''));
    expect(config.theme).toBe('base');
    expect(config.themeVariables.primaryTextColor.toLowerCase()).toBe('#161b26');
    expect(config.themeVariables.edgeLabelBackground.toLowerCase()).toBe('#ffffff');
    expect(config.flowchart.nodeSpacing).toBe(45);
    expect(config.flowchart.rankSpacing).toBe(55);
  });
  for (const [key, source] of Object.entries(inventory.diagrams)) {
    it(`${key}: exact original source after indentation normalization and real Mermaid parsing`, async () => {
      const chart = DIAGRAMS[key as keyof typeof DIAGRAMS];
      expect(chart.startsWith(MERMAID_CONFIG)).toBe(true);
      expect(chart.slice(MERMAID_CONFIG.length).trim()).toBe(source.split('\n').map(l => l.trim()).join('\n').trim());
      const mermaidEntry = 'mermaid/dist/mermaid.esm.mjs';
      const parser = (await import(mermaidEntry)).default as unknown as { parse: (text: string) => Promise<unknown> };
      expect(await parser.parse(chart)).toBeTruthy();
    });
  }
  it('passes every chart to the shared Mermaid renderer in source order', async () => {
    const calls: string[] = [];
    const original = mermaid.render;
    mermaid.render = mock(async (_id: string, chart: string) => {
      calls.push(chart);
      return { svg: '<svg viewBox="0 0 100 100"><text>test</text></svg>', diagramType: 'flowchart' };
    }) as unknown as typeof mermaid.render;
    try {
      const { container } = render(<Page />);
      await waitFor(() => expect(calls).toEqual(Object.values(DIAGRAMS)));
      await waitFor(() => expect(container.querySelectorAll('.mermaid-diagram svg').length).toBe(5));
    } finally { cleanup(); mermaid.render = original; }
  });
});

describe('navigation and checklist behavior', () => {
  let original: typeof window.IntersectionObserver;
  let callback: IntersectionObserverCallback;
  let observed: Element[];
  let disconnected: boolean;
  beforeEach(() => {
    original = window.IntersectionObserver;
    observed = []; disconnected = false;
    window.IntersectionObserver = class {
      constructor(cb: IntersectionObserverCallback) { callback = cb; }
      observe(el: Element) { observed.push(el); }
      disconnect() { disconnected = true; }
    } as unknown as typeof IntersectionObserver;
  });
  afterEach(() => { cleanup(); window.IntersectionObserver = original; });
  it('observes all seven sections, updates active/aria-current and disconnects on unmount', async () => {
    const { container, unmount } = render(<Page />);
    await waitFor(() => expect(container.querySelectorAll('.mermaid-diagram svg').length).toBe(5));
    expect(observed.map(el => el.id)).toEqual(['sec-0','sec-1','sec-2','sec-3','sec-4','sec-5','sec-6']);
    act(() => callback([{ isIntersecting: true, target: container.querySelector('#sec-3')! }] as IntersectionObserverEntry[], {} as IntersectionObserver));
    await waitFor(() => expect(container.querySelector('a[href="#sec-3"]')?.getAttribute('aria-current')).toBe('location'));
    expect(container.querySelectorAll('.nav-link.active').length).toBe(1);
    fireEvent.click(container.querySelector('a[href="#sec-2"]')!);
    expect(container.querySelector('a[href="#sec-2"]')?.getAttribute('aria-current')).toBe('location');
    unmount(); expect(disconnected).toBe(true);
  });
  it('keeps all six labelled checkboxes independently toggleable', async () => {
    const { container, getAllByRole } = render(<Page />);
    await waitFor(() => expect(container.querySelectorAll('.mermaid-diagram svg').length).toBe(5));
    const boxes = getAllByRole('checkbox') as HTMLInputElement[];
    expect(boxes).toHaveLength(6);
    boxes.forEach((box, i) => {
      expect(box.closest('label')?.querySelector('.checklist-text')?.textContent?.trim()).toBeTruthy();
      expect(box.checked).toBe(false);
      fireEvent.click(box);
      expect(box.checked).toBe(true);
      expect(container.querySelectorAll('input:checked').length).toBe(i + 1);
      fireEvent.click(box); expect(box.checked).toBe(false);
      fireEvent.click(box);
    });
  });
});

describe('accessible table names', () => {
  it('names all six data tables with distinct leading captions for screen-reader table lists', () => {
    const $ = html();
    const tables = $('table').toArray();
    expect(tables).toHaveLength(6);
    tables.forEach(table => expect($(table).children().first().is('caption')).toBe(true));
    const captions = tables.map(table => norm($(table).children('caption').text()));
    captions.forEach(caption => expect(caption).not.toBe(''));
    expect(new Set(captions).size).toBe(tables.length);
  });
});
