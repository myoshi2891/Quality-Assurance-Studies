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

export const EXPECTED_TABLE_SPECS_CAT2: TableSpec[] = [
    {
        heading: 'ステップ1：4つの領域を知る',
        headers: ['能力領域', '英語', '一言でいうと', 'テストにおける具体例'],
        rows: 4,
        cols: 4,
        sample: '専門的能力',
    },
    {
        heading: 'ステップ2：見分け方のコツ',
        headers: ['例', '領域', '理由'],
        rows: 5,
        cols: 3,
        sample: '医療機器の薬事規制に詳しい',
    },
    {
        heading: 'ステップ3：コンテキストと必要スキルの対応表',
        headers: ['コンテキスト要因（第1章 1.4.2 の観点）', '必要になりやすいスキル', '主な領域'],
        rows: 7,
        cols: 3,
        sample: 'ドメイン（医療・金融・保険など）',
    },
    {
        heading: 'ステップ4：具体例（架空）',
        headers: ['必要な活動', '必要スキル', '領域'],
        rows: 5,
        cols: 3,
        sample: '患者安全リスクに基づくテスト設計',
    },
    {
        heading: 'ステップ2：主な評価方法',
        headers: ['方法', '内容', '長所', '注意点'],
        rows: 6,
        cols: 4,
        sample: '自己評価',
    },
    {
        heading: 'ステップ3：スキルマトリクス（skills matrix）の例',
        headers: ['メンバー', 'ドメイン知識（専門）', 'テスト技法（専門）', '自動化（方法論）', '交渉・調整（社会）', '自己管理（個人）'],
        rows: 4,
        cols: 6,
        sample: 'A さん',
    },
    {
        heading: 'ステップ1：育成手段の選択肢',
        headers: ['手段', '内容', '向いているスキル', '注意点'],
        rows: 7,
        cols: 4,
        sample: '公式トレーニング',
    },
];

export const EXPECTED_TABLE_SPECS_CAT3: TableSpec[] = [
    {
        heading: 'ステップ2：必要なマネジメントスキル',
        headers: ['スキル', '具体的にやること', '主な領域'],
        rows: 8,
        cols: 3,
        sample: 'リーダーシップ',
    },
    {
        heading: 'ステップ3：状況別の使い分け',
        headers: ['状況', '推奨されるマネジメントの重心'],
        rows: 5,
        cols: 2,
        sample: '新人が多い',
    },
    {
        heading: 'ステップ2：要因の一覧',
        headers: ['種類', '性質', '要因の例'],
        rows: 3,
        cols: 3,
        sample: '動機付け要因',
    },
    {
        heading: 'ステップ3：状況別の対処例',
        headers: ['状況', '起こりやすい意欲低下', 'マネージャーの対応例'],
        rows: 6,
        cols: 3,
        sample: '納期直前に大量の欠陥が見つかる',
    },
];

