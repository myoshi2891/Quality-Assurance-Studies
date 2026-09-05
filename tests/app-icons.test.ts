import { describe, expect, it } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dir, '..');

/*
  ファビコンは App Router のファイル規約（app/icon.svg・app/favicon.ico・app/apple-icon.png）
  で自動的に配信される。ファイル名や配置が壊れると <link> が消えるだけで
  ビルドは通ってしまうため、存在と最低限の中身をここで固定する。
*/
describe('app icons', () => {
  it('規約どおりの3ファイルが app/ 直下に存在する', () => {
    for (const file of ['icon.svg', 'favicon.ico', 'apple-icon.png']) {
      expect(existsSync(join(ROOT, 'app', file))).toBe(true);
    }
  });

  it('favicon.ico は ICO シグネチャを持つ', () => {
    const header = readFileSync(join(ROOT, 'app', 'favicon.ico')).subarray(0, 4);
    // ICO: reserved=0x0000, type=0x0001（リトルエンディアン）
    expect(Array.from(header)).toEqual([0, 0, 1, 0]);
  });

  it('apple-icon.png は PNG シグネチャを持つ', () => {
    const header = readFileSync(join(ROOT, 'app', 'apple-icon.png')).subarray(0, 8);
    expect(Array.from(header)).toEqual([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  });

  it('icon.svg は正方形の viewBox とレベルランプ色を保持する', () => {
    const svg = readFileSync(join(ROOT, 'app', 'icon.svg'), 'utf-8');

    expect(svg).toContain('viewBox="0 0 32 32"');
    // globals.css のレベルランプ（寒色→暖色）と同じ 3 色を符号として使う
    expect(svg).toContain('#4fd1c5');
    expect(svg).toContain('#a78bfa');
    expect(svg).toContain('#f687b3');
    // 背景はサイトのダーク背景（--color-bg-primary）に合わせる
    expect(svg).toContain('#0a0e1a');
  });
});
