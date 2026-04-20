import { readFile, writeFile } from 'fs/promises';

async function fixMarkdown(filePath) {
  const content = await readFile(filePath, 'utf8');
  const lines = content.split('\n');
  const result = [];

  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isFence = line.trim().startsWith('```');
    const isHeading = /^#{1,6}\s/.test(line.trim());

    if (isFence) {
      if (!inCodeBlock) {
        // Opening fence
        if (result.length > 0 && result[result.length - 1].trim() !== '') {
          result.push('');
        }
        result.push(line);
        inCodeBlock = true;
        // Ensure blank line after opening fence if next line is not empty (Wait, MD031 is about surrounding, not internal)
        // Actually MD031 is about blank lines OUTSIDE the block.
      } else {
        // Closing fence
        result.push(line);
        inCodeBlock = false;
        if (i < lines.length - 1 && lines[i + 1].trim() !== '') {
          result.push('');
        }
      }
      continue;
    }

    if (!inCodeBlock && isHeading) {
      if (result.length > 0 && result[result.length - 1].trim() !== '') {
        result.push('');
      }
      result.push(line);
      if (i < lines.length - 1 && lines[i + 1].trim() !== '' && !lines[i+1].trim().startsWith('```')) {
          // If followed by another heading or code block, it will be handled by the next iteration's "before" check
          // but we should add a blank line here if the next line is just text.
          result.push('');
      }
      continue;
    }

    result.push(line);
  }

  // Final pass to remove triple blank lines if any
  const finalResult = [];
  for (let i = 0; i < result.length; i++) {
      if (result[i].trim() === '' && i > 0 && result[i-1].trim() === '' && i > 1 && result[i-2].trim() === '') {
          continue;
      }
      finalResult.push(result[i]);
  }

  await writeFile(filePath, finalResult.join('\n'), 'utf8');
}

fixMarkdown(process.argv[2]);
