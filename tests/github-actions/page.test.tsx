import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import GithubActionsBeginnerPage from '../../app/github-actions/page';
import NavBar from '../../app/github-actions/NavBar';

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

describe('GitHub Actions Beginner Guide Page - Comprehensive Test Suite', () => {
  it('renders the hero section with main title, kicker, lead paragraph, and source note', () => {
    const { container } = render(<GithubActionsBeginnerPage />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('GitHub Actions 完全ガイド');
    expect(h1.textContent).toContain('初学者向けステップバイステップ解説');

    const kicker = container.querySelector('.hero .kicker');
    expect(kicker?.textContent).toContain('Step-by-step Beginner Guide');

    const lead = container.querySelector('.hero p.lead');
    expect(lead?.textContent).toContain('ワークフローの基本概念から');

    const sourceNote = container.querySelector('.hero .source-note');
    expect(sourceNote?.textContent).toContain('GitHub Actions公式ドキュメント');
    expect(sourceNote?.textContent).toContain('docs.github.com/en/actions');
  });

  it('renders all 18 main sections with corresponding IDs and headings', () => {
    const { container } = render(<GithubActionsBeginnerPage />);

    const sectionIds = [
      'sec-overview',
      'sec-concepts',
      'sec-quickstart',
      'sec-syntax',
      'sec-events',
      'sec-runners',
      'sec-conditions',
      'sec-matrix',
      'sec-secrets',
      'sec-token',
      'sec-caching',
      'sec-artifacts',
      'sec-reusable',
      'sec-practical',
      'sec-security',
      'sec-troubleshooting',
      'sec-summary',
      'sec-references',
    ];

    sectionIds.forEach((id) => {
      const section = container.querySelector(`section#${id}`);
      expect(section).not.toBeNull();
      const h2 = section?.querySelector('h2');
      expect(h2).not.toBeNull();
      expect(h2?.textContent?.length).toBeGreaterThan(0);
    });
  });

  it('renders all 9 Mermaid diagram blocks', () => {
    const { container } = render(<GithubActionsBeginnerPage />);
    const diagrams = container.querySelectorAll('.diagram-card');
    expect(diagrams.length).toBe(9);
  });

  it('renders tables in key sections', () => {
    const { container } = render(<GithubActionsBeginnerPage />);
    const tables = container.querySelectorAll('table');
    expect(tables.length).toBeGreaterThanOrEqual(5);
  });

  it('renders reference list items in references section', () => {
    const { container } = render(<GithubActionsBeginnerPage />);
    const refList = container.querySelector('#sec-references .ref-list');
    expect(refList).not.toBeNull();
    const items = refList?.querySelectorAll('li');
    expect(items?.length).toBeGreaterThanOrEqual(10);
  });

  it('renders page footer with copyright or attribution info', () => {
    const { container } = render(<GithubActionsBeginnerPage />);
    const footer = container.querySelector('footer.page-footer');
    expect(footer).not.toBeNull();
  });
});

describe('GitHub Actions Beginner Guide NavBar Component', () => {
  it('renders the sidebar navigation with brand header and 18 anchor links', () => {
    const { container } = render(<NavBar />);

    const nav = screen.getByRole('navigation', { name: '目次ナビゲーション' });
    expect(nav).not.toBeNull();

    const brand = container.querySelector('.sidebar-brand');
    expect(brand?.textContent).toContain('GitHub Actions');
    expect(brand?.textContent).toContain('完全ガイド');

    const links = nav.querySelectorAll('.sidebar-nav a');
    expect(links.length).toBe(18);

    const expectedHrefs = [
      '#sec-overview',
      '#sec-concepts',
      '#sec-quickstart',
      '#sec-syntax',
      '#sec-events',
      '#sec-runners',
      '#sec-conditions',
      '#sec-matrix',
      '#sec-secrets',
      '#sec-token',
      '#sec-caching',
      '#sec-artifacts',
      '#sec-reusable',
      '#sec-practical',
      '#sec-security',
      '#sec-troubleshooting',
      '#sec-summary',
      '#sec-references',
    ];

    expect(links.length).toBe(expectedHrefs.length);

    const actualHrefs = Array.from(links).map((link) =>
      link.getAttribute('href')
    );
    expect(actualHrefs).toEqual(expectedHrefs);
  });
});
