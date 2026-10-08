import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_5, DIAGRAM_6 } from './diagrams';

export default function Chapter2() {
  return <>
    <h2 id="第2章-効果的なソフトウェアテストのためのプロンプトエンジニアリング365分">
      {" 第2章 効果的なソフトウェアテストのためのプロンプトエンジニアリング（365分） "}
    </h2>
    <p >
      <strong >
        {"キーワード"}
      </strong>
      {"：受け入れ基準、テストスクリプト、テストケース、テスト条件、テストデータ、テスト設計、テストレポート "}
      <strong >
        {"キーワード（GenAI固有）"}
      </strong>
      {"：few-shotプロンプティング、メタプロンプティング、自然言語処理、one-shotプロンプティング、プロンプト、プロンプトチェイニング、プロンプトエンジニアリング、システムプロンプト、ユーザープロンプト、zero-shotプロンプティング "}
    </p>
    <h3 id="21-効果的なプロンプト開発">
      {"2.1 効果的なプロンプト開発"}
    </h3>
    <h4 id="211-プロンプトの6要素構造k2">
      {"2.1.1 プロンプトの6要素構造（K2）"}
    </h4>
    <p >
      {"構造化プロンプトは次の6つの要素で構成されます。"}
    </p>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-5">
        <Mermaid chart={DIAGRAM_5} />
      </div>
    </div>
    <div className="table-scroll">
      <table aria-labelledby="211-プロンプトの6要素構造k2">
        <thead >
          <tr className="header row-header">
            <th >
              {"要素"}
            </th>
            <th >
              {"役割"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"Role"}
            </td>
            <td >
              {" 「テスター」「テストマネージャー」「テスト自動化エンジニア」など、LLMに取らせる視点・トーンを指定 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"Context"}
            </td>
            <td >
              {"テスト対象、対象機能、関連する背景情報を提供"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"Instruction"}
            </td>
            <td >
              {"実行すべきタスクを明確・命令形・簡潔に指示"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"Input data"}
            </td>
            <td >
              {" ユーザーストーリー、受け入れ基準、スクリーンショット、コード、既存テストケース、出力例など "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"Constraints"}
            </td>
            <td >
              {"遵守すべき制約・特別な考慮事項"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"Output format"}
            </td>
            <td >
              {"期待する応答の形式・構造・特性"}
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
          {" 6要素はテンプレート化して再利用すること。特に Output format を明示しないと、後段の自動処理（パース・テスト管理ツールへの取り込み）が壊れやすくなるため必ず指定する。 "}
        </p>
      </div>
    </div>
    <h4 id="212-コアプロンプト技法k2">
      {"2.1.2 コアプロンプト技法（K2）"}
    </h4>
    <p >
      {"テストタスクで一般的に使われる3つのコア技法です。"}
    </p>
    <div className="table-scroll">
      <table aria-labelledby="212-コアプロンプト技法k2">
        <thead >
          <tr className="header row-header">
            <th >
              {"技法"}
            </th>
            <th >
              {"概要"}
            </th>
            <th >
              {"向いているケース"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"プロンプトチェイニング"}
            </td>
            <td >
              {" タスクを複数の中間ステップ（複数プロンプト）に分解し、各ステップの結果を人手または自動で検証してから次へ進める "}
            </td>
            <td >
              {" 複雑なタスクで、サブタスクへの分解と中間出力の系統的チェックが必要な場合 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"Few-shotプロンプティング"}
            </td>
            <td >
              {" プロンプト内に例を提示する。例なし＝zero-shot、例1つ＝one-shot、複数例＝few-shot "}
            </td>
            <td >
              {" 出力形式が決まった反復的タスク（Gherkin形式のテストケース生成など） "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"メタプロンプティング"}
            </td>
            <td >
              {"LLM自身にプロンプトを生成・改善させる反復サイクル"}
            </td>
            <td >
              {" 新しいタスク向けにプロンプトを設計する効率化、テスターとLLMの協働（ペアリング） "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-6">
        <Mermaid chart={DIAGRAM_6} />
      </div>
    </div>
    <p >
      {" 上記はプロンプトチェイニングの典型的な流れです。3つの技法は組み合わせて使うこともでき、例えば「メタプロンプティングで初期プロンプトを作成 → few-shotの例を追加して精緻化 → プロンプトチェイニングでサブタスクに分割し中間検証を行う」という多層的な適用が可能です。 "}
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
        <ul >
          <li >
            {" 出力が不安定・不正確な場合、まずプロンプトチェイニングでタスクを分割し、どのステップで精度が落ちるかを切り分ける。 "}
          </li>
          <li >
            {" Few-shotの例は3〜5件程度から始め、モデルの応答パターンを見ながら例の質と数を調整する。 "}
          </li>
        </ul>
      </div>
    </div>
    <h4 id="213-システムプロンプトとユーザープロンプトk2">
      {" 2.1.3 システムプロンプトとユーザープロンプト（K2） "}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="213-システムプロンプトとユーザープロンプトk2">
        <thead >
          <tr className="header row-header">
            <th >
              {"種別"}
            </th>
            <th >
              {"定義者"}
            </th>
            <th >
              {"可視性"}
            </th>
            <th >
              {"役割"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"システムプロンプト"}
            </td>
            <td >
              {"開発者・テスター"}
            </td>
            <td >
              {"多くのインターフェースでユーザーには非表示"}
            </td>
            <td >
              {" 会話全体を通じてLLMの振る舞い・トーン・ドメインルールを規定する。Role/Context/Constraintsを含むことが多い "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"ユーザープロンプト"}
            </td>
            <td >
              {"チャットボット利用者"}
            </td>
            <td >
              {"常に可視"}
            </td>
            <td >
              {"各やり取りごとに変化する実際の入力・質問・タスク指示"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p >
      {"例："}
    </p>
    <ul >
      <li >
        {" システムプロンプト：「あなたはプロフェッショナルなソフトウェアテスト支援アシスタントです。常に明確に、フォーマルな言葉で回答し、ISTQBに準拠したプラクティスに焦点を当ててください。推測は避け、関連するテスト原則を引用してください。」 "}
      </li>
      <li >
        {" ユーザープロンプト：「ブラックボックステストとホワイトボックステストの違いを例とともに挙げてください。」 "}
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
          {" チーム共通のシステムプロンプトを整備し、役割・出力フォーマット・禁止事項をあらかじめ固定しておくことで、個々のユーザープロンプトを簡潔に保ちつつ組織全体で一貫した品質を維持できる。 "}
        </p>
      </div>
    </div>
    <h3 id="22-プロンプトエンジニアリング技法の適用k3">
      {" 2.2 プロンプトエンジニアリング技法の適用（K3） "}
    </h3>
    <h4 id="221-テスト分析">
      {"2.2.1 テスト分析"}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="221-テスト分析">
        <thead >
          <tr className="header row-header">
            <th >
              {"タスク"}
            </th>
            <th >
              {"GenAIの役割"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"テストベースの潜在的欠陥特定"}
            </td>
            <td >
              {" 要件パターンの比較や過去の欠陥報告の知見を用い、矛盾・曖昧さ・不完全な情報を検出 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"テスト条件の生成"}
            </td>
            <td >
              {" 要件・ユーザーストーリーを自然言語処理で解釈し、テスト可能な条件に分解 "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"リスクベースの優先順位付け"}
            </td>
            <td >
              {" リスク発生可能性・影響度、規制遵守、履歴データを踏まえて優先度を提案 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"カバレッジ分析支援"}
            </td>
            <td >
              {"要件とテスト条件の対応関係をマッピングし、抜け漏れを検出"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"テスト技法の提案"}
            </td>
            <td >
              {"要件の性質に応じて境界値分析・同値分割などの技法を提案"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 id="222-テスト設計実装">
      {"2.2.2 テスト設計・実装"}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="222-テスト設計実装">
        <thead >
          <tr className="header row-header">
            <th >
              {"タスク"}
            </th>
            <th >
              {"GenAIの役割"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"テストケース生成"}
            </td>
            <td >
              {" 機能／非機能要件からドラフトのテストケース（前提条件・入力・期待結果・カバレッジ基準）を生成 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"テストデータ合成"}
            </td>
            <td >
              {"プライバシーを保持した現実的な合成テストデータを生成"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"自動テストスクリプト生成"}
            </td>
            <td >
              {" 構造化されたテストケースからテスト自動化フレームワーク向けのスクリプトを生成 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"テスト実行スケジューリング・優先順位付け"}
            </td>
            <td >
              {"優先度・リスク・リソース可用性に基づき実行順序を最適化"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 id="223-自動回帰テスト">
      {"2.2.3 自動回帰テスト"}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="223-自動回帰テスト">
        <thead >
          <tr className="header row-header">
            <th >
              {"タスク"}
            </th>
            <th >
              {"GenAIの役割"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"キーワード駆動自動化"}
            </td>
            <td >
              {" 定義済みキーワードを具体的なテストケースにマッピングしスクリプト生成 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"影響分析・テスト最適化"}
            </td>
            <td >
              {"コード変更の影響範囲を分析し回帰テスト対象を絞り込み"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"セルフヒーリング／適応型テスト"}
            </td>
            <td >
              {" UI/API の軽微な変更にスクリプトを自動追従させ、不要な失敗を防止 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"自動テストレポート・洞察"}
            </td>
            <td >
              {" 成功率・失敗・重要な知見を含むレポート生成、傾向のダッシュボード化 "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"欠陥報告・根本原因分析の強化"}
            </td>
            <td >
              {" ログ・スクリーンショット・環境情報を含む詳細な欠陥報告を自動作成 "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p >
      {" CI/CD パイプラインのように実行頻度が高い回帰テストほど自動化の恩恵が大きく、GUIテストでは動的ロケータへの適応、APIテストではリクエスト／レスポンス仕様の変化への追従にGenAIが有効です。 "}
    </p>
    <h4 id="224-テストモニタリングコントロール">
      {" 2.2.4 テストモニタリング・コントロール "}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="224-テストモニタリングコントロール">
        <thead >
          <tr className="header row-header">
            <th >
              {"タスク"}
            </th>
            <th >
              {"GenAIの役割"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"モニタリング・メトリクス分析"}
            </td>
            <td >
              {"傾向分析による潜在リスクの予測、計画からの逸脱アラート"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"テストコントロール"}
            </td>
            <td >
              {"再優先順位付け・スケジュール調整・リソース再配分の提案"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"完了時の知見・継続学習"}
            </td>
            <td >
              {"テスト完了報告書の生成、成功要因・教訓の抽出"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"メトリクス可視化・報告強化"}
            </td>
            <td >
              {"動的ダッシュボードと自然言語要約の生成"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 id="225-プロンプト技法の使い分け公式シラバス掲載表">
      {" 2.2.5 プロンプト技法の使い分け（公式シラバス掲載表） "}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="225-プロンプト技法の使い分け公式シラバス掲載表">
        <thead >
          <tr className="header row-header">
            <th >
              {"プロンプト技法"}
            </th>
            <th >
              {"推奨ユースケース"}
            </th>
            <th >
              {"主な特徴・用途"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"プロンプトチェイニング"}
            </td>
            <td >
              {"各ステップでの人手検証を伴う高精度が必要な複雑タスク"}
            </td>
            <td >
              {" タスクを小ステップに分解。テスト分析・テスト設計・テスト自動化で、各ステップの機能的正確性をチェックする用途に有用 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"Few-shotプロンプティング"}
            </td>
            <td >
              {"反復的または特定・制約された出力形式が求められるタスク"}
            </td>
            <td >
              {" 特定パターンでの反復生成に例を提示。Gherkin形式のテストケース、キーワード駆動テスト、特定形式のテストレポート等 "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"メタプロンプティング"}
            </td>
            <td >
              {"柔軟・動的なタスク、新しいタスク向けプロンプト作成に有用"}
            </td>
            <td >
              {" 目的とタスクの概要を与え、LLM自身にプロンプト作成を促す。テストレポート分析や異常検知など複雑タスク全般に有用 "}
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
          {" 単一の技法に固執せず、「メタプロンプティングで骨格を作る → few-shotで型を固める → プロンプトチェイニングで検証点を挟む」という組み合わせを標準ワークフローとして定着させる。 "}
        </p>
      </div>
    </div>
    <h3 id="23-生成ai結果の評価とプロンプトの改善">
      {" 2.3 生成AI結果の評価とプロンプトの改善 "}
    </h3>
    <h4 id="231-評価メトリクスk2">
      {"2.3.1 評価メトリクス（K2）"}
    </h4>
    <div className="table-scroll">
      <table aria-labelledby="231-評価メトリクスk2">
        <thead >
          <tr className="header row-header">
            <th >
              {"メトリクス"}
            </th>
            <th >
              {"説明"}
            </th>
            <th >
              {"例"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"Accuracy（正確性）"}
            </td>
            <td >
              {"専門家が作成したテストケース・要件等との全体的な正しさ"}
            </td>
            <td >
              {"生成されたテストケースが全要求事項を網羅している度合い"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"Precision（適合率）"}
            </td>
            <td >
              {"特定の目的に対する生成出力の正確さ"}
            </td>
            <td >
              {"生成されたテストケースが異常を正しく識別する度合い"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"Recall（再現率）"}
            </td>
            <td >
              {"データセット内の関連インスタンスをすべて識別できる能力"}
            </td>
            <td >
              {"有効・無効な同値クラスの網羅度合い"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"Relevance and Contextual Fit（関連性・文脈適合性）"}
            </td>
            <td >
              {"出力が文脈に適切かどうか"}
            </td>
            <td >
              {"テストベース・ドメイン固有要件との整合性"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"Diversity（多様性）"}
            </td>
            <td >
              {"幅広い入力・シナリオを重複なくカバーできるか"}
            </td>
            <td >
              {"様々なユーザー行動やエッジケースの網羅度"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"Execution Success Rate（実行成功率）"}
            </td>
            <td >
              {"生成されたテスト成果物がそのまま実行可能な割合"}
            </td>
            <td >
              {"構文エラーや形式問題なく実行できるスクリプトの割合"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"Time Efficiency（時間効率）"}
            </td>
            <td >
              {"手動作業と比較した時間節約効果"}
            </td>
            <td >
              {"人手作成に比べたAI生成の所要時間"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p >
      {" 生成AIは非決定的な性質を持つため、評価は"}
      <strong >
        {"統計的に妥当なデータ（十分なサンプル数のデータ"}
      </strong>
      {"）に基づく必要があります。単発の出力だけで判断しないこと。 "}
    </p>
    <h4 id="232-プロンプトの評価改善技法k2">
      {"2.3.2 プロンプトの評価・改善技法（K2）"}
    </h4>
    <ul >
      <li >
        <strong >
          {"反復的プロンプト修正"}
        </strong>
        {"：ベースプロンプトから出発し、結果を見ながら文脈追加や用語調整を段階的に行う "}
      </li>
      <li >
        <strong >
          {"A/Bテスト"}
        </strong>
        {"：複数バージョンのプロンプトを作成し、事前定義メトリクスで比較する "}
      </li>
      <li >
        <strong >
          {"出力分析"}
        </strong>
        {"：AI生成出力の不正確さ・不整合を分析し、将来の欠陥を防ぐ知見を得る "}
      </li>
      <li >
        <strong >
          {"ユーザーフィードバックの統合"}
        </strong>
        {"：テスターからの有用性・明確さに関するフィードバックを反映 "}
      </li>
      <li >
        <strong >
          {"プロンプトの長さ・具体性の調整"}
        </strong>
        {"：文脈追加が有効な場合もあれば、短いプロンプトの方が汎化性能が高い場合もある "}
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
          {" チームでプロンプトライブラリを共有し、評価済みの高品質プロンプトをテンプレート化する。属人化を防ぎ、プロンプト設計のばらつきによる品質低下を抑制できる。 "}
        </p>
      </div>
    </div>
    <p className="callout-source">
      {" 出典："}
      <a href="https://isqi.org/media/b9/8c/34/1777291646/ISTQB-CT-GenAI%20-%20Syllabus%20v1.1.pdf" target="_blank" rel="noopener noreferrer">
        {"CT-GenAI Syllabus v1.1 第2章"}
      </a>
    </p>

  </>;
}
