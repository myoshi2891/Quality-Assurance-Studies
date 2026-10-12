'use client';

import React, { useEffect, useState } from 'react';

export interface TocChildLink {
  href: string;
  dataTarget: string;
  text: string;
}

export interface TocLink {
  href: string;
  dataTarget: string;
  text: string;
  children?: TocChildLink[];
}

export const TOC_LINKS: TocLink[] = [
  {
    href: '#sec-0',
    dataTarget: 'sec-0',
    text: '0. この章の位置づけ',
  },
  {
    href: '#sec-1',
    dataTarget: 'sec-1',
    text: '1. インフラ構成の理解',
    children: [
      {
        href: '#sec-1-1',
        dataTarget: 'sec-1-1',
        text: '1.1 テスト容易性とは',
      },
      {
        href: '#sec-1-2',
        dataTarget: 'sec-1-2',
        text: '1.2 3つの設計側面',
      },
      {
        href: '#sec-1-3',
        dataTarget: 'sec-1-3',
        text: '1.3 構成要素',
      },
    ],
  },
  {
    href: '#sec-2',
    dataTarget: 'sec-2',
    text: '2. さまざまな環境での活用',
    children: [
      {
        href: '#sec-2-1',
        dataTarget: 'sec-2-1',
        text: '2.1 各環境の特徴',
      },
    ],
  },
  {
    href: '#sec-3',
    dataTarget: 'sec-3',
    text: '3. ツール・戦略の評価プロセス',
    children: [
      {
        href: '#sec-3-1',
        dataTarget: 'sec-3-1',
        text: '3.1 SUTの分析',
      },
      {
        href: '#sec-3-2',
        dataTarget: 'sec-3-2',
        text: '3.2 ツール評価の図示',
      },
    ],
  },
  {
    href: '#sec-4',
    dataTarget: 'sec-4',
    text: '4. まとめとチェックリスト',
  },
  {
    href: '#sec-5',
    dataTarget: 'sec-5',
    text: '5. 参考文献・情報源',
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTarget, setActiveTarget] = useState<string>('sec-0');

  useEffect(() => {
    const targets = [
      'sec-0',
      'sec-1',
      'sec-1-1',
      'sec-1-2',
      'sec-1-3',
      'sec-2',
      'sec-2-1',
      'sec-3',
      'sec-3-1',
      'sec-3-2',
      'sec-4',
      'sec-5',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTarget(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    );

    targets.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 900) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        className="sidebar-toggle"
        id="sidebarToggle"
        aria-label="メニュー"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-brand">CTAL-TAE v2.0</div>
        <div className="sidebar-sub">Chapter 2：テスト自動化の準備</div>
        <nav>
          <ul>
            {TOC_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-target={item.dataTarget}
                  className={activeTarget === item.dataTarget ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  {item.text}
                </a>
                {item.children && (
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a
                          href={child.href}
                          data-target={child.dataTarget}
                          className={activeTarget === child.dataTarget ? 'active' : ''}
                          onClick={handleLinkClick}
                        >
                          {child.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
