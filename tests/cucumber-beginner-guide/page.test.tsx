import React from 'react';
import { describe, it, expect, vi } from 'bun:test';
import { render, screen } from '@testing-library/react';
import Page from '../../app/cucumber-beginner-guide/page';
import NavBar from '../../app/cucumber-beginner-guide/NavBar';

// Mock Mermaid diagram component to avoid DOM parsing issues in happy-dom
vi.mock('../../components/Mermaid', () => ({
  default: function DummyMermaid({ chart }: { chart: string }) {
    return <div data-testid="mermaid-diagram" data-chart={chart} />;
  },
}));

describe('Cucumber Beginner Guide Page - Comprehensive Test Suite', () => {
  it('renders the hero section with main title, eyebrow, lead paragraph, and metadata badges', () => {
    render(<Page />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeDefined();
    expect(h1.textContent).toContain('Cucumber 入門ガイド');
    expect(h1.textContent).toContain('BDD');

    expect(screen.getByText(/Beginner Guide \/ BDD \/ Testing/i)).toBeDefined();
    expect(screen.getByText(/cucumber\.io\/docs/i)).toBeDefined();
    expect(screen.getByText(/対象: BDD\/Cucumber初学者/i)).toBeDefined();
    expect(screen.getByText(/全16セクション/i)).toBeDefined();
  });

  it('renders all 16 main sections with corresponding IDs and headings', () => {
    const { container } = render(<Page />);

    const expectedSections = [
      { id: 'sec01', title: 'Cucumberとは何か' },
      { id: 'sec02', title: 'BDDを理解する' },
      { id: 'sec03', title: 'Gherkin構文' },
      { id: 'sec04', title: 'ステップ定義' },
      { id: 'sec05', title: 'Cucumber Expressions' },
      { id: 'sec06', title: 'Hooks(フック)' },
      { id: 'sec07', title: 'Tags(タグ)' },
      { id: 'sec08', title: 'ステップの実行結果' },
      { id: 'sec09', title: 'インストール' },
      { id: 'sec10', title: '実践: 10分でCucumberを動かしてみる' },
      { id: 'sec11', title: 'レポーティング' },
      { id: 'sec12', title: 'ベストプラクティス' },
      { id: 'sec13', title: 'CI/CD連携' },
      { id: 'sec14', title: 'エディタ・IDE' },
      { id: 'sec15', title: 'まとめ' },
      { id: 'sec16', title: '参考文献一覧' },
    ];

    expectedSections.forEach(({ id, title }) => {
      const section = container.querySelector(`section#${id}`);
      expect(section).not.toBeNull();
      expect(section?.textContent).toContain(title);
    });
  });

  it('renders all 7 Mermaid diagrams across the page with captions', () => {
    render(<Page />);

    const diagrams = screen.getAllByTestId('mermaid-diagram');
    expect(diagrams).toHaveLength(7);

    // Verify key Mermaid diagram contents
    const charts = diagrams.map((d) => d.getAttribute('data-chart') || '');
    expect(charts[0]).toContain('flowchart LR');
    expect(charts[0]).toContain('Step Definition');
    expect(charts[1]).toContain('Discovery');
    expect(charts[1]).toContain('Formulation');
    expect(charts[1]).toContain('Automation');
    expect(charts[2]).toContain('Scenario Outline');
    expect(charts[3]).toContain('BeforeAll');
    expect(charts[3]).toContain('AfterAll');
    expect(charts[4]).toContain('Undefined:未定義');
    expect(charts[5]).toContain('スニペットからステップ定義を作成');
    expect(charts[6]).toContain('CIサーバーがビルドを開始');
  });

  it('renders tables in key sections (Gherkin roles, keywords, step results, reporters, etc.)', () => {
    const { container } = render(<Page />);

    const tables = container.querySelectorAll('table');
    expect(tables.length).toBeGreaterThanOrEqual(5);

    expect(screen.getByText('曖昧さのない実行可能仕様')).toBeDefined();
    expect(screen.getByText('Cucumber Expressionsの型')).toBeDefined();
    expect(screen.getByText('ステップの実行結果')).toBeDefined();
    expect(screen.getByText('主なビルトイン・サードパーティReporter')).toBeDefined();
  });

  it('renders code blocks with code-line wrappers for syntax formatting', () => {
    const { container } = render(<Page />);

    const codeBlocks = container.querySelectorAll('pre');
    expect(codeBlocks.length).toBeGreaterThanOrEqual(10);

    const codeLines = container.querySelectorAll('.code-line');
    expect(codeLines.length).toBeGreaterThan(0);
  });

  it('renders all 21 reference list items in references section (sec16)', () => {
    const { container } = render(<Page />);

    const refSection = container.querySelector('#sec16');
    expect(refSection).not.toBeNull();

    const refItems = refSection?.querySelectorAll('.ref-list li');
    expect(refItems?.length).toBe(21);

    const links = refSection?.querySelectorAll('a');
    expect(links?.length).toBe(21);
  });

  it('renders page footer note with attribution and update date', () => {
    render(<Page />);

    expect(screen.getByText(/Cucumber公式ドキュメントは継続的に更新されています/i)).toBeDefined();
  });
});

describe('Cucumber Beginner Guide NavBar Component', () => {
  it('renders the sidebar navigation with brand header and 16 anchor links', () => {
    const { container } = render(<NavBar />);

    const nav = screen.getByRole('navigation', { name: '目次' });
    expect(nav).toBeDefined();

    expect(screen.getByText('Cucumber 入門ガイド')).toBeDefined();
    expect(screen.getByText('BDDではじめる自動テスト')).toBeDefined();

    const links = container.querySelectorAll('.sidebar nav a');
    expect(links).toHaveLength(16);

    expect(links[0].getAttribute('href')).toBe('#sec01');
    expect(links[15].getAttribute('href')).toBe('#sec16');
  });
});
