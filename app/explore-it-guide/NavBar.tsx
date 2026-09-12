'use client';

import React, { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  num: string;
  label: string;
}

export const TOC_ITEMS: TocItem[] = [
  { id: 'overview', num: '01', label: 'この本はどんな本か' },
  { id: 'why', num: '02', label: 'なぜ探索的テストか' },
  { id: 'elements', num: '03', label: '本質的要素' },
  { id: 'roadmap', num: '04', label: '実践ロードマップ' },
  { id: 'step1', num: '05', label: 'Step1: チャーターを書く' },
  { id: 'step2', num: '06', label: 'Step2: セッション構造化' },
  { id: 'step3', num: '07', label: 'Step3: 観察力を鍛える' },
  { id: 'step4', num: '08', label: 'Step4: バリエーション発見' },
  { id: 'step5', num: '09', label: 'Step5: 結果を評価する' },
  { id: 'step6', num: '10', label: 'Step6: 次元を加える' },
  { id: 'step7', num: '11', label: 'Step7: コンテキスト適用' },
  { id: 'step8', num: '12', label: 'Step8: デブリーフィング' },
  { id: 'cheatsheet', num: '13', label: 'ヒューリスティック' },
  { id: 'ai2026', num: '14', label: '2026年とAI時代' },
  { id: 'checklist', num: '15', label: 'チェックリスト' },
  { id: 'references', num: '16', label: '出典URL一覧' },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('overview');

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

  return (
    <nav className="toc" aria-label="目次">
      <div className="brand">
        Field Guide<strong>Explore It!</strong>
      </div>
      <ol>
        {TOC_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? 'active' : ''}
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              {item.num} ｜ {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
