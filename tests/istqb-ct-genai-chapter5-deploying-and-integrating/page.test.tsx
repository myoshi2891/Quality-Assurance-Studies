import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'bun:test';
import CtGenAiChapter5Page from '../../app/istqb-ct-genai-chapter5-deploying-and-integrating/page';
import { collectTableInventory, type TableSpec } from '../helpers/table-inventory';

afterEach(() => cleanup());

export const EXPECTED_TOC_LINKS = [
    { href: '#s1', text: '1. この章の全体像' },
    { href: '#s2', text: '2. 5.1 導入ロードマップ（概要）' },
    { href: '#s3', text: '3. 5.1.1 シャドーAIのリスク' },
    { href: '#s4', text: '4. 5.1.2 生成AI戦略の観点' },
    { href: '#s5', text: '5. 5.1.3 LLM/SLMの選定' },
    { href: '#s6', text: '6. 5.1.4 導入のフェーズ' },
    { href: '#s7', text: '7. 5.2 変革管理（概要）' },
    { href: '#s8', text: '8. 5.2.1 必要なスキルと知識' },
    { href: '#s9', text: '9. 5.2.2 チーム能力の構築' },
    { href: '#s10', text: '10. 5.2.3 テストプロセスの進化' },
    { href: '#s11', text: '11. 導入形態別ベストプラクティス' },
    { href: '#s12', text: '12. 関連規制・標準' },
    { href: '#s13', text: '13. まとめ・重要用語' },
    { href: '#s14', text: '14. 確認問題' },
    { href: '#s15', text: '15. 学習チェックリスト' },
    { href: '#s16', text: '16. 参考文献・出典URL' },
];

export const EXPECTED_TABLE_SPECS_CAT1: TableSpec[] = [
    {
        heading: '1.3 学習目標（Learning Objectives）一覧',
        headers: ['LO番号', '学習目標（要約）', 'Kレベル', '出題スタイルの目安'],
        rows: 7,
        cols: 4,
        sample: 'GenAI-5.1.1',
    },
    {
        heading: '1.4 試験での位置づけ（参考情報）',
        headers: ['項目', '内容', '根拠の種類'],
        rows: 3,
        cols: 3,
        sample: '試験全体',
    },
    {
        heading: '1.5 前の章とのつながり',
        headers: ['第5章の項目', '参照される章', '何が使われるか'],
        rows: 6,
        cols: 3,
        sample: '5.1.1 シャドーAI',
    },
    {
        heading: '2.3 なぜ「ロードマップ」が必要なのか（初学者向けの説明）',
        headers: ['よくある失敗', '何が起きるか', 'ロードマップがあると'],
        rows: 4,
        cols: 3,
        sample: '目的があいまいなまま導入',
    },
    {
        heading: '3.2 シラバスが挙げる3つのリスク',
        headers: ['#', 'リスク', '内容（要約）', 'テスト業務での具体例'],
        rows: 3,
        cols: 4,
        sample: '①',
    },
    {
        heading: '3.4 対策：シラバスの結論',
        headers: ['対策の要素', '意味'],
        rows: 4,
        cols: 2,
        sample: '明確な生成AI戦略',
    },
    {
        heading: 'シラバス準拠のベストプラクティス',
        headers: ['実務施策', 'ねらい', '根拠'],
        rows: 5,
        cols: 3,
        sample: '承認済みAIツールの一覧（インベントリ）を作り公開する',
    },
];

