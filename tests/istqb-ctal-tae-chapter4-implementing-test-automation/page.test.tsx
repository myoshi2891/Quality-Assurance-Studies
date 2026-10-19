import { afterEach, beforeEach, describe, expect, it, mock } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import React from 'react';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter4-implementing-test-automation.json';
import Page from '../../app/istqb-ctal-tae-chapter4-implementing-test-automation/page';
import NavBar, { TOC_ITEMS } from '../../app/istqb-ctal-tae-chapter4-implementing-test-automation/NavBar';
import {
  MERMAID_CONFIG,
  DIAGRAM_CH4_OVERVIEW,
  DIAGRAM_PILOT_FLOW,
  DIAGRAM_DEPLOYMENT_RISKS,
  DIAGRAM_RISK_FLOW,
  DIAGRAM_HARDCODING_AVOIDANCE,
  DIAGRAM_CH4_SUMMARY,
} from '../../app/istqb-ctal-tae-chapter4-implementing-test-automation/diagrams';

// noUncheckedIndexedAccess 下で添字参照を安全に行い、欠落時は添字付きで失敗させる
function at<T>(list: ArrayLike<T>, index: number, label: string): T {
  const item = list[index];
  if (item === undefined) {
    throw new Error(`${label}[${index}] が存在しない`);
  }
  return item;
}

// Mock Mermaid and IntersectionObserver
const renderedDiagrams: string[] = [];
let origMermaidRender: typeof mermaid.render;
let origIntersectionObserver: typeof window.IntersectionObserver;

beforeEach(() => {
  renderedDiagrams.length = 0;
  origMermaidRender = mermaid.render;
  mermaid.render = mock(async (_id: string, text: string) => {
    renderedDiagrams.push(text);
    return { svg: '<svg data-testid="mock-mermaid"></svg>', diagramType: 'flowchart' };
  }) as unknown as typeof mermaid.render;

  origIntersectionObserver = window.IntersectionObserver;
  window.IntersectionObserver = mock(() => ({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })) as unknown as typeof IntersectionObserver;
});

afterEach(() => {
  cleanup();
  mermaid.render = origMermaidRender;
  window.IntersectionObserver = origIntersectionObserver;
});

