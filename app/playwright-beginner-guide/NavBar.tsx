'use client';

import React, { useEffect, useState } from 'react';

interface NavSection {
  id: string;
  index: string;
  title: string;
}

const SECTIONS: readonly NavSection[] = [
  { id: 'sec-01', index: '01', title: 'Playwrightとは何か' },
  { id: 'sec-02', index: '02', title: '全体アーキテクチャ' },
  { id: 'sec-03', index: '03', title: '環境構築とインストール' },
  { id: 'sec-04', index: '04', title: 'プロジェクト構成' },
  { id: 'sec-05', index: '05', title: 'はじめてのテスト' },
  { id: 'sec-06', index: '06', title: 'ロケーターを極める' },
  { id: 'sec-07', index: '07', title: 'アクションの書き方' },
  { id: 'sec-08', index: '08', title: 'アサーションの書き方' },
  { id: 'sec-09', index: '09', title: '実行とデバッグ' },
  { id: 'sec-10', index: '10', title: 'コード生成 Codegen' },
  { id: 'sec-11', index: '11', title: 'トレースビューアー' },
  { id: 'sec-12', index: '12', title: 'フィクスチャ' },
  { id: 'sec-13', index: '13', title: 'ページオブジェクトモデル' },
  { id: 'sec-14', index: '14', title: 'APIモックとネットワーク' },
  { id: 'sec-15', index: '15', title: 'CI/CD統合' },
  { id: 'sec-16', index: '16', title: 'ベストプラクティス' },
  { id: 'sec-17', index: '17', title: '学習ロードマップ' },
  { id: 'sec-18', index: '18', title: '参考文献一覧' },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('sec-01');

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
        rootMargin: '-15% 0px -70% 0px',
        threshold: 0,
      }
    );

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="sidebar" aria-label="目次">
      <p className="sidebar-title">目次 / Contents</p>
      <ul className="toc" id="toc">
        {SECTIONS.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'location' : undefined}
              >
                <span className="num">{sec.index}</span>
                {sec.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
