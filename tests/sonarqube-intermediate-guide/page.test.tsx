import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, cleanup } from '@testing-library/react';
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

    const tocLinks = container.querySelectorAll('nav.toc a');
    expect(tocLinks).toHaveLength(22);
    expect(TOC_ITEMS).toHaveLength(22);

    const expectedHrefs = [
      '#overview', '#ecosystem', '#architecture', '#editions', '#quickstart', '#scanners',
      '#quality-model', '#issue-types', '#quality-profiles', '#security', '#technical-debt',
      '#clean-as-you-code', '#quality-gates', '#branch-pr', '#cicd', '#ide', '#ai-agents',
      '#enterprise', '#best-practices', '#troubleshooting', '#summary', '#references',
    ];

    expectedHrefs.forEach((href, idx) => {
      expect(tocLinks[idx]?.getAttribute('href')).toBe(href);
    });

    // Verify brand
    const brandH1 = container.querySelector('.sidebar-brand h1');
    expect(brandH1?.textContent).toBe('SonarQube 完全解説');
    const badges = container.querySelectorAll('.sidebar-badges .badge');
    expect(badges).toHaveLength(2);
    expect(badges[0]?.textContent).toBe('Server 2026.3');
    expect(badges[1]?.textContent).toBe('2026.1 LTA');
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
      expect(sec01Mermaid).toHaveLength(1);

      const sec02Mermaid = container.querySelectorAll('section#architecture .mermaid-wrap');
      expect(sec02Mermaid).toHaveLength(2);
    });

    it('renders Tables 1 through 6 in sections 00, 02, 03, 05 with correct headers and rows', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      // Table 1 (overview)
      const t1 = container.querySelector('section#overview table');
      expect(t1).not.toBeNull();
      const t1Headers = Array.from(t1?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t1Headers).toEqual(['旧称', '現称', '位置づけ']);
      expect(t1?.querySelectorAll('tbody tr')).toHaveLength(4);

      // Table 2 (architecture)
      const t2 = container.querySelector('section#architecture table');
      expect(t2).not.toBeNull();
      const t2Headers = Array.from(t2?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t2Headers).toEqual(['コンポーネント', '役割']);
      expect(t2?.querySelectorAll('tbody tr')).toHaveLength(4);

      // Table 3, 4, 5 (editions)
      const editionTables = container.querySelectorAll('section#editions table');
      expect(editionTables).toHaveLength(3);

      // Table 3
      const t3 = editionTables[0];
      expect(t3).toBeDefined();
      const t3Headers = Array.from(t3?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t3Headers).toEqual(['機能', 'Community Build', 'Developer Edition', 'Enterprise Edition', 'Data Center Edition']);
      expect(t3?.querySelectorAll('tbody tr')).toHaveLength(11);

      // Table 4
      const t4 = editionTables[1];
      expect(t4).toBeDefined();
      const t4Headers = Array.from(t4?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t4Headers).toEqual(['エディション', '目安価格帯(年額)', '備考']);
      expect(t4?.querySelectorAll('tbody tr')).toHaveLength(4);

      // Table 5
      const t5 = editionTables[2];
      expect(t5).toBeDefined();
      const t5Headers = Array.from(t5?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t5Headers).toEqual(['プラン', '概要']);
      expect(t5?.querySelectorAll('tbody tr')).toHaveLength(3);

      // Table 6 (scanners)
      const t6 = container.querySelector('section#scanners table');
      expect(t6).not.toBeNull();
      const t6Headers = Array.from(t6?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t6Headers).toEqual(['スキャナー', '対象', '備考']);
      expect(t6?.querySelectorAll('tbody tr')).toHaveLength(7);
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
      expect(refBlocks).toHaveLength(6);

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

  describe('Category 2: 品質モデル・Issue・セキュリティ編 (Sections 06〜10)', () => {
    it('renders sections 06 to 10 with correct IDs, kickers, and headings', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const expectedSections = [
        { id: 'quality-model', kicker: 'SECTION 06', title: '品質モデルを理解する ― Clean Code Taxonomy と MQR Mode' },
        { id: 'issue-types', kicker: 'SECTION 07', title: 'Issueの分類 ― Bug / Vulnerability / Code Smell / Security Hotspot' },
        { id: 'quality-profiles', kicker: 'SECTION 08', title: 'Quality Profiles ― ルールセットの管理と継承' },
        { id: 'security', kicker: 'SECTION 09', title: 'セキュリティ分析の内部構造 ― Taint Analysis と SAST/SCA' },
        { id: 'technical-debt', kicker: 'SECTION 10', title: '技術的負債とメトリクス ― SQALEモデル' },
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

    it('renders subheadings (h3) in sections 06 to 10', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const expectedSubheadings = [
        '6.1 Standard Experience vs MQR Mode',
        '6.2 Clean Code Taxonomy(4つの属性カテゴリ)',
        '7.1 Security HotspotとVulnerabilityの決定的な違い',
        '8.1 コピー(Copy) vs 継承(Extend)',
        '8.2 補足機能',
        '9.1 セキュリティルールの2分類',
        '9.2 セキュリティ標準との対応付け',
        '9.3 SonarQube Advanced Security(SCA・シークレット検出)',
        '10.1 計算式',
        '10.2 Maintainability Rating(保守性格付け)グリッド',
        '10.3 全体コード vs 新規コードの二重管理',
      ];

      const h3Elements = container.querySelectorAll(
        'section#quality-model h3, section#issue-types h3, section#quality-profiles h3, section#security h3, section#technical-debt h3'
      );
      const foundTitles = Array.from(h3Elements).map((el) => el.textContent?.trim() || '');

      expectedSubheadings.forEach((expected) => {
        expect(foundTitles.some((t) => t.includes(expected) || expected.includes(t))).toBe(true);
      });
    });

    it('renders Mermaid diagrams in sections 06, 07, 08 (Diag 4〜6)', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const sec06Mermaid = container.querySelectorAll('section#quality-model .mermaid-wrap');
      expect(sec06Mermaid).toHaveLength(1);

      const sec07Mermaid = container.querySelectorAll('section#issue-types .mermaid-wrap');
      expect(sec07Mermaid).toHaveLength(1);

      const sec08Mermaid = container.querySelectorAll('section#quality-profiles .mermaid-wrap');
      expect(sec08Mermaid).toHaveLength(1);
    });

    it('renders Tables 7 through 13 in sections 06 to 10 with correct headers and rows', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      // Section 06: Tables 7 & 8
      const sec06Tables = container.querySelectorAll('section#quality-model table');
      expect(sec06Tables).toHaveLength(2);
      const t7 = sec06Tables[0];
      expect(t7).toBeDefined();
      const t7Headers = Array.from(t7?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t7Headers).toEqual(['項目', 'Standard Experience(従来型)', 'MQR Mode(新方式)']);
      expect(t7?.querySelectorAll('tbody tr')).toHaveLength(4);

      const t8 = sec06Tables[1];
      expect(t8).toBeDefined();
      const t8Headers = Array.from(t8?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t8Headers).toEqual(['カテゴリ', '意味', '含まれる属性']);
      expect(t8?.querySelectorAll('tbody tr')).toHaveLength(4);

      // Section 07: Table 9
      const t9 = container.querySelector('section#issue-types table');
      expect(t9).not.toBeNull();
      const t9Headers = Array.from(t9?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t9Headers).toEqual(['種別', '定義', '対応する Software Quality']);
      expect(t9?.querySelectorAll('tbody tr')).toHaveLength(4);

      // Section 08: Table 10
      const t10 = container.querySelector('section#quality-profiles table');
      expect(t10).not.toBeNull();
      const t10Headers = Array.from(t10?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t10Headers).toEqual(['方式', '挙動', '用途']);
      expect(t10?.querySelectorAll('tbody tr')).toHaveLength(2);

      // Section 09: Table 11
      const t11 = container.querySelector('section#security table');
      expect(t11).not.toBeNull();
      const t11Headers = Array.from(t11?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t11Headers).toEqual(['ルールタイプ', '検出対象', '使用技術']);
      expect(t11?.querySelectorAll('tbody tr')).toHaveLength(2);

      // Section 10: Tables 12 & 13
      const sec10Tables = container.querySelectorAll('section#technical-debt table');
      expect(sec10Tables).toHaveLength(2);
      const t12 = sec10Tables[0];
      expect(t12).toBeDefined();
      const t12Headers = Array.from(t12?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t12Headers).toEqual(['格付け', '技術的負債比率の範囲', '意味']);
      expect(t12?.querySelectorAll('tbody tr')).toHaveLength(5);

      const t13 = sec10Tables[1];
      expect(t13).toBeDefined();
      const t13Headers = Array.from(t13?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t13Headers).toEqual(['格付け', 'Reliability Ratingの条件例']);
      expect(t13?.querySelectorAll('tbody tr')).toHaveLength(5);
    });

    it('renders SQALE yaml code block in section 10 and Callout 2 in section 07', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const sec10Pre = container.querySelector('section#technical-debt pre code');
      expect(sec10Pre).not.toBeNull();
      expect(sec10Pre?.textContent).toContain('技術的負債 (Technical Debt / sqale_index)');
      expect(sec10Pre?.textContent).toContain('技術的負債比率 (Technical Debt Ratio / sqale_debt_ratio)');

      const callout2 = container.querySelector('section#issue-types .callout');
      expect(callout2).not.toBeNull();
      expect(callout2?.textContent).toContain('2026年時点のトレンド:');
      expect(callout2?.textContent).toContain('SonarSourceは分類の単純化を進めており');
    });

    it('renders reference links blocks in sections 06 to 10 with target="_blank"', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const refBlocks = container.querySelectorAll(
        'section#quality-model .refs, section#issue-types .refs, section#quality-profiles .refs, section#security .refs, section#technical-debt .refs'
      );
      expect(refBlocks).toHaveLength(5);

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

  describe('Category 3: 実践・運用・CI/CD編 (Sections 11〜15)', () => {
    it('renders sections 11 to 15 with correct IDs, kickers, and headings', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const expectedSections = [
        { id: 'clean-as-you-code', kicker: 'SECTION 11', title: 'Clean as You Code と New Code Definition' },
        { id: 'quality-gates', kicker: 'SECTION 12', title: 'Quality Gates ― リリース可否の自動判定' },
        { id: 'branch-pr', kicker: 'SECTION 13', title: 'ブランチ分析とプルリクエスト分析' },
        { id: 'cicd', kicker: 'SECTION 14', title: 'CI/CD統合の実践 ― GitHub Actionsによる構築例' },
        { id: 'ide', kicker: 'SECTION 15', title: 'IDE統合 ― SonarQube for IDE と Connected Mode' },
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

    it('renders subheadings (h3) in sections 11 to 15', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const expectedSubheadings = [
        '11.1 New Code Definitionの4つのオプション',
        '11.2 判定ロジック',
        '12.1 Sonar way Quality Gateのデフォルト条件',
        '12.2 Fudge Factor(判定の緩和機構)',
        '12.3 評価フロー',
        '12.4 運用上のポイント',
        '13.1 ブランチ分析とPR分析の違い',
        '13.2 プルリクエスト解析のフロー',
        '14.1 基本ワークフロー(GitHub Secretsの準備)',
        '14.2 公式SonarQube Scan GitHub Actionによる構成例',
        '設計上の重要ポイント',
        '14.3 主要CI/CDプラットフォームの対応状況',
        '15.1 Connected Modeで同期される情報',
        '15.2 AIアシスタント連携ツール群(VS Code / Copilot等)',
      ];

      const h3Elements = container.querySelectorAll(
        'section#clean-as-you-code h3, section#quality-gates h3, section#branch-pr h3, section#cicd h3, section#ide h3'
      );
      const foundTitles = Array.from(h3Elements).map((el) => el.textContent?.trim() || '');

      expectedSubheadings.forEach((expected) => {
        expect(foundTitles.some((t) => t.includes(expected) || expected.includes(t))).toBe(true);
      });
    });

    it('renders Mermaid diagrams in sections 11, 12, 13 (Diag 7〜9)', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const sec11Mermaid = container.querySelectorAll('section#clean-as-you-code .mermaid-wrap');
      expect(sec11Mermaid).toHaveLength(1);

      const sec12Mermaid = container.querySelectorAll('section#quality-gates .mermaid-wrap');
      expect(sec12Mermaid).toHaveLength(1);

      const sec13Mermaid = container.querySelectorAll('section#branch-pr .mermaid-wrap');
      expect(sec13Mermaid).toHaveLength(1);
    });

    it('renders Tables 14 through 17 in sections 11 to 14 with correct headers and rows', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      // Section 11: Table 14
      const t14 = container.querySelector('section#clean-as-you-code table');
      expect(t14).not.toBeNull();
      const t14Headers = Array.from(t14?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t14Headers).toEqual(['オプション', '定義', '利用可能レベル', '推奨シーン']);
      expect(t14?.querySelectorAll('tbody tr')).toHaveLength(4);

      // Section 12: Table 15
      const t15 = container.querySelector('section#quality-gates table');
      expect(t15).not.toBeNull();
      const t15Headers = Array.from(t15?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t15Headers).toEqual(['条件(新規コードに適用)', 'デフォルト閾値', '備考']);
      expect(t15?.querySelectorAll('tbody tr')).toHaveLength(7);

      // Section 13: Table 16
      const t16 = container.querySelector('section#branch-pr table');
      expect(t16).not.toBeNull();
      const t16Headers = Array.from(t16?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t16Headers).toEqual(['項目', 'ブランチ分析', 'プルリクエスト分析']);
      expect(t16?.querySelectorAll('tbody tr')).toHaveLength(4);

      // Section 14: Table 17
      const t17 = container.querySelector('section#cicd table');
      expect(t17).not.toBeNull();
      const t17Headers = Array.from(t17?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t17Headers).toEqual(['プラットフォーム', '統合方式']);
      expect(t17?.querySelectorAll('tbody tr')).toHaveLength(6);
    });

    it('renders GitHub Actions code block in section 14 and Callout 3 in section 12', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const sec14Code = container.querySelector('section#cicd pre code');
      expect(sec14Code).not.toBeNull();
      expect(sec14Code?.textContent).toContain('SonarQube Analysis');
      expect(sec14Code?.textContent).toContain('SonarSource/sonarqube-scan-action@v5');
      expect(sec14Code?.textContent).toContain('SonarSource/sonarqube-quality-gate-action@master');

      const callout3 = container.querySelector('section#quality-gates .callout');
      expect(callout3).not.toBeNull();
      expect(callout3?.textContent).toContain('Reliability/Security/Maintainability Ratingの3条件は');
    });

    it('renders reference links blocks in sections 11 to 15 with target="_blank"', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const refBlocks = container.querySelectorAll(
        'section#clean-as-you-code .refs, section#quality-gates .refs, section#branch-pr .refs, section#cicd .refs, section#ide .refs'
      );
      expect(refBlocks).toHaveLength(5);

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

  describe('Category 4: AIエージェント・エンタープライズ・総括編 (Sections 16〜21)', () => {
    it('renders sections 16 to 21 with correct IDs, kickers, and headings', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const expectedSections = [
        { id: 'ai-agents', kicker: 'SECTION 16', title: 'AIエージェント時代のSonarQube ― MCP Server / Agentic Analysis / Sonar Vortex' },
        { id: 'enterprise', kicker: 'SECTION 17', title: 'エンタープライズ機能 ― Portfolio・コンプライアンスレポート・Data Center Edition' },
        { id: 'best-practices', kicker: 'SECTION 18', title: '実践ベストプラクティス集' },
        { id: 'troubleshooting', kicker: 'SECTION 19', title: 'トラブルシューティング' },
        { id: 'summary', kicker: 'SECTION 20', title: 'まとめ' },
        { id: 'references', kicker: 'SECTION 21', title: '参考文献・情報源一覧' },
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

    it('renders subheadings (h3) in sections 16 and 17', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const expectedSubheadings = [
        '16.1 Agent Centric Development Cycle(ACDC)という設計思想',
        '16.2 SonarQube MCP Server',
        '16.3 Sonar Vortex(旧: Agentic Analysis + Context Augmentation)',
        '16.4 SonarQube Remediation Agent',
        '16.5 AI CodeFix',
        '16.6 なぜこれが重要か',
        '17.1 Portfolio(ポートフォリオ管理)',
        '17.2 コンプライアンスレポート',
        '17.3 Data Center Edition再訪',
      ];

      const h3Elements = container.querySelectorAll('section#ai-agents h3, section#enterprise h3');
      const foundTitles = Array.from(h3Elements).map((el) => el.textContent?.trim() || '');

      expectedSubheadings.forEach((expected) => {
        expect(foundTitles.some((t) => t.includes(expected) || expected.includes(t))).toBe(true);
      });
    });

    it('renders Mermaid diagram in section 16 (Diag 10)', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const sec16Mermaid = container.querySelectorAll('section#ai-agents .mermaid-wrap');
      expect(sec16Mermaid).toHaveLength(1);
    });

    it('renders Tables 18, 19, 20, 21 with correct structure and row counts', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      // Section 16: Tables 18 & 19
      const sec16Tables = container.querySelectorAll('section#ai-agents table');
      expect(sec16Tables).toHaveLength(2);
      const t18 = sec16Tables[0];
      expect(t18).toBeDefined();
      const t18Headers = Array.from(t18?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t18Headers).toEqual(['形態', '対象', '特徴']);
      expect(t18?.querySelectorAll('tbody tr')).toHaveLength(2);

      const t19 = sec16Tables[1];
      expect(t19).toBeDefined();
      const t19Headers = Array.from(t19?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t19Headers).toEqual(['フェーズ', '機能', '効果']);
      expect(t19?.querySelectorAll('tbody tr')).toHaveLength(2);

      // Section 19: Table 20
      const t20 = container.querySelector('section#troubleshooting table');
      expect(t20).not.toBeNull();
      const t20Headers = Array.from(t20?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t20Headers).toEqual(['症状', '主な原因', '対処']);
      expect(t20?.querySelectorAll('tbody tr')).toHaveLength(7);

      // Section 21: Table 21
      const t21 = container.querySelector('section#references table');
      expect(t21).not.toBeNull();
      const t21Headers = Array.from(t21?.querySelectorAll('th') || []).map((th) => th.textContent?.trim());
      expect(t21Headers).toEqual(['#', 'タイトル', 'URL']);
      expect(t21?.querySelectorAll('tbody tr')).toHaveLength(48);
    });

    it('renders MCP bash code block in section 16 and practice list in section 18', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const sec16Code = container.querySelector('section#ai-agents pre code');
      expect(sec16Code).not.toBeNull();
      expect(sec16Code?.textContent).toContain('claude mcp add sonarqube');
      expect(sec16Code?.textContent).toContain('sonarsource/sonarqube-mcp');

      const practiceListItems = container.querySelectorAll('section#best-practices .practice-list li');
      expect(practiceListItems).toHaveLength(8);
      const nums = Array.from(practiceListItems).map((li) => li.querySelector('.num')?.textContent?.trim());
      expect(nums).toEqual(['1', '2', '3', '4', '5', '6', '7', '8']);
    });

    it('renders reference links blocks in sections 16, 17, 19 with target="_blank"', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const refBlocks = container.querySelectorAll(
        'section#ai-agents .refs, section#enterprise .refs, section#troubleshooting .refs'
      );
      expect(refBlocks).toHaveLength(3);

      refBlocks.forEach((block) => {
        const links = block.querySelectorAll('a');
        expect(links.length).toBeGreaterThan(0);
        links.forEach((a) => {
          expect(a.getAttribute('target')).toBe('_blank');
          expect(a.getAttribute('rel')).toContain('noopener');
        });
      });
    });

    it('renders final note and document footer in section 21', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const finalNote = container.querySelector('.final-note');
      expect(finalNote).not.toBeNull();
      expect(finalNote?.textContent).toContain('本ガイドは2026年7月時点の公開情報に基づいて作成されています');

      const docFooter = container.querySelector('.doc-footer');
      expect(docFooter).not.toBeNull();
      expect(docFooter?.textContent).toContain('SonarQube 完全解説ガイド');
    });

    it('satisfies overall inventory count: 22 sections, 10 diagrams, 21 tables, 4 code blocks', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      const allSections = container.querySelectorAll('section.doc-section');
      expect(allSections).toHaveLength(22);

      const allMermaids = container.querySelectorAll('.mermaid-wrap');
      expect(allMermaids).toHaveLength(10);

      const allTables = container.querySelectorAll('table');
      expect(allTables).toHaveLength(21);

      const allPre = container.querySelectorAll('pre code');
      expect(allPre).toHaveLength(4);
    });

    it('renders rich syntax highlighting across all 4 code blocks', () => {
      const { container } = render(<SonarQubeIntermediateGuidePage />);

      // Section 04: Docker bash code block
      const sec04Block = container.querySelector('section#quickstart .code-block, section#quickstart pre');
      expect(sec04Block).not.toBeNull();
      expect(sec04Block?.querySelectorAll('.code-comment').length).toBeGreaterThan(0);
      expect(sec04Block?.querySelectorAll('.code-keyword').length).toBeGreaterThan(0);

      // Section 10: SQALE formula code block
      const sec10Block = container.querySelector('section#technical-debt .code-block, section#technical-debt pre');
      expect(sec10Block).not.toBeNull();
      expect(sec10Block?.querySelectorAll('.code-operator, .code-fn, .code-property').length).toBeGreaterThan(0);
      expect(sec10Block?.querySelectorAll('.code-comment').length).toBeGreaterThan(0);

      // Section 14: GitHub Actions YAML code block
      const sec14Block = container.querySelector('section#cicd .code-block, section#cicd pre');
      expect(sec14Block).not.toBeNull();
      expect(sec14Block?.querySelectorAll('.code-property').length).toBeGreaterThan(0);
      expect(sec14Block?.querySelectorAll('.code-string').length).toBeGreaterThan(0);
      expect(sec14Block?.querySelectorAll('.code-var').length).toBeGreaterThan(0);

      // Section 16: Claude Code MCP bash code block
      const sec16Block = container.querySelector('section#ai-agents .code-block, section#ai-agents pre');
      expect(sec16Block).not.toBeNull();
      expect(sec16Block?.querySelectorAll('.code-comment').length).toBeGreaterThan(0);
      expect(sec16Block?.querySelectorAll('.code-keyword').length).toBeGreaterThan(0);
    });
  });
});



