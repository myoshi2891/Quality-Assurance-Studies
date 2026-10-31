'use client';

import React, { useEffect, useState } from 'react';

const NAV_LINKS = [
  { id: 'ch0', label: '0. このガイドの読み方と、調査の限界（先に必ず読んでください）' },
  { id: 'ch1', label: '1. この規格を一言でいうと' },
  { id: 'ch2', label: '2. なぜ必要なのか：TrueType と PostScript の統合の歴史' },
  { id: 'ch3', label: '3. 規格の基本情報と改訂の流れ' },
  { id: 'ch4', label: '4. ISO 規格と OpenType 仕様の関係' },
  { id: 'ch5', label: '5. フォントファイルの構造：sfnt コンテナを読んでみる' },
  { id: 'ch6', label: '6. テーブルの全体地図' },
  { id: 'ch7', label: '7. 文字が画面に出るまで：表示パイプライン' },
  { id: 'ch8', label: '8. 高度な組版：GSUB と GPOS をもう少し詳しく' },
  { id: 'ch9', label: '9. 可変フォント（OpenType Font Variations）' },
  { id: 'ch10', label: '10. カラーフォントと絵文字' },
  { id: 'ch11', label: '11. 日本語の読者に関係するポイント' },
  { id: 'ch12', label: '12. 実装の現状：誰がこの規格を動かしているのか' },
  { id: 'ch13', label: '13. QA・テスト観点：フォント対応を検証するには' },
  { id: 'ch14', label: '14. まとめと学習ロードマップ' },
  { id: 'ch15', label: '15. 根拠ソース一覧（URL）' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('ch0');

  useEffect(() => {
    const sections = document.querySelectorAll('section.chapter');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -75% 0px' }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth <= 900) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        className="toggle"
        id="toggle"
        type="button"
        aria-label="目次を開閉"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰ 目次
      </button>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <p className="brand">ISO/IEC 14496-22:2026</p>
        <p className="brand-sub">
          Open Font Format<br />初学者向け解説
        </p>
        <ul>
          {NAV_LINKS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-target={item.id}
                className={activeId === item.id ? 'active' : ''}
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
