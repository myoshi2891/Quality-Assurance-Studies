'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useScrollSpy } from '../../lib/useScrollSpy';

interface NavLinkItem {
  id: string;
  label: string;
}

const NAV_ITEMS: readonly NavLinkItem[] = [
  { id: 'sec-1', label: '1. 本書について' },
  { id: 'sec-2', label: '2. テストピラミッドとは何か' },
  { id: 'sec-3', label: '3. Step1: UIテストを書く' },
  { id: 'sec-4', label: '4. Step2: レガシーへのUIテスト追加' },
  { id: 'sec-5', label: '5. Step3: 統合テストでつなぐ' },
  { id: 'sec-6', label: '6. Step4: RESTful APIの統合テスト' },
  { id: 'sec-7', label: '7. Step5: 単体テストで土台を固める' },
  { id: 'sec-8', label: '8. Step6: JSの単体テスト' },
  { id: 'sec-9', label: '9. Step7: ピラミッドを登る実践フロー' },
  { id: 'sec-10', label: '10. テストコードのスタイル' },
  { id: 'sec-11', label: '11. テストの整理法' },
  { id: 'sec-12', label: '12. 効果的なモックの使い方' },
  { id: 'sec-13', label: '13. テスト駆動開発（TDD）' },
  { id: 'sec-14', label: '14. テスティングトロフィー' },
  { id: 'sec-15', label: '15. Playwrightのベストプラクティス' },
  { id: 'sec-16', label: '16. チェックリスト' },
  { id: 'sec-17', label: '17. まとめ' },
  { id: 'sec-18', label: '18. 参考文献' },
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
        aria-label="The Way of the Web Tester 目次"
      >
        <div className="sidebar-title">
          The Way of
          <br />
          the Web Tester
        </div>
        <div className="sidebar-sub">実践ガイド 目次</div>

        <nav className="side-nav">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                className={`nav-link ${isActive ? 'active' : ''}`}
                href={`#${item.id}`}
                onClick={closeSidebar}
                aria-current={isActive ? 'location' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
