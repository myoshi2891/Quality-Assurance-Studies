import React from 'react';
import Diagram from './Diagram';
export default function Category() { return <>
<h2 id="step-3-規格の構造を理解する">{"Step 3. 規格の構造を理解する"}</h2>
{"\n            "}
<p>{"\n                WCAG は「4つの原則 → 13のガイドライン → 達成基準 →\n                適合レベル」の階層で整理されています。\n            "}</p>
{"\n            "}
<h3 id="31-階層構造">{"3.1 階層構造"}</h3>
{"\n            "}
<Diagram id="mermaid-diagram-3" />
{"\n            "}
<blockquote className="callout">{"\n                "}<p>{"\n                    WCAG 本体はテクノロジー非依存で書かれています。「HTML\n                    ならこう書く」といった具体的な実装方法は、"}<strong>{"Understanding WCAG 2"}</strong>{"\n                    と "}<strong>{"Techniques for WCAG 2"}</strong>{" という別文書が担います。ISO/IEC 40500\n                    に含まれるのは WCAG 本体です。\n                "}</p>{"\n            "}</blockquote>
{"\n            "}
<h3 id="32-4つの原則pour">{"3.2 4つの原則（POUR）"}</h3>
{"\n            "}
<div className="table-scroll">{"\n                "}<table><thead><tr className="header"><th>{"原則"}</th><th>{"英語"}</th><th>{"意味"}</th><th>{"具体例"}</th></tr></thead><tbody><tr className="odd"><td>{"1. 知覚可能"}</td><td><strong>{"P"}</strong>{"erceivable"}</td><td>{"情報と UI を、ユーザーが知覚できる形で提示する"}</td><td>{"画像の代替テキスト、十分な色のコントラスト"}</td></tr><tr className="even"><td>{"2. 操作可能"}</td><td><strong>{"O"}</strong>{"perable"}</td><td>{"UI とナビゲーションを、さまざまな方法で操作できる"}</td><td>{"キーボードだけで操作、時間制限の配慮"}</td></tr><tr className="odd"><td>{"3. 理解可能"}</td><td><strong>{"U"}</strong>{"nderstandable"}</td><td>{"情報と UI の操作が理解できる"}</td><td>{"入力エラーの分かりやすい説明、一貫したナビゲーション"}</td></tr><tr className="even"><td>{"4. 堅牢"}</td><td><strong>{"R"}</strong>{"obust"}</td><td>{"支援技術を含むさまざまなユーザーエージェントで解釈できる"}</td><td>{"正しい名前・役割・値（name, role, value）の提供"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<h3 id="33-3つの適合レベル">{"3.3 3つの適合レベル"}</h3>
{"\n            "}
<div className="table-scroll">{"\n                "}<table><thead><tr className="header"><th>{"レベル"}</th><th>{"位置づけ"}</th><th>{"実務での目安"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"A"}</strong></td><td>{"最低限。満たさないと利用できなくなる人が出やすい"}</td><td>{"すべてのサイトが最低限満たす"}</td></tr><tr className="even"><td><strong>{"AA"}</strong></td><td>{"標準的な目標。多くの法令・調達要件が参照"}</td><td><strong>{"多くの組織の事実上の目標"}</strong></td></tr><tr className="odd"><td><strong>{"AAA"}</strong></td><td>{"最高水準。コンテンツ全体で満たすのは現実的でない場合もある"}</td><td>{"可能な範囲で部分的に採用"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<h3 id="34-達成基準の数wcag-22">{"3.4 達成基準の数（WCAG 2.2）"}</h3>
{"\n            "}
<div className="table-scroll">{"\n                "}<table><thead><tr className="header"><th>{"レベル"}</th><th>{"WCAG 2.1"}</th><th>{"2.2 での増減"}</th><th>{"WCAG 2.2"}</th></tr></thead><tbody><tr className="odd"><td>{"A"}</td><td>{"30"}</td><td>{"新規 +2、4.1.1 削除 −1"}</td><td>{"31"}</td></tr><tr className="even"><td>{"AA"}</td><td>{"20"}</td><td>{"新規 +4"}</td><td>{"24"}</td></tr><tr className="odd"><td>{"AAA"}</td><td>{"28"}</td><td>{"新規 +3"}</td><td>{"31"}</td></tr><tr className="even"><td><strong>{"合計"}</strong></td><td>{"78"}</td><td>{"新規 +9、削除 −1"}</td><td><strong>{"86"}</strong></td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<blockquote className="callout">{"\n                "}<p>{"\n                    達成基準の総数は W3C\n                    公式の一覧で必ず再確認してください（本表は新規9・削除1の増減から算出した目安です）。\n                "}</p>{"\n            "}</blockquote>
{"\n            "}
<h3 id="35-適合の5つの要件ここを知らないと準拠を主張できない">{"\n                3.5 適合の5つの要件（ここを知らないと「準拠」を主張できない）\n            "}</h3>
{"\n            "}
<p>{"WCAG の適合（Conformance）には、レベルを選ぶだけでなく次の要件があります。"}</p>
{"\n            "}
<div className="table-scroll">{"\n                "}<table><thead><tr className="header"><th>{"#"}</th><th>{"要件"}</th><th>{"平たく言うと"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"適合レベル"}</td><td>{"A・AA・AAA のどれかを満たす（下位レベルをすべて含む）"}</td></tr><tr className="even"><td>{"2"}</td><td>{"ページ全体"}</td><td>{"「ページの一部だけ」ではなく、ページ全体が適合している"}</td></tr><tr className="odd"><td>{"3"}</td><td>{"プロセス全体"}</td><td>{"購入や申込みなど、一連のプロセス全体が適合している"}</td></tr><tr className="even"><td>{"4"}</td><td>{"アクセシビリティ サポーテッドな技術の使用"}</td><td>{"支援技術などで実際に使える方法で技術を使う"}</td></tr><tr className="odd"><td>{"5"}</td><td>{"非干渉"}</td><td>{"使っている技術が、他の達成基準の達成を妨げない"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<blockquote className="callout">{"\n                "}<p>{"\n                    実務では「トップページだけ直した」では準拠と言えません。購入フローなら"}<strong>{"カート → 入力 → 確認 → 完了"}</strong>{"まで通して適合する必要があります。\n                "}</p>{"\n            "}</blockquote>
{"\n            "}
</>; }
