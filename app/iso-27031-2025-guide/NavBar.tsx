'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC_ITEMS } from './toc';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [active, setActive] = useState(TOC_ITEMS[0]?.target || '');
    const toggle = useRef<HTMLButtonElement>(null);
    const sidebar = useRef<HTMLElement>(null);

    useEffect(() => {
        const query = window.matchMedia('(max-width: 900px)');
        const update = () => setMobile(query.matches);
        update();
        query.addEventListener('change', update);
        return () => query.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        let frame = 0;
        const headings = TOC_ITEMS.map(item => document.getElementById(item.target)).filter((heading): heading is HTMLElement => heading !== null);

        function update() {
            frame = 0;
            const last = headings[headings.length - 1];
            if (last && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
                setActive(last.id);
                return;
            }
            let current = headings[0]?.id || '';
            for (const heading of headings) {
                if (heading.getBoundingClientRect().top <= (Number.parseFloat(getComputedStyle(heading).scrollMarginTop) || 0) + 2) {
                    current = heading.id;
                }
            }
            setActive(current);
        }

        function schedule() {
            if (!frame) frame = requestAnimationFrame(update);
        }

        const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(schedule, { rootMargin: '-15% 0px -75% 0px' });
        for (const heading of headings) observer?.observe(heading);

        const resizer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule);
        for (const diagram of document.querySelectorAll('.mermaid-diagram')) resizer?.observe(diagram);

        schedule();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);

        return () => {
            observer?.disconnect();
            resizer?.disconnect();
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
        };
    }, []);

    useEffect(() => {
        const panel = sidebar.current;
        const link = panel?.querySelector('[aria-current="location"]');
        if (!panel || !link) return;
        const bounds = link.getBoundingClientRect();
        const viewport = panel.getBoundingClientRect();
        if (bounds.top < viewport.top + 40 || bounds.bottom > viewport.bottom - 40) {
            panel.scrollTop += bounds.top - viewport.top - viewport.height / 2;
        }
    }, [active]);

    useEffect(() => {
        if (!open) return;
        const escape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
                toggle.current?.focus();
            }
        };
        document.addEventListener('keydown', escape);
        return () => document.removeEventListener('keydown', escape);
    }, [open]);

    useEffect(() => {
        if (!mobile || !open) return;
        const main = document.querySelector<HTMLElement>('main.main');
        if (!main) return;
        const hadInert = main.hasAttribute('inert');
        main.setAttribute('inert', '');
        return () => {
            if (!hadInert) main.removeAttribute('inert');
        };
    }, [mobile, open]);

    return (
        <>
            <button
                type="button"
                className="nav-toggle"
                ref={toggle}
                aria-label={open ? '目次を閉じる' : '目次を開く'}
                aria-expanded={open}
                aria-controls="sidebar"
                onClick={() => setOpen(value => !value)}
            >
                ☰ 目次
            </button>
            <aside
                ref={sidebar}
                className={open ? 'sidebar open' : 'sidebar'}
                inert={mobile && !open}
                id="sidebar"
                onBlur={event => {
                    const next = event.relatedTarget as Node | null;
                    if (next && !event.currentTarget.contains(next) && next !== toggle.current) {
                        setOpen(false);
                    }
                }}
                role="navigation"
                aria-label="目次"
            >
                <div className="side-title">ISO/IEC 27031:2025</div>
                <nav>
                    {TOC_ITEMS.map(item => (
                        <a
                            key={item.target}
                            href={item.href}
                            data-target={item.target}
                            className={`${item.level === 'h3' ? 'nav-h3' : 'nav-h2'}${active === item.target ? ' active' : ''}`}
                            aria-current={active === item.target ? 'location' : undefined}
                            onClick={event => {
                                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                                setOpen(false);
                            }}
                        >
                            {item.text}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    );
}
