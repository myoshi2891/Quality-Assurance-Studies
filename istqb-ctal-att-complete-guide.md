# 🚀 ISTQB® Certified Tester Advanced Level – Agile Technical Tester (CTAL-ATT)

## 完全学習ガイド【2025年最新版・初学者対応】

> **最終更新**: 2025年（ISTQB® 公式シラバス CTAL-ATT v1.1 準拠）  
> **対象読者**: CTFL取得済みで、アジャイル開発における技術的テストスキルを高めたい方  
> **参照元**: ISTQB® 公式シラバス v1.1（2020年1月28日 GA正式リリース）

---

## 📚 目次

1. [CTAL-ATT 概要と資格ロードマップ](#chapter-0)
2. [Chapter 1: 要件エンジニアリング（Requirements Engineering）](#chapter-1)
   - [1.1.1 ユーザーストーリーとエピックの分析](#section-1-1)
   - [1.1.2 受入基準の特定](#section-1-2)
3. [Chapter 2: アジャイルにおけるテスト（Testing in Agile）](#chapter-2)
   - [2.1.1 TDD（テスト駆動開発）](#section-2-1)
   - [2.1.2 BDD（振る舞い駆動開発）](#section-2-2)
   - [2.1.3 ATDD（受入テスト駆動開発）](#section-2-3)
   - [2.2 経験ベーステスト](#section-2-4)
   - [2.3 コード品質の側面](#section-2-5)
4. [Chapter 3: テスト自動化（Test Automation）](#chapter-3)
   - [3.1 テスト自動化技法](#section-3-1)
   - [3.2 自動化レベルの最適化](#section-3-2)
5. [Chapter 4: デプロイメントとデリバリー（Deployment and Delivery）](#chapter-4)
   - [4.1 CI/CT/CD](#section-4-1)
   - [4.2 サービス仮想化](#section-4-2)
6. [試験対策・サンプル問題](#exam-tips)
7. [参照URL一覧](#references)

---

<a id="chapter-0"></a>

## 🌟 Chapter 0: CTAL-ATT 概要と資格ロードマップ

### 0.1 この資格とは？

```
┌──────────────────────────────────────────────────────────────────┐
│               ISTQB® 認定資格ロードマップ                           │
│                                                                  │
│  [Agile Stream]                                                  │
│   ┌──────────────────────────────────────────────────┐          │
│   │  CTAL-ATT（Advanced Level Agile Technical Tester）│← 本資格! │
│   │  ↑ 前提条件:                                     │          │
│   │    CTFL v4.0 のみ、または                         │          │
│   │    旧CTFL + CTFL-AT（Agile Extension）           │          │
│   └──────────────────────────────────────────────────┘          │
│                    ↑                                             │
│  [Foundation Level]                                              │
│   ┌──────────────┐  ┌───────────────────────┐                  │
│   │  CTFL v4.0   │  │ 旧CTFL + CTFL-AT      │                  │
│   └──────────────┘  └───────────────────────┘                  │
│                                                                  │
│  🆚 CTAL-ATT vs 他のAdvanced資格の違い:                          │
│  ┌────────────────────┬──────────────────────────────────┐     │
│  │  CTAL-TTA          │ ホワイトボックス・非機能テスト     │     │
│  │  CTAL-ATT ← 本資格 │ アジャイル文脈の技術的テスト      │     │
│  │  CTAL-TM           │ テスト管理・プロセス              │     │
│  └────────────────────┴──────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────────┘
```

**CTAL-ATT（Agile Technical Tester）** は、アジャイル開発環境における技術的テストスキルの専門家を認定する国際資格です。TDD・BDD・ATDD・CI/CD・サービス仮想化など、現代のアジャイルチームに不可欠な技術を網羅します。

### 0.2 試験概要（v1.1）

```
╔══════════════════════════════════════════════════════════╗
║              CTAL-ATT v1.1 試験スペック                   ║
╠════════════════════════════════╦═════════════════════════╣
║  問題数                        ║  40問                    ║
╠════════════════════════════════╬═════════════════════════╣
║  合格点                        ║  42点（64点満点）         ║
╠════════════════════════════════╬═════════════════════════╣
║  合格率目標                     ║  約65%                   ║
╠════════════════════════════════╬═════════════════════════╣
║  試験時間                       ║  90分                    ║
║  （英語非母語者）                ║  (+25% = 113分)          ║
╠════════════════════════════════╬═════════════════════════╣
║  前提条件                       ║  CTFL v4.0 のみ、または  ║
║                                ║  旧CTFL + CTFL-AT        ║
╠════════════════════════════════╬═════════════════════════╣
║  推奨経験                       ║  18ヶ月以上の実務         ║
╠════════════════════════════════╬═════════════════════════╣
║  学習時間（公認研修）             ║  最低960分(16時間)        ║
╠════════════════════════════════╬═════════════════════════╣
║  最新シラバス                    ║  v1.1（2020年1月28日）    ║
╚════════════════════════════════╩═════════════════════════╝
```

### 0.3 シラバス構成と学習時間

```
Chapter 1: 要件エンジニアリング          ██████        ~90分
Chapter 2: アジャイルにおけるテスト       ████████████ ~360分 ← 最重要
Chapter 3: テスト自動化                  ████████     ~270分
Chapter 4: デプロイメントとデリバリー     ███████      ~240分
                                         合計: ~960分 (16時間)
```

### 0.4 8つのビジネスアウトカム

| # | ビジネスアウトカム |
|---|-----------------|
| 1 | 適切なカバレッジを提供するテストのためにアジャイル技法を適用できる |
| 2 | アジャイルチーム内でテスト可能な要件を定義できる |
| 3 | 適切な技法を使用して様々なアジャイルテストアプローチを作成・実装できる |
| 4 | アジャイルプロジェクトでのテスト自動化活動を支援・貢献できる |
| 5 | アジャイルチームでの継続的インテグレーションを支援できる |
| 6 | 継続的デリバリーとデプロイメントにおいてアジャイルチームを支援できる |
| 7 | サービス仮想化のコンセプトを習得できる |
| 8 | 効果的なコミュニケーションスタイルとチャネルを使用してチームと協力できる |

### 0.5 認知レベル（K-Level）別の学習内容

| レベル | 主な学習内容 | 例 |
|--------|-----------|-----|
| **K1** | 用語・概念の記憶 | ユーザーストーリー、エピック、TDDの定義 |
| **K2** | 理解・説明 | FIRSTの意味、BDDシナリオのガイドライン |
| **K3** | 適用 | TDD/BDDの実際の実装、CI パイプライン設計 |
| **K4** | 分析・評価 | ユーザーストーリーの分析、テストチャーターの解釈 |

---

<a id="chapter-1"></a>

## 📋 Chapter 1: 要件エンジニアリング（Requirements Engineering）
>
> ~90分 | アジャイルチームでの要件定義の技術

### なぜ要件エンジニアリングが必要か？

```
アジャイル開発における要件の課題：

  従来のウォーターフォール:
    要件定義書（100ページ）→ 開発 → テスト
    問題：要件の曖昧さが後工程で発覚 → 手戻りコスト大

  アジャイル開発:
    ユーザーストーリー → スプリント計画 → 開発 → テスト
    問題：ストーリーが小さすぎて曖昧 → 受入基準が不明確
    
  解決策：要件エンジニアリング技法をアジャイルに適用する
  → 「テスト可能な要件」を定義することがATTの重要なスキル
```

<a id="section-1-1"></a>

### 1.1.1 ユーザーストーリーとエピックの分析（Analyzing User Stories and Epics）

#### ユーザーストーリーの構造

```
ユーザーストーリーの基本形式：

  As a [役割/ユーザータイプ]
  I want to [行動・機能]
  So that [得られる価値]

例：
  As a registered customer
  I want to add items to my shopping cart
  So that I can purchase multiple items at once

日本語版：
  登録済みユーザーとして、
  ショッピングカートに商品を追加したい
  複数の商品を一度に購入できるようにするため

エピック（Epic）とは？：
  複数のユーザーストーリーに分割できる大きな機能
  例：「ユーザー管理」というエピックは以下に分割される
  ├── 「登録ユーザーとして、メールでサインアップしたい」
  ├── 「登録ユーザーとして、ソーシャルログインしたい」
  └── 「管理者として、ユーザーを無効化したい」
```

**INVEST 基準：良いユーザーストーリーの条件**

```
INVEST = 良いユーザーストーリーの6つの特性：

I - Independent（独立性）
    → 他のストーリーへの依存が最小限
    ✓ 良い：「ユーザーはGoogleでログインできる」（独立）
    ✗ 悪い：「ユーザーはFBでもログインできる（Googleログイン実装後に）」

N - Negotiable（交渉可能性）
    → 詳細は開発者・テスター・PO で交渉可能
    ✓ 具体的な実装方法はチームで議論できる余地がある

V - Valuable（価値）
    → ビジネスまたはユーザーに明確な価値がある
    ✗ 悪い：「データベースをPostgreSQLに移行する」（技術的実装のみ）
    ✓ 良い：「ユーザーは検索結果を3秒以内に受け取れる」

E - Estimable（見積もり可能性）
    → チームがストーリーポイントを付けられる程度に明確

S - Small（小ささ）
    → 1〜2スプリントで完了できるサイズ
    → 大きすぎるストーリーはエピックに分割する

T - Testable（テスト可能性）← ATTにとって最重要！
    → 受入基準が明確に定義でき、合格/不合格を判定できる
    ✗ 悪い：「システムはユーザーフレンドリーであること」（主観的）
    ✓ 良い：「チェックアウトフローは4ステップ以下で完了できること」
```

**要件エンジニアリング技法の活用：**

```python
# ユーザーストーリー分析の実践例

user_story = """
As a premium subscriber,
I want to download content for offline viewing,
So that I can watch videos without internet connection.
"""

# 分析すべき観点（要件エンジニアリング技法より）：

analysis_checklist = {
    "明確性": [
        "「プレミアム加入者」の定義は明確か？",
        "「コンテンツ」は何を指すか（動画のみ？音楽も？）",
        "「オフライン視聴」の定義（期間制限は？）",
    ],
    
    "完全性": [
        "ダウンロード数の制限は？",
        "ストレージ容量の制限は？",
        "ダウンロードしたコンテンツの有効期限は？",
        "非プレミアム加入者への対応は？",
    ],
    
    "一貫性": [
        "著作権・DRM要件との整合性は？",
        "既存のストリーミング機能との競合はないか？",
    ],
    
    "テスト可能性": [
        "ダウンロード成功の判定基準は？",
        "オフライン動作の判定基準は？（機内モードで動作するか）",
        "エラー時の挙動は定義されているか？",
    ]
}

# テスト可能な受入基準を導き出す：
acceptance_criteria = [
    "Given プレミアム加入者がログインしている",
    "  And インターネット接続がある",
    "When 動画の「ダウンロード」ボタンをタップする",
    "Then 動画がデバイスに保存される",
    "  And 機内モードでも再生できる",
    "  And ダウンロード済みの動画は30日間有効である",
]
```

<a id="section-1-2"></a>

### 1.1.2 受入基準の特定（Identifying Acceptance Criteria）

#### 受入基準の重要性

```
受入基準（Acceptance Criteria）とは？
  → ユーザーストーリーが「完了」したと判断するための具体的な条件
  → テストケース設計の直接的な基礎となる

良い受入基準の特性：
  ✓ 明確（Yes/No で判定できる）
  ✓ テスト可能（自動化または手動で検証できる）
  ✓ ビジネス価値に関連している
  ✓ 開発者・テスター・PO が合意している

受入基準の記述形式：
```

```gherkin
# 形式1：Gherkin（BDD / Given-When-Then）
Feature: ユーザー認証

  Scenario: 有効な認証情報でのログイン
    Given ユーザーが登録されている
    When  有効なメールアドレスとパスワードを入力する
    Then  ホーム画面にリダイレクトされる
    And   「ようこそ [ユーザー名]」が表示される

  Scenario: 無効なパスワードでのログイン失敗
    Given ユーザーが登録されている
    When  正しいメールアドレスと誤ったパスワードを入力する
    Then  「パスワードが正しくありません」エラーが表示される
    And   ホームページにリダイレクトされない

# 形式2：条件リスト形式
"""
受入基準：
□ 正しいメール/パスワードの組み合わせでログインできること
□ 誤った認証情報でログインできないこと
□ 5回失敗したらアカウントが30分ロックされること
□ パスワードリセットリンクが機能すること
□ ログイン後のセッションは24時間有効であること
"""
```

**受入基準の引き出し技法（Elicitation Techniques）：**

```
1. ブレインストーミング（Brainstorming）
   → チーム全員でWhat-if シナリオを発想
   例：「もしユーザーが空のパスワードを入力したら？」
       「もしメールが未検証の場合は？」

2. インタビュー（Interview）
   → PO・ビジネスアナリスト・エンドユーザーへの質問
   開放型質問：「このログイン機能で最も重要なことは何ですか？」

3. 観察（Observation）
   → 実際のユーザーの行動を観察して要件を発見
   例：ユーザビリティテストで予期しない使い方を発見

4. ワークショップ（3 Amigos）
   → 開発者・テスター・POの3者が集まって受入基準を議論
   参加者の視点：
   ├── 開発者：「どのように実装するか」
   ├── テスター：「どのようにテストするか」
   └── PO：「この機能で何を達成したいか」

5. ユースケース分析（Use Case Analysis）
   → アクター・主シナリオ・代替シナリオを整理

5. Specification by Example (SBE / 実例仕様化)
   → 抽象的な要件を具体的な例で説明
   抽象：「割引は正しく計算されること」
   実例：「100円の商品を10%OFFにすると90円になること」
```

---

<a id="chapter-2"></a>

## 🔄 Chapter 2: アジャイルにおけるテスト（Testing in Agile）
>
> ~360分 | 最重要章

### アジャイルにおけるテストの考え方

```
アジャイルにおける品質とテストの原則：

  従来の考え方：
  開発フェーズ → テストフェーズ（後付け）

  アジャイルの考え方（シフトレフト）：
  要件定義 → 設計 → 実装 → テスト（全て並行）

  ホールチームアプローチ：
  ✓ テストは「テスターだけの仕事」ではない
  ✓ 開発者・テスター・PO 全員が品質に責任を持つ
  ✓ TDD・BDD・ATDD が「品質を内製化」する手段

テスト自動化ピラミッド（Test Automation Pyramid）：
              ┌───┐
              │E2E│  ← 少ない（遅い・コスト高）
             ┌┴───┴┐
             │ 統合  │
            ┌┴──────┴┐
            │ ユニット  │ ← 多い（速い・コスト低）
            └──────────┘

上から:
  E2E（Selenium/Playwright）: ~10%
  統合（API Tests）:           ~20%
  ユニット（JUnit/pytest）:    ~70%
```

---

<a id="section-2-1"></a>

### 2.1.1 TDD（テスト駆動開発 / Test-Driven Development）

#### TDDとは？

```
TDD（Test-Driven Development）の定義：
  → 「まずテストを書き、そのテストを通るコードを書く」開発手法
  → Kent Beck が Extreme Programming（XP）の一環として普及

TDD のサイクル（Red-Green-Refactor）：

  ┌──────────────┐
  │ RED          │ ← 失敗するテストを書く（まだコードがない）
  │ 🔴           │
  └──────┬───────┘
         │
         ▼
  ┌──────────────┐
  │ GREEN        │ ← テストが通るコードを最小限書く
  │ 🟢           │   （クリーンでなくてよい、動けばOK）
  └──────┬───────┘
         │
         ▼
  ┌──────────────┐
  │ REFACTOR     │ ← コードをきれいに整理する
  │ 🔵           │   （テストが引き続き通ることを確認しながら）
  └──────┬───────┘
         │
         └─────→ 繰り返す
```

**TDDの実践例（Python/pytest）：**

```python
# ===== Step 1: RED - まず失敗するテストを書く =====
# test_calculator.py

import pytest
from calculator import Calculator  # まだ存在しない！

class TestCalculator:
    
    def setup_method(self):
        self.calc = Calculator()
    
    # 🔴 このテストは現時点で失敗する（Calculator クラスが存在しないため）
    def test_add_two_positive_numbers(self):
        """正の整数2つの加算が正しく機能すること"""
        result = self.calc.add(3, 5)
        assert result == 8
    
    def test_add_negative_number(self):
        """負の数の加算が正しく機能すること"""
        result = self.calc.add(-3, 5)
        assert result == 2
    
    def test_divide_by_zero_raises_exception(self):
        """ゼロ除算で例外が発生すること"""
        with pytest.raises(ValueError, match="Cannot divide by zero"):
            self.calc.divide(10, 0)

# ===== Step 2: GREEN - テストが通る最小限のコードを書く =====
# calculator.py

class Calculator:
    
    def add(self, a: float, b: float) -> float:
        """加算"""
        return a + b
    
    def subtract(self, a: float, b: float) -> float:
        """減算"""
        return a - b
    
    def multiply(self, a: float, b: float) -> float:
        """乗算"""
        return a * b
    
    def divide(self, a: float, b: float) -> float:
        """除算"""
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b

# $ pytest test_calculator.py -v
# test_calculator.py::TestCalculator::test_add_two_positive_numbers PASSED ✅
# test_calculator.py::TestCalculator::test_add_negative_number PASSED ✅
# test_calculator.py::TestCalculator::test_divide_by_zero_raises_exception PASSED ✅

# ===== Step 3: REFACTOR - コードを整理する =====
# calculator.py（リファクタリング後）

from typing import Union

Number = Union[int, float]

class Calculator:
    """基本的な算術演算を提供するクラス"""
    
    def _validate_operands(self, *args: Number) -> None:
        """入力値の型を検証"""
        for arg in args:
            if not isinstance(arg, (int, float)):
                raise TypeError(f"Expected number, got {type(arg).__name__}")
    
    def add(self, a: Number, b: Number) -> Number:
        self._validate_operands(a, b)
        return a + b
    
    def divide(self, a: Number, b: Number) -> float:
        self._validate_operands(a, b)
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b
    
    # ... 他のメソッドも同様にリファクタリング
```

**FIRST 原則：良いユニットテストの条件（試験頻出！）**

```
FIRST = ユニットテストの5つの特性：

F - Fast（高速）
    → ユニットテストは数ミリ秒で完了すべき
    → DBアクセス・ファイルIO・ネットワークはモックを使う
    ✗ 悪い：外部APIを実際に呼ぶテスト（遅い・不安定）
    ✓ 良い：モックAPIを使うテスト（速い・安定）

I - Independent（独立）
    → テストの実行順序に依存しない
    → 各テストが独立して実行・並列実行できる
    ✗ 悪い：テストAが作ったデータをテストBが使う
    ✓ 良い：各テストが自分のデータを作成・削除する

R - Repeatable（繰り返し実行可能）
    → 同じテストを何度実行しても同じ結果になる
    ✗ 悪い：現在時刻に依存するテスト（毎回結果が変わる）
    ✓ 良い：時刻をモックする（固定の時刻でテスト）

S - Self-Validating（自己検証）
    → テストの合否を人間が判断しない（自動判定）
    ✗ 悪い：ログを目視確認してOKと判定する
    ✓ 良い：assert文で自動的に合否を判定する

T - Timely（タイムリー）
    → 本番コードを書く直前（または同時）にテストを書く
    → コード完成後に書くのはTDDではない
    ✓ TDDのサイクルに従い、Red-Green-Refactorを繰り返す
```

**ATT のTDD支援における役割：**

```
テスト技術者がTDDでできること：

1. テスト可能な設計の提案
   → 依存性注入（DI）でモックを差し替えやすくする
   → インターフェースを使って実装から分離する

2. テストデータの「データシーム」の特定
   → テストしにくいデータの依存関係を特定
   → テストデータファクトリーで解決

3. 複雑なロジックのユニットテスト提案
   → UIよりAPIレイヤーでテストすることを提案（速く・安定）

4. テストカバレッジのギャップ特定
   → テストされていないエッジケースを指摘
```

---

<a id="section-2-2"></a>

### 2.1.2 BDD（振る舞い駆動開発 / Behavior-Driven Development）

#### BDDとは？

```
BDD（Behavior-Driven Development）の定義：
  → 「システムの振る舞いを共通言語（Gherkin）で記述し、
     ビジネスサイドと開発チームで共有する」手法
  → Dan North が TDD を拡張して提唱（2006年）

BDD の目的：
  ✓ ビジネス要件とテストの橋渡し
  ✓ 会話・コラボレーションを促進（3 Amigos）
  ✓ 「生きたドキュメント（Living Documentation）」の作成
  ✓ 受入基準の明確化

TDD vs BDD の違い：
  TDD:
    目的: コードの品質向上（開発者中心）
    レベル: ユニットテスト
    言語: コード（テストコード）

  BDD:
    目的: ビジネス価値の実現（チーム全員）
    レベル: 受入テスト・統合テスト
    言語: Gherkin（自然言語に近い）
```

**Gherkin 記法の詳細：**

```gherkin
# Feature ファイルの構造
Feature: ショッピングカート機能
  登録ユーザーが商品をカートに追加し、チェックアウトできる

  Background:
    Given ユーザーが "user@example.com" で登録されている
    And   ユーザーがログインしている

  # 正常系シナリオ
  Scenario: カートに新しい商品を追加する
    Given カートが空である
    When  ユーザーが "ノートPC" を1台カートに追加する
    Then  カートに1件の商品がある
    And   カートの合計金額は 150000円 である

  # 異常系シナリオ
  Scenario: 在庫がない商品を追加しようとする
    Given "キーボード" の在庫が0個である
    When  ユーザーが "キーボード" をカートに追加しようとする
    Then  "現在在庫切れです" というエラーが表示される
    And   カートに商品は追加されない

  # データ駆動シナリオ（Scenario Outline）
  Scenario Outline: 数量割引の適用
    Given <商品名> の単価は <単価>円 である
    When  <数量>個 カートに追加する
    Then  カートの合計は <合計>円 である

    Examples:
      | 商品名  | 単価   | 数量 | 合計    |
      | りんご  | 100   | 5    | 500    |
      | りんご  | 100   | 10   | 900    |  # 10個以上は10%引き
      | りんご  | 100   | 20   | 1600   |  # 20個以上は20%引き
```

**BDD シナリオのガイドライン（試験頻出）：**

```
良いGherkin シナリオの書き方：

✅ DO（すべきこと）：
  1. ビジネスの観点で書く（実装詳細は書かない）
     ✓ "When ユーザーが「購入」ボタンをクリックする"
     ✗ "When POST /api/v1/orders がコールされる"

  2. Given-When-Then の1ステップに1つのことを書く
     ✓ "Then 注文確認メールが送信される"
     ✗ "Then 注文確認メールが送信され、在庫が更新され、請求書が発行される"

  3. 宣言的（Declarative）に書く
     ✓ "Given ユーザーがショッピングカートページにいる"
     ✗ "Given ユーザーがサイトに行き、ログインし、カートページに移動した"

  4. ステップを再利用可能にする
     → "Given ユーザーがログインしている" は複数のシナリオで共有

❌ DON'T（避けること）：
  1. UI 固有の詳細を書かない（セレクタ、URL等）
  2. 技術的な実装詳細を書かない
  3. シナリオを複雑にしすぎない（7ステップ以下を目標）
  4. "and"/"but"を Given/When/Then の代替として多用しない
```

**BDD の実装（Python/Behave または pytest-bdd）：**

```python
# features/shopping_cart.feature の内容を実装するステップ定義

# pytest-bdd を使ったステップ定義（step_definitions/cart_steps.py）
from pytest_bdd import given, when, then, parsers
from cart_service import CartService

@given("カートが空である")
def empty_cart(cart_context):
    cart_context.cart = CartService.create_empty_cart()

@given(parsers.parse('ユーザーが "{email}" で登録されている'))
def registered_user(user_context, email: str):
    user_context.user = UserService.create_user(email=email)

@when(parsers.parse('ユーザーが "{product_name}" を{quantity:d}台カートに追加する'))
def add_to_cart(cart_context, product_name: str, quantity: int):
    product = ProductService.find_by_name(product_name)
    cart_context.response = CartService.add_item(
        cart_id=cart_context.cart.id,
        product_id=product.id,
        quantity=quantity
    )

@then(parsers.parse("カートに{count:d}件の商品がある"))
def verify_cart_count(cart_context, count: int):
    cart = CartService.get_cart(cart_context.cart.id)
    assert len(cart.items) == count, f"Expected {count} items, got {len(cart.items)}"

@then(parsers.parse("カートの合計金額は {amount:d}円 である"))
def verify_cart_total(cart_context, amount: int):
    cart = CartService.get_cart(cart_context.cart.id)
    assert cart.total == amount, f"Expected total {amount}, got {cart.total}"
```

---

<a id="section-2-3"></a>

### 2.1.3 ATDD（受入テスト駆動開発 / Acceptance Test-Driven Development）

#### ATDDとは？

```
ATDD（Acceptance Test-Driven Development）の定義：
  → ユーザーストーリーの受入基準を具体的なテストとして
    「開発開始前に」定義する手法
  → TDD・BDD と密接に関連するが焦点が異なる

3つの開発アプローチの比較（試験頻出！）：

  ┌─────────────────────────────────────────────────────────┐
  │       TDD        │      BDD         │      ATDD          │
  ├─────────────────┼──────────────────┼───────────────────┤
  │ コード品質向上    │ 振る舞いの仕様化  │ 受入基準の事前定義  │
  │ 開発者中心       │ チーム全体       │ ビジネス/テスト中心  │
  │ ユニットレベル    │ 受入/機能レベル  │ システム受入レベル   │
  │ Red-Green-Refactor│ Gherkin/Cucumber│ 受入テストファースト │
  └─────────────────┴──────────────────┴───────────────────┘

ATDDのワークフロー：

  1. ユーザーストーリーの「受入テスト」を先に書く
     ↓
  2. その受入テストを開発の目標とする
     ↓
  3. 開発者が TDD でコードを書きながら受入テストをパスさせる
     ↓
  4. 受入テストが全てパスしたら「完了（Done）」

ATDDにおける3 Amigos（スリー・アミーゴ）：
  👤 Product Owner（何が必要か）
  👤 Developer（どのように作るか）
  👤 Tester（どのようにテストするか）
  → 3者が協力して受入基準を事前に明確化する
```

**ATDD の実践サイクル：**

```
ユーザーストーリー例：
  "オンラインショッパーとして、
   注文後すぐに確認メールを受け取りたい
   なぜなら、注文が完了したことを確認したいから"

Step 1: 3 Amigos で受入基準を議論
  PO: 「注文完了後5分以内に送りたい」
  Dev: 「バックグラウンドジョブで実装できる」
  QA: 「送信失敗時のリトライはどうする？」

Step 2: 受入テストを Gherkin で書く（開発前！）
```

```gherkin
Feature: 注文確認メール送信

  Scenario: 注文完了時に確認メールが送信される
    Given ユーザー "customer@example.com" が存在する
    And   商品 "ノートPC" の在庫が十分ある
    When  ユーザーが注文を完了する
    Then  "customer@example.com" に確認メールが送信される
    And   メール件名は "ご注文を承りました" である
    And   メールには注文番号が含まれている

  Scenario: メール送信失敗時にリトライされる
    Given メールサーバーが一時的に使用不可である
    When  ユーザーが注文を完了する
    Then  システムは5分後にメール送信を再試行する
    And   3回リトライしても失敗した場合、管理者に通知される
```

```python
# Step 3: 開発者はこの受入テストをパスさせるコードを書く

# order_service.py
from email_service import EmailService
from retry import retry

class OrderService:
    def __init__(self, email_service: EmailService):
        self._email_service = email_service
    
    def complete_order(self, order: Order) -> None:
        """注文を完了し、確認メールを送信する"""
        order.status = "completed"
        order.save()
        
        # 受入テストをパスさせるための実装
        self._send_confirmation_email_with_retry(order)
    
    @retry(max_attempts=3, delay_seconds=300)  # 5分間隔で3回リトライ
    def _send_confirmation_email_with_retry(self, order: Order) -> None:
        self._email_service.send(
            to=order.customer_email,
            subject="ご注文を承りました",
            body=self._build_email_body(order)
        )
```

**プロダクトバックログへのATDD導入分析（K4レベル）：**

```
ATTDをプロダクトバックログに導入する際の分析観点：

現状のバックログアイテムの問題パターン：

  問題1：受入基準が曖昧
    "ログイン機能を実装する" → テスト不可能
    改善：具体的な受入テストを追加する

  問題2：技術的ストーリーに偽装されたタスク
    "DBをPostgreSQLに移行する"（ビジネス価値不明）
    改善：「ユーザーが検索結果を2秒以内に受け取れる」（ビジネス価値明確）

  問題3：大きすぎるストーリー（エピック）
    "ユーザー管理機能を実装する"（1スプリントで完了不可能）
    改善：複数の小さなストーリーに分割し、それぞれに受入テストを追加

ATTDの導入ステップ：
  1. 既存のバックログアイテムを見直し、受入基準のないものを特定
  2. PO・Dev・QA の3 Amigos ミーティングを定期開催
  3. 各スプリントの開始前にそのスプリントのストーリーの受入テストを定義
  4. Definition of Done に「受入テストが自動化されている」を追加
  5. 受入テストをCI/CDパイプラインに組み込む
```

---

<a id="section-2-4"></a>

### 2.2 アジャイルにおける経験ベーステスト（Experience-Based Testing in Agile）

#### 2.2.1 包括的なテストアプローチの構築

```
アジャイルにおけるテストアプローチの設計：

テストアプローチは以下の組み合わせで構成される：
  ✓ テスト自動化（自動化できるもの）
  ✓ 経験ベーステスト（探索的・アドホック）
  ✓ ブラックボックステスト（EP、BVA等）
  ✓ リスクベーステスト（高リスク領域への集中）

ミッションクリティカル vs 非クリティカルの違い：

  ミッションクリティカル（例：医療機器・航空制御）:
    → 高い網羅性・厳格な文書化
    → 形式的なテスト技法（MC/DC等）が必須
    → 全テストケースの事前定義が必要

  非クリティカル（例：一般的なWebアプリ）:
    → リスクベースで優先順位付け
    → 探索的テストを大量に活用可能
    → 自動化による効率化を優先

アジャイルにおけるテストの4象限（Agile Testing Quadrants）：

            ビジネス（Business Facing）
                    |
  Q2 受入テスト      | Q3 探索的テスト
  BDD シナリオ       | ユーザビリティテスト
  プロトタイプ        | 性能テスト
  ────────────────────────────────────
  Q1 ユニットテスト   | Q4 技術的テスト
  コンポーネントテスト │ 性能テスト
  TDD               | 静的分析
                    |
            技術（Technology Facing）
```

#### 2.2.2 テストチャーター（Test Charters）の作成と解釈

```
テストチャーター（Test Charter）とは？
  → 探索的テストセッションの「ガイドライン」を提供する短い文書
  → アジャイルチームでの探索的テストを構造化するツール

テストチャーターのテンプレート：
  EXPLORE [テスト対象]
  TO DISCOVER [何を発見したいか]
  USING [使用するリソース・ツール・技法]

テストチャーターの例：

  Charter 1: ログイン機能のセキュリティ探索
  EXPLORE ログイン画面のパスワード入力フィールド
  TO DISCOVER セキュリティ上の脆弱性（ブルートフォース、SQLインジェクション等）
  USING OWASP ZAP、手動ペネトレーションテスト、60分間

  Charter 2: カート機能の同時実行テスト
  EXPLORE 複数ユーザーが同じ商品をカートに追加する動作
  TO DISCOVER 在庫管理の競合状態・データ整合性の問題
  USING 2つのブラウザタブ + Playwright並列実行、45分間

  Charter 3: モバイルの境界値テスト
  EXPLORE モバイルブラウザでのフォーム入力
  TO DISCOVER 入力制限・特殊文字・絵文字・長い文字列の処理
  USING Android Chrome / iOS Safari、実機、30分間
```

```python
# セッションベーステスト記録（Session-Based Test Management）

class TestSession:
    """テストセッションの記録フォーマット"""
    
    charter = """
    EXPLORE チェックアウトフローの支払い入力
    TO DISCOVER 境界値・エラーハンドリング・UXの問題
    USING Chrome + Safari、テストカード番号、60分間
    """
    
    start_time = "2025-04-01 10:00"
    end_time   = "2025-04-01 11:00"
    tester     = "山田 花子"
    
    # セッション中の時間配分
    time_charter_design = 10  # チャーター設計（分）
    time_testing        = 45  # テスト実行（分）
    time_bug_reporting  = 5   # バグ報告（分）

    # 発見事項
    defects_found = [
        {
            "id": "BUG-001",
            "severity": "Critical",
            "description": "クレジットカード番号に16桁以上入力すると500エラー",
            "steps": "1. 20桁のカード番号を入力 2. 支払いボタンをクリック",
        },
        {
            "id": "BUG-002",
            "severity": "Medium",
            "description": "iOSのSafariでCVCフィールドが数字以外を受け付ける",
            "steps": "1. iOS Safari使用 2. CVCに英字を入力",
        }
    ]
    
    # 次のセッションへの推奨事項
    recommendations = [
        "国際カード（AMEX 15桁）のテストが必要",
        "有効期限の境界値テストが未実施",
    ]
```

---

<a id="section-2-5"></a>

### 2.3 コード品質の側面（Aspects of Code Quality）

#### 2.3.1 テストケースのリファクタリング

```
テストコードのリファクタリングが重要な理由：

  本番コードのリファクタリング:
  ✓ 誰でも知っている（技術的負債の削減）

  テストコードのリファクタリング:
  ← アジャイルチームでは見落とされやすい！

  テストコードの問題が引き起こす弊害：
  ✗ テストが遅くなる（CI/CDパイプラインの遅延）
  ✗ テストの意図が不明確になる（メンテナンスコスト増大）
  ✗ 重複したテストが増える
  ✗ フレイキーテスト（不安定なテスト）が増える

テストケースのリファクタリング タスクリスト：

  □ 重複したテストデータのセットアップをフィクスチャに抽出
  □ 魔法の数字を名前付き定数に置き換え
  □ 長いテストメソッドを複数の小さなテストに分割
  □ 固定sleep()を条件ベースの待機に置き換え
  □ テスト名を「test_[状況]_[期待結果]」形式に統一
  □ 重複するアサーションをカスタムマッチャーに抽出
  □ データ駆動テストでパラメータ化できる部分を統合
```

```python
# テストコードのリファクタリング Before/After

# ❌ リファクタリング前：メンテナンスが難しいテストコード
def test1():
    d = webdriver.Chrome()
    d.get("https://example.com/login")
    d.find_element("id", "email").send_keys("test@example.com")
    d.find_element("id", "password").send_keys("password123")
    d.find_element("id", "login-btn").click()
    time.sleep(3)  # ← 固定sleep！
    assert "Dashboard" in d.title
    d.quit()

def test2():
    d = webdriver.Chrome()
    d.get("https://example.com/login")
    d.find_element("id", "email").send_keys("admin@example.com")  # ← 重複セットアップ
    d.find_element("id", "password").send_keys("admin123")
    d.find_element("id", "login-btn").click()
    time.sleep(3)  # ← 固定sleep！
    assert "Admin" in d.title
    d.quit()

# ✅ リファクタリング後：クリーンで再利用可能なテストコード
import pytest
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# テストの命名規則: test_[テスト対象]_[条件]_[期待動作]

@pytest.fixture
def driver():
    """ブラウザドライバーのセットアップと後処理"""
    d = webdriver.Chrome()
    yield d
    d.quit()  # 確実にクリーンアップ

@pytest.fixture
def login_page(driver):
    """ログインページのPage Object"""
    return LoginPage(driver)

class LoginPage:
    def __init__(self, driver):
        self._driver = driver
    
    def login(self, email: str, password: str):
        self._driver.get("https://example.com/login")
        self._driver.find_element("id", "email").send_keys(email)
        self._driver.find_element("id", "password").send_keys(password)
        self._driver.find_element("id", "login-btn").click()
        # 条件ベースの待機（固定sleepを排除）
        WebDriverWait(self._driver, 10).until(
            EC.url_changes("https://example.com/login")
        )

def test_regular_user_login_should_redirect_to_dashboard(login_page):
    """一般ユーザーのログインでダッシュボードにリダイレクトされること"""
    login_page.login(email="test@example.com", password="password123")
    assert "dashboard" in login_page._driver.current_url

def test_admin_user_login_should_redirect_to_admin_panel(login_page):
    """管理者ユーザーのログインで管理パネルにリダイレクトされること"""
    login_page.login(email="admin@example.com", password="admin123")
    assert "admin" in login_page._driver.current_url
```

#### 2.3.2 コードレビューと技術的負債の分析

```
技術的負債（Technical Debt）とは？
  → Ward Cunningham が提唱した概念
  → 「今は便宜上の解決策を採るが、後で適切に修正が必要な状態」

技術的負債の種類：

  意図的な負債（Deliberate Technical Debt）:
  例：「今は手動テストでいく。次のスプリントで自動化する」
  → 計画的な判断（問題なし）

  非意図的な負債（Inadvertent Technical Debt）:
  例：テストコードなしのコミット、コピペコード
  → 無意識の蓄積（問題あり）

コードレビューでの技術的負債の識別：
  □ テストなしのコード（テスト可能性の問題）
  □ 重複したロジック（DRY違反）
  □ 高い循環的複雑度（メンテナンスリスク）
  □ ハードコードされた値（変更困難）
  □ TODOコメントの放置（未完了タスク）
  □ 適切な例外処理がない（信頼性リスク）
```

```python
# 静的コード分析ツールの活用（アジャイルチームでのCI統合）

# .github/workflows/code_quality.yml
"""
name: コード品質チェック

on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      # Python コード品質チェック
      - name: flake8 (スタイル/構文チェック)
        run: flake8 src/ --max-line-length=100
      
      - name: pylint (コード品質)
        run: pylint src/ --min-similarity-lines=4
      
      - name: SonarQube (総合品質スキャン)
        uses: sonarsource/sonarqube-scan-action@master
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
        with:
          args: >
            -Dsonar.projectKey=my-project
            -Dsonar.python.coverage.reportPaths=coverage.xml
            -Dsonar.qualitygate.wait=true  # 品質ゲート失敗でCIを止める

# SonarQube 品質ゲートの設定例：
# ✓ コードカバレッジ ≥ 80%
# ✓ 新規コードの重複率 < 3%
# ✓ 循環的複雑度 ≤ 10（関数あたり）
# ✓ Critical/Blocker バグ: 0件
"""
```

---

<a id="chapter-3"></a>

## ⚙️ Chapter 3: テスト自動化（Test Automation）
>
> ~270分 | アジャイル環境での自動化戦略

<a id="section-3-1"></a>

### 3.1 テスト自動化技法（Test Automation Techniques）

#### 3.1.1 データ駆動テストとキーワード駆動テスト

```
テスト自動化の2大技法：

  データ駆動テスト（Data-Driven Testing）:
    → 同じテストロジックを異なるデータセットで実行
    → テストデータはコードから分離してファイル/DBで管理
    → アジャイルでの利点：新しいビジネスケースをデータ追加だけで対応

  キーワード駆動テスト（Keyword-Driven Testing）:
    → テスト操作を「キーワード」として定義
    → 非エンジニアもテストを定義・実行できる
    → アジャイルでの利点：PO・BA がテストを読み書きできる
```

```python
# データ駆動テストの実装例（pytest parametrize）

import pytest
from decimal import Decimal

# テストデータを外部ファイルから読み込む
import csv

def load_discount_test_data():
    """CSV からテストデータを読み込む"""
    data = []
    with open("test_data/discount_cases.csv", newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            data.append((
                Decimal(row["price"]),
                row["customer_type"],
                Decimal(row["expected_discount"]),
                Decimal(row["expected_total"])
            ))
    return data

# discount_cases.csv の内容:
# price, customer_type, expected_discount, expected_total
# 1000, premium, 0.20, 800
# 1000, regular, 0.10, 900
# 1000, guest, 0.00, 1000
# 500, premium, 0.20, 400

@pytest.mark.parametrize(
    "price, customer_type, expected_discount, expected_total",
    load_discount_test_data()
)
def test_discount_calculation(
    price: Decimal,
    customer_type: str, 
    expected_discount: Decimal,
    expected_total: Decimal
):
    """顧客タイプに応じた割引計算を検証"""
    service = DiscountService()
    
    discount_rate = service.get_discount_rate(customer_type)
    actual_total = service.apply_discount(price, discount_rate)
    
    assert discount_rate == expected_discount, \
        f"{customer_type}の割引率が期待値と異なる: {discount_rate} != {expected_discount}"
    assert actual_total == expected_total, \
        f"{customer_type}の合計金額が期待値と異なる: {actual_total} != {expected_total}"
```

```python
# キーワード駆動テストの実装例（Robot Framework）
"""
*** Settings ***
Library    SeleniumLibrary
Library    RequestsLibrary

*** Keywords ***
# ページ操作のキーワード定義（エンジニアが実装）

ログインする
    [Arguments]    ${email}    ${password}
    Open Browser    ${BASE_URL}/login    Chrome
    Input Text      id:email    ${email}
    Input Text      id:password    ${password}
    Click Button    id:login-btn
    Wait Until Page Contains    Dashboard

カートに追加する
    [Arguments]    ${product_name}    ${quantity}=1
    Go To    ${BASE_URL}/products
    Click Element    xpath://h3[text()='${product_name}']/..//button[@data-action='add-to-cart']
    Input Text    id:quantity    ${quantity}
    Click Button    id:add-btn

注文を確認する
    [Arguments]    ${expected_total}
    Go To    ${BASE_URL}/cart
    Element Should Contain    id:cart-total    ${expected_total}

*** Test Cases ***
# テストケース（非エンジニアのPOも読める！）

プレミアム会員が商品を購入できる
    ログインする    premium@example.com    pass123
    カートに追加する    ノートPC
    注文を確認する    120000円
    
一般会員が複数商品を購入できる
    ログインする    user@example.com    pass123
    カートに追加する    マウス    2
    カートに追加する    キーボード    1
    注文を確認する    8500円
"""
```

#### 3.1.2 アジャイル環境でのテスト自動化アプローチ

```
アジャイルにおけるテスト自動化の戦略：

1. テスト自動化ピラミッド戦略：
   
   アイスクリームコーン（アンチパターン ❌）：
              ┌─────────────┐
              │   E2E テスト │ ← 多すぎる（遅い・不安定）
             ┌┴─────────────┴┐
             │  統合テスト     │
            ┌┴────────────────┴┐
            │  ユニットテスト    │ ← 少なすぎる
            └──────────────────┘

   ピラミッド（ベストプラクティス ✅）：
              ┌───┐
              │E2E│ ← 少ない（10%）
             ┌┴───┴┐
             │統合  │ ← 中程度（20%）
            ┌┴──────┴┐
            │ユニット  │ ← 多い（70%）
            └──────────┘

2. 「シフトレフト」自動化戦略：
   
   コード変更
     ↓ 即時（プッシュ時）
   ユニットテスト（~2分）
     ↓ PR作成時
   統合テスト（~10分）
     ↓ マージ後
   E2E スモークテスト（~15分）
     ↓ 夜間バッチ
   フルE2Eリグレッション（~60分）

3. 「テスト4象限」での自動化レベル：
   
   自動化しやすい：ユニット・統合テスト、回帰テスト
   自動化しにくい：探索的テスト、ユーザビリティテスト
   両方必要：機能テスト（一部自動化、一部手動）
```

---

<a id="section-3-2"></a>

### 3.2 自動化レベルの最適化（Level of Automation）

#### 3.2.1 アジャイル環境でのテスト自動化課題

```
アジャイル特有のテスト自動化の課題：

課題1：スプリントのスピードに追いつけない
  問題：2週間スプリントで毎回新機能がリリースされる
        → 自動化する前に手動テストが増え続ける
  対策：「まず自動化してから機能を実装する」（TDDの精神）
        → Definition of Done に「自動テストが書かれている」を含める

課題2：UIの頻繁な変更によるテスト壊れ
  問題：スプリントごとにUI変更 → E2Eテストが毎回壊れる
  対策：
    ✓ data-testid 属性を使った安定したセレクタ
    ✓ Page Object Model（POM）パターンで変更箇所を一箇所に集約
    ✓ UIよりAPIレイヤーのテストを優先
    ✓ セルフヒーリングツール（Mabl、Testim等）の活用

課題3：テスト環境の不安定さ
  問題：複数チームが共有するテスト環境が不安定
  対策：
    ✓ Docker コンテナで独立したテスト環境を構築
    ✓ サービス仮想化（後述）で外部依存を排除
    ✓ テストデータの独立性確保

課題4：フレイキーテスト（Flaky Tests）の蓄積
  問題：時々失敗するテストが増えてCIの信頼性が低下
  対策：
    ✓ 固定sleep()を条件ベースの待機に置き換え
    ✓ テストの独立性を確保（テスト間の状態共有を排除）
    ✓ フレイキーテストを特定して最優先で修正
    ✓ フレイキーテストを隔離して夜間バッチへ移動

課題5：デプロイメント速度とテスト実行時間のトレードオフ
  問題：テストスイートが増えるとCIが遅くなる
  対策：
    ✓ 並列実行（pytest -n auto、Playwright --workers）
    ✓ テストの分類と選択的実行（@smoke、@regression タグ）
    ✓ 変更影響分析で関連テストのみ実行
    ✓ 遅いテストをE2E→統合→ユニットに移し替え
```

```python
# アジャイルに適した自動化フレームワーク構成例

# conftest.py（pytest の設定）
import pytest

# テストのタグ分類
def pytest_configure(config):
    config.addinivalue_line("markers", "smoke: スモークテスト（~5分以内）")
    config.addinivalue_line("markers", "regression: 回帰テスト（全件）")
    config.addinivalue_line("markers", "api: APIテスト")
    config.addinivalue_line("markers", "e2e: E2Eテスト")

# GitHub Actions での選択的実行：
"""
# PR時: スモークテストのみ
pytest -m "smoke" --workers=4

# マージ時: API + E2E スモーク
pytest -m "smoke or api" --workers=4

# 夜間: 全件
pytest -m "regression" --workers=8
"""

# テストの速度計測と改善例
@pytest.mark.smoke
@pytest.mark.api
def test_health_check():
    """ヘルスチェックエンドポイントの確認（~0.5秒）"""
    response = requests.get("/api/health")
    assert response.status_code == 200

@pytest.mark.smoke
@pytest.mark.e2e
def test_user_can_login():
    """ログイン機能の確認（~3秒）"""
    # ...

@pytest.mark.regression
@pytest.mark.e2e
def test_complete_checkout_flow():
    """完全なチェックアウトフローの確認（~30秒）"""
    # ...
```

---

<a id="chapter-4"></a>

## 🔄 Chapter 4: デプロイメントとデリバリー（Deployment and Delivery）
>
> ~240分 | CI/CD とサービス仮想化

<a id="section-4-1"></a>

### 4.1 CI・CT・CD（Continuous Integration/Testing/Delivery）

#### 継続的インテグレーション（Continuous Integration: CI）

```
CI（継続的インテグレーション）とは？

  定義：開発者が頻繁に（少なくとも1日1回）コードをメインブランチに
        統合し、自動ビルド・自動テストを実行するプラクティス

  CIの基本原則：
  ✓ 単一のソースリポジトリを使用する
  ✓ ビルドを自動化する
  ✓ ビルドにテストを含める
  ✓ 毎日コミットする（少なくとも）
  ✓ ビルドを素早く保つ（< 10分が目標）
  ✓ 本番環境のクローンでテストする
  ✓ 成果物を簡単に取得できるようにする
  ✓ 最新ビルドの状態を誰もが見えるようにする
  ✓ 壊れたビルドを即座に修正する

  CIがテストに与える影響：
  ✓ コードPushのたびに自動テストが実行される
  ✓ テストの失敗が即座に通知される → 早期フィードバック
  ✓ 「私のマシンでは動く」問題が排除される
  ✗ テストが遅いとCIが遅くなる → テスト最適化が必要
```

```yaml
# GitHub Actions による CI パイプラインの実装例

# .github/workflows/ci.yml
name: CI パイプライン

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  # === ステージ 1：高速なユニット/統合テスト（<5分） ===
  fast-tests:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Python環境のセットアップ
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'
          cache: 'pip'
      
      - name: 依存関係のインストール
        run: pip install -r requirements.txt
      
      - name: ユニットテスト実行
        run: |
          pytest tests/unit/ \
            -n auto \
            --cov=src \
            --cov-report=xml \
            --cov-fail-under=80 \
            -v
      
      - name: カバレッジレポートの送信
        uses: codecov/codecov-action@v4
        with:
          token: ${{ secrets.CODECOV_TOKEN }}

  # === ステージ 2：統合テスト（<15分） ===
  integration-tests:
    needs: fast-tests  # ユニットテスト成功後に実行
    runs-on: ubuntu-latest
    timeout-minutes: 20
    
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: test_db
          POSTGRES_PASSWORD: test_pass
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
      
      redis:
        image: redis:7
    
    steps:
      - uses: actions/checkout@v4
      
      - name: 統合テスト実行
        run: |
          pytest tests/integration/ \
            -m "api or integration" \
            -v --tb=short
        env:
          DATABASE_URL: postgresql://postgres:test_pass@localhost/test_db
          REDIS_URL: redis://localhost:6379

  # === ステージ 3：E2E スモークテスト（<15分） ===
  e2e-smoke:
    needs: integration-tests
    runs-on: ubuntu-latest
    timeout-minutes: 30
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Node.js のセットアップ
        uses: actions/setup-node@v4
        with:
          node-version: 22
      
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      
      - name: E2E スモークテスト実行
        run: |
          npx playwright test \
            --grep @smoke \
            --project=chromium \
            --reporter=html
        env:
          BASE_URL: ${{ vars.STAGING_URL }}
      
      - name: テストレポートの保存（失敗時）
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 7

  # === ステージ 4：デプロイ（テスト全通過後） ===
  deploy-staging:
    needs: e2e-smoke
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: ステージング環境へデプロイ
        run: echo "Deploying to staging..."
      
      - name: デプロイ後のスモークテスト
        run: |
          pytest tests/smoke/ \
            --base-url=${{ vars.STAGING_URL }}
```

#### 継続的テスト（Continuous Testing: CT）とは？

```
継続的テスト（Continuous Testing）とは？

  定義：CI/CD パイプラインの全フェーズにわたって
        テストを継続的に実行するプラクティス

  継続的テストとCI/CDテストの違い：
  
  CI での「テスト」：
    → コードが壊れていないことを確認（ビルドゲート）
    → 主にユニット・統合テスト
    
  継続的テスト：
    → デプロイ前後を含む全ての段階でテストを実行
    → 本番環境でのモニタリングも含む

CI → CT → CD の流れ：

  コードPush
    ↓ CI: ユニット・統合テスト（< 10分）
  ステージングデプロイ
    ↓ CT: E2E・パフォーマンス・セキュリティテスト
  本番デプロイ承認
    ↓ CD: 本番デプロイ
  本番スモークテスト・監視
    ↓ CT: 継続的監視（Canary Release等）
```

#### 継続的デリバリー（CD）と継続的デプロイメント（CD）

```
CD の2つの意味（重要！試験頻出）：

  Continuous Delivery（継続的デリバリー）：
    → 本番デプロイの準備が常に整っている状態を維持
    → 本番デプロイは「人間の承認」が必要
    → 毎日デプロイできるが、しないこともある

  Continuous Deployment（継続的デプロイメント）：
    → テストが全て通れば本番へ「自動的に」デプロイされる
    → 人間の承認が不要（自動化された判断）
    → Netflix・Amazon等が採用

  比較図：

  CI Pipeline
  [Code] → [Build] → [Test] → 🟢 Ready to Deploy
                                      │
  Continuous Delivery:                ▼
                          [Human Approval] → [Deploy to Production]
                                      │
  Continuous Deployment:              ▼
                          [Automated Deploy] → [Production]

テスト自動化が継続的デプロイメントを可能にする：
  → 自動テストが「リリース承認者」の役割を果たす
  → テスト品質が低い → 本番でバグ発生 → CD は危険
  → テスト品質が高い → 安心して自動デプロイ
```

---

<a id="section-4-2"></a>

### 4.2 サービス仮想化（Service Virtualization）

#### サービス仮想化とは？

```
サービス仮想化の定義：
  → テスト対象システムが依存する外部サービス・コンポーネントを
    「模倣（仮想化）」することで、実際のサービスなしでテストできる技法

なぜサービス仮想化が必要か？（アジャイルの課題）：

  課題1：外部サービスが不安定
    → 外部の決済API・天気API等がダウン/遅延すると
      テストが失敗してCIが止まる

  課題2：外部サービスがコストを発生させる
    → 毎回の統合テストで実際の外部APIを呼ぶと費用がかかる

  課題3：外部サービスが開発中
    → フロントエンドとバックエンドを並行開発する際、
      バックエンドAPIがまだ存在しない

  課題4：特定のエラーシナリオを再現できない
    → 本番で発生した「タイムアウト」「429 レート制限」を
      テスト環境で再現するのが難しい

解決策：サービス仮想化！
  → 外部サービスの「動作を模倣した仮想サービス」を作る
```

**スタブ・モック・サービス仮想化の違い（試験頻出）：**

```
テストダブルの種類の比較：

  ┌─────────────────────────────────────────────────────────────┐
  │  種類           │ 複雑さ │ 状態 │ 検証 │ 使用場面           │
  ├─────────────────┼───────┼──────┼──────┼──────────────────┤
  │ Stub（スタブ）   │ 低    │ なし │ なし │ 固定レスポンスの返却│
  │ Mock（モック）   │ 中    │ なし │ あり │ 呼び出しの検証     │
  │ Fake（フェイク） │ 中    │ あり │ なし │ インメモリDB等     │
  │ Spy（スパイ）    │ 中    │ あり │ あり │ 実装の一部を使用   │
  │ サービス仮想化   │ 高    │ あり │ あり │ 複雑な外部サービス  │
  └─────────────────┴───────┴──────┴──────┴──────────────────┘

  スタブ：「常に同じ答えを返す」
    例：get_weather() → {"temp": 25, "condition": "sunny"}
    → シンプルだが、複雑な状態は模倣できない

  モック：「呼ばれたことを確認できる」
    例：email_service.send() が呼ばれたかを検証
    → 単体テストのアサーションに有用

  サービス仮想化：「実際のサービスと同様に振る舞う」
    例：複数のシナリオ（成功・失敗・遅延）を動的に返せる
    → E2E テストや統合テストに最適
```

**サービス仮想化の実装例：**

```python
# WireMock によるサービス仮想化の実装例

import requests
from wiremock.client import WireMock, Mapping, Request, Response

class PaymentServiceVirtualization:
    """外部決済サービスの仮想化"""
    
    def __init__(self, wiremock_url: str = "http://localhost:8080"):
        self.wm = WireMock(wiremock_url)
    
    def setup_success_scenario(self):
        """正常な決済処理のシナリオ"""
        self.wm.add_mapping(
            Mapping(
                request=Request(
                    method="POST",
                    url="/api/v1/payments",
                    body_patterns=[{"matchesJsonPath": "$.amount"}]
                ),
                response=Response(
                    status=200,
                    json_body={
                        "transaction_id": "TXN-12345",
                        "status": "success",
                        "authorized_amount": "${json_request_body.amount}"
                    }
                )
            )
        )
    
    def setup_timeout_scenario(self):
        """タイムアウトシナリオ（リトライロジックのテスト）"""
        self.wm.add_mapping(
            Mapping(
                request=Request(method="POST", url="/api/v1/payments"),
                response=Response(
                    status=200,
                    fixed_delay_milliseconds=30000  # 30秒遅延 = タイムアウト
                )
            )
        )
    
    def setup_rate_limit_scenario(self):
        """レート制限シナリオ（エラーハンドリングのテスト）"""
        self.wm.add_mapping(
            Mapping(
                request=Request(method="POST", url="/api/v1/payments"),
                response=Response(
                    status=429,
                    headers={"Retry-After": "60"},
                    json_body={"error": "rate_limit_exceeded", "message": "Too many requests"}
                )
            )
        )

# テストでの使用例
@pytest.fixture
def payment_virtual_service():
    """テスト用の仮想決済サービス"""
    vs = PaymentServiceVirtualization()
    yield vs
    vs.wm.reset()  # テスト後にリセット

def test_payment_with_timeout_triggers_retry(payment_virtual_service, order_service):
    """決済タイムアウト時に自動リトライが実行されること"""
    # Arrange: タイムアウトシナリオをセットアップ
    payment_virtual_service.setup_timeout_scenario()
    
    # Act: 注文を完了
    with pytest.raises(PaymentTimeoutError) as exc_info:
        order_service.complete_order(amount=10000)
    
    # Assert: 適切なエラーメッセージで失敗すること
    assert "payment service timeout" in str(exc_info.value).lower()

def test_payment_with_rate_limit_is_handled_gracefully(
    payment_virtual_service, order_service, mock_notification
):
    """決済のレート制限時に適切にエラーハンドリングされること"""
    # Arrange
    payment_virtual_service.setup_rate_limit_scenario()
    
    # Act
    result = order_service.complete_order_with_fallback(amount=10000)
    
    # Assert
    assert result.status == "pending_payment"
    assert mock_notification.was_called_with("admin@example.com")
```

**サービス仮想化のメリット（試験頻出）：**

```
サービス仮想化の主なメリット：

  1. 並列開発の促進（シフトレフト）
     → フロントエンドとバックエンドを並行して開発できる
     → バックエンドAPIが完成前にフロントのテストができる

  2. テストの安定性向上
     → 外部サービスの不安定さに影響されない
     → CI/CDパイプラインが安定する

  3. エラーシナリオのテスト
     → タイムアウト・レート制限・500エラー等を再現可能
     → 実際の外部サービスでは再現が難しいシナリオをテスト

  4. コスト削減
     → 外部APIの呼び出し回数を削減
     → テスト環境の整備コストを削減

  5. テスト速度の向上
     → ネットワーク遅延の影響を排除
     → 仮想サービスはローカルで動作するため高速

  6. 環境の独立性
     → 本番環境に影響を与えない
     → テストデータが本番に漏れない

代表的なサービス仮想化ツール：
  ✓ WireMock（Java/多言語）: HTTPモックサーバー
  ✓ MockServer（多言語）: API仮想化
  ✓ Pact（多言語）: コントラクトテスト
  ✓ Karate（Java/DSL）: API テスト + モック
  ✓ Hoverfly（Go）: APIシミュレーション
```

---

<a id="exam-tips"></a>

## 📝 試験対策・サンプル問題

### 試験概要の再確認

```
CTAL-ATT v1.1 試験仕様：
  問題数:    40問（多肢選択問題）
  配点:      各問題は1〜2点（合計64点満点）
  合格点:    42点（約65%）
  試験時間:  90分 / 非英語話者: +25% = 113分

  問題のタイプ：
    K2（理解）: TDD/BDD/ATDDの概念・FIRSTの意味等
    K3（適用）: CIパイプラインの設計・BDDシナリオの実装等
    K4（分析）: ユーザーストーリーの分析・テストチャーターの解釈等
```

### 章別重要度と出題数

| 章 | テーマ | 配点（推定） | 重要度 |
|---|--------|-----------|-------|
| 1 | 要件エンジニアリング | ~8問 | ★★★★ |
| **2** | **アジャイルにおけるテスト（TDD/BDD/ATDD）** | **~18問** | **★★★★★** |
| 3 | テスト自動化 | ~10問 | ★★★★ |
| 4 | デプロイメントとデリバリー | ~9問 | ★★★★ |

### 必ず覚える重要概念

```
✅ INVEST 基準（ユーザーストーリーの品質）：
   Independent / Negotiable / Valuable /
   Estimable / Small / Testable

✅ FIRSTの法則（良いユニットテスト）：
   Fast / Independent / Repeatable /
   Self-Validating / Timely

✅ TDD の Red-Green-Refactor サイクル：
   Red（失敗テスト） → Green（最小コード） → Refactor（整理）

✅ TDD vs BDD vs ATDD の違い：
   TDD: コード品質（開発者中心・ユニットレベル）
   BDD: 振る舞い仕様（チーム全員・受入レベル）
   ATDD: 受入基準先行定義（ビジネス/テスト中心）

✅ 3 Amigos：
   Product Owner + Developer + Tester が共同で受入基準を定義

✅ Gherkin のキーワード：
   Feature / Background / Scenario /
   Scenario Outline / Given / When / Then / And / But / Examples

✅ Specification by Example（SBE）：
   抽象的な要件を「具体的な実例」で仕様化する手法

✅ CD の2つの意味：
   Continuous Delivery: 人間の承認が必要
   Continuous Deployment: 自動でデプロイされる

✅ サービス仮想化のメリット：
   並列開発・安定性・エラーシナリオ・コスト削減・速度向上

✅ テスト自動化ピラミッド：
   ユニット（70%） > 統合（20%） > E2E（10%）

✅ テストダブルの違い：
   スタブ: 固定レスポンス
   モック: 呼び出し検証あり
   サービス仮想化: 複雑なシナリオ対応
```

### サンプル問題と解説

---

**問1（K3 / Chapter 2.1.1 TDD）**

アジャイルプロジェクトで割り算機能を TDD で実装する場合、最初のステップとして正しいのはどれか？

A) 割り算メソッドの実装コードを書く  
B) 割り算メソッドのドキュメントを書く  
C) 割り算メソッドの失敗するテストを書く  
D) 割り算メソッドのリファクタリングを行う  

<details>
<summary>📌 解答を見る</summary>

**正解: C**

TDD の Red-Green-Refactor サイクル：

1. **Red**: まず**失敗するテスト**を書く ← 最初のステップ！
2. Green: テストを通過する**最小限のコード**を書く
3. Refactor: コードを整理する

「実装コードを先に書く」（A）は TDD ではなく従来のアプローチ。
TDD の本質は「テストファースト」にある。

</details>

---

**問2（K2 / Chapter 2.1.1 TDD）**

FIRSTの法則における「I（Independent）」の意味として最も適切なものはどれか？

A) テストはすぐに実行できる必要がある  
B) テストはコードから独立して書かれるべきである  
C) テストは他のテストの実行に依存せず、任意の順序で実行できる  
D) テストは独立したツールで実行できる必要がある  

<details>
<summary>📌 解答を見る</summary>

**正解: C**

FIRST の各要素：

- F (Fast): テストは高速に実行される
- **I (Independent): テストは他のテストに依存しない** ✅
- R (Repeatable): 何度実行しても同じ結果になる
- S (Self-Validating): テストが自動的に合否を判定する
- T (Timely): 本番コード直前に書く

テストの独立性が重要な理由：並列実行が可能になり、実行順序に関係なく結果が一定になる。

</details>

---

**問3（K4 / Chapter 2.1.2 BDD）**

次のGherkin シナリオのうち、BDD のベストプラクティスに最も適合しているものはどれか？

A)

```gherkin
When ユーザーがURL "https://example.com/checkout" に遷移し、
     id="submit-btn" のボタンをクリックする
```

B)

```gherkin
When ユーザーが注文を確定する
```

C)

```gherkin
When ユーザーが購入ボタンをクリックし、ダイアログを確認し、
     注文確認ページに遷移し、メールを確認する
```

D)

```gherkin
When POST /api/v1/orders が 201 ステータスを返す
```

<details>
<summary>📌 解答を見る</summary>

**正解: B**

BDD のベストプラクティス：

- **B): ビジネスの意図（振る舞い）を簡潔に表現** ✅
  → UI の詳細（URL、セレクタ）を含まない
  → 1つのステップに1つのことを書く

- A): UI 固有の詳細（URL、id セレクタ）を含む → 実装依存で壊れやすい
- C): 1つのステップに複数のアクションを含む → 可読性が低い
- D): 技術的な実装詳細（API エンドポイント）を含む → ビジネス視点でない

</details>

---

**問4（K3 / Chapter 4.1 CI/CD）**

アジャイルチームが CI パイプラインでテストを実行する際の推奨される順序はどれか？

A) E2Eテスト → 統合テスト → ユニットテスト  
B) ユニットテスト → 統合テスト → E2Eスモークテスト  
C) 統合テスト → ユニットテスト → E2Eテスト  
D) E2Eテスト → ユニットテスト → 統合テスト  

