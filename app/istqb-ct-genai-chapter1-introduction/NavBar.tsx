'use client';

import React, { useEffect, useState } from 'react';

export interface NavItem {
    href: string;
    text: string;
    isH3?: boolean;
}

export const NAV_LINKS: NavItem[] = [
    { href: '#この章の位置づけと全体像', text: 'この章の位置づけと全体像' },
    { href: '#学習目標一覧', text: '学習目標一覧' },
    { href: '#重要キーワード一覧', text: '重要キーワード一覧' },
    { href: '#11-生成aiの基礎と主要概念', text: '1.1 生成AIの基礎と主要概念' },
    { href: '#111-aiの系譜記号的ai古典的機械学習深層学習生成ai', text: '1.1.1 AIの系譜：記号的AI・古典的機械学習・深層学習・生成AI', isH3: true },
    { href: '#112-生成aiとllmの基礎', text: '1.1.2 生成AIとLLMの基礎', isH3: true },
    { href: '#113-基盤llm指示チューニング済みllm推論llm', text: '1.1.3 基盤LLM・指示チューニング済みLLM・推論LLM', isH3: true },
    { href: '#114-マルチモーダルllmとvision-language-model', text: '1.1.4 マルチモーダルLLMとVision-Language Model', isH3: true },
    { href: '#12-ソフトウェアテストにおける生成ai活用の原則', text: '1.2 ソフトウェアテストにおける生成AI活用の原則' },
    { href: '#121-テストタスクにおけるllmの主要能力', text: '1.2.1 テストタスクにおけるLLMの主要能力', isH3: true },
    { href: '#122-aiチャットボットとllm搭載テストアプリケーション', text: '1.2.2 AIチャットボットとLLM搭載テストアプリケーション', isH3: true },
    { href: '#章のまとめ', text: '章のまとめ' },
    { href: '#出典参考文献', text: '出典・参考文献' },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('');

    const toggleOpen = () => setIsOpen((prev) => !prev);
    const closeSidebar = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY <= 0) {
                setActiveId('');
            }
        };

        const headings = NAV_LINKS.map((item) => {
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
                { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
            );

            headings.forEach((h) => observer?.observe(h));
        } catch {
            // IntersectionObserver not supported in SSR/HappyDOM
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer?.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const targetId = href.replace('#', '');
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            closeSidebar();
            if (!target.hasAttribute('tabindex')) {
                target.setAttribute('tabindex', '-1');
            }
            target.focus({ preventScroll: true });
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', '#' + encodeURIComponent(target.id));
            setActiveId(targetId);
        }
    };

    return (
        <>
            <button
                className="sidebar-toggle"
                id="sidebarToggle"
                aria-label="メニューを開く"
                aria-controls="sidebar"
                aria-expanded={isOpen ? 'true' : 'false'}
                onClick={toggleOpen}
            >
                ☰
            </button>
            <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
                <div className="sidebar-header">
                    <span className="badge">CT-GenAI</span>
                    <h2>第1章：生成AI入門</h2>
                </div>
                <ul className="nav-list">
                    {NAV_LINKS.map((item) => {
                        const targetId = item.href.replace('#', '');
                        const isActive = activeId === targetId;
                        return (
                            <li key={item.href} className={item.isH3 ? 'nav-h3' : 'nav-h2'}>
                                <a
                                    href={item.href}
                                    data-target={targetId}
                                    className={isActive ? 'active' : ''}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                >
                                    {item.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
