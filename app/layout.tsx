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
 * Define the application's root HTML layout: applies project font CSS variables, sets the document language to Japanese, renders the shared header and disclaimer banner, and wraps page content in the `.layout-content` container.
 *
 * @param children - Page content rendered inside the `.layout-content` wrapper
 * @returns The root HTML element tree for application pages
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
