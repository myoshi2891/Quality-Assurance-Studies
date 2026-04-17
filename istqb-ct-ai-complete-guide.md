# 🤖 ISTQB® Certified Tester AI Testing (CT-AI)

## 完全学習ガイド【2025年最新版・初学者対応】

> **最終更新**: 2025年（ISTQB® 公式シラバス CT-AI v1.0 準拠）  
> **対象読者**: CTFL取得済みで、AIシステムのテストやテストへのAI活用を学びたい方  
> **参照元**: ISTQB® 公式シラバス CT-AI v1.0（2021年10月1日 GA正式リリース）

---

## 📚 目次

1. [CT-AI 概要と資格ロードマップ](#chapter-0)
2. [Chapter 1: AIの概要（Introduction to AI）](#chapter-1)
3. [Chapter 2: AIベースシステムの品質特性](#chapter-2)
4. [Chapter 3: 機械学習（ML）概要](#chapter-3)
5. [Chapter 4: ML データ](#chapter-4)
6. [Chapter 5: ML 機能パフォーマンスメトリクス](#chapter-5)
7. [Chapter 6: MLニューラルネットワークとテスト](#chapter-6)
8. [Chapter 7: AIベースシステムテスト概要](#chapter-7)
9. [Chapter 8: AI固有の品質特性のテスト](#chapter-8)
10. [Chapter 9: AIベースシステムのテスト手法と技法](#chapter-9)
11. [Chapter 10: AIベースシステムのテスト環境](#chapter-10)
12. [Chapter 11: テストへのAI活用](#chapter-11)
13. [試験対策・サンプル問題](#exam-tips)
14. [参照URL一覧](#references)

---

<a id="chapter-0"></a>

## 🌟 Chapter 0: CT-AI 概要と資格ロードマップ

### 0.1 この資格とは？

```
┌──────────────────────────────────────────────────────────────────┐
│               ISTQB® 認定資格ロードマップ（スペシャリストストリーム）  │
│                                                                  │
│  [スペシャリスト資格]                                               │
│   ┌────────────────────────────────────────────────────────┐    │
│   │  CT-AI（Certified Tester AI Testing）← 本資格！         │    │
│   │  AIベースシステムのテスト ＆ テストへのAI活用             │    │
│   └────────────────────────────────────────────────────────┘    │
│                    ↑                                             │
│   ┌────────────────────────────────────────────────────────┐    │
│   │  CT-GenAI（Generative AI Testing）← 2025年リリース      │    │
│   │  生成AI・LLMを使ったテストとLLMのテスト                   │    │
│   └────────────────────────────────────────────────────────┘    │
│                    ↑                                             │
│  [Foundation Level]                                              │
│   ┌──────────────────────────────────────────────────┐          │
│   │  CTFL v4.0（前提資格：必須）                        │          │
│   └──────────────────────────────────────────────────┘          │
│                                                                  │
│  CT-AI の2つの視点：                                               │
│  ①「AIシステムをテストする」 ← AI が対象（テスト対象がAI）          │
│  ②「テストにAIを使う」    ← AI が手段（AI でテストを支援）          │
└──────────────────────────────────────────────────────────────────┘
```

**CT-AI（Certified Tester AI Testing）** は、AIベースシステムのテスト方法論と、テスト活動にAIを活用するスキルを認定する国際スペシャリスト資格です。2021年にリリースされ、AIシステムテストの**世界標準**となっています。

### 0.2 CT-AI vs CT-GenAI の違い（2025年の新旧比較）

```
┌──────────────────────────────────────────────────────────────────┐
│              CT-AI vs CT-GenAI の比較（重要！）                     │
├────────────────────────┬─────────────────────────────────────────┤
│  CT-AI（2021）          │  CT-GenAI（2025）                       │
├────────────────────────┼─────────────────────────────────────────┤
│ AIシステムをテストする   │ 生成AIを使ってテストする                  │
│ ML・ニューラルネット     │ LLM・プロンプトエンジニアリング            │
│ バイアス・倫理・XAI      │ RAG・エージェント・LLMOps                │
│ 混同行列・精度・再現率   │ ハルシネーション・プライバシー              │
│ メタモルフィックテスト   │ マルチモーダルプロンプト                   │
│ 対抗攻撃・データポイズニング│ テストケース自動生成（LLM）             │
└────────────────────────┴─────────────────────────────────────────┘

CT-AI は「製品の中のAIの品質保証」
CT-GenAI は「テストプロセスの中でAIを使う」

→ どちらが必要かはプロジェクトの性質による
  AIシステムを開発している → CT-AI が優先
  テストプロセスにAIを導入 → CT-GenAI が優先
```

### 0.3 試験概要（v1.0）

```
╔══════════════════════════════════════════════════════════╗
║              CT-AI v1.0 試験スペック                      ║
╠════════════════════════════════╦═════════════════════════╣
║  問題数                        ║  40問                    ║
╠════════════════════════════════╬═════════════════════════╣
║  合格点                        ║  31点（47点満点）         ║
╠════════════════════════════════╬═════════════════════════╣
║  合格率目標                     ║  約66%                   ║
╠════════════════════════════════╬═════════════════════════╣
║  試験時間                       ║  60分                    ║
║  （英語非母語者）                ║  (+25% = 75分)           ║
╠════════════════════════════════╬═════════════════════════╣
║  前提条件                       ║  CTFL（必須）            ║
╠════════════════════════════════╬═════════════════════════╣
║  学習時間（公認研修）             ║  最低25.1時間             ║
╠════════════════════════════════╬═════════════════════════╣
║  最新シラバス                    ║  v1.0（2021年10月1日）    ║
╚════════════════════════════════╩═════════════════════════╝

配点の仕組み（重要！）：
  K1問題（記憶）：1点 × 約6問
  K2問題（理解）：1点 × 約15問
  K3問題（適用）：2点 × 約12問
  K4問題（分析）：2点 × 一部問題
  合計：47点満点
```

### 0.4 チャプター別学習時間配分

```
Chapter 1:  AIの概要                    ███         105分  ( 7.0%)
Chapter 2:  AIベースシステムの品質特性   ███         105分  ( 7.0%)
Chapter 3:  ML概要                      ████        145分  ( 9.6%)
Chapter 4:  MLデータ                    ███████     230分  (15.3%) ← 重要
Chapter 5:  ML機能パフォーマンスメトリクス ████      120分  ( 8.0%)
Chapter 6:  MLニューラルネットワーク      ██          65分  ( 4.3%)
Chapter 7:  AIテスト概要                 ████        115分  ( 7.7%)
Chapter 8:  AI固有品質特性のテスト        ████        150分  (10.0%)
Chapter 9:  テスト手法と技法             ████████    245分  (16.3%) ← 最重要
Chapter 10: テスト環境                   █           30分  ( 2.0%)
Chapter 11: テストへのAI活用             ██████      195分  (13.0%)
                                         合計: 1505分(25.1時間)
```

### 0.5 7つのビジネスアウトカム

| ID | ビジネスアウトカム |
|----|-----------------|
| BO1 | AIの現状と予想されるトレンドを理解できる |
| BO2 | MLモデルの実装とテストを経験し、テスターが品質に最も影響を与えられる箇所を認識できる |
| BO3 | 自己学習能力、バイアス、倫理、複雑さ、非決定論、透明性と説明可能性など、AIベースシステムのテストに関連する課題を理解できる |
| BO4 | AIベースシステムのテスト戦略に貢献できる |
| BO5 | AIベースシステムのテストケースを設計・実行できる |
| BO6 | AIベースシステムのテストをサポートするテストインフラの特別な要件を認識できる |
| BO7 | AIをソフトウェアテストのサポートに使用する方法を理解できる |

---

<a id="chapter-1"></a>

## 🧠 Chapter 1: AIの概要（Introduction to AI）
>
> 105分 | AIテスターが理解すべきAIの基礎

### 1.1 AIの定義とAI効果（Definition of AI and AI Effect）

```
人工知能（AI）の定義：
  「知識とスキルを獲得・処理・適用するエンジニアリングシステムの能力」
  [ISO/IEC JTC 1/SC 42 より]

AI効果（AI Effect）とは：
  → AIが何かを達成すると、それはもはや「真のAI」ではないと思われる現象
  → 例：Deep Blue がチェスで人間を倒した後、
         「あれはブルートフォースで本当のAIではない」と言われた
  → AI の定義は社会の認識とともに変化する
  → 今日の「AI」も将来は「当たり前の技術」になる可能性がある

テスターへの影響：
  → 何が「AIシステム」かの定義が変わる
  → テスト対象の性質（AIか否か）の判断が変わる可能性
```

### 1.2 狭義AI・汎用AI・超AI（Narrow, General and Super AI）

```
AIの3つのカテゴリ（試験頻出！）：

  ┌──────────────────────────────────────────────────────────────┐
  │  種類      │ 別名     │ 特徴                │ 現在の状況    │
  ├────────────┼─────────┼─────────────────────┼────────────┤
  │ 狭義AI    │ 弱いAI   │ 特定タスクに特化     │ ✅ 広く普及   │
  │ Narrow AI │ Weak AI  │ 文脈が限定的         │（検索・推薦等）│
  ├────────────┼─────────┼─────────────────────┼────────────┤
  │ 汎用AI    │ 強いAI   │ 人間同様の汎用認知   │ ❌ 未実現     │
  │ General AI│ Strong AI│ 理解・推論・適応     │（2021年時点）  │
  ├────────────┼─────────┼─────────────────────┼────────────┤
  │ 超AI      │ Super AI │ 人間を超える認知+    │ ❌ 未実現     │
  │           │          │ 無限の処理・知識     │（テクノロジー  │
  │           │          │ 技術的特異点を超えた │ 特異点の先）  │
  └──────────────────────────────────────────────────────────────┘

テスト関係の例（狭義AI）：
  ✓ スパムフィルター
  ✓ 音声アシスタント（Siri/Alexa）
  ✓ 画像認識システム
  ✓ テストケース生成ツール
  ✓ 推薦エンジン（Netflix等）
```

### 1.3 AIベースシステムと従来型システムの違い（試験頻出！）

```python
# 従来型システム vs AIベースシステムの違い

conventional_system = {
    "実装方法": "人間がルール（if-then-else）をコーディング",
    "動作原理": "決定論的（同じ入力→同じ出力）",
    "説明可能性": "高い（ロジックが追える）",
    "例": "温度 > 100 なら 沸騰中 を表示",
    "テスト難易度": "標準的（入力/出力が明確）",
}

ai_based_system = {
    "実装方法": "データからパターンを学習",
    "動作原理": "確率論的（同じ入力≠同じ出力の可能性）",
    "説明可能性": "低い（ブラックボックスになりがち）",
    "例": "猫の画像をトレーニングデータから学習して新画像を分類",
    "テスト難易度": "高い（テストオラクル問題・非決定論的動作）",
}

# テスターへの影響：
testing_challenges = [
    "テストオラクルの特定が困難（正解が何かを決めにくい）",
    "非決定論的な動作（同じ入力でも結果が変わる）",
    "膨大なデータを扱う必要がある",
    "バイアスや公平性の確認が必要",
    "モデルの内部動作の説明が困難",
    "継続的な学習による予期しない挙動変化",
]
```

### 1.4 AI技術の種類（AI Technologies）

```
AIを実装する技術の種類（K1 - 記憶すること）：

  ファジーロジック（Fuzzy Logic）
  → 「あいまいな」値を扱う論理

  検索アルゴリズム（Search Algorithms）
  → A*探索、最適化問題

  推論技術（Reasoning Techniques）
  → ルールエンジン、事例ベース推論

  機械学習技術（Machine Learning Techniques）：
  ├── ニューラルネットワーク（Neural Networks）
  ├── ベイジアンモデル（Bayesian Models）
  ├── 決定木（Decision Trees）
  ├── ランダムフォレスト（Random Forest）
  ├── 線形回帰（Linear Regression）
  ├── ロジスティック回帰（Logistic Regression）
  ├── クラスタリングアルゴリズム
  ├── 遺伝的アルゴリズム（Genetic Algorithms）
  └── サポートベクターマシン（SVM）
```

### 1.5 AI開発フレームワーク（AI Development Frameworks）

```
主要なAI開発フレームワーク（K1 - 認識すること）：

┌────────────────────────────────────────────────────────────────┐
│ フレームワーク  │ 提供元      │ 主な特徴                        │
├───────────────┼────────────┼───────────────────────────────┤
│ TensorFlow    │ Google     │ スケーラブルML・データフローグラフ  │
│ PyTorch       │ Meta(FB)   │ 画像処理・NLP・Python/C++対応   │
│ Keras         │ -          │ TensorFlow上の高水準API・Python │
│ Scikit-learn  │ -          │ PythonのML標準ライブラリ         │
│ Apache MxNet  │ Amazon(AWS)│ 深層学習オープンソース            │
│ CNTK          │ Microsoft  │ 深層学習ツールキット              │
│ IBM Watson    │ IBM        │ AIソリューション開発スイート       │
└────────────────────────────────────────────────────────────────┘

※ テスター視点：これらのフレームワークを「認識」できれば十分
  深い実装知識は CT-AI 試験では不要
```

### 1.7 AIaaS（AI as a Service）と事前学習済みモデル

```
AIaaS の特徴：
  → クラウドでAIサービスをAPIとして提供
  → 例：AWS Rekognition（画像認識）、Google Cloud Vision、Azure AI

AIaaS のテスト上の注意点：
  ✓ サービス契約（SLA）の内容を確認
  ✓ データプライバシー・GDPR対応の確認
  ✓ API仕様変更による影響への対処
  ✓ レイテンシ・可用性の要件確認

事前学習済みモデル（Pre-Trained Models）：
  → 大量データで既に学習済みのモデルを活用
  → 転移学習（Transfer Learning）でカスタマイズ

転移学習のリスク（テスト上の課題）：
  ✗ 元モデルのバイアスを引き継ぐ可能性
  ✗ 元モデルの欠陥を引き継ぐ可能性
  ✗ ターゲットデータとトレーニングデータの分布差
  ✗ 予期しない挙動（コンセプトドリフトのリスク）
```

### 1.9 AI の標準・規制（Standards, Regulations and AI）

```
AIに関する主要な標準・規制：

ISO 標準：
  ✓ ISO/IEC JTC 1/SC 42: AIの国際標準委員会
  ✓ ISO 26262: 自動車機能安全規格
  ✓ ISO/PAS 21448 (SOTIF): 意図された機能の安全性（自動車）

EU規制：
  ✓ GDPR: データ保護・プライバシー規制
  ✓ EU AI Act（2024年）: AI規制の法的枠組み

倫理ガイドライン：
  ✓ IEEE Ethically Aligned Design
  ✓ EU Ethics Guidelines for Trustworthy AI

テスターへの影響：
  → AIシステムが該当規制に準拠しているか確認する必要がある
  → 安全性関連システムでは規制対応が法的義務
```

---

<a id="chapter-2"></a>

## ⚠️ Chapter 2: AIベースシステムの品質特性（Quality Characteristics for AI-Based Systems）
>
> 105分 | AI固有の品質課題

### AI固有の品質特性の概要

```
従来のISO 25010 品質特性 + AI 固有の品質特性：

ISO 25010 の一般的な品質特性（従来型システムでも重要）：
  機能適合性、性能効率性、互換性、ユーザビリティ、
  信頼性、セキュリティ、保守性、移植性

AI固有の品質特性（CT-AI で追加される観点）：
  ✓ 柔軟性・適応性（Flexibility & Adaptability）
  ✓ 自律性（Autonomy）
  ✓ 進化性（Evolution）
  ✓ バイアス（Bias）
  ✓ 倫理（Ethics）
  ✓ 副作用と報酬ハッキング（Side Effects & Reward Hacking）
  ✓ 透明性・解釈可能性・説明可能性（Transparency, Interpretability, Explainability）
  ✓ 安全性（Safety）
```

### 2.1 柔軟性と適応性（Flexibility and Adaptability）

```
定義：
  柔軟性：異なる状況や環境に対応できる能力
  適応性：新しい情報や環境の変化に対して学習・調整できる能力

テストのポイント：
  ✓ 予期しない入力に対する動作確認
  ✓ 環境の変化（デプロイ環境・データ分布）への適応確認
  ✓ 新しいシナリオへの汎化能力の確認
```

### 2.2 自律性（Autonomy）

```
定義：
  外部の直接的な制御なしに機能を実行できる能力

自律性のレベル（例：自動運転車）：
  Level 0: 人間が全て操作
  Level 1-2: 一部の支援機能
  Level 3: 条件付き自動化
  Level 4-5: 完全自動化

テストのポイント：
  ✓ 想定内の環境での自律動作の正確性確認
  ✓ 想定外の状況での安全な挙動確認
  ✓ 人間との制御の切り替えシナリオ確認
  ✓ 自律的な意思決定の適切性確認
```

### 2.4 バイアス（Bias）- 試験頻出！

```
AIにおけるバイアスの種類（重要！試験頻出）：

アルゴリズムバイアス（Algorithmic Bias）：
  → アルゴリズム自体に内在する偏り
  例：特定の人種に不利な採用アルゴリズム

サンプルバイアス（Sample Bias）：
  → トレーニングデータが実際の分布を反映していない
  例：白人男性の顔画像ばかりで学習した顔認識システム

不適切なバイアス（Inappropriate Bias）：
  → 差別や不公平を生む偏り
  例：性別・人種・年齢で差別するローン審査AI

バイアスのテスト例：
```

```python
# バイアス検出の概念的な実装例

def detect_demographic_bias(model, test_dataset: list) -> dict:
    """
    人口統計グループ別のモデル精度を比較してバイアスを検出する
    """
    results_by_group = {}
    
    for sample in test_dataset:
        demographic_group = sample["group"]  # 例：性別、年齢、人種
        prediction = model.predict(sample["features"])
        actual = sample["label"]
        
        if demographic_group not in results_by_group:
            results_by_group[demographic_group] = {"correct": 0, "total": 0}
        
        results_by_group[demographic_group]["total"] += 1
        if prediction == actual:
            results_by_group[demographic_group]["correct"] += 1
    
    # 各グループの精度を計算
    accuracy_by_group = {}
    for group, counts in results_by_group.items():
        accuracy_by_group[group] = counts["correct"] / counts["total"]
    
    # 最大と最小の精度差がバイアスの指標
    max_acc = max(accuracy_by_group.values())
    min_acc = min(accuracy_by_group.values())
    bias_gap = max_acc - min_acc
    
    return {
        "accuracy_by_group": accuracy_by_group,
        "bias_gap": bias_gap,
        "has_significant_bias": bias_gap > 0.05  # 5%以上の差はバイアスとみなす
    }

# 使用例
test_data = [
    {"group": "female", "features": [...], "label": 1},
    {"group": "male",   "features": [...], "label": 1},
    # ...
]
result = detect_demographic_bias(my_model, test_data)
print(f"バイアスギャップ: {result['bias_gap']:.2%}")
```

### 2.5 倫理（Ethics）

```
AIシステムに関する倫理原則（試験では概念レベルで理解）：

  ✓ 公平性（Fairness）：差別のない意思決定
  ✓ 透明性（Transparency）：決定プロセスの開示
  ✓ プライバシー（Privacy）：個人データの保護
  ✓ アカウンタビリティ（Accountability）：責任の明確化
  ✓ 人間の監督（Human Oversight）：人間によるコントロール
  ✓ 安全性（Safety）：有害な結果の防止
  ✓ 非差別（Non-discrimination）：偏りのない処遇

倫理テストの観点：
  → AIシステムが倫理原則に準拠しているか確認
  → EU AI Ethics Guidelines などを参照
```

### 2.6 副作用と報酬ハッキング（Side Effects and Reward Hacking）

```
副作用（Side Effects）：
  → AI が目標達成のために予期しない負の影響を引き起こす
  例：ロボットが「部屋を片付ける」タスクで
      物を隠蔽する（壊す）ことで達成しようとする

報酬ハッキング（Reward Hacking）：
  → AI が報酬関数の「抜け穴」を見つけて悪用する
  例：ゲームAIが「スコアを最大化」するために
      チートに相当する方法でスコアを稼ぐ

テスターへの影響：
  ✓ AIの目標設定の適切さを検証する
  ✓ 予期しない行動（副作用）のモニタリング
  ✓ 報酬関数の設計レビューに参加する
```

### 2.7 透明性・解釈可能性・説明可能性（Transparency, Interpretability, Explainability）

```
3つの概念の違い（試験頻出！）：

  透明性（Transparency）：
  → AIシステムの動作に関する情報を公開する度合い
  → 「どんなデータで学習したか」「どんなアルゴリズムを使ったか」

  解釈可能性（Interpretability）：
  → 人間がAIの内部動作を理解できる度合い
  → 「モデルがどのように予測を出しているか理解できる」

  説明可能性（Explainability / XAI）：
  → 特定の予測/決定の根拠を説明できる能力
  → 「この医療診断の根拠は〇〇という特徴量の影響」

具体例：
  医療AI の場合：
  透明性：「X線画像8万枚で学習したCNNモデル」（公開）
  解釈可能性：「肺の特定領域の輝度パターンで判断」（理解可能）
  説明可能性：「この画像は右上肺野の輝度が通常より20%高いため異常と判定」
             
XAIツールの例（テスターが活用できる）：
  ✓ LIME（Local Interpretable Model-agnostic Explanations）
  ✓ SHAP（SHapley Additive exPlanations）
  ✓ Grad-CAM（画像分類の可視化）

テストのポイント：
  ✓ 説明の整合性確認（同じ予測で異なる説明が出ないか）
  ✓ 説明の完全性確認（重要な特徴が説明に含まれているか）
  ✓ 説明のユーザー理解度確認（対象ユーザーが理解できるか）
```

---

<a id="chapter-3"></a>

## 🔬 Chapter 3: 機械学習（ML）概要（Machine Learning Overview）
>
> 145分 | テスターが理解すべきML基礎

### 3.1 機械学習の形態（Forms of ML）- 試験頻出！

```
機械学習の3つの主要な形態：

  ┌──────────────────────────────────────────────────────────────┐
  │          ML の種類比較                                        │
  ├─────────────────┬──────────────────────┬────────────────────┤
  │  教師あり学習     │  教師なし学習          │  強化学習           │
  │ (Supervised)    │  (Unsupervised)       │  (Reinforcement)   │
  ├─────────────────┼──────────────────────┼────────────────────┤
  │ ラベル付きデータ  │ ラベルなしデータ        │ 環境との試行錯誤    │
  │ 正解ありで学習    │ 構造・パターンを発見    │ 報酬を最大化        │
  ├─────────────────┼──────────────────────┼────────────────────┤
  │ 分類・回帰       │ クラスタリング・次元削減 │ ゲームAI・自動制御  │
  ├─────────────────┼──────────────────────┼────────────────────┤
  │ スパムフィルター  │ 顧客セグメンテーション  │ AlphaGo             │
  │ 医療診断AI       │ 異常検知               │ ロボット制御         │
  │ 画像分類         │ 推薦システム            │ 自動運転              │
  └─────────────────┴──────────────────────┴────────────────────┘
```

**教師あり学習の詳細（試験頻出）：**

```
教師あり学習の2種類：

  分類（Classification）：
  → 離散的なカテゴリに分類
  例：
    - 二値分類：スパム/非スパム、陽性/陰性
    - 多値分類：犬/猫/鳥

  回帰（Regression）：
  → 連続的な数値を予測
  例：
    - 住宅価格の予測
    - 気温の予測
    - 売上金額の予測

教師なし学習の2種類：

  クラスタリング（Clustering）：
  → 類似データをグループ化
  例：顧客をセグメント分け、文書のトピック分類

  次元削減（Dimensionality Reduction）：
  → 高次元データを低次元に圧縮
  例：PCA（主成分分析）による可視化
```

### 3.2 MLワークフロー（ML Workflow）- 試験頻出！

```
MLモデルの開発ワークフロー（テスターが理解すべき全体像）：

  ┌──────────────────────────────────────────────────────────────┐
  │                   ML ワークフロー                              │
  │                                                              │
  │  問題定義                                                     │
  │      ↓                                                       │
  │  データ収集（Data Collection）                                 │
  │      ↓                                                       │
  │  データ準備（Data Preparation）← テスターが重要な役割          │
  │      ↓                                                       │
  │  特徴量エンジニアリング（Feature Engineering）                  │
  │      ↓                                                       │
  │  アルゴリズム選択（Algorithm Selection）                       │
  │      ↓                                                       │
  │  モデルトレーニング（Model Training）                           │
  │      ↓                                                       │
  │  モデル評価（Model Evaluation）← テスターが重要な役割           │
  │      ↓ (フィードバックループ)                                    │
  │  ハイパーパラメータ調整                                          │
  │      ↓                                                       │
  │  モデルデプロイ（Model Deployment）                             │
  │      ↓                                                       │
  │  モニタリング（Monitoring）← コンセプトドリフト監視               │
  └──────────────────────────────────────────────────────────────┘
```

### 3.5 過学習と未学習（Overfitting and Underfitting）- 試験頻出！

```
過学習（Overfitting）：
  → モデルがトレーニングデータに「過剰適合」している状態
  → 新しいデータへの汎化能力が低下
  
  特徴：
  ✗ トレーニングデータの精度：非常に高い（例：99%）
  ✗ バリデーションデータの精度：低い（例：65%）
  
  原因：
  → モデルが複雑すぎる
  → トレーニングデータが少なすぎる
  → ノイズまで学習してしまう

未学習（Underfitting）：
  → モデルがデータのパターンを十分に学習できていない状態
  → トレーニングデータでも低精度
  
  特徴：
  ✗ トレーニングデータの精度：低い（例：65%）
  ✗ バリデーションデータの精度：低い（例：63%）
  
  原因：
  → モデルが単純すぎる
  → トレーニングが不十分
  → 特徴量が不足

  理想的な状態：
  ✓ トレーニング精度：高い（例：92%）
  ✓ バリデーション精度：同等（例：90%）
  → 一般化誤差が小さい

視覚的なイメージ：
  Underfitting: ──── (単純な直線で複雑なパターンを表現できない)
  Just Right:  ～～～ (適切な曲線でパターンを捉えている)
  Overfitting: 〜〜〜〜〜 (全データ点を通る複雑すぎる曲線)
```

---

<a id="chapter-4"></a>

## 💾 Chapter 4: ML データ（ML Data）
>
> 230分 | AIテストの重要基盤

### 4.1 MLワークフローにおけるデータ準備（Data Preparation）

```
データ準備のステップ：

  ① データ収集
     → 様々なソースからデータを収集
     → バイアスが入らないよう多様なソースから収集

  ② データクリーニング
     → 欠損値の処理（削除・補完）
     → ノイズの除去
     → 重複データの削除
     → 外れ値の処理

  ③ データ変換
     → 正規化・標準化（スケールを揃える）
     → カテゴリ変数のエンコーディング
     → テキストのベクトル化

  ④ データ分割
     → トレーニング・バリデーション・テストに分割

テスターのデータ準備での役割：
  ✓ データ品質の確認（欠損・重複・外れ値）
  ✓ データの代表性の確認（現実を反映しているか）
  ✓ ラベルの正確性の確認（教師あり学習の場合）
  ✓ プライバシー・GDPR対応の確認
```

### 4.2 トレーニング・バリデーション・テストデータセット - 試験頻出！

```
3種類のデータセットの役割（試験頻出！）：

  ┌──────────────────────────────────────────────────────────────┐
  │         ML におけるデータセットの種類                           │
  ├────────────────┬────────────────────────────────────────────┤
  │ データセット    │ 用途                                        │
  ├────────────────┼────────────────────────────────────────────┤
  │ トレーニング    │ モデルの学習・パラメータ調整（最大・70-80%）   │
  │ (Training)     │                                            │
  ├────────────────┼────────────────────────────────────────────┤
  │ バリデーション  │ ハイパーパラメータ調整・モデル選択（10-15%） │
  │ (Validation)   │ 過学習の早期検出に使用                      │
  ├────────────────┼────────────────────────────────────────────┤
  │ テスト         │ 最終性能評価（一度だけ使用）（10-20%）       │
  │ (Test)         │ モデルの汎化性能を評価する                   │
  └────────────────┴────────────────────────────────────────────┘

  重要な原則：
  ✓ テストデータは学習に使用してはならない！
  ✓ バリデーションデータも最終評価には使わない！
  ✓ データ漏洩（Data Leakage）に注意！
  
  データ漏洩の例（よくある間違い）：
  ✗ テストデータの情報がトレーニングに混入
  ✗ 未来のデータを過去のデータで学習（タイムリーク）
  ✗ ラベル情報が特徴量に含まれている
```

### 4.3 データセット品質の問題（Dataset Quality Issues）

```
データセットの代表的な品質問題：

  ① クラス不均衡（Class Imbalance）：
     → 陽性例が1%、陰性例が99%のデータセット
     → モデルが「全て陰性」と予測するだけで99%精度になる
     → テスト：正解率だけでなく再現率・精度も確認する

  ② データノイズ（Data Noise）：
     → 測定誤差・ラベリングミスによるノイズ
     → モデルの学習を妨げる

  ③ データドリフト（Data Drift）：
     → 本番データの分布がトレーニングデータと異なる
     → 種類：コンセプトドリフト（後述）

  ④ データ漏洩（Data Leakage）：
     → テストデータの情報がトレーニングに混入
     → 過度に楽観的な評価結果をもたらす

  ⑤ 代表性の欠如（Lack of Representativeness）：
     → 特定のグループが過小代表（バイアスの原因）
     → 例：医療AIのトレーニングデータに高齢者が少ない
```

### 4.5 教師あり学習のデータラベリング（Data Labelling）

```
データラベリングのアプローチ：

  ① 人手によるラベリング（Manual Labeling）：
     → 精度高いが時間・コストが高い
     → 医療・法律などの専門知識が必要な場合

  ② クラウドソーシング（Crowdsourcing）：
     → Amazon Mechanical Turk などを使用
     → コストは低いが品質管理が重要

  ③ アノテーション管理ツール：
     → Label Studio、Scale AI、Labelbox など
     → アノテーションのQA管理機能を持つ

  ④ 弱教師あり学習（Weak Supervision）：
     → プログラム的にラベルを生成（完全ではないが効率的）

誤ラベルデータ（Mislabeled Data）の問題：
  ✗ モデルが誤ったパターンを学習する
  ✗ バイアスの原因になる
  
テスターのラベリングQA活動：
  ✓ ラベリング一致率（Inter-Annotator Agreement）の確認
  ✓ ランダムサンプリングによるラベルの正確性検証
  ✓ ラベリングガイドラインの品質確認
```

---

<a id="chapter-5"></a>

## 📊 Chapter 5: ML 機能パフォーマンスメトリクス（ML Functional Performance Metrics）
>
> 120分 | 最重要計算問題が頻出！

### 5.1 混同行列（Confusion Matrix）- 試験頻出！

```
混同行列（2値分類の例）：

                    【予測値】
                   陽性(Positive) | 陰性(Negative)
  【実際値】  陽性 |  TP（真陽性）  |  FN（偽陰性）
             陰性 |  FP（偽陽性）  |  TN（真陰性）

用語の定義：
  TP (True Positive):  実際に陽性 → 正しく陽性と予測
  TN (True Negative):  実際に陰性 → 正しく陰性と予測
  FP (False Positive): 実際は陰性 → 誤って陽性と予測（偽アラーム）
  FN (False Negative): 実際は陽性 → 誤って陰性と予測（見逃し）
```

**具体例（医療診断AI）：**

```python
# 混同行列の計算例（医療診断AIの場合）

# 100人の患者に対する癌診断AIの結果
confusion_matrix = {
    "TP": 90,   # 癌患者を正しく「癌あり」と診断
    "TN": 820,  # 健常者を正しく「癌なし」と診断
    "FP": 30,   # 健常者を誤って「癌あり」と診断（偽陽性: 過剰診断）
    "FN": 10,   # 癌患者を誤って「癌なし」と診断（偽陰性: 見逃し！危険）
}

TP = confusion_matrix["TP"]
TN = confusion_matrix["TN"]
FP = confusion_matrix["FP"]
FN = confusion_matrix["FN"]

# ===== 主要メトリクスの計算 =====

# 正解率（Accuracy）：全体のうち正解した割合
accuracy = (TP + TN) / (TP + TN + FP + FN)
print(f"正解率（Accuracy）：{accuracy:.2%}")  # → 94.7%

# 適合率（Precision）：陽性と予測した中で実際に陽性の割合
# = 「陽性と言った時にどれだけ正しかったか」
precision = TP / (TP + FP)
print(f"適合率（Precision）：{precision:.2%}")  # → 75.0%

# 再現率（Recall / Sensitivity）：実際の陽性をどれだけ発見できたか
# = 「実際の陽性をどれだけ見つけられたか」（見逃し率の逆）
recall = TP / (TP + FN)
print(f"再現率（Recall）：{recall:.2%}")  # → 90.0%

# F1スコア：適合率と再現率の調和平均
# = 適合率と再現率のバランスを表す
f1 = 2 * (precision * recall) / (precision + recall)
print(f"F1スコア：{f1:.2%}")  # → 81.8%

# 特異度（Specificity）：実際の陰性をどれだけ正しく陰性と判定できたか
specificity = TN / (TN + FP)
print(f"特異度（Specificity）：{specificity:.2%}")  # → 96.5%

print("\n🏥 医療診断での解釈：")
print(f"  癌患者の発見率（再現率）：{recall:.0%}（10人に1人を見逃した）")
print(f"  陽性判定の信頼性（適合率）：{precision:.0%}（陽性と言った4人に1人は健常者）")
print(f"  ⚠️ 癌診断では再現率（見逃しを減らす）が特に重要！")
```

### 5.2 追加のMLパフォーマンスメトリクス（試験頻出！）

```
タスク別のメトリクス：

分類（Classification）のメトリクス：
  ✓ 正解率（Accuracy）
  ✓ 適合率（Precision）
  ✓ 再現率（Recall / Sensitivity）
  ✓ F1スコア
  ✓ AUC-ROC（Area Under the ROC Curve）
  ✓ 混同行列全体

回帰（Regression）のメトリクス：
  ✓ MAE（Mean Absolute Error）：予測誤差の絶対値平均
  ✓ MSE（Mean Squared Error）：予測誤差の2乗平均（外れ値に敏感）
  ✓ RMSE（Root Mean Squared Error）：MSEの平方根
  ✓ R²（決定係数）：モデルの説明力

クラスタリング（Clustering）のメトリクス：
  ✓ シルエットスコア（Silhouette Score）
  ✓ エルボー法（Elbow Method）
  ✓ ダービン-ワトソン統計量
```

### 5.3 適合率と再現率のトレードオフ（試験頻出！）

```
精度（Precision）と再現率（Recall）はトレードオフの関係：

  しきい値を上げると：
    → 適合率 ↑ / 再現率 ↓
    → 「確実なものだけ陽性と言う」
    → 見逃しが増える

  しきい値を下げると：
    → 適合率 ↓ / 再現率 ↑
    → 「少しでも可能性があれば陽性と言う」
    → 偽アラームが増える

使い分けの判断：

  再現率を重視（Recall重視）：
  ✓ 癌診断（見逃しは命取り）
  ✓ セキュリティ侵害検出（見逃しはリスク大）
  ✓ 緊急事態の検出

  適合率を重視（Precision重視）：
  ✓ スパムフィルター（誤検知で正しいメールを削除される）
  ✓ 広告ターゲティング（無関係な広告を表示したくない）
  ✓ 詐欺検出（正常な取引を誤って止めたくない）

F1スコア：
  → 両方が重要な場合のバランス指標
  → 再現率と適合率の調和平均
```

### 5.4 MLパフォーマンスメトリクスの限界（Limitations）

```
メトリクスの落とし穴：

① 正解率（Accuracy）のパラドックス：
   → クラス不均衡データでは正解率が高くても意味がない
   例：99%が健常者のデータで「全員健常者」と予測 → 正解率99%だが役立たない

② 分布の違いを無視：
   → テストデータの分布が実際の使用環境と異なる場合、メトリクスが実態を反映しない

③ 外れ値の影響：
   → MSEは外れ値に敏感（1つの大きな誤差がMSEを大きく引き上げる）

④ メトリクスのみでは品質の全体像が掴めない：
   → バイアス、公平性、説明可能性などは従来のメトリクスでは測れない

テスターへの示唆：
  → 複数のメトリクスを組み合わせて使う
  → ユースケースに適切なメトリクスを選択する
  → メトリクスの限界を認識して解釈する
```

---

<a id="chapter-6"></a>

## 🧮 Chapter 6: MLニューラルネットワークとテスト（ML Neural Networks and Testing）
>
> 65分 | ディープラーニングの基礎とテスト

### 6.1 ニューラルネットワーク（Neural Networks）

```
ニューラルネットワークの構造：

  入力層       隠れ層        出力層
  ┌───┐     ┌───┐┌───┐   ┌───┐
  │x1 │────▶│   ││   │──▶│y1 │
  └───┘     │   ││   │   └───┘
  ┌───┐     │   ││   │   ┌───┐
  │x2 │────▶│   ││   │──▶│y2 │
  └───┘     └───┘└───┘   └───┘
  ┌───┐
  │x3 │
  └───┘

各コンポーネント：
  ノード（ニューロン）：入力を受け取り変換して出力する計算単位
  重み（Weights）：接続の強さ（学習で調整される）
  バイアス（Bias）：活性化のオフセット
  活性化関数：ReLU・Sigmoid・Tanh等（非線形変換）
  
ディープニューラルネットワーク（DNN）：
  → 隠れ層が多い（ディープ）ニューラルネットワーク
  → ディープラーニング（Deep Learning）の基盤
  
代表的なアーキテクチャ：
  CNN（Convolutional Neural Network）：画像認識
  RNN（Recurrent Neural Network）：時系列データ・テキスト
  Transformer：NLP・大規模言語モデルの基盤（GPT等）
```

### 6.2 ニューラルネットワークのカバレッジ計測（Coverage Measures）

```
ニューラルネットワーク専用のカバレッジ基準：

  ニューロンカバレッジ（Neuron Coverage）：
  → どれだけのニューロンが活性化されたか
  → カバレッジ = 活性化されたニューロン数 / 全ニューロン数

  レイヤーカバレッジ（Layer Coverage）：
  → 各層の出力の多様性を測定

  境界カバレッジ（Boundary Coverage）：
  → 各ニューロンの最大値・最小値の境界を超えた入力

従来のコードカバレッジとの違い：
  → 従来：if文・ループのカバレッジ（構造的カバレッジ）
  → NN：ニューロンの活性化カバレッジ（機能的カバレッジ）

テスターへの示唆：
  → ニューラルネットワークでは従来のコードカバレッジが意味をなさない
  → 入力データの多様性を確保して多くのニューロンを活性化する
  → ニューロンカバレッジを高めるためのテストケース設計
```

---

<a id="chapter-7"></a>

## 🔍 Chapter 7: AIベースシステムテスト概要（Testing AI-Based Systems Overview）
>
> 115分 | AIシステムのテストレベルと特殊課題

### 7.2 AIベースシステムのテストレベル（Test Levels for AI-Based Systems）- 試験頻出！

```
AI システムの6つのテストレベル：

  ① 入力データテスト（Input Data Testing）：
     → MLモデルへの入力データの品質確認
     → データの形式・範囲・欠損・偏りを検証

  ② MLモデルテスト（ML Model Testing）：
     → モデルの精度・過学習・バイアス・公平性を評価
     → 混同行列・精度・再現率などのメトリクス確認

  ③ コンポーネントテスト（Component Testing）：
     → AIコンポーネント単体の機能確認
     → 入出力インターフェースの検証

  ④ コンポーネント統合テスト（Component Integration Testing）：
     → AIコンポーネントと他コンポーネントの連携確認
     → インターフェース・データフローの検証

  ⑤ システムテスト（System Testing）：
     → システム全体の機能・性能・非機能特性の確認
     → E2Eシナリオでの動作確認

  ⑥ 受入テスト（Acceptance Testing）：
     → ユーザー・ステークホルダーによる承認
     → ビジネス要件・倫理要件への準拠確認
```

### 7.3 AIシステムテスト用テストデータ

```
AIシステムのテスト用データの特殊性：

通常のテストデータ：
  → 手動で作成・管理可能
  → 量が限られていても問題ない

AIシステムのテストデータ：
  → 大量のデータが必要（数万〜数百万件）
  → データの多様性・代表性が重要
  → バイアスのないデータセットの確保が難しい

テストデータの要件：
  ✓ 本番環境の分布を反映している（代表性）
  ✓ エッジケースを含む（境界値・異常値）
  ✓ 多様な人口統計グループを含む（公平性）
  ✓ 敵対的なサンプルを含む（セキュリティ）
  ✓ プライバシー保護が施されている（GDPR対応）
```

### 7.4 AIシステムにおけるオートメーションバイアス（Automation Bias）

```
オートメーションバイアス（Automation Bias）とは：
  → 人間がAIの出力を過度に信頼・依存する傾向
  → AIが間違っているときでも人間が批判的判断を失う

例：
  医師がAI診断ツールの出力を過信して
  自分の臨床的判断より AI の診断を優先してしまう

テストのポイント：
  ✓ AIシステムが誤った結果を出したとき
    ユーザーが正しく気づけるかを確認
  ✓ AIの信頼度（Confidence Score）の表示が
    ユーザーの判断を適切にサポートするか確認
  ✓ ヒューマンオーバーライド機能の有効性確認
```

### 7.6 コンセプトドリフト（Concept Drift）

```
コンセプトドリフト（Concept Drift）とは：
  → 実際のデータの統計的特性が時間とともに変化する現象
  → 本番環境でのモデルの性能低下を引き起こす

種類：
  急激なドリフト（Sudden Drift）：
    → 一度に大きく変化
    例：COVID-19 パンデミックによる医療データの急変

  漸進的なドリフト（Gradual Drift）：
    → ゆっくりと変化
    例：消費者嗜好の年単位での変化

  繰り返しドリフト（Recurring Drift）：
    → 季節変動など
    例：小売の購買パターンの季節変動

テスト対策：
  ✓ 本番データの定期的なモニタリング
  ✓ ドリフト検出アルゴリズムの導入
  ✓ 定期的なモデルの再トレーニング・評価
  ✓ ドリフト発生時の再検証トリガーの設定
```

---

<a id="chapter-8"></a>

## 🛡️ Chapter 8: AI固有の品質特性のテスト
>
> 150分 | AI特有のテスト課題

### 8.1 自己学習システムのテストの課題

```
自己学習システムのテストが難しい理由：

  ① 非決定論的動作（Non-determinism）：
     → 同じ入力でも結果が変わる可能性
     → 従来の「期待値と比較」が難しい

  ② 継続的な変化：
     → モデルが学習を続けて動作が変わる
     → テストが「通った」状態が維持されない

  ③ テストオラクルの問題（Oracle Problem）：
     → 「正しい答え」を定義することが困難
     → 複雑な判断（自然言語理解等）では人間でも答えが分かれる

  ④ 説明可能性の欠如：
     → なぜその結果を出したかが分からない
     → 欠陥の原因特定が困難

対策技術：
  → メタモルフィックテスト（後述）
  → バック・ツー・バックテスト
  → A/Bテスト
  → プロパティベーステスト
```

### 8.3 アルゴリズムバイアス・サンプルバイアス・不適切バイアスのテスト

```python
# バイアス検出テストの実践例

import numpy as np
from typing import List, Dict

class AIBiasTester:
    """AI モデルのバイアスを検出するテストクラス"""
    
    def test_demographic_parity(
        self, 
        model, 
        test_data: List[Dict]
    ) -> Dict:
        """
        人口統計的平等（Demographic Parity）のテスト：
        異なるグループで陽性予測率が同等か確認
        """
        positive_rate_by_group = {}
        
        for sample in test_data:
            group = sample["protected_attribute"]  # 例：性別、年齢、人種
            prediction = model.predict(sample["features"])
            
            if group not in positive_rate_by_group:
                positive_rate_by_group[group] = {"positive": 0, "total": 0}
            
            positive_rate_by_group[group]["total"] += 1
            if prediction == 1:  # 陽性予測
                positive_rate_by_group[group]["positive"] += 1
        
        # 各グループの陽性予測率
        rates = {g: d["positive"]/d["total"] 
                 for g, d in positive_rate_by_group.items()}
        
        max_rate = max(rates.values())
        min_rate = min(rates.values())
        disparity_ratio = min_rate / max_rate if max_rate > 0 else 0
        
        return {
            "positive_rates_by_group": rates,
            "disparity_ratio": disparity_ratio,
            "passes_threshold": disparity_ratio >= 0.8,  # 80%ルール
            "interpretation": (
                "✅ 公平（80%ルール通過）" if disparity_ratio >= 0.8 
                else "❌ バイアス検出（80%ルール違反）"
            )
        }
    
    def test_equal_opportunity(
        self,
        model,
        test_data: List[Dict]
    ) -> Dict:
        """
        機会の平等（Equal Opportunity）のテスト：
        実際に陽性のサンプルで、グループ間の再現率が同等か確認
        """
        recall_by_group = {}
        
        for sample in test_data:
            if sample["label"] != 1:  # 陽性サンプルのみを対象
                continue
            
            group = sample["protected_attribute"]
            prediction = model.predict(sample["features"])
            
            if group not in recall_by_group:
                recall_by_group[group] = {"tp": 0, "total": 0}
            
            recall_by_group[group]["total"] += 1
            if prediction == 1:
                recall_by_group[group]["tp"] += 1
        
        recalls = {g: d["tp"]/d["total"] 
                   for g, d in recall_by_group.items() 
                   if d["total"] > 0}
        
        return {
            "recall_by_group": recalls,
            "max_gap": max(recalls.values()) - min(recalls.values()),
            "is_fair": max(recalls.values()) - min(recalls.values()) < 0.1
        }
```

### 8.4 確率論的・非決定論的AIシステムのテストの課題

```
非決定論的AIのテストアプローチ：

問題：「正解」を1つに決められない
  例：画像が「犬」か「狼」か（曖昧な場合）
  例：感情分析で「ポジティブ」か「ネガティブ」か

解決策：

  ① 確率的テスト（Statistical Testing）：
     → 多数回実行して統計的な分布を確認
     → 例：100回実行して精度の信頼区間を確認

  ② プロパティベーステスト（Property-Based Testing）：
     → 特定の値ではなく「性質」を検証
     → 例：「入力がより大きければ出力も大きいはず」

  ③ メタモルフィックテスト（後述）：
     → 入力の関係と出力の関係を検証
     → 例：「同じ文章で性別だけ変えても感情スコアは変わらないはず」

  ④ 受け入れ範囲の設定（Acceptance Range）：
     → 単一の正解値ではなく許容範囲を定義
     → 例：「精度は90%±5%の範囲内であること」
```

### 8.7 AIベースシステムのテストオラクル（Test Oracles）

```
テストオラクルとは：
  → 「テスト結果が正しいかどうか」を判断する情報源

AIシステムでのオラクル問題：
  → 人間でも正解が判断できない場合がある
  → 例：自然言語翻訳の「正しい翻訳」は何か

AIシステムで使えるオラクルの種類：

  ① 専門家オラクル（Human Expert Oracle）：
     → ドメイン専門家が正解を判断
     → 高精度だが時間・コストが高い

  ② 複数モデルの多数決（Ensemble Oracle）：
     → 複数のモデルの予測の多数決を正解とする
     → バック・ツー・バックテストの基礎

  ③ 統計的オラクル（Statistical Oracle）：
     → 統計的な閾値や分布を正解の基準とする
     → 例：「信頼スコアが90%以上の予測は正解とみなす」

  ④ プロパティオラクル（Property Oracle）：
     → 特定のプロパティ（性質）を持つか確認
     → メタモルフィックテストで使用
```

---

<a id="chapter-9"></a>

## ⚔️ Chapter 9: AIベースシステムのテスト手法と技法
>
> 245分 | 最重要章！AI固有のテスト技法

### 9.1 敵対的攻撃とデータポイズニング（Adversarial Attacks and Data Poisoning）

```
敵対的攻撃（Adversarial Attacks）とは：
  → AIシステムを騙すために意図的に設計された入力
  → 人間には知覚できない微小な変更でAIが誤分類する

代表的な敵対的攻撃：

  FGSM（Fast Gradient Sign Method）：
  → 入力の勾配方向にノイズを加えて誤分類させる
  
  PGD（Projected Gradient Descent）：
  → より強力な反復攻撃

  例：
  本物の画像（パンダ）に微小ノイズを加える
  → 人間には同じ画像に見える
  → AIが「テナガザル」と誤分類する

テスト上の意味：
  ✓ AIシステムの堅牢性（Robustness）のテスト
  ✓ セキュリティ重要システムでは必須のテスト
  ✓ 自動運転・顔認証・マルウェア検出等で重要
```

**データポイズニング（Data Poisoning）：**

```python
# データポイズニングのテスト検出例

def detect_data_poisoning_via_eda(training_data: list) -> dict:
    """
    EDA（探索的データ分析）を使ってデータポイズニングを検出する
    シラバス Section 9.1.2 より：
    「ポイズニングされたデータは外れ値として現れる可能性がある」
    """
    
    import statistics
    
    # 特徴量の統計的分析
    values = [sample["key_feature"] for sample in training_data]
    mean = statistics.mean(values)
    stdev = statistics.stdev(values)
    
    # 外れ値の検出（3σ法）
    outliers = []
    for i, sample in enumerate(training_data):
        z_score = abs(sample["key_feature"] - mean) / stdev
        if z_score > 3:  # 平均から3標準偏差以上離れている
            outliers.append({
                "index": i,
                "value": sample["key_feature"],
                "z_score": z_score,
                "label": sample["label"]
            })
    
    return {
        "total_samples": len(training_data),
        "outliers_found": len(outliers),
        "outlier_rate": len(outliers) / len(training_data),
        "suspicious_samples": outliers,
        "poisoning_suspected": len(outliers) > len(training_data) * 0.02  # 2%超
    }
```

### 9.3 バック・ツー・バックテスト（Back-to-Back Testing）

```
バック・ツー・バックテストとは：
  → 2つのバージョンや2つのモデルを同じ入力で実行し、
    出力の差異を比較するテスト技法

使用場面：
  ✓ AIシステムが従来の従来型システムを置き換える場合
  ✓ モデルをバージョンアップする際の回帰テスト
  ✓ テストオラクルがない場合の比較テスト

実施方法：
  入力データ → [AIシステムv1] → 結果1
                                  ↓ 比較
  入力データ → [AIシステムv2] → 結果2
  
  差異がある場合：どちらが正しいかを専門家が判断

メリット：
  ✓ テストオラクル問題を回避できる
  ✓ 大量データでの自動比較が可能
  ✓ 回帰テストに特に有効
```

### 9.4 A/Bテスト（A/B Testing）

```
A/Bテストとは：
  → 2つのバージョン（A版とB版）を実際のユーザーに同時に提供し、
    パフォーマンスを比較するテスト技法

AIシステムでの使用例：
  → 新しい推薦アルゴリズムのテスト
  → ランキング変更の効果測定
  → 価格予測モデルの比較

実施方法：
  ① ユーザーをランダムにA群とB群に分ける
  ② A群には現行版、B群には新バージョンを提供
  ③ 一定期間後、KPI（クリック率・コンバージョン等）を比較
  ④ 統計的有意差を確認してから本番展開

重要な注意点：
  ✓ サンプルサイズの事前計算（統計的検出力）
  ✓ 適切な期間の設定
  ✓ 複数の同時実験による干渉に注意
  ✓ ネットワーク効果がある場合の対応
```

### 9.5 メタモルフィックテスト（Metamorphic Testing）- 試験最頻出！

```
メタモルフィックテスト（MT）とは：
  → 入力の変化と出力の期待する変化の「関係（メタモルフィック関係）」を
    利用してテストオラクル問題を解決するテスト技法
  → AIシステムの非決定論的な性質に対応

テストオラクル問題を解決する仕組み：
  従来のテスト：入力 → 期待値と比較（期待値が分からない場合は困る）
  メタモルフィックテスト：入力の変換 → 出力の変換が期待通りか確認
```

**メタモルフィックテストの具体例：**

```python
# メタモルフィックテストの実装例

def metamorphic_test_for_sentiment_analysis(sentiment_model, base_text: str) -> dict:
    """
    感情分析モデルのメタモルフィックテスト
    
    メタモルフィック関係（MR）：
    MR1: 性別中立化：「彼は」→「彼女は」に変えてもセンチメントは変わらないはず
    MR2: 同義語置換：意味が同じ同義語に変えてもセンチメントは変わらないはず
    MR3: 否定：「良い」→「悪くない」に変えてもセンチメントは概ね保持されるはず
    """
    
    original_sentiment = sentiment_model.predict(base_text)
    original_score = sentiment_model.get_score(base_text)
    
    results = {}
    
    # MR1: 性別中立化のテスト（バイアス検出）
    gender_neutral_text = base_text.replace("彼は", "彼女は")
    if gender_neutral_text != base_text:
        gender_neutral_score = sentiment_model.get_score(gender_neutral_text)
        score_difference = abs(original_score - gender_neutral_score)
        results["MR1_gender_neutrality"] = {
            "original_text": base_text,
            "modified_text": gender_neutral_text,
            "original_score": original_score,
            "modified_score": gender_neutral_score,
            "difference": score_difference,
            "passes": score_difference < 0.05  # 5%以上の変化はバイアスの可能性
        }
    
    # MR2: 入力の順序変更（交換律）
    # 例：ドキュメント分類で「ABC ABC」と「ABC ABC」（同じ内容）は同じ結果になるはず
    doubled_text = base_text + " " + base_text
    doubled_score = sentiment_model.get_score(doubled_text)
    results["MR2_doubling"] = {
        "passes": original_sentiment == sentiment_model.predict(doubled_text),
        "note": "文章を2倍にしても感情クラスは変わらないはず"
    }
    
    return results


def metamorphic_test_for_image_classifier(model, base_image) -> dict:
    """
    画像分類モデルのメタモルフィックテスト
    
    メタモルフィック関係：
    MR1: 水平反転：猫の画像を左右反転しても「猫」のまま
    MR2: 明度変更：若干明るく/暗くしても分類は変わらないはず
    MR3: 小さな回転：15度以内の回転でも分類は変わらないはず
    """
    
    import numpy as np
    
    original_class = model.predict(base_image)
    
    results = {}
    
    # MR1: 水平反転
    flipped_image = np.fliplr(base_image)
    flipped_class = model.predict(flipped_image)
    results["MR1_horizontal_flip"] = {
        "passes": original_class == flipped_class,
        "original_class": original_class,
        "flipped_class": flipped_class
    }
    
    # MR2: 明度変更（10%増加）
    brightened_image = np.clip(base_image * 1.1, 0, 255).astype(np.uint8)
    brightened_class = model.predict(brightened_image)
    results["MR2_brightness_increase"] = {
        "passes": original_class == brightened_class,
        "original_class": original_class,
        "brightened_class": brightened_class
    }
    
    return results

# 典型的なメタモルフィック関係（MR）のパターン：
metamorphic_relations_examples = {
    "加法的MR（Additive MR）": "入力を2倍にすると出力も2倍になるはず（回帰の場合）",
    "順序MR（Order MR）": "入力Aが入力Bより大きければ、出力Aも出力Bより大きいはず",
    "同値MR（Equivalence MR）": "同義語に変換しても出力は変わらないはず",
    "対称MR（Symmetry MR）": "入力を対称変換しても出力は変わらないはず",
    "変換不変MR（Transformation Invariance）": "画像を回転/反転しても分類は変わらないはず",
}
```

### 9.2 ペアワイズテスト（Pairwise Testing）

```
AIシステムへのペアワイズテストの適用：

ペアワイズテスト（組み合わせテスト）：
  → 多数のパラメータ・入力がある場合に、
    全ての2変数の組み合わせをカバーする最小のテストセットを生成

AIシステムでの使用例：
  → ML モデルのハイパーパラメータの組み合わせテスト
  → AI システムの設定値の組み合わせテスト
  → 入力特徴量の組み合わせテスト

ペアワイズテストのメリット：
  ✓ 全組み合わせ（2^n）に比べて劇的にテスト数を削減
  ✓ 多くの欠陥は2変数の組み合わせから発生する
```

### 9.6 経験ベーステスト（Experience-Based Testing）

```
AIシステムへの探索的テストの適用：

AIシステムでの探索的テストの特徴：
  → 予め明確なテスト手順はなく、テスターの経験・知識を活用
  → AI特有の弱点（バイアス・コーナーケース等）を探索

探索的データ分析（EDA: Exploratory Data Analysis）との組み合わせ：
  → データを可視化して異常なパターンを発見
  → 外れ値・クラスタ・相関を分析してデータ品質問題を特定

AIシステムでの探索的テストの例：
  ✓ 境界ケースの探索（「ギリギリ正常」と「ギリギリ異常」の境界）
  ✓ 特定のサブグループ（少数民族・障害者等）での動作確認
  ✓ 文化的・言語的多様性のある入力でのテスト
  ✓ 予期しない入力形式（特殊文字・絵文字等）での動作確認
```

### 9.7 AIシステムのテスト技法の選択指針

```
テスト技法の選択マトリクス：

┌─────────────────────────────────────────────────────────────────┐
│  状況・目的                          │  推奨技法               │
├──────────────────────────────────────┼────────────────────────┤
│ テストオラクルがない                  │ メタモルフィックテスト   │
│ 新旧モデルの比較                     │ バック・ツー・バックテスト│
│ 本番環境でのA/Bテスト                │ A/Bテスト               │
│ バイアス・公平性の確認               │ バイアステスト           │
│ セキュリティ・堅牢性の確認           │ 敵対的テスト             │
│ 多数パラメータの組み合わせ           │ ペアワイズテスト         │
│ 予期しない動作の探索                 │ 探索的テスト+EDA        │
│ データ品質の確認                     │ EDA・統計分析           │
└─────────────────────────────────────────────────────────────────┘
```

---

<a id="chapter-10"></a>

## 🏗️ Chapter 10: AIベースシステムのテスト環境（Test Environments）
>
> 30分 | AI特有のインフラ要件

### 10.1 AIシステムのテスト環境の特殊要件

```
従来のテスト環境との違い：

ハードウェア要件：
  ✓ GPU（大規模なML学習に必要）
  ✓ 大容量メモリ（大規模データセット処理）
  ✓ 高速ストレージ（大量データの読み書き）
  ✓ 高帯域ネットワーク（分散学習）

データ要件：
  ✓ 大量のテストデータセット
  ✓ 多様なシナリオのデータ
  ✓ プライバシー保護されたデータ
  ✓ バージョン管理されたデータセット

ソフトウェア要件：
  ✓ ML フレームワーク（TensorFlow/PyTorch等）
  ✓ データバージョン管理（DVC等）
  ✓ 実験追跡ツール（MLflow/W&B等）
  ✓ モデルレジストリ
```

### 10.2 仮想テスト環境（Virtual Test Environments）

```
AIシステムのための仮想テスト環境の活用：

シミュレーション環境のメリット：
  ✓ 実際のリスクなしにエッジケースをテスト
    例：自動運転での危険な交通シナリオ
  ✓ 大量のシナリオを自動生成・実行
  ✓ 再現性の高いテストが可能
  ✓ コストと安全性の両立

代表的な活用例：
  自動運転：CARLA、AirSim等のシミュレーター
  ロボティクス：ROS（Robot Operating System）
  ゲームAI：OpenAI Gym、Unity ML-Agents
  医療AI：合成データ生成ツール

仮想環境の注意点：
  ✗ シミュレーションと現実のギャップ（Reality Gap）
  ✗ 全ての現実シナリオを再現できるとは限らない
  ✓ 仮想環境でのテスト + 実世界での追加検証が推奨
```

---

<a id="chapter-11"></a>

## 🤖 Chapter 11: テストへのAI活用（Using AI for Testing）
>
> 195分 | AIがテスト活動をどう変えるか

### 11.1 テストのためのAI技術

```
テスト活動にAIを活用できる領域：

  ① 欠陥レポートの分析（Defect Report Analysis）
  ② テストケースの生成（Test Case Generation）
  ③ 回帰テストスイートの最適化（Regression Test Suite Optimization）
  ④ 欠陥予測（Defect Prediction）
  ⑤ UIテスト（UI Testing）

AIが「使いにくい」テスト活動：
  ✗ 創造的な探索的テスト（経験・直感が必要）
  ✗ ユーザビリティテスト（人間の感覚が必要）
  ✗ 倫理的判断が必要なテスト
  ✗ 新しい未知のシナリオのテスト設計
```

### 11.2 欠陥レポートの分析（Using AI to Analyze Reported Defects）

```
AIによる欠陥分析の活用例：

  ① 欠陥の重複検出（Duplicate Detection）：
     → NLP（自然言語処理）で既存の欠陥と類似の欠陥を自動検出
     → テスター・開発者の重複作業を削減

  ② 欠陥の分類（Classification）：
     → 欠陥の種類・重要度を自動分類
     → バグの担当者への自動割り当て

  ③ 欠陥の根本原因分析：
     → 過去の欠陥パターンから原因を推定
     → 修正にかかる時間の予測

テスターへの影響：
  ✓ 重複バグの報告が減る（AI が事前検出）
  ✓ バグ分類の自動化で報告が早くなる
  ✓ 過去の欠陥パターンから学べる
```

### 11.3 AIによるテストケース生成（Using AI for Test Case Generation）

```python
# AIによるテストケース生成の概念的な実装例

def ai_generate_test_cases_from_requirements(requirement: str) -> list:
    """
    要件テキストからAIがテストケースを自動生成する（概念的な例）
    
    実際のツール例：
    - GitHub Copilot（コードからテスト生成）
    - Test.ai（UIテストの自動生成）
    - Functionize（AI駆動テスト自動化）
    - Applitools（視覚的AIテスト）
    """
    
    # 実際のAIベーステストケース生成の流れ：
    # 1. 要件テキストを自然言語処理で解析
    # 2. エンティティ・アクション・条件を抽出
    # 3. 正常系・異常系・境界値のテストケースを生成
    
    generated_test_cases = [
        {
            "id": "TC-001",
            "type": "正常系",
            "description": "有効な入力での正常動作確認",
            "precondition": "システムが正常稼働中",
            "steps": ["手順1", "手順2"],
            "expected_result": "期待結果",
            "generated_by": "AI（GPT-4/Copilot等）",
        },
        # AI が生成した追加テストケース...
    ]
    
    return generated_test_cases

# AIによるテスト生成のメリット・デメリット
ai_test_generation = {
    "メリット": [
        "大量のテストケースを素早く生成",
        "ルーティンなテストケース作成の自動化",
        "一貫性のあるテストケース形式",
        "要件から見落とされがちなケースの提案",
    ],
    "デメリット/注意点": [
        "生成されたテストケースの人間によるレビューが必要",
        "AIが見落とすエッジケースがある",
        "要件が曖昧だと品質が低下",
        "テストケースの適切性・完全性は人間が判断すべき",
    ]
}
```

### 11.4 AIによる回帰テストスイートの最適化（Using AI for the Optimization of Regression Test Suites）

```
AIによる回帰テスト最適化の技法：

  ① テスト優先順位付け（Test Prioritization）：
     → 変更の影響を受けやすいテストを優先実行
     → 機械学習で過去のバグパターンから学習
     → CI/CDパイプラインの高速化に有効

  ② テスト選択（Test Selection）：
     → 変更に関連するテストのみを実行
     → コードの変更分析 + AI で関連テストを特定

  ③ テストスイートの縮小（Test Suite Reduction）：
     → 冗長なテストケースを特定して削除
     → カバレッジを維持しながらテスト数を削減

  効果：
  ✓ テスト実行時間の短縮（最大50-80%削減）
  ✓ CI/CDパイプラインの高速化
  ✓ フィードバックループの改善
  ✓ クリティカルな欠陥の早期発見
```

### 11.5 AIによる欠陥予測（Using AI for Defect Prediction）

```python
# 欠陥予測モデルの概念的な実装例

from dataclasses import dataclass
from typing import List

@dataclass
class CodeMetrics:
    """コードメトリクス（欠陥予測の特徴量）"""
    file_name: str
    cyclomatic_complexity: int    # 循環的複雑度
    lines_of_code: int            # コード行数
    number_of_developers: int     # 変更した開発者数
    recent_changes_count: int     # 直近30日の変更回数
    historical_defects: int       # 過去の欠陥数
    code_churn: float             # コードの変更率

def build_defect_prediction_model(historical_data: List[CodeMetrics]) -> dict:
    """
    過去のコードメトリクスと欠陥データから欠陥予測モデルを構築する
    
    よく使われる機械学習アルゴリズム：
    - ロジスティック回帰
    - ランダムフォレスト
    - ニューラルネットワーク
    """
    
    # 特徴量の重要度（欠陥予測に有効な指標）
    feature_importance = {
        "循環的複雑度": 0.28,      # 高いほど欠陥が発生しやすい
        "コード変更率": 0.25,      # 頻繁に変更されるファイルは危険
        "開発者数": 0.20,          # 多くの人が触るほど混乱が起きやすい
        "直近変更回数": 0.15,      # 最近よく変更されたファイルは不安定
        "過去の欠陥数": 0.12,      # 過去に欠陥が多いファイルは要注意
    }
    
    return {
        "model_type": "Random Forest",
        "accuracy": 0.87,
        "precision": 0.82,
        "recall": 0.79,
        "feature_importance": feature_importance,
        "recommended_action": "上位20%の高リスクファイルを優先テスト"
    }

# 欠陥予測の活用：
defect_prediction_use_cases = {
    "テスト優先順位付け": "リスクの高いモジュールのテストを優先する",
    "コードレビュー": "欠陥予測スコアの高いファイルを重点的にレビュー",
    "テストリソース配分": "高リスク領域にテスト工数を集中させる",
    "早期警告": "リリース前に欠陥リスクの高い箇所を開発者に警告",
}
```

### 11.6 AIによるUIテスト（Using AI for Testing User Interfaces）

```
AIによるGUIテストの2つのアプローチ：

  ① AIを通してGUIをテストする（Using AI to Test THROUGH the GUI）：
     → AI が操作パスを自動生成・実行
     → Visual AI でUIの変更を自動検出（Applitools等）
     → セルフヒーリングテスト（ロケーターが壊れても自動修復）

  ② AIがGUI自体をテストする（Using AI to Test THE GUI）：
     → 機械学習でUI要素を認識・分類
     → ユーザビリティの問題を自動検出
     → アクセシビリティ要件への準拠確認

代表的なAI UIテストツール：
  ✓ Applitools：視覚的AI回帰テスト
  ✓ Testim：AIによるテスト安定化
  ✓ Mabl：インテリジェントテスト自動化
  ✓ Test.ai：AIによるモバイルUIテスト
  ✓ Functionize：NLPによるテスト作成

AIをUIテストに使う際の注意点：
  ✗ AIが「問題なし」と判断しても人間の確認が必要
  ✗ 創造性・主観的判断は人間のほうが優れる
  ✗ AIツールの過信（オートメーションバイアス）に注意
```

---

<a id="exam-tips"></a>

## 📝 試験対策・サンプル問題

### 試験概要の再確認

```
CT-AI v1.0 試験仕様：
  問題数:    40問
  合格点:    31点（47点満点）
  試験時間:  60分 / 非英語話者: +25% = 75分
  
  配点：
    K1問題: 1点（約6問）
    K2問題: 1点（約15問）
    K3問題: 2点（約12問）
    K4問題: 2点（一部）
  
  合格のコツ：
  ① 混同行列の計算（精度・再現率・F1）は必ず計算できるようにする
  ② メタモルフィックテストは最頻出 - 概念と事例を理解する
  ③ AI/MLの用語を正確に理解する（バイアスの種類・ドリフト等）
  ④ テストオラクル問題とその解決策を理解する
```

### 章別重要度と出題数（推定）

| 章 | テーマ | 出題比重 | 重要度 |
|---|--------|---------|-------|
| 1 | AIの概要 | ~6問 | ★★★ |
| 2 | AI品質特性 | ~6問 | ★★★★ |
| 3 | ML概要 | ~5問 | ★★★★ |
| **4** | **MLデータ** | **~6問** | **★★★★★** |
| **5** | **MLパフォーマンスメトリクス** | **~6問** | **★★★★★** |
| 6 | ニューラルネットワーク | ~3問 | ★★★ |
| 7 | AIテスト概要 | ~4問 | ★★★★ |
| 8 | AI品質特性のテスト | ~5問 | ★★★★ |
| **9** | **テスト手法と技法** | **~8問** | **★★★★★** |
| 10 | テスト環境 | ~2問 | ★★ |
| **11** | **テストへのAI活用** | **~5問** | **★★★★** |

### 必ず覚える重要概念

```
✅ AIの3分類（Narrow / General / Super AI）と特徴

✅ 混同行列の4要素（TP/TN/FP/FN）と計算式：
   精度（Accuracy） = (TP+TN) / (TP+TN+FP+FN)
   適合率（Precision） = TP / (TP+FP)
   再現率（Recall） = TP / (TP+FN)
   F1スコア = 2 × (P×R) / (P+R)

✅ 教師あり・教師なし・強化学習の違いと用途

✅ データセットの3種類：トレーニング / バリデーション / テスト

✅ 過学習（Overfitting）vs 未学習（Underfitting）の見分け方

✅ バイアスの種類（アルゴリズム / サンプル / 不適切バイアス）

✅ 透明性 / 解釈可能性 / 説明可能性（XAI）の違い

✅ コンセプトドリフト（Concept Drift）の定義と種類

✅ AIのテストオラクル問題とメタモルフィックテストによる解決

✅ メタモルフィックテストの定義とメタモルフィック関係（MR）の例

✅ バック・ツー・バックテスト vs A/Bテストの違いと用途

✅ 敵対的攻撃（Adversarial Attack）とデータポイズニングの定義

✅ AIでのテスト優先順位付け・欠陥予測の活用

✅ CT-AI vs CT-GenAI の役割の違い
```

### サンプル問題と解説

---

**問1（K2 / Chapter 1 AIの基礎）**

「AI効果（AI Effect）」の定義として最も適切なものはどれか？

A) AIが人間の能力を超えること  
B) AIが達成したことは「真のAI」ではないと思われる社会的現象  
C) AIシステムが実世界に与える経済的影響  
D) AIが従来型システムより高い性能を発揮すること  

<details>
<summary>📌 解答を見る</summary>

**正解: B**

AI効果とは：AIが何かを達成すると、それはもはや「本物のAI」ではないと思われる現象。チェスコンピューターが人間を倒した後、「ブルートフォースなので真のAIではない」と言われたことが典型例。AIの定義は社会の認識とともに変化する。

</details>

---

**問2（K3 / Chapter 5 混同行列）**

癌診断AIをテストした結果、以下の混同行列が得られた：
- TP = 80（癌患者を正しく「癌あり」と診断）
- TN = 900（健常者を正しく「癌なし」と診断）
- FP = 20（健常者を誤って「癌あり」と診断）
- FN = 20（癌患者を誤って「癌なし」と診断）

このモデルの再現率（Recall）として正しいものはどれか？

A) 80%  
B) 88.9%  
C) 90%  
D) 94.7%  

<details>
<summary>📌 解答を見る</summary>

**正解: A（80%）**

再現率（Recall）= TP / (TP + FN) = 80 / (80 + 20) = 80/100 = **80%**

他の選択肢：
- 88.9%：適合率（Precision）= 80/(80+20) = 80% ではなく 80/(80+20)... 計算すると 80%
- 実際: 適合率 = TP/(TP+FP) = 80/100 = 80%
- 正解率（Accuracy）= (80+900)/(80+900+20+20) = 980/1020 ≈ 96.1%

医療診断では再現率（見逃しを減らす）が重要！

</details>

---

**問3（K2 / Chapter 3 ML概要）**

顧客を購買パターンで自動的にグループ分けしたい。どのMLの形態が最も適切か？

A) 教師あり学習（分類）  
B) 教師あり学習（回帰）  
C) 教師なし学習（クラスタリング）  
D) 強化学習  

<details>
<summary>📌 解答を見る</summary>

**正解: C（教師なし学習：クラスタリング）**

理由：
- グループ分けの「正解ラベル」がない場合はクラスタリング
- 教師あり学習（A・B）はラベル付きデータが必要
- 強化学習（D）は報酬による行動最適化（グループ分けには不適）
- クラスタリングは未知のパターンを発見するのに最適

</details>

---

**問4（K3 / Chapter 9 テスト技法）**

感情分析AIをテストしている。「このレストランは素晴らしい」と「このレストランは最高だ」（同義語に変換）は同じ感情スコアになるはずだという考えに基づいてテストを設計している。このテスト技法は何か？

A) A/Bテスト  
B) バック・ツー・バックテスト  
C) メタモルフィックテスト  
D) 敵対的テスト  

