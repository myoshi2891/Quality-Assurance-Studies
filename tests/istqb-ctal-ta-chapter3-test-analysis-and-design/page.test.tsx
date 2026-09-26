import React, { act } from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'bun:test';
import CtalTaChapter3Page from '../../app/istqb-ctal-ta-chapter3-test-analysis-and-design/page';
import { collectTableInventory, type TableSpec } from '../helpers/table-inventory';

// Bun はテストファイル間で happy-dom のグローバル DOM を共有するため、
// 描画結果を毎回破棄しないと後続ファイルのクエリ（h1 の一意性など）が汚染される
afterEach(() => cleanup());

describe('CTAL-TA v4.0 Chapter 3 - Category 0 & 1: Scaffolding, NavBar & Overview', () => {
    it('renders the page container and main structure with ctal-ta-ch3-page class', () => {
        const { container } = render(<CtalTaChapter3Page />);
        const pageLayout = container.querySelector('.ctal-ta-ch3-page');
        expect(pageLayout).toBeTruthy();
        expect(screen.getByRole('navigation')).toBeTruthy();
        expect(screen.getByRole('main')).toBeTruthy();
    });

    it('renders sidebar toggle button with proper a11y attributes and toggles on click', () => {
        const { container } = render(<CtalTaChapter3Page />);
        const toggleBtn = container.querySelector('.sidebar-toggle') as HTMLButtonElement | null;
        expect(toggleBtn).toBeTruthy();
        expect(toggleBtn?.getAttribute('aria-expanded')).toBe('false');
        expect(toggleBtn?.getAttribute('aria-label')).toBe('目次を開く');
        expect(toggleBtn?.textContent).toContain('目次');

        // Click to open
        act(() => {
            fireEvent.click(toggleBtn!);
        });
        expect(toggleBtn?.getAttribute('aria-expanded')).toBe('true');
        expect(toggleBtn?.getAttribute('aria-label')).toBe('目次を閉じる');
        expect(toggleBtn?.textContent).toContain('閉じる');
        expect(toggleBtn?.classList.contains('active')).toBe(true);

        // Click to close
        act(() => {
            fireEvent.click(toggleBtn!);
        });
        expect(toggleBtn?.getAttribute('aria-expanded')).toBe('false');
        expect(toggleBtn?.getAttribute('aria-label')).toBe('目次を開く');
        expect(toggleBtn?.textContent).toContain('目次');
        expect(toggleBtn?.classList.contains('active')).toBe(false);
    });

    it('closes the open menu and moves focus to the destination heading on TOC link click', () => {
        // Arrange
        const { container } = render(<CtalTaChapter3Page />);
        const toggleBtn = container.querySelector('.sidebar-toggle') as HTMLButtonElement;
        act(() => {
            fireEvent.click(toggleBtn);
        });
        const link = container.querySelector('.sidebar a[href="#01-なぜ第3章が重要なのか"]') as HTMLAnchorElement;

        // Act
        act(() => {
            fireEvent.click(link);
        });

        // Assert
        const heading = document.getElementById('01-なぜ第3章が重要なのか');
        expect(toggleBtn.getAttribute('aria-expanded')).toBe('false');
        expect(document.activeElement).toBe(heading);
        expect(document.activeElement).not.toBe(toggleBtn);
        expect(heading?.getAttribute('tabindex')).toBe('-1');
    });

    it('keeps focus unchanged on TOC link click when the menu is closed', () => {
        // Arrange
        const { container } = render(<CtalTaChapter3Page />);
        const link = container.querySelector('.sidebar a[href="#02-試験の全体像"]') as HTMLAnchorElement;
        link.focus();

        // Act
        act(() => {
            fireEvent.click(link);
        });

        // Assert
        expect(document.activeElement).toBe(link);
        expect(document.getElementById('02-試験の全体像')?.hasAttribute('tabindex')).toBe(false);
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
        expect(links).toEqual(expectedHrefs);
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

        // ページ全体のテーブル件数を厳密一致で検証（欠落・余剰の両方を検出）
        const tables = container.querySelectorAll('table');
        expect(tables.length).toBe(31);
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
        expect(container.textContent).toContain('ミッション(使命)');
        expect(container.textContent).toContain('セッションシート');

        // Check Checklist terms
        expect(container.textContent).toContain('Read-doチェックリスト');
        expect(container.textContent).toContain('Do-confirmチェックリスト');

        // Check Crowd Testing terms
        expect(container.textContent).toContain('クラウドテスト');
        expect(container.textContent).toContain('多様なテスト環境');
    });

    it('renders Section 6: Applying the Most Appropriate Test Techniques (Technique Selection K4, Design Automation K2)', () => {
        const { container } = render(<CtalTaChapter3Page />);

        // Section 6 H2 & H3s
        const sec6 = container.querySelector('[id="6-35-最適なテスト技法の適用applying-the-most-appropriate-test-techniques"]');
        expect(sec6).toBeTruthy();
        expect(sec6?.textContent).toContain('6. 3.5 最適なテスト技法の適用');

        const sec61 = container.querySelector('[id="61-351-製品リスクを軽減する技法の選定-k4-分析"]');
        expect(sec61).toBeTruthy();
        expect(sec61?.textContent).toContain('6.1 3.5.1 製品リスクを軽減する技法の選定');

        const sec62 = container.querySelector('[id="62-352-テスト設計自動化の利点とリスク-k2-理解"]');
        expect(sec62).toBeTruthy();
        expect(sec62?.textContent).toContain('6.2 3.5.2 テスト設計自動化の利点とリスク');

        // Check Technique Selection factors & terms
        expect(container.textContent).toContain('製品リスクを軽減する技法の選定');
        expect(container.textContent).toContain('テストベース');
        expect(container.textContent).toContain('既知の欠陥傾向');

        // Check Test Design Automation terms
        expect(container.textContent).toContain('テスト設計自動化');
        expect(container.textContent).toContain('テストモデルを作成し');
        expect(container.textContent).toContain('シングルソース');
    });

    it('renders Section 7 to 10: Learning Objectives, Checklist, Version Changes, References and Footer', () => {
        const { container } = render(<CtalTaChapter3Page />);

        // Section 7: Learning Objectives (Table 27)
        const sec7 = container.querySelector('[id="7-学習目標learning-objectives一覧表"]');
        expect(sec7).toBeTruthy();
        expect(sec7?.textContent).toContain('7. 学習目標(Learning Objectives)一覧表');
        expect(container.textContent).toContain('TA-3.1.1');
        expect(container.textContent).toContain('TA-3.5.2');
        expect(container.textContent).toContain('ドメインテストを適用できる');
        expect(container.textContent).toContain('テスト設計自動化の利点とリスクを説明できる');

        // Section 8: Checklist
        const sec8 = container.querySelector('[id="8-章末チェックリスト自己診断用"]');
        expect(sec8).toBeTruthy();
        expect(sec8?.textContent).toContain('8. 章末チェックリスト(自己診断用)');
        expect(container.textContent).toContain('0 / 15 完了');
        // チェックのトグルに応じて完了数と進捗バー幅が増減することを検証する
        const barFill = container.querySelector<HTMLElement>('.cp-bar-fill');
        const firstCheckbox = container.querySelector<HTMLInputElement>('.checklist-checkbox');
        expect(barFill).toBeTruthy();
        expect(firstCheckbox).toBeTruthy();
        expect(barFill?.style.width).toBe('0%');
        if (!firstCheckbox) return;
        act(() => {
            fireEvent.click(firstCheckbox);
        });
        expect(container.textContent).toContain('1 / 15 完了');
        expect(barFill?.style.width).toBe('7%');
        act(() => {
            fireEvent.click(firstCheckbox);
        });
        expect(container.textContent).toContain('0 / 15 完了');
        expect(barFill?.style.width).toBe('0%');
        // 15 項目のラベルを出現順で 1 対 1 照合し、欠落・重複・順序違いを検出する
        const checklistLabels = Array.from(container.querySelectorAll('.checklist-card li')).map((li) =>
            li.textContent?.trim()
        );
        expect(checklistLabels).toEqual([
            'ON点・OFF点・IN点・OUT点の違いを、閉じた境界と開いた境界それぞれについて説明できる',
            '簡略化ドメインカバレッジと信頼性ドメインカバレッジの違いを説明できる',
            'ベースチョイスカバレッジとペアワイズカバレッジの違いを説明できる',
            'なぜペアワイズテストが効果的とされるのか(相互作用障害の統計的傾向)を説明できる',
            'CRUDマトリクスを実際に作成し、網羅性テストと一貫性テストの違いを説明できる',
            '0-switch・1-switch・N-switch・ラウンドトリップカバレッジをそれぞれ図で示せる',
            'メインシナリオ・拡張シナリオ・例外シナリオの違いを具体例で説明できる',
            '単純ループカバレッジの4パターンを説明できる',
            'デシジョンテーブルの最小化とチェックサム手続きを、実際の数値例で計算できる',
            'メタモルフィック関係(MR)を使ったテストケースを、テストオラクル問題と絡めて説明できる',
            'テストチャーターの「Explore/With/To」形式で、自分の担当システムの例を1つ作れる',
            'Read-doチェックリストとDo-confirmチェックリストの違いを具体例で説明できる',
            'クラウドテストの利点・限界を、体系的テスト技法との使い分けの観点で説明できる',
            '与えられたシナリオに対し、どの技法カテゴリ(データ/ビヘイビア/ルール/経験ベース)が適切かを判断できる',
            'テスト設計自動化の利点とリスクを、自分のプロジェクトに当てはめて具体的に語れる',
        ]);
        expect(container.textContent).toContain('学習のヒント');

        // Section 9: Version Changes
        const sec9 = container.querySelector('[id="9-v31からv40への主な変更点参考"]');
        expect(sec9).toBeTruthy();
        expect(sec9?.textContent).toContain('9. v3.1からv4.0への主な変更点(参考)');
        expect(container.textContent).toContain('データベースド」「ビヘイビアベースド」「ルールベースド');

        // Section 10: References (Table 28 - 31)
        const sec10 = container.querySelector('[id="10-参考文献出典url"]');
        expect(sec10).toBeTruthy();
        expect(sec10?.textContent).toContain('10. 参考文献・出典URL');
        expect(container.querySelector('[id="公式istqb資料"]')).toBeTruthy();
        expect(container.querySelector('[id="国際規格標準"]')).toBeTruthy();
        expect(container.querySelector('[id="学術文献技術資料本文中で言及されたもの"]')).toBeTruthy();
        expect(container.querySelector('[id="非公式ながら参考になる解説記事数値見解は公式シラバスで必ず裏取りしてください"]')).toBeTruthy();

        // Footer & Disclaimer
        expect(container.querySelector('.page-footer')).toBeTruthy();
        expect(container.querySelector('.page-footer')?.textContent).toContain('本ガイドはISTQB® CTAL-TA Syllabus v4.0の内容を');
    });
});

