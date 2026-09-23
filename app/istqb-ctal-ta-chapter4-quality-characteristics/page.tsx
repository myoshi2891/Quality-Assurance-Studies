import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './istqb-ctal-ta-chapter4-quality-characteristics.css';

export const metadata: Metadata = {
    title: 'CTAL-TA v4.0 第4章「品質特性のテスト」完全ガイド（初学者向け） | QA Studies',
    description: 'ISTQB Certified Tester Advanced Level Test Analyst (CTAL-TA) v4.0 第4章「品質特性のテスト」の完全解説。機能適合性・ユーザビリティ・フレキシビリティ・相互運用性のテスト設計と評価。',
};

export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontSize": "16px",
    "background": "#ffffff",
    "primaryColor": "#e8efff",
    "primaryTextColor": "#14213d",
    "primaryBorderColor": "#4f6fd6",
    "secondaryColor": "#f1f2f5",
    "secondaryTextColor": "#14213d",
    "secondaryBorderColor": "#8a8f9c",
    "tertiaryColor": "#ffffff",
    "tertiaryTextColor": "#14213d",
    "tertiaryBorderColor": "#c9d3e6",
    "mainBkg": "#e8efff",
    "nodeBorder": "#4f6fd6",
    "nodeTextColor": "#14213d",
    "lineColor": "#5b6b8c",
    "textColor": "#14213d",
    "titleColor": "#14213d",
    "edgeLabelBackground": "#ffffff",
    "clusterBkg": "#f6f8fc",
    "clusterBorder": "#c9d3e6",
    "noteBkgColor": "#fff4dc",
    "noteTextColor": "#5a3d0a",
    "noteBorderColor": "#d9a441",
    "actorBkg": "#e8efff",
    "actorBorder": "#4f6fd6",
    "actorTextColor": "#14213d",
    "actorLineColor": "#8a94b3",
    "signalColor": "#3b4a6b",
    "signalTextColor": "#14213d",
    "labelBoxBkgColor": "#e8efff",
    "labelBoxBorderColor": "#4f6fd6",
    "labelTextColor": "#14213d",
    "transitionColor": "#5b6b8c",
    "transitionLabelColor": "#14213d",
    "stateBkg": "#e8efff",
    "stateLabelColor": "#14213d",
    "stateBorder": "#4f6fd6",
    "specialStateColor": "#3b4a6b",
    "labelColor": "#14213d"
  },
  "flowchart": {
    "useMaxWidth": false,
    "htmlLabels": true,
    "curve": "basis",
    "nodeSpacing": 50,
    "rankSpacing": 55,
    "padding": 12
  },
  "sequence": { "useMaxWidth": false, "wrap": false, "mirrorActors": false },
  "state": { "useMaxWidth": false }
}}%%`;

export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart TD
  S0["0 読み方と限界を確認"] --> S1["1 章の全体像<br/>ISO 25010 との対応"]
  S1 --> S2["2 機能テスト<br/>4.1"]
  S2 --> S3["3 ユーザビリティ<br/>4.2"]
  S3 --> S4["4 フレキシビリティ<br/>4.3"]
  S4 --> S5["5 互換性<br/>4.4"]
  S5 --> S6["6 機能別 早見表"]
  S6 --> S7["7 試験対策"]
  S7 --> S8["8 実務チェックリスト"]
  classDef step fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef last fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class S0,S1,S2,S3,S4,S5,S6,S7 step
  class S8 last`;

export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TD
  G1["このガイドで学ぶ"] --> G2["公式シラバス PDF 44 から 47 ページを通読"]
  G2 --> G3{"ガイドの記述と<br/>公式本文に差異がある?"}
  G3 -->|はい| G4["公式本文を正とする"]
  G3 -->|いいえ| G5["そのまま試験対策へ"]
  classDef step fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef warn fill:#fdebee,stroke:#c05a6e,color:#5a1424
  classDef ok fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class G1,G2,G3 step
  class G4 warn
  class G5 ok`;

export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart TD
  R1["第2章<br/>プロダクトリスクの特定と評価"] --> R2["リスクを品質特性で分類<br/>ISO 25010:2023"]
  R2 --> R3["第4章<br/>品質特性に合うテストタイプを選ぶ"]
  R3 --> R4["第3章<br/>テスト技法で条件とケースを設計"]
  R4 --> R5["実行・結果評価"]
  classDef step fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef focus fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  class R1,R2,R4,R5 step
  class R3 focus`;

