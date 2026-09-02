'use client';

import React, { useEffect, useState } from 'react';

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

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('sec01');

  useEffect(() => {
    const sectionIds = SECTIONS.map((sec) => sec.id);

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
