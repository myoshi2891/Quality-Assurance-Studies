'use client';

import { useEffect, useState } from 'react';

export default function NavBar() {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);
                if (visibleEntries.length > 0) {
                    // 交差しているエントリーの中で最も交差率が高いものを選択し、チラつきを防ぐ
                    const bestEntry = visibleEntries.reduce((prev, curr) =>
                        curr.intersectionRatio > prev.intersectionRatio ? curr : prev
                    );
                    setActiveId(bestEntry.target.id);
                }
            },
            { rootMargin: '-60px 0px -80% 0px' }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="sticky-nav sticky top-[60px] z-40">
            <div className="nav-inner">
                <span className="nav-logo">CT-GenAI v1.0</span>
                <a className={`nav-link ${activeId === 'toc' ? 'active' : ''}`} href="#toc">📋 目次</a>
                <a className={`nav-link ${activeId === 'ch0' ? 'active' : ''}`} href="#ch0">Ch.0 概要</a>
                <a className={`nav-link ${activeId === 'ch1' ? 'active' : ''}`} href="#ch1">Ch.1 入門</a>
                <a className={`nav-link ${activeId === 'ch2' ? 'active' : ''}`} href="#ch2">Ch.2 プロンプト</a>
                <a className={`nav-link ${activeId === 'ch3' ? 'active' : ''}`} href="#ch3">Ch.3 リスク</a>
                <a className={`nav-link ${activeId === 'ch4' ? 'active' : ''}`} href="#ch4">Ch.4 インフラ</a>
                <a className={`nav-link ${activeId === 'ch5' ? 'active' : ''}`} href="#ch5">Ch.5 導入</a>
                <a className={`nav-link ${activeId === 'exam' ? 'active' : ''}`} href="#exam">📝 試験対策</a>
                <a className={`nav-link ${activeId === 'refs' ? 'active' : ''}`} href="#refs">🔗 参考文献</a>
            </div>
        </nav>
    );
}
