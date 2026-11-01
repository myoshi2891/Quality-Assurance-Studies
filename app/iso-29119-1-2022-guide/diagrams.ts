export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#0a1626",
    "primaryColor": "#10213a",
    "primaryBorderColor": "#7c9eff",
    "primaryTextColor": "#e4ecfb",
    "lineColor": "#7c9eff",
    "secondaryColor": "#0c1a2d",
    "tertiaryColor": "#14284a",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#0c1a2d",
    "clusterBorder": "#1e3250",
    "edgeLabelBackground": "#0c1a2d",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis" }
}}%%`;

export const DIAGRAM_01 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: 本ガイドの学習ロードマップ
    accDescr: STEP 1 規格の全体像から、STEP 4 基本概念、STEP 5 計画と戦略、STEP 6 フレームワーク、STEP 7 設計と実行、STEP 8 支援活動、STEP 9 システム特性と役割、STEP 10 実務への適用へと進む学習順序。
    R1["STEP1<br/>規格の全体像"] --> R2["STEP4<br/>基本概念<br/>4.1節"]
    R2 --> R3["STEP5<br/>計画と戦略<br/>4.2節"]
    R3 --> R4["STEP6<br/>フレームワーク<br/>4.3節"]
    R4 --> R5["STEP7<br/>設計と実行<br/>4.4節"]
    R5 --> R6["STEP8<br/>支援活動<br/>4.5〜4.7節"]
    R6 --> R7["STEP9<br/>システム特性と役割<br/>附属書A・B"]
    R7 --> R8["STEP10<br/>実務への適用"]`;

export const DIAGRAM_02 = `${MERMAID_CONFIG}
flowchart TB
    accTitle: ISO/IEC/IEEE 29119シリーズの構成
    accDescr: Part 1 一般概念が中心となり、Part 2 テストプロセス、Part 3 テスト文書化、Part 4 テスト技法に概念と用語を提供し、Part 5 キーワード駆動テストや技術報告TR（Part 6 アジャイル、Part 11 AI）とも連携する。
    S1["Part 1：一般概念<br/>29119-1:2022<br/>情報提供 informative"]
    S2["Part 2：テストプロセス<br/>29119-2:2021<br/>規範 normative"]
    S3["Part 3：テスト文書化<br/>29119-3:2021<br/>規範 normative"]
    S4["Part 4：テスト技法<br/>29119-4:2021<br/>規範 normative"]
    S5["Part 5：キーワード駆動テスト<br/>29119-5:2024<br/>規範 normative"]
    S6["技術報告 TR<br/>Part 6 アジャイル<br/>Part 11 AIベースシステム"]
    S1 -->|"概念と用語を提供"| S2
    S1 -->|"概念と用語を提供"| S3
    S1 -->|"概念と用語を提供"| S4
    S1 --> S5
    S1 --> S6`;

export const DIAGRAM_03 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: 2013年版から2022年版への変更点
    accDescr: 2013年版 Concepts and definitions から整理・簡素化を経て2022年版 General concepts へ改訂され、テストモデル中心の設計やメトリクス本文化、附属書Aシステム特性の追加など新しい視点が加わった。
    V1["2013年版<br/>Concepts and definitions"] --> V2["整理・簡素化<br/>用語削減・構成の並べ替え"]
    V2 --> V3["2022年版<br/>General concepts"]
    V2 --> V4["追加された視点<br/>テストモデル中心の設計<br/>メトリクスの本文化<br/>附属書A システム特性"]
    V4 --> V3`;

export const DIAGRAM_04 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: 29119-1:2022 本文と附属書の構成
    accDescr: 本文は1〜3章（適用範囲・用語）、4章（ソフトウェアテストの概念：4.1〜4.7）、附属書A（システム特性とテスト例）、附属書B（テストの役割）から構成される。
    C0["29119-1:2022 本文"] --> C1["1〜3章<br/>適用範囲・用語"]
    C0 --> C2["4章<br/>ソフトウェアテストの概念"]
    C0 --> C3["附属書A<br/>システム特性とテスト例"]
    C0 --> C4["附属書B<br/>テストの役割"]
    C2 --> C21["§4.1 テスト入門"]
    C2 --> C22["§4.2 計画と戦略"]
    C2 --> C23["§4.3 フレームワーク"]
    C2 --> C24["§4.4 設計と実行"]
    C2 --> C25["§4.5 プロジェクト管理"]
    C2 --> C26["§4.6 報告"]
    C2 --> C27["§4.7 インシデント管理"]`;