export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart LR
  ISO["ISO/IEC 25010:2023<br/>製品品質モデル 9特性"]
  FS["機能適合性<br/>Functional suitability"]
  IC["インタラクション能力<br/>Interaction capability<br/>旧 Usability"]
  FX["柔軟性<br/>Flexibility<br/>旧 Portability"]
  CP["互換性<br/>Compatibility"]
  OT["第4章の対象外<br/>性能効率性・信頼性・セキュリティ<br/>保守性・安全性"]
  ISO --> FS
  ISO --> IC
  ISO --> FX
  ISO --> CP
  ISO --> OT
  FS --> T41["4.1 機能テスト<br/>正確性・適切性・完全性"]
  IC --> T42["4.2 ユーザビリティテスト"]
  FX --> T43["4.3 フレキシビリティテスト<br/>適応性・インストール性"]
  CP --> T44["4.4 互換性テスト<br/>相互運用性"]
  classDef core fill:#e8efff,stroke:#4f6fd6,color:#14213d
  classDef ta fill:#e3f6ec,stroke:#2f9e62,color:#0f3a2e
  classDef out fill:#f1f2f5,stroke:#8a8f9c,color:#2b2b33
  class ISO core
  class FS,IC,FX,CP,T41,T42,T43,T44 ta
  class OT out`;

export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart LR
  K1["正 Correctness<br/>結果は正しいか"]
  K2["適 Appropriateness<br/>タスクに役立つか"]
  K3["完 Completeness<br/>必要な機能は揃っているか"]
  K1 --- K2
  K2 --- K3
  classDef mem fill:#e8efff,stroke:#4f6fd6,color:#14213d
  class K1,K2,K3 mem`;