<details>
<summary>📌 解答を見る</summary>

**正解: B**

CI パイプラインの推奨順序：

1. **ユニットテスト** (~2分): 高速、安定、コスト低 → 最初に実行
2. **統合テスト** (~10分): 中速、コンポーネント間の連携確認
3. **E2Eスモークテスト** (~15分): 遅い・コスト高 → 最後に実行

この順序の理由（フェイルファスト原則）：

- 遅くて不安定なE2Eテストを最初に実行すると、
  単純なコンパイルエラーでも長時間待たされる
- ユニットテストを最初に実行して問題を早期発見する方が効率的

</details>

---

**問5（K2 / Chapter 4.2 サービス仮想化）**

サービス仮想化の主なメリットとして最も適切でないものはどれか？

A) 外部サービスが使用不可な場合でもテストが実行できる  
B) 本番環境の外部サービスを直接テストできる  
C) タイムアウトやエラーなどの異常シナリオを再現できる  
D) フロントエンドとバックエンドの並行開発が可能になる  

<details>
<summary>📌 解答を見る</summary>

**正解: B**

サービス仮想化は「実際の外部サービスを使わずに」テストするための技法です。

- A): ✅ 正しい。外部サービスが不安定でもテストを実行できる
- **B): ✗ 間違い。サービス仮想化は「本番サービスを回避」するもの**
- C): ✅ 正しい。スタブ/モックでは難しい複雑なシナリオを再現できる
- D): ✅ 正しい。フロントエンドとバックエンドを並行開発できる（シフトレフト）

