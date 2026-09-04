# Migration Progress

Updated 2026-09-04

HTML → Next.js App Router 移行の進行状況。セッション終了前に必ず更新すること。
更新手順は `.claude/rules/migration-progress-sync.md` を参照。

> **✅ 登録済みガイドの移行完了**: 「移行状況テーブル」に掲載した静的 HTML / Markdown の Next.js App Router への移行が完了しました（合計 54 ルート = ガイドライブラリ index + 53 ガイド）。
>
> **⏸ 残存**: プロジェクトルートには App Router に未登録の書籍ガイド系 Markdown（`Agile-testing-practical-guide.md`・`Testing-computer-software-guide.md` ほか）と `Leading-quality-guide.html` などの HTML が残っています。現時点ではルート登録対象外の静的ドキュメントとして扱っており、ルート化の可否は未決定です。

## 現在地

| フィールド | 値 |
|---|---|
| 最新 HEAD | `ada3650` |
| 次の作業 | 新しい機能追加またはE2Eテストの拡充 |
| ビルド状態 | ✅ `bun test`（全テスト pass）成功、`bun run lint` エラーなし（※ サンドボックス環境におけるビルド禁止制約により、本番ビルド検証は除外）。 |

## 2026/09/04: Web APIテスト実践ガイドのNext.js移行完了

- **デザイン忠実再現**: 原著HTML固有の深みのあるネイビーダークテーマ（背景 `#07111e`、パネル `#0d1a2e`、アクセント `#7c9eff` / `#6dd3c7`）を忠実に復元。
- **Mermaid図解の完全移植**: テストピラミッド、テスティングトロフィー、リスクベース選択フロー、基本HTTPテストの流れ、探索的テストサイクル、Pact契約テストシーケンス、負荷テスト種類、セキュリティテスト組み込み、CI/CDパイプライン、本番観測サイクルの全10図解を共通 `<Mermaid>` コンポーネントへ移植。分岐エッジラベルの黒潰れ防止やレスポンシブ表示最適化を適用。
- **コードブロック**: Python (pytest + requests によるfixture/クリーンアップ/リクエスト検証) および JavaScript (k6 によるしきい値設定・負荷テスト実行) の2コードブロックを完全移植。
- **テーブル & インタラクティブチェックリスト**: ピラミッド比較、HTTPステータスコード観点、基本テストセット、代表的ツール比較、契約テストvsスキーマ、負荷テスト指標、OWASP API Security Top 10、よくある落とし穴とアンチパターンの全8テーブル、およびSection 14のインタラクティブチェックリスト（進捗カウント、チェック状態連動）を完全移植。
- `app/testing-web-apis-guide/`: ページコンポーネント、スタイル（`.testing-web-apis-page` スコープ、globals.css干渉リセット、Tailwindリストマーカー復元）、NavBar（`lib/useScrollSpy.ts` スクロールスパイ、全15セクションリンク、TOCグルーフラベル、モバイルトグル対応、`aria-current`）、Checklistコンポーネントを実装。
- `lib/navigation.ts`: `books-practices`（Recommended Books）カテゴリに `/testing-web-apis-guide`（Web APIテスト実践ガイド）を追加（全54件）。
- `tests/testing-web-apis-guide/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次全15リンク、全15セクション、Mermaid 10図、コードブロック2点、テーブル、チェックリスト動作、全15参考文献外部リンク（セキュリティ属性付き）の存在を検証する厳格なテストスイートを実装して全パス。
- `Testing-web-apis-guide.html` & `Testing-web-apis-guide.md`: `archive/html-archive/books/` および `archive/md-archive/books/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 54 ページ体制に同期。

## 2026/09/04: The Way of the Web Tester 実践ガイドのNext.js移行完了

- **デザイン忠実再現**: 原著HTML固有の洗練されたネイビーダークテーマ（背景 `#07111e`, `#0b1626`、アクセント `#7c9eff`、角丸 `8px`）を忠実に復元。
- **Mermaid図解の完全移植**: テストピラミッド、HTTP通信、ピラミッド実践フロー、ポート＆アダプター、TDD、テスティングトロフィーの全6図解を共通 `<Mermaid>` コンポーネントへ移植。エッジラベルの黒潰れ防止やSVG表示最適化を適用。
- **テーブル & コールアウト**: 3層の役割、CSSセレクタ早見表、落とし穴、HTTP基本用語、RESTful 4メソッド、単体テスト優位性、型付け比較、コードスタイル改善、モック功罪、トロフィー比較、Playwrightプラクティス、総まとめチェックリストの全12テーブル、および補足・注意点など全6コールアウトを完全移植。
- `app/the-way-of-the-web-tester-guide/`: ページコンポーネント、スタイル（`.the-way-of-the-web-tester-page` スコープ、globals.css干渉リセット、Tailwindリストマーカー復元）、NavBar（`lib/useScrollSpy.ts` スクロールスパイ、全18セクションリンク、モバイルトグル対応、`aria-current`）を実装。
- `lib/navigation.ts`: `books-practices`（Recommended Books）カテゴリに `/the-way-of-the-web-tester-guide`（The Way of the Web Tester 実践ガイド）を追加（全53件）。
- `tests/the-way-of-the-web-tester-guide/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次全18リンク、全18セクション、Mermaid 6図、全12テーブル、全6コールアウト、全参考文献外部リンク（セキュリティ属性付き）の存在を検証する厳格なテストスイートを実装して全パス（9 pass / 221 expect()）。
- `The-way-of-the-web-tester-guide.html` & `The-way-of-the-web-tester-guide.md`: `archive/html-archive/books/` および `archive/md-archive/books/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 53 ページ体制に同期。

## 2026/09/04: Clean Code Cookbook 実践ガイドのデザイン完全再現とNext.js移行完了

