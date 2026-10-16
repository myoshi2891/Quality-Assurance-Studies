import React from 'react';

export default function Section1() {
  return (
    <section className="section" id="s1">
      <div className="section-head">
        <div className="section-icon">
          <i className="ti ti-key"></i>
        </div>
        <div>
          <span className="eyebrow">キーワードと学習目標</span>
          <h2>まず押さえるべき前提知識</h2>
        </div>
      </div>

      <h3 id="s1-keywords-heading">
        <i className="ti ti-tag"></i>キーワード
      </h3>
      <p className="section-note">
        シラバスの見出し直下に記載されているキーワードは、学習目標に明示されていなくても暗記が必須とされています。
      </p>
      <div className="table-wrap">
        <table aria-labelledby="s1-keywords-heading">
          <thead>
            <tr>
              <th>キーワード（英語）</th>
              <th>日本語訳</th>
              <th>本ガイドでの主な解説箇所</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>system under test（SUT）</td>
              <td>テスト対象システム</td>
              <td>1.1、1.2.2</td>
            </tr>
            <tr>
              <td>test automation</td>
              <td>テスト自動化</td>
              <td>1.1 全体</td>
            </tr>
            <tr>
              <td>test automation engineer（TAE）</td>
              <td>テスト自動化エンジニア</td>
              <td>1.1、1.2.2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="s1-lo-heading">
        <i className="ti ti-target"></i>学習目標（Learning Objectives）一覧
      </h3>
      <div className="table-wrap">
        <table aria-labelledby="s1-lo-heading">
          <thead>
            <tr>
              <th>番号</th>
              <th>学習目標</th>
              <th>認知レベル</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TAE-1.1.1</td>
              <td>テスト自動化のメリット・デメリットを説明できる</td>
              <td>
                <span className="tag cog">K2</span>
              </td>
            </tr>
            <tr>
              <td>TAE-1.2.1</td>
              <td>
                異なるソフトウェア開発ライフサイクルモデルにおいて、テスト自動化がどのように適用されるかを説明できる
              </td>
              <td>
                <span className="tag cog">K2</span>
              </td>
            </tr>
            <tr>
              <td>TAE-1.2.2</td>
              <td>与えられたテスト対象システム（SUT）に適したテスト自動化ツールを選定できる</td>
              <td>
                <span className="tag cog">K2</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="practice-card">
        <div className="practice-card-head">
          <i className="ti ti-bulb"></i>
          <span>ベストプラクティス：学習の進め方</span>
        </div>
        <ul className="practice-list">
          <li>
            <span className="p-num">1</span>
            <div className="p-body">
              <strong>「暗記」ではなく「説明できる」を目指す。</strong>
              K2レベルの章は、人に説明できるレベルまで理解することが得点につながります。
            </div>
          </li>
          <li>
            <span className="p-num">2</span>
            <div className="p-body">
              <strong>学習目標の動詞に着目する。</strong>
              学習目標の動詞（Explain／Select）は、求められる認知能力を示します。「Explain」は概念（メリット・デメリットやSDLCごとの適用など）を説明する能力、「Select」はSUTの特徴を踏まえて適したテスト自動化ツールを選択する能力を指します。
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
