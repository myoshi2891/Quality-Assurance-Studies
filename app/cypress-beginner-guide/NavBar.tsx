'use client';

import React from 'react';

import { useScrollSpy } from '../../lib/useScrollSpy';

interface NavSection {
  id: string;
  index: string;
  title: string;
}

const SECTIONS: readonly NavSection[] = [
  { id: 'sec-1', index: '01', title: 'Cypressとは何か' },
  { id: 'sec-2', index: '02', title: 'なぜCypressが選ばれるのか' },
  { id: 'sec-3', index: '03', title: 'Cypress vs Selenium vs Playwright' },
  { id: 'sec-4', index: '04', title: 'インストール手順' },
  { id: 'sec-5', index: '05', title: 'プロジェクト構成を理解する' },
  { id: 'sec-6', index: '06', title: 'はじめてのテストを書く' },
  { id: 'sec-7', index: '07', title: 'テストの構造：describe・it・hooks' },
  { id: 'sec-8', index: '08', title: 'E2Eテスト vs コンポーネントテスト' },
  { id: 'sec-9', index: '09', title: 'セレクター戦略とベストプラクティス' },
  { id: 'sec-10', index: '10', title: 'コマンドラインの使い方' },
  { id: 'sec-11', index: '11', title: 'CI/CDへの統合' },
  { id: 'sec-12', index: '12', title: 'Cypress CloudとAI機能' },
  { id: 'sec-13', index: '13', title: 'トレードオフと制限事項' },
  { id: 'sec-14', index: '14', title: 'まとめと次のステップ' },
  { id: 'sec-15', index: '15', title: '参考文献・出典一覧' },
];

// 読み取り帯・節 ID はモジュールスコープに置き、useScrollSpy の依存参照を安定させる。
const SECTION_IDS: readonly string[] = SECTIONS.map((sec) => sec.id);
const SCROLL_SPY_BAND = { top: 0.15, bottom: 0.3 } as const;

export default function NavBar() {
  const activeId = useScrollSpy(SECTION_IDS, SCROLL_SPY_BAND);

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 3l6 0" />
          <path d="M10 9l4 0" />
          <path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6" />
        </svg>
        <span>Cypress入門ガイド</span>
      </div>
      <div className="sidebar-sub">
        初学者のためのステップバイステップ解説<br />2026年7月時点の最新情報に基づく
      </div>
      <nav aria-label="目次">
        <ul>
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
                  <span>{sec.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="sidebar-footer">
        情報源:{' '}
        <a
          href="https://docs.cypress.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs.cypress.io
        </a>
        <br />
        取得時点: 2026年7月
      </div>
    </aside>
  );
}
