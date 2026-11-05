import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-1sql標準は1冊ではなくシリーズ">{"\n                    STEP 1：SQL標準は「1冊」ではなくシリーズ\n                "}</h2>
{"\n                "}
<h3 id="1-1-まず全体像を見る">{"1-1. まず全体像を見る"}</h3>
{"\n                "}
<p>{"\n                    SQL標準の正式名は ISO/IEC 9075\n                    で、複数の"}<strong>{"パート"}</strong>{"に分かれています。Part\n                    1（本書）は、他のパートを読むための「入口」にあたります\n                    "}<a className="cite" href="#ref-S1">{"[S1]"}</a><a className="cite" href="#ref-S5">{"[S5]"}</a>{"。\n                "}</p>
{"\n                "}
<Diagram id="mmd-1" />
{"\n                "}
<h3 id="1-2-各パートの役割初学者向けの一言説明">{"\n                    1-2. 各パートの役割（初学者向けの一言説明）\n                "}</h3>
{"\n                "}
<p>{"\n                    ISOカタログの規定引用に載っているパートは次の11個です\n                    "}<a className="cite" href="#ref-S1">{"[S1]"}</a>{"。Eisentraut氏も「新Part\n                    16を含めて現在11のアクティブなパートがある」と述べています\n                    "}<a className="cite" href="#ref-S5">{"[S5]"}</a>{"。\n                "}</p>
{"\n                "}
<div className="table-scroll">{"\n                    "}<table><thead><tr className="header"><th>{"Part"}</th><th>{"略称"}</th><th>{"正式名"}</th><th>{"一言でいうと"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td>{"SQL/Framework"}</td><td>{"Framework"}</td><td>{"\n                                    "}<strong>{"本書。全体の枠組み・用語・記法・適合性の考え方"}</strong>{"\n                                "}</td></tr><tr className="even"><td>{"2"}</td><td>{"SQL/Foundation"}</td><td>{"Foundation"}</td><td>{"\n                                    一般にSQLとして知られる"}<strong>{"中核言語"}</strong>{"（データ型、DDL、DML、問合せ等）。Eisentraut氏も「多くの人がコア言語として知るのはPart\n                                    2」と述べる "}<a className="cite" href="#ref-S5">{"[S5]"}</a>{"\n                                "}</td></tr><tr className="odd"><td>{"3"}</td><td>{"SQL/CLI"}</td><td>{"Call-Level Interface"}</td><td>{"アプリからSQLを呼び出すためのAPI（ODBCに近い立ち位置）"}</td></tr><tr className="even"><td>{"4"}</td><td>{"SQL/PSM"}</td><td>{"Persistent Stored Modules"}</td><td>{"ストアドプロシージャ／関数など手続き的な拡張"}</td></tr><tr className="odd"><td>{"9"}</td><td>{"SQL/MED"}</td><td>{"Management of External Data"}</td><td>{"外部データの管理"}</td></tr><tr className="even"><td>{"10"}</td><td>{"SQL/OLB"}</td><td>{"Object Language Bindings"}</td><td>{"オブジェクト指向言語との結合（Java等）"}</td></tr><tr className="odd"><td>{"11"}</td><td>{"SQL/Schemata"}</td><td>{"Information and Definition Schemas"}</td><td>{"メタデータ（情報スキーマ／定義スキーマ）"}</td></tr><tr className="even"><td>{"13"}</td><td>{"SQL/JRT"}</td><td>{"SQL Routines and Types Using the Java Programming Language"}</td><td>{"Javaでのルーチン／型"}</td></tr><tr className="odd"><td>{"14"}</td><td>{"SQL/XML"}</td><td>{"XML-Related Specifications"}</td><td>{"XML関連"}</td></tr><tr className="even"><td>{"15"}</td><td>{"SQL/MDA"}</td><td>{"Multidimensional Arrays"}</td><td>{"多次元配列"}</td></tr><tr className="odd"><td>{"16"}</td><td><strong>{"SQL/PGQ"}</strong></td><td>{"Property Graph Queries"}</td><td><strong>{"プロパティグラフ問合せ（2023で追加）"}</strong></td></tr></tbody></table>{"\n                "}</div>
{"\n                "}
<div className="callout-tip">{"\n                    "}<span className="callout-icon">{"💡"}</span>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            "}<strong>{"ポイント"}</strong>{":\n                            パート番号が飛んでいる（5〜8、12など）のは、過去に存在した／別の扱いになったパートがあるためです。「欠番＝抜け落ち」ではありません。\n                        "}</p>{"\n                    "}</div>{"\n                "}</div>
{"\n                "}
<h3 id="1-3-規模感">{"1-3. 規模感"}</h3>
{"\n                "}
<p>{"\n                    SQL標準全体は、Winand氏によればSQL:2023で"}<strong>{"4,300ページ超"}</strong>{"と巨大で、どの実装も全機能は実装できません\n                    "}<a className="cite" href="#ref-S8">{"[S8]"}</a>{"。一方、Part\n                    1は"}<strong>{"74ページ"}</strong>{"です\n                    "}<a className="cite" href="#ref-S1">{"[S1]"}</a>{"。つまりPart\n                    1は「全体の地図」であり、細部は他パートに委ねられています。\n                "}</p>
{"\n                "}
<hr />
{"\n                "}
</>; }
