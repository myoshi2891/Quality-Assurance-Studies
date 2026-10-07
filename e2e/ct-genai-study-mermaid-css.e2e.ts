import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

const globals = readFileSync('app/globals.css', 'utf8');
const pageCss = readFileSync('app/istqb-ct-genai-study-guide/istqb-ct-genai-study-guide.css', 'utf8');

// Reproduce the real Mermaid wrapper, natural SVG sizing and page layout.
// Widths cover small diagrams and both moderately and very wide diagrams.
for (const viewportWidth of [390, 880, 881, 1440]) {
  for (const diagramWidth of [240, 1800, 3200]) {
    test(`${viewportWidth}px viewport / ${diagramWidth}px diagram: both edges reachable`, async ({ page }) => {
      await page.setViewportSize({ width: viewportWidth, height: 900 });
      await page.route('**/*', route => route.abort());
      await page.setContent(`
        <style>${globals}\n${pageCss}</style>
        <div class="ct-genai-study-page"><div class="layout"><main class="main">
          <div class="mermaid-container"><div class="mermaid-target"><div class="mermaid-wrapper">
            <svg viewBox="0 0 ${diagramWidth} 120" style="width:${diagramWidth}px;max-width:100%;height:auto;display:block;margin:0 auto;margin-bottom:10px">
              <rect width="${diagramWidth}" height="120" fill="#eff6ff" />
            </svg>
          </div></div></div>
        </main></div></div>
      `);
      const geometry = await page.locator('.mermaid-container').evaluate(container => {
        const scroller = container as HTMLElement;
        const wrapper = container.querySelector('.mermaid-wrapper')!;
        const svg = container.querySelector('svg')!;
        scroller.scrollLeft = 0;
        const left = svg.getBoundingClientRect().left - scroller.getBoundingClientRect().left;
        const width = svg.getBoundingClientRect().width;
        const availableWidth = scroller.clientWidth;
        const scrollWidth = scroller.scrollWidth;
        scroller.scrollLeft = scrollWidth;
        const rightAtEnd = svg.getBoundingClientRect().right - scroller.getBoundingClientRect().left;
        scroller.scrollLeft = 0;
        return {
          left, width, availableWidth, scrollWidth, rightAtEnd,
          wrapperOverflow: getComputedStyle(wrapper).overflowX,
          pageOverflow: document.documentElement.scrollWidth - window.innerWidth,
        };
      });
      expect(geometry.width).toBeCloseTo(diagramWidth, 0);
      expect(geometry.left, 'left edge must start at or after scroll origin').toBeGreaterThanOrEqual(-1);
      expect(geometry.scrollWidth + 1).toBeGreaterThanOrEqual(geometry.left + geometry.width);
      expect(geometry.rightAtEnd, 'right edge must be visible at maximum scroll').toBeLessThanOrEqual(geometry.availableWidth + 1);
      expect(geometry.wrapperOverflow, 'only the outer container should scroll').toBe('visible');
      expect(geometry.pageOverflow).toBeLessThanOrEqual(1);
      if (diagramWidth < geometry.availableWidth) {
        expect(geometry.left).toBeCloseTo((geometry.availableWidth - diagramWidth) / 2, 0);
      } else {
        expect(geometry.left).toBeCloseTo(0, 0);
      }
    });
  }
}
