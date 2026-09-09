'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useScrollSpy } from '../../lib/useScrollSpy';

export interface NavItemType {
  href: string;
  label: string;
  icon: string;
}

export const NAV_ITEMS: readonly NavItemType[] = [
  { href: '#about', label: 'この記事について', icon: 'ti ti-info-circle' },
  { href: '#s1', label: '1. 歴史的背景', icon: 'ti ti-history' },
  { href: '#s2', label: '2. Googleのテスト思想', icon: 'ti ti-bulb' },
  { href: '#s3', label: '3. 3つの役割', icon: 'ti ti-users' },
  { href: '#s4', label: '4. テストサイズ', icon: 'ti ti-ruler-2' },
  { href: '#s5', label: '5. ACC分析', icon: 'ti ti-target-arrow' },
  { href: '#s6', label: '6. Test Certified', icon: 'ti ti-stairs-up' },
  { href: '#s7', label: '7. フレーキーテスト', icon: 'ti ti-alert-triangle' },
  { href: '#s8', label: '8. クラウドソーシング', icon: 'ti ti-cloud' },
  { href: '#s9', label: '9. CIとTotT文化', icon: 'ti ti-git-branch' },
  { href: '#s10', label: '10. 導入ステップ', icon: 'ti ti-checklist' },
  { href: '#s11', label: '11. 2026年への進化', icon: 'ti ti-timeline' },
  { href: '#s12', label: '12. 批判的視点', icon: 'ti ti-alert-circle' },
  { href: '#s13', label: '13. 原著の章立て', icon: 'ti ti-book-2' },
  { href: '#s14', label: '14. まとめ', icon: 'ti ti-list-details' },
  { href: '#s15', label: '15. 参考文献', icon: 'ti ti-link' },
] as const;

const SECTION_IDS: readonly string[] = [
  'about',
  's1',
  's2',
  's3',
  's4',
  's5',
  's6',
  's7',
  's8',
  's9',
  's10',
  's11',
  's12',
  's13',
  's14',
  's15',
] as const;

const SCROLL_SPY_BAND = { top: 0.15, bottom: 0.35 } as const;

export default function NavBar() {
  const activeId = useScrollSpy(SECTION_IDS, SCROLL_SPY_BAND);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const introItems = NAV_ITEMS.slice(0, 1);
  const mainItems = NAV_ITEMS.slice(1);

  return (
    <>
      <div className="mobile-bar" id="mobileBarToggle">
        <button
          type="button"
          id="hamburgerBtn"
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
          onClick={toggleSidebar}
        >
          <i className={isOpen ? 'ti ti-x' : 'ti ti-menu-2'} aria-hidden="true" />
        </button>
        <span className="mobile-title">How Google Tests Software ガイド</span>
      </div>

      <div
        className={`backdrop ${isOpen ? 'open' : ''}`}
        id="backdrop"
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar" aria-label="ページ内目次">
        <div className="brand">
          <div className="brand-icon">
            <i className="ti ti-brand-google" aria-hidden="true" />
          </div>
          <div>
            <div className="brand-text">
              How Google Tests
              <br />
              Software 完全ガイド
            </div>
            <div className="brand-sub">初学者向け解説</div>
          </div>
        </div>

        <div className="navlabel">はじめに</div>
        <ul className="navlist">
          {introItems.map((item) => {
            const isActive = activeId === item.href.replace('#', '');
            return (
              <li key={item.href}>
                <a
                  className={`navlink ${isActive ? 'active' : ''}`}
                  href={item.href}
                  onClick={closeSidebar}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <i className={item.icon} aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="navlabel">本編</div>
        <ul className="navlist">
          {mainItems.map((item) => {
            const isActive = activeId === item.href.replace('#', '');
            return (
              <li key={item.href}>
                <a
                  className={`navlink ${isActive ? 'active' : ''}`}
                  href={item.href}
                  onClick={closeSidebar}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <i className={item.icon} aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
