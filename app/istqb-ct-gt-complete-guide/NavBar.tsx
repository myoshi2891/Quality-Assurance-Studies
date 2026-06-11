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
            <a href="#hero" className={activeId === 'hero' ? 'active' : ''} aria-current={activeId === 'hero' ? 'location' : undefined}>TOP</a>
            <a href="#ch0" className={activeId === 'ch0' ? 'active' : ''} aria-current={activeId === 'ch0' ? 'location' : undefined}>概要</a>
            <a href="#ch1" className={activeId === 'ch1' ? 'active' : ''} aria-current={activeId === 'ch1' ? 'location' : undefined}>Ch.1 産業入門</a>
            <a href="#ch2" className={activeId === 'ch2' ? 'active' : ''} aria-current={activeId === 'ch2' ? 'location' : undefined}>Ch.2 エコシステム</a>
            <a href="#ch3" className={activeId === 'ch3' ? 'active' : ''} aria-current={activeId === 'ch3' ? 'location' : undefined}>Ch.3 テスト技法</a>
            <a href="#exam" className={activeId === 'exam' ? 'active' : ''} aria-current={activeId === 'exam' ? 'location' : undefined}>試験対策</a>
            <a href="#references" className={activeId === 'references' ? 'active' : ''} aria-current={activeId === 'references' ? 'location' : undefined}>参照URL</a>
        </nav>
    );
}
