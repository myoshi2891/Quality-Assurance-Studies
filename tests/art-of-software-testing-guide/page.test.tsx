import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/art-of-software-testing-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/art-of-software-testing-guide/NavBar';

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

describe('Art of Software Testing Guide - Category 1 (Hero, NavBar, Intro, Ch1-Ch3)', () => {
  it('renders within the scoped root container .art-of-testing-layout', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.art-of-testing-layout');
    expect(root).not.toBeNull();
  });

  it('renders hero with kicker, h1, subtitle, and source callout link', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('.hero');
    expect(hero).not.toBeNull();

    const kicker = hero?.querySelector('.kicker');
    expect(kicker?.textContent).toContain('Beginner Guide');

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('『The Art of Software Testing』から学ぶ');
    expect(h1.textContent).toContain('ソフトウェアテスト実践ガイド');

    const subtitle = hero?.querySelector('.subtitle');
    expect(subtitle?.textContent).toBe('初学者のためのステップバイステップ・ベストプラクティス');

    const callout = hero?.querySelector('.callout.source');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('参考書籍');
    expect(callout?.textContent).toContain('Glenford J. Myers');

    const link = callout?.querySelector('a.ref-url');
    expect(link?.getAttribute('href')).toBe('https://www.oreilly.com/library/view/the-art-of/9781118133156/');
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renders navigation bar with all 15 TOC items and mobile toggle', () => {
    const { container } = render(<NavBar />);
    const aside = container.querySelector('aside.sidebar');
    expect(aside).not.toBeNull();

    expect(TOC_ITEMS).toHaveLength(15);

    const links = container.querySelectorAll('nav a[data-nav]');
    expect(links.length).toBe(15);

    TOC_ITEMS.forEach((item, index) => {
      const link = links[index];
      expect(link.getAttribute('href')).toBe(`#${item.id}`);
      expect(link.textContent).toContain(item.label);
    });

    const mobileToggle = container.querySelector('#menuToggle');
    expect(mobileToggle).not.toBeNull();
    expect(mobileToggle?.getAttribute('aria-label')).toBe('メニューを開く');
  });

  it('renders Section: はじめに (#intro) with 3 paragraphs', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#intro');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('はじめに');

    const paragraphs = sec?.querySelectorAll('p');
    expect(paragraphs?.length).toBe(3);
    expect(paragraphs?.[0].textContent).toContain('1979年にGlenford J. Myersが著し');
    expect(paragraphs?.[1].textContent).toContain('Martin Fowler、Kent Beck、Robert C. Martin');
    expect(paragraphs?.[2].textContent).toContain('これからソフトウェアテストを学ぶプログラマー');
  });

  it('renders Section 1: テストの心理学 (#ch1) with Mermaid diagram diag-ch1', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch1');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第1章: テストの心理学 — なぜ「バグを探す」姿勢が重要なのか');

    const diag = sec?.querySelector('#diag-ch1');
    expect(diag).not.toBeNull();

    const caption = sec?.querySelector('.fig-caption');
    expect(caption?.textContent).toContain('「証明したい」という思い込みと、Myersが提唱する「発見する」心構えの違い');
  });

  it('renders Section 2: ソフトウェアテストの7原則 (#ch2) with 7-row table and source callout', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch2');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第2章: ソフトウェアテストの7原則');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();

    const ths = table?.querySelectorAll('thead th');
    expect(ths?.length).toBe(4);
    expect(ths?.[0].textContent).toBe('#');
    expect(ths?.[1].textContent).toBe('原則');
    expect(ths?.[2].textContent).toBe('内容');
    expect(ths?.[3].textContent).toBe('実務での意味');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(7);
    expect(rows?.[0].textContent).toContain('テストは欠陥があることは示せるが、欠陥がないことは示せない');
    expect(rows?.[1].textContent).toContain('全数テストは不可能');
    expect(rows?.[2].textContent).toContain('早期テストの原則');
    expect(rows?.[3].textContent).toContain('欠陥の偏在（クラスタリング）');
    expect(rows?.[4].textContent).toContain('殺虫剤のパラドックス');
    expect(rows?.[5].textContent).toContain('テストは状況に依存する');
    expect(rows?.[6].textContent).toContain('「バグゼロ」の誤信');

    const callout = sec?.querySelector('.callout.source');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('ASTQB（ISTQB公認団体）による解説を要約');
  });

  it('renders Section 3: テストレベルの全体像 (#ch3) with Mermaid diagram diag-ch3 and 4-row table', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch3');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第3章: テストレベルの全体像');

    const diag = sec?.querySelector('#diag-ch3');
    expect(diag).not.toBeNull();

    const caption = sec?.querySelector('.fig-caption');
    expect(caption?.textContent).toContain('要件定義からリリース判定までのテストレベルの流れ');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();

    const ths = table?.querySelectorAll('thead th');
    expect(ths?.length).toBe(4);
    expect(ths?.[0].textContent).toBe('テストレベル');
    expect(ths?.[1].textContent).toBe('目的');
    expect(ths?.[2].textContent).toBe('対象');
    expect(ths?.[3].textContent).toBe('主な実施者');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(4);
    expect(rows?.[0].textContent).toContain('単体テスト');
    expect(rows?.[1].textContent).toContain('結合テスト');
    expect(rows?.[2].textContent).toContain('システムテスト');
    expect(rows?.[3].textContent).toContain('受け入れテスト');
  });
});