export const EXPECTED_TABLE_SPECS_CAT2: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT1,
    {
        heading: '4.1 学ぶこと',
        headers: ['#', '観点', '一言でいうと', '中身（要約）'],
        rows: 6,
        cols: 4,
        sample: '①',
    },
    {
        heading: 'ステップ1：測定可能な目標を決める（観点①）',
        headers: ['ダメな目標', '良い目標の例', '対応する目標カテゴリ'],
        rows: 3,
        cols: 3,
        sample: '例 AIでテストを効率化する',
    },
    {
        heading: 'ステップ3：データ品質とセキュリティを確保する（観点③）',
        headers: ['データ品質の観点', 'チェックの例'],
        rows: 4,
        cols: 2,
        sample: '正確性',
    },
    {
        heading: 'ステップ5：効果測定の指標を先に決める（観点⑤）',
        headers: ['指標（第2章2.3.1）', '意味', '導入評価での使い方の例'],
        rows: 7,
        cols: 3,
        sample: '正確性（Accuracy）',
    },
    {
        heading: 'ステップ6：プロセスガイドラインを定める（観点⑥）',
        headers: ['ガイドライン', '内容', '例'],
        rows: 3,
        cols: 3,
        sample: '機密データの取り扱い',
    },
    {
        heading: 'シラバス準拠',
        headers: ['施策', 'ねらい', '根拠'],
        rows: 4,
        cols: 3,
        sample: '導入前のベースライン計測（現状の工数・欠陥・リードタイム）',
    },
    {
        heading: '5.1 背景',
        headers: ['違いの軸', '例'],
        rows: 3,
        cols: 2,
        sample: '機能面',
    },
    {
        heading: '5.2 シラバスの4つの選定基準',
        headers: ['#', '基準', '何を見るか', '評価のヒント'],
        rows: 4,
        cols: 4,
        sample: '①',
    },
    {
        heading: '5.4 選定スコアカード（テンプレート例）',
        headers: ['評価軸（シラバスの4基準ベース）', '重み（例）', '候補A', '候補B', '候補C（SLM）', '確認方法の例'],
        rows: 5,
        cols: 6,
        sample: 'モデル性能（対象テストタスク）',
    },
    {
        heading: 'シラバス準拠',
        headers: ['施策', 'ねらい', '根拠'],
        rows: 4,
        cols: 3,
        sample: '自組織専用の評価セット（ゴールデンセット）を作る：実際の要件・既存のテストケース・過去の欠陥を使う',
    },
    {
        heading: '6.1 基本の考え方',
        headers: ['フェーズ', '英語名', '一言でいうと'],
        rows: 3,
        cols: 3,
        sample: 'フェーズ1',
    },
    {
        heading: 'フェーズ1：Discovery（発見）',
        headers: ['目的', '基本的な認識と自信をつくる'],
        rows: 3,
        cols: 2,
        sample: '主な活動',
    },
    {
        heading: 'フェーズ2：Initiation and usage definition（開始と利用方法の定義）',
        headers: ['目的', '実験から戦略へ焦点を移す'],
        rows: 3,
        cols: 2,
        sample: '主な活動',
    },
    {
        heading: 'フェーズ3：Utilization and iteration（活用と反復）',
        headers: ['目的', 'GenAIを「目新しいもの」からテストプロセスの統合された一部にする'],
        rows: 3,
        cols: 2,
        sample: '主な活動',
    },
    {
        heading: '6.4 「重なり合う」とはどういうことか（具体例）',
        headers: ['ユースケース（例）', '現在のフェーズ（例）', 'この時に取るべき行動の例'],
        rows: 3,
        cols: 3,
        sample: 'テストレポート分析',
    },
    {
        heading: '6.5 人的要因を「早期に」扱う',
        headers: ['人的要因', '起こり得ること', '対応の例'],
        rows: 3,
        cols: 3,
        sample: '雇用不安',
    },
    {
        heading: 'シラバス準拠',
        headers: ['フェーズ', '施策', 'ねらい', '根拠'],
        rows: 5,
        cols: 4,
        sample: '1',
    },
];

