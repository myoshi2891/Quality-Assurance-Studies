'use client';

import { useEffect } from 'react';

/**
 * ISTQB CTFL v4.0 Chapter 2 専用のサイドバーナビゲーションコンポーネント。
 * スクロール位置に応じて、表示中のセクションに対応するリンクへ `active` クラスと `aria-current="location"` を設定します。
 */
export default function NavBar() {
    useEffect(() => {
        const links = document.querySelectorAll('.sidebar .nav-link');
        const sections = Array.from(links)
            .map((link) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    return document.getElementById(href.slice(1));
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
                            link.classList.add('active');
                            link.setAttribute('aria-current', 'location');
                        } else {
                            link.classList.remove('active');
                            link.removeAttribute('aria-current');
                        }
                    });
                }
            },
            { rootMargin: '-10% 0px -70% 0px' }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav className="sidebar" aria-label="章ナビゲーション">
            <div className="sidebar-logo">
                <span className="badge-ctfl">ISTQB CTFL v4.0</span>
                <h2>Chapter 2<br />SDLCとテスト</h2>
                <p>完全解説ガイド（中上級者向け）</p>
            </div>
            
            <nav className="sidebar-nav">
                <div className="nav-group">
                    <div className="nav-group-label">概要</div>
                    <a href="#overview" className="nav-link">全体像と試験戦略</a>
                </div>

                <div className="nav-group">
                    <div className="nav-group-label">2.1 SDLCとテスト</div>
                    <a href="#sec-211" className="nav-link sub">2.1.1 SDLCモデルの影響</a>
                    <a href="#sec-212" className="nav-link sub">2.1.2 良いテスト実践</a>
                    <a href="#sec-213" className="nav-link sub">2.1.3 TDD / ATDD / BDD</a>
                    <a href="#sec-214" className="nav-link sub">2.1.4 DevOpsとテスト</a>
                    <a href="#sec-215" className="nav-link sub">2.1.5 シフトレフト</a>
                    <a href="#sec-216" className="nav-link sub">2.1.6 レトロスペクティブ</a>
                </div>

                <div className="nav-group">
                    <div className="nav-group-label">2.2 レベル・タイプ</div>
                    <a href="#sec-221" className="nav-link sub">2.2.1 テストレベル（5段階）</a>
                    <a href="#sec-222" className="nav-link sub">2.2.2 テストタイプ（4種類）</a>
                    <a href="#sec-223" className="nav-link sub">2.2.3 確認・リグレッション</a>
                </div>

                <div className="nav-group">
                    <div className="nav-group-label">2.3 メンテナンス</div>
                    <a href="#sec-23" className="nav-link">メンテナンステスト</a>
                </div>

                <div className="nav-group">
                    <div className="nav-group-label">試験対策</div>
                    <a href="#exam-prep" className="nav-link">頻出パターン＆落とし穴</a>
                    <a href="#references" className="nav-link">参照URL一覧</a>
                </div>
            </nav>

            <div className="sidebar-stats">
                <div className="stat-box">
                    <div className="stat-num">11</div>
                    <div className="stat-label">学習目標数</div>
                </div>
                <div className="stat-box">
                    <div className="stat-num">80</div>
                    <div className="stat-label">推奨学習分</div>
                </div>
            </div>
        </nav>
    );
}
