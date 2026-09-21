import './istqb-ctal-ta-chapter1-test-process.css';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';

export const DIAGRAM_OVERVIEW = `flowchart LR
    subgraph CH1["第1章の3本柱"]
        direction TB
        P1["1.1 SDLCにおけるテスト<br/>開発モデルごとの関わり方"]
        P2["1.2 テスト活動への関与<br/>分析・設計・実装・実行"]
        P3["1.3 成果物に関するタスク<br/>5つの成果物と管理ツール"]
    end
    P1 --> P2 --> P3

    classDef pillar fill:#dbeafe,stroke:#2563eb,color:#1e3a5f,stroke-width:2px
    class P1,P2,P3 pillar`;

export default function Page() {
    return (
        <div className="ctal-ta-ch1-page">
            <NavBar />

            <main className="main">
                {/* HERO */}
                <header className="hero">
                    <div className="kicker">
                        ISTQB® Certified Tester Advanced Level Test Analyst (CTAL-TA) v4.0
                    </div>
                    <h1>
                        第1章:テストプロセスにおけるテストアナリストのタスク<br />
                        The Tasks of the Test Analyst in the Test Process
                    </h1>
                    <div className="subtitle">
                        初学者向け完全ガイド — 定義・理由・具体例・図解・ベストプラクティスを1本にまとめました
                    </div>
                    <div className="pill-row">
                        <span className="pill">配点時間 225分 / 全1215分</span>
                        <span className="pill">前提: ISTQB Foundation Level</span>
                        <span className="pill">図解11点(Mermaid)</span>
                        <span className="pill">出典明記</span>
                    </div>
                </header>

                {/* 0. この章の全体像 */}
                <section id="overview">
                    <h2>0. この章の全体像</h2>
                    <p>
                        CTAL-TA は「テストアナリスト(TA)」という役割にフォーカスした資格です。TAとは、<strong>技術面よりもビジネス要件・顧客価値を重視し、システムテストや受け入れテストを中心に、ブラックボックス技法と経験ベーステストを使いこなす人材</strong>と定義されています。第1章は、その TA が標準的なテストプロセスの各段階で「具体的に何をするか」を定義する、いわば試験全体の土台となる章です。
                    </p>

                    <div className="mermaid-wrap">
                        <Mermaid chart={DIAGRAM_OVERVIEW} />
                    </div>

                    <div className="callout-source">
                        出典:ISTQB® CTAL-TA Syllabus v4.0, Section 1 (Introduction), p.13–14 —{' '}
                        <a
                            href="https://astqb.org/assets/documents/ISTQB-CTAL-TA-Syllabus-v4.0-EN-4.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            astqb.org (PDF)
                        </a>
                    </div>

                    <h3 id="keywords">0.1 キーワード(K1レベルで暗記必須)</h3>
                    <p>
                        ハイレベルテストケース、キーワード、キーワード駆動テスト、ローレベルテストケース、ソフトウェア開発ライフサイクル(SDLC)、テスト分析、テストアナリスト、テストケース、テスト条件、テストデータ、テスト設計、テスト環境、テスト実行、テスト実装、テストオラクル、テストスクリプト、テストウェア
                    </p>
                    <div className="callout callout-practice">
                        <span className="callout-label">✅ ベストプラクティス</span>
                        <p>
                            これらの用語は ISTQB® Glossary の定義と一言一句違わずに覚えること。K1レベルの用語は学習目標に明記されていなくても出題対象になります。用語の定義は{' '}
                            <a href="https://glossary.istqb.org/" target="_blank" rel="noopener noreferrer">
                                glossary.istqb.org
                            </a>{' '}
                            で検索可能です。
                        </p>
                    </div>

                    <h3 id="lo">0.2 学習目標(Learning Objectives)と認知レベル</h3>
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>コード</th>
                                    <th>K-Level</th>
                                    <th>学習目標</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>TA-1.1.1</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        様々なソフトウェア開発ライフサイクルにおけるテストアナリストの関与を要約できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.2.1</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        テスト分析の一環としてテストアナリストが行うタスクを要約できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.2.2</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        テスト設計の一環としてテストアナリストが行うタスクを要約できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.2.3</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        テスト実装の一環としてテストアナリストが行うタスクを要約できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.2.4</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        テスト実行の一環としてテストアナリストが行うタスクを要約できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.1</td>
                                    <td><strong>K2</strong></td>
                                    <td>
                                        ハイレベルテストケースとローレベルテストケースを区別できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.2</td>
                                    <td><strong>K2</strong></td>
                                    <td>テストケースの品質基準を説明できる</td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.3</td>
                                    <td><strong>K2</strong></td>
                                    <td>テスト環境要件の例を挙げられる</td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.4</td>
                                    <td><strong>K2</strong></td>
                                    <td>テストオラクル問題と潜在的な解決策を説明できる</td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.5</td>
                                    <td><strong>K2</strong></td>
                                    <td>テストデータ要件の例を挙げられる</td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.6</td>
                                    <td><strong>K3</strong></td>
                                    <td>
                                        キーワード駆動テストを用いてテストスクリプトを作成できる
                                    </td>
                                </tr>
                                <tr>
                                    <td>TA-1.3.7</td>
                                    <td><strong>K2</strong></td>
                                    <td>テストウェアを管理するツールの種類を要約できる</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        K2(理解)が大半を占めますが、<strong>TA-1.3.6 のみ K3(適用)</strong>である点に注意してください。単なる暗記ではなく、実際にキーワードを設計する演習問題が出題される可能性があります。
                    </p>
                </section>
            </main>
        </div>
    );
}
