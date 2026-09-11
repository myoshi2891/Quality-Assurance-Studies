import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, waitFor, act, fireEvent } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/agile-testing-practical-guide/page';
import NavBar, { NAV_ITEMS } from '../../app/agile-testing-practical-guide/NavBar';

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

describe('Agile Testing Practical Guide - Category A (Hero, About, Step 1, Navigation)', () => {
  it('renders within the scoped root container .agile-testing-practical-page', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.agile-testing-practical-page');
    expect(root).not.toBeNull();
  });

  it('renders hero section with eyebrow, h1, lead, and 4 meta chips', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('.hero');
    expect(hero).not.toBeNull();

    const eyebrow = container.querySelector('.hero .eyebrow');
    expect(eyebrow?.textContent).toContain('名著解説');

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('初学者のための実践ガイド');
    expect(h1.textContent).toContain('Agile Testing: A Practical Guide for Testers and Agile Teams');

    const lead = container.querySelector('.hero .lead');
    expect(lead?.textContent).toContain('アジャイルテストのバイブル');

    const chips = container.querySelectorAll('.hero .chip');
    expect(chips.length).toBe(4);
    expect(chips[0]?.textContent).toContain('Lisa Crispin, Janet Gregory');
    expect(chips[1]?.textContent).toContain('Addison-Wesley Professional');
    expect(chips[2]?.textContent).toContain('初版 2009年');
    expect(chips[3]?.textContent).toContain("O'Reilly掲載ページ");
  });

  it('returns focus to the menu toggle when shrinking back to mobile width (a11y regression)', () => {
    const { container } = render(<NavBar />);
    const toggle = container.querySelector('#sidebarToggle') as HTMLButtonElement;
    const firstLink = container.querySelector('.side-nav a') as HTMLAnchorElement;
    const originalWidth = window.innerWidth;

    try {
      // デスクトップ幅ではサイドバーが常時表示なので、リンクへフォーカスできる。
      act(() => {
        Object.defineProperty(window, 'innerWidth', {
          configurable: true,
          writable: true,
          value: 1280,
        });
        fireEvent(window, new Event('resize'));
      });
      firstLink.focus();
      expect((document.activeElement as HTMLElement | null)?.getAttribute('href')).toBe(
        firstLink.getAttribute('href')
      );

      // モバイル幅へ縮めるとサイドバーは visibility: hidden になる。
      act(() => {
        Object.defineProperty(window, 'innerWidth', {
          configurable: true,
          writable: true,
          value: 800,
        });
        fireEvent(window, new Event('resize'));
      });

      // 不可視になったサイドバー内ではなく、トグルボタンへフォーカスが戻る。
      expect((document.activeElement as HTMLElement | null)?.id).toBe('sidebarToggle');
      expect(toggle.getAttribute('aria-expanded')).toBe('false');
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        writable: true,
        value: originalWidth,
      });
    }
  });

  it('renders NavBar with 14 TOC links matching exact href and labels', () => {
    const { container } = render(<NavBar />);
    expect(NAV_ITEMS.length).toBe(14);

    const expectedNav = [
      { href: '#about', label: 'この本について' },
      { href: '#step1', label: 'ステップ1: アジャイルテストとは' },
      { href: '#step2', label: 'ステップ2: 10の原則' },
      { href: '#step3', label: 'ステップ3: 組織課題とホールチーム' },
      { href: '#step4', label: 'ステップ4: アジャイルテストの4象限' },
      { href: '#step5', label: 'ステップ5: 自動化とテストピラミッド' },
      { href: '#step6', label: 'ステップ6: Power of Three' },
      { href: '#step7', label: 'ステップ7: イテレーションサイクル' },
      { href: '#step8', label: 'ステップ8: 探索的テスト' },
      { href: '#step9', label: 'ステップ9: 7つの成功要因' },
      { href: '#step10', label: 'ステップ10: 思想の進化' },
      { href: '#checklist', label: '実践チェックリスト' },
      { href: '#pitfalls', label: 'よくある落とし穴' },
      { href: '#references', label: '参考文献・出典URL' },
    ];

    expectedNav.forEach((item, idx) => {
      expect(NAV_ITEMS[idx]?.href).toBe(item.href);
      expect(NAV_ITEMS[idx]?.label).toBe(item.label);
    });

    const links = container.querySelectorAll('.side-nav a');
    expect(links.length).toBe(14);
  });

  it('renders section #about with 2 tables: bibliographic KV table and book structure map table', () => {
    const { container } = render(<Page />);
    const aboutSection = container.querySelector('section#about');
    expect(aboutSection).not.toBeNull();

    const h2 = aboutSection?.querySelector('h2');
    expect(h2?.textContent).toContain('この本について');

    const tables = aboutSection?.querySelectorAll('table');
    expect(tables?.length).toBe(2);

    // Table 1: KV table with bibliographic data
    const kvTable = tables?.[0];
    expect(kvTable?.classList.contains('kv-table')).toBe(true);
    expect(kvTable?.textContent).toContain('Agile Testing: A Practical Guide for Testers and Agile Teams');
    expect(kvTable?.textContent).toContain('Lisa Crispin, Janet Gregory');
    expect(kvTable?.textContent).toContain('Addison-Wesley Professional');
    expect(kvTable?.textContent).toContain('2008年12月 (2009年刊行)');

    // Table 2: Book structure map（全 6 行を Part / 主な内容 / 対応ステップまで 1 対 1 で検証）
    const structTable = tables?.[1];
    const expectedStructRows = [
      ['Part I: はじめに (Part I. Introduction)', 'アジャイルテストの定義 / 10の原則', 'ステップ1・2'],
      [
        'Part II: 組織的な課題への対処 (Part II. Organizational Challenges)',
        '文化的課題 / チームの物理配置 / プロセス移行',
        'ステップ3',
      ],
      [
        'Part III: アジャイルテストの4象限 (Part III. The Agile Testing Quadrants)',
        '4象限による分類とツールキット',
        'ステップ4・8',
      ],
      ['Part IV: 自動化 (Part IV. Automation)', '自動化を阻む壁と戦略', 'ステップ5'],
      [
        'Part V: テスターのイテレーションライフ (Part V. An Iteration in the Life of a Tester)',
        '計画からリリースまでの1イテレーション',
        'ステップ6・7',
      ],
      ['Part VI: 成功への鍵 (Part VI. Summary)', '成功の鍵となる7要因', 'ステップ9'],
    ];
    const structRows = structTable?.querySelectorAll('tbody tr');
    expect(structRows?.length).toBe(expectedStructRows.length);
    expectedStructRows.forEach((cells, idx) => {
      const tds = structRows?.[idx]?.querySelectorAll('td');
      expect(tds?.length).toBe(3);
      cells.forEach((cell, col) => {
        expect(tds?.[col]?.textContent).toBe(cell);
      });
    });
  });

  it('renders section #step1 with traditional vs agile flow diagrams', () => {
    const { container } = render(<Page />);
    const step1 = container.querySelector('section#step1');
    expect(step1).not.toBeNull();

    const h2 = step1?.querySelector('h2');
    expect(h2?.textContent).toContain('ステップ1: アジャイルテストとは何か');

    const kicker = step1?.querySelector('.kicker');
    expect(kicker?.textContent).toContain('原著 第1〜2章');

    const captions = step1?.querySelectorAll('.mmd-caption');
    expect(captions?.length).toBe(2);
    expect(captions?.[0]?.textContent).toContain('図1: 従来型(テスト後工程型)の開発フロー');
    expect(captions?.[1]?.textContent).toContain('図2: アジャイルにおける継続的テストフロー');
  });

  describe('Category B (Steps 2 to 4)', () => {
    it('renders section #step2 with 10 principles table and source callout', () => {
      const { container } = render(<Page />);
      const step2 = container.querySelector('section#step2');
      expect(step2).not.toBeNull();

      const h2 = step2?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ2: アジャイルテスターの10の原則');

      const table = step2?.querySelector('table');
      expect(table).not.toBeNull();
      // 10 原則すべてを「#・原則・初学者向けポイント」まで 1 対 1 で検証する
      const expectedPrinciples = [
        ['1', '継続的にフィードバックを提供する', '受け入れ基準を明確にし、進捗を早く・頻繁に伝える'],
        ['2', '顧客に価値を届ける', '受け入れテストで「スコープが膨らんでいないか」を常にチェックする'],
        ['3', '対面のコミュニケーションを可能にする', 'テスターは顧客と開発者の翻訳者になれる'],
        ['4', '勇気を持つ', '短いイテレーションで動くソフトウェアを出し続ける覚悟を持つ'],
        ['5', 'シンプルさを保つ', '過剰な作り込みを避け、必要十分なテストにとどめる'],
        ['6', '継続的な改善を実践する', 'ふりかえり(レトロスペクティブ)に必ず参加する'],
        ['7', '変化に対応する', '仕様変更にも耐えられるよう自動テストを整備する'],
        ['8', '自己組織化する', 'チームの誰もがテスト作業を担える状態を目指す'],
        ['9', '人にフォーカスする', 'テスターを下請けではなく対等な貢献者として扱う文化をつくる'],
        ['10', '楽しむ', 'プロセスを主体的に動かせることが、テスターの働きがいになる'],
      ];
      const rows = table?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(expectedPrinciples.length);
      expectedPrinciples.forEach((cells, idx) => {
        const tds = rows?.[idx]?.querySelectorAll('td');
        expect(tds?.length).toBe(3);
        cells.forEach((cell, col) => {
          expect(tds?.[col]?.textContent).toBe(cell);
        });
      });

      const callout = step2?.querySelector('.callout.source');
      expect(callout).not.toBeNull();
      expect(callout?.textContent).toContain('出典');
      expect(callout?.textContent).toContain('Crispin, L. & Gregory, J.');
    });

    it('renders section #step3 with organizational challenges table and whole-team diagram', () => {
      const { container } = render(<Page />);
      const step3 = container.querySelector('section#step3');
      expect(step3).not.toBeNull();

      const h2 = step3?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ3: 組織的な課題とホールチームアプローチ');

      const table = step3?.querySelector('table');
      expect(table).not.toBeNull();
      // 4 つの課題領域すべてを「課題領域・従来型の状態・アジャイルで目指す状態」まで 1 対 1 で検証する
      const expectedChallenges = [
        [
          '組織構造',
          'テスターは独立したQA部門に所属',
          'テスターは機能横断チームの一員',
        ],
        [
          '物理配置 / コミュニケーション',
          '部署ごとに離れた席・非同期連絡が中心',
          '同じチームで密に対面(またはリモートでも高頻度)コミュニケーション',
        ],
        ['役割意識', 'テスターがバグを見つける責任者', '品質はチーム全員の責任'],
        [
          'プロセス',
          'フェーズゲート型の承認プロセス',
          '継続的な検証と早期フィードバック',
        ],
      ];
      const rows = table?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(expectedChallenges.length);
      expectedChallenges.forEach((cells, idx) => {
        const tds = rows?.[idx]?.querySelectorAll('td');
        expect(tds?.length).toBe(3);
        cells.forEach((cell, col) => {
          expect(tds?.[col]?.textContent).toBe(cell);
        });
      });

      const caption = step3?.querySelector('.mmd-caption');
      expect(caption?.textContent).toContain('図3: ホールチームアプローチの構造');
    });

    it('renders section #step4 with 4 quadrants matrix table and key takeaways list', () => {
      const { container } = render(<Page />);
      const step4 = container.querySelector('section#step4');
      expect(step4).not.toBeNull();

      const h2 = step4?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ4: アジャイルテストの4象限(Agile Testing Quadrants)');

      const table = step4?.querySelector('table');
      expect(table).not.toBeNull();
      expect(table?.textContent).toContain('ビジネス視点で捉える(Business-Facing)');
      expect(table?.textContent).toContain('技術視点で捉える(Technology-Facing)');

      const qTags = step4?.querySelectorAll('.q-tag');
      expect(qTags?.length).toBe(4);
      expect(Array.from(qTags || []).map((t) => t.textContent)).toEqual(['Q2', 'Q1', 'Q3', 'Q4']);

      const expectedStep4Points = [
        '4象限に「実施順序」はない(Lisa Crispin 自身がブログで繰り返し強調している点です)。プロジェクトやチームの状況に応じて重み付けを変えてよい思考ツールです。',
        'Q1・Q4は「技術的な観点」、Q2・Q3は「ビジネス / ユーザーの観点」という軸で捉えると理解しやすい。',
        'Q1・Q2は「チームを支援する」、Q3・Q4は「プロダクトを批評する」という目的の違いで捉える。これはテストが果たす役割の分類であり、実施時期や順序を表すものではない。',
      ];
      const listItems = step4?.querySelectorAll('ul li');
      expect(listItems?.length).toBe(expectedStep4Points.length);
      expectedStep4Points.forEach((text, idx) => {
        expect(listItems?.[idx]?.textContent).toBe(text);
      });
    });
  });

  describe('Category C (Steps 5 to 8)', () => {
    it('renders section #step5 with test pyramid diagram, step-list of 3 layers, and note callout', () => {
      const { container } = render(<Page />);
      const step5 = container.querySelector('section#step5');
      expect(step5).not.toBeNull();

      const h2 = step5?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ5: テスト自動化戦略とテストピラミッド');

      const caption = step5?.querySelector('.mmd-caption');
      expect(caption?.textContent).toContain('図4: テスト自動化戦略における3つのレイヤー');

      const stepList = step5?.querySelectorAll('ol.step-list li');
      expect(stepList?.length).toBe(3);
      expect(stepList?.[0]?.textContent).toContain('まずユニットテストの土台を作る');
      expect(stepList?.[1]?.textContent).toContain('サービス / APIレベルの統合テストを追加する');
      expect(stepList?.[2]?.textContent).toContain('UI / E2Eテストは最小限に絞る');

      const note = step5?.querySelector('.callout.note');
      expect(note).not.toBeNull();
      expect(note?.textContent).toContain('補足');
      expect(note?.textContent).toContain('Martin Fowler');
    });

    it('renders section #step6 with Power of Three diagram', () => {
      const { container } = render(<Page />);
      const step6 = container.querySelector('section#step6');
      expect(step6).not.toBeNull();

      const h2 = step6?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ6: Power of Three(Three Amigos)と受け入れテスト');

      const caption = step6?.querySelector('.mmd-caption');
      expect(caption?.textContent).toContain('図5: Power of Three による共通理解の形成');
    });

    it('renders section #step7 with iteration cycle diagram and 6-step activity table', () => {
      const { container } = render(<Page />);
      const step7 = container.querySelector('section#step7');
      expect(step7).not.toBeNull();

      const h2 = step7?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ7: テスターのイテレーションサイクル');

      const caption = step7?.querySelector('.mmd-caption');
      expect(caption?.textContent).toContain('図6: テスターのイテレーションサイクル');

      const table = step7?.querySelector('table');
      expect(table).not.toBeNull();
      const expectedIterationRows = [
        ['リリース / テーマ計画', '第15章', '大きな受け入れ基準の洗い出し、リスクの洗い出し'],
        ['助走(Hit the Ground Running)', '第16章', 'ストーリーの事前準備、テスト観点の整理'],
        ['イテレーションキックオフ', '第17章', 'Power of Threeでの会話、受け入れ基準の合意'],
        ['コーディングとテスト', '第18章', '開発と並行したテスト設計・自動化・探索的テスト'],
        ['イテレーションのまとめ', '第19章', 'デモ、ふりかえり、未完了項目の扱い'],
        ['確実なリリース', '第20章', 'リリース判定、UAT、本番影響の確認'],
      ];
      const rows = table?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(expectedIterationRows.length);
      expectedIterationRows.forEach((cells, idx) => {
        const tds = rows?.[idx]?.querySelectorAll('td');
        expect(tds?.length).toBe(3);
        cells.forEach((cell, col) => {
          expect(tds?.[col]?.textContent).toBe(cell);
        });
      });
    });

    it('renders section #step8 with exploratory testing points list and source callout', () => {
      const { container } = render(<Page />);
      const step8 = container.querySelector('section#step8');
      expect(step8).not.toBeNull();

      const h2 = step8?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ8: 探索的テストという技法');

      const expectedStep8Points = [
        '同時並行で行う: ソフトウェアについて学びながら、テストを設計し、実行する。',
        'でたらめに触ることではない: 目的を持った調査であり、通常は「チャーター(何を確認したいかの簡潔な宣言)」を用いて範囲を絞る。',
        'タイムボックスで管理する: セッションベースドテストマネジメントなどの手法で、探索の時間と成果を管理する。',
      ];
      const listItems = step8?.querySelectorAll('ul li');
      expect(listItems?.length).toBe(expectedStep8Points.length);
      expectedStep8Points.forEach((text, idx) => {
        expect(listItems?.[idx]?.textContent).toBe(text);
      });

      const callout = step8?.querySelector('.callout.source');
      expect(callout).not.toBeNull();
      expect(callout?.textContent).toContain('Hendrickson');
      expect(step8?.textContent).toContain('Elisabeth Hendrickson');
    });
  });

  describe('Category D (Steps 9-10, Checklist, Pitfalls, References, Footer)', () => {
    it('renders section #step9 with 7 key success factors table and source callout', () => {
      const { container } = render(<Page />);
      const step9 = container.querySelector('section#step9');
      expect(step9).not.toBeNull();

      const h2 = step9?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ9: 成功の鍵となる7つの要因');

      const table = step9?.querySelector('table');
      expect(table).not.toBeNull();
      const expectedSuccessRows = [
        ['1', 'ホールチームアプローチを使う', '品質はテスターだけの責任にしない'],
        ['2', 'アジャイルなテストマインドセットを持つ', 'バグ探しではなく価値の実現を支援する姿勢に切り替える'],
        ['3', '回帰テストを自動化する', '変化に強いチームであるための土台をつくる'],
        ['4', 'フィードバックを提供し、また受け取る', 'デモ・レトロスペクティブ・日々の会話を通じて双方向に'],
        ['5', '基盤となるプラクティスを整える', '継続的インテグレーション、テスト環境、技術的負債の管理など'],
        ['6', '顧客と協働する', 'ビジネス側を向こう側の人にせず、一緒にテストをつくる'],
        ['7', '全体像を見る', '個々のテストではなく、プロダクト全体の価値提供という視点を持つ'],
      ];
      const rows = table?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(expectedSuccessRows.length);
      expectedSuccessRows.forEach((cells, idx) => {
        const tds = rows?.[idx]?.querySelectorAll('td');
        expect(tds?.length).toBe(3);
        cells.forEach((cell, col) => {
          expect(tds?.[col]?.textContent).toBe(cell);
        });
      });

      const callout = step9?.querySelector('.callout.source');
      expect(callout).not.toBeNull();
      expect(callout?.textContent).toContain('InfoQ');
    });

    it('renders section #step10 with evolution timeline and holistic loop diagrams, plus 2 h3 headings', () => {
      const { container } = render(<Page />);
      const step10 = container.querySelector('section#step10');
      expect(step10).not.toBeNull();

      const h2 = step10?.querySelector('h2');
      expect(h2?.textContent).toContain('ステップ10: この本の思想はどう進化したか(2014〜2026)');

      const h3s = step10?.querySelectorAll('h3');
      expect(h3s?.length).toBe(2);
      expect(h3s?.[0]?.textContent).toContain('1. ホリスティックテスティング(Holistic Testing Model)');
      expect(h3s?.[1]?.textContent).toContain('2. AI・エージェント型QEへの拡張');

      const captions = step10?.querySelectorAll('.mmd-caption');
      expect(captions?.length).toBe(2);
      expect(captions?.[0]?.textContent).toContain('図7: 本書の思想の進化タイムライン');
      expect(captions?.[1]?.textContent).toContain('図8: Holistic Testing Model における継続的なテストの円環');
    });

    it('renders section #checklist with 7 action items', () => {
      const { container } = render(<Page />);
      const checklistSection = container.querySelector('section#checklist');
      expect(checklistSection).not.toBeNull();

      const h2 = checklistSection?.querySelector('h2');
      expect(h2?.textContent).toContain('実践チェックリスト: 明日から始める7ステップ');

      const expectedChecklist = [
        'チーム全員で「品質は誰の責任か」を話し合い、ホールチームアプローチを合言葉にする',
        '現在のテストを4象限(Q1〜Q4)に仕分けし、抜け・偏りを可視化する',
        '最も増やしやすいユニットテスト(Q1)から自動化の土台を作り始める',
        'ストーリー着手前にPower of Three(プロダクトオーナー・開発者・テスター)で会話する時間を確保する',
        '探索的テストの時間をイテレーションに明示的に組み込み、チャーターを書く習慣をつける',
        'イテレーションの終わりに、7つの成功要因のどれが弱いかをふりかえりで確認する',
        'AIツールを導入する場合も、「チームでの協働」を置き換えるのではなく補強する形で使う',
      ];
      const items = checklistSection?.querySelectorAll('ul.checklist li');
      expect(items?.length).toBe(expectedChecklist.length);
      expectedChecklist.forEach((text, idx) => {
        expect(items?.[idx]?.textContent).toBe(text);
      });
    });

    it('renders section #pitfalls with 5 common pitfalls table', () => {
      const { container } = render(<Page />);
      const pitfalls = container.querySelector('section#pitfalls');
      expect(pitfalls).not.toBeNull();

      const h2 = pitfalls?.querySelector('h2');
      expect(h2?.textContent).toContain('よくある落とし穴');

      const table = pitfalls?.querySelector('table');
      expect(table).not.toBeNull();
      const expectedPitfallRows = [
        [
          'テスターだけが品質責任者になっている',
          '開発者がテストに無関心、リリース前にテスターだけが忙しい',
          'ホールチームアプローチをふりかえりで再確認する',
        ],
        [
          'Q1・Q4を軽視している',
          '手動のQ2・Q3ばかりでリグレッションの自動防御がない',
          'まずQ1(ユニットテスト)から自動化に着手する',
        ],
        [
          '4象限を実施順序だと誤解している',
          'Q1が終わらないとQ2に進めないと思い込む',
          '4象限は分類のための思考ツールであり、順序ではないと理解する',
        ],
        [
          '探索的テストを行き当たりばったりの作業だと誤解している',
          '成果が記録されず再現できない',
          'チャーターとセッションベースドテストマネジメントを導入する',
        ],
        [
          'E2Eテストに偏重している',
          'テストが遅く、頻繁に壊れる',
          'テストピラミッドの比率を見直し、下位レイヤーを厚くする',
        ],
      ];
      const rows = table?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(expectedPitfallRows.length);
      expectedPitfallRows.forEach((cells, idx) => {
        const tds = rows?.[idx]?.querySelectorAll('td');
        expect(tds?.length).toBe(3);
        cells.forEach((cell, col) => {
          expect(tds?.[col]?.textContent).toBe(cell);
        });
      });
    });

    it('renders section #references with 4 ref-groups and 16 external links having proper target and rel', () => {
      const { container } = render(<Page />);
      const references = container.querySelector('section#references');
      expect(references).not.toBeNull();

      const h2 = references?.querySelector('h2');
      expect(h2?.textContent).toContain('参考文献・出典URL');

      // 4 グループ × 全 16 件を「グループ見出し・出典名・URL」まで文書順に 1 対 1 で検証する
      const expectedRefGroups: { heading: string; items: [string, string][] }[] = [
        {
          heading: '書籍情報',
          items: [
            [
              "Lisa Crispin, Janet Gregory. Agile Testing: A Practical Guide for Testers and Agile Teams(O'Reilly掲載ページ / 目次)",
              'https://www.oreilly.com/library/view/agile-testing-a/9780321616944/',
            ],
            [
              'Amazon 書籍ページ(書誌情報)',
              'https://www.amazon.com/Agile-Testing-Practical-Guide-Testers/dp/0321534468',
            ],
          ],
        },
        {
          heading: 'Lisa Crispin のブログ',
          items: [
            [
              '"The Agile Testing Quadrants"(2024年・最新版4象限図)',
              'https://lisacrispin.com/2024/10/11/the-agile-testing-quadrants/',
            ],
            [
              '"Using the Agile Testing Quadrants"(2011年)',
              'https://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/',
            ],
            [
              '"The Whole Team Approach"(2009年)',
              'https://lisacrispin.com/2009/01/30/the-whole-team-approach/',
            ],
            [
              '"Learn how to apply the Holistic Testing Model"(2023年)',
              'https://lisacrispin.com/2023/05/15/holistic-testing-model-mini-book/',
            ],
            [
              '"AI, testing, and the DORA AI Capabilities Model"(2026年4月)',
              'https://lisacrispin.com/2026/04/20/ai-testing-and-the-dora-ai-capabilities-model/',
            ],
          ],
        },
        {
          heading: 'Martin Fowler / ThoughtWorks',
          items: [
            ['"TestPyramid"(Bliki)', 'https://martinfowler.com/bliki/TestPyramid.html'],
            [
              'Ham Vocke, "The Practical Test Pyramid"',
              'https://martinfowler.com/articles/practical-test-pyramid.html',
            ],
            [
              '"On the Diverse And Fantastical Shapes of Testing"(2021年)',
              'https://martinfowler.com/articles/2021-test-shapes.html',
            ],
          ],
        },
        {
          heading: 'その他の著名な専門家・出典',
          items: [
            [
              'Jeff Langr, Tim Ottinger, "Ten Principles for Agile Testers", Agile in a Flash(2009年)',
              'https://agileinaflash.blogspot.com/2009/03/ten-principles-for-agile-testers.html',
            ],
            [
              'Elisabeth Hendrickson, Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing(Pragmatic Programmers)',
              'https://pragprog.com/titles/ehxta/explore-it/',
            ],
            [
              'Gojko Adzic, "Agile Testing (Crispin/Gregory) is a great book, long overdue"(書評)',
              'https://gojko.net/2009/02/23/agile-testing-crispingregory-is-a-great-book-long-overdue/',
            ],
            [
              'Tech Lead Journal, "#92 - Agile and Holistic Testing - Janet Gregory & Lisa Crispin"(2022年)',
              'https://techleadjournal.dev/episodes/92/',
            ],
            [
              'PMI Disciplined Agile, "Testing Quadrants"(4象限の背景解説)',
              'https://www.pmi.org/disciplined-agile/agile/testingquadrants',
            ],
            [
              'InfoQ, "Book Excerpt: Agile Testing"(第21章 Key Success Factors の抜粋紹介)',
              'https://www.infoq.com/articles/agile-testing-book-excerpt/',
            ],
          ],
        },
      ];

      const refGroups = references?.querySelectorAll('.ref-group');
      expect(refGroups?.length).toBe(expectedRefGroups.length);
      expectedRefGroups.forEach((group, gIdx) => {
        const groupEl = refGroups?.[gIdx];
        expect(groupEl?.querySelector('h3')?.textContent?.trim()).toBe(group.heading);

        const groupItems = groupEl?.querySelectorAll('li.ref-item');
        expect(groupItems?.length).toBe(group.items.length);
        group.items.forEach(([title, url], iIdx) => {
          const item = groupItems?.[iIdx];
          expect(item?.querySelector('.ref-title')?.textContent).toBe(title);
          const anchor = item?.querySelector('a.ref-url');
          expect(anchor?.getAttribute('href')).toBe(url);
          expect(anchor?.textContent).toBe(url);
          expect(anchor?.getAttribute('target')).toBe('_blank');
          expect(anchor?.getAttribute('rel')).toBe('noopener noreferrer');
        });
      });

      const links = references?.querySelectorAll('a.ref-url');
      expect(links?.length).toBe(16);
    });

    it('renders footer with copyright and educational notice', () => {
      const { container } = render(<Page />);
      const footer = container.querySelector('footer');
      expect(footer).not.toBeNull();
      expect(footer?.textContent).toContain('本ガイドは2026年9月2日時点で確認できる公開情報をもとに作成しています');
    });
  });

  describe('Diagram Inventory', () => {
    it('renders all 8 mermaid diagram captions in document order', () => {
      const { container } = render(<Page />);
      const expectedCaptions = [
        '図1: 従来型(テスト後工程型)の開発フロー',
        '図2: アジャイルにおける継続的テストフロー',
        '図3: ホールチームアプローチの構造',
        '図4: テスト自動化戦略における3つのレイヤー',
        '図5: Power of Three による共通理解の形成',
        '図6: テスターのイテレーションサイクル',
        '図7: 本書の思想の進化タイムライン',
        '図8: Holistic Testing Model における継続的なテストの円環',
      ];
      const captions = container.querySelectorAll('.mmd-caption');
      expect(captions.length).toBe(expectedCaptions.length);
      expectedCaptions.forEach((text, idx) => {
        expect(captions[idx]?.textContent?.trim()).toBe(text);
      });
    });
  });

  describe('Diagram Paper Theme Styling (Faithful Recreation)', () => {
    it('applies editorial paper theme variables to all 8 mermaid diagrams', async () => {
      renderedCharts.length = 0;
      render(<Page />);
      // Mermaid の描画は useEffect 内の async 処理（document.fonts.ready 待ち）を経るため、
      // 8 図すべてが mermaid.render() に渡されるまで待つ。
      await waitFor(() => expect(renderedCharts.length).toBe(8));

      renderedCharts.forEach((chart) => {
        expect(chart).toContain('%%{init:');
        expect(chart).toContain('"theme": "base"');
        expect(chart).toContain('"primaryColor": "#fffaf0"');
        expect(chart).toContain('"primaryTextColor": "#2b2416"');
        expect(chart).toContain('"primaryBorderColor": "#4c3fae"');
        expect(chart).toContain('"edgeLabelBackground": "#faf6ee"');
      });
    });
  });
});
