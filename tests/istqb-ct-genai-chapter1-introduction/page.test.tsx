import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'bun:test';
import CtGenAiChapter1Page from '../../app/istqb-ct-genai-chapter1-introduction/page';
import { collectTableInventory, type TableSpec } from '../helpers/table-inventory';

afterEach(() => cleanup());

export const EXPECTED_TOC_LINKS = [
    { href: '#この章の位置づけと全体像', text: 'この章の位置づけと全体像', isH3: false },
    { href: '#学習目標一覧', text: '学習目標一覧', isH3: false },
    { href: '#重要キーワード一覧', text: '重要キーワード一覧', isH3: false },
    { href: '#11-生成aiの基礎と主要概念', text: '1.1 生成AIの基礎と主要概念', isH3: false },
    { href: '#111-aiの系譜記号的ai古典的機械学習深層学習生成ai', text: '1.1.1 AIの系譜：記号的AI・古典的機械学習・深層学習・生成AI', isH3: true },
    { href: '#112-生成aiとllmの基礎', text: '1.1.2 生成AIとLLMの基礎', isH3: true },
    { href: '#113-基盤llm指示チューニング済みllm推論llm', text: '1.1.3 基盤LLM・指示チューニング済みLLM・推論LLM', isH3: true },
    { href: '#114-マルチモーダルllmとvision-language-model', text: '1.1.4 マルチモーダルLLMとVision-Language Model', isH3: true },
    { href: '#12-ソフトウェアテストにおける生成ai活用の原則', text: '1.2 ソフトウェアテストにおける生成AI活用の原則', isH3: false },
    { href: '#121-テストタスクにおけるllmの主要能力', text: '1.2.1 テストタスクにおけるLLMの主要能力', isH3: true },
    { href: '#122-aiチャットボットとllm搭載テストアプリケーション', text: '1.2.2 AIチャットボットとLLM搭載テストアプリケーション', isH3: true },
    { href: '#章のまとめ', text: '章のまとめ', isH3: false },
    { href: '#出典参考文献', text: '出典・参考文献', isH3: false },
];

export const EXPECTED_TABLE_SPECS_CAT1: TableSpec[] = [
    {
        heading: 'この章の位置づけと全体像',
        headers: ['節', 'タイトル', '内容の要旨'],
        rows: 2,
        cols: 3,
        sample: '1.1',
    },
    {
        heading: '学習目標一覧',
        headers: ['項番', '認知レベル', '学習目標の要旨'],
        rows: 8,
        cols: 3,
        sample: 'GenAI-1.1.1',
    },
    {
        heading: '重要キーワード一覧',
        headers: ['英語用語', '日本語', '簡単な説明'],
        rows: 16,
        cols: 3,
        sample: 'generative AI',
    },
];

export const EXPECTED_TABLE_SPECS_CAT2: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT1,
    {
        heading: '1.1.1 AIの系譜：記号的AI・古典的機械学習・深層学習・生成AI',
        headers: ['種類', 'アプローチ', '必要な工程', 'ソフトウェアテストでの活用例'],
        rows: 4,
        cols: 4,
        sample: '記号的AI',
    },
];

export const EXPECTED_TABLE_SPECS_CAT3: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT2,
    {
        heading: '1.1.3 基盤LLM・指示チューニング済みLLM・推論LLM',
        headers: ['種類', '学習方法', '強み', 'テストでの適用イメージ'],
        rows: 3,
        cols: 4,
        sample: '基盤LLM',
    },
];



