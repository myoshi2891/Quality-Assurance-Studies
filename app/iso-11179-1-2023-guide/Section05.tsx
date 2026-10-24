import React from 'react';
import Diagram from './Diagram';
export default function Section() { return <>
<h2 id="step-42023年版で何が変わったのか">{"STEP\n4：2023年版で何が変わったのか"}</h2>

<h3 id="4-1-変更の背景">{"4-1. 変更の背景"}</h3>

<p>{"2015年版（第3版期）までは、Part 3\nが非常に大きく、"}<strong>{"共通機能とデータ記述の仕組みが同居"}</strong>{"していました。2023年版では、「"}<strong>{"管理しやすくするために分割"}</strong>{"」するという方針が取られました。"}</p>

<h3 id="4-2-主な変更点確認できた範囲">{"4-2.\n主な変更点（確認できた範囲）"}</h3>

<div className="table-scroll"><table aria-labelledby="4-2-主な変更点確認できた範囲"><thead><tr className="header"><th>{"観点"}</th><th>{"内容"}</th><th>{"根拠ソース"}</th></tr></thead><tbody><tr className="odd"><td>{"版の更新"}</td><td>{"2015年版を置換（旧版は Withdrawn）"}</td><td>{"ISO公式ページ [S1]"}</td></tr><tr className="even"><td>{"構成の変更"}</td><td>{"旧 Part 3 を複数パートに分割し、管理しやすくした"}</td><td>{"Part 3:2023 サンプル [S8]"}</td></tr><tr className="odd"><td>{"基本属性"}</td><td>{"旧 Part 3 の「Basic Attributes」を Part 30 へ移動"}</td><td>{"Part 3:2023 サンプル [S8]"}</td></tr><tr className="even"><td>{"データ記述"}</td><td>{"旧 Part 3 の「Data Description」領域を Part 31 へ移動"}</td><td>{"Part 3:2023 サンプル [S8]"}</td></tr><tr className="odd"><td>{"Part 1 の記述追加"}</td><td>{"Part 30〜35 の説明が Part 1 に追加された"}</td><td>{"Part 1:2023 プレビュー [S7]"}</td></tr><tr className="even"><td>{"他規格との関係"}</td><td>{"JTC 1/SC 32 の他規格との関係の記述"}</td><td>{"ISO公式ページ [S1]、Part 1 目次 [S7]"}</td></tr></tbody></table></div>

<h3 id="4-3-新旧比較イメージ">{"4-3. 新旧比較イメージ"}</h3>

<Diagram id="diagram-5" />

<ul>
<li>{"従来の Part 3（基本属性・データ記述・共通機能など）は、2023年版で Part 3（共通機能）・Part 30（基本属性）・Part 31（データ仕様）・Part 32（概念体系）に分割された。"}</li>
<li>{"従来の Part 7:2019（データセット登録）は、2023年版の Part 33（データセット）に対応する。"}</li>
<li>{"従来の ISO/IEC 19763-10:2014（モデル登録）は、2023年版の Part 35（モデル）に対応する。"}</li>
</ul>

<h3 id="4-4-学習者への影響">{"4-4. 学習者への影響"}</h3>

<div className="table-scroll"><table aria-labelledby="4-4-学習者への影響"><thead><tr className="header"><th>{"立場"}</th><th>{"影響"}</th></tr></thead><tbody><tr className="odd"><td>{"規格を初めて読む人"}</td><td>{"「どのパートに何が書いてあるか」を Part 1\nで俯瞰できるので入りやすい"}</td></tr><tr className="even"><td>{"旧版（2013年版 Part 3 等）で実装した人"}</td><td>{"条項番号の参照先が変わるため、"}<strong>{"参照対応表の更新"}</strong>{"が必要になり得る"}</td></tr><tr className="odd"><td>{"実装者"}</td><td>{"必要な拡張パートだけを選んで採用しやすい（例：基本属性だけなら Part\n30）"}</td></tr></tbody></table></div>

<div className="callout callout-practice"><span className="callout-icon">{"💡"}</span><div className="callout-body"><div className="callout-title">{"ベストプラクティス"}</div><p>{"社内文書で「11179-3 の\n11.5.2.1」のように旧条項番号を引用している場合は、2023年版の分割後にどのパートへ移ったかを確認して更新しましょう。"}</p></div></div>

</>; }
