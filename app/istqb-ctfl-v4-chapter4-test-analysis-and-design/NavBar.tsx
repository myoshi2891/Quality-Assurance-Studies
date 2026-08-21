'use client';

import React, { useEffect, useState } from 'react';

interface NavItem {
    id: string;
    label: string;
    level: 2 | 3;
}

const NAV_ITEMS: NavItem[] = [
    { id: 'sec-0', label: '0. 章の全体像', level: 2 },
    { id: 'sec-1', label: '4.1 テスト技法の全体像', level: 2 },
    { id: 'sec-2', label: '4.2 ブラックボックス技法', level: 2 },
    { id: 'sec-2-1', label: '4.2.1 同値分割法', level: 3 },
    { id: 'sec-2-2', label: '4.2.2 境界値分析', level: 3 },
    { id: 'sec-2-3', label: '4.2.3 デシジョンテーブルテスト', level: 3 },
    { id: 'sec-2-4', label: '4.2.4 状態遷移テスト', level: 3 },
    { id: 'sec-3', label: '4.3 ホワイトボックス技法', level: 2 },
    { id: 'sec-3-1', label: '4.3.1 ステートメントテスト', level: 3 },
    { id: 'sec-3-2', label: '4.3.2 分岐テスト', level: 3 },
    { id: 'sec-3-3', label: '4.3.3 WBテストの価値', level: 3 },
    { id: 'sec-4', label: '4.4 経験ベースの技法', level: 2 },
    { id: 'sec-4-1', label: '4.4.1 エラー推測', level: 3 },
    { id: 'sec-4-2', label: '4.4.2 探索的テスト', level: 3 },
    { id: 'sec-4-3', label: '4.4.3 チェックリストベースド', level: 3 },
    { id: 'sec-5', label: '4.5 コラボレーションベース', level: 2 },
    { id: 'sec-5-1', label: '4.5.1 ユーザーストーリー共同作成', level: 3 },
    { id: 'sec-5-2', label: '4.5.2 受け入れ基準', level: 3 },
    { id: 'sec-5-3', label: '4.5.3 ATDD', level: 3 },
    { id: 'sec-6', label: '6. 技法選択の指針', level: 2 },
    { id: 'sec-7', label: '7. 試験対策のポイント', level: 2 },
    { id: 'sec-8', label: '8. まとめ', level: 2 },
    { id: 'sec-refs', label: '参考文献・URL一覧', level: 2 },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('sec-0');

    useEffect(() => {
        const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
            (el): el is HTMLElement => el !== null
        );

        const observer = new IntersectionObserver(
            (entries) => {
                // 交差中のうち最も上にあるセクションを選ぶ（entries の順序は保証されないため）
                let bestEntry: IntersectionObserverEntry | null = null;
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    if (!bestEntry || entry.boundingClientRect.top < bestEntry.boundingClientRect.top) {
                        bestEntry = entry;
                    }
                });

                if (bestEntry) {
                    setActiveId((bestEntry as IntersectionObserverEntry).target.id);
                }
            },
            { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        const element = document.getElementById(id);
        if (!element) return;

        event.preventDefault();
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        // preventDefault でアンカー遷移を止めるため、URL のフラグメントを手動で同期する
        window.history.pushState(null, '', `#${id}`);
        setActiveId(id);
        setIsOpen(false);
    };

    return (
        <>
            <button
                type="button"
                className="nav-toggle"
                id="navToggle"
                aria-label={isOpen ? '目次を閉じる' : '目次を開く'}
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
            </button>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar" aria-label="目次">
                <div className="brand">
                    <div className="brand-eyebrow">ISTQB® CTFL v4.0</div>
                    <div className="brand-title">
                        第4章<br />テスト分析・設計
                    </div>
                    <div className="brand-sub">Test Analysis and Design</div>
                </div>
                <div className="nav-group">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            className={`nav-link level-${item.level}${activeId === item.id ? ' active' : ''}`}
                            href={`#${item.id}`}
                            aria-current={activeId === item.id ? 'location' : undefined}
                            onClick={(event) => handleLinkClick(event, item.id)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
}
