'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
    { id: 'overview', label: '概要' },
    { id: 'ch1', label: 'Ch.1 要件' },
    { id: 'ch2-tdd', label: 'Ch.2 TDD' },
    { id: 'ch2-bdd', label: 'BDD' },
    { id: 'ch2-atdd', label: 'ATDD' },
    { id: 'ch2-exp', label: '探索的' },
    { id: 'ch2-quality', label: '品質' },
    { id: 'ch3', label: 'Ch.3 自動化' },
    { id: 'ch4-ci', label: 'Ch.4 CI/CD' },
    { id: 'ch4-sv', label: '仮想化' },
    { id: 'exam', label: '試験対策' },
    { id: 'refs', label: '参考文献' },
] as const;

type NavId = (typeof NAV_ITEMS)[number]['id'];

const NAV_ID_SET = new Set<NavId>(NAV_ITEMS.map((item) => item.id));

function isNavId(id: string): id is NavId {
    return NAV_ID_SET.has(id as NavId);
}

export default function NavBar() {
    const [activeSection, setActiveSection] = useState<NavId | ''>('');

    // URL ハッシュによるディープリンク時の初期ハイライト
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (isNavId(hash)) {
            setActiveSection(hash);
        }
    }, []);

    useEffect(() => {
        const root = document.querySelector('.istqb-ctal-att');
        const sections = root
            ? root.querySelectorAll('section[id]')
            : document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                const intersectingEntries = entries
                    .filter((entry) => entry.isIntersecting && isNavId(entry.target.id))
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                const first = intersectingEntries[0];
                if (first !== undefined && isNavId(first.target.id)) {
                    setActiveSection(first.target.id);
                }
            },
            {
                rootMargin: '-60px 0px -60% 0px',
            },
        );

        sections.forEach((section) => {
            if (isNavId(section.id)) observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav className="nav-bar">
            <div className="nav-inner">
                <span className="nav-brand">CTAL-ATT</span>
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`nav-link${activeSection === item.id ? ' active' : ''}`}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
