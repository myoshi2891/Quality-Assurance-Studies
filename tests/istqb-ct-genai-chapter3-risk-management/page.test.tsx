import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'bun:test';
import CtGenAiChapter3Page from '../../app/istqb-ct-genai-chapter3-risk-management/page';
import { collectTableInventory, type TableSpec } from '../helpers/table-inventory';

afterEach(() => cleanup());

export const EXPECTED_TOC_LINKS = [
    { href: '#-この文書の読み方', text: '📌 この文書の読み方', isH3: false },
    { href: '#1-第3章の全体像', text: '1. 第3章の全体像', isH3: false },
    { href: '#11-この章は一言で言うと', text: '1.1 この章は一言で言うと', isH3: true },
    { href: '#12-学習目標learning-objectives一覧', text: '1.2 学習目標（Learning Objectives）一覧', isH3: true },
    { href: '#13-第3章の全体マップ', text: '1.3 第3章の全体マップ', isH3: true },
    { href: '#14-試験の基本情報', text: '1.4 試験の基本情報', isH3: true },
    { href: '#2-31-ハルシネーション推論エラーバイアス', text: '2. 3.1 ハルシネーション・推論エラー・バイアス', isH3: false },
    { href: '#20-なぜこの節が必要なのか', text: '2.0 なぜこの節が必要なのか', isH3: true },
    { href: '#21-genai-311--k13つの間違いの定義', text: '2.1 【GenAI-3.1.1 / K1】3つの「間違い」の定義', isH3: true },
    { href: '#22-genai-312--k3llm-の出力から3つの間違いを見つける', text: '2.2 【GenAI-3.1.2 / K3】LLM の出力から3つの間違いを見つける', isH3: true },
    { href: '#23-genai-313--k2ハルシネーション推論エラーバイアスの軽減方法', text: '2.3 【GenAI-3.1.3 / K2】ハルシネーション・推論エラー・バイアスの軽減方法', isH3: true },
    { href: '#24-genai-314--k1非決定的な振る舞いnon-deterministic-behaviorへの対処', text: '2.4 【GenAI-3.1.4 / K1】非決定的な振る舞い（Non-Deterministic Behavior）への対処', isH3: true },
    { href: '#3-32-データプライバシーとセキュリティのリスク', text: '3. 3.2 データプライバシーとセキュリティのリスク', isH3: false },
    { href: '#30-なぜこの節が必要なのか', text: '3.0 なぜこの節が必要なのか', isH3: true },
    { href: '#31-genai-321--k2データプライバシーとセキュリティの主なリスク', text: '3.1 【GenAI-3.2.1 / K2】データプライバシーとセキュリティの主なリスク', isH3: true },
    { href: '#32-genai-322--k2データプライバシーと脆弱性の例攻撃ベクトル4種', text: '3.2 【GenAI-3.2.2 / K2】データプライバシーと脆弱性の例：攻撃ベクトル4種', isH3: true },
    { href: '#33-genai-323--k2プライバシー保護とセキュリティ強化の緩和策', text: '3.3 【GenAI-3.2.3 / K2】プライバシー保護とセキュリティ強化の緩和策', isH3: true },
    { href: '#4-33-エネルギー消費と環境への影響', text: '4. 3.3 エネルギー消費と環境への影響', isH3: false },
    { href: '#40-なぜこの節が必要なのか', text: '4.0 なぜこの節が必要なのか', isH3: true },
    { href: '#41-genai-331--k2タスクの特徴とモデルの使い方が消費量に与える影響', text: '4.1 【GenAI-3.3.1 / K2】タスクの特徴とモデルの使い方が消費量に与える影響', isH3: true },
    { href: '#5-34-ai規制標準ベストプラクティスフレームワーク', text: '5. 3.4 AI規制・標準・ベストプラクティスフレームワーク', isH3: false },
    { href: '#50-なぜこの節が必要なのか', text: '5.0 なぜこの節が必要なのか', isH3: true },
    { href: '#51-genai-341--k14つの例', text: '5.1 【GenAI-3.4.1 / K1】4つの例', isH3: true },
    { href: '#6-試験対策まとめチェックリスト練習問題', text: '6. 試験対策：まとめ・チェックリスト・練習問題', isH3: false },
    { href: '#61-第3章-総まとめ表試験直前チェック用', text: '6.1 第3章 総まとめ表（試験直前チェック用）', isH3: true },
    { href: '#62-よくある間違いひっかけポイント', text: '6.2 よくある間違い（ひっかけポイント）', isH3: true },
    { href: '#63-実務導入チェックリスト-補足', text: '6.3 実務導入チェックリスト（💡 補足）', isH3: true },
    { href: '#64-練習問題オリジナル12問', text: '6.4 練習問題（オリジナル・12問）', isH3: true },
    { href: '#7-参考url根拠ソース一覧', text: '7. 参考URL（根拠ソース一覧）', isH3: false },
    { href: '#71-最重要istqb-公式一次ソース', text: '7.1 【最重要】ISTQB 公式（一次ソース）', isH3: true },
    { href: '#72-学習の補助資料二次ソース', text: '7.2 学習の補助資料（二次ソース）', isH3: true },
    { href: '#73-31-節非決定性temperatureseedの補足', text: '7.3 3.1 節（非決定性・temperature・seed）の補足', isH3: true },
    { href: '#74-32-節プライバシーセキュリティの補足', text: '7.4 3.2 節（プライバシー・セキュリティ）の補足', isH3: true },
    { href: '#75-33-節エネルギーの補足', text: '7.5 3.3 節（エネルギー）の補足', isH3: true },
    { href: '#76-34-節規制標準フレームワークの補足', text: '7.6 3.4 節（規制・標準・フレームワーク）の補足', isH3: true },
    { href: '#77-本文書の情報の確からしさについて', text: '7.7 本文書の情報の確からしさについて', isH3: true },
];

