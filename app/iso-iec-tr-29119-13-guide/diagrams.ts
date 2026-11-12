// Preserve HTML label breaks and TB enrolment layout. Top-level fontFamily survives Mermaid directive sanitization.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontSize": "15px",
    "background": "#ffffff",
    "primaryColor": "#e8f0ff",
    "primaryTextColor": "#14284b",
    "primaryBorderColor": "#3b6ef5",
    "lineColor": "#3b6ef5",
    "secondaryColor": "#e6f7f4",
    "tertiaryColor": "#f5f8fd",
    "clusterBkg": "#f5f8fd",
    "clusterBorder": "#b8c8e6",
    "edgeLabelBackground": "#ffffff",
    "textColor": "#1c2b45",
    "pie1": "#3b6ef5",
    "pie2": "#14b8a6",
    "pie3": "#f59e0b",
    "pie4": "#8b5cf6",
    "mainBkg": "#e8f0ff",
    "nodeBorder": "#3b6ef5",
    "signalColor": "#3b6ef5"
  },
  "flowchart": {
    "curve": "basis",
    "htmlLabels": true,
    "padding": 14,
    "wrappingWidth": 400,
    "useMaxWidth": false,
    "subGraphTitleMargin": {
      "top": 8,
      "bottom": 14
    }
  },
  "fontFamily": "Noto Sans JP, Hiragino Sans, Yu Gothic, sans-serif"
}}%%`;

export const DIAGRAMS: readonly string[] = [
  `${MERMAID_CONFIG}
flowchart LR
A["ISO/IEC 規格文書の種類"] --> B["IS: 国際規格<br/>要求事項を定める"]
A --> C["TS: 技術仕様書<br/>将来IS化の可能性"]
A --> D["TR: 技術報告書<br/>情報・指針・現状データ"]
D --> E["本ガイドの対象<br/>29119-13"]`,

  `${MERMAID_CONFIG}
flowchart TB
subgraph W1["生体認証の世界 SC 37"]
B1["ISO/IEC 19795系<br/>性能テストと報告"]
B2["ISO/IEC 29109-1<br/>データ交換形式の適合性"]
end
subgraph W2["ソフトウェアテストの世界 SC 7 / WG 26"]
S1["ISO/IEC/IEEE 29119系<br/>プロセス・文書・技法"]
S2["リスクベースドテスト"]
end
TR["ISO/IEC TR 29119-13<br/>橋渡し役"]
B1 --> TR
B2 --> TR
S1 --> TR
S2 --> TR
TR --> OUT1["全品質特性を網羅したテスト戦略"]
TR --> OUT2["両規格への同時準拠の道筋"]
TR --> OUT3["生体認証特有のリスク例"]`,

  `${MERMAID_CONFIG}
pie showData
title "ページ配分の目安（概算）"
"本編 1〜6章 前付含む" : 26
"Annex A〜B 入門と関連規格" : 12
"Annex C 生体認証の汎用リスク" : 45
"Annex D〜K マッピング" : 191`,

  `${MERMAID_CONFIG}
flowchart TB
subgraph ENR["登録フェーズ Enrolment"]
E1["生体特性を提示"] --> E2["キャプチャ<br/>センサで取得"]
E2 --> E3["品質チェック"]
E3 --> E4["特徴抽出"]
E4 --> E5["テンプレート保存"]
end
subgraph REC["認識フェーズ Recognition"]
R1["生体特性を提示"] --> R2["キャプチャ"]
R2 --> R3["品質チェック"]
R3 --> R4["特徴抽出"]
R4 --> R5["比較<br/>probe と reference"]
R5 --> R6{"判定ポリシー<br/>スコアとしきい値"}
R6 -->|一致| R7["承認"]
R6 -->|不一致| R8["拒否"]
end
E5 -.保存されたreference.-> R5`,

  `${MERMAID_CONFIG}
flowchart LR
T0["しきい値を高く<br/>厳しく判定"] --> T1["FMR 低下<br/>他人を通しにくい"]
T0 --> T2["FNMR 上昇<br/>本人も弾かれやすい"]
T3["しきい値を低く<br/>緩く判定"] --> T4["FMR 上昇<br/>他人を通しやすい"]
T3 --> T5["FNMR 低下<br/>本人は通りやすい"]
T1 --> D["DET曲線で<br/>全体像を可視化"]
T2 --> D
T4 --> D
T5 --> D`,

  `${MERMAID_CONFIG}
