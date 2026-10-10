import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_7 } from './diagrams';

export default function Chapter3() {
  return <>
    <h2 id="第3章-ソフトウェアテストにおける生成aiのリスク管理160分">
      {" 第3章 ソフトウェアテストにおける生成AIのリスク管理（160分） "}
    </h2>
    <p >
      <strong >
        {"キーワード"}
      </strong>
      {"：セキュリティ、脆弱性、データプライバシー "}
      <strong >
        {"キーワード（GenAI固有）"}
      </strong>
      {"：ハルシネーション、温度（temperature）、推論エラー、バイアス、コンテキスト操作 "}
    </p>
    <h3 id="31-ハルシネーション推論エラーバイアス">
      {" 3.1 ハルシネーション・推論エラー・バイアス "}
    </h3>
    <h4 id="311-定義k1">
      {"3.1.1 定義（K1）"}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="311-定義k1">
        <thead >
          <tr className="header row-header">
            <th >
              {"種類"}
            </th>
            <th >
              {"定義"}
            </th>
            <th >
              {"テストでの現れ方"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"ハルシネーション"}
            </td>
            <td >
              {"LLMが事実に反する、またはタスクと無関係な出力を生成する現象"}
            </td>
            <td >
              {" 架空・無関係なテストケースの生成、動作しないテストスクリプト、存在しない受け入れ基準の検証を提案 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"推論エラー"}
            </td>
            <td >
              {" 因果関係・条件論理・段階的問題解決などの論理構造をLLMが誤って解釈する現象。LLMは真の論理推論ではなくパターンマッチングに依存するため発生 "}
            </td>
            <td >
              {" テスト計画（工数見積り、テストケース優先順位付け）など論理推論を要するタスクで顕著 "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"バイアス"}
            </td>
            <td >
              {" 学習データに由来する偏り。特定の情報・アプローチ・前提を過度に優先する "}
            </td>
            <td >
              {" 英語データ中心の学習による非英語圏視点の過小評価、テストデータ生成や受け入れ基準の偏り "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p >
      {" LLMの非決定的な挙動（1.1.2参照）により、これらの欠陥は「一度直ったように見えても、別の会話で再発する」ことがある点に注意が必要です。 "}
    </p>
    <h4 id="312-検出方法k3">
      {"3.1.2 検出方法（K3）"}
    </h4>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-7">
        <Mermaid chart={DIAGRAM_7} />
      </div>
    </div>
    <p >
      {" 検出方法の実際の適用度合いは、そのテストタスクにおけるハルシネーション・推論エラー・バイアスの推定リスクレベルに応じて調整します。 "}
    </p>
    <h4 id="313-緩和技法k2">
      {"3.1.3 緩和技法（K2）"}
    </h4>
    <ul >
      <li >
        <strong >
          {"完全な文脈の提供"}
        </strong>
        {"：プロンプトに関連情報を漏れなく含める（2.1.1参照） "}
      </li>
      <li >
        <strong >
          {"プロンプトの分割"}
        </strong>
        {"：プロンプトチェイニングで複雑なプロンプトを管理可能な単位に分割し、各出力を段階的に検証する "}
      </li>
      <li >
        <strong >
          {"明確で解釈可能なデータ形式の使用"}
        </strong>
        {"：曖昧・解釈が難しい形式を避け、構造化された明快なフォーマットを用いる "}
      </li>
      <li >
        <strong >
          {"タスクに適したモデルの選定"}
        </strong>
        {"：そのタスク向けに特化して学習されたLLMを使用する（5.1.3参照） "}
      </li>
      <li >
        <strong >
          {"複数モデルでの結果比較"}
        </strong>
        {"：複数のLLMで同じプロンプトを評価し、出力誤りの検出と信頼できる結果の選定に役立てる "}
      </li>
    </ul>
    <p >
      {" さらに第4章で扱う "}
      <strong >
        {"Retrieval-Augmented Generation（RAG）"}
      </strong>
      {" と "}
      <strong >
        {"ファインチューニング"}
      </strong>
      {" は、LLM出力の質を改善する補完的技法として位置づけられています。 "}
    </p>
    <h4 id="314-非決定的挙動の緩和k1">
      {"3.1.4 非決定的挙動の緩和（K1）"}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="314-非決定的挙動の緩和k1">
        <thead >
          <tr className="header row-header">
            <th >
              {"手法"}
            </th>
            <th >
              {"内容"}
            </th>
            <th >
              {"トレードオフ"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"温度（temperature）パラメータの調整"}
            </td>
            <td >
              {" 推論時の温度を下げることで確率分布を狭め、ランダム性を低減し、より一貫した出力を得る "}
            </td>
            <td >
              {" 創造性・応答の多様性が低下し、出力が反復的・過度に決定論的になりうる "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"ランダムシードの設定"}
            </td>
            <td >
              {" 一部のLLM実装では乱数生成器のシード値を固定でき、同じ疑似ランダム系列を再現できる "}
            </td>
            <td >
              {"完全な再現性は保証されない"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
        <p >
          {" 完全な再現性は保証できないという前提に立ち、出力検証の一部を自動化して構造化・一貫した評価プロセスを組み込むことで、非決定性に起因するハルシネーション・推論エラーのリスクを実務的に低減する。 "}
        </p>
      </div>
    </div>
    <h3 id="32-データプライバシーとセキュリティリスク">
      {" 3.2 データプライバシーとセキュリティリスク "}
    </h3>
    <h4 id="321-主なリスクk2">
      {"3.2.1 主なリスク（K2）"}
    </h4>
    <ul >
      <li >
        <strong >
          {"意図しないデータ露出"}
        </strong>
        {"：モデルが機密情報を偶発的に開示する出力を生成 "}
      </li>
      <li >
        <strong >
          {"データ利用の管理欠如"}
        </strong>
        {"：明示的な同意・管理なくツールが機微データを保存・処理する "}
      </li>
      <li >
        <strong >
          {"コンプライアンスリスク"}
        </strong>
        {"：GDPR（EU一般データ保護規則、Regulation (EU) 2016/679）などのデータ保護規制への非準拠が法的紛争を招く "}
      </li>
    </ul>
    <p >
      {" 加えて、LLM搭載テストインフラ自体がデータ侵害・不正アクセスなどの攻撃対象になりうること、悪意ある入力データによってLLMの精度・セキュリティが損なわれうることにも留意が必要です。 "}
    </p>
    <h4 id="322-攻撃ベクトルの例k2">
      {"3.2.2 攻撃ベクトルの例（K2）"}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="322-攻撃ベクトルの例k2">
        <thead >
          <tr className="header row-header">
            <th >
              {"攻撃ベクトル"}
            </th>
            <th >
              {"説明"}
            </th>
            <th >
              {"具体例"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"コンテキスト操作"}
            </td>
            <td >
              {"機密の学習データを引き出すよう設計されたリクエストの送信"}
            </td>
            <td >
              {" 長大なプロンプトでコンテキストウィンドウを超過させ、モデルに学習データの断片を漏出させる "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"リクエスト操作"}
            </td>
            <td >
              {"AIの出力を混乱させるデータの投入"}
            </td>
            <td >
              {" 画像でAIを別の文脈に誘導し、受け入れ基準等でハルシネーションを誘発 "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"データポイズニング"}
            </td>
            <td >
              {"学習データの改ざん"}
            </td>
            <td >
              {"AI生成テストレポートの評価に偽の評価を与える"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"悪意あるコード生成"}
            </td>
            <td >
              {" 使用中にバックドア（外部コマンド呼び出し等）を生成するようLLMを操作 "}
            </td>
            <td >
              {"特定の悪意あるIPと通信するコードの生成"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 id="323-緩和戦略k2">
      {"3.2.3 緩和戦略（K2）"}
    </h4>
    <ul >
      <li >
        <strong >
          {"データ最小化"}
        </strong>
        {"：法的に許容される範囲のみ機微データを処理し、非機微データの利用に留める "}
      </li>
      <li >
        <strong >
          {"匿名化"}
        </strong>
        {"：追加情報を用いても特定の個人を識別できない状態へデータを加工する "}
      </li>
      <li >
        <strong >
          {"仮名化"}
        </strong>
        {"：追加情報（対応表など）と照合しない限り特定の個人を識別できない状態へデータを加工する。追加情報があれば再識別できるため、仮名化しただけでは個人データに該当しなくなるわけではない（引き続き個人データとして保護が必要） "}
      </li>
      <li >
        <strong >
          {"安全なデータ保存・伝送"}
        </strong>
        {"：強固な暗号化とアクセス制御を実装 "}
      </li>
      <li >
        <strong >
          {"リソーストレーニング"}
        </strong>
        {"：責任あるGenAI利用のための明確な教育プログラムとポリシーを策定 "}
      </li>
      <li >
        <strong >
          {"生成出力の体系的レビュー"}
        </strong>
        {"：人手による評価で品質・正確性を担保 "}
      </li>
      <li >
        <strong >
          {"他モデルとの比較評価"}
        </strong>
        {"：複数LLMで出力を比較検証"}
      </li>
      <li >
        <strong >
          {"セキュアな運用環境の選択"}
        </strong>
        {"：機密性の要求水準に応じ、商用の安全なLLMサービス、セキュアなクラウド、または自組織インフラへのLLM設置を選択 "}
      </li>
      <li >
        <strong >
          {"定期的なセキュリティ監査・脆弱性評価"}
        </strong>
        {"の実施"}
      </li>
      <li >
        <strong >
          {"最新のセキュリティベストプラクティスへの追随"}
        </strong>
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
        <p >
          {" これらの戦略は互いに補完的であり、単独では不十分。組織内にセキュリティエンジニア・法務・CTO・CISOが在籍する場合は、GenAI導入の初期段階から関与させることが強く推奨される。 "}
        </p>
      </div>
    </div>
    <h3 id="33-エネルギー消費と環境影響">
      {"3.3 エネルギー消費と環境影響"}
    </h3>
    <p >
      {" 生成AIの学習・推論には大量の専用計算資源が必要であり、Web経由の利用増加はデバイス・ネットワーク・データセンターの負荷、ひいてはエネルギー消費とCO₂排出量の増加につながります。タスクの複雑性・利用モデルによって消費エネルギーは変動し、正確な環境影響データの取得は依然として困難ですが、単発の利用では僅かでも、世界規模での累積利用は無視できない環境負荷となります。 "}
    </p>
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
        <p >
          {" 不要なモデル呼び出しを制限する（例：同一タスクを何度も再実行しない、キャッシュを活用する）ことが、環境影響を抑える現実的な第一歩となる。 "}
        </p>
      </div>
    </div>
    <h3 id="34-ai規制標準ベストプラクティスフレームワークk1">
      {" 3.4 AI規制・標準・ベストプラクティスフレームワーク（K1） "}
    </h3>
    <div className="table-scroll">
      <table aria-labelledby="34-ai規制標準ベストプラクティスフレームワークk1">
        <thead >
          <tr className="header row-header">
            <th >
              {"名称／種別"}
            </th>
            <th >
              {"概要"}
            </th>
            <th >
              {"ソフトウェアテストへの適用"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"ISO/IEC 42001:2023（標準）"}
            </td>
            <td >
              {" 組織内のAIシステム管理システム（AIMS）に関する要求事項を規定 "}
            </td>
            <td >
              {"GenAIテストが推奨プラクティスに準拠し、一貫性・信頼性を促進"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"ISO/IEC 23053:2022（標準）"}
            </td>
            <td >
              {" 機械学習を用いるAIシステムのライフサイクルプロセスの枠組み。安全性・透明性を重視 "}
            </td>
            <td >
              {"GenAIテストにおけるデータ品質・透明性・安全性の枠組みを提供"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"EU AI Act（規制）"}
            </td>
            <td >
              {" AIリスクに対処する法的枠組みを確立し、リスクレベルに応じてアプリケーションを分類 "}
            </td>
            <td >
              {" テストで使用するGenAIに課される透明性・説明責任・バイアス緩和などの義務は、システムの分類（リスク区分）と、組織の役割（提供者／導入者）に応じて異なる "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {" NIST AI Risk Management Framework 1.0（フレームワーク・米国） "}
            </td>
            <td >
              {"公平性・透明性・セキュリティに焦点を当てたAIリスク管理指針"}
            </td>
            <td >
              {"GenAIの公平性を支え、偏ったテスト結果のリスクを緩和"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
        <p >
          {" 規制・標準は継続的に更新されるため、テスト組織は定期的な情報収集の仕組み（法務・コンプライアンス部門との連携、業界動向のウォッチ）を制度化しておく。 "}
        </p>
      </div>
    </div>
    <p className="callout-source">
      {" 出典："}
      <a href="https://isqi.org/media/b9/8c/34/1777291646/ISTQB-CT-GenAI%20-%20Syllabus%20v1.1.pdf" target="_blank" rel="noopener noreferrer">
        {"CT-GenAI Syllabus v1.1 第3章"}
      </a>
      {"、"}
      <a href="https://www.iso.org/standard/81230.html" target="_blank" rel="noopener noreferrer">
        {"ISO/IEC 42001:2023"}
      </a>
      {"、"}
      <a href="https://www.iso.org/standard/74438.html" target="_blank" rel="noopener noreferrer">
        {"ISO/IEC 23053:2022"}
      </a>
      {"、"}
      <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer">
        {"EU AI Act（Regulation (EU) 2024/1689）"}
      </a>
      {"、"}
      <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer">
        {"NIST AI Risk Management Framework"}
      </a>
      {"、"}
      <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noopener noreferrer">
        {"GDPR（Regulation (EU) 2016/679）"}
      </a>
    </p>

  </>;
}
