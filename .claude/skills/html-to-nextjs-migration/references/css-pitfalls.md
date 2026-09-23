# CSS Pitfalls Checklist（learned from code reviews）

移行時に繰り返し発生してきた CSS 由来の不具合と、その正しい対処法。SKILL.md の Phase 3 から参照される。

| Issue | Wrong | Correct |
| --- | --- | --- |
| **テーブル文字色消失（薄水色グレー化）** | `td` に `color` 指定なし → `globals.css` の `td { color: var(--color-text-secondary); }`（`#8ea3c3`）が当たり文字が薄くなる | `.my-page tbody td, .my-page td { color: var(--ink) !important; font-size: 1rem !important; }` および `.my-page td * { color: var(--ink); }` でインク色を強制適用 |
| **テーブルヘッダー・ホバー崩れ** | `th { white-space: nowrap }` や `tr:hover td` の青背景が干渉 | `.my-page thead th { background: var(--navy) !important; color: #eaf4fb !important; white-space: normal !important; }`、`.my-page tbody tr:hover td { background: #fafbf8 !important; }` でリセット |
| **`strong` タグの白飛び** | `globals.css` の `td strong`, `.callout strong { color: var(--color-text-primary); }` が当たり白背景で文字が消える | `.my-page td strong { color: var(--navy) !important; }`, `.my-page strong, .my-page .callout strong { color: var(--navy-deep) !important; }` を明示指定 |
| Invalid property | `scrollbar-: none;` | `scrollbar-width: none;` |
| z-index duplication | `nav { z-index: 100; }` in CSS + `z-50` in JSX | Single source: Tailwind `z-50` in JSX only |
| Responsive outside @media | `.box { grid-template-columns: 1fr; }` at root | Wrap in `@media (max-width: 768px) { ... }` |
| KeyFrame naming | `@keyframes fadeUp` | `@keyframes fade-up` |
| Undefined CSS vars | `var(--r)` | `var(--radius-DEFAULT, 12px)` |
| Vendor scrollbar only | `::-webkit-scrollbar` (WebKit) | Add `scrollbar-width: none` (Firefox) |
| `.code-block` 内の改行 | `<span>line1</span>{"\n"}<span>line2</span>` | 各行を `<div className="code-line"><span>line1</span></div>` でラップ |
| page-sticky nav の top | `position: sticky; top: 0;` | `top: calc(60px + var(--disclaimer-height, 0px))`（グローバル Header + DisclaimerBanner の高さ分オフセット） |
| アニメーションの消失 | `max-width: 0` のまま固定され見えなくなる | `@media (prefers-reduced-motion: reduce)` 内で `max-width: 100% !important;` を指定 |
| 背景クリック妨害 | `::before` に `z-index` 指定なし | `pointer-events: none;` と `z-index: 0`（または負の値）を指定 |
| ヘッダーオフセット二重カウント | `.page-layout { margin-top: 60px; }` | 削除。`layout-content` が既に `padding-top: 60px` を持つため不要。60px の余白が二重になる |
| globals `section` 干渉 | ページ固有 section に余分な `padding-top: 5rem`(80px) が付く | `.page-layout section { padding-top: 0; }` でリセット |
| globals `.hero` 干渉 | `.hero { min-height: 100vh; }` でヒーローが全画面高さになりコンテンツが押し下がる | `.page-layout .hero { min-height: 0; display: block; padding-top: 0; }` でリセット |
| globals `main` 干渉 | `main { max-width: 1100px; margin: 0 auto; }` で幅が制限・中央寄せになる | `.page-layout .main { flex: 1 1 auto; max-width: none !important; width: 100% !important; margin: 0 !important; }` で画面いっぱいに広げる |
| Mermaid 図の表示圧縮 | ページ固有 Flexbox と `globals.css` の `.mermaid-wrapper` (max-width) が競合し、図が極端に縮小される | ページ固有 CSS で `.mermaid-wrapper` の `max-width: 100% !important` 化と背景・ボーダーの透明化リセットを適用 |
| Mermaid エッジラベルの黒潰れ/色崩れ | `Mermaid.tsx` のグローバルダークテーマ設定や SVG 内部構造（`foreignObject`, `rect`）と競合し、分岐テキスト（はい/いいえ）が黒四角に潰れる | `.claude/skills/fix-mermaid/SKILL.md` の「ページ固有テーマの上書き」節（`%%{init}%%` ディレクティブ + CSS セーフティネット）を適用する |
| リストの点（マーカー）消失 | Tailwind Preflight が `ul`, `ol` を `list-style: none` にリセットし、箇条書きの点（•）が消える | ページ固有 CSS で `.page-layout ul.plain` 等のリスト**コンテナ**に `list-style-type: disc !important;`（順序付きは `decimal !important;`）を指定して復元する |
| コードブロックCSSの欠落 | ページ固有 CSS に `.code-block` や `.code-line` 等の定義が抜けている | ページ固有 CSS に `.code-block`, `.code-line` および `.code-keyword` 等のシンタックスハイライト定義を追加してインデント・配色を適用する |
| 機械翻訳調の誤記（of） | Mermaid 等の中に「成果物 of 誤り」「インタフェース of 検証」などの直訳表現が残る | 機械翻訳で発生しやすい「A of B」の直訳を「AのB」といった適切な日本語表現に修正する |
| **サイドバー境界線のコントラスト不足** | `.sidebar { border-right: 1px solid var(--border); }` で、`--border` と隣接する `--bg`/`--bg-soft` の明度差が小さいライトテーマページでは境界線がほぼ見えなくなる | `.sidebar { border-right: 2px solid var(--border-strong); }` のように、より濃い変数・太めの幅を使う。修正後は必ず `.claude/rules/css-cache-reset.md` の手順で `.next` を再ビルドしてから目視確認する（stale cache で「直したのに反映されない」と誤認しやすい） |
