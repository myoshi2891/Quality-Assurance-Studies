import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
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

    const expectedItems = [
      { label: '対象読者と使い方', href: '#about' },
      { label: '本当の目的', href: '#step1' },
      { label: '定義', href: '#step2' },
      { label: '二大流派', href: '#step3' },
      { label: 'AAAパターン', href: '#step4' },
      { label: '4本柱', href: '#step5' },
      { label: 'モックと壊れやすさ', href: '#step6' },
      { label: 'テストダブル分類', href: '#step7' },
      { label: '3つのスタイル', href: '#step8' },
      { label: 'Humble Object', href: '#step9' },
      { label: '統合テスト', href: '#step10' },
      { label: 'モッキング実践', href: '#step11' },
      { label: 'DBのテスト', href: '#step12' },
      { label: 'アンチパターン', href: '#step13' },
      { label: '実践チェックリスト', href: '#checklist' },
      { label: '2026年の補足', href: '#update2026' },
      { label: '参考文献・情報源', href: '#references' },
    ];

    links?.forEach((link, idx) => {
      const expected = expectedItems[idx];
      expect(link.getAttribute('href')).toBe(expected.href);
      const label = link.querySelectorAll('span')[1];
      expect(label?.textContent).toBe(expected.label);
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

describe('Unit Testing Guide - Category 3 (Step 7 - Step 9)', () => {
  it('renders section #step7 with 5 test doubles table and diagram 3', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step7');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 07');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('テストダブルの分類 ― Dummy / Fake / Stub / Spy / Mock');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0].textContent).toContain('Dummy');
    expect(rows?.[1].textContent).toContain('Fake');
    expect(rows?.[2].textContent).toContain('Stub');
    expect(rows?.[3].textContent).toContain('Spy');
    expect(rows?.[4].textContent).toContain('Mock');

    const diag = section?.querySelector('#diag-3');
    expect(diag).not.toBeNull();

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図4: テストダブルの選び方 ― 意思決定フロー');
  });

  it('renders section #step8 with 3 styles table, diagram 4, and forest callout', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step8');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 08');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('3つのテストスタイルと関数型アーキテクチャ');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('Output-based');
    expect(rows?.[1].textContent).toContain('State-based');
    expect(rows?.[2].textContent).toContain('Communication-based');

    const diag = section?.querySelector('#diag-4');
    expect(diag).not.toBeNull();

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図5: Functional Core, Imperative Shell');

    const callout = section?.querySelector('.callout.forest');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('Hexagonal Architecture');
  });

  it('renders section #step9 with Humble Object pattern and diagram 5', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step9');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 09');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('価値あるテストへのリファクタリング ― Humble Objectパターン');

    const diag = section?.querySelector('#diag-5');
    expect(diag).not.toBeNull();

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図6: Humble Objectパターンによるリファクタリング');

    const listItems = section?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(listItems?.[0].textContent).toContain('Domain Logic');
    expect(listItems?.[1].textContent).toContain('Humble Controller');
    expect(listItems?.[2].textContent).toContain('保守コストを増やさずに回帰保護を最大化');
  });
});

