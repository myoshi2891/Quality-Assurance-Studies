import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import './istqb-ctal-ta-chapter5-defect-prevention.css';

export const metadata: Metadata = {
    title: 'CTAL-TA v4.0 第5章 ソフトウェア欠陥防止｜初学者向けガイド',
    description: 'ISTQB Certified Tester Advanced Level Test Analyst (CTAL-TA) v4.0 第5章 ソフトウェア欠陥防止の初学者向け完全学習ガイド。',
};

export default function CtalTaChapter5Page() {
    return (
        <div className="ctal-ta-ch5-page">
            <div className="shell">
                <NavBar />

                <main className="doc" id="main">
                    {/* HERO */}
                    <header className="hero" id="top">
                        <h1>第5章　ソフトウェア欠陥防止</h1>
                        <p className="hero-sub">CTAL-TA v4.0 初学者向けステップバイステップ・ガイド</p>
                        <dl className="meta">
                            <div>
                                <dt>対象資格</dt>
                                <dd>ISTQB® Certified Tester Advanced Level Test Analyst（CTAL-TA）v4.0</dd>
                            </div>
                            <div>
                                <dt>対象章</dt>
                                <dd>シラバス第5章 Software Defect Prevention　学習時間 225 分</dd>
                            </div>
                            <div>
                                <dt>想定読者</dt>
                                <dd>テスト初学者から CTFL（Foundation Level）取得直後の方</dd>
                            </div>
                            <div>
                                <dt>作成日</dt>
                                <dd>2026-09-20</dd>
                            </div>
                        </dl>
                        <div className="sheet">
                            <table className="lo-sheet">
                                <caption>この章で問われる5つの学習目標（LO）と学習時間</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">LO</th>
                                        <th scope="col">K</th>
                                        <th scope="col">内容</th>
                                        <th scope="col">学習時間</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">TA-5.1.1</th>
                                        <td>
                                            <span className="k k-k2">K2</span>
                                        </td>
                                        <td>TA の欠陥防止への貢献を説明する</td>
                                        <td className="min">
                                            <span className="bar" style={{ width: '1.4rem' }}></span>
                                            <span className="mtxt">15 分</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TA-5.2.1</th>
                                        <td>
                                            <span className="k k-k3">K3</span>
                                        </td>
                                        <td>モデルを使って仕様の欠陥を検出する</td>
                                        <td className="min">
                                            <span className="bar" style={{ width: '5.6rem' }}></span>
                                            <span className="mtxt">60 分</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TA-5.2.2</th>
                                        <td>
                                            <span className="k k-k3">K3</span>
                                        </td>
                                        <td>レビュー技法でテストベースの欠陥を検出する</td>
                                        <td className="min">
                                            <span className="bar" style={{ width: '5.6rem' }}></span>
                                            <span className="mtxt">60 分</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TA-5.3.1</th>
                                        <td>
                                            <span className="k k-k4">K4</span>
                                        </td>
                                        <td>テスト結果を分析し検出の改善点を特定する</td>
                                        <td className="min">
                                            <span className="bar" style={{ width: '7rem' }}></span>
                                            <span className="mtxt">75 分</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TA-5.3.2</th>
                                        <td>
                                            <span className="k k-k2">K2</span>
                                        </td>
                                        <td>欠陥分類が根本原因分析を支える理由を説明する</td>
                                        <td className="min">
                                            <span className="bar" style={{ width: '1.4rem' }}></span>
                                            <span className="mtxt">15 分</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="notice">
                            <strong>この版でご注意ください。</strong>シラバス第5章の本文（PDF 48〜54 ページ）は直接確認できていません。各記述の根拠は
                            <span className="mk mk-a">◎</span>公式シラバス、<span className="mk mk-b">○</span>
                            公式サンプル試験・LO対応表、<span className="mk mk-c">△</span>
                            業界一般の補足、で区別しています。詳しくはパート0を読んでください。
                        </p>
                    </header>

                    {/* パート0 */}
                    <h2 id="part-0">
                        <span className="part-no">パート0</span>
                        <span className="part-title">このガイドの使い方と情報源の確度</span>
                    </h2>
                    <p className="lead">
                        <span className="lead-ico" aria-hidden="true">
                            💡
                        </span>
                        このパートでは、本ガイドの各記述がどの資料に基づくのかを説明します。試験勉強では「公式に確認できた内容」と「補足知識」を区別して覚えることが大切なので、先にここを読んでおくと後のパートを安全に使えます。
                    </p>
                    <h3 id="sec-1">0.1 情報源の確度マーク</h3>
                    <p>
                        なぜマークを付けるのか：資格試験の出題範囲は公式シラバスで決まります。補足知識を公式内容と混同すると、試験で間違った知識を根拠に答えてしまうおそれがあるためです。
                    </p>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>マーク</th>
                                    <th>意味</th>
                                    <th>例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-a" title="公式シラバスの本文で確認">
                                            ◎
                                        </span>
                                    </td>
                                    <td>
                                        公式シラバス v4.0 の本文で確認した内容（第1〜4章にある第5章への参照記述を含む）
                                    </td>
                                    <td>決定表のレビュー観点、状態遷移テストが欠陥防止に貢献する旨の記述</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-b" title="公式サンプル試験・LO対応表で確認">
                                            ○
                                        </span>
                                    </td>
                                    <td>
                                        公式サンプル試験 v4.1（設問と解答解説）または公式の学習目標（LO）新旧対応表で確認した内容
                                    </td>
                                    <td>DDP の計算式、レビュー技法4種の特徴</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>
                                        <span className="mk mk-c" title="業界一般の補足（要照合）">
                                            △
                                        </span>
                                    </td>
                                    <td>一般的な業界知識に基づく補足。シラバス第5章の本文では確認できていない内容</td>
                                    <td>PCE（フェーズ封じ込め有効性）の式、5 Whys の進め方</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 id="sec-2">0.2 重要な注意（必ず読んでください）</h3>
                    <ul>
                        <li>
                            第5章の本文（シラバス PDF の 48〜54 ページ）は、資料の取得ツールの上限により、全文を読み込めませんでした。
                        </li>
                        <li>
                            そのため第5章の各項目は、次の4つの資料から再構成しています。
                            <ol>
                                <li>公式ページ掲載の目次と学習目標（LO）</li>
                                <li>公式 LO 新旧対応表（v3.1 → v4.0 の変更理由つき）</li>
                                <li>公式サンプル試験 v4.1 の第5章関連問題 #38〜#45 とその解答解説</li>
                                <li>シラバス第1〜3章にある第5章への参照記述（例：「Section 5.2.1 参照」）</li>
                            </ol>
                        </li>
                        <li>
                            章内の
                            <strong>正確な文言・図表・キーワード一覧（K1 で暗記が必要な用語）</strong>
                            は、必ず公式シラバス PDF の 48〜54 ページで照合してください（URL はパート8）。
                        </li>
                    </ul>
                    <details className="glossary">
                        <summary>
                            <span className="g-ico">📖</span>このパートで登場した用語
                            <span className="g-n">3語</span>
                        </summary>
                        <ul>
                            <li>LO（Learning Objective）：学習目標。試験問題は LO から作られる</li>
                            <li>
                                K レベル：理解の深さの段階。K1＝覚える、K2＝理解する、K3＝適用する、K4＝分析する
                            </li>
                            <li>サンプル試験：ISTQB が公開している練習用の試験問題と解答解説</li>
                        </ul>
                    </details>
                </main>
            </div>
        </div>
    );
}
