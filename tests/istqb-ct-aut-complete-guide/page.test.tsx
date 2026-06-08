import { describe, it, expect } from 'bun:test';
import { render, screen } from '@testing-library/react';
import Page from '../../app/istqb-ct-aut-complete-guide/page';
import NavBar from '../../app/istqb-ct-aut-complete-guide/NavBar';

// Mock IntersectionObserver for NavBar
const mockIntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
};
global.IntersectionObserver = mockIntersectionObserver as any;

describe('ISTQB CT-AuT Complete Guide Page', () => {
    it('renders the hero heading for Automotive Software Tester', () => {
        render(<Page />);
        const mainHeading = screen.getByRole('heading', { level: 1 });
        expect(mainHeading.textContent).toContain('自動車ソフトウェアテスター');
        expect(mainHeading.textContent).toContain('CT-AuT');
    });

    it('renders the section title headings', () => {
        render(<Page />);
        
        // Check for key chapter headings
        const h2Elements = screen.getAllByRole('heading', { level: 2 });
        const h2Texts = h2Elements.map((h2) => h2.textContent);
        
        expect(h2Texts.some(text => text?.includes('序章: 試験概要と学習戦略'))).toBe(true);
        expect(h2Texts.some(text => text?.includes('第1章: 自動車システム開発の基礎'))).toBe(true);
        expect(h2Texts.some(text => text?.includes('第2章: 自動車システム向け規格と標準'))).toBe(true);
        expect(h2Texts.some(text => text?.includes('第3章: 仮想環境におけるテスト'))).toBe(true);
    });

    it('renders the NavBar component with correct sections', () => {
        render(<NavBar />);
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
        
        // Verify links exist
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);
        
        const linkTexts = links.map(link => link.textContent);
        expect(linkTexts).toContain('序章: 試験概要');
        expect(linkTexts).toContain('第1章: 開発基礎');
    });
});
