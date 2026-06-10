import { afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ct-genai-complete-guide/page';

afterEach(() => cleanup());


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
