import React from 'react';
import Mermaid from '../../components/Mermaid';
import NavBar from './NavBar';
import './istqb-ctfl-at-chapter2-fundamental-agile-testing-principles.css';

const DIAGRAM_1 = `mindmap
  root((Chapter 2<br/>アジャイルテストの基本原則))
    2.1 伝統的テストとの違い
      2.1.1 テストと開発活動
      2.1.2 プロジェクト作業成果物
      2.1.3 テストレベル
      2.1.4 テストと構成管理
      2.1.5 独立テストの組織的選択肢
    2.2 テストの状況把握
      2.2.1 ステータス・進捗・品質の伝達
      2.2.2 リグレッションリスクの管理
    2.3 テスト担当者の役割とスキル
      2.3.1 アジャイルテスト担当者のスキル
      2.3.2 アジャイルチームでの役割`;

const DIAGRAM_2 = `graph LR
    A["テストと開発活動の統合方法<br/>(2.1.1)"] --> F["アジャイルと伝統的<br/>ライフサイクルの違い"]
    B["プロジェクトの作業成果物<br/>(2.1.2)"] --> F
    C["テストレベルの名称・<br/>開始/終了基準(2.1.3)"] --> F
    D["ツールの活用<br/>(2.1.4)"] --> F
    E["独立したテストの<br/>実現方法(2.1.5)"] --> F

    style F fill:#1c6f88,color:#fff`;

const DIAGRAM_3 = `flowchart TD
    RP["リリース計画<br/>(Release Planning)"] --> IT1
    subgraph SPRINTS["イテレーションの連続"]
        IT1["イテレーション計画 → 開発 → 統合 → テスト<br/>(Iteration 1)"] --> IT2["Iteration 2"]
        IT2 --> IT3["Iteration 3"]
        IT3 --> ITN["..."]
    end
    ITN --> REL["リリース活動<br/>(場合によりイテレーション毎にリリース)"]

    style RP fill:#1c6f88,color:#fff
    style REL fill:#1c6f88,color:#fff`;

const DIAGRAM_4 = `sequenceDiagram
    participant Dev as 開発者
    participant Test as テスト担当者
    participant Biz as ビジネスステークホルダー

    Dev->>Dev: ユーザーストーリーの機能を実装しながらユニットテストを実施
    Dev->>Test: 実装済み機能を引き渡し
    Test->>Test: 機能をテスト(自動化された検証 + 手動での妥当性確認)
    Test->>Biz: フィードバック依頼・デモ
    Biz->>Biz: 実装中の機能を試用しフィードバック<br/>(正式なテストケースの場合も、単純な試用の場合もある)
    Biz-->>Dev: 早期フィードバックを提供`;

const DIAGRAM_5 = `graph TD
    ROOT["アジャイルプロジェクトの作業成果物"] --> BIZ["① ビジネス指向の成果物"]
    ROOT --> DEV["② 開発指向の成果物"]
    ROOT --> TEST["③ テスト指向の成果物"]

    BIZ --> BIZ1["プロダクトビジョン"]
    BIZ --> BIZ2["プロダクト/リリースロードマップ"]
    BIZ --> BIZ3["プロダクトバックログ<br/>(ユーザーストーリー・受け入れ基準)"]
    BIZ --> BIZ4["リリースプラン"]

    DEV --> DEV1["スパイク(技術調査用の<br/>タイムボックス化された実験)"]
    DEV --> DEV2["設計文書<br/>(軽量なアーキテクチャメモなど)"]
    DEV --> DEV3["ユニットテストの結果"]

    TEST --> TEST1["テスト戦略・テスト計画<br/>(存在する場合は非常に簡潔)"]
    TEST --> TEST2["テストケース・チェックリスト・<br/>テストチャータ"]
    TEST --> TEST3["テスト結果・欠陥レポート"]

    style ROOT fill:#1c6f88,color:#fff
    style BIZ fill:#5b4a9c,color:#fff
    style DEV fill:#1c6f88,color:#fff
    style TEST fill:#1c8f74,color:#fff`;

const DIAGRAM_6 = `flowchart LR
    US["ユーザーストーリー"] --> UT["ユニットテスト<br/>(開発者が実施)"]
    UT --> FVT["フィーチャー検証テスト<br/>(Feature Verification Test)<br/>要件通りに動くかを確認"]
    FVT --> FVAL["フィーチャー妥当性確認テスト<br/>(Feature Validation Test)<br/>ビジネス上のニーズを満たすかを確認"]
    FVAL --> DONE(["Doneの機能"])

    REG["既存機能への<br/>リグレッションテスト"] -.->|"継続的に並行実行"| DONE

    style US fill:#17213a,color:#fff
    style DONE fill:#1c8f74,color:#fff`;

const DIAGRAM_7 = `flowchart TD
    CI["開発者によるコードのチェックイン"] --> SA["静的解析<br/>(コーディング規約・複雑度チェック)"]
    SA --> UT["自動ユニットテストの実行"]
    UT -->|"失敗"| FIX["ビルドを修正<br/>(Fix Bugs First)"]
    FIX --> CI
    UT -->|"成功"| BUILD["ビルドの生成"]
    BUILD --> BVT["ビルド検証テスト<br/>(Build Verification Test)"]
    BVT -->|"失敗"| FIX
    BVT -->|"成功"| INT["結合・システムテスト<br/>(自動化された機能テスト)"]
    INT --> REPORT["テスト結果のレポーティング<br/>(ダッシュボード/CIツール上で可視化)"]

    style CI fill:#17213a,color:#fff
    style REPORT fill:#1c8f74,color:#fff
    style FIX fill:#a13a3a,color:#fff`;

const DIAGRAM_8 = `graph TD
    ROOT["独立したテストの<br/>組織的選択肢"] --> OPT1["① チームに完全に統合された<br/>専任テスト担当者"]
    ROOT --> OPT2["② チーム外の独立した<br/>テストチーム/専門家に依頼"]
    ROOT --> OPT3["③ 複数のアジャイルチームに<br/>横断的に関わる独立テスト担当者"]

    style ROOT fill:#1c6f88,color:#fff`;

const DIAGRAM_9 = `mindmap
  root((テストステータスの<br/>伝達手段))
    デイリースタンドアップ
      昨日やったこと
      今日やること
      障害になっていること
    タスクボード/カンバンボード
      ToDo
      作業中
      検証中
      Done
    バーンダウン/バーンアップチャート
      残作業量の可視化
      イテレーション/リリース単位
    ダッシュボード・Wiki
      テストカバレッジ
      自動テスト実行結果
      欠陥密度・トレンド
    レトロスペクティブ
      プロセス改善の場としての振り返り`;

const DIAGRAM_10 = `graph LR
    subgraph TODO["ToDo"]
        T1["US-101: ログイン機能"]
        T2["US-104: パスワードリセット"]
    end
    subgraph WIP["作業中"]
        T3["US-102: 検索フィルタ<br/>(実装中)"]
    end
    subgraph VERIFY["検証中"]
        T4["US-100: プロフィール編集<br/>(テスト担当者が確認中)"]
    end
    subgraph DONE["Done"]
        T5["US-099: 会員登録"]
    end

    T1 -.-> T3
    T3 -.-> T4
    T4 -.-> T5

    style TODO fill:#33415e,color:#fff
    style WIP fill:#1c6f88,color:#fff
    style VERIFY fill:#a17a2a,color:#fff
    style DONE fill:#1c8f74,color:#fff`;

