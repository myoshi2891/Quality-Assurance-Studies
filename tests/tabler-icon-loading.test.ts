import { describe, expect, it } from 'bun:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dir, '..');
const APP = join(ROOT, 'app');

/** app/ 配下の *.css を再帰的に集める */
function collectCssFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return collectCssFiles(full);
    return entry.name.endsWith('.css') ? [full] : [];
  });
}

/*
  Tabler アイコンフォントの読み込み方法を固定する。

  CSS の `@import` はページ CSS のダウンロードとパースが終わるまで発見されず、
  往復が直列化してアイコンの表示が遅れる。さらにページ CSS ごとに書くと
  宣言が分散し、`ti ti-*` を使うのに @import を書き忘れたページ
  （実際に istqb-ctfl-v4-chapter3-static-testing で発生していた）が
  静かにアイコン欠落を起こす。読み込みは共有レイアウトへ一元化する。
*/
describe('Tabler アイコンフォントの読み込み', () => {
  it('ページ固有 CSS に Tabler の CDN @import が残っていない', () => {
    const offenders = collectCssFiles(APP).filter((file) =>
      // url(...) 形式と、直接文字列を書く @import "https://..." 形式の両方を検出する
      /@import\s+(?:url\(\s*)?['"]?https:\/\/cdn\.jsdelivr\.net\/npm\/@tabler\/icons-webfont/.test(
        readFileSync(file, 'utf8')
      )
    );

    expect(offenders.map((file) => file.slice(ROOT.length + 1))).toEqual([]);
  });

  it('共有レイアウトが preconnect と stylesheet の <link> を出力する', () => {
    const layout = readFileSync(join(APP, 'layout.tsx'), 'utf8');

    expect(layout).toContain('rel="preconnect"');
    expect(layout).toContain('href="https://cdn.jsdelivr.net"');
    expect(layout).toMatch(
      /rel="stylesheet"[\s\S]*?https:\/\/cdn\.jsdelivr\.net\/npm\/@tabler\/icons-webfont@[\d.]+\/dist\/tabler-icons\.min\.css/
    );
  });

  it('ti ti-* を使う全ページが共有レイアウト経由でフォントを得られる', () => {
    // レイアウトは全ルート共通なので、宣言が 1 箇所あることが全ページの担保になる。
    const layout = readFileSync(join(APP, 'layout.tsx'), 'utf8');
    const declarations = layout.match(/@tabler\/icons-webfont/g) ?? [];

    // 重複宣言はブラウザ側で無駄な解決を招くため 1 件に固定する。
    expect(declarations.length).toBe(1);
  });
});
