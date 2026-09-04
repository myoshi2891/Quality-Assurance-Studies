'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useScrollSpy } from '../../lib/useScrollSpy';

interface MainNavItem {
  href: string;
  id: string;
  num: string;
  label: string;
  subs?: { href: string; id: string; label: string }[];
}

const NAV_ITEMS: readonly MainNavItem[] = [
  { href: '#sec1', id: 'sec1', num: '01', label: 'この本は何を解決するのか' },
  { href: '#sec2', id: 'sec2', num: '02', label: '書籍情報と著者' },
  { href: '#sec3', id: 'sec3', num: '03', label: '世界の開発者からの評価' },
  { href: '#sec4', id: 'sec4', num: '04', label: '本書全体のマップ' },
  {
    href: '#sec5',
    id: 'sec5',
    num: '05',
    label: 'Part 1: 導入編',
    subs: [
      { href: '#sec5-1', id: 'sec5-1', label: '5.1 設計とセキュリティ' },
      { href: '#sec5-2', id: 'sec5-2', label: '5.2 アンチ・ハムレット' },
    ],
  },
  {
    href: '#sec6',
    id: 'sec6',
    num: '06',
    label: 'Part 2: 基礎編',
    subs: [
      { href: '#sec6-1', id: 'sec6-1', label: '6.1 DDDの中心概念' },
      { href: '#sec6-2', id: 'sec6-2', label: '6.2 セキュアなコード構造' },
      { href: '#sec6-3', id: 'sec6-3', label: '6.3 ドメイン・プリミティブ' },
      { href: '#sec6-4', id: 'sec6-4', label: '6.4 状態の整合性' },
      { href: '#sec6-5', id: 'sec6-5', label: '6.5 パイプライン活用' },
      { href: '#sec6-6', id: 'sec6-6', label: '6.6 安全な障害処理' },
      { href: '#sec6-7', id: 'sec6-7', label: '6.7 クラウド思考' },
      { href: '#sec6-8', id: 'sec6-8', label: '6.8 幕間：保険' },
    ],
  },
  {
    href: '#sec7',
    id: 'sec7',
    num: '07',
    label: 'Part 3: 応用編',
    subs: [
      { href: '#sec7-1', id: 'sec7-1', label: '7.1 レガシーコード' },
      { href: '#sec7-2', id: 'sec7-2', label: '7.2 マイクロサービス' },
      { href: '#sec7-3', id: 'sec7-3', label: '7.3 まとめ' },
    ],
  },
  { href: '#sec8', id: 'sec8', num: '08', label: '実践ロードマップ' },
  { href: '#sec9', id: 'sec9', num: '09', label: '本書の限界' },
  { href: '#sec10', id: 'sec10', num: '10', label: 'さらに学ぶリソース' },
  { href: '#sec11', id: 'sec11', num: '11', label: '参考文献・出典' },
];

const ALL_SECTION_IDS: readonly string[] = [
  'sec1',
  'sec2',
  'sec3',
  'sec4',
  'sec5',
  'sec5-1',
  'sec5-2',
  'sec6',
  'sec6-1',
  'sec6-2',
  'sec6-3',
  'sec6-4',
  'sec6-5',
  'sec6-6',
  'sec6-7',
  'sec6-8',
  'sec7',
  'sec7-1',
  'sec7-2',
  'sec7-3',
  'sec8',
  'sec9',
  'sec10',
  'sec11',
];

const SCROLL_SPY_BAND = { top: 0.15, bottom: 0.35 } as const;

export default function NavBar() {
  const activeId = useScrollSpy(ALL_SECTION_IDS, SCROLL_SPY_BAND);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const toggleToc = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeToc = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const totalHeight = h.scrollHeight - h.clientHeight;
      if (totalHeight > 0) {
        const scrolled = (h.scrollTop / totalHeight) * 100;
        setScrollProgress(scrolled);
      }
      setShowTopBtn(h.scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className="progress"
        id="progressBar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav className="toc" aria-label="目次">
        <button
          type="button"
          className="toc-toggle-btn"
          onClick={toggleToc}
          aria-expanded={isOpen}
          aria-controls="tocPanel"
          aria-label={isOpen ? '目次を閉じる' : '目次を開く'}
        >
          <span>目次を開く</span>
          <span className={`chev ${isOpen ? 'open' : ''}`} aria-hidden="true">
            ▾
          </span>
        </button>

        <div className={`toc-panel ${isOpen ? 'open' : ''}`} id="tocPanel">
          <p className="toc-kicker">目次 / Index</p>
          {NAV_ITEMS.map((item) => {
            const isMainActive =
              activeId === item.id ||
              item.subs?.some((sub) => sub.id === activeId);

            return (
              <React.Fragment key={item.id}>
                <a
                  href={item.href}
                  className={isMainActive ? 'active' : ''}
                  onClick={closeToc}
                  aria-current={activeId === item.id ? 'location' : undefined}
                >
                  <span className="toc-num">{item.num}</span>
                  {item.label}
                </a>

                {item.subs && (
                  <div className="toc-sub">
                    {item.subs.map((sub) => {
                      const isSubActive = activeId === sub.id;
                      return (
                        <a
                          key={sub.id}
                          href={sub.href}
                          className={isSubActive ? 'active' : ''}
                          onClick={closeToc}
                          aria-current={isSubActive ? 'location' : undefined}
                        >
                          {sub.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>

      <a
        href="#top"
        className={`top-btn ${showTopBtn ? 'show' : ''}`}
        id="topBtn"
        aria-label="ページの先頭へ戻る"
      >
        ↑
      </a>
    </>
  );
}
