import React from 'react';
import type { Metadata } from 'next';
import IntroTerms from './IntroTerms';
import DataCollection from './DataCollection';
import DataAnalysis from './DataAnalysis';
import './ctal-tae-ch6.css';

export const metadata: Metadata = {
    title: 'CTAL-TAE v2.0 第6章「Test Automation Reporting and Metrics」初学者向け解説ガイド',
    description: 'テスト自動化のデータ収集・結果分析・進捗レポートの作成と公開、メトリクスを体系的に学ぶガイド。',
};

export default function Page() {
    return <div className="ctal-tae-ch6-page"><div className="layout"><main className="main">
        <header className="hero">
            <span className="eyebrow">
                {"ISTQB CTAL-TAE v2.0 ・ Chapter 6"}
            </span>
            <h1 className="hero-title">
                {" CTAL-TAE v2.0 第6章「Test Automation Reporting and Metrics」初学者向け解説ガイド "}
            </h1>
            <div className="hero-meta">
                <div className="meta-item">
                    <div className="meta-label">
                        {"対象試験"}
                    </div>
                    <div className="meta-value">
                        {" ISTQB® Certified Tester Advanced Level Test Automation Engineering（CTAL-TAE）v2.0 "}
                    </div>
                </div>
                <div className="meta-item">
                    <div className="meta-label">
                        {"対象シラバス"}
                    </div>
                    <div className="meta-value">
                        {" Syllabus Version 2.0（2024/05/03 リリース）第6章（シラバス p.37〜p.42） "}
                    </div>
                </div>
                <div className="meta-item">
                    <div className="meta-label">
                        {"学習時間の目安"}
                    </div>
                    <div className="meta-value">
                        {"150分（認知レベル K4）"}
                    </div>
                </div>
                <div className="meta-item">
                    <div className="meta-label">
                        {"作成日"}
                    </div>
                    <div className="meta-value">
                        {"2026-09-28"}
                    </div>
                </div>
            </div>
        </header>
        <IntroTerms />
        <DataCollection />
        <DataAnalysis />
    </main></div></div>;
}
