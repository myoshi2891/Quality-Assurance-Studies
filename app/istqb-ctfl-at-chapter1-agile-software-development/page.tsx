import './istqb-ctfl-at-chapter1-agile-software-development.css';
import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';

const DIAGRAM_0 = `flowchart TD A["CTFL v4.0<br />Foundation Level<br />(必須前提資格)"]
--> B["CTFL-AT<br />Foundation Level Agile Tester<br />本ガイドの対象"] B
--> C1["CTAL-ATT<br />Advanced Level<br />Agile Technical Tester"] B
--> C2["CTAL-ATLaS<br />Agile Test Leadership<br />at Scale"] A -.->|"2025年以降の新規推奨ルート"| D["CTAL-AT v2.0<br />Advanced Level Agile Tester<br />CTFL-ATの後継"]
style
B fill:#00ff9d,stroke:#00a86b,color:#001018
style
D fill:#ffb020,stroke:#a86b00,color:#001018`;

const DIAGRAM_1 = `flowchart TD ROOT(("Chapter 1<br />Agile Software<br />Development<br />150分")) ROOT
--> S11["1.1 基礎"] ROOT
--> S12["1.2 諸側面"] S11
--> S111["1.1.1<br />アジャイルマニフェスト"] S11
--> S112["1.1.2<br />ホールチームアプローチ"] S11
--> S113["1.1.3<br />早期・頻繁なフィードバック"] S12
--> S121["1.2.1<br />XP／Scrum／Kanban"] S12
--> S122["1.2.2<br />協調的ユーザーストーリー作成"] S12
--> S123["1.2.3<br />レトロスペクティブ"] S12
--> S124["1.2.4<br />継続的インテグレーション"] S12
--> S125["1.2.5<br />リリース計画／イテレーション計画"] classDef
root fill:#132038,stroke:#22d3ee,stroke-width:2px,color:#eaf2fb,font-weight:bold; classDef
branchA fill:#0f2e28,stroke:#00ff9d,stroke-width:2px,color:#baf7dc,font-weight:bold; classDef
branchB fill:#2e1f3d,stroke:#b478ff,stroke-width:2px,color:#e6c9ff,font-weight:bold; classDef
leafA fill:#16233d,stroke:#00ff9d,color:#e6edf7; classDef
leafB fill:#16233d,stroke:#b478ff,color:#e6edf7; class ROOT root class S11 branchA class S12 branchB class S111,S112,S113 leafA class S121,S122,S123,S124,S125 leafB`;

const DIAGRAM_2 = `flowchart TB
subgraph G1["顧客価値・早期デリバリー"] P1["① 価値あるソフトウェアの早期・継続的デリバリーで顧客満足を最優先"] P3["③ 数週間から数ヶ月間隔(短い方が望ましい)での頻繁なデリバリー"]
end
subgraph G2["変化への適応"] P2["② 開発後期であっても要求の変更を歓迎し、顧客の競争優位に変える"]
end
subgraph G3["協働とコミュニケーション"] P4["④ ビジネス側の人間と開発者は、プロジェクトを通じて毎日共に働く"] P6["⑥ 情報伝達の最も効率的で効果的な方法はフェイストゥフェイスの会話"]
end
subgraph G4["人と持続可能性"] P5["⑤ 意欲ある個人を中心にプロジェクトを構築し、環境と支援を与え信頼する"] P8["⑧ 持続可能な開発を促進し、一定のペースを継続維持できるようにする"]
end
subgraph G5["進捗の測定と技術的卓越性"] P7["⑦ 動くソフトウェアこそが進捗の主要な尺度"] P9["⑨ 技術的卓越性と優れた設計への継続的な配慮がアジリティを高める"] P10["⑩ シンプルさ＝行わない作業を最大化する技術"]
end
subgraph G6["自己組織化と継続的改善"] P11["⑪ 最良のアーキテクチャ・要求・設計は自己組織化チームから生まれる"] P12["⑫ チームは定期的に振り返り、より効果的になるよう行動を調整する"] end`;

const DIAGRAM_3 = `flowchart LR
subgraph Traditional["❌ 伝統的な分離モデル"] direction TB T1["開発チーム"] -->|"完成後に引き渡し"| T2["独立したテストチーム"] T2 -->|"欠陥報告を戻す"| T1
end
subgraph WholeTeam["✅ ホールチームアプローチ"] direction TB Dev["開発者"]
--- Tester["テスター"] Tester
--- Biz["ビジネス代表者<br />プロダクトオーナー等"] Biz
--- Dev Dev -.->|"品質は全員の責任"| Quality(("共有された<br />品質目標")) Tester
-.-> Quality Biz
-.-> Quality end`;

const DIAGRAM_4 = `flowchart TD Story(("ユーザーストーリー")) Biz2["ビジネス代表者<br />(何を・なぜ)"]
--> Story Dev2["開発者<br />(どのように実装するか)"]
--> Story Tester2["テスター<br />(どうテストするか／エッジケースは何か)"]
--> Story Story
--> Result["共通理解に基づく<br />高品質な受け入れ基準"]`;

const DIAGRAM_5 = `flowchart LR
subgraph Seq["シーケンシャル開発モデル"] direction LR S1[要件定義]
--> S2[設計]
--> S3[実装]
--> S4[テスト]
--> S5[リリース] S5 -.->|"数ヶ月後にようやく<br />顧客フィードバック"| FB1(("フィードバック"))
end
classDef
seqNode fill:#3a1220,stroke:#ff4d6a,color:#ffc2d1; class S1,S2,S3,S4,S5,FB1 seqNode`;

const DIAGRAM_6 = `flowchart LR
subgraph Agile2["アジャイル開発"] direction LR I1["イテレーション1"]
--> F1(("フィードバック")) F1
--> I2["イテレーション2"]
--> F2(("フィードバック")) F2
--> I3["イテレーション3"]
--> F3(("フィードバック"))
end
classDef
agileNode fill:#0f2e28,stroke:#00ff9d,color:#baf7dc; class I1,I2,I3,F1,F2,F3 agileNode`;

const DIAGRAM_7 = `flowchart TD A["コード単位のフィードバック<br />ユニットテスト・TDD・ペアプログラミング"]
--> B["機能単位のフィードバック<br />イテレーション内のデモ・受け入れテスト"] B
--> C["プロダクト単位のフィードバック<br />スプリントレビュー・リリースごとの顧客評価"] C
--> D["プロセス単位のフィードバック<br />レトロスペクティブによるチームプロセスの改善"]`;

const DIAGRAM_8 = `flowchart TD Manifesto(("アジャイルマニフェスト<br />4つの価値観・12の原則"))
--> XP["Extreme Programming<br />技術プラクティス中心"] Manifesto
--> Scrum["Scrum<br />時間区切り・役割中心"] Manifesto
--> Kanban["Kanban<br />フロー・WIP制限中心"]`;

const DIAGRAM_9 = `flowchart LR
subgraph Weekly["週次サイクル"] W1["ストーリーの選択"]
--> W2["タスクへの分解"]
--> W3["テストファーストで実装"]
--> W4["継続的インテグレーション"]
--> W5["週次リリース候補"]
end
W5
--> Q["四半期サイクル:<br />複数週次サイクルの積み上げでリリース"]`;

const DIAGRAM_10 = `flowchart TD PB[("プロダクトバックログ")]
--> SP["スプリントプランニング<br />何を・どのように作るか計画"] SP
--> SB[("スプリントバックログ")] SB
--> Sprint["スプリント本体<br />通常2から4週間の固定長"]
subgraph Sprint direction TB DS["デイリースクラム<br />毎日15分の同期MTG"] -.->|"日々繰り返す"| DS Dev3["開発・テストの実施<br />ホールチームアプローチで進行"] DS
--> Dev3
end
Sprint
--> Inc[("インクリメント<br />完了の定義を満たした<br />動くソフトウェア")] Inc
--> SR["スプリントレビュー<br />ステークホルダーへのデモ・フィードバック収集"] SR
--> Retro["スプリントレトロスペクティブ<br />チームプロセスの振り返り"] Retro -->|"次のスプリントへ"| PB SR -.->|"フィードバックを反映"| PB`;

const DIAGRAM_11 = `flowchart LR Backlog["バックログ<br />依頼された作業"] -->|"Pull"| Analysis["分析中<br />WIP上限=2"] Analysis -->|"Pull"| Dev4["開発中<br />WIP上限=3"] Dev4 -->|"Pull"| Test5["テスト中<br />WIP上限=2"] Test5 -->|"Pull"| Done["完了"]
style
Analysis fill:#22d3ee,color:#001018
style
Dev4 fill:#22d3ee,color:#001018
style
Test5 fill:#22d3ee,color:#001018`;

const DIAGRAM_12 = `flowchart LR Card["📝 Card(カード)<br />ストーリーの簡潔な記述<br />詳細な仕様ではない"]
--> Conv["💬 Conversation(会話)<br />ビジネス代表者・開発者・<br />テスターによる詳細化の議論"] Conv
--> Conf["✅ Confirmation(確認)<br />受け入れ基準による<br />「完了」の合意"]`;

const DIAGRAM_13 = `flowchart TD Start(("ストーリー作成の<br />ワークショップ開始"))
--> Discuss["ビジネス代表者・開発者・テスターの<br />3者が同じ場でストーリーを議論"] Discuss
--> Q1{"テスターからの問い:<br />これはどうテストするか？<br />エッジケースは？"} Q1
--> Refine["ストーリーと受け入れ基準を<br />共同で洗練"] Refine
--> AC[("テスト可能な<br />受け入れ基準が完成")] AC
--> Ready["Ready(着手可能)な<br />ストーリーとしてバックログへ"]`;

const DIAGRAM_14 = `flowchart TD Sprint2["1つのイテレーション/スプリントの終了"]
--> Retro2["レトロスペクティブ開催"] Retro2
--> Q1["何がうまくいったか？<br />Keep"] Retro2
--> Q2["何が問題だったか？<br />Problem"] Retro2
--> Q3["次に何を試すか？<br />Try"] Q1
--> Actions[("具体的な改善アクション<br />アイテムの合意")] Q2
--> Actions Q3
--> Actions Actions
--> NextSprint["次のイテレーション計画に反映"] NextSprint -.->|"サイクルの繰り返し"| Sprint2`;

const DIAGRAM_15 = `flowchart TD
subgraph WithoutCI["❌ CIなし:統合を先延ばしにするケース"] direction TB D1["開発者A:2週間ブランチで作業"]
--> Merge1["統合フェーズ<br />マージ地獄"] D2["開発者B:2週間ブランチで作業"]
--> Merge1 D3["開発者C:2週間ブランチで作業"]
--> Merge1 Merge1
--> Problem["大量のコンフリクト／統合バグの原因特定困難／修正コストが指数関数的に増大"] end`;

const DIAGRAM_16 = `flowchart LR
subgraph WithCI["✅ CIあり:頻繁な統合"] direction LR C1["コードのコミット/プッシュ"]
--> C2["自動ビルド"] C2
--> C3["静的解析"] C3
--> C4["自動テスト実行<br />ユニット・統合"] C4
--> C5{"全て成功？"} C5 -->|"Yes"| C6["✅ 統合完了"] C5 -->|"No"| C7["❌ 即座に開発者へ通知"] C7 -.->|"すぐ修正"| C1 end`;

const DIAGRAM_17 = `flowchart TD Push["開発者がコードをpush"]
--> Trigger["CIサーバーがトリガー検知<br />Jenkins / GitHub Actions等"] Trigger
--> Build["自動ビルド"] Build
--> BuildCheck{"ビルド成功？"} BuildCheck -->|"No"| Fail1["❌ ビルド失敗を即通知<br />チームは最優先で修正"] BuildCheck -->|"Yes"| UnitTest["ユニットテストの自動実行"] UnitTest
--> UTCheck{"テスト成功？"} UTCheck -->|"No"| Fail2["❌ テスト失敗を通知"] UTCheck -->|"Yes"| IntTest["統合テストの自動実行"] IntTest
--> Report["カバレッジ・品質レポート生成"] Report
--> Artifact["デプロイ可能なビルド成果物の生成"]`;

const DIAGRAM_18 = `flowchart TD Vision["プロダクトビジョン<br />プロダクトゴール"]
--> RP["リリース計画<br />Release Planning<br />数ヶ月から数四半期単位"] RP
--> IP1["イテレーション計画1"] RP
--> IP2["イテレーション計画2"] RP
--> IP3["イテレーション計画3"] IP1
--> Iter1["イテレーション1実施<br />1から4週間"] IP2
--> Iter2["イテレーション2実施"] IP3
--> Iter3["イテレーション3実施"] Iter1
--> Release[("リリース<br />複数イテレーションの積み上げ")] Iter2
--> Release Iter3
--> Release`;

