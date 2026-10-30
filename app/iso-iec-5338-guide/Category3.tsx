import React from 'react';
export default function Category3() { return <>
<h2 id="step-2-なぜ作られたのか背景と位置づけ">{"Step 2. なぜ作られたのか：背景と位置づけ"}</h2>

<h3 id="2-1-背景introduction-の趣旨">{"2-1. 背景（Introduction の趣旨）"}</h3>

<ul><li>{"画像認識、自然言語処理、不正検知、自動運転、予知保全など、AIシステムは大きな成功を収めている"}</li><li>{"それらを構築・維持するには、"}<strong>{"従来のソフトウェアのライフサイクルプロセスを AI 向けに拡張する"}</strong>{"のが効率的"}</li><li>{"12207 や 15288 は AI にも広く使えるが、"}<strong>{"新しいプロセスの追加と既存プロセスの修正が必要"}</strong></li><li>{"具体例：本番データが変化したため、"}<strong>{"新しい学習データでモデルを再学習する必要が出る"}</strong>{"といった AI 特有の事情"}</li></ul>

<h3 id="2-2-既存の取り組みを活かす狙い">{"2-2. 既存の取り組みを活かす狙い"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"狙い"}</th><th>{"説明"}</th></tr></thead><tbody><tr className="odd"><td>{"効率の向上"}</td><td>{"既存のソフトウェア工学の知見をそのまま活かせる"}</td></tr><tr className="even"><td>{"AI導入の促進"}</td><td>{"従来の開発プロセスに AI を統合しやすくなる"}</td></tr><tr className="odd"><td>{"相互理解"}</td><td>{"AI関係者（22989で定義されたステークホルダー）の共通言語になる"}</td></tr><tr className="even"><td>{"現実への対応"}</td><td>{"AIシステムは「AI固有部分」＋「従来のコード・DB」の組み合わせであることを前提にしている"}</td></tr></tbody></table></div>

<h3 id="2-3-安全重要システムについて">{"2-3. 安全重要システムについて"}</h3>

<p>{"医療や交通制御のように安全に関わる分野では、特別な配慮が必要です。規格の序文は、そうしたシステムについて "}<strong>{"ISO/IEC TR 5469"}</strong>{"（AIの機能安全）を参照するよう案内しています。また、医療機器分野の "}<strong>{"IEC 62304"}</strong>{" のようにドメイン固有のライフサイクル規格がある場合は、5338 の AI 観点と併せて検討することが勧められています。"}</p>

<h3 id="2-4-規格の主導者について">{"2-4. 規格の主導者について"}</h3>

<p>{"規格の執筆グループのリーダー（主著者）を務めた "}<strong>{"Rob van der Veer 氏"}</strong>{"（Software Improvement Group の Chief AI Officer、OWASP AI Exchange の創設者）は、各種の公開プロフィールで 5338 の主著者と紹介されています。同氏は AI セキュリティ規格（ISO/IEC 27090 など）や EU AI Act 関連の標準化にも関わっており、5338 は「AI を特別扱いしすぎず、ソフトウェア工学の延長として扱う」という思想を持つ規格といえます。"}</p>

<hr />

</>; }
