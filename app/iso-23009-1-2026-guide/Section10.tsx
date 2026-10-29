import React from 'react';
export default function Section10() { return <>
<h2 id="step-9版の歴史第1版第6版">{"Step 9：版の歴史（第1版〜第6版）"}</h2>

<div aria-label="表：Step 9：版の歴史（第1版〜第6版）（1）" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"版"}</th><th>{"年"}</th><th>{"補足"}</th><th>{"根拠"}</th></tr></thead><tbody><tr className="odd"><td>{"第1版"}</td><td>{"2012"}</td><td>{"MPEG が 3GPP と協力して初版を策定。現在は Withdrawn（廃止）"}</td><td>{"ISO、Bitmovin"}</td></tr><tr className="even"><td>{"第2版"}</td><td>{"2014"}</td><td>{"2014年5月と引用されている"}</td><td>{"特許公報の引用"}</td></tr><tr className="odd"><td>{"第3版"}</td><td>{"2019（8月）"}</td><td>{"2019年8月発行。同年12月の第4版発行に伴い廃止"}</td><td>{"ISO（SCC 規格データベース）"}</td></tr><tr className="even"><td>{"第4版"}</td><td>{"2019（12月）"}</td><td>{"CSA 規格の注記に「ISO/IEC 23009-1:2019, fourth edition,\n2019-12」とある"}</td><td>{"CSA/ANSI"}</td></tr><tr className="odd"><td>{"第5版"}</td><td>{"2022"}</td><td>{"第4版への Amendment（Preroll\n等）を統合した版。2023年時点で最新版"}</td><td>{"Timmerer 氏"}</td></tr><tr className="even"><td><strong>{"第6版"}</strong></td><td><strong>{"2026（7月）"}</strong></td><td><strong>{"本ガイドの対象。375ページ"}</strong></td><td>{"ISO"}</td></tr></tbody></table></div>

<p><strong>{"【根拠あり】"}</strong>{" 第5版（ISO/IEC\n23009-1:2022）が最新であった 2023年9月時点で、Timmerer\n氏は次の3つのアメンドメントが進行中であると報告しています。"}</p>

<div aria-label="表：Step 9：版の歴史（第1版〜第6版）（2）" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"Amendment"}</th><th>{"内容"}</th></tr></thead><tbody><tr className="odd"><td>{"AMD 1"}</td><td>{"Preroll、非線形再生、その他の拡張"}</td></tr><tr className="even"><td>{"AMD 2"}</td><td>{"EDRAP（Extended Dependent Random Access\nPoint）ストリーミングなど"}</td></tr><tr className="odd"><td>{"AMD 3"}</td><td>{"ランダムアクセスと切替のための Segment sequences（ライブの tune-in\n時間短縮が狙い）"}</td></tr></tbody></table></div>

<p>{"また 2024年1月時点で、第6版は\n2024年中の予定とされ、すべてのアメンドメントを含むとは限らない旨も述べられていました（実際の発行は\n2026年7月）。"}</p>

<h3 id="第6版に至るまでの流れmpeg-会合ベース">{"第6版に至るまでの流れ（MPEG\n会合ベース）"}</h3>

<div aria-label="表：第6版に至るまでの流れ（MPEG 会合ベース）" className="table-scroll" role="region" tabIndex={0}><table><thead><tr className="header"><th>{"時期"}</th><th>{"MPEG 会合"}</th><th>{"出来事"}</th></tr></thead><tbody><tr className="odd"><td>{"2023年7〜8月"}</td><td>{"第143回"}</td><td>{"第6版のドラフトテキスト作成が進行"}</td></tr><tr className="even"><td>{"2024年1月"}</td><td>{"第145回"}</td><td>{"CMCD の "}<code>{"sid"}</code>{"/"}<code>{"cid"}</code>{" を MPD URL\n経由で渡せる、SegmentTimeline\nでのセグメント長パターン、バックグラウンド動作モードなどを採択"}</td></tr><tr className="odd"><td>{"2024年5月"}</td><td>{"第146回"}</td><td>{"DIS 段階のテキストの改善案"}</td></tr><tr className="even"><td>{"2025年1月"}</td><td>{"第148〜149回"}</td><td>{"第6版が "}<strong>{"FDIS（最終国際規格案）"}</strong>{" に昇格"}</td></tr><tr className="odd"><td>{"2025年7月〜2026年5月"}</td><td>{"第151〜154回"}</td><td>{"第6版に対する AMD 1（メディア認証、CMCD\n拡張など）の作業文書が継続"}</td></tr><tr className="even"><td>{"2026年7月"}</td><td>{"—"}</td><td>{"ISO が "}<strong>{"第6版を発行"}</strong>{"（375ページ）"}</td></tr></tbody></table></div>

</>; }
