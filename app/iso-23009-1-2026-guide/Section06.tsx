import React from 'react';
import CodeExample from './CodeExample';
export default function Section06() { return <>
<h2 id="step-5セグメントの場所を示す-4-つの方法アドレッシング">{"Step\n5：セグメントの場所を示す 4 つの方法（アドレッシング）"}</h2>

<p><strong>{"【一般知識】"}</strong>{" MPD は、各セグメントの URL\nを決める方法をいくつか用意しています。代表的なものは次のとおりです。"}</p>

<div aria-label="表：Step 5：セグメントの場所を示す 4 つの方法（アドレッシング）" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"方法"}</th><th>{"概要"}</th><th>{"向いている用途"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"BaseURL + SegmentBase"}</strong></td><td>{"1 つの MP4 ファイルの中のバイト範囲（インデックス）で位置を示す"}</td><td>{"オンデマンド（単一ファイル）"}</td></tr><tr className="even"><td><strong>{"SegmentList"}</strong></td><td>{"セグメントの URL を MPD に列挙する"}</td><td>{"小規模なオンデマンド"}</td></tr><tr className="odd"><td><strong>{"SegmentTemplate（Number）"}</strong></td><td><code>{"$Number$"}</code>{" を連番に置き換えて URL を作る"}</td><td>{"ライブ・オンデマンド"}</td></tr><tr className="even"><td><strong>{"SegmentTemplate + SegmentTimeline"}</strong></td><td>{"各セグメントの開始時刻と長さを明示して URL を作る"}</td><td>{"長さが不揃いなセグメント、ライブ"}</td></tr></tbody></table></div>

<h3 id="5-1-オンデマンド向けの最小例学習用に簡略化">{"5-1.\nオンデマンド向けの最小例（学習用に簡略化）"}</h3>

<div aria-label="コード例：5-1. オンデマンド向けの最小例（学習用に簡略化）" className="code-block" role="region" tabIndex={0}><CodeExample index={0} /></div>

<h3 id="5-2-ライブ向けの最小例segmenttemplate--segmenttimeline">{"5-2.\nライブ向けの最小例（SegmentTemplate + SegmentTimeline）"}</h3>

<div aria-label="コード例：5-2. ライブ向けの最小例（SegmentTemplate + SegmentTimeline）" className="code-block" role="region" tabIndex={0}><CodeExample index={1} /></div>

<p><strong>{"読み方"}</strong>{"："}<code>{"<S t=\"0\" d=\"360000\" r=\"9\"/>"}</code>{"\nは、"}<code>{"timescale=\"90000\""}</code>{" のもとで「開始時刻 0、長さ 360000（=\n4 秒）のセグメントを、最初の 1 個＋繰り返し 9 回（= 計 10\n個）」という意味です。"}<code>{"$Time$"}</code>{"\nの部分に各セグメントの開始時刻が入って URL になります。"}</p>

<div className="callout callout-warn"><div className="callout-label">{"⚠ 注意"}</div><p>{"⚠️\n"}<strong>{"この例はライブ再生には使えません【筆者の注記】"}</strong>{"："}<code>{"availabilityStartTime"}</code>{"\nを固定日時にし、SegmentTimeline も 40 秒分（10\n個）で止めた、構造を説明するための "}<strong>{"有限の模式図"}</strong>{"\nです。実際のライブ配信では、"}<code>{"availabilityStartTime"}</code>{"\nを実際のストリーム開始時刻に合わせ、パッケージャーが\n"}<code>{"minimumUpdatePeriod"}</code>{" ごとに MPD を更新して SegmentTimeline\nに新しいセグメントを追記し続け、"}<code>{"timeShiftBufferDepth"}</code>{"\nから外れた古いエントリを取り除きます。なお、SegmentTemplate で無限に続くセグメント列を表す場合は minimumUpdatePeriod を省略し、MPD を更新しない dynamic MPD とすることもできます。この例をそのままプレーヤーに読み込ませると、現在時刻が\ntimeline の範囲外になり、取得できるセグメントがない状態になります。"}</p></div>

<div className="callout callout-note"><div className="callout-label">{"ℹ メモ"}</div><p><strong>{"第6版との関係"}</strong>{"：後述するとおり、第6版では「SegmentTimeline\nで "}<strong>{"セグメント長のパターン"}</strong>{"\nを簡潔に表せる」ようになったと報告されています。MPD\nが長くなる問題（特にライブ）を減らす狙いです。"}</p></div>

</>; }
