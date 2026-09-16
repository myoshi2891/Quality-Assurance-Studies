import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/perfect-software-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/perfect-software-guide/NavBar';

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
    expect(TOC_ITEMS[0]).toEqual({ id: 'intro', num: '00', label: 'この記事について' });
    expect(TOC_ITEMS[1]).toEqual({ id: 'book-info', num: '01', label: '書籍の基本情報' });
    expect(TOC_ITEMS[2]).toEqual({ id: 'structure', num: '02', label: '全体像の構成マップ' });
    expect(TOC_ITEMS[3]).toEqual({ id: 'core-message', num: '03', label: '核心メッセージ' });
    expect(TOC_ITEMS[4]).toEqual({ id: 'chapters', num: '04', label: '章立て一覧' });
    expect(TOC_ITEMS[5]).toEqual({ id: 'step1', num: '05', label: 'Step1 情報収集' });
    expect(TOC_ITEMS[6]).toEqual({ id: 'step2', num: '06', label: 'Step2 全数テスト不可能' });
    expect(TOC_ITEMS[7]).toEqual({ id: 'step3', num: '07', label: 'Step3 テストとデバッグ' });
    expect(TOC_ITEMS[8]).toEqual({ id: 'step4', num: '08', label: 'Step4 メタテスト' });
    expect(TOC_ITEMS[9]).toEqual({ id: 'step5', num: '09', label: 'Step5 情報免疫' });
    expect(TOC_ITEMS[10]).toEqual({ id: 'step6', num: '10', label: 'Step6 良いテストの基準' });
    expect(TOC_ITEMS[11]).toEqual({ id: 'step7', num: '11', label: 'Step7 5大誤解' });
    expect(TOC_ITEMS[12]).toEqual({ id: 'step8', num: '12', label: 'Step8 情報処理サイクル' });
    expect(TOC_ITEMS[13]).toEqual({ id: 'step9', num: '13', label: 'Step9 設計で楽にする' });
    expect(TOC_ITEMS[14]).toEqual({ id: 'step10', num: '14', label: 'Step10 機械に頼らない' });
    expect(TOC_ITEMS[15]).toEqual({ id: 'step11', num: '15', label: 'Step11 詐欺を見抜く' });
    expect(TOC_ITEMS[16]).toEqual({ id: 'roadmap', num: '16', label: '実践ロードマップ' });
    expect(TOC_ITEMS[17]).toEqual({ id: 'summary', num: '17', label: 'まとめ' });
    expect(TOC_ITEMS[18]).toEqual({ id: 'references', num: '18', label: '参考文献・出典' });

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
