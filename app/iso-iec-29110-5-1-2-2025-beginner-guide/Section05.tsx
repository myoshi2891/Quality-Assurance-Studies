import React from 'react';
import Diagram from './Diagram';
/** 4. ステップ4：この規格の対象範囲と「使えないケース」 */
export default function Section05(){return <><h2 id="4-ステップ4この規格の対象範囲と使えないケース">{"\n                4. ステップ4：この規格の対象範囲と「使えないケース」\n            "}</h2>
{"\n            "}
<p>{"公式の範囲（スコープ）は4点です。（S1）"}</p>
{"\n            "}
<div className="table-scroll" tabIndex="0" role="region" aria-labelledby="4-ステップ4この規格の対象範囲と使えないケース">{"\n                "}<table><thead><tr className="header"><th style={{"textAlign":"left"}}>{"#"}</th><th style={{"textAlign":"left"}}>{"スコープ"}</th><th style={{"textAlign":"left"}}>{"意味"}</th></tr></thead><tbody><tr className="odd"><td style={{"textAlign":"left"}}>{"1"}</td><td style={{"textAlign":"left"}}>{"\n                                4-1で定めたBasicプロファイルに対する、"}<strong>{"管理・エンジニアリングのガイドライン"}</strong>{"を提供する\n                            "}</td><td style={{"textAlign":"left"}}>{"PMとSIの2プロセスで構成"}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"2"}</td><td style={{"textAlign":"left"}}>{"\n                                "}<strong>{"安全重要（safety-critical）でない"}</strong>{"ソフトウェアを開発するVSEに適用する\n                            "}</td><td style={{"textAlign":"left"}}>{"後述の定義を参照"}</td></tr><tr className="odd"><td style={{"textAlign":"left"}}>{"3"}</td><td style={{"textAlign":"left"}}>{"\n                                "}<strong>{"外部または内部の合意"}</strong>{"（契約など）に基づくソフトウェア開発プロジェクトに適用する\n                            "}</td><td style={{"textAlign":"left"}}>{"社内向けの開発もOK"}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"4"}</td><td style={{"textAlign":"left"}}>{"\n                                "}<strong>{"1つの製品を1つの作業チーム"}</strong>{"で開発するVSEに適用できる\n                            "}</td><td style={{"textAlign":"left"}}>{"複数製品・複数チームは対象外"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<h3 id="4-1-安全重要ソフトウェアとは">{"4-1. 「安全重要ソフトウェア」とは"}</h3>
{"\n            "}
<p>{"\n                規格の用語定義（S3）では、"}<strong>{"故障や誤動作が、人の死亡・重傷、機器や財産の大きな損害、自然環境の損害につながりうるソフトウェア"}</strong>{"とされています。\n            "}</p>
{"\n            "}
<h3 id="4-2-適用してよいか迷ったときの判断フロー">{"\n                4-2. 適用してよいか迷ったときの判断フロー\n            "}</h3>
{"\n            "}
<figure className="diagram" data-diagram="5">{"\n                "}<div className="diagram-scroll"><Diagram index={4} /></div>{"\n                "}<figcaption>{"図5"}</figcaption>{"\n            "}</figure>
{"\n            "}
<div className="callout-stack">{"\n                "}<aside className="callout callout-practice">{"\n                    "}<div className="callout-head">{"\n                        "}<span className="callout-icon">{"💡"}</span><span className="callout-title">{"ポイント：大きな組織は使ってはいけない？"}</span>{"\n                    "}</div>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            いいえ。規格は「VSE以外の組織が使うことを妨げない」と述べています。"}<strong>{"想定読者がVSEである"}</strong>{"という意味です。（S3）\n                        "}</p>{"\n                    "}</div>{"\n                "}</aside>{"\n                "}<aside className="callout callout-practice">{"\n                    "}<div className="callout-head">{"\n                        "}<span className="callout-icon">{"💡"}</span><span className="callout-title">{"ポイント：すでにISO/IEC/IEEE\n                            12207を自社に合わせて調整できる組織は？"}</span>{"\n                    "}</div>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            序文は、12207や15288を"}<strong>{"調整（テーラリング）する専門知識を持つVSEは、29110ではなく元の規格を使うことを推奨する"}</strong>{"と述べています。29110は、調整の経験が乏しいVSEのための既製の部分集合です。（S3）\n                        "}</p>{"\n                    "}</div>{"\n                "}</aside>{"\n            "}</div>
{"\n            "}
<p className="source-line">{"出典：S1、S3。"}</p>
{"\n\n            "}</>;}
