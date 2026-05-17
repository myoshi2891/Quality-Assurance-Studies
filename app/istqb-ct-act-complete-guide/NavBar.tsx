'use client';

import { useEffect, useState } from 'react';

/**
 * 現在最も表示されているコンテンツセクションをハイライトするスティッキーナビゲーションバーをレンダリングする。
 *
 * `section[id]` または `div[id="top"]` のうちビューポートで最も表示されている要素を追跡し、
 * 対応するリンクにアクティブ状態（`class="active"` および `aria-current="location"`）を付与する。
 *
 * @returns ページセクションへのリンクと `#top` へのロゴリンクを含むナビゲーションバー React 要素
 */
export default function NavBar() {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const ratios = new Map<string, number>();
        const sections = document.querySelectorAll<HTMLElement>('section[id], div[id="top"]');
        sections.forEach((s) => ratios.set(s.id, 0));

        let observer: IntersectionObserver | null = null;
        let lastTopOffset = -1;

        const rebuild = () => {
            const disclaimerRaw = getComputedStyle(document.documentElement)
                .getPropertyValue('--disclaimer-height')
                .trim();
            const disclaimerHeight = Number.parseFloat(disclaimerRaw) || 0;
            const topOffset = 60 + disclaimerHeight;
            if (topOffset === lastTopOffset) return;
            lastTopOffset = topOffset;

            observer?.disconnect();
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const id = (entry.target as HTMLElement).id;
                        ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
                    });

                    let bestId = '';
                    let bestRatio = 0;
                    for (const [id, ratio] of ratios) {
                        if (ratio > bestRatio) {
                            bestRatio = ratio;
                            bestId = id;
                        }
                    }
                    setActiveId((prev) => (prev === bestId ? prev : bestId));
                },
                {
                    rootMargin: `-${topOffset}px 0px -80% 0px`,
                    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
                }
            );
            sections.forEach((s) => observer!.observe(s));
        };

        rebuild();
        window.addEventListener('resize', rebuild);

        let ro: ResizeObserver | undefined;
        if (typeof ResizeObserver !== 'undefined') {
            ro = new ResizeObserver(rebuild);
            ro.observe(document.documentElement);
        }

        return () => {
            observer?.disconnect();
            ro?.disconnect();
            window.removeEventListener('resize', rebuild);
        };
    }, []);

    const link = (id: string, label: string) => (
        <a
            href={`#${id}`}
            className={activeId === id ? 'active' : ''}
            aria-current={activeId === id ? 'location' : undefined}
        >
            {label}
        </a>
    );

    return (
        <nav className="sticky-nav" aria-label="CT-AcT セクションナビゲーション">
            <div className="nav-inner">
                <a href="#top" className="nav-logo" aria-current={activeId === 'top' ? 'location' : undefined}>
                    &gt;_CT-AcT
                </a>
                {link('overview', '概要')}
                {link('ch1', 'CH1 基礎')}
                {link('ch2', 'CH2 基準・設計')}
                {link('ch3', 'CH3 プロセス')}
                {link('ch4', 'CH4 非機能')}
                {link('ch5', 'CH5 協調')}
                {link('exam', '試験対策')}
                {link('refs', '参考文献')}
            </div>
        </nav>
    );
}
