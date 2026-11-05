import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-5適合性conformanceと実装定義実装依存">{"\n                    STEP 5：適合性（Conformance）と「実装定義／実装依存」\n                "}</h2>
{"\n                "}
<h3 id="5-1-なぜ適合性が必要か">{"5-1. なぜ適合性が必要か"}</h3>
{"\n                "}
<p>{"\n                    Winand氏が指摘するとおり、SQL標準は巨大で、どの実装も全機能を実装できません\n                    "}<a className="cite" href="#ref-S8">{"[S8]"}</a>{"。そこで標準は「どこまで実装すれば標準準拠といえるか」の物差しを用意します。\n                "}</p>
{"\n                "}
<h3 id="5-2-適合性の歴史winand氏の整理">{"5-2. 適合性の歴史（Winand氏の整理）"}</h3>
{"\n                "}
<div className="table-scroll">{"\n                    "}<table>{"\n                        "}<thead>{"\n                            "}<tr className="header">{"\n                                "}<th>{"時期"}</th>{"\n                                "}<th>{"仕組み"}</th>{"\n                                "}<th>{"要点"}</th>{"\n                            "}</tr>{"\n                        "}</thead>{"\n                        "}<tbody>{"\n                            "}<tr className="odd">{"\n                                "}<td>{"SQL-92"}</td>{"\n                                "}<td>{"3段階のレベル（entry / intermediate / full）"}</td>{"\n                                "}<td>{"\n                                    準拠主張はレベルを明記。多くのDBはentry準拠\n                                    "}<a className="cite" href="#ref-S8">{"[S8]"}</a>{"\n                                "}</td>{"\n                            "}</tr>{"\n                            "}<tr className="even">{"\n                                "}<td>{"SQL:1999以降"}</td>{"\n                                "}<td>{"\n                                    全機能を列挙し、"}<strong>{"必須(mandatory)／任意(optional)"}</strong>{"\n                                    に分類\n                                "}</td>{"\n                                "}<td>{"\n                                    必須の集合が\n                                    "}<strong>{"Core SQL"}</strong>{"。それ以外は"}<strong>{"機能単位"}</strong>{"で主張\n                                    "}<a className="cite" href="#ref-S8">{"[S8]"}</a>{"\n                                "}</td>{"\n                            "}</tr>{"\n                        "}</tbody>{"\n                    "}</table>{"\n                "}</div>
{"\n                "}
<p>{"\n                    Part 1の第9章に「Minimum\n                    conformance（最小適合）」の節があることは目次から確認できます\n                    "}<a className="cite" href="#ref-S2">{"[S2]"}</a><a className="cite" href="#ref-S3">{"[S3]"}</a>{"。具体的な主張要件の文言は原文で確認してください。\n                "}</p>
{"\n                "}
<h3 id="5-3-機能idfeature-idとは">{"5-3. 機能ID（Feature ID）とは"}</h3>
{"\n                "}
<p>{"\n                    SQL標準の機能には "}<code>{"F292"}</code>{"、"}<code>{"T801"}</code>{"\n                    のような"}<strong>{"機能ID"}</strong>{"が付いています。実装は「Core\n                    SQL＋対応する機能ID」という形で能力を表明できます。SQL:2023では、"}<strong>{"実装定義の挙動にも識別子が付与"}</strong>{"されたと\n                    Winand氏は記しています "}<a className="cite" href="#ref-S9">{"[S9]"}</a>{"。\n                "}</p>
{"\n                "}
<h3 id="5-4-実装定義implementation-definedと実装依存implementation-dependent">{"\n                    5-4. 実装定義（implementation-defined）と実装依存（implementation-dependent）\n                "}</h3>
{"\n                "}
<p>{"\n                    Part 1の第6章・第7章・Annex B/Cが扱う重要な区別です\n                    "}<a className="cite" href="#ref-S2">{"[S2]"}</a>{"。\n                "}</p>
{"\n                "}
<div className="table-scroll">{"\n                    "}<table>{"\n                        "}<thead>{"\n                            "}<tr className="header">{"\n                                "}<th>{"区別"}</th>{"\n                                "}<th>{"意味（一般的な説明）"}</th>{"\n                                "}<th>{"実装側の責任"}</th>{"\n                                "}<th>{"例"}</th>{"\n                            "}</tr>{"\n                        "}</thead>{"\n                        "}<tbody>{"\n                            "}<tr className="odd">{"\n                                "}<td><strong>{"実装定義"}</strong></td>{"\n                                "}<td>{"\n                                    標準は挙動を決めず、各実装が"}<strong>{"決めて文書化"}</strong>{"する\n                                "}</td>{"\n                                "}<td>{"決めて文書化する"}</td>{"\n                                "}<td>{"\n                                    "}<code>{"UNIQUE"}</code>{"\n                                    制約でNULLを区別するかの"}<strong>{"既定値"}</strong>{"（SQL:2023で明示指定を追加、既定は実装定義）"}<a className="cite" href="#ref-S5">{"[S5]"}</a>{"\n                                "}</td>{"\n                            "}</tr>{"\n                            "}<tr className="even">{"\n                                "}<td><strong>{"実装依存"}</strong></td>{"\n                                "}<td>{"\n                                    標準は決めず、各実装が違ってよい。"}<strong>{"文書化の義務は必須ではない"}</strong>{"\n                                "}</td>{"\n                                "}<td>{"特になし"}</td>{"\n                                "}<td>{"実行計画の選び方など"}</td>{"\n                            "}</tr>{"\n                        "}</tbody>{"\n                    "}</table>{"\n                "}</div>
{"\n                "}
<div className="callout-tip">{"\n                    "}<span className="callout-icon">{"💡"}</span>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            "}<strong>{"QAの観点"}</strong>{":\n                            テストで「環境によって結果が違う」ことを見つけたら、まず"}<strong>{"実装定義／実装依存の領域か"}</strong>{"を疑うと、バグか仕様かの切り分けが速くなります。\n                        "}</p>{"\n                    "}</div>{"\n                "}</div>
{"\n                "}
<h3 id="5-5-適合性主張の判断フロー概念図">{"5-5. 適合性主張の判断フロー（概念図）"}</h3>
{"\n                "}
<Diagram id="mmd-5" />
{"\n                "}
<div className="callout-warn">{"\n                    "}<span className="callout-icon">{"⚠️"}</span>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            上図は理解用の整理です。"}<strong>{"正式な準拠主張の要件は Part 1 の Clause 9\n                                と、各パートの適合性規定（原文）に従います。"}</strong>{"\n                        "}</p>{"\n                    "}</div>{"\n                "}</div>
{"\n                "}
<hr />
{"\n                "}
</>; }
