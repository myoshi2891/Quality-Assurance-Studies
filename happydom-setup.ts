import { GlobalRegistrator } from '@happy-dom/global-registrator';
import { mock } from 'bun:test';

GlobalRegistrator.register();

mock.module('mermaid', () => ({
  default: {
    initialize: () => {},
    render: async () => ({ svg: '<svg data-testid="mock-mermaid"></svg>' }),
  },
}));
