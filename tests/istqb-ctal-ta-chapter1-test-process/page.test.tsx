import { afterAll, afterEach, beforeAll, beforeEach, describe, it, expect, mock } from 'bun:test';
import { render, cleanup, fireEvent } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page, {
    DIAGRAM_OVERVIEW,
    DIAGRAM_SDLC,
    DIAGRAM_PROCESS,
    DIAGRAM_ENTRY,
    DIAGRAM_ANALYSIS_FLOW,
    DIAGRAM_ENV3,
    DIAGRAM_HLLL,
    DIAGRAM_ENVREQ,
    DIAGRAM_ORACLE,
    DIAGRAM_KEYWORD,
    DIAGRAM_TOOLS,
} from '../../app/istqb-ctal-ta-chapter1-test-process/page';
import NavBar from '../../app/istqb-ctal-ta-chapter1-test-process/NavBar';

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

describe('CTAL-TA v4.0 Chapter 1 - Category 1: Hero & Section 0 (Overview, Keywords, LO)', () => {
    it('renders hero title and meta chips correctly', () => {
        const { container } = render(<Page />);
        const kicker = container.querySelector('.kicker');
        expect(kicker).toBeDefined();
        expect(kicker?.textContent).toContain('ISTQB® Certified Tester Advanced Level Test Analyst (CTAL-TA) v4.0');

        const h1 = container.querySelector('h1');
        expect(h1).toBeDefined();
        expect(h1?.textContent).toContain('第1章:テストプロセスにおけるテストアナリストのタスク');
        expect(h1?.textContent).toContain('The Tasks of the Test Analyst in the Test Process');

        const subtitle = container.querySelector('.subtitle');
        expect(subtitle).toBeDefined();
        expect(subtitle?.textContent).toContain('初学者向け完全ガイド');

        const pills = container.querySelectorAll('.pill-row .pill');
        expect(pills.length).toBe(4);
        expect(pills[0]?.textContent).toBe('配点時間 225分 / 全1215分');
        expect(pills[1]?.textContent).toBe('前提: ISTQB Foundation Level');
        expect(pills[2]?.textContent).toBe('図解11点(Mermaid)');
        expect(pills[3]?.textContent).toBe('出典明記');
    });

    it('renders sidebar navigation with all anchor links and mobile toggle', () => {
        const { container } = render(<NavBar />);
        const brand = container.querySelector('.sidebar-brand');
        expect(brand?.textContent).toContain('ISTQB® CTAL-TA v4.0');

        const sub = container.querySelector('.sidebar-sub');
        expect(sub?.textContent).toContain('第1章:テストプロセスにおける');

        const navLinks = container.querySelectorAll('.sidebar a');
        expect(navLinks.length).toBeGreaterThanOrEqual(16);

        const hrefs = Array.from(navLinks).map((a) => a.getAttribute('href'));
        expect(hrefs).toContain('#overview');
        expect(hrefs).toContain('#keywords');
        expect(hrefs).toContain('#lo');
        expect(hrefs).toContain('#sec11');
        expect(hrefs).toContain('#sec12');
        expect(hrefs).toContain('#sec13');
        expect(hrefs).toContain('#checklist');
        expect(hrefs).toContain('#references');
    });

    it('renders Section 0: overview, Mermaid mmd-overview, keywords, LO table, and callouts', () => {
        const { container } = render(<Page />);
        const overviewSec = container.querySelector('#overview');
        expect(overviewSec).toBeDefined();

        const h2 = overviewSec?.querySelector('h2');
        expect(h2?.textContent).toBe('0. この章の全体像');

        // Mermaid mmd-overview diagram definition and rendering
        expect(DIAGRAM_OVERVIEW).toBeDefined();
        expect(DIAGRAM_OVERVIEW).toContain('flowchart LR');
        expect(DIAGRAM_OVERVIEW).toContain('1.1 SDLCにおけるテスト');
        expect(DIAGRAM_OVERVIEW).toContain('1.2 テスト活動への関与');
        expect(DIAGRAM_OVERVIEW).toContain('1.3 成果物に関するタスク');

        // Keywords
        const keywordsH3 = container.querySelector('#keywords');
        expect(keywordsH3?.textContent).toContain('0.1 キーワード');

        // LO Table
        const loH3 = container.querySelector('#lo');
        expect(loH3?.textContent).toContain('0.2 学習目標(Learning Objectives)と認知レベル');

        const loTable = overviewSec?.querySelector('table');
        expect(loTable).toBeDefined();
        const loRows = loTable?.querySelectorAll('tbody tr');
        expect(loRows?.length).toBe(12);

        // Verify first and K3 LO items
        expect(loRows?.[0]?.textContent).toContain('TA-1.1.1');
        expect(loRows?.[0]?.textContent).toContain('K2');
        expect(loRows?.[10]?.textContent).toContain('TA-1.3.6');
        expect(loRows?.[10]?.textContent).toContain('K3');

        // Callouts in Section 0
        const calloutSource = overviewSec?.querySelector('.callout-source');
        expect(calloutSource?.textContent).toContain('ISTQB® CTAL-TA Syllabus v4.0, Section 1');

        const calloutPractice = overviewSec?.querySelector('.callout-practice');
        expect(calloutPractice?.textContent).toContain('ベストプラクティス');
        expect(calloutPractice?.textContent).toContain('ISTQB® Glossary');
    });
});

