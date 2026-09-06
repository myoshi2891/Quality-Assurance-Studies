'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useScrollSpy } from '../../lib/useScrollSpy';

interface NavItemDef {
  href: string;
  id: string;
  num: string;
  label: string;
}

const NAV_ITEMS: readonly NavItemDef[] = [
  { href: '#s01', id: 's01', num: '01', label: 'この記事について' },
  { href: '#s02', id: 's02', num: '02', label: 'テスト設計とは何か' },
  { href: '#s03', id: 's03', num: '03', label: '書籍紹介' },
  { href: '#s04', id: 's04', num: '04', label: 'プロセス全体像' },
  { href: '#s05', id: 's05', num: '05', label: '共通例' },
  { href: '#s06', id: 's06', num: '06', label: '同値分割' },
  { href: '#s07', id: 's07', num: '07', label: '境界値分析' },
  { href: '#s08', id: 's08', num: '08', label: 'デシジョンテーブル' },
  { href: '#s09', id: 's09', num: '09', label: '状態遷移テスト' },
  { href: '#s10', id: 's10', num: '10', label: 'ドメイン分析' },
  { href: '#s11', id: 's11', num: '11', label: 'ペアワイズ／組合せ' },
  { href: '#s12', id: 's12', num: '12', label: 'ユースケーステスト' },
  { href: '#s13', id: 's13', num: '13', label: 'ホワイトボックス技法' },
  { href: '#s14', id: 's14', num: '14', label: '比較と選び方' },
  { href: '#s15', id: 's15', num: '15', label: 'ベストプラクティス' },
  { href: '#s16', id: 's16', num: '16', label: 'アンチパターン' },
  { href: '#s17', id: 's17', num: '17', label: '現代的トレンド' },
  { href: '#s18', id: 's18', num: '18', label: 'まとめ' },
  { href: '#s19', id: 's19', num: '19', label: '参考文献・出典' },
];

const SECTION_IDS: readonly string[] = NAV_ITEMS.map((item) => item.id);
const SCROLL_SPY_BAND = { top: 0.15, bottom: 0.3 } as const;

export default function NavBar() {
  const activeId = useScrollSpy(SECTION_IDS, SCROLL_SPY_BAND);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        type="button"
        className="menu-toggle ui"
        id="menuToggle"
        onClick={toggleSidebar}
        aria-controls="sidebar"
        aria-expanded={isOpen}
        aria-label={isOpen ? '目次を閉じる' : '目次を開く'}
      >
        <i className={isOpen ? 'ti ti-x' : 'ti ti-menu-2'} aria-hidden="true" />
        目次
      </button>

      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`sidebar ${isOpen ? 'open' : ''}`}
        id="sidebar"
        aria-label="目次"
      >
        <p className="sidebar-brand">
          A Practitioner&apos;s Guide to
          <br />
          Software Test Design
        </p>
        <p className="sidebar-sub">実践ガイド：初学者のためのテスト設計入門</p>
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  className={`nav-a ${isActive ? 'active' : ''}`}
                  href={item.href}
                  onClick={closeSidebar}
                  aria-current={isActive ? 'location' : undefined}
                >
                  <span className="n-num">{item.num}</span>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