export const EXPECTED_TABLE_SPECS_CAT3: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT2,
    {
        heading: '8.2 必要なスキル一覧',
        headers: ['#', 'スキル領域', '中身（要約）', '関連する章'],
        rows: 7,
        cols: 4,
        sample: '①',
    },
    {
        heading: 'ステップ1：送信前に「含まれていないか」を確認する',
        headers: ['種類', '例'],
        rows: 3,
        cols: 2,
        sample: '個人を特定できる情報',
    },
    {
        heading: 'ステップ2：マスキング／除去／置換を行う',
        headers: ['元のデータ（例）', 'サニタイズ後（例）', '方法'],
        rows: 3,
        cols: 3,
        sample: '例 山田太郎 taro.yamada@example.com',
    },
    {
        heading: '8.5 「右サイズ」モデルとコスト・エネルギーの考え方',
        headers: ['タスクの性質（例）', '適したモデルの方向性（例）', '理由'],
        rows: 3,
        cols: 3,
        sample: 'ログの要約、定型的な分類',
    },
    {
        heading: 'シラバス準拠',
        headers: ['施策', 'ねらい', '根拠'],
        rows: 3,
        cols: 3,
        sample: 'スキルマトリクス（役割別に必要なAIスキルと現在レベル）を作る',
    },
    {
        heading: '9.1 基本の考え方',
        headers: ['必要なもの', '内容'],
        rows: 3,
        cols: 2,
        sample: '実践的な体験',
    },
    {
        heading: '9.3 重要キーワードの解説',
        headers: ['用語', '意味', 'ポイント'],
        rows: 4,
        cols: 3,
        sample: 'プロンプトパターン（Prompt patterns）',
    },
    {
        heading: 'ステップ2：メタ情報を付ける（ライブラリ登録フォーマット例）',
        headers: ['項目', '記入例'],
        rows: 9,
        cols: 2,
        sample: 'プロンプトID／名前',
    },
    {
        heading: 'シラバス準拠',
        headers: ['施策', 'ねらい', '根拠'],
        rows: 4,
        cols: 3,
        sample: 'プロンプトをコード成果物として扱う（バージョン管理、レビュー）',
    },
    {
        heading: '10.2 テスターの役割の変化',
        headers: ['従来の責任', 'AI支援後に加わる／重みが増す責任'],
        rows: 6,
        cols: 2,
        sample: 'テストケースの作成・テストの実行が中心',
    },
    {
        heading: '10.3 テストマネージャーの役割の変化',
        headers: ['責任領域', '内容（要約）'],
        rows: 9,
        cols: 2,
        sample: 'AIベースのテスト戦略の策定',
    },
    {
        heading: '10.4 役割の変化と責任分担のイメージ（責任分担表の例）',
        headers: ['活動', 'テスター', 'テストマネージャー', '承認者・関係部門（例）'],
        rows: 6,
        cols: 4,
        sample: 'プロンプトの作成・改善',
    },
    {
        heading: 'シラバス準拠',
        headers: ['施策', 'ねらい', '根拠'],
        rows: 3,
        cols: 3,
        sample: '役割記述書・評価項目を更新し、AIレビュー、プロンプトライブラリ保守などを明記する',
    },
];

export const EXPECTED_TABLE_SPECS_CAT4: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT3,
    {
        heading: '11.1 導入形態の全体像',
        headers: ['導入形態', '概要', '参照章'],
        rows: 6,
        cols: 3,
        sample: 'AIチャットボット',
    },
    {
        heading: '11.2 導入形態別ベストプラクティス表',
        headers: ['導入形態', '向いている用途', 'シラバス準拠のポイント', '実務ベストプラクティス', '導入の目安フェーズ（5.1.4）'],
        rows: 6,
        cols: 5,
        sample: 'AIチャットボット',
    },
    {
        heading: '11.3 ホスティング（配置）の選び方',
        headers: ['配置', 'メリット（一般論）', '注意点（一般論）'],
        rows: 3,
        cols: 3,
        sample: '商用のセキュアな提供プラン',
    },
    {
        heading: '11.4 テスト活動別：導入の始め方と品質ゲート',
        headers: ['テスト活動', 'GenAIの支援例', '導入の始め方（低リスクから）', '品質ゲートの例'],
        rows: 4,
        cols: 4,
        sample: 'テスト分析',
    },
    {
        heading: '12.1 シラバス（第3章3.4.1）に挙げられているもの',
        headers: ['名称', '種別', '概要（要約）', 'テストでの適用（要約）'],
        rows: 4,
        cols: 4,
        sample: 'ISO/IEC 42001:2023',
    },
    {
        heading: '12.2 第5章の各項目との対応',
        headers: ['第5章の項目', '関連する規制・標準（例）', 'どう役立つか'],
        rows: 5,
        cols: 3,
        sample: '5.1.1 シャドーAI',
    },
    {
        heading: '13.2 暗記表（K1問題の対策）',
        headers: ['項目', '暗記内容', '覚え方'],
        rows: 10,
        cols: 3,
        sample: 'シャドーAIとは',
    },
    {
        heading: '13.3 重要用語集（日本語／英語）',
        headers: ['日本語', '英語', '説明'],
        rows: 20,
        cols: 3,
        sample: 'シャドーAI',
    },
];

