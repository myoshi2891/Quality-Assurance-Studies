import { describe, expect, it, afterEach, beforeEach } from 'bun:test';
import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot, type Root } from 'react-dom/client';
import { sourceModule } from '../helpers/source-module';
import inventory from '../../docs/migration-inventory/iso-27031-2025-guide.json';

const base = 'app/iso-27031-2025-guide';

afterEach(cleanup);

it('shows the text alternative outside the image for every diagram only after rendering fails', () => {
    for (const { id } of inventory.diagrams) {
        let fail: (() => void) | undefined;
        const C = sourceModule(`${base}/Diagram.tsx`, { onMermaidChart: (_, onError) => { fail = onError; } }).default as React.ComponentType<{ id: string }>;
        const r = render(<C id={id} />);
        const image = r.getByRole('img');
        const label = image.getAttribute('aria-label')!;
        expect(r.queryByRole('alert')).toBeNull();
        expect(image.nextElementSibling).toBeNull();
        expect(fail).toBeFunction();
        act(() => fail!());
        const alert = r.getByRole('alert');
        expect(alert.closest('[role="img"]')).toBeNull();
        const explanation = alert.nextElementSibling!;
        expect(explanation?.textContent).toBe(label);
        expect(explanation.closest('[role="img"],noscript,[hidden]')).toBeNull();
        expect(image.getAttribute('aria-label')).toBe(label);
        r.unmount();
    }
});

const nav = () => sourceModule(`${base}/NavBar.tsx`).default as React.ComponentType;

const headingList = () => {
    const headings = document.createElement('div');
    headings.innerHTML = inventory.groups.toc.items.map(html => `<h2 id="${html.match(/data-target="([^"]+)"/)![1]}"></h2>`).join('');
    document.body.append(headings);
    return headings;
};

const place = (headings: Element, index: number) => Array.from(headings.children).forEach((h, i) => {
    h.getBoundingClientRect = () => ({ top: (i - index) * 300 } as DOMRect);
});

const current = (root: Element) => root.querySelector('[aria-current="location"]')?.getAttribute('data-target');

let queued: FrameRequestCallback[] = [];
const flush = () => {
    const callbacks = queued;
    queued = [];
    callbacks.forEach(callback => callback(0));
};

const realFrame = globalThis.requestAnimationFrame;
const realCancel = globalThis.cancelAnimationFrame;

const scrollTo = (scrollHeight: number, scrollY = 0) => {
    Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, value: scrollHeight });
    Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY });
};

const realScrollY = Object.getOwnPropertyDescriptor(window, 'scrollY');
const restore = () => {
    delete (document.documentElement as unknown as { scrollHeight?: number }).scrollHeight;
    delete (window as unknown as { scrollY?: number }).scrollY;
    if (realScrollY) Object.defineProperty(window, 'scrollY', realScrollY);
};

