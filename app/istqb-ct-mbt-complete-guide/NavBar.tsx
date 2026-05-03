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
        <nav className="sticky-nav" aria-label="CT-MBT セクションナビゲーション">
            <div className="nav-inner">
                <span className="nav-logo">CT-MBT</span>
                {link('overview', '概要')}
                {link('ch1', 'Ch.1 概念')}
                {link('ch2', 'Ch.2 モデリング')}
                {link('ch3', 'Ch.3 選択基準')}
                {link('ch4', 'Ch.4 実装・実行')}
                {link('ch5', 'Ch.5 展開評価')}
                {link('tools', 'ツール')}
                {link('exam', '試験対策')}
                {link('trends', '最新動向')}
                {link('refs', '参考文献')}
            </div>
        </nav>
    );
}
