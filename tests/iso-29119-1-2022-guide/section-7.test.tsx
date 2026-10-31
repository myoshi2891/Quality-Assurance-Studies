import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';
import Section7 from '../../app/iso-29119-1-2022-guide/Section7';

// 原本 archive/html-archive/iso/Iso-29119-1-2022-guide.html の STEP 7 から抽出した固定インベントリ
// （表は全行の全セルを「 | 」で連結した署名。欠落・余剰・順序違いをすべて検出する）
const SOURCE_TABLES: string[][] = [
    [
      '項目 | 説明 | 具体例（学習用）',
      'テストモデル | テスト対象の振る舞いなどを抽象化した表現 | 状態遷移図、決定表、分類木',
      'モデルベーステスト（MBT） | モデルからテストケースを導出するプラクティス | 注文ステータスの状態遷移図から「遷移を1回ずつ通る」ケースを作る'
    ],
    [
      '観点 | スクリプト化テスト | 探索的テスト',
      '規格の定義（趣旨） | 文書化されたテストスクリプトに基づいて行うテスト（通常、手動実行のものを指す） | テスト担当者が、既存の知識、これまでの探索結果、ヒューリスティック（経験則）に基づき、その場でテストを設計・実行する経験ベースのテスト',
      '強み | 再現しやすい、実行者に依存しにくい | 隠れた振る舞いや想定外の相互作用を見つけやすい',
      '弱み | スクリプトにない問題を見つけにくい | 記録や再現の工夫が必要'
    ],
    [
      '分類 | 根拠 | 代表技法（用語定義に登場するもの）',
      '仕様ベース（ブラックボックス） | 外部の入出力（通常は仕様） | 同値分割、境界値分析、決定表テスト、因果グラフ、状態遷移テスト、シナリオテスト、組合せテスト（ペアワイズなど）、ランダムテスト、メタモルフィックテスト、要求ベーステスト',
      '構造ベース（ホワイトボックス） | 内部構造（ソースコードなど） | 文網羅（ステートメント）、分岐（ブランチ）、判定（デシジョン）、MC/DC',
      '経験ベース | テスト担当者の経験 | エラー推測、探索的テスト、チェックリストベース、テストツアー・攻撃・欠陥分類の活用'
    ],
    [
      '同値パーティション | 範囲 | 代表値 | 境界値（2値法の例）',
      '無効（下） | −1以下 | −5 | −1 と 0',
      '子ども | 0〜12 | 6 | 0、12',
      '大人 | 13〜64 | 30 | 13、64',
      'シニア | 65〜120 | 80 | 65、120',
      '無効（上） | 121以上 | 200 | 120 と 121'
    ],
    [
      'ルール | 会員 | クーポン | 割引',
      'R1 | はい | はい | 15%',
      'R2 | はい | いいえ | 5%',
      'R3 | いいえ | はい | 10%',
      'R4 | いいえ | いいえ | 0%'
    ],
    [
      'No. | ブラウザ | OS | 言語',
      '1 | Chrome | Windows | 日本語',
      '2 | Chrome | macOS | 英語',
      '3 | Chrome | Linux | 日本語',
      '4 | Firefox | Windows | 英語',
      '5 | Firefox | macOS | 日本語',
      '6 | Firefox | Linux | 英語',
      '7 | Edge | Windows | 日本語',
      '8 | Edge | macOS | 英語',
      '9 | Edge | Linux | 日本語'
    ],
    [
      'テスト | A | B | C | 結果 | 独立性を示す相手',
      'T1 | 真 | 真 | 偽 | 真 | 基準',
      'T2 | 偽 | 真 | 偽 | 偽 | T1との比較でAが結果を変える',
      'T3 | 真 | 偽 | 偽 | 偽 | T1との比較でBが結果を変える',
      'T4 | 真 | 偽 | 真 | 真 | T3との比較でCが結果を変える'
    ],
    [
      '対象 | メタモルフィック関係 | テスト',
      '検索機能 | 絞り込み条件を追加しても件数は増えない | 条件なしの件数 ≧ 条件ありの件数 を確認',
      '三角関数の実装 | sin(x) と sin(π − x) は数学的に等しい | 複数のxで両者を比較する。浮動小数点では π を正確に表せず丸め誤差が生じるため、厳密な等値比較ではなく、あらかじめ定めた許容誤差（例：差の絶対値が 1e-12 以下）以内かで判定する'
    ],
    [
      '失敗パターンの例 | テスト入力の例',
      '空入力の見落とし | 空文字、空白のみ',
      '文字種の想定外 | 絵文字、全角・半角混在',
      '上限の見落とし | 最大長＋1文字'
    ],
    [
      '手法 | 概要（一般的な説明）',
      'チェックリストベース | 過去の経験をチェック項目にして網羅漏れを防ぐ',
      'ツアー | 機能の「旅行コース」を決めて探索する（例：金融系フローを一巡する）',
      '攻撃 | 典型的な弱点を狙った入力を与える'
    ],
    [
      '種類 | 目的 | 規格の整理（趣旨）',
      '再テスト（確認テスト） | 修正が欠陥を取り除けたか確認 | 不具合を直したあとに行う',
      '回帰テスト | 変更の影響で、変更していない部分が壊れていないか確認 | 修正が正しく動くかではなく、他の部分が偶発的に影響を受けていないかを見る'
    ],
    [
      '項目 | 説明',
      '手動テスト | 人間がテストアイテムに情報を入力し、結果を確認する。ツール・ロボット・実行エンジンは使わない（規格の定義の趣旨）',
      '自動テスト | ツール、ロボット、その他のテスト実行エンジンでテストを実行する',
      '継続的テスト（4.4.8） | 目次にある項目。一般には、開発のパイプラインにテストを組み込み、継続的にフィードバックを得る考え方（詳細は正式版を参照）'
    ],
    [
      '別バージョンの例（規格の例示） | 具体例（学習用）',
      '既存のシステム | 旧システムと新システムの出力を比較（移行プロジェクト）',
      '独立チームが開発したシステム | 同じ仕様から別チームが作った実装と比較',
      '別のプログラミング言語での実装 | Javaの実装とPythonの実装で比較'
    ],
    [
      '項目 | 内容 | 具体例（学習用）',
      'テスト環境 | テスト実行のために必要なハード・ソフト・ネットワークの構成 | 本番に近い構成のステージング環境',
      'テストデータ管理 | テストに使うデータの準備・保護・再利用 | 個人情報を含まないマスキング済みデータ'
    ]
  ];

