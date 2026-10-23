import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/iso-9075-1-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/iso-9075-1-guide';
const scope = '.iso-9075-page';
const pageEntry = '../../app/iso-9075-1-guide/page';
const diagramsEntry = '../../app/iso-9075-1-guide/diagrams';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
async function page() { return (await import(pageEntry)).default as React.ComponentType; }
async function html() { return load(renderToStaticMarkup(React.createElement(await page()))); }
function tree(node: AnyNode | undefined): unknown {
    if (!node) throw new Error('Missing element');
    if (node.type === 'text') return norm(node.data) || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs }; delete attrs['aria-current'];
    if (attrs.class) attrs.class = attrs.class.replace(/\s+active\b/g, '').replace(/\s+open\b/g, '');
    if (attrs.class === 'mermaid-diagram') { delete attrs.role; delete attrs['aria-label']; delete attrs['aria-describedby']; return { tag: node.tagName, attrs, children: [] }; }
    if (node.tagName === 'pre') return { tag: 'pre', attrs, code: load(node).text() };
    return { tag: node.tagName, attrs, children: node.children.map(tree).filter(x => x !== null) };
}
const css = () => postcss.parse(readFileSync(`${base}/iso-9075-1-guide.css`, 'utf8'));
const scoped = (s: string) => s.split(',').map(s => [':root','html','body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
afterEach(cleanup);
describe('exact original inventory', () => {
    for (const [category, group] of Object.entries(inventory.groups)) {
        it(`${category}: exact ordered count`, async () => expect((await html())(group.selector).length).toBe(group.items.length));
        group.items.forEach((expected, index) => it(`${category}[${index}]: full text, attributes and nested structure`, async () => {
            const $ = await html(); expect(tree($(group.selector)[index])).toEqual(expected);
        }));
    }
    for (const development of [false, true]) it(`complete body order after Next.js/SWC development=${development}`, () => {
        const Page = sourceModule(`${base}/page.tsx`, { development }).default as React.ComponentType;
        const $ = load(renderToStaticMarkup(<Page />));
        expect($('main').contents().toArray().map(tree).filter(Boolean)).toEqual(inventory.main);
    });
    it('all heading IDs are unique and every TOC anchor resolves exactly once', async () => {
        const $ = await html(); const ids = $('[id]').map((_, el) => $(el).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length);
        $('.sidebar a').each((_, el) => expect($($(el).attr('href')!)).toHaveLength(1));
    });
});
describe('every original CSS declaration', () => {
    inventory.css.forEach((rule, i) => it(`CSS[${i}] ${rule.media ?? 'desktop'} ${rule.selector}`, () => {
        const found: unknown[] = []; css().walkRules(r => {
            if (r.selector === scoped(rule.selector) && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === rule.media)
                found.push(r.nodes.filter(n => n.type === 'decl').map(d => { const n = d as postcss.Declaration; return [n.prop, n.value, n.important ?? null]; }));
        }); expect(found).toContainEqual(rule.decls);
    }));
    it('scopes every selector, imports the CSS and 800 font and compensates fixed app chrome', () => {
        css().walkRules(r => r.selectors.forEach(s => expect(s.startsWith(scope)).toBe(true)));
        const entry = readFileSync(`${base}/page.tsx`, 'utf8'); expect(entry).toContain("import './iso-9075-1-guide.css'"); expect(entry).toContain("import '@fontsource/noto-sans-jp/800.css'");
        expect(css().toString()).toContain('var(--disclaimer-height, 0px)');
    });
});
describe('all original diagrams', () => {
    for (const [id, diagram] of Object.entries(inventory.diagrams)) it(`${id}: exact HTML-derived definition and actual Mermaid parser`, async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry);
        expect(DIAGRAMS[id].slice(MERMAID_CONFIG.length).trim()).toBe(diagram.chart);
        expect(MERMAID_CONFIG).not.toContain("'");
        const entry: string = 'mermaid/dist/mermaid.esm.mjs'; const real = (await import(entry)).default;
        expect((await real.parse(DIAGRAMS[id])).diagramType).toBe(id === 'diagram-3' ? 'sequence' : 'flowchart-v2');
    });
    it('uses the shared renderer for all nine definitions in order', async () => {
        const original = mermaid.render; const calls: string[] = [];
        mermaid.render = mock(async (_id: string, chart: string) => { calls.push(chart); return { svg: '<svg viewBox="0 0 200 100"><text>diagram</text></svg>' }; }) as unknown as typeof mermaid.render;
        try { const Page = await page(); const result = render(<Page />);
            await waitFor(() => expect(result.container.querySelectorAll('.mermaid-diagram svg')).toHaveLength(9));
            const { DIAGRAMS } = await import(diagramsEntry); expect(calls).toEqual(Object.values(DIAGRAMS));
        } finally { cleanup(); mermaid.render = original; }
    });
});
describe('SQL syntax and exact whitespace', () => {
    inventory.groups.codes.items.forEach((source, i) => it(`code ${i}: all LF, indentation, comments, keywords and strings`, async () => {
        const $ = await html(); const block = $('pre').eq(i); expect(block.text()).toBe(source.code);
        const expected = load(`<pre><code>${source.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`);
        const text = expected('code').text(); const comments = text.match(/--[^\n]*/g) ?? [];
        expect(block.find('.tok-c').map((_, el) => $(el).text()).get()).toEqual(comments);
        const uncommented = text.replace(/--[^\n]*/g, ''); const strings = uncommented.match(/'[^']*'/g) ?? [];
        expect(block.find('.tok-s').map((_, el) => $(el).text()).get()).toEqual(strings);
        const keywords = uncommented.replace(/'[^']*'/g,'').match(/\b(SELECT|FROM|WHERE|GROUP BY|ORDER BY|CREATE|PROPERTY|GRAPH|VERTEX|EDGE|TABLES|KEY|SOURCE|DESTINATION|REFERENCES|PROPERTIES|MATCH|COLUMNS|IS|AS|COUNT|UNIQUE|NULLS|NOT|DISTINCT|BY)\b/g) ?? [];
        expect(block.find('.tok-k').map((_, el) => $(el).text()).get()).toEqual(keywords);
    }));
});
describe('TOC interactions', () => {
    it('toggles, closes on anchor, closes on Escape and restores focus', async () => {
        const entry = '../../app/iso-9075-1-guide/NavBar'; const Nav = (await import(entry)).default;
        const view = render(<Nav />); const button = view.getByRole('button', { name: '目次を開く' });
        expect(button.getAttribute('aria-expanded')).toBe('false'); fireEvent.click(button); expect(button.getAttribute('aria-expanded')).toBe('true'); expect(view.container.querySelector('.sidebar.open')).not.toBeNull();
        fireEvent.click(view.container.querySelector('a')!); expect(button.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(button); fireEvent.keyDown(document, { key: 'Escape' }); expect(button.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(button);
    });
    it('returns focus to the toggle only when a link closes the open TOC', async () => {
        const entry = '../../app/iso-9075-1-guide/NavBar'; const Nav = (await import(entry)).default;
        const view = render(<Nav />); const button = view.getByRole('button', { name: '目次を開く' }); const anchor = view.container.querySelector('a')!;
        anchor.focus(); fireEvent.click(anchor); expect(document.activeElement).toBe(anchor);
        fireEvent.click(button); anchor.focus(); fireEvent.click(anchor);
        expect(document.activeElement).toBe(button); expect(button.getAttribute('aria-expanded')).toBe('false');
    });
    it('observes all 34 anchors, selects each link and disconnects on unmount', async () => {
        const previous = globalThis.IntersectionObserver; let callback: IntersectionObserverCallback | undefined; const observed: Element[] = []; const disconnect = mock(() => {});
        globalThis.IntersectionObserver = class { constructor(cb: IntersectionObserverCallback) { callback = cb; } observe(el: Element) { observed.push(el); } disconnect = disconnect; } as unknown as typeof IntersectionObserver;
        const targets = document.createElement('div'); targets.innerHTML = inventory.groups.toc.items.map(a => `<h2 id="${a.attrs['data-target']}">target</h2>`).join(''); document.body.appendChild(targets);
        try {
            const entry = '../../app/iso-9075-1-guide/NavBar'; const Nav = (await import(entry)).default; const view = render(<Nav />);
            expect(observed.map(el => el.id)).toEqual(inventory.groups.toc.items.map(a => a.attrs['data-target']));
            for (const target of observed) { act(() => callback!([{ isIntersecting: true, target }] as IntersectionObserverEntry[], {} as IntersectionObserver)); expect(view.container.querySelectorAll('a.active')).toHaveLength(1); expect(view.container.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#'+target.id); }
            view.unmount(); expect(disconnect).toHaveBeenCalledTimes(1);
        } finally { targets.remove(); globalThis.IntersectionObserver = previous; }
    });
});
describe('review fixes', () => {
    const mobileDecls = (selector: string) => {
        const found: Record<string, string> = {}; css().walkRules(r => {
            const parent = r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params.replace(/\s+/g, '') : null;
            if (parent === '(max-width:960px)' && r.selector === selector) r.walkDecls(d => { found[d.prop] = d.value; });
        }); return found;
    };
    it('closed mobile TOC is hidden from Tab order after the 0.2s slide, open TOC is visible', () => {
        const closed = mobileDecls(`${scope} .sidebar`); const open = mobileDecls(`${scope} .sidebar.open`);
        expect(closed.visibility).toBe('hidden'); expect(closed.transition).toBe('transform .2s, visibility 0s linear .2s');
        expect(open.visibility).toBe('visible'); expect(open.transition).toBe('transform .2s, visibility 0s');
    });
    it('diagram-7 attaches Cor 1:2022 to the 2016 edition', async () => {
        const { DIAGRAMS } = await import(diagramsEntry);
        expect(DIAGRAMS['diagram-7']).toContain('N7_A --> N7_C'); expect(DIAGRAMS['diagram-7']).not.toContain('N7_B --> N7_C');
    });
    it('every table has a unique accessible name from its section heading', async () => {
        const $ = await html(); const names = $('main table').map((_, el) => {
            const id = $(el).attr('aria-labelledby'); expect(id).toBeTruthy(); const label = $(`[id="${id}"]`);
            expect(label).toHaveLength(1); expect(['h2', 'h3']).toContain(label.prop('tagName')?.toLowerCase()); return norm(label.text());
        }).get(); expect(names).toHaveLength(19); expect(new Set(names).size).toBe(19);
    });
    it('ANY_VALUE example states the uniqueness precondition instead of claiming safety', async () => {
        const code = (await html())('pre').filter((_, el) => load(el).text().includes('ANY_VALUE')).text();
        expect(code).not.toContain('安全に取り出す'); expect(code).toContain('一意');
    });
    it('PostgreSQL PGQ comparison is dated to the pre-revert development version', async () => {
        const $ = await html(); const table = $('#s-6-3-postgresqlとoracleのpgq実装差-コミュニティでの検証例').nextAll('.table-scroll').first();
        expect(table.find('thead th').eq(1).text()).toContain('revert 前');
        table.find('tbody tr').each((_, row) => { const cell = $(row).find('td').eq(1).text(); expect(cell).not.toBe('対応'); expect(cell).not.toBe('標準の同義語に対応'); expect(cell).toContain('開発版'); });
    });
    it('Clause 2 callout lists SQL series parts separately from the other normative references', async () => {
        const $ = await html(); const callout = $('main .callout').filter((_, el) => $(el).text().includes('規定参照との区別')).first();
        const paragraphs = callout.children('p').map((_, p) => norm($(p).text())).get();
        const parts = paragraphs.filter(p => p.includes('Part 2、3、4、9、10、11、13、14、15、16'));
        const others = paragraphs.filter(p => ['ISO/IEC 646', 'ISO/IEC 10646:2020', 'ISO/IEC 14651'].every(ref => p.includes(ref)));
        expect(parts).toHaveLength(1); expect(others).toHaveLength(1);
        expect(parts[0]).not.toContain('646'); expect(others[0]).not.toContain('Part 2、');
        expect(norm(callout.text())).toContain('Part 1 自身は規定参照には含まれません');
    });
    it('SQL/PGQ row records the revert on both master and REL_19_STABLE', async () => {
        const $ = await html(); const row = $('#s-6-1-postgresql').nextAll('.table-scroll').first().find('tbody tr').filter((_, tr) => $(tr).find('td').first().text() === 'SQL/PGQ');
        const cell = norm(row.find('td').eq(1).text());
        expect(cell).toContain('2026年9月7日に master と REL_19_STABLE の両方から revert');
        expect(cell).toContain('PostgreSQL 19 には搭載されず、今後の搭載版は未定');
    });
    it('price notices state the CHF 0 store price and keep the AI-use restriction as a separate statement', async () => {
        const $ = await html();
        const notices = [
            $('#s-3-step-3-基本概念を理解する-sql環境のモデル').nextAll('.callout').first().text(),
            $('main .callout').filter((_, el) => $(el).text().includes('調査基準日')).first().text(),
            $('main td').filter((_, td) => $(td).prev('td').text() === '規格本文の未参照').first().text(),
            $('.page-footer').text(),
        ].map(norm);
        for (const notice of notices) {
            expect(notice).not.toContain('有料');
            expect(notice).toContain('CHF 0');
            expect(notice).toContain('AI利用を認めていない');
        }
    });
});
describe('diagram accessible descriptions', () => {
    const inOrder = (text: string, steps: string[]) => steps.map(s => text.indexOf(s)).every((p, i, a) => p >= 0 && (i === 0 || p > a[i - 1]!));
    it('keeps every aria-label and links each diagram to a non-empty description inside it', async () => {
        const $ = await html(); const diagrams = $('.mermaid-diagram');
        expect(diagrams).toHaveLength(9);
        diagrams.each((_, el) => {
            const id = $(el).attr('id')!; expect($(el).attr('role')).toBe('img'); expect($(el).attr('aria-label')?.trim()).toBeTruthy();
            expect($(el).attr('aria-describedby')).toBe(`${id}-desc`);
            const desc = $(el).find(`[id="${id}-desc"]`); expect(desc).toHaveLength(1); expect(desc.attr('hidden')).toBeDefined(); expect(norm(desc.text())).not.toBe('');
        });
    });
    it('diagram-3 describes the client-server processing order', async () => {
        const $ = await html(); const text = norm($('#diagram-3-desc').text());
        expect(inOrder(text, ['SQL文を発行', 'セッションを確立', '解析・実行', '結果（または例外）', '返却'])).toBe(true);
    });
    it('diagram-8 describes the five learning steps in order', async () => {
        const $ = await html(); const text = norm($('#diagram-8-desc').text());
        expect(inOrder(text, ['①', '②', '③', '④', '⑤'])).toBe(true);
        expect(inOrder(text, ['全体像', 'modern-sql.com', 'SQL Conformance', '適合テスト', 'ISO OBP'])).toBe(true);
    });
});
describe('PostgreSQL support table sources', () => {
    it('cites the April 2023 Eisentraut article for JSON accessors and keeps every other source unchanged', async () => {
        const $ = await html();
        const sources = $('table[aria-labelledby="s-6-1-postgresql"] tbody tr').map((_, tr) => norm($(tr).find('td').eq(2).text())).get();
        expect(sources).toEqual(['Eisentraut氏ブログ', '同上', '同上', 'PostgreSQL公式ドキュメント', 'PostgreSQL 18 公式ドキュメント Appendix D', 'Eisentraut氏ブログ（2023年4月時点の情報）', 'pgsql-committers／depesz／pgEdge']);
    });
});
describe('diagram-2 distinguishes the objects that hold SQL-data', () => {
    it('routes SQL-data only from tables and marks other SQL-objects as definitions', async () => {
        const { DIAGRAMS } = await import(diagramsEntry); const chart: string = DIAGRAMS['diagram-2'];
        expect(chart).not.toContain('N2_OBJ --> N2_DATA');
        expect(chart).toContain('N2_OBJ --> N2_TBL'); expect(chart).toContain('N2_OBJ --> N2_DEF');
        expect(chart.match(/N2_DATA$/gm)).toHaveLength(1); expect(chart).toMatch(/^N2_TBL -->\|"[^"]+"\| N2_DATA$/m);
        expect(chart).toMatch(/^N2_DEF\["[^"]*データは保持しない[^"]*"\]$/m);
    });
    it('describes that tables hold the data while views, types and routines do not', async () => {
        const $ = await html(); const text = norm($('#diagram-2-desc').text());
        expect(text).not.toContain('SQL オブジェクトが実際の SQL データを保持');
        expect(text).toContain('実際の SQL データを行として保持するのはテーブル（表）');
        expect(text).toContain('ビュー・型・ルーチンなどは定義のみでデータを保持しない');
    });
});
describe('toc click keeps its target active during smooth scroll', () => {
    const mount = async () => {
        let callback: IntersectionObserverCallback | undefined; const previous = globalThis.IntersectionObserver;
        globalThis.IntersectionObserver = class { constructor(cb: IntersectionObserverCallback) { callback = cb; } observe() {} disconnect() {} } as unknown as typeof IntersectionObserver;
        const ids = inventory.groups.toc.items.map(a => a.attrs['data-target'] as string);
        const targets = document.createElement('div'); targets.innerHTML = ids.map(id => `<h2 id="${id}">target</h2>`).join(''); document.body.appendChild(targets);
        const entry = '../../app/iso-9075-1-guide/NavBar'; const Nav = (await import(entry)).default; const view = render(<Nav />);
        const intersect = (id: string) => act(() => callback!([{ isIntersecting: true, target: document.getElementById(id)! }] as IntersectionObserverEntry[], {} as IntersectionObserver));
        const current = () => view.container.querySelector('a[aria-current="location"]')?.getAttribute('href');
        const restore = () => { view.unmount(); targets.remove(); globalThis.IntersectionObserver = previous; };
        return { ids, view, intersect, current, restore };
    };
    it('ignores observer updates until scrollend and then activates the clicked heading', async () => {
        const { ids, view, intersect, current, restore } = await mount();
        try {
            const [passing, clicked] = [ids[1]!, ids[5]!];
            fireEvent.click(view.container.querySelector(`a[href="#${clicked}"]`)!);
            expect(current()).toBe(`#${clicked}`);
            act(() => { window.dispatchEvent(new Event('scroll')); }); intersect(passing);
            expect(current()).toBe(`#${clicked}`);
            act(() => { window.dispatchEvent(new Event('scrollend')); });
            expect(current()).toBe(`#${clicked}`);
            intersect(passing);
            expect(current()).toBe(`#${passing}`);
        } finally { restore(); }
    });
    it('releases the lock when no scroll follows the click', async () => {
        const { ids, view, intersect, current, restore } = await mount();
        try {
            fireEvent.click(view.container.querySelector(`a[href="#${ids[5]}"]`)!);
            await act(() => new Promise(resolve => setTimeout(resolve, 400)));
            intersect(ids[1]!);
            expect(current()).toBe(`#${ids[1]}`);
        } finally { restore(); }
    });
});
describe('toc follows browser history hash changes', () => {
    it('activates the heading named by the new hash and keeps observer updates afterwards', async () => {
        let callback: IntersectionObserverCallback | undefined; const previous = globalThis.IntersectionObserver;
        globalThis.IntersectionObserver = class { constructor(cb: IntersectionObserverCallback) { callback = cb; } observe() {} disconnect() {} } as unknown as typeof IntersectionObserver;
        const ids = inventory.groups.toc.items.map(a => a.attrs['data-target'] as string);
        const targets = document.createElement('div'); targets.innerHTML = ids.map(id => `<h2 id="${id}">target</h2>`).join(''); document.body.appendChild(targets);
        const entry = '../../app/iso-9075-1-guide/NavBar'; const Nav = (await import(entry)).default; const view = render(<Nav />);
        const current = () => view.container.querySelector('a[aria-current="location"]')?.getAttribute('href');
        const navigate = (hash: string) => act(() => { history.replaceState(null, '', hash); window.dispatchEvent(new Event('hashchange')); });
        try {
            navigate(`#${ids[3]}`);
            expect(current()).toBe(`#${ids[3]}`);
            navigate('#not-a-toc-heading');
            expect(current()).toBe(`#${ids[3]}`);
            act(() => { window.dispatchEvent(new Event('scrollend')); });
            act(() => callback!([{ isIntersecting: true, target: document.getElementById(ids[1]!)! }] as IntersectionObserverEntry[], {} as IntersectionObserver));
            expect(current()).toBe(`#${ids[1]}`);
        } finally { view.unmount(); targets.remove(); history.replaceState(null, '', '#'); globalThis.IntersectionObserver = previous; }
    });
    it('ignores a malformed percent-encoded hash without throwing and keeps the current heading', async () => {
        const ids = inventory.groups.toc.items.map(a => a.attrs['data-target'] as string);
        // dispatchEvent は例外を握りつぶす実装があるため、登録されたハンドラーを直接呼び出して検証する
        const handlers: EventListener[] = []; const original = window.addEventListener.bind(window);
        window.addEventListener = ((type: string, listener: EventListener, options?: AddEventListenerOptions) => {
            if (type === 'hashchange') handlers.push(listener);
            original(type, listener, options);
        }) as typeof window.addEventListener;
        const entry = '../../app/iso-9075-1-guide/NavBar'; const Nav = (await import(entry)).default; const view = render(<Nav />);
        const current = () => view.container.querySelector('a[aria-current="location"]')?.getAttribute('href');
        const fire = (hash: string) => act(() => { history.replaceState(null, '', hash); for (const handler of handlers) handler(new Event('hashchange')); });
        try {
            expect(handlers.length).toBeGreaterThan(0);
            fire(`#${ids[2]}`);
            expect(current()).toBe(`#${ids[2]}`);
            expect(() => fire('#%E0%A4%A')).not.toThrow();
            expect(current()).toBe(`#${ids[2]}`);
        } finally { view.unmount(); window.addEventListener = original; history.replaceState(null, '', '#'); }
    });
});
