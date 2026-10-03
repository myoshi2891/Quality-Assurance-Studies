'use client';

import React, { useEffect, useState } from 'react';

export interface NavItem {
    href: string;
    text: string;
    isH3?: boolean;
}

export const NAV_LINKS: NavItem[] = [
    { href: '#-この文書の読み方', text: '📌 この文書の読み方', isH3: false },
    { href: '#1-第3章の全体像', text: '1. 第3章の全体像', isH3: false },
    { href: '#11-この章は一言で言うと', text: '1.1 この章は一言で言うと', isH3: true },
    { href: '#12-学習目標learning-objectives一覧', text: '1.2 学習目標（Learning Objectives）一覧', isH3: true },
    { href: '#13-第3章の全体マップ', text: '1.3 第3章の全体マップ', isH3: true },
    { href: '#14-試験の基本情報', text: '1.4 試験の基本情報', isH3: true },
    { href: '#2-31-ハルシネーション推論エラーバイアス', text: '2. 3.1 ハルシネーション・推論エラー・バイアス', isH3: false },
    { href: '#20-なぜこの節が必要なのか', text: '2.0 なぜこの節が必要なのか', isH3: true },
    { href: '#21-genai-311--k13つの間違いの定義', text: '2.1 【GenAI-3.1.1 / K1】3つの「間違い」の定義', isH3: true },
    { href: '#22-genai-312--k3llm-の出力から3つの間違いを見つける', text: '2.2 【GenAI-3.1.2 / K3】LLM の出力から3つの間違いを見つける', isH3: true },
    { href: '#23-genai-313--k2ハルシネーション推論エラーバイアスの軽減方法', text: '2.3 【GenAI-3.1.3 / K2】ハルシネーション・推論エラー・バイアスの軽減方法', isH3: true },
    { href: '#24-genai-314--k1非決定的な振る舞いnon-deterministic-behaviorへの対処', text: '2.4 【GenAI-3.1.4 / K1】非決定的な振る舞い（Non-Deterministic Behavior）への対処', isH3: true },
    { href: '#3-32-データプライバシーとセキュリティのリスク', text: '3. 3.2 データプライバシーとセキュリティのリスク', isH3: false },
    { href: '#30-なぜこの節が必要なのか', text: '3.0 なぜこの節が必要なのか', isH3: true },
    { href: '#31-genai-321--k2データプライバシーとセキュリティの主なリスク', text: '3.1 【GenAI-3.2.1 / K2】データプライバシーとセキュリティの主なリスク', isH3: true },
    { href: '#32-genai-322--k2データプライバシーと脆弱性の例攻撃ベクトル4種', text: '3.2 【GenAI-3.2.2 / K2】データプライバシーと脆弱性の例：攻撃ベクトル4種', isH3: true },
    { href: '#33-genai-323--k2プライバシー保護とセキュリティ強化の緩和策', text: '3.3 【GenAI-3.2.3 / K2】プライバシー保護とセキュリティ強化の緩和策', isH3: true },
    { href: '#4-33-エネルギー消費と環境への影響', text: '4. 3.3 エネルギー消費と環境への影響', isH3: false },
    { href: '#40-なぜこの節が必要なのか', text: '4.0 なぜこの節が必要なのか', isH3: true },
    { href: '#41-genai-331--k2タスクの特徴とモデルの使い方が消費量に与える影響', text: '4.1 【GenAI-3.3.1 / K2】タスクの特徴とモデルの使い方が消費量に与える影響', isH3: true },
    { href: '#5-34-ai規制標準ベストプラクティスフレームワーク', text: '5. 3.4 AI規制・標準・ベストプラクティスフレームワーク', isH3: false },
    { href: '#50-なぜこの節が必要なのか', text: '5.0 なぜこの節が必要なのか', isH3: true },
    { href: '#51-genai-341--k14つの例', text: '5.1 【GenAI-3.4.1 / K1】4つの例', isH3: true },
    { href: '#6-試験対策まとめチェックリスト練習問題', text: '6. 試験対策：まとめ・チェックリスト・練習問題', isH3: false },
    { href: '#61-第3章-総まとめ表試験直前チェック用', text: '6.1 第3章 総まとめ表（試験直前チェック用）', isH3: true },
    { href: '#62-よくある間違いひっかけポイント', text: '6.2 よくある間違い（ひっかけポイント）', isH3: true },
    { href: '#63-実務導入チェックリスト-補足', text: '6.3 実務導入チェックリスト（💡 補足）', isH3: true },
    { href: '#64-練習問題オリジナル12問', text: '6.4 練習問題（オリジナル・12問）', isH3: true },
    { href: '#7-参考url根拠ソース一覧', text: '7. 参考URL（根拠ソース一覧）', isH3: false },
    { href: '#71-最重要istqb-公式一次ソース', text: '7.1 【最重要】ISTQB 公式（一次ソース）', isH3: true },
    { href: '#72-学習の補助資料二次ソース', text: '7.2 学習の補助資料（二次ソース）', isH3: true },
    { href: '#73-31-節非決定性temperatureseedの補足', text: '7.3 3.1 節（非決定性・temperature・seed）の補足', isH3: true },
    { href: '#74-32-節プライバシーセキュリティの補足', text: '7.4 3.2 節（プライバシー・セキュリティ）の補足', isH3: true },
    { href: '#75-33-節エネルギーの補足', text: '7.5 3.3 節（エネルギー）の補足', isH3: true },
    { href: '#76-34-節規制標準フレームワークの補足', text: '7.6 3.4 節（規制・標準・フレームワーク）の補足', isH3: true },
    { href: '#77-本文書の情報の確からしさについて', text: '7.7 本文書の情報の確からしさについて', isH3: true },
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
                    const visibleEntries = entries.filter((entry) => entry.isIntersecting);
                    if (visibleEntries.length > 0) {
                        const topEntry = visibleEntries.reduce((prev, curr) =>
                            curr.boundingClientRect.top < prev.boundingClientRect.top ? curr : prev
                        );
                        setActiveId(topEntry.target.id);
                    }
                },
                {
                    rootMargin: '-80px 0px -70% 0px',
                    threshold: 0,
                }
            );

            headings.forEach((el) => observer?.observe(el));
        } catch {
            // JSDOM / test 環境等で IntersectionObserver が未対応の場合はフォールバック
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer?.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // H2 とその配下の H3 を構造化
    const navTree: { h2: NavItem; h3s: NavItem[] }[] = [];
    let currentGroup: { h2: NavItem; h3s: NavItem[] } | null = null;

    NAV_LINKS.forEach((item) => {
        if (!item.isH3) {
            currentGroup = { h2: item, h3s: [] };
            navTree.push(currentGroup);
        } else if (currentGroup) {
            currentGroup.h3s.push(item);
        }
    });

    return (
        <>
            <button
                type="button"
                className="sidebar-toggle"
                id="sidebarToggle"
                aria-label="目次を開閉"
                aria-expanded={isOpen}
                onClick={toggleOpen}
            >
                ☰
            </button>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar" aria-label="ページ内目次">
                <div className="sidebar-brand">
                    CT-GenAI 第3章<small>生成AIのリスク管理</small>
                </div>
                <ul className="nav-root">
                    {navTree.map((group) => {
                        const h2Id = group.h2.href.replace('#', '');
                        const isH2Active = activeId === h2Id;

                        return (
                            <li key={group.h2.href} className="nav-h2">
                                <a
                                    href={group.h2.href}
                                    data-target={h2Id}
                                    className={isH2Active ? 'active' : undefined}
                                    onClick={closeSidebar}
                                >
                                    {group.h2.text}
                                </a>
                                {group.h3s.length > 0 && (
                                    <ul className="nav-h3-list">
                                        {group.h3s.map((h3) => {
                                            const h3Id = h3.href.replace('#', '');
                                            const isH3Active = activeId === h3Id;

                                            return (
                                                <li key={h3.href} className="nav-h3">
                                                    <a
                                                        href={h3.href}
                                                        data-target={h3Id}
                                                        className={isH3Active ? 'active' : undefined}
                                                        onClick={closeSidebar}
                                                    >
                                                        {h3.text}
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
