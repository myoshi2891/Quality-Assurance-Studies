import { describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/iso-iec-29110-5-1-2-2025-beginner-guide.json';
import { sourceModule } from '../helpers/source-module';

const base = 'app/iso-iec-29110-5-1-2-2025-beginner-guide';
const scope = '.iso29110-page';
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();

/** Normalize only documented migration attributes; preserve inline whitespace separately. */
function tree(n: AnyNode): unknown {
  if (n.type === 'text') return norm(n.data) || null;
  if (!isTag(n)) return null;
  const attrs = { ...n.attribs };
  for (const k of ['role','aria-label','aria-labelledby','aria-valuenow','aria-valuemin','aria-valuemax','aria-current','aria-expanded','aria-controls','tabindex','inert','type','data-testid']) {
    if (k === 'type' && n.tagName === 'input') continue;
    delete attrs[k];
  }
  if (attrs.class) { attrs.class = attrs.class.replace(/(^|\s+)active\b/g, '').trim(); if (!attrs.class) delete attrs.class; }
  if (n.tagName === 'button') delete attrs['aria-label'];
  if (attrs.class === 'sidebar' || attrs.class === 'mermaid-source') delete attrs.id;
  if (attrs.class === 'progress-fill') delete attrs.style;
  if (attrs.style) { attrs.style = attrs.style.replace(/\s+/g, '').replace(/;$/, ''); if (attrs.style === 'width:0%') delete attrs.style; }
  return { tag: n.tagName, attrs, children: attrs.class === 'mermaid-source' ? [] : n.children.map(tree).filter(Boolean) };
}

/** Convert the original pre containers to accessible renderer hosts without changing diagram sources. */
function source(html: string) {
  const $ = load(html);
  $('script').remove();
  $('a[href^="http"]').attr('target','_blank').attr('rel','noopener noreferrer');
  $('.diagram-scroll').each((_, n) => {
    const index = inventory.diagrams.findIndex(d => d.svg.includes($(n).find('svg').attr('id') ? `id=\"${$(n).find('svg').attr('id')}\"` : '__absent__')); 
    $(n).html(`<div class="mermaid-source" data-diagram="diagram-${index}"></div>`);
  });
  // Original check markup nests labels illegally; use one accessible label per item.
  $('label label').each((_,n)=>{ $(n).replaceWith($(n).contents()); });
  $('.progress-label').text('0 / 8 完了');
  $('.sidebar').removeAttr('id');
  $('table,thead,tbody,tfoot,tr,colgroup').contents().filter((_, n) => n.type === 'text' && /^\s*$/.test(n.data)).remove();
  return $;
}

/** Compile the actual page modules using the same JSX transform as Next.js. */
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
      actual('.mermaid-source').empty(); expected('.mermaid-source').empty();
      expect(norm(actual('body').text())).toBe(norm(expected('body').text()));
    });
  });
}

describe('foundation CSS', () => {
  inventory.css.forEach((original, i) => it(`CSS ${i}: every declaration ${original.selector}`, () => {
    const candidates: unknown[] = [];
    const expected = original.selector.split(',').map(s => [':root','html','body'].includes(s.trim()) ? scope : s.trim().startsWith('body.') ? s.trim().replace('body', scope) : `${scope} ${s.trim()}`).join(', ');
    postcss.parse(readFileSync(`${base}/guide.css`,'utf8')).walkRules(r => {
      if (r.selector === expected && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === original.media)
        candidates.push(r.nodes.filter(n => n.type === 'decl').map(d => { const n = d as postcss.Declaration; return [n.prop,n.value,n.important ? '!important' : null]; }));
    });
    expect(candidates).toContainEqual(original.decls);
  }));
  it('isolates original styles, resets shared styling, retains sticky/grid layout and offsets application chrome', () => {
    const css = readFileSync(`${base}/guide.css`,'utf8');
    postcss.parse(css).walkRules(r => r.selectors.forEach(s => expect(s.startsWith(scope) || s === 'html:has(.iso29110-page)').toBe(true)));
    for (const text of ['all: revert','var(--disclaimer-height, 0px)','height: calc(100dvh - 60px','scroll-margin-top: calc(80px','prefers-reduced-motion: reduce','foreignObject','max-width: none','.table-scroll:focus-visible']) expect(css).toContain(text);
    expect(css).not.toContain('--disclaimer-height: 0px');
  });
});

