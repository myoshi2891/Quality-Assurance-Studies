import { describe, it, expect, afterEach } from 'bun:test';
import React from 'react';
import { render, fireEvent, cleanup, within } from '@testing-library/react';
import NavBar from '../../app/iso-14496-22-2026-beginner-guide/NavBar';
import Section5 from '../../app/iso-14496-22-2026-beginner-guide/Section5';
import Section9 from '../../app/iso-14496-22-2026-beginner-guide/Section9';

const ORIGINAL_INNER_WIDTH = window.innerWidth;

/** 画面幅を差し替える（モバイル／デスクトップの分岐検証用） */
function setInnerWidth(width: number): void {
  Object.defineProperty(window, 'innerWidth', { value: width, configurable: true, writable: true });
}

afterEach(() => {
  cleanup();
  setInnerWidth(ORIGINAL_INNER_WIDTH);
});

describe('ISO 14496-22:2026 review fixes: NavBar disclosure & focus', () => {
  it('exposes aria-expanded bound to open state and aria-controls="sidebar"', () => {
    // Arrange
    const { container } = render(<NavBar />);
    const toggle = within(container).getByRole('button', { name: '目次を開閉' });

    // Assert（初期状態）
    expect(toggle.getAttribute('aria-controls')).toBe('sidebar');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(container.querySelector('#sidebar')).not.toBeNull();

    // Act
    fireEvent.click(toggle);

    // Assert（開いた状態）
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
  });

  it('returns focus to the toggle after closing the sidebar from a link on mobile', () => {
    // Arrange
    setInnerWidth(375);
    const { container } = render(<NavBar />);
    const toggle = within(container).getByRole('button', { name: '目次を開閉' });
    fireEvent.click(toggle);
    const link = container.querySelector<HTMLAnchorElement>('#sidebar a[href="#ch5"]');
    expect(link).not.toBeNull();
    link?.focus();

    // Act
    if (link) fireEvent.click(link);

    // Assert
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(toggle);
  });

  it('leaves focus on the link on desktop', () => {
    // Arrange
    setInnerWidth(1280);
    const { container } = render(<NavBar />);
    const toggle = within(container).getByRole('button', { name: '目次を開閉' });
    const link = container.querySelector<HTMLAnchorElement>('#sidebar a[href="#ch5"]');
    expect(link).not.toBeNull();
    link?.focus();

    // Act
    if (link) fireEvent.click(link);

    // Assert
    expect(document.activeElement).toBe(link);
    expect(document.activeElement).not.toBe(toggle);
  });
});

describe('ISO 14496-22:2026 review fixes: variable font table requirements', () => {
  it('states that gvar carries outline deltas only when TrueType glyph outlines vary, keeping HVAR guidance', () => {
    // Arrange
    const { container } = render(<Section9 />);
    const rows = Array.from(container.querySelectorAll('tbody tr'));

    // Act
    const trueTypeRow = rows.find((row) => row.querySelector('td')?.textContent?.trim() === 'TrueType 輪郭');
    const requirement = trueTypeRow?.querySelectorAll('td')[1]?.textContent?.replace(/\s+/g, ' ').trim();

    // Assert
    expect(requirement).toBe(
      'gvar（グリフの輪郭が変化する場合に、その輪郭の差分を持つ）、HVAR 推奨（横幅の計算を速くするため）'
    );
  });
});

describe('ISO 14496-22:2026 review fixes: table directory reader invocation', () => {
  it('follows read_table_directory with a command-line invocation that takes a font path and prints the directory', () => {
    // Arrange
    const { container } = render(<Section5 />);
    const code = container.querySelector('pre.py code')?.textContent ?? '';
    const lines = code.split('\n').map((line) => line.replace(/\s+$/, ''));

    // Act
    const returnIndex = lines.findIndex((line) => line.trim() === 'return sfnt_version, records');
    const invocation = lines.slice(returnIndex + 1);

    // Assert
    expect(returnIndex).toBeGreaterThan(-1);
    expect(invocation).toEqual([
      '',
      'if __name__ == "__main__":',
      '    import sys  # コマンドライン引数を受け取る標準ライブラリ',
      '',
      '    # 使い方: python read_table_directory.py MyFont.ttf',
      '    if len(sys.argv) != 2:',
      '        raise SystemExit("使い方: python read_table_directory.py <フォントファイルのパス>")',
      '',
      '    version, records = read_table_directory(sys.argv[1])',
      '    print("sfntVersion:", version)',
      '    for record in records:',
      '        print(record["tag"], record["offset"], record["length"], hex(record["checksum"]))',
    ]);
  });
});
