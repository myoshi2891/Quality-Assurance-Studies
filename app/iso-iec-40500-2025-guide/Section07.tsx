import React from 'react';
import Diagram from './Diagram';
export default function Category() { return <>
<h2 id="step-6-準拠の判断と進め方">{"Step 6. 準拠の判断と進め方"}</h2>
{"\n            "}
<h3 id="61-達成基準が満たされているかを判断するフロー">{"\n                6.1 達成基準が満たされているかを判断するフロー\n            "}</h3>
{"\n            "}
<Diagram id="mermaid-diagram-5" />
{"\n            "}
<h3 id="62-現実的な進め方既存サービスを-wcag-21-aa-から-22-aa-へ">{"\n                6.2 現実的な進め方（既存サービスを WCAG 2.1 AA から 2.2 AA へ）\n            "}</h3>
{"\n            "}
<Diagram id="mermaid-diagram-6" />
{"\n            "}
<blockquote className="callout">{"\n                "}<p>{"\n                    新規の "}<strong>{"A/AA"}</strong>{" は 6 基準です（A: 3.2.6、3.3.7／AA:\n                    2.4.11、2.5.7、2.5.8、3.3.8）。まずここから着手するのが一般的です。\n                "}</p>{"\n                "}<p>{"\n                    "}<strong>{"4.1.1（構文解析）の扱いに注意"}</strong>{": WCAG 2.2 では 4.1.1\n                    が削除されましたが、契約・調達要件や法令が WCAG 2.0 または 2.1\n                    を参照している場合は、引き続き 4.1.1\n                    の試験と報告が求められることがあります。移行の前に、自組織に適用される契約・法令がどの版を要求しているかを確認してください。\n                "}</p>{"\n            "}</blockquote>
{"\n            "}
<h3 id="63-テストの種類と役割">{"6.3 テストの種類と役割"}</h3>
{"\n            "}
<div className="table-scroll">{"\n                "}<table><thead><tr className="header"><th>{"テスト"}</th><th>{"得意なこと"}</th><th>{"苦手なこと"}</th></tr></thead><tbody><tr className="odd"><td>{"自動テスト（axe, Lighthouse, Pa11y など）"}</td><td>{"\n                                欠落した代替テキスト、コントラスト不足など、機械的に判定できる問題\n                            "}</td><td>{"文脈や意味の判断、フォーカス順序の妥当性、認証手順の設計"}</td></tr><tr className="even"><td>{"手動のキーボードテスト"}</td><td>{"フォーカス可視性、隠れ、操作可能性"}</td><td>{"大量ページの網羅"}</td></tr><tr className="odd"><td>{"スクリーンリーダー確認"}</td><td>{"名前・役割・値、読み上げ順序"}</td><td>{"設定・環境の差による再現性"}</td></tr><tr className="even"><td>{"ユーザーテスト"}</td><td>{"実際の利用者の困りごと"}</td><td>{"準備コスト"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<blockquote className="callout">{"\n                "}<p>{"\n                    新規基準の多くは"}<strong>{"手動確認が必要"}</strong>{"と、実務の指針でも繰り返し指摘されています。自動テストの緑だけで「準拠」と判断しないでください。\n                "}</p>{"\n            "}</blockquote>
{"\n            "}
<h3 id="64-qaエンジニア向けチェック表新規基準">{"\n                6.4 QAエンジニア向けチェック表（新規基準）\n            "}</h3>
{"\n            "}
<div className="table-scroll">{"\n                "}<table><thead><tr className="header"><th>{"SC"}</th><th>{"確認手順（最短）"}</th><th>{"合否の目安"}</th></tr></thead><tbody><tr className="odd"><td>{"2.4.11"}</td><td>{"Tab で全要素を巡回"}</td><td>{"固定要素にフォーカス対象が完全に隠れない"}</td></tr><tr className="even"><td>{"2.5.7"}</td><td>{"ドラッグ可能な UI を探す"}</td><td>{"クリック・ボタン等の代替手段がある"}</td></tr><tr className="odd"><td>{"2.5.8"}</td><td>{"開発者ツールで要素サイズを計測"}</td><td>{"24×24 以上、または例外・間隔条件を満たす"}</td></tr><tr className="even"><td>{"3.2.6"}</td><td>{"複数ページのヘルプ位置を比較"}</td><td>{"毎回同じ相対位置・順序"}</td></tr><tr className="odd"><td>{"3.3.7"}</td><td>{"複数ステップのフォームを通す"}</td><td>{"既入力の再入力を強いない（例外除く）"}</td></tr><tr className="even"><td>{"3.3.8"}</td><td>{"ログイン手順を確認"}</td><td>{"\n                                認知機能テストを使う場合は、代替手段または支援の仕組みがある。パスワードやコードを入力させる場合は、ペーストと自動入力を妨げない\n                            "}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
</>; }
