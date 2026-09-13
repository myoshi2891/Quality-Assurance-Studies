'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
  icon: string;
}

export const TOC_ITEMS: TocItem[] = [
  { id: 'intro', label: 'はじめに', icon: 'ti ti-book-2' },
  { id: 'ch1', label: '第1章: テストの心理学', icon: 'ti ti-bug' },
  { id: 'ch2', label: '第2章: テストの7原則', icon: 'ti ti-list-check' },
  { id: 'ch3', label: '第3章: テストレベル', icon: 'ti ti-stack-2' },
  { id: 'ch4', label: '第4章: ブラックボックス技法', icon: 'ti ti-box' },
  { id: 'ch5', label: '第5章: ホワイトボックスとカバレッジ', icon: 'ti ti-code' },
  { id: 'ch6', label: '第6章: 非実行型テスト', icon: 'ti ti-eye' },
  { id: 'ch7', label: '第7章: テストピラミッド', icon: 'ti ti-triangle' },
  { id: 'ch8', label: '第8章: TDD', icon: 'ti ti-refresh' },
  { id: 'ch9', label: '第9章: FIRST原則', icon: 'ti ti-award' },
  { id: 'ch10', label: '第10章: デバッグの技法', icon: 'ti ti-search' },
  { id: 'ch11', label: '第11章: 継続的テストとFlaky Test', icon: 'ti ti-git-branch' },
  { id: 'ch12', label: '第12章: AI時代のテスト', icon: 'ti ti-robot' },
  { id: 'checklist', label: '実践チェックリスト', icon: 'ti ti-checklist' },
  { id: 'references', label: '参考文献', icon: 'ti ti-link' },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('intro');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section.chapter[id]'));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    if (isOpen) {
      toggleRef.current?.focus({ preventScroll: true });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="mobile-bar">
        <button
          ref={toggleRef}
          id="menuToggle"
          type="button"
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-controls="sidebar"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <i className="ti ti-menu-2"></i>
        </button>
        <span>The Art of Software Testing 実践ガイド</span>
      </div>
      <div
        className={`sidebar-backdrop ${isOpen ? 'open' : ''}`}
        id="backdrop"
        onClick={handleClose}
      />

      <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <div className="brand">
          <i className="ti ti-bug brand-icon"></i>Testing Guide
        </div>
        <p className="brand-sub">The Art of Software Testing 実践ガイド</p>
        <nav aria-label="目次">
          <ul>
            {TOC_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-nav
                  className={activeId === item.id ? 'active' : ''}
                  aria-current={activeId === item.id ? 'location' : undefined}
                  onClick={handleClose}
                >
                  <i className={`${item.icon} nav-icon`}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-foot">2026年8月時点の情報に基づく</div>
      </aside>
    </>
  );
}
