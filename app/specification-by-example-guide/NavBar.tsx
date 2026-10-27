'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC } from './toc';
const IDS = TOC.flatMap((item) => [item.id, ...item.children.map((child) => child.id)]);
export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<string>('s1');
    const button = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
            },
            { rootMargin: '-20% 0px -70% 0px' },
        );
        for (const id of IDS) {
            const target = document.getElementById(id);
            if (target) observer.observe(target);
        }
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (!open) return;
        const escape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
                button.current?.focus();
            }
        };
        document.addEventListener('keydown', escape);
        return () => document.removeEventListener('keydown', escape);
    }, [open]);
    const select = (id: string) => {
        setActive(id);
        if (open) button.current?.focus({ preventScroll: true });
        setOpen(false);
    };
    return (
        <>
            <div className="mobile-bar">
                <button
                    id="menuToggle"
                    type="button"
                    ref={button}
                    aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
                    aria-controls="sidebar"
                    aria-expanded={open}
                    onClick={() => setOpen((value) => !value)}
                >
                    <i className="ti ti-menu-2" />
                    メニュー
                </button>
            </div>
            <nav className={open ? 'sidebar open' : 'sidebar'} id="sidebar" aria-label="目次">
                <div className="sidebar-brand">
                    <i className="ti ti-books" />
                    SbE 実践ガイド
                </div>
                <ul className="nav-list">
                    {TOC.map((item) => (
                        <li key={item.id}>
                            <a
                                className={`nav-a${active === item.id || item.children.some((child) => child.id === active) ? ' active' : ''}`}
                                href={`#${item.id}`}
                                aria-current={active === item.id ? 'location' : undefined}
                                onClick={() => select(item.id)}
                            >
                                <i className={item.icon} />
                                {item.label}
                            </a>
                            {item.children.length > 0 && (
                                <ul className="nav-sub">
                                    {item.children.map((child) => (
                                        <li key={child.id}>
                                            <a
                                                href={`#${child.id}`}
                                                aria-current={
                                                    active === child.id ? 'location' : undefined
                                                }
                                                onClick={() => select(child.id)}
                                            >
                                                {child.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
