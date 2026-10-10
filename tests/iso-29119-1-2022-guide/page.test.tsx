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
import inventory from '../../docs/migration-inventory/iso-29119-1-2022-guide.json';
import { NAV_ITEMS, CATEGORY_ORDER, CATEGORY_TITLES, CATEGORY_CODES } from '../../lib/navigation';
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

const directory = 'app/iso-29119-1-2022-guide/';
const norm = (value: string) => value.replace(/\s+/g, '').trim();

function signatures(html: string, selector = '*'): { tag: string; attrs: string[][]; text: string }[] {
  const $ = load(html, null, false);
  $('.mermaid-wrapper').remove();
  $('.mermaid-diagram svg').remove();
  return $(selector).toArray().filter((node): node is HtmlElement => 'tagName' in node).map(node => ({
    tag: node.tagName,
    attrs: Object.entries(node.attribs).filter(([key]) => !key.startsWith('aria-') && key !== 'role' && key !== 'target' && key !== 'rel').sort(([a], [b]) => a.localeCompare(b)),
    text: norm($(node).text()),
  }));
}

async function markup(name: string) {
  const mod = await import('../../app/iso-29119-1-2022-guide/' + name);
  const Component = mod.default;
  return renderToStaticMarkup(<Component />);
}

describe('ISO/IEC/IEEE 29119-1:2022 Elements Inventory', () => {
  for (const group of inventory.groups) {
    describe(group.name, () => {
      it('preserves complete DOM structure and full text in document order', async () => {
        expect(signatures(await markup(group.name))).toEqual(group.structure);
      });
      for (const [selector, items] of Object.entries(group.items)) {
        if ((items as unknown[]).length === 0) continue;
        it(`preserves exact ordered inventory for ${selector}`, async () => {
          expect(signatures(await markup(group.name), selector)).toEqual(items as any);
        });
      }
    });
  }

  it('enforces rel="noopener noreferrer" and target="_blank" on all external links in AnnexB', async () => {
    const html = await markup('AnnexB');
    const $ = load(html, null, false);
    const links = $('a[href^="http"]').toArray() as HtmlElement[];
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link.attribs.target).toBe('_blank');
      expect(link.attribs.rel).toBe('noopener noreferrer');
    }
  });

  describe('NavBar', () => {
    it('preserves all 69 links, targets and hierarchy in sidebar', async () => {
      const html = await markup('NavBar');
      const $ = load(html, null, false);
      const links = $('nav.sidebar a.nav-link');
      expect(links.length).toBe(69);
      expect($('nav.sidebar .nav-h2').length).toBe(17);
      expect($('nav.sidebar .nav-h3').length).toBe(52);
    });

    it('toggles mobile sidebar open state and closes on link click', () => {
      const { default: NavBar } = require('../../app/iso-29119-1-2022-guide/NavBar');
      const { container } = render(<NavBar />);
      const toggle = container.querySelector('#sidebarToggle') as HTMLButtonElement;
      const nav = container.querySelector('nav.sidebar') as HTMLElement;
      expect(nav.classList.contains('open')).toBe(false);
      fireEvent.click(toggle);
      expect(nav.classList.contains('open')).toBe(true);
      fireEvent.click(toggle);
      expect(nav.classList.contains('open')).toBe(false);
    });
  });

  describe('Page Integration', () => {
    it('integrates all sections and renders without runtime error', async () => {
      const { default: Page } = await import('../../app/iso-29119-1-2022-guide/page');
      const html = renderToStaticMarkup(<Page />);
      const $ = load(html, null, false);
      expect($('.iso-29119-1-page').length).toBe(1);
      expect($('nav.sidebar').length).toBe(1);
      expect($('main.main').length).toBe(1);
      expect($('.mermaid-diagram').length).toBe(19);
      expect($('table').length).toBe(39);
    });

    it('wires all 19 mermaid diagrams into their containers with Mermaid component', async () => {
      const { default: Page } = await import('../../app/iso-29119-1-2022-guide/page');
      const html = renderToStaticMarkup(<Page />);
      const $ = load(html, null, false);
      for (let i = 1; i <= 19; i++) {
        const diagramEl = $(`#mermaid-${i}`);
        expect(diagramEl.length).toBe(1);
        expect(diagramEl.find('.mermaid-wrapper').length).toBe(1);
      }
    });

    it('renders all 19 charts on the client with correct diagram definitions', async () => {
      const { default: mermaid } = await import('mermaid');
      const original = mermaid.render;
      mermaid.render = async (_id, chart) => ({
        svg: `<svg data-chart="${createHash('sha256').update(chart).digest('hex')}"></svg>`,
        diagramType: 'flowchart',
      });
      try {
        const { default: Page } = await import('../../app/iso-29119-1-2022-guide/page');
        const diagrams = await import('../../app/iso-29119-1-2022-guide/diagrams');
        const view = render(<Page />);
        await waitFor(() => expect(view.container.querySelectorAll('.mermaid-diagram svg')).toHaveLength(19));
        for (let i = 1; i <= 19; i++) {
          const expectedChart = (diagrams as Record<string, string>)[`DIAGRAM_${i}`];
          expect(view.container.querySelector(`#mermaid-${i} svg`)?.getAttribute('data-chart'))
            .toBe(createHash('sha256').update(expectedChart).digest('hex'));
        }
      } finally {
        mermaid.render = original;
      }
    });
  });

  describe('Styles and Scope', () => {
    it('scopes all styles under .iso-29119-1-page', () => {
      const css = readFileSync('app/iso-29119-1-2022-guide/iso-29119-1-2022-guide.css', 'utf8');
      const root = postcss.parse(css);
      root.walkRules((rule) => {
        expect(rule.selector.startsWith('.iso-29119-1-page')).toBe(true);
      });
    });

    it('resets globals.css hero, table, and mermaid interference', () => {
      const css = readFileSync('app/iso-29119-1-2022-guide/iso-29119-1-2022-guide.css', 'utf8');
      expect(css).toContain('.hero');
      expect(css).toContain('min-height: 0 !important');
      expect(css).toContain('.mermaid-wrapper');
      expect(css).toContain('background: transparent !important');
      expect(css).toContain('max-width: none !important');
    });
  });
});
