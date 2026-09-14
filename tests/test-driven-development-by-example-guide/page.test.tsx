import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/test-driven-development-by-example-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/test-driven-development-by-example-guide/NavBar';

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

describe('TDD by Example Guide - Category 1 (Hero, NavBar, Ch01-Ch04)', () => {
  it('renders within the scoped root container .tdd-guide-layout', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.tdd-guide-layout');
    expect(root).not.toBeNull();
  });

  it('renders hero with eyebrow, h1, subtitle, and 4 meta chips', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('.hero');
    expect(hero).not.toBeNull();

    const eyebrow = hero?.querySelector('.hero-eyebrow');
    expect(eyebrow?.textContent).toBe('CLASSIC SOFTWARE TESTING BOOKS シリーズ');

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toBe('Test-Driven Development: By Example');

    const sub = hero?.querySelector('.hero-sub');
    expect(sub?.textContent).toBe('初学者のためのステップバイステップ解説ガイド');

    const chips = hero?.querySelectorAll('.chip');
    expect(chips?.length).toBe(4);
    expect(chips?.[0].textContent).toContain('Kent Beck 著');
    expect(chips?.[1].textContent).toContain('2002年11月刊行');
    expect(chips?.[2].textContent).toContain('240ページ');
    expect(chips?.[3].textContent).toContain('Addison-Wesley Professional');
  });

  it('renders navigation bar with all 16 TOC items, 4 group titles, and mobile toggle', () => {
    const { container } = render(<NavBar />);
    const aside = container.querySelector('aside.sidebar');
    expect(aside).not.toBeNull();

    expect(TOC_ITEMS).toHaveLength(16);

    const links = container.querySelectorAll('nav a.nav-a');
    expect(links.length).toBe(16);

    TOC_ITEMS.forEach((item, index) => {
      const link = links[index];
      expect(link.getAttribute('href')).toBe(`#${item.id}`);
      expect(link.textContent).toContain(item.label);
    });

    const groupTitles = container.querySelectorAll('.nav-group-title');
    expect(groupTitles.length).toBe(4);
    expect(groupTitles[0].textContent).toBe('はじめに');
    expect(groupTitles[1].textContent).toBe('本編');
    expect(groupTitles[2].textContent).toBe('発展');
    expect(groupTitles[3].textContent).toBe('まとめ');

    const mobileToggle = container.querySelector('#mobileToggle');
    expect(mobileToggle).not.toBeNull();
    expect(mobileToggle?.getAttribute('aria-label')).toBe('メニューを開閉する');
  });

  it('renders Section 01: この本について (#book-info) with bibliographic table and intro text', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#book-info');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('01');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('この本について');

    const tableTitle = sec?.querySelector('.table-title');
    expect(tableTitle?.textContent).toContain('書誌情報');

    const rows = sec?.querySelectorAll('table tbody tr');
    expect(rows?.length).toBe(7);
    expect(rows?.[0].textContent).toContain('書名');
    expect(rows?.[0].textContent).toContain('Test-Driven Development: By Example');
    expect(rows?.[1].textContent).toContain('著者');
    expect(rows?.[1].textContent).toContain('Kent Beck');
    expect(rows?.[2].textContent).toContain('出版社');
    expect(rows?.[2].textContent).toContain('Addison-Wesley Professional');
    expect(rows?.[3].textContent).toContain('出版年月');
    expect(rows?.[3].textContent).toContain('2002年11月');
    expect(rows?.[4].textContent).toContain('ページ数');
    expect(rows?.[4].textContent).toContain('240ページ');
    expect(rows?.[5].textContent).toContain('難易度');
    expect(rows?.[5].textContent).toContain('中級〜上級（ただし実例は平易）');
    expect(rows?.[6].textContent).toContain('主な功績');
    expect(rows?.[6].textContent).toContain('テスト駆動開発（TDD）という手法を体系立てて世界に広めた最初期の書籍のひとつ');

    const paragraphs = sec?.querySelectorAll('p');
    const introText = Array.from(paragraphs || []).map((p) => p.textContent).join(' ');
    expect(introText).toContain('Kent Beckは、Extreme Programming（XP）の創始者であり');
    expect(introText).toContain('抽象的な理論の説明ではなく、実際にコードを書きながらTDDのサイクルを追体験させる');
  });

  it('renders Section 02: 対象読者と前提知識 (#audience) with list and prerequisites', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#audience');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('02');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('対象読者と前提知識');

    const listItems = sec?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(4);
    expect(listItems?.[0].textContent).toContain('プログラミングの基礎（変数・関数・クラス・条件分岐）を理解している人');
    expect(listItems?.[1].textContent).toContain('何らかの言語で簡単なコードが書ける人');
    expect(listItems?.[2].textContent).toContain('単体テストという概念に初めて触れる、あるいは触れたばかりの人');
    expect(listItems?.[3].textContent).toContain('「テストを書くのは面倒」「TDDは遅くなる」と感じたことがある人');

    expect(sec?.textContent).toContain('前提知識として、xUnit系のテストフレームワーク（JUnit、pytestなど）の使用経験があると理解がスムーズですが、必須ではありません。');
  });

  it('renders Section 03: TDDとは何か (#what-is-tdd) with 3 steps, Mermaid dg-cycle, and callout', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#what-is-tdd');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('03');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('TDDとは何か');

    expect(sec?.textContent).toContain('プロダクションコードを書く前に、まずそのコードが満たすべき振る舞いをテストとして書く');

    const olItems = sec?.querySelectorAll('ol li');
    expect(olItems?.length).toBe(3);
    expect(olItems?.[0].textContent).toBe('これから追加したい機能に対するテストを書く');
    expect(olItems?.[1].textContent).toBe('そのテストが通るまで最小限の実装コードを書く');
    expect(olItems?.[2].textContent).toBe('新旧のコードをリファクタリングして構造を整える');

    const diag = sec?.querySelector('#dg-cycle');
    expect(diag).not.toBeNull();

    const caption = sec?.querySelector('.mermaid-caption');
    expect(caption?.textContent).toContain('図: Red-Green-Refactorサイクル');

    const ulItems = sec?.querySelectorAll('ul li');
    expect(ulItems?.length).toBe(3);
    expect(ulItems?.[0].textContent).toContain('Red（赤）');
    expect(ulItems?.[1].textContent).toContain('Green（緑）');
    expect(ulItems?.[2].textContent).toContain('Refactor（リファクタリング）');

    const callout = sec?.querySelector('.callout');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('Kent Beckは本書冒頭で、TDDの目的を「恐怖（fear）の排除」だと述べています');
  });

  it('renders Section 04: 本書の3部構成 (#structure) with Mermaid dg-structure and summary table', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#structure');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('04');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('本書の3部構成');

    const diag = sec?.querySelector('#dg-structure');
    expect(diag).not.toBeNull();

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();

    const ths = table?.querySelectorAll('thead th');
    expect(ths?.length).toBe(4);
    expect(ths?.[0].textContent).toBe('Part');
    expect(ths?.[1].textContent).toBe('章');
    expect(ths?.[2].textContent).toBe('主なテーマ');
    expect(ths?.[3].textContent).toBe('学べること');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('Part I: The Money Example');
    expect(rows?.[0].textContent).toContain('1〜17章');
    expect(rows?.[0].textContent).toContain('多通貨（ドル・フラン）に対応したMoneyクラスの実装');
    expect(rows?.[1].textContent).toContain('Part II: The xUnit Example');
    expect(rows?.[1].textContent).toContain('18〜24章');
    expect(rows?.[1].textContent).toContain('xUnit系テストフレームワークそのものをTDDで作る');
    expect(rows?.[2].textContent).toContain('Part III: Patterns for Test-Driven Development');
    expect(rows?.[2].textContent).toContain('25〜32章');
    expect(rows?.[2].textContent).toContain('TDDに関する65個のパターン集と考察');

    expect(sec?.textContent).toContain('Part I と Part II の終わりには「Retrospective（回顧）」という振り返り章が置かれており');
  });
});

