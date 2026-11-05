import React from 'react';
import Diagram from './Diagram';
export default function Category() { return <>
<h2 id="step-1-isoiec-405002025-とは何か">{"Step 1. ISO/IEC 40500:2025 とは何か"}</h2>
{"\n            "}
<h3 id="11-ひとことで言うと">{"1.1 ひとことで言うと"}</h3>
{"\n            "}
<p>{"\n                "}<strong>{"「W3C が作った WCAG 2.2 を、ISO/IEC\n                の国際標準として正式に位置づけたもの」"}</strong>{"です。内容は WCAG 2.2 そのものであり、ISO\n                が別の要件を新しく作ったわけではありません。\n            "}</p>
{"\n            "}
<h3 id="12-なぜ-iso-化するのか">{"1.2 なぜ ISO 化するのか"}</h3>
{"\n            "}
<p>{"\n                WCAG は W3C\n                の勧告（Recommendation）として世界中で広く使われています。しかし、国や公共機関によっては「ISO/IEC\n                の国際標準でなければ法令や調達基準に引用できない」という事情があります。ISO/IEC\n                化により、"}<strong>{"より多くの国が WCAG 2.2 を正式に採用しやすくなる"}</strong>{"ことが、W3C と ISO/IEC JTC 1 の双方から説明されています。\n            "}</p>
{"\n            "}
<h3 id="13-関係者の整理">{"1.3 関係者の整理"}</h3>
{"\n            "}
<Diagram id="mermaid-diagram-1" />
{"\n            "}
<h3 id="14-基本情報iso-公式ページの記載">{"1.4 基本情報（ISO 公式ページの記載）"}</h3>
{"\n            "}
<div className="table-scroll">{"\n                "}<table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"規格番号"}</td><td>{"ISO/IEC 40500:2025"}</td></tr><tr className="even"><td>{"版"}</td><td>{"Edition 2（第2版）"}</td></tr><tr className="odd"><td>{"発行"}</td><td>{"\n                                2025年9月（ISO のステージ履歴では 2025-09-24 に International\n                                Standard published）\n                            "}</td></tr><tr className="even"><td>{"ページ数"}</td><td>{"72 ページ"}</td></tr><tr className="odd"><td>{"担当委員会"}</td><td>{"ISO/IEC JTC 1（Information technology）"}</td></tr><tr className="even"><td>{"ICS 分類"}</td><td>{"35.080（Software）"}</td></tr><tr className="odd"><td>{"入手"}</td><td>{"ISO サイトから "}<strong>{"無償"}</strong>{"（価格欄は CHF 0）"}</td></tr><tr className="even"><td>{"前の版"}</td><td>{"ISO/IEC 40500:2012（WCAG 2.0 に対応。現在は Withdrawn）"}</td></tr><tr className="odd"><td>{"現在のステージ"}</td><td>{"90.92（To be revised：改訂予定。2026-02-05 に遷移）"}</td></tr><tr className="even"><td>{"次の版"}</td><td>{"ISO/IEC DIS 40500（Draft International Standard）が策定中"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<blockquote className="callout">{"\n                "}<p>{"\n                    "}<strong>{"ポイント"}</strong>{": 「2025」は ISO としての発行年です。中身の WCAG 2.2\n                    の版とは別の話なので、Step 2 で整理します。\n                "}</p>{"\n            "}</blockquote>
{"\n            "}
</>; }