// Mermaid 図解インベントリ（出現順）。各図には ID・キャプションがないため、
// 直前の見出し ID を図の識別子として 1 対 1 で照合する。
const EXPECTED_DIAGRAM_SECTIONS: readonly string[] = [
    '03-本ガイドの読み方',
    '1-第3章の全体構造--4分類のテスト技法',
    '4種類の点onoffinout',
    'カバレッジ基準-1',
    '網羅性テストと一貫性テスト',
    '具体例注文の状態遷移モデル',
    '具体例ログイン機能のシナリオモデル',
    'フルデシジョンテーブルと最小化',
    '具体例-2',
    'セッションの流れ',
    'チェックリスト作成の手順',
    '技法選定の考え方実践的な整理図',
];

describe('CTAL-TA v4.0 Chapter 3 - Mermaid Diagram Inventory', () => {
    it('renders exactly 12 Mermaid diagrams, each under its expected heading in order', () => {
        const { container } = render(<CtalTaChapter3Page />);

        // 見出しと図コンテナを文書順で走査し、各図の直前の見出し ID を収集する
        const nodes = container.querySelectorAll('h2[id], h3[id], h4[id], .mermaid-container');
        const actualSections: string[] = [];
        let currentHeadingId = '';
        nodes.forEach((node) => {
            if (node.classList.contains('mermaid-container')) {
                actualSections.push(currentHeadingId);
                return;
            }
            currentHeadingId = node.id;
        });

        expect(actualSections).toEqual([...EXPECTED_DIAGRAM_SECTIONS]);
        container.querySelectorAll('.mermaid-container').forEach((diagram) => {
            expect(diagram.querySelector('.mermaid-wrapper')).toBeTruthy();
        });
    });
});

