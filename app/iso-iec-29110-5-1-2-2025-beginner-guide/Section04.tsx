import React from 'react';
import Diagram from './Diagram';
/** 3. ステップ3：4つのプロファイルとBasicの位置づけ */
export default function Section04(){return <><h2 id="3-ステップ34つのプロファイルとbasicの位置づけ">{"\n                3. ステップ3：4つのプロファイルとBasicの位置づけ\n            "}</h2>
{"\n            "}
<h3 id="3-1-汎用プロファイル群generic-profile-group">{"\n                3-1. 汎用プロファイル群（Generic profile group）\n            "}</h3>
{"\n            "}
<p>{"\n                「プロファイル」とは、大きな標準の"}<strong>{"一部分（プロセス・活動・タスク・成果）を組み合わせて、特定の目的に合わせたもの"}</strong>{"です。（S3）\n            "}</p>
{"\n            "}
<p>{"汎用プロファイル群には、成長段階に応じた4つのプロファイルが用意されています。"}</p>
{"\n            "}
<div className="table-scroll" tabIndex={0} role="region" aria-labelledby="3-1-汎用プロファイル群generic-profile-group">{"\n                "}<table><thead><tr className="header"><th style={{"textAlign":"left"}}>{"プロファイル"}</th><th style={{"textAlign":"left"}}>{"想定する組織・プロジェクト"}</th></tr></thead><tbody><tr className="odd"><td style={{"textAlign":"left"}}>{"Entry（入門）"}</td><td style={{"textAlign":"left"}}>{"\n                                小さなプロジェクト（目安として最大6人月程度）や、スタートアップ\n                            "}</td></tr><tr className="even"><td style={{"textAlign":"left"}}><strong>{"Basic（基本）"}</strong></td><td style={{"textAlign":"left"}}>{"\n                                "}<strong>{"1つのチームが1つの製品（アプリケーション）を開発する"}</strong>{"\n                            "}</td></tr><tr className="odd"><td style={{"textAlign":"left"}}>{"Intermediate（中級）"}</td><td style={{"textAlign":"left"}}>{"\n                                複数のプロジェクトを並行して、複数のチームで進める\n                            "}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"Advanced（上級）"}</td><td style={{"textAlign":"left"}}>{"\n                                事業として持続・成長し、競争力のある開発組織を目指す\n                            "}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<p>{"\n                本書の序文は、自らを「4つのプロファイルによるソフトウェアエンジニアリング\n                ロードマップの"}<strong>{"2番目"}</strong>{"」と位置づけています。（S3）\n            "}</p>
{"\n            "}
<figure className="diagram" data-diagram="4">{"\n                "}<div className="diagram-scroll"><Diagram index={3} /></div>{"\n                "}<figcaption>{"図4"}</figcaption>{"\n            "}</figure>
{"\n            "}
<div className="callout-stack">{"\n                "}<aside className="callout callout-check">{"\n                    "}<div className="callout-head">{"\n                        "}<span className="callout-icon">{"🔎"}</span><span className="callout-title">{"要確認"}</span>{"\n                    "}</div>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            ISO公式ページの現行の記載では、本書が扱うのはBasicのみです。Intermediate/Advancedの現行の発行状況は、ISOの29110シリーズ一覧で確認してください。Laporte氏の2016年論文時点では、これら2つは作成途上と述べられています。（S5）\n                        "}</p>{"\n                    "}</div>{"\n                "}</aside>{"\n            "}</div>
{"\n            "}
<p className="source-line">{"出典：S3、S5、S9（ETSのコース紹介ページ）。"}</p>
{"\n\n            "}</>;}
