import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import './istqb-ctfl-v4-chapter6.css';

export const metadata: Metadata = {
    title: 'Chapter 6: テストツール（Test Tools）— ISTQB CTFL v4.0 学習ガイド',
    description:
        'ISTQB Certified Tester Foundation Level (CTFL) v4.0 Chapter 6 テストツールの完全解説ガイド。テストツールの分類、自動化の利点とリスク、テスト実行・静的解析・テスト管理ツールの特別な考慮事項を網羅。',
};

export default function Chapter6Page() {
    return (
        <div className="ctfl-v4-ch6-page">
            <NavBar />
            <main className="main">
                <div className="content">
                    <header className="page-header">
                        <span className="eyebrow">
                            <span>📖</span> ISTQB Certified Tester Foundation Level v4.0
                        </span>
                        <h1>Chapter 6: テストツール（Test Tools）</h1>
                        <p className="subtitle lead">
                            中級〜上級者向けに、公式シラバスの範囲を明確にしながらステップバイステップで解説します。試験範囲（examinable
                            content）と実務補足を明確に区別しています。
                        </p>
                        <div className="notice-box">
                            <span className="notice-icon">ℹ️</span>
                            <div>
                                本ガイドは{' '}
                                <a
                                    href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB® CTFL v4.0.1 公式シラバス
                                </a>{' '}
                                の Chapter 6
                                を範囲とし、公式資料および信頼できる二次情報源（ASTQB、ISTQB Guru
                                等）を参照しています。各節末に参照URLを掲載し、全URLは末尾の「参照URL一覧」にも集約しています。
                            </div>
                        </div>
                    </header>

                    {/* 0. 位置づけ */}
                    <section id="pos">
                        <h2>
                            <span>📍</span>0. この章の位置づけ
                        </h2>
                        <p>
                            Chapter 6 は CTFL v4.0
                            シラバスの中で<strong>最も短い章</strong>です。学習時間の目安は
                            <strong>20分</strong>
                            、6章全体（1,135分）に占める割合はわずか約1.8%ですが、試験では実務的な理解を問う問題が出題されます。
                        </p>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>項目</th>
                                        <th>内容</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="hl">学習時間目安</td>
                                        <td>20分</td>
                                    </tr>
                                    <tr>
                                        <td className="hl">節構成</td>
                                        <td>
                                            6.1 テストツールによる支援 ／ 6.2
                                            テスト自動化の利点とリスク
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">出題数目安</td>
                                        <td>
                                            40問中
                                            約2〜3問（chapter配点は出典により変動、目安として7.5%程度）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">学習到達レベル</td>
                                        <td>
                                            <span className="badge k1">K1 記憶</span>{' '}
                                            <span className="badge k2">K2 理解</span>
                                            中心。K3（適用）は無し
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">キーワード</td>
                                        <td>
                                            data-driven testing（データ駆動テスト）, keyword-driven
                                            testing（キーワード駆動テスト）, scripting
                                            language（スクリプト言語）
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout warning">
                            <span className="callout-icon">⚠️</span>
                            <p>
                                CTFL v3.1
                                以前は「ツール選定の主要原則」「組織へのツール導入（パイロットプロジェクト）」「ツール導入の成功要因」といった節が存在しましたが、v4.0
                                では基礎知識のみに絞られ、これらの実務寄りの節は削除されています。本ガイドでは
                                v4.0
                                シラバスの範囲を明確にしたうえで、実務上有用な発展知識も<b>「シラバス範囲外の実務補足」</b>として区別して提供します。
                            </p>
                        </div>

                        <ul className="ref-list">
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB CTFL v4.0.1 公式シラバス PDF
                                </a>
                            </li>
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB CTFL v4.0 公式ページ
                                </a>
                            </li>
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://www.istqb.guru/ctfl-v4-syllabus-chapter-by-chapter-deep-dive/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB CTFL v4.0 Syllabus Explained: Chapter-by-Chapter（ISTQB Guru）
                                </a>
                            </li>
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://www.testing101.net/post/overview-of-the-istqb-certified-tester-foundation-level-ctfl-v4-0-new"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB CTFL v4.0 Overview（旧版との章構成比較）
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* 1. 学習目標 */}
                    <section id="lo">
                        <h2>
                            <span>🎯</span>1. 学習目標（Learning Objectives）
                        </h2>
                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>K-level</th>
                                        <th>学習目標</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="hl">FL-6.1.1</td>
                                        <td>
                                            <span className="badge k2">K2</span>
                                        </td>
                                        <td>
                                            テストプロセスの活動やソフトウェアライフサイクルに応じて、さまざまな種類のテストツールを分類できる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">FL-6.2.1</td>
                                        <td>
                                            <span className="badge k2">K2</span>
                                        </td>
                                        <td>
                                            テスト自動化とツールサポートの潜在的な利点とリスクを要約できる
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="hl">FL-6.2.2</td>
                                        <td>
                                            <span className="badge k1">K1</span>
                                        </td>
                                        <td>
                                            テスト実行ツール、静的解析ツール、テスト管理ツールに関する特別な考慮事項を記憶している
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <ul className="ref-list">
                            <li>
                                <span className="ref-icon">🔗</span>
                                <a
                                    href="https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ISTQB CTFL v4.0.1 公式シラバス PDF
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
}
