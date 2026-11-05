import React from 'react';
import CodeExample from './CodeExample';
export default function Category() { return <>
<h2 id="step-5-新規基準の実装ガイドコード付き">{"\n                Step 5. 新規基準の実装ガイド（コード付き）\n            "}</h2>
{"\n            "}
<blockquote className="callout">{"\n                "}<p>{"\n                    以下のコードは学習用の最小例です。達成基準の例外条件や判定の詳細は、必ず W3C の\n                    "}<strong>{"Understanding WCAG 2.2"}</strong>{" で確認してください。\n                "}</p>{"\n            "}</blockquote>
{"\n            "}
<h3 id="51-2411-フォーカスが隠れない最小">{"5.1 2.4.11 フォーカスが隠れない（最小）"}</h3>
{"\n            "}
<p>{"\n                "}<strong>{"よくある失敗"}</strong>{": 画面上部に固定ヘッダーがあり、Tab\n                キーで移動した要素がヘッダーの裏に隠れる。\n            "}</p>
{"\n            "}
<CodeExample language="css" code={"/* 固定ヘッダーの高さぶん、スクロール時の余白を確保する */\nhtml {\n  scroll-padding-top: 5rem;     /* 固定ヘッダーの高さに合わせる */\n  scroll-padding-bottom: 4rem;  /* 固定フッターがある場合 */\n}\n\n/* フォーカス表示は常に見えるようにする */\n:focus-visible {\n  outline: 3px solid #1a5fb4;\n  outline-offset: 2px;\n}"} />
{"\n            "}
<p>{"\n                "}<strong>{"確認方法（キーボードスイープ）"}</strong>{": マウスを使わず Tab / Shift+Tab\n                で全体を巡回し、フォーカスされた要素が固定要素やモーダルで完全に隠れないか確認します。Cookie\n                バナーやチャットウィジェットも対象です。\n            "}</p>
{"\n            "}
<h3 id="52-258-ターゲットのサイズ最小">{"5.2 2.5.8 ターゲットのサイズ（最小）"}</h3>
{"\n            "}
<p>{"\n                "}<strong>{"基本ルール"}</strong>{": ポインタで操作する対象は 24×24 CSS\n                ピクセル以上。ただし次の例外があります。\n            "}</p>
{"\n            "}
<div className="table-scroll">{"\n                "}<table><thead><tr className="header"><th>{"例外"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"間隔"}</td><td>{"24px 未満でも、周囲に十分な間隔があり他の対象と干渉しない"}</td></tr><tr className="even"><td>{"同等の手段"}</td><td>{"同じ機能を果たす別の対象が基準を満たしている"}</td></tr><tr className="odd"><td>{"インライン"}</td><td>{"文章中のリンクなど、行の高さ等で大きさが制約される"}</td></tr><tr className="even"><td>{"ユーザーエージェント制御"}</td><td>{"ブラウザ標準のコントロールで、作者が大きさを変更していない"}</td></tr><tr className="odd"><td>{"本質的"}</td><td>{"表現上その大きさが不可欠な場合"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<CodeExample language="css" code={"/* アイコンボタンの最小サイズを確保 */\n.icon-button {\n  min-inline-size: 24px;\n  min-block-size: 24px;\n  padding: 8px;               /* 実際のタップ領域は広めに取るのが推奨 */\n}"} />
{"\n            "}
<p>{"\n                "}<strong>{"実務のヒント"}</strong>{": 24px は「最小限」です。指でタップする UI\n                では、より大きい 44×44 CSS px（現行の AAA 基準である 2.5.5\n                の目安）を目標にすると、操作しやすさが大きく向上します。実際に 16×16\n                のアイコンボタンや密集したインラインリンクが、この基準で問題になりやすい箇所です。\n            "}</p>
{"\n            "}
<h3 id="53-257-ドラッグ動作">{"5.3 2.5.7 ドラッグ動作"}</h3>
{"\n            "}
<p>{"\n                ドラッグ＆ドロップで並べ替えるリストには、単純なポインタ操作で同じことができる手段を併設します。\n            "}</p>
{"\n            "}
<CodeExample language="html" code={"<li>\n  項目A\n  <button type=\"button\" aria-label=\"項目Aを上へ移動\">上へ</button>\n  <button type=\"button\" aria-label=\"項目Aを下へ移動\">下へ</button>\n</li>"} />
{"\n            "}
<h3 id="54-326-一貫したヘルプ">{"5.4 3.2.6 一貫したヘルプ"}</h3>
{"\n            "}
<p>{"\n                ヘルプ（連絡先、チャット、FAQ\n                へのリンクなど）を複数ページに置く場合、"}<strong>{"ページ間で同じ相対的な位置・順序"}</strong>{"に配置します。\n            "}</p>
{"\n            "}
<div className="table-scroll">{"\n                "}<table><thead><tr className="header"><th>{"NG"}</th><th>{"OK"}</th></tr></thead><tbody><tr className="odd"><td>{"\n                                ページごとにヘルプリンクがヘッダーだったりフッターだったり変わる\n                            "}</td><td>{"すべてのページでフッターの同じ位置にヘルプリンクを置く"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<h3 id="55-337-冗長な入力">{"5.5 3.3.7 冗長な入力"}</h3>
{"\n            "}
<p>{"\n                同じプロセス内で"}<strong>{"すでに入力した情報"}</strong>{"は、自動入力するか選択肢として提示します（セキュリティ上の再入力が必要な場合などは例外）。\n            "}</p>
{"\n            "}
<CodeExample language="html" code={"<!-- 配送先と請求先が同じ場合のチェックボックス -->\n<label>\n  <input type=\"checkbox\" id=\"same-address\">\n  請求先は配送先と同じ\n</label>\n\n<!-- 標準的な属性値で、ブラウザの自動入力を助ける -->\n<input type=\"text\" id=\"postal\" name=\"postal-code\" autocomplete=\"postal-code\">"} />
{"\n            "}
<h3 id="56-338-アクセシブルな認証最小">{"5.6 3.3.8 アクセシブルな認証（最小）"}</h3>
{"\n            "}
<p>{"\n                認証の手順で、記憶・転記・パズル解決のような"}<strong>{"認知機能テスト"}</strong>{"を、代替なしで求めないようにします。\n            "}</p>
{"\n            "}
<CodeExample language="html" code={"<!-- パスワードマネージャーと貼り付けを妨げない -->\n<input type=\"password\" id=\"pw\" name=\"password\" autocomplete=\"current-password\">"} />
{"\n            "}
<div className="table-scroll">{"\n                "}<table><thead><tr className="header"><th>{"やってよい・推奨"}</th><th>{"避けるべき"}</th></tr></thead><tbody><tr className="odd"><td>{"パスワードマネージャー対応"}</td><td>{"貼り付け（ペースト）の禁止"}</td></tr><tr className="even"><td>{"メールリンク、パスキー、SSO などの代替手段"}</td><td>{"画像の文字を読み取って入力させる CAPTCHA のみ"}</td></tr><tr className="odd"><td>{"コピー＆ペーストの許可"}</td><td>{"「前に登録した答え」を記憶で答えさせるのみ"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<h3 id="57-2413-フォーカスの外観aaa参考">{"5.7 2.4.13 フォーカスの外観（AAA・参考）"}</h3>
{"\n            "}
<p>{"\n                フォーカス表示は、その"}<strong>{"面積"}</strong>{"が「フォーカス前のコンポーネント（またはサブコンポーネント）の外周を囲む、太さ\n                2 CSS px の線の面積」以上であることと、フォーカス前後の同じピクセル間で\n                "}<strong>{"3:1 以上のコントラスト変化"}</strong>{"があることが求められます。要件は面積で判定するため、5.1 の CSS 例で使っている 3 px\n                のアウトラインは満たし方の一例であり、あらゆる形状で「太さ 2\n                px」を測ることが求められているわけではありません。AA の\n                2.4.7（フォーカスの可視化）よりも具体的な数値要件を持つため、AAA\n                に分類されています。AA\n                目標の組織でも、デザインシステムのフォーカススタイルに先取りで取り入れる価値があります。\n            "}</p>
{"\n            "}
</>; }
