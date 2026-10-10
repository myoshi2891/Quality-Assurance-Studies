import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_12 } from './diagrams';

export default function Chapter5() {
  return <>
    <h2 id="第5章-テスト組織における生成aiの導入と統合80分">
      {" 第5章 テスト組織における生成AIの導入と統合（80分） "}
    </h2>
    <p >
      <strong >
        {"キーワード"}
      </strong>
      {"：なし（本章の一般キーワードはシラバス上明記されていません） "}
    </p>
    <p >
      <strong >
        {"GenAI固有キーワード"}
      </strong>
      {"：Shadow AI"}
    </p>
    <h3 id="51-生成ai導入のロードマップ">
      {"5.1 生成AI導入のロードマップ"}
    </h3>
    <h4 id="511-shadow-aiのリスクk1">
      {"5.1.1 Shadow AIのリスク（K1）"}
    </h4>
    <p >
      <strong >
        {"Shadow AI"}
      </strong>
      {" とは、組織内で正式承認を得ていないAIツールが利用される状態を指します。セキュリティ・コンプライアンス・データプライバシーに関する重大なリスクを伴います。 "}
    </p>
    <div className="table-scroll">
      <table aria-labelledby="511-shadow-aiのリスクk1">
        <thead >
          <tr className="header row-header">
            <th >
              {"リスク領域"}
            </th>
            <th >
              {"内容"}
            </th>
            <th >
              {"例"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"情報セキュリティ・データプライバシーの弱点"}
            </td>
            <td >
              {" 個人利用のAIツールは機微データ保護に必要な堅牢なセキュリティ対策を欠くことが多く、データ漏えいにつながりうる "}
            </td>
            <td >
              {" テスターが未承認のAIチャットボットに顧客情報を含むテストデータを入力し、顧客データ露出のリスクが生じる "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"コンプライアンス・規制上の問題"}
            </td>
            <td >
              {" コンプライアンス検証を経ていないAIツールの利用が業界標準・規制への違反を招く "}
            </td>
            <td >
              {" GDPR未対応のAIツールを金融アプリのテストに使用し、規制義務に違反する "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"知的財産の不明確さ"}
            </td>
            <td >
              {" ライセンス条件が不明確なAIツールが知的財産紛争のリスクを生む "}
            </td>
            <td >
              {" 生成AIが著作権のある学習データを再利用したテストスクリプトを生成し、ライセンス問題を引き起こす "}
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
          {" Shadow AIを「取り締まる」だけでなく、承認済みツールへのアクセスを容易にし、明確な利用ガイドラインを周知することで、テスターが未承認ツールに頼る動機自体を減らす。 "}
        </p>
      </div>
    </div>
    <h4 id="512-生成ai戦略の主要側面k2">
      {"5.1.2 生成AI戦略の主要側面（K2）"}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="512-生成ai戦略の主要側面k2">
        <thead >
          <tr className="header row-header">
            <th >
              {"側面"}
            </th>
            <th >
              {"内容"}
            </th>
            <th >
              {"例"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"測定可能なテスト目標の設定"}
            </td>
            <td >
              {" GenAIで達成したいことをSMART（具体的・測定可能・達成可能・関連性・期限付き）な目標として定義 "}
            </td>
            <td >
              {"回帰テスト時間を50%削減する"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"テスト目標とインフラ互換性に合ったLLM選定"}
            </td>
            <td >
              {" 対象テストタスクに適し、既存インフラとシームレスに統合できるLLMを選ぶ "}
            </td>
            <td >
              {"—"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"高品質かつ安全でサニタイズされた入力データの確保"}
            </td>
            <td >
              {"入力データが正確・完全・機微情報を含まないことを保証する"}
            </td>
            <td >
              {"—"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"技術的利用法・倫理基準に関する教育の提供"}
            </td>
            <td >
              {" チームがGenAIを効果的かつ倫理的に使うための知識・スキルを身につける "}
            </td>
            <td >
              {"—"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"生成AI出力品質の評価指標の確立"}
            </td>
            <td >
              {"正確性・関連性など出力品質を測る指標を定義（2.3.1参照）"}
            </td>
            <td >
              {"正確性、関連性"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {" データ利用・透明性・出力レビューに関するプロセスガイドラインの策定 "}
            </td>
            <td >
              {" データ利用、透明性、生成出力のレビューに関する明確な指針を確立 "}
            </td>
            <td >
              {"—"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 id="513-テストタスク向けllmslm選定基準k2">
      {" 5.1.3 テストタスク向けLLM/SLM選定基準（K2） "}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="513-テストタスク向けllmslm選定基準k2">
        <thead >
          <tr className="header row-header">
            <th >
              {"基準"}
            </th>
            <th >
              {"内容"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"モデル性能"}
            </td>
            <td >
              {"標準ベンチマークを用いて対象テストタスクにおける性能を評価"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"ファインチューニング能力"}
            </td>
            <td >
              {"ドメイン固有データでのファインチューニングのしやすさを評価"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"継続コスト"}
            </td>
            <td >
              {"ライセンス費用・APIトークン利用に伴う継続的コストを考慮"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"ドキュメント・コミュニティサポートの充実度"}
            </td>
            <td >
              {"十分なドキュメントとコミュニティサポートが存在するか確認"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p >
      {" 例：あるチームがGPT-4・Claude・オープンソースのLLaMA-3をプロンプトによるテスト生成タスクで比較し、予算と結果品質に基づいて最適なモデルを選定する。 "}
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
          {" 入出力のトークン使用量とタスク実行頻度をベンダー料金と掛け合わせ、継続コストを事前に見積もるハンズオン演習を選定プロセスに組み込むと、導入後の想定外のコスト増を防げる。 "}
        </p>
      </div>
    </div>
    <h4 id="514-生成ai導入のフェーズk1">
      {"5.1.4 生成AI導入のフェーズ（K1）"}
    </h4>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-12">
        <Mermaid chart={DIAGRAM_12} />
      </div>
    </div>
    <div className="table-scroll">
      <table aria-labelledby="514-生成ai導入のフェーズk1">
        <thead >
          <tr className="header row-header">
            <th >
              {"フェーズ"}
            </th>
            <th >
              {"内容"}
            </th>
            <th >
              {"例"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"Discovery（発見）"}
            </td>
            <td >
              {" 認知向上・ツールへのアクセス提供・試行的ユースケースの探索に注力 "}
            </td>
            <td >
              {"受け入れ基準生成のサンプルプロンプトを実行してみる"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"Initiation and Usage Definition（開始と利用定義）"}
            </td>
            <td >
              {" 具体的なユースケースの特定、テストインフラの評価、目標の整合 "}
            </td>
            <td >
              {"テスト自動化と欠陥トリアージをパイロット領域として選定"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"Utilization and Iteration（活用と反復）"}
            </td>
            <td >
              {"既存プロセスへのGenAI統合、メトリクスの監視、実装のスケール"}
            </td>
            <td >
              {"CI/CDパイプラインへGenAIを組み込みダッシュボードを整備"}
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
          {" 異なるユースケースはこれらのフェーズを独立して進行しうる点に注意する。あるユースケースがUtilization and Iterationに達していても、別のユースケースはまだDiscoveryかもしれない。また、雇用不安などチームの懸念には早期から向き合い、士気を維持することが導入の成否を左右する。 "}
        </p>
      </div>
    </div>
    <h3 id="52-生成ai導入における変更管理">
      {"5.2 生成AI導入における変更管理"}
    </h3>
    <h4 id="521-必要なスキルと知識k2">
      {"5.2.1 必要なスキルと知識（K2）"}
    </h4>
    <p >
      {" テスターが生成AIをテストプロセスで効果的に活用するために必要とされる主なスキル領域： "}
    </p>
    <ul >
      <li >
        <strong >
          {"プロンプトエンジニアリングの実践力"}
        </strong>
        {"：第2章で扱う6要素構造とコア技法を実務で使いこなす力 "}
      </li>
      <li >
        <strong >
          {"出力の批判的評価力"}
        </strong>
        {"：生成結果を鵜呑みにせず、ハルシネーション・推論エラー・バイアスを見抜き検証する力（第3章） "}
      </li>
      <li >
        <strong >
          {"AI／データリテラシー"}
        </strong>
        {"：LLMの仕組み・限界・非決定性についての基礎理解 "}
      </li>
      <li >
        <strong >
          {"テストドメインの専門知識"}
        </strong>
        {"：GenAIの出力がテスト目的・品質基準に合致しているかを判断できるドメイン知識 "}
      </li>
      <li >
        <strong >
          {"データプライバシー・セキュリティ意識"}
        </strong>
        {"：機微データの扱いに関するリスク認識（3.2参照） "}
      </li>
    </ul>
    <h4 id="522-テストチームにおける生成ai能力の構築k1">
      {" 5.2.2 テストチームにおける生成AI能力の構築（K1） "}
    </h4>
    <ul >
      <li >
        <strong >
          {"技術的利用法・倫理基準に関する教育プログラム"}
        </strong>
        {"の整備（5.1.2の戦略要素と連動） "}
      </li>
      <li >
        <strong >
          {"推進役（チャンピオン）や卓越性センター（Center of Excellence）の設置"}
        </strong>
        {"による知見の集約と横展開 "}
      </li>
      <li >
        <strong >
          {"実践コミュニティ（community of practice）の形成"}
        </strong>
        {"による経験・プロンプトライブラリの共有 "}
      </li>
      <li >
        <strong >
          {"メンタリング・ペアリング"}
        </strong>
        {"（メタプロンプティングにおける「AIとのペアリング」的発想をチーム内の人同士の学び合いにも応用） "}
      </li>
    </ul>
    <h4 id="523-ai対応テスト組織におけるテストプロセスの進化k1">
      {" 5.2.3 AI対応テスト組織におけるテストプロセスの進化（K1） "}
    </h4>
    <p >
      {" 生成AIの導入は、単にツールを追加するだけでなく、テストプロセス・役割そのものの再設計を伴います。 "}
    </p>
    <ul >
      <li >
        {" 手動でのテスト実行中心のプロセスから、AIが生成した成果物を"}
        <strong >
          {"人間が監督・検証する"}
        </strong>
        {"プロセスへの重心移動 "}
      </li>
      <li >
        {" スクリプトベースの自動化から、目標駆動・エージェントベースの自動化（第4章）へのシフトに伴う、テスト自動化エンジニアの役割変化 "}
      </li>
      <li >
        {" プロンプトエンジニアリングやAI出力レビューといった新しいスキルセットの、既存のテスト役割への統合 "}
      </li>
      <li >
        {" LLMOps（4.2.2）やモデル選定（5.1.3）など、これまでテストチームが直接関与してこなかった運用上の意思決定への関与拡大 "}
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
          {" 変更管理を「一度きりの研修」で終わらせず、Discovery→Initiation and Usage Definition→Utilization and Iterationの各フェーズに対応した継続的な学習機会と、成功事例の可視化（例：削減できた工数の定量提示）をセットで提供することで、組織全体の定着率を高める。 "}
        </p>
      </div>
    </div>
    <p className="callout-source">
      {" 出典："}
      <a href="https://isqi.org/media/b9/8c/34/1777291646/ISTQB-CT-GenAI%20-%20Syllabus%20v1.1.pdf" target="_blank" rel="noopener noreferrer">
        {"CT-GenAI Syllabus v1.1 第5章"}
      </a>
      {"、"}
      <a href="https://dev.to/qa-leaders/roadmap-for-the-adoption-of-generative-ai-in-software-testing-4em4" target="_blank" rel="noopener noreferrer">
        {"第5章ロードマップの理解を補助する二次資料（dev.toの第三者記事）"}
      </a>
    </p>

  </>;
}
