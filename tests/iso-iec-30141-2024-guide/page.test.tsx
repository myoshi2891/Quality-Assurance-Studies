import { expect, it } from 'bun:test';
import React from 'react';
import type { AnyNode } from 'domhandler';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import postcss from 'postcss';
import rawInventory from '../../docs/migration-inventory/iso-iec-30141-2024-guide.json';
import { sourceModule } from '../helpers/source-module';
import { corrections, correct, emphasize, boldPhrases } from './reviewed-corrections';
const inventory = { ...emphasize(correct(rawInventory)), hashes: rawInventory.hashes };
corrections.forEach(([from, to]) => it('reviewed correction is applied exactly: ' + to.slice(0, 24), () => {
    const raw = JSON.stringify(rawInventory), fixed = JSON.stringify(inventory);
    expect(raw).toContain(from); expect(fixed).not.toContain(from); expect(fixed).toContain(to);
}));
const base='app/iso-iec-30141-2024-guide';
function tree(n: AnyNode): unknown { if(n.type==='text')return n.data.replace(/\s+/g,' ').trim()||null; if(n.type!=='tag')return null; const $=load(''); if($(n).hasClass('mermaid-diagram'))return {tag:'diagram',id:n.attribs.id}; if(!('attribs' in n))return null; const attrs={...n.attribs}; delete attrs['aria-current']; if(attrs.class==='')delete attrs.class; return {tag:n.name,attrs,children:(n.children||[]).map(tree).filter(Boolean)}; }
function html(){const Page=sourceModule(base+'/page.tsx').default as React.ComponentType;return load(renderToStaticMarkup(<Page/>));}
for(const [key,g] of Object.entries(inventory.groups)){
 it(key+' exact count and order',()=>expect(html()(g.selector).toArray().map(tree)).toEqual(g.items));
 g.items.forEach((item,i)=>it(key+' '+i,()=>expect(tree(html()(g.selector)[i])).toEqual(item)));
}
for(const development of [true,false])it('complete main DOM SWC '+development,()=>{const Page=sourceModule(base+'/page.tsx',{development}).default as React.ComponentType;expect(load(renderToStaticMarkup(<Page/>))('main').contents().toArray().map(tree).filter(Boolean)).toEqual(inventory.main);});
inventory.css.forEach((r,i)=>it('CSS '+i+' '+r.selector,()=>{const selector=r.selector.split(',').map(s=>[':root','html','body'].includes(s.trim())?'.iso30141-page':'.iso30141-page '+s.trim()).join(', ');const found:unknown[]=[];postcss.parse(readFileSync(base+'/iso-iec-30141-2024-guide.css','utf8')).walkRules(rule=>{if(rule.selector===selector&&(rule.parent?.type==='atrule'?(rule.parent as postcss.AtRule).params:null)===r.media)found.push(rule.nodes.filter(d=>d.type==='decl').map(d=>{const v=d as postcss.Declaration;return [v.prop,v.value,v.important||false]}));});expect(found).toContainEqual(r.decls);}));
// レビュー修正: 図3（DIAGRAM_2）の2経路はどちらも任意（DSRAの規範的参照、ソリューションの直接参照またはDSRA準拠）
const DIAGRAM_2_EDGE_LABELS:Record<string,string>={'規範的参照':'規範的参照（任意）','参考にする':'直接参照（任意）','具体化':'DSRAに基づく（任意）'};
const reviewedChart=(chart:string,i:number)=>i!==2?chart:chart.replace(/\|"([^"]+)"\|/g,(all,label:string)=>DIAGRAM_2_EDGE_LABELS[label]?'|"'+DIAGRAM_2_EDGE_LABELS[label]+'"|':all);
inventory.htmlCharts.forEach((chart,i)=>it('diagram '+i+' original definition',()=>{const m=sourceModule(base+'/diagrams.ts');expect(m['DIAGRAM_'+i]).toBe(m.MERMAID_CONFIG+'\n'+reviewedChart(chart,i));}));
for(const ext of ['html','md'] as const)it('archive '+ext+' exact bytes',()=>expect(createHash('sha256').update(readFileSync('archive/'+ext+'-archive/iso/Iso-iec-30141-2024-guide.'+ext)).digest('hex')).toBe(inventory.hashes[ext]));
it('route registered',()=>expect(readFileSync('lib/navigation.ts','utf8')).toContain("href: '/iso-iec-30141-2024-guide'"));
it('unique IDs and resolving anchors',()=>{const $=html();const ids=$('[id]').map((_,e)=>$(e).attr('id')).get();expect(new Set(ids).size).toBe(ids.length);$('a[href^="#"]').each((_,a)=>expect(ids.filter(id=>id===$(a).attr('href')!.slice(1))).toHaveLength(1));});

