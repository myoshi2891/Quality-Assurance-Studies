'use client';

import React, { useEffect, useState } from 'react';

export default function NavBar() {
    const [active, setActive] = useState('sec-0');
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) setActive(entry.target.id);
            }
        }, { rootMargin: '-20% 0px -70% 0px' });
        document.querySelectorAll('.ctal-tae-ch5-page section[id]').forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);
    return <aside className="sidebar">
        <div className="brand">
            <svg className="brand-seal" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="24" cy="24" r="22" fill="none" stroke="#2E3F72" strokeWidth="2">
                </circle>
                <circle cx="24" cy="24" r="17" fill="#EEF1F8" stroke="#B8802A" strokeWidth="1.5">
                </circle>
                <text x="24" y="21" textAnchor="middle" fontFamily="'Source Serif 4', serif" fontSize="9.5" fontWeight="700" fill="#2E3F72">
                    {" CTAL "}
                </text>
                <text x="24" y="33" textAnchor="middle" fontFamily="'Source Serif 4', serif" fontSize="9.5" fontWeight="700" fill="#B8802A">
                    {" TAE "}
                </text>
            </svg>
            <div className="brand-text">
                <div className="brand-title">
                    {"CTAL‑TAE v2.0"}
                </div>
                <div className="brand-subtitle">
                    {"Chapter 5 解説ガイド"}
                </div>
            </div>
        </div>
        <nav className="nav">
            <a className={`nav-link${active === "sec-0" ? " active" : ""}`} href="#sec-0" data-target="sec-0" aria-current={active === "sec-0" ? "location" : undefined} onClick={() => setActive("sec-0")}>
                <span className="nav-badge">
                    {"0"}
                </span>
                <span>
                    {"この章で学ぶこと"}
                </span>
            </a>
            <a className={`nav-link${active === "sec-1" ? " active" : ""}`} href="#sec-1" data-target="sec-1" aria-current={active === "sec-1" ? "location" : undefined} onClick={() => setActive("sec-1")}>
                <span className="nav-badge">
                    {"1"}
                </span>
                <span>
                    {"5.1.1 テストレベルの適用"}
                </span>
            </a>
            <a className={`nav-link${active === "sec-2" ? " active" : ""}`} href="#sec-2" data-target="sec-2" aria-current={active === "sec-2" ? "location" : undefined} onClick={() => setActive("sec-2")}>
                <span className="nav-badge">
                    {"2"}
                </span>
                <span>
                    {"5.1.2 構成管理"}
                </span>
            </a>
            <a className={`nav-link${active === "sec-3" ? " active" : ""}`} href="#sec-3" data-target="sec-3" aria-current={active === "sec-3" ? "location" : undefined} onClick={() => setActive("sec-3")}>
                <span className="nav-badge">
                    {"3"}
                </span>
                <span>
                    {"5.1.3 APIとコントラクトテスト"}
                </span>
            </a>
            <a className={`nav-link${active === "sec-4" ? " active" : ""}`} href="#sec-4" data-target="sec-4" aria-current={active === "sec-4" ? "location" : undefined} onClick={() => setActive("sec-4")}>
                <span className="nav-badge">
                    {"4"}
                </span>
                <span>
                    {"統合フロー図"}
                </span>
            </a>
            <a className={`nav-link${active === "sec-5" ? " active" : ""}`} href="#sec-5" data-target="sec-5" aria-current={active === "sec-5" ? "location" : undefined} onClick={() => setActive("sec-5")}>
                <span className="nav-badge">
                    {"5"}
                </span>
                <span>
                    {"学習目標チェックリスト"}
                </span>
            </a>
            <a className={`nav-link${active === "sec-6" ? " active" : ""}`} href="#sec-6" data-target="sec-6" aria-current={active === "sec-6" ? "location" : undefined} onClick={() => setActive("sec-6")}>
                <span className="nav-badge">
                    {"6"}
                </span>
                <span>
                    {"参考・出典"}
                </span>
            </a>
        </nav>
        <div className="sidebar-foot">
            {" ISTQB® CTAL‑TAE v2.0"}<br />
            <a href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf" target="_blank" rel="noopener noreferrer">
                {"公式シラバス（PDF）"}
            </a>
        </div>
    </aside>;
}
