import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../docs/migration-inventory/iso-27031-2025-guide.json';
import { DIAGRAM_CORRECTIONS, applyReviewCorrections, reviewedDiagrams } from '../tests/iso-27031-2025-guide/review-corrections';
import { sourceModule } from '../tests/helpers/source-module';

const base = 'app/iso-27031-2025-guide';
const retained = readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css', 'utf8');
const preflight = readFileSync('node_modules/tailwindcss/preflight.css', 'utf8');
const globals = readFileSync('app/globals.css', 'utf8');
const shared = readFileSync('components/Mermaid.tsx', 'utf8');
const initialization = shared.match(/mermaid.initialize\((\{[\s\S]*?\n\})\);/)?.[1];
if (!initialization) throw new Error('Missing shared Mermaid initialization');
const globalConfig = Function(`return (${initialization});`)() as object;
const start = shared.indexOf('function applySvgFixups');
const fixups = transformSync(shared.slice(start, shared.indexOf('/**', start)), {
    filename: 'fixups.ts',
    jsc: { parser: { syntax: 'typescript' } },
}).code as string;

function markup() {
    const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType;
    return renderToStaticMarkup(React.createElement(Page));
}

const selectors = [
    '.main',
    '.hero',
    '.eyebrow',
    '.hero-title',
    '.hero-meta',
    '.hero-meta p',
    '.hero-meta strong',
    'h2',
    'h3',
    'h4',
    'main p',
    'main ul',
    'main ol',
    'main li',
    'strong',
    'code',
    'blockquote',
    'blockquote p',
    'hr',
    '.table-scroll',
    'table',
    'thead',
    'th',
    'td',
    'td strong',
    'td code',
    '.checklist-card',
    '.checklist-progress',
    '.cp-label',
    '.cp-bar',
    '.cp-fill',
    '.cp-count',
    '.check-group',
    '.cg-title',
    '.cg-icon',
    '.cg-phase',
    '.cg-name',
    'ul.check-grid',
    '.check-item',
    '.check-item label',
    '.ci-box',
    '.ci-num',
    '.ci-text',
    '.page-footer',
    '.side-title',
    '.sidebar nav a',
    '.sidebar nav a.nav-h3',
    '.nav-toggle',
];

const properties = [
    'color',
    'backgroundColor',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'fontStyle',
    'textTransform',
    'verticalAlign',
    'lineHeight',
    'letterSpacing',
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'borderTopWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopColor',
    'borderBottomColor',
    'borderRadius',
    'display',
    'listStyleType',
    'textAlign',
    'whiteSpace',
    'width',
    'minWidth',
    'maxWidth',
    'boxShadow',
    'backgroundImage',
    'position',
    'overflowX',
    'webkitTextFillColor',
    'backgroundClip',
    'animationName',
    'animationDuration',
    'opacity',
    'transform',
];

for (const width of [390, 900, 901, 1440]) {
    for (const order of ['before', 'after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage();
            await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(
                `<style>${inventory.originalCss}</style>${applyReviewCorrections(inventory.originalBody).replace(/<svg[\s\S]*?<\/svg>/g, '')}`,
            );
            // The new live status has no visual footprint in the archived design.
            await reference.locator('.checklist-status').evaluate(status => status.remove());
            await reference.locator('.sidebar a').first().evaluate(link => link.classList.add('active'));

            const own = readFileSync(`${base}/guide.css`, 'utf8');
            const interference = 'th, td { color: magenta !important; font-size: 2px !important; }';
            const css = preflight + globals + (order === 'before' ? retained + interference + own : own + retained + interference);
            await page.setContent(`<style>${css}</style>${markup()}`);

            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) =>
                Object.fromEntries(
                    selectors.map(selector => [
                        selector,
                        Array.from(document.querySelectorAll(root + selector)).map(el => {
                            const style = getComputedStyle(el);
                            return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]]));
                        }),
                    ]),
                );

            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            // The sticky row has an opaque surface so checklist text cannot show through it.
            expected['.checklist-progress']![0]!.backgroundColor = 'rgb(18, 35, 59)';
            const actual = await page.evaluate(collect, { selectors, properties, root: '.iso27031-page ' });
            for (const selector of selectors) expect.soft(actual[selector], selector).toEqual(expected[selector]);

            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
            await expect(page.locator('.hero')).toHaveCSS('min-height', '0px');
            await expect(page.getByRole('status')).toHaveText('確認済み 0 / 9 項目。');
            await expect(page.locator('.nav-toggle')).toHaveCSS('display', width <= 900 ? 'block' : 'none');

            for (const pseudo of ['::before', '::after']) {
                const props = ['content', 'backgroundImage', 'width', 'height', 'position', 'top', 'right'];
                const snapshot = (el: Element, { pseudo, props }: { pseudo: string; props: string[] }) =>
                    Object.fromEntries(props.map(prop => [prop, getComputedStyle(el, pseudo)[prop as keyof CSSStyleDeclaration]]));
                expect(await page.locator('.hero').evaluate(snapshot, { pseudo, props })).toEqual(
                    await reference.locator('.hero').evaluate(snapshot, { pseudo, props }),
                );
            }

            const rowStyles = (row: Element) => ({
                background: getComputedStyle(row).backgroundColor,
                cells: Array.from(row.children, cell => ({
                    background: getComputedStyle(cell).backgroundColor,
                    color: getComputedStyle(cell).color,
                })),
            });
            await reference.locator('tbody tr').first().hover();
            await page.locator('tbody tr').first().hover();
            expect(await page.locator('tbody tr').first().evaluate(rowStyles)).toEqual(
                await reference.locator('tbody tr').first().evaluate(rowStyles),
            );
            await reference.close();
        });
    }
}

