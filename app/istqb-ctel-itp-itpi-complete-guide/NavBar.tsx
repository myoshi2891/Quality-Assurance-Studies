'use client';

import React, { useEffect, useState, useRef } from 'react';

const NAV_LINKS = [
    { href: '#top', label: '概要' },
    { href: '#ch0', label: 'Ch.0 資格概要' },
    { href: '#ch2', label: 'Ch.2 コンテキスト' },
    { href: '#ch3', label: 'Ch.3 モデル' },
    { href: '#ch4', label: 'Ch.4 分析' },
    { href: '#ch5', label: 'Ch.5 選択' },
    { href: '#ch6', label: 'Ch.6 実装★' },
    { href: '#ch7', label: 'Ch.7 組織★' },
    { href: '#ch8', label: 'Ch.8 変更管理★' },
    { href: '#ch9', label: 'Ch.9 CSF★' },
    { href: '#ch10', label: 'Ch.10 適応' },
    { href: '#exam', label: '試験対策' },
    { href: '#refs', label: '参考文献' },
];

export default function NavBar() {
    const [activeId, setActiveId] = useState('top');
    const activeIdRef = useRef(activeId);

    useEffect(() => {
        activeIdRef.current = activeId;
    }, [activeId]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const activeEntries = entries.filter((entry) => entry.isIntersecting);
                if (activeEntries.length > 0) {
                    const first = activeEntries[0] as IntersectionObserverEntry;
                    const closest = activeEntries.reduce<IntersectionObserverEntry>((best, current) => {
                        return current.boundingClientRect.top < best.boundingClientRect.top ? current : best;
                    }, first);
                    setActiveId(closest.target.id);
                }
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
                <span className="sticky-nav-brand">CTEL-ITP-ITPI</span>
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`sticky-nav-link ${activeId === link.href.substring(1) ? 'active' : ''}`}
                        aria-current={activeId === link.href.substring(1) ? 'location' : undefined}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
