import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, waitFor, act } from '@testing-library/react';
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
    expect(chips[0]?.textContent).toContain('全21章');
    expect(chips[1]?.textContent).toContain('TypeScript');
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
      expect(tocLinks[idx]?.getAttribute('href')).toBe(href);
    });

    const groupLabels = container.querySelectorAll('.nav-group-label');
    expect(groupLabels.length).toBe(4);
    expect(groupLabels[0]?.textContent).toBe('基礎編');
    expect(groupLabels[1]?.textContent).toBe('設計・構造編');
    expect(groupLabels[2]?.textContent).toBe('デバッグ・応用編');
    expect(groupLabels[3]?.textContent).toBe('運用編');
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

    it('renders tables 1 through 5 across Category 1', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 1: 1 table (アーキテクチャ・層別役割)
      const sec1Tables = container.querySelectorAll('section#sec-1 table');
      expect(sec1Tables.length).toBe(1);

      // Section 2: 1 table (動作要件)
      const sec2Tables = container.querySelectorAll('section#sec-2 table');
      expect(sec2Tables.length).toBe(1);

      // Section 3: 1 table (BrowserContext vs Page)
      const sec3Tables = container.querySelectorAll('section#sec-3 table');
      expect(sec3Tables.length).toBe(1);

      // Section 4: 1 table (Locators優先順位)
      const sec4Tables = container.querySelectorAll('section#sec-4 table');
      expect(sec4Tables.length).toBe(1);

      // Section 6: 1 table (代表的アサーション)
      const sec6Tables = container.querySelectorAll('section#sec-6 table');
      expect(sec6Tables.length).toBe(1);
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

  describe('Category 2: 設計・構造編 (Sections 07〜11)', () => {
    it('renders sections 07 to 11 with correct IDs and titles', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      const expectedSections = [
        { id: 'sec-7', title: '07Test Fixtures(テストフィクスチャ)' },
        { id: 'sec-8', title: '08Page Object Model(POM)設計パターン' },
        { id: 'sec-9', title: '09並列実行とWorkerプロセス' },
        { id: 'sec-10', title: '10Sharding(シャーディング)によるスケールアウト' },
        { id: 'sec-11', title: '11リトライとFlakyテスト対策' },
      ];

      expectedSections.forEach(({ id, title }) => {
        const sec = container.querySelector(`section#${id}`);
        expect(sec).not.toBeNull();
        const h2 = sec?.querySelector('h2.sec-title');
        expect(h2?.textContent?.replace(/\s+/g, '')).toBe(title.replace(/\s+/g, ''));
      });
    });

    it('renders Mermaid diagrams 4, 5, and 6 in Category 2', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 7: Mermaid 4 (Fixturesシーケンス図)
      const sec7 = container.querySelector('section#sec-7');
      expect(sec7).not.toBeNull();
      expect(sec7?.querySelector('.mermaid-container')).not.toBeNull();

      // Section 9: Mermaid 5 (Worker並列実行図)
      const sec9 = container.querySelector('section#sec-9');
      expect(sec9).not.toBeNull();
      expect(sec9?.querySelector('.mermaid-container')).not.toBeNull();

      // Section 10: Mermaid 6 (Sharding実行図)
      const sec10 = container.querySelector('section#sec-10');
      expect(sec10).not.toBeNull();
      expect(sec10?.querySelector('.mermaid-container')).not.toBeNull();
    });

    it('renders code blocks 13 through 32 in Category 2', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 7: code-13 to code-17 (5)
      expect(container.querySelectorAll('section#sec-7 .code-block').length).toBe(5);

      // Section 8: code-18 to code-21 (4)
      expect(container.querySelectorAll('section#sec-8 .code-block').length).toBe(4);

      // Section 9: code-22 to code-25 (4)
      expect(container.querySelectorAll('section#sec-9 .code-block').length).toBe(4);

      // Section 10: code-26 to code-29 (4)
      expect(container.querySelectorAll('section#sec-10 .code-block').length).toBe(4);

      // Section 11: code-30 to code-32 (3)
      expect(container.querySelectorAll('section#sec-11 .code-block').length).toBe(3);
    });

    it('renders tables across Category 2 (sections 10, 11)', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 10: 1 table
      expect(container.querySelectorAll('section#sec-10 table').length).toBe(1);

      // Section 11: 1 table
      expect(container.querySelectorAll('section#sec-11 table').length).toBe(1);
    });

    it('renders callout warning block in Section 9', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);
      const callout = container.querySelector('section#sec-9 .callout.warn');
      expect(callout).not.toBeNull();
      expect(callout?.textContent).toContain('並列テストは別々のWorkerプロセスで実行されるため');
    });

    it('renders refs blocks with external links in sections 7 to 11', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);
      for (let i = 7; i <= 11; i++) {
        const sec = container.querySelector(`section#sec-${i}`);
        const refs = sec?.querySelector('.refs');
        expect(refs).not.toBeNull();
        const links = refs?.querySelectorAll('a');
        expect(links?.length).toBeGreaterThanOrEqual(1);
      }
    });
  });

  describe('Category 3: デバッグ・応用編 (Sections 12〜17)', () => {
    it('renders sections 12 to 17 with correct IDs and titles', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      const expectedSections = [
        { id: 'sec-12', title: '12Trace Viewerによるデバッグ' },
        { id: 'sec-13', title: '13ネットワークインターセプションとAPIモック' },
        { id: 'sec-14', title: '14認証状態の再利用戦略' },
        { id: 'sec-15', title: '15Visual Regression Testing(視覚的回帰テスト)' },
        { id: 'sec-16', title: '16API Testing(バックエンドAPIテスト)' },
        { id: 'sec-17', title: '17UI ModeとVS Code拡張機能' },
      ];

      expectedSections.forEach(({ id, title }) => {
        const sec = container.querySelector(`section#${id}`);
        expect(sec).not.toBeNull();
        const h2 = sec?.querySelector('h2.sec-title');
        expect(h2?.textContent?.replace(/\s+/g, '')).toBe(title.replace(/\s+/g, ''));
      });
    });

    it('renders Mermaid diagrams 7, 8, 9, and 10 in Category 3', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 12: Mermaid 7
      const sec12 = container.querySelector('section#sec-12');
      expect(sec12).not.toBeNull();
      expect(sec12?.querySelector('.mermaid-container')).not.toBeNull();

      // Section 13: Mermaid 8
      const sec13 = container.querySelector('section#sec-13');
      expect(sec13).not.toBeNull();
      expect(sec13?.querySelector('.mermaid-container')).not.toBeNull();

      // Section 14: Mermaid 9
      const sec14 = container.querySelector('section#sec-14');
      expect(sec14).not.toBeNull();
      expect(sec14?.querySelector('.mermaid-container')).not.toBeNull();

      // Section 16: Mermaid 10
      const sec16 = container.querySelector('section#sec-16');
      expect(sec16).not.toBeNull();
      expect(sec16?.querySelector('.mermaid-container')).not.toBeNull();
    });

    it('renders code blocks 33 through 54 in Category 3', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 12: code-33 to code-34 (2)
      expect(container.querySelectorAll('section#sec-12 .code-block').length).toBe(2);

      // Section 13: code-35 to code-38 (4)
      expect(container.querySelectorAll('section#sec-13 .code-block').length).toBe(4);

      // Section 14: code-39 to code-43 (5)
      expect(container.querySelectorAll('section#sec-14 .code-block').length).toBe(5);

      // Section 15: code-44 to code-49 (6)
      expect(container.querySelectorAll('section#sec-15 .code-block').length).toBe(6);

      // Section 16: code-50 to code-53 (4)
      expect(container.querySelectorAll('section#sec-16 .code-block').length).toBe(4);

      // Section 17: code-54 (1)
      expect(container.querySelectorAll('section#sec-17 .code-block').length).toBe(1);
    });

    it('renders tables across Category 3 (sections 12, 17)', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 12: 1 table
      expect(container.querySelectorAll('section#sec-12 table').length).toBe(1);

      // Section 17: 1 table
      expect(container.querySelectorAll('section#sec-17 table').length).toBe(1);
    });

    it('renders callout warning block in Section 14', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);
      const callout = container.querySelector('section#sec-14 .callout.warn');
      expect(callout).not.toBeNull();
      expect(callout?.textContent).toContain('playwright/.auth');
    });

    it('renders refs blocks with external links in sections 12 to 17', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);
      for (let i = 12; i <= 17; i++) {
        const sec = container.querySelector(`section#sec-${i}`);
        const refs = sec?.querySelector('.refs');
        expect(refs).not.toBeNull();
        const links = refs?.querySelectorAll('a');
        expect(links?.length).toBeGreaterThanOrEqual(1);
      }
    });
  });

  describe('Category 4: 運用編 & 参考文献 (Sections 18〜21)', () => {
    it('renders sections 18 to 21 with correct IDs and titles', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      const expectedSections = [
        { id: 'sec-18', title: '18CI/CD統合(GitHub Actions)' },
        { id: 'sec-19', title: '19Docker活用' },
        { id: 'sec-20', title: '20ベストプラクティス総まとめ' },
        { id: 'sec-21', title: '21参考文献一覧' },
      ];

      expectedSections.forEach(({ id, title }) => {
        const sec = container.querySelector(`section#${id}`);
        expect(sec).not.toBeNull();
        const h2 = sec?.querySelector('h2.sec-title');
        expect(h2?.textContent?.replace(/\s+/g, '')).toBe(title.replace(/\s+/g, ''));
      });
    });

    it('renders Mermaid diagrams 11 and 12 in Category 4', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 18: Mermaid 11
      const sec18 = container.querySelector('section#sec-18');
      expect(sec18).not.toBeNull();
      expect(sec18?.querySelector('.mermaid-container')).not.toBeNull();

      // Section 19: Mermaid 12
      const sec19 = container.querySelector('section#sec-19');
      expect(sec19).not.toBeNull();
      expect(sec19?.querySelector('.mermaid-container')).not.toBeNull();
    });

    it('renders code blocks 55 through 62 in Category 4', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 18: code-55 to code-56 (2)
      expect(container.querySelectorAll('section#sec-18 .code-block').length).toBe(2);

      // Section 19: code-57 to code-60 (4)
      expect(container.querySelectorAll('section#sec-19 .code-block').length).toBe(4);

      // Section 20: code-61 to code-62 (2)
      expect(container.querySelectorAll('section#sec-20 .code-block').length).toBe(2);
    });

    it('renders tables across Category 4 (sections 18, 19, 20, 21)', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // Section 18: 1 table
      expect(container.querySelectorAll('section#sec-18 table').length).toBe(1);

      // Section 19: 1 table
      expect(container.querySelectorAll('section#sec-19 table').length).toBe(1);

      // Section 20: 2 tables
      expect(container.querySelectorAll('section#sec-20 table').length).toBe(2);

      // Section 21: 2 tables
      expect(container.querySelectorAll('section#sec-21 table').length).toBe(2);
    });

    it('verifies every reference in Section 21 by name, label, and href', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      // 参考文献は件数だけでは URL の差し替え・並べ替えを検知できないため、
      // 2 つの表の全行をページ名・表示ラベル・href まで文書順に 1 対 1 で検証する。
      const expectedReferenceTables: [string, string, string][][] = [
        [
          ['Installation(Getting Started)', 'playwright.dev/docs/intro', 'https://playwright.dev/docs/intro'],
          ['Locators', 'playwright.dev/docs/locators', 'https://playwright.dev/docs/locators'],
          ['Other locators', 'playwright.dev/docs/other-locators', 'https://playwright.dev/docs/other-locators'],
          ['Auto-waiting', 'playwright.dev/docs/actionability', 'https://playwright.dev/docs/actionability'],
          ['Assertions', 'playwright.dev/docs/test-assertions', 'https://playwright.dev/docs/test-assertions'],
          ['Fixtures', 'playwright.dev/docs/test-fixtures', 'https://playwright.dev/docs/test-fixtures'],
          ['Page object models', 'playwright.dev/docs/pom', 'https://playwright.dev/docs/pom'],
          ['Parallelism', 'playwright.dev/docs/test-parallel', 'https://playwright.dev/docs/test-parallel'],
          ['Sharding', 'playwright.dev/docs/test-sharding', 'https://playwright.dev/docs/test-sharding'],
          ['Retries', 'playwright.dev/docs/test-retries', 'https://playwright.dev/docs/test-retries'],
          ['Trace viewer(イントロ)', 'playwright.dev/docs/trace-viewer-intro', 'https://playwright.dev/docs/trace-viewer-intro'],
          ['Trace viewer(詳細)', 'playwright.dev/docs/trace-viewer', 'https://playwright.dev/docs/trace-viewer'],
          ['Mock APIs', 'playwright.dev/docs/mock', 'https://playwright.dev/docs/mock'],
          ['Network', 'playwright.dev/docs/network', 'https://playwright.dev/docs/network'],
          ['Authentication', 'playwright.dev/docs/auth', 'https://playwright.dev/docs/auth'],
          ['Visual comparisons', 'playwright.dev/docs/test-snapshots', 'https://playwright.dev/docs/test-snapshots'],
          ['API testing', 'playwright.dev/docs/api-testing', 'https://playwright.dev/docs/api-testing'],
          ['UI Mode', 'playwright.dev/docs/test-ui-mode', 'https://playwright.dev/docs/test-ui-mode'],
          ['Getting started (VS Code)', 'playwright.dev/docs/getting-started-vscode', 'https://playwright.dev/docs/getting-started-vscode'],
          ['Setting up CI', 'playwright.dev/docs/ci-intro', 'https://playwright.dev/docs/ci-intro'],
          ['Continuous Integration', 'playwright.dev/docs/ci', 'https://playwright.dev/docs/ci'],
          ['Docker', 'playwright.dev/docs/docker', 'https://playwright.dev/docs/docker'],
          ['Best Practices', 'playwright.dev/docs/best-practices', 'https://playwright.dev/docs/best-practices'],
          ['Isolation(Browser contexts)', 'playwright.dev/docs/browser-contexts', 'https://playwright.dev/docs/browser-contexts'],
          ['Test configuration', 'playwright.dev/docs/test-configuration', 'https://playwright.dev/docs/test-configuration'],
          ['Reporters', 'playwright.dev/docs/test-reporters', 'https://playwright.dev/docs/test-reporters'],
          ['Pages', 'playwright.dev/docs/pages', 'https://playwright.dev/docs/pages'],
        ],
        [
          ['Microsoft Learn: Introduction to Playwright for end-to-end testing', 'learn.microsoft.com', 'https://learn.microsoft.com/en-us/shows/getting-started-with-end-to-end-testing-with-playwright/introduction-to-playwright-for-end-to-end-testing'],
          ['Playwright公式GitHubリポジトリ', 'github.com/microsoft/playwright', 'https://github.com/microsoft/playwright'],
        ],
      ];

      const tables = container.querySelectorAll('section#sec-21 table');
      expect(tables.length).toBe(expectedReferenceTables.length);

      expectedReferenceTables.forEach((expectedRows, tIdx) => {
        const rows = tables[tIdx]?.querySelectorAll('tbody tr');
        expect(rows?.length).toBe(expectedRows.length);
        expectedRows.forEach(([name, label, href], rIdx) => {
          const tds = rows?.[rIdx]?.querySelectorAll('td');
          expect(tds?.[0]?.textContent).toBe(name);
          const anchorEl = tds?.[1]?.querySelector('a');
          expect(anchorEl?.textContent).toBe(label);
          expect(anchorEl?.getAttribute('href')).toBe(href);
          expect(anchorEl?.getAttribute('target')).toBe('_blank');
          expect(anchorEl?.getAttribute('rel')).toBe('noopener noreferrer');
        });
      });
    });

    it('renders callout warning block in Section 19', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);
      const callout = container.querySelector('section#sec-19 .callout.warn');
      expect(callout).not.toBeNull();
      expect(callout?.textContent).toContain('Playwrightバージョンを完全に一致させる');
    });

    it('renders document footer', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);
      const footer = container.querySelector('footer.doc-footer');
      expect(footer).not.toBeNull();
      expect(footer?.textContent).toContain('一次情報として参照してください');
    });
  });

  describe('Full Page Comprehensive Inventory Verification', () => {
    // 全 21 セクションの構成要素インベントリ。
    // 総数だけを数えると「別セクションに移動した」「入れ替わった」変更を検知できないため、
    // 図・コードブロック・表を「どのセクションに、どの順序で、いくつ」まで 1 対 1 で固定する。
    const SECTION_INVENTORY: {
      id: string;
      diagrams: number;
      codeLabels: string[];
      tableHeaders: string[][];
    }[] = [
        {
          id: 'sec-1',
          diagrams: 1,
          codeLabels: [],
          tableHeaders: [['層', '役割', '特徴']],
        },
        {
          id: 'sec-2',
          diagrams: 0,
          codeLabels: ['bash', 'directory structure', 'bash', 'bash', 'bash'],
          tableHeaders: [['項目', '要件']],
        },
        {
          id: 'sec-3',
          diagrams: 1,
          codeLabels: ['basic.spec.ts'],
          tableHeaders: [['フィクスチャ', '型', '説明']],
        },
        {
          id: 'sec-4',
          diagrams: 0,
          codeLabels: ['locators-basic.spec.ts', 'playwright.config.ts', 'filter-example.spec.ts', 'and-or-example.spec.ts'],
          tableHeaders: [['優先度', 'メソッド', '用途']],
        },
        {
          id: 'sec-5',
          diagrams: 1,
          codeLabels: [],
          tableHeaders: [],
        },
        {
          id: 'sec-6',
          diagrams: 0,
          codeLabels: ['assertions.spec.ts', 'soft-assertion.spec.ts'],
          tableHeaders: [['カテゴリ', '代表例']],
        },
        {
          id: 'sec-7',
          diagrams: 1,
          codeLabels: ['without-fixtures.spec.ts', 'with-fixtures.spec.ts', 'worker-fixture.ts', 'auto-fixture.ts', 'merge-fixtures.ts'],
          tableHeaders: [],
        },
        {
          id: 'sec-8',
          diagrams: 0,
          codeLabels: ['playwright-dev-page.ts', 'example.spec.ts', 'fixtures.ts', 'example.spec.ts'],
          tableHeaders: [],
        },
        {
          id: 'sec-9',
          diagrams: 1,
          codeLabels: ['bash', 'playwright.config.ts', 'parallel-in-file.spec.ts', 'worker-scoped-data.ts'],
          tableHeaders: [],
        },
        {
          id: 'sec-10',
          diagrams: 1,
          codeLabels: ['bash', 'playwright.config.ts', 'bash', '.github/workflows/playwright.yml(抜粋)'],
          tableHeaders: [['設定', '分割の粒度', '特徴']],
        },
        {
          id: 'sec-11',
          diagrams: 0,
          codeLabels: ['bash', 'playwright.config.ts', 'retry-aware.spec.ts'],
          tableHeaders: [['分類', '意味']],
        },
        {
          id: 'sec-12',
          diagrams: 1,
          codeLabels: ['playwright.config.ts', 'bash'],
          tableHeaders: [['ツール', '主な用途']],
        },
        {
          id: 'sec-13',
          diagrams: 1,
          codeLabels: ['mock-api.spec.ts', 'mock-partial.spec.ts', 'har-replay.spec.ts', 'websocket-mock.spec.ts'],
          tableHeaders: [],
        },
        {
          id: 'sec-14',
          diagrams: 1,
          codeLabels: ['tests/auth.setup.ts', 'playwright.config.ts', 'worker-auth.ts', 'api-auth.setup.ts', 'multi-role.spec.ts'],
          tableHeaders: [],
        },
        {
          id: 'sec-15',
          diagrams: 0,
          codeLabels: ['visual.spec.ts', 'directory structure', 'bash', 'threshold.spec.ts', 'screenshot-style.spec.ts', 'text-snapshot.spec.ts'],
          tableHeaders: [],
        },
        {
          id: 'sec-16',
          diagrams: 1,
          codeLabels: ['playwright.config.ts', 'api.spec.ts', 'combined.spec.ts', 'interop.spec.ts'],
          tableHeaders: [],
        },
        {
          id: 'sec-17',
          diagrams: 0,
          codeLabels: ['bash'],
          tableHeaders: [['機能', '内容']],
        },
        {
          id: 'sec-18',
          diagrams: 1,
          codeLabels: ['.github/workflows/playwright.yml', 'bash'],
          tableHeaders: [['施策', '効果']],
        },
        {
          id: 'sec-19',
          diagrams: 1,
          codeLabels: ['bash', 'bash', 'bash', 'Dockerfile'],
          tableHeaders: [['設定', '理由']],
        },
        {
          id: 'sec-20',
          diagrams: 0,
          codeLabels: ['good-vs-bad-locators.ts', 'good-vs-bad-assertions.ts'],
          tableHeaders: [['原則', '内容'], ['チェック項目', '対応章']],
        },
        {
          id: 'sec-21',
          diagrams: 0,
          codeLabels: [],
          tableHeaders: [['ページ', 'URL'], ['ページ', 'URL']],
        },
    ];

    it('verifies every section owns exactly its expected diagrams, code blocks, and tables', async () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      expect(SECTION_INVENTORY.length).toBe(21);

      SECTION_INVENTORY.forEach((expected) => {
        const section = container.querySelector(`section#${expected.id}`);
        expect(section).not.toBeNull();

        // 図: 当該セクションが持つ mermaid コンテナ数
        expect(section?.querySelectorAll('.mermaid-container').length).toBe(expected.diagrams);

        // コードブロック: code-label を識別子として順序どおりに突き合わせる
        const codeBlocks = section?.querySelectorAll('.code-block');
        expect(codeBlocks?.length).toBe(expected.codeLabels.length);
        expected.codeLabels.forEach((label, idx) => {
          expect(codeBlocks?.[idx]?.querySelector('.code-label')?.textContent).toBe(label);
        });

        // 表: 見出し行（th）を識別子として順序どおりに突き合わせる
        const tables = section?.querySelectorAll('table');
        expect(tables?.length).toBe(expected.tableHeaders.length);
        expected.tableHeaders.forEach((headers, idx) => {
          const ths = tables?.[idx]?.querySelectorAll('thead th');
          expect(ths?.length).toBe(headers.length);
          headers.forEach((header, col) => {
            expect(ths?.[col]?.textContent).toBe(header);
          });
        });
      });

      // Mermaid は非同期描画のため、コンテナの存在だけでなく SVG 注入完了まで待って検証する
      for (const expected of SECTION_INVENTORY) {
        if (expected.diagrams === 0) continue;
        const section = container.querySelector(`section#${expected.id}`);
        await waitFor(() =>
          expect(section?.querySelectorAll('[data-testid="mock-mermaid"]').length).toBe(
            expected.diagrams
          )
        );
      }
    });

    it('verifies page-wide totals match the sum of the per-section inventory', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);

      const sum = (pick: (e: (typeof SECTION_INVENTORY)[number]) => number) =>
        SECTION_INVENTORY.reduce((acc, e) => acc + pick(e), 0);

      expect(container.querySelectorAll('.mermaid-container').length).toBe(
        sum((e) => e.diagrams)
      );
      expect(container.querySelectorAll('.mermaid-container').length).toBe(12);

      expect(container.querySelectorAll('.code-block').length).toBe(
        sum((e) => e.codeLabels.length)
      );
      expect(container.querySelectorAll('.code-block').length).toBe(62);

      expect(container.querySelectorAll('table').length).toBe(
        sum((e) => e.tableHeaders.length)
      );
      expect(container.querySelectorAll('table').length).toBe(15);

      // Exactly 3 callouts (sections 9, 14, 19)
      expect(container.querySelectorAll('.callout').length).toBe(3);
    });

    it('verifies syntax highlighting tokens and code-line wrappers are present in code blocks', () => {
      const { container } = render(<PlaywrightIntermediateAdvancedPage />);
      const codeLines = container.querySelectorAll('.code-block .code-line');
      expect(codeLines.length).toBeGreaterThan(100);

      const hljsKeywords = container.querySelectorAll('.code-block .hljs-keyword');
      expect(hljsKeywords.length).toBeGreaterThan(20);

      const hljsStrings = container.querySelectorAll('.code-block .hljs-string');
      expect(hljsStrings.length).toBeGreaterThan(20);
    });
  });
  describe('NavBar scroll spy', () => {
    it('re-evaluates section visibility on scroll so the active link follows a ratio reversal (regression)', async () => {
      // 交差状態（どちらの節も読み取り帯に重なったまま）を維持しつつ、可視率だけが逆転するケース。
      // IntersectionObserver の intersectionRatio を保持する実装では通知が来ず追従できなかった。
      const BAND_TOP = 0.15;
      const BAND_BOTTOM = 0.3;
      const viewportHeight = window.innerHeight;
      const bandTop = viewportHeight * BAND_TOP;
      const bandBottom = viewportHeight * BAND_BOTTOM;
      const bandHeight = bandBottom - bandTop;

      const rects: Record<string, { top: number; bottom: number }> = {
        // 帯の 75% を 'sec-1' が、25% を 'sec-2' が占める初期状態。
        'sec-1': { top: bandTop - 100, bottom: bandTop + bandHeight * 0.75 },
        'sec-2': { top: bandTop + bandHeight * 0.75, bottom: bandBottom + 400 },
      };

      const stubs = Object.keys(rects).map((id) => {
        const el = document.createElement('section');
        el.id = id;
        el.getBoundingClientRect = () => {
          const { top, bottom } = rects[id]!;
          return {
            top,
            bottom,
            left: 0,
            right: 0,
            width: 0,
            height: bottom - top,
            x: 0,
            y: top,
            toJSON: () => ({}),
          } as DOMRect;
        };
        document.body.appendChild(el);
        return el;
      });

      try {
        const { container } = render(<NavBar />);

        await waitFor(() => {
          expect(container.querySelector('.toc a.active')?.getAttribute('href')).toBe('#sec-1');
        });

        // スクロールで可視率が逆転（帯の 25% / 75%）。交差状態自体は両節とも維持される。
        rects['sec-1'] = { top: bandTop - 400, bottom: bandTop + bandHeight * 0.25 };
        rects['sec-2'] = { top: bandTop + bandHeight * 0.25, bottom: bandBottom + 100 };
        act(() => {
          window.dispatchEvent(new Event('scroll'));
        });

        await waitFor(() => {
          const active = container.querySelector('.toc a.active');
          expect(active?.getAttribute('href')).toBe('#sec-2');
          expect(active?.getAttribute('aria-current')).toBe('location');
        });
      } finally {
        stubs.forEach((el) => el.remove());
      }
    });
  });
});