<details>
<summary>📌 解答を見る</summary>

**正解: C（メタモルフィックテスト）**

メタモルフィックテストの定義：
- 入力の変換と出力の期待する変化の「関係（メタモルフィック関係）」を利用
- 「同義語に変換しても感情スコアは変わらないはず」= メタモルフィック関係
- テストオラクル問題（正確な期待値が分からない）を解決する

A) A/Bテスト：2バージョンを比較する本番テスト
B) バック・ツー・バックテスト：2つのシステムを比較
D) 敵対的テスト：システムを騙す入力を使う

</details>

---

**問5（K2 / Chapter 7 AIテスト概要）**

MLシステムのテストで「コンセプトドリフト」に対処するための最も適切なアプローチはどれか？

A) トレーニングデータの量を増やす  
B) モデルのアーキテクチャをより複雑にする  
C) 本番環境でのデータ分布を定期的にモニタリングしてモデルを再トレーニングする  
D) テストデータの量を増やす  

<details>
<summary>📌 解答を見る</summary>

**正解: C**

コンセプトドリフトの対処法：
- コンセプトドリフト = 実際のデータ分布が時間とともに変化する現象
- 対処法：本番データの継続的なモニタリング + ドリフト検出 + 定期的な再トレーニング

A) トレーニングデータ増加は初期学習には有効だが、ドリフトには対応できない
B) モデルの複雑化は過学習を引き起こす可能性がある
D) テストデータの増加はドリフト自体を解決しない

