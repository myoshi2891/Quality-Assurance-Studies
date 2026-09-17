import { afterAll, afterEach, beforeAll, beforeEach, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
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
} from '../../app/perfect-software-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/perfect-software-guide/NavBar';
import { CHECKLIST_ITEMS } from '../../app/perfect-software-guide/Checklist';

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

describe('Perfect Software Guide - Full inventory verification (diagrams, chapters, checklist, references)', () => {
  it('actually renders all 8 diagrams, one per .diagram-wrap, matching DIAGRAM_1 through DIAGRAM_8 and their captions', async () => {
    const { container } = render(<Page />);
    const diagramContainers = container.querySelectorAll('.diagram-wrap');

    // 実描画の完了を待ってから件数を突き合わせる。
    // コンテナの存在確認だけでは、Mermaid.tsx が空の chart で早期 return する経路
    // （mermaid.render を呼ばず SVG も挿入しない）を見逃す
    expect(diagramContainers.length).toBe(8);
    await waitFor(() => {
      const rendered = container.querySelectorAll('.diagram-wrap svg[data-testid="mock-mermaid"]');
      expect(rendered.length).toBe(diagramContainers.length);
    });

    expect(renderedCharts.length).toBe(8);
    expect(renderedCharts[0]).toBe(DIAGRAM_1);
    expect(renderedCharts[1]).toBe(DIAGRAM_2);
    expect(renderedCharts[2]).toBe(DIAGRAM_3);
    expect(renderedCharts[3]).toBe(DIAGRAM_4);
    expect(renderedCharts[4]).toBe(DIAGRAM_5);
    expect(renderedCharts[5]).toBe(DIAGRAM_6);
    expect(renderedCharts[6]).toBe(DIAGRAM_7);
    expect(renderedCharts[7]).toBe(DIAGRAM_8);

    const captions = container.querySelectorAll('.diagram-caption');
    expect(captions.length).toBe(8);
    expect(captions[0].textContent).toContain('図1　書籍全体の3部構成マップ');
    expect(captions[1].textContent).toContain('図2　全数テストが不可能な理由とサンプリングへの流れ');
    expect(captions[2].textContent).toContain('図3　テストとデバッグ、2つの活動の分岐');
    expect(captions[3].textContent).toContain('図4　悪い知らせへの6つの防衛反応パターン');
    expect(captions[4].textContent).toContain('図5　5つの誤解とそれに対応する事実');
    expect(captions[5].textContent).toContain('図6　取り込みから対応に至る情報処理サイクル');
    expect(captions[6].textContent).toContain('図7　怪しいテストツール営業を見抜くチェックフロー');
    expect(captions[7].textContent).toContain('図8　初学者向け学習ロードマップ');
  });

  it('renders all 19 chapter rows individually with correct number and title', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#chapters');
    const rows = section?.querySelectorAll('table tbody tr');
    expect(rows?.length).toBe(19);

    const expectedChapters: Array<[string, string]> = [
      ['1', 'Why Do We Bother Testing?'],
      ['2', 'What Testing Cannot Do'],
      ['3', 'Why Not Just Test Everything?'],
      ['4', "What's the Difference Between Testing and Debugging?"],
      ['5', 'Meta-Testing'],
      ['6', 'Information Immunity'],
      ['7', 'How to Deal With Defensive Reactions'],
      ['8', 'What Makes a Good Test?'],
      ['9', 'Major Fallacies About Testing'],
      ['10', 'Testing Is More Than Banging Keys'],
      ['11', 'Information Intake'],
      ['12', 'Making Meaning'],
      ['13', 'Determining Significance'],
      ['14', 'Making a Response'],
      ['15', 'Preventing Testing from Growing More Difficult'],
      ['16', 'Testing Without Machinery'],
      ['17', 'Testing Scams'],
      ['18', 'Oblivious Scams'],
      ['—', 'Epilogue'],
    ];

    expectedChapters.forEach(([num, title], index) => {
      const cells = rows?.[index].querySelectorAll('td');
      expect(cells?.[0].textContent).toBe(num);
      expect(cells?.[1].textContent).toBe(title);
    });
  });

  it('renders all 7 checklist items individually, matching CHECKLIST_ITEMS', () => {
    const { container } = render(<Page />);
    const items = container.querySelectorAll('.checklist li');
    expect(items.length).toBe(7);
    expect(CHECKLIST_ITEMS.length).toBe(7);

    CHECKLIST_ITEMS.forEach((text, index) => {
      expect(items[index].textContent).toContain(text);
    });
  });

  it('renders all 11 reference cards individually with correct title and URL', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#references');
    const cards = section?.querySelectorAll('.ref-card');
    expect(cards?.length).toBe(11);

    const expectedRefs: Array<[string, string]> = [
      ['Gerald M. Weinberg 公式サイト', 'https://geraldmweinberg.com/Site/Perfect_Software.html'],
      ['Markus Gärtner', 'https://www.shino.de/2022/11/28/remembering-jerry-weinberg-perfect-software-and-other-illusions-about-testing/'],
      ['Perfect Software 引用集', 'https://www.goodreads.com/work/quotes/4107583-perfect-software-and-other-illusions-about-testing'],
      ['Perfect Software 各章タイトル・要点抜粋', 'https://leanpub.com/perfectsoftware'],
      ['Dwayne Phillips によるレビュー', 'https://dwaynephillips.net/reviews/PerfectSoftware.html'],
      ['Sunish Chabba による書籍要約記事', 'https://sunishchabba.medium.com/summary-of-the-book-perfect-software-and-other-illusions-about-testing-7ebb2eaa34dd'],
      ['Victoria Markosyan による学びの整理記事', 'https://vicajoy.medium.com/perfect-software-and-other-illusions-about-testing-lessons-learned-from-the-book-by-gerald-m-aa4cbb893266'],
      ['Bebugging（バグの埋め込み手法）解説', 'https://en.wikipedia.org/wiki/Bebugging'],
      ['James Bach へのインタビュー', 'https://hexawise.com/posts/testing-smarter-with-james-bach'],
      ['Software Engineering Radio, Episode 280', 'https://se-radio.net/2017/01/se-radio-episode-280-gerald-weinberg-on-bugs-errors-and-software-quality/'],
      ['Edsger W. Dijkstra', 'https://www.cs.utexas.edu/~EWD/transcriptions/EWD02xx/EWD268.html'],
    ];

    expectedRefs.forEach(([titleSubstring, url], index) => {
      const card = cards?.[index];
      expect(card?.querySelector('.ref-num')?.textContent).toBe(String(index + 1));
      expect(card?.querySelector('.ref-title')?.textContent).toContain(titleSubstring);
      expect(card?.querySelector('a.ref-url')?.getAttribute('href')).toBe(url);
    });
  });
});

