import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, mock } from 'bun:test';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/automating-data-quality-monitoring-guide/page';
import NavBar, {
  TOC_GROUPS,
  TOC_ITEMS,
} from '../../app/automating-data-quality-monitoring-guide/NavBar';
import {
  extractSourceDiagrams,
  loadSourceDocument,
  navSignature,
  sectionText,
  structureSignature,
  textBlocks,
} from './source';

/**
 * 移行元 HTML（Automating-data-quality-monitoring-guide.html）を仕様として扱い、
 * 固定配列（1 対 1 照合）と元 HTML との機械的突合の二重でカバレッジを担保する。
 */

const sourceDoc = loadSourceDocument();

const renderedCharts: string[] = [];
let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaid.render = mock(async (_id: string, text: string) => {
    renderedCharts.push(text);
    return { svg: '<svg data-testid="mock-mermaid"></svg>', diagramType: 'flowchart' };
  }) as unknown as typeof mermaid.render;
  window.IntersectionObserver = mock(() => ({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })) as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  mermaid.render = originalMermaidRender;
  window.IntersectionObserver = originalIntersectionObserver;
});

beforeEach(() => {
  renderedCharts.length = 0;
});

afterEach(() => cleanup());

function getSourceSection(id: string): Element {
  const el = sourceDoc.getElementById(id);
  if (!el) throw new Error(`移行元に #${id} が存在しません`);
  return el;
}

function getRenderedSection(container: HTMLElement, id: string): Element {
  const el = container.querySelector(`section#${id}`);
  if (!el) throw new Error(`移行先に section#${id} が存在しません`);
  return el;
}

/** 元 HTML のセクションと、DOM 構造・テキストブロック・全文が一致することを検証する */
function expectSectionMatchesSource(container: HTMLElement, id: string): void {
  const source = getSourceSection(id);
  const rendered = getRenderedSection(container, id);
  expect(structureSignature(rendered)).toEqual(structureSignature(source));
  expect(textBlocks(rendered)).toEqual(textBlocks(source));
  expect(sectionText(rendered)).toBe(sectionText(source));
}

interface TableSummary {
  title: string;
  headers: string[];
  rowLeads: string[];
}

/** セクション内の .table-wrap を出現順に要約する（タイトル・見出し行・各行の先頭セル） */
function summarizeTables(section: Element): TableSummary[] {
  return Array.from(section.querySelectorAll('.table-wrap')).map((wrap) => ({
    title: (wrap.querySelector('.table-title')?.textContent ?? '').trim(),
    headers: Array.from(wrap.querySelectorAll('thead th')).map((th) => (th.textContent ?? '').trim()),
    rowLeads: Array.from(wrap.querySelectorAll('tbody tr')).map((tr) =>
      (tr.firstElementChild?.textContent ?? '').replace(/\s+/g, ' ').trim()
    ),
  }));
}

/** 元スクリプトの Mermaid ソース（dwrap-N → ソース） */
const sourceDiagrams = new Map(extractSourceDiagrams().map((d) => [d.id, d.source]));

function sourceDiagram(id: string): string {
  const source = sourceDiagrams.get(id);
  if (!source) throw new Error(`移行元に ${id} の Mermaid ソースがありません`);
  return source;
}

/**
 * 図が .diagram-wrap#<id> として配置され、元ソースがそのまま Mermaid へ渡されることを検証する。
 * 共通設定（%%{init}%% ディレクティブ）は先頭に 1 つだけ付与される。
 */
async function expectDiagramsRendered(container: HTMLElement, ids: string[]): Promise<void> {
  for (const id of ids) {
    const wrap = container.querySelector(`.diagram-wrap#${id}`);
    expect(wrap, `${id} の .diagram-wrap`).not.toBeNull();
    expect(wrap?.nextElementSibling?.classList.contains('diagram-caption')).toBe(true);
  }
  await waitFor(() => {
    expect(renderedCharts.length).toBe(container.querySelectorAll('.diagram-wrap').length);
  });
  for (const id of ids) {
    const source = sourceDiagram(id);
    const chart = renderedCharts.find((c) => c.endsWith(source));
    expect(chart, `${id} のソースが描画されていない`).toBeDefined();
    const prefix = (chart ?? '').slice(0, (chart ?? '').length - source.length);
    expect(prefix.startsWith('%%{init:')).toBe(true);
    expect(prefix.trimEnd().endsWith('}}%%')).toBe(true);
    expect(prefix).toContain('"theme": "base"');
    expect(prefix).not.toContain("'");
  }
}

