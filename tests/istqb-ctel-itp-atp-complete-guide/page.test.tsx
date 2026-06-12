import { afterEach, describe, it, expect } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ctel-itp-atp-complete-guide/page';

afterEach(() => cleanup());


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
        // ページ固有のナビゲーション（.sticky-nav）が存在することを確認
        const nav = document.querySelector('.sticky-nav');
        expect(nav).toBeInTheDocument();
    });
});
