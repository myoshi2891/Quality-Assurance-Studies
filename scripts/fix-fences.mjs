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
    const fenceMatch = line.match(/^( {0,3})(```+|~~~+)(.*)$/);

    if (fenceMatch) {
      const currentFence = fenceMatch[2];
      const rest = fenceMatch[3].trim();
      if (inBlock) {
        // Closing fence: must use same char, same or more length, and rest must be empty
        if (currentFence[0] === fenceChar[0] && currentFence.length >= fenceChar.length && rest === '') {
          inBlock = false;
          fenceChar = '';
        }
      } else {
        inBlock = true;
        fenceChar = currentFence;
      }
    } else if (inBlock) {
      // If we see a heading or a blockquote while inside a code block, 
      // it might be a missing closing fence or a valid nested structure.
      // Log a warning instead of auto-closing.
      if (line.match(/^#{1,6} /) || line.match(/^> /)) {
        console.warn(`[WARNING] Potential unclosed code block detected at line ${i + 1}: "${line}"`);
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
