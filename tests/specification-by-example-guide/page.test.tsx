import { afterEach, describe, expect, it, mock, spyOn } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import mermaid from 'mermaid';
import inventory from '../../docs/migration-inventory/specification-by-example-guide.json';
import { sourceModule } from '../helpers/source-module';
const base='app/specification-by-example-guide', scope='.sbe-page', KEY='sbe-guide-checklist-v1';
const norm=(s:string)=>s.replace(/\s+/g,' ').trim();
function tree(n:AnyNode|undefined):unknown {
    if(!n)throw new Error('missing element'); if(n.type==='text')return norm(n.data)||null; if(!isTag(n))return null;
    const attrs={...n.attribs};
    if(attrs.style)attrs.style=attrs.style.replace(/\s*([:;])\s*/g,'$1');
    if(attrs.class==='mermaid')return {diagram:attrs.id};
    if(n.tagName==='pre'){const $=load(n);const lines=$('.code-line');return {tag:'pre',attrs,code:lines.length?lines.map((_,el)=>$(el).text()).get().join('\n'):$(n).text()};}
    return {tag:n.tagName,attrs,children:n.children.map(tree).filter(x=>x!==null)};
}
function html(file='page',development=false){const Component=sourceModule(`${base}/${file}.tsx`,{development}).default as React.ComponentType;return load(renderToStaticMarkup(<Component/>));}
afterEach(()=>{cleanup();localStorage.removeItem(KEY);});
describe('per-category original content',()=>{
    inventory.sections.forEach(s=>it(`${s.file} ${s.id}: full ordered original tree`,()=>{const $=html(s.file);expect(tree($(s.selector)[0])).toEqual(s.tree);}));
    inventory.practice.forEach(s=>it(`${s.file}: full ordered practice step`,()=>{const $=html(s.file);expect($('body').contents().toArray().map(tree).filter(Boolean)).toEqual(s.nodes);}));
});
describe('all original inventory elements',()=>{
    for(const [category,group]of Object.entries(inventory.groups)){
        it(`${category}: exact ordered count, no surplus`,()=>expect(html()(group.selector)).toHaveLength(group.items.length));
        group.items.forEach((expected,i)=>it(`${category}[${i}]: full text, attributes and structure`,()=>{
            const $=html(),n=$(group.selector)[i];
            if(category==='toc'){const el=$(n);el.removeAttr('aria-current');el.attr('class',el.attr('class')?.replace(/\s+active\b/g,'')||'');if(!el.attr('class'))el.removeAttr('class');}
            expect(tree(n)).toEqual(expected);
        }));
    }
    for(const development of [false,true])it(`SWC development=${development}: entire main document`,()=>{const $=html('page',development);expect($('main').contents().toArray().map(tree).filter(Boolean)).toEqual(inventory.main);});
    it('unique IDs, every main and nested TOC target resolves, and no executable source scripts',()=>{const $=html();const ids=$('[id]').map((_,n)=>$(n).attr('id')).get();expect(new Set(ids).size).toBe(ids.length);$('.sidebar a').each((_,n)=>expect($($(n).attr('href')!)).toHaveLength(1));expect($('script')).toHaveLength(0);});
    it('preserves the original web-font families and requested weights without build-time fetching',()=>{const $=html();expect($('link[href*="fonts.googleapis.com/css2"]').attr('href')).toBe(inventory.fontHref);expect(readFileSync(`${base}/page.tsx`,'utf8')).not.toContain('next/font/google');});
});
const mapped=(s:string)=>s.split(',').map(s=>[':root','html','body'].includes(s.trim())?scope:s.trim()==='body.sidebar-open .sidebar'?`${scope} .sidebar.open`:`${scope} ${s.trim()}`).join(', ');
describe('every original CSS declaration',()=>{
    inventory.css.forEach((rule,i)=>it(`CSS[${i}] ${rule.media??'desktop'} ${rule.selector}`,()=>{const found:unknown[]=[];postcss.parse(readFileSync(`${base}/specification-by-example-guide.css`,'utf8')).walkRules(r=>{if(r.selector===mapped(rule.selector)&&(r.parent?.type==='atrule'?(r.parent as postcss.AtRule).params:null)===rule.media)found.push(r.nodes.filter(n=>n.type==='decl').map(d=>{const n=d as postcss.Declaration;return[n.prop,n.value,n.important||null];}));});expect(found).toContainEqual(rule.decls);}));
    it('imports CSS and scopes every selector, resets shared cards, chrome and SVG clipping',()=>{const css=readFileSync(`${base}/specification-by-example-guide.css`,'utf8');postcss.parse(css).walkRules(r=>r.selectors.forEach(s=>expect(s.startsWith(scope)||s.startsWith('body:has(.sbe-page)')).toBe(true)));expect(readFileSync(`${base}/page.tsx`,'utf8')).toContain("import './specification-by-example-guide.css'");for(const text of ['var(--disclaimer-height, 0px)','min-height: 0','content: none','list-style-type: disc','list-style-type: decimal','foreignObject','edgeLabel','max-width: none','scroll-margin-top'])expect(css).toContain(text);});
});
describe('original code and highlight token stream',()=>{
    it('keeps all Gherkin lines including blank lines and indentation after SWC dev/prod',()=>{for(const dev of [false,true]){const $=html('CodeExample',dev);expect($('.code-line').map((_,n)=>$(n).text()).get()).toEqual(inventory.code.split('\n'));}});
    it('keeps every highlight.js keyword and string in order',()=>{const expected=load(inventory.highlight);const $=html('CodeExample');const tokens=($:ReturnType<typeof load>)=>$('[class^="hljs-"]').map((_,n)=>JSON.stringify([$(n).attr('class'),$(n).text()])).get();expect(tokens($)).toEqual(tokens(expected));});
    it('preserves all Atom One Dark highlight declarations under the page scope',()=>{const own=postcss.parse(readFileSync(`${base}/specification-by-example-guide.css`,'utf8'));postcss.parse(inventory.highlightCss).walkRules(r=>{const selector=r.selectors.map(s=>`${scope} ${s}`).join(', ');const found:unknown[]=[];own.walkRules(n=>{if(n.selector===selector)found.push(n.nodes.filter(n=>n.type==='decl').map(d=>[d.prop,(d as postcss.Declaration).value]));});expect(found).toContainEqual(r.nodes.filter(n=>n.type==='decl').map(d=>[d.prop,(d as postcss.Declaration).value]));});});
});
describe('all source diagrams',()=>{
    for(const[id,chart]of Object.entries(inventory.diagrams))it(`${id}: exact source and real Mermaid parser`,async()=>{const entry='../../app/specification-by-example-guide/diagrams';const {DIAGRAMS,MERMAID_CONFIG}=await import(entry);expect(DIAGRAMS[id].slice(MERMAID_CONFIG.length).trim()).toBe(chart);expect(MERMAID_CONFIG).not.toContain("'");const realEntry='mermaid/dist/mermaid.esm.mjs';expect(await (await import(realEntry)).default.parse(DIAGRAMS[id])).toBeTruthy();});
    it('passes all six themed diagrams to the shared renderer in original order',async()=>{const original=mermaid.render,calls:string[]=[];mermaid.render=mock(async(_id:string,chart:string)=>{calls.push(chart);return{svg:'<svg viewBox="0 0 200 100"><text>diagram</text></svg>'};})as unknown as typeof mermaid.render;try{const entry='../../app/specification-by-example-guide/page';const Page=(await import(entry)).default;const defs='../../app/specification-by-example-guide/diagrams';const{DIAGRAMS}=await import(defs);// The font link has a separate source contract; omit network loading in this renderer test.
const root=Page() as React.ReactElement<{children:React.ReactNode[]}>;const content=React.Children.toArray(root.props.children).filter(child=>!(React.isValidElement(child)&&child.type==='link'));const r=render(<>{content}</>); await waitFor(()=>expect(r.container.querySelectorAll('.mermaid svg')).toHaveLength(6));expect(calls).toEqual(inventory.groups.diagrams.items.map(item=>DIAGRAMS[item.diagram]));}finally{cleanup();mermaid.render=original;}});
});
const checklist=async()=>{const entry='../../app/specification-by-example-guide/Checklist';return(await import(entry)).default;};
describe('checklist behavior and persistence',()=>{
    for(let i=0;i<8;i++)it(`item ${i}: click, Enter and Space toggle icon, text and aria state`,async()=>{const Checklist=await checklist(),r=render(<Checklist/>),item=r.getAllByRole('checkbox')[i]!;for(const input of ['click','Enter',' ']as const){if(input==='click')fireEvent.click(item);else fireEvent.keyDown(item,{key:input});expect(item.getAttribute('aria-checked')).toBe('true');expect(item.classList.contains('checked')).toBe(true);expect(item.querySelector('.check-icon')?.classList.contains('ti-circle-check')).toBe(true);fireEvent.click(item);expect(item.getAttribute('aria-checked')).toBe('false');expect(item.classList.contains('checked')).toBe(false);expect(item.querySelector('.check-icon')?.classList.contains('ti-circle')).toBe(true);}});
    it('reports each completion count, all complete, all unchecked and persists/reloads each entry',async()=>{const Checklist=await checklist();let r=render(<Checklist/>);const items=r.getAllByRole('checkbox');for(let i=0;i<8;i++){fireEvent.click(items[i]!);expect(r.container.querySelector('#checkProgressText')?.textContent).toBe(`${i+1} / 8 完了`);}expect(r.container.querySelector('#checkProgress .ti-circle-check')).toBeTruthy();expect(JSON.parse(localStorage.getItem(KEY)!)).toEqual(Object.fromEntries(Array.from({length:8},(_,i)=>[i,true])));r.unmount();r=render(<Checklist/>);r.getAllByRole('checkbox').forEach(n=>expect(n.getAttribute('aria-checked')).toBe('true'));r.getAllByRole('checkbox').forEach(n=>fireEvent.click(n));expect(r.container.querySelector('#checkProgressText')?.textContent).toBe('0 / 8 完了');expect(r.container.querySelector('#checkProgress .ti-circle-dashed')).toBeTruthy();});
    for(const saved of ['{broken','null','[]','{"0":"true","1":false}','"invalid"'])it(`handles malformed or invalid stored state ${saved}`,async()=>{localStorage.setItem(KEY,saved);const Checklist=await checklist(),r=render(<Checklist/>);expect(r.getAllByRole('checkbox').every(n=>n.getAttribute('aria-checked')==='false')).toBe(true);fireEvent.click(r.getAllByRole('checkbox')[0]!);expect(r.container.querySelector('#checkProgressText')?.textContent).toBe('1 / 8 完了');});
    it('keeps toggling when storage reads and writes are denied',async()=>{const get=spyOn(Storage.prototype,'getItem').mockImplementation(()=>{throw new Error('denied');});const set=spyOn(Storage.prototype,'setItem').mockImplementation(()=>{throw new Error('denied');});try{const Checklist=await checklist(),r=render(<Checklist/>);fireEvent.click(r.getAllByRole('checkbox')[0]!);expect(r.container.querySelector('#checkProgressText')?.textContent).toBe('1 / 8 完了');}finally{get.mockRestore();set.mockRestore();}});
});
describe('navigation lifecycle and controls',()=>{
    it('observes all eighteen parent and nested headings, updates active link and disconnects',async()=>{const entry='../../app/specification-by-example-guide/NavBar';const Nav=(await import(entry)).default;const previous=globalThis.IntersectionObserver;let callback:IntersectionObserverCallback=()=>{};const observe=mock(()=>{}),disconnect=mock(()=>{});globalThis.IntersectionObserver=class{constructor(cb:IntersectionObserverCallback){callback=cb;}observe=observe;disconnect=disconnect;}as unknown as typeof IntersectionObserver;try{const ids=inventory.groups.toc.items.map(n=>n.attrs.href.slice(1));const r=render(<><Nav/>{ids.map(id=><section key={id} id={id}/>)}</>);expect(observe).toHaveBeenCalledTimes(18);for(const id of ids){act(()=>callback([{isIntersecting:true,target:document.getElementById(id)!}as unknown as IntersectionObserverEntry],{}as IntersectionObserver));expect(r.container.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#'+id);}r.unmount();expect(disconnect).toHaveBeenCalledTimes(1);}finally{globalThis.IntersectionObserver=previous;}});
    it('toggles mobile navigation, closes with Escape or nested link and restores focus',async()=>{const entry='../../app/specification-by-example-guide/NavBar';const Nav=(await import(entry)).default;const r=render(<Nav/>),button=r.getByRole('button');expect(button.getAttribute('aria-expanded')).toBe('false');fireEvent.click(button);expect(button.getAttribute('aria-expanded')).toBe('true');fireEvent.keyDown(document,{key:'Escape'});expect(button.getAttribute('aria-expanded')).toBe('false');expect(document.activeElement).toBe(button);fireEvent.click(button);fireEvent.click(r.getByRole('link',{name:'5-3 Example Mapping'}));expect(button.getAttribute('aria-expanded')).toBe('false');expect(r.container.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#s5-3');expect(document.activeElement).toBe(button);});
});
