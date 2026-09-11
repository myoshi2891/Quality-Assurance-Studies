import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/leading-quality-guide/page';
import NavBar, { NAV_ITEMS } from '../../app/leading-quality-guide/NavBar';

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

describe('Leading Quality Guide - Category A (Foundation, Hero, NavBar, Intro & #why)', () => {
  it('renders within the scoped root container', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.leading-quality-page');
    expect(root).not.toBeNull();
  });

  it('renders hero section with kicker, h1, lede, and book-card info', () => {
    render(<Page />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toBe('品質を、経営の言葉で語れるリーダーになる。');

    expect(screen.getByText('LEADERSHIP × QUALITY ENGINEERING GUIDE')).not.toBeNull();
    expect(
      screen.getByText(/『Leading Quality』が説く、品質をテストチームの仕事から経営アジェンダへと引き上げるための10のステップ/)
    ).not.toBeNull();

    expect(
      screen.getByText('Leading Quality: How Great Leaders Deliver High-Quality Software and Accelerate Growth')
    ).not.toBeNull();
    expect(
      screen.getByText(/著者：Ronald Cummings-John \/ Owais Peer（Global App Testing 共同創業者）/)
    ).not.toBeNull();
    expect(
      screen.getByText(/流通している副題「Build Winning Teams and Software Fast」は、実際に出版されている正式な副題ではありません/)
    ).not.toBeNull();
  });

  it('renders all 14 navigation items in NavBar', () => {
    render(<NavBar />);
    expect(NAV_ITEMS).toHaveLength(14);
    expect(NAV_ITEMS[0]).toEqual({ href: '#why', label: 'なぜ品質は経営課題か' });
    expect(NAV_ITEMS[1]).toEqual({ href: '#step1', label: 'Step 1 — 品質ナラティブ' });
    expect(NAV_ITEMS[2]).toEqual({ href: '#step2', label: 'Step 2 — 所有権' });
    expect(NAV_ITEMS[3]).toEqual({ href: '#step3', label: 'Step 3 — How-to-Test' });
    expect(NAV_ITEMS[4]).toEqual({ href: '#step4', label: 'Step 4 — 価値の言語化' });
    expect(NAV_ITEMS[5]).toEqual({ href: '#step5', label: 'Step 5 — 成熟度戦略' });
    expect(NAV_ITEMS[6]).toEqual({ href: '#step6', label: 'Step 6 — 継続的テスト' });
    expect(NAV_ITEMS[7]).toEqual({ href: '#step7', label: 'Step 7 — ペアリング' });
    expect(NAV_ITEMS[8]).toEqual({ href: '#step8', label: 'Step 8 — ローカルペルソナ' });
    expect(NAV_ITEMS[9]).toEqual({ href: '#step9', label: 'Step 9 — 本番テスト' });
    expect(NAV_ITEMS[10]).toEqual({ href: '#step10', label: 'Step 10 — ビジョン' });
    expect(NAV_ITEMS[11]).toEqual({ href: '#roadmap', label: 'まとめ：ロードマップ' });
    expect(NAV_ITEMS[12]).toEqual({ href: '#experts', label: '専門家の評価' });
    expect(NAV_ITEMS[13]).toEqual({ href: '#sources', label: '参考文献・出典' });
  });

  it('renders introduction section with 3-part table and all 9 mermaid diagrams', async () => {
    const { container } = render(<Page />);
    expect(
      screen.getByText(/本書は3部構成で、品質を「テストチームの仕事」から「経営・リーダーシップの課題」へと引き上げる考え方を説きます/)
    ).not.toBeNull();

    const tables = container.querySelectorAll('table');
    expect(tables.length).toBeGreaterThanOrEqual(1);
    const introTable = tables[0];
    expect(introTable).toBeDefined();

    // 3 部構成表を「セクション・テーマ・対応ステップ」まで出現順に 1 対 1 で検証する
    const expectedIntroHeaders = ['セクション', 'テーマ', '対応ステップ'];
    const introHeaders = introTable?.querySelectorAll('thead th');
    expect(introHeaders?.length).toBe(expectedIntroHeaders.length);
    expectedIntroHeaders.forEach((header, col) => {
      expect(introHeaders?.[col]?.textContent).toBe(header);
    });

    const expectedIntroRows = [
      [
        'Section 1',
        '品質リーダーになる（Becoming a Leader of Quality）',
        'Step 1〜4',
      ],
      [
        'Section 2',
        '戦略的な品質判断を極める（Mastering Your Strategic Quality Decisions）',
        'Step 5〜8',
      ],
      [
        'Section 3',
        'チームを率いて成長を加速する（Leading Your Team to Accelerate Growth）',
        'Step 9〜10',
      ],
    ];
    const introRows = introTable?.querySelectorAll('tbody tr');
    expect(introRows?.length).toBe(expectedIntroRows.length);
    expectedIntroRows.forEach((cells, idx) => {
      const tds = introRows?.[idx]?.querySelectorAll('td');
      expect(tds?.length).toBe(3);
      cells.forEach((cell, col) => {
        expect(tds?.[col]?.textContent).toBe(cell);
      });
    });

    expect(
      screen.getByText(/対象読者は、CTO・VPoE・QAリード・プロダクトオーナーはもちろん/)
    ).not.toBeNull();

    // Mermaid は useEffect 内の async 処理を経て SVG を注入するため、描画完了を待つ。
    const wrappers = container.querySelectorAll('.diagram-live .mermaid-wrapper');
    expect(wrappers.length).toBe(9);
    await waitFor(() => {
      wrappers.forEach((wrapper) => {
        expect(wrapper.querySelector('svg')).not.toBeNull();
      });
    });

    const diagramIds = Array.from(container.querySelectorAll('.diagram-live')).map((el) => el.id);
    expect(diagramIds).toEqual([
      'diag-0',
      'diag-1',
      'diag-2',
      'diag-3',
      'diag-4',
      'diag-5',
      'diag-6',
      'diag-7',
      'diag-8',
    ]);
  });

  it('renders section #why with heading, CISQ data, 3Cs table, American Airlines case, and point callout', () => {
    const { container } = render(<Page />);
    const sectionWhy = container.querySelector('section#why');
    expect(sectionWhy).not.toBeNull();

    const h2 = sectionWhy?.querySelector('h2');
    expect(h2?.textContent).toContain('なぜ品質は「経営課題」なのか');
    expect(h2?.querySelector('.num')?.textContent).toBe('01');

    expect(sectionWhy?.textContent).toContain('低品質なソフトウェアが米国内の組織にもたらした損失は約2.8兆米ドル（USD）');
    expect(sectionWhy?.textContent).toContain('アメリカン航空の休暇スケジューリングシステムの不具合');
    expect(sectionWhy?.textContent).toContain('1万5000便以上のフライト');

    const table3Cs = sectionWhy?.querySelector('table');
    expect(table3Cs).not.toBeNull();
    expect(table3Cs?.textContent).toContain('Customer（顧客）');
    expect(table3Cs?.textContent).toContain('Company（会社）');
    expect(table3Cs?.textContent).toContain('Career（キャリア）');

    const callout = sectionWhy?.querySelector('.callout');
    expect(callout).not.toBeNull();
    expect(callout?.querySelector('.label')?.textContent).toBe('ポイント');
    expect(callout?.textContent).toContain('品質問題は「顧客」「会社」「個人のキャリア」の3方向に同時にダメージを与える');
  });
});

