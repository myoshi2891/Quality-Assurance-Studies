import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import Section6 from '../../app/iso-14496-22-2026-beginner-guide/Section6';
import Section7 from '../../app/iso-14496-22-2026-beginner-guide/Section7';

describe('ISO 14496-22:2026 Guide - Sections 6 & 7', () => {
  it('renders Section 6 with H2, 3 H3s, 2 tables, DIAGRAM_05, callout, why-notes, and glossary', () => {
    const { container } = render(<Section6 />);
    const section = container.querySelector('section#ch6');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('6. テーブルの全体地図');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('テーブルを「役割ごと」に分けた地図');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(3);
    expect(h3s?.[0].textContent).toContain('6-1. 必須テーブル');
    expect(h3s?.[1].textContent).toContain('6-2. 役割別のグループ');
    expect(h3s?.[2].textContent).toContain('6-3. グリフのアウトライン');

    // 2 tables
    const tables = section?.querySelectorAll('table');
    expect(tables?.length).toBe(2);
    expect(tables?.[0].textContent).toContain('cmap');
    expect(tables?.[0].textContent).toContain('Character to glyph mapping');
    expect(tables?.[1].textContent).toContain('TrueType');
    expect(tables?.[1].textContent).toContain('CFF2');

    const diagram = section?.querySelector('.mermaid-diagram');
    expect(diagram).not.toBeNull();

    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('GSUB');
    expect(glossary?.textContent).toContain('GPOS');
    expect(glossary?.textContent).toContain('fvar');
    expect(glossary?.textContent).toContain('COLR / CPAL');
  });

  it('renders Section 7 with H2, 3 H3s, table, DIAGRAM_06, callout, why-notes, and glossary', () => {
    const { container } = render(<Section7 />);
    const section = container.querySelector('section#ch7');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('7. 文字が画面に出るまで：表示パイプライン');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('画面のピクセルになるまで');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(3);
    expect(h3s?.[0].textContent).toContain('7-1. 全体の流れ');
    expect(h3s?.[1].textContent).toContain('7-2. 各ステップで何が起きているか');
    expect(h3s?.[2].textContent).toContain('7-3. 「規格が定めること」と「アプリが決めること」');

    const diagram = section?.querySelector('.mermaid-diagram');
    expect(diagram).not.toBeNull();

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    expect(table?.textContent).toContain('テーブルのバイト配置');
    expect(table?.textContent).toContain('GSUB/GPOS の記述方法');

    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('Glyph ID');
    expect(glossary?.textContent).toContain('合字（リガチャ）');
    expect(glossary?.textContent).toContain('カーニング');
    expect(glossary?.textContent).toContain('ラスタライズ');
    expect(glossary?.textContent).toContain('シェーピングエンジン');
  });
});
