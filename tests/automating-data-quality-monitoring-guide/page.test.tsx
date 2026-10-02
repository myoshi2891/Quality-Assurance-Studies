import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, mock } from 'bun:test';
import { cleanup, fireEvent, render } from '@testing-library/react';
import mermaid from 'mermaid';
import React from 'react';
import Page from '../../app/automating-data-quality-monitoring-guide/page';
import NavBar, {
  TOC_GROUPS,
  TOC_ITEMS,
} from '../../app/automating-data-quality-monitoring-guide/NavBar';
import {
  loadSourceDocument,
  navSignature,
  sectionText,
  structureSignature,
  textBlocks,
} from './source';

/**
 * 移行元 HTML（Automating-data-quality-monitoring-guide.html）を仕様として扱い、
 * 固定配列（1 対 1 照合）と元 HTML との機械的突合の二重でカバレッジを担保する。
 */

const sourceDoc = loadSourceDocument();

const renderedCharts: string[] = [];
let originalMermaidRender: typeof mermaid.render;
let originalIntersectionObserver: typeof window.IntersectionObserver;

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  originalIntersectionObserver = window.IntersectionObserver;
  mermaid.render = mock(async (_id: string, text: string) => {
    renderedCharts.push(text);
    return { svg: '<svg data-testid="mock-mermaid"></svg>', diagramType: 'flowchart' };
  }) as unknown as typeof mermaid.render;
  window.IntersectionObserver = mock(() => ({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })) as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  mermaid.render = originalMermaidRender;
  window.IntersectionObserver = originalIntersectionObserver;
});

beforeEach(() => {
  renderedCharts.length = 0;
});

afterEach(() => cleanup());

function getSourceSection(id: string): Element {
  const el = sourceDoc.getElementById(id);
  if (!el) throw new Error(`移行元に #${id} が存在しません`);
  return el;
}

function getRenderedSection(container: HTMLElement, id: string): Element {
  const el = container.querySelector(`section#${id}`);
  if (!el) throw new Error(`移行先に section#${id} が存在しません`);
  return el;
}

/** 元 HTML のセクションと、DOM 構造・テキストブロック・全文が一致することを検証する */
function expectSectionMatchesSource(container: HTMLElement, id: string): void {
  const source = getSourceSection(id);
  const rendered = getRenderedSection(container, id);
  expect(structureSignature(rendered)).toEqual(structureSignature(source));
  expect(textBlocks(rendered)).toEqual(textBlocks(source));
  expect(sectionText(rendered)).toBe(sectionText(source));
}

function headingTexts(section: Element, selector = 'h2, h3, h4'): string[] {
  return Array.from(section.querySelectorAll(selector)).map((h) =>
    (h.textContent ?? '').replace(/\s+/g, ' ').trim()
  );
}

