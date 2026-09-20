import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AppiumGuidePage from '../../app/appium-essentials-guide/page';

// Mock Mermaid component to avoid dynamic import / rendering issues in test environment
vi.mock('@/components/Mermaid', () => ({
  default: function DummyMermaid({ chart }: { chart: string }) {
    return <pre data-testid="mermaid">{chart}</pre>;
  },
}));

describe('Appium Essentials Guide - Category 1 (Foundation & Architecture)', () => {
  it('renders H1 title and hero section correctly', () => {
    render(<AppiumGuidePage />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeDefined();
    expect(h1.textContent).toContain('Appium Essentials 完全ガイド');
    expect(h1.textContent).toContain('モバイルテスト自動化の基礎とベストプラクティス');

    expect(screen.getByText('Appium 3.x対応')).toBeDefined();
    expect(screen.getByText('2026年8月26日更新')).toBeDefined();
  });

  it('renders sidebar navigation with all 17 anchor links', () => {
    const { container } = render(<AppiumGuidePage />);
    const navLinks = container.querySelectorAll('.navlist a');
    expect(navLinks.length).toBe(17);
    expect(navLinks[0].getAttribute('href')).toBe('#about');
    expect(navLinks[1].getAttribute('href')).toBe('#what-is-appium');
    expect(navLinks[2].getAttribute('href')).toBe('#architecture');
    expect(navLinks[3].getAttribute('href')).toBe('#version-history');
    expect(navLinks[16].getAttribute('href')).toBe('#references');
  });

  it('renders Section 1: #about (このガイドについて)', () => {
    render(<AppiumGuidePage />);
    const sec = document.getElementById('about');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('1このガイドについて');
    expect(sec?.textContent).toContain('誰に向けたガイドか');
  });

  it('renders Section 2: #what-is-appium (Appiumとは何か) with comparison table', () => {
    render(<AppiumGuidePage />);
    const sec = document.getElementById('what-is-appium');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('2Appiumとは何か');

    const table = sec?.querySelector('table');
    expect(table).toBeDefined();
    const ths = table?.querySelectorAll('th');
    expect(ths?.length).toBe(4);
    expect(ths?.[0].textContent).toBe('プラットフォーム');
    expect(ths?.[1].textContent).toBe('ドライバー名');
    expect(ths?.[2].textContent).toBe('対象OS');
    expect(ths?.[3].textContent).toBe('基盤テストフレームワーク');
  });

  it('renders Section 3: #architecture (アーキテクチャ) with diagram-arch', () => {
    render(<AppiumGuidePage />);
    const sec = document.getElementById('architecture');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('3Appiumのアーキテクチャを理解する');

    const figCaption = sec?.querySelector('.fig-caption');
    expect(figCaption?.textContent).toBe('図1: Appiumのクライアント・サーバーアーキテクチャ');

    const mermaids = screen.getAllByTestId('mermaid');
    const archDiagram = mermaids.find(m => m.textContent?.includes('UiAutomator2ドライバー'));
    expect(archDiagram).toBeDefined();
    expect(archDiagram?.textContent).toContain('HTTPリクエスト');
    expect(archDiagram?.textContent).toContain('W3C WebDriverプロトコル');
  });

  it('renders Section 4: #version-history (バージョンの歴史と現在地) with diagram and table', () => {
    render(<AppiumGuidePage />);
    const sec = document.getElementById('version-history');
    expect(sec).toBeDefined();
    expect(sec?.querySelector('h2')?.textContent).toContain('4Appiumのバージョンの歴史と現在地');

    const figCaption = sec?.querySelector('.fig-caption');
    expect(figCaption?.textContent).toBe('図2: Appiumバージョンの変遷');

    // Diagram should NOT contain full-width wave dash 〜 (replaced with から)
    const mermaids = screen.getAllByTestId('mermaid');
    const versionDiagram = mermaids.find(m => m.textContent?.includes('Appium 1.x'));
    expect(versionDiagram).toBeDefined();
    expect(versionDiagram?.textContent).not.toContain('〜');
    expect(versionDiagram?.textContent).toContain('2013年から');

    const table = sec?.querySelector('table');
    expect(table).toBeDefined();
    const ths = table?.querySelectorAll('th');
    expect(ths?.length).toBe(5);
    expect(ths?.[0].textContent).toBe('バージョン');
    expect(ths?.[1].textContent).toBe('リリース時期');
  });
});