const DIAGRAM_11 = `flowchart TD
    A["コードのチェックイン"] --> B["① ユニットテスト<br/>(チェックインの都度、数秒〜数分で実行)"]
    B --> C["② ビルド検証テスト<br/>(ビルド生成の都度、数分で実行)"]
    C --> D["③ 自動化された受け入れ/機能テスト<br/>(日次ビルドなど、頻度を落として実行)"]
    D --> E["④ 手動の探索的テスト・<br/>経験ベーステスト<br/>(イテレーション内で随時実施)"]
    E --> F["⑤ 定期的なフルリグレッションテストセット<br/>(リリース前など、まとまった頻度で実行)"]

    style A fill:#17213a,color:#fff
    style F fill:#1c8f74,color:#fff`;

const DIAGRAM_12 = `graph TD
    ROOT["アジャイルテスト担当者に<br/>求められるスキル"] --> P["対人スキル<br/>(People Skills)"]
    ROOT --> D["ドメイン知識<br/>(Domain Knowledge)"]
    ROOT --> T["テストの専門知識<br/>(Testing Skills)"]

    P --> P1["コミュニケーション能力"]
    P --> P2["チームへの積極的な貢献意欲"]
    P --> P3["フィードバックを前向きに<br/>受け止める姿勢"]

    D --> D1["ビジネスドメインの理解"]
    D --> D2["ビジネスステークホルダーとの<br/>効果的な対話力"]

    T --> T1["テスト技法の応用力"]
    T --> T2["テスト自動化への理解・実践力"]
    T --> T3["リスク分析・優先順位付けの能力"]

    style ROOT fill:#1c6f88,color:#fff
    style P fill:#5b4a9c,color:#fff
    style D fill:#1c6f88,color:#fff
    style T fill:#1c8f74,color:#fff`;

const DIAGRAM_13 = `graph LR
    TESTER(("テスト担当者")) --> A1["ユーザーストーリー・受け入れ基準の<br/>作成をビジネスステークホルダーと共に支援"]
    TESTER --> A2["ユーザーストーリーの<br/>テスト容易性(testability)をレビュー"]
    TESTER --> A3["イテレーション/リリース計画時の<br/>品質リスク分析に参加"]
    TESTER --> A4["テストケース・チェックリスト・<br/>テストチャータの作成"]
    TESTER --> A5["自動テストの実装・保守<br/>(開発者と協働することが多い)"]
    TESTER --> A6["手動での経験ベース・<br/>探索的テストの実施"]
    TESTER --> A7["テストステータス・<br/>プロダクト品質の可視化・伝達"]
    TESTER --> A8["レトロスペクティブへの参加、<br/>テストプロセスの継続的改善"]

    style TESTER fill:#1c6f88,color:#fff`;

const DIAGRAM_14 = `flowchart TD
    START(["Chapter 2の要点"]) --> S1["2.1 伝統的手法との違い"]
    START --> S2["2.2 テスト状況の伝達と<br/>リグレッションリスク管理"]
    START --> S3["2.3 テスト担当者の<br/>役割とスキル"]

    S1 --> S1A["短いイテレーションで<br/>開発とテストが統合"]
    S1 --> S1B["軽量な作業成果物<br/>(3カテゴリ)"]
    S1 --> S1C["流動的なテストレベル<br/>(検証と妥当性確認)"]
    S1 --> S1D["構成管理とCIの緊密な連携"]
    S1 --> S1E["独立性確保の3つの<br/>組織的選択肢"]

    S2 --> S2A["情報ラジエーターによる<br/>高頻度・非公式な状況共有"]
    S2 --> S2B["自動テストの階層化による<br/>継続的リグレッション対策"]
    S2 --> S2C["テストケース自体の<br/>継続的な進化・引退"]

    S3 --> S3A["対人・ドメイン・テストの<br/>3つのスキル領域"]
    S3 --> S3B["ホールチームアプローチと<br/>独立性のバランス"]

    style START fill:#1c6f88,color:#fff`;

/**
 * Renders the CTFL-AT Chapter 2 guide on fundamental agile testing principles, practices, and processes.
 */
