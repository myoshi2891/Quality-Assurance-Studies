import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import Section4 from '../../app/iso-14496-22-2026-beginner-guide/Section4';
import Section5 from '../../app/iso-14496-22-2026-beginner-guide/Section5';

describe('ISO 14496-22:2026 Guide - Sections 4 & 5', () => {
  it('renders Section 4 with H2, H3, table, DIAGRAM_03, callout, why-note, and glossary', () => {
    const { container } = render(<Section4 />);
    const section = container.querySelector('section#ch4');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('4. ISO 規格と OpenType 仕様の関係');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('ISO 規格と Microsoft 仕様書のどちらをどう読むべきか');

    const whyNote = section?.querySelector('.why-note');
    expect(whyNote?.textContent).toContain('なぜ2つの文書を行き来するのか');

    const h3 = section?.querySelector('h3');
    expect(h3?.textContent).toContain('対応関係のまとめ');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    expect(table?.textContent).toContain('ISO/IEC 14496-22');
    expect(table?.textContent).toContain('Microsoft OpenType 仕様書');

    const diagram = section?.querySelector('.mermaid-diagram');
    expect(diagram).not.toBeNull();

    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('作業草案（WD）');
    expect(glossary?.textContent).toContain('スクリプトタグ');
  });

  it('renders Section 5 with H2, 6 H3s, 4 tables, DIAGRAM_04, Python code block, callout, why-notes, and glossary', () => {
    const { container } = render(<Section5 />);
    const section = container.querySelector('section#ch5');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('5. フォントファイルの構造：sfnt コンテナを読んでみる');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('フォントファイルをバイナリとして開いたときの先頭');

    const diagram = section?.querySelector('.mermaid-diagram');
    expect(diagram).not.toBeNull();

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(6);
    expect(h3s?.[0].textContent).toContain('5-1. ファイル先頭のテーブルディレクトリ');
    expect(h3s?.[1].textContent).toContain('5-2. 各テーブルの目次（TableRecord）');
    expect(h3s?.[2].textContent).toContain('5-3. 実際に Python で先頭12バイトを読んでみる');
    expect(h3s?.[3].textContent).toContain('5-4. TTC（フォントコレクション）の場合');
    expect(h3s?.[4].textContent).toContain('5-5. sfntVersion による TrueType と CFF の区別');
    expect(h3s?.[5].textContent).toContain('5-6. バイナリの読み方の共通ルール');

    // 4 tables
    const tables = section?.querySelectorAll('table');
    expect(tables?.length).toBe(4);
    expect(tables?.[0].textContent).toContain('numTables');
    expect(tables?.[1].textContent).toContain('tableTag');
    expect(tables?.[2].textContent).toContain('ttcTag');
    expect(tables?.[3].textContent).toContain('0x00010000');

    // Python code block with syntax tokens
    const pre = section?.querySelector('pre');
    expect(pre).not.toBeNull();
    const code = pre?.querySelector('code');
    expect(code?.textContent).toContain('import struct');
    expect(pre?.querySelector('.tok-k')).not.toBeNull();
    expect(pre?.querySelector('.tok-s')).not.toBeNull();
    expect(pre?.querySelector('.tok-c')).not.toBeNull();

    // Glossary
    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('ビッグエンディアン');
    expect(glossary?.textContent).toContain('4文字タグ（Tag）');
    expect(glossary?.textContent).toContain('パディング');
  });
});
