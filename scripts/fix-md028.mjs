import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const rootDir = process.cwd();
const files = readdirSync(rootDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = join(rootDir, file);
  const content = readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let changed = false;

  for (let i = 1; i < lines.length - 1; i++) {
    // Current line is empty or just whitespace
    if (lines[i].trim() === '') {
      // Check if previous line starts with '>'
      // and next line starts with '>'
      if (lines[i - 1].trim().startsWith('>') && lines[i + 1].trim().startsWith('>')) {
        lines[i] = '>';
        changed = true;
      }
    }
  }

  if (changed) {
    writeFileSync(filePath, lines.join('\n'));
    console.log(`Fixed MD028 in ${file}`);
  }
});
