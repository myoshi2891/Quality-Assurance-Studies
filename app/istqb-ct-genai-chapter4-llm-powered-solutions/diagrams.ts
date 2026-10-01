/**
 * ISTQB CT-GenAI 第4章：Mermaid ダイアグラム定義
 * fix-mermaid スキルに準拠：MERMAID_CONFIG テンプレート適用 & クォートなしフォント
 */

export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "primaryColor": "#fffdf8",
    "primaryTextColor": "#2a2420",
    "primaryBorderColor": "#c9bfa8",
    "lineColor": "#8a7f68",
    "secondaryColor": "#f1e9d8",
    "tertiaryColor": "#faf6ee",
    "nodeBorder": "#c9bfa8",
    "clusterBkg": "#f8fafc",
    "clusterBorder": "#cbd5e1",
    "edgeLabelBackground": "#faf6ee",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "15px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis", "padding": 14 }
}}%%`;

export const DIAGRAM_D1 = `${MERMAID_CONFIG}
flowchart LR
    o1["第4章　LLM搭載テストインフラ"] --> o2["4.1 アーキテクチャ的アプローチ"]
    o1 --> o3["4.2 ファインチューニングとLLMOps"]
    o2 --> o4["4.1.1 基本アーキテクチャ　フロントエンド・バックエンド・LLM"]
    o2 --> o5["4.1.2 RAG　外部知識で回答を根拠づける"]
    o2 --> o6["4.1.3 LLM搭載エージェント　ツールを使って行動する"]
    o3 --> o7["4.2.1 ファインチューニング　モデル自体を自社向けに調整"]
    o3 --> o8["4.2.2 LLMOps　運用ライフサイクルの管理"]
    classDef hub fill:#dde5fb,stroke:#364fc7,stroke-width:2px,color:#2a2420;
    class o1 hub;`;

export const DIAGRAM_D2 = `${MERMAID_CONFIG}
flowchart LR
    a1["テスター"] --> a2["フロントエンド　UI"]
    a2 --> a3["バックエンド　認証・前処理・連携"]
    a3 --> a4["リレーショナルDB　テストケース・実行結果"]
    a3 --> a5["ベクトルDB　埋め込みによる意味検索"]
    a3 --> a6["外部システム　テスト管理・CIとCD・VCS"]
    a3 --> a7["LLM　クラウドAPI または社内モデル"]
    a7 --> a8["後処理　形式検証・ハルシネーション除去"]
    a8 --> a2
    classDef hub fill:#dde5fb,stroke:#364fc7,stroke-width:2px,color:#2a2420;
    class a3 hub;`;

export const DIAGRAM_D3 = `${MERMAID_CONFIG}
flowchart TD
    r1["大きな文書　要件書・テスト計画・仕様書"] --> r2["チャンク分割　256〜512トークン程度"]
    r2 --> r3["クリーニング　ノイズ・書式崩れ除去"]
    r3 --> r4["埋め込み化　高次元ベクトルに変換"]
    r4 --> r5["ベクトルDBに保存"]
    classDef hub fill:#dde5fb,stroke:#364fc7,stroke-width:2px,color:#2a2420;
    classDef done fill:#d9f0e3,stroke:#1f6d46,stroke-width:2px,color:#2a2420;
    class r1 hub;
    class r5 done;`;

export const DIAGRAM_D4 = `${MERMAID_CONFIG}
flowchart TD
    p1["1．テスターがバックエンドに質問を送る"] --> p2["2．バックエンドが埋め込みモデルに質問のベクトル化を依頼"]
    p2 --> p3["3．埋め込みモデルがクエリベクトルを返す"]
    p3 --> p4["4．バックエンドがベクトルDBに類似度検索を依頼"]
    p4 --> p5["5．ベクトルDBが関連チャンクを返す"]
    p5 --> p6["6．バックエンドが質問と関連チャンクをLLMに送信"]
    p6 --> p7["7．LLMが根拠づけられた応答を返す"]
    p7 --> p8["8．バックエンドが後処理した最終回答をテスターに返す"]
    classDef hub fill:#dde5fb,stroke:#364fc7,stroke-width:2px,color:#2a2420;
    classDef done fill:#d9f0e3,stroke:#1f6d46,stroke-width:2px,color:#2a2420;
    class p1 hub;
    class p8 done;`;

export const DIAGRAM_D5 = `${MERMAID_CONFIG}
flowchart TD
    g1["目標を受け取る　例えば回帰テストの失敗原因を分析"] --> g2["LLMが推論して次の行動を決定"]
    g2 --> g3{"ツールが必要か"}
    g3 -->|はい| g4["ツール呼び出し　ログ取得・テスト実行・API操作"]
    g4 --> g5["結果を観察して文脈に追加"]
    g5 --> g6["自動検証　構文チェック・テスト実行・一貫性確認"]
    g6 --> g2
    g3 -->|いいえ| g7{"重要な判断か"}
    g7 -->|はい| g8["人間が確認・承認　半自律型の場合"]
    g7 -->|いいえ| g9["結果を出力"]
    g8 --> g9
    classDef hub fill:#dde5fb,stroke:#364fc7,stroke-width:2px,color:#2a2420;
    classDef done fill:#d9f0e3,stroke:#1f6d46,stroke-width:2px,color:#2a2420;
    class g1 hub;
    class g9 done;`;

export const DIAGRAM_D6 = `${MERMAID_CONFIG}
flowchart LR
    m1["オーケストレーター　タスクの分配と連携"] --> m2["要件分析エージェント"]
    m1 --> m3["テスト設計エージェント"]
    m1 --> m4["自動化コード生成エージェント"]
    m1 --> m5["実行スケジューリングエージェント"]
    m1 --> m6["レポート・要約エージェント"]
    m2 --> m7["人間によるレビュー"]
    m3 --> m7
    m4 --> m7
    m5 --> m7
    m6 --> m7
    classDef hub fill:#dde5fb,stroke:#364fc7,stroke-width:2px,color:#2a2420;
    classDef done fill:#d9f0e3,stroke:#1f6d46,stroke-width:2px,color:#2a2420;
    class m1 hub;
    class m7 done;`;

export const DIAGRAM_D7 = `${MERMAID_CONFIG}
flowchart TD
    f1["1. 目的と評価指標を決める"] --> f2["2. 学習データを収集・精査　承認済みペアのみ"]
    f2 --> f3["3. 個人情報の匿名化　データ分割"]
    f3 --> f4["4. ベースモデルを選定　LLMかSLMか"]
    f4 --> f5["5. 追加学習を実行"]
    f5 --> f6["6. 未知データで評価　過学習の確認"]
    f6 --> f7["7. デプロイ・監視"]
    f6 -->|不十分| f2
    classDef hub fill:#dde5fb,stroke:#364fc7,stroke-width:2px,color:#2a2420;
    classDef box fill:#f3e6c4,stroke:#7d5c14,stroke-width:2px,color:#2a2420;
    classDef done fill:#d9f0e3,stroke:#1f6d46,stroke-width:2px,color:#2a2420;
    class f1 hub;
    class f6 box;
    class f7 done;`;

export const DIAGRAM_D8 = `${MERMAID_CONFIG}
flowchart TD
    l1["計画・選定　ユースケースとモデルの選定"] --> l2["準備・調整　データ整備・プロンプト・RAG・ファインチューニング"]
    l2 --> l3["デプロイ　環境構築・アクセス制御"]
    l3 --> l4["監視　品質・コスト・セキュリティ"]
    l4 --> l5["評価・改善　指標の確認・回帰確認"]
    l5 --> l6["保守・更新　モデル更新・データ更新"]
    l6 --> l2
    classDef hub fill:#dde5fb,stroke:#364fc7,stroke-width:2px,color:#2a2420;
    class l1 hub;`;

export const DIAGRAM_D9 = `${MERMAID_CONFIG}
flowchart TD
    s1{"扱うデータは機密性が高いか"} -->|高い| s2{"社内でMLインフラと専門人材を確保できるか"}
    s1 -->|低から中| s3{"既存のテストツールにGenAI機能があるか"}
    s2 -->|はい| s4["社内開発　アプローチ3"]
    s2 -->|いいえ| s5["セキュアなクラウド環境　または契約で保護されたサービス"]
    s3 -->|ある| s6["GenAI内蔵テストツール　アプローチ2"]
    s3 -->|ない| s7["AIチャットボットのガイドライン付き利用　アプローチ1"]
    classDef hub fill:#dde5fb,stroke:#364fc7,stroke-width:2px,color:#2a2420;
    classDef done fill:#d9f0e3,stroke:#1f6d46,stroke-width:2px,color:#2a2420;
    class s1 hub;
    class s4,s5,s6,s7 done;`;

export const DIAGRAM_D10 = `${MERMAID_CONFIG}
flowchart TD
    d1["LLMの出力に課題がある"] --> d2{"プロンプトの改善で解決できるか　ロール・文脈・例・形式"}
    d2 -->|はい| d3["プロンプトエンジニアリング　第2章"]
    d2 -->|いいえ| d4{"最新・自社固有の事実情報が足りないか"}
    d4 -->|はい| d5["RAG　4.1.2"]
    d4 -->|いいえ| d6{"用語・形式・推論の型をモデルに定着させたいか"}
    d6 -->|はい| d7["ファインチューニング　4.2.1"]
    d6 -->|いいえ| d8{"複数ステップの作業やツール操作が必要か"}
    d8 -->|はい| d9["LLM搭載エージェント　4.1.3"]
    d8 -->|いいえ| d10["モデルの変更やSLMの検討"]
    classDef hub fill:#dde5fb,stroke:#364fc7,stroke-width:2px,color:#2a2420;
    classDef box fill:#f3e6c4,stroke:#7d5c14,stroke-width:2px,color:#2a2420;
    classDef done fill:#d9f0e3,stroke:#1f6d46,stroke-width:2px,color:#2a2420;
    class d1 hub;
    class d2,d4,d6,d8 box;
    class d3,d5,d7,d9,d10 done;`;
