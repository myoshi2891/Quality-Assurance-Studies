'use client';

import { useEffect, useState } from 'react';

export default function NavBar() {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-60px 0px 0px 0px' }
        );

        sections.forEach((s) => observer.observe(s));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav className="sticky-nav">
            <span className="nav-logo">🎰 CT-GT</span>
            <a href="#hero" className={activeId === 'hero' ? 'active' : ''}>TOP</a>
            <a href="#ch0" className={activeId === 'ch0' ? 'active' : ''}>概要</a>
            <a href="#ch1" className={activeId === 'ch1' ? 'active' : ''}>Ch.1 産業入門</a>
            <a href="#ch2" className={activeId === 'ch2' ? 'active' : ''}>Ch.2 エコシステム</a>
            <a href="#ch3" className={activeId === 'ch3' ? 'active' : ''}>Ch.3 テスト技法</a>
            <a href="#exam" className={activeId === 'exam' ? 'active' : ''}>試験対策</a>
            <a href="#references" className={activeId === 'references' ? 'active' : ''}>参照URL</a>
        </nav>
    );
}
