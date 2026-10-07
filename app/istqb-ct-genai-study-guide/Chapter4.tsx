import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_8, DIAGRAM_9, DIAGRAM_10, DIAGRAM_11 } from './diagrams';

export default function Chapter4() {
  return <>
    <h2 id="第4章-ソフトウェアテストのためのllm搭載テストインフラ110分">
      {" 第4章 ソフトウェアテストのためのLLM搭載テストインフラ（110分） "}
    </h2>
    <p >
      <strong >
        {"キーワード"}
      </strong>
      {"：テストインフラ "}
      <strong >
        {"キーワード（GenAI固有）"}
      </strong>
      {"：ファインチューニング、LLM搭載エージェント、大規模言語モデルオペレーション（LLMOps）、Retrieval-Augmented Generation、ベクトルデータベース "}
    </p>
    <h3 id="41-llm搭載テストインフラのアーキテクチャアプローチ">
      {" 4.1 LLM搭載テストインフラのアーキテクチャアプローチ "}
    </h3>
    <h4 id="411-主要アーキテクチャコンポーネントk2">
      {" 4.1.1 主要アーキテクチャコンポーネント（K2） "}
    </h4>
    <p >
      {" LLM搭載テストインフラとは、LLMをテストプロセスに統合し、自動化・推論・意思決定を強化するシステムです。単なる会話型チャットボットと異なり、テスト関連クエリの処理・要件分析・テストケース生成・出力評価を行うよう設計されています。 "}
    </p>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-8">
        <Mermaid chart={DIAGRAM_8} />
      </div>
    </div>
    <p >
      {" このアーキテクチャは従来のクライアント・サーバーモデルを超えて、次のような知的処理を組み込みます。 "}
    </p>
    <ol type="1">
      <li >
        {" LLMは単なるサーバーではなく、テストウェアに基づいて解釈・推論する「賢い処理コンポーネント」である "}
      </li>
      <li >
        {" ルールベースのチャットボットと異なり、要件・コード・テスト結果といった文脈から動的にテストの洞察を生成する "}
      </li>
      <li >
        {" バックエンドは複数のデータソース（構造化データ用のリレーショナルDB、埋め込みによる意味検索用のベクトルDB）を統合する "}
      </li>
      <li >
        {" バックエンドはLLMの生の出力を後処理し、フロントエンドに提示する前にテストプロセスの条件と整合させる "}
      </li>
    </ol>
    <h4 id="412-retrieval-augmented-generationragk2">
      {" 4.1.2 Retrieval-Augmented Generation（RAG）（K2） "}
    </h4>
    <p >
      {" RAGは、追加のデータソースを応答生成プロセスに組み込むことでLLMの出力の関連性・正確性を高める技法です。 "}
    </p>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-9">
        <Mermaid chart={DIAGRAM_9} />
      </div>
    </div>
    <p >
      {"処理は大きく2段階です。"}
    </p>
    <ol type="1">
      <li >
        <strong >
          {"検索（Retrieval）"}
        </strong>
        {"：ユーザークエリに基づき、事前に作成済みのベクトルデータベースから、プロンプトの埋め込みとチャンクの埋め込みとの意味的類似度により関連情報を取得 "}
      </li>
      <li >
        <strong >
          {"生成（Generation）"}
        </strong>
        {"：取得情報をLLMに与え、既存の知識と新規取得データを組み合わせたより正確で文脈に即した出力を生成 "}
      </li>
    </ol>
    <p >
      {" ソフトウェアテストにおいてRAGは、LLM搭載テストインフラが企業内のデータベース・ドキュメント・リポジトリへリアルタイムにアクセスすることを可能にし、テスト分析やテスト設計が最新の仕様・要件・既存テストデータと整合するようにします。 "}
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
          {" チャンクサイズ（256〜512トークン程度）はモデルのコンテキストウィンドウとの兼ね合いで調整し、大きすぎて検索精度が落ちない・小さすぎて文脈が失われないバランスを検証しながら決める。 "}
        </p>
      </div>
    </div>
    <h4 id="413-llm搭載エージェントの役割k2">
      {"4.1.3 LLM搭載エージェントの役割（K2）"}
    </h4>
    <p >
      {" LLM搭載エージェントは、LLMを核とした半自律的・自律的なタスク処理を目的とした特化型GenAIアプリケーションです。「ツール」と呼ばれる事前定義済み関数群を呼び出すことでシステムに作用し、外部システムとの連携・操作が可能です。 "}
    </p>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-10">
        <Mermaid chart={DIAGRAM_10} />
      </div>
    </div>
    <p >
      {" 現代のテストツールでは、これらのエージェントがAIアシスタントとしてワークフローに組み込まれ、ユーザーストーリーや要件をテスト成果物へ変換しながら、テスト分析・設計・実装・実行・レポーティングまでを半自律的に自動化する、継続的でエンドツーエンドなワークフローを実現しています。これはスクリプトベースの実行から、目標駆動・エージェントベースの自動化へのシフトを意味します。 "}
    </p>
    <p >
      {" ただし、これらのエージェントもLLM由来のハルシネーション・推論エラー・バイアス（3.1参照）を抱える点は変わりません。自動検証手続きの実装や、重要タスクでは半自律型エージェントの採用によってリスクを緩和できます。 "}
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
          {" エージェントに与える「ツール」は最小権限の原則で設計し、重大な判断（本番環境への反映など）が必要なタスクには必ず人手承認のステップ（半自律動作）を残す。 "}
        </p>
      </div>
    </div>
    <h3 id="42-ファインチューニングとllmops">
      {"4.2 ファインチューニングとLLMOps"}
    </h3>
    <h4 id="421-ファインチューニングk2">
      {"4.2.1 ファインチューニング（K2）"}
    </h4>
    <p >
      {" ファインチューニングとは、事前学習済みの言語モデル（LLMまたはSLM）を、対象データセットでさらに学習させることで特定タスクやドメインに適応させる手法です。これにより、モデルはドメイン固有の知識・語彙を学習し、対象用途での性能・関連性が向上します。 "}
    </p>
    <ul >
      <li >
        {"汎用LLMに特定ドメインの専門的な推論能力や独自語彙を持たせる用途に適する"}
      </li>
      <li >
        {" 計算負荷を抑えたいときはSLMをファインチューニングすることで、LLMと比べ少ない計算リソースで高い性能を狙える "}
      </li>
      <li >
        {" 例：組織固有のユーザーストーリーとそれに対応するテストケースで学習させ、その組織のテストプロセス・用語に沿った形式でテストケースを生成できるようにする "}
      </li>
    </ul>
    <p >
      {" ファインチューニングの課題としては、高品質でタスク特化型の学習データセットを用いて偏りや不正確さを避けることなどが挙げられます。 "}
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
          {" ファインチューニングはRAG（4.1.2）と競合する手段ではなく補完関係にある。「知識の更新頻度が高い」場合はRAG、「振る舞い・出力形式・語彙をドメインに合わせて恒久的に変えたい」場合はファインチューニング、と使い分けの軸を持つとよい。 "}
        </p>
      </div>
    </div>
    <h4 id="422-llmops生成aiの運用化k2">
      {"4.2.2 LLMOps：生成AIの運用化（K2）"}
    </h4>
    <p >
      {" LLMOpsとは、テスト業務でLLMを運用に乗せる際の一連の実践であり、MLOps（機械学習の運用）の考え方をLLM特有の課題（プロンプト管理・非決定性・大規模推論コスト・継続的な品質劣化の監視など）に適用したものです。ファインチューニング（4.2.1）と並び、LLM搭載テストインフラを実運用へ乗せるための中核的な実践に位置づけられます。 "}
    </p>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-11">
        <Mermaid chart={DIAGRAM_11} />
      </div>
    </div>
    <p >
      {"テスト現場でLLMOpsが対象とする主な活動："}
    </p>
    <ul >
      <li >
        <strong >
          {"プロンプト・モデルのバージョン管理"}
        </strong>
        {"：プロンプトテンプレートやファインチューニング済みモデルを、コードと同様に変更履歴・レビューの対象として管理する "}
      </li>
      <li >
        <strong >
          {"継続的な評価"}
        </strong>
        {"：新しいプロンプト・モデルをリリースする前に、2.3.1で紹介した指標（正確性・実行成功率など）による回帰評価を自動実行する "}
      </li>
      <li >
        <strong >
          {"デプロイと統合"}
        </strong>
        {"：テスト管理ツールやCI/CDパイプラインへLLM機能を組み込む "}
      </li>
      <li >
        <strong >
          {"本番モニタリング"}
        </strong>
        {"：出力品質の劣化、応答レイテンシ、API利用コスト、非決定的挙動による逸脱を継続的に監視する "}
      </li>
      <li >
        <strong >
          {"フィードバックループ"}
        </strong>
        {"：モニタリング結果やテスターからのフィードバックを、プロンプト・モデルの改善サイクルへ還元する "}
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
          {" プロンプトの変更は通常のソースコード変更と同様に扱い、レビュー・自動評価・段階的ロールアウトを経てから全面展開する運用を確立する。これにより、非決定性に由来する品質のばらつきを本番投入前に検出しやすくなる。 "}
        </p>
      </div>
    </div>
    <p className="callout-source">
      {" 出典："}
      <a href="https://isqi.org/media/b9/8c/34/1777291646/ISTQB-CT-GenAI%20-%20Syllabus%20v1.1.pdf" target="_blank" rel="noopener noreferrer">
        {"CT-GenAI Syllabus v1.1 第4章"}
      </a>
    </p>

  </>;
}
