/*
  Fontsource の @font-face を font-display: optional へ書き換えて app/fonts/ に生成する。

  Fontsource の CSS は font-display: swap 固定で、フォント到着前に代替書体で描画されると
  到着後の差し替えで折り返しと行高が変わり、レイアウトシフト（CLS）が起きる。
  optional は初回レイアウトに間に合わない書体をそのページ表示中は使わないため差し替えが起きない。

  使い方:
    bun run scripts/generate-optional-fonts.mjs          # app/fonts/ を再生成
    bun run scripts/generate-optional-fonts.mjs --check  # 生成済みファイルとの差分を検査（差分ありで終了コード 1）
  Fontsource を更新したら再生成してコミットする（tests/font-display-optional.test.ts が同期を検証する）。
*/
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** 共有レイアウトとページ単位で読む書体とウェイト（生成順 = 検証順） */
export const FONT_FACES = [
  ...['300', '400', '500', '600', '700', '800'].map((weight) => ({ pkg: 'noto-sans-jp', weight })),
  ...['400', '500', '600', '700'].map((weight) => ({ pkg: 'jetbrains-mono', weight })),
  ...['300', '400', '500', '700', '800'].map((weight) => ({ pkg: 'dm-sans', weight })),
  ...['600', '800'].map((weight) => ({ pkg: 'bricolage-grotesque', weight })),
  ...['600', '700'].map((weight) => ({ pkg: 'source-serif-4', weight })),
];

/** リポジトリルートからの生成先パス */
export function outputPath({ pkg, weight }) {
  return `app/fonts/${pkg}-${weight}.css`;
}

/**
 * Fontsource の CSS を optional 版へ変換する。
 * url(./files/...) は生成先（app/fonts/）から node_modules の同梱ファイルを指す相対パスへ書き換える。
 * 想定外の形式（swap 以外の font-display や files/ 以外の url）は黙って通さず例外にする。
 */
export function renderOptionalFontCss({ pkg, weight }, source) {
  const faces = source.match(/@font-face\s*\{/g) ?? [];
  const swaps = source.match(/font-display:\s*swap;/g) ?? [];
  if (faces.length === 0 || swaps.length !== faces.length) {
    throw new Error(`@fontsource/${pkg}/${weight}.css: @font-face ${faces.length} 件に対し font-display: swap が ${swaps.length} 件`);
  }
  const urls = source.match(/url\([^)]*\)/g) ?? [];
  const unexpected = urls.filter((url) => !url.startsWith('url(./files/'));
  if (unexpected.length > 0) {
    throw new Error(`@fontsource/${pkg}/${weight}.css: 想定外の url() ${unexpected.join(', ')}`);
  }
  const body = source
    .replace(/font-display:\s*swap;/g, 'font-display: optional;')
    .replace(/url\(\.\/files\//g, `url(../../node_modules/@fontsource/${pkg}/files/`);
  return `/* 自動生成: scripts/generate-optional-fonts.mjs（@fontsource/${pkg}/${weight}.css を font-display: optional 化）。直接編集しない */\n${body}`;
}

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function main() {
  const check = process.argv.includes('--check');
  const stale = [];
  for (const face of FONT_FACES) {
    const source = readFileSync(join(ROOT, 'node_modules', '@fontsource', face.pkg, `${face.weight}.css`), 'utf8');
    const css = renderOptionalFontCss(face, source);
    const target = join(ROOT, outputPath(face));
    if (check) {
      let current = '';
      try {
        current = readFileSync(target, 'utf8');
      } catch (error) {
        if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
      }
      if (current !== css) stale.push(outputPath(face));
      continue;
    }
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, css);
  }
  if (stale.length > 0) {
    console.error(`再生成が必要: ${stale.join(', ')}`);
    process.exit(1);
  }
  console.log(check ? '生成済みフォント CSS は最新です' : `${FONT_FACES.length} ファイルを生成しました`);
}

if (import.meta.main ?? process.argv[1] === fileURLToPath(import.meta.url)) main();
