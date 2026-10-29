import React from 'react';
import Diagram from './Diagram';
export default function Section12() { return <>
<h2 id="step-12導入の進め方実務フロー">{"\n                    Step 12：導入の進め方（実務フロー）"}<a aria-label="リンク" className="anchor" href="#step-12導入の進め方実務フロー">{"#"}</a></h2>

<p>{"\n                    27799は「認証用の要求事項規格」ではなく、"}<strong>{"27001のISMSの中で管理策を選ぶ際に使う"}</strong>{"位置づけです。次は一般的な進め方の例です（規格が定める唯一の手順ではありません）。\n                "}</p>

<Diagram id="mermaid-diagram-10" />

<h3 id="立場別どこから読むか">{"\n                    立場別：どこから読むか"}<a aria-label="リンク" className="anchor" href="#立場別どこから読むか">{"#"}</a></h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"立場"}</th><th>{"先に読む場所"}</th><th>{"次に読む場所"}</th></tr></thead><tbody><tr className="odd"><td>{"病院のIT／情報システム部門"}</td><td>{"第4章 → Annex C"}</td><td>{"第5章・第8章 → Annex A"}</td></tr><tr className="even"><td>{"臨床現場の管理者（看護・診療部門）"}</td><td>{"第4章（安全性）→ Annex C"}</td><td>{"5.39〜5.42、6.3、6.9"}</td></tr><tr className="odd"><td>{"医療ITベンダー・開発チーム"}</td><td>{"第4章 → 5.38"}</td><td>{"8.25〜8.33 → Annex D"}</td></tr><tr className="even"><td>{"医療機器メーカー"}</td><td>{"第4章 → Annex D"}</td><td>{"8章全体、IEC/TS 81001-2-2"}</td></tr><tr className="odd"><td>{"監査員・コンサルタント"}</td><td>{"Annex A → Annex C"}</td><td>{"第5〜8章、Annex B"}</td></tr><tr className="even"><td>{"27001の担当者"}</td><td>{"4.3.3 → Annex A"}</td><td>{"SoA作成との連携"}</td></tr></tbody></table></div>

<hr  />

</>; }
