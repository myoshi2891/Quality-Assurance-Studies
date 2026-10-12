import React from 'react';

export default function Hero() {
  return (
    <header className="hero">
      <span className="hero-eyebrow">
        <i className="ti ti-certificate"></i>ISTQB® CTAL-TAE v2.0
      </span>
      <h1>
        第1章「テスト自動化の導入と目的」
        <br />
        初学者向け解説ガイド
      </h1>
      <p className="hero-lead">
        <span className="hero-lead-en">
          Introduction and Objectives for Test Automation ―
        </span>{' '}
        <span className="hero-lead-ja">
          なぜテスト自動化を行うのか、SDLCの中でどう位置づけられるのかという、後続の全章の土台となる考え方をステップバイステップで整理します。
        </span>
      </p>
      <div className="hero-badges">
        <span className="hero-badge">
          <i className="ti ti-clock-hour-3"></i>指導時間 45分
        </span>
        <span className="hero-badge">
          <i className="ti ti-stack-2"></i>認知レベル K2
        </span>
        <span className="hero-badge">
          <i className="ti ti-list-numbers"></i>全8章中の第1章
        </span>
        <span className="hero-badge">
          <i className="ti ti-target"></i>学習目標 3項目
        </span>
      </div>
    </header>
  );
}
