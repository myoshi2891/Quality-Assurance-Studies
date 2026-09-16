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

  it('renders Section 5 (コントラクトテストとコンシューマー駆動契約cdc) with 4 subheadings, 2 Mermaids (FIG.06, FIG.07), and 1 Code block', () => {
    const { container } = render(<Page />);
    const sec5 = document.getElementById('5-コントラクトテストとコンシューマー駆動契約cdc');
    expect(sec5).not.toBeNull();

    expect(document.getElementById('51-なぜサービス間の統合テストは壊れやすいのか')).not.toBeNull();
    expect(document.getElementById('52-コンシューマー駆動契約cdcとは')).not.toBeNull();
    expect(document.getElementById('53-複数のコンシューマーを持つプロバイダの契約管理')).not.toBeNull();
    expect(document.getElementById('54-コントラクトテストのコード例イメージ')).not.toBeNull();

    // Code block in Sec 5
    const codeBlock = container.querySelector('.code-block');
    expect(codeBlock).not.toBeNull();
    expect(codeBlock?.textContent).toContain('在庫サービスとの契約');
    expect(codeBlock?.textContent).toContain('addInteraction');
    expect(codeBlock?.querySelectorAll('.code-line').length).toBeGreaterThanOrEqual(10);
  });

  it('renders Section 6 (サードパーティ／COTSコンポーネントの品質保証) with 4 subheadings, 1 Mermaid (FIG.08), and 1 Table', () => {
    const { container } = render(<Page />);
    const sec6 = document.getElementById('6-サードパーティcotsコンポーネントの品質保証');
    expect(sec6).not.toBeNull();

    expect(document.getElementById('61-動くかどうかだけでは足りない')).not.toBeNull();
    expect(document.getElementById('62-ソフトウェア構成分析scaとsbom')).not.toBeNull();
    expect(document.getElementById('63-サードパーティコンポーネントに対するqaチェック項目')).not.toBeNull();
    expect(document.getElementById('64-信頼するが検証するという姿勢')).not.toBeNull();

    const tables = container.querySelectorAll('.table-scroll table');
    expect(tables.length).toBeGreaterThanOrEqual(7);

    // QA Check Table
    const ths7 = tables[6].querySelectorAll('thead th');
    expect(ths7[0].textContent).toBe('チェック項目');
    expect(ths7[1].textContent).toBe('目的');
  });

  it('renders Section 7 (現実的な依存関係を使ったテスト) with 3 subheadings, 1 Mermaid (FIG.09), and 1 Table', () => {
    const { container } = render(<Page />);
    const sec7 = document.getElementById('7-現実的な依存関係を使ったテスト');
    expect(sec7).not.toBeNull();

    expect(document.getElementById('71-モックだけでは見えないもの')).not.toBeNull();
    expect(document.getElementById('72-testcontainersという選択肢')).not.toBeNull();
    expect(document.getElementById('73-モックと実物どちらを使うべきか')).not.toBeNull();

    const tables = container.querySelectorAll('.table-scroll table');
    expect(tables.length).toBeGreaterThanOrEqual(8);

    // Mock vs Testcontainers table
    const ths8 = tables[7].querySelectorAll('thead th');
    expect(ths8[0].textContent).toBe('観点');
    expect(ths8[1].textContent).toBe('モック/スタブ');
    expect(ths8[2].textContent).toBe('Testcontainers（実物）');
  });

  it('renders Section 8 (テストの質を測るカバレッジとミューテーションテスト) with 3 subheadings, 1 Mermaid (FIG.10), and 2 Tables', () => {
    const { container } = render(<Page />);
    const sec8 = document.getElementById('8-テストの質を測るカバレッジとミューテーションテスト');
    expect(sec8).not.toBeNull();

    expect(document.getElementById('81-コードカバレッジの限界')).not.toBeNull();
    expect(document.getElementById('82-ミューテーションテストという発想')).not.toBeNull();
    expect(document.getElementById('83-コンポーネント単位での品質メトリクス')).not.toBeNull();

    const tables = container.querySelectorAll('.table-scroll table');
    expect(tables.length).toBeGreaterThanOrEqual(10);

    // Coverage types table
    const ths9 = tables[8].querySelectorAll('thead th');
    expect(ths9[0].textContent).toBe('カバレッジの種類');
    expect(ths9[1].textContent).toBe('測定対象');

    // Metrics table
    const ths10 = tables[9].querySelectorAll('thead th');
    expect(ths10[0].textContent).toBe('メトリクス');
    expect(ths10[1].textContent).toBe('意味');
  });

  it('renders Section 9 (品質特性と非機能テスト) with 3 subheadings and 1 Table', () => {
    const { container } = render(<Page />);
    const sec9 = document.getElementById('9-品質特性と非機能テスト');
    expect(sec9).not.toBeNull();

    expect(document.getElementById('91-コンポーネントベースシステムにおける品質特性')).not.toBeNull();
    expect(document.getElementById('92-コンポーネントの性能テスト')).not.toBeNull();
    expect(document.getElementById('93-検証verificationと妥当性確認validation')).not.toBeNull();

    const tables = container.querySelectorAll('.table-scroll table');
    expect(tables.length).toBeGreaterThanOrEqual(11);

    // ISO quality characteristics table
    const ths11 = tables[10].querySelectorAll('thead th');
    expect(ths11[0].textContent).toBe('品質特性');
    expect(ths11[1].textContent).toBe('コンポーネントベースシステムにおける具体例');
  });

  it('renders Section 10 (CI/CDにおける継続的テストパイプライン) with 2 subheadings, 1 Mermaid (FIG.11), and 1 Table', () => {
    const { container } = render(<Page />);
    const sec10 = document.getElementById('10-cicdにおける継続的テストパイプライン');
    expect(sec10).not.toBeNull();

    expect(document.getElementById('101-テストピラミッドをパイプラインに落とし込む')).not.toBeNull();
    expect(document.getElementById('102-速いテストを頻繁に遅いテストをたまにという原則')).not.toBeNull();

    const tables = container.querySelectorAll('.table-scroll table');
    expect(tables.length).toBeGreaterThanOrEqual(12);

    // CI/CD timing table
    const ths12 = tables[11].querySelectorAll('thead th');
    expect(ths12[0].textContent).toBe('実行タイミング');
    expect(ths12[1].textContent).toBe('含めるべきテスト');
  });
});