const DIAGRAM_19 = `flowchart LR
subgraph Release2["リリースレベル"] RiskTest["リスクベースのテスト戦略策定<br />非機能要件の確認"]
end
subgraph Iteration2["イテレーションレベル"] StoryTest["ストーリーごとのテスト設計<br />受け入れ基準のレビュー"]
end
subgraph Daily["日次レベル"] DailyTest["テスト実行・自動化・<br />継続的インテグレーションでの検証"]
end
Release2
--> Iteration2
--> Daily`;

const DIAGRAM_20 = `flowchart TD ROOT2(("Chapter 1<br />核心メッセージ")) ROOT2
--> B1["① 価値観と原則が<br />全ての土台"] ROOT2
--> B2["② テスターは分離<br />された存在ではない"] ROOT2
--> B3["③ フィードバックの<br />速度が品質を決める"] ROOT2
--> B4["④ ストーリーは<br />会話から生まれる"] ROOT2
--> B5["⑤ 改善は<br />仕組み化されている"] B1
--> B1a["4つの価値観"] B1
--> B1b["12の原則"] B1
--> B1c["XP/Scrum/Kanbanは<br />その実装形態"] B2
--> B2a["ホールチームアプローチ"] B2
--> B2b["品質は全員の責任"] B3
--> B3a["早期・頻繁な<br />フィードバック"] B3
--> B3b["継続的インテグレーション"] B4
--> B4a["3つのC"] B4
--> B4b["パワー・オブ・スリー"] B4
--> B4c["INVESTとテスト可能性"] B5
--> B5a["レトロスペクティブ"] B5
--> B5b["リリース計画と<br />イテレーション計画の階層"] classDef
root fill:#132038,stroke:#22d3ee,stroke-width:2px,color:#eaf2fb,font-weight:bold; classDef
n1 fill:#3a2412,stroke:#ffb020,color:#ffe0b3,font-weight:bold; classDef
n2 fill:#2e1f3d,stroke:#b478ff,color:#e6c9ff,font-weight:bold; classDef
n3 fill:#123a38,stroke:#22d3ee,color:#a9f5ee,font-weight:bold; classDef
n4 fill:#3a1220,stroke:#ff4d6a,color:#ffc2d1,font-weight:bold; classDef
n5 fill:#0f2e28,stroke:#00ff9d,color:#baf7dc,font-weight:bold; class ROOT2 root class B1,B1a,B1b,B1c n1 class B2,B2a,B2b n2 class B3,B3a,B3b n3 class B4,B4a,B4b,B4c n4 class B5,B5a,B5b n5`;