サービス仮想化の目的は「本番サービスに依存しないテスト環境」を作ることです。

</details>

---

**問6（K4 / Chapter 1.1 要件エンジニアリング）**

次のユーザーストーリーの問題点として最も適切なものはどれか？

「オンライン顧客として、高速に商品を注文したい」

A) ストーリーが小さすぎる  
B) 受入基準が測定可能でない（テスト不可能）  
C) ビジネス価値が含まれていない  
D) ユーザーの役割が不明確である  

<details>
<summary>📌 解答を見る</summary>

**正解: B（受入基準が測定可能でない）**

INVEST 基準の T（Testable / テスト可能性）に違反しています。

「高速に」は主観的で、Yes/No で判定できない。

改善例：
「オンライン顧客として、5ステップ以内で商品を注文したい、
 3秒以内に注文確認画面が表示されるから」

- A): ストーリーのサイズについては情報不足
- B): **「高速に」は数値化されておらず、テスト基準が不明確** ✅
- C): 「高速に注文できる」は暗示的にビジネス価値がある
- D): 「オンライン顧客」は明確

</details>

---

### 試験直前チェックリスト

```
✅ Chapter 1 要件エンジニアリング:

□ ユーザーストーリーの "As a / I want / So that" 形式を説明できる
□ エピックとユーザーストーリーの違いを説明できる
□ INVEST 基準の6要素を全て言える
□ 受入基準の引き出し技法（3 Amigos、ブレインストーミング等）を説明できる
□ Gherkin の Given-When-Then 形式で受入基準を書ける
□ Specification by Example（SBE）の概念を説明できる

✅ Chapter 2 アジャイルにおけるテスト（最重要）:

□ TDD のRed-Green-Refactor サイクルを順番に説明できる
□ FIRST の5要素を全て説明できる
□ TDD・BDD・ATDD の違いを表で比較できる
□ Gherkin のキーワード（Feature, Scenario, Given, When, Then等）を全て言える
□ BDD の良いシナリオの書き方のルールを3つ以上言える
□ 3 Amigos の3つのロールと各役割を説明できる
□ ATDD のワークフローを説明できる
□ テストチャーターの EXPLORE/TO DISCOVER/USING 形式を説明できる
□ テストコードのリファクタリングのタスクリストを説明できる
□ 技術的負債の意図的・非意図的の違いを説明できる

✅ Chapter 3 テスト自動化:

□ データ駆動テストとキーワード駆動テストの違いを説明できる
□ テスト自動化ピラミッドの3層（ユニット70%/統合20%/E2E10%）を説明できる
□ アジャイル特有のテスト自動化の課題を5つ以上説明できる
□ フレイキーテストの原因と対策を説明できる

✅ Chapter 4 デプロイメントとデリバリー:

□ CI・CT・CD（継続的デリバリー）・CD（継続的デプロイメント）の違いを説明できる
□ CIの8つの基本原則を説明できる
□ サービス仮想化の定義とメリット（6つ）を説明できる
□ スタブ・モック・サービス仮想化の違いを説明できる
□ サービス仮想化が「並行開発」を可能にする仕組みを説明できる
```

