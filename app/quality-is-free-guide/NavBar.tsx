'use client';

import React, { useEffect, useRef, useState } from 'react';

const TOC_IDS = ["sec1","sec2","sec3","sec4","sec5","sec6","sec7","sec8","sec9","sec10","sec11","sec12","sec13","sec14","sec15"] as const;

export default function NavBar({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('');
    const toggleRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
        }, { rootMargin: '-20% 0px -70% 0px' });
        for (const id of TOC_IDS) { const section = document.getElementById(id); if (section) observer.observe(section); }
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (!isOpen) return;
        const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setIsOpen(false); toggleRef.current?.focus(); } };
        document.addEventListener('keydown', escape);
        return () => document.removeEventListener('keydown', escape);
    }, [isOpen]);
    return <>
        <div className="mobile-bar">
            <span className="m-title">
                {"Quality Is Free 入門ガイド"}
            </span>
            <button id="mobileToggle" type="button" ref={toggleRef} aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"} aria-expanded={isOpen} aria-controls="sidebar" onClick={() => setIsOpen(open => !open)}>
                <i className="ti ti-menu-2">

                </i>
            </button>
        </div>
        <div className="layout">
            <nav className={isOpen ? "sidebar open" : "sidebar"} id="sidebar" aria-label="ページ内目次">
                <div className="sidebar-title accent-serif">
                    {"Quality Is Free"}
                </div>
                <p className="sidebar-sub">
                    {"初学者向け実践ガイド"}
                </p>
                <ul >
                    <li >
                        <a href="#sec1" className={active === "sec1" ? "nav-a active" : "nav-a"} aria-current={active === "sec1" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"1"}
                            </span>
                            <i className="ti ti-book-2">

                            </i>
                            {"はじめに"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec2" className={active === "sec2" ? "nav-a active" : "nav-a"} aria-current={active === "sec2" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"2"}
                            </span>
                            <i className="ti ti-user">

                            </i>
                            {"著者紹介"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec3" className={active === "sec3" ? "nav-a active" : "nav-a"} aria-current={active === "sec3" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"3"}
                            </span>
                            <i className="ti ti-list-tree">

                            </i>
                            {"本書の構成"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec4" className={active === "sec4" ? "nav-a active" : "nav-a"} aria-current={active === "sec4" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"4"}
                            </span>
                            <i className="ti ti-certificate">

                            </i>
                            {"4つの絶対原則"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec5" className={active === "sec5" ? "nav-a active" : "nav-a"} aria-current={active === "sec5" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"5"}
                            </span>
                            <i className="ti ti-currency-dollar">

                            </i>
                            {"品質コスト"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec6" className={active === "sec6" ? "nav-a active" : "nav-a"} aria-current={active === "sec6" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"6"}
                            </span>
                            <i className="ti ti-stairs">

                            </i>
                            {"14ステップ"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec7" className={active === "sec7" ? "nav-a active" : "nav-a"} aria-current={active === "sec7" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"7"}
                            </span>
                            <i className="ti ti-chart-dots">

                            </i>
                            {"成熟度グリッド"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec8" className={active === "sec8" ? "nav-a active" : "nav-a"} aria-current={active === "sec8" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"8"}
                            </span>
                            <i className="ti ti-git-branch">

                            </i>
                            {"ソフトウェアへの応用"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec9" className={active === "sec9" ? "nav-a active" : "nav-a"} aria-current={active === "sec9" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"9"}
                            </span>
                            <i className="ti ti-scale">

                            </i>
                            {"批判的に読む"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec10" className={active === "sec10" ? "nav-a active" : "nav-a"} aria-current={active === "sec10" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"10"}
                            </span>
                            <i className="ti ti-robot">

                            </i>
                            {"2026年の現在地"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec11" className={active === "sec11" ? "nav-a active" : "nav-a"} aria-current={active === "sec11" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"11"}
                            </span>
                            <i className="ti ti-route">

                            </i>
                            {"実践ステップガイド"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec12" className={active === "sec12" ? "nav-a active" : "nav-a"} aria-current={active === "sec12" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"12"}
                            </span>
                            <i className="ti ti-square-check">

                            </i>
                            {"実践チェックリスト"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec13" className={active === "sec13" ? "nav-a active" : "nav-a"} aria-current={active === "sec13" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"13"}
                            </span>
                            <i className="ti ti-map">

                            </i>
                            {"学習ロードマップ"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec14" className={active === "sec14" ? "nav-a active" : "nav-a"} aria-current={active === "sec14" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"14"}
                            </span>
                            <i className="ti ti-flag-3">

                            </i>
                            {"まとめ"}
                        </a>
                    </li>
                    <li >
                        <a href="#sec15" className={active === "sec15" ? "nav-a active" : "nav-a"} aria-current={active === "sec15" ? "location" : undefined} onClick={() => setIsOpen(false)}>
                            <span className="n-num">
                                {"15"}
                            </span>
                            <i className="ti ti-link">

                            </i>
                            {"参考文献"}
                        </a>
                    </li>
                </ul>
            </nav>
            <button type="button" className={isOpen ? 'sidebar-scrim open' : 'sidebar-scrim'} aria-label="メニューを閉じる" aria-hidden={!isOpen} tabIndex={-1} onClick={() => setIsOpen(false)} />
            {children}
        </div>
    </>;
}