describe('TDD by Example Guide - Category 2 (Ch05-Ch07: Money, xUnit, Patterns)', () => {
  it('renders Section 05: Part I: Moneyの例 (#part1) with 3 H3s, ol, table, Mermaid dg-tax, and 5 code blocks', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#part1');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('05');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('Part I: Moneyの例で学ぶTDDの基本サイクル');

    const h3s = sec?.querySelectorAll('h3');
    expect(h3s?.length).toBe(3);
    expect(h3s?.[0].textContent).toBe('ステップ・バイ・ステップの流れ');
    expect(h3s?.[1].textContent).toBe('テストを通す3つの戦略（Green Barパターン）');
    expect(h3s?.[2].textContent).toBe('オリジナルの例で追体験する（税込み価格計算）');

    const olItems = sec?.querySelectorAll('ol li');
    expect(olItems?.length).toBe(7);
    expect(olItems?.[0].textContent).toContain('やりたいことをテストリストとして書き出す');
    expect(olItems?.[1].textContent).toContain('リストから1つを選び、実際に動くテストコードに変換する');
    expect(olItems?.[2].textContent).toContain('そのテストをコンパイルが通る最小限の形にする');
    expect(olItems?.[3].textContent).toContain('テストを実行し、失敗（Red）することを確認する');
    expect(olItems?.[4].textContent).toContain('テストを通すための最小限のコードを書く');
    expect(olItems?.[5].textContent).toContain('テストが通ったら（Green）、コードの重複や設計上の課題をリファクタリングする');
    expect(olItems?.[6].textContent).toContain('テストリストに新しく気づいた項目を追加し、2に戻る');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('Fake It（Til You Make It）');
    expect(rows?.[1].textContent).toContain('Triangulate（三角測量）');
    expect(rows?.[2].textContent).toContain('Obvious Implementation（明白な実装）');

    const diag = sec?.querySelector('#dg-tax');
    expect(diag).not.toBeNull();
    const caption = sec?.querySelector('.mermaid-caption');
    expect(caption?.textContent).toContain('図: 税込み価格計算の例でRed-Green-Refactorを追体験する');

    const codeBlocks = sec?.querySelectorAll('.code-block');
    expect(codeBlocks?.length).toBe(5);

    const heads = sec?.querySelectorAll('.code-head');
    expect(heads?.[0].textContent).toContain('ステップ1: Red — tax_example.py');
    expect(heads?.[1].textContent).toContain('ステップ2: Green (Fake It) — tax_example.py');
    expect(heads?.[2].textContent).toContain('ステップ3: Red — tax_example.py');
    expect(heads?.[3].textContent).toContain('ステップ4: Green (Triangulate) — tax_example.py');
    expect(heads?.[4].textContent).toContain('ステップ5: Refactor — tax_example.py');

    codeBlocks?.forEach((cb) => {
      const lines = cb.querySelectorAll('.code-line');
      expect(lines.length).toBeGreaterThan(0);
    });

    expect(codeBlocks?.[0].textContent).toContain('assert 税込み価格(0) == 0');
    expect(codeBlocks?.[1].textContent).toContain('return 0');
    expect(codeBlocks?.[2].textContent).toContain('assert 税込み価格(100) == 110');
    expect(codeBlocks?.[3].textContent).toContain('return int(小計 * 1.1)');
    expect(codeBlocks?.[4].textContent).toContain('消費税率 = 0.10');
  });

  it('renders Section 06: Part II: xUnitを自作する意味 (#part2) with ul list and Mermaid dg-xunit', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#part2');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('06');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('Part II: xUnitを自作する意味');

    const listItems = sec?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(listItems?.[0].textContent).toContain('TDDは業務ロジックだけでなく、テストインフラ自体の開発にも適用できる');
    expect(listItems?.[1].textContent).toContain('xUnit系フレームワーク（JUnit、pytest、NUnitなど）が内部で何をしているか');
    expect(listItems?.[2].textContent).toContain('「テストするものが自分自身のテストの仕組みである」という自己言及的な状況でも');

    const diag = sec?.querySelector('#dg-xunit');
    expect(diag).not.toBeNull();
    const caption = sec?.querySelector('.mermaid-caption');
    expect(caption?.textContent).toContain('図: xUnit系フレームワークの主要な構成要素');
  });

  it('renders Section 07: Part III: TDDパターン集 (#part3) with 7-category table and plum callout', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#part3');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('07');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('Part III: TDDパターン集');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const ths = table?.querySelectorAll('thead th');
    expect(ths?.length).toBe(3);
    expect(ths?.[0].textContent).toBe('パターン分類');
    expect(ths?.[1].textContent).toBe('章');
    expect(ths?.[2].textContent).toBe('代表的なパターン');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(7);
    expect(rows?.[0].textContent).toContain('Test-Driven Development Patterns');
    expect(rows?.[0].textContent).toContain('25章');
    expect(rows?.[1].textContent).toContain('Red Bar Patterns');
    expect(rows?.[1].textContent).toContain('26章');
    expect(rows?.[2].textContent).toContain('Testing Patterns');
    expect(rows?.[2].textContent).toContain('27章');
    expect(rows?.[3].textContent).toContain('Green Bar Patterns');
    expect(rows?.[3].textContent).toContain('28章');
    expect(rows?.[4].textContent).toContain('xUnit Patterns');
    expect(rows?.[4].textContent).toContain('29章');
    expect(rows?.[5].textContent).toContain('Design Patterns');
    expect(rows?.[5].textContent).toContain('30章');
    expect(rows?.[6].textContent).toContain('Refactoring');
    expect(rows?.[6].textContent).toContain('31章');

    const callout = sec?.querySelector('.callout.plum');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('最終章の32章「Mastering TDD」では');
  });
});

