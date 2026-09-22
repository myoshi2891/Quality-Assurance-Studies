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

    it('renders Section 2: Data-Based Test Techniques (Domain, Combinatorial, Random)', () => {
        const { container } = render(<CtalTaChapter3Page />);

        // Section 2 H2 & H3s
        const sec2 = container.querySelector('[id="2-31-データベースドテスト技法data-based-test-techniques"]');
        expect(sec2).toBeTruthy();
        expect(sec2?.textContent).toContain('2. 3.1 データベースドテスト技法');

        const sec21 = container.querySelector('[id="21-311-ドメインテストdomain-testing-k3-適用"]');
        expect(sec21).toBeTruthy();
        expect(sec21?.textContent).toContain('2.1 3.1.1 ドメインテスト');

        const sec22 = container.querySelector('[id="22-312-組み合わせテストcombinatorial-testing-k3-適用"]');
        expect(sec22).toBeTruthy();
        expect(sec22?.textContent).toContain('2.2 3.1.2 組み合わせテスト');

        const sec23 = container.querySelector('[id="23-313-ランダムテストrandom-testing-k2-理解"]');
        expect(sec23).toBeTruthy();
        expect(sec23?.textContent).toContain('2.3 3.1.3 ランダムテスト');

        // Check key domain testing terms (ON/OFF/IN/OUT, coverage)
        expect(container.textContent).toContain('閉じた境界');
        expect(container.textContent).toContain('開いた境界');
        expect(container.textContent).toContain('ON点');
        expect(container.textContent).toContain('OFF点');
        expect(container.textContent).toContain('IN点');
        expect(container.textContent).toContain('OUT点');
        expect(container.textContent).toContain('簡略化ドメインカバレッジ');
        expect(container.textContent).toContain('信頼性ドメインカバレッジ');

        // Check combinatorial testing terms
        expect(container.textContent).toContain('ペアワイズカバレッジ');
        expect(container.textContent).toContain('ベースチョイスカバレッジ');
        expect(container.textContent).toContain('相互作用障害');

        // Check random testing terms
        expect(container.textContent).toContain('ガイドなしランダムテスト');
        expect(container.textContent).toContain('ガイド付きランダムテスト');
    });

    it('renders Section 3: Behavior-Based Test Techniques (CRUD, State Transition, Scenario-Based)', () => {
        const { container } = render(<CtalTaChapter3Page />);

        // Section 3 H2 & H3s
        const sec3 = container.querySelector('[id="3-32-ビヘイビアベーステスト技法behavior-based-test-techniques"]');
        expect(sec3).toBeTruthy();
        expect(sec3?.textContent).toContain('3. 3.2 ビヘイビアベーステスト技法');

        const sec31 = container.querySelector('[id="31-321-crudテストcrud-testing-k2-理解"]');
        expect(sec31).toBeTruthy();
        expect(sec31?.textContent).toContain('3.1 3.2.1 CRUDテスト');

        const sec32 = container.querySelector('[id="32-322-状態遷移テストstate-transition-testing-k3-適用"]');
        expect(sec32).toBeTruthy();
        expect(sec32?.textContent).toContain('3.2 3.2.2 状態遷移テスト');

        const sec33 = container.querySelector('[id="33-323-シナリオベーステストscenario-based-testing-k3-適用"]');
        expect(sec33).toBeTruthy();
        expect(sec33?.textContent).toContain('3.3 3.2.3 シナリオベーステスト');

        // Check CRUD terms & Table 12
        expect(container.textContent).toContain('CRUDマトリクス');
        expect(container.textContent).toContain('網羅性テスト');
        expect(container.textContent).toContain('一貫性テスト');

        // Check State transition terms & Table 14
        expect(container.textContent).toContain('0-switchカバレッジ');
        expect(container.textContent).toContain('1-switchカバレッジ');
        expect(container.textContent).toContain('N-switchカバレッジ');
        expect(container.textContent).toContain('ラウンドトリップカバレッジ');

        // Check Scenario terms & Table 15/16
        expect(container.textContent).toContain('メインシナリオ');
        expect(container.textContent).toContain('拡張シナリオ');
        expect(container.textContent).toContain('例外シナリオ');
        expect(container.textContent).toContain('単純ループカバレッジ');
    });

    it('renders Section 4: Rule-Based Test Techniques (Decision Table, Metamorphic Testing)', () => {
        const { container } = render(<CtalTaChapter3Page />);

        // Section 4 H2 & H3s
        const sec4 = container.querySelector('[id="4-33-ルールベーステスト技法rule-based-test-techniques"]');
        expect(sec4).toBeTruthy();
        expect(sec4?.textContent).toContain('4. 3.3 ルールベーステスト技法');

        const sec41 = container.querySelector('[id="41-331-デシジョンテーブルテストdecision-table-testing-k3-適用"]');
        expect(sec41).toBeTruthy();
        expect(sec41?.textContent).toContain('4.1 3.3.1 デシジョンテーブルテスト');

        const sec42 = container.querySelector('[id="42-332-メタモルフィックテストmetamorphic-testing-k3-適用"]');
        expect(sec42).toBeTruthy();
        expect(sec42?.textContent).toContain('4.2 3.3.2 メタモルフィックテスト');

        // Check Decision Table terms & Table 17-19
        expect(container.textContent).toContain('フル・デシジョンテーブル');
        expect(container.textContent).toContain('チェックサム手続き');
        expect(container.textContent).toContain('ドントケア');

        // Check Metamorphic Testing terms
        expect(container.textContent).toContain('テストオラクル問題');
        expect(container.textContent).toContain('ソーステストケース');
        expect(container.textContent).toContain('フォローアップテストケース');
        expect(container.textContent).toContain('メタモルフィック関係');
    });

    it('renders Section 5: Experience-Based Test Techniques (Test Charters, Checklists, Crowd Testing)', () => {
        const { container } = render(<CtalTaChapter3Page />);

        // Section 5 H2 & H3s
        const sec5 = container.querySelector('[id="5-34-経験ベーステストexperience-based-testing"]');
        expect(sec5).toBeTruthy();
        expect(sec5?.textContent).toContain('5. 3.4 経験ベーステスト');

        const sec51 = container.querySelector('[id="51-341-テストチャーターtest-charters-supporting-session-based-testing-k3-適用"]');
        expect(sec51).toBeTruthy();
        expect(sec51?.textContent).toContain('5.1 3.4.1 テストチャーター');

        const sec52 = container.querySelector('[id="52-342-チェックリストベーステストchecklists-supporting-experience-based-test-techniques-k3-適用"]');
        expect(sec52).toBeTruthy();
        expect(sec52?.textContent).toContain('5.2 3.4.2 チェックリストベーステスト');

        const sec53 = container.querySelector('[id="53-343-クラウドテストcrowd-testing-k2-理解"]');
        expect(sec53).toBeTruthy();
        expect(sec53?.textContent).toContain('5.3 3.4.3 クラウドテスト');

        // Check Test Charter terms & format
        expect(container.textContent).toContain('Explore [対象] With [リソース] To discover [発見したい情報]');
        expect(container.textContent).toContain('タイムボックス化された');
        expect(container.textContent).toContain('セッションシート');

        // Check Checklist terms
        expect(container.textContent).toContain('Read-doチェックリスト');
        expect(container.textContent).toContain('Do-confirmチェックリスト');

        // Check Crowd Testing terms
        expect(container.textContent).toContain('クラウドテスト');
        expect(container.textContent).toContain('多様なテスト環境');
    });
});
