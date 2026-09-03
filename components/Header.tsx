'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, groupByCategory, matchesQuery, type NavCategory } from '../lib/navigation';

interface HeaderProps {
  className?: string;
}

/**
 * ドロワーを開いた時点で自動展開すべきカテゴリ（＝現在表示中のページが属するカテゴリ）を求める。
 *
 * @param pathname - The current route path
 * @returns A set containing the matching category, or an empty set when the path is not registered
 */
function initialOpenCategories(pathname: string): Set<NavCategory> {
  const current = NAV_ITEMS.find((item) => item.href === pathname);
  return current && current.category !== 'home' ? new Set([current.category]) : new Set();
}

/**
 * グローバルヘッダー。ロゴとハンバーガーメニュー（ドロワー）のみを表示する。
 *
 * ドロワーはガイド数の増加に耐えるよう、先頭にインクリメンタル検索を置き、
 * カテゴリを `<details>` で折りたたむ。既定では現在ページのカテゴリのみ展開し、
 * 検索中は残ったカテゴリをすべて展開する。これによりドロワーの高さは
 * 項目数ではなくカテゴリ数に比例する。
 */
export default function Header({ className }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<Set<NavCategory>>(() => new Set());
  const searchRef = useRef<HTMLInputElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  // ドロワーを閉じた後にハンバーガーへフォーカスを戻すか。
  // 画面遷移を伴う閉じ方（リンククリック）では遷移先のフォーカスを奪わないよう false にする。
  const restoreFocusRef = useRef(true);

  const close = useCallback(() => setIsOpen(false), []);

  /**
   * リンク経由でドロワーを閉じる。フォーカスは遷移先に委ねる。
   *
   * 修飾キー付き・主ボタン以外のクリックはブラウザが別タブ／別ウィンドウで開き、
   * Next.js のクライアント遷移が起きない。この場合ドロワーは開いたままが正しいので、
   * 開閉状態もフォーカス復帰フラグも変更しない。
   */
  const closeForNavigation = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented) return;
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    restoreFocusRef.current = false;
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setQuery('');
    setOpenCategories(initialOpenCategories(pathname));
    setIsOpen(true);
  }, [pathname]);

  const toggleCategory = useCallback((category: NavCategory) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  }, []);

  const homeItem = NAV_ITEMS.find((item) => item.category === 'home');

  const groups = useMemo(
    () =>
      groupByCategory(
        NAV_ITEMS.filter((item) => item.category !== 'home' && matchesQuery(item, query)),
      ),
    [query],
  );

  const isFiltering = query.trim().length > 0;

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
    searchRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      // Escape / オーバーレイなど遷移を伴わない閉じ方では、
      // フォーカスを起点のハンバーガーへ戻す（キーボード操作の迷子を防ぐ）。
      if (restoreFocusRef.current) hamburgerRef.current?.focus();
      restoreFocusRef.current = true;
    };
  }, [isOpen]);

  return (
    <nav className={`nav-header ${className || ''}`}>
      <Link href="/" className="nav-logo hover:opacity-80 transition-opacity">
        QA_STUDIES
      </Link>
      <button
        ref={hamburgerRef}
        type="button"
        className="nav-hamburger"
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isOpen}
        aria-controls="global-nav-panel"
        onClick={() => (isOpen ? close() : open())}
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
            id="global-nav-panel"
            className="nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="ナビゲーションメニュー"
          >
            {homeItem && (
              <ul className="nav-drawer-list nav-drawer-pinned">
                <li>
                  <Link
                    href={homeItem.href}
                    onClick={closeForNavigation}
                    aria-current={pathname === homeItem.href ? 'page' : undefined}
                  >
                    {homeItem.label}
                  </Link>
                </li>
              </ul>
            )}

            <div className="nav-drawer-search">
              <input
                ref={searchRef}
                type="search"
                className="nav-drawer-search-input"
                aria-label="ガイドを検索"
                placeholder="ガイドを検索..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {groups.length === 0 ? (
              <p className="nav-drawer-empty">該当するガイドがありません</p>
            ) : (
              groups.map((g) => (
                <details
                  key={g.category}
                  className="nav-drawer-section"
                  data-category={g.category}
                  open={isFiltering || openCategories.has(g.category)}
                >
                  <summary
                    className="nav-drawer-heading"
                    data-count={g.items.length}
                    onClick={(e) => {
                      // ネイティブのトグルを止め、開閉状態を React state に一本化する。
                      // Enter / Space も click を発火するためキーボード操作は維持される。
                      e.preventDefault();
                      // 検索中は全カテゴリを強制展開しているため、クリックしても表示は変わらない。
                      // ここで state を反転させると検索解除後に意図しない開閉状態が残るので、何もしない。
                      if (isFiltering) return;
                      toggleCategory(g.category);
                    }}
                  >
                    <h2>{g.title}</h2>
                  </summary>
                  <ul className="nav-drawer-list">
                    {g.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeForNavigation}
                          aria-current={pathname === item.href ? 'page' : undefined}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))
            )}
          </aside>
        </>
      )}
    </nav>
  );
}
