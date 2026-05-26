'use client';

import { useEffect } from 'react';

/**
 * ユーザビリティテスト完全ガイド (CT-UT) 用のスティッキー章ナビゲーション。
 * スクロール位置に応じてアクティブなセクションのリンクに `aria-current="location"` を設定します。
 */
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
                const intersectingEntry = entries.find((entry) => entry.isIntersecting);
                if (intersectingEntry) {
                    const id = intersectingEntry.target.getAttribute('id');
                    links.forEach((link) => {
                        if (link.getAttribute('href') === `#${id}`) {
                            link.setAttribute('aria-current', 'location');
                        } else {
                            link.removeAttribute('aria-current');
                        }
                    });
                }
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
                <span className="nav-logo">CT-UT</span>
                <a className="nav-link" href="#toc">目次</a>
                <a className="nav-link" href="#ch0">Ch.0 概要</a>
                <a className="nav-link" href="#ch1">Ch.1 基本概念</a>
                <a className="nav-link" href="#ch2">Ch.2 リスク</a>
                <a className="nav-link" href="#ch3">Ch.3 標準規格</a>
                <a className="nav-link" href="#ch4">Ch.4 レビュー</a>
                <a className="nav-link" href="#ch5">Ch.5 テスト</a>
                <a className="nav-link" href="#ch6">Ch.6 調査</a>
                <a className="nav-link" href="#ch7">Ch.7 手法選択</a>
                <a className="nav-link" href="#ch8">Ch.8 役割</a>
                <a className="nav-link" href="#exam">試験対策</a>
                <a className="nav-link" href="#refs">参考文献</a>
            </div>
        </nav>
    );
}
