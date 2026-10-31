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

