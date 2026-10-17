'use client';

import React, { useEffect, useState } from 'react';

export interface TocItem {
  href: string;
  text: string;
  sub: boolean;
}

export const TOC_ITEMS: readonly TocItem[] = [
  { href: '#s-overview', text: '1. 第4章の全体像', sub: false },
  { href: '#s-keywords', text: '2. キーワードと学習目標', sub: false },
  { href: '#s-41', text: '3. 4.1 テスト自動化の開発', sub: false },
  { href: '#s-41-why', text: 'なぜパイロットから始めるか', sub: true },
  { href: '#s-41-eval', text: 'パイロットで評価する5項目', sub: true },
  { href: '#s-41-ops', text: 'パイロット実行時の運用', sub: true },
  { href: '#s-41-nontech', text: '非技術面の評価観点', sub: true },
  { href: '#s-41-bp', text: 'ベストプラクティス', sub: true },
  { href: '#s-42', text: '4. 4.2 テスト自動化開発に伴うリスク', sub: false },
  { href: '#s-42-overview', text: 'リスクの全体像', sub: true },
  { href: '#s-42-packaging', text: 'パッケージング', sub: true },
  { href: '#s-42-logging', text: 'ロギング', sub: true },
  { href: '#s-42-structuring', text: 'テスト構造化', sub: true },
  { href: '#s-42-updating', text: '更新', sub: true },
  { href: '#s-42-flow', text: 'リスク対応の流れ', sub: true },
  { href: '#s-42-bp', text: 'ベストプラクティス', sub: true },
  { href: '#s-43', text: '5. 4.3 保守性', sub: false },
  { href: '#s-43-factors', text: '保守性を左右する要因', sub: true },
  { href: '#s-43-clean', text: 'クリーンコード原則', sub: true },
  { href: '#s-43-naming', text: '命名規則の重要性', sub: true },
  { href: '#s-43-hardcode', text: 'ハードコーディングの回避', sub: true },
  { href: '#s-43-pattern', text: 'デザインパターンと静的解析', sub: true },
  { href: '#s-43-bp', text: 'ベストプラクティス', sub: true },
  { href: '#s-summary', text: '6. 章全体のまとめ', sub: false },
  { href: '#s-check', text: '7. 理解度セルフチェック', sub: false },
  { href: '#s-ref', text: '8. 出典・参考資料', sub: false },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(TOC_ITEMS[0]?.href ?? '');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => {
      const pos = window.scrollY + 140;
      let currentId: string | null = null;
      for (const item of TOC_ITEMS) {
        const id = item.href.slice(1);
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) {
          currentId = id;
        }
      }
      if (currentId) {
        setActiveHref(`#${currentId}`);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveHref(href);
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="menu-toggle"
        id="menuToggle"
        aria-label={isOpen ? '目次を閉じる' : '目次を開く'}
        aria-expanded={isOpen}
        aria-controls="sidebar"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="ti ti-menu-2"></i> 目次
      </button>

      <div
        className={`scrim ${isOpen ? 'show' : ''}`}
        id="scrim"
        onClick={() => setIsOpen(false)}
      ></div>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-brand">CTAL-TAE v2.0</div>
        <div className="sidebar-sub">第4章　Implementing Test Automation</div>
        <ul className="toc">
          {TOC_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`${item.sub ? 'toc-sub' : ''} ${activeHref === item.href ? 'active' : ''}`.trim()}
                onClick={() => handleLinkClick(item.href)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
