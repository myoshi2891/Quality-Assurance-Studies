import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'bun:test';
import CtalTaChapter3Page from '../../app/istqb-ctal-ta-chapter3-test-analysis-and-design/page';

describe('CTAL-TA v4.0 Chapter 3 - Category 0 & 1: Scaffolding, NavBar & Overview', () => {
    it('renders the page container and main structure with ctal-ta-ch3-page class', () => {
        const { container } = render(<CtalTaChapter3Page />);
        const pageLayout = container.querySelector('.ctal-ta-ch3-page');
        expect(pageLayout).toBeTruthy();
        expect(container.querySelector('nav')).toBeTruthy();
        expect(container.querySelector('main')).toBeTruthy();
    });

    it('renders the 33 sidebar navigation links with exact targets', () => {
        const { container } = render(<CtalTaChapter3Page />);
        const expectedHrefs = [
            '#0-このガイドについて',
            '#01-なぜ第3章が重要なのか',
            '#02-試験の全体像',
            '#03-本ガイドの読み方',
            '#04-kレベル認知レベルバッジの見方',
            '#1-第3章の全体構造--4分類のテスト技法',
            '#11-用語集キーワードk1レベル',
            '#2-31-データベースドテスト技法data-based-test-techniques',
            '#21-311-ドメインテストdomain-testing-k3-適用',
            '#22-312-組み合わせテストcombinatorial-testing-k3-適用',
            '#23-313-ランダムテストrandom-testing-k2-理解',
            '#3-32-ビヘイビアベーステスト技法behavior-based-test-techniques',
            '#31-321-crudテストcrud-testing-k2-理解',
            '#32-322-状態遷移テストstate-transition-testing-k3-適用',
            '#33-323-シナリオベーステストscenario-based-testing-k3-適用',
            '#4-33-ルールベーステスト技法rule-based-test-techniques',
            '#41-331-デシジョンテーブルテストdecision-table-testing-k3-適用',
            '#42-332-メタモルフィックテストmetamorphic-testing-k3-適用',
            '#5-34-経験ベーステストexperience-based-testing',
            '#51-341-テストチャーターtest-charters-supporting-session-based-testing-k3-適用',
            '#52-342-チェックリストベーステストchecklists-supporting-experience-based-test-techniques-k3-適用',
            '#53-343-クラウドテストcrowd-testing-k2-理解',
            '#6-35-最適なテスト技法の適用applying-the-most-appropriate-test-techniques',
            '#61-351-製品リスクを軽減する技法の選定-k4-分析',
            '#62-352-テスト設計自動化の利点とリスク-k2-理解',
            '#7-学習目標learning-objectives一覧表',
            '#8-章末チェックリスト自己診断用',
            '#9-v31からv40への主な変更点参考',
            '#10-参考文献出典url',
            '#公式istqb資料',
            '#国際規格標準',
            '#学術文献技術資料本文中で言及されたもの',
            '#非公式ながら参考になる解説記事数値見解は公式シラバスで必ず裏取りしてください',
        ];

        const nav = container.querySelector('nav');
        expect(nav).toBeTruthy();
        const links = nav ? Array.from(nav.querySelectorAll('a')).map((a) => a.getAttribute('href')) : [];
        expectedHrefs.forEach((href) => {
            expect(links).toContain(href);
        });
        expect(links.length).toBe(33);
    });

    it('renders Hero and Section 0 (Why Chapter 3 matters, Exam overview, How to read, K-levels)', () => {
        const { container } = render(<CtalTaChapter3Page />);

        // Section 0
        const sec0 = container.querySelector('[id="0-このガイドについて"]');
        expect(sec0).toBeTruthy();
        expect(sec0?.textContent).toContain('0. このガイドについて');

        const sec01 = container.querySelector('[id="01-なぜ第3章が重要なのか"]');
        expect(sec01).toBeTruthy();
        expect(sec01?.textContent).toContain('0.1 なぜ第3章が重要なのか');

        const sec02 = container.querySelector('[id="02-試験の全体像"]');
        expect(sec02).toBeTruthy();
        expect(sec02?.textContent).toContain('0.2 試験の全体像');

        const sec03 = container.querySelector('[id="03-本ガイドの読み方"]');
        expect(sec03).toBeTruthy();
        expect(sec03?.textContent).toContain('0.3 本ガイドの読み方');

        const sec04 = container.querySelector('[id="04-kレベル認知レベルバッジの見方"]');
        expect(sec04).toBeTruthy();
        expect(sec04?.textContent).toContain('0.4 Kレベル(認知レベル)バッジの見方');

        // Check tables in Sec 0 (Tables 1, 2, 3)
        const tables = container.querySelectorAll('table');
        expect(tables.length).toBeGreaterThanOrEqual(3);
        expect(container.textContent).toContain('テスト分析・設計');
        expect(container.textContent).toContain('615分');
        expect(container.textContent).toContain('40問');
        expect(container.textContent).toContain('K4: 分析');
    });

    it('renders Section 1 (Overall Structure & Glossary K1)', () => {
        const { container } = render(<CtalTaChapter3Page />);

        // Section 1
        const sec1 = container.querySelector('[id="1-第3章の全体構造--4分類のテスト技法"]');
        expect(sec1).toBeTruthy();
        expect(sec1?.textContent).toContain('1. 第3章の全体構造 — 4分類のテスト技法');

        const sec11 = container.querySelector('[id="11-用語集キーワードk1レベル"]');
        expect(sec11).toBeTruthy();
        expect(sec11?.textContent).toContain('1.1 用語集(キーワード・K1レベル)');

        // Callout 1
        expect(container.textContent).toContain('ベストプラクティス — 分類の軸を覚える');

        // Table 4: Glossary keywords
        expect(container.textContent).toContain('組み合わせテスト');
        expect(container.textContent).toContain('combinatorial testing');
        expect(container.textContent).toContain('メタモルフィック関係');
        expect(container.textContent).toContain('metamorphic relation');
    });
});
