import { describe, it, expect, afterEach } from 'bun:test';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { render, fireEvent, cleanup, within } from '@testing-library/react';
import NavBar from '../../app/iso-29119-1-2022-guide/NavBar';
import Section8 from '../../app/iso-29119-1-2022-guide/Section8';
import Section9 from '../../app/iso-29119-1-2022-guide/Section9';
import Section10 from '../../app/iso-29119-1-2022-guide/Section10';
import Iso29119_1_GuidePage from '../../app/iso-29119-1-2022-guide/page';
import * as diagrams from '../../app/iso-29119-1-2022-guide/diagrams';
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
      const { container } = render(<NavBar />);
      const { getByRole } = within(container);
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

    const allIds = Array.from({ length: 18 }, (_, i) => String(i + 1).padStart(2, '0'));

    it.each(allIds)('mmd%s is described by the adjacent visually-hidden accDescr paragraph', (num) => {
      // Arrange
      const { container } = render(<Iso29119_1_GuidePage />);
      const img = container.querySelector(`#mmd${num}`);
      const diagram = (diagrams as Record<string, unknown>)[`DIAGRAM_${num}`];
      if (typeof diagram !== 'string') throw new Error(`DIAGRAM_${num} not found`);

      // Act
      const desc = img?.nextElementSibling;

      // Assert
      expect(img?.getAttribute('role')).toBe('img');
      expect(img?.getAttribute('aria-describedby')).toBe(`mmd${num}-desc`);
      expect(desc?.tagName).toBe('P');
      expect(desc?.id).toBe(`mmd${num}-desc`);
      expect(desc?.classList.contains('visually-hidden')).toBe(true);
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

  describe('NavBar aria-current', () => {
    function mountHeading(id: string, top: number): void {
      const el = document.createElement('h3');
      el.id = id;
      el.getBoundingClientRect = () => {
        const t = top - window.scrollY;
        return { top: t, bottom: t, left: 0, right: 0, width: 0, height: 0, x: 0, y: t, toJSON: () => ({}) };
      };
      document.body.appendChild(el);
    }

    afterEach(() => {
      document.getElementById('step-1規格の全体像')?.remove();
      document.getElementById('1-1-一言でいうと')?.remove();
      Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true });
    });

    it('sets aria-current="location" only on the active section link', () => {
      // Arrange: スクロール位置 0 で STEP 1 見出しのみ通過済み
      mountHeading('step-1規格の全体像', 0);
      const { container } = render(<NavBar />);

      // Assert
      const current = Array.from(container.querySelectorAll('#sidebar a[aria-current]'));
      expect(current.map((a) => a.getAttribute('href'))).toEqual(['#step-1規格の全体像']);
      expect(current[0]?.getAttribute('aria-current')).toBe('location');
    });

    it('sets aria-current="location" only on the active subsection link', () => {
      // Arrange: STEP 1 と 1-1 の両方を通過済み（1-1 がアクティブ）
      mountHeading('step-1規格の全体像', 0);
      mountHeading('1-1-一言でいうと', 50);
      const { container } = render(<NavBar />);

      // Assert
      const current = Array.from(container.querySelectorAll('#sidebar a[aria-current]'));
      expect(current.map((a) => a.getAttribute('href'))).toEqual(['#1-1-一言でいうと']);
      expect(current[0]?.getAttribute('aria-current')).toBe('location');
    });
  });

  describe('CSS table interference resets', () => {
    const css = fs.readFileSync(
      path.resolve(process.cwd(), 'app/iso-29119-1-2022-guide/iso-29119-1-2022-guide.css'),
      'utf-8',
    );

    it('defines the page-local --ink token', () => {
      expect(css).toMatch(/\.iso-29119-1-page\s*\{[^}]*--ink:\s*#e4ecfb;/);
    });

    it('forces table cell color to var(--ink) and font-size to 1rem', () => {
      expect(css).toMatch(
        /\.iso-29119-1-page tbody td,\s*\.iso-29119-1-page td\s*\{[^}]*color:\s*var\(--ink\)\s*!important;[^}]*font-size:\s*1rem\s*!important;/,
      );
    });

    it('styles inline code inside table cells', () => {
      expect(css).toMatch(/\.iso-29119-1-page td code\s*\{[^}]*color:[^}]*!important/);
    });

    it('resets the global tbody row-hover cell background', () => {
      expect(css).toMatch(/\.iso-29119-1-page tbody tr:hover td\s*\{[^}]*background:\s*transparent/);
    });
  });

  describe('CSS reduced-motion sidebar', () => {
    const css = fs.readFileSync(
      path.resolve(process.cwd(), 'app/iso-29119-1-2022-guide/iso-29119-1-2022-guide.css'),
      'utf-8',
    );

    it('disables the transition for both closed and open sidebar states', () => {
      // Arrange
      const block = css.match(/@media \(prefers-reduced-motion: reduce\)\s*\{([\s\S]*?)\n\}/);

      // Assert（.sidebar.open は 900px 以下で詳細度が高いため、明示的に含める必要がある）
      expect(block?.[1]).toMatch(
        /\.iso-29119-1-page \.sidebar,\s*\.iso-29119-1-page \.sidebar\.open\s*\{[^}]*transition:\s*none/,
      );
    });
  });
});
