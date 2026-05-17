# REUSABLE_PROMPTS.md

再利用可能なプロンプト集。Claude Code への依頼文を記録し、同パターンの作業を効率化する。

---

## 目次

### ナビゲーション UI

- [NAV-1] [ページ内スティッキーナビの不具合修正](#nav-1-ページ内スティッキーナビの不具合修正)
- [NAV-2] [ページ内スティッキーナビの新規追加](#nav-2-ページ内スティッキーナビの新規追加)

---

## ナビゲーション UI

---

### [NAV-1] ページ内スティッキーナビの不具合修正

**目的**: スクロール時に消えたり、DisclaimerBanner と重なるページ内ナビを修正する  
**参照実装**: `app/istqb-ct-ai-complete-guide/` — 正常動作するページ  
**既知の不具合パターン（3種類）**:

1. ページ root div に `overflow-x: hidden` → `position: sticky` が無効化される
2. NavBar.tsx のレンダークラス名（例: `sticky-nav`）と CSS セレクター（例: `.nav`）が不一致
3. CSS の `top` が `60px` 固定で DisclaimerBanner の高さ未考慮 / page.tsx に `div.layout-content` が二重ネスト

```
以下の各画面での画面内のナビゲーションリンクが警告のディスクレーマーと重なっていたり
スクロールすると画面から消えてしまうので、
/istqb-ct-ai-complete-guide の画面と同様に
ディスクレーマーの下にナビゲーションを表示させ、
スクロールしても画面から消えないように固定してください。

改修が必要な画面:
- <ページ名1>（例: モデルベーステスト(CT-MBT)ガイド）
- <ページ名2>
- ...

参照実装: app/istqb-ct-ai-complete-guide/NavBar.tsx および
          app/istqb-ct-ai-complete-guide/istqb-ct-ai-complete-guide.css

調査・修正の観点:
1. 各ページの root div（例: .istqb-ct-XXX-page）に overflow-x: hidden がないか確認する。
   ある場合はコンテンツラッパー div（NavBar の兄弟要素）に移動する。
2. NavBar.tsx のレンダーするクラス名と CSS セレクターが一致しているか確認する。
3. CSS の sticky-nav / page-nav の top 値が
   top: calc(60px + var(--disclaimer-height, 0px)) になっているか確認する。
4. page.tsx 内に <div className="layout-content"> が二重ネストしていないか確認する。
   Root layout の <main className="layout-content"> と重複する場合はページ側を削除する。
```

**チェックリスト（修正後）**:

- [ ] `bun run build` エラーなし
- [ ] `bun run lint` エラーなし
- [ ] 各対象ページをブラウザで確認: DisclaimerBanner 直下に NavBar が表示され、スクロールで消えない

---

### [NAV-2] ページ内スティッキーナビの新規追加

**目的**: ページ内ナビゲーションがないページに、CT-AI と同じパターンで新規実装する  
**参照実装**: `app/istqb-ct-ai-complete-guide/` — NavBar.tsx・CSS・page.tsx の 3 点セット  
**NavBar 未実装のページ（2025-05-17 時点）**:

- `acceptance-testing-guide`
- `ai-test-guide`
- `bdd-testing-guide`
- `e2e-testing-guide`
- `integration-functional-testing-guide`
- `integration-system-testing-guide`
- `software-testing-methodologies-guide`
- `unit-testing-guide`
- `istqb-ctfl-at-complete-guide`
- `istqb-ctal-tae-complete-guide`

```
以下の画面にページ内のスティッキーナビゲーションを新規追加してください。
/istqb-ct-ai-complete-guide の実装を参考にしてください。

追加対象:
- <ページルートパス>（例: /acceptance-testing-guide）
  対応ファイル: app/acceptance-testing-guide/page.tsx

実装要件:
1. app/<ページ名>/NavBar.tsx を新規作成する
   - 'use client' ディレクティブを付与する
   - useEffect + IntersectionObserver でスクロールスパイを実装する
   - activeId に一致するリンクに aria-current="location" を付与する
   - リンクはページ内の section[id] に対応させる
2. CSS（ページ固有の *.css ファイル）に以下を追加する
   .sticky-nav {
     position: sticky;
     top: calc(60px + var(--disclaimer-height, 0px));
     z-index: 40;
     background: rgba(10, 14, 26, 0.92);
     backdrop-filter: blur(16px);
     border-bottom: 1px solid var(--color-border);
     overflow-x: auto;
   }
   .nav-inner {
     display: flex;
     align-items: center;
     gap: 0;
     padding: 0 1rem;
     white-space: nowrap;
   }
3. page.tsx の return の最初（コンテンツより前）に <NavBar /> を配置する
4. ページ root div に overflow-x: hidden を付けない
   （付ける場合はコンテンツラッパーに限定する）

参照実装:
  app/istqb-ct-ai-complete-guide/NavBar.tsx
  app/istqb-ct-ai-complete-guide/istqb-ct-ai-complete-guide.css（sticky-nav 部分）
  app/istqb-ct-ai-complete-guide/page.tsx（<NavBar /> の配置位置）
```

**チェックリスト（追加後）**:

- [ ] `bun run build` エラーなし
- [ ] `bun run lint` エラーなし
- [ ] 対象ページをブラウザで確認: DisclaimerBanner 直下に NavBar が表示される
- [ ] スクロール時に NavBar が固定されたまま残る
- [ ] アクティブセクションのリンクがハイライトされる

---

<!-- 新しいプロンプトはここに追加する -->
<!-- フォーマット:
### [カテゴリ略称-N] タイトル
**目的**: ...
**参照実装**: ...（あれば）

```
プロンプト本文
```

**チェックリスト（実施後）**:
- [ ] ...
-->
