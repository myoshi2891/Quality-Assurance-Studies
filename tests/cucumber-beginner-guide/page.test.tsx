import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/cucumber-beginner-guide/page';
import NavBar from '../../app/cucumber-beginner-guide/NavBar';

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

describe('Cucumber Beginner Guide Page - Comprehensive Test Suite', () => {
  describe('Hero Section & Metadata', () => {
    it('renders the hero section with main title, eyebrow, lead paragraph, and metadata badges', () => {
      const { container } = render(<Page />);

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeDefined();
      expect(h1.textContent).toContain('Cucumber 入門ガイド');
      expect(h1.textContent).toContain('BDD');

      const eyebrow = container.querySelector('.hero .eyebrow');
      expect(eyebrow?.textContent).toContain('Beginner Guide / BDD / Testing');

      const lead = container.querySelector('.hero p.lead');
      expect(lead?.textContent).toContain('cucumber.io/docs');

      const badges = container.querySelectorAll('.hero .badge');
      expect(badges.length).toBe(4);
      expect(container.textContent).toContain('対象: BDD/Cucumber初学者');
      expect(container.textContent).toContain('前提知識: 不要');
      expect(container.textContent).toContain('全16セクション');
      expect(container.textContent).toContain('情報取得: 2026年7月');
    });
  });

  describe('Section Structure & Content Accuracy', () => {
    const expectedSections = [
      { id: 'sec01', kicker: 'SECTION 01', title: 'Cucumberとは何か' },
      { id: 'sec02', kicker: 'SECTION 02', title: 'BDD (振る舞い駆動開発) を理解する' },
      { id: 'sec03', kicker: 'SECTION 03', title: 'Gherkin構文を理解する' },
      { id: 'sec04', kicker: 'SECTION 04', title: 'ステップ定義 (Step Definitions) を書く' },
      { id: 'sec05', kicker: 'SECTION 05', title: 'Cucumber Expressionsでステップを賢くマッチさせる' },
      { id: 'sec06', kicker: 'SECTION 06', title: 'Hooks (フック) でセットアップ・後片付けを行う' },
      { id: 'sec07', kicker: 'SECTION 07', title: 'Tags (タグ) でシナリオを整理する' },
      { id: 'sec08', kicker: 'SECTION 08', title: 'ステップの実行結果を理解する' },
      { id: 'sec09', kicker: 'SECTION 09', title: 'Cucumberをインストールする' },
      { id: 'sec10', kicker: 'SECTION 10', title: '実践: 10分でCucumberを動かしてみる' },
      { id: 'sec11', kicker: 'SECTION 11', title: 'テスト結果をレポートする' },
      { id: 'sec12', kicker: 'SECTION 12', title: 'ベストプラクティスとアンチパターン' },
      { id: 'sec13', kicker: 'SECTION 13', title: 'CI/CDに組み込む' },
      { id: 'sec14', kicker: 'SECTION 14', title: 'エディタ・IDEサポート' },
      { id: 'sec15', kicker: 'SECTION 15', title: 'まとめと次のステップ' },
      { id: 'sec16', kicker: 'SECTION 16', title: '参考文献・出典一覧' },
    ];

    it('renders all 16 main sections with matching IDs, kickers, and h2 headings', () => {
      const { container } = render(<Page />);

      expectedSections.forEach(({ id, kicker, title }) => {
        const section = container.querySelector(`section#${id}`);
        expect(section).not.toBeNull();

        const kickerEl = section?.querySelector('.section-kicker');
        expect(kickerEl?.textContent).toBe(kicker);

        const h2 = section?.querySelector('h2');
        expect(h2?.textContent).toContain(title);
      });
    });

    it('contains reference callouts with external links for sections 01 through 14', () => {
      const { container } = render(<Page />);

      for (let i = 1; i <= 14; i++) {
        const secId = `sec${i.toString().padStart(2, '0')}`;
        const section = container.querySelector(`section#${secId}`);
        const callout = section?.querySelector('.callout');
        expect(callout).not.toBeNull();
        expect(callout?.textContent).toContain('参考:');
      }
    });
  });

  describe('Mermaid Diagrams & Visual Workflow', () => {
    it('renders exactly 7 Mermaid diagram containers with captions across the document', async () => {
      const { container } = render(<Page />);

      const diagramWraps = container.querySelectorAll('.mermaid-wrap');
      expect(diagramWraps.length).toBe(7);

      const captions = container.querySelectorAll('.mermaid-caption');
      expect(captions.length).toBe(7);

      // Mermaid は useEffect 内で非同期に描画されるため、SVG の注入完了を待つ。
      // ラッパーと caption だけを見ると描画失敗（例外時の代替表示）を検知できない。
      await waitFor(() => {
        expect(container.querySelectorAll('[data-testid="mock-mermaid"]').length).toBe(7);
      });

      const expectedCaptions = [
        '図: Gherkinステップ・Step Definition・テスト対象システムの関係',
        '図: Discovery → Formulation → Automation の反復サイクル',
        '図: Scenario Outlineがexamplesの行数だけ展開される様子',
        '図: フックを含めたシナリオ実行のライフサイクル',
        '図: ステップ実行結果の分岐',
        '図: Undefined → Pending → Failing → Passing のBDDサイクル',
        '図: CI環境におけるCucumber実行の流れ',
      ];

      expectedCaptions.forEach((cap) => {
        expect(container.textContent).toContain(cap);
      });
    });
  });

  describe('Data Tables and Matrix Representations', () => {
    it('renders all detailed data tables with appropriate headers', () => {
      const { container } = render(<Page />);

      const tables = container.querySelectorAll('table');
      expect(tables.length).toBeGreaterThanOrEqual(10);

      // Section 1: Gherkin roles
      expect(screen.getByText('曖昧さのない実行可能仕様')).toBeDefined();
      expect(screen.getByText('人間にもコンピュータにも読める形式でシステムの振る舞いを定義する')).toBeDefined();

      // Section 2: BDD phases
      const sec02Table = container.querySelector('#sec02 table');
      expect(sec02Table).not.toBeNull();
      expect(sec02Table?.textContent).toContain('Discovery');
      expect(sec02Table?.textContent).toContain('Formulation');
      expect(sec02Table?.textContent).toContain('Automation');

      // Section 3: Gherkin keywords
      const sec03Table = container.querySelector('#sec03 table');
      expect(sec03Table).not.toBeNull();
      expect(sec03Table?.textContent).toContain('Scenario Outline');
      expect(sec03Table?.textContent).toContain('Scenario Template');

      // Section 5: Parameter types
      const sec05Table = container.querySelector('#sec05 table');
      expect(sec05Table).not.toBeNull();
      expect(sec05Table?.textContent).toContain('{bigdecimal}');
      expect(sec05Table?.textContent).toContain('{int}');

      // Section 6: Hooks
      const sec06Table = container.querySelector('#sec06 table');
      expect(sec06Table).not.toBeNull();
      expect(sec06Table?.textContent).toContain('BeforeStep');
      expect(sec06Table?.textContent).toContain('AfterAll');

      // Section 7: Tag expressions
      const sec07Table = container.querySelector('#sec07 table');
      expect(sec07Table).not.toBeNull();
      expect(sec07Table?.textContent).toContain('@wip and not @slow');

      // Section 8: Step execution results
      expect(screen.getByText('Undefined(未定義)')).toBeDefined();
      expect(screen.getByText('Ambiguous(曖昧)')).toBeDefined();

      // Section 9: Implementations
      const sec09Table = container.querySelector('#sec09 table');
      expect(sec09Table).not.toBeNull();
      expect(sec09Table?.textContent).toContain('official');
      expect(container.querySelector('#sec09')?.textContent).toContain('Cucumber-JVM');
      expect(container.querySelector('#sec09')?.textContent).toContain('Pytest-BDD');

      // Section 11: Reporters
      expect(screen.getByText('message')).toBeDefined();
      expect(screen.getByText('Cucumber Messages形式の生データを出力')).toBeDefined();

      // Section 14: IDE support
      expect(screen.getByText('Visual Studio Code')).toBeDefined();
      expect(screen.getByText('IntelliJ IDEA / Eclipse')).toBeDefined();
    });
  });

  describe('Code Blocks and Syntax Highlighting', () => {
    it('wraps code lines inside code-line containers with data-lang badges', () => {
      const { container } = render(<Page />);

      const codeBlocks = container.querySelectorAll('pre:not(.mermaid)');
      expect(codeBlocks.length).toBeGreaterThanOrEqual(15);

      const codeLines = container.querySelectorAll('.code-line');
      expect(codeLines.length).toBeGreaterThanOrEqual(50);

      // Verify presence of specific data-lang attributes
      const gherkinBlocks = container.querySelectorAll('pre[data-lang="gherkin"]');
      expect(gherkinBlocks.length).toBeGreaterThanOrEqual(5);

      const jsBlocks = container.querySelectorAll('pre[data-lang="javascript"]');
      expect(jsBlocks.length).toBeGreaterThanOrEqual(2);

      const javaBlocks = container.querySelectorAll('pre[data-lang="java"]');
      expect(javaBlocks.length).toBeGreaterThanOrEqual(3);

      const shellBlocks = container.querySelectorAll('pre[data-lang="shell"]');
      expect(shellBlocks.length).toBeGreaterThanOrEqual(2);
    });

    it('applies Gherkin and Prism syntax highlighting token classes', () => {
      const { container } = render(<Page />);

      expect(container.querySelectorAll('.gk-keyword').length).toBeGreaterThan(0);
      expect(container.querySelectorAll('.gk-step').length).toBeGreaterThan(0);
      expect(container.querySelectorAll('.token.keyword').length).toBeGreaterThan(0);
      expect(container.querySelectorAll('.token.function').length).toBeGreaterThan(0);
    });
  });

  describe('Summary Cards and Reference List', () => {
    it('renders all 13 summary cards in section 15 with correct numbering', () => {
      const { container } = render(<Page />);

      const summaryCards = container.querySelectorAll('#sec15 .summary-card');
      expect(summaryCards.length).toBe(13);

      for (let i = 1; i <= 13; i++) {
        const numStr = i.toString().padStart(2, '0');
        const card = summaryCards[i - 1];
        expect(card?.querySelector('.n')?.textContent).toBe(numStr);
      }

      expect(container.textContent).toContain('Example Mapping');
      expect(container.textContent).toContain('Browser automation');
    });

    it('renders all 21 references in section 16 with numbered indices and valid URLs', () => {
      const { container } = render(<Page />);

      const refItems = container.querySelectorAll('#sec16 .ref-list li');
      expect(refItems.length).toBe(21);

      for (let i = 1; i <= 21; i++) {
        const numStr = i.toString().padStart(2, '0');
        const item = refItems[i - 1];
        expect(item?.querySelector('.ref-num')?.textContent).toBe(numStr);

        const link = item?.querySelector('a');
        expect(link).not.toBeNull();
        expect(link?.getAttribute('href')).toMatch(/^https:\/\/.*cucumber/);
        expect(link?.getAttribute('target')).toBe('_blank');
        expect(link?.getAttribute('rel')).toContain('noopener');
      }
    });

    it('renders the footer note regarding documentation currency', () => {
      const { container } = render(<Page />);

      const footerNote = container.querySelector('.footer-note');
      expect(footerNote).not.toBeNull();
      expect(footerNote?.textContent).toContain('Cucumber公式ドキュメントは継続的に更新されています');
      expect(footerNote?.textContent).toContain('2026年7月');
    });
  });
});

