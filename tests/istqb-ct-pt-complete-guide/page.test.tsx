import { afterEach, beforeAll, afterAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ct-pt-complete-guide/page';

afterEach(() => cleanup());

let originalIntersectionObserver: typeof IntersectionObserver | undefined;

// Mock the IntersectionObserver since it's not available in happy-dom
beforeAll(() => {
    originalIntersectionObserver = window.IntersectionObserver;
    const mockIntersectionObserver = mock(() => ({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    }));
    window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
    window.IntersectionObserver = originalIntersectionObserver;
});

describe('CT-PT Complete Guide Page', () => {
    it('renders the main heading', () => {
        render(<Page />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/CT-PT/);
    });

    it('renders the overview section (overview)', () => {
        render(<Page />);
        expect(document.getElementById('overview')).toBeInTheDocument();
    });

    it('renders the navigation bar', () => {
        render(<Page />);
        const nav = document.querySelector('nav.sticky-nav');
        expect(nav).toBeInTheDocument();
    });
});
