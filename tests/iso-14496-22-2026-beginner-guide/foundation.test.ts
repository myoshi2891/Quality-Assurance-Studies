import { describe, it, expect } from 'bun:test';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

describe('ISO 14496-22:2026 Guide - Foundation', () => {
  const cssPath = resolve(process.cwd(), 'app/iso-14496-22-2026-beginner-guide/iso-14496-22-2026-beginner-guide.css');
  const diagramsPath = resolve(process.cwd(), 'app/iso-14496-22-2026-beginner-guide/diagrams.ts');

  it('has page-specific CSS with proper scoping and globals reset', () => {
    expect(existsSync(cssPath)).toBe(true);
    const css = readFileSync(cssPath, 'utf-8');

    // Scoped root class
    expect(css).toContain('.iso-14496-22-2026-page');

    // Globals reset requirements
    expect(css).toContain('.hero');
    expect(css).toContain('.mermaid-wrapper');
    expect(css).toContain('.table-scroll');
    expect(css).toContain('::-webkit-scrollbar');
    expect(css).toContain('max-width: none !important');
  });

  it('resets mermaid-wrapper to prevent left-side scroll clipping and resolves global header collisions', () => {
    const css = readFileSync(cssPath, 'utf-8');

    // Mermaid wrapper must be block with visible overflow to avoid flex-center left clipping and dual scrollbars
    expect(css).toMatch(/\.iso-14496-22-2026-page\s+\.mermaid-wrapper\s*\{[^}]*display:\s*block\s*!important/);
    expect(css).toMatch(/\.iso-14496-22-2026-page\s+\.mermaid-wrapper\s*\{[^}]*overflow:\s*visible\s*!important/);

    // Sidebar and toggle must position below the global nav header and disclaimer banner
    expect(css).toMatch(/\.iso-14496-22-2026-page\s+\.sidebar\s*\{[^}]*top:\s*calc\(60px\s*\+\s*var\(--disclaimer-height,\s*0px\)\)/);
    expect(css).toMatch(/\.iso-14496-22-2026-page\s+\.sidebar\s*\{[^}]*z-index:\s*30/);
    expect(css).toMatch(/\.iso-14496-22-2026-page\s+\.toggle\s*\{[^}]*top:\s*calc\(72px\s*\+\s*var\(--disclaimer-height,\s*0px\)\)/);
    expect(css).toMatch(/\.iso-14496-22-2026-page\s+\.toggle\s*\{[^}]*z-index:\s*35/);

    // Scroll margin top must account for header + disclaimer banner
    expect(css).toContain('calc(80px + var(--disclaimer-height, 0px))');
  });

  it('has diagrams.ts with MERMAID_CONFIG and all 11 diagrams', async () => {
    expect(existsSync(diagramsPath)).toBe(true);
    const diagrams = await import('../../app/iso-14496-22-2026-beginner-guide/diagrams');

    expect(diagrams.MERMAID_CONFIG).toBeDefined();
    // Rule: no single quotes in init directive
    expect(diagrams.MERMAID_CONFIG).not.toContain("'");
    expect(diagrams.MERMAID_CONFIG).toContain('"theme": "base"');

    // DIAGRAM_01 through DIAGRAM_11
    for (let i = 1; i <= 11; i++) {
      const num = String(i).padStart(2, '0');
      const diagramName = `DIAGRAM_${num}` as keyof typeof diagrams;
      expect(diagrams[diagramName]).toBeDefined();
      expect(typeof diagrams[diagramName]).toBe('string');
      expect(diagrams[diagramName]).toContain(diagrams.MERMAID_CONFIG);
      expect(diagrams[diagramName]).toContain('accTitle:');
      expect(diagrams[diagramName]).toContain('accDescr:');
    }
  });
});

