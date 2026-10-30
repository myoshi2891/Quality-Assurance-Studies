# Project Overview

Updated 2026-10-30

This project is a Next.js (App Router) web application designed as a comprehensive learning resource and guide for Quality Assurance (QA) and Software Testing. It provides extensive documentation on modern software testing methodologies (Unit, Functional, Integration, E2E, BDD, Security, Accessibility) as well as AI system testing based on ISTQB CT-AI and CT-GenAI standards.

## 2026-10-29: ISO 27799:2025 医療情報セキュリティガイドの移行

- 移行先は`/iso-27799-2025-guide`。ISOカテゴリーへ追加し、ナビゲーション・E2E一覧を113ルートへ同期。
- 全46見出し・目次19リンク・31表の全セル・11図・コールアウト12件・外部リンク13件・メタ情報9件・注記アイコン12件・チェック10項目・ヒーロー・全文・フッターを固定インベントリで出現順に照合。コードブロックは原本どおり0件。CSS全89ルールと960px・1200px境界を保持。
- MDの図定義をHTML内SVGのラベルと照合して再構築し、全ノード形状・配色、接続先・矢印・点線を共有Mermaidで検証。共有CSSの中央寄せが横長図の左端を隠す問題をページ側で補正。
- 6幅×CSS読込2順序の12件、11図×6幅の66件、チェック完了・リセット表示2件で、原本の計算済みスタイル、ヒーロー疑似要素、見出しマーク、ホバー、SVGの配色・接続と左右スクロール、チェックの進捗・印を比較。ビルド・サーバー不要のChromium計80件が成功。
- チェック全10項目の入力・ラベル操作、進捗・完了色・リセット、目次全19アンカーの追従・開閉・Escape・フォーカス復帰・Observer解除を検証。SWC開発/本番変換後の全文DOMと、SSR復元時の回復可能エラー・DOM警告なし、チェック操作の接続も確認。
- 原本HTMLは`archive/html-archive/iso/Iso-27799-2025-guide.html`、MDは`archive/md-archive/iso/Iso-27799-2025-guide.md`へ同名で移動。SHA-256一致・Git追跡・rename検出100%を確認。
- Red319件を先行コミット後、CSS、図、チェック操作、目次、ヒーロー、Step 0〜16、付録A/B、フッター、ページ構成、ナビ登録、アーカイブ、表示補正、追加回帰テスト、仕様書を個別コミット。各コミット直前に予定パス完全一致とPIIを検査。
- npm経由で対象321件・関連581件・全体8263件（165ファイル）、Chromium80件、lint、対象型検査、Markdown lintが成功。ビルドは指示により未実施、目視確認はユーザー担当。

## 2026-10-29: ISO/IEC 23009-1:2026 MPEG-DASHガイドの移行

- 移行先は`/iso-23009-1-2026-guide`。ISOカテゴリーへ追加し、ナビゲーション・E2E一覧を112ルートへ同期。
- 全41見出し・階層目次40リンク・24表の全セル・6図・XML2例・コールアウト9件・外部リンク23件・メタ情報5件・ヒーロー・全文・フッターを固定インベントリで順序まで照合。CSS全71ルールと900px境界を保持。
- 元HTMLのXML例にはハイライト用タグの混入があるため、MD原稿を正として復元。タグ・属性・文字列の配色、改行・字下げ・行数・高さ・横スクロールを検証。図はHTML内SVGのラベル・接続を保持し、共有Mermaidで描画。
- 4幅×CSS読込2順序の8件、6図×4幅の24件、XML2例×2幅の4件で原本の計算済みスタイル、疑似要素、ホバー、ノード形状・配色、接続・矢印、左右スクロールを検証。書き出しSVGの実線末端クリップは線種として比較し、接続先・矢印を個別に照合。
- 目次40アンカーの追従・開閉・Escape・フォーカス復帰・Observer解除と、SWC開発/本番変換後の全文DOMを検証。共有CSSによるヒーロー、表、箇条書き、注記、目次、フッターへの干渉を補正。
- 元HTMLは`archive/html-archive/iso/Iso-23009-1-2026-guide.html`、MDは`archive/md-archive/iso/Iso-23009-1-2026-guide.md`へ同名で移動。SHA-256一致、Git追跡、rename検出100%を確認。
- Red269件を先行コミット後、CSS、図、XML、目次、ヒーロー、導入、Step 1〜12、用語集、参考資料、注意事項、フッター、ページ構成、ナビ登録、アーカイブ、デザイン補正、仕様書を個別コミット。各コミットで予定パスの完全一致とPIIを検査。
- npm経由で対象269件・関連525件・全体7938件（158ファイル）、ビルド・サーバー不要のChromium36件、lint、対象型検査が成功。ビルドは指示により未実施、目視確認はユーザー担当。

## 2026-10-28: ISOガイドのレビュー修正

- OFFの発行年の行を二次情報の小節へ移動し、年の記載を保持。SWID図とテキスト代替では工程とタグを分け、インストール時の別タグの配置・作成、パッチタグの追加・併存、元タグを変えない補足を明示。
- OFFのhydrationテストをSSR HTMLからの復元へ変更し、回復可能エラー・console診断を検査。関連ユニット591件、対象型検査、lint、SWID図の4幅のブラウザー検証が成功。
- OFFのCSS比較8件を修正。表の罫線色を原本の`currentColor`へ戻し、比較用原本の参考文献採番を用語集の直前で止めて用語と列幅を保持。専用Playwright設定で4幅×CSS読込2順序の8件、対象ユニット306件（型検査を含む）、編集したE2Eのlintが成功。比較項目・アサーションは変更なし。

## 2026-10-27: ISO/IEC 19770-5 IT資産管理の概要と用語ガイドの移行

- 移行先は`/iso-19770-5-guide`。ISOカテゴリーへ追加し、ナビゲーション・E2E一覧を111ルートへ同期。
- 全30見出し・階層目次29リンク・19表の全セル・9図・コールアウト8件・外部リンク18件・チェック8項目・メタ情報3件・注記アイコン8件・ヒーロー・全本文・フッターを固定インベントリで出現順に照合。原本どおりコードブロックは0件。CSS全86ルールと980px境界を保持。
- HTML内の実SVGからラベルの明示改行・形状・接続・点線・双方向矢印・配色を抽出し、共有Mermaidで描画。4幅×CSS読込2順序の8件、9図×4幅の36件、チェック完了表示2件で原本と比較。ノード枠線・接続線の色と太さ・ラベル背景・横スクロールも照合。
- 目次全29アンカーの追従、開閉・背景クリック・Escape・フォーカス復帰・Observer解除を検証。チェック入力・ラベル・行クリックの各操作が一度だけ反転することと、全8項目の完了数・割合・取消線・全解除を確認。SWC開発/本番変換後の全文と構造、Reactの不正DOM警告なしも検証。
- 原本HTMLは`archive/html-archive/iso/Iso-19770-5-guide.html`、MDは`archive/md-archive/iso/Iso-19770-5-guide.md`へ同名で移動。Gitのrename検出100％・追跡登録とSHA-256一致を確認。
- Red先行、CSS、図、チェック操作、目次、ヒーロー、導入、Step 1〜8、Q&A、チェック節、参考資料、調査範囲、フッター、ページ構成、登録、デザイン補正、アーカイブ、仕様書を分割コミット。実装・検証・ステージ・コミットを直列化し、ステージ前の空のインデックスと、各コミット直前の予定パス完全一致・PIIを検査。
- npm経由で対象282件・関連536件・全体7662件（153ファイル）、ビルド・サーバー不要のChromium46件、lint、対象型検査が成功。ビルドは指示により未実施、目視確認はユーザー担当。

## 2026-10-27: ISO/IEC 14496-22 Open Font Formatガイドの移行

- 移行先は`/iso-14496-22-guide`。ISOカテゴリーへ追加し、ナビゲーション・E2E一覧を110ルートへ同期。
- 全47見出し・階層目次46リンク・27表の全セル・10図・コード2例・コールアウト16件・参考リンク22件・ヒーロー・本文・フッターを固定インベントリで出現順に照合。CSS全59ルールと900px境界を保存。
- 原本HTMLの図の接続・ラベルを優先し、共有Mermaidで描画。4幅×CSS読込2順序の8件と、10図×4幅の40件で、原本の計算済みスタイル・ノード形状・配色・グループ背景・接続・矢印・横スクロールを検証。目次全46アンカーの追従・開閉・Escape・フォーカス復帰・Observer解除、SWC開発/本番変換後の全文とコード改行も確認。
- 原本HTMLは`archive/html-archive/iso/Iso-14496-22-guide.html`、MDは`archive/md-archive/iso/Iso-14496-22-guide.md`へ同名で移動。Git追跡とSHA-256一致を確認。同規格の別原稿`Iso-iec-14496-22-2026-beginner-guide.*`は今回の対象外。
- Red先行とカテゴリー別コミットを実施。用語集と目次の混在コミットはユーザー承認を得て分割修復し、修復前後のGitツリー一致を確認。以後はステージ操作を直列化し、各コミット直前に予定パスの完全一致とPIIを検査。
- npm経由で対象304件・関連554件・全体7376件（147ファイル）、ビルド・サーバー不要のChromium48件、lint、対象型検査が成功。ビルドは指示により未実施、目視確認はユーザー担当。全体型検査は他ページのテスト等のエラーで失敗し、今回の移行ファイルには型診断なし。

## 2026-10-27: SbEのMermaid黒塗り修正

- `/specification-by-example-guide`で共有Mermaidのダーク設定にある`mainBkg: #0f2040`が残り、暗い文字と重なっていた問題を修正。ページ側で`mainBkg`・`nodeBorder`・`clusterBkg`・`titleColor`・`edgeLabelBackground`を原本のライト配色へ明示上書き。共有コンポーネントは変更していない。
- 前回のブラウザー検証は共有初期化の`themeVariables`を省略していたため検知できなかった。`components/Mermaid.tsx`の実際の初期化設定を読み、全6図×2幅で原本SVGと配色を比較するよう強化。濃紺ノードで失敗するRedを確認・先行コミットしてから修正。
- ページ対象446件とMermaid契約を含む619件、Chromium22件、全体7067件（142ファイル）、lint、対象型検査が成功。ビルドは実施していない。追加のページ設定回帰テストで、共有ダーク色の上書き漏れを防止。

## 2026-10-27: Specification by Example実践ガイドの移行

