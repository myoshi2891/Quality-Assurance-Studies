import React from 'react';
import Diagram from './Diagram';
export default function Section08() { return <><h2 id="sec-13">{"Step 2：ソフトウェア安全クラスを決める"}</h2>

<h3 id="sec-14">{"2.1 3つのクラス"}</h3>

<p>{" 62304は、ソフトウェアが引き起こしうる"}<strong>{"危害の重大性"}</strong>{"に応じて、3クラスに分類します。 "}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"クラス"}</th><th>{"定義（概要）"}</th><th>{"例"}</th><th>{"必要な厳格さ"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"A"}</strong></td><td>{" ソフトウェアが危険状態に"}<strong>{"寄与しない"}</strong>{"、または寄与しても"}<strong>{"ソフトウェア外のリスクコントロール手段を考慮した後のリスクが許容可能"}</strong></td><td>{"管理業務系、データのログ記録"}</td><td>{"低"}</td></tr><tr className="even"><td><strong>{"B"}</strong></td><td><strong>{"重大ではない傷害"}</strong>{"の可能性がある"}</td><td>{"患者モニタのアラーム関連、一部の画像診断支援"}</td><td>{"中"}</td></tr><tr className="odd"><td><strong>{"C"}</strong></td><td><strong>{"死亡または重大な傷害"}</strong>{"の可能性がある"}</td><td>{"輸液ポンプの投与量制御、放射線治療の制御"}</td><td>{"高"}</td></tr></tbody></table></div>

<h3 id="sec-15">{"2.2 判定フロー"}</h3>

<Diagram id="mmd-5" />

<h3 id="sec-16">{"2.3 判定のコツ"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"ポイント"}</th><th>{"説明"}</th></tr></thead><tbody><tr className="odd"><td>{"確率ではなく重大性で決める"}</td><td>{" 不具合の発生確率は安全クラス判定に使わない。Johner Instituteの解説でも、確率は判定を決めないとされている "}</td></tr><tr className="even"><td>{"ソフトウェア外の対策は考慮できる"}</td><td>{" ハードウェアでの保護機構など、ソフトウェアの外にあるリスクコントロール手段によってクラスを下げることは認められる。"}<strong>{"ソフトウェア内の対策だけではクラスは下がらない"}</strong></td></tr><tr className="odd"><td>{"クラスはシステム単位が基本"}</td><td>{" 分割して別クラスにするには、ソフトウェアアイテムの"}<strong>{"セグリゲーション"}</strong>{"を文書化して正当化する必要がある "}</td></tr><tr className="even"><td>{"迷ったらC"}</td><td>{" 高クラスの要求を満たす作り方にしておけば、後でクラスが変わっても手戻りが小さい。Johner Instituteもクラス C 相当の文書化に合わせる運用を推奨している "}</td></tr></tbody></table></div>

<h3 id="sec-17">{"2.4 セグリゲーション（分離）の考え方"}</h3>

<Diagram id="mmd-6" />

<p>{" 分離を主張するには、「Yが故障してもXに悪影響が及ばない」ことを"}<strong>{"アーキテクチャ上で説明・検証"}</strong>{"できなければなりません。分離できない場合、全体が高いクラスになります。 "}</p>

<h3 id="sec-18">{"2.5 FDAの「文書化レベル」との違い"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"観点"}</th><th>{"IEC 62304"}</th><th>{"FDA"}</th></tr></thead><tbody><tr className="odd"><td>{"区分"}</td><td>{"ソフトウェア安全クラス（A / B / C）"}</td><td>{" 文書化レベル（旧：Level of Concern）。最近のガイダンスでは2区分（基本／拡張） "}</td></tr><tr className="even"><td>{"判定の単位"}</td><td>{"ソフトウェアシステムまたはアイテム"}</td><td>{"機能（intended useの側面）単位でも可"}</td></tr><tr className="odd"><td>{"目的"}</td><td>{"プロセス・文書化の厳格さを決める"}</td><td>{"申請に含める文書化量を決める"}</td></tr><tr className="even"><td>{"注意"}</td><td><strong>{"FDAのデバイスクラス（Class I〜III）とは別物"}</strong></td><td></td></tr></tbody></table></div>

<aside className="callout callout-tip"><div className="callout-icon">{"💡"}</div><div className="callout-body"><p>{" ベンダーが「FDAのClass II」と「62304のClass B」を混同する例は、実務でも頻繁に報告されています。"}<strong>{"必ず別の概念"}</strong>{"として扱ってください。 "}</p></div></aside>
</>; }