describe('TDD by Example Guide - Category 3 (Ch08-Ch12: Three Laws, Canon, Pitfalls, TDD is Dead, AI Era)', () => {
  it('renders Section 08: TDDの三原則 (#three-laws) with Mermaid dg-laws', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#three-laws');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('08');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('TDDの三原則（Uncle Bobによる定式化）');

    const diag = sec?.querySelector('#dg-laws');
    expect(diag).not.toBeNull();
    const caption = sec?.querySelector('.mermaid-caption');
    expect(caption?.textContent).toContain('図: Three Laws of TDD（Robert C. Martin）');

    expect(sec?.textContent).toContain('テストコードとプロダクションコードをほぼ1行単位で交互に書かせるほど粒度が細かいことが特徴です');
  });

  it('renders Section 09: Canon TDD (#canon-tdd) with Mermaid dg-canon and 3 highlights', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#canon-tdd');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('09');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('Canon TDD ─ Kent Beckが自身の手順を整理した記事');

    const diag = sec?.querySelector('#dg-canon');
    expect(diag).not.toBeNull();
    const caption = sec?.querySelector('.mermaid-caption');
    expect(caption?.textContent).toContain('図: Canon TDDの手順');

    const listItems = sec?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(listItems?.[0].textContent).toContain('最初の「テストシナリオのリストを書く」ステップ');
    expect(listItems?.[1].textContent).toContain('TDDを批判するなら、この手順（Canon TDD）を批判してほしい');
    expect(listItems?.[2].textContent).toContain('手順どおりにやらなくても、それでうまくいっているなら問題ない');
  });

  it('renders Section 10: 初学者がつまずきやすいポイントと対策 (#pitfalls) with 5 pitfall cards', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#pitfalls');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('10');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('初学者がつまずきやすいポイントと対策');

    const cards = sec?.querySelectorAll('.pitfall-card');
    expect(cards?.length).toBe(5);

    expect(cards?.[0].querySelector('.p-q')?.textContent).toContain('ステップが小さすぎて退屈に感じる');
    expect(cards?.[0].querySelector('.p-a')?.textContent).toContain('本書でも「慣れてきたらステップを大きくしてよい」と明言されています');

    expect(cards?.[1].querySelector('.p-q')?.textContent).toContain('「テストファースト」と「TDD」を混同する');
    expect(cards?.[1].querySelector('.p-a')?.textContent).toContain('テストを先に書くだけでは不十分です');

    expect(cards?.[2].querySelector('.p-q')?.textContent).toContain('Fake Itが「ズル」に見えて抵抗を感じる');
    expect(cards?.[2].querySelector('.p-a')?.textContent).toContain('Fake Itは正当な戦略です');

    expect(cards?.[3].querySelector('.p-q')?.textContent).toContain('何でもかんでもテストしようとして疲弊する');
    expect(cards?.[3].querySelector('.p-a')?.textContent).toContain('32章では「何をテストしなくてよいか」という問いに');

    expect(cards?.[4].querySelector('.p-q')?.textContent).toContain('リファクタリングを省略してしまう');
    expect(cards?.[4].querySelector('.p-a')?.textContent).toContain('Greenの状態はゴールではなく通過点です');
  });

  it('renders Section 11: 「TDD is Dead」論争 (#tdd-is-dead) with 3-advocate table and callout', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#tdd-is-dead');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('11');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('「TDD is Dead」論争 ─ 賛否両論を知る');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const ths = table?.querySelectorAll('thead th');
    expect(ths?.length).toBe(3);
    expect(ths?.[0].textContent).toBe('論者');
    expect(ths?.[1].textContent).toBe('主張の要旨');
    expect(ths?.[2].textContent).toBe('立場');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('David Heinemeier Hansson（DHH）');
    expect(rows?.[0].textContent).toContain('テストファーストへの懐疑・脱原理主義');
    expect(rows?.[1].textContent).toContain('Kent Beck');
    expect(rows?.[1].textContent).toContain('TDD提唱者としての立場明確化');
    expect(rows?.[2].textContent).toContain('Martin Fowler');
    expect(rows?.[2].textContent).toContain('中立的な整理・橋渡し役');

    const callout = sec?.querySelector('.callout');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('「TDDは万能の銀の弾丸ではない」という前提を最初から持っておくこと');
  });

  it('renders Section 12: 2025〜2026年の潮流: AIエージェント時代のTDD (#ai-era) with ul, Mermaid dg-ai, and forest callout', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ai-era');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('12');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('2025〜2026年の潮流: AIエージェント時代のTDD');

    const listItems = sec?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(listItems?.[0].textContent).toContain('AIエージェントは「まずコードを書いて、後から通るテストを書く」という、TDD本来の順序とは逆の振る舞いをしがちである');
    expect(listItems?.[1].textContent).toContain('失敗しているテストそのものを削除してしまう');
    expect(listItems?.[2].textContent).toContain('AIエージェントが書くコードの品質を保証する「超能力（superpower）」として、あらためて注目されている');

    const diag = sec?.querySelector('#dg-ai');
    expect(diag).not.toBeNull();
    const caption = sec?.querySelector('.mermaid-caption');
    expect(caption?.textContent).toContain('図: AIエージェント時代のTDDサイクル（人間による安全弁付き）');

    const callout = sec?.querySelector('.callout.forest');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('本書が教える「小さなステップ」「テストリスト」「Red-Green-Refactor」という基本規律そのものの価値は変わっていない');
  });
});

