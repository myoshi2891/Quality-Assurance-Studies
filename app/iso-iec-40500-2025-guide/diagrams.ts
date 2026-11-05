export const MERMAID_CONFIG = "%%{init: {\"theme\":\"base\",\"themeVariables\":{\"background\":\"#07111e\",\"primaryColor\":\"#12233b\",\"mainBkg\":\"#12233b\",\"primaryBorderColor\":\"#7c9eff\",\"primaryTextColor\":\"#e6edf8\",\"lineColor\":\"#7c9eff\",\"secondaryColor\":\"#0d1b2e\",\"tertiaryColor\":\"#0d1b2e\",\"nodeBorder\":\"#7c9eff\",\"clusterBkg\":\"#0d1b2e\",\"clusterBorder\":\"#2b4166\",\"edgeLabelBackground\":\"#0d1b2e\",\"fontFamily\":\"Noto Sans JP, Noto Sans CJK JP, sans-serif\",\"fontSize\":\"16px\"},\"htmlLabels\":true,\"flowchart\":{\"curve\":\"basis\",\"padding\":15}}}%%";
export const DIAGRAMS: Record<string,string> = {
"mermaid-diagram-0": `${MERMAID_CONFIG}\nflowchart LR
D0_S1["Step 1<br/>全体像と位置づけ"] --> D0_S2["Step 2<br/>歴史と版の関係"]
D0_S2 --> D0_S3["Step 3<br/>規格の構造"]
D0_S3 --> D0_S4["Step 4<br/>2.2の新規9基準"]
D0_S4 --> D0_S5["Step 5<br/>実装ガイド"]
D0_S5 --> D0_S6["Step 6<br/>準拠の判断と進め方"]
D0_S6 --> D0_S7["Step 7<br/>法規制との関係"]
D0_S7 --> D0_S8["Step 8<br/>今後の動き"]`,
"mermaid-diagram-1": `${MERMAID_CONFIG}\nflowchart TB
D1_W3C["W3C / WAI<br/>WCAG 2.2 を策定"] -->|"PAS（公開仕様）として提出"| D1_JTC1["ISO/IEC JTC 1<br/>情報技術の合同委員会"]
D1_JTC1 -->|"審査・承認"| D1_ISO["ISO/IEC 40500:2025<br/>国際標準として公開"]
D1_W3C -->|"同じ内容を勧告として公開"| D1_REC["W3C 勧告<br/>WCAG 2.2"]
D1_ISO -.->|"各国が正式採用しやすくなる"| D1_NAT["各国の国家規格・法令"]
D1_REC -.->|"法令・調達で引用"| D1_LAW["EAA / EN 301 549 / 各国法"]`,
"mermaid-diagram-2": `${MERMAID_CONFIG}\nflowchart LR
D2_A["2008年<br/>WCAG 2.0 勧告"] --> D2_B["2012年<br/>ISO/IEC 40500:2012<br/>（WCAG 2.0 と同一内容）"]
D2_B --> D2_C["2018年<br/>WCAG 2.1 勧告"]
D2_C --> D2_D["2023年10月5日<br/>WCAG 2.2 勧告"]
D2_D --> D2_E["2024年12月12日<br/>WCAG 2.2 軽微な編集更新版"]
D2_D --> D2_F["2025年9月<br/>ISO/IEC 40500:2025 発行<br/>（2023年10月版の内容）"]
D2_F --> D2_G["2025年10月21日<br/>W3C が ISO 承認を発表"]
D2_E --> D2_H["改訂中<br/>ISO/IEC DIS 40500"]
D2_H --> D2_I["2026年末ごろ見込み<br/>ISO/IEC 40500:2026<br/>（2024年12月版を反映）"]`,
"mermaid-diagram-3": `${MERMAID_CONFIG}\nflowchart TB
D3_P["4つの原則（POUR）"] --> D3_G["13のガイドライン"]
D3_G --> D3_SC["達成基準（SC）<br/>テストできる文で記述"]
D3_SC -.->|"各基準に1つ割り当て"| D3_L["適合レベル<br/>A / AA / AAA"]
D3_SC --> D3_T["達成方法・テクニック<br/>（別文書で提供）"]`,
"mermaid-diagram-4": `${MERMAID_CONFIG}\nflowchart TB
subgraph D4_UI["見た目・UIの修正が中心"]
D4_A1["2.4.11 フォーカスが隠れない"]
D4_A2["2.5.8 ターゲットサイズ"]
D4_A3["2.4.13 フォーカスの外観（AAA）"]
end
subgraph D4_IX["操作設計の見直しが必要"]
D4_B1["2.5.7 ドラッグ動作の代替"]
D4_B2["3.2.6 一貫したヘルプ"]
end
subgraph D4_FLOW["フロー・認証設計に影響"]
D4_C1["3.3.7 冗長な入力"]
D4_C2["3.3.8 アクセシブルな認証"]
end`,
"mermaid-diagram-5": `${MERMAID_CONFIG}\nflowchart TD
D5_Start["対象のページ・プロセスを決める"] --> D5_Q1{"目標レベルは？"}
D5_Q1 -->|"A"| D5_LA["Level A の全基準を確認"]
D5_Q1 -->|"AA（推奨）"| D5_LAA["Level A と AA の全基準を確認"]
D5_Q1 -->|"AAA"| D5_LAAA["A・AA・AAA を確認"]
D5_LA --> D5_T["各基準を<br/>自動テスト＋手動テストで確認"]
D5_LAA --> D5_T
D5_LAAA --> D5_T
D5_T --> D5_Q2{"すべて満たしたか？"}
D5_Q2 -->|"いいえ"| D5_Fix["不備を修正して再テスト"]
D5_Fix --> D5_T
D5_Q2 -->|"はい"| D5_Q3{"プロセス全体を<br/>通して確認したか？"}
D5_Q3 -->|"いいえ"| D5_Flow["購入・申込みなどの<br/>一連の流れで確認"]
D5_Flow --> D5_T
D5_Q3 -->|"はい"| Q4{"アクセシビリティ サポーテッドな<br/>技術の使用と非干渉を確認したか？"}
Q4 -->|"いいえ"| Remedy["技術の使い方を是正して再テスト"]
Remedy --> D5_T
Q4 -->|"はい"| D5_Done["適合と判断し<br/>アクセシビリティ表明を作成"]`,
"mermaid-diagram-6": `${MERMAID_CONFIG}\nflowchart LR
D6_G["① ギャップ分析<br/>新規6基準（A/AAの2.2追加分）を監査"] --> D6_P["② 優先順位付け<br/>影響の大きい箇所から"]
D6_P --> D6_D["③ デザインシステムに反映<br/>フォーカス・ターゲットサイズ"]
D6_D --> D6_I["④ 実装・修正"]
D6_I --> D6_V["⑤ 検証<br/>キーボード・スクリーンリーダー・自動テスト"]
D6_V --> D6_R["⑥ 継続運用<br/>CIへの組み込み・定期監査"]
D6_R --> D6_G`,
"mermaid-diagram-7": `${MERMAID_CONFIG}\nflowchart TB
D7_WCAG["WCAG 2.2<br/>（W3C 勧告）"] --> D7_ISO["ISO/IEC 40500:2025<br/>国際標準"]
D7_WCAG --> D7_EN["EN 301 549 V4.1.1<br/>欧州の ICT アクセシビリティ標準"]
D7_EN --> D7_EAA["欧州アクセシビリティ法 EAA<br/>2025年6月28日施行"]
D7_EN --> D7_WAD["欧州ウェブアクセシビリティ指令 WAD<br/>公共部門"]
D7_ISO -.-> D7_OTHER["各国が国家規格・法令で正式採用"]`,
"mermaid-diagram-8": `${MERMAID_CONFIG}\nflowchart TD
D8_NOW["2026年10月22日 現在"] --> D8_A["ISO側<br/>ISO/IEC DIS 40500 が策定中<br/>2024年12月版を反映見込み"]
D8_NOW --> D8_B["欧州側<br/>EN 301 549 V4.1.1 公開済み<br/>OJEU 引用待ち"]
D8_NOW --> D8_C["W3C側<br/>WCAG 3.0 は Working Draft<br/>2026年9月10日版"]
D8_A --> D8_A2["ISO/IEC 40500:2026<br/>2026年末ごろ見込み（W3C の見通し）"]
D8_C --> D8_C2["WCAG 2 を置き換えず<br/>当面は WCAG 2.x が基準"]`
};
