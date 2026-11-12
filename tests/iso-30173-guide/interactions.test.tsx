import { describe, expect, it, afterEach } from 'bun:test';
import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot, type Root } from 'react-dom/client';
import { sourceModule } from '../helpers/source-module';

const base = 'app/iso-30173-guide';

const expectedAlternatives: Record<string, string> = {
  'mmd-1': 'ISO/IEC 30173:2023 図 1：規格の3つの目的。ISO/IEC 30173 の目的から、目的1：デジタルツインの概念と構成を理解する共通基盤を、関連概念の定義で提供する、目的2：対象エンティティとの関係でデジタルツインのライフサイクルを概観する、目的3：標準・仕様・デジタルツインの利用を開発するための基盤を提供する、の3つの目的への展開を示す。',
  'mmd-2': 'ISO/IEC 30173:2023 図 2：デジタルツインの基本形。対象エンティティ（現実側）とデジタル表現（デジタル側）が、データ接続（適切な同期レート）で双方向に結ばれ、デジタル表現から能力の例（接続、統合、分析、シミュレーション、可視化、最適化、協調）へ展開される構造を示す。',
  'mmd-3': 'ISO/IEC 30173:2023 図 3：構成の俯瞰図。土台（序文、1 適用範囲、2 引用規格なし、3 用語と定義、4 記号・略語）から中核（5 概念、6 ステークホルダー、7 機能的な見方）へ進み、中核から参考情報（附属書A：他規格の定義比較、附属書B：記号論）へ展開する全体の構造を示す。',
  'mmd-4': 'ISO/IEC 30173:2023 図 4：デジタルツイン システムコンテキスト（図1）。デジタルツインシステム、サービス、応用領域、インフラ、システムの側面の5つの要素で構成されるシステムコンテキストを示す。',
  'mmd-5': 'ISO/IEC 30173:2023 図 5：デジタルツインの種類（4種類）。コンポーネント デジタルツイン、アセット デジタルツイン、システム デジタルツイン、プロセス デジタルツインの4つの粒度・対象による分類と展開を示す。',
  'mmd-6': 'ISO/IEC 30173:2023 図 6：デジタルツイン ステークホルダー（図3）。システムのステークホルダー（開発者、リソース提供者、インテグレーター、ユーザー、運用者）とエコシステムパートナー（インフラ提供者、サービス提供者、標準化団体、政府・コミュニティ）の分類と関係を示す。',
  'mmd-7': 'ISO/IEC 30173:2023 図 7：関連規格との関係。ISO/IEC 30141（IoT参照アーキテクチャ）がISO 23247シリーズ（製造向け）の基礎となり、ISO/IEC 20924（IoT用語）がISO/IEC 30173のentity定義の出典となり、ISO/IEC 30173とISO/IEC 30172（ユースケース）が連携し、ISO/IEC 30173がISO 23247への用語の共通基盤となる関係を示す。',
  'mmd-8': 'ISO/IEC 30173:2023 図 8：国際的な開発者コミュニティの実践との対応マップ。ISO/IEC 30173（共通の用語と概念）が、DTC CPT（能力で要件を整理）、Azure Digital Twins + DTDL（モデル言語とサービス）、Eclipse Ditto + WoT（オープンソースの実装基盤）、ISO 23247（製造向けフレームワーク）のそれぞれの用語の土台となる関係を示す。',
  'mmd-9': 'ISO/IEC 30173:2023 図 9：これはデジタルツインかを判定するチェックリスト。対象システムを評価するから、対象エンティティは明確か、デジタル表現はあるか、対象との間にデータ接続があるか、用途に適切な同期レートが定義済みか、物理状態とデジタル状態の収束を確認できるか、の5段階の判定と改善アクションを経て合致に至るフローを示す。',
  'mmd-10': 'ISO/IEC 30173:2023 図 10：学習ロードマップ。ステップ1：序文と適用範囲を読む、ステップ2：3.1.1 と 3.1.2 を精読、ステップ3：第3章の用語を一通り読む、ステップ4：第5章の概念を読む、ステップ5：第6章と第7章を読む、ステップ6：附属書Aで他規格の定義と比較、ステップ7：ISO 23247 や 30172 などへ進む、の7段階の学習順序を示す。',
};

afterEach(() => {
  cleanup();
});

describe('source diagrams accessibility and fallback', () => {
  const diagramComponent = () => sourceModule(`${base}/Diagram.tsx`).default as React.ComponentType<{ id: string }>;

  for (const [id, expectedText] of Object.entries(expectedAlternatives)) {
    it(`${id}: sentence-style accessible name conveys topic and structure`, () => {
      const Diagram = diagramComponent();
      const r = render(<Diagram id={id} />);
      const el = r.container.querySelector(`#${id}`);
      expect(el).not.toBeNull();
      expect(el?.getAttribute('role')).toBe('img');
      expect(el?.getAttribute('aria-label')).toBe(expectedText);
      expect(el?.getAttribute('tabindex')).toBe('0');
    });

    it(`${id}: rendering failure shows fallback alert and accessible name`, () => {
      let renderErrorCallback: (() => void) | undefined;
      const Diagram = sourceModule(`${base}/Diagram.tsx`, {
        onMermaidChart: (_chart, onError) => {
          renderErrorCallback = onError;
        },
      }).default as React.ComponentType<{ id: string }>;

      const r = render(<Diagram id={id} />);
      expect(r.queryByRole('alert')).toBeNull();

      act(() => {
        renderErrorCallback?.();
      });

      const alert = r.getByRole('alert');
      expect(alert.textContent).toContain('図表の描画に失敗しました');
      expect(r.container.textContent).toContain(expectedText);
    });
  }
});

