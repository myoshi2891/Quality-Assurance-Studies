/**
 * データ品質モニタリング自動化ガイドの Mermaid 図解定義（fix-mermaid スキル準拠）。
 * - 図のソースは元 HTML の DIAGRAMS をそのまま転記している（テストが元 HTML と突合する）
 * - %%{init}%% の JSON 内にシングルクォートを含めない（含めるとダークテーマへ黙ってフォールバックする）
 */
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#fffdf8",
    "primaryColor": "#f2ecdd",
    "primaryBorderColor": "#c9bd94",
    "primaryTextColor": "#2a2419",
    "lineColor": "#8b8368",
    "secondaryColor": "#e3f1ea",
    "tertiaryColor": "#faf6ec",
    "nodeBorder": "#c9bd94",
    "clusterBkg": "#faf6ec",
    "clusterBorder": "#e6ddc7",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Georgia, Noto Serif JP, Hiragino Mincho ProN, Yu Mincho, serif",
    "fontSize": "16px"
  },
  "flowchart": { "htmlLabels": true, "curve": "basis" }
}}%%
`;

export const DIAGRAM_ROADMAP = `${MERMAID_CONFIG}flowchart TD
    S0["Step 0　データ品質がなぜ経営課題なのかを理解する"]
    S1["Step 1　データファクトリーの視点で劣化の原因を知る"]
    S2["Step 2　監視の4本柱を理解する"]
    S3["Step 3　自社に自動化が必要かROIで判断する"]
    S4["Step 4　教師なしMLモデルを設計する"]
    S5["Step 5　実データでモデルを機能させる"]
    S6["Step 6　良い通知を設計しアラート疲れを防ぐ"]
    S7["Step 7　データスタック全体と統合する"]
    S8["Step 8　本番展開しセルフドライビングデータへ"]

    S0 --> S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8

    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f88d6,stroke-width:1px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6ec79b,stroke-width:1px;
    class S0 hub
    class S8 done`;


export const DIAGRAM_FACTORY_ORIGINS = `${MERMAID_CONFIG}flowchart TB
    factory["データファクトリー"]
    factory --> input["入力起因　センサー故障・入力ミス・上流の問題"]
    factory --> meta["メタデータ起因　データセット説明の誤り・API仕様変更の未告知"]
    factory --> sys["システム起因　ソフトウェアのバグ・障害・遅延"]
    factory --> sched["スケジュール起因　処理順序や実行タイミングのずれ"]
    factory --> code["コード起因　変換・集計・結合ロジックの誤り"]
    factory --> config["設定起因　入力に合わない設定のまま稼働"]
    factory --> newtech["新技術起因　オンプレからクラウドへの移行など仕様差異"]
    factory --> people["人起因　新機能追加・バグ修正・リファクタ・引き継ぎ不足"]

    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f88d6,stroke-width:1px;
    class factory hub`;

export const DIAGRAM_SCARS_AND_SHOCKS = `${MERMAID_CONFIG}flowchart LR
    normal1["正常なデータ　トレンド"] -->|障害発生イコールショック1| incident["データ傷が蓄積　未検知期間"]
    incident -->|自動検知| detect["異常を検知"]
    detect -->|修正・復旧イコールショック2| recovered["正常なトレンドへ復帰"]
    recovered -.->|"継続監視"| normal1

    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f88d6,stroke-width:1px;
    classDef done fill:#bfe4d2,color:#123722,stroke:#6ec79b,stroke-width:1px;
    class detect hub
    class recovered done`;

export const DIAGRAM_FOUR_PILLARS = `${MERMAID_CONFIG}flowchart TB
    core["自動データ品質　モニタリング"]
    core --> obs["1 データ観測性　Data Observability"]
    core --> rules["2 検証ルール　Validation Rules"]
    core --> metrics["3 主要指標　Key Metrics"]
    core --> uml["4 教師なし機械学習　UML Checks"]

    obs --> obs1["メタデータのみを参照　計算コストが低く広くスケール"]
    rules --> rules1["ドメイン知識を反映した　ハードなルール"]
    metrics --> metrics1["時系列モデルで　季節性込みの予測"]
    uml --> uml1["未知の未知　unknown unknowns　を相関ごと検知"]

    classDef hub fill:#c9c4ef,color:#221f52,stroke:#8f88d6,stroke-width:1px;
    class core hub`;

