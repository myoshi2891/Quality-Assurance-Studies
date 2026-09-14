'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
  num?: string;
  icon?: string;
}

export const TOC_ITEMS: readonly TocItem[] = [
  { id: 'about', label: '対象読者と使い方', num: '-' },
  { id: 'step1', label: '本当の目的', num: '1' },
  { id: 'step2', label: '定義', num: '2' },
  { id: 'step3', label: '二大流派', num: '3' },
  { id: 'step4', label: 'AAAパターン', num: '4' },
  { id: 'step5', label: '4本柱', num: '5' },
  { id: 'step6', label: 'モックと壊れやすさ', num: '6' },
  { id: 'step7', label: 'テストダブル分類', num: '7' },
  { id: 'step8', label: '3つのスタイル', num: '8' },
  { id: 'step9', label: 'Humble Object', num: '9' },
  { id: 'step10', label: '統合テスト', num: '10' },
  { id: 'step11', label: 'モッキング実践', num: '11' },
  { id: 'step12', label: 'DBのテスト', num: '12' },
  { id: 'step13', label: 'アンチパターン', num: '13' },
  { id: 'checklist', label: '実践チェックリスト', icon: 'ti ti-checkbox' },
  { id: 'update2026', label: '2026年の補足', icon: 'ti ti-sparkles' },
  { id: 'references', label: '参考文献・情報源', icon: 'ti ti-link' },
] as const;

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('about');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main.content section[id]'));
    const firstSection = sections[0];
    if (!firstSection) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.25;
      let currentId = firstSection.id;
      for (const sec of sections) {
        const el = sec as HTMLElement;
        if (el.offsetTop <= scrollPos) {
          currentId = el.id;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 900) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className={`sidebar-backdrop ${isOpen ? 'open' : ''}`}
        id="backdrop"
        onClick={handleClose}
      />

      <div className="mobile-bar" id="mobileBar">
        <button
          ref={toggleRef}
          id="mobileToggle"
          aria-label="メニューを開く"
          aria-controls="sidebar"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <i className="ti ti-menu-2"></i>メニュー
        </button>
      </div>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-brand">
          <i className="ti ti-test-pipe"></i>Unit Testing Guide
        </div>
        <div className="sidebar-sub">初学者のためのステップバイステップ ベストプラクティス</div>
        <ul className="side-nav">
          {TOC_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  className={`side-link ${isActive ? 'active' : ''}`}
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                  aria-current={isActive ? 'location' : undefined}
                >
                  <span className="side-num">
                    {item.icon ? (
                      <i className={item.icon} style={{ fontSize: '1rem' }}></i>
                    ) : (
                      item.num
                    )}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
