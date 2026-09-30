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