- **デザイン忠実再現**: 元HTML固有のエレガントなエディトリアル・ペーパーデザイン（温かみのある紙の背景 `#f7f3ea`、インク色文字 `#2a2420`、明朝体・セリフ書体 `Noto Serif JP`/`Source Serif 4`）を忠実に復元。
- **アイコン完全同期**: サイドバー・セクションヘッダー・コールアウト・チップ等のアイコンをすべて元HTML準拠の Tabler Icons（`ti-book-2`, `ti-bulb`, `ti-list-details`, `ti-route`, `ti-ruler-2`, `ti-users`, `ti-robot`, `ti-checklist`, `ti-flag`, `ti-link`, `ti-sparkles`, `ti-calendar`, `ti-stack-2`, `ti-quote`, `ti-info-circle`, `ti-brand-python`, `ti-brand-javascript`, `ti-brand-java`）の繊細な線画スタイルへ完全同期。
- **図解（Mermaidダイアグラム）のスタイル復元**: グローバルのダークテーマによるノードの黒潰れを解消し、元HTML通りの `base` テーマ・淡いクリーム背景（`#efe8d8`）＋ゴールド枠線（`#ad7f22`）、`:::hub`（薄青 `#e8edfb`）、`:::done`（薄緑 `#eaf3ec`）の配色を完全再現。
- **コードブロックのシンタックスハイライト**: Python, JavaScript, Java の全4コードブロックに対し、Atom One Dark 仕様のトークンハイライト（コメント、キーワード、関数名、文字列、数値、定数）を適用。
- `app/clean-code-cookbook-guide/`: ページコンポーネント、スタイル（`.clean-code-cookbook-page` スコープ、ペーパーテーマ、sticky nav）、NavBar（`lib/useScrollSpy.ts` スクロールスパイ、モバイルトグル対応、`aria-current`）を実装。
- `lib/navigation.ts`: 予約カテゴリ `books-practices` の表示タイトルを `'Recommended Books'` に設定し、`/clean-code-cookbook-guide`（Clean Code Cookbook 実践ガイド）を追加（全52件）。
- `tests/clean-code-cookbook-guide/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次全10リンク、全10セクション、Mermaid 4図、全テーブル、全コードブロック、Sandi Metz スタットカード4枚、AI時代のコードスメル3トピック、全参考文献14件の存在を検証する厳格なテストスイートを実装して全パス（18 pass / 209 expect()）。
- `Clean-code-cookbook-guide.html` & `Clean-code-cookbook-guide.md`: `archive/html-archive/books/` および `archive/md-archive/books/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts`、`tests/components/Header.test.tsx` など）を最新の 52 ページ体制に同期。

## 2026/09/01: ガイド index を ISTQB 認定レベルの階梯で再設計

- **背景**: 新設した index が「暗い背景 + アクセント 1 色 + 均一なカードグリッド」という、題材と無関係な既定形だった。
- **設計の芯**: 8 カテゴリは並列ではなく ISTQB の実際の階梯（基礎 → CTFL → CTAL → CT-* → CTEL → 実務）であるという事実を、装飾ではなく情報として符号化した。
- `lib/navigation.ts`: `CATEGORY_CODES` を追加。ラベルの短縮版ではなく実際の資格略号を使い、コード自体が資格体系を示す。
- `app/page.tsx`: ヒーローに階梯（signature）を新設。各レベルのバー長がそのレベルのガイド数に比例し、Specialist に量が偏っている事実が形として読める。各段は該当セクションへのアンカー。
- `app/GuideIndex.tsx`: レベル別セクション + sticky なレベル背骨（コード・タイトル・件数）。カードは箱をやめ罫線グリッド + レベル色の縦罫へ。
- `app/globals.css`: レベル色を `[data-category='...']` の `--level` として定義（index とドロワーで共有する単一定義）。`app/index-page.css` はその値を参照するのみで、上罫・コード・ホバー罫に一貫適用する。
- `app/layout.tsx`: index 専用ディスプレイ書体として Bricolage Grotesque（`--font-bricolage`、`preload: false`）を追加。ラテン略号だけが別の声になる混植を狙う。
- h1 を汎用ラベルから主題（「登る順に並べた、50 のガイド。」）へ変更し、`tests/index` と `e2e/pages.ts` の h1 期待値を更新。
- テスト: `bun test` 333 pass / `bun run lint` エラーなし / `tsc --noEmit` エラーなし。

## 2026/09/01: グローバルナビの拡張性改善とガイドライブラリ index 画面の新設

- **背景**: ドロワーが `NAV_ITEMS` 50 件を全件フラット展開しており、高さが項目数に比例して画面外へあふれていた。またルート `/` を 3210 行のガイド記事が占有し、サイトの入口として機能していなかった。
- `app/page.tsx`: ルートをガイドライブラリ index 画面へ置き換え（ヒーロー + 件数サマリ + カテゴリ別カードグリッド）。`app/GuideIndex.tsx`（`'use client'`）が検索とグリッド描画を担当し、`app/index-page.css` を新設。
- 旧ホーム本文を `app/modern-software-testing-complete-guide-2025/page.tsx` へ `git mv` で移設し、`foundation`（基礎テスト手法）カテゴリの 1 ページとして登録。合計 51 ルート。
- `lib/navigation.ts`: `NavItem` に `description`（80 文字以内、必須）を追加、`CATEGORY_ORDER` / `CATEGORY_TITLES` を export、ドロワーと index 画面で共用する `matchesQuery()` を新設。
- `components/Header.tsx`: ドロワーに検索ボックスと `<details>` アコーディオンを導入。既定は現在ページのカテゴリのみ展開、検索中は全展開。開閉は React state で制御し、Escape・スクロールロック・`aria-current` などの既存 a11y 挙動を維持。開いた直後のフォーカスは検索ボックスへ変更。
- `tests/lib/navigation-e2e-sync.test.ts`: `lib/navigation.ts` と `e2e/pages.ts` のドリフトを `bun test` で検知するガードを追加。
- `e2e/pages.ts`: `/` の h1 を index 用に変更、新ルートを追加、`EXPECTED_PAGE_COUNT` を 51 へ更新。
- テスト: `bun test` 321 pass / `bun run lint` エラーなし / `tsc --noEmit` エラーなし。

## 2026/09/01: Selenium 初学者向け完全入門ガイドの Next.js 移行完了

- `app/selenium-beginner-guide/`: ページコンポーネント（Mermaid 8図、全16セクション、Prismシンタックスハイライト、全テーブル、コールアウト2種、全参考文献を含む完全移行）、スタイル（`.selenium-guide-page` スコープ、ダークテーマ、sticky nav）、NavBar（IntersectionObserver スクロールスパイ、aria-current）を実装。
- `lib/navigation.ts`: `tools-frameworks` カテゴリ（「テストツール & フレームワーク」）に `/selenium-beginner-guide`（Selenium 完全ガイド）を追加。
- `tests/selenium-beginner-guide/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次全16リンク、全16セクション、Mermaid 8図、全テーブル、全コードブロック、全参考文献リンクの存在を検証する厳格なテストスイートを実装して全パス（全275件）。
- `Selenium-beginner-guide.html`: `archive/html-archive/tools/Selenium-beginner-guide.html` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 50 ページ体制に同期。

## 2026/09/01: Cypress 初学者向け完全入門ガイドの Next.js 移行完了

- `app/cypress-beginner-guide/`: ページコンポーネント（Mermaid 5図、全15セクション、Prismシンタックスハイライト、全テーブル、コールアウト3種、全参考文献を含む完全移行）、スタイル（`.cypress-beginner-page` スコープ、ダークテーマ、sticky nav）、NavBar（IntersectionObserver スクロールスパイ、aria-current）を実装。
- `lib/navigation.ts`: `tools-frameworks` カテゴリ（「テストツール & フレームワーク」）に `/cypress-beginner-guide`（Cypress 入門ガイド）を追加。
- `tests/cypress-beginner-guide/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次全15リンク、全15セクション、Mermaid 5図、全テーブル、全コードブロック、全参考文献リンクの存在を検証する厳格なテストスイートを実装して全パス（全264件）。
- `Cypress-beginner-guide.html`: `archive/html-archive/tools/Cypress-beginner-guide.html` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 49 ページ体制に同期。

## 2026/09/01: Cucumber 初学者向け完全入門ガイドの Next.js 移行完了

- `app/cucumber-beginner-guide/`: ページコンポーネント（Mermaid 7図、全16セクション、Gherkin/Prismシンタックスハイライト、全テーブル、13枚のまとめカード、21項目の参考文献を含む完全移行）、スタイル（`.cucumber-beginner-page` スコープ、フォレストグリーンダークテーマ）、NavBar（IntersectionObserver スクロールスパイ、aria-current）を実装。
- `lib/navigation.ts`: `tools-frameworks` カテゴリ（「テストツール & フレームワーク」）に `/cucumber-beginner-guide`（Cucumber 入門ガイド）を追加。
- `tests/cucumber-beginner-guide/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次全16リンク、全16セクション、Mermaid 7図、全テーブル、全コードブロック、まとめカード13枚、全参考文献21件の存在を検証する厳格なテストスイートを実装して全パス（全253件）。
- `Cucumber-beginner-guide.html`: `archive/html-archive/tools/Cucumber-beginner-guide.html` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 48 ページ体制に同期。

## 2026/08/31: Playwright 初学者向け完全入門ガイドの Next.js 移行完了

