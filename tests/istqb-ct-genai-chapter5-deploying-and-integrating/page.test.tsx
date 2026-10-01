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
        heading: '実務ベストプラクティス（試験範囲外）',
        headers: ['実務施策', 'ねらい', '根拠'],
        rows: 5,
        cols: 3,
        sample: '承認済みAIツールの一覧（インベントリ）を作り公開する',
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
