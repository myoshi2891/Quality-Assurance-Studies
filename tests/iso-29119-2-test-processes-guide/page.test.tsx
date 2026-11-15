import {describe,it,expect} from 'bun:test';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {load} from 'cheerio';
import {isTag,type AnyNode} from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/iso-29119-2-test-processes-guide.json';
import {sourceModule} from '../helpers/source-module';
import {reviewedSource,reviewedEdges,reviewedDescription} from './reviewed-diagrams';
const base='app/iso-29119-2-test-processes-guide',scope='.iso29119-2-page';
const norm=(s:string)=>s.replace(/\s+/g,' ').trim();
function tree(n:AnyNode):unknown{if(n.type==='text')return norm(n.data)||null;if(!isTag(n))return null;const attrs={...n.attribs};for(const k of Object.keys(attrs))if(k.startsWith('aria-')||['role','inert','tabindex','checked'].includes(k))delete attrs[k];if(attrs.class)attrs.class=attrs.class.replace(/\s*active\b/g,'').trim();if(attrs.style)attrs.style=attrs.style.replace(/\s|;$/g,'');if(attrs.class==='cl-fill')delete attrs.style;if(n.tagName==='button')delete attrs.type;return{tag:n.tagName,attrs,children:attrs.class==='mermaid-diagram'?[]:n.children.map(tree).filter(Boolean)};}
function canonical(html:string,original=false){
 if(original){
  html=html.replaceAll('リスクベース：失敗したときの影響が大きい所から優先してテストする考え方','リスクベース：失敗が起きる可能性と、起きたときの影響の組み合わせに基づき、優先順位やテストの深さを決める考え方');
  html=html.replaceAll('テスト対象の振る舞いを図や表で抽象化したもの（2021年版の中心概念）','テスト対象の振る舞いを抽象化し、図・表・ソースコード・要求などで表現したもの。カバレッジ項目を特定するために用いる（2021年版の中心概念）');
  html=html.replaceAll('対象の振る舞いを図や表で抽象化したもの','対象の振る舞いを抽象化し、図・表・ソースコード・要求などで表現したもの。カバレッジ項目を特定するために用いる');
  html=html.replaceAll('IEEE Standards Association（29119-2のカタログ）','IEEE Standards Association（29119-2:2021のカタログ）');
  html=html.replaceAll('https://standards.ieee.org/ieee/29119-2/5309/','https://standards.ieee.org/ieee/29119-2/7498/');
  html=html.replaceAll('シリーズの説明、Part 3・4との関係','2021年版の要旨・発行日・前版との関係');
 }
 const $=load(html);$('script').remove();if(original)$('p').each((_,n)=>{const p=$(n);p.html(p.html()!.replace('29119シリーズは5つのパートに分かれていて、','29119シリーズの中核はPart 1〜5で構成され、').replace('シリーズの5パートの関係','シリーズの中核となるPart 1〜5の関係').replace('」にあたります。','」にあたります。ほかにISO/IEC TR 29119-6:2021もあり、シリーズをアジャイルプロジェクトへ適用するためのガイダンスを提供しています。'));});if(original)$('.cl-count').text('0 / 13');if(original)$('a[href^="http"]').attr('target','_blank').attr('rel','noopener noreferrer');$('pre code').each((_,n)=>{$(n).text($(n).text());});$('table,thead,tbody,tr').contents().filter((_,n)=>n.type==='text'&&!n.data.trim()).remove();return $;}
