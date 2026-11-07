import React from 'react';
import Diagram from './Diagram';
export default function Category() { return <>
<h2 id="0-このガイドの読み方">{"0. このガイドの読み方"}</h2>
{"\n            "}
<h3 id="01-ゴール">{"0.1 ゴール"}</h3>
{"\n            "}
<p>{"このガイドを読み終えると、次の5つに自分の言葉で答えられるようになります。"}</p>
{"\n            "}
<div aria-label="表：0.1 ゴールの問いと対応する章" className="table-scroll" role="region" tabIndex={0}>{"\n                "}<table><thead><tr className="header"><th>{"#"}</th><th>{"問い"}</th><th>{"対応する章"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"ISO/IEC 40500:2025 とは何か。WCAG 2.2 とどう違うのか"}</td><td>{"Step 1〜2"}</td></tr><tr className="even"><td>{"2"}</td><td>{"\n                                規格の中身（原則・ガイドライン・達成基準・適合レベル）はどう構成されているか\n                            "}</td><td>{"Step 3"}</td></tr><tr className="odd"><td>{"3"}</td><td>{"WCAG 2.2 で何が新しくなったのか"}</td><td>{"Step 4〜5"}</td></tr><tr className="even"><td>{"4"}</td><td>{"自分のプロジェクトは「準拠している」とどう判断するのか"}</td><td>{"Step 6"}</td></tr><tr className="odd"><td>{"5"}</td><td>{"EU の法規制や今後の動き（WCAG 3 など）とどう関係するのか"}</td><td>{"Step 7〜8"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<h3 id="02-学習の全体像">{"0.2 学習の全体像"}</h3>
{"\n            "}
<Diagram id="mermaid-diagram-0" />
{"\n            "}
<h3 id="03-用語のミニ辞書">{"0.3 用語のミニ辞書"}</h3>
{"\n            "}
<div aria-label="表：0.3 用語のミニ辞書" className="table-scroll" role="region" tabIndex={0}>{"\n                "}<table><thead><tr className="header"><th>{"用語"}</th><th>{"意味"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"WCAG"}</strong></td><td>{"\n                                Web Content Accessibility Guidelines。W3C\n                                が策定するウェブコンテンツのアクセシビリティ指針\n                            "}</td></tr><tr className="even"><td><strong>{"W3C"}</strong></td><td>{"World Wide Web Consortium。Web 標準を策定する国際的な団体"}</td></tr><tr className="odd"><td><strong>{"WAI"}</strong></td><td>{"\n                                Web Accessibility Initiative。W3C\n                                の中でアクセシビリティを担当する活動\n                            "}</td></tr><tr className="even"><td><strong>{"ISO/IEC JTC 1"}</strong></td><td>{"ISO と IEC の合同技術委員会（情報技術分野を担当）"}</td></tr><tr className="odd"><td><strong>{"達成基準（Success Criterion, SC）"}</strong></td><td>{"\n                                「テストできる文」で書かれた個々の要件。例: 2.5.8\n                                ターゲットサイズ（最小）\n                            "}</td></tr><tr className="even"><td><strong>{"CSS ピクセル"}</strong></td><td>{"画面の物理解像度に依存しない CSS 上の長さの単位"}</td></tr><tr className="odd"><td><strong>{"EAA"}</strong></td><td>{"European Accessibility Act（欧州アクセシビリティ法）"}</td></tr><tr className="even"><td><strong>{"EN 301 549"}</strong></td><td>{"欧州の ICT 製品・サービスのアクセシビリティ要件の標準"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
</>; }
