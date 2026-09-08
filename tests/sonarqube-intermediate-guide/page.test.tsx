import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import SonarQubeIntermediateGuidePage from '../../app/sonarqube-intermediate-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/sonarqube-intermediate-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaid.render = mock(async () => {
    return {
      svg: '<svg data-testid="mock-mermaid"></svg>',
      diagramType: 'flowchart',
    };
  }) as unknown as typeof mermaid.render;

  const mockIntersectionObserver = mock(() => {
    return {
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    };
  });
  window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  mermaid.render = originalMermaidRender;
  window.IntersectionObserver = originalIntersectionObserver;
});

describe('SonarQube Intermediate-Advanced Guide Page - Comprehensive Test Suite', () => {
  it('renders the hero section with main title, eyebrow, lead paragraph, and callout', () => {
    const { container } = render(<SonarQubeIntermediateGuidePage />);

    const heroH1 = container.querySelector('.hero h1');
    expect(heroH1?.textContent).toContain('SonarQube 完全解説ガイド');

    const eyebrow = container.querySelector('.hero .eyebrow');
    expect(eyebrow?.textContent).toContain('Intermediate – Advanced Guide');

    const lead = container.querySelector('.hero .lead');
    expect(lead?.textContent).toContain('SonarSource社公式ドキュメント');
    expect(lead?.textContent).toContain('アーキテクチャ・品質モデルの内部構造・CI/CD統合');

    const callout = container.querySelector('.hero .callout');
    expect(callout?.textContent).toContain('執筆時点の最新情報:');
    expect(callout?.textContent).toContain('2026.3');
    expect(callout?.textContent).toContain('2026.1 LTA');
  });

  it('renders the sidebar navigation with all 22 TOC links and icons', () => {
    const { container } = render(<NavBar />);

    const tocLinks = container.querySelectorAll('.toc a');
    expect(tocLinks.length).toBe(22);
    expect(TOC_ITEMS.length).toBe(22);

    const expectedHrefs = [
      '#overview', '#ecosystem', '#architecture', '#editions', '#quickstart', '#scanners',
      '#quality-model', '#issue-types', '#quality-profiles', '#security', '#technical-debt',
      '#clean-as-you-code', '#quality-gates', '#branch-pr', '#cicd', '#ide', '#ai-agents',
      '#enterprise', '#best-practices', '#troubleshooting', '#summary', '#references',
    ];

    expectedHrefs.forEach((href, idx) => {
      expect(tocLinks[idx].getAttribute('href')).toBe(href);
    });

    // Verify brand
    const brandH1 = container.querySelector('.sidebar-brand h1');
    expect(brandH1?.textContent).toBe('SonarQube 完全解説');
    const badges = container.querySelectorAll('.sidebar-badges .badge');
    expect(badges.length).toBe(2);
    expect(badges[0].textContent).toBe('Server 2026.3');
    expect(badges[1].textContent).toBe('2026.1 LTA');
  });

  describe('Category 1: 基礎・アーキテクチャ・導入編 (Sections 00〜05)', () => {
    it('renders sections 00 to 05 with correct IDs, kickers, and headings', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const expectedSections = [
        { id: 'overview', kicker: 'SECTION 00', title: 'SonarQubeとは何か ― AI時代における立ち位置' },
        { id: 'ecosystem', kicker: 'SECTION 01', title: 'プロダクトファミリーとエコシステム全体像' },
        { id: 'architecture', kicker: 'SECTION 02', title: 'アーキテクチャ徹底解説' },
        { id: 'editions', kicker: 'SECTION 03', title: 'エディション比較 ― Community Build / Developer / Enterprise / Data Center / Cloud' },
        { id: 'quickstart', kicker: 'SECTION 04', title: 'クイックスタート ― Dockerによる構築' },
        { id: 'scanners', kicker: 'SECTION 05', title: 'スキャナーの選択と設定' },
      ];

      expectedSections.forEach(({ id, kicker, title }) => {
        const sec = container.querySelector(`section#${id}`);
        expect(sec).not.toBeNull();
        const secKicker = sec?.querySelector('.section-kicker');
        expect(secKicker?.textContent).toContain(kicker);
        const h2 = sec?.querySelector('h2');
        expect(h2?.textContent?.replace(/\s+/g, '')).toBe(title.replace(/\s+/g, ''));
      });
    });

    it('renders subheadings (h3) in sections 00 to 05', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const expectedSubheadings = [
        'ブランド構成の整理(2024年以降の変更点)',
        '2.1 4つのコアコンポーネント',
        '2.2 解析処理の流れ',
        '2.3 本番環境向けリファレンスアーキテクチャ',
        '2.4 Data Center Edition(高可用性構成)',
        '3.1 セルフホスト版(SonarQube Server)エディション比較',
        '3.2 料金の目安(セルフホスト、行数課金モデル)',
        '3.3 SonarQube Cloud(フルマネージドSaaS)',
        '本番構築時の重要な注意点',
        '5.1 JRE(Java Runtime)要件の注意点',
      ];

      const h3Elements = container.querySelectorAll('section#overview h3, section#ecosystem h3, section#architecture h3, section#editions h3, section#quickstart h3, section#scanners h3');
      const foundTitles = Array.from(h3Elements).map((el) => el.textContent?.trim() || '');

      expectedSubheadings.forEach((expected) => {
        expect(foundTitles.some((t) => t.includes(expected) || expected.includes(t))).toBe(true);
      });
    });

    it('renders Mermaid diagrams in sections 01 and 02 (Diag 1〜3)', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const sec01Mermaid = container.querySelectorAll('section#ecosystem .mermaid-wrap');
      expect(sec01Mermaid.length).toBe(1);

      const sec02Mermaid = container.querySelectorAll('section#architecture .mermaid-wrap');
      expect(sec02Mermaid.length).toBe(2);
    });

    it('renders Tables 1 through 6 in sections 00, 02, 03, 05 with correct headers and rows', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      // Table 1 (overview)
      const t1 = container.querySelector('section#overview table');
      expect(t1).not.toBeNull();
      const t1Headers = Array.from(t1?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t1Headers).toEqual(['旧称', '現称', '位置づけ']);
      expect(t1?.querySelectorAll('tbody tr').length).toBe(4);

      // Table 2 (architecture)
      const t2 = container.querySelector('section#architecture table');
      expect(t2).not.toBeNull();
      const t2Headers = Array.from(t2?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t2Headers).toEqual(['コンポーネント', '役割']);
      expect(t2?.querySelectorAll('tbody tr').length).toBe(4);

      // Table 3, 4, 5 (editions)
      const editionTables = container.querySelectorAll('section#editions table');
      expect(editionTables.length).toBe(3);

      // Table 3
      const t3Headers = Array.from(editionTables[0].querySelectorAll('th')).map((th) => th.textContent?.trim());
      expect(t3Headers).toEqual(['機能', 'Community Build', 'Developer Edition', 'Enterprise Edition', 'Data Center Edition']);
      expect(editionTables[0].querySelectorAll('tbody tr').length).toBe(11);

      // Table 4
      const t4Headers = Array.from(editionTables[1].querySelectorAll('th')).map((th) => th.textContent?.trim());
      expect(t4Headers).toEqual(['エディション', '目安価格帯(年額)', '備考']);
      expect(editionTables[1].querySelectorAll('tbody tr').length).toBe(4);

      // Table 5
      const t5Headers = Array.from(editionTables[2].querySelectorAll('th')).map((th) => th.textContent?.trim());
      expect(t5Headers).toEqual(['プラン', '概要']);
      expect(editionTables[2].querySelectorAll('tbody tr').length).toBe(3);

      // Table 6 (scanners)
      const t6 = container.querySelector('section#scanners table');
      expect(t6).not.toBeNull();
      const t6Headers = Array.from(t6?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t6Headers).toEqual(['スキャナー', '対象', '備考']);
      expect(t6?.querySelectorAll('tbody tr').length).toBe(7);
    });

    it('renders docker code block in section 04', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const sec04Pre = container.querySelector('section#quickstart pre code');
      expect(sec04Pre).not.toBeNull();
      expect(sec04Pre?.textContent).toContain('docker volume create --name sonarqube_data');
      expect(sec04Pre?.textContent).toContain('docker run -d --name sonarqube');
    });

    it('renders reference links blocks in sections 00 to 05 with target="_blank"', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const refBlocks = container.querySelectorAll(
        'section#overview .refs, section#ecosystem .refs, section#architecture .refs, section#editions .refs, section#quickstart .refs, section#scanners .refs'
      );
      expect(refBlocks.length).toBe(6);

      refBlocks.forEach((block) => {
        const links = block.querySelectorAll('a');
        expect(links.length).toBeGreaterThan(0);
        links.forEach((a) => {
          expect(a.getAttribute('target')).toBe('_blank');
          expect(a.getAttribute('rel')).toContain('noopener');
        });
      });
    });
  });
});