describe('Unit Testing Guide - Category 4 (Step 10 - Step 13)', () => {
  it('renders section #step10 with managed vs unmanaged table and diagram 6', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step10');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 10');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('統合テスト（Integration Testing）の実践');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(2);
    expect(rows?.[0].textContent).toContain('Managed dependency');
    expect(rows?.[1].textContent).toContain('Unmanaged dependency');

    const diag = section?.querySelector('#diag-6');
    expect(diag).not.toBeNull();

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図7: Managed / Unmanaged dependency の判定フロー');

    const olItems = section?.querySelectorAll('ol li');
    expect(olItems?.length).toBe(3);
  });

  it('renders section #step11 with mocking best practices table', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step11');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 11');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('モッキングのベストプラクティス');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0].textContent).toContain('モックは unmanaged dependency に対してのみ使う');
    expect(rows?.[1].textContent).toContain('モックの検証は「アプリケーションの境界」でのみ行う');
    expect(rows?.[2].textContent).toContain('1つの外部依存に対するモックの数を最小限にする');
    expect(rows?.[3].textContent).toContain('戻り値のないコマンド呼び出しの検証にモックを使う');
    expect(rows?.[4].textContent).toContain('モックの設定・検証コードは共通化する');
  });

  it('renders section #step12 with database testing table and lifecycle points', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step12');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 12');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('データベースのテスト');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(2);
    expect(rows?.[0].textContent).toContain('トランザクションロールバック方式');
    expect(rows?.[1].textContent).toContain('クリーンアップ方式');

    expect(section?.textContent).toContain('トランザクション管理');
    expect(section?.textContent).toContain('テストデータのライフサイクル');
    expect(section?.textContent).toContain('並列実行時の注意');

    const ulItems = section?.querySelectorAll('ul li');
    expect(ulItems?.length).toBe(3);
  });

  it('renders section #step13 with 6 antipatterns table', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#step13');
    expect(section).not.toBeNull();

    const badge = section?.querySelector('.section-badge');
    expect(badge?.textContent).toBe('Step 13');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('よくあるアンチパターンと対処法');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(6);
    expect(rows?.[0].textContent).toContain('プライベートメソッドを直接テストする');
    expect(rows?.[1].textContent).toContain('テストのためだけにプライベート状態を公開する');
    expect(rows?.[2].textContent).toContain('ドメイン知識をテストに漏出させる');
    expect(rows?.[3].textContent).toContain('コード汚染（production code pollution）');
    expect(rows?.[4].textContent).toContain('モック対象を「具象クラスかどうか」で決める');
    expect(rows?.[5].textContent).toContain('時間（現在時刻）の扱い');
  });
});

