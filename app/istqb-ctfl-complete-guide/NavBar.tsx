'use client';

import { useEffect } from 'react';

/**
 * ISTQB CTFL v4.0 完全解説ガイド用のスティッキー章ナビゲーション。
 * スクロール位置に応じてアクティブなセクションのリンクに `aria-current="location"` を設定します。
 */
export default function NavBar() {
    useEffect(() => {
        const links = document.querySelectorAll('.sticky-nav .nav-link');
        const sections = Array.from(links)
            .map((link) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    return document.querySelector(href);
                }
                return null;
            })
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                const intersectingEntry = entries.find((entry) => entry.isIntersecting);
                if (intersectingEntry) {
                    const id = intersectingEntry.target.getAttribute('id');
                    links.forEach((link) => {
                        if (link.getAttribute('href') === `#${id}`) {
                            link.setAttribute('aria-current', 'location');
                        } else {
                            link.removeAttribute('aria-current');
                        }
                    });
                }
            },
            { rootMargin: '-20% 0px -80% 0px' }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav className="sticky-nav" aria-label="章ナビゲーション">
            <ul>
                <li><span className="nav-logo" style={{ marginRight: '15px', fontWeight: 'bold', color: 'var(--color-accent-cyan)' }}>CTFL v4.0</span></li>
                <li><a className="nav-link" href="#overview">概要・試験情報</a></li>
                <li><a className="nav-link" href="#ch1">Ch.1 テストの基礎</a></li>
                <li><a className="nav-link" href="#ch2">Ch.2 SDLCとテスト</a></li>
                <li><a className="nav-link" href="#ch3">Ch.3 静的テスト</a></li>
                <li><a className="nav-link" href="#ch4">Ch.4 テスト分析・設計</a></li>
                <li><a className="nav-link" href="#ch5">Ch.5 テスト管理</a></li>
                <li><a className="nav-link" href="#ch6">Ch.6 テストツール</a></li>
                <li><a className="nav-link" href="#exam-strategy">学習戦略</a></li>
                <li><a className="nav-link" href="#references">参考文献</a></li>
            </ul>
        </nav>
    );
}
