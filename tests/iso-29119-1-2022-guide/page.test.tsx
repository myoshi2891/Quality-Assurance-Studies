import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import type { Element as HtmlElement } from 'domhandler';
import postcss from 'postcss';
import type { Window as HappyWindow } from 'happy-dom';
import inventory from '../../docs/migration-inventory/iso-29119-1-2022-guide.json';
import NavBar from '../../app/iso-29119-1-2022-guide/NavBar';

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

const norm = (value: string) => value.replace(/\s+/g, '').trim();

type InventoryItem = { tag: string; attrs: string[][]; text: string };

function signatures(html: string, selector = '*'): InventoryItem[] {
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
        const expected: InventoryItem[] = items;
        if (expected.length === 0) continue;
        it(`preserves exact ordered inventory for ${selector}`, async () => {
          expect(signatures(await markup(group.name), selector)).toEqual(expected);
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

  for (const name of ['Section0', 'Section1']) {
    it(`labels every table in ${name} by its preceding h3 via aria-labelledby`, async () => {
      const $ = load(await markup(name), null, false);
      const tables = $('table').toArray() as HtmlElement[];
      expect(tables.length).toBeGreaterThan(0);
      for (const table of tables) {
        const headingId = $(table).parent().prevAll('h3').first().attr('id');
        expect(headingId).toBeDefined();
        expect(table.attribs['aria-labelledby']).toBe(headingId);
      }
    });
  }

  // 見出しレベル（h2〜h4）に依存せず、全表が固有のアクセシブル名を持つことを検証する
  const TABLE_COUNTS: Record<string, number> = {
    Section2: 2, Section3: 1, Section4: 1, Section5: 5, Section6: 6, Section7: 4, Section8: 9,
    Section9: 1, Section11: 1, Section12: 1, Section14: 1, AnnexA: 1, AnnexB: 3,
  };
  for (const [name, count] of Object.entries(TABLE_COUNTS)) {
    it(`gives each of the ${count} tables in ${name} a unique accessible name`, async () => {
      const $ = load(await markup(name), null, false);
      const tables = $('table').toArray() as HtmlElement[];
      expect(tables).toHaveLength(count);
      const names = tables.map(table => {
        const labelledby = table.attribs['aria-labelledby'];
        if (labelledby === undefined) return norm(table.attribs['aria-label'] ?? '');
        const target = $(`[id="${labelledby}"]`);
        expect(target).toHaveLength(1);
        expect(/^h[2-6]$/.test(target.prop('tagName')?.toLowerCase() ?? '')).toBe(true);
        return norm(target.text());
      });
      for (const label of names) expect(label.length).toBeGreaterThan(0);
      expect(new Set(names).size).toBe(names.length);
    });
  }

  it('associates the three AnnexB tables with the B.1, B.2 and B.3 headings', async () => {
    const $ = load(await markup('AnnexB'), null, false);
    const labels = ($('table').toArray() as HtmlElement[]).map(table => norm($(`[id="${table.attribs['aria-labelledby']}"]`).text()));
    expect(labels.map(label => label.slice(0, 3))).toEqual(['B.1', 'B.2', 'B.3']);
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
      const { container } = render(<NavBar />);
      const toggle = container.querySelector('#sidebarToggle') as HTMLButtonElement;
      const nav = container.querySelector('nav.sidebar') as HTMLElement;
      expect(nav.classList.contains('open')).toBe(false);
      fireEvent.click(toggle);
      expect(nav.classList.contains('open')).toBe(true);
      fireEvent.click(toggle);
      expect(nav.classList.contains('open')).toBe(false);
    });

    it('marks the active link and closes the sidebar on link click at narrow widths', () => {
      // Arrange
      const previousWidth = window.innerWidth;
      Object.defineProperty(window, 'innerWidth', { configurable: true, value: 800 });
      try {
        const { container } = render(<NavBar />);
        const toggle = container.querySelector('#sidebarToggle') as HTMLButtonElement;
        const nav = container.querySelector('nav.sidebar') as HTMLElement;
        const first = container.querySelector('a[data-target="0-はじめにこのガイドの読み方"]') as HTMLAnchorElement;
        const other = container.querySelector('a[data-target="11-基本情報"]') as HTMLAnchorElement;
        // Assert: 初期アクティブ節のみ active / aria-current
        expect(first.classList.contains('active')).toBe(true);
        expect(first.getAttribute('aria-current')).toBe('location');
        expect(other.classList.contains('active')).toBe(false);
        expect(other.hasAttribute('aria-current')).toBe(false);
        // Act
        fireEvent.click(toggle);
        expect(nav.classList.contains('open')).toBe(true);
        fireEvent.click(other);
        // Assert
        expect(nav.classList.contains('open')).toBe(false);
      } finally {
        Object.defineProperty(window, 'innerWidth', { configurable: true, value: previousWidth });
      }
    });

    describe('page-end selection', () => {
      const FIRST = '0-はじめにこのガイドの読み方';
      const LAST = 'b4-情報の鮮度に関する注記';
      const root = document.documentElement;
      let sections: HTMLElement[] = [];

      // 先頭節は読み取り帯（30%）内、末尾節は帯より下に置き、末尾の短い節を再現する
      function mountSections() {
        sections = [FIRST, LAST].map((id, index) => {
          const el = document.createElement('section');
          el.id = id;
          const top = index === 0 ? 0 : window.innerHeight * 0.9;
          el.getBoundingClientRect = () => ({ top } as DOMRect);
          document.body.appendChild(el);
          return el;
        });
      }

      function setScroll(scrollY: number, scrollHeight: number) {
        Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY });
        Object.defineProperty(root, 'scrollHeight', { configurable: true, value: scrollHeight });
      }

      afterEach(() => {
        for (const el of sections) el.remove();
        sections = [];
        Reflect.deleteProperty(window, 'scrollY');
        Reflect.deleteProperty(root, 'scrollHeight');
      });

      it('selects the last existing target when scrolled to the bottom', async () => {
        // Arrange
        mountSections();
        const { container } = render(<NavBar />);
        const first = container.querySelector(`a[data-target="${FIRST}"]`) as HTMLAnchorElement;
        const last = container.querySelector(`a[data-target="${LAST}"]`) as HTMLAnchorElement;
        // Act: ページ末尾までスクロール
        setScroll(1000, 1000 + window.innerHeight);
        fireEvent.scroll(window);
        // Assert
        await waitFor(() => expect(last.getAttribute('aria-current')).toBe('location'));
        expect(last.classList.contains('active')).toBe(true);
        expect(first.classList.contains('active')).toBe(false);
        expect(first.hasAttribute('aria-current')).toBe(false);
      });

      it('keeps the threshold-based selection when not at the bottom', () => {
        // Arrange
        mountSections();
        const { container } = render(<NavBar />);
        const first = container.querySelector(`a[data-target="${FIRST}"]`) as HTMLAnchorElement;
        const last = container.querySelector(`a[data-target="${LAST}"]`) as HTMLAnchorElement;
        // Act: 末尾より手前
        setScroll(100, 1000 + window.innerHeight);
        fireEvent.scroll(window);
        // Assert
        expect(first.getAttribute('aria-current')).toBe('location');
        expect(last.classList.contains('active')).toBe(false);
        expect(last.hasAttribute('aria-current')).toBe(false);
      });
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

    it('gives every diagram a unique accTitle and accDescr', async () => {
      const diagrams = (await import('../../app/iso-29119-1-2022-guide/diagrams')) as Record<string, string>;
      const titles: string[] = [];
      const descrs: string[] = [];
      for (let i = 1; i <= 19; i++) {
        const chart = diagrams[`DIAGRAM_${i}`];
        const title = /^\s*accTitle:\s*(.+)$/m.exec(chart)?.[1]?.trim();
        const descr = /^\s*accDescr:\s*(.+)$/m.exec(chart)?.[1]?.trim();
        expect(title).toBeTruthy();
        expect(descr).toBeTruthy();
        titles.push(title ?? '');
        descrs.push(descr ?? '');
      }
      expect(new Set(titles).size).toBe(19);
      expect(new Set(descrs).size).toBe(19);
    });

    it('describes all three conformance branches in DIAGRAM_17 accDescr', async () => {
      const { DIAGRAM_17 } = await import('../../app/iso-29119-1-2022-guide/diagrams');
      const title = /^\s*accTitle:\s*(.+)$/m.exec(DIAGRAM_17)?.[1] ?? '';
      // 29119-1 は参考文書で適合要求を持たないため、適合対象が Part 2・3・4 であることをタイトルで示す
      expect(title).toContain('Part 2・3・4');
      expect(title).not.toContain('29119-1 への適合');
      const descr = /^\s*accDescr:\s*(.+)$/m.exec(DIAGRAM_17)?.[1] ?? '';
      expect(descr).toContain('完全適合');
      expect(descr).toContain('テーラード適合');
      expect(descr).toContain('正当な理由');
      expect(descr).toContain('合意');
      expect(descr).toContain('適合を主張できない');
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
