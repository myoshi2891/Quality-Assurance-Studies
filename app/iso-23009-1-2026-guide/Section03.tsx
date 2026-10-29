import React from 'react';
export default function Section03() { return <>
<h2 id="step-2規格ファミリーisoiec-23009の中での-part-1-の位置づけ">{"Step\n2：規格ファミリー（ISO/IEC 23009）の中での Part 1 の位置づけ"}</h2>

<p><strong>{"【根拠あり】"}</strong>{" MPEG 公式の DASH\nページには、少なくとも次の Part が掲載されています。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"Part"}</th><th>{"内容"}</th><th>{"ひとことで言うと"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"Part 1"}</strong></td><td>{"Media Presentation Description and Segment Formats"}</td><td><strong>{"本ガイドの対象。MPD\nとセグメントの形式を定義する中核"}</strong></td></tr><tr className="even"><td>{"Part 4"}</td><td>{"Segment Encryption and Authentication"}</td><td>{"セグメントの暗号化と認証（メディア形式に依存しない）"}</td></tr><tr className="odd"><td>{"Part 5"}</td><td>{"Server and Network assisted DASH（SAND）"}</td><td>{"サーバー・ネットワーク支援の DASH"}</td></tr><tr className="even"><td>{"Part 6"}</td><td>{"DASH with Server Push and WebSockets"}</td><td>{"サーバープッシュ、WebSocket との組み合わせ"}</td></tr><tr className="odd"><td>{"Part 7"}</td><td>{"Delivery of CMAF content with DASH"}</td><td>{"CMAF コンテンツを DASH で配信する方法"}</td></tr></tbody></table></div>

<p><strong>{"【根拠あり】"}</strong>{" また、Part 8（Session-based DASH）が\nFDIS（最終国際規格案）に進んだことが、Bitmovin のブログ（Timmerer\n氏）で報告されています。"}</p>

<p><strong>{"【一般知識】"}</strong>{" Part\n2（適合性試験・参照ソフトウェア）と Part\n3（実装ガイドライン）も存在します。MPEG\n側の公式解説では、第1版の後に「参照ソフトウェアと適合性試験ツール、ガイドライン、追加の展開シナリオ向けの拡張」を含む6つの\nPart が追加されたと説明されています。"}</p>

<div className="callout callout-practice"><div className="callout-label">{"💡 ポイント"}</div><p><strong>{"ポイント"}</strong>{"：Part 1 を理解すれば、DASH\nの「データの形」の 9 割は理解できます。他の Part\nは「暗号化」「配信最適化」「CMAF\nとの組み合わせ」といった追加の話題です。"}</p></div>

</>; }
