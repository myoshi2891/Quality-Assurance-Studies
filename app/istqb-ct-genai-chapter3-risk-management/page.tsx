import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_CH3_OVERVIEW } from './diagrams';
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
                </main>
            </div>
        </div>
    );
}
