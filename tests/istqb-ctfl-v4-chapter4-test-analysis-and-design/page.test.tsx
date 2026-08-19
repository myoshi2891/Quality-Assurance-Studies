import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/istqb-ctfl-v4-chapter4-test-analysis-and-design/page';

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

describe('CTFL v4.0 Chapter 4: Test Analysis and Design Guide Page', () => {
    it('renders the main heading, eyebrow, subtitle and metadata pills', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        // Eyebrow and H1
        expect(screen.getByText(/ISTQB® Certified Tester Foundation Level v4.0.1/i)).toBeDefined();
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1).toBeDefined();
        expect(h1.textContent).toContain('第4章：テスト分析・設計');
        expect(screen.getByText(/Chapter 4 — Test Analysis and Design/i)).toBeDefined();

        // Hero metadata
        expect(screen.getAllByText(/390分/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Syllabus v4.0.1/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/K1 \/ K2 \/ K3/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/9技法 \+ 3アプローチ/i).length).toBeGreaterThan(0);
    });

    it('renders all main sections with expected headings and IDs', async () => {
        const { container } = render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        const expectedSections = [
            { id: 'sec-0', title: '0. 本章の位置づけと学習目標' },
            { id: 'sec-1', title: 'テスト技法の全体像（Test Techniques Overview）' },
            { id: 'sec-2', title: 'ブラックボックステスト技法（Black-box Test Techniques）' },
            { id: 'sec-3', title: 'ホワイトボックステスト技法（White-box Test Techniques）' },
            { id: 'sec-4', title: '経験ベースのテスト技法（Experience-based Test Techniques）' },
            { id: 'sec-5', title: 'コラボレーションベースのテストアプローチ（Collaboration-based Test Approaches）' },
            { id: 'sec-6', title: '6. 技法選択の指針：どの技法をいつ使うか' },
            { id: 'sec-7', title: '7. 試験対策のポイント' },
            { id: 'sec-8', title: '8. まとめ' },
            { id: 'sec-refs', title: '参考文献・引用元URL一覧' },
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
            { id: 'sec-2-1', title: '同値分割法（Equivalence Partitioning, EP）' },
            { id: 'sec-2-2', title: '境界値分析（Boundary Value Analysis, BVA）' },
            { id: 'sec-2-3', title: 'デシジョンテーブルテスト（Decision Table Testing）' },
            { id: 'sec-2-4', title: '状態遷移テスト（State Transition Testing）' },
            { id: 'sec-3-1', title: 'ステートメントテストとステートメントカバレッジ' },
            { id: 'sec-3-2', title: '分岐テストと分岐カバレッジ' },
            { id: 'sec-3-3', title: 'ホワイトボックステストの価値' },
            { id: 'sec-4-1', title: 'エラー推測（Error Guessing）' },
            { id: 'sec-4-2', title: '探索的テスト（Exploratory Testing）' },
            { id: 'sec-4-3', title: 'チェックリストベースドテスト（Checklist-based Testing）' },
            { id: 'sec-5-1', title: 'ユーザーストーリーの共同作成（Collaborative User Story Writing）' },
            { id: 'sec-5-2', title: '受け入れ基準（Acceptance Criteria）' },
            { id: 'sec-5-3', title: '受け入れテスト駆動開発（Acceptance Test-Driven Development, ATDD）' },
        ];

        expectedSubsections.forEach(({ id, title }) => {
            const el = container.querySelector(`[id="${id}"]`);
            expect(el).not.toBeNull();
            expect(el?.textContent).toContain(title);
        });
    });

    it('renders all 7 Mermaid diagrams across the page', async () => {
        render(<Page />);
        const diagrams = await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        expect(diagrams).toHaveLength(7);
    });

    it('renders the sidebar navigation with links and brand title', () => {
        const { container } = render(<Page />);
        const nav = container.querySelector('nav.sidebar');
        expect(nav).not.toBeNull();
        expect(nav?.getAttribute('aria-label')).toBe('目次');

        const brandTitle = container.querySelector('.brand-title');
        expect(brandTitle?.textContent).toContain('第4章');
        expect(brandTitle?.textContent).toContain('テスト分析・設計');

        // Check TOC links
        const tocLinks = container.querySelectorAll('.sidebar a.nav-link');
        expect(tocLinks.length).toBeGreaterThanOrEqual(20);
    });

    it('renders key testing elements such as coverage bars, tables and keyword chips', () => {
        const { container } = render(<Page />);
        
        // Coverage bars
        const coverageBlocks = container.querySelectorAll('.coverage-block');
        expect(coverageBlocks.length).toBeGreaterThan(0);

        // Tables (LOs, EP, BVA, Decision Table, State Table, 3Cs, Acceptance Criteria, Summary)
        const tables = container.querySelectorAll('table');
        expect(tables.length).toBeGreaterThanOrEqual(8);

        // Keyword chips
        const keywordChips = container.querySelectorAll('.keyword-chip');
        expect(keywordChips.length).toBeGreaterThan(0);
    });

    it('renders references section with primary sources', () => {
        const { container } = render(<Page />);
        const refSection = container.querySelector('[id="sec-refs"]');
        expect(refSection).not.toBeNull();
        expect(container.textContent).toContain('ISTQB CTFL Syllabus v4.0.1');
        expect(container.textContent).toContain('ISO/IEC/IEEE 29119-4');
    });
});
