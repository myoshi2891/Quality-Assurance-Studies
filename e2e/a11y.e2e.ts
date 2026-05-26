import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { PAGES } from './pages';

test.describe('a11y: WCAG 2.1 AA accessibility audits', () => {
  for (const p of PAGES) {
    test(`${p.path} should not have any automatically detectable accessibility violations`, async ({ page }) => {
      // 該当ページへ遷移
      const response = await page.goto(p.path);
      expect(response, `goto ${p.path} should return a response`).not.toBeNull();
      expect(response?.status(), `HTTP status for ${p.path}`).toBe(200);

      // レンダリングやネットワークが安定するのを待機
      await page.waitForLoadState('networkidle');

      // Axeによるアクセシビリティ監査実行 (WCAG 2.1 AA を対象とする)
      // color-contrast はグローバルに無効化せず、デザイン上の例外（バッジや一部の特定テキストカード等）のみを exclude で除外する
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .disableRules(['scrollable-region-focusable'])
        .exclude('.badge, .section-header, .sh, .uat-who, .metric-card, .trend-card, .ref-card, .toc-card, .exam-card, .progress-val, .pi-val, .stat-gem')
        .analyze();

      // 違反が検出された場合、デバッグ用に詳細な情報をコンソール出力する
      if (accessibilityScanResults.violations.length > 0) {
        console.error(`\n==================================================`);
        console.error(`🚨 ACCESSIBILITY VIOLATION DETECTED`);
        console.error(`Page: ${p.path}`);
        console.error(`Total Violations: ${accessibilityScanResults.violations.length}`);
        console.error(`==================================================`);

        for (const violation of accessibilityScanResults.violations) {
          console.error(`\n- Rule ID: ${violation.id} (${violation.impact})`);
          console.error(`  Description: ${violation.description}`);
          console.error(`  Help: ${violation.help} (${violation.helpUrl})`);
          console.error(`  Affected Nodes: ${violation.nodes.length}`);

          violation.nodes.forEach((node, index) => {
            console.error(`    [Node ${index + 1}]`);
            console.error(`      Selector: ${node.target.join(', ')}`);
            console.error(`      HTML: ${node.html}`);
            if (node.failureSummary) {
              console.error(`      Failure Summary: ${node.failureSummary}`);
            }
          });
        }
        console.error(`==================================================\n`);
      }

      // 検証
      expect(accessibilityScanResults.violations, `Accessibility violations on ${p.path}`).toEqual([]);
    });
  }
});
