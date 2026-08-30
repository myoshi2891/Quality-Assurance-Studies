import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import GithubActionsGuidePage from '../../app/github-actions-guide/page';

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

describe('GitHub Actions Guide Page', () => {
  it('renders the hero section with main title, eyebrow, and metadata', () => {
    const { container } = render(<GithubActionsGuidePage />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('GitHub Actions');

    const eyebrow = container.querySelector('.eyebrow');
    expect(eyebrow?.textContent).toContain('CI/CD');

    const meta = container.querySelector('.hero-meta');
    expect(meta?.textContent).toContain('全18章');
    expect(meta?.textContent).toContain('中級');
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

    expect(screen.getByRole('heading', { level: 2, name: /はじめに/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /アーキテクチャ全体像/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /ワークフロー構文/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /トリガーイベント/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /マトリックス戦略/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /キャッシュとアーティファクト/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /並行実行制御/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /再利用可能なワークフロー/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /GITHUB_TOKEN/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /Secrets/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /OIDC/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /セキュリティ脅威/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /SLSA/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /モニタリング/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /コストと料金/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /実践例/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /チェックリスト/ })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /参考資料/ })).toBeDefined();
  });

  it('renders all 6 Mermaid diagrams across the page', () => {
    const { container } = render(<GithubActionsGuidePage />);
    const diagrams = container.querySelectorAll('.mermaid, .mermaid-wrapper');
    expect(diagrams.length).toBeGreaterThanOrEqual(6);
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

