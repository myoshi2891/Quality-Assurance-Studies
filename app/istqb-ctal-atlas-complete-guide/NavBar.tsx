'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * Renders a sticky navigation bar with a logo and in-page links, highlighting the link whose target section is currently visible.
 */
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
    { id: 'overview', label: '概要', className: '' },
    { id: 'ch1', label: 'Ch.1 品質支援', className: 'ch1' },
    { id: 'ch2', label: 'Ch.2 フロー改善', className: 'ch2' },
    { id: 'ch3', label: 'Ch.3 継続改善', className: 'ch3' },
    { id: 'ch4', label: 'Ch.4 テスト戦略', className: 'ch4' },
    { id: 'ch5', label: 'Ch.5 テストプロセス', className: 'ch5' },
    { id: 'exam', label: '試験対策', className: '' },
    { id: 'refs', label: '参考文献', className: '' },
  ];

  return (
    <nav
      className="sticky-nav"
      aria-label="章ナビゲーション"
      style={{
        position: 'sticky',
        top: '60px',
        zIndex: 40,
      }}
    >
      <div className="nav-inner">
        <span className="nav-brand">CT-ATLaS</span>
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            className={`nav-link ${link.className} ${activeId === link.id ? 'active' : ''}`.trim()}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
