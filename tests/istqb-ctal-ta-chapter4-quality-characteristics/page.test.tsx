import React from 'react';
import { readFileSync } from 'fs';
import { render, screen, within, fireEvent, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'bun:test';
import CtalTaChapter4Page from '../../app/istqb-ctal-ta-chapter4-quality-characteristics/page';

// Bun はテストファイル間で happy-dom のグローバル DOM を共有するため、
// 描画結果を毎回破棄しないと後続ファイルのクエリ（h1 の一意性など）が汚染される
afterEach(() => cleanup());

describe('CTAL-TA v4.0 Chapter 4 - Category 0: Scaffolding, NavBar & Hero Overview', () => {
    it('renders the page container and main structure with ctal-ta-ch4-page class', () => {
        const { container } = render(<CtalTaChapter4Page />);
        const pageLayout = container.querySelector('.ctal-ta-ch4-page');
        expect(pageLayout).toBeTruthy();
        expect(screen.getByRole('navigation')).toBeTruthy();
        expect(screen.getByRole('main')).toBeTruthy();
    });

    it('renders the 72 sidebar navigation links with exact targets', () => {
        const { container } = render(<CtalTaChapter4Page />);
        const expectedHrefs = [
            '#0-このガイドの読み方',
            '#01-ゴールと学習の進め方',
            '#02-信頼度タグの見方',
            '#03--このガイドの限界必ず読んでください',
            '#04-バージョン情報受験前に確認',
            '#1-第4章の全体像',
            '#11-章の位置づけ',
            '#12-なぜ-ta-が品質特性のテストを扱うのか',
            '#13-isoiec-250102023-との対応',
            '#14-v31-から-v40-への用語構成の変更点',
            '#15-キーワード13語k1定義を思い出せること',
            '#2-41-機能テストta-411k2',
            '#21-まず結論3つの違いを一枚で',
            '#22-機能適合性functional-suitabilityとは',
            '#23-3つのサブ特性を詳しく',
            '#24-見分け方どの特性の問題か迷ったとき',
            '#25-機能テストの進め方ステップバイステップ',
            '#26-特性ごとの技法の選び方',
            '#27-いつどのレベルでテストするか',
            '#28-ベストプラクティス機能テスト',
            '#29--対比',
            '#210-公式サンプル試験-q34-の考え方',
            '#211-41-のまとめ',
            '#3-42-ユーザビリティテストta-421k2',
            '#31-用語の整理usabilityinteraction-capabilityux',
            '#32-インタラクション能力の8つのサブ特性',
            '#33-ta-はユーザビリティテストにどう貢献するか',
            '#34-ユーザビリティテスト利用者テストの進め方',
            '#35-具体例ecサイトの初回購入',
            '#36-評価手法の使い分け',
            '#37-アクセシビリティ包括性ユーザー支援の扱い',
            '#38-ベストプラクティスユーザビリティテスト',
            '#39--対比',
            '#310-公式サンプル試験-q35-の考え方',
            '#311-42-のまとめ',
            '#4-43-フレキシビリティテストta-431k2',
            '#41-フレキシビリティ柔軟性とは',
            '#42-適応性adaptabilityテスト',
            '#43-インストール性installabilityテスト',
            '#44-ベストプラクティスフレキシビリティテスト',
            '#45--対比',
            '#46-公式サンプル試験-q36-の考え方',
            '#47-43-のまとめ',
            '#5-44-互換性テストta-441k2',
            '#51-互換性compatibilityとは',
            '#52-相互運用性interoperabilityの定義',
            '#53-ta-は相互運用性テストにどう貢献するか',
            '#54-テスト観点',
            '#55-相互運用性テストの進め方',
            '#56-具体例ecサイトと決済サービス在庫システム',
            '#57-テストダブルサービス仮想化契約テスト',
            '#58-ベストプラクティス相互運用性テスト',
            '#59--対比',
            '#510-公式サンプル試験-q37-の考え方',
            '#511-44-のまとめ',
            '#6-機能サービス別-適用早見表',
            '#7-試験対策',
            '#71-混同しやすい概念の比較',
            '#72-lo-ごとのこれだけは説明できるポイント',
            '#73-公式サンプル試験の第4章q34q37一覧',
            '#74-自己診断ミニクイズ-筆者作成公式問題ではありません',
            '#75-学習プラン-目安',
            '#76-公式シラバス4447-ページ通読時のチェックポイント',
            '#8-実務チェックリスト',
            '#9-参考文献根拠ソースの-url',
            '#91-istqb-公式一次情報',
            '#92-iso-規格',
            '#93-ユーザビリティアクセシビリティ',
            '#94-環境ci用語補足',
            '#95-二次情報学習の補助',
            '#付録-aこのガイドの記述と根拠の対応要点',
            '#付録-b用語の対応表日本語英語',
        ];

        const nav = container.querySelector('nav');
        expect(nav).toBeTruthy();
        const links = nav ? Array.from(nav.querySelectorAll('a')).map((a) => a.getAttribute('href')) : [];
        expectedHrefs.forEach((href) => {
            expect(links).toContain(href);
        });
        expect(links.length).toBe(72);
    });

    it('renders Hero section with title, eyebrow, subtitle, and pills', () => {
        const { container } = render(<CtalTaChapter4Page />);
        const hero = container.querySelector('.hero');
        expect(hero).toBeTruthy();

        const eyebrow = hero?.querySelector('.eyebrow');
        expect(eyebrow?.textContent).toContain('ISTQB® CTAL-TA v4.0 ／ CHAPTER 4');

        const h1 = hero?.querySelector('h1');
        expect(h1?.textContent).toContain('CTAL-TA v4.0 第4章「品質特性のテスト」完全ガイド（初学者向け）');

        const pills = hero?.querySelectorAll('.pill');
        expect(pills?.length).toBe(5);
        expect(hero?.textContent).toContain('章の学習時間 60分');
        expect(hero?.textContent).toContain('学習目標 K2 × 4');
        expect(hero?.textContent).toContain('キーワード 13語');
        expect(hero?.textContent).toContain('図解（mermaid） 20点');
        expect(hero?.textContent).toContain('参考 URL 21件');
    });

    it('renders the overview table in hero area', () => {
        const { container } = render(<CtalTaChapter4Page />);
        const table = container.querySelector('.table-scroll table');
        expect(table).toBeTruthy();
        expect(table?.textContent).toContain('対象シラバス');
        expect(table?.textContent).toContain('ISTQB® CTAL-TA Syllabus v4.0');
        expect(table?.textContent).toContain('学習目標（LO）');
        expect(table?.textContent).toContain('TA-4.1.1 ／ TA-4.2.1 ／ TA-4.3.1 ／ TA-4.4.1');
    });

    it('renders Section 0 (How to read this guide, LOs, tags, caveats, versions)', () => {
        const { container } = render(<CtalTaChapter4Page />);

        // Section 0 headings
        const sec0 = container.querySelector('[id="0-このガイドの読み方"]');
        expect(sec0).toBeTruthy();
        expect(sec0?.textContent).toContain('0. このガイドの読み方');

        expect(container.querySelector('[id="01-ゴールと学習の進め方"]')).toBeTruthy();
        expect(container.querySelector('[id="02-信頼度タグの見方"]')).toBeTruthy();
        expect(container.querySelector('[id="03--このガイドの限界必ず読んでください"]')).toBeTruthy();
        expect(container.querySelector('[id="04-バージョン情報受験前に確認"]')).toBeTruthy();

        // Tables in Section 0: 表単位の 1:1 インベントリ（index 0 はヒーローの概要表）
        const tables = screen.getAllByRole('table');
        expect(tables).toHaveLength(49);
        const headersOf = (table: HTMLElement) =>
            within(table).getAllByRole('columnheader').map((th) => th.textContent?.trim());
        const tableAt = (index: number): HTMLElement => {
            const table = tables[index];
            if (!table) throw new Error(`table[${index}] が見つかりません`);
            return table;
        };
        const loTable = tableAt(1);
        const tagTable = tableAt(2);
        const versionTable = tableAt(3);

        expect(headersOf(loTable)).toEqual(['LO', 'レベル', '学習時間の目安（LO 比較表）', '説明できるようになること']);
        expect(loTable.textContent).toContain('機能正確性・機能適切性・機能完全性');

        expect(headersOf(tagTable)).toEqual(['タグ', '意味', '扱い方']);
        expect(tagTable.textContent).toContain('ISTQB 公式文書（シラバスの取得できた範囲');

        expect(headersOf(versionTable)).toEqual(['項目', '内容', '根拠']);
        expect(versionTable.textContent).toContain('45 問・合計 78 点・合格 51 点・120 分');

        // 表の直前にある見出し
        expect(screen.getByRole('heading', { name: '0.2 信頼度タグの見方' })).toBeTruthy();
        expect(screen.getByRole('heading', { name: '0.4 バージョン情報（受験前に確認）' })).toBeTruthy();

        // Callouts in Sec 0
        expect(container.textContent).toContain('このガイドの限界（必ず読んでください）');
        expect(container.textContent).toContain('公式シラバスの 44〜47 ページ');

        // Mermaid diagrams 1 & 2
        const diagrams = container.querySelectorAll('.mermaid-target');
        expect(diagrams.length).toBeGreaterThanOrEqual(2);
        expect(container.querySelector('#mermaid-diagram-1')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-2')).toBeTruthy();
    });

    it('renders Section 1 (Chapter 4 Overview, ISO 25010:2023, TA role, v3.1 vs v4.0, 13 Keywords)', () => {
        const { container } = render(<CtalTaChapter4Page />);

        // Section 1 headings
        const sec1 = container.querySelector('[id="1-第4章の全体像"]');
        expect(sec1).toBeTruthy();
        expect(sec1?.textContent).toContain('1. 第4章の全体像');

        expect(container.querySelector('[id="11-章の位置づけ"]')).toBeTruthy();
        expect(container.querySelector('[id="12-なぜ-ta-が品質特性のテストを扱うのか"]')).toBeTruthy();
        expect(container.querySelector('[id="13-isoiec-250102023-との対応"]')).toBeTruthy();
        expect(container.querySelector('[id="14-v31-から-v40-への用語構成の変更点"]')).toBeTruthy();
        expect(container.querySelector('[id="15-キーワード13語k1定義を思い出せること"]')).toBeTruthy();

        // Tables in Section 1
        expect(container.textContent).toContain('第4章の基本情報');
        expect(container.textContent).toContain('ISO/IEC 25010:2023 は 9つの品質特性を定義しています');
        expect(container.textContent).toContain('v3.1 から v4.0 への用語・構成の変更点');
        expect(container.textContent).toContain('キーワード13語（K1：定義を思い出せること）');

        // Keywords check
        expect(container.textContent).toContain('functional suitability');
        expect(container.textContent).toContain('機能適合性');
        expect(container.textContent).toContain('functional correctness');
        expect(container.textContent).toContain('機能正確性');
        expect(container.textContent).toContain('interaction capability');
        expect(container.textContent).toContain('インタラクション能力');
        expect(container.textContent).toContain('interoperability');
        expect(container.textContent).toContain('相互運用性');

        // Mermaid diagrams 3, 4, 5
        expect(container.querySelector('#mermaid-diagram-3')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-4')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-5')).toBeTruthy();
    });

    it('renders Section 2 (4.1 Functional Testing TA-4.1.1 K2, 3 Sub-characteristics, Q34)', () => {
        const { container } = render(<CtalTaChapter4Page />);

        // Section 2 headings
        const sec2 = container.querySelector('[id="2-41-機能テストta-411k2"]');
        expect(sec2).toBeTruthy();
        expect(sec2?.textContent).toContain('2. 4.1 機能テスト（TA-4.1.1・K2）');

        expect(container.querySelector('[id="21-まず結論3つの違いを一枚で"]')).toBeTruthy();
        expect(container.querySelector('[id="22-機能適合性functional-suitabilityとは"]')).toBeTruthy();
        expect(container.querySelector('[id="23-3つのサブ特性を詳しく"]')).toBeTruthy();
        expect(container.querySelector('[id="24-見分け方どの特性の問題か迷ったとき"]')).toBeTruthy();
        expect(container.querySelector('[id="25-機能テストの進め方ステップバイステップ"]')).toBeTruthy();
        expect(container.querySelector('[id="26-特性ごとの技法の選び方"]')).toBeTruthy();
        expect(container.querySelector('[id="27-いつどのレベルでテストするか"]')).toBeTruthy();
        expect(container.querySelector('[id="28-ベストプラクティス機能テスト"]')).toBeTruthy();
        expect(container.querySelector('[id="29--対比"]')).toBeTruthy();
        expect(container.querySelector('[id="210-公式サンプル試験-q34-の考え方"]')).toBeTruthy();
        expect(container.querySelector('[id="211-41-のまとめ"]')).toBeTruthy();

        // 6 Tables in Section 2
        expect(container.textContent).toContain('機能正確性Functional correctness');
        expect(container.textContent).toContain('機能適切性Functional appropriateness');
        expect(container.textContent).toContain('機能完全性Functional completeness');
        expect(container.textContent).toContain('迷う例');
        expect(container.textContent).toContain('正しい分類');
        expect(container.textContent).toContain('機能テストの進め方（ステップバイステップ）');
        expect(container.textContent).toContain('特性ごとの技法の選び方');
        expect(container.textContent).toContain('公式サンプル試験 Q34 の考え方');

        // Mermaid diagrams 6 to 10
        expect(container.querySelector('#mermaid-diagram-6')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-7')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-8')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-9')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-10')).toBeTruthy();
    });

    it('renders Section 3 (4.2 Usability Testing TA-4.2.1 K2, 8 Sub-characteristics, Q35)', () => {
        const { container } = render(<CtalTaChapter4Page />);

        // Section 3 headings
        const sec3 = container.querySelector('[id="3-42-ユーザビリティテストta-421k2"]');
        expect(sec3).toBeTruthy();
        expect(sec3?.textContent).toContain('3. 4.2 ユーザビリティテスト（TA-4.2.1・K2）');

        expect(container.querySelector('[id="31-用語の整理usabilityinteraction-capabilityux"]')).toBeTruthy();
        expect(container.querySelector('[id="32-インタラクション能力の8つのサブ特性"]')).toBeTruthy();
        expect(container.querySelector('[id="33-ta-はユーザビリティテストにどう貢献するか"]')).toBeTruthy();
        expect(container.querySelector('[id="34-ユーザビリティテスト利用者テストの進め方"]')).toBeTruthy();
        expect(container.querySelector('[id="35-具体例ecサイトの初回購入"]')).toBeTruthy();
        expect(container.querySelector('[id="36-評価手法の使い分け"]')).toBeTruthy();
        expect(container.querySelector('[id="37-アクセシビリティ包括性ユーザー支援の扱い"]')).toBeTruthy();
        expect(container.querySelector('[id="38-ベストプラクティスユーザビリティテスト"]')).toBeTruthy();
        expect(container.querySelector('[id="39--対比"]')).toBeTruthy();
        expect(container.querySelector('[id="310-公式サンプル試験-q35-の考え方"]')).toBeTruthy();
        expect(container.querySelector('[id="311-42-のまとめ"]')).toBeTruthy();

        // 9 Tables in Section 3
        expect(container.textContent).toContain('用語の整理：usability・interaction capability・UX');
        expect(container.textContent).toContain('インタラクション能力の8つのサブ特性');
        expect(container.textContent).toContain('TA はユーザビリティテストにどう貢献するか');
        expect(container.textContent).toContain('ユーザビリティテスト（利用者テスト）の進め方');
        expect(container.textContent).toContain('具体例：ECサイトの「初回購入」');
        expect(container.textContent).toContain('評価手法の使い分け');
        expect(container.textContent).toContain('アクセシビリティ（包括性・ユーザー支援）の扱い');
        expect(container.textContent).toContain('公式サンプル試験 Q35 の考え方');

        // Mermaid diagrams 11 to 13
        expect(container.querySelector('#mermaid-diagram-11')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-12')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-13')).toBeTruthy();
    });

    it('renders Section 4 (4.3 Flexibility Testing TA-4.3.1 K2, Adaptability, Installability, Q36)', () => {
        const { container } = render(<CtalTaChapter4Page />);

        // Section 4 headings
        const sec4 = container.querySelector('[id="4-43-フレキシビリティテストta-431k2"]');
        expect(sec4).toBeTruthy();
        expect(sec4?.textContent).toContain('4. 4.3 フレキシビリティテスト（TA-4.3.1・K2）');

        expect(container.querySelector('[id="41-フレキシビリティ柔軟性とは"]')).toBeTruthy();
        expect(container.querySelector('[id="42-適応性adaptabilityテスト"]')).toBeTruthy();
        expect(container.querySelector('[id="43-インストール性installabilityテスト"]')).toBeTruthy();
        expect(container.querySelector('[id="44-ベストプラクティスフレキシビリティテスト"]')).toBeTruthy();
        expect(container.querySelector('[id="45--対比"]')).toBeTruthy();
        expect(container.querySelector('[id="46-公式サンプル試験-q36-の考え方"]')).toBeTruthy();
        expect(container.querySelector('[id="47-43-のまとめ"]')).toBeTruthy();

        // 7 Tables in Section 4
        expect(container.textContent).toContain('フレキシビリティ（柔軟性）とは');
        expect(container.textContent).toContain('適応性（Adaptability）テスト');
        expect(container.textContent).toContain('インストール性（Installability）テスト');
        expect(container.textContent).toContain('公式サンプル試験 Q36 の考え方');

        // Code block check (GitHub Actions matrix)
        const codeBlock = container.querySelector('pre.code-block');
        expect(codeBlock).toBeTruthy();
        expect(codeBlock?.textContent).toContain('runs-on: ${{ matrix.os }}');
        expect(codeBlock?.textContent).toContain('ubuntu-latest, windows-latest, macos-latest');

        // Mermaid diagrams 14 to 16
        expect(container.querySelector('#mermaid-diagram-14')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-15')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-16')).toBeTruthy();
    });

    it('renders Section 5 (4.4 Compatibility Testing TA-4.4.1 K2, Interoperability, Q37) and Section 6 (Application Matrix)', () => {
        const { container } = render(<CtalTaChapter4Page />);

        // Section 5 headings
        const sec5 = container.querySelector('[id="5-44-互換性テストta-441k2"]');
        expect(sec5).toBeTruthy();
        expect(sec5?.textContent).toContain('5. 4.4 互換性テスト（TA-4.4.1・K2）');

        expect(container.querySelector('[id="51-互換性compatibilityとは"]')).toBeTruthy();
        expect(container.querySelector('[id="52-相互運用性interoperabilityの定義"]')).toBeTruthy();
        expect(container.querySelector('[id="53-ta-は相互運用性テストにどう貢献するか"]')).toBeTruthy();
        expect(container.querySelector('[id="54-テスト観点"]')).toBeTruthy();
        expect(container.querySelector('[id="55-相互運用性テストの進め方"]')).toBeTruthy();
        expect(container.querySelector('[id="56-具体例ecサイトと決済サービス在庫システム"]')).toBeTruthy();
        expect(container.querySelector('[id="57-テストダブルサービス仮想化契約テスト"]')).toBeTruthy();
        expect(container.querySelector('[id="58-ベストプラクティス相互運用性テスト"]')).toBeTruthy();
        expect(container.querySelector('[id="59--対比"]')).toBeTruthy();
        expect(container.querySelector('[id="510-公式サンプル試験-q37-の考え方"]')).toBeTruthy();
        expect(container.querySelector('[id="511-44-のまとめ"]')).toBeTruthy();

        // Section 6 heading
        const sec6 = container.querySelector('[id="6-機能サービス別-適用早見表"]');
        expect(sec6).toBeTruthy();
        expect(sec6?.textContent).toContain('6. 機能・サービス別 適用早見表');

        // Content & Tables verification
        expect(container.textContent).toContain('Co-existence（共存性）');
        expect(container.textContent).toContain('Interoperability（相互運用性）');
        expect(container.textContent).toContain('公式サンプル試験 Q37 の考え方');
        expect(container.textContent).toContain('ログイン・会員登録');
        expect(container.textContent).toContain('カート・決済');
        expect(container.textContent).toContain('SaaS の管理画面');

        // Mermaid diagrams 17 to 20
        expect(container.querySelector('#mermaid-diagram-17')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-18')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-19')).toBeTruthy();
        expect(container.querySelector('#mermaid-diagram-20')).toBeTruthy();
    });

    it('renders Section 7 (Exam Prep, Q34-Q37 summary, Quiz) and Section 8 (Checklists with dynamic progress)', () => {
        const { container } = render(<CtalTaChapter4Page />);

        // Section 7 headings
        const sec7 = container.querySelector('[id="7-試験対策"]');
        expect(sec7).toBeTruthy();
        expect(sec7?.textContent).toContain('7. 試験対策');

        expect(container.querySelector('[id="71-混同しやすい概念の比較"]')).toBeTruthy();
        expect(container.querySelector('[id="72-lo-ごとのこれだけは説明できるポイント"]')).toBeTruthy();
        expect(container.querySelector('[id="73-公式サンプル試験の第4章q34q37一覧"]')).toBeTruthy();
        expect(container.querySelector('[id="74-自己診断ミニクイズ-筆者作成公式問題ではありません"]')).toBeTruthy();
        expect(container.querySelector('[id="75-学習プラン-目安"]')).toBeTruthy();
        expect(container.querySelector('[id="76-公式シラバス4447-ページ通読時のチェックポイント"]')).toBeTruthy();

        // Section 8 heading
        const sec8 = container.querySelector('[id="8-実務チェックリスト"]');
        expect(sec8).toBeTruthy();
        expect(sec8?.textContent).toContain('8. 実務チェックリスト');

        // Checklists count: 1 in Section 7 + 4 in Section 8 = 5 cards
        const checklistCards = container.querySelectorAll('.checklist-card');
        expect(checklistCards.length).toBe(5);
        // カードごとに項目数とラベルを出現順で 1 対 1 照合し、欠落・重複・順序違いを検出する
        const cardLabels = Array.from(checklistCards).map((card) =>
            Array.from(card.querySelectorAll('li')).map((li) => li.textContent?.trim())
        );
        expect(cardLabels).toEqual([
            [
                '4.1：3特性それぞれの定義文、テスト時期・テストレベルの記述、典型的な欠陥・使う技法の記述（本ガイドの 2.6 節と比較）',
                '4.2：TA の貢献として列挙された項目が、本ガイドの 3.3 節と一致するか。ユーザビリティ指標や評価手法の例示があるか',
                '4.3：適応性・インストール性の定義と、TA の貢献の具体的な列挙（4.2、4.3 節と比較）',
                '4.4：相互運用性の定義と、TA の貢献の具体例。共存性の扱い',
                'キーワード13語が、本文中でどう定義・使用されているか',
                '図・表・例に書かれた固有の用語（試験で問われやすい）',
            ],
            [
                'テスト条件を、正確性・適切性・完全性のどれに関するものかで分類した',
                '要件・ユーザーストーリー・ユースケースとトレーサビリティが取れている',
                'CRUD マトリクスで、各エンティティの操作の欠落を確認した',
                '期待結果を独立したオラクルから決めた（実装を見て決めていない）',
                '主要シナリオを、ペルソナ・利用パターンから作った',
            ],
            [
                '対象利用者グループと代表する参加者を定義した',
                'タスクを利用者の目的で書き、成功基準と指標を決めた',
                'セッションでは観察に徹する手順を関係者と合意した',
                '学習性・操作性・エラー防止・包括性までの観点をチェックリスト化した',
                '問題を影響と頻度で優先度づけし、再テスト計画を立てた',
            ],
            [
                'サポート対象環境（OS・ブラウザ・DB・クラウドなど）を一覧化した',
                '環境をパラメータと値で整理し、制約を反映した',
                '組み合わせ技法（ペアワイズ・基本選択・全組み合わせ）をリスクに応じて選んだ',
                'インストール性で、新規・更新・失敗・ロールバック・アンインストールを確認した',
                'テスト環境の初期状態と初期化手順、本番との忠実度を記録した',
            ],
            [
                '連携するシステムとインタフェースを一覧化した',
                '交換される情報の形式・意味・単位・文字コード・日時を確認した',
                '正常・代替・例外のシナリオを設計した',
                '相手が使えない部分は、テストダブルやサービス仮想化で補い、最終確認は実環境で行った',
                '両側（送信側・受信側）の状態を確認した',
            ],
        ]);

        // Verify dynamic progress update on checklist
        const firstCard = checklistCards[0];
        if (!firstCard) throw new Error('checklist card not found');
        const countSpan = firstCard.querySelector('.cp-count');
        const fillBar = firstCard.querySelector('.cp-bar-fill') as HTMLElement;
        const checkboxes = firstCard.querySelectorAll('input[type="checkbox"]');

        expect(countSpan?.textContent).toBe(`0 / ${checkboxes.length} 完了`);
        expect(fillBar?.style.width).toBe('0%');
        // 進捗の変化をスクリーンリーダーへ通知する
        expect(countSpan?.getAttribute('role')).toBe('status');
        expect(countSpan?.getAttribute('aria-live')).toBe('polite');

        // Check first item
        const firstCheckbox = checkboxes[0];
        if (!firstCheckbox) throw new Error('checkbox not found');
        const firstItem = firstCheckbox.closest('li');
        fireEvent.click(firstCheckbox);
        expect(countSpan?.textContent).toBe(`1 / ${checkboxes.length} 完了`);
        expect(parseFloat(fillBar?.style.width || '0')).toBeCloseTo(100 / checkboxes.length);
        // li.checked の打消し線スタイルが適用される
        expect(firstItem?.classList.contains('checked')).toBe(true);

        // Uncheck first item
        fireEvent.click(firstCheckbox);
        expect(countSpan?.textContent).toBe(`0 / ${checkboxes.length} 完了`);
        expect(firstItem?.classList.contains('checked')).toBe(false);
        expect(fillBar?.style.width).toBe('0%');

        // Content verification
        expect(container.textContent).toContain('混同しやすい概念の比較');
        expect(container.textContent).toContain('公式サンプル試験の第4章（Q34〜Q37）一覧');
        expect(container.textContent).toContain('自己診断ミニクイズ');
        expect(container.textContent).toContain('機能テスト（4.1）');
        expect(container.textContent).toContain('ユーザビリティテスト（4.2）');
        expect(container.textContent).toContain('フレキシビリティテスト（4.3）');
        expect(container.textContent).toContain('互換性テスト（4.4）');
    });

    it('renders Section 9 (References) and Appendices A & B', () => {
        const { container } = render(<CtalTaChapter4Page />);

        // Section 9 headings
        const sec9 = container.querySelector('[id="9-参考文献根拠ソースの-url"]');
        expect(sec9).toBeTruthy();
        expect(sec9?.textContent).toContain('9. 参考文献（根拠ソースの URL）');

        expect(container.querySelector('[id="91-istqb-公式一次情報"]')).toBeTruthy();
        expect(container.querySelector('[id="92-iso-規格"]')).toBeTruthy();
        expect(container.querySelector('[id="93-ユーザビリティアクセシビリティ"]')).toBeTruthy();
        expect(container.querySelector('[id="94-環境ci用語補足"]')).toBeTruthy();
        expect(container.querySelector('[id="95-二次情報学習の補助"]')).toBeTruthy();

        // Appendix headings
        const appA = container.querySelector('[id="付録-aこのガイドの記述と根拠の対応要点"]');
        expect(appA).toBeTruthy();
        expect(appA?.textContent).toContain('付録 A：このガイドの記述と根拠の対応（要点）');

        const appB = container.querySelector('[id="付録-b用語の対応表日本語英語"]');
        expect(appB).toBeTruthy();
        expect(appB?.textContent).toContain('付録 B：用語の対応表（日本語・英語）');

        // Reference tables content
        expect(container.textContent).toContain('ISTQB CTAL-TA v4.0 認定ページ');
        expect(container.textContent).toContain('CTAL-TA v4.0 シラバス（PDF）');
        expect(container.textContent).toContain('ISO/IEC 25010:2023 製品品質モデル');
        expect(container.textContent).toContain('Nielsen Norman Group：10 Usability Heuristics');

        // Appendix B English translations
        expect(container.textContent).toContain('Functional suitability');
        expect(container.textContent).toContain('Interaction capability');
        expect(container.textContent).toContain('Interoperability');
        expect(container.textContent).toContain('Service virtualization');
    });
});

