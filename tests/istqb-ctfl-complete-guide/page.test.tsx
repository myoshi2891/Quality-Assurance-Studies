import { afterEach, describe, it, expect } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ctfl-complete-guide/page';

afterEach(() => cleanup());

describe('CTFL Complete Guide Page', () => {
    it('renders the main heading', () => {
        render(<Page />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeTruthy();
        expect(heading.textContent).toMatch(/Certified Tester Foundation Level/);
    });

    it('renders the overview section (exam-spec)', () => {
        render(<Page />);
        expect(document.getElementById('overview')).toBeTruthy();
    });

    it('renders the navigation bar', () => {
        render(<Page />);
        const nav = document.querySelector('nav.sticky-nav');
        expect(nav).toBeTruthy();
    });
});
