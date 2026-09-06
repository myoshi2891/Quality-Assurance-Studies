---
paths:
  - "app/**/*.tsx"
  - "app/**/*.css"
  - "docs/MIGRATION_PROGRESS.md"
---

# docs/MIGRATION_PROGRESS.md セッション終了前同期ルール

HTML → Next.js 移行セッションでは、**コンテキストが逼迫する前に**必ず以下を実施してセッションを終えること。

## 実行タイミング

<ai_agent_directive>
**AI エージェントへの厳格な指示**: このプロトコルは提案ではなく絶対的な**ゲート条件（Gate Condition）**です。
ユーザーへ作業完了を報告する前に、以下の手続きを **必ずこの順序で、ステップバイステップに** 準備してください。

1. コード変更のコミット
2. `docs/MIGRATION_PROGRESS.md` の更新
3. 進捗ファイルの**独立した**コミット

ステップバイステップのコミット分割ルールを無視して一括コミットを行うことは重大な規約違反です。

ただし **`git commit` の実行にはユーザーの明示的な承認が必須**です（`.claude/skills/html-to-nextjs-migration/SKILL.md` のポリシーと同一）。各コミットの前に必ず以下を行ってください。

1. `git status` / `git diff --cached` でステージ内容を点検し、**そのコミットの意図に含まれるファイルだけ**がステージされていることを確認する
2. `git add <明示的なファイルパス>`（または `git commit -- <明示的なファイルパス>`）でファイルを明示指定する。`git add -A` / `git add .` のような一括ステージは使わない
3. コミット対象ファイルとコミットメッセージ案をユーザーへ提示し、**明示的な承認を得てから** `git commit` を実行する

承認を得ずに自動でコミットを作成してはなりません。承認待ちでコミットが保留になる場合も、上記 1〜3 の準備と手順 2 の進捗ファイル更新は完了させたうえで報告してください。
</ai_agent_directive>

### 必須（毎ページ・例外なし）

**1ページの `git commit` 完了直後、次の HTML を `Read` し始める前に即実施する。**

これは任意の「区切り」ではなく、次ページ読み込みのための**ゲート条件**。
`docs/MIGRATION_PROGRESS.md` が未コミットの状態で次の HTML を読み始めることは禁止。

### 追加トリガー

- コンテキスト消費が大きくなってきた
- ユーザーが新セッション開始を示唆
- ユーザーが「セッション終了」「仕様書更新して」と言った

## 手順

### 1. テスト・Linter確認 & PII スキャン

> [!IMPORTANT]
> **サンドボックス環境におけるビルド実行禁止ルール:**
> Antigravityのサンドボックス環境においては、ビルドのバックグラウンド実行が正常にハンドリングされずローカルメモリを過度に圧迫しクラッシュを引き起こす問題があるため、AIエージェントは**自律的・自動的に本番ビルドコマンド（`bun run build` 等）を実行してはなりません**。
> 検証はテスト（`bun test`）と Linter（`bun run lint`）で実施し、本番ビルドの成否確認はユーザーに依頼してください。

```bash
# 1. テストとLinterの検証
bun test tests/<page-slug>/page.test.tsx
bun run lint

# 2. コミット予定差分の PII / ローカル絶対パス機械的走査【必須 Gate Condition】
#    検出時は終了コード 1 で失敗させ、コミットを中止して相対パスへ修正する
#    （grep パターン自身が自己一致しないよう文字クラスで 1 文字を分割している）
if git diff --cached | grep -E '^\+[^+]' | grep -E '(/Us[e]rs/|/ho[m]e/|[A-Za-z]:\\[Uu][Ss][Ee][Rr][Ss]\\|\\\\[A-Za-z0-9._-]+\\[Uu][Ss][Ee][Rr][Ss]\\)'; then
  echo "PII detected — abort commit" >&2
  exit 1
fi
echo "PII check passed"

# 3. 最新コミットハッシュの取得
git rev-parse --short HEAD
```

### 2. `docs/MIGRATION_PROGRESS.md` を更新

更新対象フィールド:

| フィールド | 更新内容 |
|---|---|
| `最新 HEAD` | `git rev-parse --short HEAD` の実値 + コミットメッセージ要約 |
| `次の作業` | 次セッションで **最初に** 取り掛かるページ（例: `istqb-ct-mbt-complete-guide.html 移行`） |
| `ビルド状態` | `bun run build` / `bun run lint` の最新状態 |

### 3. `## 次回セッションでの再開プロンプト` を同期

`現在地` の値と一致するように再開プロンプト内の以下を書き換える:

- `最新 HEAD: <hash>` の値
- `次の作業:` の説明（ページ粒度で具体的に）
- 未移行 HTML の残数

### 4. コミット（ユーザーの明示的な承認後に実行）

進捗ファイルは**コード変更とは別のコミット**にする。ステージは常にファイルを明示指定し、
`git diff --cached` で意図した 1 ファイルだけが含まれることを確認してからユーザーへ承認を求める。

ステージ後は**承認を求める前に**、この差分に対して再度 PII / ローカル絶対パスの機械的走査を行う。
手順 1 の走査はコード変更の差分に対するものであり、進捗ファイルの差分は覆っていないため省略できない。

```bash
git add docs/MIGRATION_PROGRESS.md
git diff --cached --name-only   # docs/MIGRATION_PROGRESS.md のみであることを確認する

# ステージ済み差分の PII / ローカル絶対パス走査【必須 Gate Condition】
# 検出時はコミットを中止し、相対パス（または ~/ 形式）へ修正してからやり直す
if git diff --cached | grep -E '^\+[^+]' | grep -E '(/Us[e]rs/|/ho[m]e/|[A-Za-z]:\\[Uu][Ss][Ee][Rr][Ss]\\|\\\\[A-Za-z0-9._-]+\\[Uu][Ss][Ee][Rr][Ss]\\)'; then
  echo "PII detected — abort commit" >&2
  exit 1
fi
echo "PII check passed"

# ここでコミットメッセージ案をユーザーへ提示し、明示的な承認を得る
git commit -m "chore(docs): update docs/MIGRATION_PROGRESS.md — <作業内容の1行要約>"
```

## 禁止

- HEAD 値をコミットせず新セッションに引き継ぐ（ズレが発生する）
- 再開プロンプトと `現在地` が食い違ったままコミットする
- ビルドエラーが残ったままコミットする
- ユーザーの明示的な承認を得ずに `git commit` を実行する
- コード変更と進捗ファイル更新を 1 つのコミットにまとめる
- `git add -A` / `git add .` で意図しないファイルを巻き込んでコミットする
