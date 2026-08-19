import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/istqb-ctfl-at-chapter3-agile-testing-techniques-tools/page';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;

beforeAll(() => {
    originalMermaidRender = mermaid.render;
    originalIntersectionObserver = window.IntersectionObserver;
    mermaid.render = mock(async () => {
        return {
            svg: '<svg data-testid="mock-mermaid"></svg>',
            diagramType: 'flowchart',
        };
    }) as unknown as typeof mermaid.render;

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

describe('CTFL-AT Chapter 3: Agile Testing Techniques and Tools Guide Page', () => {
    it('renders the main heading, eyebrow, subtitle and metadata pills', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        // Eyebrow and H1
        expect(screen.getByText(/ISTQB® CTFL-AT SYLLABUS/i)).toBeDefined();
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1).toBeDefined();
        expect(h1.textContent).toContain('アジャイルテスト技法とツール');
        expect(screen.getByText(/TDD・ATDD・BDDからテスティングクアドラント、探索的テスト、CI\/CDツールチェーンまで/i)).toBeDefined();

        // Hero metadata
        expect(screen.getAllByText(/Foundation Level Agile Tester/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Mermaid/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/ステップバイステップ/i).length).toBeGreaterThan(0);
    });

    it('renders all main sections with expected headings and IDs', async () => {
        const { container } = render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        const expectedSections = [
            { id: '0-chapter-3', title: '0. Chapter 3 の全体マップ' },
            { id: '31-tddatddbdd', title: '3.1 アジャイルテスト手法(TDD・ATDD・BDD)' },
            { id: '32', title: '3.2 品質リスクの評価とテスト工数の見積り' },
            { id: '33', title: '3.3 アジャイルプロジェクトにおける技法' },
            { id: '34', title: '3.4 アジャイルにおけるツール' },
            { id: '4-chapter-3', title: '4. Chapter 3 全体の振り返り' },
            { id: '5-k-', title: '5. 学習チェックリスト(K-レベル別)' },
            { id: '6', title: '6. 実践演習(サンプル問題)' },
            { id: '7-url', title: '7. 参考文献・URL一覧(節ごとの一次情報源)' },
            { id: '8', title: '8. 次のステップ' },
        ];

        expectedSections.forEach(({ id, title }) => {
            const el = container.querySelector(`[id="${id}"]`);
            expect(el).not.toBeNull();
            expect(el?.textContent).toContain(title);
        });
    });

    it('renders all subsections with corresponding IDs and titles', async () => {
        const { container } = render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        const expectedSubsections = [
            { id: '310-3', title: '3.1.0 なぜ3つも「駆動開発」があるのか' },
            { id: '311-test-driven-development-tdd', title: '3.1.1 Test-Driven Development (TDD)' },
            { id: '312-acceptance-test-driven-development-atdd', title: '3.1.2 Acceptance Test-Driven Development (ATDD)' },
            { id: '313-behavior-driven-development-bdd', title: '3.1.3 Behavior-Driven Development (BDD)' },
            { id: '314-tddatddbdd1', title: '3.1.4 TDD・ATDD・BDDの関係性を1枚で理解する' },
            { id: '321', title: '3.2.1 アジャイルプロジェクトにおける品質リスク評価' },
            { id: '322', title: '3.2.2 内容とリスクに基づくテスト工数の見積り' },
            { id: '331-testing-quadrants', title: '3.3.1 テスティング・クアドラント(Testing Quadrants)' },
            { id: '332', title: '3.3.2 非機能テストと技術的負債の考慮' },
            { id: '333', title: '3.3.3 リグレッションテストとテスト自動化ピラミッド' },
            { id: '334-exploratory-testing', title: '3.3.4 探索的テスト(Exploratory Testing)' },
            { id: '341-task-management-and-tracking-tools', title: '3.4.1 タスク管理・追跡ツール' },
            { id: '342-communication-and-information-sharing-tools', title: '3.4.2 コミュニケーション・情報共有ツール' },
            { id: '343-software-build-and-distribution-tools', title: '3.4.3 ソフトウェアビルド・配布ツール' },
            { id: '344-configuration-management-tools', title: '3.4.4 構成管理ツール' },
            { id: '345-test-design-implementation-and-execution-tools', title: '3.4.5 テスト設計・実装・実行ツール' },
            { id: '346-cloud-computing-and-virtualization-tools', title: '3.4.6 クラウドコンピューティング・仮想化ツール' },
        ];

        expectedSubsections.forEach(({ id, title }) => {
            const el = container.querySelector(`[id="${id}"]`);
            expect(el).not.toBeNull();
            expect(el?.textContent).toContain(title);
        });
    });

    it('renders all 19 Mermaid diagrams across the page', async () => {
        render(<Page />);
        const diagrams = await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        expect(diagrams).toHaveLength(19);
    });

    it('renders the sidebar navigation with scrollspy links and toggle', () => {
        const { container } = render(<Page />);
        const nav = container.querySelector('nav.sidebar');
        expect(nav).not.toBeNull();
        expect(nav?.getAttribute('aria-label')).toBe('目次');

        const brand = container.querySelector('.sidebar__brand');
        expect(brand?.textContent).toContain('CTFL-AT');
        expect(brand?.textContent).toContain('Chapter 3');

        // Check main TOC links
        const tocLinks = container.querySelectorAll('.toc a');
        expect(tocLinks.length).toBeGreaterThanOrEqual(27);
    });

    it('renders the learning checklist and sample practice questions', () => {
        const { container } = render(<Page />);
        const checklistSection = container.querySelector('[id="5-k-"]');
        expect(checklistSection).not.toBeNull();

        const practiceSection = container.querySelector('[id="6"]');
        expect(practiceSection).not.toBeNull();
        expect(container.textContent).toContain('Q1.');
        expect(container.textContent).toContain('Q2.');
        expect(container.textContent).toContain('Q3.');
        expect(container.textContent).toContain('Q4.');
    });

    it('renders the references table with primary sources', () => {
        const { container } = render(<Page />);
        const refSection = container.querySelector('[id="7-url"]');
        expect(refSection).not.toBeNull();
        expect(container.textContent).toContain('Agile Alliance');
        expect(container.textContent).toContain('Martin Fowler');
        expect(container.textContent).toContain('Playwright vs Cypress vs Selenium');
    });
});