const SOURCE_DIAGRAM_IDS = ['mmd11', 'mmd12', 'mmd13', 'mmd14', 'mmd15'];

const SOURCE_CALLOUTS = [
  { className: 'callout callout-note', title: 'ポイント', startsWith: '上図は、まえがきの変更点' },
  { className: 'callout callout-note', title: '', startsWith: '規格の用語定義でも、ペアワイズは' },
  { className: 'callout callout-practice', title: '学習のヒント', startsWith: '自動化は「手動をなくす」ことではありません。' },
];

// 原本 STEP 7 にはコードブロック・外部参照リンクが存在しない
const SOURCE_CODE_BLOCKS: string[] = [];
const SOURCE_REFERENCES: string[] = [];

const norm = (el: Element | null | undefined): string =>
  (el?.textContent ?? '').replace(/\s+/g, ' ').trim();

describe('ISO/IEC/IEEE 29119-1:2022 Category 8 (Section 7 - STEP 7)', () => {
  it('renders H2 and 11 H3s with correct IDs and texts', () => {
    const { container } = render(<Section7 />);
    const h2 = container.querySelector('h2#step-7テスト設計と実行44節');
    expect(h2?.textContent?.trim()).toBe('STEP 7：テスト設計と実行（4.4節）');

    const h3s = Array.from(container.querySelectorAll('h3'));
    expect(h3s.map(el => el.id)).toEqual([
      '7-1-テストモデルから実行まで概念図',
      '7-2-テストモデルとモデルベーステスト441442',
      '7-3-スクリプト化テストと探索的テスト443',
      '7-4-テスト技法3つの分類と代表例444',
      '7-5-経験ベースのテスト445',
      '7-6-再テストと回帰テスト446',
      '7-7-手動テストと自動テスト447継続的テスト448',
      '7-8-バックトゥバックテスト449',
      '7-9-abテスト4410',
      '7-10-数学ベースのテストとファズテスト4411',
      '7-11-テスト環境とテストデータ管理44124413'
    ]);
  });

  it('renders 14 tables across various testing techniques', () => {
    const { container } = render(<Section7 />);
    const tables = Array.from(container.querySelectorAll('.table-scroll table'));
    expect(tables.length).toBe(14);

    // Table 1: Model-based testing
    expect(tables[0]?.textContent).toContain('テストモデル');
    expect(tables[0]?.textContent).toContain('モデルベーステスト（MBT）');

    // Table 2: Scripted vs Exploratory
    expect(tables[1]?.textContent).toContain('スクリプト化テスト');
    expect(tables[1]?.textContent).toContain('探索的テスト');

    // Check presence of Equivalence Partitioning, Decision Table, Pairwise, MC/DC, Metamorphic tables
    const allTablesText = tables.map(t => t.textContent).join(' ');
    expect(allTablesText).toContain('同値分割');
    expect(allTablesText).toContain('決定表');
    expect(allTablesText).toContain('ペアワイズ');
    expect(allTablesText).toContain('MC/DC');
    expect(allTablesText).toContain('メタモルフィック');
  });

  it('renders 5 Mermaid diagram containers (DIAGRAM_11 through DIAGRAM_15)', () => {
    const { container } = render(<Section7 />);
    const mmds = Array.from(container.querySelectorAll('.mermaid-diagram'));
    expect(mmds.length).toBe(5);

    const mmdIds = mmds.map(el => el.id);
    expect(mmdIds).toContain('mmd11');
    expect(mmdIds).toContain('mmd12');
    expect(mmdIds).toContain('mmd13');
    expect(mmdIds).toContain('mmd14');
    expect(mmdIds).toContain('mmd15');
  });

  it('matches the source STEP 7 inventory one-to-one in document order', () => {
    const { container } = render(<Section7 />);

    // 表：全行・全セルの署名を出現順で完全一致
    const tables = Array.from(container.querySelectorAll('table')).map((table) =>
      Array.from(table.querySelectorAll('tr')).map((tr) =>
        Array.from(tr.querySelectorAll('th, td')).map((cell) => norm(cell)).join(' | ')
      )
    );
    expect(tables).toEqual(SOURCE_TABLES);

    // 図：ID を出現順で完全一致
    const diagramIds = Array.from(container.querySelectorAll('.mermaid-diagram')).map((el) => el.id);
    expect(diagramIds).toEqual(SOURCE_DIAGRAM_IDS);

    // コールアウト：種別・タイトル・本文冒頭を出現順で完全一致
    const callouts = Array.from(container.querySelectorAll('.callout')).map((el) => {
      const body = norm(el.querySelector('.callout-body'));
      const expected = SOURCE_CALLOUTS.find((c) => body.startsWith(c.startsWith));
      return {
        className: el.className,
        title: norm(el.querySelector('.callout-title')),
        startsWith: expected?.startsWith ?? body,
      };
    });
    expect(callouts).toEqual(SOURCE_CALLOUTS);

    // コードブロック・外部参照：原本どおり 0 件
    const codeBlocks = Array.from(container.querySelectorAll('pre')).map((el) => norm(el));
    expect(codeBlocks).toEqual(SOURCE_CODE_BLOCKS);
    const references = Array.from(container.querySelectorAll('a[href^="http"]')).map(
      (el) => el.getAttribute('href') ?? ''
    );
    expect(references).toEqual(SOURCE_REFERENCES);
  });
});
