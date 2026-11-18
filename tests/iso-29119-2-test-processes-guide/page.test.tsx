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
  // 33063:2015は旧版（2013年版）のテスト条件ベースのプロセスを評価する。2021年版のテストモデルと区別する。
  html=html.replaceAll('33063:2015として発行され、29119-2のテストプロセスと結びついています。','33063:2015として発行されました。ただし、33063:2015が評価の前提とするのは旧版（29119-2:2013）のプロセスで、テスト設計ではテスト条件を用います。2021年版はテスト条件に代えてテストモデルを用いるため、2015年版の指標で2021年版のプロセスを直接評価することはできません。2021年版の変更を反映するため、33063の改訂案（ドラフト）が作成されています。');
  html=html.replaceAll('<li>33063：29119-2のプロセスを、どれだけ実践できているかを評価するモデル</li>','<li>33063：テストプロセスをどれだけ実践できているかを評価するモデル。2015年版は旧版（2013年版）のプロセスが前提で、2021年版向けには改訂案で更新される</li>');
  html=html.replaceAll('<td>ISO/IEC 33063:2015</td>','<td>ISO/IEC 33063:2015（旧版29119-2:2013のプロセスが前提。2021年版のプロセスの評価には改訂版の状況を確認）</td>');
  // 環境の問題も、影響と報告方針によってはインシデントとして報告・追跡する。分析（IR1）と報告書の作成・更新（IR2）は区別する。
  html=html.replaceAll('IR1：テスト手順の誤り、環境の不具合、仕様の解釈ミス、実装の欠陥を切り分ける','IR1：テスト手順の誤り、環境の不具合、仕様の解釈ミス、実装の欠陥を切り分け、報告するかを判断する材料を集める。報告書の作成・更新はIR2で行う');
  html=html.replaceAll('ひし形「報告すべきか」：手順や環境の問題なら、テスト側を直して終わる','ひし形「報告すべきか」：手順の誤りなど報告不要と判断したものは、テスト側を直して再テストへ戻り、結果を記録する。環境の問題は、影響の大きさとチームの報告方針に基づいて報告するかを決め、報告する場合はIR2で追跡する');
  // 2021年版の用語: 組織テスト仕様の代表例は組織テストポリシーと組織テストプラクティス。2文書で全部ではない。
  html=html.replaceAll('の文書化規格では、これが次の2つの文書にあたります（Wikipediaの整理による）。','の文書化規格（2021年版）では、組織テスト仕様の代表例として次の2つの文書を挙げています。これですべてではなく、組織によってはほかの文書も組織テスト仕様に含まれます。');
  html=html.replaceAll('テストポリシー（Test Policy）','組織テストポリシー（Organizational Test Policy）');
  html=html.replaceAll('組織テスト戦略（Organizational Test Strategy）','組織テストプラクティス（Organizational Test Practices）');
  html=html.replaceAll('方針を実現するための組織共通の進め方','方針を実現するための組織共通のテストの進め方（2013年版の「組織テスト戦略」にあたる）');
  html=html.replaceAll('組織テスト仕様：テストポリシーと組織テスト戦略をまとめた呼び方','組織テスト仕様：組織全体のテストの方針や進め方を定める文書の総称。代表例は組織テストポリシーと組織テストプラクティスで、これらに限らない');
  html=html.replaceAll('テストポリシー：テストの目的と原則を示す、組織レベルの短い方針','組織テストポリシー：テストの目的と原則を示す、組織レベルの短い方針');
  // 手順にない操作を足さないのはスクリプトテストに限る。手順書のないテストでは実施した操作を記録する。
  html=html.replaceAll('TE1：テスト環境の上で、手順書どおりに操作する。手順にない操作を足さない','TE1：テスト環境の上で操作する。スクリプトテスト（手順書のあるテスト）では手順書どおりに操作し、手順にない操作を足さない。手順書のないテスト（探索的テストなど）では、実際に行った操作を記録する');
  // ロックの条件は「同じアカウントでパスワードを連続5回誤る」。失敗のきっかけをそのアカウントの誤ったパスワードに限定する。
  html=html.replaceAll('誤った認証情報を入力（失敗が4回目まで）','対象アカウントの誤ったパスワードを入力（連続失敗が4回目まで）');
  html=html.replaceAll('誤った認証情報を入力（5回目）','対象アカウントの誤ったパスワードを入力（連続失敗が5回目）');
  // 2013年版の設計プロセスはTD1（フィーチャセットの特定）からTD6まで。2021年版のTD1〜TD4は変更しない。
  html=html.replaceAll('TD2〜TD6（条件の導出、カバレッジ項目、テストケース、テストセット、手順）','TD1〜TD6（フィーチャセットの特定、条件の導出、カバレッジ項目、テストケース、テストセット、手順）');
  // TD3は選択したカバレッジ目標を満たすテストケースを導出する。全項目の網羅は目標が100%の場合の例に限る。
  html=html.replaceAll('カバレッジ項目を網羅するための入力と期待結果の組','選んだカバレッジ目標を満たすように、カバレッジ項目を実行する入力と期待結果の組');
  html=html.replaceAll('項目を網羅する入力と期待結果を決める','選んだカバレッジ目標を満たす入力と期待結果を決める（目標が100%なら、すべての項目をカバーする）');
  html=html.replaceAll('TD3：カバレッジ項目をもれなくカバーするように、入力値と期待結果を決める','TD3：テスト戦略で選んだカバレッジ目標を満たすように、入力値と期待結果を決める。目標が100%の場合は、カバレッジ項目をもれなくカバーする');
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