describe('CTAL-TA v4.0 Chapter 4 - Mobile Navigation Toggle', () => {
    it('toggles the open class on sidebar and scrim with synced ARIA state', () => {
        // Arrange
        const { container } = render(<CtalTaChapter4Page />);
        const toggle = container.querySelector('#sbToggle') as HTMLButtonElement;
        const sidebar = container.querySelector('#sidebar');
        const scrim = container.querySelector('#sbScrim');
        expect(toggle.getAttribute('aria-controls')).toBe('sidebar');
        expect(toggle.getAttribute('aria-expanded')).toBe('false');
        expect(toggle.getAttribute('aria-label')).toBe('目次を開く');
        expect(scrim?.getAttribute('aria-hidden')).toBe('true');
        expect(sidebar?.classList.contains('open')).toBe(false);
        expect(scrim?.classList.contains('open')).toBe(false);

        // Act: 開く
        fireEvent.click(toggle);

        // Assert: CSS の .sidebar.open / .sb-scrim.open セレクタと一致するクラスが付く
        expect(toggle.getAttribute('aria-expanded')).toBe('true');
        expect(toggle.getAttribute('aria-label')).toBe('目次を閉じる');
        expect(sidebar?.classList.contains('open')).toBe(true);
        expect(scrim?.classList.contains('open')).toBe(true);

        // Act: scrim クリックで閉じる
        fireEvent.click(scrim as Element);

        // Assert
        expect(toggle.getAttribute('aria-expanded')).toBe('false');
        expect(sidebar?.classList.contains('open')).toBe(false);
        expect(scrim?.classList.contains('open')).toBe(false);
    });

    it('moves focus to the destination heading when a TOC link is selected on mobile', () => {
        // Arrange
        const { container } = render(<CtalTaChapter4Page />);
        const toggle = container.querySelector('#sbToggle') as HTMLButtonElement;
        fireEvent.click(toggle);
        const link = container.querySelector('#sidebar a[href="#02-信頼度タグの見方"]') as HTMLAnchorElement;

        // Act
        fireEvent.click(link);

        // Assert: 閉じたうえで、画面外のリンクではなく見出しにフォーカスがある
        const heading = container.querySelector('[id="02-信頼度タグの見方"]');
        expect(toggle.getAttribute('aria-expanded')).toBe('false');
        expect(heading?.getAttribute('tabindex')).toBe('-1');
        expect(document.activeElement).toBe(heading);
    });

    it('returns focus to the visible toggle when the scrim closes the sidebar', () => {
        // Arrange
        const { container } = render(<CtalTaChapter4Page />);
        const toggle = container.querySelector('#sbToggle') as HTMLButtonElement;
        fireEvent.click(toggle);

        // Act
        fireEvent.click(container.querySelector('#sbScrim') as Element);

        // Assert
        expect(document.activeElement).toBe(toggle);
    });

    it('targets the open classes in the page CSS (not an unused nav-open root class)', () => {
        const css = readFileSync(
            'app/istqb-ctal-ta-chapter4-quality-characteristics/istqb-ctal-ta-chapter4-quality-characteristics.css',
            'utf8',
        );
        expect(css).toContain('.ctal-ta-ch4-page .sidebar.open');
        expect(css).toContain('.ctal-ta-ch4-page .sb-scrim.open');
        expect(css).not.toContain('.nav-open');
    });
});
