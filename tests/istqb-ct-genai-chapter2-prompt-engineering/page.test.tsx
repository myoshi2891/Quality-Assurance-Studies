import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
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

export const EXPECTED_TABLE_SPECS_CAT1: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT0,
    {
        heading: '1.1 プロンプトの6要素構造（2.1.1）',
        headers: ['要素', '説明', 'ソフトウェアテストでの例'],
        rows: 6,
        cols: 3,
        sample: '① Role（役割）',
    },
    {
        heading: '1.2 コアプロンプティング技法（2.1.2）',
        headers: ['分類', '定義'],
        rows: 3,
        cols: 2,
        sample: 'Zero-shot（ゼロショット）',
    },
    {
        heading: '3つの技法の比較表',
        headers: ['技法', '推奨されるユースケース', '主な特徴・適用例'],
        rows: 3,
        cols: 3,
        sample: 'プロンプトチェイニング',
    },
    {
        heading: '1.3 システムプロンプトとユーザープロンプト（2.1.3）',
        headers: ['項目', 'システムプロンプト（System Prompt）', 'ユーザープロンプト（User Prompt）'],
        rows: 5,
        cols: 3,
        sample: '定義者',
    },
];

export const EXPECTED_TABLE_SPECS_CAT2: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT1,
    {
        heading: '2.1 テスト分析（2.2.1）',
        headers: ['典型タスク', 'GenAIによる支援内容'],
        rows: 5,
        cols: 2,
        sample: 'テストベース内の潜在的欠陥の特定',
    },
    {
        heading: '2.2 テスト設計・テスト実装（2.2.2）',
        headers: ['典型タスク', 'GenAIによる支援内容'],
        rows: 4,
        cols: 2,
        sample: 'テストケース生成',
    },
    {
        heading: '2.3 自動リグレッションテスト（2.2.3）',
        headers: ['典型タスク', 'GenAIによる支援内容'],
        rows: 5,
        cols: 2,
        sample: 'キーワード駆動自動化によるテストスクリプト実装',
    },
    {
        heading: '2.4 テスト監視・テストコントロール（2.2.4）',
        headers: ['典型タスク', 'GenAIによる支援内容'],
        rows: 4,
        cols: 2,
        sample: 'テスト監視とメトリクス分析',
    },
    {
        heading: '2.5 状況に応じた技法選択（2.2.5）',
        headers: ['プロンプティング技法', '推奨されるユースケース', '主な特徴・適用例'],
        rows: 3,
        cols: 3,
        sample: 'プロンプトチェイニング',
    },
];

export const EXPECTED_TABLE_SPECS_CAT3: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT2,
    {
        heading: '3.1 評価指標（2.3.1）',
        headers: ['指標', '説明', '例'],
        rows: 7,
        cols: 3,
        sample: '正確性（Accuracy）',
    },
    {
        heading: '3.2 プロンプト評価・改善技法（2.3.2）',
        headers: ['技法', '内容'],
        rows: 5,
        cols: 2,
        sample: '反復的なプロンプト修正（Iterative prompt modification）',
    },
];

