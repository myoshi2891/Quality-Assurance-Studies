export const MERMAID_CONFIG = `%%{init: {"theme":"base","themeVariables":{"background":"#0a1626","primaryColor":"#13263f","mainBkg":"#13263f","primaryBorderColor":"#7c9eff","nodeBorder":"#7c9eff","primaryTextColor":"#e8eefb","textColor":"#e8eefb","lineColor":"#8fa8d8","secondaryColor":"#0d1a2d","tertiaryColor":"#0d1a2d","clusterBkg":"#0d1a2d","clusterBorder":"#2a3f63","edgeLabelBackground":"#0a1626","fontFamily":"Noto Sans JP, Noto Sans CJK JP, Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, sans-serif","fontSize":"16px"},"htmlLabels":true,"flowchart":{"curve":"basis","nodeSpacing":50,"rankSpacing":55,"padding":16}}}%%`;
export const DIAGRAM_0 = `${MERMAID_CONFIG}
flowchart TD

subgraph N1_ROW3[""]
direction LR
N1_S8["Step 8<br/>MLモデル開発の流れ"]
N1_S9["Step 9<br/>他規格との関係"]
N1_S10["Step 10<br/>導入手順と注意点"]
end
subgraph N1_ROW2[""]
direction LR
N1_S5["Step 5<br/>規格の構成"]
N1_S6["Step 6<br/>4グループの詳細"]
N1_S7["Step 7<br/>AI固有プロセス"]
end
subgraph N1_ROW1[""]
direction LR
N1_S1["Step 1<br/>規格の全体像"]
N1_S2["Step 2<br/>背景と位置づけ"]
N1_S3["Step 3<br/>AIが特別な理由"]
N1_S4["Step 4<br/>3種類のプロセス"]
end
N1_ROW1 --> N1_ROW2
N1_ROW2 --> N1_ROW3
N1_S8 --> N1_S9
N1_S9 --> N1_S10
N1_S5 --> N1_S6
N1_S6 --> N1_S7
N1_S1 --> N1_S2
N1_S2 --> N1_S3
N1_S3 --> N1_S4`;
export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart TD
N2_A["ISO/IEC 5338 は何の規格か？"]
N2_B{"何を定めるか"}
N2_C["プロセス規格 ✅"]
N2_D["製品品質規格 ❌"]
N2_E["マネジメントシステム規格 ❌"]
N2_F["AIシステムの企画から廃棄までの工程を整理"]

N2_A --> N2_B
N2_B -->|"活動の枠組み"| N2_C
N2_B -->|"精度や性能の合格基準"| N2_D
N2_B -->|"組織の認証要求事項"| N2_E
N2_C --> N2_F`;
export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart TD
N3_A["AIモデルをリリース"]
N3_B["本番稼働"]
N3_C{"入力データや<br/>望ましい出力は変化したか？"}
N3_D["性能低下のおそれ"]
N3_E["継続的検証で検知"]
N3_F["再学習・再調整・要件見直し"]

N3_A --> N3_B
N3_B --> N3_C
N3_C -->|"変わらない"| N3_B
N3_C -->|"データドリフト<br/>入力分布が変化"| N3_D
N3_C -->|"コンセプトドリフト<br/>正解の基準が変化"| N3_D
N3_D --> N3_E
N3_E --> N3_F
N3_F --> N3_A`;
export const DIAGRAM_3 = `${MERMAID_CONFIG}
flowchart LR
N4_BASE["ISO/IEC/IEEE 15288<br/>ISO/IEC/IEEE 12207"]
N4_G["Generic<br/>そのまま利用"]
N4_M["Modified<br/>AI向けに修正"]
N4_NEW["AI固有の特性<br/>ISO/IEC 22989, 23053"]
N4_AI["AI-specific<br/>新規追加"]
N4_OUT["ISO/IEC 5338<br/>AIシステムライフサイクルプロセス"]

N4_BASE --> N4_G
N4_BASE --> N4_M
N4_NEW --> N4_AI
N4_G --> N4_OUT
N4_M --> N4_OUT
N4_AI --> N4_OUT`;
export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart LR
N5_ROOT["AIシステムライフサイクルプロセス<br/>第6章"]
N5_A["6.1 合意プロセス<br/>2プロセス"]
N5_B["6.2 組織のプロジェクト実現プロセス<br/>6プロセス"]
N5_C["6.3 技術マネジメントプロセス<br/>8プロセス"]
N5_D["6.4 技術プロセス<br/>17プロセス"]
N5_A1["取得 / 供給"]
N5_B1["ライフサイクルモデル管理 ほか"]
N5_C1["計画 / リスク / 構成管理 ほか"]
N5_D1["要件定義 → 設計 → 実装 → 検証 → 運用 → 廃棄"]

