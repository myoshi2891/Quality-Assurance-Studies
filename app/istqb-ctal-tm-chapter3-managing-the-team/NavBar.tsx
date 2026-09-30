'use client';

import React, { useEffect, useState } from 'react';

interface NavItem {
    id: string;
    text: string;
    level: 2 | 3;
}

const NAV_ITEMS: NavItem[] = [
    { id: '0-この文書の読み方と根拠の確度', text: '0. この文書の読み方と「根拠の確度」', level: 2 },
    { id: '1-第3章の全体像', text: '1. 第3章の全体像', level: 2 },
    { id: '11-章の基本情報', text: '1.1 章の基本情報（🟢）', level: 3 },
    { id: '12-全体マップ', text: '1.2 全体マップ', level: 3 },
    { id: '13-学習の進め方ステップバイステップ', text: '1.3 学習の進め方（ステップバイステップ）', level: 3 },
    { id: '2-31-テストチームthe-test-team', text: '2. 3.1 テストチーム（The Test Team）', level: 2 },
    { id: '20-前提となる用語', text: '2.0 前提となる用語（🟢）', level: 3 },
    { id: '21-311-4つの能力領域における典型的なスキル', text: '2.1 3.1.1 4つの能力領域における典型的なスキル（🟡）', level: 3 },
    { id: '22-312-必要なテストチームメンバーのスキルの分析', text: '2.2 3.1.2 必要なテストチームメンバーのスキルの分析（🟡＋🟢）', level: 3 },
    { id: '23-313-テストチームメンバーのスキルの評価', text: '2.3 3.1.3 テストチームメンバーのスキルの評価（🟡）', level: 3 },
    { id: '24-314-テストチームメンバーのスキルの育成', text: '2.4 3.1.4 テストチームメンバーのスキルの育成（🟡）', level: 3 },
    { id: '25-315-テストチームの管理に必要なマネジメントスキル', text: '2.5 3.1.5 テストチームの管理に必要なマネジメントスキル（🟡）', level: 3 },
    { id: '26-316-特定の状況におけるテストチームの動機付け要因と意欲低下要因', text: '2.6 3.1.6 特定の状況におけるテストチームの動機付け要因と意欲低下要因（🟡）', level: 3 },
    { id: '3-32-ステークホルダーとの関係stakeholder-relationships', text: '3. 3.2 ステークホルダーとの関係（Stakeholder Relationships）', level: 2 },
    { id: '31-321-品質コストcost-of-quality用語は-istqb-用語集に準拠', text: '3.1 3.2.1 品質コスト（Cost of Quality）（🟡、用語は ISTQB 用語集に準拠）', level: 3 },
    { id: '32-322-テストの費用対効果の関係cost-benefit-relationship-of-testing', text: '3.2 3.2.2 テストの費用対効果の関係（Cost-benefit Relationship of Testing）（🟡）', level: 3 },
    { id: '4-第1章第2章とのつながり', text: '4. 第1章・第2章とのつながり（🟢）', level: 2 },
    { id: '5-試験対策', text: '5. 試験対策', level: 2 },
    { id: '51-押さえるべきポイント', text: '5.1 押さえるべきポイント', level: 3 },
    { id: '52-想定問題本ガイド作成者による練習問題', text: '5.2 想定問題（本ガイド作成者による練習問題）', level: 3 },
    { id: '53-覚え方', text: '5.3 覚え方', level: 3 },
    { id: '6-ベストプラクティス総まとめ', text: '6. ベストプラクティス総まとめ', level: 2 },
    { id: '7-アンチパターン集', text: '7. アンチパターン集', level: 2 },
    { id: '8-学習チェックリスト', text: '8. 学習チェックリスト', level: 2 },
    { id: '9-出典', text: '9. 出典', level: 2 },
    { id: '91-公式一次情報', text: '9.1 公式（一次情報）', level: 3 },
    { id: '92-日本語版jstqb', text: '9.2 日本語版（JSTQB）', level: 3 },
    { id: '93-発展学習', text: '9.3 発展学習', level: 3 },
    { id: '94-本ガイドの根拠の限界再掲', text: '9.4 本ガイドの根拠の限界（再掲）', level: 3 },
];

export default function NavBar() {
    const [activeId, setActiveId] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const headingElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
                (el): el is HTMLElement => el !== null,
            );

            const scrollPosition = window.scrollY + 100;

            for (let i = headingElements.length - 1; i >= 0; i--) {
                const el = headingElements[i];
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveId(el.id);
                    return;
                }
            }
            const first = headingElements[0];
            if (first && window.scrollY < first.offsetTop) {
                setActiveId(first.id);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => setIsOpen((prev) => !prev);
    const closeSidebar = () => setIsOpen(false);

    // グループ化して nav-list と nav-sublist を形成
    const navStructure: { parent: NavItem; children: NavItem[] }[] = [];
    let currentParent: { parent: NavItem; children: NavItem[] } | null = null;

    NAV_ITEMS.forEach((item) => {
        if (item.level === 2) {
            currentParent = { parent: item, children: [] };
            navStructure.push(currentParent);
        } else if (item.level === 3 && currentParent) {
            currentParent.children.push(item);
        }
    });

    return (
        <>
            <button
                type="button"
                className="sidebar-toggle"
                onClick={toggleSidebar}
                aria-label="メニューを開く"
                aria-expanded={isOpen}
            >
                ☰
            </button>
            <div
                className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
                onClick={closeSidebar}
                aria-hidden="true"
            />
            <nav className={`sidebar-nav ${isOpen ? 'open' : ''}`} aria-label="ページ内目次">
                <div className="sidebar-brand">
                    <span className="brand-mark">CTAL-TM</span>
                    <span className="brand-sub">第3章 チームの管理</span>
                </div>
                <ul className="nav-list">
                    {navStructure.map((group) => (
                        <li key={group.parent.id} className="nav-item">
                            <a
                                href={`#${group.parent.id}`}
                                className={`nav-link ${activeId === group.parent.id ? 'active' : ''}`}
                                data-target={group.parent.id}
                                aria-current={activeId === group.parent.id ? 'location' : undefined}
                                onClick={closeSidebar}
                            >
                                {group.parent.text}
                            </a>
                            {group.children.length > 0 && (
                                <ul className="nav-sublist">
                                    {group.children.map((child) => (
                                        <li key={child.id}>
                                            <a
                                                href={`#${child.id}`}
                                                className={`nav-sublink ${activeId === child.id ? 'active' : ''}`}
                                                data-target={child.id}
                                                aria-current={activeId === child.id ? 'location' : undefined}
                                                onClick={closeSidebar}
                                            >
                                                {child.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
