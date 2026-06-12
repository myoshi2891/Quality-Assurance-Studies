import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ct-aut-complete-guide/page';
import NavBar from '../../app/istqb-ct-aut-complete-guide/NavBar';


describe('ISTQB CT-AuT Complete Guide Page', () => {
    
    
    
    afterEach(cleanup);

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
        
        expect(h2Texts.some(text => text?.includes('学習ロードマップ'))).toBe(true);
        expect(h2Texts.some(text => text?.includes('自動車ソフトウェアテストの概要'))).toBe(true);
        expect(h2Texts.some(text => text?.includes('Automotive SPICE'))).toBe(true);
        expect(h2Texts.some(text => text?.includes('仮想環境でのテスト'))).toBe(true);
    });

    it('renders the NavBar component with correct sections', () => {
        render(<NavBar />);
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
        
        // Verify links exist
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);
        
        const linkTexts = links.map(link => link.textContent);
        expect(linkTexts).toContain('Ch.0 概要');
        expect(linkTexts).toContain('Ch.1 自動車SW');
    });
});
