# markdown-formatter

## Description

A skill to format and fix Markdown files to comply with the project's `.markdownlint.json` configuration.

## Instructions

When asked to format a Markdown file or fix Markdown linting issues, follow these steps:

1. **Identify Issues**: Run the linter to find existing issues.

   ```bash
   bun x markdownlint-cli <file_path>
   ```

2. **Auto-Format**: Run the project's custom Markdown formatting script to fix common issues (such as concatenated links, missing blank lines before headings, multiple blank lines, and trailing newlines).

   ```bash
   bun scripts/format-markdown.mjs <file_path>
   ```

3. **Verify**: Run the linter again to check if any issues remain.

   ```bash
   bun x markdownlint-cli <file_path>
   ```

4. **Manual Fixes (If Needed)**: If the linter still reports issues, manually resolve them by editing the file according to the `.markdownlint.json` rules.
   - Note: The `format-markdown.mjs` script handles MD022 (headings) and MD047 (trailing newline), but you may need to manually fix things like MD013 (line length, if strictly enforced) or other specific formatting.

5. **Completion**: Once the linter passes without errors, inform the user that the formatting is complete.