describe('Art of Software Testing Guide - Category 2 (Ch4-Ch6: Techniques & Coverage)', () => {
  it('renders Section 4: ブラックボックステスト技法 (#ch4) with 2 H3s and 2 tables', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch4');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第4章: ブラックボックステスト技法');

    const h3s = sec?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toBe('4.1 同値分割（Equivalence Partitioning）');
    expect(h3s?.[1].textContent).toBe('4.2 境界値分析（Boundary Value Analysis）');

    const tables = sec?.querySelectorAll('table');
    expect(tables?.length).toBe(2);

    // Table 1: Equivalence partitioning
    const tableEq = tables?.[0];
    const thsEq = tableEq?.querySelectorAll('thead th');
    expect(thsEq?.length).toBe(3);
    expect(thsEq?.[0].textContent).toBe('区分');
    expect(thsEq?.[1].textContent).toBe('範囲');
    expect(thsEq?.[2].textContent).toBe('代表値の例');

    const rowsEq = tableEq?.querySelectorAll('tbody tr');
    expect(rowsEq?.length).toBe(3);
    expect(rowsEq?.[0].textContent).toContain('無効パーティション（下限未満）');
    expect(rowsEq?.[0].textContent).toContain('18歳未満');
    expect(rowsEq?.[0].textContent).toContain('10');
    expect(rowsEq?.[1].textContent).toContain('有効パーティション');
    expect(rowsEq?.[1].textContent).toContain('18〜65歳');
    expect(rowsEq?.[1].textContent).toContain('30');
    expect(rowsEq?.[2].textContent).toContain('無効パーティション（上限超過）');
    expect(rowsEq?.[2].textContent).toContain('65歳超');
    expect(rowsEq?.[2].textContent).toContain('80');

    // Table 2: Boundary value analysis
    const tableBva = tables?.[1];
    const thsBva = tableBva?.querySelectorAll('thead th');
    expect(thsBva?.length).toBe(3);
    expect(thsBva?.[0].textContent).toBe('テストケース');
    expect(thsBva?.[1].textContent).toBe('入力値');
    expect(thsBva?.[2].textContent).toBe('期待結果');

    const rowsBva = tableBva?.querySelectorAll('tbody tr');
    expect(rowsBva?.length).toBe(6);
    expect(rowsBva?.[0].textContent).toContain('下限境界の直前');
    expect(rowsBva?.[0].textContent).toContain('17');
    expect(rowsBva?.[0].textContent).toContain('登録拒否');
    expect(rowsBva?.[1].textContent).toContain('下限境界');
    expect(rowsBva?.[1].textContent).toContain('18');
    expect(rowsBva?.[1].textContent).toContain('登録許可');
    expect(rowsBva?.[2].textContent).toContain('下限境界の直後');
    expect(rowsBva?.[2].textContent).toContain('19');
    expect(rowsBva?.[2].textContent).toContain('登録許可');
    expect(rowsBva?.[3].textContent).toContain('上限境界の直前');
    expect(rowsBva?.[3].textContent).toContain('64');
    expect(rowsBva?.[3].textContent).toContain('登録許可');
    expect(rowsBva?.[4].textContent).toContain('上限境界');
    expect(rowsBva?.[4].textContent).toContain('65');
    expect(rowsBva?.[4].textContent).toContain('登録許可');
    expect(rowsBva?.[5].textContent).toContain('上限境界の直後');
    expect(rowsBva?.[5].textContent).toContain('66');
    expect(rowsBva?.[5].textContent).toContain('登録拒否');
  });

  it('renders Section 5: ホワイトボックステスト技法とコードカバレッジ (#ch5) with 4-row table', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch5');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第5章: ホワイトボックステスト技法とコードカバレッジ');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();

    const ths = table?.querySelectorAll('thead th');
    expect(ths?.length).toBe(3);
    expect(ths?.[0].textContent).toBe('カバレッジ種別');
    expect(ths?.[1].textContent).toBe('意味');
    expect(ths?.[2].textContent).toBe('特徴');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(4);
    expect(rows?.[0].textContent).toContain('ステートメント（命令網羅）');
    expect(rows?.[1].textContent).toContain('ブランチ（分岐網羅）');
    expect(rows?.[2].textContent).toContain('条件網羅');
    expect(rows?.[3].textContent).toContain('パス網羅');
  });

  it('renders Section 6: 非実行型テスト (#ch6) with 3-row inspection table', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch6');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第6章: 非実行型テスト — インスペクション・ウォークスルー・デスクチェック');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();

    const ths = table?.querySelectorAll('thead th');
    expect(ths?.length).toBe(3);
    expect(ths?.[0].textContent).toBe('手法');
    expect(ths?.[1].textContent).toBe('進め方');
    expect(ths?.[2].textContent).toBe('向いている場面');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('インスペクション');
    expect(rows?.[1].textContent).toContain('ウォークスルー');
    expect(rows?.[2].textContent).toContain('デスクチェック');
  });
});

