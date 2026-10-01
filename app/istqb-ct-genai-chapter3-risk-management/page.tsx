import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
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
                </main>
            </div>
        </div>
    );
}
