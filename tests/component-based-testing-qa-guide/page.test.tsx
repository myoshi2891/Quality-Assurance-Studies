import { afterAll, afterEach, beforeAll, beforeEach, describe, it, expect, mock } from 'bun:test';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page, {
  DIAGRAM_1,
  DIAGRAM_2,
  DIAGRAM_3,
  DIAGRAM_4,
  DIAGRAM_5,
  DIAGRAM_6,
  DIAGRAM_7,
  DIAGRAM_8,
  DIAGRAM_9,
  DIAGRAM_10,
  DIAGRAM_11,
} from '../../app/component-based-testing-qa-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/component-based-testing-qa-guide/NavBar';

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

describe('Component-based Testing QA Guide - Mermaid diagrams', () => {
  it('actually renders all 11 diagrams, one per .mermaid-wrap, matching DIAGRAM_1 through DIAGRAM_11', async () => {
    const { container } = render(<Page />);
    const diagramContainers = container.querySelectorAll('.mermaid-wrap');

    // 実描画の完了を待ってから件数を突き合わせる。
    // コンテナの存在確認だけでは、Mermaid.tsx が空の chart で早期 return する経路
    // （mermaid.render を呼ばず SVG も挿入しない）を見逃す
    expect(diagramContainers.length).toBe(11);
    await waitFor(() => {
      const rendered = container.querySelectorAll('.mermaid-wrap svg[data-testid="mock-mermaid"]');
      expect(rendered.length).toBe(diagramContainers.length);
    });

    // renderedCharts の各要素を DIAGRAM_1〜11 と 1 対 1 で照合し、
    // 図解の欠落・入れ替わり・内容の欠損を検出できるようにする
    expect(renderedCharts.length).toBe(11);
    expect(renderedCharts[0]).toBe(DIAGRAM_1);
    expect(renderedCharts[1]).toBe(DIAGRAM_2);
    expect(renderedCharts[2]).toBe(DIAGRAM_3);
    expect(renderedCharts[3]).toBe(DIAGRAM_4);
    expect(renderedCharts[4]).toBe(DIAGRAM_5);
    expect(renderedCharts[5]).toBe(DIAGRAM_6);
    expect(renderedCharts[6]).toBe(DIAGRAM_7);
    expect(renderedCharts[7]).toBe(DIAGRAM_8);
    expect(renderedCharts[8]).toBe(DIAGRAM_9);
    expect(renderedCharts[9]).toBe(DIAGRAM_10);
    expect(renderedCharts[10]).toBe(DIAGRAM_11);
  });
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

    // 元 HTML の見出しインベントリから独立して書き起こした期待値。
    // TOC_ITEMS・サイドバーリンク・本文見出しの3者を1対1で突き合わせ、
    // 欠落や順序入れ替わりを機械的に検出する
    const expectedToc: { id: string; text: string; level: 2 | 3 }[] = [
      { id: 'はじめにこのガイドについて', text: 'はじめに：このガイドについて', level: 2 },
      { id: '対象読者', text: '対象読者', level: 3 },
      { id: 'このガイドで学べること', text: 'このガイドで学べること', level: 3 },
      { id: '1-コンポーネントベースソフトウェアの基礎', text: '1. コンポーネントベースソフトウェアの基礎', level: 2 },
      { id: '11-ソフトウェアコンポーネントとは何か', text: '1.1 「ソフトウェアコンポーネント」とは何か', level: 3 },
      { id: '12-コンポーネントベースソフトウェアシステムcbssの特徴', text: '1.2 コンポーネントベースソフトウェアシステム（CBSS）の特徴', level: 3 },
      { id: '13-モノリシックな開発との違い', text: '1.3 モノリシックな開発との違い', level: 3 },
      { id: '14-現代におけるコンポーネントの広がり', text: '1.4 現代における「コンポーネント」の広がり', level: 3 },
      { id: '2-なぜコンポーネントのテストは難しいのか', text: '2. なぜコンポーネントのテストは難しいのか', level: 2 },
      { id: '21-ブラックボックスの壁', text: '2.1 ブラックボックスの壁', level: 3 },
      { id: '22-cots商用オフザシェルフコンポーネント特有の課題', text: '2.2 COTS（商用オフザシェルフ）コンポーネント特有の課題', level: 3 },
      { id: '23-テスト容易性testabilityという設計上の課題', text: '2.3 テスト容易性（Testability）という設計上の課題', level: 3 },
      { id: '24-バージョンと互換性の問題', text: '2.4 バージョンと互換性の問題', level: 3 },
      { id: '3-テストレベルの全体像とテストピラミッド', text: '3. テストレベルの全体像とテストピラミッド', level: 2 },
      { id: '31-テストピラミッドfowler--cohn', text: '3.1 テストピラミッド（Fowler / Cohn）', level: 3 },
      { id: '32-googleのsmallmediumlargeモデル', text: '3.2 Googleの「Small/Medium/Large」モデル', level: 3 },
      { id: '33-テストレベル比較表', text: '3.3 テストレベル比較表', level: 3 },
      { id: '4-コンポーネントテストと統合テストの実践', text: '4. コンポーネントテストと統合テストの実践', level: 2 },
      { id: '41-コンポーネントテストとは', text: '4.1 コンポーネントテストとは', level: 3 },
      { id: '42-統合テストトップダウンとボトムアップ', text: '4.2 統合テスト：トップダウンとボトムアップ', level: 3 },
      { id: '43-テストダブルtest-doubleの使い分け', text: '4.3 テストダブル（Test Double）の使い分け', level: 3 },
      { id: '5-コントラクトテストとコンシューマー駆動契約cdc', text: '5. コントラクトテストとコンシューマー駆動契約（CDC）', level: 2 },
      { id: '51-なぜサービス間の統合テストは壊れやすいのか', text: '5.1 なぜサービス間の統合テストは壊れやすいのか', level: 3 },
      { id: '52-コンシューマー駆動契約cdcとは', text: '5.2 コンシューマー駆動契約（CDC）とは', level: 3 },
      { id: '53-複数のコンシューマーを持つプロバイダの契約管理', text: '5.3 複数のコンシューマーを持つプロバイダの契約管理', level: 3 },
      { id: '54-コントラクトテストのコード例イメージ', text: '5.4 コントラクトテストのコード例（イメージ）', level: 3 },
      { id: '6-サードパーティcotsコンポーネントの品質保証', text: '6. サードパーティ／COTSコンポーネントの品質保証', level: 2 },
      { id: '61-動くかどうかだけでは足りない', text: '6.1 「動くかどうか」だけでは足りない', level: 3 },
      { id: '62-ソフトウェア構成分析scaとsbom', text: '6.2 ソフトウェア構成分析（SCA）とSBOM', level: 3 },
      { id: '63-サードパーティコンポーネントに対するqaチェック項目', text: '6.3 サードパーティコンポーネントに対するQAチェック項目', level: 3 },
      { id: '64-信頼するが検証するという姿勢', text: '6.4 「信頼するが検証する」という姿勢', level: 3 },
      { id: '7-現実的な依存関係を使ったテスト', text: '7. 現実的な依存関係を使ったテスト', level: 2 },
      { id: '71-モックだけでは見えないもの', text: '7.1 モックだけでは見えないもの', level: 3 },
      { id: '72-testcontainersという選択肢', text: '7.2 Testcontainersという選択肢', level: 3 },
      { id: '73-モックと実物どちらを使うべきか', text: '7.3 モックと実物、どちらを使うべきか', level: 3 },
      { id: '8-テストの質を測るカバレッジとミューテーションテスト', text: '8. テストの「質」を測る：カバレッジとミューテーションテスト', level: 2 },
      { id: '81-コードカバレッジの限界', text: '8.1 コードカバレッジの限界', level: 3 },
      { id: '82-ミューテーションテストという発想', text: '8.2 ミューテーションテストという発想', level: 3 },
      { id: '83-コンポーネント単位での品質メトリクス', text: '8.3 コンポーネント単位での品質メトリクス', level: 3 },
      { id: '9-品質特性と非機能テスト', text: '9. 品質特性と非機能テスト', level: 2 },
      { id: '91-コンポーネントベースシステムにおける品質特性', text: '9.1 コンポーネントベースシステムにおける品質特性', level: 3 },
      { id: '92-コンポーネントの性能テスト', text: '9.2 コンポーネントの性能テスト', level: 3 },
      { id: '93-検証verificationと妥当性確認validation', text: '9.3 検証（Verification）と妥当性確認（Validation）', level: 3 },
      { id: '10-cicdにおける継続的テストパイプライン', text: '10. CI/CDにおける継続的テストパイプライン', level: 2 },
      { id: '101-テストピラミッドをパイプラインに落とし込む', text: '10.1 テストピラミッドをパイプラインに落とし込む', level: 3 },
      { id: '102-速いテストを頻繁に遅いテストをたまにという原則', text: '10.2 「速いテストを頻繁に、遅いテストをたまに」という原則', level: 3 },
      { id: '11-まとめ品質保証チェックリスト', text: '11. まとめ：品質保証チェックリスト', level: 2 },
      { id: '12-参考文献', text: '12. 参考文献', level: 2 },
      { id: '学術文献専門書籍', text: '学術文献・専門書籍', level: 3 },
      { id: 'martin-fowler--thoughtworks', text: 'Martin Fowler / ThoughtWorks', level: 3 },
      { id: 'google', text: 'Google', level: 3 },
      { id: '標準非営利団体', text: '標準・非営利団体', level: 3 },
      { id: 'ツール公式ドキュメント', text: 'ツール公式ドキュメント', level: 3 },
    ];
    expect(expectedToc.length).toBe(53);

    const { container: pageContainer } = render(<Page />);

    expectedToc.forEach((expected, index) => {
      // TOC_ITEMS との 1対1 照合
      expect(TOC_ITEMS[index]).toEqual(expected);

      // サイドバーリンク（href・表示テキスト）の照合
      const link = nav?.querySelector(`a[href="#${expected.id}"]`);
      expect(link, `sidebar link missing for id: ${expected.id}`).not.toBeNull();
      expect(link?.textContent).toBe(expected.text);

      // 本文見出し（id・表示テキスト・タグレベル）の照合
      const heading = pageContainer.querySelector(`[id="${expected.id}"]`);
      expect(heading, `page heading missing for id: ${expected.id}`).not.toBeNull();
      expect(heading?.tagName).toBe(`H${expected.level}`);
      expect(heading?.textContent).toBe(expected.text);
    });
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

  it('renders Section 11 (まとめ：品質保証チェックリスト) with interactive Checklist component', () => {
    const { container } = render(<Page />);
    const sec11 = document.getElementById('11-まとめ品質保証チェックリスト');
    expect(sec11).not.toBeNull();

    const checklistCard = container.querySelector('.checklist-card');
    expect(checklistCard).not.toBeNull();

    const progress = checklistCard?.querySelector('.checklist-progress');
    expect(progress?.textContent).toBe('0 / 10 完了');

    const checkboxes = checklistCard?.querySelectorAll('input[type="checkbox"]');
    expect(checkboxes?.length).toBe(10);

    // 10項目のチェックリスト文言を独立定義し、DOM出現順と1対1で照合する
    const expectedChecklistItems = [
      '自分たちが依存しているコンポーネントの境界（インターフェース仕様）を明文化している',
      'テストピラミッドを意識し、単体テストを最も厚く、E2Eテストを最も薄くしている',
      'サービス間の連携には、E2Eテストだけでなくコントラクトテストを併用している',
      'サードパーティ／OSSコンポーネントに対してSCAツールによる脆弱性スキャンを自動化している',
      'SBOM（ソフトウェア部品表）を生成し、依存関係のインベントリを把握している',
      '統合テストでは、必要に応じてTestcontainers等で実物に近い依存関係を使っている',
      'コードカバレッジだけでなく、ミューテーションテストでテストの質そのものを定期的に検証している',
      'コンポーネントの信頼性・性能・保守性といった非機能品質特性を継続的に測定している',
      'CI/CDパイプラインの中で、テストの実行速度に応じて実行タイミングを分けている',
      'コンポーネントの脆弱性・バージョン・ライセンス・保守状況を定期的に棚卸ししている',
    ];
    expect(expectedChecklistItems).toHaveLength(10);

    const items = Array.from(checklistCard?.querySelectorAll('li') ?? []);
    expect(items).toHaveLength(10);
    items.forEach((li, index) => {
      expect(li.textContent).toBe(expectedChecklistItems[index]);
    });

    // Click first checkbox
    if (checkboxes && checkboxes[0]) {
      fireEvent.click(checkboxes[0]);
      expect(progress?.textContent).toBe('1 / 10 完了');
      fireEvent.click(checkboxes[0]);
      expect(progress?.textContent).toBe('0 / 10 完了');
    }
  });

  it('renders Section 12 (参考文献) with 5 category sections, 19 reference cards, and disclaimer', () => {
    const { container } = render(<Page />);
    const sec12 = document.getElementById('12-参考文献');
    expect(sec12).not.toBeNull();

    expect(document.getElementById('学術文献専門書籍')).not.toBeNull();
    expect(document.getElementById('martin-fowler--thoughtworks')).not.toBeNull();
    expect(document.getElementById('google')).not.toBeNull();
    expect(document.getElementById('標準非営利団体')).not.toBeNull();
    expect(document.getElementById('ツール公式ドキュメント')).not.toBeNull();

    const refCards = container.querySelectorAll('.ref-card');
    expect(refCards.length).toBe(19);

    // DOM 出現順の badge と各カードの全リンク href を1対1で検証（4件目はリンク2本を持つ）
    const expectedRefCards: { badge: string; hrefs: string[] }[] = [
      {
        badge: '1',
        hrefs: [
          'https://books.google.co.jp/books/about/Testing_and_Quality_Assurance_for_Compon.html?id=oUEwDwAAQBAJ&redir_esc=y',
        ],
      },
      { badge: '2', hrefs: ['https://arxiv.org/pdf/0906.1667'] },
      {
        badge: '3',
        hrefs: [
          'https://www.oreilly.com/library/view/a-practical-guide/0201325640/0201325640_ch10lev1sec1.html',
        ],
      },
      {
        badge: '4',
        hrefs: [
          'https://glossary.istqb.org/en_US/term/component-testing-4-3',
          'https://istqb-glossary.page/component-integration-testing/',
        ],
      },
      { badge: '5', hrefs: ['https://martinfowler.com/bliki/TestPyramid.html'] },
      { badge: '9', hrefs: ['https://martinfowler.com/articles/microservice-testing/'] },
      { badge: '10', hrefs: ['https://martinfowler.com/testing/'] },
      { badge: '11', hrefs: ['https://martinfowler.com/tags/test%20categories.html'] },
      {
        badge: '13',
        hrefs: ['https://www.martinfowler.com/articles/consumerDrivenContracts.html'],
      },
      {
        badge: '6',
        hrefs: [
          'https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html',
        ],
      },
      { badge: '7', hrefs: ['https://testing.googleblog.com/2010/12/test-sizes.html'] },
      { badge: '8', hrefs: ['https://abseil.io/resources/swe-book/html/ch14.html'] },
      { badge: '15', hrefs: ['https://owasp.org/www-community/Component_Analysis'] },
      { badge: '16', hrefs: ['https://owasp.github.io/www-project-dependency-check/'] },
      { badge: '12', hrefs: ['https://docs.pact.io/'] },
      { badge: '14', hrefs: ['https://docs.pact.io/getting_started/how_pact_works'] },
      { badge: '17', hrefs: ['https://testcontainers.com/getting-started/'] },
      {
        badge: '18',
        hrefs: [
          'https://www.docker.com/blog/testcontainers-testing-with-real-dependencies/',
        ],
      },
      { badge: '19', hrefs: ['https://pitest.org/'] },
    ];
    expect(expectedRefCards).toHaveLength(19);

    expectedRefCards.forEach((expected, index) => {
      const card = refCards[index];
      expect(card.querySelector('.ref-badge')?.textContent).toBe(expected.badge);
      const hrefs = Array.from(card.querySelectorAll('a')).map((a) => a.getAttribute('href'));
      expect(hrefs).toEqual(expected.hrefs);
    });

    // Disclaimer
    const disclaimer = container.querySelector('.disclaimer');
    expect(disclaimer).not.toBeNull();
    expect(disclaimer?.textContent).toContain('本ガイドは、コンポーネントベースソフトウェアのテストとQA');
  });
});
