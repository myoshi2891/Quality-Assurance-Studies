# リポジトリ内ファイルへの絶対パス記載禁止ルール

## ルール

コミット対象のファイル（ドキュメント、設定ファイル、コードのコメント等）に
ユーザー名を含む絶対パスを記載してはならない。

**禁止例**:
```
/Users/johndoe/.claude/plans/my-plan.md
/home/johndoe/workspace/project/...
C:\Users\johndoe\...
```

**許可例**:
```
.claude/plans/my-plan.md        （リポジトリルートからの相対パス）
~/.claude/plans/my-plan.md      （チルダ展開形式、リポジトリ内ではなくローカルを示すときのみ）
```

## 適用対象

- `MIGRATION_PROGRESS.md` などのドキュメント
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