function captionTexts(section: Element): string[] {
  return Array.from(section.querySelectorAll('.diagram-caption')).map((c) =>
    (c.textContent ?? '').trim()
  );
}

function headingTexts(section: Element, selector = 'h2, h3, h4'): string[] {
  return Array.from(section.querySelectorAll(selector)).map((h) =>
    (h.textContent ?? '').replace(/\s+/g, ' ').trim()
  );
}

describe('C0: ナビゲーション（NavBar）', () => {
  const EXPECTED_GROUPS = ['はじめに', 'ステップ', '応用・まとめ'];
  const EXPECTED_ITEMS: string[][] = [
    ['intro', 'この記事について'],
    ['book-info', '書籍情報'],
    ['roadmap', '学習ロードマップ'],
    ['step0', 'なぜ経営課題なのか'],
    ['step1', 'データファクトリー'],
    ['step2', '監視の4本柱'],
    ['step3', 'ROIで判断する'],
    ['step4', 'MLモデルの作り方'],
    ['step5', '実データで機能させる'],
    ['step6', '通知設計とアラート疲れ'],
    ['step7', 'スタック全体と統合'],
    ['step8', '本番展開と定着'],
    ['other-cases', '他社事例に学ぶ'],
    ['oss', 'OSSエコシステム'],
    ['checklist', '実践チェックリスト'],
    ['summary', 'まとめ'],
    ['references', '参考文献・出典'],
  ];

  it('TOC_GROUPS が元 HTML のグループ見出しと一致する', () => {
    expect(TOC_GROUPS.map((g) => g.label)).toEqual(EXPECTED_GROUPS);
  });

  it('TOC_ITEMS 17 件が出現順に id とラベルで一致する', () => {
    expect(TOC_ITEMS.map((item) => [item.id, item.label])).toEqual(EXPECTED_ITEMS);
  });

  it('サイドバーが元 HTML の目次（グループ・リンク・アイコン・番号バッジ）と一致する', () => {
    const { container } = render(<NavBar />);
    const sidebar = container.querySelector('.sidebar');
    const sourceSidebar = sourceDoc.querySelector('.sidebar');
    expect(sidebar).not.toBeNull();
    expect(sourceSidebar).not.toBeNull();
    if (!sidebar || !sourceSidebar) return;
    expect(navSignature(sidebar)).toEqual(navSignature(sourceSidebar));
  });

  it('ステップ 0〜8 は番号バッジ、それ以外はアイコンで描画される', () => {
    const { container } = render(<NavBar />);
    const badges = Array.from(container.querySelectorAll('.sidebar .n-num')).map((n) =>
      n.textContent?.trim()
    );
    expect(badges).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8']);
    expect(container.querySelectorAll('.sidebar .nav-a > i.ti').length).toBe(8);
  });

  it('ブランド名（サイドバー・モバイルバー）が元 HTML と一致する', () => {
    const { container } = render(<NavBar />);
    expect(container.querySelector('.sidebar .brand')?.textContent?.trim()).toBe(
      'データ品質モニタリング'
    );
    expect(container.querySelector('.mobile-bar .brand')?.textContent?.trim()).toBe(
      'データ品質モニタリング自動化ガイド'
    );
  });

  it('モバイルトグルでサイドバーとスクリムが開閉し aria-expanded が遷移する', () => {
    const { container } = render(<NavBar />);
    const toggle = container.querySelector('#mobileToggle');
    const sidebar = container.querySelector('#sidebar');
    const scrim = container.querySelector('#scrim');
    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    expect(sidebar?.classList.contains('open')).toBe(false);

    if (!toggle) throw new Error('mobile toggle missing');
    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(sidebar?.classList.contains('open')).toBe(true);
    expect(scrim?.classList.contains('show')).toBe(true);

    if (!scrim) throw new Error('scrim missing');
    fireEvent.click(scrim);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(sidebar?.classList.contains('open')).toBe(false);
  });

  it('現在位置のリンクに aria-current="location" が付与される', () => {
    const { container } = render(<NavBar />);
    const current = container.querySelectorAll('.sidebar .nav-a[aria-current="location"]');
    expect(current.length).toBe(1);
    expect(current[0]?.getAttribute('href')).toBe('#intro');
  });
});

