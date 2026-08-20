'use client';

import React, { useEffect, useState } from 'react';

interface TocSubLink {
    id: string;
    label: string;
}

interface TocLink {
    id: string;
    num: string;
    label: string;
    subLinks?: TocSubLink[];
}

const TOC_ITEMS: TocLink[] = [
    {
        id: '0-chapter-3',
        num: '01',
        label: '0. Chapter 3 の全体マップ',
    },
    {
        id: '31-tddatddbdd',
        num: '02',
        label: '3.1 アジャイルテスト手法(TDD・ATDD・BDD)',
        subLinks: [
            { id: '310-3', label: '3.1.0 なぜ3つも「駆動開発」があるのか' },
            { id: '311-test-driven-development-tdd', label: '3.1.1 Test-Driven Development (TDD)' },
            { id: '312-acceptance-test-driven-development-atdd', label: '3.1.2 Acceptance Test-Driven Development (ATDD)' },
            { id: '313-behavior-driven-development-bdd', label: '3.1.3 Behavior-Driven Development (BDD)' },
            { id: '314-tddatddbdd1', label: '3.1.4 TDD・ATDD・BDDの関係性を1枚で理解する' },
        ],
    },
    {
        id: '32',
        num: '03',
        label: '3.2 品質リスクの評価とテスト工数の見積り',
        subLinks: [
            { id: '321', label: '3.2.1 アジャイルプロジェクトにおける品質リスク評価' },
            { id: '322', label: '3.2.2 内容とリスクに基づくテスト工数の見積り' },
        ],
    },
    {
        id: '33',
        num: '04',
        label: '3.3 アジャイルプロジェクトにおける技法',
        subLinks: [
            { id: '331-testing-quadrants', label: '3.3.1 テスティング・クアドラント(Testing Quadrants)' },
            { id: '332', label: '3.3.2 非機能テストと技術的負債の考慮' },
            { id: '333', label: '3.3.3 リグレッションテストとテスト自動化ピラミッド' },
            { id: '334-exploratory-testing', label: '3.3.4 探索的テスト(Exploratory Testing)' },
        ],
    },
    {
        id: '34',
        num: '05',
        label: '3.4 アジャイルにおけるツール',
        subLinks: [
            { id: '341-task-management-and-tracking-tools', label: '3.4.1 タスク管理・追跡ツール' },
            { id: '342-communication-and-information-sharing-tools', label: '3.4.2 コミュニケーション・情報共有ツール' },
            { id: '343-software-build-and-distribution-tools', label: '3.4.3 ソフトウェアビルド・配布ツール' },
            { id: '344-configuration-management-tools', label: '3.4.4 構成管理ツール' },
            { id: '345-test-design-implementation-and-execution-tools', label: '3.4.5 テスト設計・実装・実行ツール' },
            { id: '346-cloud-computing-and-virtualization-tools', label: '3.4.6 クラウドコンピューティング・仮想化ツール' },
        ],
    },
    {
        id: '4-chapter-3',
        num: '06',
        label: '4. Chapter 3 全体の振り返り',
    },
    {
        id: '5-k-',
        num: '07',
        label: '5. 学習チェックリスト(K-レベル別)',
    },
    {
        id: '6',
        num: '08',
        label: '6. 実践演習(サンプル問題)',
    },
    {
        id: '7-url',
        num: '09',
        label: '7. 参考文献・URL一覧(節ごとの一次情報源)',
    },
    {
        id: '8',
        num: '10',
        label: '8. 次のステップ',
    },
];

export default function NavBar() {
    const [activeId, setActiveId] = useState<string>('0-chapter-3');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        // TOC_ITEMS を単一の情報源として監視対象 ID を導出する（手書きリストとの乖離を防ぐ）
        const observeIds: string[] = TOC_ITEMS.flatMap((item) => [
            item.id,
            ...(item.subLinks?.map((sub) => sub.id) ?? []),
        ]);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0px -75% 0px', threshold: 0 }
        );

        observeIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                type="button"
                className="sidebar-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="目次を開閉"
                aria-expanded={isOpen}
            >
                {isOpen ? '✕' : '☰'}
            </button>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`} aria-label="目次">
                <div className="sidebar__brand">
                    <span className="sidebar__brand-mark">CTFL-AT</span>
                    <span className="sidebar__brand-name">Chapter 3</span>
                </div>
                <p className="sidebar__tagline">
                    アジャイルテスト技法とツール<br />実践解説ガイド &middot; 目次
                </p>
                <ul className="toc">
                    {TOC_ITEMS.map((item) => {
                        const isSubActive = item.subLinks?.some((sub) => sub.id === activeId);
                        const isMainActive = activeId === item.id || isSubActive;

                        return (
                            <li key={item.id} className="toc__h2">
                                <a
                                    href={`#${item.id}`}
                                    className={activeId === item.id || (!item.subLinks && isMainActive) ? 'active' : ''}
                                    aria-current={activeId === item.id ? 'location' : undefined}
                                    onClick={handleLinkClick}
                                >
                                    <span className="toc__num">{item.num}</span>
                                    <span>{item.label}</span>
                                </a>
                                {item.subLinks && (
                                    <ul className="toc__sub">
                                        {item.subLinks.map((sub) => (
                                            <li key={sub.id}>
                                                <a
                                                    href={`#${sub.id}`}
                                                    className={activeId === sub.id ? 'active' : ''}
                                                    aria-current={activeId === sub.id ? 'location' : undefined}
                                                    onClick={handleLinkClick}
                                                >
                                                    {sub.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
