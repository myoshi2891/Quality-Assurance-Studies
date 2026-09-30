export const MERMAID_CONFIG = `%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#ffffff",
    "primaryColor": "#eff6ff",
    "primaryBorderColor": "#2563eb",
    "primaryTextColor": "#1e293b",
    "lineColor": "#64748b",
    "secondaryColor": "#f8fafc",
    "tertiaryColor": "#f1f5f9",
    "nodeBorder": "#2563eb",
    "clusterBkg": "#f8fafc",
    "clusterBorder": "#cbd5e1",
    "edgeLabelBackground": "#ffffff",
    "fontFamily": "Noto Sans JP, sans-serif",
    "fontSize": "14px"
  },
  "htmlLabels": true,
  "flowchart": { "curve": "basis" }
}}%%`;

export const DIAGRAM_AI_GENEALOGY = `${MERMAID_CONFIG}
flowchart TB
accTitle: AIの系譜：記号的AIから生成AIへ
accDescr: 記号的AI、古典的機械学習、深層学習、生成AIの4種類を順に並べ、それぞれのアプローチの特徴を示し、生成AIを強調した図
A1["記号的AI<br/>Symbolic AI<br/>ルールベース・記号と論理で<br/>知識を表現"]
A2["古典的機械学習<br/>Classical ML<br/>データ準備・特徴量選択・<br/>モデル学習が必要"]
A3["深層学習<br/>Deep Learning<br/>ニューラルネットワークで<br/>特徴量を自動抽出"]
A4["生成AI<br/>Generative AI<br/>深層学習を応用し<br/>新規コンテンツを生成"]
A1 --> A2 --> A3 --> A4
classDef highlight fill:#7c9eff,stroke:#33415c,color:#000,stroke-width:2px
class A4 highlight`;

export const DIAGRAM_LLM_TEXT_GENERATION = `${MERMAID_CONFIG}
flowchart LR
accTitle: LLMのテキスト生成の処理の流れ
accDescr: 入力テキストがトークン化、埋め込みによるベクトル化、Transformerの注意機構、確率的な次トークン予測を経て出力テキストになるまでの流れを示した図
B1["入力テキスト<br/>(プロンプト)"] --> B2["トークン化<br/>Tokenization"]
B2 --> B3["埋め込み<br/>Embedding<br/>(ベクトル化)"]
B3 --> B4["Transformer<br/>(注意機構で<br/>トークン間の関係を学習)"]
B4 --> B5["次トークン予測<br/>(確率的サンプリング)"]
B5 --> B6["生成された<br/>出力テキスト"]
classDef proc fill:#e8f0ff,stroke:#3355aa,color:#000
class B2,B3,B4,B5 proc`;

export const DIAGRAM_LLM_CATEGORIES = `${MERMAID_CONFIG}
flowchart LR
accTitle: LLMの3つのカテゴリと専門化の段階
accDescr: 基盤LLMが指示データで調整されて指示チューニング済みLLMになり、さらに推論タスクに特化して推論LLMになる段階的な専門化を示した図
C1["基盤LLM<br/>Foundation LLM<br/>多様な大規模データで<br/>事前学習された汎用モデル"]
C2["指示チューニング済みLLM<br/>Instruction-tuned LLM<br/>指示への追従性を<br/>高める追加学習"]
C3["推論LLM<br/>Reasoning LLM<br/>多段階推論・Chain-of-Thought<br/>に特化した追加学習"]
C1 -->|指示データで調整| C2 -->|推論タスクに特化| C3
classDef stage1 fill:#fff2cc,stroke:#b38600,color:#000
classDef stage2 fill:#d9ead3,stroke:#38761d,color:#000
classDef stage3 fill:#cfe2f3,stroke:#1155cc,color:#000
class C1 stage1
class C2 stage2
class C3 stage3`;

export const DIAGRAM_MULTIMODAL_PROCESSING = `${MERMAID_CONFIG}
flowchart TB
accTitle: マルチモーダルLLMによるテキストと画像の統合処理
accDescr: 要件などのテキスト入力はテキストトークナイザーで、スクリーンショットなどの画像入力は視覚エンコーダで特徴量に変換され、統合された埋め込み空間からTransformerを経てテスト成果物を生成する流れを示した図
D1["テキスト入力<br/>(要件・不具合報告など)"] --> D3["テキストトークナイザー"]
D2["画像入力<br/>(スクリーンショット・<br/>GUIワイヤーフレーム)"] --> D4["視覚エンコーダ<br/>による画像特徴量の抽出"]
D3 --> D5["統合された埋め込み空間"]
D4 --> D5
D5 --> D6["Transformer<br/>(マルチモーダル処理)"]
D6 --> D7["テスト成果物<br/>(差分検出・テストケース生成など)"]
classDef input fill:#f4cccc,stroke:#990000,color:#000
class D1,D2 input`;

export const DIAGRAM_CHATBOT_VS_APP = `${MERMAID_CONFIG}
flowchart TB
accTitle: AIチャットボット型とLLM搭載テストアプリケーション型の比較
accDescr: テスターが対話型チャットUIを通じてLLMと往復でやり取りするチャットボット型と、テストツールがAPI経由でLLMを呼び出し後処理された自動化テスト成果物を得るアプリケーション型を並べて比較した図
subgraph SG1["AIチャットボット型"]
    E1["テスター"] --> E2["対話型チャットUI"]
    E2 --> E3["LLM"]
    E3 --> E2
end
subgraph SG2["LLM搭載テストアプリケーション型"]
    E4["テストツール/フレームワーク"] --> E5["API経由の呼び出し"]
    E5 --> E6["LLM"]
    E6 --> E7["後処理された<br/>自動化テスト成果物"]
end
SG1 ~~~ SG2`;
