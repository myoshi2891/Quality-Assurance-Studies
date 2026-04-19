import fs from 'fs';
import path from 'path';

/**
 * Fixes unclosed code fences and fences that incorrectly swallow headings or blockquotes.
 * @param {string} filePath 
 */
function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const newLines = [];
  let inBlock = false;
  let fenceChar = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fenceMatch = line.match(/^( {0,3})(```+|~~~+)/);

    if (fenceMatch) {
      const currentFence = fenceMatch[2];
      if (inBlock) {
        if (currentFence.startsWith(fenceChar)) {
          inBlock = false;
          fenceChar = '';
        }
      } else {
        inBlock = true;
        fenceChar = currentFence;
      }
    } else if (inBlock) {
      // If we see a heading or a blockquote while inside a code block, 
      // it's highly likely the block should have been closed before it.
      if (line.match(/^#{1,6} /) || line.match(/^> /)) {
        // Backtrack to previous non-empty line and insert the closing fence
        let j = newLines.length - 1;
        while (j >= 0 && newLines[j].trim() === '') {
          j--;
        }
        newLines.splice(j + 1, 0, fenceChar);
        inBlock = false;
        fenceChar = '';
      }
    }
    newLines.push(line);
  }

  if (inBlock) {
    newLines.push(fenceChar);
  }

  fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  console.log(`Successfully processed: ${filePath}`);
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: bun scripts/fix-fences.mjs <file1> <file2> ...');
  process.exit(1);
}

args.forEach(fixFile);