describe('CTAL-TA v4.0 Chapter 1 - Category 2: Section 1.1 (SDLC) & Section 1.2 (Test Activities)', () => {
    it('renders Section 1.1: SDLC models, Mermaid mmd-sdlc, comparison table, and callouts', () => {
        const { container } = render(<Page />);
        const sec11 = container.querySelector('#sec11');
        expect(sec11).toBeDefined();

        const h2 = sec11?.querySelector('h2');
        expect(h2?.textContent).toContain('1.1 ソフトウェア開発ライフサイクル(SDLC)におけるテスト');
        expect(h2?.querySelector('.badge-k')?.textContent).toBe('K2');

        // Mermaid mmd-sdlc
        expect(DIAGRAM_SDLC).toBeDefined();
        expect(DIAGRAM_SDLC).toContain('flowchart TB');
        expect(DIAGRAM_SDLC).toContain('順次開発モデル(ウォーターフォール型)');
        expect(DIAGRAM_SDLC).toContain('インクリメンタル開発モデル');
        expect(DIAGRAM_SDLC).toContain('イテレーティブ開発モデル');

        // Table
        const table = sec11?.querySelector('table');
        expect(table).toBeDefined();
        const rows = table?.querySelectorAll('tbody tr');
        expect(rows?.length).toBe(3);
        expect(rows?.[0]?.textContent).toContain('順次(ウォーターフォール型)');
        expect(rows?.[1]?.textContent).toContain('インクリメンタル');
        expect(rows?.[2]?.textContent).toContain('イテレーティブ');

        // Callouts (practice & anti)
        const practice = sec11?.querySelector('.callout-practice');
        expect(practice?.textContent).toContain('SDLCの初期段階から関与する');
        const anti = sec11?.querySelector('.callout-anti');
        expect(anti?.textContent).toContain('テストは実装が終わってから');
    });

    it('renders Section 1.2: process Mermaid, 1.2.1-1.2.4 subsections, tables, and callouts', () => {
        const { container } = render(<Page />);
        const sec12 = container.querySelector('#sec12');
        expect(sec12).toBeDefined();

        const h2 = sec12?.querySelector('h2');
        expect(h2?.textContent).toContain('1.2 テスト活動への関与');

        // Mermaid mmd-process
        expect(DIAGRAM_PROCESS).toBeDefined();
        expect(DIAGRAM_PROCESS).toContain('flowchart LR');
        expect(DIAGRAM_PROCESS).toContain('テスト分析');
        expect(DIAGRAM_PROCESS).toContain('テスト設計');
        expect(DIAGRAM_PROCESS).toContain('テスト実装');
        expect(DIAGRAM_PROCESS).toContain('テスト実行');

        // 1.2.1 Test Analysis
        const sec121 = container.querySelector('#sec121');
        expect(sec121?.textContent).toContain('1.2.1 テスト分析');
        expect(DIAGRAM_ENTRY).toBeDefined();
        expect(DIAGRAM_ENTRY).toContain('テスト分析のエントリ基準');
        expect(DIAGRAM_ANALYSIS_FLOW).toBeDefined();
        expect(DIAGRAM_ANALYSIS_FLOW).toContain('テストベースを評価し');

        // 1.2.2 Test Design
        const sec122 = container.querySelector('#sec122');
        expect(sec122?.textContent).toContain('1.2.2 テスト設計');

        // 1.2.3 Test Implementation
        const sec123 = container.querySelector('#sec123');
        expect(sec123?.textContent).toContain('1.2.3 テスト実装');
        expect(DIAGRAM_ENV3).toBeDefined();
        expect(DIAGRAM_ENV3).toContain('テスト対象の欠陥を');
        expect(DIAGRAM_ENV3).toContain('障害が無いときは');
        expect(DIAGRAM_ENV3).toContain('十分に模倣する');

        // 1.2.4 Test Execution
        const sec124 = container.querySelector('#sec124');
        expect(sec124?.textContent).toContain('1.2.4 テスト実行');
        const execTable = sec12?.querySelectorAll('table');
        expect(execTable?.length).toBe(2);
        const execRows = execTable?.[1]?.querySelectorAll('tbody tr');
        expect(execRows?.length).toBe(6);
        expect(execRows?.[0]?.textContent).toContain('欠陥クラスタの認識');
        expect(execRows?.[1]?.textContent).toContain('失敗した自動テストの手動再実行');
    });
});