const markupCache = new Map<string, string>();
function render(file:string,development=false){
 const key = `${file}:${development}`;
 let markup = markupCache.get(key);
 if(markup === undefined){
  const Page=sourceModule(`${base}/${file}.tsx`,{development}).default as React.ComponentType;
  markup=renderToStaticMarkup(<Page/>);
  markupCache.set(key,markup);
 }
 return canonical(markup);
}
for(const [i,section] of inventory.sections.entries())describe(`category ${i}: ${section.name}`,()=>{for(const dev of [false,true])it(`complete ordered DOM and text: SWC development=${dev}`,()=>{const actual=render(`Section${String(i).padStart(2,'0')}`,dev),expected=canonical(section.html,true);
expect(actual('body').contents().toArray().map(tree).filter(Boolean)).toEqual(expected('body').contents().toArray().map(tree).filter(Boolean));actual('.mermaid-diagram').empty();expected('.mermaid-diagram').empty();expect(norm(actual('body').text())).toBe(norm(expected('body').text()));});});
describe('fixed ordered inventories',()=>{for(const [group,{selector,items}] of Object.entries(inventory.groups)){it(`${group}: rejects missing AND extra elements`,()=>{expect(render('page')(selector).length).toBe(items.length);});items.forEach((html,i)=>it(`${group}[${i}]: complete structure, attributes and text`,()=>{const actual=render('page')(selector).eq(i);const expected=canonical(html,true)('body').children().first();expect(tree(actual[0]!)).toEqual(tree(expected[0]!));}));}});
describe('source CSS',()=>{inventory.css.forEach((rule,i)=>it(`rule ${i}: ${rule.selector} with all declarations`,()=>{const selector=rule.selector.split(',').map(s=>[':root','html','body'].includes(s.trim())?scope:`${scope} ${s.trim()}`).join(', ');const candidates:unknown[]=[];postcss.parse(readFileSync(`${base}/guide.css`,'utf8')).walkRules(r=>{if(r.selector===selector&&(r.parent?.type==='atrule'?(r.parent as postcss.AtRule).params:null)===rule.media)candidates.push(r.nodes.filter(n=>n.type==='decl').map(d=>{const n=d as postcss.Declaration;return[n.prop,n.value,n.important?'!important':null];}));});expect(candidates).toContainEqual(rule.decls);}));it('scopes every rule, restores native elements, preserves layout and chrome offsets',()=>{const css=readFileSync(`${base}/guide.css`,'utf8');postcss.parse(css).walkRules(r=>r.selectors.forEach(s=>expect(s.startsWith(scope)||s==='html:has(.iso29119-2-page)').toBe(true)));for(const s of ['all: revert','var(--disclaimer-height, 0px)','100dvh','prefers-reduced-motion: reduce','foreignObject','.mermaid-wrapper','scroll-margin-top: calc'])expect(css).toContain(s);expect(readFileSync(base+'/page.tsx','utf8')).toContain("import './guide.css'");
const rules:postcss.Rule[]=[];postcss.parse(css).walkRules(rule=>{rules.push(rule);});
const reset=(selector:string)=>Object.fromEntries(rules.filter(rule=>rule.selectors.includes(selector)).flatMap(rule=>rule.nodes.filter((node):node is postcss.Declaration=>node.type==='decl').map(decl=>[decl.prop,{value:decl.value,important:!!decl.important}])));
expect(reset(scope+' .mermaid-wrapper')).toEqual(Object.fromEntries(Object.entries({background:'transparent',border:'none','border-radius':'0','box-shadow':'none',margin:'0',padding:'0',width:'100%','max-width':'none'}).map(([prop,value])=>[prop,{value,important:true}])));
for(const selector of ['.mermaid-container','.mermaid-wrap'])expect(reset(scope+' '+selector)).toMatchObject({
 'overflow-x':{value:'auto',important:true},width:{value:'100%',important:true},'max-width':{value:'100%',important:true}
});
expect(reset(scope+' .mermaid-wrapper svg')['max-width']).toEqual({value:'none',important:true});
});});
describe('all original diagrams',()=>{inventory.diagrams.forEach((diagram,i)=>it(`${diagram.id}: exact HTML nodes and edges, parsed source and local theme`,async()=>{const charts:string[]=[];const Diagram=sourceModule(base+'/Diagram.tsx',{onMermaidChart:c=>charts.push(c)}).default as React.ComponentType<{index:number}>;const $=load(renderToStaticMarkup(<Diagram index={i}/>));expect(charts).toHaveLength(1);const chart=charts[0]!;expect(chart.slice(chart.indexOf('}%%')+3).trim()).toBe(reviewedSource(i,diagram.renderSource));expect($('[role="img"]').attr('aria-label')).toBe(reviewedDescription(i,diagram.description));const config=JSON.parse(chart.match(/%%\{init: ([\s\S]*?)\}%%/)![1]!);expect(config.look).toBe('neo');expect(config.flowchart).toMatchObject({nodeSpacing:40,rankSpacing:40});expect(config.themeVariables).toMatchObject({primaryTextColor:'#eaf1ff',mainBkg:'#16294a',lineColor:'#9db4e6',edgeLabelBackground:'#0d1b30'});expect(chart.split('}%%')[0]).not.toContain("'");const entry:string='mermaid/dist/mermaid.esm.mjs';const mermaid=(await import(entry)).default;expect(await mermaid.parse(chart)).toBeTruthy();}));});
it('archives identical original HTML and Markdown with no root duplicates',()=>{for(const ext of ['html','md'] as const){const file=`archive/${ext}-archive/iso/Iso-29119-2-test-processes-guide.${ext}`;expect(existsSync(file)).toBe(true);expect(createHash('sha256').update(readFileSync(file)).digest('hex')).toBe(inventory.hashes[ext]);expect(existsSync(`Iso-29119-2-test-processes-guide.${ext}`)).toBe(false);}});

