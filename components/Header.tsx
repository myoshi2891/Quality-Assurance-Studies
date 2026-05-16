'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, groupByCategory } from '../lib/navigation';

interface HeaderProps {
  className?: string;
}

/**
 * グローバルヘッダー。ロゴ・ハンバーガーメニュー・ドロワー・（暫定）旧リンク群を表示する。
 *
 * ハンバーガーボタンは aria-expanded / aria-controls を提供し、開閉状態に応じて
 * aria-label が「メニューを開く / メニューを閉じる」に切り替わる。
 * 開いている間は NAV_ITEMS を groupByCategory でカテゴリ別にまとめた dialog を描画する。
 *
 * @param className - 追加の CSS クラス
 * @returns Header コンポーネント
 */
export default function Header({ className }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const groups = groupByCategory(NAV_ITEMS);

  const getLinkClassName = (href: string) => {
    return pathname === href ? 'active' : '';
  };

  return (
    <nav className={`nav-header ${className || ''}`}>
      <Link href="/" className="nav-logo hover:opacity-80 transition-opacity">
        QA_STUDIES
      </Link>
      <button
        type="button"
        className="nav-hamburger"
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isOpen}
        aria-controls="global-nav-panel"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
      {isOpen && (
        <aside
          id="global-nav-panel"
          className="nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="ナビゲーションメニュー"
        >
          {groups.map((g) => (
            <section key={g.category} className="nav-drawer-section">
              {g.category !== 'home' && (
                <h2 className="nav-drawer-heading">{g.title}</h2>
              )}
              <ul className="nav-drawer-list">
                {g.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </aside>
      )}
      <div className="nav-links flex-1 flex gap-1 overflow-x-auto no-scrollbar">
        <Link href="/" className={getLinkClassName('/')}>ホーム</Link>
        <Link href="/software-testing-methodologies-guide" className={getLinkClassName('/software-testing-methodologies-guide')}>テスト手法ガイド</Link>
        <Link href="/ai-test-guide" className={getLinkClassName('/ai-test-guide')}>AIテストガイド</Link>
        <Link href="/unit-testing-guide" className={getLinkClassName('/unit-testing-guide')}>ユニットテストガイド</Link>
        <Link href="/integration-functional-testing-guide" className={getLinkClassName('/integration-functional-testing-guide')}>統合/機能テストガイド</Link>
        <Link href="/integration-system-testing-guide" className={getLinkClassName('/integration-system-testing-guide')}>統合/システムテストガイド</Link>
        <Link href="/e2e-testing-guide" className={getLinkClassName('/e2e-testing-guide')}>E2Eテストガイド</Link>
        <Link href="/acceptance-testing-guide" className={getLinkClassName('/acceptance-testing-guide')}>受入テストガイド</Link>
        <Link href="/bdd-testing-guide" className={getLinkClassName('/bdd-testing-guide')}>BDDガイド</Link>
        <Link href="/istqb-ctfl-at-complete-guide" className={getLinkClassName('/istqb-ctfl-at-complete-guide')}>アジャイル(CTFL-AT)ガイド</Link>
        <Link href="/istqb-ctal-tae-complete-guide" className={getLinkClassName('/istqb-ctal-tae-complete-guide')}>テスト自動化(CTAL-TAE)ガイド</Link>
        <Link href="/istqb-ctal-ta-complete-guide" className={getLinkClassName('/istqb-ctal-ta-complete-guide')}>テストアナリスト(CTAL-TA)ガイド</Link>
        <Link href="/istqb-ctal-tm-complete-guide" className={getLinkClassName('/istqb-ctal-tm-complete-guide')}>テスト管理(CTAL-TM)ガイド</Link>
        <Link href="/istqb-ctal-att-complete-guide" className={getLinkClassName('/istqb-ctal-att-complete-guide')}>アジャイル(CTAL-ATT)ガイド</Link>
        <Link href="/istqb-ctal-atlas-complete-guide" className={getLinkClassName('/istqb-ctal-atlas-complete-guide')}>アジャイル(CT-ATLaS)ガイド</Link>
        <Link href="/istqb-ct-ai-complete-guide" className={getLinkClassName('/istqb-ct-ai-complete-guide')}>AIテスト(CT-AI)ガイド</Link>
        <Link href="/istqb-ct-genai-complete-guide" className={getLinkClassName('/istqb-ct-genai-complete-guide')}>生成AIテスト(CT-GenAI)ガイド</Link>
        <Link href="/istqb-ct-mbt-complete-guide" className={getLinkClassName('/istqb-ct-mbt-complete-guide')}>モデルベーステスト(CT-MBT)ガイド</Link>
        <Link href="/istqb-ct-act-complete-guide" className={getLinkClassName('/istqb-ct-act-complete-guide')}>受入テスト(CT-AcT)ガイド</Link>
        <Link href="/istqb-ct-mat-complete-guide" className={getLinkClassName('/istqb-ct-mat-complete-guide')}>モバイルアプリテスト(CT-MAT)ガイド</Link>
      </div>
      <span className="nav-badge hidden sm:inline-block">
        Next.js SPA
      </span>
    </nav>
  );
}

