'use client';

import React, { useEffect, useRef, useState } from 'react';

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
  // 目次から選んだ要素。親 section の交差通知でこの選択を上書きしないために保持する
  const pendingTargetRef = useRef<HTMLElement | null>(null);

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

    // IntersectionObserver 未対応環境では追従を諦め、初期アクティブ状態のまま描画する
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const pending = pendingTargetRef.current;
          // 選んだ子見出しを内包する親 section の通知は無視し、それ以外の節に移ったら通常の追従へ戻す
          if (pending && entry.target !== pending && entry.target.contains(pending)) return;
          pendingTargetRef.current = null;
          setActiveTarget(entry.target.id);
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

  // 選んだ項目をアクティブ表示に反映する。モバイルでは閉じたドロワー内（非表示）のリンクにフォーカスを残さず、リンク先へ移す
  const handleLinkClick = (href: string) => {
    const id = href.slice(1);
    const target = document.getElementById(id);
    setActiveTarget(id);
    pendingTargetRef.current = target;
    if (typeof window === 'undefined' || window.innerWidth > 900) return;
    setIsOpen(false);
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    // スクロールはアンカー本来の遷移に任せる
    target.focus({ preventScroll: true });
  };

  return (
    <>
      <button
        type="button"
        className="sidebar-toggle"
        id="sidebarToggle"
        aria-label="メニュー"
        aria-expanded={isOpen}
        aria-controls="sidebar"
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
                  onClick={() => handleLinkClick(item.href)}
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
                          onClick={() => handleLinkClick(child.href)}
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
