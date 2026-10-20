import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { transformSync } from 'next/dist/build/swc';

const sourceRequire = createRequire(`${process.cwd()}/package.json`);
const retainedCss = readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css', 'utf8');

for (const [chapter, slug] of [
    [7, 'istqb-ctal-tae-chapter7-verifying-the-test-automation-solution'],
    [8, 'istqb-ctal-tae-chapter8-continuous-improvement'],
] as const) {
    const root = `app/${slug}/`;
    const inventory = JSON.parse(readFileSync(`docs/migration-inventory/${slug}.json`, 'utf8')) as { code: { text: string; language: string }[] };
    const exported: { default?: React.ComponentType<{ index: number }> } = {};
    // Next.js/SWC trims numeric newline entities differently from TypeScript/Bun.
    const { code: compiled } = transformSync(readFileSync(`${root}CodeExample.tsx`, 'utf8'), {
        filename: `${root}CodeExample.tsx`,
        jsc: { parser: { syntax: 'typescript', tsx: true }, transform: { react: { runtime: 'classic' } } },
        module: { type: 'commonjs' },
    });
    Function('exports', 'require', compiled)(exported, sourceRequire);
    const CodeExample = exported.default!;
    const ownCss = ['app/globals.css', `${root}highlight.css`, `${root}ctal-tae-ch${chapter}.css`].map(path => readFileSync(path, 'utf8')).join('\n');
    const lineHeight = chapter === 7 ? 22.275 : 22.95;
    const paddingLeft = chapter === 7 ? 18 : 20;
for (const width of [390, 1440]) {
    for (const order of ['isolated', 'before', 'after'] as const) {
        inventory.code.forEach((original, index) => {
            test(`chapter ${chapter} code ${index + 1} ${original.language}: text, lines and scroll (${width}, ${order})`, async ({ page }) => {
                await page.setViewportSize({ width, height: 900 });
                const css = order === 'isolated' ? ownCss : order === 'before' ? retainedCss + ownCss : ownCss + retainedCss;
                const markup = renderToStaticMarkup(React.createElement(CodeExample, { index }));
                await page.setContent(`<style>${css}</style><div class="ctal-tae-ch${chapter}-page"><main class="main">${markup}</main></div>`);
                const pre = page.locator('pre');
                const code = pre.locator('code');
                await expect.soft(code).toHaveCSS('padding', '0px', { timeout: 100 });
                await expect.soft(code).toHaveCSS('overflow-x', 'visible', { timeout: 100 });
                await expect.soft(pre).toHaveCSS('white-space', 'pre', { timeout: 100 });
                await expect(pre).toHaveCSS('overflow-x', 'auto');
                await expect(pre).toHaveCSS('padding', chapter === 7 ? '16px 18px' : '18px 20px');
                await expect(code).toHaveCSS('white-space', 'pre');
                await expect(code).toHaveCSS('font-size', '13.5px');
                await expect(code).toHaveCSS('line-height', `${lineHeight}px`);
                await expect(code).toHaveCSS('color', 'rgb(56, 58, 66)');
                expect(await code.textContent()).toBe(original.text);
                const measured = await code.evaluate(element => {
                    const lines = Array.from(element.children) as HTMLElement[];
                    const box = element.getBoundingClientRect();
                    return {
                        text: lines.map(line => line.textContent),
                        boxes: lines.map(line => { const b = line.getBoundingClientRect(); return { top: b.top, height: b.height }; }),
                        left: box.left,
                        preLeft: element.parentElement!.getBoundingClientRect().left,
                        preBorder: parseFloat(getComputedStyle(element.parentElement!).borderLeftWidth),
                        totalHeight: box.height,
                    };
                });
                const lines = original.text.match(/[^\n]*\n|[^\n]+$/g) ?? [];
                expect(measured.text).toEqual(lines);
                // Each nonempty source line occupies one visual line; blank lines keep their gap.
                measured.boxes.forEach((box, line) => {
                    if (lines[line]!.trim()) {
                        expect(box.height).toBeLessThan(25);
                        expect(Math.abs(box.top - measured.boxes[0]!.top - line * lineHeight)).toBeLessThan(1);
                    }
                });
                expect.soft(measured.left - measured.preLeft - measured.preBorder).toBeCloseTo(paddingLeft, 0);
                const scroll = await pre.evaluate(element => {
                    const code = element.querySelector('code')!;
                    const before = code.getBoundingClientRect().left;
                    element.scrollLeft = element.scrollWidth;
                    const right = element.scrollLeft;
                    const movement = before - code.getBoundingClientRect().left;
                    element.scrollLeft = 0;
                    return { right, required: element.scrollWidth - element.clientWidth, movement, left: element.scrollLeft };
                });
                if (width === 390) expect.soft(scroll.required).toBeGreaterThan(0);
                expect(scroll.left).toBe(0);
                expect(Math.abs(scroll.right - scroll.required)).toBeLessThanOrEqual(1);
                expect(Math.abs(scroll.movement - scroll.right)).toBeLessThanOrEqual(1);
                expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
            });
        });
    }
}
}

// Optional checks against an already running dev server. This config never
// starts a server or a production build; pass CTAL_CODE_ORIGIN explicitly.
test.describe('live Next.js output', () => {
    const origin = process.env.CTAL_CODE_ORIGIN;
    test.skip(!origin, 'Set CTAL_CODE_ORIGIN to an existing development server.');
    for (const [chapter, slug] of [
        [7, 'istqb-ctal-tae-chapter7-verifying-the-test-automation-solution'],
        [8, 'istqb-ctal-tae-chapter8-continuous-improvement'],
    ] as const) {
        for (const width of [390, 1440]) {
            test(`live chapter ${chapter}: every code line (${width})`, async ({ page }) => {
                await page.setViewportSize({ width, height: 900 });
                await page.goto(`${origin}/${slug}`, { waitUntil: 'domcontentloaded' });
                const inventory = JSON.parse(readFileSync(`docs/migration-inventory/${slug}.json`, 'utf8')) as { code: { text: string }[] };
                const codes = page.locator('pre code');
                await expect(codes).toHaveCount(inventory.code.length);
                for (const [index, expected] of inventory.code.entries()) {
                    const code = codes.nth(index);
                    expect(await code.textContent()).toBe(expected.text);
                    await expect(code).toHaveCSS('white-space', 'pre');
                    const lines = expected.text.match(/[^\n]*\n|[^\n]+$/g) ?? [];
                    const actual = await code.evaluate(element => ({
                        text: Array.from(element.children, line => line.textContent),
                        y: Array.from(element.children, line => line.getBoundingClientRect().top),
                        lineHeight: parseFloat(getComputedStyle(element).lineHeight),
                    }));
                    expect(actual.text).toEqual(lines);
                    lines.forEach((line, i) => {
                        if (line.trim()) expect(Math.abs(actual.y[i]! - actual.y[0]! - i * actual.lineHeight)).toBeLessThan(1);
                    });
                }
            });
        }
    }
});
