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

    // 1. Normalize line endings to LF
    const rawContentLF = rawContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    // 2. Process line by line for code blocks, separators, and headings
    const lines = rawContentLF.split('\n');
    const processedLines = [];
    let frontMatterOpen = false;
    let inFencedCodeBlock = false;
    const removeHorizontalRules = false; // Default: preserve thematic breaks

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        const trimmed = line.trim();

        // 1. Track fenced code blocks to avoid formatting code
        if (/^(```|~~~)/.test(trimmed)) {
            inFencedCodeBlock = !inFencedCodeBlock;
            processedLines.push(line);
            continue;
        }

        if (inFencedCodeBlock) {
            processedLines.push(line);
            continue;
        }

        // 2. Preserve YAML front matter verbatim
        if (i === 0 && trimmed === '---') {
            frontMatterOpen = true;
            processedLines.push(line);
            continue;
        }

        if (frontMatterOpen) {
            processedLines.push(line);
            if (trimmed === '---') {
                frontMatterOpen = false;
            }
            continue;
        }

        // 3. Split concatenated links (outside code blocks/front matter)
        line = line.replace(/\)\[/g, ')\n[');

        if (trimmed === '---') {
            // Preservation logic for horizontal rules (thematic breaks)
            if (removeHorizontalRules) {
                continue;
            }
            // Fall through to push(line) below
        }

        // 4. Ensure blank line before headings (MD022)
        if (/^#{1,6}\s+/.test(line)) {
            if (processedLines.length > 0 && processedLines[processedLines.length - 1].trim() !== '') {
                processedLines.push('');
            }
        }

        processedLines.push(line);
    }

    // 4. Normalize spacing
    let content = processedLines.join('\n');
    content = content.replace(/\n{3,}/g, '\n\n');

    // 5. Ensure single trailing newline (preserve meaningful spaces)
    if (!content.endsWith('\n')) {
        content += '\n';
    } else {
        content = content.replace(/\n+$/, '\n');
    }

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
