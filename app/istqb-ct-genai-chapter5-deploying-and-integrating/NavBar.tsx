'use client';

import React, { useEffect, useState } from 'react';

export interface NavItem {
    href: string;
    text: string;
}

export const NAV_LINKS: NavItem[] = [
    { href: '#s1', text: '1. この章の全体像' },
    { href: '#s2', text: '2. 5.1 導入ロードマップ（概要）' },
    { href: '#s3', text: '3. 5.1.1 シャドーAIのリスク' },
    { href: '#s4', text: '4. 5.1.2 生成AI戦略の観点' },
    { href: '#s5', text: '5. 5.1.3 LLM/SLMの選定' },
    { href: '#s6', text: '6. 5.1.4 導入のフェーズ' },
    { href: '#s7', text: '7. 5.2 変革管理（概要）' },
    { href: '#s8', text: '8. 5.2.1 必要なスキルと知識' },
    { href: '#s9', text: '9. 5.2.2 チーム能力の構築' },
    { href: '#s10', text: '10. 5.2.3 テストプロセスの進化' },
    { href: '#s11', text: '11. 導入形態別ベストプラクティス' },
    { href: '#s12', text: '12. 関連規制・標準' },
    { href: '#s13', text: '13. まとめ・重要用語' },
    { href: '#s14', text: '14. 確認問題' },
    { href: '#s15', text: '15. 学習チェックリスト' },
    { href: '#s16', text: '16. 参考文献・出典URL' },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('s1');

    const toggleOpen = () => setIsOpen((prev) => !prev);
    const closeSidebar = () => setIsOpen(false);

    useEffect(() => {
        const sections = NAV_LINKS.map((item) => {
            const id = item.href.replace('#', '');
            return document.getElementById(id);
        }).filter((el): el is HTMLElement => el !== null);

        let observer: IntersectionObserver | null = null;
        try {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveId(entry.target.id);
                        }
                    });
                },
                { rootMargin: '-20% 0px -70% 0px' }
            );

            sections.forEach((sec) => observer?.observe(sec));
        } catch {
            // SSRや環境差異のフォールバック
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <>
            <button
                type="button"
                className="mobile-nav-toggle"
                onClick={toggleOpen}
                aria-expanded={isOpen}
                aria-label="目次メニューを開閉"
            >
                <span className="hamburger-icon" aria-hidden="true">
                    ☰
                </span>
                <span>目次</span>
            </button>

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="brand">
                    <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <circle
                            cx="17"
                            cy="17"
                            r="16"
                            stroke="#2E3F72"
                            strokeWidth="1.2"
                            fill="#EEF1F8"
                        />
                        <path
                            d="M17 6 L26 10.5 V17 C26 23 22 27.5 17 29 C12 27.5 8 23 8 17 V10.5 Z"
                            stroke="#2E3F72"
                            strokeWidth="1.1"
                            fill="#FAF1DF"
                        />
                        <path
                            d="M12.5 17.5 L15.5 20.5 L21.5 13.5"
                            stroke="#1B6E6A"
                            strokeWidth="1.6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div>
                        <div className="brand-title">CT-GenAI 学習ガイド</div>
                        <div className="brand-sub">第5章：組織導入と統合</div>
                    </div>
                </div>

                <nav aria-label="ページ内目次">
                    <ul>
                        {NAV_LINKS.map((link) => {
                            const id = link.href.replace('#', '');
                            const isActive = activeId === id;
                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={isActive ? 'active' : undefined}
                                        aria-current={isActive ? 'true' : undefined}
                                        onClick={closeSidebar}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>

            {isOpen && (
                <div
                    className="sidebar-backdrop"
                    onClick={closeSidebar}
                    aria-hidden="true"
                />
            )}

            <style jsx>{`
                .mobile-nav-toggle {
                    display: none;
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 50;
                    background: var(--color-indigo);
                    color: #fff;
                    border: none;
                    border-radius: 999px;
                    padding: 10px 18px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(46, 63, 114, 0.35);
                    align-items: center;
                    gap: 8px;
                }

                .sidebar {
                    position: fixed;
                    top: 60px; /* グローバルヘッダー下 */
                    left: 0;
                    bottom: 0;
                    width: 288px;
                    background: var(--color-paper-alt);
                    border-right: 1px solid var(--color-border);
                    overflow-y: auto;
                    padding: 24px 0 40px;
                    z-index: 40;
                }

                .brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 0 20px 18px;
                    border-bottom: 1px solid var(--color-border);
                    margin-bottom: 16px;
                }

                .brand-title {
                    font-family: var(--font-serif);
                    font-size: 14.5px;
                    font-weight: 600;
                    line-height: 1.4;
                    color: var(--color-ink);
                }

                .brand-sub {
                    font-size: 12px;
                    color: var(--color-ink-faint);
                    margin-top: 2px;
                    letter-spacing: 0.02em;
                }

                .sidebar nav {
                    padding: 0 12px;
                }

                .sidebar nav ul {
                    list-style: none !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }

                .sidebar nav li {
                    padding-left: 0 !important;
                    margin-bottom: 2px !important;
                }

                .sidebar nav a {
                    display: block;
                    padding: 8px 12px;
                    border-radius: var(--radius-md);
                    color: var(--color-ink-soft);
                    text-decoration: none !important;
                    font-size: 13.5px;
                    font-weight: 500;
                    border-left: 3px solid transparent;
                    transition: background 0.15s, color 0.15s;
                    line-height: 1.5;
                }

                .sidebar nav a:hover {
                    background: var(--color-indigo-tint);
                    color: var(--color-indigo);
                }

                .sidebar nav a.active {
                    background: var(--color-indigo-tint);
                    color: var(--color-indigo);
                    border-left-color: var(--color-indigo);
                    font-weight: 600;
                }

                .sidebar-backdrop {
                    display: none;
                }

                @media (max-width: 900px) {
                    .mobile-nav-toggle {
                        display: flex;
                    }

                    .sidebar {
                        position: fixed;
                        top: 60px;
                        left: -288px;
                        transition: left 0.25s ease;
                    }

                    .sidebar.open {
                        left: 0;
                    }

                    .sidebar-backdrop {
                        display: block;
                        position: fixed;
                        inset: 0;
                        background: rgba(0, 0, 0, 0.4);
                        z-index: 35;
                    }
                }
            `}</style>
        </>
    );
}