describe('CT-GenAI Chapter 5 Page (Cat 1: s1-s3)', () => {
    it('renders hero title and meta information', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const hero = container.querySelector('.hero');
        expect(hero).not.toBeNull();
        expect(hero?.textContent).toContain('第5章：テスト組織における生成AIの導入と統合');
        expect(hero?.textContent).toContain('対象シラバス：v1.1（80分）');
        expect(hero?.textContent).toContain('前提資格：CTFL');
    });

    it('renders sidebar navigation with all 16 TOC links', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const navLinks = container.querySelectorAll('.sidebar nav a');
        expect(navLinks.length).toBe(16);
        EXPECTED_TOC_LINKS.forEach((expected, i) => {
            expect(navLinks[i]?.getAttribute('href')).toBe(expected.href);
            expect(navLinks[i]?.textContent?.trim()).toBe(expected.text);
        });
    });

    it('renders section s1 (この章の全体像) with d1 diagram', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s1 = container.querySelector('#s1');
        expect(s1).not.toBeNull();
        expect(s1?.textContent).toContain('1. この章の全体像');
        expect(s1?.textContent).toContain('1.1 第5章は何を学ぶ章か');
        expect(s1?.textContent).toContain('1.2 第5章の構成（2つの柱）');
        expect(s1?.textContent).toContain('1.3 学習目標（Learning Objectives）一覧');
        expect(s1?.querySelector('[data-diagram="d1"]')).not.toBeNull();
    });

    it('renders section s2 (5.1 導入ロードマップ概要) with d2 diagram', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s2 = container.querySelector('#s2');
        expect(s2).not.toBeNull();
        expect(s2?.textContent).toContain('2. 5.1 生成AI導入ロードマップ（概要）');
        expect(s2?.textContent).toContain('2.1 まず結論（1分で分かる要約）');
        expect(s2?.textContent).toContain('2.2 戦略とロードマップの関係（図解）');
        expect(s2?.querySelector('[data-diagram="d2"]')).not.toBeNull();
    });

    it('renders section s3 (5.1.1 シャドーAIのリスク) with d3 and d4 diagrams', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s3 = container.querySelector('#s3');
        expect(s3).not.toBeNull();
        expect(s3?.textContent).toContain('3. 5.1.1 シャドーAIのリスク');
        expect(s3?.textContent).toContain('3.1 用語の定義');
        expect(s3?.textContent).toContain('3.2 シラバスが挙げる3つのリスク');
        expect(s3?.querySelector('[data-diagram="d3"]')).not.toBeNull();
        expect(s3?.querySelector('[data-diagram="d4"]')).not.toBeNull();
    });

    it('matches Category 1 table inventory (7 tables)', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(EXPECTED_TABLE_SPECS_CAT1.length);
        EXPECTED_TABLE_SPECS_CAT1.forEach((expected, i) => {
            const actual = tables[i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual([...expected.headers]);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toContain(expected.sample);
        });
    });

    it('renders callouts in s1 and s3', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const sourceCallout = container.querySelector('#s1 .callout.source');
        expect(sourceCallout).not.toBeNull();
        expect(sourceCallout?.textContent).toContain('Exactpro「Chapter 5 Reading Materials');

        const practiceCallout = container.querySelector('#s3 .callout.practice');
        expect(practiceCallout).not.toBeNull();
        expect(practiceCallout?.textContent).toContain('実務ベストプラクティス（試験範囲外）');
    });
});

