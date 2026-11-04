import { it, expect } from 'bun:test';
import React, { act } from 'react';
import { readFileSync, existsSync } from 'node:fs';
import { renderToString } from 'react-dom/server';
import { hydrateRoot, type Root } from 'react-dom/client';
import { fireEvent } from '@testing-library/react';
import { load } from 'cheerio';
import postcss from 'postcss';
import { sourceModule } from '../helpers/source-module';
import { applyReviewCorrections } from './review-corrections';
const base = 'app/iso-iec-ieee-29119-3-2021-guide';
it('preserves every text block including whitespace between inline elements', () => {
    const Page = sourceModule(base + '/page.tsx').default as React.ComponentType;
    const original = load(readFileSync(existsSync('Iso-iec-ieee-29119-3-2021-guide.html')?'Iso-iec-ieee-29119-3-2021-guide.html':'archive/html-archive/iso/Iso-iec-ieee-29119-3-2021-guide.html', 'utf8'));
    applyReviewCorrections(original);
    const current = load(renderToString(<Page />));
    for (const $ of [original, current]) $('.mermaid-container').remove();
    const normal = (s: string) => s.replace(/\s+/g, ' ').trim();
    const selector = 'main h1,main h2,main h3,main h4,main p,main li,main td,main th,main footer,main label,main summary,.meta-item';
    expect(current(selector).toArray().map(el => normal(current(el).text()))).toEqual(original(selector).toArray().map(el => normal(original(el).text())));
});
it('lands mobile heading anchors below the fixed TOC toggle and keeps the wide offset', () => {
    const margins: [string | null, string][] = [];
    postcss.parse(readFileSync(base + '/iso-iec-ieee-29119-3-2021-guide.css', 'utf8')).walkRules('.iso291193-page main h2[id], .iso291193-page main h3[id]', rule => {
        rule.walkDecls('scroll-margin-top', decl => { margins.push([rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : null, decl.value]); });
    });
    expect(margins).toEqual([[null, 'calc(80px + var(--disclaimer-height, 0px))'], ['(max-width:900px)', 'calc(120px + var(--disclaimer-height, 0px))']]);
});
it('names every scrollable table like the reviewed source and shows keyboard focus', () => {
    const Page = sourceModule(base + '/page.tsx').default as React.ComponentType;
    const original = load(readFileSync(existsSync('Iso-iec-ieee-29119-3-2021-guide.html')?'Iso-iec-ieee-29119-3-2021-guide.html':'archive/html-archive/iso/Iso-iec-ieee-29119-3-2021-guide.html', 'utf8'));
    applyReviewCorrections(original);
    const current = load(renderToString(<Page />));
    const regions = ($: typeof current) => $('main .table-scroll').toArray().map(el => [$(el).attr('aria-label'), $(el).attr('role'), $(el).attr('tabindex')]);
    expect(regions(current)).toHaveLength(39);
    expect(regions(current)).toEqual(regions(original));
    const outlines: string[] = [];
    postcss.parse(readFileSync(base + '/iso-iec-ieee-29119-3-2021-guide.css', 'utf8')).walkRules('.iso291193-page .table-scroll:focus-visible', rule => {
        rule.walkDecls('outline', decl => { outlines.push(decl.value); });
    });
    expect(outlines).toEqual(['2px solid var(--accent)']);
});
it('hydrates without recoverable errors or DOM warnings and attaches TOC events', async () => {
    const Page = sourceModule(base + '/page.tsx').default as React.ComponentType;
    const host = document.createElement('div');
    host.innerHTML = renderToString(<Page />); document.body.append(host);
    const errors: unknown[] = []; const warnings: unknown[] = [];
    const originalError = console.error;
    console.error = (...args: unknown[]) => { warnings.push(args); };
    let root: Root | undefined;
    try {
        await act(async () => { root = hydrateRoot(host, <Page />, { onRecoverableError: error => { errors.push(error); } }); });
        const button=host.querySelector('button')!;
        await act(async () => { fireEvent.click(button); });
        expect(button.getAttribute('aria-expanded')).toBe('true');
        await act(async () => { fireEvent.keyDown(document, {key:'Escape'}); });
        expect(button.getAttribute('aria-expanded')).toBe('false');
        expect(errors).toEqual([]); expect(warnings).toEqual([]);
    } finally {
        if (root) await act(async () => root!.unmount());
        console.error = originalError; host.remove();
    }
});
