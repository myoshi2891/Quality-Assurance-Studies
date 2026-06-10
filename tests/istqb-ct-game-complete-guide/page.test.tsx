import { afterEach, beforeAll, describe, it, expect, mock } from 'bun:test';
import { render, screen, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/istqb-ct-game-complete-guide/page';

afterEach(() => cleanup());

let observerCallback: (entries: IntersectionObserverEntry[]) => void = () => {};

beforeAll(() => {
  const mockIntersectionObserver = mock((callback: (entries: IntersectionObserverEntry[]) => void) => {
    observerCallback = callback;
    return {
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    };
  });
  window.IntersectionObserver = mockIntersectionObserver as unknown as typeof IntersectionObserver;
});

describe('CT-GaMe Guide Page', () => {
  it('renders the page and includes the correct H1 heading', async () => {
    render(<Page />);

    // Wait for async components like Mermaid to finish rendering to avoid act warnings
    await screen.findAllByTestId('mock-mermaid');

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toMatch(/ゲームテスト/i);
    expect(heading.textContent).toMatch(/完全学習ガイド/i);
  });

  it('contains specific section IDs (#overview, #ch1, #ch2)', async () => {
    render(<Page />);
    await screen.findAllByTestId('mock-mermaid');

    expect(document.getElementById('overview')).toBeInTheDocument();
    expect(document.getElementById('ch1')).toBeInTheDocument();
    expect(document.getElementById('ch2')).toBeInTheDocument();
  });

  it('renders NavBar and updates active link class / aria-current when target section becomes active', async () => {
    render(<Page />);
    await screen.findAllByTestId('mock-mermaid');

    // Assert NavBar renders expected links
    const overviewLink = screen.getByRole('link', { name: '概要' });
    const ch1Link = screen.getByRole('link', { name: 'Ch.1' });
    const ch2Link = screen.getByRole('link', { name: 'Ch.2 メカニクス' });

    expect(overviewLink).toBeInTheDocument();
    expect(ch1Link).toBeInTheDocument();
    expect(ch2Link).toBeInTheDocument();

    // Verify initial state
    expect(overviewLink.classList.contains('active')).toBe(false);
    expect(overviewLink.getAttribute('aria-current')).toBeNull();

    // Simulate #overview becoming active inside act()
    act(() => {
      observerCallback([
        {
          isIntersecting: true,
          intersectionRatio: 1,
          target: { id: 'overview' } as unknown as Element,
        } as unknown as IntersectionObserverEntry,
      ]);
    });

    expect(overviewLink.classList.contains('active')).toBe(true);
    expect(overviewLink.getAttribute('aria-current')).toBe('location');
    expect(ch1Link.classList.contains('active')).toBe(false);

    // Simulate #ch1 becoming active inside act()
    act(() => {
      observerCallback([
        {
          isIntersecting: true,
          intersectionRatio: 1,
          target: { id: 'ch1' } as unknown as Element,
        } as unknown as IntersectionObserverEntry,
      ]);
    });

    expect(overviewLink.classList.contains('active')).toBe(false);
    expect(ch1Link.classList.contains('active')).toBe(true);
    expect(ch1Link.getAttribute('aria-current')).toBe('location');
  });
});
