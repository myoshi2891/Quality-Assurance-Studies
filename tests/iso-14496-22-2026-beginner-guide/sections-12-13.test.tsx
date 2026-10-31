import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import Section12 from '../../app/iso-14496-22-2026-beginner-guide/Section12';
import Section13 from '../../app/iso-14496-22-2026-beginner-guide/Section13';

describe('ISO 14496-22:2026 Guide - Sections 12 & 13', () => {
  it('renders Section 12 with H2, 4 H3s, 2 tables, DIAGRAM_10, callout, why-note, and glossary', () => {
    const { container } = render(<Section12 />);
    const section = container.querySelector('section#ch12');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('12. 実装の現状：誰がこの規格を動かしているのか');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('著名な開発者・開発組織の公開情報');

    const whyNote = section?.querySelector('.why-note');
    expect(whyNote?.textContent).toContain('なぜ実装を見るのか');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s).toBeDefined();
    expect(h3s!.length).toBe(4);
    expect(h3s![0]!.textContent).toContain('12-1. HarfBuzz');
    expect(h3s![1]!.textContent).toContain('12-2. Fontations と Skrifa');
    expect(h3s![2]!.textContent).toContain('12-3. Chrome が FreeType から Fontations へ移行した経緯');
    expect(h3s![3]!.textContent).toContain('12-4. 実装の地図');

    const diagram = section?.querySelector('.mermaid-diagram');
    expect(diagram).not.toBeNull();

    const tables = section?.querySelectorAll('table');
    expect(tables).toBeDefined();
    expect(tables!.length).toBe(2);
    expect(tables![0]!.textContent).toContain('font-types');
    expect(tables![0]!.textContent).toContain('skrifa');
    expect(tables![1]!.textContent).toContain('ファイル解析');
    expect(tables![1]!.textContent).toContain('シェーピング');

    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('HarfBuzz');
    expect(glossary?.textContent).toContain('Fontations');
    expect(glossary?.textContent).toContain('FreeType');
    expect(glossary?.textContent).toContain('メモリ安全性');
  });

  it('renders Section 13 with H2, 3 H3s, table, callout, why-note, and glossary', () => {
    const { container } = render(<Section13 />);
    const section = container.querySelector('section#ch13');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('13. QA・テスト観点：フォント対応を検証するには');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('QA エンジニアの視点');

    const whyNote = section?.querySelector('.why-note');
    expect(whyNote?.textContent).toContain('なぜこの章を入れるのか');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s).toBeDefined();
    expect(h3s!.length).toBe(3);
    expect(h3s![0]!.textContent).toContain('13-1. パイプライン段階別のテスト観点');
    expect(h3s![1]!.textContent).toContain('13-2. セキュリティ・堅牢性のテスト観点');
    expect(h3s![2]!.textContent).toContain('13-3. 回帰テストの比較方法');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    expect(table?.textContent).toContain('ファイル読み込み');
    expect(table?.textContent).toContain('GSUB');
    expect(table?.textContent).toContain('可変フォント');

    const ol = section?.querySelector('ol');
    expect(ol).not.toBeNull();
    expect(ol?.textContent).toContain('壊れたフォント入力');

    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('豆腐');
    expect(glossary?.textContent).toContain('回帰テスト');
    expect(glossary?.textContent).toContain('堅牢性');
    expect(glossary?.textContent).toContain('画素比較');
  });
});

