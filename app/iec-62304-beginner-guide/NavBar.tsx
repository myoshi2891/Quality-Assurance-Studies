'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TOC_GROUPS } from './toc';

const TOC_IDS = TOC_GROUPS.flatMap(group => [group.id, ...group.children.map(child => child.id)]);
type TocLink = { readonly id: string; readonly label: string };

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('');
    const sidebarRef = useRef<HTMLElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) setActive(entry.target.id);
            }
        }, { rootMargin: '-15% 0px -75% 0px' });
        for (const id of TOC_IDS) {
            const heading = document.getElementById(id);
            if (heading) observer.observe(heading);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!active) return;
        const sidebar = sidebarRef.current;
        const link = sidebar?.querySelector('a[aria-current="location"]');
        if (!sidebar || !link) return;
        const bounds = link.getBoundingClientRect();
        const viewport = sidebar.getBoundingClientRect();
        if (bounds.top < viewport.top + 60 || bounds.bottom > viewport.bottom - 20) {
            sidebar.scrollTop += bounds.top - viewport.top - viewport.height / 3;
        }
    }, [active]);

    useEffect(() => {
        if (!isOpen) return;
        const escape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener('keydown', escape);
        return () => document.removeEventListener('keydown', escape);
    }, [isOpen]);

    const link = (item: TocLink) => (
        <a href={`#${item.id}`} data-target={item.id}
            className={active === item.id ? 'active' : undefined}
            aria-current={active === item.id ? 'location' : undefined}
            onClick={() => setIsOpen(false)}>
            {item.label}
        </a>
    );

    return <>
        <button className="nav-toggle" id="navToggle" type="button" ref={toggleRef}
            aria-label={isOpen ? '目次を閉じる' : '目次を開く'} aria-controls="sidebar"
            aria-expanded={isOpen} onClick={() => setIsOpen(open => !open)}>
            ☰ 目次
        </button>
        <nav className={isOpen ? 'sidebar open' : 'sidebar'} ref={sidebarRef} id="sidebar" aria-label="目次">
            <div className="brand">
                <span className="brand-mark">62304</span><span className="brand-text">IEC 62304 ガイド</span>
            </div>
            <ul className="nav-list">
                {TOC_GROUPS.map(group => (
                    <li key={group.id} className={active === group.id || group.children.some(child => child.id === active) ? 'nav-h2 open' : 'nav-h2'}>
                        {link(group)}
                        {group.children.length > 0 && <ul className="nav-sub">
                            {group.children.map(child => <li key={child.id}>{link(child)}</li>)}
                        </ul>}
                    </li>
                ))}
            </ul>
        </nav>
    </>;
}