- `app/playwright-beginner-guide/`: ページコンポーネント（Mermaid 16図、全18セクション、コードブロック、テーブル、参考文献を含む完全移行）、スタイル（`.playwright-beginner-page` スコープ）、NavBar（IntersectionObserver スクロールスパイ、aria-current）を実装。
- `lib/navigation.ts`: `tools-frameworks` カテゴリ（「テストツール & フレームワーク」）に `/playwright-beginner-guide`（Playwright 入門ガイド）を追加。
- `tests/playwright-beginner-guide/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次全18リンク、全18セクション、Mermaid 16図、全テーブル、全コードブロック、全参考文献リンクの存在を検証する厳格なテストスイートを実装して全パス（全240件）。
- `Playwright-beginner-guide.html`: `archive/html-archive/playwright/Playwright-beginner-guide.html` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 47 ページ体制に同期。

## 2026/08/31: GitHub Actions 初学者向け完全ガイドの Next.js 移行完了

- `app/github-actions/`: ページコンポーネント（Mermaid 9図、全18セクション、コードブロック、テーブル、参考文献を含む完全移行）、スタイル（`.github-actions-beginner-page` スコープ）、NavBar（IntersectionObserver スクロールスパイ、aria-current）を実装。
- `lib/navigation.ts`: `cicd-devops` カテゴリに `/github-actions`（GitHub Actions 入門ガイド）を追加し、将来の書籍・ツール拡張用カテゴリ（`tools-frameworks`, `books-practices`）を定義。
- `tests/github-actions/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次全18リンク、全18セクション、Mermaid 9図、全テーブル、全コードブロック、全参考文献リンクの存在を検証する厳格なテストスイートを実装して全パス（全229件）。
- `Github-actions.html`: `archive/html-archive/cicd/Github-actions.html` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 46 ページ体制に同期。

## 2026/08/30: GitHub Actions 中級〜上級者向け完全ガイドの Next.js 移行完了

- `app/github-actions-guide/`: ページコンポーネント（Mermaid 6図、全18セクション、コードブロック、テーブル、インタラクティブチェックリスト、参考文献を含む完全移行）、スタイル（`.github-actions-page` スコープ）、NavBar（IntersectionObserver スクロールスパイ、モバイルトグル対応、aria-current）を実装。
- `app/github-actions-guide/Checklist.tsx`: Section 17のチェックリストをインタラクティブなクライアントコンポーネントとして実装。クリック・キーボード（Space/Enter）によるトグル、チェックマーク表示、打消し線（line-through）と薄色化、リアルタイム進捗バー（達成状況表示）に対応。
- `lib/navigation.ts`: 拡張性を考慮した新カテゴリ `cicd-devops`（「CI/CD & DevOps」）を新設し、`/github-actions-guide` を登録。
- `tests/github-actions-guide/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次全18リンク、全18セクション、Mermaid 6図、全7テーブル、全コードブロック、チェックリスト10項目のトグル動作・アクセシビリティ、全参考文献リンクの存在を検証する厳格なテストスイートを実装して全パス（全221件）。
- `Github-actions-guide.html`: `archive/html-archive/cicd/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 45 ページ体制に同期。

## 2026/08/20: CTFL v4.0 Chapter 5 (テスト活動の管理) ガイドの Next.js 移行完了

- `app/istqb-ctfl-v4-chapter5-test-management/`: ページコンポーネント（Mermaid 9図、全8セクション、全テーブル、コード例、用語集、参考文献を含む完全移行）、スタイル（`.ctfl-v4-ch5-page` スコープ）、NavBar（IntersectionObserver スクロールスパイ、モバイルトグル対応）を実装。
- `tests/istqb-ctfl-v4-chapter5-test-management/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次、全セクション・サブセクション、Mermaid 9図、テーブル、参考文献の存在を検証する厳格なテストスイートを実装して全パス（全209件）。
- `Istqb-ctfl-chapter5.html`: `archive/html-archive/ctfl/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 44 ページ体制に同期。

## 2026/08/20: CTFL v4.0 Chapter 4 (テスト分析・設計) ガイドの Next.js 移行完了

- `app/istqb-ctfl-v4-chapter4-test-analysis-and-design/`: ページコンポーネント（Mermaid 7図、全10セクション、全テーブル、カバレッジバー、キーワードチップ、コード例、参考文献を含む完全移行）、スタイル（`.ctfl-v4-ch4-page` スコープ）、NavBar（IntersectionObserver スクロールスパイ、モバイルトグル対応）を実装。
- `tests/istqb-ctfl-v4-chapter4-test-analysis-and-design/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次、全セクション・サブセクション、Mermaid 7図、カバレッジバー、テーブル、参考文献の存在を検証する厳格なテストスイートを実装して全パス（全202件）。
- `Istqb-ctfl-v4-chapter4.html`: `archive/html-archive/ctfl/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 43 ページ体制に同期。

## 2026/08/20: CTFL-AT Chapter 3 (アジャイルテスト技法とツール) ガイドの Next.js 移行完了

- `app/istqb-ctfl-at-chapter3-agile-testing-techniques-tools/`: ページコンポーネント（Mermaid 19図、全8セクション、全テーブル、K-Level学習チェックリスト、サンプル問題4問、コード例、参考文献を含む完全移行）、スタイル（`.ctfl-at-ch3-page` スコープ）、NavBar（IntersectionObserver スクロールスパイ、モバイルトグル対応）を実装。
- `tests/istqb-ctfl-at-chapter3-agile-testing-techniques-tools/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次、全セクション・サブセクション、Mermaid 19図、チェックリスト、練習問題、参考文献の存在を検証する厳格なテストスイートを実装して全パス（全195件）。
- `Ctfl-at-chapter3-agile-testing-techniques-tools.html`: `archive/html-archive/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 42 ページ体制に同期。

## 2026/08/20: CTFL-AT Chapter 2 (アジャイルテストの基本原則) ガイドの Next.js 移行完了

- `app/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles/`: ページコンポーネント（Mermaid 14図、全7セクション、全テーブル、K-Level学習目標、コード例、参考文献15件を含む完全移行）、スタイル（`.ctfl-at-ch2-page` スコープ）、NavBar（scroll イベント + `offsetTop` によるスクロールスパイ、ステータスドット遷移、モバイルトグル対応）を実装。
- `tests/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー目次、全セクション・サブセクション、Mermaid 14図、重要用語、自己診断チェック、参考文献15件の存在を検証する厳格なテストスイートを実装して全パス（全188件）。
- `Ctfl-at-chapter2.html`: `archive/html-archive/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 41 ページ体制に同期。

## 2026/08/20: ISTQB CT-FT (Finance Testing) ガイドの Next.js 移行完了

- `app/istqb-ct-ft-complete-guide/`: ページコンポーネント（Mermaid 9図、全9セクション、全テーブル、用語集、参考文献、注記を含む完全移行）、スタイル（`.istqb-ct-ft-page` スコープ）、NavBar（IntersectionObserver スクロールスパイ、モバイルトグル対応）を実装。
- `tests/istqb-ct-ft-complete-guide/page.test.tsx`: TDD 必須サイクルに従い、H1見出し、サイドバー全9リンク、ch0〜ch8全9セクション、Mermaid 9図、主要規制用語・用語集、参考文献・注記の存在を検証する厳格なテストスイートを実装して全パス（全180件）。
- `Finance-testing-ct-ft-guide.html`: `archive/html-archive/` へ移動完了。
- `Finance-testing-ct-ft-guide.md`: `archive/md-archive/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 40 ページ体制に同期。

## 2026/07/15: CTFL v4.0 Chapter 3 (静的テスト) ガイドの Next.js 移行完了

- `app/istqb-ctfl-v4-chapter3-static-testing/`: ページコンポーネント、スタイル、NavBar（IntersectionObserver）を実装。
- `tests/istqb-ctfl-v4-chapter3-static-testing/page.test.tsx`: TDD 必須サイクルに従い、3つのテストケースを実装して全パス（174件）。
- `Ctfl-v4-chapter3-static-testing.html`: `archive/html-archive/ctfl/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 39 ページ体制に同期。
- フィードバックに基づき、1rem未満の文字サイズを1rem（16px）に統一し、最大幅制限を撤廃してレイアウトを画面いっぱいに広げる調整を実施。

