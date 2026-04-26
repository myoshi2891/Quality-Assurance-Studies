'use client';

import { useEffect, useState } from 'react';

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
        rootMargin: '-80px 0px -60% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-bar" style={{ top: '60px', zIndex: 40 }}>
      <div className="nav-inner">
        <span className="nav-brand">CTAL-ATT</span>
        <a 
          className={`nav-link ${activeSection === 'overview' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#overview" 
          onClick={(e) => handleClick(e, 'overview')}
        >
          概要
        </a>
        <a 
          className={`nav-link ${activeSection === 'ch1' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#ch1" 
          onClick={(e) => handleClick(e, 'ch1')}
        >
          Ch.1 要件
        </a>
        <a 
          className={`nav-link ${activeSection === 'ch2-tdd' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#ch2-tdd" 
          onClick={(e) => handleClick(e, 'ch2-tdd')}
        >
          Ch.2 TDD
        </a>
        <a 
          className={`nav-link ${activeSection === 'ch2-bdd' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#ch2-bdd" 
          onClick={(e) => handleClick(e, 'ch2-bdd')}
        >
          BDD
        </a>
        <a 
          className={`nav-link ${activeSection === 'ch2-atdd' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#ch2-atdd" 
          onClick={(e) => handleClick(e, 'ch2-atdd')}
        >
          ATDD
        </a>
        <a 
          className={`nav-link ${activeSection === 'ch2-exp' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#ch2-exp" 
          onClick={(e) => handleClick(e, 'ch2-exp')}
        >
          探索的
        </a>
        <a 
          className={`nav-link ${activeSection === 'ch2-quality' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#ch2-quality" 
          onClick={(e) => handleClick(e, 'ch2-quality')}
        >
          品質
        </a>
        <a 
          className={`nav-link ${activeSection === 'ch3' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#ch3" 
          onClick={(e) => handleClick(e, 'ch3')}
        >
          Ch.3 自動化
        </a>
        <a 
          className={`nav-link ${activeSection === 'ch4-ci' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#ch4-ci" 
          onClick={(e) => handleClick(e, 'ch4-ci')}
        >
          Ch.4 CI/CD
        </a>
        <a 
          className={`nav-link ${activeSection === 'ch4-sv' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#ch4-sv" 
          onClick={(e) => handleClick(e, 'ch4-sv')}
        >
          仮想化
        </a>
        <a 
          className={`nav-link ${activeSection === 'exam' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#exam" 
          onClick={(e) => handleClick(e, 'exam')}
        >
          試験対策
        </a>
        <a 
          className={`nav-link ${activeSection === 'refs' ? 'text-[var(--color-accent-cyan)] border-b-[var(--color-accent-cyan)]' : ''}`} 
          href="#refs" 
          onClick={(e) => handleClick(e, 'refs')}
        >
          参考文献
        </a>
      </div>
    </nav>
  );
}