describe('Perfect Software Guide - Category 1 (Hero, Intro, Book Info, Structure, Core Message, Chapters)', () => {
  it('renders within the scoped root container .perfect-software-layout', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.perfect-software-layout');
    expect(root).not.toBeNull();
  });

  it('renders hero with kicker, h1, sub, and lede', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('.hero');
    expect(hero).not.toBeNull();

    const kicker = hero?.querySelector('.hero-kicker');
    expect(kicker?.textContent).toContain('Classic Software Testing Books');

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('『Perfect Software: And Other Illusions about Testing』');
    expect(h1.textContent).toContain('初学者ガイド');

    const sub = hero?.querySelector('.hero-sub');
    expect(sub?.textContent).toContain('ジェラルド・M・ワインバーグに学ぶ「テストの限界」と実践ベストプラクティス');

    const lede = hero?.querySelector('.lede');
    expect(lede?.textContent).toContain('ソフトウェアテストの古典を、テストを学び始めたばかりの方向けにステップ・バイ・ステップで解説します');
  });

  it('renders sidebar navigation with brand and all 19 TOC items', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector('nav.sidebar');
    expect(nav).not.toBeNull();

    const brand = nav?.querySelector('.sidebar-brand');
    expect(brand?.textContent).toContain('Perfect Software');
    expect(brand?.textContent).toContain('初学者ガイド');

    expect(TOC_ITEMS.length).toBe(19);
    expect(TOC_ITEMS[0]).toEqual({ id: 'intro', num: '00', label: 'この記事について', group: 'はじめに' });
    expect(TOC_ITEMS[1]).toEqual({ id: 'book-info', num: '01', label: '書籍の基本情報', group: 'はじめに' });
    expect(TOC_ITEMS[2]).toEqual({ id: 'structure', num: '02', label: '全体像の構成マップ', group: '本の構造をつかむ' });
    expect(TOC_ITEMS[3]).toEqual({ id: 'core-message', num: '03', label: '核心メッセージ', group: '本の構造をつかむ' });
    expect(TOC_ITEMS[4]).toEqual({ id: 'chapters', num: '04', label: '章立て一覧', group: '本の構造をつかむ' });
    expect(TOC_ITEMS[5]).toEqual({ id: 'step1', num: '05', label: 'Step1 情報収集', group: '実践ステップ 1-11' });
    expect(TOC_ITEMS[6]).toEqual({ id: 'step2', num: '06', label: 'Step2 全数テスト不可能', group: '実践ステップ 1-11' });
    expect(TOC_ITEMS[7]).toEqual({ id: 'step3', num: '07', label: 'Step3 テストとデバッグ', group: '実践ステップ 1-11' });
    expect(TOC_ITEMS[8]).toEqual({ id: 'step4', num: '08', label: 'Step4 メタテスト', group: '実践ステップ 1-11' });
    expect(TOC_ITEMS[9]).toEqual({ id: 'step5', num: '09', label: 'Step5 情報免疫', group: '実践ステップ 1-11' });
    expect(TOC_ITEMS[10]).toEqual({ id: 'step6', num: '10', label: 'Step6 良いテストの基準', group: '実践ステップ 1-11' });
    expect(TOC_ITEMS[11]).toEqual({ id: 'step7', num: '11', label: 'Step7 5大誤解', group: '実践ステップ 1-11' });
    expect(TOC_ITEMS[12]).toEqual({ id: 'step8', num: '12', label: 'Step8 情報処理サイクル', group: '実践ステップ 1-11' });
    expect(TOC_ITEMS[13]).toEqual({ id: 'step9', num: '13', label: 'Step9 設計で楽にする', group: '実践ステップ 1-11' });
    expect(TOC_ITEMS[14]).toEqual({ id: 'step10', num: '14', label: 'Step10 機械に頼らない', group: '実践ステップ 1-11' });
    expect(TOC_ITEMS[15]).toEqual({ id: 'step11', num: '15', label: 'Step11 詐欺を見抜く', group: '実践ステップ 1-11' });
    expect(TOC_ITEMS[16]).toEqual({ id: 'roadmap', num: '16', label: '実践ロードマップ', group: 'まとめ' });
    expect(TOC_ITEMS[17]).toEqual({ id: 'summary', num: '17', label: 'まとめ', group: 'まとめ' });
    expect(TOC_ITEMS[18]).toEqual({ id: 'references', num: '18', label: '参考文献・出典', group: 'まとめ' });

    const links = nav?.querySelectorAll('.nav-a');
    expect(links?.length).toBe(19);
  });

  it('renders Section intro with lede-note and target audience list', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#intro');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('この記事について / 対象読者');

    const note = section?.querySelector('.lede-note');
    expect(note?.textContent).toContain('前提知識は不要です。専門用語が出てきた際は、その都度やさしく解説します。');

    const listItems = section?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(2);
    expect(listItems?.[0].textContent).toContain('ソフトウェアテストを学び始めたばかりのエンジニア');
    expect(listItems?.[1].textContent).toContain('「テストをどれだけやれば十分か」');
  });

  it('renders Section book-info with book card and kv-table', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#book-info');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('書籍の基本情報');

    const card = section?.querySelector('.book-card');
    expect(card).not.toBeNull();
    expect(card?.querySelector('h3')?.textContent).toBe('Perfect Software: And Other Illusions about Testing');
    expect(card?.textContent).toContain('Gerald M. Weinberg 著（Dorset House Publishing, 2008）');

    const tags = card?.querySelectorAll('.tag');
    expect(tags?.length).toBe(3);
    expect(tags?.[0].textContent).toBe('ソフトウェアテスト');
    expect(tags?.[1].textContent).toBe('ソフトウェア品質');
    expect(tags?.[2].textContent).toBe('組織心理');

    const tableWrap = section?.querySelector('.table-wrap');
    expect(tableWrap?.querySelector('.table-title')?.textContent).toBe('書籍データ');

    const rows = section?.querySelectorAll('.kv-table tbody tr');
    expect(rows?.length).toBe(7);
    expect(rows?.[0].querySelector('th')?.textContent).toBe('原題');
    expect(rows?.[0].querySelector('td')?.textContent).toBe('Perfect Software: And Other Illusions about Testing');
    expect(rows?.[4].querySelector('th')?.textContent).toBe('ISBN');
    expect(rows?.[4].querySelector('td')?.textContent).toBe('978-0-932633-69-9');
  });

  it('renders Section structure with Mermaid d1 diagram', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#structure');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('全体像を1枚で理解する　本書の構成マップ');

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図1　書籍全体の3部構成マップ');
  });

  it('renders Section core-message with blockquote, cite, and 3 takeaways', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#core-message');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('核心メッセージ　「完璧なソフトウェア」という幻想');

    const bq = section?.querySelector('blockquote');
    expect(bq?.textContent).toContain('Program testing can be used to show the presence of bugs, but never to show their absence!');
    expect(bq?.querySelector('cite')?.textContent).toContain('Edsger W. Dijkstra');

    const listItems = section?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(listItems?.[0].textContent).toContain('テストの目的は「品質を保証すること」ではなく、「意思決定に使える情報を集めること」である');
  });

  it('renders Section chapters with chapter list table (19 rows)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#chapters');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('章立て一覧　全18章 + エピローグ');

    const tableWrap = section?.querySelector('.table-wrap');
    expect(tableWrap?.querySelector('.table-title')?.textContent).toBe('章立て一覧');

    const rows = section?.querySelectorAll('table tbody tr');
    expect(rows?.length).toBe(19);
    expect(rows?.[0].querySelectorAll('td')[0].textContent).toBe('1');
    expect(rows?.[0].querySelectorAll('td')[1].textContent).toBe('Why Do We Bother Testing?');
    expect(rows?.[18].querySelectorAll('td')[0].textContent).toBe('—');
    expect(rows?.[18].querySelectorAll('td')[1].textContent).toBe('Epilogue');
  });
});

