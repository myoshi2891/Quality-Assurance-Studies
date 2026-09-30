import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'bun:test';
import CtalTmChapter2Page from '../../app/istqb-ctal-tm-chapter2-managing-the-product/page';
import { collectTableInventory, type TableSpec } from '../helpers/table-inventory';

afterEach(() => cleanup());

export const EXPECTED_TOC_HREFS = [
    '#1-本ガイドの読み方と第2章の全体像',
    '#11-ご依頼の製品の管理と公式の章題の対応',
    '#12-第2章で学ぶ3つのテーマ',
    '#13-学習の目的lo一覧と認知レベル',
    '#14-k1-として暗記するキーワード',
    '#15-試験の基本情報istqb公式ページより',
    '#2-シラバス21テストメトリクス',
    '#ステップ1なぜテストにメトリクスが必要なのか',
    '#ステップ2メトリクスを3つに分類する',
    '#ステップ3tm-211テストマネジメント活動ごとのメトリクスの例',
    '#ステップ4tm-212モニタリングコントロール完了の違い',
    '#ステップ5tm-213k4テストレポートを作るために結果を分析する',
    '#3-シラバス22テスト見積り',
    '#ステップ1tm-221テスト見積りとは何を見積ることか',
    '#ステップ2tm-222テスト工数に影響を与える要因',
    '#ステップ3tm-223k4適切なテスト見積り技法を選ぶ',
    '#4-シラバス23欠陥マネジメント',
    '#導入欠陥マネジメントとは',
    '#ステップ1tm-231k3欠陥のライフサイクルと欠陥ワークフロー',
    '#ステップ2tm-232k2機能横断的な欠陥マネジメント',
    '#ステップ3tm-233k2アジャイルチームにおける欠陥マネジメントの特徴',
    '#ステップ4tm-234k2ハイブリッドソフトウェア開発における欠陥マネジメントの課題',
    '#ステップ5tm-235k3欠陥レポートに記載する情報とその使い方',
    '#ステップ6tm-236k2欠陥レポート情報からプロセス改善アクションを導く',
    '#5-章全体のまとめ',
    '#51-第2章の要点1ページまとめ',
    '#52-他の章とのつながり',
    '#53-用語対訳表日本語英語',
    '#54-試験対策のコツk-レベル別',
    '#6-確認問題筆者作成10問',
    '#解答と根拠',
    '#7-参考資料出典一覧',
    '#71-一次情報試験の根拠',
    '#72-サンプル試験istqb公式',
    '#73-シラバスが参照する標準関連シラバス試験範囲外だが理解の助け',
    '#74-本ガイドの根拠の区分と確認が必要な箇所',
];

export const EXPECTED_TABLE_SPECS_CAT1: TableSpec[] = [
    {
        heading: '1.1 ご依頼の「製品の管理」と公式の章題の対応',
        headers: ['呼び方', '内容'],
        rows: 4,
        cols: 2,
        sample: 'ご依頼の表記',
    },
    {
        heading: '1.2 第2章で学ぶ3つのテーマ',
        headers: ['節', 'テーマ', '一言でいうと', '章冒頭に書かれた学習内容'],
        rows: 3,
        cols: 4,
        sample: '2.1',
    },
    {
        heading: '1.3 学習の目的（LO）一覧と認知レベル',
        headers: ['LO', '内容（要約）', 'Kレベル', '試験での聞かれ方の目安'],
        rows: 12,
        cols: 4,
        sample: 'TM-2.1.1',
    },
    {
        heading: '1.4 K1 として暗記するキーワード',
        headers: ['区分', '日本語', '英語'],
        rows: 12,
        cols: 3,
        sample: 'キーワード',
    },
    {
        heading: '1.5 試験の基本情報（ISTQB公式ページより）',
        headers: ['項目', '内容'],
        rows: 4,
        cols: 2,
        sample: '問題数',
    },
];

