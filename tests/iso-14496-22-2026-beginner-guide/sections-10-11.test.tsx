import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import Section10 from '../../app/iso-14496-22-2026-beginner-guide/Section10';
import Section11 from '../../app/iso-14496-22-2026-beginner-guide/Section11';

describe('ISO 14496-22:2026 Guide - Sections 10 & 11', () => {
  it('renders Section 10 with H2, H3, table, callout, why-note, and glossary', () => {
    const { container } = render(<Section10 />);
    const section = container.querySelector('section#ch10');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('10. カラーフォントと絵文字');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('色や グラデーションを持つ文字');

    const whyNote = section?.querySelector('.why-note');
    expect(whyNote?.textContent).toContain('なぜ取り上げるのか');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    expect(table?.textContent).toContain('COLR + CPAL');
    expect(table?.textContent).toContain('sbix');

    const h3 = section?.querySelector('h3');
    expect(h3?.textContent).toContain('COLRv1 の位置づけ');

    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('COLR / CPAL');
    expect(glossary?.textContent).toContain('グラデーション');
    expect(glossary?.textContent).toContain('Web フォント');
  });

  it('renders Section 11 with H2, 3 H3s, DIAGRAM_09, callout, why-note, and glossary', () => {
    const { container } = render(<Section11 />);
    const section = container.querySelector('section#ch11');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('11. 日本語の読者に関係するポイント');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('日本語環境でフォントを扱うときに特に重要な');

    const whyNote = section?.querySelector('.why-note');
    expect(whyNote?.textContent).toContain('なぜ日本語に注目するのか');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s).toBeDefined();
    expect(h3s!.length).toBe(3);
    expect(h3s![0]!.textContent).toContain('11-1. フォントコレクション（.ttc / .otc）で漢字を共有する');
    expect(h3s![1]!.textContent).toContain('11-2. 縦書き');
    expect(h3s![2]!.textContent).toContain('11-3. 字形の切り替え');

    const diagram = section?.querySelector('.mermaid-diagram');
    expect(diagram).not.toBeNull();

    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('フォントコレクション');
    expect(glossary?.textContent).toContain('縦書き');
    expect(glossary?.textContent).toContain('VORG');
    expect(glossary?.textContent).toContain('字形');
  });
});