describe('NavBar interactions and accessibility', () => {
  const navBar = () => sourceModule(`${base}/NavBar.tsx`).default as React.ComponentType;

  it('toggles mobile menu, manages aria-expanded and keyboard focus', () => {
    const original = window.matchMedia;
    window.matchMedia = ((query: string) => ({
      matches: query.includes('max-width: 900px'),
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    })) as unknown as typeof window.matchMedia;

    try {
      const NavBar = navBar();
      const r = render(<NavBar />);
      const button = r.getByRole('button', { name: '目次を開閉' });
      const nav = r.container.querySelector('nav.sidebar')!;

      expect(button.getAttribute('aria-expanded')).toBe('false');
      expect(nav.classList.contains('open')).toBe(false);

      // Open
      fireEvent.click(button);
      expect(button.getAttribute('aria-expanded')).toBe('true');
      expect(nav.classList.contains('open')).toBe(true);

      // Close with Escape
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(button.getAttribute('aria-expanded')).toBe('false');
      expect(nav.classList.contains('open')).toBe(false);
      expect(document.activeElement).toBe(button);

      // Re-open and close with link click
      fireEvent.click(button);
      expect(button.getAttribute('aria-expanded')).toBe('true');
      const firstLink = nav.querySelector('a')!;
      fireEvent.click(firstLink);
      expect(button.getAttribute('aria-expanded')).toBe('false');
    } finally {
      window.matchMedia = original;
    }
  });

  it('keeps menu open when clicking with modifier keys', () => {
    const original = window.matchMedia;
    window.matchMedia = ((query: string) => ({
      matches: query.includes('max-width: 900px'),
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    })) as unknown as typeof window.matchMedia;

    try {
      const NavBar = navBar();
      for (const modifier of ['ctrlKey', 'metaKey', 'shiftKey', 'altKey'] as const) {
        const r = render(<NavBar />);
        const button = r.getByRole('button', { name: '目次を開閉' });
        fireEvent.click(button);
        expect(button.getAttribute('aria-expanded')).toBe('true');

        const link = r.container.querySelector('nav.sidebar a')!;
        fireEvent.click(link, { [modifier]: true });
        expect(button.getAttribute('aria-expanded')).toBe('true');
        r.unmount();
      }
    } finally {
      window.matchMedia = original;
    }
  });

  it('isolates main content with inert attribute when open on mobile', () => {
    const original = window.matchMedia;
    window.matchMedia = ((query: string) => ({
      matches: query.includes('max-width: 900px'),
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    })) as unknown as typeof window.matchMedia;

    const main = document.createElement('main');
    main.className = 'main';
    document.body.appendChild(main);

    try {
      const NavBar = navBar();
      const r = render(<NavBar />);
      const button = r.getByRole('button', { name: '目次を開閉' });

      expect(main.hasAttribute('inert')).toBe(false);

      fireEvent.click(button);
      expect(main.hasAttribute('inert')).toBe(true);

      fireEvent.click(button);
      expect(main.hasAttribute('inert')).toBe(false);
    } finally {
      main.remove();
      window.matchMedia = original;
    }
  });
});

for (const development of [false, true]) {
  it(`hydrates the real page without DOM warnings (development=${development})`, async () => {
    const Page = sourceModule(`${base}/page.tsx`, { development }).default as React.ComponentType;
    const host = document.createElement('div');
    host.innerHTML = renderToString(<Page />);
    document.body.append(host);
    const warnings: unknown[][] = [];
    const errors: unknown[] = [];
    const originalError = console.error;
    console.error = (...args: unknown[]) => warnings.push(args);
    let root: Root | undefined;
    try {
      await act(async () => {
        root = hydrateRoot(host, <Page />, { onRecoverableError: e => errors.push(e) });
      });
      const button = host.querySelector('.toggle')!;
      await act(async () => {
        fireEvent.click(button);
      });
      expect(button.getAttribute('aria-expanded')).toBe('true');
      await act(async () => {
        fireEvent.keyDown(document, { key: 'Escape' });
      });
      expect(button.getAttribute('aria-expanded')).toBe('false');
      expect(errors).toEqual([]);
      expect(warnings).toEqual([]);
      expect(
        Array.from(host.querySelectorAll('table,thead,tbody,tr')).flatMap(n =>
          Array.from(n.childNodes).filter(c => c.nodeType === Node.TEXT_NODE),
        ),
      ).toHaveLength(0);
    } finally {
      if (root) await act(async () => root!.unmount());
      console.error = originalError;
      host.remove();
    }
  });
}
