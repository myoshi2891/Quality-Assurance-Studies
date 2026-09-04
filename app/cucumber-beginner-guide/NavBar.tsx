'use client';

import React from 'react';

import { useScrollSpy } from '../../lib/useScrollSpy';

interface NavSection {
  id: string;
  index: string;
  title: string;
}

const SECTIONS: readonly NavSection[] = [
  { id: 'sec01', index: '01', title: 'Cucumberとは何か' },
  { id: 'sec02', index: '02', title: 'BDDを理解する' },
  { id: 'sec03', index: '03', title: 'Gherkin構文' },
  { id: 'sec04', index: '04', title: 'ステップ定義' },
  { id: 'sec05', index: '05', title: 'Cucumber Expressions' },
  { id: 'sec06', index: '06', title: 'Hooks(フック)' },
  { id: 'sec07', index: '07', title: 'Tags(タグ)' },
  { id: 'sec08', index: '08', title: 'ステップの実行結果' },
  { id: 'sec09', index: '09', title: 'インストール' },
  { id: 'sec10', index: '10', title: '実践: 10分チュートリアル' },
  { id: 'sec11', index: '11', title: 'レポーティング' },
  { id: 'sec12', index: '12', title: 'ベストプラクティス' },
  { id: 'sec13', index: '13', title: 'CI/CD連携' },
  { id: 'sec14', index: '14', title: 'エディタ・IDE' },
  { id: 'sec15', index: '15', title: 'まとめ' },
  { id: 'sec16', index: '16', title: '参考文献一覧' },
];

// 読み取り帯・節 ID はモジュールスコープに置き、useScrollSpy の依存参照を安定させる。
const SECTION_IDS: readonly string[] = SECTIONS.map((sec) => sec.id);
const SCROLL_SPY_BAND = { top: 0.15, bottom: 0.3 } as const;

export default function NavBar() {
  const activeId = useScrollSpy(SECTION_IDS, SCROLL_SPY_BAND);

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="mark" aria-hidden="true">🥒</span>
        <span className="name">Cucumber 入門ガイド</span>
      </div>
      <p className="sidebar-sub">BDDではじめる自動テスト</p>
      <nav id="toc" aria-label="目次">
        {SECTIONS.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={isActive ? 'active' : ''}
              aria-current={isActive ? 'location' : undefined}
            >
              <span className="num">{sec.index}</span>
              {sec.title}
            </a>
          );
        })}
      </nav>
      <div className="sidebar-footer">
        情報源:{' '}
        <a
          href="https://cucumber.io/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          cucumber.io/docs
        </a>
        <br />
        取得時点: 2026年7月
      </div>
    </aside>
  );
}
