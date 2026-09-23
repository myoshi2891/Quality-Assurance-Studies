import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import './istqb-ctal-ta-chapter4-quality-characteristics.css';

export const metadata: Metadata = {
    title: 'CTAL-TA v4.0 第4章「品質特性のテスト」完全ガイド（初学者向け） | QA Studies',
    description: 'ISTQB Certified Tester Advanced Level Test Analyst (CTAL-TA) v4.0 第4章「品質特性のテスト」の完全解説。機能適合性・ユーザビリティ・フレキシビリティ・相互運用性のテスト設計と評価。',
};

export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontSize": "16px",
    "background": "#ffffff",
    "primaryColor": "#e8efff",
    "primaryTextColor": "#14213d",
    "primaryBorderColor": "#4f6fd6",
    "secondaryColor": "#f1f2f5",
    "secondaryTextColor": "#14213d",
    "secondaryBorderColor": "#8a8f9c",
    "tertiaryColor": "#ffffff",
    "tertiaryTextColor": "#14213d",
    "tertiaryBorderColor": "#c9d3e6",
    "mainBkg": "#e8efff",
    "nodeBorder": "#4f6fd6",
    "nodeTextColor": "#14213d",
    "lineColor": "#5b6b8c",
    "textColor": "#14213d",
    "titleColor": "#14213d",
    "edgeLabelBackground": "#ffffff",
    "clusterBkg": "#f6f8fc",
    "clusterBorder": "#c9d3e6",
    "noteBkgColor": "#fff4dc",
    "noteTextColor": "#5a3d0a",
    "noteBorderColor": "#d9a441",
    "actorBkg": "#e8efff",
    "actorBorder": "#4f6fd6",
    "actorTextColor": "#14213d",
    "actorLineColor": "#8a94b3",
    "signalColor": "#3b4a6b",
    "signalTextColor": "#14213d",
    "labelBoxBkgColor": "#e8efff",
    "labelBoxBorderColor": "#4f6fd6",
    "labelTextColor": "#14213d",
    "transitionColor": "#5b6b8c",
    "transitionLabelColor": "#14213d",
    "stateBkg": "#e8efff",
    "stateLabelColor": "#14213d",
    "stateBorder": "#4f6fd6",
    "specialStateColor": "#3b4a6b",
    "labelColor": "#14213d"
  },
  "flowchart": {
    "useMaxWidth": false,
    "htmlLabels": true,
    "curve": "basis",
    "nodeSpacing": 50,
    "rankSpacing": 55,
    "padding": 12
  },
  "sequence": { "useMaxWidth": false, "wrap": false, "mirrorActors": false },
  "state": { "useMaxWidth": false }
}}%%`;

export default function CtalTaChapter4Page() {
    return (
        <div className="ctal-ta-ch4-page">
            <div className="layout">
                <NavBar />
                <main className="main" id="main">
                    <header className="hero">
                        <span className="eyebrow">ISTQB® CTAL-TA v4.0 ／ CHAPTER 4</span>
                        <h1>CTAL-TA v4.0 第4章「品質特性のテスト」完全ガイド（初学者向け）</h1>
                        <p className="sub">
                            ISTQB® Certified Tester Advanced Level Test Analyst（CTAL-TA）v4.0 ／
                            Chapter 4 &quot;Testing Quality Characteristics&quot;
                        </p>
                        <p className="sub">対象：CTFL を学んだ直後で、Advanced Level は初めての方</p>
                        <div className="pills">
                            <span className="pill">
                                章の学習時間 <b>60分</b>
                            </span>
                            <span className="pill">
                                学習目標 <b>K2 × 4</b>
                            </span>
                            <span className="pill">
                                キーワード <b>13語</b>
                            </span>
                            <span className="pill">
                                図解（mermaid） <b>20点</b>
                            </span>
                            <span className="pill">
                                参考 URL <b>21件</b>
                            </span>
                        </div>
                    </header>

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
                                    <td>対象シラバス</td>
                                    <td>ISTQB® CTAL-TA Syllabus v4.0（表紙の GA 日付は 2025/05/02）</td>
                                </tr>
                                <tr className="even">
                                    <td>対象章</td>
                                    <td>第4章 Testing Quality Characteristics（品質特性のテスト）</td>
                                </tr>
                                <tr className="odd">
                                    <td>章の学習時間</td>
                                    <td>60分（シラバス全体 1,215 分のうち約 4.9%）</td>
                                </tr>
                                <tr className="even">
                                    <td>学習目標（LO）</td>
                                    <td>
                                        4本すべて K2（理解）：TA-4.1.1 ／ TA-4.2.1 ／ TA-4.3.1 ／
                                        TA-4.4.1
                                    </td>
                                </tr>
                                <tr className="odd">
                                    <td>作成日</td>
                                    <td>2026-09-20</td>
                                </tr>
                                <tr className="even">
                                    <td>形式</td>
                                    <td>
                                        HTML（ライトモード）。フローチャートは mermaid、図解・表は
                                        Markdown を変換して掲載。ASCII アートは使用しません
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}
