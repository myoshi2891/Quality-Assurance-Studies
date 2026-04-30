'use client';

import { useEffect, useState } from 'react';

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
            { rootMargin: '-80px 0px -80% 0px' }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="sticky-nav">
            <div className="nav-inner">
                <span className="nav-brand">ISTQB CT-AI</span>
                <a
                    href="#overview"
                    className={`nav-link ch1 ${activeId === 'overview' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'overview')}
                >
                    概要
                </a>
                <a
                    href="#ch1"
                    className={`nav-link ch2 ${activeId === 'ch1' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch1')}
                >
                    Ch.1 AIの基礎
                </a>
                <a
                    href="#ch2"
                    className={`nav-link ch3 ${activeId === 'ch2' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch2')}
                >
                    Ch.2 品質特性
                </a>
                <a
                    href="#ch3"
                    className={`nav-link ch4 ${activeId === 'ch3' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch3')}
                >
                    Ch.3 機械学習テスト
                </a>
                <a
                    href="#ch4"
                    className={`nav-link ch5 ${activeId === 'ch4' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch4')}
                >
                    Ch.4 ブラックボックス
                </a>
                <a
                    href="#ch5"
                    className={`nav-link ch6 ${activeId === 'ch5' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch5')}
                >
                    Ch.5 ホワイトボックス
                </a>
                <a
                    href="#ch6"
                    className={`nav-link ch7 ${activeId === 'ch6' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch6')}
                >
                    Ch.6 テスト環境
                </a>
                <a
                    href="#ch7"
                    className={`nav-link ch8 ${activeId === 'ch7' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch7')}
                >
                    Ch.7 AI活用
                </a>
            </div>
        </nav>
    );
}
