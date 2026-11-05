import { describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/iso-iec-9075-1-2023-guide.json';
import { sourceModule } from '../helpers/source-module';
import { CLAUSE_8, applyReviewCorrections } from './review-corrections';
const base = 'app/iso-iec-9075-1-2023-guide';
const scope = '.sql-framework-page';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
// Intentional accessibility corrections only: safe external links and invalid nested labels.
function correct(html: string) {
    const $ = load(html);
    $('a[href^="http"]').attr('target', '_blank').attr('rel', 'noopener noreferrer');
    $('.ck-text > label').each((_, el) => { $(el).replaceWith($(el).contents()); });
    $('.cnt').text('0 / 9');
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
    if (attrs.class === 'fill') delete attrs.style;
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
        expect($('.ck-row label')).toHaveLength(0);
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
    for (const [id, original] of Object.entries(inventory.diagrams)) it(`${id}: Markdown source, SVG node order and actual Mermaid parsing`, async () => {
        const { DIAGRAMS, MERMAID_CONFIG } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string>; MERMAID_CONFIG: string };
        expect(DIAGRAMS[id]).toBe(`${MERMAID_CONFIG}\n${original.chart.split('\n').map(s => s.trim()).join('\n')}`);
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
    it('mmd-5: names each conformance decision and the outcome of both branches', () => {
        expect(accessibleName('mmd-5')).toBe('標準準拠を主張したい場合の判断フロー。Core SQLの必須機能を満たすか判定する。満たさない場合（いいえ）は準拠を主張できない。満たす場合（はい）は最小適合の要件を確認し、追加機能も主張するか判定する。追加機能も主張する場合（はい）は機能ID単位で対応を宣言し、実装定義の要素は実装側で決めて文書化する。追加機能を主張しない場合（いいえ）はCore SQLの範囲で主張し、実装定義の要素は実装側で決めて文書化する。');
    });
    it('mmd-10: separates the standard-syntax and dialect-syntax paths with their follow-up tests', () => {
        expect(accessibleName('mmd-10')).toBe('DBMSの対応状況に応じた構文選択フロー。対象DBMSの適合性一覧を確認し、使いたい機能の機能IDを特定して、DBMSが対応しているか判定する。対応している場合（はい）は標準構文を採用し、標準構文の移植テストを作成する。対応していない場合（いいえ）は方言構文を分離して隔離し、方言差を吸収するテストを作成する。');
    });
    const PROSE_NAMES: Record<string, string> = {
        'mmd-1': 'ISO/IEC 9075 の各パート11件を示す一覧図。配置は順序や依存関係を表さない。Part 1 Frameworkは本ガイドの対象、Part 2 Foundationは中核言語、Part 16 PGQは2023で新設。ほかにPart 3 CLI、Part 4 PSM、Part 9 MED、Part 10 OLB、Part 11 Schemata、Part 13 JRT、Part 14 XML、Part 15 MDAがある。',
        'mmd-2': 'Part 1の規定引用の影響を示す流れ図。Part 1 Frameworkは他パートを日付なしで引用する。そのため常に最新版の他パートと整合し、結果としてPart 1だけでは仕様が完結しない。',
        'mmd-3': '初学者向けの読む順番を示す流れ図。STEP1：4章 概念、STEP2：5章 パート紹介、STEP3：6章 記法、STEP4：9章 適合性、STEP5：Annex B と Cの順に読む。',
        'mmd-4': 'SQLが実行される流れの概念図。アプリ側の実行主体であるSQL-agentが、SQL-implementation内のSQL-clientへSQL文を渡す。SQL-clientはSQL-serverへ要求する。SQL-serverは表やビューの入れ物であるSQL-schemaへつながり、さらに格納された行であるSQL-dataへつながる。',
        'mmd-6': 'SQL:2023の変更を3系統に分けた分類図。枝分かれは順序ではなく分類を表す。言語の小さな改善にはF292 UNIQUE NULLS、T054 GREATEST/LEAST、T626 ANY_VALUEが属する。JSON関連にはT801 JSON型、T860-T864 簡易アクセサ、T865-T878 項目メソッドが属する。新Part 16 SQL/PGQにはCREATE PROPERTY GRAPH、GRAPH_TABLE と MATCHが属する。',
        'mmd-7': 'SQL/PGQの処理の流れ図。既存の表である頂点表と辺表をもとに、ビューに似た定義であるCREATE PROPERTY GRAPHを作る。次にGRAPH_TABLE と MATCHを使い、グラフパターンで検索する。結果は通常の行と列で返り、JOINや集計と組み合わせ可能。',
        'mmd-8': 'PostgreSQL 19のSQL/PGQの経緯を示す時系列図。2026年6月のPG19 beta1は早期版SQL/PGQを含む。2026-08-25にRobert Haas氏がrevert候補をML上で問う。2026-09-07にSQL/PGQをrevertし、47コミットを巻き戻した。2026-09-24のPG19 beta4で複数機能のrevertを告知した。2026-10-15はRC1予定、2026-11-19はGA予定で、RC2は11-12予定。',
        'mmd-9': 'ISO/IEC 9075-1の版の流れ図。9075-1:2016は撤回済み、Cor 1:2022も撤回済み。9075-1:2023は第6版 2023-06で、2025-06-22に改訂予定ステージへ移った。続いてCor 1:2026が2026-08-03に出た。CD 9075-1は次期版 開発中。',
    };
    // 図の定義から語句を導き、説明文の複製だけの照合にならないようにする（グループ名と辺ラベルも含む）。
    const chartTerms = (id: string) => {
        const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
        const body = (DIAGRAMS[id] ?? '').split('\n').slice(1).join('\n');
        return [...body.matchAll(/\["([^"\n]+)"\]|\|([^|\n]+)\|/g)].flatMap(m => (m[1] ?? m[2] ?? '').split('<br/>'));
    };
    for (const [id, name] of Object.entries(PROSE_NAMES)) {
        it(`${id}: reads as prose that keeps every node, group and edge term`, () => {
            const actual = accessibleName(id) ?? '';
            expect(actual).toBe(name);
            expect(actual).not.toContain('→');
            const terms = chartTerms(id);
            expect(terms.length).toBeGreaterThan(0);
            expect(terms.filter(term => !actual.includes(term))).toEqual([]);
        });
    }
    it('mmd-4: follows the SQL-agent to SQL-data flow of the diagram', () => {
        const actual = accessibleName('mmd-4') ?? '';
        const positions = ['SQL-agent', 'SQL-implementation', 'SQL-client', 'SQL-server', 'SQL-schema', 'SQL-data'].map(term => actual.indexOf(term));
        expect(positions.every(position => position >= 0)).toBe(true);
        expect(positions).toEqual([...positions].sort((a, b) => a - b));
    });
    for (const id of ['mmd-1', 'mmd-6']) {
        it(`${id}: does not imply a sequence between the listed items`, () => {
            expect(accessibleName(id) ?? '').not.toMatch(/→|次に|続いて|順に|進む/);
        });
    }
    it('passes all ten definitions to the shared renderer in source order', () => {
        const charts: string[] = [];
        const Component = sourceModule(`${base}/page.tsx`, { onMermaidChart: chart => charts.push(chart) }).default as React.ComponentType;
        renderToStaticMarkup(<Component />);
        const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
        expect(charts).toEqual(Object.values(DIAGRAMS));
    });
});
describe('reviewed clause 8 row', () => {
    it('applies to the original source exactly once', () => expect(inventory.originalBody.match(new RegExp(CLAUSE_8, 'g'))).toHaveLength(1));
    it('names Status codes and SQLSTATE instead of an unconfirmed placeholder', () => {
        const row = renderFile('Section05')('tbody tr').filter((_, n) => load(n)('td').first().text().startsWith('8'));
        expect(row.find('td').map((_, n) => norm(load(n).text())).get()).toEqual(['8 Status codes', '8.1 SQLSTATE', 'SQL文の実行状態を示す値と、その返し方を定める章']);
        expect(row.text()).not.toContain('未確認');
    });
});
describe('original archives', () => {
    // The archive is formatted differently, so both sides are compared as parsed and re-serialized HTML.
    it('inventory body is exactly the parsed body of the archived HTML', () => {
        expect(load(readFileSync(`archive/html-archive/iso/${inventory.source}.html`, 'utf8'))('body').html()).toBe(inventory.originalBody);
    });
    for (const ext of ['html','md'] as const) it(`${ext}: moved out of root with identical SHA-256`, () => {
        expect(existsSync(`${inventory.source}.${ext}`)).toBe(false);
        expect(createHash('sha256').update(readFileSync(`archive/${ext}-archive/iso/${inventory.source}.${ext}`)).digest('hex')).toBe(inventory.hashes[ext]);
    });
});