describe('CTAL-TM v3.0 Chapter 2 - Category 1: 基盤 & 全体像', () => {
    it('renders hero title and meta information', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const h1 = container.querySelector('h1');
        expect(h1).not.toBeNull();
        expect(h1?.textContent).toContain('CTAL-TM v3.0');
        expect(h1?.textContent).toContain('第2章「プロダクトのマネジメント（製品の管理）」初学者向けステップバイステップ解説ガイド');
    });

    it('renders sidebar TOC with all 36 links', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const navLinks = container.querySelectorAll('.sidebar a');
        expect(navLinks.length).toBe(36);
        const hrefs = Array.from(navLinks).map((a) => a.getAttribute('href'));
        expect(hrefs).toEqual(EXPECTED_TOC_HREFS);
    });

    it('renders Category 1 section 1 headings correctly', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const h2 = container.querySelector('[id="1-本ガイドの読み方と第2章の全体像"]');
        expect(h2).not.toBeNull();
        expect(h2?.textContent).toBe('1. 本ガイドの読み方と第2章の全体像');

        const expectedH3Ids = [
            '11-ご依頼の製品の管理と公式の章題の対応',
            '12-第2章で学ぶ3つのテーマ',
            '13-学習の目的lo一覧と認知レベル',
            '14-k1-として暗記するキーワード',
            '15-試験の基本情報istqb公式ページより',
        ];

        expectedH3Ids.forEach((id) => {
            const h3 = container.querySelector(`[id="${id}"]`);
            expect(h3).not.toBeNull();
        });
    });

    it('renders Mermaid DIAGRAM_1 for overview', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const mermaidContainer = container.querySelector('#container-mmd-1');
        expect(mermaidContainer).not.toBeNull();
        const target = container.querySelector('#mmd-1');
        expect(target).not.toBeNull();
    });

    it('renders Category 1 tables (Tables 1-5) matching specifications', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(5);

        EXPECTED_TABLE_SPECS_CAT1.forEach((spec, i) => {
            const actual = tables[i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(spec.heading);
            expect(actual.headers).toEqual(spec.headers as string[]);
            expect(actual.rows).toBe(spec.rows);
            expect(actual.cols).toBe(spec.cols);
            expect(actual.sample).toBe(spec.sample);
        });
    });

    it('renders learning tip callout in Category 1', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const callout = container.querySelector('.callout.callout-practice');
        expect(callout).not.toBeNull();
        expect(callout?.textContent).toContain('学習のヒント');
    });
});

export const EXPECTED_TABLE_SPECS_CAT2: TableSpec[] = [
    {
        heading: 'ステップ2：メトリクスを3つに分類する',
        headers: ['分類', '何を測るか', '例', '答える問い'],
        rows: 3,
        cols: 4,
        sample: 'プロジェクトメトリクス',
    },
    {
        heading: 'ステップ3（TM-2.1.1）：テストマネジメント活動ごとのメトリクスの例',
        headers: ['活動', 'メトリクスの役割'],
        rows: 3,
        cols: 2,
        sample: 'テスト計画',
    },
    {
        heading: 'ステップ3（TM-2.1.1）：テストマネジメント活動ごとのメトリクスの例',
        headers: ['メトリクス', '何を見るか', '使いどころ'],
        rows: 8,
        cols: 3,
        sample: '要件カバレッジ',
    },
    {
        heading: 'ステップ4（TM-2.1.2）：モニタリング・コントロール・完了の違い',
        headers: ['用語', '定義（やさしく言うと）', '具体例'],
        rows: 4,
        cols: 3,
        sample: 'テストメトリクス',
    },
    {
        heading: 'テストレベルによって「使えるメトリクス」が違う',
        headers: ['テストレベル', '主なテストベース', '適したカバレッジ・メトリクスの例'],
        rows: 3,
        cols: 3,
        sample: 'コンポーネントテスト',
    },
    {
        heading: '目的別メトリクスの一覧',
        headers: ['目的', 'メトリクス', '何が分かるか'],
        rows: 10,
        cols: 3,
        sample: 'プロダクトリスク',
    },
    {
        heading: '具体例（架空のデータ）：リリース判定会議向けのテストレポート',
        headers: ['区分', '指標', '値'],
        rows: 7,
        cols: 3,
        sample: 'プロダクトリスク（全20件）',
    },
    {
        heading: '2.1 節でよくある間違い（試験の引っかけ）',
        headers: ['誤解', '正しい理解'],
        rows: 5,
        cols: 2,
        sample: 'テストモニタリングとテスト完了のメトリクスは同じでなければならない',
    },
];

