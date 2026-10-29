import React from 'react';
import Diagram from './Diagram';
export default function Section07() { return <>
<h2 id="step-6オンデマンドstaticとライブdynamic">{"Step\n6：オンデマンド（static）とライブ（dynamic）"}</h2>

<p><strong>{"【一般知識】"}</strong>{" MPD のルート要素の "}<code>{"type"}</code>{"\n属性で、2 つの動作モードが切り替わります。"}</p>

<Diagram id="mermaid-diagram-3" />

<div aria-label="表：Step 6：オンデマンド（static）とライブ（dynamic）" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"比較項目"}</th><th>{"static（オンデマンド）"}</th><th>{"dynamic（ライブ）"}</th></tr></thead><tbody><tr className="odd"><td>{"MPD の更新"}</td><td>{"基本的に不要"}</td><td>{"minimumUpdatePeriod があれば必要（または Patch で差分更新）。省略時は更新されず、無限に続くセグメント列も表せる"}</td></tr><tr className="even"><td>{"総再生時間"}</td><td>{"決まっている"}</td><td>{"決まっていない（無制限もある）"}</td></tr><tr className="odd"><td>{"シーク"}</td><td>{"全区間に可能"}</td><td><code>{"timeShiftBufferDepth"}</code>{" の範囲内"}</td></tr><tr className="even"><td>{"時刻同期"}</td><td>{"ほぼ不要"}</td><td><strong>{"重要"}</strong>{"（クライアントとサーバーの時刻ずれが問題になる）"}</td></tr></tbody></table></div>

<p><strong>{"【根拠あり】"}</strong>{" Bitmovin のブログ（Timmerer\n氏）によると、第4版（2019）の第1アメンドメントで "}<strong>{"DASH と CMAF\nの調和"}</strong>{"、"}<strong>{"イベントとタイムドメタデータのタイミング／処理モデル"}</strong>{"、"}<strong>{"XML\nPatch（IETF RFC 5261）を使った MPD の部分更新（MPD Patch）"}</strong>{"\nなどが整備されました。"}</p>

</>; }
