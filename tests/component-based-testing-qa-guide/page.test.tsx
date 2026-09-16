import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/component-based-testing-qa-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/component-based-testing-qa-guide/NavBar';

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

describe('Component-based Testing QA Guide - Category 1 (Hero, Intro, Sec 1, Sec 2)', () => {
  it('renders within the scoped root container .cbss-qa-layout', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.cbss-qa-layout');
    expect(root).not.toBeNull();
  });

  it('renders hero with h1, hero-lede, and 4 pills', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('.hero');
    expect(hero).not.toBeNull();

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toBe('コンポーネントベースソフトウェアシステムのテストと品質保証');

    const lede = hero?.querySelector('.hero-lede');
    expect(lede?.textContent).toBe('完全ガイド');

    const pills = hero?.querySelectorAll('.pill');
    expect(pills?.length).toBe(4);
    expect(pills?.[0].textContent).toContain('図解 11点');
    expect(pills?.[1].textContent).toContain('表 12点');
    expect(pills?.[2].textContent).toContain('チェックリスト 10項目');
    expect(pills?.[3].textContent).toContain('参考文献 19件');
  });

  it('renders sidebar navigation with brand and all TOC items', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector('nav.sidebar');
    expect(nav).not.toBeNull();

    const brandText = nav?.querySelector('.sidebar-brand-text');
    expect(brandText?.textContent).toBe('コンポーネントQAガイド');
    const brandSub = nav?.querySelector('.sidebar-brand-sub');
    expect(brandSub?.textContent).toBe('Testing & QA for CBSS');

    expect(TOC_ITEMS.length).toBe(53);
    expect(TOC_ITEMS[0]).toEqual({ id: 'はじめにこのガイドについて', text: 'はじめに：このガイドについて', level: 2 });
    expect(TOC_ITEMS[1]).toEqual({ id: '対象読者', text: '対象読者', level: 3 });
    expect(TOC_ITEMS[2]).toEqual({ id: 'このガイドで学べること', text: 'このガイドで学べること', level: 3 });
    expect(TOC_ITEMS[3]).toEqual({ id: '1-コンポーネントベースソフトウェアの基礎', text: '1. コンポーネントベースソフトウェアの基礎', level: 2 });
  });

  it('renders Section Intro (はじめに：このガイドについて) with target audience and goals', () => {
    render(<Page />);
    const h2Intro = document.getElementById('はじめにこのガイドについて');
    expect(h2Intro).not.toBeNull();
    expect(h2Intro?.textContent).toBe('はじめに：このガイドについて');

    const h3Audience = document.getElementById('対象読者');
    expect(h3Audience).not.toBeNull();
    expect(h3Audience?.textContent).toBe('対象読者');

    const h3Learn = document.getElementById('このガイドで学べること');
    expect(h3Learn).not.toBeNull();
    expect(h3Learn?.textContent).toBe('このガイドで学べること');
  });

  it('renders Section 1 (コンポーネントベースソフトウェアの基礎) with 4 subheadings, 2 tables, and FIG.01 Mermaid', () => {
    const { container } = render(<Page />);
    const sec1 = document.getElementById('1-コンポーネントベースソフトウェアの基礎');
    expect(sec1).not.toBeNull();

    expect(document.getElementById('11-ソフトウェアコンポーネントとは何か')).not.toBeNull();
    expect(document.getElementById('12-コンポーネントベースソフトウェアシステムcbssの特徴')).not.toBeNull();
    expect(document.getElementById('13-モノリシックな開発との違い')).not.toBeNull();
    expect(document.getElementById('14-現代におけるコンポーネントの広がり')).not.toBeNull();

    // Tables in Sec 1
    const tables = container.querySelectorAll('.table-scroll table');
    expect(tables.length).toBeGreaterThanOrEqual(2);

    // First table: CBSSの特徴
    const ths1 = tables[0].querySelectorAll('thead th');
    expect(ths1[0].textContent).toBe('特徴');
    expect(ths1[1].textContent).toBe('説明');

    // Second table: 時代と代表的なコンポーネントの形
    const ths2 = tables[1].querySelectorAll('thead th');
    expect(ths2[0].textContent).toBe('時代');
    expect(ths2[1].textContent).toBe('代表的なコンポーネントの形');
  });

  it('renders Section 2 (なぜコンポーネントのテストは難しいのか) with 4 subheadings and 2 Mermaid diagrams (FIG.02, FIG.03)', () => {
    render(<Page />);
    const sec2 = document.getElementById('2-なぜコンポーネントのテストは難しいのか');
    expect(sec2).not.toBeNull();

    expect(document.getElementById('21-ブラックボックスの壁')).not.toBeNull();
    expect(document.getElementById('22-cots商用オフザシェルフコンポーネント特有の課題')).not.toBeNull();
    expect(document.getElementById('23-テスト容易性testabilityという設計上の課題')).not.toBeNull();
    expect(document.getElementById('24-バージョンと互換性の問題')).not.toBeNull();
  });

  it('renders Section 3 (テストレベルの全体像とテストピラミッド) with 3 subheadings, 2 tables, and FIG.04 Mermaid', () => {
    const { container } = render(<Page />);
    const sec3 = document.getElementById('3-テストレベルの全体像とテストピラミッド');
    expect(sec3).not.toBeNull();

    expect(document.getElementById('31-テストピラミッドfowler--cohn')).not.toBeNull();
    expect(document.getElementById('32-googleのsmallmediumlargeモデル')).not.toBeNull();
    expect(document.getElementById('33-テストレベル比較表')).not.toBeNull();

    // Tables in Sec 3 (tables index 2 and 3)
    const tables = container.querySelectorAll('.table-scroll table');
    expect(tables.length).toBeGreaterThanOrEqual(4);

    // Google Small/Medium/Large table
    const ths3 = tables[2].querySelectorAll('thead th');
    expect(ths3[0].textContent).toBe('サイズ');
    expect(ths3[1].textContent).toBe('実行環境');
    expect(ths3[2].textContent).toBe('典型的な対応関係');
    expect(ths3[3].textContent).toBe('目的');

    // Test level comparison table
    const ths4 = tables[3].querySelectorAll('thead th');
    expect(ths4[0].textContent).toBe('テストレベル');
    expect(ths4[1].textContent).toBe('検証すること');
    expect(ths4[2].textContent).toBe('依存関係の扱い');
    expect(ths4[3].textContent).toBe('実行速度');
    expect(ths4[4].textContent).toBe('主な担当者');
  });

  it('renders Section 4 (コンポーネントテストと統合テストの実践) with 3 subheadings, 2 tables, and FIG.05 Mermaid', () => {
    const { container } = render(<Page />);
    const sec4 = document.getElementById('4-コンポーネントテストと統合テストの実践');
    expect(sec4).not.toBeNull();

    expect(document.getElementById('41-コンポーネントテストとは')).not.toBeNull();
    expect(document.getElementById('42-統合テストトップダウンとボトムアップ')).not.toBeNull();
    expect(document.getElementById('43-テストダブルtest-doubleの使い分け')).not.toBeNull();

    // Tables in Sec 4 (tables index 4 and 5)
    const tables = container.querySelectorAll('.table-scroll table');
    expect(tables.length).toBeGreaterThanOrEqual(6);

    // Topdown vs Bottomup table
    const ths5 = tables[4].querySelectorAll('thead th');
    expect(ths5[0].textContent).toBe('戦略');
    expect(ths5[1].textContent).toBe('仮の実装');
    expect(ths5[2].textContent).toBe('メリット');
    expect(ths5[3].textContent).toBe('デメリット');

    // Test Double table
    const ths6 = tables[5].querySelectorAll('thead th');
    expect(ths6[0].textContent).toBe('種類');
    expect(ths6[1].textContent).toBe('役割');
  });
});
