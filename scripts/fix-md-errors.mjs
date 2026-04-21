import { readFile, writeFile } from 'fs/promises';

async function fixMarkdown(filePath) {
  const content = await readFile(filePath, 'utf8');
  const lines = content.split('\n');
  const result = [];

  let inCodeBlock = false;
  let currentFence = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const fenceMatch = line.match(/^(\s{0,3})(`{3,}|~{3,})(.*)$/);
    const isFence = !!fenceMatch;
    const isHeading = /^#{1,6}\s/.test(line.trim());

    if (isFence) {
      if (!inCodeBlock) {
        // Opening fence
        if (result.length > 0 && result[result.length - 1].trim() !== '') {
          result.push('');
        }
        result.push(line);
        inCodeBlock = true;
        currentFence = fenceMatch[2];
      } else {
        // Only close if it matches the current fence char/len and has empty info
        if (fenceMatch[2][0] === currentFence[0] && fenceMatch[2].length >= currentFence.length && fenceMatch[3].trim() === '') {
          result.push(line);
          inCodeBlock = false;
          currentFence = '';
          if (i < lines.length - 1 && lines[i + 1].trim() !== '') {
            result.push('');
          }
        } else {
          result.push(line);
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
  let finalInCodeBlock = false;
  let finalCurrentFence = '';
  for (let i = 0; i < result.length; i++) {
      const line = result[i];
      const fenceMatch = line.match(/^(\s{0,3})(`{3,}|~{3,})(.*)$/);
      if (fenceMatch) {
          if (!finalInCodeBlock) {
              finalInCodeBlock = true;
              finalCurrentFence = fenceMatch[2];
          } else if (fenceMatch[2][0] === finalCurrentFence[0] && fenceMatch[2].length >= finalCurrentFence.length && fenceMatch[3].trim() === '') {
              finalInCodeBlock = false;
              finalCurrentFence = '';
          }
      }
      if (!finalInCodeBlock && line.trim() === '' && i > 0 && result[i-1].trim() === '' && i > 1 && result[i-2].trim() === '') {
          continue;
      }
      finalResult.push(line);
  }

  await writeFile(filePath, finalResult.join('\n'), 'utf8');
}

const input = process.argv[2];
if (!input) {
  const scriptName = process.argv[1] ? require('path').basename(process.argv[1]) : 'fix-md-errors.mjs';
  console.error(`Usage: bun scripts/${scriptName} <file>`);
  process.exit(1);
}

fixMarkdown(input).catch(err => {
  console.error('Error processing markdown file:', err);
  process.exit(1);
});
