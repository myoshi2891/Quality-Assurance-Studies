'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC } from './toc';
export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');
    const button = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
        }, { rootMargin: '-20% 0px -70% 0px' });
        for (const item of TOC) {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        }
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (!open) return;
        const escape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') { setOpen(false); button.current?.focus(); }
        };
        document.addEventListener('keydown', escape);
        return () => document.removeEventListener('keydown', escape);
    }, [open]);
    return <nav className={open ? 'sidebar open' : 'sidebar'} aria-label="目次">
        <div className="brand">Software Testing</div>
        <div className="brand-sub">A Craftsman&apos;s Approach 入門ガイド</div>
        <h2>目次</h2>
        <button className="toc-toggle" type="button" ref={button} aria-expanded={open} aria-controls="craftsmans-toc" onClick={() => setOpen(value => !value)}>{open ? '目次を閉じる' : '目次を開く'}</button>
        <ul id="craftsmans-toc">{TOC.map(item => <li key={item.id}><a href={`#${item.id}`} className={active === item.id ? 'active' : undefined} aria-current={active === item.id ? 'location' : undefined} onClick={() => {
            setActive(item.id); if (open) button.current?.focus({ preventScroll: true }); setOpen(false);
        }}>{item.label}</a></li>)}</ul>
    </nav>;
}