inventory.categories.forEach((nodes,i)=>it('category '+i+' complete structure',()=>{const Category=sourceModule(base+'/Category'+i+'.tsx').default as React.ComponentType;expect(load(renderToStaticMarkup(<Category/>))('body').contents().toArray().map(tree).filter(Boolean)).toEqual(nodes);}));
it('no invalid table whitespace or nested anchors',()=>{const $=html();expect($('table,thead,tbody,tfoot,tr').toArray().filter(e=>e.children.some(c=>c.type==='text'))).toEqual([]);expect($('a a').length).toBe(0);});
it('CSS imported and 800 weight provided',()=>{const source=readFileSync(base+'/page.tsx','utf8');expect(source).toContain("import './iso-iec-30141-2024-guide.css'");expect(source).toContain('noto-sans-jp-800.css');});
it('metadata preserves source title',()=>expect(sourceModule(base+'/page.tsx').metadata).toMatchObject({title:'ISO/IEC 30141:2024 初学者向けステップバイステップ解説ガイド'}));
// 図3（DIAGRAM_2）の代替テキストは、辺ラベルの関係と、DSRA経由・直接参照の両経路が任意であることを伝える
it('diagram 3 description states every labeled relationship of DIAGRAM_2',()=>{const $=html();expect($('#diagram-3').attr('aria-label')).toBe('図3: IoT領域別参照アーキテクチャ（DSRA：スマート製造、スマートシティなど）は、ISO/IEC 30141 IoT参照アーキテクチャを規範的参照として用いることができる（任意）。個別のIoTソリューションアーキテクチャは、ISO/IEC 30141を直接参照することも、DSRAに基づくこともできる（いずれも任意）。個別のIoTソリューションアーキテクチャが、IoTシステムの実装を導く。');});
// 図6（DIAGRAM_5）の代替テキストは、6本の矢印が示す「悩み→ビューポイント」の対応をすべて伝える
it('diagram 6 description states every concern-to-viewpoint mapping of DIAGRAM_5',()=>{const $=html();expect($('#diagram-6').attr('aria-label')).toBe('図6: 今の悩みから読むべきビューポイントを逆引きする。IoTの定義・特性を知りたい→基礎ビュー（6.2）、事業価値・ビジネスモデル→ビジネスビュー（6.3）、誰がどう使うか→利用ビュー（6.4）、必要な機能の分類→機能ビュー（6.5）、セキュリティ・信頼性→信頼性ビュー（6.6）、作り方の型・パターン→構築ビュー（6.7）と附属書A');});
// 視差効果を減らす設定では、ビューポートのスクロール（ルート html 要素。globals.css で smooth）もアニメーションさせない
it('reduced motion disables smooth scrolling on the root html element',()=>{const found:string[]=[];postcss.parse(readFileSync(base+'/iso-iec-30141-2024-guide.css','utf8')).walkAtRules('media',at=>{if(!/prefers-reduced-motion:\s*reduce/.test(at.params))return;at.walkRules(rule=>{if(rule.selectors.includes('html:has(.iso30141-page)'))rule.walkDecls('scroll-behavior',d=>{found.push(d.value);});});});expect(found).toEqual(['auto']);});
// 原本に文字のまま残っていた Markdown の太字記法（**…**）は、記号を出さず strong 要素で強調する
boldPhrases.forEach(phrase=>it('renders '+phrase+' as strong emphasis without literal asterisks',()=>{const $=html();expect($('main').text()).not.toContain('**');expect($('main strong').toArray().map(e=>$(e).text())).toContain(phrase);}));
// 図1（DIAGRAM_0）の代替テキストは、矢印の向きと辺ラベル（計測・データ・指令・作用）による流れを伝える
it('diagram 1 description states every directed relationship of DIAGRAM_0',()=>{const $=html();expect($('#diagram-1').attr('aria-label')).toBe('図1: センサーが物理世界の対象（機械・環境・人など）を計測し、そのデータをネットワーク経由でクラウド／エッジ／アプリ（分析・判断）へ送る。クラウド／エッジ／アプリは指令をネットワーク経由でアクチュエータへ送り、アクチュエータが物理世界の対象に作用する。');});
// 図2（DIAGRAM_1）の代替テキストは、ビューポイントがビューを支配・規定し、ビューが関心事に答えることを伝える
it('diagram 2 description states every directed relationship of DIAGRAM_1',()=>{const $=html();expect($('#diagram-2').attr('aria-label')).toBe('図2: ステークホルダーは関心事を持つ。関心事はビューポイント（見方のルール）として整理される。ビューポイントはビュー（実際の図や記述）を支配・規定し、ビューは関心事に答える。');});
// 図4（DIAGRAM_3）の代替テキストは、2018年版と2024年版の2グループを分け、技術的改訂の関係を伝える
it('diagram 4 description separates the 2018 and 2024 groups of DIAGRAM_3 and their revision relationship',()=>{const $=html();expect($('#diagram-4').attr('aria-label')).toBe('図4: 第1版（2018年8月）では、概念モデル＋参照モデルから、機能ビュー、システム（配置）ビュー、ネットワークビュー、利用ビューへ分かれる。第2版（2024年8月）では、基礎（Foundational）から、ビジネス、利用、機能、信頼性（Trustworthiness）、構築（Construction）の各ビューへ分かれる。第1版は技術的改訂により第2版へ置き換えられた。');});
// 図7（DIAGRAM_6）の代替テキストは、基礎ビューから5つのビューへの接続を伝える（図8の DIAGRAM_7 は対象外）
it('diagram 7 description states that the foundational view connects to the five other views of DIAGRAM_6',()=>{const $=html();expect($('#diagram-7').attr('aria-label')).toBe('図7: 6.2 基礎（Foundational）ビュー（IoTとは何かの土台）は、6.3 ビジネス（事業価値）、6.4 利用（人・デジタルの関わり）、6.5 機能（抽象的な機能クラス）、6.6 信頼性（信頼できる設計と保証）、6.7 構築（パターンによる実装の型）の各ビューにつながる。');});
it('diagram 10 description keeps every node of DIAGRAM_9 and states that IIC IIRA is one of the foundations of the first edition of ISO/IEC 30141',()=>{const $=html();expect($('#diagram-10').attr('aria-label')).toBe('図10: ISO/IEC 30141:2024IoT参照アーキテクチャ、ISO/IEC 20924IoTとデジタルツインの用語（規範的引用）、ISO/IEC/IEEE 42010:2022アーキテクチャ記述（準拠）、ISO/IEC TS 30149:2024IoTの信頼性原則（30141に基づく）、ISO/IEC 21823 シリーズIoTシステムの相互運用性、IIC IIRA産業用IoT参照アーキテクチャ（ISO/IEC 30141の第1版（2018）の土台の一つ）');});
it('annex A normative status does not imply every IoT design must implement all five patterns',()=>{const text=html()('h3[id^="91-"]').first().next('p').text();expect(text).toContain('規格をどう使うか（何について適合を主張するか）によって決まります');expect(text).toContain('すべてのIoT設計が附属書Aの5つのパターンをすべて実装しなければならない、という意味ではありません');});
it('all diagram wrappers have accessible descriptions',()=>{const $=html();expect($('.mermaid-diagram[role="img"][aria-label]').length).toBe(inventory.charts.length);});
it('preserves whitespace between inline elements in every paragraph and table cell',()=>{const $=html();expect($(inventory.inlineText.selector).toArray().filter(el=>!$(el).closest('svg').length).map(el=>$(el).text().replace(/\s+/g,' ').trim())).toEqual(inventory.inlineText.items);});

for(const ext of ['html','md'])it('archive '+ext+' is tracked and original root source is removed',()=>{const filename='Iso-iec-30141-2024-guide.'+ext;const path='archive/'+ext+'-archive/iso/'+filename;expect(existsSync(filename)).toBe(false);expect(execFileSync('git',['ls-files','--error-unmatch',path],{encoding:'utf8',stdio:'pipe'}).trim()).toBe(path);});
