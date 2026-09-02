import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, act, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/selenium-beginner-guide/page';
import NavBar from '../../app/selenium-beginner-guide/NavBar';

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

describe('Selenium Beginner Guide Page - Comprehensive Test Suite', () => {
  describe('Hero Section & Header Metadata', () => {
    it('renders the main doc header with title, badges, and subtitle with reference link', () => {
      const { container } = render(<Page />);

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeDefined();
      expect(h1.textContent).toContain('Selenium 完全ガイド');
      expect(h1.textContent).toContain('初心者のためのステップバイステップ解説');

      const badges = container.querySelectorAll('.page-header .badge');
      expect(badges.length).toBe(3);
      expect(badges[0]?.textContent).toContain('Selenium 4.46.0');
      expect(badges[0]?.textContent).toContain('2026年7月時点');
      expect(badges[1]?.textContent).toContain('日本語 / コード例: Python');
      expect(badges[2]?.textContent).toContain('初心者〜中級者向け');

      const subtitle = container.querySelector('.page-subtitle');
      expect(subtitle).not.toBeNull();
      expect(subtitle?.textContent).toContain('Selenium 公式ドキュメント');

      const docLink = subtitle?.querySelector('a[href="https://www.selenium.dev/documentation/"]');
      expect(docLink).not.toBeNull();
      expect(docLink?.getAttribute('target')).toBe('_blank');
      expect(docLink?.getAttribute('rel')).toContain('noopener');
    });
  });

  describe('Section Structure & Headings', () => {
    const expectedSections = [
      { id: 'sec-1', badge: '1', title: 'Seleniumとは何か' },
      { id: 'sec-2', badge: '2', title: 'Seleniumのアーキテクチャを理解する' },
      { id: 'sec-3', badge: '3', title: '環境構築（インストール）' },
      { id: 'sec-4', badge: '4', title: 'はじめてのSeleniumスクリプト' },
      { id: 'sec-5', badge: '5', title: '要素の検索方法（ロケーター戦略）' },
      { id: 'sec-6', badge: '6', title: '待機戦略（Waits）' },
      { id: 'sec-7', badge: '7', title: 'ブラウザの操作（Interactions）' },
      { id: 'sec-8', badge: '8', title: 'Actions API（キーボード・マウス操作）' },
      { id: 'sec-9', badge: '9', title: 'Selenium Manager（ドライバーの自動管理）' },
      { id: 'sec-10', badge: '10', title: 'Page Object Model（保守性の高いテスト設計）' },
      { id: 'sec-11', badge: '11', title: 'Selenium Grid（並列・分散実行）' },
      { id: 'sec-12', badge: '12', title: 'Selenium IDE（ノーコード記録ツール）' },
      { id: 'sec-13', badge: '13', title: 'テストのベストプラクティス' },
      { id: 'sec-14', badge: '14', title: 'よくあるエラーとトラブルシューティング' },
      { id: 'sec-15', badge: '15', title: 'まとめと次のステップ' },
      { id: 'sec-16', badge: '16', title: '参考文献一覧' },
    ];

    it('renders all 16 sections with exact IDs, badge numbers, and titles', () => {
      const { container } = render(<Page />);

      expectedSections.forEach(({ id, badge, title }) => {
        const section = container.querySelector(`section#${id}`);
        expect(section).not.toBeNull();

        const h2 = section?.querySelector('h2');
        expect(h2).not.toBeNull();

        const numEl = h2?.querySelector('.num');
        expect(numEl?.textContent).toBe(badge);
        expect(h2?.textContent).toContain(title);
      });
    });

    it('contains section reference links across content sections', () => {
      const { container } = render(<Page />);

      const sectionRefs = container.querySelectorAll('.section-refs');
      expect(sectionRefs.length).toBeGreaterThanOrEqual(14);

      sectionRefs.forEach((ref) => {
        const link = ref.querySelector('a');
        expect(link).not.toBeNull();
        expect(link?.getAttribute('target')).toBe('_blank');
        expect(link?.getAttribute('rel')).toContain('noopener');
      });
    });

    it('renders callout blocks with appropriate types (normal, warning, danger)', () => {
      const { container } = render(<Page />);

      const callouts = container.querySelectorAll('.callout');
      expect(callouts.length).toBeGreaterThanOrEqual(2);

      const warningCallouts = container.querySelectorAll('.callout.warning');
      expect(warningCallouts.length).toBeGreaterThan(0);

      const dangerCallouts = container.querySelectorAll('.callout.danger');
      expect(dangerCallouts.length).toBeGreaterThan(0);
    });
  });

  describe('Mermaid Visual Diagrams', () => {
    it('renders all 8 Mermaid diagrams wrapped in .diagram-wrap containers with captions', async () => {
      const { container } = render(<Page />);

      const diagramWraps = container.querySelectorAll('.diagram-wrap');
      expect(diagramWraps.length).toBe(8);

      const captions = container.querySelectorAll('.diagram-caption');
      expect(captions.length).toBe(8);
      expect(captions[0]?.textContent).toContain('図1: Seleniumプロジェクトの全体構成');
      expect(captions[1]?.textContent).toContain('図2: 直接通信によるローカル実行の構成');
      expect(captions[2]?.textContent).toContain('図3: リモート通信によるGrid経由の実行構成');
      expect(captions[3]?.textContent).toContain('図4: WebDriverの8つの基本コンポーネント');
      expect(captions[4]?.textContent).toContain('図5: 待機戦略の使い分けフロー');
      expect(captions[5]?.textContent).toContain('図6: Selenium Managerによる自動ドライバー管理の流れ');
      expect(captions[6]?.textContent).toContain('図7: Page Object間の関係');
      expect(captions[7]?.textContent).toContain('図8: Selenium Grid（Distributedモード）のコンポーネント構成');

      // mermaid.render は非同期のため、SVG 注入完了まで待って実際の描画を検証する
      await waitFor(() => {
        expect(container.querySelectorAll('[data-testid="mock-mermaid"]').length).toBe(8);
      });
    });
  });

  describe('Tables and Data Representations', () => {
    it('renders detailed comparison and reference tables with correct content', () => {
      const { container } = render(<Page />);

      const tables = container.querySelectorAll('table');
      expect(tables.length).toBeGreaterThanOrEqual(7);

      // Section 1: Components Table
      expect(container.textContent).toContain('Selenium WebDriver');
      expect(container.textContent).toContain('Selenium Grid');
      expect(container.textContent).toContain('Selenium IDE');
      expect(container.textContent).toContain('Selenium Manager');

      // Section 5: Locator Strategy Table
      expect(container.textContent).toContain('class name');
      expect(container.textContent).toContain('css selector');
      expect(container.textContent).toContain('xpath');

      // Section 6: Waits Table
      expect(container.textContent).toContain('Implicit Wait（暗黙的待機）');
      expect(container.textContent).toContain('Explicit Wait（明示的待機）');

      // Section 11: Grid Scale Table
      expect(container.textContent).toContain('Standalone');
      expect(container.textContent).toContain('Hub and Node');
      expect(container.textContent).toContain('Distributed');

      // Section 14: Troubleshooting Table
      expect(container.textContent).toContain('NoSuchElementException');
      expect(container.textContent).toContain('ElementNotInteractableException');
      expect(container.textContent).toContain('StaleElementReferenceException');
      expect(container.textContent).toContain('session not created');
    });
  });

  describe('Code Blocks & Syntax Highlighting', () => {
    it('wraps code blocks properly with code-line elements and syntax tokens', () => {
      const { container } = render(<Page />);

      const codeBlocks = container.querySelectorAll('pre');
      expect(codeBlocks.length).toBeGreaterThanOrEqual(15);

      const codeLines = container.querySelectorAll('.code-line');
      expect(codeLines.length).toBeGreaterThanOrEqual(40);

      // Verify presence of code content
      expect(container.textContent).toContain('from selenium import webdriver');
      expect(container.textContent).toContain('driver = webdriver.Chrome()');
      expect(container.textContent).toContain('WebDriverWait(driver, timeout=2)');
      expect(container.textContent).toContain('ActionChains(driver)');
      expect(container.textContent).toContain('LoginPage');
      expect(container.textContent).toContain('HomePage');
    });
  });

  describe('References & Footer', () => {
    it('renders references in Section 16 with valid links', () => {
      const { container } = render(<Page />);

      const sec16 = container.querySelector('#sec-16');
      expect(sec16).not.toBeNull();

      const refList = sec16?.querySelector('.ref-list');
      expect(refList).not.toBeNull();

      const refLinks = refList?.querySelectorAll('a');
      expect(refLinks?.length).toBeGreaterThanOrEqual(10);
    });

    it('renders the page footer note', () => {
      const { container } = render(<Page />);

      const footer = container.querySelector('footer.page-footer');
      expect(footer).not.toBeNull();
      expect(footer?.textContent).toContain('Selenium 公式ドキュメント');
    });
  });
});

