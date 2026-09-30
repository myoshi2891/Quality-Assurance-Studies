import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'bun:test';
import CtalTmChapter1Page from '../../app/istqb-ctal-tm-chapter1-managing-the-test-activities/page';
import { collectTableInventory, type TableSpec } from '../helpers/table-inventory';

afterEach(() => cleanup());

describe('CTAL-TM v3.0 Chapter 1 - Category 1: Scaffolding, NavBar, Hero & sec-1 (このガイドの使い方)', () => {
    it('renders the page container and main structure with ctal-tm-ch1-page class', () => {
        const { container } = render(<CtalTmChapter1Page />);
        const pageLayout = container.querySelector('.ctal-tm-ch1-page');
        expect(pageLayout).toBeTruthy();
        expect(screen.getByRole('navigation')).toBeTruthy();
        expect(screen.getByRole('main')).toBeTruthy();
    });

    it('renders all 57 sidebar navigation links with exact targets', () => {
        const { container } = render(<CtalTmChapter1Page />);
        const expectedHrefs = [
            '#sec-1', '#sec-1-1', '#sec-1-2', '#sec-1-3', '#sec-1-4', '#sec-1-5', '#sec-1-6',
            '#sec-2', '#sec-2-1', '#sec-2-2', '#sec-2-3', '#sec-2-4',
            '#sec-3', '#sec-3-1', '#sec-3-2', '#sec-3-3', '#sec-3-4', '#sec-3-5', '#sec-3-6', '#sec-3-7', '#sec-3-8',
            '#sec-4', '#sec-4-1', '#sec-4-2', '#sec-4-3', '#sec-4-4', '#sec-4-5', '#sec-4-6', '#sec-4-7',
            '#sec-5', '#sec-5-1', '#sec-5-2', '#sec-5-3', '#sec-5-4',
            '#sec-6', '#sec-6-1', '#sec-6-2', '#sec-6-3', '#sec-6-4', '#sec-6-5',
            '#sec-7', '#sec-7-1', '#sec-7-2', '#sec-7-3', '#sec-7-4', '#sec-7-5', '#sec-7-6',
            '#sec-8', '#sec-8-1', '#sec-8-2', '#sec-8-3', '#sec-8-4',
            '#sec-9', '#sec-9-1', '#sec-9-2', '#sec-9-3', '#sec-9-4',
        ];

        const nav = container.querySelector('nav');
        expect(nav).toBeTruthy();
        const links = nav ? Array.from(nav.querySelectorAll('a')).map((a) => a.getAttribute('href')) : [];
        expect(links).toEqual(expectedHrefs);
    });

    it('renders hero title and metadata correctly', () => {
        render(<CtalTmChapter1Page />);
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1.textContent).toContain('ISTQB CTAL-TM v3.0 Chapter 1「テスト活動の管理」初学者向け完全ガイド');

        const pills = document.querySelector('.pills');
        expect(pills).toBeTruthy();
        expect(pills?.textContent).toContain('学習時間');
        expect(pills?.textContent).toContain('750 分');
    });

    it('renders sec-1 headings and sections', () => {
        render(<CtalTmChapter1Page />);
        const sec1Heading = document.getElementById('sec-1');
        expect(sec1Heading).toBeTruthy();
        expect(sec1Heading?.textContent).toContain('0. このガイドの使い方');

        const subHeadings = ['sec-1-1', 'sec-1-2', 'sec-1-3', 'sec-1-4', 'sec-1-5', 'sec-1-6'];
        for (const id of subHeadings) {
            const h = document.getElementById(id);
            expect(h).toBeTruthy();
        }
    });

    it('renders the 4 tables in sec-1 with exact inventory specifications', () => {
        const { container } = render(<CtalTmChapter1Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(4);

        const expectedTables: TableSpec[] = [
            {
                heading: '0.1 Chapter 1 の位置づけ',
                headers: ['章', 'タイトル', '最小学習時間', '全体に占める割合（算出）', '主題'],
                rows: 3,
                cols: 5,
                sample: '1',
            },
            {
                heading: '0.2 試験の基本情報（ISTQB 公式ページより）',
                headers: ['項目', '内容'],
                rows: 5,
                cols: 2,
                sample: '問題数',
            },
            {
                heading: '0.3 学習目標（Learning Objectives）と認知レベル',
                headers: ['レベル', '意味', '個数', '該当する学習目標'],
                rows: 3,
                cols: 4,
                sample: 'K2',
            },
            {
                heading: '0.6 最初に押さえる用語（Chapter 1 の基礎）',
                headers: ['用語（英）', '日本語', 'かんたんな説明'],
                rows: 9,
                cols: 3,
                sample: 'Test strategy',
            },
        ];

        for (let i = 0; i < expectedTables.length; i++) {
            const exp = expectedTables[i];
            const actual = tables[i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(exp.heading);
            expect(actual.headers).toEqual(exp.headers as string[]);
            expect(actual.rows).toBe(exp.rows);
            expect(actual.cols).toBe(exp.cols);
            expect(actual.sample).toBe(exp.sample);
        }
    });

    it('renders Mermaid diagrams 1 and 2 in sec-1', () => {
        const { container } = render(<CtalTmChapter1Page />);
        const d1 = container.querySelector('#mermaid-diagram-1');
        const d2 = container.querySelector('#mermaid-diagram-2');
        expect(d1).toBeTruthy();
        expect(d2).toBeTruthy();
    });

    it('renders callout blocks in sec-1', () => {
        const { container } = render(<CtalTmChapter1Page />);
        const sec1 = container.querySelector('#sec-1');
        expect(sec1).toBeTruthy();

        const callouts = container.querySelectorAll('.callout');
        expect(callouts.length).toBeGreaterThanOrEqual(3);

        const practiceCallout = container.querySelector('.callout-practice');
        expect(practiceCallout).toBeTruthy();
        expect(practiceCallout?.textContent).toContain('つまずきやすい点');
    });
});

describe('CTAL-TM v3.0 Chapter 1 - Category 2: テストプロセス (sec-2) & テストのコンテキスト (sec-3)', () => {
    it('renders sec-2 and sec-3 headings and subheadings', () => {
        render(<CtalTmChapter1Page />);
        expect(document.getElementById('sec-2')?.textContent).toContain('1. テストプロセス');
        expect(document.getElementById('sec-3')?.textContent).toContain('2. テストのコンテキスト');

        const sec2Subs = ['sec-2-1', 'sec-2-2', 'sec-2-3', 'sec-2-4'];
        for (const id of sec2Subs) {
            expect(document.getElementById(id)).toBeTruthy();
        }

        const sec3Subs = ['sec-3-1', 'sec-3-2', 'sec-3-3', 'sec-3-4', 'sec-3-5', 'sec-3-6', 'sec-3-7', 'sec-3-8'];
        for (const id of sec3Subs) {
            expect(document.getElementById(id)).toBeTruthy();
        }
    });

    it('renders all 19 tables in sec-2 and sec-3 with exact specifications', () => {
        const { container } = render(<CtalTmChapter1Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(23); // 4 + 19

        const expectedCat2Tables: TableSpec[] = [
            {
                heading: '1.2.1 何をするのか',
                headers: ['計画のスコープ', '例'],
                rows: 4,
                cols: 2,
                sample: 'プロジェクト全体',
            },
            {
                heading: '1.2.3 テスト計画の 5 つのタスク',
                headers: ['#', 'タスク', '内容（要点）', 'ベストプラクティス'],
                rows: 5,
                cols: 4,
                sample: '1',
            },
            {
                heading: '1.2.4 試験でよく問われるポイント',
                headers: ['論点', '正しい理解'],
                rows: 4,
                cols: 2,
                sample: '計画はいつ行うか',
            },
            {
                heading: '1.3.1 モニタリングとコントロールの違い',
                headers: ['活動', '目的', '主な内容'],
                rows: 2,
                cols: 3,
                sample: 'モニタリング（監視）',
            },
            {
                heading: '1.3.3 コントロールの 5 つの活動',
                headers: ['#', '活動', '説明'],
                rows: 5,
                cols: 3,
                sample: '1',
            },
            {
                heading: '1.3.4 ベストプラクティス',
                headers: ['観点', 'ベストプラクティス'],
                rows: 5,
                cols: 2,
                sample: '指標の設計',
            },
            {
                heading: '1.4.2 テスト完了の 5 つのタスク',
                headers: ['#', 'タスク', '内容（要点）', 'ベストプラクティス'],
                rows: 5,
                cols: 4,
                sample: '1',
            },
            {
                heading: '1.4.3 3 活動の比較（試験直前の整理用）',
                headers: ['観点', '計画', 'モニタリング／コントロール', '完了'],
                rows: 4,
                cols: 4,
                sample: '時期',
            },
            {
                heading: '2.1 テストのステークホルダー（TM-1.2.1）',
                headers: ['ステークホルダー', 'テストへの関心・関わり'],
                rows: 5,
                cols: 2,
                sample: '開発者、開発リード、開発マネージャー',
            },
            {
                heading: '2.2.1 ステークホルダーマトリクス（パワー／関心マトリクス）',
                headers: ['象限', '影響力', '関心', 'シラバスの説明（要約）', '関わり方の例'],
                rows: 4,
                cols: 5,
                sample: 'Promoters',
            },
            {
                heading: '2.3.2 ハイブリッドが使われる主な理由',
                headers: ['理由', '説明'],
                rows: 2,
                cols: 2,
                sample: 'アジャイルへの移行手段',
            },
            {
                heading: '2.3.3 ハイブリッド環境でのテスト管理活動',
                headers: ['活動', 'ベストプラクティス'],
                rows: 4,
                cols: 2,
                sample: '能力評価',
            },
            {
                heading: '2.4 SDLC モデルごとのテスト管理活動（TM-1.2.4）',
                headers: ['観点', '逐次型（例：V モデル）', '反復型（例：スクラム）'],
                rows: 8,
                cols: 3,
                sample: '見積り',
            },
            {
                heading: '2.5 テストレベルごとのテスト管理活動（TM-1.2.5）',
                headers: ['テストレベル', 'テスト管理活動（要点）', 'ベストプラクティス'],
                rows: 5,
                cols: 3,
                sample: 'コンポーネントテスト（単体テスト）',
            },
            {
                heading: '2.6 テストタイプごとのテスト管理活動（TM-1.2.6）',
                headers: ['テストタイプ', '管理の焦点', '主な活動'],
                rows: 4,
                cols: 3,
                sample: '機能テスト',
            },
            {
                heading: '2.7.1 シラバスが示す 3 領域の活動',
                headers: ['活動', '内容（要点）'],
                rows: 3,
                cols: 2,
                sample: '包括的なスコープ定義',
            },
            {
                heading: '2.7.1 シラバスが示す 3 領域の活動',
                headers: ['活動', '内容（要点）'],
                rows: 3,
                cols: 2,
                sample: '実行の監督',
            },
            {
                heading: '2.7.1 シラバスが示す 3 領域の活動',
                headers: ['活動', '内容（要点）'],
                rows: 2,
                cols: 2,
                sample: '適応的なプロセス管理',
            },
            {
                heading: '2.7.3 状況とマネジメント活動の対応（考え方の例）',
                headers: ['状況の手がかり', '強調すべき活動', '理由・具体策'],
                rows: 5,
                cols: 3,
                sample: '要件変更が頻繁で反復開発',
            },
        ];

        for (let i = 0; i < expectedCat2Tables.length; i++) {
            const exp = expectedCat2Tables[i];
            const actual = tables[i + 4];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(exp.heading);
            expect(actual.headers).toEqual(exp.headers as string[]);
            expect(actual.rows).toBe(exp.rows);
            expect(actual.cols).toBe(exp.cols);
            expect(actual.sample).toBe(exp.sample);
        }
    });

    it('renders Mermaid diagrams 3 to 10 in sec-2 and sec-3', () => {
        const { container } = render(<CtalTmChapter1Page />);
        for (let i = 3; i <= 10; i++) {
            const diag = container.querySelector(`#mermaid-diagram-${i}`);
            expect(diag).toBeTruthy();
        }
    });

    it('renders callout blocks in sec-2 and sec-3', () => {
        const { container } = render(<CtalTmChapter1Page />);
        const sec2 = container.querySelector('#sec-2');
        expect(sec2).toBeTruthy();
        const sec3 = container.querySelector('#sec-3');
        expect(sec3).toBeTruthy();

        // 3 in sec-1 + 2 in sec-2 + 8 in sec-3 = 13
        const callouts = container.querySelectorAll('.callout');
        expect(callouts.length).toBeGreaterThanOrEqual(13);
    });
});

describe('CTAL-TM v3.0 Chapter 1 - Category 3: リスクベースドテスト (sec-4) & プロジェクトテスト戦略 (sec-5)', () => {
    it('renders sec-4 and sec-5 headings and subheadings', () => {
        render(<CtalTmChapter1Page />);
        expect(document.getElementById('sec-4')?.textContent).toContain('3. リスクベースドテスト');
        expect(document.getElementById('sec-5')?.textContent).toContain('4. プロジェクトテスト戦略');

        const sec4Subs = ['sec-4-1', 'sec-4-2', 'sec-4-3', 'sec-4-4', 'sec-4-5', 'sec-4-6', 'sec-4-7'];
        for (const id of sec4Subs) {
            expect(document.getElementById(id)).toBeTruthy();
        }

        const sec5Subs = ['sec-5-1', 'sec-5-2', 'sec-5-3', 'sec-5-4'];
        for (const id of sec5Subs) {
            expect(document.getElementById(id)).toBeTruthy();
        }
    });

    it('renders all 30 tables in sec-4 and sec-5 with exact specifications', () => {
        const { container } = render(<CtalTmChapter1Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(53); // 23 + 30

        const expectedCat3Tables: TableSpec[] = [
            {
                heading: '3.1.1 テストがリスクを軽減する仕組み',
                headers: ['テスト結果', 'リスクに対する意味'],
                rows: 2,
                cols: 2,
                sample: '欠陥が見つかった',
            },
            {
                heading: '3.1.2 リスクマネジメントの一般プロセス',
                headers: ['活動', '分類', '内容'],
                rows: 4,
                cols: 3,
                sample: 'Risk identification',
            },
            {
                heading: '3.1.3 テストマネージャーの役割',
                headers: ['テスト活動', 'リスク結果の使われ方'],
                rows: 3,
                cols: 2,
                sample: 'テスト計画',
            },
            {
                heading: '3.2.1 リスク特定の技法（シラバスの 7 つ）',
                headers: ['技法', '概要', '向いている場面'],
                rows: 7,
                cols: 3,
                sample: '専門家インタビュー',
            },
            {
                heading: '3.2.2 ベストプラクティス',
                headers: ['ポイント', '内容'],
                rows: 5,
                cols: 2,
                sample: '関係者の網羅',
            },
            {
                heading: '3.3.2 発生可能性に影響する要因',
                headers: ['カテゴリ', '要因（シラバス記載）'],
                rows: 6,
                cols: 2,
                sample: '技術・複雑性',
            },
            {
                heading: '3.3.3 影響に影響する要因',
                headers: ['カテゴリ', '要因（シラバス記載）'],
                rows: 6,
                cols: 2,
                sample: '機能・利用',
            },
            {
                heading: '3.3.4 定量評価と定性評価',
                headers: ['方式', '条件', '計算・表現'],
                rows: 2,
                cols: 3,
                sample: '定量評価',
            },
            {
                heading: '3.3.4 定量評価と定性評価',
                headers: ['影響＼発生可能性', '低', '中', '高'],
                rows: 3,
                cols: 4,
                sample: '高',
            },
            {
                heading: '3.3.4 定量評価と定性評価',
                headers: ['リスク項目', '発生可能性', '影響（損失額）', 'リスクレベル（積）'],
                rows: 2,
                cols: 4,
                sample: '決済処理の不具合',
            },
            {
                heading: '3.4.1 テスト以外の軽減策',
                headers: ['軽減策', '例'],
                rows: 3,
                cols: 2,
                sample: 'コンティンジェンシープラン',
            },
            {
                heading: '3.4.3 テストアプローチを選ぶための 6 つのコンテキスト要因',
                headers: ['要因', '考慮内容'],
                rows: 6,
                cols: 2,
                sample: 'テストアイテム',
            },
            {
                heading: '3.4.4 リスクレベル別の対応（K4 の考え方の例）',
                headers: ['観点', '高リスク', '低リスク'],
                rows: 6,
                cols: 3,
                sample: '開始時期',
            },
            {
                heading: '3.4.6 リスクに基づくテストの優先順位付け：深さ優先と幅優先',
                headers: ['方式', '内容', '適する状況'],
                rows: 2,
                cols: 3,
                sample: '深さ優先（depth-first）',
            },
            {
                heading: '3.4.6 リスクに基づくテストの優先順位付け：深さ優先と幅優先',
                headers: ['リスク項目', 'リスクレベル', 'テスト'],
                rows: 4,
                cols: 3,
                sample: 'R1 決済',
            },
            {
                heading: '3.4.6 リスクに基づくテストの優先順位付け：深さ優先と幅優先',
                headers: ['方式', '実行順序'],
                rows: 2,
                cols: 2,
                sample: '深さ優先',
            },
            {
                heading: '3.5 リスクベースドテストの技法（TM-1.3.5）',
                headers: ['観点', '重量級（Heavyweight）', '軽量級（Lightweight）'],
                rows: 5,
                cols: 3,
                sample: '形式度',
            },
            {
                heading: '3.5.1 重量級技法の 4 例',
                headers: ['技法', '概要'],
                rows: 4,
                cols: 2,
                sample: 'ハザード分析（Hazard analysis）',
            },
            {
                heading: '3.5.2 軽量級技法の 3 例',
                headers: ['技法', '特徴'],
                rows: 3,
                cols: 2,
                sample: 'SST（Systematic Software Testing）',
            },
            {
                heading: '3.6.1 成功の確認（レトロスペクティブでの 6 つの問い）',
                headers: ['#', '問い'],
                rows: 6,
                cols: 2,
                sample: '1',
            },
            {
                heading: '3.6.2 よくある困難とその解決策（シラバスの 5 項目）',
                headers: ['困難', '内容', '解決策'],
                rows: 5,
                cols: 3,
                sample: 'リスクレベル評価の難しさ',
            },
            {
                heading: '4.0 前提：3 つの文書・概念の関係',
                headers: ['観点', '内容'],
                rows: 4,
                cols: 2,
                sample: '推奨',
            },
            {
                heading: '4.1.1 主要な意思決定',
                headers: ['選択項目', '例'],
                rows: 4,
                cols: 2,
                sample: 'テストレベル',
            },
            {
                heading: '4.1.2 理論と実務のギャップ',
                headers: ['評価したいこと', 'より効果的・効率的な選択の例（シラバス）'],
                rows: 3,
                cols: 2,
                sample: 'コードの保守性',
            },
            {
                heading: '4.2 組織のテスト戦略、プロジェクトのコンテキスト、その他の側面の分析（TM-1.4.2、K4）',
                headers: ['#', '要因', '内容', 'シラバスの例'],
                rows: 7,
                cols: 4,
                sample: '1',
            },
            {
                heading: '4.2.2 状況から選択するアプローチ（考え方の例）',
                headers: ['状況の手がかり', '選択の例', '根拠となる要因'],
                rows: 6,
                cols: 3,
                sample: '医薬品の業務システムで規制が厳しい',
            },
            {
                heading: '4.3.1 テスト計画に含めるもの',
                headers: ['計画の種類', '説明'],
                rows: 4,
                cols: 2,
                sample: 'プロジェクトテスト計画（マスターテスト計画）',
            },
            {
                heading: '4.3.2 S.M.A.R.T. 目標設定法',
                headers: ['文字', '意味', '内容', '悪い例 → 良い例（説明用）'],
                rows: 5,
                cols: 4,
                sample: 'S',
            },
            {
                heading: '4.3.3 プロジェクトテスト目的の例（シラバス）',
                headers: ['目的の種類', '例'],
                rows: 9,
                cols: 2,
                sample: '終了基準の達成',
            },
            {
                heading: '4.3.5 S.M.A.R.T. の適用例（説明用）',
                headers: ['項目', '内容'],
                rows: 6,
                cols: 2,
                sample: '目的',
            },
        ];

        for (let i = 0; i < expectedCat3Tables.length; i++) {
            const exp = expectedCat3Tables[i];
            const actual = tables[i + 23];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(exp.heading);
            expect(actual.headers).toEqual(exp.headers as string[]);
            expect(actual.rows).toBe(exp.rows);
            expect(actual.cols).toBe(exp.cols);
            expect(actual.sample).toBe(exp.sample);
        }
    });

    it('renders Mermaid diagrams 11 to 14 in sec-4 and sec-5', () => {
        const { container } = render(<CtalTmChapter1Page />);
        for (let i = 11; i <= 14; i++) {
            const diag = container.querySelector(`#mermaid-diagram-${i}`);
            expect(diag).toBeTruthy();
        }
    });

    it('renders callout blocks in sec-4 and sec-5', () => {
        const { container } = render(<CtalTmChapter1Page />);
        const sec4 = container.querySelector('#sec-4');
        expect(sec4).toBeTruthy();
        const sec5 = container.querySelector('#sec-5');
        expect(sec5).toBeTruthy();

        // 13 + 5 in sec-4 + 1 in sec-5 = 19
        const callouts = container.querySelectorAll('.callout');
        expect(callouts.length).toBeGreaterThanOrEqual(19);
    });
});
