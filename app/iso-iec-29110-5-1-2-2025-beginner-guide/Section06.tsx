import React from 'react';
import Diagram from './Diagram';
/** 5. ステップ5：2つのプロセス（PMとSI）の全体像 */
export default function Section06(){return <><h2 id="5-ステップ52つのプロセスpmとsiの全体像">{"\n                5. ステップ5：2つのプロセス（PMとSI）の全体像\n            "}</h2>
{"\n            "}
<p>{"本書の目次（S3）は、規格の中心が次の2つのプロセスであることを示しています。"}</p>
{"\n            "}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="5-ステップ52つのプロセスpmとsiの全体像">{"\n                "}<table><thead><tr className="header"><th style={{"textAlign":"left"}}>{"章"}</th><th style={{"textAlign":"left"}}>{"プロセス"}</th><th style={{"textAlign":"left"}}>{"略称"}</th><th style={{"textAlign":"left"}}>{"一言でいうと"}</th></tr></thead><tbody><tr className="odd"><td style={{"textAlign":"left"}}>{"6"}</td><td style={{"textAlign":"left"}}>{"プロジェクト管理"}</td><td style={{"textAlign":"left"}}>{"\n                                "}<strong>{"PM"}</strong>{"（Project Management）\n                            "}</td><td style={{"textAlign":"left"}}>{"\n                                計画し、進捗を見て、問題があれば是正し、終える\n                            "}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"7"}</td><td style={{"textAlign":"left"}}>{"ソフトウェア実装"}</td><td style={{"textAlign":"left"}}>{"\n                                "}<strong>{"SI"}</strong>{"（Software Implementation）\n                            "}</td><td style={{"textAlign":"left"}}>{"\n                                要件を分析し、設計・作成・結合テストをして、納品する\n                            "}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<h3 id="5-1-目的と期待される利益">{"5-1. 目的と期待される利益"}</h3>
{"\n            "}
<p>{"本書の序文（S3）は、利用者が得られる利益を3点で述べています。"}</p>
{"\n            "}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="5-1-目的と期待される利益">{"\n                "}<table><thead><tr className="header"><th style={{"textAlign":"left"}}>{"利益"}</th><th style={{"textAlign":"left"}}>{"内容"}</th></tr></thead><tbody><tr className="odd"><td style={{"textAlign":"left"}}>{"合意の明確化"}</td><td style={{"textAlign":"left"}}>{"\n                                プロジェクトの要求事項と、顧客に引き渡す成果物の組が合意される\n                            "}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"管理された進め方"}</td><td style={{"textAlign":"left"}}>{"\n                                プロジェクトの可視性があり、問題や計画からのずれに是正措置が取られる\n                            "}</td></tr><tr className="odd"><td style={{"textAlign":"left"}}>{"体系的な実装"}</td><td style={{"textAlign":"left"}}>{"\n                                顧客のニーズを満たし、作業成果物の品質を確保する実装プロセスが踏まれる\n                            "}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<h3 id="5-2-pmとsiはどう連携するか">{"5-2. PMとSIはどう連携するか"}</h3>
{"\n            "}
<figure className="diagram" data-diagram="6">{"\n                "}<div className="diagram-scroll"><Diagram index={5} /></div>{"\n                "}<figcaption>{"図6"}</figcaption>{"\n            "}</figure>
{"\n            "}
<p>{"\n                この関係は、O'Connor氏とLaporte氏の初期の解説（S8）でも、「PMがプロジェクト計画を作成してプロジェクトを方向づけ、実行中の変更要求が計画の改訂を引き起こし、SIが完了してクロージャで終わる」と説明されています。\n            "}</p>
{"\n            "}
<h3 id="5-3-本書5-1-2を読み進めるための章立て">{"\n                5-3. 本書（5-1-2）を読み進めるための章立て\n            "}</h3>
{"\n            "}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="5-3-本書5-1-2を読み進めるための章立て">{"\n                "}<table><thead><tr className="header"><th style={{"textAlign":"left"}}>{"章"}</th><th style={{"textAlign":"left"}}>{"内容"}</th></tr></thead><tbody><tr className="odd"><td style={{"textAlign":"left"}}>{"1〜3"}</td><td style={{"textAlign":"left"}}>{"\n                                範囲、参照規格（なし）、用語（本書だけで読めるよう用語を追加）\n                            "}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"4"}</td><td style={{"textAlign":"left"}}>{"命名・図示・定義の約束事、略語"}</td></tr><tr className="odd"><td style={{"textAlign":"left"}}>{"5"}</td><td style={{"textAlign":"left"}}>{"\n                                概要。"}<strong>{"Basicプロファイルを使う前提条件（5.2）"}</strong>{"\n                                とプロセス・活動の全体像（5.3）\n                            "}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"6"}</td><td style={{"textAlign":"left"}}>{"\n                                PMプロセス（目的・成果・役割・活動とタスク）\n                            "}</td></tr><tr className="odd"><td style={{"textAlign":"left"}}>{"7"}</td><td style={{"textAlign":"left"}}>{"SIプロセス（同上）"}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"8"}</td><td style={{"textAlign":"left"}}>{"役割の説明"}</td></tr><tr className="odd"><td style={{"textAlign":"left"}}>{"9"}</td><td style={{"textAlign":"left"}}>{"作業成果物の説明"}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"10"}</td><td style={{"textAlign":"left"}}>{"ソフトウェアツール"}</td></tr><tr className="odd"><td style={{"textAlign":"left"}}>{"付録A〜E"}</td><td style={{"textAlign":"left"}}>{"\n                                情報提供の付録。A〜Dは追加できるプロセス・タスク、Eはデプロイメントパッケージを説明する導入支援資料（第11章で解説）\n                            "}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<p className="source-line">{"出典：S3（目次・序文）、S8。"}</p>
{"\n\n            "}</>;}
