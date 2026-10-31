import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';
import Section5 from '../../app/iso-29119-1-2022-guide/Section5';

describe('ISO/IEC/IEEE 29119-1:2022 Category 6 (Section 5 - STEP 5)', () => {
  it('renders H2 and 6 H3s with correct IDs and texts', () => {
    const { container } = render(<Section5 />);
    const h2 = container.querySelector('h2#step-5テスト計画とテスト戦略42節');
    expect(h2?.textContent?.trim()).toBe('STEP 5：テスト計画とテスト戦略（4.2節）');

    const h3s = Array.from(container.querySelectorAll('h3'));
    expect(h3s.map(el => el.id)).toEqual([
      '5-1-リスクの2種類',
      '5-2-リスクベースドテストとは',
      '5-3-具体例リスク分析からテストの深さを決める学習用',
      '5-4-テスト戦略とテストアプローチ',
      '5-5-テスト戦略とテスト計画の違い整理',
      '5-6-42節の残り2項目'
    ]);
    expect(h3s.map(el => el.textContent?.trim())).toEqual([
      '5-1. リスクの2種類',
      '5-2. リスクベースドテストとは',
      '5-3. 具体例：リスク分析からテストの深さを決める（学習用）',
      '5-4. テスト戦略とテストアプローチ',
      '5-5. テスト戦略とテスト計画の違い（整理）',
      '5-6. 4.2節の残り2項目'
    ]);
  });

  it('renders 4 tables with exact contents', () => {
    const { container } = render(<Section5 />);
    const tables = Array.from(container.querySelectorAll('.table-scroll table'));
    expect(tables.length).toBe(4);

    // Table 1: 2 risks
    const t1Rows = Array.from(tables[0]?.querySelectorAll('tbody tr') || []);
    expect(t1Rows.length).toBe(2);
    expect(t1Rows[0]?.textContent).toContain('プロダクトリスク');
    expect(t1Rows[1]?.textContent).toContain('プロジェクトリスク');

    // Table 2: Risk analysis example
    const t2Rows = Array.from(tables[1]?.querySelectorAll('tbody tr') || []);
    expect(t2Rows.length).toBe(4);
    expect(t2Rows[0]?.textContent).toContain('決済処理');
    expect(t2Rows[0]?.textContent).toContain('高');

    // Table 3: Strategy vs Plan
    const t3Rows = Array.from(tables[2]?.querySelectorAll('tbody tr') || []);
    expect(t3Rows.length).toBe(3);
    expect(t3Rows[0]?.textContent).toContain('主な問い');

    // Table 4: Remaining 2 items
    const t4Rows = Array.from(tables[3]?.querySelectorAll('tbody tr') || []);
    expect(t4Rows.length).toBe(2);
    expect(t4Rows[0]?.textContent).toContain('4.2.5');
    expect(t4Rows[1]?.textContent).toContain('4.2.6');
  });

  it('renders DIAGRAM_07 and DIAGRAM_08 and note callout', () => {
    const { container } = render(<Section5 />);
    const mmd7 = container.querySelector('.mermaid-diagram#mmd07');
    expect(mmd7).not.toBeNull();

    const mmd8 = container.querySelector('.mermaid-diagram#mmd08');
    expect(mmd8).not.toBeNull();

    const callout = container.querySelector('.callout.callout-note');
    expect(callout).not.toBeNull();
    expect(callout?.querySelector('.callout-title')?.textContent?.trim()).toBe('ポイント');
  });
});

