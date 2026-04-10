import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

/**
 * Markdown formatter script to:
 * 1. Split concatenated links [text](url)[text](url) -> [text](url)\n[text](url)
 * 2. Process "---" separators (YAML front matter vs thematic breaks).
 * 3. Ensure headings (h1-h6) are preceded by a blank line (MD022).
 * 4. Normalize multiple blank lines to a single blank line.
 * 5. Ensure a single trailing newline (MD047).
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
    let frontMatterOpen = false;
    const removeHorizontalRules = false; // Default: preserve thematic breaks

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        if (trimmed === '---') {
            // Check for YAML front matter boundaries
            if (i === 0) {
                frontMatterOpen = true;
                processedLines.push(line);
                continue;
            } else if (frontMatterOpen) {
                frontMatterOpen = false;
                processedLines.push(line);
                continue;
            }

            // Preservation logic for horizontal rules (thematic breaks)
            if (removeHorizontalRules) {
                continue;
            }
            // Fall through to push(line) below
        }

        // 3. Ensure blank line before headings (MD022)
        if (/^#{1,6}\s+/.test(line)) {
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
  console.error('Usage: bun scripts/format-markdown.mjs <file-path>');
  process.exit(1);
}

formatMarkdown(targetFile);
