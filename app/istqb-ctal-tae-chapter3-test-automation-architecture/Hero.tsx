import React from 'react';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-eyebrow">📘 CTAL-TAE v2.0 ・ 第3章</div>
      <h1 className="hero-title">
        <span className="accent">Test Automation Architecture</span>
        <br />
        （テスト自動化アーキテクチャ）徹底解説
      </h1>
      <p className="hero-subtitle">
        gTAA・TAFレイヤー化・7つの自動化アプローチ・設計原則とデザインパターンまで、テスト自動化アーキテクチャの中核を初学者向けにステップバイステップで解説します。
      </p>
      <div className="hero-meta">
        <div className="hero-meta-item">
          <div className="hero-meta-label">対象試験</div>
          <div className="hero-meta-value">
            ISTQB® Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) v2.0
          </div>
        </div>
        <div className="hero-meta-item">
          <div className="hero-meta-label">配分時間</div>
          <div className="hero-meta-value">210分（学習目標レベル：K3＝適用）</div>
        </div>
        <div className="hero-meta-item">
          <div className="hero-meta-label">試験配点</div>
          <div className="hero-meta-value">10点（全66点中）</div>
        </div>
      </div>
    </div>
  );
}
