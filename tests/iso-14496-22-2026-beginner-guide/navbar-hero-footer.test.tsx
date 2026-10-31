import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import Hero from '../../app/iso-14496-22-2026-beginner-guide/Hero';
import NavBar from '../../app/iso-14496-22-2026-beginner-guide/NavBar';
import Footer from '../../app/iso-14496-22-2026-beginner-guide/Footer';

describe('ISO 14496-22:2026 Guide - Hero, NavBar, Footer', () => {
  it('renders Hero component with title and metadata', () => {
    const { container } = render(<Hero />);
    const h1 = container.querySelector('h1.hero-title');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toContain('ISO/IEC 14496-22:2026（Open Font Format）');

    const sub = container.querySelector('.hero-sub');
    expect(sub?.textContent).toContain('初学者向けステップバイステップ解説');

    const meta = container.querySelector('.hero-meta');
    expect(meta?.textContent).toContain('ISO/IEC 14496-22:2026');
    expect(meta?.textContent).toContain('2026年10月13日');
    expect(meta?.textContent).toContain('ソフトウェアエンジニア・QAエンジニア');
  });

  it('renders NavBar component with toggle and 16 table-of-contents links', () => {
    const { container } = render(<NavBar />);
    const toggle = container.querySelector('button.toggle');
    expect(toggle).not.toBeNull();
    expect(toggle?.textContent).toContain('目次');

    const sidebar = container.querySelector('nav.sidebar');
    expect(sidebar).not.toBeNull();

    const links = sidebar?.querySelectorAll('a');
    expect(links?.length).toBe(16);

    const expectedHrefTargets = [
      'ch0', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7',
      'ch8', 'ch9', 'ch10', 'ch11', 'ch12', 'ch13', 'ch14', 'ch15'
    ];

    expectedHrefTargets.forEach((chId, idx) => {
      const link = links?.[idx];
      expect(link?.getAttribute('href')).toBe(`#${chId}`);
      expect(link?.getAttribute('data-target')).toBe(chId);
    });
  });

  it('renders Footer component with date and disclaimer', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer.page-footer');
    expect(footer).not.toBeNull();
    expect(footer?.textContent).toContain('2026年10月13日');
    expect(footer?.textContent).toContain('規格本文の全文は未確認です');
  });
});
