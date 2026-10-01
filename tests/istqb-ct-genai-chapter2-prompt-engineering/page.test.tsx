import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'bun:test';
import CtGenAiChapter2Page from '../../app/istqb-ct-genai-chapter2-prompt-engineering/page';
import { collectTableInventory, type TableSpec } from '../helpers/table-inventory';

afterEach(() => cleanup());

export const EXPECTED_TOC_LINKS = [
    { href: '#0-第2章の全体像と学習目標', text: '0. 第2章の全体像と学習目標', isH3: false },
    { href: '#キーワード第2章シラバス記載', text: 'キーワード（第2章シラバス記載）', isH3: true },
    { href: '#学習目標learning-objectivesとハンズオン目標hands-on-objectivesの全体マップ', text: '学習目標（Learning Objectives）とハンズオン目標（Hands-on Objectives）の全体マップ', isH3: true },
    { href: '#1-21-効果的なプロンプト開発', text: '1. 2.1 効果的なプロンプト開発', isH3: false },
    { href: '#11-プロンプトの6要素構造211', text: '1.1 プロンプトの6要素構造（2.1.1）', isH3: true },
    { href: '#12-コアプロンプティング技法212', text: '1.2 コアプロンプティング技法（2.1.2）', isH3: true },
    { href: '#3つの技法の比較表', text: '3つの技法の比較表', isH3: true },
    { href: '#13-システムプロンプトとユーザープロンプト213', text: '1.3 システムプロンプトとユーザープロンプト（2.1.3）', isH3: true },
    { href: '#2-22-テスト業務へのプロンプトエンジニアリング技法の適用', text: '2. 2.2 テスト業務へのプロンプトエンジニアリング技法の適用', isH3: false },
    { href: '#21-テスト分析221', text: '2.1 テスト分析（2.2.1）', isH3: true },
    { href: '#22-テスト設計テスト実装222', text: '2.2 テスト設計・テスト実装（2.2.2）', isH3: true },
    { href: '#23-自動リグレッションテスト223', text: '2.3 自動リグレッションテスト（2.2.3）', isH3: true },
    { href: '#24-テスト監視テストコントロール224', text: '2.4 テスト監視・テストコントロール（2.2.4）', isH3: true },
    { href: '#25-状況に応じた技法選択225', text: '2.5 状況に応じた技法選択（2.2.5）', isH3: true },
    { href: '#3-23-genaiの結果評価とプロンプトの改善', text: '3. 2.3 GenAIの結果評価とプロンプトの改善', isH3: false },
    { href: '#31-評価指標231', text: '3.1 評価指標（2.3.1）', isH3: true },
    { href: '#32-プロンプト評価改善技法232', text: '3.2 プロンプト評価・改善技法（2.3.2）', isH3: true },
    { href: '#4-章末チェックリスト学習目標一覧', text: '4. 章末チェックリスト（学習目標一覧）', isH3: false },
    { href: '#5-ベストプラクティス総集編', text: '5. ベストプラクティス総集編', isH3: false },
    { href: '#6-v10v11-変更点第2章に関わる箇所', text: '6. v1.0→v1.1 変更点（第2章に関わる箇所）', isH3: false },
    { href: '#7-参考文献出典', text: '7. 参考文献・出典', isH3: false },
    { href: '#istqb公式資料', text: 'ISTQB公式資料', isH3: true },
    { href: '#シラバス内で引用されている学術文献第2章関連', text: 'シラバス内で引用されている学術文献（第2章関連）', isH3: true },
    { href: '#関連する公式ドキュメント学習の前提次のステップ', text: '関連する公式ドキュメント（学習の前提・次のステップ）', isH3: true },
];

export const EXPECTED_TABLE_SPECS_CAT0: TableSpec[] = [
    {
        heading: '0. 第2章の全体像と学習目標',
        headers: ['節', 'タイトル', '学習内容の要旨'],
        rows: 3,
        cols: 3,
        sample: '2.1',
    },
    {
        heading: '学習目標（Learning Objectives）とハンズオン目標（Hands-on Objectives）の全体マップ',
        headers: ['節', '学習目標（K-レベル）', '対応するハンズオン目標（H-レベル）'],
        rows: 10,
        cols: 3,
        sample: '2.1.1',
    },
];

