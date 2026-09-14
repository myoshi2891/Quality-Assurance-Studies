import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/unit-testing-principles-practices-patterns-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/unit-testing-principles-practices-patterns-guide/NavBar';

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

describe('Unit Testing Guide - Category 0 (Hero, NavBar, Layout, BookCard)', () => {
  it('renders within the scoped root container .unit-testing-layout', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.unit-testing-layout');
    expect(root).not.toBeNull();
  });

  it('renders hero with eyebrow, h1, lead, description, and book-card', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('.hero');
    expect(hero).not.toBeNull();

    const eyebrow = hero?.querySelector('.hero-eyebrow');
    expect(eyebrow?.textContent).toBe('Book Guide');

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Unit Testing Principles, Practices, and Patterns 完全ガイド');

    const lead = hero?.querySelector('.lead');
    expect(lead?.textContent).toContain('初学者のためのステップバイステップ ベストプラクティス');

    const bookCard = hero?.querySelector('.book-card');
    expect(bookCard).not.toBeNull();

    const bookFields = bookCard?.querySelectorAll('div > .value');
    expect(bookFields?.length).toBe(6);
    expect(bookFields?.[0].textContent).toContain('Unit Testing Principles, Practices, and Patterns');
    expect(bookFields?.[1].textContent).toContain('Vladimir Khorikov');
    expect(bookFields?.[2].textContent).toContain('Manning Publications');
    expect(bookFields?.[3].textContent).toContain('2020年1月 / 304ページ');
    expect(bookFields?.[4].textContent).toContain('978-1-61729-627-7');

    const link = bookCard?.querySelector('a');
    expect(link).not.toBeNull();
    expect(link?.getAttribute('href')).toBe('https://www.oreilly.com/library/view/unit-testing-principles/9781617296277/');
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toContain('noopener');
  });

  it('renders navigation bar with all 17 TOC items and mobile toggle', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector('nav.sidebar');
    expect(nav).not.toBeNull();

    const brand = nav?.querySelector('.sidebar-brand');
    expect(brand?.textContent).toContain('Unit Testing Guide');

    const sub = nav?.querySelector('.sidebar-sub');
    expect(sub?.textContent).toContain('初学者のためのステップバイステップ ベストプラクティス');

    const links = nav?.querySelectorAll('.side-link');
    expect(links?.length).toBe(17);
    expect(TOC_ITEMS.length).toBe(17);

    const expectedHrefs = [
      '#about',
      '#step1',
      '#step2',
      '#step3',
      '#step4',
      '#step5',
      '#step6',
      '#step7',
      '#step8',
      '#step9',
      '#step10',
      '#step11',
      '#step12',
      '#step13',
      '#checklist',
      '#update2026',
      '#references',
    ];

    links?.forEach((link, idx) => {
      expect(link.getAttribute('href')).toBe(expectedHrefs[idx]);
    });

    const mobileToggle = container.querySelector('#mobileToggle');
    expect(mobileToggle).not.toBeNull();
  });

  it('renders footer', () => {
    const { container } = render(<Page />);
    const footer = container.querySelector('.footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('Classic Software Testing Books companion series');
  });
});

describe('Unit Testing Guide - Category 1 (About, Step 1 - Step 3)', () => {
  it('renders section #about with audience table', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#about');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Guide');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('この記事の対象読者と使い方');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(4);
    expect(rows?.[0].textContent).toContain('対象読者');
    expect(rows?.[0].textContent).toContain('初〜中級エンジニア');
    expect(rows?.[1].textContent).toContain('前提知識');
    expect(rows?.[1].textContent).toContain('xUnit系フレームワーク');
    expect(rows?.[2].textContent).toContain('使用言語');
    expect(rows?.[2].textContent).toContain('C#だが');
    expect(rows?.[3].textContent).toContain('ゴール');
    expect(rows?.[3].textContent).toContain('「テストの価値」');
  });

  it('renders section #step1 with sustainable growth and Mermaid diagram 0', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step1');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 01');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('ユニットテストの「本当の目的」を理解する');

    expect(section?.textContent).toContain('ソフトウェアプロジェクトの持続的成長を可能にすること');

    const mermaidWrapper = section?.querySelector('#diag-0');
    expect(mermaidWrapper).not.toBeNull();

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図1: 悪循環（左）と良い循環（右）');
  });

  it('renders section #step2 with 3 properties table and callout', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step2');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 02');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('そもそも「ユニットテスト」とは何か');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('小さな「振る舞いの単位」を検証する');
    expect(rows?.[1].textContent).toContain('高速に実行できる');
    expect(rows?.[2].textContent).toContain('他のテストから隔離されている');

    const callout = section?.querySelector('.callout');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('「1ユニット = 1メソッド」という誤解');
  });

  it('renders section #step3 with classical vs London school table', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step3');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 03');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('二大流派 ― classical school と London school');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();

    const headers = table?.querySelectorAll('thead th');
    expect(headers?.length).toBe(3);
    expect(headers?.[1].textContent).toContain('classical school');
    expect(headers?.[2].textContent).toContain('London school');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(6);
    expect(rows?.[0].textContent).toContain('「隔離」の対象');
    expect(rows?.[1].textContent).toContain('テスト対象の粒度');
    expect(rows?.[2].textContent).toContain('依存への対応');
    expect(rows?.[3].textContent).toContain('設計への影響');
    expect(rows?.[4].textContent).toContain('代表的な文献');
    expect(rows?.[5].textContent).toContain('失敗しやすいテストの特徴');
  });
});