describe('C0: ページ土台とヒーロー・intro', () => {
  it('ページ固有スコープのルートクラスと main/content が存在する', () => {
    const { container } = render(<Page />);
    expect(container.querySelector('.dqm-layout')).not.toBeNull();
    expect(container.querySelector('.dqm-layout > .sidebar')).not.toBeNull();
    expect(container.querySelector('.dqm-layout main.main > .content')).not.toBeNull();
  });

  it('ヒーローのキッカー・h1・書名・リードが元 HTML と一致する', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('#intro .hero');
    expect(hero).not.toBeNull();
    expect(hero?.querySelector('.hero-kicker')?.textContent?.trim()).toBe(
      '初学者向け・ステップバイステップ解説'
    );
    expect(hero?.querySelector('h1')?.textContent?.replace(/\s+/g, '')).toBe(
      'データ品質モニタリングの自動化を学ぶルールベースを超えて機械学習でスケールする方法'
    );
    expect(hero?.querySelector('h1 .book-title')?.textContent?.trim()).toBe(
      'ルールベースを超えて機械学習でスケールする方法'
    );
    expect(hero?.querySelector('p.lead')?.textContent).toContain(
      'Jeremy Stanley, Paige Schwartz 著'
    );
  });

  it('intro の見出し・段落・引用リンク・コールアウトが固定配列と一致する', () => {
    const { container } = render(<Page />);
    const section = getRenderedSection(container, 'intro');
    expect(headingTexts(section, 'h2')).toEqual(['この記事について']);
    expect(section.querySelectorAll(':scope > p').length).toBe(3);

    const refLinks = Array.from(section.querySelectorAll('sup > a')).map((a) =>
      a.getAttribute('href')
    );
    expect(refLinks).toEqual(['#ref1', '#ref2']);

    const callouts = section.querySelectorAll('.callout');
    expect(callouts.length).toBe(1);
    expect(callouts[0]?.classList.contains('tip')).toBe(false);
    expect(callouts[0]?.classList.contains('warn')).toBe(false);
    expect(callouts[0]?.querySelector('i.ti.ti-users')).not.toBeNull();
    expect(callouts[0]?.querySelector('strong')?.textContent).toBe('対象読者');
  });

  it('intro セクションが元 HTML と DOM 構造・テキストともに一致する', () => {
    const { container } = render(<Page />);
    expectSectionMatchesSource(container, 'intro');
  });
});

