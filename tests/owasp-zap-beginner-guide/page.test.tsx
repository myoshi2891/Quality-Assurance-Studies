import { afterAll, afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/owasp-zap-beginner-guide/page';
import NavBar, { TOC_ITEMS } from '../../app/owasp-zap-beginner-guide/NavBar';

afterEach(() => cleanup());

let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;
let mermaidRenderMock: ReturnType<typeof mock>;
const renderedCharts: string[] = [];

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

describe('OWASP ZAP Complete Guide - Category 1: 導入 (intro, disclaimer, features, install)', () => {
  it('renders within the scoped root container .owasp-zap-layout', () => {
    const { container } = render(<Page />);
    const root = container.querySelector('.owasp-zap-layout');
    expect(root).not.toBeNull();
  });

  it('renders doc header with h1, description, and source links', () => {
    const { container } = render(<Page />);
    const header = container.querySelector('.doc-header');
    expect(header).not.toBeNull();

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('OWASP ZAP 完全ガイド');
    expect(h1.textContent).toContain('初学者のための Web アプリケーションセキュリティテスト入門');

    expect(header?.textContent).toContain('ZAP 公式ドキュメント（zaproxy.org/docs/）');

    const sourceLinks = header?.querySelectorAll('.source-line a');
    expect(sourceLinks?.length).toBe(2);
    expect(sourceLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/');
    expect(sourceLinks?.[0].getAttribute('target')).toBe('_blank');
    expect(sourceLinks?.[0].getAttribute('rel')).toBe('noopener noreferrer');
    expect(sourceLinks?.[1].getAttribute('href')).toBe('https://www.zaproxy.org/docs/');
  });

  it('renders navigation bar with brand, mobile toggle, and all 25 TOC links across 6 groups', () => {
    const { container } = render(<NavBar />);
    const sidebar = container.querySelector('aside.sidebar');
    expect(sidebar).not.toBeNull();

    const brand = sidebar?.querySelector('.brand');
    expect(brand?.textContent).toContain('OWASP ZAP ガイド');
    expect(brand?.querySelector('i.ti-shield-bolt')).not.toBeNull();

    const groupTitles = sidebar?.querySelectorAll('.nav-group-title');
    expect(groupTitles?.length).toBe(6);
    const expectedGroups = ['導入', '基本操作', 'スキャン機能', '応用設定', '自動化', 'まとめ'];
    expectedGroups.forEach((groupName, idx) => {
      expect(groupTitles?.[idx].textContent?.trim()).toBe(groupName);
    });

    expect(TOC_ITEMS.length).toBe(25);
    const links = sidebar?.querySelectorAll('.nav-list li a');
    expect(links?.length).toBe(25);

    const firstLink = links?.[0];
    expect(firstLink?.getAttribute('href')).toBe('#intro');
    expect(firstLink?.textContent).toContain('ZAP とは何か');
  });

  it('renders Section 01: ZAP とは何か (#intro)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#intro');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 01');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('ZAP とは何か');

    expect(section?.textContent).toContain('Zed Attack Proxy');
    expect(section?.textContent).toContain('Checkmarx');
    expect(section?.textContent).toContain('DAST（Dynamic Application Security Testing：動的アプリケーションセキュリティテスト）');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(4);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/');
    expect(refLinks?.[1].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/');
    expect(refLinks?.[2].getAttribute('href')).toBe('https://github.com/zaproxy/zaproxy');
    expect(refLinks?.[3].getAttribute('href')).toBe('https://checkmarx.com/product/zap/');
  });

  it('renders Section 02: 免責事項・法的な注意点 (#disclaimer)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#disclaimer');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 02');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('免責事項・法的な注意点');

    const callout = section?.querySelector('.callout.callout-danger');
    expect(callout).not.toBeNull();
    expect(callout?.querySelector('i.ti-gavel')).not.toBeNull();
    expect(callout?.textContent).toContain('多くの法域において、許可を得ずに Web サイト／アプリケーションを「テスト」することは違法です');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const headers = table?.querySelectorAll('thead th');
    expect(headers?.[0].textContent?.trim()).toBe('用途');
    expect(headers?.[1].textContent?.trim()).toBe('対象');
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('学習・練習');
    expect(rows?.[1].textContent).toContain('業務利用');
    expect(rows?.[2].textContent).toContain('禁止');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(2);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/api/');
    expect(refLinks?.[1].getAttribute('href')).toBe('https://www.owasp.org/wstg');
  });

  it('renders Section 03: ZAP の主な特徴 (#features)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#features');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 03');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('ZAP の主な特徴');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(10);
    expect(rows?.[0].textContent).toContain('Manipulator-in-the-middle Proxy');
    expect(rows?.[1].textContent).toContain('Spider / Ajax Spider');
    expect(rows?.[2].textContent).toContain('Passive Scan');
    expect(rows?.[3].textContent).toContain('Active Scan');
    expect(rows?.[4].textContent).toContain('Automation Framework');
    expect(rows?.[5].textContent).toContain('REST API');
    expect(rows?.[6].textContent).toContain('HUD（Heads Up Display）');
    expect(rows?.[7].textContent).toContain('Docker イメージ / GitHub Actions');
    expect(rows?.[8].textContent).toContain('Add-on Marketplace');
    expect(rows?.[9].textContent).toContain('スクリプティング');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(3);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/features/');
    expect(refLinks?.[1].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/addons/');
    expect(refLinks?.[2].getAttribute('href')).toBe('https://www.zaproxy.org/docs/automate/');
  });

  it('renders Section 04: インストール方法 (#install)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#install');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 04');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('インストール方法');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(3);
    expect(h3s?.[0].textContent).toBe('インストール方法一覧');
    expect(h3s?.[1].textContent).toBe('リリースチャンネル');
    expect(h3s?.[2].textContent).toBe('Docker での起動例');

    const tables = section?.querySelectorAll('table');
    expect(tables?.length).toBe(2);

    // Platform table
    const platformRows = tables?.[0].querySelectorAll('tbody tr');
    expect(platformRows?.length).toBe(6);
    expect(platformRows?.[0].textContent).toContain('Windows');
    expect(platformRows?.[1].textContent).toContain('macOS');
    expect(platformRows?.[2].textContent).toContain('Linux');
    expect(platformRows?.[3].textContent).toContain('FreeBSD');
    expect(platformRows?.[4].textContent).toContain('クロスプラットフォーム');
    expect(platformRows?.[5].textContent).toContain('コンテナ');

    // Release channel table
    const channelRows = tables?.[1].querySelectorAll('tbody tr');
    expect(channelRows?.length).toBe(3);
    expect(channelRows?.[0].textContent).toContain('Stable（安定版）');
    expect(channelRows?.[1].textContent).toContain('Weekly（週次版）');
    expect(channelRows?.[2].textContent).toContain('Nightly（夜間版）');

    const callout = section?.querySelector('.callout.callout-info');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('ZAP 2.17.0');

    const codeBlock = section?.querySelector('pre code.language-bash');
    expect(codeBlock).not.toBeNull();
    expect(codeBlock?.textContent).toContain('docker pull ghcr.io/zaproxy/zaproxy:stable');
    expect(codeBlock?.textContent).toContain('docker run -u zap -p 8080:8080');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(3);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/download/');
    expect(refLinks?.[1].getAttribute('href')).toBe('https://www.zaproxy.org/docs/docker/about/');
    expect(refLinks?.[2].getAttribute('href')).toBe('https://github.com/zaproxy/zaproxy/releases');
  });

  it('renders Section 05: 全体アーキテクチャと基本用語 (#architecture)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#architecture');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 05');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('全体アーキテクチャと基本用語');

    expect(section?.textContent).toContain('manipulator-in-the-middle proxy');

    // Mermaid diagram
    const mermaidWrap = section?.querySelector('.mermaid-diagram');
    expect(mermaidWrap).not.toBeNull();

    const h3 = section?.querySelector('h3');
    expect(h3?.textContent).toBe('基本用語まとめ');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(7);
    expect(rows?.[0].textContent).toContain('Sites Tree');
    expect(rows?.[1].textContent).toContain('History');
    expect(rows?.[2].textContent).toContain('Context');
    expect(rows?.[3].textContent).toContain('Scope');
    expect(rows?.[4].textContent).toContain('Mode');
    expect(rows?.[5].textContent).toContain('Alert');
    expect(rows?.[6].textContent).toContain('Session');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(3);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/features/intercept/');
  });

  it('renders Section 06: 起動とプロキシ設定 (#proxy-setup)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#proxy-setup');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 06');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('起動とプロキシ設定');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toBe('手順');
    expect(h3s?.[1].textContent).toBe('HTTPS 通信を見るために');

    const steps = section?.querySelectorAll('ol li');
    expect(steps?.length).toBe(5);
    expect(steps?.[1].textContent).toContain('localhost:8080');

    expect(section?.textContent).toContain('Root CA 証明書');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(3);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/');
  });

  it('renders Section 07: Quick Start：最速でスキャンを試す (#quickstart)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#quickstart');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 07');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('Quick Start：最速でスキャンを試す');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(3);
    expect(rows?.[0].textContent).toContain('Automated Scan');
    expect(rows?.[1].textContent).toContain('Manual Explore');
    expect(rows?.[2].textContent).toContain('Learn More');

    const h3 = section?.querySelector('h3');
    expect(h3?.textContent).toBe('Automated Scan を試す');

    const callout = section?.querySelector('.callout.callout-warning');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('Automated Scan は Active Scan（実際の攻撃ペイロード送信）まで自動実行するため');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(2);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/addons/quick-start/');
  });

  it('renders Section 08: Sites Tree・Context・Scope・Mode (#scsm)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#scsm');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 08');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('Sites Tree・Context・Scope・Mode');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(3);
    expect(h3s?.[0].textContent).toBe('Context（コンテキスト）');
    expect(h3s?.[1].textContent).toBe('Scope（スコープ）');
    expect(h3s?.[2].textContent).toBe('Mode（モード）');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(4);
    expect(rows?.[0].textContent).toContain('Safe');
    expect(rows?.[1].textContent).toContain('Protected');
    expect(rows?.[2].textContent).toContain('Standard');
    expect(rows?.[3].textContent).toContain('ATTACK');

    // Mermaid diagram
    const mermaidWrap = section?.querySelector('.mermaid-diagram');
    expect(mermaidWrap).not.toBeNull();

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(4);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/features/contexts/');
  });

  it('renders Section 09: 手動探索（Explore）と MITM プロキシ (#manual-explore)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#manual-explore');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 09');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('手動探索（Explore）と MITM プロキシ');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toBe('手動探索の考え方');
    expect(h3s?.[1].textContent).toBe('Breakpoints（ブレークポイント）');

    const steps = section?.querySelectorAll('ol li');
    expect(steps?.length).toBe(4);

    expect(section?.textContent).toContain('Breakpoints');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(3);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/pentest/');
  });

  it('renders Section 10: Spider（クローラー） (#spider)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#spider');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 10');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('Spider（クローラー）');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toBe('通常の Spider と Ajax Spider の違い');
    expect(h3s?.[1].textContent).toBe('使い方');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(4);
    expect(rows?.[0].textContent).toContain('解析対象');
    expect(rows?.[1].textContent).toContain('動作方式');
    expect(rows?.[2].textContent).toContain('速度');
    expect(rows?.[3].textContent).toContain('向いているアプリ');

    const steps = section?.querySelectorAll('ol li');
    expect(steps?.length).toBe(4);

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(4);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/features/spider/');
  });

  it('renders Section 11: Passive Scan（受動的スキャン） (#passive-scan)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#passive-scan');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 11');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('Passive Scan（受動的スキャン）');

    const callout = section?.querySelector('.callout.callout-success');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('Passive Scan は安全なため、本番環境に対しても実行可能です');

    const h3 = section?.querySelector('h3');
    expect(h3?.textContent).toBe('Passive Scan で検出できる代表例');

    const items = section?.querySelectorAll('ul li');
    expect(items?.length).toBeGreaterThanOrEqual(5);

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(3);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/features/pscan/');
  });

  it('renders Section 12: Active Scan（能動的スキャン） (#active-scan)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#active-scan');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 12');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('Active Scan（能動的スキャン）');

    const callout = section?.querySelector('.callout.callout-danger');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('Active Scan は実際に攻撃を行うため、必ず許可を得た対象・テスト環境に対してのみ実行してください');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toBe('実行の流れ');
    expect(h3s?.[1].textContent).toBe('Active Scan の入力ベクトル設定');

    const steps = section?.querySelectorAll('ol li');
    expect(steps?.length).toBe(5);

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(4);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/features/ascan/');
  });

  it('renders Section 13: 基本的なペネトレーションテストの流れ (#pentest-flow)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#pentest-flow');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 13');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('基本的なペネトレーションテストの流れ');

    // Mermaid diagram
    const mermaidWrap = section?.querySelector('.mermaid-diagram');
    expect(mermaidWrap).not.toBeNull();

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0].textContent).toContain('① Explore');
    expect(rows?.[1].textContent).toContain('② Spider');
    expect(rows?.[2].textContent).toContain('③ Forced Browse');
    expect(rows?.[3].textContent).toContain('④ Active Scan');
    expect(rows?.[4].textContent).toContain('⑤ Manual Test');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(4);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/pentest/');
  });

  it('renders Section 14: Alerts（検出結果）の見方 (#alerts)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#alerts');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 14');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('Alerts（検出結果）の見方');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toBe('Alert の主なフィールド');
    expect(h3s?.[1].textContent).toBe('Risk × Confidence の考え方');

    const tables = section?.querySelectorAll('table');
    expect(tables?.length).toBe(2);

    const fieldRows = tables?.[0].querySelectorAll('tbody tr');
    expect(fieldRows?.length).toBe(9);
    expect(fieldRows?.[0].textContent).toContain('Name');
    expect(fieldRows?.[1].textContent).toContain('URL');
    expect(fieldRows?.[2].textContent).toContain('Risk（リスク）');
    expect(fieldRows?.[3].textContent).toContain('Confidence（確信度）');

    const matrixRows = tables?.[1].querySelectorAll('tbody tr');
    expect(matrixRows?.length).toBe(4);
    expect(matrixRows?.[0].textContent).toContain('High');
    expect(matrixRows?.[1].textContent).toContain('Medium');
    expect(matrixRows?.[2].textContent).toContain('Low');
    expect(matrixRows?.[3].textContent).toContain('Informational');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(5);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/features/alerts/');
  });

  it('renders Section 15: Authentication（認証）の設定 (#authentication)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#authentication');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 15');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('Authentication（認証）の設定');

    // Mermaid diagram
    const mermaidWrap = section?.querySelector('.mermaid-diagram');
    expect(mermaidWrap).not.toBeNull();

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(3);
    expect(h3s?.[0].textContent).toBe('各ステップの概要');
    expect(h3s?.[1].textContent).toBe('実践的な設定手順（フォームベース認証の例）');
    expect(h3s?.[2].textContent).toBe('Forced User Mode との違い');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0].textContent).toContain('Context 作成');
    expect(rows?.[1].textContent).toContain('Session Management Method');
    expect(rows?.[2].textContent).toContain('Authentication Method');
    expect(rows?.[3].textContent).toContain('Verification Strategy');
    expect(rows?.[4].textContent).toContain('Users');

    const steps = section?.querySelectorAll('ol li');
    expect(steps?.length).toBe(6);

    expect(section?.textContent).toContain('Forced User Mode');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(7);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/features/authentication/');
  });

  it('renders Section 16: Scan Policy（スキャンポリシー） (#scan-policy)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#scan-policy');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 16');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('Scan Policy（スキャンポリシー）');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(5);
    expect(rows?.[0].textContent).toContain('Default Policy');
    expect(rows?.[1].textContent).toContain('API Policy');
    expect(rows?.[2].textContent).toContain('Developer Standard / Full / CI-CD Policy');
    expect(rows?.[3].textContent).toContain('QA Standard / Full / CI-CD Policy');
    expect(rows?.[4].textContent).toContain('Penetration Tester Policy');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(3);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/start/features/scanpolicy/');
  });

  it('renders Section 17: HUD（Heads Up Display） (#hud)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#hud');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 17');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('HUD（Heads Up Display）');

    const callout = section?.querySelector('.callout.callout-warning');
    expect(callout).not.toBeNull();
    expect(callout?.textContent).toContain('重要な留意点');
    expect(callout?.textContent).toContain('HUD は開発が活発ではなくなっており');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(4);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/addons/hud/');
  });

  it('renders Section 18: レポートの生成 (#reports)', () => {
    const { container } = render(<Page />);
    const section = container.querySelector('section#reports');
    expect(section).not.toBeNull();

    const eyebrow = section?.querySelector('.section-eyebrow');
    expect(eyebrow?.textContent).toContain('SECTION 18');

    const h2 = section?.querySelector('h2');
    expect(h2?.textContent).toBe('レポートの生成');

    const h3s = section?.querySelectorAll('h3');
    expect(h3s?.length).toBe(2);
    expect(h3s?.[0].textContent).toBe('主なレポートテンプレート');
    expect(h3s?.[1].textContent).toBe('生成方法');

    const table = section?.querySelector('table');
    expect(table).not.toBeNull();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBe(8);
    expect(rows?.[0].textContent).toContain('Modern HTML Report');
    expect(rows?.[1].textContent).toContain('Traditional HTML');
    expect(rows?.[2].textContent).toContain('Risk and Confidence HTML');
    expect(rows?.[7].textContent).toContain('SARIF JSON Report');

    const refs = section?.querySelector('.refs');
    expect(refs).not.toBeNull();
    const refLinks = refs?.querySelectorAll('ul li a');
    expect(refLinks?.length).toBe(5);
    expect(refLinks?.[0].getAttribute('href')).toBe('https://www.zaproxy.org/docs/desktop/addons/report-generation/');
  });
});
