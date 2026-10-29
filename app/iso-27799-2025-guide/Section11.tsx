import React from 'react';
import Diagram from './Diagram';
export default function Section11() { return <>
<h2 id="step-112016年版から何が変わったか">{"\n                    Step 11：2016年版から何が変わったか"}<a aria-label="リンク" className="anchor" href="#step-112016年版から何が変わったか">{"#"}</a></h2>

<p>{"規格のまえがきが示す「主な変更点」と、専門家サイトの整理をまとめます。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"観点"}</th><th>{"2016年版（第2版）"}</th><th>{"2025年版（第3版）"}</th></tr></thead><tbody><tr className="odd"><td>{"タイトル"}</td><td>{"\n                                    Information security "}<strong>{"management"}</strong>{" in health using\n                                    ISO/IEC 27002\n                                "}</td><td>{"\n                                    Information security "}<strong>{"controls"}</strong>{" in health based\n                                    on ISO/IEC 27002\n                                "}</td></tr><tr className="even"><td>{"ベース"}</td><td>{"ISO/IEC 27002:2013（14箇条・114管理策）"}</td><td>{"ISO/IEC 27002:2022（4テーマ・93管理策）"}</td></tr><tr className="odd"><td>{"構成"}</td><td>{"27002:2013 の章立て（方針・資産管理・アクセス制御など）"}</td><td>{"27002:2022 の構成（組織・人・物理・技術）に整合"}</td></tr><tr className="even"><td>{"ISMS"}</td><td>{"27001／ISMSに関する内容を含んでいた"}</td><td><strong>{"27001に関する内容を除去。管理策に集中"}</strong></td></tr><tr className="odd"><td>{"医療専用の管理策"}</td><td>{"限定的"}</td><td><strong>{"HLT 8個"}</strong>{"を改訂・追加"}</td></tr><tr className="even"><td>{"重複の整理"}</td><td>{"2016年版のみの内容が、その後27002:2022に取り込まれた"}</td><td><strong>{"取り込まれた内容は削除"}</strong></td></tr><tr className="odd"><td>{"付録"}</td><td>{"旧版の構成"}</td><td><strong>{"Annex C（医療組織のセキュリティ解説）"}</strong>{" と\n                                    "}<strong>{"Annex D（要求例）"}</strong>{" を追加\n                                "}</td></tr><tr className="even"><td>{"置き換え対象"}</td><td>{"ISO 27799:2016"}</td><td>{"ISO 27799:2016 と ISO/TS 14441:2013"}</td></tr></tbody></table></div>

<Diagram id="mermaid-diagram-9" />

<div className="callout callout-note"><div className="callout-title"><span className="callout-icon">{"ℹ"}</span><span>{"補足"}</span></div><div className="callout-body"><p>{"\n                            ISO公式ページのライフサイクル情報では、2025年版は2022年2月16日に新規プロジェクトが承認され、2025年1月20日にDISの12週間の投票が開始、2025年9月18日にFDISの8週間の投票が開始、2025年12月18日に発行されています。\n                        "}</p></div></div>

<h3 id="移行するときの考え方">{"\n                    移行するときの考え方"}<a aria-label="リンク" className="anchor" href="#移行するときの考え方">{"#"}</a></h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"状況"}</th><th>{"推奨アクション"}</th></tr></thead><tbody><tr className="odd"><td>{"2016年版でISMSの運用をしている"}</td><td>{"\n                                    Annex\n                                    Bの対応表で管理策の対応を確認し、27002:2022ベースの管理策セットに見直す\n                                "}</td></tr><tr className="even"><td>{"27001:2022 に移行済み"}</td><td>{"\n                                    適用宣言書（SoA）にAnnex\n                                    Aの医療向け管理策（補足・追加）を反映する\n                                "}</td></tr><tr className="odd"><td>{"これから新規に取り組む"}</td><td>{"27001と27002を先に学び、27799で医療向けに補強する"}</td></tr></tbody></table></div>

<hr  />

</>; }