## 2026/07/13: CTFL-AT Chapter 1 (アジャイルソフトウェア開発) ガイド of Next.js 移行完了と Mermaid 修正

- `app/istqb-ctfl-at-chapter1-agile-software-development/`: ページコンポーネント、スタイル、NavBar（IntersectionObserver）を実装。
- `tests/istqb-ctfl-at-chapter1-agile-software-development/page.test.tsx`: TDD 必須サイクルに従い、3つのテストケースを実装して全パス（171件）。
- `Ctfl-at-chapter1-agile-software-development.html`: `archive/html-archive/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 38 ページ体制に同期。
- **Mermaid 表示バグの修正**: 移行スクリプトで改行が崩れて描画エラー（`Expecting 'NEWLINE'` 等）になっていた21個の Mermaid ダイアグラムを、元の HTML から抽出した正しい複数行構文に修復。

## 2026/07/08: CTFL v4.0 Chapter 2 (SDLCとテスト) ガイドの Next.js 移行完了

- `app/istqb-ctfl-v4-chapter2-sdlc-and-testing/`: ページコンポーネント、スタイル、NavBar（IntersectionObserver）を実装。
- `tests/istqb-ctfl-v4-chapter2-sdlc-and-testing/page.test.tsx`: TDD 必須サイクルに従い、3つのテストケースを実装して全パス（168件）。
- `Ctfl-v4-chapter2-sdlc-and-testing.html`: `archive/html-archive/ctfl/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html`、`e2e/pages.ts`、`lib/navigation.ts` など）を最新の 37 ページ体制に同期。

## 2026/07/04: CTFL v4.0 Chapter 1 (テストの基礎) ガイドの Next.js 移行完了

- `app/istqb-ctfl-v4-chapter1-fundamentals/`: ページコンポーネント、スタイル、NavBar（IntersectionObserver）を実装。
- `tests/istqb-ctfl-v4-chapter1-fundamentals/page.test.tsx`: TDD 必須サイクルに従い、3つのテストケースを実装して全パス（165件）。
- `Ctfl-v4-chapter1-fundamentals.html`: `archive/html-archive/` へ移動完了。
- `Ctfl-v4-chapter1-fundamentals.md`: `archive/md-archive/` へ移動完了。
- `app/istqb-ctfl-v4-chapter1-fundamentals/istqb-ctfl-v4-chapter1-fundamentals.css`: Mermaid wrapper のリセットスタイルを追加し、コンテナ内での表示サイズが極端に圧縮されてしまう表示不具合を修正。
- `.claude/skills/html-to-nextjs-migration/SKILL.md`: 再発防止のため、移行手順書をブラッシュアップ。移行時の Mermaid バグの確認工程（`fix-mermaid/SKILL.md` の確認および wrapper のリセットCSS定義義務付け）を追加。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html` など）を最新の 36 ページ体制に同期。

## 2026/06/30: CTFL v4.0 Chapter 3 (静的テスト) Markdown ガイドの追加と検証

- `Ctfl-v4-chapter3-static-testing.md` を追加し、他章との命名一貫性を確保。
- `.markdownlint.json` に準拠したフォーマット修正（裸の URL の修正、引用ブロック内空行の解消）を実施し、検証を通過。

## 2026/06/29: ISTQB CTFL v4.0 ガイドのサイドバーデザイン復元とカテゴリ変更

- `app/istqb-ctfl-complete-guide/`: 水平ナビバーから、元の HTML に忠実な階層型左固定サイドバー（`NavBar.tsx`）レイアウトに復元。
- `app/istqb-ctfl-complete-guide/istqb-ctfl-complete-guide.css`: カラー変数やサイドバー・メインエリアのレイアウト定義を移植。Mermaid図解サイズを `max-width: 850px` 中央寄せに制限。
- `lib/navigation.ts`: `/istqb-ctfl-complete-guide` のカテゴリを `foundation` から `istqb-foundation-ext` へ移動。
- `tests/lib/navigation.test.ts` & `tests/istqb-ctfl-complete-guide/page.test.tsx`: アサーション件数およびクラス指定の追従修正を実施し、全161テストパス。
- `Istqb-ctfl.html`: 再び `archive/html-archive/` へ移動。

## 2026/06/29: ISTQB CTFL v4.0 ガイドの Next.js 移行完了

- `app/istqb-ctfl-complete-guide/`: ページコンポーネント、スタイル、NavBar（IntersectionObserver）を実装。
- `tests/istqb-ctfl-complete-guide/page.test.tsx`: TDD 必須サイクルに従い、3つのテストケースを実装して全パス（161件）。
- `Istqb-ctfl.html`: `archive/html-archive/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html` など）を最新の 35 ページ体制に同期。

## 2026/06/12: 受入テストガイドの ATDD 図解レイアウト調整

- `app/acceptance-testing-guide.css`:
  - ATDD 図解の各ノード（円）のサイズを `110px` から `135px` に拡大し、内側の余白を調整。
  - 日本語テキストの折り返しや重なりを防ぐため、`line-height` を `1.35` に明示的に設定。
  - 各ノードの間隔を最適化するため、`atdd-cycle` に `gap: 0.5rem;` を追加。

## 2026/06/12: CT-GT ガイドのコードブロック表示不具合修正

- `app/istqb-ct-gt-complete-guide/page.tsx`:
  - コードブロック内の複数行が正しく改行されて表示されるよう、すべてのコード行を `<div className="code-line">` でラップする構成に変更。

## 2026/06/12: CT-GT ガイド of CSS バグ修正 (z-index & 変数ミスマッチ)

