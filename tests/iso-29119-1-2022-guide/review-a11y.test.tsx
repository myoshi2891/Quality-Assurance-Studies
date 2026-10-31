import { describe, it, expect, afterEach } from 'bun:test';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { render, fireEvent, cleanup } from '@testing-library/react';
import NavBar from '../../app/iso-29119-1-2022-guide/NavBar';
import Section8 from '../../app/iso-29119-1-2022-guide/Section8';
import Section9 from '../../app/iso-29119-1-2022-guide/Section9';
import Section10 from '../../app/iso-29119-1-2022-guide/Section10';
import { DIAGRAM_16, DIAGRAM_17, DIAGRAM_18 } from '../../app/iso-29119-1-2022-guide/diagrams';

/** 図定義から accDescr の本文を取り出す */
function extractAccDescr(diagram: string): string {
  const match = diagram.match(/accDescr:\s*(.+)/);
  if (!match || match[1] === undefined) throw new Error('accDescr not found');
  return match[1].trim();
}

afterEach(() => {
  cleanup();
});

describe('ISO 29119-1 review fixes: accessibility & heading separators', () => {
  describe('NavBar toggle disclosure state', () => {
    it('exposes aria-expanded bound to open state and aria-controls="sidebar"', () => {
      // Arrange
      const { getByRole } = render(<NavBar />);
      const toggle = getByRole('button', { name: '目次の表示切替' });

      // Assert（初期状態）
      expect(toggle.getAttribute('aria-controls')).toBe('sidebar');
      expect(toggle.getAttribute('aria-expanded')).toBe('false');

      // Act
      fireEvent.click(toggle);

      // Assert（開いた状態）
      expect(toggle.getAttribute('aria-expanded')).toBe('true');
    });
  });

  describe('diagram descriptions outside role="img"', () => {
    const cases = [
      { name: 'Section8 / mmd16', Comp: Section8, id: 'mmd16', diagram: DIAGRAM_16 },
      { name: 'Section9 / mmd17', Comp: Section9, id: 'mmd17', diagram: DIAGRAM_17 },
      { name: 'Section10 / mmd18', Comp: Section10, id: 'mmd18', diagram: DIAGRAM_18 },
    ];

    it.each(cases)('$name links aria-describedby to a description outside the image', ({ Comp, id, diagram }) => {
      // Arrange
      const { container } = render(<Comp />);
      const img = container.querySelector(`#${id}`);
      expect(img?.getAttribute('role')).toBe('img');

      // Act
      const describedBy = img?.getAttribute('aria-describedby');
      expect(describedBy).toBeTruthy();
      const desc = describedBy ? container.querySelector(`#${describedBy}`) : null;

      // Assert
      expect(desc).not.toBeNull();
      expect(img?.contains(desc)).toBe(false);
      expect(desc?.textContent?.trim()).toBe(extractAccDescr(diagram));
    });
  });

  describe('CSS', () => {
    const cssContent = fs.readFileSync(
      path.resolve(process.cwd(), 'app/iso-29119-1-2022-guide/iso-29119-1-2022-guide.css'),
      'utf-8',
    );

    it('limits the first-h2 separator reset to the first section only', () => {
      expect(cssContent).not.toMatch(/\.content h2:first-child\s*\{/);
      expect(cssContent).toMatch(/\.content > section:first-child > h2:first-child\s*\{/);
    });

    it('defines a visually-hidden utility for diagram descriptions', () => {
      expect(cssContent).toMatch(/\.iso-29119-1-page \.visually-hidden\s*\{[^}]*clip: rect\(0, 0, 0, 0\)/);
    });
  });
});