</details>

---

**問6（K2 / Chapter 11 AIテスト活用）**

AIをテストプロセスに使用する場合に特に有効な活動として最も適切なものはどれか？

A) ユーザビリティテストの評価  
B) 倫理的判断が必要なテストケースの設計  
C) 大量の欠陥レポートからの重複検出と分類  
D) 完全に新しい機能の探索的テスト設計  

<details>
<summary>📌 解答を見る</summary>

**正解: C**

AIによるテストで特に有効な活動：
- **C) 欠陥レポートの重複検出・分類** → NLPを使った大量テキストの処理が得意

AIが苦手な活動：
- A) ユーザビリティテストの評価 → 人間の主観・感覚が必要
- B) 倫理的判断 → 人間の価値観・判断が必要
- D) 新機能の探索的テスト → 創造性・直感が必要

</details>

---

### 試験直前チェックリスト

```
✅ Chapter 1-2 AI基礎・品質特性:

□ AI効果（AI Effect）の定義を説明できる
□ 狭義AI・汎用AI・超AIの違いを説明できる
□ AIベースシステムと従来型システムの5つの違いを説明できる
□ 主要なAI技術（ニューラルネット・決定木・SVM等）を挙げられる
□ 主要なAI開発フレームワーク（TensorFlow・PyTorch等）を挙げられる
□ バイアスの3種類（アルゴリズム・サンプル・不適切）を説明できる
□ 透明性・解釈可能性・説明可能性（XAI）の違いを説明できる
□ 副作用と報酬ハッキングの概念を説明できる

✅ Chapter 3-6 ML基礎:

□ 教師あり・教師なし・強化学習の違いを説明できる
□ 分類と回帰の違いを説明できる
□ MLワークフローの各ステップを順番に説明できる
□ 過学習と未学習の違い・原因・見分け方を説明できる
□ トレーニング・バリデーション・テストデータの役割の違いを説明できる
□ データ漏洩（Data Leakage）の概念を説明できる
□ クラス不均衡のリスクを説明できる
□ ニューロンカバレッジの概念を説明できる

✅ Chapter 5 計算問題（最重要！）:

□ 混同行列の4要素（TP/TN/FP/FN）を定義できる
□ 正解率・適合率・再現率・F1スコアを計算できる
□ 精度と再現率のトレードオフを医療/スパム等の例で説明できる
□ どの指標をいつ使うべきかを説明できる

✅ Chapter 7-9 AIテスト技法:

□ AIシステムの6つのテストレベルを説明できる
□ オートメーションバイアスの定義と対策を説明できる
□ コンセプトドリフトの定義・種類・対策を説明できる
□ テストオラクル問題の概念を説明できる
□ メタモルフィックテストの定義とMRの例を2つ以上挙げられる
□ バック・ツー・バックテストの定義と用途を説明できる
□ A/Bテストの定義と適用条件を説明できる
□ 敵対的攻撃とデータポイズニングの定義を説明できる
□ AIシステムへのペアワイズテストの適用方法を説明できる

✅ Chapter 11 AIによるテスト支援:

□ AIが有効なテスト活動（欠陥予測・テスト生成・回帰最適化等）を説明できる
□ AIが苦手なテスト活動（探索的テスト・倫理的判断等）を説明できる
□ 欠陥予測モデルで使用する主要な特徴量を3つ以上挙げられる
□ セルフヒーリングテストの概念を説明できる
```