describe('CTAL-TAE Chapter 4 Page Migration Spec', () => {
  describe('Hero Section Inventory', () => {
    it('renders hero kicker, title, lead, and meta items matching inventory', () => {
      const { container } = render(<Page />);
      const kicker = container.querySelector('.hero-kicker');
      expect(kicker?.textContent?.trim()).toBe(inventory.hero.kicker);

      const title = container.querySelector('.hero h1');
      expect(title?.textContent?.replace(/\s+/g, ' ').trim()).toBe(
        inventory.hero.title.replace(/\s+/g, ' ')
      );

      const lead = container.querySelector('.hero .hero-lead');
      expect(lead?.textContent?.trim()).toBe(inventory.hero.lead);

      const metaSpans = container.querySelectorAll('.hero-meta span');
      expect(metaSpans.length).toBe(inventory.hero.meta.length);

      inventory.hero.meta.forEach((expected, i) => {
        const span = at(metaSpans, i, 'metaSpans');
        expect(span.textContent?.replace(/\s+/g, ' ').trim()).toBe(
          expected.replace(/\s+/g, ' ')
        );
      });
    });

    it('renders syllabus external link with secure attributes', () => {
      const { container } = render(<Page />);
      const link = container.querySelector('.hero-meta a[href*="ISTQB_CTAL-TAE_Syllabus_v2.0.pdf"]');
      expect(link).not.toBeNull();
      expect(link?.getAttribute('target')).toBe('_blank');
      expect(link?.getAttribute('rel')).toContain('noopener');
    });
  });

  describe('TOC Navigation Inventory', () => {
    it('renders all 20 TOC links exactly matching inventory', () => {
      render(<NavBar />);
      expect(TOC_ITEMS.length).toBe(inventory.tocLinks.length);

      inventory.tocLinks.forEach((expected, i) => {
        const item = at(TOC_ITEMS, i, 'TOC_ITEMS');
        expect(item.href).toBe(expected.href);
        expect(item.text).toBe(expected.text);
        expect(item.sub).toBe(expected.sub);
      });
    });

    it('contains mobile toggle button and scrim backdrop', () => {
      const { container } = render(<NavBar />);
      const toggle = container.querySelector('.menu-toggle');
      expect(toggle).not.toBeNull();
      expect(toggle?.getAttribute('aria-label')).toBe('目次を開く');

      const scrim = container.querySelector('.scrim');
      expect(scrim).not.toBeNull();
      expect(scrim?.getAttribute('aria-hidden')).toBe('true');
    });

    it('closes the open TOC with Escape and returns focus to the toggle', () => {
      const { container } = render(<NavBar />);
      const toggle = container.querySelector<HTMLButtonElement>('.menu-toggle');
      if (!toggle) throw new Error('menu toggle missing');
      fireEvent.click(toggle);
      expect(toggle.getAttribute('aria-expanded')).toBe('true');
      expect(container.querySelector('.sidebar')?.classList.contains('open')).toBe(true);

      fireEvent.keyDown(document, { key: 'Escape' });
      expect(toggle.getAttribute('aria-expanded')).toBe('false');
      expect(container.querySelector('.sidebar')?.classList.contains('open')).toBe(false);
      expect(document.activeElement).toBe(toggle);
    });

    it('observes every TOC target, activates the intersecting one and disconnects on unmount', () => {
      // Arrange: 全 TOC 対象要素を配置し、コールバックと監視対象を捕捉する
      const targets = TOC_ITEMS.map((item) => {
        const el = document.createElement('div');
        el.id = item.href.slice(1);
        document.body.appendChild(el);
        return el;
      });
      const observed: Element[] = [];
      const disconnect = mock(() => undefined);
      let callback: IntersectionObserverCallback | undefined;
      window.IntersectionObserver = mock((cb: IntersectionObserverCallback) => {
        callback = cb;
        return { observe: (el: Element) => observed.push(el), unobserve: () => null, disconnect };
      }) as unknown as typeof IntersectionObserver;

      try {
        const { container, unmount } = render(<NavBar />);
        // DOM 要素の深い比較は循環参照で終わらないため、同一性を ID の並びで照合する
        expect(observed.every((el, i) => el === targets[i])).toBe(true);
        expect(observed.map((el) => el.id)).toEqual(TOC_ITEMS.map((item) => item.href.slice(1)));
        if (!callback) throw new Error('IntersectionObserver callback missing');

        // Act: 4.2 節の見出しが交差したことを通知する
        const target = at(targets, 8, 'targets');
        const entry = { isIntersecting: true, target } as unknown as IntersectionObserverEntry;
        act(() => callback?.([entry], {} as IntersectionObserver));

        // Assert: 現在の節だけが aria-current="location" を持つ
        expect(container.querySelector('a.active')?.getAttribute('href')).toBe('#s-42');
        const current = Array.from(container.querySelectorAll('.toc a[aria-current]'));
        expect(current.map((a) => [a.getAttribute('href'), a.getAttribute('aria-current')])).toEqual([
          ['#s-42', 'location'],
        ]);
        unmount();
        expect(disconnect).toHaveBeenCalledTimes(1);
      } finally {
        targets.forEach((el) => el.remove());
      }
    });

    it('does nothing when IntersectionObserver is unavailable', () => {
      // Arrange
      const original = window.IntersectionObserver;
      Reflect.deleteProperty(window, 'IntersectionObserver');
      try {
        // Act
        const { container } = render(<NavBar />);
        // Assert: 例外なく描画され、初期の先頭リンクが活性のまま
        expect(container.querySelector('a.active')?.getAttribute('href')).toBe('#s-overview');
      } finally {
        window.IntersectionObserver = original;
      }
    });

    it('ignores Escape while the TOC is closed', () => {
      const { container } = render(<NavBar />);
      const toggle = container.querySelector<HTMLButtonElement>('.menu-toggle');
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(toggle?.getAttribute('aria-expanded')).toBe('false');
      expect(document.activeElement).not.toBe(toggle);
    });
  });

  describe('Sections and Headings Inventory', () => {
    it('renders exactly 8 block sections with correct IDs and titles', () => {
      const { container } = render(<Page />);
      const sectionBlocks = container.querySelectorAll('section.block');
      expect(sectionBlocks.length).toBe(inventory.sections.length);

      inventory.sections.forEach((sec, i) => {
        const el = at(sectionBlocks, i, 'sectionBlocks');
        expect(el.getAttribute('id')).toBe(sec.id);

        const numEl = el.querySelector('.section-num');
        expect(numEl?.textContent?.trim()).toBe(sec.num);

        const h2 = el.querySelector('h2');
        expect(h2?.textContent?.trim()).toBe(sec.title);
      });
    });

    it.each(inventory.sections.map(sec => [sec.id, sec] as const))(
      'renders %s h3/h4 with the inventory tag, ID and text so TOC anchors land on the named heading',
      (id, sec) => {
        const { container } = render(<Page />);
        const headings = Array.from(container.querySelectorAll(`#${id} h3, #${id} h4`)).map(h => ({
          tag: h.tagName.toLowerCase(),
          id: h.getAttribute('id'),
          text: h.textContent?.trim(),
        }));
        expect(headings).toEqual(sec.headings);
      }
    );
  });

  describe('Diagrams Inventory and Mermaid Config', () => {
    it('defines MERMAID_CONFIG without single quotes', () => {
      expect(MERMAID_CONFIG).not.toContain("'");
      expect(MERMAID_CONFIG).toContain('"theme": "base"');
      expect(MERMAID_CONFIG).toContain('"htmlLabels": true');
    });

    it('defines exactly 6 diagrams with titles matching inventory', () => {
      const diagrams = [
        DIAGRAM_CH4_OVERVIEW,
        DIAGRAM_PILOT_FLOW,
        DIAGRAM_DEPLOYMENT_RISKS,
        DIAGRAM_RISK_FLOW,
        DIAGRAM_HARDCODING_AVOIDANCE,
        DIAGRAM_CH4_SUMMARY,
      ];
      expect(diagrams.length).toBe(inventory.diagrams.length);

      diagrams.forEach((diag) => {
        expect(diag.startsWith(MERMAID_CONFIG)).toBe(true);
      });

      const { container } = render(<Page />);
      const diagramCards = container.querySelectorAll('.diagram-card');
      expect(diagramCards.length).toBe(inventory.diagrams.length);

      inventory.diagrams.forEach((expected, i) => {
        const card = at(diagramCards, i, 'diagramCards');
        const title = card.querySelector('.diagram-title')?.textContent?.replace(/\s+/g, ' ').trim();
        expect(title).toContain(expected.title);
      });
    });

    it('passes all 6 diagram definitions to Mermaid in document order', async () => {
      render(<Page />);
      // Mermaid コンポーネントはフォント待機後に非同期で render するため、6 図揃うまで待つ
      await waitFor(() => expect(renderedDiagrams.length).toBe(6));
      expect(renderedDiagrams).toEqual([
        DIAGRAM_CH4_OVERVIEW,
        DIAGRAM_PILOT_FLOW,
        DIAGRAM_DEPLOYMENT_RISKS,
        DIAGRAM_RISK_FLOW,
        DIAGRAM_HARDCODING_AVOIDANCE,
        DIAGRAM_CH4_SUMMARY,
      ]);
    });

    it('passes the inventory diagram code (after the config prefix) to Mermaid in order', async () => {
      render(<Page />);
      await waitFor(() => expect(renderedDiagrams.length).toBe(inventory.diagrams.length));
      // 設定用プレフィックス（%%{init}%%）を除いた本体を、インベントリの図コードと照合する
      const bodies = renderedDiagrams.map((text) => {
        expect(text.startsWith(MERMAID_CONFIG)).toBe(true);
        return text.slice(MERMAID_CONFIG.length).trim();
      });
      expect(bodies).toEqual(inventory.diagrams.map((d) => d.code.trim()));
    });

    it('keeps every diagram fallback out of inline display:none and reveals it via CSS on render failure', () => {
      // Arrange
      const css = readFileSync(
        join(import.meta.dir, '../../app/istqb-ctal-tae-chapter4-implementing-test-automation/ctal-tae-ch4.css'),
        'utf8'
      );
      // Act
      const { container } = render(<Page />);
      const fallbacks = Array.from(container.querySelectorAll('.diagram-card .diagram-fallback'));
      // Assert: 全図に代替説明があり、インライン指定で恒久的に隠されていない
      expect(fallbacks.length).toBe(inventory.diagrams.length);
      fallbacks.forEach((el) => expect(el.getAttribute('style')).toBeNull());
      // 共通 Mermaid は失敗時に svg ではなく p を出力するため、その場合だけ代替説明を表示する
      expect(css).toMatch(/\.ctal-tae-ch4-page \.diagram-fallback\s*\{[^}]*display:\s*none/);
      expect(css).toMatch(
        /\.ctal-tae-ch4-page \.diagram-card:has\(\.mermaid-wrapper > p\) \.diagram-fallback\s*\{[^}]*display:\s*block/
      );
    });

    it('parses every diagram with the real Mermaid parser', async () => {
      // テスト環境の 'mermaid' は差し替えられているため、実パーサーを ESM ビルドから直接読み込む
      const parserPath = 'mermaid/dist/mermaid.esm.mjs';
      const { default: realMermaid } = (await import(parserPath)) as {
        default: typeof import('mermaid').default;
      };
      for (const diagram of [
        DIAGRAM_CH4_OVERVIEW,
        DIAGRAM_PILOT_FLOW,
        DIAGRAM_DEPLOYMENT_RISKS,
        DIAGRAM_RISK_FLOW,
        DIAGRAM_HARDCODING_AVOIDANCE,
        DIAGRAM_CH4_SUMMARY,
      ]) {
        expect(await realMermaid.parse(diagram)).toBeTruthy();
      }
    });
  });

  describe('Tables Inventory', () => {
    it('renders all 5 tables with correct header columns and row counts', () => {
      const { container } = render(<Page />);
      const tables = container.querySelectorAll('table');
      expect(tables.length).toBe(inventory.tables.length);

      inventory.tables.forEach((expected, i) => {
        const table = at(tables, i, 'tables');
        const ths = table.querySelectorAll('thead th');
        expect(ths.length).toBe(expected.headers.length);
        expected.headers.forEach((h, j) => {
          const th = at(ths, j, 'ths');
          expect(th.textContent?.trim()).toBe(h);
        });

        const trs = table.querySelectorAll('tbody tr');
        expect(trs.length).toBe(expected.rowCount);
      });
    });
  });

  describe('Practice Cards Inventory', () => {
    it('renders 3 practice cards with correct titles and item counts', () => {
      const { container } = render(<Page />);
      const practiceCards = container.querySelectorAll('.practice-card');
      expect(practiceCards.length).toBe(inventory.practices.length);

      inventory.practices.forEach((expected, i) => {
        const card = at(practiceCards, i, 'practiceCards');
        const title = card.querySelector('.practice-title')?.textContent?.trim();
        expect(title).toBe(expected.title);

        const items = Array.from(card.querySelectorAll('li')).map((li) =>
          li.textContent?.replace(/\s+/g, ' ').trim()
        );
        expect(items).toEqual(expected.items.map((t) => t.replace(/\s+/g, ' ').trim()));
      });
    });
  });
  // JSX は要素境界（<br />・ブロック要素）の空白を保持しないため、テキスト照合では空白を除去する
  const squash = (s: string | null | undefined) => (s ?? '').replace(/\s+/g, '');


  describe('Callouts Inventory', () => {
    it('renders every callout with the inventory type and text in order', () => {
      const { container } = render(<Page />);
      const callouts = Array.from(container.querySelectorAll('.callout')).map((el) => ({
        type: Array.from(el.classList).find((c) => c !== 'callout'),
        text: squash(el.textContent),
      }));
      expect(callouts).toEqual(
        inventory.callouts.map((c) => ({ type: c.type, text: squash(c.text) }))
      );
    });
  });

  describe('Self Check Checklist Inventory', () => {
    it('renders 8 checklist items in section 6', () => {
      const { container } = render(<Page />);
      const checklistItems = container.querySelectorAll('.checklist-card li');
      expect(checklistItems.length).toBe(inventory.checklists.length);

      inventory.checklists.forEach((expected, i) => {
        const li = at(checklistItems, i, 'checklistItems');
        const label = li.querySelector('label')?.textContent?.trim();
        expect(label).toBe(expected);
      });
    });
  });

  describe('References Inventory', () => {
    it('renders 3 references in section 7 with correct names and links', () => {
      const { container } = render(<Page />);
      const refItems = container.querySelectorAll('.ref-list li');
      expect(refItems.length).toBe(inventory.references.length);

      inventory.references.forEach((expected, i) => {
        const li = at(refItems, i, 'refItems');
        const name = li.querySelector('.ref-name')?.textContent?.replace(/\s+/g, ' ').trim();
        expect(name).toBe(expected.name.replace(/\s+/g, ' '));
        expect(squash(li.textContent)).toBe(squash(expected.text));
      });
    });

    it('links each reference URL shown in the inventory text, in order, with secure attributes', () => {
      const { container } = render(<Page />);
      const links = Array.from(container.querySelectorAll('.ref-list li a'));
      // インベントリ本文中の URL が、そのままリンク先かつ表示テキストになる
      const expectedUrls = inventory.references.flatMap((r) => r.text.match(/https?:\/\/\S+/g) ?? []);
      expect(links.map((a) => a.getAttribute('href'))).toEqual(expectedUrls);
      expect(links.map((a) => a.textContent?.trim())).toEqual(expectedUrls);
      links.forEach((a) => {
        expect(a.getAttribute('target')).toBe('_blank');
        expect(a.getAttribute('rel')).toBe('noopener noreferrer');
      });
    });
  });
});
