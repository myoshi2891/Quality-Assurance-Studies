import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';
import Section12 from '../../app/iso-29119-1-2022-guide/Section12';
import Section13 from '../../app/iso-29119-1-2022-guide/Section13';
import Section14 from '../../app/iso-29119-1-2022-guide/Section14';

describe('ISO/IEC/IEEE 29119-1:2022 Category 11 (STEP 12, Glossary, Sources)', () => {
  describe('Section 12 (STEP 12)', () => {
    it('renders H2 and 2 details accordion elements with 10 questions and 10 answers', () => {
      const { container } = render(<Section12 />);
      const h2 = container.querySelector('h2#step-12理解度チェック10問');
      expect(h2?.textContent?.trim()).toBe('STEP 12：理解度チェック（10問）');

      const details = Array.from(container.querySelectorAll('details'));
      expect(details.length).toBe(2);

      const summaries = details.map(d => d.querySelector('summary')?.textContent?.trim());
      expect(summaries).toEqual(['問題を表示', '解答例を表示']);

      const lis = Array.from(container.querySelectorAll('ol li'));
      expect(lis.length).toBe(20);
      expect(lis[0]?.textContent).toContain('ISO/IEC/IEEE 29119-1:2022');
      expect(lis[10]?.textContent).toContain('情報提供（informative）');
    });
  });

  describe('Section 13 (Glossary)', () => {
    it('renders H2 and glossary table with 24 terms (25 rows)', () => {
      const { container } = render(<Section13 />);
      const h2 = container.querySelector('h2#用語集');
      expect(h2?.textContent?.trim()).toBe('用語集');

      const table = container.querySelector('.table-scroll table');
      expect(table).not.toBeNull();
      const rows = Array.from(table?.querySelectorAll('tbody tr') || []);
      expect(rows.length).toBe(24);
      expect(rows[0]?.textContent).toContain('A/Bテスト');
      expect(rows[23]?.textContent).toContain('テストプラクティス');
    });
  });

  describe('Section 14 (Sources)', () => {
    it('renders H2 and 4 H3s with correct IDs and texts', () => {
      const { container } = render(<Section14 />);
      const h2 = container.querySelector('h2#根拠ソース一覧url');
      expect(h2?.textContent?.trim()).toBe('根拠ソース一覧（URL）');

      const h3s = Array.from(container.querySelectorAll('h3'));
      expect(h3s.map(el => el.id)).toEqual([
        'a-一次情報規格の公式ページ公開プレビュー',
        'b-シリーズ全体関連規格',
        'c-著名な実践者研究者の発信国際的',
        'd-本ガイドの注意事項'
      ]);
    });

    it('renders 4 tables and 20 external links with proper security attributes', () => {
      const { container } = render(<Section14 />);
      const tables = Array.from(container.querySelectorAll('.table-scroll table'));
      expect(tables.length).toBe(4);

      const links = Array.from(container.querySelectorAll('a[href^="http"]'));
      expect(links.length).toBe(20);
      links.forEach(a => {
        expect(a.getAttribute('target')).toBe('_blank');
        expect(a.getAttribute('rel')).toContain('noopener');
        expect(a.getAttribute('rel')).toContain('noreferrer');
      });
    });
  });
});
