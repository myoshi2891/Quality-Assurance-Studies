import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import Section14 from '../../app/iso-14496-22-2026-beginner-guide/Section14';
import Section15 from '../../app/iso-14496-22-2026-beginner-guide/Section15';

describe('ISO 14496-22:2026 Guide - Sections 14 & 15', () => {
  it('renders Section 14 with H2, 2 H3s, DIAGRAM_11, callout, and glossary', () => {
    const { container } = render(<Section14 />);
    const section = container.querySelector('section#ch14');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('14. まとめと学習ロードマップ');

    const callout = section?.querySelector('.callout-practice');
    expect(callout?.textContent).toContain('次に何を学ぶかの順序');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toContain('14-1. 要点の整理');
    expect(h3s?.[1].textContent).toContain('14-2. 学習ロードマップ');

    const diagram = section?.querySelector('.mermaid-diagram');
    expect(diagram).not.toBeNull();

    const ol = section?.querySelector('ol');
    expect(ol?.children.length).toBe(6);

    const glossary = section?.querySelector('.glossary');
    expect(glossary?.textContent).toContain('ロードマップ');
    expect(glossary?.textContent).toContain('照合');
  });

  it('renders Section 15 with H2, 4 H3s, 3 tables, external links, and unconfirmed list', () => {
    const { container } = render(<Section15 />);
    const section = container.querySelector('section#ch15');
    expect(section).not.toBeNull();

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toContain('15. 根拠ソース一覧（URL）');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(4);
    expect(h3s?.[0].textContent).toContain('15-1. 規格の公式情報');
    expect(h3s?.[1].textContent).toContain('15-2. 実装関連の一次情報');
    expect(h3s?.[2].textContent).toContain('15-3. 参考（二次情報）');
    expect(h3s?.[3].textContent).toContain('15-4. 未確認事項（再掲）');

    const tables = section?.querySelectorAll('table');
    expect(tables?.length).toBe(3);

    // External links
    const links = section?.querySelectorAll('a');
    expect(links?.length).toBeGreaterThanOrEqual(15);
    links?.forEach((a) => {
      expect(a.getAttribute('href')).toMatch(/^https?:\/\//);
      expect(a.getAttribute('target')).toBe('_blank');
      expect(a.getAttribute('rel')).toBe('noopener noreferrer');
    });

    const ul = section?.querySelector('ul');
    expect(ul?.children.length).toBe(3);
  });
});
