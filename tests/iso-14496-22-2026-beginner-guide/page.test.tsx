import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import React from 'react';
import Page from '../../app/iso-14496-22-2026-beginner-guide/page';

/** 空白の揺れを吸収して比較用のテキストにする */
function norm(text: string | null | undefined): string {
  return (text ?? '').replace(/\s+/g, ' ').trim();
}

/** 要素が属する章（section#chN）の ID */
function sectionOf(el: Element): string {
  return el.closest('section')?.id ?? '';
}

// 出現順の固定インベントリ（原本 HTML の H2 16 / H3 42 / 表 23 / 図 11 / コード 1 / コールアウト 15 と同数）
const EXPECTED_HEADINGS = [
  'H1||ISO/IEC 14496-22:2026（Open Font Format）',
  'H2|ch0-h|0. このガイドの読み方と、調査の限界（先に必ず読んでください）',
  'H2|ch1-h|1. この規格を一言でいうと',
  'H3|例え話フォントファイルは楽譜と演奏ルールの入った巻物|例え話：フォントファイルは「楽譜と演奏ルールの入った巻物」',
  'H2|ch2-h|2. なぜ必要なのか：TrueType と PostScript の統合の歴史',
  'H3|日本の読者にとっての意味|日本の読者にとっての意味',
  'H2|ch3-h|3. 規格の基本情報と改訂の流れ',
  'H3|3-1-基本情報|3-1. 基本情報',
  'H3|3-2-第5版ができるまで|3-2. 第5版ができるまで',
  'H2|ch4-h|4. ISO 規格と OpenType 仕様の関係',
  'H3|実務での使い分け|実務での使い分け',
  'H2|ch5-h|5. フォントファイルの構造：sfnt コンテナを読んでみる',
  'H3|5-1-ファイル先頭のテーブルディレクトリ|5-1. ファイル先頭のテーブルディレクトリ',
  'H3|5-2-各テーブルの目次tablerecord|5-2. 各テーブルの目次（TableRecord）',
  'H3|5-3-実際に-python-で先頭12バイトを読んでみる|5-3. 実際に Python で先頭12バイトを読んでみる',
  'H3|5-4-2種類の-sfntversiontruetype-か-cff-か|5-4. 2種類の sfntVersion：TrueType か CFF か',
  'H3|5-5-テーブルレコードの並び順と実例|5-5. テーブルレコードの並び順と実例',
  'H3|5-6-チェックサムの考え方|5-6. チェックサムの考え方',
  'H2|ch6-h|6. テーブルの全体地図',
  'H3|6-1-必須テーブルどの種類のフォントでも必要|6-1. 必須テーブル（どの種類のフォントでも必要）',
  'H3|6-2-役割別のグループ|6-2. 役割別のグループ',
  'H3|6-3-グリフのアウトラインtruetype-と-cffcff2|6-3. グリフのアウトライン：TrueType と CFF/CFF2',
  'H2|ch7-h|7. 文字が画面に出るまで：表示パイプライン',
  'H3|7-1-全体の流れ|7-1. 全体の流れ',
  'H3|7-2-各ステップで何が起きているか|7-2. 各ステップで何が起きているか',
  'H3|7-3-規格が定めることとアプリが決めること|7-3. 「規格が定めること」と「アプリが決めること」',
  'H2|ch8-h|8. 高度な組版：GSUB と GPOS をもう少し詳しく',
  'H3|8-1-gsub-と-gpos-の共通の骨組み|8-1. GSUB と GPOS の共通の骨組み',
  'H3|8-2-処理の種類の数|8-2. 処理の種類の数',
  'H3|8-3-日本語に関係する機能タグの例|8-3. 日本語に関係する機能タグの例',
  'H2|ch9-h|9. 可変フォント（OpenType Font Variations）',
  'H3|9-1-例え話音量つまみ|9-1. 例え話：音量つまみ',
  'H3|9-2-仕組みの骨組み|9-2. 仕組みの骨組み',
  'H3|9-3-値を計算する例仕様書の例より|9-3. 値を計算する例（仕様書の例より）',
  'H3|9-4-可変フォントで必要になる追加テーブル|9-4. 可変フォントで必要になる追加テーブル',
  'H3|9-5-来歴|9-5. 来歴',
  'H2|ch10-h|10. カラーフォントと絵文字',
  'H3|colrv1-の位置づけ|COLRv1 の位置づけ',
  'H2|ch11-h|11. 日本語の読者に関係するポイント',
  'H3|11-1-フォントコレクションttc-otcで漢字を共有する|11-1. フォントコレクション（.ttc / .otc）で漢字を共有する',
  'H3|11-2-縦書き|11-2. 縦書き',
  'H3|11-3-字形の切り替え章8の機能タグ|11-3. 字形の切り替え（章8の機能タグ）',
  'H2|ch12-h|12. 実装の現状：誰がこの規格を動かしているのか',
  'H3|12-1-harfbuzzシェーピングエンジン|12-1. HarfBuzz（シェーピングエンジン）',
  'H3|12-2-fontations-と-skrifarust-製のフォント基盤|12-2. Fontations と Skrifa（Rust 製のフォント基盤）',
  'H3|12-3-chrome-が-freetype-から-fontations-へ移行した経緯|12-3. Chrome が FreeType から Fontations へ移行した経緯',
  'H3|12-4-実装の地図|12-4. 実装の地図',
  'H2|ch13-h|13. QA・テスト観点：フォント対応を検証するには',
  'H3|13-1-パイプライン段階別のテスト観点|13-1. パイプライン段階別のテスト観点',
  'H3|13-2-セキュリティ堅牢性のテスト観点|13-2. セキュリティ・堅牢性のテスト観点',
  'H3|13-3-回帰テストの比較方法|13-3. 回帰テストの比較方法',
  'H2|ch14-h|14. まとめと学習ロードマップ',
  'H3|14-1-要点の整理|14-1. 要点の整理',
  'H3|14-2-学習ロードマップ|14-2. 学習ロードマップ',
  'H2|ch15-h|15. 根拠ソース一覧（URL）',
  'H3|15-1-規格の公式情報|15-1. 規格の公式情報',
  'H3|15-2-実装関連の一次情報chrome・rust・harfbuzz|15-2. 実装関連の一次情報（Chrome・Rust・HarfBuzz）',
  'H3|15-3-参考二次情報|15-3. 参考（二次情報）',
  'H3|15-4-未確認事項再掲|15-4. 未確認事項（再掲）',
];

