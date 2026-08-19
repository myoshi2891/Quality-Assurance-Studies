import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/istqb-ctfl-v4-chapter5-test-management/page';

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

describe('CTFL v4.0 Chapter 5: Test Management Guide Page', () => {
    it('renders the main heading, kicker, and metadata box', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        // Kicker and H1
        expect(screen.getByText(/ISTQB® Certified Tester Foundation Level \(CTFL\) v4.0.1/i)).toBeDefined();
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1).toBeDefined();
        expect(h1.textContent).toContain('Chapter 5: テスト活動の管理');
        expect(screen.getByText(/Managing the Test Activities/i)).toBeDefined();

        // Meta box
        expect(screen.getByText(/中級〜上級のテストエンジニア・テストマネージャー志望者/i)).toBeDefined();
        expect(screen.getByText(/335分/i)).toBeDefined();
    });

    it('renders all main sections with expected headings and IDs', async () => {
        const { container } = render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        const expectedSections = [
            { id: 'sec-0', title: '0. この章の位置づけ' },
            { id: 'sec-1', title: '1. テスト計画' },
            { id: 'sec-2', title: '2. リスクマネジメント' },
            { id: 'sec-3', title: '3. テストモニタリング、テストコントロール、およびテスト完了' },
            { id: 'sec-4', title: '4. 構成管理' },
            { id: 'sec-5', title: '5. 欠陥管理' },
            { id: 'sec-6', title: '6. 重要用語とチェックリスト' },
            { id: 'sec-7', title: '7. 参考文献・参照URL' },
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
            { id: 'sec-1-1', title: 'テスト計画の目的と内容' },
            { id: 'sec-1-2', title: 'テスト計画へのステークホルダーの貢献' },
            { id: 'sec-1-3', title: 'エントリー基準と終了基準' },
            { id: 'sec-1-4', title: 'テスト見積り技法' },
            { id: 'sec-1-5', title: 'テストケースの優先順位付け' },
            { id: 'sec-1-6', title: 'テストピラミッド' },
            { id: 'sec-1-7', title: 'テスト象限' },
            { id: 'sec-2-1', title: 'リスクの定義と属性' },
            { id: 'sec-2-2', title: 'プロジェクトリスクとプロダクトリスク' },
            { id: 'sec-2-3', title: 'プロダクトリスク分析' },
            { id: 'sec-2-4', title: 'プロダクトリスク制御' },
            { id: 'sec-3-1', title: 'テストにおけるメトリクス' },
            { id: 'sec-3-2', title: 'テストレポートの目的、内容、および対象読者' },
            { id: 'sec-3-3', title: 'テスト状況の伝達' },
            { id: 'sec-5-1', title: '欠陥のライフサイクルと状態管理' },
            { id: 'sec-5-2', title: '欠陥報告の目的と価値' },
            { id: 'sec-5-3', title: '欠陥レポートに必要な記載項目' },
        ];

        expectedSubsections.forEach(({ id, title }) => {
            const el = container.querySelector(`[id="${id}"]`);
            expect(el).not.toBeNull();
            expect(el?.textContent).toContain(title);
        });
    });

    it('renders all 9 Mermaid diagrams across the page', async () => {
        render(<Page />);
        const diagrams = await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        expect(diagrams).toHaveLength(9);
    });

    it('renders the sidebar navigation with links and brand title', () => {
        const { container } = render(<Page />);
        const nav = container.querySelector('nav.sidebar');
        expect(nav).not.toBeNull();

        const sideBrand = container.querySelector('.side-brand');
        expect(sideBrand?.textContent).toContain('Chapter 5');
        expect(sideBrand?.textContent).toContain('テスト活動の管理');

        // Check TOC links
        const tocLinks = container.querySelectorAll('.side-nav a');
        expect(tocLinks.length).toBeGreaterThanOrEqual(20);
    });

    it('renders tables across sections', () => {
        const { container } = render(<Page />);
        const tables = container.querySelectorAll('table');
        expect(tables.length).toBeGreaterThanOrEqual(5);
    });

    it('renders references section with primary sources', () => {
        const { container } = render(<Page />);
        const refSection = container.querySelector('[id="sec-7"]');
        expect(refSection).not.toBeNull();
        expect(container.textContent).toContain('ISTQB CTFL Syllabus v4.0.1');
        expect(container.textContent).toContain('ISO/IEC/IEEE 29119');
    });
});
