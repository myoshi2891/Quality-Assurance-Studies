import { describe, expect, it } from 'bun:test';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { FONT_FACES, outputPath, renderOptionalFontCss } from '../scripts/generate-optional-fonts.mjs';

const ROOT = join(import.meta.dir, '..');

/*
  Web フォントの差し替えによるレイアウトシフト（CLS）を防ぐ契約。

  Fontsource の CSS は font-display: swap 固定のため、フォント到着前に代替書体で描画されると
  到着後に折り返しと行高が変わり、ページ全体が押し下げられる（Lighthouse CI で
  /e2e-testing-guide の CLS 0.21 を観測。描画がフォント到着より遅い実行では 0.04）。
  optional は初回レイアウトに間に合わない書体をそのページ表示中は使わないため、差し替え自体が起きない。
  scripts/generate-optional-fonts.mjs が Fontsource の CSS を optional へ書き換えて app/fonts/ に生成する。
*/

function sourceFiles(dir: string): string[] {
    return readdirSync(dir).flatMap(name => {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) return sourceFiles(path);
        return /\.(tsx?|css)$/.test(name) ? [path] : [];
    });
}

const generated = FONT_FACES.map(face => ({ ...face, path: join(ROOT, outputPath(face)) }));

describe('Web フォントの font-display: optional 化', () => {
    it('app / components は Fontsource の swap CSS を直接 import しない', () => {
        // Arrange
        const files = [...sourceFiles(join(ROOT, 'app')), ...sourceFiles(join(ROOT, 'components'))];

        // Act
        const offenders = files.filter(file => /['"]@fontsource\/[^'"]+\.css['"]/.test(readFileSync(file, 'utf8')));

        // Assert
        expect(offenders.map(file => relative(ROOT, file))).toEqual([]);
    });

    it('生成対象は共有レイアウトとページ単位で読む全ウェイトを過不足なく含む', () => {
        // Arrange & Act
        const names = FONT_FACES.map(({ pkg, weight }) => `${pkg}/${weight}`);

        // Assert
        expect(names).toEqual([
            'noto-sans-jp/300', 'noto-sans-jp/400', 'noto-sans-jp/500', 'noto-sans-jp/600', 'noto-sans-jp/700', 'noto-sans-jp/800',
            'jetbrains-mono/400', 'jetbrains-mono/500', 'jetbrains-mono/600', 'jetbrains-mono/700',
            'dm-sans/300', 'dm-sans/400', 'dm-sans/500', 'dm-sans/700', 'dm-sans/800',
            'bricolage-grotesque/600', 'bricolage-grotesque/800',
            'source-serif-4/600', 'source-serif-4/700',
        ]);
    });

    for (const face of generated) {
        describe(`${face.pkg}/${face.weight}`, () => {
            it('生成済み CSS がインストール済み Fontsource からの再生成結果と一致する', () => {
                // Arrange
                const source = readFileSync(join(ROOT, 'node_modules', '@fontsource', face.pkg, `${face.weight}.css`), 'utf8');

                // Act
                const expected = renderOptionalFontCss(face, source);

                // Assert
                expect(existsSync(face.path)).toBe(true);
                expect(readFileSync(face.path, 'utf8')).toBe(expected);
            });

            it('全 @font-face が font-display: optional で、swap が残らない', () => {
                // Arrange
                const css = readFileSync(face.path, 'utf8');

                // Act
                const faces = css.match(/@font-face\s*\{/g) ?? [];
                const optional = css.match(/font-display:\s*optional;/g) ?? [];

                // Assert
                expect(faces.length).toBeGreaterThan(0);
                expect(optional.length).toBe(faces.length);
                expect(css).not.toMatch(/font-display:\s*(?!optional)/);
            });

            it('全 url() が実在する同梱フォントファイルを指す', () => {
                // Arrange
                const css = readFileSync(face.path, 'utf8');

                // Act
                const urls = [...css.matchAll(/url\(([^)]+)\)/g)].map(match => (match[1] ?? '').replace(/^['"]|['"]$/g, ''));
                const missing = urls.filter(url => !existsSync(resolve(dirname(face.path), url)));

                // Assert
                expect(urls.length).toBeGreaterThan(0);
                expect(urls.filter(url => /^(?:https?:)?\/\//.test(url))).toEqual([]);
                expect(missing).toEqual([]);
            });
        });
    }

    it('ページ単位のウェイトは生成済み CSS から読む', () => {
        // Arrange
        const pages: [string, string][] = [
            ['app/iso-9075-1-guide/page.tsx', "import '../fonts/noto-sans-jp-800.css';"],
            ['app/iso-11179-1-2023-guide/page.tsx', "import '../fonts/noto-sans-jp-800.css';"],
            ['app/iec-62304-beginner-guide/page.tsx', "import '../fonts/noto-sans-jp-800.css';"],
            ['app/iso-11179-1-2023-guide/CodeExample.tsx', "import '../fonts/jetbrains-mono-600.css';"],
        ];

        // Act & Assert
        for (const [file, statement] of pages) expect(readFileSync(join(ROOT, file), 'utf8')).toContain(statement);
    });
});
