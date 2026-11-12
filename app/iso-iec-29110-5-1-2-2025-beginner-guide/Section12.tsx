import React from 'react';
import Diagram from './Diagram';
/** 11. 付録A〜E：追加できる拡張と導入支援資料 */
export default function Section12(){return <><h2 id="11-付録ae追加できる拡張と導入支援資料">{"\n                11. 付録A〜E：追加できる拡張と導入支援資料\n            "}</h2>
{"\n            "}
<p>{"\n                本書の序文（S3）は、これらの付録を"}<strong>{"情報提供（informative）"}</strong>{"\n                と位置づけています。ただし性質は2種類に分かれます。\n            "}</p>
{"\n            "}
<ul>{"\n                "}<li>{"\n                    "}<strong>{"付録A〜D"}</strong>{"：Basicプロファイルの本体（PM + SI）に"}<strong>{"追加できるプロセスやタスク"}</strong>{"\n                "}</li>{"\n                "}<li>{"\n                    "}<strong>{"付録E"}</strong>{"：プロセスやタスクの追加ではなく、"}<strong>{"デプロイメントパッケージを説明する導入支援資料"}</strong>{"\n                "}</li>{"\n            "}</ul>
{"\n            "}
<div className="table-scroll" tabIndex="0" role="region" aria-labelledby="11-付録ae追加できる拡張と導入支援資料">{"\n                "}<table><thead><tr className="header"><th style={{"textAlign":"left"}}>{"付録"}</th><th style={{"textAlign":"left"}}>{"種別"}</th><th style={{"textAlign":"left"}}>{"内容"}</th><th style={{"textAlign":"left"}}>{"向いている状況"}</th></tr></thead><tbody><tr className="odd"><td style={{"textAlign":"left"}}>{"A"}</td><td style={{"textAlign":"left"}}>{"追加プロセス"}</td><td style={{"textAlign":"left"}}>{"\n                                開発した製品の"}<strong>{"サポート"}</strong>{"プロセス（サポート管理者の役割を含む）\n                            "}</td><td style={{"textAlign":"left"}}>{"納品後も保守・問い合わせ対応を担う"}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"B"}</td><td style={{"textAlign":"left"}}>{"追加タスク"}</td><td style={{"textAlign":"left"}}>{"\n                                "}<strong>{"追加のテストタスク"}</strong>{"（1つの役割、複数の成果物を含む）\n                            "}</td><td style={{"textAlign":"left"}}>{"\n                                テストを強化したい。QAの関与を明確にしたい\n                            "}</td></tr><tr className="odd"><td style={{"textAlign":"left"}}>{"C"}</td><td style={{"textAlign":"left"}}>{"追加タスク"}</td><td style={{"textAlign":"left"}}>{"\n                                "}<strong>{"アクセシビリティ"}</strong>{"のタスク\n                            "}</td><td style={{"textAlign":"left"}}>{"幅広い利用者が使うWeb・アプリ"}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"D"}</td><td style={{"textAlign":"left"}}>{"追加タスク"}</td><td style={{"textAlign":"left"}}>{"\n                                "}<strong>{"セキュリティ"}</strong>{"のタスクと成果物の統合\n                            "}</td><td style={{"textAlign":"left"}}>{"個人情報や認証を扱う製品"}</td></tr><tr className="odd"><td style={{"textAlign":"left"}}>{"E"}</td><td style={{"textAlign":"left"}}>{"導入支援資料"}</td><td style={{"textAlign":"left"}}>{"\n                                "}<strong>{"デプロイメントパッケージ"}</strong>{"の説明（プロファイルへの追加要素ではない）\n                            "}</td><td style={{"textAlign":"left"}}>{"段階的に導入したい"}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<figure className="diagram" data-diagram="12">{"\n                "}<div className="diagram-scroll"><Diagram index={11} /></div>{"\n                "}<figcaption>{"図12"}</figcaption>{"\n            "}</figure>
{"\n            "}
<h3 id="11-1-付録bとテスト関連規格の関係">{"11-1. 付録Bとテスト関連規格の関係"}</h3>
{"\n            "}
<p>{"\n                付録Bは、用語（試験条件、テストデータ、テスト設計技法、テスト環境など）を、"}<strong>{"ISO/IEC/IEEE 29119-1"}</strong>{"（ソフトウェアテストの概念と定義）から引いています。（S3の用語定義）たとえば、テスト設計技法の例として、同値分割法、境界値分析、決定表テスト、分岐テストが挙げられています。\n            "}</p>
{"\n            "}
<div className="callout-stack">{"\n                "}<aside className="callout callout-practice">{"\n                    "}<div className="callout-head">{"\n                        "}<span className="callout-icon">{"💡"}</span><span className="callout-title">{"QAエンジニアへのヒント"}</span>{"\n                    "}</div>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            付録Bは、29119シリーズ（テストプロセス、技法、文書化）の考え方を、"}<strong>{"VSEの軽量なプロセスに合う形"}</strong>{"で取り込む入口と読めます。詳細なタスク名や成果物名は付録B本文で確認してください。\n                        "}</p>{"\n                    "}</div>{"\n                "}</aside>{"\n            "}</div>
{"\n            "}
<h3 id="11-2-付録cのアクセシビリティの用語">{"11-2. 付録Cのアクセシビリティの用語"}</h3>
{"\n            "}
<p>{"\n                用語集（S3）では、アクセシビリティを「幅広い特性・能力を持つ人々が、特定の状況で目標を達成するために製品やサービスを使える度合い」と定義し、"}<strong>{"ペルソナ"}</strong>{"（利用者像）、"}<strong>{"支援技術"}</strong>{"、"}<strong>{"適応的方策"}</strong>{"なども定義しています。付録Cのタスクはこれらの概念を前提にしています。\n            "}</p>
{"\n            "}
<p className="source-line">{"出典：S3、S4。"}</p>
{"\n\n            "}</>;}
