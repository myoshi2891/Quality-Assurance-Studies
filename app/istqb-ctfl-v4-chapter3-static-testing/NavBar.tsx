'use client';

import React, { useEffect } from 'react';

/**
 * Renders the ISTQB CTFL v4.0 Chapter 3 sidebar navigation.
 *
 * Updates the active navigation link as the corresponding content section enters the viewport.
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

        // Smooth scroll implementation
        const handleLinkClick = (e: Event) => {
            const target = e.currentTarget as HTMLAnchorElement;
            const href = target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const element = document.getElementById(href.slice(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
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
        <nav className="sidebar" aria-label="章ナビゲーション">
            <p className="sidebar-title">CTFL v4.0 第3章</p>
            <ul className="nav-list">
                <li>
                    <a className="nav-link" href="#overview">
                        <i className="ti ti-map"></i>章の位置づけ
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#sec-31">
                        <i className="ti ti-clipboard-list"></i>3.1 静的テストの基本
                    </a>
                </li>
                <li className="nav-sub">
                    <ul className="nav-list">
                        <li>
                            <a className="nav-link" href="#sec-311">
                                <i className="ti ti-file-description"></i>3.1.1 対象成果物
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#sec-312">
                                <i className="ti ti-bulb"></i>3.1.2 価値
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#sec-313">
                                <i className="ti ti-arrows-diff"></i>3.1.3 動的テストとの違い
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="nav-link" href="#sec-32">
                        <i className="ti ti-users-group"></i>3.2 レビュープロセス
                    </a>
                </li>
                <li className="nav-sub">
                    <ul className="nav-list">
                        <li>
                            <a className="nav-link" href="#sec-321">
                                <i className="ti ti-message-2"></i>3.2.1 早期フィードバック
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#sec-322">
                                <i className="ti ti-route"></i>3.2.2 レビュー活動
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#sec-323">
                                <i className="ti ti-id-badge-2"></i>3.2.3 役割と責務
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#sec-324">
                                <i className="ti ti-stack-2"></i>3.2.4 レビュー種別
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#sec-325">
                                <i className="ti ti-trophy"></i>3.2.5 成功要因
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="nav-link" href="#sec-tools">
                        <i className="ti ti-tool"></i>実務補足：解析ツール
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#sec-pitfalls">
                        <i className="ti ti-alert-triangle"></i>誤解・試験ポイント
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#sec-summary">
                        <i className="ti ti-checkbox"></i>まとめ
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#sec-refs">
                        <i className="ti ti-link"></i>参考文献
                    </a>
                </li>
            </ul>
        </nav>
    );
}
