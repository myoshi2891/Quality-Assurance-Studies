'use client';

import React, { useEffect, useState } from 'react';

import { NAV_ITEMS, type NavItem } from './nav-items';
export { NAV_ITEMS, type NavItem };

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

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
