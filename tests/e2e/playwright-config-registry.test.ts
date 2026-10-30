import { describe, it, expect } from 'bun:test';
import { readdirSync } from 'node:fs';
import { isAbsolute, join } from 'node:path';
import { Glob } from 'bun';
import type { PlaywrightTestConfig } from '@playwright/test';
import serverConfig from '../../playwright.config';
import layoutConfig from '../../playwright.layout.config';

/**
 * Playwright 設定は「サーバー必須」と「サーバー不要のレイアウト回帰」の 2 ファイルに限定する。
 * ページ単位の設定ファイル追加を `bun test` で検知し、新しい e2e ファイルが
 * どのプロジェクトからも実行されない（または二重実行される）状態を防ぐ。
 */
const ROOT = join(import.meta.dir, '../..');
const ALLOWED_CONFIGS = ['playwright.config.ts', 'playwright.layout.config.ts'];

type Matcher = string | RegExp | ReadonlyArray<string | RegExp> | undefined;

const toList = (matcher: Matcher): ReadonlyArray<string | RegExp> => {
  if (matcher === undefined) return [];
  if (typeof matcher === 'string' || matcher instanceof RegExp) return [matcher];
  return matcher;
};

// Playwright と同じく絶対パスに対して照合する。文字列は glob として扱い、
// 絶対パスでも `**/` 始まりでもなければ `**/` を前置して任意の深さで一致させる。
const toGlob = (pattern: string): Glob =>
  new Glob(isAbsolute(pattern) || pattern.startsWith('**/') ? pattern : `**/${pattern}`);

const matches = (absolutePath: string, matcher: Matcher): boolean =>
  toList(matcher).some((m) => {
    if (typeof m === 'string') return toGlob(m).match(absolutePath);
    m.lastIndex = 0;
    return m.test(absolutePath);
  });

// プロジェクトの testMatch が未指定ならトップレベルの testMatch を継承する
const projectMatchers = (config: PlaywrightTestConfig, label: string) =>
  (config.projects ?? []).map((project) => ({
    name: `${label}:${project.name ?? ''}`,
    testMatch: (project.testMatch ?? config.testMatch) as Matcher,
  }));

describe('Playwright config registry', () => {
  const configs = readdirSync(ROOT).filter((f) => /^playwright\..*config\.ts$/.test(f)).sort();
  const e2eFiles = readdirSync(join(ROOT, 'e2e')).filter((f) => f.endsWith('.e2e.ts')).sort();
  const projects = [
    ...projectMatchers(serverConfig, 'server'),
    ...projectMatchers(layoutConfig, 'layout'),
  ];

  it('keeps only the server and layout configs at the repository root', () => {
    expect(configs).toEqual(ALLOWED_CONFIGS);
  });

  it('assigns every e2e file to exactly one project', () => {
    const owners = e2eFiles.map((file) => ({
      file,
      projects: projects.filter((p) => matches(join(ROOT, 'e2e', file), p.testMatch)).map((p) => p.name),
    }));
    expect(owners.filter((o) => o.projects.length !== 1)).toEqual([]);
  });

  it('starts no web server for layout regression tests', () => {
    expect(layoutConfig.webServer).toBeUndefined();
  });

  it('runs every layout project in a single worker', () => {
    expect(layoutConfig.workers).toBe(1);
  });
});