describe('C1: 書籍情報（book-info）', () => {
  const KV_LABELS = [
    'タイトル',
    '著者',
    '序文',
    '出版社',
    '出版日',
    'ページ数',
    'ISBN',
    '想定読者',
    '参照URL',
  ];

  it('見出しが固定配列と一致する', () => {
    const { container } = render(<Page />);
    const section = getRenderedSection(container, 'book-info');
    expect(headingTexts(section)).toEqual(['書籍情報', '章構成一覧']);
  });

  it('書籍カードの表紙（タイトル・著者・出版社）が元 HTML と一致する', () => {
    const { container } = render(<Page />);
    const card = getRenderedSection(container, 'book-info').querySelector('.book-card');
    expect(card).not.toBeNull();
    expect(card?.querySelector('.book-cover > i.ti.ti-book-2')).not.toBeNull();
    expect(card?.querySelector('.cover-title')?.textContent?.trim()).toBe(
      'Automating Data Quality Monitoring'
    );
    const authors = Array.from(card?.querySelectorAll('.cover-author') ?? []).map((a) =>
      a.textContent?.trim()
    );
    expect(authors).toEqual(['Jeremy Stanley & Paige Schwartz', "O'Reilly Media, 2024"]);
  });

  it('書誌情報の kv-table が 9 行・ラベル順に一致し、外枠のスタイルが保たれる', () => {
    const { container } = render(<Page />);
    const section = getRenderedSection(container, 'book-info');
    const wrap = section.querySelector('.book-card .table-wrap');
    expect(wrap?.getAttribute('style')).toContain('margin');
    expect(wrap?.getAttribute('style')).toContain('border');
    const labels = Array.from(section.querySelectorAll('table.kv-table tbody tr > th')).map((th) =>
      th.textContent?.trim()
    );
    expect(labels).toEqual(KV_LABELS);
  });

  it('参照URL が外部リンク属性（target / rel）付きで描画される', () => {
    const { container } = render(<Page />);
    const link = getRenderedSection(container, 'book-info').querySelector('table.kv-table a.ref-url');
    expect(link?.getAttribute('href')).toBe(
      'https://www.oreilly.com/library/view/automating-data-quality/9781098145927/'
    );
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('章構成一覧の表が 9 行（第1〜8章 + 付録）で一致する', () => {
    const { container } = render(<Page />);
    const tables = summarizeTables(getRenderedSection(container, 'book-info'));
    const chapters = tables.find((t) => t.title === '全8章の構成');
    expect(chapters).toBeDefined();
    expect(chapters?.headers).toEqual(['章', 'タイトル（原題）', '内容の要点']);
    expect(chapters?.rowLeads).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '付録']);
  });

  it('book-info が元 HTML と DOM 構造・テキストともに一致する', () => {
    const { container } = render(<Page />);
    expectSectionMatchesSource(container, 'book-info');
  });
});

describe('C1: 学習ロードマップ（roadmap）', () => {
  it('見出し・図キャプションが固定配列と一致する', () => {
    const { container } = render(<Page />);
    const section = getRenderedSection(container, 'roadmap');
    expect(headingTexts(section)).toEqual(['学習ロードマップ']);
    expect(captionTexts(section)).toEqual(['図1｜Step 0からStep 8までの学習ロードマップ']);
  });

  it('図1 の Mermaid ソースが元 HTML と一致して描画される', async () => {
    const { container } = render(<Page />);
    await expectDiagramsRendered(container, ['dwrap-1']);
  });

  it('roadmap が元 HTML と DOM 構造・テキストともに一致する', () => {
    const { container } = render(<Page />);
    expectSectionMatchesSource(container, 'roadmap');
  });
});

