'use client';

import { useEffect } from 'react';

/**
 * ISTQB CTFL v4.0 完全解説ガイド用の左固定サイドバーナビゲーション。
 * スクロール位置に応じてアクティブなセクションのリンクに `active` クラスおよび `aria-current="location"` を設定します。
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
                <h2>ISTQB CTFL v4.0</h2>
                <span>完全解説ガイド 2026版</span>
            </div>
            
            <div className="nav-section">
                <div className="nav-label">はじめに</div>
                <a href="#overview" className="nav-link">概要・試験情報</a>
                <div className="nav-sub">
                    <a href="#exam-spec" className="nav-link">試験仕様</a>
                    <a href="#chapter-dist" className="nav-link">章別出題配分</a>
                    <a href="#certification-path" className="nav-link">認定スキーム</a>
                </div>
            </div>
            
            <div className="nav-section">
                <div className="nav-label">Chapter 1</div>
                <a href="#ch1" className="nav-link">テストの基礎</a>
                <div className="nav-sub">
                    <a href="#7principles" className="nav-link">7つの原則</a>
                    <a href="#error-defect" className="nav-link">エラー・欠陥・障害</a>
                    <a href="#test-process" className="nav-link">テストプロセス</a>
                </div>
            </div>
            
            <div className="nav-section">
                <div className="nav-label">Chapter 2</div>
                <a href="#ch2" className="nav-link">SDLCとテスト</a>
                <div className="nav-sub">
                    <a href="#test-levels" className="nav-link">テストレベル</a>
                    <a href="#test-types" className="nav-link">テストタイプ</a>
                    <a href="#shift-left" className="nav-link">シフトレフト・DevOps</a>
                </div>
            </div>
            
            <div className="nav-section">
                <div className="nav-label">Chapter 3</div>
                <a href="#ch3" className="nav-link">静的テスト</a>
                <div className="nav-sub">
                    <a href="#review-types" className="nav-link">レビュータイプ</a>
                    <a href="#review-process" className="nav-link">レビュープロセス</a>
                </div>
            </div>
            
            <div className="nav-section">
                <div className="nav-label">
                    Chapter 4 <span className="tag tag-coral" style={{ fontSize: '10px', marginLeft: '4px' }}>最重要</span>
                </div>
                <a href="#ch4" className="nav-link">テスト分析・設計</a>
                <div className="nav-sub">
                    <a href="#ep" className="nav-link">同値分割 (EP)</a>
                    <a href="#bva" className="nav-link">境界値分析 (BVA)</a>
                    <a href="#decision-table" className="nav-link">デシジョンテーブル</a>
                    <a href="#state-transition" className="nav-link">状態遷移テスト</a>
                    <a href="#whitebox" className="nav-link">ホワイトボックス</a>
                    <a href="#exploratory" className="nav-link">探索的テスト</a>
                    <a href="#atdd" className="nav-link">ATDD・コラボ技法</a>
                </div>
            </div>
            
            <div className="nav-section">
                <div className="nav-label">Chapter 5</div>
                <a href="#ch5" className="nav-link">テスト活動の管理</a>
                <div className="nav-sub">
                    <a href="#test-planning" className="nav-link">テスト計画</a>
                    <a href="#risk-mgmt" className="nav-link">リスク管理</a>
                    <a href="#monitoring" className="nav-link">モニタリング・完了</a>
                    <a href="#defect-mgmt" className="nav-link">欠陥管理</a>
                </div>
            </div>
            
            <div className="nav-section">
                <div className="nav-label">Chapter 6</div>
                <a href="#ch6" className="nav-link">テストツール</a>
            </div>
            
            <div className="nav-section">
                <div className="nav-label">試験対策</div>
                <a href="#exam-strategy" className="nav-link">学習戦略・チェックリスト</a>
                <a href="#references" className="nav-link">参考文献・URL</a>
            </div>
        </nav>
    );
}
