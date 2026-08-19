'use client';

import React, { useEffect, useState } from 'react';

interface TocLink {
    id: string;
    label: string;
    subLinks?: { id: string; label: string }[];
}

const TOC_ITEMS: TocLink[] = [
    { id: 'overview', label: '0. 位置づけと注意事項' },
    { id: 'structure', label: '1. 章の全体構造' },
    {
        id: 'sec-2-1',
        label: '2.1 伝統的手法との違い',
        subLinks: [
            { id: 's211', label: '2.1.1 テストと開発活動' },
            { id: 's212', label: '2.1.2 作業成果物' },
            { id: 's213', label: '2.1.3 テストレベル' },
            { id: 's214', label: '2.1.4 構成管理' },
            { id: 's215', label: '2.1.5 独立性の選択肢' },
        ],
    },
    {
        id: 'sec-2-2',
        label: '2.2 状況の伝達',
        subLinks: [
            { id: 's221', label: '2.2.1 ステータス伝達' },
            { id: 's222', label: '2.2.2 リグレッション管理' },
        ],
    },
    {
        id: 'sec-2-3',
        label: '2.3 役割とスキル',
        subLinks: [
            { id: 's231', label: '2.3.1 求められるスキル' },
            { id: 's232', label: '2.3.2 チームでの役割' },
        ],
    },
    { id: 'summary', label: '3. 章のまとめ' },
    { id: 'references', label: '4. 参考文献' },
];

export default function NavBar() {
    const [activeId, setActiveId] = useState<string>('overview');
    const [doneIds, setDoneIds] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const topLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.toc-link[data-target]'));
        const sections = topLinks
            .map((link) => {
                const target = link.dataset.target;
                return { id: target, el: target ? document.getElementById(target) : null };
            })
            .filter((entry): entry is { id: string; el: HTMLElement } => entry.el !== null);

        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight * 0.35;
            let currentIdx = 0;

            sections.forEach((entry, i) => {
                if (entry.el.offsetTop <= scrollPos) {
                    currentIdx = i;
                }
            });

            const current = sections[currentIdx]?.id || 'overview';
            setActiveId(current);

            const completed = sections.slice(0, currentIdx).map((s) => s.id);
            setDoneIds(completed);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                type="button"
                className="mobile-toc-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="目次を開閉"
            >
                {isOpen ? '✕ 閉じる' : '☰ 目次'}
            </button>

            <nav className={`sidebar ${isOpen ? 'is-open' : ''}`} aria-label="目次">
                <div className="sidebar-brand">CTFL-AT ・ Chapter 2</div>
                <ul className="toc-list">
                    {TOC_ITEMS.map((item) => {
                        const isDone = doneIds.includes(item.id);
                        const isActive = activeId === item.id;
                        const statusClass = isDone ? 'is-done' : isActive ? 'is-active' : '';

                        return (
                            <li key={item.id} className="toc-item">
                                <a
                                    className={`toc-link ${statusClass}`}
                                    href={`#${item.id}`}
                                    data-target={item.id}
                                    onClick={handleLinkClick}
                                >
                                    <span className="status-dot" />
                                    {item.label}
                                </a>

                                {item.subLinks && (
                                    <ul className="toc-sub">
                                        {item.subLinks.map((sub) => {
                                            const isSubActive = activeId === sub.id;
                                            return (
                                                <li key={sub.id}>
                                                    <a
                                                        className={`toc-link ${isSubActive ? 'is-active' : ''}`}
                                                        href={`#${sub.id}`}
                                                        data-target={sub.id}
                                                        onClick={handleLinkClick}
                                                    >
                                                        {sub.label}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="sidebar-legend">
                    <div className="legend-row">
                        <span className="status-dot" style={{ background: 'var(--status-done)' }} />
                        読了済み
                    </div>
                    <div className="legend-row">
                        <span className="status-dot" style={{ background: 'var(--status-current)' }} />
                        閲覧中
                    </div>
                    <div className="legend-row">
                        <span className="status-dot" style={{ background: 'var(--status-todo)' }} />
                        未読
                    </div>
                </div>
            </nav>
        </>
    );
}
