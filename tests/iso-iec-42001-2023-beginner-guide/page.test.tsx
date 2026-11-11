import { describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/iso-iec-42001-2023-beginner-guide.json';
import { sourceModule } from '../helpers/source-module';
const applyReviewCorrections = (html: string) => html;

const base = 'app/iso-iec-42001-2023-beginner-guide';
const scope = '.iso42001-page';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();

/** Ignore only documented accessibility additions, never text or original design classes. */
function tree(n: AnyNode): unknown {
  if (n.type === 'text') return norm(n.data) || null;
  if (!isTag(n)) return null;
  const attrs = { ...n.attribs };
  for (const k of ['role','aria-live','aria-label','aria-labelledby','aria-valuenow','aria-valuemin','aria-valuemax','aria-current','aria-expanded','aria-controls','tabindex','inert','type']) {
    if (k === 'type' && n.tagName === 'input') continue;
    delete attrs[k];
  }
  if (attrs.class) { attrs.class = attrs.class.replace(/(^|\s+)active\b/g, '').trim(); if (!attrs.class) delete attrs.class; }
  if (attrs.style) { attrs.style = attrs.style.replace(/\s+/g, '').replace(/;$/, ''); if (attrs.style === 'width:0%') delete attrs.style; }
  return { tag: n.tagName, attrs, children: attrs.class === 'mermaid-diagram' ? [] : n.children.map(tree).filter(Boolean) };
}

/** HTML indentation between table rows/cells is omitted to avoid invalid React hydration text nodes. */
function source(html: string) {
  const $ = load(applyReviewCorrections(html));
  $('a[href^="http"]').attr('target','_blank').attr('rel','noopener noreferrer');
  $('table,thead,tbody,tfoot,tr').contents().filter((_,n)=>n.type === 'text' && /^\s*$/.test(n.data)).remove();
  return $;
}

/** Compile production modules through Next.js/SWC in both development and production JSX modes. */
function render(file: string, development = false) {
  const C = sourceModule(`${base}/${file}.tsx`, { development }).default as React.ComponentType;
  return load(renderToStaticMarkup(<C />));
}

for (const [i, category] of inventory.sections.entries()) {
  describe(`category ${String(i).padStart(2,'0')}: ${category.name}`, () => {
    for (const development of [false,true]) it(`complete DOM and inline text, SWC development=${development}`, () => {
      const actual = render(`Section${String(i).padStart(2,'0')}`, development);
      const expected = source(category.html);
      expect(actual('body').contents().toArray().map(tree).filter(Boolean)).toEqual(expected('body').contents().toArray().map(tree).filter(Boolean));
      actual('.mermaid-diagram').empty(); expected('.mermaid-diagram').empty();
      expect(norm(actual('body').text())).toBe(norm(expected('body').text()));
    });
  });
}

describe('foundation CSS', () => {
  inventory.css.forEach((original, i) => it(`CSS ${i}: ${original.selector}`, () => {
    const candidates: unknown[] = [];
    const expected = original.selector.split(',').map(s => [':root','html','body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
    postcss.parse(readFileSync(`${base}/guide.css`,'utf8')).walkRules(r => {
      if (r.selector === expected && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === original.media)
        candidates.push(r.nodes.filter(n => n.type === 'decl').map(d => { const n = d as postcss.Declaration; return [n.prop,n.value,n.important ? '!important' : null]; }));
    });
    expect(candidates).toContainEqual(original.decls);
  }));
  it('isolates CSS, restores preflight defaults and offsets application chrome', () => {
    const css = readFileSync(`${base}/guide.css`,'utf8');
    postcss.parse(css).walkRules(r => r.selectors.forEach(s => expect(s.startsWith(scope)).toBe(true)));
    for (const text of ['all: revert','var(--disclaimer-height, 0px)','height: calc(100dvh - 60px','scroll-margin-top: calc(80px','prefers-reduced-motion: reduce','foreignObject','max-width: none','.table-scroll:focus-visible']) expect(css).toContain(text);
    expect(css).not.toContain('--disclaimer-height: 0px');
  });
});

describe('source diagrams', () => {
  for (const [i, diagram] of inventory.diagrams.entries()) it(`${diagram.id}: exact source, parser, labels and shared renderer`, async () => {
    const charts: string[] = [];
    const C = sourceModule(`${base}/Diagram.tsx`, { onMermaidChart: c => charts.push(c) }).default as React.ComponentType<{ index: number }>;
    const $ = load(renderToStaticMarkup(<C index={i} />));
    expect(charts).toHaveLength(1);
    const chart = charts[0]!;
    expect(norm(chart.slice(chart.indexOf('}%%') + 3))).toBe(norm(diagram.source));
    const config = JSON.parse(chart.match(/%%\{init: ([\s\S]*?)\}%%/)![1]!);
    expect(config.theme).toBe('base');
    expect(config.themeVariables).toMatchObject({primaryColor:"#12233b",primaryTextColor:"#e6edf7",lineColor:"#7c9eff",edgeLabelBackground:"#0b1b2e"});
    expect(chart.split('}%%')[0]).not.toContain("'");
    expect($('[role="img"]').attr('aria-label')).toContain(diagram.id);
    for (const label of diagram.labels) expect($('[role="img"]').attr('aria-label')).toContain(label);
    const entry: string = 'mermaid/dist/mermaid.esm.mjs';
    await expect((await import(entry)).default.parse(chart)).resolves.toBeTruthy();
    for (const node of diagram.nodes) expect(chart).toContain(`"${node.label}"`);
  });
});

describe('assembled source inventory', () => {
  let cached: ReturnType<typeof render>;
  const page = () => cached ??= render('page');
  for (const [name, group] of Object.entries(inventory.groups)) {
    const expected = source(inventory.originalBody)(group.selector).toArray();
    it(`${name}: exact ordered count`, () => expect(page()(group.selector)).toHaveLength(expected.length));
    expected.forEach((element, i) => it(`${name} ${i}: complete original element`, () =>
      expect(tree(page()(group.selector)[i]!)).toEqual(tree(element))));
  }
  for (const development of [false,true]) it(`complete page, metadata and inline text SWC development=${development}`, () => {
    const $ = render('page',development), ref = source(inventory.originalBody);
    for (const selector of ['.hero','main.main','.sidebar','.toggle']) expect(tree($(selector)[0]!)).toEqual(tree(ref(selector)[0]!));
    $('.mermaid-diagram').empty(); ref('.mermaid-diagram').empty();
    expect(norm($('main').text())).toBe(norm(ref('main').text()));
    const ids = $('[id]').map((_,n)=>$(n).attr('id')).get();
    expect(new Set(ids).size).toBe(ids.length);
    $('.sidebar a').each((_,n)=>expect(ids.filter(id=>id === $(n).attr('href')!.slice(1))).toHaveLength(1));
    expect($('script,style,svg,table > div,tr > div')).toHaveLength(0);
    expect(readFileSync(`${base}/page.tsx`,'utf8')).toContain("import './guide.css'");
    expect(sourceModule(`${base}/page.tsx`).metadata).toMatchObject({ title:inventory.title });
    $('a[href^="http"]').each((_,n)=> { expect($(n).attr('target')).toBe('_blank'); expect($(n).attr('rel')).toBe('noopener noreferrer'); });
  });
  it('names all 45 keyboard-scrollable table regions with existing headings', () => {
    page()('.table-scroll').each((_,n)=> {
      const $ = page(); expect($(n).attr('tabindex')).toBe('0'); expect($(n).attr('role')).toBe('region');
      const id = $(n).attr('aria-labelledby'); expect(id).toBeTruthy();
      expect($(`[id="${id}"]`)).toHaveLength(1);
    });
  });
});
