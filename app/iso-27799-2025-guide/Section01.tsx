import React from 'react';
export default function Section01() { return <>
<h2 id="step-1なぜ医療に専用の規格が必要なのか">{"\n                    Step 1：なぜ医療に専用の規格が必要なのか"}<a aria-label="リンク" className="anchor" href="#step-1なぜ医療に専用の規格が必要なのか">{"#"}</a></h2>

<p>{"\n                    ISO/IEC 27002\n                    は「あらゆる業種で使える」ように、意図的に汎用的に書かれています。ところが医療には、他の業界にはない（あるいは特に強い）事情があります。規格の序文は、その背景を次のように整理しています（要旨）。\n                "}</p>

<div className="table-scroll" tabIndex={0}><table><thead><tr className="header"><th>{"医療ならではの事情"}</th><th>{"かみ砕いた説明"}</th></tr></thead><tbody><tr className="odd"><td>{"医療専用のデジタル機器"}</td><td>{"ソフトウェアを組み込んだ"}<strong>{"医療機器"}</strong>{"が代表例"}</td></tr><tr className="even"><td>{"臨床の安全・有効性とのバランス"}</td><td>{"セキュリティを強くしすぎて診療が止まると本末転倒"}</td></tr><tr className="odd"><td>{"プライバシーと診療上の必要性の両立"}</td><td>{"\n                                    診断・治療に必要な人には"}<strong>{"必要なときに"}</strong>{"見せつつ、不要な閲覧は防ぐ\n                                "}</td></tr><tr className="even"><td>{"情報が分散している"}</td><td>{"\n                                    組織内・組織間（時には法域をまたぐ）で共有され、高い相互運用性が必要\n                                "}</td></tr><tr className="odd"><td>{"利用者が多様"}</td><td>{"\n                                    医師・看護師・研修医・学生・技師・事務・ボランティア・患者本人・代理人など\n                                "}</td></tr><tr className="even"><td>{"組織間の依存関係が多い"}</td><td>{"医療・臨床研究・教育・研修の情報の流れが絡み合う"}</td></tr><tr className="odd"><td>{"24時間365日の可用性"}</td><td>{"災害などで需要が急増することもある"}</td></tr><tr className="even"><td>{"法令・契約要件が多様"}</td><td>{"\n                                    医療提供者も、システム・機器の製造者・供給者も対象。法域で異なる\n                                "}</td></tr><tr className="odd"><td>{"責任の重なりや抜け"}</td><td>{"\n                                    IT担当と医療機器担当など、職種間で責任範囲があいまいになりやすい\n                                "}</td></tr></tbody></table></div>

<h3 id="具体例で理解する">{"\n                    具体例で理解する"}<a aria-label="リンク" className="anchor" href="#具体例で理解する">{"#"}</a></h3>

<div className="callout callout-example"><div className="callout-title"><span className="callout-icon">{"✎"}</span><span>{"例"}</span></div><div className="callout-body"><p>{"\n                            救急外来で、診療記録システムが「セキュリティのため」に何度も再認証を求めてくる。\n                            → 医師が忙しさのあまり、IDカードを共有して使い回す（ワークアラウンド）。\n                            →\n                            誰が何を見たか追跡できなくなり、"}<strong>{"かえってセキュリティも患者安全も悪化"}</strong>{"する。\n                        "}</p></div></div>

<p>{"\n                    このような「セキュリティ対策が臨床の現場で逆効果になる」事態を避けるために、医療向けの視点が必要になります。\n                "}</p>

<hr  />

</>; }
