import fs from 'fs';
import path from 'path';

/**
 * Normalizes a string to a GitHub-compatible slug.
 * @param {string} s 
 * @returns {string}
 */
function slugify(s) {
  return encodeURIComponent(
    String(s)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[\]\[\!\"\#\$\%\&\'\(\)\*\+\,\.\/\:\;\<\=\>\?\@\\\^\_\{\|\}\~]/g, '')
  );
}

/**
 * Fixes Table of Contents anchors by matching headings in the document.
 * @param {string} filePath 
 */
function fixTOC(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const headings = lines
    .filter(l => l.match(/^#{1,6}\s+/))
    .map(l => l.replace(/^#{1,6}\s+/, '').trim());

  let inTOC = false;
  const newLines = lines.map((line, i) => {
    // Check if we are inside TOC section
    if (line.match(/^## .*目次/)) {
      inTOC = true;
    } else if (inTOC && line.startsWith('---')) {
      inTOC = false;
    }

    if (inTOC) {
      // Find TOC links like: [Title](#anchor) or 1. [Title](#anchor)
      const match = line.match(/^(\s*\d*\.?\s*\[)(.*?)(\]\(#)(.*?)(\)\s*)$/);
      if (match) {
        const title = match[2];
        const normalizedTitle = title.split('—')[0].trim(); // Handle "1. Title — Subtitle" format

        // Find the best matching heading and its index
        let headingText = title;
        let headingIndex = -1;
        for (let j = 0; j < lines.length; j++) {
          const hLine = lines[j];
          if (hLine.match(/^#{1,6}\s+/) && 
             (hLine.includes(normalizedTitle) || normalizedTitle.includes(hLine.replace(/^#{1,6}\s+/, '').trim()))) {
            headingText = hLine.replace(/^#{1,6}\s+/, '').trim();
            headingIndex = j;
            break;
          }
        }
        
        let newAnchor;
        const inlineIdMatch = headingText.match(/\{#([A-Za-z0-9\-_]+)\}\s*$/);
        if (inlineIdMatch) {
          newAnchor = inlineIdMatch[1];
          headingText = headingText.replace(/\{#([A-Za-z0-9\-_]+)\}\s*$/, '').trim();
        } else {
          newAnchor = slugify(headingText);
        }
        
        // PRECEDENCE: Check for explicit anchor tag preceding the heading (skipping blank lines)
        if (headingIndex > 0) {
          let searchIndex = headingIndex - 1;
          while (searchIndex >= 0 && lines[searchIndex].trim() === '') {
            searchIndex--;
          }
          if (searchIndex >= 0) {
            const anchorMatch = lines[searchIndex].match(/<a id="(.*?)"><\/a>/);
            if (anchorMatch) {
              newAnchor = anchorMatch[1];
            }
          }
        }

        return `${match[1]}${title}${match[3]}${newAnchor}${match[5]}`;
      }
    }
    return line;
  });

  fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  console.log(`Successfully fixed TOC for: ${filePath}`);
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: bun scripts/fix-toc.mjs <file1> <file2> ...');
  process.exit(1);
}

args.forEach(fixTOC);
