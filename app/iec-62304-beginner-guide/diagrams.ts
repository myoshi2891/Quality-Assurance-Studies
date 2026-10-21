// Reconstructed from the original HTML SVGs, including the flowchart roadmap.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#091526",
    "primaryColor": "#13253f",
    "mainBkg": "#13253f",
    "primaryTextColor": "#e6edf7",
    "primaryBorderColor": "#7c9eff",
    "lineColor": "#8aa4d6",
    "secondaryColor": "#0b1a2d",
    "tertiaryColor": "#0b1a2d",
    "nodeBorder": "#7c9eff",
    "clusterBkg": "#0b1a2d",
    "clusterBorder": "#3b5280",
    "edgeLabelBackground": "#0b1a2d",
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
D0_A["ソフトウェアの不具合"]
D0_B["誤った診断・治療・表示"]
D0_C["患者・使用者への危害"]
D0_D["IEC 62304"]
D0_E["作り方を規律する"]
D0_F["不具合の混入と見逃しを減らす"]
D0_A --> D0_B
D0_B --> D0_C
D0_D --> D0_E
D0_E --> D0_F
D0_F -.->|"危害の可能性を下げる"| D0_C`,
"mmd-1": `${MERMAID_CONFIG}
flowchart TB
D1_QMS["ISO 13485<br>品質マネジメントシステム"]
D1_RM["ISO 14971<br>リスクマネジメント"]
D1_CORE["IEC 62304<br>ソフトウェアライフサイクル"]
D1_G1["IEC/TR 80002-1:2009<br>ISO 14971:2007 を IEC 62304:2006 の<br>ソフトウェアに適用する手引き<br>（要求事項は変更しない）"]
D1_SEC["IEC 81001-5-1<br>ヘルスソフトウェアのセキュリティ"]
D1_HS["IEC 82304-1<br>ヘルスソフトウェア製品安全"]
D1_EQ["IEC 60601-1<br>医用電気機器の安全"]
D1_FDA["米国 FDA"]
D1_EU["EU MDR"]
D1_JP["日本 薬機法"]
D1_QMS -->|"前提"| D1_CORE
D1_RM -->|"前提"| D1_CORE
D1_G1 -->|"解説"| D1_CORE
D1_SEC -->|"補完"| D1_CORE
D1_HS -->|"製品レベル"| D1_CORE
D1_EQ -->|"組込みソフトで参照"| D1_CORE
D1_CORE -->|"認知コンセンサス規格"| D1_FDA
D1_CORE -.->|"EN 62304 による適合推定なし<br>技術水準として参照"| D1_EU
D1_CORE -->|"国内制度に応じて活用<br>JIS T 2304 など"| D1_JP`,
"mmd-2": `${MERMAID_CONFIG}
flowchart LR
D2_Y1["2006<br>IEC 62304:2006 発行"]
D2_Y2["2008<br>編集上の訂正"]
D2_Y3["2015<br>Amd 1:2015 発行<br>統合版 Edition 1.1"]
D2_Y4["2023<br>ISOページ上で<br>見直しの結果「確認済み」"]
D2_Y5["2026<br>Edition 2 の改訂作業が継続中"]
D2_Y1 --> D2_Y2
D2_Y2 --> D2_Y3
D2_Y3 --> D2_Y4
D2_Y4 --> D2_Y5`,
"mmd-3": `${MERMAID_CONFIG}
flowchart LR
subgraph D3_プ["プロセス"]
D3_C5["箇条5 ソフトウェア開発プロセス"]
D3_C6["箇条6 ソフトウェア保守プロセス"]
D3_C7["箇条7 ソフトウェアリスクマネジメントプロセス"]
D3_C8["箇条8 ソフトウェア構成管理プロセス"]
D3_C9["箇条9 ソフトウェア問題解決プロセス"]
end
subgraph D3_総["総則"]
D3_C4["箇条4 一般要求事項<br>QMS・リスク管理・安全クラス・レガシー"]
end
subgraph D3_序["序論部分"]
D3_C1["箇条1 適用範囲"]
D3_C2["箇条2 引用規格"]
D3_C3["箇条3 用語"]
end
D3_序 --> D3_総
D3_総 --> D3_プ`,
"mmd-4": `${MERMAID_CONFIG}
flowchart TD
D4_S["ソフトウェアがある"]
D4_Q1{"医療機器そのもの<br>（SaMD）か？"}
D4_Y["62304の対象"]
D4_Q2{"医療機器に組み込まれる<br>または不可欠な一部<br>（SiMD）か？"}
D4_Q3{"医療機器の製造や<br>品質システムの支援ツールか？"}
D4_N1["62304の直接の対象外<br>ただしツールバリデーション等は別途検討"]
D4_N2["医療機器ではない可能性<br>規制上の位置づけを確認"]
D4_S --> D4_Q1
D4_Q1 -->|"はい"| D4_Y
D4_Q1 -->|"いいえ"| D4_Q2
D4_Q2 -->|"はい"| D4_Y
D4_Q2 -->|"いいえ"| D4_Q3
D4_Q3 -->|"はい"| D4_N1
D4_Q3 -->|"いいえ"| D4_N2`,
"mmd-5": `${MERMAID_CONFIG}
flowchart TD
D5_S["ソフトウェアシステムを分析する"]
D5_Q1{"ソフトウェアが危険状態に<br>寄与しうるか？"}
D5_A["クラスA"]
D5_Q2{"ソフトウェア外のリスクコントロール手段<br>（例：ハードウェアのインターロック）を<br>考慮した後のリスクは許容可能か？"}
D5_Q3{"起こりうる危害は？"}
D5_B["クラスB"]
D5_C["クラスC"]
D5_S --> D5_Q1
D5_Q1 -->|"いいえ"| D5_A
D5_Q1 -->|"はい"| D5_Q2
D5_Q2 -->|"許容可能"| D5_A
D5_Q2 -->|"許容できない"| D5_Q3
D5_Q3 -->|"重大でない傷害"| D5_B
D5_Q3 -->|"死亡または重大な傷害"| D5_C`,
"mmd-6": `${MERMAID_CONFIG}
flowchart LR
subgraph D6_システム["ソフトウェアシステム：クラスC"]
D6_X["アイテムX：投与量計算<br>クラスC"]
D6_Y["アイテムY：画面表示ログ<br>分離できればクラスA"]
end
D6_X -.->|"分離を設計・文書化して正当化"| D6_Y`,
"mmd-7": `${MERMAID_CONFIG}
flowchart LR
D7_A["クラスA<br>計画・要求・実装・システムテスト・リリース"]
D7_B["クラスB<br>＋ アーキテクチャ・ユニット検証・統合テスト"]
D7_C["クラスC<br>＋ 詳細設計・追加の受入基準"]
D7_A --> D7_B
D7_B --> D7_C`,
"mmd-8": `${MERMAID_CONFIG}
flowchart TD
D8_P51["5.1 開発計画"]
D8_P52["5.2 要求事項分析"]
D8_P53["5.3 アーキテクチャ設計"]
D8_P54["5.4 詳細設計"]
D8_P55["5.5 ユニット実装と検証"]
D8_P56["5.6 統合と統合テスト"]
D8_P57["5.7 システムテスト"]
D8_P58["5.8 リリース"]
D8_P9["箇条9 問題解決"]
D8_P51 --> D8_P52
D8_P52 --> D8_P53
D8_P53 --> D8_P54
D8_P54 --> D8_P55
D8_P55 --> D8_P56
D8_P56 --> D8_P57
D8_P57 --> D8_P58
D8_P57 -.->|"不具合"| D8_P9
D8_P56 -.->|"不具合"| D8_P9
D8_P9 -.->|"修正"| D8_P55`,
"mmd-9": `${MERMAID_CONFIG}
flowchart LR
D9_R["要求事項分析 5.2"]
D9_ST["システムテスト 5.7"]
D9_AR["アーキテクチャ 5.3"]
D9_IT["統合テスト 5.6"]
D9_DD["詳細設計 5.4"]
D9_UT["ユニット検証 5.5"]
D9_R -->|"対応"| D9_ST
D9_AR -->|"対応"| D9_IT
D9_DD -->|"対応"| D9_UT`,
"mmd-10": `${MERMAID_CONFIG}
flowchart TD
D10_A["7.1 ソフトウェアが寄与しうる<br>危険状態を分析"]
D10_B["7.2 リスクコントロール手段を定める"]
D10_C["7.3 リスクコントロール手段を<br>実装・検証"]
D10_D{"新たな危険状態が<br>生じていないか？"}
D10_E["7.4 変更時のリスク再評価<br>（運用中も継続）"]
D10_A --> D10_B
D10_B --> D10_C
D10_C --> D10_D
D10_D -->|"生じた"| D10_A
D10_D -->|"問題なし"| D10_E
D10_E -.->|"変更のたびに"| D10_A`,
"mmd-11": `${MERMAID_CONFIG}
flowchart LR
D11_CR["変更要求"]
D11_EV["影響評価<br>リスク・要求・テスト"]
D11_AP{"承認？"}
D11_IM["実装"]
D11_RJ["却下を記録"]
D11_VF["検証と回帰テスト"]
RL["リリース"]
D11_CR --> D11_EV
D11_EV --> D11_AP
D11_AP -->|"はい"| D11_IM
D11_AP -->|"いいえ"| D11_RJ
D11_IM --> D11_VF
D11_VF --> RL`,
"mmd-12": `${MERMAID_CONFIG}
flowchart TD
D12_M1["6.1 保守計画を策定"]
D12_M2["6.2 問題報告・変更要求を受領"]
D12_M3["安全性への影響を評価"]
D12_M4["修正の承認"]
D12_M5["6.3 修正を実装<br>開発プロセスを再利用"]
D12_M6["回帰テストとリリース"]
D12_M7["利用者・当局への通知を検討"]
D12_M1 --> D12_M2
D12_M2 --> D12_M3
D12_M3 --> D12_M4
D12_M4 --> D12_M5
D12_M5 --> D12_M6
D12_M6 --> D12_M7`,
"mmd-13": `${MERMAID_CONFIG}
flowchart LR
D13_I["識別<br>名前・版・提供元"]
D13_R["要求の明確化<br>機能・性能・動作環境"]
D13_A["既知の異常を確認<br>公開されている不具合リスト"]
D13_RK["リスク評価<br>危険状態への寄与"]
D13_C["構成管理に組み込む"]
D13_U["更新・脆弱性の継続監視"]
D13_I --> D13_R
D13_R --> D13_A
D13_A --> D13_RK
D13_RK --> D13_C
D13_C --> D13_U
D13_U -.->|"変更時"| D13_I`,
"mmd-14": `${MERMAID_CONFIG}
flowchart LR
D14_BL["バックログ・ユーザーストーリー"]
D14_REQ["要求仕様と紐付け"]
D14_PR["プルリクエスト<br>レビュー・静的解析"]
D14_CI["CIでユニット・統合テスト"]
D14_ST["システムテスト"]
D14_REL["リリース判定と記録"]
D14_MON["市販後の問題管理"]
D14_BL --> D14_REQ
D14_REQ --> D14_PR
D14_PR --> D14_CI
D14_CI --> D14_ST
D14_ST --> D14_REL
D14_REL --> D14_MON
D14_MON --> D14_BL`,
"mmd-15": `${MERMAID_CONFIG}
flowchart LR
D15_SR["システム要求"]
D15_SWR["ソフトウェア要求"]
D15_RC["リスクコントロール手段"]
D15_AD["アーキテクチャ・設計"]
D15_CD["コード"]
D15_TC["システムテスト"]
D15_IT["統合テスト"]
D15_UT["ユニット検証"]
D15_RES["テスト結果"]
D15_SR --> D15_SWR
D15_RC --> D15_SWR
D15_SWR --> D15_AD
D15_AD --> D15_CD
D15_SWR --> D15_TC
D15_AD --> D15_IT
D15_CD --> D15_UT
D15_TC --> D15_RES
D15_IT --> D15_RES
D15_UT --> D15_RES`,
"mmd-16": `${MERMAID_CONFIG}
flowchart LR
subgraph D16_PH4["継続"]
D16_d1["保守・問題解決の<br>運用開始<br>2週間"]
end
subgraph D16_PH3["運用"]
D16_c1["CI/CDと記録の自動化<br>3週間"]
D16_c2["試行プロジェクトで<br>内部監査<br>2週間"]
end
subgraph D16_PH2["設計"]
D16_b1["開発計画書の作成<br>2週間"]
D16_b2["トレーサビリティの設計<br>2週間"]
D16_b3["SOUPの棚卸し<br>2週間"]
end
subgraph D16_PH1["準備"]
D16_a1["対象と安全クラスの判定<br>2週間"]
D16_a2["QMSとリスク管理との<br>整合確認<br>2週間"]
end
D16_a1 --> D16_a2
D16_c1 --> D16_c2
D16_a2 --> D16_b1
D16_a2 --> D16_b2
D16_b1 --> D16_b3
D16_b2 --> D16_b3
D16_b3 --> D16_c1
D16_c2 --> D16_d1`,
"mmd-17": `${MERMAID_CONFIG}
flowchart LR
D17_E1["2025<br>CD1 配布・多数のコメント"]
D17_E2["2026<br>CD2 段階の報告あり"]
D17_E3["2027<br>古い予測（公開見込み）"]
D17_E4["2028<br>最新の予測<br>（10月公開見込みの報告）"]
D17_E1 --> D17_E2
D17_E2 --> D17_E3
D17_E3 --> D17_E4`,
};
