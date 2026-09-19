'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  num: number;
  label: string;
  groupId: string;
}

export interface TocGroup {
  id: string;
  label: string;
}

export const TOC_GROUPS: TocGroup[] = [
  { id: 'intro-group', label: 'はじめに' },
  { id: 'part1-group', label: 'Part I 基礎編' },
  { id: 'part2-group', label: 'Part II 実践編' },
  { id: 'part3-group', label: 'Part III 発展編' },
  { id: 'summary-group', label: 'まとめと参考情報' },
];

export const TOC_ITEMS: TocItem[] = [
  // はじめに
  { id: 'intro', num: 1, label: 'この記事の読み方', groupId: 'intro-group' },
  { id: 'glossary', num: 2, label: '用語ミニ辞典', groupId: 'intro-group' },
  { id: 'book-info', num: 3, label: '書籍情報', groupId: 'intro-group' },
  { id: 'structure', num: 4, label: '全体構成をつかむ', groupId: 'intro-group' },

  // Part I 基礎編
  { id: 'step1', num: 5, label: 'AIとMLは何を変えるか', groupId: 'part1-group' },
  { id: 'step2', num: 6, label: 'テストの歴史をたどる', groupId: 'part1-group' },
  { id: 'step3', num: 7, label: 'AI時代の品質工学', groupId: 'part1-group' },
  { id: 'step4', num: 8, label: '従来型とAI駆動の比較', groupId: 'part1-group' },
  { id: 'step5', num: 9, label: 'SDLCとSTLCの基礎', groupId: 'part1-group' },
  { id: 'step6', num: 10, label: 'テストピラミッド再構築', groupId: 'part1-group' },

  // Part II 実践編
  { id: 'step7', num: 11, label: 'テスト計画と実行', groupId: 'part2-group' },
  { id: 'step8', num: 12, label: 'テストケース開発', groupId: 'part2-group' },
  { id: 'step9', num: 13, label: 'テスト環境の管理', groupId: 'part2-group' },
  { id: 'step10', num: 14, label: 'スマートな不具合管理', groupId: 'part2-group' },
  { id: 'step11', num: 15, label: 'レポーティングとクローズ', groupId: 'part2-group' },
  { id: 'step12', num: 16, label: 'テストギャップの排除', groupId: 'part2-group' },

  // Part III 発展編
  { id: 'step13', num: 17, label: 'テストのスケーリング', groupId: 'part3-group' },
  { id: 'step14', num: 18, label: 'CI/CD強化', groupId: 'part3-group' },
  { id: 'step15', num: 19, label: 'リアルタイムモニタリング', groupId: 'part3-group' },
  { id: 'step16', num: 20, label: '障害予測アナリティクス', groupId: 'part3-group' },
  { id: 'step17', num: 21, label: '未来と倫理', groupId: 'part3-group' },
  { id: 'step18', num: 22, label: '導入への次のステップ', groupId: 'part3-group' },

  // まとめと参考情報
  { id: 'chapter-list', num: 23, label: '全18章 一覧', groupId: 'summary-group' },
  { id: 'voices', num: 24, label: '業界の声', groupId: 'summary-group' },
  { id: 'critical', num: 25, label: '批判的に読む', groupId: 'summary-group' },
  { id: 'checklist', num: 26, label: '実践チェックリスト', groupId: 'summary-group' },
  { id: 'roadmap', num: 27, label: '学習ロードマップ', groupId: 'summary-group' },
  { id: 'summary', num: 28, label: 'まとめ', groupId: 'summary-group' },
  { id: 'references', num: 29, label: '参考文献', groupId: 'summary-group' },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('intro');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.ai-driven-test-layout section[id]'));
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

  const handleLinkClick = (id: string) => {
    setActiveId(id);
    if (isOpen) {
      toggleRef.current?.focus({ preventScroll: true });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="mobile-bar">
        <div className="brand">
          <div className="brand-icon">
            <i className="ti ti-robot" aria-hidden="true"></i>
          </div>
          <div className="brand-text">AI駆動テスト入門</div>
        </div>
        <button
          ref={toggleRef}
          id="mobileToggle"
          aria-label="メニューを開く"
          aria-expanded={isOpen}
          onClick={handleToggle}
          type="button"
        >
          <i className="ti ti-menu-2" aria-hidden="true"></i>
        </button>
      </div>

      <div
        className={`scrim ${isOpen ? 'show' : ''}`}
        id="scrim"
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar" aria-label="サイドバー目次">
        <div className="brand">
          <div className="brand-icon">
            <i className="ti ti-robot" aria-hidden="true"></i>
          </div>
          <div className="brand-text">
            AI駆動テスト入門
            <span className="brand-sub">AI-Driven Software Testing</span>
          </div>
        </div>

        {TOC_GROUPS.map((group) => {
          const items = TOC_ITEMS.filter((item) => item.groupId === group.id);
          return (
            <React.Fragment key={group.id}>
              <div className="nav-group-label">{group.label}</div>
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-a ${activeId === item.id ? 'active' : ''}`}
                  data-target={item.id}
                  onClick={() => handleLinkClick(item.id)}
                >
                  <span className="n-num">{item.num}</span>
                  {item.label}
                </a>
              ))}
            </React.Fragment>
          );
        })}
      </aside>
    </>
  );
}