export const EXPECTED_TABLE_SPECS_CAT0: TableSpec[] = [
    {
        heading: '📌 この文書の読み方',
        headers: ['記号', '意味'],
        rows: 5,
        cols: 2,
        sample: '📌 シラバス記載',
    },
];

export const EXPECTED_TABLE_SPECS_CAT1: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT0,
    {
        heading: '1.1 この章は一言で言うと',
        headers: ['新人アシスタントの例え', '対応する節'],
        rows: 4,
        cols: 2,
        sample: '自信満々に間違ったことを言う',
    },
    {
        heading: '1.2 学習目標（Learning Objectives）一覧',
        headers: ['ID', 'レベル', '学習目標', '本文書の場所'],
        rows: 9,
        cols: 4,
        sample: 'GenAI-3.1.1',
    },
    {
        heading: '1.2 学習目標（Learning Objectives）一覧',
        headers: ['種類', 'キーワード'],
        rows: 2,
        cols: 2,
        sample: '一般キーワード',
    },
    {
        heading: '1.4 試験の基本情報',
        headers: ['項目', '内容'],
        rows: 5,
        cols: 2,
        sample: '問題数',
    },
];

export const EXPECTED_TABLE_SPECS_CAT2: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT1,
    {
        heading: '2.1 【GenAI-3.1.1 / K1】3つの「間違い」の定義',
        headers: ['用語', '定義（シラバスの意味）', '日常の例え', 'テスト現場での具体例'],
        rows: 3,
        cols: 4,
        sample: 'ハルシネーション（hallucination＝幻覚）',
    },
    {
        heading: '試験で問われやすいポイント（K1）',
        headers: ['出題パターン', '正解の考え方'],
        rows: 4,
        cols: 2,
        sample: '「存在しない受け入れ基準を検証するテストケースを生成した」',
    },
    {
        heading: '検出方法の一覧',
        headers: ['対象', '検出方法', '内容', '例え話'],
        rows: 7,
        cols: 4,
        sample: 'ハルシネーション',
    },
    {
        heading: '検出の判断フロー',
        headers: ['手順', 'LLM の出力内容', '判定', '見つけた方法', '対処'],
        rows: 6,
        cols: 5,
        sample: '1',
    },
    {
        heading: 'ハンズオン目標の追体験（HO-3.1.2a / HO-3.1.2b：H1）',
        headers: ['HO', 'ねらい', '進め方'],
        rows: 2,
        cols: 3,
        sample: 'HO-3.1.2a（ハルシネーションの実験）',
    },
    {
        heading: 'ハンズオン目標の追体験（HO-3.1.2a / HO-3.1.2b：H1）',
        headers: ['場面', 'ベストプラクティス', '理由'],
        rows: 5,
        cols: 3,
        sample: 'チャットボットで単発にテストケースを作る',
    },
    {
        heading: '5つの軽減技法',
        headers: ['#', '技法', '内容', '例え話', '関連する章'],
        rows: 5,
        cols: 5,
        sample: '1',
    },
    {
        heading: '2つの軽減策',
        headers: ['設定', '何をするか', '効果', '注意点（トレードオフ）', '例え話'],
        rows: 2,
        cols: 5,
        sample: 'temperature（温度）を下げる',
    },
    {
        heading: 'temperature の効果の図',
        headers: ['設定', '1回目', '2回目', '3回目', '4回目', '5回目', '出力の種類数', '読み取れること'],
        rows: 3,
        cols: 8,
        sample: 'temperature 高め、seed なし',
    },
    {
        heading: 'temperature の効果の図',
        headers: ['使っているもの', '主なリスク', 'ベストプラクティス', '根拠'],
        rows: 6,
        cols: 4,
        sample: 'AI チャットボット（ブラウザ上で対話する形式）',
    },
    {
        heading: '3.1 節の試験ポイントまとめ',
        headers: ['観点', '覚えること'],
        rows: 5,
        cols: 2,
        sample: '定義（K1）',
    },
];

