import { afterEach, describe, expect, it, mock } from 'bun:test';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import inventory from '../../docs/migration-inventory/iso-23009-1-2026-guide.json';
afterEach(cleanup);
describe('TOC interactions', () => {
    it('toggles, closes on anchor, closes on Escape and restores focus', async () => {
        const entry = '../../app/iso-23009-1-2026-guide/NavBar'; const Nav = (await import(entry)).default;
        const view = render(<Nav />); const button = view.getByRole('button', { name: '目次を開く' });
        expect(button.getAttribute('aria-expanded')).toBe('false'); fireEvent.click(button); expect(button.getAttribute('aria-expanded')).toBe('true'); expect(view.container.querySelector('.sidebar.open')).not.toBeNull();
        fireEvent.click(view.container.querySelector('a')!); expect(button.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(button); fireEvent.keyDown(document, { key: 'Escape' }); expect(button.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(button);
    });
    it('returns focus to the toggle only when a link closes the open TOC', async () => {
        const entry = '../../app/iso-23009-1-2026-guide/NavBar'; const Nav = (await import(entry)).default;
        const view = render(<Nav />); const button = view.getByRole('button', { name: '目次を開く' }); const anchor = view.container.querySelector('a')!;
        anchor.focus(); fireEvent.click(anchor); expect(document.activeElement).toBe(anchor);
        fireEvent.click(button); anchor.focus(); fireEvent.click(anchor);
        expect(document.activeElement).toBe(button); expect(button.getAttribute('aria-expanded')).toBe('false');
    });
    it('observes all 40 anchors, selects each link and disconnects on unmount', async () => {
        const previous = globalThis.IntersectionObserver; let callback: IntersectionObserverCallback | undefined; const observed: Element[] = []; const disconnect = mock(() => {});
        globalThis.IntersectionObserver = class { constructor(cb: IntersectionObserverCallback) { callback = cb; } observe(el: Element) { observed.push(el); } disconnect = disconnect; } as unknown as typeof IntersectionObserver;
        const targets = document.createElement('div'); targets.innerHTML = inventory.groups.toc.items.map(a => `<h2 id="${a.attrs['data-target']}">target</h2>`).join(''); document.body.appendChild(targets);
        // 前のテストのリンククリックで残ったハッシュがマウント時の選択として扱われないよう初期化する
        history.replaceState(null, '', '#');
        try {
            const entry = '../../app/iso-23009-1-2026-guide/NavBar'; const Nav = (await import(entry)).default; const view = render(<Nav />);
            expect(observed.map(el => el.id)).toEqual(inventory.groups.toc.items.map(a => a.attrs['data-target']));
            for (const target of observed) { act(() => callback!([{ isIntersecting: true, target }] as IntersectionObserverEntry[], {} as IntersectionObserver)); expect(view.container.querySelectorAll('a.active')).toHaveLength(1); expect(view.container.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#'+target.id); }
            view.unmount(); expect(disconnect).toHaveBeenCalledTimes(1);
        } finally { targets.remove(); globalThis.IntersectionObserver = previous; }
    });
});