describe('Unit Testing Guide - Category 5 (Checklist, 2026 Updates, References)', () => {
  it('renders section #checklist with interactive checklist items and counter', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#checklist');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('まとめ: 実践チェックリスト');

    const counter = section?.querySelector('#checklistCount');
    expect(counter).not.toBeNull();
    expect(counter?.textContent).toBe('0');

    const items = section?.querySelectorAll('.checklist li');
    expect(items?.length).toBe(10);

    const firstCheckbox = items?.[0].querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(firstCheckbox).not.toBeNull();
    expect(firstCheckbox.checked).toBe(false);

    // Simulate clicking checkbox
    fireEvent.click(firstCheckbox);
    expect(firstCheckbox.checked).toBe(true);
    expect(counter?.textContent).toBe('1');
    expect(items?.[0].classList.contains('done')).toBe(true);
  });

  it('renders section #update2026 with 12 desiderata and 2.0 meta-goals', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#update2026');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('2026年時点の補足: 議論はどう発展したか');

    const h3s = Array.from(section?.querySelectorAll('h3') || []).map((h) => h.textContent);
    expect(h3s).toContain('Kent Beckの「Composable Tests」（2025年11月）');
    expect(h3s).toContain('Emily Bacheによる「Test Desiderata 2.0」（2025年12月）');
    expect(h3s).toContain('テストピラミッドとテスティングトロフィー、そして現在地');
    expect(h3s).toContain('AI生成コードのテスト（2026年の新しい論点）');

    const tables = section?.querySelectorAll('table');
    expect(tables?.length).toBe(2);

    // Table 12: 12 Desiderata
    const table1Rows = tables?.[0].querySelectorAll('tbody tr');
    expect(table1Rows?.length).toBe(12);
    expect(table1Rows?.[0].textContent).toContain('Isolated');
    expect(table1Rows?.[11].textContent).toContain('Predictive');

    // Table 13: Desiderata 2.0
    const table2Rows = tables?.[1].querySelectorAll('tbody tr');
    expect(table2Rows?.length).toBe(4);
    expect(table2Rows?.[0].textContent).toContain('本番での成功を予測できるか（Predict success）');
    expect(table2Rows?.[3].textContent).toContain('保有コストを最小化できるか（Minimize cost of ownership）');

    // AI generated testing list
    expect(section?.textContent).toContain('Verification Paradox（検証のパラドックス）');
    expect(section?.textContent).toContain('振る舞いカバレッジの重視');
  });

  it('renders section #references with 21 reference cards in categorized groups', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#references');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('参考文献・情報源');

    const groups = section?.querySelectorAll('.ref-group');
    expect(groups?.length).toBeGreaterThanOrEqual(8);

    const cards = section?.querySelectorAll('.ref-card');
    expect(cards?.length).toBe(21);

    const expectedRefs = [
      { title: "O'Reilly（書籍ページ・目次）", href: 'https://www.oreilly.com/library/view/unit-testing-principles/9781617296277/' },
      { title: 'Manning Publications（出版社公式ページ）', href: 'https://www.manning.com/books/unit-testing' },
      { title: '著者Khorikov氏ブログ掲載チャプター抜粋', href: 'https://enterprisecraftsmanship.com/files/Unit-Testing-Chapter-1-Excerpt.pdf' },
      { title: 'Tech Lead Journal #58 ― Vladimir Khorikov', href: 'https://techleadjournal.dev/episodes/58/' },
      { title: "Mocks Aren't Stubs", href: 'https://martinfowler.com/articles/mocksArentStubs.html' },
      { title: 'Test Desiderata（2019年、原著論考）', href: 'https://medium.com/@kentbeck_7670/test-desiderata-94150638a4b3' },
      { title: 'Composable Tests（2025年11月、続編）', href: 'https://newsletter.kentbeck.com/p/composable-tests' },
      { title: 'Test Desiderata 公式まとめページ', href: 'https://kentbeck.github.io/TestDesiderata/' },
      { title: 'Test Desiderata 2.0（2025年12月）', href: 'https://coding-is-like-cooking.info/2025/12/test-desiderata-2-0/' },
      { title: 'Test Desiderata 2.0 フレームワーク解説', href: 'https://lidonis.github.io/Test-Desiderata/framework.html' },
      { title: 'Write tests. Not too many. Mostly integration.', href: 'https://kentcdodds.com/blog/write-tests' },
      { title: 'The Testing Trophy and Testing Classifications', href: 'https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications' },
      { title: 'Static vs Unit vs Integration vs E2E Testing', href: 'https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests' },
      { title: 'TDD, Where Did It All Go Wrong?（InfoQ）', href: 'https://www.infoq.com/presentations/tdd-original/' },
      { title: 'Boundaries（Functional Core, Imperative Shellの提唱）', href: 'https://www.destroyallsoftware.com/talks/boundaries' },
      { title: 'Rethinking Spring Application Integration Testing（2025年12月）', href: 'https://odrotbohm.de/2025/12/rethinking-spring-application-integration-testing/' },
      { title: 'Testing AI-Generated Code: Best Practices for 2026', href: 'https://skyramp.dev/blog/testing-ai-generated-code' },
      { title: 'How to Test AI-Generated Code: Best Practices & Checklist (2026)', href: 'https://testdino.com/blog/how-to-test-ai-generated-code' },
      { title: '4 Pillars of Good Unit Tests（要点まとめ）', href: 'https://notesbylex.com/4-pillars-of-good-unit-tests' },
      { title: 'Unit Testing Principles（要点まとめ、2025年1月）', href: 'https://olano.dev/blog/unit-testing-principles/' },
      { title: 'テストダブルの実務ガイド（2026年）', href: 'https://qaskills.sh/blog/stub-mock-spy-fake-test-doubles-explained' },
    ];
    expect(expectedRefs.length).toBe(21);

    cards?.forEach((card, idx) => {
      const expected = expectedRefs[idx];
      const link = card.querySelector('a.ref-title');
      expect(link).not.toBeNull();
      expect(link?.getAttribute('target')).toBe('_blank');
      expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
      expect(link?.textContent).toBe(expected.title);
      expect(link?.getAttribute('href')).toBe(expected.href);

      const urlSpan = card.querySelector('.ref-url');
      expect(urlSpan).not.toBeNull();
      expect(urlSpan?.textContent).toBe(link?.getAttribute('href'));
    });

    const noteFinal = section?.querySelector('.note-final');
    expect(noteFinal).not.toBeNull();
    expect(noteFinal?.textContent).toContain('本記事は上記ソースの内容を要約・再構成した学習ガイドであり');
  });
});
