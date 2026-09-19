import { afterAll, afterEach, beforeAll, beforeEach, describe, it, expect, mock } from 'bun:test';
import { render, cleanup, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page, { DIAGRAM_STRUCTURE } from '../../app/ai-driven-software-testing-guide/page';
import NavBar, { TOC_ITEMS, TOC_GROUPS } from '../../app/ai-driven-software-testing-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
let mermaidRenderMock: ReturnType<typeof mock>;
const renderedCharts: string[] = [];

beforeEach(() => {
  renderedCharts.length = 0;
});

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaidRenderMock = mock(async (_id: string, text: string) => {
    renderedCharts.push(text);
    return {
      svg: '<svg data-testid="mock-mermaid"></svg>',
      diagramType: 'flowchart',
    };
  });
  mermaid.render = mermaidRenderMock as unknown as typeof mermaid.render;

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

describe('AI-Driven Software Testing Guide - Category 1: Foundation & Intro', () => {
  it('renders hero header with title, subtitle, and 3 meta tags', () => {
    const { container } = render(<Page />);
    const h1 = container.querySelector('h1');
    expect(h1?.textContent?.trim()).toBe('AI駆動ソフトウェアテスト入門ガイド');

    const kicker = container.querySelector('.hero-kicker');
    expect(kicker?.textContent?.trim()).toBe('初学者向け解説ガイド');

    const lead = container.querySelector('.hero-lead');
    expect(lead?.textContent).toContain('Srinivasa Rao Bittla著『AI-Driven Software Testing');

    const tags = container.querySelectorAll('.hero-tag');
    expect(tags.length).toBe(3);
    expect(tags[0].textContent).toContain('全3部 全18章');
    expect(tags[1].textContent).toContain('図解14点 Mermaid');
    expect(tags[2].textContent).toContain('参考文献12件');
  });

  it('renders sidebar navigation with all 29 TOC items across 5 groups', () => {
    expect(TOC_ITEMS.length).toBe(29);
    expect(TOC_GROUPS.length).toBe(5);

    const { container } = render(<NavBar />);
    const links = container.querySelectorAll('.sidebar .nav-a');
    expect(links.length).toBe(29);

    expect(links[0].getAttribute('data-target')).toBe('intro');
    expect(links[0].textContent).toContain('この記事の読み方');
    expect(links[1].getAttribute('data-target')).toBe('glossary');
    expect(links[1].textContent).toContain('用語ミニ辞典');
    expect(links[2].getAttribute('data-target')).toBe('book-info');
    expect(links[2].textContent).toContain('書籍情報');
    expect(links[3].getAttribute('data-target')).toBe('structure');
    expect(links[3].textContent).toContain('全体構成をつかむ');
    expect(links[28].getAttribute('data-target')).toBe('references');
    expect(links[28].textContent).toContain('参考文献');

    const groups = container.querySelectorAll('.sidebar .nav-group-label');
    expect(groups.length).toBe(5);
    expect(groups[0].textContent).toBe('はじめに');
    expect(groups[1].textContent).toBe('Part I 基礎編');
    expect(groups[2].textContent).toBe('Part II 実践編');
    expect(groups[3].textContent).toBe('Part III 発展編');
    expect(groups[4].textContent).toBe('まとめと参考情報');
  });

  it('renders section #intro with lead paragraph and reading instructions', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#intro');
    expect(section).not.toBeNull();
    const kicker = section?.querySelector('.section-kicker');
    expect(kicker?.textContent).toContain('この記事の読み方');
    const items = section?.querySelectorAll('ul li');
    expect(items?.length).toBe(4);
    expect(items?.[0].textContent).toContain('ソフトウェアテストの基礎');
    expect(items?.[1].textContent).toContain('図解はすべてMermaid');
    expect(items?.[2].textContent).toContain('各ステップは書籍の該当する章に対応');
    expect(items?.[3].textContent).toContain('Mark WinteringhamやAngie Jones');
  });

  it('renders section #glossary with 7 key terms in a table', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#glossary');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent?.trim()).toBe('まず押さえておきたい7つの用語');

    const rows = section?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(7);

    const terms = [
      'QE（品質エンジニアリング）',
      'SDLC',
      'STLC',
      '自己修復（セルフヒーリング）テスト',
      '予測分析',
      'CI/CD',
      'LLM',
    ];
    rows?.forEach((row, i) => {
      expect(row.querySelector('td')?.textContent?.trim()).toBe(terms[i]);
    });
  });

  it('renders section #book-info with book card, cover, and kv-table', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#book-info');
    expect(section).not.toBeNull();

    const coverTitle = section?.querySelector('.book-cover-title');
    expect(coverTitle?.textContent?.trim()).toBe('AI-Driven Software Testing');
    const coverAuthor = section?.querySelector('.book-cover-author');
    expect(coverAuthor?.textContent?.trim()).toBe('Srinivasa Rao Bittla');

    const kvRows = section?.querySelectorAll('.kv-table tbody tr');
    expect(kvRows?.length).toBe(7);
    expect(kvRows?.[0].querySelector('th')?.textContent?.trim()).toBe('著者');
    expect(kvRows?.[0].querySelector('td')?.textContent?.trim()).toBe('Srinivasa Rao Bittla');
    expect(kvRows?.[1].querySelector('th')?.textContent?.trim()).toBe('出版社');
    expect(kvRows?.[1].querySelector('td')?.textContent?.trim()).toBe('Apress（O\'Reilly収録）');
    expect(kvRows?.[2].querySelector('th')?.textContent?.trim()).toBe('刊行');
    expect(kvRows?.[2].querySelector('td')?.textContent?.trim()).toBe('2025年10月');
    expect(kvRows?.[3].querySelector('th')?.textContent?.trim()).toBe('ページ数');
    expect(kvRows?.[3].querySelector('td')?.textContent?.trim()).toBe('536ページ');
    expect(kvRows?.[4].querySelector('th')?.textContent?.trim()).toBe('読者レベル');
    expect(kvRows?.[4].querySelector('td')?.textContent?.trim()).toBe('中級から上級（Intermediate to advanced）');
    expect(kvRows?.[6].querySelector('th')?.textContent?.trim()).toBe('構成');
    expect(kvRows?.[6].querySelector('td')?.textContent?.trim()).toBe('全3部・18章');
  });

  it('renders section #structure with FIG 01 structure Mermaid diagram and caption', async () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#structure');
    expect(section).not.toBeNull();
    const h2 = section?.querySelector('h2');
    expect(h2?.textContent?.trim()).toBe('3部構成の地図');

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent?.trim()).toBe('図1 書籍全体の3部構成');

    const diagramWrap = section?.querySelector('.diagram-block');
    expect(diagramWrap).not.toBeNull();

    await waitFor(() => {
      const rendered = section?.querySelectorAll('svg[data-testid="mock-mermaid"]');
      expect(rendered?.length).toBe(1);
    });

    expect(renderedCharts).toContain(DIAGRAM_STRUCTURE);
  });
});
