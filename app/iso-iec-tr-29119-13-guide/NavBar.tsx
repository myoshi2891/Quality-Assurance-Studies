'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TOC_ITEMS } from './toc';

/** Preserve the responsive drawer, keyboard focus cycle and measured current-section links. */
export default function NavBar() {
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const nav = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 1024px)');
    /** Close the drawer when switching back to the desktop column. */
    const update = () => { setMobile(query.matches); if (!query.matches) setOpen(false); };
    update(); query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!mobile || !open) return;
    const app = nav.current?.closest('.app');
    const main = app?.querySelector('.main');
    const inert = main?.hasAttribute('inert');
    const overflow = document.body.style.overflow;
    app?.classList.add('toc-open'); main?.setAttribute('inert', '');
    document.body.style.overflow = 'hidden';
    nav.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    return () => {
      app?.classList.remove('toc-open');
      if (!inert) main?.removeAttribute('inert');
      document.body.style.overflow = overflow;
    };
  }, [mobile, open]);

  /** Dismiss the drawer, optionally returning keyboard focus to its floating toggle. */
  function close(restoreFocus = true) {
    if (restoreFocus) button.current?.focus();
    setOpen(false);
  }

  useEffect(() => {
    if (!mobile || !open) return;
    /** Cycle through the drawer links and floating close button in either direction. */
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { close(); return; }
      if (event.key !== 'Tab') return;
      const items: HTMLElement[] = [...(nav.current?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? []), ...(button.current ? [button.current] : [])];
      const index = items.indexOf(document.activeElement as HTMLElement);
      const next = index < 0 ? 0 : (index + (event.shiftKey ? -1 : 1) + items.length) % items.length;
      event.preventDefault(); items[next]?.focus();
    };
    document.addEventListener('keydown', keydown);
    return () => document.removeEventListener('keydown', keydown);
  }, [mobile, open]);

  useEffect(() => {
    const headings = TOC_ITEMS.map(i => document.getElementById(i.href.slice(1))).filter((h): h is HTMLElement => !!h);
    let frame = 0;
    /** Recompute from document geometry so upward or fast scrolling cannot retain stale headings. */
    function update() {
      frame = 0;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) { setActive(TOC_ITEMS.at(-1)!.href); return; }
      let current = '';
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= (Number.parseFloat(getComputedStyle(h).scrollMarginTop) || 80) + 2) current = '#' + h.id;
      }
      setActive(current);
    }
    /** Coalesce independent scroll/resize/observer notifications. */
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    /** Honor only fragments that identify a registered chapter. */
    const hash = () => { if (TOC_ITEMS.some(i => i.href === location.hash)) setActive(location.hash); };
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(schedule, { rootMargin: '-20% 0px -70% 0px' });
    headings.forEach(h => observer?.observe(h));
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', hash);
    if (TOC_ITEMS.some(i => i.href === location.hash)) hash(); else schedule();
    return () => {
      observer?.disconnect(); cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); window.removeEventListener('hashchange', hash);
    };
  }, []);

  return <>
    <nav className="toc" id="toc" aria-label="目次" ref={nav} inert={mobile && !open}>
      <div className="toc-title">目次</div>
      {TOC_ITEMS.map(item => <a key={item.href} href={item.href} className={active === item.href ? 'active' : undefined} aria-current={active === item.href ? 'location' : undefined} onClick={event => { if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; close(mobile && open); }}>{item.text}</a>)}
    </nav>
    <div className="toc-backdrop" id="toc-backdrop" onClick={() => close()} />
    <button className="toc-fab" id="toc-fab" type="button" ref={button} aria-label={open ? '目次を閉じる' : '目次を開く'} aria-expanded={open} aria-controls="toc" onClick={() => setOpen(value => !value)}>
      <span className="bar" /><span className="bar" /><span className="bar" />
    </button>
  </>;
}
