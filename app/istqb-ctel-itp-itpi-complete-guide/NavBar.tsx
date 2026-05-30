'use client';

import React, { useEffect, useState } from 'react';

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let currentActiveId = activeId;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        currentActiveId = entry.target.id;
                    }
                });
                setActiveId(currentActiveId);
            },
            { rootMargin: '-60px 0px -80% 0px', threshold: 0 }
        );

        NAV_LINKS.forEach(({ href }) => {
            const el = document.getElementById(href.substring(1));
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [activeId]);

    return (
        <nav className="sticky-nav" aria-label="章ナビゲーション">
            <div className="nav-inner">
                <span className="nav-brand">CTEL-ITP-ITPI</span>
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`nav-link ${activeId === link.href.substring(1) ? 'active' : ''}`}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
