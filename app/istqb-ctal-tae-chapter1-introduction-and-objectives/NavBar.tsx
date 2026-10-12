'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface TocLink {
  href: string;
  icon: string;
  text: string;
}

export interface TocGroup {
  title: string;
  links: TocLink[];
}

export const TOC_GROUPS: readonly TocGroup[] = [
  {
    title: 'はじめに',
    links: [
      { href: '#s0', icon: 'ti ti-home', text: 'Chapter 1の位置づけ' },
      { href: '#s1', icon: 'ti ti-key', text: 'キーワードと学習目標' },
    ],
  },
  {
    title: '1.1 テスト自動化の目的',
    links: [
      { href: '#s2', icon: 'ti ti-target-arrow', text: '目的・メリット・デメリット' },
    ],
  },
  {
    title: '1.2 SDLCと自動化',
    links: [
      { href: '#s3', icon: 'ti ti-git-branch', text: 'SDLCモデル別の適用' },
      { href: '#s4', icon: 'ti ti-tools', text: 'ツール選定プロセス' },
    ],
  },
  {
    title: 'まとめ',
    links: [
      { href: '#s5', icon: 'ti ti-checklist', text: '章末チェックリスト' },
      { href: '#s6', icon: 'ti ti-books', text: '参考文献・出典' },
    ],
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('s0');
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // ドロワーを閉じた後はフォーカスを開いた元のメニューボタンへ戻す
  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    menuBtnRef.current?.focus();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const allHrefs = TOC_GROUPS.flatMap((g) => g.links.map((l) => l.href.replace('#', '')));
    const elements = allHrefs
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeDrawer]);

  // 閉じたドロワー内（非表示）のリンクにフォーカスを残さず、リンク先セクションへ移す
  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    // スクロールはアンカー本来の遷移に任せる
    target.focus({ preventScroll: true });
  };

  return (
    <>
      <div className="mobile-bar">
        <button
          type="button"
          id="menuBtn"
          ref={menuBtnRef}
          aria-label="メニューを開く"
          aria-expanded={isOpen ? 'true' : 'false'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="ti ti-menu-2"></i>
        </button>
        <span className="mb-title">CTAL-TAE 第1章ガイド</span>
      </div>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar" aria-label="ページ内目次">
        <div className="sidebar-brand">
          <i className="ti ti-route"></i>
          <div className="sidebar-brand-text">
            CTAL-TAE v2.0
            <small>第1章 解説ガイド</small>
          </div>
          <button
            type="button"
            className="sidebar-close"
            id="sidebarClose"
            aria-label="メニューを閉じる"
            onClick={closeDrawer}
          >
            <i className="ti ti-x"></i>
          </button>
        </div>

        {TOC_GROUPS.map((group) => (
          <div key={group.title}>
            <div className="side-group-title">{group.title}</div>
            <ul className="side-nav">
              {group.links.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeId === targetId;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-nav
                      className={isActive ? 'active' : ''}
                      onClick={() => handleLinkClick(link.href)}
                    >
                      <i className={link.icon}></i>
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </>
  );
}