export default function Page() {
    return (
        <div className="istqb-ctfl-at-chapter1-page">
            <NavBar />
            <div className="wrap">

                            <section className="hero">
                                <div className="eyebrow">ISTQB® CTFL-AT · Chapter 1</div>
                                <h1>アジャイルソフトウェア開発<br />完全解説ガイド</h1>
                                <p className="sub">
                                    Certified Tester Foundation Level – Agile Tester 公式シラバス Chapter
                                    1「Agile Software
                                    Development」を、中級者〜上級者向けにステップバイステップで詳解。アジャイルマニフェストからXP／Scrum／Kanban、ユーザーストーリー、CI、リリース計画まで、図解と一次情報源つきで完全網羅します。
                                </p>

                                <div className="hero-meta">
                                    <div>
                                        <div className="label">対応資格</div>
                                        <div className="val">CTFL-AT (Foundation Level Agile Tester)</div>
                                    </div>
                                    <div>
                                        <div className="label">対応章</div>
                                        <div className="val">Chapter 1 — 150分想定</div>
                                    </div>
                                    <div>
                                        <div className="label">シラバス版</div>
                                        <div className="val">Version 2014（現行最新）</div>
                                    </div>
                                    <div>
                                        <div className="label">前提資格</div>
                                        <div className="val">ISTQB® CTFL 必須</div>
                                    </div>
                                </div>

                                <div className="hero-links">
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >📌 公式認定ページ</a
                                    >
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB-CTFL-AT_Syllabus_v1.0.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >📌 公式シラバスPDF</a
                                    >
                                    <a href="https://agilemanifesto.org/" target="_blank" rel="noopener noreferrer"
                                        >📌 アジャイルマニフェスト公式</a
                                    >
                                </div>
                            </section>

                            <section id="overview">
                                <div className="alert">
                                    <div className="atitle">
                                        ⚠️ 重要な最新情報：CTFL-AT のサンセット（廃止予定）について
                                    </div>
                                    <p>
                                        ISTQB® は CTFL-AT
                                        の<strong>サンセット（段階的廃止）</strong>を正式発表しています。学習開始前に必ず確認してください。
                                    </p>
                                </div>

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
                                                <td><strong>後継資格</strong></td>
                                                <td>
                                                    CTAL-AT v2.0（Certified Tester Advanced Level Agile
                                                    Tester）が新設
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>英語試験の提供終了日</strong></td>
                                                <td>2027年5月6日（再受験含む）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>非英語試験の提供終了日</strong></td>
                                                <td>2027年11月6日（再受験含む）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>既存資格の扱い</strong></td>
                                                <td>サンセット後も取得済みのCTFL-AT認定は有効なまま失効しない</td>
                                            </tr>
                                            <tr>
                                                <td><strong>代替学習先</strong></td>
                                                <td>
                                                    ① CTFL v4.0（アジャイル概念が統合済み） ／ ② CTAL-AT
                                                    v2.0（本格的な専門知識）
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="callout">
                                    <div className="ctitle">なぜ今CTFL-ATを学ぶ価値があるのか</div>
                                    <p>
                                        CTFL v4.0には既にアジャイル概念が統合されていますが、CTFL-AT Chapter
                                        1はアジャイル開発とテストの関係を<strong>体系的かつ深く</strong>扱っており、実務でアジャイルチームに参画するテスター・エンジニアにとって優れた学習ロードマップです。本ガイドはシラバス（2014年版・現行最新）の記述に忠実に、2025年時点の実務動向（Scrum
                                        Guide 2020等）との差分も補足します。
                                    </p>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 サンセット公式アナウンス:
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >istqb.org/certifications/.../ctfl-at</a
                                    >
                                    ／ CTFL v4.0:
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >istqb.org/.../ctfl-v4-0</a
                                    >
                                </p>

                                <h3 className="h-sub">試験仕様（公式データ）</h3>
                                <div className="metric-grid">
                                    <div className="metric">
                                        <div className="mval">40</div>
                                        <div className="mlabel">問題数</div>
                                    </div>
                                    <div className="metric">
                                        <div className="mval">3</div>
                                        <div className="mlabel">K-Level (K1-K3)</div>
                                    </div>
                                    <div className="metric">
                                        <div className="mval">150</div>
                                        <div className="mlabel">Ch.1 想定学習時間(分)</div>
                                    </div>
                                    <div className="metric">
                                        <div className="mval">1</div>
                                        <div className="mlabel">必須前提資格(CTFL)</div>
                                    </div>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典:
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >ISTQB公式認定ページ</a
                                    >
                                </p>

                                <h3 className="h-sub">資格ロードマップにおける位置づけ</h3>
                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_0} /><div className="mermaid-cap">CTFL-ATは「アジャイルストリーム」の入口。サンセット期間中は引き続き受験可能</div></div>

                                <h3 className="h-sub">認知レベル（K-Level）の考え方</h3>
                                <div className="pyramid">
                                    <div className="plevel l3">
                                        K1 — Remember（記憶）<small>用語・アプローチを想起できる</small>
                                    </div>
                                    <div className="plevel l2">
                                        K2 — Understand（理解）<small>利点・目的を説明できる</small>
                                    </div>
                                    <div className="plevel l1">
                                        K3 — Apply（適用）<small>実際にテスト可能なストーリーを書ける</small>
                                    </div>
                                </div>
                                <p className="lead" style={{margin: "0 auto", textAlign: "center"}}>
                                    シラバス全体は「K1レベルで出題されうる」が原則。各学習目標に明示されたK-Levelは最低到達ラインであり、K3指定は必ず「適用」できる状態まで理解を深める必要があります。
                                </p>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)", textAlign: "center"}}
                                >
                                    📌 出典:
                                    <a
                                        href="https://istqb.org/wp-content/uploads/2024/11/ISTQB-CTFL-AT_Syllabus_v1.0.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >シラバスPDF p.8</a
                                    >
                                </p>
                            </section>

                            <section id="chapter-map" className="divider-top">
                                <h2 className="h-section">Chapter 1 全体構成マップ</h2>
                                <p className="lead">
                                    Chapter 1「Agile Software Development」は、大きく2つの節（1.1・1.2）×
                                    合計8サブセクションで構成されています。
                                </p>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_1} /></div>

                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--color-text-secondary)"}}
                                >
                                    キーワード（シラバス指定）: Agile Manifesto, Agile software development,
                                    incremental development model, iterative development model, software lifecycle,
                                    test automation, test basis, test-driven development, test oracle, user story
                                </p>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典: シラバスPDF p.8（Keywords セクション）
                                </p>

                                <h3 className="h-sub">目次</h3>
                                <div className="toc-grid">
                                    <a href="#s111"
                                        ><span className="tnum">1.1.1</span
                                        ><span className="ttitle"
                                            >アジャイルソフトウェア開発とアジャイルマニフェスト</span
                                        ></a
                                    >
                                    <a href="#s112"
                                        ><span className="tnum">1.1.2</span
                                        ><span className="ttitle">ホールチームアプローチ</span></a
                                    >
                                    <a href="#s113"
                                        ><span className="tnum">1.1.3</span
                                        ><span className="ttitle">早期かつ頻繁なフィードバック</span></a
                                    >
                                    <a href="#s121"
                                        ><span className="tnum">1.2.1</span
                                        ><span className="ttitle">XP・Scrum・Kanban</span></a
                                    >
                                    <a href="#s122"
                                        ><span className="tnum">1.2.2</span
                                        ><span className="ttitle">協調的なユーザーストーリー作成</span></a
                                    >
                                    <a href="#s123"
                                        ><span className="tnum">1.2.3</span
                                        ><span className="ttitle">レトロスペクティブ</span></a
                                    >
                                    <a href="#s124"
                                        ><span className="tnum">1.2.4</span
                                        ><span className="ttitle">継続的インテグレーション</span></a
                                    >
                                    <a href="#s125"
                                        ><span className="tnum">1.2.5</span
                                        ><span className="ttitle">リリース計画とイテレーション計画</span></a
                                    >
                                </div>
                            </section>

                            <section id="s111" className="divider-top">
                                <div className="section-head">
                                    <span className="chapter-badge k1">1.1.1 <span className="klevel">K1 記憶</span></span>
                                    <h2 className="h-section">アジャイルソフトウェア開発とアジャイルマニフェスト</h2>
                                    <p className="lead">
                                        学習目標
                                        FA-1.1.1：アジャイルマニフェストに基づくアジャイルソフトウェア開発の基本概念を想起できる
                                    </p>
                                </div>

                                <h3 className="h-sub">誕生の背景</h3>
                                <p>
                                    2001年、当時広く使われていた軽量ソフトウェア開発手法を代表する17名の技術者たちが米国ユタ州スノーバードに集まり、共通の価値観と原則について合意しました。これが<strong
                                        >「アジャイルソフトウェア開発宣言」（Manifesto for Agile Software
                                        Development、通称アジャイルマニフェスト）</strong
                                    >です。
                                </p>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 公式サイト:
                                    <a href="https://agilemanifesto.org/" target="_blank" rel="noopener noreferrer"
                                        >agilemanifesto.org</a
                                    >
                                    ／ 原則（英語原文）:
                                    <a
                                        href="https://agilemanifesto.org/principles.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >agilemanifesto.org/principles.html</a
                                    >
                                </p>

                                <h3 className="h-sub">4つの価値観（Values）</h3>
                                <p>アジャイルマニフェストは以下4つの価値観の対比として表現されます。</p>

                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>左側（より重視される）</th>
                                                <th>右側（価値はあるが重視度は低い）</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>個人と対話</strong>（Individuals and Interactions）</td>
                                                <td>プロセスやツール（Processes and Tools）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>動くソフトウェア</strong>（Working Software）</td>
                                                <td>包括的なドキュメント（Comprehensive Documentation）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>顧客との協調</strong>（Customer Collaboration）</td>
                                                <td>契約交渉（Contract Negotiation）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>変化への対応</strong>（Responding to Change）</td>
                                                <td>計画に従うこと（Following a Plan）</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="alert amber">
                                    <div className="atitle">⚠️ 試験での頻出誤解ポイント</div>
                                    <p>
                                        アジャイルマニフェストは「右側の項目に価値がない」とは言っていません。<strong
                                            >"while there is value in the items on the right, we value the items on
                                            the left more"</strong
                                        >（右側にも価値はあるが、左側により大きな価値を置く）という<strong>相対的な優先順位</strong>を示したものです。
                                    </p>
                                </div>

                                <h4 className="h-minor">各価値観の意味（シラバスの解説に基づく）</h4>

                                <div className="step-list">
                                    <li>
                                        <div className="stitle">① 個人と対話（Individuals and Interactions）</div>
                                        <div className="sdesc">
                                            アジャイル開発は非常に人間中心的です。ソフトウェアを構築するのはチームであり、ツールやプロセスへの依存よりも、継続的なコミュニケーションと対話を通じてこそ、チームは最も効果的に機能します。
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">② 動くソフトウェア（Working Software）</div>
                                        <div className="sdesc">
                                            顧客視点では、過度に詳細なドキュメントよりも「動くソフトウェア」の方がはるかに有用で価値が高く、開発チームへの迅速なフィードバックの機会を提供します。機能が限定的であっても開発ライフサイクルの早い段階で利用可能になるため、大きなタイム・トゥ・マーケットの優位性をもたらします。
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">③ 顧客との協調（Customer Collaboration）</div>
                                        <div className="sdesc">
                                            顧客は自分が本当に必要としているシステムを明確に仕様化することにしばしば困難を感じます。顧客と直接協調することで、顧客が本当に求めているものを正確に理解できる可能性が高まります。
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">④ 変化への対応（Responding to Change）</div>
                                        <div className="sdesc">
                                            ソフトウェアプロジェクトにおいて変化は不可避です。ビジネス環境・法規制・競合・技術の進歩などがプロジェクトに大きな影響を与えます。変化を受け入れる柔軟な作業実践は、計画に厳密に従うことよりも重要です。
                                        </div>
                                    </li>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典: シラバスPDF p.9（1.1.1節）
                                </p>

                                <h3 className="h-sub">12の原則（Principles）</h3>
                                <p>
                                    アジャイルマニフェストのコアとなる価値観は、<strong>12の原則</strong>として具体化されています。試験では原則の内容を分類・識別できることが求められます。
                                </p>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_2} /><div className="mermaid-cap">📌 出典: シラバスPDF p.10（12 Principles）／原文:
                                        <a
                                            href="https://agilemanifesto.org/principles.html"
                                            target="_blank"
                                            rel="noopener"
                                            >agilemanifesto.org/principles.html</a
                                        ></div></div>

                                <div className="callout">
                                    <div className="ctitle">実務Tips（2025年補足）</div>
                                    <p>
                                        Agile Alliance
                                        も同様の12原則の解説ページを公開しており、コミュニティによる注釈や実践例が豊富です。試験対策としては「どの原則がどの価値観を支えているか」を対応づけて覚えると理解が深まります。
                                    </p>
                                    <p style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem"}}>
                                        📌
                                        <a
                                            href="https://agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >agilealliance.org/agile101/12-principles-behind-the-agile-manifesto</a
                                        >
                                    </p>
                                </div>

                                <p>
                                    「異なるアジャイル手法は、これらの価値観と原則を行動に移すための<strong>規範的な実践（プラクティス）</strong>を提供する」——これがシラバスの重要な一文です。次節以降で扱うXP・Scrum・Kanbanは、いずれもこの12原則を異なる形で実装したものだと理解してください。
                                </p>
                            </section>

                            <section id="s112" className="divider-top">
                                <div className="section-head">
                                    <span className="chapter-badge k2">1.1.2 <span className="klevel">K2 理解</span></span>
                                    <h2 className="h-section">ホールチームアプローチ（Whole-Team Approach）</h2>
                                    <p className="lead">学習目標 FA-1.1.2：ホールチームアプローチの利点を理解できる</p>
                                </div>

                                <h3 className="h-sub">定義とステップバイステップ解説</h3>
                                <p>
                                    <strong>ホールチームアプローチ</strong
                                    >とは、アジャイルプロジェクトにおいて、必要なスキルを持つメンバー全員（テスター、開発者、ビジネス代表者など）が<strong>一つのチームとして共同で品質に責任を持つ</strong>という考え方です。伝統的な開発では「開発チーム」と「テストチーム」が別組織・別フェーズで分離されがちですが、アジャイルではこの壁を取り払います。
                                </p>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_3} /></div>

                                <div className="step-list">
                                    <li>
                                        <div className="stitle">ステップ1：役割の再定義</div>
                                        <div className="sdesc">
                                            アジャイルチームでは、テスターは「品質の門番」ではなく、「品質を作り込むプロセスの一員」として機能します。テスト活動はプロジェクト終盤にまとめて行うのではなく、開発の最初から最後まで<strong>継続的に統合</strong>されます。
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">
                                            ステップ2：「パワー・オブ・スリー（Power of Three）」の実践
                                        </div>
                                        <div className="sdesc">
                                            シラバスは特に、<strong>ビジネス代表者・開発者・テスター</strong>の3者が協働してユーザーストーリーの詳細化・分析・テストケース設計を行う実践を重視しています（1.2.2で詳述）。
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">ステップ3：スキルの相互補完</div>
                                        <div className="sdesc">
                                            ホールチームアプローチでは、テスターは開発者に「テストの視点」を提供し、逆に開発者はテスターに技術的な実装の知見を共有します。この双方向の知識移転により、チーム全体のテストに対する意識（テストマインドセット）が向上します。
                                        </div>
                                    </li>
                                </div>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_4} /><div className="mermaid-cap">パワー・オブ・スリー：3者協働によるストーリー精緻化</div></div>

                                <h3 className="h-sub">ホールチームアプローチの利点（試験頻出）</h3>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>利点</th>
                                                <th>説明</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>早期の欠陥検出</strong></td>
                                                <td>
                                                    テスターが要求定義・設計段階から関与するため、実装前に問題を発見できる
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>コミュニケーションの改善</strong></td>
                                                <td>チーム間の壁がなくなり、誤解に基づく手戻りが減少する</td>
                                            </tr>
                                            <tr>
                                                <td><strong>品質に対する集合的責任</strong></td>
                                                <td>
                                                    「テストは他人の仕事」という意識がなくなり、全員が品質に当事者意識を持つ
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>知識の共有</strong></td>
                                                <td>テスターの分析スキルと開発者の技術スキルが相互に浸透する</td>
                                            </tr>
                                            <tr>
                                                <td><strong>迅速なフィードバックループ</strong></td>
                                                <td>チームが分離していないため、欠陥やリスクへの対応が速くなる</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典: シラバスPDF p.10（1.1.2節）
                                </p>

                                <div className="callout">
                                    <div className="ctitle">注意点（K2レベルの理解として重要）</div>
                                    <p>
                                        ホールチームアプローチは「専門性が不要になる」という意味ではありません。テスターは依然として専門的なテストスキル（技法・技術）を持ち続けますが、それをチーム全体のために<strong>より統合的に</strong>適用する、という点がポイントです。
                                    </p>
                                </div>
                            </section>

                            <section id="s113" className="divider-top">
                                <div className="section-head">
                                    <span className="chapter-badge k2">1.1.3 <span className="klevel">K2 理解</span></span>
                                    <h2 className="h-section">早期かつ頻繁なフィードバック</h2>
                                    <p className="lead">
                                        学習目標 FA-1.1.3：早期かつ頻繁なフィードバックの利点を理解できる
                                    </p>
                                </div>

                                <h3 className="h-sub">なぜ「早期・頻繁」が重要なのか</h3>
                                <p>
                                    伝統的なシーケンシャル（ウォーターフォール型）開発モデルでは、フィードバックはプロジェクトのほぼ最終段階（システムテストや受け入れテストの時点）でしか得られません。この場合、要求の誤解や設計上の欠陥がプロジェクトの非常に遅い段階で発覚し、修正コストが著しく高くなります。
                                </p>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_5} /><div className="mermaid-cap">❌ フィードバックが極端に遅い</div></div>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_6} /><div className="mermaid-cap">✅ 各イテレーション終了時に継続的フィードバック</div></div>

                                <h3 className="h-sub">フィードバックが得られる複数のレベル</h3>
                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_7} /></div>

                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>フィードバックのレベル</th>
                                                <th>主な手段</th>
                                                <th>誰から得るか</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>コードレベル</td>
                                                <td>TDD、ペアプログラミング、静的解析、コードレビュー</td>
                                                <td>開発チーム内</td>
                                            </tr>
                                            <tr>
                                                <td>機能レベル</td>
                                                <td>イテレーション内でのデモ、受け入れテスト（ATDD）</td>
                                                <td>プロダクトオーナー・テスター</td>
                                            </tr>
                                            <tr>
                                                <td>プロダクトレベル</td>
                                                <td>スプリントレビュー、リリース後の利用状況</td>
                                                <td>顧客・エンドユーザー</td>
                                            </tr>
                                            <tr>
                                                <td>プロセスレベル</td>
                                                <td>レトロスペクティブ</td>
                                                <td>チーム自身</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="h-sub">早期・頻繁なフィードバックの利点（試験頻出）</h3>
                                <ul className="checklist">
                                    <li>
                                        <strong>欠陥の早期発見・早期除去</strong
                                        >：欠陥は発生したフェーズに近いほど修正コストが低い
                                    </li>
                                    <li>
                                        <strong>要求の誤解を早期に修正できる</strong
                                        >：顧客が実際に動くソフトウェアを見ることで、書面だけでは伝わらない誤解に早く気づける
                                    </li>
                                    <li>
                                        <strong>リスクの早期低減</strong
                                        >：技術的リスク・ビジネスリスクの双方を早い段階で可視化できる
                                    </li>
                                    <li>
                                        <strong>チームの学習と適応</strong
                                        >：フィードバックのたびにチームのプロセス・見積もり精度が改善される
                                    </li>
                                </ul>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典: シラバスPDF p.11（1.1.3節）
                                </p>

                                <div className="callout">
                                    <div className="ctitle">テスターの役割としての補足</div>
                                    <p>
                                        早期かつ頻繁なフィードバックの実現には、テスターが単体テスト・統合テストの自動化や、受け入れ基準のレビューに<strong>開発の最初期から</strong>関与することが不可欠です。これは1.2.4（継続的インテグレーション）とも密接に関連します。
                                    </p>
                                </div>
                            </section>

                            <section id="s121" className="divider-top">
                                <div className="section-head">
                                    <span className="chapter-badge k1">1.2.1 <span className="klevel">K1 記憶</span></span>
                                    <h2 className="h-section">
                                        アジャイルソフトウェア開発アプローチ（XP・Scrum・Kanban）
                                    </h2>
                                    <p className="lead">
                                        学習目標 FA-1.2.1：アジャイルソフトウェア開発アプローチを想起できる
                                    </p>
                                </div>

                                <p>
                                    アジャイルマニフェストの価値観・原則を実装する方法は複数存在します。CTFL-ATシラバスでは、その代表例として
                                    <strong>エクストリーム・プログラミング（XP）</strong
                                    >・<strong>Scrum</strong>・<strong>Kanban</strong> の3つを取り上げています。
                                </p>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_8} /></div>

                                <h3 className="h-sub">A. エクストリーム・プログラミング（XP）</h3>
                                <p>
                                    Kent Beck
                                    が提唱したXPは、<strong>価値観・原則・プラクティス</strong>の3階層構造で構成される、技術的なプラクティスを特に重視するアジャイル手法です。
                                </p>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典: シラバスPDF p.11-12／原著: Beck, K. (2004)
                                    <em>Extreme Programming Explained</em>
                                </p>

                                <h4 className="h-minor">XPの5つの価値観</h4>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>価値観</th>
                                                <th>説明</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>コミュニケーション（Communication）</td>
                                                <td>チームメンバー間の緊密で頻繁な対話を重視</td>
                                            </tr>
                                            <tr>
                                                <td>シンプルさ（Simplicity）</td>
                                                <td>今必要な最小限の設計・実装のみを行う</td>
                                            </tr>
                                            <tr>
                                                <td>フィードバック（Feedback）</td>
                                                <td>テストや顧客レビューから継続的に学ぶ</td>
                                            </tr>
                                            <tr>
                                                <td>勇気（Courage）</td>
                                                <td>必要であれば設計変更・リファクタリングを恐れず行う</td>
                                            </tr>
                                            <tr>
                                                <td>尊重（Respect）</td>
                                                <td>チームメンバー同士がお互いを尊重する</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h4 className="h-minor">XPの主要プラクティス（試験で問われやすいもの）</h4>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>プラクティス</th>
                                                <th>内容</th>
                                                <th>テストとの関連</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>テストファースト開発／TDD</strong></td>
                                                <td>実装前にテストを書く</td>
                                                <td>テスターにとって最重要関連プラクティス</td>
                                            </tr>
                                            <tr>
                                                <td><strong>ペアプログラミング</strong></td>
                                                <td>2人1組で実装</td>
                                                <td>リアルタイムのコードレビュー効果</td>
                                            </tr>
                                            <tr>
                                                <td><strong>継続的インテグレーション</strong></td>
                                                <td>頻繁にコードを統合しビルド・テストを自動実行</td>
                                                <td>1.2.4で詳述</td>
                                            </tr>
                                            <tr>
                                                <td><strong>リファクタリング</strong></td>
                                                <td>振る舞いを変えずにコード構造を改善</td>
                                                <td>回帰テストの重要性が増す</td>
                                            </tr>
                                            <tr>
                                                <td><strong>シンプルな設計</strong></td>
                                                <td>YAGNI（You Aren't Gonna Need It）原則</td>
                                                <td>過剰設計を避ける</td>
                                            </tr>
                                            <tr>
                                                <td><strong>小さなリリース</strong></td>
                                                <td>頻繁に小さい単位でリリース</td>
                                                <td>早期フィードバックの実現</td>
                                            </tr>
                                            <tr>
                                                <td><strong>オンサイト顧客</strong></td>
                                                <td>顧客がチームと常駐・密接に協働</td>
                                                <td>受け入れ基準の即時確認</td>
                                            </tr>
                                            <tr>
                                                <td><strong>共同所有権</strong></td>
                                                <td>コードはチーム全体の所有物</td>
                                                <td>誰でも改善・修正可能</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_9} /><div className="mermaid-cap">XPの開発サイクル（週次・四半期サイクル）／📌 参考:
                                        <a href="http://www.extremeprogramming.org/" target="_blank" rel="noopener"
                                            >extremeprogramming.org</a
                                        ></div></div>

                                <h3 className="h-sub">B. Scrum</h3>
                                <p>
                                    Scrumは、<strong>時間区切り（タイムボックス）のイテレーション「スプリント」</strong>を中心に構成される、最も広く採用されているアジャイルフレームワークです。
                                </p>

                                <div className="alert amber">
                                    <div className="atitle">⚠️ 重要な注記（2025年時点の正確性のために）</div>
                                    <p>
                                        CTFL-ATシラバス（2014年版）は当時の「Scrum Guide」に基づいて「Development
                                        Team（開発チーム）」という用語を使用し、「チームリーダーは存在せず、チームが意思決定する」と説明しています。しかし、現行の<strong
                                            >Scrum Guide 2020年版</strong
                                        >（Ken Schwaber &amp; Jeff Sutherland
                                        による最新の公式ガイド）では、用語が整理され「Developers（開発者）」という呼称に変更され、「self-organizing（自己組織化）」から<strong>「self-managing（自己管理型）」</strong>という表現に更新されています。試験ではシラバスの用語を基準に解答する必要がありますが、実務では現行のScrum
                                        Guide 2020の用語を使うのが標準です。本ガイドでは両方を併記します。
                                    </p>
                                    <p style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem"}}>
                                        📌 現行Scrum Guide（2020年版）公式:
                                        <a
                                            href="https://scrumguides.org/scrum-guide.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >scrumguides.org/scrum-guide.html</a
                                        >
                                        ／ 改訂履歴:
                                        <a
                                            href="https://scrumguides.org/revisions.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >scrumguides.org/revisions.html</a
                                        >
                                    </p>
                                </div>

                                <h4 className="h-minor">
                                    Scrumの3つの役割（シラバス準拠／カッコ内は現行Scrum Guide 2020の呼称）
                                </h4>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>役割</th>
                                                <th>責任</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>プロダクトオーナー</strong>（Product Owner）</td>
                                                <td>
                                                    プロダクトバックログを管理し、開発する機能の優先順位を決定。ビジネス価値の最大化に責任を持つ
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>開発チーム</strong>（Development Team／現行:
                                                    Developers）
                                                </td>
                                                <td>
                                                    プロダクトを開発・テストする。自己組織化（現行:
                                                    自己管理型）でクロスファンクショナル
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>スクラムマスター</strong>（Scrum Master）</td>
                                                <td>
                                                    チームがScrumのプロセスを正しく実践できるよう支援するファシリテーター・コーチ役
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h4 className="h-minor">Scrumの主要成果物（Artifacts）</h4>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>成果物</th>
                                                <th>説明</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>プロダクトバックログ</strong>（Product Backlog）</td>
                                                <td>プロダクトに必要な全ての要求事項の優先順位付きリスト</td>
                                            </tr>
                                            <tr>
                                                <td><strong>スプリントバックログ</strong>（Sprint Backlog）</td>
                                                <td>現在のスプリントで開発チームが取り組むと選択した項目</td>
                                            </tr>
                                            <tr>
                                                <td><strong>インクリメント</strong>（Increment）</td>
                                                <td>
                                                    スプリントで完成した「完了の定義（Definition of
                                                    Done）」を満たす動くソフトウェア
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h4 className="h-minor">Scrumのイベント（スプリントサイクル全体図）</h4>
                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_10} /></div>

                                <div className="alert">
                                    <div className="atitle">🎯 試験頻出ポイント：Scrumにおけるテストの位置づけ</div>
                                    <p>
                                        シラバスは明確に指摘しています：<strong
                                            >「Scrum（XPとは対照的に）は特定のソフトウェア開発技法（例：テストファーストプログラミング）を規定しない。さらに、Scrumはスプリント内でどのようにテストを行うべきかについてのガイダンスを提供しない」</strong
                                        >
                                    </p>
                                    <p>
                                        これは非常に重要な試験ポイントです。Scrumは「枠組み（フレームワーク）」であり、XPのような具体的な技術プラクティスを指定しません。そのため、<strong>Scrumチームは自らテスト戦略・テスト技法・自動化アプローチを定義する必要があります</strong>。
                                    </p>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典: シラバスPDF p.12（1.2.1節、Scrum部分）／Scrum Guide 2020:
                                    <a
                                        href="https://scrumguides.org/scrum-guide.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >scrumguides.org</a
                                    >
                                </p>

                                <h4 className="h-minor">Scrumのタイムボックス（現行Scrum Guide 2020の規定）</h4>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>イベント</th>
                                                <th>目安の長さ（スプリント4週間の場合）</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>スプリント</td>
                                                <td>1〜4週間（固定長）</td>
                                            </tr>
                                            <tr>
                                                <td>スプリントプランニング</td>
                                                <td>最大8時間</td>
                                            </tr>
                                            <tr>
                                                <td>デイリースクラム</td>
                                                <td>毎日15分</td>
                                            </tr>
                                            <tr>
                                                <td>スプリントレビュー</td>
                                                <td>最大4時間</td>
                                            </tr>
                                            <tr>
                                                <td>スプリントレトロスペクティブ</td>
                                                <td>最大3時間</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典:
                                    <a
                                        href="https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >Scrum Guide 2020 PDF</a
                                    >
                                </p>

                                <h3 className="h-sub">C. Kanban</h3>
                                <p>
                                    Kanbanは、トヨタ生産方式に起源を持ち、David J. Anderson
                                    によってソフトウェア開発向けに体系化された、<strong>継続的なフロー（流れ）を可視化・最適化する</strong>アプローチです。ScrumやXPと異なり、固定長のイテレーション（スプリント）を必須としません。
                                </p>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 公式ガイド:
                                    <a href="https://kanban.university/kanban-guide/" target="_blank" rel="noopener noreferrer"
                                        >kanban.university/kanban-guide</a
                                    >
                                </p>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_11} /><div className="mermaid-cap">Kanbanボード：プル型のワークフローとWIP制限</div></div>

                                <h4 className="h-minor">Kanbanの3つの基本要素（試験頻出）</h4>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>要素</th>
                                                <th>説明</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Kanbanボード</strong>（Kanban Board）</td>
                                                <td>
                                                    管理すべきバリューチェーンを可視化するボード。列（カラム）はワークフローの各ステージを表す
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Kanbanカード</strong>（Kanban Card）</td>
                                                <td>
                                                    個々の作業項目（ユーザーストーリー・タスク・欠陥など）を表す
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>WIP制限</strong>（Work-in-Progress Limit）</td>
                                                <td>
                                                    各ステージで同時に進行できる作業項目数の上限。プル型システムを実現し、流れを最適化する
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h4 className="h-minor">Kanbanの6つの一般プラクティス（Kanban University公式）</h4>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>プラクティス</th>
                                                <th>内容</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>可視化（Visualize）</td>
                                                <td>ワークフローをボード上で可視化する</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>WIPの制限（Limit WIP）</td>
                                                <td>進行中の作業数を制限し、過負荷を防ぐ</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>フローの管理（Manage Flow）</td>
                                                <td>スムーズで予測可能な作業の流れを維持する</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>ポリシーの明示化（Make Policies Explicit）</td>
                                                <td>「完了」の基準やプル基準を明文化する</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>フィードバックループの活用（Implement Feedback Loops）</td>
                                                <td>定期的なレビュー・改善の場を設ける</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>
                                                    協調的な改善・実験的な進化（Improve Collaboratively, Evolve
                                                    Experimentally）
                                                </td>
                                                <td>小さな変更を試しながら継続的に改善する</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典:
                                    <a
                                        href="https://kanban.university/wp-content/uploads/2023/04/The-Official-Kanban-Guide_A4.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >Kanban University公式ガイド</a
                                    >
                                </p>

                                <div className="callout">
                                    <div className="ctitle">WIP制限がなぜ重要か（K2理解のポイント）</div>
                                    <p>
                                        WIP（Work in
                                        Progress）を制限しないシステムは、しばしば「過負荷（Overburdened）」状態になり、結果としてスループット・予測可能性・品質のすべてが低下します。WIP制限は、チームが「今始めた仕事を終わらせてから次を始める」という規律を作り、コンテキストスイッチのコストを削減します。
                                    </p>
                                    <p style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem"}}>
                                        📌 出典:
                                        <a
                                            href="https://kanban.university/kanban-guide/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >kanban.university/kanban-guide</a
                                        >
                                    </p>
                                </div>

                                <h3 className="h-sub">XP・Scrum・Kanban の比較表（試験対策用）</h3>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>観点</th>
                                                <th>XP</th>
                                                <th>Scrum</th>
                                                <th>Kanban</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>中心となる考え方</strong></td>
                                                <td>技術的卓越性のプラクティス</td>
                                                <td>タイムボックス化されたイテレーション＋役割定義</td>
                                                <td>継続的フローの可視化とWIP制限</td>
                                            </tr>
                                            <tr>
                                                <td><strong>固定長イテレーション</strong></td>
                                                <td>あり（週次サイクル）</td>
                                                <td>あり（スプリント：1〜4週間）</td>
                                                <td><strong>必須ではない</strong></td>
                                            </tr>
                                            <tr>
                                                <td><strong>役割の規定</strong></td>
                                                <td>明確には規定しない</td>
                                                <td>プロダクトオーナー／開発チーム／スクラムマスター</td>
                                                <td>明確には規定しない</td>
                                            </tr>
                                            <tr>
                                                <td><strong>テスト技法の規定</strong></td>
                                                <td>あり（TDD等を明示的に推奨）</td>
                                                <td><strong>規定しない</strong>（チームに委ねられる）</td>
                                                <td>規定しない</td>
                                            </tr>
                                            <tr>
                                                <td><strong>変更への対応</strong></td>
                                                <td>イテレーション内では比較的固定</td>
                                                <td>スプリント内では原則変更しない</td>
                                                <td>いつでもバックログに追加可能（柔軟）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>主な可視化ツール</strong></td>
                                                <td>タスクボード</td>
                                                <td>スプリントバックログ／バーンダウンチャート</td>
                                                <td>Kanbanボード／累積フロー図</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 総合出典: シラバスPDF p.11-13（1.2.1節全体）
                                </p>

                                <div className="callout">
                                    <div className="ctitle">学習目標のK-Level再確認</div>
                                    <p>
                                        <code>FA-1.2.1</code>
                                        はK1（想起）指定のため、試験では「XP・Scrum・Kanbanという3つのアプローチが存在し、それぞれの基本的な特徴を思い出せること」が最低ラインですが、実務者としては上記の比較表レベルの理解（K2相当）を持っておくことを強く推奨します。
                                    </p>
                                </div>
                            </section>

                            <section id="s122" className="divider-top">
                                <div className="section-head">
                                    <span className="chapter-badge k3">1.2.2 <span className="klevel">K3 適用</span></span>
                                    <h2 className="h-section">協調的なユーザーストーリー作成</h2>
                                    <p className="lead">
                                        学習目標
                                        FA-1.2.2：開発者・ビジネス代表者と協調して、テスト可能なユーザーストーリーを記述できる
                                    </p>
                                </div>

                                <div className="alert green">
                                    <div className="atitle">🎯 Chapter 1 唯一のK3指定学習目標</div>
                                    <p>
                                        このセクションはChapter
                                        1で<strong>唯一K3（適用）指定</strong>の学習目標であり、CTFL-AT試験の中でも特に重要です。「知っている」だけでなく「実際に書ける」レベルまで習得する必要があります。
                                    </p>
                                </div>

                                <h3 className="h-sub">ユーザーストーリーとは何か</h3>
                                <p>
                                    ユーザーストーリーは、ソフトウェアの機能に対する要求を、エンドユーザーまたは顧客の視点から簡潔に記述したものです。伝統的な詳細仕様書とは異なり、<strong>「会話（Conversation）」を促すための出発点</strong>として意図的に簡潔に書かれます。
                                </p>

                                <div className="code-tag">FORMAT</div>
                                <div className="code-block">
                                    As a [ユーザーの役割] I want [実現したいこと] So that [得られる価値・理由]
                                </div>

                                <div className="code-tag">EXAMPLE</div>
                                <div className="code-block"><div className="code-line">As a 登録済みの顧客 I want パスワードをリセットする So that</div>
                <div className="code-line">アカウントへのアクセスを再取得できる</div></div>

                                <h3 className="h-sub">3つのC（3 C's）：ユーザーストーリーの本質</h3>
                                <p>
                                    ユーザーストーリーを理解する上で最も重要な概念が、Ron Jeffries
                                    が提唱した<strong>「3つのC」</strong>です。
                                </p>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_12} /></div>

                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>C</th>
                                                <th>説明</th>
                                                <th>テスターの関与</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Card（カード）</strong></td>
                                                <td>
                                                    ストーリーそのものは詳細な仕様書ではなく、後の会話のための「プレースホルダー」
                                                </td>
                                                <td>ストーリーの曖昧さ・欠落を早期に指摘する</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Conversation（会話）</strong></td>
                                                <td>
                                                    ビジネス代表者・開発者・テスターが集まり、要求の詳細、エッジケース、制約について議論する
                                                </td>
                                                <td>
                                                    テスト視点からの質問（境界値・異常系・非機能要件）を提起する
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Confirmation（確認）</strong></td>
                                                <td>
                                                    「このストーリーが完了したとみなされる条件」＝受け入れ基準を明文化する
                                                </td>
                                                <td>受け入れ基準がテスト可能な形で書かれているかをレビューする</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典: シラバスPDF p.13（1.2.2節）
                                </p>

                                <h3 className="h-sub">パワー・オブ・スリー（Power of Three）による協調作成プロセス</h3>
                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_13} /><div className="mermaid-cap">このプロセスにより、テスターは実装が始まる前にストーリーの品質・テスト可能性に影響を与えられる（シフトレフトの実践）</div></div>

                                <h3 className="h-sub">良いユーザーストーリーの条件：INVEST基準</h3>
                                <p>
                                    Bill Wake が提唱した
                                    <strong>INVEST</strong>
                                    は、良いユーザーストーリーを評価するための基準として広く使われています（実務的な業界標準として、上位資格CTAL-TA/CTAL-ATTでも扱われる重要概念のため、本ガイドでは実務補足として併せて解説します）。
                                </p>

                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>頭文字</th>
                                                <th>意味</th>
                                                <th>説明</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>I</strong></td>
                                                <td>Independent（独立性）</td>
                                                <td>他のストーリーへの依存が最小限であること</td>
                                            </tr>
                                            <tr>
                                                <td><strong>N</strong></td>
                                                <td>Negotiable（交渉可能性）</td>
                                                <td>詳細は固定されておらず、チームで議論・調整できること</td>
                                            </tr>
                                            <tr>
                                                <td><strong>V</strong></td>
                                                <td>Valuable（価値）</td>
                                                <td>ビジネスまたはユーザーにとって明確な価値があること</td>
                                            </tr>
                                            <tr>
                                                <td><strong>E</strong></td>
                                                <td>Estimable（見積もり可能性）</td>
                                                <td>チームが規模・工数を見積もれる程度に明確であること</td>
                                            </tr>
                                            <tr>
                                                <td><strong>S</strong></td>
                                                <td>Small（小ささ）</td>
                                                <td>1回のイテレーション内で完了できる十分小さなサイズであること</td>
                                            </tr>
                                            <tr>
                                                <td><strong>T</strong></td>
                                                <td>Testable（テスト可能性）</td>
                                                <td>合格・不合格を判定できる明確な受け入れ基準があること</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="alert amber">
                                    <div className="atitle">⚠️ 試験最重要ポイント</div>
                                    <p>
                                        「T（Testable）」が、CTFL-AT試験で最も重視される観点です。テスターは「この受け入れ基準は主観的すぎないか？」「境界値は明示されているか？」を問う責任があります。
                                    </p>
                                </div>

                                <h3 className="h-sub">受け入れ基準の書き方：Given-When-Then形式</h3>
                                <p>
                                    受け入れ基準は、テスト可能性を高めるために<strong>Gherkin記法（Given-When-Then）</strong>で書かれることが多くあります。
                                </p>

                                <div className="code-tag">GHERKIN</div>
                                <div className="code-block"><div className="code-line"><span className="kw">Feature:</span> パスワードリセット機能</div>
                <div className="code-line"><span className="kw">Scenario:</span> 有効な登録メールアドレスでのパスワードリセット</div>
                <div className="code-line"><span className="kw">Given</span> 顧客が有効な登録メールアドレスを持っている</div>
                <div className="code-line"><span className="kw">When</span></div>
                <div className="code-line">「パスワードを忘れた」リンクからメールアドレスを送信する</div>
                <div className="code-line"><span className="kw">Then</span> リセット用リンクを含むメールが5分以内に送信される</div>
                <div className="code-line"><span className="kw">Scenario:</span> 未登録のメールアドレスでのリセット試行</div>
                <div className="code-line"><span className="kw">Given</span></div>
                <div className="code-line">入力されたメールアドレスがシステムに登録されていない</div>
                <div className="code-line"><span className="kw">When</span></div>
                <div className="code-line">「パスワードを忘れた」リンクからメールアドレスを送信する</div>
                <div className="code-line"><span className="kw">Then</span></div>
                <div className="code-line">情報漏洩を避けるため、登録有無に関わらず同一の確認メッセージが表示される</div></div>

                                <h3 className="h-sub">曖昧なストーリー vs テスト可能なストーリー</h3>
                                <div className="compare-grid">
                                    <div className="compare-box bad">
                                        <div className="clabel">❌ テストしにくい受け入れ基準</div>
                                        <p>
                                            「レスポンスは高速であること」<br />「ユーザーフレンドリーな画面であること」<br />「システムはセキュアであること」
                                        </p>
                                    </div>
                                    <div className="compare-box good">
                                        <div className="clabel">✅ テスト可能な受け入れ基準</div>
                                        <p>
                                            「95パーセンタイルのレスポンスタイムが2秒以内であること」<br />「入力エラー発生時、該当フィールドの横に具体的なエラーメッセージが表示されること」<br />「5回連続でログイン失敗した場合、アカウントが30分間ロックされること」
                                        </p>
                                    </div>
                                </div>

                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典（3C・ユーザーストーリー概念の原典）: シラバスPDF p.13／Jeffries, R.
                                    "Essential XP: Card, Conversation, Confirmation"
                                    <a
                                        href="https://ronjeffries.com/xprog/articles/expcardconversationconfirmation/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >ronjeffries.com</a
                                    ><br />📌 INVEST原典: Wake, B. "INVEST in Good Stories, and SMART Tasks"
                                    <a
                                        href="https://xp123.com/articles/invest-in-good-stories-and-smart-tasks/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >xp123.com</a
                                    >
                                </p>

                                <div className="callout">
                                    <div className="ctitle">
                                        テスターの実務的な貢献ポイント（K3適用として押さえるべきこと）
                                    </div>
                                    <ul className="checklist">
                                        <li>
                                            ストーリー作成会議に必ず参加し、曖昧な表現に対して「テストできますか？」と問いかける
                                        </li>
                                        <li>
                                            正常系だけでなく異常系・境界値・非機能要件（性能・セキュリティ等）の観点をストーリーに反映させる
                                        </li>
                                        <li>
                                            受け入れ基準を、可能であればGiven-When-Then形式など構造化された記法で書く
                                        </li>
                                        <li>
                                            受け入れ基準がそのまま自動化された受け入れテスト（ATDD）の基礎になるよう意識する
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section id="s123" className="divider-top">
                                <div className="section-head">
                                    <span className="chapter-badge k2">1.2.3 <span className="klevel">K2 理解</span></span>
                                    <h2 className="h-section">レトロスペクティブ（振り返り）</h2>
                                    <p className="lead">
                                        学習目標
                                        FA-1.2.3：レトロスペクティブがアジャイルプロジェクトにおけるプロセス改善のメカニズムとしてどのように使われるかを理解できる
                                    </p>
                                </div>

                                <h3 className="h-sub">レトロスペクティブとは何か</h3>
                                <p>
                                    <strong>レトロスペクティブ（Retrospective）</strong
                                    >は、各イテレーション（スプリント）の終わりに実施される、チームが自らの<strong>作業プロセス</strong>（プロダクトそのものではなく、プロダクトを作る「やり方」）を振り返り、継続的改善のためのアクションを特定する会議です。アジャイルマニフェストの12番目の原則「チームは定期的に振り返り、より効果的になるよう行動を調整する」を実践する場そのものです。
                                </p>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_14} /></div>

                                <h3 className="h-sub">
                                    レトロスペクティブとスプリントレビューの違い（試験で混同しやすいポイント）
                                </h3>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>観点</th>
                                                <th>スプリントレビュー</th>
                                                <th>レトロスペクティブ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>焦点</strong></td>
                                                <td>プロダクト（作られたもの）</td>
                                                <td>プロセス（作り方）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>主な参加者</strong></td>
                                                <td>開発チーム＋ステークホルダー（顧客含む）</td>
                                                <td>開発チームのみ（内部向け）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>目的</strong></td>
                                                <td>インクリメントを検査し、フィードバックを得る</td>
                                                <td>チームの働き方を改善する</td>
                                            </tr>
                                            <tr>
                                                <td><strong>成果物</strong></td>
                                                <td>プロダクトバックログの更新</td>
                                                <td>改善アクションアイテム</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="h-sub">
                                    レトロスペクティブがプロセス改善に貢献する仕組み（K2理解のポイント）
                                </h3>
                                <div className="step-list">
                                    <li>
                                        <div className="stitle">安全な場の提供</div>
                                        <div className="sdesc">
                                            チームメンバーが批判を恐れずに問題点を共有できる、心理的安全性のある場を意図的に設計する
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">具体性のあるフィードバック</div>
                                        <div className="sdesc">
                                            抽象的な「良かった／悪かった」ではなく、具体的な出来事に基づいた振り返りを行う
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">アクションアイテムへの変換</div>
                                        <div className="sdesc">
                                            単なる不満の共有で終わらせず、必ず「次に何を変えるか」という実行可能なアクションに落とし込む
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">繰り返しによる漸進的改善</div>
                                        <div className="sdesc">
                                            1回のレトロスペクティブで全てを解決しようとせず、イテレーションごとに小さな改善を積み重ねる
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">テストプロセスの継続的改善</div>
                                        <div className="sdesc">
                                            テスターにとっては、フレイキーテストの削減、テスト自動化率の向上、欠陥の早期発見率の改善など、テスト活動そのものを継続的に見直す重要な機会となる
                                        </div>
                                    </li>
                                </div>

                                <h3 className="h-sub">レトロスペクティブの代表的なフォーマット例</h3>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>フォーマット</th>
                                                <th>内容</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>KPT</strong>（Keep / Problem / Try）</td>
                                                <td>継続すべきこと・問題点・次に試すことの3列で整理</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Start / Stop / Continue</strong></td>
                                                <td>始めるべきこと・やめるべきこと・続けるべきことを整理</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>4Ls</strong>（Liked / Learned / Lacked / Longed for）
                                                </td>
                                                <td>
                                                    好きだったこと・学んだこと・足りなかったこと・望んでいたことを整理
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Sailboat（帆船）</strong></td>
                                                <td>
                                                    帆船の比喩で、追い風（推進要因）・錨（阻害要因）・岩（リスク）・島（ゴール）を可視化
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典: シラバスPDF p.13-14（1.2.3節）／Scrum Guide 2020:
                                    <a
                                        href="https://scrumguides.org/scrum-guide.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >scrumguides.org</a
                                    >
                                </p>

                                <div className="callout">
                                    <div className="ctitle">テスターとしての実務Tips</div>
                                    <p>
                                        レトロスペクティブでは、テストに関する具体的なメトリクス（例：「今スプリントで検出された欠陥の何%が本番流出したか」「テスト自動化のカバレッジはどう変化したか」）を持ち込むことで、感覚的な議論ではなくデータに基づいた改善提案が可能になります。
                                    </p>
                                </div>
                            </section>

                            <section id="s124" className="divider-top">
                                <div className="section-head">
                                    <span className="chapter-badge k2">1.2.4 <span className="klevel">K2 理解</span></span>
                                    <h2 className="h-section">継続的インテグレーション（CI）</h2>
                                    <p className="lead">
                                        学習目標 FA-1.2.4：継続的インテグレーションの使用と目的を理解できる
                                    </p>
                                </div>

                                <h3 className="h-sub">継続的インテグレーションとは何か</h3>
                                <p>
                                    <strong>継続的インテグレーション（Continuous Integration: CI）</strong
                                    >とは、開発者が自分のコード変更を頻繁に（少なくとも1日に1回以上）共有のメインリポジトリに統合し、その都度<strong>自動ビルドと自動テストを実行する</strong>開発プラクティスです。XPの実践プラクティスの一つとして生まれ、現在ではほぼ全てのアジャイル開発（Scrum・Kanban問わず）で採用されています。
                                </p>

                                <h3 className="h-sub">なぜCIが必要なのか：統合の遅延がもたらす問題</h3>
                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_15} /></div>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_16} /></div>

                                <h3 className="h-sub">CIパイプラインの典型的な流れ</h3>
                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_17} /></div>

                                <h3 className="h-sub">CIの中核的な原則（試験頻出）</h3>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>原則</th>
                                                <th>説明</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>単一のソースリポジトリを使用する</strong></td>
                                                <td>コードの一元管理により、統合の混乱を防ぐ</td>
                                            </tr>
                                            <tr>
                                                <td><strong>ビルドを自動化する</strong></td>
                                                <td>手動ビルドによるヒューマンエラーを排除する</td>
                                            </tr>
                                            <tr>
                                                <td><strong>ビルドにテストを含める</strong></td>
                                                <td>
                                                    ビルドが「通る」ことだけでなく「正しく動く」ことも自動確認する
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>全員が毎日メインラインにコミットする</strong></td>
                                                <td>統合の粒度を小さく保ち、コンフリクトを最小化する</td>
                                            </tr>
                                            <tr>
                                                <td><strong>ビルドを高速に保つ</strong></td>
                                                <td>フィードバックが遅いとCIの価値が失われる（目安：10分以内）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>本番環境に近いクローンでテストする</strong></td>
                                                <td>環境差異による「動くはずが動かない」問題を防ぐ</td>
                                            </tr>
                                            <tr>
                                                <td><strong>誰もが最新のビルド結果を見られるようにする</strong></td>
                                                <td>透明性の確保</td>
                                            </tr>
                                            <tr>
                                                <td><strong>壊れたビルドは即座に修正する</strong></td>
                                                <td>ビルドが壊れたままの状態を放置しない文化</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典: シラバスPDF p.14（1.2.4節）
                                </p>

                                <h3 className="h-sub">CIの利点</h3>
                                <ul className="checklist">
                                    <li>
                                        <strong>早期の欠陥検出</strong
                                        >：統合の問題やリグレッションを、発生直後の小さい変更差分の中で発見できるため、原因特定が容易
                                    </li>
                                    <li>
                                        <strong>「動くソフトウェア」の常時維持</strong
                                        >：いつでもデモ・リリース可能な状態に近いビルドを保てる
                                    </li>
                                    <li>
                                        <strong>手動作業の削減</strong
                                        >：ビルド・テスト・デプロイの手作業を自動化し、人的ミスと工数を削減
                                    </li>
                                    <li>
                                        <strong>チームの信頼性向上</strong
                                        >：「自分のマシンでは動く」問題を排除し、統合済みコードへの信頼を高める
                                    </li>
                                    <li>
                                        <strong>1.1.3の実現基盤</strong
                                        >：CIはコードレベルでのフィードバックループを技術的に支える仕組み
                                    </li>
                                </ul>

                                <h3 className="h-sub">CIにおけるテスターの関わり方</h3>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>活動</th>
                                                <th>テスターの役割</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>テスト自動化スイートの設計</td>
                                                <td>
                                                    どのテストをCIパイプラインのどの段階（コミット時／夜間バッチ等）で実行するか設計に関与
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>フレイキーテストの管理</td>
                                                <td>
                                                    CIの信頼性を損なう不安定なテストを特定し、修正または隔離する
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>テストピラミッドの意識</td>
                                                <td>
                                                    ユニットテスト（多い・速い）を土台に、統合・E2Eテスト（少ない・遅い）を積み上げる構成を推奨する
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品質ゲートの定義</td>
                                                <td>
                                                    カバレッジ率や重大欠陥ゼロなど、CIパイプラインを通過するための基準策定に関与
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 CI/CDの実務的な補足参考:
                                    <a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer"
                                        >GitHub Actions 公式ドキュメント</a
                                    >
                                </p>

                                <div className="callout">
                                    <div className="ctitle">K2理解として重要な一文（シラバスの趣旨）</div>
                                    <p>
                                        CIは単なる「自動化ツールの導入」ではなく、<strong>「頻繁に統合し、常にフィードバックを得る」というアジャイルの価値観そのものを技術的に実装したプラクティス</strong>です。1.1.3のフィードバックの概念、1.1.1のアジャイルマニフェストの「動くソフトウェア」の価値観と、CIは直接結びついています。
                                    </p>
                                </div>
                            </section>

                            <section id="s125" className="divider-top">
                                <div className="section-head">
                                    <span className="chapter-badge k1">1.2.5 <span className="klevel">K1 記憶</span></span>
                                    <h2 className="h-section">リリース計画とイテレーション計画</h2>
                                    <p className="lead">
                                        学習目標
                                        FA-1.2.5：イテレーション計画とリリース計画の違いを知り、テスターがそれぞれの活動でどのように価値を付加するかを知っている
                                    </p>
                                </div>

                                <h3 className="h-sub">2つの計画レベルの全体像</h3>
                                <p>
                                    アジャイルプロジェクトの計画は、粒度の異なる<strong>2つの階層</strong>で行われます。
                                </p>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_18} /></div>

                                <h3 className="h-sub">リリース計画（Release Planning）</h3>
                                <p>
                                    <strong>リリース計画</strong
                                    >は、プロダクトの大きな方向性を決める、より長期的な計画活動です。複数のイテレーションにまたがる範囲で「何を、いつまでに、どの順序でリリースするか」を決定します。
                                </p>

                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>検討項目</th>
                                                <th>内容</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>スコープ</td>
                                                <td>このリリースに含める機能・含めない機能</td>
                                            </tr>
                                            <tr>
                                                <td>期間・マイルストーン</td>
                                                <td>リリース予定日、主要な中間目標</td>
                                            </tr>
                                            <tr>
                                                <td>優先順位</td>
                                                <td>ビジネス価値・リスクに基づく機能の順序付け</td>
                                            </tr>
                                            <tr>
                                                <td>リソース</td>
                                                <td>必要なチーム構成・スキルセット</td>
                                            </tr>
                                            <tr>
                                                <td>主要リスク</td>
                                                <td>ビジネスリスク・技術リスク・品質リスクの識別</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h4 className="h-minor">リリース計画におけるテスターの価値付加</h4>
                                <ul className="checklist">
                                    <li>
                                        各機能領域の<strong>品質リスクを識別</strong>し、テスト工数の重点配分に関する情報を提供する
                                    </li>
                                    <li>
                                        過去の欠陥データや複雑度から、<strong>テストが多くの時間を要する領域</strong>を早期に警告する
                                    </li>
                                    <li>
                                        必要なテスト環境・テストデータ・テストツールの準備をリリース単位で見積もる
                                    </li>
                                    <li>
                                        非機能要件（性能・セキュリティ・互換性など）がリリース計画に含まれているかを確認する
                                    </li>
                                </ul>

                                <h3 className="h-sub">イテレーション計画（Iteration Planning）</h3>
                                <p>
                                    <strong>イテレーション計画</strong
                                    >（Scrumでは「スプリントプランニング」に相当）は、直近の1回のイテレーション（通常1〜4週間）で「具体的に何を、どのように完成させるか」を詳細に計画する、短期的な活動です。
                                </p>

                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>検討項目</th>
                                                <th>内容</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>対象ストーリーの選定</td>
                                                <td>
                                                    プロダクトバックログから、このイテレーションで着手するストーリーを選ぶ
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>タスクへの分解</td>
                                                <td>
                                                    各ストーリーを実装可能な単位のタスクに分解する（テストタスクを含む）
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>見積もり</td>
                                                <td>チームのキャパシティに対して現実的な作業量かを確認する</td>
                                            </tr>
                                            <tr>
                                                <td>受け入れ基準の最終確認</td>
                                                <td>ストーリーが「テスト可能」な状態になっているかを再確認する</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h4 className="h-minor">イテレーション計画におけるテスターの価値付加</h4>
                                <ul className="checklist">
                                    <li>
                                        各ストーリーの<strong>テスト工数を見積もり</strong>、タスク分解に反映する
                                    </li>
                                    <li>
                                        ストーリーの受け入れ基準の<strong>曖昧さ・テスト不可能な記述</strong>をこの場で指摘し修正を促す（1.2.2との連携）
                                    </li>
                                    <li>
                                        必要なテストデータ・テスト環境がイテレーション開始までに準備可能かを確認する
                                    </li>
                                    <li>テスト自動化タスクを明示的にイテレーション計画に含めるよう働きかける</li>
                                </ul>

                                <h3 className="h-sub">リリース計画 vs イテレーション計画：比較表（試験頻出）</h3>
                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>観点</th>
                                                <th>リリース計画</th>
                                                <th>イテレーション計画</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>時間軸</strong></td>
                                                <td>数ヶ月〜数四半期</td>
                                                <td>1〜4週間（1イテレーション分）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>粒度</strong></td>
                                                <td>粗い（機能・エピック単位）</td>
                                                <td>細かい（タスク単位）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>主な関与者</strong></td>
                                                <td>プロダクトオーナー・ステークホルダー・チームリード</td>
                                                <td>開発チーム全体（テスター含む）</td>
                                            </tr>
                                            <tr>
                                                <td><strong>見直し頻度</strong></td>
                                                <td>リリースごと、または定期的に見直し</td>
                                                <td>イテレーションごとに毎回実施</td>
                                            </tr>
                                            <tr>
                                                <td><strong>テスターの主な貢献</strong></td>
                                                <td>リスクベースでのテスト工数配分・非機能要件の確認</td>
                                                <td>ストーリー単位のテスト可能性確認・テスト工数見積もり</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典: シラバスPDF p.14-15（1.2.5節）
                                </p>

                                <h3 className="h-sub">計画階層とテスト活動の関係（まとめ図）</h3>
                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_19} /></div>

                                <div className="callout">
                                    <div className="ctitle">K1理解として押さえるべき最重要ポイント</div>
                                    <p>
                                        「イテレーション計画とリリース計画は<strong>時間軸の粒度が異なる、階層的な計画活動</strong>であり、テスターはどちらのレベルにおいても、単なる『後工程の実行者』ではなく『計画そのものに価値を加える参加者』である」——これがシラバスが伝えたい核心的なメッセージです。
                                    </p>
                                </div>
                            </section>

                            <section id="lo-table" className="divider-top">
                                <h2 className="h-section">学習目標（Learning Objectives）一覧とK-Level対応表</h2>
                                <p className="lead">
                                    Chapter
                                    1の全学習目標を、シラバス番号・K-Level・対応セクションとともに一覧化します。試験直前の最終確認に活用してください。
                                </p>

                                <div className="table-wrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>学習目標ID</th>
                                                <th>K-Level</th>
                                                <th>内容</th>
                                                <th>対応セクション</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><code>FA-1.1.1</code></td>
                                                <td>K1</td>
                                                <td>
                                                    アジャイルマニフェストに基づくアジャイルソフトウェア開発の基本概念を想起できる
                                                </td>
                                                <td>1.1.1</td>
                                            </tr>
                                            <tr>
                                                <td><code>FA-1.1.2</code></td>
                                                <td>K2</td>
                                                <td>ホールチームアプローチの利点を理解できる</td>
                                                <td>1.1.2</td>
                                            </tr>
                                            <tr>
                                                <td><code>FA-1.1.3</code></td>
                                                <td>K2</td>
                                                <td>早期かつ頻繁なフィードバックの利点を理解できる</td>
                                                <td>1.1.3</td>
                                            </tr>
                                            <tr>
                                                <td><code>FA-1.2.1</code></td>
                                                <td>K1</td>
                                                <td>アジャイルソフトウェア開発アプローチを想起できる</td>
                                                <td>1.2.1</td>
                                            </tr>
                                            <tr>
                                                <td><code>FA-1.2.2</code></td>
                                                <td><strong>K3</strong></td>
                                                <td>
                                                    開発者・ビジネス代表者と協調して、テスト可能なユーザーストーリーを記述できる
                                                </td>
                                                <td>1.2.2</td>
                                            </tr>
                                            <tr>
                                                <td><code>FA-1.2.3</code></td>
                                                <td>K2</td>
                                                <td>
                                                    レトロスペクティブがプロセス改善のメカニズムとしてどのように使われるかを理解できる
                                                </td>
                                                <td>1.2.3</td>
                                            </tr>
                                            <tr>
                                                <td><code>FA-1.2.4</code></td>
                                                <td>K2</td>
                                                <td>継続的インテグレーションの使用と目的を理解できる</td>
                                                <td>1.2.4</td>
                                            </tr>
                                            <tr>
                                                <td><code>FA-1.2.5</code></td>
                                                <td>K1</td>
                                                <td>
                                                    イテレーション計画とリリース計画の違いを知り、テスターの価値付加を知っている
                                                </td>
                                                <td>1.2.5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p
                                    style={{fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                >
                                    📌 出典: シラバスPDF p.8-9（Learning Objectives for Agile Software Development）
                                </p>

                                <div className="callout">
                                    <div className="ctitle">試験対策の優先順位付け</div>
                                    <p>
                                        K3指定のFA-1.2.2（ユーザーストーリー作成）は最も出題の応用度が高く、シナリオ問題として出題される可能性が高い項目です。次いでK2指定の4項目（ホールチーム／フィードバック／レトロスペクティブ／CI）は概念説明・比較問題として頻出します。K1指定の3項目（マニフェスト／各種アプローチ／計画の違い）は用語・分類の正確な記憶が問われます。
                                    </p>
                                </div>
                            </section>

                            <section id="checklist" className="divider-top">
                                <h2 className="h-section">章末チェックリスト・重要暗記事項</h2>
                                <p className="lead">
                                    学習の総仕上げとして、以下のチェックリストで理解度を自己診断してください。
                                </p>

                                <h3 className="h-sub">✅ 1.1 アジャイルソフトウェア開発の基礎</h3>
                                <ul className="checklist">
                                    <li>
                                        アジャイルマニフェストの<strong>4つの価値観</strong>を、左右セットで正確に言える
                                    </li>
                                    <li>
                                        「右側の項目に価値がない」という誤解を説明できる（相対的優先順位であることを理解している）
                                    </li>
                                    <li><strong>12の原則</strong>を、少なくとも6つ以上、内容を要約して言える</li>
                                    <li>
                                        ホールチームアプローチにおける<strong>テスター・開発者・ビジネス代表者</strong>の関係性を図で説明できる
                                    </li>
                                    <li>ホールチームアプローチの利点を3つ以上挙げられる</li>
                                    <li>
                                        シーケンシャル開発とアジャイル開発の<strong>フィードバックタイミングの違い</strong>を説明できる
                                    </li>
                                    <li>
                                        早期・頻繁なフィードバックが得られる4つのレベル（コード／機能／プロダクト／プロセス）を説明できる
                                    </li>
                                </ul>

                                <h3 className="h-sub">✅ 1.2 アジャイルアプローチの諸側面</h3>
                                <ul className="checklist">
                                    <li>XPの<strong>5つの価値観</strong>を全て言える</li>
                                    <li>
                                        XPの主要プラクティス（TDD・ペアプログラミング・CI・リファクタリング等）を5つ以上挙げられる
                                    </li>
                                    <li>Scrumの<strong>3つの役割</strong>とその責任を説明できる</li>
                                    <li>
                                        Scrumの<strong>3つの成果物</strong>（プロダクトバックログ／スプリントバックログ／インクリメント）を説明できる
                                    </li>
                                    <li>
                                        「<strong>Scrumはテスト技法を規定しない</strong>」という重要ポイントを説明できる
                                    </li>
                                    <li>Kanbanの<strong>WIP制限</strong>の目的を説明できる</li>
                                    <li>Kanbanの6つの一般プラクティスを挙げられる</li>
                                    <li>XP・Scrum・Kanbanの違いを比較表なしで口頭説明できる</li>
                                    <li>
                                        ユーザーストーリーの<strong>3つのC</strong>（Card / Conversation /
                                        Confirmation）を説明できる
                                    </li>
                                    <li><strong>パワー・オブ・スリー</strong>の概念とテスターの役割を説明できる</li>
                                    <li>テスト可能な受け入れ基準の書き方（Given-When-Then等）を実際に書ける</li>
                                    <li>
                                        レトロスペクティブと<strong>スプリントレビューの違い</strong>を説明できる
                                    </li>
                                    <li>レトロスペクティブの代表的フォーマット（KPT等）を1つ以上言える</li>
                                    <li>CIの<strong>中核的な原則</strong>を3つ以上挙げられる</li>
                                    <li>
                                        CIパイプラインの典型的な流れ（コミット・ビルド・テスト・レポート生成の順序）を図で説明できる
                                    </li>
                                    <li>
                                        <strong>リリース計画とイテレーション計画の違い</strong
                                        >（時間軸・粒度・主な関与者）を表で説明できる
                                    </li>
                                    <li>各計画レベルにおけるテスターの価値付加を、それぞれ2つ以上挙げられる</li>
                                </ul>
                            </section>

                            <section id="exam-q" className="divider-top">
                                <h2 className="h-section">演習問題（オリジナル作成・K1〜K3）</h2>
                                <div className="alert green">
                                    <div className="atitle">ご注意</div>
                                    <p>
                                        以下はシラバスの学習目標に基づいて本ガイドが独自に作成したオリジナル問題です。実際の試験問題そのものではありませんが、理解度確認に活用してください。
                                    </p>
                                </div>

                                <div className="exam-grid">
                                    <div className="qcard">
                                        <div className="qtag">問1 · K1 · 1.1.1</div>
                                        <div className="qtext">
                                            アジャイルマニフェストにおいて、「動くソフトウェア」と対比される右側の価値観として正しいものはどれか。
                                        </div>
                                        <ul className="qopts">
                                            <li>A) プロセスやツール</li>
                                            <li>B) 包括的なドキュメント</li>
                                            <li>C) 契約交渉</li>
                                            <li>D) 計画に従うこと</li>
                                        </ul>
                                        <details>
                                            <summary>📌 解答を見る</summary>
                                            <div className="answer">
                                                <strong>正解: B（包括的なドキュメント）</strong
                                                ><br />4つの対比：個人と対話 vs プロセスやツール／動くソフトウェア
                                                vs 包括的なドキュメント／顧客との協調 vs 契約交渉／変化への対応 vs
                                                計画に従うこと
                                            </div>
                                        </details>
                                    </div>

                                    <div className="qcard">
                                        <div className="qtag">問2 · K2 · 1.1.2</div>
                                        <div className="qtext">
                                            ホールチームアプローチに関する記述として、最も適切なものはどれか。
                                        </div>
                                        <ul className="qopts">
                                            <li>A) テスターの専門的なテストスキルは不要になる</li>
                                            <li>B) 開発チームとテストチームを明確に分離し、責任範囲を独立させる</li>
                                            <li>
                                                C)
                                                品質はチーム全員の共有された責任であり、テスターは開発の初期段階から関与する
                                            </li>
                                            <li>D) ビジネス代表者はテストプロセスに関与すべきではない</li>
                                        </ul>
                                        <details>
                                            <summary>📌 解答を見る</summary>
                                            <div className="answer">
                                                <strong>正解: C</strong
                                                ><br />テスターの専門スキルは不要にならず（A誤り）、チームを分離するものでもなく（B誤り）、ビジネス代表者も積極的に関与します（D誤り）。
                                            </div>
                                        </details>
                                    </div>

                                    <div className="qcard">
                                        <div className="qtag">問3 · K2 · 1.2.1</div>
                                        <div className="qtext">Scrumに関する記述として正しいものはどれか。</div>
                                        <ul className="qopts">
                                            <li>
                                                A)
                                                Scrumはテストファーストプログラミングなどの特定の技術プラクティスを規定している
                                            </li>
                                            <li>
                                                B)
                                                Scrumはスプリント内でどのようにテストを行うべきかの具体的なガイダンスを提供する
                                            </li>
                                            <li>
                                                C)
                                                Scrumは特定のソフトウェア開発技法を規定せず、スプリント内でのテスト方法についてもガイダンスを提供しない
                                            </li>
                                            <li>D) ScrumはXPと同一のフレームワークである</li>
                                        </ul>
                                        <details>
                                            <summary>📌 解答を見る</summary>
                                            <div className="answer">
                                                <strong>正解: C</strong
                                                ><br />シラバスは「Scrum（XPとは対照的に）は特定のソフトウェア開発技法を規定しない。さらに、スプリント内でのテスト方法についてもガイダンスを提供しない」と明記しています。
                                            </div>
                                        </details>
                                    </div>

                                    <div className="qcard">
                                        <div className="qtag">問4 · K3 · 1.2.2</div>
                                        <div className="qtext">
                                            以下の受け入れ基準のうち、「テスト可能性（Testable）」の観点から最も適切なものはどれか。
                                        </div>
                                        <ul className="qopts">
                                            <li>A) 「システムは使いやすいこと」</li>
                                            <li>B) 「レスポンスは十分速いこと」</li>
                                            <li>
                                                C)
                                                「5回連続でログインに失敗した場合、アカウントが30分間ロックされること」
                                            </li>
                                            <li>D) 「セキュリティが確保されていること」</li>
                                        </ul>
                                        <details>
                                            <summary>📌 解答を見る</summary>
                                            <div className="answer">
                                                <strong>正解: C</strong
                                                ><br />C以外は主観的・曖昧な表現で合格／不合格を客観的に判定できません。Cは具体的な数値を含み明確にテスト可能で、INVEST基準の「T」を満たす典型例です。
                                            </div>
                                        </details>
                                    </div>

                                    <div className="qcard">
                                        <div className="qtag">問5 · K2 · 1.2.3</div>
                                        <div className="qtext">
                                            レトロスペクティブとスプリントレビューの違いに関する記述として正しいものはどれか。
                                        </div>
                                        <ul className="qopts">
                                            <li>A) 両者とも同じ目的・参加者で実施される</li>
                                            <li>
                                                B)
                                                レトロスペクティブはプロダクトを検査し、スプリントレビューはプロセスを改善する
                                            </li>
                                            <li>
                                                C)
                                                スプリントレビューはプロダクトに焦点を当て、レトロスペクティブはプロセスに焦点を当てる
                                            </li>
                                            <li>D) レトロスペクティブには通常、顧客・ステークホルダーが参加する</li>
                                        </ul>
                                        <details>
                                            <summary>📌 解答を見る</summary>
                                            <div className="answer">
                                                <strong>正解: C</strong
                                                ><br />スプリントレビューはインクリメント（プロダクト）を検査しフィードバックを得る場（顧客参加）、レトロスペクティブはチームの作業プロセスを振り返る内部向けの場です。
                                            </div>
                                        </details>
                                    </div>

                                    <div className="qcard">
                                        <div className="qtag">問6 · K2 · 1.2.4</div>
                                        <div className="qtext">
                                            継続的インテグレーション（CI）の中核的な原則として適切でないものはどれか。
                                        </div>
                                        <ul className="qopts">
                                            <li>A) 単一のソースリポジトリを使用する</li>
                                            <li>B) ビルドを自動化し、テストも含める</li>
                                            <li>
                                                C) 統合作業は、コンフリクトを避けるため月に1回程度にまとめて行う
                                            </li>
                                            <li>D) 壊れたビルドは即座に修正する</li>
                                        </ul>
                                        <details>
                                            <summary>📌 解答を見る</summary>
                                            <div className="answer">
                                                <strong>正解: C</strong
                                                ><br />CIの本質は「頻繁な統合」（少なくとも1日1回以上）です。月次にまとめることはコンフリクトの増大やフィードバックの遅れを招き、CIの原則に反します。
                                            </div>
                                        </details>
                                    </div>

                                    <div className="qcard">
                                        <div className="qtag">問7 · K1 · 1.2.5</div>
                                        <div className="qtext">
                                            リリース計画とイテレーション計画の違いに関する記述として正しいものはどれか。
                                        </div>
                                        <ul className="qopts">
                                            <li>A) リリース計画はイテレーション計画よりも短い時間軸で実施される</li>
                                            <li>B) イテレーション計画は数四半期単位の粗い粒度で実施される</li>
                                            <li>
                                                C)
                                                リリース計画はより長期的・粗い粒度であり、イテレーション計画はより短期的・詳細な粒度である
                                            </li>
                                            <li>
                                                D)
                                                テスターはイテレーション計画にのみ関与し、リリース計画には関与しない
                                            </li>
                                        </ul>
                                        <details>
                                            <summary>📌 解答を見る</summary>
                                            <div className="answer">
                                                <strong>正解: C</strong
                                                ><br />リリース計画は数ヶ月〜数四半期単位の長期的・粗い粒度、イテレーション計画は1〜4週間単位の短期的・詳細な計画です。テスターはどちらにも関与します（D誤り）。
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </section>

                            <section id="practical-diff" className="divider-top">
                                <h2 className="h-section">2025年時点の実務との差分・補足</h2>
                                <p className="lead">
                                    CTFL-ATシラバス（2014年版）は現行の最新公式シラバスですが、10年以上前に発行されたため、いくつかの用語・実務慣行は2025年時点の標準と差異があります。実務でアジャイルチームに参画する際の参考として整理します。
                                </p>

                                <div className="trend-grid">
                                    <div className="trend-card">
                                        <div className="ttag">Scrum用語</div>
                                        <h4>Development Team → Developers</h4>
                                        <p>
                                            シラバスの「Development
                                            Team」「チームリーダーは存在しない」という記述に対し、現行Scrum Guide
                                            2020では「Developers」に用語整理され、「self-organizing」から「self-managing（自己管理型）」へ表現が更新されている。
                                        </p>
                                    </div>
                                    <div className="trend-card">
                                        <div className="ttag">開発手法の多様化</div>
                                        <h4>Scrumban／SAFe／LeSSの普及</h4>
                                        <p>
                                            XP・Scrum・Kanbanを「代表的アプローチ」として紹介するが、実務ではこれらを組み合わせた「Scrumban」、大規模化フレームワークの「SAFe」「LeSS」なども広く普及している。
                                        </p>
                                    </div>
                                    <div className="trend-card">
                                        <div className="ttag">CI/CD の拡張</div>
                                        <h4>CIからCI/CDパイプラインへ</h4>
                                        <p>
                                            CI単体でなく、CD（継続的デリバリー／継続的デプロイメント）まで含めた「CI/CDパイプライン」がクラウドネイティブな標準として定着している（GitHub
                                            Actions・GitLab CI等）。
                                        </p>
                                    </div>
                                    <div className="trend-card">
                                        <div className="ttag">受け入れ基準の記法</div>
                                        <h4>ATDD・BDDツールの浸透</h4>
                                        <p>
                                            ATDD・BDDの実務浸透により、Given-When-Then（Gherkin）形式やpytest-bdd・Cucumber等のツールでの自動化連携が一般化している。
                                        </p>
                                    </div>
                                </div>

                                <div className="callout">
                                    <div className="ctitle">学習者へのアドバイス</div>
                                    <p>
                                        試験対策としてはシラバスの記述（2014年版）に忠実に解答することが必須ですが、実務者として現場に立つ際は、必ず現行のScrum
                                        Guide
                                        2020や各種公式ドキュメントで最新情報を確認する習慣を持ってください。ISTQBの上位資格（CTAL-ATT、CTAL-AT
                                        v2.0）では、より現代的なアジャイル実務（サービス仮想化、CI/CT/CD、DevOpsとの統合等）が扱われています。
                                    </p>
                                </div>
                            </section>

                            <section id="refs" className="divider-top">
                                <h2 className="h-section">参照URL一覧（全件）</h2>
                                <p className="lead">
                                    本ガイドの作成にあたり参照した、全ての情報源のURLを分野別に整理しています。
                                </p>

                                <div className="ref-cat"><h4>🏛️ ISTQB® 公式リソース</h4></div>
                                <div className="ref-grid">
                                    <div className="rcard">
                                        <span className="rname">CTFL-AT 公式認定ページ（試験概要・サンセット情報）</span
                                        ><a
                                            href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >istqb.org/certifications/.../ctfl-at</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname"
                                            >CTFL-AT 公式シラバスPDF（v1.0／2014年版・現行最新）</span
                                        ><a
                                            href="https://istqb.org/wp-content/uploads/2024/11/ISTQB-CTFL-AT_Syllabus_v1.0.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >istqb.org/wp-content/.../Syllabus_v1.0.pdf</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">CTFL v4.0 認定ページ（アジャイル概念の統合先）</span
                                        ><a
                                            href="https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >istqb.org/.../ctfl-v4-0</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">ISTQB® グロッサリー</span
                                        ><a
                                            href="https://glossary.istqb.org/en_US/search?term="
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >glossary.istqb.org</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">試験プロバイダー検索</span
                                        ><a href="https://istqb.org/exam-providers/" target="_blank" rel="noopener noreferrer"
                                            >istqb.org/exam-providers</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">研修プロバイダー検索</span
                                        ><a
                                            href="https://istqb.org/training-providers/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >istqb.org/training-providers</a
                                        >
                                    </div>
                                </div>

                                <div className="ref-cat"><h4>📖 アジャイルマニフェスト・原則（一次情報源）</h4></div>
                                <div className="ref-grid">
                                    <div className="rcard">
                                        <span className="rname">アジャイルソフトウェア開発宣言（公式）</span
                                        ><a href="https://agilemanifesto.org/" target="_blank" rel="noopener noreferrer"
                                            >agilemanifesto.org</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">12の原則（公式）</span
                                        ><a
                                            href="https://agilemanifesto.org/principles.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >agilemanifesto.org/principles.html</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">Agile Alliance：12原則の解説</span
                                        ><a
                                            href="https://agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >agilealliance.org/agile101/...</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">Atlassian：アジャイルマニフェスト解説</span
                                        ><a
                                            href="https://www.atlassian.com/agile/manifesto"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >atlassian.com/agile/manifesto</a
                                        >
                                    </div>
                                </div>

                                <div className="ref-cat"><h4>🔄 Scrum 公式リソース</h4></div>
                                <div className="ref-grid">
                                    <div className="rcard">
                                        <span className="rname">Scrum Guide 2020（現行公式・英語版）</span
                                        ><a
                                            href="https://scrumguides.org/scrum-guide.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >scrumguides.org/scrum-guide.html</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">Scrum Guide 2020 PDF（英語）</span
                                        ><a
                                            href="https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >scrumguides.org/docs/.../2020-Scrum-Guide-US.pdf</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">Scrum Guideの改訂履歴</span
                                        ><a
                                            href="https://scrumguides.org/revisions.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >scrumguides.org/revisions.html</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">Scrum.org：スプリントバックログとは</span
                                        ><a
                                            href="https://www.scrum.org/resources/what-is-a-sprint-backlog"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >scrum.org/resources/what-is-a-sprint-backlog</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">Scrum.org：Definition of Doneとは</span
                                        ><a
                                            href="https://www.scrum.org/resources/what-definition-done"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >scrum.org/resources/what-definition-done</a
                                        >
                                    </div>
                                </div>

                                <div className="ref-cat"><h4>📋 Kanban 公式リソース</h4></div>
                                <div className="ref-grid">
                                    <div className="rcard">
                                        <span className="rname">Kanban University：公式Kanbanガイド</span
                                        ><a
                                            href="https://kanban.university/kanban-guide/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >kanban.university/kanban-guide</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">Kanban University：公式ガイドPDF</span
                                        ><a
                                            href="https://kanban.university/wp-content/uploads/2023/04/The-Official-Kanban-Guide_A4.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >kanban.university/.../Kanban-Guide_A4.pdf</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">Kanban Method 用語集（公式）</span
                                        ><a
                                            href="https://kanban.university/wp-content/uploads/2023/04/The-Official-Kanban-Guide_Glossary.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >kanban.university/.../Glossary.pdf</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">Atlassian：KanbanのWIP制限の実践</span
                                        ><a
                                            href="https://www.atlassian.com/agile/kanban/wip-limits"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >atlassian.com/agile/kanban/wip-limits</a
                                        >
                                    </div>
                                </div>

                                <div className="ref-cat"><h4>🛠️ エクストリーム・プログラミング（XP）</h4></div>
                                <div className="ref-grid">
                                    <div className="rcard">
                                        <span className="rname">Extreme Programming 公式解説サイト</span
                                        ><a href="http://www.extremeprogramming.org/" target="_blank" rel="noopener noreferrer"
                                            >extremeprogramming.org</a
                                        >
                                    </div>
                                </div>

                                <div className="ref-cat"><h4>📝 ユーザーストーリー・INVEST・3C</h4></div>
                                <div className="ref-grid">
                                    <div className="rcard">
                                        <span className="rname"
                                            >Ron Jeffries：Card, Conversation, Confirmation（3Cの原典）</span
                                        ><a
                                            href="https://ronjeffries.com/xprog/articles/expcardconversationconfirmation/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >ronjeffries.com/xprog/articles/...</a
                                        >
                                    </div>
                                    <div className="rcard">
                                        <span className="rname">Bill Wake：INVEST in Good Stories（INVEST原典）</span
                                        ><a
                                            href="https://xp123.com/articles/invest-in-good-stories-and-smart-tasks/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >xp123.com/articles/invest-in-good-stories...</a
                                        >
                                    </div>
                                </div>

                                <div className="ref-cat"><h4>🔧 CI/CD 関連</h4></div>
                                <div className="ref-grid">
                                    <div className="rcard">
                                        <span className="rname">GitHub Actions 公式ドキュメント</span
                                        ><a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer"
                                            >docs.github.com/en/actions</a
                                        >
                                    </div>
                                </div>

                                <div className="ref-cat"><h4>🎓 補足学習リソース（二次情報源）</h4></div>
                                <div className="ref-grid">
                                    <div className="rcard">
                                        <span className="rname">ISTQB.Guru：CTFL-AT 概要解説</span
                                        ><a
                                            href="https://www.istqb.guru/agile-tester/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >istqb.guru/agile-tester</a
                                        >
                                    </div>
                                </div>
                            </section>

                            <section id="summary" className="divider-top">
                                <h2 className="h-section">まとめ：Chapter 1 理解のための5つの核心</h2>

                                <div className="mermaid-wrap"><Mermaid chart={DIAGRAM_20} /><div className="mermaid-cap">5つの核心メッセージ（横スクロールで全体をご覧いただけます）</div></div>

                                <div className="step-list">
                                    <li>
                                        <div className="stitle">価値観と原則が全ての土台</div>
                                        <div className="sdesc">
                                            XP・Scrum・Kanbanという個別のプラクティスを覚える前に、それらが共通してアジャイルマニフェストの4つの価値観・12の原則を実装したものであるという構造を理解することが、応用問題（K3）への対応力を高めます。
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">テスターは「後工程」の存在ではない</div>
                                        <div className="sdesc">
                                            ホールチームアプローチの本質は、テスターが要求分析・設計・実装のあらゆる段階に、専門性を保ちながら統合的に関わることです。
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">フィードバックの速度が品質を決める</div>
                                        <div className="sdesc">
                                            早期かつ頻繁なフィードバック（1.1.3）と継続的インテグレーション（1.2.4）は、コンセプトと技術的実装という表裏一体の関係にあります。
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">良いストーリーは一人で書くものではない</div>
                                        <div className="sdesc">
                                            3つのC・パワー・オブ・スリー・INVEST基準は、いずれも「対話を通じてテスト可能な要求を作り上げる」という同じ思想の異なる表現です。
                                        </div>
                                    </li>
                                    <li>
                                        <div className="stitle">改善は偶然ではなく仕組み化されている</div>
                                        <div className="sdesc">
                                            レトロスペクティブによるプロセス改善、リリース計画とイテレーション計画という階層的な計画構造は、いずれも「継続的に学び、調整する」というアジャイルの根本原則を運用レベルに落とし込んだ仕組みです。
                                        </div>
                                    </li>
                                </div>
                            </section>

                            <footer>
                                <p>
                                    <strong>📌 本ガイドの対象範囲</strong>: CTFL-AT公式シラバス
                                    v1.0（2014年版・現行最新）Chapter 1「Agile Software
                                    Development」全編（1.1〜1.2、全8サブセクション）
                                </p>
                                <p>
                                    <strong>📌 次のステップ</strong>: Chapter 2「Basic Agile Testing Guidelines,
                                    Procedures, and Processes」／Chapter 3「Tools and
                                    Technology」の学習へ進むことを推奨します
                                </p>
                                <p>
                                    <strong>📌 サンセット後の学習継続先</strong>: CTFL v4.0（統合済み基礎）／
                                    CTAL-AT v2.0（本格的なアジャイルテスト専門資格）
                                </p>
                                <p>
                                    🔗 公式リソース:
                                    <a
                                        href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at</a
                                    >
                                </p>
                                <p style={{marginTop: "20px", paddingTop: "20px", borderTop: "1px solid var(--color-border)"}}>
                                    ⚠️ 免責事項:
                                    本ガイドはISTQB®が公認したトレーニング資料ではありません。内容は2025年時点で入手可能な公式シラバス・公式ガイド・一次情報源に基づいて作成していますが、学習の最終確認は必ず公式サイト（istqb.org）および各フレームワークの公式ドキュメントで行ってください。CTFL-ATはサンセット（段階的廃止）が予定されているため、最新の資格体系については必ずISTQB公式サイトをご確認ください。
                                </p>
                            </footer>
        
            </div>
        </div>
    );
}
