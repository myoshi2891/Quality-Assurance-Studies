import { describe, it, expect } from 'bun:test';
import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * fix-mermaid スキルは .agents（正）/ .claude / .gemini に同一の実装とテストを複製している。
 * bun test はドットディレクトリ配下のテストを自動検出しないため、
 * 片方だけ更新された場合に `bun test` で検知できるようにする。
 */
const ROOT = join(import.meta.dir, '..', '..');
const CANONICAL = '.agents';
const MIRRORS = ['.claude', '.gemini'];
const FILES = ['scripts/fix_mermaid.ts', 'scripts/fix_mermaid.test.ts'];

const read = (base: string, file: string): string =>
  readFileSync(join(ROOT, base, 'skills', 'fix-mermaid', file), 'utf8');

describe('fix-mermaid skill mirrors', () => {
  for (const mirror of MIRRORS) {
    for (const file of FILES) {
      it(`${mirror}/${file} matches ${CANONICAL}`, () => {
        // Arrange
        const expected = read(CANONICAL, file);

        // Act
        const actual = read(mirror, file);

        // Assert
        expect(actual).toBe(expected);
      });
    }
  }
});