const EXPECTED_TOC = Array.from({ length: 16 }, (_, i) => `#ch${i}`);

/** Mermaid 図 11 件の配置章（DIAGRAM_01〜11 の出現順） */
const EXPECTED_DIAGRAM_SECTIONS = [
  'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'ch9', 'ch11', 'ch12', 'ch14',
];

/** 表 23 件：配置章とヘッダー列 */
const EXPECTED_TABLES = [
  'ch0|区分/このガイドでの扱い',
  'ch0|章/内容/読み方の目安',
  'ch1|フォントの要素/例え/役割',
  'ch3|項目/公式ページの記載',
  'ch4|目的/おすすめの資料',
  'ch5|オフセット/型/名前/意味',
  'ch5|オフセット/型/名前/意味',
  'ch5|sfntVersion の値/16進数/意味/期待される輪郭テーブル',
  'ch5|tableTag（目次は昇順）/offset（ファイル上の位置）/length（バイト数）',
  'ch6|タグ/名前/何が書いてあるか',
  'ch6|輪郭の方式/使うテーブル/曲線の種類/歴史的ルーツ',
  'ch7|項目/規格が定める/アプリ／エンジンが決める',
  'ch8|テーブル/名前/役割',
  'ch8|タグ/意味の目安',
  'ch9|ステップ/計算/結果',
  'ch9|輪郭の種類/追加で必要・推奨になるもの',
  'ch10|テーブル/方式/特徴',
  'ch12|クレート／ツール/役割',
  'ch12|レイヤー/主なライブラリ/言語/主な採用先',
  'ch13|段階/起きる不具合の例/確認の観点',
  'ch15|用途/ソース/URL',
  'ch15|用途/ソース/URL',
  'ch15|内容/URL',
];

const EXPECTED_CODE_BLOCKS = ['ch5|py'];

/** コールアウト 15 件（ch0〜ch14 の「この章のねらい」） */
const EXPECTED_CALLOUTS = Array.from(
  { length: 15 },
  (_, i) => `ch${i}|callout-practice|この章のねらい`,
);

