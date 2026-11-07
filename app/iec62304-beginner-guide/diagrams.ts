// Reconstructed from the original HTML SVGs, including the flowchart roadmap.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#091526",
    "primaryColor": "#12233a",
    "mainBkg": "#12233a",
    "primaryTextColor": "#e6edf7",
    "primaryBorderColor": "#7c9eff",
    "lineColor": "#7c9eff",
    "secondaryColor": "#0b182a",
    "tertiaryColor": "#0b182a",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#0b182a",
    "clusterBorder": "#2a4470",
    "edgeLabelBackground": "#0d1b2e",
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
"mmd-0": `${MERMAID_CONFIG}
flowchart LR
N0_H1["2006年5月<br/>第1版 発行"]
N0_H2["2012年<br/>JIS T 2304:2012 制定"]
N0_H3["2015年6月<br/>Amendment 1 発行"]
N0_H4["2017年3月<br/>JIS T 2304:2017 改正"]
N0_H5["2023年8月<br/>ISO で確認 confirmed"]
N0_H6["2026年<br/>第2版は CD 段階"]
N0_H1 --> N0_H2
N0_H2 --> N0_H3
N0_H3 --> N0_H4
N0_H4 --> N0_H5
N0_H5 --> N0_H6`,
"mmd-1": `${MERMAID_CONFIG}
flowchart TD
subgraph N1_P["主要プロセス"]
N1_P5["箇条5：開発プロセス"]
N1_P6["箇条6：保守プロセス"]
N1_P7["箇条7：リスクマネジメント"]
N1_P8["箇条8：構成管理"]
N1_P9["箇条9：問題解決"]
end
subgraph N1_G["箇条4：一般要求事項（土台）"]
N1_G1["4.1 品質マネジメントシステム"]
N1_G2["4.2 リスクマネジメント"]
N1_G3["4.3 ソフトウェア安全クラス分類"]
N1_G4["4.4 レガシーソフトウェア"]
end
N1_P7 -.->|"支える"| N1_P5
N1_P7 -.->|"支える"| N1_P6
N1_P8 -.->|"支える"| N1_P5
N1_P8 -.->|"支える"| N1_P6
N1_P9 -.->|"支える"| N1_P5
N1_P9 -.->|"支える"| N1_P6
N1_G --> N1_P5
N1_G --> N1_P6`,
"mmd-2": `${MERMAID_CONFIG}
flowchart TD
N2_S["開始：ソフトウェアシステムを特定"]
N2_Q1{"危険状態に<br/>寄与しうるか"}
N2_A["クラス A"]
N2_Q2{"ソフトウェア外のリスクコントロール後も<br/>許容できないリスクが残るか"}
N2_Q3{"起こりうる危害は<br/>死亡または重傷か"}
N2_C["クラス C"]
N2_B["クラス B"]
N2_E["クラス根拠を文書化"]
N2_S --> N2_Q1
N2_Q1 -->|"寄与しない"| N2_A
N2_Q1 -->|"寄与しうる"| N2_Q2
N2_Q2 -->|"残らない"| N2_A
N2_Q2 -->|"残る"| N2_Q3
N2_Q3 -->|"はい"| N2_C
N2_Q3 -->|"いいえ（重傷ではない）"| N2_B
N2_A --> N2_E
N2_B --> N2_E
N2_C --> N2_E`,
"mmd-3": `${MERMAID_CONFIG}
flowchart LR
N3_X1["全体をクラス C として<br/>統一して開発"]
N3_R1["メリット：判断が単純<br/>デメリット：作業量が大きい"]
N3_X2["アーキテクチャで分離し<br/>部品ごとにクラス付け"]
N3_R2["メリット：低リスク部分の負担減<br/>デメリット：分離の正当化が必要"]
N3_X1 --> N3_R1
N3_X2 --> N3_R2`,
"mmd-4": `${MERMAID_CONFIG}
flowchart LR
N4_A51["5.1<br/>開発計画"]
N4_A52["5.2<br/>要求事項分析"]
N4_A53["5.3<br/>アーキテクチャ設計"]
N4_A54["5.4<br/>詳細設計"]
N4_A55["5.5<br/>ユニット実装と検証"]
N4_A56["5.6<br/>統合と統合テスト"]
N4_A57["5.7<br/>システムテスト"]
N4_A58["5.8<br/>リリース"]
N4_A51 --> N4_A52
N4_A52 --> N4_A53
N4_A53 --> N4_A54
N4_A54 --> N4_A55
N4_A55 --> N4_A56
N4_A56 --> N4_A57
N4_A57 --> N4_A58`,
"mmd-5": `${MERMAID_CONFIG}
flowchart TD
N5_CA["クラス A<br/>計画・要求・実装・システムテスト・リリース"]
N5_CB["クラス B<br/>A に加えて アーキテクチャ・ユニット検証・統合テスト"]
N5_CC["クラス C<br/>B に加えて 詳細設計・追加受入基準・分離の識別"]
N5_CA --> N5_CB
N5_CB --> N5_CC`,
"mmd-6": `${MERMAID_CONFIG}
flowchart TD
N6_M1["6.1 保守計画の確立"]
N6_M2["6.2 フィードバックの監視<br/>問題報告と変更依頼の評価"]
N6_M3{"変更が必要か"}
N6_M9["記録して終了"]
N6_M4["6.2 問題・変更の分析<br/>安全への影響評価"]
N6_M5["変更依頼の承認"]
N6_M6["6.3 変更の実装<br/>開発プロセス 箇条5 を再適用"]
N6_M7["変更後のリリース"]
N6_M1 --> N6_M2
N6_M2 --> N6_M3
N6_M3 -->|"不要"| N6_M9
N6_M3 -->|"必要"| N6_M4
N6_M4 --> N6_M5
N6_M5 --> N6_M6
N6_M6 --> N6_M7`,
"mmd-7": `${MERMAID_CONFIG}
flowchart LR
N7_R1["7.1<br/>危険状態に寄与する<br/>ソフトウェアの分析"]
N7_R2["7.2<br/>リスクコントロール<br/>手段の定義"]
N7_R3["7.3<br/>リスクコントロール<br/>手段の検証"]
N7_R4["7.4<br/>変更時の<br/>リスクマネジメント"]
N7_R1 --> N7_R2
N7_R2 --> N7_R3
N7_R3 --> N7_R4
N7_R4 -.->|"変更のたびに"| N7_R1`,
"mmd-8": `${MERMAID_CONFIG}
flowchart TD
N8_H["ハザード"]
N8_C1{"対策の場所"}
N8_S1["例：入力範囲チェック<br/>ウォッチドッグ"]
N8_S2["例：ハードウェアの安全回路<br/>運用手順"]
N8_N1["リスクは下がるが<br/>クラスの引き下げ根拠にはならない"]
N8_N2["クラスの引き下げ根拠に<br/>なりうる"]
N8_H --> N8_C1
N8_C1 -->|"ソフトウェア内"| N8_S1
N8_C1 -->|"ソフトウェア外"| N8_S2
N8_S1 --> N8_N1
N8_S2 --> N8_N2`,
"mmd-9": `${MERMAID_CONFIG}
flowchart LR
N9_A["変更依頼"]
N9_B["影響分析<br/>安全への影響を含む"]
N9_C["承認"]
N9_D["実装"]
N9_E["検証"]
N9_F["構成記録の更新"]
N9_A --> N9_B
N9_B --> N9_C
N9_C --> N9_D
N9_D --> N9_E
N9_E --> N9_F`,
"mmd-10": `${MERMAID_CONFIG}
flowchart TD
N10_P1["9.1 問題報告の作成"]
N10_P2["9.2 問題の調査<br/>安全への関連を評価"]
N10_P3["9.3 関係者への通知"]
N10_P4["9.4 変更管理の利用<br/>修正が必要なら変更依頼へ"]
N10_P5["9.5 記録の保持"]
N10_P6["9.6 傾向分析"]
N10_P7["9.7 解決の検証"]
N10_P1 --> N10_P2
N10_P2 --> N10_P3
N10_P3 --> N10_P4
N10_P4 --> N10_P5
N10_P5 --> N10_P6
N10_P6 --> N10_P7`,
"mmd-11": `${MERMAID_CONFIG}
flowchart TD
N11_S1["SOUP の選定"]
N11_S2["要求仕様の定義<br/>機能・性能・必要なハード/ソフト"]
N11_S3["適合性の評価<br/>用途に合うか確認"]
N11_S4["既知異常リストの確認<br/>クラス B・C"]
N11_S5["識別・構成管理<br/>名称とバージョンの記録"]
N11_S6["リスクコントロール<br/>故障時の影響を封じ込める"]
N11_S7["更新・脆弱性対応の継続監視"]
N11_S1 --> N11_S2
N11_S2 --> N11_S3
N11_S3 --> N11_S4
N11_S4 --> N11_S5
N11_S5 --> N11_S6
N11_S6 --> N11_S7`,
"mmd-12": `${MERMAID_CONFIG}
flowchart TD
N12_QMS["ISO 13485<br/>品質マネジメントシステム"]
N12_RM["ISO 14971<br/>リスクマネジメント"]
N12_SW["IEC 62304<br/>ソフトウェアライフサイクル"]
N12_UE["IEC 62366-1<br/>ユーザビリティエンジニアリング"]
N12_PS["IEC 60601-1<br/>医用電気機器の安全"]
N12_HS["IEC 82304-1<br/>ヘルスソフトウェア製品安全"]
N12_SEC["IEC 81001-5-1<br/>ヘルスソフトウェアのセキュリティ"]
N12_TR["IEC/TR 80002-1<br/>14971 のソフトウェア適用ガイダンス"]
N12_QMS --> N12_SW
N12_RM --> N12_SW
N12_SW --> N12_PS
N12_SW --> N12_HS
N12_SEC -.->|"セキュリティ活動"| N12_SW
N12_TR -.->|"ガイダンス"| N12_RM
N12_UE -.->|"ユーザビリティ"| N12_SW`,
"mmd-13": `${MERMAID_CONFIG}
flowchart LR
N13_S["IEC 62304"]
N13_EU["EU<br/>EN 62304 は MDR 整合規格リスト未掲載<br/>適合推定は得られない"]
N13_US["米国 FDA<br/>認知された合意規格<br/>適合宣言を提出可能"]
N13_JP["日本<br/>JIS T 2304<br/>QMS関連要求の枠組み"]
N13_S --> N13_EU
N13_S --> N13_US
N13_S --> N13_JP`,
"mmd-14": `${MERMAID_CONFIG}
flowchart LR
N14_B["バックログ"]
N14_SP["スプリント"]
N14_IM["実装 + PR レビュー"]
N14_CI["CI：自動テスト"]
RL{"リリース判定<br/>5.8 の記録は揃ったか"}
N14_REL["リリース"]
N14_FB["市場フィードバック<br/>箇条6 / 9"]
N14_B --> N14_SP
N14_SP --> N14_IM
N14_IM --> N14_CI
N14_CI --> RL
RL -->|"揃った"| N14_REL
RL -->|"未達"| N14_IM
N14_REL --> N14_FB
N14_FB --> N14_B`,
"mmd-15": `${MERMAID_CONFIG}
flowchart LR
N15_O1["2025年<br/>CD1 の審議"]
N15_O2["2026年8月<br/>CD2 回付"]
N15_O3["2026年11月<br/>CD2 コメント期限"]
N15_O4["2028年10月<br/>発行予定 IEC 予定"]
N15_O5["2030年頃<br/>官報掲載で適合推定の<br/>対象になるとの見方"]
N15_O1 --> N15_O2
N15_O2 --> N15_O3
N15_O3 --> N15_O4
N15_O4 --> N15_O5`,
"mmd-16": `${MERMAID_CONFIG}
flowchart TD
N16_T1["Step 1<br/>製品の意図する用途と<br/>規制上の位置づけを確認"]
N16_T2["Step 2<br/>QMS とリスクマネジメントの<br/>土台を確認"]
N16_T3["Step 3<br/>ソフトウェアシステムを識別し<br/>安全クラスを仮決定"]
N16_T4["Step 4<br/>開発計画 SDP を作成"]
N16_T5["Step 5<br/>要求 → 設計 → 実装 → テストを<br/>トレーサビリティ付きで実施"]
N16_T6["Step 6<br/>SOUP 一覧と構成管理を整備"]
N16_T7["Step 7<br/>リリース判定と記録の確認"]
N16_T8["Step 8<br/>保守・問題解決の運用開始"]
N16_T1 --> N16_T2
N16_T2 --> N16_T3
N16_T3 --> N16_T4
N16_T4 --> N16_T5
N16_T5 --> N16_T6
N16_T6 --> N16_T7
N16_T7 --> N16_T8
N16_T8 -.->|"フィードバック"| N16_T3`,
"mmd-17": `${MERMAID_CONFIG}
flowchart LR
N17_R["IEC 62304"]
N17_K1["何を決める<br/>開発 保守 支援プロセス"]
N17_K2["中心概念<br/>安全クラス A B C<br/>未分類は C"]
N17_K3["重要論点<br/>SOUP トレーサビリティ<br/>システムテストは全クラス"]
N17_K4["関連規格<br/>13485 14971<br/>82304-1 81001-5-1"]
N17_K5["今後<br/>第2版は改訂中<br/>当面は Version 1.1"]
N17_R --> N17_K1
N17_R --> N17_K2
N17_R --> N17_K3
N17_R --> N17_K4
N17_R --> N17_K5`
};
