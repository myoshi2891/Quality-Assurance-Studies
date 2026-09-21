import { afterAll, afterEach, beforeAll, beforeEach, describe, it, expect, mock } from 'bun:test';
import { render, cleanup, fireEvent } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page, {
    DIAGRAM_CHAPTER_POSITION,
    DIAGRAM_RBT_CYCLE,
    DIAGRAM_RISK_FACTORS,
} from '../../app/istqb-ctal-ta-chapter2-risk-based-testing/page';
import NavBar from '../../app/istqb-ctal-ta-chapter2-risk-based-testing/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
const renderedCharts: string[] = [];

beforeEach(() => {
    renderedCharts.length = 0;
});

beforeAll(() => {
    originalMermaidRender = mermaid.render;
    originalIntersectionObserver = window.IntersectionObserver;
    const mermaidRenderMock = mock(async (_id: string, text: string) => {
        renderedCharts.push(text);
        return {
            svg: '<svg data-testid="mock-mermaid"></svg>',
            diagramType: 'flowchart',
        };
    });
    mermaid.render = mermaidRenderMock as unknown as typeof mermaid.render;

    const mockIntersectionObserver = mock(() => {
        return {
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null,
        };
    });
    window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
    mermaid.render = originalMermaidRender;
    window.IntersectionObserver = originalIntersectionObserver;
});

