'use client';

import React, { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  label: string;
}

const TOC_ITEMS: readonly TocItem[] = [
  { id: 'sec-1', label: '1. はじめに' },
  { id: 'sec-2', label: '2. アーキテクチャ全体像' },
  { id: 'sec-3', label: '3. ワークフロー構文' },
  { id: 'sec-4', label: '4. トリガーイベント' },
  { id: 'sec-5', label: '5. マトリックス戦略' },
  { id: 'sec-6', label: '6. キャッシュとアーティファクト' },
  { id: 'sec-7', label: '7. 並行実行制御' },
  { id: 'sec-8', label: '8. 再利用可能なワークフロー' },
  { id: 'sec-9', label: '9. GITHUB_TOKEN' },
  { id: 'sec-10', label: '10. Secrets / Environments' },
  { id: 'sec-11', label: '11. OIDCキーレス認証' },
  { id: 'sec-12', label: '12. セキュリティ脅威と対策' },
  { id: 'sec-13', label: '13. SLSA / Attestations' },
  { id: 'sec-14', label: '14. モニタリング・デバッグ' },
  { id: 'sec-15', label: '15. コストと料金動向' },
  { id: 'sec-16', label: '16. 実践パイプライン例' },
  { id: 'sec-17', label: '17. チェックリスト' },
  { id: 'sec-18', label: '18. 参考資料' },
] as const;

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('sec-1');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      }
    );

    for (const item of TOC_ITEMS) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="目次ナビゲーションを開閉"
        aria-expanded={isOpen}
      >
        {isOpen ? '✕ 閉じる' : '☰ 目次'}
      </button>

      <nav
        className={`sidebar ${isOpen ? 'open' : ''}`}
        id="sidebar-nav"
        aria-label="目次ナビゲーション"
      >
        <div className="brand">
          <div className="brand-mark">GA</div>
          <div className="brand-text">
            GitHub Actions
            <span className="brand-sub">中級〜上級者向け完全ガイド</span>
          </div>
        </div>

        <ul className="toc">
          {TOC_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? 'active' : ''}
                aria-current={activeId === item.id ? 'true' : undefined}
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
