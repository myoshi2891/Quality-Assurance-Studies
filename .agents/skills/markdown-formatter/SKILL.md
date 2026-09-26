---
name: qa-studies-markdown-formatter
description: >
  Comprehensive guide and rules for formatting Markdown files to comply with the project's `.markdownlint.json` configuration.
  Addresses common errors like MD031, MD022, MD032, and MD047.
  Trigger: Markdownリント, markdownlint, markdown formatting, MD031, MD022, blanks-around-fences, blanks-around-headers, MD047.
---

# QA_Studies Markdown Formatting & Linting Guide

## Goal

This skill provides rules and best practices to ensure all Markdown documents (`.md` files) in the QA_Studies repository comply with the project's strict `.markdownlint.json` rules, preventing CI/CD build breakages due to markdown lint errors.

## 頻発する Markdown Lint エラーと修正パターン

### 1. MD031: blanks-around-fences (コードブロック前後の空行)

**問題**: ``` で囲まれたコードブロックの直前または直後に空行（改行）がない。特にリストの直下にネストされているコードブロックで多発します。

#### ❌ 違反例

````markdown
- **tests/lib/navigation.test.ts**:
  - `NAV_ITEMS` の総数を検証します。
  ```typescript
  expect(NAV_ITEMS).toHaveLength(25);
  ```
````

#### ✅ 修正例

リストのネスト内であっても、コードブロックの前後に**インデントされた空行**を挿入します。

````markdown
- **tests/lib/navigation.test.ts**:
  - `NAV_ITEMS` の総数を検証します。

  ```typescript
  expect(NAV_ITEMS).toHaveLength(25);
  ```
````

---

### 2. MD022: blanks-around-headers (見出し前後の空行)

**問題**: 見出し（`#`, `##`, `###` など）の直前または直後に空行がない。

#### ❌ 違反例

```markdown
## セクションタイトル
本文テキストがすぐに始まります。
```

#### ✅ 修正例

見出しの上下には必ず1行の空行を挟んでください。

```markdown
## セクションタイトル

本文テキストがすぐに始まります。
```

---

### 3. MD032: blanks-around-lists (リスト前後の空行)

**問題**: 箇条書きリスト（`-`, `*`, `1.` など）の直前または直後に空行がなく、通常のパラグラフテキストと連結している。

#### ❌ 違反例

```markdown
以下の手順に従ってください。
- ステップ 1
- ステップ 2
完了したら報告します。
```

#### ✅ 修正例

リストブロックの前後には必ず空行を挟んでください。

```markdown
以下の手順に従ってください。

- ステップ 1
- ステップ 2

完了したら報告します。
```

---

### 4. MD047: single-trailing-newline (ファイル末尾の改行)

**問題**: ファイルの最終行の末尾に改行文字（LF）がない。

#### ❌ 違反例

```markdown
...最後の行の文章（ファイルの末尾に改行がない状態）[EOF]
```

#### ✅ 修正例

ファイルの最後は必ず1行の空行（改行で終わる状態）にしてください。

```markdown
...最後の行 of the text
[EOF]
```

---

### 5. MD012: no-multiple-blanks (連続した空行)

**問題**: 2行以上の連続した空行が記述されている。

#### ❌ 違反例

```markdown
パラグラフ1


パラグラフ2（空行が2行以上挟まれている）
```

#### ✅ 修正例

空行は常に「最大1行」としてください。

```markdown
パラグラフ1

パラグラフ2
```

---

### 6. MD033: no-inline-html (インラインHTMLの禁止)

**問題**: Markdown 内に `<br>`, `<img>`, `<a>` などの HTML タグが直接書かれている。

* **例外**: プロジェクトで意図的に HTML レンダリングする特定のダッシュボードやスライドコンポーネント用ファイル（例: `docs/coverage-dashboard.html`、またはマークダウン内で特別に許可されたアコーディオン等）を除き、原則として標準の Markdown 記法を使用してください。
* **改行の代替案**: 行末に 2 つのスペースを入れる（ダブルスペース改行）、または新しいパラグラフ（空行を挟む）として分割してください。

---

## ワークフロー (検証と修正の手順)

AI エージェントは Markdown ファイルを新規作成・修正した際、コミットする前に必ず以下の手順を実行しなければなりません。

### Step 1: 該当構造の手動修正

上記の修正パターンに従い、見出し前後の空行・コードブロック前後の空行・末尾改行などを該当箇所ごとに手動で修正します。

> [!CAUTION]
> **手動修正ルール**: 自動整形スクリプトは、リスト内のネストされたコードブロックなど複雑な構造で意図しない崩れを起こす可能性があるため使用しません。修正後は `git diff` で意図した箇所だけが変更されていることを確認してください。

### Step 2: Linter による検証

次に、プロジェクトの `.markdownlint.json` に従って Linter を実行し、残存するエラーがないかを確認します。

```bash
# Bun を使用して markdownlint-cli を実行
bun x markdownlint-cli <file_path>
```

エラーが出力されなくなるまで、手動でマークダウンを修正します。

### Step 3: PII の機械的検証

変更したファイルを Git にステージング（`git add`）した後、リポジトリのセキュリティ規則（`no-absolute-paths.md`）に基づき、絶対パスや PII が含まれていないか必ず検証します。