describe('source diagrams', () => {
  for (const [i, diagram] of inventory.diagrams.entries()) it(`${diagram.id}: exact source, parser and shared renderer`, async () => {
    const charts: string[] = [];
    const C = sourceModule(`${base}/Diagram.tsx`, { onMermaidChart: c => charts.push(c) }).default as React.ComponentType<{ index: number }>;
    renderToStaticMarkup(<C index={i} />);
    expect(charts).toHaveLength(1);
    const chart = charts[0]!;
    expect(norm(chart.slice(chart.indexOf('}%%') + 3))).toBe(norm(diagram.source));
    const config = JSON.parse(chart.match(/%%\{init: ([\s\S]*?)\}%%/)![1]!);
    expect(config.theme).toBe('base');
    expect(config.themeVariables).toMatchObject({ primaryTextColor:'#e6edf7',lineColor:'#9db4e0',edgeLabelBackground:'#0d1b2e' });
    expect(chart.split('}%%')[0]).not.toContain("'");
    const entry: string = 'mermaid/dist/mermaid.esm.mjs';
    await expect((await import(entry)).default.parse(chart)).resolves.toBeTruthy();
  });
});

describe('assembled source inventory', () => {
  let cached: ReturnType<typeof render>;
  const page = () => cached ??= render('page');
  for (const [name, group] of Object.entries(inventory.groups)) {
    it(`${name}: exact ordered count`, () => expect(page()(group.selector)).toHaveLength(group.items.length));
    group.items.forEach((html, i) => it(`${name} ${i}: complete original element`, () =>
      expect(tree(page()(group.selector)[i]!)).toEqual(tree(source(html)('body').children()[0]!))));
  }
  for (const development of [false,true]) it(`complete page, metadata and inline text SWC development=${development}`, () => {
    const $ = render('page',development);
    const ref = source(inventory.originalBody);
    for (const selector of ['.hero','main.content','.sidebar','.nav-toggle','.scrim']) expect(tree($(selector)[0]!)).toEqual(tree(ref(selector)[0]!));
    $('.mermaid-source').empty(); ref('.mermaid-source').empty();
    expect(norm($('main').text())).toBe(norm(ref('main').text()));
    const ids = $('[id]').map((_,n)=>$(n).attr('id')).get();
    expect(new Set(ids).size).toBe(ids.length);
    $('.sidebar a').each((_,n)=>expect(ids.filter(id=>id === $(n).attr('href')!.slice(1))).toHaveLength(1));
    expect($('script,style,svg,table > div,tr > div,label label')).toHaveLength(0);
    expect(readFileSync(`${base}/page.tsx`,'utf8')).toContain("import './guide.css'");
    expect(sourceModule(`${base}/page.tsx`).metadata).toMatchObject({ title:inventory.title });
    $('a[href^="http"]').each((_,n)=> { expect($(n).attr('target')).toBe('_blank'); expect($(n).attr('rel')).toBe('noopener noreferrer'); });
  });
  it('names every keyboard-scrollable table region with its nearest heading', () => {
    page()('.table-scroll').each((_,n)=> {
      const $ = page();
      expect($(n).attr('tabindex')).toBe('0'); expect($(n).attr('role')).toBe('region');
      const id = $(n).attr('aria-labelledby'); expect(id).toBeTruthy();
      expect(id).toBe($(n).prevAll('h2,h3').first().attr('id'));
    });
  });
});

it('disables document scrolling animation for reduced motion only while this route exists',()=>{const css=readFileSync(`${base}/guide.css`,'utf8');expect(css).toContain('html:has(.iso29110-page)');});
