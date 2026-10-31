import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import Section2 from '../../app/iso-14496-22-2026-beginner-guide/Section2';
import Section3 from '../../app/iso-14496-22-2026-beginner-guide/Section3';

describe('ISO 14496-22:2026 Guide - Sections 2 & 3', () => {
  it('renders Section 2 with H2, H3, DIAGRAM_01, callout, why-note, and glossary', () => {
    const { container } = render(<Section2 />);
    const section = container.querySelector('section#ch2');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('2. なぜ必要なのか：TrueType と PostScript の統合の歴史');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('2つの技術の組み合わせ');

    const whyNote = section?.querySelector('.why-note');
    expect(whyNote?.textContent).toContain('なぜ歴史を先に見るのか');

    const h3 = section?.querySelector('h3');
    expect(h3?.textContent).toContain('日本の読者にとっての意味');

    // Mermaid container
    const diagram = section?.querySelector('.mermaid-diagram');
    expect(diagram).not.toBeNull();

    // Glossary
    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('TrueType');
    expect(glossary?.textContent).toContain('CFF（Compact Font Format）');
    expect(glossary?.textContent).toContain('sfnt');
    expect(glossary?.textContent).toContain('拡張子');
  });

  it('renders Section 3 with H2, 2 H3s, table, DIAGRAM_02, callout, why-note, and glossary', () => {
    const { container } = render(<Section3 />);
    const section = container.querySelector('section#ch3');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('3. 規格の基本情報と改訂の流れ');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('版・日付・ページ数');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    expect(table?.textContent).toContain('ISO/IEC 14496-22:2026');
    expect(table?.textContent).toContain('第5版');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toContain('3-1. 基本情報');
    expect(h3s?.[1].textContent).toContain('3-2. 第5版ができるまで');

    const diagram = section?.querySelector('.mermaid-diagram');
    expect(diagram).not.toBeNull();

    const whyNote = section?.querySelector('.why-note');
    expect(whyNote?.textContent).toContain('なぜ表にするのか');

    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('JTC 1/SC 29');
    expect(glossary?.textContent).toContain('段階コード');
    expect(glossary?.textContent).toContain('Amendment（Amd）');
    expect(glossary?.textContent).toContain('廃止（Withdrawn）');
  });
});
