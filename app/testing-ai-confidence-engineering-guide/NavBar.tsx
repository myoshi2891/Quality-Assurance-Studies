'use client';

import React, { useEffect, useState } from 'react';

export interface NavLinkItem {
  id: string;
  label: string;
  icon: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'position', label: 'この本の位置づけ', icon: 'ti ti-compass' },
  { id: 'book-info', label: '書籍データ', icon: 'ti ti-book' },
  { id: 'author', label: '著者紹介', icon: 'ti ti-user' },
  { id: 'audience', label: '対象読者', icon: 'ti ti-users' },
  { id: 'changes', label: '読むと何が変わるか', icon: 'ti ti-bulb' },
  { id: 'roadmap', label: '学習ロードマップ', icon: 'ti ti-route' },
  { id: 'step0', label: 'Step0 なぜ別物なのか', icon: 'ti ti-flag' },
  { id: 'step1', label: 'Step1 第I部', icon: 'ti ti-circle-number-1' },
  { id: 'step2', label: 'Step2 第II部', icon: 'ti ti-circle-number-2' },
  { id: 'step3', label: 'Step3 第III部', icon: 'ti ti-circle-number-3' },
  { id: 'step4', label: 'Step4 第IV部', icon: 'ti ti-circle-number-4' },
  { id: 'step5', label: 'Step5 第V部', icon: 'ti ti-circle-number-5' },
  { id: 'practice', label: '実践ワーク', icon: 'ti ti-tools' },
  { id: 'glossary', label: '用語集', icon: 'ti ti-book-2' },
  { id: 'voices', label: '業界の声', icon: 'ti ti-microphone-2' },
  { id: 'critical', label: '批判的に読む', icon: 'ti ti-scale' },
  { id: 'checklist', label: 'チェックリスト', icon: 'ti ti-checklist' },
  { id: 'summary', label: 'まとめ', icon: 'ti ti-flag-3' },
  { id: 'references', label: '参考文献・出典', icon: 'ti ti-link' },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('position');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = NAV_LINKS.map((item) =>
        document.getElementById(item.id)
      ).filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveId(id);
    setIsOpen(false);
  };

  return (
    <>
      <div className="mobile-bar">
        <div className="brand">
          <i className="ti ti-sparkles" aria-hidden="true"></i>
          <span>Testing AI ガイド</span>
        </div>
        <button
          id="mobileToggle"
          type="button"
          aria-label="メニューを開閉"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          メニュー
        </button>
      </div>

      <div
        className={`scrim ${isOpen ? 'show' : ''}`}
        id="scrim"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-brand">
          <i className="ti ti-sparkles" aria-hidden="true"></i>
          <span>Testing AI 完全ガイド</span>
        </div>
        {NAV_LINKS.map((item) => (
          <a
            key={item.id}
            className={`nav-a ${activeId === item.id ? 'active' : ''}`}
            href={`#${item.id}`}
            onClick={() => handleLinkClick(item.id)}
          >
            <i className={item.icon} aria-hidden="true"></i>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
