import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import { DIAGRAM_CH3_OVERVIEW } from './diagrams';
import './istqb-ctal-tm-chapter3-managing-the-team.css';

export const metadata = {
    title: 'CTAL-TM v3.0 第3章「チームの管理」｜初学者向け解説ガイド',
    description:
        'ISTQB® Certified Tester Advanced Level Test Management (CTAL-TM) v3.0 第3章「チームの管理」初学者向け完全解説ガイド。4つの能力領域、スキル分析・評価・育成、動機付け、品質コストと費用対効果。',
};

export default function CtalTmChapter3Page() {
    return (
        <div className="ctal-tm-ch3-page">
            <NavBar />

            <main className="main">
                {/* Hero */}
                <div className="hero">
                    <span className="hero-eyebrow">ISTQB® CTAL-TM v3.0 ・ Chapter 3</span>
                    <h1>CTAL-TM v3.0 第3章「チームの管理」</h1>
                    <p>
                        初学者向け解説ガイド — ISTQB® Certified Tester Advanced Level Test Management
                        (CTAL-TM) v3.0 / Chapter 3: Managing the Team（学習時間 225 分）
                    </p>
                </div>

                {/* 0. この文書の読み方と根拠の確度 */}
                <section>
                    <h2 id="0-この文書の読み方と根拠の確度">0. この文書の読み方と「根拠の確度」</h2>
                    <p>この文書では、内容ごとに根拠の確度を次の記号で示します。</p>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>記号</th>
                                    <th>意味</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>🟢</td>
                                    <td>
                                        ISTQB 公式ページ／公式シラバス PDF
                                        の原文で直接確認できた内容（目次・章の概要・他章の記述など）
                                    </td>
                                </tr>
                                <tr className="even">
                                    <td>🟡</td>
                                    <td>
                                        一般的な実務知識・ISTQB
                                        用語集・二次情報で補足した内容。第3章の本文（シラバス
                                        p.65〜74）で表現や範囲を必ず確認してください
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="callout-warning">
                        <div className="practice-label">
                            <span className="practice-icon">⚠️</span>
                            <span>重要な注意</span>
                        </div>
                        <div className="practice-body">
                            <p>
                                本ガイドの作成時、公式シラバス PDF の取得が第1章の途中（p.45
                                付近）で打ち切られたため、第3章の本文（p.65〜74）そのものは原文で確認できていませんでした。
                            </p>
                            <p>
                                その後 Version 3.0.J04
                                で、3.1.1（4つの能力領域）・3.1.6（動機付け要因と衛生要因）・3.2.1（品質コストの4カテゴリーと「評定コスト」の用語）を原文と突き合わせ済みです。それ以外の節は引き続き
                                🟡 を含みます。
                            </p>
                            <p>
                                第3章の節構成・学習時間・章の狙い・第1章からの参照は 🟢
                                ですが、各節の詳細説明は 🟡 を含みます。
                            </p>
                            <p>
                                試験対策として使う前に、日本語版シラバス（JSTQB 版 Version
                                3.0.J04：最新版）の第3章（p.65〜74）と突き合わせてください。このページ範囲は
                                Version 3.0.J04 の目次で確認済みです（3.1 は p.66、3.1.6 は p.70、3.2 は
                                p.72、3.2.1 品質コストは p.72、3.2.2 は p.73〜74。p.75 から「4
                                参考文献」）。Version 3.0.J02 / J01
                                は旧版で、差分確認用として参照してください。URL は「9. 出典」にあります。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 1. 第3章の全体像 */}
                <section>
                    <h2 id="1-第3章の全体像">1. 第3章の全体像</h2>
                    <h3 id="11-章の基本情報">1.1 章の基本情報（🟢）</h3>
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
                                    <td>Managing the Team（チームの管理）</td>
                                </tr>
                                <tr className="even">
                                    <td>最低学習時間</td>
                                    <td>
                                        225 分（第1章 750 分、第2章 390 分、第3章 225 分の合計 1,365 分）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>節構成</td>
                                    <td>3.1 The Test Team ／ 3.2 Stakeholder Relationships</td>
                                </tr>
                                <tr className="even">
                                    <td>対応するビジネスアウトカム</td>
                                    <td>
                                        TM_07（必要なスキルを特定し、チーム内で育成する）、TM_08（テストのビジネスケースを、コストと期待される便益とともに準備・提示する）
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>試験の形式</td>
                                    <td>50 問、120 分（非母語は +25%）、満点 88 点、合格 58 点</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>シラバスの序論は、第3章で学ぶことを次の3点にまとめています（🟢）。</p>
                    <ol>
                        <li>プロジェクトのコンテキストを分析し、テストチームに必要なスキルを特定する</li>
                        <li>ホールチームアプローチ（whole team approach）に沿ってチームを管理する</li>
                        <li>プロジェクトにおけるテスト活動のビジネスケースを定義する</li>
                    </ol>

                    <h3 id="12-全体マップ">1.2 全体マップ</h3>
                    <div className="mermaid-container">
                        <Mermaid chart={DIAGRAM_CH3_OVERVIEW} />
                    </div>

                    <h3 id="13-学習の進め方ステップバイステップ">
                        1.3 学習の進め方（ステップバイステップ）
                    </h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr className="header">
                                    <th>ステップ</th>
                                    <th>やること</th>
                                    <th>目安</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd">
                                    <td>1</td>
                                    <td>3.1.1 で「4つの能力領域」を覚える</td>
                                    <td>30 分</td>
                                </tr>
                                <tr className="even">
                                    <td>2</td>
                                    <td>3.1.2〜3.1.4 を「分析 → 評価 → 育成」の1本の流れとして理解する</td>
                                    <td>60 分</td>
                                </tr>
                                <tr className="odd">
                                    <td>3</td>
                                    <td>3.1.5〜3.1.6 で、マネージャーとして何をするかを整理する</td>
                                    <td>40 分</td>
                                </tr>
                                <tr className="even">
                                    <td>4</td>
                                    <td>3.2.1〜3.2.2 で品質コストの4分類と計算手順を身に付ける</td>
                                    <td>60 分</td>
                                </tr>
                                <tr className="odd">
                                    <td>5</td>
                                    <td>「5.2 想定問題」で確認する</td>
                                    <td>35 分</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
