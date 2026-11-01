import { describe, it, expect } from 'bun:test';

/**
 * bun test は全ファイルを 1 プロセスで実行し、モジュールをキャッシュする。
 * RTL の自動 cleanup は最初に import したファイルにしか登録されないため、
 * preload で全ファイル共通の cleanup を登録していないと、後続ファイルの描画結果が
 * 次のファイルへ残り、実行順に依存した失敗（CI でのみ落ちる等）を起こす。
 */
describe('cross-file DOM isolation', () => {
  it('does not leak rendered DOM from one test file into the next', () => {
    // Arrange: RTL を最初に読む → cleanup しない → 残留を検査する、の順で 3 ファイルを並べる
    const files = [
      './tests/fixtures/dom-isolation/first-render.fixture.tsx',
      './tests/fixtures/dom-isolation/second-render.fixture.tsx',
      './tests/fixtures/dom-isolation/probe.fixture.ts',
    ];

    // Act: 子プロセスで、指定順のまま 1 プロセス実行する
    const result = Bun.spawnSync([process.execPath, 'test', ...files], {
      cwd: process.cwd(),
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const output = `${result.stdout.toString()}${result.stderr.toString()}`;

    // Assert: 3 件すべて成功する（失敗時は子プロセスの出力を表示する）
    expect({ exitCode: result.exitCode, output }).toMatchObject({ exitCode: 0 });
    expect(output).toContain(' 3 pass');
  });
});
