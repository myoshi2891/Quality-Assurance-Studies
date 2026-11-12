import { describe, it, expect, afterEach, spyOn } from 'bun:test';
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
/** 見出しの位置を固定して描画し、スクロール通知と現在の強調先の取得を返す。 */
const mountWithHeadings = (tops: Record<string, number>) => {
    const ids = inventory.groups.toc.items.map(item => item.attrs['data-target']);
    const host = document.createElement('div');
    for (const id of ids) {
        const heading = document.createElement('h2');
        heading.id = id;
        heading.getBoundingClientRect = () => ({ top: tops[id] ?? window.innerHeight * 2 }) as DOMRect;
        host.append(heading);
    }
    document.body.append(host);
    const Nav = sourceModule('app/iso-iec-ieee-29119-3-2021-guide/NavBar.tsx').default as React.ComponentType;
    const view = render(<Nav />);
    return {
        ids,
        view,
        scroll: () => { fireEvent.scroll(window); },
        current: () => view.container.querySelector('a[aria-current="location"]')?.getAttribute('data-target'),
        remove: () => host.remove(),
    };
};
it('every heading activates its link while scrolling; Escape restores focus and unmount removes the scroll listener', () => {
    const tops: Record<string, number> = {};
    const nav = mountWithHeadings(tops);
    const removed = spyOn(window, 'removeEventListener');
    try {
        const button = nav.view.getByRole('button');
        expect(button.getAttribute('aria-controls')).toBe('sidebar');
        expect(button.getAttribute('aria-expanded')).toBe('false');
        expect(nav.current()).toBeUndefined();
        for (const id of nav.ids) {
            tops[id] = window.innerHeight * 0.2;
            nav.scroll();
            expect(nav.current()).toBe(id);
            tops[id] = -100;
        }
        fireEvent.click(button); expect(button.getAttribute('aria-expanded')).toBe('true');
        fireEvent.keyDown(document, { key: 'Escape' }); expect(button.getAttribute('aria-expanded')).toBe('false');
        expect(document.activeElement).toBe(button);
        for (const link of nav.view.getAllByRole('link')) {
            fireEvent.click(button); fireEvent.click(link);
            expect(button.getAttribute('aria-expanded')).toBe('false');
            expect(link.getAttribute('aria-current')).toBe('location');
        }
        nav.view.unmount();
        for (const event of ['scroll', 'resize']) expect(removed.mock.calls.filter(([type]) => type === event)).toHaveLength(1);
    } finally { removed.mockRestore(); nav.remove(); }
});
it('picks the last heading above the band bottom when several share the band', () => {
    const [first, second, third] = inventory.groups.toc.items.map(item => item.attrs['data-target']) as [string, string, string];
    const nav = mountWithHeadings({ [first]: -500, [second]: window.innerHeight * 0.16, [third]: window.innerHeight * 0.2 });
    try {
        nav.scroll();
        expect(nav.current()).toBe(third);
    } finally { nav.remove(); }
});
// Observer の帯は 1 フレームで飛び越えられると通知が来ないため、スクロールのたびに位置を実測する
it('follows a jump that carries headings across the band in one step without any observer', () => {
    const original = globalThis.IntersectionObserver;
    Reflect.deleteProperty(globalThis, 'IntersectionObserver');
    const [first, second, third] = inventory.groups.toc.items.map(item => item.attrs['data-target']) as [string, string, string];
    const tops: Record<string, number> = { [first]: -100 };
    const nav = mountWithHeadings(tops);
    try {
        expect(nav.current()).toBe(first);
        tops[first] = -2000; tops[second] = -1000; tops[third] = -50;
        nav.scroll();
        expect(nav.current()).toBe(third);
    } finally { globalThis.IntersectionObserver = original; nav.remove(); }
});
it('derives the band from the current viewport height after a resize', () => {
    const originalHeight = Object.getOwnPropertyDescriptor(window, 'innerHeight');
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 });
    const [first, second] = inventory.groups.toc.items.map(item => item.attrs['data-target']) as [string, string];
    // 800px の帯の下端は 200px。300px の見出しは帯の下にある
    const nav = mountWithHeadings({ [first]: -100, [second]: 300 });
    try {
        expect(nav.current()).toBe(first);
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1600 });
        fireEvent(window, new Event('resize'));
        expect(nav.current()).toBe(second);
    } finally {
        nav.remove();
        if (originalHeight) Object.defineProperty(window, 'innerHeight', originalHeight);
        else Reflect.deleteProperty(window, 'innerHeight');
    }
});
it('keeps a clicked destination while its scroll is settling', () => {
    const tops: Record<string, number> = {};
    const nav = mountWithHeadings(tops);
    try {
        const [destination, passing] = nav.ids as [string, string];
        fireEvent.click(nav.view.container.querySelector(`a[data-target="${destination}"]`)!);
        tops[passing] = window.innerHeight * 0.2;
        nav.scroll();
        expect(nav.current()).toBe(destination);
    } finally { nav.remove(); }
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
    const tops: Record<string, number> = {};
    const nav = mountWithHeadings(tops);
    try {
        const [first, second] = nav.ids as [string, string];

        // Step 2 の見出しが帯の中、Step 1 は通過済み
        tops[first] = -500; tops[second] = window.innerHeight * 0.2;
        nav.scroll();
        expect(nav.current()).toBe(second);

        // 下へ読み進めて見出しが帯の上へ抜けた場合は、その節を読み続けている
        tops[second] = -100;
        nav.scroll();
        expect(nav.current()).toBe(second);

        // 上へ戻して見出しが帯の下へ抜けた場合は、直前の節へ戻る
        tops[second] = window.innerHeight * 0.6;
        nav.scroll();
        expect(nav.current()).toBe(first);

        // 最初の見出しより上（ヒーロー）へ戻ると、どの節も強調しない
        tops[first] = window.innerHeight * 0.6;
        nav.scroll();
        expect(nav.current()).toBeUndefined();
    } finally { nav.remove(); }
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