describe('CTAL-TM v3.0 Chapter 2 - Category 2: テストメトリクス (Section 2.1)', () => {
    it('renders section 2.1 heading and learning objectives note', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const h2 = container.querySelector('[id="2-シラバス21テストメトリクス"]');
        expect(h2).not.toBeNull();
        expect(h2?.textContent).toBe('2. 【シラバス2.1】テストメトリクス');
    });

    it('renders all section 2.1 H3 and H4 subheadings', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const expectedSubheadingIds = [
            'ステップ1なぜテストにメトリクスが必要なのか',
            'ステップ2メトリクスを3つに分類する',
            'ステップ3tm-211テストマネジメント活動ごとのメトリクスの例',
            'ステップ4tm-212モニタリングコントロール完了の違い',
            'ステップ5tm-213k4テストレポートを作るために結果を分析する',
            'テストレベルによって使えるメトリクスが違う',
            '報告の形式スナップショットとトレンド',
            '目的別メトリクスの一覧',
            '手順意思決定に役立つテストレポートの作り方ステップバイステップ',
            '具体例架空のデータリリース判定会議向けのテストレポート',
            '21-節でよくある間違い試験の引っかけ',
        ];

        expectedSubheadingIds.forEach((id) => {
            const el = container.querySelector(`[id="${id}"]`);
            expect(el).not.toBeNull();
        });
    });

    it('renders Mermaid DIAGRAM_2, DIAGRAM_3, and DIAGRAM_4', () => {
        const { container } = render(<CtalTmChapter2Page />);
        ['mmd-2', 'mmd-3', 'mmd-4'].forEach((id) => {
            const target = container.querySelector(`[id="${id}"]`);
            expect(target).not.toBeNull();
            const parent = container.querySelector(`[id="container-${id}"]`);
            expect(parent).not.toBeNull();
        });
    });

    it('renders Category 2 tables (Tables 6-13) matching specifications', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(13);

        EXPECTED_TABLE_SPECS_CAT2.forEach((spec, i) => {
            const actual = tables[5 + i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(spec.heading);
            expect(actual.headers).toEqual(spec.headers as string[]);
            expect(actual.rows).toBe(spec.rows);
            expect(actual.cols).toBe(spec.cols);
            expect(actual.sample).toBe(spec.sample);
        });
    });

    it('renders all callouts in Category 2', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const sec2 = container.querySelector('[id="2-シラバス21テストメトリクス"]');
        expect(sec2).not.toBeNull();
        // Section 2.1 contains 7 callouts
        const callouts = container.querySelectorAll('.callout');
        // Category 1 had 1 callout, so total should be at least 8
        expect(callouts.length).toBeGreaterThanOrEqual(8);
    });
});

export const EXPECTED_TABLE_SPECS_CAT3: TableSpec[] = [
    {
        heading: '3つの軸：工数・時間・コスト',
        headers: ['軸', '意味', '問い', 'ポイント'],
        rows: 3,
        cols: 4,
        sample: '工数（effort）',
    },
    {
        heading: 'ステップ2（TM-2.2.2）：テスト工数に影響を与える要因',
        headers: ['区分', '具体的な要因', '影響のしかた（考え方）'],
        rows: 5,
        cols: 3,
        sample: 'プロダクト',
    },
    {
        heading: '技法の分類',
        headers: ['分類', '考え方', '代表的な技法（Foundation Level v4 の 5.1.4 で説明されているもの）'],
        rows: 2,
        cols: 3,
        sample: 'メトリクスベース',
    },
    {
        heading: '技法の選択に影響する5つの要因（シラバス）',
        headers: ['要因', '意味', '例（シラバスの記述）'],
        rows: 5,
        cols: 3,
        sample: '見積り誤差',
    },
    {
        heading: 'シラバスが挙げる選択の目安',
        headers: ['状況', '適した技法の例'],
        rows: 4,
        cols: 2,
        sample: '対象の複雑度が低い',
    },
    {
        heading: '2.2 節でよくある間違い（試験の引っかけ）',
        headers: ['誤解', '正しい理解'],
        rows: 6,
        cols: 2,
        sample: '工数と期間は同じ',
    },
];

