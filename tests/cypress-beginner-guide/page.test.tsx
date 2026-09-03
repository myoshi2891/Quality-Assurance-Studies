import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, act, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/cypress-beginner-guide/page';
import NavBar from '../../app/cypress-beginner-guide/NavBar';

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

describe('Cypress Beginner Guide Page - Comprehensive Test Suite', () => {
  describe('Hero Section & Header Metadata', () => {
    it('renders the main doc header with title, eyebrow, and lede paragraph with reference links', () => {
      const { container } = render(<Page />);

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeDefined();
      expect(h1.textContent).toContain('Cypress入門ガイド');
      expect(h1.textContent).toContain('ステップバイステップ解説');

      const eyebrow = container.querySelector('.doc-eyebrow');
      expect(eyebrow).not.toBeNull();
      expect(eyebrow?.textContent).toContain('E2E / COMPONENT TESTING GUIDE');

      const lede = container.querySelector('.doc-lede');
      expect(lede).not.toBeNull();
      expect(lede?.textContent).toContain('Why Cypress?');
      expect(lede?.textContent).toContain('2026年7月時点');

      const whyCypressLink = lede?.querySelector('a[href="https://docs.cypress.io/app/get-started/why-cypress"]');
      expect(whyCypressLink).not.toBeNull();
      expect(whyCypressLink?.getAttribute('target')).toBe('_blank');
      expect(whyCypressLink?.getAttribute('rel')).toContain('noopener');
      expect(whyCypressLink?.getAttribute('rel')).toContain('noreferrer');

      const cypressIoLink = lede?.querySelector('a[href="https://www.cypress.io/"]');
      expect(cypressIoLink).not.toBeNull();
    });
  });

  describe('Section Structure & Headings', () => {
    const expectedSections = [
      { id: 'sec-1', badge: '01', title: 'Cypressとは何か' },
      { id: 'sec-2', badge: '02', title: 'なぜCypressが選ばれるのか' },
      { id: 'sec-3', badge: '03', title: 'Cypress vs Selenium vs Playwright' },
      { id: 'sec-4', badge: '04', title: 'インストール手順' },
      { id: 'sec-5', badge: '05', title: 'プロジェクト構成を理解する' },
      { id: 'sec-6', badge: '06', title: 'はじめてのテストを書く' },
      { id: 'sec-7', badge: '07', title: 'テストの構造：describe・it・hooks' },
      { id: 'sec-8', badge: '08', title: 'テストの種類：E2Eテスト vs コンポーネントテスト' },
      { id: 'sec-9', badge: '09', title: 'セレクター戦略とベストプラクティス' },
      { id: 'sec-10', badge: '10', title: 'コマンドラインの使い方' },
      { id: 'sec-11', badge: '11', title: 'CI/CDへの統合' },
      { id: 'sec-12', badge: '12', title: 'Cypress CloudとAI機能' },
      { id: 'sec-13', badge: '13', title: 'トレードオフと制限事項' },
      { id: 'sec-14', badge: '14', title: 'まとめと次のステップ' },
      { id: 'sec-15', badge: '15', title: '参考文献・出典一覧' },
    ];

    it('renders all 15 sections with exact IDs, badges, and titles', () => {
      const { container } = render(<Page />);

      expectedSections.forEach(({ id, badge, title }) => {
        const h2 = container.querySelector(`h2#${id}`);
        expect(h2).not.toBeNull();

        const badgeEl = h2?.querySelector('.sec-badge');
        expect(badgeEl?.textContent).toBe(badge);
        expect(h2?.textContent).toContain(title);
      });
    });

    it('contains source notes with outbound links across all content sections', () => {
      const { container } = render(<Page />);

      const sourceNotes = container.querySelectorAll('.source-note');
      expect(sourceNotes.length).toBeGreaterThanOrEqual(13);

      sourceNotes.forEach((note) => {
        const link = note.querySelector('a');
        expect(link).not.toBeNull();
        expect(link?.getAttribute('target')).toBe('_blank');
        expect(link?.getAttribute('rel')).toContain('noopener');
        expect(link?.getAttribute('rel')).toContain('noreferrer');
      });
    });

    it('renders callout blocks with appropriate themes (info, danger, success)', () => {
      const { container } = render(<Page />);

      const infoCallouts = container.querySelectorAll('.callout-info');
      expect(infoCallouts.length).toBeGreaterThan(0);

      const dangerCallouts = container.querySelectorAll('.callout-danger');
      expect(dangerCallouts.length).toBeGreaterThan(0);

      const successCallouts = container.querySelectorAll('.callout-success');
      expect(successCallouts.length).toBeGreaterThan(0);
    });
  });

  describe('Mermaid Visual Diagrams', () => {
    it('renders all 5 Mermaid diagrams wrapped in .mermaid-wrap containers', async () => {
      const { container } = render(<Page />);

      const diagramWraps = container.querySelectorAll('.mermaid-wrap');
      expect(diagramWraps.length).toBe(5);

      // mermaid.render は非同期のため、SVG 注入完了まで待って実際の描画を検証する
      await waitFor(() => {
        expect(container.querySelectorAll('[data-testid="mock-mermaid"]').length).toBe(5);
      });
    });
  });

  describe('Tables and Data Representations', () => {
    it('renders detailed comparison and reference tables with correct headers', () => {
      const { container } = render(<Page />);

      const tables = container.querySelectorAll('table');
      expect(tables.length).toBeGreaterThanOrEqual(4);

      // Section 3: 3 Tools Comparison (Cypress vs Selenium vs Playwright)
      expect(container.textContent).toContain('アーキテクチャ');
      expect(container.textContent).toContain('ブラウザ内実行（同一ループ）');
      expect(container.textContent).toContain('WebDriverプロトコル（外部から遠隔操作）');
      expect(container.textContent).toContain('CDP/独自のWebSocket接続（外部高速操作）');

      // Section 8: E2E vs Component Testing Table
      expect(container.textContent).toContain('テスト対象');
      expect(container.textContent).toContain('アプリの全レイヤー（フロントエンドからバックエンドまで）');
      expect(container.textContent).toContain('個々のコンポーネント単体');

      // Section 9: Selector Priority Table
      expect(container.textContent).toContain('優先度');
      expect(container.textContent).toContain('data-cy / data-test / data-testid');
      expect(container.textContent).toContain('最高（推奨）');

      // Section 10: CLI options Table
      expect(container.textContent).toContain('コマンド / オプション');
      expect(container.textContent).toContain('--browser');
    });
  });

  describe('Code Blocks & Syntax Highlighting', () => {
    it('wraps code blocks properly with code-line elements and syntax tokens', () => {
      const { container } = render(<Page />);

      const codeBlocks = container.querySelectorAll('pre');
      expect(codeBlocks.length).toBeGreaterThanOrEqual(15);

      const codeLines = container.querySelectorAll('.code-line');
      expect(codeLines.length).toBeGreaterThanOrEqual(35);

      // Verify presence of code content
      expect(container.textContent).toContain('describe(\'My First Test\', () => {');
      expect(container.textContent).toContain('cy.visit(\'https://example.cypress.io\')');
      expect(container.textContent).toContain('cypress.config.js');
      expect(container.textContent).toContain('npx cypress run --record --spec');
    });
  });

  describe('References & Footer', () => {
    it('renders references in Section 15 grouped by categories with valid URLs', () => {
      const { container } = render(<Page />);

      const sec15 = container.querySelector('#sec-15')?.parentElement;
      expect(sec15).not.toBeNull();

      expect(container.textContent).toContain('Cypress公式ドキュメント');
      expect(container.textContent).toContain('Cypress公式サイト');
      expect(container.textContent).toContain('Playwright公式情報（比較参照用）');
      expect(container.textContent).toContain('サンプルリポジトリ');

      const realworldLink = container.querySelector('a[href="https://github.com/cypress-io/cypress-realworld-app"]');
      expect(realworldLink).not.toBeNull();
      expect(realworldLink?.getAttribute('target')).toBe('_blank');
      expect(realworldLink?.getAttribute('rel')).toContain('noopener');
      expect(realworldLink?.getAttribute('rel')).toContain('noreferrer');
    });

    it('renders the document footer note', () => {
      const { container } = render(<Page />);

      const footer = container.querySelector('footer.doc-footer');
      expect(footer).not.toBeNull();
      expect(footer?.textContent).toContain('学習・社内共有目的で作成された二次資料');
    });
  });
});

