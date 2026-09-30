'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SubNavItem {
    id: string;
    title: string;
}

interface NavGroup {
    id: string;
    title: string;
    subItems: SubNavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
    {
        id: 'sec-1',
        title: '0. このガイドの使い方',
        subItems: [
            { id: 'sec-1-1', title: '0.1 Chapter 1 の位置づけ' },
            { id: 'sec-1-2', title: '0.2 試験の基本情報（ISTQB 公式ページより）' },
            { id: 'sec-1-3', title: '0.3 学習目標（Learning Objectives）と認知レベル' },
            { id: 'sec-1-4', title: '0.4 学習の進め方' },
            { id: 'sec-1-5', title: '0.5 Chapter 1 全体の関係図' },
            { id: 'sec-1-6', title: '0.6 最初に押さえる用語（Chapter 1 の基礎）' },
        ],
    },
    {
        id: 'sec-2',
        title: '1. テストプロセス（Section 1.1）',
        subItems: [
            { id: 'sec-2-1', title: '1.1 なぜこの節が重要か' },
            { id: 'sec-2-2', title: '1.2 テスト計画活動（TM-1.1.1）' },
            { id: 'sec-2-3', title: '1.3 テストのモニタリングとコントロール（TM-1.1.2）' },
            { id: 'sec-2-4', title: '1.4 テスト完了活動（TM-1.1.3）' },
        ],
    },
    {
        id: 'sec-3',
        title: '2. テストのコンテキスト（Section 1.2）',
        subItems: [
            { id: 'sec-3-1', title: '2.0 この節の要点' },
            { id: 'sec-3-2', title: '2.1 テストのステークホルダー（TM-1.2.1）' },
            { id: 'sec-3-3', title: '2.2 ステークホルダーの知識の重要性（TM-1.2.2）' },
            { id: 'sec-3-4', title: '2.3 ハイブリッド開発モデルにおけるテスト管理（TM-1.2.3）' },
            { id: 'sec-3-5', title: '2.4 SDLC モデルごとのテスト管理活動（TM-1.2.4）' },
            { id: 'sec-3-6', title: '2.5 テストレベルごとのテスト管理活動（TM-1.2.5）' },
            { id: 'sec-3-7', title: '2.6 テストタイプごとのテスト管理活動（TM-1.2.6）' },
            { id: 'sec-3-8', title: '2.7 計画・モニタリング・コントロールの管理活動（TM-1.2.7、K4）' },
        ],
    },
    {
        id: 'sec-4',
        title: '3. リスクベースドテスト（Section 1.3）',
        subItems: [
            { id: 'sec-4-1', title: '3.0 リスクベースドテスト（RBT）とは' },
            { id: 'sec-4-2', title: '3.1 リスク軽減活動としてのテスト（TM-1.3.1）' },
            { id: 'sec-4-3', title: '3.2 品質リスクの特定（TM-1.3.2）' },
            { id: 'sec-4-4', title: '3.3 品質リスクの評価（TM-1.3.3）' },
            { id: 'sec-4-5', title: '3.4 適切なテストによる品質リスクの軽減（TM-1.3.4、K4）' },
            { id: 'sec-4-6', title: '3.5 リスクベースドテストの技法（TM-1.3.5）' },
            { id: 'sec-4-7', title: '3.6 RBT の成功メトリクスと課題（TM-1.3.6）' },
        ],
    },
    {
        id: 'sec-5',
        title: '4. プロジェクトテスト戦略（Section 1.4）',
        subItems: [
            { id: 'sec-5-1', title: '4.0 前提：3 つの文書・概念の関係' },
            { id: 'sec-5-2', title: '4.1 テストアプローチの選択（TM-1.4.1）' },
            { id: 'sec-5-3', title: '4.2 組織のテスト戦略、プロジェクトのコンテキスト、その他の側面の分析（TM-1.4.2、K4）' },
            { id: 'sec-5-4', title: '4.3 テスト目的の定義（TM-1.4.3、K3）' },
        ],
    },
    {
        id: 'sec-6',
        title: '5. テストプロセスの改善（Section 1.5）',
        subItems: [
            { id: 'sec-6-1', title: '5.0 なぜテストプロセスを改善するのか' },
            { id: 'sec-6-2', title: '5.1 IDEAL モデル（TM-1.5.1）' },
            { id: 'sec-6-3', title: '5.2 モデルベースのテストプロセス改善（TM-1.5.2）' },
            { id: 'sec-6-4', title: '5.3 分析ベースのテストプロセス改善（TM-1.5.3）' },
            { id: 'sec-6-5', title: '5.4 レトロスペクティブ（TM-1.5.4、K3）' },
        ],
    },
    {
        id: 'sec-7',
        title: '6. テストツール（Section 1.6）',
        subItems: [
            { id: 'sec-7-1', title: '6.0 導入：ツールの 2 つの見方' },
            { id: 'sec-7-2', title: '6.1 ツール導入のグッドプラクティス（TM-1.6.1）' },
            { id: 'sec-7-3', title: '6.2 ツール決定に関する技術面・ビジネス面（TM-1.6.2）' },
            { id: 'sec-7-4', title: '6.3 選定プロセスの考慮事項と ROI 評価（TM-1.6.3、K4）' },
            { id: 'sec-7-5', title: '6.4 ツールのライフサイクル（TM-1.6.4）' },
            { id: 'sec-7-6', title: '6.5 ツールメトリクス（TM-1.6.5）' },
        ],
    },
    {
        id: 'sec-8',
        title: '7. Chapter 1 のまとめと試験対策',
        subItems: [
            { id: 'sec-8-1', title: '7.1 学習目標と要点の一覧' },
            { id: 'sec-8-2', title: '7.2 混同しやすいポイント' },
            { id: 'sec-8-3', title: '7.3 練習問題（本ガイド作成者によるオリジナル問題、公式問題ではありません）' },
            { id: 'sec-8-4', title: '7.4 学習チェックリスト' },
        ],
    },
    {
        id: 'sec-9',
        title: '8. 参考ソース（URL）',
        subItems: [
            { id: 'sec-9-1', title: '8.1 一次情報（公式）' },
            { id: 'sec-9-2', title: '8.2 シラバスが参照している外部情報' },
            { id: 'sec-9-3', title: '8.3 本ガイドと出典の対応' },
            { id: 'sec-9-4', title: '8.4 注意事項' },
        ],
    },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('sec-1');
    const [openGroup, setOpenGroup] = useState<string>('sec-1');
    const sidebarRef = useRef<HTMLElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleIntersect: IntersectionObserverCallback = (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    setActiveId(id);
                    // 所属するグループを特定して開く
                    for (const g of NAV_GROUPS) {
                        if (g.id === id || g.subItems.some((s) => s.id === id)) {
                            setOpenGroup(g.id);
                            break;
                        }
                    }
                }
            }
        };

        const observer = new IntersectionObserver(handleIntersect, {
            rootMargin: '-15% 0px -70% 0px',
        });

        const targets = document.querySelectorAll('.content h2[id], .content h3[id]');
        targets.forEach((target) => observer.observe(target));

        return () => observer.disconnect();
    }, []);

    const handleLinkClick = (id: string, groupId: string) => {
        setActiveId(id);
        setOpenGroup(groupId);
        if (window.innerWidth <= 960) {
            setIsOpen(false);
        }
    };

    return (
        <>
            <button
                ref={toggleRef}
                className="nav-toggle"
                id="navToggle"
                aria-controls="sidebar"
                aria-expanded={isOpen}
                aria-label="目次を開閉"
                onClick={() => setIsOpen(!isOpen)}
            >
                目次
            </button>
            {isOpen && (
                <div
                    className="scrim"
                    onClick={() => {
                        setIsOpen(false);
                        toggleRef.current?.focus();
                    }}
                />
            )}
            <nav
                ref={sidebarRef}
                className={`sidebar ${isOpen ? 'open' : ''}`}
                id="sidebar"
                aria-label="目次"
            >
                <div className="sidebar-brand">
                    <b>CTAL-TM v3.0<br />Chapter 1 テスト活動の管理</b>
                    <small>ISTQB Advanced Level Test Management</small>
                </div>
                <ul className="nav-root">
                    {NAV_GROUPS.map((group) => {
                        const isGroupActive = activeId === group.id || group.subItems.some((s) => s.id === activeId);
                        const isGroupOpen = openGroup === group.id || isGroupActive;
                        return (
                            <li
                                key={group.id}
                                className={`nav-group ${isGroupOpen ? 'open' : ''}`}
                                data-group={group.id}
                            >
                                <a
                                    className={`nav-h2 ${activeId === group.id ? 'active' : ''}`}
                                    href={`#${group.id}`}
                                    data-target={group.id}
                                    aria-current={activeId === group.id ? 'true' : undefined}
                                    onClick={() => handleLinkClick(group.id, group.id)}
                                >
                                    {group.title}
                                </a>
                                {group.subItems.length > 0 && (
                                    <ul className="nav-sub">
                                        {group.subItems.map((sub) => (
                                            <li key={sub.id}>
                                                <a
                                                    className={`nav-h3 ${activeId === sub.id ? 'active' : ''}`}
                                                    href={`#${sub.id}`}
                                                    data-target={sub.id}
                                                    aria-current={activeId === sub.id ? 'true' : undefined}
                                                    onClick={() => handleLinkClick(sub.id, group.id)}
                                                >
                                                    {sub.title}
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
