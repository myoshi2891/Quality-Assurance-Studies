import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'bun:test';
import CtalTaChapter5Page from '../../app/istqb-ctal-ta-chapter5-defect-prevention/page';
import { collectTableInventory, type TableSpec } from '../helpers/table-inventory';

afterEach(() => cleanup());

const EXPECTED_TOC_HREFS = [
    '#part-0',
    '#sec-1',
    '#sec-2',
    '#part-1',
    '#sec-3',
    '#sec-4',
    '#sec-5',
    '#sec-6',
    '#sec-7',
    '#part-2',
    '#sec-8',
    '#sec-9',
    '#sec-10',
    '#sec-11',
    '#sec-12',
    '#part-3',
    '#sec-13',
    '#sec-14',
    '#sec-15',
    '#part-4',
    '#sec-16',
    '#sec-17',
    '#sec-18',
    '#sec-19',
    '#sec-20',
    '#sec-21',
    '#part-5',
    '#sec-22',
    '#sec-23',
    '#sec-24',
    '#part-6',
    '#part-7',
    '#sec-25',
    '#sec-26',
    '#sec-27',
    '#sec-28',
    '#sec-29',
    '#part-8',
    '#sec-30',
    '#sec-31',
];

const EXPECTED_TABLE_SPECS: TableSpec[] = [
    {
        heading: '第5章 ソフトウェア欠陥防止',
        headers: ['LO', 'K', '内容', '学習時間'],
        rows: 5,
        cols: 4,
        sample: 'TA-5.1.1',
    },
    {
        heading: '0.1 情報源の確度マーク',
        headers: ['マーク', '意味', '例'],
        rows: 3,
        cols: 3,
        sample: '◎',
    },
    {
        heading: '1.3 学習目標（LO）一覧【○】',
        headers: ['LO コード', '学習目標（要約）', 'K', '出題配点'],
        rows: 6,
        cols: 4,
        sample: 'TA-5.1.1',
    },
    {
        heading: '1.4 v3.1 から v4.0 で何が変わったか【○】',
        headers: ['項目', 'v3.1（旧）', 'v4.0（現行）'],
        rows: 4,
        cols: 3,
        sample: '章の位置づけ',
    },
    {
        heading: '1.5 試験の基本情報',
        headers: ['項目', '内容', '試験対策でのポイント'],
        rows: 6,
        cols: 3,
        sample: '問題数',
    },
    {
        heading: '2.1 なぜ「検出」だけでは足りないのか',
        headers: ['混入フェーズ', '検出・修正フェーズ', '相対修正コストの目安【△】'],
        rows: 4,
        cols: 3,
        sample: '要件定義',
    },
    {
        heading: '2.2 TA が貢献できる活動',
        headers: ['活動', 'TA の具体的な行動', '見つかる欠陥の例', 'LO との対応'],
        rows: 7,
        cols: 4,
        sample: '要件レビューへの参加',
    },
    {
        heading: '2.4 ベストプラクティス',
        headers: ['項目', '推奨すること', '避けたいこと', '根拠'],
        rows: 7,
        cols: 4,
        sample: '防止活動の始め方',
    },
    {
        heading: '2.5 よくある誤解',
        headers: ['よくある誤解', '実際（シラバスの立場）'],
        rows: 3,
        cols: 2,
        sample: '「欠陥防止はテスト管理者の仕事で、テストアナリストには関係ない」',
    },
    {
        heading: '(1) 再構成した件数表【○：公式解説に基づく再構成】',
        headers: ['欠陥の種類', '要件レビューで検出', 'アーキテクチャ設計レビューで検出', '実装前（静的テスト）で検出', '単体テスト以降で検出', '合計'],
        rows: 4,
        cols: 6,
        sample: '要件の欠陥',
    },
    {
        heading: '(2) 封じ込め率の計算',
        headers: ['フェーズ', '混入した欠陥', 'そのフェーズで検出', '封じ込め率（PCE）'],
        rows: 3,
        cols: 4,
        sample: '要件',
    },
    {
        heading: '(3) 公式解説と照合した正誤判定',
        headers: ['選択肢', '主張', '正誤', '根拠'],
        rows: 4,
        cols: 4,
        sample: 'A',
    },
    {
        heading: '(2) DDP（欠陥検出率）【◎ 5.3.1 / K4】',
        headers: ['観点', 'DDP（欠陥検出率）', 'PCE（フェーズ封じ込め有効性）'],
        rows: 4,
        cols: 3,
        sample: '日本語',
    },
    {
        heading: '(3) PCE（フェーズ封じ込め有効性）【△】',
        headers: ['フェーズ', '混入数', 'そのフェーズで検出した数', 'PCE'],
        rows: 3,
        cols: 4,
        sample: '要件',
    },
    {
        heading: '(3) PCE（フェーズ封じ込め有効性）【△】',
        headers: ['観点', 'DDP', 'PCE'],
        rows: 3,
        cols: 3,
        sample: '見ているもの',
    },
    {
        heading: '(1) 仕様の種類とモデルの選び方',
        headers: ['仕様の性質', 'モデル', '見つかりやすい欠陥', '根拠'],
        rows: 4,
        cols: 4,
        sample: '状態に依存しないビジネスルール',
    },
    {
        heading: '(2) 決定表のレビュー基準【◎ 3.3.1】',
        headers: ['基準', '意味', '問題があるとどうなるか'],
        rows: 4,
        cols: 3,
        sample: '一貫性（consistency）',
    },
    {
        heading: '(3) 実例A：決定表で矛盾を見つける【○ #39 を題材に再構成】',
        headers: ['ルール', 'ロイヤルティカード', '購入額 1,000 ドル以上', 'ニュースレター購読', '割引'],
        rows: 4,
        cols: 5,
        sample: 'R1',
    },
    {
        heading: '(3) 実例A：決定表で矛盾を見つける【○ #39 を題材に再構成】',
        headers: ['番号', 'ロイヤルティ', '購入額', 'ニュースレター', '当てはまるルール', '割引の結果', '判定'],
        rows: 8,
        cols: 7,
        sample: '1',
    },
    {
        heading: '(5) 実例C：CRUD マトリクスで抜けを見つける【◎ 3.2.1 を題材に再構成】',
        headers: ['機能 ＼ データ', '会員', '注文'],
        rows: 6,
        cols: 3,
        sample: '会員登録',
    },
    {
        heading: '(6) モデル化のベストプラクティス',
        headers: ['項目', '推奨すること', '避けたいこと', '根拠'],
        rows: 6,
        cols: 4,
        sample: 'モデルの詳細度',
    },
    {
        heading: '4.2 4つのレビュー技法【○ #42】',
        headers: ['技法', '進め方', '向く場面【△】', '注意点【△】'],
        rows: 4,
        cols: 4,
        sample: 'シナリオベースレビュー',
    },
    {
        heading: '4.3 レビューの進め方【△ 一般的な手順】',
        headers: ['手順', 'やること', 'なぜ必要か'],
        rows: 6,
        cols: 3,
        sample: '1. 観点を決める',
    },
    {
        heading: '4.4 実例：シナリオベースレビューと偽陽性【○ #41 を題材に再構成】',
        headers: ['番号', '主体', '内容'],
        rows: 9,
        cols: 3,
        sample: '1',
    },
    {
        heading: '4.4 実例：シナリオベースレビューと偽陽性【○ #41 を題材に再構成】',
        headers: ['指摘', '判断', '理由'],
        rows: 4,
        cols: 3,
        sample: 'a. 経験のある利用者が、ガイドを恒久的に非表示にできる選択肢が必要',
    },
    {
        heading: '要件仕様書のチェックリスト例',
        headers: ['ID', '質問（はい／いいえ／該当なしで答える）', '優先度', '見つかる欠陥'],
        rows: 8,
        cols: 4,
        sample: 'REQ-01',
    },
    {
        heading: 'ユーザーストーリーのチェックリスト例',
        headers: ['ID', '質問', '優先度', '見つかる欠陥'],
        rows: 6,
        cols: 4,
        sample: 'US-01',
    },
    {
        heading: '4.6 ベストプラクティス',
        headers: ['項目', '推奨すること', '避けたいこと', '根拠'],
        rows: 7,
        cols: 4,
        sample: '技法の選択',
    },
    {
        heading: '技法1：DDP による検出の弱いフェーズの特定',
        headers: ['手順', '内容'],
        rows: 4,
        cols: 2,
        sample: '1',
    },
    {
        heading: '技法2：欠陥クラスター分析【○ #44 を題材に再構成】',
        headers: ['部品', '行数', '予測件数（行数 ÷ 50）', '実績件数', '実績 ÷ 予測', '判定'],
        rows: 4,
        cols: 6,
        sample: '制御パネル',
    },
    {
        heading: '分析結果から改善アクションへ【△】',
        headers: ['分析でわかったこと', '考えられる改善アクション'],
        rows: 5,
        cols: 2,
        sample: '設計フェーズの DDP が低い',
    },
    {
        heading: 'K4 問題の解き方【△ 学習法】',
        headers: ['手順', 'やること'],
        rows: 5,
        cols: 2,
        sample: '1',
    },
    {
        heading: 'B. TA-5.3.2 欠陥分類が根本原因分析をどう支えるか（K2）',
        headers: ['誤った説明', 'なぜ誤りか（○ #45 の解説）'],
        rows: 3,
        cols: 2,
        sample: '分類すれば、静的・動的テストの前に、抽象的なカテゴリだけで RCA ができる',
    },
    {
        heading: '分類の軸の例【△】',
        headers: ['分類の軸', '例', '何に使うか'],
        rows: 5,
        cols: 3,
        sample: '混入フェーズ',
    },
    {
        heading: '根本原因分析の例：5 Whys【△】',
        headers: ['段階', '問い', '答え'],
        rows: 5,
        cols: 3,
        sample: '1',
    },
    {
        heading: '分類の落とし穴【△】',
        headers: ['落とし穴', '対策'],
        rows: 4,
        cols: 2,
        sample: '分類が細かすぎて、選ぶのに迷う',
    },
    {
        heading: 'C. ベストプラクティス',
        headers: ['項目', '推奨すること', '避けたいこと', '根拠'],
        rows: 7,
        cols: 4,
        sample: 'テスト結果の評価',
    },
    {
        heading: 'パート6ツール・機能別のベストプラクティス',
        headers: ['ツールの種類', 'シラバスでの位置づけ【◎】', '防止・再発緩和での使い方【△】', '設定・運用のベストプラクティス【△】'],
        rows: 6,
        cols: 4,
        sample: '欠陥管理ツール',
    },
    {
        heading: '7.1 公式サンプル試験 #38〜#45 の整理【○】',
        headers: ['問', 'LO', 'K', '点', '論点', '正解（原本の記号）', '根拠の要点'],
        rows: 8,
        cols: 7,
        sample: '#38',
    },
    {
        heading: '7.2 混同しやすい概念の比較',
        headers: ['比べるもの', '違い'],
        rows: 7,
        cols: 2,
        sample: '欠陥防止 と 欠陥検出',
    },
    {
        heading: '問3（K3）',
        headers: ['ルール', '会員', 'クーポン', '割引'],
        rows: 2,
        cols: 4,
        sample: 'R1',
    },
    {
        heading: '問4（K4）',
        headers: ['部品', '予測件数', '実績件数'],
        rows: 4,
        cols: 3,
        sample: 'A',
    },
    {
        heading: '問6（K3）',
        headers: ['問', '解答', '解説'],
        rows: 6,
        cols: 3,
        sample: '1',
    },
    {
        heading: '7.5 学習計画の例【△】',
        headers: ['順', '内容', '目安'],
        rows: 6,
        cols: 3,
        sample: '1',
    },
    {
        heading: 'パート8根拠となるソース（URL）',
        headers: ['資料', 'URL', '本ガイドでの使い方', '取得状況'],
        rows: 13,
        cols: 4,
        sample: 'CTAL-TA 公式ページ',
    },
];