describe('CTAL-TM v3.0 Chapter 2 - Category 3: テスト見積り (Section 2.2)', () => {
    it('renders section 2.2 heading and learning objectives note', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const h2 = container.querySelector('[id="3-シラバス22テスト見積り"]');
        expect(h2).not.toBeNull();
        expect(h2?.textContent).toBe('3. 【シラバス2.2】テスト見積り');
        expect(container.textContent).toContain('学習の目的：TM-2.2.1（K2）／TM-2.2.2（K2）／TM-2.2.3（K4）');
    });

    it('renders all section 2.2 H3 and H4 subheadings', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const expectedSubheadingIds = [
            'ステップ1tm-221テスト見積りとは何を見積ることか',
            '3つの軸工数時間コスト',
            '見積りの進め方',
            '時間コスト品質の三角形',
            'ステップ2tm-222テスト工数に影響を与える要因',
            'ステップ3tm-223k4適切なテスト見積り技法を選ぶ',
            '見積りで最初に決めるべき考え方',
            '技法の分類',
            '技法の選択に影響する5つの要因シラバス',
            'シラバスが挙げる選択の目安',
            '計算例架空三点見積り',
            '計算例架空比率による見積り',
            '見積りは一度作って終わりではない',
            '22-節でよくある間違い試験の引っかけ',
        ];

        expectedSubheadingIds.forEach((id) => {
            const el = container.querySelector(`[id="${id}"]`);
            expect(el).not.toBeNull();
        });
    });

    it('renders Mermaid DIAGRAM_5, DIAGRAM_6, and DIAGRAM_7', () => {
        const { container } = render(<CtalTmChapter2Page />);
        ['mmd-5', 'mmd-6', 'mmd-7'].forEach((id) => {
            const target = container.querySelector(`[id="${id}"]`);
            expect(target).not.toBeNull();
            const parent = container.querySelector(`[id="container-${id}"]`);
            expect(parent).not.toBeNull();
        });
    });

    it('renders Category 3 tables (Tables 14-19) matching specifications', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(19);

        EXPECTED_TABLE_SPECS_CAT3.forEach((spec, i) => {
            const actual = tables[13 + i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(spec.heading);
            expect(actual.headers).toEqual(spec.headers as string[]);
            expect(actual.rows).toBe(spec.rows);
            expect(actual.cols).toBe(spec.cols);
            expect(actual.sample).toBe(spec.sample);
        });
    });

    it('renders all callouts in Category 3', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const callouts = container.querySelectorAll('.callout');
        // Category 1: 1, Category 2: 7, Category 3: 6 -> at least 14
        expect(callouts.length).toBeGreaterThanOrEqual(14);
    });

    it('renders calculation pre blocks in Category 3', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const preBlocks = container.querySelectorAll('pre');
        const preTexts = Array.from(preBlocks).map((p) => p.textContent || '');
        const hasFormula1 = preTexts.some((t) => t.includes('期間（稼働日）＝ 60人日 ÷ （3人 × 0.8）＝ 25稼働日'));
        const hasFormula2 = preTexts.some((t) => t.includes('期待値 E ＝ （a ＋ 4m ＋ b） ÷ 6'));
        const hasFormula3 = preTexts.some((t) => t.includes('E  ＝ （10 ＋ 4×16 ＋ 40） ÷ 6'));
        expect(hasFormula1).toBe(true);
        expect(hasFormula2).toBe(true);
        expect(hasFormula3).toBe(true);
    });
});

