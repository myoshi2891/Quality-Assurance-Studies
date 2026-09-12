import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react';
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

  it('renders a collapsed mobile TOC toggle controlling the TOC list', () => {
    const { container } = render(<NavBar />);
    const toggle = container.querySelector<HTMLButtonElement>('nav.toc .toc-toggle');
    expect(toggle).not.toBeNull();
    expect(toggle?.getAttribute('type')).toBe('button');
    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    expect(toggle?.textContent).toBe('目次を開く');

    // aria-controls が実在する目次リストを指していること
    const listId = toggle?.getAttribute('aria-controls');
    expect(listId).toBeTruthy();
    const list = container.querySelector(`ol#${listId}`);
    expect(list).not.toBeNull();
    expect(list?.classList.contains('open')).toBe(false);
  });

  it('opens the TOC on toggle click and moves focus into the list', () => {
    const { container } = render(<NavBar />);
    const toggle = container.querySelector<HTMLButtonElement>('nav.toc .toc-toggle');
    const list = container.querySelector<HTMLOListElement>('nav.toc ol');

    fireEvent.click(toggle as HTMLButtonElement);

    expect(toggle?.getAttribute('aria-expanded')).toBe('true');
    expect(toggle?.textContent).toBe('目次を閉じる');
    expect(list?.classList.contains('open')).toBe(true);
    expect(document.activeElement).toBe(list?.querySelector('a') ?? null);
  });

  it('closes the TOC on Escape and returns focus to the toggle', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector<HTMLElement>('nav.toc');
    const toggle = container.querySelector<HTMLButtonElement>('nav.toc .toc-toggle');
    const list = container.querySelector<HTMLOListElement>('nav.toc ol');

    fireEvent.click(toggle as HTMLButtonElement);
    fireEvent.keyDown(nav as HTMLElement, { key: 'Escape' });

    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    expect(list?.classList.contains('open')).toBe(false);
    expect(document.activeElement).toBe(toggle ?? null);
  });

  it('closes the TOC when a TOC link is activated', () => {
    const { container } = render(<NavBar />);
    const toggle = container.querySelector<HTMLButtonElement>('nav.toc .toc-toggle');

    fireEvent.click(toggle as HTMLButtonElement);
    expect(toggle?.getAttribute('aria-expanded')).toBe('true');

    const firstLink = container.querySelector<HTMLAnchorElement>('nav.toc ol li a');
    fireEvent.click(firstLink as HTMLAnchorElement);
    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
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

  it('renders Section 02: Why Exploratory Testing (#why) with h2, h3, quote, and Mermaid figure 02-A', async () => {
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
    await waitFor(() => {
      expect(figure?.querySelector('svg[data-testid="mock-mermaid"]')).not.toBeNull();
    });
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

  it('renders Section 04: Roadmap (#roadmap) with sec-tag, h2, Mermaid figure 04-A, and stepgrid', async () => {
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
    await waitFor(() => {
      expect(figure?.querySelector('svg[data-testid="mock-mermaid"]')).not.toBeNull();
    });

    const stepgrid = sec?.querySelector('.stepgrid');
    expect(stepgrid).not.toBeNull();
    const steps = stepgrid?.querySelectorAll('div');
    expect(steps?.length).toBe(8);
    expect(steps?.[0]?.textContent).toContain('STEP 1');
    expect(steps?.[0]?.textContent).toContain('チャーター作成');
    expect(steps?.[7]?.textContent).toContain('STEP 8');
    expect(steps?.[7]?.textContent).toContain('デブリーフィング');
  });

  it('renders Section 05: Step 1 Charter (#step1) with template, table, list, figure, and note', async () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#step1');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num.step')?.textContent).toBe('1');
    expect(secTag?.querySelector('.label')?.textContent).toBe('CHARTER YOUR EXPLORATIONS');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('チャーター（探索の指針）を書く');

    const tmpl = sec?.querySelector('pre.tmpl');
    expect(tmpl).not.toBeNull();
    expect(tmpl?.textContent).toContain('Explore');
    expect(tmpl?.textContent).toContain('With');
    expect(tmpl?.textContent).toContain('To discover');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0]?.textContent).toContain('Explore（対象）');
    expect(rows?.[1]?.textContent).toContain('With（使うもの）');
    expect(rows?.[2]?.textContent).toContain('To discover（目的）');

    const figure = sec?.querySelector('.figure');
    expect(figure?.querySelector('.cap')?.textContent).toContain('FIGURE S1-A ｜ チャーター作成の流れ');
    await waitFor(() => {
      expect(figure?.querySelector('svg[data-testid="mock-mermaid"]')).not.toBeNull();
    });

    const note = sec?.querySelector('.note');
    expect(note?.textContent).toContain('補足｜');
    expect(note?.textContent).toContain('悪夢の見出しゲーム');
  });

  it('renders Section 06: Step 2 Session (#step2) with SBTM figure and durations table', async () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#step2');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num.step')?.textContent).toBe('2');
    expect(secTag?.querySelector('.label')?.textContent).toBe('SESSION-BASED TEST MANAGEMENT');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('セッションを構造化する');

    expect(sec?.textContent).toContain('James Bach と Jonathan Bach');
    expect(sec?.textContent).toContain('Session-Based Test Management（SBTM）');

    const figure = sec?.querySelector('.figure');
    expect(figure?.querySelector('.cap')?.textContent).toContain('FIGURE S2-A ｜ SBTMの基本サイクル');
    await waitFor(() => {
      expect(figure?.querySelector('svg[data-testid="mock-mermaid"]')).not.toBeNull();
    });

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0]?.textContent).toContain('ショート');
    expect(rows?.[1]?.textContent).toContain('ノーマル');
    expect(rows?.[2]?.textContent).toContain('ロング');
  });

  it('renders Section 07: Step 3 Observe Details (#step3) with list and Mermaid figure', async () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#step3');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num.step')?.textContent).toBe('3');
    expect(secTag?.querySelector('.label')?.textContent).toBe('OBSERVE THE DETAILS');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('観察力を鍛える ― 見えないものを見えるようにする');

    expect(sec?.textContent).toContain('ムーンウォークするクマ');
    expect(sec?.textContent).toContain('非注意性盲目');

    const list = sec?.querySelector('ul');
    expect(list?.querySelectorAll('li').length).toBe(4);

    const figure = sec?.querySelector('.figure');
    expect(figure?.querySelector('.cap')?.textContent).toContain('FIGURE S3-A ｜ 観察範囲を広げるチェックポイント');
    await waitFor(() => {
      expect(figure?.querySelector('svg[data-testid="mock-mermaid"]')).not.toBeNull();
    });
  });

  it('renders Section 08: Step 4 Find Variations (#step4) with variables table and inquiry list', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#step4');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num.step')?.textContent).toBe('4');
    expect(secTag?.querySelector('.label')?.textContent).toBe('FIND INTERESTING VARIATIONS');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('「面白い変化（バリエーション）」を見つける');

    expect(sec?.textContent).toContain('LogiGear');
    expect(sec?.textContent).toContain('Subtle Variables, Big Disasters');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(4);
    expect(rows?.[0]?.textContent).toContain('入力変数');
    expect(rows?.[1]?.textContent).toContain('出力変数');
    expect(rows?.[2]?.textContent).toContain('隠れた変数');
    expect(rows?.[3]?.textContent).toContain('微妙な変数');

    const list = sec?.querySelector('ul');
    expect(list?.querySelectorAll('li').length).toBe(3);
  });

  it('renders Section 09: Step 5 Evaluate Results (#step5) with oracles table', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#step5');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num.step')?.textContent).toBe('5');
    expect(secTag?.querySelector('.label')?.textContent).toBe('EVALUATE RESULTS');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('結果を評価する（オラクル問題）');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0]?.textContent).toContain('Never / Always ヒューリスティック');
    expect(rows?.[1]?.textContent).toContain('代替リソース');
    expect(rows?.[2]?.textContent).toContain('近似');
  });

  it('renders Section 10: Step 6 Adding Dimensions (#step6) with dimensions table, 3 H3s and 3 Mermaid figures', async () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#step6');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num.step')?.textContent).toBe('6');
    expect(secTag?.querySelector('.label')?.textContent).toBe('ADDING DIMENSIONS');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('探索に「次元」を加える');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(4);
    expect(rows?.[0]?.textContent).toContain('第6章');
    expect(rows?.[0]?.textContent).toContain('操作の順序・組み合わせ');
    expect(rows?.[1]?.textContent).toContain('第7章');
    expect(rows?.[1]?.textContent).toContain('エンティティと依存関係');
    expect(rows?.[2]?.textContent).toContain('第8章');
    expect(rows?.[2]?.textContent).toContain('状態と遷移');
    expect(rows?.[3]?.textContent).toContain('第9章');
    expect(rows?.[3]?.textContent).toContain('システムを取り巻く環境');

    const figures = sec?.querySelectorAll('.figure');
    expect(figures?.length).toBe(3);
    expect(figures?.[0]?.querySelector('.cap')?.textContent).toContain('FIGURE S6-A ｜ CRUD ライフサイクル');
    expect(figures?.[1]?.querySelector('.cap')?.textContent).toContain('FIGURE S6-B ｜ 認証機能の状態遷移モデル');
    expect(figures?.[2]?.querySelector('.cap')?.textContent).toContain('FIGURE S6-C ｜ システムのエコシステムと信頼境界');

    // Mermaid は非同期描画のため、3 図すべての SVG 注入が完了するまで待って検証する
    await waitFor(() => {
      figures?.forEach((figure) => {
        expect(figure.querySelector('svg[data-testid="mock-mermaid"]')).not.toBeNull();
      });
    });
  });

  it('renders Section 11: Step 7 Context (#step7) with context table', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#step7');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num.step')?.textContent).toBe('7');
    expect(secTag?.querySelector('.label')?.textContent).toBe('PUTTING IT IN CONTEXT');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('コンテキストに応じて探索を適用する');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(4);
    expect(rows?.[0]?.textContent).toContain('第10章');
    expect(rows?.[0]?.textContent).toContain('UIが存在しない対象');
    expect(rows?.[1]?.textContent).toContain('第11章');
    expect(rows?.[1]?.textContent).toContain('既存の（ドキュメントが乏しい）システム');
    expect(rows?.[2]?.textContent).toContain('第12章');
    expect(rows?.[2]?.textContent).toContain('要件定義の会議そのもの');
    expect(rows?.[3]?.textContent).toContain('第13章');
    expect(rows?.[3]?.textContent).toContain('プロジェクト全体');
  });

  it('renders Section 12: Step 8 Debrief & Iterate (#step8) with confirmation list and nuggets concept', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#step8');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num.step')?.textContent).toBe('8');
    expect(secTag?.querySelector('.label')?.textContent).toBe('DEBRIEF & ITERATE');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('デブリーフィングと継続的改善');

    const h3 = sec?.querySelector('h3');
    expect(h3?.textContent).toBe('デブリーフィングで確認すべきこと');

    const list = sec?.querySelector('ul');
    expect(list?.querySelectorAll('li').length).toBe(5);
    expect(sec?.textContent).toContain('Capturing Useful Nuggets of Wisdom');
  });
  it('renders Section 13: Cheat Sheet (#cheatsheet) with sec-tag, h2, table, and note', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#cheatsheet');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num')?.textContent).toBe('13');
    expect(secTag?.querySelector('.label')?.textContent).toBe('CHEAT SHEET');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('テストヒューリスティック・チートシート');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(8);
    expect(rows?.[0]?.textContent).toContain('Variable Analysis');
    expect(rows?.[1]?.textContent).toContain('Touch Points');
    expect(rows?.[2]?.textContent).toContain('Boundaries');
    expect(rows?.[3]?.textContent).toContain('CRUD');
    expect(rows?.[4]?.textContent).toContain('Configurations');
    expect(rows?.[5]?.textContent).toContain('Interruptions');
    expect(rows?.[6]?.textContent).toContain('Sequences');
    expect(rows?.[7]?.textContent).toContain('State Analysis');

    const note = sec?.querySelector('.note');
    expect(note?.textContent).toContain('Ministry of Testing');
  });

  it('renders Section 14: 2026 & AI (#ai2026) with sec-tag, h2, trend list, and summary', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#ai2026');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num')?.textContent).toBe('14');
    expect(secTag?.querySelector('.label')?.textContent).toBe('2026 & AI');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('2026年現在：AI時代における探索的テストの位置づけ');

    const list = sec?.querySelector('ul');
    const items = list?.querySelectorAll('li');
    expect(items?.length).toBe(3);
    expect(items?.[0]?.textContent).toContain('回帰テストやスモークテスト');
    expect(items?.[1]?.textContent).toContain('ユーザビリティ評価');
    expect(items?.[2]?.textContent).toContain('チャーターに基づく構造化');

    expect(sec?.textContent).toContain('人間が担うべき探索的テストの核となる思考法');
  });

  it('renders Section 15: Checklist (#checklist) with sec-tag, h2, and 8 checkboxes', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#checklist');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num')?.textContent).toBe('15');
    expect(secTag?.querySelector('.label')?.textContent).toBe('CHECKLIST');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('初学者向けチェックリスト');

    const checklist = sec?.querySelector('ul.checklist');
    expect(checklist).not.toBeNull();
    const items = checklist?.querySelectorAll('li');
    expect(items?.length).toBe(8);

    const checkboxes = checklist?.querySelectorAll('input[type="checkbox"]');
    expect(checkboxes?.length).toBe(8);

    for (let i = 1; i <= 8; i++) {
      const cb = checklist?.querySelector(`input#cl${i}`);
      const label = checklist?.querySelector(`label[for="cl${i}"]`);
      expect(cb).not.toBeNull();
      expect(label).not.toBeNull();
    }
  });

  it('renders Section 16: References (#references) with sec-tag, h2, 22 reference items, and footer', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('section#references');
    expect(sec).not.toBeNull();

    const secTag = sec?.querySelector('.sec-tag');
    expect(secTag?.querySelector('.num')?.textContent).toBe('16');
    expect(secTag?.querySelector('.label')?.textContent).toBe('REFERENCES');

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('参考文献・出典URL一覧');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(22);

    const links = table?.querySelectorAll('a[target="_blank"][rel="noopener noreferrer"]');
    expect(links?.length).toBe(22);

    expect(rows?.[0]?.textContent).toContain("O'Reilly Online Learning");
    expect(rows?.[21]?.textContent).toContain('QASkills.sh');

    const footer = sec?.querySelector('footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('注記：本ガイドは上記ソースおよび公開されている書籍の目次情報をもとに');
  });
});


