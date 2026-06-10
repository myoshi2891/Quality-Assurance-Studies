'use client';

import { useEffect, useState } from 'react';

/**
 * Renders a sticky in-page navigation bar that highlights the anchor corresponding to the section currently visible in the viewport.
 *
 * The component tracks all `section[id]` elements and applies the `active` CSS class to the matching link so the navigation reflects the user's scroll position.
 *
 * @returns The JSX element for the sticky navigation with links to table of contents, chapters, exam, and references; the link for the currently visible section will include the `active` class.
 */
export default function NavBar() {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);
                if (visibleEntries.length > 0) {
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
        <nav className="sticky-nav sticky z-40" style={{ top: 'calc(60px + var(--disclaimer-height, 0px))' }} aria-label="CT-GaMe セクションナビゲーション">
            <div className="nav-inner">
                <span className="nav-logo">&#127918; CT-GaMe</span>
                <a className={`nav-link ${activeId === 'overview' ? 'active' : ''}`} href="#overview" aria-current={activeId === 'overview' ? 'location' : undefined}>概要</a>
                <a className={`nav-link ${activeId === 'ch1' ? 'active' : ''}`} href="#ch1" aria-current={activeId === 'ch1' ? 'location' : undefined}>Ch.1</a>
                <a className={`nav-link ${activeId === 'ch2' ? 'active' : ''}`} href="#ch2" aria-current={activeId === 'ch2' ? 'location' : undefined}>Ch.2 メカニクス</a>
                <a className={`nav-link ${activeId === 'ch3' ? 'active' : ''}`} href="#ch3" aria-current={activeId === 'ch3' ? 'location' : undefined}>Ch.3 グラフィックス</a>
                <a className={`nav-link ${activeId === 'ch4' ? 'active' : ''}`} href="#ch4" aria-current={activeId === 'ch4' ? 'location' : undefined}>Ch.4 サウンド</a>
                <a className={`nav-link ${activeId === 'ch5' ? 'active' : ''}`} href="#ch5" aria-current={activeId === 'ch5' ? 'location' : undefined}>Ch.5 コントローラー</a>
                <a className={`nav-link ${activeId === 'ch6' ? 'active' : ''}`} href="#ch6" aria-current={activeId === 'ch6' ? 'location' : undefined}>Ch.6 レベル</a>
                <a className={`nav-link ${activeId === 'ch7' ? 'active' : ''}`} href="#ch7" aria-current={activeId === 'ch7' ? 'location' : undefined}>Ch.7 ローカライズ</a>
                <a className={`nav-link ${activeId === 'tools' ? 'active' : ''}`} href="#tools" aria-current={activeId === 'tools' ? 'location' : undefined}>ツール</a>
                <a className={`nav-link ${activeId === 'exam' ? 'active' : ''}`} href="#exam" aria-current={activeId === 'exam' ? 'location' : undefined}>試験対策</a>
                <a className={`nav-link ${activeId === 'refs' ? 'active' : ''}`} href="#refs" aria-current={activeId === 'refs' ? 'location' : undefined}>参照URL</a>
            </div>
        </nav>
    );
}