export const EXPECTED_TABLE_SPECS_CAT4: TableSpec[] = [
    {
        heading: '導入：欠陥マネジメントとは',
        headers: ['用語の違い', '説明'],
        rows: 3,
        cols: 2,
        sample: '欠陥マネジメント',
    },
    {
        heading: '1-2 不正が観察されてから欠陥レポートまで',
        headers: ['段階', '内容'],
        rows: 5,
        cols: 2,
        sample: '静的テスト',
    },
    {
        heading: '1-3 単純な欠陥ワークフロー',
        headers: ['状態', '意味（シラバス）', '典型的な所有者・担当（組織によって異なる）'],
        rows: 5,
        cols: 3,
        sample: 'オープン（新規）',
    },
    {
        heading: '1-4 欠陥ワークフロー設計のよい実践（シラバスの7項目）',
        headers: ['No.', 'ルール', '理由・狙い（考え方）', 'ルールを破ったときの例'],
        rows: 7,
        cols: 4,
        sample: '1',
    },
    {
        heading: '誰が、どのプロセスで欠陥を扱うか',
        headers: ['委員会の構成メンバー（シラバスの例）'],
        rows: 7,
        cols: 1,
        sample: 'テストマネージャー',
    },
    {
        heading: 'ツールと委員会は「コミュニケーションの代用」ではない',
        headers: ['必要な要素', '内容'],
        rows: 4,
        cols: 2,
        sample: 'コミュニケーション',
    },
    {
        heading: '基本方針：軽量でよいが、必要なときはレポートを作る',
        headers: ['欠陥レポートを作成すべき場合', '理由（考え方）'],
        rows: 5,
        cols: 2,
        sample: '他のスプリント活動（開発・テスト・その他）をブロックし、チーム内ですぐに修正できない',
    },
    {
        heading: '形式化のレベルを決める7つの要素',
        headers: ['反映すべき要素', '例（考え方）'],
        rows: 7,
        cols: 2,
        sample: 'チームメンバーの共通の作業場所',
    },
    {
        heading: 'ステップ4（TM-2.3.4・K2）：ハイブリッドソフトウェア開発における欠陥マネジメントの課題',
        headers: ['課題', '何が問題か', '対応の方向性（シラバス）'],
        rows: 3,
        cols: 3,
        sample: '①欠陥の属性と欠陥マネジメントツールの整合性',
    },
    {
        heading: '必須の項目と、ツールが自動で作る項目',
        headers: ['区分', '項目'],
        rows: 12,
        cols: 2,
        sample: 'ほとんどの環境で必須',
    },
    {
        heading: '目的別にグループ化した追加情報',
        headers: ['目的', '追加する情報（シラバスの例）'],
        rows: 4,
        cols: 2,
        sample: '欠陥解決に役立てる',
    },
    {
        heading: '具体例（架空）：欠陥レポートのサンプル',
        headers: ['項目', '記入例'],
        rows: 14,
        cols: 2,
        sample: '識別子（ツールが自動付与）',
    },
    {
        heading: '欠陥情報 → 改善のヒント（シラバスの7つの例）',
        headers: ['No.', '使う欠陥情報', '分析の内容', '導ける改善'],
        rows: 7,
        cols: 4,
        sample: '1',
    },
    {
        heading: '具体例（架空）：混入フェーズ×検出フェーズのマトリクスで「フェーズ内封じ込め」を評価する',
        headers: [
            '混入フェーズ＼検出フェーズ',
            '要件レビュー',
            '設計レビュー',
            'コード／コンポーネントテスト',
            'システムテスト',
            '本番',
            '合計',
            '同じフェーズで検出できた割合',
        ],
        rows: 4,
        cols: 8,
        sample: '要件定義',
    },
    {
        heading: '2.3 節でよくある間違い（試験の引っかけ）',
        headers: ['誤解', '正しい理解'],
        rows: 7,
        cols: 2,
        sample: 'テストが不合格なら必ず欠陥レポートを作る',
    },
];