export const EXPECTED_TABLE_SPECS_CAT4: TableSpec[] = [
    ...EXPECTED_TABLE_SPECS_CAT3,
    {
        heading: '6. v1.0→v1.1 変更点（第2章に関わる箇所）',
        headers: ['箇所', 'v1.0', 'v1.1での変更内容'],
        rows: 5,
        cols: 3,
        sample: 'HO-2.1.2b (H1) の本文表記',
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

describe('CT-GenAI 第2章 完全解説ガイド (Category 1: セクション1 効果的なプロンプト開発)', () => {
    it('セクション1の見出し（H2、H3、H4）が正しく配置されていること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const h2 = container.querySelector('[id="1-21-効果的なプロンプト開発"]');
        expect(h2).not.toBeNull();
        expect(h2?.tagName).toBe('H2');

        const h3List = [
            '11-プロンプトの6要素構造211',
            '12-コアプロンプティング技法212',
            '3つの技法の比較表',
            '13-システムプロンプトとユーザープロンプト213',
        ];
        h3List.forEach((id) => {
            const h3 = container.querySelector(`[id="${id}"]`);
            expect(h3).not.toBeNull();
            expect(h3?.tagName).toBe('H3');
        });

        const h4List = [
            '①-プロンプトチェイニングprompt-chaining',
            '②-few-shotプロンプティングfew-shot-prompting',
            '③-メタプロンプティングmeta-prompting',
        ];
        h4List.forEach((id) => {
            const h4 = container.querySelector(`[id="${id}"]`);
            expect(h4).not.toBeNull();
            expect(h4?.tagName).toBe('H4');
        });
    });

    it('セクション1のMermaid図（図1〜5）が存在すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const diagramIds = [
            'mermaid-diagram-1',
            'mermaid-diagram-2',
            'mermaid-diagram-3',
            'mermaid-diagram-4',
            'mermaid-diagram-5',
        ];
        diagramIds.forEach((id) => {
            const el = container.querySelector(`[data-diagram-id="${id}"]`);
            expect(el).not.toBeNull();
        });
    });

    it('セクション1のコールアウト（ベストプラクティス3件、ハンズオン2件、警告1件）が存在すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        // ベストプラクティス
        const practices = Array.from(container.querySelectorAll('.callout-practice'));
        expect(practices.length).toBeGreaterThanOrEqual(3);

        // ハンズオン
        const handson = Array.from(container.querySelectorAll('.callout-handson'));
        expect(handson.length).toBeGreaterThanOrEqual(2);
        expect(handson.some((el) => el.textContent?.includes('HO-2.1.1'))).toBe(true);
        expect(handson.some((el) => el.textContent?.includes('HO-2.1.2a'))).toBe(true);

        // 警告（v1.1 用語変更）
        const warnings = Array.from(container.querySelectorAll('.callout-warning'));
        expect(warnings.length).toBeGreaterThanOrEqual(1);
        expect(warnings.some((el) => el.textContent?.includes('v1.1での用語変更に関する注記'))).toBe(true);
    });

    it('セクション1内のテーブルがインベントリ定義と一致すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);
        const tables = collectTableInventory(container);

        expect(tables.length).toBeGreaterThanOrEqual(EXPECTED_TABLE_SPECS_CAT1.length);

        EXPECTED_TABLE_SPECS_CAT1.forEach((spec, i) => {
            const actual = tables[i];
            expect(actual.heading).toBe(spec.heading);
            expect(actual.headers).toEqual([...spec.headers]);
            expect(actual.rows).toBe(spec.rows);
            expect(actual.cols).toBe(spec.cols);
            expect(actual.sample).toBe(spec.sample);
        });
    });
});

