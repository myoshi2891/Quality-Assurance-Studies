import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

/**
 * Format a Markdown file in-place to enforce project markdown style rules.
 *
 * Applies these formatting rules to the file at the given path:
 * - Split concatenated inline links like `[text](url)[text](url)` into separate lines.
 * - Remove lines consisting solely of `---` (treated as redundant separators).
 * - Ensure level-2 and level-3 headings (`##`, `###`) are preceded by a single blank line when needed.
 * - Collapse runs of three or more consecutive newlines into exactly two.
 * - Trim trailing whitespace and ensure the file ends with a single newline.
 *
 * @param {string} filePath - Path to the Markdown file to format (will be resolved to an absolute path).
 */

async function formatMarkdown(filePath) {
  try {
    const absolutePath = resolve(filePath);
    const rawContent = await readFile(absolutePath, 'utf8');

    // 1. Split concatenated links
    let content = rawContent.replace(/\)\[/g, ')\n[');

    // 2. Process line by line for separators and headings
    const lines = content.split(/\r?\n/);
    const processedLines = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        // Skip horizontal rules that are likely separators
        // (This assumes separators are on their own line as "---")
        if (trimmed === '---') {
            continue;
        }

        // 3. Ensure blank line before headings
        if (/^#{2,3}\s+/.test(line)) {
            if (processedLines.length > 0 && processedLines[processedLines.length - 1].trim() !== '') {
                processedLines.push('');
            }
        }

        processedLines.push(line);
    }

    // 4. Normalize spacing
    content = processedLines.join('\n');
    content = content.replace(/\n{3,}/g, '\n\n');

    // 5. Ensure single trailing newline
    content = content.trim() + '\n';

    await writeFile(absolutePath, content, 'utf8');
    console.log(`Successfully formatted: ${filePath}`);
  } catch (error) {
    console.error(`Error formatting ${filePath}:`, error.message);
    process.exit(1);
  }
}

const targetFile = process.argv[2];
if (!targetFile) {
  console.error('Usage: node format-markdown.mjs <file-path>');
  process.exit(1);
}

formatMarkdown(targetFile);
