'use client';

import React, { useEffect, useState } from 'react';

export interface NavItem {
    href: string;
    text: string;
    isH3?: boolean;
}

export const NAV_LINKS: NavItem[] = [
    { href: '#0-第2章の全体像と学習目標', text: '0. 第2章の全体像と学習目標' },
    { href: '#キーワード第2章シラバス記載', text: 'キーワード（第2章シラバス記載）', isH3: true },
    { href: '#学習目標learning-objectivesとハンズオン目標hands-on-objectivesの全体マップ', text: '学習目標（Learning Objectives）とハンズオン目標（Hands-on Objectives）の全体マップ', isH3: true },
    { href: '#1-21-効果的なプロンプト開発', text: '1. 2.1 効果的なプロンプト開発' },
    { href: '#11-プロンプトの6要素構造211', text: '1.1 プロンプトの6要素構造（2.1.1）', isH3: true },
    { href: '#12-コアプロンプティング技法212', text: '1.2 コアプロンプティング技法（2.1.2）', isH3: true },
    { href: '#3つの技法の比較表', text: '3つの技法の比較表', isH3: true },
    { href: '#13-システムプロンプトとユーザープロンプト213', text: '1.3 システムプロンプトとユーザープロンプト（2.1.3）', isH3: true },
    { href: '#2-22-テスト業務へのプロンプトエンジニアリング技法の適用', text: '2. 2.2 テスト業務へのプロンプトエンジニアリング技法の適用' },
    { href: '#21-テスト分析221', text: '2.1 テスト分析（2.2.1）', isH3: true },
    { href: '#22-テスト設計テスト実装222', text: '2.2 テスト設計・テスト実装（2.2.2）', isH3: true },
    { href: '#23-自動リグレッションテスト223', text: '2.3 自動リグレッションテスト（2.2.3）', isH3: true },
    { href: '#24-テスト監視テストコントロール224', text: '2.4 テスト監視・テストコントロール（2.2.4）', isH3: true },
    { href: '#25-状況に応じた技法選択225', text: '2.5 状況に応じた技法選択（2.2.5）', isH3: true },
    { href: '#3-23-genaiの結果評価とプロンプトの改善', text: '3. 2.3 GenAIの結果評価とプロンプトの改善' },
    { href: '#31-評価指標231', text: '3.1 評価指標（2.3.1）', isH3: true },
    { href: '#32-プロンプト評価改善技法232', text: '3.2 プロンプト評価・改善技法（2.3.2）', isH3: true },
    { href: '#4-章末チェックリスト学習目標一覧', text: '4. 章末チェックリスト（学習目標一覧）' },
    { href: '#5-ベストプラクティス総集編', text: '5. ベストプラクティス総集編' },
    { href: '#6-v10v11-変更点第2章に関わる箇所', text: '6. v1.0→v1.1 変更点（第2章に関わる箇所）' },
    { href: '#7-参考文献出典', text: '7. 参考文献・出典' },
    { href: '#istqb公式資料', text: 'ISTQB公式資料', isH3: true },
    { href: '#シラバス内で引用されている学術文献第2章関連', text: 'シラバス内で引用されている学術文献（第2章関連）', isH3: true },
    { href: '#関連する公式ドキュメント学習の前提次のステップ', text: '関連する公式ドキュメント（学習の前提・次のステップ）', isH3: true },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('');

    const toggleOpen = () => setIsOpen((prev) => !prev);
    const closeSidebar = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY <= 0) {
                setActiveId('');
            }
        };

        const headings = NAV_LINKS.map((item) => {
            const id = item.href.replace('#', '');
            return document.getElementById(id);
        }).filter((el): el is HTMLElement => el !== null);

        let observer: IntersectionObserver | null = null;
        try {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveId(entry.target.id);
                        }
                    });
                },
                { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
            );

            headings.forEach((h) => observer?.observe(h));
        } catch {
            // SSR/HappyDOM 環境下でのフォールバック
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer?.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const targetId = href.replace('#', '');
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            closeSidebar();
            if (!target.hasAttribute('tabindex')) {
                target.setAttribute('tabindex', '-1');
            }
            target.focus({ preventScroll: true });
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', '#' + encodeURIComponent(target.id));
            setActiveId(targetId);
        }
    };

    return (
        <>
            <button
                className="sidebar-toggle"
                id="sidebarToggle"
                aria-label="メニューを開く"
                aria-controls="sidebar"
                aria-expanded={isOpen ? 'true' : 'false'}
                onClick={toggleOpen}
            >
                ☰
            </button>
            <div
                className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
                id="sidebarOverlay"
                onClick={closeSidebar}
                aria-hidden="true"
            />
            <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
                <div className="sidebar-brand">
                    <div className="brand-kicker">ISTQB® CT-GenAI</div>
                    <div className="brand-title">ISTQB® CT-GenAI 第2章 完全解説ガイド</div>
                </div>
                <ul className="side-nav">
                    {NAV_LINKS.map((item) => {
                        const targetId = item.href.replace('#', '');
                        const isActive = activeId === targetId;

                        if (item.isH3) {
                            return (
                                <ul key={item.href} className="side-nav-sub">
                                    <li>
                                        <a
                                            href={item.href}
                                            data-target={targetId}
                                            className={isActive ? 'active' : ''}
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.text}
                                        </a>
                                    </li>
                                </ul>
                            );
                        }

                        return (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    data-target={targetId}
                                    className={isActive ? 'active' : ''}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                >
                                    {item.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