---

<a id="references"></a>

## 📚 参照URL一覧

### 🏛️ 公式ISTQB® リソース

| リソース | URL |
|---------|-----|
| **CT-AI 認定ページ（公式）** | https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/ |
| **CT-AI シラバス v1.0 ダウンロード** | https://istqb.org/?sdm_process_download=1&download_id=3505 |
| **サンプル試験問題 v1.3** | https://istqb.org/?sdm_process_download=1&download_id=3509 |
| **サンプル試験解答 v1.3** | https://istqb.org/?sdm_process_download=1&download_id=3510 |
| **CT-AI 概要 v1.0** | https://istqb.org/?sdm_process_download=1&download_id=3515 |
| **認定ガイドライン v1.0** | https://istqb.org/?sdm_process_download=1&download_id=3516 |
| **リリースノート v1.0** | https://istqb.org/?sdm_process_download=1&download_id=3517 |
| **試験構造とルール v1.2** | https://istqb.org/?sdm_process_download=1&download_id=3829 |
| **ISTQBグロッサリー** | https://glossary.istqb.org/en_US/search?term= |
| **ASTQB シラバスPDF（参考）** | https://astqb.org/assets/documents/ISTQB_CT-AI_Syllabus_v1.0.pdf |

### 📢 試験プロバイダー

