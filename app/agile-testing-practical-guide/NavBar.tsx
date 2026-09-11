'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useScrollSpy } from '../../lib/useScrollSpy';

export interface NavItemType {
  href: string;
  label: string;
  icon: string;
}

export const NAV_ITEMS: readonly NavItemType[] = [
  { href: '#about', label: 'この本について', icon: 'ti ti-book' },
  { href: '#step1', label: 'ステップ1: アジャイルテストとは', icon: 'ti ti-git-branch' },
  { href: '#step2', label: 'ステップ2: 10の原則', icon: 'ti ti-list-numbers' },
  { href: '#step3', label: 'ステップ3: 組織課題とホールチーム', icon: 'ti ti-users-group' },
  { href: '#step4', label: 'ステップ4: アジャイルテストの4象限', icon: 'ti ti-layout-grid' },
  { href: '#step5', label: 'ステップ5: 自動化とテストピラミッド', icon: 'ti ti-pyramid' },
  { href: '#step6', label: 'ステップ6: Power of Three', icon: 'ti ti-puzzle' },
  { href: '#step7', label: 'ステップ7: イテレーションサイクル', icon: 'ti ti-refresh' },
  { href: '#step8', label: 'ステップ8: 探索的テスト', icon: 'ti ti-search' },
  { href: '#step9', label: 'ステップ9: 7つの成功要因', icon: 'ti ti-trophy' },
  { href: '#step10', label: 'ステップ10: 思想の進化', icon: 'ti ti-timeline' },
  { href: '#checklist', label: '実践チェックリスト', icon: 'ti ti-checklist' },
  { href: '#pitfalls', label: 'よくある落とし穴', icon: 'ti ti-alert-triangle' },
  { href: '#references', label: '参考文献・出典URL', icon: 'ti ti-link' },
] as const;

const SECTION_IDS: readonly string[] = [
  'about',
  'step1',
  'step2',
  'step3',
  'step4',
  'step5',
  'step6',
  'step7',
  'step8',
  'step9',
  'step10',
  'checklist',
  'pitfalls',
  'references',
] as const;

const SCROLL_SPY_BAND = { top: 0.15, bottom: 0.35 } as const;

export default function NavBar() {
  const activeId = useScrollSpy(SECTION_IDS, SCROLL_SPY_BAND);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    // サイドバー内にフォーカスが残ったまま閉じると、非表示要素上にフォーカスが
    // 取り残される。閉じる前に判定し、トグルボタンへフォーカスを戻す。
    const focusWasInside = sidebarRef.current?.contains(document.activeElement) ?? false;
    setIsOpen(false);
    if (focusWasInside) {
      toggleRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        // デスクトップ幅ではサイドバーが常時表示になるため、開閉状態をリセットする。
        setIsOpen(false);
        return;
      }
      // モバイル幅へ戻ると閉じたサイドバーは visibility: hidden になる。
      // デスクトップ幅でサイドバー内リンクへ当たっていたフォーカスが
      // 不可視要素に取り残されないよう、トグルボタンへ戻す。
      if (!isOpen && sidebarRef.current?.contains(document.activeElement)) {
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      <div className="mobile-bar" id="mobileBarToggle">
        <button
          type="button"
          id="sidebarToggle"
          ref={toggleRef}
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
          aria-controls="sidebar"
          onClick={toggleSidebar}
        >
          <i className={isOpen ? 'ti ti-x' : 'ti ti-menu-2'} aria-hidden="true" />
        </button>
        <span>Agile Testing 実践ガイド</span>
      </div>

      <div
        className={`overlay ${isOpen ? 'show' : ''}`}
        id="overlay"
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <aside
        ref={sidebarRef}
        className={`sidebar ${isOpen ? 'open' : ''}`}
        id="sidebar"
        aria-label="目次"
      >
        <button
          type="button"
          className="sidebar-close"
          id="sidebarClose"
          aria-label="メニューを閉じる"
          onClick={closeSidebar}
        >
          <i className="ti ti-x" aria-hidden="true" />
        </button>

        <div className="side-brand">
          <i className="ti ti-books" aria-hidden="true" />
          <span>
            Agile Testing
            <br />
            実践ガイド
          </span>
        </div>

        <nav>
          <ul className="side-nav">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeId === targetId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={isActive ? 'active' : ''}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={closeSidebar}
                  >
                    <i className={item.icon} aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
