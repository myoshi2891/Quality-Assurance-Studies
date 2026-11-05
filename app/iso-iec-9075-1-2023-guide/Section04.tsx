import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-2part-1frameworkの役割">{"STEP 2：Part 1（Framework）の役割"}</h2>
{"\n                "}
<h3 id="2-1-規格が自ら述べる範囲scope">{"2-1. 規格が自ら述べる範囲（Scope）"}</h3>
{"\n                "}
<p>{"\n                    ISOカタログページ\n                    "}<a className="cite" href="#ref-S1">{"[S1]"}</a>{"\n                    の要旨を、日本語で言い換えると次の2点です。\n                "}</p>
{"\n                "}
<ol type="1">{"\n                    "}<li>{"\n                        他のパートがSQLの"}<strong>{"文法"}</strong>{"と、SQL-implementationが文を処理した"}<strong>{"結果"}</strong>{"を規定するときに使う、"}<strong>{"概念的な枠組み"}</strong>{"を説明する\n                    "}</li>{"\n                    "}<li>{"\n                        シリーズ全体で使う"}<strong>{"用語"}</strong>{"と"}<strong>{"記法"}</strong>{"を定義する\n                    "}</li>{"\n                "}</ol>
{"\n                "}
<h3 id="2-2-規定することとしないこと">{"2-2. 「規定すること」と「しないこと」"}</h3>
{"\n                "}
<div className="table-scroll">{"\n                    "}<table>{"\n                        "}<thead>{"\n                            "}<tr className="header">{"\n                                "}<th>{"項目"}</th>{"\n                                "}<th>{"Part 1が担う"}</th>{"\n                                "}<th>{"他パートが担う"}</th>{"\n                            "}</tr>{"\n                        "}</thead>{"\n                        "}<tbody>{"\n                            "}<tr className="odd">{"\n                                "}<td>{"概念の定義（SQL-environment、SQL-implementation 等）"}</td>{"\n                                "}<td>{"✅"}</td>{"\n                                "}<td></td>{"\n                            "}</tr>{"\n                            "}<tr className="even">{"\n                                "}<td>{"用語・記法・表記規約"}</td>{"\n                                "}<td>{"✅"}</td>{"\n                                "}<td></td>{"\n                            "}</tr>{"\n                            "}<tr className="odd">{"\n                                "}<td>{"各パートの紹介・位置づけ"}</td>{"\n                                "}<td>{"✅"}</td>{"\n                                "}<td></td>{"\n                            "}</tr>{"\n                            "}<tr className="even">{"\n                                "}<td>{"適合性の枠組み（最小適合など）"}</td>{"\n                                "}<td>{"✅"}</td>{"\n                                "}<td></td>{"\n                            "}</tr>{"\n                            "}<tr className="odd">{"\n                                "}<td>{"具体的な文法（SELECT / CREATE TABLE など）"}</td>{"\n                                "}<td></td>{"\n                                "}<td>{"Part 2 ほか"}</td>{"\n                            "}</tr>{"\n                            "}<tr className="even">{"\n                                "}<td>{"手続き言語（ストアド等）"}</td>{"\n                                "}<td></td>{"\n                                "}<td>{"Part 4"}</td>{"\n                            "}</tr>{"\n                            "}<tr className="odd">{"\n                                "}<td>{"メタデータの具体的な表（INFORMATION_SCHEMA）"}</td>{"\n                                "}<td></td>{"\n                                "}<td>{"Part 11"}</td>{"\n                            "}</tr>{"\n                            "}<tr className="even">{"\n                                "}<td>{"プロパティグラフの文法"}</td>{"\n                                "}<td></td>{"\n                                "}<td>{"Part 16"}</td>{"\n                            "}</tr>{"\n                        "}</tbody>{"\n                    "}</table>{"\n                "}</div>
{"\n                "}
<h3 id="2-3-規定引用normative-referencesが示す関係">{"\n                    2-3. 規定引用（Normative references）が示す関係\n                "}</h3>
{"\n                "}
<p>{"\n                    Part 1は、他パートを"}<strong>{"日付なしで"}</strong>{"規定引用しています\n                    "}<a className="cite" href="#ref-S1">{"[S1]"}</a>{"。ISOの規則上、日付なし引用は「最新版を参照する」扱いです（参照元ページの記述）。これは「パート同士が一体で運用される」ことの表れで、Part\n                    1だけ読んでもSQLの全体は決まりません。\n                "}</p>
{"\n                "}
<Diagram id="mmd-2" />
{"\n                "}
<hr />
{"\n                "}
</>; }
