'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'toc', label: '目次' },
  { id: 'ch1', label: 'Ch.1 概念' },
  { id: 'ch2', label: 'Ch.2 リソース' },
  { id: 'ch3', label: 'Ch.3 準備' },
  { id: 'ch4', label: 'Ch.4 デプロイ' },
  { id: 'ch5', label: 'Ch.5 影響分析' },
  { id: 'ch6', label: 'Ch.6 改善' },
  { id: 'ai', label: 'AI/トレンド' },
  { id: 'exam', label: '試験対策' },
  { id: 'refs', label: '参考文献' },
] as const;

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-60px 0px -60% 0px', threshold: 0 },
    );

    for (const { id } of NAV_LINKS) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }

    return () => obs.disconnect();
  }, []);

  return (
    <nav className="sticky-nav z-40">
      <div className="nav-inner">
        <span className="nav-brand">CT-TAS</span>
        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="nav-link"
            aria-current={activeId === id ? 'location' : undefined}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
