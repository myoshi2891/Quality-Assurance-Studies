'use client';

import React, { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  num: string;
  label: string;
}

interface NavGroup {
  groupLabel: string;
  items: NavItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    groupLabel: '基礎編',
    items: [
      { id: 'sec-1', num: '1', label: '1. Seleniumとは何か' },
      { id: 'sec-2', num: '2', label: '2. アーキテクチャ' },
      { id: 'sec-3', num: '3', label: '3. 環境構築' },
      { id: 'sec-4', num: '4', label: '4. はじめてのスクリプト' },
    ],
  },
  {
    groupLabel: '要素操作編',
    items: [
      { id: 'sec-5', num: '5', label: '5. ロケーター戦略' },
      { id: 'sec-6', num: '6', label: '6. 待機戦略' },
      { id: 'sec-7', num: '7', label: '7. ブラウザ操作' },
      { id: 'sec-8', num: '8', label: '8. Actions API' },
    ],
  },
  {
    groupLabel: '実践・設計編',
    items: [
      { id: 'sec-9', num: '9', label: '9. Selenium Manager' },
      { id: 'sec-10', num: '10', label: '10. Page Object Model' },
      { id: 'sec-11', num: '11', label: '11. Selenium Grid' },
      { id: 'sec-12', num: '12', label: '12. Selenium IDE' },
    ],
  },
  {
    groupLabel: 'まとめ編',
    items: [
      { id: 'sec-13', num: '13', label: '13. ベストプラクティス' },
      { id: 'sec-14', num: '14', label: '14. トラブルシューティング' },
      { id: 'sec-15', num: '15', label: '15. まとめ' },
      { id: 'sec-16', num: '16', label: '16. 参考文献一覧' },
    ],
  },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('sec-1');

  useEffect(() => {
    const sectionIds = NAV_GROUPS.flatMap((g) => g.items.map((i) => i.id));

    // IntersectionObserver は交差状態が「変化した」要素のみを通知するため、
    // 通知バッチ内だけで比較すると、既に大きく見えている節が候補から漏れる。
    // 全観測対象の交差率を保持し、常に全体から最大の節を選ぶ。
    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ratios.set(entry.target.id, entry.intersectionRatio);
          } else {
            ratios.delete(entry.target.id);
          }
        }

        // 文書順に走査し、同率の場合は先に現れる節を優先する（決定論的な選択）。
        let bestId = '';
        let bestRatio = -1;
        for (const id of sectionIds) {
          const ratio = ratios.get(id);
          if (ratio !== undefined && ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestId) {
          setActiveId(bestId);
        }
      },
      {
        rootMargin: '-10% 0px -75% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sidebar" aria-label="Selenium 完全ガイド 目次">
      <div className="sidebar-brand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M9 15a3 3 0 0 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M9 9a3 3 0 0 1 6 0a3 3 0 0 1 -6 0" />
        </svg>
        <div>
          <span>Selenium 完全ガイド</span>
          <small>初心者向けステップバイステップ</small>
        </div>
      </div>

      {NAV_GROUPS.map((group) => (
        <React.Fragment key={group.groupLabel}>
          <div className="nav-group-label">{group.groupLabel}</div>
          <ul className="sidebar-list" aria-label={group.groupLabel}>
            {group.items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={isActive ? 'active' : ''}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </React.Fragment>
      ))}
    </nav>
  );
}