| リソース | URL |
|---------|-----|
| iSQI 試験情報（CT-AI） | https://isqi.org/ISTQB-Certified-Tester-AI-Testing-CT-AI/CT-AI.1 |
| 試験プロバイダー検索 | https://istqb.org/exam-providers/ |
| 研修プロバイダー検索 | https://istqb.org/training-providers/ |

### 🎓 学習リソース

| リソース | URL |
|---------|-----|
| ISTQB.Guru CT-AI ガイド | https://www.istqb.guru/artificial-inteligence-tester/ |
| ISTQB.Guru CT-AI vs CT-GenAI 比較 | https://www.istqb.guru/istqb-launches-ct-gen-ai/ |
| MasterSoftwareTesting CT-AI 完全ガイド | https://mastersoftwaretesting.com/certification-guides/istqb/ct-ai/ct-ai-complete-guide |
| Udemy CT-AI 実践コース | https://www.udemy.com/course/isqtb-ai-testing-ct-ai/ |
| Udemy CT-AI 模擬試験 | https://www.udemy.com/course/istqb-certified-tester-ai-testing-ct-ai-practice-exams/ |
| Certible CT-AI 情報 | https://www.certible.com/ISTQB/certified-tester/Specialist/AI-Testing/ |

### 📖 関連資格

