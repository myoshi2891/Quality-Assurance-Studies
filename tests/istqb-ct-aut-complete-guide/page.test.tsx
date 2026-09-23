import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
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

    // 回帰: 移行時に <Mermaid chart={DIAGRAMS[""]} /> のまま残り、全 8 図が無言で
    // 消えていた。空 chart は Mermaid が早期 return するため描画エラーも出ず、
    // 型（Record<string, string>）でも検出できないのでソースを直接検査する。
    it('wires every Mermaid diagram to a non-empty DIAGRAMS key', () => {
        const source = readFileSync(
            join(import.meta.dir, '../../app/istqb-ct-aut-complete-guide/page.tsx'),
            'utf8'
        );

        const definedKeys = [...source.matchAll(/^\s*'(diag-\d+)':\s*`/gm)].map((m) => m[1]);
        const usedKeys = [...source.matchAll(/DIAGRAMS\[['"]([^'"]*)['"]\]/g)].map((m) => m[1]);

        expect(definedKeys.length).toBeGreaterThan(0);
        expect(usedKeys.length).toBe(definedKeys.length);
        expect(usedKeys).not.toContain('');
        // 図の取り違え・重複参照も検出する（定義順 = 出現順で 1 対 1）
        expect(usedKeys).toEqual(definedKeys);
    });
});
