import { afterEach, describe, expect, it, mock } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/software-testing-craftsmans-approach-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/software-testing-craftsmans-approach-guide';
const scope = '.craftsmans-page';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
function tree(n: AnyNode | undefined): unknown {
    if (!n) throw new Error('missing element');
    if (n.type === 'text') return norm(n.data) || null;
    if (!isTag(n)) return null;
    const attrs = { ...n.attribs };
    if (attrs.class === 'mermaid') return { diagram: attrs.id };
    if (attrs.class === 'diagram-frame') attrs.class = 'mermaid-wrapper';
    return { tag: n.tagName, attrs, children: n.children.map(tree).filter(x => x !== null) };
}
function html(file = 'page', development = false) {
    const Component = sourceModule(`${base}/${file}.tsx`, { development }).default as React.ComponentType;
    return load(renderToStaticMarkup(<Component />));
}
afterEach(cleanup);
describe('original content per implementation category', () => {
    inventory.sections.forEach(s => it(`${s.file} ${s.id}: exact text, nested structure and attributes`, () => {
        const $ = html(s.file); expect(tree($(`#${s.id}`)[0])).toEqual(s.tree);
    }));
});
describe('complete page inventory', () => {
    for (const [category, group] of Object.entries(inventory.groups)) {
        const selector = category === 'headings' ? 'main h1,main h2,main h3,main h4,.sidebar h2' : group.selector;
        it(`${category}: exact count including surplus detection`, () => expect(html()(selector)).toHaveLength(group.items.length));
        group.items.forEach((expected, i) => it(`${category}[${i}]: ordered original element`, () => {
            const $ = html(); const n = $(selector)[i];
            if (category === 'toc') { expect({ href: $(n).attr('href'), text: norm($(n).text()) }).toEqual({ href: expected && 'attrs' in expected ? expected.attrs.href : '', text: expected && 'children' in expected ? expected.children.join('') : '' }); }
            else expect(tree(n)).toEqual(expected);
        }));
    }
    for (const development of [false, true]) it(`Next.js SWC development=${development}: full main document order`, () => {
        const $ = html('page', development); expect($('main').contents().toArray().map(tree).filter(Boolean)).toEqual(inventory.main);
    });
    it('every TOC target resolves once, no duplicate IDs, scripts or raw HTML injection', () => {
        const $ = html(); const ids = $('[id]').map((_,n)=>$(n).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length);
        $('.sidebar a').each((_, n) => expect($($(n).attr('href')!)).toHaveLength(1)); expect($('script')).toHaveLength(0);
        expect(readFileSync(`${base}/page.tsx`,'utf8')).not.toContain('dangerouslySetInnerHTML');
    });
});
const mapped = (s: string) => s.split(',').map(s => [':root','html','body'].includes(s.trim()) ? scope : `${scope} ${s.trim().replaceAll('.mermaid-wrapper','.diagram-frame').replace('pre.mermaid','.mermaid')}`).join(', ');
describe('original design: every CSS rule and declaration', () => {
    inventory.css.forEach((rule,i) => it(`CSS[${i}] ${rule.media ?? 'desktop'} ${rule.selector}`, () => {
        const found: unknown[] = []; postcss.parse(readFileSync(`${base}/software-testing-craftsmans-approach-guide.css`,'utf8')).walkRules(r => {
            if(r.selector === mapped(rule.selector) && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === rule.media) found.push(r.nodes.filter(n=>n.type==='decl').map(d=>{const n=d as postcss.Declaration;return [n.prop,n.value,n.important||null];}));
        }); expect(found).toContainEqual(rule.decls);
    }));
    it('imports scoped CSS and compensates fixed app chrome; restores global collisions', () => {
        const css=readFileSync(`${base}/software-testing-craftsmans-approach-guide.css`,'utf8');
        postcss.parse(css).walkRules(r=>r.selectors.forEach(s=>expect(s.startsWith(scope)).toBe(true)));
        expect(readFileSync(`${base}/page.tsx`,'utf8')).toContain("import './software-testing-craftsmans-approach-guide.css'");
        for(const text of ['var(--disclaimer-height, 0px)','min-height: 0','display: block','content: none','list-style-type: disc','list-style-type: decimal','foreignObject','edgeLabel','max-width: none','scroll-margin-top']) expect(css).toContain(text);
    });
});
describe('all original Mermaid definitions', () => {
    for(const [id, chart] of Object.entries(inventory.diagrams)) it(`${id}: exact definition, theme and real parser`, async () => {
        const entry='../../app/software-testing-craftsmans-approach-guide/diagrams'; const {DIAGRAMS, MERMAID_CONFIG}=await import(entry);
        expect(DIAGRAMS[id].slice(MERMAID_CONFIG.length).trim()).toBe(chart); expect(MERMAID_CONFIG).not.toContain("'");
        const realEntry='mermaid/dist/mermaid.esm.mjs'; const real=(await import(realEntry)).default;
        expect(await real.parse(DIAGRAMS[id])).toBeTruthy();
    });
});
describe('TOC interaction and lifecycle', () => {
    it('observes every original section, updates active link and disconnects', async () => {
        const entry='../../app/software-testing-craftsmans-approach-guide/NavBar'; const Nav=(await import(entry)).default;
        const original=globalThis.IntersectionObserver; let callback: IntersectionObserverCallback=()=>{};
        const observe=mock(()=>{}), disconnect=mock(()=>{});
        globalThis.IntersectionObserver=class { constructor(cb: IntersectionObserverCallback){callback=cb;} observe=observe;disconnect=disconnect; } as unknown as typeof IntersectionObserver;
        try { const result=render(<><Nav/>{inventory.sections.map(s=><section key={s.id} id={s.id}/>)}</>);
            expect(observe.mock.calls.length).toBe(inventory.sections.length);
            for(const s of inventory.sections){act(()=>callback([{isIntersecting:true,target:document.getElementById(s.id)!} as IntersectionObserverEntry], {} as IntersectionObserver));expect(result.container.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe(`#${s.id}`);}
            result.unmount();expect(disconnect).toHaveBeenCalledTimes(1);
        } finally {globalThis.IntersectionObserver=original;}
    });
    it('opens and closes by button, Escape and link; restores keyboard focus', async () => {
        const entry='../../app/software-testing-craftsmans-approach-guide/NavBar';const Nav=(await import(entry)).default; const r=render(<Nav/>);
        const button=r.getByRole('button'); expect(button.getAttribute('aria-expanded')).toBe('false');
        fireEvent.click(button);expect(button.getAttribute('aria-expanded')).toBe('true');fireEvent.keyDown(document,{key:'Escape'});expect(button.getAttribute('aria-expanded')).toBe('false');expect(document.activeElement).toBe(button);
        fireEvent.click(button);fireEvent.click(r.getByRole('link',{name:'Step 3：境界値分析'}));expect(button.getAttribute('aria-expanded')).toBe('false');expect(r.container.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#step3');
    });
});