flowchart TD
JTC["ISO/IEC JTC 1<br/>情報技術"] --> SC37["SC 37 生体認証"]
JTC --> SC7["SC 7 ソフトウェア・システム工学"]
JTC --> SC17["SC 17 カードとID"]
JTC --> SC27["SC 27 セキュリティ・プライバシー"]
SC37 --> WG5["WG 5 生体認証のテストと報告"]
SC7 --> WG26["WG 26 ソフトウェアテスト"]
WG5 --> S19795["ISO/IEC 19795系"]
WG26 --> S29119["ISO/IEC/IEEE 29119系"]
S19795 --> TR13["TR 29119-13"]
S29119 --> TR13`,

  `${MERMAID_CONFIG}
flowchart TB
P1["29119-1<br/>一般概念"]
P2["29119-2<br/>テストプロセス<br/>中核"]
P3["29119-3<br/>テスト文書"]
P4["29119-4<br/>テスト技法"]
P5["29119-5<br/>キーワード駆動テスト"]
P1 --> P2
P2 -->|成果物として生成| P3
P2 -->|設計で使用| P4
P4 -.-> P5
X1["ISO/IEC 20246<br/>レビュー"] -.静的テストを補完.-> P2
X2["ISO/IEC 33063<br/>テストプロセス評価"] -.-> P2`,

  `${MERMAID_CONFIG}
flowchart TB
accDescr: リスク管理プロセスの流れ。1 リスク識別、2 影響度の分析、3 発生可能性の判断、4 影響度と可能性を組み合わせたリスク露出度の算出、5 優先順位付け、6 テストでの対処を含む対応策の決定、7 テスト戦略・計画への反映の順に進む。7 からは点線の矢印で 1 リスク識別に戻り、モニタリングと再評価を繰り返す。
S1["1 リスク識別<br/>品質特性チェックリスト等"] --> S2["2 影響度の分析<br/>製品またはプロジェクトへの重大性"]
S2 --> S3["3 発生可能性の判断<br/>要求品質・体制・複雑さ・過去データ"]
S3 --> S4["4 リスク露出度の算出<br/>影響度と可能性の組み合わせ"]
S4 --> S5["5 優先順位付け"]
S5 --> S6["6 対応策の決定<br/>テストでの対処を含む"]
S6 --> S7["7 テスト戦略・計画に反映"]
S7 -.モニタリングと再評価.-> S1`,

  `${MERMAID_CONFIG}
flowchart TB
subgraph SYS["大きなシステム 例: 入退室管理"]
UI["ユーザー向けUI<br/>案内表示・音声"]
subgraph BIO["生体認証サブシステム"]
SEN["センサ<br/>カメラ・指紋リーダ"]
ALG["アルゴリズム<br/>特徴抽出・比較"]
DB["テンプレートDB"]
end
DEC["判定ロジック<br/>しきい値・フォールバック"]
ACT["連携先<br/>電気錠・勤怠システム"]
ADM["管理機能<br/>登録・削除・監査ログ"]
end
UI --> SEN --> ALG --> DEC --> ACT
ALG <--> DB
ADM --> DB
ADM --> DEC`,

  `${MERMAID_CONFIG}
flowchart TB
subgraph OLD["従来の19795系の主眼"]
O1["誤り率<br/>FMR・FNMR等"]
O2["スループット"]
end
subgraph NEW["TR 29119-13 が広げる範囲"]
N1["信頼性"]
N2["可用性"]
N3["保守性"]
N4["セキュリティ"]
N5["適合性"]
N6["使いやすさ・人的要因"]
N7["プライバシー規制適合"]
end
OLD --> NEW`,

  `${MERMAID_CONFIG}
flowchart LR
A["技術評価<br/>データセット"] --> B["シナリオ評価<br/>模擬環境+被験者"]
B --> C["運用評価<br/>実環境"]
A -.再現性 高.-> A
C -.現実性 高.-> C`,

  `${MERMAID_CONFIG}
flowchart LR
D1["全体平均のFNMR 良好"] --> Q{"属性別に分解して確認"}
Q -->|差が小さい| OK["リスク低"]
Q -->|特定属性で高い| NG["リスク顕在化<br/>しきい値・データ・運用を見直す"]`,

  `${MERMAID_CONFIG}
