'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  num: string;
  label: string;
  group?: string;
}

export const TOC_ITEMS: TocItem[] = [
  { id: 'intro', num: '00', label: 'この記事について', group: 'はじめに' },
  { id: 'book-info', num: '01', label: '書籍の基本情報', group: 'はじめに' },
  { id: 'structure', num: '02', label: '全体像の構成マップ', group: '本の構造をつかむ' },
  { id: 'core-message', num: '03', label: '核心メッセージ', group: '本の構造をつかむ' },
  { id: 'chapters', num: '04', label: '章立て一覧', group: '本の構造をつかむ' },
  { id: 'step1', num: '05', label: 'Step1 情報収集', group: '実践ステップ 1-11' },
  { id: 'step2', num: '06', label: 'Step2 全数テスト不可能', group: '実践ステップ 1-11' },
  { id: 'step3', num: '07', label: 'Step3 テストとデバッグ', group: '実践ステップ 1-11' },
  { id: 'step4', num: '08', label: 'Step4 メタテスト', group: '実践ステップ 1-11' },
  { id: 'step5', num: '09', label: 'Step5 情報免疫', group: '実践ステップ 1-11' },
  { id: 'step6', num: '10', label: 'Step6 良いテストの基準', group: '実践ステップ 1-11' },
  { id: 'step7', num: '11', label: 'Step7 5大誤解', group: '実践ステップ 1-11' },
  { id: 'step8', num: '12', label: 'Step8 情報処理サイクル', group: '実践ステップ 1-11' },
  { id: 'step9', num: '13', label: 'Step9 設計で楽にする', group: '実践ステップ 1-11' },
  { id: 'step10', num: '14', label: 'Step10 機械に頼らない', group: '実践ステップ 1-11' },
  { id: 'step11', num: '15', label: 'Step11 詐欺を見抜く', group: '実践ステップ 1-11' },
  { id: 'roadmap', num: '16', label: '実践ロードマップ', group: 'まとめ' },
  { id: 'summary', num: '17', label: 'まとめ', group: 'まとめ' },
  { id: 'references', num: '18', label: '参考文献・出典', group: 'まとめ' },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('intro');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.perfect-software-layout section[id]'));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
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
    if (isOpen) {
      toggleRef.current?.focus({ preventScroll: true });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="mobile-bar">
        <div className="brand">
          <i className="ti ti-bug"></i>Perfect Software ガイド
        </div>
        <button
          ref={toggleRef}
          id="mobileToggle"
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
          aria-controls="sidebar"
          onClick={handleToggle}
          type="button"
        >
          <i className="ti ti-menu-2"></i>
        </button>
      </div>

      <div
        className={`sidebar-scrim ${isOpen ? 'open' : ''}`}
        id="sidebarScrim"
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`sidebar ${isOpen ? 'open' : ''}`}
        id="sidebar"
        aria-label="目次"
      >
        <div className="sidebar-brand">
          <i className="ti ti-bug"></i>
          <span>
            Perfect Software
            <br />
            初学者ガイド
          </span>
        </div>

        <div className="nav-group-label">はじめに</div>
        {TOC_ITEMS.filter((item) => item.group === 'はじめに').map((item) => (
          <a
            key={item.id}
            className={`nav-a ${activeId === item.id ? 'active' : ''}`}
            href={`#${item.id}`}
            onClick={handleLinkClick}
            aria-current={activeId === item.id ? 'location' : undefined}
          >
            <span className="n-num">{item.num}</span>
            {item.label}
          </a>
        ))}

        <div className="nav-group-label">本の構造をつかむ</div>
        {TOC_ITEMS.filter((item) => item.group === '本の構造をつかむ').map((item) => (
          <a
            key={item.id}
            className={`nav-a ${activeId === item.id ? 'active' : ''}`}
            href={`#${item.id}`}
            onClick={handleLinkClick}
            aria-current={activeId === item.id ? 'location' : undefined}
          >
            <span className="n-num">{item.num}</span>
            {item.label}
          </a>
        ))}

        <div className="nav-group-label">実践ステップ 1-11</div>
        {TOC_ITEMS.filter((item) => item.group === '実践ステップ 1-11').map((item) => (
          <a
            key={item.id}
            className={`nav-a ${activeId === item.id ? 'active' : ''}`}
            href={`#${item.id}`}
            onClick={handleLinkClick}
            aria-current={activeId === item.id ? 'location' : undefined}
          >
            <span className="n-num">{item.num}</span>
            {item.label}
          </a>
        ))}

        <div className="nav-group-label">まとめ</div>
        {TOC_ITEMS.filter((item) => item.group === 'まとめ').map((item) => (
          <a
            key={item.id}
            className={`nav-a ${activeId === item.id ? 'active' : ''}`}
            href={`#${item.id}`}
            onClick={handleLinkClick}
            aria-current={activeId === item.id ? 'location' : undefined}
          >
            <span className="n-num">{item.num}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
