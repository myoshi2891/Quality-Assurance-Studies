'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
  icon: string;
  group: 'はじめに' | '本編' | '発展' | 'まとめ';
}

export const TOC_ITEMS: readonly TocItem[] = [
  // はじめに
  { id: 'book-info', label: 'この本について', icon: 'ti ti-book', group: 'はじめに' },
  { id: 'audience', label: '対象読者と前提知識', icon: 'ti ti-users', group: 'はじめに' },
  { id: 'what-is-tdd', label: 'TDDとは何か', icon: 'ti ti-refresh', group: 'はじめに' },
  // 本編
  { id: 'structure', label: '本書の3部構成', icon: 'ti ti-stack-2', group: '本編' },
  { id: 'part1', label: 'Part I: Moneyの例', icon: 'ti ti-coin', group: '本編' },
  { id: 'part2', label: 'Part II: xUnitを自作する', icon: 'ti ti-tool', group: '本編' },
  { id: 'part3', label: 'Part III: パターン集', icon: 'ti ti-puzzle', group: '本編' },
  // 発展
  { id: 'three-laws', label: 'TDDの三原則', icon: 'ti ti-gavel', group: '発展' },
  { id: 'canon-tdd', label: 'Canon TDD', icon: 'ti ti-list-check', group: '発展' },
  { id: 'pitfalls', label: 'つまずきやすい点', icon: 'ti ti-alert-triangle', group: '発展' },
  { id: 'tdd-is-dead', label: 'TDD is Dead論争', icon: 'ti ti-messages', group: '発展' },
  { id: 'ai-era', label: 'AIエージェント時代のTDD', icon: 'ti ti-robot', group: '発展' },
  // まとめ
  { id: 'checklist', label: 'ベストプラクティス', icon: 'ti ti-checklist', group: 'まとめ' },
  { id: 'roadmap', label: '学習ロードマップ', icon: 'ti ti-route', group: 'まとめ' },
  { id: 'summary', label: 'まとめ', icon: 'ti ti-notes', group: 'まとめ' },
  { id: 'references', label: '参考文献・出典', icon: 'ti ti-link', group: 'まとめ' },
] as const;

export const TOC_GROUPS = ['はじめに', '本編', '発展', 'まとめ'] as const;

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('book-info');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.section[id]'));
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
      <div className={`sidebar-backdrop ${isOpen ? 'open' : ''}`} id="backdrop" onClick={handleClose} />
      <div className="mobile-bar" id="mobileBar">
        <button
          ref={toggleRef}
          id="mobileToggle"
          aria-label="メニューを開閉する"
          aria-controls="sidebar"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <i className={isOpen ? 'ti ti-x' : 'ti ti-menu-2'} id="mobileIcon"></i>
        </button>
        <span className="mobile-title">TDD: By Example ガイド</span>
      </div>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-inner">
          <div className="brand">
            <i className="ti ti-flask-2"></i>
            <div className="brand-text">
              TDD by Example<small>初学者向けガイド</small>
            </div>
          </div>

          {TOC_GROUPS.map((group) => {
            const items = TOC_ITEMS.filter((item) => item.group === group);
            return (
              <div key={group}>
                <div className="nav-group-title">{group}</div>
                <nav className="nav-list">
                  {items.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <a
                        key={item.id}
                        className={`nav-a ${isActive ? 'active' : ''}`}
                        href={`#${item.id}`}
                        onClick={() => {
                          if (window.innerWidth <= 960) handleClose();
                        }}
                      >
                        <i className={item.icon}></i>
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
