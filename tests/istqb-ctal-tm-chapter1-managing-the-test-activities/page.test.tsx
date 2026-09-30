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
