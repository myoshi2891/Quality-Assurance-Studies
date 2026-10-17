import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { DIAGRAMS } from '../app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/diagrams';

// Use the shared component's actual initialization: page init directives merge with it.
const shared = readFileSync('components/Mermaid.tsx', 'utf8');
const initialization = shared.match(/mermaid.initialize\((\{[\s\S]*?\n\})\);/)?.[1];
if (!initialization) throw new Error('Shared Mermaid initialization was not found');
const globalConfig = Function(`return (${initialization});`)() as object;
const globalCss = readFileSync('app/globals.css', 'utf8');
const pageCss = readFileSync('app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/ctal-tae-ch6.css', 'utf8');
// The page CSS repaints state nodes, so the config-only variant proves the init directive alone is light.
const STYLES = { 'page CSS': `${globalCss}\n${pageCss}`, 'config only': globalCss } as const;

// Nodes without a classDef must use primaryColor; classDef nodes keep their source fill.
const PRIMARY = '#dbeafe';
const toRgb = (hex: string) => {
    const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
    return `rgb(${r}, ${g}, ${b})`;
};
const classFills = (chart: string) =>
    Object.fromEntries([...chart.matchAll(/^classDef (\S+) fill:(#[0-9a-f]{6})/gm)].map(([, name = '', fill = '']) => [name, toRgb(fill)]));

// This suite uses real SVGs and computed colors, without a Next server or build.
for (const [variant, css] of Object.entries(STYLES)) for (const width of [390, 1440]) {
    for (const [id, chart] of Object.entries(DIAGRAMS)) {
        test(`${variant} ${width}px ${id}: source light backgrounds and readable text`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            await page.route('**/*', route => route.abort());
            await page.setContent(`<style>${css}</style><div class="ctal-tae-ch6-page"><main class="main"><div class="mermaid-container"><div class="mermaid-diagram"><div class="mermaid-wrapper"></div></div></div></main></div>`);
            await page.addScriptTag({ path: 'node_modules/mermaid/dist/mermaid.min.js' });
            const colors = await page.evaluate(async ({ chart, id, globalConfig }) => {
                const mermaid = (window as unknown as { mermaid: { initialize: (config: object) => void; render: (id: string, chart: string) => Promise<{ svg: string }> } }).mermaid;
                mermaid.initialize(globalConfig);
                const { svg } = await mermaid.render(`test-${id}`, chart);
                document.querySelector('.mermaid-wrapper')!.innerHTML = svg;
                const rgb = (color: string) => {
                    const values = color.match(/[\d.]+/g)?.slice(0, 3).map(Number);
                    if (!values || values.length !== 3) throw new Error(`Unsupported color ${color}`);
                    return values.map(value => { const n = value / 255; return n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4; });
                };
                const luminance = (color: string) => { const [r = 0, g = 0, b = 0] = rgb(color); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
                const contrast = (fg: string, bg: string) => { const a = luminance(fg), b = luminance(bg); return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05); };
                // Start/end pseudo-states have no text label, so only labelled nodes are checked.
                const nodes = [...document.querySelectorAll('.node')].filter(node => node.querySelector('.nodeLabel')?.textContent?.trim()).map(node => {
                    const shape = node.querySelector('.label-container, rect, path, polygon');
                    const label = node.querySelector('.nodeLabel');
                    if (!shape || !label) throw new Error('Node lacks shape or label');
                    const background = getComputedStyle(shape).fill;
                    const foreground = getComputedStyle(label).color;
                    return { classes: [...node.classList], text: label.textContent, background, foreground, contrast: contrast(foreground, background) };
                });
                const actors = [...document.querySelectorAll('rect.actor')].map(el => getComputedStyle(el).fill);
                const svgText = [...document.querySelectorAll('svg text, svg text tspan')].filter(el => el.textContent?.trim() && el.children.length === 0).map(el => {
                    const foreground = getComputedStyle(el).fill;
                    const background = el.closest('text.actor') ? actors[0] ?? 'rgb(255, 255, 255)' : 'rgb(255, 255, 255)';
                    return { foreground, background, contrast: contrast(foreground, background), text: el.textContent };
                });
                return { nodes, actors, svgText };
            }, { chart, id, globalConfig });
            if (chart.includes('sequenceDiagram')) {
                expect(colors.actors.length).toBeGreaterThan(0);
                for (const background of colors.actors) expect(background).toBe(toRgb(PRIMARY));
                expect(colors.svgText.length).toBeGreaterThan(0);
                for (const text of colors.svgText) expect(text.contrast, JSON.stringify(text)).toBeGreaterThanOrEqual(4.5);
            } else {
                const fills = classFills(chart);
                expect(colors.nodes.length).toBeGreaterThan(0);
                for (const node of colors.nodes) {
                    const classDef = node.classes.find(name => name in fills);
                    const expected = classDef ? fills[classDef] : toRgb(PRIMARY);
                    expect(node.background, JSON.stringify(node)).toBe(expected);
                    expect(node.contrast, JSON.stringify(node)).toBeGreaterThanOrEqual(4.5);
                }
            }
        });
    }
}
