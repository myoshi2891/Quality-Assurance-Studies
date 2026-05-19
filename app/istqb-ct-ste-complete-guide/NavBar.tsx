'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sticky-nav .nav-link');

    const observer = new IntersectionObserver(
      (entries) => {
        let activeId = '';
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        });

        if (activeId) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === `#${activeId}`) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'location');
            }
          });
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky-nav" id="top">
      <div className="nav-inner">
        <Link href="#top" className="nav-brand">
          CT-STE 2025
        </Link>
        <Link href="#ch0" className="nav-link">
          Ch.0 概要
        </Link>
        <Link href="#ch1" className="nav-link">
          Ch.1 パラダイム
        </Link>
        <Link href="#ch2" className="nav-link">
          Ch.2 技法
        </Link>
        <Link href="#ch3" className="nav-link">
          Ch.3 プロセス
        </Link>
        <Link href="#ch4" className="nav-link">
          Ch.4 標準
        </Link>
        <Link href="#ch5" className="nav-link">
          Ch.5 組織
        </Link>
        <Link href="#ch6" className="nav-link">
          Ch.6 SDLC
        </Link>
        <Link href="#ch7" className="nav-link">
          Ch.7 ISMS
        </Link>
        <Link href="#ch8" className="nav-link">
          Ch.8 報告
        </Link>
        <Link href="#ch9" className="nav-link">
          Ch.9 ツール
        </Link>
        <Link href="#exam" className="nav-link">
          試験対策
        </Link>
        <Link href="#refs" className="nav-link">
          参考文献
        </Link>
      </div>
    </nav>
  );
}
