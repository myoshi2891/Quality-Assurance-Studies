import { afterEach, describe, expect, it, spyOn } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/working-effectively-with-legacy-code-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/working-effectively-with-legacy-code-guide';
const scope = '.wewlc-page';
const entry = '../../app/working-effectively-with-legacy-code-guide/page';
const navEntry = '../../app/working-effectively-with-legacy-code-guide/NavBar';
const diagramsEntry = '../../app/working-effectively-with-legacy-code-guide/diagrams';
const checklistEntry = '../../app/working-effectively-with-legacy-code-guide/Checklist';
function tree(node: AnyNode | undefined): unknown {
    if (!node) throw Error('Missing element');
    if (node.type === 'text') return node.data.replace(/\s+/g, ' ').trim() || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs };
    for (const key of Object.keys(attrs)) if (key.startsWith('aria-') || key === 'role') delete attrs[key];
    if (attrs.class) attrs.class = attrs.class.replace(/\s+(active|open|done)\b/g, '');
    if (/^d\d+$/.test(attrs.id ?? '')) return { tag: 'div', attrs: { id: attrs.id }, children: [] };
    if (node.tagName === 'pre') return { tag: 'pre', attrs, code: load(node).text() };
    return { tag: node.tagName, attrs, children: node.children.map(tree).filter(x => x !== null) };
}
async function html() { const Page = (await import(entry)).default; return load(renderToStaticMarkup(<Page />)); }
const css = () => postcss.parse(readFileSync(`${base}/working-effectively-with-legacy-code-guide.css`, 'utf8'));
const scoped = (s: string) => s.split(',').map(s => [':root','html','body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
afterEach(cleanup);
describe('one-to-one complete source inventory', () => {
    for (const [category, group] of Object.entries(inventory.groups)) {
        it(`${category}: exact ordered count`, async () => expect((await html())(group.selector).length).toBe(group.items.length));
        group.items.forEach((expected, i) => it(`${category}[${i}]: complete nested text and attributes`, async () => {
            const $ = await html(); expect(tree($(group.selector)[i])).toEqual(expected);
        }));
    }
    for (const development of [false, true]) it(`SWC development=${development}: whole main DOM in source order`, () => {
        const Page = sourceModule(`${base}/page.tsx`, { development }).default as React.ComponentType;
        const $ = load(renderToStaticMarkup(<Page />)); expect($('main').contents().toArray().map(tree).filter(Boolean)).toEqual(inventory.main);
    });
    for (const [name, ids] of Object.entries({Introduction:[1,2],Foundations:[3,4,5],FiveSteps:[6,7,8,9,10],Techniques:[11,12,13,14,15],Practice:[16,17,18,19]})) {
        it(`category ${name}: all source sections before page composition`, async () => {
            const path = `../../app/working-effectively-with-legacy-code-guide/${name}`;
            const Component = (await import(path)).default;
            const $ = load(renderToStaticMarkup(<Component />)); expect($('section').toArray().map(tree)).toEqual(ids.map(id => inventory.groups.sections.items[id-1]));
        });
    }
    it('unique IDs and all 19 TOC targets resolve once', async () => {
        const $ = await html(); const ids = $('[id]').map((_, el) => $(el).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length);
        $('.sidebar a').each((_, el) => expect($($(el).attr('href')!)).toHaveLength(1));
    });
    it('all external references have safe new-tab attributes', async () => {
        const $ = await html(); $('main a[href^="http"]').each((_, el) => {expect($(el).attr('target')).toBe('_blank'); expect($(el).attr('rel')).toBe('noopener noreferrer');});
    });
});
describe('every original design rule and responsive breakpoint', () => {
    inventory.css.forEach((rule, i) => it(`CSS[${i}] ${rule.media ?? 'desktop'} ${rule.selector}`, () => {
        const found: unknown[] = []; css().walkRules(r => {
            if (r.selector === scoped(rule.selector) && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === rule.media)
                found.push(r.nodes.filter(n => n.type === 'decl').map(d => { const n = d as postcss.Declaration; return [n.prop,n.value,n.important??null]; }));
        }); expect(found).toContainEqual(rule.decls);
    }));
    it('imports scoped CSS and preserves serif fonts', () => {
        const page = readFileSync(`${base}/page.tsx`,'utf8'); expect(page).toContain("import './working-effectively-with-legacy-code-guide.css'"); expect(page).toContain('Noto+Serif+JP');
        css().walkRules(r => r.selectors.forEach(s => expect((s.startsWith(scope) || s.startsWith('body:has(.wewlc-page)'))).toBe(true)));
    });
    it('compensates application chrome and protects light text/table/code/diagram styles', () => {
        const text = css().toString(); for (const token of ['var(--disclaimer-height, 0px)', 'foreignObject', '.edgeLabels rect', 'visibility: hidden', 'white-space: pre', 'min-height: 0', '-webkit-text-fill-color', '::-webkit-scrollbar', '.callout strong', 'tbody td']) expect(text).toContain(token);
    });
});
describe('all eleven original Mermaid definitions', () => {
    Object.entries(inventory.diagrams).forEach(([id, expected]) => it(`${id}: exact chart and real parser`, async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry); expect(DIAGRAMS[id].slice(MERMAID_CONFIG.length).trim()).toBe(expected); expect(MERMAID_CONFIG).not.toContain("'");
        const realEntry: string = 'mermaid/dist/mermaid.esm.mjs'; const real = (await import(realEntry)).default;
        expect((await real.parse(DIAGRAMS[id])).diagramType).toBe('flowchart-v2');
    }));
});
describe('checklist and navigation behavior', () => {
    it('each of eight checks updates its done style and completion count, then resets', async () => {
        const Checklist = (await import(checklistEntry)).default; const view = render(<Checklist />); const boxes = view.getAllByRole('checkbox'); expect(boxes).toHaveLength(8);
        boxes.forEach((box, i) => {fireEvent.click(box); expect(view.container.querySelector('#checklistCounter')?.textContent).toBe(`${i+1} / 8 完了`); expect(box.closest('li')?.classList.contains('done')).toBe(true);});
        boxes.forEach(box => fireEvent.click(box)); expect(view.container.querySelectorAll('li.done')).toHaveLength(0); expect(view.container.querySelector('#checklistCounter')?.textContent).toBe('0 / 8 完了');
    });
    it('toggle, scrim, anchor and Escape close the mobile menu and restore focus', async () => {
        const Nav = (await import(navEntry)).default; const view = render(<Nav />); const button = view.getByRole('button', {name:'目次を開く'});
        expect(button.getAttribute('aria-expanded')).toBe('false');
        for (const action of ['scrim','anchor','Escape']) {fireEvent.click(button); expect(button.getAttribute('aria-expanded')).toBe('true');
            if (action === 'Escape') fireEvent.keyDown(document,{key:'Escape'}); else fireEvent.click(view.container.querySelector(action === 'scrim' ? '#sidebarScrim' : 'a')!);
            expect(button.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(button);
        }
    });
    it('tracks the section in the reading band on scroll and resize, then removes listeners', async () => {
        const band = {top: innerHeight * 0.2, bottom: innerHeight * 0.3}; let current = 0;
        const targets = document.createElement('div'); targets.innerHTML = Array.from({length:19},(_,i)=>`<section id="sec${i+1}"></section>`).join(''); document.body.appendChild(targets);
        const sections = Array.from(targets.querySelectorAll('section'));
        sections.forEach((el, i) => {el.getBoundingClientRect = () => {const [top, bottom] = i === current ? [band.top - 10, band.bottom + 10] : i < current ? [-2000, -1000] : [innerHeight + 1000, innerHeight + 2000]; return {top, bottom, left:0, right:0, width:0, height:bottom-top, x:0, y:top, toJSON:()=>({})} as DOMRect;};});
        const removed = spyOn(window, 'removeEventListener');
        try { const Nav = (await import(navEntry)).default; const view = render(<Nav />);
            for (const [i, el] of sections.entries()) {current = i; act(() => {window.dispatchEvent(new Event(i % 2 ? 'resize' : 'scroll'));});
                await waitFor(() => expect(view.container.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#' + el.id)); expect(view.container.querySelectorAll('a.active')).toHaveLength(1);}
            view.unmount(); const types = removed.mock.calls.map(call => call[0]); expect(types).toContain('scroll'); expect(types).toContain('resize');
        } finally {targets.remove(); removed.mockRestore();}
    });
});
describe('registration and untouched tracked archives', () => {
    it('registers in books and the E2E route list', async () => {
        const {NAV_ITEMS} = await import('../../lib/navigation'); const {PAGES,EXPECTED_PAGE_COUNT} = await import('../../e2e/pages');
        expect(NAV_ITEMS.find(n=>n.href==='/working-effectively-with-legacy-code-guide')?.category).toBe('books-practices');expect(NAV_ITEMS).toHaveLength(107);expect(PAGES).toHaveLength(EXPECTED_PAGE_COUNT);
        expect(PAGES.find(p=>p.path==='/working-effectively-with-legacy-code-guide')?.h1.test('Working Effectively with Legacy Code 完全ガイド')).toBe(true);
    });
    for (const ext of ['html','md'] as const) it(`${ext}: identical source hash, moved from root and Git tracked`, () => {
        const path = `archive/${ext==='html'?'html':'md'}-archive/books/${inventory.source}.${ext}`;
        expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(inventory.hashes[ext]);expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
        expect(execFileSync('git',['ls-files','--error-unmatch',path],{encoding:'utf8'}).trim()).toBe(path);
    });
});
