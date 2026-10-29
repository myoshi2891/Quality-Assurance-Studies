import React from 'react';
export default function Section08() { return <>
<h2 id="step-7プロファイルとは何か">{"Step 7：プロファイルとは何か"}</h2>

<p><strong>{"【一般知識】"}</strong>{" DASH\n規格は機能が非常に多いため、全機能をすべてのプレーヤーが実装するのは現実的ではありません。そこで\n"}<strong>{"プロファイル（profile）"}</strong>{" が「この MPD\nは、この機能の範囲だけを使っています」という宣言（"}<code>{"profiles"}</code>{"\n属性）として使われます。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"プロファイル名（URN の例）"}</th><th>{"概要"}</th></tr></thead><tbody><tr className="odd"><td><code>{"urn:mpeg:dash:profile:isoff-on-demand:2011"}</code></td><td>{"ISO BMFF のオンデマンド向け"}</td></tr><tr className="even"><td><code>{"urn:mpeg:dash:profile:isoff-live:2011"}</code></td><td>{"ISO BMFF のライブ向け"}</td></tr><tr className="odd"><td><code>{"urn:mpeg:dash:profile:isoff-main:2011"}</code></td><td>{"ISO BMFF の汎用"}</td></tr></tbody></table></div>

<p><strong>{"【根拠あり】"}</strong>{" 第4版の第1アメンドメントでは「CMAF\n向けの DASH プロファイル」も追加されています（Bitmovin ブログ）。"}</p>

<div className="callout callout-practice"><div className="callout-label">{"💡 ポイント"}</div><p><strong>{"QA のヒント"}</strong>{"：実運用では、MPD の\n"}<code>{"profiles"}</code>{" 宣言と、実際に MPD\nが使っている機能（例：SegmentTimeline、MPD Patch\nなど）が一致しているかが典型的な確認ポイントです【筆者の提案】。"}</p></div>

</>; }
