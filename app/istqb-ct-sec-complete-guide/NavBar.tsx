'use client';

import { useEffect } from 'react';

export default function NavBar() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const links = document.querySelectorAll('.page-nav a');
            links.forEach((link) => {
              if (link.getAttribute('href') === `#${id}`) {
                link.setAttribute('aria-current', 'location');
              } else {
                link.removeAttribute('aria-current');
              }
            });
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="page-nav" role="navigation" aria-label="主要ナビゲーション">
            <div className="nav-inner">
                <span className="nav-logo">🔐 CT-SEC</span>
                <a href="#chapter-0">概要</a>
                <a href="#chapter-1">Ch.1 基礎</a>
                <a href="#chapter-2">Ch.2 目的・戦略</a>
                <a href="#chapter-3">Ch.3 プロセス</a>
                <a href="#chapter-4">Ch.4 SDLC</a>
                <a href="#chapter-5">Ch.5 メカニズム</a>
                <a href="#chapter-6">Ch.6 人的要因</a>
                <a href="#chapter-7">Ch.7 評価・報告</a>
                <a href="#chapter-8">Ch.8 ツール</a>
                <a href="#chapter-9">Ch.9 標準</a>
                <a href="#exam-tips">試験対策</a>
                <a href="#tools">ツール表</a>
                <a href="#references">参照URL</a>
            </div>
        </nav>
  );
}