---

<a id="references"></a>

## 📚 参照URL一覧

### 🏛️ 公式ISTQB® リソース

| リソース | URL |
|---------|-----|
| **CTAL-ATT 認定ページ（公式）** | <https://istqb.org/certifications/certified-tester-advanced-level-agile-technical-tester-ctal-att/> |
| **CTAL-ATT シラバス v1.1 ダウンロード** | <https://istqb.org/?sdm_process_download=1&download_id=3658> |
| **サンプル試験問題 v1.3** | <https://istqb.org/?sdm_process_download=1&download_id=3659> |
| **サンプル試験解答 v1.3** | <https://istqb.org/?sdm_process_download=1&download_id=3660> |
| **CTAL-ATT 認定ガイドライン v1.0** | <https://istqb.org/?sdm_process_download=1&download_id=3663> |
| **CTAL-ATT 概要 v1.1（Overview）** | <https://istqb.org/?sdm_process_download=1&download_id=3664> |
| **試験構造とルール v1.2** | <https://istqb.org/?sdm_process_download=1&download_id=3829> |
| **ISTQBグロッサリー** | <https://glossary.istqb.org/en_US/search?term=> |

### 📢 試験プロバイダー

| リソース | URL |
|---------|-----|
| iSQI 試験情報（CTAL-ATT） | <https://isqi.org/ISTQB-Certified-Tester-Agile-Technical-Tester-CTAL-ATT/CT-AL-ATT> |
| Brightest（試験・バッジ） | <https://www.brightest.org/en/certifications/ISTQB-r-CTAL-Agile-Technical-Tester-1/> |
| ANZTB（オーストラリア・NZ） | <https://www.anztb.org/certification/ctal-att/> |
| 試験プロバイダー検索 | <https://istqb.org/exam-providers/> |
| 研修プロバイダー検索 | <https://istqb.org/training-providers/> |