describe('CTAL-TM v3.0 Chapter 2 - Category 4: 欠陥マネジメント (Section 2.3)', () => {
    it('renders section 2.3 heading and learning objectives note', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const h2 = container.querySelector('[id="4-シラバス23欠陥マネジメント"]');
        expect(h2).not.toBeNull();
        expect(h2?.textContent).toBe('4. 【シラバス2.3】欠陥マネジメント');
    });

    it('renders all section 2.3 H3 and H4 subheadings', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const expectedSubheadingIds = [
            '導入欠陥マネジメントとは',
            '1-1-欠陥は早く見つけて同じフェーズで取り除くほど安い',
            'ステップ1tm-231k3欠陥のライフサイクルと欠陥ワークフロー',
            '1-2-不正が観察されてから欠陥レポートまで',
            '1-3-単純な欠陥ワークフロー',
            '1-4-欠陥ワークフロー設計のよい実践シラバスの7項目',
            '1-5-手順欠陥マネジメントプロセスを実装するtm-231k3',
            'ステップ2tm-232k2機能横断的な欠陥マネジメント',
            '誰がどのプロセスで欠陥を扱うか',
            '委員会トリアージミーティングが行うこと',
            '専任の欠陥マネージャー',
            'ツールと委員会はコミュニケーションの代用ではない',
            'ステップ3tm-233k2アジャイルチームにおける欠陥マネジメントの特徴',
            '基本方針軽量でよいが必要なときはレポートを作る',
            '形式化のレベルを決める7つの要素',
            'ステップ4tm-234k2ハイブリッドソフトウェア開発における欠陥マネジメントの課題',
            'ステップ5tm-235k3欠陥レポートに記載する情報とその使い方',
            '欠陥レポート情報の4つの目的',
            '収集する情報の考え方',
            '必須の項目とツールが自動で作る項目',
            '目的別にグループ化した追加情報',
            '手順欠陥レポート項目を決めて使うk3',
            '具体例架空欠陥レポートのサンプル',
            'ステップ6tm-236k2欠陥レポート情報からプロセス改善アクションを導く',
            '欠陥情報--改善のヒントシラバスの7つの例',
            '具体例架空混入フェーズ検出フェーズのマトリクスでフェーズ内封じ込めを評価する',
            '欠陥を追跡しないことのリスク',
            '23-節でよくある間違い試験の引っかけ',
        ];

        expectedSubheadingIds.forEach((id) => {
            const el = container.querySelector(`[id="${id}"]`);
            expect(el).not.toBeNull();
        });
    });

    it('renders Mermaid DIAGRAM_8 through DIAGRAM_15', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const mmdIds = [
            'mmd-8',
            'mmd-9',
            'mmd-10',
            'mmd-11',
            'mmd-12',
            'mmd-13',
            'mmd-14',
            'mmd-15',
        ];
        mmdIds.forEach((id) => {
            const target = container.querySelector(`[id="${id}"]`);
            expect(target).not.toBeNull();
            const parent = container.querySelector(`[id="container-${id}"]`);
            expect(parent).not.toBeNull();
        });
    });

    it('renders Category 4 tables (Tables 20-34) matching specifications', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(34);

        EXPECTED_TABLE_SPECS_CAT4.forEach((spec, i) => {
            const actual = tables[19 + i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(spec.heading);
            expect(actual.headers).toEqual(spec.headers as string[]);
            expect(actual.rows).toBe(spec.rows);
            expect(actual.cols).toBe(spec.cols);
            expect(actual.sample).toBe(spec.sample);
        });
    });

    it('renders all callouts in Category 4', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const callouts = container.querySelectorAll('.callout');
        // Category 1: 1, Category 2: 7, Category 3: 6, Category 4: 10 -> at least 24
        expect(callouts.length).toBeGreaterThanOrEqual(24);
    });
});