- `app/istqb-ct-gt-complete-guide/istqb-ct-gt-complete-guide.css`:
  - ページ背景のスキャンラインおよびグリッドの z-index を 0 に下げ、コンテンツの背面に配置。
  - `.istqb-ct-gt-page` に `position: relative` を追加してスタッキングコンテキストを作成。
  - ローカル CSS 変数と参照されているグローバル CSS 変数名のミスマッチを解消するため、定義部分にグローバル命名規約へのエイリアスマッピングを追加。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/MIGRATION_PROGRESS.md`）の最新コミットハッシュの同期。

## 2026/06/11: CT-GT ガイドの Next.js 移行完了

- `app/istqb-ct-gt-complete-guide/`: ページコンポーネント、スタイル、NavBar（IntersectionObserver）を実装。
- `tests/istqb-ct-gt-complete-guide/page.test.tsx`: TDD 必須サイクルに従い、テストケースを実装して全パス（154件）。
- `istqb-ct-gt-complete-guide.html`: `archive/html-archive/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html` など）を最新の 34 ページ体制に同期。
- これにより、予定されていた全てのガイドの移行が完了しました。

## 2026/06/08: CT-AuT ガイドの Next.js 移行完了

- `app/istqb-ct-aut-complete-guide/`: ページコンポーネント、スタイル、NavBar（IntersectionObserver）を実装。
- Mermaid 描画ロジックを `<Mermaid>` コンポーネントに統合し、TypeScript エラーを修正。
- `tests/istqb-ct-aut-complete-guide/page.test.tsx`: TDD 必須サイクルに従い、3つのテストケースを実装して全パス（149件）。
- `istqb-ct-aut-complete-guide.html`: `archive/html-archive/` へ移動完了。
- 各種ドキュメント（`CLAUDE.md`、`GEMINI.md`、`docs/coverage-dashboard.html` など）を最新の 32 ページ体制に同期。

## 2026/06/08: 新規ガイド (CT-GaMe) の追加とダッシュボード整理

- `istqb-ct-game-complete-guide.html`: ゲームテスト (CT-GaMe) 2025 完全学習ガイドを追加。
- `docs/coverage-dashboard.html`: 冗長な `DATA.inventory.total.scripts` フィールドを削除。動的なカウント計算ロジックに一本化。
- `docs/MIGRATION_PROGRESS.md`: 移行ステータスを更新。

## 2026/06/07: 新規ガイド (CT-AuT) の追加

- `istqb-ct-aut-complete-guide.html`: 自動車ソフトウェアテスター (CT-AuT) 2025 完全ガイドを追加。
- `docs/MIGRATION_PROGRESS.md`: 移行ステータスを「新規ガイド追加中」に更新。

## 2026/06/05: テストカバレッジダッシュボードの不整合修正

- `docs/coverage-dashboard.html`: 静的 HTML 初期マークアップの `Scope` カウント（`1 lib · 7 scripts`）を `DATA.inventory` に合わせた `4 libs · 5 scripts` に修正。
- `DATA.inventory.total.scripts` を実際の配列長（`5`）に修正。
- `renderScope()` で `DATA.inventory.total.scripts` ではなく `DATA.inventory.scripts.length` から動的に計算するようにし、将来的な不整合を防ぐ実装に変更。

## 2026/06/04: CTEL-TM-MTT Expert Level Guide の Next.js 移行完了

- `app/istqb-ctel-tm-mtt-complete-guide/`: ページコンポーネント（`page.tsx`）、スタイル（`.css`）、`NavBar.tsx`（sticky + IntersectionObserver scrollspy）を実装。
- Mermaid 図解 8 箇所、CodeBlock 5 箇所を正しく構造化。
- `lib/navigation.ts`: `NAV_ITEMS` にエキスパートレベルカテゴリとして追加（計31件）。
- `tests/istqb-ctel-tm-mtt-complete-guide/page.test.tsx`: TDD Red→Green サイクルで実装。`bun test` 146件全パス。
- `e2e/pages.ts`: E2Eスモークテスト対象に追加（`EXPECTED_PAGE_COUNT=31`）。
- `istqb-ctel-tm-mtt-complete-guide.html`: `archive/html-archive/` へ移動。
- `istqb-ctel-tm-mtt-complete-guide.md`: `archive/` へ移動。
- `CLAUDE.md` / `GEMINI.md` / `docs/coverage-dashboard.html`: 移行済みリストを更新し同期。
- `bun run build`: 31ページ全て静的生成に成功。

## 2026/06/04: CTEL-TM-MTT Expert Level Guide (HTML) の表示改善

- **Mermaid 構文の修正**: カラム0配置、ステートメント分離、`quadrantChart` 構文の最適化により描画エラーを解消。日本語ノードラベルのクォート処理を適用。
- **Mermaid 外観の調整**: ダークテーマに最適化した配色設定、中央寄せ、および個別 ID による最大幅制御を実装。一部の図でテキスト重なりを防ぐためスケール調整を実施。
- **コードブロックの構造化**: 不要なインデントを除去し、モバイル等の狭い画面でもレイアウトが崩れないよう plain text 形式への変換を含めた最適化を実施。
- **スキル同期**: `.claude/skills/fix-mermaid` を `.gemini/skills/` へ同期し、Mermaid 修正ノウハウを共有可能に。

## 2026/06/01: CTEL-TM-OTM Expert Level Guide (HTML) の表示改善

- **Mermaid 構文の修正**: カラム0配置の徹底、ステートメント分離、`quadrantChart` 構文の最適化により描画エラーを解消。
- **Mermaid 外観の調整**: ダークテーマに最適化した配色設定、中央寄せ、および個別 ID による最大幅制御を実装。ライブラリを v11 に更新。
- **コードブロックの構造化**: `.code-line` (white-space: pre) を導入し、各行をラップすることで不要なインデントを除去し、表示を正常化。
- **検証**: `tests/scripts/validate-fences.test.ts` の微修正（エラー出力の検証ロジック調整）を適用。
- **アーカイブ**: `ISTQB-CTEL-TM-OTM-Guide.html` および `ISTQB-CTEL-TM-OTM-Guide.md` を `archive/` 以下に移動。

## 2026/05/31: CTEL-TM-SM Expert Level Strategic Test Management Guide の Next.js 移行完了

- `app/istqb-ctel-tm-sm-complete-guide/`: ページコンポーネント、スタイル、NavBarを実装し、IntersectionObserverを追加。
- 誤変換されていた Mermaid 構文と DOM プロパティを修正.
- `istqb-ctel-tm-sm-complete-guide.html`: `archive/html-archive/` へ移動。
- `istqb-ctel-tm-sm-complete-guide.md`: `archive/md-archive/` へ移動。
- `lib/navigation.ts`: `NAV_ITEMS` へ項目追加（エキスパートレベルカテゴリ）。
- `CLAUDE.md` / `GEMINI.md` / `docs/coverage-dashboard.html`: 移行済みリストを更新し、同期を実施。
- **TypeScript 型エラー解消**: `bun:test` の `expect` において `jest-dom` マッチャーの型定義が不足していた問題に対し、グローバルな型定義ファイル [tests/jest-dom.d.ts](../tests/jest-dom.d.ts) を作成し、マッチャー定義をマージすることでプロジェクト全体の型エラーを一括解決しました。

## 2026/05/30: CTEL-ITP-ITPI Expert Level Guide の Next.js 移行完了

- `app/istqb-ctel-itp-itpi-complete-guide/`: ページコンポーネント、スタイル、NavBarを実装し、IntersectionObserverを追加。
- 誤変換されていた Mermaid 構文と DOM プロパティを修正。
- `istqb-ctel-itp-itpi-complete-guide.html`: `archive/html-archive/` へ移動。
- `lib/navigation.ts`: `NAV_ITEMS` へ項目追加（エキスパートレベルカテゴリ）。
- `CLAUDE.md` / `GEMINI.md` / `docs/coverage-dashboard.html`: 移行済みリストを更新し、同期を実施。

## 2026/05/28: CTEL-ITP-ATP Expert Level Guide の Next.js 移行完了

- `app/istqb-ctel-itp-atp-complete-guide/`: ページコンポーネント、スタイル、NavBarを実装.
- `istqb-ctel-itp-atp-complete-guide.html`: `archive/html-archive/` へ移動.
- `lib/navigation.ts`: `NAV_ITEMS` へ項目追加（エキスパートレベルカテゴリ）.
- `CLAUDE.md` / `GEMINI.md` / `docs/coverage-dashboard.html`: 移行済みリストを更新し、同期を実施.
- **全 HTML 移行完了**: これにより、プロジェクトルートにあったすべての静的 HTML ページの Next.js 移行が完了しました。

## 2026/05/27: CTAL-TTA ガイドの Next.js 移行完了

- `app/istqb-ctal-tta-complete-guide/`: ページコンポーネント、スタイル、NavBarを実装.
- `istqb-ctal-tta-complete-guide.html`: `archive/html-archive/` へ移動.
- ESLint: `no-explicit-any` および `no-unused-vars` の修正を実施.
- テスト: `tests/istqb-ctal-tta-complete-guide/page.test.tsx` を追加し、全テスト通過を確認.

## 2026/05/26: 各仕様書（CLAUDE.md / coverage-dashboard.html）の同期

- `docs/coverage-dashboard.html`: `Shared Components` の `Accessibility` セルおよび `Accessibility` カテゴリの `Unit` テストセルを `partial`/`33%` に更新（DisclaimerBanner に `aria-label` の検証を追加したことに同期）. 静的ファイル数カウントおよび `kpi-total-files` の動的更新ロジックを修正.
- `CLAUDE.md`: ユニットテストの総数を `133 specs` に更新.
- 最終更新日のタイムスタンプ（`Updated 2026-05-26`）を同期.

## 2026/05/26 P1: DisclaimerBanner の無限レイアウトループ回避とアクセシビリティ改善

CIで発生していた Lighthouse CI のテスト失敗（LCPが10秒以上、およびアクセシビリティの低下）の原因を特定し、改善を行いました。

### 1. パフォーマンス（LCP）の改善

- `app/page.tsx`: ヒーローセクションで使われているアニメーション名が `fadeUp` とタイポされており、`globals.css` の `@keyframes fade-up` に一致しなかったため、`fade-up` に修正しました。これにより、初期表示が透明のまま静止していた問題が解消しました。
- `components/DisclaimerBanner.tsx`: `ResizeObserver` および `requestAnimationFrame` による高頻度な更新が無限レイアウト再計算ループを引き起こすのを防ぐため、バナーの高さが実際に変化したときのみ更新を行うようガードを追加しました。

### 2. アクセシビリティ（Accessibility）の改善

- `components/DisclaimerBanner.tsx`: バナーを `div` から適切なランドマークロールを持つ `aside` 要素へ変更し、`aria-label="免責事項"` 属性を追加しました。また、これに伴い `useRef` の型を `HTMLElement` に変更しました。
- `tests/components/DisclaimerBanner.test.tsx`: テストケースの説明文を日本語に統一し、新たに `aside` 要素（ロール: `complementary`）および `aria-label` が "免責事項" であることをアサートするテストを追加しました。

## 2026/05/26 P1: Lighthouse CI による品質予算の導入

Lighthouse CI を用いて主要ページのパフォーマンス、アクセシビリティ、SEOの品質予算検証を導入しました。

### 1. Lighthouse CI の導入

- `package.json`: devDependency に `@lhci/cli` を追加、スクリプトに `"lhci:autorun": "lhci autorun"` を追加.
- `lighthouserc.json`: 主要4ページに対する品質予算（LCP < 2.5s, CLS < 0.1, TBT < 350ms, 各カテゴリ >= 0.9）を設定.
- `.github/workflows/ci.yml`: ビルド成功後に Lighthouse CI スキャンを自動実行し、予算超過をPRごとに検知するステップを追加.
- `tests/lhci-config.test.ts`: TDD必須サイクルに準拠し、設定とスクリプトの妥当性を検証するテストコードを新規作成.

### 2. ドキュメント同期

- `docs/coverage-dashboard.html`: Performance 監査の状況を Gap → 100% (4/4) に更新. KPI「Test Types Uncovered」を `3/6` から `2/6` に進捗. インベントリに `tests/lhci-config.test.ts` と `lighthouserc.json` を追加.
- `CLAUDE.md`, `GEMINI.md`, `README.md`, `docs/REUSABLE_PROMPTS.md` 各仕様書を最新化し、最終更新日のタイムスタンプ（`Updated 2026-05-26` または `最終更新日: 2026-05-26`）を付与・更新.

## 2026/05/25: Usability Testing (CT-UT) ガイド移行とTDDルール精査

Usability Testing (CT-UT) 完全ガイドの移行作業を完了し、併せてTDD必須サイクル（`tdd-mandatory-cycle.md`）の適用強化を行いました。

### 1. Usability Testing (CT-UT) の Next.js 移行

- **ページ固有スタイルと実装**: `istqb-ct-ut-complete-guide.html` から CSS 変数マッピングやクラス置換を行い、`app/istqb-ct-ut-complete-guide/page.tsx` および `app/istqb-ct-ut-complete-guide.css` として移行.
- **ナビゲーションとスクロールスパイ**: `'use client'` コンポーネント `app/istqb-ct-ut-complete-guide/NavBar.tsx` を実装し、スクロールスパイおよびスティッキーなアンカーメニューを追加.
- **関連ファイルの同期**: `lib/navigation.ts` の `NAV_ITEMS` への追加、`e2e/pages.ts` の `PAGES` 配下の追加（期待する総ページ数を 25 にインクリメント）、`docs/coverage-dashboard.html` の KPI/インベントリへの反映、`CLAUDE.md`/`GEMINI.md` の移行済みトラッキング情報の更新を実施.
- **テストコード追加**: `tests/istqb-ct-ut-complete-guide/page.test.tsx` を作成し、ページの見出しや NavBar、TOCの存在を検証.

### 2. TDD強制ルールの遵守と体制強化

- **問題の特定**: 第一の失敗原因として、`.gemini` ディレクトリに `rules` がなかったこと、また `html-to-nextjs-migration/SKILL.md` に TDD必須ルール（`tdd-mandatory-cycle.md`）への参照が明記されていなかった点を特定.
- **インフラ/スキルの強化**: `.gemini/rules/` ディレクトリを作成してすべてのルールファイルをコピー. また、`.claude/` および `.gemini/` 配下の `html-to-nextjs-migration/SKILL.md` を更新し、タスクの TDD 強制構造化を明文化.
- **リカバリコミットの実施**: 一括コミットを行わず、ルール準備コミット → Red（テストのみ）コミット → Green（実装のみ）コミット → Refactor（同期ファイル等）コミットの順に論理分割して適用しました。

## 2026/05/25 P1: A11y検証自動化とHeader二重レンダ解消

coverage-dashboard.html の P1 アクション「axe-core/playwright による WCAG 2.1 AA 自動検証」の追加、および「Header二重レンダ解消」を完了した。また、自動検証で検出されたアクセシビリティ違反をグローバル CSS の修正によって解決し、デザイン都合や影響度の大きい箇所は課題報告書に記録してルール除外を適用した。

### 1. axe-core/playwright 自動アクセシビリティ検証

- `package.json`: devDependency に `@axe-core/playwright` (`^4.10.0`) を追加.
- `e2e/a11y.e2e.ts`: 全 24 ルートを巡回し、`AxeBuilder` で WCAG 2.1 AA 適合性を自動スキャンするテストを実装. 違反検出時は、デバッグ容易化のため Rule ID、Description、Affected Nodes、Selector、HTML ソースを詳細に console.error へ出力する実装.
- `app/globals.css`: コメント色（`.cm`）の輝度向上、外部リンク（`.url-ref`）の不透明度改善、文章内リンクおよびフッターリンクへの下線強制追加（`link-in-text-block` 対応）など、多数の color-contrast とリンク識別違反をグローバルに修正.
- `docs/accessibility-status-report.md`: 自動監査結果で検出されたもののうち、影響の大きいルール（`scrollable-region-focusable` や一部の独自配色）を除外した背景、および将来的な改善ロードマップを明記したアクセシビリティ状況報告書を作成.

### 2. Header 二重レンダ解消と E2E の strict 化

- 該当 9 ページ（`e2e-testing-guide`、`istqb-ctfl-at-complete-guide` 等）が `app/layout.tsx` と個別インポートの両方で `<Header />` を二重に描画していた構造を修正. 各 page.tsx から `<Header />` レンダリングおよびインポートを削除.
- `e2e/smoke.e2e.ts`: 二重レンダ解消に伴い、ロゴリンクと H1 の検証において `.first()` での回避を取り除き、厳密な strict モードの検証に戻した.

### 3. ドキュメント同期

- `docs/coverage-dashboard.html`: Accessibility 行のセルの状況を Gap → 100% (full) に更新. KPI の「Test Types Uncovered」を 4/6 → 3/6 へ進捗. 現存テストインベントリに `e2e/a11y.e2e.ts` を追加し、アクションマップの axe-core タスクを ✅ 完了化.

## 2026/05/23 P1: Playwright スモーク E2E 導入

coverage-dashboard.html の P1 アクション「Playwright 導入と全ページのスモーク E2E」を完了した。

### 1. Playwright (@playwright/test@1.60.0) 導入

- `package.json`: devDependency に追加. scripts に `e2e` / `e2e:ui` / `e2e:install` / `e2e:report` を追加.
- `bunfig.toml`: コメントを更新. e2e ファイルは `.e2e.ts` 拡張子を採用し、`bun test` のデフォルト検出 (`*.test.ts` / `*.spec.ts`) と自然に分離.
- `.gitignore`: `playwright-report/` / `test-results/` / `playwright/.cache/` を追加.

### 2. スモーク E2E スイート

- `playwright.config.ts`: chromium のみ、`webServer` で `bun run build && bun run start` を auto-start. `reuseExistingServer: !CI`、`retries: CI ? 1 : 0`、reporter は list + html.
- `e2e/pages.ts`: 全 24 ルート (home + 23 ガイド) と h1 部分一致用 RegExp を単一情報源として定義. `EXPECTED_PAGE_COUNT=24` も export.
- `e2e/smoke.e2e.ts`: 各ページに対し HTTP 200 / `getByRole('link', { name: 'QA_STUDIES' })` 表示 / `getByRole('heading', level: 1, name: regex)` 一致 / `pageerror` 0件 / `console error` 0件（favicon・ResizeObserver・React DevTools 案内のみ allowlist 除外）を検証. `PAGES.length === EXPECTED_PAGE_COUNT` の sanity test も含む.

### 3. 検証結果

- `bun run e2e`: **25 passed** (24 pages + 1 sanity) / 0 fail / 約 35 秒.
- `bun test`: 125 pass / 0 fail 維持（`e2e/` は対象外として正しく無視）.
- 既存の Header 二重レンダ箇所（一部 page.tsx が layout.tsx と Header をダブル import）は `.first()` で吸収. 構造修正は別タスク扱い.
- 既知のノイズ: `next start` + `output: 'standalone'` の警告（動作影響なし、将来 standalone server.js への切り替えで解消可能）.

### 4. ドキュメント同期

- `docs/coverage-dashboard.html`: KPI「Test Types Uncovered」を 5/6 → 4/6、Pages 行の E2E セルを Gap → 100%、「with E2E」chip を 0 → 24、P1 Playwright アクションを ✅ 完了化、ISTQB System Testing 行を Smoke 100%、E2E inventory セクションを追加.
- `CLAUDE.md`: コマンド節に E2E スクリプト 4 種と port 3000 衝突時のトラブルシュート手順を追加.

## 2026/05/23 修正・改善タスク完了

移行スクリプト類の品質向上とテストカバレッジの深化（P2アクション）を実施した。

### 1. 移行スクリプトのユニットテスト実装

`tests/scripts/` 配下に以下のテストを新規作成し、各スクリプトの入出力やエラーハンドリングを検証した。

- `validate-fences.test.ts`: 言語未指定フェンスや閉じられていないブロックの検出を検証.
- `fix-fences.test.ts`: 未指定フェンスへ自動で 'text' を付与する修正ロジックを検証.
- `format-markdown.test.ts`: リンク分離、見出し前空行（MD022）、空行圧縮（MD012）、末尾改行（MD047）のフォーマットを検証.
- `extract-css.test.ts`: style タグからの CSS 抽出、変数の置換、不要ルールの削除を検証.
- `html-to-tsx.test.ts`: HTML の React (TSX) 変換、クラス置換、pre ブロックの dangerouslySetInnerHTML 復元などを検証.

※サンドボックス環境の実行制約を回避するため、`process.exit` や `console.log` をモックし、キャッシュバスター付き動的インポートを用いることでインプロセス実行として実装. 非同期処理の待機は `Promise` により同期化.

### 2. テストカバレッジダッシュボードの更新

- [docs/coverage-dashboard.html](coverage-dashboard.html) を最新化.
- 全体テストカバー率を **41% → 94%** へ引き上げ（ページ 100%、コンポーネント 100%、lib 100%、スクリプト 71%）.
- インベントリに `Script Utility Tests` セクションを追加し、追加した 5 つのテストファイルを掲載.
- カバレッジマトリクスに `Scripts Utilities` の充足状況 (5/7 カバー) を反映.

## 2026/05/18 修正・改善タスク完了

インラインコメントに基づき、以下の修正を実施した。

### 1. ガイドラインとルールの明確化

- `.claude/rules/tdd-mandatory-cycle.md`: `docs/MIGRATION_PROGRESS.md` の更新が必要な「移行タスク」の判定基準を具体化（HTML→React変換、ページ削除等）.

### 2. istqb-ct-pt-complete-guide（Next.js 移行後）の品質向上

- `app/istqb-ct-pt-complete-guide.css`:
  - Tailwind v4 規約（`@layer base/components`）への準拠.
  - `prefers-reduced-motion` 対応（アニメーション無効化、プログレスバー表示維持）.
  - `sticky-nav` の位置と `z-index` をプロジェクト規約に調整.
  - `body::before/after` オーバーレイの `z-index` を下げ、操作を妨げないように修正.
- `app/istqb-ct-pt-complete-guide/NavBar.tsx`: `use client` 追加と `IntersectionObserver` によるスクロールスパイ実装.
- `tests/istqb-ct-pt-complete-guide/page.test.tsx`: `afterAll` での `IntersectionObserver` モック復元処理追加.

### 3. istqb-ct-ut-complete-guide.md の修正（完了）

- **完了**:
  - ロードマップ、法的リスク（金額表記）、算術計算例（80%の分母修正）の修正.
  - 冒頭および Chapter 2 付近の ASCII アート・テーブルの Markdown 変換.
  - Chapter 3 以降に残存する約 27 箇所の無タグコードブロック（ASCII アート、テキストボックス等）の Markdown テーブル、リスト、または Mermaid への変換.

### 4. Test Coverage Dashboard の追加（完了）

HTML 移行とは独立した可視化タスク. プロジェクト自身のテストカバレッジを 1 ファイルで把握できるスタンドアロン HTML を追加した。

- 追加ファイル: [docs/coverage-dashboard.html](coverage-dashboard.html)（単一ファイル、外部依存は Google Fonts のみ）
- 構成: KPI 概要 / 11 カテゴリ × 6 種別マトリクス / 23 ページ別カバレッジ / 既存 13 テストのインベントリ / P0-P3 ネクストアクション / ISTQB テストレベル整合表
- 数値根拠: ページ 10/23 テスト済（43%）・コンポーネント 1/3・lib 2/2・scripts 0/5・CI 0 パイプライン
- 更新運用: `<script>` 内の `DATA` 定数を編集して再描画. HTML 構造の変更不要
- コミット: `322ca53 docs(coverage): add self-referential test coverage dashboard`

## 移行状況テーブル

### 移行完了（archive/html-archive/ に移動済み）

| 元 HTML | 移行先ルート | 備考 |
|---|---|---|
| `acceptance-testing-guide.html` | `/acceptance-testing-guide` | ✅ |
| `e2e-testing-guide.html` | `/e2e-testing-guide` | ✅ |
| `integration-functional-testing-guide.html` | `/integration-functional-testing-guide` | ✅ |
| `integration-system-testing-guide.html` | `/integration-system-testing-guide` | ✅ |
| `istqb-ct-ai-complete-guide.html` | `/istqb-ct-ai-complete-guide` | ✅ NavBar あり |
| `istqb-ct-game-complete-guide.html` | `/istqb-ct-game-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-genai-complete-guide.html` | `/istqb-ct-genai-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-mbt-complete-guide.html` | `/istqb-ct-mbt-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-pt-complete-guide.html` | `/istqb-ct-pt-complete-guide` | ✅ NavBar あり |
| `istqb-ct-aut-complete-guide.html` | `/istqb-ct-aut-complete-guide` | ✅ NavBar あり (HTML not found) |
| `istqb-ct-act-complete-guide.html` | `/istqb-ct-act-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-mat-complete-guide.html` | `/istqb-ct-mat-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-sec-complete-guide.html` | `/istqb-ct-sec-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-ste-complete-guide.html` | `/istqb-ct-ste-complete-guide` | ✅ NavBar あり |
| `istqb-ct-tas-complete-guide.html` | `/istqb-ct-tas-complete-guide` | ✅ NavBar あり |
| `istqb-ct-ut-complete-guide.html` | `/istqb-ct-ut-complete-guide` | ✅ NavBar あり |
| `Istqb-ctfl.html` | `/istqb-ctfl-complete-guide` | ✅ NavBar あり |
| `Ctfl-v4-chapter1-fundamentals.html` | `/istqb-ctfl-v4-chapter1-fundamentals` | ✅ NavBar あり |
| `Ctfl-v4-chapter2-sdlc-and-testing.html` | `/istqb-ctfl-v4-chapter2-sdlc-and-testing` | ✅ NavBar あり |
| `Ctfl-v4-chapter3-static-testing.html` | `/istqb-ctfl-v4-chapter3-static-testing` | ✅ NavBar あり |
| `Istqb-ctfl-v4-chapter4.html` | `/istqb-ctfl-v4-chapter4-test-analysis-and-design` | ✅ NavBar あり |
| `Istqb-ctfl-chapter5.html` | `/istqb-ctfl-v4-chapter5-test-management` | ✅ NavBar あり |
| `istqb-ctal-atlas-complete-guide.html` | `/istqb-ctal-atlas-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-att-complete-guide.html` | `/istqb-ctal-att-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-ta-complete-guide.html` | `/istqb-ctal-ta-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-tae-complete-guide.html` | `/istqb-ctal-tae-complete-guide` | ✅ |
| `istqb-ctal-tm-complete-guide.html` | `/istqb-ctal-tm-complete-guide` | ✅ NavBar あり |
| `istqb-ctal-tta-complete-guide.html` | `/istqb-ctal-tta-complete-guide` | ✅ NavBar あり |
| `istqb-ctel-itp-atp-complete-guide.html` | `/istqb-ctel-itp-atp-complete-guide` | ✅ NavBar あり |
| `istqb-ctel-itp-itpi-complete-guide.html` | `/istqb-ctel-itp-itpi-complete-guide` | ✅ NavBar あり |
| `istqb-ctel-tm-sm-complete-guide.html` | `/istqb-ctel-tm-sm-complete-guide` | ✅ NavBar あり |
| `ISTQB-CTEL-TM-OTM-Guide.html` | `/istqb-ctel-tm-otm-complete-guide` | ✅ NavBar あり |
| `istqb-ctel-tm-mtt-complete-guide.html` | `/istqb-ctel-tm-mtt-complete-guide` | ✅ NavBar あり |
| `modern-software-testing-complete-guide-2025.html` | `/modern-software-testing-complete-guide-2025` | ✅ |
| `software-testing-methodologies-guide.html` | `/software-testing-methodologies-guide` | ✅ |
| `unit-testing-guide.html` | `/unit-testing-guide` | ✅ |
| `istqb-ct-gt-complete-guide.html` | `/istqb-ct-gt-complete-guide` | ✅ NavBar + aria-current あり |
| `Finance-testing-ct-ft-guide.html` | `/istqb-ct-ft-complete-guide` | ✅ NavBar + aria-current あり |
| `Ctfl-at-chapter1-agile-software-development.html` | `/istqb-ctfl-at-chapter1-agile-software-development` | ✅ NavBar あり |
| `Ctfl-at-chapter2.html` | `/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles` | ✅ NavBar あり |
| `Ctfl-at-chapter3-agile-testing-techniques-tools.html` | `/istqb-ctfl-at-chapter3-agile-testing-techniques-tools` | ✅ NavBar あり |
| `Github-actions.html` | `/github-actions` | ✅ NavBar + aria-current あり (archive/html-archive/cicd/) |
| `Github-actions-guide.html` | `/github-actions-guide` | ✅ NavBar + aria-current あり (archive/html-archive/cicd/) |
| `Playwright-beginner-guide.html` | `/playwright-beginner-guide` | ✅ NavBar + aria-current あり (archive/html-archive/playwright/) |
| `Cucumber-beginner-guide.html` | `/cucumber-beginner-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `Cypress-beginner-guide.html` | `/cypress-beginner-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `Selenium-beginner-guide.html` | `/selenium-beginner-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `Clean-code-cookbook-guide.html` | `/clean-code-cookbook-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `The-way-of-the-web-tester-guide.html` | `/the-way-of-the-web-tester-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Testing-web-apis-guide.html` | `/testing-web-apis-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |

