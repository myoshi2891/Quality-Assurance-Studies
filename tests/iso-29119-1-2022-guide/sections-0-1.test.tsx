import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';
import Section0 from '../../app/iso-29119-1-2022-guide/Section0';
import Section1 from '../../app/iso-29119-1-2022-guide/Section1';

// Mock Mermaid component
declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var mockMermaidCalls: any[];
}
globalThis.mockMermaidCalls = [];

describe('ISO/IEC/IEEE 29119-1:2022 Category 3 (STEP 0 & STEP 1)', () => {
  describe('Section 0 (STEP 0)', () => {
    it('renders H2 and H3s with correct IDs and texts', () => {
      const { container } = render(<Section0 />);
      const h2 = container.querySelector('h2#step-0このガイドの使い方と前提');
      expect(h2?.textContent?.trim()).toBe('STEP 0：このガイドの使い方と前提');

      const h3s = Array.from(container.querySelectorAll('h3'));
      expect(h3s.map(el => el.id)).toEqual([
        '0-1-学習ロードマップ',
        '0-2-このガイドの根拠と限界重要'
      ]);
      expect(h3s.map(el => el.textContent?.trim())).toEqual([
        '0-1. 学習ロードマップ',
        '0-2. このガイドの根拠と限界（重要）'
      ]);
    });

    it('renders DIAGRAM_01 container and table', () => {
      const { container } = render(<Section0 />);
      const mmd = container.querySelector('.mermaid-diagram#mmd01');
      expect(mmd).not.toBeNull();

      const table = container.querySelector('.table-scroll table');
      expect(table).not.toBeNull();
      const rows = Array.from(table?.querySelectorAll('tbody tr') || []);
      expect(rows.length).toBe(7);
      expect(rows[0].textContent).toContain('規格本文の入手性');
      expect(rows[0].textContent).toContain('無償提供');
    });

    it('renders practice callout', () => {
      const { container } = render(<Section0 />);
      const callout = container.querySelector('.callout.callout-practice');
      expect(callout).not.toBeNull();
      expect(callout?.querySelector('.callout-title')?.textContent?.trim()).toBe('学習のヒント');
      expect(callout?.textContent).toContain('情報提供（informative）');
    });
  });

  describe('Section 1 (STEP 1)', () => {
    it('renders H2 and H3s with correct IDs and texts', () => {
      const { container } = render(<Section1 />);
      const h2 = container.querySelector('h2#step-1規格の全体像');
      expect(h2?.textContent?.trim()).toBe('STEP 1：規格の全体像');

      const h3s = Array.from(container.querySelectorAll('h3'));
      expect(h3s.map(el => el.id)).toEqual([
        '1-1-一言でいうと',
        '1-2-基本情報',
        '1-3-29119シリーズの中での位置付け',
        '1-4-他の規格との関係'
      ]);
      expect(h3s.map(el => el.textContent?.trim())).toEqual([
        '1-1. 一言でいうと',
        '1-2. 基本情報',
        '1-3. 29119シリーズの中での位置付け',
        '1-4. 他の規格との関係'
      ]);
    });

    it('renders DIAGRAM_02 and 3 tables', () => {
      const { container } = render(<Section1 />);
      const mmd = container.querySelector('.mermaid-diagram#mmd02');
      expect(mmd).not.toBeNull();

      const tables = Array.from(container.querySelectorAll('.table-scroll table'));
      expect(tables.length).toBe(3);

      // Table 1: Basic info
      const t1Rows = Array.from(tables[0].querySelectorAll('tbody tr'));
      expect(t1Rows.length).toBe(11);
      expect(t1Rows[0].textContent).toContain('ISO/IEC/IEEE 29119-1:2022');

      // Table 2: 29119 series
      const t2Rows = Array.from(tables[1].querySelectorAll('tbody tr'));
      expect(t2Rows.length).toBe(6);
      expect(t2Rows[0].textContent).toContain('Part 1');

      // Table 3: Related standards
      const t3Rows = Array.from(tables[2].querySelectorAll('tbody tr'));
      expect(t3Rows.length).toBe(4);
      expect(t3Rows[0].textContent).toContain('12207 / 15288');
    });

    it('renders warn callout', () => {
      const { container } = render(<Section1 />);
      const callout = container.querySelector('.callout.callout-warn');
      expect(callout).not.toBeNull();
      expect(callout?.querySelector('.callout-title')?.textContent?.trim()).toBe('よくある誤解');
      expect(callout?.textContent).toContain('テーラリング');
    });
  });
});