export default function CtflAtChapter2Page() {
    return (
        <div className="ctfl-at-ch2-page">
            <div className="layout">
                <NavBar />

                <main>
                    <header className="hero">
                        <span className="hero-eyebrow">
                            <span className="dot" />
                            ISTQB® CTFL-AT Syllabus
                        </span>
                        <h1>
                            アジャイルテストの基本原則
                            <span className="sub">
                                Chapter 2 ― Fundamental Agile Testing Principles, Practices, and Processes 完全解説
                            </span>
                        </h1>
                        <p className="hero-lede">
                            伝統的なテストプロセスとアジャイルとの違い、テストステータスの伝達、リグレッションリスクの管理、そしてテスト担当者に求められる役割とスキルまで。ISTQB公式シラバスに基づき、中級〜上級エンジニア向けに図解とともに解説します。
                        </p>

                        <div className="meta-row">
                            <div className="meta-pill">
                                <span className="k">学習時間</span>
                                <span className="v">105分</span>
                            </div>
                            <div className="meta-pill">
                                <span className="k">認知レベル</span>
                                <span className="v">全項目 K2</span>
                            </div>
                            <div className="meta-pill">
                                <span className="k">前提章</span>
                                <span className="v">Chapter 1</span>
                            </div>
                            <div className="meta-pill warn">
                                <span className="k">資格ステータス</span>
                                <span className="v">サンセット移行中</span>
                            </div>
                            <div className="meta-pill ok">
                                <span className="k">一次資料</span>
                                <span className="v">ISTQB / JSTQB 確認済</span>
                            </div>
                        </div>
                    </header>

                    {/* Section 0: Overview */}
                    <section className="section" id="overview">
                        <div className="section-eyebrow">00 ― Context</div>
                        <h2>この記事の位置づけと重要な注意事項</h2>

                        <h3><span className="num">0.1</span>CTFL-AT資格の現在の状況(2026年7月時点)</h3>
                        <p>
                            本記事の執筆にあたり最新の公式情報を確認したところ、
                            <strong>CTFL-AT(Certified Tester Foundation Level Agile Tester)は現在サンセット(廃止移行)フェーズに入っています</strong>。
                            ISTQBは新たに上位資格である
                            <strong>CTAL-AT v2.0(Certified Tester Advanced Level Agile Tester)</strong>
                            を導入し、アジャイルテストの基礎知識はCTFL v4.0(Foundation Levelの本体シラバス)に統合される方針です。
                        </p>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>項目</th>
                                        <th>内容</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>英語版の試験・トレーニング提供期限</td>
                                        <td>2027年5月6日</td>
                                    </tr>
                                    <tr>
                                        <td>非英語版の試験・トレーニング提供期限</td>
                                        <td>2027年11月6日</td>
                                    </tr>
                                    <tr>
                                        <td>期限後</td>
                                        <td>CTFL-AT・CT-ATTは提供終了。既取得の認定は有効なまま失効しない</td>
                                    </tr>
                                    <tr>
                                        <td>後継</td>
                                        <td>Foundation LevelはCTFL v4.0へ、Advanced相当はCTAL-AT v2.0へ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout callout--warning">
                            <div className="icon">⚠️</div>
                            <div className="body">
                                <strong className="callout-title">実務上の含意</strong>
                                <p>
                                    CTFL-AT自体は今からでも受験可能で、既に本シラバスで学習を進める価値は十分にあります。一方で、長期的な資格戦略としてはCTFL v4.0やCTAL-AT v2.0の動向も併せて把握しておくことをお勧めします。詳細は本記事末尾の参考文献セクションを参照してください。
                                </p>
                            </div>
                        </div>

                        <h3><span className="num">0.2</span>本記事の範囲</h3>
                        <p>
                            本記事は、CTFL-AT シラバス(2014年版、日本語訳はJSTQBが提供)の
                            <strong>「2. Fundamental Agile Testing Principles, Practices, and Processes(基本的なアジャイルテストの原則、プラクティス、プロセス)」</strong>
                            、すなわち<strong>Chapter 2</strong>の内容を、公式シラバスに基づき中級〜上級エンジニア向けに再構成・詳細化したものです。TDD/ATDD/BDD、テストピラミッド、テスト象限(Testing Quadrants)、リスクベースドテスト、探索的テストといったトピックはシラバス上のChapter 3(Agile Testing Methods, Techniques, and Tools)に属するため、本記事では扱いません。
                        </p>
                    </section>

                    {/* Section 1: Structure */}
                    <section className="section" id="structure">
                        <div className="section-eyebrow">01 ― Structure</div>
                        <h2>章の全体構造</h2>
                        <p>Chapter 2は3つの大項目から構成されています。</p>

                        <div className="diagram-card">
                            <div className="diagram-label">Mindmap ― Chapter 2 全体構造</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_1} />
                            </div>
                        </div>

                        <h3><span className="num">1.1</span>学習目的(Learning Objectives)一覧</h3>
                        <p>
                            CTFL-ATの学習目的はすべて<strong>K1〜K3の認知レベル</strong>で定義されています。K1(記憶)は最も基本的な想起、K2(理解)は概念の説明、K3(適用)は実務シナリオへの応用を意味します。Chapter 2はすべてK2レベルで統一されているのが特徴です(Chapter 3ではK3の応用問題が中心になります)。
                        </p>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>K-level</th>
                                        <th>学習目的</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>FA-2.1.1</td>
                                        <td><span className="klevel">K2</span></td>
                                        <td>アジャイルプロジェクトと非アジャイルプロジェクトにおけるテスト活動の違いを説明できる</td>
                                    </tr>
                                    <tr>
                                        <td>FA-2.1.2</td>
                                        <td><span className="klevel">K2</span></td>
                                        <td>アジャイルプロジェクトにおいて開発活動とテスト活動がどのように統合されるかを説明できる</td>
                                    </tr>
                                    <tr>
                                        <td>FA-2.1.3</td>
                                        <td><span className="klevel">K2</span></td>
                                        <td>アジャイルプロジェクトにおける独立したテストの役割を説明できる</td>
                                    </tr>
                                    <tr>
                                        <td>FA-2.2.1</td>
                                        <td><span className="klevel">K2</span></td>
                                        <td>アジャイルプロジェクトにおけるテストの進捗・プロダクト品質のステータスを伝達するためのツールと技法を説明できる</td>
                                    </tr>
                                    <tr>
                                        <td>FA-2.2.2</td>
                                        <td><span className="klevel">K2</span></td>
                                        <td>複数イテレーションにわたってテストが進化していくプロセスを説明し、リグレッションリスク管理におけるテスト自動化の重要性を説明できる</td>
                                    </tr>
                                    <tr>
                                        <td>FA-2.3.1</td>
                                        <td><span className="klevel">K2</span></td>
                                        <td>アジャイルチームにおけるテスト担当者に求められるスキル(対人・ドメイン・テスト)を理解している</td>
                                    </tr>
                                    <tr>
                                        <td>FA-2.3.2</td>
                                        <td><span className="klevel">K2</span></td>
                                        <td>アジャイルチームにおけるテスト担当者の役割を理解している</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="chip-row">
                            <span className="chip">build verification test</span>
                            <span className="chip">configuration item</span>
                            <span className="chip">configuration management</span>
                        </div>
                    </section>

                    {/* Section 2.1: Differences */}
                    <section className="section" id="sec-2-1">
                        <div className="section-eyebrow">02.1 ― Differences</div>
                        <h2>伝統的アプローチとアジャイルアプローチにおけるテストの違い</h2>
                        <p>
                            シーケンシャルなVモデルや反復型のRUPのような伝統的ライフサイクルと、アジャイルライフサイクルとでは、テスト活動が根本的に異なる形で組み込まれます。両者の違いを理解し、プロジェクトの実態(多くの組織はアジャイルの理想形からある程度カスタマイズして運用している)に応じて柔軟に適応できることが、アジャイルテスト担当者にとって重要な成功要因です。
                        </p>
                        <p>違いが生じる観点は主に5つあります。</p>

                        <div className="diagram-card">
                            <div className="diagram-label">Graph ― 違いが生じる5つの観点</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_2} />
                            </div>
                        </div>

                        <h3 id="s211"><span className="num">2.1.1</span>テストと開発活動</h3>

                        <h4>イテレーションという単位が生む構造的な違い</h4>
                        <p>
                            伝統的ライフサイクルとアジャイルライフサイクルの最大の違いは、<strong>「非常に短いイテレーション」</strong>という単位で開発が進む点です。各イテレーションは、ビジネスステークホルダーに価値をもたらす機能を含んだ「動作するソフトウェア」を生成することをゴールとします。
                        </p>
                        <p>プロジェクト全体の流れは、次のようになります。</p>

                        <div className="diagram-card">
                            <div className="diagram-label">Flowchart ― リリース計画からイテレーションの連続</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_3} />
                            </div>
                        </div>

                        <p>
                            各イテレーションの内部では、開発・統合・テストが<strong>高い並行性と重なり合い(overlap)を持って</strong>進行します。伝統的なフェーズ型と異なり、テストは最終工程としてではなく、イテレーションを通じて継続的に発生します。
                        </p>

                        <h4>イテレーション内でのテスト活動の役割分担</h4>
                        <p>
                            開発者・テスト担当者・ビジネスステークホルダーの三者は、それぞれ異なる形でテストに関与します。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-label">Sequence ― イテレーション内の役割分担</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_4} />
                            </div>
                        </div>

                        <p>
                            ポイントは、ビジネスステークホルダーが必ずしも「正式なテストケース」で確認するわけではなく、<strong>機能を実際に使ってみることで開発チームに素早いフィードバックを返す</strong>という点です。これは、伝統的プロジェクトでプロジェクト完了間際にしか顧客が製品を見られない状況とは対照的です。
                        </p>

                        <h4>ハーデニング(安定化)イテレーションと「Fix Bugs First」</h4>
                        <p>
                            一部のプロジェクトでは、残存欠陥や技術的負債を解消するための<strong>ハーデニング(安定化)イテレーション</strong>を周期的に設けることがあります。ただし、ベストプラクティスとされるのは「<strong>システムに統合されテストされるまで、いかなる機能もDoneとみなさない</strong>」という考え方です。
                        </p>
                        <p>
                            もう一つの一般的なプラクティスが「<strong>Fix Bugs First(まずバグを直す)</strong>」です。前イテレーションから持ち越された欠陥を、次イテレーションの冒頭で最優先に対応するというルールです。ただし、これには批判もあります。
                        </p>

                        <div className="callout callout--tip">
                            <div className="icon">💡</div>
                            <div className="body">
                                <strong className="callout-title">実務上の注意点</strong>
                                <p>
                                    「Fix Bugs First」を採用すると、そのイテレーションで実施すべき総作業量が事前に確定できなくなり、機能の完了時期の見積もりが難しくなるという副作用があります。チームで採用する際は、見積もり手法(ベロシティ計算など)への影響を合わせて検討する必要があります。
                                </p>
                            </div>
                        </div>

                        <h4>リスクベースドテストの適用タイミング</h4>
                        <p>
                            品質リスクの分析は、アジャイルプロジェクトでは<strong>2つのタイミング</strong>で行われます。
                        </p>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>タイミング</th>
                                        <th>分析の粒度</th>
                                        <th>主導者</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>リリース計画時</td>
                                        <td>ハイレベルなリスク分析</td>
                                        <td>テスト担当者が主導することが多い</td>
                                    </tr>
                                    <tr>
                                        <td>イテレーション計画時</td>
                                        <td>イテレーション固有の具体的な品質リスクを識別・評価</td>
                                        <td>チーム全体</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            このリスク分析結果は、開発の順序や、機能ごとのテストの優先度・深さ、さらにテスト工数の見積もり(詳細はChapter 3の3.2で扱う)にまで影響を与えます。
                        </p>

                        <h4>ペアリング(Pairing)とテスト担当者の「コーチ」的役割</h4>
                        <p>
                            Extreme Programming(XP)などの一部のアジャイルプラクティスでは、<strong>ペアリング</strong>が用いられます。
                        </p>
                        <ul className="plain">
                            <li>テスト担当者同士が2人1組で機能をテストするペアリング</li>
                            <li>テスト担当者が開発者と協働し、機能の開発とテストを同時に進めるペアリング</li>
                        </ul>
                        <p>
                            分散チームではペアリングが難しくなる場合がありますが、ツールとプロセスの工夫によって分散環境でのペアリングを支援できます。
                        </p>
                        <p>
                            また、テスト担当者は<strong>テスト・品質のコーチ</strong>として、チーム内でテストに関する知識を共有し、品質保証活動を支援する役割を担うことがあります。これにより、プロダクト品質に対する<strong>集団的な当事者意識(collective ownership)</strong>が醸成されます。
                        </p>

                        <h4>テスト自動化がもたらす手動テストの質的変化</h4>
                        <p>
                            多くのアジャイルチームでは、あらゆるテストレベルでテスト自動化が実施されます。その結果、以下のような分業と技術要件の変化が生まれます。
                        </p>
                        <ul className="plain">
                            <li>開発者: 主にユニットテストの作成に集中</li>
                            <li>テスト担当者: 自動化された統合テスト・システムテスト・システム統合テストの作成に注力</li>
                            <li>
                                手動テストの比重: <strong>経験ベース・欠陥ベースの技法</strong>(ソフトウェア攻撃、探索的テスト、エラー推測など)に高い割合でシフトする傾向がある
                            </li>
                        </ul>
                        <p>
                            この結果、アジャイルチームは<strong>強い技術力とテスト自動化のバックグラウンドを持つテスト担当者を好む傾向</strong>があるとシラバスは指摘しています。
                        </p>

                        <h4>変更とドキュメンテーションのトレードオフ</h4>
                        <p>
                            アジャイルの核となる原則の一つは「<strong>プロジェクトを通じて変更が起こりうる</strong>」という前提です。そのため、作業成果物のドキュメンテーションは意図的に軽量化されます。既存機能への変更は、特にリグレッション観点でテストへの影響を伴うため、自動化テストの活用がその工数を管理する重要な手段になります。
                        </p>

                        <div className="callout callout--warning">
                            <div className="icon">⚠️</div>
                            <div className="body">
                                <strong className="callout-title">重要な留意点</strong>
                                <p>
                                    変更を管理する自動テストがあっても、<strong>「変更の速度」がプロジェクトチームの対応能力を超えてはならない</strong>という点がシラバスで強調されています。自動化があるからといって無制限に変更を許容してよいわけではありません。
                                </p>
                            </div>
                        </div>

                        <h3 id="s212"><span className="num">2.1.2</span>プロジェクトの作業成果物</h3>
                        <p>
                            伝統的プロジェクトでは要件仕様書やテスト計画書といった重厚なドキュメントが作成される一方、アジャイルプロジェクトの作業成果物は<strong>軽量</strong>で、しばしば<strong>非公式(informal)</strong>です。シラバスでは、アジャイルプロジェクトの作業成果物を3つのカテゴリに分類しています。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-label">Graph ― 作業成果物の3分類</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_5} />
                            </div>
                        </div>

                        <h4>なぜドキュメントが軽量なのか</h4>
                        <p>
                            この背景には、Agile Manifestoの価値観「包括的なドキュメントよりも動くソフトウェアを」が反映されています。ただし、これは<strong>「ドキュメントが不要」という意味ではない</strong>点に注意が必要です。テスト担当者は、実装の裏付けとなる<strong>テストベース(test basis)</strong>が各イテレーションで十分に整っている必要があります。変更を柔軟に受け入れつつも、テストの根拠となる情報がタイムリーに提供されなければならないというジレンマが常に存在します。
                        </p>

                        <h4>テスト担当者にとっての実務的示唆</h4>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>観点</th>
                                        <th>伝統的プロジェクト</th>
                                        <th>アジャイルプロジェクト</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>要求仕様の形式</td>
                                        <td>詳細な要件仕様書(SRS)</td>
                                        <td>ユーザーストーリー + 受け入れ基準(簡潔)</td>
                                    </tr>
                                    <tr>
                                        <td>テスト計画</td>
                                        <td>独立した重厚なテスト計画書</td>
                                        <td>軽量、または暗黙知としてチームに保持</td>
                                    </tr>
                                    <tr>
                                        <td>テストケースの粒度</td>
                                        <td>網羅的で形式的なテストケース文書</td>
                                        <td>チェックリスト、テストチャータ、自動化コードそのもの</td>
                                    </tr>
                                    <tr>
                                        <td>ドキュメントの更新頻度</td>
                                        <td>フェーズの節目</td>
                                        <td>イテレーションごとに継続的に更新</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 id="s213"><span className="num">2.1.3</span>テストレベル</h3>
                        <p>
                            伝統的ライフサイクルでは「コンポーネントテスト → 統合テスト → システムテスト → 受け入れテスト」という明確な順序でテストレベルが実行されます。アジャイルプロジェクトでも同様のテストレベルの概念は存在しますが、<strong>呼び方や実行タイミングが異なり、レベル間の境界がより流動的(overlapする)</strong>という特徴があります。
                        </p>

                        <h4>イテレーション内でのテストレベルの進行</h4>
                        <div className="diagram-card">
                            <div className="diagram-label">Flowchart ― ストーリー単位のテストレベル進行</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_6} />
                            </div>
                        </div>

                        <p>
                            シラバスでは、多くのアジャイルプロジェクトにおいて次の2種類のテストが、伝統的な「システムテスト」に相当する役割を果たすとしています。
                        </p>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>テストの種類</th>
                                        <th>目的</th>
                                        <th>対応するV字モデルの相当レベル</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>フィーチャー検証テスト<br />(Feature Verification Test)</td>
                                        <td>ユーザーストーリーの技術的な受け入れ基準を満たしているかを検証(Verification:正しく作られているか)</td>
                                        <td>コンポーネント統合テスト〜システムテスト</td>
                                    </tr>
                                    <tr>
                                        <td>フィーチャー妥当性確認テスト<br />(Feature Validation Test)</td>
                                        <td>ビジネスステークホルダーの意図・実際のニーズを満たしているかを確認(Validation:正しいものを作っているか)</td>
                                        <td>ユーザー受け入れテストの一部</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout callout--tip">
                            <div className="icon">💡</div>
                            <div className="body">
                                <strong className="callout-title">VerificationとValidationの違い(K2で頻出のポイント)</strong>
                                <p>
                                    <strong>Verification(検証)</strong>: 「仕様通りに作られているか」＝要件・受け入れ基準との整合性確認<br />
                                    <strong>Validation(妥当性確認)</strong>: 「本当に使う人が求めているものか」＝実際のニーズとの整合性確認
                                </p>
                                <p>
                                    アジャイルではこの2つが、フィーチャー単位で毎イテレーション繰り返される点が伝統的手法との大きな違いです。
                                </p>
                            </div>
                        </div>

                        <h4>受け入れテストの複数形態</h4>
                        <p>
                            アジャイルプロジェクトにおいても、伝統的プロジェクトと同様に、さまざまな形態の受け入れテストが実施されます。それぞれ実施タイミングが「各イテレーションの終了時」「一連のイテレーションの終了後」など柔軟です。
                        </p>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>受け入れテストの種類</th>
                                        <th>概要</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>内部アルファテスト</td>
                                        <td>社内の別チーム・関係者による試用テスト</td>
                                    </tr>
                                    <tr>
                                        <td>外部ベータテスト</td>
                                        <td>実際のエンドユーザー・顧客候補による試用テスト</td>
                                    </tr>
                                    <tr>
                                        <td>ユーザー受け入れテスト(UAT)</td>
                                        <td>想定ユーザーによる業務適合性の確認</td>
                                    </tr>
                                    <tr>
                                        <td>運用受け入れテスト(OAT)</td>
                                        <td>運用チームによる非機能要件(バックアップ、リカバリなど)の確認</td>
                                    </tr>
                                    <tr>
                                        <td>規制受け入れテスト</td>
                                        <td>法規制・業界標準への準拠確認(医療機器・金融など)</td>
                                    </tr>
                                    <tr>
                                        <td>契約受け入れテスト</td>
                                        <td>契約上の合意事項を満たしているかの確認</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4>システムテストの自動化とその技術的手段</h4>
                        <p>
                            アジャイルチームは、統合テスト・システムテストレベルにおいても高い割合で自動テストを実装します。実現手段としては次のようなものが挙げられます。
                        </p>
                        <ul className="plain">
                            <li>
                                <strong>GUIを介さないAPIレベルでの機能テスト自動化</strong>(サービス層・ビジネスロジック層への直接呼び出し)
                            </li>
                            <li>
                                オープンソースまたは商用の<strong>UI自動化フレームワーク</strong>を用いた機能テストの自動化
                            </li>
                            <li>CIフレームワークに統合された自動テストの実行</li>
                        </ul>
                        <p>
                            機能テストの実行に時間がかかる場合、ユニットテストとは切り離し、<strong>実行頻度を落として</strong>(例:夜間バッチ、日次ビルド後など)運用されることもあります。
                        </p>

                        <h3 id="s214"><span className="num">2.1.4</span>テストと構成管理</h3>
                        <p>
                            アジャイルプロジェクトの高速な開発サイクルを支えるためには、<strong>構成管理(Configuration Management)</strong>とテストプロセスの緊密な連携が不可欠です。
                        </p>

                        <h4>継続的インテグレーション(CI)パイプラインにおけるテストの位置づけ</h4>
                        <div className="diagram-card">
                            <div className="diagram-label">Flowchart ― CIパイプラインとテストの連携</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_7} />
                            </div>
                        </div>

                        <p>
                            <strong>ビルド検証テスト(Build Verification Test, BVT)</strong>は、新しいビルドが「その後の本格的なテストに値するか」を判定するための、短時間で実行できるテストセットです。伝統的な「スモークテスト」に近い役割を果たします。BVTが失敗した場合、それ以上のテストは実施せず、直ちに開発チームへフィードバックします。
                        </p>

                        <p>
                            イメージをつかむために、BVTをトリガーする簡略化されたCI設定の例を示します(実際の構文はツールにより異なります)。
                        </p>

                        <div className="code-card">
                            <div className="code-label">example.yml ― Build Verification Testのトリガー例</div>
                            <pre>
                                <div className="code-line"><span className="code-kw">on</span>:</div>
                                <div className="code-line">  <span className="code-kw">push</span>:</div>
                                <div className="code-line">    <span className="code-kw">branches</span>: [main, develop]</div>
                                <div className="code-line" />
                                <div className="code-line"><span className="code-kw">jobs</span>:</div>
                                <div className="code-line">  <span className="code-fn">build-verification</span>:</div>
                                <div className="code-line">    <span className="code-kw">steps</span>:</div>
                                <div className="code-line">      - <span className="code-kw">run</span>: static-analysis --fail-on=critical</div>
                                <div className="code-line">      - <span className="code-kw">run</span>: unit-tests --coverage-min=80</div>
                                <div className="code-line">      - <span className="code-kw">run</span>: build --artifact=app.bin</div>
                                <div className="code-line">      - <span className="code-kw">run</span>: bvt-suite --smoke --timeout=5m</div>
                                <div className="code-line">        <span className="code-cm"># BVT失敗時はここでパイプラインを停止し、</span></div>
                                <div className="code-line">        <span className="code-cm"># 後続の統合・システムテストは実行しない</span></div>
                                <div className="code-line">      - <span className="code-kw">run</span>: integration-tests --if=bvt.success</div>
                            </pre>
                        </div>

                        <h4>構成管理ツールに求められる要件</h4>
                        <p>
                            アジャイルプロジェクトでは、頻繁なビルド・頻繁なリリースに対応するため、構成管理ツールには次のような能力が求められます。
                        </p>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>要件</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>バージョン管理の粒度</td>
                                        <td>コード・テストケース・テストデータ・環境設定を一体として構成アイテムとして管理できること</td>
                                    </tr>
                                    <tr>
                                        <td>ビルドの自動化・追跡可能性</td>
                                        <td>どのコード変更がどのビルドに含まれているかをトレース可能にすること</td>
                                    </tr>
                                    <tr>
                                        <td>テスト自動化との連携</td>
                                        <td>チェックイン・ビルド生成をトリガーとして自動テストを起動できること</td>
                                    </tr>
                                    <tr>
                                        <td>複数バージョンの並行管理</td>
                                        <td>並行して走る複数のイテレーション・ブランチの構成を区別できること</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout callout--warning">
                            <div className="icon">⚠️</div>
                            <div className="body">
                                <strong className="callout-title">注意点</strong>
                                <p>
                                    シラバスは、ユニットテストだけに依存した「グリーンビルド＝安全」という誤解を戒めています。ユニットテストの網羅性(カバレッジ)は品質の必要条件であって十分条件ではなく、統合・システムレベルでの自動テストや、経験ベースの手動テストと組み合わせて初めて、リグレッションリスクを十分に低減できます。
                                </p>
                            </div>
                        </div>

                        <h3 id="s215"><span className="num">2.1.5</span>独立したテストのための組織的選択肢</h3>
                        <p>
                            アジャイルの「ホールチームアプローチ(whole-team approach)」は、開発者・テスト担当者・ビジネスステークホルダーが一体となって品質に責任を持つという考え方です。しかし、これは<strong>「独立した視点によるテスト」の価値を否定するものではありません</strong>。認知的な偏り(同じ人が実装もテストも行うと見落としが生じやすい)を補うため、多くの組織では何らかの形で独立性を確保する工夫をしています。
                        </p>
                        <p>
                            シラバスは、独立したテストを実現する組織構造として、主に3つの選択肢を挙げています。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-label">Graph ― 独立したテストの組織的選択肢</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_8} />
                            </div>
                        </div>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>選択肢</th>
                                        <th>メリット</th>
                                        <th>デメリット・リスク</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>① チーム専任のテスト担当者</td>
                                        <td>チームとの密な連携、コンテキスト理解が深い</td>
                                        <td>チームに同化しすぎて客観性・独立した視点を失うリスク</td>
                                    </tr>
                                    <tr>
                                        <td>② チーム外の独立組織へ依頼</td>
                                        <td>高い客観性、専門的な技術(性能・セキュリティなど)を活用可能</td>
                                        <td>チームの文脈理解に時間がかかる、依頼・待ち時間によるボトルネックの発生リスク</td>
                                    </tr>
                                    <tr>
                                        <td>③ 複数チームを横断する独立テスト担当者</td>
                                        <td>①と②のバランスを取れる、チーム間の知見共有が進む</td>
                                        <td>複数チームを掛け持つことによる負荷・優先順位の競合</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4>実務での使い分けの考え方</h4>
                        <p>
                            どの選択肢が適切かは、プロジェクトのリスクプロファイル、組織の成熟度、規制要件などによって異なります。例えば、医療機器や金融システムのように規制対応が求められるドメインでは、②のような独立組織による受け入れテスト・監査的なテストが併用されるケースも珍しくありません。逆に、少人数で高速に価値を届けたいスタートアップ的なチームでは、①の形態が中心になりやすい傾向があります。
                        </p>
                        <p>
                            いずれの形態を採用するにせよ、シラバスが強調するのは、<strong>「独立した視点」と「チームへの当事者意識(ownership)」を両立させる工夫が必要</strong>だという点です。
                        </p>
                    </section>

                    {/* Section 2.2: Communication */}
                    <section className="section" id="sec-2-2">
                        <div className="section-eyebrow">02.2 ― Communication</div>
                        <h2>アジャイルプロジェクトにおけるテストの状況</h2>
                        <p>
                            アジャイルプロジェクトは、伝統的プロジェクトに比べて<strong>進捗の伝達手段が非公式かつ高頻度</strong>になる傾向があります。分厚いステータスレポートの代わりに、チームメンバー全員がリアルタイムで状況を把握できる仕組み(いわゆる「情報ラジエーター／information radiator」)が活用されます。
                        </p>

                        <h3 id="s221"><span className="num">2.2.1</span>テストステータス、進捗、プロダクト品質のコミュニケーション</h3>

                        <h4>アジャイルにおける主要なコミュニケーション手段</h4>
                        <div className="diagram-card">
                            <div className="diagram-label">Mindmap ― テストステータスの伝達手段</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_9} />
                            </div>
                        </div>

                        <h4>タスクボードの例(カンバン形式)</h4>
                        <div className="diagram-card">
                            <div className="diagram-label">Graph ― カンバンボードの例</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_10} />
                            </div>
                        </div>

                        <p>
                            このようなタスクボードは、テスト担当者にとって「どのユーザーストーリーがテスト待ちで滞留しているか」を一目で把握できる重要なツールです。「検証中」の列に長時間とどまっているカードがあれば、テストのボトルネックとして早期に気づくことができます。
                        </p>

                        <h4>進捗指標として使われる主な情報</h4>
                        <p>
                            シラバスが言及する、テストステータス・プロダクト品質を伝えるための代表的な情報は以下の通りです。
                        </p>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>情報の種類</th>
                                        <th>具体例</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>テストの実行状況</td>
                                        <td>計画済み/実施済み/合格/不合格のテスト件数</td>
                                    </tr>
                                    <tr>
                                        <td>欠陥の状況</td>
                                        <td>新規発見数、修正済み数、再発(リグレッション)数、深刻度別分布</td>
                                    </tr>
                                    <tr>
                                        <td>テスト自動化のカバレッジ</td>
                                        <td>自動化されたテストの割合、コードカバレッジ</td>
                                    </tr>
                                    <tr>
                                        <td>リスクの状況</td>
                                        <td>未着手・未検証のハイリスク項目</td>
                                    </tr>
                                    <tr>
                                        <td>ベロシティ・バーンダウン</td>
                                        <td>チームの生産性トレンド、残作業の消化ペース</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout callout--tip">
                            <div className="icon">💡</div>
                            <div className="body">
                                <strong className="callout-title">ポイント</strong>
                                <p>
                                    これらの情報は、伝統的プロジェクトのように「最終報告書」として提示されるのではなく、<strong>イテレーションを通じて継続的に、かつ視覚的に</strong>(多くの場合、物理的またはデジタルなタスクボード・ダッシュボードとして)チーム内外に開示され続けます。これにより、問題の早期発見と迅速な意思決定が可能になります。
                                </p>
                            </div>
                        </div>

                        <h3 id="s222"><span className="num">2.2.2</span>進化する手動・自動テストケースによるリグレッションリスクの管理</h3>

                        <h4>なぜリグレッションリスクがアジャイルで特に重要なのか</h4>
                        <p>
                            アジャイルプロジェクトでは、毎イテレーションで新機能の追加・既存機能の変更が発生します。これは裏を返せば、<strong>「既存の動いている機能を壊してしまうリスク(リグレッションリスク)」が毎イテレーション発生し続ける</strong>ということを意味します。伝統的プロジェクトのようにフェーズの最後にまとめてリグレッションテストを行う余裕はなく、<strong>継続的にリグレッションテストを実行し続ける仕組み</strong>が必須になります。
                        </p>

                        <h4>自動テストの階層と実行タイミング</h4>
                        <div className="diagram-card">
                            <div className="diagram-label">Flowchart ― 自動テストの実行頻度階層</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_11} />
                            </div>
                        </div>

                        <p>
                            このように、テストの実行頻度は「軽くて速いテストほど頻繁に」「重くて時間のかかるテストほど頻度を落として」実行するのが基本的な考え方です。これは後の章(Chapter 3)で扱う「テストピラミッド」の思想にも通じますが、Chapter 2の時点では、あくまで<strong>「継続的なリグレッションテストの仕組みづくり」</strong>という文脈で説明されています。
                        </p>

                        <h4>テストケースは「進化」する</h4>
                        <p>
                            シラバスが強調する重要な視点の一つが、<strong>テストケース自体もイテレーションを重ねるごとに進化し続ける</strong>という点です。
                        </p>
                        <ul className="plain">
                            <li>新しいユーザーストーリーが追加されれば、新しいテストケースが作られる</li>
                            <li>既存機能が変更されれば、既存のテストケースも更新される必要がある</li>
                            <li>陳腐化した(もう価値を生まない)テストケースは、積極的に<strong>引退(retire)</strong>させるべきである</li>
                            <li>手動テストのうち、繰り返し実行する価値が高いものは、<strong>自動化の候補</strong>として継続的に見直される</li>
                        </ul>
                        <p>
                            この「テストケースのメンテナンスサイクル」を怠ると、テストスイートが肥大化し、実行時間が伸び、かえってフィードバックの速度を損なうという逆効果を生みます。
                        </p>

                        <h4>自動化すべき、テスト実行以外の周辺タスク</h4>
                        <p>
                            シラバスは、リグレッションテストの効率を支えるために、テスト実行そのもの以外にも自動化すべきタスクがあると指摘しています。
                        </p>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>自動化対象のタスク</th>
                                        <th>目的</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>テストデータの生成</td>
                                        <td>毎回同じ状態からテストを開始できるようにする</td>
                                    </tr>
                                    <tr>
                                        <td>テストデータのロード・環境のセットアップ</td>
                                        <td>テスト環境構築にかかる手作業を排除する</td>
                                    </tr>
                                    <tr>
                                        <td>テスト対象のデプロイ</td>
                                        <td>ビルドから即座にテスト可能な状態を作る</td>
                                    </tr>
                                    <tr>
                                        <td>環境・データの復元(リストア)</td>
                                        <td>テスト後にクリーンな状態へ戻す</td>
                                    </tr>
                                    <tr>
                                        <td>実際の結果と期待結果の比較</td>
                                        <td>判定作業(オラクル問題)の一部を自動化する</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            これらの周辺タスクを自動化することで、テスト担当者は<strong>手動でしか価値を生まない探索的テストや経験ベーステストに集中</strong>できるようになります。これは、限られたイテレーション期間内で品質を担保するための、非常に実務的な工夫です。
                        </p>
                    </section>

                    {/* Section 2.3: Role & Skills */}
                    <section className="section" id="sec-2-3">
                        <div className="section-eyebrow">02.3 ― Role & Skills</div>
                        <h2>アジャイルチームにおけるテスト担当者の役割とスキル</h2>
                        <p>
                            「ホールチームアプローチ」の下では、品質は全員の責任です。しかし、それは<strong>「専門的なテストスキルが不要になる」という意味ではありません</strong>。むしろ、アジャイルテスト担当者には、伝統的プロジェクトのテスト担当者以上に幅広いスキルセットが求められます。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-label">Graph ― アジャイルテスト担当者に求められるスキル</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_12} />
                            </div>
                        </div>

                        <h3 id="s231"><span className="num">2.3.1</span>アジャイルテスト担当者のスキル</h3>
                        <p>
                            シラバスは、アジャイルテスト担当者に求められる資質・スキルを以下のように整理しています。
                        </p>

                        <h4>対人スキル(People Skills)</h4>
                        <p>
                            アジャイルは「個人と対話」を重視する開発手法であるため、テスト担当者にも高いレベルの対人スキルが求められます。
                        </p>
                        <ul className="plain">
                            <li>
                                <strong>積極性・自発性</strong>: 指示を待つのではなく、自らチームの品質向上に貢献しようとする姿勢
                            </li>
                            <li>
                                <strong>コミュニケーション能力</strong>: 開発者・プロダクトオーナー・ビジネスステークホルダーなど、多様な役割の人々と効果的に対話できる能力
                            </li>
                            <li>
                                <strong>フィードバックへの前向きな姿勢</strong>: 自分の作業やテスト結果に対する指摘を、成長の機会として受け止められる柔軟性
                            </li>
                            <li>
                                <strong>チームプレイヤーとしての振る舞い</strong>: 「自分のタスク」だけでなく、チーム全体のゴール達成を優先する意識
                            </li>
                        </ul>

                        <h4>ドメイン知識・ビジネス知識</h4>
                        <p>
                            アジャイルテスト担当者は、単に「テスト技法に詳しい」だけでなく、<strong>プロダクトが解決しようとしているビジネス課題そのものへの理解</strong>が求められます。これにより、以下のような場面で価値を発揮できます。
                        </p>
                        <ul className="plain">
                            <li>ユーザーストーリーの受け入れ基準を、ビジネス上意味のある形で具体化・洗練させる</li>
                            <li>曖昧な要求に対して、的確な質問を投げかけられる</li>
                            <li>ビジネスステークホルダーが気づいていないエッジケースやリスクを先回りして指摘できる</li>
                        </ul>

                        <h4>テストに関する専門知識・技術スキル</h4>
                        <p>もちろん、テスト担当者としての中核的な専門性も欠かせません。</p>
                        <ul className="plain">
                            <li>テスト技法(ブラックボックス・ホワイトボックス・経験ベース)の使い分け</li>
                            <li>テスト自動化フレームワークの理解、または自ら実装できる技術力</li>
                            <li>品質リスク分析に基づいた、テスト対象・深さの優先順位付け</li>
                            <li>探索的テストのようなセッションベースのテスト実施能力</li>
                        </ul>

                        <div className="callout callout--tip">
                            <div className="icon">💡</div>
                            <div className="body">
                                <strong className="callout-title">実務上のポイント</strong>
                                <p>
                                    アジャイルチームは、しばしば<strong>「テスト自動化のバックグラウンドを持つ、より技術力の高いテスト担当者」を求める傾向がある</strong>とシラバスは述べています(2.1.1でも触れた通り)。これは、モダンなQAエンジニア・SDET(Software Developer Engineer in Test)という職種が生まれてきた背景とも一致します。
                                </p>
                            </div>
                        </div>

                        <h3 id="s232"><span className="num">2.3.2</span>アジャイルチームにおけるテスト担当者の役割</h3>

                        <h4>アジャイルチーム内でテスト担当者が担う典型的な活動</h4>
                        <p>
                            シラバスは、アジャイルチームのテスト担当者が担う役割の例として、次のような活動を挙げています。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-label">Graph ― テスト担当者の典型的な活動</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_13} />
                            </div>
                        </div>

                        <h4>独立したテストを実現する上での組織的リスク</h4>
                        <p>
                            2.1.5で触れた「独立したテストの組織的選択肢」は、テスト担当者の役割にも直結する重要なテーマです。シラバスは、テスト担当者がアジャイルチームに深く組み込まれることで生じうる<strong>組織的リスク</strong>を明示的に指摘しています。
                        </p>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>リスク</th>
                                        <th>説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>客観性の喪失</strong></td>
                                        <td>チームに同化しすぎることで、自分たちの成果物を批判的に見る視点が弱まる</td>
                                    </tr>
                                    <tr>
                                        <td><strong>技術的な視野の狭窄</strong></td>
                                        <td>特定のプロダクト・チームの文脈に閉じてしまい、他プロジェクトの知見やテスト技法の広がりを取り込みにくくなる</td>
                                    </tr>
                                    <tr>
                                        <td><strong>専門職としてのキャリアパスの不透明化</strong></td>
                                        <td>テスト専門組織が存在しない場合、テスト担当者としてのスキル育成・評価制度が曖昧になりやすい</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            これらのリスクへの対応として、シラバスは以下のような工夫を推奨しています。
                        </p>
                        <ul className="plain">
                            <li>複数のアジャイルチームを横断する「コミュニティ・オブ・プラクティス(Community of Practice)」的な場を設け、テスト担当者同士の知見共有を促す</li>
                            <li>テスト専門のマネージャーやテストリードを置き、キャリアパス・スキル育成の道筋を明確にする</li>
                            <li>定期的に外部レビューや監査的なテスト(2.1.5の選択肢②)を組み合わせ、客観性を補完する</li>
                        </ul>

                        <div className="callout callout--note">
                            <div className="icon">📝</div>
                            <div className="body">
                                <strong className="callout-title">まとめのポイント</strong>
                                <p>
                                    「ホールチームアプローチ」と「テスト専門性の独立性」は、対立する概念ではなく、<strong>組織設計によって両立させるべきもの</strong>だという考え方が、Chapter 2全体を貫く重要なメッセージです。
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Summary */}
                    <section className="section" id="summary">
                        <div className="section-eyebrow">03 ― Summary</div>
                        <h2>章のまとめ</h2>
                        <p>
                            Chapter 2「アジャイルテストの基本原則」の要点を、学習目的(Learning Objectives)に対応させて振り返ります。
                        </p>

                        <div className="diagram-card">
                            <div className="diagram-label">Flowchart ― Chapter 2の要点マップ</div>
                            <div className="diagram-body">
                                <Mermaid chart={DIAGRAM_14} />
                            </div>
                        </div>

                        <h3><span className="num">3.1</span>重要用語チェックリスト</h3>
                        <p>試験・実務の両面で押さえておきたいキーワードを整理しました。</p>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>用語</th>
                                        <th>一言で説明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Build Verification Test(BVT)</td>
                                        <td>ビルドがさらなるテストに値するかを判定する短時間テスト</td>
                                    </tr>
                                    <tr>
                                        <td>Feature Verification Test</td>
                                        <td>ユーザーストーリーの受け入れ基準(要件)通りに動くかの検証</td>
                                    </tr>
                                    <tr>
                                        <td>Feature Validation Test</td>
                                        <td>ビジネスの実際のニーズを満たすかの妥当性確認</td>
                                    </tr>
                                    <tr>
                                        <td>Configuration Item(構成アイテム)</td>
                                        <td>構成管理の対象となる単位(コード・テストケース・環境設定など)</td>
                                    </tr>
                                    <tr>
                                        <td>Configuration Management(構成管理)</td>
                                        <td>変更を追跡・制御し、再現可能なビルド・テスト環境を保証する仕組み</td>
                                    </tr>
                                    <tr>
                                        <td>ホールチームアプローチ</td>
                                        <td>品質はチーム全員の責任であるという考え方</td>
                                    </tr>
                                    <tr>
                                        <td>リグレッションリスク</td>
                                        <td>変更によって既存の動作が壊れるリスク</td>
                                    </tr>
                                    <tr>
                                        <td>ハーデニング(安定化)イテレーション</td>
                                        <td>欠陥・技術的負債解消に充てる周期的イテレーション(ベストプラクティスではないとされる)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3><span className="num">3.2</span>学習到達度セルフチェック</h3>
                        <p>以下の質問に、資料を見ずに口頭で説明できるかを確認してみてください。</p>
                        <ol className="plain">
                            <li>アジャイルプロジェクトにおいて、開発者・テスト担当者・ビジネスステークホルダーは、イテレーション内でどのようにテストに関与するか説明できるか?</li>
                            <li>「Feature Verification Test」と「Feature Validation Test」の違いを、VerificationとValidationという言葉を使って説明できるか?</li>
                            <li>ビルド検証テスト(BVT)が失敗した場合、CIパイプライン上で何が起こるべきか説明できるか?</li>
                            <li>独立したテストを実現するための3つの組織的選択肢と、それぞれのメリット・デメリットを説明できるか?</li>
                            <li>テストケースが「進化」するとはどういうことか、具体例を挙げて説明できるか?</li>
                            <li>アジャイルテスト担当者に求められる3つのスキル領域を挙げ、それぞれ具体例を説明できるか?</li>
                            <li>テスト担当者がチームに深く統合されることで生じうる組織的リスクとその対策を説明できるか?</li>
                        </ol>
                    </section>

                    {/* Section 4: References */}
                    <section className="section" id="references">
                        <div className="section-eyebrow">04 ― Sources</div>
                        <h2>参考文献・出典</h2>
                        <p>
                            本記事の作成にあたり、以下の一次情報源・信頼できるソフトウェアテスト関連サイトを参照しました(すべて2026年7月時点で最新の情報を確認)。
                        </p>

                        <h3><span className="num">4.1</span>ISTQB公式・一次資料</h3>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>資料名</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>ISTQB® Certified Tester Foundation Level Agile Tester (CTFL-AT) 公式ページ(サンセット情報含む)</td>
                                        <td>
                                            <a href="https://istqb.org/certifications/certified-tester-foundation-level-agile-tester-ctfl-at/" target="_blank" rel="noopener noreferrer">istqb.org</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>ISTQB® Foundation Level Extension Agile Tester Syllabus(英語版シラバス原文、2014年版)</td>
                                        <td>
                                            <a href="https://astqb.org/assets/documents/ISTQB-Foundation-Agile-Syllabus-.pdf" target="_blank" rel="noopener noreferrer">astqb.org</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>ISTQB® Certified Tester Foundation Level Syllabus v4.0.1(本体シラバス、アジャイル関連統合内容)</td>
                                        <td>
                                            <a href="https://istqb.org/?sdm_process_download=1&download_id=3345" target="_blank" rel="noopener noreferrer">istqb.org</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>ISTQB® Certified Tester Advanced Level Agile Tester (CTAL-AT) v2.0 公式ページ(CTFL-ATからの移行情報)</td>
                                        <td>
                                            <a href="https://www.istqb.org/certifications/agile-tester" target="_blank" rel="noopener noreferrer">istqb.org</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>JSTQB Foundation Level Extension シラバス アジャイルテスト担当者 日本語版(Version 2014.J02)</td>
                                        <td>
                                            <a href="https://jstqb.jp/dl/JSTQB-SyllabusFoundation-AgileExt_Version2014.J02.pdf" target="_blank" rel="noopener noreferrer">jstqb.jp</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>JSTQB Foundation Level シラバス 日本語版(V4.0)</td>
                                        <td>
                                            <a href="https://jstqb.jp/dl/JSTQB-SyllabusFoundation_VersionV40.J02.pdf" target="_blank" rel="noopener noreferrer">jstqb.jp</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3><span className="num">4.2</span>補足・実務解説記事</h3>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>資料名</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>7</td>
                                        <td>CTFL-AT Syllabus and Exam Details(ProcessExam)</td>
                                        <td>
                                            <a href="https://www.processexam.com/istqb/istqb-ctfl-at-certification-exam-syllabus" target="_blank" rel="noopener noreferrer">processexam.com</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Certified Tester Foundation Level Agile Tester (CTFL-AT) 解説記事</td>
                                        <td>
                                            <a href="https://www.istqb.guru/agile-tester/" target="_blank" rel="noopener noreferrer">istqb.guru</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>ISTQB Study Material 2026(CTFL v4.0との関係整理)</td>
                                        <td>
                                            <a href="https://www.istqb.guru/istqb-study-material/" target="_blank" rel="noopener noreferrer">istqb.guru</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>ISTQB Syllabus & Practice Exams(ASTQB提供、公式シラバスダウンロード窓口)</td>
                                        <td>
                                            <a href="https://astqb.org/resources/" target="_blank" rel="noopener noreferrer">astqb.org</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>ISTQB Agile Testerを受験してみた(実体験に基づく学習法・出題傾向の解説)</td>
                                        <td>
                                            <a href="https://teamspirit.hatenablog.com/entry/2022/01/18/100253" target="_blank" rel="noopener noreferrer">teamspirit.hatenablog.com</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>JSTQBが「CTFL v4.0」の日本語翻訳版をリリース(v3.1・Agile v2014との変更点比較)</td>
                                        <td>
                                            <a href="https://www.co-well.jp/blog/softwaretest_jstqb_v4.0" target="_blank" rel="noopener noreferrer">co-well.jp</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>ソフトウェアテストの学習に役立つJSTQBのシラバスと試験のご紹介(Agile Japan 2025 発表資料)</td>
                                        <td>
                                            <a href="https://2025.agilejapan.jp/wp-content/uploads/2025/11/1113_1400-1420_JSTQB_AgileJapan2025_20251105%E6%8F%90%E5%87%BA%E7%94%A8.pdf" target="_blank" rel="noopener noreferrer">agilejapan.jp</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="callout callout--note">
                            <div className="icon">📎</div>
                            <div className="body">
                                <strong className="callout-title">出典の使い分けについて</strong>
                                <p>
                                    No.1〜6は本記事の技術的内容(学習目的、K-level、章構成、用語定義)の根拠として直接使用した一次資料です。No.7〜13は、資格の位置づけ・学習方法・最新動向に関する背景情報の裏付けとして使用しました。
                                </p>
                            </div>
                        </div>

                        <h3><span className="num">4.3</span>次のステップ(Chapter 3への橋渡し)</h3>
                        <p>
                            本記事はChapter 2の範囲に限定していますが、続くChapter 3「Agile Testing Methods, Techniques, and Tools」では、TDD/ATDD/BDD、テストピラミッド、
                            <strong>Brian Marickが考案しLisa CrispinとJanet Gregoryが発展させたテスト象限(Testing Quadrants)</strong>
                            、探索的テスト、非機能テストなど、より実践的な技法が扱われます。学習を継続する場合は、以下も有用な一次情報源です。
                        </p>

                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>資料名</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>14</td>
                                        <td>The Agile Testing Quadrants(Lisa Crispin公式ブログ、最新版の象限モデル)</td>
                                        <td>
                                            <a href="https://lisacrispin.com/2024/10/11/the-agile-testing-quadrants/" target="_blank" rel="noopener noreferrer">lisacrispin.com</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>Testing Quadrants(PMI Disciplined Agile、象限モデルの実務解説)</td>
                                        <td>
                                            <a href="https://www.pmi.org/disciplined-agile/agile/testingquadrants" target="_blank" rel="noopener noreferrer">pmi.org</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <div className="divider" />
                    <footer>
                        <p>
                            本記事は教育目的で作成されたものであり、ISTQB®・JSTQB®の著作物そのものを複製するものではありません。正確な学習・受験対策のためには、必ず上記の公式シラバス原文を参照してください。
                        </p>
                    </footer>
                </main>
            </div>
        </div>
    );
}
