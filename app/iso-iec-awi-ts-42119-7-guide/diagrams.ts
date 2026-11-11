const MERMAID_CONFIG = "%%{init: {\"theme\":\"base\",\"look\":\"neo\",\"themeVariables\":{\"background\":\"#0b1a2e\",\"primaryColor\":\"#16294a\",\"primaryBorderColor\":\"#7c9eff\",\"primaryTextColor\":\"#000000\",\"lineColor\":\"#9db4d8\",\"secondaryColor\":\"#0f1f38\",\"tertiaryColor\":\"#0f1f38\",\"clusterBkg\":\"#0f1f38\",\"clusterBorder\":\"#4a6bb5\",\"edgeLabelBackground\":\"#0b1a2e\",\"textColor\":\"#e6edf7\",\"fontFamily\":\"Noto Sans JP, Noto Sans CJK JP, Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, sans-serif\",\"fontSize\":\"16px\",\"actorBkg\":\"#16294a\",\"actorBorder\":\"#7c9eff\",\"actorTextColor\":\"#e6edf7\",\"actorLineColor\":\"#6c82a8\",\"signalColor\":\"#9db4d8\",\"signalTextColor\":\"#e6edf7\"},\"flowchart\":{\"htmlLabels\":true,\"curve\":\"linear\",\"nodeSpacing\":40,\"rankSpacing\":40},\"sequence\":{\"actorFontFamily\":\"Noto Sans JP, sans-serif\",\"messageFontFamily\":\"Noto Sans JP, sans-serif\"}}}%%";

export const DIAGRAMS = [
  `${MERMAID_CONFIG}
flowchart TB
ST1["10.99 新規プロジェクト承認 2025-04-15"] --> ST2["20.00 作業計画に登録 2025-04-15"]
ST2 --> ST3["20.20 作業原案の検討開始"]
ST3 --> ST4["20.60 コメント期間の終了"]
ST4 --> ST5["20.99 作業原案を委員会原案へ"]
ST5 --> ST6["30.00 委員会原案 CD 登録"]
ST6 --> ST7["30.99 CD 承認"]
ST7 --> ST8["50.00 最終テキスト受領"]
ST8 --> ST9["60.60 発行"]
classDef nowStage fill:#fde68a,stroke:#b45309,color:#000000
classDef futureStage fill:#e0e7ff,stroke:#4338ca,color:#000000
class ST2 nowStage
class ST1,ST3,ST4,ST5,ST6,ST7,ST8,ST9 futureStage`,
  `${MERMAID_CONFIG}
flowchart TB
G1["ISO IEC IEEE 29119-1 概念と用語"] --> G2["ISO IEC IEEE 29119-2 テストプロセス"]
G2 --> G3["ISO IEC TS 42119-2 AIテスト共通基盤"]
G3 --> G4["ISO IEC AWI TS 42119-7 レッドチーミング"]
P1["NIST 攻撃の分類 AI 100-2e2025"] --> G4
P2["OWASP GenAI Red Teaming Guide"] --> G4
P3["日本 AISI レッドチーミング手法ガイド"] --> G4
classDef isoBox fill:#dbeafe,stroke:#1d4ed8,color:#000000
classDef targetBox fill:#fde68a,stroke:#b45309,color:#000000
classDef guideBox fill:#dcfce7,stroke:#15803d,color:#000000
class G1,G2,G3 isoBox
class G4 targetBox
class P1,P2,P3 guideBox`,
  `${MERMAID_CONFIG}
flowchart LR
A1["計画 チーム編成 目標 範囲 リスクシナリオ"] --> B1["戦略と計画の手順"]
A2["環境準備 アクセス権 ログ"] --> B2["環境とデータ管理の手順"]
A3["探索的テスト 攻撃手順の設計"] --> B3["設計と実装の手順"]
A4["システム全体への攻撃実行"] --> B4["実行の手順"]
A5["重大な脆弱性の即時報告"] --> B5["インシデント報告の手順"]
A6["最終報告 改善計画 教訓"] --> B6["終了の手順"]
classDef rtBox fill:#fde68a,stroke:#b45309,color:#000000
classDef stdBox fill:#dbeafe,stroke:#1d4ed8,color:#000000
class A1,A2,A3,A4,A5,A6 rtBox
class B1,B2,B3,B4,B5,B6 stdBox`,
  `${MERMAID_CONFIG}
flowchart LR
T1["条件1 非公開データへのアクセス"] --> TX["3つが同じエージェントに同居"]
T2["条件2 信頼できない内容への接触"] --> TX
T3["条件3 外部への通信手段"] --> TX
TX --> TR["攻撃者が指示を紛れ込ませ データを外へ送らせられる"]
classDef condBox fill:#dbeafe,stroke:#1d4ed8,color:#000000
classDef riskBox fill:#fecaca,stroke:#b91c1c,color:#000000
class T1,T2,T3 condBox
class TX,TR riskBox`,
  `${MERMAID_CONFIG}
flowchart TB
S1["守るべき資産と利用文脈を確認"] --> S2["脅威モデリング"]
S2 --> S3["リスクシナリオを作成"]
S3 --> S4["攻撃シナリオを設計"]
S4 --> S5["テストケースへ具体化"]
S5 --> S6["実行して結果を判定"]
classDef flowStep fill:#dcfce7,stroke:#15803d,color:#000000
class S1,S2,S3,S4,S5,S6 flowStep`,
  `${MERMAID_CONFIG}
flowchart LR
subgraph PH1["準備"]
P11["チーム編成"] --> P12["目標と範囲の設定"]
P12 --> P13["リスクシナリオ作成"]
P13 --> P14["環境準備"]
end
subgraph PH2["実行"]
P21["探索的テスト"] --> P22["攻撃手順の作成"]
P22 --> P23["システム全体のテスト"]
P23 --> P24["運用リスクの監視"]
end
subgraph PH3["知識共有と報告"]
P31["最終報告書"] --> P32["改善計画"]
P32 --> P33["教訓の整理"]
end
P14 --> P21
P24 --> P31
classDef prepBox fill:#dbeafe,stroke:#1d4ed8,color:#000000
classDef execBox fill:#fde68a,stroke:#b45309,color:#000000
classDef reportBox fill:#dcfce7,stroke:#15803d,color:#000000
class P11,P12,P13,P14 prepBox
class P21,P22,P23,P24 execBox
class P31,P32,P33 reportBox`,
  `${MERMAID_CONFIG}
sequenceDiagram
participant RT as レッドチーム
participant PM as テスト責任者
participant OW as システム責任者
participant DV as 開発チーム
RT->>PM: 重大な弱点を発見 実行を一時停止
PM->>OW: 影響範囲と暫定対応を即時連絡
OW->>DV: 修正と緩和策の着手を依頼
DV-->>OW: 暫定対応の完了を報告
OW-->>PM: 再テストを依頼
PM->>RT: 再テストを指示
RT-->>PM: 結果を報告 最終報告書に反映`,
  `${MERMAID_CONFIG}
flowchart TB
L1["設計と開発"] --> L2["公開前のレッドチーミング"]
L2 --> L3["修正と再テスト"]
L3 --> L4["リリース"]
L4 --> L5["運用中の継続的な観察"]
L5 --> L6["変化の検知 モデル更新 知識更新 新手法"]
L6 --> L7["公開後のレッドチーミング"]
L7 --> L3
classDef devBox fill:#dbeafe,stroke:#1d4ed8,color:#000000
classDef rtBox2 fill:#fde68a,stroke:#b45309,color:#000000
classDef opBox fill:#dcfce7,stroke:#15803d,color:#000000
class L1,L3,L4 devBox
class L2,L7 rtBox2
class L5,L6 opBox`
] as const;

