import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import Section0 from '../../app/iso-14496-22-2026-beginner-guide/Section0';
import Section1 from '../../app/iso-14496-22-2026-beginner-guide/Section1';

describe('ISO 14496-22:2026 Guide - Sections 0 & 1', () => {
  it('renders Section 0 with H2, tables, callout, why-note, and glossary', () => {
    const { container } = render(<Section0 />);
    const section = container.querySelector('section#ch0');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('0. このガイドの読み方と、調査の限界');

    // Callout & Why-note
    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('何を根拠に');
    const whyNote = section?.querySelector('.why-note');
    expect(whyNote?.textContent).toContain('なぜ最初に書くのか');

    // Tables
    const tables = section?.querySelectorAll('table');
    expect(tables?.length).toBe(2);
    expect(tables?.[0].textContent).toContain('区分');
    expect(tables?.[0].textContent).toContain('Microsoft OpenType 1.9.1 仕様書の記載');
    expect(tables?.[1].textContent).toContain('読み方の目安');
    expect(tables?.[1].textContent).toContain('1〜3');

    // Glossary
    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('OpenType');
    expect(glossary?.textContent).toContain('作業草案（Working Draft）');
  });

  it('renders Section 1 with H2, H3, callout, summary list, table, and glossary', () => {
    const { container } = render(<Section1 />);
    const section = container.querySelector('section#ch1');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('1. この規格を一言でいうと');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('規格の目的を1文で押さえます');

    const h3 = section?.querySelector('h3');
    expect(h3?.textContent).toContain('例え話：フォントファイルは「楽譜と演奏ルールの入った巻物」');

    // Table
    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    expect(table?.textContent).toContain('フォントの要素');
    expect(table?.textContent).toContain('cmap テーブル');
    expect(table?.textContent).toContain('GSUB/GPOS テーブル');

    // Glossary
    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('グリフ');
    expect(glossary?.textContent).toContain('シェーピング');
  });
});
