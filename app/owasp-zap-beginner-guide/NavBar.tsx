'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
  icon: string;
}

export interface TocGroup {
  title: string;
  items: TocItem[];
}

export const TOC_GROUPS: TocGroup[] = [
  {
    title: '導入',
    items: [
      { id: 'intro', label: 'ZAP とは何か', icon: 'ti-info-circle' },
      { id: 'disclaimer', label: '免責事項・法的注意', icon: 'ti-alert-triangle' },
      { id: 'features', label: '主な特徴', icon: 'ti-checklist' },
      { id: 'install', label: 'インストール方法', icon: 'ti-download' },
    ],
  },
  {
    title: '基本操作',
    items: [
      { id: 'architecture', label: 'アーキテクチャと基本用語', icon: 'ti-sitemap' },
      { id: 'proxy-setup', label: '起動とプロキシ設定', icon: 'ti-plug' },
      { id: 'quickstart', label: 'Quick Start', icon: 'ti-bolt' },
      { id: 'scsm', label: 'Context・Scope・Mode', icon: 'ti-target-arrow' },
      { id: 'manual-explore', label: '手動探索と MITM', icon: 'ti-hand-click' },
    ],
  },
  {
    title: 'スキャン機能',
    items: [
      { id: 'spider', label: 'Spider（クローラー）', icon: 'ti-network' },
      { id: 'passive-scan', label: 'Passive Scan', icon: 'ti-eye' },
      { id: 'active-scan', label: 'Active Scan', icon: 'ti-radar-2' },
      { id: 'pentest-flow', label: 'ペネトレーションテストの流れ', icon: 'ti-route' },
      { id: 'alerts', label: 'Alerts の見方', icon: 'ti-bell-ringing' },
    ],
  },
  {
    title: '応用設定',
    items: [
      { id: 'authentication', label: 'Authentication', icon: 'ti-lock' },
      { id: 'scan-policy', label: 'Scan Policy', icon: 'ti-adjustments' },
      { id: 'hud', label: 'HUD', icon: 'ti-device-desktop' },
      { id: 'reports', label: 'レポート生成', icon: 'ti-report' },
    ],
  },
  {
    title: '自動化',
    items: [
      { id: 'api', label: 'ZAP API', icon: 'ti-terminal-2' },
      { id: 'automation-framework', label: 'Automation Framework', icon: 'ti-robot' },
      { id: 'docker-cicd', label: 'Docker と CI/CD', icon: 'ti-brand-docker' },
      { id: 'scripting', label: 'スクリプティングと拡張', icon: 'ti-code' },
    ],
  },
  {
    title: 'まとめ',
    items: [
      { id: 'troubleshooting', label: 'トラブルシューティング', icon: 'ti-bug' },
      { id: 'best-practices', label: 'ベストプラクティス', icon: 'ti-star' },
      { id: 'resources', label: '学習リソース・参考 URL', icon: 'ti-books' },
    ],
  },
];

export const TOC_ITEMS: TocItem[] = TOC_GROUPS.flatMap((g) => g.items);

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('intro');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    // 閉じる前にトグルへフォーカスを戻す（閉じたサイドバーは visibility: hidden で
    // フォーカス不可になるため、閉じた後ではフォーカスが body へ飛ぶ）
    if (sidebarOpen) {
      toggleRef.current?.focus({ preventScroll: true });
    }
    setSidebarOpen(false);
  };

  return (
    <>
      <button
        ref={toggleRef}
        className="sidebar-toggle"
        id="sidebarToggle"
        aria-label={sidebarOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={sidebarOpen}
        aria-controls="sidebar"
        onClick={toggleSidebar}
      >
        <i className="ti ti-menu-2"></i>
      </button>

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-header">
          <div className="brand">
            <i className="ti ti-shield-bolt"></i>OWASP ZAP ガイド
          </div>
          <div className="sub">初学者向けステップバイステップ解説</div>
        </div>

        {TOC_GROUPS.map((group) => (
          <React.Fragment key={group.title}>
            <div className="nav-group-title">{group.title}</div>
            <ul className="nav-list">
              {group.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={activeId === item.id ? 'active' : ''}
                    onClick={closeSidebar}
                  >
                    <i className={`ti ${item.icon}`}></i>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </aside>
    </>
  );
}
