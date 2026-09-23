import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'bun:test';
import CtalTaChapter4Page from '../../app/istqb-ctal-ta-chapter4-quality-characteristics/page';

describe('CTAL-TA v4.0 Chapter 4 - Category 0: Scaffolding, NavBar & Hero Overview', () => {
    it('renders the page container and main structure with ctal-ta-ch4-page class', () => {
        const { container } = render(<CtalTaChapter4Page />);
        const pageLayout = container.querySelector('.ctal-ta-ch4-page');
        expect(pageLayout).toBeTruthy();
        expect(container.querySelector('nav')).toBeTruthy();
        expect(container.querySelector('main')).toBeTruthy();
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
});
