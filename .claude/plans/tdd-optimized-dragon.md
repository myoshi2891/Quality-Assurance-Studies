# グローバルヘッダーのハンバーガーメニュー化（TDD・拡張性重視）

## Context

QA_Studies（Next.js App Router + Tailwind v4 + TypeScript strict）の現在のヘッダー [components/Header.tsx](components/Header.tsx) は、19 個のナビリンクを横並びで全幅表示しており、`overflow-x: auto` の横スクロールで強引に収めている。今後 CT-TAS 等の新試験ガイドを追加する予定があるため、

- **すべての画面幅でハンバーガーメニュー化**（リンクは横並びにせず、ドロワー内に集約）
- **新ガイド追加は配列に 1 行追記するだけ**で反映される拡張性ある構造

を実現する。実装は TDD（Red→Green→Refactor）を厳守し、1 ステップ = 1 コミットで段階的に進める。

## 決定事項（ユーザー確認済み）

| 項目 | 採用 |
|---|---|
| ドロワー形状 | **Top sheet**（Header 直下から下方に展開、width 100%、カテゴリ別 4 カラムグリッド） |
| アイコン | **インライン SVG**（依存追加なし） |
| CT-TAS のナビ追加 | **今回は含めない**（ページ未実装。完成時に `NAV_ITEMS` に 1 行追加） |
| `Next.js SPA` バッジ | **削除** |

## アーキテクチャ

### データ層（Single Source of Truth）

新規 [lib/navigation.ts](lib/navigation.ts) にナビ項目を一元化。

```ts
export type NavCategory =
  | 'home'
  | 'foundation'              // 基礎テスト手法（8項目）
  | 'istqb-foundation-ext'    // CTFL-AT（1項目）
  | 'istqb-advanced'          // CTAL-* + CT-ATLaS（5項目）
  | 'istqb-specialist';       // CT-AI / GenAI / MBT / AcT / MAT（5項目、将来 CT-TAS 追加）

export interface NavItem {
  href: string;
  label: string;
  category: NavCategory;
  badge?: string;             // 'NEW' / 'Coming Soon' 等の拡張用
}

export interface NavGroup {
  category: NavCategory;
  title: string;
  items: NavItem[];
}

export const NAV_ITEMS: readonly NavItem[];
export function groupByCategory(items: readonly NavItem[]): NavGroup[];
```

将来 CT-TAS を追加する際は `NAV_ITEMS` に 1 エントリ追加するだけで Header に反映される。

### UI 層

[components/Header.tsx](components/Header.tsx) を以下の構造に再構築（`'use client'` 維持）。

```tsx
<nav class="nav-header" role="navigation" aria-label="グローバルナビゲーション">
  <Link class="nav-logo">QA_STUDIES</Link>
  <button class="nav-hamburger"
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
          aria-controls="global-nav-panel">
    {isOpen ? <SVG×/> : <SVG≡/>}
  </button>
  {isOpen && (
    <>
      <div class="nav-overlay" onClick={close} aria-hidden="true" />
      <aside id="global-nav-panel"
             class="nav-drawer"
             role="dialog" aria-modal="true"
             aria-label="ナビゲーションメニュー">
        {groups.map(g => (
          <section class="nav-drawer-section">
            <h2 class="nav-drawer-heading">{g.title}</h2>
            <ul class="nav-drawer-list">
              {g.items.map(item => (
                <li><Link href={item.href}
                          aria-current={pathname === item.href ? 'page' : undefined}
                          onClick={close}>{item.label}</Link></li>
              ))}
            </ul>
          </section>
        ))}
      </aside>
    </>
  )}
</nav>
```

### 状態 / a11y

- `useState<boolean>(false)` で開閉、`useCallback` で `close` を共有
- Escape キーで close（`useEffect` 内 `keydown` リスナ、cleanup あり）
- overlay クリック・リンククリックで close
- 開いている間は `document.body.style.overflow = 'hidden'`（cleanup で復元）
- 開いた直後に最初のリンクへ `focus()`（`useRef`）
- ボタンに `aria-expanded` / `aria-controls`、ドロワーに `role="dialog" aria-modal="true"`、アクティブリンクに `aria-current="page"`

