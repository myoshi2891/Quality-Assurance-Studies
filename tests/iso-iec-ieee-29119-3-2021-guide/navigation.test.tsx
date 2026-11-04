import { describe, it, expect, afterEach } from 'bun:test';
import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import inventory from '../../docs/migration-inventory/iso-iec-ieee-29119-3-2021-guide.json';
import { sourceModule } from '../helpers/source-module';
// リンククリックやハッシュ同期のテストで残ったハッシュを次のテストへ持ち越さない
const originalUrl = window.location.href;
afterEach(() => {
    cleanup();
    window.history.replaceState(null, '', originalUrl);
});
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
        const Nav = sourceModule('app/iso-iec-ieee-29119-3-2021-guide/NavBar.tsx').default as React.ComponentType;
        const view = render(<Nav />); const button = view.getByRole('button');
        expect(observed.map(el => el.id)).toEqual(ids);
        expect(button.getAttribute('aria-controls')).toBe('sidebar');
        expect(button.getAttribute('aria-expanded')).toBe('false');
        for (const el of observed) {
            act(() => callback!([{ target: el, isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver));
            expect(view.container.querySelector('a[aria-current="location"]')?.getAttribute('data-target')).toBe(el.id);
        }
        // 上へ戻る途中の 1 回の通知に進入と退出が並ぶ場合は、退出で読み直さず帯に入った最後の見出しを選ぶ
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
it('makes the TOC inert only while the mobile sidebar is closed', async () => {
    const original = window.matchMedia;
    let handler: (() => void) | undefined;
    let removed = false;
    const query = { matches: true, addEventListener: (_: string, fn: () => void) => { handler = fn; }, removeEventListener: () => { removed = true; } };
    window.matchMedia = (() => query) as unknown as typeof window.matchMedia;
    try {
        const Nav = sourceModule('app/iso-iec-ieee-29119-3-2021-guide/NavBar.tsx').default as React.ComponentType;
        const view = render(<Nav />);
        const nav = view.container.querySelector('nav')!;
        const button = view.getByRole('button');
        expect(nav.hasAttribute('inert')).toBe(true);
        fireEvent.click(button); expect(nav.hasAttribute('inert')).toBe(false);
        fireEvent.keyDown(document, { key: 'Escape' }); expect(nav.hasAttribute('inert')).toBe(true);
        query.matches = false;
        await act(async () => { handler?.(); });
        expect(nav.hasAttribute('inert')).toBe(false);
        view.unmount(); expect(removed).toBe(true);
    } finally { window.matchMedia = original; }
});
it('moves the highlight back to the previous heading when the active heading leaves the band downward', () => {
    let callback: IntersectionObserverCallback;
    const original = globalThis.IntersectionObserver;
    globalThis.IntersectionObserver = class {
        constructor(cb: IntersectionObserverCallback) { callback = cb; }
        observe() {}
        disconnect() {}
    } as unknown as typeof IntersectionObserver;
    const ids = inventory.groups.toc.items.map(item => item.attrs['data-target']);
    const tops = new Map<string, number>();
    const host = document.createElement('div');
    const headings = ids.map(id => {
        const heading = document.createElement('h2');
        heading.id = id;
        heading.getBoundingClientRect = () => ({ top: tops.get(id) ?? window.innerHeight * 2 }) as DOMRect;
        host.append(heading);
        return heading;
    });
    document.body.append(host);
    try {
        const Nav = sourceModule('app/iso-iec-ieee-29119-3-2021-guide/NavBar.tsx').default as React.ComponentType;
        const view = render(<Nav />);
        const current = () => view.container.querySelector('a[aria-current="location"]')?.getAttribute('data-target');
        const notify = (el: Element, isIntersecting: boolean) => act(() => callback!([{ target: el, isIntersecting } as IntersectionObserverEntry], {} as IntersectionObserver));
        const [first, second] = headings as [HTMLElement, HTMLElement];

        // Step 2 の見出しが帯の中、Step 1 は通過済み
        tops.set(first.id, -500); tops.set(second.id, window.innerHeight * 0.2);
        notify(second, true);
        expect(current()).toBe(second.id);

        // 下へ読み進めて見出しが帯の上へ抜けた場合は、その節を読み続けている
        tops.set(second.id, -100);
        notify(second, false);
        expect(current()).toBe(second.id);

        // 上へ戻して見出しが帯の下へ抜けた場合は、直前の節へ戻る
        tops.set(second.id, window.innerHeight * 0.6);
        notify(second, false);
        expect(current()).toBe(first.id);

        // 最初の見出しより上（ヒーロー）へ戻ると、どの節も強調しない
        tops.set(first.id, window.innerHeight * 0.6);
        notify(first, false);
        expect(current()).toBeUndefined();
    } finally { globalThis.IntersectionObserver = original; host.remove(); }
});
it('closes the mobile sidebar when the viewport leaves the breakpoint so it stays closed on return', async () => {
    const original = window.matchMedia;
    let handler: (() => void) | undefined;
    const query = { matches: true, addEventListener: (_: string, fn: () => void) => { handler = fn; }, removeEventListener: () => {} };
    window.matchMedia = (() => query) as unknown as typeof window.matchMedia;
    try {
        const Nav = sourceModule('app/iso-iec-ieee-29119-3-2021-guide/NavBar.tsx').default as React.ComponentType;
        const view = render(<Nav />);
        const nav = view.container.querySelector('nav')!;
        const button = view.getByRole('button');
        fireEvent.click(button);
        expect(button.getAttribute('aria-expanded')).toBe('true');

        query.matches = false;
        await act(async () => { handler?.(); });
        expect(button.getAttribute('aria-expanded')).toBe('false');
        expect(nav.classList.contains('open')).toBe(false);

        query.matches = true;
        await act(async () => { handler?.(); });
        expect(button.getAttribute('aria-expanded')).toBe('false');
        expect(nav.hasAttribute('inert')).toBe(true);
    } finally { window.matchMedia = original; }
});
it('syncs the active link with the location hash on mount and on hashchange', () => {
    const ids = inventory.groups.toc.items.map(item => item.attrs['data-target']);
    const [mounted, changed] = ids as [string, string];
    window.history.replaceState(null, '', `#${encodeURIComponent(mounted)}`);
    const Nav = sourceModule('app/iso-iec-ieee-29119-3-2021-guide/NavBar.tsx').default as React.ComponentType;
    const view = render(<Nav />);
    const current = () => view.container.querySelector('a[aria-current="location"]')?.getAttribute('data-target');
    expect(current()).toBe(mounted);

    window.history.replaceState(null, '', `#${encodeURIComponent(changed)}`);
    act(() => { window.dispatchEvent(new HashChangeEvent('hashchange')); });
    expect(current()).toBe(changed);
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
            const Nav = sourceModule('app/iso-iec-ieee-29119-3-2021-guide/NavBar.tsx').default as React.ComponentType;
            const view = render(<Nav />);
            fireEvent.click(view.container.querySelector(`a[data-target="${clicked}"]`)!);
            act(() => { window.dispatchEvent(new Event('scrollend')); });
            return view.container.querySelector('a[aria-current="location"]')?.getAttribute('data-target');
        } finally {
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
});
