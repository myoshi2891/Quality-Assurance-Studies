'use client';

import React, { useState, useEffect, useRef } from 'react';

interface NavSubItem {
    href: string;
    label: string;
}

interface NavItem {
    href: string;
    label: string;
    sub: NavSubItem[];
}

const NAV_ITEMS: NavItem[] = [
    {
        href: '#0-このガイドについて',
        label: '0. このガイドについて',
        sub: [
            { href: '#01-なぜ第3章が重要なのか', label: '0.1 なぜ第3章が重要なのか' },
            { href: '#02-試験の全体像', label: '0.2 試験の全体像' },
            { href: '#03-本ガイドの読み方', label: '0.3 本ガイドの読み方' },
            { href: '#04-kレベル認知レベルバッジの見方', label: '0.4 Kレベル(認知レベル)バッジの見方' },
        ],
    },
    {
        href: '#1-第3章の全体構造--4分類のテスト技法',
        label: '1. 第3章の全体構造 — 4分類のテスト技法',
        sub: [
            { href: '#11-用語集キーワードk1レベル', label: '1.1 用語集(キーワード・K1レベル)' },
        ],
    },
    {
        href: '#2-31-データベースドテスト技法data-based-test-techniques',
        label: '2. 3.1 データベースドテスト技法(Data-Based Test Techniques)',
        sub: [
            { href: '#21-311-ドメインテストdomain-testing-k3-適用', label: '2.1 3.1.1 ドメインテスト(Domain Testing) K3: 適用' },
            { href: '#22-312-組み合わせテストcombinatorial-testing-k3-適用', label: '2.2 3.1.2 組み合わせテスト(Combinatorial Testing) K3: 適用' },
            { href: '#23-313-ランダムテストrandom-testing-k2-理解', label: '2.3 3.1.3 ランダムテスト(Random Testing) K2: 理解' },
        ],
    },
    {
        href: '#3-32-ビヘイビアベーステスト技法behavior-based-test-techniques',
        label: '3. 3.2 ビヘイビアベーステスト技法(Behavior-Based Test Techniques)',
        sub: [
            { href: '#31-321-crudテストcrud-testing-k2-理解', label: '3.1 3.2.1 CRUDテスト(CRUD Testing) K2: 理解' },
            { href: '#32-322-状態遷移テストstate-transition-testing-k3-適用', label: '3.2 3.2.2 状態遷移テスト(State Transition Testing) K3: 適用' },
            { href: '#33-323-シナリオベーステストscenario-based-testing-k3-適用', label: '3.3 3.2.3 シナリオベーステスト(Scenario-Based Testing) K3: 適用' },
        ],
    },
    {
        href: '#4-33-ルールベーステスト技法rule-based-test-techniques',
        label: '4. 3.3 ルールベーステスト技法(Rule-Based Test Techniques)',
        sub: [
            { href: '#41-331-デシジョンテーブルテストdecision-table-testing-k3-適用', label: '4.1 3.3.1 デシジョンテーブルテスト(Decision Table Testing) K3: 適用' },
            { href: '#42-332-メタモルフィックテストmetamorphic-testing-k3-適用', label: '4.2 3.3.2 メタモルフィックテスト(Metamorphic Testing) K3: 適用' },
        ],
    },
    {
        href: '#5-34-経験ベーステストexperience-based-testing',
        label: '5. 3.4 経験ベーステスト(Experience-Based Testing)',
        sub: [
            { href: '#51-341-テストチャーターtest-charters-supporting-session-based-testing-k3-適用', label: '5.1 3.4.1 テストチャーター(Test Charters Supporting Session-Based Testing) K3: 適用' },
            { href: '#52-342-チェックリストベーステストchecklists-supporting-experience-based-test-techniques-k3-適用', label: '5.2 3.4.2 チェックリストベーステスト(Checklists Supporting Experience-Based Test Techniques) K3: 適用' },
            { href: '#53-343-クラウドテストcrowd-testing-k2-理解', label: '5.3 3.4.3 クラウドテスト(Crowd Testing) K2: 理解' },
        ],
    },
    {
        href: '#6-35-最適なテスト技法の適用applying-the-most-appropriate-test-techniques',
        label: '6. 3.5 最適なテスト技法の適用(Applying the Most Appropriate Test Techniques)',
        sub: [
            { href: '#61-351-製品リスクを軽減する技法の選定-k4-分析', label: '6.1 3.5.1 製品リスクを軽減する技法の選定 K4: 分析' },
            { href: '#62-352-テスト設計自動化の利点とリスク-k2-理解', label: '6.2 3.5.2 テスト設計自動化の利点とリスク K2: 理解' },
        ],
    },
    {
        href: '#7-学習目標learning-objectives一覧表',
        label: '7. 学習目標(Learning Objectives)一覧表',
        sub: [],
    },
    {
        href: '#8-章末チェックリスト自己診断用',
        label: '8. 章末チェックリスト(自己診断用)',
        sub: [],
    },
    {
        href: '#9-v31からv40への主な変更点参考',
        label: '9. v3.1からv4.0への主な変更点(参考)',
        sub: [],
    },
    {
        href: '#10-参考文献出典url',
        label: '10. 参考文献・出典URL',
        sub: [
            { href: '#公式istqb資料', label: '公式ISTQB®資料' },
            { href: '#国際規格標準', label: '国際規格・標準' },
            { href: '#学術文献技術資料本文中で言及されたもの', label: '学術文献・技術資料(本文中で言及されたもの)' },
            { href: '#非公式ながら参考になる解説記事数値見解は公式シラバスで必ず裏取りしてください', label: '非公式ながら参考になる解説記事(数値・見解は公式シラバスで必ず裏取りしてください)' },
        ],
    },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);
    const [activeId, setActiveId] = useState('0-このガイドについて');

    useEffect(() => {
        const allHrefs = NAV_ITEMS.flatMap((item) => [
            item.href.replace('#', ''),
            ...item.sub.map((s) => s.href.replace('#', '')),
        ]);

        const visibility = new Map<Element, boolean>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    visibility.set(entry.target, entry.isIntersecting);
                });

                const visible = Array.from(visibility.entries())
                    .filter(([, isVisible]) => isVisible)
                    .map(([el]) => el);
                if (!visible.length) return;

                const topMost = visible.reduce((a, b) =>
                    a.getBoundingClientRect().top <= b.getBoundingClientRect().top ? a : b
                );
                setActiveId(topMost.id);
            },
            {
                rootMargin: '-80px 0px -60% 0px',
                threshold: [0, 0.2, 0.5],
            }
        );

        allHrefs.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleLinkClick = () => {
        if (!isOpen) return;
        setIsOpen(false);
        if (toggleRef.current) {
            toggleRef.current.focus();
        }
    };

    return (
        <>
            <button
                ref={toggleRef}
                className={`sidebar-toggle ${isOpen ? 'active' : ''}`}
                aria-label={isOpen ? '目次を閉じる' : '目次を開く'}
                aria-expanded={isOpen}
                aria-controls="chapter3-sidebar"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="toggle-icon" aria-hidden="true">
                    {isOpen ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </span>
                <span className="toggle-label">{isOpen ? '閉じる' : '目次'}</span>
            </button>

            <div
                className={`sidebar-scrim ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />

            <nav
                id="chapter3-sidebar"
                className={`sidebar ${isOpen ? 'open' : ''}`}
                aria-label="第3章 目次"
            >
                <div className="sidebar-brand">
                    <span className="kicker">ISTQB CTAL-TA v4.0</span>
                    <span className="title">第3章 テスト分析・設計</span>
                </div>
                <ul className="nav-list">
                    {NAV_ITEMS.map((item) => {
                        const targetId = item.href.replace('#', '');
                        const isActive = activeId === targetId;
                        return (
                            <li key={item.href} className="nav-h2-item">
                                <a
                                    href={item.href}
                                    className={`nav-h2 ${isActive ? 'active' : ''}`}
                                    onClick={handleLinkClick}
                                >
                                    {item.label}
                                </a>
                                {item.sub.length > 0 && (
                                    <ul className="nav-sub">
                                        {item.sub.map((subItem) => {
                                            const subTargetId = subItem.href.replace('#', '');
                                            const isSubActive = activeId === subTargetId;
                                            return (
                                                <li key={subItem.href} className="nav-h3">
                                                    <a
                                                        href={subItem.href}
                                                        className={isSubActive ? 'active' : ''}
                                                        onClick={handleLinkClick}
                                                    >
                                                        {subItem.label}
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
            </nav>
        </>
    );
}
