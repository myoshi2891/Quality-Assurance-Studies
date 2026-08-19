'use client';

import React, { useEffect, useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

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
            { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));

        const handleLinkClick = (e: Event) => {
            const target = e.currentTarget as HTMLAnchorElement;
            const href = target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const element = document.getElementById(href.slice(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                setIsOpen(false);
            }
        };

        links.forEach((link) => {
            link.addEventListener('click', handleLinkClick);
        });

        return () => {
            observer.disconnect();
            links.forEach((link) => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, []);

    return (
        <>
            <button
                className="nav-toggle"
                id="navToggle"
                aria-label="目次を開く"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
            </button>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar" aria-label="目次">
                <div className="brand">
                    <div className="brand-eyebrow">ISTQB® CTFL v4.0</div>
                    <div className="brand-title">
                        第4章<br />テスト分析・設計
                    </div>
                    <div className="brand-sub">Test Analysis and Design</div>
                </div>
                <div className="nav-group">
                    <a className="nav-link level-2" href="#sec-0">
                        0. 章の全体像
                    </a>
                    <a className="nav-link level-2" href="#sec-1">
                        4.1 テスト技法の全体像
                    </a>
                    <a className="nav-link level-2" href="#sec-2">
                        4.2 ブラックボックス技法
                    </a>
                    <a className="nav-link level-3" href="#sec-2-1">
                        4.2.1 同値分割法
                    </a>
                    <a className="nav-link level-3" href="#sec-2-2">
                        4.2.2 境界値分析
                    </a>
                    <a className="nav-link level-3" href="#sec-2-3">
                        4.2.3 デシジョンテーブルテスト
                    </a>
                    <a className="nav-link level-3" href="#sec-2-4">
                        4.2.4 状態遷移テスト
                    </a>
                    <a className="nav-link level-2" href="#sec-3">
                        4.3 ホワイトボックス技法
                    </a>
                    <a className="nav-link level-3" href="#sec-3-1">
                        4.3.1 ステートメントテスト
                    </a>
                    <a className="nav-link level-3" href="#sec-3-2">
                        4.3.2 分岐テスト
                    </a>
                    <a className="nav-link level-3" href="#sec-3-3">
                        4.3.3 WBテストの価値
                    </a>
                    <a className="nav-link level-2" href="#sec-4">
                        4.4 経験ベースの技法
                    </a>
                    <a className="nav-link level-3" href="#sec-4-1">
                        4.4.1 エラー推測
                    </a>
                    <a className="nav-link level-3" href="#sec-4-2">
                        4.4.2 探索的テスト
                    </a>
                    <a className="nav-link level-3" href="#sec-4-3">
                        4.4.3 チェックリストベースド
                    </a>
                    <a className="nav-link level-2" href="#sec-5">
                        4.5 コラボレーションベース
                    </a>
                    <a className="nav-link level-3" href="#sec-5-1">
                        4.5.1 ユーザーストーリー共同作成
                    </a>
                    <a className="nav-link level-3" href="#sec-5-2">
                        4.5.2 受け入れ基準
                    </a>
                    <a className="nav-link level-3" href="#sec-5-3">
                        4.5.3 ATDD
                    </a>
                    <a className="nav-link level-2" href="#sec-6">
                        6. 技法選択の指針
                    </a>
                    <a className="nav-link level-2" href="#sec-7">
                        7. 試験対策のポイント
                    </a>
                    <a className="nav-link level-2" href="#sec-8">
                        8. まとめ
                    </a>
                    <a className="nav-link level-2" href="#sec-refs">
                        参考文献・URL一覧
                    </a>
                </div>
            </nav>
        </>
    );
}