### CSS

[app/globals.css](app/globals.css) に既存 `nav-*` セレクタと同方針（プレーンセレクタ）で追記。

- `.nav-hamburger` — 40×40px ボタン、`:focus-visible` で `--color-accent-cyan` アウトライン
- `.nav-overlay` — `position: fixed; inset: 60px 0 0 0;` 暗幕 + `backdrop-filter`
- `.nav-drawer` — Header 直下 top sheet、`grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` で 4 カラム可変
- `.nav-drawer-heading` — `var(--font-mono)` のカテゴリラベル
- `.nav-drawer-list a[aria-current="page"]` — `--color-accent-cyan` 左ボーダー強調
- `@keyframes nav-slide-down` / `nav-fade-in` で控えめなトランジション

旧 `.nav-links` 関連のレスポンシブ調整（globals.css 218-278 行 + 1143-1145 行）は Step 8/9 で削除する。

> **重要**: `app/globals.css` 編集後は `.claude/rules/css-cache-reset.md` に従い `make css-reset` でキャッシュ削除＋dev 再起動。

---

## TDD ステップ（11 コミット）

各ステップは Red（失敗テスト）→ Green（最小実装）→ 必要に応じて Refactor。各ステップ単体で `bun test` がグリーン、最終ステップで `bun run lint` / `bun run build` も通すこと。

### Step 1: `bun test` を npm scripts から実行可能にする

- **Edit**: [package.json](package.json) の `scripts` に `"test": "bun test"`, `"test:watch": "bun test --watch"` を追加
- **検証**: `bun test` 実行で既存 8 個のスケルトンが全て pass
- **Commit**: `chore(test): add bun test npm scripts`

### Step 2: `lib/navigation.ts` のテストを書く（Red）

- **New**: [tests/lib/navigation.test.ts](tests/lib/navigation.test.ts)
  - `NAV_ITEMS.length === 20`（home + 8 + 1 + 5 + 5）
  - `href` の重複なし
  - 各 `label` が非空
  - `/istqb-ct-ai-complete-guide` が `category: 'istqb-specialist'` であること
- **期待**: import 解決失敗で fail
- **Commit**: `test(navigation): add failing spec for NAV_ITEMS shape`

### Step 3: `lib/navigation.ts` 実装（Green）

