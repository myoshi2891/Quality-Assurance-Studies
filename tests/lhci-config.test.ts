import { describe, it, expect } from 'bun:test';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const projectRoot = join(__dirname, '../');

describe('Lighthouse CI Configurations', () => {
  it('has lighthouserc.json in the project root', () => {
    const rcPath = join(projectRoot, 'lighthouserc.json');
    expect(existsSync(rcPath)).toBe(true);
  });

  it('contains the key settings in lighthouserc.json', () => {
    const rcPath = join(projectRoot, 'lighthouserc.json');
    const content = JSON.parse(readFileSync(rcPath, 'utf8'));

    const collect = content.ci.collect;
    expect(collect.startServerCommand).toBe('bun run start');
    expect(collect.url).toContain('http://localhost:3000/');
    expect(collect.url).toContain('http://localhost:3000/acceptance-testing-guide');
    expect(collect.url).toContain('http://localhost:3000/e2e-testing-guide');
    expect(collect.url).toContain('http://localhost:3000/istqb-ct-ai-complete-guide');
    expect(collect.numberOfRuns).toBe(3);

    const assertions = content.ci.assert.assertions;
    expect(assertions['largest-contentful-paint']).toEqual(['error', { maxNumericValue: 2500 }]);
    expect(assertions['cumulative-layout-shift']).toEqual(['error', { maxNumericValue: 0.1 }]);
    expect(assertions['total-blocking-time']).toEqual(['error', { maxNumericValue: 350 }]);
    
    expect(assertions['categories:performance']).toEqual(['error', { minScore: 0.9 }]);
    expect(assertions['categories:accessibility']).toEqual(['error', { minScore: 0.9 }]);
    expect(assertions['categories:best-practices']).toEqual(['error', { minScore: 0.9 }]);
    expect(assertions['categories:seo']).toEqual(['error', { minScore: 0.9 }]);
  });

  it('has lhci:autorun script in package.json', () => {
    const pkgPath = join(projectRoot, 'package.json');
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
    expect(pkg.scripts['lhci:autorun']).toBe('lhci autorun');
  });
});
