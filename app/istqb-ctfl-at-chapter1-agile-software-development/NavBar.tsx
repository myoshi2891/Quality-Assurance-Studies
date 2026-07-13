'use client';

import { useEffect } from 'react';

export default function NavBar() {
    useEffect(() => {
        const links = document.querySelectorAll('nav.topnav a');
        const sections = Array.from(links)
            .map((link) => {
                const href = link.getAttribute('href');
                if (href?.startsWith('#')) {
                    return document.getElementById(href.slice(1));
                }
                return null;
            })
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                const intersecting = entries.find((entry) => entry.isIntersecting);
                if (intersecting) {
                    const id = intersecting.target.getAttribute('id');
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
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="topnav" aria-label="章ナビゲーション">
            <div className="navinner">
                <a href="#overview">試験概要</a>
                <a href="#chapter-map">章構成</a>
                <a href="#s111">1.1.1 マニフェスト</a>
                <a href="#s112">1.1.2 ホールチーム</a>
                <a href="#s113">1.1.3 フィードバック</a>
                <a href="#s121">1.2.1 XP/Scrum/Kanban</a>
                <a href="#s122">1.2.2 ユーザーストーリー</a>
                <a href="#s123">1.2.3 レトロ</a>
                <a href="#s124">1.2.4 CI</a>
                <a href="#s125">1.2.5 計画</a>
                <a href="#lo-table">学習目標</a>
                <a href="#checklist">チェックリスト</a>
                <a href="#exam-q">演習問題</a>
                <a href="#refs">参照URL</a>
            </div>
        </nav>
    );
}
