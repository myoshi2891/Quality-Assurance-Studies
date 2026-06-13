import { afterEach, describe, it, expect } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ct-ut-complete-guide/page';

afterEach(() => cleanup());




describe('CT-UT Complete Guide Page', () => {
    it('renders the main heading', () => {
        render(<Page />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeTruthy();
        expect(heading.textContent).toMatch(/Usability Testing/);
    });

    it('renders the overview section (toc)', () => {
        render(<Page />);
        expect(document.getElementById('toc')).toBeTruthy();
    });

    it('renders the navigation bar', () => {
        render(<Page />);
        const nav = document.querySelector('nav.sticky-nav');
        expect(nav).toBeTruthy();
    });
});