describe('CTAL-TA v4.0 Chapter 5 - Comprehensive Structural Verification', () => {
    describe('Category 0: Scaffolding, Navigation & Hero / Part 0', () => {
        it('renders the page container with .ctal-ta-ch5-page class', () => {
            const { container } = render(<CtalTaChapter5Page />);
            expect(container.querySelector('.ctal-ta-ch5-page')).toBeTruthy();
            expect(container.querySelector('nav#toc')).toBeTruthy();
            expect(container.querySelector('main#main')).toBeTruthy();
        });

        it('renders all 40 TOC links in nav with exact hrefs', () => {
            const { container } = render(<CtalTaChapter5Page />);
            const nav = container.querySelector('nav#toc');
            expect(nav).toBeTruthy();
            const links = nav ? Array.from(nav.querySelectorAll('a')).map((a) => a.getAttribute('href')) : [];
            expect(links).toEqual(EXPECTED_TOC_HREFS);
        });

        it('renders the H1 and Hero metadata', () => {
            render(<CtalTaChapter5Page />);
            const h1 = screen.getByRole('heading', { level: 1 });
            expect(h1.textContent).toContain('第5章');
            expect(h1.textContent).toContain('ソフトウェア欠陥防止');
            expect(screen.getByText('CTAL-TA v4.0 初学者向けステップバイステップ・ガイド')).toBeTruthy();
        });

        it('renders part-0 section with sec-1 and sec-2', () => {
            const { container } = render(<CtalTaChapter5Page />);
            const part0 = container.querySelector('#part-0');
            expect(part0).toBeTruthy();
            expect(container.querySelector('#sec-1')).toBeTruthy();
            expect(container.querySelector('#sec-2')).toBeTruthy();
        });
    });

    describe('Category 1: Part 1 (Overview) & Part 2 (Defect Prevention Practice)', () => {
        it('renders part-1 and part-2 headings, diagrams, and section anchors', () => {
            const { container } = render(<CtalTaChapter5Page />);
            expect(container.querySelector('#part-1')).toBeTruthy();
            expect(container.querySelector('#sec-3')).toBeTruthy();
            expect(container.querySelector('#sec-4')).toBeTruthy();
            expect(container.querySelector('#sec-5')).toBeTruthy();
            expect(container.querySelector('#sec-6')).toBeTruthy();
            expect(container.querySelector('#sec-7')).toBeTruthy();

            expect(container.querySelector('#part-2')).toBeTruthy();
            expect(container.querySelector('#sec-8')).toBeTruthy();
            expect(container.querySelector('#sec-9')).toBeTruthy();
            expect(container.querySelector('#sec-10')).toBeTruthy();
            expect(container.querySelector('#sec-11')).toBeTruthy();
            expect(container.querySelector('#sec-12')).toBeTruthy();

            const diagrams = container.querySelectorAll('figure.diagram');
            expect(diagrams.length).toBeGreaterThanOrEqual(2);
        });
    });

    describe('Category 2: Part 3 (Phase Containment & Modeling TA-5.2.1 / K3)', () => {
        it('renders part-3 section with sec-13, sec-14, sec-15, 3 diagrams, and 2 formulas', () => {
            const { container } = render(<CtalTaChapter5Page />);
            expect(container.querySelector('#part-3')).toBeTruthy();
            expect(container.querySelector('#sec-13')).toBeTruthy();
            expect(container.querySelector('#sec-14')).toBeTruthy();
            expect(container.querySelector('#sec-15')).toBeTruthy();

            const diagrams = container.querySelectorAll('figure.diagram');
            expect(diagrams.length).toBeGreaterThanOrEqual(5);

            const formulas = container.querySelectorAll('.formula');
            expect(formulas.length).toBe(2);
        });
    });

    describe('Category 3: Part 4 (Review Techniques TA-5.2.2 / K3)', () => {
        it('renders part-4 section with sec-16 through sec-21 and review flowchart diagram', () => {
            const { container } = render(<CtalTaChapter5Page />);
            expect(container.querySelector('#part-4')).toBeTruthy();
            expect(container.querySelector('#sec-16')).toBeTruthy();
            expect(container.querySelector('#sec-17')).toBeTruthy();
            expect(container.querySelector('#sec-18')).toBeTruthy();
            expect(container.querySelector('#sec-19')).toBeTruthy();
            expect(container.querySelector('#sec-20')).toBeTruthy();
            expect(container.querySelector('#sec-21')).toBeTruthy();

            const diagrams = container.querySelectorAll('figure.diagram');
            expect(diagrams.length).toBeGreaterThanOrEqual(6);
        });
    });

    describe('Category 4: Part 5 (Recurrence Mitigation TA-5.3.1/TA-5.3.2) & Part 6 (Tools)', () => {
        it('renders part-5 (sec-22..24) and part-6 with all 8 Mermaid diagrams', () => {
            const { container } = render(<CtalTaChapter5Page />);
            expect(container.querySelector('#part-5')).toBeTruthy();
            expect(container.querySelector('#sec-22')).toBeTruthy();
            expect(container.querySelector('#sec-23')).toBeTruthy();
            expect(container.querySelector('#sec-24')).toBeTruthy();

            expect(container.querySelector('#part-6')).toBeTruthy();

            const diagrams = container.querySelectorAll('figure.diagram');
            expect(diagrams.length).toBe(8);
        });
    });

    describe('Category 5: Part 7 (Exam Preparation) & Part 8 (References)', () => {
        it('renders part-7 (sec-25..29) and part-8 (sec-30..31) with answers accordion', () => {
            const { container } = render(<CtalTaChapter5Page />);
            expect(container.querySelector('#part-7')).toBeTruthy();
            expect(container.querySelector('#sec-25')).toBeTruthy();
            expect(container.querySelector('#sec-26')).toBeTruthy();
            expect(container.querySelector('#sec-27')).toBeTruthy();
            expect(container.querySelector('#sec-28')).toBeTruthy();
            expect(container.querySelector('#sec-29')).toBeTruthy();

            expect(container.querySelector('#part-8')).toBeTruthy();
            expect(container.querySelector('#sec-30')).toBeTruthy();
            expect(container.querySelector('#sec-31')).toBeTruthy();

            expect(container.querySelector('details.answers')).toBeTruthy();
        });
    });

    describe('Inventory Verification: Headings, Diagrams, Tables, and UI Components', () => {
        it('renders all 9 H2 headings with expected ids', () => {
            const { container } = render(<CtalTaChapter5Page />);
            const h2s = Array.from(container.querySelectorAll('h2')).map((h) => h.getAttribute('id'));
            expect(h2s).toEqual([
                'part-0',
                'part-1',
                'part-2',
                'part-3',
                'part-4',
                'part-5',
                'part-6',
                'part-7',
                'part-8',
            ]);
        });

        it('renders all 31 H3 headings with expected ids', () => {
            const { container } = render(<CtalTaChapter5Page />);
            const h3Ids = Array.from(container.querySelectorAll('h3')).map((h) => h.getAttribute('id'));
            const expectedH3Ids = Array.from({ length: 31 }, (_, i) => `sec-${i + 1}`);
            expect(h3Ids).toEqual(expectedH3Ids);
        });

        it('renders all 8 Mermaid diagram containers', () => {
            const { container } = render(<CtalTaChapter5Page />);
            const diagrams = container.querySelectorAll('figure.diagram');
            expect(diagrams.length).toBe(8);
        });

        it('renders all 43 tables matching the exact inventory specifications', () => {
            const { container } = render(<CtalTaChapter5Page />);
            const actualTables = collectTableInventory(container);
            expect(actualTables.length).toBe(EXPECTED_TABLE_SPECS.length);

            EXPECTED_TABLE_SPECS.forEach((expected, i) => {
                const actual = actualTables[i];
                expect(actual).toBeDefined();
                expect(actual.heading).toBe(expected.heading);
                expect(actual.headers).toEqual(expected.headers);
                expect(actual.rows).toBe(expected.rows);
                expect(actual.cols).toBe(expected.cols);
                expect(actual.sample).toBe(expected.sample);
            });
        });

        it('renders the 2 mathematical formulas for DDP and PCE', () => {
            const { container } = render(<CtalTaChapter5Page />);
            const formulas = container.querySelectorAll('.formula');
            expect(formulas.length).toBe(2);
        });

        it('renders all 9 glossary details and 1 answers details accordion', () => {
            const { container } = render(<CtalTaChapter5Page />);
            const glossaries = container.querySelectorAll('details.glossary');
            expect(glossaries.length).toBe(9);
            const answers = container.querySelectorAll('details.answers');
            expect(answers.length).toBe(1);
        });

        it('renders all 9 lead callouts and 1 notice callout', () => {
            const { container } = render(<CtalTaChapter5Page />);
            const leads = container.querySelectorAll('.lead');
            expect(leads.length).toBe(9);
            const notices = container.querySelectorAll('.notice');
            expect(notices.length).toBe(1);
        });
    });
});
