import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import Page from '../../app/iso-14496-22-2026-beginner-guide/page';

describe('ISO 14496-22:2026 Guide - Full Page Integration', () => {
  it('renders complete page with all 16 sections, hero, navbar, and footer', () => {
    const { container } = render(<Page />);
    const pageRoot = container.querySelector('.iso-14496-22-2026-page');
    expect(pageRoot).not.toBeNull();

    // Hero
    expect(container.querySelector('h1.hero-title')?.textContent).toContain(
      'ISO/IEC 14496-22:2026（Open Font Format）'
    );

    // NavBar & all 16 TOC anchors
    const navLinks = container.querySelectorAll('.sidebar a');
    expect(navLinks.length).toBe(16);

    // All 16 sections (ch0 to ch15)
    for (let i = 0; i <= 15; i++) {
      const section = container.querySelector(`section#ch${i}`);
      expect(section).not.toBeNull();
      const h2 = section?.querySelector('h2');
      expect(h2).not.toBeNull();
      expect(h2?.id).toBe(`ch${i}-h`);
    }

    // 11 Mermaid diagrams in total
    const diagrams = container.querySelectorAll('.mermaid-diagram');
    expect(diagrams.length).toBe(11);

    // All 23 tables in total
    const tables = container.querySelectorAll('table');
    expect(tables.length).toBe(23);

    // Footer
    expect(container.querySelector('footer.page-footer')).not.toBeNull();
  });
});
