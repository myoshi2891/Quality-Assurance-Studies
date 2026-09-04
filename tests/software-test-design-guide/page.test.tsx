import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/software-test-design-guide/page';
import NavBar from '../../app/software-test-design-guide/NavBar';
import Checklist from '../../app/software-test-design-guide/Checklist';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
let mermaidRenderMock: ReturnType<typeof mock>;

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaidRenderMock = mock(async () => {
    return {
      svg: '<svg data-testid="mock-mermaid"></svg>',
      diagramType: 'flowchart',
    };
  });
  mermaid.render = mermaidRenderMock as unknown as typeof mermaid.render;

  const mockIntersectionObserver = mock(() => {
    return {
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    };
  });
  window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  mermaid.render = originalMermaidRender;
  window.IntersectionObserver = originalIntersectionObserver;
});

describe('Software Test Design Guide Page - Comprehensive Test Suite', () => {
  describe('Hero Section & Metadata', () => {
    it('renders the main hero header with eyebrow, title, subtitle, quote, and chips', () => {
      const { container } = render(<Page />);

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeDefined();
      expect(h1.textContent).toContain("A Practitioner's Guide to Software Test Design 実践ガイド");

      const eyebrow = container.querySelector('.hero .eyebrow');
      expect(eyebrow).not.toBeNull();
      expect(eyebrow?.textContent).toContain("Beginner's Step-by-Step Guide");

      const subtitle = container.querySelector('.hero .subtitle');
      expect(subtitle).not.toBeNull();
      expect(subtitle?.textContent).toContain('〜初学者のためのステップバイステップ・ベストプラクティス〜');

      const quote = container.querySelector('.hero .hero-quote');
      expect(quote).not.toBeNull();
      expect(quote?.textContent).toContain('Lee Copeland');
      expect(quote?.textContent).toContain("A Practitioner's Guide to Software Test Design");

      const chips = container.querySelectorAll('.hero .chip');
      expect(chips.length).toBe(3);
      expect(chips[0]?.textContent).toContain('原著：Lee Copeland (2004)');
      expect(chips[1]?.textContent).toContain('ISTQB CTFL v4.0.1 対応');
      expect(chips[2]?.textContent).toContain('2026年8月時点の情報');
    });
  });

  describe('NavBar (Sidebar)', () => {
    it('renders sidebar brand, subtitle, mobile toggle button, and all 19 navigation links', () => {
      const { container } = render(<NavBar />);

      const toggle = container.querySelector('#menuToggle');
      expect(toggle).not.toBeNull();
      expect(toggle?.getAttribute('aria-controls')).toBe('sidebar');

      const brand = container.querySelector('.sidebar .sidebar-brand');
      expect(brand).not.toBeNull();
      expect(brand?.textContent).toContain("A Practitioner's Guide to");
      expect(brand?.textContent).toContain('Software Test Design');

      const brandSub = container.querySelector('.sidebar .sidebar-sub');
      expect(brandSub).not.toBeNull();
      expect(brandSub?.textContent).toContain('実践ガイド：初学者のためのテスト設計入門');

      const navLinks = container.querySelectorAll('.sidebar .nav-a');
      expect(navLinks.length).toBe(19);

      const expectedLinks = [
        { href: '#s01', num: '01', label: 'この記事について' },
        { href: '#s02', num: '02', label: 'テスト設計とは何か' },
        { href: '#s03', num: '03', label: '書籍紹介' },
        { href: '#s04', num: '04', label: 'プロセス全体像' },
        { href: '#s05', num: '05', label: '共通例' },
        { href: '#s06', num: '06', label: '同値分割' },
        { href: '#s07', num: '07', label: '境界値分析' },
        { href: '#s08', num: '08', label: 'デシジョンテーブル' },
        { href: '#s09', num: '09', label: '状態遷移テスト' },
        { href: '#s10', num: '10', label: 'ドメイン分析' },
        { href: '#s11', num: '11', label: 'ペアワイズ／組合せ' },
        { href: '#s12', num: '12', label: 'ユースケーステスト' },
        { href: '#s13', num: '13', label: 'ホワイトボックス技法' },
        { href: '#s14', num: '14', label: '比較と選び方' },
        { href: '#s15', num: '15', label: 'ベストプラクティス' },
        { href: '#s16', num: '16', label: 'アンチパターン' },
        { href: '#s17', num: '17', label: '現代的トレンド' },
        { href: '#s18', num: '18', label: 'まとめ' },
        { href: '#s19', num: '19', label: '参考文献・出典' },
      ];

      expectedLinks.forEach((expected, index) => {
        const link = navLinks[index];
        expect(link?.getAttribute('href')).toBe(expected.href);
        expect(link?.querySelector('.n-num')?.textContent).toBe(expected.num);
        expect(link?.textContent).toContain(expected.label);
      });
    });

    it('toggles mobile sidebar open and closed when clicking menu toggle button', () => {
      const { container } = render(<NavBar />);

      const toggle = container.querySelector('#menuToggle') as HTMLButtonElement;
      const sidebar = container.querySelector('#sidebar') as HTMLElement;

      expect(sidebar.classList.contains('open')).toBe(false);
      fireEvent.click(toggle);
      expect(sidebar.classList.contains('open')).toBe(true);
      fireEvent.click(toggle);
      expect(sidebar.classList.contains('open')).toBe(false);
    });
  });

  describe('All 19 Sections Presence & Structure', () => {
    it('renders all 19 sections with matching section numbers and h2 headings', () => {
      const { container } = render(<Page />);

      const sections = [
        { id: 's01', num: '01', h2: 'この記事について' },
        { id: 's02', num: '02', h2: 'ソフトウェアテスト設計とは何か' },
        { id: 's03', num: '03', h2: '書籍紹介：Lee Copeland『A Practitioner\'s Guide to Software Test Design』' },
        { id: 's04', num: '04', h2: 'テスト設計プロセスの全体像（ステップバイステップ）' },
        { id: 's05', num: '05', h2: '本ガイドを通して使う共通例：オンラインショップの注文システム' },
        { id: 's06', num: '06', h2: '同値分割（Equivalence Partitioning）' },
        { id: 's07', num: '07', h2: '境界値分析（Boundary Value Analysis）' },
        { id: 's08', num: '08', h2: 'デシジョンテーブルテスト' },
        { id: 's09', num: '09', h2: '状態遷移テスト' },
        { id: 's10', num: '10', h2: 'ドメイン分析テスト' },
        { id: 's11', num: '11', h2: 'ペアワイズ／組み合わせテスト' },
        { id: 's12', num: '12', h2: 'ユースケーステスト' },
        { id: 's13', num: '13', h2: 'ホワイトボックステスト技法' },
        { id: 's14', num: '14', h2: '技法の比較と選び方' },
        { id: 's15', num: '15', h2: 'ベストプラクティス・チェックリスト' },
        { id: 's16', num: '16', h2: 'よくあるアンチパターン' },
        { id: 's17', num: '17', h2: '現代的視点：2020年代後半のテスト設計トレンド' },
        { id: 's18', num: '18', h2: 'まとめ' },
        { id: 's19', num: '19', h2: '参考文献・出典' },
      ];

      sections.forEach((sec) => {
        const el = container.querySelector(`section#${sec.id}`);
        expect(el).not.toBeNull();
        const num = el?.querySelector('.section-num');
        expect(num?.textContent?.trim()).toBe(sec.num);
        const h2 = el?.querySelector('h2');
        expect(h2?.textContent).toContain(sec.h2);
      });
    });
  });

  describe('Mermaid Diagrams Integration', () => {
    it('renders all 5 Mermaid diagrams with correct wrappers and captions', () => {
      const { container } = render(<Page />);

      const diagrams = [
        { sectionId: 's04', caption: '図解：テスト設計プロセスの全体像' },
        { sectionId: 's09', caption: '図解：オンラインショップ注文の状態遷移図' },
        { sectionId: 's12', caption: '図解：注文ユースケースのフロー分岐' },
        { sectionId: 's13', caption: '図解：ホワイトボックスカバレッジの包含関係' },
        { sectionId: 's14', caption: '図解：初学者のためのテスト技法選択フロー' },
      ];

      diagrams.forEach((diag) => {
        const sec = container.querySelector(`section#${diag.sectionId}`);
        expect(sec).not.toBeNull();
        const caption = sec?.querySelector('.diagram-caption');
        expect(caption?.textContent).toContain(diag.caption);
        const target = sec?.querySelector('.mermaid-target');
        expect(target).not.toBeNull();
      });
    });
  });

  describe('Code Blocks Integration', () => {
    it('renders the 2 Java code blocks in section 13 with labels and code-line elements', () => {
      const { container } = render(<Page />);

      const sec13 = container.querySelector('section#s13');
      expect(sec13).not.toBeNull();

      const codeBlocks = sec13?.querySelectorAll('.code-block');
      expect(codeBlocks?.length).toBe(2);

      const label1 = codeBlocks?.[0]?.querySelector('.code-label');
      expect(label1?.textContent).toContain('JAVA — 短絡評価 OR');
      expect(codeBlocks?.[0]?.textContent).toContain('if (A || B)');
      expect(codeBlocks?.[0]?.textContent).toContain('doSomething()');

      const label2 = codeBlocks?.[1]?.querySelector('.code-label');
      expect(label2?.textContent).toContain('JAVA — 非短絡 OR');
      expect(codeBlocks?.[1]?.textContent).toContain('if (A | B)');
      expect(codeBlocks?.[1]?.textContent).toContain('doSomething()');
    });
  });

  describe('Tables Integration', () => {
    it('renders responsive table wrappers with headers across relevant sections', () => {
      const { container } = render(<Page />);

      const tableWrappers = container.querySelectorAll('.table-wrap');
      expect(tableWrappers.length).toBeGreaterThanOrEqual(13);

      tableWrappers.forEach((wrapper) => {
        const table = wrapper.querySelector('table');
        expect(table).not.toBeNull();
        const thead = table?.querySelector('thead');
        expect(thead).not.toBeNull();
        const tbody = table?.querySelector('tbody');
        expect(tbody).not.toBeNull();
      });
    });
  });

  describe('Interactive Checklist Component', () => {
    it('renders 12 checklist items, initial counter, and updates on checkbox toggles', () => {
      const { container } = render(<Checklist />);

      const counter = container.querySelector('#checklistCounter');
      expect(counter).not.toBeNull();
      expect(counter?.textContent).toBe('0 / 12 完了');

      const items = container.querySelectorAll('#checklist li');
      expect(items.length).toBe(12);

      const firstCheckbox = items[0]?.querySelector('input[type="checkbox"]') as HTMLInputElement;
      expect(firstCheckbox).not.toBeNull();
      expect(firstCheckbox.checked).toBe(false);
      expect(items[0]?.classList.contains('done')).toBe(false);

      // Check first item
      fireEvent.click(firstCheckbox);
      expect(firstCheckbox.checked).toBe(true);
      expect(items[0]?.classList.contains('done')).toBe(true);
      expect(counter?.textContent).toBe('1 / 12 完了');

      // Check second item
      const secondCheckbox = items[1]?.querySelector('input[type="checkbox"]') as HTMLInputElement;
      fireEvent.click(secondCheckbox);
      expect(counter?.textContent).toBe('2 / 12 完了');

      // Uncheck first item
      fireEvent.click(firstCheckbox);
      expect(firstCheckbox.checked).toBe(false);
      expect(items[0]?.classList.contains('done')).toBe(false);
      expect(counter?.textContent).toBe('1 / 12 完了');
    });
  });

  describe('References Section & Security', () => {
    it('renders 4 reference groups with safe external links', () => {
      const { container } = render(<Page />);

      const sec19 = container.querySelector('section#s19');
      expect(sec19).not.toBeNull();

      const groups = sec19?.querySelectorAll('.ref-group');
      expect(groups?.length).toBe(4);

      const externalLinks = sec19?.querySelectorAll('a[href^="http"]');
      expect(externalLinks?.length).toBeGreaterThan(10);

      externalLinks?.forEach((a) => {
        expect(a.getAttribute('target')).toBe('_blank');
        expect(a.getAttribute('rel')).toContain('noopener');
      });
    });
  });

  describe('Footer & Disclaimer', () => {
    it('renders educational disclaimer footer', () => {
      const { container } = render(<Page />);

      const footer = container.querySelector('.footer');
      expect(footer).not.toBeNull();
      expect(footer?.textContent).toContain('本ガイドは教育目的の解説記事であり、原著書籍の代替物ではありません');
      expect(footer?.textContent).toContain("A Practitioner's Guide to Software Test Design");
    });
  });
});
