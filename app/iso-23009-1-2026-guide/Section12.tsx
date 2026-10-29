import React from 'react';
export default function Section12() { return <>
<h2 id="step-11発行後の動きと実装エコシステム">{"Step\n11：発行後の動きと実装エコシステム"}</h2>

<h3 id="11-1-発行後も規格は進化している">{"11-1.\n発行後も規格は進化している"}</h3>

<p><strong>{"【根拠あり】"}</strong>{" MPEG 公式の DASH Part 1\nページには、次の作業文書が掲載されています。"}</p>

<div className="table-scroll"><table><thead><tr className="header"><th>{"MPEG 会合"}</th><th>{"日付"}</th><th>{"文書"}</th></tr></thead><tbody><tr className="odd"><td>{"第152回"}</td><td>{"2025-10-15"}</td><td>{"第6版 AMD 1「メディア認証、CMCD\n拡張、その他の強化」の予備ドラフト"}</td></tr><tr className="even"><td>{"第153回"}</td><td>{"2026-01-29"}</td><td>{"同 AMD 1 の作業原案（WD）"}</td></tr><tr className="odd"><td>{"第154回"}</td><td>{"2026-05-07"}</td><td>{"同 AMD 1 の作業原案（WD）"}</td></tr><tr className="even"><td>{"各回"}</td><td>{"—"}</td><td>{"「Technologies under Consideration for\nDASH」（将来技術の候補集）"}</td></tr></tbody></table></div>

<p>{"つまり「第6版が出たら終わり」ではなく、"}<strong>{"第6版に対する AMD 1\nがすでに準備されています"}</strong>{"。実務では「第6版 + 今後の\nAMD」を意識するのが安全です。"}</p>

<p>{"また、Timmerer 氏は\n2024年1月に、触覚（haptics）のシグナリング、最大セグメントレートの通知、著作権ライセンス通知の拡張などが「Technologies\nunder Consideration」に入っていると報告しています。"}</p>

<h3 id="11-2-代表的な実装での扱い">{"11-2. 代表的な実装での扱い"}</h3>

<div className="table-scroll"><table><thead><tr className="header"><th>{"実装"}</th><th>{"提供元・位置づけ"}</th><th>{"確認できた事実"}</th></tr></thead><tbody><tr className="odd"><td><strong>{"dash.js"}</strong></td><td>{"DASH Industry Forum（DASH-IF）の参照実装"}</td><td>{"MPD Patch、ギャップ処理、CMCD、CMAF 低遅延などをサポートしてきたと\nDASH-IF の資料に記載"}</td></tr><tr className="even"><td><strong>{"Shaka Player"}</strong></td><td>{"Google 主導の OSS プレーヤー"}</td><td>{"API ドキュメントで "}<strong>{"ISO/IEC 23009-1:2026 の Annex\nK（ServiceDescription）"}</strong>{" や K.4.2.7.2（CMCD\n報告のデスクリプタ）を参照して実装"}</td></tr></tbody></table></div>

<p><strong>{"【根拠あり・要注意】"}</strong>{" Shaka Player\nのドキュメントには、dash.js が受け入れる DASH-IF の別名スキーム\n"}<code>{"urn:dashif:cta-5004:2025"}</code>{"\nについて「レジストリに項目がないため、あえて受け入れていない」という趣旨の記述があります。"}<strong>{"同じ規格でも実装ごとに解釈や受け入れ範囲が異なる"}</strong>{"\nことの実例です。"}</p>

<p><strong>{"【二次情報】"}</strong>{" 解説記事（Fora\nSoft）によれば、コンテンツステアリングは hls.js 1.4 以降、Shaka 4.6\n以降、dash.js 4.7 以降で対応済みで、HLS と DASH\nで同じ形式の制御マニフェストを共有できるとされています。ただし二次情報のため、導入時は各プロジェクトの公式リリースノートで確認してください。"}</p>

</>; }
