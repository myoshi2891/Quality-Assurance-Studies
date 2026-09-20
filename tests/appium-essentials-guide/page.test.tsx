import { afterAll, afterEach, beforeAll, beforeEach, describe, it, expect, mock } from 'bun:test';
import { render, cleanup, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import AppiumGuidePage, {
  DIAGRAM_ARCH,
  DIAGRAM_VERSION,
  DIAGRAM_SETUP,
  DIAGRAM_LOCATOR,
  DIAGRAM_POM,
  DIAGRAM_WAIT,
  DIAGRAM_CICD,
} from '../../app/appium-essentials-guide/page';
import NavBar, { NAV_LINKS } from '../../app/appium-essentials-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
let mermaidRenderMock: ReturnType<typeof mock>;
const renderedCharts: string[] = [];

beforeEach(() => {
  renderedCharts.length = 0;
});

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaidRenderMock = mock(async (_id: string, text: string) => {
    renderedCharts.push(text);
    return {
      svg: '<svg data-testid="mock-mermaid"></svg>',
      diagramType: 'flowchart',
    };
  });
  mermaid.render = mermaidRenderMock as unknown as typeof mermaid.render;

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

describe('Appium Essentials Guide - Category 1 (Foundation & Architecture)', () => {
  it('renders H1 title and hero section correctly', () => {
    const { container } = render(<AppiumGuidePage />);
    const h1 = container.querySelector('h1');
    expect(h1).toBeDefined();
    expect(h1?.textContent).toContain('Appium Essentials 完全ガイド');
    expect(h1?.textContent).toContain('モバイルテスト自動化の基礎とベストプラクティス');

    const chips = container.querySelectorAll('.chip');
    expect(chips.length).toBe(3);
    expect(chips[0]?.textContent).toBe('Appium 3.x対応');
    expect(chips[1]?.textContent).toBe('2026年8月26日更新');
    expect(chips[2]?.textContent).toBe('初学者向け');
  });

  it('renders sidebar navigation with all 17 anchor links', () => {
    const { container } = render(<NavBar />);
    const navLinks = container.querySelectorAll('.navlist a');
    expect(navLinks.length).toBe(17);
    expect(NAV_LINKS.length).toBe(17);
    expect(navLinks[0]?.getAttribute('href')).toBe('#about');
    expect(navLinks[1]?.getAttribute('href')).toBe('#what-is-appium');
    expect(navLinks[2]?.getAttribute('href')).toBe('#architecture');
    expect(navLinks[3]?.getAttribute('href')).toBe('#version-history');
    expect(navLinks[16]?.getAttribute('href')).toBe('#references');
  });

  it('renders Section 1: #about (このガイドについて)', () => {
    const { container } = render(<AppiumGuidePage />);
    const sec = container.querySelector('#about');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('1このガイドについて');
    expect(sec?.textContent).toContain('想定する読者は次のような人です');
    expect(sec?.textContent).toContain('Appium Essentials');
  });

  it('renders Section 2: #what-is-appium (Appiumとは何か) with comparison table', () => {
    const { container } = render(<AppiumGuidePage />);
    const sec = container.querySelector('#what-is-appium');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('2Appiumとは何か');

    const table = sec?.querySelector('table');
    expect(table).toBeDefined();
    const ths = table?.querySelectorAll('th');
    expect(ths?.length).toBe(4);
    expect(ths?.[0]?.textContent).toBe('プラットフォーム');
    expect(ths?.[1]?.textContent).toBe('ドライバー名');
    expect(ths?.[2]?.textContent).toBe('対象OS');
    expect(ths?.[3]?.textContent).toBe('基盤テストフレームワーク');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
  });

  it('renders Section 3: #architecture (アーキテクチャ) with diagram-arch', async () => {
    const { container } = render(<AppiumGuidePage />);
    const sec = container.querySelector('#architecture');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('3Appiumのアーキテクチャを理解する');

    const figCaption = sec?.querySelector('.fig-caption');
    expect(figCaption?.textContent).toBe('図1: Appiumのクライアント・サーバーアーキテクチャ');

    await waitFor(() => {
      expect(renderedCharts.length).toBe(7);
    });
    expect(renderedCharts).toContain(DIAGRAM_ARCH);
    expect(renderedCharts).toContain(DIAGRAM_VERSION);
    expect(renderedCharts).toContain(DIAGRAM_SETUP);
    expect(renderedCharts).toContain(DIAGRAM_LOCATOR);
    expect(renderedCharts).toContain(DIAGRAM_POM);
    expect(renderedCharts).toContain(DIAGRAM_WAIT);
    expect(renderedCharts).toContain(DIAGRAM_CICD);
  });

  it('renders Section 4: #version-history (バージョンの歴史と現在地) with diagram and table', async () => {
    const { container } = render(<AppiumGuidePage />);
    const sec = container.querySelector('#version-history');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('4Appiumのバージョンの歴史と現在地');

    const figCaption = sec?.querySelector('.fig-caption');
    expect(figCaption?.textContent).toBe('図2: Appiumバージョンの変遷');

    await waitFor(() => {
      expect(renderedCharts.length).toBe(7);
    });
    const versionChart = renderedCharts.find((chart) => chart === DIAGRAM_VERSION);
    expect(versionChart).toBeDefined();
    // Diagram should NOT contain full-width wave dash 〜 (replaced with から)
    expect(versionChart).not.toContain('〜');
    expect(versionChart).toContain('2013年から');
    expect(versionChart).toContain('Appium 3.x');

    const table = sec?.querySelector('table');
    expect(table).toBeDefined();
    const ths = table?.querySelectorAll('th');
    expect(ths?.length).toBe(5);
    expect(ths?.[0]?.textContent).toBe('バージョン');
    expect(ths?.[1]?.textContent).toBe('リリース時期');

    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
  });

  describe('Category 2 (Setup, Capabilities, and First Test: Sections 5-7)', () => {
    it('renders Section 5: #setup (環境構築ステップバイステップ) with diagram-setup and codes', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#setup');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('5環境構築ステップバイステップ');

      const figCaption = sec?.querySelector('.fig-caption');
      expect(figCaption?.textContent).toBe('図3: 環境構築の7つのステップ');

      const h3s = sec?.querySelectorAll('h3');
      expect(h3s?.length).toBe(6);
      expect(h3s?.[0]?.textContent).toContain('ステップ1: Node.jsをインストールする');
      expect(h3s?.[1]?.textContent).toContain('ステップ2: Appiumサーバーをインストールする');
      expect(h3s?.[2]?.textContent).toContain('ステップ3: プラットフォームドライバーを追加する');
      expect(h3s?.[3]?.textContent).toContain('ステップ4: 環境をセルフチェックする');
      expect(h3s?.[4]?.textContent).toContain('ステップ5: Appium Inspectorを導入する');
      expect(h3s?.[5]?.textContent).toContain('ステップ6・7: サーバーを起動し、最初のテストを動かす');

      // Check code blocks
      const codeBlocks = sec?.querySelectorAll('.code-block');
      expect(codeBlocks?.length).toBe(5);
      expect(sec?.textContent).toContain('npm install -g appium');
      expect(sec?.textContent).toContain('appium driver doctor uiautomator2');
    });

    it('renders Section 6: #capabilities (Capabilitiesを理解する) with 2 tables and codes', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#capabilities');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('6Capabilitiesを理解する');

      const h3s = sec?.querySelectorAll('h3');
      expect(h3s?.length).toBe(5);

      const tables = sec?.querySelectorAll('table');
      expect(tables?.length).toBe(2);

      // Table 1: Capabilities list
      const ths1 = tables?.[0]?.querySelectorAll('th');
      expect(ths1?.length).toBe(4);
      expect(ths1?.[0]?.textContent).toBe('キー名');

      // Table 2: Reset strategies
      const ths2 = tables?.[1]?.querySelectorAll('th');
      expect(ths2?.length).toBe(3);
      expect(ths2?.[0]?.textContent).toBe('Option / 設定');

      // Code blocks (code-6, code-7, code-8)
      const codeBlocks = sec?.querySelectorAll('.code-block');
      expect(codeBlocks?.length).toBe(3);
      expect(sec?.textContent).toContain('UiAutomator2Options');
      expect(sec?.textContent).toContain('terminate_app');
    });

    it('renders Section 7: #first-test (はじめてのテストを書く) with Python and Java codes', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#first-test');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('7はじめてのテストを書く');

      const h3s = sec?.querySelectorAll('h3');
      expect(h3s?.length).toBe(2);
      expect(h3s?.[0]?.textContent).toContain('Python版（pytest + Appium-Python-Client）');
      expect(h3s?.[1]?.textContent).toContain('Java版（TestNG）');

      const codeBlocks = sec?.querySelectorAll('.code-block');
      expect(codeBlocks?.length).toBe(2);
      expect(sec?.textContent).toContain('test_login_screen_shows_header');
      expect(sec?.textContent).toContain('AndroidDriver');
    });
  });

  describe('Category 3 (Techniques: Sections 8-11)', () => {
    it('renders Section 8: #locators (要素を見つけるロケーター戦略) with diagram, table, and code-11', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#locators');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('8要素を見つけるロケーター戦略');

      const figCaption = sec?.querySelector('.fig-caption');
      expect(figCaption?.textContent).toBe('図4: ロケーター選定の意思決定フロー');

      const h3s = sec?.querySelectorAll('h3');
      expect(h3s?.length).toBe(2);
      expect(h3s?.[0]?.textContent).toContain('主なロケーター戦略の比較');
      expect(h3s?.[1]?.textContent).toContain('Imageロケーターを使う場合のみ必要な追加セットアップ');

      const table = sec?.querySelector('table');
      expect(table).toBeDefined();
      const ths = table?.querySelectorAll('th');
      expect(ths?.length).toBe(3);
      expect(ths?.[0]?.textContent).toBe('ロケーター戦略');

      const codeBlocks = sec?.querySelectorAll('.code-block');
      expect(codeBlocks?.length).toBe(1);
      expect(sec?.textContent).toContain('appium plugin install images');
    });

    it('renders Section 9: #pom (Page Object Modelを実践する) with diagram and code-12/13', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#pom');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('9Page Object Modelを実践する');

      const figCaption = sec?.querySelector('.fig-caption');
      expect(figCaption?.textContent).toBe('図5: Page Object Modelのアーキテクチャ');

      const codeBlocks = sec?.querySelectorAll('.code-block');
      expect(codeBlocks?.length).toBe(2);
      expect(sec?.textContent).toContain('class LoginPage:');
      expect(sec?.textContent).toContain('def test_successful_login');
    });

    it('renders Section 10: #waits (待機戦略でテストを安定させる) with diagram, table, and code-14', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#waits');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('10待機戦略でテストを安定させる');

      const figCaption = sec?.querySelector('.fig-caption');
      expect(figCaption?.textContent).toBe('図6: 待機戦略の判断フロー');

      const table = sec?.querySelector('table');
      expect(table).toBeDefined();
      const ths = table?.querySelectorAll('th');
      expect(ths?.length).toBe(3);
      expect(ths?.[0]?.textContent).toBe('項目');

      const codeBlocks = sec?.querySelectorAll('.code-block');
      expect(codeBlocks?.length).toBe(1);
      expect(sec?.textContent).toContain('WebDriverWait(driver, 15');
    });

    it('renders Section 11: #gestures (ジェスチャー操作を自動化する) with table and code-15', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#gestures');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('11ジェスチャー操作を自動化する');

      const table = sec?.querySelector('table');
      expect(table).toBeDefined();
      const ths = table?.querySelectorAll('th');
      expect(ths?.length).toBe(3);
      expect(ths?.[0]?.textContent).toBe('ジェスチャー');

      const codeBlocks = sec?.querySelectorAll('.code-block');
      expect(codeBlocks?.length).toBe(1);
      expect(sec?.textContent).toContain('mobile: scrollGesture');
      expect(sec?.textContent).toContain('mobile: swipeGesture');
    });
  });

  describe('Category 4 (Environments, CI/CD, Checklist, and References: Sections 12-17)', () => {
    it('renders Section 12: #environments with table and code-16', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#environments');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('12実機・エミュレーター・クラウドデバイスファームでの実行');

      const table = sec?.querySelector('table');
      expect(table).toBeDefined();
      const ths = table?.querySelectorAll('th');
      expect(ths?.length).toBe(3);
      expect(ths?.[0]?.textContent).toBe('実行環境');
      expect(ths?.[1]?.textContent).toBe('メリット');
      expect(ths?.[2]?.textContent).toBe('デメリット');

      const rows = table?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(3);

      const codeBlocks = sec?.querySelectorAll('.code-block');
      expect(codeBlocks?.length).toBe(1);
      expect(sec?.textContent).toContain('bs://<uploaded-app-hash>');
    });

    it('renders Section 13: #cicd with diagram-cicd and code-17', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#cicd');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('13並列実行とCI/CD統合');

      const figCaption = sec?.querySelector('.fig-caption');
      expect(figCaption?.textContent).toBe('図7: CI/CDパイプラインにおけるAppiumテストの流れ');

      const codeBlocks = sec?.querySelectorAll('.code-block');
      expect(codeBlocks?.length).toBe(1);
      expect(sec?.textContent).toContain('bundletool build-apks');
    });

    it('renders Section 14: #anti-patterns with anti-pattern table', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#anti-patterns');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('14よくあるアンチパターンと落とし穴');

      const table = sec?.querySelector('table');
      expect(table).toBeDefined();
      const ths = table?.querySelectorAll('th');
      expect(ths?.length).toBe(3);
      expect(ths?.[0]?.textContent).toBe('アンチパターン');
      expect(ths?.[1]?.textContent).toBe('何が問題か');
      expect(ths?.[2]?.textContent).toBe('代わりにすべきこと');

      const rows = table?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(7);
    });

    it('renders Section 15: #checklist with 10 interactive checklist items and counter', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#checklist');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('15ベストプラクティスチェックリスト');

      const counter = sec?.querySelector('#checklistCounter');
      expect(counter?.textContent).toBe('0 / 10 完了');

      const checklistItems = sec?.querySelectorAll('.checklist li');
      expect(checklistItems?.length).toBe(10);
    });

    it('renders Section 16: #summary with key takeaway advice', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#summary');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('16まとめ');
      expect(sec?.textContent).toContain('アーキテクチャ（クライアント・サーバー・ドライバーの関係）を理解すること');
      expect(sec?.textContent).toContain('固定sleepに頼らない、条件ベースの待機戦略を徹底すること');
    });

    it('renders Section 17: #references with all 21 reference items and footer', () => {
      const { container } = render(<AppiumGuidePage />);
      const sec = container.querySelector('#references');
      expect(sec).toBeDefined();
      expect(sec?.querySelector('h2')?.textContent).toContain('17参考文献と情報源');

      const refItems = sec?.querySelectorAll('.ref-list li');
      expect(refItems?.length).toBe(21);

      const footer = container.querySelector('.footer');
      expect(footer).toBeDefined();
      expect(footer?.textContent).toContain('Manoj Hans 著『Appium Essentials』');
      expect(footer?.textContent).toContain('appium.io');
    });

    it('renders all 17 code blocks with code-line wrapper and syntax highlight tokens', () => {
      const { container } = render(<AppiumGuidePage />);
      const codeBlocks = container.querySelectorAll('.code-block');
      expect(codeBlocks.length).toBe(17);

      // Check that code blocks have language class
      const bashBlocks = container.querySelectorAll('.code-block code.language-bash');
      const pythonBlocks = container.querySelectorAll('.code-block code.language-python');
      const javaBlocks = container.querySelectorAll('.code-block code.language-java');
      expect(bashBlocks.length).toBe(7);
      expect(pythonBlocks.length).toBe(8);
      expect(javaBlocks.length).toBe(2);

      // Check code-line elements
      const codeLines = container.querySelectorAll('.code-block .code-line');
      expect(codeLines.length).toBeGreaterThan(100);

      // Check syntax tokens
      const keywords = container.querySelectorAll('.code-block .token-keyword');
      const comments = container.querySelectorAll('.code-block .token-comment');
      const strings = container.querySelectorAll('.code-block .token-string');
      const functions = container.querySelectorAll('.code-block .token-function');
      expect(keywords.length).toBeGreaterThan(15);
      expect(comments.length).toBeGreaterThan(15);
      expect(strings.length).toBeGreaterThan(20);
      expect(functions.length).toBeGreaterThan(15);
    });
  });
});
