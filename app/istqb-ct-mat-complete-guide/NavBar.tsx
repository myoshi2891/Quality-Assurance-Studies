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
        <nav className="sticky-nav" aria-label="CT-MAT セクションナビゲーション">
            <div className="nav-inner">
                <a href="#top" className="nav-logo" aria-current={activeId === 'top' ? 'location' : undefined}>
                    CT-MAT
                </a>
                {link('toc', '目次')}
                {link('ch1', 'Ch.1 概論')}
                {link('ch2', 'Ch.2 テストタイプ')}
                {link('ch3', 'Ch.3 共通テスト')}
                {link('ch4', 'Ch.4 ツール/環境')}
                {link('ch5', 'Ch.5 自動化')}
                {link('exam', '試験対策')}
                {link('refs', '参考資料')}
            </div>
        </nav>
    );
}
