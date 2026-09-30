import React from "react";
import type { Metadata } from "next";
import NavBar from "./NavBar";
import Mermaid from '../../components/Mermaid';
import {
  DIAGRAM_1, DIAGRAM_2, DIAGRAM_3, DIAGRAM_4, DIAGRAM_5,
  DIAGRAM_6, DIAGRAM_7, DIAGRAM_8, DIAGRAM_9, DIAGRAM_10
} from "./diagrams";
import "./istqb-ctal-tm-chapter1-managing-the-test-activities.css";

export const metadata: Metadata = {
  title: "ISTQB CTAL-TM v3.0 Chapter 1「テスト活動の管理」初学者向け完全ガイド",
  description: "ISTQB Advanced Level Test Management (CTAL-TM) v3.0 第1章「テスト活動の管理」初学者向け完全解説ガイド。テストプロセス、コンテキスト、RBT、テスト戦略、プロセス改善、テストツールの全貌を網羅。",
};

export default function CtalTmChapter1Page() {
  return (
    <div className="ctal-tm-ch1-page">
      <div className="layout">
        <NavBar />
        <main className="main" role="main">
          <header className="hero">
                    <h1>ISTQB CTAL-TM v3.0 Chapter 1「テスト活動の管理」初学者向け完全ガイド</h1>
                    <dl className="hero-meta">
                        <div className="hero-row">
                            <dt>対象資格</dt>
                            <dd>Certified Tester Advanced Level Test Management（CTAL-TM）v3.0</dd>
                        </div>
                        <div className="hero-row">
                            <dt>対象章</dt>
                            <dd>Chapter 1 Managing the Test Activities（最小学習時間 750 分）</dd>
                        </div>
                        <div className="hero-row">
                            <dt>一次情報</dt>
                            <dd>ISTQB 公式シラバス v3.0（2024/05/03 リリース版）</dd>
                        </div>
                        <div className="hero-row">
                            <dt>読者</dt>
                            <dd>
                                ISTQB Foundation Level（FL）v4.0
                                を学習済み、またはこれからテストマネジメントを学ぶ方
                            </dd>
                        </div>
                    </dl>
                    <ul className="pills">
                        <li><span>学習目標</span>28（K2:22／K3:2／K4:4）</li>
                        <li><span>最小学習時間</span>750 分</li>
                        <li><span>試験</span>50 問・120 分・58/88 点で合格</li>
                        <li><span>図解</span>23 点（mermaid）</li>
                        <li><span>表</span>79 点</li>
                    </ul>
                </header>
          <article className="content">
            <h2 id="sec-1">0. このガイドの使い方</h2>
<h3 id="sec-1-1">0.1 Chapter 1 の位置づけ</h3>
<p>
                        CTAL-TM v3.0 は 3 章構成です。Chapter 1 は全体の約 55%
                        を占める、最重要の章です。
                    </p>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>章</th>
                                    <th>タイトル</th>
                                    <th>最小学習時間</th>
                                    <th>全体に占める割合（算出）</th>
                                    <th>主題</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>1</strong></td>
                                    <td>
                                        <strong>Managing the Test
                                            Activities（テスト活動の管理）</strong>
                                    </td>
                                    <td><strong>750 分</strong></td>
                                    <td><strong>約 55%</strong></td>
                                    <td>
                                        計画・監視・コントロール・完了、コンテキスト、リスクベースドテスト、テスト戦略、プロセス改善、ツール
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>2</td>
                                    <td>Managing the Product（プロダクトの管理）</td>
                                    <td>390 分</td>
                                    <td>約 29%</td>
                                    <td>メトリクス、見積り、欠陥管理</td>
                                </tr>
                                <tr className="odd">
                                    <td>3</td>
                                    <td>Managing the Team（チームの管理）</td>
                                    <td>225 分</td>
                                    <td>約 16%</td>
                                    <td>チームのスキル、ステークホルダー関係、ビジネスケース</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<aside className="callout callout-note">
                        <p>
                            合計 1,365 分（22.75
                            時間）に対する割合は、本ガイド作成者が算出した参考値です。
                        </p>
                    </aside>
<h3 id="sec-1-2">0.2 試験の基本情報（ISTQB 公式ページより）</h3>
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
                                    <td>問題数</td>
                                    <td>50 問</td>
                                </tr>
                                <tr className="even">
                                    <td>満点</td>
                                    <td>88 点</td>
                                </tr>
                                <tr className="odd">
                                    <td>合格点</td>
                                    <td>58 点</td>
                                </tr>
                                <tr className="even">
                                    <td>試験時間</td>
                                    <td>120 分（非母語受験者は +25%）</td>
                                </tr>
                                <tr className="odd">
                                    <td>受験前提</td>
                                    <td>
                                        Foundation Level 認定（v4.0
                                        または旧バージョン）＋実務経験（詳細は各 Member Board /
                                        試験提供機関に確認）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<p>
                        サンプル試験では 1 点問題と 3 点問題が確認できます。Chapter 1 は
                        K4（分析）問題を含むため、<strong>単なる暗記では得点しにくい章</strong>です。
                    </p>
<h3 id="sec-1-3">0.3 学習目標（Learning Objectives）と認知レベル</h3>
<p>
                        Chapter 1 には 28 個の学習目標があります。認知レベルの内訳は次のとおりです。
                    </p>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>レベル</th>
                                    <th>意味</th>
                                    <th>個数</th>
                                    <th>該当する学習目標</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>K2</td>
                                    <td>理解する（説明・比較・要約）</td>
                                    <td>22</td>
                                    <td>大半の項目</td>
                                </tr>
                                <tr className="even">
                                    <td>K3</td>
                                    <td>適用する</td>
                                    <td>2</td>
                                    <td>TM-1.4.3（S.M.A.R.T.）、TM-1.5.4（レトロスペクティブ）</td>
                                </tr>
                                <tr className="odd">
                                    <td>K4</td>
                                    <td>分析する</td>
                                    <td>4</td>
                                    <td>TM-1.2.7、TM-1.3.4、TM-1.4.2、TM-1.6.3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<aside className="callout callout-note">
                        <p>
                            シラバスの規則として、すべての内容は最低でも
                            K1（用語を思い出せる）レベルで出題され得ます。各章の冒頭に並ぶ<strong>キーワードは必ず覚える</strong>必要があります。
                        </p>
                    </aside>
<h3 id="sec-1-4">0.4 学習の進め方</h3>

        <figure className="diagram-card">
          <div className="mermaid-container" id="mermaid-diagram-1">
            <Mermaid chart={DIAGRAM_1} />
          </div>
          <figcaption>図 1</figcaption>
        </figure>
      
<h3 id="sec-1-5">0.5 Chapter 1 全体の関係図</h3>

        <figure className="diagram-card">
          <div className="mermaid-container" id="mermaid-diagram-2">
            <Mermaid chart={DIAGRAM_2} />
          </div>
          <figcaption>図 2</figcaption>
        </figure>
      
<h3 id="sec-1-6">0.6 最初に押さえる用語（Chapter 1 の基礎）</h3>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>用語（英）</th>
                                    <th>日本語</th>
                                    <th>かんたんな説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>Test strategy</td>
                                    <td>テスト戦略</td>
                                    <td>
                                        「テスト目的を達成するために、どうテストするか」の説明。組織・プロジェクト・テストレベル・テストタイプなど、さまざまな範囲で存在し得る
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>Organizational test strategy</td>
                                    <td>組織のテスト戦略</td>
                                    <td>
                                        組織全体で「テストはこう行う」と定めた高レベルの戦略。本シラバスでは<strong>与えられたもの</strong>として扱う
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>Project test strategy</td>
                                    <td>プロジェクトテスト戦略</td>
                                    <td>
                                        特定のプロジェクト／リリース／製品向けに具体化した戦略。<strong>テスト計画の主要な成果物</strong>
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>Test approach</td>
                                    <td>テストアプローチ</td>
                                    <td>
                                        テスト作業を実施する方法。テストレベル・テストタイプ・テスト技法（静的／動的）・その他の実践（スクリプト化テスト、手動テスト等）の<strong>選択と組み合わせ</strong>
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>Test plan</td>
                                    <td>テスト計画書</td>
                                    <td>
                                        戦略・スコープ・目的・終了基準などを記述する文書。戦略が別文書に書かれる場合もある
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>Test policy</td>
                                    <td>テストポリシー</td>
                                    <td>組織がテストに求める方針（計画の出発点となる）</td>
                                </tr>
                                <tr className="odd">
                                    <td>Test manager / Test management role</td>
                                    <td>テストマネージャー／テストマネジメント役割</td>
                                    <td>
                                        逐次型モデルでは独立した役割として置かれることが多い。役割の名称や範囲はコンテキストで異なる
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>Product risk / Quality risk</td>
                                    <td>プロダクトリスク／品質リスク</td>
                                    <td>製品に品質上の問題が存在し得る潜在的状況</td>
                                </tr>
                                <tr className="odd">
                                    <td>SDLC</td>
                                    <td>ソフトウェア開発ライフサイクル</td>
                                    <td>逐次型、反復型、増分型、アジャイル、ハイブリッドなど</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<aside className="callout callout-practice">
                        <div className="callout-label">
                            <span aria-hidden="true" className="callout-icon">💡</span><span>つまずきやすい点</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                このシラバスは「<strong>プロジェクトレベル</strong>のテストマネジメント」に焦点を当てています。組織レベルのテストマネジメント（組織戦略の策定など）は、Expert
                                Level や Agile Test Leadership at Scale の範囲です。
                            </p>
                        </div>
                    </aside>
            <h2 id="sec-2">1. テストプロセス（Section 1.1）</h2>
<p><strong>学習目標</strong>：TM-1.1.1〜1.1.3（すべて K2）</p>
<h3 id="sec-2-1">1.1 なぜこの節が重要か</h3>
<p>FL v4.0 のテストプロセスは 7 つの活動で構成されます。</p>
<ul>
                        <li>テスト計画</li>
                        <li>テストのモニタリングとコントロール</li>
                        <li>テスト分析</li>
                        <li>テスト設計</li>
                        <li>テスト実装</li>
                        <li>テスト実行</li>
                        <li>テスト完了</li>
                    </ul>
<p>
                        CTAL-TM では、このうち<strong>マネジメントに直結する 3 つ</strong>（計画／モニタリングとコントロール／完了）を深掘りします。これらの活動は
                        SDLC
                        やプロジェクトの状況に応じて、<strong>反復的あるいは並行して</strong>実施され、<strong>テーラリング（調整）が通常必要</strong>です。
                    </p>

        <figure className="diagram-card">
          <div className="mermaid-container" id="mermaid-diagram-3">
            <Mermaid chart={DIAGRAM_3} />
          </div>
          <figcaption>図 3</figcaption>
        </figure>
      
<p>
                        また、ISO/IEC/IEEE 29119-2
                        がこれらのテストマネジメントプロセスを定義しており、<strong>プロジェクト、プログラム、ポートフォリオ</strong>といった異なるレベルで適用できます。各レベルは、上位レベルのテスト計画と整合した独自のテスト計画を持てます。
                    </p>
<aside className="callout callout-warn">
                        <div className="callout-label">
                            <span aria-hidden="true" className="callout-icon">⚠</span><span>注意</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                標準（ISO/IEC/IEEE 29119
                                等）は<strong>参考情報であり、試験範囲ではありません</strong>。シラバス内で要約されている範囲だけを押さえれば十分です。
                            </p>
                        </div>
                    </aside>
<h3 id="sec-2-2">1.2 テスト計画活動（TM-1.1.1）</h3>
<h4 id="sub-1">1.2.1 何をするのか</h4>
<p>
                        テスト計画は、<strong>テスト目的を達成するために必要な活動とリソースを特定する</strong>活動です。対象範囲は次のように多様です。
                    </p>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>計画のスコープ</th>
                                    <th>例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>プロジェクト全体</td>
                                    <td>マスターテスト計画</td>
                                </tr>
                                <tr className="even">
                                    <td>テストレベル</td>
                                    <td>システムテスト計画</td>
                                </tr>
                                <tr className="odd">
                                    <td>テストタイプ</td>
                                    <td>性能テスト計画、セキュリティテスト計画</td>
                                </tr>
                                <tr className="even">
                                    <td>リリース／反復／スプリント</td>
                                    <td>アジャイルのスプリント計画</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<p>スコープによって、計画の開始・終了時点が異なります。</p>
<h4 id="sub-2">1.2.2 計画のタイミング</h4>
<ul>
                        <li>
                            開発プロセスのできるだけ<strong>早い時期</strong>に開始する（できれば要件が特定される前が望ましい）
                        </li>
                        <li>プロジェクトの進行に合わせて<strong>更新</strong>する</li>
                        <li>
                            変更やフィードバックに対応するため、<strong>反復的に再計画</strong>する
                        </li>
                    </ul>
<h4 id="sub-3">1.2.3 テスト計画の 5 つのタスク</h4>

        <figure className="diagram-card">
          <div className="mermaid-container" id="mermaid-diagram-4">
            <Mermaid chart={DIAGRAM_4} />
          </div>
          <figcaption>図 4</figcaption>
        </figure>
      
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>#</th>
                                    <th>タスク</th>
                                    <th>内容（要点）</th>
                                    <th>ベストプラクティス</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>1</td>
                                    <td>コンテキストを理解し、計画作成を組織化する</td>
                                    <td>
                                        テストポリシー、組織のテスト戦略、テストのスコープ、テスト対象（テストアイテム）を把握する。計画作成の活動とスケジュールについて、ステークホルダー（プロダクトオーナー、プロジェクトマネージャー、開発チームマネージャー等）の承認を得る
                                    </td>
                                    <td>
                                        計画に着手する前に、<strong>入力情報（方針・戦略・スコープ）を一覧化</strong>し、欠けている情報は早めにステークホルダーへ確認する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>2</td>
                                    <td>プロダクトリスクを特定・分析する</td>
                                    <td>
                                        発生<strong>可能性</strong>と<strong>影響</strong>を評価する（詳細は
                                        Section 1.3）
                                    </td>
                                    <td>
                                        リスク分析は<strong>計画の入力</strong>。計画書を書き終えてから後付けにしない
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>3</td>
                                    <td>リスク対応アプローチを特定する</td>
                                    <td>
                                        分析結果に基づき、予防・是正・軽減などの対応方針を選び、<strong>テスト計画に記載</strong>する
                                    </td>
                                    <td>
                                        「テストで対応するリスク」と「他の手段（回避策・移転・受容）で対応するリスク」を切り分けて記録する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>4</td>
                                    <td>テストアプローチの定義とリソースの見積り・配分</td>
                                    <td>
                                        組織のテスト戦略、規制標準、プロジェクトの制約、リスク対応アプローチを踏まえ、<strong>現在のスコープ</strong>のテストアプローチを定義する。要員、ツール、環境、データなどを見積り、活動に割り当てる
                                    </td>
                                    <td>
                                        人だけでなく、<strong>ツール・環境・テストデータ</strong>も見積り対象に含める（見落としやすい）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>5</td>
                                    <td>テスト計画を確立する</td>
                                    <td>
                                        テスト計画は<strong>すべてのステークホルダーに受け入れられる</strong>必要がある。意見の相違は解消する
                                    </td>
                                    <td>
                                        合意の証跡（レビュー記録・承認記録）を残す。未解決の相違は<strong>リスクとして計画に記載</strong>する
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<aside className="callout callout-practice">
                        <div className="callout-label">
                            <span aria-hidden="true" className="callout-icon">💡</span><span>かんたん言い換え</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                「計画」とは、①状況を理解し → ②リスクを見つけ → ③対応方針を決め →
                                ④どうテストするか・何が必要かを決め →
                                ⑤みんなで合意する、という一連の流れです。
                            </p>
                        </div>
                    </aside>
<h4 id="sub-4">1.2.4 試験でよく問われるポイント</h4>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>論点</th>
                                    <th>正しい理解</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>計画はいつ行うか</td>
                                    <td>
                                        プロジェクト開始時の 1
                                        回だけではなく、<strong>継続的に見直す</strong>。可能な限り早期に着手する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>計画の成果物</td>
                                    <td>
                                        プロジェクトテスト戦略は<strong>テスト計画の主要な成果</strong>
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>承認</td>
                                    <td>
                                        すべてのステークホルダーの<strong>受け入れ</strong>が必要。相違は解消する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>標準との関係</td>
                                    <td>
                                        ISO/IEC/IEEE 29119-2
                                        に類似したタスク構成だが、標準自体は試験範囲外
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<h3 id="sec-2-3">1.3 テストのモニタリングとコントロール（TM-1.1.2）</h3>
<h4 id="sub-5">1.3.1 モニタリングとコントロールの違い</h4>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>活動</th>
                                    <th>目的</th>
                                    <th>主な内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>モニタリング（監視）</strong></td>
                                    <td>状況を<strong>把握する</strong></td>
                                    <td>
                                        テスト結果の収集・記録、計画からの逸脱の特定、テストを必要とする新たなリスクの特定・分析、既知リスクの変化の監視
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td><strong>コントロール（統制）</strong></td>
                                    <td>状況に応じて<strong>手を打つ</strong></td>
                                    <td>
                                        実績と計画の比較、是正措置の実施、テストが戦略と目的を満たすよう誘導、必要に応じて計画活動を見直す
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<p>この 2 つは<strong>継続的に行われる活動</strong>です。</p>

        <figure className="diagram-card">
          <div className="mermaid-container" id="mermaid-diagram-5">
            <Mermaid chart={DIAGRAM_5} />
          </div>
          <figcaption>図 5</figcaption>
        </figure>
      
<h4 id="sub-6">1.3.2 モニタリングの枠組み（フレームワーク）を用意する</h4>
<p>効率的なテストコントロールのため、次を整えておく必要があります。</p>
<ul>
                        <li>
                            テストの状況と進捗を追跡できる<strong>テストスケジュール</strong>と<strong>モニタリングの枠組み</strong>
                        </li>
                        <li>
                            テスト作業成果物とリソースの状況を、計画や戦略目標に関連付ける<strong>詳細な測定値と目標値</strong>
                        </li>
                    </ul>
<p>
                        小規模で単純なプロジェクトでは関連付けが比較的容易ですが、一般には<strong>より詳細な目的を定義</strong>する必要があります（例：テスト目的の達成に必要な測定値・目標値、テストベースのカバレッジ）。
                    </p>
<p>
                        特に重要なのは、<strong>プロジェクトやビジネスのステークホルダーが理解でき、かつ自分に関係があると感じる形</strong>で状況を伝えることです。
                    </p>
<h4 id="sub-7">1.3.3 コントロールの 5 つの活動</h4>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>#</th>
                                    <th>活動</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>1</td>
                                    <td>テスト計画とコントロール指示の実施</td>
                                    <td>計画を実行し、統制のための指示を出す</td>
                                </tr>
                                <tr className="even">
                                    <td>2</td>
                                    <td>計画からの逸脱の管理</td>
                                    <td>スケジュール遅延、カバレッジ不足などに対処する</td>
                                </tr>
                                <tr className="odd">
                                    <td>3</td>
                                    <td>新規・変更リスクへの対応</td>
                                    <td>モニタリングで見つかったリスクを扱う</td>
                                </tr>
                                <tr className="even">
                                    <td>4</td>
                                    <td>テスト開始準備の確立</td>
                                    <td>
                                        テストを始められる状態（環境、データ、入力成果物など）を整える
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>5</td>
                                    <td><strong>終了基準に基づくテスト完了の承認</strong></td>
                                    <td>終了基準を満たしていることを確認し、承認を与える／得る</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<h4 id="sub-8">1.3.4 ベストプラクティス</h4>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>観点</th>
                                    <th>ベストプラクティス</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>指標の設計</td>
                                    <td>
                                        指標は<strong>計画時に</strong>定義し、目標値とセットにする（後付けの指標は判断基準が曖昧になる）
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>報告の粒度</td>
                                    <td>
                                        受け手（経営層／プロジェクト管理者／開発者）に応じて粒度を変える
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>リスクの追跡</td>
                                    <td>
                                        モニタリングに<strong>リスク監視を含め</strong>、リスク台帳を更新し続ける
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>是正措置</td>
                                    <td>
                                        逸脱の原因を確認してから措置を選ぶ（症状だけを見て対応しない）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>計画の見直し</td>
                                    <td>
                                        措置で対応しきれない場合は<strong>計画活動に戻る</strong>（再計画を「失敗」と考えない）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<h3 id="sec-2-4">1.4 テスト完了活動（TM-1.1.3）</h3>
<h4 id="sub-9">1.4.1 いつ行うか</h4>
<p>
                        テスト完了は、通常<strong>プロジェクトのマイルストーン</strong>（リリース、反復の終わり、テストレベルの完了）で行われます。未解決の欠陥については、<strong>変更要求やプロダクトバックログアイテムを作成</strong>します。<strong>終了基準を満たした後</strong>、主要な成果物を捕捉・アーカイブし、関係者に提供します。
                    </p>
<h4 id="sub-10">1.4.2 テスト完了の 5 つのタスク</h4>

        <figure className="diagram-card">
          <div className="mermaid-container" id="mermaid-diagram-6">
            <Mermaid chart={DIAGRAM_6} />
          </div>
          <figcaption>図 6</figcaption>
        </figure>
      
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>#</th>
                                    <th>タスク</th>
                                    <th>内容（要点）</th>
                                    <th>ベストプラクティス</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>1</td>
                                    <td>テスト完了報告書の作成と承認</td>
                                    <td>
                                        全テストが実施され目的が達成されたことを確認する。テスト計画・結果・進捗報告・欠陥報告などのテストウェアから情報を収集・評価・要約し、承認を得て、関係者に周知する
                                    </td>
                                    <td>
                                        報告書は「実施したこと」だけでなく、<strong>残存する課題（未解決欠陥、リスク）を明記</strong>する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>2</td>
                                    <td>テストウェアのアーカイブ</td>
                                    <td>
                                        将来再利用できそうなテストウェア（典型的にはテストケース）を特定し、後から使いやすい形にする。テスト結果、ログ、報告書などは構成管理システムに一時的にアーカイブする
                                    </td>
                                    <td>
                                        再利用対象は「<strong>誰が見ても分かる</strong>」状態（前提条件・対象バージョンなど）にして保管する
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>3</td>
                                    <td>テストウェアの引き渡し</td>
                                    <td>
                                        必要とする人に価値ある成果物を届ける。例：延期または受容された既知の欠陥を、製品の利用者や保守担当者に伝える
                                    </td>
                                    <td>
                                        引き渡し先（運用・保守・次期プロジェクト）を明確にし、<strong>既知欠陥一覧</strong>を必ず添付する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>4</td>
                                    <td>テスト環境の清掃と復元</td>
                                    <td>
                                        次のテストサイクルやプロジェクトのために、テストデータ、ツール、ドライバ、スタブ、スクリプトなどを削除し、環境を元の（または所定の）状態に戻す
                                    </td>
                                    <td>
                                        復元手順を<strong>チェックリスト化</strong>し、環境を共有するチームと引き継ぎ確認を行う
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>5</td>
                                    <td>教訓の収集・文書化</td>
                                    <td>
                                        レトロスペクティブで得られた教訓を議論・記録する。SDLC
                                        全体に関する発見を含む場合がある。プロセス改善（Section
                                        1.5）に活用できる
                                    </td>
                                    <td>
                                        「良かった点」と「改善点」の両方を残す。責任追及ではなく<strong>プロセスに着目</strong>する
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<h4 id="sub-11">1.4.3 3 活動の比較（試験直前の整理用）</h4>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>観点</th>
                                    <th>計画</th>
                                    <th>モニタリング／コントロール</th>
                                    <th>完了</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>時期</td>
                                    <td>できるだけ早期から、継続的に更新</td>
                                    <td>テスト期間を通じて継続</td>
                                    <td>マイルストーン（リリース、反復終了、テストレベル完了）</td>
                                </tr>
                                <tr className="even">
                                    <td>主な問い</td>
                                    <td>何を・どう・誰が・いつまでに？</td>
                                    <td>計画どおりか？ずれたらどうする？</td>
                                    <td>目的は達成できたか？何を残し、何を学んだか？</td>
                                </tr>
                                <tr className="odd">
                                    <td>代表的な成果物</td>
                                    <td>テスト計画書、リスク対応方針</td>
                                    <td>進捗報告、是正措置</td>
                                    <td>テスト完了報告書、アーカイブ、教訓</td>
                                </tr>
                                <tr className="even">
                                    <td>入力</td>
                                    <td>方針、組織戦略、コンテキスト</td>
                                    <td>計画、測定値、リスク情報</td>
                                    <td>終了基準の達成、テストウェア一式</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            <h2 id="sec-3">2. テストのコンテキスト（Section 1.2）</h2>
<p>
                        <strong>学習目標</strong>：TM-1.2.1〜1.2.6（K2）、<strong>TM-1.2.7（K4）</strong>
                    </p>
<h3 id="sec-3-1">2.0 この節の要点</h3>
<p>
                        テストのコンテキストとは、テストプロセスに影響を与える<strong>独自の条件や制約</strong>の集まりです。製品の種類、業界、規制要件、そして特に
                        <strong>SDLC</strong> によって異なります。
                    </p>
<aside className="callout callout-note">
                        <p>
                            テストマネージャーは、テスト戦略や技法を「<strong>開発する</strong>」というより、確立された戦略を<strong>適用</strong>し、技法を<strong>選択</strong>します。そして、プロジェクトの文脈に合わせたテスト計画を作る役割を担います。
                        </p>
                    </aside>
<h3 id="sec-3-2">2.1 テストのステークホルダー（TM-1.2.1）</h3>
<p>
                        ステークホルダーとは、製品の品質に<strong>直接または間接の関心</strong>を持つ個人・グループです。
                    </p>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>ステークホルダー</th>
                                    <th>テストへの関心・関わり</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>開発者、開発リード、開発マネージャー</td>
                                    <td>
                                        テスト対象システムを実装し、テスト結果に対応する。コンポーネントテストなどに参加・貢献する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>テスター、テストリード、テストマネージャー</td>
                                    <td>
                                        テストウェア（テスト計画等）を作成し、要件分析、テスト設計、実行、欠陥の追跡と報告、テスト自動化、進捗報告などを行う
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>
                                        プロジェクトマネージャー、プロダクトオーナー、ビジネスユーザー
                                    </td>
                                    <td>
                                        要件を明示し、求める品質レベルを定め、認識したリスクに基づく必要なカバレッジを推奨する。成果物をレビューし、受け入れテスト（UAT）に参加し、テスト結果に基づいて判断する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>運用チーム</td>
                                    <td>
                                        運用受け入れテストに関与し、システムが本番稼働できる状態かを確認する。非機能要件の定義にも寄与する
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>顧客とユーザー</td>
                                    <td>
                                        顧客は製品を購入し、ユーザーは直接利用する。どちらも要件定義で重要で、UAT
                                        に関与して製品が自分たちのニーズを満たすか検証する
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<aside className="callout callout-warn">
                        <div className="callout-label">
                            <span aria-hidden="true" className="callout-icon">⚠</span><span>注意</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                上の表はすべてを網羅していません。テストマネージャーは、<strong>テスト戦略・テスト計画の作成の一環としてステークホルダー分析</strong>を行い、自分のプロジェクトのステークホルダーを特定します。
                            </p>
                        </div>
                    </aside>
<aside className="callout callout-practice">
                        <div className="callout-label">
                            <span aria-hidden="true" className="callout-icon">💡</span><span>ベストプラクティス</span>
                        </div>
                        <div className="callout-body">
                            <ul>
                                <li>
                                    ステークホルダー<strong>一覧を計画の初期に作成</strong>し、関心事（品質・納期・コスト・規制など）を併記する
                                </li>
                                <li>
                                    「誰がテスト結果の<strong>意思決定者</strong>か」を明確にする
                                </li>
                                <li>
                                    一覧は<strong>定期的に更新</strong>する（人事異動や体制変更で変わる）
                                </li>
                            </ul>
                        </div>
                    </aside>
<h3 id="sec-3-3">2.2 ステークホルダーの知識の重要性（TM-1.2.2）</h3>
<h4 id="sub-13">2.2.1 ステークホルダーマトリクス（パワー／関心マトリクス）</h4>
<p>
                        ステークホルダーを、<strong>影響力</strong>と<strong>関心</strong>の 2 軸で
                        4 象限に分類します。
                    </p>

        <figure className="diagram-card">
          <div className="mermaid-container" id="mermaid-diagram-7">
            <Mermaid chart={DIAGRAM_7} />
          </div>
          <figcaption>図 7</figcaption>
        </figure>
      
<aside className="callout callout-note">
                        <p>
                            上の配置は<strong>説明用のイメージ</strong>です。実際の位置づけはプロジェクトごとに分析して決めます。
                        </p>
                    </aside>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>象限</th>
                                    <th>影響力</th>
                                    <th>関心</th>
                                    <th>シラバスの説明（要約）</th>
                                    <th>関わり方の例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>Promoters</strong></td>
                                    <td>高</td>
                                    <td>高</td>
                                    <td>
                                        影響力・関心ともに高い重要な協働者。テスト戦略と計画の形成に不可欠
                                    </td>
                                    <td>
                                        計画レビューや意思決定に<strong>積極的に巻き込む</strong>
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td><strong>Latents</strong></td>
                                    <td>高</td>
                                    <td>低</td>
                                    <td>
                                        日々の作業への関心は薄いが、リソース配分や高レベルの方向性を左右する決定を行う
                                    </td>
                                    <td>
                                        要点を絞った報告で、必要な意思決定の場面に<strong>確実に参加</strong>してもらう
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td><strong>Defenders</strong></td>
                                    <td>低</td>
                                    <td>高</td>
                                    <td>
                                        定性的なフィードバックを提供することが多い。定期的な更新や特定の議論への参加で関与を維持できる
                                    </td>
                                    <td><strong>定期報告</strong>と、特定テーマでの意見収集</td>
                                </tr>
                                <tr className="even">
                                    <td><strong>Apathetics</strong></td>
                                    <td>低</td>
                                    <td>低</td>
                                    <td>
                                        密接には関与しないが、重要なマイルストーンの報告や、特定の課題への意見依頼が有益な洞察につながり得る
                                    </td>
                                    <td><strong>節目での報告</strong>、必要時の意見依頼</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<h4 id="sub-14">
                        2.2.2 ステークホルダーの知識を活用する理由（シラバスの 3 点）
                    </h4>
<ol type="1">
                        <li>
                            <strong>専門知識を活用できる</strong>：エンドユーザーや技術チームは、性能やセキュリティについてのフィードバックと洞察を提供できる
                        </li>
                        <li>
                            <strong>リスクマネジメントを支える</strong>：関心と影響力が明らかになるほど、事前の軽減策を促せる
                        </li>
                        <li>
                            <strong>多様な視点を尊重できる</strong>：有益なフィードバックが得られる
                        </li>
                    </ol>
<p>
                        テストマネージャーの役割は、<strong>詳細なステークホルダー一覧の作成</strong>と、<strong>各人がテスト活動とどう関係するかの理解</strong>、そしてマトリクスの活用です。
                    </p>
<h3 id="sec-3-4">2.3 ハイブリッド開発モデルにおけるテスト管理（TM-1.2.3）</h3>
<h4 id="sub-15">2.3.1 ハイブリッドとは</h4>
<p>
                        <strong>逐次型の進め方とアジャイルの実践を組み合わせた</strong>開発モデルです。シラバスは、V
                        モデル、反復型、増分型、アジャイルなどの要素を組み合わせるアプローチとして位置づけています（組み合わせ方の例：初期の計画・要件分析は
                        V モデル、設計・開発・テストはアジャイル）。
                    </p>
<h4 id="sub-16">2.3.2 ハイブリッドが使われる主な理由</h4>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>理由</th>
                                    <th>説明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>アジャイルへの移行手段</strong></td>
                                    <td>
                                        従来型からアジャイルへの移行は、ワークフロー・文化・チームの力学が大きく変わり困難。ハイブリッドは、従来の構造とアジャイルの柔軟性を組み合わせて移行を和らげる
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td><strong>目的への適合（fit for purpose）</strong></td>
                                    <td>
                                        アジャイルへ移行できない組織やプロジェクトもある。高リスクなプロジェクトでは、ある部分は逐次的に、ある部分はアジャイルで進める必要がある
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<aside className="callout callout-note">
                        <p>実際には、これら以外の理由もあり得ます。</p>
                    </aside>
<h4 id="sub-17">2.3.3 ハイブリッド環境でのテスト管理活動</h4>

        <figure className="diagram-card">
          <div className="mermaid-container" id="mermaid-diagram-8">
            <Mermaid chart={DIAGRAM_8} />
          </div>
          <figcaption>図 8</figcaption>
        </figure>
      
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>活動</th>
                                    <th>ベストプラクティス</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>能力評価</td>
                                    <td>
                                        逐次型とアジャイルの<strong>両方の経験</strong>があるメンバーを把握し、研修や配置で補う
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>協働</td>
                                    <td>
                                        スプリント内テストと従来のテストフェーズの<strong>接点（引き渡し条件</strong>）を明文化する
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>連携</td>
                                    <td>
                                        テスターがスクラム・オブ・スクラムに参加し、テストの観点を全体目標に反映する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>追跡</td>
                                    <td>
                                        スプリント内のテスト工数と結果を追跡し、アジャイルの実践と整合しているか確認する
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<h3 id="sec-3-5">2.4 SDLC モデルごとのテスト管理活動（TM-1.2.4）</h3>
<p>
                        テストマネージャーは、組織で使われる各 SDLC
                        モデルを理解し、その知識で<strong>開発活動とテストの整合</strong>を取ります。
                    </p>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>観点</th>
                                    <th>逐次型（例：V モデル）</th>
                                    <th>反復型（例：スクラム）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>見積り</td>
                                    <td>
                                        各テストレベルについて<strong>早期に詳細な見積り</strong>を行う
                                    </td>
                                    <td>反復ごとに見積り。ストーリー計画の一部として行う</td>
                                </tr>
                                <tr className="even">
                                    <td>テストウェア</td>
                                    <td>
                                        戦略、計画、テストケース、スケジュール、報告書などを含む
                                    </td>
                                    <td>受け入れ基準と Definition of Done が中心。文書は最小限</td>
                                </tr>
                                <tr className="odd">
                                    <td>役割</td>
                                    <td>テストマネージャーが意思決定とチーム管理を担う</td>
                                    <td>
                                        役割は統合される。従来のテストマネージャーに代わり、ファシリテーターやコーチが担う
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>ツール</td>
                                    <td>
                                        フェーズ型テストに適した<strong>テスト管理ツール</strong>が中心
                                    </td>
                                    <td>
                                        <strong>CI/CD と自動化</strong>のツールが中核で、継続的テストを支える
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>テストアプローチ</td>
                                    <td>事前にスケジュールされ、プロジェクトのフェーズに対応</td>
                                    <td>反復に組み込まれ、適応性とフィードバックを重視</td>
                                </tr>
                                <tr className="even">
                                    <td>テスト自動化</td>
                                    <td>戦略的に導入。さまざまな段階で実施され得る</td>
                                    <td>
                                        開始時から組み込み。CI/CD
                                        での<strong>自動回帰テスト</strong>を重視
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>モニタリングと報告</td>
                                    <td>マイルストーン単位の報告。自動ダッシュボードは任意</td>
                                    <td>
                                        リアルタイムのダッシュボードと日次の状況更新による<strong>継続的な報告</strong>
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>メトリクス</td>
                                    <td>
                                        従来のテストメトリクスと欠陥管理（テスト実行率、欠陥率など）
                                    </td>
                                    <td>
                                        従来のメトリクスに加え、反復追跡用のアジャイルメトリクス（チームベロシティ、バーンダウンチャートなど）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<aside className="callout callout-note">
                        <p>
                            試験ではこの表の<strong>行ごとの対比</strong>（例：「役割」「ツール」「報告」）を問う出題が想定されます。
                        </p>
                    </aside>
<h3 id="sec-3-6">2.5 テストレベルごとのテスト管理活動（TM-1.2.5）</h3>

        <figure className="diagram-card">
          <div className="mermaid-container" id="mermaid-diagram-9">
            <Mermaid chart={DIAGRAM_9} />
          </div>
          <figcaption>図 9</figcaption>
        </figure>
      
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>テストレベル</th>
                                    <th>テスト管理活動（要点）</th>
                                    <th>ベストプラクティス</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>コンポーネントテスト</strong>（単体テスト）</td>
                                    <td>
                                        スコープ・目的・完了基準を定義する。コードレビューなど、従来のテスト役割を超えた活動にテスターを関与させ、分析力を活かす。問題解決や単体テストへの貢献で開発チームと調整する
                                    </td>
                                    <td>
                                        完了基準を<strong>開発チームと合意</strong>し、単体テストの状況を可視化する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td><strong>コンポーネント統合テスト</strong></td>
                                    <td>
                                        開発チームと協力して統合順序とテストの組み合わせを決める（SDLC・ツール・プロセスを考慮）。システムテスト・受け入れテストの戦略と整合するよう進捗を監督する。開発者と協力して管理する
                                    </td>
                                    <td>
                                        統合順序を<strong>リスクと依存関係</strong>から決め、スタブ／ドライバの準備を計画に含める
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td><strong>システム統合テスト</strong></td>
                                    <td>
                                        スコープと目的を明確にし、リスク評価と品質目標に合致させる。進捗、結果、課題管理を監督する
                                    </td>
                                    <td>
                                        他チーム・外部システムとの<strong>インタフェース</strong>調整窓口を置く
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td><strong>システムテスト</strong></td>
                                    <td>
                                        SDLC
                                        に合わせて計画し、リソース配分、ツール選定、スケジュールに注意する。<strong>アジャイルでは</strong>反復的なストーリーテストと統合し、独立したテストフェーズを避けて継続的に行う。逐次型では計画された段階に沿うことがある
                                    </td>
                                    <td>
                                        SDLC
                                        に応じ、アジャイルでは<strong>継続的</strong>、逐次型では<strong>段階的</strong>に管理する
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td><strong>受け入れテスト</strong></td>
                                    <td>
                                        受け入れ基準の充足を確認し、UAT
                                        でのユーザーテストの管理を含む活動を計画する。顧客サイトでのテスト実施など<strong>ロジスティクス</strong>を調整する。UAT
                                        の課題解決を促し、受け入れ基準を満たした後のサインオフをステークホルダーに案内する
                                    </td>
                                    <td>
                                        受け入れ基準を<strong>契約・要件と紐づけ</strong>、サインオフの手順を事前に合意する
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<h3 id="sec-3-7">2.6 テストタイプごとのテスト管理活動（TM-1.2.6）</h3>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>テストタイプ</th>
                                    <th>管理の焦点</th>
                                    <th>主な活動</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td><strong>機能テスト</strong></td>
                                    <td>
                                        すべての機能が十分にテストされ、定義された要件を満たすこと
                                    </td>
                                    <td>
                                        <strong>戦略計画と進捗追跡</strong>（機能要件とプロジェクト目標に整合した戦略）、<strong>リソース調整</strong>（人と技術リソースの効率的配分）
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td><strong>非機能テスト</strong></td>
                                    <td>性能やセキュリティなどのシステム属性の検証</td>
                                    <td>
                                        <strong>性能ベンチマークの確立</strong>とテスト管理、<strong>コンプライアンス検証</strong>（セキュリティ、ユーザビリティ、信頼性などの非機能基準への適合）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td><strong>ブラックボックステスト</strong></td>
                                    <td>
                                        テストがユーザー視点で、外部とのあらゆる相互作用を網羅すること
                                    </td>
                                    <td>
                                        <strong>テストカバレッジ分析</strong>（ユーザーシナリオとビジネス要件の網羅）、<strong>フィードバックの取り込み</strong>（ステークホルダーの意見でアプローチを改善し、欠陥修正を管理）
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td><strong>ホワイトボックステスト</strong></td>
                                    <td>コード構造の理解と、内部ロジックの十分な網羅</td>
                                    <td>
                                        <strong>コードカバレッジの最適化</strong>（カバレッジツールでギャップを特定し資源を振り向ける）、<strong>技術的知見の統合</strong>（内部構造の理解をテスト計画に組み込む）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<aside className="callout callout-practice">
                        <div className="callout-label">
                            <span aria-hidden="true" className="callout-icon">💡</span><span>関連する用語</span>
                        </div>
                        <div className="callout-body">
                            <p>
                                機能テストと非機能テストは「<strong>何を</strong>テストするか」の分類、ブラックボックスとホワイトボックスは「<strong>どう</strong>テストするか（何を根拠にテストを導出するか）」の分類です。
                            </p>
                        </div>
                    </aside>
<h3 id="sec-3-8">
                        2.7 計画・モニタリング・コントロールの管理活動（TM-1.2.7、K4）
                    </h3>
<p>
                        この学習目標は
                        <strong>K4（分析）</strong>
                        です。与えられたプロジェクトの状況を読み取り、<strong>計画・モニタリング・コントロールのどこを強調すべきか</strong>を判断します。
                    </p>
<h4 id="sub-18">2.7.1 シラバスが示す 3 領域の活動</h4>
<p><strong>テスト計画</strong></p>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>活動</th>
                                    <th>内容（要点）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>包括的なスコープ定義</td>
                                    <td>
                                        機能・非機能要件をすべて特定し、完全なカバレッジを確保する。ブラックボックス／ホワイトボックス双方の意味合いも考慮する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>リスク評価と軽減計画</td>
                                    <td>
                                        詳細なリスク分析で、プロジェクトの流れと最終製品の両方に影響し得る脆弱性・課題を特定し、事前の軽減策を策定する
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>リソース配分戦略</td>
                                    <td>
                                        配分にとどまらず、<strong>チーム構造、役割、コミュニケーションのルール</strong>を定義する。オンサイト／オフサイトなど分散環境では特に重要
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<p><strong>テストモニタリング</strong></p>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>活動</th>
                                    <th>内容（要点）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>実行の監督</td>
                                    <td>
                                        テスト実行を計画と継続的に照合し、テストケースの進捗と発生した欠陥を管理する。リスク評価と状況の変化に応じて優先度を調整する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>ツールと環境の最適化</td>
                                    <td>
                                        ツールと環境が
                                        <strong>CI/CD パイプラインに統合</strong>されているか監視し、継続的テストと即時フィードバックを可能にする
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>開発との協働</td>
                                    <td>
                                        開発チームとの緊密な関係を保ち、ホワイトボックス／ブラックボックス双方の知見を活用して問題を未然に防ぐ
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<p><strong>テストコントロール</strong></p>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>活動</th>
                                    <th>内容（要点）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>適応的なプロセス管理</td>
                                    <td>
                                        新たな知見・課題・プロジェクトの変化に応じて、テストプロセスを動的に調整する。状況を反映してアプローチを変更できる柔軟性が必要
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td><strong>品質ゲート管理</strong></td>
                                    <td>
                                        テストライフサイクル内の品質ゲートが何かを定義し、テストフェーズの進行について情報に基づいた判断を行う
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<h4 id="sub-19">2.7.2 K4 問題の解き方</h4>

        <figure className="diagram-card">
          <div className="mermaid-container" id="mermaid-diagram-10">
            <Mermaid chart={DIAGRAM_10} />
          </div>
          <figcaption>図 10</figcaption>
        </figure>
      
<h4 id="sub-20">2.7.3 状況とマネジメント活動の対応（考え方の例）</h4>
<aside className="callout callout-note">
                        <p>
                            以下は理解を助けるための<strong>考え方の例</strong>です（シラバスの記述を状況に当てはめた整理）。
                        </p>
                    </aside>
<div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>状況の手がかり</th>
                                    <th>強調すべき活動</th>
                                    <th>理由・具体策</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>要件変更が頻繁で反復開発</td>
                                    <td>モニタリング／コントロール</td>
                                    <td>
                                        ダッシュボードで日次に把握し、リスクに応じて優先度を柔軟に調整する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>開発とテストが地理的に分散</td>
                                    <td>計画（リソース配分）</td>
                                    <td>
                                        チーム構造、役割、コミュニケーションのルールを計画時に明確にする
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>安全性・規制要件が厳しい</td>
                                    <td>計画（リスク評価）＋コントロール（品質ゲート）</td>
                                    <td>
                                        詳細なリスク分析と、進行判断のための品質ゲートを定義する
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>CI/CD を導入済み</td>
                                    <td>モニタリング（ツールと環境）</td>
                                    <td>パイプライン統合の状態を継続的に確認する</td>
                                </tr>
                                <tr className="odd">
                                    <td>新機能の追加で不確実性が高い</td>
                                    <td>計画（スコープとリスク）</td>
                                    <td>スコープ定義とリスク軽減計画を先に固める</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
          </article>
        </main>
      </div>
    </div>
  );
}
