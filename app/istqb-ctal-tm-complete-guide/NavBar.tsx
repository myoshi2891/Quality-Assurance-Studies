'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-60px 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id], div[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { id: 'chapter-0', label: 'Ch.0 概要' },
    { id: 'chapter-1', label: 'Ch.1 活動管理' },
    { id: 'section-1-1', label: '1.1 プロセス' },
    { id: 'section-1-2', label: '1.2 コンテキスト' },
    { id: 'section-1-3', label: '1.3 リスク' },
    { id: 'section-1-4', label: '1.4 戦略' },
    { id: 'section-1-5', label: '1.5 改善' },
    { id: 'section-1-6', label: '1.6 ツール' },
    { id: 'chapter-2', label: 'Ch.2 製品管理' },
    { id: 'section-2-1', label: '2.1 メトリクス' },
    { id: 'section-2-2', label: '2.2 見積もり' },
    { id: 'section-2-3', label: '2.3 欠陥' },
    { id: 'chapter-3', label: 'Ch.3 チーム管理' },
    { id: 'exam-tips', label: '試験対策' },
    { id: 'references', label: '参照URL' },
  ];

  return (
    <nav
      className="sticky-nav"
      style={{
        position: 'sticky',
        top: '60px',
        zIndex: 40,
      }}
    >
      <div className="nav-inner">
        <span className="nav-logo">CTAL-TM v3.0</span>
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            className={`nav-link ${activeId === link.id ? 'active' : ''}`}
            style={activeId === link.id ? { color: 'var(--color-accent-cyan)' } : {}}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
