import type { Metadata } from 'next';
import { Noto_Sans_JP, JetBrains_Mono, DM_Sans, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import { DisclaimerBanner } from '../components/DisclaimerBanner';

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  variable: '--font-body',
});

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

/*
  ガイド index（`/`）専用のディスプレイ書体。
  h1 は日本語なので、この書体が実際に効くのはガイド総数の数字と
  CTAL-TTA / CT-AI といったラテン略号だけ。そこだけ声が切り替わる混植を狙う。
  1 ルートでしか使わないため preload はしない。
*/
const bricolage = Bricolage_Grotesque({
  weight: ['600', '800'],
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  variable: '--font-bricolage',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'QA Studies & AI Test Guide',
  description: 'AIシステムのテストおよびQAに関する学習リソース',
};

/**
 * Renders the application's root HTML layout, sets the document language to Japanese,
 * applies project font CSS variables, includes the shared header and disclaimer banner,
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
    <html lang="ja" className={`${notoSansJP.variable} ${jetBrainsMono.variable} ${dmSans.variable} ${bricolage.variable}`}>
      <body>
        <Header />
        <DisclaimerBanner />
        <div className="layout-content">{children}</div>
      </body>
    </html>
  );
}
