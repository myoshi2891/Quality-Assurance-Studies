'use client';

import React, { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
}

export const TOC_ITEMS: readonly TocItem[] = [
  {
    id: '0-この章の全体像',
    label: '0. この章の全体像',
  },
  {
    id: '1-tae-311テスト自動化アーキテクチャにおける主要な機能gtaa',
    label: '1. TAE-3.1.1：テスト自動化アーキテクチャにおける主要な機能（gTAA）',
  },
  {
    id: '2-tae-312テスト自動化ソリューションtasの設計方法',
    label: '2. TAE-3.1.2：テスト自動化ソリューション（TAS）の設計方法',
  },
  {
    id: '3-tae-313テスト自動化フレームワークtafのレイヤー化',
    label: '3. TAE-3.1.3：テスト自動化フレームワーク（TAF）のレイヤー化',
  },
  {
    id: '4-tae-314テストケース自動化のさまざまなアプローチ',
    label: '4. TAE-3.1.4：テストケース自動化のさまざまなアプローチ',
  },
  {
    id: '5-tae-315テスト自動化における設計原則とデザインパターン',
    label: '5. TAE-3.1.5：テスト自動化における設計原則とデザインパターン',
  },
  {
    id: '6-章全体のまとめtaaを設計する際のチェックリスト',
    label: '6. 章全体のまとめ：TAAを設計する際のチェックリスト',
  },
  {
    id: '7-出典参考ソース',
    label: '7. 出典・参考ソース',
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(TOC_ITEMS[0]?.id ?? '');

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    );

    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="sidebar-toggle"
        id="sidebarToggle"
        aria-label="メニューを開閉"
        aria-controls="sidebar"
        aria-expanded={isOpen ? 'true' : 'false'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
      </button>

      <div
        className={`sidebar-backdrop ${isOpen ? 'open' : ''}`}
        id="sidebarBackdrop"
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      ></div>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-brand">
          <div className="badge-dot"></div>
          <div className="sidebar-brand-text">
            CTAL-TAE v2.0<small>Test Automation Engineering</small>
          </div>
        </div>
        <p className="sidebar-title">第3章 目次</p>
        <nav>
          <ul>
            {TOC_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-target={item.id}
                  className={`nav-link ${activeId === item.id ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