describe('TDD by Example Guide - Category 4 (Ch13-Ch16: Checklist, Roadmap, Summary, References, Footer)', () => {
  it('renders Section 13: 初学者向けベストプラクティス・チェックリスト (#checklist) with 9 items and counter', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#checklist');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('13');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('初学者向けベストプラクティス・チェックリスト');

    const counter = sec?.querySelector('.checklist-counter');
    expect(counter).not.toBeNull();
    expect(counter?.textContent).toContain('0 / 9 完了');

    const checkboxes = sec?.querySelectorAll('.checklist input[type="checkbox"]');
    expect(checkboxes?.length).toBe(9);

    const labels = sec?.querySelectorAll('.checklist label');
    expect(labels?.[0].textContent).toContain('環境準備');
    expect(labels?.[1].textContent).toContain('テストリスト作成');
    expect(labels?.[2].textContent).toContain('最初のテスト');
    expect(labels?.[3].textContent).toContain('Red確認');
    expect(labels?.[4].textContent).toContain('最小実装');
    expect(labels?.[5].textContent).toContain('Green確認');
    expect(labels?.[6].textContent).toContain('リファクタリング');
    expect(labels?.[7].textContent).toContain('次のテストへ');
    expect(labels?.[8].textContent).toContain('振り返り');

    const notes = sec?.querySelectorAll('.cl-note');
    expect(notes?.length).toBe(9);
  });

  it('renders Section 14: 学習ロードマップ (#roadmap) with Mermaid dg-roadmap', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#roadmap');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('14');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('学習ロードマップ');

    const diag = sec?.querySelector('#dg-roadmap');
    expect(diag).not.toBeNull();
    const caption = sec?.querySelector('.mermaid-caption');
    expect(caption?.textContent).toContain('図: 初学者のための学習ロードマップ');

    expect(sec?.textContent).toContain('TDDは読むだけでは体得できない、身体で覚える技術だからです');
  });

  it('renders Section 15: まとめ (#summary) with 6 summary items', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#summary');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('15');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('まとめ');

    const listItems = sec?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(6);
    expect(listItems?.[0].textContent).toContain('Red → Green → Refactorという規律あるサイクルを通じて');
    expect(listItems?.[1].textContent).toContain('Part I（実例）、Part II（テストフレームワーク自体の実装）、Part III（パターン集）');
    expect(listItems?.[2].textContent).toContain('Fake It／Triangulate／Obvious Implementationという3つの戦略');
    expect(listItems?.[3].textContent).toContain('DHH・Kent Beck・Martin Fowlerによる「Is TDD Dead?」論争');
    expect(listItems?.[4].textContent).toContain('AIコーディングエージェントの台頭により');
    expect(listItems?.[5].textContent).toContain('20年以上前に書かれた本書の核心的な考え方は、時代が変わった今も色褪せていない');
  });

  it('renders Section 16: 参考文献・出典 (#references) with all 9 external references', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#references');
    expect(sec).not.toBeNull();

    const eyebrow = sec?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('16');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('参考文献・出典');

    const links = sec?.querySelectorAll('ul.ref-list li a');
    expect(links?.length).toBe(9);

    const expectedRefs = [
      { href: 'https://www.oreilly.com/library/view/test-driven-development/0321146530/', title: "Test Driven Development: By Example（O'Reilly掲載ページ）", desc: '書誌情報・目次' },
      { href: 'https://martinfowler.com/bliki/TestDrivenDevelopment.html', title: 'Martin Fowler, "bliki: Test Driven Development"', desc: 'TDDの定義に関する解説' },
      { href: 'https://martinfowler.com/articles/is-tdd-dead/', title: 'Martin Fowler, "Is TDD Dead?"', desc: 'Kent Beck・DHHとの対話シリーズ' },
      { href: 'https://dhh.dk/2014/tdd-is-dead-long-live-testing.html', title: 'David Heinemeier Hansson, "TDD is dead. Long live testing."（2014年）', desc: '論争の発端となった記事' },
      { href: 'https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html', title: 'Robert C. Martin（Uncle Bob）, "The Cycles of TDD"', desc: 'Three Laws of TDDの解説' },
      { href: 'https://newsletter.kentbeck.com/p/canon-tdd', title: 'Kent Beck, "Canon TDD"（2023年）', desc: 'Kent Beckが自身のTDD手順を整理した記事' },
      { href: 'https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes', title: 'Kent Beck, "Augmented Coding: Beyond the Vibes"', desc: 'AI時代のTDDに関する考察' },
      { href: 'https://newsletter.pragmaticengineer.com/p/tdd-ai-agents-and-coding-with-kent', title: 'The Pragmatic Engineer, "TDD, AI agents and coding with Kent Beck"', desc: 'Gergely Oroszによるインタビュー' },
      { href: 'https://kentbeck.com/', title: 'Kent Beck 公式サイト', desc: '近年の活動・Canon TDD講演等の紹介' },
    ];

    expectedRefs.forEach((expected, i) => {
      const link = links?.[i];
      expect(link?.getAttribute('href')).toBe(expected.href);
      expect(link?.getAttribute('target')).toBe('_blank');
      expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
      expect(link?.textContent).toContain(expected.title);

      const desc = link?.parentElement?.querySelector('.ref-desc');
      expect(desc?.textContent).toBe(expected.desc);
    });
  });

  it('renders footer with disclaimer and original book link', () => {
    const { container } = render(<Page />);
    const footer = container.querySelector('footer.footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('本ページはKent Beckの著書『Test-Driven Development: By Example』の内容を、初学者向けに要約・再構成した学習補助資料です');

    const link = footer?.querySelector('a');
    expect(link?.getAttribute('href')).toBe('https://www.oreilly.com/library/view/test-driven-development/0321146530/');
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
  });
});
