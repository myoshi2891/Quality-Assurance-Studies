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
  root: Element | null = null;
  rootMargin: string = '';
  thresholds: ReadonlyArray<number> = [];
  constructor(public callback: IntersectionObserverCallback, public options?: IntersectionObserverInit) {}
  observe(target: Element) {}
  unobserve(target: Element) {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
}

if (typeof window !== 'undefined') {
  window.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver;
}
if (typeof global !== 'undefined') {
  global.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver;
}