export const DIAGRAM_LABELS = [
  "diagram-1。10.99 新規プロジェクト承認 2025-04-15。20.00 作業計画に登録 2025-04-15。20.20 作業原案の検討開始。20.60 コメント期間の終了。20.99 作業原案を委員会原案へ。30.00 委員会原案 CD 登録。30.99 CD 承認。50.00 最終テキスト受領。60.60 発行。ST1 → ST2。ST2 → ST3。ST3 → ST4。ST4 → ST5。ST5 → ST6。ST6 → ST7。ST7 → ST8。ST8 → ST9",
  "diagram-2。ISO IEC IEEE 29119-1 概念と用語。ISO IEC IEEE 29119-2 テストプロセス。ISO IEC TS 42119-2 AIテスト共通基盤。ISO IEC AWI TS 42119-7 レッドチーミング。NIST 攻撃の分類 AI 100-2e2025。OWASP GenAI Red Teaming Guide。日本 AISI レッドチーミング手法ガイド。G1 → G2。G2 → G3。G3 → G4。P1 → G4。P2 → G4。P3 → G4",
  "diagram-3。計画 チーム編成 目標 範囲 リスクシナリオ。戦略と計画の手順。環境準備 アクセス権 ログ。環境とデータ管理の手順。探索的テスト 攻撃手順の設計。設計と実装の手順。システム全体への攻撃実行。実行の手順。重大な脆弱性の即時報告。インシデント報告の手順。最終報告 改善計画 教訓。終了の手順。A1 → B1。A2 → B2。A3 → B3。A4 → B4。A5 → B5。A6 → B6",
  "diagram-4。条件1 非公開データへのアクセス。3つが同じエージェントに同居。条件2 信頼できない内容への接触。条件3 外部への通信手段。攻撃者が指示を紛れ込ませ データを外へ送らせられる。T1 → TX。T2 → TX。T3 → TX。TX → TR",
  "diagram-5。守るべき資産と利用文脈を確認。脅威モデリング。リスクシナリオを作成。攻撃シナリオを設計。テストケースへ具体化。実行して結果を判定。S1 → S2。S2 → S3。S3 → S4。S4 → S5。S5 → S6",
  "diagram-6。知識共有と報告。実行。準備。チーム編成。目標と範囲の設定。リスクシナリオ作成。環境準備。探索的テスト。攻撃手順の作成。システム全体のテスト。運用リスクの監視。最終報告書。改善計画。教訓の整理。P11 → P12。P12 → P13。P13 → P14。P21 → P22。P22 → P23。P23 → P24。P31 → P32。P32 → P33。P14 → P21。P24 → P31",
  "diagram-7。開発チーム。システム責任者。テスト責任者。レッドチーム。開発チーム。システム責任者。テスト責任者。レッドチーム。重大な弱点を発見 実行を一時停止。影響範囲と暫定対応を即時連絡。修正と緩和策の着手を依頼。暫定対応の完了を報告。再テストを依頼。再テストを指示。結果を報告 最終報告書に反映。レッドチームからテスト責任者、システム責任者、開発チームへ報告・修正を依頼し、完了連絡を経て再テスト結果を報告する。",
  "diagram-8。設計と開発。公開前のレッドチーミング。修正と再テスト。リリース。運用中の継続的な観察。変化の検知 モデル更新 知識更新 新手法。公開後のレッドチーミング。L1 → L2。L2 → L3。L3 → L4。L4 → L5。L5 → L6。L6 → L7。L7 → L3"
] as const;
