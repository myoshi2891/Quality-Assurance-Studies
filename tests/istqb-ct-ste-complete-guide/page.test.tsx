import { afterEach, describe, it, expect } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ct-ste-complete-guide/page';

afterEach(() => cleanup());




describe('CT-STE Complete Guide Page', () => {
    it('renders the main heading', () => {
        render(<Page />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/CT-STE/);
    });

    it('renders the overview section (ch0)', () => {
        render(<Page />);
        expect(document.getElementById('ch0')).toBeInTheDocument();
    });

    it('renders the navigation bar', () => {
        render(<Page />);
        // Checking for sticky nav with links
        const nav = document.querySelector('nav');
        expect(nav).toBeInTheDocument();
        const links = document.querySelectorAll('nav a');
        expect(links.length).toBeGreaterThan(0);
    });
});
