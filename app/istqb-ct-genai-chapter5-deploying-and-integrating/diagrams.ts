/**
 * CT-GenAI 第5章 Mermaid ダイアグラム定義
 * .claude/skills/fix-mermaid/SKILL.md 準拠（シングルクォート排除、mainBkg付与）
 */

export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#F6F7F9",
    "mainBkg": "#EEF1F8",
    "primaryColor": "#EEF1F8",
    "primaryTextColor": "#161B26",
    "primaryBorderColor": "#2E3F72",
    "lineColor": "#2E3F72",
    "secondaryColor": "#FAF1DF",
    "secondaryBorderColor": "#B8802A",
    "tertiaryColor": "#EAF4EC",
    "tertiaryBorderColor": "#1B6E6A",
    "textColor": "#161B26",
    "edgeLabelBackground": "#FFFFFF",
    "clusterBkg": "#FFFFFF",
    "clusterBorder": "#C7CEDB",
    "nodeTextColor": "#161B26",
    "fontFamily": "Noto Sans JP, Inter, sans-serif",
    "fontSize": "15px"
  },
  "flowchart": {
    "nodeSpacing": 44,
    "rankSpacing": 46,
    "htmlLabels": true
  }
}}%%`;

export const DIAGRAM_D1 = `${MERMAID_CONFIG}
flowchart TD
    CH5["第5章<br/>テスト組織における生成AIの導入と統合（80分）"]
    S51["5.1 生成AI導入のロードマップ<br/>（戦略・リスク・選定・フェーズ）"]
    S52["5.2 変革管理<br/>（スキル・能力構築・役割の進化）"]
    CH5 --> S51
    CH5 --> S52
    S51 --> L511["5.1.1 シャドーAIのリスク（K1）"]
    S51 --> L512["5.1.2 生成AI戦略の主要な観点（K2）"]
    S51 --> L513["5.1.3 LLM/SLMの選定（K2）"]
    S51 --> L514["5.1.4 導入のフェーズ（K1）"]
    S52 --> L521["5.2.1 必要なスキルと知識（K2）"]
    S52 --> L522["5.2.2 テストチームの生成AI能力の構築（K1）"]
    S52 --> L523["5.2.3 AI対応テスト組織におけるテストプロセスの進化（K1）"]
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class CH5 hub;
    class S51,S52 box;
    class L511,L512,L513,L514,L521,L522,L523 done;`;

export const DIAGRAM_D2 = `${MERMAID_CONFIG}
flowchart LR
    subgraph IN["戦略に含める4つの関心事"]
        A1["テスト目標<br/>（測定可能なゴール）"]
        A2["LLM/SLMの選定"]
        A3["入力データの<br/>品質・取り扱い"]
        A4["AI標準・規制への準拠"]
    end
    STR["生成AI活用を含む<br/>テスト戦略"]
    RM["現実的なロードマップ"]
    P1["段階的な導入ステップ"]
    P2["コンプライアンス・品質の<br/>マイルストーン確認"]
    P3["フィードバックの仕組み"]
    A1 --> STR
    A2 --> STR
    A3 --> STR
    A4 --> STR
    STR --> RM
    RM --> P1
    RM --> P2
    RM --> P3
    P3 -. "結果・リスクに応じて調整" .-> STR
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class A1,A2,A3,A4 box;
    class STR hub;
    class RM,P1,P2,P3 done;`;

export const DIAGRAM_D3 = `${MERMAID_CONFIG}
flowchart TD
    N["現場のニーズ<br/>「もっと早くテストを作りたい」"]
    G["組織に承認済みの<br/>AIツール・ルールがない／使いにくい"]
    U["個人が未承認のAIツールを<br/>独自判断で使い始める"]
    D["機密データ・ソースコード・<br/>顧客情報が外部へ"]
    R1["情報セキュリティ・<br/>プライバシーの弱点"]
    R2["コンプライアンス・<br/>規制違反"]
    R3["知的財産の紛争リスク"]
    N --> U
    G --> U
    U --> D
    D --> R1
    D --> R2
    D --> R3
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class N,G box;
    class U hub;
    class D,R1,R2,R3 done;`;

export const DIAGRAM_D4 = `${MERMAID_CONFIG}
flowchart TD
    Q1{"使おうとしているAIは<br/>組織が承認したツールか？"}
    Q2{"入力データに個人情報・<br/>機密情報・顧客情報が含まれるか？"}
    Q3{"マスキング／匿名化で<br/>除去・置換できるか？"}
    Q4{"そのツールは、そのデータ区分の<br/>利用が許可されているか？"}
    OK["入力してよい<br/>（出力は必ず人が確認）"]
    MASK["マスキング／匿名化してから入力"]
    NG1["入力しない<br/>承認申請 or 承認済みツールへ切替"]
    NG2["入力しない<br/>データ管理者・セキュリティ部門に相談"]
    Q1 -- "いいえ" --> NG1
    Q1 -- "はい" --> Q2
    Q2 -- "いいえ" --> Q4
    Q2 -- "はい" --> Q3
    Q3 -- "できる" --> MASK
    Q3 -- "できない" --> NG2
    MASK --> Q4
    Q4 -- "はい" --> OK
    Q4 -- "いいえ" --> NG2
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class Q1,Q2,Q3,Q4 hub;
    class OK,MASK done;
    class NG1,NG2 box;`;

export const DIAGRAM_D5 = `${MERMAID_CONFIG}
flowchart TD
    OBJ["① 測定可能な目標"]
    MODEL["② LLM/SLM選定"]
    DATA["③ データ品質・セキュリティ"]
    TRAIN["④ 教育・トレーニング"]
    METRIC["⑤ 効果測定の指標"]
    GUIDE["⑥ プロセスガイドライン<br/>（機密データ・透明性・品質ゲート）"]
    OUT["パイロットから<br/>再現可能で統制された<br/>テストプロセスへ"]
    OBJ --> MODEL
    OBJ --> METRIC
    DATA --> OUT
    MODEL --> OUT
    TRAIN --> OUT
    METRIC --> OUT
    GUIDE --> OUT
    METRIC -. "結果に基づき見直し" .-> OBJ
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class OBJ hub;
    class MODEL,DATA,TRAIN,METRIC,GUIDE box;
    class OUT done;`;

export const DIAGRAM_D6 = `${MERMAID_CONFIG}
flowchart TD
    G1["GenAIがテストウェアを生成<br/>（テストケース／スクリプト／データ等）"]
    G2["AI生成であることをラベル付け<br/>（透明性）"]
    G3{"人によるレビュー<br/>（品質ゲート）"}
    G4["修正・再プロンプト<br/>（反復的な改善）"]
    G5["受け入れ<br/>テスト管理ツールに登録"]
    G6["却下・破棄"]
    G1 --> G2
    G2 --> G3
    G3 -- "問題あり（修正可能）" --> G4
    G4 --> G1
    G3 -- "問題なし" --> G5
    G3 -- "信頼できない" --> G6
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class G1,G2,G4,G6 box;
    class G3 hub;
    class G5 done;`;

export const DIAGRAM_D7 = `${MERMAID_CONFIG}
flowchart TD
    S1["ステップ1：対象テストタスクと<br/>成功基準を明確にする"]
    S2["ステップ2：機能・技術・ライセンスで<br/>候補モデルを絞る"]
    S3["ステップ3：自組織の評価セットで<br/>性能を測る（複数回・統計的に）"]
    S4["ステップ4：ファインチューニングの<br/>可能性と効果を確認"]
    S5["ステップ5：継続的コストを試算"]
    S6["ステップ6：コミュニティ・<br/>ドキュメント・サポートを確認"]
    S7["ステップ7：データ機密性と<br/>コンプライアンスの適合を確認"]
    S8["ステップ8：パイロットで検証して選定<br/>（定期的に見直し）"]
    S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8
    S8 -. "結果・要件の変化に応じて再評価" .-> S2
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class S1 hub;
    class S2,S3,S4,S5,S6,S7 box;
    class S8 done;`;

export const DIAGRAM_D8 = `${MERMAID_CONFIG}
flowchart LR
    P1["フェーズ1<br/>Discovery（発見）<br/>体験・学習・低リスクな試行"]
    P2["フェーズ2<br/>Initiation and usage definition<br/>ユースケース特定・評価・優先順位付け"]
    P3["フェーズ3<br/>Utilization and iteration<br/>統合・監視・測定・改善・展開"]
    P1 --> P2 --> P3
    P3 -. "経験を反映して見直し" .-> P2
    P2 -. "新しい疑問・課題" .-> P1
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class P1 box;
    class P2 hub;
    class P3 done;`;

export const DIAGRAM_D9 = `${MERMAID_CONFIG}
flowchart TD
    subgraph UC1["ユースケースA：テストレポート分析"]
        A1["発見"] --> A2["利用方法の定義"] --> A3["活用と反復（現在地）"]
    end
    subgraph UC2["ユースケースB：テストケース生成"]
        B1["発見"] --> B2["利用方法の定義（現在地）"] --> B3["活用と反復"]
    end
    subgraph UC3["ユースケースC：自動テスト生成"]
        C1["発見（現在地）"] --> C2["利用方法の定義"] --> C3["活用と反復"]
    end
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class A1,A2 box;
    class A3 done;
    class B1,B3 box;
    class B2 hub;
    class C2,C3 box;
    class C1 hub;`;

export const DIAGRAM_D10 = `${MERMAID_CONFIG}
flowchart TD
    ROOT["構造化された変革管理"]
    T["技術面"]
    O["組織面"]
    ROOT --> T
    ROOT --> O
    T --> T1["5.2.1 スキルと知識<br/>プロンプト／コンテキストウィンドウ／評価／<br/>リスク認識／データサニタイズ／コスト・環境"]
    O --> O1["5.2.2 チームの能力構築<br/>ハンズオン／プロンプトパターン／<br/>コミュニティ・オブ・プラクティス"]
    O --> O2["5.2.3 テストプロセスの進化<br/>テスター：AI支援テストスペシャリスト<br/>テストマネージャー：オーケストレーション"]
    T1 --> R["AIツールの活用・誤用の防止・抵抗の低減"]
    O1 --> R
    O2 --> R
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class ROOT hub;
    class T,O,T1,O1,O2 box;
    class R done;`;

export const DIAGRAM_D11 = `${MERMAID_CONFIG}
flowchart LR
    subgraph BASE["従来のテスト専門性"]
        B1["ドメイン知識"]
        B2["テスト技法・経験"]
    end
    subgraph NEW["AI固有のスキル"]
        N1["プロンプト<br/>エンジニアリング"]
        N2["コンテキスト<br/>ウィンドウの理解"]
        N3["出力の<br/>レビュー・評価"]
        N4["リスク認識と<br/>データサニタイズ"]
        N5["コスト・環境への<br/>配慮"]
    end
    OUT["責任あるAI支援テスト"]
    B1 --> OUT
    B2 --> OUT
    N1 --> OUT
    N2 --> OUT
    N3 --> OUT
    N4 --> OUT
    N5 --> OUT
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class B1,B2,N1,N2,N3,N4,N5 box;
    class OUT done;`;

export const DIAGRAM_D12 = `${MERMAID_CONFIG}
flowchart TD
    C1["LLMへ送る内容を用意する"]
    C2{"個人情報・認証情報・<br/>機密情報が含まれるか？"}
    C3["マスキング／除去／仮名化"]
    C4{"承認済みツール・<br/>許可された環境か？"}
    C5["送信"]
    C6["AIの出力を人がレビュー"]
    C7["送信しない<br/>環境を切り替える／承認を得る"]
    C1 --> C2
    C2 -- "はい" --> C3
    C2 -- "いいえ" --> C4
    C3 --> C4
    C4 -- "はい" --> C5 --> C6
    C4 -- "いいえ" --> C7
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class C1,C3,C7 box;
    class C2,C4 hub;
    class C5,C6 done;`;

export const DIAGRAM_D13 = `${MERMAID_CONFIG}
flowchart TD
    L1["ステップ1：基本的なプロンプト作成"]
    L2["ステップ2：テスト特化の<br/>プロンプト技法（第2章）"]
    L3["ステップ3：プロンプトパターンの活用<br/>（再利用可能なプロンプトのひな形）"]
    L4["ステップ4：プロンプトライブラリと<br/>教訓の共有（組織の資産）"]
    COP["コミュニティ・オブ・プラクティス（実践共同体）<br/>定期的な知識共有・成功事例・失敗と限界の議論"]
    L1 --> L2 --> L3 --> L4
    COP --> L3
    COP --> L4
    L4 -. "成功パターンを追加・改善" .-> L3
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class L1,L2,L3 box;
    class L4 done;
    class COP hub;`;

export const DIAGRAM_D14 = `${MERMAID_CONFIG}
flowchart LR
    subgraph T["テスター"]
        T1["従来：テスト設計者・実行者"]
        T2["これから：AI支援テストスペシャリスト"]
        T1 --> T2
    end
    subgraph M["テストマネージャー"]
        M1["従来：計画・監視・統制"]
        M2["これから：人とAIのワークフローのオーケストレーション"]
        M1 --> M2
    end
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class T1,M1 box;
    class T2,M2 done;`;

export const DIAGRAM_D15 = `${MERMAID_CONFIG}
flowchart TD
    D1{"扱うデータの機密性は？"}
    H1["商用LLMプロバイダーの<br/>セキュアな提供プランを利用"]
    H2["セキュアなクラウド上で<br/>LLMを運用"]
    H3["自組織のインフラ内に<br/>LLMを導入"]
    NOTE["いずれの場合も<br/>データ最小化・匿名化・暗号化・アクセス制御・<br/>定期的なセキュリティ監査を併用"]
    D1 -- "機密性が比較的低い" --> H1
    D1 -- "中程度／自社管理が必要" --> H2
    D1 -- "非常に高い／外部へ出せない" --> H3
    H1 --> NOTE
    H2 --> NOTE
    H3 --> NOTE
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class D1 hub;
    class H1,H2,H3 box;
    class NOTE done;`;

export const DIAGRAM_D16 = `${MERMAID_CONFIG}
flowchart TD
    subgraph P51["5.1 ロードマップ"]
        R1["5.1.1 シャドーAIのリスクを認識<br/>（漏れる・違反する・権利があいまい）"]
        R2["5.1.2 戦略を定める<br/>（目標・モデル・データ・教育・指標・ガイドライン）"]
        R3["5.1.3 モデルを選ぶ<br/>（性能・チューニング・コスト・サポート）"]
        R4["5.1.4 3フェーズで段階導入<br/>（発見→利用方法の定義→活用と反復）"]
        R1 --> R2 --> R3 --> R4
    end
    subgraph P52["5.2 変革管理"]
        C1["5.2.1 スキルを身につける<br/>（プロンプト・評価・サニタイズ・右サイズ）"]
        C2["5.2.2 チームで能力を育てる<br/>（ハンズオン・プロンプトパターン・実践共同体）"]
        C3["5.2.3 役割を進化させる<br/>（AI支援テストスペシャリスト／オーケストレーション）"]
        C1 --> C2 --> C3
    end
    R4 --> C1
    C3 -. "経験を反映" .-> R2
    GOAL["統制された、継続的に成果の出る<br/>AI支援テスト組織"]
    R4 --> GOAL
    C3 --> GOAL
    classDef box fill:#EEF1F8,stroke:#2E3F72,color:#161B26;
    classDef hub fill:#FAF1DF,stroke:#B8802A,color:#161B26;
    classDef done fill:#EAF4EC,stroke:#2F6B3D,color:#161B26;
    class R1,R2,R3,C1,C2 box;
    class R4,C3 hub;
    class GOAL done;`;

