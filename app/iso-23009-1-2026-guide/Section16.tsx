import React from 'react';
export default function Section16() { return <>
<h2 id="調査の限界と注意事項">{"調査の限界と注意事項"}</h2>

<div aria-label="表：調査の限界と注意事項" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"項目"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"規格本文の未確認"}</td><td>{"ISO/IEC 23009-1:2026\nの本文（375ページ）は有償のため、本ガイドは本文を直接確認していません。第6版の機能は\nMPEG 公式のプレスリリース・会合レポートに基づく概要レベルです"}</td></tr><tr className="even"><td>{"第5版→第6版の差分"}</td><td>{"条項番号や正確な属性名・要素名（例：新しい要素の名称）は、本文または\nDASH-IF の仕様で確認してください"}</td></tr><tr className="odd"><td>{"第3版の年"}</td><td>{"規格データベースで 2019年8月の発行を確認済み（同年12月に第4版へ改訂され廃止）"}</td></tr><tr className="even"><td>{"実装の対応状況"}</td><td>{"dash.js・Shaka Player\n等の第6版機能への対応状況は、各プロジェクトの最新リリースノートで確認してください（Shaka\nが Annex K を参照している事実のみ確認）"}</td></tr><tr className="odd"><td>{"時点"}</td><td>{"情報は 2026年10月8日までに確認できた範囲です。第6版 AMD 1\nは作業中のため、内容が変わる可能性があります"}</td></tr><tr className="even"><td>{"MPD 例"}</td><td>{"Step 5 の XML\nは学習用に簡略化した例であり、そのまま本番配信に使える完全な MPD\nではありません"}</td></tr></tbody></table></div>

<div className="callout callout-practice"><div className="callout-label">{"💡 ポイント"}</div><p><strong>{"次のステップ"}</strong>{"：本文を入手できる場合は、まず「MPD\nの意味論（要素・属性の表）」「セグメント情報（SegmentTemplate/SegmentTimeline）」「Annex\nK（ServiceDescription）」の順に読むと、本ガイドの Step 4〜10\nと対応づけやすくなります。"}</p></div>

</>; }
