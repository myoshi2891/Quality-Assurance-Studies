import React from 'react';

export default function Hero() {
  return (
    <div className="hero">
      <p className="hero-kicker">
        {"初学者向け・実践ガイド"}
      </p>
      <h1>
        {"レガシーコードからの脱却"}
        <br />
        {"― 9つのプラクティス実践ガイド"}
      </h1>
      <p>
        {" 『Beyond Legacy Code: Nine Practices to Extend the Life (and Value) of Your Software』(David Scott Bernstein 著)の構成と主張を、初学者向けにステップバイステップで整理し直した解説資料です。書籍本文の引用ではなく、公開されている書誌情報・目次・書評・著者自身の解説記事をもとに要点を独自にまとめています。 "}
      </p>
      <p className="hero-meta">
        {" 原著: Pragmatic Bookshelf, 2015 / 日本語版: オライリー・ジャパン, 2019(吉羽龍太郎・永瀬美穂・原田騎郎・有野雅士 訳) "}
      </p>
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-num">
            {"9"}
          </div>
          <div className="stat-label">
            {"プラクティス"}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-num">
            {"4"}
          </div>
          <div className="stat-label">
            {"目的グループ"}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-num">
            {"2015"}
          </div>
          <div className="stat-label">
            {"原著出版"}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-num">
            {"2019"}
          </div>
          <div className="stat-label">
            {"日本語版出版"}
          </div>
        </div>
      </div>
    </div>
  );
}
