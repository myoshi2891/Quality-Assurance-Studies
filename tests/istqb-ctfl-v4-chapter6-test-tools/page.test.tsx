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
});