### 🎓 学習リソース

| リソース | URL |
|---------|-----|
| ISTQB.Guru CTAL-ATT ガイド | <https://www.istqb.guru/agile-technical-tester/> |
| ISTQB.Guru ATT キャリア解説 | <https://www.istqb.guru/your-guide-to-agile-technical-tester-certification/> |
| Coveros CTAL-ATT トレーニング | <https://training.coveros.com/> |
| ILX Group ATT コース（米国） | <https://www.ilxgroup.com/usa/training/istqb/ctal-att> |
| TSG Training ATT（英国） | <https://tsg-training.co.uk/course/istqb-certified-tester-agile-technical-tester-ctal-att/> |
| Udemy CTAL-ATT コース | <https://www.udemy.com/course/istqb-advanced-agile-technical-tester-att/> |
| Codecademy ATT 認定パス | <https://www.codecademy.com/learn/ext-paths/istqb-r-certified-tester-advanced-level-agile-technical-tester-ctal-att> |

### 📖 関連資格

| 資格 | URL |
|------|-----|
| CTFL v4.0（前提資格） | <https://istqb.org/certifications/certified-tester-foundation-level/> |
| CTAL-TTA（Technical Test Analyst） | <https://istqb.org/certifications/certified-tester-advanced-level-technical-test-analyst-ctal-tta/> |
| CTAL-TM v3.0（Test Management） | <https://istqb.org/certifications/certified-tester-advanced-level-test-management-ctal-tm-v3-0/> |
| CTAL-TAE v2.0（Test Automation Engineering） | <https://istqb.org/certifications/certified-tester-advanced-level-test-automation-engineering-ctal-tae-v2-0/> |

