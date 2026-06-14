import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ctfl-at-complete-guide/page';
import { readFileSync } from 'fs';
import path from 'path';

afterEach(() => {
  cleanup();
});

describe('ISTQB CTFL-AT Complete Guide Page', () => {
  it('renders the main heading for Foundation Level Agile Tester', () => {
    render(<Page />);
    const h1 = screen.getByRole('heading', {
      level: 1,
      name: /Foundation Level Agile Tester.*CTFL-AT/,
    });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/Foundation Level Agile Tester/);
    expect(h1).toHaveTextContent(/CTFL-AT/);
  });

  it('renders the core chapter headings', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /Chapter 0: CTFL-AT 概要と資格ロードマップ/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Chapter 1: アジャイルソフトウェア開発/,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Chapter 3: アジャイルテスト技法とツール/,
      }),
    ).toBeInTheDocument();
  });

  // --- Design System Tests (Red phase: should fail before implementation) ---

  it('has hero-badge element in the hero section', () => {
    render(<Page />);
    const heroBadge = document.querySelector('.hero-badge');
    expect(heroBadge).toBeInTheDocument();
  });

  it('has toc-grid for table of contents', () => {
    render(<Page />);
    const tocGrid = document.querySelector('.toc-grid');
    expect(tocGrid).toBeInTheDocument();
  });

  it('has chapter-header elements for chapter sections', () => {
    render(<Page />);
    const chapterHeaders = document.querySelectorAll('.chapter-header');
    expect(chapterHeaders.length).toBeGreaterThan(0);
  });

  it('agile test levels mermaid uses flowchart LR not TD', () => {
    const pageSrc = readFileSync(
      path.join(process.cwd(), 'app/istqb-ctfl-at-complete-guide/page.tsx'),
      'utf-8',
    );
    // アジャイルテストレベルのMermaid図がflowchart LRを使用していること
    // The agile mermaid diagram that follows "従来型 vs アジャイルのテストレベル" must use LR
    const testLevelSection = pageSrc.slice(pageSrc.indexOf('従来型 vs アジャイルのテストレベル'));
    const firstMermaidAfter = testLevelSection.slice(
      testLevelSection.indexOf('flowchart'),
      testLevelSection.indexOf('flowchart') + 200,
    );
    // Both diagrams in the test levels section should use LR (not TD)
    expect(pageSrc).not.toMatch(/従来型 vs アジャイルのテストレベル[\s\S]{0,2000}flowchart TD/);
  });
});