export const DIAGRAM_05 = `${MERMAID_CONFIG}
flowchart TB
    accTitle: テストの基本的な分類
    accDescr: テストは静的テスト（実行せず検査）と動的テスト（実行して評価）に分かれ、動的テストには仕様ベース、構造ベース、経験ベースの技法がある。
    T1["テスト Testing"] --> T2["静的テスト<br/>実行せずに検査<br/>例：レビュー・静的解析"]
    T1 --> T3["動的テスト<br/>実行して評価"]
    T3 --> T4["仕様ベーステスト<br/>外部の入出力が主な根拠<br/>別名：ブラックボックス"]
    T3 --> T5["構造ベーステスト<br/>内部構造から導出<br/>別名：ホワイトボックス"]
    T3 --> T6["経験ベースの技法<br/>テスト担当者の経験を活用"]`;

export const DIAGRAM_06 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: テストベースとテストオラクルによるテスト実行と判定
    accDescr: テストベースからテストケースを設計しテストを実行、実際の結果をテストオラクル（期待結果の拠り所）と比較して合否を判定する。
    B1["テストベース<br/>要求・設計・期待動作の理解"] --> B2["テストケース設計<br/>前提条件・入力・期待結果"]
    B2 --> B3["テスト実行"]
    B3 --> B4["実際の結果"]
    B5["テストオラクル<br/>期待結果の拠り所"] --> B6{"実際の結果と<br/>期待結果を比較"}
    B4 --> B6
    B6 -->|"一致"| B7["合格"]
    B6 -->|"不一致"| B8["不具合の疑い<br/>インシデント報告へ"]`;

export const DIAGRAM_07 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: リスクベースドテストの反復サイクル
    accDescr: リスク特定、リスク分析（発生頻度と影響度）、優先順位付け、テスト戦略反映、テスト実施、リスク再評価のループサイクル。
    K1["リスクを特定"] --> K2["リスクを分析<br/>起こりやすさと影響度"]
    K2 --> K3["優先順位を付ける"]
    K3 --> K4["テスト戦略に反映<br/>技法・深さ・順序"]
    K4 --> K5["テストを実施"]
    K5 --> K6["結果を見てリスクを再評価"]
    K6 -.->|"繰り返し"| K1`;

export const DIAGRAM_08 = `${MERMAID_CONFIG}
flowchart TB
    accTitle: テスト戦略とテストアプローチの構成要素
    accDescr: テスト戦略の下にテストアプローチがあり、テストレベル、テストタイプ、テスト技法、テストプラクティス、静的テストの形態を定義する。
    A1["テスト戦略 Test Strategy"] --> A2["テストアプローチ<br/>高レベルの実装上の選択"]
    A2 --> A3["テストレベル<br/>例：単体・結合・システム・受入"]
    A2 --> A4["テストタイプ<br/>例：性能・セキュリティ・信頼性"]
    A2 --> A5["テスト技法<br/>例：同値分割・境界値分析"]
    A2 --> A6["テストプラクティス<br/>例：モデルベース・探索的"]
    A2 --> A7["静的テストの形態<br/>例：レビュー・静的解析"]`;

export const DIAGRAM_09 = `${MERMAID_CONFIG}
flowchart TB
    accTitle: テストプロセスの3層モデル
    accDescr: 最上位の組織テストプロセス、中間のテストマネジメントプロセス、実行層の動的テストプロセスの3階層と相互フィードバック関係。
    P1["組織テストプロセス<br/>テストポリシーと組織テストプラクティスの整備"] --> P2["テストマネジメントプロセス<br/>計画・監視と制御・完了"]
    P2 --> P3["動的テストプロセス<br/>設計と実装・環境とデータ・実行・インシデント報告"]
    P3 -.->|"実績の報告"| P2
    P3 -.->|"改善のフィードバック"| P1`;

export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: プロセスのインスタンス化の流れ
    accDescr: Part 2の汎用テストプロセスに対し自組織の状況（規模・リスク・開発方式）を反映して具体化されたプロセスインスタンスを導出し各プロジェクトで実行する。
    I1["汎用のテストプロセス<br/>Part 2"] --> I2["自組織の状況を反映<br/>規模・リスク・開発方式"]
    I2 --> I3["具体化されたプロセス<br/>インスタンス"]
    I3 --> I4["各プロジェクトで実行"]`;

export const DIAGRAM_11 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: テストモデルからテスト実行までの流れ
    accDescr: テストベースからテストモデルを作成し、テストカバレッジ項目を決定、テストケースを導出して実行し結果を評価・報告する。
    M1["テストベース<br/>要求・設計・期待動作"] --> M2["テストモデルを作る<br/>状態遷移図・決定表・分類木など"]
    M2 --> M3["テストカバレッジ項目を決める<br/>何を網羅するか"]
    M3 --> M4["テストケースを導出<br/>前提条件・入力・期待結果"]
    M4 --> M5["テストを実行"]
    M5 --> M6["結果を評価・報告"]`;

