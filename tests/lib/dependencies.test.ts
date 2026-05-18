import { describe, it, expect } from 'bun:test';
import nextPkg from 'next/package.json' with { type: 'json' };
import reactPkg from 'react/package.json' with { type: 'json' };
import reactDomPkg from 'react-dom/package.json' with { type: 'json' };
import eslintConfigNextPkg from 'eslint-config-next/package.json' with { type: 'json' };

// 意図せぬダウングレードによる回帰を防ぐため、主要依存の下限バージョンを固定する
const MIN = {
  next: '16.2.6',
  react: '19.2.6',
  'react-dom': '19.2.6',
  'eslint-config-next': '16.2.6',
} as const;

const toNum = (v: string): [number, number, number] => {
  const [a, b, c] = v.split('.').map((n) => Number.parseInt(n, 10));
  return [a, b, c];
};

const gte = (actual: string, min: string): boolean => {
  const [a1, a2, a3] = toNum(actual);
  const [m1, m2, m3] = toNum(min);
  if (a1 !== m1) return a1 > m1;
  if (a2 !== m2) return a2 > m2;
  return a3 >= m3;
};

describe('runtime dependency versions', () => {
  it(`next >= ${MIN.next}`, () => {
    expect(gte(nextPkg.version, MIN.next)).toBe(true);
  });

  it(`react >= ${MIN.react}`, () => {
    expect(gte(reactPkg.version, MIN.react)).toBe(true);
  });

  it(`react-dom >= ${MIN['react-dom']}`, () => {
    expect(gte(reactDomPkg.version, MIN['react-dom'])).toBe(true);
  });

  it(`eslint-config-next >= ${MIN['eslint-config-next']}`, () => {
    expect(gte(eslintConfigNextPkg.version, MIN['eslint-config-next'])).toBe(true);
  });
});