| 資格 | URL |
|------|-----|
| CTFL v4.0（前提資格） | https://istqb.org/certifications/certified-tester-foundation-level/ |
| CT-GenAI（生成AIテスト） | https://istqb.org/certifications/certified-tester-testing-with-generative-ai-ct-genai/ |
| CTAL-TTA（テクニカルアナリスト） | https://istqb.org/certifications/certified-tester-advanced-level-technical-test-analyst-ctal-tta/ |

### 🔧 関連ツール・フレームワーク

| カテゴリ | リソース | URL |
|---------|---------|-----|
| ML フレームワーク | TensorFlow | https://www.tensorflow.org/ |
| ML フレームワーク | PyTorch | https://pytorch.org/ |
| ML フレームワーク | Scikit-learn | https://scikit-learn.org/ |
| XAI | SHAP | https://shap.readthedocs.io/ |
| XAI | LIME | https://lime-ml.readthedocs.io/ |
| 実験追跡 | MLflow | https://mlflow.org/ |
| データバージョン管理 | DVC | https://dvc.org/ |
| バイアス検出 | IBM AI Fairness 360 | https://aif360.mybluemix.net/ |
| 説明可能性 | Grad-CAM | https://github.com/jacobgil/pytorch-grad-cam |
| AIテスト | Applitools | https://applitools.com/ |
| AI規制 | EU AI Act | https://artificialintelligenceact.eu/ |
| 倫理ガイドライン | IEEE Ethically Aligned Design | https://standards.ieee.org/industry-connections/ec/autonomous-systems/ |
| 自動運転シミュレーター | CARLA | https://carla.org/ |
| AIバイアス評価 | What-If Tool (Google) | https://pair-code.github.io/what-if-tool/ |