export const EXPECTED_TABLE_SPECS_CAT4: TableSpec[] = [
    {
        heading: 'ステップ2：4分類',
        headers: ['分類', '英語', '内容', '具体例'],
        rows: 4,
        cols: 4,
        sample: '予防コスト',
    },
    {
        heading: 'ステップ2：計算の基本式',
        headers: ['項目', '式'],
        rows: 4,
        cols: 2,
        sample: '回避できる外部失敗コスト（便益）',
    },
    {
        heading: 'ステップ3：計算例（架空の数値）',
        headers: ['項目', '金額'],
        rows: 4,
        cols: 2,
        sample: '予防コスト（固定）',
    },
    {
        heading: 'ステップ6：ステークホルダーに合わせた伝え方',
        headers: ['区分（原文の呼称）', '影響力', '関心', 'ビジネスケース提示での重点'],
        rows: 4,
        cols: 4,
        sample: 'Promoters（推進者）',
    },
    {
        heading: '4. 第1章・第2章とのつながり（🟢）',
        headers: ['第3章の内容', 'つながる箇所', 'つながり方'],
        rows: 9,
        cols: 3,
        sample: '3.1.2 必要スキルの分析',
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

describe('CTAL-TM v3.0 Chapter 3 - Category 2: 3.1 テストチーム スキル編', () => {
    it('renders section 2 and 2.0 prerequisite terms', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec2 = container.querySelector('[id="2-31-テストチームthe-test-team"]');
        expect(sec2).not.toBeNull();
        expect(sec2?.textContent).toContain('2. 3.1 テストチーム（The Test Team）');

        const sec20 = container.querySelector('[id="20-前提となる用語"]');
        expect(sec20).not.toBeNull();
        expect(sec20?.textContent).toContain('2.0 前提となる用語（🟢）');
    });

    it('renders section 2.1 4 areas of competence with Mermaid diagram and practice callout', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec21 = container.querySelector('[id="21-311-4つの能力領域における典型的なスキル"]');
        expect(sec21).not.toBeNull();
        expect(sec21?.textContent).toContain('2.1 3.1.1 4つの能力領域における典型的なスキル（🟡）');

        const step1 = container.querySelector('[id="ステップ14つの領域を知る"]');
        expect(step1).not.toBeNull();

        const step2 = container.querySelector('[id="ステップ2見分け方のコツ"]');
        expect(step2).not.toBeNull();
    });

    it('renders section 2.2 skills analysis with context and derivation Mermaid diagram', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec22 = container.querySelector('[id="22-312-必要なテストチームメンバーのスキルの分析"]');
        expect(sec22).not.toBeNull();
        expect(sec22?.textContent).toContain('2.2 3.1.2 必要なテストチームメンバーのスキルの分析（🟡＋🟢）');

        const step1 = container.querySelector('[id="ステップ1なぜ分析が必要か"]');
        expect(step1).not.toBeNull();

        const step2 = container.querySelector('[id="ステップ2分析の流れ"]');
        expect(step2).not.toBeNull();

        const step3 = container.querySelector('[id="ステップ3コンテキストと必要スキルの対応表"]');
        expect(step3).not.toBeNull();

        const step4 = container.querySelector('[id="ステップ4具体例架空"]');
        expect(step4).not.toBeNull();
    });

    it('renders section 2.3 skills assessment with skills matrix and gap Mermaid diagram', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec23 = container.querySelector('[id="23-313-テストチームメンバーのスキルの評価"]');
        expect(sec23).not.toBeNull();
        expect(sec23?.textContent).toContain('2.3 3.1.3 テストチームメンバーのスキルの評価（🟡）');

        const step1 = container.querySelector('[id="ステップ1評価の目的"]');
        expect(step1).not.toBeNull();

        const step2 = container.querySelector('[id="ステップ2主な評価方法"]');
        expect(step2).not.toBeNull();

        const step3 = container.querySelector('[id="ステップ3スキルマトリクスskills-matrixの例"]');
        expect(step3).not.toBeNull();
    });

    it('renders section 2.4 skills development with training plan Mermaid diagram and callout', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec24 = container.querySelector('[id="24-314-テストチームメンバーのスキルの育成"]');
        expect(sec24).not.toBeNull();
        expect(sec24?.textContent).toContain('2.4 3.1.4 テストチームメンバーのスキルの育成（🟡）');

        const step1 = container.querySelector('[id="ステップ1育成手段の選択肢"]');
        expect(step1).not.toBeNull();

        const step3 = container.querySelector('[id="ステップ3育成計画の立て方"]');
        expect(step3).not.toBeNull();
    });

    it('matches Category 2 table inventory precisely (7 tables)', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const allTables = collectTableInventory(container);
        const cat2Tables = allTables.slice(3, 10);
        expect(cat2Tables.length).toBe(7);

        EXPECTED_TABLE_SPECS_CAT2.forEach((expected, i) => {
            const actual = cat2Tables[i];
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual(expected.headers as string[]);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toBe(expected.sample);
        });
    });
});

