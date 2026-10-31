---
paths:
  - "playwright*.config.ts"
  - "e2e/**"
  - "tests/e2e/**"
---

# Playwright 設定ファイル集約ルール

## ルール

リポジトリ直下の Playwright 設定は次の 2 ファイルに限定する。ページ単位・機能単位の
`playwright.<name>.config.ts` を新規作成してはならない。

| ファイル | 対象 | サーバー |
|---|---|---|
| `playwright.config.ts` | `page.goto` で実ページを開くテスト（smoke / a11y / mermaid-layout / library） | 本番ビルド + `127.0.0.1:3000` を自動起動 |
| `playwright.layout.config.ts` | `setContent` で原本 CSS / SVG と比較するレイアウト回帰テスト | 起動しない（`webServer` なし、`workers: 1`） |

## 新しい e2e テストを追加するとき

1. サーバーが必要か判定する。実ページへの `page.goto` があればサーバー側、なければレイアウト側。
2. レイアウト側は `playwright.layout.config.ts` の `LAYOUT_SUITES` に 1 件追加する。

   ```ts
   { name: 'iso-xxxx', testMatch: 'iso-xxxx-layout.e2e.ts' },
   ```

   ブラウザーチャンネル等の個別設定が必要な場合のみ `use` を追加し、共通の `layoutUse` を上書きする。
3. サーバー側は `playwright.config.ts` のトップレベル `testMatch` に追加するか、直列実行などの個別条件がある場合は `projects` に追加する。
4. 実行コマンドは `--config` ではなく `--project` で指定する。

   ```sh
   bun run e2e:layout --project=iso-xxxx   # レイアウト側
   bunx playwright test --project=library  # サーバー側
   ```

5. ドキュメントに記載する実行コマンドも上記の形式に揃える。

## 機械的な検証

`tests/e2e/playwright-config-registry.test.ts` が `bun test` で次を検証する。

- リポジトリ直下の設定が上記 2 ファイルだけであること
- `e2e/*.e2e.ts` がそれぞれちょうど 1 つのプロジェクトに属すること（実行漏れ・二重実行の防止）
- レイアウト側が `webServer` を持たず `workers: 1` であること

テストが落ちた場合は設定ファイルを増やして回避せず、既存 2 ファイルのプロジェクトへ登録する。

## 理由

- ページごとに設定をコピーすると `launchOptions` 等の指定が揺れる。統合時には 1 件だけ `PLAYWRIGHT_CHROMIUM_EXECUTABLE` を無視していた設定が見つかった。
- `webServer` は設定ファイル全体で共有されるため、サーバー要否で 2 ファイルに分ければ、レイアウト回帰の実行時に本番ビルドが走ることはない。
- トップレベルの `testMatch` が `/.*\.e2e\.ts$/` だった頃は、直列前提のレイアウトテストが `bun run e2e` で並列実行されていた。対象ファイルを明示して分離する。
