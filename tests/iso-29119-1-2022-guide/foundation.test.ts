import { describe, it, expect } from 'bun:test';
import * as diagrams from '../../app/iso-29119-1-2022-guide/diagrams';
import fs from 'fs';
import path from 'path';

describe('ISO/IEC/IEEE 29119-1:2022 Foundation (CSS & Diagrams)', () => {
  describe('diagrams.ts (all 18 diagrams)', () => {
    it('exports MERMAID_CONFIG without single quotes in JSON', () => {
      expect(diagrams.MERMAID_CONFIG).toBeDefined();
      const jsonMatch = diagrams.MERMAID_CONFIG.match(/%%\{init:\s*(\{[\s\S]*?\})\s*\}%%/);
      expect(jsonMatch).not.toBeNull();
      if (jsonMatch) {
        expect(jsonMatch[1]).not.toContain("'");
        expect(() => JSON.parse(jsonMatch[1])).not.toThrow();
      }
    });

    const expectedDiagrams = [
      'DIAGRAM_01', 'DIAGRAM_02', 'DIAGRAM_03', 'DIAGRAM_04',
      'DIAGRAM_05', 'DIAGRAM_06', 'DIAGRAM_07', 'DIAGRAM_08',
      'DIAGRAM_09', 'DIAGRAM_10', 'DIAGRAM_11', 'DIAGRAM_12',
      'DIAGRAM_13', 'DIAGRAM_14', 'DIAGRAM_15', 'DIAGRAM_16',
      'DIAGRAM_17', 'DIAGRAM_18'
    ];

    it.each(expectedDiagrams)('exports %s with config, accTitle and accDescr', (diagramName) => {
      const diagram = (diagrams as Record<string, string>)[diagramName];
      expect(diagram).toBeDefined();
      expect(diagram).toContain('%%{init:');
      expect(diagram).toContain('accTitle:');
      expect(diagram).toContain('accDescr:');
    });

    it('has exactly 18 numbered diagrams', () => {
      const exportedKeys = Object.keys(diagrams).filter(k => k.startsWith('DIAGRAM_'));
      expect(exportedKeys.sort()).toEqual(expectedDiagrams.sort());
    });
  });

  describe('iso-29119-1-2022-guide.css (Scoped CSS & Resets)', () => {
    const cssPath = path.resolve(process.cwd(), 'app/iso-29119-1-2022-guide/iso-29119-1-2022-guide.css');
    const cssContent = fs.readFileSync(cssPath, 'utf-8');

    it('defines 2026-10 new theme variables', () => {
      expect(cssContent).toContain('--bg: #07111e');
      expect(cssContent).toContain('--panel: #0c1a2d');
      expect(cssContent).toContain('--panel2: #10213a');
      expect(cssContent).toContain('--border: #1e3250');
      expect(cssContent).toContain('--accent: #7c9eff');
      expect(cssContent).toContain('--tip: #5eead4');
      expect(cssContent).toContain('--warn: #f5b85a');
      expect(cssContent).toContain('--note: #7c9eff');
    });

    it('contains callout variant classes', () => {
      expect(cssContent).toContain('.callout-practice');
      expect(cssContent).toContain('.callout-warn');
      expect(cssContent).toContain('.callout-note');
      expect(cssContent).toContain('.callout-title');
      expect(cssContent).toContain('.callout-body');
    });

    it('contains accordion details/summary styling', () => {
      expect(cssContent).toContain('details');
      expect(cssContent).toContain('summary');
    });

    it('resets globals.css interference for hero, main, table and mermaid', () => {
      expect(cssContent).toContain('.iso-29119-1-page .hero');
      expect(cssContent).toContain('.iso-29119-1-page .main');
      expect(cssContent).toContain('.iso-29119-1-page table');
      expect(cssContent).toContain('.iso-29119-1-page td');
      expect(cssContent).toContain('.mermaid-wrapper');
    });
  });
});
