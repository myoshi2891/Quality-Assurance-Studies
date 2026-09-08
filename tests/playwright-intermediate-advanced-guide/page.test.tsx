import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import PlaywrightIntermediateAdvancedPage from '../../app/playwright-intermediate-advanced-guide/page';
import NavBar from '../../app/playwright-intermediate-advanced-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaid.render = mock(async () => {
    return {
      svg: '<svg data-testid="mock-mermaid"></svg>',
      diagramType: 'flowchart',
    };
  }) as unknown as typeof mermaid.render;

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

describe('Playwright Intermediate-Advanced Guide Page - Comprehensive Test Suite', () => {
  it('renders the hero section with main title, eyebrow, lead paragraph, and chips', () => {
    const { container } = render(<PlaywrightIntermediateAdvancedPage />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Playwright実践ガイド');
    expect(h1.textContent).toContain('中級者から上級者のためのステップバイステップ解説');

    const eyebrow = container.querySelector('.hero .eyebrow');
    expect(eyebrow?.textContent).toContain('TECHNICAL GUIDE / QA ENGINEERING');

    const lead = container.querySelector('.hero p.lead');
    expect(lead?.textContent).toContain('Playwright公式ドキュメント');

    const chips = container.querySelectorAll('.hero .chip');
    expect(chips.length).toBeGreaterThanOrEqual(4);
    expect(chips[0].textContent).toContain('全21章');
    expect(chips[1].textContent).toContain('TypeScript');
  });

  it('renders the sidebar navigation with all 21 TOC links grouped into 4 categories', () => {
    const { container } = render(<NavBar />);

    const tocLinks = container.querySelectorAll('.toc a');
    expect(tocLinks.length).toBe(21);

    const expectedHrefs = [
      '#sec-1', '#sec-2', '#sec-3', '#sec-4', '#sec-5', '#sec-6',
      '#sec-7', '#sec-8', '#sec-9', '#sec-10', '#sec-11',
      '#sec-12', '#sec-13', '#sec-14', '#sec-15', '#sec-16', '#sec-17',
      '#sec-18', '#sec-19', '#sec-20', '#sec-21',
    ];

    expectedHrefs.forEach((href, idx) => {
      expect(tocLinks[idx].getAttribute('href')).toBe(href);
    });

    const groupLabels = container.querySelectorAll('.nav-group-label');
    expect(groupLabels.length).toBe(4);
    expect(groupLabels[0].textContent).toBe('基礎編');
    expect(groupLabels[1].textContent).toBe('設計・構造編');
    expect(groupLabels[2].textContent).toBe('デバッグ・応用編');
    expect(groupLabels[3].textContent).toBe('運用編');
  });

  describe('Category 1: 基礎編 (Sections 01〜06)', () => {
    it('renders sections 01 to 06 with correct IDs and titles', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      const expectedSections = [
        { id: 'sec-1', title: '01Playwrightとは何か・全体アーキテクチャ' },
        { id: 'sec-2', title: '02インストールとプロジェクトセットアップ' },
        { id: 'sec-3', title: '03基本概念: Browser / BrowserContext / Page' },
        { id: 'sec-4', title: '04Locators(ロケーター)戦略' },
        { id: 'sec-5', title: '05Auto-waiting(自動待機)の仕組み' },
        { id: 'sec-6', title: '06Web-First Assertions(アサーション)' },
      ];

      expectedSections.forEach(({ id, title }) => {
        const sec = container.querySelector(`section#${id}`);
        expect(sec).not.toBeNull();
        const h2 = sec?.querySelector('h2.sec-title');
        expect(h2?.textContent?.replace(/\s+/g, '')).toBe(title.replace(/\s+/g, ''));
      });
    });

    it('renders Mermaid diagrams 1, 2, and 3 in Category 1', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 1: Mermaid 1 (アーキテクチャ図)
      const sec1 = container.querySelector('section#sec-1');
      expect(sec1?.querySelector('.mermaid-container')).not.toBeNull();

      // Section 3: Mermaid 2 (BrowserContext分離図)
      const sec3 = container.querySelector('section#sec-3');
      expect(sec3?.querySelector('.mermaid-container')).not.toBeNull();

      // Section 5: Mermaid 3 (Auto-waitingフロー図)
      const sec5 = container.querySelector('section#sec-5');
      expect(sec5?.querySelector('.mermaid-container')).not.toBeNull();
    });

    it('renders code blocks 1 through 12 in Category 1', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 2: code-1 to code-5
      const sec2 = container.querySelector('section#sec-2');
      const sec2Codes = sec2?.querySelectorAll('.code-block');
      expect(sec2Codes?.length).toBe(5);

      // Section 3: code-6
      const sec3 = container.querySelector('section#sec-3');
      const sec3Codes = sec3?.querySelectorAll('.code-block');
      expect(sec3Codes?.length).toBe(1);

      // Section 4: code-7 to code-10
      const sec4 = container.querySelector('section#sec-4');
      const sec4Codes = sec4?.querySelectorAll('.code-block');
      expect(sec4Codes?.length).toBe(4);

      // Section 6: code-11 and code-12
      const sec6 = container.querySelector('section#sec-6');
      const sec6Codes = sec6?.querySelectorAll('.code-block');
      expect(sec6Codes?.length).toBe(2);
    });

    it('renders tables 1 through 7 across Category 1', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 2: 2 tables (動作要件, 初期化時生成ファイル/設定項目)
      const sec2Tables = container.querySelectorAll('section#sec-2 table');
      expect(sec2Tables.length).toBe(2);

      // Section 3: 1 table (BrowserContext vs Page)
      const sec3Tables = container.querySelectorAll('section#sec-3 table');
      expect(sec3Tables.length).toBe(1);

      // Section 4: 1 table (Locators優先順位)
      const sec4Tables = container.querySelectorAll('section#sec-4 table');
      expect(sec4Tables.length).toBe(1);

      // Section 5: 1 table (アクション別自動待機チェック項目)
      const sec5Tables = container.querySelectorAll('section#sec-5 table');
      expect(sec5Tables.length).toBe(1);

      // Section 6: 2 tables (代表的アサーション, Soft vs 通常)
      const sec6Tables = container.querySelectorAll('section#sec-6 table');
      expect(sec6Tables.length).toBe(2);
    });

    it('renders callout block in Section 6', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);
      const callout = container.querySelector('section#sec-6 .callout.note');
      expect(callout).not.toBeNull();
      expect(callout?.textContent).toContain('soft assertionの注意点');
    });

    it('renders refs blocks with external links in sections 1 to 6', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);
      for (let i = 1; i <= 6; i++) {
        const sec = container.querySelector(`section#sec-${i}`);
        const refs = sec?.querySelector('.refs');
        expect(refs).not.toBeNull();
        const links = refs?.querySelectorAll('a');
        expect(links?.length).toBeGreaterThanOrEqual(1);
      }
    });
  });
});
