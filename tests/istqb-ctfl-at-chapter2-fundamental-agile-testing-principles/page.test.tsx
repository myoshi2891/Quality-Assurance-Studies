import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles/page';

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

describe('CTFL-AT Chapter 2: Fundamental Agile Testing Principles Guide Page', () => {
    it('renders the main heading, eyebrow, lede and metadata pills', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        // Eyebrow and H1
        expect(screen.getByText(/ISTQB® CTFL-AT Syllabus/i)).toBeDefined();
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1).toBeDefined();
        expect(h1.textContent).toContain('アジャイルテストの基本原則');
        expect(screen.getByText(/Chapter 2 ― Fundamental Agile Testing Principles, Practices, and Processes 完全解説/i)).toBeDefined();

        // Hero metadata
        expect(screen.getByText('105分')).toBeDefined();
        expect(screen.getByText('全項目 K2')).toBeDefined();
        expect(screen.getByText('Chapter 1')).toBeDefined();
        expect(screen.getByText('サンセット移行中')).toBeDefined();
        expect(screen.getByText('ISTQB / JSTQB 確認済')).toBeDefined();
    });

    it('renders all main sections with expected headings and IDs', async () => {
        const { container } = render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        const expectedSections = [
            { id: 'overview', title: 'この記事の位置づけと重要な注意事項' },
            { id: 'structure', title: '章の全体構造' },
            { id: 'sec-2-1', title: '伝統的アプローチとアジャイルアプローチにおけるテストの違い' },
            { id: 'sec-2-2', title: 'アジャイルプロジェクトにおけるテストの状況' },
            { id: 'sec-2-3', title: 'アジャイルチームにおけるテスト担当者の役割とスキル' },
            { id: 'summary', title: '章のまとめ' },
            { id: 'references', title: '参考文献・出典' },
        ];

        expectedSections.forEach(({ id, title }) => {
            const section = container.querySelector(`section#${id}`);
            expect(section).not.toBeNull();
            expect(section?.textContent).toContain(title);
        });
    });

    it('renders all subsections with corresponding IDs and content', async () => {
        const { container } = render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        const expectedSubsections = [
            { id: 's211', heading: '2.1.1' },
            { id: 's212', heading: '2.1.2' },
            { id: 's213', heading: '2.1.3' },
            { id: 's214', heading: '2.1.4' },
            { id: 's215', heading: '2.1.5' },
            { id: 's221', heading: '2.2.1' },
            { id: 's222', heading: '2.2.2' },
            { id: 's231', heading: '2.3.1' },
            { id: 's232', heading: '2.3.2' },
        ];

        expectedSubsections.forEach(({ id, heading }) => {
            const el = container.querySelector(`#${id}`);
            expect(el).not.toBeNull();
            expect(el?.textContent).toContain(heading);
        });
    });

    it('renders all 14 Mermaid diagram cards across the page', async () => {
        const { container } = render(<Page />);
        const diagrams = await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        expect(diagrams.length).toBe(14);

        const cards = container.querySelectorAll('.diagram-card');
        expect(cards.length).toBe(14);
    });

    it('renders the sidebar navigation with sticky scrollspy container', async () => {
        const { container } = render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        const nav = container.querySelector('nav.sidebar');
        expect(nav).not.toBeNull();

        // Main links in TOC
        expect(screen.getByRole('link', { name: /0\. 位置づけと注意事項/i }).getAttribute('href')).toBe('#overview');
        expect(screen.getByRole('link', { name: /1\. 章の全体構造/i }).getAttribute('href')).toBe('#structure');
        expect(screen.getByRole('link', { name: /2\.1 伝統的手法との違い/i }).getAttribute('href')).toBe('#sec-2-1');
        expect(screen.getByRole('link', { name: /2\.2 状況の伝達/i }).getAttribute('href')).toBe('#sec-2-2');
        expect(screen.getByRole('link', { name: /2\.3 役割とスキル/i }).getAttribute('href')).toBe('#sec-2-3');
        expect(screen.getByRole('link', { name: /3\. 章のまとめ/i }).getAttribute('href')).toBe('#summary');
        expect(screen.getByRole('link', { name: /4\. 参考文献/i }).getAttribute('href')).toBe('#references');
    });

    it('renders learning objectives FA-2.1.1 to FA-2.3.2 table', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        expect(screen.getByText('FA-2.1.1')).toBeDefined();
        expect(screen.getByText('FA-2.1.2')).toBeDefined();
        expect(screen.getByText('FA-2.1.3')).toBeDefined();
        expect(screen.getByText('FA-2.2.1')).toBeDefined();
        expect(screen.getByText('FA-2.2.2')).toBeDefined();
        expect(screen.getByText('FA-2.3.1')).toBeDefined();
        expect(screen.getByText('FA-2.3.2')).toBeDefined();
    });

    it('renders essential tables, callouts and code blocks', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        // Important terms
        expect(screen.getByText('Build Verification Test(BVT)')).toBeDefined();
        expect(screen.getAllByText(/Feature Verification Test/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Feature Validation Test/i).length).toBeGreaterThan(0);
        expect(screen.getByText('Configuration Item(構成アイテム)')).toBeDefined();
        expect(screen.getByText('Configuration Management(構成管理)')).toBeDefined();
        expect(screen.getAllByText(/ホールチームアプローチ/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/ハーデニング\(安定化\)イテレーション/i).length).toBeGreaterThan(0);

        // Code sample
        expect(screen.getByText(/example\.yml/i)).toBeDefined();
        expect(screen.getByText(/bvt-suite --smoke --timeout=5m/i)).toBeDefined();

        // Self-check questions
        expect(screen.getByText(/アジャイルテスト担当者に求められる3つのスキル領域を挙げ/i)).toBeDefined();
    });

    it('renders references section with all 15 sources', async () => {
        const { container } = render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        // 参考文献セクションの全エントリ（3テーブル合計 15 行）が描画されていること
        const referenceRows = container.querySelectorAll('#references table tbody tr');
        expect(referenceRows).toHaveLength(15);

        // 各行が No. / 資料名 / URL リンクを持つこと
        referenceRows.forEach((row) => {
            expect(row.querySelectorAll('td')).toHaveLength(3);
            expect(row.querySelector('td a[href^="http"]')).not.toBeNull();
        });
    });
});
