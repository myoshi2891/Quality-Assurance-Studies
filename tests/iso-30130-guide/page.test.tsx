import { expect, it } from 'bun:test';
import React from 'react';
import type { AnyNode } from 'domhandler';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/iso-30130-guide.json';
import { sourceModule } from '../helpers/source-module';
const base='app/iso-30130-guide';
function tree(n: AnyNode): unknown { if(n.type==='text')return n.data.replace(/\s+/g,' ').trim()||null; if(n.type!=='tag')return null; const $=load(''); if($(n).hasClass('mermaid-diagram'))return {tag:'diagram',id:n.attribs.id}; if(!('attribs' in n))return null; const attrs={...n.attribs}; delete attrs['aria-current']; if(attrs.class==='')delete attrs.class; return {tag:n.name,attrs,children:(n.children||[]).map(tree).filter(Boolean)}; }
function html(){const Page=sourceModule(base+'/page.tsx').default as React.ComponentType;return load(renderToStaticMarkup(<Page/>));}
for(const [key,g] of Object.entries(inventory.groups)){
 it(key+' exact count and order',()=>expect(html()(g.selector).toArray().map(tree)).toEqual(g.items));
 g.items.forEach((item,i)=>it(key+' '+i,()=>expect(tree(html()(g.selector)[i])).toEqual(item)));
}
for(const development of [true,false])it('complete main DOM SWC '+development,()=>{const Page=sourceModule(base+'/page.tsx',{development}).default as React.ComponentType;expect(load(renderToStaticMarkup(<Page/>))('main').contents().toArray().map(tree).filter(Boolean)).toEqual(inventory.main);});
inventory.css.forEach((r,i)=>it('CSS '+i+' '+r.selector,()=>{const selector=r.selector.split(',').map(s=>[':root','html','body'].includes(s.trim())?'.iso30130-page':'.iso30130-page '+s.trim()).join(', ');const found:unknown[]=[];postcss.parse(readFileSync(base+'/iso-30130-guide.css','utf8')).walkRules(rule=>{if(rule.selector===selector&&(rule.parent?.type==='atrule'?(rule.parent as postcss.AtRule).params:null)===r.media)found.push(rule.nodes.filter(d=>d.type==='decl').map(d=>{const v=d as postcss.Declaration;return [v.prop,v.value,v.important||false]}));});expect(found).toContainEqual(r.decls);}));
inventory.charts.forEach((chart,i)=>it('diagram '+i+' original definition',()=>{const m=sourceModule(base+'/diagrams.ts');expect(m['DIAGRAM_'+i]).toBe(m.MERMAID_CONFIG+'\n'+chart);}));
for(const ext of ['html','md'] as const)it('archive '+ext+' exact bytes',()=>expect(createHash('sha256').update(readFileSync('archive/'+ext+'-archive/iso/Iso-30130-guide.'+ext)).digest('hex')).toBe(inventory.hashes[ext]));
it('route registered',()=>expect(readFileSync('lib/navigation.ts','utf8')).toContain("href: '/iso-30130-guide'"));
it('unique IDs and resolving anchors',()=>{const $=html();const ids=$('[id]').map((_,e)=>$(e).attr('id')).get();expect(new Set(ids).size).toBe(ids.length);$('a[href^="#"]').each((_,a)=>expect(ids.filter(id=>id===$(a).attr('href')!.slice(1))).toHaveLength(1));});

const categories: (typeof inventory.main)[]=[];
for(const item of inventory.main){if(['h2','footer'].includes(item.tag)&&categories.length)categories.push([]);if(!categories.length)categories.push([]);categories[categories.length-1]!.push(item);}
categories.forEach((nodes,i)=>it('category '+i+' complete structure',()=>{const Category=sourceModule(base+'/Category'+i+'.tsx').default as React.ComponentType;expect(load(renderToStaticMarkup(<Category/>))('body').contents().toArray().map(tree).filter(Boolean)).toEqual(nodes);}));
// 表の構造要素直下の空白テキストはハイドレーション警告となり、Next.js開発サーバーのコードフレーム生成が日本語で異常終了する
it('no whitespace text directly inside table structure elements',()=>{const $=html();const bad=$('table,thead,tbody,tfoot,tr').toArray().filter(e=>e.children.some(c=>c.type==='text'));expect(bad.map(e=>e.name)).toEqual([]);});
