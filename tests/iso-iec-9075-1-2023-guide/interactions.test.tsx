import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { load } from 'cheerio';
import inventory from '../../docs/migration-inventory/iso-iec-9075-1-2023-guide.json';
const entry = '../../app/iso-iec-9075-1-2023-guide/';
afterEach(cleanup);
describe('learning checklist', () => {
    async function setup() { const Component = (await import(entry+'Checklist')).default; return render(<Component />); }
    it('initializes all nine accessible labels and exposes zero progress', async () => {
        const view = await setup(); expect(view.getAllByRole('checkbox')).toHaveLength(9);
        for (const checkbox of view.getAllByRole('checkbox')) expect((checkbox as HTMLInputElement).labels?.[0]?.textContent?.trim().length).toBeGreaterThan(5);
        expect(view.container.querySelector('.cnt')?.textContent).toBe('0 / 9');
        expect(view.getByRole('progressbar').getAttribute('aria-valuenow')).toBe('0');
        expect((view.container.querySelector('.ck-done') as HTMLElement).hidden).toBe(true);
    });
    it('updates rounding, completed styles, completion and reset through every item', async () => {
        const view = await setup(), boxes = view.getAllByRole('checkbox');
        boxes.forEach((box, i) => {
            fireEvent.click(box); const pct = Math.round((i+1)*100/9);
            expect(view.container.querySelector('.cnt')?.textContent).toBe(`${i+1} / 9`);
            expect(view.container.querySelector('.cp-pct')?.textContent).toBe(`${pct}%`);
            expect((view.container.querySelector('.fill') as HTMLElement).style.width).toBe(`${pct}%`);
            expect(view.container.querySelectorAll('li.done')).toHaveLength(i+1);
        });
        expect((view.container.querySelector('.ck-done') as HTMLElement).hidden).toBe(false);
        fireEvent.click(boxes[0]!); expect((view.container.querySelector('.ck-done') as HTMLElement).hidden).toBe(true);
        fireEvent.click(view.getByRole('button', { name: 'リセット' }));
        expect(boxes.every(box => !(box as HTMLInputElement).checked)).toBe(true);
        expect(view.container.querySelectorAll('li.done')).toHaveLength(0);
        expect(view.container.querySelector('.cnt')?.textContent).toBe('0 / 9');
    });
    it('keeps two checklist instances independent', async () => {
        const Component = (await import(entry+'Checklist')).default; const view = render(<><Component /><Component /></>);
        fireEvent.click(view.getAllByRole('checkbox')[0]!);
        expect(Array.from(view.container.querySelectorAll('.cnt'), n => n.textContent)).toEqual(['1 / 9','0 / 9']);
    });
});
describe('SQL examples', () => {
    for (const [i, source] of inventory.groups.codes.items.entries()) it(`SQL ${i}: exact whitespace and colored tokens`, async () => {
        const Component = (await import(entry+'CodeExample')).default;
        const $ = load(renderToStaticMarkup(<Component code={source.code} />));
        expect($('pre').text()).toBe(source.code);
        expect($('.code-line')).toHaveLength(source.code.split('\n').length);
        expect($('.tok-c').map((_, el) => $(el).text()).get()).toEqual(source.code.match(/--[^\n]*/g) ?? []);
        expect($('.tok-s').map((_, el) => $(el).text()).get()).toEqual(source.code.replace(/--[^\n]*/g,'').match(/'[^']*'/g) ?? []);
        expect($('.tok-k').length).toBeGreaterThan(0);
        expect($('.tok-f').length).toBeGreaterThan(0);
    });
    it('does not tokenize keywords or numbers inside quoted strings and comments', async () => {
        const Component = (await import(entry+'CodeExample')).default;
        const $ = load(renderToStaticMarkup(<Component code={"SELECT 'SELECT 123 -- literal', 42 -- FROM 99"} />));
        expect($('.tok-s').text()).toBe("'SELECT 123 -- literal'"); expect($('.tok-k').text()).toBe('SELECT'); expect($('.tok-n').text()).toBe('42'); expect($('.tok-c').text()).toBe('-- FROM 99');
    });
});
describe('responsive TOC', () => {
    async function setup() {
        Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 });
        const Nav = (await import(entry+'NavBar')).default; return render(<Nav />);
    }
    it('preserves exact TOC order and targets', async () => {
        const view = await setup(); expect(Array.from(view.container.querySelectorAll('nav a'), n => [n.textContent,n.getAttribute('href')])).toEqual(inventory.groups.toc.items.map(n => [n.children[0],n.attrs.href]));
    });
    it('toggles scrim, removes closed links from focus and closes with Escape, link and scrim', async () => {
        const view = await setup(), button = view.getByRole('button', { name: '目次を開閉' }), nav = view.container.querySelector('nav')!;
        expect(nav.hasAttribute('inert')).toBe(true); expect(button.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(button); expect(nav.classList.contains('open')).toBe(true); expect(nav.hasAttribute('inert')).toBe(false); expect(view.container.querySelector('.scrim.show')).not.toBeNull();
        fireEvent.keyDown(document, { key:'Escape' }); expect(button.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(button);
        fireEvent.click(button); fireEvent.click(nav.querySelector('a')!); expect(button.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(button); fireEvent.click(view.container.querySelector('.scrim')!); expect(button.getAttribute('aria-expanded')).toBe('false');
    });
    it('closes on desktop resize and prevents reopening when returning to mobile', async () => {
        const view = await setup(), button = view.getByRole('button', { name:'目次を開閉' }); fireEvent.click(button);
        Object.defineProperty(window,'innerWidth',{ configurable:true,value:901 }); fireEvent(window,new Event('resize'));
        expect(button.getAttribute('aria-expanded')).toBe('false'); expect(view.container.querySelector('nav')!.hasAttribute('inert')).toBe(false);
        Object.defineProperty(window,'innerWidth',{ configurable:true,value:900 }); fireEvent(window,new Event('resize'));
        expect(view.container.querySelector('nav')!.hasAttribute('inert')).toBe(true);
    });
    it('tracks actual heading position after scrolling and disconnects the observer', async () => {
        const original = globalThis.IntersectionObserver, disconnect = mock(() => {}), observe = mock(() => {});
        globalThis.IntersectionObserver = class { observe=observe; disconnect=disconnect; unobserve(){} } as unknown as typeof IntersectionObserver;
        const ids = inventory.groups.toc.items.map(n => n.attrs['data-target']);
        const root = document.createElement('div'); root.innerHTML = ids.map(id => `<h2 id="${id}"></h2>`).join(''); document.body.append(root);
        let active = 0; root.querySelectorAll('h2').forEach((h,i) => { h.getBoundingClientRect = () => ({ top: (i-active)*400+140 }) as DOMRect; });
        try {
            const view = await setup(); expect(observe.mock.calls).toHaveLength(13);
            active = 4; await act(async () => { fireEvent.scroll(window); await new Promise(r => setTimeout(r,30)); });
            expect(view.container.querySelector('[aria-current="location"]')?.getAttribute('data-target')).toBe(ids[4]);
            view.unmount(); expect(disconnect).toHaveBeenCalledTimes(1);
        } finally { root.remove(); globalThis.IntersectionObserver=original; }
    });
});