describe('Cucumber Beginner Guide NavBar Component', () => {
  it('renders the sidebar navigation with brand mark, title, sub-label, and 16 anchor links', () => {
    const { container } = render(<NavBar />);

    const nav = screen.getByRole('navigation', { name: '目次' });
    expect(nav).toBeDefined();

    const mark = container.querySelector('.sidebar-brand .mark');
    expect(mark?.textContent).toBe('🥒');

    expect(screen.getByText('Cucumber 入門ガイド')).toBeDefined();
    expect(screen.getByText('BDDではじめる自動テスト')).toBeDefined();

    const links = container.querySelectorAll('.sidebar nav a');
    expect(links).toHaveLength(16);

    for (let i = 1; i <= 16; i++) {
      const numStr = i.toString().padStart(2, '0');
      const link = links[i - 1];
      expect(link?.getAttribute('href')).toBe(`#sec${numStr}`);
      expect(link?.querySelector('.num')?.textContent).toBe(numStr);
    }

    const firstLink = links[0];
    expect(firstLink?.classList.contains('active')).toBe(true);
    expect(firstLink?.getAttribute('aria-current')).toBe('location');
  });

  it('renders the sidebar footer with source metadata', () => {
    const { container } = render(<NavBar />);

    const footer = container.querySelector('.sidebar-footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('情報源:');
    expect(footer?.textContent).toContain('cucumber.io/docs');
    expect(footer?.textContent).toContain('取得時点: 2026年7月');
  });
});
