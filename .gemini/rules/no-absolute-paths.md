# リポジトリ内ファイルへの絶対パス記載禁止ルール

## ルール

コミット対象のファイル（ドキュメント、設定ファイル、コードのコメント等）に
ユーザー名を含む絶対パスを記載してはならない。

**禁止例**:

```text
/Users/johndoe/.claude/plans/my-plan.md
/home/johndoe/workspace/project/...
C:\Users\johndoe\...
```

**許可例**:

```text
.claude/plans/my-plan.md        （リポジトリルートからの相対パス）
~/.claude/plans/my-plan.md      （チルダ展開形式、リポジトリ内ではなくローカルを示すときのみ）
```

## 適用対象

- `docs/MIGRATION_PROGRESS.md` などのドキュメント
- `.claude/rules/` や `.claude/plans/` 内のファイル
- コードのコメント・JSDoc
- 設定ファイル（`.claude/settings.json` 等）

## 外部ファイルを参照したい場合

`~/.claude/plans/` 等のリポジトリ外ファイルをコミット対象のドキュメントから
参照したい場合は、そのファイルを先にリポジトリ内（`.claude/plans/` 等）へコピーしてから
相対パスで参照する。

```bash
cp ~/.claude/plans/some-plan.md .claude/plans/some-plan.md
git add .claude/plans/some-plan.md
```

## 理由

絶対パスにはOS上のユーザー名が含まれ、パブリックリポジトリや
チームへのプッシュ時に個人情報を晒すリスクがある。

## AI エージェント向けの検証手順（必須）

AI エージェントは、`git commit` などのコミットを行う前に、必ずステージングされた変更差分（`git diff --cached`）に対して、ローカル絶対パスやユーザー名が含まれていないかを機械的に確認しなければなりません。

具体的には、コミット前に以下の検証用の検索コマンド（または同等の差分走査）を自律的に実行し、PII が混入していないことを検証してください。

```bash
# コミット対象の差分にローカル絶対パス（Users/ や home/）が含まれていないかチェック
# 追加行から絶対パス部分だけを抽出してから、ホーム直下のユーザー名が johndoe であるもの（プレースホルダー）だけを除外する
# （行単位で除外すると、同じ行にある他の実パスまで見逃すため）
# ただし johndoe/../ のように ".." セグメントで別ユーザーのディレクトリへ抜けるパスは除外しない
# 追加行の抽出は diff ヘッダー（diff --git 〜 最初の @@）だけを除外し、先頭の + を 1 文字だけ外す（"+" で始まる追加内容も走査対象に残す）
# 各段階の失敗を「該当なし」と区別する: git / awk の失敗は pipefail で検出し、grep は 1（該当なし）のみを正常とみなす
# --text でバイナリ扱いのファイルも中身を差分に含め、NUL は空白に置き換えて awk が行を途中で打ち切らないようにする（走査から漏らさない）
if ! added=$(set -o pipefail; git diff --cached --text | tr '\000' ' ' | awk '/^diff --/{h=1; next} /^@@/{h=0; next} h{next} /^\+/{print substr($0, 2)}'); then
  echo "diff extraction failed — abort commit" >&2
  exit 1
fi
# grep を if の条件に置き、errexit（set -e）下でも終了ステータスを記録する前にシェルが終了しないようにする
# pipefail で grep の失敗を sed の終了ステータスに隠さず、下の rc 判定へ渡す
# file:// URI は境界の文字クラスを緩めず接頭辞として許可し（https URL のパス部分は対象外のまま）、sed で先頭を単一の / に揃えてプレースホルダー判定へ渡す
# Windows の file:// URI はドライブ文字の前に / が付いた形へ揃うため、プレースホルダー判定でもその形を認める
# 別のパス要素より下にあるユーザーディレクトリ（WSL のドライブマウントや外部ボリューム配下など）も検出する。起点は境界の直後に限り、途中の要素は空にできないため、URL のパス部分と相対パスは対象外のまま
# opt / srv / workspace は Homebrew の共有ディレクトリなどを誤検出しないよう、ルート直下だけを対象にする
# Windows のドライブは C: に限らず、大文字・小文字の全ドライブ文字を検出する。ドライブ文字で始まる一致を消さないよう、sed は境界の 1 文字と file:// だけを外す
# 空白を含むパス要素も検出する。空白は要素の内側だけに許可し、2 語目以降は ":" を含められない（同じ行の別のドライブや URL スキームまで 1 要素にしないため）。区切り文字が続かない語は末尾の文章とみなして取り込まない
seg='[^/[:space:]"'\''`<>]+( +[^/:[:space:]"'\''`<>]+)*'
win='[^\\[:space:]"'\''`<>]+( +[^\\:[:space:]"'\''`<>]+)*'
word='[^/\\:[:space:]"'\''`<>]+'
if paths=$(set -o pipefail; printf '%s\n' "$added" | grep -oE '((^|[^A-Za-z0-9._~/-])(file://(localhost)?)?/(('"$seg"'/)*(User[s]|hom[e])|op[t]|sr[v]|workspac[e])/|[A-Za-z]:\\('"$win"'\\)*[Uu][Ss][Ee][Rr][Ss]\\)[^[:space:]"'\''`]*( +('"$word"' +)*'"$word"'[/\\][^[:space:]"'\''`]*)*' | sed -E -e 's#^[^/A-Za-z]*##' -e 's#^file://(localhost)?##'); then
  rc=0
else
  rc=$?
fi
if [ "$rc" -gt 1 ]; then
  echo "grep failed (exit $rc) — abort commit" >&2
  exit 1
fi
if [ "$rc" -eq 0 ]; then
  if ! hits=$(printf '%s\n' "$paths" | awk '{ d = tolower($0); gsub(/%2e/, ".", d); gsub(/%2f|%5c/, "/", d) }  # パーセントエンコードされた ".."・区切りも復号して判定する
         d ~ /(^|[\/\\])\.\.([\/\\]|$)/ { print; next }  # ".." を含むパスはプレースホルダー除外より先に必ず検出する
         !/^(\/User[s]\/|\/hom[e]\/|\/[A-Za-z]:\/[Uu][Ss][Ee][Rr][Ss]\/|[A-Za-z]:\\[Uu][Ss][Ee][Rr][Ss]\\)johndoe([\/\\]|$)/ { print; next }
         { p = $0; sub(/^(\/User[s]\/|\/hom[e]\/|\/[A-Za-z]:\/[Uu][Ss][Ee][Rr][Ss]\/|[A-Za-z]:\\[Uu][Ss][Ee][Rr][Ss]\\)johndoe/, ""); d = tolower($0); if (d ~ /[\/\\](user[s]|hom[e])[\/\\]/) print p }  # プレースホルダーより下に別のユーザーディレクトリがあるパスも検出する
         '); then
    echo "placeholder filter failed — abort commit" >&2
    exit 1
  fi
  if [ -n "$hits" ]; then
    printf '%s\n' "$hits"
    echo "PII detected — abort commit" >&2
    exit 1
  fi
fi
echo "PII check passed"
```

このチェックで結果（追加行）が出力された場合は、該当箇所を削除または相対パスに変更し、クリーンであることを確認した上でコミットを実行してください。