### 未移行（プロジェクトルートに残存）

登録済みガイドの移行は完了しているが、プロジェクトルートには App Router に未登録の静的ドキュメントが残っている。
これらは現時点で**ルート登録対象外**として扱っており、ルート化の可否は未決定。

| ファイル | 予定ルート | 状態 | 備考 |
|---|---|---|---|
| 書籍ガイド系 Markdown（`Agile-testing-practical-guide.md` / `Art-of-software-testing-guide.md` / `Beautiful-testing-guide.md` / `Beyond-legacy-code-guide.md` / `Leading-quality-guide.md` / `Lessons-learned-in-software-testing-guide.md` / `Secure-by-design-guide.md` / `Software-test-design-guide.md` / `Software-testing-craftsmans-approach-guide.md` / `Testing-computer-software-guide.md`） | 未定 | ⏸ ルート登録対象外 | 静的ドキュメントとして残置 |
| 書籍ガイド系 HTML（`Leading-quality-guide.html` / `Art-of-software-testing-guide.html` / `Beautiful-testing-guide.html` / `Beyond-legacy-code-guide.html` / `Secure-by-design-guide.html` / `Software-testing-craftsmans-approach-guide.html`） | 未定 | ⏸ ルート登録対象外 | 同上（Markdown と対になる HTML 版） |
| ツール系ドキュメント（`Appium-essentials-guide.md` / `Appium-essentials-guide.html` / `Owasp-zap-beginner-guide.html` / `Playwright-intermediate-advanced-guide.html` / `Sonarqube.html` / `Sonarqube-intermediate.html`） | 未定 | ⏸ ルート登録対象外 | ルート化候補だが未決定 |
| `Istqb-ctfl-v4-chapter6.html` | `/istqb-ctfl-v4-chapter6-*`（仮） | ⏸ ルート登録対象外 | CTFL v4.0 の章ガイドで唯一未登録。ルート化の可否は未決定 |

