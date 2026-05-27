'use client';

import React, { useEffect, useState } from 'react';

export default function NavBar() {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-80px 0px -80% 0px' }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const links = [
        { id: 'overview', label: '概要' },
        { id: 'ch1', label: 'Ch1 リスク' },
        { id: 'ch2', label: 'Ch2 ホワイトボックス' },
        { id: 'ch3', label: 'Ch3 静的/動的' },
        { id: 'ch4', label: 'Ch4 品質特性' },
        { id: 'ch5', label: 'Ch5 レビュー' },
        { id: 'ch6', label: 'Ch6 ツール' },
        { id: 'exam', label: '試験対策' },
        { id: 'refs', label: '参考資料' }
    ];

    return (
        <nav className="sticky top-[60px] z-40 bg-[#030712]/92 backdrop-blur-md border-b border-[rgba(0,229,255,0.15)] py-3">
            <div className="max-w-[960px] mx-auto px-6 flex items-center gap-4">
                <div className="font-mono text-[0.8rem] text-accent-cyan whitespace-nowrap tracking-wider">
                    CTAL-TTA
                </div>
                <div className="flex gap-2 overflow-x-auto pb-[2px] no-scrollbar">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            aria-current={activeId === link.id ? 'location' : undefined}
                            className={`font-mono text-[0.72rem] px-3 py-1 border rounded-full whitespace-nowrap transition-all ${
                                activeId === link.id
                                    ? 'text-accent-cyan border-accent-cyan bg-accent-cyan/10'
                                    : 'text-text-secondary border-transparent hover:text-accent-cyan hover:border-accent-cyan hover:bg-accent-cyan/10'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
