import React from 'react';
export default function Section() { return <>
<h2 id="1-このガイドの前提と限界">{"1. このガイドの前提と限界"}</h2>
{"\n                "}
<p>{"最初に、この文書で「何を根拠に」「どこまで書けるか」を明確にします。"}</p>
{"\n                "}
<div className="table-scroll">{"\n                    "}<table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"根拠にした情報"}</td><td>{"\n                                    ISOカタログページのメタデータ（版・発行日・ステージ・規定引用）、公開されている目次プレビュー、PostgreSQLコア開発者\n                                    Peter Eisentraut 氏の解説、Markus Winand\n                                    氏（modern-sql.com）の解説、Oracle・PostgreSQL\n                                    各プロジェクトの公式発表\n                                "}</td></tr><tr className="even"><td>{"規格本文の扱い"}</td><td>{"\n                                    規格本文は有料（ISO著作権）のため、"}<strong>{"本文の転載・逐語引用はしていません"}</strong>{"。章立ては公開プレビューの目次から確認できた範囲のみ記載し、確認できなかった部分は「未確認」と明記します\n                                "}</td></tr><tr className="odd"><td>{"情報基準日"}</td><td>{"2026-10-13"}</td></tr><tr className="even"><td>{"読み方の注意"}</td><td>{"\n                                    本ガイドは理解のための解説です。"}<strong>{"適合性主張・監査・契約などの正式な判断には、必ず規格の原文（購入版）を確認してください"}</strong>{"\n                                "}</td></tr></tbody></table>{"\n                "}</div>
{"\n                "}
<div className="callout-warn">{"\n                    "}<span className="callout-icon">{"⚠️"}</span>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            規格の1ページの技術正誤表（Cor\n                            1:2026）の中身は、本ガイド作成時点では公開情報から確認できていません（STEP\n                            8参照）。\n                        "}</p>{"\n                    "}</div>{"\n                "}</div>
{"\n                "}
<hr />
{"\n                "}
</>; }
