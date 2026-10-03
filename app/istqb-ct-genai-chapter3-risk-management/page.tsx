import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import ChecklistCard, { type ChecklistItem } from './ChecklistCard';
import Mermaid from '../../components/Mermaid';
import {
    DIAGRAM_CH3_OVERVIEW,
    DIAGRAM_THREE_MISTAKES_RELATION,
    DIAGRAM_DETECTION_FLOW,
    DIAGRAM_MITIGATION_FLOW,
    DIAGRAM_TEMPERATURE_EFFECT,
    DIAGRAM_PRIVACY_SECURITY_MAP,
    DIAGRAM_ATTACK_VECTORS,
    DIAGRAM_ENVIRONMENT_SELECTION_FLOW,
    DIAGRAM_ENERGY_CONSUMPTION,
    DIAGRAM_REGULATIONS_MAP,
} from './diagrams';
import './istqb-ct-genai-chapter3-risk-management.css';

const CHECKLIST_ITEMS_A: ChecklistItem[] = [
    { id: 'cl-a-1', label: 'プロンプトに、役割・文脈・指示・入力データ・制約・出力形式を含めているか' },
    { id: 'cl-a-2', label: '複雑な依頼を分割し、各ステップの出力を確認しているか' },
    { id: 'cl-a-3', label: '生成物に「根拠（要件 ID など）」を併記させ、突き合わせているか' },
    { id: 'cl-a-4', label: '生成されたテストスクリプトを、実際に実行してから採用しているか' },
    { id: 'cl-a-5', label: '計算・優先順位付けの結果を、人または別の手段で検算しているか' },
    { id: 'cl-a-6', label: 'テストデータの偏り（言語・長さ・文字種・境界値）と、テストタイプの偏り（非機能テスト）を確認しているか' },
    { id: 'cl-a-7', label: 'temperature や seed の設定と、使ったモデル名を記録しているか' },
    { id: 'cl-a-8', label: '重要なタスクは、複数モデルで結果を比較しているか' },
];

const CHECKLIST_ITEMS_B: ChecklistItem[] = [
    { id: 'cl-b-1', label: '「入力してよいデータ・いけないデータ」のルールを、チームに周知しているか' },
    { id: 'cl-b-2', label: '機密情報・個人情報を、匿名化または仮名化してから渡しているか' },
    { id: 'cl-b-3', label: '必要最小限のデータだけを渡しているか' },
    { id: 'cl-b-4', label: 'データの機密度に応じて、運用環境（商用サービス／安全なクラウド／自社インフラ）を選んでいるか' },
    { id: 'cl-b-5', label: '通信と保存が暗号化され、アクセス権限が絞られているか' },
    { id: 'cl-b-6', label: '生成コードをレビューし、隔離環境で実行してから使っているか' },
    { id: 'cl-b-7', label: 'エージェントなどに、最小権限を与え、重要な操作に人の承認を挟んでいるか' },
    { id: 'cl-b-8', label: '定期的なセキュリティ監査と脆弱性評価を実施しているか' },
    { id: 'cl-b-9', label: 'セキュリティ担当・法務・CTO・CISO などを関与させているか' },
];

const CHECKLIST_ITEMS_C: ChecklistItem[] = [
    { id: 'cl-c-1', label: '依頼を整理してから送り、不要な試行を減らしているか' },
    { id: 'cl-c-2', label: '画像生成など消費の大きい機能を、必要な場合に限定しているか' },
    { id: 'cl-c-3', label: '軽いタスクに、小さなモデルを使い分けているか' },
    { id: 'cl-c-4', label: '利用回数やトークン量を記録し、概算しているか' },
];