describe('CT-GenAI Chapter 5 Page (Cat 2: s4-s6)', () => {
    it('renders section s4 (5.1.2 生成AI戦略の主要な観点) with d5 and d6 diagrams', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s4 = container.querySelector('#s4');
        expect(s4).not.toBeNull();
        expect(s4?.textContent).toContain('4. 5.1.2 生成AI戦略の主要な観点');
        expect(s4?.textContent).toContain('4.1 学ぶこと');
        expect(s4?.textContent).toContain('4.2 観点どうしの関係（図解）');
        expect(s4?.textContent).toContain('4.3 各観点を初学者向けにステップバイステップで理解する');
        expect(s4?.querySelector('[data-diagram="d5"]')).not.toBeNull();
        expect(s4?.querySelector('[data-diagram="d6"]')).not.toBeNull();
    });

    it('renders section s5 (5.1.3 テストタスク向けLLM/SLMの選定) with d7 diagram', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s5 = container.querySelector('#s5');
        expect(s5).not.toBeNull();
        expect(s5?.textContent).toContain('5. 5.1.3 テストタスク向けLLM/SLMの選定');
        expect(s5?.textContent).toContain('5.1 背景');
        expect(s5?.textContent).toContain('5.2 シラバスの4つの選定基準');
        expect(s5?.querySelector('[data-diagram="d7"]')).not.toBeNull();
    });

    it('renders section s6 (5.1.4 生成AI導入のフェーズ) with d8 and d9 diagrams', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s6 = container.querySelector('#s6');
        expect(s6).not.toBeNull();
        expect(s6?.textContent).toContain('6. 5.1.4 生成AI導入のフェーズ');
        expect(s6?.textContent).toContain('6.1 基本の考え方');
        expect(s6?.textContent).toContain('6.2 3フェーズの流れ（図解）');
        expect(s6?.textContent).toContain('6.4 「重なり合う」とはどういうことか');
        expect(s6?.querySelector('[data-diagram="d8"]')).not.toBeNull();
        expect(s6?.querySelector('[data-diagram="d9"]')).not.toBeNull();
    });

    it('matches Category 2 table inventory (cumulative 24 tables)', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(EXPECTED_TABLE_SPECS_CAT2.length);
        EXPECTED_TABLE_SPECS_CAT2.forEach((expected, i) => {
            const actual = tables[i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual([...expected.headers]);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toContain(expected.sample);
        });
    });

    it('renders callouts in s4, s5, and s6', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const c4 = container.querySelector('#s4 .callout.practice');
        expect(c4).not.toBeNull();
        expect(c4?.textContent).toContain('導入前のベースライン計測');

        const c5 = container.querySelector('#s5 .callout.practice');
        expect(c5).not.toBeNull();
        expect(c5?.textContent).toContain('自組織専用の評価セット');

        const c6 = container.querySelector('#s6 .callout.practice');
        expect(c6).not.toBeNull();
        expect(c6?.textContent).toContain('サンドボックス環境');
    });
});

