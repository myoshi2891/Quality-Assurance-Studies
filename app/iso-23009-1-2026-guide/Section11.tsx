import React from 'react';
import Diagram from './Diagram';
export default function Section11() { return <>
<h2 id="step-10第6版2026の主な強化点">{"Step\n10：第6版（2026）の主な強化点"}</h2>

<p><strong>{"【根拠あり】"}</strong>{" MPEG\n公式の第149回会合プレスリリースが、第6版の主な強化点を次の6点で紹介しています。"}</p>

<Diagram id="mermaid-diagram-5" />

<div aria-label="表：Step 10：第6版（2026）の主な強化点" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"#"}</th><th>{"強化点"}</th><th>{"何が嬉しいか（公式の説明）"}</th><th>{"初学者向けの補足【筆者の解釈】"}</th></tr></thead><tbody><tr className="odd"><td>{"1"}</td><td><strong>{"代替メディアプレゼンテーション"}</strong></td><td>{"メインのストリームと代替ストリームの間をシームレスに切り替えられる"}</td><td>{"広告・差し替え素材・別アングルなどへの切替に使われる発想"}</td></tr><tr className="even"><td>{"2"}</td><td><strong>{"コンテンツステアリング"}</strong></td><td>{"複数の CDN をまたぐ配信を最適化するためのシグナリング"}</td><td>{"「どの CDN から取るか」を配信側が誘導できる"}</td></tr><tr className="odd"><td>{"3"}</td><td><strong>{"セグメントシーケンスのアドレッシング強化"}</strong></td><td>{"低遅延配信と高速な tune-in（視聴開始）を改善"}</td><td>{"ライブで再生開始までの待ち時間を短縮"}</td></tr><tr className="even"><td>{"4"}</td><td><strong>{"パターンによるコンパクトな長さ表現"}</strong></td><td>{"MPD のオーバーヘッドを削減"}</td><td>{"セグメント長が規則的なら「パターン」で短く書ける"}</td></tr><tr className="odd"><td>{"5"}</td><td><strong>{"CMCD（Common Media Client Data）対応"}</strong></td><td>{"クライアント側の分析（アナリティクス）を改善"}</td><td>{"プレーヤーの状態を CDN などへ伝える標準的な仕組み"}</td></tr><tr className="even"><td>{"6"}</td><td><strong>{"非線形再生"}</strong></td><td>{"インタラクティブなストーリーラインなど次世代のメディア体験に対応"}</td><td>{"分岐するストーリー、選択型コンテンツなど"}</td></tr></tbody></table></div>

<h3 id="追加で確認できた採択内容第145回会合2024年1月">{"追加で確認できた採択内容（第145回会合・2024年1月）"}</h3>

<p><strong>{"【根拠あり】"}</strong>{" Timmerer\n氏の会合レポートによると、後に第6版となる ISO/IEC 23009-1\nに次の内容が採択されました。"}</p>

<div aria-label="表：追加で確認できた採択内容（第145回会合・2024年1月）" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"内容"}</th><th>{"概要"}</th></tr></thead><tbody><tr className="odd"><td>{"CMCD の "}<code>{"sid"}</code>{" / "}<code>{"cid"}</code>{" を MPD URL で渡せる"}</td><td>{"セッション ID・コンテンツ ID を MPD の取得 URL 経由で扱える"}</td></tr><tr className="even"><td>{"SegmentTimeline でのセグメント長パターン"}</td><td>{"長さの繰り返しパターンを簡潔に記述"}</td></tr><tr className="odd"><td><strong>{"バックグラウンド動作モード"}</strong></td><td>{"プレーヤーが、メディアの復号や描画をせずに MPD\n更新の受信とイベントのリスニングだけを行える"}</td></tr></tbody></table></div>

<h3 id="コンテンツステアリングの動き概念図">{"コンテンツステアリングの動き（概念図）"}</h3>

<p><strong>{"【根拠あり】"}</strong>{" DASH-IF\nのコンテンツステアリング仕様では、外部の「制御サーバー」が、再生開始時と再生中の両方で、プレーヤーが使う\nCDN を切り替えられます。Silhavy 氏・Pham 氏・Giladi 氏・Balk 氏・Begen\n氏・Law 氏らの SMPTE 論文（dash.js\nでの実装）がこの仕組みを解説しています。下図は、その考え方を学習用に単純化したものです【筆者による単純化】。"}</p>

<Diagram id="mermaid-diagram-6" />

</>; }
