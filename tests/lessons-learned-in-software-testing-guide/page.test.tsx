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

  it('renders Section 5: ステップ3: テスト技法を使い分ける (#step3) with Mermaid, table, and step-list', () => {
    const { container } = render(<Page />);
    const sec5 = container.querySelector('#step3');
    expect(sec5).not.toBeNull();

    const h2 = sec5?.querySelector('h2');
    expect(h2?.textContent).toContain('5. ステップ3: テスト技法を使い分ける');

    const figure = sec5?.querySelector('figure.diagram');
    expect(figure).not.toBeNull();
    const figcaption = figure?.querySelector('figcaption');
    expect(figcaption?.textContent).toBe('図2: テスト技法を捉える5つの視点');

    const table = sec5?.querySelector('table');
    expect(table).not.toBeNull();
    const headers = table?.querySelectorAll('thead th');
    expect(headers?.[0].textContent).toBe('視点');
    expect(headers?.[1].textContent).toBe('焦点');
    expect(headers?.[2].textContent).toBe('具体例');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0].textContent).toContain('人ベース');
    expect(rows?.[1].textContent).toContain('カバレッジベース');
    expect(rows?.[2].textContent).toContain('問題ベース');
    expect(rows?.[3].textContent).toContain('活動ベース');
    expect(rows?.[4].textContent).toContain('評価ベース');

    const h3 = sec5?.querySelector('h3');
    expect(h3?.textContent).toBe('補足: 組み合わせテスト(オールペア法)の考え方');

    const stepList = sec5?.querySelectorAll('ol.step-list li');
    expect(stepList?.length).toBe(4);
    expect(stepList?.[0].textContent).toContain('各入力項目を「ドメイン分割(同値分割)」して代表値を洗い出す');
    expect(stepList?.[1].textContent).toContain('各項目の値が最低1回は登場する組み合わせ(オールシングル)を作る');
    expect(stepList?.[2].textContent).toContain('任意の2項目の値の組み合わせがすべて最低1回は登場するように調整する(オールペア)');
    expect(stepList?.[3].textContent).toContain('網羅率とテストケース数のバランスを見ながら');
  });

  it('renders Section 6: ステップ4: バグアドボカシー (#step4) with Mermaid, principles, and callout', () => {
    const { container } = render(<Page />);
    const sec6 = container.querySelector('#step4');
    expect(sec6).not.toBeNull();

    const h2 = sec6?.querySelector('h2');
    expect(h2?.textContent).toContain('6. ステップ4: 優れたバグレポートを書く(バグアドボカシー)');

    const figure = sec6?.querySelector('figure.diagram');
    expect(figure).not.toBeNull();
    const figcaption = figure?.querySelector('figcaption');
    expect(figcaption?.textContent).toBe('図3: バグレポートのライフサイクル');

    const h3 = sec6?.querySelector('h3');
    expect(h3?.textContent).toBe('押さえるべき原則');

    const list = sec6?.querySelectorAll('ul li');
    expect(list?.length).toBe(7);
    expect(list?.[0].textContent).toContain('バグレポートはあなた自身を映す「代理人」である');
    expect(list?.[1].textContent).toContain('1つのバグには1つのレポート');
    expect(list?.[2].textContent).toContain('サマリー行が最も重要');
    expect(list?.[3].textContent).toContain('severity(深刻度)と priority(優先度)は別物');
    expect(list?.[4].textContent).toContain('再現しないバグも必ず報告する');
    expect(list?.[5].textContent).toContain('誇張しない、決めつけない');
    expect(list?.[6].textContent).toContain('修正されたことを鵜呑みにしない');

    const callout = sec6?.querySelector('.callout.source');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('現代の視点: バグアドボカシーは「調査」の技術である');
    expect(callout?.textContent).toContain('Maaret Pyhäjärvi');
  });

  it('renders Section 7: ステップ5: テスト自動化を正しく使う (#step5) with misconception table', () => {
    const { container } = render(<Page />);
    const sec7 = container.querySelector('#step5');
    expect(sec7).not.toBeNull();

    const h2 = sec7?.querySelector('h2');
    expect(h2?.textContent).toContain('7. ステップ5: テスト自動化を正しく使う');

    const table = sec7?.querySelector('table');
    expect(table).not.toBeNull();
    const ths = table?.querySelectorAll('thead th');
    expect(ths?.[0].textContent).toBe('誤解');
    expect(ths?.[1].textContent).toBe('本書の立場');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0].textContent).toContain('自動化の目的はコスト削減');
    expect(rows?.[1].textContent).toContain('100%自動化が理想');
    expect(rows?.[2].textContent).toContain('自動化はツールを買えば済む');
    expect(rows?.[3].textContent).toContain('自動テストは資産が増えるほど良い');
    expect(rows?.[4].textContent).toContain('汚いテスト手順を自動化すれば改善する');

    expect(sec7?.textContent).toContain('テスタビリティ (testability) への投資');
  });

  it('renders Section 8: ステップ6: テストを文書化する (#step6) with list of principles', () => {
    const { container } = render(<Page />);
    const sec8 = container.querySelector('#step6');
    expect(sec8).not.toBeNull();

    const h2 = sec8?.querySelector('h2');
    expect(h2?.textContent).toContain('8. ステップ6: テストを文書化する');

    const list = sec8?.querySelectorAll('ul li');
    expect(list?.length).toBe(4);
    expect(list?.[0].textContent).toContain('テンプレートを使うべきかどうかは状況次第');
    expect(list?.[1].textContent).toContain('ISO/IEC/IEEE 29119-3:2021');
    expect(list?.[1].textContent).toContain('IEEE 829');
    expect(list?.[2].textContent).toContain('そもそも何のためにこの文書が必要なのか');
    expect(list?.[3].textContent).toContain('1文・3要素以内');
  });

  it('renders Section 9: ステップ7: プログラマーと協働する (#step7) with list of principles', () => {
    const { container } = render(<Page />);
    const sec9 = container.querySelector('#step7');
    expect(sec9).not.toBeNull();

    const h2 = sec9?.querySelector('h2');
    expect(h2?.textContent).toContain('9. ステップ7: プログラマーと協働する');

    const list = sec9?.querySelectorAll('ul li');
    expect(list?.length).toBe(4);
    expect(list?.[0].textContent).toContain('プログラマーがどう考えるかを理解する努力');
    expect(list?.[1].textContent).toContain('信頼は一朝一夕には築けない');
    expect(list?.[2].textContent).toContain('批判の矛先は「仕事の成果物」に向けるべきであり、「人」に向けてはなりません');
    expect(list?.[3].textContent).toContain('質問を投げかけることが関係構築の近道');
  });

  it('renders Section 10: ステップ8: テストプロジェクトを管理する (#step8) with management principles', () => {
    const { container } = render(<Page />);
    const sec10 = container.querySelector('#step8');
    expect(sec10).not.toBeNull();

    const h2 = sec10?.querySelector('h2');
    expect(h2?.textContent).toContain('10. ステップ8: テストプロジェクトを管理する');

    const list = sec10?.querySelectorAll('ul li');
    expect(list?.length).toBe(7);
    expect(list?.[0].textContent).toContain('「サービス文化」を作る。「コントロール文化」を作ろうとしない');
    expect(list?.[1].textContent).toContain('テスターが管理するのは「テストという名のサブプロジェクト」');
    expect(list?.[2].textContent).toContain('スモークテストでビルドの受け入れ可否を判断する');
    expect(list?.[3].textContent).toContain('セッションベースドテスト管理');
    expect(list?.[4].textContent).toContain('バグ件数だけで進捗を語らない');
    expect(list?.[5].textContent).toContain('バランスドスコアカードで複数の観点から状況を報告する');
    expect(list?.[6].textContent).toContain('テスターはリリースの可否そのものにサインオフしない');
  });

  it('renders Section 11: ステップ9: テストチームを管理する (#step9) with team management principles', () => {
    const { container } = render(<Page />);
    const sec11 = container.querySelector('#step9');
    expect(sec11).not.toBeNull();

    const h2 = sec11?.querySelector('h2');
    expect(h2?.textContent).toContain('11. ステップ9: テストチームを管理する');

    const list = sec11?.querySelectorAll('ul li');
    expect(list?.length).toBe(4);
    expect(list?.[0].textContent).toContain('スタッフを「幹部」として扱う');
    expect(list?.[1].textContent).toContain('新人テスターの立ち上げ方には型がある');
    expect(list?.[2].textContent).toContain('士気はチームの重要な資産である');
    expect(list?.[3].textContent).toContain('採用は合議制で、誠実さを最重視する');
  });
});


