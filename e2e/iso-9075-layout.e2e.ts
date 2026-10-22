import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../docs/migration-inventory/iso-9075-1-guide.json';
import { sourceModule } from '../tests/helpers/source-module';
const base = 'app/iso-9075-1-guide';
const retained = readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css', 'utf8');
const preflight = readFileSync('node_modules/tailwindcss/preflight.css', 'utf8');
const globals = readFileSync('app/globals.css', 'utf8');
const shared = readFileSync('components/Mermaid.tsx', 'utf8');
const initialization = shared.match(/mermaid.initialize\((\{[\s\S]*?\n\})\);/)?.[1];
if (!initialization) throw new Error('Missing shared Mermaid initialization');
const globalConfig = Function(`return (${initialization});`)() as object;
const start = shared.indexOf('function applySvgFixups');
const fixups = transformSync(shared.slice(start, shared.indexOf('/**', start)), { filename: 'fixups.ts', jsc: { parser: { syntax: 'typescript' } } }).code as string;
function markup() { const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType; return renderToStaticMarkup(React.createElement(Page)); }
// レビューで意図的に変更した文言を原本にも反映し、文言差ではなく CSS 差だけを比較する
const reviewedBody = ([
    ['-- 例: ANY_VALUE により、GROUP BY に含めたくない列を安全に取り出す', '-- 例: department_id ごとに department_name が一意な場合に限り、ANY_VALUE で GROUP BY に含めずに取り出せる\n-- （一意でない場合は、グループ内のどの値が返るかは不定）'],
    ['<th>PostgreSQL</th>\n<th>Oracle</th>', '<th>PostgreSQL（2026年9月7日の revert 前の開発版）</th>\n<th>Oracle（報告時点）</th>'],
    ['<td>標準の同義語に対応</td>', '<td>標準の同義語に対応（revert 前の開発版）</td>'],
    ['<td>対応</td>', '<td>対応（revert 前の開発版）</td>'],
    ['<strong>2026年9月7日に REL_19_STABLE から revert</strong>', '<strong>2026年9月7日に master と REL_19_STABLE の両方から revert</strong>'],
    ['<p><strong>補足（規定参照との区別）</strong>: 上表はシリーズ全体のパート一覧であり、Part 1 自身を含みます。これとは別に、ISO公式ページに示される Part 1 の Clause 2（規定参照）が挙げているのは <strong>Part 2、3、4、9、10、11、13、14、15、16</strong> で、Part 1 自身は規定参照には含まれません。</p>', '<p><strong>補足（規定参照との区別）</strong>: 上表はシリーズ全体のパート一覧であり、Part 1 自身を含みます。これとは別に、ISO公式ページに示される Part 1 の Clause 2（規定参照）は、SQLシリーズのパートと、それ以外の規格に分けて次のとおりです。</p>\n<p><strong>SQLシリーズのパート</strong>: Part 2、3、4、9、10、11、13、14、15、16。Part 1 自身は規定参照には含まれません。</p>\n<p><strong>SQLシリーズ以外の規定参照</strong>: ISO/IEC 646、ISO/IEC 10646:2020、ISO/IEC 14651。</p>'],
    ['※ 規格本文は有料で、ISOは本文のAI利用を認めていません。そのため、本節は', '※ ISO/IEC 9075-1:2023 は、ISO・IECの公式ストアで価格 CHF 0 と案内されています。これとは別に、ISOは規格本文のAI利用を認めていないため、本節は'],
    ['調査基準日: 2026年10月8日。規格本文は有料のため、', '調査基準日: 2026年10月8日。ISO/IEC 9075-1:2023 の公式ストア価格は CHF 0 ですが、ISOは規格本文のAI利用を認めていないため、'],
    ['ISO規格本文は有料かつAI利用不可のため、', 'ISO/IEC 9075-1:2023 の公式ストア価格は CHF 0 ですが、ISOは規格本文のAI利用を認めていないため、'],
    ['ISO規格本文は有料のため直接引用していません。', 'ISO/IEC 9075-1:2023 の公式ストア価格は CHF 0 ですが、ISOは規格本文のAI利用を認めていないため直接引用していません。'],
] as const).reduce((body, [from, to]) => {
    if (!body.includes(from)) throw new Error(`Missing reviewed source text: ${from}`);
    return body.replaceAll(from, to);
}, inventory.originalBody);
const selectors = ['.main','.hero','.eyebrow','.hero-title','.hero-meta','.meta-item','.meta-label','.meta-value','h2','h3','main p:not([hidden])','main ul','main ol','main li','strong','.table-scroll','table','th','td','td strong','td a','.callout','.page-footer','.brand','.sidebar ul','.sidebar li','.sidebar a','.toggle','hr','main code','pre'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor'];
for (const width of [390,960,961,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${reviewedBody}`);
            const own = readFileSync(`${base}/iso-9075-1-guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).filter(el => !el.closest('svg')).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.iso-9075-page ' });
            const differences: unknown[] = [];
            for (const selector of selectors) {
                const a = actual[selector]!, e = expected[selector]!;
                if (a.length !== e.length) differences.push([selector, 'count', a.length, e.length]);
                for (let i=0; i<Math.min(a.length,e.length); i++) for (const prop of properties) if (a[i]![prop] !== e[i]![prop]) differences.push([selector,i,prop,a[i]![prop],e[i]![prop]]);
            }
            expect(differences).toEqual([]);
            for (let i = 0; i < inventory.groups.codes.items.length; i++) {
                const block = page.locator('pre').nth(i), source = reference.locator('pre').nth(i);
                expect(await block.textContent()).toBe(inventory.groups.codes.items[i]!.code);
                expect((await block.boundingBox())!.height).toBe((await source.boundingBox())!.height);
                const ends = await block.evaluate(el => { el.scrollLeft = el.scrollWidth; return { actual: el.scrollLeft, required: el.scrollWidth-el.clientWidth }; });
                expect(Math.abs(ends.actual-ends.required)).toBeLessThanOrEqual(1);
            }
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
            await expect(page.locator('.hero')).toHaveCSS('min-height','0px');
            await expect(page.locator('.toggle')).toHaveCSS('display', width <= 960 ? 'block' : 'none');
            for (const pseudo of ['::before','::after']) {
                const props = ['content','backgroundImage','width','height','position','top','right'];
                const snapshot = (el: Element, { pseudo, props }: { pseudo: string; props: string[] }) => Object.fromEntries(props.map(prop => [prop, getComputedStyle(el, pseudo)[prop as keyof CSSStyleDeclaration]]));
                expect(await page.locator('.hero').evaluate(snapshot, { pseudo, props })).toEqual(await reference.locator('.hero').evaluate(snapshot, { pseudo, props }));
            }
            const rowStyles = (row: Element) => ({ background: getComputedStyle(row).backgroundColor, cells: Array.from(row.children, cell => ({ background: getComputedStyle(cell).backgroundColor, color: getComputedStyle(cell).color })) });
            await reference.locator('tbody tr').first().hover(); await page.locator('tbody tr').first().hover();
            expect(await page.locator('tbody tr').first().evaluate(rowStyles)).toEqual(await reference.locator('tbody tr').first().evaluate(rowStyles));
            await reference.close();
        });
    }
}
for (const width of [390,960,961,1440]) {
    for (const [id, diagram] of Object.entries(inventory.diagrams)) {
        test(`${width}px ${id}: source SVG semantics palette and horizontal reachability`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string,string> };
            const css = preflight + globals + readFileSync(`${base}/iso-9075-1-guide.css`, 'utf8');
            await page.setContent(`<style>${css}</style>${markup()}`);
            await page.addScriptTag({ path: 'node_modules/mermaid/dist/mermaid.min.js' });
            const reference = await page.context().newPage(); await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody}`);
            const collect = (outer: Element) => {
                const norm = (s: string | null) => (s ?? '').replace(/\s+/g,' ').trim();
                const nodes = Array.from(outer.querySelectorAll('g.node'), node => ({ id: node.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''), label: norm(node.querySelector('.nodeLabel')?.textContent ?? ''), color: getComputedStyle(node.querySelector('.nodeLabel')!).color, fill: getComputedStyle(node.firstElementChild!).fill }));
                const messages = Array.from(outer.querySelectorAll('.messageText'), el => ({ label: norm(el.textContent), fill: getComputedStyle(el).fill }));
                const actors = Array.from(outer.querySelectorAll('text.actor'), el => ({ label: norm(el.textContent), fill: getComputedStyle(el).fill }));
                const labels = Array.from(outer.querySelectorAll('g.edgeLabels > g.edgeLabel'), el => norm(el.textContent));
                return { nodes, labels, actors, messages };
            };
            const expected = await reference.locator('#'+id).evaluate(collect);
            await page.evaluate(async ({ id, chart, globalConfig, fixups }) => {
                const mermaid = (window as unknown as { mermaid: { initialize: (config: object) => void; render: (id: string, chart: string) => Promise<{ svg: string }> } }).mermaid;
                mermaid.initialize(globalConfig); const { svg } = await mermaid.render(`sql-${id}`, chart);
                const inner = document.getElementById(id)!.querySelector('.mermaid-wrapper')!; inner.innerHTML = svg;
                Function(`${fixups};return applySvgFixups;`)()(inner.querySelector('svg'), chart);
            }, { id, chart: DIAGRAMS[id]!, globalConfig, fixups });
            expect(await page.locator('#'+id).evaluate(collect)).toEqual(expected);
            const edges = await page.locator('#'+id+' path.flowchart-link').evaluateAll(els => els.map(el => ({ id: el.id.replace(/^sql-diagram-\d+-/,''), dotted: el.classList.contains('edge-pattern-dotted') })));
            expect(edges).toEqual(diagram.edges.map(e => ({ id: `L_${e.from}_${e.to}_0`, dotted: e.dotted })));
            const reach = await page.locator('#'+id).evaluate(el => { const svg = el.querySelector('svg')!; const initial = svg.getBoundingClientRect().left; el.scrollLeft = el.scrollWidth; return { initial, left: el.getBoundingClientRect().left, movement: initial-svg.getBoundingClientRect().left, scroll: el.scrollLeft, required: el.scrollWidth-el.clientWidth }; });
            expect(reach.initial).toBeGreaterThanOrEqual(reach.left); expect(Math.abs(reach.scroll-reach.required)).toBeLessThanOrEqual(1); expect(Math.abs(reach.movement-reach.scroll)).toBeLessThanOrEqual(1);
            await expect(page.locator('#'+id+' .mermaid-wrapper')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
            await reference.close();
        });
    }
}
