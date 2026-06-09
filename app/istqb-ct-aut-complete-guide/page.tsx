import NavBar from './NavBar';
import Mermaid from '../../components/Mermaid';
import './istqb-ct-aut-complete-guide.css';


const DIAGRAMS: Record<string, string> = {
                'diag-1': `flowchart TD
Center["⚖️ プロジェクト目標の<br/>トレードオフ"]
Quality["🏆 品質向上<br/>欠陥ゼロ・長期信頼性<br/>15年/20万km耐久"]
Cost["💰 コスト削減<br/>部品・開発・テスト<br/>コストの最小化"]
Safety["🔒 安全性確保<br/>ISO 26262準拠<br/>機能安全・サイバーセキュリティ"]
Speed["⚡ 開発スピード<br/>市場投入時間TTM短縮<br/>競合優位性確保"]
Center --- Quality
Center --- Cost
Center --- Safety
Center --- Speed
Quality -.-|"相反"| Cost
Safety -.-|"相反"| Speed`,
                'diag-2': `flowchart LR
P1["📋 Phase 1<br/>コンセプト<br/>要件収集・レビュー"]
P2["🔧 Phase 2<br/>開発<br/>設計・実装・テスト"]
P3["🏭 Phase 3<br/>シリーズ生産<br/>量産前最終検証"]
P4["🔨 Phase 4<br/>サービス<br/>OTA・保守・サポート"]
P5["📈 Phase 5<br/>改善<br/>不具合対応・機能追加"]
P6["♻️ Phase 6<br/>廃棄<br/>サポート終了・安全廃棄"]
P1 --> P2
P2 --> P3
P3 --> P4
P4 --> P5
P5 --> P6`,
                'diag-3': `flowchart LR
subgraph LEFT["開発フェーズ (設計)"]
direction TB
SYS1["SYS.1<br/>システム要件分析"]
SYS3["SYS.3<br/>システム設計"]
SWE1["SWE.1<br/>SW要件分析"]
SWE2["SWE.2<br/>SWアーキテクチャ設計"]
SWE3["SWE.3<br/>詳細設計・実装"]
SYS1 --> SYS3
SYS3 --> SWE1
SWE1 --> SWE2
SWE2 --> SWE3
end
subgraph RIGHT["テストフェーズ (検証)"]
direction TB
SWE4["SWE.4<br/>SWユニット検証 ★"]
SWE5["SWE.5<br/>SW統合テスト ★"]
SWE6["SWE.6<br/>SW検定テスト ★"]
SYS4["SYS.4<br/>SYS統合テスト"]
SYS5["SYS.5<br/>SYS検定テスト"]
SWE4 --> SWE5
SWE5 --> SWE6
SWE6 --> SYS4
SYS4 --> SYS5
end
SWE3 --> SWE4
SWE1 -. "検証対応" .-> SWE6
SWE2 -. "検証対応" .-> SWE5
SYS1 -. "検証対応" .-> SYS5`,
                'diag-4': `flowchart TD
Step1["Step 1: ハザード状況の特定<br/>例: 走行中にEPSが機能を失う"]
Step2["Step 2: S・E・Cパラメータの評価<br/>S=3 致命的 / E=4 高頻度 / C=3 制御困難"]
Step3["Step 3: ASILレベルの決定<br/>S3 x E4 x C3 → ASIL D"]
Step4["Step 4: 安全目標の設定<br/>EPS走行中に機能を失ってはならない"]
Step5["Step 5: テスト計画・強度の決定<br/>ASIL D → MC/DC必須 + B2Bテスト推奨"]
Step1 --> Step2
Step2 --> Step3
Step3 --> Step4
Step4 --> Step5
style Step1 fill:#0a1628,stroke:#00d4ff
style Step3 fill:#1a0a10,stroke:#ff4466
style Step5 fill:#0a1a0d,stroke:#00ff88`,
                'diag-5': `flowchart TD
App["🔷 アプリケーション層<br/>Software Components (SWC)<br/>機能ロジック・制御アルゴリズム"]
RTE["🔶 RTE - Runtime Environment<br/>SWC間通信の仲介・自動生成コード"]
subgraph BSW["Basic Software (BSW)"]
COMM["通信スタック<br/>CAN/LIN/Ethernet"]
OS["OS<br/>AUTOSAR OS"]
DIAG["診断<br/>DCM/DEM"]
MEM["メモリ管理<br/>NvM/MemIf"]
COMM --- OS
OS --- DIAG
DIAG --- MEM
end
MCAL["🔹 MCAL - マイコン抽象化層<br/>ADC/PWM/CAN Driver等"]
HW["⬛ マイコン Hardware (MCU)"]
App --> RTE
RTE --> BSW
BSW --> MCAL
MCAL --> HW`,
                'diag-6': `flowchart LR
MiL["🟢 MiL<br/>Model-in-the-Loop<br/>【最初期】モデル同士"]
SiL["🔵 SiL<br/>Software-in-the-Loop<br/>【開発中期】コード確認"]
PiL["🟡 PiL<br/>Processor-in-the-Loop<br/>【コード生成後】実CPUで実行"]
HiL["🔴 HiL<br/>Hardware-in-the-Loop<br/>【試作ECU完成後】"]
ViL["🟣 ViL<br/>Vehicle-in-the-Loop<br/>【最終】実車両で確認"]
MiL -->|"コスト↑ 現実性↑"| SiL
SiL --> PiL
PiL --> HiL
HiL --> ViL`,
                'diag-7': `flowchart TD
PC["💻 テストPC・ホスト<br/>テストスクリプト・テスト管理ツール"]
Sim["HiLリアルタイムシミュレーター<br/>車両・環境のリアルタイムシミュレーション<br/>dSPACE SCALEXIO / NI VeriStand"]
ECU["🔴 実際のECU (テスト対象)<br/>本物のマイコン・基板・ハーネス"]
PC -->|"USB/LAN テスト制御"| Sim
Sim -->|"電気信号 アナログ/デジタル/CAN/LIN"| ECU
ECU -->|"制御出力 (フィードバック)"| Sim`,
                'diag-8': `flowchart TD
Input["同じ入力信号・テストベクタ"]
subgraph Pattern1["パターン1: MiL vs SiL 比較 (コード生成検証)"]
Mil["MiLモデルの出力"]
Sil["SiL生成コードの出力"]
Comp1{"出力比較 許容誤差内か?"}
Mil --> Comp1
Sil --> Comp1
Comp1 -->|"一致"| Pass1["コード生成が正しい"]
Comp1 -->|"不一致"| Fail1["コード生成に問題あり"]
end
subgraph Pattern2["パターン2: 旧SW vs 新SW (回帰検証)"]
Old["旧バージョンECUの出力"]
New["新バージョンECUの出力"]
Comp2{"出力比較"}
Old --> Comp2
New --> Comp2
Comp2 -->|"一致"| Pass2["デグレードなし"]
Comp2 -->|"不一致"| Fail2["意図しない変更あり"]
end
Input --> Pattern1
Input --> Pattern2`,
            };