export const DIAGRAM_12 = `${MERMAID_CONFIG}
flowchart TB
    accTitle: スクリプト化テストと探索的テストの選択フロー
    accDescr: テストベースの安定性や監査証跡の要否に応じて、スクリプト化テスト中心、探索的テスト中心、あるいは両方の組み合わせを選択する。
    E1{"テストベースは<br/>明確で安定しているか"} -->|"はい"| E2{"再現性や監査の証跡が<br/>必要か"}
    E1 -->|"いいえ"| E5["探索的テストを中心にする"]
    E2 -->|"はい"| E3["スクリプト化テストを中心にする"]
    E2 -->|"いいえ"| E4["両方を組み合わせる"]
    E3 --> E6["必要に応じて<br/>探索的テストで補完する"]
    E5 --> E7["必要に応じて重要な発見を<br/>スクリプト化・自動化へ移す"]`;

export const DIAGRAM_13 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: 欠陥修正後の再テストと回帰テスト
    accDescr: 欠陥検出後に修正を行い、修正箇所が直ったか確認する再テスト、他への波及がないか確認する回帰テストを経てリリース判断を行う。
    G1["欠陥を検出"] --> G2["修正"]
    G2 --> G3["再テスト 確認テスト<br/>修正は効いたか"]
    G3 --> G4["回帰テスト<br/>他は壊れていないか"]
    G4 --> G5["リリース判断"]`;

export const DIAGRAM_14 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: A/Bテストの概念図
    accDescr: ユーザー群をランダムにバージョンAとBへ半数ずつ割り当て、指標を統計的に比較して優劣を判断する。
    AB1["ユーザー群"] --> AB2{"ランダムに割当"}
    AB2 -->|"半数"| AB3["バージョンA"]
    AB2 -->|"半数"| AB4["バージョンB"]
    AB3 --> AB5["指標を比較<br/>統計的に判断"]
    AB4 --> AB5`;

export const DIAGRAM_15 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: ファズテストの概念図
    accDescr: ランダムに近い入力を大量生成して投入し、クラッシュや異常挙動を検出してインシデント報告を行う。
    FZ1["ランダムに近い入力を大量生成"] --> FZ2["テスト対象に投入"]
    FZ2 --> FZ3{"クラッシュや異常な<br/>振る舞いはあるか"}
    FZ3 -->|"あり"| FZ4["入力を保存して<br/>インシデント報告"]
    FZ3 -->|"なし"| FZ1`;

export const DIAGRAM_16 = `${MERMAID_CONFIG}
stateDiagram-v2
    accTitle: インシデントのライフサイクル状態遷移
    accDescr: 検出から報告、分析、修正、再テストを経てクローズに至るライフサイクル。再テストで未解決の場合は修正に戻る。
    direction LR
    state "検出" as I1
    state "報告" as I2
    state "分析" as I3
    state "修正" as I4
    state "再テスト" as I5
    state "クローズ" as I6
    [*] --> I1
    I1 --> I2
    I2 --> I3
    I3 --> I4
    I4 --> I5
    I5 --> I6
    I5 --> I4 : 未解決
    I6 --> [*]`;

export const DIAGRAM_17 = `${MERMAID_CONFIG}
flowchart LR
    accTitle: システム特性からテスト戦略を考える流れ
    accDescr: 附属書Aの13特性と照合して該当する特性を特定し、専門的なテスト手法を確認、リスクに照らして戦略へ反映する。
    SC1["対象システムの特性を確認<br/>附属書Aの13特性と照合"] --> SC2["当てはまる特性を特定"]
    SC2 --> SC3["各特性の専門的なテストを確認"]
    SC3 --> SC4["リスクに照らして採否を判断"]
    SC4 --> SC5["テスト戦略に反映"]`;

export const DIAGRAM_18 = `${MERMAID_CONFIG}
flowchart TB
    accTitle: 実務への適用手順（7ステップ）
    accDescr: 手順1 システム特性整理、手順2 リスク分析、手順3 テスト戦略設計、手順4 計画作成、手順5 モデル設計と実行、手順6 状況可視化、手順7 改善へのループ。
    AP1["手順1<br/>対象システムと状況を整理<br/>附属書Aの特性を確認"] --> AP2["手順2<br/>リスクを特定・分析"]
    AP2 --> AP3["手順3<br/>テスト戦略を設計<br/>レベル・タイプ・技法・プラクティス"]
    AP3 --> AP4["手順4<br/>テスト計画を作成<br/>環境・データ・体制・スケジュール"]
    AP4 --> AP5["手順5<br/>テストモデルとケースを設計し実行"]
    AP5 --> AP6["手順6<br/>インシデント管理とメトリクスで状況を可視化"]
    AP6 --> AP7["手順7<br/>結果をもとにリスク再評価と改善"]
    AP7 -.-> AP2`;