- 移行先は`/specification-by-example-guide`。書籍カテゴリーへ登録し、ナビゲーション・E2E一覧を109ルートへ同期。
- 全11セクション・ヒーロー・フッター、31見出し、階層目次18リンク、7表の全セル、6図、Gherkinコード1例、注記29件、参考文献21件、外部リンク61件、アイコン96件、チェック8項目を固定インベントリで出現順に照合。Next.js/SWCの開発・本番変換でも全文とDOMを検証。
- 原本CSS87ルールと900px条件、紙色配色・セリフ体見出し・固定目次・モバイルバー・罫線・コード構文色・図キャプション・参考文献カードを保持。共有/残留CSSによる本文色、表、コード余白、注記、リスト、フッターの干渉を補正。原本のWebフォント指定も継続し、ビルド時の外部取得は追加していない。
- 6図のラベル・接続・配色と左右スクロールを原本SVGと比較。Gherkinは原本指定highlight.js 11.10.0のトークンを固定化し、改行・空行・字下げ・キーワード/文字列の構文色をJSXで再現。ランタイムのhighlight.jsや追加依存は不要。
- チェック全8項目のクリック・Enter・Space・アイコン・取消線・完了数・保存・再読込・不正データ・保存拒否を検証。階層目次の開閉・Escape・フォーカス復帰・全18アンカー追従とObserver解除、子見出し追従中の親章強調も検証。
- npm経由で対象446件、関連692件、全体7067件（142ファイル）、ビルド・サーバー不要のChromium22件（4幅×CSS2順序、2幅×6図、2幅×コード/チェック表示）、lint、対象型検査が成功。本番ビルド未実施、目視確認はユーザー担当。全体型検査の既存エラーは従来どおり対象外。
- Red先行、CSS、図、Gherkin、チェック保存、実践7ステップ、各本文カテゴリー、目次、ページ構成、ナビ登録、原本アーカイブ、デザイン補正、最終整理、仕様書同期を分割コミット。各コミット直前にPII検査。
- 原本HTML・Markdownを`archive/html-archive/books/Specification-by-example-guide.html`・`archive/md-archive/books/Specification-by-example-guide.md`へ同名で移動。Gitのrename検出100%、SHA-256一致、Git追跡を確認。書籍HTML/MDの残存2ペアはCraftsmanとSbEの移行により解消。

## 2026-10-27: Software Testing: A Craftsman’s Approach入門ガイドの移行

- 移行先は`/software-testing-craftsmans-approach-guide`。書籍カテゴリーへ登録し、ナビゲーション・E2E一覧を108ルートへ同期。
- 全16セクション・46見出し・目次16リンク・22表の全セル・11図・コールアウト10件・参考文献17件・外部リンク18件・全文DOMを固定インベントリで出現順に照合。通常コードブロックは原本どおり0件。Next.js/SWCの開発・本番変換でも本文構造を検証。
- 原本CSS全55ルールと900px条件を保持。ダーク配色、固定目次、文字グラデーション、表の余白・罫線・ホバー、ステップ番号と参考文献の書体を再現。共有/残留CSSによる干渉と横長SVGの左端切れを補正。
- 目次のモバイル開閉・Escape・フォーカス復帰・全16セクション追従とObserver解除を検証。共有Mermaidへ原本順に11図が渡ることと実パーサーを確認。ビルド・サーバー不要のChromium30件で4幅×CSS2順序と2幅×11図のラベル・接続・配色・横スクロール両端を比較。
- 原本HTML・Markdownを`archive/html-archive/books/Software-testing-craftsmans-approach-guide.html`・`archive/md-archive/books/Software-testing-craftsmans-approach-guide.md`へ同名で保存。SHA-256一致とGit追跡を検証。既存のTesting Computer SoftwareとWEwLCの原本4ファイルにもGit追跡漏れが見つかり、既存ハッシュ検証を通して別コミットで登録。
- npm経由で対象259件、関連501件、全体6617件（140ファイル）、Chromium30件、lint、対象型検査が成功。全体型検査には既存のテスト等の型エラーが残る。本番ビルド未実施、目視確認はユーザー担当。
- カテゴリー別コミットを実施。追加デザインRedテストのコミット失敗後にCSS補正を書いた手順違反を報告し、ユーザーの「対応して」を受けて復旧。履歴を書き換えず、コミット済みCSSでRedを再現してテストを先行コミットし、Green補正・仕様書同期を分割。各コミット直前にPII検査。

## Core Technologies

- **Framework:** Next.js 16 (App Router), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, PostCSS
- **Runtime / Package Manager:** Bun

## Building and Running

依存関係の管理、スクリプトの実行、および node ツールの実行には、必ず `bun` のみを使用してください。`npm`、`yarn`、または `pnpm` の使用は禁止されています。

> [!IMPORTANT]
> **ビルド実行に関する重要ルール (AIエージェント用規約):**
> **Antigravityのサンドボックス環境においては**、ビルドのバックグラウンド実行が正常にハンドリングされず、
> ビルド待ちの状態が続いてローカルメモリを過度に圧迫し、最終的にクラッシュを引き起こす問題が
> 確認されています。
> そのため、本プロジェクトのルール（`migration-progress-sync.md` や `tdd-mandatory-cycle.md`
> などのゲート条件）でビルドの検証が義務付けられている場合であっても、AIエージェント
> （Antigravity）は**自律的・自動的に本番ビルドコマンド（`bun run build`、`next build` 等）を
> 実行してはなりません（このサンドボックス上の制約は他のあらゆるゲート条件より最優先されます）**。
> ビルド検証が必要な場合は、自らコマンドを実行せず、必ずユーザーにビルドの実行および成否の確認を
> 依頼してください。

- **Install dependencies:**

  ```bash
  bun install
  ```

- **Run development server:**

  ```bash
  bun run dev
  ```

- **Build for production:**

  ```bash
  bun run build
  ```

- **Start production server:**

  ```bash
  bun run start
  ```

- **Run Linter:**

  ```bash
  bun run lint
  ```

## Development Conventions

- **Application Structure:** Uses the Next.js App Router (`app/` directory) for routing and page structure. Reusable UI components are placed in the `components/` directory.
- **Agent Protocol Enforcement (Gate Conditions & Commits):** プロジェクトのドキュメントやルール内で「ゲート条件 (Gate Condition)」「必ず実施する」「同期ルール」として明記されたプロセス（例: `git commit`、`docs/MIGRATION_PROGRESS.md` の更新）は、**AI エージェントがユーザーの許可を待たずに自律的・自動的に実行しなければならない厳格なプロトコル**です。タスクの完了を報告する前に、ルールに指定された `git add` と `git commit`、およびファイルの更新をステップバイステップで確実に実行してください。これらの手順をスキップしたり、ユーザーに実行の許可を求めたりすることは禁止されています。
- **Styling Approach:** Tailwind CSS utility classes are the primary styling mechanism.
- **Content Language:** The main content and documentation are written in Japanese. Always preserve this localized context when updating or adding new content.
- **Markdown Conventions:** すべての Markdown ドキュメントは `.markdownlint.json` に準拠する必要があります。
  - **コミット前必須検証 (Gate Condition):** Markdownファイルを新規作成または編集した場合は、コミットする前に必ず `.claude/skills/markdown-formatter/SKILL.md` をロードし、そこに定義されたリント検証コマンド（`bun node_modules/markdownlint-cli/markdownlint.js <file_path>` など）を実行して、エラーが 0 件であることを検証しなければなりません。
  - 一般的な問題（見出しのスペース、リンク、末尾の改行など）を自動整形して修正するには、次を実行します: `bun scripts/format-markdown.mjs <file>`
  - **エラー修正の原則:** マークダウンのエラー修正時は、スクリプトによる一括修正を禁止します。無理に一括での修正を行わず、必ずステップバイステップで確実に正確な修正を最優先してください。
