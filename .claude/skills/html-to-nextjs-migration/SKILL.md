---
name: qa-studies-html-to-nextjs-migration
description: >
  Complete workflow for migrating static HTML pages to Next.js App Router page.tsx
  in the QA_Studies project. Covers CSS variable mapping, page-specific CSS extraction,
  globals interference resets, TDD mandatory cycle, and navigation updates.
---

# QA_Studies HTML → Next.js Migration Workflow

静的 HTML を Next.js App Router ページへ完全に移行するための標準ワークフローです。

## セッション開始時に確認するファイル

1. `docs/MIGRATION_PROGRESS.md`（現在地・残タスク）
2. `.claude/rules/tdd-mandatory-cycle.md`（TDD 必須サイクル & 分割コミット）

## 移行ワークフロー（TDD サイクル準拠）

### Phase 1: 構成要素インベントリ & Red テストスイート（必須 Gate Condition）

移行漏れを未然に防ぐため、元 HTML を精読して構成要素インベントリを作成し、`tests/<page-slug>/page.test.tsx` に網羅的テストスイートを作成して失敗（Red）させます。

1. 見出し（H1〜H4、セクション ID）および目次リンク
2. Mermaid 図解（FIG 番号、図種別）
3. テーブル（行・列構成、セル内コード）
4. コードブロック（言語、構文）
5. コールアウト・カード・警告ボックス
6. 参考文献（URL、`target="_blank"`、`rel="noopener noreferrer"`）
7. ナビゲーション（目次開閉、sticky）

### Phase 2: CSS 変数マッピング & テーマ設計

- **独自エディトリアルデザイン**: 温かみのある紙の背景やインク文字を持つ元 HTML は、デザインを忠実に再現します。
- **標準ダークテーマ**: `globals.css` の `@theme` トークン（`--color-bg-*`, `--color-text-*`, `--color-accent-*`）へマッピングします。

### Phase 3: ページ固有 CSS & globals.css 干渉リセット（最重要）

`app/<page-slug>/<page-slug>.css` を作成し、ページ固有クラス（例: `.my-page`）でスコープします。
`globals.css` の汎用セレクタ干渉を必ずリセットします。

```css
/* ヒーロー高さリセット（100vh 膨張防止） */
.my-page .hero {
    min-height: 0 !important;
    display: block !important;
    overflow: visible !important;
}

/* セクション余白・区切り線リセット */
.my-page section {
    padding-top: 0 !important;
}
.my-page section + section {
    border-top: none !important;
}

/* 本文幅リセット */
.my-page main {
    max-width: none !important;
}

/* テーブル文字色・余白リセット（薄青灰色干渉防止） */
.my-page table {
    width: 100% !important;
    border-collapse: collapse !important;
}
.my-page tbody td,
.my-page td {
    color: var(--text, #1e293b) !important;
    font-size: 0.95rem !important;
}
/* globals の td strong（薄い白水色）で強調文字が消えるのを防ぐ */
.my-page td strong {
    color: var(--text, #0f172a) !important;
}
.my-page thead th {
    color: var(--text, #0f172a) !important;
    white-space: normal !important;
}

/* スクロールバーの globals 干渉リセット（黒帯防止） */
.my-page *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
.my-page *::-webkit-scrollbar-track {
    background: transparent !important;
}
.my-page *::-webkit-scrollbar-thumb {
    background: var(--border-strong, #cbd5e1) !important;
    border-radius: 3px;
}
.my-page *::-webkit-scrollbar-thumb:hover {
    background: var(--text-faint, #94a3b8) !important;
}
```

### Phase 4: HTML から TSX への変換（Green フェーズ）

1. `<html>`, `<head>`, `<body>`, `<style>`, `<script>` を除去
2. グローバルナビは除去し、ページ固有目次ナビは `NavBar.tsx`（`'use client'`）へ移行。スクロールスパイの `IntersectionObserver` は `useEffect` 内で設定し、クリーンアップで `obs.disconnect()` する
3. 属性変換: `class` → `className`, `for` → `htmlFor`, 自己終了タグ閉じ（`<br />`, `<hr />`）
4. `.code-block` 内の改行: `{"\n"}` は使わず `<div className="code-line">` で各行をラップ
5. Mermaid 図解: `components/Mermaid.tsx` を使用し、`.claude/skills/fix-mermaid/SKILL.md` に従って `MERMAID_CONFIG` を適用

### Phase 5: ナビゲーション & E2E テスト整合性の更新

1. `lib/navigation.ts` の `NAV_ITEMS` に新規ページを追加（80文字以内の `description` 必須）
2. `tests/lib/navigation.test.ts` と `e2e/pages.ts`（`PAGES` 配列および `EXPECTED_PAGE_COUNT`）を同期
3. 元 HTML を `archive/html-archive/` へ移動
4. `docs/MIGRATION_PROGRESS.md` の移行テーブル・現在地を更新し、進捗記録としてコミットする（`.claude/rules/migration-progress-sync.md` 参照）

### Phase 6: 検証 & PII 検査（Gate Condition）

> [!IMPORTANT]
> サンドボックス保護のため、AI エージェントは `bun run build` を自律実行してはなりません。

```bash
# 1. テスト実行
bun test tests/<page-slug>/page.test.tsx
bun test tests/lib/navigation.test.ts tests/lib/navigation-e2e-sync.test.ts

# 2. JSX の class 属性漏れ検査
grep -n 'class="' app/<page-slug>/page.tsx

# 3. PII 検査（絶対パス混入の完全防止）: PR ベースからの全差分（コミット済み + staged + unstaged）と未追跡ファイルを走査
# 未追跡のシンボリックリンクは cat でリンク先を辿らず、readlink でリンク先パス自体を検査する
# ベースまたは差分を取得できない場合は、走査対象が空のまま「passed」にならないよう検査自体を中止する
if ! BASE=$(git merge-base origin/main HEAD 2>/dev/null || git merge-base main HEAD); then
  echo "❌ merge-base を取得できないため PII 検査を中止します" >&2; false
elif ! DIFF=$(git diff "$BASE"); then
  echo "❌ git diff に失敗したため PII 検査を中止します" >&2; false
else
  if { printf '%s\n' "$DIFF" | grep -E '^\+' | grep -vE '^\+\+\+ (b/|/dev/null)' | sed 's/^+//'; git ls-files --others --exclude-standard -z | while IFS= read -r -d '' f; do if [ -L "$f" ]; then readlink -- "$f"; elif [ -f "$f" ]; then cat -- "$f"; fi; done; } | grep -E '(/Us[e]rs/|/ho[m]e/|[A-Za-z]:\\[Uu][Ss][Ee][Rr][Ss]\\)'; then
    echo "❌ PII detected" >&2; false
  else
    echo "PII check passed"
  fi
fi
```