flowchart TD
accDescr: Annex C の活用手順。Annex C のリスク例をチェックリストとして読み、自プロジェクトに該当するものを選別し、不足分を独自に追加する。次に影響度と発生可能性を評価し、露出度で優先順位を付け、どのテストで対処するかをテスト戦略へ反映し、テスト計画・設計・実行を行う。実行結果に基づいてリスクを再評価し、点線の矢印で影響度と発生可能性の評価に戻って繰り返す。
A["Annex C のリスク例を<br/>チェックリストとして読む"] --> B["自プロジェクトに該当するものを選別"]
B --> C["不足分を独自に追加"]
C --> D["影響度×発生可能性を評価"]
D --> E["露出度で優先順位付け"]
E --> F["テスト戦略へ反映<br/>どのテストで対処するか"]
F --> G["テスト計画・設計・実行"]
G --> H["結果に基づきリスク再評価"]
H -.-> D`,

  `${MERMAID_CONFIG}
flowchart LR
A["生体認証の試験計画書<br/>19795-2に沿って作成"] -->|Annex Fの対応表| B["29119-3の<br/>テスト計画に該当する要素"]
A -->|Annex Dの対応表| C["29119-3の<br/>テスト戦略などに該当する要素"]
B --> D["両規格に準拠した<br/>1つの文書体系"]
C --> D`,

  `${MERMAID_CONFIG}
flowchart TD
accDescr: 実務の全体ワークフロー。1 対象の確認、2 関連規格の特定、3 Annex C と 25010 の品質特性によるリスク識別、4 リスク分析・優先順位付け、5 テスト戦略の策定、6 テスト計画、7 静的と動的のテスト設計・実装、8 テスト実行、9 誤り率に加えてリスク残存を含む報告、10 完了と教訓・リスク再評価の順に進む。10 からは改善のための点線の矢印で 3 リスク識別に戻る。
A["1 対象の確認<br/>生体認証サブシステムか、含む大規模システムか"] --> B["2 関連規格の特定<br/>19795系・29109-1・30107等"]
B --> C["3 リスク識別<br/>Annex C と25010の品質特性"]
C --> D["4 リスク分析・優先順位付け"]
D --> E["5 テスト戦略の策定<br/>どのリスクにどのテストを割り当てるか"]
E --> F["6 テスト計画<br/>被験者・データ・環境・体制"]
F --> G["7 テスト設計・実装<br/>静的＋動的、技法の選択"]
G --> H["8 テスト実行"]
H --> I["9 報告<br/>誤り率だけでなくリスク残存を報告"]
I --> J["10 完了と教訓<br/>リスク再評価"]
J -.改善.-> C`,

  `${MERMAID_CONFIG}
flowchart LR
accDescr: 5つのリスクと対応するテストの対応関係。他人受入のリスクには、非同一人物ペアでの FMR 測定という動的テストと、しきい値設定のレビューという静的テストの2つが対応する。暗所での本人拒否には照度条件別の FNMR 測定、属性間の偏りには属性別の誤り率集計という動的テストがそれぞれ対応する。データ漏えいには設計レビュー・脆弱性解析という静的テストと、アクセス制御と暗号化の検証という動的テストの2つが対応する。プロジェクトリスクである被験者確保の遅延には、早期募集と代替データ確保という計画上の対策が対応する。再評価のループはない。
R1["リスク: 他人受入"] --> T1["動的: 非同一人物ペアでFMR測定"]
R1 --> T2["静的: しきい値設定のレビュー"]
R2["リスク: 暗所で本人拒否"] --> T3["動的: 照度条件別のFNMR測定"]
R3["リスク: 属性間の偏り"] --> T4["動的: 属性別の誤り率集計"]
R4["リスク: データ漏えい"] --> T5["静的: 設計レビュー・脆弱性解析"]
R4 --> T6["動的: アクセス制御と暗号化の検証"]
R5["リスク: 被験者確保遅延 PJ"] --> T7["計画: 早期募集・代替データ確保"]`,

  `${MERMAID_CONFIG}
flowchart TB
L1["1 生体認証の基礎<br/>Annex A・用語"] --> L2["2 性能指標<br/>FMR/FNMR/FTER/FTAR/DET"]
L2 --> L3["3 29119の概要<br/>-1, -2, -3, -4"]
L3 --> L4["4 リスクベースドテスト<br/>5.6節"]
L4 --> L5["5 TR本編6章<br/>テスト範囲"]
L5 --> L6["6 Annex C<br/>リスクの読み込み"]
L6 --> L7["7 Annex D〜K<br/>自分の使う19795パートを重点的に"]`
];
