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

        const sections = document.querySelectorAll('section[id]');
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
        <nav className="sticky-nav" aria-label="CT-AuT セクションナビゲーション">
            <div className="nav-inner">
                <span className="nav-brand">CT-AuT</span>
                {link('overview', 'Ch.0 概要')}
                {link('ch1', 'Ch.1 自動車SW')}
                {link('aspice', 'Ch.2.1 ASPICE')}
                {link('iso26262', 'Ch.2.2 ISO26262')}
                {link('autosar', 'Ch.2.3 AUTOSAR')}
                {link('compare', 'Ch.2.4 比較')}
                {link('xil', 'Ch.3 XiL')}
                {link('techniques', 'Ch.4 技法')}
                {link('exam', '試験対策')}
                {link('refs', '参照URL')}
            </div>
        </nav>
    );
}
