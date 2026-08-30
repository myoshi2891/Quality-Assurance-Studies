import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import PlaywrightBeginnerPage from '../../app/playwright-beginner-guide/page';
import NavBar from '../../app/playwright-beginner-guide/NavBar';

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

describe('Playwright Beginner Guide Page - Comprehensive Test Suite', () => {
  it('renders the hero section with main title, eyebrow, lead paragraph, and metadata badges', () => {
    const { container } = render(<PlaywrightBeginnerPage />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Playwright');
    expect(h1.textContent).toContain('完全入門ガイド');
    expect(h1.textContent).toContain('初学者のためのステップバイステップ解説');

    const eyebrow = container.querySelector('.hero .hero-eyebrow');
    expect(eyebrow?.textContent).toContain('QA ENGINEERING GUIDE');

    const lead = container.querySelector('.hero p.lead');
    expect(lead?.textContent).toContain('Microsoft製のE2Eテスト・ブラウザ自動化フレームワーク');

    const badges = container.querySelectorAll('.hero .badge');
    expect(badges.length).toBeGreaterThanOrEqual(4);
  });

  it('renders all 18 main sections with corresponding IDs and headings', () => {
    const { container } = render(<PlaywrightBeginnerPage />);

    const sectionIds = [
      'sec-01',
      'sec-02',
      'sec-03',
      'sec-04',
      'sec-05',
      'sec-06',
      'sec-07',
      'sec-08',
      'sec-09',
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

    sectionIds.forEach((id) => {
      const section = container.querySelector(`section#${id}`);
      expect(section).not.toBeNull();
      const h2 = section?.querySelector('h2');
      expect(h2).not.toBeNull();
      expect(h2?.textContent?.length).toBeGreaterThan(0);
    });
  });

  it('renders all 16 Mermaid diagram blocks with captions', () => {
    const { container } = render(<PlaywrightBeginnerPage />);
    const diagrams = container.querySelectorAll('.diagram-wrap');
    expect(diagrams.length).toBe(16);

    const captions = container.querySelectorAll('.diagram-caption');
    expect(captions.length).toBe(16);
  });

  it('renders tables across key sections', () => {
    const { container } = render(<PlaywrightBeginnerPage />);
    const tables = container.querySelectorAll('table');
    expect(tables.length).toBeGreaterThanOrEqual(6);
  });

  it('renders callout boxes with appropriate styles', () => {
    const { container } = render(<PlaywrightBeginnerPage />);
    const callouts = container.querySelectorAll('.callout');
    expect(callouts.length).toBeGreaterThan(0);
  });

  it('renders code blocks across sections', () => {
    const { container } = render(<PlaywrightBeginnerPage />);
    const codeBlocks = container.querySelectorAll('.code-block');
    expect(codeBlocks.length).toBeGreaterThan(0);
  });

  it('renders reference list items in references section (sec-18)', () => {
    const { container } = render(<PlaywrightBeginnerPage />);
    const sec18 = container.querySelector('section#sec-18');
    expect(sec18).not.toBeNull();
    const refs = sec18?.querySelectorAll('.ref-list li');
    expect(refs?.length).toBeGreaterThanOrEqual(5);
  });

  it('renders page footer with copyright or official link info', () => {
    const { container } = render(<PlaywrightBeginnerPage />);
    const footer = container.querySelector('footer.page-footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('playwright.dev');
  });
});

describe('Playwright Beginner Guide NavBar Component', () => {
  it('renders the sidebar navigation with title and all 18 anchor links', () => {
    const { container } = render(<NavBar />);
    const sidebar = container.querySelector('nav.sidebar');
    expect(sidebar).not.toBeNull();

    const tocLinks = container.querySelectorAll('.toc a');
    expect(tocLinks.length).toBe(18);

    expect(tocLinks[0]?.getAttribute('href')).toBe('#sec-01');
    expect(tocLinks[17]?.getAttribute('href')).toBe('#sec-18');
  });
});
