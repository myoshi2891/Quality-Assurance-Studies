'use client';

import React, { useEffect, useState } from 'react';

import { useScrollSpy } from '../../lib/useScrollSpy';

interface NavItem {
  id: string;
  num: string;
  title: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const NAV_GROUPS: readonly NavGroup[] = [
  {
    label: '基礎編',
    items: [
      { id: 'sec-1', num: '01', title: 'アーキテクチャ' },
      { id: 'sec-2', num: '02', title: 'セットアップ' },
      { id: 'sec-3', num: '03', title: '基本概念' },
      { id: 'sec-4', num: '04', title: 'Locators' },
      { id: 'sec-5', num: '05', title: 'Auto-waiting' },
      { id: 'sec-6', num: '06', title: 'Assertions' },
    ],
  },
  {
    label: '設計・構造編',
    items: [
      { id: 'sec-7', num: '07', title: 'Fixtures' },
      { id: 'sec-8', num: '08', title: 'Page Object Model' },
      { id: 'sec-9', num: '09', title: '並列実行' },
      { id: 'sec-10', num: '10', title: 'Sharding' },
      { id: 'sec-11', num: '11', title: 'リトライ対策' },
    ],
  },
  {
    label: 'デバッグ・応用編',
    items: [
      { id: 'sec-12', num: '12', title: 'Trace Viewer' },
      { id: 'sec-13', num: '13', title: 'ネットワークモック' },
      { id: 'sec-14', num: '14', title: '認証状態の再利用' },
      { id: 'sec-15', num: '15', title: 'Visual Regression' },
      { id: 'sec-16', num: '16', title: 'API Testing' },
      { id: 'sec-17', num: '17', title: 'UI Mode / VS Code' },
    ],
  },
  {
    label: '運用編',
    items: [
      { id: 'sec-18', num: '18', title: 'CI/CD統合' },
      { id: 'sec-19', num: '19', title: 'Docker活用' },
      { id: 'sec-20', num: '20', title: 'ベストプラクティス' },
      { id: 'sec-21', num: '21', title: '参考文献一覧' },
    ],
  },
];

// 読み取り帯・節 ID はモジュールスコープに置き、useScrollSpy の依存参照を安定させる。
const SECTION_IDS: readonly string[] = NAV_GROUPS.flatMap((group) =>
  group.items.map((item) => item.id)
);
const SCROLL_SPY_BAND = { top: 0.15, bottom: 0.3 } as const;

export default function NavBar() {
  const activeId = useScrollSpy(SECTION_IDS, SCROLL_SPY_BAND);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // デスクトップ幅へ戻った際にモバイル用の開閉状態をリセットする
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className="sidebar-toggle"
        id="sidebarToggle"
        aria-controls="sidebar"
        aria-expanded={isOpen}
        aria-label={isOpen ? '目次を閉じる' : '目次を開く'}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar" aria-label="ページ内目次">
        <div className="brand">
          <div className="brand-mark">PW</div>
          <div className="brand-text">Playwright Guide</div>
        </div>
        <div className="brand-sub">中級者〜上級者向け</div>

        {NAV_GROUPS.map((group) => (
          <div key={group.label}>
            <div className="nav-group-label">{group.label}</div>
            <ul className="toc">
              {group.items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={isActive ? 'active' : ''}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={closeSidebar}
                    >
                      <span className="num">{item.num}</span>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
}
