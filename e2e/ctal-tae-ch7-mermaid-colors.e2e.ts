import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { DIAGRAMS } from '../app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/diagrams';

// Use the shared component's actual initialization: page init directives merge with it.
const shared = readFileSync('components/Mermaid.tsx', 'utf8');
const initialization = shared.match(/mermaid.initialize\((\{[\s\S]*?\n\})\);/)?.[1];
if (!initialization) throw new Error('Shared Mermaid initialization was not found');
const globalConfig = Function(`return (${initialization});`)() as object;
const css = readFileSync('app/globals.css', 'utf8') + '\n' + readFileSync('app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/ctal-tae-ch7.css', 'utf8');

// This suite uses real SVGs and computed colors, without a Next server or build.
for (const width of [390, 1440]) {
    for (const [id, chart] of Object.entries(DIAGRAMS)) {
        test(`${width}px ${id}: source light backgrounds and readable text`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            await page.route('**/*', route => route.abort());
            await page.setContent(`<style>${css}</style><div class="ctal-tae-ch7-page"><main class="main"><div class="mermaid-container"><div class="mermaid-diagram"><div class="mermaid-wrapper"></div></div></div></main></div>`);
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
                const nodes = [...document.querySelectorAll('.node')].map(node => {
                    const shape = node.querySelector('.label-container');
                    const label = node.querySelector('.nodeLabel');
                    if (!shape || !label) throw new Error('Flowchart node lacks shape or label');
                    const background = getComputedStyle(shape).fill;
                    const foreground = getComputedStyle(label).color;
                    return { background, foreground, contrast: contrast(foreground, background) };
                });
                const actors = [...document.querySelectorAll('rect.actor')].map(el => getComputedStyle(el).fill);
                const svgText = [...document.querySelectorAll('svg text')].filter(el => el.textContent?.trim()).map(el => {
                    const foreground = getComputedStyle(el).fill;
                    return { foreground, contrast: contrast(foreground, 'rgb(255, 255, 255)') };
                });
                return { nodes, actors, svgText };
            }, { chart, id, globalConfig });
            if (chart.includes('sequenceDiagram')) {
                expect(colors.actors.length).toBeGreaterThan(0);
                for (const background of colors.actors) expect(background).toBe('rgb(234, 240, 255)');
                expect(colors.svgText.length).toBeGreaterThan(0);
                for (const text of colors.svgText) expect(text.contrast, JSON.stringify(text)).toBeGreaterThanOrEqual(4.5);
            } else {
                expect(colors.nodes.length).toBeGreaterThan(0);
                for (const node of colors.nodes) {
                    expect(node.background, JSON.stringify(node)).toBe('rgb(234, 240, 255)');
                    expect(node.contrast, JSON.stringify(node)).toBeGreaterThanOrEqual(4.5);
                }
            }
        });
    }
}
