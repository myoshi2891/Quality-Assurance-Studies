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
            { rootMargin: '-60px 0px -60% 0px' }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 60;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
            window.history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <nav className="sticky-nav">
            <div className="nav-inner">
                <span className="nav-brand">CTEL-ITP-ATP</span>
                <a
                    href="#ch0"
                    className={`nav-link ${activeId === 'ch0' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch0')}
                >
                    概要
                </a>
                <a
                    href="#ch1"
                    className={`nav-link ${activeId === 'ch1' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch1')}
                >
                    Ch1 導入
                </a>
                <a
                    href="#ch2"
                    className={`nav-link ${activeId === 'ch2' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch2')}
                >
                    Ch2 コンテキスト
                </a>
                <a
                    href="#ch3"
                    className={`nav-link ${activeId === 'ch3' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch3')}
                >
                    Ch3 モデルベース
                </a>
                <a
                    href="#ch4"
                    className={`nav-link ${activeId === 'ch4' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch4')}
                >
                    Ch4 分析ベース
                </a>
                <a
                    href="#ch5"
                    className={`nav-link ${activeId === 'ch5' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch5')}
                >
                    Ch5 手法選択
                </a>
                <a
                    href="#ch6"
                    className={`nav-link ${activeId === 'ch6' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch6')}
                >
                    Ch6 IDEALプロセス
                </a>
                <a
                    href="#ch7"
                    className={`nav-link ${activeId === 'ch7' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch7')}
                >
                    Ch7 組織・役割
                </a>
                <a
                    href="#ch8"
                    className={`nav-link ${activeId === 'ch8' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch8')}
                >
                    Ch8 変更管理
                </a>
                <a
                    href="#ch9"
                    className={`nav-link ${activeId === 'ch9' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch9')}
                >
                    Ch9 成功要因
                </a>
                <a
                    href="#ch10"
                    className={`nav-link ${activeId === 'ch10' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'ch10')}
                >
                    Ch10 適応
                </a>
                <a
                    href="#exam"
                    className={`nav-link ${activeId === 'exam' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'exam')}
                >
                    試験対策
                </a>
                <a
                    href="#refs"
                    className={`nav-link ${activeId === 'refs' ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, 'refs')}
                >
                    参考文献
                </a>
            </div>
        </nav>
    );
}
