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

  // Mermaid v11 は securityLevel:'loose' + htmlLabels:true でラベルを
  // <foreignObject> 内の <div class="nodeLabel">（＝HTML）として描画し、
  // ノード/エッジ/テキストの色は <style> ブロックの CSS で与えられる。
  // 外側 DOMPurify を SVG プロファイルで適用するとこの HTML ラベルと
  // <style> 内容が除去され、ダークモードでテキスト・矢印・枠線が消える。
  // 本スペックはその退行を検知する（実出力に近い SVG を描画して保持を検証）。
  it('preserves the <style> block and htmlLabel (foreignObject) content of real mermaid SVG output', async () => {
    renderImpl = async () => ({
      svg:
        '<svg xmlns="http://www.w3.org/2000/svg" data-testid="mermaid-svg" class="flowchart">' +
        '<style>#g .nodeLabel{color:#00ff88;fill:#00ff88}#g .edgePath path{stroke:#888}</style>' +
        '<g class="node"><rect class="basic"></rect>' +
        '<foreignObject width="100" height="20">' +
        '<div xmlns="http://www.w3.org/1999/xhtml" class="nodeLabel"><span>CT-GaMe</span></div>' +
        '</foreignObject></g>' +
        '<g class="edgePaths"><path class="edgePath" d="M0,0L10,10"></path></g>' +
        '</svg>',
    });

    const { container } = render(<Mermaid chart="flowchart LR; A-->B" />);

    await waitFor(() => {
      const svg = container.querySelector('svg[data-testid="mermaid-svg"]');
      expect(svg).not.toBeNull();
    });

    // <style> ブロックが残り、色を与える CSS ルールを保持していること
    const styleEl = container.querySelector('style');
    expect(styleEl).not.toBeNull();
    expect(styleEl?.textContent).toContain('nodeLabel');

    // htmlLabel（foreignObject 内 HTML）とラベル文字列が保持されていること
    expect(container.querySelector('foreignObject')).not.toBeNull();
    expect(container.textContent).toContain('CT-GaMe');
  });
});
