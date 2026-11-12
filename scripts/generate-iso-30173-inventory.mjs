import fs from 'node:fs';
import * as cheerio from 'cheerio';
import postcss from 'postcss';
import crypto from 'node:crypto';

const stem = 'Iso-30173-guide';
const read = ext => fs.readFileSync(fs.existsSync(`${stem}.${ext}`) ? `${stem}.${ext}` : `archive/${ext}-archive/iso/${stem}.${ext}`, 'utf-8');
const html = read('html');
const md = read('md');
const $ = cheerio.load(html);

const title = $('title').text().trim();
const hashes = {
  html: crypto.createHash('sha256').update(html).digest('hex'),
  md: crypto.createHash('sha256').update(md).digest('hex'),
};

const originalBody = $('body').html();
const fullCss = $('style').text();

// Parse CSS with postcss
const root = postcss.parse(fullCss);
const cssRules = [];
root.walkRules(rule => {
  if (rule.selector.startsWith('#mmd-svg-') || rule.selector.includes('@keyframes') || rule.selector === 'from' || rule.selector === 'to') return;
  
  let media = null;
  if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name === 'media') {
    media = rule.parent.params;
  }
  
  const decls = [];
  rule.walkDecls(decl => {
    decls.push([decl.prop, decl.value, decl.important ? '!important' : null]);
  });
  
  if (decls.length > 0) {
    const cleanSelector = rule.selector.replace(/\s+/g, ' ').trim();
    cssRules.push({
      selector: cleanSelector,
      media,
      decls
    });
  }
});

// Extract sections
const sections = [];
const h2Elements = $('h2').toArray();

h2Elements.forEach((h2El, i) => {
  const h2 = $(h2El);
  const name = h2.text().trim();
  let sectionHtml = $.html(h2);
  
  let curr = h2El.nextSibling;
  const nextH2 = h2Elements[i + 1];
  
  while (curr && curr !== nextH2 && (curr.tagName !== 'footer' && !$(curr).hasClass('page-footer'))) {
    sectionHtml += $.html(curr);
    curr = curr.nextSibling;
  }
  
  sections.push({ name, html: sectionHtml.trim() });
});

// Extract diagrams
const mmdSources = [...md.matchAll(/```mermaid\n([\s\S]*?)```/g)].map(m => m[1].trim());
const diagrams = {};

$('.mermaid-diagram').each((i, el) => {
  const mmdEl = $(el);
  const id = mmdEl.attr('id');
  const svg = mmdEl.find('svg');
  const viewBox = svg.attr('viewBox');
  const src = mmdSources[i] || '';
  
  const firstLine = src.split('\n')[0].trim();
  const dirMatch = firstLine.match(/flowchart\s+([A-Za-z]+)/);
  const direction = dirMatch ? dirMatch[1] : 'TB';
  
  const nodes = [];
  svg.find('.nodes .node').each((_, n) => {
    const nodeId = $(n).attr('id');
    const label = $(n).find('.nodeLabel').text().trim() || $(n).find('.label').text().trim();
    const isRhombus = $(n).find('polygon').length > 0;
    nodes.push({
      id: nodeId,
      label,
      shape: isRhombus ? 'rhombus' : 'rect'
    });
  });
  
  const edges = [];
  svg.find('.edgePaths path').each((_, e) => {
    const edgeId = $(e).attr('id');
    edges.push({
      id: edgeId
    });
  });
  
  const clusters = [];
  svg.find('.clusters .cluster').each((_, c) => {
    const clusterId = $(c).attr('id');
    const label = $(c).find('.cluster-label').text().trim();
    clusters.push({
      id: clusterId,
      label
    });
  });
  
  diagrams[String(i)] = {
    id,
    direction,
    nodes,
    edges,
    clusters,
    viewBox,
    source: src
  };
});

// Extract groups
const groups = {
  headings: {
    selector: 'main h1,main h2,main h3,main h4',
    items: $('.main h1, .main h2, .main h3, .main h4').toArray().map(el => $.html(el).trim())
  },
  toc: {
    selector: '.sidebar a',
    items: $('.sidebar a').toArray().map(el => $.html(el).trim())
  },
  tables: {
    selector: 'main table',
    items: $('.main table').toArray().map(el => $.html(el).trim())
  },
  code: {
    selector: 'main pre, main code',
    items: $('.main pre, .main code').toArray().map(el => $.html(el).trim())
  },
  callouts: {
    selector: 'main blockquote, main .callout',
    items: $('.main blockquote, .main .callout').toArray().map(el => $.html(el).trim())
  },
  references: {
    selector: 'main a[href^="http"]',
    items: $('.main a[href^="http"]').toArray().map(el => $.html(el).trim())
  },
  answers: {
    selector: 'main details, main .faq-item',
    items: $('.main details, .main .faq-item').toArray().map(el => $.html(el).trim())
  },
  diagrams: {
    selector: 'main .mermaid-diagram',
    items: $('.main .mermaid-diagram').toArray().map(el => $.html(el).trim())
  }
};

const inventory = {
  source: 'Iso-30173-guide.html',
  title,
  hashes,
  originalBody,
  originalCss: fullCss,
  hero: $.html($('.hero')).trim(),
  footer: $.html($('.page-footer')).trim(),
  sidebar: $.html($('.sidebar')).trim(),
  sections,
  css: cssRules,
  diagrams,
  groups
};

fs.writeFileSync('docs/migration-inventory/iso-30173-guide.json', JSON.stringify(inventory, null, 2));
console.log('Successfully wrote docs/migration-inventory/iso-30173-guide.json');
