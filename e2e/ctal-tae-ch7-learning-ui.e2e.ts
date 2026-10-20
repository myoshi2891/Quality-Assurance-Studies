import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { sourceModule } from '../tests/helpers/source-module';

const root = 'app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/';
// Compile with the same SWC JSX semantics as Next.js, including whitespace handling.
function component(name: string): React.ComponentType<{ index?: number }> {
    return sourceModule(`${root}${name}.tsx`).default as React.ComponentType<{ index?: number }>;
}
const CodeExample = component('CodeExample');
const ChecklistCard = component('ChecklistCard');
const ownCss = ['app/globals.css', `${root}highlight.css`, `${root}ctal-tae-ch7.css`].map(path => readFileSync(path, 'utf8')).join('\n');
const retainedCss = readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css', 'utf8');

for (const width of [390, 1440]) {
    for (const order of ['before', 'after'] as const) {
        test(`all seven code examples preserve lines after navigation (${width}, CSS ${order})`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const css = order === 'before' ? retainedCss + ownCss : ownCss + retainedCss;
            const markup = Array.from({ length: 7 }, (_, index) => renderToStaticMarkup(React.createElement(CodeExample, { index }))).join('');
            await page.setContent(`<style>${css}</style><div class="ctal-tae-ch7-page"><main class="main">${markup}</main></div>`);
            for (const pre of await page.locator('pre.code-block').all()) {
                await expect(pre).toHaveCSS('white-space', 'pre');
                const code = pre.locator('code');
                await expect(code).toHaveCSS('white-space', 'pre');
                await expect(code).toHaveCSS('font-size', '13.5px');
                const measured = await code.evaluate(element => {
                    const lines = Array.from(element.children) as HTMLElement[];
                    return {
                        text: element.textContent,
                        lineText: lines.map(line => line.textContent).join(''),
                        unwrapped: lines.every(line => getComputedStyle(line).whiteSpace === 'pre' && line.getBoundingClientRect().height < 25),
                    };
                });
                expect(measured.text).toBe(measured.lineText);
                expect(measured.unwrapped).toBe(true);
                const scroll = await pre.evaluate(element => {
                    element.scrollLeft = element.scrollWidth;
                    const right = element.scrollLeft;
                    element.scrollLeft = 0;
                    return { right, required: element.scrollWidth - element.clientWidth, left: element.scrollLeft };
                });
                expect(scroll.left).toBe(0);
                expect(Math.abs(scroll.right - scroll.required)).toBeLessThanOrEqual(1);
            }
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        });
    }
    test(`checklist has full-width targets, clear focus and readable completed rows (${width})`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.setContent(`<style>${ownCss}</style><div class="ctal-tae-ch7-page"><main class="main">${renderToStaticMarkup(React.createElement(ChecklistCard))}</main></div>`);
        const labels = page.locator('.task-list label');
        await expect(labels).toHaveCount(6);
        for (const label of await labels.all()) {
            await expect(label).toHaveCSS('display', 'grid');
            const size = await label.evaluate(element => ({ height: element.clientHeight, width: element.clientWidth, parent: element.parentElement!.clientWidth }));
            expect(size.height).toBeGreaterThanOrEqual(56);
            expect(Math.abs(size.width - size.parent)).toBeLessThanOrEqual(2);
        }
        const bar = await page.locator('.cp-bar').boundingBox();
        const count = await page.locator('.cp-count').boundingBox();
        expect(bar!.y).toBeGreaterThan(count!.y + count!.height);
        await page.getByRole('checkbox').first().focus();
        await expect(labels.first()).toHaveCSS('outline-style', 'solid');
        await page.getByRole('checkbox').first().check();
        await expect(page.locator('.task-list li').first()).toHaveCSS('text-decoration-line', 'none');
        await expect(labels.first()).toHaveCSS('background-color', 'rgb(240, 253, 244)');
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    });
}
