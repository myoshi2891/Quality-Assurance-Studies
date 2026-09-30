import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
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
            </main>
        </div>
    );
}
