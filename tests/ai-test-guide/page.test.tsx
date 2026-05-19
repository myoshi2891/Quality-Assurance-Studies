import { describe, it, expect, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import Page from '../../app/ai-test-guide/page';

afterEach(() => {
  cleanup();
});

describe('AI Test Guide Page', () => {
  it('renders the main heading mentioning AIシステム', () => {
    const h1 = render(<Page />).container.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1?.textContent).toMatch(/AIシステム/);
  });

  it('renders the core AI testing sections', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 2, name: /AIの基礎とテストへの影響/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /ML評価指標/ }),
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 2, name: /幻覚（Hallucination）/ }),
    ).toBeDefined();
  });
});
