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

