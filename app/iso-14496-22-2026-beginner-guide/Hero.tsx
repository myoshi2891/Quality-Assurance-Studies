import React from 'react';

export default function Hero() {
  return (
    <header className="hero">
      <span className="eyebrow">ISO規格ガイドシリーズ ・ 初学者向け</span>
      <h1 className="hero-title">ISO/IEC 14496-22:2026（Open Font Format）</h1>
      <p className="hero-sub">初学者向けステップバイステップ解説</p>
      <div className="hero-meta">
        <div>
          <div className="k">対象規格</div>
          <div className="v">
            ISO/IEC 14496-22:2026 Information technology — Coding of audio-visual objects — Part 22: Open font format（第5版）
          </div>
        </div>
        <div>
          <div className="k">情報の基準日</div>
          <div className="v">
            2026年10月13日（この日までに公開されていた情報を調査）
          </div>
        </div>
        <div>
          <div className="k">想定読者</div>
          <div className="v">
            フォントや文字表示の内部を初めて学ぶソフトウェアエンジニア・QAエンジニア
          </div>
        </div>
      </div>
    </header>
  );
}

