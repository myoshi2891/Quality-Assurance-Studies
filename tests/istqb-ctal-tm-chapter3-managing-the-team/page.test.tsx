import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'bun:test';
import CtalTmChapter3Page from '../../app/istqb-ctal-tm-chapter3-managing-the-team/page';
import { collectTableInventory, type TableSpec } from '../helpers/table-inventory';

afterEach(() => cleanup());

export const EXPECTED_TOC_HREFS = [
    '#0-この文書の読み方と根拠の確度',
    '#1-第3章の全体像',
    '#11-章の基本情報',
    '#12-全体マップ',
    '#13-学習の進め方ステップバイステップ',
    '#2-31-テストチームthe-test-team',
    '#20-前提となる用語',
    '#21-311-4つの能力領域における典型的なスキル',
    '#22-312-必要なテストチームメンバーのスキルの分析',
    '#23-313-テストチームメンバーのスキルの評価',
    '#24-314-テストチームメンバーのスキルの育成',
    '#25-315-テストチームの管理に必要なマネジメントスキル',
    '#26-316-特定の状況におけるテストチームの動機付け要因と意欲低下要因',
    '#3-32-ステークホルダーとの関係stakeholder-relationships',
    '#31-321-品質コストcost-of-quality用語は-istqb-用語集に準拠',
    '#32-322-テストの費用対効果の関係cost-benefit-relationship-of-testing',
    '#4-第1章第2章とのつながり',
    '#5-試験対策',
    '#51-押さえるべきポイント',
    '#52-想定問題本ガイド作成者による練習問題',
    '#53-覚え方',
    '#6-ベストプラクティス総まとめ',
    '#7-アンチパターン集',
    '#8-学習チェックリスト',
    '#9-出典',
    '#91-公式一次情報',
    '#92-日本語版jstqb',
    '#93-発展学習',
    '#94-本ガイドの根拠の限界再掲',
];

export const EXPECTED_TABLE_SPECS_CAT1: TableSpec[] = [
    {
        heading: '0. この文書の読み方と「根拠の確度」',
        headers: ['記号', '意味'],
        rows: 2,
        cols: 2,
        sample: '🟢',
    },
    {
        heading: '1.1 章の基本情報（🟢）',
        headers: ['項目', '内容'],
        rows: 5,
        cols: 2,
        sample: '章タイトル',
    },
    {
        heading: '1.3 学習の進め方（ステップバイステップ）',
        headers: ['ステップ', 'やること', '目安'],
        rows: 5,
        cols: 3,
        sample: '1',
    },
];

describe('CTAL-TM v3.0 Chapter 3 - Category 1: 基盤 & 全体像', () => {
    it('renders hero title and meta information', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const h1 = container.querySelector('h1');
        expect(h1).not.toBeNull();
        expect(h1?.textContent).toContain('CTAL-TM v3.0 第3章「チームの管理」');

        const eyebrow = container.querySelector('.hero-eyebrow');
        expect(eyebrow?.textContent).toContain('ISTQB® CTAL-TM v3.0 ・ Chapter 3');

        const heroP = container.querySelector('.hero p');
        expect(heroP?.textContent).toContain('初学者向け解説ガイド');
        expect(heroP?.textContent).toContain('Managing the Team');
    });

    it('renders sidebar TOC with all 29 links matching expected hrefs', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const navLinks = container.querySelectorAll('.sidebar-nav a');
        expect(navLinks.length).toBe(29);
        const hrefs = Array.from(navLinks).map((a) => a.getAttribute('href'));
        expect(hrefs).toEqual(EXPECTED_TOC_HREFS);
    });

    it('renders section 0 reading guide and accuracy table', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec0 = container.querySelector('[id="0-この文書の読み方と根拠の確度"]');
        expect(sec0).not.toBeNull();

        const calloutWarning = container.querySelector('.callout-warning');
        expect(calloutWarning).not.toBeNull();
        expect(calloutWarning?.textContent).toContain('重要な注意');
        expect(calloutWarning?.textContent).toContain('Version 3.0.J04');
    });

    it('renders section 1 overview with 1.1 basic info table and numbered list', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec1 = container.querySelector('[id="1-第3章の全体像"]');
        expect(sec1).not.toBeNull();

        const sec11 = container.querySelector('[id="11-章の基本情報"]');
        expect(sec11).not.toBeNull();

        const orderedList = container.querySelector('.main ol');
        expect(orderedList).not.toBeNull();
        const listItems = orderedList?.querySelectorAll('li');
        expect(listItems?.length).toBe(3);
        expect(listItems?.[0].textContent).toContain('プロジェクトのコンテキストを分析し');
        expect(listItems?.[1].textContent).toContain('ホールチームアプローチ');
        expect(listItems?.[2].textContent).toContain('ビジネスケースを定義する');
    });

    it('renders section 1.2 overview map with Mermaid container', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec12 = container.querySelector('[id="12-全体マップ"]');
        expect(sec12).not.toBeNull();

        const mermaidContainers = container.querySelectorAll('.mermaid-container');
        expect(mermaidContainers.length).toBeGreaterThanOrEqual(1);
    });

    it('renders section 1.3 learning steps table', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec13 = container.querySelector('[id="13-学習の進め方ステップバイステップ"]');
        expect(sec13).not.toBeNull();
    });

    it('matches Category 1 table inventory precisely (3 tables)', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const allTables = collectTableInventory(container);
        const cat1Tables = allTables.slice(0, 3);
        expect(cat1Tables.length).toBe(3);

        EXPECTED_TABLE_SPECS_CAT1.forEach((expected, i) => {
            const actual = cat1Tables[i];
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual(expected.headers as string[]);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toBe(expected.sample);
        });
    });
});