- **New**: [lib/navigation.ts](lib/navigation.ts)
  - 型定義 + `NAV_ITEMS` 配列（既存 [components/Header.tsx:31-50](components/Header.tsx#L31-L50) の 19 リンク + ホーム = 20 件）
  - カテゴリ割当は決定事項表に従う
  - CT-TAS は含めない
- **Refactor**: `as const` / TS strict & `noUncheckedIndexedAccess` に配慮
- **Commit**: `feat(navigation): introduce NAV_ITEMS single source of truth`

### Step 4: `groupByCategory()` の Red → Green

- **Edit**: [tests/lib/navigation.test.ts](tests/lib/navigation.test.ts) に追加
  - 返却順が `home → foundation → istqb-foundation-ext → istqb-advanced → istqb-specialist` 固定
  - `foundation` グループは 8 件
  - 各グループに表示用 `title` が入る
- **Edit**: [lib/navigation.ts](lib/navigation.ts) に `groupByCategory` を実装（カテゴリ→日本語タイトル対応表を内部に持つ純関数）
- **Commit**: `feat(navigation): add groupByCategory helper for drawer rendering`

### Step 5: ハンバーガーボタンとトグル（Red → Green）

- **New**: [tests/components/Header.test.tsx](tests/components/Header.test.tsx)
  - `mock.module('next/navigation', () => ({ usePathname: () => '/' }))`
  - ボタンが `aria-label="メニューを開く"` `aria-expanded="false"` で存在
  - クリックで `aria-expanded="true"` にトグル
- **Edit**: [components/Header.tsx](components/Header.tsx)
  - `useState` 追加
  - 既存リンク群の手前に `<button class="nav-hamburger" …>` + インライン SVG（≡/×）追加
  - **このステップでは旧 `nav-links` ハードコードは残す**（テスト並行稼働のため）
- **Commit**: `feat(header): add hamburger toggle button with aria-expanded`

### Step 6: ドロワー描画（Red → Green）

- **Edit**: [tests/components/Header.test.tsx](tests/components/Header.test.tsx) に追加
  - 開くと `<h2>` で 4 カテゴリ見出しが描画される
  - `<dialog>` 内に 20 個の `<a>` が描画され、`/istqb-ct-ai-complete-guide` 等が含まれる
- **Edit**: [components/Header.tsx](components/Header.tsx)
  - `NAV_ITEMS` / `groupByCategory` を import
  - `isOpen === true` で `<aside role="dialog">` を描画、`groups.map → h2 + ul/li/Link`
- **Commit**: `feat(header): render category drawer driven by NAV_ITEMS`

### Step 7: close 動作（Escape / overlay / リンク）の Red → Green

- **Edit**: [tests/components/Header.test.tsx](tests/components/Header.test.tsx) に追加
  - Escape キーで dialog が消える
  - リンククリックで dialog が消える
  - overlay クリックで dialog が消える
- **Edit**: [components/Header.tsx](components/Header.tsx)
  - `useEffect` で `isOpen` 中だけ `document.addEventListener('keydown', onEsc)` + cleanup
  - overlay と各 Link に `onClick={close}`
  - `close` を `useCallback` で集約
- **Commit**: `feat(header): close drawer on escape, overlay click, link click`

### Step 8: アクティブパス + 旧リンク削除（Red → Green → Refactor）

- **Edit**: [tests/components/Header.test.tsx](tests/components/Header.test.tsx) に追加
  - `usePathname` モックを `/istqb-ct-ai-complete-guide` に差し替え（別 describe ブロック）
  - アクティブリンクに `aria-current="page"`、他のリンクには付かない
- **Edit**: [components/Header.tsx](components/Header.tsx)
  - 各 Link に `aria-current={pathname === item.href ? 'page' : undefined}`
  - **旧 `<div class="nav-links">…19 リンク…</div>` ブロックを削除**
  - **`<span class="nav-badge">Next.js SPA</span>` を削除**
- **Commit**: `refactor(header): drop legacy inline nav links and SPA badge, mark active via aria-current`

### Step 9: CSS スタイリング（Red → Green）

- **Edit**: [tests/components/Header.test.tsx](tests/components/Header.test.tsx) に「クラス名が付いていること」のテストを追加
  - ハンバーガーに `nav-hamburger` クラス
  - dialog に `nav-drawer` クラス
- **Edit**: [app/globals.css](app/globals.css) に追記
  - `.nav-hamburger`, `.nav-overlay`, `.nav-drawer`, `.nav-drawer-section`, `.nav-drawer-heading`, `.nav-drawer-list`, `.nav-drawer-badge`, `@keyframes`
  - 旧 `.nav-links` 関連セレクタ（218-263 行 + 1143-1145 行のレスポンシブ）を削除
- **キャッシュリセット**: `make css-reset` 実行
- **Commit**: `style(header): add drawer/overlay/hamburger styles to globals.css`

### Step 10: body スクロールロック + 初期フォーカス（Red → Green）

- **Edit**: [tests/components/Header.test.tsx](tests/components/Header.test.tsx) に追加
  - 開いている間 `document.body.style.overflow === 'hidden'`
  - 閉じると `document.body.style.overflow === ''`
  - 開いた直後 `document.activeElement` がドロワー内の最初の `<a>` と一致
- **Edit**: [components/Header.tsx](components/Header.tsx)
  - `useEffect` で `isOpen` を監視、`document.body.style.overflow` を制御（cleanup で復元）
  - `firstLinkRef = useRef<HTMLAnchorElement>(null)` を最初のリンクに付与、open 時 `firstLinkRef.current?.focus()`
- **Commit**: `feat(header): lock body scroll and focus first link when drawer opens`

### Step 11: 拡張性ガード（Red → Green）

- **Edit**: [tests/lib/navigation.test.ts](tests/lib/navigation.test.ts) に追加
  - 新しい specialist 項目（CT-TAS 想定）を spread で追加した配列を `groupByCategory` に渡すと、specialist グループに反映されることを確認
- **Edit**: [lib/navigation.ts](lib/navigation.ts) のファイル先頭に、新ガイド追加手順の日本語コメントを追記
- **Commit**: `test(navigation): cover extensibility for future specialist guides (e.g. CT-TAS)`

---

## 再利用する既存資産

- [components/Header.tsx:31-50](components/Header.tsx#L31-L50) — 既存 19 リンクの href / label をそのまま `NAV_ITEMS` へ移植
- [app/globals.css](app/globals.css) の CSS カスタムプロパティ群（`--color-*`, `--font-mono`, `--radius-sm`, `--shadow-DEFAULT`）— 新ドロワー CSS でも流用
- [app/istqb-ct-mbt-complete-guide/NavBar.tsx](app/istqb-ct-mbt-complete-guide/NavBar.tsx) — `aria-current="location"` 付与パターンの参照（グローバル版は `page` を使う点が違う）
- [bunfig.toml](bunfig.toml) `preload = ["./happydom-setup.ts"]` — Bun テストランナーの DOM 環境セットアップ
- [tests/istqb-ctal-tae-complete-guide/page.test.tsx](tests/istqb-ctal-tae-complete-guide/page.test.tsx) — `bun:test` + `@testing-library/react` の既存実装パターン参照

## 修正/新規ファイル一覧

| 操作 | パス |
|---|---|
| Edit | [package.json](package.json) |
| New | [lib/navigation.ts](lib/navigation.ts) |
| New | [tests/lib/navigation.test.ts](tests/lib/navigation.test.ts) |
| New | [tests/components/Header.test.tsx](tests/components/Header.test.tsx) |
| Edit | [components/Header.tsx](components/Header.tsx) |
| Edit | [app/globals.css](app/globals.css) |

## 検証

全 11 ステップ完了後、以下を実行：

```bash
bun test            # 既存 8 + 新規 (navigation 6, header 10+) = 全グリーン
bun run lint        # ESLint 0 エラー
bun run build       # Next.js プロダクションビルド成功
make css-reset      # CSS 変更後の dev キャッシュ削除＋再起動
bun run dev         # 手動: http://localhost:3000
```

手動確認チェックリスト（ブラウザ）:

- [ ] PC 幅（≥1280px）でハンバーガーボタンが Header 右側に表示される
- [ ] クリックで top sheet ドロワーが下方向にスライドダウン展開
- [ ] 4 カテゴリ見出し（基礎テスト手法 / ISTQB Foundation Extension / ISTQB Advanced / ISTQB Specialist）が見える
- [ ] 全 19 ガイド + ホームのリンクが描画されている
- [ ] 現在表示中のページに該当するリンクに左ボーダー強調（`aria-current="page"`）
- [ ] リンククリックで遷移 + ドロワー自動 close
- [ ] Escape キーで close
- [ ] overlay クリックで close
- [ ] 開いている間ページ本体がスクロールしない、閉じると復元
- [ ] モバイル幅（375px）でも同じ操作で動作（ドロワーは 1 カラムグリッドに自動再配置）
- [ ] `:focus-visible` でハンバーガーボタンに cyan アウトライン
- [ ] ダークモード配色が崩れない（CSS キャッシュリセット済み）

## リスク

- `mock.module('next/navigation', …)` が `bun test` で安定動作するか未検証。失敗時の代替: Header に `currentPath?: string` props を追加し `usePathname() ?? currentPath` のフォールバック方式にしてテスト時 props 注入。
- 初期フォーカスを「最初のリンク」に当てると、スクリーンリーダーが直接リンクを読み上げてしまい違和感が出る可能性。違和感が出たらドロワー自体 (`tabIndex={-1}`) にフォーカスする方式へ Step 10 のテスト書き換えで切替可能。