/** 外部参考リンク（出現順） */
const EXPECTED_REFERENCES = [
  'https://www.iso.org/standard/14496-22',
  'https://webstore.ansi.org/standards/iso/isoiec14496222026',
  'https://learn.microsoft.com/en-us/typography/opentype/spec/',
  'https://developer.chrome.com/blog/colrv1-fonts',
  'https://developer.chrome.com/blog/memory-safety-fonts',
  'https://developer.chrome.com/blog/memory-safety-fonts',
  'https://issues.chromium.org/issues/40228383',
  'https://developer.chrome.com/blog/memory-safety-fonts',
  'https://github.com/googlefonts/fontations',
  'https://pypi.org/project/fontc/',
  'https://github.com/harfbuzz/harfbuzz',
  'https://harfbuzz.github.io',
  'https://lwn.net/Articles/741722/',
  'https://github.com/python-pillow/Pillow/pull/9453',
  'https://mono.github.io/SkiaSharp/docs/releases/4.150.0.html',
];

describe('ISO 14496-22:2026 Guide - Full Page Integration', () => {
  it('renders complete page with all 16 sections, hero, navbar, and footer', () => {
    const { container } = render(<Page />);
    const pageRoot = container.querySelector('.iso-14496-22-2026-page');
    expect(pageRoot).not.toBeNull();

    // Hero
    expect(container.querySelector('h1.hero-title')?.textContent).toContain(
      'ISO/IEC 14496-22:2026（Open Font Format）'
    );

    // NavBar & all 16 TOC anchors
    const navLinks = container.querySelectorAll('.sidebar a');
    expect(navLinks.length).toBe(16);

    // All 16 sections (ch0 to ch15)
    for (let i = 0; i <= 15; i++) {
      const section = container.querySelector(`section#ch${i}`);
      expect(section).not.toBeNull();
      const h2 = section?.querySelector('h2');
      expect(h2).not.toBeNull();
      expect(h2?.id).toBe(`ch${i}-h`);
    }

    // 11 Mermaid diagrams in total
    const diagrams = container.querySelectorAll('.mermaid-diagram');
    expect(diagrams.length).toBe(11);

    // All 23 tables in total
    const tables = container.querySelectorAll('table');
    expect(tables.length).toBe(23);

    // Footer
    expect(container.querySelector('footer.page-footer')).not.toBeNull();
  });

  it('matches the fixed inventory 1:1 in order (missing and surplus elements both fail)', () => {
    // Arrange
    const { container } = render(<Page />);

    // Act
    const headings = Array.from(container.querySelectorAll('h1, h2, h3, h4')).map(
      (h) => `${h.tagName}|${h.id}|${norm(h.textContent)}`,
    );
    const toc = Array.from(container.querySelectorAll('.sidebar a')).map((a) => a.getAttribute('href'));
    const tocTargets = toc.map((href) => (href ? container.querySelector(href)?.tagName : undefined));
    const diagrams = Array.from(container.querySelectorAll('.mermaid-diagram')).map(sectionOf);
    const tables = Array.from(container.querySelectorAll('table')).map(
      (t) =>
        `${sectionOf(t)}|${Array.from(t.querySelectorAll('thead th'))
          .map((th) => norm(th.textContent))
          .join('/')}`,
    );
    const codeBlocks = Array.from(container.querySelectorAll('pre')).map((p) => `${sectionOf(p)}|${p.className}`);
    const callouts = Array.from(container.querySelectorAll('[class^="callout"], [class*=" callout"]')).map(
      (c) => `${sectionOf(c)}|${c.className}|${norm(c.querySelector('.ttl')?.textContent)}`,
    );
    const references = Array.from(container.querySelectorAll('a[href^="http"]')).map((a) => a.getAttribute('href'));

    // Assert
    expect(headings).toEqual(EXPECTED_HEADINGS);
    expect(toc).toEqual(EXPECTED_TOC);
    expect(tocTargets).toEqual(EXPECTED_TOC.map(() => 'SECTION'));
    expect(diagrams).toEqual(EXPECTED_DIAGRAM_SECTIONS);
    expect(tables).toEqual(EXPECTED_TABLES);
    expect(codeBlocks).toEqual(EXPECTED_CODE_BLOCKS);
    expect(callouts).toEqual(EXPECTED_CALLOUTS);
    expect(references).toEqual(EXPECTED_REFERENCES);
  });
});
