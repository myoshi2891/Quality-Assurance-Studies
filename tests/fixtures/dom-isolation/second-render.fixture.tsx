// テスト分離検証用フィクスチャ（tests/test-isolation/dom-cleanup.test.ts から子プロセスで実行）
// 2番目に実行されるファイル。自前で cleanup を呼ばないため、全体の cleanup がなければ描画結果が残る。
import { it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';

it('renders in the second file without calling cleanup', () => {
  const { container } = render(<div id="dom-isolation-second">second</div>);
  expect(container.textContent).toBe('second');
});
