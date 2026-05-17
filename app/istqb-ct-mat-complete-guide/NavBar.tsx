'use client';

import { useEffect, useState } from 'react';

/**
 * Render a sticky section navigation that highlights the most visible page section.
 *
 * The component observes page sections and updates which link is active based on intersection
 * visibility. The active link receives an `active` CSS class and `aria-current="location"` for accessibility.
 *
 * @returns A navigation JSX element containing links to page sections with the currently most visible section marked as active.
 */
export default function NavBar() {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const ratios = new Map<string, number>();
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = (entry.target as HTMLElement).id;
                    ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
                });

                let bestId = '';
                let bestRatio = 0;
                for (const [id, ratio] of ratios) {
                    if (ratio > bestRatio) {
                        bestRatio = ratio;
                        bestId = id;
                    }
                }
                setActiveId((prev) => (prev === bestId ? prev : bestId));
            },
            {
                rootMargin: '-60px 0px -80% 0px',
                threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
            }
        );

        const sections = document.querySelectorAll<HTMLElement>('section[id], div[id="top"]');
        sections.forEach((s) => {
            ratios.set(s.id, 0);
            observer.observe(s);
        });

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
