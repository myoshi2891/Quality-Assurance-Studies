'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  num: string;
  label: string;
}

export const TOC_ITEMS: TocItem[] = [
  { id: 'intro', num: '1', label: 'はじめに' },
  { id: 'overview', num: '2', label: '本書の全体マップ' },
  { id: 'step1', num: '3', label: 'テスターの役割' },
  { id: 'step2', num: '4', label: 'テスターのように考える' },
  { id: 'step3', num: '5', label: 'テスト技法を使い分ける' },
  { id: 'step4', num: '6', label: 'バグアドボカシー' },
  { id: 'step5', num: '7', label: 'テスト自動化' },
  { id: 'step6', num: '8', label: 'テストの文書化' },
  { id: 'step7', num: '9', label: 'プログラマーとの協働' },
  { id: 'step8', num: '10', label: 'プロジェクト管理' },
  { id: 'step9', num: '11', label: 'チーム管理' },
  { id: 'step10', num: '12', label: 'キャリアを築く' },
  { id: 'step11', num: '13', label: 'テスト戦略の立案' },
  { id: 'appendix', num: '14', label: '7つの原則' },
  { id: 'modern', num: '15', label: 'AI時代のテスト' },
  { id: 'summary', num: '16', label: 'チェックリスト' },
  { id: 'references', num: '17', label: '参考文献' },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('intro');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.prose section[id]'));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    // 閉じる前にトグルへフォーカスを戻す（閉じたサイドバーは visibility: hidden で
    // フォーカス不可になるため、閉じた後ではフォーカスが body へ飛ぶ）
    if (isOpen) {
      toggleRef.current?.focus({ preventScroll: true });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className="mobile-bar">
        <button
          ref={toggleRef}
          id="mobileToggle"
          type="button"
          aria-label={isOpen ? '目次を閉じる' : '目次を開く'}
          aria-expanded={isOpen}
          aria-controls="sidebar"
          onClick={handleToggle}
        >
          <i className="ti ti-menu-2"></i> 目次
        </button>
        <span className="brand-sm">Lessons Learned in Software Testing</span>
      </header>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <span className="brand">
          <i className="ti ti-headlights"></i> Testing Lessons
        </span>
        <span className="brand-sub">初学者向けステップバイステップガイド</span>
        <nav aria-label="目次">
          <ul>
            {TOC_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  <span className="n-num">{item.num}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
