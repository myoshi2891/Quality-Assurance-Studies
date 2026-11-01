// テスト分離検証用フィクスチャ（tests/test-isolation/dom-cleanup.test.ts から子プロセスで実行）
// 最初に @testing-library/react を読み込むファイル。RTL の自動 cleanup はこのファイルにだけ登録される。
import { it, expect } from 'bun:test';
import React from 'react';
import { render } from '@testing-library/react';

it('renders in the first file', () => {
  const { container } = render(<div id="dom-isolation-first">first</div>);
  expect(container.textContent).toBe('first');
});
