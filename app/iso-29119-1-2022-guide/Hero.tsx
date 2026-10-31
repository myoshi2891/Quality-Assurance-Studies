import React from 'react';

export default function Hero() {
  return (
    <header className="hero">
      <span className="eyebrow">ソフトウェアテスト規格ガイド</span>
      <h1>ISO/IEC/IEEE 29119-1:2022 初学者向け解説ガイド</h1>
      <p className="lead">
        ソフトウェアテストの「共通言語」を学ぶ：一般概念（General
        concepts）をステップバイステップで理解する
      </p>
      <dl className="hero-meta">
        <div>
          <dt>規格番号</dt>
          <dd>ISO/IEC/IEEE 29119-1:2022</dd>
        </div>
        <div>
          <dt>発行</dt>
          <dd>2022年1月（第2版）</dd>
        </div>
        <div>
          <dt>適用範囲</dt>
          <dd>情報提供（informative）</dd>
        </div>
        <div>
          <dt>対象読者</dt>
          <dd>テスト・QA・開発の初学者〜中級者</dd>
        </div>
        <div>
          <dt>基準日</dt>
          <dd>2026年10月21日</dd>
        </div>
      </dl>
    </header>
  );
}
