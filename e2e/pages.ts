/**
 * スモーク E2E 対象ページの単一情報源。
 * h1 は本文中に <br />, <span>, <em> 等の inline 要素を含むため、
 * Playwright の accessible name 計算結果に対する部分一致 (RegExp) で照合する。
 *
 * ページを追加・削除した際は本配列と smoke.e2e.ts の sanity test
 * (PAGES.length === EXPECTED_PAGE_COUNT) を必ず同時に更新すること。
 */

export interface PageMeta {
  readonly path: string;
  readonly h1: RegExp;
}

export const PAGES: readonly PageMeta[] = [
  { path: '/', h1: /羅針盤/ },
  { path: '/acceptance-testing-guide', h1: /Acceptance.*Testing/s },
  { path: '/ai-test-guide', h1: /AIシステム.*テスト/s },
  { path: '/bdd-testing-guide', h1: /BDD（ビヘイビア駆動開発）/ },
  { path: '/e2e-testing-guide', h1: /End-to-End.*Testing/s },
  { path: '/integration-functional-testing-guide', h1: /INTEGRATION.*FUNCTIONAL.*TESTING/s },
  { path: '/integration-system-testing-guide', h1: /Integration.*System Testing/s },
  { path: '/istqb-ct-act-complete-guide', h1: /CT-AcT.*Acceptance Testing/s },
  { path: '/istqb-ct-aut-complete-guide', h1: /CT-AuT.*自動車ソフトウェアテスター/s },
  { path: '/istqb-ct-ai-complete-guide', h1: /CT-AI 完全ガイド/ },
  { path: '/istqb-ct-genai-complete-guide', h1: /Testing with Generative AI/ },
  { path: '/istqb-ct-mat-complete-guide', h1: /Mobile Application.*Testing/s },
  { path: '/istqb-ct-mbt-complete-guide', h1: /CT-MBT.*モデルベーステスト/s },
  { path: '/istqb-ct-pt-complete-guide', h1: /Performance.*Testing/s },
  { path: '/istqb-ct-sec-complete-guide', h1: /CT-SEC.*Security Tester/s },
  { path: '/istqb-ct-ste-complete-guide', h1: /CT-STE Security Test Engineer/ },
  { path: '/istqb-ct-tas-complete-guide', h1: /Test Automation.*Strategy/s },
  { path: '/istqb-ct-ut-complete-guide', h1: /Usability Testing/ },
  { path: '/istqb-ctal-atlas-complete-guide', h1: /CT-ATLaS/ },
  { path: '/istqb-ctal-att-complete-guide', h1: /CTAL-ATT.*Agile Technical Tester/s },
  { path: '/istqb-ctal-ta-complete-guide', h1: /CTAL-TA.*完全学習ガイド/s },
  { path: '/istqb-ctal-tae-complete-guide', h1: /テスト自動化.*完全ガイド/s },
  { path: '/istqb-ctal-tm-complete-guide', h1: /CTAL-TM v3\.0/ },
  { path: '/istqb-ctal-tta-complete-guide', h1: /Technical Test Analyst/ },
  { path: '/istqb-ctfl-at-complete-guide', h1: /Foundation Level Agile Tester/ },
  { path: '/istqb-ctfl-at-chapter1-agile-software-development', h1: /アジャイルソフトウェア開発/ },
  { path: '/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles', h1: /アジャイルテストの基本原則/ },
  { path: '/istqb-ctfl-v4-chapter1-fundamentals', h1: /テストの基礎/ },
  { path: '/istqb-ctfl-v4-chapter2-sdlc-and-testing', h1: /SDLCとテスト/ },
  { path: '/istqb-ctfl-v4-chapter3-static-testing', h1: /静的テスト/ },
  { path: '/istqb-ctfl-complete-guide', h1: /Certified Tester Foundation Level/ },
  { path: '/software-testing-methodologies-guide', h1: /Test.*Methodologies/s },
  { path: '/unit-testing-guide', h1: /良いコードの証明.*良いテスト/s },
  { path: '/istqb-ctel-itp-atp-complete-guide', h1: /CTEL-ITP-ATP.*テストプロセス評価/s },
  { path: '/istqb-ctel-itp-itpi-complete-guide', h1: /CTEL-ITP-ITPI.*改善/s },
  { path: '/istqb-ctel-tm-sm-complete-guide', h1: /CTEL-TM-SM/ },
  { path: '/istqb-ctel-tm-otm-complete-guide', h1: /CTEL-TM-OTM.*Operational/s },
  { path: '/istqb-ctel-tm-mtt-complete-guide', h1: /CTEL-TM-MTT.*Managing the Test Team/s },
  { path: '/istqb-ct-game-complete-guide', h1: /ゲームテスト/ },
  { path: '/istqb-ct-gt-complete-guide', h1: /CT-GT.*ギャンブル産業テスター/s },
  { path: '/istqb-ct-ft-complete-guide', h1: /CT-FT.*Finance Testing/s },
] as const;

/** ページドリフト検知用。pages.ts と app/**\/page.tsx の数を一致させる。 */
export const EXPECTED_PAGE_COUNT = 41;
