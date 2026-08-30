import { describe, it, expect, vi } from 'bun:test';
import { render, screen } from '@testing-library/react';
import GithubActionsGuidePage from '../../app/github-actions-guide/page';

// Mock Mermaid diagram component to avoid DOM/canvas issues in test environment
vi.mock('@/components/Mermaid', () => ({
  default: function MockMermaid({ chart }: { chart: string }) {
    return <div data-testid="mermaid-diagram">{chart}</div>;
  },
}));

describe('GitHub Actions Guide Page', () => {
  it('renders the hero section with main title, eyebrow, and metadata', () => {
    render(<GithubActionsGuidePage />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveTextContent('GitHub Actions 中級〜上級者向け完全ガイド');

    expect(screen.getByText(/CI\/CD/)).toBeInTheDocument();
    expect(screen.getByText(/全18章/)).toBeInTheDocument();
    expect(screen.getByText(/中級〜上級/)).toBeInTheDocument();
  });

  it('renders all 18 main sections with corresponding IDs and headings', () => {
    const { container } = render(<GithubActionsGuidePage />);

    const sectionIds = [
      'sec-1',
      'sec-2',
      'sec-3',
      'sec-4',
      'sec-5',
      'sec-6',
      'sec-7',
      'sec-8',
      'sec-9',
      'sec-10',
      'sec-11',
      'sec-12',
      'sec-13',
      'sec-14',
      'sec-15',
      'sec-16',
      'sec-17',
      'sec-18',
    ];

    for (const id of sectionIds) {
      const section = container.querySelector(`#${id}`);
      expect(section).not.toBeNull();
    }

    expect(screen.getByRole('heading', { level: 2, name: /はじめに/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /アーキテクチャ全体像/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /ワークフロー構文/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /トリガーイベント/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /マトリックス戦略/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /キャッシュとアーティファクト/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /並行実行制御/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /再利用可能なワークフロー/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /GITHUB_TOKEN/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Secrets \/ Environments/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /OIDCキーレス認証/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /セキュリティ脅威と対策/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /SLSA \/ Attestations/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /モニタリング・デバッグ/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /コストと料金動向/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /実践パイプライン例/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /チェックリスト/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /参考資料/ })).toBeInTheDocument();
  });

  it('renders all 6 Mermaid diagrams across the page', () => {
    render(<GithubActionsGuidePage />);
    const diagrams = screen.getAllByTestId('mermaid-diagram');
    expect(diagrams).toHaveLength(6);
  });

  it('renders the sidebar navigation with all 18 TOC links', () => {
    const { container } = render(<GithubActionsGuidePage />);
    const sidebar = container.querySelector('#sidebar-nav, nav');
    expect(sidebar).not.toBeNull();

    const tocLinks = sidebar?.querySelectorAll('a');
    expect(tocLinks?.length).toBeGreaterThanOrEqual(18);

    const hrefs = Array.from(tocLinks ?? []).map((a) => a.getAttribute('href'));
    expect(hrefs).toContain('#sec-1');
    expect(hrefs).toContain('#sec-6');
    expect(hrefs).toContain('#sec-11');
    expect(hrefs).toContain('#sec-18');
  });

  it('renders essential tables, callouts, and checklists', () => {
    const { container } = render(<GithubActionsGuidePage />);

    // Check for callout elements
    const callouts = container.querySelectorAll('.callout');
    expect(callouts.length).toBeGreaterThan(0);

    // Check for checklist items in section 17
    const checklist = container.querySelector('.checklist');
    expect(checklist).not.toBeNull();
    const checkItems = checklist?.querySelectorAll('li');
    expect(checkItems?.length).toBeGreaterThan(0);

    // Check for reference list items in section 18
    const refList = container.querySelector('.ref-list');
    expect(refList).not.toBeNull();
  });
});
