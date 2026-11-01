import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';
import Section8 from '../../app/iso-29119-1-2022-guide/Section8';
import Section9 from '../../app/iso-29119-1-2022-guide/Section9';

describe('ISO/IEC/IEEE 29119-1:2022 Category 9 (STEP 8 & STEP 9)', () => {
  describe('Section 8 (STEP 8)', () => {
    it('renders H2 and 4 H3s with correct IDs and texts', () => {
      const { container } = render(<Section8 />);
      const h2 = container.querySelector('h2#step-8プロジェクト管理報告インシデント管理4547節');
      expect(h2?.textContent?.trim()).toBe('STEP 8：プロジェクト管理・報告・インシデント管理（4.5〜4.7節）');

      const h3s = Array.from(container.querySelectorAll('h3'));
      expect(h3s.map(el => el.id)).toEqual([
        '8-1-各節の概要',
        '8-2-インシデントとは',
        '8-3-インシデントのライフサイクル典型例',
        '8-4-良いインシデント報告の項目学習用チェックリスト'
      ]);
    });

    it('renders 2 tables and DIAGRAM_16 container', () => {
      const { container } = render(<Section8 />);
      const tables = Array.from(container.querySelectorAll('.table-scroll table'));
      expect(tables.length).toBe(2);

      expect(tables[0]?.textContent).toContain('4.5');
      expect(tables[0]?.textContent).toContain('プロジェクト管理');
      expect(tables[1]?.textContent).toContain('再現手順');

      const mmd = container.querySelector('.mermaid-diagram#mmd16');
      expect(mmd).not.toBeNull();
    });
  });

  describe('Section 9 (STEP 9)', () => {
    it('renders H2, 3 H3s and 2 H4s with correct IDs and texts', () => {
      const { container } = render(<Section9 />);
      const h2 = container.querySelector('h2#step-9システム特性とテストの役割附属書ab');
      expect(h2?.textContent?.trim()).toBe('STEP 9：システム特性とテストの役割（附属書A・B）');

      const h3s = Array.from(container.querySelectorAll('h3'));
      expect(h3s.map(el => el.id)).toEqual([
        '9-1-附属書aシステム特性とテスト例',
        '9-2-システム特性から戦略を考える流れ',
        '9-3-附属書bテストの役割'
      ]);

      const h4s = Array.from(container.querySelectorAll('h4'));
      expect(h4s.map(el => el.id)).toEqual([
        '附属書aで扱われる13特性',
        'ai関連の用語が増えた2022年版の用語節'
      ]);
    });

    it('renders 3 tables covering 13 characteristics, AI terms, and test roles', () => {
      const { container } = render(<Section9 />);
      const tables = Array.from(container.querySelectorAll('.table-scroll table'));
      expect(tables.length).toBe(3);

      expect(tables[0]?.textContent).toContain('人工知能（AI）');
      expect(tables[1]?.textContent).toContain('神経網');
      expect(tables[2]?.textContent).toContain('責任の明確化');
    });

    it('renders DIAGRAM_17 container and callout', () => {
      const { container } = render(<Section9 />);
      const mmd = container.querySelector('.mermaid-diagram#mmd17');
      expect(mmd).not.toBeNull();

      const callout = container.querySelector('.callout.callout-note');
      expect(callout).not.toBeNull();
      expect(callout?.querySelector('.callout-title')?.textContent?.trim()).toBe('ポイント');
    });
  });
});
