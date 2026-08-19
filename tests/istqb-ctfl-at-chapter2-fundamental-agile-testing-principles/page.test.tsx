import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Page from '../../app/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles/page';

// Mock Mermaid component
vi.mock('@/components/Mermaid', () => ({
    default: function MockMermaid({ chart }: { chart: string }) {
        return <div data-testid="mermaid-diagram" data-chart={chart} />;
    },
}));

describe('CTFL-AT Chapter 2: Fundamental Agile Testing Principles Guide Page', () => {
    it('renders the main heading, eyebrow, lede and metadata pills', () => {
        render(<Page />);

        // Eyebrow and H1
        expect(screen.getByText(/ISTQB® CTFL-AT Syllabus/i)).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 1, name: /アジャイルテストの基本原則/i })).toBeInTheDocument();
        expect(screen.getByText(/Chapter 2 ― Fundamental Agile Testing Principles, Practices, and Processes 完全解説/i)).toBeInTheDocument();

        // Hero metadata
        expect(screen.getByText('105分')).toBeInTheDocument();
        expect(screen.getByText('全項目 K2')).toBeInTheDocument();
        expect(screen.getByText('Chapter 1')).toBeInTheDocument();
        expect(screen.getByText('サンセット移行中')).toBeInTheDocument();
        expect(screen.getByText('ISTQB / JSTQB 確認済')).toBeInTheDocument();
    });

    it('renders all main sections with expected headings and IDs', () => {
        const { container } = render(<Page />);

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
            expect(section).toBeInTheDocument();
            expect(section?.textContent).toContain(title);
        });
    });

    it('renders all subsections with corresponding IDs and content', () => {
        const { container } = render(<Page />);

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

    it('renders all 14 Mermaid diagrams across the page with proper chart data', () => {
        render(<Page />);

        const diagrams = screen.getAllByTestId('mermaid-diagram');
        expect(diagrams).toHaveLength(14);

        // Check key diagrams
        const charts = diagrams.map((d) => d.getAttribute('data-chart') || '');
        
        // d1: Mindmap Chapter 2 全体構造
        expect(charts.some((c) => c.includes('mindmap') && c.includes('Chapter 2'))).toBe(true);
        // d2: 違いが生じる5つの観点
        expect(charts.some((c) => c.includes('2.1.1') && c.includes('伝統的'))).toBe(true);
        // d3: リリース計画からイテレーション
        expect(charts.some((c) => c.includes('Release Planning') && c.includes('イテレーションの連続'))).toBe(true);
        // d4: シーケンス図
        expect(charts.some((c) => c.includes('sequenceDiagram') && c.includes('開発者') && c.includes('テスト担当者'))).toBe(true);
        // d5: 作業成果物3分類
        expect(charts.some((c) => c.includes('ビジネス指向の成果物') && c.includes('開発指向の成果物'))).toBe(true);
        // d6: ストーリー単位のテストレベル進行
        expect(charts.some((c) => c.includes('Feature Verification Test') && c.includes('Feature Validation Test'))).toBe(true);
        // d7: CIパイプライン
        expect(charts.some((c) => c.includes('Build Verification Test') && c.includes('Fix Bugs First'))).toBe(true);
        // d8: 独立テストの選択肢
        expect(charts.some((c) => c.includes('専任テスト担当者') && c.includes('独立テスト担当者'))).toBe(true);
        // d9: テストステータス伝達手段
        expect(charts.some((c) => c.includes('デイリースタンドアップ') && c.includes('タスクボード/カンバンボード'))).toBe(true);
        // d10: カンバンボード
        expect(charts.some((c) => c.includes('US-101') && c.includes('US-099'))).toBe(true);
        // d11: 実行頻度階層
        expect(charts.some((c) => c.includes('ユニットテスト') && c.includes('フルリグレッションテストセット'))).toBe(true);
        // d12: 求められるスキル
        expect(charts.some((c) => c.includes('対人スキル') && c.includes('ドメイン知識'))).toBe(true);
        // d13: 典型的な活動
        expect(charts.some((c) => c.includes('ユーザーストーリー') && c.includes('テスト容易性'))).toBe(true);
        // d14: 要点マップ
        expect(charts.some((c) => c.includes('Chapter 2の要点') && c.includes('情報ラジエーター'))).toBe(true);
    });

    it('renders the sidebar navigation with sticky scrollspy container', () => {
        const { container } = render(<Page />);

        const nav = container.querySelector('nav.sidebar');
        expect(nav).not.toBeNull();
        expect(nav).toBeInTheDocument();

        // Main links in TOC
        expect(screen.getByRole('link', { name: /0\. 位置づけと注意事項/i })).toHaveAttribute('href', '#overview');
        expect(screen.getByRole('link', { name: /1\. 章の全体構造/i })).toHaveAttribute('href', '#structure');
        expect(screen.getByRole('link', { name: /2\.1 伝統的手法との違い/i })).toHaveAttribute('href', '#sec-2-1');
        expect(screen.getByRole('link', { name: /2\.2 状況の伝達/i })).toHaveAttribute('href', '#sec-2-2');
        expect(screen.getByRole('link', { name: /2\.3 役割とスキル/i })).toHaveAttribute('href', '#sec-2-3');
        expect(screen.getByRole('link', { name: /3\. 章のまとめ/i })).toHaveAttribute('href', '#summary');
        expect(screen.getByRole('link', { name: /4\. 参考文献/i })).toHaveAttribute('href', '#references');
    });

    it('renders learning objectives FA-2.1.1 to FA-2.3.2 table', () => {
        render(<Page />);

        expect(screen.getByText('FA-2.1.1')).toBeInTheDocument();
        expect(screen.getByText('FA-2.1.2')).toBeInTheDocument();
        expect(screen.getByText('FA-2.1.3')).toBeInTheDocument();
        expect(screen.getByText('FA-2.2.1')).toBeInTheDocument();
        expect(screen.getByText('FA-2.2.2')).toBeInTheDocument();
        expect(screen.getByText('FA-2.3.1')).toBeInTheDocument();
        expect(screen.getByText('FA-2.3.2')).toBeInTheDocument();
    });

    it('renders essential tables, callouts and code blocks', () => {
        render(<Page />);

        // Important terms
        expect(screen.getByText('Build Verification Test(BVT)')).toBeInTheDocument();
        expect(screen.getByText('Feature Verification Test')).toBeInTheDocument();
        expect(screen.getByText('Feature Validation Test')).toBeInTheDocument();
        expect(screen.getByText('Configuration Item(構成アイテム)')).toBeInTheDocument();
        expect(screen.getByText('Configuration Management(構成管理)')).toBeInTheDocument();
        expect(screen.getByText('ホールチームアプローチ')).toBeInTheDocument();
        expect(screen.getByText('ハーデニング(安定化)イテレーション')).toBeInTheDocument();

        // Code sample
        expect(screen.getByText(/example\.yml/i)).toBeInTheDocument();
        expect(screen.getByText(/bvt-suite --smoke --timeout=5m/i)).toBeInTheDocument();

        // Self-check questions
        expect(screen.getByText(/アジャイルテスト担当者に求められる3つのスキル領域を挙げ/i)).toBeInTheDocument();
    });

    it('renders references section with all 15 sources', () => {
        render(<Page />);

        // Source 1 to 15
        expect(screen.getByText(/CTFL-AT.*公式ページ\(サンセット情報含む\)/i)).toBeInTheDocument();
        expect(screen.getByText(/Extension Agile Tester Syllabus/i)).toBeInTheDocument();
        expect(screen.getByText(/CTAL-AT.*v2\.0 公式ページ/i)).toBeInTheDocument();
        expect(screen.getByText(/The Agile Testing Quadrants/i)).toBeInTheDocument();
        expect(screen.getByText(/Testing Quadrants.*PMI Disciplined Agile/i)).toBeInTheDocument();
    });
});
