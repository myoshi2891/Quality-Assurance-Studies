import { GlobalRegistrator } from '@happy-dom/global-registrator';
import { afterEach, mock } from 'bun:test';

GlobalRegistrator.register();

// RTL の自動 cleanup は最初に import したテストファイルにしか登録されない（bun はモジュールを全ファイルで共有する）。
// 全ファイル共通で描画結果を片付け、後続ファイルへの DOM 残留による実行順依存の失敗を防ぐ。
// RTL は GlobalRegistrator.register() の後に読み込む必要があるため動的 import とする。
const { cleanup } = await import('@testing-library/react');
afterEach(() => {
  cleanup();
});

mock.module('mermaid', () => ({
  default: {
    initialize: () => {},
    render: async () => ({ svg: '<svg data-testid="mock-mermaid"></svg>' }),
  },
}));

class IntersectionObserverMock {
  root: Element | Document | null = null;
  rootMargin: string = '';
  thresholds: ReadonlyArray<number> = [];
  constructor(private callback: IntersectionObserverCallback, public options?: IntersectionObserverInit) {
    this.root = options?.root ?? null;
    this.rootMargin = options?.rootMargin ?? '';
    this.thresholds = Array.isArray(options?.threshold)
      ? options!.threshold
      : (typeof options?.threshold === 'number'
      ? [options!.threshold]
      : []);
  }
  observe(target: Element): void {
    void target;
  }
  unobserve(target: Element): void {
    void target;
  }
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
}

if (typeof window !== 'undefined') {
  window.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver;
}
if (typeof global !== 'undefined') {
  global.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver;
}
