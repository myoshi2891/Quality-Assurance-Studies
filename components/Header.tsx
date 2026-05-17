'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, groupByCategory } from '../lib/navigation';

interface HeaderProps {
  className?: string;
}

/**
 * グローバルヘッダー。ロゴとハンバーガーメニュー（ドロワー）のみを表示する。
 * 開いている間は NAV_ITEMS を groupByCategory でカテゴリ別にまとめた dialog を描画し、
 * 現在パスと一致するリンクへ `aria-current="page"` を付与する。
 */
export default function Header({ className }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const groups = groupByCategory(NAV_ITEMS);
  const close = useCallback(() => setIsOpen(false), []);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const firstLink = drawerRef.current?.querySelector('a');
    firstLink?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

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
        <>
          <div
            className="nav-overlay"
            aria-hidden="true"
            onClick={close}
          />
          <aside
            ref={drawerRef}
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
                      <Link
                        href={item.href}
                        onClick={close}
                        aria-current={pathname === item.href ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </aside>
        </>
      )}
    </nav>
  );
}

