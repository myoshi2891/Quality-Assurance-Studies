import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/lessons-learned-in-software-testing-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/lessons-learned-in-software-testing-guide/NavBar';

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

describe('Lessons Learned Guide - Category 1 (Hero, NavBar, Section 01-04)', () => {
  it('renders within the scoped root container .lessons-learned-layout', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.lessons-learned-layout');
    expect(root).not.toBeNull();
  });

  it('renders hero with h1, lead, and 3 badge elements', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('.hero');
    expect(hero).not.toBeNull();

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Lessons Learned in Software Testing');
    expect(h1.textContent).toContain('実践ガイド ー 初学者のためのステップバイステップ解説');

    const lead = hero?.querySelector('p.lead');
    expect(lead?.textContent).toContain('Lessons Learned in Software Testing: A Context-Driven Approach');
    expect(lead?.textContent).toContain('Cem Kaner, James Bach, Bret Pettichord 著');

    const badges = hero?.querySelectorAll('.badge');
    expect(badges?.length).toBe(3);
    expect(badges?.[0].textContent).toContain('全11章 293レッスンの要点');
    expect(badges?.[1].textContent).toContain('Mermaid図解 5点');
    expect(badges?.[2].textContent).toContain('2026年8月時点の情報を反映');
  });

  it('renders navigation bar with brand and all 17 TOC anchors with numbers', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector('nav');
    expect(nav).not.toBeNull();

    expect(TOC_ITEMS).toHaveLength(17);

    const links = nav?.querySelectorAll('a');
    expect(links?.length).toBe(17);

    TOC_ITEMS.forEach((item, index) => {
      const link = links?.[index];
      expect(link?.getAttribute('href')).toBe(`#${item.id}`);
      expect(link?.querySelector('.n-num')?.textContent).toBe(item.num);
      expect(link?.textContent).toContain(item.label);
    });

    const mobileToggle = container.querySelector('#mobileToggle');
    expect(mobileToggle).not.toBeNull();
  });

  it('renders Section 1: はじめに (#intro) with author table', () => {
    const { container } = render(<Page />);
    const sec1 = container.querySelector('#intro');
    expect(sec1).not.toBeNull();

    const h2 = sec1?.querySelector('h2');
    expect(h2?.textContent).toContain('1. はじめに ー この本が「テストの古典」と呼ばれる理由');

    const table = sec1?.querySelector('table');
    expect(table).not.toBeNull();

    const headers = table?.querySelectorAll('thead th');
    expect(headers?.[0].textContent).toBe('著者');
    expect(headers?.[1].textContent).toBe('略歴');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('Cem Kaner');
    expect(rows?.[1].textContent).toContain('James Bach');
    expect(rows?.[2].textContent).toContain('Bret Pettichord');

    expect(sec1?.textContent).toContain('293個の「レッスン」');
    expect(sec1?.textContent).toContain('コンテキスト駆動アプローチ (Context-Driven Approach)');
  });

  it('renders Section 2: 全体マップ (#overview) with Mermaid figure 1', () => {
    const { container } = render(<Page />);
    const sec2 = container.querySelector('#overview');
    expect(sec2).not.toBeNull();

    const h2 = sec2?.querySelector('h2');
    expect(h2?.textContent).toContain('2. 本書の全体マップ');

    const figure = sec2?.querySelector('figure.diagram');
    expect(figure).not.toBeNull();

    const figcaption = figure?.querySelector('figcaption');
    expect(figcaption?.textContent).toBe('図1: 本書11章の全体マップ(基礎編 → 実践編 → 運用編 → 発展編)');

    expect(sec2?.textContent).toContain('「基礎編」「実践編」「運用編」「発展編」の4つの塊');
  });

  it('renders Section 3: ステップ1: テスターの役割 (#step1) with principles and misconception table', () => {
    const { container } = render(<Page />);
    const sec3 = container.querySelector('#step1');
    expect(sec3).not.toBeNull();

    const h2 = sec3?.querySelector('h2');
    expect(h2?.textContent).toContain('3. ステップ1: テスターの役割を理解する');

    const h3 = sec3?.querySelector('h3');
    expect(h3?.textContent).toBe('押さえるべき考え方');

    const listItems = sec3?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(5);
    expect(listItems?.[0].textContent).toContain('テスターはプロジェクトの「ヘッドライト」である');
    expect(listItems?.[1].textContent).toContain('テストの目的(ミッション)が、やることすべてを決める');
    expect(listItems?.[2].textContent).toContain('テスターは複数の利害関係者にサービスを提供する');
    expect(listItems?.[3].textContent).toContain('すべてのバグを見つけることはできない');
    expect(listItems?.[4].textContent).toContain('テスターはゲートキーパー(門番)になってはいけない');

    const table = sec3?.querySelector('table');
    expect(table).not.toBeNull();
    const ths = table?.querySelectorAll('thead th');
    expect(ths?.[0].textContent).toBe('よくある誤解');
    expect(ths?.[1].textContent).toBe('実際の考え方');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('「バグをゼロにするのが自分の仕事」');
    expect(rows?.[1].textContent).toContain('「テストに合格したらリリースしてよい」');
    expect(rows?.[2].textContent).toContain('「テストは開発が終わってから始まる工程」');
  });

  it('renders Section 4: ステップ2: テスターのように考える (#step2) with thinking models and tips', () => {
    const { container } = render(<Page />);
    const sec4 = container.querySelector('#step2');
    expect(sec4).not.toBeNull();

    const h2 = sec4?.querySelector('h2');
    expect(h2?.textContent).toContain('4. ステップ2: テスターのように考える');

    const h3s = sec4?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toBe('核心となる考え方');
    expect(h3s?.[1].textContent).toBe('実践のヒント');

    const coreList = sec4?.querySelectorAll('ul li');
    expect(coreList?.length).toBe(7);
    expect(coreList?.[0].textContent).toContain('テストは「認識論(epistemology)」の応用である');
    expect(coreList?.[1].textContent).toContain('テストはあなたの頭の中で起きている');
    expect(coreList?.[2].textContent).toContain('すべてのテストは何らかのモデルに基づいている');
    expect(coreList?.[3].textContent).toContain('探索とは深く考えることである');
    expect(coreList?.[4].textContent).toContain('直感は良い出発点だが、悪い結論である');
    expect(coreList?.[5].textContent).toContain('バイアスは避けられないが、管理はできる');
    expect(coreList?.[6].textContent).toContain('新鮮な目が失敗を見つける');

    const tipsList = sec4?.querySelectorAll('ol li');
    expect(tipsList?.length).toBe(3);
  });
});
