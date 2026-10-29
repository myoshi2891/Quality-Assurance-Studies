import React from 'react';
export default function Section04() { return <>
<h2 id="step-4先に覚える用語">{"\n                    Step 4：先に覚える用語"}<a aria-label="リンク" className="anchor" href="#step-4先に覚える用語">{"#"}</a></h2>

<p>{"規格の第3章で定義されている主要用語です（意味を要約）。"}</p>

<div className="table-scroll" tabIndex={0}><table><thead><tr className="header"><th>{"用語"}</th><th>{"意味（要約）"}</th><th>{"補足"}</th></tr></thead><tbody><tr className="odd"><td>{"health（健康）"}</td><td>{"身体的・精神的・社会的に完全に良好な状態"}</td><td>{"病気や虚弱がないだけではない（WHO憲章に基づく）"}</td></tr><tr className="even"><td>{"health software（ヘルスソフトウェア）"}</td><td>{"\n                                    個人の健康の管理・維持・改善、またはケアの提供のために使うソフトウェア、または医療機器に組み込む目的で開発されたソフトウェア\n                                "}</td><td><strong>{"SaMD（医療機器としてのソフトウェア）を完全に含む"}</strong>{"（ISO 81001-1由来）\n                                "}</td></tr><tr className="odd"><td>{"healthcare（ヘルスケア）"}</td><td>{"個人の健康に関わるケア活動・サービス・管理・供給"}</td><td></td></tr><tr className="even"><td>{"personal health information（個人の健康情報）"}</td><td>{"\n                                    識別できる個人の心身の健康、またはその人への医療サービスの提供に関する情報\n                                "}</td><td>{"\n                                    登録情報、支払い・資格情報、健康目的の識別番号、診療中に収集された情報、検体検査の結果、医療提供者としての識別なども含みうる\n                                "}</td></tr><tr className="odd"><td>{"subject of care（ケアの対象者）"}</td><td>{"医療を受けようとする／受けている／受けた人"}</td><td>{"いわゆる「患者」より広い言い方"}</td></tr><tr className="even"><td>{"proxy（代理人）"}</td><td>{"ケアの対象者に代わって意思決定する権利を持つ人"}</td><td>{"未成年者の親、判断能力が不十分な成人の後見人など"}</td></tr><tr className="odd"><td>{"HLT"}</td><td>{"health の略。医療専用の追加コントロール名の接頭辞"}</td><td>{"「HeaLTh」"}</td></tr><tr className="even"><td>{"PII"}</td><td>{"個人を特定できる情報"}</td><td><strong>{"個人の健康情報は PII の部分集合"}</strong></td></tr></tbody></table></div>

<div className="callout callout-note"><div className="callout-title"><span className="callout-icon">{"ℹ"}</span><span>{"ポイント"}</span></div><div className="callout-body"><p>{"\n                            個人の健康情報には、"}<strong>{"匿名化されて個人を識別できなくなった情報は含まれません"}</strong>{"（他の情報と組み合わせても識別できない場合）。\n                        "}</p></div></div>

<hr  />

</>; }
