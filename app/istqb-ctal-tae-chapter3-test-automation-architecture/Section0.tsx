import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_OVERVIEW } from './diagrams';

export default function Section0() {
  return (
    <section>
      <h2 id="0-この章の全体像">0. この章の全体像</h2>
      <p>
        第3章は「テスト自動化ソリューション（TAS: Test Automation
        Solution）をどう設計するか」を扱う、CTAL-TAEのコア中のコアです。以下の5つの学習目標（Learning
        Objectives）から構成されています。
      </p>
      <div className="table-scroll">
        <table className="data-table">
          <caption>第3章の学習目標（LO）一覧</caption>
          <thead>
            <tr className="header">
              <th>LO番号</th>
              <th>認知レベル</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd">
              <td>TAE-3.1.1</td>
              <td>K2（理解）</td>
              <td>テスト自動化アーキテクチャにおける主要な機能を説明できる</td>
            </tr>
            <tr className="even">
              <td>TAE-3.1.2</td>
              <td>K2（理解）</td>
              <td>テスト自動化ソリューションの設計方法を説明できる</td>
            </tr>
            <tr className="odd">
              <td>TAE-3.1.3</td>
              <td>K3（適用）</td>
              <td>テスト自動化フレームワークのレイヤー化を適用できる</td>
            </tr>
            <tr className="even">
              <td>TAE-3.1.4</td>
              <td>K3（適用）</td>
              <td>テストケース自動化のさまざまなアプローチを適用できる</td>
            </tr>
            <tr className="odd">
              <td>TAE-3.1.5</td>
              <td>K3（適用）</td>
              <td>テスト自動化における設計原則・デザインパターンを適用できる</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>必須キーワード（試験で暗記必須）</strong>： behavior-driven development（BDD）,
        capture/playback, data-driven testing（DDT）, generic test automation
        architecture（gTAA）, keyword-driven testing（KDT）, linear scripting, model-based
        testing（MBT）, structured scripting, test adaptation layer, test automation
        framework（TAF）, test automation solution（TAS）, test harness, test script, testware,
        test step, test-driven development（TDD）
      </p>
      <p>この章の骨格を図にすると、以下のような流れで理解が積み上がっていきます。</p>
      <div className="mermaid-container">
        <Mermaid chart={DIAGRAM_OVERVIEW} />
      </div>
      <hr />
    </section>
  );
}
