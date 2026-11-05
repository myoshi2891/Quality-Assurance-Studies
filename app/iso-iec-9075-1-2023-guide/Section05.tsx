import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-3文書の構成公開情報で確認できた範囲">{"\n                    STEP 3：文書の構成（公開情報で確認できた範囲）\n                "}</h2>
{"\n                "}
<p>{"\n                    公開されている目次プレビュー "}<a className="cite" href="#ref-S2">{"[S2]"}</a><a className="cite" href="#ref-S3">{"[S3]"}</a>{"\n                    から確認できた章立てを整理します。"}<strong>{"途中が欠けている箇所は、プレビューに出ていなかっただけ"}</strong>{"で、存在しないという意味ではありません。\n                "}</p>
{"\n                "}
<div className="table-scroll">{"\n                    "}<table><thead><tr className="header"><th>{"章"}</th><th>{"確認できた内容"}</th><th>{"初学者向けの読みどころ"}</th></tr></thead><tbody><tr className="odd"><td>{"3"}</td><td>{"用語・定義（ISO/IEC 10646:2020 由来の定義を含む）"}</td><td>{"文字コード系の定義を他規格から借りている"}</td></tr><tr className="even"><td><strong>{"4 Concepts"}</strong></td><td>{"\n                                    4.1 What is SQL?／4.4 SQL-environments and their\n                                    components（SQL-agent、SQL-implementation、SQL-client、SQL-server、SQL-client\n                                    modules、user mapping、routine\n                                    mapping、SQL-schemas、SQL-data）／4.6 SQL data types／4.8\n                                    SQL-schema objects（User-defined types、Table constraints 等）\n                                "}</td><td><strong>{"最も重要。まずここを読む"}</strong></td></tr><tr className="odd"><td><strong>{"5 パート紹介"}</strong></td><td>{"\n                                    5.2 Framework／5.3 Foundation／5.5 PSM／5.6 MED／5.7 OLB／5.8\n                                    Schemata／5.11 MDA／5.12 PGQ ほか\n                                "}</td><td>{"\n                                    各パートの役割を短く紹介する章。"}<strong>{"5.12にPGQが追加"}</strong>{"されている\n                                "}</td></tr><tr className="even"><td>{"6 記法・規約"}</td><td>{"\n                                    6.3.11 Implementation-defined and\n                                    implementation-dependent／6.4.5 Implementation-defined\n                                    items／6.4.6 Implementation-dependent items\n                                "}</td><td>{"「実装定義」「実装依存」の区別の説明"}</td></tr><tr className="odd"><td>{"7"}</td><td>{"\n                                    7.3 Implementation-defined elements／7.4\n                                    Implementation-dependent elements\n                                "}</td><td>{"実装定義／実装依存の要素"}</td></tr><tr className="even"><td>{"8"}</td><td><strong>{"未確認"}</strong>{"（プレビューに掲載なし）"}</td><td>{"原文で確認してください"}</td></tr><tr className="odd"><td><strong>{"9 Conformance"}</strong></td><td>{"9.2 Minimum conformance"}</td><td><strong>{"適合性。STEP 5で解説"}</strong></td></tr><tr className="even"><td>{"Annex B（参考）"}</td><td>{"Implementation-defined elements"}</td><td>{"実装定義の要素一覧"}</td></tr><tr className="odd"><td>{"Annex C（参考）"}</td><td>{"Implementation-dependent elements"}</td><td>{"実装依存の要素一覧"}</td></tr></tbody></table>{"\n                "}</div>
{"\n                "}
<h3 id="3-1-初学者向けの読む順番">{"3-1. 初学者向けの読む順番"}</h3>
{"\n                "}
<Diagram id="mmd-3" />
{"\n                "}
<hr />
{"\n                "}
</>; }