export const EXPECTED_TABLE_SPECS_CAT5: TableSpec[] = [
    {
        heading: '5.1 第2章の要点（1ページまとめ）',
        headers: ['節', '最重要ポイント', '覚え方'],
        rows: 3,
        cols: 3,
        sample: '2.1 テストメトリクス',
    },
    {
        heading: '5.2 他の章とのつながり',
        headers: ['第2章の内容', 'つながる箇所', 'どうつながるか'],
        rows: 7,
        cols: 3,
        sample: 'メトリクスの元になるテスト目的・終了基準',
    },
    {
        heading: '5.3 用語対訳表（日本語・英語）',
        headers: ['日本語', '英語'],
        rows: 17,
        cols: 2,
        sample: 'テストメトリクス',
    },
    {
        heading: '5.4 試験対策のコツ（K レベル別）',
        headers: ['K レベル', '該当LO', '問われ方', '対策'],
        rows: 4,
        cols: 4,
        sample: 'K2（理解）',
    },
    {
        heading: '6. 確認問題（筆者作成・10問）',
        headers: ['No.', '問題', '関連LO'],
        rows: 10,
        cols: 3,
        sample: 'Q1',
    },
    {
        heading: '解答と根拠',
        headers: ['No.', '解答', '根拠'],
        rows: 10,
        cols: 3,
        sample: 'Q1',
    },
    {
        heading: '7.1 一次情報（試験の根拠）',
        headers: ['資料名', 'URL', '用途'],
        rows: 6,
        cols: 3,
        sample: 'ISTQB CTAL-TM v3.0 認定ページ',
    },
    {
        heading: '7.2 サンプル試験（ISTQB公式）',
        headers: ['資料名', 'URL'],
        rows: 4,
        cols: 2,
        sample: 'CTAL-TM Sample Exam A – Questions',
    },
    {
        heading: '7.3 シラバスが参照する標準・関連シラバス（試験範囲外だが理解の助け）',
        headers: ['資料', '備考'],
        rows: 3,
        cols: 2,
        sample: 'ISO/IEC/IEEE 29119-2（テストプロセス）、29119-3（テストドキュメント）',
    },
    {
        heading: '7.4 本ガイドの根拠の区分と、確認が必要な箇所',
        headers: ['区分', '内容'],
        rows: 4,
        cols: 2,
        sample: 'シラバスの記述に基づく',
    },
];

describe('CTAL-TM v3.0 Chapter 2 - Category 5: まとめ・確認問題・出典 (Sections 5-7)', () => {
    it('renders Section 5, 6, and 7 main headings', () => {
        const { container } = render(<CtalTmChapter2Page />);
        ['5-章全体のまとめ', '6-確認問題筆者作成10問', '7-参考資料出典一覧'].forEach((id) => {
            const h2 = container.querySelector(`[id="${id}"]`);
            expect(h2).not.toBeNull();
        });
    });

    it('renders all section 5-7 subheadings', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const expectedSubheadingIds = [
            '51-第2章の要点1ページまとめ',
            '52-他の章とのつながり',
            '53-用語対訳表日本語英語',
            '54-試験対策のコツk-レベル別',
            '解答と根拠',
            '71-一次情報試験の根拠',
            '72-サンプル試験istqb公式',
            '73-シラバスが参照する標準関連シラバス試験範囲外だが理解の助け',
            '74-本ガイドの根拠の区分と確認が必要な箇所',
        ];

        expectedSubheadingIds.forEach((id) => {
            const el = container.querySelector(`[id="${id}"]`);
            expect(el).not.toBeNull();
        });
    });

    it('renders Category 5 tables (Tables 35-44) matching specifications', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBe(44);

        EXPECTED_TABLE_SPECS_CAT5.forEach((spec, i) => {
            const actual = tables[34 + i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(spec.heading);
            expect(actual.headers).toEqual(spec.headers as string[]);
            expect(actual.rows).toBe(spec.rows);
            expect(actual.cols).toBe(spec.cols);
            expect(actual.sample).toBe(spec.sample);
        });
    });

    it('renders all callouts across the page (total 26)', () => {
        const { container } = render(<CtalTmChapter2Page />);
        const callouts = container.querySelectorAll('.callout');
        // Total across entire guide: 26 callouts
        expect(callouts.length).toBe(26);
    });
});


