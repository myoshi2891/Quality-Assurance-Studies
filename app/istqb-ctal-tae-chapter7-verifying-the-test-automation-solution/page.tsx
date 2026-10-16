import React from 'react';
import type { Metadata } from 'next';
import './highlight.css';
import OverviewTerminology from './OverviewTerminology';
import EnvironmentVerification from './EnvironmentVerification';
import ScriptSuiteBehavior from './ScriptSuiteBehavior';
import UnexpectedResults from './UnexpectedResults';
import StaticAnalysis from './StaticAnalysis';
import ReviewQuestions from './ReviewQuestions';
import GlossaryReferences from './GlossaryReferences';
import './ctal-tae-ch7.css';

export const metadata: Metadata = {
    title: 'CTAL-TAE v2.0 第7章 ｜ Verifying the Test Automation Solution 初学者向けガイド',
    description: 'テスト自動化環境の検証、スクリプトとスイートの正しい振る舞い、予期しない結果、静的解析を学ぶガイド。',
};

export default function Page() {
    return <div className="ctal-tae-ch7-page"><div className="layout"><main className="main">
        <div className="hero">
            <span className="hero-eyebrow">
                {"ISTQB Advanced Level ｜ Test Automation Engineering"}
            </span>
            <h1>
                {" CTAL-TAE v2.0 第7章"}
                <br />
                {"Verifying the Test Automation Solution 初学者向けガイド "}
            </h1>
            <div className="hero-meta">
                <div className="hero-meta-item">
                    <span className="hero-meta-label">
                        {"対象試験"}
                    </span>
                    <span className="hero-meta-value">
                        {"ISTQB CTAL-TAE v2.0（Test Automation Engineering）"}
                    </span>
                </div>
                <div className="hero-meta-item">
                    <span className="hero-meta-label">
                        {"対象シラバス"}
                    </span>
                    <span className="hero-meta-value">
                        {"Syllabus v2.0（2024/05/03）第7章・135分・K3"}
                    </span>
                </div>
                <div className="hero-meta-item">
                    <span className="hero-meta-label">
                        {"作成日"}
                    </span>
                    <span className="hero-meta-value">
                        {"2026-09-30"}
                    </span>
                </div>
                <div className="hero-meta-item">
                    <span className="hero-meta-label">
                        {"読者"}
                    </span>
                    <span className="hero-meta-value">
                        {"自動化経験の浅い方／初めての Advanced Level 受験者"}
                    </span>
                </div>
            </div>
        </div>
        <OverviewTerminology />
        <EnvironmentVerification />
        <ScriptSuiteBehavior />
        <UnexpectedResults />
        <StaticAnalysis />
        <ReviewQuestions />
        <GlossaryReferences />
    </main></div></div>;
}