### 🔧 主要ツール・フレームワーク

| カテゴリ | ツール | URL |
|---------|-------|-----|
| BDD | Cucumber/Gherkin 公式 | <https://cucumber.io/docs/gherkin/> |
| BDD | Behave（Python） | <https://behave.readthedocs.io/> |
| BDD | pytest-bdd | <https://pytest-bdd.readthedocs.io/> |
| TDD | Python unittest | <https://docs.python.org/3/library/unittest.html> |
| TDD | pytest 公式 | <https://docs.pytest.org/> |
| TDD | JUnit 5（Java） | <https://junit.org/junit5/> |
| ミューテーション | Mutmut（Python） | <https://mutmut.readthedocs.io/> |
| CI/CD | GitHub Actions | <https://docs.github.com/en/actions> |
| CI/CD | GitLab CI/CD | <https://docs.gitlab.com/ee/ci/> |
| サービス仮想化 | WireMock | <https://wiremock.org/docs/> |
| サービス仮想化 | MockServer | <https://www.mock-server.com/> |
| サービス仮想化 | Pact（契約テスト） | <https://docs.pact.io/> |
| パフォーマンス | k6 | <https://grafana.com/docs/k6/latest/> |
| コード品質 | SonarQube | <https://docs.sonarqube.org/> |
| テストオートメーション | Playwright | <https://playwright.dev/> |
| テストオートメーション | Robot Framework | <https://robotframework.org/> |