describe('CT-GenAI 第1章：生成AIソフトウェアテスト入門 完全ガイド (Category 1: 導入部基盤)', () => {
    it('ヒーロー領域（H1、バッジ、リード文）が正しくレンダリングされること', () => {
        const { container } = render(<CtGenAiChapter1Page />);
        const hero = container.querySelector('.hero');
        expect(hero).not.toBeNull();

        const badge = hero?.querySelector('.badge');
        expect(badge?.textContent?.trim()).toBe('ISTQB® Certified Tester – Testing with Generative AI');

        const h1 = hero?.querySelector('h1');
        expect(h1?.textContent?.trim()).toBe('CT-GenAI 第1章：生成AIソフトウェアテスト入門 完全ガイド');

        const lead = hero?.querySelector('p');
        expect(lead?.textContent).toContain('本ガイドは ISTQB® Certified Tester – Testing with Generative AI（CT-GenAI）シラバスの 第1章');
    });

    it('サイドバーナビ（NavBar）に13件の目次リンクとモバイルトグルが存在すること', () => {
        const { container } = render(<CtGenAiChapter1Page />);
        const sidebar = container.querySelector('nav.sidebar, aside.sidebar');
        expect(sidebar).not.toBeNull();
        expect(sidebar?.id).toBe('sidebar');

        const badge = sidebar?.querySelector('.sidebar-header .badge');
        expect(badge?.textContent?.trim()).toBe('CT-GenAI');

        const h2 = sidebar?.querySelector('.sidebar-header h2');
        expect(h2?.textContent?.trim()).toBe('第1章：生成AI入門');

        const toggle = container.querySelector('#sidebarToggle');
        expect(toggle).not.toBeNull();
        expect(toggle?.getAttribute('aria-controls')).toBe('sidebar');
        expect(toggle?.getAttribute('aria-expanded')).toBe('false');

        const links = Array.from(sidebar?.querySelectorAll('.nav-list a') ?? []);
        expect(links.length).toBe(EXPECTED_TOC_LINKS.length);

        EXPECTED_TOC_LINKS.forEach((expected, i) => {
            const link = links[i];
            expect(link.getAttribute('href')).toBe(expected.href);
            expect(link.getAttribute('data-target')).toBe(expected.href.replace('#', ''));
            expect(link.textContent?.trim()).toBe(expected.text);

            const li = link.closest('li');
            if (expected.isH3) {
                expect(li?.classList.contains('nav-h3')).toBe(true);
            } else {
                expect(li?.classList.contains('nav-h2')).toBe(true);
            }
        });
    });

    it('Category 1 のテーブル（節一覧、学習目標、キーワード）が構成要素インベントリと 1 対 1 で一致すること', () => {
        const { container } = render(<CtGenAiChapter1Page />);
        const inventory = collectTableInventory(container);

        EXPECTED_TABLE_SPECS_CAT1.forEach((expected, i) => {
            const actual = inventory[i];
            expect(actual).toBeDefined();
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual(expected.headers);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toBe(expected.sample);
        });
    });

    it('「この章の位置づけと全体像」セクションの主要本文が正しくレンダリングされること', () => {
        const { container } = render(<CtGenAiChapter1Page />);
        const sectionHeading = container.querySelector('h2#この章の位置づけと全体像');
        expect(sectionHeading).not.toBeNull();
        expect(sectionHeading?.textContent?.trim()).toBe('この章の位置づけと全体像');

        const mainText = container.textContent ?? '';
        expect(mainText).toContain('CT-GenAI試験は、ISTQB® Certified Tester Foundation Level（CTFL）取得を前提資格とするスペシャリストレベルの認定です。');
        expect(mainText).toContain('40問・合計46点・合格ライン30点（65%）・制限時間60分');
        expect(mainText).toContain('100分');
    });

    it('「学習目標一覧」セクションとベストプラクティスコールアウトが正しくレンダリングされること', () => {
        const { container } = render(<CtGenAiChapter1Page />);
        const sectionHeading = container.querySelector('h2#学習目標一覧');
        expect(sectionHeading).not.toBeNull();

        const callout = container.querySelector('.callout-practice');
        expect(callout).not.toBeNull();
        expect(callout?.querySelector('.callout-label')?.textContent).toContain('ベストプラクティス（学習の進め方）');

        const items = callout?.querySelectorAll('li');
        expect(items?.length).toBe(3);
        expect(items?.[0]?.textContent).toContain('K1項目（1.1.1）は用語と分類の暗記が中心');
        expect(items?.[1]?.textContent).toContain('K2項目が大半を占めるため');
        expect(items?.[2]?.textContent).toContain('HO（ハンズオン）項目は本番の試験には直接出題されないが');
    });

    it('「重要キーワード一覧」セクションが正しくレンダリングされること', () => {
        const { container } = render(<CtGenAiChapter1Page />);
        const sectionHeading = container.querySelector('h2#重要キーワード一覧');
        expect(sectionHeading).not.toBeNull();

        const mainText = container.textContent ?? '';
        expect(mainText).toContain('Generative AI Specific Keywords');
        expect(mainText).toContain('generative AI');
        expect(mainText).toContain('large language model (LLM)');
        expect(mainText).toContain('AI chatbot');
    });
});