describe('Art of Software Testing Guide - Category 3 (Ch7-Ch10: Pyramid, TDD, FIRST, Debugging)', () => {
  it('renders Section 7: テストピラミッドと自動テスト戦略 (#ch7) with Mermaid diagram diag-ch7', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch7');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第7章: テストピラミッドと自動テスト戦略');

    const diag = sec?.querySelector('#diag-ch7');
    expect(diag).not.toBeNull();

    const caption = sec?.querySelector('.fig-caption');
    expect(caption?.textContent).toContain('単体テストを厚く、E2Eテストを薄くするテストピラミッドの配分');
  });

  it('renders Section 8: テスト駆動開発（TDD） (#ch8) with Mermaid diagram diag-ch8 and 5-step list', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch8');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第8章: テスト駆動開発（TDD）');

    const diag = sec?.querySelector('#diag-ch8');
    expect(diag).not.toBeNull();

    const caption = sec?.querySelector('.fig-caption');
    expect(caption?.textContent).toContain('Red → Green → Refactor を繰り返すTDDサイクル');

    const ol = sec?.querySelector('ol');
    expect(ol).not.toBeNull();

    const items = ol?.querySelectorAll('li');
    expect(items?.length).toBe(5);
    expect(items?.[0].textContent).toContain('実装したい機能を、最も小さい単位のテストケースとして書き出す');
    expect(items?.[1].textContent).toContain('そのテストを実行し、失敗する（Red）ことを確認する');
    expect(items?.[2].textContent).toContain('テストを通すために必要最小限のコードだけを書く（Green）');
    expect(items?.[3].textContent).toContain('テストが通った状態を保ちながら、重複や汚いコードを整理する（Refactor）');
    expect(items?.[4].textContent).toContain('次の小さなテストケースに進み、1〜4を繰り返す');
  });

  it('renders Section 9: 良いテストコードを書くためのFIRST原則 (#ch9) with 5-row table', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch9');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第9章: 良いテストコードを書くためのFIRST原則');

    const table = sec?.querySelector('table');
    expect(table).not.toBeNull();

    const ths = table?.querySelectorAll('thead th');
    expect(ths?.length).toBe(3);
    expect(ths?.[0].textContent).toBe('頭文字');
    expect(ths?.[1].textContent).toBe('原則');
    expect(ths?.[2].textContent).toBe('意味');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0].textContent).toContain('F');
    expect(rows?.[0].textContent).toContain('Fast（高速）');
    expect(rows?.[1].textContent).toContain('I');
    expect(rows?.[1].textContent).toContain('Independent（独立）');
    expect(rows?.[2].textContent).toContain('R');
    expect(rows?.[2].textContent).toContain('Repeatable（繰り返し可能）');
    expect(rows?.[3].textContent).toContain('S');
    expect(rows?.[3].textContent).toContain('Self-Validating（自己検証可能）');
    expect(rows?.[4].textContent).toContain('T');
    expect(rows?.[4].textContent).toContain('Timely（適時性）');
  });

  it('renders Section 10: デバッグの技法 (#ch10) with Mermaid diagram diag-ch10', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch10');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第10章: デバッグの技法');

    const diag = sec?.querySelector('#diag-ch10');
    expect(diag).not.toBeNull();

    const caption = sec?.querySelector('.fig-caption');
    expect(caption?.textContent).toContain('力任せ法・逆行法・原因除去法という3つのデバッグアプローチ');
  });
});

