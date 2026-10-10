import React from 'react';

export default function Roadmap() {
  return (
    <section id="roadmap">
      <p className="section-eyebrow">
        <i className="ti ti-calendar-time">
        </i>
        {"GETTING STARTED "}
      </p>
      <h2>
        {"4週間ではじめる実践ロードマップ"}
      </h2>
      <div className="prose">
        <p>
          {" チーム全体でいきなり9つ全部を導入するのは難しいため、段階的に取り入れる例を示します。あくまで一例であり、チームの状況に合わせて調整してください。 "}
        </p>
      </div>
      <ol className="step-list">
        <li>
          <strong>
            {"1週目(プラクティス1・4)"}
          </strong>
          {" ― チケットに目的・理由・対象を書く運用を始め、週1回のレビュー会を設定する "}
        </li>
        <li>
          <strong>
            {"2週目(プラクティス2・3)"}
          </strong>
          {" ― 作業を小さく分割し、CIで自動ビルド・自動テストを毎コミットで走らせる "}
        </li>
        <li>
          <strong>
            {"3週目(プラクティス6・7)"}
          </strong>
          {" ― 新規コードに限りテストファーストで実装し、テスト名を振る舞いベースにする "}
        </li>
        <li>
          <strong>
            {"4週目(プラクティス5・8・9)"}
          </strong>
          {" ― CLEANの観点でコードレビューし、既存コードの一部に特性化テストを追加してから小さくリファクタリングする "}
        </li>
      </ol>
    </section>
  );
}
