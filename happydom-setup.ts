import { GlobalRegistrator } from '@happy-dom/global-registrator';
import { mock } from 'bun:test';

GlobalRegistrator.register();

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
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
}

if (typeof window !== 'undefined') {
  window.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver;
}
if (typeof global !== 'undefined') {
  global.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver;
}
