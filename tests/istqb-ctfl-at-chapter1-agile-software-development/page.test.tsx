import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import mermaid from 'mermaid';
import Page from '../../app/istqb-ctfl-at-chapter1-agile-software-development/page';

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

describe('CTFL-AT Chapter 1 Agile Software Development Page', () => {
    it('renders the main heading', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeTruthy();
        expect(heading.textContent).toMatch(/アジャイルソフトウェア開発/);
    });

    it('renders the overview section', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        expect(document.getElementById('overview')).toBeTruthy();
    });

    it('renders the sticky top navigation bar', async () => {
        render(<Page />);
        await screen.findAllByTestId('mock-mermaid', undefined, { timeout: 5000 });
        const nav = document.querySelector('nav.topnav');
        expect(nav).toBeTruthy();
    });
});
