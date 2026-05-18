'use client';

import { useEffect } from 'react';

export default function NavBar() {
    useEffect(() => {
        const links = document.querySelectorAll('.nav-link');
        const sections = Array.from(links)
            .map((link) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    return document.querySelector(href);
                }
                return null;
            })
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        links.forEach((link) => {
                            if (link.getAttribute('href') === `#${id}`) {
                                link.setAttribute('aria-current', 'true');
                            } else {
                                link.removeAttribute('aria-current');
                            }
                        });
                    }
                });
            },
            { rootMargin: '-20% 0px -80% 0px' }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav className="sticky-nav" aria-label="章ナビゲーション">
            <div className="nav-inner">
                <span className="nav-brand">CT-PT</span>
                <a className="nav-link" href="#overview">概要</a>
                <a className="nav-link" href="#ch1">Ch.1 基本概念</a>
                <a className="nav-link" href="#ch2">Ch.2 メトリクス</a>
                <a className="nav-link" href="#ch3">Ch.3 ライフサイクル</a>
                <a className="nav-link" href="#ch4">Ch.4 タスク</a>
                <a className="nav-link" href="#ch5">Ch.5 ツール</a>
                <a className="nav-link" href="#exam">試験対策</a>
                <a className="nav-link" href="#refs">参考文献</a>
            </div>
        </nav>
    );
}
