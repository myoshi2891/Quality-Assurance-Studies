import React from 'react';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_2, DIAGRAM_3, DIAGRAM_4 } from './diagrams';

export default function Chapter1() {
  return <>
    <h2 id="第1章-ソフトウェアテストにおける生成ai入門100分">
      {" 第1章 ソフトウェアテストにおける生成AI入門（100分） "}
    </h2>
    <p >
      <strong >
        {"キーワード（GenAI固有）"}
      </strong>
      {"：AIチャットボット、コンテキストウィンドウ、深層学習、埋め込み（embedding）、特徴量、基盤LLM、生成AI、生成事前学習済みトランスフォーマー、指示チューニング済みLLM、大規模言語モデル、機械学習、マルチモーダルモデル、推論LLM、記号的AI、トークン化、トランスフォーマー "}
    </p>
    <h3 id="11-生成aiの基礎と主要概念">
      {"1.1 生成AIの基礎と主要概念"}
    </h3>
    <h4 id="111-aiスペクトラム記号的ai古典的機械学習深層学習生成aik1">
      {" 1.1.1 AIスペクトラム：記号的AI／古典的機械学習／深層学習／生成AI（K1） "}
    </h4>
    <p >
      {" AI技術は単一の手法ではなく、以下のようなスペクトラムとして理解すると整理しやすくなります。 "}
    </p>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-2">
        <Mermaid chart={DIAGRAM_2} />
      </div>
    </div>
    <div className="table-scroll">
      <table >
        <thead >
          <tr className="header row-header">
            <th >
              {"種類"}
            </th>
            <th >
              {"特徴"}
            </th>
            <th >
              {"テストでの用途例"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"記号的AI"}
            </td>
            <td >
              {"記号と論理ルールで知識を表現"}
            </td>
            <td >
              {"ルールベースの検証エンジン"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"古典的機械学習"}
            </td>
            <td >
              {"データ駆動、特徴量選択とモデル学習が必要"}
            </td>
            <td >
              {"欠陥分類、不具合予測"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"深層学習"}
            </td>
            <td >
              {" ニューラルネットワークで特徴を自動抽出（データアノテーション等は人手が残る） "}
            </td>
            <td >
              {"画像・音声・テキストの大規模パターン認識"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"生成AI"}
            </td>
            <td >
              {" 深層学習で学習データのパターンを模倣し、新しいコンテンツ（文章・画像・コード）を生成 "}
            </td>
            <td >
              {"テストケース生成、コード生成、推論の模擬"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p >
      {" 生成AI最大の利点は、"}
      <strong >
        {"追加の学習フェーズなしに事前学習済みモデルをそのままテストタスクへ適用できる"}
      </strong>
      {"点ですが、これには一定のリスク（第3章参照）が伴います。 "}
    </p>
    <h4 id="112-生成aiとllmの基礎k2">
      {"1.1.2 生成AIとLLMの基礎（K2）"}
    </h4>
    <p >
      {" LLM（大規模言語モデル）はトランスフォーマーなどの深層学習アーキテクチャをベースとするモデルで（「生成事前学習済みトランスフォーマー（GPT）」はその代表例）、書籍・記事・Webサイトなど極めて大規模なデータセットで学習されます。"}
      <strong >
        {"SLM（小規模言語モデル"}
      </strong>
      {"）はパラメータ数を抑えた軽量版で、特定用途に特化した使い方に向きます。 "}
    </p>
    <p >
      {"LLMが言語を処理・生成するための2つの中核概念："}
    </p>
    <ul >
      <li >
        <strong >
          {"トークン化（tokenization）"}
        </strong>
        {"：文章をトークン（文字・サブワード・単語などの単位）に分割する処理。 "}
      </li>
      <li >
        <strong >
          {"埋め込み（embedding）"}
        </strong>
        {"：各トークンを高次元ベクトル空間上の数値表現に変換する処理。意味的に近いトークンは空間上でも近い位置に配置され、これによりLLMは文脈理解や一貫した応答生成が可能になります。 "}
      </li>
    </ul>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-3">
        <Mermaid chart={DIAGRAM_3} />
      </div>
    </div>
    <p >
      {" LLMはトランスフォーマーというニューラルネットワーク構造を用い、推論時には「次に来る可能性の高いトークン」を統計的に予測して文章を生成します。ここで重要なのは、"}
      <strong >
        {"生成される文章は「統計的にもっともらしい」だけであり、必ずしも正しいとは限らない"}
      </strong>
      {"という点です。また、推論の確率的性質・ハイパーパラメータ設定に起因して、同じ入力でも実行のたびに異なる出力になる"}
      <strong >
        {"非決定的な挙動"}
      </strong>
      {"を示します。 "}
    </p>
    <p >
      <strong >
        {"コンテキストウィンドウ"}
      </strong>
      {"は、モデルが応答生成時に考慮できる直前テキストの量（トークン数）を指します。ウィンドウが大きいほど長い文脈（大量のテストログなど）を一貫して扱えますが、その分計算コストと処理時間が増加します。 "}
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
            {" 大きなテストログや長い要件文書をLLMに渡す前に、トークン数を見積もり、コンテキストウィンドウの上限に収まるよう要約・分割すること。 "}
          </li>
          <li >
            {" 「もっともらしいが誤り」という性質を前提に、生成結果は必ず人間または自動検証で裏取りする運用を組み込むこと（第3章参照）。 "}
          </li>
        </ul>
      </div>
    </div>
    <h4 id="113-基盤llm指示チューニング済みllm推論llmk2">
      {" 1.1.3 基盤LLM／指示チューニング済みLLM／推論LLM（K2） "}
    </h4>
    <p >
      {"LLMは段階的な学習プロセスを経て、以下の3カテゴリに分類されます。"}
    </p>
    <div className="mermaid-container">
      <div className="mermaid-target" id="mermaid-diagram-4">
        <Mermaid chart={DIAGRAM_4} />
      </div>
    </div>
    <div className="table-scroll">
      <table >
        <thead >
          <tr className="header row-header">
            <th >
              {"種類"}
            </th>
            <th >
              {"特徴"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"基盤LLM"}
            </td>
            <td >
              {" テキスト・コード・画像など多様なモダリティの大規模データで学習された汎用モデル。柔軟だが特定タスクへの追加適応が必要 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"指示チューニング済みLLM"}
            </td>
            <td >
              {" 基盤モデルをプロンプトと期待応答のペアで微調整し、指示追従性・応答の一貫性を高めたもの "}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"推論LLM"}
            </td>
            <td >
              {" 指示チューニング済みモデルをさらに拡張し、論理的推論・多段階の問題解決・思考の連鎖（Chain-of-Thought）を強化したもの。認知負荷の高いタスクに適する "}
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
          {" テスト設計のような複雑な多段階推論を要するタスク（優先順位付け、依存関係分析など）には推論LLMを、定型的な文章生成や単純な変換タスクには指示チューニング済み（非推論）LLMを使い分けることでコストと精度のバランスを最適化する。 "}
        </p>
      </div>
    </div>
    <h4 id="114-マルチモーダルllmとvision-languageモデルk2">
      {" 1.1.4 マルチモーダルLLMとVision-Languageモデル（K2） "}
    </h4>
    <p >
      {" マルチモーダルLLMはテキストに加えて画像・音声・動画など複数のモダリティを扱えるようトランスフォーマーを拡張したモデルです。画像はVision-Languageモデルによって埋め込みへ変換されたうえでトランスフォーマーに入力されます。 "}
    </p>
    <p >
      {"テストにおける主な活用："}
    </p>
    <ul >
      <li >
        {" スクリーンショットやGUIワイヤーフレームと、テキスト（ユーザーストーリー・欠陥報告）を組み合わせて解析し、期待結果と実際の画面表示の差異を検出する "}
      </li>
      <li >
        {" テキストと視覚情報の両方を組み込んだ、より現実的で網羅性の高いテストケースを生成する "}
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
          {" ワイヤーフレーム画像から受け入れ基準を生成する際は、画像だけでなく入力フィールドの制約やビジネスルールをテキストで補足することで、生成結果の精度が大きく向上する。 "}
        </p>
      </div>
    </div>
    <h3 id="12-ソフトウェアテストにおける生成ai活用の基本原則">
      {" 1.2 ソフトウェアテストにおける生成AI活用の基本原則 "}
    </h3>
    <h4 id="121-テストタスクにおけるllmの主要な能力k2">
      {" 1.2.1 テストタスクにおけるLLMの主要な能力（K2） "}
    </h4>
    <div className="table-scroll">
      <table >
        <thead >
          <tr className="header row-header">
            <th >
              {"能力"}
            </th>
            <th >
              {"内容"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"要件分析・改善"}
            </td>
            <td >
              {" 曖昧さ・矛盾・欠落情報を特定し、ステークホルダーへの確認質問を生成 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"テストケース作成支援"}
            </td>
            <td >
              {"要件・ユーザーストーリーからテストケース／テスト目的を生成"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"テストオラクル生成"}
            </td>
            <td >
              {"期待結果の生成を支援"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"テストデータ生成"}
            </td>
            <td >
              {"データセット生成、境界値設定、多様なデータ組み合わせの作成"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"テスト自動化支援"}
            </td>
            <td >
              {" テストケース記述からのスクリプト生成、既存スクリプトの改善提案・適切な技法の特定 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"テスト結果分析"}
            </td>
            <td >
              {"結果の要約作成、重大度・優先度に基づく異常分類"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"テストウェア作成"}
            </td>
            <td >
              {"テスト計画・テストレポート・欠陥報告などの文書作成・更新"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 id="122-aiチャットボット-vs-llm搭載テストアプリケーションk2">
      {" 1.2.2 AIチャットボット vs LLM搭載テストアプリケーション（K2） "}
    </h4>
    <div className="table-scroll">
      <table >
        <thead >
          <tr className="header row-header">
            <th >
              {"観点"}
            </th>
            <th >
              {"AIチャットボット"}
            </th>
            <th >
              {"LLM搭載テストアプリケーション"}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr className="odd row-odd">
            <td >
              {"インターフェース"}
            </td>
            <td >
              {"会話型・自然言語での直接対話"}
            </td>
            <td >
              {"APIを介した組み込み型（テストツール内に統合）"}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"柔軟性"}
            </td>
            <td >
              {" 探索的・即興的な利用に強い（プロンプトチェイニング等で反復改善） "}
            </td>
            <td >
              {"定型・自動化されたタスク向けにカスタマイズ・スケール可能"}
            </td>
          </tr>
          <tr className="odd row-odd">
            <td >
              {"想定ユーザー"}
            </td>
            <td >
              {" 非技術者を含む幅広い利用者、新任テスターのオンボーディングにも有用 "}
            </td>
            <td >
              {" 組織・ツールベンダーが既存フレームワークにGenAIを組み込む場合 "}
            </td>
          </tr>
          <tr className="even row-even">
            <td >
              {"発展形"}
            </td>
            <td >
              {"—"}
            </td>
            <td >
              {"特定のテスト役割を担うAIエージェントの構築（第4章）"}
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
          {" どちらの方式でも、出力の正確性・関連性・テスト目的との整合性を高める鍵は"}
          <strong >
            {"プロンプトエンジニアリング"}
          </strong>
          {"（第2章）です。チャットボットでの試行錯誤で有効だったプロンプトパターンを、LLM搭載アプリケーションのテンプレートへ昇華させると再現性が上がる。 "}
        </p>
      </div>
    </div>
    <p className="callout-source">
      {" 出典："}
      <a href="https://isqi.org/media/b9/8c/34/1777291646/ISTQB-CT-GenAI%20-%20Syllabus%20v1.1.pdf" target="_blank" rel="noopener noreferrer">
        {"CT-GenAI Syllabus v1.1 第1章"}
      </a>
    </p>

  </>;
}
