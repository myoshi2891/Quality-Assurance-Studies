import { describe, it, expect, afterEach, beforeAll } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import { DisclaimerBanner } from '../../components/DisclaimerBanner';

type ResizeObserverCallback = (
  entries: ResizeObserverEntry[],
  observer: ResizeObserver,
) => void;

beforeAll(() => {
  // happy-dom には ResizeObserver が無いため、最小限のスタブを注入する。
  // 観測を呼び出してもコールバックは発火しない（同期更新のみを検証する）。
  if (typeof globalThis.ResizeObserver === 'undefined') {
    class ResizeObserverStub implements ResizeObserver {
      constructor(_cb: ResizeObserverCallback) {}
      observe(): void {}
      unobserve(): void {}
      disconnect(): void {}
    }
    (globalThis as unknown as { ResizeObserver: typeof ResizeObserverStub }).ResizeObserver =
      ResizeObserverStub;
  }
});

const waitForFrame = () =>
  new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

afterEach(() => {
  cleanup();
  document.documentElement.style.removeProperty('--disclaimer-height');
});

describe('DisclaimerBanner', () => {
  it('renders the fixed disclaimer text', () => {
    render(<DisclaimerBanner />);
    expect(
      screen.getByText(/本サイトは個人学習を目的として作成したものです/),
    ).toBeDefined();
    expect(
      screen.getByText(/最新の公式情報は各試験プロバイダーの公式サイトをご確認ください/),
    ).toBeDefined();
  });

  it('syncs --disclaimer-height CSS variable after mount', async () => {
    render(<DisclaimerBanner />);
    await waitForFrame();
    const value = document.documentElement.style.getPropertyValue('--disclaimer-height');
    expect(value).toMatch(/^\d+(\.\d+)?px$/);
  });

  it('uses fixed positioning at top:60px (Header と重ならない配置)', () => {
    render(<DisclaimerBanner />);
    const banner = screen.getByText(/本サイトは個人学習を目的として/).parentElement;
    expect(banner).not.toBeNull();
    expect(banner?.className).toContain('fixed');
    expect(banner?.className).toContain('top-[60px]');
  });
});