describe('Leading Quality Guide - Category B (Steps 1 to 4: #step1 to #step4)', () => {
  it('renders section #step1 with heading, diag-1 diagram, and 3 narratives table', () => {
    const { container } = render(<Page />);
    const sectionStep1 = container.querySelector('section#step1');
    expect(sectionStep1).not.toBeNull();

    expect(sectionStep1?.querySelector('.step-tag')?.textContent).toBe('STEP 01 / 10');
    expect(sectionStep1?.querySelector('h2')?.textContent).toContain('3つの「品質ナラティブ（物語）」を理解する');
    expect(sectionStep1?.textContent).toContain('品質ナラティブ（Quality Narrative）');

    const table = sectionStep1?.querySelector('table');
    expect(table).not.toBeNull();
    expect(table?.textContent).toContain('所有権');
    expect(table?.textContent).toContain('How-to-Test');
    expect(table?.textContent).toContain('価値');
    expect(table?.textContent).toContain('QA・テスターだけの責任にしてしまう');
    expect(table?.textContent).toContain('銀の弾丸思考');
    expect(table?.textContent).toContain('リスク低減の話ばかりで、売上・成長への貢献を語らない');
  });

  it('renders section #step2 with heading, practical points, and diag-2 diagram', () => {
    const { container } = render(<Page />);
    const sectionStep2 = container.querySelector('section#step2');
    expect(sectionStep2).not.toBeNull();

    expect(sectionStep2?.querySelector('.step-tag')?.textContent).toBe('STEP 02 / 10');
    expect(sectionStep2?.querySelector('h2')?.textContent).toContain('所有権ナラティブ ―― 品質を全員のものにする');
    expect(sectionStep2?.querySelector('h3')?.textContent).toBe('実践のポイント');

    const listItems = sectionStep2?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(sectionStep2?.textContent).toContain('Definition of Done');
    expect(sectionStep2?.textContent).toContain('チーム全体の学び');
    expect(sectionStep2?.textContent).toContain('開発者・デザイナー・PMを必ず同席させる');
  });

  it('renders section #step3 with heading, Elisabeth Hendrickson reference, questions table, and callout', () => {
    const { container } = render(<Page />);
    const sectionStep3 = container.querySelector('section#step3');
    expect(sectionStep3).not.toBeNull();

    expect(sectionStep3?.querySelector('.step-tag')?.textContent).toBe('STEP 03 / 10');
    expect(sectionStep3?.querySelector('h2')?.textContent).toContain('How-to-Testナラティブ ―― 銀の弾丸を捨てる');
    expect(sectionStep3?.textContent).toContain('Elisabeth Hendrickson');

    const table = sectionStep3?.querySelector('table');
    expect(table).not.toBeNull();
    expect(table?.textContent).toContain('知りたいこと（テストの問い）');
    expect(table?.textContent).toContain('適したテストの例');
    expect(table?.textContent).toContain('機能テスト・回帰テスト');
    expect(table?.textContent).toContain('探索的テスト・ユーザビリティテスト');
    expect(table?.textContent).toContain('負荷テスト・パフォーマンステスト');
    expect(table?.textContent).toContain('セキュリティテスト');
    expect(table?.textContent).toContain('監視・本番環境でのテスト');

    const callout = sectionStep3?.querySelector('.callout');
    expect(callout).not.toBeNull();
    expect(callout?.querySelector('.label')?.textContent).toBe('ポイント');
    expect(callout?.textContent).toContain('「何を自動化するか」より先に「何を学びたいか」を定義する');
  });

  it('renders section #step4 with heading, 3 metrics table, Indonesia last name episode, diag-3, and practical points', () => {
    const { container } = render(<Page />);
    const sectionStep4 = container.querySelector('section#step4');
    expect(sectionStep4).not.toBeNull();

    expect(sectionStep4?.querySelector('.step-tag')?.textContent).toBe('STEP 04 / 10');
    expect(sectionStep4?.querySelector('h2')?.textContent).toContain('価値ナラティブ ―― 品質を売上の言葉で語る');
    expect(sectionStep4?.textContent).toContain('growth metric');

    const table = sectionStep4?.querySelector('table');
    expect(table).not.toBeNull();
    expect(table?.textContent).toContain('アテンション型');
    expect(table?.textContent).toContain('トランザクション型');
    expect(table?.textContent).toContain('プロダクティビティ型');
    expect(table?.textContent).toContain('Airbnb');
    expect(table?.textContent).toContain('Slack');

    expect(sectionStep4?.textContent).toContain('姓（Last Name）');
    expect(sectionStep4?.textContent).toContain('インドネシアでは姓を持たない人も多く');

    expect(sectionStep4?.querySelector('h3')?.textContent).toBe('実践のポイント');
    const listItems = sectionStep4?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(sectionStep4?.textContent).toContain('「これは何ドルの節約/損失回避になるか」');
    expect(sectionStep4?.textContent).toContain('事業指標への影響');
  });
});

