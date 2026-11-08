// Reconstructed from the original HTML SVGs, including the flowchart roadmap.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#091526",
    "primaryColor": "#13294a",
    "mainBkg": "#13294a",
    "primaryTextColor": "#e6edf7",
    "primaryBorderColor": "#7c9eff",
    "lineColor": "#7c9eff",
    "secondaryColor": "#0d1b2e",
    "tertiaryColor": "#0d1b2e",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#0d1b2e",
    "clusterBorder": "#2b4468",
    "edgeLabelBackground": "#0a1626",
    "fontFamily": "Noto Sans JP, Noto Sans CJK JP, sans-serif",
    "fontSize": "16px"
  },
  "htmlLabels": true,
  "flowchart": {
    "curve": "basis",
    "nodeSpacing": 55,
    "rankSpacing": 55,
    "padding": 20
  }
}}%%`;
export const DIAGRAMS: Record<string, string> = {
"mermaid-diagram-1": `${MERMAID_CONFIG}
flowchart TD
N1_V1["2006：初版<br/>ソフトウェア資産管理のプロセス"]
N1_V2["2012：第2版<br/>SAMプロセスと段階的適合性評価"]
N1_V3["2017：第3版<br/>ITAMシステム要求事項へ全面改訂"]
N1_V4["2024：定期見直しで確認（現行維持）<br/>と Amd 1（気候変動対応）発行"]
N1_V5["2025：実装ガイダンス<br/>ISO/IEC TS 19770-10 発行"]
N1_V1 --> N1_V2
N1_V2 --> N1_V3
N1_V3 --> N1_V4
N1_V4 --> N1_V5`,
"mermaid-diagram-2": `${MERMAID_CONFIG}
flowchart TB
N2_A["ISO/IEC 19770-1:2017"]
N2_B["本文 箇条1〜3<br/>適用範囲・引用規格・用語"]
N2_C["本文 箇条4〜10<br/>マネジメントシステム要求事項"]
N2_D["Annex A（規定）<br/>ITAMプロセス領域"]
N2_E["Annex B（参考）<br/>3つのティア"]
N2_F["Annex C（参考）<br/>IT資産の特性と追加要求の理由"]
N2_C1["ISO 55001の要求事項を<br/>ベースに拡張"]
N2_D1["適用するITAMプロセスを<br/>組織が決定し適用宣言書に記録"]
N2_E1["導入順序の推奨"]
N2_A --> N2_B
N2_A --> N2_C
N2_A --> N2_D
N2_A --> N2_E
N2_A --> N2_F
N2_C --> N2_C1
N2_D --> N2_D1
N2_E --> N2_E1`,
"mermaid-diagram-3": `${MERMAID_CONFIG}
flowchart LR
N3_P4["箇条4 組織の状況"]
N3_P5["箇条5 リーダーシップ"]
N3_P6["箇条6 計画"]
N3_P7["箇条7 支援"]
N3_D8["箇条8 運用<br/>Annex Aプロセス"]
N3_C9["箇条9 パフォーマンス評価"]
N3_A10["箇条10 改善"]
subgraph N3_Act["Act 改善"]
N3_A10
end
subgraph N3_Check["Check 評価"]
N3_C9
end
subgraph N3_Do["Do 実行"]
N3_D8
end
subgraph N3_Plan["Plan 計画"]
N3_P4
N3_P5
N3_P6
N3_P7
end
N3_P4 --> N3_P5
N3_P5 --> N3_P6
N3_P6 --> N3_P7
N3_P7 --> N3_D8
N3_D8 --> N3_C9
N3_C9 --> N3_A10
N3_A10 -.->|"継続的改善"| N3_P4`,
"mermaid-diagram-4": `${MERMAID_CONFIG}
flowchart LR
N4_A["ISO 55001:2014<br/>アセットマネジメント<br/>（主に物理資産向け）"]
N4_B["ISO/IEC 19770-1:2017<br/>ITアセットマネジメント"]
N4_C["IT資産ならではの<br/>追加要求事項"]
N4_D["19770-1への適合は<br/>55001への適合を意味しない"]
N4_A -->|"変更を加えて拡張"| N4_B
N4_B --> N4_C
N4_B -.->|"注意"| N4_D`,
"mermaid-diagram-5": `${MERMAID_CONFIG}
flowchart LR
N5_S["仕様策定"]
N5_AQ["調達"]
N5_DV["開発"]
RL["リリース"]
N5_DP["展開"]
N5_OP["運用"]
N5_RT["廃棄"]
N5_TDA["Trustworthy Data<br/>変更・データ・ライセンス・セキュリティ"]
N5_OP2["Optimization<br/>関係・財務・SLA"]
N5_S --> N5_AQ
N5_AQ -.->|"開発する場合"| N5_DV
N5_DV --> RL
RL --> N5_DP
N5_AQ -.->|"購入した SaaS・機器など"| N5_DP
N5_DP --> N5_OP
N5_OP --> N5_RT
N5_RT -.->|"再利用・教訓"| N5_S
N5_TDA -.- N5_S
N5_TDA -.- N5_OP
N5_OP2 -.- N5_OP`,
"mermaid-diagram-6": `${MERMAID_CONFIG}
flowchart BT
N6_T1["Tier 1：Trustworthy Data<br/>信頼できるデータ<br/>『持っているものを知る』"]
N6_T2["Tier 2：Life Cycle Integration<br/>ライフサイクル統合<br/>『IT資産ライフサイクルで効率とコスト効果を上げる』"]
N6_T3["Tier 3：Optimization<br/>最適化<br/>『機能横断の連携で更なる効率とコスト効果』"]
N6_MS["マネジメントシステム（箇条4〜10）<br/>全ティアの土台"]
N6_T1 --> N6_T2
N6_T2 --> N6_T3
N6_MS --> N6_T1`,
"mermaid-diagram-7": `${MERMAID_CONFIG}
flowchart LR
N7_X["データが不正確"]
N7_Y["ライセンス過不足の誤判断"]
N7_Z["監査での追徴リスク<br/>または過剰購入"]
N7_W["Trustworthy Data確立"]
N7_V["正確な把握"]
N7_U["契約交渉・最適化が可能"]
N7_X --> N7_Y
N7_Y --> N7_Z
N7_W --> N7_V
N7_V --> N7_U`,
"mermaid-diagram-8": `${MERMAID_CONFIG}
flowchart TD
N8_S1["① 目的・経営課題の整理<br/>（箇条4・5）"]
N8_S2["② 適用範囲（スコープ）決定<br/>対象資産・拠点・環境"]
N8_S3["③ 現状把握（ベースライン）<br/>As-Isの台帳・ツール・プロセス"]
N8_S4["④ ITAM方針・目的・役割定義<br/>（箇条5・6）"]
N8_S5["⑤ Tier 1：Trustworthy Data構築<br/>棚卸し・突合・ライセンス把握"]
N8_S6["⑥ Tier 2：ライフサイクル統合<br/>調達・展開・廃棄との連携"]
N8_S7["⑦ Tier 3：最適化<br/>財務・契約・SLA連携"]
N8_S8["⑧ 評価と改善（箇条9・10）<br/>各ティアで並行して継続<br/>内部監査・マネジメントレビュー"]
N8_S1 --> N8_S2
N8_S2 --> N8_S3
N8_S3 --> N8_S4
N8_S4 --> N8_S5
N8_S5 --> N8_S6
N8_S6 --> N8_S7
N8_S5 -.->|"評価・改善"| N8_S8
N8_S6 -.->|"評価・改善"| N8_S8
N8_S7 -.->|"評価・改善"| N8_S8
N8_S8 -.->|"継続"| N8_S3`,
"mermaid-diagram-9": `${MERMAID_CONFIG}
flowchart TB
N9_F["ISO/IEC 19770 ファミリー"]
N9_P1["19770-1:2017<br/>ITAMシステム要求事項（本書）"]
N9_P2["19770-2<br/>ソフトウェア識別タグ（SWID）"]
N9_P3["19770-3<br/>権利（Entitlement）スキーマ"]
N9_P4["19770-4<br/>リソース使用量"]
N9_P5["19770-5:2015<br/>概要と用語"]
N9_P10["19770-10:2025（TS）<br/>ITAM実装ガイダンス"]
N9_F --> N9_P1
N9_F --> N9_P2
N9_F --> N9_P3
N9_F --> N9_P4
N9_F --> N9_P5
N9_F --> N9_P10
N9_P5 -.->|"用語を定義"| N9_P1
N9_P10 -.->|"実装の手引き"| N9_P1`,
"mermaid-diagram-10": `${MERMAID_CONFIG}
flowchart LR
N10_A["共通の骨格<br/>箇条4〜10"]
N10_B["ISO/IEC 19770-1<br/>ITAM"]
N10_C["ISO/IEC 27001<br/>ISMS"]
N10_D["ISO/IEC 20000-1<br/>ITSM"]
N10_E["ISO 9001<br/>QMS"]
N10_A --> N10_B
N10_A --> N10_C
N10_A --> N10_D
N10_A --> N10_E
N10_B <-->|"資産台帳・変更履歴を共有"| N10_C
N10_B <-->|"構成情報・SLAを共有"| N10_D`
};
