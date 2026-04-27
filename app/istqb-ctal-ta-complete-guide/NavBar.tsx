'use client';

import { useEffect, useRef } from 'react';

const NAV_ITEMS = [
    { href: '#ch0', label: '概要',           dot: '#00d4ff' },
    { href: '#ch1', label: 'Ch.1 テストプロセス', dot: '#00ff87' },
    { href: '#ch2', label: 'Ch.2 リスクベース',   dot: '#ffb300' },
    { href: '#ch3', label: 'Ch.3 分析・設計',     dot: '#00d4ff' },
    { href: '#ch4', label: 'Ch.4 品質特性',       dot: '#b36bff' },
    { href: '#ch5', label: 'Ch.5 欠陥防止',       dot: '#ff6b6b' },
    { href: '#exam', label: '試験対策',           dot: '#ffb300' },
    { href: '#refs', label: '参考文献',           dot: '#b36bff' },
] as const;

export default function NavBar() {
    const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

    useEffect(() => {
        const validIds = new Set(NAV_ITEMS.map(item => item.href.slice(1)));
        const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]')).filter(s => validIds.has(s.id));

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (!e.isIntersecting) return;
                    if (!validIds.has(e.target.id)) return;
                    linkRefs.current.forEach((el) => el.classList.remove('active'));
                    const active = linkRefs.current.get(`#${e.target.id}`);
                    if (active) active.classList.add('active');
                });
            },
            { threshold: 0.15, rootMargin: '-60px 0px 0px 0px' },
        );

        sections.forEach((s) => obs.observe(s));
        return () => obs.disconnect();
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <span className="navbar-brand">CTAL-TA v4.0</span>
                {NAV_ITEMS.map(({ href, label, dot }) => (
                    <a
                        key={href}
                        href={href}
                        className="nav-link"
                        ref={(el) => {
                            if (el) linkRefs.current.set(href, el);
                            else linkRefs.current.delete(href);
                        }}
                    >
                        <span className="nav-dot" style={{ background: dot }} />
                        {label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
