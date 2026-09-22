'use client';

import { useEffect, useRef, useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        try {
            const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.sidebar a[href^="#"]'));
            if (!navLinks.length) return;
            const map = new Map<HTMLElement, HTMLAnchorElement>();
            navLinks.forEach((link) => {
                const href = link.getAttribute('href');
                if (!href) return;
                const id = href.slice(1);
                const el = document.getElementById(id);
                if (el) map.set(el, link);
            });
            const targets = Array.from(map.keys());
            if (!targets.length) return;

            // entries は「交差状態が変化した要素」だけを含むスナップショットではないため、
            // 各要素の最新の交差状態を保持し、毎回そこから判定する
            const visibility = new Map<HTMLElement, boolean>();

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        visibility.set(entry.target as HTMLElement, entry.isIntersecting);
                    });

                    const visible = Array.from(visibility.entries())
                        .filter(([, isVisible]) => isVisible)
                        .map(([el]) => el);
                    if (!visible.length) return;

                    // 交差中の要素のうち、実測で最も上にあるものをアクティブにする
                    const topMost = visible.reduce((a, b) =>
                        a.getBoundingClientRect().top <= b.getBoundingClientRect().top ? a : b
                    );
                    const link = map.get(topMost);
                    if (!link) return;

                    navLinks.forEach((l) => {
                        l.classList.remove('active');
                        l.removeAttribute('aria-current');
                    });
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'location');
                },
                { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
            );

            targets.forEach((t) => {
                observer.observe(t);
            });

            return () => {
                observer.disconnect();
            };
        } catch (e) {
            console.error('Scroll-spy init failed', e);
        }
    }, []);

    const handleLinkClick = () => {
        if (typeof window !== 'undefined' && window.innerWidth <= 900 && isOpen) {
            // 閉じる前に可視のトグルへフォーカスを戻す
            // （閉じるとリンク自体が画面外へ出てフォーカスが失われるため）
            toggleRef.current?.focus();
            setIsOpen(false);
        }
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
                {isOpen ? '✕' : '☰'}
            </button>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
                <div className="sidebar-brand">ISTQB® CTAL-TA v4.0</div>
                <div className="sidebar-sub">
                    第1章:テストプロセスにおける<br />テストアナリストのタスク
                </div>
                <ul className="nav-list">
                    <li className="nav-h2">
                        <a href="#overview" onClick={handleLinkClick}>0. この章の全体像</a>
                        <ul className="nav-sub">
                            <li className="nav-h3"><a href="#keywords" onClick={handleLinkClick}>0.1 キーワード</a></li>
                            <li className="nav-h3"><a href="#lo" onClick={handleLinkClick}>0.2 学習目標</a></li>
                        </ul>
                    </li>
                    <li className="nav-h2"><a href="#sec11" onClick={handleLinkClick}>1.1 SDLCにおけるテスト</a></li>
                    <li className="nav-h2">
                        <a href="#sec12" onClick={handleLinkClick}>1.2 テスト活動への関与</a>
                        <ul className="nav-sub">
                            <li className="nav-h3"><a href="#sec121" onClick={handleLinkClick}>1.2.1 テスト分析</a></li>
                            <li className="nav-h3"><a href="#sec122" onClick={handleLinkClick}>1.2.2 テスト設計</a></li>
                            <li className="nav-h3"><a href="#sec123" onClick={handleLinkClick}>1.2.3 テスト実装</a></li>
                            <li className="nav-h3"><a href="#sec124" onClick={handleLinkClick}>1.2.4 テスト実行</a></li>
                        </ul>
                    </li>
                    <li className="nav-h2">
                        <a href="#sec13" onClick={handleLinkClick}>1.3 成果物に関するタスク</a>
                        <ul className="nav-sub">
                            <li className="nav-h3"><a href="#sec131" onClick={handleLinkClick}>1.3.1 高/低レベルテストケース</a></li>
                            <li className="nav-h3"><a href="#sec132" onClick={handleLinkClick}>1.3.2 品質基準</a></li>
                            <li className="nav-h3"><a href="#sec133" onClick={handleLinkClick}>1.3.3 テスト環境要件</a></li>
                            <li className="nav-h3"><a href="#sec134" onClick={handleLinkClick}>1.3.4 テストオラクル</a></li>
                            <li className="nav-h3"><a href="#sec135" onClick={handleLinkClick}>1.3.5 テストデータ要件</a></li>
                            <li className="nav-h3"><a href="#sec136" onClick={handleLinkClick}>1.3.6 キーワード駆動テスト</a></li>
                            <li className="nav-h3"><a href="#sec137" onClick={handleLinkClick}>1.3.7 管理ツール</a></li>
                        </ul>
                    </li>
                    <li className="nav-h2"><a href="#checklist" onClick={handleLinkClick}>章末チェックリスト</a></li>
                    <li className="nav-h2"><a href="#references" onClick={handleLinkClick}>参考文献・出典</a></li>
                </ul>
            </nav>
        </>
    );
}
