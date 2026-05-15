import type { Metadata } from 'next';
import { Noto_Sans_JP, JetBrains_Mono, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import { DisclaimerBanner } from '../components/DisclaimerBanner';

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
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
 * Provides the application's root HTML layout with configured fonts, shared Header, and Japanese language.
 *
 * Renders an <html lang="ja"> element with the project's font CSS variables applied.
 * It renders an always-visible fixed <Header /> at the top of the viewport, followed by a
 * <DisclaimerBanner /> directly beneath it. The `children` content is wrapped in a
 * `<div className="layout-content">` whose spacing is controlled by the `.layout-content`
 * stylesheet (rather than a hardcoded top padding).
 *
 * @param children - Page content rendered inside the `.layout-content` wrapper
 * @returns The root HTML structure for application pages
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${jetBrainsMono.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <DisclaimerBanner />
        <div className="layout-content">{children}</div>
      </body>
    </html>
  );
}