describe('Perfect Software Guide - Category 2 (Step 1 - Step 4: Assumptions & Mindset Shift)', () => {
  it('renders Section step1 with information collection definition and 2 list items', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#step1');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Step 1　テストとは「情報収集」であると理解する');

    const listItems = section?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(2);
    expect(listItems?.[0].textContent).toContain('「テストが遅れているから開発が遅れている」ではなく');
    expect(listItems?.[1].textContent).toContain('「テストを増やせば品質が上がる」のではなく');
  });

  it('renders Section step2 with Mermaid d2 diagram and sampling explanation', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#step2');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Step 2　なぜ全数テストは不可能なのかを受け入れる');

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図2　全数テストが不可能な理由とサンプリングへの流れ');
  });

  it('renders Section step3 with testing vs debugging table (4 rows) and Mermaid d3 diagram', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#step3');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Step 3　テストとデバッグを混同しない');

    const tableWrap = section?.querySelector('.table-wrap');
    expect(tableWrap?.querySelector('.table-title')?.textContent).toBe('テストとデバッグの違い');

    const rows = section?.querySelectorAll('table tbody tr');
    expect(rows?.length).toBe(4);
    expect(rows?.[0].querySelectorAll('td')[0].textContent).toBe('目的');
    expect(rows?.[0].querySelectorAll('td')[1].textContent).toBe('情報を集めること');
    expect(rows?.[0].querySelectorAll('td')[2].textContent).toBe('原因を特定し、修正すること');
    expect(rows?.[2].querySelectorAll('td')[0].textContent).toBe('成果物');
    expect(rows?.[2].querySelectorAll('td')[1].textContent).toBe('バグレポートという情報');
    expect(rows?.[2].querySelectorAll('td')[2].textContent).toBe('修正されたコード');

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図3　テストとデバッグ、2つの活動の分岐');
  });

  it('renders Section step4 with meta-testing concept, 3 list items, and bebugging explanation', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#step4');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Step 4　テストの「質」を測るメタ情報を持つ');

    const listItems = section?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(listItems?.[0].textContent).toContain('そのテストは、本当に意図した機能を検証できているか');

    expect(section?.textContent).toContain('bebugging');
    expect(section?.textContent).toContain('The Psychology of Computer Programming');
  });
});

