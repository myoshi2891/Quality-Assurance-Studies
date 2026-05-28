import { describe, it, expect, afterEach, mock } from 'bun:test';

let renderImpl: (id: string, chart: string) => Promise<{ svg: string }> = async () => ({
  svg: '<svg data-testid="mermaid-svg"><g>ok</g></svg>',
});

mock.module('mermaid', () => ({
  default: {
    initialize: () => {},
    render: (id: string, chart: string) => renderImpl(id, chart),
  },
}));

import { render, cleanup, waitFor } from '@testing-library/react';
import Mermaid from '../../components/Mermaid';

afterEach(() => {
  cleanup();
  renderImpl = async () => ({
    svg: '<svg data-testid="mermaid-svg"><g>ok</g></svg>',
  });
});

describe('Mermaid component', () => {
  it('renders the SVG returned by mermaid.render for a non-empty chart', async () => {
    const { container } = render(<Mermaid chart="graph TD; A-->B" />);
    await waitFor(() => {
      const svg = container.querySelector('svg[data-testid="mermaid-svg"]');
      expect(svg).not.toBeNull();
    });
  });

  it('does not call mermaid.render for an empty chart', async () => {
    let called = false;
    renderImpl = async (id, chart) => {
      called = true;
      return { svg: `<svg data-id="${id}">${chart}</svg>` };
    };
    const { container } = render(<Mermaid chart="" />);
    // 非同期処理が走り終えるのを待つ（マイクロタスク + 1 フレーム）
    await new Promise<void>((r) => requestAnimationFrame(() => r()));
    expect(called).toBe(false);
    expect(container.querySelector('svg')).toBeNull();
  });

  it('renders an error fallback when mermaid.render throws', async () => {
    const originalError = console.error;
    console.error = () => {};
    try {
      renderImpl = async () => {
        throw new Error('boom');
      };
      const { container } = render(<Mermaid chart="graph TD; broken" />);
      await waitFor(() => {
        expect(container.textContent).toContain('図表の描画に失敗しました');
      });
    } finally {
      console.error = originalError;
    }
  });

  it('wraps the SVG in a mermaid-wrapper container with overflow handling', async () => {
    const { container } = render(<Mermaid chart="graph TD; A-->B" />);
    await waitFor(() => {
      const wrapper = container.querySelector('.mermaid-wrapper');
      expect(wrapper).not.toBeNull();
      expect(wrapper?.className).toContain('overflow-x-auto');
    });
  });
});