describe('C0: ナビゲーション（NavBar）', () => {
  const EXPECTED_GROUPS = ['はじめに', 'ステップ', '応用・まとめ'];
  const EXPECTED_ITEMS: ReadonlyArray<[string, string]> = [
    ['intro', 'この記事について'],
    ['book-info', '書籍情報'],
    ['roadmap', '学習ロードマップ'],
    ['step0', 'なぜ経営課題なのか'],
    ['step1', 'データファクトリー'],
    ['step2', '監視の4本柱'],
    ['step3', 'ROIで判断する'],
    ['step4', 'MLモデルの作り方'],
    ['step5', '実データで機能させる'],
    ['step6', '通知設計とアラート疲れ'],
    ['step7', 'スタック全体と統合'],
    ['step8', '本番展開と定着'],
    ['other-cases', '他社事例に学ぶ'],
    ['oss', 'OSSエコシステム'],
    ['checklist', '実践チェックリスト'],
    ['summary', 'まとめ'],
    ['references', '参考文献・出典'],
  ];

  it('TOC_GROUPS が元 HTML のグループ見出しと一致する', () => {
    expect(TOC_GROUPS.map((g) => g.label)).toEqual(EXPECTED_GROUPS);
  });

  it('TOC_ITEMS 17 件が出現順に id とラベルで一致する', () => {
    expect(TOC_ITEMS.map((item) => [item.id, item.label])).toEqual(EXPECTED_ITEMS);
  });

  it('サイドバーが元 HTML の目次（グループ・リンク・アイコン・番号バッジ）と一致する', () => {
    const { container } = render(<NavBar />);
    const sidebar = container.querySelector('.sidebar');
    const sourceSidebar = sourceDoc.querySelector('.sidebar');
    expect(sidebar).not.toBeNull();
    expect(sourceSidebar).not.toBeNull();
    if (!sidebar || !sourceSidebar) return;
    expect(navSignature(sidebar)).toEqual(navSignature(sourceSidebar));
  });

  it('ステップ 0〜8 は番号バッジ、それ以外はアイコンで描画される', () => {
    const { container } = render(<NavBar />);
    const badges = Array.from(container.querySelectorAll('.sidebar .n-num')).map((n) =>
      n.textContent?.trim()
    );
    expect(badges).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8']);
    expect(container.querySelectorAll('.sidebar .nav-a > i.ti').length).toBe(8);
  });

  it('ブランド名（サイドバー・モバイルバー）が元 HTML と一致する', () => {
    const { container } = render(<NavBar />);
    expect(container.querySelector('.sidebar .brand')?.textContent?.trim()).toBe(
      'データ品質モニタリング'
    );
    expect(container.querySelector('.mobile-bar .brand')?.textContent?.trim()).toBe(
      'データ品質モニタリング自動化ガイド'
    );
  });

  it('モバイルトグルでサイドバーとスクリムが開閉し aria-expanded が遷移する', () => {
    const { container } = render(<NavBar />);
    const toggle = container.querySelector('#mobileToggle');
    const sidebar = container.querySelector('#sidebar');
    const scrim = container.querySelector('#scrim');
    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    expect(sidebar?.classList.contains('open')).toBe(false);

    if (!toggle) throw new Error('mobile toggle missing');
    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(sidebar?.classList.contains('open')).toBe(true);
    expect(scrim?.classList.contains('show')).toBe(true);

    if (!scrim) throw new Error('scrim missing');
    fireEvent.click(scrim);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(sidebar?.classList.contains('open')).toBe(false);
  });

  it('現在位置のリンクに aria-current="location" が付与される', () => {
    const { container } = render(<NavBar />);
    const current = container.querySelectorAll('.sidebar .nav-a[aria-current="location"]');
    expect(current.length).toBe(1);
    expect(current[0]?.getAttribute('href')).toBe('#intro');
  });
});

describe('C0: ページ土台とヒーロー・intro', () => {
  it('ページ固有スコープのルートクラスと main/content が存在する', () => {
    const { container } = render(<Page />);
    expect(container.querySelector('.dqm-layout')).not.toBeNull();
    expect(container.querySelector('.dqm-layout > .sidebar')).not.toBeNull();
    expect(container.querySelector('.dqm-layout main.main > .content')).not.toBeNull();
  });

  it('ヒーローのキッカー・h1・書名・リードが元 HTML と一致する', () => {
    const { container } = render(<Page />);
    const hero = container.querySelector('#intro .hero');
    expect(hero).not.toBeNull();
    expect(hero?.querySelector('.hero-kicker')?.textContent?.trim()).toBe(
      '初学者向け・ステップバイステップ解説'
    );
    expect(hero?.querySelector('h1')?.textContent?.replace(/\s+/g, '')).toBe(
      'データ品質モニタリングの自動化を学ぶルールベースを超えて機械学習でスケールする方法'
    );
    expect(hero?.querySelector('h1 .book-title')?.textContent?.trim()).toBe(
      'ルールベースを超えて機械学習でスケールする方法'
    );
    expect(hero?.querySelector('p.lead')?.textContent).toContain(
      'Jeremy Stanley, Paige Schwartz 著'
    );
  });

  it('intro の見出し・段落・引用リンク・コールアウトが固定配列と一致する', () => {
    const { container } = render(<Page />);
    const section = getRenderedSection(container, 'intro');
    expect(headingTexts(section, 'h2')).toEqual(['この記事について']);
    expect(section.querySelectorAll(':scope > p').length).toBe(3);

    const refLinks = Array.from(section.querySelectorAll('sup > a')).map((a) =>
      a.getAttribute('href')
    );
    expect(refLinks).toEqual(['#ref1', '#ref2']);

    const callouts = section.querySelectorAll('.callout');
    expect(callouts.length).toBe(1);
    expect(callouts[0]?.classList.contains('tip')).toBe(false);
    expect(callouts[0]?.classList.contains('warn')).toBe(false);
    expect(callouts[0]?.querySelector('i.ti.ti-users')).not.toBeNull();
    expect(callouts[0]?.querySelector('strong')?.textContent).toBe('対象読者');
  });

  it('intro セクションが元 HTML と DOM 構造・テキストともに一致する', () => {
    const { container } = render(<Page />);
    expectSectionMatchesSource(container, 'intro');
  });
});
