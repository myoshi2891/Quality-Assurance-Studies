'use client';

import React, { useEffect, useState } from 'react';

export interface NavLinkItem {
  id: string;
  label: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'about', label: '1. このガイドについて' },
  { id: 'what-is-appium', label: '2. Appiumとは何か' },
  { id: 'architecture', label: '3. アーキテクチャを理解する' },
  { id: 'version-history', label: '4. バージョンの歴史と現在地' },
  { id: 'setup', label: '5. 環境構築ステップバイステップ' },
  { id: 'capabilities', label: '6. Capabilitiesを理解する' },
  { id: 'first-test', label: '7. はじめてのテストを書く' },
  { id: 'locators', label: '8. 要素を見つけるロケーター戦略' },
  { id: 'pom', label: '9. Page Object Modelを実践する' },
  { id: 'waits', label: '10. 待機戦略でテストを安定させる' },
  { id: 'gestures', label: '11. ジェスチャー操作を自動化する' },
  { id: 'environments', label: '12. 実機・エミュレーター・クラウド' },
  { id: 'cicd', label: '13. 並列実行とCI/CD統合' },
  { id: 'anti-patterns', label: '14. アンチパターンと落とし穴' },
  { id: 'checklist', label: '15. ベストプラクティスチェックリスト' },
  { id: 'summary', label: '16. まとめ' },
  { id: 'references', label: '17. 参考文献と情報源' },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('about');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = NAV_LINKS.map(item => document.getElementById(item.id)).filter(
        Boolean
      ) as HTMLElement[];

      const scrollPosition = window.scrollY + 120;

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
      <button
        id="navToggle"
        className="nav-toggle"
        aria-label="メニューを開閉"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <aside id="sidebar" className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="brand">
          <div className="brand-mark">Ap</div>
          <span>Appium Guide</span>
        </div>
        <div className="brand-sub">Essentials &amp; Best Practices</div>

        <div className="nav-group-label">Contents</div>
        <ul className="navlist">
          {NAV_LINKS.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? 'active' : ''}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