describe('CT-GenAI 第1章：生成AIソフトウェアテスト入門 完全ガイド (Category 2: セクション1.1前半)', () => {
    it('1.1節の見出し、1.1.1節の本文、リスト、Mermaid図解、Table 4、コールアウトがレンダリングされること', () => {
        const { container } = render(<CtGenAiChapter1Page />);
        const h2 = container.querySelector('h2#11-生成aiの基礎と主要概念');
        expect(h2).not.toBeNull();
        expect(h2?.textContent?.trim()).toBe('1.1 生成AIの基礎と主要概念');

        const h3_1 = container.querySelector('h3#111-aiの系譜記号的ai古典的機械学習深層学習生成ai');
        expect(h3_1).not.toBeNull();
        expect(h3_1?.textContent?.trim()).toBe('1.1.1 AIの系譜：記号的AI・古典的機械学習・深層学習・生成AI');

        const text = container.textContent ?? '';
        expect(text).toContain('記号的AI（Symbolic AI）');
        expect(text).toContain('古典的機械学習（Classical Machine Learning）');
        expect(text).toContain('深層学習（Deep Learning）');
        expect(text).toContain('生成AI（Generative AI）');
        expect(text).toContain('適したテストタスクであれば追加の学習フェーズを経ずに事前学習済みのモデルを適用できる点');

        // Mermaid Diagram 1
        const diagram1 = container.querySelector('#mermaid-diagram-1, [data-diagram-id="mermaid-diagram-1"]');
        expect(diagram1).not.toBeNull();

        // Table 4
        const inventory = collectTableInventory(container);
        expect(inventory.length).toBeGreaterThanOrEqual(4);
        const t4 = inventory[3];
        expect(t4.heading).toBe('1.1.1 AIの系譜：記号的AI・古典的機械学習・深層学習・生成AI');
        expect(t4.headers).toEqual(['種類', 'アプローチ', '必要な工程', 'ソフトウェアテストでの活用例']);
        expect(t4.rows).toBe(4);
        expect(t4.cols).toBe(4);
        expect(t4.sample).toBe('記号的AI');

        // Callout 2
        const callouts = container.querySelectorAll('.callout-practice');
        expect(callouts.length).toBeGreaterThanOrEqual(2);
        const callout2 = callouts[1];
        expect(callout2.querySelector('.callout-label')?.textContent).toContain('ベストプラクティス');
        const items = callout2.querySelectorAll('li');
        expect(items.length).toBe(3);
        expect(items[0]?.textContent).toContain('適したタスクでは追加の学習フェーズが不要');
        expect(items[1]?.textContent).toContain('ハルシネーション・バイアスなど');
        expect(items[2]?.textContent).toContain('古典的機械学習の方が適していることもある');
    });

    it('1.1.2節の本文、リスト、Mermaid図解、HO-1.1.2見出し、コールアウトがレンダリングされること', () => {
        const { container } = render(<CtGenAiChapter1Page />);
        const h3_2 = container.querySelector('h3#112-生成aiとllmの基礎');
        expect(h3_2).not.toBeNull();
        expect(h3_2?.textContent?.trim()).toBe('1.1.2 生成AIとLLMの基礎');

        const text = container.textContent ?? '';
        expect(text).toContain('小規模言語モデル（SLM）');
        expect(text).toContain('トークン化（Tokenization）');
        expect(text).toContain('埋め込み（Embedding）');
        expect(text).toContain('Transformer');
        expect(text).toContain('非決定的（non-deterministic）');
        expect(text).toContain('コンテキストウィンドウ（Context Window）');
        expect(text).toContain('「統計的にもっともらしい」ことは「正しい」ことを意味しない');

        // Mermaid Diagram 2
        const diagram2 = container.querySelector('#mermaid-diagram-2, [data-diagram-id="mermaid-diagram-2"]');
        expect(diagram2).not.toBeNull();

        // H4
        const h4 = container.querySelector('h4#ハンズオン演習ho-112の狙い');
        expect(h4).not.toBeNull();
        expect(h4?.textContent?.trim()).toBe('ハンズオン演習（HO-1.1.2）の狙い');

        // Callout 3
        const callouts = container.querySelectorAll('.callout-practice');
        expect(callouts.length).toBeGreaterThanOrEqual(3);
        const callout3 = callouts[2];
        expect(callout3.querySelector('.callout-label')?.textContent).toContain('ベストプラクティス');
        const items = callout3.querySelectorAll('li');
        expect(items.length).toBe(4);
        expect(items[0]?.textContent).toContain('概算のトークン数を確認する習慣をつける');
        expect(items[1]?.textContent).toContain('日本語は英語に比べて1文字あたりのトークン消費量が多くなりがち');
        expect(items[2]?.textContent).toContain('出力の非決定性を前提に');
        expect(items[3]?.textContent).toContain('プロンプトチェイニング');
    });
});