describe('Selenium Beginner Guide NavBar Component', () => {
  it('renders the sidebar navigation with brand, nav group labels, and 16 anchor links', () => {
    const { container } = render(<NavBar />);

    const brand = container.querySelector('.sidebar-brand');
    expect(brand).not.toBeNull();
    expect(brand?.textContent).toContain('Selenium 完全ガイド');
    expect(brand?.textContent).toContain('初心者向けステップバイステップ');

    const groupLabels = container.querySelectorAll('.nav-group-label');
    expect(groupLabels.length).toBe(4);
    expect(groupLabels[0]?.textContent).toBe('基礎編');
    expect(groupLabels[1]?.textContent).toBe('要素操作編');
    expect(groupLabels[2]?.textContent).toBe('実践・設計編');
    expect(groupLabels[3]?.textContent).toBe('まとめ編');

    const links = container.querySelectorAll('.sidebar a');
    expect(links).toHaveLength(16);

    for (let i = 1; i <= 16; i++) {
      const link = links[i - 1];
      expect(link?.getAttribute('href')).toBe(`#sec-${i}`);
    }

    const firstLink = links[0];
    expect(firstLink?.classList.contains('active')).toBe(true);
    expect(firstLink?.getAttribute('aria-current')).toBe('location');
  });

  it('keeps the section with the higher intersection ratio active when a later notification reports a barely visible section', () => {
    // IntersectionObserver は交差状態が変化した要素のみを通知する。
    // 後続バッチで sec-2(0.1) だけが届いても、sec-1(0.8) がアクティブのままであること。
    let capturedCallback: IntersectionObserverCallback | null = null;
    const savedIO = window.IntersectionObserver;
    window.IntersectionObserver = class {
      constructor(cb: IntersectionObserverCallback) {
        capturedCallback = cb;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    } as unknown as typeof IntersectionObserver;

    try {
      const { container } = render(<NavBar />);
      const observer = {} as IntersectionObserver;
      const entryFor = (id: string, ratio: number) =>
        ({
          target: { id } as Element,
          isIntersecting: ratio > 0,
          intersectionRatio: ratio,
        }) as IntersectionObserverEntry;

      const notify = capturedCallback as unknown as IntersectionObserverCallback;
      act(() => {
        notify([entryFor('sec-1', 0.8)], observer);
      });
      act(() => {
        notify([entryFor('sec-2', 0.1)], observer);
      });

      const active = container.querySelector('.sidebar-list a.active');
      expect(active?.getAttribute('href')).toBe('#sec-1');
      expect(active?.getAttribute('aria-current')).toBe('location');
    } finally {
      window.IntersectionObserver = savedIO;
    }
  });
});