describe('C2: Step 0〜2（経営課題・データファクトリー・4本柱）', () => {
  it('Step 0: 番号バッジ・見出し・事例リスト・初学者向けポイント（tip）が固定配列と一致する', () => {
    const { container } = render(<Page />);
    const section = getRenderedSection(container, 'step0');
    expect(section.querySelector('.step-head .step-badge')?.textContent).toBe('0');
    expect(headingTexts(section)).toEqual(['なぜ「データ品質」が経営課題なのか']);
    expect(section.querySelectorAll(':scope > ul > li').length).toBe(3);
    expect(Array.from(section.querySelectorAll('sup > a')).map((a) => a.getAttribute('href'))).toEqual(
      ['#ref3', '#ref3']
    );

    const callouts = section.querySelectorAll('.callout');
    expect(callouts.length).toBe(1);
    expect(callouts[0]?.classList.contains('tip')).toBe(true);
    expect(callouts[0]?.querySelector('i.ti.ti-bulb')).not.toBeNull();
    expect(callouts[0]?.querySelector('strong')?.textContent).toBe('初学者向けポイント');
  });

  it('Step 1: 見出し・表・図キャプション・リストが固定配列と一致する', () => {
    const { container } = render(<Page />);
    const section = getRenderedSection(container, 'step1');
    expect(section.querySelector('.step-head .step-badge')?.textContent).toBe('1');
    expect(headingTexts(section)).toEqual([
      'データファクトリーという視点で劣化の原因をつかむ',
      '工場のどこで品質が壊れるか',
      'データの「傷」と「ショック」',
    ]);
    expect(summarizeTables(section)).toEqual([
      {
        title: '物理工場とデータファクトリーの対応関係',
        headers: ['観点', '物理工場', 'データファクトリー'],
        rowLeads: ['入力', '加工', '人の関与', '出力'],
      },
    ]);
    expect(captionTexts(section)).toEqual([
      '図2｜データファクトリーで品質が壊れる8つの起点',
      '図3｜データの傷とデータショックのサイクル',
    ]);
    const terms = Array.from(section.querySelectorAll(':scope > ul > li > strong')).map((s) =>
      s.textContent?.trim()
    );
    expect(terms).toEqual(['データ傷（Data scars）', 'データショック（Data shocks）']);
  });

  it('Step 2: 見出し・比較表・4本柱の解説・注意点（warn）が固定配列と一致する', () => {
    const { container } = render(<Page />);
    const section = getRenderedSection(container, 'step2');
    expect(section.querySelector('.step-head .step-badge')?.textContent).toBe('2');
    expect(headingTexts(section)).toEqual(['監視の4本柱を理解する', '4本柱の比較表']);
    expect(summarizeTables(section)).toEqual([
      {
        title: '4本柱の特性比較',
        headers: ['特性', 'データ観測性', '検証ルール', '主要指標', '教師なしML'],
        rowLeads: [
          '導入の速さ',
          'スケールのしやすさ',
          '未知の未知を検知できるか',
          '履歴を加味するか',
          '針の中の一本を見つける精度',
          '既存の問題を発見できるか',
          'テーブルの一部だけを厳密に監視',
        ],
      },
    ]);
    expect(captionTexts(section)).toEqual(['図4｜監視の4本柱']);
    const pillars = Array.from(section.querySelectorAll(':scope > ul > li > strong')).map((s) =>
      s.textContent?.trim()
    );
    expect(pillars).toEqual(['データ観測性', '検証ルール', '主要指標', '教師なし機械学習']);

    const warn = section.querySelectorAll('.callout.warn');
    expect(warn.length).toBe(1);
    expect(warn[0]?.querySelector('i.ti.ti-alert-triangle')).not.toBeNull();
    expect(warn[0]?.querySelector('strong')?.textContent).toBe('注意点');
  });

  it('図2〜4 の Mermaid ソースが元 HTML と一致して描画される', async () => {
    const { container } = render(<Page />);
    await expectDiagramsRendered(container, ['dwrap-2', 'dwrap-3', 'dwrap-4']);
  });

  it.each(['step0', 'step1', 'step2'])('%s が元 HTML と DOM 構造・テキストともに一致する', (id) => {
    const { container } = render(<Page />);
    expectSectionMatchesSource(container, id);
  });
});

