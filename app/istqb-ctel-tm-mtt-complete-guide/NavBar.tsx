'use client';

import React, { useEffect, useState } from 'react';

const NAV_LINKS = [
    { href: '#ch0', label: '概要' },
    { href: '#ch1', label: 'Ch.1 採用' },
    { href: '#ch2', label: 'Ch.2 開発' },
    { href: '#ch3', label: 'Ch.3 リード' },
    { href: '#ch4', label: 'Ch.4 組織横断' },
    { href: '#ch5', label: 'Ch.5 擁護' },
    { href: '#ch6', label: 'Ch.6 コミュニケーション' },
    { href: '#ch7', label: 'Ch.7 倫理' },
    { href: '#exam', label: '試験対策' },
    { href: '#refs', label: '参考資料' },
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
    const [activeId, setActiveId] = useState('ch0');

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
                <span className="sticky-nav-brand">CTEL-TM-MTT</span>
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
