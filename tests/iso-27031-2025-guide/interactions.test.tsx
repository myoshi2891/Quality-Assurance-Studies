import { describe, expect, it, afterEach, beforeEach } from 'bun:test';
import React from 'react';
import { render, fireEvent, cleanup, act } from '@testing-library/react';
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
});
