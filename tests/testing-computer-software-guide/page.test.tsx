import { afterEach, describe, expect, it, mock, spyOn } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/testing-computer-software-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/testing-computer-software-guide';
const scope = '.tcs-page';
const entry = '../../app/testing-computer-software-guide/page';
const navEntry = '../../app/testing-computer-software-guide/NavBar';
const diagramsEntry = '../../app/testing-computer-software-guide/diagrams';
const checklistEntry = '../../app/testing-computer-software-guide/Checklist';
function tree(node: AnyNode | undefined): unknown {
    if (!node) throw Error('Missing element');
    if (node.type === 'text') return node.data.replace(/\s+/g, ' ').trim() || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs };
    for (const key of Object.keys(attrs)) if (key.startsWith('aria-') || key === 'role') delete attrs[key];
    if (attrs.class) attrs.class = attrs.class.replace(/\s+(active|open|done)\b/g, '');
    if (/^diag-\d+$/.test(attrs.id ?? '')) return { tag: 'div', attrs: { id: attrs.id }, children: [] };
    if (node.tagName === 'pre') return { tag: 'pre', attrs, code: load(node).text() };
    return { tag: node.tagName, attrs, children: node.children.map(tree).filter(x => x !== null) };
}
async function html() { const Page = (await import(entry)).default; return load(renderToStaticMarkup(<Page />)); }
const css = () => postcss.parse(readFileSync(`${base}/testing-computer-software-guide.css`, 'utf8'));
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
        const $ = load(renderToStaticMarkup(<Page />)); expect($('.main').contents().toArray().map(tree).filter(Boolean)).toEqual(inventory.main);
    });
    for (const [name, ids] of Object.entries({Book:[1],Fundamentals:[2,3,4,5,6],Strategies:[7,8,9,10],Management:[11,12,13,14],Practice:[15,16,17],References:[18]})) {
        it(`category ${name}: all source sections before page composition`, async () => {
            const path = `../../app/testing-computer-software-guide/${name}`;
            const Component = (await import(path)).default;
            const $ = load(renderToStaticMarkup(<Component />)); expect($('section').toArray().map(tree)).toEqual(ids.map(id => inventory.groups.sections.items[id-1]));
        });
    }
    it('unique IDs and all 18 TOC targets resolve once', async () => {
        const $ = await html(); const ids = $('[id]').map((_, el) => $(el).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length);
        $('.sidebar a').each((_, el) => expect($($(el).attr('href')!)).toHaveLength(1));
    });
    it('all external references have safe new-tab attributes', async () => {
        const $ = await html(); $('main a[href^="http"]').each((_, el) => {expect($(el).attr('target')).toBe('_blank'); expect($(el).attr('rel')).toBe('noopener noreferrer');});
    });
    it('diagram 8 is followed by an ordered text description of the whole pipeline loop', async () => {
        const $ = await html(); const steps = $('#diag-8').closest('.diagram-block').next('ol.diagram-steps');
        expect(steps.find('li').map((_, el) => $(el).text().trim()).get()).toEqual(['要件定義', '設計', '実装とユニットテスト', 'CIビルド（静的解析と単体テスト）', '結合テストとAPIテスト', 'ステージングでのE2Eテスト', '本番リリース', '本番監視（得られたフィードバックを要件定義へ戻す）']);
    });
    it('diagram 7 is followed by an ordered text description of every bug report field', async () => {
        const $ = await html(); const fields = $('#diag-7').closest('.diagram-block').next('ol.diagram-steps');
        expect(fields.find('li').map((_, el) => $(el).text().trim()).get()).toEqual(['タイトル（何が起きたかを一言で）', '再現手順（番号付きで具体的に）', '期待結果（本来どうあるべきか）', '実際の結果（何が起きたか）', '環境情報（OS、ブラウザ、バージョン）', '証拠（スクリーンショットとログ）']);
    });
    it('names the fifth testing principle with the CTFL v4.0.1 term', async () => {
        const $ = await html(); const row = $('#sec4 tbody tr').eq(4).find('td');
        expect(row.eq(0).text().trim()).toBe('⑤ テストは使い古される');
        expect(row.eq(1).text().trim()).toBe('同じテストを繰り返すと新しい欠陥を見つけられなくなるため、テストを見直し続ける必要がある');
    });
});
describe('every original design rule and responsive breakpoint', () => {
    it('at 960px or less the menu bar stacks above the open sidebar and below the header, keeping its offset', () => {
        const mobileValue = (selector: string, prop: string) => {let value = ''; css().walkDecls(prop, decl => {const rule = decl.parent; if (rule?.type !== 'rule') return; const media = rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : ''; if (media && !media.includes('max-width: 960px')) return; if ((rule as postcss.Rule).selectors.includes(selector)) value = decl.value;}); return value;};
        const bar = Number(mobileValue(`${scope} .mobile-bar`, 'z-index')); const sidebar = Number(mobileValue(`${scope} .sidebar`, 'z-index'));
        expect(bar).toBeGreaterThan(sidebar); expect(bar).toBeLessThan(50);
        expect(mobileValue(`${scope} .mobile-bar`, 'top')).toBe('calc(60px + var(--disclaimer-height, 0px))');
    });
    it('--gold text and the white number on the active gold badge meet 4.5:1 on every background', () => {
        // ページ直下（メディア外）の .tcs-page で最後に宣言されたカスタムプロパティを有効値とみなす
        const vars: Record<string, string> = {};
        css().walkDecls(/^--/, decl => {const rule = decl.parent; if (rule?.type === 'rule' && rule.parent?.type !== 'atrule' && (rule as postcss.Rule).selector === scope) vars[decl.prop] = decl.value;});
        const luminance = (hex: string) => {const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(c => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4); return 0.2126 * r + 0.7152 * g + 0.0722 * b;};
        const ratio = (a: string, b: string) => {const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x); return (hi + 0.05) / (lo + 0.05);};
        for (const bg of ['--paper', '--paper-alt', '--paper-card']) expect(ratio(vars['--gold'], vars[bg])).toBeGreaterThanOrEqual(4.5);
        expect(ratio(vars['--gold'], '#ffffff')).toBeGreaterThanOrEqual(4.5);
    });
    it('table cells force ink color and size, and inline code in cells is reset within the table', () => {
        // メディア外で最後に宣言された値を有効値とみなす
        const decls = (selector: string) => {const out: Record<string, [string, boolean]> = {}; css().walkDecls(decl => {const rule = decl.parent; if (rule?.type !== 'rule' || rule.parent?.type === 'atrule' || !(rule as postcss.Rule).selectors.includes(selector)) return; out[decl.prop] = [decl.value, decl.important === true];}); return out;};
        for (const selector of [`${scope} .table-wrap tbody td`, `${scope} .table-wrap td`]) {
            expect(decls(selector).color).toEqual(['var(--ink)', true]);
            expect(decls(selector)['font-size']).toEqual(['1rem', true]);
        }
        const code = decls(`${scope} .table-wrap td code`);
        for (const prop of ['color', 'font-size', 'font-family', 'background']) expect(code[prop]).toBeDefined();
    });
    it('hovering the active TOC link keeps its white text on the indigo background', () => {
        // アクティブかつホバー中のリンクに適用されるセレクターと詳細度（クラス・疑似クラス数）
        const weights: Record<string, number> = {[`${scope} .nav-a:hover`]: 3, [`${scope} .nav-a.active`]: 3, [`${scope} .nav-a.active:hover`]: 4};
        let winner = {weight: -1, value: ''};
        css().walkDecls('color', decl => {const rule = decl.parent; if (rule?.type !== 'rule' || rule.parent?.type === 'atrule') return; for (const s of (rule as postcss.Rule).selectors) {const w = weights[s]; if (w !== undefined && w >= winner.weight) winner = {weight: w, value: decl.value};}});
        expect(winner.value).toBe('#fff');
    });
    inventory.css.forEach((rule, i) => it(`CSS[${i}] ${rule.media ?? 'desktop'} ${rule.selector}`, () => {
        const found: unknown[] = []; css().walkRules(r => {
            if (r.selector === scoped(rule.selector) && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === rule.media)
                found.push(r.nodes.filter(n => n.type === 'decl').map(d => { const n = d as postcss.Declaration; return [n.prop,n.value,n.important??null]; }));
        }); expect(found).toContainEqual(rule.decls);
    }));
    it('imports scoped CSS and preserves serif fonts', () => {
        const page = readFileSync(`${base}/page.tsx`,'utf8'); expect(page).toContain("import './testing-computer-software-guide.css'"); expect(page).toContain('Noto+Serif+JP');
        css().walkRules(r => r.selectors.forEach(s => expect((s.startsWith(scope) || s.startsWith('body:has(.tcs-page)') || s.startsWith('html:has(.tcs-page)'))).toBe(true)));
    });
    it('compensates application chrome and protects light text/table/code/diagram styles', () => {
        const text = css().toString(); for (const token of ['var(--disclaimer-height, 0px)', 'foreignObject', '.edgeLabels rect', 'visibility: hidden', 'min-height: 0', '-webkit-text-fill-color', '::-webkit-scrollbar', '.callout strong', 'tbody td']) expect(text).toContain(token);
    });
});
describe('all nine original Mermaid definitions', () => {
    Object.entries(inventory.diagrams).forEach(([id, expected]) => it(`${id}: exact chart and real parser`, async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry); expect(DIAGRAMS[id].slice(MERMAID_CONFIG.length).trim()).toBe(expected); expect(MERMAID_CONFIG).not.toContain("'");
        const realEntry: string = 'mermaid/dist/mermaid.esm.mjs'; const real = (await import(realEntry)).default;
        expect((await real.parse(DIAGRAMS[id])).diagramType).toBe('flowchart-v2');
    }));
});
it('renders all nine charts through the shared Mermaid component in order', async () => {
    const original = mermaid.render; const calls: string[] = [];
    mermaid.render = mock(async (_id: string, chart: string) => { calls.push(chart); return { svg: '<svg viewBox="0 0 200 100"><text>diagram</text></svg>' }; }) as unknown as typeof mermaid.render;
    try {
        const names = ['Fundamentals','Strategies','Management','Practice'];
        const components = await Promise.all(names.map(async name => { const path = `../../app/testing-computer-software-guide/${name}`; return (await import(path)).default; }));
        const view = render(<>{components.map((Component,i) => <Component key={i} />)}</>);
        await waitFor(() => expect(view.container.querySelectorAll('.diagram-block svg')).toHaveLength(9));
        const { DIAGRAMS } = await import(diagramsEntry); expect(calls).toEqual(Object.values(DIAGRAMS));
    } finally { cleanup(); mermaid.render = original; }
});
describe('checklist and navigation behavior', () => {
    it('each of ten checks updates its done style and completion count, then resets', async () => {
        const Checklist = (await import(checklistEntry)).default; const view = render(<Checklist />); const boxes = view.getAllByRole('checkbox'); expect(boxes).toHaveLength(10);
        boxes.forEach((box, i) => {fireEvent.click(box); expect(view.container.querySelector('#checklistCounter')?.textContent).toBe(`${i+1} / 10 完了`); expect(box.closest('li')?.classList.contains('done')).toBe(true);});
        boxes.forEach(box => fireEvent.click(box)); expect(view.container.querySelectorAll('li.done')).toHaveLength(0); expect(view.container.querySelector('#checklistCounter')?.textContent).toBe('0 / 10 完了');
    });
    it('toggle, anchor and Escape close the mobile menu and restore focus', async () => {
        const Nav = (await import(navEntry)).default; const view = render(<Nav />); const button = view.getByRole('button', {name:'目次を開く'});
        expect(button.getAttribute('aria-expanded')).toBe('false');
        for (const action of ['anchor','Escape']) {fireEvent.click(button); expect(button.getAttribute('aria-expanded')).toBe('true');
            if (action === 'Escape') fireEvent.keyDown(document,{key:'Escape'}); else fireEvent.click(view.container.querySelector('a')!);
            expect(button.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(button);
        }
    });
    it('tracks the section in the reading band on scroll and resize, then removes listeners', async () => {
        const band = {top: innerHeight * 0.2, bottom: innerHeight * 0.3}; let current = 0;
        const targets = document.createElement('div'); targets.innerHTML = Array.from({length:18},(_,i)=>`<section id="sec${i+1}"></section>`).join(''); document.body.appendChild(targets);
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
        expect(NAV_ITEMS.find(n=>n.href==='/testing-computer-software-guide')?.category).toBe('books-practices');expect(NAV_ITEMS).toHaveLength(107);expect(PAGES).toHaveLength(EXPECTED_PAGE_COUNT);
        expect(PAGES.find(p=>p.path==='/testing-computer-software-guide')?.h1.test('Testing Computer Software 入門ガイド')).toBe(true);
    });
    for (const ext of ['html','md'] as const) it(`${ext}: identical source hash, moved from root and Git tracked`, () => {
        const path = `archive/${ext==='html'?'html':'md'}-archive/books/${inventory.source}.${ext}`;
        expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(inventory.hashes[ext]);expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
        expect(execFileSync('git',['ls-files','--error-unmatch',path],{encoding:'utf8'}).trim()).toBe(path);
    });
});
