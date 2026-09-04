'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useScrollSpy } from '../../lib/useScrollSpy';

interface NavLinkItem {
  id: string;
  label: string;
  iconPath: React.ReactNode;
}

const NAV_ITEMS: NavLinkItem[] = [
  {
    id: 'sec-1',
    label: 'この本について',
    iconPath: (
      <path d="M19 4v16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm-8 4H9v2h2V8zm6 0h-4v2h4V8zm0 4h-4v2h4v-2zm-6 0H9v2h2v-2z" />
    ),
  },
  {
    id: 'sec-2',
    label: '基礎知識',
    iconPath: (
      <path d="M9 21h6v-2H9v2zm3-19C7.48 2 3.82 5.66 3.82 10.18c0 2.8 1.4 5.28 3.54 6.77V18a1 1 0 0 0 1 1h7.28a1 1 0 0 0 1-1v-1.05c2.14-1.49 3.54-3.97 3.54-6.77C20.18 5.66 16.52 2 12 2z" />
    ),
  },
  {
    id: 'sec-3',
    label: '全体像：25章',
    iconPath: (
      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
    ),
  },
  {
    id: 'sec-4',
    label: '8ステップ実践',
    iconPath: (
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.59L8.41 12 9.83 10.59l3.17 3.18 5.17-5.18L19.59 10z" />
    ),
  },
  {
    id: 'sec-5',
    label: 'Sandi Metzのルール',
    iconPath: (
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    ),
  },
  {
    id: 'sec-6',
    label: '著名開発者の視点',
    iconPath: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    ),
  },
  {
    id: 'sec-7',
    label: 'AI時代の新しい動向',
    iconPath: (
      <path d="M19 9h-2V7a5 5 0 0 0-10 0v2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zM9 7a3 3 0 0 1 6 0v2H9V7zm10 12H5v-8h14v8zM9 13a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 9 13zm6 0a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 15 13z" />
    ),
  },
  {
    id: 'sec-8',
    label: '保存版チェックリスト',
    iconPath: (
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.29 13.29a1 1 0 0 1-1.41 0L6.71 13.7a1 1 0 0 1 1.41-1.41L10 14.17l5.88-5.88a1 1 0 1 1 1.41 1.41z" />
    ),
  },
  {
    id: 'sec-9',
    label: 'まとめ',
    iconPath: (
      <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
    ),
  },
  {
    id: 'sec-10',
    label: '参考文献・出典',
    iconPath: (
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
    ),
  },
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19 4v16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm-8 4H9v2h2V8zm6 0h-4v2h4V8zm0 4h-4v2h4v-2zm-6 0H9v2h2v-2z" />
          </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    {item.iconPath}
                  </svg>
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
