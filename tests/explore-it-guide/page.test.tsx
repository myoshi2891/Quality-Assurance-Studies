import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/explore-it-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/explore-it-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
let mermaidRenderMock: ReturnType<typeof mock>;
const renderedCharts: string[] = [];

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

describe('Explore It! Guide - Category 1 (Hero, NavBar, Section 01-04)', () => {
  it('renders within the scoped root container .explore-it-layout', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.explore-it-layout');
    expect(root).not.toBeNull();
  });

  it('renders hero with kicker, h1, sub, bookcard, and lede', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('.hero');
    expect(hero).not.toBeNull();

    const kicker = hero?.querySelector('.kicker');
    expect(kicker?.textContent).toContain('FIELD GUIDE · SOFTWARE QA');

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toBe('Explore It! を読み解く');

    const sub = hero?.querySelector('.sub');
    expect(sub?.textContent).toContain('初学者のための探索的テスト実践フィールドガイド');

    const bookcard = hero?.querySelector('.bookcard');
    expect(bookcard).not.toBeNull();
    expect(bookcard?.textContent).toContain('Explore It!');
    expect(bookcard?.textContent).toContain('Elisabeth Hendrickson');
    expect(bookcard?.textContent).toContain('Pragmatic Bookshelf, 2013年初版');

    const refLink = bookcard?.querySelector('a');
    expect(refLink?.getAttribute('href')).toBe(
      'https://www.oreilly.com/library/view/explore-it/9781941222584/f_0000.html'
    );
    expect(refLink?.getAttribute('target')).toBe('_blank');
    expect(refLink?.getAttribute('rel')).toBe('noopener noreferrer');

    const lede = hero?.querySelector('.lede');
    expect(lede?.textContent).toContain('図解はすべて Mermaid で作成し');
  });

  it('renders navigation bar with brand and all 16 TOC anchors', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector('nav.toc');
    expect(nav).not.toBeNull();
    expect(nav?.getAttribute('aria-label')).toBe('目次');

    const brand = nav?.querySelector('.brand');
    expect(brand?.textContent).toContain('Field Guide');
    expect(brand?.textContent).toContain('Explore It!');

    const links = nav?.querySelectorAll('ol li a');
    expect(links?.length).toBe(16);

    const expectedAnchors = [
      '#overview',
      '#why',
      '#elements',
      '#roadmap',
      '#step1',
      '#step2',
      '#step3',
      '#step4',
      '#step5',
      '#step6',
      '#step7',
      '#step8',
      '#cheatsheet',
      '#ai2026',
      '#checklist',
      '#references',
    ];

    expectedAnchors.forEach((anchor, index) => {
      expect(links?.[index]?.getAttribute('href')).toBe(anchor);
    });

    expect(TOC_ITEMS).toHaveLength(16);
  });

  it('renders Section 01: Overview (#overview) with sec-tag, h2, and parts table', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#overview');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num')?.textContent).toBe('01');
    expect(secTag?.querySelector('.label')?.textContent).toBe('OVERVIEW');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('この本はどんな本か');

    expect(sec?.textContent).toContain('Elisabeth Hendrickson');
    expect(sec?.textContent).toContain('Agile Testing');
    expect(sec?.textContent).toContain('Janet Gregory');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0]?.textContent).toContain('Part 1');
    expect(rows?.[0]?.textContent).toContain('Establishing Foundations');
    expect(rows?.[1]?.textContent).toContain('Part 2');
    expect(rows?.[1]?.textContent).toContain('Adding Dimensions');
    expect(rows?.[2]?.textContent).toContain('Part 3');
    expect(rows?.[2]?.textContent).toContain('Putting It in Context');
  });

  it('renders Section 02: Why Exploratory Testing (#why) with h2, h3, quote, and Mermaid figure 02-A', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#why');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num')?.textContent).toBe('02');
    expect(secTag?.querySelector('.label')?.textContent).toBe('WHY EXPLORATORY TESTING');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('なぜ探索的テストが必要なのか');

    const h3 = sec?.querySelector('h3');
    expect(h3?.textContent).toBe('チェック（Checking）と探索（Exploring）は別物');

    expect(sec?.textContent).toContain('Martin Fowler');
    expect(sec?.textContent).toContain('Cem Kaner');
    expect(sec?.textContent).toContain('James Marcus Bach');

    const quote = sec?.querySelector('.quote');
    expect(quote?.textContent).toContain('探索的テストとは、テスト対象のソフトウェアについて学習しながら');
    expect(quote?.querySelector('cite')?.textContent).toContain('Elisabeth Hendrickson');

    const figure = sec?.querySelector('.figure');
    expect(figure?.querySelector('.cap')?.textContent).toContain('FIGURE 02-A ｜ チェックと探索の違い');
    expect(figure?.querySelector('.mermaid-wrapper, .mermaid-target')).not.toBeNull();
  });

  it('renders Section 03: Core Elements (#elements) with sec-tag, h2, and elements table', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#elements');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num')?.textContent).toBe('03');
    expect(secTag?.querySelector('.label')?.textContent).toBe('CORE ELEMENTS');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('探索的テストの本質的要素');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0]?.textContent).toContain('タイムボックス化されたセッション');
    expect(rows?.[1]?.textContent).toContain('チャーター（憲章／指針）');
    expect(rows?.[2]?.textContent).toContain('同時並行の学習・設計・実行');
    expect(rows?.[3]?.textContent).toContain('観察力');
    expect(rows?.[4]?.textContent).toContain('バリエーションの発見');
  });

  it('renders Section 04: Roadmap (#roadmap) with sec-tag, h2, Mermaid figure 04-A, and stepgrid', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#roadmap');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num')?.textContent).toBe('04');
    expect(secTag?.querySelector('.label')?.textContent).toBe('ROADMAP');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('実践ロードマップ（全体像）');

    const figure = sec?.querySelector('.figure');
    expect(figure?.querySelector('.cap')?.textContent).toContain('FIGURE 04-A ｜ 探索的テストの実践ループ');
    expect(figure?.querySelector('.mermaid-wrapper, .mermaid-target')).not.toBeNull();

    const stepgrid = sec?.querySelector('.stepgrid');
    expect(stepgrid).not.toBeNull();
    const steps = stepgrid?.querySelectorAll('div');
    expect(steps?.length).toBe(8);
    expect(steps?.[0]?.textContent).toContain('STEP 1');
    expect(steps?.[0]?.textContent).toContain('チャーター作成');
    expect(steps?.[7]?.textContent).toContain('STEP 8');
    expect(steps?.[7]?.textContent).toContain('デブリーフィング');
  });
});
