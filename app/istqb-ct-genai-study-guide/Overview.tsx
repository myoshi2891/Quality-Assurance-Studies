import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_1 } from './diagrams';

export default function Overview() {
  return <>
    <h2 id="0-資格の概要">
      {"0. 資格の概要"}
    </h2>
    <p >
      {" CT-GenAI は ISTQB® が提供する "}
      <strong >
        {"Specialist Level"}
      </strong>
      {"（専門レベル）の資格で、テスター・テストアナリスト・テスト自動化エンジニア・テストマネージャー・UAT担当者・開発者など、ソフトウェアテストに生成AIを活用するすべての人を対象としています。 "}
    </p>
    <h3 id="01-試験概要">
      {"0.1 試験概要"}
    </h3>
    <div className="table-scroll">
      <table >
        <thead >
          <tr className="header row-header">
            <th >
              {"項目"}
            </th>
            <th >
              {"内容"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"出題数"}
            </td>
            <td >
              {"40問"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"配点"}
            </td>
            <td >
              {"46点"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"合格基準"}
            </td>
            <td >
              {"30点（約65%）"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"試験時間"}
            </td>
            <td >
              {"60分（非母語受験者は+25%＝75分）"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"前提資格"}
            </td>
            <td >
              {" ISTQB® Certified Tester Foundation Level（CTFL）の取得が必須 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"出題形式"}
            </td>
            <td >
              {" 多肢選択式（1つの正解を選ぶ問題と、複数の正解を選ぶ問題を含む）・シナリオベース問題（K1/K2/K3の認知レベルにマッピング） "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"次のステップ"}
            </td>
            <td >
              {" Core Advanced Level（Test Analyst、Technical Test Analyst、Test Manager、Test Engineering）、その後 Expert Level "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="02-ビジネスアウトカム合格者が到達すべき状態">
      {" 0.2 ビジネスアウトカム（合格者が到達すべき状態） "}
    </h3>
    <div className="table-scroll">
      <table >
        <thead >
          <tr className="header row-header">
            <th >
              {"ID"}
            </th>
            <th >
              {"内容"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"GenAI-BO1"}
            </td>
            <td >
              {"生成AIの基本概念・能力・限界を理解する"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"GenAI-BO2"}
            </td>
            <td >
              {" ソフトウェアテストのために大規模言語モデル（LLM）へプロンプトを与える実践スキルを身につける "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"GenAI-BO3"}
            </td>
            <td >
              {" ソフトウェアテストで生成AIを使う際のリスクと緩和策への洞察を得る "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"GenAI-BO4"}
            </td>
            <td >
              {" ソフトウェアテスト向け生成AIソリューションの応用への洞察を得る "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"GenAI-BO5"}
            </td>
            <td >
              {" 組織における生成AI戦略・ロードマップの策定と実装に効果的に貢献する "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="03-認知レベルk-レベル">
      {"0.3 認知レベル（K-レベル）"}
    </h3>
    <p >
      {" シラバスの内容は "}
      <strong >
        {"序章・ハンズオン目標・付録を除き"}
      </strong>
      {"、すべて試験範囲です。なお、参照されている標準・書籍・記事の内容は、シラバス本文での要約を超える部分は出題対象外です。学習目標（Learning Objective, LO）は次の3段階で示されます。 "}
    </p>
    <ul >
      <li >
        <strong >
          {"K1（記憶）"}
        </strong>
        {"：用語や事実を思い出せる"}
      </li>
      <li >
        <strong >
          {"K2（理解）"}
        </strong>
        {"：概念を説明・比較・要約できる"}
      </li>
      <li >
        <strong >
          {"K3（適用）"}
        </strong>
        {"：与えられたテストタスクに技法を適用できる"}
      </li>
    </ul>
    <div className="callout callout-practice">
      <div className="callout-head">
        <span className="callout-icon">
          {"💡"}
        </span>
        <span className="callout-title">
          {"ベストプラクティス"}
        </span>
      </div>
      <div className="callout-body">
        <ul >
          <li >
            {" 各章冒頭に列挙される「キーワード」は、学習目標に明記されていなくても K1 として暗記が必須です。見出し直下のキーワード一覧を軽視しないこと。 "}
          </li>
          <li >
            <strong >
              {"第2章（プロンプトエンジニアリング、365分）は学習時間が最も長い章"}
            </strong>
            {"のため優先的に学習してください。章ごとの出題数・配点は学習時間から推定せず、公式の試験構成で確認してください。 "}
          </li>
        </ul>
      </div>
    </div>
    <h3 id="04-章構成と学習時間">
      {"0.4 章構成と学習時間"}
    </h3>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-1">
        <Mermaid chart={DIAGRAM_1} />
      </div>
    </div>
    <p >
      {"合計学習時間は約13.6時間（815分）が推奨されています。"}
    </p>
    <p className="callout-source">
      {" 出典："}
      <a href="https://istqb.org/certifications/gen-ai/" target="_blank" rel="noopener noreferrer">
        {"ISTQB CT-GenAI 公式ページ"}
      </a>
      {"、"}
      <a href="https://isqi.org/media/b9/8c/34/1777291646/ISTQB-CT-GenAI%20-%20Syllabus%20v1.1.pdf" target="_blank" rel="noopener noreferrer">
        {"CT-GenAI Syllabus v1.1"}
      </a>
    </p>

  </>;
}
