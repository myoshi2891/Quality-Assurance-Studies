import React from 'react';
import Diagram from './Diagram';
export default function Section05() { return <>
<h2 id="step-4mpd-の階層構造を理解する">{"Step 4：MPD\nの階層構造を理解する"}</h2>

<p><strong>{"【一般知識】"}</strong>{" MPD\nは次の階層で構成されます。まずこの形を頭に入れてください。"}</p>

<Diagram id="mermaid-diagram-2" />

<h3 id="各階層の意味">{"各階層の意味"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"階層"}</th><th>{"意味"}</th><th>{"具体例"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"MPD"}</strong></td><td>{"配信全体の説明書"}</td><td>{"1本の動画またはライブ番組"}</td></tr><tr className="even"><td><strong>{"Period"}</strong></td><td>{"時間軸上の区間"}</td><td>{"本編・広告・次の番組などの切れ目"}</td></tr><tr className="odd"><td><strong>{"AdaptationSet"}</strong></td><td>{"切り替え可能な同種メディアの集合"}</td><td>{"映像、日本語音声、英語音声、字幕"}</td></tr><tr className="even"><td><strong>{"Representation"}</strong></td><td>{"同じ内容の 1 つの品質版"}</td><td>{"1080p/5Mbps、720p/3Mbps など"}</td></tr><tr className="odd"><td><strong>{"Segment"}</strong></td><td>{"実際に HTTP で取得する小さなファイル"}</td><td>{"4 秒ごとの fMP4 断片"}</td></tr></tbody></table></div>

<p><strong>{"【根拠あり】"}</strong>{" 特許公報などに引用されている DASH\nの定義でも、Period\nは「メディアプレゼンテーションの区間」であり、すべての Period\nを連続して並べたものがメディアプレゼンテーション全体になる、と説明されています。"}</p>

<div className="callout callout-practice"><div className="callout-label">{"💡 ポイント"}</div><p><strong>{"覚え方"}</strong>{"：「Period（いつ）→ AdaptationSet（何を）→\nRepresentation（どの画質で）→ Segment（どの断片か）」"}</p></div>

</>; }
