import { describe, expect, it } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dir, '..');
const LAYOUT = join(ROOT, 'app', 'layout.tsx');
const GLOBALS = join(ROOT, 'app', 'globals.css');

/*
  Web フォントの供給方式を固定する。

  next/font/google はビルドのたびに Google Fonts から CSS と woff2 を取得する。
  CI ランナーからの取得が一時的に失敗すると Turbopack は
  「Module not found: Can't resolve '@vercel/turbopack-next/internal/font/google/font'」
  で落ち、同じコミットでもビルドが成功したり失敗したりする（非決定的）。
  Fontsource の CSS を node_modules から読むことで、ビルド時のネットワーク依存を断つ。
  Noto Sans JP は Google Fonts と同じ unicode-range スライスを保つため、
  閲覧時は必要なスライスだけがダウンロードされる。
*/

/** 書体ごとに必要なウェイト。旧 next/font/google 設定と同じ集合を保つ */
const REQUIRED_WEIGHTS: Record<string, string[]> = {
  'noto-sans-jp': ['300', '400', '500', '700'],
  'jetbrains-mono': ['400', '500', '700'],
  'dm-sans': ['300', '400', '500', '700', '800'],
  'bricolage-grotesque': ['600', '800'],
};

const EXPECTED_IMPORTS = Object.entries(REQUIRED_WEIGHTS).flatMap(([pkg, weights]) =>
  weights.map((weight) => `@fontsource/${pkg}/${weight}.css`)
);

function layoutFontImports(): string[] {
  const layout = readFileSync(LAYOUT, 'utf8');
  return [...layout.matchAll(/^import\s+['"](@fontsource\/[^'"]+)['"];?$/gm)].map((match) => match[1] ?? '');
}

describe('Web フォントの読み込み', () => {
  it('ビルド時に外部取得する next/font/google を使わない', () => {
    // Arrange
    const layout = readFileSync(LAYOUT, 'utf8');

    // Act & Assert
    expect(layout).not.toContain('next/font/google');
  });

  it('共有レイアウトが必要なウェイトの Fontsource CSS だけを過不足なく import する', () => {
    // Arrange & Act
    const imports = layoutFontImports();

    // Assert
    expect(imports).toEqual(EXPECTED_IMPORTS);
  });

  it('Fontsource パッケージを dependencies に宣言している', () => {
    // Arrange
    const pkg: unknown = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
    const deps =
      typeof pkg === 'object' && pkg !== null && 'dependencies' in pkg && typeof pkg.dependencies === 'object' && pkg.dependencies !== null
        ? Object.keys(pkg.dependencies)
        : [];

    // Act & Assert
    for (const name of Object.keys(REQUIRED_WEIGHTS)) expect(deps).toContain(`@fontsource/${name}`);
  });

  for (const specifier of EXPECTED_IMPORTS) {
    it(`${specifier} は外部 URL を参照せず同梱の woff2 だけを指す`, () => {
      // Arrange
      const file = join(ROOT, 'node_modules', specifier);
      expect(existsSync(file)).toBe(true);
      const css = readFileSync(file, 'utf8');
      const urls = [...css.matchAll(/url\(([^)]+)\)/g)].map((match) => match[1] ?? '');

      // Act & Assert
      expect(urls.length).toBeGreaterThan(0);
      expect(urls.filter((url) => /^['"]?(?:https?:)?\/\//.test(url))).toEqual([]);
    });
  }

  it('Noto Sans JP は unicode-range スライスを保ち、必要な分だけ配信される', () => {
    // Arrange
    const css = readFileSync(join(ROOT, 'node_modules', '@fontsource/noto-sans-jp/400.css'), 'utf8');

    // Act
    const faces = css.match(/@font-face/g) ?? [];
    const ranges = css.match(/unicode-range:/g) ?? [];

    // Assert
    expect(faces.length).toBeGreaterThan(50);
    expect(ranges.length).toBe(faces.length);
  });

  it('ディスプレイ書体変数 --font-bricolage を :root に定義する（next/font の className 注入の代替）', () => {
    // Arrange
    const css = readFileSync(GLOBALS, 'utf8');

    // Act & Assert
    expect(css).toMatch(/--font-bricolage:\s*'Bricolage Grotesque'/);
  });
});
