import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import './istqb-ctal-ta-chapter3-test-analysis-and-design.css';

export const metadata: Metadata = {
    title: 'CTAL-TA v4.0 学習ガイド — 第3章「テスト分析・設計」 | QA Studies',
    description: 'ISTQB Advanced Level Test Analyst (CTAL-TA) v4.0 シラバス第3章「テスト分析・設計」の完全解説。データベースド、ビヘイビアベース、ルールベース、経験ベースの4大テスト技法から技法選定・自動化まで網羅。',
};

export default function CtalTaChapter3Page() {
    return (
        <div className="ctal-ta-ch3-page">
            <div className="layout">
                <NavBar />
                <main className="main" id="main-content">
                    <header className="hero">
                        <span className="eyebrow">ISTQB Advanced Level Test Analyst v4.0</span>
                        <h1>CTAL-TA v4.0 学習ガイド — 第3章「テスト分析・設計(Test Analysis and Test Design)」</h1>
                        <p className="subtitle">
                            テストアナリストの中核スキルである4分類のテスト技法（データ／ビヘイビア／ルール／経験ベース）を完全網羅。境界値・ドメイン・組み合わせ・CRUD・状態遷移・シナリオ・デシジョンテーブル・メタモルフィック・チャーター・チェックリスト・クラウド・自動化まで、実践例と図解で徹底解説します。
                        </p>
                        <div className="pill-row">
                            <span className="pill"><span className="pill-label">所要時間:</span><span className="pill-value">615分 (約10.25時間)</span></span>
                            <span className="pill"><span className="pill-label">配分:</span><span className="pill-value">全体の約50.6%</span></span>
                            <span className="pill"><span className="pill-label">対象Kレベル:</span><span className="pill-value">K1 / K2 / K3 / K4</span></span>
                            <span className="pill"><span className="pill-label">シラバス:</span><span className="pill-value">v4.0 (2024年リリース)</span></span>
                        </div>
                    </header>
                </main>
            </div>
        </div>
    );
}
