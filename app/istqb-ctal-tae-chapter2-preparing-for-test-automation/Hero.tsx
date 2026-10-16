import React from 'react';

export default function Hero() {
  return (
    <header className="hero">
      <span className="hero-eyebrow">ISTQB® CTAL-TAE v2.0 ／ Chapter 2</span>
      <h1 className="hero-title">
        Preparing for Test Automation
        <br />
        テスト自動化の準備
      </h1>
      <p className="hero-subtitle">
        本ガイドは公式シラバスの内容に基づいて作成した学習用の要約・解説であり、公式教材の代替ではありません。
      </p>
      <div className="hero-meta">
        <div className="hero-meta-item">
          <span className="hero-meta-label">対象試験</span>
          <span className="hero-meta-value">CTAL Test Automation Engineering v2.0</span>
        </div>
        <div className="hero-meta-item">
          <span className="hero-meta-label">本章の指導時間</span>
          <span className="hero-meta-value">180分</span>
        </div>
        <div className="hero-meta-item">
          <span className="hero-meta-label">最高認知レベル</span>
          <span className="hero-meta-value">K4（分析）</span>
        </div>
      </div>
    </header>
  );
}
