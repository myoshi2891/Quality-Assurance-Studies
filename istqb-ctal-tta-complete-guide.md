# 🔬 ISTQB® Certified Tester Advanced Level – Technical Test Analyst (CTAL-TTA)

## 完全学習ガイド【2025年最新版・初学者対応】

> **最終更新**: 2025年（ISTQB® 公式シラバス CTAL-TTA v4.0 準拠）  
> **対象読者**: CTFL取得済みで、技術的なテスト分析の深い実践スキルを習得したい方  
> **参照元**: ISTQB® 公式シラバス CTAL-TTA v4.0（2021年6月30日 GA正式リリース）、公式サンプル試験  

---

## 📚 目次

1. [CTAL-TTA 概要と資格ロードマップ](#chapter-0)
2. [Chapter 1: リスクベーステストにおけるTTAのタスク](#chapter-1)
3. [Chapter 2: ホワイトボックステスト技法](#chapter-2)
   - [2.2 ステートメントテスト](#section-2-2)
   - [2.3 デシジョンテスト](#section-2-3)
   - [2.4 MC/DC テスト](#section-2-4)
   - [2.5 多重条件テスト](#section-2-5)
   - [2.7 API テスト](#section-2-7)
   - [2.8 技法の選択指針](#section-2-8)
4. [Chapter 3: 静的・動的分析](#chapter-3)
   - [3.2 静的分析](#section-3-2)
   - [3.3 動的分析](#section-3-3)
5. [Chapter 4: 技術的テストのための品質特性](#chapter-4)
   - [4.3 セキュリティテスト](#section-4-3)
   - [4.4 信頼性テスト](#section-4-4)
   - [4.5 パフォーマンステスト](#section-4-5)
   - [4.6 保守性テスト](#section-4-6)
   - [4.7 移植性テスト](#section-4-7)
   - [4.8 互換性テスト](#section-4-8)
   - [4.9 オペレーショナルプロファイル](#section-4-9)
6. [Chapter 5: レビュー](#chapter-5)
7. [Chapter 6: テストツールと自動化](#chapter-6)
8. [試験対策・サンプル問題](#exam-tips)
9. [参照URL一覧](#references)

---

<a id="chapter-0"></a>

## 🌟 Chapter 0: CTAL-TTA 概要と資格ロードマップ

### 0.1 この資格とは？

> ┌──────────────────────────────────────────────────────────────────┐
> │               ISTQB® 認定資格ロードマップ                           │
> │                                                                  │
> │  [Expert Level]   Test Management / Improving Test Process       │
> │         ↑                                                        │
> │  [Advanced Level Core]  ← ← ← ★ あなたはここ！★               │
> │   ┌──────────────┬──────────────┬──────────────────────┐        │
> │   │  CTAL-TTA    │  CTAL-TA     │   CTAL-TM v3.0       │        │
> │   │(Tech TAnalyst│(Test Analyst │  (Test Management)   │        │
> │   │  ← 本資格!) │  v4.0)       │                      │        │
> │   └──────┬───────┴──────┬───────┴──────────────────────┘        │
> │          │              │                                        │
> │  [Foundation Level]                                              │
> │   CTFL v4.0（前提条件：必須）                                       │
> │          │                                                       │
> │  推奨実務経験：18ヶ月以上（ソフトウェアテスト or 開発）               │
> └──────────────────────────────────────────────────────────────────┘

**CTAL-TTA（Technical Test Analyst）** とは、技術的なテスト分析の専門家を認定する国際資格です。

ホワイトボックステスト・コード分析・セキュリティ/パフォーマンス/信頼性などの非機能テスト・テスト自動化に特化した**最も技術的な**ISTQB中級資格です。

### 0.2 CTAL-TTA vs CTAL-TA の違いは？

> ┌─────────────────────────────────────────────────────────────────┐
> │            CTAL-TA vs CTAL-TTA の比較                            │
> ├──────────────────────────┬──────────────────────────────────────┤
> │  CTAL-TA（Test Analyst） │ CTAL-TTA（Technical Test Analyst）  │
> ├──────────────────────────┼──────────────────────────────────────┤
> │ ビジネス視点               │ 技術・エンジニアリング視点             │
> │ ブラックボックス中心        │ ホワイトボックス中心                  │
> │ 機能テスト                │ 非機能テスト（性能・セキュリティ等）    │
> │ ユーザー体験に注目         │ コード品質・アーキテクチャに注目        │
> │ EP、BVA、状態遷移         │ MC/DC、静的分析、動的分析             │
> │ デシジョンテーブル         │ カバレッジ基準、メモリリーク検出        │
> └──────────────────────────┴──────────────────────────────────────┘

### 0.3 試験概要（v4.0）

> ╔══════════════════════════════════════════════════════════╗
> ║              CTAL-TTA v4.0 試験スペック                   ║
> ╠════════════════════════════════╦═════════════════════════╣
> ║  問題数                        ║  45問                    ║
> ╠════════════════════════════════╬═════════════════════════╣
> ║  合格点                        ║  51点（78点満点）         ║
> ╠════════════════════════════════╬═════════════════════════╣
> ║  合格率目標                     ║  約65%                   ║
> ╠════════════════════════════════╬═════════════════════════╣
> ║  試験時間                       ║  120分                   ║
> ║  （英語非母語者）                ║  (+25% = 150分)          ║
> ╠════════════════════════════════╬═════════════════════════╣
> ║  前提条件                       ║  CTFL資格（必須）         ║
> ╠════════════════════════════════╬═════════════════════════╣
> ║  推奨経験                       ║  18ヶ月以上の実務         ║
> ╠════════════════════════════════╬═════════════════════════╣
> ║  学習時間（公認研修）             ║  最低1200分(20時間)       ║
> ╠════════════════════════════════╬═════════════════════════╣
> ║  最新シラバス                    ║  v4.0（2021年6月30日）    ║
> ╚════════════════════════════════╩═════════════════════════╝

### 0.4 チャプター別学習時間配分

> Chapter 1: リスクベーステストのTTAタスク  ██                 30分  (2.5%)
> Chapter 2: ホワイトボックステスト技法     ████████████████  300分 (25.0%) ← 最重要
> Chapter 3: 静的・動的分析                ████████          180分 (15.0%)
> Chapter 4: 品質特性のための技術テスト     ████████████████  345分 (28.8%) ← 最重要
> Chapter 5: レビュー                      ████████          165分 (13.8%)
> Chapter 6: テストツールと自動化           ████████          180分 (15.0%)
> 合計: 1200分 (20時間)

### 0.5 8つのビジネスアウトカム（Business Outcomes）

| ID | ビジネスアウトカム |
|----|-----------------|
| TTA_01 | 性能・セキュリティ・信頼性・移植性・保守性に関連するリスクを認識・分類できる |
| TTA_02 | 上記リスクを軽減するテストの計画・設計・実行に技術的要素を提供できる |
| TTA_03 | 設計カバレッジに基づいた適切なホワイトボックステスト技法を選択・適用できる |
| TTA_04 | コードとアーキテクチャの典型的欠陥の知識を活かしてレビューに効果的に参加できる |
| TTA_05 | 様々な分析技法でコードとアーキテクチャの品質特性を改善できる |
| TTA_06 | 特定タイプのテスト自動化導入のコストと効果を概説できる |
| TTA_07 | 技術的テストタスクを自動化するための適切なツールを選択できる |
| TTA_08 | テスト自動化適用における技術的課題とコンセプトを理解できる |

---

<a id="chapter-1"></a>

## 📋 Chapter 1: リスクベーステストにおけるTTAのタスク
>
> 30分 | 試験配点の約4%

### 1.1 TTAとテスト管理者の役割分担

> テスト管理者（TM）とTTAの役割分担：

> テスト管理者（TM）:
> └── リスクベーステスト戦略の全体確立・管理
> └── リスクワークショップのファシリテーション
> └── 最終的なリスクレベルの決定

> 技術テストアナリスト（TTA）:
> └── 技術的製品リスクの識別・評価（専門知識の提供）
> └── セキュリティ、信頼性、パフォーマンスリスクの知識
> └── テスト環境に関連するプロジェクトリスクへの貢献
> └── 高リスク領域のテストケース設計

> TTA が密に連携するステークホルダー：
> ✓ 開発者（Developer）
> ✓ ソフトウェアアーキテクト
> ✓ 運用エンジニア（Operations Engineer）
> ✓ 製品オーナー
> ✓ テクニカルエキスパート

### 1.2 TTAのリスクベーステストタスク

#### 1.2.1 リスク識別（Risk Identification）

> TTA が識別する技術的製品リスクの例：

> ISO 25010 品質特性に基づくリスク：

> 機能適合性リスク:
> → ビジネスロジックの実装ミス
> → API の誤った仕様実装

> 性能効率性リスク:
> → 高負荷時のレスポンス劣化
> → メモリリーク・リソース枯渇
> → データベースクエリの非効率性

> セキュリティリスク:
> → 認証・認可の不備
> → SQLインジェクション / XSS 脆弱性
> → 機密データの暗号化漏れ

> 信頼性リスク:
> → システム障害時の不適切なフォールバック
> → データ整合性の問題
> → 障害回復時間の超過

> 保守性リスク:
> → 複雑すぎるコード（高い循環的複雑度）
> → テスト困難な設計
> → ドキュメント不足

#### 1.2.2 リスク評価（Risk Assessment）

> 技術リスク評価の考慮要素：

> プロジェクトリスク要因:
> ✗ ステークホルダー間の技術要件の対立
> ✗ 分散開発によるコミュニケーション問題
> ✗ ツールと技術（スキル不足含む）
> ✗ 時間・リソース・管理プレッシャー
> ✗ 過去の品質保証不足
> ✗ 技術要件の高変更率

> 製品リスク要因:
> ✗ 技術の複雑さ（複雑なアーキテクチャ）
> ✗ コードの複雑さ（高い循環的複雑度）
> ✗ ソースコードの変更量（挿入・削除・修正）
> ✗ 技術品質特性に関する欠陥履歴
> ✗ 技術的なインターフェース・統合の問題

> 役割分担（重要！試験頻出）：
> TTA → 技術的製品リスクの「発生確率（Likelihood）」を提案
> TA  → 技術的製品リスクの「影響度（Impact）」を評価
> TM  → 全ステークホルダーの見解を考慮して最終リスクレベルを決定

#### 1.2.3 リスク軽減（Risk Mitigation）

> TTAによるリスク軽減活動：

> 1. 高リスク領域に対するテストケース設計
>      → 残存リスク評価のための詳細テスト

> 2. 設計されたテストの実行によるリスク低減
>      → テスト計画の緩和・緊急時対応策の実施

> 3. プロジェクト進行に伴うリスク再評価
>      → 新情報に基づく継続的なリスク更新

> 専門家との連携：
> ✓ セキュリティ専門家 → 脆弱性テスト戦略の定義
> ✓ パフォーマンス専門家 → 負荷テスト設計の支援

---

<a id="chapter-2"></a>

## 🔲 Chapter 2: ホワイトボックステスト技法（White-Box Test Techniques）
>
> 300分 | 試験配点の約25%（最重要章）

### 概要：ホワイトボックスとは？

> ブラックボックス vs ホワイトボックス：

> ブラックボックステスト（CTAL-TA の領域）:
> 外部 → [???ブラックボックス???] → 出力
> → 内部構造を知らずに入出力のみを評価

> ホワイトボックステスト（CTAL-TTA の領域）:
> コード/制御フローを直接分析してテストケースを設計
> → 「どのコードが実行されたか」をカバレッジで測定

> 主要なホワイトボックス技法（v4.0）：
> ┌─────────────────────────────────────────────────┐
> │ 1. ステートメントテスト（Statement Testing）      │ ← 最も基本
> │ 2. デシジョンテスト（Decision Testing）          │ ← 重要
> │ 3. MC/DC テスト（Modified Condition/Decision）   │ ← 最重要・難
> │ 4. 多重条件テスト（Multiple Condition Testing）  │
> │ 5. API テスト（API Testing）                    │
> └─────────────────────────────────────────────────┘
> ※ Basis Path Testing は v4.0 で削除された（試験に出ない）

---

<a id="section-2-2"></a>

### 2.2 ステートメントテスト（Statement Testing）

> **定義**: コード内の実行可能なステートメントを実行するテスト技法

> カバレッジ計算式：
> ステートメントカバレッジ = 実行されたステートメント数 / 総実行可能ステートメント数 × 100

> 例：Pythonコード

```python
def calculate_discount(price: float, customer_type: str) -> float:
    """顧客タイプに応じた割引価格を計算する"""
    discount = 0.0                    # ステートメント 1
    
    if customer_type == "premium":    # ステートメント 2（条件判定）
        discount = 0.20               # ステートメント 3
    elif customer_type == "regular":  # ステートメント 4
        discount = 0.10               # ステートメント 5
    
    return price * (1 - discount)     # ステートメント 6

# ===== ステートメントカバレッジ 100% を達成するテスト =====

# テスト1: customer_type = "premium"
# → ステートメント 1,2,3,6 が実行される

# テスト2: customer_type = "regular"
# → ステートメント 1,2,4,5,6 が実行される

# テスト1+2 で: 1,2,3,4,5,6 全ステートメント → 100%達成！

# ❌ 注意：100%達成でも検出できない欠陥がある
# 例：customer_type = "vip" → discount=0（バグが潜む可能性）

> ステートメントテストの特性：

>   適用場面:
>     ✓ テスト対象コードの最低限のカバレッジ確保
>     ✓ 未実行コードの検出（デッドコードの発見）
>     ✓ 初期テストフェーズ

>   限界:
>     ✗ 100%達成でも一部の論理欠陥を見逃す
>     ✗ 条件の組み合わせを検証しない
>     ✗ 到達不可能コード（unreachable code）があると100%達成不可

---

<a id="section-2-3"></a>

### 2.3 デシジョンテスト（Decision Testing）

> **定義**: コード内の各決定（IF/SWITCH/LOOP等）のTRUE/FALSE両方の結果を実行するテスト技法

> カバレッジ計算式：
>   デシジョンカバレッジ = 実行された決定結果数 / 総決定結果数 × 100

> ブランチテスト（Branch Testing）との関係：
>   → ほぼ同義。IFステートメントの各分岐（True/False）を全てカバーする

```python
def check_age_access(age: int, has_id: bool) -> str:
    """年齢と身分証明書に基づいてアクセスを判定する"""
    
    if age >= 18:           # 決定1: True / False
        if has_id:          # 決定2: True / False
            return "✅ Access Granted"
        else:
            return "❌ ID Required"
    else:
        return "❌ Under Age"

# ===== デシジョンカバレッジ 100% を達成するテスト =====
# 決定1(True) + 決定2(True)  → TC-1: age=25, has_id=True  → "Access Granted"
# 決定1(True) + 決定2(False) → TC-2: age=25, has_id=False → "ID Required"
# 決定1(False)               → TC-3: age=15, has_id=True  → "Under Age"
# 計: 3テストケースで全4決定結果をカバー → 100%!

# ===== コントロールフローグラフ =====
#
#         [START]
#            │
#     [age >= 18?]───False───→[Under Age]
#         │True                    │
#     [has_id?]──False──→[ID Required]
#         │True                    │
#   [Access Granted]               │
#         │                        │
#         └────────────────────────┘
#                    [END]

> デシジョンテストの特性：

>   ステートメントテストよりも強い（包含関係）：
>     100% デシジョンカバレッジ → 100% ステートメントカバレッジ
>     （逆は成立しない！）

>   適用場面:
>     ✓ 重要または重大なコードのテスト
>     ✓ ビジネスプロセスモデル（フローチャート）のテスト

>   限界:
>     ✗ 複数条件を持つ決定の詳細を検証しない
>     ✗ 条件の組み合わせによる欠陥を見逃す可能性

---

<a id="section-2-4"></a>

### 2.4 修正条件/決定カバレッジ（Modified Condition/Decision Coverage: MC/DC）

> **定義**: 各原子条件（atomic condition）が決定結果に**独立して**影響することを証明するテスト技法

> ⭐ MC/DC は CTAL-TTA の最重要かつ最難関トピック ⭐

> MC/DC の4つの要件：
>   1. 全ての入口点（entry point）を少なくとも1回実行
>   2. 全ての出口点（exit point）を少なくとも1回実行
>   3. 全ての決定（decision）のTrue/Falseを実行
>   4. 各原子条件（atomic condition）が決定結果に「独立して」影響する

**MC/DC の詳細解説：**

```python
# 決定式の例：
# A AND B OR C
# → 原子条件：A, B, C（それぞれTrue/Falseの2値）

# ===== 真偽値表 =====
# A | B | C | A AND B | A AND B OR C
# T | T | T |    T    |      T
# T | T | F |    T    |      T
# T | F | T |    F    |      T
# T | F | F |    F    |      F   ← ★
# F | T | T |    F    |      T
# F | T | F |    F    |      F   ← ★
# F | F | T |    F    |      T
# F | F | F |    F    |      F   ← ★

# ===== MC/DC テストケース選択 =====
# 各条件が「独立して」結果を変えるペアを見つける

# 条件A の独立影響を証明するペア：
#   (A=T, B=T, C=F) → 結果=T（行2）
#   (A=F, B=T, C=F) → 結果=F（行6）
#   → A だけが変化し、結果が変わる！✅

# 条件B の独立影響を証明するペア：
#   (A=T, B=T, C=F) → 結果=T（行2）
#   (A=T, B=F, C=F) → 結果=F（行4）
#   → B だけが変化し、結果が変わる！✅

# 条件C の独立影響を証明するペア：
#   (A=T, B=F, C=T) → 結果=T（行3）
#   (A=T, B=F, C=F) → 結果=F（行4）
#   → C だけが変化し、結果が変わる！✅

# 最終的なMC/DC テストスイート（重複を除くと）：
MC_DC_tests = [
    {"A": True,  "B": True,  "C": False},   # 行2 ← 共有
    {"A": False, "B": True,  "C": False},   # 行6
    {"A": True,  "B": False, "C": True},    # 行3
    {"A": True,  "B": False, "C": False},   # 行4 ← 共有
]
# 4テストケースで3原子条件を全て独立検証！
# (全組み合わせ = 2^3 = 8件 に対して最小化)

> MC/DC の最小テストケース数：
>   n個の原子条件 → 最小 n+1 テストケース

>   例：
>     2条件 → 最小3テスト（2+1）
>     3条件 → 最小4テスト（3+1）
>     4条件 → 最小5テスト（4+1）

>   vs 全組み合わせ（Multiple Condition Testing）：
>     2条件 → 4テスト（2^2）
>     3条件 → 8テスト（2^3）
>     4条件 → 16テスト（2^4）

> MC/DC が使われる理由：
>   ✓ 全組み合わせより劇的にテスト数を削減
>   ✓ 航空宇宙（DO-178C Level A/B）で必須
>   ✓ 医療機器・自動車（機能安全規格）でも要求

**MC/DCのカバレッジレベル比較（重要！試験頻出）：**

> カバレッジの強さ（弱い → 強い）：

>   ステートメント < デシジョン < MC/DC < 多重条件

>   包含関係：
>   多重条件 ⊃ MC/DC ⊃ デシジョン ⊃ ステートメント
>   （左が右を包含する = 左をクリアすれば右も自動的にクリア）

---

<a id="section-2-5"></a>

### 2.5 多重条件テスト（Multiple Condition Testing）

> **定義**: 各決定を構成する全ての原子条件の組み合わせをテストする技法

```python
# A AND B の多重条件テスト（全2^2 = 4通り）：

multiple_condition_tests = [
    {"A": False, "B": False, "result": False},  # TT-1
    {"A": False, "B": True,  "result": False},  # TT-2
    {"A": True,  "B": False, "result": False},  # TT-3
    {"A": True,  "B": True,  "result": True},   # TT-4
]

# 適用場面: 高信頼性が要求されるシステム（医療、金融等）
# 欠点:    条件数が増えると指数的にテスト数が増加する (2^n)

# 多重条件テストの特性：
# ✓ 全ての条件の組み合わせをカバー
# ✓ 最も強力なカバレッジ
# ✗ コストが非常に高い（2^n の組み合わせ爆発）
# ✗ 実用的でない場合が多い

---

<a id="section-2-7"></a>

### 2.7 API テスト（API Testing）

> **定義**: アプリケーションプログラミングインターフェース（API）に直接アクセスしてテストする技法

```python
# REST API テストの実装例（pytest + requests）

import pytest
import requests

BASE_URL = "https://api-staging.example.com/v1"

class TestUserAPI:
    """ユーザー管理 API の技術テスト"""
    
    def test_create_user_returns_correct_schema(self):
        """APIレスポンスのスキーマが仕様通りか検証"""
        payload = {
            "name": "Test User",
            "email": f"test_{uuid4().hex[:8]}@example.com",
            "role": "user"
        }
        
        response = requests.post(f"{BASE_URL}/users", json=payload)
        
        # ステータスコードの検証
        assert response.status_code == 201
        
        body = response.json()
        
        # スキーマバリデーション（技術テストアナリストの観点）
        assert "id" in body, "IDフィールドが必須"
        assert isinstance(body["id"], str), "IDは文字列型"
        assert "created_at" in body, "作成日時フィールドが必須"
        assert body["name"] == payload["name"]
        assert body["email"] == payload["email"]
        
    def test_api_handles_concurrent_requests(self):
        """並列リクエスト処理の検証（パフォーマンスリスク）"""
        import threading
        results = []
        
        def make_request():
            r = requests.get(f"{BASE_URL}/health")
            results.append(r.status_code)
        
        # 10並列リクエスト
        threads = [threading.Thread(target=make_request) for _ in range(10)]
        for t in threads: t.start()
        for t in threads: t.join()
        
        assert all(s == 200 for s in results), "全リクエストが成功すること"
    
    def test_sql_injection_prevention(self):
        """SQLインジェクション防御の検証（セキュリティリスク）"""
        malicious_inputs = [
            "'; DROP TABLE users; --",
            "1' OR '1'='1",
            "admin'--",
        ]
        
        for payload in malicious_inputs:
            response = requests.post(
                f"{BASE_URL}/users/search",
                json={"query": payload}
            )
            # 悪意ある入力でも500エラーやDBエラーが出ないこと
            assert response.status_code in [200, 400, 422], \
                f"SQLインジェクション試行で予期しないエラー: {response.status_code}"

> API テストで検出できる欠陥の種類：

>   機能系欠陥:
>     ✓ 間違ったHTTPステータスコード
>     ✓ レスポンスボディのスキーマ不正
>     ✓ ビジネスロジックの実装誤り

>   セキュリティ系欠陥:
>     ✓ 認証・認可バイパス
>     ✓ インジェクション攻撃への脆弱性
>     ✓ 機密情報の漏洩

>   パフォーマンス系欠陥:
>     ✓ レスポンス時間の超過
>     ✓ 並列リクエスト処理の問題
>     ✓ ペイロードサイズ制限の不備

---

<a id="section-2-8"></a>

### 2.8 ホワイトボックステスト技法の選択指針（Selecting a White-Box Test Technique）

> 非安全性関連システム（Non-Safety-Related Systems）の選択基準：

> ┌────────────────────────────────────────────────────────────┐
> │               技法選択マトリクス（非安全系）                  │
> ├──────────────────────────┬───────────────────────────────── │
> │  システムの重要度           │  推奨技法                       │
> ├──────────────────────────┼────────────────────────────────│
> │ 低（一般的なシステム）       │ ステートメントテスト             │
> │ 中（ビジネス重要システム）    │ デシジョンテスト                 │
> │ 高（重要度の高いシステム）    │ MC/DC テスト                   │
> │ 最高（ミッションクリティカル）│ 多重条件テスト                  │
> └──────────────────────────┴────────────────────────────────┘

> 安全性関連システム（Safety-Related Systems）の選択基準：

> IEC 61508 安全整合性レベル（SIL: Safety Integrity Level）
> ┌─────────────────────────────────────────────────────────┐
> │                  SIL レベルと推奨技法                      │
> ├──────────┬────────────────────────────────────────────┤
> │  SIL 1   │ ステートメントテスト（推奨）                    │
> │  SIL 2   │ デシジョンテスト（強く推奨）                    │
> │  SIL 3   │ MC/DC テスト（強く推奨）                      │
> │  SIL 4   │ 多重条件テスト（強く推奨）                     │
> └──────────┴────────────────────────────────────────────┘

> DO-178C（航空宇宙ソフトウェア標準）との対応：
>   Level A（最高）: 多重条件テスト 必須
>   Level B:        MC/DC テスト 必須
>   Level C:        デシジョンテスト 必須
>   Level D:        ステートメントテスト 必須
>   Level E:        なし（要件なし）

---

<a id="chapter-3"></a>

## 🔍 Chapter 3: 静的・動的分析（Static and Dynamic Analysis）
>
> 180分 | 試験配点の約15%

### 概要：静的分析 vs 動的分析

> ┌──────────────────────────────────────────────────────────────┐
> │           静的分析 vs 動的分析の比較                            │
> ├──────────────────────────┬───────────────────────────────────┤
> │  静的分析（Static）        │  動的分析（Dynamic）               │
> ├──────────────────────────┼───────────────────────────────────┤
> │ コードを実行しない           │ コードを実行しながら分析             │
> │ コンパイル前/後に適用可能    │ ランタイム（実行時）に適用           │
> │ 全コードパスを分析できる     │ 実行されたパスのみ分析可能           │
> │ ツール例: SonarQube        │ ツール例: Valgrind, JProfiler      │
> │ コードレビュー・インスペクション│ プロファイラー・メモリアナライザー   │
> └──────────────────────────┴───────────────────────────────────┘

<a id="section-3-2"></a>

### 3.2 静的分析（Static Analysis）

#### 3.2.1 制御フロー分析（Control Flow Analysis）

```python
# 制御フロー分析の概念実例

def process_order(order: dict) -> str:
    """注文処理関数 - 制御フロー分析の対象"""
    
    if not order:              # 節点1: 空チェック
        return "Error"         # 節点2
    
    if order["amount"] <= 0:   # 節点3: 金額チェック
        return "Invalid"       # 節点4
    
    if order["type"] == "A":   # 節点5: タイプチェック
        process_type_a(order)  # 節点6
    else:
        process_type_b(order)  # 節点7
    
    return "Success"           # 節点8

# 制御フローグラフ（CFG）：
#
#        [START]
#           │
#      [節点1: order?]──False──[節点2: Error]
#           │True                    │
#      [節点3: amount>0?]──False──[節点4: Invalid]
#           │True                    │
#      [節点5: type==A?]             │
#       │True    │False              │
#  [節点6:A] [節点7:B]              │
#       │       │                   │
#       └───┬───┘                   │
#      [節点8: Success]             │
#           │                       │
#           └───────────────────────┘
#                      [END]

# 循環的複雑度（Cyclomatic Complexity）= E - N + 2P
# E = エッジ（辺）の数, N = 節点の数, P = 連結成分の数（通常1）
# この例: 8エッジ - 8節点 + 2×1 = 2... (簡略化)
# 実際の計算: 決定点の数 + 1 = 3 + 1 = 4

def calculate_cyclomatic_complexity(code_text: str) -> int:
    """循環的複雑度を計算（概念的実装）"""
    decision_keywords = ["if", "elif", "for", "while", "and", "or", "except"]
    count = 1  # 基本の1
    for keyword in decision_keywords:
        count += code_text.count(f" {keyword} ")
    return count

# 循環的複雑度の解釈：
# 1-10:   シンプル（良好）
# 11-20:  やや複雑（注意）
# 21-50:  複雑（要リファクタリング）
# 50超:   非常に複雑（テスト困難・高リスク）

#### 3.2.2 データフロー分析（Data Flow Analysis）

```python
# データフロー分析 - 変数の定義（def）と使用（use）のペアを追跡

def calculate_total(items: list) -> float:
    total = 0.0          # 定義 d(total, L1)
    
    for item in items:   # 定義 d(item, L3)
        price = item["price"]     # 定義 d(price, L4)
        qty   = item["quantity"]  # 定義 d(qty, L5)
        
        subtotal = price * qty    # 使用 u(price, L7), u(qty, L7)
                                  # 定義 d(subtotal, L7)
        total += subtotal         # 使用 u(total, L8), u(subtotal, L8)
                                  # 定義 d(total, L8)
    
    return total                  # 使用 u(total, L10)

# データフロー分析で検出できる問題：
#
# ✗ 定義-使用なしパターン（du: defined, unused）
#   → 変数を定義したが一度も使わない（不要な変数、誤り）
#
# ✗ 未定義使用パターン（ur: undefined, used）
#   → 未初期化変数の使用（バグの原因）
#
# ✗ 定義-定義パターン（dd: defined, re-defined before use）
#   → 使わずに上書きした変数（論理エラーの可能性）

# 具体的なバグ例（データフロー問題）：
def bad_example(x, y):
    result = x + y   # ★ 定義
    result = x * y   # ★ 定義（前の定義を使用しないで上書き！）→ ddパターン
    return result    # 使用

#### 3.2.3 保守性向上のための静的分析（Using Static Analysis for Improving Maintainability）

> 静的分析ツールで測定する保守性メトリクス：

> コード品質メトリクス：
>   ✓ 循環的複雑度（Cyclomatic Complexity）
>     → 高い値 = テスト困難 = バグが潜みやすい

>   ✓ コードの重複率（Code Duplication）
>     → 重複が多い = 変更時の影響範囲が広い

>   ✓ コメント率（Comment Density）
>     → 低い = 理解困難・保守困難

>   ✓ 結合度（Coupling）と凝集度（Cohesion）
>     → 高結合/低凝集 = 変更が難しい設計

> 代表的な静的分析ツール（2025年版）：
> ┌────────────────────────────────────────────────────┐
> │ ツール名          │ 言語         │ 主な機能           │
> ├──────────────────┼─────────────┼──────────────────┤
> │ SonarQube        │ 多言語       │ 総合コード品質分析  │
> │ ESLint/Prettier  │ JavaScript  │ コードスタイル/エラー│
> │ Pylint/flake8    │ Python      │ コード品質チェック   │
> │ Checkstyle       │ Java        │ コーディング規約     │
> │ FindBugs/SpotBugs│ Java        │ バグパターン検出    │
> │ ReSharper        │ C#/.NET     │ コード分析          │
> └────────────────────────────────────────────────────┘

---

<a id="section-3-3"></a>

### 3.3 動的分析（Dynamic Analysis）

#### 3.3.1 概要

> 動的分析とは：
>   → ソフトウェアを実際に実行して、実行時の動作を分析する技法
>   → 静的分析では検出できないランタイムエラーを発見

> 動的分析で検出できる問題：
>   ✓ メモリリーク（Memory Leaks）
>   ✓ ワイルドポインタ（Wild Pointers）
>   ✓ パフォーマンス効率性の問題（ボトルネック）
>   ✓ スレッドの競合状態（Race Conditions）

#### 3.3.2 メモリリーク検出（Detecting Memory Leaks）

```c
// メモリリークの例（C言語）
#include <stdlib.h>

void process_data(int size) {
    int* buffer = malloc(size * sizeof(int));  // メモリ確保
    
    if (size <= 0) {
        return;  // ❌ メモリを解放せずに返る！→ メモリリーク！
    }
    
    // データ処理...
    
    free(buffer);  // ✅ 正常パスではメモリ解放
}

// メモリリーク修正版：
void process_data_fixed(int size) {
    int* buffer = malloc(size * sizeof(int));
    
    if (size <= 0) {
        free(buffer);  // ✅ 全てのパスでメモリ解放
        return;
    }
    
    // データ処理...
    
    free(buffer);
}

```python
# Pythonでのメモリリーク（参照カウントバイパス）
import gc
import weakref

class ResourceManager:
    """リソース管理クラス（循環参照でメモリリークが発生）"""
    
    def __init__(self, name: str):
        self.name = name
        self.children = []
    
    def add_child(self, child):
        child.parent = self  # ❌ 循環参照！ parent <→ children
        self.children.append(child)

# 循環参照によるメモリリーク検出方法：
def check_memory_leak():
    """gc モジュールで循環参照を検出"""
    gc.collect()  # GCを強制実行
    
    before = len(gc.garbage)
    
    parent = ResourceManager("parent")
    child = ResourceManager("child")
    parent.add_child(child)
    
    # 参照を削除
    del parent, child
    
    gc.collect()
    after = len(gc.garbage)
    
    if after > before:
        print(f"⚠️ メモリリーク検出: {after - before}オブジェクトが未解放")

# 動的分析ツール：
# - Valgrind（C/C++）: メモリリーク・不正メモリアクセスの検出
# - LeakSanitizer: メモリリーク検出
# - JProfiler / VisualVM（Java）: ヒープメモリ分析
# - memory-profiler（Python）: メモリ使用量プロファイリング

#### 3.3.3 ワイルドポインタ検出（Detecting Wild Pointers）

```c
// ワイルドポインタの例（C言語）

int* create_data() {
    int local_var = 42;
    return &local_var;  // ❌ ローカル変数のアドレスを返す！
                        // → 関数終了後にスタックが無効になる
                        // → ダングリングポインタ（Dangling Pointer）
}

// 修正版：
int* create_data_safe() {
    int* heap_var = (int*)malloc(sizeof(int));
    *heap_var = 42;
    return heap_var;  // ✅ ヒープメモリのアドレスを返す（呼び出し元がfreeする）
}

/*
ワイルドポインタの種類：
  1. 未初期化ポインタ: 初期化せずに使用
  2. ダングリングポインタ: free後のポインタを使用
  3. ヌルポインタ逆参照: NULLポインタへのアクセス

検出ツール：
  - Valgrind / AddressSanitizer（ASan）
  - Purify
  - Intel Inspector
*/

#### 3.3.4 パフォーマンス効率性の分析（Analysis of Performance Efficiency）

```python
# プロファイリングを使ったボトルネック検出

import cProfile
import pstats
from functools import lru_cache

# ❌ 非効率なコード（再帰計算）
def fibonacci_slow(n: int) -> int:
    """非効率なフィボナッチ計算（指数時間複雑度）"""
    if n <= 1:
        return n
    return fibonacci_slow(n-1) + fibonacci_slow(n-2)

# ✅ キャッシュで最適化したコード
@lru_cache(maxsize=None)
def fibonacci_fast(n: int) -> int:
    """メモ化フィボナッチ（線形時間複雑度）"""
    if n <= 1:
        return n
    return fibonacci_fast(n-1) + fibonacci_fast(n-2)

# プロファイリングの実行：
def profile_code():
    profiler = cProfile.Profile()
    profiler.enable()
    
    fibonacci_slow(30)  # 遅い版を実行
    
    profiler.disable()
    stats = pstats.Stats(profiler)
    stats.sort_stats("cumulative")
    stats.print_stats(10)  # 上位10件の遅い関数を表示

# プロファイリングで検出できる問題：
# ✓ 実行時間の長いホットスポット
# ✓ 不必要な反復処理
# ✓ N+1クエリ問題（DBアクセスの非効率）
# ✓ 不必要なオブジェクト生成

---

<a id="chapter-4"></a>

## 🛡️ Chapter 4: 技術的テストのための品質特性（Quality Characteristics for Technical Testing）
>
> 345分 | 試験配点の約29%（最重要章）

### 4.1 概要：ISO 25010 品質特性モデル

> ISO/IEC 25010 ソフトウェア品質モデル（CTAL-TTA の対象領域）：

> 製品品質特性:
>   1. 機能適合性 ← CTAL-TA の主領域
>   2. 性能効率性 ← TTA の主領域（Chapter 4.5）
>   3. 互換性     ← TTA の主領域（Chapter 4.8）
>   4. ユーザビリティ ← CTAL-TA の主領域
>   5. 信頼性     ← TTA の主領域（Chapter 4.4）
>   6. セキュリティ ← TTA の主領域（Chapter 4.3）
>   7. 保守性     ← TTA の主領域（Chapter 4.6）
>   8. 移植性     ← TTA の主領域（Chapter 4.7）

> ★ CTAL-TTA は「非機能テスト」の専門家！

### 4.2 テクニカルテストの一般的な計画課題（General Planning Issues）

> 非機能テスト特有の計画上の課題：

> 1. ステークホルダー要件（Stakeholder Requirements）
>    → 「5秒以内に応答」「99.9%可用性」などの非機能要件の特定
>    → 数値化されていない要件の定量化（例：「高速」→「2秒以内」）

> 2. テスト環境要件（Test Environment Requirements）
>    → パフォーマンステスト: 本番同等のハードウェア/ネットワーク
>    → セキュリティテスト: 脆弱性スキャナー・ペネトレーションツール
>    → 信頼性テスト: 障害注入ツール・冗長構成

> 3. ツール取得とトレーニング（Required Tool Acquisition and Training）
>    → 性能テスト: JMeter, k6, Gatling
>    → セキュリティ: OWASP ZAP, Burp Suite
>    → メモリ分析: Valgrind, JProfiler

> 4. データセキュリティとデータ保護（Data Security and Data Protection）
>    → テストデータの匿名化（GDPR対応）
>    → 本番データをテスト環境に持ち込む際の暗号化
>    → テスト完了後のデータ削除プロセス

---

<a id="section-4-3"></a>

### 4.3 セキュリティテスト（Security Testing）

#### セキュリティテストの主要概念

> セキュリティの3要素（CIA トライアド）：

>   Confidentiality（機密性）:
>     → 認可されたユーザーのみがデータにアクセスできること
>     → テスト: 認証テスト・権限テスト

>   Integrity（完全性）:
>     → データが不正に変更されていないこと
>     → テスト: データ改ざん検証・デジタル署名確認

>   Availability（可用性）:
>     → 認可されたユーザーが必要なときにアクセスできること
>     → テスト: DDoS耐性テスト・障害回復テスト

> 追加要素（ISO 25010）：
>   ✓ 非否認性（Non-repudiation）: 操作の証拠を残す
>   ✓ 認証性（Authenticity）: ユーザーの本人確認
>   ✓ アカウンタビリティ（Accountability）: 操作の追跡可能性

**セキュリティテスト計画：**

> セキュリティテスト計画で考慮すべき事項：

> 1. セキュリティポリシーの確認
>    → 組織のセキュリティポリシー / 業界規制（PCI DSS等）
>    → テスト範囲と禁止事項の明確化

> 2. セキュリティ要件の特定
>    → 機密性・完全性・可用性の具体的な要件
>    → コンプライアンス要件（GDPR, HIPAA等）

> 3. テスト環境の分離
>    → 本番環境への影響を絶対に避ける
>    → 専用のセキュリティテスト環境を用意

> 4. 倫理的考慮
>    → 許可を得た範囲でのみテストを実施
>    → 発見した脆弱性は適切な経路で報告

**セキュリティテスト仕様（主要テストタイプ）：**

```python
# OWASP Top 10 に基づくセキュリティテストの実装例

class SecurityTestSuite:
    """CTAL-TTA に準拠したセキュリティテストスイート"""
    
    # OWASP A01: アクセス制御の欠陥
    def test_broken_access_control(self, api_client, user_token, admin_token):
        """一般ユーザーが管理者リソースにアクセスできないことを検証"""
        
        # 一般ユーザーで管理者専用エンドポイントへのアクセス試行
        response = api_client.get(
            "/admin/users",
            headers={"Authorization": f"Bearer {user_token}"}
        )
        assert response.status_code == 403, "一般ユーザーは管理者エンドポイントにアクセス不可"
    
    # OWASP A02: 暗号化の失敗
    def test_sensitive_data_encryption(self, db_connection):
        """機密データが暗号化して保存されていることを検証"""
        
        # パスワードが平文で保存されていないことを確認
        user = db_connection.query("SELECT password FROM users WHERE id=1")
        
        # パスワードフィールドがハッシュ化されていること
        assert not user["password"].isalpha(), "パスワードが平文で保存されている！"
        assert len(user["password"]) >= 60, "bcryptハッシュの最小長"
    
    # OWASP A03: インジェクション
    def test_sql_injection(self, api_client):
        """SQLインジェクション脆弱性を検証"""
        
        sql_payloads = [
            "1; DROP TABLE users; --",
            "1' OR '1'='1",
            "1' UNION SELECT * FROM users --",
        ]
        
        for payload in sql_payloads:
            response = api_client.get(f"/users?id={payload}")
            
            # 500エラーやSQLエラーメッセージが露出しないこと
            assert response.status_code != 500, f"SQLエラー露出: {payload}"
            assert "SQL" not in response.text, "SQLエラーメッセージが露出"
            assert "syntax" not in response.text.lower(), "DBエラー詳細が露出"
    
    # OWASP A07: 認証の失敗
    def test_brute_force_protection(self, api_client):
        """ブルートフォース攻撃対策を検証"""
        
        # 5回連続で失敗したらアカウントロック
        for i in range(5):
            api_client.post("/login", json={
                "email": "victim@example.com",
                "password": f"wrong_password_{i}"
            })
        
        # 6回目はロックされること
        response = api_client.post("/login", json={
            "email": "victim@example.com",
            "password": "correct_password"  # 正しいパスワードでも
        })
        assert response.status_code == 429, "アカウントロックが機能していない"

# 代表的なセキュリティテストツール：
# ┌─────────────────────────────────────────────────┐
# │ OWASP ZAP     - Webアプリ脆弱性スキャン          │
# │ Burp Suite    - インターセプトプロキシ・ペンテスト │
# │ Nmap          - ネットワークポートスキャン          │
# │ Metasploit    - 侵入テストフレームワーク           │
# │ OWASP Dependency-Check - 依存関係の脆弱性確認    │
# └─────────────────────────────────────────────────┘

---

<a id="section-4-4"></a>

### 4.4 信頼性テスト（Reliability Testing）

> 信頼性（Reliability）= ソフトウェアが指定された期間・条件下で機能を実行できる能力

> ISO 25010 の信頼性サブ特性：
>   1. 成熟性（Maturity）        → 通常運用中の故障発生頻度
>   2. 可用性（Availability）    → 使用可能な状態にある時間の割合
>   3. 耐障害性（Fault Tolerance）→ 故障時も機能を維持できる能力
>   4. 回復性（Recoverability）  → 障害後に回復できる速さ

**各サブ特性のテスト方法：**

```python
# 4.4.2 成熟性テスト（Testing for Maturity）

class MaturityTest:
    """システムの成熟度（故障頻度）を測定するテスト"""
    
    def calculate_MTBF(self, failure_log: list) -> float:
        """
        MTBF（Mean Time Between Failures）= 平均故障間隔
        = 総稼働時間 / 故障回数
        """
        if not failure_log:
            return float('inf')
        
        total_uptime = sum(f["uptime_before_failure"] for f in failure_log)
        return total_uptime / len(failure_log)
    
    def test_reliability_growth(self, system, test_duration_hours: int = 168):
        """
        信頼性成長テスト（Reliability Growth Test）
        → テスト実行中に時間とともに故障率が低下することを確認
        """
        failure_intervals = []  # 故障間隔のリスト
        
        # 1週間（168時間）連続実行テスト
        start_time = time.time()
        last_failure = start_time
        
        while (time.time() - start_time) < (test_duration_hours * 3600):
            try:
                system.execute_typical_workload()
            except Exception:
                current_time = time.time()
                interval = current_time - last_failure
                failure_intervals.append(interval)
                last_failure = current_time
        
        # 故障間隔が時間とともに増加していること（信頼性成長）を確認
        if len(failure_intervals) >= 2:
            assert failure_intervals[-1] > failure_intervals[0], \
                "信頼性が成長していない（故障間隔が増加していない）"

# 4.4.3 可用性テスト（Testing for Availability）
def calculate_availability(uptime: float, total_time: float) -> float:
    """
    可用性 = 稼働時間 / 合計時間 × 100
    
    99.9% = "3ナイン" = 年間約8.76時間のダウンタイム
    99.99% = "4ナイン" = 年間約52.6分のダウンタイム
    99.999% = "5ナイン" = 年間約5.26分のダウンタイム
    """
    return (uptime / total_time) * 100

# 4.4.4 耐障害性テスト（Testing for Fault Tolerance）
def test_graceful_degradation(system, dependencies):
    """
    障害時のグレースフルデグラデーション（優雅な機能縮退）テスト
    → 外部依存が失敗しても、コアサービスが継続できること
    """
    
    # 外部決済サービスをダウンさせる
    dependencies["payment_service"].inject_failure()
    
    # コアサービス（商品表示・カート）は動作すること
    response = system.get("/products")
    assert response.status_code == 200, "決済サービス障害時も商品表示は可能"
    
    # 決済機能のみ適切なエラーメッセージを表示すること
    response = system.post("/checkout")
    assert response.status_code == 503, "決済サービス障害を適切に通知"
    assert "payment service unavailable" in response.text.lower()

# 4.4.5 回復性テスト（Testing for Recoverability）
def test_recovery_time_objective(system):
    """
    RTO（Recovery Time Objective）= 目標復旧時間のテスト
    → 障害からどれだけ速く回復できるかを検証
    """
    
    # システムを強制クラッシュさせる
    system.inject_crash()
    crash_time = time.time()
    
    # 自動回復を待機
    while not system.is_healthy():
        time.sleep(1)
        if time.time() - crash_time > 300:  # 5分超でタイムアウト
            assert False, "RTO（5分）を超過した"
    
    recovery_time = time.time() - crash_time
    assert recovery_time <= 60, f"目標RTO（60秒）を超過: {recovery_time:.1f}秒"

---

<a id="section-4-5"></a>

### 4.5 パフォーマンステスト（Performance Testing）

> ISO 25010 の性能効率性サブ特性：

>   1. 時間特性（Time Behavior）
>      → レスポンスタイム / スループット / 処理能力

>   2. リソース利用率（Resource Utilization）
>      → CPU / メモリ / ディスク I/O / ネットワーク帯域の使用効率

>   3. キャパシティ（Capacity）
>      → 最大負荷に耐えられるシステム限界値

**パフォーマンステストの種類（重要！試験頻出）：**

> パフォーマンステストの分類：

>   1. ロードテスト（Load Testing）
>      → 期待される通常の負荷下での動作確認
>      → 例: 同時100ユーザー、ピーク時 500リクエスト/秒

>   2. ストレステスト（Stress Testing）
>      → システムの限界値を超えた場合の動作確認
>      → 例: 同時5,000ユーザーまで徐々に負荷を上げる
>      → 目的: 破断点（Breaking Point）の特定

>   3. スパイクテスト（Spike Testing）
>      → 急激な負荷の増加（スパイク）への対応確認
>      → 例: 通常100ユーザー → 突然5,000ユーザー
>      → 目的: 急激な需要変動への耐性確認

>   4. ソークテスト（Soak Testing / Endurance Testing）
>      → 長時間継続負荷での安定性確認
>      → 例: 通常負荷で48時間連続実行
>      → 目的: メモリリーク・リソース枯渇の検出

>   5. スケーラビリティテスト（Scalability Testing）
>      → 負荷増加に対してリニアにスケールするかの確認
>      → 水平スケール（サーバー追加）/ 垂直スケール（スペックアップ）

**パフォーマンステスト実装例：**

```python
# k6 を使ったパフォーマンステスト（JavaScript）

"""
// load_test.js（k6スクリプト）
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    // ロードテスト設定
    stages: [
        { duration: '2m', target: 100 },   // 2分かけて100ユーザーまで増加
        { duration: '5m', target: 100 },   // 5分間100ユーザーを維持
        { duration: '2m', target: 0 },     // 2分かけてゼロに減少
    ],
    thresholds: {
        http_req_duration: ['p(95)<2000'],   // 95%のリクエストが2秒以内
        http_req_failed: ['rate<0.01'],       // エラー率1%未満
    },
};

export default function() {
    const response = http.get('https://api-staging.example.com/v1/products');
    
    check(response, {
        'status is 200': (r) => r.status === 200,
        'response time < 2s': (r) => r.timings.duration < 2000,
        'has products': (r) => JSON.parse(r.body).length > 0,
    });
    
    sleep(1);  // 1秒待機（実際のユーザー行動をシミュレート）
}
"""

# Python + Locust によるパフォーマンステスト
from locust import HttpUser, task, between

class ECommerceUser(HttpUser):
    """Eコマースサイトの典型的なユーザー動作を模倣"""
    wait_time = between(1, 5)  # 1〜5秒の待機時間
    
    @task(3)  # 相対的な重み=3（他のタスクより3倍多く実行）
    def browse_products(self):
        """商品一覧の閲覧"""
        self.client.get("/api/v1/products")
    
    @task(1)
    def search_products(self):
        """商品検索"""
        self.client.get("/api/v1/products?q=laptop")
    
    @task(1)
    def view_product_detail(self):
        """商品詳細ページの表示"""
        self.client.get("/api/v1/products/12345")

**パフォーマンステスト計画の重要ポイント：**

> パフォーマンステスト計画で定義すべき要素：

>   1. パフォーマンス目標（SLA）
>      → 例：「95パーセンタイル応答時間 < 2秒」
>      → 例：「スループット ≥ 1,000 RPS（リクエスト/秒）」
>      → 例：「エラー率 < 0.1%」

>   2. テスト環境の定義
>      → 本番環境との構成比較（スペック・ネットワーク）
>      → テストデータの量と多様性（本番データと同等規模）

>   3. 負荷モデル（Load Model）
>      → 想定ユーザー数・ユーザー行動パターン
>      → ピーク時とオフピーク時の違い

>   4. パフォーマンスメトリクス
>      → 収集するメトリクス（CPU、メモリ、レスポンス時間等）
>      → 監視ツール（Grafana + Prometheus等）

>   5. リスクと軽減策
>      → 本番環境への影響リスク
>      → テスト失敗時のロールバック計画

---

<a id="section-4-6"></a>

### 4.6 保守性テスト（Maintainability Testing）

> ISO 25010 保守性サブ特性：

>   1. モジュール性（Modularity）
>      → コンポーネントの独立性・単一責任

>   2. 再利用性（Reusability）
>      → コンポーネントを再利用できるか

>   3. 分析可能性（Analysability）
>      → 問題の原因特定・影響範囲分析のしやすさ

>   4. 変更可能性（Modifiability）
>      → コードの変更容易性

>   5. テスト可能性（Testability）
>      → テストケースの作成・実行のしやすさ

> 保守性の静的・動的テスト：

>   静的保守性テスト（静的分析ツールで測定）：
>     ✓ 循環的複雑度（目標: 10以下）
>     ✓ コード重複率（目標: 5%以下）
>     ✓ コメント密度（目標: 20%以上）
>     ✓ クラス/メソッドの結合度

>   動的保守性テスト（コード変更後に確認）：
>     ✓ 変更による影響範囲の確認
>     ✓ 既存機能の回帰テスト
>     ✓ 変更後のパフォーマンスへの影響確認

```python
# 保守性測定の例

def calculate_maintainability_index(
    halstead_volume: float,
    cyclomatic_complexity: int,
    lines_of_code: int
) -> float:
    """
    保守性指標（Maintainability Index）の計算
    (Visual Studio等のIDEで使用される指標)
    
    MI = 171 - 5.2 * ln(V) - 0.23 * CC - 16.2 * ln(LOC)
    
    V = ハルステッドボリューム
    CC = 循環的複雑度
    LOC = コード行数
    
    解釈：
      85-100: 非常に保守しやすい 🟢
      65-84:  保守しやすい      🟡
      0-64:   保守困難          🔴
    """
    import math
    
    if halstead_volume <= 0 or lines_of_code <= 0:
        return 0
    
    mi = (171 
          - 5.2 * math.log(halstead_volume) 
          - 0.23 * cyclomatic_complexity 
          - 16.2 * math.log(lines_of_code))
    
    # 0〜100 にクリッピング
    return max(0, min(100, mi))

---

<a id="section-4-7"></a>

### 4.7 移植性テスト（Portability Testing）

> ISO 25010 移植性サブ特性：

>   1. 適応性（Adaptability）
>      → 異なるハードウェア、OS、クラウド環境への適応

>   2. インストール可能性（Installability）
>      → インストール・アンインストール・アップグレードの容易さ

>   3. 置換可能性（Replaceability）
>      → 同様の製品に置き換え可能かどうか

**インストール可能性テストのチェックリスト：**

> インストール可能性テスト項目：

>   ✅ クリーンインストール
>      → 依存関係がない環境でのインストール成功確認

>   ✅ アップグレードテスト
>      → v1.0 → v2.0 アップグレード後も設定・データが維持される

>   ✅ ロールバックテスト
>      → アップグレード失敗時に旧バージョンに戻せること

>   ✅ アンインストールテスト
>      → アンインストール後にゴミファイル・レジストリエントリが残らない

>   ✅ 並列インストールテスト
>      → 旧バージョンと新バージョンが共存できること（必要な場合）

>   ✅ サイレントインストールテスト
>      → ユーザー介入なしの自動インストールが可能か（CI/CD連携）

```python
# 適応性テスト例（マルチプラットフォーム対応確認）

import sys
import platform

def test_platform_compatibility():
    """複数プラットフォームでの動作確認"""
    
    current_platform = platform.system()
    python_version = sys.version_info
    
    # サポート対象プラットフォームの確認
    supported_platforms = ["Windows", "Linux", "Darwin"]  # macOS = "Darwin"
    assert current_platform in supported_platforms, \
        f"非サポートプラットフォーム: {current_platform}"
    
    # サポート対象Pythonバージョンの確認
    assert python_version >= (3, 9), \
        f"Python 3.9以上が必要: {python_version}"

# コンテナ（Docker）での移植性確認
"""
FROM python:3.12-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

# 複数環境での動作確認
RUN python -m pytest tests/portability/ -v

CMD ["python", "app.py"]
"""

---

<a id="section-4-8"></a>

### 4.8 互換性テスト（Compatibility Testing）

> ISO 25010 互換性サブ特性：

>   1. 共存性（Co-existence）
>      → 他のソフトウェアと同じ環境で共存できるか

>   2. 相互運用性（Interoperability）
>      → 他のシステム・製品とデータを交換・利用できるか

> 互換性テストの種類：

>   ブラウザ互換性テスト：
>     → Chrome, Firefox, Safari, Edge での表示・動作確認
>     → モバイルブラウザ（iOS Safari / Android Chrome）

>   後方互換性テスト（Backward Compatibility）：
>     → 旧バージョンのデータ・APIとの互換性

>   APIの前方互換性（Forward Compatibility）：
>     → 新バージョンのAPIが旧クライアントでも動作する

>   データ形式の互換性：
>     → JSON, XML, CSV, Protocol Buffersの相互変換

```python
# ブラウザ互換性テスト（Playwright によるクロスブラウザテスト）

from playwright.sync_api import sync_playwright

def test_cross_browser_compatibility():
    """複数ブラウザでのホームページ表示確認"""
    
    browsers_to_test = ["chromium", "firefox", "webkit"]  # webkit = Safari
    
    with sync_playwright() as p:
        for browser_name in browsers_to_test:
            browser = getattr(p, browser_name).launch()
            page = browser.new_page()
            
            page.goto("https://staging.example.com")
            
            # 各ブラウザで同じ要素が表示されることを確認
            assert page.title() == "Example Store | Welcome"
            assert page.is_visible("#main-nav"), f"{browser_name}: ナビが表示されない"
            assert page.is_visible("#product-grid"), f"{browser_name}: 商品グリッドが表示されない"
            
            # フォントレンダリングの確認（視覚的テスト）
            screenshot = page.screenshot(path=f"screenshots/{browser_name}.png")
            
            browser.close()

# 相互運用性テスト（外部API連携）
def test_api_interoperability():
    """外部システムとのAPI連携テスト"""
    
    # 異なるシステム間でのデータ交換テスト
    test_data = {"user_id": "12345", "amount": 100.00, "currency": "JPY"}
    
    # システムA → システムB へのデータ送信
    response = requests.post(
        "https://external-system-b.example.com/api/process",
        json=test_data,
        headers={"Content-Type": "application/json"}
    )
    
    assert response.status_code == 200
    result = response.json()
    
    # データの整合性確認（送信データと受信データが一致）
    assert result["processed_user_id"] == test_data["user_id"]
    assert result["status"] == "success"

---

<a id="section-4-9"></a>

### 4.9 オペレーショナルプロファイル（Operational Profiles）

> オペレーショナルプロファイルとは？

>   → 実際のユーザーがシステムをどのように使うかを統計的に表したモデル
>   → 使用頻度の高い機能を重点的にテストするための根拠

> 例：Eコマースシステムのオペレーショナルプロファイル：

>   オペレーション           使用確率    テスト優先度
>   ──────────────────────────────────────────────
>   商品検索                45%         最高
>   商品詳細ページ表示       30%         高
>   カートへの追加           15%         高
>   決済処理                 7%          高（リスク）
>   ユーザープロフィール更新  2%          中
>   注文履歴確認             1%          低

> オペレーショナルプロファイルの活用：
>   ✓ リリース判断の優先順位付け
>   ✓ 回帰テストスイートの絞り込み
>   ✓ パフォーマンステストのシナリオ設計
>   ✓ リスクベーステストの根拠

---

<a id="chapter-5"></a>

## 📝 Chapter 5: レビュー（Reviews）
>
> 165分 | 試験配点の約14%

### 5.1 TTAのレビュー参加タスク

> 技術テストアナリストがレビューに参加する理由：

>   技術的専門知識を活用：
>   ✓ コードの典型的な欠陥パターンの知識
>   ✓ アーキテクチャの脆弱性の識別
>   ✓ セキュリティ・パフォーマンスリスクの早期発見

>   レビューの種類とTTAの役割：

>   アーキテクチャレビュー：
>     → システム設計の技術的欠陥を識別
>     → 性能・セキュリティ・保守性の観点からの評価

>   コードレビュー：
>     → コードの品質・セキュリティ欠陥の識別
>     → 命名規則・コーディング標準への準拠確認
>     → テスト可能性の確認

### 5.2 レビューでのチェックリスト活用（Using Checklists in Reviews）

#### 5.2.1 アーキテクチャレビューチェックリスト

> TTA のためのアーキテクチャレビューチェックリスト：

> セキュリティアーキテクチャ：
>   □ 認証・認可のメカニズムが適切に設計されているか
>   □ データの暗号化（保管時・転送時）が計画されているか
>   □ セキュリティ境界（Security Boundary）が明確か
>   □ 入力検証が全ての信頼境界で実装されているか

> パフォーマンスアーキテクチャ：
>   □ ボトルネックになりやすい箇所が特定・対処されているか
>   □ キャッシュ戦略が適切に設計されているか
>   □ データベースのインデックスが考慮されているか
>   □ 非同期処理・並列処理の設計が適切か

> 信頼性アーキテクチャ：
>   □ 単一障害点（SPOF: Single Point of Failure）がないか
>   □ フォールバック・フェイルオーバーが設計されているか
>   □ データバックアップ・リストア戦略が明確か

> 保守性アーキテクチャ：
>   □ コンポーネントが適切に分離（疎結合）されているか
>   □ 依存関係が最小化・明確化されているか
>   □ ロギング・監視の仕組みが設計されているか

#### 5.2.2 コードレビューチェックリスト

```python
# TTA のためのコードレビューチェックリスト（セキュリティ観点）

"""
コードレビューチェックリスト：

【セキュリティ】
□ ハードコードされた認証情報（パスワード・APIキー）がないか
□ ユーザー入力の検証・サニタイズが実装されているか
□ SQLクエリがプリペアドステートメントを使用しているか
□ エラーメッセージに機密情報が含まれていないか
□ 機密データが適切に暗号化されているか

【パフォーマンス】
□ N+1クエリ問題がないか（ループ内でDBアクセスしていないか）
□ 不必要なオブジェクト生成がないか
□ 再計算可能な処理がキャッシュされているか

【信頼性】
□ 全ての例外がキャッチ・ハンドリングされているか
□ リソース（DB接続・ファイル等）が確実にクローズされているか
□ トランザクション処理が適切に実装されているか

【保守性】
□ 関数・変数の命名が意図を明確に表しているか
□ 複雑なロジックにコメントがあるか
□ マジックナンバーが定数として定義されているか
□ 重複したコードがないか（DRY原則）
□ 単一責任の原則（SRP）に従っているか
"""

# 悪いコードの例と修正（コードレビューで指摘する観点）
class BadUserService:
    def login(self, username, password):
        # ❌ SQLインジェクション脆弱性
        query = f"SELECT * FROM users WHERE username='{username}'"
        user = self.db.execute(query)
        
        # ❌ ハードコードされた管理者チェック
        if username == "admin" and password == "admin123":
            return True
            
        # ❌ エラーメッセージが詳細すぎる
        if not user:
            raise Exception(f"User '{username}' not found in database 'users_table'")
        
        return user

class GoodUserService:
    def login(self, username: str, password: str) -> bool:
        # ✅ プリペアドステートメントでSQLインジェクション防止
        query = "SELECT * FROM users WHERE username = ?"
        user = self.db.execute(query, (username,))
        
        # ✅ 認証情報は環境変数から取得
        # （admin ハードコードは不要・本来不要な機能）
        
        if not user:
            # ✅ 情報を露出しない汎用的なエラーメッセージ
            raise AuthenticationError("Invalid credentials")
        
        # ✅ bcryptでパスワードを安全に比較
        return bcrypt.check_password_hash(user["password"], password)

---

<a id="chapter-6"></a>

## ⚙️ Chapter 6: テストツールと自動化（Test Tools and Automation）
>
> 180分 | 試験配点の約15%

### 6.1 テスト自動化プロジェクトの定義（Defining the Test Automation Project）

#### 6.1.1 自動化アプローチの選択（Selecting the Automation Approach）

> テスト自動化アプローチの種類と特徴：

> 1. キャプチャ/リプレイ（Capture & Replay）
>    ✓ 素早く作成できる・技術スキル不要
>    ✗ メンテナンスコスト高い・再利用性低い
>    用途: PoC、一時的な自動化

> 2. データ駆動テスト（Data-Driven Testing）
>    ✓ テストデータのみ変更でテストを追加できる
>    ✓ 非エンジニアがデータを管理できる
>    用途: 入力バリデーション、境界値テスト

> 3. キーワード駆動テスト（Keyword-Driven Testing）
>    ✓ 非技術者がテストを記述できる
>    ✓ 高い再利用性
>    ✗ キーワード開発コストが高い
>    用途: BDDシナリオ、受入テスト

> 4. モデルベーステスト（Model-Based Testing）
>    ✓ テストケースの自動生成
>    ✓ カバレッジの最適化
>    ✗ モデル作成に専門知識が必要
>    用途: 状態機械を持つシステム

> 5. コードベーステスト（Code-Based / Scripted Testing）
>    ✓ 柔軟性が高い・条件分岐・ループ可能
>    ✓ バージョン管理・再利用・保守が容易
>    ✗ プログラミングスキルが必要
>    用途: API テスト・ユニットテスト・E2E

**自動化のコストと効果の評価：**

```python
def calculate_automation_roi(
    manual_test_time_per_run: float,  # 手動テスト1回あたりの時間（時間）
    number_of_test_cases: int,         # テストケース数
    runs_per_year: int,                # 年間実行回数
    automation_development_cost: float,# 自動化開発コスト（時間）
    automation_maintenance_per_year: float,  # 年間メンテナンスコスト（時間）
    hourly_rate: float = 8000          # 時給（円）
) -> dict:
    """テスト自動化のROI計算"""
    
    # 年間手動テストコスト
    annual_manual_cost = (manual_test_time_per_run * 
                          number_of_test_cases * 
                          runs_per_year * hourly_rate)
    
    # 自動テストの実行コスト（ほぼゼロ、環境コストのみ）
    annual_automation_run_cost = automation_maintenance_per_year * hourly_rate
    
    # 自動化による年間節約額
    annual_savings = annual_manual_cost - annual_automation_run_cost
    
    # 初期投資
    initial_investment = automation_development_cost * hourly_rate
    
    # ROI計算
    roi_percentage = ((annual_savings - initial_investment) / 
                      initial_investment * 100)
    
    # 投資回収期間（Break-Even Point）
    break_even_months = (initial_investment / (annual_savings / 12))
    
    return {
        "annual_manual_cost": f"¥{annual_manual_cost:,.0f}",
        "annual_savings": f"¥{annual_savings:,.0f}",
        "initial_investment": f"¥{initial_investment:,.0f}",
        "roi_percentage": f"{roi_percentage:.0f}%",
        "break_even_months": f"{break_even_months:.1f}ヶ月"
    }

# 例：50テストケース × 年26回実行 × 30分/TC
result = calculate_automation_roi(
    manual_test_time_per_run=0.5,   # 30分
    number_of_test_cases=50,
    runs_per_year=26,               # 2週間スプリント
    automation_development_cost=200, # 200時間の開発
    automation_maintenance_per_year=50,
)
# → ROI: 数百%・Break-Even: 2〜3ヶ月

#### 6.1.2 ビジネスプロセスのモデル化（Modeling Business Processes for Automation）

> 自動化のためのビジネスプロセスモデリング：

> 適している自動化対象：
>   ✓ 繰り返し実行される回帰テスト
>   ✓ 安定した機能（UI変更が少ない）
>   ✓ 大量データを使うテスト
>   ✓ 複数環境・ブラウザでの実行が必要

> 適していない自動化対象：
>   ✗ 探索的テスト（創造性・直感が必要）
>   ✗ UIが頻繁に変わる開発初期段階
>   ✗ 一度しか実行しないテスト
>   ✗ 主観的な評価（ユーザビリティ）

### 6.2 特定のテストツール（Specific Test Tools）

#### 6.2.1 障害注入ツール（Fault Seeding Tools）

> フォールトシーディング（Fault Seeding）とは？

>   → テスト対象システムに意図的にバグを「植える（seeded）」
>   → そのバグが検出されたかでテストスイートの品質を測定

> 用途：
>   ✓ テストケースの有効性評価
>   ✓ テストカバレッジの測定
>   ✓ テスト戦略の改善

> ミューテーションテスト（Mutation Testing）：
>   → 最も代表的なフォールトシーディング手法
>   → コードの微小な変更（ミュータント）を生成し、テストが検出するか確認

>   例（PIT Mutation Testing - Java）：
>     元のコード:   if (age >= 18)
>     ミュータント: if (age > 18)    ← 境界値を変更
>     → テストがこのミュータントを「殺せる」か確認

```python
# Mutmut（Python ミューテーションテスト）の使用例

# 元のコード（check.py）
def is_adult(age: int) -> bool:
    return age >= 18

# テストコード（test_check.py）
def test_is_adult():
    assert is_adult(18) == True   # ← ミュータント age > 18 を殺せる！
    assert is_adult(17) == False  # ← ミュータント age >= 17 を殺せる！
    assert is_adult(0) == False

# $ mutmut run --paths-to-mutate check.py
# Mutmut が以下のミュータントを生成：
#   ミュータント1: return age > 18   → テストが検出できるか？
#   ミュータント2: return age <= 18  → テストが検出できるか？
#   ミュータント3: return age != 18  → テストが検出できるか？

# ミューテーションスコア = 殺されたミュータント / 総ミュータント × 100
# 目標: 80%以上のミューテーションスコア

#### 6.2.2 障害注入ツール（Fault Injection Tools）

> フォールトインジェクション（Fault Injection）とは？

>   → 実行時にシステムに障害を注入して、エラーハンドリングを検証
>   → 信頼性テスト・耐障害性テストに使用

> ツール例：
>   ✓ Chaos Monkey（Netflix）: AWSインスタンスをランダムに終了
>   ✓ Chaos Toolkit: 様々な障害シナリオを定義・実行
>   ✓ LitmusChaos: Kubernetes 向けカオスエンジニアリング
>   ✓ Gremlin: SaaS型カオスエンジニアリングプラットフォーム

```python
# Chaos Toolkit での障害注入例

"""
{
    "title": "決済サービス障害時のシステム耐性テスト",
    "description": "外部決済サービスが応答しない場合に適切に対応できるか",
    "method": [
        {
            "type": "action",
            "name": "外部決済APIの接続をブロック",
            "provider": {
                "type": "process",
                "path": "iptables",
                "arguments": "-A OUTPUT -d payment-api.example.com -j DROP"
            }
        }
    ],
    "rollbacks": [
        {
            "type": "action",
            "name": "ブロックを解除",
            "provider": {
                "type": "process",
                "path": "iptables",
                "arguments": "-D OUTPUT -d payment-api.example.com -j DROP"
            }
        }
    ],
    "steady-state-hypothesis": {
        "title": "コアサービスが継続して動作すること",
        "probes": [
            {
                "type": "probe",
                "name": "商品ページが200を返すこと",
                "tolerance": 200,
                "provider": {
                    "type": "http",
                    "url": "https://shop.example.com/products"
                }
            }
        ]
    }
}
"""

#### 6.2.3 パフォーマンステストツール（Performance Testing Tools）

> パフォーマンステストツール比較（2025年版）：

> ┌──────────────────────────────────────────────────────────────┐
> │ ツール名    │ 言語     │ 特徴                   │ 推奨度      │
> ├────────────┼─────────┼───────────────────────┼───────────┤
> │ k6         │ JS/TS   │ Grafana製、CI/CD統合    │ ⭐⭐⭐⭐⭐   │
> │ JMeter     │ GUI/XML │ 老舗、豊富なプラグイン   │ ⭐⭐⭐⭐    │
> │ Gatling    │ Scala   │ 高スループット、詳細レポート│ ⭐⭐⭐⭐   │
> │ Locust     │ Python  │ 分散実行、コードで定義   │ ⭐⭐⭐⭐    │
> │ Artillery  │ Node.js │ 軽量・CI/CD向け         │ ⭐⭐⭐      │
> └──────────────────────────────────────────────────────────────┘

#### 6.2.4 Webテストツール（Tools for Testing Websites）

> Webテストツール比較（2025年版）：

> ┌──────────────────────────────────────────────────────────────┐
> │ ツール名     │ 言語            │ 特徴                  │ 推奨度   │
> ├─────────────┼───────────────┼─────────────────────┼────────┤
> │ Playwright   │ JS/TS/Python  │ クロスブラウザ・高速    │ ⭐⭐⭐⭐⭐ │
> │ Cypress      │ JavaScript    │ タイムトラベルデバッグ  │ ⭐⭐⭐⭐   │
> │ Selenium     │ 多言語         │ レガシー対応・広範囲   │ ⭐⭐⭐     │
> │ OWASP ZAP   │ GUI/スクリプト │ セキュリティスキャン   │ ⭐⭐⭐⭐⭐ │
> │ Lighthouse  │ CLI/Node.js   │ パフォーマンス/アクセシビリティ│ ⭐⭐⭐⭐ │
> └──────────────────────────────────────────────────────────────┘

#### 6.2.7 モバイルアプリテストツール（Tools to Support Mobile Application Testing）

> モバイルテストツール（2025年版）：

> ┌──────────────────────────────────────────────────────────────┐
> │ ツール名      │ 対応OS               │ 特徴                  │
> ├─────────────┼────────────────────┼─────────────────────┤
> │ Appium       │ iOS/Android          │ オープンソース・Selenium互換│
> │ XCUITest     │ iOS のみ             │ Apple公式・高速         │
> │ Espresso     │ Android のみ         │ Google公式・高速        │
> │ Detox        │ iOS/Android          │ React Native向け       │
> │ BrowserStack │ クラウド（実機）        │ 実機テスト・多デバイス  │
> │ Firebase Test Lab│ クラウド（実機）   │ Google製・Android向け  │
> └──────────────────────────────────────────────────────────────┘

---

<a id="exam-tips"></a>

## 📝 試験対策・サンプル問題

### 試験概要の再確認

> CTAL-TTA v4.0 試験仕様：
>   問題数:    45問（多肢選択問題）
>   配点:      各問題は1〜2点（合計78点満点）
>   合格点:    51点（約65%）
>   試験時間:  120分 / 非英語話者: +25% = 150分

>   認知レベル別出題：
>     K2（理解）: テクニカル概念の説明・分類
>     K3（適用）: カバレッジ計算・テストケース設計への適用
>     K4（分析）: 複雑なシナリオの分析・最適技法の選択

### 章別重要度と配点

| 章 | テーマ | 配点（推定） | 重要度 |
|---|--------|-----------|-------|
| 1 | リスクベーステスト | ~4問 | ★★★ |
| **2** | **ホワイトボックステスト技法** | **~15問** | **★★★★★** |
| 3 | 静的・動的分析 | ~9問 | ★★★★ |
| **4** | **品質特性のための技術テスト** | **~14問** | **★★★★★** |
| 5 | レビュー | ~8問 | ★★★ |
| 6 | テストツールと自動化 | ~9問 | ★★★★ |

### 必ず覚える重要概念

> ✅ カバレッジの強さ（弱い順）：
>    ステートメント < デシジョン < MC/DC < 多重条件

> ✅ MC/DC の最小テストケース数：
>    n個の原子条件 → 最小 n+1 テストケース

> ✅ 安全関連システムのカバレッジ要件（IEC 61508）：
>    SIL1: ステートメント / SIL2: デシジョン
>    SIL3: MC/DC / SIL4: 多重条件

> ✅ パフォーマンステストの種類：
>    ロードテスト / ストレステスト / スパイクテスト /
>    ソークテスト / スケーラビリティテスト

> ✅ 信頼性サブ特性（ISO 25010）：
>    成熟性 / 可用性 / 耐障害性 / 回復性

> ✅ 静的分析で検出できること：
>    制御フロー問題・データフロー問題・コード複雑度・
>    コーディング標準違反

> ✅ 動的分析で検出できること：
>    メモリリーク・ワイルドポインタ・パフォーマンスボトルネック

> ✅ TTAの役割（TM・TAとの違い）：
>    TM: リスク全体管理
>    TA: ビジネスインパクト（影響度）を評価
>    TTA: 技術的リスクの「発生確率（Likelihood）」を提案

> ✅ フォールトシーディング vs フォールトインジェクション：
>    シーディング: テスト品質測定のためにバグを植える
>    インジェクション: 耐障害性テストのために障害を実行時に注入

### サンプル問題と解説

---

**問1（K4 / Chapter 2 ホワイトボックステスト技法）**

以下の条件式に対してMC/DCテストを適用する場合、最小テストケース数はいくつか？

`(A AND B) OR C`

A) 3  
B) 4  
C) 5  
D) 8  

<details>
<summary>📌 解答を見る</summary>

**正解: B（4テストケース）**

MC/DC の最小テスト数 = 原子条件数（n）+ 1 = 3 + 1 = **4**

3つの原子条件（A, B, C）に対して：
- 条件Aが独立して結果を変えるペアを1組
- 条件Bが独立して結果を変えるペアを1組  
- 条件Cが独立して結果を変えるペアを1組
- 重複するテストケースは共有可能

例えば：
- TC1: A=T, B=T, C=F → True（AとBの独立性証明に使用）
- TC2: A=F, B=T, C=F → False
- TC3: A=T, B=F, C=F → False
- TC4: A=T, B=F, C=T → True（Cの独立性証明）

D)の8は多重条件テスト（2^3=8）の場合

</details>

---

**問2（K3 / Chapter 2 ホワイトボックステスト技法）**

IEC 61508 の安全整合性レベル（SIL）3 に対応するシステムで推奨されるホワイトボックステスト技法はどれか？

A) ステートメントテスト  
B) デシジョンテスト  
C) MC/DC テスト  
D) 多重条件テスト  

<details>
<summary>📌 解答を見る</summary>

**正解: C（MC/DC テスト）**

IEC 61508 の SIL レベルと推奨技法の対応：
- SIL 1: ステートメントテスト
- SIL 2: デシジョンテスト
- **SIL 3: MC/DC テスト** ✅
- SIL 4: 多重条件テスト

航空宇宙規格 DO-178C では：
- Level B: MC/DC が必須
- Level A: 多重条件テストが必須

</details>

---

**問3（K2 / Chapter 3 静的・動的分析）**

次のうち、動的分析のみで検出できる問題はどれか？

A) コードの循環的複雑度が高い  
B) 変数が定義されているが使用されていない  
C) 実行時のメモリリーク  
D) コーディング規約違反  

<details>
<summary>📌 解答を見る</summary>

**正解: C（実行時のメモリリーク）**

分析技法と検出可能な問題：
- A) 循環的複雑度 → **静的分析**で測定（コード構造から計算）
- B) 未使用変数 → **静的分析**（データフロー分析）で検出
- **C) 実行時のメモリリーク → 動的分析のみ**（実際に実行してメモリ使用を監視）
- D) コーディング規約違反 → **静的分析**（lint ツール等）で検出

メモリリークは**実際に実行**しないと検出できない典型的な動的分析の検出対象。

</details>

---

**問4（K3 / Chapter 4 品質特性）**

パフォーマンステストにおいて、通常負荷（100ユーザー）から突然10倍の負荷（1,000ユーザー）に増加した場合のシステム動作を検証するテストタイプはどれか？

A) ロードテスト（Load Testing）  
B) ストレステスト（Stress Testing）  
C) スパイクテスト（Spike Testing）  
D) ソークテスト（Soak Testing）  

<details>
<summary>📌 解答を見る</summary>

**正解: C（スパイクテスト）**

パフォーマンステストの種類：
- A) ロードテスト → 通常の期待される負荷での動作確認
- B) ストレステスト → システム限界を超えるまで徐々に負荷を上げる
- **C) スパイクテスト → 急激な負荷の増加への対応確認** ✅
- D) ソークテスト → 長時間継続運用での安定性確認（メモリリーク検出等）

スパイクテストは、フラッシュセール・ニュースによる突発的アクセス集中などを想定したテスト。

</details>

---

**問5（K4 / Chapter 1 リスクベーステスト）**

技術テストアナリスト（TTA）がリスク評価において主に担当する役割として最も適切なものはどれか？

A) リスク全体の管理と最終リスクレベルの決定  
B) ビジネスへの影響度（Impact）の評価  
C) 技術的製品リスクの発生確率（Likelihood）の提案  
D) リスクワークショップのファシリテーション  

<details>
<summary>📌 解答を見る</summary>

**正解: C（技術的製品リスクの発生確率の提案）**

各役割の担当：
- A) 最終リスクレベルの決定 → **テスト管理者（TM）**
- B) ビジネスへの影響度（Impact）の評価 → **テストアナリスト（TA）**
- **C) 技術的製品リスクの発生確率（Likelihood）の提案 → TTA** ✅
- D) ワークショップのファシリテーション → **テスト管理者（TM）**

TTAは技術的専門知識（コードの複雑さ・セキュリティ・パフォーマンスリスク等）を活かして、リスクの「発生確率」を評価する。

</details>

---

### 試験直前チェックリスト

> ✅ Chapter 2 ホワイトボックス技法（最重要）:

> □ ステートメントカバレッジの計算式を説明できる
> □ デシジョンテストとブランチテストの関係を説明できる
> □ MC/DC の4つの要件を説明できる
> □ MC/DC の最小テストケース数（n+1）を計算できる
> □ 多重条件テストとMC/DCの違いを説明できる
> □ カバレッジの包含関係（ステートメント < デシジョン < MC/DC < 多重条件）を説明できる
> □ SIL レベルと推奨テスト技法の対応表を暗記した
> □ DO-178C Level A/B/C の要件を説明できる

> ✅ Chapter 3 静的・動的分析:

> □ 制御フロー分析と循環的複雑度の関係を説明できる
> □ データフロー分析の3パターン（dd/du/ur）を説明できる
> □ 静的分析で検出できる問題と動的分析で検出できる問題を分類できる
> □ メモリリーク・ワイルドポインタの概念を説明できる
> □ 動的分析によるパフォーマンス分析の手法を説明できる

> ✅ Chapter 4 品質特性（最重要）:

> □ ISO 25010 の8つの品質特性のうちTTA担当を5つ以上挙げられる
> □ セキュリティのCIA要素を説明できる
> □ OWASP Top 10 の主要脆弱性を3つ以上説明できる
> □ 信頼性の4サブ特性（成熟性・可用性・耐障害性・回復性）を説明できる
> □ MTBF・RTO・RPO の意味を説明できる
> □ 5種類のパフォーマンステストを区別して説明できる
> □ 保守性の5サブ特性を説明できる
> □ 移植性の3サブ特性（適応性・インストール可能性・置換可能性）を説明できる

> ✅ Chapter 5 レビュー:

> □ TTAがレビューで担当する技術観点を3つ以上挙げられる
> □ アーキテクチャレビューとコードレビューのチェックポイントを説明できる

> ✅ Chapter 6 テストツールと自動化:

> □ フォールトシーディングとフォールトインジェクションの違いを説明できる
> □ ミューテーションテストの目的を説明できる
> □ 主要なパフォーマンステストツールを3つ挙げられる
> □ 自動化アプローチの種類（キャプチャ/データ駆動/キーワード駆動/モデルベース）を説明できる

---

<a id="references"></a>

## 📚 参照URL一覧

### 🏛️ 公式ISTQB® リソース

| リソース | URL |
|---------|-----|
| **CTAL-TTA 認定ページ（公式）** | https://istqb.org/certifications/certified-tester-advanced-level-technical-test-analyst-ctal-tta/ |
| **CTAL-TTA v4.0 シラバスPDF（ASTQB）** | https://astqb.org/assets/documents/ISTQB_CTAL-TTA_Syllabus_v4.0.pdf |
| **CTAL-TTA v4.0 シラバスダウンロード（ISTQB）** | https://istqb.org/sdm_downloads/istqb-ctal-tta_syllabus_v4-0/ |
| **サンプル試験問題 v4.2** | https://istqb.org/?sdm_process_download=1&download_id=3464 |
| **サンプル試験解答 v4.2** | https://istqb.org/?sdm_process_download=1&download_id=3465 |
| **CTAL-TTA リリースノート v4.0** | https://istqb.org/?sdm_process_download=1&download_id=3471 |
| **CTAL-TTA 概要 v4.0** | https://istqb.org/?sdm_process_download=1&download_id=3475 |
| **認定ガイドライン v4.0** | https://istqb.org/?sdm_process_download=1&download_id=3479 |
| **試験構造とルール** | https://istqb.org/?sdm_process_download=1&download_id=3829 |
| **ISTQBグロッサリー** | https://glossary.istqb.org/en_US/search?term= |

### 📢 試験プロバイダー

| リソース | URL |
|---------|-----|
| iSQI 試験情報（CTAL-TTA） | https://isqi.org/ISTQB-Certified-Tester-Technical-Test-Analyst-CTAL-TTA/CT-AL-TTA.737 |
| 試験プロバイダー検索 | https://istqb.org/exam-providers/ |
| 研修プロバイダー検索 | https://istqb.org/training-providers/ |

### 🎓 学習リソース

| リソース | URL |
|---------|-----|
| ISTQB.Guru CTAL-TTA ガイド | https://www.istqb.guru/technical-test-analyst/ |
| Coveros CTAL-TTA トレーニング | https://training.coveros.com/training/course/advanced-tester-certification-technical-test-analyst |
| Udemy CTAL-TTA コース一覧 | https://www.udemy.com/topic/istqb-advanced-level-technical-test-analyst-ctal-tta/ |
| BCS シラバスPDF（参考用） | https://www.bcs.org/media/5949/technical-test-analyst-syllabus-new.pdf |

### 📖 関連資格・ツールリソース

| カテゴリ | リソース | URL |
|---------|---------|-----|
| 関連資格 | CTFL v4.0（前提資格） | https://istqb.org/certifications/certified-tester-foundation-level/ |
| 関連資格 | CTAL-TA v4.0（Test Analyst） | https://istqb.org/certifications/certified-tester-advanced-level-test-analyst/ |
| 関連資格 | CTAL-TM v3.0（Test Management） | https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/ |
| 関連資格 | Security Testing Specialist | https://istqb.org/certifications/certified-tester-specialist-security-tester/ |
| セキュリティ | OWASP Top 10 | https://owasp.org/www-project-top-ten/ |
| セキュリティ | OWASP ZAP | https://www.zaproxy.org/ |
| パフォーマンス | k6 公式ドキュメント | https://grafana.com/docs/k6/latest/ |
| パフォーマンス | JMeter 公式サイト | https://jmeter.apache.org/ |
| パフォーマンス | Locust 公式サイト | https://locust.io/ |
| 静的分析 | SonarQube | https://www.sonarsource.com/products/sonarqube/ |
| 動的分析 | Valgrind | https://valgrind.org/ |
| ミューテーション | Mutmut（Python） | https://mutmut.readthedocs.io/ |
| ミューテーション | PIT（Java） | https://pitest.org/ |
| ブラウザテスト | Playwright 公式 | https://playwright.dev/ |
| 品質標準 | ISO/IEC 25010:2023 | https://www.iso.org/standard/78176.html |
| 安全規格 | IEC 61508 | https://www.iec.ch/iec61508 |
| 航空宇宙 | DO-178C（RTCA） | https://www.rtca.org/ |

---

## 🏁 まとめ：技術テストアナリストとして成功するための10の鉄則

> 1. 🔬 コードを読み、構造を理解する
>    → ホワイトボックステストは「コードの読み方」を知ることから始まる
>    → 循環的複雑度・データフロー・制御フローを分析できるようになる

> 2. 📊 カバレッジ目標を意識的に設定する
>    → 「なぜそのカバレッジ基準を選んだか」を説明できること
>    → SILレベルや DO-178C レベルに合わせた基準選択

> 3. 🛡️ セキュリティをデフォルトで考える（Security by Design）
>    → 新機能の設計段階からセキュリティリスクを識別
>    → OWASP Top 10 を常に意識してレビューに参加

> 4. ⚡ 性能はコードレベルから考える
>    → N+1クエリ・メモリリーク・不必要なオブジェクト生成を早期発見
>    → プロファイリングツールでボトルネックを定量化

> 5. 🔍 静的分析ツールをCI/CDに組み込む
>    → 毎コミット時に自動でコード品質チェック
>    → 問題を早期に、コストを低く発見する

> 6. 💥 障害を注入して耐性を確かめる（Chaos Engineering）
>    → "希望的観測"テストではなく、実際の障害を模擬して検証
>    → 「壊れないこと」より「壊れた時に適切に動くこと」を検証

> 7. 🎯 MC/DC を正確に理解・適用する
>    → CTAL-TTA の最重要・最難関トピック
>    → 各原子条件の「独立した」影響を証明するペアを見つける練習

> 8. 🤝 開発者・アーキテクトと積極的に連携する
>    → テストはコード完成後ではなく、設計段階から参加
>    → レビューで技術的欠陥を早期発見してコストを削減

> 9. 📈 非機能テストにも定量目標を設定する
>    → 「速い」ではなく「95パーセンタイル < 2秒」
>    → 「安全」ではなく「OWASP Top 10 全項目クリア」

> 10. 🔄 自動化でテスト品質を継続的に維持する
>     → ミューテーションテストでテストスイートの品質を測定
>     → フォールトインジェクションで自動化された信頼性テストを実施

---

> **📌 作成日**: 2025年  
> **📌 準拠資格**: ISTQB CTAL-TTA v4.0（2021年6月30日正式リリース）  
> **📌 次のステップ**:
> - CTAL-TA v4.0（Test Analyst）で機能テスト側も強化
> - CTAL-TM v3.0（Test Management）でマネジメントスキルを習得
> - Security Testing Specialist でセキュリティを深掘り
> - Performance Testing Specialist でパフォーマンスを深掘り
>
> 🔗 **公式リソース**: https://istqb.org/certifications/certified-tester-advanced-level-technical-test-analyst-ctal-tta/

---

> ⚠️ **免責事項**: 本ガイドはISTQB®が公認したトレーニング資料ではありません。
> 公式シラバス・サンプル問題と合わせて使用してください。
> 試験情報の最終確認は必ず公式サイト（istqb.org）で行ってください。