N5_ROOT --> N5_A
N5_ROOT --> N5_B
N5_ROOT --> N5_C
N5_ROOT --> N5_D
N5_A --> N5_A1
N5_B --> N5_B1
N5_C --> N5_C1
N5_D --> N5_D1`;
export const DIAGRAM_5 = `${MERMAID_CONFIG}
flowchart LR
N6_A["展開済みモデル"]
N6_B["本番入力の監視"]
N6_C["出力の品質評価"]
N6_D{"ドリフト検知？"}
N6_E["原因分析"]
N6_F["データ更新 / 再学習 / 要件見直し"]
N6_G["検証・再展開"]

N6_A --> N6_B
N6_A --> N6_C
N6_B --> N6_D
N6_C --> N6_D
N6_D -->|"なし"| N6_A
N6_D -->|"あり"| N6_E
N6_E --> N6_F
N6_F --> N6_G
N6_G --> N6_A`;
export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TD
N7_R["モデル要件の設定<br/>6.4.3"]
N7_D1["データ取得・更新<br/>6.4.8"]
N7_D2["データ準備<br/>6.4.8"]
N7_T["学習・チューニング<br/>6.4.9"]
N7_V["展開前テスト<br/>6.4.11"]
N7_OK{"合格？"}
N7_DP["モデル展開<br/>6.4.12"]
N7_CV["展開後の継続的検証<br/>6.4.14"]
N7_RT{"再学習が必要？"}

N7_R --> N7_D1
N7_D1 --> N7_D2
N7_D2 --> N7_T
N7_T --> N7_V
N7_V --> N7_OK
N7_OK -->|"いいえ"| N7_T
N7_OK -->|"はい"| N7_DP
N7_DP --> N7_CV
N7_CV --> N7_RT
N7_RT -->|"はい"| N7_D1
N7_RT -->|"いいえ"| N7_CV`;
export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart TD
N8_I["構想・要件"]
N8_DV["設計・開発"]
N8_VV["検証・妥当性確認"]
N8_DEP["展開"]
N8_OPS["運用・監視"]
N8_RE["再評価"]
N8_RET["廃棄・退役"]

N8_I --> N8_DV
N8_DV --> N8_VV
N8_VV --> N8_DEP
N8_DEP --> N8_OPS
N8_OPS --> N8_RE
N8_RE -->|"修正・更新"| N8_DV
N8_RE -->|"役目を終えた"| N8_RET`;
export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart LR
N9_C5338["ISO/IEC 5338<br/>AIライフサイクルプロセス"]
N9_B15288["ISO/IEC/IEEE 15288<br/>システムライフサイクル"]
N9_B12207["ISO/IEC/IEEE 12207<br/>ソフトウェアライフサイクル"]
N9_C22989["ISO/IEC 22989<br/>AI概念と用語"]
N9_C23053["ISO/IEC 23053<br/>ML使用AIシステムの枠組み"]
N9_C42001["ISO/IEC 42001<br/>AIマネジメントシステム"]
N9_C23894["ISO/IEC 23894<br/>AIリスクマネジメント"]
N9_C5469["ISO/IEC TR 5469<br/>AIの機能安全"]
N9_C62304["IEC 62304<br/>医療機器ソフトウェア"]

N9_B15288 --> N9_C5338
N9_B12207 --> N9_C5338
N9_C22989 --> N9_C5338
N9_C23053 --> N9_C5338
N9_C5338 -.->|"詳細を補完"| N9_C42001
N9_C5338 -.->|"参照"| N9_C23894
N9_C5338 -.->|"参照"| N9_C5469
N9_C5338 -.->|"併用"| N9_C62304`;
export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart TD
N10_A["① 対象AIシステムの範囲を定義"]
N10_B["② 既存の開発プロセスを棚卸し"]
N10_C["③ 5338の各プロセスと対応づけ"]
N10_D{"④ ギャップはあるか？"}
N10_E["⑤ AI固有プロセスを追加"]
N10_F["⑤' AI特有の留意点を追記"]
N10_G["⑥ 役割・責任を割り当て"]
N10_H["⑦ 成果物と証跡を整備"]
N10_I["⑧ 運用開始・継続的に改善"]

N10_A --> N10_B
N10_B --> N10_C
N10_C --> N10_D
N10_D -->|"データ・知識・継続的検証が不足"| N10_E
N10_D -->|"既存プロセスで足りる"| N10_F
N10_E --> N10_G
N10_F --> N10_G
N10_G --> N10_H
N10_H --> N10_I`;