describe('Leading Quality Guide - Category C (Steps 5 to 8: #step5 to #step8)', () => {
  it('renders section #step5 with heading, diag-4 diagram, and maturity table', () => {
    const { container } = render(<Page />);
    const sectionStep5 = container.querySelector('section#step5');
    expect(sectionStep5).not.toBeNull();

    expect(sectionStep5?.querySelector('.step-tag')?.textContent).toBe('STEP 05 / 10');
    expect(sectionStep5?.querySelector('h2')?.textContent).toContain('プロダクトの成熟度に応じて戦略を変える');

    const table = sectionStep5?.querySelector('table');
    expect(table).not.toBeNull();
    expect(table?.textContent).toContain('プロダクトマーケットフィット期');
    expect(table?.textContent).toContain('予測可能性期');
    expect(table?.textContent).toContain('スケール期');
    expect(table?.textContent).toContain('「正しいものを作れているか」の検証');
    expect(table?.textContent).toContain('自動化への投資を本格化させる');
    expect(table?.textContent).toContain('自動化と探索的テストのバランスを取り直す');
  });

  it('renders section #step6 with heading, definition callout, diag-5 diagram, and benefits list', () => {
    const { container } = render(<Page />);
    const sectionStep6 = container.querySelector('section#step6');
    expect(sectionStep6).not.toBeNull();

    expect(sectionStep6?.querySelector('.step-tag')?.textContent).toBe('STEP 06 / 10');
    expect(sectionStep6?.querySelector('h2')?.textContent).toContain('継続的テスト（Continuous Testing）を設計する');

    const callout = sectionStep6?.querySelector('.callout.definition');
    expect(callout).not.toBeNull();
    expect(callout?.querySelector('.label')?.textContent).toBe('定義');
    expect(callout?.textContent).toContain('継続的テストとは、開発ライフサイクルのあらゆる段階でアプリケーションをテストする能力のことである');

    expect(sectionStep6?.querySelector('h3')?.textContent).toBe('この視点を採用するメリット');
    const listItems = sectionStep6?.querySelectorAll('ul li');
    expect(listItems?.length).toBe(3);
    expect(sectionStep6?.textContent).toContain('問題の先回り');
    expect(sectionStep6?.textContent).toContain('テスタビリティの作り込み');
    expect(sectionStep6?.textContent).toContain('手戻りコストの削減');
  });

  it('renders section #step7 with heading, pairing points, diag-6 diagram, and practical points', () => {
    const { container } = render(<Page />);
    const sectionStep7 = container.querySelector('section#step7');
    expect(sectionStep7).not.toBeNull();

    expect(sectionStep7?.querySelector('.step-tag')?.textContent).toBe('STEP 07 / 10');
    expect(sectionStep7?.querySelector('h2')?.textContent).toContain('ペアリングで品質文化を組織に浸透させる');
    expect(sectionStep7?.textContent).toContain('Atlassian');

    expect(sectionStep7?.querySelector('h3')?.textContent).toBe('実践のポイント');
    const uls = sectionStep7?.querySelectorAll('ul');
    expect(uls?.length).toBe(2);
    expect(sectionStep7?.textContent).toContain('定例のペア作業（モブテスト・ペアテスト）を週次で設定する');
    expect(sectionStep7?.textContent).toContain('相互理解');
  });

  it('renders section #step8 with heading, companies table, and explanation', () => {
    const { container } = render(<Page />);
    const sectionStep8 = container.querySelector('section#step8');
    expect(sectionStep8).not.toBeNull();

    expect(sectionStep8?.querySelector('.step-tag')?.textContent).toBe('STEP 08 / 10');
    expect(sectionStep8?.querySelector('h2')?.textContent).toContain('ローカルペルソナを意識したテスト戦略');

    const table = sectionStep8?.querySelector('table');
    expect(table).not.toBeNull();
    expect(table?.textContent).toContain('Airbnb');
    expect(table?.textContent).toContain('Google（Google Mapsなど）');
    expect(table?.textContent).toContain('Global App Testing（著者らの会社）');
    expect(table?.textContent).toContain('105カ国以上・数万人のテスター');

    expect(sectionStep8?.textContent).toContain('「1つのUIが世界中どこでも同じように機能する」という思い込みを捨てる');
  });
});

