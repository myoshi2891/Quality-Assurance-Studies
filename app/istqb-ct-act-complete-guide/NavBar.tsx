'use client';

import { useEffect, useState } from 'react';

export default function NavBar() {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((e) => e.isIntersecting);
                if (visibleEntries.length > 0) {
                    const best = visibleEntries.reduce((prev, curr) =>
                        curr.intersectionRatio > prev.intersectionRatio ? curr : prev
                    );
                    setActiveId(best.target.id);
                }
            },
            { rootMargin: '-60px 0px -80% 0px' }
        );

        const sections = document.querySelectorAll('section[id], div[id="top"]');
        sections.forEach((s) => observer.observe(s));

        return () => observer.disconnect();
    }, []);

    const link = (id: string, label: string) => (
        <a
            href={`#${id}`}
            className={activeId === id ? 'active' : ''}
            aria-current={activeId === id ? 'location' : undefined}
        >
            {label}
        </a>
    );

    return (
        <nav className="sticky-nav" aria-label="CT-AcT セクションナビゲーション">
            <div className="nav-inner">
                <a href="#top" className="nav-logo" aria-current={activeId === 'top' ? 'location' : undefined}>
                    &gt;_CT-AcT
                </a>
                {link('overview', '概要')}
                {link('ch1', 'CH1 基礎')}
                {link('ch2', 'CH2 基準・設計')}
                {link('ch3', 'CH3 プロセス')}
                {link('ch4', 'CH4 非機能')}
                {link('ch5', 'CH5 協調')}
                {link('exam', '試験対策')}
                {link('refs', '参考文献')}
            </div>
        </nav>
    );
}
