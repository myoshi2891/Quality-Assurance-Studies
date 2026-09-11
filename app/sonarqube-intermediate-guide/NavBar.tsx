'use client';

import React, { useEffect, useRef, useState } from 'react';

import { useScrollSpy } from '../../lib/useScrollSpy';

export interface TocItem {
  id: string;
  icon: string;
  label: string;
}

export const TOC_ITEMS: readonly TocItem[] = [
  { id: 'overview', icon: 'ti-info-circle', label: '0. SonarQubeとは何か' },
  { id: 'ecosystem', icon: 'ti-topology-star-3', label: '1. エコシステム全体像' },
  { id: 'architecture', icon: 'ti-server-2', label: '2. アーキテクチャ徹底解説' },
  { id: 'editions', icon: 'ti-stack-2', label: '3. エディション比較' },
  { id: 'quickstart', icon: 'ti-rocket', label: '4. クイックスタート' },
  { id: 'scanners', icon: 'ti-scan', label: '5. スキャナーの選択' },
  { id: 'quality-model', icon: 'ti-brain', label: '6. 品質モデルを理解する' },
  { id: 'issue-types', icon: 'ti-bug', label: '7. Issueの分類' },
  { id: 'quality-profiles', icon: 'ti-list-check', label: '8. Quality Profiles' },
  { id: 'security', icon: 'ti-shield-lock', label: '9. セキュリティ分析' },
  { id: 'technical-debt', icon: 'ti-coin', label: '10. 技術的負債とメトリクス' },
  { id: 'clean-as-you-code', icon: 'ti-sparkles', label: '11. Clean as You Code' },
  { id: 'quality-gates', icon: 'ti-gauge', label: '12. Quality Gates' },
  { id: 'branch-pr', icon: 'ti-git-pull-request', label: '13. ブランチ/PR分析' },
  { id: 'cicd', icon: 'ti-brand-github', label: '14. CI/CD統合の実践' },
  { id: 'ide', icon: 'ti-code', label: '15. IDE統合' },
  { id: 'ai-agents', icon: 'ti-robot', label: '16. AIエージェント時代' },
  { id: 'enterprise', icon: 'ti-building-skyscraper', label: '17. エンタープライズ機能' },
  { id: 'best-practices', icon: 'ti-checklist', label: '18. ベストプラクティス' },
  { id: 'troubleshooting', icon: 'ti-tool', label: '19. トラブルシューティング' },
  { id: 'summary', icon: 'ti-flag-check', label: '20. まとめ' },
  { id: 'references', icon: 'ti-books', label: '21. 参考文献一覧' },
];

// 読み取り帯・節 ID はモジュールスコープに置き、useScrollSpy の依存参照を安定させる。
const SECTION_IDS: readonly string[] = TOC_ITEMS.map((item) => item.id);
const SCROLL_SPY_BAND = { top: 0.15, bottom: 0.3 } as const;

export default function NavBar() {
  const activeId = useScrollSpy(SECTION_IDS, SCROLL_SPY_BAND);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  // デスクトップ幅（CSS の 960px ブレークポイント超）へ戻したら、
  // モバイル用サイドバーの開閉状態をリセットしてレイアウトと同期させる。
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
  const closeSidebar = () => {
    // サイドバー内にフォーカスが残ったまま閉じると、非表示要素上にフォーカスが
    // 取り残される。閉じる前に判定し、トグルボタンへフォーカスを戻す。
    const focusWasInside = sidebarRef.current?.contains(document.activeElement) ?? false;
    setIsOpen(false);
    if (focusWasInside) {
      toggleRef.current?.focus();
    }
  };

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        id="menuToggle"
        aria-controls="sidebar"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        onClick={toggleSidebar}
      >
        <i className={isOpen ? 'ti ti-x' : 'ti ti-menu-2'} aria-hidden="true"></i>
      </button>

      <aside ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-brand">
          <div className="logo-row">
            <i className="ti ti-shield-check-filled" aria-hidden="true"></i>
            <h1>SonarQube 完全解説</h1>
          </div>
          <p>中級者〜上級者向けステップバイステップガイド</p>
          <div className="sidebar-badges">
            <span className="badge accent">Server 2026.4</span>
            <span className="badge">2026.1 LTA</span>
          </div>
        </div>
        <nav className="toc" id="toc" aria-label="ページ内目次">
          {TOC_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? 'active' : ''}
              aria-current={activeId === item.id ? 'location' : undefined}
              onClick={closeSidebar}
            >
              <i className={`ti ${item.icon}`} aria-hidden="true"></i>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