describe('source TOC interactions', () => {
    beforeEach(() => {
        queued = [];
        scrollTo(window.innerHeight + 5000);
        globalThis.requestAnimationFrame = (callback: FrameRequestCallback) => {
            queued.push(callback);
            return queued.length;
        };
        globalThis.cancelAnimationFrame = () => {
            queued = [];
        };
    });

    afterEach(() => {
        restore();
        globalThis.requestAnimationFrame = realFrame;
        globalThis.cancelAnimationFrame = realCancel;
    });

    it('opens and closes by link and Escape, making the closed mobile TOC inert immediately', () => {
        const original = window.matchMedia;
        let change: (() => void) | undefined;
        const query = {
            matches: true,
            addEventListener: (_type: string, callback: () => void) => {
                change = callback;
            },
            removeEventListener: (_type: string, callback: () => void) => {
                expect(callback).toBe(change);
                change = undefined;
            },
        };
        window.matchMedia = (() => query) as unknown as typeof window.matchMedia;
        try {
            const C = nav();
            const r = render(<C />);
            const button = r.getByRole('button', { name: '目次を開く' });
            const sidebar = r.container.querySelector('.sidebar')!;
            expect(button.getAttribute('aria-expanded')).toBe('false');
            expect(sidebar.hasAttribute('inert')).toBe(true);

            fireEvent.click(button);
            expect(button.getAttribute('aria-expanded')).toBe('true');
            expect(sidebar.hasAttribute('inert')).toBe(false);
            expect(r.container.querySelector('.sidebar.open')).not.toBeNull();

            fireEvent.click(r.container.querySelector('.sidebar a')!);
            expect(button.getAttribute('aria-expanded')).toBe('false');
            expect(sidebar.hasAttribute('inert')).toBe(true);

            fireEvent.click(button);
            fireEvent.keyDown(document, { key: 'Escape' });
            expect(button.getAttribute('aria-expanded')).toBe('false');
            expect(document.activeElement).toBe(button);
            expect(sidebar.hasAttribute('inert')).toBe(true);

            query.matches = false;
            act(() => change?.());
            expect(sidebar.hasAttribute('inert')).toBe(false);

            query.matches = true;
            act(() => change?.());
            expect(sidebar.hasAttribute('inert')).toBe(true);

            r.unmount();
            expect(change).toBeUndefined();
        } finally {
            window.matchMedia = original;
        }
    });

    it('observes all 33 source headings, marks active location from measured positions and disconnects', () => {
        const previous = globalThis.IntersectionObserver;
        let callback: IntersectionObserverCallback = () => {};
        const observed: Element[] = [];
        let disconnected = false;
        globalThis.IntersectionObserver = class {
            constructor(cb: IntersectionObserverCallback, options: IntersectionObserverInit) {
                callback = cb;
                expect(options.rootMargin).toBe('-15% 0px -75% 0px');
            }
            observe(n: Element) {
                observed.push(n);
            }
            disconnect() {
                disconnected = true;
            }
        } as unknown as typeof IntersectionObserver;

        const headings = headingList();
        place(headings, 0);
        try {
            const C = nav();
            const r = render(<C />);
            expect(observed.map(n => n.id)).toEqual(Array.from(headings.children).map(n => n.id));
            const sidebar = r.container.querySelector('.sidebar') as HTMLElement;
            sidebar.getBoundingClientRect = () => ({ top: 0, bottom: 600, height: 600 } as DOMRect);
            (r.container.querySelectorAll('.sidebar a')[3] as HTMLElement).getBoundingClientRect = () => ({ top: 1000, bottom: 1020 } as DOMRect);
            place(headings, 3);
            act(() => {
                callback([{ isIntersecting: true, target: observed[3] } as IntersectionObserverEntry], {} as IntersectionObserver);
                flush();
            });
            expect(current(r.container)).toBe(observed[3]!.id);
            expect(sidebar.scrollTop).toBe(700);
            r.unmount();
            expect(disconnected).toBe(true);
        } finally {
            headings.remove();
            globalThis.IntersectionObserver = previous;
        }
    });

    it('re-measures when a diagram resizes, without any other notification', () => {
        const previous = globalThis.ResizeObserver;
        let notify: ResizeObserverCallback = () => {};
        const observed: Element[] = [];
        let disconnected = false;
        globalThis.ResizeObserver = class {
            constructor(cb: ResizeObserverCallback) {
                notify = cb;
            }
            observe(n: Element) {
                observed.push(n);
            }
            unobserve() {}
            disconnect() {
                disconnected = true;
            }
        } as unknown as typeof ResizeObserver;

        const headings = headingList();
        place(headings, 0);
        const diagram = document.createElement('div');
        diagram.className = 'mermaid-diagram';
        document.body.append(diagram);
        try {
            const C = nav();
            const r = render(<C />);
            expect(observed).toContain(diagram);
            place(headings, 2);
            act(() => {
                notify([], {} as ResizeObserver);
                flush();
            });
            expect(current(r.container)).toBe(headings.children[2]!.id);
            r.unmount();
            expect(disconnected).toBe(true);
        } finally {
            diagram.remove();
            headings.remove();
            globalThis.ResizeObserver = previous;
        }
    });

    it('makes main.main inert only while the mobile TOC is open and restores prior state on close or unmount', () => {
        const original = window.matchMedia;
        let change: (() => void) | undefined;
        const query = {
            matches: true,
            addEventListener: (_type: string, callback: () => void) => {
                change = callback;
            },
            removeEventListener: () => {
                change = undefined;
            },
        };
        window.matchMedia = (() => query) as unknown as typeof window.matchMedia;
        const main = document.createElement('main');
        main.className = 'main';
        document.body.append(main);
        try {
            const C = nav();
            const r = render(<C />);
            const button = r.getByRole('button', { name: '目次を開く' });
            expect(main.hasAttribute('inert')).toBe(false);

            fireEvent.click(button);
            expect(main.hasAttribute('inert')).toBe(true);

            // Switching to desktop width clears inert on main
            query.matches = false;
            act(() => change?.());
            expect(main.hasAttribute('inert')).toBe(false);

            // Back to mobile while open makes main inert again
            query.matches = true;
            act(() => change?.());
            expect(main.hasAttribute('inert')).toBe(true);

            fireEvent.keyDown(document, { key: 'Escape' });
            expect(main.hasAttribute('inert')).toBe(false);

            // Unmounting while open restores main
            fireEvent.click(button);
            expect(main.hasAttribute('inert')).toBe(true);
            r.unmount();
            expect(main.hasAttribute('inert')).toBe(false);

            // If main was already inert before opening, closing preserves prior inert state
            main.setAttribute('inert', '');
            const r2 = render(<C />);
            const button2 = r2.getByRole('button', { name: '目次を開く' });
            fireEvent.click(button2);
            fireEvent.click(r2.getByRole('button', { name: '目次を閉じる' }));
            expect(main.hasAttribute('inert')).toBe(true);
            r2.unmount();
        } finally {
            main.remove();
            window.matchMedia = original;
        }
    });

    for (const modifier of ['metaKey', 'ctrlKey', 'shiftKey', 'altKey'] as const) {
        it(`leaves the mobile TOC open on a ${modifier} link click`, () => {
            const original = window.matchMedia;
            window.matchMedia = (() => ({
                matches: true,
                addEventListener: () => {},
                removeEventListener: () => {},
            })) as unknown as typeof window.matchMedia;
            try {
                const C = nav();
                const r = render(<C />);
                fireEvent.click(r.getByRole('button', { name: '目次を開く' }));
                const link = r.container.querySelectorAll('.sidebar a')[2]!;
                fireEvent.click(link, { [modifier]: true });
                expect(r.getByRole('button', { name: '目次を閉じる' }).getAttribute('aria-expanded')).toBe('true');
                r.unmount();
            } finally {
                window.matchMedia = original;
            }
        });
    }
});

