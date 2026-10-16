import { afterEach, beforeEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/istqb-ctal-tae-chapter1-introduction-and-objectives.json';
import Page from '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/page';
import NavBar, { TOC_GROUPS } from '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/NavBar';
import {
  DIAGRAM_ROADMAP,
  DIAGRAM_PURPOSE3,
  DIAGRAM_DECISION,
  DIAGRAM_WATERFALL,
  DIAGRAM_VMODEL,
  DIAGRAM_AGILE,
  DIAGRAM_TOOLSELECT,
} from '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/diagrams';

// 空白差を吸収して本文を照合する
const normalize = (text: string | null | undefined) => text?.replace(/\s+/g, ' ').trim();

// 空白をすべて除いて照合する（strong 等の境界で生じる空白差を無視する）
const squash = (text: string | null | undefined) => text?.replace(/\s+/g, '');

// section 直下の本文段落を出現順に取り出す
const directParagraphs = (section: Element | null | undefined) =>
  Array.from(section?.children ?? [])
    .filter((el) => el.tagName === 'P' && !el.classList.contains('section-note'))
    .map((el) => normalize(el.textContent));

// section 直下の h3 小見出し（アイコン・文言）を出現順に取り出す
const directSubheadings = (section: Element | null | undefined) =>
  Array.from(section?.children ?? [])
    .filter((el) => el.tagName === 'H3')
    .map((el) => ({
      icon: el.querySelector('i')?.className,
      title: el.textContent?.trim(),
    }));

// 実践カードの各項目（番号・見出し・本文）をインベントリと 1 対 1 で照合する
const expectPracticeItems = (
  section: Element | null | undefined,
  items: { number: number; title: string; text: string }[]
) => {
  const rendered = Array.from(section?.querySelectorAll('.practice-list li') ?? []).map((li) => ({
    number: li.querySelector('.p-num')?.textContent?.trim(),
    title: li.querySelector('.p-body strong')?.textContent?.trim(),
    body: squash(li.querySelector('.p-body')?.textContent),
  }));
  expect(rendered).toEqual(
    items.map((item) => ({
      number: String(item.number),
      title: item.title,
      body: squash(item.title + item.text),
    }))
  );
};

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

describe('CTAL-TAE Chapter 1 Page Migration Spec', () => {
  describe('Hero Section Inventory', () => {
    it('renders hero eyebrow, title, lead, and 4 badges matching inventory', () => {
      const { container } = render(<Page />);
      const eyebrow = container.querySelector('.hero-eyebrow');
      expect(eyebrow?.textContent?.trim()).toBe(inventory.hero.eyebrow);

      const title = container.querySelector('.hero h1');
      expect(title?.textContent?.replace(/\s+/g, ' ').trim()).toBe(inventory.hero.title);

      const lead = container.querySelector('.hero-lead');
      expect(lead?.textContent?.replace(/\s+/g, ' ').trim()).toBe(inventory.hero.lead);

      const badges = container.querySelectorAll('.hero-badge');
      expect(badges.length).toBe(inventory.hero.badges.length);

      inventory.hero.badges.forEach((expected, i) => {
        const badge = badges[i];
        expect(badge.textContent?.trim()).toContain(expected.text);
        const icon = badge.querySelector('i');
        expect(icon?.className).toContain(expected.icon);
      });

      const leadEn = container.querySelector('.hero-lead .hero-lead-en');
      const leadJa = container.querySelector('.hero-lead .hero-lead-ja');
      expect(leadEn).not.toBeNull();
      expect(leadJa).not.toBeNull();
      expect(leadEn?.textContent).toContain('Introduction and Objectives for Test Automation');
      expect(leadJa?.textContent).toContain('なぜテスト自動化を行うのか');
    });
  });

  describe('Sidebar Navigation (NavBar) Inventory', () => {
    it('renders sidebar brand, groups, and all navigation links matching inventory', () => {
      const { container } = render(<NavBar />);
      const brandText = container.querySelector('.sidebar-brand-text');
      expect(brandText?.textContent).toContain(inventory.sidebar.brand.title);
      expect(brandText?.textContent).toContain(inventory.sidebar.brand.subtitle);

      const groupTitles = container.querySelectorAll('.side-group-title');
      expect(groupTitles.length).toBe(inventory.sidebar.groups.length);

      const allLinks = container.querySelectorAll('.side-nav a');
      const expectedLinksCount = inventory.sidebar.groups.reduce((acc, g) => acc + g.links.length, 0);
      expect(allLinks.length).toBe(expectedLinksCount);

      let linkIdx = 0;
      inventory.sidebar.groups.forEach((group, gIdx) => {
        expect(groupTitles[gIdx].textContent?.trim()).toBe(group.title);
        group.links.forEach((expected) => {
          const link = allLinks[linkIdx++];
          expect(link.getAttribute('href')).toBe(expected.href);
          expect(link.textContent?.trim()).toBe(expected.text);
          const icon = link.querySelector('i');
          expect(icon?.className).toContain(expected.icon);
        });
      });
    });

    it('exposes TOC_GROUPS constant synchronized with inventory', () => {
      expect(TOC_GROUPS.length).toBe(inventory.sidebar.groups.length);
      TOC_GROUPS.forEach((group, i) => {
        expect(group.title).toBe(inventory.sidebar.groups[i].title);
        expect(group.links.length).toBe(inventory.sidebar.groups[i].links.length);
      });
    });

    it('handles mobile drawer toggle and close button', () => {
      const { container } = render(<NavBar />);
      const menuBtn = container.querySelector('#menuBtn');
      const sidebar = container.querySelector('#sidebar');
      const closeBtn = container.querySelector('#sidebarClose');

      if (!menuBtn || !sidebar || !closeBtn) {
        throw new Error('menuBtn / sidebar / sidebarClose が描画されていない');
      }
      expect(sidebar.classList.contains('open')).toBe(false);

      fireEvent.click(menuBtn);
      expect(sidebar.classList.contains('open')).toBe(true);

      fireEvent.click(closeBtn);
      expect(sidebar.classList.contains('open')).toBe(false);
    });

    it('moves focus to the target section when a TOC link closes the drawer', () => {
      // Arrange
      const { container } = render(<Page />);
      const menuBtn = container.querySelector('#menuBtn');
      const sidebar = container.querySelector('#sidebar');
      const link = container.querySelector<HTMLAnchorElement>('#sidebar a[href="#s3"]');
      const target = container.querySelector('#s3');
      if (!menuBtn || !sidebar || !link || !target) throw new Error('目次・リンク先が描画されていない');

      // Act
      fireEvent.click(menuBtn);
      link.focus();
      fireEvent.click(link);

      // Assert: ドロワーは閉じ、フォーカスは非表示のリンクではなくリンク先セクションにある
      expect(sidebar.classList.contains('open')).toBe(false);
      expect(document.activeElement === target).toBe(true);
    });

    it('returns focus to the menu button after closing via the close button or Escape', () => {
      // Arrange
      const { container } = render(<NavBar />);
      const menuBtn = container.querySelector<HTMLButtonElement>('#menuBtn');
      const closeBtn = container.querySelector<HTMLButtonElement>('#sidebarClose');
      if (!menuBtn || !closeBtn) throw new Error('menuBtn / sidebarClose が描画されていない');

      // Act / Assert: 閉じるボタン経路
      fireEvent.click(menuBtn);
      closeBtn.focus();
      fireEvent.click(closeBtn);
      expect(document.activeElement === menuBtn).toBe(true);

      // Act / Assert: Escape 経路
      fireEvent.click(menuBtn);
      closeBtn.focus();
      fireEvent.keyDown(window, { key: 'Escape' });
      expect(document.activeElement === menuBtn).toBe(true);
    });
  });

  describe('Section 0 (Chapter 1 Overview) Inventory', () => {
    it('renders s0 eyebrow, heading, paragraphs, diagram, and callout matching inventory', () => {
      const { container } = render(<Page />);
      const s0 = container.querySelector('#s0');
      expect(s0).not.toBeNull();

      const eyebrow = s0?.querySelector('.eyebrow');
      expect(eyebrow?.textContent?.trim()).toBe(inventory.sections.s0.eyebrow);

      const h2 = s0?.querySelector('h2');
      expect(h2?.textContent?.trim()).toBe(inventory.sections.s0.heading);

      expect(directParagraphs(s0)).toEqual(inventory.sections.s0.paragraphs);

      const diagramCard = s0?.querySelector('.diagram-card');
      expect(diagramCard?.querySelector('[data-diagram="roadmap"]')).not.toBeNull();
      expect(diagramCard?.querySelector('.cap')?.textContent?.trim()).toBe(
        inventory.sections.s0.diagram.caption
      );

      const callout = s0?.querySelector('.callout.note');
      expect(callout?.querySelector('.callout-title')?.textContent?.trim()).toBe(
        inventory.sections.s0.callout.title
      );
      expect(normalize(callout?.querySelector('.callout-body p')?.textContent)).toBe(
        inventory.sections.s0.callout.content
      );
    });

    it('passes each of the 7 diagram definitions to Mermaid in a 1:1 match with its data-diagram key', async () => {
      // Arrange: 図キーと期待する図定義の対応（ページ上の出現順）
      const expected: ReadonlyArray<readonly [string, string]> = [
        ['roadmap', DIAGRAM_ROADMAP],
        ['purpose3', DIAGRAM_PURPOSE3],
        ['decision', DIAGRAM_DECISION],
        ['waterfall', DIAGRAM_WATERFALL],
        ['vmodel', DIAGRAM_VMODEL],
        ['agile', DIAGRAM_AGILE],
        ['toolselect', DIAGRAM_TOOLSELECT],
      ];

      // Act
      const { container } = render(<Page />);

      // Assert: 図キーの並びと、Mermaid へ渡された描画入力の並びがどちらも 1 対 1 で一致する
      const keys = Array.from(container.querySelectorAll('[data-diagram]')).map((el) =>
        el.getAttribute('data-diagram')
      );
      expect(keys).toEqual(expected.map(([key]) => key));
      await waitFor(() => expect(renderedDiagrams.length).toBe(expected.length));
      expect(renderedDiagrams).toEqual(expected.map(([, definition]) => definition));
    });
  });

  describe('Section 1 (Keywords and LOs) Inventory', () => {
    it('renders keywords table and learning objectives table matching inventory', () => {
      const { container } = render(<Page />);
      const s1 = container.querySelector('#s1');
      expect(s1).not.toBeNull();

      expect(s1?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s1.eyebrow);
      expect(s1?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s1.heading);

      const tables = s1?.querySelectorAll('table');
      expect(tables?.length).toBe(2);

      // Keywords table
      const kwRows = tables?.[0].querySelectorAll('tbody tr');
      expect(kwRows?.length).toBe(inventory.sections.s1.keywords.length);
      inventory.sections.s1.keywords.forEach((kw, i) => {
        const cells = kwRows?.[i].querySelectorAll('td');
        expect(cells?.[0].textContent?.trim()).toBe(kw.term);
        expect(cells?.[1].textContent?.trim()).toBe(kw.japanese);
        expect(cells?.[2].textContent?.trim()).toBe(kw.coverage);
      });

      // LOs table
      const loRows = tables?.[1].querySelectorAll('tbody tr');
      expect(loRows?.length).toBe(inventory.sections.s1.learningObjectives.length);
      inventory.sections.s1.learningObjectives.forEach((lo, i) => {
        const cells = loRows?.[i].querySelectorAll('td');
        expect(cells?.[0].textContent?.trim()).toBe(lo.id);
        expect(cells?.[1].textContent?.trim()).toBe(lo.objective);
        expect(cells?.[2].textContent?.trim()).toBe(lo.kLevel);
      });

      // Practice card
      const practice = s1?.querySelector('.practice-card');
      expect(practice?.querySelector('.practice-card-head span')?.textContent?.trim()).toBe(
        inventory.sections.s1.bestPractices.title
      );
      expectPracticeItems(practice, inventory.sections.s1.bestPractices.items);
    });
  });

  describe('Section 2 (Purpose, Advantages, Disadvantages, Limitations) Inventory', () => {
    it('renders purpose, activities, purpose3 diagram, advantages, disadvantages, limitations, decision diagram, and practice card', () => {
      const { container } = render(<Page />);
      const s2 = container.querySelector('#s2');
      expect(s2).not.toBeNull();

      expect(s2?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s2.eyebrow);
      expect(s2?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s2.heading);
      expect(directSubheadings(s2)).toEqual(inventory.sections.s2.subheadings);

      // Activities（最初の箇条書き）と限界（2 つ目の箇条書き）
      const lists = Array.from(s2?.children ?? []).filter((el) => el.tagName === 'UL');
      const listItems = (list: Element | undefined) =>
        Array.from(list?.querySelectorAll('li') ?? []).map((li) => normalize(li.textContent));
      expect(listItems(lists[0])).toEqual(inventory.sections.s2.activities);
      expect(listItems(lists[1])).toEqual(inventory.sections.s2.limitations);

      // Diagrams
      expect(s2?.querySelector('[data-diagram="purpose3"]')).not.toBeNull();
      expect(s2?.querySelector('[data-diagram="decision"]')).not.toBeNull();

      // Tables (advantages & disadvantages)
      const tables = s2?.querySelectorAll('table');
      expect(tables?.length).toBe(2);

      const advTable = tables?.[0];
      const disTable = tables?.[1];
      if (!advTable || !disTable) {
        throw new Error('メリット / デメリットの表が描画されていない');
      }

      // 各行の番号・見出し・解説をインベントリと 1 対 1 で照合する
      const rowCells = (table: Element) =>
        Array.from(table.querySelectorAll('tbody tr')).map((tr) =>
          Array.from(tr.querySelectorAll('td')).map((td) => normalize(td.textContent))
        );
      const toCells = (items: { id: number; title: string; description: string }[]) =>
        items.map((item) => [String(item.id), item.title, item.description]);

      expect(rowCells(advTable)).toEqual(toCells(inventory.sections.s2.advantages));
      expect(rowCells(disTable)).toEqual(toCells(inventory.sections.s2.disadvantages));

      // Practice card
      const practice = s2?.querySelector('.practice-card');
      expect(practice?.querySelector('.practice-card-head span')?.textContent?.trim()).toBe(
        inventory.sections.s2.bestPractices.title
      );
      expectPracticeItems(practice, inventory.sections.s2.bestPractices.items);
    });
  });

  describe('Section 3 (SDLC Models and Automation) Inventory', () => {
    it('renders waterfall, v-model, agile diagrams, comparison table, and practice card', () => {
      const { container } = render(<Page />);
      const s3 = container.querySelector('#s3');
      expect(s3).not.toBeNull();

      expect(s3?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s3.eyebrow);
      expect(s3?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s3.heading);
      expect(directSubheadings(s3)).toEqual(inventory.sections.s3.subheadings);

      // 本文段落（strong 境界の空白差を除いて照合）と出典注記
      const s3Paragraphs = Array.from(s3?.children ?? [])
        .filter((el) => el.tagName === 'P' && !el.classList.contains('section-note'))
        .map((el) => squash(el.textContent));
      expect(s3Paragraphs).toEqual(
        [
          inventory.sections.s3.waterfallText,
          inventory.sections.s3.vmodelText,
          inventory.sections.s3.agileText,
        ].map((text) => squash(text))
      );
      expect(normalize(s3?.querySelector(':scope > .section-note')?.textContent)).toBe(
        inventory.sections.s3.agileNote
      );

      // 3 diagrams
      expect(s3?.querySelector('[data-diagram="waterfall"]')).not.toBeNull();
      expect(s3?.querySelector('[data-diagram="vmodel"]')).not.toBeNull();
      expect(s3?.querySelector('[data-diagram="agile"]')).not.toBeNull();

      // Comparison table
      const compTable = s3?.querySelector('table');
      const compRows = compTable?.querySelectorAll('tbody tr');
      expect(compRows?.length).toBe(inventory.sections.s3.comparisonTable.length);

      inventory.sections.s3.comparisonTable.forEach((row, i) => {
        const th = compRows?.[i].querySelector('th');
        const tds = compRows?.[i].querySelectorAll('td');
        expect(th?.textContent?.trim()).toBe(row.perspective);
        expect(tds?.[0].textContent?.trim()).toBe(row.waterfall);
        expect(tds?.[1].textContent?.trim()).toBe(row.vmodel);
        expect(tds?.[2].textContent?.trim()).toBe(row.agile);
      });

      // Practice card
      const practice = s3?.querySelector('.practice-card');
      expect(practice?.querySelector('.practice-card-head span')?.textContent?.trim()).toBe(
        inventory.sections.s3.bestPractices.title
      );
      expectPracticeItems(practice, inventory.sections.s3.bestPractices.items);
    });
  });

  describe('Section 4 (Tool Selection Process) Inventory', () => {
    it('renders paragraphs, toolselect diagram, and practice card', () => {
      const { container } = render(<Page />);
      const s4 = container.querySelector('#s4');
      expect(s4).not.toBeNull();

      expect(s4?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s4.eyebrow);
      expect(s4?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s4.heading);

      // 本文段落（section 直下の p）をインベントリと 1 対 1 で照合する
      const paragraphs = Array.from(s4?.children ?? [])
        .filter((el) => el.tagName === 'P')
        .map((el) => normalize(el.textContent));
      expect(paragraphs).toEqual(inventory.sections.s4.paragraphs);

      expect(s4?.querySelector('[data-diagram="toolselect"]')).not.toBeNull();

      const practice = s4?.querySelector('.practice-card');
      expect(practice?.querySelector('.practice-card-head span')?.textContent?.trim()).toBe(
        inventory.sections.s4.bestPractices.title
      );
      expectPracticeItems(practice, inventory.sections.s4.bestPractices.items);
    });
  });

  describe('Section 5 (Checklist and Exam Prep) Inventory', () => {
    it('renders interactive checklist, progress bar, counter, and warning callout', () => {
      const { container } = render(<Page />);
      const s5 = container.querySelector('#s5');
      expect(s5).not.toBeNull();

      expect(s5?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s5.eyebrow);
      expect(s5?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s5.heading);

      const checkboxes = s5?.querySelectorAll('input[type="checkbox"]') ?? [];
      expect(checkboxes.length).toBe(inventory.sections.s5.checklist.length);

      // 各チェック項目の文言をインベントリと 1 対 1 で照合する
      const itemTexts = Array.from(s5?.querySelectorAll('.check-list li .txt') ?? []).map((el) =>
        normalize(el.textContent)
      );
      expect(itemTexts).toEqual(inventory.sections.s5.checklist);

      const fill = s5?.querySelector<HTMLElement>('#checkFill');
      const label = s5?.querySelector('#checkLabel');
      const firstCheckbox = checkboxes[0];
      if (!fill || !label || !firstCheckbox) {
        throw new Error('checkFill / checkLabel / 先頭チェックボックスが描画されていない');
      }

      expect(label.textContent?.trim()).toBe('0 / 7 完了');

      fireEvent.click(firstCheckbox);
      expect(label.textContent?.trim()).toBe('1 / 7 完了');
      expect(fill.style.width).toBe('14.285714285714285%');

      const callout = s5?.querySelector('.callout.warn');
      expect(callout?.querySelector('.callout-title')?.textContent?.trim()).toBe(
        inventory.sections.s5.callout.title
      );
      const calloutParagraphs = Array.from(callout?.querySelectorAll('.callout-body p') ?? []).map((p) =>
        normalize(p.textContent)
      );
      expect(calloutParagraphs).toEqual(inventory.sections.s5.callout.paragraphs);
    });
  });

  describe('Section 6 (References) and Footer Inventory', () => {
    it('renders 2 external reference cards with target="_blank" and rel="noopener noreferrer", and footer', () => {
      const { container } = render(<Page />);
      const s6 = container.querySelector('#s6');
      expect(s6).not.toBeNull();

      expect(s6?.querySelector('.eyebrow')?.textContent?.trim()).toBe(inventory.sections.s6.eyebrow);
      expect(s6?.querySelector('h2')?.textContent?.trim()).toBe(inventory.sections.s6.heading);

      const refCards = s6?.querySelectorAll('.ref-card');
      expect(refCards?.length).toBe(inventory.sections.s6.references.length);

      inventory.sections.s6.references.forEach((ref, i) => {
        expect(normalize(refCards?.[i].querySelector('.ref-card-title')?.textContent)).toBe(ref.title);
        const link = refCards?.[i].querySelector('a');
        expect(link?.getAttribute('href')).toBe(ref.url);
        expect(link?.getAttribute('target')).toBe('_blank');
        expect(link?.getAttribute('rel')).toContain('noopener');
      });

      const footer = container.querySelector('.site-footer');
      expect(footer?.textContent).toContain(inventory.footer.text);
    });

    it('marks the reference group title as an h3 directly under the section h2', () => {
      // Arrange
      const { container } = render(<Page />);
      const s6 = container.querySelector('#s6');

      // Act
      const groupHeading = s6?.querySelector('.ref-group > h3');

      // Assert: h2 → h3 の順で見出しレベルを飛ばさない
      expect(groupHeading?.textContent?.trim()).toBe(inventory.sections.s6.groupTitle);
      expect(s6?.querySelector('h4')).toBeNull();
    });

    it('styles the reference group heading via an h3 selector', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/ctal-tae-ch1.css'
      );
      const css = fs.readFileSync(cssPath, 'utf8');

      expect(css).toContain('.ctal-tae-ch1-page .ref-group h3 {');
      expect(css).not.toContain('.ref-group h4');
    });
  });

  describe('Table Accessible Names', () => {
    it('labels every table in s1-s3 via aria-labelledby pointing to its preceding h3', () => {
      // Arrange
      const { container } = render(<Page />);

      // Act
      const tables = Array.from(container.querySelectorAll('#s1 table, #s2 table, #s3 table'));

      // Assert: 5 表すべてが一意の h3 を参照する
      expect(tables.length).toBe(5);
      const ids = tables.map((t) => t.getAttribute('aria-labelledby'));
      expect(new Set(ids).size).toBe(5);
      ids.forEach((id) => {
        expect(id).toBeTruthy();
        const heading = container.querySelector(`[id="${id}"]`);
        expect(heading?.tagName).toBe('H3');
        expect(heading?.textContent?.trim()).not.toBe('');
      });
    });
  });

  describe('Diagram Definitions & Theme Contract', () => {
    it('defines all 7 diagrams with MERMAID_CONFIG and without single quotes in init', () => {
      const diagrams = [
        DIAGRAM_ROADMAP,
        DIAGRAM_PURPOSE3,
        DIAGRAM_DECISION,
        DIAGRAM_WATERFALL,
        DIAGRAM_VMODEL,
        DIAGRAM_AGILE,
        DIAGRAM_TOOLSELECT,
      ];

      diagrams.forEach((d) => {
        expect(d).toContain('%%{init:');
        expect(d).not.toMatch(/%%\{init:[^}]*'[^}]*\}%%/);
        expect(d).toContain('classDef box');
        expect(d).toContain('classDef hub');
        expect(d).toContain('classDef done');
      });
    });

    it('overrides dark mainBkg and nodeTextColor in MERMAID_CONFIG and defines default class', () => {
      expect(DIAGRAM_ROADMAP).toContain('"mainBkg": "#fffdf8"');
      expect(DIAGRAM_ROADMAP).toContain('"nodeTextColor": "#2b2620"');
      expect(DIAGRAM_ROADMAP).toContain('"nodeBorder": "#c9bfa8"');
      expect(DIAGRAM_ROADMAP).toContain('classDef default fill:#fffdf8,stroke:#c9bfa8,color:#2b2620');
    });
  });

  describe('CSS Scoping and Resets Contract', () => {
    it('disables sidebar and progress-fill transitions under prefers-reduced-motion', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/ctal-tae-ch1.css'
      );
      const css = fs.readFileSync(cssPath, 'utf8');
      const block = css.match(/@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{([\s\S]*?)\n\}/)?.[1] ?? '';

      expect(block).toContain('.ctal-tae-ch1-page .sidebar');
      expect(block).toContain('.ctal-tae-ch1-page .check-progress-fill');
      expect(block).toMatch(/transition:\s*none/);
    });

    it('contains page css with globals resets for .hero, table, and .mermaid-wrapper', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/ctal-tae-ch1.css'
      );
      expect(fs.existsSync(cssPath)).toBe(true);

      const css = fs.readFileSync(cssPath, 'utf8');
      expect(css).toContain('.ctal-tae-ch1-page');
      expect(css).toContain('.mermaid-wrapper');
      expect(css).toContain('max-width: none !important');
    });

    it('ensures main content is offset by sidebar width and sidebar respects disclaimer height', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/ctal-tae-ch1.css'
      );
      const css = fs.readFileSync(cssPath, 'utf8');

      // Sidebar must respect header + disclaimer height
      expect(css).toContain('calc(60px + var(--disclaimer-height, 0px))');
      // Main must have margin-left: var(--sidebar-w) without being overridden by margin: 0 !important
      expect(css).toMatch(/main\.main[^}]*margin-left:\s*var\(--sidebar-w\)\s*!important/);
      // Mermaid nodes must have light background and contrast styling
      expect(css).toContain('.node:not(.box):not(.hub):not(.done) rect');
    });

    it('allows hero title and lead text to span the full width of the screen without premature wrapping', () => {
      const cssPath = path.resolve(
        __dirname,
        '../../app/istqb-ctal-tae-chapter1-introduction-and-objectives/ctal-tae-ch1.css'
      );
      const css = fs.readFileSync(cssPath, 'utf8');

      expect(css).toMatch(/\.hero\s+h1\s*\{[^}]*max-width:\s*none/);
      expect(css).toMatch(/\.hero-lead\s*\{[^}]*max-width:\s*none/);
    });
  });
});