describe('Perfect Software Guide - Category 3 (Step 5 - Step 8: Psychology & Information Processing)', () => {
  it('renders Section step5 with Mermaid d4 diagram and defense mechanisms explanation', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#step5');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Step 5　悪い知らせへの防衛反応（情報免疫）を認識する');

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図4　悪い知らせへの6つの防衛反応パターン');

    expect(section?.textContent).toContain('情報免疫');
  });

  it('renders Section step6 with good test criteria and 3 list items', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#step6');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Step 6　「良いテスト」の基準を持つ');

    const listItems = section?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(listItems?.[0].textContent).toContain('テストの「良さ」を統計的にしか見積もれないという前提を持つ');
    expect(listItems?.[2].textContent).toContain('「バグが見つからなかった」ことは「良いテストだった」ことの証明にはならない');
  });

  it('renders Section step7 with Mermaid d5 diagram and major fallacies table (5 rows)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#step7');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Step 7　テストにまつわる5大誤解を手放す');

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図5　5つの誤解とそれに対応する事実');

    const tableWrap = section?.querySelector('.table-wrap');
    expect(tableWrap?.querySelector('.table-title')?.textContent).toBe('テストにまつわる5大誤解');

    const rows = section?.querySelectorAll('table tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0].querySelectorAll('td')[0].textContent).toBe('テストで品質を作り込める');
    expect(rows?.[1].querySelectorAll('td')[0].textContent).toBe('バグ0件は合格の証明になる');
    expect(rows?.[2].querySelectorAll('td')[0].textContent).toBe('テストは多いほど良い');
    expect(rows?.[3].querySelectorAll('td')[0].textContent).toBe('出荷可否はテスターが決める');
    expect(rows?.[4].querySelectorAll('td')[0].textContent).toBe('自動化すれば人は不要になる');
  });

  it('renders Section step8 with Mermaid d6 diagram and Satir communication model explanation', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#step8');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Step 8　情報が意思決定に至るまでの流れを意識する');

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図6　取り込みから対応に至る情報処理サイクル');

    expect(section?.textContent).toContain('バージニア・サティア');
    expect(section?.textContent).toContain('取り込み・意味づけ・重要性判断・対応');
  });
});

