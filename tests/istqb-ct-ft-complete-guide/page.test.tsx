import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import mermaid from 'mermaid';
import Page from '../../app/istqb-ct-ft-complete-guide/page';

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

describe('ISTQB CT-FT Complete Guide Page', () => {
    it('renders the main heading (H1) with CT-FT title', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeTruthy();
        expect(heading.textContent).toMatch(/ISTQB® Certified Tester – Finance Testing（CT-FT）完全ガイド/);
    });

    it('renders the sidebar navigation with all chapter links', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        const nav = document.querySelector('nav.sidebar');
        expect(nav).toBeTruthy();

        const expectedLinks = [
            '#ch0',
            '#ch1',
            '#ch2',
            '#ch3',
            '#ch4',
            '#ch5',
            '#ch6',
            '#ch7',
            '#ch8',
        ];
        for (const href of expectedLinks) {
            const link = nav?.querySelector(`a[href="${href}"]`);
            expect(link).toBeTruthy();
        }
    });

    it('renders all 9 chapter sections with proper IDs and headings', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });

        const sections = [
            { id: 'ch0', text: /CT-FTとは何か/ },
            { id: 'ch1', text: /第1章：金融サービス業界とファイナンステスト入門/ },
            { id: 'ch2', text: /第2章：コンプライアンステスト/ },
            { id: 'ch3', text: /第3章：リスクベーステスト/ },
            { id: 'ch4', text: /第4章：データテストとデータ管理/ },
            { id: 'ch5', text: /第5章：機能テストと非機能テスト/ },
            { id: 'ch6', text: /第6章：テスト自動化/ },
            { id: 'ch7', text: /学習ロードマップとまとめ/ },
            { id: 'ch8', text: /参考文献・引用元URL一覧/ },
        ];

        for (const { id, text } of sections) {
            const sec = document.getElementById(id);
            expect(sec).toBeTruthy();
            const heading = sec?.querySelector('h2');
            expect(heading?.textContent).toMatch(text);
        }
    });

    it('renders all 9 Mermaid diagram blocks', async () => {
        render(<Page />);
        const diagrams = await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        expect(diagrams).toHaveLength(9);
    });

    it('renders key financial compliance and testing concepts', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        
        // Key financial regulations & concepts
        expect(document.body.textContent).toContain('GDPR');
        expect(document.body.textContent).toContain('PSD2');
        expect(document.body.textContent).toContain('DORA');
        expect(document.body.textContent).toContain('PCI DSS');
        expect(document.body.textContent).toContain('ISO 20022');
        expect(document.body.textContent).toContain('FIX');
        expect(document.body.textContent).toContain('KYC');
        expect(document.body.textContent).toContain('AML');
    });

    it('renders bibliography and disclaimer note', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        
        expect(document.querySelector('.final-note')).toBeTruthy();
        expect(document.querySelector('.biblio-group')).toBeTruthy();
    });
});
