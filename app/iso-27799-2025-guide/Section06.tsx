import React from 'react';
import Diagram from './Diagram';
export default function Section06() { return <>
<h2 id="step-627002-とのつながり方4パターン">{"\n                    Step 6：27002 とのつながり方（4パターン）"}<a aria-label="リンク" className="anchor" href="#step-627002-とのつながり方4パターン">{"#"}</a></h2>

<p>{"\n                    規格の4.1は、27002の各管理策をどのように扱うかを、次の4パターンで説明しています（要約）。\n                "}</p>

<div className="table-scroll" tabIndex={0}><table><thead><tr className="header"><th>{"パターン"}</th><th>{"27799での扱い"}</th><th>{"呼び方"}</th></tr></thead><tbody><tr className="odd"><td>{"(a) そのまま適用"}</td><td>{"\n                                    27002の管理策・目的・ガイダンス等が、医療でも"}<strong>{"変更なしで適用"}</strong>{"される\n                                "}</td><td>{"変更なし"}</td></tr><tr className="even"><td>{"(b) 適用のヒントを追加"}</td><td>{"\n                                    27002の管理策について、医療での適用方法のガイダンスやその他の情報を"}<strong>{"追加"}</strong></td><td>{"追加ガイダンス"}</td></tr><tr className="odd"><td>{"(c) 内容を補足"}</td><td>{"\n                                    管理策そのもの・目的・ガイダンスを"}<strong>{"医療向けに補足"}</strong>{"（その他の情報も追加される場合あり）\n                                "}</td><td><strong>{"supplementary（補足）"}</strong></td></tr><tr className="even"><td>{"(d) 医療専用を新設"}</td><td>{"\n                                    27002に元となる管理策がない、"}<strong>{"医療専用の管理策"}</strong>{"を新設（タイトルに\n                                    "}<strong>{"HLT"}</strong>{" を付与）\n                                "}</td><td><strong>{"additional（追加）"}</strong></td></tr></tbody></table></div>

<Diagram id="mermaid-diagram-4" />

<h3 id="具体例51情報セキュリティのための方針補足の実例">{"\n                    具体例：5.1「情報セキュリティのための方針」（補足の実例）"}<a aria-label="リンク" className="anchor" href="#具体例51情報セキュリティのための方針補足の実例">{"#"}</a></h3>

<p>{"\n                    プレビューで確認できる 5.1\n                    では、27002の5.1がそのまま適用されることを示したうえで、医療向けの補足として次のような内容が示されています。\n                "}</p>

<div className="table-scroll" tabIndex={0}><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容（要約）"}</th></tr></thead><tbody><tr className="odd"><td>{"管理策（医療向け補足）"}</td><td>{"\n                                    情報セキュリティ方針は、情報セキュリティの管理アプローチを定め、"}<strong>{"最高位の経営層が承認"}</strong>{"し、"}<strong>{"少なくとも年1回、および重大なセキュリティインシデント発生後にレビュー"}</strong>{"する\n                                "}</td></tr><tr className="even"><td>{"目的（医療向け補足）"}</td><td>{"経営トップのコミットメントを確保し、最新の状態を維持する"}</td></tr><tr className="odd"><td>{"ガイダンス"}</td><td>{"\n                                    方針には、医療の情報セキュリティの必要性、目標、順守の範囲、法令・規制などに関する記述を含めるべき（以降は規格書で確認）\n                                "}</td></tr></tbody></table></div>

<hr  />

</>; }
