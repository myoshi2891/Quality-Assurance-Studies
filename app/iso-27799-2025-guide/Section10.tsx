import React from 'react';
import Diagram from './Diagram';
export default function Section10() { return <>
<h2 id="step-10付録-annex-ad-の使い方">{"\n                    Step 10：付録 Annex A〜D の使い方"}<a aria-label="リンク" className="anchor" href="#step-10付録-annex-ad-の使い方">{"#"}</a></h2>

<h3 id="10-1-目的別付録の使い分け">{"\n                    10-1. 目的別・付録の使い分け"}<a aria-label="リンク" className="anchor" href="#10-1-目的別付録の使い分け">{"#"}</a></h3>

<div className="table-scroll" tabIndex={0}><table><thead><tr className="header"><th>{"やりたいこと"}</th><th>{"見る場所"}</th><th>{"使い方"}</th></tr></thead><tbody><tr className="odd"><td>{"医療向けに補足・追加された管理策だけを素早く知りたい"}</td><td><strong>{"Annex A"}</strong></td><td>{"\n                                    補足管理策と追加管理策の一覧。27001の適用宣言書（SoA）作成にも活用できる\n                                "}</td></tr><tr className="even"><td>{"2016年版から移行したい"}</td><td><strong>{"Annex B"}</strong></td><td>{"2016年版との対応表で、どの管理策がどう移ったかを確認"}</td></tr><tr className="odd"><td>{"医療の特性をまず理解したい"}</td><td><strong>{"Annex C"}</strong></td><td>{"\n                                    医療組織で情報セキュリティが重要になる側面の解説（約11ページ）\n                                "}</td></tr><tr className="even"><td>{"システムを調達・開発するときの要求例が欲しい"}</td><td><strong>{"Annex D"}</strong></td><td>{"\n                                    医療情報システムのセキュリティ・プライバシー要求の例。27799管理策と\n                                    IEC/TS 81001-2-2 のセキュリティ能力への対応づけ付き\n                                "}</td></tr></tbody></table></div>

<h3 id="10-2-annex-d-のイメージ">{"\n                    10-2. Annex D のイメージ"}<a aria-label="リンク" className="anchor" href="#10-2-annex-d-のイメージ">{"#"}</a></h3>

<p>{"\n                    Annex D は、2013年の ISO/TS\n                    14441（EHRシステムのセキュリティ・プライバシー要求）の5.3をもとに、"}<strong>{"更新した要求例"}</strong>{"を載せたものです。規格の4.1の説明では、"}<strong>{"MDS2"}</strong>{"（"}<strong>{"医療機器セキュリティの製造業者開示書"}</strong>{"）との対応づけも触れられています。\n                "}</p>

<Diagram id="mermaid-diagram-8" />

<hr  />

</>; }