describe('CT-GenAI Chapter 5 Page (Cat 3: s7-s10)', () => {
    it('renders section s7 (5.2 変革管理概要) with d10 diagram', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s7 = container.querySelector('#s7');
        expect(s7).not.toBeNull();
        expect(s7?.textContent).toContain('7. 5.2 変革管理（チェンジマネジメント）（概要）');
        expect(s7?.textContent).toContain('7.1 なぜ変革管理が必要なのか');
        expect(s7?.textContent).toContain('7.2 5.2の全体像（図解）');
        expect(s7?.querySelector('[data-diagram="d10"]')).not.toBeNull();
    });

    it('renders section s8 (5.2.1 必要なスキルと知識) with d11 and d12 diagrams and prompt-block', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s8 = container.querySelector('#s8');
        expect(s8).not.toBeNull();
        expect(s8?.textContent).toContain('8. 5.2.1 生成AIを使ったテストに必要なスキルと知識');
        expect(s8?.textContent).toContain('8.1 考え方');
        expect(s8?.textContent).toContain('8.2 必要なスキル一覧');
        expect(s8?.textContent).toContain('8.3 スキルの全体像（図解）');
        expect(s8?.textContent).toContain('8.4 データサニタイズをステップバイステップで理解する');
        expect(s8?.textContent).toContain('8.5 「右サイズ」モデルとコスト・エネルギーの考え方');
        expect(s8?.querySelector('[data-diagram="d11"]')).not.toBeNull();
        expect(s8?.querySelector('[data-diagram="d12"]')).not.toBeNull();
        const pb = s8?.querySelector('.prompt-block');
        expect(pb).not.toBeNull();
        expect(pb?.textContent).toContain('個人情報・認証情報はすでにマスキング済みです');
        expect(s8?.textContent).toContain('プライバシー保護型プロンプト');
    });

    it('renders section s9 (5.2.2 チーム能力の構築) with d13 diagram', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s9 = container.querySelector('#s9');
        expect(s9).not.toBeNull();
        expect(s9?.textContent).toContain('9. 5.2.2 テストチームの生成AI能力の構築');
        expect(s9?.textContent).toContain('9.1 基本の考え方');
        expect(s9?.textContent).toContain('9.2 能力の成長ステップ（図解）');
        expect(s9?.textContent).toContain('9.3 重要キーワードの解説');
        expect(s9?.textContent).toContain('9.4 プロンプトライブラリの作り方');
        expect(s9?.querySelector('[data-diagram="d13"]')).not.toBeNull();
    });

    it('renders section s10 (5.2.3 テストプロセスの進化) with d14 diagram', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s10 = container.querySelector('#s10');
        expect(s10).not.toBeNull();
        expect(s10?.textContent).toContain('10. 5.2.3 AI対応テスト組織におけるテストプロセスの進化');
        expect(s10?.textContent).toContain('10.1 全体像');
        expect(s10?.textContent).toContain('10.2 テスターの役割の変化');
        expect(s10?.textContent).toContain('10.3 テストマネージャーの役割の変化');
        expect(s10?.textContent).toContain('10.4 役割の変化と責任分担のイメージ');
        expect(s10?.querySelector('[data-diagram="d14"]')).not.toBeNull();
    });

    it('matches Category 3 table inventory (cumulative 37 tables)', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(EXPECTED_TABLE_SPECS_CAT3.length);
        EXPECTED_TABLE_SPECS_CAT3.forEach((expected, i) => {
            const actual = tables[i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual([...expected.headers]);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toContain(expected.sample);
        });
    });

    it('renders callouts in s8, s9, and s10', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const c8 = container.querySelector('#s8 .callout.practice');
        expect(c8).not.toBeNull();
        expect(c8?.textContent).toContain('スキルマトリクス');

        const c9 = container.querySelector('#s9 .callout.practice');
        expect(c9).not.toBeNull();
        expect(c9?.textContent).toContain('コード成果物として扱う');

        const c10 = container.querySelector('#s10 .callout.practice');
        expect(c10).not.toBeNull();
        expect(c10?.textContent).toContain('役割記述書・評価項目を更新');
    });
});

describe('CT-GenAI Chapter 5 Page (Cat 4: s11-s13)', () => {
    it('renders section s11 (導入形態別ベストプラクティス) with d15 diagram', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s11 = container.querySelector('#s11');
        expect(s11).not.toBeNull();
        expect(s11?.textContent).toContain('11. 導入形態ごとのベストプラクティス（サービス・機能別）');
        expect(s11?.textContent).toContain('11.1 導入形態の全体像');
        expect(s11?.textContent).toContain('11.2 導入形態別ベストプラクティス表');
        expect(s11?.textContent).toContain('11.3 ホスティング（配置）の選び方');
        expect(s11?.textContent).toContain('11.4 テスト活動別：導入の始め方と品質ゲート');
        expect(s11?.querySelector('[data-diagram="d15"]')).not.toBeNull();
    });

    it('renders section s12 (関連する規制・標準・フレームワーク)', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s12 = container.querySelector('#s12');
        expect(s12).not.toBeNull();
        expect(s12?.textContent).toContain('12. 関連する規制・標準・フレームワーク（第3章との接続）');
        expect(s12?.textContent).toContain('12.1 シラバス（第3章3.4.1）に挙げられているもの');
        expect(s12?.textContent).toContain('12.2 第5章の各項目との対応');
        expect(s12?.textContent).toContain('12.3 補足：EU AI Act第4条（AIリテラシー）に関する注意');
    });

    it('renders section s13 (章のまとめ・重要用語・暗記表) with d16 diagram', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s13 = container.querySelector('#s13');
        expect(s13).not.toBeNull();
        expect(s13?.textContent).toContain('13. 章のまとめ・重要用語・暗記表');
        expect(s13?.textContent).toContain('13.1 第5章の全体フロー（総まとめの図解）');
        expect(s13?.textContent).toContain('13.2 暗記表（K1問題の対策）');
        expect(s13?.textContent).toContain('13.3 重要用語集（日本語／英語）');
        expect(s13?.querySelector('[data-diagram="d16"]')).not.toBeNull();
    });

    it('matches Category 4 table inventory (cumulative 45 tables)', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(EXPECTED_TABLE_SPECS_CAT4.length);
        EXPECTED_TABLE_SPECS_CAT4.forEach((expected, i) => {
            const actual = tables[i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual([...expected.headers]);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toContain(expected.sample);
        });
    });

    it('renders callouts in s11 and s12', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const c11 = container.querySelector('#s11 .callout.source');
        expect(c11).not.toBeNull();
        expect(c11?.textContent).toContain('セキュリティエンジニア、法務、CTO、CISO');

        const c12 = container.querySelector('#s12 .callout.note');
        expect(c12).not.toBeNull();
        expect(c12?.textContent).toContain('Digital Omnibus on AI');
    });
});

