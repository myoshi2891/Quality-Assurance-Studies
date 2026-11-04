import { it, expect, afterEach } from 'bun:test';
import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import inventory from '../../docs/migration-inventory/iso-iec-ts-30149-2024-guide.json';
import { sourceModule } from '../helpers/source-module';
afterEach(cleanup);
it('all targets are observed; every heading activates its link; Escape restores focus and unmount disconnects', () => {
    let disconnected = false;
    let callback: IntersectionObserverCallback;
    const observed: Element[] = [];
    const original = globalThis.IntersectionObserver;
    globalThis.IntersectionObserver = class {
        constructor(cb: IntersectionObserverCallback) { callback = cb; }
        observe(el: Element) { observed.push(el); }
        disconnect() { disconnected = true; }
    } as unknown as typeof IntersectionObserver;
    const host = document.createElement('div');
    const ids = inventory.groups.toc.items.map(item => item.attrs['data-target']);
    for (const id of ids) { const h = document.createElement('h2'); h.id = id; host.append(h); }
    document.body.append(host);
    try {
        const Nav = sourceModule('app/iso-iec-ts-30149-2024-guide/NavBar.tsx').default as React.ComponentType;
        const view = render(<Nav />); const button = view.getByRole('button');
        expect(observed.map(el => el.id)).toEqual(ids);
        expect(button.getAttribute('aria-controls')).toBe('sidebar');
        expect(button.getAttribute('aria-expanded')).toBe('false');
        for (const el of observed) {
            act(() => callback!([{ target: el, isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver));
            expect(view.container.querySelector('a[aria-current="location"]')?.getAttribute('data-target')).toBe(el.id);
        }
        fireEvent.click(button); expect(button.getAttribute('aria-expanded')).toBe('true');
        fireEvent.keyDown(document, { key: 'Escape' }); expect(button.getAttribute('aria-expanded')).toBe('false');
        expect(document.activeElement).toBe(button);
        for (const link of view.getAllByRole('link')) {
            fireEvent.click(button); fireEvent.click(link);
            expect(button.getAttribute('aria-expanded')).toBe('false');
            expect(link.getAttribute('aria-current')).toBe('location');
        }
        view.unmount(); expect(disconnected).toBe(true);
    } finally { globalThis.IntersectionObserver = original; host.remove(); }
});
it('activates the final TOC entry at the page bottom unless a TOC jump is still settling', () => {
    const ids = inventory.groups.toc.items.map(item => item.attrs['data-target']);
    const root = document.documentElement;
    const originals = { innerHeight: Object.getOwnPropertyDescriptor(window, 'innerHeight'), scrollY: Object.getOwnPropertyDescriptor(window, 'scrollY') };
    const scrollTo = (y: number) => {
        Object.defineProperty(window, 'scrollY', { configurable: true, value: y });
        fireEvent.scroll(window);
    };
    const current = (container: HTMLElement) => container.querySelector('a[aria-current="location"]')?.getAttribute('data-target');
    // 先行テストのリンク操作で残ったハッシュがマウント時の判定に使われないようにする
    window.location.hash = '';
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 });
    Object.defineProperty(root, 'scrollHeight', { configurable: true, value: 2000 });
    try {
        const Nav = sourceModule('app/iso-iec-ts-30149-2024-guide/NavBar.tsx').default as React.ComponentType;
        const view = render(<Nav />);
        scrollTo(100);
        expect(current(view.container)).toBeUndefined();
        scrollTo(1200);
        expect(current(view.container)).toBe(ids.at(-1));
        // 目次クリックのスクロール完了待ちの間は、末尾に達しても選んだ見出しを保つ
        fireEvent.click(view.getAllByRole('link')[0]!);
        scrollTo(1200);
        expect(current(view.container)).toBe(ids[0]);
        fireEvent(window, new Event('scrollend'));
        expect(current(view.container)).toBe(ids[0]);
        scrollTo(1200);
        expect(current(view.container)).toBe(ids.at(-1));
    } finally {
        window.location.hash = '';
        Reflect.deleteProperty(root, 'scrollHeight');
        for (const [key, descriptor] of Object.entries(originals)) {
            if (descriptor) Object.defineProperty(window, key, descriptor);
            else Reflect.deleteProperty(window, key);
        }
    }
});
