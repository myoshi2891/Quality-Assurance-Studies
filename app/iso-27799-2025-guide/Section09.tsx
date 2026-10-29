import React from 'react';
import Diagram from './Diagram';
export default function Section09() { return <>
<h2 id="step-9医療専用の追加コントロールhlt8個を理解する">{"\n                    Step 9：医療専用の追加コントロール「HLT」8個を理解する"}<a aria-label="リンク" className="anchor" href="#step-9医療専用の追加コントロールhlt8個を理解する">{"#"}</a></h2>

<p>{"\n                    HLT\n                    はこの規格の"}<strong>{"目玉"}</strong>{"です。27002には存在しない、医療ならではの管理策です。\n                "}</p>

<div className="table-scroll" tabIndex={0}><table><thead><tr className="header"><th>{"番号"}</th><th>{"名称"}</th><th>{"規格内でのボリューム感（英語版目次ページ）"}</th></tr></thead><tbody><tr className="odd"><td>{"5.38"}</td><td>{"情報セキュリティ要求事項の分析と仕様化"}</td><td>{"約1ページ（p.18）"}</td></tr><tr className="even"><td>{"5.39"}</td><td>{"ケアの対象者の一意な識別"}</td><td>{"約1.5ページ（p.19〜20）。HLT中で最長級"}</td></tr><tr className="odd"><td>{"5.40"}</td><td>{"表示・印刷されたデータの妥当性確認"}</td><td>{"約0.5ページ（p.20）"}</td></tr><tr className="even"><td>{"5.41"}</td><td>{"公開されている健康情報"}</td><td>{"約1ページ（p.20〜21）"}</td></tr><tr className="odd"><td>{"5.42"}</td><td>{"緊急時の通信"}</td><td>{"約0.5ページ（p.21）"}</td></tr><tr className="even"><td>{"5.43"}</td><td>{"外部へのインシデント報告"}</td><td>{"約1ページ（p.21〜22）"}</td></tr><tr className="odd"><td>{"6.9"}</td><td>{"マネジメント向け訓練"}</td><td>{"約0.5ページ（p.25）"}</td></tr><tr className="even"><td>{"8.35"}</td><td>{"ゼロトラストの原則"}</td><td>{"約0.5ページ（p.36）"}</td></tr></tbody></table></div>

<h3 id="9-1-hltがなぜ必要か考え方">{"\n                    9-1. HLTがなぜ必要か（考え方）"}<a aria-label="リンク" className="anchor" href="#9-1-hltがなぜ必要か考え方">{"#"}</a></h3>

<div className="table-scroll" tabIndex={0}><table><thead><tr className="header"><th>{"HLT"}</th><th>{"医療で特に重要になる理由（一般的な背景）"}</th></tr></thead><tbody><tr className="odd"><td>{"5.38 要求事項の分析・仕様化"}</td><td>{"\n                                    医療情報システム・医療機器は調達・開発の段階でセキュリティを組み込むと効果が大きい。Annex\n                                    Dの要求例とも連動\n                                "}</td></tr><tr className="even"><td>{"5.39 ケアの対象者の一意な識別"}</td><td><strong>{"患者の取り違え"}</strong>{"は、セキュリティ（機密性・完全性）と患者安全の両方に直結する。同姓同名・複数システム間の連携で問題になりやすい\n                                "}</td></tr><tr className="odd"><td>{"5.40 表示・印刷データの妥当性確認"}</td><td>{"\n                                    画面表示・帳票・ラベルの誤りは、診療判断の誤りに結びつく。"}<strong>{"完全性"}</strong>{"の問題が安全の問題になる。表示・印刷された個人の健康情報に、ケアの対象者を安全に識別できる情報が含まれないと、取り違えにもつながる\n                                "}</td></tr><tr className="even"><td>{"5.41 公開されている健康情報"}</td><td>{"\n                                    一般向けの健康情報は、改ざんや誤情報が人々の行動に影響する。"}<strong>{"秘密にする情報ではなく、正確さを守る情報"}</strong></td></tr><tr className="odd"><td>{"5.42 緊急時の通信"}</td><td>{"\n                                    災害・停電・システム障害時にも、医療継続に必要な連絡を維持する必要がある\n                                "}</td></tr><tr className="even"><td>{"5.43 外部へのインシデント報告"}</td><td>{"規制当局・関係組織などへの報告が求められる場面に備える"}</td></tr><tr className="odd"><td>{"6.9 マネジメント向け訓練"}</td><td>{"経営・管理層の理解不足は、予算・方針・文化に影響する"}</td></tr><tr className="even"><td>{"8.35 ゼロトラストの原則"}</td><td>{"\n                                    医療は多拠点・多業者・多機器の接続が当たり前であり、境界防御だけでは守りきれない\n                                "}</td></tr></tbody></table></div>

<h3 id="9-2-ゼロトラスト835の補足">{"\n                    9-2. ゼロトラスト（8.35）の補足"}<a aria-label="リンク" className="anchor" href="#9-2-ゼロトラスト835の補足">{"#"}</a></h3>

<p>{"\n                    規格書の本文は有償のため、ここでは"}<strong>{"オランダの医療向け規格 NEN 7510 の同一内容の管理策"}</strong>{"に関する公開説明を参考にします。それによれば、ネットワークセグメントに割り当てる情報サービス・利用者・情報システムのグループは"}<strong>{"できるだけ小さく保ち"}</strong>{"、別のセグメントへのアクセスは"}<strong>{"双方が相互に認証された後に限る"}</strong>{"という考え方が示されています（出典は付録A）。\n                "}</p>

<Diagram id="mermaid-diagram-7" />

<div className="callout callout-warn"><div className="callout-title"><span className="callout-icon">{"⚠"}</span><span>{"注意"}</span></div><div className="callout-body"><p>{"\n                            上図は"}<strong>{"考え方の説明"}</strong>{"です。27799の8.35の実際の文言・要求の粒度は、規格書で確認してください。\n                        "}</p></div></div>

<hr  />

</>; }
