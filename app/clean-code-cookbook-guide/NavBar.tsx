'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useScrollSpy } from '../../lib/useScrollSpy';

interface NavLinkItem {
  id: string;
  label: string;
  iconClass: string;
}

const NAV_ITEMS: NavLinkItem[] = [
  { id: 'sec-1', label: 'この本について', iconClass: 'ti ti-book-2' },
  { id: 'sec-2', label: '基礎知識', iconClass: 'ti ti-bulb' },
  { id: 'sec-3', label: '全体像：25章', iconClass: 'ti ti-list-details' },
  { id: 'sec-4', label: '8ステップ実践', iconClass: 'ti ti-route' },
  { id: 'sec-5', label: 'Sandi Metzのルール', iconClass: 'ti ti-ruler-2' },
  { id: 'sec-6', label: '著名開発者の視点', iconClass: 'ti ti-users' },
  { id: 'sec-7', label: 'AI時代の新しい動向', iconClass: 'ti ti-robot' },
  { id: 'sec-8', label: '保存版チェックリスト', iconClass: 'ti ti-checklist' },
  { id: 'sec-9', label: 'まとめ', iconClass: 'ti ti-flag' },
  { id: 'sec-10', label: '参考文献・出典', iconClass: 'ti ti-link' },
];

const SECTION_IDS: readonly string[] = NAV_ITEMS.map((item) => item.id);
const SCROLL_SPY_BAND = { top: 0.1, bottom: 0.25 } as const;

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
      if (window.innerWidth > 880) {
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
        className="nav-toggle"
        id="navToggle"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-controls="sidebar"
        aria-expanded={isOpen}
      >
        <i className={isOpen ? 'ti ti-x' : 'ti ti-menu-2'} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <nav
        className={`sidebar ${isOpen ? 'open' : ''}`}
        id="sidebar"
        aria-label="Clean Code Cookbook 目次"
      >
        <div className="brand">
          <i className="ti ti-book-2" aria-hidden="true" />
          <span>Clean Code Cookbook</span>
        </div>
        <div className="brand-sub">初心者のためのステップバイステップ・ベストプラクティス</div>

        <ul className="nav-list">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  className={`nav-a ${isActive ? 'active' : ''}`}
                  href={`#${item.id}`}
                  onClick={closeSidebar}
                  aria-current={isActive ? 'location' : undefined}
                >
                  <i className={item.iconClass} aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="sidebar-footer">2026年8月27日時点の情報に基づく</div>
      </nav>
    </>
  );
}
