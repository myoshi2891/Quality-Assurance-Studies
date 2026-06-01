import { afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ctel-tm-otm-complete-guide/page';

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

describe('CTEL-TM-OTM Expert Level Guide Page', () => {
    it('renders the main heading', () => {
        render(<Page />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/CTEL-TM-OTM/);
        expect(heading).toHaveTextContent(/Operational Test Management/);
    });

    it('renders the navigation bar', () => {
        render(<Page />);
        const nav = document.querySelector('.sticky-nav');
        expect(nav).toBeInTheDocument();
    });
});
