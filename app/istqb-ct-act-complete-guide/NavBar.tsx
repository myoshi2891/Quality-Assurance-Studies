'use client';

import { useEffect, useState } from 'react';

/**
 * Renders a sticky section navigation bar that highlights the currently most-visible content section.
 *
 * The component tracks which section element (any `section[id]` or `div[id="top"]`) is most visible in the viewport
 * and applies an active state (`class="active"` and `aria-current="location"`) to the corresponding link.
 *
 * @returns The navigation bar React element with links to page sections and a logo link to `#top`
 */
export default function NavBar() {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const ratios = new Map<string, number>();
        const disclaimerRaw = getComputedStyle(document.documentElement)
            .getPropertyValue('--disclaimer-height')
            .trim();
        const disclaimerHeight = Number.parseFloat(disclaimerRaw) || 0;
        const topOffset = 60 + disclaimerHeight;
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
                rootMargin: `-${topOffset}px 0px -80% 0px`,
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
