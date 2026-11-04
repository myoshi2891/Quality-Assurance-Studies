import { describe, it, expect, afterEach } from 'bun:test';
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
        // 1 回の通知に隣接する見出しが並ぶ場合は、帯の中にある最後の見出しを選ぶ
        act(() => callback!([
            { target: observed[2]!, isIntersecting: true },
            { target: observed[3]!, isIntersecting: true },
            { target: observed[4]!, isIntersecting: false },
        ] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver));
        expect(view.container.querySelector('a[aria-current="location"]')?.getAttribute('data-target')).toBe(observed[3]!.id);
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
it('makes the TOC inert while the mobile sidebar is closed and resets it at the breakpoint', async () => {
    const original = window.matchMedia;
    let handler: (() => void) | undefined;
    let removed = false;
    const query = { matches: true, addEventListener: (_: string, fn: () => void) => { handler = fn; }, removeEventListener: () => { removed = true; } };
    window.matchMedia = (() => query) as unknown as typeof window.matchMedia;
    try {
        const Nav = sourceModule('app/iso-iec-ts-30149-2024-guide/NavBar.tsx').default as React.ComponentType;
        const view = render(<Nav />);
        const aside = view.container.querySelector('aside')!;
        const button = view.getByRole('button');
        expect(aside.hasAttribute('inert')).toBe(true);
        fireEvent.click(button); expect(aside.hasAttribute('inert')).toBe(false);
        fireEvent.keyDown(document, { key: 'Escape' }); expect(aside.hasAttribute('inert')).toBe(true);

        fireEvent.click(button);
        query.matches = false;
        await act(async () => { handler?.(); });
        expect(aside.hasAttribute('inert')).toBe(false);
        expect(button.getAttribute('aria-expanded')).toBe('false');

        query.matches = true;
        await act(async () => { handler?.(); });
        expect(aside.hasAttribute('inert')).toBe(true);
        view.unmount(); expect(removed).toBe(true);
    } finally { window.matchMedia = original; }
});
describe('where the highlight lands when a clicked scroll settles', () => {
    const ids = inventory.groups.toc.items.map(item => item.attrs['data-target']);
    const height = window.innerHeight;
    /** 見出しの位置を固定してクリックし、スクロール完了を通知したあとの強調先を返す。 */
    const settleAfterClick = (
        clicked: string,
        tops: Record<string, number>,
        options: { scrollHeight?: number; margins?: Record<string, string> } = {}
    ) => {
        const original = globalThis.IntersectionObserver;
        globalThis.IntersectionObserver = class {
            observe() {}
            disconnect() {}
        } as unknown as typeof IntersectionObserver;
        // 未指定は途中まで読んだ長いページ。ページ末尾の判定へ入らない高さにする
        Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, value: options.scrollHeight ?? height * 20 });
        const host = document.createElement('div');
        for (const id of ids) {
            const heading = document.createElement('h2');
            heading.id = id;
            const margin = options.margins?.[id];
            if (margin) heading.style.scrollMarginTop = margin;
            heading.getBoundingClientRect = () => ({ top: tops[id] ?? height * 2 }) as DOMRect;
            host.append(heading);
        }
        document.body.append(host);
        try {
            const Nav = sourceModule('app/iso-iec-ts-30149-2024-guide/NavBar.tsx').default as React.ComponentType;
            const view = render(<Nav />);
            fireEvent.click(view.container.querySelector(`a[data-target="${clicked}"]`)!);
            act(() => { window.dispatchEvent(new Event('scrollend')); });
            return view.container.querySelector('a[aria-current="location"]')?.getAttribute('data-target');
        } finally {
            window.location.hash = '';
            globalThis.IntersectionObserver = original;
            Reflect.deleteProperty(document.documentElement, 'scrollHeight');
            host.remove();
        }
    };

    it('falls back to the section in view when a downward scroll stops before the destination', () => {
        const [, passed, inView, , , destination] = ids as [string, string, string, string, string, string];
        expect(settleAfterClick(destination, { [passed]: -200, [inView]: 100 })).toBe(inView);
    });
    it('falls back to the section in view when an upward scroll stops before the destination', () => {
        const [destination, , , inView] = ids as [string, string, string, string];
        const passed = Object.fromEntries(ids.slice(0, 3).map(id => [id, -2000]));
        expect(settleAfterClick(destination, { ...passed, [inView]: 100 })).toBe(inView);
    });
    it('keeps the destination when the next short section also sits in the band', () => {
        const [destination, next] = ids as [string, string];
        expect(settleAfterClick(destination, { [destination]: 100, [next]: 150 })).toBe(destination);
    });
    it('keeps a destination landing below the band because of its scroll margin', () => {
        const [destination] = ids as [string];
        const landing = Math.ceil(height * 0.25) + 100;
        expect(settleAfterClick(destination, { [destination]: landing }, { margins: { [destination]: `${landing}px` } })).toBe(destination);
    });
    it('keeps the last destination at the page end even though it cannot rise to the band', () => {
        const last = ids[ids.length - 1]!;
        const previous = ids[ids.length - 2]!;
        expect(settleAfterClick(last, { [previous]: -100, [last]: height * 0.6 }, { scrollHeight: height })).toBe(last);
    });
    it('selects the final section when a clicked scroll overshoots to the page end', () => {
        const [destination] = ids as [string];
        const last = ids[ids.length - 1]!;
        const previous = ids[ids.length - 2]!;
        expect(settleAfterClick(destination, { [destination]: -2000, [previous]: -100, [last]: height * 0.6 }, { scrollHeight: height })).toBe(last);
    });
});