```bash
# パターンは [e] / [m] で分割し、このコマンド自体が差分に含まれても自己一致しないようにする
# 各段の失敗は検査中止（exit 2）とし、grep の「該当なし（終了コード 1）」だけを成功として扱う
(
  abort() { echo "❌ $1 ため PII 検査を中止します" >&2; exit 2; }
  SCAN=$(mktemp) && STRIPPED=$(mktemp) || abort "一時ファイルを作成できない"
  trap 'rm -f "$SCAN" "$STRIPPED"' EXIT
  # --text でバイナリファイルも内容を差分として出力させる（既定の "Binary files differ" では中身が走査されない）
  DIFF=$(git diff --cached --text --no-color) || abort "git diff --cached に失敗した"
  # 追加行だけを抽出する。diff ヘッダー（diff --git 〜 最初の @@）だけを除外し、"++" で始まる追加行は取りこぼさない
  printf '%s\n' "$DIFF" | awk '/^diff --/{h=1; next} /^@@/{h=0; next} h{next} /^\+/{print substr($0, 2)}' > "$SCAN" || abort "差分の抽出に失敗した"
  # プレースホルダー（johndoe）の後に .. セグメントが続くパスは、接頭辞の除去で実パスが隠れるため除去前に拒否する
  # パスに空白が含まれても検出できるよう、同じ行の残り全体を .. セグメントの探索対象にする（誤検出は安全側に倒す）
  # grep を if の条件にし、set -e 下でも「該当なし（終了コード 1）」で検査が中断されないようにする
  if grep -E '(/[Uu][Ss][Ee][Rr][Ss]/johndoe|/ho[m]e/johndoe|[A-Za-z]:[\\/][Uu][Ss][Ee][Rr][Ss][\\/]johndoe|/ho[m]e/runner/work|/[Uu][Ss][Ee][Rr][Ss]/runner/work|/ho[m]e/circleci/project|/githu[b]/workspace).*[/\\]\.\.([/\\]|$)' "$SCAN"; then TRAVERSAL=0; else TRAVERSAL=$?; fi
  # 許可されたプレースホルダーの一致部分だけを除去し、同じ行にある他の絶対パスは検出し続ける
  # 既知の非個人 CI 作業ルート（GitHub Actions の Linux / macOS ランナー、コンテナアクション、CircleCI）も
  # パスの先頭にある場合だけ除去し、通常のワークスペースパスを誤検出しない（.. が続く場合は上の TRAVERSAL で拒否）
  sed -E -e 's#(/[Uu][Ss][Ee][Rr][Ss]/johndoe/|/ho[m]e/johndoe/|[A-Za-z]:[\\/][Uu][Ss][Ee][Rr][Ss][\\/]johndoe[\\/])##g' -e 's#(^|[^A-Za-z0-9._~/-])(/ho[m]e/runner/work/|/[Uu][Ss][Ee][Rr][Ss]/runner/work/|/ho[m]e/circleci/project/|/githu[b]/workspace/)#\1#g' "$SCAN" > "$STRIPPED" || abort "プレースホルダーの除去に失敗した"
  # 既知の接頭辞以外（/workspace/<ユーザー名>/ 等）の独自 POSIX 絶対パスも検出するため、
  # 実行ユーザー名をパス区切りで挟んだセグメントも検査する（ユーザー名は ERE 用にエスケープ）
  PII_USER=$(id -un) && [ -n "$PII_USER" ] || abort "実行ユーザー名を取得できない"
  PII_USER_RE=$(printf '%s' "$PII_USER" | sed 's/[][\.*^$+?(){}|]/\\&/g') || abort "ユーザー名をエスケープできない"
  # macOS は大文字小文字を区別しないため、Users ディレクトリの小文字表記など大小文字違いの POSIX パスも検出する
  # 実行ユーザー以外のユーザー名を含む POSIX 絶対パスも検出するため、ユーザー名に依存しない規則も併用する:
  # root のホーム / Linux のリムーバブルメディア / ユーザーごとのランタイムディレクトリ / macOS の外部ボリューム
  if grep -E "(/[Uu][Ss][Ee][Rr][Ss]/|/ho[m]e/|[A-Za-z]:[\\\\/][Uu][Ss][Ee][Rr][Ss][\\\\/]|/${PII_USER_RE}(/|\$)|(^|[^A-Za-z0-9._~/-])(/ro[o]t(/|\$)|/medi[a]/[^/[:space:]]+/|/ru[n]/user/[0-9]+(/|\$)|/Volume[s]/[^/[:space:]]+/))" "$STRIPPED"; then ABSOLUTE=0; else ABSOLUTE=$?; fi
  # grep の終了コード: 0 = 検出 / 1 = 未検出 / 2 以上 = 走査自体の失敗
  [ "$TRAVERSAL" -le 1 ] && [ "$ABSOLUTE" -le 1 ] || abort "grep による走査に失敗した"
  if [ "$TRAVERSAL" -eq 0 ] || [ "$ABSOLUTE" -eq 0 ]; then echo "❌ PII detected" >&2; exit 1; fi
  echo "PII check passed"
)
```

`PII check passed` が表示された（終了コード 0）ことを確認してから、コミットを適用してください。終了コード 1（検出）は該当箇所を修正し、2（検査中止）は原因を解消して再実行します。