### 📋 参考書籍

| タイトル | 著者 |
|---------|------|
| Test Driven Development: By Example | Kent Beck（2002） |
| BDD in Action | John Ferguson Smart（2015） |
| Specification by Example | Gojko Adzic（2011） |
| Agile Testing: A Practical Guide | Crispin & Gregory（2008） |
| Explore It! | Elisabeth Hendrickson（2013） |

---

## 🏁 まとめ：Agile Technical Testerとして成功するための10の鉄則

```
1. 🔴 テストファースト（TDD）を実践する
   → コードを書く前に失敗するテストを書く
   → FIRSTの法則に従った高品質なユニットテストを維持する

2. 🗣️ 受入基準を開発前に定義する（ATDD）
   → 3 Amigos ミーティングで PO・Dev・QA が合意
   → 曖昧な「高速に」「ユーザーフレンドリー」を数値化する

3. 📖 Gherkin で「生きたドキュメント」を作る（BDD）
   → 技術的詳細ではなくビジネスの振る舞いを記述
   → シナリオはビジネス関係者が読んで理解できること

4. 🏗️ テスト自動化ピラミッドを守る
   → ユニット70% > 統合20% > E2E10% の比率を維持
   → UIより API・ユニットレイヤーのテストを優先

5. ⚡ CI/CDパイプラインを守護する
   → テストが全通過しないとマージ・デプロイできない仕組み
   → ビルドが壊れたら最優先で修正する

6. 🔧 フレイキーテストを根絶する
   → 固定sleep()を条件ベースの待機に置き換える
   → テストの独立性を確保して並列実行を可能にする

7. 🌐 サービス仮想化で外部依存を排除する
   → 外部APIのスタブ/モック/仮想化でテストを安定させる
   → エラーシナリオを仮想化で再現してエッジケースを網羅

8. 📊 テストコードもリファクタリングする
   → 技術的負債はテストコードにも溜まる
   → Definition of Done に「テストコードがクリーン」を含める

9. 👥 ホールチームアプローチで品質を内製化する
   → テストは「テスターだけの仕事」ではない
   → 開発者・テスター・PO全員が品質に責任を持つ

10. 🔄 継続的に改善する（Shift Left）
    → バグを早期に発見するほどコストは低い
    → レトロスペクティブでテストプロセスを常に改善する
```

---

> **📌 作成日**: 2025年  
> **📌 準拠資格**: ISTQB CTAL-ATT v1.1（2020年1月28日正式リリース）  
> **📌 次のステップ**:
> - CTAL-TTA（Technical Test Analyst）でホワイトボックス・非機能テストを深掘り
> - CTAL-TM v3.0（Test Management）でテスト管理スキルを習得
> - CTAL-TAE v2.0（Test Automation Engineering）で自動化を極める
>
> 🔗 **公式リソース**: <https://istqb.org/certifications/certified-tester-advanced-level-agile-technical-tester-ctal-att/>

---

> ⚠️ **免責事項**: 本ガイドはISTQB®が公認したトレーニング資料ではありません。
> 公式シラバス・サンプル問題と合わせて使用してください。
> 試験情報の最終確認は必ず公式サイト（istqb.org）で行ってください。
