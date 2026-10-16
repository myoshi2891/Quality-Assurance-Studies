import { afterEach, beforeEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter2-preparing-for-test-automation.json';
import Page from '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/page';
import NavBar, { TOC_LINKS } from '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/NavBar';
import {
  DIAGRAM_POSITION,
  DIAGRAM_TESTABILITY,
  DIAGRAM_ENVS,
  DIAGRAM_SUT,
  DIAGRAM_TOOLS,
  DIAGRAM_SUMMARY,
} from '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/diagrams';

// 空白差を吸収して本文を照合する
const normalize = (text: string | null | undefined) => text?.replace(/\s+/g, ' ').trim();

// 空白をすべて除いて照合する（strong・br の境界で生じる空白差を無視する）
const squash = (text: string | null | undefined) => text?.replace(/\s+/g, '');

// 各実践コールアウトの項目本文を出現順に取り出す
const practiceItems = (callout: Element | undefined) =>
  Array.from(callout?.querySelectorAll('li') ?? []).map((li) => normalize(li.textContent));

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

describe('CTAL-TAE Chapter 2 Page Migration Spec', () => {
  describe('Hero Section Inventory', () => {
    it('renders hero eyebrow, title, subtitle, and 3 meta items matching inventory', () => {
      const { container } = render(<Page />);
      const eyebrow = container.querySelector('.hero-eyebrow');
      expect(eyebrow?.textContent?.trim()).toBe(inventory.hero.eyebrow);

      const title = container.querySelector('.hero-title');
      expect(squash(title?.textContent)).toBe(squash(inventory.hero.title));
      expect(title?.querySelector('br')).not.toBeNull();

      const subtitle = container.querySelector('.hero-subtitle');
      expect(subtitle?.textContent?.trim()).toBe(inventory.hero.subtitle);

      const metaItems = container.querySelectorAll('.hero-meta-item');
      expect(metaItems.length).toBe(inventory.hero.meta.length);

      inventory.hero.meta.forEach((expected, i) => {
        const item = metaItems[i];
        expect(item.querySelector('.hero-meta-label')?.textContent?.trim()).toBe(expected.label);
        expect(item.querySelector('.hero-meta-value')?.textContent?.trim()).toBe(expected.value);
      });
    });
  });

  describe('Sidebar Navigation (NavBar) Inventory', () => {
    it('renders sidebar brand, subtitle, and all navigation links matching inventory', () => {
      const { container } = render(<NavBar />);
      const brand = container.querySelector('.sidebar-brand');
      expect(brand?.textContent?.trim()).toBe(inventory.sidebar.brand);

      const sub = container.querySelector('.sidebar-sub');
      expect(sub?.textContent?.trim()).toBe(inventory.sidebar.sub);

      const topLinks = container.querySelectorAll('.sidebar > nav > ul > li > a');
      expect(topLinks.length).toBe(inventory.sidebar.links.length);

      inventory.sidebar.links.forEach((expected, i) => {
        const link = topLinks[i];
        expect(link.getAttribute('href')).toBe(expected.href);
        expect(link.getAttribute('data-target')).toBe(expected.dataTarget);
        expect(link.textContent?.trim()).toBe(expected.text);

        if (expected.children) {
          const parentLi = link.parentElement;
          const subLinks = parentLi?.querySelectorAll('ul a') ?? [];
          expect(subLinks.length).toBe(expected.children.length);
          expected.children.forEach((childExpected, j) => {
            const subLink = subLinks[j];
            expect(subLink.getAttribute('href')).toBe(childExpected.href);
            expect(subLink.getAttribute('data-target')).toBe(childExpected.dataTarget);
            expect(subLink.textContent?.trim()).toBe(childExpected.text);
          });
        }
      });
    });

    it('exposes TOC_LINKS constant synchronized with inventory', () => {
      expect(TOC_LINKS.length).toBe(inventory.sidebar.links.length);
      TOC_LINKS.forEach((item, i) => {
        expect(item.href).toBe(inventory.sidebar.links[i].href);
        expect(item.text).toBe(inventory.sidebar.links[i].text);
      });
    });

    it('handles mobile sidebar toggle button', () => {
      const { container } = render(<NavBar />);
      const toggleBtn = container.querySelector('#sidebarToggle');
      const sidebar = container.querySelector('#sidebar');
      // 要素の欠落で開閉検証が黙ってスキップされないよう、先に存在を確定させる
      if (!toggleBtn) throw new Error('#sidebarToggle が描画されていない');
      if (!sidebar) throw new Error('#sidebar が描画されていない');
      expect(sidebar.classList.contains('open')).toBe(false);

      fireEvent.click(toggleBtn);
      expect(sidebar.classList.contains('open')).toBe(true);
      fireEvent.click(toggleBtn);
      expect(sidebar.classList.contains('open')).toBe(false);
    });

    it('exposes open state and controlled target on the sidebar toggle button', () => {
      // Arrange
      const { container } = render(<NavBar />);
      const toggleBtn = container.querySelector('#sidebarToggle');
      if (!toggleBtn) throw new Error('#sidebarToggle が描画されていない');

      // Assert: 初期は閉じている
      expect(toggleBtn.getAttribute('aria-controls')).toBe('sidebar');
      expect(toggleBtn.getAttribute('aria-expanded')).toBe('false');

      // Act / Assert: 開閉に追従する
      fireEvent.click(toggleBtn);
      expect(toggleBtn.getAttribute('aria-expanded')).toBe('true');
      fireEvent.click(toggleBtn);
      expect(toggleBtn.getAttribute('aria-expanded')).toBe('false');
    });

    it('declares the sidebar toggle as type="button" so it never submits an enclosing form', () => {
      // Arrange
      const { container } = render(<NavBar />);
      const toggleBtn = container.querySelector('#sidebarToggle');
      if (!toggleBtn) throw new Error('#sidebarToggle が描画されていない');

      // Assert: 既定の type="submit" に依存しない
      expect(toggleBtn.getAttribute('type')).toBe('button');
    });

    it('renders without throwing when IntersectionObserver is unavailable', () => {
      // Arrange: IntersectionObserver 未対応環境を再現する（afterEach で復元される）
      Reflect.deleteProperty(window, 'IntersectionObserver');

      // Act
      const renderNav = () => render(<NavBar />);

      // Assert: 例外なく描画され、初期アクティブリンクが維持される
      expect(renderNav).not.toThrow();
      const active = document.querySelector('#sidebar a.active');
      expect(active?.getAttribute('data-target')).toBe('sec-0');
    });

    it('keeps a clicked child heading active even when its parent section is observed afterwards', () => {
      // Arrange: 観測コールバックを捕捉し、スクロールに伴う交差通知を手動で発火できるようにする
      let notify: IntersectionObserverCallback = () => undefined;
      window.IntersectionObserver = mock((callback: IntersectionObserverCallback) => {
        notify = callback;
        return { observe: () => null, unobserve: () => null, disconnect: () => null };
      }) as unknown as typeof IntersectionObserver;
      const { container } = render(<Page />);
      const intersect = (id: string) => {
        const target = container.querySelector(`#${id}`);
        if (!target) throw new Error(`#${id} が描画されていない`);
        const entry = { target, isIntersecting: true } as unknown as IntersectionObserverEntry;
        act(() => notify([entry], {} as IntersectionObserver));
      };
      const activeId = () => container.querySelector('#sidebar a.active')?.getAttribute('data-target');
      const child = container.querySelector('#sidebar a[href="#sec-1-1"]');
      if (!child) throw new Error('子見出しのリンクが描画されていない');

      // Act / Assert: クリックした子見出しがアクティブになる
      fireEvent.click(child);
      expect(activeId()).toBe('sec-1-1');

      // Act / Assert: 子見出しを含む親 section の交差通知では上書きされない
      intersect('sec-1');
      expect(activeId()).toBe('sec-1-1');

      // Act / Assert: 別の節へスクロールすれば、通常の追従に戻る
      intersect('sec-2');
      expect(activeId()).toBe('sec-2');
      intersect('sec-1');
      expect(activeId()).toBe('sec-1');
    });

    it('moves focus to the target section for parent and child TOC links at mobile width', () => {
      // Arrange: 900px 以下のモバイル幅を再現する
      const originalWidth = window.innerWidth;
      Object.defineProperty(window, 'innerWidth', { value: 800, configurable: true, writable: true });
      try {
        const { container } = render(<Page />);
        const toggleBtn = container.querySelector('#sidebarToggle');
        const sidebar = container.querySelector('#sidebar');
        if (!toggleBtn || !sidebar) throw new Error('目次が描画されていない');

        for (const id of ['sec-1', 'sec-1-1']) {
          const link = container.querySelector<HTMLAnchorElement>(`#sidebar a[href="#${id}"]`);
          const target = container.querySelector(`#${id}`);
          if (!link || !target) throw new Error(`#${id} のリンク・リンク先が描画されていない`);

          // Act
          fireEvent.click(toggleBtn);
          link.focus();
          fireEvent.click(link);

          // Assert: ドロワーは閉じ、フォーカスは非表示のリンクではなくリンク先にある
          expect(sidebar.classList.contains('open')).toBe(false);
          expect(document.activeElement === target).toBe(true);
        }
      } finally {
        Object.defineProperty(window, 'innerWidth', { value: originalWidth, configurable: true, writable: true });
      }
    });
  });

  describe('Section 0 (Positioning & Learning Objectives) Inventory', () => {
    it('renders heading, intro, ordered list, diagram, learning objectives table, and keywords', () => {
      const { container } = render(<Page />);
      const sec0 = container.querySelector('#sec-0');
      expect(sec0).not.toBeNull();

      const h2 = sec0?.querySelector('h2');
      expect(h2?.textContent?.trim()).toBe(inventory.sections.sec0.heading);

      const intro = sec0?.querySelector('p');
      expect(squash(intro?.textContent)).toBe(squash(inventory.sections.sec0.intro));

      const olItems = sec0?.querySelectorAll('ol > li') ?? [];
      expect(olItems.length).toBe(inventory.sections.sec0.orderedItems.length);
      inventory.sections.sec0.orderedItems.forEach((expected, i) => {
        expect(olItems[i].textContent?.replace(/\s+/g, ' ').trim()).toBe(
          expected.replace(/\s+/g, ' ').trim()
        );
      });

      const loTitle = sec0?.querySelectorAll('h3')[0];
      expect(loTitle?.textContent?.trim()).toBe(inventory.sections.sec0.loHeading);

      const rows = sec0?.querySelectorAll('table tbody tr') ?? [];
      expect(rows.length).toBe(inventory.sections.sec0.learningObjectives.length);
      inventory.sections.sec0.learningObjectives.forEach((expected, i) => {
        const cells = rows[i].querySelectorAll('td');
        expect(cells[0].textContent?.trim()).toBe(expected.id);
        expect(cells[1].textContent?.trim()).toBe(expected.level);
        expect(cells[2].textContent?.trim()).toBe(expected.content);
      });

      const kwTitle = sec0?.querySelectorAll('h3')[1];
      expect(kwTitle?.textContent?.trim()).toBe(inventory.sections.sec0.keywordsHeading);

      const kwItems = sec0?.querySelectorAll('ul li') ?? [];
      expect(kwItems.length).toBe(inventory.sections.sec0.keywords.length);
      inventory.sections.sec0.keywords.forEach((expected, i) => {
        expect(kwItems[i].textContent?.trim()).toBe(expected);
      });
    });
  });

  describe('Section 1 (Infrastructure & Testability) Inventory', () => {
    it('renders 1.1 testability, quote callout, diagram, 1.2 3 aspects table & callout, 1.3 components table & callout', () => {
      const { container } = render(<Page />);
      const sec1 = container.querySelector('#sec-1');
      expect(sec1).not.toBeNull();

      expect(sec1?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.sec1.heading);

      // 1.1
      const sec1_1 = sec1?.querySelector('#sec-1-1');
      expect(sec1_1?.textContent?.trim()).toBe(inventory.sections.sec1.sec1_1.heading);
      const calloutSource = sec1?.querySelector('.callout-source');
      expect(calloutSource?.textContent?.trim()).toBe(inventory.sections.sec1.sec1_1.calloutSource);
      // 1.1 の本文 2 段落と 1.3 の導入文（callout-source を除く section 直下の段落）
      const sec1Paragraphs = Array.from(sec1?.children ?? [])
        .filter((el) => el.tagName === 'P' && !el.classList.contains('callout-source'))
        .map((el) => squash(el.textContent));
      expect(sec1Paragraphs).toEqual(
        [
          inventory.sections.sec1.sec1_1.intro1,
          inventory.sections.sec1.sec1_1.intro2,
          inventory.sections.sec1.sec1_3.intro,
        ].map(squash)
      );

      // 1.2
      const sec1_2 = sec1?.querySelector('#sec-1-2');
      expect(sec1_2?.textContent?.trim()).toBe(inventory.sections.sec1.sec1_2.heading);
      const tables = sec1?.querySelectorAll('table') ?? [];
      expect(tables.length).toBe(2);

      const aspectRows = tables[0].querySelectorAll('tbody tr');
      expect(aspectRows.length).toBe(inventory.sections.sec1.sec1_2.aspects.length);
      inventory.sections.sec1.sec1_2.aspects.forEach((expected, i) => {
        const cells = aspectRows[i].querySelectorAll('td');
        expect(cells[0].textContent?.trim()).toBe(expected.aspect);
        expect(cells[1].textContent?.trim()).toBe(expected.description);
        expect(cells[2].textContent?.trim()).toBe(expected.example);
      });

      // 1.3
      const sec1_3 = sec1?.querySelector('#sec-1-3');
      expect(sec1_3?.textContent?.trim()).toBe(inventory.sections.sec1.sec1_3.heading);

      const compRows = tables[1].querySelectorAll('tbody tr');
      expect(compRows.length).toBe(inventory.sections.sec1.sec1_3.components.length);
      inventory.sections.sec1.sec1_3.components.forEach((expected, i) => {
        const cells = compRows[i].querySelectorAll('td');
        expect(cells[0].textContent?.replace(/\s+/g, ' ').trim()).toBe(
          expected.name.replace(/\s+/g, ' ').trim()
        );
        expect(cells[1].textContent?.trim()).toBe(expected.summary);
        expect(cells[2].textContent?.trim()).toBe(expected.configuration);
      });

      const practiceCallouts = Array.from(sec1?.querySelectorAll('.callout-practice') ?? []);
      expect(practiceCallouts.length).toBe(2);
      expect(practiceItems(practiceCallouts[0])).toEqual(inventory.sections.sec1.sec1_2.practices);
      expect(practiceItems(practiceCallouts[1])).toEqual(inventory.sections.sec1.sec1_3.practices);
    });
  });

  describe('Section 2 (Test Environments) Inventory', () => {
    it('renders heading, intro, diagram, legend note, environments table, and best practices', () => {
      const { container } = render(<Page />);
      const sec2 = container.querySelector('#sec-2');
      expect(sec2).not.toBeNull();

      expect(sec2?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.sec2.heading);
      expect(squash(sec2?.querySelector('p:not(.legend-note)')?.textContent)).toBe(
        squash(inventory.sections.sec2.intro)
      );
      expect(sec2?.querySelector('.legend-note')?.textContent?.trim()).toBe(
        inventory.sections.sec2.legendNote
      );

      const sec2_1 = sec2?.querySelector('#sec-2-1');
      expect(sec2_1?.textContent?.trim()).toBe(inventory.sections.sec2.sec2_1.heading);

      const rows = sec2?.querySelectorAll('table tbody tr') ?? [];
      expect(rows.length).toBe(inventory.sections.sec2.sec2_1.environments.length);
      inventory.sections.sec2.sec2_1.environments.forEach((expected, i) => {
        const cells = rows[i].querySelectorAll('td');
        expect(cells[0].textContent?.trim()).toBe(expected.environment);
        expect(cells[1].textContent?.trim()).toBe(expected.purpose);
        expect(cells[2].textContent?.trim()).toBe(expected.tests);
        expect(cells[3].textContent?.trim()).toBe(expected.notes);
      });

      const practices = Array.from(sec2?.querySelectorAll('.callout-practice li') ?? []).map((li) =>
        normalize(li.textContent)
      );
      expect(practices).toEqual(inventory.sections.sec2.sec2_1.practices);
    });
  });

  describe('Section 3 (SUT Analysis & Tool Evaluation) Inventory', () => {
    it('renders 3.1 SUT analysis, quote, 8 perspectives table, 3.2 tool evaluation comparison table, and 7 tech requirements', () => {
      const { container } = render(<Page />);
      const sec3 = container.querySelector('#sec-3');
      expect(sec3).not.toBeNull();

      expect(sec3?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.sec3.heading);

      // 3.1
      const sec3_1 = sec3?.querySelector('#sec-3-1');
      expect(sec3_1?.textContent?.trim()).toBe(inventory.sections.sec3.sec3_1.heading);
      expect(sec3?.querySelector('blockquote')?.textContent?.trim()).toBe(
        inventory.sections.sec3.sec3_1.quote
      );

      // 小見出し（h4）と本文段落・凡例をインベントリと 1 対 1 で照合する
      const h4s = Array.from(sec3?.querySelectorAll('h4') ?? []).map((el) => el.textContent?.trim());
      expect(h4s).toEqual([
        inventory.sections.sec3.sec3_1.perspectivesHeading,
        inventory.sections.sec3.sec3_2.comparisonHeading,
        inventory.sections.sec3.sec3_2.techRequirementsHeading,
      ]);
      const sec3Paragraphs = Array.from(sec3?.children ?? [])
        .filter((el) => el.tagName === 'P')
        .map((el) => squash(el.textContent));
      expect(sec3Paragraphs).toEqual(
        [
          inventory.sections.sec3.sec3_1.intro,
          inventory.sections.sec3.sec3_2.intro,
          inventory.sections.sec3.sec3_2.comparisonIntro,
          inventory.sections.sec3.sec3_2.legendNote,
        ].map(squash)
      );

      const tables = sec3?.querySelectorAll('table') ?? [];
      expect(tables.length).toBe(3);

      // SUT 8 perspectives
      const pRows = tables[0].querySelectorAll('tbody tr');
      expect(pRows.length).toBe(inventory.sections.sec3.sec3_1.perspectives.length);
      inventory.sections.sec3.sec3_1.perspectives.forEach((expected, i) => {
        const cells = pRows[i].querySelectorAll('td');
        expect(cells[0].textContent?.trim()).toBe(expected.number);
        expect(cells[1].textContent?.trim()).toBe(expected.aspect);
        expect(cells[2].textContent?.trim()).toBe(expected.question);
      });

      // 3.2 Comparison table
      const sec3_2 = sec3?.querySelector('#sec-3-2');
      expect(sec3_2?.textContent?.trim()).toBe(inventory.sections.sec3.sec3_2.heading);
      const compRows = tables[1].querySelectorAll('tbody tr');
      expect(compRows.length).toBe(inventory.sections.sec3.sec3_2.comparisonRows.length);
      inventory.sections.sec3.sec3_2.comparisonRows.forEach((expected, i) => {
        // 要件名は行見出し（th scope="row"）、残りはデータセル
        const rowHeader = compRows[i].querySelector(':scope > th');
        expect(rowHeader?.getAttribute('scope')).toBe('row');
        expect(rowHeader?.textContent?.trim()).toBe(expected.requirement);
        const cells = compRows[i].querySelectorAll('td');
        expect(cells.length).toBe(4);
        expect(cells[0].textContent?.trim()).toBe(expected.priority);
        expect(cells[1].textContent?.trim()).toBe(expected.toolA);
        expect(cells[2].textContent?.trim()).toBe(expected.toolB);
        expect(cells[3].textContent?.trim()).toBe(expected.toolC);
      });

      // Tech requirements table
      const techRows = tables[2].querySelectorAll('tbody tr');
      expect(techRows.length).toBe(inventory.sections.sec3.sec3_2.techRequirements.length);
      inventory.sections.sec3.sec3_2.techRequirements.forEach((expected, i) => {
        const cells = techRows[i].querySelectorAll('td');
        expect(cells[0].textContent?.trim()).toBe(expected.number);
        expect(cells[1].textContent?.trim()).toBe(expected.requirement);
        expect(cells[2].textContent?.trim()).toBe(expected.checkpoint);
      });

      const practiceCallouts = Array.from(sec3?.querySelectorAll('.callout-practice') ?? []);
      expect(practiceCallouts.length).toBe(2);
      expect(practiceItems(practiceCallouts[0])).toEqual(inventory.sections.sec3.sec3_1.practices);
      expect(practiceItems(practiceCallouts[1])).toEqual(inventory.sections.sec3.sec3_2.practices);
    });
  });

  describe('Section 4 (Summary & Interactive Checklist) Inventory', () => {
    it('renders summary diagram, interactive checklist with progress bar and counter', () => {
      const { container } = render(<Page />);
      const sec4 = container.querySelector('#sec-4');
      expect(sec4).not.toBeNull();

      expect(sec4?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.sec4.heading);

      expect(sec4?.querySelector('h3')?.textContent?.trim()).toBe(inventory.sections.sec4.checklistHeading);

      const checkboxes = sec4?.querySelectorAll('input[type="checkbox"]') ?? [];
      expect(checkboxes.length).toBe(inventory.sections.sec4.checklistItems.length);

      // 各チェック項目の label 本文をインベントリと 1 対 1 で照合する
      const labels = Array.from(sec4?.querySelectorAll('.checklist-card label') ?? []).map((el) =>
        normalize(el.textContent)
      );
      expect(labels).toEqual(inventory.sections.sec4.checklistItems);

      const progressCount = sec4?.querySelector('.cp-count');
      expect(progressCount?.textContent?.trim()).toBe('0 / 7 完了');

      // 先頭チェックボックスと進捗バーの存在を確定させてから無条件に操作する
      const firstCheckbox = checkboxes[0];
      if (!firstCheckbox) throw new Error('チェックボックスが描画されていない');
      const fill = sec4?.querySelector<HTMLElement>('.cp-bar-fill');
      if (!fill) throw new Error('.cp-bar-fill が描画されていない');

      fireEvent.click(firstCheckbox);
      expect(progressCount?.textContent?.trim()).toBe('1 / 7 完了');
      expect(fill.style.width).toBe('14%');

      fireEvent.click(firstCheckbox);
      expect(progressCount?.textContent?.trim()).toBe('0 / 7 完了');
    });
  });

  describe('Section 5 (References) and Footer Inventory', () => {
    it('renders 3 reference cards with external links and footer disclaimer', () => {
      const { container } = render(<Page />);
      const sec5 = container.querySelector('#sec-5');
      expect(sec5).not.toBeNull();

      expect(sec5?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.sec5.heading);
      expect(sec5?.querySelector('p')?.textContent?.trim()).toBe(inventory.sections.sec5.intro);

      const refCards = sec5?.querySelectorAll('.ref-card') ?? [];
      expect(refCards.length).toBe(inventory.sections.sec5.referenceCards.length);

      inventory.sections.sec5.referenceCards.forEach((expected, i) => {
        const card = refCards[i];
        const titleEl = card.querySelector('.ref-card-title');
        expect(titleEl?.textContent?.replace(/\s+/g, '').trim()).toBe(
          expected.title.replace(/\s+/g, '').trim()
        );
        const link = card.querySelector('a');
        expect(link?.getAttribute('href')).toBe(expected.url);
        expect(link?.textContent?.trim()).toBe(expected.linkText);
        expect(link?.getAttribute('target')).toBe('_blank');
        expect(link?.getAttribute('rel')).toContain('noopener');
      });

      expect(sec5?.querySelector('.ref-note')?.textContent?.trim()).toBe(
        inventory.sections.sec5.refNote
      );

      const footer = container.querySelector('.page-footer');
      // 既存の案内文を維持しつつ、著者と ISTQB® を出典・著作権者として示す帰属表示を併記する
      const footerParagraphs = Array.from(footer?.querySelectorAll('p') ?? []).map((p) =>
        p.textContent?.replace(/\s+/g, ' ').trim()
      );
      expect(footerParagraphs).toEqual([inventory.footer.disclaimer, inventory.footer.text]);
    });
  });

  describe('Diagram Definitions & Theme Contract', () => {
    it('defines all 6 diagrams with MERMAID_CONFIG and without single quotes in init', () => {
      const diagrams = [
        DIAGRAM_POSITION,
        DIAGRAM_TESTABILITY,
        DIAGRAM_ENVS,
        DIAGRAM_SUT,
        DIAGRAM_TOOLS,
        DIAGRAM_SUMMARY,
      ];

      diagrams.forEach((diag) => {
        expect(diag).toContain('%%{init:');
        expect(diag).not.toMatch(/%%\{init:[^}]*'[^}]*\}%%/);
        expect(diag).toContain('"theme": "base"');
      });
    });

    it('renders every inventory diagram on the page and passes all 6 definitions to mermaid', async () => {
      // Arrange: インベントリ内の diagramId を出現順に再帰収集する
      const collectDiagramIds = (node: unknown): string[] => {
        if (Array.isArray(node)) return node.flatMap(collectDiagramIds);
        if (typeof node !== 'object' || node === null) return [];
        return Object.entries(node).flatMap(([key, value]) =>
          key === 'diagramId' && typeof value === 'string' ? [value] : collectDiagramIds(value)
        );
      };
      const inventoryDiagramIds = collectDiagramIds(inventory);
      const definitions = [
        DIAGRAM_POSITION,
        DIAGRAM_TESTABILITY,
        DIAGRAM_ENVS,
        DIAGRAM_SUT,
        DIAGRAM_TOOLS,
        DIAGRAM_SUMMARY,
      ];

      // Act
      const { container } = render(<Page />);

      // Assert
      expect(inventoryDiagramIds.length).toBe(6);
      expect(container.querySelectorAll('.mermaid-container').length).toBe(inventoryDiagramIds.length);
      const containerIds = Array.from(container.querySelectorAll('.mermaid-container')).map((el) => el.id);
      expect(containerIds).toEqual(inventoryDiagramIds);
      await waitFor(() => expect(renderedDiagrams.length).toBe(definitions.length));
      definitions.forEach((def) => {
        expect(renderedDiagrams).toContain(def);
      });
    });
  });

  describe('Table Accessible Names', () => {
    it('labels each of the 7 tables via aria-labelledby pointing to its own heading', () => {
      // Arrange
      const expectedHeadings = [
        '学習目標（Learning Objectives）',
        '1.2 テスト容易性を支える3つの設計側面',
        '1.3 テスト容易性を実現するための構成要素',
        '2.1 各環境の特徴と自動化の役割',
        '分析で検討すべき8つの観点',
        '比較表（Comparison Table）の作り方',
        '評価すべき7つの技術要件',
      ];

      // Act
      const { container } = render(<Page />);
      const tables = Array.from(container.querySelectorAll('table'));

      // Assert: 表ごとに一意の見出しを参照し、その見出し文言で区別できる
      expect(tables.length).toBe(expectedHeadings.length);
      const ids = tables.map((t) => t.getAttribute('aria-labelledby') ?? '');
      expect(new Set(ids).size).toBe(expectedHeadings.length);
      const labels = ids.map((id) => {
        const heading = container.querySelector(`[id="${id}"]`);
        expect(heading?.tagName).toMatch(/^H[34]$/);
        return heading?.textContent?.trim();
      });
      expect(labels).toEqual(expectedHeadings);
    });
  });

  describe('CSS Scoping and Resets Contract', () => {
    it('contains page css with globals resets for .hero, table, and .mermaid-wrapper', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/ctal-tae-ch2.css'
      );
      expect(fs.existsSync(cssPath)).toBe(true);
      const css = fs.readFileSync(cssPath, 'utf-8');

      expect(css).toContain('.ctal-tae-ch2-page');
      expect(css).toContain('.ctal-tae-ch2-page .hero');
      expect(css).toContain('.ctal-tae-ch2-page .mermaid-wrapper');
      expect(css).toContain('.ctal-tae-ch2-page table');
      expect(css).toContain('!important');
    });

    it('ensures sidebar respects disclaimer height and scroll-margin includes disclaimer offset', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/ctal-tae-ch2.css'
      );
      const css = fs.readFileSync(cssPath, 'utf-8');

      // Sidebar must offset by 60px header + disclaimer height
      expect(css).toContain('top: calc(60px + var(--disclaimer-height, 0px))');
      expect(css).toContain('height: calc(100dvh - 60px - var(--disclaimer-height, 0px))');
      // Scroll-margin-top must account for header + disclaimer height
      expect(css).toContain('scroll-margin-top: calc(60px + var(--disclaimer-height, 0px) + 24px)');
      // Mermaid nodes must have light background and contrast styling
      expect(css).toContain('.mermaid-wrapper .node rect');
      expect(css).toContain('.mermaid-wrapper .edgeLabels rect');
    });

    it('ensures all diagrams define light theme mainBkg and classDef default to prevent dark fills', () => {
      expect(DIAGRAM_TESTABILITY).toContain('"mainBkg": "#ffffff"');
      expect(DIAGRAM_TESTABILITY).toContain('"nodeTextColor": "#1b2333"');
      expect(DIAGRAM_TESTABILITY).toContain('classDef default fill:#ffffff,stroke:#c7d0e0,color:#1b2333');
      // Verify specific previously-blackout nodes have styling classes
      expect(DIAGRAM_TESTABILITY).toContain('class TB_F1,TB_F2');
      expect(DIAGRAM_TESTABILITY).toContain('class TB_T');
      expect(DIAGRAM_SUT).toContain('class S_Start');
      expect(DIAGRAM_TOOLS).toContain('class R_Tool');
    });

    it('keeps the mobile toggle above the open sidebar without overlapping its text, and clears main offset', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/ctal-tae-ch2.css'
      );
      const css = fs.readFileSync(cssPath, 'utf-8');
      const mobile = css.match(/@media\s*\(max-width:\s*900px\)\s*\{([\s\S]*?)\n\}/)?.[1] ?? '';
      const zIndexOf = (selector: string) =>
        Number(mobile.match(new RegExp(`${selector}\\s*\\{[^}]*?z-index:\\s*(\\d+)`))?.[1] ?? NaN);

      // トグルが開いたサイドバーより前面にあり、同じボタンで閉じられる
      expect(zIndexOf('\\.ctal-tae-ch2-page \\.sidebar-toggle')).toBeGreaterThan(
        zIndexOf('\\.ctal-tae-ch2-page \\.sidebar')
      );
      // トグル（上端 14px + 高さ 42px）の下からサイドバーの文字が始まる
      expect(mobile).toMatch(/\.ctal-tae-ch2-page \.sidebar\s*\{[^}]*padding-top:\s*72px/);
      // 基本指定の main.main（詳細度が高い）もモバイルで左余白 0 に上書きする
      expect(mobile).toMatch(
        /\.ctal-tae-ch2-page main\.main,\s*\.ctal-tae-ch2-page \.main\s*\{[^}]*margin-left:\s*0\s*!important/
      );
    });

    it('defines --text-faint dark enough for 4.5:1 contrast on white and the page backgrounds', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/ctal-tae-ch2.css'
      );
      const css = fs.readFileSync(cssPath, 'utf-8');
      const hex = css.match(/--text-faint:\s*(#[0-9a-fA-F]{6})/)?.[1] ?? '';
      // WCAG 2.x の相対輝度とコントラスト比
      const luminance = (h: string) => {
        const [r, g, b] = [1, 3, 5].map((i) => {
          const c = parseInt(h.slice(i, i + 2), 16) / 255;
          return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * (r ?? 0) + 0.7152 * (g ?? 0) + 0.0722 * (b ?? 0);
      };
      const contrast = (a: string, b: string) => {
        const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
        return ((hi ?? 0) + 0.05) / ((lo ?? 0) + 0.05);
      };

      expect(hex).toMatch(/^#[0-9a-fA-F]{6}$/);
      // 白（surface）・ページ背景（bg）・ヒーロー背景・surface-alt
      ['#ffffff', '#f6f7fb', '#eef3ff', '#eef1f8'].forEach((bg) => {
        expect(contrast(hex, bg)).toBeGreaterThanOrEqual(4.5);
      });
    });

    it('styles the comparison row headers like body cells', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/ctal-tae-ch2.css'
      );
      const css = fs.readFileSync(cssPath, 'utf-8');

      expect(css).toMatch(/\.ctal-tae-ch2-page tbody td,\s*\.ctal-tae-ch2-page tbody th\s*\{/);
      expect(css).toMatch(/\.ctal-tae-ch2-page tbody th\s*\{[^}]*font-weight:\s*400\s*!important/);
    });

    it('resets globals dark scrollbar track to transparent with light theme thumb', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/ctal-tae-ch2.css'
      );
      const css = fs.readFileSync(cssPath, 'utf-8');

      expect(css).toContain('*::-webkit-scrollbar-track');
      expect(css).toMatch(/\*::-webkit-scrollbar-track\s*\{[^}]*background:\s*transparent\s*!important/);
      expect(css).toContain('*::-webkit-scrollbar-thumb');
    });

    it('keeps the white label of the root node by excluding .root from the dark label color rule', () => {
      // Arrange
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/ctal-tae-ch2.css'
      );
      const css = fs.readFileSync(cssPath, 'utf-8');

      // Act: 濃い文字色（#1b2333）を指定するルールのセレクター群を取り出す
      const rule = css.match(/([^{}]+)\{\s*color:\s*#1b2333;\s*fill:\s*#1b2333;\s*\}/);
      const selectors = (rule?.[1] ?? '').split(',').map((s) => s.trim()).filter((s) => s.length > 0);

      // Assert: 全セレクターが .root を除外し、classDef root の白文字を上書きしない
      expect(selectors.length).toBeGreaterThan(0);
      selectors.forEach((selector) => {
        expect(selector).toContain('.node:not(.root)');
      });
    });

    it('renders root node paragraphs in white so the page-level p color does not override classDef root', () => {
      // Arrange
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter2-preparing-for-test-automation/ctal-tae-ch2.css'
      );
      const css = fs.readFileSync(cssPath, 'utf-8');

      // Act: .node.root 内の p に白文字を指定するルールを取り出す
      const rule = css.match(/\.mermaid-wrapper \.node\.root[^{}]*\bp\s*\{([^}]*)\}/);

      // Assert: ページ全体の p { color: var(--text) } より詳細度の高いセレクターで白文字を指定する
      expect(rule).not.toBeNull();
      expect(rule?.[1] ?? '').toMatch(/color:\s*#ffffff/);
    });
  });
});
