'use client';

import React, { useEffect, useState } from 'react';

const NAV_LINKS = [
    { href: '#intro', label: '概要' },
    { href: '#ch1', label: 'Ch.1 ミッション' },
    { href: '#ch2', label: 'Ch.2 外部関係' },
    { href: '#ch3', label: 'Ch.3 組織管理' },
    { href: '#ch4', label: 'Ch.4 考慮事項' },
    { href: '#ch5', label: 'Ch.5 評価' },
    { href: '#exam', label: '試験対策' },
    { href: '#refs', label: '参考文献' },
];

/**
 * Render a sticky section navigation that highlights and marks the currently visible section.
 *
 * The component observes page sections and updates the active link; the active link receives the `active`
 * CSS class and `aria-current="location"`.
 *
 * @returns A JSX element for the sticky navigation bar containing links defined in `NAV_LINKS`.
 */
export default function NavBar() {
    const [activeId, setActiveId] = useState('intro');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-60px 0px -80% 0px', threshold: 0 }
        );

        NAV_LINKS.forEach(({ href }) => {
            const el = document.getElementById(href.substring(1));
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="sticky-nav" aria-label="章ナビゲーション">
            <div className="sticky-nav-inner">
                <span className="sticky-nav-brand">CTEL-TM-SM</span>
                {NAV_LINKS.map((link) => {
                    const isActive = activeId === link.href.substring(1);
                    return (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`sticky-nav-link ${isActive ? 'active' : ''}`}
                            aria-current={isActive ? 'location' : undefined}
                        >
                            {link.label}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
