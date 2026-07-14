import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import mermaid from 'mermaid';
import Page from '../../app/istqb-ctfl-v4-chapter3-static-testing/page';

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

describe('CTFL Chapter 3 Static Testing Page', () => {
    it('renders the main heading', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid');
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeTruthy();
        expect(heading.textContent).toMatch(/第3章：静的テスト/);
    });

    it('renders the overview section', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid');
        expect(document.getElementById('overview')).toBeTruthy();
    });

    it('renders the navigation bar', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid');
        const nav = document.querySelector('nav.sidebar');
        expect(nav).toBeTruthy();
    });
});
