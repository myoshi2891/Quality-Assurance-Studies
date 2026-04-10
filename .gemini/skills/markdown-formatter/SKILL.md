# markdown-formatter

## Description

A skill to format and fix Markdown files to comply with the project's `.markdownlint.json` configuration.

## Instructions

Markdown ファイルの整形や lint エラーの修正を求められた場合は、以下の手順に従ってください:

1. **問題の特定 (Identify Issues)**: linter を実行して既存の問題を見つけます。

   ```bash
   bun x markdownlint-cli <file_path>
   ```

2. **自動整形 (Auto-Format)**: プロジェクトのカスタム Markdown 整形スクリプトを実行し、一般的な問題（連結されたリンク、見出し前の空白行の欠如、複数の空白行、末尾の改行など）を修正します。

   ```bash
   bun scripts/format-markdown.mjs <file_path>
   ```

3. **検証 (Verify)**: 再度 linter を実行し、問題が残っていないか確認します。

   ```bash
   bun x markdownlint-cli <file_path>
   ```

4. **手動修正 (Manual Fixes - 必要な場合)**: linter がまだ問題を報告している場合は、`.markdownlint.json` のルールに従ってファイルを手動で編集し、解決してください。
   - 注意: `format-markdown.mjs` スクリプトは MD022 (見出し) と MD047 (末尾の改行) を処理しますが、MD013 (行の長さ、厳密に適用されている場合) やその他の特定のフォーマットについては手動で修正する必要がある場合があります。

5. **完了 (Completion)**: linter がエラーなしで通過したら、整形が完了したことをユーザーに報告してください。
