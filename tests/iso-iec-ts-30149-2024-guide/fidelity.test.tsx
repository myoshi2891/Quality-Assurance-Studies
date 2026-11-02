import { it, expect } from 'bun:test';
import React, { act } from 'react';
import { readFileSync } from 'node:fs';
import { renderToString } from 'react-dom/server';
import { hydrateRoot, type Root } from 'react-dom/client';
import { fireEvent } from '@testing-library/react';
import { load } from 'cheerio';
import { sourceModule } from '../helpers/source-module';
import { applyReviewCorrections } from './review-corrections';
const base = 'app/iso-iec-ts-30149-2024-guide';
it('loads both extra source font weights at the page boundary', () => {
    const page = readFileSync(base + '/page.tsx', 'utf8');
    expect(page).toContain("import '../fonts/noto-sans-jp-800.css'");
    expect(page).toContain("import '../fonts/jetbrains-mono-600.css'");
});
it('preserves every text block including whitespace between inline elements', () => {
    const Page = sourceModule(base + '/page.tsx').default as React.ComponentType;
    const original = load(readFileSync('archive/html-archive/iso/Iso-iec-ts-30149-2024-guide.html', 'utf8'));
    applyReviewCorrections(original);
    const current = load(renderToString(<Page />));
    for (const $ of [original, current]) $('.mermaid-diagram').remove();
    const normal = (s: string) => s.replace(/\s+/g, ' ').trim();
    const selector = 'main h1,main h2,main h3,main h4,main p,main li,main td,main th,main footer,main label,main summary,.meta-item';
    expect(current(selector).toArray().map(el => normal(current(el).text()))).toEqual(original(selector).toArray().map(el => normal(original(el).text())));
});
it('hydrates without recoverable errors or DOM warnings and attaches checklist events', async () => {
    const Page = sourceModule(base + '/page.tsx').default as React.ComponentType;
    const host = document.createElement('div');
    host.innerHTML = renderToString(<Page />); document.body.append(host);
    const errors: unknown[] = []; const warnings: unknown[] = [];
    const originalError = console.error;
    console.error = (...args: unknown[]) => { warnings.push(args); };
    let root: Root | undefined;
    try {
        await act(async () => { root = hydrateRoot(host, <Page />, { onRecoverableError: error => { errors.push(error); } }); });
        const boxes = [...host.querySelectorAll<HTMLInputElement>('input[type=checkbox]')];
        await act(async () => { boxes.forEach(box => fireEvent.click(box)); });
        expect(host.querySelector('.cp-count')?.textContent).toBe('7 / 7');
        expect(host.querySelector<HTMLElement>('.cp-fill')?.style.width).toBe('100%');
        expect(errors).toEqual([]); expect(warnings).toEqual([]);
    } finally {
        if (root) await act(async () => root!.unmount());
        console.error = originalError; host.remove();
    }
});
