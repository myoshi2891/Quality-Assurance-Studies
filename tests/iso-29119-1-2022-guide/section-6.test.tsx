import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';
import Section6 from '../../app/iso-29119-1-2022-guide/Section6';

describe('ISO/IEC/IEEE 29119-1:2022 Category 7 (Section 6 - STEP 6)', () => {
  it('renders H2 and 5 H3s with correct IDs and texts', () => {
    const { container } = render(<Section6 />);
    const h2 = container.querySelector('h2#step-6テストフレームワーク43節');
    expect(h2?.textContent?.trim()).toBe('STEP 6：テストフレームワーク（4.3節）');

    const h3s = Array.from(container.querySelectorAll('h3'));
    expect(h3s.map(el => el.id)).toEqual([
      '6-1-テストプロセスの3層モデル',
      '6-2-プロセスのインスタンス化とプロジェクトベース',
      '6-3-テスト文書3つのレベル',
      '6-4-43節のその他の項目',
      '6-5-メトリクスの例学習用'
    ]);
    expect(h3s.map(el => el.textContent?.trim())).toEqual([
      '6-1. テストプロセスの3層モデル',
      '6-2. プロセスの「インスタンス化」と「プロジェクトベース」',
      '6-3. テスト文書（3つのレベル）',
      '6-4. 4.3節のその他の項目',
      '6-5. メトリクスの例（学習用）'
    ]);
  });

  it('renders 4 tables covering 3-tier model, documents, other items, and metrics', () => {
    const { container } = render(<Section6 />);
    const tables = Array.from(container.querySelectorAll('.table-scroll table'));
    expect(tables.length).toBe(4);

    // Table 1: 3-tier model
    const t1Rows = Array.from(tables[0].querySelectorAll('tbody tr'));
    expect(t1Rows.length).toBe(3);
    expect(t1Rows[0].textContent).toContain('組織レベル');
    expect(t1Rows[1].textContent).toContain('テスト管理レベル');
    expect(t1Rows[2].textContent).toContain('動的テストレベル');

    // Table 2: 3 levels of documents
    const t2Rows = Array.from(tables[1].querySelectorAll('tbody tr'));
    expect(t2Rows.length).toBe(3);
    expect(t2Rows[0].textContent).toContain('テストポリシー');

    // Table 3: 4.3 other items
    const t3Rows = Array.from(tables[2].querySelectorAll('tbody tr'));
    expect(t3Rows.length).toBe(5);
    expect(t3Rows[0].textContent).toContain('4.3.3');
    expect(t3Rows[4].textContent).toContain('4.3.7');

    // Table 4: Metrics example
    const t4Rows = Array.from(tables[3].querySelectorAll('tbody tr'));
    expect(t4Rows.length).toBe(4);
    expect(t4Rows[0].textContent).toContain('進捗');
    expect(t4Rows[3].textContent).toContain('カバレッジ');
  });

  it('renders DIAGRAM_09 and DIAGRAM_10 and 2 callouts', () => {
    const { container } = render(<Section6 />);
    const mmd9 = container.querySelector('.mermaid-diagram#mmd09');
    expect(mmd9).not.toBeNull();

    const mmd10 = container.querySelector('.mermaid-diagram#mmd10');
    expect(mmd10).not.toBeNull();

    const calloutNote = container.querySelector('.callout.callout-note');
    expect(calloutNote).not.toBeNull();
    expect(calloutNote?.textContent).toContain('組織テストプラクティス');

    const calloutWarn = container.querySelector('.callout.callout-warn');
    expect(calloutWarn).not.toBeNull();
    expect(calloutWarn?.querySelector('.callout-title')?.textContent?.trim()).toBe('注意');
  });
});
