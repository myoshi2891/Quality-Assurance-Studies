import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/clean-code-cookbook-guide/page';
import NavBar from '../../app/clean-code-cookbook-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
let mermaidRenderMock: ReturnType<typeof mock>;

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaidRenderMock = mock(async () => {
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

// 元 HTML の構成要素インベントリ。件数の下限確認ではなく、
// 出現順の固定配列との 1 対 1 照合で欠落・余剰・並び替えを検出する。
const EXPECTED_SUBHEADINGS: ReadonlyArray<{
  sectionId: string;
  h3: readonly string[];
  h4: readonly string[];
}> = [
  { sectionId: 'sec-1', h3: [], h4: [] },
  {
    sectionId: 'sec-2',
    h3: [
      '2.1 コードスメルとは何か',
      '2.2 リファクタリングとは何か',
      '2.3 なぜクリーンコードが重要なのか',
    ],
    h4: [],
  },
  { sectionId: 'sec-3', h3: [], h4: [] },
  {
    sectionId: 'sec-4',
    h3: [
      'ステップ1：コードスメルに気づく（発見）',
      'ステップ2：スメルを分類する',
      'ステップ3：変更前にテストの安全網を用意する',
      'ステップ4：小さな一歩から始める（Tidy First の考え方）',
      'ステップ5：名前を改善する',
      'ステップ6：関数とクラスを小さく保つ',
      'ステップ7：条件分岐・Null・例外を安全にする',
      'ステップ8：小さくコミットし、継続的に磨き続ける',
    ],
    h4: ['コード例（マジックナンバーの整頓）'],
  },
  { sectionId: 'sec-5', h3: [], h4: [] },
  { sectionId: 'sec-6', h3: [], h4: [] },
  {
    sectionId: 'sec-7',
    h3: [
      '7.1 Workslop（ワークスロップ）コード',
      '7.2 Model Collapse（モデル崩壊）パターン',
      '7.3 Nitpicking（枝葉末節への固執）',
    ],
    h4: [],
  },
  { sectionId: 'sec-8', h3: [], h4: [] },
  { sectionId: 'sec-9', h3: [], h4: [] },
  { sectionId: 'sec-10', h3: [], h4: [] },
];

const EXPECTED_CALLOUTS: ReadonlyArray<{
  sectionId: string;
  variant: 'note' | 'source';
  title: string;
}> = [
  { sectionId: 'sec-1', variant: 'note', title: '補足' },
  { sectionId: 'sec-2', variant: 'source', title: '出典' },
  { sectionId: 'sec-2', variant: 'source', title: '出典' },
  { sectionId: 'sec-3', variant: 'note', title: '補足' },
  { sectionId: 'sec-3', variant: 'source', title: '出典' },
  { sectionId: 'sec-4', variant: 'source', title: '出典' },
  { sectionId: 'sec-5', variant: 'source', title: '出典' },
  { sectionId: 'sec-7', variant: 'source', title: '出典' },
  { sectionId: 'sec-7', variant: 'source', title: '出典' },
  { sectionId: 'sec-7', variant: 'source', title: '出典' },
];

const EXPECTED_CARDS: ReadonlyArray<{
  sectionId: string;
  variant: 'diagram-card' | 'stat-card' | 'card';
}> = [
  { sectionId: 'sec-2', variant: 'diagram-card' },
  { sectionId: 'sec-4', variant: 'diagram-card' },
  { sectionId: 'sec-4', variant: 'diagram-card' },
  { sectionId: 'sec-4', variant: 'diagram-card' },
  { sectionId: 'sec-5', variant: 'stat-card' },
  { sectionId: 'sec-5', variant: 'stat-card' },
  { sectionId: 'sec-5', variant: 'stat-card' },
  { sectionId: 'sec-5', variant: 'stat-card' },
  { sectionId: 'sec-10', variant: 'card' },
];

const EXPECTED_TABLES: ReadonlyArray<{
  section: string;
  caption: string;
  headers: readonly string[];
  rows: number;
}> = [
  {
    section: 'sec-1',
    caption: '『Clean Code Cookbook』の書誌情報',
    headers: ['項目', '内容'],
    rows: 8,
  },
  {
    section: 'sec-3',
    caption: '本ガイド独自の学習用カテゴリーと該当する章',
    headers: ['カテゴリー', '該当する章'],
    rows: 5,
  },
  {
    section: 'sec-3',
    caption: '原著 全25章の一覧（原題と内容の要点）',
    headers: ['章', '原題', '内容の要点'],
    rows: 25,
  },
  {
    section: 'sec-4',
    caption: '条件分岐・Null・例外に関するスメルと対処パターン',
    headers: ['スメル', '症状', '対処パターン'],
    rows: 4,
  },
  {
    section: 'sec-5',
    caption: 'Sandi Metz の4つのルール',
    headers: ['ルール', '内容'],
    rows: 4,
  },
  {
    section: 'sec-6',
    caption: '世界的に著名な開発者のクリーンコードに関する視点',
    headers: ['開発者', '代表的な功績', 'クリーンコードに関する視点（要約）', '出典'],
    rows: 5,
  },
  {
    section: 'sec-8',
    caption: 'コミット前・コードレビュー用チェックリスト',
    headers: ['観点', 'チェック項目'],
    rows: 13,
  },
];

describe('Clean Code Cookbook Guide Page - Comprehensive Test Suite', () => {
  describe('Hero Section & Metadata', () => {
    it('renders the main hero header with eyebrow, title, lead, and chips', () => {
      const { container } = render(<Page />);

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeDefined();
      expect(h1.textContent).toContain('Clean Code Cookbook 実践ガイド');

      const eyebrow = container.querySelector('.hero .eyebrow');
      expect(eyebrow).not.toBeNull();
      expect(eyebrow?.textContent).toContain('初心者向け実践ガイド');

      const lead = container.querySelector('.hero p.lead');
      expect(lead).not.toBeNull();
      expect(lead?.textContent).toContain('Maximiliano Contieri');
      expect(lead?.textContent).toContain('Martin Fowler');
      expect(lead?.textContent).toContain('Kent Beck');
      expect(lead?.textContent).toContain('Sandi Metz');

      const chips = container.querySelectorAll('.hero-meta .chip');
      expect(chips.length).toBe(3);
      expect(chips[0]?.textContent).toContain('2026年8月27日時点の情報');
      expect(chips[1]?.textContent).toContain('全25章 → 8ステップに再構成');
      expect(chips[2]?.textContent).toContain('一次情報または信頼できる二次情報のURLを本文・巻末に明記');
    });
  });

  describe('NavBar (Sidebar)', () => {
    it('renders the brand, subtitle, all 10 navigation links, and footer', () => {
      const { container } = render(<NavBar />);

      const brand = container.querySelector('.sidebar .brand');
      expect(brand).not.toBeNull();
      expect(brand?.textContent).toContain('Clean Code Cookbook');

      const brandSub = container.querySelector('.sidebar .brand-sub');
      expect(brandSub).not.toBeNull();
      expect(brandSub?.textContent).toContain('初心者のためのステップバイステップ・ベストプラクティス');

      const navLinks = container.querySelectorAll('.nav-list .nav-a');
      expect(navLinks.length).toBe(10);

      const expectedLinks = [
        { href: '#sec-1', label: 'この本について' },
        { href: '#sec-2', label: '基礎知識' },
        { href: '#sec-3', label: '全体像：25章' },
        { href: '#sec-4', label: '8ステップ実践' },
        { href: '#sec-5', label: 'Sandi Metzのルール' },
        { href: '#sec-6', label: '著名開発者の視点' },
        { href: '#sec-7', label: 'AI時代の新しい動向' },
        { href: '#sec-8', label: '保存版チェックリスト' },
        { href: '#sec-9', label: 'まとめ' },
        { href: '#sec-10', label: '参考文献・出典' },
      ];

      expectedLinks.forEach((expected, index) => {
        expect(navLinks[index]?.getAttribute('href')).toBe(expected.href);
        expect(navLinks[index]?.textContent).toContain(expected.label);
      });

      const footer = container.querySelector('.sidebar-footer');
      expect(footer).not.toBeNull();
      expect(footer?.textContent).toContain('2026年8月27日時点の情報に基づく');
    });
  });

  describe('Section Structure & Headings', () => {
    const expectedSections = [
      { id: 'sec-1', num: 'SECTION 01', title: 'この本について' },
      { id: 'sec-2', num: 'SECTION 02', title: 'クリーンコードとコードスメルの基礎知識' },
      { id: 'sec-3', num: 'SECTION 03', title: '本書の全体像：25章とその関連' },
      { id: 'sec-4', num: 'SECTION 04', title: 'ステップバイステップ実践ガイド（初心者向け8ステップ）' },
      { id: 'sec-5', num: 'SECTION 05', title: '数値で分かるベストプラクティス：Sandi Metzのルール' },
      { id: 'sec-6', num: 'SECTION 06', title: '世界的に著名な開発者の視点' },
      { id: 'sec-7', num: 'SECTION 07', title: 'AI時代の新しいコードスメル（2025〜2026年の動向）' },
      { id: 'sec-8', num: 'SECTION 08', title: '保存版チェックリスト' },
      { id: 'sec-9', num: 'SECTION 09', title: 'まとめ' },
      { id: 'sec-10', num: 'SECTION 10', title: '参考文献・一次情報リンク' },
    ];

    it.each(expectedSections)(
      'renders section $id with number $num and title $title',
      ({ id, num, title }) => {
        const { container } = render(<Page />);
        const section = container.querySelector(`section#${id}`);
        expect(section).not.toBeNull();

        const numEl = section?.querySelector('.section-num');
        expect(numEl).not.toBeNull();
        expect(numEl?.textContent).toBe(num);

        const h2 = section?.querySelector('h2');
        expect(h2).not.toBeNull();
        expect(h2?.textContent).toContain(title);
      },
    );

    it('renders the complete ordered inventory of h3 and h4 subheadings', () => {
      const { container } = render(<Page />);

      // 元 HTML の小見出しインベントリ。セクションごとに出現順で 1 対 1 固定する。
      EXPECTED_SUBHEADINGS.forEach(({ sectionId, h3, h4 }) => {
        const section = container.querySelector(`section#${sectionId}`);
        expect(section).not.toBeNull();
        expect(
          Array.from(section?.querySelectorAll('h3') ?? []).map((el) => el.textContent?.trim()),
        ).toEqual([...h3]);
        expect(
          Array.from(section?.querySelectorAll('h4') ?? []).map((el) => el.textContent?.trim()),
        ).toEqual([...h4]);
      });

      // ページ全体の総数も固定し、インベントリ外のセクションに小見出しが増えていないことを担保する
      const totalH3 = EXPECTED_SUBHEADINGS.reduce((sum, s) => sum + s.h3.length, 0);
      const totalH4 = EXPECTED_SUBHEADINGS.reduce((sum, s) => sum + s.h4.length, 0);
      expect(container.querySelectorAll('h3').length).toBe(totalH3);
      expect(container.querySelectorAll('h4').length).toBe(totalH4);
    });

    it('renders the complete ordered inventory of callouts with their variants', () => {
      const { container } = render(<Page />);

      const callouts = Array.from(container.querySelectorAll('.callout'));
      expect(callouts.length).toBe(EXPECTED_CALLOUTS.length);

      callouts.forEach((callout, index) => {
        const expected = EXPECTED_CALLOUTS[index];
        expect(callout.closest('section')?.id).toBe(expected.sectionId);
        expect(callout.classList.contains(expected.variant)).toBe(true);
        expect(callout.querySelector('.callout-title')?.textContent?.trim()).toBe(
          expected.title,
        );
      });
    });

    it('renders the complete ordered inventory of cards', () => {
      const { container } = render(<Page />);

      const cards = Array.from(
        container.querySelectorAll('.diagram-card, .stat-card, .card'),
      );
      expect(cards.length).toBe(EXPECTED_CARDS.length);

      cards.forEach((card, index) => {
        const expected = EXPECTED_CARDS[index];
        expect(card.closest('section')?.id).toBe(expected.sectionId);
        expect(card.classList.contains(expected.variant)).toBe(true);
      });
    });
  });

  describe('Mermaid Diagrams', () => {
    it('renders all 4 diagrams with captions', async () => {
      mermaidRenderMock.mockClear();
      const { container } = render(<Page />);

      // Mermaid の描画は非同期のため、SVG が注入されるまで待つ
      await waitFor(() => {
        expect(container.querySelectorAll('[data-testid="mock-mermaid"]').length).toBe(4);
      });
      expect(mermaidRenderMock).toHaveBeenCalledTimes(4);

      const diagrams = container.querySelectorAll('.diagram-card');
      expect(diagrams.length).toBe(4);

      const expectedCaptions = [
        '図1: 読みやすいコードがもたらす複利効果',
        '図2: コードスメル発見から改善までの全体ループ',
        '図3: TDDのRed-Green-Refactorサイクル',
        '図4: Tidy Firstの意思決定フロー',
      ];

      expectedCaptions.forEach((caption, index) => {
        const captionEl = diagrams[index]?.querySelector('.diagram-caption');
        expect(captionEl).not.toBeNull();
        expect(captionEl?.textContent).toContain(caption);
      });
    });
  });

  describe('Tables', () => {
    it('renders all required tables with headers and content', () => {
      const { container } = render(<Page />);

      // 表は出現順の固定インベントリと 1 対 1 で照合する（欠落・余剰・並び替えの検出）
      const tables = Array.from(container.querySelectorAll('.table-wrap table'));
      expect(tables.length).toBe(EXPECTED_TABLES.length);

      tables.forEach((table, index) => {
        const expected = EXPECTED_TABLES[index];
        expect(table.closest('section')?.id).toBe(expected.section);
        expect(table.querySelector('caption')?.textContent?.trim()).toBe(expected.caption);
        expect(
          Array.from(table.querySelectorAll('thead th')).map((th) => th.textContent?.trim()),
        ).toEqual([...expected.headers]);
        expect(table.querySelectorAll('tbody tr').length).toBe(expected.rows);
      });

      // sec-1: 書誌情報テーブル
      const sec1Table = container.querySelector('#sec-1 table');
      expect(sec1Table?.textContent).toContain('Clean Code Cookbook');
      expect(sec1Table?.textContent).toContain('Maximiliano Contieri');
      expect(sec1Table?.textContent).toContain("O'Reilly Media, Inc.");
      expect(sec1Table?.textContent).toContain('2023年9月');
      expect(sec1Table?.textContent).toContain('全25章');

      // sec-3: 5カテゴリー分類テーブル
      const sec3CatTable = container.querySelectorAll('#sec-3 table')[0];
      expect(sec3CatTable?.textContent).toContain('A. 設計の基礎');
      expect(sec3CatTable?.textContent).toContain('B. オブジェクト指向設計');
      expect(sec3CatTable?.textContent).toContain('C. 可読性とコミュニケーション');
      expect(sec3CatTable?.textContent).toContain('D. 複雑さの制御');
      expect(sec3CatTable?.textContent).toContain('E. 安全性と品質保証');

      // sec-3: 全25章一覧テーブル
      const sec3ChaptersTable = container.querySelectorAll('#sec-3 table')[1];
      expect(sec3ChaptersTable?.querySelectorAll('tbody tr').length).toBe(25);
      expect(sec3ChaptersTable?.textContent).toContain('Anemic Models');
      expect(sec3ChaptersTable?.textContent).toContain('Primitive Obsession');
      expect(sec3ChaptersTable?.textContent).toContain('YAGNI');

      // sec-4: スメル対処パターンテーブル
      const sec4SmellTable = container.querySelector('#sec-4 table');
      expect(sec4SmellTable?.textContent).toContain('深くネストしたif文');
      expect(sec4SmellTable?.textContent).toContain('ガード節（早期return）');
      expect(sec4SmellTable?.textContent).toContain('Null Object パターン');

      // sec-5: Sandi Metz ルールテーブル
      const sec5Table = container.querySelector('#sec-5 table');
      expect(sec5Table?.textContent).toContain('1クラスは100行を超えない');
      expect(sec5Table?.textContent).toContain('1メソッドは5行を超えない');
      expect(sec5Table?.textContent).toContain('メソッドの引数は4個まで');

      // sec-6: 著名開発者テーブル
      const sec6Table = container.querySelector('#sec-6 table');
      expect(sec6Table?.textContent).toContain('Martin Fowler');
      expect(sec6Table?.textContent).toContain('Kent Beck');
      expect(sec6Table?.textContent).toContain('Robert C. Martin');
      expect(sec6Table?.textContent).toContain('Sandi Metz');
      expect(sec6Table?.textContent).toContain('Maximiliano Contieri');

      // sec-8: チェックリストテーブル
      const sec8Table = container.querySelector('#sec-8 table');
      expect(sec8Table?.textContent).toContain('命名');
      expect(sec8Table?.textContent).toContain('関数の大きさ');
      expect(sec8Table?.textContent).toContain('コミット単位');
      expect(sec8Table?.querySelectorAll('tbody tr').length).toBe(13);
    });
  });

  describe('Sandi Metz Stat Cards', () => {
    it('renders the 4 key metrics cards in section 5', () => {
      const { container } = render(<Page />);

      const statCards = container.querySelectorAll('#sec-5 .stat-card');
      expect(statCards.length).toBe(4);

      expect(statCards[0]?.querySelector('.num')?.textContent).toBe('100行');
      expect(statCards[0]?.querySelector('.lbl')?.textContent).toBe('1クラスの上限');

      expect(statCards[1]?.querySelector('.num')?.textContent).toBe('5行');
      expect(statCards[1]?.querySelector('.lbl')?.textContent).toBe('1メソッドの上限');

      expect(statCards[2]?.querySelector('.num')?.textContent).toBe('4個');
      expect(statCards[2]?.querySelector('.lbl')?.textContent).toBe('引数の上限');

      expect(statCards[3]?.querySelector('.num')?.textContent).toBe('1個');
      expect(statCards[3]?.querySelector('.lbl')?.textContent).toBe('コントローラが生成するオブジェクト数');
    });
  });

  describe('Code Blocks', () => {
    it('renders all 4 code blocks with language labels and formatted code', () => {
      const { container } = render(<Page />);

      const codeBlocks = container.querySelectorAll('.code-block');
      expect(codeBlocks.length).toBe(4);

      // マジックナンバーの整頓 (Python)
      expect(codeBlocks[0]?.querySelector('.code-label')?.textContent).toContain('Python');
      expect(codeBlocks[0]?.textContent).toContain('LEGAL_ADULT_AGE = 18');

      // 命名の改善 (JavaScript)
      expect(codeBlocks[1]?.querySelector('.code-label')?.textContent).toContain('JavaScript');
      expect(codeBlocks[1]?.textContent).toContain('calculatePriceWithTax');

      // メソッドの抽出 (Python)
      expect(codeBlocks[2]?.querySelector('.code-label')?.textContent).toContain('Python');
      expect(codeBlocks[2]?.textContent).toContain('def calculate_subtotal(items):');

      // ガード節 (Java)
      expect(codeBlocks[3]?.querySelector('.code-label')?.textContent).toContain('Java');
      expect(codeBlocks[3]?.textContent).toContain('public void ship(Order order)');
    });
  });

  describe('AI Era Topics (Section 7)', () => {
    it('renders the 3 AI-era code smells subsections with sources', () => {
      const { container } = render(<Page />);

      const sec7 = container.querySelector('#sec-7');
      expect(sec7).not.toBeNull();

      expect(sec7?.textContent).toContain('7.1 Workslop（ワークスロップ）コード');
      expect(sec7?.textContent).toContain('7.2 Model Collapse（モデル崩壊）パターン');
      expect(sec7?.textContent).toContain('7.3 Nitpicking（枝葉末節への固執）');

      const sourceCallouts = sec7?.querySelectorAll('.callout.source');
      expect(sourceCallouts?.length).toBe(3);
    });
  });

  describe('References (Section 10)', () => {
    it('renders all 14 reference entries with link anchors and correct targets', () => {
      const { container } = render(<Page />);

      const refItems = container.querySelectorAll('#sec-10 .ref-list li');
      expect(refItems.length).toBe(14);

      const expectedRefs = [
        { num: '01', url: 'https://www.oreilly.com/library/view/clean-code-cookbook/9781098144715/' },
        { num: '02', url: 'https://www.oreilly.com/library/view/clean-code-cookbook/9781098144715/ch01.html' },
        { num: '03', url: 'https://maximilianocontieri.com/' },
        { num: '04', url: 'https://maximilianocontieri.com/series/code-smells' },
        { num: '05', url: 'https://maxicontieri.substack.com/p/code-smell-316-nitpicking' },
        { num: '06', url: 'https://dev.to/mcsee/code-smell-314-model-collapse-5ckc' },
        { num: '07', url: 'https://hackernoon.com/code-smell-313-workslop-in-ai-assisted-programming' },
        { num: '08', url: 'https://www.laputan.org/pub/patterns/fowler/smells.pdf' },
        { num: '09', url: 'https://linearb.io/blog/what-is-a-code-smell' },
        { num: '10', url: 'https://tidyfirst.substack.com/p/management-section-intro-tidy-together' },
        { num: '11', url: 'https://www.sandordargo.com/blog/2024/03/16/tidy-first-by-kent-beck' },
        { num: '12', url: 'https://thoughtbot.com/blog/sandi-metz-rules-for-developers' },
        { num: '13', url: 'https://www.informit.com/articles/article.aspx?p=1235624&seqNum=6' },
        { num: '14', url: 'https://en.wikipedia.org/wiki/Design_smell' },
      ];

      expectedRefs.forEach((expected, index) => {
        const item = refItems[index];
        expect(item?.querySelector('.ref-num')?.textContent).toBe(expected.num);
        const link = item?.querySelector('a');
        expect(link?.getAttribute('href')).toBe(expected.url);
        expect(link?.getAttribute('target')).toBe('_blank');
        expect(link?.getAttribute('rel')).toContain('noopener');
        expect(link?.getAttribute('rel')).toContain('noreferrer');
      });
    });
  });
});
