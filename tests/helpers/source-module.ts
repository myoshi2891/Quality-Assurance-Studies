import React from 'react';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { createRequire } from 'node:module';
import { transformSync } from 'next/dist/build/swc';

// Compile the production page with Next.js/SWC, including every local import.
// Only Mermaid's effect-driven SVG renderer is a stub; browser tests render real SVGs.
// Next.js/SWC trims numeric newline entities differently from TypeScript/Bun, so
// `development` switches the JSX transform to match the dev or production build.
export function sourceModule(path: string, { development = false }: { development?: boolean } = {}): Record<string, unknown> {
    const cache = new Map<string, Record<string, unknown>>();
    function load(filename: string): Record<string, unknown> {
        filename = resolve(filename);
        if (cache.has(filename)) return cache.get(filename)!;
        const exported: Record<string, unknown> = {};
        cache.set(filename, exported);
        const localRequire = createRequire(filename);
        const requireSource = (request: string): unknown => {
            if (request.endsWith('.css')) return {};
            if (request.endsWith('components/Mermaid')) return { __esModule: true, default: () => React.createElement('div', { className: 'mermaid-wrapper' }) };
            if (!request.startsWith('.')) return localRequire(request);
            const base = resolve(dirname(filename), request);
            const target = ['.tsx', '.ts'].map(ext => base + ext).find(existsSync);
            return target ? load(target) : localRequire(request);
        };
        const { code } = transformSync(readFileSync(filename, 'utf8'), { filename, jsc: { parser: { syntax: 'typescript', tsx: true }, transform: { react: { runtime: 'classic', development } } }, module: { type: 'commonjs' } });
        Function('exports', 'require', code)(exported, requireSource);
        return exported;
    }
    return load(path);
}