describe('CTAL-TA v4.0 Chapter 1 - Category 3: Section 1.3 (Work Products Tasks 1.3.1 - 1.3.7)', () => {
    it('renders Section 1.3: high/low test cases, quality criteria, environment, oracle, data, keywords, tools', () => {
        const { container } = render(<Page />);
        const sec13 = container.querySelector('#sec13');
        expect(sec13).toBeDefined();

        const h2 = sec13?.querySelector('h2');
        expect(h2?.textContent).toContain('1.3 成果物(work products)に関するタスク');
        expect(h2?.textContent).toContain('K2 / K3');

        // 1.3.1 High/Low level test cases
        const sec131 = container.querySelector('#sec131');
        expect(sec131?.textContent).toContain('1.3.1 ハイレベルテストケースとローレベルテストケース');
        expect(DIAGRAM_HLLL).toBeDefined();
        expect(DIAGRAM_HLLL).toContain('ハイレベルテストケース');
        expect(DIAGRAM_HLLL).toContain('ローレベル①');

        // 1.3.2 Quality criteria
        const sec132 = container.querySelector('#sec132');
        expect(sec132?.textContent).toContain('1.3.2 テストケースの品質基準');

        // 1.3.3 Environment requirements
        const sec133 = container.querySelector('#sec133');
        expect(sec133?.textContent).toContain('1.3.3 テスト環境要件');
        expect(DIAGRAM_ENVREQ).toBeDefined();
        expect(DIAGRAM_ENVREQ).toContain('テスト条件・テストケース・');

        // 1.3.4 Test oracle
        const sec134 = container.querySelector('#sec134');
        expect(sec134?.textContent).toContain('1.3.4 テストオラクルの決定');
        expect(DIAGRAM_ORACLE).toBeDefined();
        expect(DIAGRAM_ORACLE).toContain('テストオラクル問題');

        // 1.3.5 Test data
        const sec135 = container.querySelector('#sec135');
        expect(sec135?.textContent).toContain('1.3.5 テストデータ要件');

        // 1.3.6 Keyword-driven testing
        const sec136 = container.querySelector('#sec136');
        expect(sec136?.textContent).toContain('1.3.6 キーワード駆動テストによるテストスクリプト開発');
        expect(sec136?.querySelector('.badge-k')?.textContent).toBe('K3');
        expect(DIAGRAM_KEYWORD).toBeDefined();
        expect(DIAGRAM_KEYWORD).toContain('ドメイン層キーワード');
        expect(DIAGRAM_KEYWORD).toContain('テストインタフェース層キーワード');

        // Inline code ClickButton3 anti-pattern
        const codeSnippet = sec13?.querySelector('code');
        expect(codeSnippet?.textContent).toBe('ClickButton3');

        // 1.3.7 Management tools
        const sec137 = container.querySelector('#sec137');
        expect(sec137?.textContent).toContain('1.3.7 テストウェア管理に使うツール');
        expect(DIAGRAM_TOOLS).toBeDefined();
        expect(DIAGRAM_TOOLS).toContain('テスト管理ツール');
        expect(DIAGRAM_TOOLS).toContain('欠陥管理ツール');
        expect(DIAGRAM_TOOLS).toContain('要件管理ツール');

        // Verify total tables in Section 1.3 (7 tables)
        const tables = sec13?.querySelectorAll('table');
        expect(tables?.length).toBe(7);

        // Quality criteria table (9 criteria)
        const qcRows = tables?.[1]?.querySelectorAll('tbody tr');
        expect(qcRows?.length).toBe(9);
        expect(qcRows?.[0]?.textContent).toContain('正確性 (Correctness)');
        expect(qcRows?.[8]?.textContent).toContain('簡潔性 (Conciseness)');

        // Env 5 attributes table
        const envRows = tables?.[2]?.querySelectorAll('tbody tr');
        expect(envRows?.length).toBe(5);

        // Oracle 5 solutions table
        const oracleRows = tables?.[3]?.querySelectorAll('tbody tr');
        expect(oracleRows?.length).toBe(5);

        // Test data 10 considerations table
        const dataRows = tables?.[4]?.querySelectorAll('tbody tr');
        expect(dataRows?.length).toBe(10);

        // Keyword 2 classifications table
        const kwTypeRows = tables?.[5]?.querySelectorAll('tbody tr');
        expect(kwTypeRows?.length).toBe(2);

        // Keyword 6 conditions table
        const kwCondRows = tables?.[6]?.querySelectorAll('tbody tr');
        expect(kwCondRows?.length).toBe(6);
    });
});