export default function CtalTaChapter4Page() {
    return (
        <div className="ctal-ta-ch4-page">
            <div className="layout">
                <NavBar />
                <main className="main" id="main">
                    <header className="hero">
                        <span className="eyebrow">ISTQB® CTAL-TA v4.0 ／ CHAPTER 4</span>
                        <h1>CTAL-TA v4.0 第4章「品質特性のテスト」完全ガイド（初学者向け）</h1>
                        <p className="sub">
                            ISTQB® Certified Tester Advanced Level Test Analyst（CTAL-TA）v4.0 ／
                            Chapter 4 &quot;Testing Quality Characteristics&quot;
                        </p>
                        <p className="sub">対象：CTFL を学んだ直後で、Advanced Level は初めての方</p>
                        <div className="pills">
                            <span className="pill">
                                章の学習時間 <b>60分</b>
                            </span>
                            <span className="pill">
                                学習目標 <b>K2 × 4</b>
                            </span>
                            <span className="pill">
                                キーワード <b>13語</b>
                            </span>
                            <span className="pill">
                                図解（mermaid） <b>20点</b>
                            </span>
                            <span className="pill">
                                参考 URL <b>21件</b>
                            </span>
                        </div>
                    </header>

                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>項目</th>
                                    <th>内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>対象シラバス</td>
                                    <td>ISTQB® CTAL-TA Syllabus v4.0（表紙の GA 日付は 2025/05/02）</td>
                                </tr>
                                <tr className="even">
                                    <td>対象章</td>
                                    <td>第4章 Testing Quality Characteristics（品質特性のテスト）</td>
                                </tr>
                                <tr className="odd">
                                    <td>章の学習時間</td>
                                    <td>60分（シラバス全体 1,215 分のうち約 4.9%）</td>
                                </tr>
                                <tr className="even">
                                    <td>学習目標（LO）</td>
                                    <td>
                                        4本すべて K2（理解）：TA-4.1.1 ／ TA-4.2.1 ／ TA-4.3.1 ／
                                        TA-4.4.1
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>作成日</td>
                                    <td>2026-09-20</td>
                                </tr>
                                <tr className="even">
                                    <td>形式</td>
                                    <td>
                                        HTML（ライトモード）。フローチャートは mermaid、図解・表は
                                        Markdown を変換して掲載。ASCII アートは使用しません
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<h2 id="0-このガイドの読み方">0. このガイドの読み方</h2>
<h3 id="01-ゴールと学習の進め方">0.1 ゴールと学習の進め方</h3>
<p>
                    この章を学び終えたときに、次の4つを<strong>自分の言葉で説明できる</strong>ことがゴールです。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>LO</th>
                                <th>レベル</th>
                                <th>学習時間の目安（LO 比較表）</th>
                                <th>説明できるようになること</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>TA-4.1.1</td>
                                <td>K2</td>
                                <td>15 分</td>
                                <td>
                                    機能正確性・機能適切性・機能完全性の<strong>テストの違い</strong>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>TA-4.2.1</td>
                                <td>K2</td>
                                <td>15 分</td>
                                <td>
                                    テストアナリスト（TA）が<strong>ユーザビリティテストにどう貢献するか</strong>
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>TA-4.3.1</td>
                                <td>K2</td>
                                <td>15 分</td>
                                <td>
                                    TA が<strong>適応性（adaptability）とインストール性（installability）のテストにどう貢献するか</strong>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>TA-4.4.1</td>
                                <td>K2</td>
                                <td>15 分</td>
                                <td>
                                    TA が<strong>相互運用性（interoperability）のテストにどう貢献するか</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=6363">ISTQB CTAL-TA v4.0 LO new vs old syllabus（xlsx を PDF 化したもの）</a>
                    </p>
                </div>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-1"><Mermaid chart={DIAGRAM_1} /></div>
                </div>
<h3 id="02-信頼度タグの見方">0.2 信頼度タグの見方</h3>
<p>
                    このガイドでは、内容の根拠の強さを次のタグで区別します。<strong>試験で問われるのは公式文書に書かれていること</strong>なので、タグを意識して読んでください。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>タグ</th>
                                <th>意味</th>
                                <th>扱い方</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> 公式根拠
                                </td>
                                <td>
                                    ISTQB
                                    公式文書（シラバスの取得できた範囲、LO、キーワード、サンプル試験の解説、LO
                                    比較表、リリースノート）や ISO/IEC 25010:2023 の本文で<strong>直接確認できた内容</strong>
                                </td>
                                <td>試験対策の軸にしてよい</td>
                            </tr>
                            <tr className="even">
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> 実務補足
                                </td>
                                <td>
                                    筆者による解説・具体例・ベストプラクティス。公式文書の逐語的な記述ではない
                                </td>
                                <td>理解の助けとして使い、試験では公式表現を優先</td>
                            </tr>
                            <tr className="odd">
                                <td><span className="chip chip-w" title="要確認">⚠</span> 要確認</td>
                                <td>原典の確認が必要な点</td>
                                <td>公式 PDF で必ず裏取りする</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<h3 id="03--このガイドの限界必ず読んでください">
                    0.3 ⚠ このガイドの限界（必ず読んでください）
                </h3>
<div className="callout callout-warn">
                    <span className="lbl">重要なお知らせ</span>
                    <p>
                        <strong>第4章の本文（シラバス PDF の 44〜47
                            ページ）を、この文書の作成環境では全文取得できませんでした。</strong>
                        取得できたのは PDF の 1〜43 ページと、第4章のタイトル・キーワード・LO
                        の冒頭までです。
                    </p>
                </div>
<p>そのため、次の方針で作成しています。</p>
<ol type="1">
                    <li>
                        <strong>確認できた公式情報</strong>を土台にしました：目次（4.1〜4.4）、キーワード、LO、第0〜3章の関連記述（たとえば第3章が第4.1節を参照している箇所）、公式サンプル試験
                        v4.1 の第4章の問題（Q34〜Q37）の<strong>解説文</strong>、LO
                        新旧比較表、ISO/IEC 25010:2023 の定義。
                    </li>
                    <li>
                        本文を直接読めていない部分（典型的な欠陥の一覧、手順の細目など）は
                        <strong><span className="chip chip-t" title="実務補足">💡</span> 実務補足</strong>
                        と明記しました。
                    </li>
                    <li>
                        <strong>学習の最後に、公式シラバスの 44〜47
                            ページ（約4ページ）を必ず通読してください。</strong>
                        差異があれば公式を優先します。
                    </li>
                </ol>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-2"><Mermaid chart={DIAGRAM_2} /></div>
                </div>
<h3 id="04-バージョン情報受験前に確認">0.4 バージョン情報（受験前に確認）</h3>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>項目</th>
                                <th>内容</th>
                                <th>根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>試験構成</td>
                                <td>45 問・合計 78 点・合格 51 点・120 分（非母国語は +25%）</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span>
                                    <a href="https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/">ISTQB 認定ページ</a>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>v3.1 の失効日</td>
                                <td>英語 2026-05-16、英語以外 2026-11-16</td>
                                <td><span className="chip chip-o" title="公式根拠">📘</span> 同上</td>
                            </tr>
                            <tr className="odd">
                                <td>v4.0 の発効日</td>
                                <td>リリースノートでは 2025-05-30 が発効日と記載</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span>
                                    <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5762">リリースノート</a>
                                </td>
                            </tr>
                            <tr className="even">
                                <td>日本語で受験する場合</td>
                                <td>
                                    提供されている試験バージョンは各国の Member Board（日本は
                                    JSTQB）で確認
                                </td>
                                <td><span className="chip chip-w" title="要確認">⚠</span> 要確認</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<h2 id="1-第4章の全体像">1. 第4章の全体像</h2>
<h3 id="11-章の位置づけ">1.1 章の位置づけ</h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span>
                    <strong>第4章の基本情報</strong>
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>項目</th>
                                <th>内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>章タイトル</td>
                                <td>Testing Quality Characteristics（60 分）</td>
                            </tr>
                            <tr className="even">
                                <td>節構成</td>
                                <td>
                                    4.1 Functional Testing ／ 4.2 Usability Testing ／ 4.3
                                    Flexibility Testing ／ 4.4 Compatibility Testing
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>章の学習内容（シラバス 0.10）</td>
                                <td>
                                    いくつかの種類の<strong>機能テスト</strong>の実施方法、および機能に関する専門知識を使った<strong>非機能テスト</strong>（ユーザビリティ・柔軟性・互換性）への貢献
                                </td>
                            </tr>
                            <tr className="even">
                                <td>LO</td>
                                <td>4本（すべて K2）</td>
                            </tr>
                            <tr className="odd">
                                <td>キーワード（K1）</td>
                                <td>13語（1.5 節に一覧）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5745">CTAL-TA v4.0 シラバス</a>（目次、0.10、第4章冒頭）
                    </p>
                </div>
<p><strong>配点のイメージ</strong></p>
<ul>
                    <li>
                        公式サンプル試験 v4.1 では、第4章に対応する問題は
                        <strong>Q34〜Q37 の4問</strong>（すべて K2・各 1 点）です。
                    </li>
                    <li>
                        4 点 ÷ 78 点 ≒ <strong>5.1%</strong>。学習時間の割合（60 ÷ 1,215 ≒
                        4.9%）とほぼ一致します。
                    </li>
                    <li>
                        ただし<strong>サンプル試験は本番の配点配分を保証しません</strong>。本番の構成は「Exam
                        Structures and Rules」を確認してください。
                    </li>
                </ul>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5759">公式サンプル試験 解答 v4.1</a>
                    </p>
                </div>
<div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス</span>
                    <ul>
                        <li>
                            4問しかなくても、合格ラインは 51/78 点です。K2 の 1
                            点問題は<strong>落としにくい問題</strong>なので、取りこぼさないことが効率的な得点源になります。
                        </li>
                        <li>
                            第4章は「用語の違いを区別する」問題が中心です。1.5 節のキーワードと、第
                            7 章の比較表を重点的に覚えましょう。
                        </li>
                    </ul>
                </div>
<h3 id="12-なぜ-ta-が品質特性のテストを扱うのか">
                    1.2 なぜ TA が品質特性のテストを扱うのか
                </h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span> シラバスは TA
                    を次のような役割として定義しています（0.2）。
                </p>
<ul>
                    <li>顧客のビジネスニーズに、技術的な側面よりも重点を置く</li>
                    <li>
                        主に<strong>機能テスト</strong>を行い、さらにユーザー志向の<strong>非機能テスト</strong>（ユーザビリティ、適応性、インストール性、相互運用性）にも貢献する
                    </li>
                    <li>
                        ホワイトボックスよりも、<strong>ブラックボックス技法と経験ベースのテスト</strong>を使う
                    </li>
                </ul>
<p>
                    第2章では、TA
                    が<strong>プロダクトリスクを品質特性で分類</strong>すること（ISO/IEC 25010:2023
                    を使用）、そしてリスク軽減策の一つとして「<strong>適切なテストタイプを適用すること</strong>」があり、それは<strong>第4章で扱う</strong>と明記されています。
                </p>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-3"><Mermaid chart={DIAGRAM_3} /></div>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<span className="chip chip-o" title="公式根拠">📘</span>
                        <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5745">シラバス 0.2、2.1、2.2</a>
                    </p>
                </div>
<h3 id="13-isoiec-250102023-との対応">1.3 ISO/IEC 25010:2023 との対応</h3>
<p>
                    第4章は ISO/IEC
                    25010:2023（製品品質モデル）を<strong>枠組み</strong>として使います（シラバス
                    0.8）。ISO/IEC 25010:2023 は <strong>9つの品質特性</strong>を定義しています。
                </p>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-4"><Mermaid chart={DIAGRAM_4} /></div>
                </div>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>#</th>
                                <th>特性（英語）</th>
                                <th>日本語（仮訳）</th>
                                <th>サブ特性</th>
                                <th>第4章</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>Functional suitability</td>
                                <td>機能適合性</td>
                                <td>完全性・正確性・適切性</td>
                                <td><strong>4.1</strong></td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>Performance efficiency</td>
                                <td>性能効率性</td>
                                <td>時間効率性・資源効率性・容量</td>
                                <td>対象外</td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>Compatibility</td>
                                <td>互換性</td>
                                <td>共存性・<strong>相互運用性</strong></td>
                                <td><strong>4.4</strong>（LO は相互運用性）</td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>Interaction capability</td>
                                <td>インタラクション能力</td>
                                <td>
                                    適切性の認識・学習性・操作性・ユーザーエラー防止・ユーザーエンゲージメント・包括性・ユーザー支援・自己記述性
                                </td>
                                <td><strong>4.2</strong></td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>Reliability</td>
                                <td>信頼性</td>
                                <td>無欠陥性・可用性・耐障害性・回復性</td>
                                <td>対象外</td>
                            </tr>
                            <tr className="even">
                                <td>6</td>
                                <td>Security</td>
                                <td>セキュリティ</td>
                                <td>機密性・完全性・否認防止・責任追跡性・真正性・耐性</td>
                                <td>対象外</td>
                            </tr>
                            <tr className="odd">
                                <td>7</td>
                                <td>Maintainability</td>
                                <td>保守性</td>
                                <td>モジュール性・再利用性・解析性・修正性・試験性</td>
                                <td>対象外</td>
                            </tr>
                            <tr className="even">
                                <td>8</td>
                                <td>Flexibility</td>
                                <td>柔軟性</td>
                                <td>
                                    <strong>適応性</strong>・拡張性・<strong>インストール性</strong>・置換性
                                </td>
                                <td><strong>4.3</strong>（LO は適応性とインストール性）</td>
                            </tr>
                            <tr className="odd">
                                <td>9</td>
                                <td>Safety</td>
                                <td>安全性</td>
                                <td>
                                    運用上の制約・リスク特定・フェールセーフ・危険警告・安全な統合
                                </td>
                                <td>対象外</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<ul>
                    <li>
                        <span className="chip chip-o" title="公式根拠">📘</span>
                        9特性の名称と、Usability→Interaction capability／Portability→Flexibility
                        への置き換えは ISO の前文で確認済みです。
                    </li>
                    <li>
                        <span className="chip chip-t" title="実務補足">💡</span> 「対象外」は「第4章の
                        LO の対象外」という意味です。TA
                        が性能やセキュリティにまったく関与しないという意味ではありません（第2章のとおり、リスクの分類では
                        TA も関与します）。
                    </li>
                    <li>
                        <span className="chip chip-w" title="要確認">⚠</span> 一部のWebサイト（arc42
                        の一覧）では testability が柔軟性の行に並んで表示されますが、ISO/IEC
                        25010:2023 では保守性の下位と理解しています。原典で確認してください。
                    </li>
                </ul>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://www.iso.org/standard/78176.html">ISO/IEC 25010:2023（iso.org）</a>
                        ／
                        <a href="https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf">ISO/IEC 25010:2023 プレビュー PDF（iteh）</a>
                        ／
                        <a href="https://quality.arc42.org/standards/iso-25010">arc42 Quality Model：ISO 25010 一覧</a>
                    </p>
                </div>
<h3 id="14-v31-から-v40-への用語構成の変更点">
                    1.4 v3.1 から v4.0 への用語・構成の変更点
                </h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span>
                    旧版の知識（や古い学習教材）が混ざると混乱しやすいので、違いを整理します。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>観点</th>
                                <th>旧（ISO 25010:2011／CTAL-TA v3.1）</th>
                                <th>新（ISO 25010:2023／CTAL-TA v4.0）</th>
                                <th>根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>ユーザビリティの特性名</td>
                                <td>Usability</td>
                                <td>
                                    <strong>Interaction capability</strong>（第4章のキーワードには
                                    usability と interaction capability の両方が残る）
                                </td>
                                <td>ISO 前文、v4.0 キーワード</td>
                            </tr>
                            <tr className="even">
                                <td>移植性の特性名</td>
                                <td>Portability</td>
                                <td>
                                    <strong>Flexibility</strong>（LO 比較表：ISO 25010 (2023)
                                    に合わせて名称変更）
                                </td>
                                <td>LO 比較表</td>
                            </tr>
                            <tr className="odd">
                                <td>アクセシビリティ</td>
                                <td>Accessibility</td>
                                <td>
                                    <strong>Inclusivity（包括性）と User
                                        assistance（ユーザー支援）に分割</strong>
                                </td>
                                <td>ISO 前文</td>
                            </tr>
                            <tr className="even">
                                <td>UI の美しさ</td>
                                <td>User interface aesthetics</td>
                                <td><strong>User engagement</strong> に置き換え</td>
                                <td>ISO 前文</td>
                            </tr>
                            <tr className="odd">
                                <td>成熟性</td>
                                <td>Maturity</td>
                                <td><strong>Faultlessness（無欠陥性）</strong> に置き換え</td>
                                <td>ISO 前文</td>
                            </tr>
                            <tr className="even">
                                <td>追加された特性・サブ特性</td>
                                <td>—</td>
                                <td>
                                    Safety（特性）、Self-descriptiveness・Inclusivity（インタラクション能力）、Resistance（セキュリティ）、Scalability（柔軟性）
                                </td>
                                <td>ISO 前文</td>
                            </tr>
                            <tr className="odd">
                                <td>章の学習時間</td>
                                <td>180 分（v3.1 の 4 章）</td>
                                <td><strong>60 分</strong></td>
                                <td>LO 比較表</td>
                            </tr>
                            <tr className="even">
                                <td>機能テストの扱い</td>
                                <td>4.2.1〜4.2.3 で技法・欠陥・時期を K2 で3本の LO</td>
                                <td>
                                    1 本の
                                    LO（TA-4.1.1）に<strong>簡素化</strong>。詳細は第3章の技法の説明に移動
                                </td>
                                <td>LO 比較表</td>
                            </tr>
                            <tr className="odd">
                                <td>学習目標の焦点</td>
                                <td>「対象とする典型的な欠陥を定義する」など</td>
                                <td>
                                    「<strong>TA がどう貢献するか</strong>を説明する」に書き換え
                                </td>
                                <td>LO 比較表</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf">ISO/IEC 25010:2023 前文</a>
                        ／
                        <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=6363">LO 新旧比較表</a>
                    </p>
                </div>
<div className="callout callout-practice">
                    <span className="lbl">ベストプラクティス</span>
                    <ul>
                        <li>
                            v3.1 の教材（「Portability」「Usability
                            evaluation」などの表現）で学ぶ場合は、v4.0
                            の用語（Flexibility／Interaction
                            capability）に<strong>読み替える</strong>メモを作りましょう。
                        </li>
                        <li>
                            v3.1 が学習目標にしていた「典型的な欠陥の一覧」は、v4.0 では LO
                            から外れています。暗記より「TA
                            が何をするか」を説明できることを優先してください。
                        </li>
                    </ul>
                </div>
<h3 id="15-キーワード13語k1定義を思い出せること">
                    1.5 キーワード13語（K1：定義を思い出せること）
                </h3>
<p>
                    <span className="chip chip-o" title="公式根拠">📘</span>
                    第4章の冒頭に列挙されたキーワードです。LO に含まれなくても、<strong>用語集（ISTQB Glossary）の名称と定義を思い出せる</strong>ことが求められます（シラバス 0.5）。日本語は仮訳で、正式な訳語は JSTQB
                    用語集を確認してください。
                </p>
<div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>#</th>
                                <th>キーワード</th>
                                <th>日本語（仮訳）</th>
                                <th>一言でいうと</th>
                                <th>定義の根拠</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>1</td>
                                <td>functional suitability</td>
                                <td>機能適合性</td>
                                <td>利用者の明示・暗黙のニーズを満たす機能を提供できる能力</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO
                                    25010:2023 3.1
                                </td>
                            </tr>
                            <tr className="even">
                                <td>2</td>
                                <td>functional completeness</td>
                                <td>機能完全性</td>
                                <td>
                                    特定されたタスクと利用者の目的を<strong>すべて</strong>カバーする機能がある
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO 3.1.1
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>3</td>
                                <td>functional correctness</td>
                                <td>機能正確性</td>
                                <td><strong>正確な結果</strong>を提供できる（精度も含む）</td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO 3.1.2
                                </td>
                            </tr>
                            <tr className="even">
                                <td>4</td>
                                <td>functional appropriateness</td>
                                <td>機能適切性</td>
                                <td>
                                    タスクや目的の達成を<strong>助ける</strong>機能である（不要な手順がない）
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO 3.1.3
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>5</td>
                                <td>functional testing</td>
                                <td>機能テスト</td>
                                <td>機能適合性を評価するテスト</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span>
                                    用語集で確認
                                </td>
                            </tr>
                            <tr className="even">
                                <td>6</td>
                                <td>usability</td>
                                <td>ユーザビリティ（使用性）</td>
                                <td>利用者が目標を効果的・効率的・満足して達成できる度合い</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> 用語集／ISO
                                    25019
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>7</td>
                                <td>interaction capability</td>
                                <td>インタラクション能力</td>
                                <td>
                                    利用者が UI
                                    を介して情報をやりとりし、タスクを完了できる能力（<strong>旧 usability</strong>）
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO 3.4
                                </td>
                            </tr>
                            <tr className="even">
                                <td>8</td>
                                <td>user experience</td>
                                <td>ユーザーエクスペリエンス（UX）</td>
                                <td>製品の利用（または利用の予期）によって生じる人の知覚や反応</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> 用語集／ISO
                                    9241-210 で確認
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>9</td>
                                <td>flexibility</td>
                                <td>柔軟性</td>
                                <td>
                                    異なる、または変化する環境に適応できる度合い（<strong>旧 portability</strong>）
                                </td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span> ISO
                                    25010:2023
                                </td>
                            </tr>
                            <tr className="even">
                                <td>10</td>
                                <td>adaptability</td>
                                <td>適応性</td>
                                <td>異なる環境に<strong>適応</strong>できる</td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span>
                                    用語集で確認
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>11</td>
                                <td>installability</td>
                                <td>インストール性</td>
                                <td>
                                    指定環境に<strong>インストール／アンインストール</strong>できる
                                </td>
                                <td>
                                    <span className="chip chip-t" title="実務補足">💡</span>
                                    用語集で確認
                                </td>
                            </tr>
                            <tr className="even">
                                <td>12</td>
                                <td>compatibility</td>
                                <td>互換性</td>
                                <td>
                                    他製品と情報を交換できる、または同じ環境や資源を共有しながら機能を果たせる
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO 3.3
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>13</td>
                                <td>interoperability</td>
                                <td>相互運用性</td>
                                <td>
                                    他製品と情報を<strong>交換し、その情報を相互に利用</strong>できる
                                </td>
                                <td>
                                    <span className="chip chip-o" title="公式根拠">📘</span> ISO
                                    3.3.2、サンプル試験 Q37 の解説
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<div className="callout callout-source">
                    <p>
                        出典：<a href="https://istqb.org/?sdm_process_download=1&amp;download_id=5745">シラバス 第4章 Keywords</a>
                        ／
                        <a href="https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf">ISO/IEC 25010:2023 プレビュー</a>
                        ／ <a href="https://glossary.istqb.org/">ISTQB Glossary</a>
                    </p>
                </div>
<p>
                    <strong>覚え方のコツ（<span className="chip chip-t" title="実務補足">💡</span>）</strong>：4.1
                    の3特性は「<strong>正（correctness）・適（appropriateness）・完（completeness）</strong>」の3文字で覚えます。
                </p>
<div className="mermaid-container">
                    <div className="mermaid-target" id="mermaid-diagram-5"><Mermaid chart={DIAGRAM_5} /></div>
                </div>
                </main>
            </div>
        </div>
    );
}
