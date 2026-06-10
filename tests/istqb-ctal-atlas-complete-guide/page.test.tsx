import { describe, it, expect, afterEach, beforeAll, afterAll, mock } from 'bun:test';
import { render, screen, cleanup, act } from '@testing-library/react';
import Page from '../../app/istqb-ctal-atlas-complete-guide/page';

export let mockObserverCallback: IntersectionObserverCallback | null = null;
export let mockObserverDisconnect: ReturnType<typeof mock> | null = null;

class MockIntersectionObserver {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    mockObserverCallback = callback;
    mockObserverDisconnect = mock(() => {});
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  observe(target: Element) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  unobserve(target: Element) {}
  disconnect() {
    if (mockObserverDisconnect) mockObserverDisconnect();
  }
}
let _originalIntersectionObserver: typeof window.IntersectionObserver;

beforeAll(() => {
  _originalIntersectionObserver = window.IntersectionObserver;
  window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  window.IntersectionObserver = _originalIntersectionObserver;
});

afterEach(() => {
  cleanup();
});

describe('ISTQB CT-ATLaS Complete Guide Page', () => {
  it('renders the hero section with correct title', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('CT-ATLaS');
    expect(heading.textContent).toContain('完全学習ガイド');
  });

  it('renders Overview section', () => {
    render(<Page />);
    expect(screen.getAllByText(/資格概要と学習ロードマップ/).length).toBeGreaterThan(0);
  });

  it('renders Chapter 1 Quality Assistance section', () => {
    render(<Page />);
    expect(screen.getAllByText(/クオリティアシスタンス/).length).toBeGreaterThan(0);
  });

  it('renders Chapter 2 Value Stream section', () => {
    render(<Page />);
    expect(screen.getAllByText(/バリュードリブン組織における品質とフローの改善/).length).toBeGreaterThan(0);
  });

  it('renders Chapter 3 Continuous Improvement section', () => {
    render(<Page />);
    expect(screen.getAllByText(/品質とテストの継続的改善/).length).toBeGreaterThan(0);
  });

  it('renders Chapter 4 Organizational Test Strategy section', () => {
    render(<Page />);
    expect(screen.getAllByText(/バリュードリブン組織における組織的テスト戦略/).length).toBeGreaterThan(0);
  });

  it('renders Chapter 5 Test Processes section', () => {
    render(<Page />);
    expect(screen.getAllByText(/バリュードリブン組織におけるテストプロセス/).length).toBeGreaterThan(0);
  });

  it('updates active nav link on intersection and cleans up on unmount', () => {
    const { unmount } = render(<Page />);

    // Trigger intersection for ch1 (クオリティアシスタンス)
    if (mockObserverCallback) {
      act(() => {
        mockObserverCallback!(
          [
            {
              isIntersecting: true,
              target: { id: 'ch1' } as Element,
              boundingClientRect: { top: 100 } as DOMRectReadOnly,
              intersectionRatio: 1,
              intersectionRect: {} as DOMRectReadOnly,
              rootBounds: null,
              time: Date.now(),
            },
          ],
          {} as IntersectionObserver
        );
      });
    }

    // Since NavBar is a child and state updates, we query the DOM
    const link = document.querySelector('a[href="#ch1"]');
    expect(link).not.toBeNull();
    expect(link?.classList.contains('active')).toBe(true);
    expect(link?.getAttribute('aria-current')).toBe('location');

    unmount();
    expect(mockObserverDisconnect).toHaveBeenCalled();
  });
});
