'use client';

import React, { useEffect, useState } from 'react';

interface NavLinkItem {
    id: string;
    label: string;
}

const NAV_LINKS: NavLinkItem[] = [
    { id: 'ch0', label: '0. CT-FTとは何か' },
    { id: 'ch1', label: '1. 金融業界とテスト入門' },
    { id: 'ch2', label: '2. コンプライアンステスト' },
    { id: 'ch3', label: '3. リスクベーステスト' },
    { id: 'ch4', label: '4. データテストと管理' },
    { id: 'ch5', label: '5. 機能・非機能テスト' },
    { id: 'ch6', label: '6. テスト自動化' },
    { id: 'ch7', label: '7. 学習ロードマップ' },
    { id: 'ch8', label: '8. 参考文献一覧' },
];

export default function NavBar() {
    const [activeId, setActiveId] = useState<string>('ch0');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                }
            },
            {
                rootMargin: '-15% 0px -70% 0px',
                threshold: 0,
            }
        );

        const sections = document.querySelectorAll('main section[id]');
        sections.forEach((sec) => observer.observe(sec));

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleLinkClick = (id: string) => {
        setActiveId(id);
        setIsOpen(false);
    };

    return (
        <>
            <button
                type="button"
                className="sidebar-toggle"
                aria-label="目次を開く"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '✕' : '☰'}
            </button>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar" aria-label="ページ内目次">
                <div className="sidebar-brand">ISTQB® CT-FT GUIDE</div>
                <div className="sidebar-title">
                    Finance Testing
                    <br />
                    完全ガイド
                </div>
                <ul className="nav-list">
                    {NAV_LINKS.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`nav-link ${activeId === item.id ? 'active' : ''}`}
                                aria-current={activeId === item.id ? 'location' : undefined}
                                onClick={() => handleLinkClick(item.id)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="nav-group-label">Reference</div>
                <ul className="nav-list">
                    <li>
                        <a
                            href="https://istqb.org/certifications/certified-tester-finance-testing-ct-ft/"
                            className="nav-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ISTQB公式ページ ↗
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://istqb.org/wp-content/uploads/2026/05/ISTQB-CT-FT-Syllabus-Release-v1.0.pdf"
                            className="nav-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CT-FT シラバス PDF ↗
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
