// テスト分離検証用フィクスチャ（tests/test-isolation/dom-cleanup.test.ts から子プロセスで実行）
// 先行ファイルの描画結果が document に残っていないことを確認する。
import { it, expect } from 'bun:test';

it('sees no DOM left by earlier test files', () => {
  expect(document.getElementById('dom-isolation-first')).toBeNull();
  expect(document.getElementById('dom-isolation-second')).toBeNull();
  expect(document.body.children.length).toBe(0);
});