describe('CT-GenAI Chapter 3 Page (Cat 0: Hero & How-to-read)', () => {
    it('renders hero title and meta information correctly', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        const h1 = container.querySelector('h1.hero-title');
        expect(h1).not.toBeNull();
        expect(h1?.textContent).toContain('CT-GenAI');
        expect(h1?.textContent).toContain('第3章：ソフトウェアテストにおける生成AIのリスク管理');

        const eyebrow = container.querySelector('.hero-eyebrow');
        expect(eyebrow?.textContent).toContain('CT-GenAI｜Testing with Generative AI 認定試験 学習ガイド');

        const metaItems = container.querySelectorAll('.hero-meta-item');
        expect(metaItems.length).toBe(3);
        expect(metaItems[0]?.textContent).toContain('ISTQB® Certified Tester Specialist Level');
        expect(metaItems[1]?.textContent).toContain('Syllabus v1.1（2026/04/27 版）第3章');
        expect(metaItems[2]?.textContent).toContain('2026/09/24');
    });

    it('renders Cat 0 heading and warning callout correctly', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        const h2 = container.querySelector('h2#-この文書の読み方');
        expect(h2).not.toBeNull();
        expect(h2?.textContent).toContain('📌 この文書の読み方');

        const warningCallout = container.querySelector('.callout-warning');
        expect(warningCallout).not.toBeNull();
        expect(warningCallout?.textContent).toContain('シラバス 0.6 節によると');
    });

    it('matches table inventory for Cat 0', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(1);

        const t0 = tables[0];
        expect(t0.heading).toBe(EXPECTED_TABLE_SPECS_CAT0[0].heading);
        expect(t0.headers).toEqual([...EXPECTED_TABLE_SPECS_CAT0[0].headers]);
        expect(t0.rows).toBe(EXPECTED_TABLE_SPECS_CAT0[0].rows);
        expect(t0.cols).toBe(EXPECTED_TABLE_SPECS_CAT0[0].cols);
        expect(t0.sample).toContain(EXPECTED_TABLE_SPECS_CAT0[0].sample);
    });

    it('renders all expected TOC links in the sidebar', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        const sidebar = container.querySelector('nav.sidebar');
        expect(sidebar).not.toBeNull();

        const links = Array.from(sidebar?.querySelectorAll('a') ?? []);
        expect(links.length).toBe(EXPECTED_TOC_LINKS.length);

        EXPECTED_TOC_LINKS.forEach((expected, i) => {
            const actual = links[i];
            expect(actual.getAttribute('href')).toBe(expected.href);
            expect(actual.textContent?.trim()).toBe(expected.text);
        });
    });
});

