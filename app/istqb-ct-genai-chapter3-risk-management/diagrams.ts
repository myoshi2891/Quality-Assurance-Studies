/**
 * CT-GenAI 第3章：ソフトウェアテストにおける生成AIのリスク管理
 * Mermaid 図解定義ファイル
 *
 * .claude/skills/fix-mermaid/SKILL.md 準拠:
 * - JSON 内でシングルクォートを使用しない
 * - カラム0配置
 * - ノードラベルは1行に収める
 */

export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "mainBkg": "#eff6ff",
    "primaryColor": "#eff6ff",
    "primaryBorderColor": "#93c5fd",
    "primaryTextColor": "#0f172a",
    "lineColor": "#94a3b8",
    "secondaryColor": "#f1f5f9",
    "tertiaryColor": "#ffffff",
    "nodeBorder": "#93c5fd",
    "clusterBkg": "#f8fafc",
    "clusterBorder": "#e2e8f0",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "htmlLabels": true,
  "flowchart": {
    "curve": "basis",
    "nodeSpacing": 60,
    "rankSpacing": 70
  }
}}%%`;

// 図0: 第3章の全体マップ (1.3)
export const DIAGRAM_CH3_OVERVIEW = `${MERMAID_CONFIG}
flowchart TD
    OV_Root["第3章 生成AIのリスク管理"] --> OV_S31["3.1 出力の品質リスク"]
    OV_Root --> OV_S32["3.2 プライバシーとセキュリティ"]
    OV_Root --> OV_S33["3.3 エネルギーと環境"]
    OV_Root --> OV_S34["3.4 規制と標準"]

    OV_S31 --> OV_A1["ハルシネーション"]
    OV_S31 --> OV_A2["推論エラー"]
    OV_S31 --> OV_A3["バイアス"]
    OV_S31 --> OV_A4["非決定的な振る舞い"]

    OV_S32 --> OV_B1["リスクの種類"]
    OV_S32 --> OV_B2["攻撃ベクトル4種"]
    OV_S32 --> OV_B3["緩和策"]

    OV_S33 --> OV_C1["タスクの特徴"]
    OV_S33 --> OV_C2["モデルの使い方"]

    OV_S34 --> OV_D1["ISO IEC 42001"]
    OV_S34 --> OV_D2["ISO IEC 23053"]
    OV_S34 --> OV_D3["EU AI Act"]
    OV_S34 --> OV_D4["NIST AI RMF"]`;

// 図1: 3つの間違いの関係図 (2.1)
export const DIAGRAM_THREE_MISTAKES_RELATION = `${MERMAID_CONFIG}
flowchart LR
    MX_Cause1["学習データの性質"] --> MX_Model["LLM の仕組み 次の言葉を予測する"]
    MX_Cause2["トランスフォーマーの限界"] --> MX_Model
    MX_Model --> MX_H["ハルシネーション 事実と違う内容"]
    MX_Model --> MX_R["推論エラー 論理の筋道の誤り"]
    MX_Model --> MX_B["バイアス 偏った出力"]
    MX_H --> MX_Impact["テストウェアの品質低下"]
    MX_R --> MX_Impact
    MX_B --> MX_Impact
    MX_Impact --> MX_Risk["誤解を招く テスト結果の信頼性が下がる"]`;

// 図2: 検出の判断フロー (2.2)
export const DIAGRAM_DETECTION_FLOW = `${MERMAID_CONFIG}
flowchart TD
    DT_Start["LLM の出力を受け取る"] --> DT_Risk{"間違いが起きた場合の影響は大きいか"}
    DT_Risk -->|"大きい"| DT_Deep["人のレビューと自動検証の両方を実施"]
    DT_Risk -->|"小さい"| DT_Light["抜き取りレビューと自動チェックを実施"]
    DT_Deep --> DT_Q1{"要件や仕様と食い違う内容があるか"}
    DT_Light --> DT_Q1
    DT_Q1 -->|"ある"| DT_Hal["ハルシネーションの疑い クロス検証と専門家相談"]
    DT_Q1 -->|"ない"| DT_Q2{"計算や優先順位や条件分岐に誤りがあるか"}
    DT_Q2 -->|"ある"| DT_Rea["推論エラーの疑い 論理検証と実行して確認"]
    DT_Q2 -->|"ない"| DT_Q3{"データやテストタイプに偏りがあるか"}
    DT_Q3 -->|"ある"| DT_Bia["バイアスの疑い 代表性と網羅性を確認"]
    DT_Q3 -->|"ない"| DT_Ok["採用候補としてレビューに進む"]
    DT_Hal --> DT_Fix["修正して再生成または人が直す"]
    DT_Rea --> DT_Fix
    DT_Bia --> DT_Fix`;

// 図3: 軽減技法の使い方フロー (2.3)
export const DIAGRAM_MITIGATION_FLOW = `${MERMAID_CONFIG}
flowchart TD
    MG_Start["テスト作業を LLM に依頼したい"] --> MG_T1["技法1 必要な情報を全部そろえる"]
    MG_T1 --> MG_T3["技法3 入力を構造化して分かりやすくする"]
    MG_T3 --> MG_T4["技法4 タスクに合うモデルを選ぶ"]
    MG_T4 --> MG_T2["技法2 依頼を小さなステップに分ける"]
    MG_T2 --> MG_Step["1ステップ実行"]
    MG_Step --> MG_Verify{"出力を確認して問題ないか"}
    MG_Verify -->|"問題あり"| MG_Redo["プロンプトを直して再実行"]
    MG_Redo --> MG_Step
    MG_Verify -->|"問題なし"| MG_More{"次のステップがあるか"}
    MG_More -->|"ある"| MG_Step
    MG_More -->|"ない"| MG_T5["技法5 複数モデルで比較して最終確認"]
    MG_T5 --> MG_Done["採用する成果物を決定"]`;

// 図4: temperature の効果の図 (2.4)
export const DIAGRAM_TEMPERATURE_EFFECT = `${MERMAID_CONFIG}
flowchart LR
    TM_Input["同じプロンプト"] --> TM_Low["temperature を低くする"]
    TM_Input --> TM_High["temperature を高くする"]
    TM_Low --> TM_LowR["出力が安定し再現しやすい"]
    TM_Low --> TM_LowC["ただし多様性と創造性が下がる"]
    TM_High --> TM_HighR["出力が多様でアイデアが出やすい"]
    TM_High --> TM_HighC["ただし毎回変わりやすく誤りも混ざりやすい"]
    TM_LowR --> TM_UseLow["向く作業 テストスクリプト生成や期待結果の確認"]
    TM_HighR --> TM_UseHigh["向く作業 テスト観点の洗い出しや探索的テストの発想"]`;

// 図5: プライバシーとセキュリティの整理図 (3.1)
export const DIAGRAM_PRIVACY_SECURITY_MAP = `${MERMAID_CONFIG}
flowchart LR
    PR_Tester["テスター"] -->|"プロンプトとデータを入力"| PR_FE["フロントエンド"]
    PR_FE --> PR_BE["バックエンド 認証とプロンプト準備"]
    PR_BE --> PR_LLM["LLM 外部サービスまたは自社環境"]
    PR_BE --> PR_DB["データ源 データベースとベクトルDB"]
    PR_LLM --> PR_BE
    PR_BE --> PR_FE
    PR_FE -->|"生成結果"| PR_Tester

    PR_R1["リスク1 機密や個人情報を入力してしまう"] --> PR_Tester
    PR_R2["リスク2 提供元での保存と利用が不明"] --> PR_LLM
    PR_R3["リスク3 不正アクセスとデータ侵害"] --> PR_BE
    PR_R4["リスク4 悪意ある入力で誤誘導される"] --> PR_FE`;

// 図6: 攻撃ベクトルがどこに入り込むかの図 (3.2)
export const DIAGRAM_ATTACK_VECTORS = `${MERMAID_CONFIG}
flowchart TD
    AV_Phase1["入力段階 プロンプトと添付ファイル"] --> AV_Phase2["処理段階 LLM が学習と文脈をもとに推論"]
    AV_Phase2 --> AV_Phase3["出力段階 テストケースやコードの生成"]
    AV_Phase3 --> AV_Phase4["評価段階 結果の評価とフィードバック"]

    AV_AtkReq["リクエスト操作 画像やデータで別の文脈に誘導"] --> AV_Phase1
    AV_AtkCtx["コンテキスト操作 長いプロンプトで機密を引き出す"] --> AV_Phase2
    AV_AtkMal["悪意のあるコード生成 バックドア入りコード"] --> AV_Phase3
    AV_AtkPoi["データポイズニング 偽の評価や汚染データ"] --> AV_Phase4`;

// 図7: 運用環境の選択フロー (3.3)
export const DIAGRAM_ENVIRONMENT_SELECTION_FLOW = `${MERMAID_CONFIG}
flowchart TD
    EN_Start["生成AIに渡したいデータがある"] --> EN_Q1{"機密情報や個人情報を含むか"}
    EN_Q1 -->|"含まない"| EN_Env1["一般向けサービスを利用可能 入力ルールは守る"]
    EN_Q1 -->|"含む"| EN_Q2{"匿名化や仮名化で不要にできるか"}
    EN_Q2 -->|"できる"| EN_Mask["匿名化または仮名化をしてから渡す"]
    EN_Mask --> EN_Env2["商用の安全なサービスを検討"]
    EN_Q2 -->|"できない"| EN_Q3{"要求される機密レベルは非常に高いか"}
    EN_Q3 -->|"中程度"| EN_Env3["安全なクラウド上で LLM を運用"]
    EN_Q3 -->|"非常に高い"| EN_Env4["自社インフラに LLM を導入"]
    EN_Env2 --> EN_Review["人によるレビューと定期監査"]
    EN_Env3 --> EN_Review
    EN_Env4 --> EN_Review
    EN_Env1 --> EN_Review`;

// 図8: エネルギー消費が増える仕組みの図 (4.1)
export const DIAGRAM_ENERGY_CONSUMPTION = `${MERMAID_CONFIG}
flowchart LR
    PW_F1["タスクの特徴 種類と複雑さと入力の長さ"] --> PW_Compute["必要な計算資源が増える"]
    PW_F2["モデルの使い方 回数とモデルの大きさ"] --> PW_Compute
    PW_Compute --> PW_Energy["データセンターの電力消費が増える"]
    PW_Energy --> PW_CO2["CO2 排出が増える"]
    PW_CO2 --> PW_Impact["累積すると環境負荷が大きくなる"]
    PW_Best["対策 不要なやり取りを減らす タスクに合うモデルを選ぶ"] --> PW_F2`;

// 図9: リスクと4つのルールブックの対応図 (5.1)
export const DIAGRAM_REGULATIONS_MAP = `${MERMAID_CONFIG}
flowchart LR
    RG_R1["3.1 出力の品質リスク 誤りと偏り"] --> RG_N["NIST AI RMF 公平性と透明性とセキュリティ"]
    RG_R1 --> RG_E["EU AI Act 透明性と説明責任とバイアス緩和"]
    RG_R2["3.2 プライバシーとセキュリティ"] --> RG_I23["ISO IEC 23053 データ品質と透明性と安全性"]
    RG_R2 --> RG_N
    RG_R3["3.3 環境影響"] --> RG_I42["ISO IEC 42001 AI管理システム"]
    RG_R1 --> RG_I42
    RG_R2 --> RG_I42
    RG_I42 --> RG_Org["組織として一貫性と信頼性のある GenAI 利用"]
    RG_I23 --> RG_Org
    RG_E --> RG_Org
    RG_N --> RG_Org`;
