import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';
import Section4 from '../../app/iso-29119-1-2022-guide/Section4';

describe('ISO/IEC/IEEE 29119-1:2022 Category 5 (Section 4 - STEP 4)', () => {
  it('renders H2 and H3s with correct IDs and texts', () => {
    const { container } = render(<Section4 />);
    const h2 = container.querySelector('h2#step-4ソフトウェアテストの基本概念41節');
    expect(h2?.textContent?.trim()).toBe('STEP 4：ソフトウェアテストの基本概念（4.1節）');

    const h3s = Array.from(container.querySelectorAll('h3'));
    expect(h3s.map(el => el.id)).toEqual([
      '4-1-10個の基本概念を一覧で理解する',
      '4-2-静的テストと動的テスト',
      '4-3-なぜ網羅テストは不可能か計算例',
      '4-4-テストベースとテストオラクルの関係'
    ]);
    expect(h3s.map(el => el.textContent?.trim())).toEqual([
      '4-1. 10個の基本概念を一覧で理解する',
      '4-2. 静的テストと動的テスト',
      '4-3. なぜ網羅テストは不可能か（計算例）',
      '4-4. テストベースとテストオラクルの関係'
    ]);
  });

  it('renders 10 concepts table and calculation example table', () => {
    const { container } = render(<Section4 />);
    const tables = Array.from(container.querySelectorAll('.table-scroll table'));
    expect(tables.length).toBe(2);

    // Table 1: 10 concepts
    const t1Rows = Array.from(tables[0]?.querySelectorAll('tbody tr') || []);
    expect(t1Rows.length).toBe(10);
    expect(t1Rows[0]?.textContent).toContain('4.1.2');
    expect(t1Rows[0]?.textContent).toContain('品質マネジメント');
    expect(t1Rows[9]?.textContent).toContain('4.1.11');
    expect(t1Rows[9]?.textContent).toContain('テスト独立性');

    // Table 2: Exhaustive testing calculation
    const t2Rows = Array.from(tables[1]?.querySelectorAll('tbody tr') || []);
    expect(t2Rows.length).toBe(4);
    expect(t2Rows[1]?.textContent).toContain('2の64乗');
    expect(t2Rows[3]?.textContent).toContain('約 585 年');
  });

  it('renders DIAGRAM_05 and DIAGRAM_06 containers and note callout', () => {
    const { container } = render(<Section4 />);
    const mmd5 = container.querySelector('.mermaid-diagram#mmd05');
    expect(mmd5).not.toBeNull();

    const mmd6 = container.querySelector('.mermaid-diagram#mmd06');
    expect(mmd6).not.toBeNull();

    const callout = container.querySelector('.callout.callout-note');
    expect(callout).not.toBeNull();
    expect(callout?.querySelector('.callout-title')?.textContent?.trim()).toBe('補足');
  });
});

