// Explicit light colors override the shared dark Mermaid defaults.
export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "fontFamily": "-apple-system, BlinkMacSystemFont, Hiragino Kaku Gothic ProN, Noto Sans JP, sans-serif",
  "themeVariables": {
    "fontSize": "16px",
    "fontFamily": "-apple-system, BlinkMacSystemFont, Hiragino Kaku Gothic ProN, Noto Sans JP, sans-serif",
    "primaryColor": "#eef3ff",
    "primaryTextColor": "#1b2537",
    "primaryBorderColor": "#2f5fe0",
    "lineColor": "#2f5fe0",
    "secondaryColor": "#ffffff",
    "tertiaryColor": "#f5f7fb",
    "background": "#ffffff",
    "mainBkg": "#eef3ff",
    "nodeTextColor": "#1b2537",
    "nodeBorder": "#2f5fe0",
    "titleColor": "#1b2537",
    "clusterBkg": "#f5f7fb",
    "clusterBorder": "#2f5fe0",
    "edgeLabelBackground": "#ffffff",
    "actorBkg": "#eef3ff",
    "actorBorder": "#2f5fe0",
    "actorTextColor": "#1b2537",
    "signalColor": "#2f5fe0",
    "signalTextColor": "#1b2537",
    "labelTextColor": "#1b2537",
    "noteBkgColor": "#eef3ff",
    "noteTextColor": "#1b2537",
    "noteBorderColor": "#2f5fe0",
    "xyChart": {
      "backgroundColor": "#ffffff",
      "titleColor": "#1b2537",
      "xAxisLabelColor": "#1b2537",
      "xAxisTitleColor": "#1b2537",
      "xAxisTickColor": "#2f5fe0",
      "xAxisLineColor": "#2f5fe0",
      "yAxisLabelColor": "#1b2537",
      "yAxisTitleColor": "#1b2537",
      "yAxisTickColor": "#2f5fe0",
      "yAxisLineColor": "#2f5fe0",
      "plotColorPalette": "#2f5fe0"
    }
  },
  "flowchart": {
    "useMaxWidth": false,
    "htmlLabels": true,
    "nodeSpacing": 60,
    "rankSpacing": 65
  },
  "sequence": {
    "useMaxWidth": false
  },
  "xyChart": {
    "useMaxWidth": false,
    "width": 800,
    "height": 450,
    "titleFontSize": 22,
    "xAxis": {
      "labelFontSize": 16,
      "titleFontSize": 18
    },
    "yAxis": {
      "labelFontSize": 16,
      "titleFontSize": 18
    }
  },
  "htmlLabels": true
}}%%`;

export const DIAGRAM_1 = `${MERMAID_CONFIG}
flowchart TD
N1_A["第8章 Continuous Improvement"] --> N1_B["8.1.1 データ分析で<br/>テストケースを改善"]
N1_A --> N1_C["8.1.2 導入済み TAS の<br/>技術面を分析し改善提案"]
N1_A --> N1_D["8.1.3 SUT 更新に合わせて<br/>テストウェアを再構成"]
N1_A --> N1_E["8.1.4 テスト自動化ツールの<br/>活用機会"]
N1_B --> N1_B1["Test histogram"]
N1_B --> N1_B2["AI / 自己修復"]
N1_B --> N1_B3["Schema validation"]
N1_C --> N1_C1["Scripting"]
N1_C --> N1_C2["Test execution"]
N1_C --> N1_C3["Verification"]
N1_C --> N1_C4["TAA / TAF"]
N1_C --> N1_C5["Setup / Teardown"]
N1_C --> N1_C6["Documentation / Features / Updates"]
N1_D --> N1_D1["変更の影響を段階的に確認"]
N1_D --> N1_D2["コアライブラリの効率化"]
N1_D --> N1_D3["関数の統合と TAA のリファクタ"]
N1_D --> N1_D4["不要テストの見直し"]
N1_E --> N1_E1["環境のセットアップと制御"]
N1_E --> N1_E2["データエイジング"]
N1_E --> N1_E3["スクリーンショット・動画の生成"]`;

export const DIAGRAM_2 = `${MERMAID_CONFIG}
flowchart LR
N2_M["測る<br/>ログ・履歴・レポート"] --> N2_N["分析する<br/>ヒストグラム・スキーマ・AI"]
N2_N --> N2_O["直す<br/>スクリプト・実行・TAA・TAF"]
N2_O --> N2_P["確かめる<br/>限定実行 → 全体リグレッション"]
N2_P --> N2_M`;

export const DIAGRAM_3 = `${MERMAID_CONFIG}
xychart-beta
title "テストケース別 失敗回数（架空データ）"
x-axis ["TC-001", "TC-014", "TC-027", "TC-033"]
y-axis "失敗回数" 0 --> 12
bar [0, 2, 11, 9]`;

export const DIAGRAM_4 = `${MERMAID_CONFIG}
flowchart TD
N4_S1["Step1 CI/レポートツールから<br/>実行履歴を集める"] --> N4_S2["Step2 テストケース別に<br/>失敗回数・実行時間・エラー種別を集計"]
N4_S2 --> N4_S3["Step3 ヒストグラムで<br/>偏りのあるテストを特定"]
N4_S3 --> N4_S4{"失敗の原因は？"}
N4_S4 -->|"SUT の欠陥"| N4_S5["欠陥として起票"]
N4_S4 -->|"テスト側の問題<br/>待機・ロケータ・データ"| N4_S6["テストをリファクタ<br/>または設計を見直す"]
N4_S4 -->|"環境の問題"| N4_S7["環境・インフラを改善"]
N4_S6 --> N4_S8["修正後に再測定して効果を確認"]
N4_S7 --> N4_S8`;

export const DIAGRAM_5 = `${MERMAID_CONFIG}
sequenceDiagram
participant N5_T as 自動テスト
participant N5_AI as 自己修復機能
participant N5_R as テストレポート
participant N5_E as TAE
N5_T->>N5_T: 既存ロケータで要素を探す
N5_T-->>N5_AI: 要素が見つからない
N5_AI->>N5_AI: 画面構造・属性・画像から候補を推定
N5_AI-->>N5_T: 新しいセレクタで実行を継続
N5_AI->>N5_R: 変更前後のロケータを記録
N5_R-->>N5_E: 修復内容を通知
N5_E->>N5_E: 妥当性を確認してコードへ反映`;

export const DIAGRAM_6 = `${MERMAID_CONFIG}
flowchart TD
N6_A["導入済み TAS"] --> N6_B["現状の分析<br/>ログ・履歴・実行時間・保守工数"]
N6_B --> N6_C["改善候補を洗い出す<br/>9 つの領域から"]
N6_C --> N6_D{"プロジェクトにとって<br/>価値が高いか？"}
N6_D -->|"高い"| N6_E["改善を実施"]
N6_D -->|"低い"| N6_F["見送る<br/>不要な機能は増やさない"]
N6_E --> N6_G["効果を測定"]
N6_G --> N6_B`;

export const DIAGRAM_7 = `${MERMAID_CONFIG}
flowchart LR
N7_L["Linear scripting<br/>線形スクリプト"] --> N7_D["Data-driven testing<br/>データ駆動"] --> N7_K["Keyword-driven testing<br/>キーワード駆動"]`;

export const DIAGRAM_8 = `${MERMAID_CONFIG}
flowchart TD
N8_A["テスト実行中に失敗"] --> N8_B{"どこの失敗か"}
N8_B -->|"TAS 側"| N8_C["TAS の状態をリセット"]
N8_B -->|"SUT 側"| N8_D["SUT の復旧操作<br/>可能で現実的なら再起動など"]
N8_C --> N8_E["ログ・スクリーンショット・ダンプを保存"]
N8_D --> N8_E
N8_E --> N8_F["次のテストへ継続"]`;

export const DIAGRAM_9 = `${MERMAID_CONFIG}
flowchart LR
N9_W1["固定待機<br/>信頼性: 低"] --> N9_W2["ポーリング<br/>信頼性: 中〜高<br/>タイムアウト必須"] --> N9_W3["イベント購読<br/>信頼性: 最も高い<br/>タイムアウト必須"]`;

export const DIAGRAM_10 = `${MERMAID_CONFIG}
flowchart LR
N10_A["SDLC 初期に<br/>テスト容易性を設計"] --> N10_B["低コスト"]
N10_C["SDLC 後半に<br/>後付けで追加"] --> N10_D["高コスト<br/>SUT と TAS の両方を変更"]`;

export const DIAGRAM_11 = `${MERMAID_CONFIG}
flowchart TD
N11_A["コアライブラリの新バージョン"] --> N11_B["パイロット実施"]
N11_B --> N11_C["影響分析"]
N11_C --> N11_D["導入計画を作成"]
N11_D --> N11_E{"導入方法を選択"}
N11_E -->|"方法1"| N11_F["全チームが同時に採用<br/>コアライブラリ層のビルドファイルで<br/>依存関係を更新"]
N11_E -->|"方法2"| N11_G["各チームが自分のタイミングで更新<br/>ビジネスロジック層で指定"]
N11_G --> N11_H["全チームの準備ができたら<br/>コアライブラリ層の依存関係を更新"]
N11_F --> N11_I["完了"]
N11_H --> N11_I`;

export const DIAGRAM_12 = `${MERMAID_CONFIG}
flowchart TD
N12_A["新バージョンのツール"] --> N12_B["代表的なサンプルテストを選定<br/>SUT・テストタイプ・環境を網羅"]
N12_B --> N12_C["新バージョンで実行"]
N12_C --> N12_D{"問題なし？"}
N12_D -->|"はい"| N12_E["段階的に展開"]
N12_D -->|"いいえ"| N12_F["原因分析・対応策の検討<br/>展開は保留"]`;

export const DIAGRAM_13 = `${MERMAID_CONFIG}
flowchart TD
N13_A["SUT の更新を把握"] --> N13_B["影響範囲を評価<br/>テストウェア・関数ライブラリ・OS"]
N13_B --> N13_C["最小単位で変更<br/>MVP の考え方"]
N13_C --> N13_D["限定したスクリプトで実行"]
N13_D --> N13_E{"副作用なし？"}
N13_E -->|"いいえ"| N13_F["原因を分析して修正"]
N13_F --> N13_C
N13_E -->|"はい"| N13_G["変更を全面適用"]
N13_G --> N13_H["完全なリグレッション実行"]
N13_H --> N13_I{"失敗あり？"}
N13_I -->|"はい"| N13_J["ログ・レポート・データで根本原因を特定<br/>改善作業が原因ではないか確認"]
N13_J --> N13_F
N13_I -->|"いいえ"| N13_K["完了"]`;

export const DIAGRAM_14 = `${MERMAID_CONFIG}
flowchart TD
N14_A["既存テストの棚卸し"] --> N14_B{"状態は？"}
N14_B -->|"複雑で実行が長い"| N14_C["小さなテストに分解"]
N14_B -->|"ほぼ実行されない"| N14_D["廃止を検討"]
N14_B -->|"価値があり適切"| N14_E["維持"]
N14_C --> N14_F["TAS の複雑さを低減"]
N14_D --> N14_F`;

export const DIAGRAM_15 = `${MERMAID_CONFIG}
flowchart TD
N15_A["新しいテスト環境"] --> N15_B["自動スクリプトを実行"]
N15_B --> N15_C["Web サービスを呼び出して<br/>ユーザーを登録"]
N15_B --> N15_D["多様なテストデータを作成"]
N15_B --> N15_E["テストインフラのセットアップを制御"]
N15_C --> N15_F["テスト準備完了"]
N15_D --> N15_F
N15_E --> N15_F
N15_F --> N15_G["テスト実行"]
N15_G --> N15_H["同じ仕組みで後片付け"]`;

export const DIAGRAM_16 = `${MERMAID_CONFIG}
flowchart LR
N16_A["観察<br/>何が起きているか"] --> N16_B["分析<br/>原因は何か<br/>SUT・TAS・環境のどれか"]
N16_B --> N16_C["選択肢<br/>改善の候補"]
N16_C --> N16_D["推奨<br/>プロジェクトにとって<br/>価値が高いものを選ぶ"]
N16_D --> N16_E["検証<br/>限定実行 → 全体確認"]`;

export const DIAGRAMS = {
    "mmd-1": DIAGRAM_1,
    "mmd-2": DIAGRAM_2,
    "mmd-3": DIAGRAM_3,
    "mmd-4": DIAGRAM_4,
    "mmd-5": DIAGRAM_5,
    "mmd-6": DIAGRAM_6,
    "mmd-7": DIAGRAM_7,
    "mmd-8": DIAGRAM_8,
    "mmd-9": DIAGRAM_9,
    "mmd-10": DIAGRAM_10,
    "mmd-11": DIAGRAM_11,
    "mmd-12": DIAGRAM_12,
    "mmd-13": DIAGRAM_13,
    "mmd-14": DIAGRAM_14,
    "mmd-15": DIAGRAM_15,
    "mmd-16": DIAGRAM_16
} as const;
export type DiagramId = keyof typeof DIAGRAMS;
