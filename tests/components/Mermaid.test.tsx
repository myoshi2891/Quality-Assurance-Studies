import { describe, it, expect, beforeAll, afterAll, afterEach, mock } from 'bun:test';
import { render, cleanup, waitFor } from '@testing-library/react';
import mermaid from 'mermaid';
import Mermaid from '../../components/Mermaid';

// ⚠️ mock.module('mermaid') はモジュールレジストリをプロセス全体で恒久的に差し替えるため、
//    後続テストファイルが happydom-setup.ts の共有モック（既定 SVG: mock-mermaid）ではなく
//    本ファイルのスタブを掴んでしまう。共有モックの render プロパティだけを
//    beforeAll で退避・差し替え、afterAll で復元する可逆な方式に統一する
//    （他ページテストと同じ流儀）。
const DEFAULT_SVG = '<svg data-testid="mermaid-svg"><g>ok</g></svg>';
const defaultRenderImpl = async () => ({ svg: DEFAULT_SVG });

let renderImpl: (id: string, chart: string) => Promise<{ svg: string }> = defaultRenderImpl;
let originalMermaidRender: typeof mermaid.render;

beforeAll(() => {
  originalMermaidRender = mermaid.render;
  mermaid.render = mock((id: string, chart: string) =>
    renderImpl(id, chart),
  ) as unknown as typeof mermaid.render;
});

afterAll(() => {
  mermaid.render = originalMermaidRender;
});

afterEach(() => {
  cleanup();
  renderImpl = defaultRenderImpl;
});

