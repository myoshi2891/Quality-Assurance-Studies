import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ct-genai-complete-guide/page';

// Mock the IntersectionObserver since it's not available in jsdom
beforeAll(() => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
});

describe('CT-GenAI Complete Guide Page', () => {
    it('renders the main heading', () => {
        render(<Page />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Testing with Generative AI/);
    });

    it('renders the overview section (ch0)', () => {
        render(<Page />);
        expect(document.getElementById('ch0')).toBeInTheDocument();
    });

    it('renders the navigation bar', () => {
        render(<Page />);
        const nav = document.querySelector('nav.sticky-nav');
        expect(nav).toBeInTheDocument();
    });
});
