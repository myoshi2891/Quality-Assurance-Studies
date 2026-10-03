'use client';

import React, { useState, useEffect } from 'react';

export interface NavItem {
    id: string;
    label: string;
    icon: string;
}

export const NAV_ITEMS: NavItem[] = [
    { id: 's0', label: '本ガイドの読み方', icon: 'ti ti-info-circle' },
    { id: 's1', label: '第4章の全体像', icon: 'ti ti-map-2' },
    { id: 's2', label: '4.1.1 基本アーキテクチャ', icon: 'ti ti-stack-2' },
    { id: 's3', label: '4.1.2 RAG', icon: 'ti ti-database-search' },
    { id: 's4', label: '4.1.3 LLM搭載エージェント', icon: 'ti ti-robot' },
    { id: 's5', label: '4.2.1 ファインチューニング', icon: 'ti ti-adjustments' },
    { id: 's6', label: '4.2.2 LLMOps', icon: 'ti ti-settings-cog' },
    { id: 's7', label: '手法の使い分け', icon: 'ti ti-git-branch' },
    { id: 's8', label: '用語集', icon: 'ti ti-book-2' },
    { id: 's9', label: '学習目標対応表', icon: 'ti ti-table' },
    { id: 's10', label: '確認問題', icon: 'ti ti-help-circle' },
    { id: 's11', label: '試験直前チェックリスト', icon: 'ti ti-checklist' },
    { id: 's12', label: '参考文献', icon: 'ti ti-link' },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('s0');

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.25;
            let current = 's0';
            for (const item of NAV_ITEMS) {
                const el = document.getElementById(item.id);
                if (el) {
                    const top = el.getBoundingClientRect().top;
                    if (top <= threshold) {
                        current = item.id;
                    }
                }
            }
            setActiveId(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleOpen = () => setIsOpen((prev) => !prev);
    const closeSidebar = () => setIsOpen(false);

    return (
        <>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
                <div className="sidebar-brand">
                    <span className="badge">CT-GenAI 第4章</span>
                    <h1>LLM搭載テストインフラ</h1>
                    <p>初学者向け完全ガイド／ステップバイステップ</p>
                </div>
                <nav>
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={activeId === item.id ? 'active' : ''}
                            onClick={closeSidebar}
                        >
                            <i className={item.icon}></i>
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="sidebar-foot">
                    出典：
                    <a
                        href="https://istqb.org/certifications/gen-ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ISTQB CT-GenAI 公式ページ
                    </a>
                </div>
            </aside>

            <div className="mobile-bar">
                <button
                    id="mobileMenuBtn"
                    type="button"
                    onClick={toggleOpen}
                    aria-expanded={isOpen}
                    aria-controls="sidebar"
                >
                    <i className="ti ti-menu-2"></i>
                    {isOpen ? '目次を閉じる' : '目次を開く'}
                </button>
            </div>
        </>
    );
}
