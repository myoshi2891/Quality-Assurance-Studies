import { describe, expect, it } from 'bun:test';
import { readFileSync } from 'node:fs';
import postcss from 'postcss';

// 指定セレクタ（とメディア条件）に一致するルールの宣言を prop → value で返す
function decls(file: string, selector: string, media: string | null = null): Record<string, string> {
  const found: Record<string, string> = {};
  postcss.parse(readFileSync(file, 'utf8')).walkRules((rule) => {
    const parent = rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : null;
    if (rule.selector !== selector || parent !== media) return;
    rule.walkDecls((d) => { found[d.prop] = d.value; });
  });
  return found;
}

describe('library category rail (app/index-page.css)', () => {
  const file = 'app/index-page.css';

  it('desktop: sticky rail fits the viewport and scrolls vertically', () => {
    const rule = decls(file, '.library-categories');
    expect(rule.position).toBe('sticky');
    expect(rule.top).toBe('calc(85px + var(--disclaimer-height, 0px))');
    expect(rule['max-height']).toBe('calc(100dvh - 85px - var(--disclaimer-height, 0px) - 1rem)');
    expect(rule['overflow-y']).toBe('auto');
  });

  it('desktop: top/bottom/left padding fits the 6px focus ring (2px outline + 4px offset)', () => {
    expect(decls(file, '.library-categories').padding).toBe('.4rem 1rem .4rem .4rem');
  });

  it('≤760px: releases max-height and keeps the ring inside the horizontal strip', () => {
    const rule = decls(file, '.library-categories', '(max-width: 760px)');
    expect(rule['max-height']).toBe('none');
    expect(rule['overflow-x']).toBe('auto');
    // 下辺 .8rem は維持し、上・左右をリング外側まで広げる
    expect(rule.padding).toBe('.4rem .4rem .8rem');
  });
});

describe('global drawer offset (components/header.css)', () => {
  it('places the drawer below header + disclaimer and shrinks its height by the same amount', () => {
    const rule = decls('components/header.css', '.nav-header .nav-drawer');
    expect(rule.top).toBe('calc(60px + var(--disclaimer-height, 0px))');
    expect(rule['max-height']).toBe('calc(100dvh - 60px - var(--disclaimer-height, 0px))');
  });
});
