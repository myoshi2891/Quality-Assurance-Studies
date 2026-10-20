import React from 'react';
import type { Metadata } from 'next';
import './highlight.css';
import Overview from './Overview';
import DataAnalysis from './DataAnalysis';
import TechnicalImprovements from './TechnicalImprovements';
import TestwareRefactoring from './TestwareRefactoring';
import ToolOpportunities from './ToolOpportunities';
import ExamPractice from './ExamPractice';
import BestPractices from './BestPractices';
import GlossaryReferences from './GlossaryReferences';
import './ctal-tae-ch8.css';

export const metadata: Metadata = {
    title: 'CTAL-TAE v2.0 第8章 Continuous Improvement 初学者向け完全ガイド',
    description: 'データ分析によるテスト改善、導入済みTASの技術面の分析、SUT更新に伴う再構成、自動化ツールの活用を学ぶ第8章ガイド。',
};

export default function Page() {
    return <div className="ctal-tae-ch8-page"><div className="layout"><main className="main">
        <div className="hero">
            <div className="hero-eyebrow">
                {"ISTQB CTAL-TAE v2.0 · Chapter 8"}
            </div>
            <h1 className="hero-title">
                {" CTAL-TAE v2.0 第8章「Continuous Improvement（継続的改善）」初学者向け完全ガイド "}
            </h1>
            <p className="hero-subtitle">
                {" 出題内容の詳細解説とベストプラクティス、根拠となる公式ソースをまとめた初学者向けガイドです。 "}
            </p>
            <div className="hero-meta">
                <div className="meta-field">
                    <span className="meta-label">
                        {"対象試験"}
                    </span>
                    <span className="meta-value">
                        {"ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) v2.0"}
                    </span>
                </div>
                <div className="meta-field">
                    <span className="meta-label">
                        {"対象章"}
                    </span>
                    <span className="meta-value">
                        {"Chapter 8 Continuous Improvement（章別指導時間 210 分 / 最高認知レベル K4）"}
                    </span>
                </div>
                <div className="meta-field">
                    <span className="meta-label">
                        {"想定読者"}
                    </span>
                    <span className="meta-value">
                        {"テスト自動化の基礎（第1〜7章）を一通り学んだ初学者"}
                    </span>
                </div>
            </div>
        </div>
        <Overview />
        <DataAnalysis />
        <TechnicalImprovements />
        <TestwareRefactoring />
        <ToolOpportunities />
        <ExamPractice />
        <BestPractices />
        <GlossaryReferences />
    </main></div>
        <footer className="page-footer">
            <p>
                {" 本ガイドは学習支援を目的とした二次的な解説資料です。試験の公式な範囲・根拠は必ず ISTQB 公式シラバスでご確認ください。 "}
            </p>
        </footer>
    </div>;
}