const CHECKLIST_ITEMS_D: ChecklistItem[] = [
    { id: 'cl-d-1', label: '自社の GenAI 利用に関係する規制・標準・指針を、一覧にしているか' },
    { id: 'cl-d-2', label: '最新動向を確認する担当者と頻度を決めているか' },
];

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
                            <pre className="code-block">
                                <code className="language-text">
                                    <div className="code-line">ログイン機能のテストケースを作ってください。</div>
                                </code>
                            </pre>
                            <p><strong>After（技法1・3を適用した依頼。6要素を含める）</strong></p>
                            <pre className="code-block">
                                <code className="language-text">
                                    <div className="code-line"><span className="code-keyword"># 役割</span></div>
                                    <div className="code-line">あなたは ISTQB の考え方に沿ってテスト設計をするテストアナリストです。</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"><span className="code-keyword"># コンテキスト</span></div>
                                    <div className="code-line">対象は Web アプリのログイン画面です。ユーザーはメールアドレスとパスワードで認証します。</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"><span className="code-keyword"># 指示</span></div>
                                    <div className="code-line">下の受け入れ基準だけを根拠に、機能テストケースを作成してください。</div>
                                    <div className="code-line">各テストケースには、根拠となる受け入れ基準の ID を必ず書いてください。</div>
                                    <div className="code-line">受け入れ基準に無い内容は作らず、不明点は最後に「質問」として列挙してください。</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"><span className="code-keyword"># 入力データ</span></div>
                                    <div className="code-line"><span className="code-func">AC-1</span>：正しいメールアドレスとパスワードでログインできる</div>
                                    <div className="code-line"><span className="code-func">AC-2</span>：パスワードを5回連続で間違えると、アカウントが30分間ロックされる</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"><span className="code-keyword"># 制約</span></div>
                                    <div className="code-line">- 2段階認証やソーシャルログインなど、上記に無い機能は含めない</div>
                                    <div className="code-line">- 境界値分析を使い、4回・5回・6回の失敗を検証する</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"><span className="code-keyword"># 出力形式</span></div>
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
                            <pre className="code-block">
                                <code className="language-python">
                                    <div className="code-line"><span className="code-keyword">from</span> openai <span className="code-keyword">import</span> OpenAI  <span className="code-comment"># OpenAI 公式 SDK。他社の API でも考え方は同じ</span></div>
                                    <div className="code-line"></div>
                                    <div className="code-line"><span className="code-comment"># API キーは環境変数から自動で読み込まれる。</span></div>
                                    <div className="code-line"><span className="code-comment"># コードに直接書くと、リポジトリ経由で漏えいする恐れがあるため。</span></div>
                                    <div className="code-line">client = <span className="code-func">OpenAI</span>()</div>
                                    <div className="code-line"></div>
                                    <div className="code-line">PROMPT = <span className="code-string">&quot;受け入れ基準 AC-2 から、境界値のテストケースを3つ、表形式で作成してください。&quot;</span></div>
                                    <div className="code-line">RUNS = <span className="code-number">5</span>  <span className="code-comment"># 1回だけでは偶然か傾向か判別できないため、複数回実行して傾向を見る</span></div>
                                    <div className="code-line"></div>
                                    <div className="code-line"><span className="code-keyword">def</span> <span className="code-func">run_once</span>(seed: <span className="code-type">int</span>):</div>
                                    <div className="code-line">    response = client.chat.completions.<span className="code-func">create</span>(</div>
                                    <div className="code-line">        model=<span className="code-string">&quot;YOUR_MODEL_NAME&quot;</span>,   <span className="code-comment"># 利用するモデル名に置き換える</span></div>
                                    <div className="code-line">        messages=[&#123;<span className="code-string">&quot;role&quot;</span>: <span className="code-string">&quot;user&quot;</span>, <span className="code-string">&quot;content&quot;</span>: PROMPT&#125;],</div>
                                    <div className="code-line">        temperature=<span className="code-number">0.0</span>,           <span className="code-comment"># ランダム性を最小にするため。ただし多様性は下がる</span></div>
                                    <div className="code-line">        seed=seed,                 <span className="code-comment"># 同じ seed を使い、再現性を高めるため</span></div>
                                    <div className="code-line">    )</div>
                                    <div className="code-line">    <span className="code-comment"># system_fingerprint：サーバー側の構成を表す識別子。</span></div>
                                    <div className="code-line">    <span className="code-comment"># これが変わると、同じ seed でも結果が変わりうるため一緒に記録する。</span></div>
                                    <div className="code-line">    <span className="code-keyword">return</span> response.choices[<span className="code-number">0</span>].message.content, response.system_fingerprint</div>
                                    <div className="code-line"></div>
                                    <div className="code-line">results = [<span className="code-func">run_once</span>(seed=<span className="code-number">42</span>) <span className="code-keyword">for</span> _ <span className="code-keyword">in</span> <span className="code-func">range</span>(RUNS)]</div>
                                    <div className="code-line"></div>
                                    <div className="code-line">unique_outputs = &#123;text <span className="code-keyword">for</span> text, _ <span className="code-keyword">in</span> results&#125;    <span className="code-comment"># 重複を除いて、出力が何種類できたかを数える</span></div>
                                    <div className="code-line">fingerprints = &#123;fp <span className="code-keyword">for</span> _, fp <span className="code-keyword">in</span> results&#125;          <span className="code-comment"># 構成が途中で変わっていないかを確認する</span></div>
                                    <div className="code-line"></div>
                                    <div className="code-line"><span className="code-func">print</span>(f<span className="code-string">&quot;出力の種類数：&#123;len(unique_outputs)&#125; / &#123;RUNS&#125;&quot;</span>)</div>
                                    <div className="code-line"><span className="code-func">print</span>(f<span className="code-string">&quot;system_fingerprint の種類数：&#123;len(fingerprints)&#125;&quot;</span>)</div>
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

                    <h2 id="3-32-データプライバシーとセキュリティのリスク">
                        3. 3.2 データプライバシーとセキュリティのリスク
                    </h2>
                    <p>
                        💡 この章では、生成AIをテストに使うときの<strong>情報漏えい（プライバシー</strong>）と<strong>攻撃（セキュリティ</strong>）のリスクを3段階（リスクの種類 → 攻撃の具体例 → 緩和策）で説明します。3.1 が「答えの質」の話だったのに対し、ここは「データと守り」の話です。
                    </p>
                    <h3 id="30-なぜこの節が必要なのか">3.0 なぜこの節が必要なのか</h3>
                    <p>
                        📌 <strong>シラバス記載</strong>：生成AIは大量のデータを処理し、その中には<strong>機密情報や個人を特定できる情報（PII＝Personally Identifiable Information</strong>）が含まれる場合があります。また、LLM を組み込んだテスト基盤は、<strong>攻撃の入り口</strong>にもなります。データ保護が弱いと、情報漏えい・不正アクセス・機密データの露出につながります。
                    </p>
                    <p>
                        テストの現場では、本番データのコピー、不具合の再現ログ、顧客情報を含む画面キャプチャなどを、つい AI に貼り付けたくなる場面があります。<strong>「便利だから貼る」が、最も起きやすい情報漏えいの入口</strong>です。
                    </p>
                    <hr />

                    <h3 id="31-genai-321--k2データプライバシーとセキュリティの主なリスク">
                        3.1 【GenAI-3.2.1 / K2】データプライバシーとセキュリティの主なリスク
                    </h3>
                    <p>📌 <strong>シラバス記載</strong></p>
                    <h4 id="プライバシーの3つの懸念">プライバシーの3つの懸念</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>懸念</th>
                                    <th>内容</th>
                                    <th>テスト現場の例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>1</td>
                                    <td>
                                        <strong>意図しないデータの露出</strong>（Unintentional data exposure）
                                    </td>
                                    <td>
                                        GenAI が出力の中に、<strong>うっかり機密情報を含めて</strong>しまう
                                    </td>
                                    <td>
                                        AI が生成したテストデータに、実在する顧客のメールアドレスが混ざる
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>2</td>
                                    <td>
                                        <strong>データ利用の制御不能</strong>（Lack of control over data usage）
                                    </td>
                                    <td>
                                        GenAI ツールが、利用者の<strong>明確な同意や制御なしに</strong>機密データを保存・処理し、不正利用や不正アクセスにつながりうる
                                    </td>
                                    <td>
                                        本番ログを貼った内容が、提供元でどう保存・利用されるか分からない
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>3</td>
                                    <td><strong>コンプライアンスリスク</strong>（Compliance risks）</td>
                                    <td>
                                        <strong>GDPR（一般データ保護規則：Regulation (EU) 2016/679</strong>）などのデータ保護規則を守らずに GenAI ツールを使うと、法的な紛争になりうる
                                    </td>
                                    <td>
                                        EU 居住者の個人データを、必要な根拠なく外部の AI サービスに送る
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="セキュリティの3つのリスク">セキュリティの3つのリスク</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>リスク</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>1</td>
                                    <td><strong>テスト基盤への攻撃</strong></td>
                                    <td>
                                        LLM を使ったテスト基盤が、データ侵害や不正アクセスなどの攻撃を受けやすい
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>2</td>
                                    <td><strong>LLM の脆弱性の悪用</strong></td>
                                    <td>
                                        悪意のある人が LLM の弱点（後述の「操作型攻撃」）を悪用して、振る舞いを変えたり、機密情報を引き出したりする
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>3</td>
                                    <td><strong>悪意ある入力データ</strong></td>
                                    <td>
                                        攻撃者が意図的に有害な入力データを与え、LLM を誤誘導して、<strong>正確性やセキュリティを損なわせる</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="プライバシーとセキュリティの整理図">プライバシーとセキュリティの整理図</h4>
                    <p>
                        この図は、テストで生成AIを使うときの「データの流れ」と、リスクが発生する場所を表しています。左から右へ読み進めてください。
                    </p>
                    <div className="mermaid-container" data-diagram-id="mermaid-diagram-5">
                        <Mermaid chart={DIAGRAM_PRIVACY_SECURITY_MAP} />
                    </div>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>
                            「テスター」「フロントエンド」「バックエンド」「LLM」「データ源」：LLM を組み込んだテスト基盤の<strong>基本構成</strong>（シラバス 4.1.1 節の構成）。
                        </li>
                        <li>
                            点線の矢印（リスク1〜4）：<strong>どの場所でどのリスクが発生するか</strong>を表しています。人による入力（リスク1）、外部サービスの扱い（リスク2）、基盤への侵入（リスク3）、悪意ある入力（リスク4）です。
                        </li>
                    </ul>
                    <div className="callout-glossary">
                        <div className="callout-header">
                            <span className="callout-icon">📖</span>
                            <span className="callout-label">このセクションで登場した用語</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    <strong>PII（個人を特定できる情報）</strong>：氏名、メールアドレス、電話番号、住所など、個人を識別できる情報
                                </li>
                                <li>
                                    <strong>GDPR</strong>：EU の個人データ保護に関する規則。個人データの処理に、適法性や目的の限定などのルールを定める
                                </li>
                                <li>
                                    <strong>コンプライアンス</strong>：法律や社内ルール、契約を守ること
                                </li>
                                <li>
                                    <strong>データ侵害</strong>：データが外部の第三者に不正に見られたり持ち出されたりすること
                                </li>
                                <li>
                                    <strong>セキュリティ（security）</strong>：不正アクセスや攻撃から、システムやデータを守ること
                                </li>
                                <li>
                                    <strong>脆弱性（vulnerability）</strong>：攻撃に悪用されうるシステムの弱点
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    <h3 id="32-genai-322--k2データプライバシーと脆弱性の例攻撃ベクトル4種">
                        3.2 【GenAI-3.2.2 / K2】データプライバシーと脆弱性の例：攻撃ベクトル4種
                    </h3>
                    <p>
                        💡 この章では、シラバスの表にある<strong>4種類の攻撃ベクトル（attack vector＝攻撃の入り口・経路</strong>）を説明します。表の名称と例は、そのまま試験で問われやすい部分です。
                    </p>
                    <h4 id="4つの攻撃ベクトル">4つの攻撃ベクトル</h4>
                    <p>📌 <strong>シラバス記載</strong>（原文の表の意味を日本語にしています）</p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>攻撃ベクトル</th>
                                    <th>内容</th>
                                    <th>シラバスの例</th>
                                    <th>例え話</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td><strong>コンテキスト操作</strong>（Context Manipulation）</td>
                                    <td>
                                        機密の学習データを<strong>引き出そうとするリクエスト</strong>を送る
                                    </td>
                                    <td>
                                        LLM のコンテキストウィンドウ（一度に扱える量）を超える<strong>長いプロンプト</strong>で AI の記憶を過負荷にし、学習データの断片を<strong>うっかり漏らさせる</strong>。機密情報の露出につながる可能性がある
                                    </td>
                                    <td>長い雑談で相手を疲れさせ、ぽろっと秘密を話させる</td>
                                </tr>
                                <tr className="row-odd">
                                    <td><strong>リクエスト操作</strong>（Request manipulation）</td>
                                    <td>AI の出力を<strong>乱すデータ</strong>を混入させる</td>
                                    <td>
                                        画像を使って AI を<strong>別の文脈に誘導</strong>し、受け入れ基準について<strong>ハルシネーションを引き起こす</strong>
                                    </td>
                                    <td>道案内の看板をすり替えて、道に迷わせる</td>
                                </tr>
                                <tr className="row-even">
                                    <td><strong>データポイズニング</strong>（Data poisoning）</td>
                                    <td><strong>学習データを操作</strong>する（毒を混ぜる）</td>
                                    <td>
                                        AI が作ったテストレポートを評価する際に、<strong>偽の評価</strong>を与える
                                    </td>
                                    <td>レシピ本に、間違ったレシピをこっそり紛れ込ませる</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>
                                        <strong>悪意のあるコード生成</strong>（Malicious code generation）
                                    </td>
                                    <td>
                                        LLM を操作して、使用中に<strong>バックドア</strong>（外部コマンド呼び出しなど）を生成させる
                                    </td>
                                    <td>
                                        特定の<strong>悪意のある IP アドレス</strong>と通信経路を開くコードを生成させる
                                    </td>
                                    <td>頼んだ設計図に、こっそり秘密の裏口を書き足される</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="攻撃ベクトルがどこに入り込むかの図">攻撃ベクトルがどこに入り込むかの図</h4>
                    <p>
                        この図は、4つの攻撃ベクトルが、テストの作業の流れのどこに入り込むかを表しています。上から下へ読み進めてください。
                    </p>
                    <div className="mermaid-container" data-diagram-id="mermaid-diagram-6">
                        <Mermaid chart={DIAGRAM_ATTACK_VECTORS} />
                    </div>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>
                            「入力段階」「処理段階」「出力段階」「評価段階」：テストで生成AIを使うときの<strong>作業の流れ</strong>。
                        </li>
                        <li>
                            左側の4つの攻撃：<strong>それぞれの段階に入り込みやすい攻撃</strong>。ただし、実際の攻撃は複数の段階にまたがることもあります。この割り当ては覚えやすさのための整理です。
                        </li>
                    </ul>
                    <div className="callout-warning">
                        <div className="callout-header">
                            <span className="callout-icon">⚠️</span>
                            <span className="callout-label">重要な注意</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                <strong>暗記のコツ</strong>：「<strong>コ</strong>ンテキスト＝<strong>引き出す</strong>」「<strong>リ</strong>クエスト＝<strong>乱す</strong>（誤誘導）」「<strong>デ</strong>ータポイズニング＝<strong>汚す</strong>（学習・評価）」「<strong>悪</strong>意コード＝<strong>裏口</strong>」と、動詞1つで覚えると混同しにくくなります。
                            </p>
                        </div>
                    </div>
                    <div className="callout-practice callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">
                                補足：OWASP Top 10 for LLM Applications との対応
                            </span>
                        </div>
                        <div className="callout-body">
                            <p>
                                シラバスの4種類は代表例です。実務では、OWASP（Open Worldwide Application Security Project）が公開する「<strong>OWASP Top 10 for LLM Applications 2025</strong>」が、より網羅的な整理として広く参照されます（<strong>試験範囲外</strong>）。
                            </p>
                            <div className="table-scroll">
                                <table>
                                    <thead>
                                        <tr className="row-header">
                                            <th>シラバスの攻撃ベクトル</th>
                                            <th>OWASP LLM Top 10（2025）で近いもの</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row-even">
                                            <td>コンテキスト操作</td>
                                            <td>
                                                LLM02 機密情報の漏えい（Sensitive Information Disclosure）、LLM07 システムプロンプトの漏えい
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>リクエスト操作</td>
                                            <td>
                                                LLM01 プロンプトインジェクション（Prompt Injection）
                                            </td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>データポイズニング</td>
                                            <td>
                                                LLM04 データとモデルのポイズニング（Data and Model Poisoning）
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>悪意のあるコード生成</td>
                                            <td>
                                                LLM05 不適切な出力の扱い（Improper Output Handling）、LLM06 過剰な権限付与（Excessive Agency）
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <blockquote className="inline-note">
                                <p>
                                    この対応は<strong>学習のための目安</strong>です。攻撃の分類は、資料により切り口が異なります。
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
                                    <strong>攻撃ベクトル</strong>：攻撃者がシステムに入り込む経路や手段
                                </li>
                                <li>
                                    <strong>コンテキストウィンドウ</strong>：LLM が一度に扱える情報量の上限（トークン数で表す）
                                </li>
                                <li>
                                    <strong>データポイズニング</strong>：学習データや評価データに悪意あるデータを混ぜて、AI の振る舞いを歪めること
                                </li>
                                <li>
                                    <strong>バックドア</strong>：正規の認証を通らずに侵入できる、不正な裏口
                                </li>
                                <li>
                                    <strong>プロンプトインジェクション</strong>：入力文に命令を紛れ込ませて、AI の指示を上書きしようとする攻撃（OWASP の用語）
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    <h3 id="33-genai-323--k2プライバシー保護とセキュリティ強化の緩和策">
                        3.3 【GenAI-3.2.3 / K2】プライバシー保護とセキュリティ強化の緩和策
                    </h3>
                    <p>
                        💡 この章では、リスクを減らすための<strong>基本のデータ保護策 4つ</strong>と、<strong>追加の緩和策 5つ</strong>を説明します。組み合わせて使うのが前提です。
                    </p>
                    <h4 id="前提規制は-genai-を禁止しているわけではない">
                        前提：規制は GenAI を「禁止」しているわけではない
                    </h4>
                    <p>
                        📌 <strong>シラバス記載</strong>：GDPR のようなデータ保護規則は、GenAI の利用を<strong>明示的に制限してはいません</strong>が、データを集める・処理する・保存する際の<strong>適法性</strong>や<strong>目的の制限</strong>といった<strong>安全策（セーフガード</strong>）を定めており、それが「できること」を制限することがあります。
                    </p>

                    <h4 id="基本のデータ保護策4つ">基本のデータ保護策（4つ）</h4>
                    <p>📌 <strong>シラバス記載</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>対策</th>
                                    <th>内容</th>
                                    <th>例え話</th>
                                    <th>テスト現場の実践例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>1</td>
                                    <td><strong>データ最小化</strong>（Data minimization）</td>
                                    <td>
                                        法的に許される場合を除き<strong>機密データを処理しない</strong>。必要最小限の<strong>機密でないデータ</strong>だけを使う
                                    </td>
                                    <td>旅行には必要な荷物だけ持っていく</td>
                                    <td>ログ全体ではなく、不具合の再現に必要な数行だけを渡す</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>2</td>
                                    <td>
                                        <strong>匿名化・仮名化</strong>（Anonymization / Pseudonymization）
                                    </td>
                                    <td>
                                        機密情報を、<strong>個人を特定できないデータ</strong>で<strong>隠す・置き換える</strong>
                                    </td>
                                    <td>名札を外す（匿名化）／あだ名に替える（仮名化）</td>
                                    <td>氏名・メール・電話番号を、ダミー値やトークンに置換</td>
                                </tr>
                                <tr className="row-even">
                                    <td>3</td>
                                    <td>
                                        <strong>安全なデータ保存と通信</strong>（Secure data storage and transmission）
                                    </td>
                                    <td>
                                        強力な<strong>暗号化</strong>と<strong>アクセス制御</strong>を実装する
                                    </td>
                                    <td>金庫に保管し、鍵を持つ人だけが開けられる</td>
                                    <td>送信は暗号化通信、保存先は権限を絞る</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>4</td>
                                    <td><strong>教育・方針</strong>（Resources training）</td>
                                    <td>
                                        GenAI を責任を持って使うための<strong>研修プログラムとポリシー</strong>を整え、倫理的な実践を促し、リスクを減らす
                                    </td>
                                    <td>入社時の安全教育</td>
                                    <td>「入力してよいデータ・いけないデータ」を一覧にして周知</td>
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
                                <strong>匿名化と仮名化の違い</strong>（シラバスは「機密情報を、個人を特定できないデータで隠す・置き換える」と述べています）：
                            </p>
                            <ul>
                                <li>
                                    <strong>匿名化</strong>：元に戻せない形にする（例：<code>山田太郎</code> → <code>[名前]</code>）。
                                </li>
                                <li>
                                    <strong>仮名化</strong>：別の識別子に置き換えるが、対応表があれば元に戻せる（例：<code>山田太郎</code> → <code>USER_001</code>、対応表は別管理）。
                                    　この区別は一般的な定義です。シラバスは両者をまとめて「隠す・置き換える」と述べており、試験では「<strong>機密情報をそのまま渡さず、置き換える」という理解</strong>があれば十分です。
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h4 id="追加の緩和策5つ">追加の緩和策（5つ）</h4>
                    <p>📌 <strong>シラバス記載</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>対策</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>1</td>
                                    <td><strong>生成物の体系的なレビュー</strong></td>
                                    <td>
                                        <strong>人による評価</strong>が、GenAI が作るテスト作業の品質と正確性に欠かせない
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>2</td>
                                    <td><strong>別の LLM との比較による評価</strong></td>
                                    <td>複数の LLM に同じ作業をさせ、回答を比べて評価する</td>
                                </tr>
                                <tr className="row-even">
                                    <td>3</td>
                                    <td><strong>安全な運用環境の選択</strong></td>
                                    <td>
                                        機密度に応じて選ぶ：<strong>LLM 提供元の商用の安全なサービスを使う</strong>／<strong>安全なクラウドで LLM を動かす</strong>／<strong>自社のインフラに LLM をインストールする</strong>
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>4</td>
                                    <td><strong>定期的なセキュリティ監査と脆弱性評価</strong></td>
                                    <td>GenAI システムの弱点を見つけて対処する</td>
                                </tr>
                                <tr className="row-even">
                                    <td>5</td>
                                    <td>
                                        <strong>最新のセキュリティのベストプラクティスの把握</strong>
                                    </td>
                                    <td>最新のガイドラインや技術に追いつく</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        <strong>組み合わせが前提</strong>：📌 シラバスは「これらの策は互いに補完的であり、データを守るには<strong>組み合わせが必要</strong>」と述べ、さらに、<strong>上級セキュリティエンジニア、法務担当、CTO、CISO（最高情報セキュリティ責任者）</strong>が組織にいる場合は、彼らを<strong>巻き込むことを強く推奨</strong>しています。
                    </p>

                    <h4 id="運用環境の選択フロー">運用環境の選択フロー</h4>
                    <p>
                        この図は、扱うデータの機密度に応じて、どの環境で LLM を動かすかを考えるときの判断の流れを表しています。上から下へ読み進めてください。
                    </p>
                    <div className="mermaid-container" data-diagram-id="mermaid-diagram-7">
                        <Mermaid chart={DIAGRAM_ENVIRONMENT_SELECTION_FLOW} />
                    </div>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>
                            「機密情報や個人情報を含むか」（ひし形）：<strong>最初の分岐</strong>。含まないなら悪影響が小さい一方、含むなら以降の判断に進みます。
                        </li>
                        <li>
                            「匿名化や仮名化で不要にできるか」：データ最小化・匿名化で、リスクそのものを<strong>取り除けないか</strong>を先に検討します。
                        </li>
                        <li>
                            「商用の安全なサービス／安全なクラウド／自社インフラ」：シラバスの<strong>3つの選択肢</strong>。右に行くほどコストと運用負担は大きくなりますが、管理は強くなります（💡 一般的な傾向）。
                        </li>
                        <li>
                            「人によるレビューと定期監査」：どの環境でも<strong>最終的に必要</strong>な共通の対策です。
                        </li>
                    </ul>
                    <div className="callout-practice">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">補足</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                この図の分岐条件は、<strong>学習のための整理</strong>です。実際の判断は、社内のセキュリティ方針や契約、各国の法律に従い、セキュリティ担当・法務担当と決めてください。
                            </p>
                        </div>
                    </div>

                    <div className="callout-trace callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">🧪</span>
                            <span className="callout-label">
                                動作トレース：本番ログを AI に貼り付けたい場面
                            </span>
                        </div>
                        <div className="callout-body">
                            <p>
                                <strong>題材</strong>：本番環境で起きた「支払い画面のエラー」の原因を、LLM に調べてもらいたい場面です。
                            </p>
                            <div className="table-scroll">
                                <table>
                                    <thead>
                                        <tr className="row-header">
                                            <th>手順</th>
                                            <th>行うこと</th>
                                            <th>対応する対策</th>
                                            <th>理由</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row-even">
                                            <td>1</td>
                                            <td>
                                                まず、社内の<strong>入力ルール</strong>を確認する。本番ログの外部サービス送信が許可されているか調べる
                                            </td>
                                            <td>教育・方針</td>
                                            <td>個人判断で送ると、ルール違反や規則違反になりうる</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>2</td>
                                            <td>
                                                ログ全体ではなく、<strong>エラーが起きた前後の数行だけ</strong>を抜き出す
                                            </td>
                                            <td>データ最小化</td>
                                            <td>渡す情報が少ないほど、漏えい時の被害が小さい</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>3</td>
                                            <td>
                                                氏名・メール・電話番号・カード番号などを<strong>置換</strong>する（下のコード例）
                                            </td>
                                            <td>匿名化・仮名化</td>
                                            <td>個人を特定できる情報を AI に渡さないため</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>4</td>
                                            <td>
                                                機密度が高ければ、<strong>商用の安全なサービス／安全なクラウド／自社環境</strong>から選ぶ
                                            </td>
                                            <td>安全な運用環境の選択</td>
                                            <td>データの扱われ方を、自分たちで制御しやすくするため</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>5</td>
                                            <td>
                                                AI の回答（原因の推測）を、<strong>実際のログや仕様と突き合わせて検証</strong>する
                                            </td>
                                            <td>生成物のレビュー</td>
                                            <td>ハルシネーションの可能性があるため（3.1 節と連動）</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>6</td>
                                            <td>
                                                提案された修正コードを<strong>そのまま本番に入れず</strong>、レビューとテストを経る
                                            </td>
                                            <td>レビュー／セキュリティ監査</td>
                                            <td>悪意のあるコード生成のリスクに備えるため</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="callout-practice callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">補足：仮名化のサンプルコード（Python）</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                <strong>なぜこのコードを示すのか</strong>：「データを渡す前に置き換える」という緩和策を、具体的な手順としてイメージできるようにするためです。<strong>簡易的な例</strong>であり、実務ではこの正規表現だけでは不十分です（氏名・住所などは検出できません）。
                            </p>
                            <pre className="code-block">
                                <code className="language-python">
                                    <div className="code-line"><span className="code-keyword">import</span> re</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"><span className="code-comment"># メールアドレスと、日本の一般的な電話番号（ハイフン区切り）を探すパターン。</span></div>
                                    <div className="code-line"><span className="code-comment"># 完全ではないため、実務では専用ツール（例：Microsoft Presidio）の利用も検討する。</span></div>
                                    <div className="code-line">EMAIL_PATTERN = re.<span className="code-func">compile</span>(<span className="code-string">r&quot;[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]&#123;2,&#125;&quot;</span>)</div>
                                    <div className="code-line">PHONE_PATTERN = re.<span className="code-func">compile</span>(<span className="code-string">r&quot;0\d&#123;1,4&#125;-\d&#123;1,4&#125;-\d&#123;4&#125;&quot;</span>)</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"><span className="code-keyword">def</span> <span className="code-func">pseudonymize</span>(text: <span className="code-type">str</span>):</div>
                                    <div className="code-line">    <span className="code-string">&quot;&quot;&quot;個人情報を仮の識別子に置き換え、元に戻すための対応表も返す。&quot;&quot;&quot;</span></div>
                                    <div className="code-line">    mapping = &#123;&#125;  <span className="code-comment"># 対応表。AI には送らず、自分たちの環境だけで保管するため</span></div>
                                    <div className="code-line"></div>
                                    <div className="code-line">    <span className="code-keyword">def</span> <span className="code-func">replace</span>(pattern, label, source):</div>
                                    <div className="code-line">        counter = <span className="code-number">0</span></div>
                                    <div className="code-line"></div>
                                    <div className="code-line">        <span className="code-keyword">def</span> <span className="code-func">_sub</span>(match):</div>
                                    <div className="code-line">            <span className="code-keyword">nonlocal</span> counter</div>
                                    <div className="code-line">            original = match.<span className="code-func">group</span>(<span className="code-number">0</span>)</div>
                                    <div className="code-line">            <span className="code-comment"># 同じ値には同じ識別子を割り当てる。</span></div>
                                    <div className="code-line">            <span className="code-comment"># 別の識別子にすると、「同一人物のエラー」という手がかりが失われるため。</span></div>
                                    <div className="code-line">            <span className="code-keyword">for</span> key, value <span className="code-keyword">in</span> mapping.<span className="code-func">items</span>():</div>
                                    <div className="code-line">                <span className="code-keyword">if</span> value == original:</div>
                                    <div className="code-line">                    <span className="code-keyword">return</span> key</div>
                                    <div className="code-line">            counter += <span className="code-number">1</span></div>
                                    <div className="code-line">            token = f<span className="code-string">&quot;[&#123;label&#125;_&#123;counter&#125;]&quot;</span></div>
                                    <div className="code-line">            mapping[token] = original</div>
                                    <div className="code-line">            <span className="code-keyword">return</span> token</div>
                                    <div className="code-line"></div>
                                    <div className="code-line">        <span className="code-keyword">return</span> pattern.<span className="code-func">sub</span>(_sub, source)</div>
                                    <div className="code-line"></div>
                                    <div className="code-line">    text = <span className="code-func">replace</span>(EMAIL_PATTERN, <span className="code-string">&quot;EMAIL&quot;</span>, text)</div>
                                    <div className="code-line">    text = <span className="code-func">replace</span>(PHONE_PATTERN, <span className="code-string">&quot;PHONE&quot;</span>, text)</div>
                                    <div className="code-line">    <span className="code-keyword">return</span> text, mapping</div>
                                    <div className="code-line"></div>
                                    <div className="code-line">raw_log = <span className="code-string">&quot;ERROR pay failed user=taro@example.com tel=03-1234-5678 retry user=taro@example.com&quot;</span></div>
                                    <div className="code-line">safe_log, table = <span className="code-func">pseudonymize</span>(raw_log)</div>
                                    <div className="code-line"></div>
                                    <div className="code-line"><span className="code-func">print</span>(safe_log)   <span className="code-comment"># AI に渡してよい形（個人情報を置換済み）</span></div>
                                    <div className="code-line"><span className="code-func">print</span>(table)      <span className="code-comment"># 手元にだけ残す対応表（AI には渡さない）</span></div>
                                </code>
                            </pre>
                            <p><strong>実行結果のイメージ</strong>：</p>
                            <div className="table-scroll">
                                <table>
                                    <thead>
                                        <tr className="row-header">
                                            <th>変数</th>
                                            <th>内容</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row-even">
                                            <td><code>safe_log</code></td>
                                            <td>
                                                <code>
                                                    ERROR pay failed user=[EMAIL_1] tel=[PHONE_1] retry user=[EMAIL_1]
                                                </code>
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td><code>table</code></td>
                                            <td>
                                                <code>[EMAIL_1]</code> → <code>taro@example.com</code>、<code>[PHONE_1]</code> → <code>03-1234-5678</code>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                同じメールアドレスには同じ <code>[EMAIL_1]</code> が割り当てられるため、AI は「同じユーザーで再試行が起きた」という<strong>手がかりは保ったまま</strong>、個人情報だけを見ずに分析できます。
                            </p>
                        </div>
                    </div>

                    <div className="callout-practice callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">
                                補足：3.2 全体のサービス・機能別ベストプラクティス
                            </span>
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
                                                <strong>AI チャットボット</strong>（利用者が直接入力）
                                            </td>
                                            <td>個人情報・機密の貼り付け</td>
                                            <td>
                                                入力してよいデータの<strong>ルールを周知</strong>する／<strong>データ最小化と置換</strong>をしてから貼る／提供元の<strong>データ利用条件を確認</strong>する
                                            </td>
                                            <td>シラバス 3.2.3</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td><strong>LLM 搭載テストツール</strong>（API 連携）</td>
                                            <td>基盤への不正アクセス、通信内容の漏えい</td>
                                            <td>
                                                <strong>認証・アクセス制御</strong>、<strong>暗号化</strong>、<strong>ログ管理</strong>。定期的な<strong>セキュリティ監査と脆弱性評価</strong>
                                            </td>
                                            <td>シラバス 3.2.3</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td><strong>テストデータ生成</strong></td>
                                            <td>本番データの混入、実在の個人情報の再現</td>
                                            <td>
                                                本番データを元にせず<strong>合成データ</strong>を使う。生成結果に実在データが混ざっていないか確認する
                                            </td>
                                            <td>
                                                シラバス 2.2.2（合成テストデータはプライバシーを守れる）、3.2.1
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td><strong>コード・スクリプト生成</strong></td>
                                            <td>バックドア入りコード</td>
                                            <td>
                                                生成コードを<strong>コードレビューと静的解析</strong>にかけ、<strong>隔離した環境で実行</strong>してから使う
                                            </td>
                                            <td>シラバス 3.2.2（悪意のあるコード生成）、3.2.3</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td><strong>RAG（社内文書の検索）</strong>（第4章）</td>
                                            <td>権限のない情報が検索結果に混ざる</td>
                                            <td>
                                                検索対象文書の<strong>アクセス権限を尊重</strong>し、<strong>データ源の信頼性</strong>を確認する。悪意ある文書の混入に注意
                                            </td>
                                            <td>
                                                💡 OWASP LLM Top 10（Vector and Embedding Weaknesses 等）
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>
                                                <strong>エージェント</strong>（自律的に動く AI）（第4章）
                                            </td>
                                            <td>過剰な権限、意図しない操作</td>
                                            <td>
                                                <strong>最小権限</strong>にする／重要な操作は<strong>人の承認</strong>を必須にする（半自律型）
                                            </td>
                                            <td>シラバス 4.1.3、💡 OWASP LLM06</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>
                                                <strong>個人利用のAIサービス（無断利用）</strong>（Shadow AI・第5章）
                                            </td>
                                            <td>組織が把握していない情報流出</td>
                                            <td>
                                                承認された安全な選択肢を用意し、<strong>利用ルールと研修</strong>を整備する
                                            </td>
                                            <td>シラバス 3.2.3（研修）、5.1.1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <h4 id="32-節の試験ポイントまとめ">3.2 節の試験ポイントまとめ</h4>
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
                                    <td>プライバシーの懸念（K2）</td>
                                    <td>
                                        意図しない露出／データ利用の制御不能／コンプライアンス（GDPR 等）
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>セキュリティのリスク（K2）</td>
                                    <td>基盤への攻撃／LLM の脆弱性の悪用／悪意ある入力</td>
                                </tr>
                                <tr className="row-even">
                                    <td>攻撃ベクトル4種（K2）</td>
                                    <td>
                                        コンテキスト操作・リクエスト操作・データポイズニング・悪意のあるコード生成（<strong>それぞれの例も</strong>）
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>基本の保護策4つ（K2）</td>
                                    <td>データ最小化・匿名化／仮名化・安全な保存と通信・教育／方針</td>
                                </tr>
                                <tr className="row-even">
                                    <td>追加の緩和策5つ（K2）</td>
                                    <td>
                                        生成物レビュー・別 LLM との比較・安全な運用環境の選択・定期監査・最新の把握
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>環境の選択肢3つ</td>
                                    <td>商用の安全なサービス／安全なクラウド／自社インフラ</td>
                                </tr>
                                <tr className="row-even">
                                    <td>関与させる人</td>
                                    <td>上級セキュリティエンジニア、法務、CTO、CISO</td>
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
                                    <strong>データ最小化</strong>：目的に必要な最小限のデータだけを使うこと
                                </li>
                                <li>
                                    <strong>匿名化</strong>：個人を特定できない形に変え、元に戻せなくすること
                                </li>
                                <li>
                                    <strong>仮名化</strong>：別の識別子に置き換え、対応表があれば元に戻せる形にすること
                                </li>
                                <li>
                                    <strong>暗号化</strong>：データを、鍵を持つ人だけが読める形に変換すること
                                </li>
                                <li>
                                    <strong>アクセス制御</strong>：誰がどのデータを見たり変更したりできるかを制限すること
                                </li>
                                <li>
                                    <strong>CISO</strong>：最高情報セキュリティ責任者。組織の情報セキュリティの責任者
                                </li>
                                <li><strong>CTO</strong>：最高技術責任者</li>
                                <li>
                                    <strong>セキュリティ監査</strong>：システムの安全性を、第三者や専門家が点検すること
                                </li>
                                <li>
                                    <strong>脆弱性評価</strong>：システムの弱点を洗い出し、深刻度を評価すること
                                </li>
                                <li>
                                    <strong>Shadow AI（シャドウAI）</strong>：組織が承認していない、個人の判断で使う AI サービス
                                </li>
                                <li>
                                    <strong>静的解析</strong>：コードを実行せずに、書かれた内容から問題を検出する手法
                                </li>
                                <li>
                                    <strong>最小権限</strong>：作業に必要な最低限の権限だけを与える原則
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    <h2 id="4-33-エネルギー消費と環境への影響">4. 3.3 エネルギー消費と環境への影響</h2>
                    <p>
                        💡 この章では、生成AIを使うと<strong>電力を消費し CO₂ が出る</strong>という環境面のリスクと、テスト作業でそれを減らす考え方を説明します。K2（説明できる）レベルなので、<strong>「何が消費量を増やすのか」を理由つきで説明できる</strong>ことが目標です。
                    </p>
                    <h3 id="40-なぜこの節が必要なのか">4.0 なぜこの節が必要なのか</h3>
                    <p>
                        📌 <strong>シラバス記載</strong>：LLM の<strong>学習</strong>にも<strong>処理（利用</strong>）にも、大量の専用計算資源が必要です。LLM は Web サービスとして提供されるため、利用が増えるほど、<strong>端末・ネットワーク・データセンターへの負荷</strong>が増え、エネルギー消費が高まります。
                    </p>
                    <p>
                        たとえるなら、<strong>車で遠くまで出かけるほどガソリンを使う</strong>のと同じです。1回の運転は小さな消費でも、多くの人が何度も運転すれば、全体では大きな環境負荷になります。
                    </p>
                    <hr />

                    <h3 id="41-genai-331--k2タスクの特徴とモデルの使い方が消費量に与える影響">
                        4.1 【GenAI-3.3.1 / K2】タスクの特徴とモデルの使い方が消費量に与える影響
                    </h3>
                    <h4 id="シラバスが述べているポイント">シラバスが述べているポイント</h4>
                    <p>📌 <strong>シラバス記載</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>ポイント</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>1</td>
                                    <td>環境への影響を軽視してはならない</td>
                                    <td>
                                        利用が増えるほど、エネルギー消費は<strong>急激に増える</strong>
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>2</td>
                                    <td>
                                        <strong>タスクの複雑さ</strong>と<strong>必要な計算資源</strong>が消費量に影響する
                                    </td>
                                    <td>同じ「1回の依頼」でも、内容によって消費量は大きく違う</td>
                                </tr>
                                <tr className="row-even">
                                    <td>3</td>
                                    <td>
                                        <strong>画像生成</strong>は消費が大きく、<strong>テキスト生成</strong>は小さい
                                    </td>
                                    <td>
                                        強力な AI モデルで<strong>画像を1枚生成</strong>すると、<strong>スマートフォン1台をフル充電するほど</strong>のエネルギーを消費しうる。<strong>テキスト生成</strong>は、充電量の<strong>ごく一部</strong>で済む（Heikkilä 2023 を引用）
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>4</td>
                                    <td>正確なデータを得ることは難しい</td>
                                    <td>環境影響の正確な数値は入手しづらい（Luccioni 2024b）</td>
                                </tr>
                                <tr className="row-even">
                                    <td>5</td>
                                    <td><strong>累積の影響</strong>が大きい</td>
                                    <td>
                                        1回の検索やテキスト生成は無視できるほど小さく見えても、<strong>世界中の何百万人分</strong>が積み重なると、大きな環境負荷になる（CO₂ 排出、Berthelot 2024）
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>6</td>
                                    <td><strong>ベストプラクティス</strong></td>
                                    <td>
                                        <strong>不要なモデルとのやり取りを減らす</strong>ことが、環境リスクを減らすうえで重要
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
                                <strong>補足（出典の確認済みの数値）</strong>：シラバスが引用した MIT Technology Review の記事（2023/12/01、Melissa Heikkilä 著）は、Hugging Face と Carnegie Mellon 大学の研究者らによる研究を紹介しています。記事によれば、<strong>画像生成1枚がスマートフォンのフル充電1回分</strong>に相当し、<strong>テキスト生成を1,000回行っても充電量の 16%</strong>にとどまるとされています。なお、この記事の時点では、その研究は<strong>査読前</strong>でした。数値は<strong>モデルや条件によって大きく変わる</strong>ため、「傾向」として理解してください。
                            </p>
                        </div>
                    </div>

                    <h4 id="消費量を左右する要因整理">消費量を左右する要因（整理）</h4>
                    <p>
                        📌 は<strong>シラバスの記述</strong>、💡 は<strong>一般的な補足</strong>です。
                    </p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>要因</th>
                                    <th>消費量への影響</th>
                                    <th>区分</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>
                                        <strong>タスクの種類</strong>（テキスト／画像／マルチモーダル）
                                    </td>
                                    <td>画像生成はテキスト生成より<strong>大幅に大きい</strong></td>
                                    <td>📌</td>
                                </tr>
                                <tr className="row-odd">
                                    <td><strong>タスクの複雑さと必要な計算資源</strong></td>
                                    <td>複雑で大きな計算が必要なほど大きい</td>
                                    <td>📌</td>
                                </tr>
                                <tr className="row-even">
                                    <td><strong>利用の回数・規模</strong></td>
                                    <td>使う回数が多いほど<strong>累積で増える</strong></td>
                                    <td>📌</td>
                                </tr>
                                <tr className="row-odd">
                                    <td><strong>不要なやり取り</strong></td>
                                    <td>減らすことが推奨されるベストプラクティス</td>
                                    <td>📌</td>
                                </tr>
                                <tr className="row-even">
                                    <td><strong>コンテキストウィンドウの長さ</strong></td>
                                    <td>
                                        入力トークンが増えるほど計算量と処理時間が増える（シラバス 1.1.2 節）
                                    </td>
                                    <td>📌（1.1.2 節）</td>
                                </tr>
                                <tr className="row-odd">
                                    <td><strong>モデルの大きさ</strong>（LLM と SLM）</td>
                                    <td>
                                        一般に大きいモデルほど計算量が大きい。タスクに見合った大きさのモデルを選ぶ
                                    </td>
                                    <td>💡</td>
                                </tr>
                                <tr className="row-even">
                                    <td><strong>出力の長さ</strong></td>
                                    <td>長い出力ほど計算が多い</td>
                                    <td>💡</td>
                                </tr>
                                <tr className="row-odd">
                                    <td><strong>推論モデルの利用</strong></td>
                                    <td>内部で多くの中間トークンを生成するため計算が増える傾向</td>
                                    <td>💡</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="エネルギー消費が増える仕組みの図">エネルギー消費が増える仕組みの図</h4>
                    <p>
                        この図は、テスト作業での利用のしかたが、エネルギー消費と CO₂ にどう結びつくかを表しています。左から右へ読み進めてください。
                    </p>
                    <div className="mermaid-container" data-diagram-id="mermaid-diagram-8">
                        <Mermaid chart={DIAGRAM_ENERGY_CONSUMPTION} />
                    </div>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>
                            「タスクの特徴」「モデルの使い方」：<strong>利用者が変えられる2つの要因</strong>。シラバスの学習目標（GenAI-3.3.1）の言い回しどおりです。
                        </li>
                        <li>
                            「必要な計算資源が増える」→「電力消費が増える」→「CO2 排出が増える」：<strong>原因から結果への連鎖</strong>です。
                        </li>
                        <li>
                            「対策」（点線）：利用のしかたを見直すことで、この連鎖の<strong>入口</strong>を小さくできます。
                        </li>
                    </ul>

                    <div className="callout-trace callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">🧪</span>
                            <span className="callout-label">
                                動作トレース：エネルギーと CO₂ を概算する（HO-3.3.1 の考え方）
                            </span>
                        </div>
                        <div className="callout-body">
                            <p>
                                📌 <strong>シラバス記載（HO-3.3.1：H1）</strong>：シミュレータを使って、テスト作業ごとのエネルギー消費と CO₂ 排出量を計算し、<strong>タスクの特徴とモデルの使い方がどう影響するか</strong>を観察します。
                            </p>
                            <blockquote className="inline-note">
                                <p>
                                    <strong>重要な注意</strong>：下の数値は、<strong>計算の考え方を学ぶための「仮の数値</strong>」です。実際の LLM の消費量ではありません。実測には、Code Carbon などの計測ツールや、シラバスの HO で使うシミュレータを使ってください。
                                </p>
                            </blockquote>
                            <p><strong>基本の式</strong>：</p>
                            <ul>
                                <li>消費電力量（Wh）＝ 1回あたりの消費電力量 × 実行回数</li>
                                <li>CO₂ 排出量 ＝ 消費電力量（kWh）× 排出係数（kg-CO₂ / kWh）</li>
                            </ul>
                            <p>
                                <strong>仮の前提</strong>：1回の生成で 0.3 Wh、排出係数 0.45 kg-CO₂/kWh、1日 200 回 × 20 日 ＝ 4,000 回
                            </p>
                            <div className="table-scroll">
                                <table>
                                    <thead>
                                        <tr className="row-header">
                                            <th>ケース</th>
                                            <th>1回あたり（仮）</th>
                                            <th>回数</th>
                                            <th>消費電力量</th>
                                            <th>CO₂ 排出量（仮）</th>
                                            <th>読み取れること</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row-even">
                                            <td>A：ベースライン</td>
                                            <td>0.3 Wh</td>
                                            <td>4,000 回</td>
                                            <td>1,200 Wh ＝ 1.2 kWh</td>
                                            <td>0.54 kg</td>
                                            <td>基準となる値</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>
                                                B：プロンプトを5ステップに分割（プロンプトチェイニング）
                                            </td>
                                            <td>0.3 Wh</td>
                                            <td>20,000 回</td>
                                            <td>6,000 Wh ＝ 6.0 kWh</td>
                                            <td>2.70 kg</td>
                                            <td>
                                                回数が5倍なので<strong>消費も5倍</strong>。ただし、品質向上の効果もある
                                            </td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>C：同じ依頼を「試し打ち」で無駄に10回繰り返す習慣</td>
                                            <td>0.3 Wh</td>
                                            <td>40,000 回</td>
                                            <td>12,000 Wh ＝ 12.0 kWh</td>
                                            <td>5.40 kg</td>
                                            <td>
                                                <strong>不要なやり取り</strong>は、そのまま消費の増加になる
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>
                                                D：軽いタスクを小さいモデルに切り替え（1回 0.1 Wh と仮定）
                                            </td>
                                            <td>0.1 Wh</td>
                                            <td>4,000 回</td>
                                            <td>400 Wh ＝ 0.4 kWh</td>
                                            <td>0.18 kg</td>
                                            <td><strong>モデルの大きさ</strong>を見直すと減らせる</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p><strong>このトレースから分かること</strong>：</p>
                            <ol type="1">
                                <li>
                                    <strong>回数</strong>と<strong>1回あたりの大きさ</strong>の掛け算が、消費量を決めます。
                                </li>
                                <li>
                                    プロンプトチェイニング（3.1 節の推奨策）は<strong>品質を上げる一方、回数が増える</strong>ため、環境面ではトレードオフです（💡 補足）。<strong>品質のための検証ステップを削るのではなく、「無駄な試行」を減らす</strong>方向で調整します。
                                </li>
                                <li>
                                    「不要なやり取りを減らす」というシラバスの推奨は、ケース C → A の改善に相当します。
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="callout-practice callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">
                                補足：サービス・機能別ベストプラクティス
                            </span>
                        </div>
                        <div className="callout-body">
                            <div className="table-scroll">
                                <table>
                                    <thead>
                                        <tr className="row-header">
                                            <th>使っているもの</th>
                                            <th>主な環境リスク</th>
                                            <th>ベストプラクティス</th>
                                            <th>根拠</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row-even">
                                            <td><strong>AI チャットボット</strong></td>
                                            <td>「とりあえず試す」の繰り返し</td>
                                            <td>
                                                依頼を<strong>事前に整理して</strong>から送る／良いプロンプトを<strong>再利用</strong>（プロンプトライブラリを共有）
                                            </td>
                                            <td>シラバス 3.3.1、2.3.2</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td><strong>画像・マルチモーダル入力</strong></td>
                                            <td>画像生成や画像入力は計算が大きい</td>
                                            <td>
                                                テキストで足りる作業は<strong>テキストで行う</strong>。画像が必要な場合に限定する
                                            </td>
                                            <td>シラバス 3.3.1</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>
                                                <strong>LLM 搭載テストツール（自動実行）</strong>
                                            </td>
                                            <td>CI で毎回・大量に自動実行される</td>
                                            <td>
                                                変更のあった箇所だけを対象にする（<strong>影響分析</strong>）／同じ入力の結果を<strong>再利用</strong>する
                                            </td>
                                            <td>シラバス 2.2.3、3.3.1</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td><strong>モデル選択</strong></td>
                                            <td>大きなモデルを常用</td>
                                            <td>
                                                軽いタスクは<strong>小さなモデル（SLM）</strong>、重い推論だけ大きなモデルというように<strong>使い分ける</strong>
                                            </td>
                                            <td>シラバス 1.1.2、3.1.3、5.1.3</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td><strong>利用状況の把握</strong></td>
                                            <td>実態が見えない</td>
                                            <td>
                                                利用回数やトークン量を<strong>記録</strong>し、必要に応じて<strong>計測ツール</strong>で概算する
                                            </td>
                                            <td>💡 一般的な実践</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td><strong>品質とのバランス</strong></td>
                                            <td>削りすぎて品質が下がる</td>
                                            <td>
                                                環境負荷を下げるために<strong>検証ステップ自体を省かない</strong>（ハルシネーション対策が優先）
                                            </td>
                                            <td>シラバス 3.1 と 3.3 の両立</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <h4 id="33-節の試験ポイントまとめ">3.3 節の試験ポイントまとめ</h4>
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
                                    <td>影響する要因（K2）</td>
                                    <td>
                                        <strong>タスクの特徴</strong>（複雑さ・計算資源・画像かテキストか）と<strong>モデルの使い方</strong>（回数・規模）
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>具体例</td>
                                    <td>
                                        画像1枚 ≒ スマートフォンのフル充電／テキスト生成は充電量の一部
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>累積の考え方</td>
                                    <td>1回は小さくても、世界規模では大きい</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>ベストプラクティス</td>
                                    <td><strong>不要なモデルとのやり取りを制限する</strong></td>
                                </tr>
                                <tr className="row-even">
                                    <td>正確な数値</td>
                                    <td>得るのは難しい（Luccioni 2024b）</td>
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
                                    <strong>エネルギー消費</strong>：AI を動かすために使う電力の量
                                </li>
                                <li>
                                    <strong>CO₂（二酸化炭素）排出</strong>：発電などで生じる温室効果ガス。使った電力が多いほど増えやすい
                                </li>
                                <li>
                                    <strong>データセンター</strong>：多数のサーバーを集めて運用する施設。Web サービスとして提供される LLM が動く場所
                                </li>
                                <li>
                                    <strong>排出係数</strong>：電力 1 kWh を作る際に出る CO₂ の量。国や年、電力会社で変わる
                                </li>
                                <li><strong>Wh / kWh</strong>：電力量の単位。1 kWh ＝ 1,000 Wh</li>
                                <li>
                                    <strong>累積の影響</strong>：1回は小さくても、多数回・多人数で積み重なって大きくなること
                                </li>
                                <li>
                                    <strong>Code Carbon</strong>：機械学習の実行による電力消費と CO₂ 排出を推定するオープンソースの計測ツール
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    <h2 id="5-34-ai規制標準ベストプラクティスフレームワーク">
                        5. 3.4 AI規制・標準・ベストプラクティスフレームワーク
                    </h2>
                    <p>
                        💡 この章では、3.1〜3.3 のリスクに対処するときに<strong>拠りどころになる4つのルールブック</strong>（標準2つ、規制1つ、フレームワーク1つ）を説明します。K1（思い出せる）レベルなので、<strong>名称・種類・ひとことの内容</strong>を正確に覚えることが目標です。
                    </p>
                    <h3 id="50-なぜこの節が必要なのか">5.0 なぜこの節が必要なのか</h3>
                    <p>
                        📌 <strong>シラバス記載</strong>：GenAI はテストを変革しますが、推論エラー、データプライバシー、脆弱性、環境影響といった<strong>重大なリスク</strong>も伴います。これらに対処するには、<strong>AI に関する一般的な規制・標準・ベストプラクティスフレームワーク</strong>を考慮する必要があります。
                    </p>
                    <h3 id="51-genai-341--k14つの例">5.1 【GenAI-3.4.1 / K1】4つの例</h3>
                    <h4 id="3種類のルールの違い">3種類のルールの違い</h4>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>種類</th>
                                    <th>意味</th>
                                    <th>守らないと</th>
                                    <th>例え話</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td><strong>規制</strong>（Regulation）</td>
                                    <td><strong>法律</strong>としての決まり</td>
                                    <td>罰則や法的責任が生じうる</td>
                                    <td>交通法規</td>
                                </tr>
                                <tr className="row-odd">
                                    <td><strong>標準</strong>（Standard）</td>
                                    <td>国際規格。組織が<strong>満たす要件</strong>や進め方を定める</td>
                                    <td>認証や取引で不利になりうる</td>
                                    <td>品質管理の国際規格（ISO 認証）</td>
                                </tr>
                                <tr className="row-even">
                                    <td><strong>フレームワーク</strong>（Framework）</td>
                                    <td>推奨される<strong>指針・進め方の枠組み</strong></td>
                                    <td>直接の罰則は無いが、ベストプラクティスから外れる</td>
                                    <td>業界のガイドブック</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 id="シラバスの4つの例">シラバスの4つの例</h4>
                    <p>📌 <strong>シラバス記載</strong>（表の意味を日本語にしています）</p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>名称</th>
                                    <th>種類</th>
                                    <th>概要</th>
                                    <th>テストでの適用</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>
                                        <strong>ISO/IEC 42001:2023</strong> Information technology – Artificial intelligence – Management system
                                    </td>
                                    <td><strong>標準</strong></td>
                                    <td>
                                        組織内で<strong>AI システムを管理するための要件</strong>を定める
                                    </td>
                                    <td>
                                        テストでの GenAI 利用が、<strong>推奨される実践に沿う</strong>ようにし、<strong>一貫性と信頼性</strong>を高める
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>
                                        <strong>ISO/IEC 23053:2022</strong> Framework for Artificial Intelligence (AI) Systems Using Machine Learning
                                    </td>
                                    <td><strong>標準</strong></td>
                                    <td>
                                        <strong>AI のライフサイクル（開発から運用まで）の各プロセス</strong>の枠組みを示し、<strong>安全性と透明性</strong>を重視する
                                    </td>
                                    <td>
                                        GenAI をテストに使うときの<strong>データ品質・透明性・安全性</strong>の枠組みになる
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td><strong>EU AI Act</strong>（欧州の AI 規則）</td>
                                    <td><strong>規制</strong></td>
                                    <td>
                                        AI のリスクに対処する<strong>法的枠組み</strong>。用途を<strong>リスクレベル別に分類</strong>する
                                    </td>
                                    <td>
                                        テストで使う GenAI に対しても、<strong>透明性・説明責任・バイアス緩和</strong>への準拠が求められる
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>
                                        <strong>NIST AI Risk Management Framework</strong>（米国、AI RMF 1.0）
                                    </td>
                                    <td><strong>フレームワーク</strong></td>
                                    <td>
                                        AI のリスクを管理するための指針。<strong>公平性・透明性・セキュリティ</strong>を重視する
                                    </td>
                                    <td>
                                        GenAI の<strong>公平性を支え</strong>、<strong>偏ったテスト結果を防ぐ</strong>ためのリスクを軽減する
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p><strong>試験での覚え方（3種類 × 4件）</strong></p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>種類</th>
                                    <th>名称</th>
                                    <th>覚えるキーワード</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>標準</td>
                                    <td>ISO/IEC 42001</td>
                                    <td><strong>管理システム</strong>（組織で AI を管理）</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>標準</td>
                                    <td>ISO/IEC 23053</td>
                                    <td>
                                        <strong>ML を使う AI システムの枠組み</strong>（ライフサイクル、安全性・透明性）
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>規制</td>
                                    <td>EU AI Act</td>
                                    <td><strong>リスクレベル別の分類</strong>（法律）</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>フレームワーク</td>
                                    <td>NIST AI RMF</td>
                                    <td><strong>公平性・透明性・セキュリティ</strong>（米国の指針）</td>
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
                                <strong>ひっかけに注意</strong>：「EU AI Act は標準である」「NIST AI RMF は規制である」といった<strong>種類の取り違え</strong>が誤りの選択肢になりやすい部分です。<strong>規制はEU AI Act 1つだけ</strong>と覚えましょう。
                            </p>
                        </div>
                    </div>

                    <h4 id="リスクと4つのルールブックの対応図">リスクと4つのルールブックの対応図</h4>
                    <p>
                        この図は、第3章の3つのリスクと、4つのルールブックが<strong>どの領域を支えるか</strong>を表しています。左から右へ読み進めてください。
                    </p>
                    <div className="mermaid-container" data-diagram-id="mermaid-diagram-9">
                        <Mermaid chart={DIAGRAM_REGULATIONS_MAP} />
                    </div>
                    <p>各ノードの意味：</p>
                    <ul>
                        <li>「3.1／3.2／3.3」：第3章の3つのリスク領域。</li>
                        <li>
                            4つのルールブック：<strong>シラバスが述べる「テストでの適用」</strong>に沿って、関係の深いリスクと結びつけた図です。
                        </li>
                        <li>
                            「ISO IEC 42001」が3つのリスクすべてに結びつくのは、これが<strong>組織の AI 管理全体</strong>を扱う標準だからです。
                        </li>
                    </ul>
                    <div className="callout-note">
                        <div className="callout-header">
                            <span className="callout-icon">📌</span>
                            <span className="callout-label">シラバスの補足</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                この対応は、シラバスの「テストでの適用」欄をもとにした<strong>学習のための整理</strong>です。シラバスが各ルールブックとリスクの1対1の対応を定めているわけではありません。
                            </p>
                        </div>
                    </div>

                    <h4 id="変化に追いつくこと">変化に追いつくこと</h4>
                    <p>
                        📌 <strong>シラバス記載</strong>：AI 技術と規制の状況は<strong>変わり続けるため</strong>、テスト組織は、<strong>規制・標準・国内法・ベストプラクティスフレームワーク</strong>の<strong>最新の動向を把握し続ける</strong>ことが必須です。
                    </p>
                    <div className="callout-practice callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">
                                補足：2026年9月時点の EU AI Act の動き（試験範囲外）
                            </span>
                        </div>
                        <div className="callout-body">
                            <p>
                                EU AI Act の適用時期は、2026年に変更がありました。以下は検索で確認できた情報です（<strong>今後さらに変わる可能性があります</strong>。最新は公式情報を確認してください）。
                            </p>
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
                                            <td>Digital Omnibus on AI</td>
                                            <td>
                                                <strong>Regulation (EU) 2026/1744</strong>。2026/07/24 に EU 官報で公表され、<strong>2026/07/27 に施行</strong>
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>高リスク AI（Annex III の独立したシステム）の適用</td>
                                            <td>
                                                当初の 2026/08/02 から<strong>2027/12/02</strong> へ延期
                                            </td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>製品に組み込まれる高リスク AI（Annex I）</td>
                                            <td><strong>2028/08/02</strong> へ延期</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>Article 50 の透明性義務</td>
                                            <td>
                                                <strong>2026/08/02</strong> から適用（AI と対話していることの開示、AI 生成コンテンツの表示など）。既存システムの電子透かしについては 2026/12/02 まで猶予
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <blockquote className="inline-note">
                                <p>
                                    <strong>注意</strong>：EU AI Act がテスト作業での GenAI 利用にどの程度関係するかは、<strong>用途・立場（提供者か利用者か）・対象システム</strong>によって異なります。<strong>自社への適用の判断は、法務担当や専門家に確認</strong>してください（本文書は法的助言ではありません）。シラバスの試験では、<strong>「EU AI Act は AI をリスクレベル別に分類する規制である」</strong>ことを思い出せれば十分です。
                                </p>
                            </blockquote>
                        </div>
                    </div>

                    <div className="callout-practice callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">
                                補足：あわせて知っておくと役立つ関連文書（試験範囲外）
                            </span>
                        </div>
                        <div className="callout-body">
                            <div className="table-scroll">
                                <table>
                                    <thead>
                                        <tr className="row-header">
                                            <th>文書</th>
                                            <th>概要</th>
                                            <th>使いどころ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row-even">
                                            <td>
                                                <strong>NIST AI 600-1</strong>（生成AIプロファイル）
                                            </td>
                                            <td>NIST AI RMF を生成AIに合わせて具体化した文書</td>
                                            <td>生成AI固有のリスクを整理するとき</td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td>
                                                <strong>OWASP Top 10 for LLM Applications 2025</strong>
                                            </td>
                                            <td>LLM を使うアプリの主なセキュリティリスク10種</td>
                                            <td>3.2 節の攻撃ベクトルを実務で点検するとき</td>
                                        </tr>
                                        <tr className="row-even">
                                            <td>
                                                <strong>AI事業者ガイドライン（第1.1版、2025/03/28）</strong>（総務省・経済産業省）
                                            </td>
                                            <td>
                                                日本の AI の開発・提供・利用に関する指針。AI ガバナンスの基本の考え方を示す
                                            </td>
                                            <td>
                                                日本の組織で、社内ルールを作るとき（<strong>最新版の有無を公式ページで確認</strong>）
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td><strong>GDPR（Regulation (EU) 2016/679）</strong></td>
                                            <td>EU の個人データ保護規則。3.2 節で触れられている</td>
                                            <td>EU 居住者のデータを扱う場合</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="callout-practice callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">💡</span>
                            <span className="callout-label">
                                補足：サービス・機能別ベストプラクティス
                            </span>
                        </div>
                        <div className="callout-body">
                            <div className="table-scroll">
                                <table>
                                    <thead>
                                        <tr className="row-header">
                                            <th>使っているもの</th>
                                            <th>押さえたいルールブック</th>
                                            <th>ベストプラクティス</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row-even">
                                            <td><strong>組織としての GenAI 導入全体</strong></td>
                                            <td>ISO/IEC 42001</td>
                                            <td>
                                                AI 利用の<strong>方針・責任者・手順・記録</strong>を組織として定める（管理システムの発想）
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td><strong>テスト用データの品質と透明性</strong></td>
                                            <td>ISO/IEC 23053</td>
                                            <td>
                                                <strong>どのデータで、どのモデルを、どう使ったか</strong>を記録し、説明できる状態にする
                                            </td>
                                        </tr>
                                        <tr className="row-even">
                                            <td><strong>EU 市場に関わる利用</strong></td>
                                            <td>EU AI Act</td>
                                            <td>
                                                自社の用途が<strong>どのリスク分類に当たるか</strong>を<strong>法務と確認</strong>する。透明性の要件を確認する
                                            </td>
                                        </tr>
                                        <tr className="row-odd">
                                            <td><strong>公平性・リスク管理の運用</strong></td>
                                            <td>NIST AI RMF</td>
                                            <td>
                                                テスト結果の<strong>偏りの確認</strong>を、リスク管理のプロセスに組み込む
                                            </td>
                                        </tr>
                                        <tr className="row-even">
                                            <td><strong>全体</strong></td>
                                            <td>すべて</td>
                                            <td>
                                                <strong>最新動向を定期的に確認</strong>する担当者・頻度を決める
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <h4 id="34-節の試験ポイントまとめ">3.4 節の試験ポイントまとめ</h4>
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
                                    <td>4つの例（K1）</td>
                                    <td>
                                        ISO/IEC 42001（標準・管理システム）／ISO/IEC 23053（標準・ML の枠組み）／EU AI Act（規制・リスク分類）／NIST AI RMF（フレームワーク・米国）
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>前提</td>
                                    <td>
                                        規制や標準は変わり続けるため、<strong>最新を把握し続ける</strong>
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>出題形式（K1）</td>
                                    <td>
                                        名称と種類、および「どんな内容か」の<strong>組み合わせ</strong>を選ぶ形式が想定される
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
                                    <strong>規制</strong>：法律としての決まり。守らないと罰則や責任が生じうる
                                </li>
                                <li>
                                    <strong>標準</strong>：国際機関などが定める規格。組織が満たす要件や進め方を示す
                                </li>
                                <li><strong>フレームワーク</strong>：推奨される指針や進め方の枠組み</li>
                                <li>
                                    <strong>ISO / IEC</strong>：国際標準化機構 / 国際電気標準会議。国際規格を作る組織
                                </li>
                                <li>
                                    <strong>管理システム</strong>：方針・目標・手順・責任を定めて組織的に運用する仕組み
                                </li>
                                <li>
                                    <strong>EU AI Act</strong>：欧州連合の AI に関する法律。リスクの大きさに応じて義務を変える
                                </li>
                                <li><strong>NIST</strong>：米国国立標準技術研究所</li>
                                <li>
                                    <strong>透明性</strong>：AI がどう動き、どのデータを使い、どんな結果を出したかを説明できること
                                </li>
                                <li>
                                    <strong>説明責任</strong>：AI の利用の結果について、責任を持って説明できること
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    {/* 6. 試験対策：まとめ・チェックリスト・練習問題 */}
                    <h2 id="6-試験対策まとめチェックリスト練習問題">
                        6. 試験対策：まとめ・チェックリスト・練習問題
                    </h2>
                    <p>
                        💡 この章では、第3章全体を<strong>試験直前に見直せる形</strong>にまとめます。ここまでの内容を読み終えたあとに、<strong>用語の総まとめ → よくある間違い → 練習問題</strong>の順で確認してください。
                    </p>

                    <h3 id="61-第3章-総まとめ表試験直前チェック用">
                        6.1 第3章 総まとめ表（試験直前チェック用）
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>節</th>
                                    <th>K</th>
                                    <th>覚える中心</th>
                                    <th>一言</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>3.1.1</td>
                                    <td>K1</td>
                                    <td>ハルシネーション／推論エラー／バイアスの定義</td>
                                    <td>事実と違う／論理の取り違え／学習データ由来の偏り</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>3.1.2</td>
                                    <td>K3</td>
                                    <td>検出方法</td>
                                    <td>
                                        クロス検証・専門家・一貫性／論理検証・実行して確認／代表性・テストタイプの偏り
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>3.1.3</td>
                                    <td>K2</td>
                                    <td>軽減5技法</td>
                                    <td>
                                        完全なコンテキスト／分割（チェイニング）／明確な形式／適切なモデル／複数モデル比較
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>3.1.4</td>
                                    <td>K1</td>
                                    <td>非決定性の軽減</td>
                                    <td>
                                        temperature を下げる（多様性は下がる）／seed を固定（使える実装のみ）
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>3.2.1</td>
                                    <td>K2</td>
                                    <td>リスク</td>
                                    <td>
                                        プライバシー3（露出・制御不能・コンプライアンス）＋セキュリティ3
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>3.2.2</td>
                                    <td>K2</td>
                                    <td>攻撃ベクトル4</td>
                                    <td>
                                        コンテキスト操作／リクエスト操作／データポイズニング／悪意のあるコード生成
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>3.2.3</td>
                                    <td>K2</td>
                                    <td>緩和策</td>
                                    <td>
                                        基本4（最小化・匿名化・暗号化とアクセス制御・教育）＋追加5＋環境3択
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>3.3.1</td>
                                    <td>K2</td>
                                    <td>エネルギー</td>
                                    <td>
                                        タスクの特徴とモデルの使い方／画像＞テキスト／不要なやり取りを減らす
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>3.4.1</td>
                                    <td>K1</td>
                                    <td>規制・標準・枠組み</td>
                                    <td>
                                        ISO/IEC 42001・ISO/IEC 23053（標準）／EU AI Act（規制）／NIST AI RMF（枠組み）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="62-よくある間違いひっかけポイント">
                        6.2 よくある間違い（ひっかけポイント）
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>ひっかけの言い回し（誤り）</th>
                                    <th>正しい理解</th>
                                    <th>理由</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>
                                        「ある LLM 出力でハルシネーションを直せば、以後は再発しない」
                                    </td>
                                    <td><strong>再発しうる</strong></td>
                                    <td>
                                        非決定的なので、別の会話で同じ問題が再び出る（シラバス 3.1 節冒頭）
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>「temperature を上げると、出力が安定する」</td>
                                    <td><strong>下げる</strong>と安定する</td>
                                    <td>確率分布が狭まるため。ただし多様性は下がる</td>
                                </tr>
                                <tr className="row-even">
                                    <td>「seed を固定すれば、完全に同じ結果が保証される」</td>
                                    <td><strong>保証されない</strong></td>
                                    <td>再現性を<strong>高める</strong>のみ。使える実装も限られる</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>「LLM は真の論理的推論をしている」</td>
                                    <td>パターン<strong>照合</strong>に頼っている</td>
                                    <td>このため、推論エラーが起きる</td>
                                </tr>
                                <tr className="row-even">
                                    <td>「検出は、すべての出力に同じ深さで行う」</td>
                                    <td><strong>リスクの大きさ</strong>に応じて決める</td>
                                    <td>シラバス 3.1.2 節の条件</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>「GDPR は GenAI の利用を明示的に禁止している」</td>
                                    <td><strong>明示的には制限しない</strong>が、安全策が課される</td>
                                    <td>適法性・目的の制限などが、できることに影響する</td>
                                </tr>
                                <tr className="row-even">
                                    <td>「データ最小化とは、できるだけ多くのデータを渡すこと」</td>
                                    <td><strong>必要最小限</strong>に絞ること</td>
                                    <td>漏えい時の被害を小さくするため</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>「機密データは、商用サービスなら常に安全に処理できる」</td>
                                    <td><strong>機密度に応じて環境を選ぶ</strong></td>
                                    <td>
                                        商用の安全なサービス、安全なクラウド、自社インフラの3択がある
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>「GenAI の環境影響は、1回の利用が小さいので無視してよい」</td>
                                    <td><strong>累積で大きくなる</strong></td>
                                    <td>世界中の利用が積み重なる（シラバス 3.3.1 節）</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>「EU AI Act は標準、ISO/IEC 42001 は規制である」</td>
                                    <td>
                                        EU AI Act＝<strong>規制</strong>、ISO/IEC 42001＝<strong>標準</strong>
                                    </td>
                                    <td>種類の取り違え</td>
                                </tr>
                                <tr className="row-even">
                                    <td>「AI の出力は、人のレビューなしでも自動検証だけで十分」</td>
                                    <td>人による<strong>体系的なレビュー</strong>が必須</td>
                                    <td>人の評価は品質と正確性に欠かせない（3.2.3 節）</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="63-実務導入チェックリスト-補足">6.3 実務導入チェックリスト（💡 補足）</h3>
                    <ChecklistCard items={CHECKLIST_ITEMS_A} title="A. 出力の品質（3.1）" />
                    <ChecklistCard items={CHECKLIST_ITEMS_B} title="B. プライバシーとセキュリティ（3.2）" />
                    <ChecklistCard items={CHECKLIST_ITEMS_C} title="C. エネルギーと環境（3.3）" />
                    <ChecklistCard items={CHECKLIST_ITEMS_D} title="D. 規制・標準（3.4）" />

                    <h3 id="64-練習問題オリジナル12問">6.4 練習問題（オリジナル・12問）</h3>
                    <div className="callout-warning callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">⚠️</span>
                            <span className="callout-label">重要な注意</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                これらは、本文書の作成者が<strong>学習用に作ったオリジナル問題</strong>です。公式のサンプル問題ではありません。公式の<strong>CT-GenAI Sample Exam A（Questions／Answers v1.1）</strong>は ISTQB 公式ページからダウンロードできます。本文書の作成時には、その内容を確認できていません。<strong>必ず公式サンプルも解いてください。</strong>
                            </p>
                        </div>
                    </div>

                    <p>
                        <strong>問題 1（K1）</strong> LLM が、要件に存在しない「パスワードの再発行機能」を検証するテストケースを生成した。これは何に該当するか。
                    </p>
                    <ul>
                        <li>
                            A. バイアス　　B. ハルシネーション　　C. 推論エラー　　D. データポイズニング
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>B</strong>。存在しない内容を出力しているため、<strong>ハルシネーション</strong>です。バイアスは学習データ由来の偏り、推論エラーは論理の取り違え、データポイズニングは学習・評価データの汚染を指します。
                        </p>
                    </details>

                    <p>
                        <strong>問題 2（K3）</strong> LLM がテストケースの優先順位付けで「リスク値＝発生可能性 3 × 影響度 4 ＝ 7」と出力した。どの間違いで、どの検出方法が最も適切か。
                    </p>
                    <ul>
                        <li>
                            A. ハルシネーション／クロス検証　　B. 推論エラー／論理的検証　　C. バイアス／代表性の確認　　D. ハルシネーション／専門家への相談
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>B</strong>。3 × 4 ＝ 12 であり、掛け算の論理を誤っているため<strong>推論エラー</strong>です。検出には、論理の流れを確認する<strong>論理的検証</strong>（または再計算して確認）が適切です。
                        </p>
                    </details>

                    <p>
                        <strong>問題 3（K3）</strong> LLM が生成したテストデータの氏名が、すべて英語圏の名前だった。これに対する最も適切な対応はどれか。
                    </p>
                    <ul>
                        <li>
                            A. temperature を上げる　　B. 生成物が定義したテスト戦略・カバレッジ要件を公平に反映しているか確認し、多様な名前を追加するようプロンプトで指示する　　C. seed を固定する　　D. 匿名化する
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>B</strong>。<strong>バイアス</strong>の検出と軽減です。代表性を確認し、コンテキストを補って再生成します。A・C は非決定性への対処で、D はプライバシー対策であり、この問題の解決にはなりません。
                        </p>
                    </details>

                    <p>
                        <strong>問題 4（K1）</strong> LLM の temperature を下げたときの効果として正しいものはどれか。
                    </p>
                    <ul>
                        <li>
                            A. 出力の多様性が増える　　B. 出力のランダム性が減り、一貫性が高まるが、創造性や多様性は下がる　　C. 完全に同じ出力になることが保証される　　D. コンテキストウィンドウが広がる
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>B</strong>。確率分布が狭まりランダム性が減ります。<strong>完全な再現は保証されません</strong>（C は誤り）。
                        </p>
                    </details>

                    <p>
                        <strong>問題 5（K2）</strong> random seed に関する記述として、シラバスの内容に最も合うものはどれか。
                    </p>
                    <ul>
                        <li>
                            A. すべての LLM で seed を指定できる　　B. seed を固定すれば、常に同一の出力が得られる　　C. seed を設定できる実装もあり、同じ疑似乱数列が使われるため再現性が高まる　　D. seed は temperature と同じ働きをする
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>C</strong>。「設定できる実装もある」「再現性が高まる」という表現がポイントです。A・B は言い過ぎ、D は別の仕組みです。
                        </p>
                    </details>

                    <p>
                        <strong>問題 6（K2）</strong> 攻撃者が、LLM のコンテキストウィンドウを超える非常に長いプロンプトを送り、学習データの断片を漏らさせようとした。どの攻撃ベクトルか。
                    </p>
                    <ul>
                        <li>
                            A. データポイズニング　　B. 悪意のあるコード生成　　C. コンテキスト操作　　D. リクエスト操作
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>C</strong>。シラバスの表にある、<strong>コンテキスト操作</strong>の例そのものです。
                        </p>
                    </details>

                    <p>
                        <strong>問題 7（K2）</strong> AI が生成したテストレポートを評価する場面で、攻撃者が偽の評価を与えて AI の振る舞いを歪めようとした。どの攻撃ベクトルか。
                    </p>
                    <ul>
                        <li>
                            A. データポイズニング　　B. リクエスト操作　　C. コンテキスト操作　　D. 悪意のあるコード生成
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>A</strong>。<strong>データポイズニング</strong>（学習・評価データの操作）のシラバスの例です。
                        </p>
                    </details>

                    <p>
                        <strong>問題 8（K2）</strong> 高い機密性が求められる組織が選べる運用環境として、シラバスに挙げられていないものはどれか。
                    </p>
                    <ul>
                        <li>
                            A. LLM 提供元の商用の安全なサービス　　B. 安全なクラウドで LLM を運用　　C. 自社インフラに LLM を導入　　D. 公開の無料チャットサービスに機密データを直接入力
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>D</strong>。機密度に応じて A・B・C から選びます。D は、データ最小化や匿名化を行わずに機密データを入力するため、リスクを高めます。
                        </p>
                    </details>

                    <p>
                        <strong>問題 9（K2）</strong> GenAI のエネルギー消費について、正しい記述はどれか。
                    </p>
                    <ul>
                        <li>
                            A. 1回の利用は小さいので、環境影響は無視できる　　B. 画像生成は、テキスト生成より一般に消費エネルギーが大きい　　C. 消費量はモデルの使い方とは関係しない　　D. 環境影響の正確なデータは、誰でもすぐに得られる
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>B</strong>。A は累積の影響を無視しており誤り、C はモデルの使い方（回数・規模）が影響するため誤り、D は正確なデータを得ることが難しいというシラバスの記述と食い違います。
                        </p>
                    </details>

                    <p>
                        <strong>問題 10（K1）</strong> 種類と名称の組み合わせとして正しいものはどれか。
                    </p>
                    <ul>
                        <li>
                            A. EU AI Act ― 標準　　B. ISO/IEC 42001 ― 規制　　C. NIST AI RMF ― フレームワーク　　D. ISO/IEC 23053 ― 規制
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>C</strong>。EU AI Act は<strong>規制</strong>、ISO/IEC 42001 と 23053 は<strong>標準</strong>、NIST AI RMF は<strong>フレームワーク</strong>です。
                        </p>
                    </details>

                    <p>
                        <strong>問題 11（K2）</strong> GDPR と GenAI の関係について、シラバスの内容に合うものはどれか。
                    </p>
                    <ul>
                        <li>
                            A. GDPR は GenAI の利用を明示的に禁止している　　B. GDPR は GenAI の利用を明示的には制限しないが、データ処理の適法性や目的の制限といった安全策により、できることが制限されうる　　C. GDPR は EU 域外の組織には一切関係しない　　D. GDPR は匿名化を禁止している
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>B</strong>。シラバス 3.2.3 節の記述どおりです。C と D はシラバスに書かれていない誤った内容です。
                        </p>
                    </details>

                    <p>
                        <strong>問題 12（K3）</strong> 本番環境のエラーログを、LLM に分析させたい。個人情報が含まれている。最も適切な進め方はどれか。
                    </p>
                    <ul>
                        <li>
                            A. ログ全体をそのまま貼り付け、回答を全面的に信頼する　　B. 必要な部分だけに絞り（データ最小化）、個人情報を置換し、機密度に応じた環境を選び、回答は突き合わせて検証する　　C. 個人情報を含むログは、どのような場合も分析できない　　D. 別の LLM で確認するだけで十分なので、社内ルールは確認しない
                        </li>
                    </ul>
                    <details>
                        <summary>答えと解説</summary>
                        <p>
                            <strong>B</strong>。データ最小化・匿名化／仮名化・安全な運用環境の選択・生成物のレビューを<strong>組み合わせる</strong>進め方です。シラバスは「策は補完的であり、組み合わせが必要」と述べています。C は「機密データは法的に許される場合を除き処理しない」という原則を極端に解釈した誤りで、A・D はリスクを高めます。
                        </p>
                    </details>

                    <div className="callout-glossary callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">📖</span>
                            <span className="callout-label">このセクションで登場した用語</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    <strong>ひっかけ</strong>：一見正しそうに見えるが誤っている選択肢の書き方
                                </li>
                                <li><strong>チェックリスト</strong>：確認すべき項目を並べた一覧</li>
                                <li>
                                    <strong>サンプル試験</strong>：公式が公開している、試験形式の練習問題
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr />

                    {/* 7. 参考URL（根拠ソース一覧） */}
                    <h2 id="7-参考url根拠ソース一覧">7. 参考URL（根拠ソース一覧）</h2>
                    <p>
                        💡 この章では、本文書の各内容の<strong>根拠となるソース</strong>を、種類別にまとめます。試験の出題範囲は<strong>公式シラバス</strong>であり、それ以外のソースは理解を深めるための<strong>補足</strong>です。
                    </p>

                    <h3 id="71-最重要istqb-公式一次ソース">7.1 【最重要】ISTQB 公式（一次ソース）</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>ソース</th>
                                    <th>URL</th>
                                    <th>本文書での根拠となる内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>1</td>
                                    <td>
                                        ISTQB 公式ページ：Certified Tester – Testing with Generative AI (CT-GenAI)
                                    </td>
                                    <td>
                                        <a href="https://istqb.org/certifications/gen-ai/" target="_blank" rel="noopener noreferrer">
                                            https://istqb.org/certifications/gen-ai/
                                        </a>
                                    </td>
                                    <td>
                                        認定の概要、シラバス構成、試験構成（40問／合格 30点／60分）、前提条件（CTFL）、ダウンロード資料
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>2</td>
                                    <td>CT-GenAI Syllabus v1.1（ISTQB 公式ダウンロード）</td>
                                    <td>
                                        <a href="https://istqb.org/?sdm_process_download=1&download_id=6295" target="_blank" rel="noopener noreferrer">
                                            https://istqb.org/?sdm_process_download=1&amp;download_id=6295
                                        </a>
                                    </td>
                                    <td>
                                        第3章（3.1〜3.4）の全内容：学習目標、キーワード、定義、検出方法、軽減技法、攻撃ベクトル表、緩和策、エネルギー、規制・標準の表
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>3</td>
                                    <td>
                                        CT-GenAI Syllabus v1.1（ISQI 掲載の同一PDF。本文書作成時に全文を確認したもの）
                                    </td>
                                    <td>
                                        <a href="https://isqi.org/media/b9/8c/34/1777291646/ISTQB-CT-GenAI%20-%20Syllabus%20v1.1.pdf" target="_blank" rel="noopener noreferrer">
                                            https://isqi.org/media/b9/8c/34/1777291646/ISTQB-CT-GenAI%20-%20Syllabus%20v1.1.pdf
                                        </a>
                                    </td>
                                    <td>同上（2026/04/27 版、71ページ）</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>4</td>
                                    <td>CT-GenAI Sample Exam A Questions v1.1</td>
                                    <td>
                                        <a href="https://istqb.org/?sdm_process_download=1&download_id=6309" target="_blank" rel="noopener noreferrer">
                                            https://istqb.org/?sdm_process_download=1&amp;download_id=6309
                                        </a>
                                    </td>
                                    <td>公式サンプル問題（練習用。本文書では内容未確認）</td>
                                </tr>
                                <tr className="row-even">
                                    <td>5</td>
                                    <td>CT-GenAI Sample Exam A Answers v1.1</td>
                                    <td>
                                        <a href="https://istqb.org/?sdm_process_download=1&download_id=6301" target="_blank" rel="noopener noreferrer">
                                            https://istqb.org/?sdm_process_download=1&amp;download_id=6301
                                        </a>
                                    </td>
                                    <td>公式サンプル問題の解答（本文書では内容未確認）</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>6</td>
                                    <td>CT-GenAI Release Notes v1.1</td>
                                    <td>
                                        <a href="https://istqb.org/?sdm_process_download=1&download_id=9550" target="_blank" rel="noopener noreferrer">
                                            https://istqb.org/?sdm_process_download=1&amp;download_id=9550
                                        </a>
                                    </td>
                                    <td>v1.0 から v1.1 の変更点</td>
                                </tr>
                                <tr className="row-even">
                                    <td>7</td>
                                    <td>ISTQB Exam Structures and Rules v1.2</td>
                                    <td>
                                        <a href="https://istqb.org/?sdm_process_download=1&download_id=3829" target="_blank" rel="noopener noreferrer">
                                            https://istqb.org/?sdm_process_download=1&amp;download_id=3829
                                        </a>
                                    </td>
                                    <td>試験の構造とルール（配点の詳細など）</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="72-学習の補助資料二次ソース">7.2 学習の補助資料（二次ソース）</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>ソース</th>
                                    <th>URL</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>8</td>
                                    <td>
                                        Exactpro：Chapter 3 – Managing Risks of Generative AI in Software Testing（v1.1）Slides
                                    </td>
                                    <td>
                                        <a href="https://speakerdeck.com/exactpro/chapter-3-managing-risks-of-generative-ai-in-software-testing-istqb-ct-genai-v1-dot-1-slides" target="_blank" rel="noopener noreferrer">
                                            https://speakerdeck.com/exactpro/chapter-3-managing-risks-of-generative-ai-in-software-testing-istqb-ct-genai-v1-dot-1-slides
                                        </a>
                                    </td>
                                    <td>第3章の学習目標と構成の確認（160分の学習活動として整理）</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>9</td>
                                    <td>Exactpro：同 Reading Materials</td>
                                    <td>
                                        <a href="https://speakerdeck.com/exactpro/chapter-3-managing-risks-of-generative-ai-in-software-testing-istqb-ct-genai-v1-dot-1-reading" target="_blank" rel="noopener noreferrer">
                                            https://speakerdeck.com/exactpro/chapter-3-managing-risks-of-generative-ai-in-software-testing-istqb-ct-genai-v1-dot-1-reading
                                        </a>
                                    </td>
                                    <td>同上（読み物形式）</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="73-31-節非決定性temperatureseedの補足">
                        7.3 3.1 節（非決定性・temperature・seed）の補足
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>ソース</th>
                                    <th>URL</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>10</td>
                                    <td>
                                        OpenAI Cookbook：How to make your completions outputs reproducible with the new seed parameter
                                    </td>
                                    <td>
                                        <a href="https://cookbook.openai.com/examples/reproducible_outputs_with_the_seed_parameter" target="_blank" rel="noopener noreferrer">
                                            https://cookbook.openai.com/examples/reproducible_outputs_with_the_seed_parameter
                                        </a>
                                    </td>
                                    <td>
                                        seed は<strong>ベストエフォート</strong>で決定性は<strong>保証されない</strong>こと、<code>system_fingerprint</code> の意味
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>11</td>
                                    <td>Microsoft Learn：Azure OpenAI reproducible output</td>
                                    <td>
                                        <a href="https://learn.microsoft.com/azure/ai-services/openai/how-to/reproducible-output" target="_blank" rel="noopener noreferrer">
                                            https://learn.microsoft.com/azure/ai-services/openai/how-to/reproducible-output
                                        </a>
                                    </td>
                                    <td>
                                        同様の説明。seed と <code>system_fingerprint</code> が同じでも変動が残りうること
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>12</td>
                                    <td>Mirzadeh et al. 2024（GSM-Symbolic）※シラバス引用文献</td>
                                    <td>
                                        <a href="https://arxiv.org/abs/2410.05229" target="_blank" rel="noopener noreferrer">
                                            https://arxiv.org/abs/2410.05229
                                        </a>
                                    </td>
                                    <td>LLM の数学的推論の限界（推論エラーの背景）</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>13</td>
                                    <td>
                                        Gallegos et al. 2024（Bias and Fairness in LLMs: A Survey）※シラバス引用文献
                                    </td>
                                    <td>
                                        <a href="https://arxiv.org/abs/2309.00770" target="_blank" rel="noopener noreferrer">
                                            https://arxiv.org/abs/2309.00770
                                        </a>
                                    </td>
                                    <td>LLM のバイアスに関する調査</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="74-32-節プライバシーセキュリティの補足">
                        7.4 3.2 節（プライバシー・セキュリティ）の補足
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>ソース</th>
                                    <th>URL</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>14</td>
                                    <td>OWASP Top 10 for LLM Applications 2025</td>
                                    <td>
                                        <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener noreferrer">
                                            https://genai.owasp.org/llm-top-10/
                                        </a>
                                    </td>
                                    <td>
                                        LLM アプリの10種のリスク（プロンプトインジェクション、機密情報漏えい、データ・モデルポイズニング、過剰な権限付与など）
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>15</td>
                                    <td>GDPR：Regulation (EU) 2016/679（EUR-Lex）</td>
                                    <td>
                                        <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noopener noreferrer">
                                            https://eur-lex.europa.eu/eli/reg/2016/679/oj
                                        </a>
                                    </td>
                                    <td>EU の個人データ保護規則の原文</td>
                                </tr>
                                <tr className="row-even">
                                    <td>16</td>
                                    <td>Microsoft Presidio</td>
                                    <td>
                                        <a href="https://microsoft.github.io/presidio/" target="_blank" rel="noopener noreferrer">
                                            https://microsoft.github.io/presidio/
                                        </a>
                                    </td>
                                    <td>
                                        個人情報の検出・匿名化のためのオープンソースツール（本文書の仮名化コード例の実務代替）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="75-33-節エネルギーの補足">7.5 3.3 節（エネルギー）の補足</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>ソース</th>
                                    <th>URL</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>17</td>
                                    <td>
                                        MIT Technology Review（Heikkilä, 2023/12/01）Making an image with generative AI uses as much energy as charging your phone ※シラバス引用文献
                                    </td>
                                    <td>
                                        <a href="https://www.technologyreview.com/2023/12/01/1084189/making-an-image-with-generative-ai-uses-as-much-energy-as-charging-your-phone/" target="_blank" rel="noopener noreferrer">
                                            https://www.technologyreview.com/2023/12/01/1084189/making-an-image-with-generative-ai-uses-as-much-energy-as-charging-your-phone/
                                        </a>
                                    </td>
                                    <td>
                                        画像1枚≒スマートフォン1回のフル充電、テキスト1,000回で充電の16%
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>18</td>
                                    <td>
                                        Luccioni et al. 2024（Power Hungry Processing）※シラバス引用文献
                                    </td>
                                    <td>
                                        <a href="https://arxiv.org/abs/2311.16863" target="_blank" rel="noopener noreferrer">
                                            https://arxiv.org/abs/2311.16863
                                        </a>
                                    </td>
                                    <td>タスク別のエネルギー消費を測定した研究</td>
                                </tr>
                                <tr className="row-even">
                                    <td>19</td>
                                    <td>Code Carbon</td>
                                    <td>
                                        <a href="https://codecarbon.io/" target="_blank" rel="noopener noreferrer">
                                            https://codecarbon.io/
                                        </a>
                                    </td>
                                    <td>実行時の電力消費と CO₂ 排出を推定する計測ツール</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="76-34-節規制標準フレームワークの補足">
                        7.6 3.4 節（規制・標準・フレームワーク）の補足
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>#</th>
                                    <th>ソース</th>
                                    <th>URL</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>20</td>
                                    <td>EU AI Act：Regulation (EU) 2024/1689（EUR-Lex）</td>
                                    <td>
                                        <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer">
                                            https://eur-lex.europa.eu/eli/reg/2024/1689/oj
                                        </a>
                                    </td>
                                    <td>EU AI Act の原文</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>21</td>
                                    <td>
                                        EU 理事会プレスリリース（2026/06/29）：Digital Omnibus on AI の最終承認
                                    </td>
                                    <td>
                                        <a href="https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/" target="_blank" rel="noopener noreferrer">
                                            https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/
                                        </a>
                                    </td>
                                    <td>高リスク AI の新しい適用日（2027/12/02、2028/08/02）</td>
                                </tr>
                                <tr className="row-even">
                                    <td>22</td>
                                    <td>
                                        Cloud Security Alliance Lab：EU AI Act’s High-Risk Deadline: Deferred, Not Cancelled
                                    </td>
                                    <td>
                                        <a href="https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-high-risk-deadline-omnibus-20260/" target="_blank" rel="noopener noreferrer">
                                            https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-high-risk-deadline-omnibus-20260/
                                        </a>
                                    </td>
                                    <td>
                                        Regulation (EU) 2026/1744 の官報公表・施行日、Article 50 の適用
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>23</td>
                                    <td>Gibson Dunn：EU AI Act Omnibus Agreement</td>
                                    <td>
                                        <a href="https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/" target="_blank" rel="noopener noreferrer">
                                            https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/
                                        </a>
                                    </td>
                                    <td>延期の合意内容の解説</td>
                                </tr>
                                <tr className="row-even">
                                    <td>24</td>
                                    <td>NIST AI Risk Management Framework</td>
                                    <td>
                                        <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer">
                                            https://www.nist.gov/itl/ai-risk-management-framework
                                        </a>
                                    </td>
                                    <td>NIST AI RMF の公式ページ</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>25</td>
                                    <td>NIST AI RMF 1.0（NIST AI 100-1）PDF</td>
                                    <td>
                                        <a href="https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf" target="_blank" rel="noopener noreferrer">
                                            https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf
                                        </a>
                                    </td>
                                    <td>AI RMF 1.0 の本文</td>
                                </tr>
                                <tr className="row-even">
                                    <td>26</td>
                                    <td>NIST AI 600-1（Generative AI Profile）PDF</td>
                                    <td>
                                        <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf" target="_blank" rel="noopener noreferrer">
                                            https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
                                        </a>
                                    </td>
                                    <td>生成AI向けプロファイル</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>27</td>
                                    <td>ISO/IEC 42001:2023（ISO 公式）</td>
                                    <td>
                                        <a href="https://www.iso.org/standard/81230.html" target="_blank" rel="noopener noreferrer">
                                            https://www.iso.org/standard/81230.html
                                        </a>
                                    </td>
                                    <td>AI マネジメントシステム規格の概要</td>
                                </tr>
                                <tr className="row-even">
                                    <td>28</td>
                                    <td>ISO/IEC 23053:2022（ISO 公式）</td>
                                    <td>
                                        <a href="https://www.iso.org/standard/74438.html" target="_blank" rel="noopener noreferrer">
                                            https://www.iso.org/standard/74438.html
                                        </a>
                                    </td>
                                    <td>ML を使う AI システムの枠組み規格の概要</td>
                                </tr>
                                <tr className="row-odd">
                                    <td>29</td>
                                    <td>
                                        AI事業者ガイドライン（第1.1版）概要（総務省・経済産業省、令和7年3月28日）
                                    </td>
                                    <td>
                                        <a href="https://www.soumu.go.jp/main_content/001000989.pdf" target="_blank" rel="noopener noreferrer">
                                            https://www.soumu.go.jp/main_content/001000989.pdf
                                        </a>
                                    </td>
                                    <td>日本の AI ガバナンスの指針（最新版は公式ページで要確認）</td>
                                </tr>
                                <tr className="row-even">
                                    <td>30</td>
                                    <td>経済産業省：AI事業者ガイドライン（第1.0版）公表</td>
                                    <td>
                                        <a href="https://www.meti.go.jp/press/2024/04/20240419004/20240419004.html" target="_blank" rel="noopener noreferrer">
                                            https://www.meti.go.jp/press/2024/04/20240419004/20240419004.html
                                        </a>
                                    </td>
                                    <td>ガイドラインの位置づけと公表の経緯</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="77-本文書の情報の確からしさについて">
                        7.7 本文書の情報の確からしさについて
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="row-header">
                                    <th>区分</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-even">
                                    <td>✅ 直接確認したもの</td>
                                    <td>
                                        公式シラバス v1.1 の第3章全文（ISQI 掲載 PDF）、ISTQB 公式ページ、MIT Technology Review の記事の内容、OpenAI／Microsoft の seed に関する説明、EU AI Act の 2026 年の日程に関する複数の解説
                                    </td>
                                </tr>
                                <tr className="row-odd">
                                    <td>⚠️ 直接確認できていないもの</td>
                                    <td>
                                        公式サンプル試験 A の問題・解答（PDF のため取得できず）、ISO の各規格の本文（有料）、各 URL の最新の状態
                                    </td>
                                </tr>
                                <tr className="row-even">
                                    <td>📝 本文書独自の整理</td>
                                    <td>
                                        覚え方、図解、動作トレース、仮の数値による概算、OWASP との対応、練習問題（学習を助けるための作成物）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="callout-note callout-block">
                        <div className="callout-header">
                            <span className="callout-icon">📌</span>
                            <span className="callout-label">シラバスの補足</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                規制・標準・ツールの仕様は<strong>変わり続けます</strong>。実務で使う前に、必ず公式ページで最新の情報を確認してください。本文書は法的助言ではありません。
                            </p>
                        </div>
                    </div>

                    <div className="page-footer">
                        本ガイドは学習補助を目的とした要約・解説であり、ISTQB公式シラバスの正式な代替とはなりません。試験前には必ず公式シラバスとサンプル試験をご確認ください。
                    </div>
                </main>
            </div>
        </div>
    );
}
