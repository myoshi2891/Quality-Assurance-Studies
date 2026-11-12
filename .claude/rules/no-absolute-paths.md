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
# >>> pii-scan
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
# UNC パスも Windows のドライブと同じ規則で検出する（サーバー名と共有名は途中の要素として扱う）
# 空白を含むパス要素も検出する。空白は要素の内側だけに許可し、2 語目以降は ":" を含められない（同じ行の別のドライブや URL スキームまで 1 要素にしないため）。区切り文字が続かない語は末尾の文章とみなして取り込まない
seg='[^/[:space:]"'\''`<>]+( +[^/:[:space:]"'\''`<>]+)*'
win='[^\\[:space:]"'\''`<>]+( +[^\\:[:space:]"'\''`<>]+)*'
word='[^/\\:[:space:]"'\''`<>]+'
# file:// URI 内のパーセントエンコードされた保護ディレクトリ名（先頭文字を含む）も検出する
usr='(U|%55)(s|%73)(e|%65)(r|%72)(s|%73)'
hm='(h|%68)(o|%[6][fF])(m|%[6][dD])(e|%65)'
# %2F・%5C でエンコードされた区切り文字は抽出前に復号する（URL のパス部分は境界の判定により対象外のまま）
if paths=$(set -o pipefail; printf '%s\n' "$added" | sed -E -e 's#%2[fF]#/#g' -e 's#%5[cC]#\\#g' | grep -oE '((^|[^A-Za-z0-9._~/-])(file://(localhost)?)?/(('"$seg"'/)*('"$usr"'|'"$hm"')|op[t]|sr[v]|workspac[e])/|[A-Za-z]:\\('"$win"'\\)*[Uu][Ss][Ee][Rr][Ss]\\|\\\\[^\\[:space:]]+\\('"$win"'\\)*[Uu][Ss][Ee][Rr][Ss]\\)[^[:space:]"'\''`]*( +('"$word"' +)*'"$word"'[/\\][^[:space:]"'\''`]*)*' | sed -E -e 's#^[^/A-Za-z]*##' -e 's#^file://(localhost)?##'); then
  rc=0
else
  rc=$?
fi
if [ "$rc" -gt 1 ]; then
  echo "grep failed (exit $rc) — abort commit" >&2
  exit 1
fi
if [ "$rc" -eq 0 ]; then
  # %XX は 1 回だけ復号し、".."・保護ディレクトリ・プレースホルダーの判定をすべて復号後の値で行う（検出時は元の表記を表示する）
  # 16 進数の変換は macOS awk / mawk でも動くよう index() で行い、制御文字と非 ASCII は復号しない
  # プレースホルダーとして除外するのは、保護ディレクトリがパス全体で 1 つだけで、その直下が johndoe のものに限る（途中の要素に別のユーザーディレクトリがあれば除外しない。opt / srv / workspace はルート直下の要素がユーザー名の場合があるため、配下のプレースホルダーも除外しない）
  if ! hits=$(printf '%s\n' "$paths" | awk '
         function decode(s, out, h, c) {
           out = ""
           while (match(s, /%[0-9A-Fa-f][0-9A-Fa-f]/)) {
             h = tolower(substr(s, RSTART + 1, 2))
             c = (index("0123456789abcdef", substr(h, 1, 1)) - 1) * 16 + index("0123456789abcdef", substr(h, 2, 1)) - 1
             out = out substr(s, 1, RSTART - 1) (c >= 32 && c < 127 ? sprintf("%c", c) : substr(s, RSTART, 3))
             s = substr(s, RSTART + RLENGTH)
           }
           return out s
         }
         {
           d = decode($0); gsub(/\\/, "/", d); n = split(d, part, "/"); count = 0; first = 0
           if (d ~ /^\/(op[t]|sr[v]|workspac[e])\//) { print; next }
           for (i = 1; i <= n; i++) {
             if (part[i] == "..") { print; next }
             if (tolower(part[i]) ~ /^(user[s]|hom[e])$/) { count++; if (first == 0) first = i }
           }
           if (count != 1 || part[first + 1] != "johndoe") print
         }
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
# <<< pii-scan
```

このチェックで結果（追加行）が出力された場合は、該当箇所を削除または相対パスに変更し、クリーンであることを確認した上でコミットを実行してください。
