'use client';

import React from 'react';

import { useScrollSpy } from '../../lib/useScrollSpy';
import { NAV_ITEMS, type NavItem } from './nav-items';
export { NAV_ITEMS, type NavItem };

// useScrollSpy は参照の安定した配列を要求するためモジュールスコープで保持する。
const SECTION_IDS: readonly string[] = NAV_ITEMS.map((item) =>
  item.href.replace('#', '')
);

// 旧 IntersectionObserver の rootMargin `-80px 0px -60% 0px` に相当する読み取り帯。
const SCROLL_SPY_BAND = { top: 0.1, bottom: 0.4 } as const;

export default function NavBar() {
  const activeId = useScrollSpy(SECTION_IDS, SCROLL_SPY_BAND);

  return (
    <nav className="toc desktop" aria-label="ページ内目次">
      <span className="toc-label">ON THIS PAGE</span>
      <ol>
        {NAV_ITEMS.map((item) => {
          const id = item.href.replace('#', '');
          const isActive = activeId === id;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'location' : undefined}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
