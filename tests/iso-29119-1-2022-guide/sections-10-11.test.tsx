import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';
import Section10 from '../../app/iso-29119-1-2022-guide/Section10';
import Section11 from '../../app/iso-29119-1-2022-guide/Section11';

describe('ISO/IEC/IEEE 29119-1:2022 Category 10 (STEP 10 & STEP 11)', () => {
  describe('Section 10 (STEP 10)', () => {
    it('renders H2 and 3 H3s with correct IDs and texts', () => {
      const { container } = render(<Section10 />);
      const h2 = container.querySelector('h2#step-10実務への適用手順');
      expect(h2?.textContent?.trim()).toBe('STEP 10：実務への適用手順');

      const h3s = Array.from(container.querySelectorAll('h3'));
      expect(h3s.map(el => el.id)).toEqual([
        '10-1-導入ステップ',
        '10-2-現場での使い方の指針',
        '10-3-初学者が最初にやるべき3つのこと'
      ]);
    });

    it('renders DIAGRAM_18 container and 2 tables', () => {
      const { container } = render(<Section10 />);
      const mmd = container.querySelector('.mermaid-diagram#mmd18');
      expect(mmd).not.toBeNull();

      const tables = Array.from(container.querySelectorAll('.table-scroll table'));
      expect(tables.length).toBe(2);
      expect(tables[0].textContent).toContain('場面');
      expect(tables[0].textContent).toContain('活かし方');
      expect(tables[1].textContent).toContain('テストアプローチ表');
      expect(tables[1].textContent).toContain('用語の統一');
    });
  });

  describe('Section 11 (STEP 11)', () => {
    it('renders H2 and 3 H3s with correct IDs and texts', () => {
      const { container } = render(<Section11 />);
      const h2 = container.querySelector('h2#step-11この規格をめぐる議論を知っておく');
      expect(h2?.textContent?.trim()).toBe('STEP 11：この規格をめぐる議論を知っておく');

      const h3s = Array.from(container.querySelectorAll('h3'));
      expect(h3s.map(el => el.id)).toEqual([
        '11-1-議論の概要',
        '11-2-2022年版の読み方への示唆',
        '11-3-istqbとの関係'
      ]);
    });

    it('renders 2 tables covering controversy and 2022 edition points, and warn callout', () => {
      const { container } = render(<Section11 />);
      const tables = Array.from(container.querySelectorAll('.table-scroll table'));
      expect(tables.length).toBe(2);
      expect(tables[0].textContent).toContain('コンテキスト駆動テスト');
      expect(tables[1].textContent).toContain('探索的テスト');
      expect(container.textContent).toContain('ISTQB');

      const callout = container.querySelector('.callout.callout-warn');
      expect(callout).not.toBeNull();
      expect(callout?.querySelector('.callout-title')?.textContent?.trim()).toBe('重要');
    });
  });
});
