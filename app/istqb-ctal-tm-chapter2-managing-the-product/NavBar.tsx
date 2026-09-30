'use client';

import React, { useEffect, useState } from 'react';

interface NavItem {
    id: string;
    text: string;
    level: 2 | 3;
}

const NAV_ITEMS: NavItem[] = [
    // 1. 本ガイドの読み方と第2章の全体像
    { id: '1-本ガイドの読み方と第2章の全体像', text: '1. 本ガイドの読み方と第2章の全体像', level: 2 },
    { id: '11-ご依頼の製品の管理と公式の章題の対応', text: '1.1 ご依頼の「製品の管理」と公式の章題の対応', level: 3 },
    { id: '12-第2章で学ぶ3つのテーマ', text: '1.2 第2章で学ぶ3つのテーマ', level: 3 },
    { id: '13-学習の目的lo一覧と認知レベル', text: '1.3 学習の目的（LO）一覧と認知レベル', level: 3 },
    { id: '14-k1-として暗記するキーワード', text: '1.4 K1 として暗記するキーワード', level: 3 },
    { id: '15-試験の基本情報istqb公式ページより', text: '1.5 試験の基本情報（ISTQB公式ページより）', level: 3 },

    // 2. 【シラバス2.1】テストメトリクス
    { id: '2-シラバス21テストメトリクス', text: '2. 【シラバス2.1】テストメトリクス', level: 2 },
    { id: 'ステップ1なぜテストにメトリクスが必要なのか', text: 'ステップ1：なぜテストにメトリクスが必要なのか', level: 3 },
    { id: 'ステップ2メトリクスを3つに分類する', text: 'ステップ2：メトリクスを3つに分類する', level: 3 },
    { id: 'ステップ3tm-211テストマネジメント活動ごとのメトリクスの例', text: 'ステップ3（TM-2.1.1）：テストマネジメント活動ごとのメトリクスの例', level: 3 },
    { id: 'ステップ4tm-212モニタリングコントロール完了の違い', text: 'ステップ4（TM-2.1.2）：モニタリング・コントロール・完了の違い', level: 3 },
    { id: 'ステップ5tm-213k4テストレポートを作るために結果を分析する', text: 'ステップ5（TM-2.1.3・K4）：テストレポートを作るために結果を分析する', level: 3 },

    // 3. 【シラバス2.2】テスト見積り
    { id: '3-シラバス22テスト見積り', text: '3. 【シラバス2.2】テスト見積り', level: 2 },
    { id: 'ステップ1tm-221テスト見積りとは何を見積ることか', text: 'ステップ1（TM-2.2.1）：テスト見積りとは何を見積ることか', level: 3 },
    { id: 'ステップ2tm-222テスト工数に影響を与える要因', text: 'ステップ2（TM-2.2.2）：テスト工数に影響を与える要因', level: 3 },
    { id: 'ステップ3tm-223k4適切なテスト見積り技法を選ぶ', text: 'ステップ3（TM-2.2.3・K4）：適切なテスト見積り技法を選ぶ', level: 3 },

    // 4. 【シラバス2.3】欠陥マネジメント
    { id: '4-シラバス23欠陥マネジメント', text: '4. 【シラバス2.3】欠陥マネジメント', level: 2 },
    { id: '導入欠陥マネジメントとは', text: '導入：欠陥マネジメントとは', level: 3 },
    { id: 'ステップ1tm-231k3欠陥のライフサイクルと欠陥ワークフロー', text: 'ステップ1（TM-2.3.1・K3）：欠陥のライフサイクルと欠陥ワークフロー', level: 3 },
    { id: 'ステップ2tm-232k2機能横断的な欠陥マネジメント', text: 'ステップ2（TM-2.3.2・K2）：機能横断的な欠陥マネジメント', level: 3 },
    { id: 'ステップ3tm-233k2アジャイルチームにおける欠陥マネジメントの特徴', text: 'ステップ3（TM-2.3.3・K2）：アジャイルチームにおける欠陥マネジメントの特徴', level: 3 },
    { id: 'ステップ4tm-234k2ハイブリッドソフトウェア開発における欠陥マネジメントの課題', text: 'ステップ4（TM-2.3.4・K2）：ハイブリッドソフトウェア開発における欠陥マネジメントの課題', level: 3 },
    { id: 'ステップ5tm-235k3欠陥レポートに記載する情報とその使い方', text: 'ステップ5（TM-2.3.5・K3）：欠陥レポートに記載する情報と、その使い方', level: 3 },
    { id: 'ステップ6tm-236k2欠陥レポート情報からプロセス改善アクションを導く', text: 'ステップ6（TM-2.3.6・K2）：欠陥レポート情報からプロセス改善アクションを導く', level: 3 },

    // 5. 章全体のまとめ
    { id: '5-章全体のまとめ', text: '5. 章全体のまとめ', level: 2 },
    { id: '51-第2章の要点1ページまとめ', text: '5.1 第2章の要点（1ページまとめ）', level: 3 },
    { id: '52-他の章とのつながり', text: '5.2 他の章とのつながり', level: 3 },
    { id: '53-用語対訳表日本語英語', text: '5.3 用語対訳表（日本語・英語）', level: 3 },
    { id: '54-試験対策のコツk-レベル別', text: '5.4 試験対策のコツ（K レベル別）', level: 3 },

    // 6. 確認問題
    { id: '6-確認問題筆者作成10問', text: '6. 確認問題（筆者作成・10問）', level: 2 },
    { id: '解答と根拠', text: '解答と根拠', level: 3 },

    // 7. 参考資料・出典一覧
    { id: '7-参考資料出典一覧', text: '7. 参考資料・出典一覧', level: 2 },
    { id: '71-一次情報試験の根拠', text: '7.1 一次情報（試験の根拠）', level: 3 },
    { id: '72-サンプル試験istqb公式', text: '7.2 サンプル試験（ISTQB公式）', level: 3 },
    { id: '73-シラバスが参照する標準関連シラバス試験範囲外だが理解の助け', text: '7.3 シラバスが参照する標準・関連シラバス（試験範囲外だが理解の助け）', level: 3 },
    { id: '74-本ガイドの根拠の区分と確認が必要な箇所', text: '7.4 本ガイドの根拠の区分と、確認が必要な箇所', level: 3 },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
        );

        NAV_ITEMS.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const toggleSidebar = () => setIsOpen((prev) => !prev);
    const closeSidebar = () => setIsOpen(false);

    // H2を親、続くH3を子とする構造にグループ化
    const sections: Array<{ h2: NavItem; children: NavItem[] }> = [];
    let currentH2: { h2: NavItem; children: NavItem[] } | null = null;

    NAV_ITEMS.forEach((item) => {
        if (item.level === 2) {
            currentH2 = { h2: item, children: [] };
            sections.push(currentH2);
        } else if (currentH2) {
            currentH2.children.push(item);
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
                onClick={toggleSidebar}
            >
                ☰
            </button>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
                <div className="sidebar-brand">CTAL-TM v3.0 第2章</div>
                <div className="sidebar-sub">プロダクトのマネジメント（製品の管理）</div>
                <ul className="nav-list">
                    {sections.map((section) => (
                        <li key={section.h2.id} className="nav-h2">
                            <a
                                href={`#${section.h2.id}`}
                                className={activeId === section.h2.id ? 'active' : ''}
                                onClick={closeSidebar}
                                aria-current={activeId === section.h2.id ? 'location' : undefined}
                            >
                                {section.h2.text}
                            </a>
                            {section.children.length > 0 && (
                                <ul className="nav-sub">
                                    {section.children.map((sub) => (
                                        <li key={sub.id}>
                                            <a
                                                href={`#${sub.id}`}
                                                className={activeId === sub.id ? 'active' : ''}
                                                onClick={closeSidebar}
                                                aria-current={activeId === sub.id ? 'location' : undefined}
                                            >
                                                {sub.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}
