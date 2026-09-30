import React from "react";
import type { Metadata } from "next";
import NavBar from "./NavBar";
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_1, DIAGRAM_2 } from "./diagrams";
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
          </article>
        </main>
      </div>
    </div>
  );
}