describe('CTAL-TM v3.0 Chapter 3 - Category 3: 3.1 テストチーム マネジメント編', () => {
    it('renders section 2.5 management skills with tables and callout', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec25 = container.querySelector('[id="25-315-テストチームの管理に必要なマネジメントスキル"]');
        expect(sec25).not.toBeNull();
        expect(sec25?.textContent).toContain('2.5 3.1.5 テストチームの管理に必要なマネジメントスキル（🟡）');

        const step1 = container.querySelector('[id="ステップ1ホールチームアプローチ"]');
        expect(step1).not.toBeNull();

        const step2 = container.querySelector('[id="ステップ2必要なマネジメントスキル"]');
        expect(step2).not.toBeNull();

        const step3 = container.querySelector('[id="ステップ3状況別の使い分け"]');
        expect(step3).not.toBeNull();
    });

    it('renders section 2.6 motivation factors and demotivators with Herzberg two-factor theory', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec26 = container.querySelector('[id="26-316-特定の状況におけるテストチームの動機付け要因と意欲低下要因"]');
        expect(sec26).not.toBeNull();
        expect(sec26?.textContent).toContain('2.6 3.1.6 特定の状況におけるテストチームの動機付け要因と意欲低下要因（🟡）');

        const step1 = container.querySelector('[id="ステップ1考え方"]');
        expect(step1).not.toBeNull();

        const step2 = container.querySelector('[id="ステップ2要因の一覧"]');
        expect(step2).not.toBeNull();

        const step3 = container.querySelector('[id="ステップ3状況別の対処例"]');
        expect(step3).not.toBeNull();
    });

    it('matches Category 3 table inventory precisely (4 tables)', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const allTables = collectTableInventory(container);
        const cat3Tables = allTables.slice(10, 14);
        expect(cat3Tables.length).toBe(4);

        EXPECTED_TABLE_SPECS_CAT3.forEach((expected, i) => {
            const actual = cat3Tables[i];
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual(expected.headers as string[]);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toBe(expected.sample);
        });
    });
});

describe('CTAL-TM v3.0 Chapter 3 - Category 4: 3.2 ステークホルダー & 他章連携', () => {
    it('renders section 3 and 3.1 cost of quality with Mermaid 6 and callout', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec3 = container.querySelector('[id="3-32-ステークホルダーとの関係stakeholder-relationships"]');
        expect(sec3).not.toBeNull();
        expect(sec3?.textContent).toContain('3. 3.2 ステークホルダーとの関係（Stakeholder Relationships）');

        const sec31 = container.querySelector('[id="31-321-品質コストcost-of-quality用語は-istqb-用語集に準拠"]');
        expect(sec31).not.toBeNull();

        const step1 = container.querySelector('[id="ステップ1定義"]');
        expect(step1).not.toBeNull();

        const step2 = container.querySelector('[id="ステップ24分類"]');
        expect(step2).not.toBeNull();

        const step3 = container.querySelector('[id="ステップ3基本の考え方"]');
        expect(step3).not.toBeNull();
    });

    it('renders section 3.2 cost-benefit relationship with Mermaid 7, formula, and callouts', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec32 = container.querySelector('[id="32-322-テストの費用対効果の関係cost-benefit-relationship-of-testing"]');
        expect(sec32).not.toBeNull();

        const step1 = container.querySelector('[id="ステップ1目的"]');
        expect(step1).not.toBeNull();

        const step2 = container.querySelector('[id="ステップ2計算の基本式"]');
        expect(step2).not.toBeNull();

        const step3 = container.querySelector('[id="ステップ3計算例架空の数値"]');
        expect(step3).not.toBeNull();

        const step4 = container.querySelector('[id="ステップ4欠陥検出率ddpによる補足"]');
        expect(step4).not.toBeNull();

        const step5 = container.querySelector('[id="ステップ5ビジネスケース作成の手順"]');
        expect(step5).not.toBeNull();

        const step6 = container.querySelector('[id="ステップ6ステークホルダーに合わせた伝え方"]');
        expect(step6).not.toBeNull();
    });

    it('renders section 4 connections with chapters 1 and 2', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const sec4 = container.querySelector('[id="4-第1章第2章とのつながり"]');
        expect(sec4).not.toBeNull();
        expect(sec4?.textContent).toContain('4. 第1章・第2章とのつながり（🟢）');
    });

    it('matches Category 4 table inventory precisely (5 tables)', () => {
        const { container } = render(<CtalTmChapter3Page />);
        const allTables = collectTableInventory(container);
        const cat4Tables = allTables.slice(14, 19);
        expect(cat4Tables.length).toBe(5);

        EXPECTED_TABLE_SPECS_CAT4.forEach((expected, i) => {
            const actual = cat4Tables[i];
            expect(actual.heading).toBe(expected.heading);
            expect(actual.headers).toEqual(expected.headers as string[]);
            expect(actual.rows).toBe(expected.rows);
            expect(actual.cols).toBe(expected.cols);
            expect(actual.sample).toBe(expected.sample);
        });
    });
});