describe('CT-GenAI Chapter 3 Page (Cat 1: 1. 第3章の全体像)', () => {
    it('renders all Cat 1 headings and paragraphs correctly', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        const h2 = container.querySelector('h2#1-第3章の全体像');
        expect(h2).not.toBeNull();
        expect(h2?.textContent).toContain('1. 第3章の全体像');

        const h3Ids = [
            '11-この章は一言で言うと',
            '12-学習目標learning-objectives一覧',
            '13-第3章の全体マップ',
            '14-試験の基本情報',
        ];
        h3Ids.forEach((id) => {
            const h3 = container.querySelector(`h3#${id}`);
            expect(h3).not.toBeNull();
        });
    });

    it('renders Mermaid diagram 0 container correctly', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        const mermaidContainer = container.querySelector('[data-diagram-id="mermaid-diagram-0"]');
        expect(mermaidContainer).not.toBeNull();
    });

    it('matches table inventory through Cat 1', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(EXPECTED_TABLE_SPECS_CAT1.length);

        EXPECTED_TABLE_SPECS_CAT1.forEach((expected, i) => {
            const actual = tables[i];
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual([...expected.headers]);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toContain(expected.sample);
        });
    });

    it('renders glossary and practice callouts in Cat 1', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        const glossary = container.querySelector('.callout-glossary');
        expect(glossary).not.toBeNull();
        expect(glossary?.textContent).toContain('GenAI（生成AI）');
        expect(glossary?.textContent).toContain('LLM（大規模言語モデル）');
        expect(glossary?.textContent).toContain('テストウェア');
        expect(glossary?.textContent).toContain('K レベル');

        const practice = container.querySelector('.callout-practice');
        expect(practice).not.toBeNull();
        expect(practice?.textContent).toContain('満点が 46 点で問題数が 40 問なのは');
    });
});

describe('CT-GenAI Chapter 3 Page (Cat 2: 2. 3.1 ハルシネーション・推論エラー・バイアス)', () => {
    it('renders Cat 2 headings correctly', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        const h2 = container.querySelector('h2#2-31-ハルシネーション推論エラーバイアス');
        expect(h2).not.toBeNull();
        expect(h2?.textContent).toContain('2. 3.1 ハルシネーション・推論エラー・バイアス');

        const h3Ids = [
            '20-なぜこの節が必要なのか',
            '21-genai-311--k13つの間違いの定義',
            '22-genai-312--k3llm-の出力から3つの間違いを見つける',
            '23-genai-313--k2ハルシネーション推論エラーバイアスの軽減方法',
            '24-genai-314--k1非決定的な振る舞いnon-deterministic-behaviorへの対処',
        ];
        h3Ids.forEach((id) => {
            const h3 = container.querySelector(`h3#${id}`);
            expect(h3).not.toBeNull();
        });
    });

    it('renders Mermaid diagrams 1, 2, 3, 4 correctly', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        ['mermaid-diagram-1', 'mermaid-diagram-2', 'mermaid-diagram-3', 'mermaid-diagram-4'].forEach((id) => {
            const el = container.querySelector(`[data-diagram-id="${id}"]`);
            expect(el).not.toBeNull();
        });
    });

    it('matches table inventory through Cat 2', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        const tables = collectTableInventory(container);
        expect(tables.length).toBeGreaterThanOrEqual(EXPECTED_TABLE_SPECS_CAT2.length);

        EXPECTED_TABLE_SPECS_CAT2.forEach((expected, i) => {
            const actual = tables[i];
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual([...expected.headers]);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toContain(expected.sample);
        });
    });

    it('renders code blocks in Cat 2', () => {
        const { container } = render(<CtGenAiChapter3Page />);
        const pres = Array.from(container.querySelectorAll('pre:not(.mermaid)'));
        expect(pres.length).toBeGreaterThanOrEqual(3);
    });
});