describe('CT-GenAI 第2章 完全解説ガイド (Category 0: 基盤セットアップ & ナビゲーション & セクション0)', () => {
    it('ヒーロー領域（H1、キッカー、サブタイトル、メタ情報リンク）が正しくレンダリングされること', () => {
        const { container } = render(<CtGenAiChapter2Page />);
        const hero = container.querySelector('.hero');
        expect(hero).not.toBeNull();

        const kicker = hero?.querySelector('.hero-kicker');
        expect(kicker?.textContent).toContain('CT-GenAI');
        expect(kicker?.textContent).toContain('第2章');

        const h1 = hero?.querySelector('h1');
        expect(h1?.textContent?.trim()).toBe('ISTQB® CT-GenAI 第2章 完全解説ガイド');

        const subtitle = hero?.querySelector('.hero-subtitle');
        expect(subtitle?.textContent).toContain('効果的なソフトウェアテストのためのプロンプトエンジニアリング');

        // メタ情報リンク（4件）
        const links = hero?.querySelectorAll('.hero-meta a');
        expect(links?.length).toBe(4);
        expect(links?.[0]?.getAttribute('href')).toBe('https://istqb.org/certifications/gen-ai/');
        expect(links?.[1]?.getAttribute('href')).toContain('download_id=6295');
        expect(links?.[2]?.getAttribute('href')).toContain('CT-GenAI-Syllabus-v1.0.pdf');
        expect(links?.[3]?.getAttribute('href')).toContain('ISTQB-CT-GenAI_v1.1_Release_Notes.pdf');
    });

    it('サイドバー（NavBar）に23件の目次リンクが存在し、テキストとアンカーが完全一致すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);
        const sidebar = container.querySelector('nav.sidebar');
        expect(sidebar).not.toBeNull();

        const brandKicker = sidebar?.querySelector('.brand-kicker');
        expect(brandKicker?.textContent).toContain('CT-GenAI');

        const brandTitle = sidebar?.querySelector('.brand-title');
        expect(brandTitle?.textContent).toBe('ISTQB® CT-GenAI 第2章 完全解説ガイド');

        const links = Array.from(sidebar?.querySelectorAll('a') ?? []);
        expect(links.length).toBe(EXPECTED_TOC_LINKS.length);

        EXPECTED_TOC_LINKS.forEach((expected, i) => {
            const actual = links[i];
            expect(actual?.getAttribute('href')).toBe(expected.href);
            expect(actual?.textContent?.trim().replace(/\s+/g, ' ')).toBe(expected.text);
        });
    });

    it('セクション0の構成要素（見出し、Mermaid図0、表1・2、キーワード、コールアウト）が存在すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const sec0 = container.querySelector('[id="0-第2章の全体像と学習目標"]');
        expect(sec0).not.toBeNull();
        expect(sec0?.tagName).toBe('H2');

        // Mermaid 図 0 がコンテナ内に存在すること
        const mermaid0 = container.querySelector('[data-diagram-id="mermaid-diagram-0"]');
        expect(mermaid0).not.toBeNull();

        // キーワード見出しとリスト
        const kwH3 = container.querySelector('#キーワード第2章シラバス記載');
        expect(kwH3).not.toBeNull();
        expect(kwH3?.tagName).toBe('H3');

        // 学習目標見出し
        const loH3 = container.querySelector('#学習目標learning-objectivesとハンズオン目標hands-on-objectivesの全体マップ');
        expect(loH3).not.toBeNull();
        expect(loH3?.tagName).toBe('H3');

        // コールアウト (generic)
        const callouts = container.querySelectorAll('.callout-generic');
        expect(callouts.length).toBeGreaterThanOrEqual(1);
        expect(callouts[0]?.textContent).toContain('K1=記憶（Remember）');
    });

    it('セクション0内のテーブルがインベントリ定義（行列数・ヘッダー・サンプル）と一致すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);
        const tables = collectTableInventory(container);

        expect(tables.length).toBeGreaterThanOrEqual(EXPECTED_TABLE_SPECS_CAT0.length);

        EXPECTED_TABLE_SPECS_CAT0.forEach((spec, i) => {
            const actual = tables[i];
            expect(actual.heading).toBe(spec.heading);
            expect(actual.headers).toEqual([...spec.headers]);
            expect(actual.rows).toBe(spec.rows);
            expect(actual.cols).toBe(spec.cols);
            expect(actual.sample).toBe(spec.sample);
        });
    });
});
