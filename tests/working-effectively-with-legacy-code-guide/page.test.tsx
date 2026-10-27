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
    it('cites the book page [15], not the strangler fig article [19], for Feathers\' legacy-code definition', async () => {
        const $ = await html(); expect($('#sec3 sup').first().text()).toBe('[2][15]');
        expect($('.ref-card').filter((_, el) => $(el).find('.ref-num').text().trim() === '[15]').find('.ref-title').text()).toContain('Working Effectively with Legacy');
    });
    it('the characterization test example declares its provisional expectation instead of an undefined identifier', async () => {
        const code = (await html())('pre code').first().text();
        expect(code).not.toContain('actualObservedValue');
        expect(code).toMatch(/const provisionalExpected = [^;\n]+;/);
        expect(code).toContain('calculateShippingFee(sampleOrder) が実際に返した値に置き換える');
        expect(code).toContain('expect(result).toEqual(provisionalExpected);');
    });
    it('the provisional expectation is a non-numeric sentinel that cannot equal a shipping fee on the first run', async () => {
        const code = (await html())('pre code').first().text();
        expect(code).toMatch(/const provisionalExpected = '[^']+';/);
    });
    it('step 1 recommends only investigation and notes before tests, deferring deletion until behavior is protected', async () => {
        const text = (await html())('#sec6 .prose p').eq(1).text();
        expect(text).not.toContain('削る');
        expect(text).toContain('コードを変更しない調査');
        expect(text).toContain('利用箇所を確認し、キャラクタリゼーションテストで挙動を保護してから');
    });
    it('references [41] and [42] each link to their own article', async () => {
        const $ = await html(); const card = (num: string) => $('.ref-card').filter((_, el) => $(el).find('.ref-num').text().trim() === num);
        expect(card('[41][42]')).toHaveLength(0);
        expect(card('[41]').find('.ref-title').text()).toContain('tamerlan.dev');
        expect(card('[41]').find('a.ref-url').attr('href')).toBe('https://tamerlan.dev/working-effectively-with-legacy-code/');
        expect(card('[42]').find('.ref-title').text()).toContain('Nitesh Ranjan');
        expect(card('[42]').find('a.ref-url').attr('href')).toBe('https://medium.com/@nitesh.ranja/6-takeaways-from-working-effectively-with-legacy-code-by-michael-feathers-bc9fa5e63f98');
    });
    it('the Sprout and Wrap introduction places both techniques in chapter 6', async () => {
        const $ = await html(); const intro = $('#sec11 .prose > p').first().text();
        expect(intro).toContain('Feathers は第6章で'); expect(intro).toContain('いずれも第6章で解説される'); expect(intro).not.toContain('第6〜7章');
    });
    it('the pain-point lookup table names the book chapter for every row', async () => {
        const $ = await html(); const table = $('#sec13 table');
        expect(table.find('thead th').map((_, el) => $(el).text().trim()).get()).toEqual(['現場の悩み', '主に関連する概念・技法', '対応する章']);
        expect(table.find('tbody tr').map((_, el) => $(el).find('td').eq(2).text().trim()).get()).toEqual(['第6章', '第7章', '第9章', '第10章', '第11章', '第12章', '第14章', '第16章', '第17章', '第20章', '第22章', '第24章']);
    });
    it('the slow-change row points to chapter 7 and keeps Wrap in chapter 6', async () => {
        const $ = await html(); const row = $('#sec13 tbody tr').eq(1).find('td');
        expect(row.map((_, el) => $(el).text().trim()).get()).toEqual(['変更にとにかく時間がかかりすぎる', 'ラグタイム（ビルドとテストの待ち時間）の短縮、依存関係の解消（Wrap Method／Class は第6章）', '第7章']);
    });
    it('the Sprout/Wrap intro assigns slow changes to chapter 7 and safe feature addition to chapter 6', async () => {
        const $ = await html(); const text = $('#sec11 .prose > p').first().text();
        expect(text).toContain('「変更にとても時間がかかる」という悩みは第7章で扱われますが、「時間がない」という現場の悩みに対しては、Feathers は第6章で、Sprout と Wrap を含む、新しい機能を安全に追加するための実践的な技法を紹介しています');
        expect(text).not.toContain('「時間がない」「変更にとても時間がかかる」という現場の悩みに対して');
    });
    it('diagram 10 carries an accessible title and a description of its five steps in order', async () => {
        const { DIAGRAMS } = await import(diagramsEntry); const chart: string = DIAGRAMS.d10;
        expect(chart).toContain('\naccTitle: 学習ロードマップ（5つのステップ）\n');
        expect(chart).toContain('\naccDescr: 5つの学習ステップを順に示す図。①Part 1（第1〜5章）を読み用語に慣れる、②コーディングカタなど小さな練習問題で技法を試す、③実プロジェクトの小さな変更に5ステップを適用する、④うまくいった技法をチームで共有する、⑤自分のコードベース向けのシームパターン集を育てる\n');
        ['L1[', '--> L2[', 'L2 --> L3', 'L3 --> L4', 'L4 --> L5'].forEach(part => expect(chart).toContain(part));
    });
    it('diagram 11 carries an accessible title and a description of its summary relationships', async () => {
        const { DIAGRAMS } = await import(diagramsEntry); const chart: string = DIAGRAMS.d11;
        expect(chart).toContain('\naccTitle: 全体のまとめ（レガシーコード改善の流れ）\n');
        expect(chart).toContain('\naccDescr: レガシーコードの定義（テストのないコード）からジレンマが生じ、5段階の変更アルゴリズムへ進む。変更アルゴリズムはシームで依存を断ち切ることと、キャラクタリゼーションテストで現状の挙動を固定することに分かれ、両方が安全に変更できる状態へつながる。その状態から、SproutとWrapによる新機能の安全な追加と、Strangler Figパターンによるシステム全体の段階的な近代化へ進む\n');
        ['Def[', '--> Dilemma[', 'Dilemma --> Algo[', 'Algo --> Seam2[', 'Algo --> Char[', 'Seam2 --> Safe[', 'Char --> Safe', 'Safe --> Grow[', 'Safe --> Big['].forEach(part => expect(chart).toContain(part));
    });
    it('all external references have safe new-tab attributes', async () => {
        const $ = await html(); $('main a[href^="http"]').each((_, el) => {expect($(el).attr('target')).toBe('_blank'); expect($(el).attr('rel')).toBe('noopener noreferrer');});
    });
});
describe('every original design rule and responsive breakpoint', () => {
    it('at 960px or less the menu bar stacks above the open sidebar and below the header, keeping its offset', () => {
        const mobileValue = (selector: string, prop: string) => {let value = ''; css().walkDecls(prop, decl => {const rule = decl.parent; if (rule?.type !== 'rule') return; const media = rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : ''; if (media && !media.includes('max-width: 960px')) return; if ((rule as postcss.Rule).selectors.includes(selector)) value = decl.value;}); return value;};
        const bar = Number(mobileValue(`${scope} .mobile-bar`, 'z-index')); const sidebar = Number(mobileValue(`${scope} .sidebar`, 'z-index'));
        expect(bar).toBeGreaterThan(sidebar); expect(bar).toBeLessThan(50);
        expect(mobileValue(`${scope} .mobile-bar`, 'top')).toBe('calc(60px + var(--disclaimer-height, 0px))');
    });
    // メディア外で最後に宣言された値を有効値とみなす
    const decls = (selector: string) => {const out: Record<string, [string, boolean]> = {}; css().walkDecls(decl => {const rule = decl.parent; if (rule?.type !== 'rule' || rule.parent?.type === 'atrule' || !(rule as postcss.Rule).selectors.includes(selector)) return; out[decl.prop] = [decl.value, decl.important === true];}); return out;};
    it('reference numbers in --gold meet 4.5:1 on the card background', () => {
        const vars = decls(scope);
        const luminance = (hex: string) => {const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(c => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4); return 0.2126 * r + 0.7152 * g + 0.0722 * b;};
        const ratio = (a: string, b: string) => {const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x); return (hi + 0.05) / (lo + 0.05);};
        expect(decls(`${scope} .ref-card .ref-num`).color).toEqual(['var(--gold)', false]);
        expect(ratio(vars['--gold'][0], vars['--paper-card'][0])).toBeGreaterThanOrEqual(4.5);
    });
    it('every table cell forces ink color and inline code in cells is fully reset', () => {
        expect(decls(`${scope} td`).color).toEqual(['var(--ink)', true]);
        expect(decls(`${scope} tbody td`).color).toEqual(['var(--ink)', true]);
        const code = decls(`${scope} td code`);
        for (const prop of ['color', 'font-size', 'font-family', 'background']) expect(code[prop]).toBeDefined();
    });
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
        expect(NAV_ITEMS.find(n=>n.href==='/working-effectively-with-legacy-code-guide')?.category).toBe('books-practices');expect(NAV_ITEMS).toHaveLength(111);expect(PAGES).toHaveLength(EXPECTED_PAGE_COUNT);
        expect(PAGES.find(p=>p.path==='/working-effectively-with-legacy-code-guide')?.h1.test('Working Effectively with Legacy Code 完全ガイド')).toBe(true);
    });
    for (const ext of ['html','md'] as const) it(`${ext}: identical source hash, moved from root and Git tracked`, () => {
        const path = `archive/${ext==='html'?'html':'md'}-archive/books/${inventory.source}.${ext}`;
        expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(inventory.hashes[ext]);expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
        expect(execFileSync('git',['ls-files','--error-unmatch',path],{encoding:'utf8'}).trim()).toBe(path);
    });
});
