'use client';

import React, { useRef, useState } from 'react';
import { useScrollSpy, type ScrollSpyBand } from '../../lib/useScrollSpy';

export interface TocGroup {
  id: string;
  label: string;
}

export interface TocItem {
  id: string;
  label: string;
  groupId: string;
  /** ステップ見出し用の番号バッジ（指定時はアイコンより優先） */
  badge?: string;
  /** Tabler Icons のクラス名（`ti-` 接頭辞付き） */
  icon?: string;
}

export const TOC_GROUPS: TocGroup[] = [
  { id: 'intro-group', label: 'はじめに' },
  { id: 'steps-group', label: 'ステップ' },
  { id: 'applied-group', label: '応用・まとめ' },
];

export const TOC_ITEMS: TocItem[] = [
  { id: 'intro', label: 'この記事について', groupId: 'intro-group', icon: 'ti-book-2' },
  { id: 'book-info', label: '書籍情報', groupId: 'intro-group', icon: 'ti-book' },
  { id: 'roadmap', label: '学習ロードマップ', groupId: 'intro-group', icon: 'ti-route' },

  { id: 'step0', label: 'なぜ経営課題なのか', groupId: 'steps-group', badge: '0' },
  { id: 'step1', label: 'データファクトリー', groupId: 'steps-group', badge: '1' },
  { id: 'step2', label: '監視の4本柱', groupId: 'steps-group', badge: '2' },
  { id: 'step3', label: 'ROIで判断する', groupId: 'steps-group', badge: '3' },
  { id: 'step4', label: 'MLモデルの作り方', groupId: 'steps-group', badge: '4' },
  { id: 'step5', label: '実データで機能させる', groupId: 'steps-group', badge: '5' },
  { id: 'step6', label: '通知設計とアラート疲れ', groupId: 'steps-group', badge: '6' },
  { id: 'step7', label: 'スタック全体と統合', groupId: 'steps-group', badge: '7' },
  { id: 'step8', label: '本番展開と定着', groupId: 'steps-group', badge: '8' },

  { id: 'other-cases', label: '他社事例に学ぶ', groupId: 'applied-group', icon: 'ti-world' },
  { id: 'oss', label: 'OSSエコシステム', groupId: 'applied-group', icon: 'ti-git-branch' },
  { id: 'checklist', label: '実践チェックリスト', groupId: 'applied-group', icon: 'ti-checklist' },
  { id: 'summary', label: 'まとめ', groupId: 'applied-group', icon: 'ti-flag' },
  { id: 'references', label: '参考文献・出典', groupId: 'applied-group', icon: 'ti-link' },
];

/** useScrollSpy へ渡す参照を安定させるためモジュールスコープで定義する */
const SECTION_IDS: readonly string[] = TOC_ITEMS.map((item) => item.id);
const SCROLL_SPY_BAND: ScrollSpyBand = { top: 0.1, bottom: 0.3 };

export default function NavBar() {
  const activeId = useScrollSpy(SECTION_IDS, SCROLL_SPY_BAND);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    if (!isOpen) return;
    toggleRef.current?.focus({ preventScroll: true });
    closeMenu();
  };

  return (
    <>
      <div className="mobile-bar">
        <div className="brand">
          <i className="ti ti-database" aria-hidden="true"></i>データ品質モニタリング自動化ガイド
        </div>
        <button
          ref={toggleRef}
          type="button"
          className="mobile-toggle"
          id="mobileToggle"
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
          aria-controls="sidebar"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <i className="ti ti-menu-2" aria-hidden="true"></i>
        </button>
      </div>
      <div className={`scrim${isOpen ? ' show' : ''}`} id="scrim" onClick={closeMenu} />

      <nav className={`sidebar${isOpen ? ' open' : ''}`} id="sidebar" aria-label="目次">
        <div className="brand">
          <i className="ti ti-database" aria-hidden="true"></i>データ品質モニタリング
        </div>

        {TOC_GROUPS.map((group) => (
          <React.Fragment key={group.id}>
            <div className="nav-group-label">{group.label}</div>
            {TOC_ITEMS.filter((item) => item.groupId === group.id).map((item) => (
              <a
                key={item.id}
                className={`nav-a${activeId === item.id ? ' active' : ''}`}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'location' : undefined}
                onClick={handleLinkClick}
              >
                {item.badge !== undefined ? (
                  <span className="n-num">{item.badge}</span>
                ) : (
                  <i className={`ti ${item.icon ?? ''}`} aria-hidden="true"></i>
                )}
                {item.label}
              </a>
            ))}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
