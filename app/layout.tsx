import type { Metadata, Viewport } from 'next';
/*
  Web フォントは Fontsource で node_modules から自前配信する。
  next/font の Google ローダーはビルドのたびに Google Fonts へ通信し、CI ランナーからの
  取得失敗で Turbopack ビルドが非決定的に落ちるため使わない。
  各 CSS は unicode-range でスライスされており、閲覧時は必要なスライスだけを読む。
  family 名（'Noto Sans JP' 等）は globals.css の --font-* 変数が参照する。
*/
import '@fontsource/noto-sans-jp/300.css';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/700.css';
import '@fontsource/dm-sans/300.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-sans/800.css';
/*
  ガイド index（`/`）専用のディスプレイ書体。
  h1 は日本語なので、この書体が実際に効くのはガイド総数の数字と
  CTAL-TTA / CT-AI といったラテン略号だけ。そこだけ声が切り替わる混植を狙う。
*/
import '@fontsource/bricolage-grotesque/600.css';
import '@fontsource/bricolage-grotesque/800.css';
import './globals.css';
import Header from '../components/Header';
import { DisclaimerBanner } from '../components/DisclaimerBanner';

export const metadata: Metadata = {
  title: 'QA Studies & AI Test Guide',
  description: 'AIシステムのテストおよびQAに関する学習リソース',
};

/*
  ファビコン（app/icon.svg・app/favicon.ico・app/apple-icon.png）は
  App Router のファイル規約で自動的に <link> 化されるため metadata.icons は書かない。
  themeColor だけはモバイルブラウザのクロームをサイトのダーク背景に合わせるために明示する。
*/
export const viewport: Viewport = {
  themeColor: '#0a0e1a',
};

/**
 * Renders the application's root HTML layout, sets the document language to Japanese,
 * loads self-hosted web fonts, includes the shared header and disclaimer banner,
 * and wraps page content in a `.layout-content` container.
 *
 * @param children - Page content to render inside the `.layout-content` wrapper
 * @returns The root HTML element tree for application pages
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/*
          Tabler アイコンフォント。CSS の @import はページ CSS を読み終えるまで
          発見されず往復が直列化するため、レイアウトで <link> として一元的に読む。
          React 19 が rel="stylesheet" / rel="preconnect" を <head> へ巻き上げる。
        */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          precedence="default"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.46.0/dist/tabler-icons.min.css"
          integrity="sha384-ND+q1IVc0KDElX60dZaqKc7Xl9cdxd2PpU2JfVUHcurCkFVtVLFdt9vJfxtHSL3p"
          crossOrigin="anonymous"
        />
        <Header />
        <DisclaimerBanner />
        <div className="layout-content">{children}</div>
      </body>
    </html>
  );
}
