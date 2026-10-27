import React from 'react';

export default function Hero() { return <>
<header className="hero">
<span className="eyebrow">{"ISO規格ガイドシリーズ ／ 初学者向け"}</span>

<h1 className="hero-title">{"ISO/IEC\n14496-22:2026（Open Font Format）初学者向け解説ガイド"}</h1>

<div className="meta-row"><div className="meta-item"><span className="meta-label">{"対象読者"}</span>
<span className="meta-value">{"フォント・文字表示・テキストレンダリングの規格に初めて触れるソフトウェアエンジニア／QAエンジニア"}</span></div>
<div className="meta-item"><span className="meta-label">{"調査基準日"}</span>
<span className="meta-value">{"2026年10月8日までに公開されている情報"}</span></div>
<div className="meta-item"><span className="meta-label">{"ゴール"}</span>
<span className="meta-value">{"「OFFとは何か」「OpenTypeとの関係」「2026年の第5版で何が変わったか」を、図と表で順を追って理解する"}</span></div></div>
</header>
</>; }