export default function IstqbCtAutCompleteGuide() {
    return (
        <div className="istqb-ct-aut-page">
            
        {/* ==================== NAVIGATION ==================== */}
        <NavBar />

        {/* ==================== HERO ==================== */}
        <div className="hero">
            <div className="hero-label">ISTQB® Specialist Certification</div>
            <h1>🚗 CT-AuT 完全ガイド 2025<br />自動車ソフトウェアテスター</h1>
            <p className="hero-sub">
                Certified Tester – Automotive Software Tester v2.1.1 準拠。ASPICE・ISO
                26262・AUTOSAR・XiL環境・MC/DCをステップバイステップで完全解説。初学者から実践者まで対応。
            </p>
            <div className="hero-glow">⚡ CT-AuT v2.1.1 準拠 | 最新版 2025</div>
            <div className="hero-meta">
                <div className="hero-badge">問題数：<span>40問</span></div>
                <div className="hero-badge">合格点：<span>26/40点（65%）</span></div>
                <div className="hero-badge">試験時間：<span>60分</span></div>
                <div className="hero-badge">前提資格：<span>CTFL 必須</span></div>
                <div className="hero-badge">言語：<span>英語・独語 他</span></div>
            </div>
        </div>

        {/* ==================== CONTAINER START ==================== */}
        <div className="container">
            {/* ==================== TOC ==================== */}
            <section className="section" id="overview">
                <div className="chapter-header">
                    <div className="chapter-num">TOC<br />目次</div>
                    <h2>学習ロードマップ</h2>
                </div>
                <div className="toc-grid">
                    <a href="#overview" className="toc-card">
                        <div className="toc-num">Chapter 0</div>
                        <div className="toc-title">CT-AuT 概要・資格ロードマップ</div>
                    </a>
                    <a href="#ch1" className="toc-card">
                        <div className="toc-num">Chapter 1</div>
                        <div className="toc-title">自動車SWテストの概要</div>
                    </a>
                    <a href="#aspice" className="toc-card">
                        <div className="toc-num">Chapter 2.1</div>
                        <div className="toc-title">Automotive SPICE（ASPICE）</div>
                    </a>
                    <a href="#iso26262" className="toc-card">
                        <div className="toc-num">Chapter 2.2</div>
                        <div className="toc-title">ISO 26262 機能安全</div>
                    </a>
                    <a href="#autosar" className="toc-card">
                        <div className="toc-num">Chapter 2.3</div>
                        <div className="toc-title">AUTOSAR アーキテクチャ</div>
                    </a>
                    <a href="#compare" className="toc-card">
                        <div className="toc-num">Chapter 2.4</div>
                        <div className="toc-title">標準規格の比較</div>
                    </a>
                    <a href="#xil" className="toc-card">
                        <div className="toc-num">Chapter 3</div>
                        <div className="toc-title">仮想環境テスト（XiL）</div>
                    </a>
                    <a href="#techniques" className="toc-card">
                        <div className="toc-num">Chapter 4</div>
                        <div className="toc-title">自動車特有のテスト技法</div>
                    </a>
                    <a href="#exam" className="toc-card">
                        <div className="toc-num">試験対策</div>
                        <div className="toc-title">サンプル問題・チェックリスト</div>
                    </a>
                </div>

                {/* ====== EXAM OVERVIEW ====== */}
                <h3>試験配点・章別重要度</h3>
                <div className="exam-grid">
                    <div className="exam-card">
                        <div className="exam-chapter">CHAPTER 1</div>
                        <div className="exam-title">自動車SWテスト概要</div>
                        <div className="exam-stars">★★★☆☆</div>
                        <div className="exam-points">K1/K2レベル中心</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">CHAPTER 2</div>
                        <div className="exam-title">標準規格（ASPICE/ISO/AUTOSAR）</div>
                        <div className="exam-stars">★★★★★</div>
                        <div className="exam-points">最重要 — K2/K3レベル</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">CHAPTER 3</div>
                        <div className="exam-title">仮想環境テスト（XiL）</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-points">K2/K3レベル</div>
                    </div>
                    <div className="exam-card">
                        <div className="exam-chapter">CHAPTER 4</div>
                        <div className="exam-title">テスト技法（MC/DC等）</div>
                        <div className="exam-stars">★★★★☆</div>
                        <div className="exam-points">K2/K3レベル（計算問題あり）</div>
                    </div>
                </div>
            </section>

            {/* ==================== CHAPTER 1 ==================== */}
            <section className="section" id="ch1">
                <div className="chapter-header">
                    <div className="chapter-num">Ch.<br />1</div>
                    <div>
                        <h2>自動車ソフトウェアテストの概要 <span className="klevel">K1/K2</span></h2>
                        <p style={{margin: "0", color: "var(--color-text-muted)", fontSize: "0.88rem"}}>
                            Introduction to Automotive Software Testing
                        </p>
                    </div>
                </div>

                {/* 1.1 なぜ特別か */}
                <h3>1.1 現代車両の規模と複雑性</h3>
                <p>
                    現代の自動車は「走るコンピュータ」です。単純な機械装置から、数億行のコードを動かすソフトウェア集積体へと進化しました。この複雑さが、自動車ソフトウェアテストを他の分野と一線を画すものにしています。
                </p>

                <div className="metric-grid">
                    <div className="metric-card">
                        <span className="metric-value">100+</span>
                        <div className="metric-label">最大ECU数<br />（Electronic Control Unit）</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value">1億行</span>
                        <div className="metric-label">現代車両の<br />ソフトウェアコード規模</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value">3億行</span>
                        <div className="metric-label">2030年予測<br />コード規模</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value">530+</span>
                        <div className="metric-label">2024年発見<br />車載脆弱性数</div>
                    </div>
                </div>

                <div className="callout info">
                    <div className="callout-title">
                        <span className="callout-icon">💡</span>比較で理解する規模感
                    </div>
                    宇宙ステーションのソフトウェアは約150万行。現代の自動車（約1億行）はその<strong>60倍以上</strong>の規模です。これだけの複雑さを安全に動作させるテストが、CT-AuTの対象です。
                </div>

                {/* 1.2 発散するプロジェクト目標 */}
                <h3>1.2 発散するプロジェクト目標 <span className="klevel">K2</span></h3>
                <p>
                    自動車プロジェクトは互いに相反する目標を同時に達成しなければなりません。テスト計画立案時にこのトレードオフを理解することが重要です。
                </p>

                <Mermaid chart={DIAGRAMS[""] || ""} />

                <h4>テスターへの実践的影響</h4>
                <ul>
                    <li>
                        <strong>リスクベーステスト</strong
                        >の採用が必須（全テストはリソース的に不可能）
                    </li>
                    <li><strong>ASIL</strong>に基づく優先順位付けで安全クリティカルな機能を優先</li>
                    <li>標準規格（ASPICE・ISO 26262）への準拠確認がテスト活動の不可欠な一部</li>
                </ul>

                {/* 1.3 ECUカテゴリ */}
                <h3>1.3 車載E/Eシステムの分類 <span className="klevel">K1</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>システムカテゴリ</th>
                                <th>主要機能・ECU例</th>
                                <th>典型的ASIL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">パワートレイン</td>
                                <td>エンジン制御（ECM）・トランスミッション制御</td>
                                <td><span className="asil-badge asil-c">ASIL C</span></td>
                            </tr>
                            <tr>
                                <td className="td-strong">シャシー制御</td>
                                <td>ABS・ESC・電動パワーステアリング（EPS）</td>
                                <td><span className="asil-badge asil-d">ASIL D</span></td>
                            </tr>
                            <tr>
                                <td className="td-strong">ADAS</td>
                                <td>自動緊急ブレーキ（AEB）・車線維持支援・ACC</td>
                                <td><span className="asil-badge asil-d">ASIL D</span></td>
                            </tr>
                            <tr>
                                <td className="td-strong">インフォテインメント</td>
                                <td>カーナビ・オーディオ・スマートフォン連携</td>
                                <td><span className="asil-badge asil-qm">QM</span></td>
                            </tr>
                            <tr>
                                <td className="td-strong">ボディ制御</td>
                                <td>エアコン・照明・ドアロック（BCM）</td>
                                <td><span className="asil-badge asil-a">ASIL A</span></td>
                            </tr>
                            <tr>
                                <td className="td-strong">安全システム</td>
                                <td>エアバッグ（ACU）・シートベルトテンショナー</td>
                                <td><span className="asil-badge asil-d">ASIL D</span></td>
                            </tr>
                            <tr>
                                <td className="td-strong">電動化（EV/HEV）</td>
                                <td>バッテリー管理（BMS）・回生ブレーキ</td>
                                <td><span className="asil-badge asil-c">ASIL C/D</span></td>
                            </tr>
                            <tr>
                                <td className="td-strong">通信/OTA</td>
                                <td>V2X・Over-The-Air更新・ゲートウェイECU</td>
                                <td><span className="asil-badge asil-b">ASIL B</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 1.4 システムライフサイクル */}
                <h3>1.4 システムライフサイクルの6フェーズ <span className="klevel">K2</span></h3>

                <Mermaid chart={DIAGRAMS[""] || ""} />

                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-layer-title">Phase 2: 開発</div>
                        <div className="arch-layer-desc">
                            テスト計画・設計・環境構築・実行。テスターが最も活動するフェーズ。
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-layer-title">Phase 3: 量産前</div>
                        <div className="arch-layer-desc">
                            量産前最終テスト・型式認証取得のためのエビデンス作成。
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-layer-title">Phase 4: サービス</div>
                        <div className="arch-layer-desc">
                            OTAアップデートのテスト・市場不具合の解析支援。
                        </div>
                    </div>
                    <div className="arch-layer purple">
                        <div className="arch-layer-title">Phase 5: 改善</div>
                        <div className="arch-layer-desc">
                            影響度分析に基づくリグレッションテスト・改善確認テスト。
                        </div>
                    </div>
                </div>

                {/* 1.5 リリースへの貢献 */}
                <h3>1.5 リリースプロセスへのテスターの貢献 <span className="klevel">K2</span></h3>

                <ol className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div>
                            <strong>テスト計画の立案とステークホルダーへの提示</strong
                            >：テストの全体方針・スコープ・スケジュールを定義し合意を形成する。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div>
                            <strong>標準規格（ASPICE・ISO 26262）への準拠確認</strong
                            >：要求されるプロセス成熟度と安全要件の充足を検証する。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div>
                            <strong>テスト証跡（エビデンス）の作成</strong
                            >：型式認証や規制対応の監査に耐えうる完全な証跡を記録・保存する。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div>
                            <strong>残存リスクの評価・報告</strong
                            >：Go/No-Go判断を支援するために、未解決の不具合とリスクを可視化する。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">5</span>
                        <div>
                            <strong>変更管理に伴うリグレッションテスト</strong
                            >：修正が既存機能に与える影響範囲を特定・検証する。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">6</span>
                        <div>
                            <strong>サプライヤーのテスト成果物のレビュー</strong
                            >：外部調達コンポーネントの品質を担保する。
                        </div>
                    </li>
                </ol>

                <div className="callout danger">
                    <div className="callout-title">
                        <span className="callout-icon">⚠️</span>重要：テスト証跡は法的要件に直結
                    </div>
                    自動車業界ではテスト証跡（エビデンス）が型式認証の取得・法的責任の証明に直結します。テスト記録の正確性・完全性・長期保存は義務です。「テストした」ではなく「証明できる形でテストした」が求められます。
                </div>
            </section>

            {/* ==================== CHAPTER 2.1 ASPICE ==================== */}
            <section className="section" id="aspice">
                <div className="chapter-header">
                    <div className="chapter-num">Ch.<br />2.1</div>
                    <div>
                        <h2>Automotive SPICE（ASPICE）<span className="klevel">K1/K2/K3</span></h2>
                        <p style={{margin: "0", color: "var(--color-text-muted)", fontSize: "0.88rem"}}>
                            Automotive Software Process Improvement and Capability dEtermination
                        </p>
                    </div>
                </div>

                {/* 定義 */}
                <h3>2.1.1 ASPICEとは何か？（定義）</h3>
                <div className="callout info">
                    <div className="callout-title"><span className="callout-icon">📖</span>定義</div>
                    <strong>ASPICE（Automotive SPICE）</strong
                    >とは、自動車OEM（完成車メーカー）がサプライヤー（部品メーカー）の<strong>ソフトウェア開発プロセスの成熟度・能力を客観的に評価する</strong>ための国際標準フレームワークです。ISO/IEC
                    15504（SPICE）を自動車業界向けに特化させたものです。
                </div>

                <p>
                    <strong>なぜ必要か？</strong
                    >：現代の自動車ECUの多くはサプライヤーが開発します。BMW・VW・Mercedes等の欧州OEMは、サプライヤー選定の前提条件として<strong>ASPICEレベル2以上</strong>を要求します。レベル3はさらなる競争優位となります。
                </p>

                {/* 能力レベル */}
                <h3>2.1.2 プロセス能力レベル（0〜5）<span className="klevel">K2</span></h3>
                <p>
                    ASPICEはプロセスの成熟度を6段階のレベルで評価します。<strong>試験で最頻出の概念</strong>です。
                </p>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>レベル</th>
                                <th>名称（英語）</th>
                                <th>説明</th>
                                <th>OEM要求</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong" style={{fontFamily: "var(--font-mono)"}}>0</td>
                                <td className="td-red">Incomplete（不完全）</td>
                                <td>プロセスが未実施または目的未達成。ほぼ無秩序な状態。</td>
                                <td className="td-dim">—</td>
                            </tr>
                            <tr>
                                <td className="td-strong" style={{fontFamily: "var(--font-mono)"}}>1</td>
                                <td className="td-amber">Performed（実施済み）</td>
                                <td>
                                    プロセスが実施され目的は達成されているが、計画・管理は不十分。
                                </td>
                                <td className="td-dim">最低限</td>
                            </tr>
                            <tr>
                                <td className="td-strong" style={{fontFamily: "var(--font-mono)"}}>2</td>
                                <td className="td-green">Managed（管理済み）★</td>
                                <td>
                                    プロセスが<strong>計画・監視・調整</strong>されている。成果物が管理されている。
                                </td>
                                <td className="td-green">多くのOEMの最低要件</td>
                            </tr>
                            <tr>
                                <td className="td-strong" style={{fontFamily: "var(--font-mono)"}}>3</td>
                                <td className="td-cyan">Established（確立済み）★★</td>
                                <td>
                                    定義されたプロセスが<strong>組織全体で標準化</strong>・導入されている。
                                </td>
                                <td className="td-cyan">高度な要件（競争優位）</td>
                            </tr>
                            <tr>
                                <td className="td-strong" style={{fontFamily: "var(--font-mono)"}}>4</td>
                                <td
                                    style={{color: "var(--color-accent-purple)", fontFamily: "var(--font-mono)"}}
                                >
                                    Predictable（予測可能）
                                </td>
                                <td>
                                    定量的データでプロセスを統計的に管理・制御。統計的プロセス制御を適用。
                                </td>
                                <td className="td-dim">希少</td>
                            </tr>
                            <tr>
                                <td className="td-strong" style={{fontFamily: "var(--font-mono)"}}>5</td>
                                <td
                                    style={{color: "var(--color-accent-purple)", fontFamily: "var(--font-mono)"}}
                                >
                                    Innovating（革新的）
                                </td>
                                <td>継続的改善・イノベーションを実施。最高レベル。</td>
                                <td className="td-dim">極めて希少</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ レベル2達成の例</div>
                        <ul
                            style={{margin: "0", paddingLeft: "1.25rem", fontSize: "0.9rem", color: "var(--color-text-secondary)"}}
                        >
                            <li>テスト計画書が毎スプリントで作成される</li>
                            <li>テスト進捗が週次で監視・報告される</li>
                            <li>成果物（テスト仕様・結果）がバージョン管理される</li>
                            <li>問題発生時に是正措置が記録される</li>
                        </ul>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ レベル1相当の例（問題あり）</div>
                        <ul
                            style={{margin: "0", paddingLeft: "1.25rem", fontSize: "0.9rem", color: "var(--color-text-secondary)"}}
                        >
                            <li>テストは実施するが計画書が存在しない</li>
                            <li>何をどれだけテストしたか追跡されていない</li>
                            <li>テスト結果が担当者のメモにしか残らない</li>
                            <li>問題への対応が個人の判断に依存する</li>
                        </ul>
                    </div>
                </div>

                {/* プロセスグループ */}
                <h3>2.1.3 ASPICEのプロセスグループ（SYS / SWE）<span className="klevel">K2</span></h3>
                <p>
                    ASPICEのプライマリライフサイクルプロセスは、<strong>SYS（システム）</strong>と<strong>SWE（ソフトウェアエンジニアリング）</strong>の2グループに大別されます。テスターは主にSWE.4〜SWE.6を担当します。
                </p>

                <Mermaid chart={DIAGRAMS[""] || ""} />

                <div className="callout warning">
                    <div className="callout-title">
                        <span className="callout-icon">🎯</span>試験ポイント：テスターが担当するプロセス
                    </div>
                    <strong
                        >SWE.4（ユニット検証）・SWE.5（SW統合テスト）・SWE.6（SW検定テスト）</strong
                    >がテスターの主要担当範囲です。各プロセスがVモデルのどの位置に対応するか、そしてASPICEの能力レベル0〜5の定義は必ず押さえてください。
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ASPICEプロセス</th>
                                <th>ISTQBテストレベル対応</th>
                                <th>主な活動</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">SWE.4 SWユニット検証</td>
                                <td>コンポーネントテスト（ユニットテスト）</td>
                                <td>ユニットテスト実施・コードカバレッジ計測</td>
                            </tr>
                            <tr>
                                <td className="td-strong">SWE.5 SW統合テスト</td>
                                <td>コンポーネント統合テスト</td>
                                <td>SW間インターフェーステスト・統合確認</td>
                            </tr>
                            <tr>
                                <td className="td-strong">SWE.6 SW検定テスト</td>
                                <td>システムテスト</td>
                                <td>SW全体の検定・要件適合確認</td>
                            </tr>
                            <tr>
                                <td className="td-strong">SYS.4 SYS統合テスト</td>
                                <td>システム統合テスト</td>
                                <td>HW/SW統合・ECU間通信テスト</td>
                            </tr>
                            <tr>
                                <td className="td-strong">SYS.5 SYS検定テスト</td>
                                <td>受入テスト</td>
                                <td>実車両での最終検定・顧客受入</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ==================== CHAPTER 2.2 ISO 26262 ==================== */}
            <section className="section" id="iso26262">
                <div className="chapter-header">
                    <div className="chapter-num">Ch.<br />2.2</div>
                    <div>
                        <h2>
                            ISO 26262 — 機能安全（Functional Safety）<span className="klevel"
                                >K2/K3</span
                            >
                        </h2>
                        <p style={{margin: "0", color: "var(--color-text-muted)", fontSize: "0.88rem"}}>
                            Road Vehicles – Functional Safety | 初版2011年 → 第2版2018年
                        </p>
                    </div>
                </div>

                {/* 定義 */}
                <h3>2.2.1 機能安全とは何か？（定義）</h3>
                <div className="callout info">
                    <div className="callout-title">
                        <span className="callout-icon">🔒</span>機能安全（Functional Safety）の定義
                    </div>
                    「<strong>E/Eシステムの誤作動挙動に起因するハザードによる不合理なリスクが存在しない状態</strong>」（ISO
                    26262より）。<br />
                    すなわち、<em>ソフトウェアやハードウェアのバグが、人命に関わる事故を引き起こさないようにするための規格</em>です。
                </div>

                <p>
                    <strong>なぜ重要か？</strong
                    >：エアバッグ不作動・ABS誤作動・パワーステアリング喪失などの電気/電子系の故障は直接人命に関わります。ISO
                    26262はこれらを防ぐための開発・テストプロセスを義務付けます。
                </p>

                {/* 12パーツ */}
                <h3>2.2.2 ISO 26262の構成（12パーツ）<span className="klevel">K1</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>パーツ</th>
                                <th>内容</th>
                                <th>テスター関連度</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-cyan">Part 1</td>
                                <td>用語定義（Vocabulary）</td>
                                <td className="td-amber">中</td>
                            </tr>
                            <tr>
                                <td className="td-cyan">Part 2</td>
                                <td>機能安全の管理（Management）</td>
                                <td className="td-amber">中</td>
                            </tr>
                            <tr>
                                <td className="td-cyan">Part 3</td>
                                <td>コンセプトフェーズ・HARA</td>
                                <td className="td-amber">中</td>
                            </tr>
                            <tr>
                                <td className="td-cyan">Part 4</td>
                                <td>システムレベルの製品開発 ★</td>
                                <td className="td-green">高</td>
                            </tr>
                            <tr>
                                <td className="td-cyan">Part 5</td>
                                <td>ハードウェアレベルの製品開発 ★</td>
                                <td className="td-green">高</td>
                            </tr>
                            <tr>
                                <td className="td-cyan font-bold"><strong>Part 6</strong></td>
                                <td><strong>ソフトウェアレベルの製品開発 ★★★最重要</strong></td>
                                <td className="td-green"><strong>最高</strong></td>
                            </tr>
                            <tr>
                                <td className="td-cyan">Part 7</td>
                                <td>生産・運用・サービス・廃棄</td>
                                <td className="td-dim">低</td>
                            </tr>
                            <tr>
                                <td className="td-cyan">Part 8</td>
                                <td>支援プロセス（ツール資格認定等）★</td>
                                <td className="td-green">高</td>
                            </tr>
                            <tr>
                                <td className="td-cyan">Part 9〜12</td>
                                <td>半導体・ガイドライン・二輪車への適用</td>
                                <td className="td-dim">参考</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* ASIL */}
                <h3>
                    2.2.3 ASIL（自動車安全整合性レベル）<span className="klevel">K2</span>— 試験最頻出！
                </h3>
                <p>
                    ASILはISO
                    26262の核心概念です。安全要件の厳格さを示す4段階のレベルで、<strong>どのテスト手法をどの強度で適用するかを決定</strong>します。
                </p>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ASILレベル</th>
                                <th>説明</th>
                                <th>具体例</th>
                                <th>テスト強度</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="asil-badge asil-qm">QM</span></td>
                                <td>安全要件なし。通常の品質管理で対応可能。</td>
                                <td>インフォテインメント（一部）・インテリア照明</td>
                                <td className="td-dim">標準QA</td>
                            </tr>
                            <tr>
                                <td><span className="asil-badge asil-a">ASIL A</span></td>
                                <td>最低レベルの安全要件。危害の可能性低・制御可能性高。</td>
                                <td>ワイパー制御・ウォッシャー液システム</td>
                                <td className="td-cyan">基本的な安全テスト</td>
                            </tr>
                            <tr>
                                <td><span className="asil-badge asil-b">ASIL B</span></td>
                                <td>中程度の安全要件。</td>
                                <td>速度計・ヘッドランプ（一部）・OTAゲートウェイ</td>
                                <td className="td-cyan">強化されたテスト</td>
                            </tr>
                            <tr>
                                <td><span className="asil-badge asil-c">ASIL C</span></td>
                                <td>高い安全要件。</td>
                                <td>エアバッグ（一部）・パワーウィンドウ・エンジン制御</td>
                                <td className="td-amber">厳格なテスト＋MC/DC推奨</td>
                            </tr>
                            <tr>
                                <td><span className="asil-badge asil-d">ASIL D</span></td>
                                <td>最高レベルの安全要件。致命的影響の可能性。制御困難。</td>
                                <td>AEB・操舵制御（EPS）・ABS・パワーステアリング</td>
                                <td className="td-red">最も厳格＋MC/DC必須</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* HARA */}
                <h3>
                    2.2.4 HARA（ハザード分析とリスク評価）— ASIL決定の3要素<span className="klevel"
                        >K2</span
                    >
                </h3>
                <div className="callout info">
                    <div className="callout-title">
                        <span className="callout-icon">📐</span>ASIL決定の数式
                    </div>
                    <strong>ASIL = 危害度（S）× 暴露確率（E）× 制御可能性（C）</strong
                    >の組み合わせで決定されます。
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>要素</th>
                                <th>英語名</th>
                                <th>スコア定義</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">S — 危害度</td>
                                <td className="td-dim">Severity</td>
                                <td>
                                    <strong>S0</strong>: 危害なし ／ <strong>S1</strong>: 軽傷 ／
                                    <strong>S2</strong>: 重傷 ／
                                    <span className="td-red"><strong>S3</strong>: 致命的・死亡</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="td-strong">E — 暴露確率</td>
                                <td className="td-dim">Exposure</td>
                                <td>
                                    <strong>E0</strong>: 信じられないほど低 ／ <strong>E1</strong>:
                                    非常に低 ／ <strong>E2</strong>: 低 ／ <strong>E3</strong>: 中
                                    ／ <span className="td-red"><strong>E4</strong>: 高（常時）</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="td-strong">C — 制御可能性</td>
                                <td className="td-dim">Controllability</td>
                                <td>
                                    <strong>C0</strong>: 一般に制御可能 ／ <strong>C1</strong>:
                                    単純な回避可能 ／ <strong>C2</strong>: 通常は制御可能 ／
                                    <span className="td-red"><strong>C3</strong>: 制御困難</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Mermaid chart={DIAGRAMS[""] || ""} />

                {/* メソッドテーブル */}
                <h3>
                    2.2.5 ASILレベル別 推奨テスト手法（メソッドテーブル）<span className="klevel"
                        >K3</span
                    >
                </h3>
                <p>
                    ISO 26262
                    <strong>Part 6 Table 10</strong>
                    で定義された、ASILレベルに応じた推奨テスト手法の一覧です。<strong>試験頻出</strong>。記号の意味を必ず暗記してください。
                </p>

                <div className="alert cyan">
                    <strong>記号の意味：</strong>
                    <span className="mth-pp">++（強く推奨）</span> ／
                    <span className="mth-p">+（推奨）</span> ／ <span className="mth-o">o（中立）</span> ／
                    <span className="mth-mm">--（使用禁止/非推奨）</span>
                </div>
                <div className="alert amber">
                    <strong>⚡ 重要：</strong> ASIL
                    C以上では、ブランチカバレッジ（分岐網羅）だけでは不十分です。ステートメント・ブランチ両方のカバレッジを100%達成した上で、ASIL
                    CではMC/DC推奨（+）、<strong>ASIL DではMC/DC必須（++）</strong>となります。
                </div>
                <div className="alert red">
                    <strong>🚨 禁忌：</strong> ASIL
                    D対象のソフトウェアに対して、テストカバレッジを「ブランチカバレッジだけで充分」と判断してはなりません。MC/DCを実施しないことは、ISO
                    26262 Part 6 への非準拠となり、型式認証が取得できないリスクがあります。
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>テスト技法</th>
                                <th><span className="asil-badge asil-qm">QM</span></th>
                                <th><span className="asil-badge asil-a">A</span></th>
                                <th><span className="asil-badge asil-b">B</span></th>
                                <th><span className="asil-badge asil-c">C</span></th>
                                <th><span className="asil-badge asil-d">D</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">要件ベーステスト</td>
                                <td className="mth-pp">++</td>
                                <td className="mth-pp">++</td>
                                <td className="mth-pp">++</td>
                                <td className="mth-pp">++</td>
                                <td className="mth-pp">++</td>
                            </tr>
                            <tr>
                                <td className="td-strong">同値分割法（EP）</td>
                                <td className="mth-p">+</td>
                                <td className="mth-p">+</td>
                                <td className="mth-p">+</td>
                                <td className="mth-pp">++</td>
                                <td className="mth-pp">++</td>
                            </tr>
                            <tr>
                                <td className="td-strong">境界値分析（BVA）</td>
                                <td className="mth-p">+</td>
                                <td className="mth-p">+</td>
                                <td className="mth-p">+</td>
                                <td className="mth-pp">++</td>
                                <td className="mth-pp">++</td>
                            </tr>
                            <tr>
                                <td className="td-strong">ステートメントカバレッジ 100%</td>
                                <td className="mth-p">+</td>
                                <td className="mth-p">+</td>
                                <td className="mth-p">+</td>
                                <td className="mth-pp">++</td>
                                <td className="mth-pp">++</td>
                            </tr>
                            <tr>
                                <td className="td-strong">ブランチカバレッジ 100%</td>
                                <td className="mth-o">o</td>
                                <td className="mth-p">+</td>
                                <td className="mth-p">+</td>
                                <td className="mth-pp">++</td>
                                <td className="mth-pp">++</td>
                            </tr>
                            <tr style={{background: "rgba(0, 255, 136, 0.04)"}}>
                                <td className="td-strong">🔑 <strong>MC/DC カバレッジ</strong></td>
                                <td className="mth-o">o</td>
                                <td className="mth-o">o</td>
                                <td className="mth-o">o</td>
                                <td className="mth-p"><strong>+</strong></td>
                                <td className="mth-pp"><strong>++</strong></td>
                            </tr>
                            <tr style={{background: "rgba(0, 212, 255, 0.04)"}}>
                                <td className="td-strong">
                                    🔑 <strong>バックトゥバックテスト</strong>
                                </td>
                                <td className="mth-o">o</td>
                                <td className="mth-o">o</td>
                                <td className="mth-p">+</td>
                                <td className="mth-p"><strong>+</strong></td>
                                <td className="mth-pp"><strong>++</strong></td>
                            </tr>
                            <tr>
                                <td className="td-strong">故障注入テスト</td>
                                <td className="mth-o">o</td>
                                <td className="mth-o">o</td>
                                <td className="mth-p">+</td>
                                <td className="mth-p">+</td>
                                <td className="mth-pp">++</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout danger">
                    <div className="callout-title">
                        <span className="callout-icon">🚨</span>試験最頻出：MC/DCの立ち位置
                    </div>
                    <strong>MC/DC（修正条件判定カバレッジ）</strong>はASIL Cで推奨（+）、<strong
                        >ASIL Dで強く推奨（++）</strong
                    >。ASIL A/Bでは「中立（o）」。この使い分けが試験に繰り返し出題されます。
                </div>

                {/* 進捗バーで直感的理解 */}
                <h4>ASILレベル別のテスト強度イメージ</h4>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>QM — 通常品質管理</span><span className="progress-val">20%</span>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar bar-green" style={{'--bar-width': '20%'} as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>ASIL A — 基本的な安全テスト</span
                        ><span className="progress-val">40%</span>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar bar-cyan" style={{'--bar-width': '40%'} as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>ASIL B — 強化テスト</span><span className="progress-val">60%</span>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar bar-cyan" style={{'--bar-width': '60%'} as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>ASIL C — 厳格なテスト＋MC/DC推奨</span
                        ><span className="progress-val">80%</span>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar bar-amber" style={{'--bar-width': '80%'} as React.CSSProperties}></div>
                    </div>
                </div>
                <div className="progress-item">
                    <div className="progress-label">
                        <span>ASIL D — 最高水準のテスト＋MC/DC必須</span
                        ><span className="progress-val">100%</span>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar bar-red" style={{'--bar-width': '100%'} as React.CSSProperties}></div>
                    </div>
                </div>
            </section>

            {/* ==================== CHAPTER 2.3 AUTOSAR ==================== */}
            <section className="section" id="autosar">
                <div className="chapter-header">
                    <div className="chapter-num">Ch.<br />2.3</div>
                    <div>
                        <h2>
                            AUTOSAR — 自動車オープンシステムアーキテクチャ<span className="klevel"
                                >K1/K2</span
                            >
                        </h2>
                        <p style={{margin: "0", color: "var(--color-text-muted)", fontSize: "0.88rem"}}>
                            AUTomotive Open System ARchitecture | 設立2003年
                        </p>
                    </div>
                </div>

                <h3>2.3.1 AUTOSARとは何か？（定義）</h3>
                <div className="callout info">
                    <div className="callout-title">
                        <span className="callout-icon">🏗️</span>AUTOSARの目的
                    </div>
                    車載ソフトウェアの<strong>標準化されたアーキテクチャ</strong>を定義し、<em>ハードウェア依存のコードとアプリケーションコードを分離</em>することで、ソフトウェアの<strong>再利用性・移植性・相互運用性</strong>を高める業界コンソーシアムおよびその標準規格。<br />
                    設立メンバー：BMW・Bosch・Continental・Daimler・Ford・GM・Toyota・VW など。
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>種類</th>
                                <th>対象ECU</th>
                                <th>言語</th>
                                <th>主な用途</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">Classic AUTOSAR</td>
                                <td>従来型ECU（リアルタイム性重視）</td>
                                <td className="td-cyan">C言語（MISRA-C準拠）</td>
                                <td>ボディ制御・パワートレイン・シャシー</td>
                            </tr>
                            <tr>
                                <td className="td-strong">Adaptive AUTOSAR</td>
                                <td>高性能ECU（自動運転向け）</td>
                                <td className="td-cyan">C++（AUTOSAR C++14）</td>
                                <td>ADAS・自動運転・V2X・OTA更新</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>2.3.2 Classic AUTOSARの4層アーキテクチャ<span className="klevel">K2</span></h3>
                <p>
                    Classic
                    AUTOSARは4層の階層構造で、アプリケーションとハードウェアを完全に分離します。
                </p>

                <div className="arch-layers">
                    <div className="arch-layer green">
                        <div className="arch-layer-title">
                            ① アプリケーション層<br /><small>Application Layer</small>
                        </div>
                        <div className="arch-layer-desc">
                            <strong>ソフトウェアコンポーネント（SWC）</strong
                            >が配置される層。機能ロジックを実装。ECU交換時もSWCを再利用可能。<br /><em
                                >テスト対象：機能テスト・SWC間インターフェーステスト</em
                            >
                        </div>
                    </div>
                    <div className="arch-layer cyan">
                        <div className="arch-layer-title">
                            ② ランタイム環境<br /><small>RTE: Runtime Environment</small>
                        </div>
                        <div className="arch-layer-desc">
                            <strong>SWC間の通信を仲介する自動生成コード</strong
                            >。ポート・インターフェースを抽象化し、SWCを疎結合に保つ。<br /><em
                                >テスト対象：通信インターフェーステスト・RTE動作検証</em
                            >
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-layer-title">
                            ③ 基本ソフトウェア<br /><small>BSW: Basic Software</small>
                        </div>
                        <div className="arch-layer-desc">
                            <strong>OS・通信スタック・診断・メモリ管理</strong
                            >など、標準化された基盤機能群。<br /><em
                                >テスト対象：通信プロトコルテスト・診断（UDS）テスト</em
                            >
                        </div>
                    </div>
                    <div className="arch-layer red">
                        <div className="arch-layer-title">
                            ④ マイコン抽象化層<br /><small
                                >MCAL: Microcontroller Abstraction Layer</small
                            >
                        </div>
                        <div className="arch-layer-desc">
                            <strong>ハードウェアへの直接アクセスを抽象化</strong
                            >する最下層。MCU（マイコン）に依存する唯一の層。<br /><em
                                >テスト対象：ハードウェアドライバテスト・MISRA-C静的解析</em
                            >
                        </div>
                    </div>
                    <div
                        className="arch-layer blue"
                        style={{borderColor: "rgba(59, 130, 246, 0.6)", background: "rgba(59, 130, 246, 0.05)"}}
                    >
                        <div className="arch-layer-title" style={{color: "var(--neon-blue)"}}>
                            マイコン（HW）<br /><small>Microcontroller Hardware</small>
                        </div>
                        <div className="arch-layer-desc">
                            物理的なマイクロコントローラ。AUTOSAR層ではなくハードウェア基盤。
                        </div>
                    </div>
                </div>

                <Mermaid chart={DIAGRAMS[""] || ""} />

                <h3>2.3.3 MISRA-Cコーディング規約<span className="klevel">K1/K2</span></h3>
                <div className="callout warning">
                    <div className="callout-title">
                        <span className="callout-icon">📏</span>MISRA-C（Motor Industry Software
                        Reliability Association — C）
                    </div>
                    組み込みシステム（特に自動車）向けの<strong>安全・移植性・信頼性の高いC言語コーディングガイドライン</strong>。不安全な書き方を禁止するルール集。AUTOSAR
                    MCALのコーディングに必須適用されます。
                </div>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ MISRA-C 準拠の安全なコード</div>
                        <div className="code-block" data-lang="C">
                            <div><span className="code-comment">/* MISRA-C:2012 準拠例 */</span></div>
                            <div>
                                <span className="code-type">uint16_t</span> sensor_val =
                                <span className="code-number">0U</span>;
                            </div>
                            <div><span className="code-type">uint16_t</span> result;</div>
                            <div>&nbsp;</div>
                            <div>
                                <span className="code-comment"
                                    >/* 明示的な型キャスト（Rule 10.3）*/</span
                                >
                            </div>
                            <div>
                                result = (<span className="code-type">uint16_t</span>)(sensor_val +
                                <span className="code-number">100U</span>);
                            </div>
                            <div>&nbsp;</div>
                            <div>
                                <span className="code-comment">/* 範囲チェックによる安全な処理 */</span>
                            </div>
                            <div>
                                <span className="code-keyword">if</span> (result &lt;
                                <span className="code-number">4096U</span>) &#123; set_output(result); &#125;
                            </div>
                        </div>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ MISRA-C 違反コード（禁止事項）</div>
                        <div className="code-block" data-lang="C">
                            <div>
                                <span className="code-comment">/* 違反1: goto文の使用禁止 */</span>
                            </div>
                            <div><span className="code-keyword">goto</span> error_handler;</div>
                            <div>&nbsp;</div>
                            <div>
                                <span className="code-comment"
                                    >/* 違反2: 動的メモリ割り当て禁止 */</span
                                >
                            </div>
                            <div>
                                <span className="code-type">uint8_t</span> *buf = malloc(<span
                                    className="code-number"
                                    >256</span
                                >);
                            </div>
                            <div>&nbsp;</div>
                            <div><span className="code-comment">/* 違反3: 再帰関数禁止 */</span></div>
                            <div>
                                <span className="code-type">int</span>
                                <span className="code-func">factorial</span>(<span className="code-type"
                                    >int</span
                                >
                                n) &#123; <span className="code-keyword">return</span> n *
                                <span className="code-func">factorial</span>(n-<span className="code-number"
                                    >1</span
                                >); &#125;
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>MISRA-Cバージョン</th>
                                <th>位置づけ</th>
                                <th>主な対象</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">MISRA C:2004</td>
                                <td>レガシー（旧版）</td>
                                <td>旧規格準拠のプロジェクト</td>
                            </tr>
                            <tr>
                                <td className="td-strong">MISRA C:2012</td>
                                <td className="td-green">現在の主流 ★</td>
                                <td>Classic AUTOSAR（MCAL）</td>
                            </tr>
                            <tr>
                                <td className="td-strong">MISRA C:2023</td>
                                <td>最新版</td>
                                <td>新規プロジェクト</td>
                            </tr>
                            <tr>
                                <td className="td-strong">AUTOSAR C++14</td>
                                <td>C++版規格</td>
                                <td>Adaptive AUTOSAR</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>テスターとAUTOSARの関係：実践的影響</h4>
                <ol className="step-list">
                    <li>
                        <span className="step-num">1</span>
                        <div>
                            <strong>MCALのテスト</strong
                            >：MISRA-C静的解析ツール（Polyspace・Klocwork等）でコード品質を確認。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">2</span>
                        <div>
                            <strong>BSWの通信テスト</strong
                            >：CAN・LIN・Ethernetスタックの動作確認。診断（UDS）機能のテスト。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">3</span>
                        <div>
                            <strong>SWCの機能テスト</strong
                            >：アプリケーション機能の検証。RTE経由の通信インターフェーステスト。
                        </div>
                    </li>
                    <li>
                        <span className="step-num">4</span>
                        <div>
                            <strong>ツール活用</strong
                            >：CANalyzer（Vector）でCAN通信をテスト、dSPACEでHiL環境を構築。
                        </div>
                    </li>
                </ol>
            </section>

            {/* ==================== CHAPTER 2.4 COMPARE ==================== */}
            <section className="section" id="compare">
                <div className="chapter-header">
                    <div className="chapter-num">Ch.<br />2.4</div>
                    <h2>標準規格の比較 <span className="klevel">K2</span>— 試験頻出！</h2>
                </div>

                <div className="callout warning">
                    <div className="callout-title">
                        <span className="callout-icon">🎯</span>試験対策：3規格の覚え方
                    </div>
                    <strong>ASPICE = Process（プロセス評価）</strong> ／
                    <strong>ISO 26262 = Safety（機能安全）</strong> ／
                    <strong>AUTOSAR = Architecture（アーキテクチャ標準）</strong>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>観点</th>
                                <th>ASPICE</th>
                                <th>ISO 26262</th>
                                <th>AUTOSAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">主な目的</td>
                                <td>開発プロセス成熟度評価</td>
                                <td>機能安全の確保</td>
                                <td>SW標準アーキテクチャ定義</td>
                            </tr>
                            <tr>
                                <td className="td-strong">焦点</td>
                                <td className="td-green">「どのように作るか」</td>
                                <td className="td-red">「どれだけ安全か」</td>
                                <td className="td-cyan">「どのように構成するか」</td>
                            </tr>
                            <tr>
                                <td className="td-strong">評価指標</td>
                                <td>能力レベル（0〜5）</td>
                                <td>ASIL（QM/A〜D）</td>
                                <td>アーキテクチャ準拠性</td>
                            </tr>
                            <tr>
                                <td className="td-strong">適用対象</td>
                                <td>開発プロセス全般</td>
                                <td>E/E安全機能</td>
                                <td>車載SWアーキテクチャ</td>
                            </tr>
                            <tr>
                                <td className="td-strong">策定主体</td>
                                <td>欧州OEMコンソーシアム</td>
                                <td>ISO国際標準</td>
                                <td>業界コンソーシアム（100社以上）</td>
                            </tr>
                            <tr>
                                <td className="td-strong">適用の法的強制力</td>
                                <td>OEM要件（商慣行上の義務）</td>
                                <td>規制・型式認証に直結</td>
                                <td>任意採用（業界標準として実質必須）</td>
                            </tr>
                            <tr>
                                <td className="td-strong">相互関係</td>
                                <td colSpan={3} style={{color: "var(--color-text-secondary)"}}>
                                    ASPICEのプロセスでISO
                                    26262要件を達成し、AUTOSARアーキテクチャで実装する —
                                    <strong>相補的な関係</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="trend-card">
                    <div className="trend-tag">2025年トレンド</div>
                    <h4 style={{color: "var(--color-text-primary)", marginTop: "0"}}>
                        ASPICE 4.0 と新たな規格統合
                    </h4>
                    <p>
                        2024年にリリースされたASPICE 4.0では、<strong
                            >Adaptive AUTOSARへの対応</strong
                        >・<strong>アジャイル開発手法との統合</strong>・<strong
                            >ISO/SAE 21434（サイバーセキュリティ）との関係</strong
                        >が強化されました。現代の自動車ソフトウェアテストは、機能安全（ISO
                        26262）とサイバーセキュリティ（ISO/SAE
                        21434）を同時に考慮する必要があります。
                    </p>
                </div>
            </section>

            {/* ==================== CHAPTER 3: XiL ==================== */}
            <section className="section" id="xil">
                <div className="chapter-header">
                    <div className="chapter-num">Ch.<br />3</div>
                    <div>
                        <h2>仮想環境でのテスト（XiL）<span className="klevel">K2/K3</span></h2>
                        <p style={{margin: "0", color: "var(--color-text-muted)", fontSize: "0.88rem"}}>
                            Testing in a Virtual Environment | X-in-the-Loop Test Environments
                        </p>
                    </div>
                </div>

                <h3>3.1 なぜ仮想テスト環境が必要か？</h3>
                <div className="compare-grid">
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 実機のみでテストする場合の問題</div>
                        <ul
                            style={{margin: "0", paddingLeft: "1.25rem", fontSize: "0.9rem", color: "var(--color-text-secondary)"}}
                        >
                            <li>開発初期はハードウェアが存在しない</li>
                            <li>実機ECUは1台数十〜数百万円と高コスト</li>
                            <li>事故・故障シナリオをリアルで再現できない</li>
                            <li>テストの並列実行・自動化が困難</li>
                            <li>環境変動でテスト再現性が低下する</li>
                        </ul>
                    </div>
                    <div className="compare-box good">
                        <div className="compare-label">✅ XiL仮想環境を使うメリット</div>
                        <ul
                            style={{margin: "0", paddingLeft: "1.25rem", fontSize: "0.9rem", color: "var(--color-text-secondary)"}}
                        >
                            <li>ハードウェア不要で開発最初期からテスト可能</li>
                            <li>危険シナリオ（センサー故障・事故）を安全に再現</li>
                            <li>テストを高速・大量・並列実行できる</li>
                            <li>同一入力で何度でも再現可能（再現性100%）</li>
                            <li>CI/CDパイプラインに自動統合できる</li>
                        </ul>
                    </div>
                </div>

                <h3>3.2 XiL全体像：開発ステージとテスト環境の対応</h3>
                <Mermaid chart={DIAGRAMS[""] || ""} />

                {/* XiL比較カード */}
                <div className="xil-grid">
                    <div className="xil-card" style={{borderColor: "rgba(0, 255, 136, 0.35)"}}>
                        <div className="xil-name" style={{color: "var(--color-accent-green)"}}>MiL</div>
                        <div className="xil-full">Model-in-the-Loop</div>
                        <div>
                            <span
                                className="xil-chip"
                                style={{background: "rgba(0, 255, 136, 0.12)", border: "1px solid rgba(0, 255, 136, 0.3)", color: "var(--color-accent-green)"}}
                                >コスト：最低</span
                            >
                        </div>
                        <div>
                            <span
                                className="xil-chip"
                                style={{background: "rgba(71, 85, 105, 0.2)", color: "#94a3b8", border: "1px solid #475569"}}
                                >現実性：低</span
                            >
                        </div>
                        <div
                            style={{marginTop: "0.75rem", fontSize: "0.82rem", color: "var(--color-text-secondary)"}}
                        >
                            アルゴリズム検証<br />MATLAB/Simulink
                        </div>
                    </div>
                    <div className="xil-card" style={{borderColor: "rgba(0, 212, 255, 0.35)"}}>
                        <div className="xil-name" style={{color: "var(--color-accent-cyan)"}}>SiL</div>
                        <div className="xil-full">Software-in-the-Loop</div>
                        <div>
                            <span
                                className="xil-chip"
                                style={{background: "rgba(0, 212, 255, 0.12)", border: "1px solid rgba(0, 212, 255, 0.3)", color: "var(--color-accent-cyan)"}}
                                >コスト：低</span
                            >
                        </div>
                        <div>
                            <span
                                className="xil-chip"
                                style={{background: "rgba(71, 85, 105, 0.2)", color: "#94a3b8", border: "1px solid #475569"}}
                                >現実性：低〜中</span
                            >
                        </div>
                        <div
                            style={{marginTop: "0.75rem", fontSize: "0.82rem", color: "var(--color-text-secondary)"}}
                        >
                            SW機能テスト<br />CI/CD統合に最適
                        </div>
                    </div>
                    <div className="xil-card" style={{borderColor: "rgba(255, 180, 0, 0.35)"}}>
                        <div className="xil-name" style={{color: "var(--color-accent-orange)"}}>PiL</div>
                        <div className="xil-full">Processor-in-the-Loop</div>
                        <div>
                            <span
                                className="xil-chip"
                                style={{background: "rgba(255, 180, 0, 0.12)", border: "1px solid rgba(255, 180, 0, 0.3)", color: "var(--color-accent-orange)"}}
                                >コスト：中</span
                            >
                        </div>
                        <div>
                            <span
                                className="xil-chip"
                                style={{background: "rgba(71, 85, 105, 0.2)", color: "#94a3b8", border: "1px solid #475569"}}
                                >現実性：中</span
                            >
                        </div>
                        <div
                            style={{marginTop: "0.75rem", fontSize: "0.82rem", color: "var(--color-text-secondary)"}}
                        >
                            タイミング検証<br />実CPU上で実行
                        </div>
                    </div>
                    <div className="xil-card" style={{borderColor: "rgba(255, 68, 102, 0.35)"}}>
                        <div className="xil-name" style={{color: "var(--color-accent-red)"}}>HiL</div>
                        <div className="xil-full">Hardware-in-the-Loop</div>
                        <div>
                            <span
                                className="xil-chip"
                                style={{background: "rgba(255, 68, 102, 0.12)", border: "1px solid rgba(255, 68, 102, 0.3)", color: "var(--color-accent-red)"}}
                                >コスト：高</span
                            >
                        </div>
                        <div>
                            <span
                                className="xil-chip"
                                style={{background: "rgba(255, 68, 102, 0.1)", color: "var(--color-accent-red)", border: "1px solid rgba(255, 68, 102, 0.3)"}}
                                >現実性：高</span
                            >
                        </div>
                        <div
                            style={{marginTop: "0.75rem", fontSize: "0.82rem", color: "var(--color-text-secondary)"}}
                        >
                            実ECU+仮想車両<br />最重要テスト環境
                        </div>
                    </div>
                    <div className="xil-card" style={{borderColor: "rgba(168, 85, 247, 0.35)"}}>
                        <div className="xil-name" style={{color: "var(--color-accent-purple)"}}>ViL</div>
                        <div className="xil-full">Vehicle-in-the-Loop</div>
                        <div>
                            <span
                                className="xil-chip"
                                style={{background: "rgba(168, 85, 247, 0.12)", border: "1px solid rgba(168, 85, 247, 0.3)", color: "var(--color-accent-purple)"}}
                                >コスト：最高</span
                            >
                        </div>
                        <div>
                            <span
                                className="xil-chip"
                                style={{background: "rgba(168, 85, 247, 0.1)", color: "var(--color-accent-purple)", border: "1px solid rgba(168, 85, 247, 0.3)"}}
                                >現実性：最高</span
                            >
                        </div>
                        <div
                            style={{marginTop: "0.75rem", fontSize: "0.82rem", color: "var(--color-text-secondary)"}}
                        >
                            実車両テスト<br />最終総合確認
                        </div>
                    </div>
                </div>

                {/* 詳細 MiL */}
                <h3>3.3 MiL（Model-in-the-Loop）<span className="klevel">K2</span></h3>
                <div className="arch-layer green" style={{margin: "1rem 0"}}>
                    <div className="arch-layer-title">MiL の構成</div>
                    <div className="arch-layer-desc">
                        制御アルゴリズム（数学モデル）⟷ 環境モデル（車両・プラント） —
                        全てをシミュレーション上で実行
                    </div>
                </div>
                <ul>
                    <li><strong>実施タイミング</strong>：最初期（要件定義〜基本設計段階）</li>
                    <li>
                        <strong>使用ツール</strong>：MATLAB/Simulink、ETAS ASCET、dSPACE TargetLink
                    </li>
                    <li>
                        <strong>何をテストするか</strong
                        >：制御ロジックのアルゴリズムの正しさ（PID制御・状態遷移・安全ロジック）
                    </li>
                    <li>
                        <strong>メリット</strong
                        >：ハードウェア不要・最低コスト・危険シナリオも安全に実施・繰り返しテストが容易
                    </li>
                    <li>
                        <strong>デメリット</strong
                        >：モデルと実コードの乖離あり・タイミング挙動は検証不可・HW固有の問題を発見できない
                    </li>
                </ul>

                {/* 詳細 SiL */}
                <h3>3.4 SiL（Software-in-the-Loop）<span className="klevel">K2</span></h3>
                <div className="arch-layer cyan" style={{margin: "1rem 0"}}>
                    <div className="arch-layer-title">SiL の構成</div>
                    <div className="arch-layer-desc">
                        実際のCコード（PC/サーバー上でコンパイル・実行）⟷ 環境シミュレーション —
                        コードをPC上でテスト
                    </div>
                </div>
                <ul>
                    <li>
                        <strong>実施タイミング</strong>：開発中期（コーディング〜統合テスト段階）
                    </li>
                    <li>
                        <strong>MiLとの違い</strong
                        >：MiLはアルゴリズムモデルをテスト、SiLは<em>実際のCコード（バイナリ）</em>をテスト
                    </li>
                    <li>
                        <strong>使用ツール</strong>：Linux/Windowsホスト環境、GoogleTest、Vector
                        CANoe（オフライン）
                    </li>
                    <li>
                        <strong>特記</strong>：<strong>バックトゥバックテスト（MiL vs SiL）</strong
                        >で自動生成コードの正しさを検証
                    </li>
                    <li>
                        <strong>メリット</strong
                        >：実プロダクションコードをテスト・CI/CDへの統合が容易・ハードウェア不要
                    </li>
                </ul>

                {/* 詳細 HiL */}
                <h3>3.5 HiL（Hardware-in-the-Loop）— 最重要！<span className="klevel">K2/K3</span></h3>
                <div className="callout info">
                    <div className="callout-title">
                        <span className="callout-icon">⚙️</span>HiLの動作原理
                    </div>
                    実際のECU（本物のマイコン・基板）をリアルタイムシミュレーターに接続し、ECUは「本物の車両と接続されている」と錯覚しながら動作します。車両側の挙動（センサー信号・アクチュエーターフィードバック）をシミュレーターが<strong>電気信号レベル</strong>でリアルタイムに模倣します。
                </div>

                <Mermaid chart={DIAGRAMS[""] || ""} />

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>HiLで検証できること</th>
                                <th>具体例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">ECU通信動作</td>
                                <td>CAN・LIN・FlexRay・Ethernetメッセージ送受信の検証</td>
                            </tr>
                            <tr>
                                <td className="td-strong">リアルタイムタイミング</td>
                                <td>制御周期・割り込み応答時間・タイムアウト処理</td>
                            </tr>
                            <tr>
                                <td className="td-strong">センサー/アクチュエーターIF</td>
                                <td>断線・ショート・固着など故障シナリオ</td>
                            </tr>
                            <tr>
                                <td className="td-strong">故障注入テスト</td>
                                <td>センサー断線・低電圧・バスオフをシミュレート</td>
                            </tr>
                            <tr>
                                <td className="td-strong">ASIL要件確認</td>
                                <td>フェールセーフ・縮退モード動作の検証</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="metric-grid">
                    <div className="metric-card">
                        <span className="metric-value" style={{fontSize: "1.1rem"}}>dSPACE</span>
                        <div className="metric-label">SCALEXIO<br />業界標準HiLツール</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value" style={{fontSize: "1.1rem"}}>NI</span>
                        <div className="metric-label">VeriStand<br />National Instruments</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value" style={{fontSize: "1.1rem"}}>ETAS</span>
                        <div className="metric-label">LABcar<br />Bosch傘下ツール</div>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value" style={{fontSize: "1.1rem"}}>Vector</span>
                        <div className="metric-label">CANoe/HIL<br />通信テスト専門</div>
                    </div>
                </div>

                {/* バックトゥバック */}
                <h3>
                    3.6 バックトゥバックテスト（Back-to-Back Testing）<span className="klevel"
                        >K2/K3</span
                    >
                </h3>
                <div className="callout info">
                    <div className="callout-title"><span className="callout-icon">🔄</span>定義</div>
                    同一の入力を<strong>2つの異なる実装</strong>に与えて出力を比較することで正しさを検証するテスト技法。ISO
                    26262でASIL C（推奨+）、<strong>ASIL D（強く推奨++）</strong>。
                </div>

                <Mermaid chart={DIAGRAMS[""] || ""} />

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>適用パターン</th>
                                <th>比較対象</th>
                                <th>目的</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">MiL vs SiL</td>
                                <td>シミュレーションモデル ⟷ 自動生成Cコード</td>
                                <td>コード自動生成の正しさを検証</td>
                            </tr>
                            <tr>
                                <td className="td-strong">SiL vs HiL</td>
                                <td>PC上のSWテスト ⟷ 実ECUのHiLテスト</td>
                                <td>HW固有の問題を特定</td>
                            </tr>
                            <tr>
                                <td className="td-strong">旧SW vs 新SW</td>
                                <td>旧バージョン ⟷ リファクタリング後の新バージョン</td>
                                <td>機能回帰（デグレード）の検出</td>
                            </tr>
                            <tr>
                                <td className="td-strong">A社MCU vs B社MCU</td>
                                <td>異なるマイコンへのポーティング比較</td>
                                <td>コンパイラ・HW依存バグの検出</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="callout warning">
                    <div className="callout-title">
                        <span className="callout-icon">⚠️</span>バックトゥバックテスト実施上の注意点
                    </div>
                    <ul style={{margin: "0", paddingLeft: "1.25rem"}}>
                        <li>
                            <strong>許容誤差の事前定義が必須</strong
                            >：浮動小数点演算の丸め誤差により完全一致しない場合があります
                        </li>
                        <li>
                            <strong>テストオラクルの確保</strong
                            >：差異発生時にどちらが「正しい」かを判断する基準が必要
                        </li>
                        <li>
                            <strong>リアルタイム性は別途確認</strong
                            >：出力値の一致確認に加え、実行時間制約も別で検証する
                        </li>
                    </ul>
                </div>

                {/* XiL比較表 */}
                <h3>3.7 XiL環境 総合比較表<span className="klevel">K2</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>環境</th>
                                <th>実物コンポーネント</th>
                                <th>実施タイミング</th>
                                <th>コスト</th>
                                <th>主な検証内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-green"><strong>MiL</strong></td>
                                <td>なし（全てモデル）</td>
                                <td>最初期（設計初期）</td>
                                <td className="td-green">最低</td>
                                <td>制御アルゴリズムの正しさ</td>
                            </tr>
                            <tr>
                                <td className="td-cyan"><strong>SiL</strong></td>
                                <td>ソフトウェア（コード）</td>
                                <td>開発中期（コーディング後）</td>
                                <td className="td-cyan">低〜中</td>
                                <td>コードの正しさ・SW機能テスト</td>
                            </tr>
                            <tr>
                                <td className="td-amber"><strong>PiL</strong></td>
                                <td>プロセッサ（マイコン）</td>
                                <td>コード生成後</td>
                                <td className="td-amber">中</td>
                                <td>タイミング・プロセッサ固有挙動</td>
                            </tr>
                            <tr>
                                <td className="td-red"><strong>HiL</strong> ★</td>
                                <td>ECU全体（本物のHW）</td>
                                <td>試作ECU完成後（量産前）</td>
                                <td className="td-red">高</td>
                                <td>ECU動作・通信・故障注入</td>
                            </tr>
                            <tr>
                                <td style={{color: "var(--color-accent-purple)", fontWeight: "700"}}>
                                    <strong>ViL</strong>
                                </td>
                                <td>実車両</td>
                                <td>最終検証（開発終盤）</td>
                                <td style={{color: "var(--color-accent-purple)"}}>最高</td>
                                <td>実車両での総合動作確認</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ==================== CHAPTER 4: TEST TECHNIQUES ==================== */}
            <section className="section" id="techniques">
                <div className="chapter-header">
                    <div className="chapter-num">Ch.<br />4</div>
                    <div>
                        <h2>自動車特有の静的・動的テスト技法<span className="klevel">K2/K3</span></h2>
                        <p style={{margin: "0", color: "var(--color-text-muted)", fontSize: "0.88rem"}}>
                            Automotive-specific Static and Dynamic Test Techniques
                        </p>
                    </div>
                </div>

                {/* 静的テスト */}
                <h3>4.1 静的テスト技法（Static Test Techniques）</h3>
                <h4>4.1.1 要件レビュー — 自動車特有の観点</h4>
                <p>
                    自動車プロジェクトの要件レビューでは、通常のソフトウェア開発に加えて、以下の自動車特有の観点が求められます。
                </p>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>レビュー観点</th>
                                <th>確認内容</th>
                                <th>根拠規格</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">ASILの適切性</td>
                                <td>
                                    各機能に割り当てられたASILレベルがHARAの結果と一致しているか
                                </td>
                                <td>ISO 26262 Part 3</td>
                            </tr>
                            <tr>
                                <td className="td-strong">テスト可能性（Testability）</td>
                                <td>
                                    要件が「はい/いいえ」で判定できる形式（定量的）で記述されているか
                                </td>
                                <td>ASPICE SWE.1</td>
                            </tr>
                            <tr>
                                <td className="td-strong">トレーサビリティ</td>
                                <td>
                                    システム要件→SW要件→テストケースの双方向トレースが確立されているか
                                </td>
                                <td>ASPICE SWE.4/5/6</td>
                            </tr>
                            <tr>
                                <td className="td-strong">フェールセーフ要件</td>
                                <td>異常発生時の縮退運転仕様が漏れなく定義されているか</td>
                                <td>ISO 26262 Part 4</td>
                            </tr>
                            <tr>
                                <td className="td-strong">タイミング要件</td>
                                <td>制御周期・応答時間が数値で明記されているか</td>
                                <td>AUTOSAR仕様</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="compare-grid">
                    <div className="compare-box good">
                        <div className="compare-label">✅ 良い要件記述（テスト可能）</div>
                        <p style={{fontSize: "0.9rem", color: "var(--color-text-secondary)", margin: "0"}}>
                            「ABSは、車輪がロックしてから<strong>50ms以内</strong>にブレーキ圧を解放しなければならない。車速が<strong>8km/h以上</strong>の場合に有効。」
                        </p>
                    </div>
                    <div className="compare-box bad">
                        <div className="compare-label">❌ 悪い要件記述（テスト不可）</div>
                        <p style={{fontSize: "0.9rem", color: "var(--color-text-secondary)", margin: "0"}}>
                            「ABSは<strong>適切な速度</strong>でブレーキ圧を解放しなければならない。走行中に<strong>必要に応じて</strong>有効になること。」（曖昧・測定不可）
                        </p>
                    </div>
                </div>

                <h4>4.1.2 MISRA-Cコードレビュー（静的解析）</h4>
                <div className="arch-layers">
                    <div className="arch-layer red">
                        <div className="arch-layer-title">禁止（Mandatory）</div>
                        <div className="arch-layer-desc">
                            goto文・再帰関数・malloc/free・未定義動作を引き起こす型変換
                        </div>
                    </div>
                    <div className="arch-layer amber">
                        <div className="arch-layer-title">要求（Required）</div>
                        <div className="arch-layer-desc">
                            正当な理由なしの違反は不可。明示的な型キャスト・範囲チェックの実装
                        </div>
                    </div>
                    <div className="arch-layer green">
                        <div className="arch-layer-title">推奨（Advisory）</div>
                        <div className="arch-layer-desc">
                            可能な限り準拠推奨。コーディング一貫性・保守性向上
                        </div>
                    </div>
                </div>

                {/* 動的テスト */}
                <h3>4.2 動的テスト技法（Dynamic Test Techniques）</h3>
                <h4>4.2.1 CTFL技法の自動車への適用 <span className="klevel">K2</span></h4>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>CTFL技法</th>
                                <th>自動車E/Eシステムへの適用例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">同値分割（EP）</td>
                                <td>
                                    エンジン回転数パーティション設定。アイドリング（700〜900rpm）・通常（1500〜5000rpm）・レッドゾーン近傍（5001〜8000rpm）の各代表値でテスト
                                </td>
                            </tr>
                            <tr>
                                <td className="td-strong">境界値分析（BVA）</td>
                                <td>
                                    ABS作動開始速度テスト。閾値が10km/hの場合、境界値 9, 10, 11
                                    km/hのそれぞれでABS動作有無を検証
                                </td>
                            </tr>
                            <tr>
                                <td className="td-strong">状態遷移テスト</td>
                                <td>
                                    EVバッテリーのステートマシンテスト。充電中→満充電→走行中→低残量警告→緊急シャットダウンの全遷移を検証
                                </td>
                            </tr>
                            <tr>
                                <td className="td-strong">デシジョンテーブル</td>
                                <td>
                                    AEB（自動緊急ブレーキ）の作動判断。「障害物検知
                                    ON/OFF」×「車速閾値超過 ON/OFF」×「ブレーキ踏み込み
                                    ON/OFF」の論理組み合わせを全網羅
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* MC/DC — 最重要 */}
                <h3>
                    4.3 MC/DC（修正条件判定カバレッジ）— 試験最頻出！<span className="klevel">K3</span>
                </h3>
                <div className="callout info">
                    <div className="callout-title"><span className="callout-icon">🔑</span>MC/DCの定義</div>
                    <strong>Modified Condition/Decision Coverage（修正条件判定網羅）</strong
                    >：各条件（Condition）が<em>他の条件を固定した状態で</em>、独立して判定（Decision）全体の結果を変化させられることを証明するカバレッジ基準。<br />
                    <strong>ISO 26262 Part 6: ASIL C（推奨+）、ASIL D（強く推奨++）</strong>
                </div>

                <h4>MC/DCが必要な理由（ブランチカバレッジとの違い）</h4>
                <div className="compare-grid">
                    <div className="compare-box bad">
                        <div className="compare-label">❌ ブランチカバレッジだけでは不十分</div>
                        <div className="code-block" data-lang="C">
                            <div>
                                <span className="code-comment"
                                    >/* if (A &amp;&amp; B &amp;&amp; C) の判定において */</span
                                >
                            </div>
                            <div>
                                <span className="code-keyword">if</span> (A &amp;&amp; B &amp;&amp; C) &#123;
                            </div>
                            <div style={{paddingLeft: "1.5em"}}>
                                safety_function(); <span className="code-comment">/* 安全機能 */</span>
                            </div>
                            <div>&#125;</div>
                            <div>&nbsp;</div>
                            <div>
                                <span className="code-comment"
                                    >/* ブランチカバレッジ 2テストだけでOK:</span
                                >
                            </div>
                            <div><span className="code-comment"> * TC1: A=T,B=T,C=T → True</span></div>
                            <div><span className="code-comment"> * TC2: A=F,B=X,C=X → False</span></div>
                            <div>
                                <span className="code-comment">
                                    * ⚠️ BがCが結果に本当に影響するか不明！*/</span
                                >
                            </div>
                        </div>
                    </div>
                    <div className="compare-box good">
                        <div className="compare-label">✅ MC/DCで各条件の独立影響を証明</div>
                        <div className="code-block" data-lang="C">
                            <div>
                                <span className="code-comment"
                                    >/* MC/DC: 各条件が独立して結果を変える</span
                                >
                            </div>
                            <div>
                                <span className="code-comment"> * ことをN+1=4ケースで証明 */</span>
                            </div>
                            <div>&nbsp;</div>
                            <div>
                                <span className="code-comment"
                                    >/* TC1(基準): A=T,B=T,C=T → True */</span
                                >
                            </div>
                            <div>
                                <span className="code-comment"
                                    >/* TC2: A=F,B=T,C=T → False ← A独立影響 */</span
                                >
                            </div>
                            <div>
                                <span className="code-comment"
                                    >/* TC3: A=T,B=F,C=T → False ← B独立影響 */</span
                                >
                            </div>
                            <div>
                                <span className="code-comment"
                                    >/* TC4: A=T,B=T,C=F → False ← C独立影響 */</span
                                >
                            </div>
                            <div>&nbsp;</div>
                            <div>
                                <span className="code-comment"
                                    >/* ✅ 全条件が結果に独立して影響すること</span
                                >
                            </div>
                            <div>
                                <span className="code-comment"> * を4テストケースで証明完了！ */</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h4>MC/DC 真理値表（if (A &amp;&amp; B &amp;&amp; C) の完全解説）</h4>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>テストケース</th>
                                <th>条件 A</th>
                                <th>条件 B</th>
                                <th>条件 C</th>
                                <th>判定結果</th>
                                <th>MC/DCで証明する独立影響</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-cyan"><strong>TC1</strong>（基準）</td>
                                <td className="td-green">T</td>
                                <td className="td-green">T</td>
                                <td className="td-green">T</td>
                                <td className="td-green"><strong>True</strong></td>
                                <td className="td-dim">ベースケース</td>
                            </tr>
                            <tr style={{background: "rgba(0, 255, 136, 0.04)"}}>
                                <td className="td-cyan"><strong>TC2</strong></td>
                                <td className="td-red"><strong>F</strong></td>
                                <td className="td-green">T</td>
                                <td className="td-green">T</td>
                                <td className="td-red"><strong>False</strong></td>
                                <td className="td-green">
                                    ✅ <strong>条件Aの独立影響</strong>（TC1比でAのみ変化→結果反転）
                                </td>
                            </tr>
                            <tr style={{background: "rgba(0, 212, 255, 0.04)"}}>
                                <td className="td-cyan"><strong>TC3</strong></td>
                                <td className="td-green">T</td>
                                <td className="td-red"><strong>F</strong></td>
                                <td className="td-green">T</td>
                                <td className="td-red"><strong>False</strong></td>
                                <td className="td-green">
                                    ✅ <strong>条件Bの独立影響</strong>（TC1比でBのみ変化→結果反転）
                                </td>
                            </tr>
                            <tr style={{background: "rgba(255, 180, 0, 0.04)"}}>
                                <td className="td-cyan"><strong>TC4</strong></td>
                                <td className="td-green">T</td>
                                <td className="td-green">T</td>
                                <td className="td-red"><strong>F</strong></td>
                                <td className="td-red"><strong>False</strong></td>
                                <td className="td-green">
                                    ✅ <strong>条件Cの独立影響</strong>（TC1比でCのみ変化→結果反転）
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="alert green">
                    <strong>MC/DCの効率性</strong>：N個の条件がある場合、全論理組み合わせは 2<sup
                        >N</sup
                    >
                    通りですが、MC/DCでは
                    <strong>最低 N+1 テストケース</strong>で達成できます。3条件なら
                    2³=8通りのところ、わずか<strong>4ケース</strong>で同等以上の安全性保証が可能です。（条件数
                    N &gt; 3 の場合もN+1ケースが基本最小値）
                </div>

                {/* 故障注入テスト */}
                <h3>4.4 故障注入テスト（Fault Injection Testing）<span className="klevel">K2</span></h3>
                <div className="callout info">
                    <div className="callout-title"><span className="callout-icon">💉</span>定義</div>
                    システムに<strong>意図的にフォールト・エラーを注入</strong>し、安全機構（フェールセーフ・縮退運転）が設計通りに機能してシステムが安全な状態を維持できるかを検証するテスト手法。<strong
                        >ISO 26262: ASIL B〜Dで強く推奨（++）</strong
                    >。
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>故障注入の種類</th>
                                <th>手法</th>
                                <th>目的</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">ソフトウェア故障注入</td>
                                <td>
                                    メモリビット反転・変数への異常値上書き・APIエラーリターン挿入
                                </td>
                                <td>ソフトウェアの例外処理・エラー回復能力の検証</td>
                            </tr>
                            <tr>
                                <td className="td-strong">ハードウェア故障注入</td>
                                <td>
                                    端子ショート/オープン・電源低電圧/過電圧・クロック異常・EMノイズ
                                </td>
                                <td>HW異常時のフェールセーフ動作確認</td>
                            </tr>
                            <tr>
                                <td className="td-strong">通信故障注入</td>
                                <td>
                                    エラーフレーム強制発生・チェックサムエラー・カウンター重複・パケット欠損
                                </td>
                                <td>通信断絶時の安全動作確認（CANバスオフ等）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>HiL環境での代表的な故障注入シナリオ</h4>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>シナリオ</th>
                                <th>故障注入手法</th>
                                <th>期待する安全動作（セーフステート）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">センサー断線</td>
                                <td>センサー配線をGNDショートまたは固定値に設定</td>
                                <td>
                                    異常検知→警告灯点灯→バックアップセンサー切り替えor縮退モード移行
                                </td>
                            </tr>
                            <tr>
                                <td className="td-strong">電源瞬断（低電圧）</td>
                                <td>定格電圧以下（例：7V）の印加またはmsオーダーの瞬断</td>
                                <td>低電圧検知→EEPROMへログ保存→安全シャットダウンプロセス実行</td>
                            </tr>
                            <tr>
                                <td className="td-strong">CANバスオフ</td>
                                <td>CANバスに負荷をかけてバスオフ状態を誘発</td>
                                <td>
                                    通信断判定→直前の安全な制御出力を維持or即座にフェールセーフモードへ
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* インターフェーステスト */}
                <h3>4.5 車載通信インターフェーステスト<span className="klevel">K2</span></h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>プロトコル</th>
                                <th>主なテスト観点</th>
                                <th>主な用途</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong">
                                    CAN<br /><span
                                        style={{fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                        >Controller Area Network</span
                                    >
                                </td>
                                <td>
                                    メッセージID・DLC・データ正しさ、タイムアウト・バスオフ時の復帰処理、バス負荷100%時の優先度制御
                                </td>
                                <td>ボディ・シャシー・パワートレイン系全般</td>
                            </tr>
                            <tr>
                                <td className="td-strong">
                                    LIN<br /><span
                                        style={{fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                        >Local Interconnect Network</span
                                    >
                                </td>
                                <td>
                                    マスター/スレーブ通信シーケンス・タイミング、スリープ/ウェイクアップ挙動
                                </td>
                                <td>ウィンドウ・ミラー・シート制御など低コスト通信</td>
                            </tr>
                            <tr>
                                <td className="td-strong">FlexRay</td>
                                <td>
                                    タイムスロット管理・同期機能、通信遅延・データ欠損時のセーフティ挙動
                                </td>
                                <td>X-by-Wire（ステア/ブレーキバイワイヤ）など高信頼性制御</td>
                            </tr>
                            <tr>
                                <td className="td-strong">Automotive Ethernet</td>
                                <td>
                                    SOME/IP・DoIPプロトコル準拠、パケットロス・ジッター・遅延特性
                                </td>
                                <td>ADAS・カメラ映像伝送・OTA更新</td>
                            </tr>
                            <tr>
                                <td className="td-strong">
                                    UDS診断<br /><span
                                        style={{fontSize: "0.78rem", color: "var(--color-text-muted)"}}
                                        >ISO 14229</span
                                    >
                                </td>
                                <td>
                                    DTC読み出し/消去・セッション遷移・セキュリティアクセス・フラッシュ書き込み
                                </td>
                                <td>市場故障診断・ECUソフトウェア更新</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* テストピラミッド */}
                <h3>4.6 自動車ソフトウェアテストのピラミッド</h3>
                <p>
                    テストコストと実施タイミングの観点から、テスト活動はピラミッド型に配置されます。
                </p>
                <div className="pyramid">
                    <div className="pyr-level pyr-l1">
                        MiL / SiL — ユニット・コンポーネントテスト（最多・最速・最低コスト）
                    </div>
                    <div className="pyr-level pyr-l2">
                        SiL / PiL — 統合テスト（SW統合・インターフェーステスト）
                    </div>
                    <div className="pyr-level pyr-l3">
                        HiL — システムテスト（実ECU・故障注入・通信テスト）
                    </div>
                    <div className="pyr-level pyr-l4">ViL — 実車両テスト（最少・最遅・最高コスト）</div>
                </div>
            </section>

            {/* ==================== EXAM TIPS ==================== */}
            <section className="section" id="exam">
                <div className="chapter-header">
                    <div className="chapter-num">試験<br />対策</div>
                    <h2>サンプル問題・試験対策チェックリスト</h2>
                </div>

                <h3>必ず覚える重要概念チェックリスト</h3>
                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>分野</th>
                                <th>チェック項目</th>
                                <th>重要度</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-strong" rowSpan={4}>ASPICE</td>
                                <td>能力レベル0〜5の各名称と定義</td>
                                <td className="td-red">★★★★★</td>
                            </tr>
                            <tr>
                                <td>レベル2（Managed）がOEMの最低要件であること</td>
                                <td className="td-red">★★★★★</td>
                            </tr>
                            <tr>
                                <td>SWE.4〜SWE.6がテスターの主要担当プロセスであること</td>
                                <td className="td-amber">★★★★☆</td>
                            </tr>
                            <tr>
                                <td>ASPICEのVモデルとISTQBテストレベルの対応</td>
                                <td className="td-amber">★★★★☆</td>
                            </tr>
                            <tr>
                                <td className="td-strong" rowSpan={5}>ISO 26262</td>
                                <td>ASIL A〜D・QMの定義と事例</td>
                                <td className="td-red">★★★★★</td>
                            </tr>
                            <tr>
                                <td>HARA（S・E・C）の3要素でASILが決まること</td>
                                <td className="td-red">★★★★★</td>
                            </tr>
                            <tr>
                                <td>MC/DCがASIL C（+）・ASIL D（++）で要求されること</td>
                                <td className="td-red">★★★★★</td>
                            </tr>
                            <tr>
                                <td>バックトゥバックテストがASIL D（++）で要求されること</td>
                                <td className="td-red">★★★★★</td>
                            </tr>
                            <tr>
                                <td>メソッドテーブルの++/+/o/--の意味と代表的な技法の配置</td>
                                <td className="td-amber">★★★★☆</td>
                            </tr>
                            <tr>
                                <td className="td-strong" rowSpan={3}>AUTOSAR</td>
                                <td>4層構造（App / RTE / BSW / MCAL）の名称と役割</td>
                                <td className="td-amber">★★★★☆</td>
                            </tr>
                            <tr>
                                <td>Classic vs Adaptive AUTOSARの違い</td>
                                <td className="td-cyan">★★★☆☆</td>
                            </tr>
                            <tr>
                                <td>MISRA-Cの目的（goto・malloc・再帰の禁止）</td>
                                <td className="td-cyan">★★★☆☆</td>
                            </tr>
                            <tr>
                                <td className="td-strong" rowSpan={4}>XiL環境</td>
                                <td>MiL/SiL/PiL/HiL/ViLの各定義と使い分け</td>
                                <td className="td-red">★★★★★</td>
                            </tr>
                            <tr>
                                <td>HiLの構成（実ECU+リアルタイムシミュレーター）</td>
                                <td className="td-red">★★★★★</td>
                            </tr>
                            <tr>
                                <td>バックトゥバックテストの定義と典型パターン</td>
                                <td className="td-amber">★★★★☆</td>
                            </tr>
                            <tr>
                                <td>
                                    コスト・現実性・実施タイミングの順序（MiL &lt; SiL &lt; PiL &lt;
                                    HiL &lt; ViL）
                                </td>
                                <td className="td-amber">★★★★☆</td>
                            </tr>
                            <tr>
                                <td className="td-strong" rowSpan={3}>テスト技法</td>
                                <td>MC/DCの定義（各条件の独立影響の証明）</td>
                                <td className="td-red">★★★★★</td>
                            </tr>
                            <tr>
                                <td>MC/DCのテストケース数：N条件に対してN+1個</td>
                                <td className="td-amber">★★★★☆</td>
                            </tr>
                            <tr>
                                <td>故障注入テストの目的とISO 26262での位置づけ</td>
                                <td className="td-cyan">★★★☆☆</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Sample Q1 */}
                <h3>サンプル問題と解説</h3>

                <div className="qa-block">
                    <div className="qa-q">
                        <span className="qn">Q1</span>（K2 / Chapter 2.1 ASPICE）<br />Automotive SPICE
                        の能力レベル「2（Managed / 管理済み）」の正しい説明はどれか？
                    </div>
                    <div className="qa-opts">
                        <div className="qa-opt">
                            A) プロセスが全く実施されておらず目的が達成されていない
                        </div>
                        <div className="qa-opt">
                            B) プロセスが実施され目的は達成されているが、計画・管理は不十分
                        </div>
                        <div className="qa-opt correct">
                            C) プロセスが計画・監視・調整され、多くの自動車OEMが最低限要求する水準
                        </div>
                        <div className="qa-opt">
                            D) 定量的データによってプロセスを統計的に管理・制御している
                        </div>
                    </div>
                    <div className="qa-answer">
                        <strong>正解：C</strong><br />
                        A) レベル0（Incomplete）、B) レベル1（Performed）、<strong
                            >C) レベル2（Managed）← 正解</strong
                        >、D) レベル4（Predictable）。
                        レベル2は「プロセスの計画・監視・調整・成果物管理が行われている」状態で、BMW・VW・Mercedes等が要求する最低基準です。
                    </div>
                </div>

                <div className="qa-block">
                    <div className="qa-q">
                        <span className="qn">Q2</span>（K2 / Chapter 2.2 ISO 26262）<br />走行中にパワーステアリング（EPS）システムが突然機能を失った場合、HARA
                        の3要素（S・E・C）として最も適切な評価と対応するASILはどれか？
                    </div>
                    <div className="qa-opts">
                        <div className="qa-opt">A) S=1, E=2, C=1 → ASIL A</div>
                        <div className="qa-opt correct">B) S=3, E=4, C=3 → ASIL D</div>
                        <div className="qa-opt">C) S=2, E=1, C=2 → ASIL A</div>
                        <div className="qa-opt">D) S=0, E=4, C=0 → QM</div>
                    </div>
                    <div className="qa-answer">
                        <strong>正解：B（ASIL D）</strong><br />
                        S=3（致命的：車両制御不能→死亡事故の可能性）、E=4（高頻度：走行中は常時発生しうる）、C=3（制御困難：高速走行中のEPS喪失はドライバーが回避困難）。
                        S3×E4×C3の組み合わせ =
                        <strong>ASIL D（最も厳格な安全要件）</strong>。EPS・AEB等はASIL
                        Dの典型例として試験頻出！
                    </div>
                </div>

                <div className="qa-block">
                    <div className="qa-q">
                        <span className="qn">Q3</span>（K1 / Chapter 3 XiL）<br />HiL（Hardware-in-the-Loop）テスト環境の正しい説明はどれか？
                    </div>
                    <div className="qa-opts">
                        <div className="qa-opt">
                            A) 全ての部品をモデルで置き換えてPCシミュレーション上でテストする
                        </div>
                        <div className="qa-opt correct">
                            B)
                            実際のECU（ハードウェア）をリアルタイムシミュレーターに接続してテストする
                        </div>
                        <div className="qa-opt">
                            C) ソフトウェアのみをPC上でコンパイル・実行してテストする
                        </div>
                        <div className="qa-opt">D) 完成した実際の車両でテストドライブを実施する</div>
                    </div>
                    <div className="qa-answer">
                        <strong>正解：B</strong><br />
                        A) MiL（Model-in-the-Loop）の説明。C) SiL（Software-in-the-Loop）の説明。D)
                        ViL（Vehicle-in-the-Loop）の説明。<br />
                        <strong
                            >HiLのポイント：「実際のECU（本物のHW）」＋「仮想の車両・環境（リアルタイムシミュレーター）」</strong
                        >の組み合わせ。
                    </div>
                </div>

                <div className="qa-block">
                    <div className="qa-q">
                        <span className="qn">Q4</span>（K3 / Chapter 4 MC/DC）<br />MC/DC（修正条件判定カバレッジ）に関する説明として正しいものはどれか？
                    </div>
                    <div className="qa-opts">
                        <div className="qa-opt">
                            A)
                            全ての条件のTrue/False両方をテストすれば達成できる（条件カバレッジと同等）
                        </div>
                        <div className="qa-opt correct">
                            B)
                            各条件が他の条件を固定したまま独立して判定結果を変化させることを証明する必要がある
                        </div>
                        <div className="qa-opt">
                            C) ISO 26262のどのASILレベルでも推奨されていない特殊な技法である
                        </div>
                        <div className="qa-opt">
                            D) MC/DCはブランチカバレッジより要件が緩い（少ないケースで達成できる）
                        </div>
                    </div>
                    <div className="qa-answer">
                        <strong>正解：B</strong><br />
                        A) 誤り：条件カバレッジより厳格な要件がある。<strong
                            >B)
                            正しい：「独立影響（独立して判定結果を変える）」の証明がMC/DCの核心</strong
                        >。 C) 誤り：ASIL C（推奨+）・ASIL D（強く推奨++）で要求される。D)
                        誤り：ブランチカバレッジより厳格。N条件に対して最低N+1テストケースが必要。
                    </div>
                </div>

                <div className="qa-block">
                    <div className="qa-q">
                        <span className="qn">Q5</span>（K2 / Chapter 2.4 比較）<br />Automotive
                        SPICE（ASPICE）とISO 26262の主な違いを最も正確に説明しているものはどれか？
                    </div>
                    <div className="qa-opts">
                        <div className="qa-opt">
                            A) ASPICEは機能安全に焦点を当て、ISO
                            26262はプロセス品質に焦点を当てている
                        </div>
                        <div className="qa-opt correct">
                            B) ASPICEは「どのように開発するか」（プロセス評価）に焦点を当て、ISO
                            26262は「どれだけ安全か」（機能安全）に焦点を当てている
                        </div>
                        <div className="qa-opt">
                            C) どちらも同じ目標を持ち、自動車業界では同等のものとして扱われている
                        </div>
                        <div className="qa-opt">
                            D) ASPICEはソフトウェアのみを対象とし、ISO
                            26262はハードウェアのみを対象とする
                        </div>
                    </div>
                    <div className="qa-answer">
                        <strong>正解：B</strong><br />
                        A) 説明が逆。C)
                        誤り：目的・評価方法・対象が異なる（相補的な関係だが同等ではない）。D)
                        誤り：ISO 26262はHW+SW両方が対象。<br />
                        <strong
                            >覚え方：ASPICE = Process（プロセス） ／ ISO 26262 = Safety（安全性） ／
                            AUTOSAR = Architecture（アーキテクチャ）</strong
                        >
                    </div>
                </div>

                <div className="qa-block">
                    <div className="qa-q">
                        <span className="qn">Q6</span>（K3 / Chapter 3 バックトゥバックテスト）<br />バックトゥバックテスト（Back-to-Back
                        Testing）の最も典型的な使用場面はどれか？
                    </div>
                    <div className="qa-opts">
                        <div className="qa-opt">
                            A) ユーザーが実際に操作してシステムの使いやすさを評価する
                        </div>
                        <div className="qa-opt correct">
                            B)
                            MiLモデルと自動生成されたSiLコードに同じ入力を与え、出力を比較してコード生成の正しさを検証する
                        </div>
                        <div className="qa-opt">
                            C)
                            チームメンバー間でコードレビューを実施しコーディング規約への準拠を確認する
                        </div>
                        <div className="qa-opt">
                            D) 本番環境でA/Bテストを実施してどちらのバージョンが優れているか比較する
                        </div>
                    </div>
                    <div className="qa-answer">
                        <strong>正解：B</strong><br />
                        A) ユーザビリティテスト。C) 静的テスト（コードレビュー）。D)
                        A/Bテスト（プロダクション比較）。<br />
                        <strong
                            >バックトゥバックテストのポイント：「2つの異なる実装」に「同じ入力」を与えて「出力を比較」する。ISO
                            26262 ASIL C（+）・ASIL D（++）で推奨。</strong
                        >
                    </div>
                </div>
            </section>

            {/* ==================== REFERENCES ==================== */}
            <section className="section" id="refs">
                <div className="chapter-header">
                    <div className="chapter-num">参照<br />URL</div>
                    <h2>参照URL一覧（カテゴリ別）</h2>
                </div>

                <h3>🏛️ ISTQB® 公式リソース</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-cat">ISTQB 公式</div>
                        <div className="ref-title">CT-AuT 公式認定ページ</div>
                        <a
                            className="ref-url"
                            href="https://istqb.org/certifications/certified-tester-automotive-software-tester-ct-aut/"
                            target="_blank"
                            >istqb.org/certifications/certified-tester-automotive-software-tester-ct-aut/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ISTQB 公式</div>
                        <div className="ref-title">CT-AuT シラバス v2.1.1（最新版）</div>
                        <a
                            className="ref-url"
                            href="https://istqb.org/?sdm_process_download=1&download_id=3615"
                            target="_blank"
                            >istqb.org — シラバス PDF ダウンロード</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ISTQB 公式</div>
                        <div className="ref-title">サンプル試験問題（Questions）</div>
                        <a
                            className="ref-url"
                            href="https://istqb.org/?sdm_process_download=1&download_id=3616"
                            target="_blank"
                            >istqb.org — サンプル問題 PDF</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ISTQB 公式</div>
                        <div className="ref-title">サンプル試験解答（Answers）</div>
                        <a
                            className="ref-url"
                            href="https://istqb.org/?sdm_process_download=1&download_id=3617"
                            target="_blank"
                            >istqb.org — サンプル解答 PDF</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ISTQB 公式</div>
                        <div className="ref-title">ISTQB グロッサリー（用語集）</div>
                        <a
                            className="ref-url"
                            href="https://glossary.istqb.org/en_US/search?term="
                            target="_blank"
                            >glossary.istqb.org</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ISTQB 公式</div>
                        <div className="ref-title">CTFL v4.0（前提資格）</div>
                        <a
                            className="ref-url"
                            href="https://istqb.org/certifications/certified-tester-foundation-level/"
                            target="_blank"
                            >istqb.org/certifications/certified-tester-foundation-level/</a
                        >
                    </div>
                </div>

                <h3>📢 試験プロバイダー</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-cat">試験プロバイダー</div>
                        <div className="ref-title">iSQI — CT-AuT 試験情報</div>
                        <a
                            className="ref-url"
                            href="https://isqi.org/ISTQB-Certified-Tester-Automotive-Software-Tester-CT-AuT"
                            target="_blank"
                            >isqi.org — CT-AuT 詳細</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">試験プロバイダー</div>
                        <div className="ref-title">ASTQB（米国 ISTQB — CT-AuT）</div>
                        <a
                            className="ref-url"
                            href="https://astqb.org/certifications/automotive-software-tester-certification/"
                            target="_blank"
                            >astqb.org — CT-AuT</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">学習リソース</div>
                        <div className="ref-title">ISTQB Guru — CT-AuT 解説</div>
                        <a
                            className="ref-url"
                            href="https://www.istqb.guru/automotive-software-tester/"
                            target="_blank"
                            >istqb.guru/automotive-software-tester/</a
                        >
                    </div>
                </div>

                <h3>📐 ISO 26262 · 機能安全</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-cat">ISO 26262</div>
                        <div className="ref-title">ISO 26262 公式ページ（ISO）</div>
                        <a
                            className="ref-url"
                            href="https://www.iso.org/standard/68383.html"
                            target="_blank"
                            >iso.org/standard/68383.html</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ISO 26262</div>
                        <div className="ref-title">LDRA: ISO 26262 と ASPICE 解説</div>
                        <a className="ref-url" href="https://ldra.com/iso-26262/" target="_blank"
                            >ldra.com/iso-26262/</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ISO 26262</div>
                        <div className="ref-title">Parasoft: ISO 26262 ソフトウェア準拠</div>
                        <a
                            className="ref-url"
                            href="https://www.parasoft.com/learning-center/iso-26262/what-is/"
                            target="_blank"
                            >parasoft.com — ISO 26262</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ISO 26262 / ASPICE</div>
                        <div className="ref-title">Lemberg Solutions: ASPICE と ISO 26262</div>
                        <a
                            className="ref-url"
                            href="https://lembergsolutions.com/blog/impact-automotive-spice-and-iso-26262-your-engineering-process"
                            target="_blank"
                            >lembergsolutions.com — ASPICE & ISO 26262</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ISO 26262 / ASPICE</div>
                        <div className="ref-title">QT.io: ASPICE vs ISO 26262 比較</div>
                        <a
                            className="ref-url"
                            href="https://www.qt.io/quality-assurance/blog/navigating-automotive-software-compliance"
                            target="_blank"
                            >qt.io — Automotive Compliance</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">2025年最新動向</div>
                        <div className="ref-title">Medium: ASPICE 4.0 · ISO 26262 · 2025年</div>
                        <a
                            className="ref-url"
                            href="https://medium.com/@j.parganiha/automotive-safety-2025-integrating-aspice-4-0-iso-26262-cybersecurity-1381c190d8b5"
                            target="_blank"
                            >medium.com — Automotive Safety 2025</a
                        >
                    </div>
                </div>

                <h3>🔧 AUTOSAR · MISRA 関連</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-cat">AUTOSAR</div>
                        <div className="ref-title">AUTOSAR 公式サイト</div>
                        <a className="ref-url" href="https://www.autosar.org/" target="_blank"
                            >autosar.org</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">AUTOSAR</div>
                        <div className="ref-title">Synopsys: MISRA-AUTOSAR 解説</div>
                        <a
                            className="ref-url"
                            href="https://www.synopsys.com/automotive/misra-autosar-standards.html"
                            target="_blank"
                            >synopsys.com — MISRA-AUTOSAR</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">MISRA</div>
                        <div className="ref-title">MISRA 公式サイト</div>
                        <a className="ref-url" href="https://www.misra.org.uk/" target="_blank"
                            >misra.org.uk</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">AUTOSAR テスト</div>
                        <div className="ref-title">QA Systems: AUTOSAR OS テスト解説</div>
                        <a
                            className="ref-url"
                            href="https://www.qa-systems.com/blog/autosar-os-test-and-validation-iso-26262/"
                            target="_blank"
                            >qa-systems.com — AUTOSAR テスト</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">AUTOSAR テスト</div>
                        <div className="ref-title">Sasken: AUTOSAR時代のテスト</div>
                        <a
                            className="ref-url"
                            href="https://blog.sasken.com/testing-automotive-product-engineering-in-the-autosar-age"
                            target="_blank"
                            >sasken.com — AUTOSAR テスト</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">MISRA / AUTOSAR</div>
                        <div className="ref-title">Black Duck: MISRA・AUTOSAR 準拠手順</div>
                        <a
                            className="ref-url"
                            href="https://www.blackduck.com/blog/misra-autosar-compliance-steps.html"
                            target="_blank"
                            >blackduck.com — MISRA AUTOSAR</a
                        >
                    </div>
                </div>

                <h3>🔬 XiL 仮想テスト環境</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-cat">HiL テスト</div>
                        <div className="ref-title">Engineering.com: HIL テスト解説</div>
                        <a
                            className="ref-url"
                            href="https://www.engineering.com/how-is-hil-testing-used-in-automotive-engineering/"
                            target="_blank"
                            >engineering.com — HIL テスト</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">XiL 全体</div>
                        <div className="ref-title">NashTech: MIL・SIL・PIL・HIL 解説</div>
                        <a
                            className="ref-url"
                            href="https://blog.nashtechglobal.com/understanding-the-testing-environments-in-automotive-development-mil-sil-pil-and-hil/"
                            target="_blank"
                            >nashtechglobal.com — XiL 解説</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">SiL テスト</div>
                        <div className="ref-title">MDPI: SiL テスト可能性の評価（2024）</div>
                        <a
                            className="ref-url"
                            href="https://www.mdpi.com/2624-8921/6/2/44"
                            target="_blank"
                            >mdpi.com — SiL Testing Potential</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">HIL / 故障注入</div>
                        <div className="ref-title">MDPI: HIL と故障注入テスト（2024）</div>
                        <a
                            className="ref-url"
                            href="https://www.mdpi.com/1424-8220/24/12/3733"
                            target="_blank"
                            >mdpi.com — HIL Fault Injection</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">仮想テスト</div>
                        <div className="ref-title">AV Simulation: HILからSiLへの理解</div>
                        <a
                            className="ref-url"
                            href="https://www.avsimulation.com/en/from-hil-to-sil-understanding-the-stages-of-virtual-testing/"
                            target="_blank"
                            >avsimulation.com — HIL to SiL</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">自動車テスト全般</div>
                        <div className="ref-title">Atyantik: 自動車SWテスト技法ガイド</div>
                        <a
                            className="ref-url"
                            href="https://atyantik.com/automotive-software-testing-techniques-a-simple-guide/"
                            target="_blank"
                            >atyantik.com — Automotive Testing</a
                        >
                    </div>
                </div>

                <h3>📋 関連規格・ASPICE公式</h3>
                <div className="ref-grid">
                    <div className="ref-card">
                        <div className="ref-cat">ASPICE 公式</div>
                        <div className="ref-title">Automotive SPICE 公式サイト（PEG）</div>
                        <a className="ref-url" href="https://www.automotivespice.com/" target="_blank"
                            >automotivespice.com</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">テスト自動化標準</div>
                        <div className="ref-title">ASAM XIL — テスト自動化標準</div>
                        <a
                            className="ref-url"
                            href="https://www.asam.net/standards/detail/xil/"
                            target="_blank"
                            >asam.net — XIL Standard</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">ISO 規格</div>
                        <div className="ref-title">ISO 26262:2018（第2版）ISO公式</div>
                        <a
                            className="ref-url"
                            href="https://www.iso.org/standard/68383.html"
                            target="_blank"
                            >iso.org/standard/68383.html</a
                        >
                    </div>
                    <div className="ref-card">
                        <div className="ref-cat">サイバーセキュリティ</div>
                        <div className="ref-title">ISO/SAE 21434（自動車サイバーセキュリティ）</div>
                        <a
                            className="ref-url"
                            href="https://www.iso.org/standard/70918.html"
                            target="_blank"
                            >iso.org/standard/70918.html</a
                        >
                    </div>
                </div>

                {/* まとめ */}
                <div
                    style={{marginTop: "3rem", padding: "2rem", background: "linear-gradient(\n                            135deg,\n                            rgba(0, 255, 136, 0.07),\n                            rgba(0, 212, 255, 0.05)\n                        )", border: "1px solid rgba(0, 255, 136, 0.2)", borderRadius: "var(--radius-sm, 8px)"}}
                >
                    <h3 style={{color: "var(--color-accent-green)", marginTop: "0"}}>
                        🏁 自動車ソフトウェアテスター 成功の10鉄則
                    </h3>
                    <ol style={{paddingLeft: "1.5rem", color: "var(--color-text-secondary)"}}>
                        <li style={{marginBottom: "0.75rem"}}>
                            <strong style={{color: "var(--color-text-primary)"}}
                                >安全最優先（Safety First）</strong
                            >：自動車のバグは人命に直結。ISO
                            26262の「不合理なリスクの排除」を常に念頭に置く。
                        </li>
                        <li style={{marginBottom: "0.75rem"}}>
                            <strong style={{color: "var(--color-text-primary)"}}
                                >3規格を正確に使い分ける</strong
                            >：ASPICE（プロセス）・ISO
                            26262（安全）・AUTOSAR（アーキテクチャ）を混同しない。
                        </li>
                        <li style={{marginBottom: "0.75rem"}}>
                            <strong style={{color: "var(--color-text-primary)"}}
                                >ASILレベルに応じてテスト強度を調整する</strong
                            >：ASIL DにはMC/DC・故障注入を必ず適用。QMには通常QAで十分。
                        </li>
                        <li style={{marginBottom: "0.75rem"}}>
                            <strong style={{color: "var(--color-text-primary)"}}
                                >XiL仮想環境を早期から活用する</strong
                            >：MiL→SiLでシフトレフトを実現し、HiLで実ECUを最終検証する。
                        </li>
                        <li style={{marginBottom: "0.75rem"}}>
                            <strong style={{color: "var(--color-text-primary)"}}
                                >テスト証跡を徹底的に記録・保存する</strong
                            >：型式認証・ASPICEアセスメント・ISO 26262監査に耐える証跡が義務。
                        </li>
                        <li style={{marginBottom: "0.75rem"}}>
                            <strong style={{color: "var(--color-text-primary)"}}
                                >トレーサビリティを厳密に維持する</strong
                            >：要件→テスト仕様→テスト結果の双方向トレーサビリティを常に確立。
                        </li>
                        <li style={{marginBottom: "0.75rem"}}>
                            <strong style={{color: "var(--color-text-primary)"}}
                                >故障注入で安全機構を証明する</strong
                            >：「動く」だけでなく「壊れたときも安全に動く」を実証する。
                        </li>
                        <li style={{marginBottom: "0.75rem"}}>
                            <strong style={{color: "var(--color-text-primary)"}}
                                >バックトゥバックテストでコード品質を確保する</strong
                            >：MiL vs SiLの比較でコード生成の正しさを自動検証。
                        </li>
                        <li style={{marginBottom: "0.75rem"}}>
                            <strong style={{color: "var(--color-text-primary)"}}
                                >サプライチェーン間の協業を重視する</strong
                            >：OEM↔Tier1↔Tier2のインターフェースと役割分担を明確に合意。
                        </li>
                        <li style={{marginBottom: "0.75rem"}}>
                            <strong style={{color: "var(--color-text-primary)"}}
                                >最新技術トレンドを追い続ける</strong
                            >：自動運転・EV化・OTA・ISO/SAE
                            21434（サイバーセキュリティ）・AI（SOTIF）の変化に対応。
                        </li>
                    </ol>
                </div>
            </section>
        </div>
        {/* /.container */}

        {/* ==================== FOOTER ==================== */}
        <footer
            style={{textAlign: "center", padding: "2rem", borderTop: "1px solid var(--border-dim)", color: "var(--color-text-muted)", fontSize: "0.85rem", fontFamily: "var(--font-mono)", marginTop: "2rem"}}
        >
            <div style={{color: "var(--color-accent-green)", marginBottom: "0.5rem"}}>
                CT-AuT 完全ガイド 2025
            </div>
            <div>ISTQB® Certified Tester – Automotive Software Tester v2.1.1 準拠</div>
            <div style={{marginTop: "0.5rem"}}>
                ⚠️ 本ガイドはISTQB®が公認したトレーニング資料ではありません。
                公式シラバス・サンプル問題と合わせてご使用ください。
            </div>
            <div style={{marginTop: "0.5rem"}}>
                最終更新: 2025年 |
                <a
                    href="https://istqb.org/certifications/certified-tester-automotive-software-tester-ct-aut/"
                    target="_blank"
                    style={{color: "var(--color-accent-cyan)"}}
                    >公式ページ</a
                >
            </div>
        </footer>

        {/* ==================== SCRIPTS ==================== */}
        
        
        </div>
    );
}
