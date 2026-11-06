import { describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/iso-iec-40500-2025-guide.json';
import { sourceModule } from '../helpers/source-module';
import { COMPATIBILITY_EXCEPTION, COMPATIBILITY_QA_CLAIM_END, COMPATIBILITY_SENTENCE_END, DIAGRAM_NODE_ADDITIONS, SC_258_REVIEWED, applyReviewCodeCorrections, applyReviewCorrections, applyReviewDiagramCorrections } from './review-corrections';
const base = 'app/iso-iec-40500-2025-guide';
const scope = '.wcag-40500-page';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
// Intentional accessibility corrections only: safe external links and invalid nested labels.
function correct(html: string) {
    const $ = load(html);
    $('a[href^="http"]').attr('target', '_blank').attr('rel', 'noopener noreferrer');
    $('.ck-text > label').each((_, el) => { $(el).replaceWith($(el).contents()); });

    // Table indentation is not content: React forbids these whitespace children.
    // The raw-DOM and hydration regressions independently reject them in the page.
    $('table,thead,tbody,tfoot,tr,colgroup').contents().filter((_, node) => node.type === 'text' && /^\s*$/.test(node.data)).remove();
    return $;
}
function tree(n: AnyNode | undefined): unknown {
    if (!n) throw new Error('Missing source element');
    if (n.type === 'text') return norm(n.data) || null;
    if (!isTag(n)) return null;
    const attrs = { ...n.attribs };
    for (const key of ['aria-current','aria-controls','aria-expanded','inert','tabindex','role','aria-label','aria-labelledby','aria-describedby','aria-valuemin','aria-valuemax','aria-valuenow']) delete attrs[key];
    if (attrs.class === 'mermaid-diagram') return { tag: n.tagName, attrs, children: [] };
    if (n.tagName === 'pre') return { tag: n.tagName, attrs, code: load('')(n).text() };
    if (attrs.class === 'cp-fill') delete attrs.style;
    return { tag: n.tagName, attrs, children: n.children.map(tree).filter(x => x !== null) };
}
function renderFile(file: string, development = false) {
    const Component = sourceModule(`${base}/${file}.tsx`, { development }).default as React.ComponentType;
    return correct(renderToStaticMarkup(<Component />));
}
const source = correct(applyReviewCorrections(inventory.originalBody));
for (const [i, category] of inventory.sections.entries()) {
    describe(`category ${String(i).padStart(2, '0')}: ${category.name}`, () => {
        for (const development of [false, true]) it(`exact complete structure, text, attributes and order (SWC development=${development})`, () => {
            const actual = renderFile(`Section${String(i).padStart(2, '0')}`, development);
            const expected = correct(applyReviewCorrections(category.html));
            expect(actual('body').contents().toArray().map(tree).filter(Boolean)).toEqual(expected('body').contents().toArray().map(tree).filter(Boolean));
            // Full text also detects whitespace lost between adjacent inline elements.
            actual('.mermaid-diagram').empty(); expected('.mermaid-diagram').empty();
            expect(norm(actual('body').text())).toBe(norm(expected('body').text()));
        });
    });
}
describe('foundation CSS', () => {
    for (const [i, rule] of inventory.css.entries()) it(`CSS ${i}: ${rule.selector} (${rule.media ?? 'desktop'})`, () => {
        const expectedSelector = rule.selector.split(',').map(s => [':root','html','body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
        const found: unknown[] = [];
        postcss.parse(readFileSync(`${base}/guide.css`, 'utf8')).walkRules(r => {
            if (r.selector === expectedSelector && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === rule.media)
                found.push(r.nodes.filter(n => n.type === 'decl').map(d => { const n = d as postcss.Declaration; return [n.prop,n.value,n.important ?? null]; }));
        });
        expect(found).toContainEqual(rule.decls);
    });
    it('scopes every rule and guards application chrome, SVG labels and global card styles', () => {
        const css = readFileSync(`${base}/guide.css`, 'utf8');
        postcss.parse(css).walkRules(r => r.selectors.forEach(s => expect(s.startsWith(scope)).toBe(true)));
        for (const text of ['var(--disclaimer-height, 0px)', '.mermaid-wrapper', 'max-width: none', 'foreignObject', 'overflow: visible']) expect(css).toContain(text);
    });
});
describe('assembled page', () => {
    for (const [name, group] of Object.entries(inventory.groups)) {
        it(`${name}: exact ordered inventory length`, () => expect(renderFile('page')(group.selector)).toHaveLength(group.items.length));
        group.items.forEach((_, i) => it(`${name} ${i}: exact source structure`, () => {
            const $ = renderFile('page'); expect(tree($(group.selector)[i])).toEqual(tree(source(group.selector)[i]));
        }));
    }
    it('preserves complete body content order, heading IDs, footer and all citation destinations', () => {
        const $ = renderFile('page');
        expect($('main').contents().toArray().map(tree).filter(Boolean)).toEqual(source('main').contents().toArray().map(tree).filter(Boolean));
        const ids = $('[id]').map((_, n) => $(n).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length);
        $('a[href^="#"]').each((_, n) => expect(ids.filter(id => id === $(n).attr('href')!.slice(1))).toHaveLength(1));
        const entry = readFileSync(`${base}/page.tsx`, 'utf8'); expect(entry).toContain("import './guide.css'"); expect(entry).toContain('noto-sans-jp-800.css');
        expect(sourceModule(`${base}/page.tsx`).metadata).toMatchObject({ title: inventory.title });
        expect($('script,style,svg')).toHaveLength(0);
        expect($('table,thead,tbody,tr').contents().filter((_,n) => n.type === 'text')).toHaveLength(0);
    });
});
// correct() rewrites these attributes, so only the uncorrected output can detect a regression.
describe('rendered page before test corrections', () => {
    const raw = () => load(renderToStaticMarkup(React.createElement(sourceModule(`${base}/page.tsx`).default as React.ComponentType)));
    it('marks every external link as safe', () => {
        const links = raw()('a[href^="http"]').toArray();
        expect(links.length).toBeGreaterThan(0);
        expect(links.filter(link => link.attribs.target !== '_blank' || link.attribs.rel !== 'noopener noreferrer').map(link => link.attribs.href)).toEqual([]);
    });
    it('does not nest labels inside the checklist text', () => expect(raw()('.ck-text > label')).toHaveLength(0));
});
describe('diagram semantics', () => {
    for (const [id, original] of Object.entries(inventory.diagrams)) it(`${id}: HTML-derived source, SVG node order and actual Mermaid parsing`, async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string>; MERMAID_CONFIG: string };
        expect(DIAGRAMS[id]).toBe(`${MERMAID_CONFIG}\n${applyReviewDiagramCorrections(id, original.chart).split('\n').map(s => s.trim()).join('\n')}`);
        expect(MERMAID_CONFIG).not.toContain("'");
        const entry: string = 'mermaid/dist/mermaid.esm.mjs'; const mermaid = (await import(entry)).default;
        expect((await mermaid.parse(DIAGRAMS[id])).diagramType).toBe('flowchart-v2');
        const labels = original.chart.match(/\["([^"\n]+)"\]|\{"([^"\n]+)"\}/g) ?? [];
        expect(labels.length).toBeGreaterThan(0);
    });
    const accessibleName = (id: string) => {
        const Component = sourceModule(`${base}/Diagram.tsx`).default as React.ComponentType<{ id: string }>;
        return load(renderToStaticMarkup(<Component id={id} />))('[role="img"]').attr('aria-label');
    };
    for (const [id, original] of Object.entries(inventory.diagrams)) it(`${id}: text alternative keeps the figure number and conveys every node, group and edge label`, () => {
        const name = norm(accessibleName(id) ?? '');
        expect(name.startsWith(`${source(`[id="${id}"]`).attr('aria-label')}：`)).toBe(true);
        const labels = Array.from(applyReviewDiagramCorrections(id, original.chart).matchAll(/\["([^"\n]+)"\]|\{"([^"\n]+)"\}|\|"([^"\n]+)"\|/g), m => m[1] ?? m[2] ?? m[3] ?? '');
        expect(labels.flatMap(label => label.split('<br/>')).map(norm).filter(part => !name.includes(part))).toEqual([]);
    });
    it('mermaid-diagram-4: maps all nine new criteria, each once, in the diagram and its text alternative', () => {
        const criteria = ['2.4.11', '2.4.12', '2.4.13', '2.5.7', '2.5.8', '3.2.6', '3.3.7', '3.3.8', '3.3.9'];
        const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
        const shown = [...(DIAGRAMS['mermaid-diagram-4'] ?? '').matchAll(/\["(\d\.\d\.\d+) /g)].map(m => m[1]).sort();
        expect(shown).toEqual(criteria);
        const name = accessibleName('mermaid-diagram-4') ?? '';
        expect(name).toMatch(/見た目・UIの修正が中心：[^。]*2\.4\.12[^。]*。/);
        expect(name).toMatch(/フロー・認証設計に影響：[^。]*3\.3\.9[^。]*。/);
        expect(criteria.filter(sc => !name.includes(sc))).toEqual([]);
    });
    it('each diagram correction targets one existing original node', () => {
        for (const [id, additions] of Object.entries(DIAGRAM_NODE_ADDITIONS)) for (const { after } of additions)
            expect(inventory.diagrams[id as keyof typeof inventory.diagrams].chart.match(new RegExp(`^${after}\\[`, 'gm'))).toHaveLength(1);
    });
    it('describes the branch outcomes of the conformance decision flow in order', () => {
        const name = accessibleName('mermaid-diagram-5') ?? '';
        expect(name).toMatch(/すべて満たしたか？.*いいえ.*不備を修正して再テスト.*はい.*プロセス全体を通して確認したか？.*いいえ.*一連の流れで確認.*はい.*アクセシビリティ表明を作成/);
    });
    it('passes all nine definitions to the shared renderer in source order', () => {
        const charts: string[] = [];
        const Component = sourceModule(`${base}/page.tsx`, { onMermaidChart: chart => charts.push(chart) }).default as React.ComponentType;
        renderToStaticMarkup(<Component />);
        const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
        expect(charts).toEqual(Object.values(DIAGRAMS));
    });
});
describe('reviewed compatibility claim', () => {
    it('applies to the original source exactly once', () => expect(inventory.originalBody.split(COMPATIBILITY_SENTENCE_END)).toHaveLength(2));
    it('states the 4.1.1 exception right after the compatibility claim, matching the 6.2 callout', () => {
        const claim = renderFile('Section03')('ul li').first().text();
        expect(norm(claim)).toContain('WCAG 2.0 と 2.1 にも適合します');
        expect(claim).toContain(COMPATIBILITY_EXCEPTION);
        expect(norm(renderFile('Section07')('blockquote.callout').text())).toContain('引き続き 4.1.1 の試験と報告が求められることがあります');
    });
    it('applies to the Q&A claim in the original source exactly once', () => expect(inventory.originalBody.split(COMPATIBILITY_QA_CLAIM_END)).toHaveLength(2));
    it('repeats the same 4.1.1 exception in the Q&A answer that makes the same claim', () => {
        const row = renderFile('Section10')('tbody tr').filter((_, tr) => load(tr)('td').first().text() === '3');
        expect(row).toHaveLength(1);
        expect(norm(row.find('td').last().text())).toBe(`2.2 に適合すれば 2.0 / 2.1 にも適合。${COMPATIBILITY_EXCEPTION}`);
    });
});
const TABLE_REGIONS = [
    '表：0.1 ゴールの問いと対応する章','表：0.3 用語のミニ辞書','表：1.4 基本情報（ISO 公式ページの記載）','表：2.2 いちばん大事な注意点の質問と答え',
    '表：3.2 4つの原則（POUR）','表：3.3 3つの適合レベル','表：3.4 達成基準の数（WCAG 2.2）','表：3.5 適合の5つの要件',
    '表：4.1 新規達成基準の一覧','表：4.2 削除された達成基準','表：5.2 2.5.8 ターゲットのサイズの例外','表：5.4 3.2.6 一貫したヘルプのNGとOK',
    '表：5.6 3.3.8 アクセシブルな認証のやってよいことと避けるべきこと','表：6.3 テストの種類と役割','表：6.4 QAエンジニア向けチェック表（新規基準）',
    '表：7.2 EN 301 549 の最新状況（2026年10月時点）','表：8.2 WCAG 3.0 はいつ使えるのか','表：補足 よくある誤解 Q&A','表：情報の確度と注意点',
    '表：一次情報（ISO / W3C）','表：実務家・専門組織の解説','表：補助的な情報源（ベンダー記事。参考扱い）',
];
const CODE_REGIONS = [
    'コード例：固定ヘッダー分のスクロール余白とフォーカス表示のCSS','コード例：アイコンボタンの最小サイズを確保するCSS','コード例：上下移動ボタンを併設したリスト項目のHTML',
    'コード例：請求先の同一チェックボックスと郵便番号入力のHTML','コード例：パスワード入力のHTML',
];
describe('keyboard-reachable scroll regions', () => {
    const regions = (selector: string) => { const $ = renderFile('page'); return $(selector).toArray().map(n => [$(n).attr('aria-label'),$(n).attr('role'),$(n).attr('tabindex')]); };
    it('names all 22 table wrappers in source order', () => expect(regions('main .table-scroll')).toEqual(TABLE_REGIONS.map(label => [label,'region','0'])));
    it('names all five code examples in source order', () => expect(regions('main pre')).toEqual(CODE_REGIONS.map(label => [label,'region','0'])));
});
describe('reviewed form examples', () => {
    it('updates exactly the two inventory examples that lacked labels', () => {
        const changed = inventory.groups.codes.items.map(item => item.code).filter(code => applyReviewCodeCorrections(code) !== code);
        expect(changed).toHaveLength(2);
    });
    it('associates a visible label with every input and keeps the checkbox label', () => {
        const $ = renderFile('page'), forms = $('main pre').toArray().map(n => load($(n).text())).filter(code => code('input').length > 0);
        expect(forms).toHaveLength(2);
        const inputs = forms.flatMap(code => code('input').toArray().map(n => { const input = code(n), label = input.closest('label').length ? input.closest('label') : code(`label[for="${input.attr('id')}"]`); return [input.attr('id'),norm(label.text())]; }));
        expect(inputs).toEqual([['same-address','請求先は配送先と同じ'],['postal','郵便番号'],['pw','パスワード']]);
    });
});
describe('reviewed SC 2.5.8 pass criterion', () => {
    it('checks that the 24 by 24 square fits inside the target and keeps the exceptions', () => {
        const $ = renderFile('Section07'), cells = $('tbody tr').filter((_, n) => $(n).find('td').first().text() === '2.5.8').find('td');
        expect(norm(cells.last().text())).toBe(SC_258_REVIEWED);
        expect(SC_258_REVIEWED).toContain('例外・間隔条件');
    });
});
describe('reviewed Markdown emphasis', () => {
    it('renders both emphases as strong without literal markers', () => {
        const $ = load(renderToStaticMarkup(React.createElement(sourceModule(`${base}/page.tsx`).default as React.ComponentType)));
        expect($('main').text()).not.toContain('**');
        const strong = $('main strong').map((_, n) => norm($(n).text())).get();
        expect(strong).toContain('「W3C が作った WCAG 2.2 を、ISO/IEC の国際標準として正式に位置づけたもの」');
        expect(strong).toContain('ISO 規格の本文はライセンスにより転載できません。');
    });
});
describe('original archives', () => {
    // Bind the fixed inventory to the archived original, as parsed and re-serialized HTML.
    it('inventory body is exactly the parsed body of the archived HTML', () => {
        expect(load(readFileSync(`archive/html-archive/iso/${inventory.source}.html`, 'utf8'))('body').html()).toBe(inventory.originalBody);
    });
    for (const ext of ['html','md'] as const) it(`${ext}: moved out of root with identical SHA-256`, () => {
        expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
        expect(createHash('sha256').update(readFileSync(`archive/${ext}-archive/iso/${inventory.source}.${ext}`)).digest('hex')).toBe(inventory.hashes[ext]);
    });
});
