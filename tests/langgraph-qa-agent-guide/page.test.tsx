import { afterEach, describe, expect, it } from 'bun:test';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/langgraph-qa-agent-guide.json';
import { source, signature } from './source';
afterEach(cleanup);
async function page() { const { default: Page } = await import('../../app/langgraph-qa-agent-guide/page'); return render(<Page />); }
describe('foundation', () => {
 it('preserves the complete ordered source inventory', () => {
 for (const selector of ["h1,h2,h3,h4",".sidebar nav a",".diagram-wrap","table","pre code",".callout,.summary-card,blockquote",".ref-item"]) expect([...source.querySelectorAll(selector)].map(el => ({tag:el.tagName.toLowerCase(),id:el.id,class:el.getAttribute('class')??'',href:el.getAttribute('href')??'',text:(el.textContent??'').replace(/\s+/g,'')}))).toEqual(inventory[selector as keyof typeof inventory]);
 });
 it('preserves hero and introductory content structure and text', async () => {
 const {container}=await page(); const main=container.querySelector('main')!;
 const actual=[...main.children].filter(el=>el.tagName!=='SECTION');
 const expected=[...source.querySelector('main')!.children].filter(el=>el.tagName!=='SECTION');
 expect(actual.map(signature)).toEqual(expected.map(signature));
 });
 it('imports scoped CSS and preserves every source declaration including media rules', async () => {
 await page();
 expect(readFileSync('app/langgraph-qa-agent-guide/page.tsx','utf8')).toContain("import './langgraph-qa-agent-guide.css'");
 const css=postcss.parse(readFileSync('app/langgraph-qa-agent-guide/langgraph-qa-agent-guide.css','utf8'));
 const rules: {selector:string;media:string;declarations:string[][]}[]=[];
 css.walkRules(rule=>{rules.push({selector:rule.selector,media:rule.parent?.type==='atrule'?(rule.parent as postcss.AtRule).params:'',declarations:rule.nodes.filter(n=>n.type==='decl').map(n=>[(n as postcss.Declaration).prop,(n as postcss.Declaration).value])});});
 for (const rule of inventory.css) {
 const selector=rule.selector.split(',').map(s=>[':root','body','html'].includes(s.trim())?'.lgqa-page':'.lgqa-page '+s.trim()).join(', ');
 expect(rules.filter(r=>r.selector===selector&&r.media===rule.media).map(r=>r.declarations),rule.selector).toContainEqual(rule.declarations);
 }
 });
});