describe('IRBC checklist progress', () => {
    const checklist = () => sourceModule(`${base}/Section18.tsx`).default as React.ComponentType;

    it('labels all nine checkboxes and updates count, progress bar width and completion banner', () => {
        const C = checklist();
        const r = render(<C />);
        const boxes = r.getAllByRole('checkbox') as HTMLInputElement[];
        expect(boxes).toHaveLength(9);
        const count = r.container.querySelector('.cp-count')!;
        const fill = r.container.querySelector('.cp-fill') as HTMLElement;
        const done = r.container.querySelector('.cp-done') as HTMLElement;

        expect(count.textContent).toBe('0 / 9');
        expect(done.hidden).toBe(true);
        for (const box of boxes) {
            expect(box.labels?.[0]?.textContent?.trim().length).toBeGreaterThan(5);
        }

        for (const [i, box] of boxes.entries()) {
            fireEvent.click(box);
            const k = i + 1;
            expect(count.textContent).toBe(`${k} / 9`);
            expect(fill.style.width).toBe(`${(k / 9) * 100}%`);
            expect(done.hidden).toBe(k !== 9);
        }

        // Unchecking one hides completion banner and updates count/width
        fireEvent.click(boxes[0]!);
        expect(count.textContent).toBe('8 / 9');
        expect(fill.style.width).toBe(`${(8 / 9) * 100}%`);
        expect(done.hidden).toBe(true);
    });

    it('keeps progress state isolated per Section18 instance', () => {
        const C = checklist();
        const r = render(
            <>
                <C />
                <C />
            </>,
        );
        fireEvent.click(r.getAllByRole('checkbox')[0]!);
        expect(Array.from(r.container.querySelectorAll('.cp-count'), n => n.textContent)).toEqual(['1 / 9', '0 / 9']);
    });
});

for (const development of [false, true]) {
    it(`hydrates the real page without DOM warnings, with functional TOC and checklist (development=${development})`, async () => {
        const Page = sourceModule(`${base}/page.tsx`, { development }).default as React.ComponentType;
        const host = document.createElement('div');
        host.innerHTML = renderToString(<Page />);
        document.body.append(host);
        const warnings: unknown[][] = [];
        const errors: unknown[] = [];
        const originalError = console.error;
        console.error = (...args: unknown[]) => warnings.push(args);
        let root: Root | undefined;
        try {
            await act(async () => {
                root = hydrateRoot(host, <Page />, { onRecoverableError: e => errors.push(e) });
            });
            const button = host.querySelector('.nav-toggle')!;
            await act(async () => {
                fireEvent.click(button);
            });
            expect(button.getAttribute('aria-expanded')).toBe('true');
            await act(async () => {
                fireEvent.keyDown(document, { key: 'Escape' });
                fireEvent.click(host.querySelector('#irbc-checklist input[type="checkbox"]')!);
            });
            expect(host.querySelector('.cp-count')?.textContent).toBe('1 / 9');
            expect(errors).toEqual([]);
            expect(warnings).toEqual([]);
            expect(
                Array.from(host.querySelectorAll('table,thead,tbody,tr')).flatMap(n =>
                    Array.from(n.childNodes).filter(c => c.nodeType === Node.TEXT_NODE),
                ),
            ).toHaveLength(0);
        } finally {
            if (root) await act(async () => root!.unmount());
            console.error = originalError;
            host.remove();
        }
    });
}
