import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/85 backdrop-blur-[16px] border-b border-[rgba(99,179,237,0.12)] px-8 h-[60px] flex items-center gap-6 ${className || ''}`}>
      <Link href="/" className="nav-logo hover:opacity-80 transition-opacity">
        QA_STUDIES
      </Link>
      <div className="nav-links flex-1 flex gap-1 overflow-x-auto no-scrollbar">
        <Link href="/">ホーム</Link>
        <Link href="/ai-test-guide">AIテストガイド</Link>
        <Link href="/unit-testing-guide">ユニットテストガイド</Link>
        <Link href="/integration-functional-testing-guide">統合/機能テストガイド</Link>
        <Link href="/integration-system-testing-guide">統合/システムテストガイド</Link>
        {/* ai-genAI-guide.html 内の目次リンクとして使われていたものはページ内リンクとして各ページ内で処理します */}
      </div>
      <span className="nav-badge hidden sm:inline-block">
        Next.js SPA
      </span>
    </nav>
  );
}
