'use client';

import React, { useEffect, useState } from 'react';

interface NavSection {
  id: string;
  index: string;
  title: string;
}

const SECTIONS: readonly NavSection[] = [
  { id: 'sec-overview', index: '01', title: 'GitHub Actionsとは' },
  { id: 'sec-concepts', index: '02', title: '基本概念' },
  { id: 'sec-quickstart', index: '03', title: 'クイックスタート' },
  { id: 'sec-syntax', index: '04', title: '基本文法' },
  { id: 'sec-events', index: '05', title: 'トリガーイベント' },
  { id: 'sec-runners', index: '06', title: 'ジョブとランナー' },
  { id: 'sec-conditions', index: '07', title: '依存関係と条件分岐' },
  { id: 'sec-matrix', index: '08', title: 'マトリックス戦略' },
  { id: 'sec-secrets', index: '09', title: 'シークレットと変数' },
  { id: 'sec-token', index: '10', title: 'GITHUB_TOKENと権限' },
  { id: 'sec-caching', index: '11', title: '依存関係キャッシュ' },
  { id: 'sec-artifacts', index: '12', title: 'アーティファクト' },
  { id: 'sec-reusable', index: '13', title: '再利用可能ワークフロー' },
  { id: 'sec-practical', index: '14', title: '実践: CI/CD構築' },
  { id: 'sec-security', index: '15', title: 'セキュリティ' },
  { id: 'sec-troubleshooting', index: '16', title: 'トラブルシューティング' },
  { id: 'sec-summary', index: '17', title: 'まとめ' },
  { id: 'sec-references', index: '18', title: '参考文献' },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('sec-overview');

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
        rootMargin: '-15% 0px -75% 0px',
        threshold: 0,
      }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="sidebar" aria-label="目次ナビゲーション">
      <div className="sidebar-brand">
        <span className="kicker">Documentation Guide</span>
        <h2>
          GitHub Actions
          <br />
          完全ガイド
        </h2>
      </div>
      <div className="sidebar-nav">
        {SECTIONS.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={isActive ? 'active' : ''}
              aria-current={isActive ? 'location' : undefined}
            >
              <span className="nav-index">{sec.index}</span>
              {sec.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
