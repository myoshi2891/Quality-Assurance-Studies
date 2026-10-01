import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import {
    DIAGRAM_CH3_OVERVIEW,
    DIAGRAM_THREE_MISTAKES_RELATION,
    DIAGRAM_DETECTION_FLOW,
    DIAGRAM_MITIGATION_FLOW,
    DIAGRAM_TEMPERATURE_EFFECT,
} from './diagrams';
import './istqb-ct-genai-chapter3-risk-management.css';

export const metadata: Metadata = {
    title: 'CT-GenAI 第3章：ソフトウェアテストにおける生成AIのリスク管理 初学者向けステップバイステップ解説',
    description: 'ISTQB CT-GenAI シラバス第3章「生成AIのリスク管理」（160分）の完全解説。ハルシネーション・推論エラー・バイアス・非決定性・プライバシー・セキュリティ・環境影響・規制標準を網羅。',
};

export default function CtGenAiChapter3Page() {
    return (
        <div className="ct-genai-chapter3-page">
            <div className="layout">
                <NavBar />
                <main className="main">
                    {/* Hero Section */}
                    <div className="hero" id="hero">
                        <div className="hero-eyebrow">
                            CT-GenAI｜Testing with Generative AI 認定試験 学習ガイド
                        </div>
                        <h1 className="hero-title">
                            CT-GenAI
                            第3章：ソフトウェアテストにおける生成AIのリスク管理　初学者向けステップバイステップ解説
                        </h1>
                        <div className="hero-meta-row">
                            <div className="hero-meta-item">
                                <span className="hmi-label">対象試験</span>
                                <span className="hmi-value">
                                    ISTQB® Certified Tester Specialist Level – Testing with Generative AI（CT-GenAI）
                                </span>
                            </div>
                            <div className="hero-meta-item">
                                <span className="hmi-label">対象シラバス</span>
                                <span className="hmi-value">
                                    Syllabus v1.1（2026/04/27 版）第3章「Managing Risks of Generative AI in Software Testing」（学習時間 160 分）
                                </span>
                            </div>
                            <div className="hero-meta-item">
                                <span className="hmi-label">作成日</span>
                                <span className="hmi-value">2026/09/24</span>
                            </div>
                        </div>
                    </div>

                    {/* Cat 0: 📌 この文書の読み方 */}
                    <h2 id="-この文書の読み方">📌 この文書の読み方</h2>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>記号</th>
                                    <th>意味</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>📌 <strong>シラバス記載</strong></td>
                                    <td>
                                        ISTQB 公式シラバス v1.1 に書かれている内容。試験に出る範囲です
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>💡 <strong>補足（シラバス外）</strong></td>
                                    <td>
                                        実務で役立つ追加知識やベストプラクティス。試験範囲外ですが、理解を深めるために載せています
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>🧪 <strong>動作トレース</strong></td>
                                    <td>具体例を1ステップずつ追いかけるセクション</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>📖 <strong>用語集</strong></td>
                                    <td>
                                        各セクション末尾に、そのセクションで登場した用語をまとめています
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>K1 / K2 / K3</td>
                                    <td>
                                        学習目標の認知レベル。K1＝思い出せる、K2＝説明できる、K3＝実際に使える
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-warning">
                        <div className="callout-header">
                            <span className="callout-icon">⚠️</span>
                            <span className="callout-label">重要な注意</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                <strong>重要</strong>：シラバス 0.6
                                節によると、試験の出題範囲は「序文・ハンズオン目標（HO）・付録を除く全セクション」です。本文書のハンズオン（HO）の解説は<strong>理解を助けるための練習</strong>であり、出題対象そのものではありません。ただし、HO
                                で体験する内容は K3 問題（実際に使えるか）の理解に直結します。
                            </p>
                        </div>
                    </div>
                    <hr />

                    {/* Cat 1: 1. 第3章の全体像 */}
                    <h2 id="1-第3章の全体像">1. 第3章の全体像</h2>
                    <p>
                        💡
                        この章では、第3章が「何の章で」「どんな順番で」学ぶのかを説明します。細かい内容に入る前にこの地図を頭に入れておくと、後の説明が整理しやすくなります。
                    </p>
                    <h3 id="11-この章は一言で言うと">1.1 この章は一言で言うと</h3>
                    <p>
                        <strong>
                            「生成AI（GenAI＝文章やコードを新しく作り出すAI）をテスト作業に使うと便利だが、間違い・情報漏えい・環境負荷・法規制という4種類のリスクがある。それぞれを見つけて、減らす方法を学ぶ章」
                        </strong>
                        です。
                    </p>
                    <p>たとえるなら、新人アシスタントを雇うときの心得です。</p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>新人アシスタントの例え</th>
                                    <th>対応する節</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>
                                        自信満々に間違ったことを言う／計算を間違える／偏った知識で判断する
                                        → <strong>チェックが必要</strong>
                                    </td>
                                    <td>3.1</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>
                                        社外秘の資料を不用意に外に持ち出す／悪意ある人にだまされる →{' '}
                                        <strong>情報管理のルールが必要</strong>
                                    </td>
                                    <td>3.2</td>
                                </tr>
                                <tr className="row-even">
                                    <td>
                                        仕事量が増えるほど電気代（＝環境への負荷）が増える →{' '}
                                        <strong>無駄な依頼を減らす</strong>
                                    </td>
                                    <td>3.3</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>
                                        会社や国の就業規則・法律を守る →{' '}
                                        <strong>ルールブックを知る</strong>
                                    </td>
                                    <td>3.4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="12-学習目標learning-objectives一覧">
                        1.2 学習目標（Learning Objectives）一覧
                    </h3>
                    <p>📌 <strong>シラバス記載</strong>（原文の意味を日本語に直しています）</p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>ID</th>
                                    <th>レベル</th>
                                    <th>学習目標</th>
                                    <th>本文書の場所</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>GenAI-3.1.1</td>
                                    <td>K1</td>
                                    <td>
                                        ハルシネーション・推論エラー・バイアスの{' '}
                                        <strong>定義を思い出せる</strong>
                                    </td>
                                    <td>2.1</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>GenAI-3.1.2</td>
                                    <td>K3</td>
                                    <td>
                                        LLM の出力の中の、ハルシネーション・推論エラー・バイアスを{' '}
                                        <strong>見つけられる</strong>
                                    </td>
                                    <td>2.2</td>
                                </tr>
                                <tr className="row-even">
                                    <td>GenAI-3.1.3</td>
                                    <td>K2</td>
                                    <td>
                                        ハルシネーション・推論エラー・バイアスの{' '}
                                        <strong>軽減方法を要約できる</strong>
                                    </td>
                                    <td>2.3</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>GenAI-3.1.4</td>
                                    <td>K1</td>
                                    <td>
                                        LLM の非決定的な振る舞いの <strong>軽減方法を思い出せる</strong>
                                    </td>
                                    <td>2.4</td>
                                </tr>
                                <tr className="row-even">
                                    <td>GenAI-3.2.1</td>
                                    <td>K2</td>
                                    <td>
                                        データプライバシーとセキュリティの{' '}
                                        <strong>主なリスクを説明できる</strong>
                                    </td>
                                    <td>3.1</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>GenAI-3.2.2</td>
                                    <td>K2</td>
                                    <td>
                                        データプライバシーと脆弱性の <strong>例を挙げられる</strong>
                                    </td>
                                    <td>3.2</td>
                                </tr>
                                <tr className="row-even">
                                    <td>GenAI-3.2.3</td>
                                    <td>K2</td>
                                    <td>
                                        プライバシー保護とセキュリティ強化の{' '}
                                        <strong>緩和策を要約できる</strong>
                                    </td>
                                    <td>3.3</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>GenAI-3.3.1</td>
                                    <td>K2</td>
                                    <td>
                                        タスクの特徴とモデルの使い方が{' '}
                                        <strong>エネルギー消費に与える影響を説明できる</strong>
                                    </td>
                                    <td>4.1</td>
                                </tr>
                                <tr className="row-even">
                                    <td>GenAI-3.4.1</td>
                                    <td>K1</td>
                                    <td>
                                        関連する AI 規制・標準・フレームワークの{' '}
                                        <strong>例を思い出せる</strong>
                                    </td>
                                    <td>5.1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        <strong>ハンズオン目標（HO）</strong>
                        ：HO-3.1.2a（ハルシネーション実験）、HO-3.1.2b（推論エラー実験）、HO-3.2.3（ケーススタディでリスクを見つける）、HO-3.3.1（シミュレータでエネルギーと CO₂ を計算）
                    </p>
                    <p>
                        <strong>シラバス指定キーワード</strong>（試験では K1 レベルで覚えておく必要があります）
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>種類</th>
                                    <th>キーワード</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>一般キーワード</td>
                                    <td>
                                        security（セキュリティ）、vulnerability（脆弱性）、data privacy（データプライバシー）
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>生成AI固有キーワード</td>
                                    <td>
                                        hallucination（ハルシネーション）、temperature（温度）、reasoning error（推論エラー）、bias（バイアス）、context manipulation（コンテキスト操作）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="13-第3章の全体マップ">1.3 第3章の全体マップ</h3>
                    <p>
                        この図は、第3章の4つの節と、それぞれの中で学ぶ主な項目の関係を表しています。上から下へ読み進めてください。
                    </p>
                    <div className="mermaid-container" data-diagram-id="mermaid-diagram-0">
                        <Mermaid chart={DIAGRAM_CH3_OVERVIEW} />
                    </div>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>「第3章」（一番上）：章全体。160 分の学習時間が割り当てられています。</li>
                        <li>
                            「3.1 出力の品質リスク」：AI の <strong>答えが間違っている</strong> 問題。テストの成果物（テストケースなど）の品質に直結します。
                        </li>
                        <li>
                            「3.2 プライバシーとセキュリティ」：AI に渡す <strong>データが漏れる</strong> 問題と、AI が <strong>攻撃される</strong> 問題。
                        </li>
                        <li>
                            「3.3 エネルギーと環境」：AI を使うと <strong>電力を消費し CO₂ が出る</strong> 問題。
                        </li>
                        <li>
                            「3.4 規制と標準」：上の3つのリスクに対処するための <strong>ルールブック</strong>（法律・規格・指針）。
                        </li>
                    </ul>

                    <h3 id="14-試験の基本情報">1.4 試験の基本情報</h3>
                    <p>📌 <strong>シラバス記載／ISTQB 公式ページ記載</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>項目</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>問題数</td>
                                    <td>40 問</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>合格点</td>
                                    <td>30 点（65%）／満点 46 点</td>
                                </tr>
                                <tr className="row-even">
                                    <td>試験時間</td>
                                    <td>60 分（英語が母国語でない場合は +25%）</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>受験の前提条件</td>
                                    <td>ISTQB® Certified Tester Foundation Level（CTFL）の取得</td>
                                </tr>
                                <tr className="row-even">
                                    <td>章別の学習時間</td>
                                    <td>
                                        第1章 100 分／第2章 365 分／<strong>第3章 160 分</strong>／第4章 110 分／第5章 80 分
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-practice">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">補足</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                満点が 46 点で問題数が 40 問なのは、問題ごとに配点が異なるためです（K レベルが高い問題ほど配点が高くなる設計）。配点の詳細は ISTQB Exam Structures and Rules 文書を確認してください。
                            </p>
                        </div>
                    </div>
                    <div className="callout-glossary">
                        <div className="callout-header">
                            <span className="callout-icon">📖</span>
                            <span className="callout-label">このセクションで登場した用語</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    <strong>GenAI（生成AI）</strong>：学習したパターンをもとに、文章・画像・コードなどを新しく作り出すAI
                                </li>
                                <li>
                                    <strong>LLM（大規模言語モデル）</strong>：大量の文章で学習した、文章を扱うのが得意なAIモデル
                                </li>
                                <li>
                                    <strong>テストウェア</strong>：テスト作業で作られる成果物の総称（テストケース、テストスクリプト、テストデータ、報告書など）
                                </li>
                                <li>
                                    <strong>K レベル</strong>：学習目標の難しさを表す段階。K1＝記憶、K2＝理解、K3＝応用
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    {/* Cat 2: 2. 3.1 ハルシネーション・推論エラー・バイアス */}
                    <h2 id="2-31-ハルシネーション推論エラーバイアス">
                        2. 3.1 ハルシネーション・推論エラー・バイアス
                    </h2>
                    <p>
                        💡
                        この章では、生成AIが出力する内容に含まれる3種類の「間違い」（ハルシネーション・推論エラー・バイアス）の意味、見つけ方、減らし方、そして毎回結果が変わる問題（非決定性）への対処を説明します。テストの成果物の品質を守る、第3章の中心的な節です。
                    </p>

                    <h3 id="20-なぜこの節が必要なのか">2.0 なぜこの節が必要なのか</h3>
                    <p>
                        📌 <strong>シラバス記載</strong>：LLM は「次に来そうな言葉（トークン）を予測して並べる」仕組みで動いています。そのため、出力は「<strong>もっともらしい</strong>」が「<strong>正しい</strong>」とは限りません。シラバス 1.1.2 節でも「plausible is not necessarily correct（もっともらしいことは、必ずしも正しいことを意味しない）」と述べられています。
                    </p>
                    <p>
                        さらに、LLM の出力は毎回少しずつ変わる（非決定的）ため、<strong>ある出力で間違いを直したように見えても、別の会話で同じ間違いが再発することがあります</strong>。だからこそ「人が確認する仕組み」と「間違いを減らす工夫」の両方が必要になります。
                    </p>

                    <h3 id="21-genai-311--k13つの間違いの定義">
                        2.1 【GenAI-3.1.1 / K1】3つの「間違い」の定義
                    </h3>
                    <p>📌 <strong>シラバス記載</strong></p>
                    <p>
                        この3つの違いを最初に押さえます。日常の例え話と合わせて覚えると、混同しにくくなります。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>用語</th>
                                    <th>定義（シラバスの意味）</th>
                                    <th>日常の例え</th>
                                    <th>テスト現場での具体例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td><strong>ハルシネーション</strong>（hallucination＝幻覚）</td>
                                    <td>事実と異なる、またはタスクに無関係な内容を出力すること</td>
                                    <td>
                                        知らないことでも自信満々に「あの店は駅の北口にあるよ」と作り話をする人
                                    </td>
                                    <td>
                                        存在しない受け入れ基準を確認するテストケースを作る／動かないテストスクリプトを作る／架空のテストケースを作る
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td><strong>推論エラー</strong>（reasoning error）</td>
                                    <td>
                                        原因と結果、条件分岐、段階的な問題解決といった<strong>論理の筋道</strong>を取り違え、間違った結論に至ること
                                    </td>
                                    <td>
                                        電卓を使わずに暗算して、途中の桁を間違える人。式の形は正しく見えるのに答えがずれる
                                    </td>
                                    <td>
                                        テスト計画やテストケースの優先順位付けで、リスクの計算や依存関係の判断を間違える
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td><strong>バイアス</strong>（bias＝偏り）</td>
                                    <td>
                                        学習データに含まれていた偏りが原因で、特定の種類の情報・進め方・前提を優先した出力になること
                                    </td>
                                    <td>
                                        片寄った内容の教科書だけで勉強した人。他の考え方が視野に入らない
                                    </td>
                                    <td>
                                        英語データ中心の学習で、日本語や他言語の観点が少ないテストデータになる／非機能テスト（性能・使いやすさなど）が抜け落ちる
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p><strong>押さえどころ</strong>（シラバスの記述）</p>
                    <ul>
                        <li>
                            推論エラーの背景：LLM は人間のような<strong>真の論理的推論をしているのではなく、パターンの照合</strong>に頼っています。そのため数学的な推論などで筋の通らない結果を出すことがあります。
                        </li>
                        <li>
                            3つとも、<strong>「学習データの性質」と「トランスフォーマー（transformer＝LLM の基本構造）の限界」</strong>から生まれます。
                        </li>
                        <li>
                            影響を受けやすいテスト作業の例：
                            <ul>
                                <li>
                                    ハルシネーション → テストケース生成、テストスクリプト生成、受け入れ基準のレビュー
                                </li>
                                <li>
                                    推論エラー → <strong>テスト計画</strong>、<strong>テストケースの優先順位付け</strong>
                                </li>
                                <li>
                                    バイアス → <strong>テストデータ生成</strong>、<strong>受け入れ基準の改善</strong>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h4 id="3つの間違いの関係図">3つの間違いの関係図</h4>
                    <p>
                        この図は、3つの間違いがどこから生まれ、テストの成果物にどう影響するかを表しています。左から右へ読み進めてください。
                    </p>
                    <div className="mermaid-container" data-diagram-id="mermaid-diagram-1">
                        <Mermaid chart={DIAGRAM_THREE_MISTAKES_RELATION} />
                    </div>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>
                            「学習データの性質」「トランスフォーマーの限界」：3つの間違いの<strong>共通の原因</strong>。
                        </li>
                        <li>
                            「LLM の仕組み」：次のトークンを確率で予測する仕組み。ここから「もっともらしいが正しいとは限らない」出力が生まれます。
                        </li>
                        <li>
                            「ハルシネーション／推論エラー／バイアス」：出力に現れる3つの<strong>症状</strong>。
                        </li>
                        <li>
                            「テストウェアの品質低下」：症状が積み重なった結果、テストケースなどの成果物が<strong>期待に届かない</strong>状態。
                        </li>
                    </ul>

                    <h4 id="試験で問われやすいポイントk1">試験で問われやすいポイント（K1）</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>出題パターン</th>
                                    <th>正解の考え方</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>
                                        「存在しない受け入れ基準を検証するテストケースを生成した」はどれか
                                    </td>
                                    <td>ハルシネーション</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>「リスク値の掛け算を間違えて優先順位が逆転した」はどれか</td>
                                    <td>推論エラー</td>
                                </tr>
                                <tr className="row-even">
                                    <td>「テストデータの氏名が英語圏の名前ばかりだった」はどれか</td>
                                    <td>バイアス</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>これらのリスクが直りにくい理由は何か</td>
                                    <td>
                                        非決定的な振る舞いのため、ある出力で直っても別の会話で再発しうる
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-glossary">
                        <div className="callout-header">
                            <span className="callout-icon">📖</span>
                            <span className="callout-label">このセクションで登場した用語</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    <strong>ハルシネーション</strong>：AI が事実と異なる、または無関係な内容をそれらしく出力すること
                                </li>
                                <li>
                                    <strong>推論エラー</strong>：AI が論理の筋道（原因と結果、条件分岐、段階的な計算など）を取り違えること
                                </li>
                                <li>
                                    <strong>バイアス</strong>：学習データの偏りから生じる、出力の偏り
                                </li>
                                <li>
                                    <strong>トークン</strong>：LLM が文章を処理するときの最小単位（文字、単語、単語の一部など）
                                </li>
                                <li>
                                    <strong>トランスフォーマー</strong>：LLM の土台になっているニューラルネットワークの構造
                                </li>
                                <li>
                                    <strong>非決定的</strong>：同じ入力でも毎回同じ出力になるとは限らない性質
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    <h3 id="22-genai-312--k3llm-の出力から3つの間違いを見つける">
                        2.2 【GenAI-3.1.2 / K3】LLM の出力から3つの間違いを見つける
                    </h3>
                    <p>
                        💡
                        この章では、間違いを見つけるための具体的な方法を説明します。K3（実際に使える）レベルなので、「この出力にはどの間違いが含まれているか」を判断する練習問題が出題されやすい部分です。
                    </p>
                    <h4 id="なぜ見つける力が必要なのか">なぜ「見つける力」が必要なのか</h4>
                    <p>
                        📌 <strong>シラバス記載</strong>：LLM を使ったテストでは、AI が作った成果物をそのまま信じると、間違ったテストが実行され、<strong>本当の不具合を見逃す</strong>恐れがあります。そこで、人によるレビューと自動検証を組み合わせて、間違いを発見します。
                    </p>
                    <h4 id="検出方法の一覧">検出方法の一覧</h4>
                    <p>📌 <strong>シラバス記載</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>対象</th>
                                    <th>検出方法</th>
                                    <th>内容</th>
                                    <th>例え話</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td><strong>ハルシネーション</strong></td>
                                    <td>① クロス検証（cross-verification）</td>
                                    <td>
                                        AI の出力を、既存の文書・要件・既知のシステムの動作と<strong>突き合わせる</strong>。自動ツールで参照元と照合することもできる
                                    </td>
                                    <td>新人が書いた議事録を、録音や資料と照らし合わせる</td>
                                </tr>
                                <tr className="row-odd">
                                    <td></td>
                                    <td>② ドメイン専門家への相談</td>
                                    <td>
                                        該当分野の専門家（SME＝Subject Matter Expert）に内容の正確さを確認してもらう。自動化では見落とすニュアンスを拾える
                                    </td>
                                    <td>専門医が診断書を確認する</td>
                                </tr>
                                <tr className="row-even">
                                    <td></td>
                                    <td>③ 一貫性チェック（consistency check）</td>
                                    <td>
                                        出力同士や、既知の情報との間で<strong>矛盾がない</strong>かを確認する
                                    </td>
                                    <td>
                                        同じ報告書の1ページ目と5ページ目で数字が食い違っていないか見る
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td><strong>推論エラー</strong></td>
                                    <td>① 論理的検証（logical validation）</td>
                                    <td>
                                        出力の論理の流れ（一貫性・筋道・構造化された推論）が正しいかをレビューで確認する。複雑なケースは人の判断が必要
                                    </td>
                                    <td>数学の答案の途中式を1行ずつ確認する</td>
                                </tr>
                                <tr className="row-even">
                                    <td></td>
                                    <td>② 出力のテスト（output testing）</td>
                                    <td>
                                        生成されたテストケースやテストスクリプトを<strong>実際にテスト対象に対して実行</strong>して結果を確認する。部分的または完全に自動化できる
                                    </td>
                                    <td>料理のレシピを、実際に作って味見する</td>
                                </tr>
                                <tr className="row-odd">
                                    <td><strong>バイアス</strong></td>
                                    <td>① 生成物の代表性の確認</td>
                                    <td>
                                        テストコードや合成テストデータが、<strong>定義したテスト戦略とカバレッジ要件を公平・正確に反映</strong>しているかをレビューする
                                    </td>
                                    <td>クラス全員の意見が入っているかを名簿と照らして確認する</td>
                                </tr>
                                <tr className="row-even">
                                    <td></td>
                                    <td>② テストタイプの偏りの確認</td>
                                    <td>
                                        例えば、<strong>非機能テストが少ない</strong>など、特定のテストタイプが不足していないかを評価する
                                    </td>
                                    <td>「味」ばかりで「衛生」の検査が抜けていないか確認する</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-note">
                        <div className="callout-header">
                            <span className="callout-icon">📌</span>
                            <span className="callout-label">シラバスの補足</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                <strong>重要な条件</strong>：これらの検出方法をどこまで深く実施するかは、<strong>そのテスト作業で間違いが起きた場合のリスクの大きさ</strong>に応じて決めます（シラバス 3.1.2 節末尾）。リスクが小さい作業は軽い確認、リスクが大きい作業は厳しい確認、というリスクベースの考え方です。
                            </p>
                        </div>
                    </div>

                    <h4 id="検出の判断フロー">検出の判断フロー</h4>
                    <p>
                        この図は、LLM の出力を受け取ってから、どの検出方法を選ぶかの考え方を表しています。上から下へ読み進めてください。
                    </p>
                    <div className="mermaid-container" data-diagram-id="mermaid-diagram-2">
                        <Mermaid chart={DIAGRAM_DETECTION_FLOW} />
                    </div>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>
                            「間違いが起きた場合の影響は大きいか」（ひし形）：<strong>リスク判定</strong>。影響が大きいほど検証を厚くします（シラバスの考え方）。
                        </li>
                        <li>
                            「要件や仕様と食い違う内容があるか」：ハルシネーションの検出。要件・仕様と<strong>突き合わせる</strong>のがポイントです。
                        </li>
                        <li>
                            「計算や優先順位や条件分岐に誤りがあるか」：推論エラーの検出。<strong>論理を確認</strong>するか、<strong>実際に動かして</strong>確かめます。
                        </li>
                        <li>
                            「データやテストタイプに偏りがあるか」：バイアスの検出。<strong>全体の偏り</strong>を見る視点です。
                        </li>
                        <li>
                            「修正して再生成または人が直す」：見つけた間違いは、プロンプトを直して再生成するか、人が直接修正します。
                        </li>
                    </ul>

                    <div className="callout-trace callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">🧪</span>
                            <span className="callout-label">動作トレース：ログイン機能のテストケース生成</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                <strong>題材</strong>：次のユーザーストーリーとテスト基盤情報を LLM に渡して、テストケースを作らせた場面です。
                            </p>
                            <ul>
                                <li>
                                    ユーザーストーリー：「ユーザーとして、メールアドレスとパスワードでログインしたい」
                                </li>
                                <li>
                                    受け入れ基準 AC-1：正しいメールアドレスとパスワードでログインできる
                                </li>
                                <li>
                                    受け入れ基準 AC-2：パスワードを5回連続で間違えると、アカウントが30分間ロックされる
                                </li>
                            </ul>
                            <p>LLM が出力した内容を1つずつ追い、どの間違いに当たるかを判定します。</p>
                            <div className="table-scroll">
                                <table>
                                    <thead>
                                        <tr className="row-header">
                                            <th>手順</th>
                                            <th>LLM の出力内容</th>
                                            <th>判定</th>
                                            <th>見つけた方法</th>
                                            <th>対処</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row-even">
                                            <td>1</td>
                                            <td>TC-01：正しい認証情報でログインできることを確認する</td>
                                            <td>問題なし</td>
                                            <td>受け入れ基準 AC-1 と一致</td>
                                            <td>そのまま採用</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>2</td>
                                            <td>
                                                TC-05：<strong>2段階認証コードを入力してログインできる</strong>ことを確認する
                                            </td>
                                            <td><strong>ハルシネーション</strong></td>
                                            <td>
                                                クロス検証：AC-1・AC-2 に2段階認証の記述が<strong>無い</strong>
                                            </td>
                                            <td>
                                                削除。「存在しない要件」を検証するテストは、テストの信頼を損なう
                                            </td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>3</td>
                                            <td>
                                                優先順位の計算：「リスク値＝発生可能性 3 × 影響度 5 ＝ <strong>8</strong>」
                                            </td>
                                            <td><strong>推論エラー</strong></td>
                                            <td>
                                                論理的検証：3 × 5 は 15。<strong>掛け算が足し算になっている</strong>
                                            </td>
                                            <td>計算し直し（正しくは 15）。優先順位の順番も再確認</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>4</td>
                                            <td>
                                                TC-09：「4回失敗後にログインできる」「5回失敗でロック」の境界値テスト
                                            </td>
                                            <td>問題なし</td>
                                            <td>
                                                出力のテスト：実際に実行して期待どおりになることを確認
                                            </td>
                                            <td>採用</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>5</td>
                                            <td>
                                                テストデータ：ユーザー名が <code>John Smith</code>、<code>Alice Brown</code> など<strong>英語圏の名前のみ</strong>
                                            </td>
                                            <td><strong>バイアス</strong></td>
                                            <td>
                                                代表性の確認：日本語名、長い名前、全角文字、記号を含む名前が無い
                                            </td>
                                            <td>
                                                「日本語名・全角・最大文字数」のデータを追加するよう指示して再生成
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>6</td>
                                            <td>
                                                全10ケースがすべて機能テスト。性能・アクセシビリティ（利用しやすさ）の観点がゼロ
                                            </td>
                                            <td><strong>バイアス</strong>（テストタイプの偏り）</td>
                                            <td>テストタイプの偏りの確認</td>
                                            <td>非機能テストの観点を追加するようプロンプトで指示</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                <strong>このトレースから分かること</strong>：1つの出力の中に、<strong>3種類の間違いが混ざる</strong>ことがあります。1つの方法では見つけきれないため、複数の検出方法を組み合わせます。
                            </p>
                        </div>
                    </div>

                    <h4 id="ハンズオン目標の追体験ho-312a--ho-312bh1">
                        ハンズオン目標の追体験（HO-3.1.2a / HO-3.1.2b：H1）
                    </h4>
                    <p>📌 <strong>シラバス記載</strong>（手順は学習用に整理）</p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>HO</th>
                                    <th>ねらい</th>
                                    <th>進め方</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td><strong>HO-3.1.2a</strong>（ハルシネーションの実験）</td>
                                    <td>
                                        少なくとも2種類の LLM に、<strong>与えていない基準を勝手に付け足す</strong>状況を起こさせ、プロンプトの違いが与える影響を観察する
                                    </td>
                                    <td>
                                        ① 与える情報を意図的に少なくしたユーザーストーリーを用意する → ② 同じプロンプトを2つの LLM に送る → ③ 元の情報に無い受け入れ基準が出ていないかを確認する → ④ プロンプトを変えて（例：「情報に無いことは書かない」）差を比べる
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td><strong>HO-3.1.2b</strong>（推論エラーの実験）</td>
                                    <td>
                                        テスト計画（工数見積もり、優先順位付け）のように<strong>複雑な入力を持つ問題</strong>で、LLM の限界を体験する
                                    </td>
                                    <td>
                                        ① 正解が分かっている問題（例：優先順位付け）を用意する → ② LLM、SLM（小さい言語モデル）、推論モデルの3タイプで解かせる → ③ 正解と比べる → ④ プロンプトを変えて改善を試みる
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout-practice callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">補足：実務で使える「検出」のベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <div className="table-scroll">
                                <table>
                                    <thead>
                                        <tr className="row-header">
                                            <th>場面</th>
                                            <th>ベストプラクティス</th>
                                            <th>理由</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row-even">
                                            <td>チャットボットで単発にテストケースを作る</td>
                                            <td>
                                                生成結果の各ケースに「<strong>根拠となる要件 ID</strong>」を併記させ、根拠が無いケースは「要件外」と書かせる
                                            </td>
                                            <td>
                                                ハルシネーションを見つけやすくなる（クロス検証の手間が減る）
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>テストスクリプトを生成する</td>
                                            <td>
                                                生成後は<strong>必ず実際に実行</strong>してから採用する
                                            </td>
                                            <td>
                                                出力のテストが、推論エラーとハルシネーションの両方を最も確実に見つけられる
                                            </td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>優先順位や見積もりの計算を任せる</td>
                                            <td>
                                                計算部分は AI に任せきりにせず、<strong>表計算ソフトやコードで再計算</strong>する
                                            </td>
                                            <td>
                                                LLM は計算が苦手（パターン照合のため）。人が検算できる形で出力させる
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>テストデータ生成</td>
                                            <td>
                                                生成後に「言語・長さ・文字種・境界値」の<strong>チェックリスト</strong>で偏りを確認する
                                            </td>
                                            <td>バイアスは見た目では気づきにくい</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>LLM 搭載のテストツールを使う</td>
                                            <td>
                                                ツールが出す結果にも<strong>同じ検証</strong>をかける。ツール内部でも LLM が使われている
                                            </td>
                                            <td>
                                                シラバス 4.1.3 節でも、エージェントはハルシネーション・推論エラー・バイアスの問題を引き継ぐと明記
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="callout-glossary">
                        <div className="callout-header">
                            <span className="callout-icon">📖</span>
                            <span className="callout-label">このセクションで登場した用語</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    <strong>クロス検証</strong>：AI の出力を既存の文書や既知の動作と突き合わせて、食い違いを見つけること
                                </li>
                                <li>
                                    <strong>SME（ドメイン専門家）</strong>：その分野に詳しい人。AI が間違えやすい細かい点を判断できる
                                </li>
                                <li>
                                    <strong>一貫性チェック</strong>：出力同士や既知の情報との間に矛盾が無いかを確認すること
                                </li>
                                <li>
                                    <strong>論理的検証</strong>：出力の筋道が正しいか（原因と結果、条件の順序など）を確認すること
                                </li>
                                <li>
                                    <strong>出力のテスト</strong>：生成したテストケースやスクリプトを実際に実行して確認すること
                                </li>
                                <li>
                                    <strong>SLM（小規模言語モデル）</strong>：LLM より小さく軽い言語モデル。特定の用途向けに使われる
                                </li>
                                <li>
                                    <strong>境界値</strong>：条件が切り替わる境目の値（例：5回目でロック→ 4回と5回が境界）
                                </li>
                                <li>
                                    <strong>非機能テスト</strong>：機能以外の品質（性能、使いやすさ、セキュリティなど）を確認するテスト
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    <h3 id="23-genai-313--k2ハルシネーション推論エラーバイアスの軽減方法">
                        2.3 【GenAI-3.1.3 / K2】ハルシネーション・推論エラー・バイアスの軽減方法
                    </h3>
                    <p>
                        💡
                        この章では、間違いを<strong>そもそも起きにくくする</strong>ための5つの技法を説明します。前の 2.2 節が「起きた間違いを見つける」話だったのに対し、ここは「起きる前に減らす」話です。
                    </p>
                    <h4 id="なぜ入力を整えると間違いが減るのか">
                        なぜ「入力」を整えると間違いが減るのか
                    </h4>
                    <p>
                        📌 <strong>シラバス記載</strong>：これらの問題は、<strong>プロンプトが適切に設計されていない</strong>とき、または<strong>そのテスト作業に必要な文脈（コンテキスト）の情報が足りない</strong>ときに、起きやすくなります。
                    </p>
                    <p>
                        たとえるなら、初めて来たアルバイトに「いい感じに片付けておいて」とだけ頼むと、意図と違う片付け方をされるのと同じです。<strong>頼み方（プロンプト）と渡す情報（コンテキスト）を整える</strong>ことが、最初の対策になります。
                    </p>

                    <h4 id="5つの軽減技法">5つの軽減技法</h4>
                    <p>📌 <strong>シラバス記載</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>技法</th>
                                    <th>内容</th>
                                    <th>例え話</th>
                                    <th>関連する章</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>1</td>
                                    <td>
                                        <strong>完全なコンテキストを与える</strong>（Provide complete context）
                                    </td>
                                    <td>
                                        プロンプトに、そのタスクに必要な情報をすべて含める（役割・文脈・指示・入力データ・制約・出力形式）
                                    </td>
                                    <td>
                                        引っ越し業者に、荷物の量・階数・エレベーターの有無を全部伝える
                                    </td>
                                    <td>2.1.1 節</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>2</td>
                                    <td>
                                        <strong>プロンプトを扱いやすい単位に分ける</strong>（Divide prompts into manageable segments）
                                    </td>
                                    <td>
                                        複雑な依頼を小さなステップに分け（プロンプトチェイニング）、<strong>各ステップの出力を確認してから次へ進む</strong>。推論エラーを早く見つけられる
                                    </td>
                                    <td>料理を「下ごしらえ→炒める→味付け」と分け、各段階で味見する</td>
                                    <td>2.1.2 節</td>
                                </tr>
                                <tr className="row-even">
                                    <td>3</td>
                                    <td>
                                        <strong>明確で解釈しやすいデータ形式を使う</strong>（Use clear, interpretable data formats）
                                    </td>
                                    <td>
                                        あいまいで解釈しにくい形式を避け、構造化されたシンプルな形式にする
                                    </td>
                                    <td>手書きのメモより、罫線のある表の方が読み間違えにくい</td>
                                    <td>―</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>4</td>
                                    <td>
                                        <strong>タスクに適した GenAI モデルを選ぶ</strong>（Select the appropriate GenAI model）
                                    </td>
                                    <td>そのタスク向けに学習されたモデルを使う</td>
                                    <td>家の修理は、料理人ではなく大工さんに頼む</td>
                                    <td>5.1.3 節</td>
                                </tr>
                                <tr className="row-even">
                                    <td>5</td>
                                    <td>
                                        <strong>モデル間で結果を比較する</strong>（Compare results across models）
                                    </td>
                                    <td>
                                        同じプロンプトを複数の LLM に送り、出力を比べて誤りを見つけ、信頼できる結果を選ぶ
                                    </td>
                                    <td>医療の「セカンドオピニオン」</td>
                                    <td>―</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        <strong>追加の対策</strong>：📌 シラバスは「第4章で、LLM の結果を良くする補完的な技法として <strong>RAG（Retrieval-Augmented Generation＝検索拡張生成）</strong> と <strong>ファインチューニング</strong> を学ぶ」と述べています。第3章の試験では「これらが軽減策として第4章で扱われる」ことを押さえておけば十分です。
                    </p>

                    <h4 id="軽減技法の使い方フロー">軽減技法の使い方フロー</h4>
                    <p>
                        この図は、テスト作業を LLM に依頼するときに、5つの技法をどの順に使うかを表しています。上から下へ読み進めてください。
                    </p>
                    <div className="mermaid-container" data-diagram-id="mermaid-diagram-3">
                        <Mermaid chart={DIAGRAM_MITIGATION_FLOW} />
                    </div>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>
                            「技法1」：役割・文脈・指示・入力データ・制約・出力形式の<strong>6要素</strong>（シラバス 2.1.1 節）をそろえます。
                        </li>
                        <li>
                            「技法3」：表・箇条書き・JSON など、<strong>曖昧さの少ない形式</strong>にします。
                        </li>
                        <li>
                            「技法4」：タスクの難しさに応じて、<strong>推論モデル</strong>か<strong>通常の指示調整モデル</strong>かを選びます（シラバス 1.1.3 節）。
                        </li>
                        <li>
                            「技法2」（ステップ実行のループ）：<strong>1ステップごとに確認</strong>し、問題があればそのステップだけやり直します。
                        </li>
                        <li>
                            「技法5」：最後に<strong>別のモデル</strong>にも同じ依頼をして結果を比べ、食い違いがあれば調べます。
                        </li>
                    </ul>

                    <div className="callout-practice callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">補足：プロンプトの改善例（Before / After）</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                <strong>Before（情報不足で、ハルシネーションが起きやすい依頼）</strong>
                            </p>
                            <pre>
                                <code className="language-text">
                                    <div className="code-line">ログイン機能のテストケースを作ってください。</div>
                                </code>
                            </pre>
                            <p><strong>After（技法1・3を適用した依頼。6要素を含める）</strong></p>
                            <pre>
                                <code className="language-text">
                                    <div className="code-line"># 役割</div>
                                    <div className="code-line">あなたは ISTQB の考え方に沿ってテスト設計をするテストアナリストです。</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"># コンテキスト</div>
                                    <div className="code-line">対象は Web アプリのログイン画面です。ユーザーはメールアドレスとパスワードで認証します。</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"># 指示</div>
                                    <div className="code-line">下の受け入れ基準だけを根拠に、機能テストケースを作成してください。</div>
                                    <div className="code-line">各テストケースには、根拠となる受け入れ基準の ID を必ず書いてください。</div>
                                    <div className="code-line">受け入れ基準に無い内容は作らず、不明点は最後に「質問」として列挙してください。</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"># 入力データ</div>
                                    <div className="code-line">AC-1：正しいメールアドレスとパスワードでログインできる</div>
                                    <div className="code-line">AC-2：パスワードを5回連続で間違えると、アカウントが30分間ロックされる</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"># 制約</div>
                                    <div className="code-line">- 2段階認証やソーシャルログインなど、上記に無い機能は含めない</div>
                                    <div className="code-line">- 境界値分析を使い、4回・5回・6回の失敗を検証する</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"># 出力形式</div>
                                    <div className="code-line">表形式（列：TC-ID、根拠AC、前提条件、手順、期待結果）</div>
                                </code>
                            </pre>
                            <p>
                                <strong>なぜ Before/After で結果が変わるのか</strong>：After では ①根拠 ID を書かせることで、<strong>あとから突き合わせやすく</strong>（クロス検証しやすく）なり、②「無いことは作らない」と明示することで<strong>ハルシネーションが起きにくく</strong>なり、③具体的な技法（境界値分析）を指定することで<strong>推論の方向が定まります</strong>。
                            </p>
                            <blockquote className="inline-note">
                                <p>
                                    補足：この書き方は、あくまで<strong>リスクを下げる工夫</strong>です。プロンプトを工夫しても間違いがゼロになるわけではないため、2.2 節の検出方法とセットで使います。
                                </p>
                            </blockquote>
                        </div>
                    </div>

                    <div className="callout-glossary">
                        <div className="callout-header">
                            <span className="callout-icon">📖</span>
                            <span className="callout-label">このセクションで登場した用語</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    <strong>コンテキスト</strong>：AI が答えを作るときの背景情報（対象システム、機能の説明、参考資料など）
                                </li>
                                <li>
                                    <strong>プロンプトチェイニング</strong>：複雑な依頼を複数のプロンプトに分け、結果を確認しながら順に進める方法
                                </li>
                                <li>
                                    <strong>構造化データ</strong>：表や JSON のように、項目と値が整理された形式のデータ
                                </li>
                                <li>
                                    <strong>指示調整モデル（instruction-tuned LLM）</strong>：人の指示に沿って答えるよう追加訓練された LLM
                                </li>
                                <li>
                                    <strong>推論モデル（reasoning LLM）</strong>：段階的な思考が必要な問題に強くなるよう調整された LLM
                                </li>
                                <li>
                                    <strong>RAG</strong>：AI が回答を作る前に社内文書などを検索して、その内容を材料に加える仕組み（第4章で詳述）
                                </li>
                                <li>
                                    <strong>ファインチューニング</strong>：既存のモデルを特定の用途向けに追加学習させること（第4章で詳述）
                                </li>
                                <li>
                                    <strong>境界値分析</strong>：条件の境目の値を重点的にテストする技法
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    <h3 id="24-genai-314--k1非決定的な振る舞いnon-deterministic-behaviorへの対処">
                        2.4 【GenAI-3.1.4 / K1】非決定的な振る舞い（Non-Deterministic Behavior）への対処
                    </h3>
                    <p>
                        💡 この章では、「同じ質問でも答えが毎回変わる」LLM の性質と、その変動を小さくする2つの設定（temperature と random seed）を説明します。K1（思い出せる）レベルなので、<strong>用語と効果を正確に覚える</strong>ことが大切です。
                    </p>
                    <h4 id="なぜ答えが毎回変わるのか">なぜ答えが毎回変わるのか</h4>
                    <p>
                        📌 <strong>シラバス記載</strong>：LLM は、次に来る言葉を<strong>確率にしたがってサンプリング（選択）</strong>して文章を作ります。このため、<strong>同じ入力を与えても出力が変わる</strong>ことがあります。特に<strong>長い出力ほど</strong>変動しやすくなります。完全に同じ結果になることを<strong>保証することはできません</strong>が、変動を減らす方法があります。
                    </p>
                    <p>
                        たとえるなら、<strong>サイコロを振って次の言葉を選ぶ</strong>イメージです。サイコロの振れ幅が大きいと毎回違う結果になり、振れ幅を小さくすると同じ目が出やすくなります。
                    </p>

                    <h4 id="2つの軽減策">2つの軽減策</h4>
                    <p>📌 <strong>シラバス記載</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>設定</th>
                                    <th>何をするか</th>
                                    <th>効果</th>
                                    <th>注意点（トレードオフ）</th>
                                    <th>例え話</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td><strong>temperature（温度）を下げる</strong></td>
                                    <td>
                                        生成時に、次の言葉の<strong>確率分布を狭める</strong>（可能性の高い言葉に集中させる）
                                    </td>
                                    <td>ランダム性が減り、<strong>出力が安定</strong>する</td>
                                    <td>
                                        <strong>創造性や多様性が下がり</strong>、出力が単調・繰り返しになりやすい（決まりきった答えになる）
                                    </td>
                                    <td>レシピどおりに作る（安定）↔︎ アレンジを加える（多様）</td>
                                </tr>
                                <tr className="row-odd">
                                    <td><strong>random seed（乱数シード）を固定する</strong></td>
                                    <td>
                                        乱数を作る元の値（シード）を固定し、<strong>同じ乱数の並び</strong>を使わせる
                                    </td>
                                    <td><strong>再現性</strong>が上がる</td>
                                    <td>
                                        すべての LLM 実装で使えるわけではない。<strong>完全な再現は保証されない</strong>
                                    </td>
                                    <td>くじ引きの結果を、同じ並び順の名簿で毎回再現する</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-note">
                        <div className="callout-header">
                            <span className="callout-icon">📌</span>
                            <span className="callout-label">シラバスの補足</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                シラバスは「seed を設定できる LLM 実装もある（Some LLM implementations allow...）」と表現しています。<strong>すべてのモデル・サービスで使えるとは限りません</strong>。試験では「すべての LLM で seed を固定できる」という記述は誤りになります。
                            </p>
                        </div>
                    </div>
                    <p>
                        さらにシラバスは、非決定的な振る舞いによるハルシネーションや推論エラーのリスクを減らすため、<strong>出力の検証の一部を自動化</strong>して、構造化された一貫性のある評価プロセスにすることを勧めています。
                    </p>

                    <h4 id="temperature-の効果の図">temperature の効果の図</h4>
                    <p>
                        この図は、temperature を変えたときの出力の違いを表しています。左から右へ読み進めてください。
                    </p>
                    <div className="mermaid-container" data-diagram-id="mermaid-diagram-4">
                        <Mermaid chart={DIAGRAM_TEMPERATURE_EFFECT} />
                    </div>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>
                            「temperature を低くする」：確率の高い言葉に集中させる設定。<strong>安定・再現性重視</strong>。
                        </li>
                        <li>
                            「temperature を高くする」：確率の低い言葉も選ばれやすくなる設定。<strong>多様性・発想重視</strong>。
                        </li>
                        <li>
                            「向く作業」の2つ：これは 💡 補足（実務上の目安）です。シラバスは「低くすると安定するが多様性が下がる」というトレードオフまでを述べています。
                        </li>
                    </ul>

                    <div className="callout-trace callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">🧪</span>
                            <span className="callout-label">動作トレース：同じプロンプトを5回実行して安定度を測る</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                <strong>題材</strong>：「ログインの受け入れ基準 AC-2 から、境界値テストケースを3つ出して」というプロンプトを5回実行し、出力が何種類できるかを数えます。
                            </p>
                            <div className="table-scroll">
                                <table>
                                    <thead>
                                        <tr className="row-header">
                                            <th>設定</th>
                                            <th>1回目</th>
                                            <th>2回目</th>
                                            <th>3回目</th>
                                            <th>4回目</th>
                                            <th>5回目</th>
                                            <th>出力の種類数</th>
                                            <th>読み取れること</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row-even">
                                            <td>temperature 高め、seed なし</td>
                                            <td>A</td>
                                            <td>B</td>
                                            <td>C</td>
                                            <td>A&apos;</td>
                                            <td>D</td>
                                            <td>5種類</td>
                                            <td>毎回違う。再現性が低く、比較や自動検証が難しい</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>temperature 低め、seed なし</td>
                                            <td>A</td>
                                            <td>A</td>
                                            <td>A&apos;</td>
                                            <td>A</td>
                                            <td>A</td>
                                            <td>2種類</td>
                                            <td>かなり安定するが、わずかな揺れが残る</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>temperature 低め、seed 固定</td>
                                            <td>A</td>
                                            <td>A</td>
                                            <td>A</td>
                                            <td>A</td>
                                            <td>A</td>
                                            <td>1種類</td>
                                            <td>
                                                最も再現しやすい。ただし<strong>保証はされない</strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <blockquote className="inline-note">
                                <p>
                                    表の A〜D は「出力の内容」を表す記号で、<strong>学習用に作った例</strong>です。実際の結果はモデルやサービスにより異なります。
                                </p>
                            </blockquote>
                            <p>
                                <strong>注意点</strong>：この結果は「今日のこの環境」での傾向です。提供側でモデルや基盤設定が更新されると、同じ seed でも結果が変わることがあります（下の補足を参照）。
                            </p>
                        </div>
                    </div>

                    <div className="callout-practice callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">補足：コードで確認する（OpenAI API の例）</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                OpenAI の公式ドキュメントでは、<code>seed</code> を指定すると「<strong>ベストエフォート（できる限り）</strong>でも決定的にサンプリングする」と説明され、<strong>決定性は保証されない</strong>ことが明記されています。また、バックエンドの構成が変わったかを知るため、応答の <code>system_fingerprint</code> を確認するよう案内されています。
                            </p>
                            <pre>
                                <code className="language-python">
                                    <div className="code-line">from openai import OpenAI  # OpenAI 公式 SDK。他社の API でも考え方は同じ</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"># API キーは環境変数から自動で読み込まれる。</div>
                                    <div className="code-line"># コードに直接書くと、リポジトリ経由で漏えいする恐れがあるため。</div>
                                    <div className="code-line">client = OpenAI()</div>
                                    <div className="code-line"></div>
                                    <div className="code-line">PROMPT = &quot;受け入れ基準 AC-2 から、境界値のテストケースを3つ、表形式で作成してください。&quot;</div>
                                    <div className="code-line">RUNS = 5  # 1回だけでは偶然か傾向か判別できないため、複数回実行して傾向を見る</div>
                                    <div className="code-line"></div>
                                    <div className="code-line">def run_once(seed: int):</div>
                                    <div className="code-line">    response = client.chat.completions.create(</div>
                                    <div className="code-line">        model=&quot;YOUR_MODEL_NAME&quot;,   # 利用するモデル名に置き換える</div>
                                    <div className="code-line">        messages=[&#123;&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: PROMPT&#125;],</div>
                                    <div className="code-line">        temperature=0.0,           # ランダム性を最小にするため。ただし多様性は下がる</div>
                                    <div className="code-line">        seed=seed,                 # 同じ seed を使い、再現性を高めるため</div>
                                    <div className="code-line">    )</div>
                                    <div className="code-line">    # system_fingerprint：サーバー側の構成を表す識別子。</div>
                                    <div className="code-line">    # これが変わると、同じ seed でも結果が変わりうるため一緒に記録する。</div>
                                    <div className="code-line">    return response.choices[0].message.content, response.system_fingerprint</div>
                                    <div className="code-line"></div>
                                    <div className="code-line">results = [run_once(seed=42) for _ in range(RUNS)]</div>
                                    <div className="code-line"></div>
                                    <div className="code-line">unique_outputs = &#123;text for text, _ in results&#125;    # 重複を除いて、出力が何種類できたかを数える</div>
                                    <div className="code-line">fingerprints = &#123;fp for _, fp in results&#125;          # 構成が途中で変わっていないかを確認する</div>
                                    <div className="code-line"></div>
                                    <div className="code-line">print(f&quot;出力の種類数：&#123;len(unique_outputs)&#125; / &#123;RUNS&#125;&quot;)</div>
                                    <div className="code-line">print(f&quot;system_fingerprint の種類数：&#123;len(fingerprints)&#125;&quot;)</div>
                                </code>
                            </pre>
                            <p><strong>コードを読むときのポイント</strong>：</p>
                            <ul>
                                <li>
                                    <code>temperature=0.0</code> と <code>seed=42</code> の2つが、シラバスで述べられている2つの軽減策に対応しています。
                                </li>
                                <li>
                                    <strong>すべてのモデルでこれらのパラメータが指定できるとは限りません</strong>。モデルや提供元ごとにドキュメントを確認してください（例：一部のモデルでは temperature が固定、または指定できないことがあります）。
                                </li>
                                <li>
                                    出力を<strong>複数回実行して統計的に見る</strong>のは、シラバス 2.3.1 節の「非決定的な性質があるため、評価指標は統計的に意味のあるデータに基づく必要がある」という考え方にも合っています。
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="callout-practice callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">補足：3.1 全体のサービス・機能別ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <div className="table-scroll">
                                <table>
                                    <thead>
                                        <tr className="row-header">
                                            <th>使っているもの</th>
                                            <th>主なリスク</th>
                                            <th>ベストプラクティス</th>
                                            <th>根拠</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row-even">
                                            <td>
                                                <strong>AI チャットボット</strong>（ブラウザ上で対話する形式）
                                            </td>
                                            <td>ハルシネーション、対話ごとの出力のぶれ</td>
                                            <td>
                                                6要素のプロンプトを使う／根拠 ID を併記させる／<strong>1ステップごとに人が確認</strong>して次に進む（プロンプトチェイニング）
                                            </td>
                                            <td>シラバス 1.2.2、2.1.2、3.1.3</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>
                                                <strong>LLM 搭載のテストツール</strong>（API 連携で自動化）
                                            </td>
                                            <td>
                                                自動処理のため、間違いが<strong>そのまま後続に流れる</strong>
                                            </td>
                                            <td>
                                                出力の<strong>自動検証</strong>（形式チェック、実行テスト）を組み込む／重要なタスクは<strong>人の承認を挟む</strong>
                                            </td>
                                            <td>シラバス 3.1.4、4.1.3</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>
                                                <strong>API のパラメータ</strong>（temperature・seed）
                                            </td>
                                            <td>再現性の不足</td>
                                            <td>
                                                temperature を下げ、seed を固定し、応答の構成識別子も記録する。<strong>完全な再現は保証されない</strong>前提で評価する
                                            </td>
                                            <td>シラバス 3.1.4、OpenAI Cookbook</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td><strong>推論モデル／通常モデルの選択</strong></td>
                                            <td>複雑な計算・優先順位付けでの推論エラー</td>
                                            <td>
                                                論理的な多段階の作業は推論モデルを検討し、結果は必ず<strong>検算</strong>する
                                            </td>
                                            <td>シラバス 1.1.3、3.1.3</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td><strong>複数モデル</strong></td>
                                            <td>1つのモデル特有の誤り</td>
                                            <td>
                                                重要なタスクは<strong>複数モデルで結果を比較</strong>
                                            </td>
                                            <td>シラバス 3.1.3</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td><strong>RAG／ファインチューニング</strong>（第4章）</td>
                                            <td>社内情報の不足による誤り</td>
                                            <td>
                                                最新の仕様・要件を検索して渡す（RAG）／専門領域の用語に合わせる（ファインチューニング）
                                            </td>
                                            <td>シラバス 3.1.3、4.1.2、4.2.1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <h4 id="31-節の試験ポイントまとめ">3.1 節の試験ポイントまとめ</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>観点</th>
                                    <th>覚えること</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>定義（K1）</td>
                                    <td>
                                        ハルシネーション＝事実と異なる／無関係。推論エラー＝論理の取り違え。バイアス＝学習データ由来の偏り
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>検出（K3）</td>
                                    <td>
                                        ハルシネーション＝クロス検証・専門家・一貫性。推論エラー＝論理検証・実行して確認。バイアス＝代表性・テストタイプの偏り
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>軽減（K2）</td>
                                    <td>
                                        完全なコンテキスト／プロンプトを分割／明確なデータ形式／適切なモデル／複数モデル比較
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>非決定性（K1）</td>
                                    <td>
                                        temperature を下げる（多様性は下がる）／seed を固定（使える実装のみ・完全再現は保証されない）
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>前提</td>
                                    <td>検出の深さは<strong>リスクの大きさ</strong>で決める</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-glossary">
                        <div className="callout-header">
                            <span className="callout-icon">📖</span>
                            <span className="callout-label">このセクションで登場した用語</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    <strong>サンプリング</strong>：確率にもとづいて、次の言葉の候補から1つを選ぶこと
                                </li>
                                <li>
                                    <strong>temperature（温度）</strong>：次の言葉を選ぶときのランダムさの強さを決める設定。低いほど安定し、高いほど多様
                                </li>
                                <li><strong>確率分布</strong>：各候補の「選ばれやすさ」の並び</li>
                                <li>
                                    <strong>random seed（乱数シード）</strong>：乱数を作る元の値。固定すると同じ乱数の並びになる
                                </li>
                                <li><strong>再現性</strong>：同じ条件で同じ結果を再び得られること</li>
                                <li>
                                    <strong>system_fingerprint</strong>：OpenAI の API 応答に含まれる、サーバー側の構成を表す識別子（参考：他社では別名の場合があります）
                                </li>
                                <li>
                                    <strong>ベストエフォート</strong>：できる限り努力するが、結果を保証しないこと
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </main>
            </div>
        </div>
    );
}