describe('CTAL-TA v4.0 Chapter 1 - Category 4: Checklist and References', () => {
    it('renders Checklist with 11 items and updates count on click', () => {
        const { container } = render(<Page />);
        const checklistSec = container.querySelector('#checklist');
        expect(checklistSec).toBeDefined();

        const countSpan = checklistSec?.querySelector('#checklistCount');
        expect(countSpan?.textContent).toBe('0 / 11 完了');

        const checkboxes = checklistSec?.querySelectorAll('input[type="checkbox"]');
        expect(checkboxes?.length).toBe(11);

        // Click first checkbox
        const firstCheckbox = checkboxes?.[0] as HTMLInputElement;
        expect(firstCheckbox.checked).toBe(false);
        fireEvent.click(firstCheckbox);
        expect(firstCheckbox.checked).toBe(true);
        expect(countSpan?.textContent).toBe('1 / 11 完了');

        // Click second checkbox
        const secondCheckbox = checkboxes?.[1] as HTMLInputElement;
        fireEvent.click(secondCheckbox);
        expect(countSpan?.textContent).toBe('2 / 11 完了');

        // Unclick first checkbox
        fireEvent.click(firstCheckbox);
        expect(countSpan?.textContent).toBe('1 / 11 完了');
    });

    it('renders References section: 4 official primary sources, 4 standards, and footer note', () => {
        const { container } = render(<Page />);
        const refSec = container.querySelector('#references');
        expect(refSec).toBeDefined();

        // 4 primary source cards
        const refCards = refSec?.querySelectorAll('.ref-card');
        expect(refCards?.length).toBe(4);
        expect(refCards?.[0]?.textContent).toContain('公式試験ページ');
        expect(refCards?.[1]?.textContent).toContain('シラバス本体');
        expect(refCards?.[2]?.textContent).toContain('用語集');
        expect(refCards?.[3]?.textContent).toContain('よくある質問');

        // Standards table
        const stdTable = refSec?.querySelector('table');
        expect(stdTable).toBeDefined();
        const stdRows = stdTable?.querySelectorAll('tbody tr');
        expect(stdRows?.length).toBe(4);
        expect(stdRows?.[0]?.textContent).toContain('ISO/IEC/IEEE 29119-3:2021');
        expect(stdRows?.[1]?.textContent).toContain('ISTQB® Foundation Level Syllabus v4.0.1');
        expect(stdRows?.[2]?.textContent).toContain('GDPR');
        expect(stdRows?.[3]?.textContent).toContain('HIPAA');

        // Footer note
        const footerNote = refSec?.querySelector('.footer-note');
        expect(footerNote?.textContent).toContain('免責事項:');
        expect(footerNote?.textContent).toContain('International Software Testing Qualifications Board');
    });
});

