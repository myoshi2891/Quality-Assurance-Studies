import React from 'react';

export default function Hero() { return <>
<header className="hero">

<div className="eyebrow">
{"ISO規格ガイドシリーズ ・ 初学者向け"}
</div>

<h1 className="hero-title">
{"ISO/IEC 19770-5:2015 初学者向け解説ガイド"}
</h1>

<p className="hero-sub">
{"ITアセットマネジメント（ITAM）の「共通言語」を学ぶ"}
</p>

<div className="hero-meta">

<div className="m">

<span className="k">
{"情報の基準日"}
</span>
<span className="v">
{"2026年10月18日現在"}
</span>

</div>

<div className="m">

<span className="k">
{"対象読者"}
</span>
<span className="v">
{"ITAM／SAMを初めて学ぶ方、QA・開発・情シス・監査の担当者"}
</span>

</div>

<div className="m">

<span className="k">
{"現行版 / 後継"}
</span>
<span className="v">
{"第2版（2015）有効 ／ 第3版（Vocabulary）発行準備中"}
</span>

</div>

</div>

<div className="callout callout-warn hero-note">

<div className="callout-icon">
{"⚠️"}
</div>

<div className="callout-body">

<p>
{"\n                                本ガイドは規格本文の"}
<strong>
{"転載ではなく、公開情報に基づく解説"}
</strong>
{"です。正式な定義・条文は、無料で入手できる原文で必ず確認してください（入手先は「参考ソース一覧」を参照）。\n                            "}
</p>

</div>

</div>

</header>
</>; }
