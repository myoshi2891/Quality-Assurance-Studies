'use client';

import React, { useEffect, useRef, useState } from 'react';

interface NavItem {
    id: string;
    label: string;
    isSub?: boolean;
    badge?: string;
}

interface NavGroup {
    label?: string;
    items: NavItem[];
}

const NAV_GROUPS: NavGroup[] = [
    {
        items: [
            { id: 'pos', label: '0. この章の位置づけ' },
            { id: 'lo', label: '1. 学習目標' },
        ],
    },
    {
        label: '6.1 テストツールによる支援',
        items: [
            { id: 's61-1', label: '2.1 テストツールとは', isSub: true },
            { id: 's61-2', label: '2.2 9カテゴリ分類', isSub: true },
            { id: 's61-3', label: '2.3 プロセスとの関係図', isSub: true },
            { id: 's61-4', label: '2.4 現在のツール例', isSub: true },
            { id: 's61-5', label: '2.5 プローブ効果', isSub: true },
        ],
    },
    {
        label: '6.2 利点とリスク',
        items: [
            { id: 's62-1', label: '3.1 導入の大前提', isSub: true },
            { id: 's62-2', label: '3.2 利点', isSub: true },
            { id: 's62-3', label: '3.3 リスク', isSub: true },
            { id: 's62-4', label: '3.4 構造的理解', isSub: true },
        ],
    },
    {
        label: '実務補足: ツール種別ごとの考慮事項',
        items: [
            { id: 's623-1', label: '4.1 テスト実行ツール', isSub: true },
            { id: 's623-2', label: '4.2 静的解析ツール', isSub: true },
            { id: 's623-3', label: '4.3 テスト管理ツール', isSub: true },
        ],
    },
    {
        items: [
            { id: 's5', label: '5. 実務補足：導入プロセス' },
            { id: 'summary', label: '6. 章のまとめ' },
            { id: 'quiz', label: '7. 演習問題' },
            { id: 'refs', label: '8. 参照URL一覧' },
        ],
    },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('pos');
    const toggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const allItems = NAV_GROUPS.flatMap((g) => g.items);
        const sections = allItems
            .map((item) => document.getElementById(item.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                let bestEntry: IntersectionObserverEntry | null = null;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (
                            !bestEntry ||
                            entry.boundingClientRect.top < bestEntry.boundingClientRect.top
                        ) {
                            bestEntry = entry;
                        }
                    }
                });

                if (bestEntry) {
                    setActiveId((bestEntry as IntersectionObserverEntry).target.id);
                }
            },
            { rootMargin: '-10% 0px -70% 0px', threshold: [0, 1] }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveId(id);
            // メニューを閉じる前にトグルへフォーカスを戻す。
            // 閉じた瞬間にリンクが DOM から消え、フォーカスが body へ飛ぶのを防ぐ
            if (isOpen) {
                toggleRef.current?.focus({ preventScroll: true });
            }
            setIsOpen(false);
            window.history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <>
            <button
                ref={toggleRef}
                type="button"
                className="mobile-nav-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? '目次を閉じる' : '目次を開く'}
                aria-expanded={isOpen}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {isOpen ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
                <span>目次</span>
            </button>

            <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
                <div className="brand">
                    <span className="brand-icon">🛠️</span>
                    <div className="brand-text">
                        <div className="t1">ISTQB CTFL v4.0</div>
                        <div className="t2">Chapter 6: テストツール</div>
                    </div>
                </div>

                {NAV_GROUPS.map((group, gIdx) => (
                    <div key={`group-${gIdx}`} className="nav-group-wrapper">
                        {group.label && <div className="nav-label">{group.label}</div>}
                        <div className="nav-group">
                            {group.items.map((item) => {
                                const isActive = activeId === item.id;
                                return (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`nav-link ${item.isSub ? 'nav-sub' : ''} ${
                                            isActive ? 'active' : ''
                                        }`}
                                        data-target={item.id}
                                        onClick={(e) => handleScrollTo(e, item.id)}
                                        aria-current={isActive ? 'location' : undefined}
                                    >
                                        <span className="nav-link-bullet"></span>
                                        <span className="nav-link-text">{item.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </aside>
        </>
    );
}