describe('CT-GenAI 第2章 完全解説ガイド (Category 2: セクション2 テスト業務への適用)', () => {
    it('セクション2の見出し（H2、H3）が正しく配置されていること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const h2 = container.querySelector('[id="2-22-テスト業務へのプロンプトエンジニアリング技法の適用"]');
        expect(h2).not.toBeNull();
        expect(h2?.tagName).toBe('H2');

        const h3List = [
            '21-テスト分析221',
            '22-テスト設計テスト実装222',
            '23-自動リグレッションテスト223',
            '24-テスト監視テストコントロール224',
            '25-状況に応じた技法選択225',
        ];
        h3List.forEach((id) => {
            const h3 = container.querySelector(`[id="${id}"]`);
            expect(h3).not.toBeNull();
            expect(h3?.tagName).toBe('H3');
        });
    });

    it('セクション2のMermaid図（図6、図7）が存在すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const diagramIds = ['mermaid-diagram-6', 'mermaid-diagram-7'];
        diagramIds.forEach((id) => {
            const el = container.querySelector(`[data-diagram-id="${id}"]`);
            expect(el).not.toBeNull();
        });
    });

    it('セクション2のコールアウト（ハンズオン5件、ベストプラクティス2件、警告2件）が存在すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        // ハンズオン
        const handson = Array.from(container.querySelectorAll('.callout-handson'));
        expect(handson.length).toBeGreaterThanOrEqual(7); // Cat1(2) + Cat2(5) = 7
        expect(handson.some((el) => el.textContent?.includes('HO-2.2.1a'))).toBe(true);
        expect(handson.some((el) => el.textContent?.includes('HO-2.2.2a'))).toBe(true);
        expect(handson.some((el) => el.textContent?.includes('HO-2.2.3a'))).toBe(true);
        expect(handson.some((el) => el.textContent?.includes('HO-2.2.4'))).toBe(true);
        expect(handson.some((el) => el.textContent?.includes('HO-2.2.5'))).toBe(true);

        // ベストプラクティス
        const practices = Array.from(container.querySelectorAll('.callout-practice'));
        expect(practices.length).toBeGreaterThanOrEqual(5); // Cat1(3) + Cat2(2) = 5

        // 警告・注意
        const warnings = Array.from(container.querySelectorAll('.callout-warning'));
        expect(warnings.length).toBeGreaterThanOrEqual(3); // Cat1(1) + Cat2(2) = 3
    });

    it('セクション2内のテーブルがインベントリ定義と一致すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);
        const tables = collectTableInventory(container);

        expect(tables.length).toBeGreaterThanOrEqual(EXPECTED_TABLE_SPECS_CAT2.length);

        EXPECTED_TABLE_SPECS_CAT2.forEach((spec, i) => {
            const actual = tables[i];
            expect(actual.heading).toBe(spec.heading);
            expect(actual.headers).toEqual([...spec.headers]);
            expect(actual.rows).toBe(spec.rows);
            expect(actual.cols).toBe(spec.cols);
            expect(actual.sample).toBe(spec.sample);
        });
    });
});

describe('CT-GenAI 第2章 完全解説ガイド (Category 3: セクション3 GenAIの結果評価とプロンプトの改善)', () => {
    it('セクション3の見出し（H2、H3）が正しく配置されていること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const h2 = container.querySelector('[id="3-23-genaiの結果評価とプロンプトの改善"]');
        expect(h2).not.toBeNull();
        expect(h2?.tagName).toBe('H2');

        const h3List = [
            '31-評価指標231',
            '32-プロンプト評価改善技法232',
        ];
        h3List.forEach((id) => {
            const h3 = container.querySelector(`[id="${id}"]`);
            expect(h3).not.toBeNull();
            expect(h3?.tagName).toBe('H3');
        });
    });

    it('セクション3のMermaid図（図8）が存在すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const el = container.querySelector('[data-diagram-id="mermaid-diagram-8"]');
        expect(el).not.toBeNull();
    });

    it('セクション3のコールアウト（ハンズオン2件、ベストプラクティス1件、警告2件）が存在すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        // ハンズオン
        const handson = Array.from(container.querySelectorAll('.callout-handson'));
        expect(handson.length).toBeGreaterThanOrEqual(9); // Cat1(2) + Cat2(5) + Cat3(2) = 9
        expect(handson.some((el) => el.textContent?.includes('HO-2.3.1'))).toBe(true);
        expect(handson.some((el) => el.textContent?.includes('HO-2.3.2'))).toBe(true);

        // ベストプラクティス
        const practices = Array.from(container.querySelectorAll('.callout-practice'));
        expect(practices.length).toBeGreaterThanOrEqual(6); // Cat1(3) + Cat2(2) + Cat3(1) = 6

        // 警告・注意
        const warnings = Array.from(container.querySelectorAll('.callout-warning'));
        expect(warnings.length).toBeGreaterThanOrEqual(5); // Cat1(1) + Cat2(2) + Cat3(2) = 5
        expect(warnings.some((el) => el.textContent?.includes('非決定的な性質'))).toBe(true);
    });

    it('セクション3内のテーブルがインベントリ定義と一致すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);
        const tables = collectTableInventory(container);

        expect(tables.length).toBeGreaterThanOrEqual(EXPECTED_TABLE_SPECS_CAT3.length);

        EXPECTED_TABLE_SPECS_CAT3.forEach((spec, i) => {
            const actual = tables[i];
            expect(actual.heading).toBe(spec.heading);
            expect(actual.headers).toEqual([...spec.headers]);
            expect(actual.rows).toBe(spec.rows);
            expect(actual.cols).toBe(spec.cols);
            expect(actual.sample).toBe(spec.sample);
        });
    });
});

