import { afterAll, beforeAll, afterEach, describe, expect, it } from 'bun:test';
import React from 'react';
import mermaid from 'mermaid';
let originalRender: typeof mermaid.render;
beforeAll(() => { originalRender = mermaid.render; mermaid.render = async () => ({ svg: '<svg></svg>', diagramType: 'flowchart', bindFunctions: undefined }); });
afterAll(() => { mermaid.render = originalRender; });
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

describe("overview", () => {
 it('preserves section structure and full text', async () => { const {container}=await page(); const actual=container.querySelector('#overview'); expect(actual).not.toBeNull(); expect(signature(actual!)).toEqual(signature(source.querySelector('#overview')!)); });
it("preserves ordered h2,h3,h4 inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#overview h2, #overview h3, #overview h4')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual(["0.全体像：なぜ「LangGraphでQAエージェント」なのか"]); });
it("preserves h2,h3,h4 item 1", async () => { const {container}=await page(); const actual=container.querySelector('#overview')?.querySelectorAll("h2,h3,h4")[0]; expect(actual).toBeDefined(); expect(signature(actual!)).toEqual(signature(source.querySelector('#overview')!.querySelectorAll("h2,h3,h4")[0]!)); });
it("preserves ordered table inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#overview table')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual(["コンポーネント役割Streamlit（フロントエンド）チャット形式のUIでユーザーの質問と、グラフ上でのノード選択を受け取るQuestionProcessingInterfaceLangGraphパイプラインの実行をイベントストリームとして外部に公開する橋渡し役ConfigurationProviderプロンプトテンプレート、Few-shot例、ドメイン固有の注記を一元管理するSchemaProviderNeo4jの技術的なスキーマ情報を取得し、余計な要素を除去してLLMが読みやすい形に整形する"]); });
it("preserves table item 1", async () => { const {container}=await page(); const actual=container.querySelector('#overview')?.querySelectorAll("table")[0]; expect(actual).toBeDefined(); expect(signature(actual!)).toEqual(signature(source.querySelector('#overview')!.querySelectorAll("table")[0]!)); });
it("preserves ordered pre code inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#overview pre code')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual([]); });
it("preserves ordered .callout,.summary-card inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#overview .callout, #overview .summary-card')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual([]); });
it("preserves ordered .diagram-caption inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#overview .diagram-caption')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual(["図1:システム全体のアーキテクチャ"]); });
it("preserves .diagram-caption item 1", async () => { const {container}=await page(); const actual=container.querySelector('#overview')?.querySelectorAll(".diagram-caption")[0]; expect(actual).toBeDefined(); expect(signature(actual!)).toEqual(signature(source.querySelector('#overview')!.querySelectorAll(".diagram-caption")[0]!)); });
it("preserves ordered .ref-item inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#overview .ref-item')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual([]); });
});

describe("fundamentals", () => {
 it('preserves section structure and full text', async () => { const {container}=await page(); const actual=container.querySelector('#fundamentals'); expect(actual).not.toBeNull(); expect(signature(actual!)).toEqual(signature(source.querySelector('#fundamentals')!)); });
it("preserves ordered h2,h3,h4 inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#fundamentals h2, #fundamentals h3, #fundamentals h4')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual(["1.前提知識のおさらい：LangGraphとは何か","1-1.ChainからGraphへ","1-2.LangGraphの3要素：State/Node/Edge","1-3.LangGraphとLangChainの違い","1-4.2026年時点の採用状況"]); });
it("preserves h2,h3,h4 item 1", async () => { const {container}=await page(); const actual=container.querySelector('#fundamentals')?.querySelectorAll("h2,h3,h4")[0]; expect(actual).toBeDefined(); expect(signature(actual!)).toEqual(signature(source.querySelector('#fundamentals')!.querySelectorAll("h2,h3,h4")[0]!)); });
it("preserves h2,h3,h4 item 2", async () => { const {container}=await page(); const actual=container.querySelector('#fundamentals')?.querySelectorAll("h2,h3,h4")[1]; expect(actual).toBeDefined(); expect(signature(actual!)).toEqual(signature(source.querySelector('#fundamentals')!.querySelectorAll("h2,h3,h4")[1]!)); });
it("preserves h2,h3,h4 item 3", async () => { const {container}=await page(); const actual=container.querySelector('#fundamentals')?.querySelectorAll("h2,h3,h4")[2]; expect(actual).toBeDefined(); expect(signature(actual!)).toEqual(signature(source.querySelector('#fundamentals')!.querySelectorAll("h2,h3,h4")[2]!)); });
it("preserves h2,h3,h4 item 4", async () => { const {container}=await page(); const actual=container.querySelector('#fundamentals')?.querySelectorAll("h2,h3,h4")[3]; expect(actual).toBeDefined(); expect(signature(actual!)).toEqual(signature(source.querySelector('#fundamentals')!.querySelectorAll("h2,h3,h4")[3]!)); });
it("preserves h2,h3,h4 item 5", async () => { const {container}=await page(); const actual=container.querySelector('#fundamentals')?.querySelectorAll("h2,h3,h4")[4]; expect(actual).toBeDefined(); expect(signature(actual!)).toEqual(signature(source.querySelector('#fundamentals')!.querySelectorAll("h2,h3,h4")[4]!)); });
it("preserves ordered table inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#fundamentals table')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual(["要素役割たとえるならState（状態）グラフ全体で共有される、読み書き可能なデータ構造。すべてのノードがこれを介して情報をやり取りする会議で参加者全員が見ている「共有ホワイトボード」Node（ノード）1つの処理単位を表す関数。Stateを受け取り、更新差分を返すホワイトボードに情報を書き加える「担当者」Edge（エッジ）ノード間の実行順序を定義する。固定のEdgeと、実行結果に応じて分岐するConditionalEdgeがある「次は誰に発言してもらうか」を決める司会進行"]); });
it("preserves table item 1", async () => { const {container}=await page(); const actual=container.querySelector('#fundamentals')?.querySelectorAll("table")[0]; expect(actual).toBeDefined(); expect(signature(actual!)).toEqual(signature(source.querySelector('#fundamentals')!.querySelectorAll("table")[0]!)); });
it("preserves ordered pre code inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#fundamentals pre code')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual([]); });
it("preserves ordered .callout,.summary-card inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#fundamentals .callout, #fundamentals .summary-card')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual([]); });
it("preserves ordered .diagram-caption inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#fundamentals .diagram-caption')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual([]); });
it("preserves ordered .ref-item inventory", async () => { const {container}=await page(); expect([...container.querySelectorAll('#fundamentals .ref-item')].map(el=>(el.textContent??'').replace(/\s+/g,''))).toEqual([]); });
});