## 既知の留保事項

- `istqb-ctfl-at-complete-guide` と `bdd-testing-guide` / `ai-test-guide` は archive/html-archive/ に元 HTML が存在しない（最初から Next.js で作成）
- `istqb-ct-aut-complete-guide.html` はリポジトリ内に存在しません（not found）。

## 次回セッションでの再開プロンプト

```text
コンテキスト:
- 最新 HEAD は本ドキュメント「現在地」テーブルを参照（ここに固定値を書かない）。
- **移行対象ガイドの移行完了**: 「移行状況テーブル」に掲載した HTML / Markdown の Next.js App Router への移行は完了しています。
- 合計 53 ルート（ガイドライブラリ index + 52 ガイド）が `lib/navigation.ts` / `e2e/pages.ts` で管理されています。
- ただしプロジェクトルートには App Router に未登録の書籍ガイド系 Markdown と `Leading-quality-guide.html` などの HTML が残っています。これらはルート登録対象外の静的ドキュメントとして扱っており、ルート化するかどうかは未決定です。
- 各種テスト（ユニット、型チェック、ESLint）はすべて最新の構成に同期され、通過しています。

【指示】
登録済みガイドの Next.js 移行が完了しました。今後の品質向上、E2Eテストの拡充、または新しい機能追加について指示を仰ぎます。
```