describe('CT-GenAI 第2章 完全解説ガイド (Category 4: セクション4〜7、チェックリスト、フッター)', () => {
    it('セクション4〜7の見出し（H2、H3）が正しく配置されていること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const h2List = [
            '4-章末チェックリスト学習目標一覧',
            '5-ベストプラクティス総集編',
            '6-v10v11-変更点第2章に関わる箇所',
            '7-参考文献出典',
        ];
        h2List.forEach((id) => {
            const h2 = container.querySelector(`[id="${id}"]`);
            expect(h2).not.toBeNull();
            expect(h2?.tagName).toBe('H2');
        });

        const h3List = [
            'istqb公式資料',
            'シラバス内で引用されている学術文献第2章関連',
            '関連する公式ドキュメント学習の前提次のステップ',
        ];
        h3List.forEach((id) => {
            const h3 = container.querySelector(`[id="${id}"]`);
            expect(h3).not.toBeNull();
            expect(h3?.tagName).toBe('H3');
        });
    });

    it('章末チェックリストカードが存在し、10項目あり、操作により進捗が更新されること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const card = container.querySelector('.checklist-card');
        expect(card).not.toBeNull();

        const checkboxes = container.querySelectorAll('.checklist-card input[type="checkbox"]');
        expect(checkboxes.length).toBe(10);

        const count = container.querySelector('.checklist-card .cp-count');
        expect(count).not.toBeNull();
        expect(count?.textContent).toContain('0 / 10 完了');

        // 最初のチェックボックスをクリック
        fireEvent.click(checkboxes[0]);
        expect(count?.textContent).toContain('1 / 10 完了');
    });

    it('ベストプラクティス総集編に10項目が存在すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const h2 = container.querySelector('[id="5-ベストプラクティス総集編"]');
        expect(h2).not.toBeNull();

        const ol = h2?.nextElementSibling?.nextElementSibling;
        expect(ol?.tagName).toBe('OL');
        const items = ol?.querySelectorAll('li');
        expect(items?.length).toBe(10);
    });

    it('セクション6の変更点テーブルがインベントリ定義と一致すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);
        const tables = collectTableInventory(container);

        expect(tables.length).toBeGreaterThanOrEqual(EXPECTED_TABLE_SPECS_CAT4.length);

        EXPECTED_TABLE_SPECS_CAT4.forEach((spec, i) => {
            const actual = tables[i];
            expect(actual.heading).toBe(spec.heading);
            expect(actual.headers).toEqual([...spec.headers]);
            expect(actual.rows).toBe(spec.rows);
            expect(actual.cols).toBe(spec.cols);
            expect(actual.sample).toBe(spec.sample);
        });
    });

    it('セクション7の参考文献リンクおよび注記コールアウトが存在すること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const links = Array.from(container.querySelectorAll('a[href]'));
        expect(links.some((a) => a.getAttribute('href')?.includes('arxiv.org/abs/2406.06608'))).toBe(true);
        expect(links.some((a) => a.getAttribute('href')?.includes('doi.org/10.1016/j.csi.2024.103942'))).toBe(true);
        expect(links.some((a) => a.getAttribute('href')?.includes('glossary.istqb.org'))).toBe(true);

        const noteCallout = container.querySelector('.callout-note');
        expect(noteCallout).not.toBeNull();
        expect(noteCallout?.textContent).toContain('Schulhoff 2024');
    });

    it('ページフッターが存在し著作権表示を含んでいること', () => {
        const { container } = render(<CtGenAiChapter2Page />);

        const footer = container.querySelector('.page-footer');
        expect(footer).not.toBeNull();
        expect(footer?.textContent).toContain('ISTQB');
        expect(footer?.textContent).toContain('著作権');
    });
});