describe('C3: Step 3〜4（ROI 判断・教師なし ML モデル）', () => {
  it('Step 3: 見出し・4V 表・箇条書き・図5 が固定配列と一致する', () => {
    const { container } = render(<Page />);
    const section = getRenderedSection(container, 'step3');
    expect(section.querySelector('.step-head .step-badge')?.textContent).toBe('3');
    expect(headingTexts(section)).toEqual([
      '自社に自動化が必要か？ ROI（投資対効果）で判断する',
      'データの特性で判断する（4つのV）',
      '業界・データ成熟度・ステークホルダーの観点',
      '概算ROIの考え方',
    ]);
    expect(summarizeTables(section)).toEqual([
      {
        title: '4Vによる自動化適性の判断軸',
        headers: ['観点', '自動化の効果が高い', '自動化の効果が低い'],
        rowLeads: [
          'データ量（Volume）',
          'データ種別（Variety）',
          '更新頻度（Velocity）',
          'リスクプロファイル（Veracity）',
        ],
      },
    ]);
    expect(captionTexts(section)).toEqual(['図5｜自動化ROI試算の流れ']);

    const lists = Array.from(section.querySelectorAll(':scope > ul')).map((ul) =>
      Array.from(ul.querySelectorAll(':scope > li > strong')).map((s) => s.textContent?.trim())
    );
    expect(lists).toEqual([
      ['業界特性', 'データ成熟度', 'ステークホルダー別の便益'],
      ['効果', 'リスク'],
    ]);
  });

  it('Step 4: 見出し（h3 / h4）・補足コールアウト・表 3 つが固定配列と一致する', () => {
    const { container } = render(<Page />);
    const section = getRenderedSection(container, 'step4');
    expect(section.querySelector('.step-head .step-badge')?.textContent).toBe('4');
    expect(headingTexts(section)).toEqual([
      '教師なし機械学習モデルの作り方',
      'モデルに求める4つの性質（ウィッシュリスト）',
      'コアとなるアイデア：「今日のデータは今日のものか？」を機械学習に当てさせる',
      'モデル構築で考慮すべき4つの論点',
      '① データサンプリング',
      '② 特徴量エンコーディング',
      '③ モデルアーキテクチャ：勾配ブースティング決定木',
      '④ モデルの説明可能性：SHAP値',
    ]);
    expect(headingTexts(section, 'h4')).toEqual([
      '① データサンプリング',
      '② 特徴量エンコーディング',
      '③ モデルアーキテクチャ：勾配ブースティング決定木',
      '④ モデルの説明可能性：SHAP値',
    ]);

    const callouts = section.querySelectorAll('.callout');
    expect(callouts.length).toBe(1);
    expect(callouts[0]?.classList.contains('tip')).toBe(false);
    expect(callouts[0]?.classList.contains('warn')).toBe(false);
    expect(callouts[0]?.querySelector('i.ti.ti-info-circle')).not.toBeNull();

    expect(summarizeTables(section)).toEqual([
      {
        title: 'モデルに求める4つの性質',
        headers: ['性質', '意味', '具体例'],
        rowLeads: [
          '感度（Sensitivity）',
          '特異度（Specificity）',
          '透明性（Transparency）',
          'スケーラビリティ（Scalability）',
        ],
      },
      {
        title: 'モデルの非要件',
        headers: ['非要件', '理由'],
        rowLeads: [
          '個々の不正レコードの特定',
          'リアルタイム処理',
          '既存の問題の発見',
          'タイムスタンプのないテーブルの監視',
          '外れ値（outlier）の検出',
        ],
      },
      {
        title: '代表的な特徴量エンコード方式',
        headers: ['エンコード種別', '内容'],
        rowLeads: ['numeric', 'frequency', 'isNull', 'secondOfDay / timeDelta', 'OneHot'],
      },
    ]);
    expect(captionTexts(section)).toEqual([
      '図6｜教師なしMLモデルの核心アイデア',
      '図7｜MLモデル構築の4つの関心事',
      '図8｜勾配ブースティング決定木の仕組み',
    ]);
  });

  it('Step 4: サンプリングの 3 観点・TABLESAMPLE の code・外部リンクが一致する', () => {
    const { container } = render(<Page />);
    const section = getRenderedSection(container, 'step4');
    const samplingTerms = Array.from(
      section.querySelectorAll(':scope > ul:first-of-type > li > strong')
    ).map((s) => s.textContent?.trim());
    expect(samplingTerms).toEqual(['何を', 'どれくらい', 'どうやって']);
    expect(section.querySelector('li code')?.textContent).toBe('TABLESAMPLE');

    const external = Array.from(section.querySelectorAll('a[target="_blank"]')).map((a) => [
      a.getAttribute('href'),
      a.getAttribute('rel'),
    ]);
    expect(external).toEqual([
      ['https://xgboost.readthedocs.io/en/latest/index.html', 'noopener noreferrer'],
      ['https://shap.readthedocs.io/en/latest/index.html', 'noopener noreferrer'],
    ]);
  });

  it('図5〜8 の Mermaid ソースが元 HTML と一致して描画される', async () => {
    const { container } = render(<Page />);
    await expectDiagramsRendered(container, ['dwrap-5', 'dwrap-6', 'dwrap-7', 'dwrap-8']);
  });

  it.each(['step3', 'step4'])('%s が元 HTML と DOM 構造・テキストともに一致する', (id) => {
    const { container } = render(<Page />);
    expectSectionMatchesSource(container, id);
  });
});