describe('Art of Software Testing Guide - Category 4 (Ch11-Ch12, Checklist, References, Footer)', () => {
  it('renders Section 11: 継続的テストとFlaky Testへの対処 (#ch11) with Mermaid diagram diag-ch11', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch11');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第11章: 継続的テストとFlaky Testへの対処');

    const diag = sec?.querySelector('#diag-ch11');
    expect(diag).not.toBeNull();

    const caption = sec?.querySelector('.fig-caption');
    expect(caption?.textContent).toContain('CIパイプラインにおけるテスト失敗の判定とFlaky Testの隔離フロー');
  });

  it('renders Section 12: AI時代のソフトウェアテスト (#ch12) with 4-item list and note callout', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#ch12');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('第12章: AI時代のソフトウェアテスト（2026年動向）');

    const ul = sec?.querySelector('ul');
    expect(ul).not.toBeNull();

    const items = ul?.querySelectorAll('li');
    expect(items?.length).toBe(4);
    expect(items?.[0].textContent).toContain('AIが関与したコードの比率は近年上昇しているとみられますが');
    expect(items?.[1].textContent).toContain('AIが生成したコードには、一見正しく見えても論理的な誤りや');
    expect(items?.[2].textContent).toContain('テストケース自体をAIに生成させる「AI支援テスト」');
    expect(items?.[3].textContent).toContain('セルフヒーリングテスト');

    const callout = sec?.querySelector('.callout.note');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('注意');
    expect(callout?.textContent).toContain('AI関連の統計は調査元によって定義や数値が大きく異なります');
  });

  it('renders Section: 実践ステップバイステップ・チェックリスト (#checklist) with 13-item numbered list', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#checklist');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('実践ステップバイステップ・チェックリスト');

    const list = sec?.querySelector('ol.step-list');
    expect(list).not.toBeNull();

    const items = list?.querySelectorAll('li');
    expect(items?.length).toBe(13);

    for (let i = 1; i <= 13; i++) {
      const item = items?.[i - 1];
      const numSpan = item?.querySelector('.num');
      expect(numSpan?.textContent).toBe(String(i));
    }

    expect(items?.[0].textContent).toContain('まず自分の中の「証明したい」という気持ちを「壊してやろう」');
    expect(items?.[12].textContent).toContain('一定期間ごとにテストケース自体を見直し、殺虫剤のパラドックス');
  });

  it('renders Section: 参考文献 (#references) with 4 groups and 12 external reference links', () => {
    const { container } = render(<Page />);
    const sec = container.querySelector('#references');
    expect(sec).not.toBeNull();

    const h2 = sec?.querySelector('h2');
    expect(h2?.textContent).toBe('参考文献');

    const groups = sec?.querySelectorAll('.ref-group');
    expect(groups?.length).toBe(4);

    const groupTitles = Array.from(groups || []).map((g) => g.querySelector('h3')?.textContent);
    expect(groupTitles).toEqual([
      '書籍',
      '著名な開発者による解説記事',
      '公式ブログ・標準化団体',
      '技法解説・業界動向',
    ]);

    const refItems = sec?.querySelectorAll('.ref-item');
    expect(refItems?.length).toBe(12);

    const links = sec?.querySelectorAll('a.ref-url');
    expect(links?.length).toBe(12);

    links?.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
      expect(link.getAttribute('href')).toMatch(/^https?:\/\//);
    });
  });

  it('renders footer with copyright and update notice', () => {
    const { container } = render(<Page />);
    const footer = container.querySelector('footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('本ガイドは2026年8月時点で公開されている情報をもとに作成されています');
  });
});



