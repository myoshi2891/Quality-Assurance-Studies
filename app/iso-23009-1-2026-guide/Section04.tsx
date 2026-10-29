import React from 'react';
export default function Section04() { return <>
<h2 id="step-3part-1-が決めている-2-つのものmpd-とセグメント">{"Step\n3：Part 1 が決めている 2 つのもの（MPD とセグメント）"}</h2>

<p><strong>{"【根拠あり】"}</strong>{" ISO の抄録（第1版の説明）では、Part 1\nが主に次の 2 つを定義するとされています。"}</p>

<h3 id="①-mpdmedia-presentation-description">{"① MPD（Media Presentation\nDescription）"}</h3>

<ul><li><strong>{"XML 形式"}</strong>{" の文書"}</li><li>{"「どんなメディアが、どんな画質・言語で、どこにあるか」を説明する\n"}<strong>{"目次"}</strong>{" のようなもの"}</li><li>{"セグメントの\n"}<strong>{"HTTP-URL（バイト範囲を組み合わせることもある）"}</strong>{"\nを伝える"}</li></ul>

<h3 id="②-セグメント形式">{"② セグメント形式"}</h3>

<ul><li>{"クライアントが送る HTTP\nリクエストの形式と、セグメントの中身の形式"}</li><li>{"具体的には "}<strong>{"ISO Base Media File Format（ISO/IEC\n14496-12）"}</strong>{" ベースと "}<strong>{"MPEG-2 TS（ISO/IEC 13818）"}</strong>{"\nベースの形式を記述"}</li></ul>

<div className="table-scroll"><table><thead><tr className="header"><th>{"比較項目"}</th><th>{"MPD"}</th><th>{"セグメント"}</th></tr></thead><tbody><tr className="odd"><td>{"役割"}</td><td>{"目次・地図"}</td><td>{"本体（実際の映像・音声データ）"}</td></tr><tr className="even"><td>{"形式"}</td><td>{"XML"}</td><td>{"MP4 の断片（fMP4）など"}</td></tr><tr className="odd"><td>{"取得頻度"}</td><td>{"最初に1回（ライブでは更新のたびに）"}</td><td>{"再生中ずっと連続的に"}</td></tr><tr className="even"><td>{"例えるなら"}</td><td>{"本の目次"}</td><td>{"本の各ページ"}</td></tr></tbody></table></div>

</>; }
