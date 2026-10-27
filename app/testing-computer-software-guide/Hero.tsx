import React from 'react';
export default function Hero() {return (
<div className="hero">
    <span className="eyebrow">
        <i className="ti ti-sparkles">

        </i>
        {"BEGINNER GUIDE"}
    </span>
    <h1>
        {"Testing Computer Software 入門ガイド"}
    </h1>
    <p className="lead">
        {" 初学者のためのソフトウェアテスト・ベストプラクティス。Cem Kaner・Jack L. Falk・Hung Quoc Nguyen による古典的名著の構成に着想を得つつ、Martin Fowler・Kent C. Dodds・James Bach・Michael Bolton・Simon Tatham ら国際的に著名な開発者/テストエンジニアの発信内容を踏まえて再構成しました。図解はすべて Mermaid、表はすべて構造化データとして作成しており、ASCIIアートは使用していません。 "}
    </p>
    <div className="hero-meta">
        <span className="chip">
            <i className="ti ti-calendar">

            </i>
            {"2026年8月31日時点の情報"}
        </span>
        <span className="chip">
            <i className="ti ti-list-details">

            </i>
            {"全18セクション"}
        </span>
        <span className="chip">
            <i className="ti ti-chart-dots">

            </i>
            {"Mermaid図解 9点"}
        </span>
        <span className="chip">
            <i className="ti ti-table">

            </i>
            {"比較表 10点"}
        </span>
    </div>
</div>
);}
