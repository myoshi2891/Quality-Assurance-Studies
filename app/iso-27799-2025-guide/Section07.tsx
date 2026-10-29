import React from 'react';
import Diagram from './Diagram';
export default function Section07() { return <>
<h2 id="step-7第4章-general-の読みどころ安全性comply-or-explain27001併用">{"\n                    Step 7：第4章 General の読みどころ（安全性・Comply or Explain・27001併用）"}<a aria-label="リンク" className="anchor" href="#step-7第4章-general-の読みどころ安全性comply-or-explain27001併用">{"#"}</a></h2>

<p>{"\n                    第4章は短いですが、"}<strong>{"規格の思想"}</strong>{"が詰まっています。必ず読みましょう。\n                "}</p>

<h3 id="7-1-42-safety安全性セキュリティ安全有効性は相互依存">{"\n                    7-1. 4.2 Safety（安全性）：セキュリティ・安全・有効性は相互依存"}<a aria-label="リンク" className="anchor" href="#7-1-42-safety安全性セキュリティ安全有効性は相互依存">{"#"}</a></h3>

<p>{"\n                    規格は、"}<strong>{"セキュリティ、（患者）安全、医療情報システムの有効性は互いに依存する"}</strong>{"と明言しています。\n                "}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"例"}</th><th>{"起きること"}</th></tr></thead><tbody><tr className="odd"><td>{"システム／データが診療の場で使えない"}</td><td>{"\n                                    単なるセキュリティ事故ではなく、"}<strong>{"診療の意思決定が損なわれ、安全上の重大な影響"}</strong>{"になりうる\n                                "}</td></tr><tr className="even"><td>{"不正アクセス対策のために制御を厳しくしすぎる"}</td><td>{"\n                                    使い勝手・可用性が下がり、"}<strong>{"システムの有効性が損なわれる"}</strong></td></tr><tr className="odd"><td>{"現場が不便さを回避するワークアラウンドを始める"}</td><td><strong>{"安全性に悪影響"}</strong>{"を及ぼすおそれ"}</td></tr></tbody></table></div>

<Diagram id="mermaid-diagram-5" />

<div className="callout callout-note"><div className="callout-title"><span className="callout-icon">{"ℹ"}</span><span>{"規格の要請"}</span></div><div className="callout-body"><p>{"\n                            管理策の選択・適用を含む、"}<strong>{"情報セキュリティ管理のあらゆる局面で安全性を考慮"}</strong>{"し、管理策の導入時には安全への影響も検討すること。\n                        "}</p></div></div>

<h3 id="7-2-43-管理策の選択と適用">{"\n                    7-2. 4.3 管理策の選択と適用"}<a aria-label="リンク" className="anchor" href="#7-2-43-管理策の選択と適用">{"#"}</a></h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"小節"}</th><th>{"要点"}</th></tr></thead><tbody><tr className="odd"><td>{"4.3.1 管理策の決定"}</td><td><strong>{"明確に定義した範囲でのリスクアセスメント"}</strong>{"の結果に基づき、リスク受容基準・リスク対応の選択肢・組織のリスクマネジメント手法に沿って決める。国内外の法令・規制も考慮し、管理策同士の相互作用による"}<strong>{"多層防御"}</strong>{"も考える。27799と27002の両方から選び、必要なら"}<strong>{"新しい管理策を設計"}</strong>{"してもよい\n                                "}</td></tr><tr className="even"><td>{"4.3.2 ガイダンスの適用"}</td><td>{"\n                                    医療向けガイダンスがある管理策を実施するなら、"}<strong>{"それに従うか、従わない理由と、管理策の目的をどう満たすかの説明を文書化"}</strong>{"する（"}<strong>{"Comply or Explain"}</strong>{"＝順守するか、説明するか）\n                                "}</td></tr><tr className="odd"><td>{"4.3.3 27001との併用"}</td><td>{"\n                                    27001準拠のISMSで医療向けの管理策を決める際に、Annex\n                                    Aの補足・追加管理策を活用できる。27001の6.1.3が求める"}<strong>{"適用宣言書"}</strong>{"（"}<strong>{"SoA"}</strong>{"）の作成にも、Annex\n                                    Aを使える\n                                "}</td></tr></tbody></table></div>

<Diagram id="mermaid-diagram-6" />

<hr  />

</>; }
