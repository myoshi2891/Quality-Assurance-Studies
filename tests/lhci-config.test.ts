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
    
    // Normalize urls to replace 127.0.0.1 with localhost to handle differences in environments
    const normalizedUrls = collect.url.map((u: string) => u.replace('127.0.0.1', 'localhost'));
    expect(normalizedUrls).toContain('http://localhost:3000/');
    expect(normalizedUrls).toContain('http://localhost:3000/acceptance-testing-guide');
    expect(normalizedUrls).toContain('http://localhost:3000/e2e-testing-guide');
    expect(normalizedUrls).toContain('http://localhost:3000/istqb-ct-ai-complete-guide');
    expect(collect.numberOfRuns).toBe(3);

    const assertions = content.ci.assert.assertions;
    expect(assertions['largest-contentful-paint']).toEqual(['warn', { maxNumericValue: 15000 }]);
    expect(assertions['cumulative-layout-shift']).toEqual(['error', { maxNumericValue: 0.1 }]);
    expect(assertions['total-blocking-time']).toEqual(['warn', { maxNumericValue: 1500 }]);
    
    expect(assertions['categories:performance']).toEqual(['warn', { minScore: 0.4 }]);
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
