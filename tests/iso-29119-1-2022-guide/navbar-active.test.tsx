import { describe, it, expect, afterEach } from 'bun:test';
import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import NavBar from '../../app/iso-29119-1-2022-guide/NavBar';

const FIRST_ID = 'step-0このガイドの使い方と前提';
const FIRST_TOP = 400;
const ORIGINAL_SCROLL_Y = window.scrollY;

/** スクロール位置を差し替えて scroll イベントを発火する */
function scrollTo(y: number): void {
  Object.defineProperty(window, 'scrollY', { value: y, configurable: true, writable: true });
  act(() => {
    window.dispatchEvent(new Event('scroll'));
  });
}

afterEach(() => {
  cleanup();
  document.getElementById(FIRST_ID)?.remove();
  Object.defineProperty(window, 'scrollY', { value: ORIGINAL_SCROLL_Y, configurable: true, writable: true });
});

describe('ISO 29119-1 NavBar active section tracking', () => {
  it('clears the active link when scrolled back above the first target', () => {
    // Arrange: 他テストが残した ID がアクティブ判定に混ざらないよう、共有 document を空にしてから
    // 文書上の絶対位置 FIRST_TOP にある最初の見出しを用意する
    cleanup();
    document.body.replaceChildren();
    const heading = document.createElement('h2');
    heading.id = FIRST_ID;
    heading.getBoundingClientRect = () => {
      const top = FIRST_TOP - window.scrollY;
      return { top, bottom: top, left: 0, right: 0, width: 0, height: 0, x: 0, y: top, toJSON: () => ({}) };
    };
    document.body.appendChild(heading);
    const { container } = render(<NavBar />);
    const firstLink = container.querySelector(`nav.sidebar a[href="#${FIRST_ID}"]`);
    expect(firstLink).not.toBeNull();

    // Act 1: 最初の見出しを通過
    scrollTo(FIRST_TOP);

    // Assert 1
    expect(firstLink?.className).toBe('active');

    // Act 2: 最初の見出しより上へ戻る（scrollY + 100 < FIRST_TOP）
    scrollTo(0);

    // Assert 2: 前回のアクティブ表示が残らない
    expect(container.querySelectorAll('nav.sidebar a.active').length).toBe(0);
  });
});
