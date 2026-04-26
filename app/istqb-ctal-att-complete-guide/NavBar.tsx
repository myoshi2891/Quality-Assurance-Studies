'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'overview', label: '概要' },
  { id: 'ch1', label: 'Ch.1 要件' },
  { id: 'ch2-tdd', label: 'Ch.2 TDD' },
  { id: 'ch2-bdd', label: 'BDD' },
  { id: 'ch2-atdd', label: 'ATDD' },
  { id: 'ch2-exp', label: '探索的' },
  { id: 'ch2-quality', label: '品質' },
  { id: 'ch3', label: 'Ch.3 自動化' },
  { id: 'ch4-ci', label: 'Ch.4 CI/CD' },
  { id: 'ch4-sv', label: '仮想化' },
  { id: 'exam', label: '試験対策' },
  { id: 'refs', label: '参考文献' }
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-60px 0px -60% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <span className="nav-brand">CTAL-ATT</span>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link${activeSection === item.id ? ' active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}