export const EXPECTED_TABLE_SPECS_CAT5: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT4,
    {
        heading: '解答と解説',
        headers: ['問', '正解', '解説'],
        rows: 12,
        cols: 3,
        sample: 'DはシャドーAIの3リスク',
    },
    {
        heading: '16.1 出典の信頼度と、このガイドの検証状況（重要）',
        headers: ['区分', '説明'],
        rows: 4,
        cols: 2,
        sample: 'A（一次情報）',
    },
    {
        heading: '16.6 このガイドの各節と出典の対応',
        headers: ['節', '主な出典'],
        rows: 10,
        cols: 2,
        sample: '1（全体像・LO）',
    },
];

describe('CT-GenAI Chapter 5 Page (Cat 5: s14-s16)', () => {
    it('renders section s14 (確認問題) with 12 quiz cards and answer table', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s14 = container.querySelector('#s14');
        expect(s14).not.toBeNull();
        expect(s14?.textContent).toContain('14. 確認問題（オリジナル練習問題）');
        expect(s14?.textContent).toContain('公式サンプル問題ではありません');

        const quizCards = s14?.querySelectorAll('.quiz-card');
        expect(quizCards?.length).toBe(12);
        expect(s14?.textContent).toContain('問1（5.1.1／K1）');
        expect(s14?.textContent).toContain('問12（5.2／K2）');
        expect(s14?.textContent).toContain('解答と解説');
    });

    it('renders section s15 (学習チェックリスト) with checklist items', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s15 = container.querySelector('#s15');
        expect(s15).not.toBeNull();
        expect(s15?.textContent).toContain('15. 学習チェックリスト');
        expect(s15?.textContent).toContain('5.1 ロードマップ');
        expect(s15?.textContent).toContain('5.2 変革管理');
        expect(s15?.textContent).toContain('全体');

        const checkboxes = s15?.querySelectorAll('input[type="checkbox"]');
        expect(checkboxes?.length).toBe(19);
    });

    it('renders section s16 (参考文献・出典URL) and footer', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const s16 = container.querySelector('#s16');
        expect(s16).not.toBeNull();
        expect(s16?.textContent).toContain('16. 参考文献・出典URL');
        expect(s16?.textContent).toContain('16.1 出典の信頼度と、このガイドの検証状況（重要）');
        expect(s16?.textContent).toContain('16.2 A：公式（ISTQB）');
        expect(s16?.textContent).toContain('16.3 B：シラバス準拠の解説教材');
        expect(s16?.textContent).toContain('16.4 C：外部の標準・フレームワーク・ガイドライン');
        expect(s16?.textContent).toContain('16.5 D：第三者の解説');
        expect(s16?.textContent).toContain('16.6 このガイドの各節と出典の対応');

        const refItems = s16?.querySelectorAll('.ref-item');
        expect(refItems?.length).toBe(25);

        const footer = container.querySelector('.footer');
        expect(footer).not.toBeNull();
        expect(footer?.textContent).toContain('ISTQB® CT-GenAIシラバスv1.1に準拠');
    });

    it('matches all 48 tables exactly across the entire page', () => {
        const { container } = render(<CtGenAiChapter5Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBe(48);
        EXPECTED_TABLE_SPECS_CAT5.forEach((expected, i) => {
            const actual = tables[i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual([...expected.headers]);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toContain(expected.sample);
        });
    });
});