for (const width of [390, 1440]) {
    for (const [id, diagram] of reviewedDiagrams(inventory.diagrams).map(d => [d.id, d] as const)) {
        test(`${width}px ${id}: exact SVG node and edge semantics, palette and scroll reachability`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            await page.setContent(`<style>${globals}${readFileSync(`${base}/guide.css`, 'utf8')}</style>${markup()}`);
            await page.addScriptTag({ path: 'node_modules/mermaid/dist/mermaid.min.js' });
            const { DIAGRAMS } = sourceModule(`${base}/diagrams.ts`) as { DIAGRAMS: Record<string, string> };

            const reference = await page.context().newPage();
            await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${applyReviewCorrections(inventory.originalBody)}`);

            await page.evaluate(
                async ({ id, chart, globalConfig, fixups }) => {
                    const mermaid = (
                        window as unknown as {
                            mermaid: { initialize: (c: object) => void; render: (id: string, chart: string) => Promise<{ svg: string }> };
                        }
                    ).mermaid;
                    mermaid.initialize(globalConfig);
                    const { svg } = await mermaid.render('irbc-new-' + id, chart);
                    const inner = document.getElementById(id)!.querySelector('.mermaid-wrapper')!;
                    inner.innerHTML = svg;
                    Function(`${fixups};return applySvgFixups;`)()(inner.querySelector('svg'), chart);
                },
                { id, chart: DIAGRAMS[id]!, globalConfig, fixups },
            );

            if (diagram.direction === 'sequence') {
                const collectSeq = (outer: Element) => {
                    const norm = (s: string | null) => (s ?? '').replace(/\s+/g, ' ').trim();
                    const actors = Array.from(outer.querySelectorAll('rect.actor'), n => ({
                        name: n.getAttribute('name'),
                        label: norm(n.parentElement!.querySelector('text.actor')!.textContent),
                        fill: getComputedStyle(n).fill,
                        stroke: getComputedStyle(n).stroke,
                    }));
                    const lifelines = Array.from(outer.querySelectorAll('.actor-line'), n => ({
                        name: n.getAttribute('name'),
                        x: Number(n.getAttribute('x1')),
                    }));
                    // Resolve each endpoint to its nearest lifeline, including self-message paths.
                    const participantAt = (x: number) => lifelines.reduce((nearest, actor) =>
                        Math.abs(actor.x - x) < Math.abs(nearest.x - x) ? actor : nearest,
                    ).name;
                    const messageLines = Array.from(outer.querySelectorAll<SVGGeometryElement>('.messageLine0, .messageLine1'));
                    const messages = Array.from(outer.querySelectorAll('.messageText'), (n, i) => {
                        const line = messageLines[i]!;
                        return {
                            text: norm(n.textContent),
                            fill: getComputedStyle(n).fill,
                            sender: participantAt(line.getPointAtLength(0).x),
                            receiver: participantAt(line.getPointAtLength(line.getTotalLength()).x),
                        };
                    });
                    const lines = messageLines.map(n => ({
                        stroke: getComputedStyle(n).stroke,
                    }));
                    return { actors, messages, lines };
                };
                expect(await page.locator('#' + id).evaluate(collectSeq)).toEqual(await reference.locator('#' + id).evaluate(collectSeq));
            } else {
                const collect = (outer: Element) => {
                    const norm = (s: string | null) => (s ?? '').replace(/\s+/g, ' ').trim();
                    const nodes = Array.from(outer.querySelectorAll('g.node'), n => ({
                        id: n.id.replace(/^.*flowchart-/, '').replace(/-\d+$/, ''),
                        label: norm(n.querySelector('.nodeLabel')?.textContent ?? ''),
                        color: getComputedStyle(n.querySelector('.nodeLabel')!).color,
                        fill: getComputedStyle(n.firstElementChild!).fill,
                        shape: n.firstElementChild!.tagName,
                        stroke: getComputedStyle(n.firstElementChild!).stroke,
                        strokeWidth: getComputedStyle(n.firstElementChild!).strokeWidth,
                    }));
                    const labels = Array.from(outer.querySelectorAll('g.edgeLabels > g.edgeLabel'), n => norm(n.textContent));
                    const edges = Array.from(outer.querySelectorAll('g.edgePaths path[data-id]'), n => ({
                        id: n.getAttribute('data-id') || n.id,
                        dotted: n.classList.contains('edge-pattern-dotted'),
                        stroke: getComputedStyle(n).stroke,
                        strokeWidth: getComputedStyle(n).strokeWidth,
                        arrowEnd: /pointEnd/.test(n.getAttribute('marker-end') ?? ''),
                        arrowStart: /pointStart/.test(n.getAttribute('marker-start') ?? ''),
                    }));
                    const clusters = Array.from(outer.querySelectorAll('g.cluster rect'), n => ({
                        fill: getComputedStyle(n).fill,
                        stroke: getComputedStyle(n).stroke,
                        strokeWidth: getComputedStyle(n).strokeWidth,
                        arrowEnd: /pointEnd/.test(n.getAttribute('marker-end') ?? ''),
                        arrowStart: /pointStart/.test(n.getAttribute('marker-start') ?? ''),
                    }));
                    return { nodes, labels, edges, clusters };
                };

                // mmd-10..mmd-13 had #mm1 embedded in original HTML due to $10..$13 expansion bug; build expected from diagram + #mmd-1 palette
                const hasOriginalFlowSvg = !['mmd-10', 'mmd-11', 'mmd-12', 'mmd-13'].includes(id);
                if (hasOriginalFlowSvg) {
                    const expected = await reference.locator('#' + id).evaluate(collect);
                    const correction = DIAGRAM_CORRECTIONS[id];
                    if (correction) {
                        for (const [nodeId, label] of Object.entries(correction.nodes ?? {})) {
                            const node = expected.nodes.find(n => n.id === nodeId);
                            expect(node, `${id}: missing node ${nodeId}`).toBeDefined();
                            node!.label = label.replace(/<br\/>/g, '');
                        }
                    }
                    expect(await page.locator('#' + id).evaluate(collect)).toEqual(expected);

                    const centers = (outer: Element) =>
                        Object.fromEntries(
                            Array.from(outer.querySelectorAll('g.node'), n => {
                                const r = n.getBoundingClientRect();
                                return [n.id.replace(/^.*flowchart-/, '').replace(/-\d+$/, ''), { x: r.x + r.width / 2, y: r.y + r.height / 2 }];
                            }),
                        );
                    const sourceCenters = await reference.locator('#' + id).evaluate(centers);
                    const actualCenters = await page.locator('#' + id).evaluate(centers);
                    for (const edge of diagram.edges) {
                        const from = sourceCenters[edge.from];
                        const to = sourceCenters[edge.to];
                        if (!from || !to) continue;
                        const axis = Math.abs(to.x - from.x) > Math.abs(to.y - from.y) ? 'x' : 'y';
                        expect(
                            Math.sign(actualCenters[edge.to]![axis] - actualCenters[edge.from]![axis]),
                            `${id} ${edge.from} -> ${edge.to} direction ${axis}`,
                        ).toBe(Math.sign(to[axis] - from[axis]));
                    }
                } else {
                    const palette = await reference.locator('#mmd-1').evaluate(collect);
                    const baseNode = palette.nodes[0]!;
                    const baseEdge = palette.edges[0]!;
                    const actual = await page.locator('#' + id).evaluate(collect);
                    expect(actual.nodes).toEqual(
                        diagram.nodes.map(n => ({
                            id: n.id,
                            label: n.label.replace(/<br\/>/g, ''),
                            color: baseNode.color,
                            fill: baseNode.fill,
                            shape: n.shape,
                            stroke: baseNode.stroke,
                            strokeWidth: baseNode.strokeWidth,
                        })),
                    );
                    expect(actual.labels).toEqual(diagram.edges.map(e => e.label));
                    expect(actual.edges).toEqual(
                        diagram.edges.map(e => ({
                            id: `L_${e.from}_${e.to}_0`,
                            dotted: e.dotted,
                            stroke: baseEdge.stroke,
                            strokeWidth: baseEdge.strokeWidth,
                            arrowEnd: e.arrowEnd,
                            arrowStart: e.arrowStart,
                        })),
                    );
                }

                const geometry = await page.locator('#' + id + ' g.node').evaluateAll(nodes =>
                    nodes.map(node => {
                        const bounds = node.getBoundingClientRect();
                        const attribute = (node as SVGGraphicsElement).transform.baseVal.consolidate()?.matrix;
                        const parentMatrix = (node.parentElement as unknown as SVGGraphicsElement).getCTM()!;
                        const computed = parentMatrix.inverse().multiply((node as SVGGraphicsElement).getCTM()!);
                        return {
                            width: bounds.width,
                            height: bounds.height,
                            expected: attribute ? [attribute.a, attribute.b, attribute.c, attribute.d, attribute.e, attribute.f] : null,
                            actual: [computed.a, computed.b, computed.c, computed.d, computed.e, computed.f],
                        };
                    }),
                );
                expect(geometry).toHaveLength(diagram.nodes.length);
                for (const node of geometry) {
                    expect(node.width).toBeGreaterThan(0);
                    expect(node.height).toBeGreaterThan(0);
                    expect(node.expected).not.toBeNull();
                    node.expected!.forEach((value, index) => expect(node.actual[index]).toBeCloseTo(value, 3));
                }
            }

            const reach = await page.locator('#' + id).evaluate(el => {
                const svg = el.querySelector('svg')!;
                const initial = svg.getBoundingClientRect().left;
                el.scrollLeft = el.scrollWidth;
                return {
                    initial,
                    left: el.getBoundingClientRect().left,
                    movement: initial - svg.getBoundingClientRect().left,
                    scroll: el.scrollLeft,
                    required: el.scrollWidth - el.clientWidth,
                };
            });
            expect(reach.initial).toBeGreaterThanOrEqual(reach.left);
            expect(Math.abs(reach.scroll - reach.required)).toBeLessThanOrEqual(1);
            expect(Math.abs(reach.movement - reach.scroll)).toBeLessThanOrEqual(1);
            await expect(page.locator('#' + id + ' .mermaid-wrapper')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
            await reference.close();
        });
    }
}

for (const width of [390, 900, 901, 1440]) {
    test(`${width}px: heading anchors and sticky checklist clear fixed chrome, and main clears sidebar`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.setContent(`<style>${preflight}${globals}${readFileSync(`${base}/guide.css`, 'utf8')}</style>${markup()}`);
        const banner = width <= 900 ? 76 : 38;
        const offset = width <= 900 ? 124 : 80;
        await page.evaluate(height => document.documentElement.style.setProperty('--disclaimer-height', height + 'px'), banner);
        expect(await page.locator('main h2[id], main h3[id], main h4[id]').evaluateAll(els => els.map(el => getComputedStyle(el).scrollMarginTop))).toEqual(
            Array(36).fill(`${offset + banner}px`),
        );
        await expect(page.locator('.sidebar')).toHaveCSS('top', `${60 + banner}px`);
        await expect(page.locator('.nav-toggle')).toHaveCSS('top', `${72 + banner}px`);
        await expect(page.locator('main.main')).toHaveCSS('margin-left', width <= 900 ? '0px' : '280px');

        const progress = page.locator('.checklist-progress');
        const stickyTop = (width <= 900 ? 124 : 60) + banner;
        await expect(page.locator('.iso27031-page')).toHaveCSS('overflow-x', 'clip');
        await expect(page.locator('.iso27031-page')).toHaveCSS('overflow-y', 'visible');
        await expect(progress).toHaveCSS('top', `${stickyTop}px`);
        await page.evaluate(top => {
            const card = document.querySelector('.checklist-card')!.getBoundingClientRect();
            document.documentElement.style.scrollBehavior = 'auto';
            window.scrollTo(0, window.scrollY + card.top - top + 100);
        }, stickyTop);
        for (const distance of [0, 150]) {
            await page.evaluate(distance => window.scrollBy(0, distance), distance);
            const bounds = await progress.boundingBox();
            expect(bounds!.y).toBeCloseTo(stickyTop, 0);
            await expect(progress).toBeInViewport();
            expect(await progress.evaluate(el => {
                const r = el.getBoundingClientRect();
                return el.contains(document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2));
            })).toBe(true);
        }
        // A resized disclaimer must move the sticky row without a reload.
        await page.evaluate(height => document.documentElement.style.setProperty('--disclaimer-height', `${height}px`), banner + 24);
        expect((await progress.boundingBox())!.y).toBeCloseTo(stickyTop + 24, 0);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    });
}

