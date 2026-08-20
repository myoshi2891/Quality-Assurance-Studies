'use client';

import React, { useEffect, useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const links = document.querySelectorAll('.side-nav a[data-nav]');
        const idToLink: Record<string, HTMLAnchorElement> = {};
        
        links.forEach((link) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                idToLink[href.slice(1)] = link as HTMLAnchorElement;
            }
        });

        const targets = Object.keys(idToLink)
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                let bestEntry: IntersectionObserverEntry | null = null;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (
                            !bestEntry ||
                            entry.boundingClientRect.top < bestEntry.boundingClientRect.top
                        ) {
                            bestEntry = entry;
                        }
                    }
                });

                if (bestEntry) {
                    const currentId = (bestEntry as IntersectionObserverEntry).target.id;
                    links.forEach((l) => {
                        l.classList.remove('active');
                        l.removeAttribute('aria-current');
                    });
                    const activeLink = idToLink[currentId];
                    if (activeLink) {
                        activeLink.classList.add('active');
                        activeLink.setAttribute('aria-current', 'location');
                    }
                }
            },
            { rootMargin: '-10% 0px -70% 0px', threshold: [0, 1] }
        );

        targets.forEach((t) => observer.observe(t));

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
                type="button"
                className="nav-toggle"
                id="navToggle"
                aria-label="目次を開く"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
            </button>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar" aria-label="目次">
                <div className="side-brand">
                    <div className="eyebrow">ISTQB® CTFL v4.0.1</div>
                    <div className="side-brand-title">
                        Chapter 5<br />テスト活動の管理
                    </div>
                </div>
                <div className="side-nav" id="side-nav">
                    <a href="#sec-0" data-nav>
                        0. この章の位置づけ
                    </a>

                    <div className="group-label">5.1 テスト計画</div>
                    <a href="#sec-1" data-nav>
                        1. テスト計画 概要
                    </a>
                    <a href="#sec-1-1" data-nav className="sub">
                        1.1 計画書の目的と内容
                    </a>
                    <a href="#sec-1-2" data-nav className="sub">
                        1.2 イテレーション/リリース計画
                    </a>
                    <a href="#sec-1-3" data-nav className="sub">
                        1.3 エントリー/終了基準
                    </a>
                    <a href="#sec-1-4" data-nav className="sub">
                        1.4 見積り技法
                    </a>
                    <a href="#sec-1-5" data-nav className="sub">
                        1.5 優先順位付け
                    </a>
                    <a href="#sec-1-6" data-nav className="sub">
                        1.6 テストピラミッド
                    </a>
                    <a href="#sec-1-7" data-nav className="sub">
                        1.7 テスト象限
                    </a>

                    <div className="group-label">5.2 リスクマネジメント</div>
                    <a href="#sec-2" data-nav>
                        2. リスクマネジメント 概要
                    </a>
                    <a href="#sec-2-1" data-nav className="sub">
                        2.1 リスクの定義と属性
                    </a>
                    <a href="#sec-2-2" data-nav className="sub">
                        2.2 プロジェクト/プロダクトリスク
                    </a>
                    <a href="#sec-2-3" data-nav className="sub">
                        2.3 プロダクトリスク分析
                    </a>
                    <a href="#sec-2-4" data-nav className="sub">
                        2.4 プロダクトリスク制御
                    </a>

                    <div className="group-label">5.3 モニタリング/コントロール</div>
                    <a href="#sec-3" data-nav>
                        3. モニタリング/コントロール
                    </a>
                    <a href="#sec-3-1" data-nav className="sub">
                        3.1 テストメトリクス
                    </a>
                    <a href="#sec-3-2" data-nav className="sub">
                        3.2 テストレポート
                    </a>
                    <a href="#sec-3-3" data-nav className="sub">
                        3.3 状況の伝達
                    </a>

                    <div className="group-label">5.4 / 5.5</div>
                    <a href="#sec-4" data-nav>
                        4. 構成管理
                    </a>
                    <a href="#sec-5" data-nav>
                        5. 欠陥管理
                    </a>
                    <a href="#sec-5-1" data-nav className="sub">
                        5.1 欠陥のライフサイクル
                    </a>
                    <a href="#sec-5-2" data-nav className="sub">
                        5.2 欠陥報告の目的
                    </a>
                    <a href="#sec-5-3" data-nav className="sub">
                        5.3 欠陥報告の項目
                    </a>

                    <div className="group-label">まとめ</div>
                    <a href="#sec-6" data-nav>
                        6. 重要用語とチェックリスト
                    </a>
                    <a href="#sec-7" data-nav>
                        7. 参考文献・参照URL
                    </a>
                </div>
            </nav>
        </>
    );
}