- **Markdown Standardization:** 変換スクリプトに頼るのではなく、Markdown ソースファイル自体が標準的な仕様に準拠していることを最優先します。
  - 言語指定のないコードブロック（`` ``` ``）によるテキストの囲みは避け、引用（>）や適切な見出しを使用してください。
  - 表や図（Mermaid）はコードブロック内に閉じ込めず、Markdown 上で直接レンダリング可能な形で記述してください。
- **Educational Tone:** The codebase serves an educational purpose. Code additions should be well-documented and follow the structured, step-by-step explanatory format present in existing pages like `app/page.tsx` and `app/ai-test-guide/page.tsx`.
- **HTML Migration Workflow:** 静的 HTML ページを Next.js に移行する際のワークフロー:
    1. `scripts/extract-css.mjs` を使用して、CSS 変数を抽出しマッピングします。
    2. `scripts/html-to-tsx.mjs` を使用して、HTML を JSX に変換します。
    3. CSS の詳細度やスコープの問題を手動で修正します（すべてのスタイルがページ固有のクラスの下にスコープされていることを確認してください）。
    4. 元の HTML ファイルを `archive/html-archive/` ディレクトリ（カテゴリ別サブディレクトリあり: `cicd/` `ctal/` `ctel/` `ctfl/` `tools/` など）に移動します。
    5. `lib/navigation.ts` の `NAV_ITEMS` と `e2e/pages.ts` の `PAGES` / `EXPECTED_PAGE_COUNT` に新ルートを追加し、`CLAUDE.md`, `GEMINI.md` のアーキテクチャ情報を更新します（`components/Header.tsx` は `NAV_ITEMS` から描画するため直接編集は不要）。
- **PII / 絶対パスの記載禁止 (CRITICAL):** コミット予定のすべてのファイル（ドキュメント、設定、コード、コメント等）に、ユーザー名を含むローカルの絶対パス（`/Users/` や `/home/`、`C:\Users\` 等）を記載してはなりません。これは個人情報（PII）の流出につながる重大なセキュリティ違反です。AI エージェントは、**コミットを適用する前に、必ず `git diff --cached` でコミット差分を走査し、プレースホルダー (`johndoe`) 以外の絶対パスやローカル名が混入していないことを機械的（`grep`等）に検証するプロセスを自律的かつ自動的に実行してください。**
- **開発・デバッグ用スクリプトの管理ルール:** 開発中に作成するスクリプトは、その目的が一時的なものか永続的なものかを明確にし、厳格に管理しなければなりません。
  - **一時的なスクリプト (デバッグ・調査用):** ログ解析、単発のデータ抽出等の目的で作成したスクリプトおよび出力された一時ファイルは、作業完了後またはコミット前に必ずリポジトリから物理削除し、決してコミットに含めてはなりません。特にローカル絶対パス（PII）を含むものは、流出防止のため即時削除を徹底してください。作成時にはユーザーに「一時的なスクリプトであること」を明確に報告します。
  - **永続的なスクリプト (プロジェクト機能・テスト用):** プロジェクトの機能、自動テスト、CI/CDなどで永続的に使用するスクリプトは、作成時にその役割と設置場所を明記して報告します。当然、これらのファイルには PII やローカル絶対パスが含まれていないことを事前に走査・検証しなければなりません。

## 2026-10-25: Testing Computer Software入門ガイドの移行

- 移行先は`/testing-computer-software-guide`。書籍カテゴリーへ登録し、ナビ・E2E一覧を107ルートへ同期。
- 全18セクション・30見出し・目次18リンク・10表の全セル・9図・注記8件・参考文献16件・外部リンク16件・チェック10項目・実践8ステップ・アイコン32件・ヒーロー・全本文・フッターを固定インベントリで出現順に照合。コードブロックは原本どおり0件。
- 原本CSS全88ルールと960px条件を保持。紙色背景・見出しの文字グラデーション・固定目次・表の交互背景・チェックの疑似要素・ステップ番号を保存。共有/残留CSSによる本文色、表の書体/罫線/余白、装飾リストの字下げ、注記見出し、参考文献、ボタンの既定スタイル、全画面装飾への干渉を補正。
- HTML内の9定義を共有Mermaidで描画し、実パーサー・共有レンダラーへの出現順・実SVGのラベル/接続/点線/配色と横スクロール両端を検証。目次の開閉・Escape・フォーカス復帰・全18セクション追従とObserver解除、チェック10項目の全選択/解除/完了数、SWC開発/本番変換後の全文とDOMを照合。
- Red先行、CSS、図、チェック、書籍紹介、基礎、戦略・設計、管理・運用、実践、参考文献、目次、ヒーロー、ページ構成、登録、アーカイブ、補正、仕様書を分割コミット。各コミット直前にPII検査。
- 原本HTMLは`archive/html-archive/books/Testing-computer-software-guide.html`、MDは`archive/md-archive/books/Testing-computer-software-guide.md`へ同名で移動。Git追跡とSHA-256一致を確認。
- npm経由で対象295件、全体6321件（138ファイル）、サーバー・ビルド不要のブラウザー26件（4幅×CSS2読込順＋2幅×9図）、lint、対象型検査が成功。本番ビルド未実施、目視確認はユーザー担当。全体型検査の既存エラーは従来どおり対象外。

## 2026-10-25: Working Effectively with Legacy Codeガイドの移行

- 移行先は`/working-effectively-with-legacy-code-guide`。書籍カテゴリーへ登録し、ナビ・E2E一覧を106ルートへ同期。
- 原本の全19セクション・20見出し・目次19リンク・9表の全セル・11図・JavaScriptコード1例・コールアウト4件・参考文献26件・外部リンク27件・チェック8項目・書誌カード6件・アイコン19件・ヒーロー・全本文・フッターを固定インベントリで出現順に照合。
- 原本CSS全84ルールと560/820/960px条件を保持。紙色テーマ・藍色ヒーロー・固定サイドバー・コード構文色を再現し、共有/残留CSSの本文色・表の最小幅/書体/大文字化/罫線/余白・参考文献・フッター・全画面装飾への干渉を補正。
- 図は原本HTML内の全11定義を共有Mermaidで描画。原本ラベル・接続・点線・配色と左右スクロール端を実SVGで比較。目次の開閉・スクロール追従・Escape・フォーカス復帰・Observer解除、チェック全8項目の選択/解除/完了件数、SWC開発/本番変換後の全文・構造・コード改行を検証。
- Red先行、CSS、図、チェック、コード、導入、基礎概念、5ステップ、実践テクニック、応用、目次、ヒーロー、ページ構成、登録、アーカイブ、補正、仕様書を分割コミット。各コミット直前にPII検査。
- 原本HTMLは`archive/html-archive/books/Working-effectively-with-legacy-code-guide.html`、MDは`archive/md-archive/books/Working-effectively-with-legacy-code-guide.md`へ同名で移動し、Git追跡とSHA-256一致を検証。
- npm経由で対象283件、全体6024件（137ファイル）、ビルド・サーバー不要のブラウザー34件（6幅×CSS読込2順序＋2幅×11図）、lint、対象型検査が成功。全体型検査には既存の型エラーが残存。本番ビルド未実施、目視確認はユーザー担当。

## Migrated Pages (Tracking)

- `app/iso-27799-2025-guide/page.tsx`（医療情報セキュリティ、`NavBar.tsx`・専用CSS、全19本文カテゴリー・ヒーロー・フッター、チェック10項目、Mermaid11図）

- `app/iso-23009-1-2026-guide/page.tsx`（MPEG-DASH第6版、`NavBar.tsx`・専用CSS、全17本文カテゴリー・ヒーロー・フッター、XML2例、Mermaid6図）

- `app/specification-by-example-guide/page.tsx`（同名CSS、13本文ブロック、実践7ステップ、階層目次18リンク、紙色テーマ、6図、Gherkin1例、保存チェック8項目。原本446件・Chromium22件）
- `app/software-testing-craftsmans-approach-guide/page.tsx`（同名CSS、`Section00.tsx`〜`Section15.tsx`、`NavBar.tsx`、`toc.ts`、`Diagram.tsx`、`diagrams.ts`。ダーク配色・16目次リンク・11図・原本照合259件）
- `app/testing-computer-software-guide/page.tsx`（`NavBar.tsx`・同名CSS・6カテゴリー・紙色テーマ・9図・チェック10項目。HTML/MDは`archive/`へ移動済み）

- `app/working-effectively-with-legacy-code-guide/page.tsx`（紙色テーマ、`NavBar.tsx`、同名CSS、5カテゴリー・11図・8チェック。原本HTML/MDは`archive/`へ移動済み）

- `app/page.tsx` (ガイドライブラリ index — 全ガイドをカテゴリ別カードで一覧、検索付き)
- `app/GuideIndex.tsx` (index の検索 + レベル別セクション、`'use client'`)
- `app/modern-software-testing-complete-guide-2025/page.tsx` (現代ソフトウェアテスト完全ガイド 2025 — 旧ホーム本文の移設先)
- `app/acceptance-testing-guide/page.tsx` (受入テスト完全ガイド、`NavBar.tsx` 付き)
- `app/ai-test-guide/page.tsx` (AI テスト基礎)
- `app/bdd-testing-guide/page.tsx` (BDD（ビヘイビア駆動開発）完全ガイド)
- `app/e2e-testing-guide/page.tsx` (E2Eテスト完全ガイド、`NavBar.tsx` 付き)
- `app/integration-functional-testing-guide/page.tsx` (統合/機能テスト完全ガイド)
- `app/integration-system-testing-guide/page.tsx` (インテグレーション/システムテストガイド)
- `app/software-testing-methodologies-guide/page.tsx` (テスト手法ガイド)
- `app/unit-testing-guide/page.tsx` (ユニットテスト完全ガイド)
- `app/istqb-ctfl-at-complete-guide/page.tsx` (アジャイル(CTFL-AT)完全ガイド)
- `app/istqb-ctfl-at-chapter1-agile-software-development/page.tsx` (アジャイル(CTFL-AT)1章ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctfl-at-chapter2-fundamental-agile-testing-principles/page.tsx` (アジャイル(CTFL-AT)2章ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctfl-at-chapter3-agile-testing-techniques-tools/page.tsx` (アジャイル(CTFL-AT)3章ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctfl-complete-guide/page.tsx` (ISTQB CTFL v4.0 完全解説ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter1-fundamentals/page.tsx` (CTFL v4.0 第1章 テストの基礎、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter2-sdlc-and-testing/page.tsx` (CTFL v4.0 第2章 SDLCとテスト、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter3-static-testing/page.tsx` (CTFL v4.0 第3章 静的テスト、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter4-test-analysis-and-design/page.tsx` (CTFL v4.0 第4章 テスト分析・設計、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter5-test-management/page.tsx` (CTFL v4.0 第5章 テスト活動の管理、`NavBar.tsx` 付き)
- `app/istqb-ctfl-v4-chapter6-test-tools/page.tsx` (CTFL v4.0 第6章 テストツール、`NavBar.tsx` 付き)
- `app/istqb-ctal-tae-complete-guide/page.tsx` (テスト自動化 CTAL-TAE 完全ガイド)
- `app/istqb-ctal-tae-chapter1-introduction-and-objectives/page.tsx` (CTAL-TAE 第1章 テスト自動化の導入と目的、`NavBar.tsx` 付き)
- `app/istqb-ctal-tae-chapter2-preparing-for-test-automation/page.tsx` (CTAL-TAE 第2章 テスト自動化の準備、`NavBar.tsx` 付き)
- `app/istqb-ctal-tae-chapter3-test-automation-architecture/page.tsx` (CTAL-TAE 第3章 テスト自動化アーキテクチャ、`NavBar.tsx` 付き)
- `app/istqb-ctal-tae-chapter4-implementing-test-automation/page.tsx` (CTAL-TAE 第4章 テスト自動化の実装、`NavBar.tsx` 付き)
- `app/istqb-ctal-tae-chapter5-implementation-deployment-strategies/page.tsx` (CTAL-TAE 第5章 実装・デプロイ戦略、`NavBar.tsx`・`diagrams.ts`・専用CSS付き)
- `app/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics/page.tsx` (CTAL-TAE 第6章 レポートとメトリクス、カテゴリー別本文・`NavBar.tsx`・`ChecklistCard.tsx`・図定義・専用CSS付き)
- `app/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution/page.tsx` (CTAL-TAE 第7章 テスト自動化ソリューションの検証、カテゴリー別本文・静的構文色・目次と進捗・図定義・専用CSS付き)
- `app/istqb-ctal-tae-chapter8-continuous-improvement/page.tsx` (CTAL-TAE第8章 継続的改善、本文8カテゴリー・目次70リンク・16図・構文色付きコード6例・専用ライトCSS)
- `app/istqb-ctal-ta-complete-guide/page.tsx` (テストアナリスト CTAL-TA 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-ta-chapter1-test-process/page.tsx` (CTAL-TA 第1章 テストプロセス、`NavBar.tsx` 付き)
- `app/istqb-ctal-ta-chapter2-risk-based-testing/page.tsx` (CTAL-TA 第2章 リスクベースドテスト、`NavBar.tsx` 付き)
- `app/istqb-ctal-ta-chapter3-test-analysis-and-design/page.tsx` (CTAL-TA 第3章 テスト分析とテスト設計、`NavBar.tsx` 付き)
- `app/istqb-ctal-ta-chapter4-quality-characteristics/page.tsx` (CTAL-TA 第4章 品質特性のテスト、`NavBar.tsx` 付き)
- `app/istqb-ctal-ta-chapter5-defect-prevention/page.tsx` (CTAL-TA 第5章 ソフトウェア欠陥防止、TOCナビ付き)
- `app/istqb-ctal-tm-chapter1-managing-the-test-activities/page.tsx` (CTAL-TM 第1章 テスト活動の管理、`NavBar.tsx` 付き)
- `app/istqb-ctal-tm-chapter2-managing-the-product/page.tsx` (CTAL-TM 第2章 プロダクトのマネジメント、`NavBar.tsx` 付き)
- `app/istqb-ctal-tm-chapter3-managing-the-team/page.tsx` (CTAL-TM 第3章 チームの管理、`NavBar.tsx` 付き)
- `app/istqb-ctal-tm-complete-guide/page.tsx` (テスト管理 CTAL-TM 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-tta-complete-guide/page.tsx` (テクニカルテストアナリスト(CTAL-TTA)完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-att-complete-guide/page.tsx` (アジャイルテスト担当者 CTAL-ATT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctal-atlas-complete-guide/page.tsx` (アジャイルテストリーダーシップ CT-ATLaS 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-ai-complete-guide/page.tsx` (AIテスト CT-AI 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-complete-guide/page.tsx` (GenAIテスト CT-GenAI 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-chapter1-introduction/page.tsx` (CT-GenAI 第1章 生成AIソフトウェアテスト入門完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-chapter2-prompt-engineering/page.tsx` (CT-GenAI 第2章 プロンプトエンジニアリング完全解説ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-chapter3-risk-management/page.tsx` (CT-GenAI 第3章 生成AIのリスク管理完全解説ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-chapter4-llm-powered-solutions/page.tsx` (CT-GenAI 第4章 LLM搭載テストインフラ完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-chapter5-deploying-and-integrating/page.tsx` (CT-GenAI 第5章 テスト組織における生成AIの導入と統合完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-mbt-complete-guide/page.tsx` (モデルベーステスト CT-MBT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-act-complete-guide/page.tsx` (受入テスト CT-AcT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-aut-complete-guide/page.tsx` (自動車ソフトウェアテスター CT-AuT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-mat-complete-guide/page.tsx` (モバイルアプリテスト CT-MAT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-sec-complete-guide/page.tsx` (セキュリティテストガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-ste-complete-guide/page.tsx` (セキュリティテストエンジニア(CT-STE)ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-game-complete-guide/page.tsx` (ゲームテスト CT-GaMe 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-gt-complete-guide/page.tsx` (ギャンブル産業テスター CT-GT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-ft-complete-guide/page.tsx` (金融テスト CT-FT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-pt-complete-guide/page.tsx` (パフォーマンステスト CT-PT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-ut-complete-guide/page.tsx` (ユーザビリティテスト CT-UT 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-tas-complete-guide/page.tsx` (テスト自動化戦略 CT-TAS 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-itp-atp-complete-guide/page.tsx` (テストプロセス評価 CTEL-ATP 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-itp-itpi-complete-guide/page.tsx` (テストプロセス改善実装 CTEL-ITPI 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-tm-sm-complete-guide/page.tsx` (テスト管理戦略 CTEL-TM-SM 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-tm-otm-complete-guide/page.tsx` (オペレーショナルテスト管理 CTEL-TM-OTM 完全ガイド、`NavBar.tsx` 付き)
- `app/istqb-ctel-tm-mtt-complete-guide/page.tsx` (テストチーム管理 CTEL-TM-MTT 完全ガイド、`NavBar.tsx` 付き)
- `app/github-actions/page.tsx` (GitHub Actions 完全ガイド 〜初学者向けステップバイステップ解説〜、`NavBar.tsx` 付き)
- `app/github-actions-guide/page.tsx` (GitHub Actions 中級〜上級者向け完全ガイド、`NavBar.tsx` 付き)
- `app/playwright-beginner-guide/page.tsx` (Playwright 完全入門ガイド 〜初学者のためのステップバイステップ解説〜、`NavBar.tsx` 付き)
- `app/playwright-intermediate-advanced-guide/page.tsx` (Playwright 実践ガイド 〜中級者から上級者のためのステップバイステップ解説〜、`NavBar.tsx` 付き)
- `app/cucumber-beginner-guide/page.tsx` (Cucumber 入門ガイド 〜BDDではじめる自動テスト〜、`NavBar.tsx` 付き)
- `app/cypress-beginner-guide/page.tsx` (Cypress 入門ガイド 〜初学者のためのステップバイステップ解説〜、`NavBar.tsx` 付き)
- `app/selenium-beginner-guide/page.tsx` (Selenium 完全ガイド 〜初心者のためのステップバイステップ解説〜、`NavBar.tsx` 付き)
- `app/clean-code-cookbook-guide/page.tsx` (Clean Code Cookbook 実践ガイド、`NavBar.tsx` 付き)
- `app/the-way-of-the-web-tester-guide/page.tsx` (The Way of the Web Tester 実践ガイド、`NavBar.tsx` 付き)
- `app/testing-web-apis-guide/page.tsx` (Web APIテスト実践ガイド、`NavBar.tsx` 付き)
- `app/software-test-design-guide/page.tsx` (ソフトウェアテスト設計実践ガイド、`NavBar.tsx` 付き)
- `app/secure-by-design-guide/page.tsx` (セキュア・バイ・デザイン実践ガイド、`NavBar.tsx` 付き)
- `app/sonarqube-intermediate-guide/page.tsx` (SonarQube 完全解説ガイド、`NavBar.tsx` 付き)
- `app/how-google-tests-software-guide/page.tsx` (How Google Tests Software 完全ガイド、`NavBar.tsx` 付き)
- `app/leading-quality-guide/page.tsx` (Leading Quality 実践ガイド、`NavBar.tsx` 付き)
- `app/agile-testing-practical-guide/page.tsx` (Agile Testing 実践ガイド、`NavBar.tsx` 付き)
- `app/explore-it-guide/page.tsx` (Explore It! 探索的テスト実践ガイド、`NavBar.tsx` 付き)
- `app/owasp-zap-beginner-guide/page.tsx` (OWASP ZAP 完全ガイド、`NavBar.tsx` 付き)
- `app/lessons-learned-in-software-testing-guide/page.tsx` (Lessons Learned in Software Testing 実践ガイド、`NavBar.tsx` 付き)
- `app/art-of-software-testing-guide/page.tsx` (『The Art of Software Testing』から学ぶソフトウェアテスト実践ガイド、`NavBar.tsx` 付き)
- `app/test-driven-development-by-example-guide/page.tsx` (Test-Driven Development: By Example 実践ガイド、`NavBar.tsx` 付き)
- `app/unit-testing-principles-practices-patterns-guide/page.tsx` (Unit Testing Principles, Practices, and Patterns 完全ガイド、`NavBar.tsx` 付き)
- `app/component-based-testing-qa-guide/page.tsx` (コンポーネントベースソフトウェアシステムのテストと品質保証完全ガイド、`NavBar.tsx` 付き)
- `app/perfect-software-guide/page.tsx` (Perfect Software 実践ガイド、`NavBar.tsx` 付き)
- `app/software-testing-with-generative-ai-guide/page.tsx` (生成AIとソフトウェアテスト実践ガイド、`NavBar.tsx` 付き)
- `app/ai-driven-software-testing-guide/page.tsx` (AI駆動ソフトウェアテスト入門ガイド、`NavBar.tsx` 付き)
- `app/appium-essentials-guide/page.tsx` (Appium Essentials 完全ガイド、`NavBar.tsx` 付き)
- `app/testing-ai-confidence-engineering-guide/page.tsx` (Testing AI 完全ガイド、`NavBar.tsx` 付き)
- `app/automating-data-quality-monitoring-guide/page.tsx` (データ品質モニタリング自動化ガイド、`NavBar.tsx` 付き)
- `app/langgraph-qa-agent-guide/page.tsx` (LangGraphとNeo4jによるQAエージェント構築ガイド、`NavBar.tsx` 付き)
- `app/istqb-ct-genai-study-guide/page.tsx` (CT-GenAI完全学習ガイド、既存画面と併存、`NavBar.tsx` 付き)
- `app/beautiful-testing-guide/page.tsx` (Beautiful Testing ガイド、`NavBar.tsx` 付き)
- `app/quality-is-free-guide/page.tsx` (Quality Is Free入門、紙色テーマ・全16セクション・目次15リンク・8図・6表・チェック11項目)
- `app/iec-62304-beginner-guide/page.tsx`（ダーク配色・全22セクション・目次50リンク・18図・37表。`NavBar.tsx`・`toc.ts`・`Diagram.tsx`・`diagrams.ts`・専用CSSで構成）
- `app/beyond-legacy-code-guide/page.tsx` (Beyond Legacy Code 実践ガイド、`NavBar.tsx` 付き)
- `app/iso-29119-1-2022-guide/page.tsx` (ISO/IEC/IEEE 29119-1:2022 完全解説ガイド、`NavBar.tsx` 付き)
- `app/iso-9075-1-guide/page.tsx` (ISO/IEC 9075-1 SQL/Framework ガイド、ダーク配色・目次34リンク・9図・19表・SQLコード3例。`NavBar.tsx`・`toc.ts`・`Diagram.tsx`・`diagrams.ts`・専用CSSで構成)
- `app/iso-11179-1-2023-guide/page.tsx` (ISO/IEC 11179-1:2023 メタデータレジストリガイド、ダーク配色・目次57リンク・14図・32表・YAMLコード1例・チェック6項目。`NavBar.tsx`・`toc.ts`・`Checklist.tsx`・`Diagram.tsx`・`diagrams.ts`・専用CSSで構成)

CT-GenAI学習ガイドの横スクロールは外側`.mermaid-container`に集約し、内側`.mermaid-wrapper`を`display: block; overflow: visible`にする。広いSVGの中央寄せによる負のスクロール原点を防止する。`bunx playwright test --config playwright.mermaid-css.config.ts`でビルドなしのCSS座標検証を実行できる。

## HTML → Next.js 移行 注意事項

移行時に頻発する問題。詳細は `.claude/skills/html-to-nextjs-migration/SKILL.md` および **`.claude/rules/tdd-mandatory-cycle.md` (TDD 必須サイクルルール)** を参照。

### `.code-block` 内の改行

`{"\n"}` は `.code-block`（`white-space: normal`）では改行にならずスペース扱いになる。
各行を必ず `<div className="code-line">` でラップすること（`.code-line` には `white-space: pre` が定義済み）。

```tsx
{/* ❌ NG */}
<div className="code-block">
  <span className="code-cyan">Given</span>{"\n"}
  <span className="code-white">条件</span>
</div>

{/* ✅ OK */}
<div className="code-block">
  <div className="code-line"><span className="code-cyan">Given</span><span className="code-white"> 条件</span></div>
</div>
```

### グローバルナビ（ドロワー / ガイド index）

- ルートの Single Source of Truth は `lib/navigation.ts` の `NAV_ITEMS`（111 件）。
  `components/Header.tsx` のドロワーと `app/page.tsx` のガイドライブラリ index が共用する
- 新ガイド追加時は `NAV_ITEMS` に `{ href, label, description, category }` を 1 件追加するだけでよい。
  `description` は必須（80 文字以内、index のカード本文かつ検索対象）
- `e2e/pages.ts` にも同じ path を追加し `EXPECTED_PAGE_COUNT` を更新する。
  片方だけの更新は `tests/lib/navigation-e2e-sync.test.ts` が検知して落ちる
- ドロワーはガイド数に対してスケールするよう、検索ボックス + `<details>` アコーディオン方式。
  既定では現在ページのカテゴリのみ展開し、検索中は残ったカテゴリを全展開する
- index（`/`）は ISTQB の認定レベルの階梯を情報構造として使う。ヒーローは階段で、段の縦位置が
  資格レベルの高さ、バーの伸びがそのレベルのガイド数。全段が同じ列定義を共有するためバーの軌道幅は等しく、
  段ごとに列幅を変えると量の比較が壊れる。カテゴリ名はタッチでも読めるよう常時表示する。CI/CD・ツール・書籍は階梯の段ではないため `data-track="practice"`
  として「実務の棚」に分ける。いずれも装飾ではないので変更時に意味を壊さないこと
- レベル色（`--level`）は寒色 → 暖色の 1 本のランプ。定義は `app/globals.css` の
  `[data-category='...']` にあり、index とドロワーがこの 1 箇所を共有する
- 新カテゴリを足す場合は `NavCategory` / `CATEGORY_ORDER` / `CATEGORY_TITLES` / `CATEGORY_CODES` の
  4 箇所と、`app/globals.css` の `[data-category='...']` のレベル色を同期する
- `summary` の `onClick` は `preventDefault()` でネイティブトグルを止め、開閉を React state に一本化している。
  Enter / Space も click を発火するためキーボード操作は維持される

### ページ固有スティッキーナビ

- HTML の `<nav>`（ページ内アンカー付き）はグローバル Header とは別物。削除せず `'use client'` コンポーネントとして移行する
- CSS: `position: sticky; top: 60px; z-index: 40`（Header は `fixed` / 高さ 60px / `z-50`）
- `IntersectionObserver` は `useEffect` で設定し、クリーンアップで `obs.disconnect()` を呼ぶ

### CSSセレクタのスコープ（クラス重複）

- ページ固有のCSSを作成する際、`.istqb-ctal-tm-page` のようなページ固有クラスを親に指定しますが、子要素のモディファイアなどで再度同じクラスを重複させないように注意してください。
- ❌ NG: `.page-class .alert.page-class .green`
- ✅ OK: `.page-class .alert.green`

### アクセシビリティとZ-indexの罠

- **Z-index オーバーレイ**: `::before` や `::after` で画面全体にスキャンラインなどのテクスチャを配置する際、クリックを妨害しないように必ず `pointer-events: none` と背面の `z-index: 0`（または `-1`）を指定してください。
- **`prefers-reduced-motion` の罠**: 進捗バーなど `max-width: 0` から `100%` へアニメーションで伸ばす要素は、「視覚効果を減らす」環境下で `animation: none` となると幅 0 のまま消えてしまいます。必ず `@media (prefers-reduced-motion: reduce)` ブロック内で `max-width: 100% !important;` などを設定し、最終的な視認性を確保してください。
- **ResizeObserver による無限ループ防止**: DisclaimerBanner などで要素の高さを監視し、CSS変数を介して他の要素に高さを伝える場合、監視対象の高さが微小に変化し続けることで無限レイアウト再計算ループが発生する危険があります。高さを更新する際は、前回保存した高さ（`lastHeight`）と現在の高さの差分が実際に異なる場合のみ更新するように、必ずガード処理を入れてください。

### テーブル文字色と `globals.css` 干渉リセット（CRITICAL GOTCHA）

- `globals.css` に定義された要素セレクタ（特に `td { color: var(--color-text-secondary); }`（`#8ea3c3`、薄い青灰色）、`th { white-space: nowrap; }`、`td strong { color: var(--color-text-primary); }`、`tr:hover td` 等）が、ページ固有のテーブルに干渉して文字色を薄くさせたりレイアウトを崩す重大な不具合が頻発します。
- ページ固有 CSS では必ず `.my-page-layout tbody td, .my-page-layout td` に対して `color: var(--ink) !important;` および `font-size: 1rem !important;` を指定し、`thead th`、`td strong`、`td code`、`tbody tr:hover td` などの完全リセットを適用してください（詳細は `.claude/skills/html-to-nextjs-migration/SKILL.md` の Phase 3b 参照）。

### 構成要素インベントリ作成と網羅的テストスイート（抜け漏れ防止の絶対ルール）

- 移行着手前に元HTMLの全構成要素（H1〜H4見出し、全TOCリンク、全Mermaid図解、全テーブル、全コードブロック、全コールアウト・カード、全参考文献）を棚卸しする「構成要素インベントリ」を作成してください。
- Redフェーズのテストスイート（`tests/<page-slug>/page.test.tsx`）では、上記インベントリの全項目を1対1でアサーションとして網羅し、デザインや図解・表の抜け漏れを機械的にゼロにしてください。

## 移行状況テーブル

### 移行完了（html-archive/ に移動済み）

| 元 HTML | 移行先ルート | 備考 |
|---|---|---|
| `acceptance-testing-guide.html` | `/acceptance-testing-guide` | ✅ |
| `e2e-testing-guide.html` | `/e2e-testing-guide` | ✅ |
| `integration-functional-testing-guide.html` | `/integration-functional-testing-guide` | ✅ |
| `integration-system-testing-guide.html` | `/integration-system-testing-guide` | ✅ |
| `istqb-ct-ai-complete-guide.html` | `/istqb-ct-ai-complete-guide` | ✅ NavBar あり |
| `istqb-ct-genai-complete-guide.html` | `/istqb-ct-genai-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-mbt-complete-guide.html` | `/istqb-ct-mbt-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-aut-complete-guide.html` | `/istqb-ct-aut-complete-guide` | ✅ NavBar あり |
| `istqb-ct-pt-complete-guide.html` | `/istqb-ct-pt-complete-guide` | ✅ NavBar あり |
| `istqb-ct-act-complete-guide.html` | `/istqb-ct-act-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-mat-complete-guide.html` | `/istqb-ct-mat-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-sec-complete-guide.html` | `/istqb-ct-sec-complete-guide` | ✅ NavBar + aria-current あり |
| `istqb-ct-ste-complete-guide.html` | `/istqb-ct-ste-complete-guide` | ✅ NavBar あり |
| `istqb-ct-game-complete-guide.html` | `/istqb-ct-game-complete-guide` | ✅ NavBar + aria-current あり |
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
| `Software-test-design-guide.html` | `/software-test-design-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Secure-by-design-guide.html` | `/secure-by-design-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Playwright-intermediate-advanced-guide.html` | `/playwright-intermediate-advanced-guide` | ✅ NavBar + aria-current あり (archive/html-archive/playwright/) |
| `Sonarqube-intermediate.html` | `/sonarqube-intermediate-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `How-google-tests-software-guide.html` | `/how-google-tests-software-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Leading-quality-guide.html` | `/leading-quality-guide` | ✅ NavBar あり (archive/html-archive/books/) |
| `Agile-testing-practical-guide.html` | `/agile-testing-practical-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Istqb-ctfl-v4-chapter6.html` | `/istqb-ctfl-v4-chapter6-test-tools` | ✅ NavBar + aria-current あり (archive/html-archive/ctfl/) |
| `Explore-it-guide.html` | `/explore-it-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Owasp-zap-beginner-guide.html` | `/owasp-zap-beginner-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `Lessons-learned-in-software-testing-guide.html` | `/lessons-learned-in-software-testing-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Art-of-software-testing-guide.html` | `/art-of-software-testing-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Test-driven-development-by-example-guide.html` | `/test-driven-development-by-example-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Unit-testing-principles-practices-patterns-guide.html` | `/unit-testing-principles-practices-patterns-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Component-based-testing-qa-guide.html` | `/component-based-testing-qa-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Perfect-software-guide.html` | `/perfect-software-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Software-testing-with-generative-ai-guide.html` | `/software-testing-with-generative-ai-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Ai-driven-software-testing-guide.html` | `/ai-driven-software-testing-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Appium-essentials-guide.html` | `/appium-essentials-guide` | ✅ NavBar + aria-current あり (archive/html-archive/tools/) |
| `Testing-ai-confidence-engineering-guide.html` | `/testing-ai-confidence-engineering-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Beyond-legacy-code-guide.html` | `/beyond-legacy-code-guide` | ✅ 階層目次18リンク・Mermaid図6件・紙色テーマ。HTML/MDはarchive配下で追跡管理 |
| `Automating-data-quality-monitoring-guide.html` | `/automating-data-quality-monitoring-guide` | ✅ NavBar + aria-current あり (archive/html-archive/books/) |
| `Langgraph-qa-agent-guide.html` | `/langgraph-qa-agent-guide` | ✅ NavBar + aria-current あり (tests/fixtures/source-html/、HTML・MD両方) |
| `Ct-genai-study-guide.html` | `/istqb-ct-genai-study-guide` | ✅ 既存CT-GenAI画面と併存。目次25リンク・Mermaid図13件。HTML/MDはarchive配下で追跡管理 |
| `Beautiful-testing-guide.html` | `/beautiful-testing-guide` | ✅ モバイル目次・チェックリスト・Mermaid図8件あり (tests/fixtures/source-html/、HTML・MD両方) |
| `Ctal-ta-v4.0-ch1.html` | `/istqb-ctal-ta-chapter1-test-process` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-ta-v4.0-ch2.html` | `/istqb-ctal-ta-chapter2-risk-based-testing` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-ta-v4-chapter3-testanalysisanddesign-guide.html` | `/istqb-ctal-ta-chapter3-test-analysis-and-design` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-ta-v4-ch4-quality-characteristics-guide.html` | `/istqb-ctal-ta-chapter4-quality-characteristics` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-tm-v3.0-ch1-managing-the-test-activities.html` | `/istqb-ctal-tm-chapter1-managing-the-test-activities` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-tm-v3.0-ch2-managing-the-product.html` | `/istqb-ctal-tm-chapter2-managing-the-product` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-tm-v3-ch3-managing-the-team-guide.html` | `/istqb-ctal-tm-chapter3-managing-the-team` | ✅ NavBar + aria-current あり (archive/html-archive/ctal/) |
| `Ctal-ta-v4-ch5-software-defect-prevention.html` | `/istqb-ctal-ta-chapter5-defect-prevention` | ✅ スティッキーTOCナビ + aria-current あり (archive/html-archive/ctal/) |
| `Ct-genai-chapter1.html` | `/istqb-ct-genai-chapter1-introduction` | ✅ NavBar + aria-current あり (archive/html-archive/ct-specialist/) |
| `Ct-genai-chapter2.html` | `/istqb-ct-genai-chapter2-prompt-engineering` | ✅ NavBar + aria-current あり (archive/html-archive/ct-specialist/) |
| `Ct-genai-chapter3.html` | `/istqb-ct-genai-chapter3-risk-management` | ✅ NavBar + aria-current あり (archive/html-archive/ct-specialist/) |
| `Ctgenai-ch4-llm-powered-solutions-guide.html` | `/istqb-ct-genai-chapter4-llm-powered-solutions` | ✅ NavBar + aria-current あり (archive/html-archive/ct-specialist/) |
| `Ct-genai-chapter5.html` | `/istqb-ct-genai-chapter5-deploying-and-integrating` | ✅ NavBar + aria-current あり (archive/html-archive/ct-specialist/) |
| `Iso-29119-1-2022-guide.html` | `/iso-29119-1-2022-guide` | ✅ スティッキーNavBar + Mermaid図19件 + 全39表 + 目次69リンク (archive/html-archive/iso/) |
| `Ctal-tae-ch3-test-automation-architecture.html` | `/istqb-ctal-tae-chapter3-test-automation-architecture` | ✅ スティッキーNavBar + Mermaid図9件 + 全8表 + 目次11リンク (archive/html-archive/ctal/) |
| `Ctal-tae-v2.0-ch1-introduction-and-objectives.html` | `/istqb-ctal-tae-chapter1-introduction-and-objectives` | ✅ スティッキーNavBar + Mermaid図7件 + 全5表 + 目次8リンク + チェックリスト (archive/html-archive/ctal/) |
| `Ctal-tae-v2.0-ch2.html` | `/istqb-ctal-tae-chapter2-preparing-for-test-automation` | ✅ スティッキーNavBar + Mermaid図6件 + 全7表 + 目次 + チェックリスト (archive/html-archive/ctal/) |
| `Ctal-tae-v2.0-ch4-implementing-test-automation.html` | `/istqb-ctal-tae-chapter4-implementing-test-automation` | ✅ スティッキーNavBar + Mermaid図6件 + 全5表 + 目次26リンク + インタラクティブチェックリスト (archive/html-archive/ctal/) |
| `Ctal-tae-ch5-implementation-deployment-strategies.html` | `/istqb-ctal-tae-chapter5-implementation-deployment-strategies` | ✅ 固定サイドバー + 7目次リンク + Mermaid図5件 + 全6表 + チェック項目6件 (archive/html-archive/ctal/) |
| `Ctal-tae-v2.0-ch6-test-automation-reporting-and-metrics.html` | `/istqb-ctal-tae-chapter6-test-automation-reporting-and-metrics` | ✅ 固定サイドバー・モバイル目次43リンク + Mermaid図11件 + 全31表 + コード2件 + 学習進捗13項目 (archive/html-archive/ctal/) |
| `Ctal-tae-v2.0-ch7-verifying-the-test-automation-solution.html` | `/istqb-ctal-tae-chapter7-verifying-the-test-automation-solution` | ✅ 固定サイドバー・モバイル目次40リンク + Mermaid図11件 + 全30表 + 構文色付きコード7件 + 学習進捗6項目 (archive/html-archive/ctal/) |
| `Ctal-tae-ch8-continuous-improvement.html` | `/istqb-ctal-tae-chapter8-continuous-improvement` | ✅ 固定サイドバー・モバイル目次70リンク + Mermaid図16件 + 全36表 + 構文色付きコード6件 + 確認問題6件 (archive/html-archive/ctal/) |
| `Quality-is-free-guide.html` | `/quality-is-free-guide` | ✅ 紙色テーマ・目次15リンク・全16セクション・6表・Mermaid8図・チェック11項目・参考文献16カード (archive/html-archive/books/) |
| `Iec-62304-beginner-guide.html` | `/iec-62304-beginner-guide` | ✅ ダーク配色・22セクション・目次50リンク・37表・18図・13注記・30外部リンク (tests/fixtures/source-html/、HTML・MD両方) |
| `Iso-23009-1-2026-guide.html` | `/iso-23009-1-2026-guide` | ✅ ダーク配色・41見出し・目次40リンク・24表・6図・XML2例・9注記・外部23リンク・71 CSSルール (archive/、HTML・MD両方) |
| `Iso-27799-2025-guide.html` | `/iso-27799-2025-guide` | ✅ ダーク配色・46見出し・目次19リンク・31表・11図・12注記・外部13リンク・チェック10項目・89 CSSルール (archive/、HTML・MD両方) |

### ISTQB CTAL-TAE 第4章「Implementing Test Automation（テスト自動化の実装）」の追加移行（2026-10-16）

- `/istqb-ctal-tae-chapter4-implementing-test-automation`をISTQB高度レベル（`istqb-advanced`）へ追加。パイロットとデプロイのガイドライン、一般的・技術的デプロイリスク、保守性とクリーンコード原則、Mermaid図6件、全5表、チェックリストを完全保持。
- `tests/istqb-ctal-tae-chapter4-implementing-test-automation/page.test.tsx`で16テスト（197 expect() calls）を検証。ナビ・E2E対象は97ルート、Advancedカテゴリは18件。
- 原本は`archive/html-archive/ctal/Ctal-tae-v2.0-ch4-implementing-test-automation.html`と`archive/md-archive/ctal/Ctal-tae-v2.0-ch4-implementing-test-automation.md`へ移動。
- 検証は`bun test`および`bun run lint`で実施。ビルド・目視確認は実施しない。

### ISTQB CTAL-TAE 第2章「テスト自動化の準備」の追加移行（2026-10-12）

- `/istqb-ctal-tae-chapter2-preparing-for-test-automation`をISTQB高度レベル（`istqb-advanced`）へ追加。テスト容易性の3側面（Observability・Controllability・Architecture Transparency）、各種環境での自動テスト活用、SUT分析とツール評価プロセス、Mermaid図6件、全7表、チェックリストを完全保持。
- `tests/istqb-ctal-tae-chapter2-preparing-for-test-automation/page.test.tsx`で26テスト（383 expect() calls）を検証。ナビ・E2E対象は96ルート、Advancedカテゴリは17件。
- 原本は`archive/html-archive/ctal/Ctal-tae-v2.0-ch2.html`と`archive/md-archive/ctal/Ctal-tae-v2.0-ch2.md`へ移動。
- 検証は`bun test`（2793 pass / 0 fail）および`bun run lint`で実施。ビルド・目視確認は実施しない。

### ISTQB CTAL-TAE 第1章「テスト自動化の導入と目的」の追加移行（2026-10-12）

- `/istqb-ctal-tae-chapter1-introduction-and-objectives`をISTQB高度レベル（`istqb-advanced`）へ追加。自動化の目的、メリット・デメリット・限界、SDLCモデル適用、ツール選定プロセス、Mermaid図7件、全5表、チェックリストを完全保持。
- `tests/istqb-ctal-tae-chapter1-introduction-and-objectives/page.test.tsx`で16テスト（206 expect() calls）を検証。ナビ・E2E対象は95ルート、Advancedカテゴリは16件。
- 原本は`archive/html-archive/ctal/Ctal-tae-v2.0-ch1-introduction-and-objectives.html`と`archive/md-archive/ctal/Ctal-tae-v2.0-ch1-introduction-and-objectives.md`へ移動。
- 検証は`bun test`（2781 pass / 0 fail）で実施。ビルド・目視確認は実施しない。

### ISTQB CTAL-TAE 第3章 テスト自動化アーキテクチャの追加移行（2026-10-12）

- `/istqb-ctal-tae-chapter3-test-automation-architecture`をISTQB高度レベル（`istqb-advanced`）へ追加。gTAA概念、TAF3層レイヤー構造、7つの自動化アプローチ、OOP/SOLID設計原則、デザインパターン、Mermaid図9件を完全保持。
- `tests/istqb-ctal-tae-chapter3-test-automation-architecture/page.test.tsx`で11テスト（206 expect() calls）を検証。ナビ・E2E対象は94ルート、Advancedカテゴリは15件。
- 原本は`archive/html-archive/ctal/Ctal-tae-ch3-test-automation-architecture.html`と`archive/md-archive/ctal/Ctal-tae-ch3-test-automation-architecture.md`へ移動。
- 検証は`bun test`（2756 pass / 0 fail）および`bun run lint`で実施。ビルド・目視確認は実施しない。

### ISO/IEC/IEEE 29119-1:2022の追加移行（2026-10-10）

- `/iso-29119-1-2022-guide`を新設カテゴリ「ISO 国際規格」（`iso`）へ追加。全70見出し、目次69リンク、全39表、Mermaid図19件を保持。
- `tests/iso-29119-1-2022-guide/page.test.tsx`で129件を検証。ナビ・E2E対象は93ルート、ISOカテゴリは1件。
- 原本は`archive/html-archive/iso/Iso-29119-1-2022-guide.html`と`archive/md-archive/iso/Iso-29119-1-2022-guide.md`へ移動し、SHA-256一致を確認。
- 検証は`bun test`で実施。ビルド・目視確認は実施しない。

### Beyond Legacy Codeの追加移行（2026-10-07）

- `/beyond-legacy-code-guide`を名著・実践ガイドへ追加。紙色・藍色の元テーマ、全87CSSルール、階層目次18リンク、Mermaid図6件を保持。
- `tests/beyond-legacy-code-guide/page.test.tsx`で501件を検証。ナビ・E2E対象は92ルート、書籍カテゴリは22件。
- 原本は`archive/html-archive/books/Beyond-legacy-code-guide.html`と`archive/md-archive/books/Beyond-legacy-code-guide.md`へ移動し、SHA-256一致を確認。
- 検証は`bun test`・`bun run lint`・`bunx tsc --noEmit`で実施。ビルド・目視確認は実施しない。

### 未移行（プロジェクトルートに残存）

プロジェクトルート直下には App Router に未登録の静的ドキュメント（プロジェクト仕様書を除く）が残っている。
これらは現時点で**ルート登録対象外**として扱っており、ルート化の可否は未決定。
この一覧の正は `docs/MIGRATION_PROGRESS.md`。CLAUDE.md / GEMINI.md には同一の表を複製しているため、
ファイルを追加・削除した場合は 3 ファイルすべてを同時に更新すること。

| ファイル | 予定ルート | 状態 | 備考 |
|---|---|---|---|
| ツール系（1 ファイル）: `Sonarqube.html` | 未定 | ⏸ ルート登録対象外 | `/sonarqube-intermediate-guide` とは別系統の旧ドキュメント |
| 新規ガイド系（1 ファイル）: `Ctal-ta-v4-chapter3-testanalysisanddesign-guide.md` | 未定 | ⏸ ルート登録対象外 | 静的ドキュメントとして残置。ルート化の可否は未定 |
| 追加ガイド系: `Iso-*.html` / `Iso-*.md` | 未定 | ⏸ 未移行の追加ソース | CTAL-TAE第1〜8章は移行・アーカイブ済み。ISO 規格各部などの残存ソース。23009-1:2026と27799:2025は移行・アーカイブ済み。既存登録ルートと重なる内容は差分を確認して移行方針を決定 |
| 追加ガイド系（1 ファイル）: `Iec62304-beginner-guide.md` | 未定 | ⏸ 未移行の追加ソース | 移行済み `/iec-62304-beginner-guide` の原本（`tests/fixtures/source-html/Iec-62304-beginner-guide.html`・`.md`）とは別の原稿。ルート化の可否は差分を確認して決定 |

## 既知の留保事項

- `istqb-ctfl-at-complete-guide` と `bdd-testing-guide` / `ai-test-guide` は html-archive/ に元 HTML が存在しない（最初から Next.js で作成）
- `istqb-ct-aut-complete-guide.html` はリポジトリ内に存在しません（not found）。

## 次回セッションでの再開プロンプト

```text
コンテキスト:
- 最新 HEAD は `docs/MIGRATION_PROGRESS.md` の「現在地」テーブルを参照（ここに固定値を書かない）。
- **移行対象ガイドの移行完了**: 「移行状況テーブル」に掲載した HTML / Markdown の Next.js App Router への移行は完了しています。
- 合計 113 ルート（ガイドライブラリ index + 112 ガイド）が `lib/navigation.ts` / `e2e/pages.ts` で管理されています。
- ただしプロジェクトルートには App Router に未登録の静的ドキュメントが残っています（`Sonarqube.html`、ISO 各規格など）。これらは現時点でルート登録対象外の静的ドキュメントとして扱っており、ルート化するかどうかは未決定です。
- 全体テストすべて成功（直近 8263件（npm経由の全体テスト・165ファイル））。ページ単体、ナビゲーション、Mermaid契約も全て成功。
- 新規追加「ISO/IEC 9075-1 SQL/Framework ガイド」（`/iso-9075-1-guide`）と「ISO 11179-1 メタデータレジストリガイド」（`/iso-11179-1-2023-guide`）を登録済み。
- 保留中の作業（次回セッション）:
  1. `/specification-by-example-guide`・`/software-testing-craftsmans-approach-guide`・`/testing-computer-software-guide`・`/working-effectively-with-legacy-code-guide`・`/iso-9075-1-guide`・`/iso-11179-1-2023-guide`・`/iso-27799-2025-guide`・`/iso-23009-1-2026-guide` の目視確認をユーザーに依頼する（ビルド未実施）。
  2. 本番ビルド（`bun run build`）の確認をユーザーに依頼し、結果の共有を待つ（エージェントは自律実行しない）。
  3. ホーム（`/`）とグローバルメニュー（ドロワー）の目視・操作確認をユーザーに依頼する。

【ビルド検証の制約】
サンドボックス環境では `bun run build` を直接実行しない。ビルド確認が必要な場合はユーザーに実行を依頼すること。
ローカル検証は `bun run lint` と `bun test` で行う。

【指示】
登録済みガイドの Next.js 移行が完了しました。今後の品質向上、E2Eテストの拡充、または新しい機能追加について指示を仰ぎます。
```

## LangGraphコード表示

`app/langgraph-qa-agent-guide/SyntaxCode.tsx`はPython・Bashのコードをサーバー側でハイライトする。追加ライブラリ・CDNを使わず、Reactの文字列エスケープによりコードの安全性と改行を維持する。全15ブロックの本文一致と色分けをテストしている。

## 2026-10-17: CTAL-TAE 第5章移行の検証

- ナビ・E2E登録は98ルート、Advancedカテゴリーは19件。新規ページ196件・原本保持と登録4件を検証。全体テスト3063件（119ファイル）とlintが成功。
- 原本HTML・MDは各アーカイブの`ctal/`へ移動しSHA-256一致。ビルド・ブラウザE2E・目視確認は未実施。型検査は既存テストのエラーが残存。

## 2026-10-17: CTAL-TAE 第6章移行の検証

- ナビ・E2E登録は99ルート、Advancedカテゴリーは20件。第6章のページ409件・登録と原本保持4件を検証。
- 49見出し・43目次リンク・31表・11図・コード例2件・コールアウト13件・解答開閉5件・チェック項目13件・参考文献12リンクを固定インベントリと照合。CSS全160ルールと追加上書きを検証。
- 元HTML・MDは各アーカイブの`ctal/`へ移動しSHA-256一致。全体テスト3480件（121ファイル）とlintが成功。ビルド・ブラウザE2E・目視確認は未実施。型検査の既存エラーは移行対象を除いた場合と一致し、新規ファイルの診断なし。

## 2026-10-17: CTAL-TAE 第7章移行の検証

- ナビ・E2E登録は100ルート、Advancedカテゴリーは21件。第7章のページ406件・登録と原本保持4件を検証。全体テスト3894件（123ファイル）とlintが成功。
- 58見出し・40目次リンク・30表・11図・コード例7件・コールアウト18件・解答6件・チェック項目6件・参考URL13件を固定インベントリと照合。CSS全99ルールとハイライト配色14ルールを検証。
- 構文色は原本と同じhighlight.js 11.10.0で事前生成し、原本全文・言語・構文トークンを照合。追加の実行時依存・CDNスクリプトはなく、配色のライセンスを保存。
- 原本HTML・MDは各アーカイブの`ctal/`へ移動しSHA-256一致。ビルド・ブラウザE2E・目視確認は未実施。型検査のエラー位置・メッセージは既存基準と一致し、新規ファイルの診断なし。

## 2026-10-17: CTAL-TAE第7章 Mermaid黒塗りの修正

- 原因: ページのライト設定は共通Mermaidの`themeVariables`とマージされるため、`primaryColor`だけでは共通の`mainBkg: #0f2040`が残る。文字色`#1c2536`とのコントラストは約1.05となり判読困難だった。
- 対応: 第7章のページ設定に`mainBkg: #eaf0ff`を追加。共通コンポーネントと図の内容は変更しない。
- 回帰検証: `e2e/ctal-tae-ch7-mermaid-colors.e2e.ts`で共通の初期設定・実Mermaid・ページCSSを組み合わせ、390px／1440pxの全11図を検査。背景色と実際の文字を描くSVG／HTML要素のコントラスト比4.5以上を確認。シーケンス図は親`text`と子`tspan`の描画色を区別する。
- 結果: `playwright.mermaid-css.config.ts`によるビルド・サーバー不要のブラウザ検証34件（第7章22件＋既存レイアウト12件）、関連ユニット555件、lintが成功。ページ全体の目視確認と本番ビルドは未実施。

## 2026-10-17: CTAL-TAE第7章 チェックリストとコード表示の改善

- 原因: 他ルートの未スコープ`.code-block code`が残ると、コードに`white-space: pre-wrap`と異なる文字サイズ・行高が適用される。第7章内で明示的に上書きし、字下げ・改行を保持して外側の`pre`で横スクロールする。
- チェックリスト: 全6項目の文章・状態管理を保持し、行全体を押せるカード、2段の進捗表示、完了時の読みやすい緑色、キーボードフォーカスを追加。
- 検証: `e2e/ctal-tae-ch7-learning-ui.e2e.ts`で390px／1440px、他ルートCSSの前後両順序、全7コード、チェックリストの操作領域・完了色・フォーカスを検査。Playwrightテストケース6件で対象項目40件（コード例28件＋チェックリスト12件）を検証、全体ユニット3894件（123ファイル）、lint成功。ビルド・サーバー起動・ページ全体の目視確認は未実施。

## 2026-10-18: CTAL-TAE第6章 Mermaid色検証の追加

- 対応: 第6章のページ設定に`mainBkg: #dbeafe`を追加。共通コンポーネントと図の内容は変更しない。
- 回帰検証: `e2e/ctal-tae-ch6-mermaid-colors.e2e.ts`で共通の初期設定・実Mermaid・CSSを組み合わせ、ページCSSあり／初期設定のみの2バリアント×390px／1440px×全11図の44ケースを検査。classDefのないノードは`#dbeafe`、classDefのあるノードは原本の塗り色を保ち、文字のコントラスト比4.5以上を確認。
- 結果: `playwright.mermaid-css.config.ts`によるビルド・サーバー不要のブラウザ検証で、Playwrightテストケース84件（第6章44件＋第7章22件＋第7章学習UI 6件＋既存レイアウト12件）が成功。第7章学習UIはテストケース6件で対象項目40件（コード例28件＋チェックリスト12件）を検証。ページ全体の目視確認と本番ビルドは未実施。

## 2026-10-20: CTAL-TAE第8章 継続的改善の移行

- 移行先: `/istqb-ctal-tae-chapter8-continuous-improvement`。Advancedカテゴリーの第7章直後に登録し、ナビ・E2E一覧を101ルートへ同期。
- 原本71見出し・目次70リンク・36表の全セル・16図・Python/YAMLコード6例・注記8件・解答6件・確認問題6件・参考URL13件・全本文・フッターを固定インベントリと出現順で照合。
- 原本CSS全77ルールとAtom One Light配色14ルールを照合。ライト背景・ヒーロー装飾・900px条件・余白を保持し、共通CSSの疑似要素・表・リスト・コード・固定要素の干渉を補正。
- コードは原本と同じhighlight.js 11.9.0で事前生成。全文・空白・改行・言語・全構文トークンを検証し、追加の実行時依存やCDNスクリプトなし。
- 全16図を実Mermaidパーサーで検証。ページ専用ライト設定でフロー・シーケンス・XYチャートを維持し、黒背景・文字切れ・縮小を保護。目次70リンクの開閉・追従・Escape・スクリム・Observer解除を検証。外部出典13リンクのtarget・relと、共有Mermaidの横スクロール・フッター干渉の追加回帰検証も実施。
- Red先行後、デザイン、構文色、本文8カテゴリー、Mermaid、目次、ナビ、アーカイブを分割コミット。全コミット前にPII検査を実施。
- HTMLは`archive/html-archive/ctal/Ctal-tae-ch8-continuous-improvement.html`、MDは`archive/md-archive/ctal/Ctal-tae-ch8-continuous-improvement.md`へ移動。双方のSHA-256一致を検証。既存のarchive除外設定を維持。
- 検証: ページ445件＋登録・アーカイブ6件の計451件成功。全体4386件（125ファイル）成功、lint成功。ユーザー指定により`npm exec -- bun test`と`npm run lint`で実行。第8章のコード・テストの型検査も成功。全体型検査は既存ファイルのエラーで失敗（第8章の診断なし）。ビルド・ブラウザE2Eは未実施、目視確認はユーザーが担当。

## 2026-10-20: CTAL-TAE第7・8章のコード改行・インデント修正

- 原因: 各行末のJSX改行エンティティ`&#10;`がNext.js/SWCで除去され、インラインの行要素が連結。従来のBun・TypeScriptによる変換では再現せず、DOM照合とCSS検証だけでは検知できなかった。
- 修正: 両章の`CodeExample.tsx`でLFを実行時に生成する`CodeLine`へ変更。13コードの全文・改行・空行・インデント・構文トークンを保持。第8章はハイライトCSSの詳細度による余白二重化と内側スクロールも解消し、`pre`へ横スクロールを集約。
- 回帰検証: Next.js/SWCの開発・本番変換26ケースを追加し、修正前の全26失敗を確認。ブラウザー側もTypeScript変換からSWCへ変更。
- 実ブラウザー: 全13コード×390px/1440px×CSS読込3条件の78ケース、第7章学習UI6ケース、起動済みNext.jsの実ページ4ケースの計88件が成功。実ページでも全コードの改行・字下げ・行位置を原本と照合。
- 検証: 両章関連902件、全体4419件（125ファイル）、lintが成功。ユーザー指定によりnpm経由で実行。本番ビルドは未実施。

## 2026-10-20: Quality Is Free入門ガイドの移行

- 移行先: `/quality-is-free-guide`。名著・実践ガイドの末尾へ登録し、ナビ・E2E一覧を102ルート、書籍カテゴリーを23件へ同期。
- 原本の16セクション・22見出し・目次15リンク・6表全セル・図8件と全キャプション・チェック11項目・参考文献16カード・外部リンク6件・アイコン31個・引用2件・タグ6件・全本文とフッターを固定インベントリと出現順で照合。コードブロックはなし。
- 原本全79 CSSルールと960px条件を保存。紙色・セリフ体・紫のヒーローを保持し、共有CSS・残留CSSによる文字色、リスト余白、表の罫線・フォント・大文字化・最小幅、入力装飾を補正。既存のフォント・アイコン読み込みを再利用。
- 目次の追従・開閉・リンク選択・Escape・スクリム・Observer解除、11チェックの選択と解除・件数・完了装飾を検証。全8図は原本のノード・接続・classDefと紙色設定を保持して共有Mermaidへ接続。
- 原本との実スタイル・寸法・ホバー比較8ケース（390/960/961/1440px×CSS読込2順序）、実SVGの配色・スクロール端検証32ケース、起動済みNext.jsの操作・図描画2ケースが成功。実ページは`QIF_ORIGIN=http://localhost:3000`で検証し、サーバー起動・本番ビルドは行わない。
- Red先行、デザイン、各16セクション、図、目次、登録、アーカイブ、実ブラウザーで発見した補正、仕様書を分割コミット。コミットごとにPII検査。
- 原本HTMLは`archive/html-archive/books/Quality-is-free-guide.html`、MDは`archive/md-archive/books/Quality-is-free-guide.md`へ同名で移動し、双方のSHA-256一致を確認。archiveの既存Git除外設定を維持。
- 検証: ページ289件＋登録・アーカイブ6件の計295件、全体4718件（127ファイル）、ブラウザー42件、対象型検査、lint、変更Markdownのlintが成功。ユーザー指定によりnpm経由で実行。目視確認はユーザー担当、本番ビルドは未実施。

## 2026-10-21: IEC 62304初学者向けガイドの移行

- 移行先は`/iec-62304-beginner-guide`。国際規格カテゴリーへ追加し、ナビ・E2E一覧を103ルートへ同期。
- 全22セクション・59見出し・階層目次50リンク・37表の全セル・図18件・コールアウト13件・外部リンク30件・全本文とフッターを固定インベントリと照合。コードブロックなし。QAチェック表の13項目は原本の静的な記号を保持。
- 原本全65 CSSルールと960px条件を保存。ダーク配色・ヒーロー装飾・固定目次を維持し、共有/他ルートCSSによる書体・文字塗り・本文色・表・注記余白・疑似要素の干渉を補正。原本のNoto Sans JP 800ウェイトを追加読み込み。
- HTML内の実SVGからノード・判断形状・接続・ラベル・グループを抽出し、共通Mermaidで再描画。Markdownと形式が異なる版履歴・改訂動向・導入ロードマップはHTMLの形式を採用。縦配置と分離図の方向、配色、横スクロールの両端を検証。
- 目次のモバイル開閉・リンク選択・Escape・フォーカス復帰・全50アンカーのObserver追従・親グループ展開・目次内スクロール・Observer解除を検証。全本文はNext.js/SWCの開発/本番変換後も照合。
- Red先行、デザイン、図、目次、基礎解説、Step 1〜3、Step 4、Step 5〜7、実務、改訂/FAQ/参考資料、登録、アーカイブ、補正、リファクタリング、仕様書を分割コミット。各コミット前にPII検査。
- HTMLとMDはGit追跡下の`tests/fixtures/source-html/Iec-62304-beginner-guide.html`・`.md`へ同名で移動し、クリーンなチェックアウトでもSHA-256一致を常に検証。
- 検証はnpm経由。対象351件、全体5075件（129ファイル）、ビルド/サーバー不要のブラウザー80件（4幅×18図＋CSS読込2順序×4幅）、lint成功。対象型検査成功。全体型検査には既存エラーが残存。ビルド未実施、目視確認はユーザー担当。

## 2026-10-21: ISO/IEC 9075-1 SQL/Frameworkガイドの移行

- 移行先は`/iso-9075-1-guide`。国際規格カテゴリーへ追加し、ナビ・E2E一覧を104ルートへ同期。
- 全35見出し・階層目次34リンク・19表の全セル・9図・SQLコード3例・コールアウト11件・外部リンク20件・ヒーロー・全本文・フッターを固定インベントリで出現順に照合。
- 原本CSS全63ルールと960px条件を保存。ダーク配色、ヒーロー装飾、固定サイドバー、SQL構文色を保持し、共有CSS・残留CSSの余白・文字・表・インラインコード・コード枠への干渉を補正。
- 図はHTML内の実SVGから全ノード・接続・ラベルを抽出。HTMLとMarkdownで異なる図の方向はHTMLを採用し、共有Mermaidで描画。シーケンス図の参加者・メッセージと全図の原本配色を実ブラウザーで照合。
- 目次の開閉・リンク選択・Escape・フォーカス復帰・全34アンカーのObserver追従と解除を検証。Next.js/SWCの開発・本番変換で全文・構造・SQLの改行と字下げを照合。
- Red先行、CSS、図、SQL、目次、ヒーロー、要約、Step 1〜8、用語集、参考資料、注意点、ページ構成、登録、アーカイブ、補正、仕様書を分割コミット。各コミット直前にPII検査。
- 原本HTMLは`archive/html-archive/iso/Iso-9075-1-guide.html`、MDは`archive/md-archive/iso/Iso-9075-1-guide.md`へ同名で移動し、Git追跡とSHA-256一致を検証。作業中に検出した外部の整形差分も`archive/html-archive/iso/Iso-9075-1-guide.formatted.html`へ別途保全。
- 検証はnpm経由。対象218件、全体5298件（131ファイル）、ビルド・サーバー不要のブラウザー44件（4幅×9図＋CSS読込2順序×4幅）、lint、対象型検査が成功。全体型検査には既存テストの型エラーが残存。本番ビルド未実施、目視確認はユーザー担当。

## 2026-10-22: ISO/IEC 11179-1:2023メタデータレジストリガイドの移行

- 移行先は`/iso-11179-1-2023-guide`。国際規格カテゴリーへ追加し、ナビ・E2E一覧を105ルートへ同期。
- 全58見出し・階層目次57リンク・32表の全セル・14図・YAMLコード1例・コールアウト15件・外部リンク21件・学習チェック6項目・ヒーロー・全本文・フッターを固定インベントリで出現順に照合。
- 原本CSS全80ルールと960px条件を保存。ダーク配色、ヒーロー装飾、固定サイドバー、表の交互背景、YAMLの全構文トークンと改行・空行・字下げを保持し、共有CSSと残留CSSの干渉を補正。
- 図のラベル・ノード形状・接続・矢印・太線・点線・グループ名をHTML内の実SVGから抽出。Markdownと異なるグループ名や接続はHTMLを採用。クラス図・シーケンス図を含む全14図を共有Mermaidで描画し、実SVGの意味・配色と横スクロール端を検証。
- 目次の開閉・リンク選択・Escape・フォーカス復帰・全57アンカーのObserver追従と解除、チェック6項目の全選択・全解除・件数・進捗を検証。Next.js/SWCの開発・本番変換でも全文・構造とYAMLの改行・字下げを照合。
- Red先行、CSS、図、目次、YAML、チェック、ヒーロー、導入、STEP 1〜10、付録A〜C、ページ構成、登録、アーカイブ、補正、仕様書を分割コミット。本文は1カテゴリーずつ実装→原本照合→コミットを実行。各コミット直前にPII検査。
- 原本HTMLは`archive/html-archive/iso/Iso-11179-1-2023-guide.html`、MDは`archive/md-archive/iso/Iso-11179-1-2023-guide.md`へ同名で移動し、Git追跡とSHA-256一致を検証。
- 検証はnpm経由。対象325件、全体5627件（133ファイル）、ビルド・サーバー不要のブラウザー64件（4幅×14図＋CSS読込2順序×4幅）、lint、対象型検査が成功。全体型検査には既存テストの型エラーが残存。本番ビルド未実施、目視確認はユーザー担当。

## 2026-10-23: Library navigation design

Home and global navigation share `NAV_ITEMS`, category ordering, labels, counts and search matching. Home adds category filtering, persistent map labels, introductory links and empty-state recovery. The menu adds descriptions, result counts and keyboard focus containment. Header refinements live in `components/header.css`; home rules remain scoped to `.index-page`. See [library design and extension rules](docs/LIBRARY_DESIGN.md).