describe('Mermaid component', () => {
  it('renders the SVG returned by mermaid.render for a non-empty chart', async () => {
    const { container } = render(<Mermaid chart="graph TD; A-->B" />);
    await waitFor(() => {
      const svg = container.querySelector('svg[data-testid="mermaid-svg"]');
      expect(svg).not.toBeNull();
    });
  });

  // 同一ミリ秒・同一乱数でも、並行する描画試行ごとに衝突しない ID を mermaid.render へ渡す
  it('passes a collision-free id to every concurrent mermaid.render attempt', async () => {
    // Arrange: 時刻と乱数を固定し、旧実装（Date.now + 乱数）なら必ず衝突する条件を作る
    const ids: string[] = [];
    renderImpl = async (id) => {
      ids.push(id);
      return { svg: DEFAULT_SVG };
    };
    const originalNow = Date.now;
    const originalRandom = Math.random;
    Date.now = () => 1_700_000_000_000;
    Math.random = () => 0.5;
    try {
      // Act: 3 つの図を同時にマウントし、描画試行を並行させる
      render(
        <>
          <Mermaid chart="graph TD; A-->B" />
          <Mermaid chart="graph TD; C-->D" />
          <Mermaid chart="graph TD; E-->F" />
        </>,
      );
      await waitFor(() => expect(ids).toHaveLength(3));
    } finally {
      Date.now = originalNow;
      Math.random = originalRandom;
    }

    // Assert
    expect(new Set(ids).size).toBe(3);
  });

  // モジュールが再読み込みされ連番が初期化されても、以前のインスタンスと ID が重ならない
  it('keeps render ids unique across separately loaded module instances', async () => {
    // Arrange: 連番の状態を共有しない 2 つのモジュールインスタンスを読み込む
    const ids: string[] = [];
    renderImpl = async (id) => {
      ids.push(id);
      return { svg: DEFAULT_SVG };
    };
    const modulePath = '../../components/Mermaid.tsx';
    const first = (await import(`${modulePath}?instance=first`)) as { default: typeof Mermaid };
    const second = (await import(`${modulePath}?instance=second`)) as { default: typeof Mermaid };
    const FirstMermaid = first.default;
    const SecondMermaid = second.default;
    expect(FirstMermaid).not.toBe(SecondMermaid);

    // Act: 各インスタンスで最初の描画を行う（旧実装ではどちらも連番 1 になる）
    render(
      <>
        <FirstMermaid chart="graph TD; A-->B" />
        <SecondMermaid chart="graph TD; C-->D" />
      </>,
    );
    await waitFor(() => expect(ids).toHaveLength(2));

    // Assert
    expect(new Set(ids).size).toBe(2);
  });

  // crypto.randomUUID が使えない環境でも、乱数のフォールバックでインスタンスごとに別の ID になる
  it('keeps render ids unique through the fallback without crypto.randomUUID', async () => {
    // Arrange
    const ids: string[] = [];
    renderImpl = async (id) => {
      ids.push(id);
      return { svg: DEFAULT_SVG };
    };
    const descriptor = Object.getOwnPropertyDescriptor(crypto, 'randomUUID');
    const originalRandom = Math.random;
    let draws = 0;
    Object.defineProperty(crypto, 'randomUUID', { configurable: true, value: undefined });
    Math.random = () => {
      draws += 1;
      return draws / 10;
    };
    let FirstMermaid: typeof Mermaid;
    let SecondMermaid: typeof Mermaid;
    try {
      const modulePath = '../../components/Mermaid.tsx';
      FirstMermaid = ((await import(`${modulePath}?instance=fallback-first`)) as { default: typeof Mermaid }).default;
      SecondMermaid = ((await import(`${modulePath}?instance=fallback-second`)) as { default: typeof Mermaid }).default;
    } finally {
      Math.random = originalRandom;
      if (descriptor) Object.defineProperty(crypto, 'randomUUID', descriptor);
      else Reflect.deleteProperty(crypto, 'randomUUID');
    }

    // Act
    render(
      <>
        <FirstMermaid chart="graph TD; A-->B" />
        <SecondMermaid chart="graph TD; C-->D" />
      </>,
    );
    await waitFor(() => expect(ids).toHaveLength(2));

    // Assert: UUID 形式ではなくフォールバックの ID で、かつ互いに異なる
    expect(new Set(ids).size).toBe(2);
    for (const id of ids) expect(id).toMatch(/^mermaid-svg-[a-z0-9]{8}-1$/);
  });

  it('keeps the full UUID in the render id', async () => {
    const ids: string[] = [];
    renderImpl = async (id) => {
      ids.push(id);
      return { svg: DEFAULT_SVG };
    };

    render(<Mermaid chart="graph TD; A-->B" />);
    await waitFor(() => expect(ids).toHaveLength(1));

    expect(ids[0]).toMatch(/^mermaid-svg-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}-\d+$/);
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

  it('invokes onRenderError and shows the fallback when mermaid.render rejects', async () => {
    const originalError = console.error;
    console.error = () => {};
    try {
      renderImpl = () => Promise.reject(new Error('boom'));
      const onRenderError = mock(() => {});
      const { container } = render(
        <Mermaid chart="graph TD; broken" onRenderError={onRenderError} />,
      );
      await waitFor(() => {
        expect(container.textContent).toContain('図表の描画に失敗しました');
      });
      expect(onRenderError).toHaveBeenCalledTimes(1);
    } finally {
      console.error = originalError;
    }
  });

  it('wraps the SVG in a mermaid-wrapper container with overflow handling', async () => {
    const { container } = render(<Mermaid chart="graph TD; A-->B" />);
    await waitFor(() => {
      const wrapper = container.querySelector('.mermaid-wrapper');
      expect(wrapper).not.toBeNull();
      // スタイルは globals.css / ページ固有 CSS で付与されるため、
      // className のみチェックする（Tailwind ユーティリティクラスは不要）
      expect(wrapper?.className).toContain('mermaid-wrapper');
    });
  });

  // Mermaid v11 は securityLevel:'loose' + htmlLabels:true でラベルを
  // <foreignObject> 内の <div class="nodeLabel">（＝HTML）として描画し、
  // ノード/エッジ/テキストの色は <style> ブロックの CSS で与えられる。
  // 外側 DOMPurify を SVG プロファイル(USE_PROFILES:{svg:true})で適用すると
  // この <style> 要素ごと除去され、ダークモードでテキスト・矢印・枠線が消える。
  // 本スペックはその退行（style 要素の消失）を検知する。
  //
  // 注: happy-dom は DOMParser/XMLSerializer による SVG 内 <style> 内容や
  // foreignObject の HTML 子要素のラウンドトリップを完全再現できないため、
  // ここでは「<style> 要素自体が描画後も残るか」のみを機械的に検証する。
  // 実ブラウザでの色・ラベル文字列の可視性は Playwright で目視確認する。
  it('preserves the <style> element of real mermaid SVG output (no over-sanitization)', async () => {
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

    // <style> 要素が描画後も残ること（旧: 外側 DOMPurify が除去して null）
    expect(container.querySelector('style')).not.toBeNull();
  });
});
