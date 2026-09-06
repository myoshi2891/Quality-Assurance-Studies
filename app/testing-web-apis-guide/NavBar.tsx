'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useScrollSpy } from '../../lib/useScrollSpy';

interface NavItemDef {
  id: string;
  label: string;
  groupLabel?: string;
}

const NAV_ITEMS: readonly NavItemDef[] = [
  { id: 'section-1', label: '1. なぜAPIテストが重要か' },
  { id: 'section-2', label: '2. テストピラミッドとトロフィー' },
  { id: 'section-3', label: 'Step 0: リスクベースの準備', groupLabel: 'Step 0-3 基礎' },
  { id: 'section-4', label: 'Step 1: 仕様を理解する' },
  { id: 'section-5', label: 'Step 2: 基本HTTPテスト設計' },
  { id: 'section-6', label: 'Step 3: 探索的テスト' },
  { id: 'section-7', label: 'Step 4: 自動化とツール', groupLabel: 'Step 4-7 仕組み化' },
  { id: 'section-8', label: 'Step 5: 契約テスト(Pact)' },
  { id: 'section-9', label: 'Step 6: 性能・負荷テスト' },
  { id: 'section-10', label: 'Step 7: セキュリティテスト' },
  { id: 'section-11', label: 'Step 8: CI/CD統合', groupLabel: 'Step 8-9 運用' },
  { id: 'section-12', label: 'Step 9: 本番環境でのテスト' },
  { id: 'section-13', label: 'よくある落とし穴', groupLabel: 'まとめ' },
  { id: 'section-14', label: '初学者向けチェックリスト' },
  { id: 'section-15', label: '参考文献・出典' },
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
      if (window.innerWidth > 900) {
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
        aria-controls="sidebar"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
      >
        {isOpen ? '✕' : '☰'}
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
        <p className="brand">Web APIテスト実践ガイド</p>
        <p className="brand-sub">初学者向けステップバイステップ</p>

        <nav>
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <React.Fragment key={item.id}>
                {item.groupLabel && (
                  <p className="toc-group-label">{item.groupLabel}</p>
                )}
                <a
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  href={`#${item.id}`}
                  onClick={closeSidebar}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </React.Fragment>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