describe('Cypress Beginner Guide External Link Safety', () => {
  it('gives every external https link target="_blank" and rel with noopener + noreferrer', () => {
    const { container } = render(<Page />);

    const externalLinks = container.querySelectorAll('a[href^="https://"]');
    expect(externalLinks.length).toBeGreaterThan(0);

    externalLinks.forEach((link) => {
      const href = link.getAttribute('href');
      expect(link.getAttribute('target')).toBe('_blank');
      const rel = link.getAttribute('rel') ?? '';
      // href をメッセージ代わりに含め、欠落したリンクを特定できるようにする
      expect(`${href} :: ${rel}`).toContain('noopener');
      expect(`${href} :: ${rel}`).toContain('noreferrer');
    });
  });
});

describe('Cypress Beginner Guide NavBar Component', () => {
  it('renders the sidebar navigation with brand icon, title, subtitle, and 15 anchor links', () => {
    const { container } = render(<NavBar />);

    const brand = container.querySelector('.sidebar-brand');
    expect(brand).not.toBeNull();
    expect(brand?.textContent).toContain('Cypress入門ガイド');

    const sub = container.querySelector('.sidebar-sub');
    expect(sub).not.toBeNull();
    expect(sub?.textContent).toContain('初学者のためのステップバイステップ解説');
    expect(sub?.textContent).toContain('2026年7月');

    const links = container.querySelectorAll('.sidebar nav a');
    expect(links).toHaveLength(15);

    for (let i = 1; i <= 15; i++) {
      const numStr = i.toString().padStart(2, '0');
      const link = links[i - 1];
      expect(link?.getAttribute('href')).toBe(`#sec-${i}`);
      expect(link?.querySelector('.num')?.textContent).toBe(numStr);
    }

    const firstLink = links[0];
    expect(firstLink?.classList.contains('active')).toBe(true);
    expect(firstLink?.getAttribute('aria-current')).toBe('location');
  });

  it('re-evaluates section visibility on scroll so the active link follows a ratio reversal', async () => {
    // 交差状態（どちらの節も読み取り帯に重なったまま）を維持しつつ、
    // 可視率だけが逆転するケース。IntersectionObserver の intersectionRatio を
    // 保持する実装では threshold: 0 のため通知が来ず、追従できなかった。
    const BAND_TOP = 0.15;
    const BAND_BOTTOM = 0.3;
    const viewportHeight = window.innerHeight;
    const bandTop = viewportHeight * BAND_TOP;
    const bandBottom = viewportHeight * BAND_BOTTOM;
    const bandHeight = bandBottom - bandTop;

    const rects: Record<string, { top: number; bottom: number }> = {
      // 帯の 75% を先頭節が、25% を次節が占める初期状態。
      'sec-1': { top: bandTop - 100, bottom: bandTop + bandHeight * 0.75 },
      'sec-2': { top: bandTop + bandHeight * 0.75, bottom: bandBottom + 400 },
    };

    const stubs = Object.keys(rects).map((id) => {
      const el = document.createElement('div');
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
        expect(container.querySelector('.sidebar nav a.active')?.getAttribute('href')).toBe('#sec-1');
      });

      // スクロールで可視率が逆転（帯の 25% / 75%）。交差状態自体は両節とも維持される。
      rects['sec-1'] = { top: bandTop - 400, bottom: bandTop + bandHeight * 0.25 };
      rects['sec-2'] = { top: bandTop + bandHeight * 0.25, bottom: bandBottom + 100 };
      act(() => {
        window.dispatchEvent(new Event('scroll'));
      });

      await waitFor(() => {
        const active = container.querySelector('.sidebar nav a.active');
        expect(active?.getAttribute('href')).toBe('#sec-2');
        expect(active?.getAttribute('aria-current')).toBe('location');
      });
    } finally {
      stubs.forEach((el) => el.remove());
    }
  });
});
