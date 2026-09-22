'use client';

import React, { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
    { href: '#sec1', label: '1. ガイドの使い方と全体像' },
    { href: '#sec2', label: '2. イントロダクション' },
    {
        href: '#sec3',
        label: '3. 2.1 リスク分析',
        sub: [
            { href: '#sec3-1', label: '3.1 リスク識別' },
            { href: '#sec3-2', label: '3.2 リスクアセスメント' },
        ],
    },
    {
        href: '#sec4',
        label: '4. 2.2 リスクコントロール',
        sub: [
            { href: '#sec4-1', label: '4.1 リスク軽減の4アクション' },
            { href: '#sec4-2', label: '4.2 回帰テストの目的と制約' },
            { href: '#sec4-3', label: '4.3 回帰テスト選択技法6つ' },
            { href: '#sec4-4', label: '4.4 組み合わせと継続的改善' },
            { href: '#sec4-5', label: '4.5 リスクモニタリング' },
        ],
    },
    { href: '#sec5', label: '5. 実践演習：インパクト分析' },
    { href: '#sec6', label: '6. ベストプラクティス総まとめ' },
    { href: '#sec7', label: '7. 第2章のまとめ表' },
    { href: '#sec8', label: '8. 理解度チェック問題' },
    { href: '#sec9', label: '9. 参考文献' },
    { href: '#sec10', label: '10. 次のステップ' },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);
    const [activeId, setActiveId] = useState('sec1');

    useEffect(() => {
        const allHrefs = [
            'sec1',
            'sec2',
            'sec3',
            'sec3-1',
            'sec3-2',
            'sec4',
            'sec4-1',
            'sec4-2',
            'sec4-3',
            'sec4-4',
            'sec4-5',
            'sec5',
            'sec6',
            'sec7',
            'sec8',
            'sec9',
            'sec10',
        ];

        // entries は「交差状態が変化した要素」だけを含むため、変化しなかった可視要素が
        // 判定から漏れる。各要素の最新の交差状態を保持し、毎回そこから判定する
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

                // 交差中の要素のうち、実測で最も上にあるものをアクティブにする
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
        // デスクトップではサイドバーが常時表示なので何もしない。
        // モバイルで開いている場合のみ、閉じる前に可視のトグルへフォーカスを戻す
        // （閉じるとリンク自体が画面外へ出てフォーカスが失われるため）。
        if (!isOpen) return;
        toggleRef.current?.focus();
        setIsOpen(false);
    };

    return (
        <>
            <button
                ref={toggleRef}
                className="sidebar-toggle"
                id="sidebarToggle"
                aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
                aria-expanded={isOpen}
                aria-controls="sidebar"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            <div
                className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
                id="sidebarOverlay"
                onClick={() => setIsOpen(false)}
            />

            <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
                <div className="sidebar-title">目次</div>
                <ul className="nav-list">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={activeId === item.href.slice(1) ? 'active' : ''}
                                aria-current={activeId === item.href.slice(1) ? 'location' : undefined}
                                onClick={handleLinkClick}
                            >
                                {item.label}
                            </a>
                            {item.sub && (
                                <ul className="nav-sub">
                                    {item.sub.map((subItem) => (
                                        <li key={subItem.href}>
                                            <a
                                                href={subItem.href}
                                                className={activeId === subItem.href.slice(1) ? 'active' : ''}
                                                aria-current={
                                                    activeId === subItem.href.slice(1) ? 'location' : undefined
                                                }
                                                onClick={handleLinkClick}
                                            >
                                                {subItem.label}
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
