import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/art-of-software-testing-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/art-of-software-testing-guide/NavBar';

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

describe('Art of Software Testing Guide - Category 1 (Hero, NavBar, Intro, Ch1-Ch3)', () => {
  it('renders within the scoped root container .art-of-testing-layout', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.art-of-testing-layout');
    expect(root).not.toBeNull();
  });

  it('renders hero with kicker, h1, subtitle, and source callout link', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('.hero');
    expect(hero).not.toBeNull();

    const kicker = hero?.querySelector('.kicker');
    expect(kicker?.textContent).toContain('Beginner Guide');

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('『The Art of Software Testing』から学ぶ');
    expect(h1.textContent).toContain('ソフトウェアテスト実践ガイド');

    const subtitle = hero?.querySelector('.subtitle');
    expect(subtitle?.textContent).toBe('初学者のためのステップバイステップ・ベストプラクティス');

    const callout = hero?.querySelector('.callout.source');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('参考書籍');
    expect(callout?.textContent).toContain('Glenford J. Myers');

    const link = callout?.querySelector('a.ref-url');
    expect(link?.getAttribute('href')).toBe('https://www.oreilly.com/library/view/the-art-of/9781118133156/');
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renders navigation bar with all 15 TOC items and mobile toggle', () => {
    const { container } = render(<NavBar />);
    const aside = container.querySelector('aside.sidebar');
    expect(aside).not.toBeNull();

    expect(TOC_ITEMS).toHaveLength(15);

    const links = container.querySelectorAll('nav a[data-nav]');
    expect(links.length).toBe(15);

    TOC_ITEMS.forEach((item, index) => {
      const link = links[index];
      expect(link.getAttribute('href')).toBe(`#${item.id}`);
      expect(link.textContent).toContain(item.label);
    });

    const mobileToggle = container.querySelector('#menuToggle');
    expect(mobileToggle).not.toBeNull();
    expect(mobileToggle?.getAttribute('aria-label')).toBe('メニューを開く');
  });

  it('renders Section: はじめに (#intro) with 3 paragraphs', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#intro');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('はじめに');

    const paragraphs = sec?.querySelectorAll('p');
    expect(paragraphs?.length).toBe(3);
    expect(paragraphs?.[0].textContent).toContain('1979年にGlenford J. Myersが著し');
    expect(paragraphs?.[1].textContent).toContain('Martin Fowler、Kent Beck、Robert C. Martin');
    expect(paragraphs?.[2].textContent).toContain('これからソフトウェアテストを学ぶプログラマー');
  });

  it('renders Section 1: テストの心理学 (#ch1) with Mermaid diagram diag-ch1', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch1');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第1章: テストの心理学 — なぜ「バグを探す」姿勢が重要なのか');

    const diag = sec?.querySelector('#diag-ch1');
    expect(diag).not.toBeNull();

    const caption = sec?.querySelector('.fig-caption');
    expect(caption?.textContent).toContain('「証明したい」という思い込みと、Myersが提唱する「発見する」心構えの違い');
  });

  it('renders Section 2: ソフトウェアテストの7原則 (#ch2) with 7-row table and source callout', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch2');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第2章: ソフトウェアテストの7原則');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();

    const ths = table?.querySelectorAll('thead th');
    expect(ths?.length).toBe(4);
    expect(ths?.[0].textContent).toBe('#');
    expect(ths?.[1].textContent).toBe('原則');
    expect(ths?.[2].textContent).toBe('内容');
    expect(ths?.[3].textContent).toBe('実務での意味');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(7);
    expect(rows?.[0].textContent).toContain('テストは欠陥があることは示せるが、欠陥がないことは示せない');
    expect(rows?.[1].textContent).toContain('全数テストは不可能');
    expect(rows?.[2].textContent).toContain('早期テストの原則');
    expect(rows?.[3].textContent).toContain('欠陥の偏在（クラスタリング）');
    expect(rows?.[4].textContent).toContain('殺虫剤のパラドックス');
    expect(rows?.[5].textContent).toContain('テストは状況に依存する');
    expect(rows?.[6].textContent).toContain('「バグゼロ」の誤信');

    const callout = sec?.querySelector('.callout.source');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('ASTQB（ISTQB公認団体）による解説を要約');
  });

  it('renders Section 3: テストレベルの全体像 (#ch3) with Mermaid diagram diag-ch3 and 4-row table', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch3');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第3章: テストレベルの全体像');

    const diag = sec?.querySelector('#diag-ch3');
    expect(diag).not.toBeNull();

    const caption = sec?.querySelector('.fig-caption');
    expect(caption?.textContent).toContain('要件定義からリリース判定までのテストレベルの流れ');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();

    const ths = table?.querySelectorAll('thead th');
    expect(ths?.length).toBe(4);
    expect(ths?.[0].textContent).toBe('テストレベル');
    expect(ths?.[1].textContent).toBe('目的');
    expect(ths?.[2].textContent).toBe('対象');
    expect(ths?.[3].textContent).toBe('主な実施者');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(4);
    expect(rows?.[0].textContent).toContain('単体テスト');
    expect(rows?.[1].textContent).toContain('結合テスト');
    expect(rows?.[2].textContent).toContain('システムテスト');
    expect(rows?.[3].textContent).toContain('受け入れテスト');
  });
});