describe('CTAL-TA v4.0 Chapter 2 - Category 1: Hero & Sections 1-2 (Overview, Intro, NavBar)', () => {
    it('renders hero title, pills, and meta-grid correctly', () => {
        const { container } = render(<Page />);
        const eyebrow = container.querySelector('.eyebrow');
        expect(eyebrow).toBeDefined();
        expect(eyebrow?.textContent).toContain('ISTQB® Certified Tester Advanced Level Test Analyst');

        const h1 = container.querySelector('h1');
        expect(h1).toBeDefined();
        expect(h1?.textContent).toBe('第2章：リスクベースドテストにおけるテストアナリストの役割');

        const heroDesc = container.querySelector('.hero-desc');
        expect(heroDesc?.textContent).toContain('初学者〜中級QAエンジニア向け。図解・具体例・ベストプラクティス付きで、ステップバイステップに解説します。');

        const pills = container.querySelectorAll('.hero-pills .pill');
        expect(pills.length).toBe(5);
        expect(pills[0]?.textContent).toBe('⏱ 学習時間 90分 / 全1215分');
        expect(pills[1]?.textContent).toBe('🎯 学習目標 2件（K2・K4）');
        expect(pills[2]?.textContent).toBe('🖼 Mermaid図解 5点');
        expect(pills[3]?.textContent).toBe('🔗 参考文献 12件');
        expect(pills[4]?.textContent).toBe('🚫 ASCIIアート不使用');

        const metaItems = container.querySelectorAll('.meta-grid .meta-item');
        expect(metaItems.length).toBe(4);
        expect(metaItems[0]?.textContent).toContain('対象範囲');
        expect(metaItems[0]?.textContent).toContain('Chapter 2');
        expect(metaItems[1]?.textContent).toContain('前提資格');
        expect(metaItems[1]?.textContent).toContain('ISTQB® Foundation Level');
        expect(metaItems[2]?.textContent).toContain('想定読者');
        expect(metaItems[2]?.textContent).toContain('ソフトウェアテスト初学者〜中級のQAエンジニア');
        expect(metaItems[3]?.textContent).toContain('本ガイドの立ち位置');
        expect(metaItems[3]?.textContent).toContain('公式シラバスv4.0 PDF');
    });

    it('renders sidebar navigation with all 17 anchor links and handles mobile toggle', () => {
        const { container } = render(<NavBar />);
        const title = container.querySelector('.sidebar-title');
        expect(title?.textContent).toBe('目次');

        const navLinks = container.querySelectorAll('.sidebar a');
        expect(navLinks.length).toBe(17);

        const hrefs = Array.from(navLinks).map((a) => a.getAttribute('href'));
        const expectedHrefs = [
            '#sec1',
            '#sec2',
            '#sec3',
            '#sec3-1',
            '#sec3-2',
            '#sec4',
            '#sec4-1',
            '#sec4-2',
            '#sec4-3',
            '#sec4-4',
            '#sec4-5',
            '#sec5',
            '#sec6',
            '#sec7',
            '#sec8',
            '#sec9',
            '#sec10',
        ];
        expect(hrefs).toEqual(expectedHrefs);

        // Test mobile toggle
        const toggleBtn = container.querySelector('.sidebar-toggle');
        expect(toggleBtn).toBeDefined();
        const sidebar = container.querySelector('.sidebar');
        const overlay = container.querySelector('.sidebar-overlay');

        expect(sidebar?.classList.contains('open')).toBe(false);
        if (toggleBtn) {
            fireEvent.click(toggleBtn);
            expect(sidebar?.classList.contains('open')).toBe(true);
            expect(overlay?.classList.contains('open')).toBe(true);

            if (overlay) {
                fireEvent.click(overlay);
                expect(sidebar?.classList.contains('open')).toBe(false);
                expect(overlay?.classList.contains('open')).toBe(false);
            }
        }
    });

    it('renders Section 1: Guide overview, tables, LO, and keywords', () => {
        const { container } = render(<Page />);
        const sec1 = container.querySelector('#sec1');
        expect(sec1).toBeDefined();

        const h2 = sec1?.querySelector('h2');
        expect(h2?.textContent).toBe('1. このガイドの使い方と第2章の全体像');

        // Check diagrams
        expect(DIAGRAM_CHAPTER_POSITION).toBeDefined();
        expect(DIAGRAM_CHAPTER_POSITION).toContain('flowchart LR');
        expect(DIAGRAM_CHAPTER_POSITION).toContain('第2章');

        // Check H3s
        const h3s = Array.from(sec1?.querySelectorAll('h3') || []).map((h) => h.textContent);
        expect(h3s).toContain('1.1 CTAL-TA試験全体における第2章の位置づけ');
        expect(h3s).toContain('1.2 学習目標（Learning Objectives）とコグニティブレベル（K-Level）');
        expect(h3s).toContain('1.3 覚えるべきキーワード（K1）');

        // Check 4 Tables in Section 1
        const tables = sec1?.querySelectorAll('table');
        expect(tables?.length).toBe(4);

        // Table 1: 他章とのつながり (4 rows)
        const t1Rows = tables?.[0]?.querySelectorAll('tbody tr');
        expect(t1Rows?.length).toBe(4);
        expect(t1Rows?.[0]?.textContent).toContain('第1章');

        // Table 2: K-Level (4 rows)
        const t2Rows = tables?.[1]?.querySelectorAll('tbody tr');
        expect(t2Rows?.length).toBe(4);
        expect(t2Rows?.[0]?.textContent).toContain('K1');
        expect(t2Rows?.[3]?.textContent).toContain('K4');

        // Table 3: 学習目標 (2 rows: TA-2.1.1, TA-2.2.1)
        const t3Rows = tables?.[2]?.querySelectorAll('tbody tr');
        expect(t3Rows?.length).toBe(2);
        expect(t3Rows?.[0]?.textContent).toContain('TA-2.1.1');
        expect(t3Rows?.[1]?.textContent).toContain('TA-2.2.1');

        // Tip Callout
        const tip = sec1?.querySelector('.tip');
        expect(tip?.textContent).toContain('TA-2.2.1がK4であることから');

        // Table 4: キーワード (11 rows)
        const t4Rows = tables?.[3]?.querySelectorAll('tbody tr');
        expect(t4Rows?.length).toBe(11);
        expect(t4Rows?.[0]?.textContent).toContain('product risk（プロダクトリスク）');
        expect(t4Rows?.[10]?.textContent).toContain('impact analysis（インパクト分析）');
    });

    it('renders Section 2: Introduction, RBT 3 pillars, TM/TA roles, and scenario', () => {
        const { container } = render(<Page />);
        const sec2 = container.querySelector('#sec2');
        expect(sec2).toBeDefined();

        const h2 = sec2?.querySelector('h2');
        expect(h2?.textContent).toBe('2. イントロダクション：リスクベースドテストとは何か');

        const h3s = Array.from(sec2?.querySelectorAll('h3') || []).map((h) => h.textContent);
        expect(h3s).toContain('2.1 定義と基本的な考え方');
        expect(h3s).toContain('2.2 テストマネージャとテストアナリストの役割分担');
        expect(h3s).toContain('2.3 リスクベースドテストの3本柱：分析・コントロール・モニタリングのサイクル');
        expect(h3s).toContain('2.4 本ガイドで使う統一シナリオ');

        // Table 5: TM vs TA roles (2 rows)
        const tables = sec2?.querySelectorAll('table');
        expect(tables?.length).toBe(1);
        const t5Rows = tables?.[0]?.querySelectorAll('tbody tr');
        expect(t5Rows?.length).toBe(2);
        expect(t5Rows?.[0]?.textContent).toContain('テストマネージャ（TM）');
        expect(t5Rows?.[1]?.textContent).toContain('テストアナリスト（TA）');

        // Diagram 2: RBT Cycle
        expect(DIAGRAM_RBT_CYCLE).toBeDefined();
        expect(DIAGRAM_RBT_CYCLE).toContain('flowchart LR');
        expect(DIAGRAM_RBT_CYCLE).toContain('2.1 リスク分析 Risk Analysis');
        expect(DIAGRAM_RBT_CYCLE).toContain('2.2 リスクコントロール Risk Control');

        // Scenario Callout
        const scenario = sec2?.querySelector('.scenario');
        expect(scenario?.textContent).toContain('シナリオ：');
        expect(scenario?.textContent).toContain('あなたはECサイトのカート・決済機能を担当するテストアナリストです');
        expect(scenario?.textContent).toContain('割引金額の自動計算ロジック');
    });

    it('renders Section 3: Risk Analysis (Identification & Assessment)', () => {
        const { container } = render(<Page />);
        const sec3 = container.querySelector('#sec3');
        expect(sec3).toBeDefined();

        const h2 = sec3?.querySelector('h2');
        expect(h2?.textContent).toContain('3. 2.1 リスク分析（Risk Analysis）');
        expect(h2?.querySelector('.klevel.k2')?.textContent).toBe('K2');

        const loBox = sec3?.querySelector('.lo-box');
        expect(loBox?.textContent).toContain('TA-2.1.1 (K2)');
        expect(loBox?.textContent).toContain('テストアナリストのプロダクトリスク分析への貢献を要約できる');

        const h3s = Array.from(sec3?.querySelectorAll('h3') || []).map((h) => h.textContent);
        expect(h3s).toContain('3.1 リスク識別（Risk Identification）');
        expect(h3s).toContain('3.2 リスクアセスメント（Risk Assessment）');

        // Check 4 Tables in Section 3
        const tables = sec3?.querySelectorAll('table');
        expect(tables?.length).toBe(4);

        // Table 6: TA contribution activities (5 rows)
        const t6Rows = tables?.[0]?.querySelectorAll('tbody tr');
        expect(t6Rows?.length).toBe(5);
        expect(t6Rows?.[0]?.textContent).toContain('レトロスペクティブ');
        expect(t6Rows?.[4]?.textContent).toContain('ステークホルダーへのインタビュー');

        // Table 7: 5 Risk factors (5 rows)
        const t7Rows = tables?.[1]?.querySelectorAll('tbody tr');
        expect(t7Rows?.length).toBe(5);
        expect(t7Rows?.[0]?.textContent).toContain('機能の使用頻度・重要度');
        expect(t7Rows?.[4]?.textContent).toContain('法的・安全上の要求');

        // Diagram 3: Risk Factors to Test Activities
        expect(DIAGRAM_RISK_FACTORS).toBeDefined();
        expect(DIAGRAM_RISK_FACTORS).toContain('flowchart TD');
        expect(DIAGRAM_RISK_FACTORS).toContain('リスクレベルを判定');
        expect(DIAGRAM_RISK_FACTORS).toContain('高リスク');
        expect(DIAGRAM_RISK_FACTORS).toContain('中リスク');
        expect(DIAGRAM_RISK_FACTORS).toContain('低リスク');

        // Table 8: Risk ID R-01 to R-03 level determination (3 rows)
        const t8Rows = tables?.[2]?.querySelectorAll('tbody tr');
        expect(t8Rows?.length).toBe(3);
        expect(t8Rows?.[0]?.textContent).toContain('R-01');
        expect(t8Rows?.[0]?.querySelector('.risk-high')?.textContent).toBe('高');
        expect(t8Rows?.[1]?.textContent).toContain('R-02');
        expect(t8Rows?.[1]?.querySelector('.risk-mid')?.textContent).toBe('中');
        expect(t8Rows?.[2]?.textContent).toContain('R-03');
        expect(t8Rows?.[2]?.querySelector('.risk-low')?.textContent).toBe('低');

        // Table 9: Risk ID to Proposed test activities (3 rows)
        const t9Rows = tables?.[3]?.querySelectorAll('tbody tr');
        expect(t9Rows?.length).toBe(3);
        expect(t9Rows?.[0]?.textContent).toContain('決定テーブル');
        expect(t9Rows?.[1]?.textContent).toContain('シナリオベーステスト');
        expect(t9Rows?.[2]?.textContent).toContain('探索的テスト');

        // Practices (2 callouts in Section 3)
        const practices = sec3?.querySelectorAll('.callout-practice');
        expect(practices?.length).toBe(2);
        expect(practices?.[0]?.textContent).toContain('受け身にならず、自ら発言する');
        expect(practices?.[1]?.textContent).toContain('リスクを均一に扱わない');
    });
});
