import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/iso-11179-1-2023-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/iso-11179-1-2023-guide';
const scope = '.iso-11179-page';
const pageEntry = '../../app/iso-11179-1-2023-guide/page';
const diagramsEntry = '../../app/iso-11179-1-2023-guide/diagrams';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
async function page() { return (await import(pageEntry)).default as React.ComponentType; }
async function html() { return load(renderToStaticMarkup(React.createElement(await page()))); }
function tree(node: AnyNode | undefined): unknown {
    if (!node) throw new Error('Missing element');
    if (node.type === 'text') return norm(node.data) || null;
    if (!isTag(node)) return null;
    const attrs = { ...node.attribs }; delete attrs['aria-current'];
    if (['cp-bar','cp-count','cp-fill'].includes(attrs.class ?? '')) { delete attrs.role; delete attrs.style; for (const key of Object.keys(attrs)) if (key.startsWith('aria-')) delete attrs[key]; }
    if (attrs.class) attrs.class = attrs.class.replace(/\s+active\b/g, '').replace(/\s+open\b/g, '');
    if (attrs.class === 'mermaid-diagram') { delete attrs['aria-label']; return { tag: node.tagName, attrs, children: [] }; }
    if (node.tagName === 'pre') return { tag: 'pre', attrs, code: load(node).text() };
    return { tag: node.tagName, attrs, children: node.children.map(tree).filter(x => x !== null) };
}
const css = () => postcss.parse(readFileSync(`${base}/iso-11179-1-2023-guide.css`, 'utf8'));
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
        const entry = readFileSync(`${base}/page.tsx`, 'utf8'); expect(entry).toContain("import './iso-11179-1-2023-guide.css'"); expect(entry).toContain("import '@fontsource/noto-sans-jp/800.css'");
        expect(css().toString()).toContain('var(--disclaimer-height, 0px)');
    });
});
describe('all original diagrams', () => {
    for (const [id, diagram] of Object.entries(inventory.diagrams)) it(`${id}: exact HTML-derived definition and actual Mermaid parser`, async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = await import(diagramsEntry);
        expect(DIAGRAMS[id].slice(MERMAID_CONFIG.length).trim()).toBe(diagram.chart);
        expect(MERMAID_CONFIG).not.toContain("'");
        const entry: string = 'mermaid/dist/mermaid.esm.mjs'; const real = (await import(entry)).default;
        expect((await real.parse(DIAGRAMS[id])).diagramType).toBe(id === 'diagram-12' ? 'sequence' : id === 'diagram-10' ? 'class' : 'flowchart-v2');
    });
    it('uses the shared renderer for all fourteen definitions in order', async () => {
        const original = mermaid.render; const calls: string[] = [];
        mermaid.render = mock(async (_id: string, chart: string) => { calls.push(chart); return { svg: '<svg viewBox="0 0 200 100"><text>diagram</text></svg>' }; }) as unknown as typeof mermaid.render;
        try { const Page = await page(); const result = render(<Page />);
            await waitFor(() => expect(result.container.querySelectorAll('.mermaid-diagram svg')).toHaveLength(14));
            const { DIAGRAMS } = await import(diagramsEntry); expect(calls).toEqual(Object.values(DIAGRAMS));
        } finally { cleanup(); mermaid.render = original; }
    });
});
describe('YAML source tokens and line fidelity', () => {
    for (const development of [false, true]) it('YAML runtime newlines after SWC development='+development, () => {
        const Code = sourceModule(base+'/CodeExample.tsx', { development }).default as React.ComponentType;
        const $ = load(renderToStaticMarkup(<Code />)); expect($('pre').text()).toBe(inventory.groups.codes.items[0]!.code);
    });
    it('expresses every permissible range as min/max bounds matching the VD tables', () => {
        const Code = sourceModule(base+'/CodeExample.tsx').default as React.ComponentType; const text = load(renderToStaticMarkup(<Code />))('pre').text();
        expect(text).not.toMatch(/permissible_range: \[/);
        expect(text).toContain('    permissible_range:\n      min: 0\n      max: 300\n'); expect(text).toContain('    permissible_range:\n      min: 0.0\n      max: 40.0\n');
    });
    it('preserves every highlighted token in source order', async () => {
        const Code = sourceModule(base+'/CodeExample.tsx').default as React.ComponentType; const $ = load(renderToStaticMarkup(<Code />)); expect($('pre span[class]').map((_, el) => ({ class: $(el).attr('class'), text: $(el).text() })).get()).toEqual(inventory.codeTokens);
    });
});
describe('TOC interactions', () => {
    it('toggles, closes on anchor, closes on Escape and restores focus', async () => {
        const entry = '../../app/iso-11179-1-2023-guide/NavBar'; const Nav = (await import(entry)).default;
        const view = render(<Nav />); const button = view.getByRole('button', { name: '目次を開く' });
        expect(button.getAttribute('aria-expanded')).toBe('false'); fireEvent.click(button); expect(button.getAttribute('aria-expanded')).toBe('true'); expect(view.container.querySelector('.sidebar.open')).not.toBeNull();
        fireEvent.click(view.container.querySelector('a')!); expect(button.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(button); fireEvent.keyDown(document, { key: 'Escape' }); expect(button.getAttribute('aria-expanded')).toBe('false'); expect(document.activeElement).toBe(button);
    });
    it('observes all 57 anchors, selects each link and disconnects on unmount', async () => {
        const previous = globalThis.IntersectionObserver; let callback: IntersectionObserverCallback | undefined; const observed: Element[] = []; const disconnect = mock(() => {});
        globalThis.IntersectionObserver = class { constructor(cb: IntersectionObserverCallback) { callback = cb; } observe(el: Element) { observed.push(el); } disconnect = disconnect; } as unknown as typeof IntersectionObserver;
        const targets = document.createElement('div'); targets.innerHTML = inventory.groups.toc.items.map(a => `<h2 id="${a.attrs['data-target']}">target</h2>`).join(''); document.body.appendChild(targets);
        try {
            const entry = '../../app/iso-11179-1-2023-guide/NavBar'; const Nav = (await import(entry)).default; const view = render(<Nav />);
            expect(observed.map(el => el.id)).toEqual(inventory.groups.toc.items.map(a => a.attrs['data-target']));
            for (const target of observed) { act(() => callback!([{ isIntersecting: true, target }] as IntersectionObserverEntry[], {} as IntersectionObserver)); expect(view.container.querySelectorAll('a.active')).toHaveLength(1); expect(view.container.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#'+target.id); }
            view.unmount(); expect(disconnect).toHaveBeenCalledTimes(1);
        } finally { targets.remove(); globalThis.IntersectionObserver = previous; }
    });
});

describe('independent migration steps', () => {
    inventory.sections.forEach((expected, i) => it('section '+i+': exact original ordered content', () => {
        const module = sourceModule(base+'/Section'+String(i).padStart(2,'0')+'.tsx'); const Section = module.default as React.ComponentType;
        const $ = load(renderToStaticMarkup(<Section />), {}, false); expect($.root().contents().toArray().map(tree).filter(Boolean)).toEqual(expected);
    }));
});
describe('six source checklist controls', () => {
    it('updates every selection and deselection, count and accessible progress', async () => {
        const entry = '../../app/iso-11179-1-2023-guide/Checklist'; const Checklist = (await import(entry)).default;
        const view = render(<Checklist />); const boxes = view.getAllByRole('checkbox') as HTMLInputElement[];
        expect(boxes).toHaveLength(6); const progress = view.getByRole('progressbar');
        expect(progress.getAttribute('aria-valuenow')).toBe('0'); expect(view.container.querySelector('.cp-count')?.textContent).toBe('0 / 6');
        boxes.forEach((box, i) => { fireEvent.click(box); expect(box.checked).toBe(true); expect(progress.getAttribute('aria-valuenow')).toBe(String(i+1)); expect(view.container.querySelector('.cp-count')?.textContent).toBe((i+1)+' / 6'); });
        expect((view.container.querySelector('.cp-fill') as HTMLElement).style.width).toBe('100%');
        boxes.forEach((box, i) => { fireEvent.click(box); expect(box.checked).toBe(false); expect(progress.getAttribute('aria-valuenow')).toBe(String(5-i)); });
        expect((view.container.querySelector('.cp-fill') as HTMLElement).style.width).toBe('0%');
    });
});
describe('review fixes', () => {
    const mobileDecls = (selector: string) => {
        const found: Record<string, string> = {}; css().walkRules(r => {
            const parent = r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params.replace(/\s+/g, '') : null;
            if (parent === '(max-width:960px)' && r.selector === selector) r.walkDecls(d => { found[d.prop] = d.value; });
        }); return found;
    };
    it('every table has a unique accessible name led by its section heading', async () => {
        const $ = await html(); const names = $('main table').map((_, el) => {
            const ids = ($(el).attr('aria-labelledby') ?? '').split(' ').filter(Boolean); expect(ids.length).toBeGreaterThan(0);
            const labels = ids.map(id => $(`[id="${id}"]`)); labels.forEach(l => expect(l).toHaveLength(1));
            expect(['h2', 'h3']).toContain(labels[0]?.prop('tagName')?.toLowerCase());
            return labels.map(l => norm(l.text())).join(' ');
        }).get(); expect(names).toHaveLength(32); expect(new Set(names).size).toBe(32);
    });
    it('closed mobile TOC is hidden from Tab order after the 0.25s slide, open TOC is visible', () => {
        const closed = mobileDecls(`${scope} .sidebar`); const open = mobileDecls(`${scope} .sidebar.open`);
        expect(closed.visibility).toBe('hidden'); expect(closed.transition).toBe('transform .25s, visibility 0s linear .25s');
        expect(open.visibility).toBe('visible'); expect(open.transition).toBe('transform .25s, visibility 0s');
        expect(open.transform).toBe('none');
    });
    it('diagram-14 is followed by an ordered text alternative of every decision and transition', () => {
        const Section = sourceModule(base+'/Section10.tsx').default as React.ComponentType;
        const $ = load(renderToStaticMarkup(<Section />), {}, false);
        const items = $('ol').first().children('li').map((_, li) => norm($(li).text())).get();
        expect(items).toEqual([
            '新しいデータ項目が必要になったら、同じ意味の DEC が既にあるかを確認する。',
            'DEC がある（はい）場合は既存の DEC を再利用する。ない（いいえ）場合はオブジェクトクラスとプロパティを決めて DEC を新規作成する。',
            '次に、同じ表現の VD が既にあるかを確認する。',
            'VD がある（はい）場合は既存の VD を再利用する。ない（いいえ）場合はデータ型・単位・許容値を決めて VD を新規作成する。',
            'DEC と VD を組み合わせて DE を作成する。',
            '定義・命名をレビューし、レジストリに登録する。',
            '登録後は共有・再利用する。',
        ]);
        const source = readFileSync(base+'/Section10.tsx', 'utf8');
        expect(source.indexOf('<Diagram id="diagram-14" />')).toBeLessThan(source.indexOf('<ol'));
        expect(source.indexOf('<ol')).toBeLessThan(source.indexOf('id="9-2-設計時のチェックリスト"'));
    });
    it('diagram-12 is followed by an ordered text alternative of every registration message', () => {
        const Section = sourceModule(base+'/Section08.tsx').default as React.ComponentType;
        const $ = load(renderToStaticMarkup(<Section />), {}, false);
        const items = $('ol').first().children('li').map((_, li) => norm($(li).text())).get();
        expect(items).toEqual([
            '提出者が登録官へ、新しい項目の登録を申請する。',
            '登録官が管理者へ内容の確認・責任範囲の確認を依頼し、管理者が定義・表現の妥当性を回答する。',
            '登録官が登録機関へ登録可否を上申し、登録機関が承認する。',
            '登録官がレジストリへ項目を登録する。',
            'レジストリが提出者へ、識別子とともに登録を通知する。',
        ]);
        const source = readFileSync(base+'/Section08.tsx', 'utf8');
        expect(source.indexOf('<Diagram id="diagram-12" />')).toBeLessThan(source.indexOf('<ol'));
        expect(source.indexOf('<ol')).toBeLessThan(source.indexOf('id="7-3-命名定義のルールは別パートへ"'));
    });
    it('STEP 5-A example names the property 純収入, matching diagram-7', async () => {
        const Section = sourceModule(base+'/Section06.tsx').default as React.ComponentType;
        const $ = load(renderToStaticMarkup(<Section />), {}, false);
        const text = norm($('p').filter((_, p) => $(p).text().includes('人の純収入')).first().text());
        expect(text).toContain('「純収入」に、オブジェクトクラス「人」を組み合わせて');
        expect(text).not.toContain('「収入」');
        const { DIAGRAMS } = await import(diagramsEntry);
        expect(DIAGRAMS['diagram-7']).toContain('N6_PR["プロパティ<br>純収入"]');
    });
    it('diagram-5 derives Part 33 from Part 7:2019 and Part 35 from ISO/IEC 19763-10:2014, matching the STEP 3 table', async () => {
        const { DIAGRAMS } = await import(diagramsEntry);
        const chart: string = DIAGRAMS['diagram-5'];
        const edges = chart.split('\n').filter(line => line.includes('==>'));
        expect(edges).toEqual([
            'N4_O3 ==> N4_N3', 'N4_O3 ==> N4_N30', 'N4_O3 ==> N4_N31', 'N4_O3 ==> N4_N32',
            'N4_O7 ==> N4_N33', 'N4_OM ==> N4_N35',
        ]);
        const old = chart.slice(chart.indexOf('subgraph N4_OLD'), chart.indexOf('subgraph N4_NEW'));
        expect(old).toContain('N4_O7["Part 7:2019<br>データセット登録"]');
        expect(old).toContain('N4_OM["ISO/IEC 19763-10:2014<br>モデル登録"]');
    });
    it('C-4 evidence table states DEC = object class + property, matching the body and diagram-7', () => {
        const Section = sourceModule(base+'/Section14.tsx').default as React.ComponentType;
        const $ = load(renderToStaticMarkup(<Section />), {}, false);
        const row = $('tbody tr').filter((_, tr) => $(tr).find('td').first().text().includes('人の純収入'));
        expect(row).toHaveLength(1);
        expect(row.find('td').first().text()).toBe('DEC＝オブジェクトクラス＋プロパティの例（人の純収入）');
        expect(row.find('td').eq(1).text()).toBe('S10');
    });
    it('Part 32 is recorded as published January 2023 with its ISO source in appendix C, leaving other parts unchanged', () => {
        const render$ = (file: string) => { const Section = sourceModule(base+'/'+file).default as React.ComponentType; return load(renderToStaticMarkup(<Section />), {}, false); };
        const parts = render$('Section04.tsx'); const rows = parts('table').first().find('tbody tr');
        const status = (part: string) => norm(rows.filter((_, tr) => parts(tr).find('td').first().text() === part).find('td').eq(3).text());
        expect(status('32')).toBe('2023年1月発行（Edition 1）');
        expect(['1','3','30','31','33','34','35'].map(status)).toEqual(['2023年1月発行（第4版）','2023年版が存在（旧版を分割）','2023年1月発行（10ページ）','2023年1月発行（Edition 1）','2023年1月発行（Edition 1）','2024年5月発行（Edition 1、41ページ）','2023年1月発行（Edition 1、66ページ）']);
        const appendix = render$('Section14.tsx');
        const source = appendix('tbody tr').filter((_, tr) => appendix(tr).find('a[href="https://www.iso.org/standard/78926.html"]').length === 1);
        expect(source).toHaveLength(1);
        const id = source.find('td').first().text();
        expect(norm(source.find('td').eq(1).text())).toBe('ISO/IEC 11179-32:2023（概念体系登録のメタモデル）');
        const claim = appendix('tbody tr').filter((_, tr) => appendix(tr).find('td').first().text().includes('Part 32'));
        expect(claim).toHaveLength(1);
        expect(norm(claim.find('td').first().text())).toBe('Part 32 の発行（2023年1月）');
        expect(claim.find('td').eq(1).text()).toBe(id);
    });
});
