import fs from 'node:fs';
import crypto from 'node:crypto';
import { load } from 'cheerio';
import postcss from 'postcss';

const stem = 'Iso-iec-tr-29119-13-guide';
const read = ext => fs.readFileSync(fs.existsSync(`${stem}.${ext}`) ? `${stem}.${ext}` : `archive/${ext}-archive/iso/${stem}.${ext}`, 'utf8');
const html = read('html');
const $ = load(html);
const sections = [];
let current = { name: '導入・対象規格', html: '' };
$('main.doc').contents().each((_, node) => {
  if (node.type === 'tag' && node.tagName === 'h2') {
    sections.push(current);
    current = { name: $(node).text(), html: '' };
  }
  current.html += $.html(node);
});
sections.push(current);
const css = [];
postcss.parse($('style').text()).walkRules(rule => {
  css.push({ selector: rule.selector.replace(/\s+/g, ' ').trim(), media: rule.parent.type === 'atrule' ? rule.parent.params : null,
    decls: rule.nodes.filter(n => n.type === 'decl').map(d => [d.prop, d.value, d.important ? '!important' : null]) });
});
const selectors = {
  headings: '.hero h1, main h2, main h3, main h4', toc: '.toc a', tables: 'main table',
  code: 'main pre:not(.mermaid), main code', callouts: 'main blockquote', references: 'main a[href^="http"]',
  diagrams: '.diagram', checklist: '.checklist li', tags: 'main .tag',
};
const groups = Object.fromEntries(Object.entries(selectors).map(([name, selector]) => [name, { selector, items: $(selector).toArray().map(n => $.html(n)) }]));
const diagrams = $('pre.mermaid').toArray().map((n, i) => ({ id: `diagram-${i}`, source: $(n).text().trim(), heading: $(n).parent().prevAll('h2,h3').first().text() }));
const inventory = { source: stem + '.html', title: $('title').text(), hashes: Object.fromEntries(['html','md'].map(ext => [ext, crypto.createHash('sha256').update(read(ext)).digest('hex')])),
  originalBody: $('body').html(), originalCss: $('style').text(), hero: $.html($('.hero')), sections, css, diagrams, groups };
fs.writeFileSync('docs/migration-inventory/iso-iec-tr-29119-13-guide.json', JSON.stringify(inventory, null, 2) + '\n');
console.log({ categories: sections.length, css: css.length, diagrams: diagrams.length, groups: Object.fromEntries(Object.entries(groups).map(([k,v])=>[k,v.items.length])) });