for(const development of [false,true])it(`complete assembled page and sidebar, SWC development=${development}`,()=>{const actual=render('page',development),original=canonical(inventory.originalBody!,true);for(const selector of ['main.main','#side','#tgl'])expect(tree(actual(selector)[0]!)).toEqual(tree(original(selector)[0]!));actual('.mermaid-diagram').empty();original('.mermaid-diagram').empty();expect(norm(actual('main').text())).toBe(norm(original('main').text()));const navSource=readFileSync(base+'/NavBar.tsx','utf8');expect(navSource).not.toContain('href="#');const ids=actual('[id]').map((_,n)=>actual(n).attr('id')).get();expect(new Set(ids).size).toBe(ids.length);});

for(const [index,d] of inventory.diagrams.entries())it(`${d.id}: parsed graph matches the original SVG topology and labels`,async()=>{const charts:string[]=[];const C=sourceModule(base+'/Diagram.tsx',{onMermaidChart:c=>charts.push(c)}).default as React.ComponentType<{index:number}>;renderToStaticMarkup(<C index={index}/>);const entry:string='mermaid/dist/mermaid.esm.mjs';const m=(await import(entry)).default;const diagram=await m.mermaidAPI.getDiagramFromText(charts[0]!);expect(d.type).toBe('flowchart-v2');if(index===12){const edges=diagram.db.getEdges() as {start:string;end:string}[];const reachable=(from:string,to:string,seen=new Set<string>()):boolean=>from===to||(!seen.has(from)&&!!seen.add(from)&&edges.filter(e=>e.start===from).some(e=>reachable(e.end,to,seen)));expect(reachable('IC4','IC7')).toBe(false);expect(reachable('IC6','IC7')).toBe(false);expect(reachable('IC5','IC7')).toBe(true);}const vertices=Array.from(diagram.db.getVertices().values()) as {id:string;text:string;type:string}[];expect(vertices.map(v=>({id:v.id,text:norm(load('<div>'+v.text.replace(/<br\s*\/?\s*>/g,' ')+'</div>')('body').text()),shape:v.type==='diamond'?'polygon':'rect'}))).toEqual(d.nodes.map(v=>({id:v.id,text:v.text,shape:v.shape})));expect(diagram.db.getEdges().map((e:{start:string;end:string;text:string;stroke:string})=>({from:e.start,to:e.end,label:e.text??'',dotted:e.stroke==='dotted'}))).toEqual(reviewedEdges(index,d.edges).map(e=>({from:e.from,to:e.to,label:e.label,dotted:e.dotted})));});
