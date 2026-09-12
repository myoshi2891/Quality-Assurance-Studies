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
});