describe('Unit Testing Guide - Category 2 (Step 4 - Step 6)', () => {
  it('renders section #step4 with AAA pattern, diagram 1, code-block, and points list', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step4');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 04');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('ユニットテストの解剖学 ― AAAパターン');

    const diag = section?.querySelector('#diag-1');
    expect(diag).not.toBeNull();

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図2: AAAパターンの流れ');

    const codeBlock = section?.querySelector('.code-block');
    expect(codeBlock).not.toBeNull();
    expect(codeBlock?.querySelector('.code-label')?.textContent).toContain('pseudocode');

    const codeLines = codeBlock?.querySelectorAll('.code-line');
    expect(codeLines?.length).toBeGreaterThan(0);
    expect(codeBlock?.textContent).toContain('テスト名: 残高が不足している場合、出金は失敗する');
    expect(codeBlock?.textContent).toContain('Arrange（準備）');
    expect(codeBlock?.textContent).toContain('Act（実行）');
    expect(codeBlock?.textContent).toContain('Assert（検証）');

    const points = section?.querySelectorAll('ul li');
    expect(points?.length).toBe(5);
    expect(points?.[0].textContent).toContain('Actセクションは1行にする');
    expect(points?.[1].textContent).toContain('命名は「非プログラマにも伝わる文章」にする');
    expect(points?.[2].textContent).toContain('should_be のような曖昧な言い回しは避ける');
    expect(points?.[3].textContent).toContain('パラメータ化テストは「同じ結論」を導くケースにのみ使う');
    expect(points?.[4].textContent).toContain('アサーションライブラリで可読性を上げる');
  });

  it('renders section #step5 with 4 pillars table, multiplication concept, and diagram 2', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step5');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 05');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('良いユニットテストの「4本柱」');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(4);
    expect(rows?.[0].textContent).toContain('回帰に対する保護');
    expect(rows?.[1].textContent).toContain('リファクタリング耐性');
    expect(rows?.[2].textContent).toContain('速いフィードバック');
    expect(rows?.[3].textContent).toContain('保守のしやすさ');

    expect(section?.textContent).toContain('なぜ「掛け算」で考えるのか');
    expect(section?.textContent).toContain('理想のテストは存在しない ― 3つの極端な例');

    const diag = section?.querySelector('#diag-2');
    expect(diag).not.toBeNull();

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図3: 4本柱のトレードオフ ― 3つの極端な例');
  });

  it('renders section #step6 with mocks vs stubs table, observable behavior, and plum callout', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step6');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 06');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('モックとテストの壊れやすさ（fragility）');

    expect(section?.textContent).toContain('モックとスタブの違い');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(2);
    expect(rows?.[0].textContent).toContain('スタブ');
    expect(rows?.[0].textContent).toContain('状態検証（state verification）');
    expect(rows?.[1].textContent).toContain('モック');
    expect(rows?.[1].textContent).toContain('振る舞い検証（behavior verification）');

    expect(section?.textContent).toContain('observable behavior と implementation detail');
    const nestedOl = section?.querySelectorAll('ol li');
    expect(nestedOl?.length).toBe(3);

    const callout = section?.querySelector('.callout.plum');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('モックは、アプリケーションの境界を越えた「共有された可変な依存（unmanaged dependency）」に対してのみ使う');
  });
});
