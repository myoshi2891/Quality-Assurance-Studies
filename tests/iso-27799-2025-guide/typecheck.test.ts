import { describe, expect, it } from 'bun:test';
import { readdirSync } from 'node:fs';
import ts from 'typescript';

// bun test は型を除去して実行するだけなので、next build の型検査で落ちる誤りをここで先に検出する
describe('iso-27799-2025-guide type check', () => {
    it('has no TypeScript diagnostics in app/iso-27799-2025-guide', () => {
        const configPath = ts.findConfigFile('.', ts.sys.fileExists, 'tsconfig.json');
        if (!configPath) throw new Error('tsconfig.json not found');
        const { config, error } = ts.readConfigFile(configPath, ts.sys.readFile);
        if (error) throw new Error(ts.flattenDiagnosticMessageText(error.messageText, '\n'));
        const { options } = ts.parseJsonConfigFileContent(config, ts.sys, '.');
        const dir = 'app/iso-27799-2025-guide';
        const files = readdirSync(dir).filter(f => /\.tsx?$/.test(f)).map(f => `${dir}/${f}`);
        const program = ts.createProgram(files, { ...options, noEmit: true });
        const messages = ts.getPreEmitDiagnostics(program)
            .filter(d => d.file?.fileName.includes(dir))
            .map(d => `${d.file?.fileName}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`);
        expect(messages).toEqual([]);
    }, 60_000);
});
