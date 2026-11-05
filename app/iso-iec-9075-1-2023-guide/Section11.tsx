import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="11-qa開発者向け標準をどう使うか">{"11. QA／開発者向け：標準をどう使うか"}</h2>
{"\n                "}
<div className="callout-note">{"\n                    "}<span className="callout-icon">{"ℹ️"}</span>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            ここは公開情報を踏まえた"}<strong>{"筆者（本ガイド）の整理"}</strong>{"で、規格の記述そのものではありません。\n                        "}</p>{"\n                    "}</div>{"\n                "}</div>
{"\n                "}
<h3 id="11-1-実務での活用ステップ">{"11-1. 実務での活用ステップ"}</h3>
{"\n                "}
<Diagram id="mmd-10" />
{"\n                "}
<h3 id="11-2-テスト観点の例">{"11-2. テスト観点の例"}</h3>
{"\n                "}
<div className="table-scroll">{"\n                    "}<table>{"\n                        "}<thead>{"\n                            "}<tr className="header">{"\n                                "}<th>{"観点"}</th>{"\n                                "}<th>{"具体例"}</th>{"\n                            "}</tr>{"\n                        "}</thead>{"\n                        "}<tbody>{"\n                            "}<tr className="odd">{"\n                                "}<td>{"NULLと一意制約"}</td>{"\n                                "}<td>{"\n                                    "}<code>{"UNIQUE"}</code>{"\n                                    列にNULLを2件入れて、DBMSの"}<strong>{"既定挙動"}</strong>{"を確認（実装定義）。移行時の差分検知に有効\n                                "}</td>{"\n                            "}</tr>{"\n                            "}<tr className="even">{"\n                                "}<td>{"型の暗黙変換"}</td>{"\n                                "}<td>{"\n                                    JSON項目メソッド（"}<code>{"date()"}</code>{" 等）の変換エラー時の挙動\n                                "}</td>{"\n                            "}</tr>{"\n                            "}<tr className="odd">{"\n                                "}<td>{"集計の非決定性"}</td>{"\n                                "}<td>{"\n                                    "}<code>{"ANY_VALUE"}</code>{"\n                                    は"}<strong>{"どの値が返るか不定"}</strong>{"。テストでは期待値を固定しない\n                                "}</td>{"\n                            "}</tr>{"\n                            "}<tr className="even">{"\n                                "}<td>{"方言差"}</td>{"\n                                "}<td>{"\n                                    "}<code>{"GREATEST"}</code>{"/"}<code>{"LEAST"}</code>{"\n                                    のNULL扱いなど、実装差が出やすい箇所を明示的にテスト（※DBMSごとに仕様を確認）\n                                "}</td>{"\n                            "}</tr>{"\n                            "}<tr className="odd">{"\n                                "}<td>{"未対応機能のフォールバック"}</td>{"\n                                "}<td>{"標準構文が使えない環境での代替実装が正しく動くか"}</td>{"\n                            "}</tr>{"\n                        "}</tbody>{"\n                    "}</table>{"\n                "}</div>
{"\n                "}
<hr />
{"\n                "}
</>; }
