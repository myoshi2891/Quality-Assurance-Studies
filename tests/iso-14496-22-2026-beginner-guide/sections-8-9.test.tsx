import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import Section8 from '../../app/iso-14496-22-2026-beginner-guide/Section8';
import Section9 from '../../app/iso-14496-22-2026-beginner-guide/Section9';

describe('ISO 14496-22:2026 Guide - Sections 8 & 9', () => {
  it('renders Section 8 with H2, 3 H3s, 2 tables, DIAGRAM_07, callout, why-note, and glossary', () => {
    const { container } = render(<Section8 />);
    const section = container.querySelector('section#ch8');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('8. 高度な組版：GSUB と GPOS をもう少し詳しく');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('組版のルールブック');

    const whyNote = section?.querySelector('.why-note');
    expect(whyNote?.textContent).toContain('なぜ取り上げるのか');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(3);
    expect(h3s?.[0].textContent).toContain('8-1. GSUB と GPOS の共通の骨組み');
    expect(h3s?.[1].textContent).toContain('8-2. 処理の種類の数');
    expect(h3s?.[2].textContent).toContain('8-3. 日本語に関係する機能タグの例');

    const diagram = section?.querySelector('.mermaid-diagram');
    expect(diagram).not.toBeNull();

    // 2 tables
    const tables = section?.querySelectorAll('table');
    expect(tables?.length).toBe(2);
    expect(tables?.[0].textContent).toContain('GSUB');
    expect(tables?.[0].textContent).toContain('GPOS');
    expect(tables?.[0].textContent).toContain('GDEF');
    expect(tables?.[1].textContent).toContain('vert');
    expect(tables?.[1].textContent).toContain('jp04');

    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('ScriptList');
    expect(glossary?.textContent).toContain('Feature（機能）');
    expect(glossary?.textContent).toContain('Lookup（ルックアップ）');
  });

  it('renders Section 9 with H2, 5 H3s, 2 tables, DIAGRAM_08, callout, why-notes, and glossary', () => {
    const { container } = render(<Section9 />);
    const section = container.querySelector('section#ch9');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('9. 可変フォント（OpenType Font Variations）');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('可変フォント');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(5);
    expect(h3s?.[0].textContent).toContain('9-1. 例え話：音量つまみ');
    expect(h3s?.[1].textContent).toContain('9-2. 仕組みの骨組み');
    expect(h3s?.[2].textContent).toContain('9-3. 値を計算する例');
    expect(h3s?.[3].textContent).toContain('9-4. 可変フォントで必要になる追加テーブル');
    expect(h3s?.[4].textContent).toContain('9-5. 来歴');

    const diagram = section?.querySelector('.mermaid-diagram');
    expect(diagram).not.toBeNull();

    // 2 tables
    const tables = section?.querySelectorAll('table');
    expect(tables?.length).toBe(2);
    expect(tables?.[0].textContent).toContain('計算の手順');
    expect(tables?.[1].textContent).toContain('TrueType 輪郭');
    expect(tables?.[1].textContent).toContain('CFF2 輪郭');

    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('軸（axis）');
    expect(glossary?.textContent).toContain('デルタ（差分）');
    expect(glossary?.textContent).toContain('named instance');
  });
});
