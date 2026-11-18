import {test,expect} from '@playwright/test';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {readFileSync} from 'node:fs';
import {transformSync} from 'next/dist/build/swc';
import {sourceModule} from '../tests/helpers/source-module';
import inventory from '../docs/migration-inventory/iso-29119-2-test-processes-guide.json';
import {reviewedEdges} from '../tests/iso-29119-2-test-processes-guide/reviewed-diagrams';
const base='app/iso-29119-2-test-processes-guide';
const globals=readFileSync('node_modules/tailwindcss/preflight.css','utf8')+readFileSync('app/globals.css','utf8');
const reviewedTableCss='td{font-size:1rem}';
const LOGIN_RESET_CASE='この表の「未ログイン」は、連続失敗回数が0〜4回の状態をまとめています。そのため、ログイン成功で回数が0に戻ることは、各行を1回ずつ通すだけでは確かめられません。次の順序のケースも追加します：誤ったパスワードを4回入力する → 正しい認証情報でログインする → ログアウトして、誤ったパスワードを1回入力する。期待結果は、アカウントがロックされず、未ログインのままであることです。';
const retained=readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css','utf8');
function markup(){const Page=sourceModule(base+'/page.tsx').default as React.ComponentType;return renderToStaticMarkup(React.createElement(Page));}
const selectors=['#side','.brand','#side a','.main','.hero','.badge','.hero-title','.metas','h2','h3','h4','p','ul','ol','li','a','strong','code','.table-scroll','table','th','td','.callout','.glossary','.glossary p','.glossary ul','.page-footer','.task-list','.task-list label','.task-list input'];
const properties=['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','lineHeight','letterSpacing','textAlign','whiteSpace','textTransform','marginTop','marginRight','marginBottom','marginLeft','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth','borderTopColor','borderRightColor','borderBottomColor','borderLeftColor','borderRadius','display','width','minWidth','maxWidth','minHeight','listStyleType','boxShadow','backgroundImage','overflowX','verticalAlign','webkitTextFillColor','animationName','rowGap','columnGap','justifyContent'];
for(const width of [390,768,900,901,1440])for(const order of ['before','after'])test(`${width}px styles ${order}: every source category and declaration`,async({page})=>{
 await page.setViewportSize({width,height:980});const ref=await page.context().newPage();await ref.setViewportSize({width,height:980});
 await ref.setContent(`<style>${inventory.originalCss}${reviewedTableCss}</style>${inventory.originalBody!.replaceAll('<td>ISO/IEC 33063:2015</td>','<td>ISO/IEC 33063:2015（旧版29119-2:2013のプロセスが前提。2021年版のプロセスの評価には改訂版の状況を確認）</td>').replaceAll('テストポリシー（Test Policy）','組織テストポリシー（Organizational Test Policy）').replaceAll('組織テスト戦略（Organizational Test Strategy）','組織テストプラクティス（Organizational Test Practices）').replaceAll('方針を実現するための組織共通の進め方','方針を実現するための組織共通のテストの進め方（2013年版の「組織テスト戦略」にあたる）').replaceAll('誤った認証情報を入力（失敗が4回目まで）','対象アカウントの誤ったパスワードを入力（連続失敗が4回目まで）').replaceAll('誤った認証情報を入力（5回目）','対象アカウントの誤ったパスワードを入力（連続失敗が5回目）').replaceAll('<td>ログイン済み</td>','<td>ログイン済み（連続失敗回数を0に戻す）</td>').replaceAll('実行順に並べたものが手順（TD4）です。</p>',`実行順に並べたものが手順（TD4）です。</p>\n<p>${LOGIN_RESET_CASE}</p>`).replaceAll('TD2〜TD6（条件の導出、カバレッジ項目、テストケース、テストセット、手順）','TD1〜TD6（フィーチャセットの特定、条件の導出、カバレッジ項目、テストケース、テストセット、手順）').replaceAll('カバレッジ項目を網羅するための入力と期待結果の組','選んだカバレッジ目標を満たすように、カバレッジ項目を実行する入力と期待結果の組').replaceAll('項目を網羅する入力と期待結果を決める','選んだカバレッジ目標を満たす入力と期待結果を決める（目標が100%なら、すべての項目をカバーする）').replaceAll('TD3：カバレッジ項目をもれなくカバーするように、入力値と期待結果を決める','TD3：テスト戦略で選んだカバレッジ目標を満たすように、入力値と期待結果を決める。目標が100%の場合は、カバレッジ項目をもれなくカバーする')}`);
 const own=readFileSync(base+'/guide.css','utf8');await page.setContent(`<style>${globals}${order==='before'?retained+own:own+retained}</style>${markup()}`);
 for(const p of [ref,page]){await p.locator('.cl-count').evaluateAll(nodes=>nodes.forEach(n=>n.textContent='0 / 13')); await p.locator('.mermaid-diagram').evaluateAll(nodes=>nodes.forEach(n=>n.replaceChildren()));await p.locator('details').evaluateAll(nodes=>nodes.forEach(n=>(n as HTMLDetailsElement).open=true));}
 const collect=({root,selectors,properties}:{root:string;selectors:string[];properties:string[]})=>Object.fromEntries(selectors.map(selector=>[selector,Array.from(document.querySelectorAll(root+selector),el=>{const s=getComputedStyle(el);return Object.fromEntries(properties.map(p=>[p,s[p as keyof CSSStyleDeclaration]]));})]));
 const expected=await ref.evaluate(collect,{root:'',selectors,properties}),actual=await page.evaluate(collect,{root:'.iso29119-2-page ',selectors,properties});for(const selector of selectors)expect.soft(actual[selector],selector).toEqual(expected[selector]);
 const pseudo=(el:Element)=>{const s=getComputedStyle(el,'::before');return{content:s.content,width:s.width,height:s.height,background:s.backgroundImage,position:s.position,top:s.top,right:s.right,pointer:s.pointerEvents};};const expectedPseudo=await ref.locator('.hero').evaluate(pseudo);expect(await page.locator('.hero').evaluate(pseudo)).toEqual({...expectedPseudo,pointer:'none'});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await ref.close();
});
const shared=readFileSync('components/Mermaid.tsx','utf8');const config=Function('return ('+shared.match(/mermaid.initialize\((\{[\s\S]*?\n\})\);/)![1]+');')() as object;
const start=shared.indexOf('function applySvgFixups');
const layouts=sourceModule(base+'/diagram-layouts.ts').LAYOUTS;
const restoration=transformSync(readFileSync(base+'/restoreDiagramLayout.ts','utf8').replace(/^import .*;$/m,'').replace('export function','function'),{filename:'restore.ts',jsc:{parser:{syntax:'typescript'}}}).code as string;
const fixups=transformSync(shared.slice(start,shared.indexOf('/**',start)),{filename:'fixups.ts',jsc:{parser:{syntax:'typescript'}}}).code as string;
for(const width of [390,1440])for(const [i,d]of inventory.diagrams.entries())test(`${width}px ${d.id}: real SVG typography, palette, nodes and edges`,async({page})=>{
 await page.setViewportSize({width,height:980});await page.setContent(`<style>${globals}${readFileSync(base+'/guide.css','utf8')}</style>${markup()}`);await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'}); const {DIAGRAMS}=sourceModule(base+'/diagrams.ts') as {DIAGRAMS:string[]};await page.evaluate(async({id,chart,config,fixups,layouts,restoration,index})=>{const m=(window as unknown as {mermaid:{initialize:(c:object)=>void;render:(id:string,c:string)=>Promise<{svg:string}>}}).mermaid;m.initialize(config);const {svg}=await m.render('generated-'+id,chart);const host=document.getElementById(id)!.querySelector('.mermaid-wrapper')!;host.innerHTML=svg;Function(fixups+';return applySvgFixups;')()(host.querySelector('svg'),chart);Function('LAYOUTS',restoration+';return restoreDiagramLayout;')(layouts)(host.querySelector('svg'),index);},{id:'diagram-'+i,chart:DIAGRAMS[i]!,config,fixups,layouts,restoration,index:i});
 if (i === 10 || i === 12) {
   // These two reviewed flows have different edges and use native Mermaid geometry.
   const svg=page.locator('#diagram-'+i+' svg');
   const edges=await svg.locator('.flowchart-link').evaluateAll(ns=>ns.map(n=>({id:n.getAttribute('data-id'),arrow:!!n.getAttribute('marker-end')})));
   expect(edges.map(e=>e.id).sort()).toEqual(reviewedEdges(i,d.edges).map(e=>`L_${e.from}_${e.to}_0`).sort());
   expect(edges.every(e=>e.arrow)).toBe(true);
   for(const edge of reviewedEdges(i,d.edges).filter(e=>e.label)) await expect(svg.locator(`.edgeLabel:has([data-id="L_${edge.from}_${edge.to}_0"])`)).toHaveText(edge.label);
   const geometry=await svg.evaluate(el=>{
     const box=el.getBoundingClientRect();
     return Array.from(el.querySelectorAll<SVGGraphicsElement>('g.node'),n=>{
       const bounds=n.firstElementChild!.getBoundingClientRect();
       return {x:bounds.x,y:bounds.y,w:bounds.width,h:bounds.height,box:{x:box.x,y:box.y,w:box.width,h:box.height},label:!!n.querySelector('.nodeLabel')?.textContent?.trim()};
     });
   });
   expect(geometry).toHaveLength(d.nodes.length);
   for(const g of geometry){expect(g.label).toBe(true);expect(g.x).toBeGreaterThanOrEqual(g.box.x-1);expect(g.y).toBeGreaterThanOrEqual(g.box.y-1);expect(g.x+g.w).toBeLessThanOrEqual(g.box.x+g.box.w+1);expect(g.y+g.h).toBeLessThanOrEqual(g.box.y+g.box.h+1);}
   return;
 }
 const ref=await page.context().newPage();await ref.setContent(`<style>${inventory.originalCss}</style><div class="mermaid-diagram">${d.svg}</div>`);
 const collect=(el:Element)=>{const dash=(n:Element)=>{const a=getComputedStyle(n).strokeDasharray.split(/[, ]+/).map(Number.parseFloat);return {pattern:n.classList.contains('edge-pattern-dotted')?a.slice(2,4):'solid',arrowGap:a.length>2?a.at(-1):0};};return {gradients:Array.from(el.querySelectorAll('linearGradient stop'),n=>({offset:n.getAttribute('offset'),color:getComputedStyle(n).stopColor})),clusters:Array.from(el.querySelectorAll('.cluster'),n=>({text:n.querySelector('.cluster-label')!.textContent!.trim(),fill:getComputedStyle(n.querySelector('rect')!).fill,stroke:getComputedStyle(n.querySelector('rect')!).stroke.replace(/#[^\"]+-gradient/,'#diagram-gradient')})).sort((a,b)=>a.text.localeCompare(b.text)),actors:Array.from(el.querySelectorAll('text.actor'),n=>({text:n.textContent!.trim(),font:getComputedStyle(n).fontFamily,size:getComputedStyle(n).fontSize,color:getComputedStyle(n).fill})),messages:Array.from(el.querySelectorAll('.messageText'),n=>({text:n.textContent,font:getComputedStyle(n).fontFamily,size:getComputedStyle(n).fontSize,color:getComputedStyle(n).fill})),messageLines:Array.from(el.querySelectorAll('[data-et="message"]'),n=>({from:n.getAttribute('data-from'),to:n.getAttribute('data-to'),className:n.getAttribute('class'),stroke:getComputedStyle(n).stroke,marker:!!n.getAttribute('marker-end')})),nodes:Array.from(el.querySelectorAll('g.node'),n=>{const s=n.querySelector('.nodeLabel')!,shape=n.firstElementChild!;return{id:n.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''),text:s.textContent!.replace(/\s+/g,' ').trim(),breaks:s.querySelectorAll('br').length,font:getComputedStyle(s).fontFamily,size:getComputedStyle(s).fontSize,lineHeight:getComputedStyle(s).lineHeight,color:getComputedStyle(s).color,shape:shape.tagName,shapeWidth:Math.round(shape.getBoundingClientRect().width*100)/100,shapeHeight:Math.round(shape.getBoundingClientRect().height*100)/100,labelWidth:Math.round(s.getBoundingClientRect().width*100)/100,labelHeight:Math.round(s.getBoundingClientRect().height*100)/100,fill:getComputedStyle(shape).fill,stroke:getComputedStyle(shape).stroke.replace(/#[^\"]+-gradient/,'#diagram-gradient')};}).sort((a,b)=>a.id.localeCompare(b.id)),edges:Array.from(el.querySelectorAll('.flowchart-link'),n=>({id:n.id.replace(/^.*-L_/,'L_').replace(/_(\d+)_\d+$/,'_$1'),stroke:getComputedStyle(n).stroke,width:getComputedStyle(n).strokeWidth,arrow:!!n.getAttribute('marker-end'),dash:dash(n)})).sort((a,b)=>a.id.localeCompare(b.id)),labels:Array.from(el.querySelectorAll('.edgeLabels .label[data-id]'),n=>({id:n.getAttribute('data-id')!.replace(/^.*-L_/,'L_').replace(/_(\d+)_\d+$/,'_$1'),text:n.textContent!.replace(/\s+/g,' ').trim()})).filter(n=>n.text).sort((a,b)=>a.id.localeCompare(b.id))};};

 const actualDiagram=await page.locator('#diagram-'+i).evaluate(collect),expectedDiagram=await ref.locator('.mermaid-diagram').evaluate(collect);
 // Browser subpixel rounding can differ by 0.01px at a different document origin.
 for (let n=0;n<expectedDiagram.nodes.length;n++) for (const key of ['shapeWidth','shapeHeight','labelWidth','labelHeight'] as const) {
   expect(actualDiagram.nodes[n]![key]).toBeCloseTo(expectedDiagram.nodes[n]![key],1);
   actualDiagram.nodes[n]![key]=expectedDiagram.nodes[n]![key];
 }
 expect(actualDiagram).toEqual(expectedDiagram);
 const positions=(el:Element)=>Object.fromEntries(Array.from(el.querySelectorAll('g.node'),n=>[n.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''),(()=>{const r=n.firstElementChild!.getBoundingClientRect();return[r.x+r.width/2,r.y+r.height/2];})()]));const a=await page.locator('#diagram-'+i).evaluate(positions),b=await ref.locator('.mermaid-diagram').evaluate(positions);for(const e of d.edges){const axis=d.direction==='LR'?0:1;expect(Math.sign(a[e.to]![axis]!-a[e.from]![axis]!),`${e.from} -> ${e.to}`).toBe(Math.sign(b[e.to]![axis]!-b[e.from]![axis]!));}
 const restoredDashes=await page.locator('#diagram-'+i).evaluate(el=>Array.from(el.querySelectorAll<SVGPathElement>('.flowchart-link'),path=>({
   length:path.getTotalLength(),values:path.style.strokeDasharray.split(/[, ]+/).map(Number),dotted:path.classList.contains('edge-pattern-dotted')
 })));
 for(const dash of restoredDashes){
   expect(dash.values.length).toBeGreaterThanOrEqual(4);
   expect(dash.values.slice(0,2)).toEqual([0,0]);
   expect(dash.values.at(-1)).toBeGreaterThan(0);
   const sum=dash.values.reduce((a,b)=>a+b,0);
   if(dash.dotted){expect(dash.values.slice(2,-1).every(n=>n===2)).toBe(true);expect(dash.length-sum).toBeGreaterThanOrEqual(-0.01);expect(dash.length-sum).toBeLessThan(4.01);}
   else expect(sum).toBeCloseTo(dash.length,1);
 }
 expect(await page.locator('#diagram-'+i+' svg').count()).toBe(1);const geometry=await page.locator('.mermaid-diagram').nth(i).evaluate(el=>{const svg=el.querySelector('svg')!,box=svg.getBoundingClientRect();el.scrollLeft=0;const left=box.left;el.scrollLeft=el.scrollWidth;return {width:box.width,height:box.height,left,outer:el.getBoundingClientRect().left,scroll:el.scrollLeft,moved:left-svg.getBoundingClientRect().left,nodes:Array.from(svg.querySelectorAll('g.node'),n=>{const r=n.getBoundingClientRect();return r.width>0&&r.height>0;})};});expect(geometry.width).toBeGreaterThan(0);expect(geometry.height).toBeGreaterThan(0);expect(geometry.left).toBeGreaterThanOrEqual(geometry.outer);expect(Math.abs(geometry.scroll-geometry.moved)).toBeLessThanOrEqual(1);expect(geometry.nodes.every(Boolean)).toBe(true);await ref.close();
});
for(const width of [390,768,900,901,1440])test(`${width}px chrome offsets and keyboard disclosures`,async({page})=>{await page.setViewportSize({width,height:980});await page.setContent(`<style>${globals}${readFileSync(base+'/guide.css','utf8')}</style>${markup()}`);for(const height of [38,76,120]){await page.evaluate(h=>document.documentElement.style.setProperty('--disclaimer-height',h+'px'),height);await expect(page.locator('#side')).toHaveCSS('top',60+height+'px');if(width<=900)await expect(page.locator('#tgl')).toHaveCSS('top',72+height+'px');for(const selector of ['h2','h3'])await expect(page.locator(selector).last()).toHaveCSS('scroll-margin-top',(width<=900?132:80)+height+'px');}for(const d of await page.locator('details').all()){const summary=d.locator('summary');await summary.focus();await page.keyboard.press('Enter');await expect(d).toHaveAttribute('open','');await page.keyboard.press('Space');await expect(d).not.toHaveAttribute('open');}await page.emulateMedia({reducedMotion:'reduce'});await expect(page.locator('html')).toHaveCSS('scroll-behavior','auto');
 // Later, more-specific CSS must not reintroduce cards or compress the diagram.
 await page.addStyleTag({content:`
 .iso29119-2-page [data-reset-fixture] {overflow-x:hidden;width:80px;max-width:80px}
 .iso29119-2-page [data-reset-fixture] .mermaid-wrapper {background:red;border:8px solid red;border-radius:30px;box-shadow:0 0 10px red;margin:20px;padding:20px;width:50%;max-width:60px}
 `});
 for(const className of ['mermaid-container','mermaid-wrap']){
   const geometry=await page.evaluate(className=>{
     const outer=document.createElement('div');outer.className=className;outer.setAttribute('data-reset-fixture','');
     outer.innerHTML='<div class="mermaid-wrapper"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 32" style="width:1600px;max-width:100%;height:auto"><rect width="1600" height="32"/></svg></div>';
     document.querySelector('.iso29119-2-page')!.append(outer);
     const wrapper=outer.querySelector<HTMLElement>('.mermaid-wrapper')!,svg=outer.querySelector('svg')!;
     const style=getComputedStyle(wrapper),container=getComputedStyle(outer);
     const reset={background:style.backgroundColor,border:style.borderTopWidth,radius:style.borderRadius,shadow:style.boxShadow,margin:style.margin,padding:style.padding,maxWidth:style.maxWidth};
     const start=svg.getBoundingClientRect();outer.scrollLeft=outer.scrollWidth;const end=svg.getBoundingClientRect(),bounds=outer.getBoundingClientRect();
     const result={reset,overflow:container.overflowX,width:outer.clientWidth,wrapperWidth:wrapper.getBoundingClientRect().width,svgWidth:end.width,scroll:outer.scrollLeft,moved:start.left-end.left,left:start.left-bounds.left,right:end.right-bounds.right};
     outer.remove();return result;
   },className);
   expect(geometry.reset).toEqual({background:'rgba(0, 0, 0, 0)',border:'0px',radius:'0px',shadow:'none',margin:'0px',padding:'0px',maxWidth:'none'});
   expect(geometry.overflow).toBe('auto');expect(geometry.width).toBeGreaterThan(80);expect(geometry.wrapperWidth).toBe(geometry.width);
   expect(geometry.svgWidth).toBe(1600);expect(geometry.scroll).toBeGreaterThan(0);expect(geometry.moved).toBeCloseTo(geometry.scroll,1);
   expect(geometry.left).toBeGreaterThanOrEqual(-1);expect(geometry.right).toBeLessThanOrEqual(1);
 }
});
