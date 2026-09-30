import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_AI_GENEALOGY, DIAGRAM_LLM_TEXT_GENERATION } from './diagrams';
import './istqb-ct-genai-chapter1-introduction.css';

export const metadata: Metadata = {
    title: 'CT-GenAI 第1章：生成AIソフトウェアテスト入門 完全ガイド',
    description: 'ISTQB CT-GenAI 第1章「生成AIソフトウェアテスト入門」の完全解説ガイド。AIの系譜、LLMの基礎、主要能力と対話モデルをわかりやすく解説。',
};

export default function CtGenAiChapter1Page() {
    return (
        <div className="ct-genai-ch1-page layout">
            <NavBar />
            <main className="main">
                <div className="hero">
                    <span className="badge">ISTQB® Certified Tester – Testing with Generative AI</span>
                    <h1>CT-GenAI 第1章：生成AIソフトウェアテスト入門 完全ガイド</h1>
                    <p>
                        本ガイドは ISTQB® Certified Tester – Testing with Generative AI（CT-GenAI）シラバスの 第1章「Introduction to Generative AI for Software Testing 」を、初学者向けに独自の言葉で解説したものです。シラバス原文の逐語的な引用ではなく、内容を咀嚼した解説となっています。試験対策には必ず巻末の出典に記載した公式シラバス原文も併せてご確認ください。
                    </p>
                </div>

                <h2 id="この章の位置づけと全体像">この章の位置づけと全体像</h2>
                <p>
                    CT-GenAI試験は、ISTQB® Certified Tester Foundation Level（CTFL）取得を前提資格とするスペシャリストレベルの認定です。試験は<strong>40問・合計46点・合格ライン30点（65%）・制限時間60分</strong>（非母語受験者は+25%）で構成されており、全5章のうち、この第1章はシラバス全体（約13.6時間）の中で<strong>100分</strong>が割り当てられた「導入」にあたる章です。
                </p>
                <p>第1章は大きく2つの節から構成されています。</p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>節</th>
                                <th>タイトル</th>
                                <th>内容の要旨</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1.1</td>
                                <td>生成AIの基礎と主要概念</td>
                                <td>
                                    AIの分類、LLMの仕組み（トークン化・埋め込み・Transformer）、LLMの種類、マルチモーダルLLM
                                </td>
                            </tr>
                            <tr className="even">
                                <td>1.2</td>
                                <td>ソフトウェアテストにおける生成AI活用の原則</td>
                                <td>
                                    テストタスクにおけるLLMの能力、AIチャットボットとLLM搭載アプリケーションの違い
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    この章を理解することは、第2章（プロンプトエンジニアリング）、第3章（リスク管理）、第4章（LLM搭載テスト基盤）を学ぶための土台になります。特に「トークン化」「コンテキストウィンドウ」「非決定性」といった概念は、後続の章で繰り返し登場する重要な基礎知識です。
                </p>

                <h2 id="学習目標一覧">学習目標一覧</h2>
                <p>
                    CT-GenAI試験では、各学習目標（Learning Objective）に認知レベル（K1〜K3）が付与されています。K1は「記憶」、K2は「理解」、K3は「応用」を意味します。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>項番</th>
                                <th>認知レベル</th>
                                <th>学習目標の要旨</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>GenAI-1.1.1</td>
                                <td>K1（記憶）</td>
                                <td>
                                    記号的AI・古典的機械学習・深層学習・生成AIという異なるAIの種類を思い出せる
                                </td>
                            </tr>
                            <tr className="even">
                                <td>GenAI-1.1.2</td>
                                <td>K2（理解）</td>
                                <td>生成AIと大規模言語モデル（LLM）の基礎を説明できる</td>
                            </tr>
                            <tr className="odd">
                                <td>HO-1.1.2</td>
                                <td>H1（実践演習）</td>
                                <td>LLM使用時のトークン化とトークン数評価を実践する</td>
                            </tr>
                            <tr className="even">
                                <td>GenAI-1.1.3</td>
                                <td>K2（理解）</td>
                                <td>基盤LLM・指示チューニング済みLLM・推論LLMを区別できる</td>
                            </tr>
                            <tr className="odd">
                                <td>GenAI-1.1.4</td>
                                <td>K2（理解）</td>
                                <td>
                                    マルチモーダルLLMとVision-Language Modelの基本原理を要約できる
                                </td>
                            </tr>
                            <tr className="even">
                                <td>HO-1.1.4</td>
                                <td>H1（実践演習）</td>
                                <td>
                                    所与のテストタスク用に提供されたテキストと画像入力のプロンプト・入力データをレビューし、マルチモーダルLLMで実行する（プロンプトの自作は追加の発展演習）
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>GenAI-1.2.1</td>
                                <td>K2（理解）</td>
                                <td>テストタスクにおけるLLMの主要な能力の例を挙げられる</td>
                            </tr>
                            <tr className="even">
                                <td>GenAI-1.2.2</td>
                                <td>K2（理解）</td>
                                <td>
                                    ソフトウェアテストで生成AIを利用する際の対話モデル（チャットボット/アプリケーション）を比較できる
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="callout-practice">
                    <div className="callout-label">
                        <span className="callout-icon">💡</span>
                        <span>ベストプラクティス（学習の進め方）</span>
                    </div>
                    <div className="callout-body">
                        <ul>
                            <li>
                                K1項目（1.1.1）は用語と分類の暗記が中心なので、まず分類の観点（ルールベースか／データ駆動か／自動特徴抽出か）を整理してから覚えると定着しやすい。
                            </li>
                            <li>
                                K2項目が大半を占めるため、単純暗記よりも「なぜその概念が必要か」「テスト業務のどの場面で使われるか」をセットで理解することが得点に直結する。
                            </li>
                            <li>
                                HO（ハンズオン）項目は本番の試験には直接出題されないが、実際に無料のトークナイザーやチャットボットを触っておくと、K2レベルの理解が格段に深まる。
                            </li>
                        </ul>
                    </div>
                </div>

                <h2 id="重要キーワード一覧">重要キーワード一覧</h2>
                <p>
                    シラバスでは、章の冒頭に記載された「Generative AI Specific Keywords」はK1レベルで暗記すべき用語とされています。
                </p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>英語用語</th>
                                <th>日本語</th>
                                <th>簡単な説明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>generative AI</td>
                                <td>生成AI</td>
                                <td>
                                    学習データのパターンを模倣し、新しいテキスト・画像・コードなどを生成するAI技術
                                </td>
                            </tr>
                            <tr className="even">
                                <td>large language model (LLM)</td>
                                <td>大規模言語モデル</td>
                                <td>大量のテキストデータで事前学習された生成AIモデル</td>
                            </tr>
                            <tr className="odd">
                                <td>machine learning</td>
                                <td>機械学習</td>
                                <td>データからパターンを学習する技術全般</td>
                            </tr>
                            <tr className="even">
                                <td>deep learning</td>
                                <td>深層学習</td>
                                <td>
                                    ニューラルネットワークを用いて特徴量を自動的に学習する機械学習の一種
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>symbolic AI</td>
                                <td>記号的AI</td>
                                <td>記号と論理規則を用いて知識を表現するルールベースのAI</td>
                            </tr>
                            <tr className="even">
                                <td>feature</td>
                                <td>特徴量</td>
                                <td>機械学習モデルが学習に用いるデータの特性・変数</td>
                            </tr>
                            <tr className="odd">
                                <td>generative pre-trained transformer</td>
                                <td>生成的事前学習済みTransformer</td>
                                <td>
                                    LLMの基盤となるTransformerアーキテクチャに基づく事前学習モデル
                                </td>
                            </tr>
                            <tr className="even">
                                <td>foundation LLM</td>
                                <td>基盤LLM</td>
                                <td>多様な大規模データで事前学習された汎用モデル</td>
                            </tr>
                            <tr className="odd">
                                <td>instruction-tuned LLM</td>
                                <td>指示チューニング済みLLM</td>
                                <td>指示に従うよう追加調整された基盤LLM</td>
                            </tr>
                            <tr className="even">
                                <td>reasoning LLM</td>
                                <td>推論LLM</td>
                                <td>多段階の論理的推論に特化したLLM</td>
                            </tr>
                            <tr className="odd">
                                <td>multimodal model</td>
                                <td>マルチモーダルモデル</td>
                                <td>テキスト・画像・音声など複数種類のデータを扱えるモデル</td>
                            </tr>
                            <tr className="even">
                                <td>tokenization</td>
                                <td>トークン化</td>
                                <td>テキストをトークンという単位に分割する処理</td>
                            </tr>
                            <tr className="odd">
                                <td>embedding</td>
                                <td>埋め込み</td>
                                <td>トークンを意味的関係を表す数値ベクトルに変換したもの</td>
                            </tr>
                            <tr className="even">
                                <td>transformer</td>
                                <td>Transformer</td>
                                <td>
                                    注意機構によりトークン間の関係を学習するニューラルネットワーク構造
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>context window</td>
                                <td>コンテキストウィンドウ</td>
                                <td>モデルが一度に考慮できる入力・出力トークンの範囲</td>
                            </tr>
                            <tr className="even">
                                <td>AI chatbot</td>
                                <td>AIチャットボット</td>
                                <td>対話形式でLLMとやり取りするインターフェース</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 id="11-生成aiの基礎と主要概念">1.1 生成AIの基礎と主要概念</h2>
                <h3 id="111-aiの系譜記号的ai古典的機械学習深層学習生成ai">
                    1.1.1 AIの系譜：記号的AI・古典的機械学習・深層学習・生成AI
                </h3>
                <p>
                    AI（人工知能）は単一の技術ではなく、問題解決アプローチの異なる複数の技術群の総称です。CT-GenAIシラバスでは、この系譜を4つの段階に整理しています。
                </p>
                <ul>
                    <li>
                        <strong>記号的AI（Symbolic AI）</strong>：人間の意思決定を模倣するルールベースのシステムです。知識を記号と論理規則で表現します。IF-THENルールで動作する古典的な専門家システムをイメージすると分かりやすいでしょう。
                    </li>
                    <li>
                        <strong>古典的機械学習（Classical Machine Learning）</strong>：データ駆動型のアプローチで、データ準備・特徴量選択・モデル学習という工程が必要です。不具合の分類やソフトウェア障害の予測などに使われます。
                    </li>
                    <li>
                        <strong>深層学習（Deep Learning）</strong>：ニューラルネットワークという構造を用いて、データから特徴量を自動的に学習します。画像・音声・テキストといった大規模で複雑なデータの中からパターンを発見できますが、実務ではデータのアノテーションやモデル調整、結果検証といった人間の関与が依然として必要です。
                    </li>
                    <li>
                        <strong>生成AI（Generative AI）</strong>：深層学習の技術を応用し、学習データのパターンを模倣・学習することで、テキスト・画像・コードといった<strong>新しいコンテンツ</strong>を生み出します。LLMはこの生成AIの代表例です。
                    </li>
                </ul>
                <p>
                    これら4つは新しい技術が古い技術を置き換えるものではなく、それぞれ異なる強みと限界を持つ並存的な技術群です。生成AIの最大の利点は、適したテストタスクであれば追加の学習フェーズを経ずに事前学習済みのモデルを適用できる点にあります（ドメイン固有の用途などでは、タスクに応じてファインチューニング等の追加調整が必要になる場合もあります）が、これには相応のリスクも伴います（リスクの詳細は第3章で扱います）。
                </p>
                <div className="mermaid-container" id="mermaid-diagram-1">
                    <Mermaid chart={DIAGRAM_AI_GENEALOGY} />
                </div>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>種類</th>
                                <th>アプローチ</th>
                                <th>必要な工程</th>
                                <th>ソフトウェアテストでの活用例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>記号的AI</td>
                                <td>ルールベース</td>
                                <td>論理規則の設計</td>
                                <td>決定表・状態遷移に基づくルール判定</td>
                            </tr>
                            <tr className="even">
                                <td>古典的機械学習</td>
                                <td>データ駆動</td>
                                <td>データ準備・特徴量選択・モデル学習</td>
                                <td>不具合分類、障害発生確率の予測</td>
                            </tr>
                            <tr className="odd">
                                <td>深層学習</td>
                                <td>ニューラルネットワーク</td>
                                <td>大量データでの学習（特徴量は自動抽出）</td>
                                <td>画像・ログのパターン認識</td>
                            </tr>
                            <tr className="even">
                                <td>生成AI</td>
                                <td>深層学習の応用</td>
                                <td>
                                    事前学習済みモデルの活用（適したタスクでは追加学習なしで適用可。追加調整の要否はタスクに応じる）
                                </td>
                                <td>テストケース・スクリプト・レポートの自動生成</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="callout-practice">
                    <div className="callout-label">
                        <span className="callout-icon">💡</span><span>ベストプラクティス</span>
                    </div>
                    <div className="callout-body">
                        <ul>
                            <li>
                                「なぜ生成AIがテスト業務に向いているか」を説明する際は、<strong>適したタスクでは追加の学習フェーズが不要</strong>という利点を軸に説明すると、他の機械学習手法との違いが明確になる。
                            </li>
                            <li>
                                一方で、事前学習モデルをそのまま使うことは「学習データに起因するリスク（ハルシネーション・バイアスなど）」と表裏一体であることを、活用前に必ずチームで共有しておく。
                            </li>
                            <li>
                                不具合予測や分類のように、明確な正解ラベル付きデータが大量にある場合は、生成AIより古典的機械学習の方が適していることもあるため、タスクの性質を見極めてから技術を選定する。
                            </li>
                        </ul>
                    </div>
                </div>

                <h3 id="112-生成aiとllmの基礎">1.1.2 生成AIとLLMの基礎</h3>
                <p>
                    大規模言語モデル（LLM）は、書籍・記事・Webサイトなど非常に大規模な言語データで学習されたモデルの総称です。代表例の Generative Pre-trained Transformer（GPT）は、トランスフォーマーを基盤とする深層学習モデルの一種です。パラメータ数を絞り、軽量かつ特定用途に特化させたモデルは<strong>小規模言語モデル（SLM）</strong>と呼ばれます。
                </p>
                <p>
                    LLMが言語のニュアンスを扱い、一貫した文章を生成できるのは、<strong>トークン化</strong>と<strong>埋め込み</strong>という2つの仕組みのおかげです。
                </p>
                <ul>
                    <li>
                        <strong>トークン化（Tokenization）</strong>：テキストを「トークン」という小さな単位に分解する処理です。トークンは1文字程度の場合もあれば、単語やサブワード単位になることもあります。LLMは入力文をまずトークン化し、全体の文脈を保ちながら各トークンを処理します。
                    </li>
                    <li>
                        <strong>埋め込み（Embedding）</strong>：トークンを、意味的・構文的・文脈的な関係を表す数値ベクトルに変換したものです。似た意味や役割を持つトークンは、高次元空間上で近い位置に配置されます。これによりLLMは単語同士の関係性を理解し、文脈を保持し、一貫性のある応答を生成できます。
                    </li>
                </ul>
                <p>
                    LLMは<strong>Transformer</strong>というニューラルネットワーク構造を利用しています。Transformerは長いテキスト列の文脈を処理し、トークン同士の関係を学習することに優れています。推論時にはこの学習済みの関係性を活用し、統計的にもっともらしい次のトークンを予測して文章を生成します。ここで重要なのは、<strong>「統計的にもっともらしい」ことは「正しい」ことを意味しない</strong>という点です。
                </p>
                <p>
                    また、LLMは推論の確率的な性質やハイパーパラメータの設定に起因して<strong>非決定的（non-deterministic）</strong>に振る舞います。つまり、まったく同じ入力を与えても、出力が毎回変わることがあります。
                </p>
                <p>
                    <strong>コンテキストウィンドウ（Context Window）</strong>とは、LLMが応答生成時に考慮できる、直前のテキスト量（トークン数）の範囲を指します。コンテキストウィンドウが大きいほど、長いテストログの分析のように長い文章の一貫性を保てますが、その分、計算負荷と処理時間も増加します。
                </p>
                <div className="mermaid-container" id="mermaid-diagram-2">
                    <Mermaid chart={DIAGRAM_LLM_TEXT_GENERATION} />
                </div>
                <h4 id="ハンズオン演習ho-112の狙い">ハンズオン演習（HO-1.1.2）の狙い</h4>
                <p>
                    シラバスが推奨する演習は、①テキストを実際にトークナイザーにかけてトークンの区切られ方を観察すること、②異なる長さ・構造の入力文のトークン数を計測し、コンテキストウィンドウの制限や処理効率にどう影響するかを分析すること、の2部構成です。この演習を通じて、入力文の構造や長さがLLMとのやり取りにどう影響するかを体感的に理解できます。
                </p>
                <div className="callout-practice">
                    <div className="callout-label">
                        <span className="callout-icon">💡</span><span>ベストプラクティス</span>
                    </div>
                    <div className="callout-body">
                        <ul>
                            <li>
                                長いテストログや大量の要件文書をLLMに入力する前に、<strong>概算のトークン数</strong>を確認する習慣をつける。コンテキストウィンドウの上限に近づくほど、処理の一貫性や精度が落ちるリスクがある。
                            </li>
                            <li>
                                日本語は英語に比べて1文字あたりのトークン消費量が多くなりがちなので、日本語プロンプトを設計する際はこの点を考慮し、余裕を持ったトークン見積もりを行う。
                            </li>
                            <li>
                                出力の<strong>非決定性</strong>を前提に、重要なテスト成果物（テストケースやテストオラクルなど）は必ず人手でレビューするプロセスを組み込む。同じプロンプトでも実行のたびに結果が変わり得ることをチームで共有しておく。
                            </li>
                            <li>
                                大量のテキストを一度に処理させるのではなく、コンテキストウィンドウに収まる単位に分割して段階的に処理させることで、精度と再現性を高められる（この考え方は第2章の「プロンプトチェイニング」に発展する）。
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

