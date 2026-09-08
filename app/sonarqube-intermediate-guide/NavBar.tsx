'use client';

import React, { useEffect, useState } from 'react';

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

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('overview');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topEntry = visible[0];
          if (topEntry) {
            setActiveId(topEntry.target.id);
          }
        }
      },
      {
        rootMargin: '-15% 0px -70% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className="menu-toggle"
        id="menuToggle"
        aria-controls="sidebar"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        onClick={toggleSidebar}
      >
        <i className={isOpen ? 'ti ti-x' : 'ti ti-menu-2'}></i>
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-brand">
          <div className="logo-row">
            <i className="ti ti-shield-check-filled"></i>
            <h1>SonarQube 完全解説</h1>
          </div>
          <p>中級者〜上級者向けステップバイステップガイド</p>
          <div className="sidebar-badges">
            <span className="badge accent">Server 2026.3</span>
            <span className="badge">2026.1 LTA</span>
          </div>
        </div>
        <nav className="toc" id="toc">
          {TOC_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? 'active' : ''}
              aria-current={activeId === item.id ? 'location' : undefined}
              onClick={closeSidebar}
            >
              <i className={`ti ${item.icon}`}></i>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
