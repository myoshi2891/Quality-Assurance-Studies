import React from 'react';
import type { Metadata } from 'next';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import { DIAGRAM_CH2_OVERVIEW } from './diagrams';
import './istqb-ct-genai-chapter2-prompt-engineering.css';

export const metadata: Metadata = {
    title: 'ISTQB® CT-GenAI 第2章 完全解説ガイド | 効果的なソフトウェアテストのためのプロンプトエンジニアリング',
    description: 'ISTQB CT-GenAI シラバス第2章（365分）の完全解説。プロンプトの6要素構造、コア3技法、テスト業務への適用、結果評価とプロンプト改善を網羅。',
};

export default function CtGenAiChapter2Page() {
    return (
        <div className="ct-genai-ch2-page">
            <NavBar />
            <main className="main">
                <header className="hero">
                    <div className="hero-kicker">CT-GenAI · 第2章 · 学習ガイド</div>
                    <h1>ISTQB® CT-GenAI 第2章 完全解説ガイド</h1>
                    <p className="hero-subtitle">
                        「効果的なソフトウェアテストのためのプロンプトエンジニアリング」（Prompt Engineering for Effective Software Testing）
                    </p>
                    <div className="hero-meta">
                        <p>
                            本ガイドは、ISTQB®（International Software Testing Qualifications Board）が公開している
                            <strong>Certified Tester – Testing with Generative AI（CT-GenAI）</strong>
                            シラバスの
                            <strong>第2章</strong>
                            を、初学者向けにステップバイステップで解説するものです。
                        </p>
                        <ul>
                            <li>
                                認定試験ページ：
                                <a href="https://istqb.org/certifications/gen-ai/" target="_blank" rel="noopener noreferrer">
                                    https://istqb.org/certifications/gen-ai/
                                </a>
                            </li>
                            <li>
                                シラバス本体（公式ダウンロード, v1.1）：
                                <a href="https://istqb.org/?sdm_process_download=1&amp;download_id=6295" target="_blank" rel="noopener noreferrer">
                                    https://istqb.org/?sdm_process_download=1&amp;download_id=6295
                                </a>
                            </li>
                            <li>
                                シラバス本文（本ガイド執筆にあたり全文を直接参照したミラー, v1.0）：
                                <a href="https://atsqa.org/assets/documents/CT-GenAI-Syllabus-v1.0.pdf" target="_blank" rel="noopener noreferrer">
                                    https://atsqa.org/assets/documents/CT-GenAI-Syllabus-v1.0.pdf
                                </a>
                            </li>
                            <li>
                                v1.1 リリースノート（v1.0→v1.1の変更点）：
                                <a href="https://istqb.org/wp-content/uploads/2026/05/ISTQB-CT-GenAI_v1.1_Release_Notes.pdf" target="_blank" rel="noopener noreferrer">
                                    https://istqb.org/wp-content/uploads/2026/05/ISTQB-CT-GenAI_v1.1_Release_Notes.pdf
                                </a>
                            </li>
                        </ul>
                        <p>
                            <strong>バージョンについての注記</strong>：現行の最新シラバスは
                            <strong>v1.1（2026年4月27日リリース）</strong> です。v1.1は v1.0 に対する
                            <strong>マイナーアップデート</strong>（章立て・学習目標・出題範囲は変更なし）であり、用語の一部修正や説明文の微調整が中心です。本ガイドは章の内容を
                            v1.0 の全文（英語原文）に基づいて詳細に解説し、v1.1 で変更された箇所は本文中および「6. v1.0→v1.1 変更点」に明記しています。正確な最終文言は必ず上記の公式シラバスでご確認ください。
                        </p>
                    </div>
                </header>

                <h2 id="0-第2章の全体像と学習目標">0. 第2章の全体像と学習目標</h2>
                <p>
                    CT-GenAIシラバス全5章の中で、第2章は<strong>365分</strong>と最も長い学習時間が割り当てられており、試験における比重も最大です。第1章で学んだGenAI/LLMの基礎知識を、実際に<strong>プロンプト</strong>という「LLMへの指示文」に落とし込み、テスト業務で実践的に使えるようにすることが目的です。
                </p>
                <div className="mermaid-container" data-diagram-id="mermaid-diagram-0">
                    <Mermaid chart={DIAGRAM_CH2_OVERVIEW} />
                </div>
                <p>第2章は大きく3つの節で構成されています。</p>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>節</th>
                                <th>タイトル</th>
                                <th>学習内容の要旨</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>2.1</td>
                                <td>効果的なプロンプト開発</td>
                                <td>
                                    プロンプトの構造（6要素）、3つのコア技法（プロンプトチェイニング／Few-shot／メタプロンプティング）、システムプロンプトとユーザープロンプトの違い
                                </td>
                            </tr>
                            <tr className="even">
                                <td>2.2</td>
                                <td>テスト業務への技法の適用</td>
                                <td>
                                    テスト分析、テスト設計・実装、自動リグレッションテスト、テスト監視・コントロールの各局面でのGenAI活用と、技法の選択方法
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>2.3</td>
                                <td>結果の評価とプロンプトの改善</td>
                                <td>
                                    GenAIの出力を測る評価指標と、プロンプトを継続的に改善していくための技法
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 id="キーワード第2章シラバス記載">キーワード（第2章シラバス記載）</h3>
                <ul>
                    <li>
                        <strong>一般キーワード</strong>：受け入れ基準（acceptance criteria）、テストスクリプト、テストケース、テスト条件、テストデータ、テスト設計、テストレポート
                    </li>
                    <li>
                        <strong>GenAI特有キーワード</strong>：Few-shotプロンプティング、メタプロンプティング、自然言語処理、One-shotプロンプティング、プロンプト、プロンプトチェイニング、プロンプトエンジニアリング、システムプロンプト、ユーザープロンプト、Zero-shotプロンプティング
                    </li>
                </ul>
                <p>
                    これらは試験でK1（記憶）レベルとして問われる可能性があるため、定義を正確に押さえておく必要があります。
                </p>

                <h3 id="学習目標learning-objectivesとハンズオン目標hands-on-objectivesの全体マップ">
                    学習目標（Learning Objectives）とハンズオン目標（Hands-on Objectives）の全体マップ
                </h3>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>節</th>
                                <th>学習目標（K-レベル）</th>
                                <th>対応するハンズオン目標（H-レベル）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td>2.1.1</td>
                                <td>GenAI-2.1.1 (K2) プロンプトの構造の例を挙げられる</td>
                                <td>HO-2.1.1 (H0) 構成要素の観察・分析</td>
                            </tr>
                            <tr className="even">
                                <td>2.1.2</td>
                                <td>GenAI-2.1.2 (K2) コアプロンプティング技法を区別できる</td>
                                <td>
                                    HO-2.1.2a (H0) 技法のデモ観察／HO-2.1.2b (H1) 技法の識別演習
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>2.1.3</td>
                                <td>GenAI-2.1.3 (K2) システムプロンプトとユーザープロンプトを区別できる</td>
                                <td>（ハンズオンなし）</td>
                            </tr>
                            <tr className="even">
                                <td>2.2.1</td>
                                <td>GenAI-2.2.1 (K3) テスト分析にGenAIを適用できる</td>
                                <td>
                                    HO-2.2.1a (H2) マルチモーダルプロンプト演習／HO-2.2.1b (H2) プロンプトチェイニングと人による検証
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>2.2.2</td>
                                <td>GenAI-2.2.2 (K3) テスト設計・実装にGenAIを適用できる</td>
                                <td>
                                    HO-2.2.2a〜c (H2) テストケース生成・Gherkin生成・優先順位付け
                                </td>
                            </tr>
                            <tr className="even">
                                <td>2.2.3</td>
                                <td>GenAI-2.2.3 (K3) 自動リグレッションテストにGenAIを適用できる</td>
                                <td>
                                    HO-2.2.3a〜b (H2) キーワード駆動スクリプト作成・テストレポート分析
                                </td>
                            </tr>
                            <tr className="odd">
                                <td>2.2.4</td>
                                <td>GenAI-2.2.4 (K3) テスト監視・コントロールにGenAIを適用できる</td>
                                <td>HO-2.2.4 (H0) 監視メトリクスの観察</td>
                            </tr>
                            <tr className="even">
                                <td>2.2.5</td>
                                <td>GenAI-2.2.5 (K3) 状況に応じた技法を選択・適用できる</td>
                                <td>HO-2.2.5 (H1) 技法選択演習</td>
                            </tr>
                            <tr className="odd">
                                <td>2.3.1</td>
                                <td>GenAI-2.3.1 (K2) 評価指標を理解している</td>
                                <td>HO-2.3.1 (H0) 指標活用の観察</td>
                            </tr>
                            <tr className="even">
                                <td>2.3.2</td>
                                <td>GenAI-2.3.2 (K2) 評価・改善技法の例を挙げられる</td>
                                <td>HO-2.3.2 (H1) プロンプトの評価と最適化演習</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout-generic">
                    <p>
                        K1=記憶（Remember）、K2=理解（Understand）、K3=適用（Apply）。第2章はK3（適用）レベルの学習目標が多く、単なる知識暗記ではなく「実際にプロンプトを設計・適用できる」ことが問われる点が特徴です。
                    </p>
                </div>
                <hr />
            </main>
        </div>
    );
}
