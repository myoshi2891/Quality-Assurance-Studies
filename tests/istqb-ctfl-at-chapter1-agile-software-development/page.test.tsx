import { afterEach, describe, it, expect } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ctfl-at-chapter1-agile-software-development/page';

afterEach(() => cleanup());

// TDD Red Phase: failing test for initial empty page
describe('CTFL-AT Chapter 1 Agile Software Development Page', () => {
    it('renders the main heading', () => {
        render(<Page />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeTruthy();
        expect(heading.textContent).toMatch(/アジャイルソフトウェア開発/);
    });

    it('renders the overview section', () => {
        render(<Page />);
        expect(document.getElementById('overview')).toBeTruthy();
    });

    it('renders the sticky top navigation bar', () => {
        render(<Page />);
        const nav = document.querySelector('nav.topnav');
        expect(nav).toBeTruthy();
    });
});
