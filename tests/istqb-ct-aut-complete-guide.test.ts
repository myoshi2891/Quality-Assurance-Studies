import { describe, it, expect } from 'bun:test';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

describe('istqb-ct-aut-complete-guide.md formatting', () => {
  const filePath = resolve(import.meta.dir, '../istqb-ct-aut-complete-guide.md');

  it('file should exist', async () => {
    const content = await readFile(filePath, 'utf8');
    expect(content.length).toBeGreaterThan(0);
  });

  it('should not contain language-unspecified code blocks', async () => {
    const content = await readFile(filePath, 'utf8');
    const lines = content.split('\n');
    let inCodeBlock = false;
    let currentFence = '';
    let hasUnspecified = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const openMatch = line.match(/^(`{3,}|~{3,})(.*)$/);
      if (!inCodeBlock && openMatch) {
        inCodeBlock = true;
        currentFence = openMatch[1];
        const info = openMatch[2].trim();
        if (info === '') {
          hasUnspecified = true;
        }
        continue;
      }

      if (inCodeBlock && (line[0] === '`' || line[0] === '~') && line[0] === currentFence[0]) {
        const fenceChar = currentFence[0];
        const match = line.match(new RegExp(`^(${fenceChar === '`' ? '\\`' : '~'}{${currentFence.length},})$`));
        if (match) {
          inCodeBlock = false;
        }
      }
    }

    expect(hasUnspecified).toBe(false);
  });

  it('should not contain ASCII diagram box drawing characters', async () => {
    const content = await readFile(filePath, 'utf8');
    // ASCII/Unicode box-drawing characters: ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼ ─ │ ╔ ╗ ╚ ╝ ═ ║
    const boxDrawingPattern = /[┌┐└┘├┤┬┴┼─│╔╗╚╝═║]/;
    const hasBoxDrawing = boxDrawingPattern.test(content);
    expect(hasBoxDrawing).toBe(false);
  });
});