describe('Leading Quality Guide - Category D (Steps 9 to 10 & #roadmap)', () => {
  it('renders section #step9 with heading, Cindy Sridharan reference, prerequisite list, and checklist', () => {
    const { container } = render(<Page />);
    const sectionStep9 = container.querySelector('section#step9');
    expect(sectionStep9).not.toBeNull();

    expect(sectionStep9?.querySelector('.step-tag')?.textContent).toBe('STEP 09 / 10');
    expect(sectionStep9?.querySelector('h2')?.textContent).toContain('本番環境でのテスト（Testing in Production）');
    expect(sectionStep9?.textContent).toContain('Cindy Sridharan');
    expect(sectionStep9?.textContent).toContain('すべてのチームに向いているわけではない');

    expect(sectionStep9?.querySelector('h3')?.textContent).toBe('実践のポイント（本番テストを始める前のチェック）');

    const checkboxes = sectionStep9?.querySelectorAll('input[type="checkbox"]');
    expect(checkboxes?.length).toBe(4);
    expect(sectionStep9?.textContent).toContain('フィーチャーフラグなどで機能の有効/無効を即座に切り替えられるか');
    expect(sectionStep9?.textContent).toContain('カナリアリリースや段階的ロールアウトの仕組みがあるか');
    expect(sectionStep9?.textContent).toContain('異常検知・ロールバックを自動化できているか');
    expect(sectionStep9?.textContent).toContain('本番影響を最小化する（一部ユーザーのみ対象にする等）仕組みがあるか');

    // 状態遷移: 未チェック → チェック → 未チェック
    const firstCheckbox = sectionStep9?.querySelector<HTMLInputElement>('input[type="checkbox"]');
    if (!firstCheckbox) throw new Error('チェックリストの先頭チェックボックスが見つかりません');

    expect(firstCheckbox.checked).toBe(false);
    fireEvent.click(firstCheckbox);
    expect(firstCheckbox.checked).toBe(true);
    fireEvent.click(firstCheckbox);
    expect(firstCheckbox.checked).toBe(false);
  });

  it('renders section #step10 with heading, diag-7 diagram, insight callout, and persuasion text', () => {
    const { container } = render(<Page />);
    const sectionStep10 = container.querySelector('section#step10');
    expect(sectionStep10).not.toBeNull();

    expect(sectionStep10?.querySelector('.step-tag')?.textContent).toBe('STEP 10 / 10');
    expect(sectionStep10?.querySelector('h2')?.textContent).toContain('ビジョンを描き、チームを鼓舞する');

    const callout = sectionStep10?.querySelector('.callout.insight');
    expect(callout).not.toBeNull();
    expect(callout?.querySelector('.label')?.textContent).toBe('着眼点');
    expect(callout?.textContent).toContain('個人 → 会社との整合 → チーム');

    expect(sectionStep10?.textContent).toContain('説得力・影響力（Persuasion & Influence）');
  });

  it('renders section #roadmap with heading, diag-8 diagram, and 10-step roadmap table', () => {
    const { container } = render(<Page />);
    const sectionRoadmap = container.querySelector('section#roadmap');
    expect(sectionRoadmap).not.toBeNull();

    const h2 = sectionRoadmap?.querySelector('h2');
    expect(h2?.textContent).toContain('まとめ：品質リーダーへのロードマップ');
    expect(h2?.querySelector('.num')?.textContent).toBe('02');

    const table = sectionRoadmap?.querySelector('table.roadmap-table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(10);
    expect(table?.textContent).toContain('品質ナラティブの理解');
    expect(table?.textContent).toContain('所有権ナラティブ');
    expect(table?.textContent).toContain('How-to-Testナラティブ');
    expect(table?.textContent).toContain('価値ナラティブ');
    expect(table?.textContent).toContain('成熟度に応じた戦略');
    expect(table?.textContent).toContain('継続的テスト');
    expect(table?.textContent).toContain('ペアリング');
    expect(table?.textContent).toContain('ローカルペルソナ');
    expect(table?.textContent).toContain('本番テスト');
    expect(table?.textContent).toContain('ビジョン');
  });
});

describe('Leading Quality Guide - Category E (Experts, Sources, Footer)', () => {
  it('renders section #experts with heading, experts table with 6 leaders, and interview text', () => {
    const { container } = render(<Page />);
    const sectionExperts = container.querySelector('section#experts');
    expect(sectionExperts).not.toBeNull();

    const h2 = sectionExperts?.querySelector('h2');
    expect(h2?.textContent).toContain('国際的な専門家からの評価');
    expect(h2?.querySelector('.num')?.textContent).toBe('03');

    const table = sectionExperts?.querySelector('table');
    expect(table).not.toBeNull();

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(6);
    expect(table?.textContent).toContain('Michael Lopp');
    expect(table?.textContent).toContain('James Bach');
    expect(table?.textContent).toContain('Alan Page');
    expect(table?.textContent).toContain('Dan Ashby');
    expect(table?.textContent).toContain('Ilya Sakharov');
    expect(table?.textContent).toContain('Suyash Sonwalkar');

    expect(sectionExperts?.textContent).toContain('TestGuild');
    expect(sectionExperts?.textContent).toContain('Joe Colantonio');
    expect(sectionExperts?.textContent).toContain('Ben Linders');
  });

  it('renders section #sources with heading, 9 reference links with proper target/rel, and warning callout', () => {
    const { container } = render(<Page />);
    const sectionSources = container.querySelector('section#sources');
    expect(sectionSources).not.toBeNull();

    const h2 = sectionSources?.querySelector('h2');
    expect(h2?.textContent).toContain('参考文献・出典');
    expect(h2?.querySelector('.num')?.textContent).toBe('04');

    const table = sectionSources?.querySelector('table');
    expect(table).not.toBeNull();

    // 9 件の出典を「種別・リンク表示名・href」まで出現順に 1 対 1 で検証する
    const expectedSources = [
      {
        kind: '公式サイト',
        text: 'leadingqualitybook.com',
        href: 'https://www.leadingqualitybook.com/',
      },
      {
        kind: '著者インタビュー（InfoQ）',
        text: 'infoq.com',
        href: 'https://www.infoq.com/articles/book-review-leading-quality/',
      },
      {
        kind: '一次資料（CISQ）',
        text: 'it-cisq.org (PDF)',
        href: 'https://www.it-cisq.org/wp-content/uploads/sites/6/2023/09/The-Cost-of-Poor-Quality-Software-in-the-US-2018-Report.pdf',
      },
      {
        kind: '無料サンプル章',
        text: 'leadingqualitybook.com/#freeFooter',
        href: 'https://www.leadingqualitybook.com/#freeFooter',
      },
      {
        kind: 'ポッドキャスト（TestGuild）',
        text: 'testguild.com',
        href: 'https://testguild.com/podcast/a326-ronald/',
      },
      {
        kind: '書評',
        text: 'djdegrood.wordpress.com',
        href: 'https://djdegrood.wordpress.com/2019/11/28/leading-quality-review-of-the-book-by-ronald-cummings-john-and-owais-peer/',
      },
      {
        kind: '書籍要点まとめ',
        text: 'mentoring-club.com',
        href: 'https://www.mentoring-club.com/bookshelf/ronald-cummings---john-owais-peer-leading-quality---how-great-leaders-deliver-high-quality-software-and-accelerate-growth',
      },
      {
        kind: '書籍販売ページ',
        text: 'amazon.com',
        href: 'https://www.amazon.com/Leading-Quality-Leaders-Software-Accelerate/dp/1916185800',
      },
      {
        kind: '参考記事',
        text: 'medium.com',
        href: 'https://medium.com/@copyconstruct/testing-in-production-the-safe-way-18ca102d0ef1',
      },
    ];

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(expectedSources.length);
    expectedSources.forEach((source, idx) => {
      const tds = rows?.[idx]?.querySelectorAll('td');
      expect(tds?.length).toBe(3);
      expect(tds?.[0]?.textContent).toBe(source.kind);

      const link = tds?.[2]?.querySelector('a');
      expect(link).not.toBeNull();
      expect(link?.textContent).toBe(source.text);
      expect(link?.getAttribute('href')).toBe(source.href);
      expect(link?.getAttribute('target')).toBe('_blank');
      expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    });

    const links = sectionSources?.querySelectorAll('table a');
    expect(links?.length).toBe(expectedSources.length);

    const callout = sectionSources?.querySelector('.callout.warn');
    expect(callout).not.toBeNull();
    expect(callout?.querySelector('.label')?.textContent).toBe('注記');
    expect(callout?.textContent).toContain('Scribd 上の書籍全文のアップロード');
  });

  it('renders footer with copyright/educational notice', () => {
    const { container } = render(<Page />);
    const footer = container.querySelector('footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('Leading Quality 実践ガイド ―― 本ページは教育・学習目的の要約であり');
  });
});