describe('CTAL-TA v4.0 Chapter 3 - Table inventory (1:1)', () => {
    // 元 HTML（archive/html-archive/ctal/Ctal-ta-v4-chapter3-testanalysisanddesign-guide.html）から棚卸しした全テーブル。index は文書順
    const TABLE_INVENTORY: readonly TableSpec[] = [
    /*  0 */ { heading: '0.1 なぜ第3章が重要なのか', headers: ['章', 'タイトル', '学習時間', '全体に占める割合'], rows: 6, cols: 4, sample: '第1章' },
    /*  1 */ { heading: '0.2 試験の全体像', headers: ['項目', '内容'], rows: 5, cols: 2, sample: '問題数' },
    /*  2 */ { heading: '0.4 Kレベル(認知レベル)バッジの見方', headers: ['バッジ', '意味', '試験での出され方'], rows: 3, cols: 3, sample: 'K2: 理解' },
    /*  3 */ { heading: '1.1 用語集(キーワード・K1レベル)', headers: ['英語キーワード', '日本語訳'], rows: 18, cols: 2, sample: 'checklist-based testing' },
    /*  4 */ { heading: '定義', headers: ['境界の種類', '演算子', '例'], rows: 2, cols: 3, sample: '閉じた境界(Closed border)' },
    /*  5 */ { heading: '4種類の点:ON・OFF・IN・OUT', headers: ['点の種類', '閉じた境界の場合', '開いた境界の場合'], rows: 4, cols: 3, sample: 'ON点' },
    /*  6 */ { heading: '具体例', headers: ['境界', 'ON点', 'OFF点', 'IN点', 'OUT点'], rows: 2, cols: 5, sample: '数量 ≥ 5(閉)' },
    /*  7 */ { heading: 'カバレッジ基準', headers: ['基準', '必要なカバレッジ項目', '特徴'], rows: 2, cols: 3, sample: '簡略化ドメインカバレッジ(Simplified domain coverage)' },
    /*  8 */ { heading: 'カバレッジ基準', headers: ['カバレッジ基準', '説明'], rows: 4, cols: 2, sample: '全組み合わせカバレッジ(All-combinations coverage)' },
    /*  9 */ { heading: '定義', headers: ['種類', '説明'], rows: 2, cols: 2, sample: 'ガイドなしランダムテスト' },
    /* 10 */ { heading: '利点と限界', headers: ['利点', '限界'], rows: 4, cols: 2, sample: 'ドメイン知識が少なくても実施できる' },
    /* 11 */ { heading: 'CRUDマトリクスの作成', headers: ['機能', '会員', '注文', '商品'], rows: 10, cols: 4, sample: '会員登録' },
    /* 12 */ { heading: '網羅性テストと一貫性テスト', headers: ['テストの種類', '分類', '目的'], rows: 2, cols: 3, sample: '網羅性テスト(Completeness testing)' },
    /* 13 */ { heading: '追加のカバレッジ基準', headers: ['カバレッジ基準', '説明', '適用場面'], rows: 4, cols: 3, sample: '0-switchカバレッジ(全遷移カバレッジ)' },
    /* 14 */ { heading: 'アクティビティ図とユースケース', headers: ['シナリオ種別', '説明'], rows: 3, cols: 2, sample: 'メインシナリオ(ハッピーパス)' },
    /* 15 */ { heading: 'カバレッジ', headers: ['パターン', '説明'], rows: 4, cols: 2, sample: '0回(スキップ)' },
    /* 16 */ { heading: '具体例', headers: ['ルール', 'C1: プレミアム会員', 'C2: 金額≥10,000円', 'C3: キャンペーン中', '割引率'], rows: 8, cols: 5, sample: 'R1' },
    /* 17 */ { heading: '具体例', headers: ['ルール', 'C1: プレミアム会員', 'C2: 金額≥10,000円', 'C3: キャンペーン中', '割引率'], rows: 4, cols: 5, sample: 'M1' },
    /* 18 */ { heading: 'チェックサム手続きによる検証', headers: ['ルール', '計算式', 'スコア'], rows: 5, cols: 3, sample: 'M1(C3が–、2値)' },
    /* 19 */ { heading: 'レビュー観点', headers: ['観点', '内容'], rows: 4, cols: 2, sample: '一貫性(consistency)' },
    /* 20 */ { heading: 'テストチャーターに含める情報', headers: ['情報カテゴリ', '内容の例'], rows: 10, cols: 2, sample: '組織情報' },
    /* 21 */ { heading: '2種類のチェックリスト', headers: ['種別', '特徴', '具体例'], rows: 2, cols: 3, sample: 'Read-doチェックリスト' },
    /* 22 */ { heading: '利点と限界', headers: ['利点', '限界'], rows: 6, cols: 2, sample: '多様なテスト環境: 様々な地域・デバイス・ブラウザ・ネットワーク条件でテストできる' },
    /* 23 */ { heading: '技法カテゴリと検出しやすい欠陥の対応', headers: ['テスト技法カテゴリ', '検出しやすい欠陥の種類'], rows: 4, cols: 2, sample: 'データベースドテスト技法' },
    /* 24 */ { heading: '技法選定に影響する要因', headers: ['要因', '選定への影響'], rows: 10, cols: 2, sample: 'テスト目的' },
    /* 25 */ { heading: '利点', headers: ['利点', '説明'], rows: 9, cols: 2, sample: '欠陥予防' },
    /* 26 */ { heading: '7. 学習目標(Learning Objectives)一覧表', headers: ['コード', '学習目標', 'Kレベル'], rows: 13, cols: 3, sample: 'TA-3.1.1' },
    /* 27 */ { heading: '公式ISTQB®資料', headers: ['資料名', 'URL'], rows: 5, cols: 2, sample: 'CTAL-TA v4.0 認定ページ(公式)' },
    /* 28 */ { heading: '国際規格・標準', headers: ['規格名', 'URL'], rows: 3, cols: 2, sample: 'ISO/IEC 25010:2023(品質特性モデル)' },
    /* 29 */ { heading: '学術文献・技術資料(本文中で言及されたもの)', headers: ['文献', 'URL'], rows: 3, cols: 2, sample: 'Kuhn, D.R. et al.「Software Fault Interactions and Implications for Software Testing」の背景研究解説(NIST)' },
    /* 30 */ { heading: '非公式ながら参考になる解説記事(数値・見解は公式シラバスで必ず裏取りしてください)', headers: ['記事', 'URL'], rows: 1, cols: 2, sample: 'trendig.com「New Version Released: ISTQB® CTAL-TA v4」(v3.1→v4.0の変更点解説)' },
    ];

    it('renders every inventoried table with its heading, header cells, shape and representative cell', () => {
        // Arrange
        const { container } = render(<CtalTaChapter3Page />);

        // Act
        const actual = collectTableInventory(container);

        // Assert: index を含めて比較し、失敗時にどの表が欠落・置換されたかを特定できるようにする
        expect(actual).toEqual(TABLE_INVENTORY.map((spec, index) => ({ index, ...spec })));
    });
});
