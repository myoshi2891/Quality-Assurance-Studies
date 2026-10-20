import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import ts from 'typescript';
import inventory from '../docs/migration-inventory/istqb-ctal-tae-chapter8-continuous-improvement.json';

const root = 'app/istqb-ctal-tae-chapter8-continuous-improvement/';
const sourceRequire = createRequire(`${process.cwd()}/package.json`);
const exported: { default?: React.ComponentType<{ index: number }> } = {};
// Use the production component without a Next.js server or a production build.
Function('exports', 'require', ts.transpile(readFileSync(`${root}CodeExample.tsx`, 'utf8'), {
    module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React, esModuleInterop: true,
}))(exported, sourceRequire);
const CodeExample = exported.default!;
const ownCss = ['app/globals.css', `${root}highlight.css`, `${root}ctal-tae-ch8.css`].map(path => readFileSync(path, 'utf8')).join('\n');
const retainedCss = readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css', 'utf8');

for (const width of [390, 1440]) {
    for (const order of ['isolated', 'before', 'after'] as const) {
        inventory.code.forEach((original, index) => {
            test(`code ${index + 1} ${original.language}: text, lines and scroll (${width}, ${order})`, async ({ page }) => {
                await page.setViewportSize({ width, height: 900 });
                const css = order === 'isolated' ? ownCss : order === 'before' ? retainedCss + ownCss : ownCss + retainedCss;
                const markup = renderToStaticMarkup(React.createElement(CodeExample, { index }));
                await page.setContent(`<style>${css}</style><div class="ctal-tae-ch8-page"><main class="main">${markup}</main></div>`);
                const frame = page.locator('.code-block');
                const pre = frame.locator('pre');
                const code = pre.locator('code');
                await expect.soft(code).toHaveCSS('padding', '0px', { timeout: 100 });
                await expect.soft(code).toHaveCSS('overflow-x', 'visible', { timeout: 100 });
                await expect.soft(pre).toHaveCSS('white-space', 'pre', { timeout: 100 });
                await expect(pre).toHaveCSS('overflow-x', 'auto');
                await expect(pre).toHaveCSS('padding', '18px 20px');
                await expect(code).toHaveCSS('white-space', 'pre');
                await expect(code).toHaveCSS('font-size', '13.5px');
                await expect(code).toHaveCSS('line-height', '22.95px');
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
                        totalHeight: box.height,
                    };
                });
                const lines = original.text.match(/[^\n]*\n|[^\n]+$/g) ?? [];
                expect(measured.text).toEqual(lines);
                // Each nonempty source line occupies one visual line; blank lines keep their gap.
                measured.boxes.forEach((box, line) => {
                    if (lines[line]!.trim()) {
                        expect(box.height).toBeLessThan(25);
                        expect(Math.abs(box.top - measured.boxes[0]!.top - line * 22.95)).toBeLessThan(1);
                    }
                });
                expect.soft(measured.left - measured.preLeft).toBeCloseTo(20, 0);
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
