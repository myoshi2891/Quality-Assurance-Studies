'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  className?: string;
}

/**
 * Renders the top navigation header with a logo link, a set of route-aware page links, and a responsive badge.
 *
 * The header is fixed to the top of the viewport and appends any provided `className` to the root <nav> element.
 *
 * @param className - Optional additional CSS classes to apply to the root navigation element
 * @returns The header JSX element containing the logo, navigation links (each marked active when its href matches the current pathname), and a badge shown on small screens and larger
 */
export default function Header({ className }: HeaderProps) {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    return pathname === href ? 'active' : '';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/85 backdrop-blur-[16px] border-b border-[rgba(99,179,237,0.12)] px-8 h-[60px] flex items-center gap-6 ${className || ''}`}>
      <Link href="/" className="nav-logo hover:opacity-80 transition-opacity">
        QA_STUDIES
      </Link>
      <div className="nav-links flex-1 flex gap-1 overflow-x-auto no-scrollbar">
        <Link href="/" className={getLinkClassName('/')}>ホーム</Link>
        <Link href="/ai-test-guide" className={getLinkClassName('/ai-test-guide')}>AIテストガイド</Link>
        <Link href="/unit-testing-guide" className={getLinkClassName('/unit-testing-guide')}>ユニットテストガイド</Link>
        <Link href="/integration-functional-testing-guide" className={getLinkClassName('/integration-functional-testing-guide')}>統合/機能テストガイド</Link>
        <Link href="/integration-system-testing-guide" className={getLinkClassName('/integration-system-testing-guide')}>統合/システムテストガイド</Link>
        {/* ai-genAI-guide.html 内の目次リンクとして使われていたものはページ内リンクとして各ページ内で処理します */}
      </div>
      <span className="nav-badge hidden sm:inline-block">
        Next.js SPA
      </span>
    </nav>
  );
}
