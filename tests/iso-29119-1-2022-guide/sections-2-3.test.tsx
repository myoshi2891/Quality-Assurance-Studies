import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';
import Section2 from '../../app/iso-29119-1-2022-guide/Section2';
import Section3 from '../../app/iso-29119-1-2022-guide/Section3';

describe('ISO/IEC/IEEE 29119-1:2022 Category 4 (STEP 2 & STEP 3)', () => {
  describe('Section 2 (STEP 2)', () => {
    it('renders H2 and H3 with correct IDs and texts', () => {
      const { container } = render(<Section2 />);
      const h2 = container.querySelector('h2#step-22013年版からの変更点');
      expect(h2?.textContent?.trim()).toBe('STEP 2：2013年版からの変更点');

      const h3 = container.querySelector('h3#変更の読み取り方図解');
      expect(h3?.textContent?.trim()).toBe('変更の読み取り方（図解）');
    });

    it('renders 8-row change comparison table', () => {
      const { container } = render(<Section2 />);
      const table = container.querySelector('.table-scroll table');
      expect(table).not.toBeNull();
      const rows = Array.from(table?.querySelectorAll('tbody tr') || []);
      expect(rows.length).toBe(8);
      expect(rows[0].textContent).toContain('Concepts and definitions');
      expect(rows[0].textContent).toContain('General concepts');
      expect(rows[2].textContent).toContain('テストサブプロセス');
      expect(rows[7].textContent).toContain('附属書A');
    });

    it('renders DIAGRAM_03 container', () => {
      const { container } = render(<Section2 />);
      const mmd = container.querySelector('.mermaid-diagram#mmd03');
      expect(mmd).not.toBeNull();
    });
  });

  describe('Section 3 (STEP 3)', () => {
    it('renders H2 and H3s with correct IDs and texts', () => {
      const { container } = render(<Section3 />);
      const h2 = container.querySelector('h2#step-3規格の構成を地図で把握する');
      expect(h2?.textContent?.trim()).toBe('STEP 3：規格の構成を地図で把握する');

      const h3s = Array.from(container.querySelectorAll('h3'));
      expect(h3s.map(el => el.id)).toEqual([
        '3-1-章立て2022年版',
        '3-2-構成図'
      ]);
      expect(h3s.map(el => el.textContent?.trim())).toEqual([
        '3-1. 章立て（2022年版）',
        '3-2. 構成図'
      ]);
    });

    it('renders 10-row chapter map table', () => {
      const { container } = render(<Section3 />);
      const table = container.querySelector('.table-scroll table');
      expect(table).not.toBeNull();
      const rows = Array.from(table?.querySelectorAll('tbody tr') || []);
      expect(rows.length).toBe(10);
      expect(rows[0].textContent).toContain('1 適用範囲');
      expect(rows[1].textContent).toContain('2 規範的参照');
      expect(rows[2].textContent).toContain('3 用語と定義');
      expect(rows[8].textContent).toContain('附属書A');
      expect(rows[9].textContent).toContain('附属書B');
    });

    it('renders DIAGRAM_04 and note callout', () => {
      const { container } = render(<Section3 />);
      const mmd = container.querySelector('.mermaid-diagram#mmd04');
      expect(mmd).not.toBeNull();

      const callout = container.querySelector('.callout.callout-note');
      expect(callout).not.toBeNull();
      expect(callout?.querySelector('.callout-title')?.textContent?.trim()).toBe('ポイント');
      expect(callout?.textContent).toContain('ISO/IEC/IEEE 29119-1:2022');
    });
  });
});