describe('Perfect Software Guide - Category 4 (Step 9 - Step 11: Practice, Humanity & Scam Detection)', () => {
  it('renders Section step9 with incremental design advice and 4 list items', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#step9');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Step 9　システムを育てながらテストを楽にする');

    const listItems = section?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(4);
    expect(listItems?.[0].textContent).toContain('システムをできる限り小さく保つ');
    expect(listItems?.[2].textContent).toContain('明確なインターフェースを持つ独立したコンポーネント単位で、段階的に構築する');
  });

  it('renders Section step10 with testing without machinery and 4 list items', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#step10');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Step 10　機械に頼らないテスト（レビュー・ウォークスルー）を活用する');

    const listItems = section?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(4);
    expect(listItems?.[0].textContent).toContain('自動化されたテストは、あらかじめ想定した観点しか確認できない');
    expect(listItems?.[1].textContent).toContain('worst-first review');
  });

  it('renders Section step11 with Mermaid d7 diagram and scam detection explanation', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#step11');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('Step 11　テストにまつわる「詐欺」を見抜く');

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図7　怪しいテストツール営業を見抜くチェックフロー');

    expect(section?.textContent).toContain('無自覚なスキャム');
  });
});

describe('Perfect Software Guide - Category 5 (Roadmap, Summary, References, Footer & Checklist)', () => {
  it('renders Section roadmap with Mermaid d8 diagram and interactive Checklist', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#roadmap');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('初学者向け実践ロードマップ');

    const caption = section?.querySelector('.diagram-caption');
    expect(caption?.textContent).toContain('図8　初学者向け学習ロードマップ');

    const h3 = section?.querySelector('h3');
    expect(h3?.textContent).toContain('日々の実務で確認したいチェックリスト');

    const counter = section?.querySelector('#checklistCounter');
    expect(counter?.textContent).toBe('0 / 7 完了');

    const items = section?.querySelectorAll('.checklist li');
    expect(items?.length).toBe(7);
  });

  it('verifies Checklist interactivity by checking and unchecking items', () => {
    const { container } = render(<Page />);
    const counter = container.querySelector('#checklistCounter');
    const checkboxes = container.querySelectorAll<HTMLInputElement>('.checklist input[type="checkbox"]');
    const items = container.querySelectorAll('.checklist li');

    expect(counter?.textContent).toBe('0 / 7 完了');

    // Check first item
    fireEvent.click(checkboxes[0]);
    expect(counter?.textContent).toBe('1 / 7 完了');
    expect(items[0].classList.contains('done')).toBe(true);

    // Check second item
    fireEvent.click(checkboxes[1]);
    expect(counter?.textContent).toBe('2 / 7 完了');
    expect(items[1].classList.contains('done')).toBe(true);

    // Uncheck first item
    fireEvent.click(checkboxes[0]);
    expect(counter?.textContent).toBe('1 / 7 完了');
    expect(items[0].classList.contains('done')).toBe(false);
  });

  it('renders Section summary with 7-item recap list', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#summary');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('まとめ');

    const listItems = section?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(7);
    expect(listItems?.[0].textContent).toContain('情報収集としてのテストの役割を正しく認識し');
    expect(listItems?.[6].textContent).toContain('詐欺的な売り込みを見抜く');
  });

  it('renders Section references with 11 reference cards and correct external links', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('#references');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('参考文献・出典');

    const cards = section?.querySelectorAll('.ref-card');
    expect(cards?.length).toBe(11);

    expect(cards?.[0].querySelector('.ref-num')?.textContent).toBe('1');
    expect(cards?.[0].querySelector('.ref-title')?.textContent).toContain('Gerald M. Weinberg 公式サイト');
    expect(cards?.[0].querySelector('a.ref-url')?.getAttribute('href')).toBe('https://geraldmweinberg.com/Site/Perfect_Software.html');
    expect(cards?.[0].querySelector('a.ref-url')?.getAttribute('target')).toBe('_blank');

    expect(cards?.[10].querySelector('.ref-num')?.textContent).toBe('11');
    expect(cards?.[10].querySelector('.ref-title')?.textContent).toContain('Edsger W. Dijkstra');
    expect(cards?.[10].querySelector('a.ref-url')?.getAttribute('href')).toBe('https://www.cs.utexas.edu/~EWD/transcriptions/EWD02xx/EWD268.html');
  });

  it('renders footer with educational disclaimer', () => {
    const { container } = render(<Page />);
    const footer = container.querySelector('footer.footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('本ガイドは教育目的の要約・解説であり');
    expect(footer?.textContent).toContain('Perfect Software: And Other Illusions about Testing');
  });
});
