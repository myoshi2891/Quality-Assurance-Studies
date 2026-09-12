import React from 'react';
import { describe, it, expect, vi } from 'bun:test';
import { render, screen } from '@testing-library/react';
import Chapter6Page from '../../app/istqb-ctfl-v4-chapter6-test-tools/page';

// Mock Mermaid diagram component to avoid browser render issues in test env
vi.mock('../../components/Mermaid', () => ({
    default: ({ chart }: { chart: string }) => <div data-testid="mermaid">{chart}</div>,
}));

describe('ISTQB CTFL v4.0 Chapter 6: Test Tools Page Suite', () => {
    describe('Category 2: Hero & Overview & Learning Objectives (Sections 0-1)', () => {
        it('renders the header with eyebrow, h1, subtitle, and official notice box', () => {
            render(<Chapter6Page />);
            expect(screen.getByText(/ISTQB Certified Tester Foundation Level v4\.0/)).toBeDefined();
            const heading = screen.getByRole('heading', { level: 1 });
            expect(heading.textContent).toContain('Chapter 6: テストツール');
            expect(screen.getByText(/中級〜上級者向けに、公式シラバスの範囲を明確にしながら/)).toBeDefined();
            expect(screen.getByText(/ISTQB® CTFL v4\.0\.1 公式シラバス/)).toBeDefined();
        });

        it('renders Section 0 (この章の位置づけ) with table and warning callout', () => {
            render(<Chapter6Page />);
            const sec0 = document.getElementById('pos');
            expect(sec0).not.toBeNull();
            expect(sec0?.textContent).toContain('0. この章の位置づけ');
            expect(sec0?.textContent).toContain('最も短い章');
            expect(sec0?.textContent).toContain('20分');

            // Table in section 0
            expect(sec0?.textContent).toContain('学習時間目安');
            expect(sec0?.textContent).toContain('出題数目安');
            expect(sec0?.textContent).toContain('約2〜3問');
            expect(sec0?.textContent).toContain('data-driven testing');
            expect(sec0?.textContent).toContain('keyword-driven testing');

            // Callout in section 0
            expect(sec0?.textContent).toContain('v4.0 では基礎知識のみに絞られ');
        });

        it('renders Section 1 (学習目標) with learning objectives table', () => {
            render(<Chapter6Page />);
            const sec1 = document.getElementById('lo');
            expect(sec1).not.toBeNull();
            expect(sec1?.textContent).toContain('1. 学習目標（Learning Objectives）');
            expect(sec1?.textContent).toContain('FL-6.1.1');
            expect(sec1?.textContent).toContain('FL-6.2.1');
            expect(sec1?.textContent).toContain('FL-6.2.2');
            expect(sec1?.textContent).toContain('さまざまな種類のテストツールを分類できる');
            expect(sec1?.textContent).toContain('潜在的な利点とリスクを要約できる');
            expect(sec1?.textContent).toContain('特別な考慮事項を記憶している');
        });
    });

    describe('Category 3: Section 2: 6.1 テストツールによる支援 (Tool Support for Testing)', () => {
        it('renders Section 2 with all subsections (2.1 to 2.5)', () => {
            render(<Chapter6Page />);
            const sec2 = document.getElementById('s61');
            expect(sec2).not.toBeNull();
            expect(sec2?.textContent).toContain('2. 6.1 テストツールによる支援');

            expect(document.getElementById('s61-1')).not.toBeNull();
            expect(document.getElementById('s61-1')?.textContent).toContain('2.1 テストツールとは何か');
            expect(document.getElementById('s61-1')?.textContent).toContain('スプレッドシートでさえも');

            expect(document.getElementById('s61-2')).not.toBeNull();
            expect(document.getElementById('s61-2')?.textContent).toContain('2.2 v4.0 シラバスにおけるツール分類（9カテゴリ）');

            expect(document.getElementById('s61-3')).not.toBeNull();
            expect(document.getElementById('s61-3')?.textContent).toContain('2.3 テストプロセスとツール分類の関係図');

            expect(document.getElementById('s61-4')).not.toBeNull();
            expect(document.getElementById('s61-4')?.textContent).toContain('2.4 各カテゴリの詳細と現在（2026年）の代表的ツール例');

            expect(document.getElementById('s61-5')).not.toBeNull();
            expect(document.getElementById('s61-5')?.textContent).toContain('2.5 侵入的ツールと「プローブ効果」');
            expect(document.getElementById('s61-5')?.textContent).toContain('プローブ効果（probe effect）');
        });

        it('renders all 9 category cards in section 2.2', () => {
            render(<Chapter6Page />);
            const cards = document.querySelectorAll('.cat-card');
            expect(cards.length).toBe(9);
            const cardTitles = Array.from(cards).map((c) => c.querySelector('h4')?.textContent);
            expect(cardTitles).toEqual([
                '汎用ツール',
                'テスト管理ツール',
                '静的テストツール',
                'テスト設計・実装ツール',
                'テスト実行・カバレッジツール',
                '非機能テストツール',
                'DevOpsツール',
                'コラボレーションツール',
                'スケーラビリティ・デプロイ標準化支援ツール',
            ]);
        });

        it('renders the GitHub Actions CI code block with .code-line wrappers in section 2.4', () => {
            render(<Chapter6Page />);
            const codeBlock = document.querySelector('#s61-4 .code-block');
            expect(codeBlock).not.toBeNull();
            expect(codeBlock?.textContent).toContain('name: static-analysis');
            expect(codeBlock?.textContent).toContain('on: [pull_request]');
            expect(codeBlock?.textContent).toContain('SonarSource/sonarqube-scan-action@v3');
            const lines = codeBlock?.querySelectorAll('.code-line');
            expect(lines && lines.length).toBeGreaterThan(5);
        });

        it('renders the E2E tools comparison table (Playwright vs Selenium vs Cypress) in section 2.4', () => {
            render(<Chapter6Page />);
            const table = document.querySelector('#s61-4 table');
            expect(table).not.toBeNull();
            expect(table?.textContent).toContain('Playwright');
            expect(table?.textContent).toContain('Selenium');
            expect(table?.textContent).toContain('Cypress');
            expect(table?.textContent).toContain('Microsoft');
            expect(table?.textContent).toContain('オープンソースコミュニティ');
        });

        it('renders Mermaid diagrams diag-0 and diag-1 in section 2', () => {
            render(<Chapter6Page />);
            const mermaids = screen.getAllByTestId('mermaid');
            const charts = mermaids.map((m) => m.textContent || '');
            const hasDiag0 = charts.some((c) => c.includes('基本テストプロセス') && c.includes('テスト管理ツール'));
            const hasDiag1 = charts.some((c) => c.includes('quadrantChart') && c.includes('Playwright'));
            expect(hasDiag0).toBe(true);
            expect(hasDiag1).toBe(true);
        });
    });
});