describe('CT-GenAI 第1章：生成AIソフトウェアテスト入門 完全ガイド (Category 3: セクション1.1後半)', () => {
    it('1.1.3節の見出し、本文、リスト、Mermaid図解3、Table 5、コールアウトがレンダリングされること', () => {
        const { container } = render(<CtGenAiChapter1Page />);
        const h3_3 = container.querySelector('h3#113-基盤llm指示チューニング済みllm推論llm');
        expect(h3_3).not.toBeNull();
        expect(h3_3?.textContent?.trim()).toBe('1.1.3 基盤LLM・指示チューニング済みLLM・推論LLM');

        const text = container.textContent ?? '';
        expect(text).toContain('基盤LLM（Foundation LLM）');
        expect(text).toContain('指示チューニング済みLLM（Instruction-tuned LLM）');
        expect(text).toContain('推論LLM（Reasoning LLM）');
        expect(text).toContain('Chain-of-Thought（思考の連鎖）');
        expect(text).toContain('タスクの複雑さと推論の必要性に応じて使い分ける');

        // Mermaid Diagram 3
        const diagram3 = container.querySelector('#mermaid-diagram-3, [data-diagram-id="mermaid-diagram-3"]');
        expect(diagram3).not.toBeNull();

        // Table 5
        const inventory = collectTableInventory(container);
        expect(inventory.length).toBeGreaterThanOrEqual(5);
        const t5 = inventory[4];
        expect(t5.heading).toBe('1.1.3 基盤LLM・指示チューニング済みLLM・推論LLM');
        expect(t5.headers).toEqual(['種類', '学習方法', '強み', 'テストでの適用イメージ']);
        expect(t5.rows).toBe(3);
        expect(t5.cols).toBe(4);
        expect(t5.sample).toBe('基盤LLM');

        // Callout 4
        const callouts = container.querySelectorAll('.callout-practice');
        expect(callouts.length).toBeGreaterThanOrEqual(4);
        const callout4 = callouts[3];
        expect(callout4.querySelector('.callout-label')?.textContent).toContain('ベストプラクティス');
        const items = callout4.querySelectorAll('li');
        expect(items.length).toBe(3);
        expect(items[0]?.textContent).toContain('タスクの複雑さに見合ったモデルを選ぶ');
        expect(items[1]?.textContent).toContain('複数のリスク要因や依存関係を同時に考慮する必要があるタスクには推論LLM');
        expect(items[2]?.textContent).toContain('自組織で利用するLLMがどのカテゴリに属するか');
    });

    it('1.1.4節の見出し、本文、Mermaid図解4、HO-1.1.4見出し、コールアウトがレンダリングされること', () => {
        const { container } = render(<CtGenAiChapter1Page />);
        const h3_4 = container.querySelector('h3#114-マルチモーダルllmとvision-language-model');
        expect(h3_4).not.toBeNull();
        expect(h3_4?.textContent?.trim()).toBe('1.1.4 マルチモーダルLLMとVision-Language Model');

        const text = container.textContent ?? '';
        expect(text).toContain('視覚エンコーダ（Vision Encoder）');
        expect(text).toContain('Vision-Language Model（VLM）');
        expect(text).toContain('期待結果と実際の画面表示との齟齬をテスターが特定する');

        // Mermaid Diagram 4
        const diagram4 = container.querySelector('#mermaid-diagram-4, [data-diagram-id="mermaid-diagram-4"]');
        expect(diagram4).not.toBeNull();

        // H4
        const h4 = container.querySelector('h4#ハンズオン演習ho-114の狙い');
        expect(h4).not.toBeNull();
        expect(h4?.textContent?.trim()).toBe('ハンズオン演習（HO-1.1.4）の狙い');

        // Callout 5
        const callouts = container.querySelectorAll('.callout-practice');
        expect(callouts.length).toBeGreaterThanOrEqual(5);
        const callout5 = callouts[4];
        expect(callout5.querySelector('.callout-label')?.textContent).toContain('ベストプラクティス');
        const items = callout5.querySelectorAll('li');
        expect(items.length).toBe(3);
        expect(items[0]?.textContent).toContain('期待される仕様（テキスト）');
        expect(items[1]?.textContent).toContain('個人情報や機密情報が映り込んだスクリーンショット');
        expect(items[2]?.textContent).toContain('まずは小規模な画面や単純なUIコンポーネントから試し');
    });
});