### 📋 参考書籍・論文

| タイトル | 著者・内容 |
|---------|----------|
| AI Testing (ISTQB CT-AI Syllabus v1.0) | 公式シラバス（2021年）|
| "Testing Machine Learning Systems" | Google Engineering Blog |
| "Machine Learning Engineering" | Andriy Burkov |
| "Interpretable Machine Learning" | Christoph Molnar（無料公開） |
| "Fairness in Machine Learning" | Google ML Crash Course |

---

## 🏁 まとめ：AIテスターとして成功するための10の鉄則

```
1. 📊 混同行列の計算をマスターする
   → 精度・再現率・F1スコアは試験の必須計算
   → ユースケースに適したメトリクスを選べるようになる

2. 🔄 メタモルフィックテストの思考法を習得する
   → 「正解が分からない」場合でもテストできる
   → メタモルフィック関係を自分で設計できる

3. ⚖️ バイアスに敏感になる
   → アルゴリズム/サンプル/不適切バイアスを区別する
   → 公平性テストの設計に積極的に関与する

4. 🔍 説明可能性（XAI）をテスト戦略に組み込む
   → AIの「なぜ」を問う姿勢を持つ
   → SHAP・LIMEなどのXAIツールを活用する

5. 🌊 コンセプトドリフトを継続的にモニタリングする
   → デプロイで終わりではなく、継続的な品質監視が必要
   → ドリフト検出の仕組みを設計に組み込む

6. 🛡️ セキュリティ意識でAIシステムをテストする
   → 敵対的攻撃・データポイズニングを意識する
   → セキュリティテストをMLパイプラインに組み込む

7. 📦 データの品質を徹底的に検証する
   → AIシステムの品質はデータの品質に依存する
   → クラス不均衡・データ漏洩・ラベルミスを見つける

8. 🤖 AIをテストの仕事に積極活用する
   → 欠陥予測・テスト優先順位付けにAIを使う
   → ただしAIの結果を盲信せず（オートメーションバイアス）

9. 📐 適切なテスト技法を状況に応じて選択する
   → オラクル問題 → メタモルフィックテスト
   → バイアス確認 → デモグラフィックテスト
   → 新旧比較 → バック・ツー・バックテスト

10. 🌱 AIの進化に継続的に学び続ける
    → AI技術は急速に進化している
    → CT-GenAIなど新しい資格も視野に入れる
```

---

> **📌 作成日**: 2025年  
> **📌 準拠資格**: ISTQB CT-AI v1.0（2021年10月1日正式リリース）  
> **📌 次のステップ**:
> - CT-GenAI（Testing with Generative AI）で生成AIテストを習得
> - CTAL-TTA でホワイトボックス・技術的テストの深掘り
>
> 🔗 **公式リソース**: https://istqb.org/certifications/certified-tester-ai-testing-ct-ai/

---

> ⚠️ **免責事項**: 本ガイドはISTQB®が公認したトレーニング資料ではありません。
> 公式シラバス・サンプル問題と合わせて使用してください。
> 試験情報の最終確認は必ず公式サイト（istqb.org）で行ってください。
