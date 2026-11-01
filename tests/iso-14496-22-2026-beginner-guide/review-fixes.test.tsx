import { describe, it, expect, afterEach } from 'bun:test';
import React from 'react';
import { render, fireEvent, cleanup, within } from '@testing-library/react';
import NavBar from '../../app/iso-14496-22-2026-beginner-guide/NavBar';
import Section5 from '../../app/iso-14496-22-2026-beginner-guide/Section5';
import Section9 from '../../app/iso-14496-22-2026-beginner-guide/Section9';
import Section6 from '../../app/iso-14496-22-2026-beginner-guide/Section6';
import Section10 from '../../app/iso-14496-22-2026-beginner-guide/Section10';
import Section7 from '../../app/iso-14496-22-2026-beginner-guide/Section7';
import Section12 from '../../app/iso-14496-22-2026-beginner-guide/Section12';
import Section15 from '../../app/iso-14496-22-2026-beginner-guide/Section15';
import { DIAGRAM_06 } from '../../app/iso-14496-22-2026-beginner-guide/diagrams';

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

describe('ISO 14496-22:2026 review fixes: NavBar aria-current', () => {
  it('marks only the active link with aria-current="location"', () => {
    // Arrange & Act（初期アクティブは ch0）
    const { container } = render(<NavBar />);
    const links = Array.from(container.querySelectorAll<HTMLAnchorElement>('#sidebar a'));

    // Assert
    expect(links.length).toBe(16);
    const current = links.filter((a) => a.hasAttribute('aria-current'));
    expect(current.map((a) => a.getAttribute('href'))).toEqual(['#ch0']);
    expect(current[0]?.getAttribute('aria-current')).toBe('location');
  });
});

describe('ISO 14496-22:2026 review fixes: SVG table tag includes trailing space', () => {
  it('shows the full tag \'SVG \' in the Section 6 role list while keeping the 「SVG」 label', () => {
    // Arrange & Act
    const { container } = render(<Section6 />);
    const item = Array.from(container.querySelectorAll('section#ch6 li')).find((li) =>
      li.textContent?.startsWith('「SVG」'),
    );

    // Assert
    expect(item).toBeDefined();
    expect(item?.querySelector('code')?.textContent).toBe("'SVG '");
  });

  it('shows the full tag \'SVG \' in the Section 10 color table', () => {
    // Arrange & Act
    const { container } = render(<Section10 />);
    const row = Array.from(container.querySelectorAll('section#ch10 tbody tr')).find((tr) =>
      tr.querySelectorAll('td')[1]?.textContent === 'SVG 文書でグリフを描く',
    );

    // Assert
    expect(row?.querySelector('td')?.textContent).toBe("'SVG '");
  });
});

describe('ISO 14496-22:2026 review fixes: sfntVersion signature validation', () => {
  it('rejects unsupported sfntVersion values after the TTC check and before reading table records', () => {
    // Arrange & Act
    const { container } = render(<Section5 />);
    const code = container.querySelector('section#ch5 pre.py code')?.textContent ?? '';
    const ttcIdx = code.indexOf('if sfnt_version == b"ttcf":');
    const checkIdx = code.indexOf('if sfnt_version not in (b"\\x00\\x01\\x00\\x00", b"OTTO"):');
    const recordsIdx = code.indexOf('records = []');

    // Assert
    expect(ttcIdx).toBeGreaterThan(-1);
    expect(checkIdx).toBeGreaterThan(ttcIdx);
    expect(recordsIdx).toBeGreaterThan(checkIdx);
    expect(code.slice(checkIdx, recordsIdx)).toContain('raise ValueError(');
  });
});

describe('ISO 14496-22:2026 review fixes: DIAGRAM_06 direction wording', () => {
  it('describes the top-to-bottom flowchart as 上から下', () => {
    // Arrange & Act
    const { container } = render(<Section7 />);
    const text = container.querySelector('section#ch7')?.textContent ?? '';

    // Assert
    expect(DIAGRAM_06).toContain('flowchart TD');
    expect(text).toContain('この図は、文字が表示されるまでの処理を上から下へ並べたものです。');
    expect(text).not.toContain('左から右へ');
  });
});

describe('ISO 14496-22:2026 review fixes: Section 12 implementation facts', () => {
  it('describes the Chrome 145 FreeType removal from Blink as completed', () => {
    // Arrange & Act
    const { container } = render(<Section12 />);
    const item = Array.from(container.querySelectorAll('section#ch12 li')).find((li) =>
      li.textContent?.startsWith('「Chrome 145」'),
    );
    const text = item?.textContent?.replace(/\s+/g, ' ').trim();

    // Assert
    expect(text).toBe('「Chrome 145」：Chrome の描画基盤（Blink）から FreeType が完全に削除された');
  });

  it('does not list macOS as a HarfBuzz adopter in the implementation map', () => {
    // Arrange & Act
    const { container } = render(<Section12 />);
    const row = Array.from(container.querySelectorAll('section#ch12 tbody tr')).find(
      (tr) => tr.querySelector('td')?.textContent === 'シェーピング',
    );

    // Assert
    expect(row?.querySelectorAll('td')[3]?.textContent).toBe('Chrome、Firefox、Android、各種GUI');
  });
});

describe('ISO 14496-22:2026 review fixes: Section 15 source links', () => {
  it('cites the "Memory safety for web fonts" article for the Chrome 128 and 133 milestones', () => {
    // Arrange & Act
    const { container } = render(<Section15 />);
    const rows = Array.from(container.querySelectorAll('section#ch15 tbody tr'));
    const linkOf = (label: string) =>
      rows.find((tr) => tr.querySelector('td')?.textContent?.startsWith(label))?.querySelector('a');

    // Assert
    for (const label of ['Chrome 128', 'Chrome 133']) {
      const link = linkOf(label);
      expect(link?.getAttribute('href')).toBe('https://developer.chrome.com/blog/memory-safety-fonts');
      expect(link?.textContent?.trim()).toBe('https://developer.chrome.com/blog/memory-safety-fonts');
    }
  });

  it('links the canonical SkiaSharp 4.150.0 release notes page', () => {
    // Arrange & Act
    const { container } = render(<Section15 />);
    const link = Array.from(container.querySelectorAll<HTMLAnchorElement>('section#ch15 a')).find((a) =>
      a.getAttribute('href')?.includes('SkiaSharp'),
    );

    // Assert
    expect(link?.getAttribute('href')).toBe('https://mono.github.io/SkiaSharp/docs/releases/4.150.0.html');
    expect(link?.textContent?.trim()).toBe('https://mono.github.io/SkiaSharp/docs/releases/4.150.0.html');
  });
});

describe('ISO 14496-22:2026 review fixes: Section 5 directory example order', () => {
  it('lists table tags in ascending code-unit order with their original offset and length', () => {
    // Arrange & Act
    const { container } = render(<Section5 />);
    const table = Array.from(container.querySelectorAll('section#ch5 table')).find((t) =>
      t.querySelector('thead th')?.textContent?.startsWith('tableTag'),
    );
    const rows = Array.from(table?.querySelectorAll('tbody tr') ?? []).map((tr) =>
      Array.from(tr.querySelectorAll('td')).map((td) => td.textContent),
    );
    const tags = rows.map((r) => r[0] ?? '');

    // Assert
    expect(rows).toEqual([
      ['GSUB', '6336', '1420'],
      ['OS/2', '408', '96'],
      ['cmap', '7756', '902'],
      ['glyf', '8660', '91204'],
      ['head', '100', '54'],
    ]);
    expect(tags).toEqual([...tags].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)));
  });
});
