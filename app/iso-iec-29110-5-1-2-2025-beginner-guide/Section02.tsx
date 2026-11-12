import React from 'react';
import Diagram from './Diagram';
/** 1. ステップ1：まず「VSE」という言葉を理解する */
export default function Section02(){return <><h2 id="1-ステップ1まずvseという言葉を理解する">{"\n                1. ステップ1：まず「VSE」という言葉を理解する\n            "}</h2>
{"\n            "}
<h3 id="1-1-vseの定義">{"1-1. VSEの定義"}</h3>
{"\n            "}
<p>{"\n                "}<strong>{"VSE（Very Small Entity：超小規模組織）"}</strong>{"\n                とは、"}<strong>{"最大25人"}</strong>{"の企業・組織・部門・プロジェクトを指します。規格の用語の定義では、官公庁や非営利団体も含まれます。（S3）\n            "}</p>
{"\n            "}
<p>{"\n                ここで大切なのは、VSEが「会社」だけを指すのではなく、"}<strong>{"大企業の中の小さなプロジェクトチームでも該当する"}</strong>{"点です。\n            "}</p>
{"\n            "}
<h3 id="1-2-なぜvse向けの規格が必要なのか">{"1-2. なぜVSE向けの規格が必要なのか"}</h3>
{"\n            "}
<p>{"規格の序文（S3）は、概ね次の問題意識を述べています。"}</p>
{"\n            "}
<div className="table-scroll" tabIndex="0" role="region" aria-labelledby="1-2-なぜvse向けの規格が必要なのか">{"\n                "}<table><thead><tr className="header"><th style={{"textAlign":"left"}}>{"問題"}</th><th style={{"textAlign":"left"}}>{"内容"}</th></tr></thead><tbody><tr className="odd"><td style={{"textAlign":"left"}}>{"規格が大企業向け"}</td><td style={{"textAlign":"left"}}>{"\n                                多くの国際規格は、VSEの事情（人数・予算・時間）を想定していない\n                            "}</td></tr><tr className="even"><td style={{"textAlign":"left"}}>{"導入コストが高い"}</td><td style={{"textAlign":"left"}}>{"\n                                工数や専門知識が足りず、導入メリットも見えにくい\n                            "}</td></tr><tr className="odd"><td style={{"textAlign":"left"}}>{"取引の機会損失"}</td><td style={{"textAlign":"left"}}>{"\n                                規格に準拠できないため、品質を示せず、一部の経済活動から排除されうる\n                            "}</td></tr></tbody></table>{"\n            "}</div>
{"\n            "}
<p>{"\n                序文は統計も引用しており、中小企業（SME）は世界の企業の約90%、OECDの数字では全企業の99%を占め、雇用の約60%を生み出しているとされています。（S3）\n            "}</p>
{"\n            "}
<div className="callout-stack">{"\n                "}<aside className="callout callout-practice">{"\n                    "}<div className="callout-head">{"\n                        "}<span className="callout-icon">{"💡"}</span><span className="callout-title">{"ポイント"}</span>{"\n                    "}</div>{"\n                    "}<div className="callout-body">{"\n                        "}<p>{"\n                            「小さな組織でも、国際規格に基づく品質を"}<strong>{"示せる"}</strong>{"ようにする」ことが、このシリーズの狙いです。\n                        "}</p>{"\n                    "}</div>{"\n                "}</aside>{"\n            "}</div>
{"\n            "}
<h3 id="1-3-研究者が指摘してきた小さな組織が標準を嫌う理由">{"\n                1-3. 研究者が指摘してきた「小さな組織が標準を嫌う理由」\n            "}</h3>
{"\n            "}
<p>{"\n                Laporte氏とO'Connor氏の論文（S5）は、VSEが標準を避ける理由として、"}<strong>{"コスト・ドキュメント負担・官僚的な印象"}</strong>{"を挙げています。ISO/IEC\n                29110はこれらを避けるために、既存の ISO/IEC/IEEE\n                12207（ソフトウェアライフサイクル）と ISO/IEC/IEEE\n                15289（文書化）の"}<strong>{"一部分だけ"}</strong>{"を選んで作られました。（S5）\n            "}</p>
{"\n            "}
<figure className="diagram" data-diagram="2">{"\n                "}<div className="diagram-scroll"><Diagram index={1} /></div>{"\n                "}<figcaption>{"図2"}</figcaption>{"\n            "}</figure>
{"\n            "}
<p className="source-line">{"出典：S3（序文）、S5。"}</p>
{"\n\n            "}</>;}
