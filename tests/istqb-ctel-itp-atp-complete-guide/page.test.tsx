import { afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
// @ts-ignore: Page does not exist yet
import Page from '../../app/istqb-ctel-itp-atp-complete-guide/page';

afterEach(() => cleanup());

// Mock the IntersectionObserver since it's not available in happy-dom
beforeAll(() => {
    const mockIntersectionObserver = mock(() => ({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    }));
    window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
});

describe('CTEL-ITP-ATP Expert Level Guide Page', () => {
    it('renders the main heading', () => {
        render(<Page />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/CTEL-ITP-ATP/);
        expect(heading).toHaveTextContent(/テストプロセス評価/);
    });

    it('renders the navigation bar', () => {
        render(<Page />);
        // ページ固有のナビゲーションが存在することを確認
        const nav = document.querySelector('nav');
        expect(nav).toBeInTheDocument();
    });
});
