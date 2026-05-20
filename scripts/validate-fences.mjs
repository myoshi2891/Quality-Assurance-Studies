import { readFile } from 'fs/promises';
import { resolve } from 'path';

const targetFile = process.argv[2];
if (!targetFile) {
  console.error('Usage: bun run scripts/validate-fences.mjs <file-path>');
  process.exit(1);
}

try {
  const filePath = resolve(targetFile);
  const content = await readFile(filePath, 'utf8');
  const lines = content.split('\n');

  let inCodeBlock = false;
  let startLine = 0;
  let isUnspecified = false;
  const unspecBlocks = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        startLine = i + 1;
        const lang = line.slice(3).trim();
        isUnspecified = (lang === '');
      } else {
        inCodeBlock = false;
        if (isUnspecified) {
          unspecBlocks.push({ start: startLine, end: i + 1 });
        }
      }
    }
  }

  if (unspecBlocks.length > 0) {
    console.log(`Found ${unspecBlocks.length} language-unspecified code blocks in ${targetFile}:`);
    unspecBlocks.forEach(b => {
      console.log(`Lines ${b.start}-${b.end}:`);
      const endPrint = Math.min(b.end, b.start + 5);
      for (let j = b.start - 1; j < endPrint; j++) {
        console.log(`  ${j+1}: ${lines[j]}`);
      }
      if (b.end > endPrint) {
        console.log('  ...');
      }
    });
    process.exit(1);
  } else {
    console.log(`No language-unspecified code blocks found in ${targetFile}!`);
    process.exit(0);
  }
} catch (error) {
  console.error(`Error reading file ${targetFile}:`, error.message);
  process.exit(1);
}
