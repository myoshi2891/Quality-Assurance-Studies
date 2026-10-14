import { afterEach, beforeEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter3-test-automation-architecture.json';
import Page from '../../app/istqb-ctal-tae-chapter3-test-automation-architecture/page';
import NavBar, { TOC_ITEMS } from '../../app/istqb-ctal-tae-chapter3-test-automation-architecture/NavBar';
import {
  MERMAID_CONFIG,
  DIAGRAM_OVERVIEW,
  DIAGRAM_GTAA,
  DIAGRAM_TAA_DESIGN,
  DIAGRAM_TAF_LAYERS,
  DIAGRAM_TAF_SCALING,
  DIAGRAM_APPROACHES,
  DIAGRAM_TDD_CYCLE,
  DIAGRAM_FLOW_MODEL,
  DIAGRAM_CHECKLIST,
} from '../../app/istqb-ctal-tae-chapter3-test-automation-architecture/diagrams';

// noUncheckedIndexedAccess 下で添字参照を安全に行い、欠落時は添字付きで失敗させる
function at<T>(list: ArrayLike<T>, index: number, label: string): T {
  const item = list[index];
  if (item === undefined) {
    throw new Error(`${label}[${index}] が存在しない`);
  }
  return item;
}

// 各データ表の caption（出現順）
const TABLE_CAPTIONS = [
  '第3章の学習目標（LO）一覧',
  'gTAAが定義する4つの外部インターフェース',
  'gTAAの4つのコア機能',
  'TAA設計時の検討項目',
  'TAFの3層レイヤー比較',
  'テストケース自動化アプローチの比較',
  'オブジェクト指向プログラミングの4原則',
  'SOLID原則',
  'テスト自動化で使われるデザインパターン',
  '出典・参考ソース一覧',
];

// 第6章の Mermaid 図と対応する判断項目（描画失敗時のフォールバック）
const CHECKLIST_DECISIONS = [
  'gTAAの4機能（生成・定義・実行・適応）をどのツールが担うか整理したか？',
  'TAF内のレイヤー構成（Test Scripts / Business Logic / Core Libraries）は明確か？',
  'チームのスキルとSUTの変化頻度に見合った自動化アプローチを選んだか？',
  '要件に適した設計原則・デザインパターンを選定・適用したか？',
];

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

describe('CTAL-TAE Chapter 3 Page Migration Spec', () => {
  describe('Hero Section Inventory', () => {
    it('renders hero eyebrow, title, subtitle, and meta items matching inventory', () => {
      const { container } = render(<Page />);
      const eyebrow = container.querySelector('.hero-eyebrow');
      expect(eyebrow?.textContent?.trim()).toBe(inventory.hero.eyebrow);

      const title = container.querySelector('.hero-title');
      expect(title?.textContent?.replace(/\s+/g, ' ').trim()).toBe(inventory.hero.title);

      const subtitle = container.querySelector('.hero-subtitle');
      expect(subtitle?.textContent?.trim()).toBe(inventory.hero.subtitle);

      const metaItems = container.querySelectorAll('.hero-meta-item');
      expect(metaItems.length).toBe(inventory.hero.meta.length);

      inventory.hero.meta.forEach((expected, i) => {
        const item = at(metaItems, i, 'metaItems');
        const label = item.querySelector('.hero-meta-label')?.textContent?.trim();
        const value = item.querySelector('.hero-meta-value')?.textContent?.replace(/\s+/g, ' ').trim();
        expect(label).toBe(expected.label);
        expect(value).toBe(expected.value);
      });
    });

    it('labels the chapter time as chapter 3 study time, distinct from the 90-minute exam duration', () => {
      // Arrange
      const expectedLabels = ['対象試験', '第3章の学習時間', '試験配点'];

      // Act
      const { container } = render(<Page />);
      const labels = Array.from(container.querySelectorAll('.hero-meta-label')).map((el) => el.textContent?.trim());

      // Assert: 画面とインベントリが同じ明確なラベルを持つ
      expect(labels).toEqual(expectedLabels);
      expect(inventory.hero.meta.map((m) => m.label)).toEqual(expectedLabels);
    });
  });

  describe('TOC Navigation Inventory', () => {
    it('renders sidebar TOC links matching inventory exactly', () => {
      render(<NavBar />);
      const navLinks = screen.getAllByRole('link');
      expect(navLinks.length).toBe(inventory.tocLinks.length);

      inventory.tocLinks.forEach((expected, i) => {
        const link = at(navLinks, i, 'navLinks');
        expect(link.getAttribute('href')).toBe(expected.href);
        expect(link.getAttribute('data-target')).toBe(expected.dataTarget);
        expect(link.textContent?.replace(/\s+/g, ' ').trim()).toBe(expected.text);
      });
    });

    it('exposes TOC_ITEMS constant synchronized with inventory', () => {
      expect(TOC_ITEMS.length).toBe(inventory.tocLinks.length);
      TOC_ITEMS.forEach((item, i) => {
        const expected = at(inventory.tocLinks, i, 'inventory.tocLinks');
        expect(item.id).toBe(expected.dataTarget);
        expect(item.label).toBe(expected.text);
      });
    });

    it('toggles mobile sidebar open state and handles backdrop click', () => {
      const { container } = render(<NavBar />);
      const toggle = container.querySelector('#sidebarToggle');
      const sidebar = container.querySelector('#sidebar');
      const backdrop = container.querySelector('#sidebarBackdrop');

      expect(sidebar?.classList.contains('open')).toBe(false);
      expect(toggle?.getAttribute('aria-expanded')).toBe('false');

      if (toggle) fireEvent.click(toggle);
      expect(sidebar?.classList.contains('open')).toBe(true);
      expect(toggle?.getAttribute('aria-expanded')).toBe('true');

      if (backdrop) fireEvent.click(backdrop);
      expect(sidebar?.classList.contains('open')).toBe(false);
      expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    });

    it('syncs the active link on TOC click even when the observer does not fire', () => {
      // Arrange
      const { container } = render(<NavBar />);
      const target = at(TOC_ITEMS, TOC_ITEMS.length - 1, 'TOC_ITEMS');
      const link = container.querySelector(`a[data-target="${target.id}"]`);

      // Act
      if (link) fireEvent.click(link);

      // Assert
      expect(link?.classList.contains('active')).toBe(true);
    });

    it('syncs the active link on hashchange and ignores hashes outside the TOC', async () => {
      // Arrange
      const { container } = render(<NavBar />);
      const target = at(TOC_ITEMS, 3, 'TOC_ITEMS');
      const linkOf = (id: string) => container.querySelector(`a[data-target="${id}"]`);

      try {
        // Act
        window.history.replaceState(null, '', `#${encodeURIComponent(target.id)}`);
        window.dispatchEvent(new HashChangeEvent('hashchange'));

        // Assert
        await waitFor(() => expect(linkOf(target.id)?.classList.contains('active')).toBe(true));

        // Act（目次にないハッシュでは現在のアクティブを維持する）
        window.history.replaceState(null, '', '#not-in-toc');
        window.dispatchEvent(new HashChangeEvent('hashchange'));

        // Assert
        expect(linkOf(target.id)?.classList.contains('active')).toBe(true);
      } finally {
        window.history.replaceState(null, '', window.location.pathname);
      }
    });
  });

  describe('Headings Inventory', () => {
    it('renders all headings in exact document order with proper IDs', () => {
      const { container } = render(<Page />);
      const renderedHeadings = Array.from(container.querySelectorAll('.main h2, .main h3, .main h4')).map((el) => ({
        level: el.tagName.toLowerCase(),
        id: el.getAttribute('id'),
        text: el.textContent?.replace(/\s+/g, ' ').trim(),
      }));

      expect(renderedHeadings.length).toBe(inventory.headings.length);
      inventory.headings.forEach((expected, i) => {
        const heading = at(renderedHeadings, i, 'renderedHeadings');
        expect(heading.level).toBe(expected.level);
        expect(heading.id).toBe(expected.id);
        expect(heading.text).toBe(expected.text);
      });
    });
  });

  describe('Tables Inventory', () => {
    it('renders all 10 data tables with correct headers and row contents', () => {
      const { container } = render(<Page />);
      const tables = container.querySelectorAll('table.data-table');
      expect(tables.length).toBe(inventory.tables.length);
      expect(tables.length).toBe(TABLE_CAPTIONS.length);

      inventory.tables.forEach((expectedTable, tableIdx) => {
        const tableEl = at(tables, tableIdx, 'tables');
        // 各表は内容を識別できる caption を先頭に持つ
        const caption = tableEl.querySelector(':scope > caption');
        expect(caption?.textContent?.trim()).toBe(at(TABLE_CAPTIONS, tableIdx, 'TABLE_CAPTIONS'));

        const headers = Array.from(tableEl.querySelectorAll('thead th')).map((th) =>
          th.textContent?.replace(/\s+/g, ' ').trim()
        );
        expect(headers).toEqual(expectedTable.headers);

        const rows = Array.from(tableEl.querySelectorAll('tbody tr')).map((tr) =>
          Array.from(tr.querySelectorAll('td')).map((td) => td.textContent?.replace(/\s+/g, ' ').trim())
        );
        expect(rows.length).toBe(expectedTable.rowCount);
        expect(rows).toEqual(expectedTable.rows);
      });
    });
  });

  describe('Mermaid Diagrams Inventory & Syntax', () => {
    it('defines all 9 diagrams with MERMAID_CONFIG header and matching source logic', () => {
      const diagrams = [
        DIAGRAM_OVERVIEW,
        DIAGRAM_GTAA,
        DIAGRAM_TAA_DESIGN,
        DIAGRAM_TAF_LAYERS,
        DIAGRAM_TAF_SCALING,
        DIAGRAM_APPROACHES,
        DIAGRAM_TDD_CYCLE,
        DIAGRAM_FLOW_MODEL,
        DIAGRAM_CHECKLIST,
      ];
      expect(diagrams.length).toBe(9);

      // Verify each diagram contains the init header with no single quotes
      diagrams.forEach((diag) => {
        expect(diag).toContain('%%{init:');
        expect(diag).not.toMatch(/'/); // fix-mermaid rule: no single quotes
      });

      // インベントリと出現順に 1 対 1 で照合する（MERMAID_CONFIG ヘッダーを除いたソース本体）
      expect(diagrams.length).toBe(inventory.mermaidDiagrams.length);
      diagrams.forEach((diag, i) => {
        expect(diag.startsWith(MERMAID_CONFIG)).toBe(true);
        const expected = inventory.mermaidDiagrams[i];
        if (!expected) {
          throw new Error(`inventory.mermaidDiagrams[${i}] が存在しない`);
        }
        const source = diag.slice(MERMAID_CONFIG.length).trim();
        expect(source).toBe(expected.code.trim());
      });
    });

    it('keeps only the documented build-on relations (SS→DDT→KDT) in the approaches diagram and its lead text', () => {
      // Arrange
      const { container } = render(<Page />);
      const heading = container.querySelector('h2[id="4-tae-314テストケース自動化のさまざまなアプローチ"]');
      const lead = heading?.nextElementSibling?.textContent?.replace(/\s+/g, '') ?? '';

      // Act: 図中の依存矢印（A --> B）を抽出する
      const edges = [...DIAGRAM_APPROACHES.matchAll(/(AP\d)(?:\[[^\]]*\])?\s*-->\s*(AP\d)/g)].map(
        (m) => `${m[1]}->${m[2]}`
      );

      // Assert: Linear Scripting は Capture/Playback に依存しない。DDT・KDT の土台関係は維持する
      expect(edges).toEqual(['AP3->AP4', 'AP4->AP5']);
      expect(lead).not.toContain('前の手法を土台に積み上がる関係として理解すると');
      expect(lead).toContain('LinearScriptingはCapture/Playbackを前提としません');
    });

    it('passes the 9 charts to Mermaid in section order, matching the inventory 1:1', async () => {
      // Arrange: セクション順の図定義
      const definitions = [
        DIAGRAM_OVERVIEW,
        DIAGRAM_GTAA,
        DIAGRAM_TAA_DESIGN,
        DIAGRAM_TAF_LAYERS,
        DIAGRAM_TAF_SCALING,
        DIAGRAM_APPROACHES,
        DIAGRAM_TDD_CYCLE,
        DIAGRAM_FLOW_MODEL,
        DIAGRAM_CHECKLIST,
      ];

      // Act
      render(<Page />);

      // Assert: 描画入力がセクション順の定義と一致し、各本体がインベントリと一致する
      await waitFor(() => expect(renderedDiagrams.length).toBe(inventory.mermaidDiagrams.length));
      expect(renderedDiagrams).toEqual(definitions);
      const renderedSources = renderedDiagrams.map((chart) => chart.slice(MERMAID_CONFIG.length).trim());
      expect(renderedSources).toEqual(inventory.mermaidDiagrams.map((d) => d.code.trim()));
    });

    it('renders all 9 mermaid container elements in the DOM', () => {
      const { container } = render(<Page />);
      const containers = container.querySelectorAll('.mermaid-container');
      expect(containers.length).toBe(9);

      // 各セクション内に、インベントリ通りの図・表・コールアウトがあることを個別に検証する
      const allContainers = Array.from(containers);
      inventory.sections.forEach((expected) => {
        const section = container.querySelector(`[id="${expected.id}"]`)?.closest('section');
        if (!section) {
          throw new Error(`section ${expected.id} が描画されていない`);
        }

        const expectedIds: string[] = [];
        if ('diagramId' in expected && typeof expected.diagramId === 'string') {
          expectedIds.push(expected.diagramId);
        }
        if ('diagramIds' in expected && Array.isArray(expected.diagramIds)) {
          expectedIds.push(...expected.diagramIds);
        }
        const sectionContainers = Array.from(section.querySelectorAll('.mermaid-container'));
        const actualIds = sectionContainers.map((el) => `mermaid-diagram-${allContainers.indexOf(el) + 1}`);
        expect(actualIds).toEqual(expectedIds);

        expect(section.querySelector('table') !== null).toBe(expected.hasTable === true);
        if ('hasCallout' in expected) {
          expect(section.querySelector('.callout') !== null).toBe(expected.hasCallout === true);
        }
      });

      // 第6章: 図を維持しつつ、描画失敗時にも読める判断項目リストを併置する
      const section6 = container.querySelector('[id="6-章全体のまとめtaaを設計する際のチェックリスト"]')?.closest('section');
      if (!section6) {
        throw new Error('第6章の section が描画されていない');
      }
      expect(section6.querySelector('.mermaid-container')).not.toBeNull();
      const decisions = Array.from(section6.querySelectorAll('ol.checklist-decisions > li')).map((li) =>
        li.textContent?.replace(/\s+/g, ' ').trim()
      );
      expect(decisions).toEqual(CHECKLIST_DECISIONS);
      // 各項目が図の判断ノードと同じ文言であること（改行タグ・空白差を除いて照合）
      const squash = (text: string) => text.replace(/<br\/>/g, '').replace(/\s+/g, '');
      CHECKLIST_DECISIONS.forEach((decision) => {
        expect(squash(DIAGRAM_CHECKLIST)).toContain(squash(decision));
      });
    });
  });

  describe('Callouts Inventory', () => {
    it('renders all 5 best practice callouts with exact list items', () => {
      const { container } = render(<Page />);
      const callouts = container.querySelectorAll('.callout');
      expect(callouts.length).toBe(inventory.callouts.length);

      inventory.callouts.forEach((expectedCallout, calloutIdx) => {
        const calloutEl = at(callouts, calloutIdx, 'callouts');
        const label = calloutEl.querySelector('.callout-label')?.textContent?.trim();
        expect(label).toBe(expectedCallout.label);

        const items = Array.from(calloutEl.querySelectorAll('li')).map((li) =>
          li.textContent?.replace(/\s+/g, ' ').trim()
        );
        expect(items).toEqual(expectedCallout.items);
      });
    });
  });

  describe('References Section & Links Security', () => {
    it('renders references table with secure external links', () => {
      const { container } = render(<Page />);
      const refSection = container.querySelector('[id="7-出典参考ソース"]');
      expect(refSection).not.toBeNull();

      const dataTables = container.querySelectorAll('table.data-table');
      const refTable = dataTables[dataTables.length - 1];
      if (!refTable) {
        throw new Error('参考資料の data-table が描画されていない');
      }

      const links = Array.from(refTable.querySelectorAll('a'));
      expect(links.length).toBe(inventory.references.length);

      inventory.references.forEach((expected, i) => {
        const link = at(links, i, 'links');
        expect(link.getAttribute('href')).toBe(expected.url);
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
      });
    });
  });

  describe('ISO/IEC/IEEE 29119-5 Reference Edition', () => {
    it('distinguishes the 2016 edition cited by the syllabus from the current 2024 edition linked', () => {
      // Arrange
      const expected =
        'ISO/IEC/IEEE 29119-5（キーワード駆動テストに関する標準。シラバスが参照するのは2016年版、リンク先は現行の2024年版）';

      // Act
      const { container } = render(<Page />);
      const link = container.querySelector('a[href="https://www.iso.org/standard/87233.html"]');
      const cellText = link?.closest('tr')?.querySelector('td')?.textContent?.replace(/\s+/g, ' ').trim();

      // Assert: 画面・参考文献インベントリ・表インベントリが同じ区別を示す
      expect(cellText).toBe(expected);
      expect(inventory.references.some((r) => r.name === expected)).toBe(true);
      const refRows = inventory.tables[inventory.tables.length - 1]?.rows ?? [];
      expect(refRows.some((row) => row[0] === expected)).toBe(true);
    });
  });

  describe('Footer Inventory', () => {
    it('renders page footer with accurate disclaimer text', () => {
      const { container } = render(<Page />);
      const footer = container.querySelector('.page-footer');
      expect(footer?.textContent?.replace(/\s+/g, ' ').trim()).toBe(inventory.footer);
    });
  });

  describe('Layout & CSS Contracts', () => {
    const cssPath = path.resolve(__dirname, '../../app/istqb-ctal-tae-chapter3-test-automation-architecture/ctal-tae-ch3.css');
    const cssContent = fs.readFileSync(cssPath, 'utf-8');

    it('positions sidebar below the fixed header and dynamic disclaimer banner', () => {
      expect(cssContent).toMatch(/\.sidebar\s*\{[\s\S]*?top:\s*calc\(60px\s*\+\s*var\(--disclaimer-height,\s*0px\)\)/);
      expect(cssContent).toMatch(/\.sidebar\s*\{[\s\S]*?height:\s*calc\(100d?vh\s*-\s*60px\s*-\s*var\(--disclaimer-height,\s*0px\)\)/);
    });

    it('ensures main content offsets past sidebar width with !important to overcome globals.css', () => {
      expect(cssContent).toMatch(/main\.main[\s\S]*?margin-left:\s*var\(--sidebar-width\)\s*!important/);
      expect(cssContent).toMatch(/main\.main[\s\S]*?padding:\s*48px\s*56px\s*90px\s*!important/);
    });

    it('defines scroll-margin-top for anchors accounting for header and disclaimer heights', () => {
      expect(cssContent).toMatch(/\[id\]\s*\{[\s\S]*?scroll-margin-top:\s*calc\(60px\s*\+\s*var\(--disclaimer-height,\s*0px\)/);
    });

    it('adjusts mobile sidebar toggle and main margin appropriately in media query', () => {
      expect(cssContent).toMatch(/\.sidebar-toggle\s*\{[\s\S]*?top:\s*calc\(60px\s*\+\s*var\(--disclaimer-height,\s*0px\)/);
      expect(cssContent).toMatch(/@media\s*\(max-width:\s*980px\)\s*\{[\s\S]*?main\.main[\s\S]*?margin-left:\s*0\s*!important/);
    });
  });

  describe('Hero Design & Globals Reset Contracts', () => {
    const cssPath = path.resolve(__dirname, '../../app/istqb-ctal-tae-chapter3-test-automation-architecture/ctal-tae-ch3.css');
    const cssContent = fs.readFileSync(cssPath, 'utf-8');

    it('overrides desktop !important hero-meta spacing and borders in the 720px mobile layout', () => {
      const mobile = cssContent.match(/@media\s*\(max-width:\s*720px\)\s*\{([\s\S]*?)\n\}/)?.[1] ?? '';

      expect(mobile).toMatch(/\.hero-meta\s*\{[\s\S]*?gap:\s*14px\s*!important/);
      expect(mobile).toMatch(/\.hero-meta-item\s*\{[\s\S]*?border-right:\s*none\s*!important/);
      expect(mobile).toMatch(/\.hero-meta-item\s*\{[\s\S]*?border-bottom:\s*1px solid var\(--border\)\s*!important/);
      expect(mobile).toMatch(/\.hero-meta-item\s*\{[\s\S]*?padding:\s*0 0 14px 0\s*!important/);
      expect(mobile).toMatch(/\.hero-meta-item\s*\{[\s\S]*?margin-right:\s*0\s*!important/);
      expect(mobile).toMatch(/\.hero-meta-item:last-child\s*\{[\s\S]*?border-bottom:\s*none\s*!important/);
      expect(mobile).toMatch(/\.hero-meta-item:last-child\s*\{[\s\S]*?padding-bottom:\s*0\s*!important/);
    });

    it('resets globals.css pseudo-elements on hero and eyebrow', () => {
      expect(cssContent).toMatch(/\.hero::after\s*\{[\s\S]*?content:\s*none\s*!important/);
      expect(cssContent).toMatch(/\.hero-eyebrow::before\s*\{[\s\S]*?content:\s*none\s*!important/);
    });

    it('matches original hero box styles including 3-side padding and gradient background', () => {
      expect(cssContent).toMatch(/\.hero\s*\{[\s\S]*?padding:\s*40px\s*44px\s*32px\s*!important/);
      expect(cssContent).toMatch(/\.hero\s*\{[\s\S]*?border-radius:\s*20px\s*!important/);
    });

    it('preserves hero eyebrow typography and removes mono font or wide letter spacing', () => {
      expect(cssContent).toMatch(/\.hero-eyebrow\s*\{[\s\S]*?font-family:\s*inherit/);
      expect(cssContent).toMatch(/\.hero-eyebrow\s*\{[\s\S]*?letter-spacing:\s*normal/);
    });

    it('ensures hero title and accent styles are explicitly scoped and immune to globals.css', () => {
      expect(cssContent).toMatch(/\.hero\s*h1[\s\S]*?font-size:\s*30px\s*!important/);
      expect(cssContent).toMatch(/\.hero\s*h1[\s\S]*?line-height:\s*1\.4\s*!important/);
      expect(cssContent).toMatch(/\.hero\s*h1\s*span[\s\S]*?color:\s*var\(--accent\)\s*!important/);
    });

    it('preserves hero meta grid styles', () => {
      expect(cssContent).toMatch(/\.hero-meta\s*\{[\s\S]*?border-top:\s*1px\s*solid\s*var\(--border\)/);
      expect(cssContent).toMatch(/\.hero-meta-item\s*\{[\s\S]*?border-right:\s*1px\s*solid\s*var\(--border\)/);
    });
  });
});

