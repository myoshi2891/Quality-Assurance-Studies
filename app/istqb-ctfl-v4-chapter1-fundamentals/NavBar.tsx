'use client';

import { useEffect } from 'react';

/**
 * ISTQB CTFL v4.0 Chapter 1 専用のサイドバーナビゲーションコンポーネント。
 * スクロール位置に応じて、表示中のセクションに対応するリンクへ `active` クラスと `aria-current="location"` を設定します。
 */
export default function NavBar() {
    useEffect(() => {
        const links = document.querySelectorAll('.sidebar .nav-item');
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
            <div className="sidebar-header">
                <span className="sidebar-badge">CTFL v4.0</span>
                <h2 className="sidebar-title">Chapter 1</h2>
                <div className="sidebar-sub">テストの基礎</div>
            </div>
            
            <nav className="sidebar-nav">
                <a href="#overview" className="nav-item">全体像と学習目標</a>
                <a href="#s11" className="nav-item">1.1 テストとは何か</a>
                <a href="#s11-objectives" className="nav-item nav-item-sub">テスト目標 (9項目)</a>
                <a href="#s11-debug" className="nav-item nav-item-sub">テストとデバッグ</a>
                <a href="#s12" className="nav-item">1.2 なぜテストが必要か</a>
                <a href="#s12-qa" className="nav-item nav-item-sub">QA vs テスト</a>
                <a href="#s12-chain" className="nav-item nav-item-sub">エラー・欠陥・故障</a>
                <a href="#s13" className="nav-item">1.3 テストの7原則</a>
                <a href="#s14" className="nav-item">1.4 活動・ウェア・ロール</a>
                <a href="#s14-activities" className="nav-item nav-item-sub">7つのテスト活動</a>
                <a href="#s14-testware" className="nav-item nav-item-sub">テストウェア</a>
                <a href="#s14-trace" className="nav-item nav-item-sub">トレーサビリティ</a>
                <a href="#s14-roles" className="nav-item nav-item-sub">テストのロール</a>
                <a href="#s15" className="nav-item">1.5 スキルと良い実践</a>
                <a href="#s15-skills" className="nav-item nav-item-sub">汎用スキル</a>
                <a href="#s15-whole" className="nav-item nav-item-sub">ホールチームアプローチ</a>
                <a href="#s15-independence" className="nav-item nav-item-sub">テストの独立性</a>
                <a href="#glossary" className="nav-item">用語集</a>
                <a href="#checklist" className="nav-item">試験対策チェックリスト</a>
                <a href="#references" className="nav-item">参照リソース</a>
            </nav>

            <div className="sidebar-stats">
                <div className="stat-box">
                    <div className="stat-num">14</div>
                    <div className="stat-label">学習目標数</div>
                </div>
                <div className="stat-box">
                    <div className="stat-num">180</div>
                    <div className="stat-label">学習分</div>
                </div>
            </div>
        </nav>
    );
}
