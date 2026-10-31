import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';
import Section7 from '../../app/iso-29119-1-2022-guide/Section7';

describe('ISO/IEC/IEEE 29119-1:2022 Category 8 (Section 7 - STEP 7)', () => {
  it('renders H2 and 11 H3s with correct IDs and texts', () => {
    const { container } = render(<Section7 />);
    const h2 = container.querySelector('h2#step-7テスト設計と実行44節');
    expect(h2?.textContent?.trim()).toBe('STEP 7：テスト設計と実行（4.4節）');

    const h3s = Array.from(container.querySelectorAll('h3'));
    expect(h3s.map(el => el.id)).toEqual([
      '7-1-テストモデルから実行まで概念図',
      '7-2-テストモデルとモデルベーステスト441442',
      '7-3-スクリプト化テストと探索的テスト443',
      '7-4-テスト技法3つの分類と代表例444',
      '7-5-経験ベースのテスト445',
      '7-6-再テストと回帰テスト446',
      '7-7-手動テストと自動テスト447継続的テスト448',
      '7-8-バックトゥバックテスト449',
      '7-9-abテスト4410',
      '7-10-数学ベースのテストとファズテスト4411',
      '7-11-テスト環境とテストデータ管理44124413'
    ]);
  });

  it('renders 14 tables across various testing techniques', () => {
    const { container } = render(<Section7 />);
    const tables = Array.from(container.querySelectorAll('.table-scroll table'));
    expect(tables.length).toBe(14);

    // Table 1: Model-based testing
    expect(tables[0]?.textContent).toContain('テストモデル');
    expect(tables[0]?.textContent).toContain('モデルベーステスト（MBT）');

    // Table 2: Scripted vs Exploratory
    expect(tables[1]?.textContent).toContain('スクリプト化テスト');
    expect(tables[1]?.textContent).toContain('探索的テスト');

    // Check presence of Equivalence Partitioning, Decision Table, Pairwise, MC/DC, Metamorphic tables
    const allTablesText = tables.map(t => t.textContent).join(' ');
    expect(allTablesText).toContain('同値分割');
    expect(allTablesText).toContain('決定表');
    expect(allTablesText).toContain('ペアワイズ');
    expect(allTablesText).toContain('MC/DC');
    expect(allTablesText).toContain('メタモルフィック');
  });

  it('renders 5 Mermaid diagram containers (DIAGRAM_11 through DIAGRAM_15)', () => {
    const { container } = render(<Section7 />);
    const mmds = Array.from(container.querySelectorAll('.mermaid-diagram'));
    expect(mmds.length).toBe(5);

    const mmdIds = mmds.map(el => el.id);
    expect(mmdIds).toContain('mmd11');
    expect(mmdIds).toContain('mmd12');
    expect(mmdIds).toContain('mmd13');
    expect(mmdIds).toContain('mmd14');
    expect(mmdIds).toContain('mmd15');
  });
});
