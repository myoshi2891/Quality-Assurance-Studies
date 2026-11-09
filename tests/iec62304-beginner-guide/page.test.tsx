import { describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/iec62304-beginner-guide.json';
import { sourceModule } from '../helpers/source-module';
import { CLASS_DECISION_NOTE, CLASS_DECISION_TEXT, CLASS_SUMMARY_NOTE, FDA_CLASS_LABEL, FDA_CLASS_TEXT, FDA_MISTAKE_LABEL, FDA_MISTAKE_TEXT, FDA_SOURCE, FDA_SOURCE_DETAIL, FDA_URL, IEC_SCOPE_REVIEWED, DIAGRAM_NODE_LABELS, PROCESS_ORDER_NOTE, RISK_REVIEWED_PLAIN, applyReviewCorrections, reviewedDiagrams, withFdaReference } from './review-corrections';
const base = 'app/iec62304-beginner-guide';
const scope = '.iec62304-page';
// 図はレビューで承認した補正を適用した定義と照合する。インベントリ自体は原本の記録として変更しない。
const diagrams = reviewedDiagrams(inventory.diagrams);
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
function tree(n: AnyNode): unknown {
    if (n.type === 'text') return norm(n.data) || null;
    if (!isTag(n)) return null;
    const attrs = { ...n.attribs };
    for (const k of ['role','aria-label','aria-describedby','aria-current','aria-expanded','aria-controls','tabindex','type']) delete attrs[k];
    if (attrs.class) { attrs.class = attrs.class.replace(/(^|\s+)active\b/g, '').trim(); if (!attrs.class) delete attrs.class; }
    if (attrs.style) attrs.style = attrs.style.replace(/\s+/g,'').replace(/;$/,'');
    return { tag: n.tagName, attrs, children: attrs.class === 'mermaid-diagram' ? [] : n.children.map(tree).filter(Boolean) };
}
function source(html: string) {
    const $ = load(applyReviewCorrections(html));
    $('a[href^="http"]').attr('target','_blank').attr('rel','noopener noreferrer');
    // React disallows indentation text directly under table structure.
    $('table,thead,tbody,tfoot,tr,colgroup').contents().filter((_,n)=>n.type==='text' && /^\s*$/.test(n.data)).remove();
    return $;
}
function render(file: string, development = false) {
    const C = sourceModule(`${base}/${file}.tsx`, { development }).default as React.ComponentType;
    return load(renderToStaticMarkup(<C />));
}
for (const [i, category] of inventory.sections.entries()) {
    describe(`category ${String(i+1).padStart(2,'0')}: ${category.name}`, () => {
        for (const development of [false,true]) it(`complete DOM and inline text, SWC development=${development}`, () => {
            const actual = render(`Section${String(i+1).padStart(2,'0')}`, development), expected = source(category.html);
            expect(actual('body').contents().toArray().map(tree).filter(Boolean)).toEqual(expected('body').contents().toArray().map(tree).filter(Boolean));
            actual('.mermaid-diagram').empty(); expected('.mermaid-diagram').empty();
            expect(norm(actual('body').text())).toBe(norm(expected('body').text()));
        });
    });
}
describe('foundation CSS', () => {
    inventory.css.forEach((original,i) => it(`CSS ${i}: every declaration ${original.selector}`, () => {
        const candidates: unknown[] = [];
        const expected = original.selector.split(',').map(s=>[':root','html','body'].includes(s.trim()) ? scope : `${scope} ${s.trim()}`).join(', ');
        postcss.parse(readFileSync(`${base}/guide.css`,'utf8')).walkRules(r => {
            if (r.selector === expected && (r.parent?.type === 'atrule' ? (r.parent as postcss.AtRule).params : null) === original.media)
                candidates.push(r.nodes.filter(n=>n.type==='decl').map(d=>{ const n=d as postcss.Declaration; return [n.prop,n.value,n.important||null]; }));
        });
        expect(candidates).toContainEqual(original.decls);
    }));
    it('isolates all rules and offsets fixed chrome and headings', () => {
        const css=readFileSync(`${base}/guide.css`,'utf8');
        postcss.parse(css).walkRules(r=>r.selectors.forEach(s=>expect(s.startsWith(scope)).toBe(true)));
        for(const text of ['var(--disclaimer-height, 0px)','scroll-margin-top','foreignObject','max-width: none','(max-width: 900px)']) expect(css).toContain(text);
    });
});
// ラッパーの id ではなく、共有レンダラーへ渡る図の中身そのものをインベントリと照合する。
function expectChartMatches(chart: string, diagram: typeof inventory.diagrams[number]) {
    for(const node of diagram.nodes) expect(chart).toContain(node.shape==='polygon' ? `${node.id}{"${node.label}"}` : `${node.id}["${node.label}"]`);
    for(const edge of diagram.edges) expect(chart).toContain(`${edge.from} ${edge.invisible?'~~~':edge.dotted?'-.->':'-->'}${edge.label?`|"${edge.label}"|`:''} ${edge.to}`);
    for(const cluster of diagram.clusters) expect(chart).toContain(`subgraph ${cluster.id}["${cluster.label}"]`);
    const body=chart.split('}%%')[1]!.split('\n').map(line=>line.trim());
    expect(body.filter(line=>/^\w+[[{]/.test(line))).toHaveLength(diagram.nodes.length);
    expect(body.filter(line=>/ (-->|-\.->|~~~)/.test(line))).toHaveLength(diagram.edges.length);
}
describe('source diagrams', () => {
    for(const diagram of diagrams) it(`${diagram.id}: exact HTML nodes, shapes, edges, labels and clusters reach shared Mermaid`, async () => {
        const charts: string[]=[];
        const C=sourceModule(`${base}/Diagram.tsx`,{onMermaidChart:chart=>charts.push(chart)}).default as React.ComponentType<{id:string}>;
        renderToStaticMarkup(<C id={diagram.id}/>);
        expect(charts).toHaveLength(1);
        const entry: string = 'mermaid/dist/mermaid.esm.mjs';
        const mermaid = (await import(entry)).default;
        await expect(mermaid.parse(charts[0]!)).resolves.toBeTruthy();
        expectChartMatches(charts[0]!,diagram);
        expect(charts[0]!).toContain('"mainBkg": "#12233a"');
        expect(charts[0]!.split('}%%')[0]).not.toContain("'");
    });
    it('the assembled page renders every chart once, in source order, with the inventoried content',()=>{
        const charts: string[]=[];
        const C=sourceModule(`${base}/page.tsx`,{onMermaidChart:chart=>charts.push(chart)}).default as React.ComponentType;
        renderToStaticMarkup(<C/>);
        expect(load(inventory.originalBody)('.mermaid-diagram').map((_,n)=>load(n)('.mermaid-diagram').attr('id')).get()).toEqual(diagrams.map(d=>d.id));
        expect(charts).toHaveLength(diagrams.length);
        expect(new Set(charts).size).toBe(charts.length);
        diagrams.forEach((diagram,i)=>expectChartMatches(charts[i]!,diagram));
    });
    const NAMES: Record<string,string> = {
        'mmd-4':'IEC 62304 図 5：箇条5の開発プロセスを構成する8つの活動の順序。5.1 開発計画、5.2 要求事項分析、5.3 アーキテクチャ設計、5.4 詳細設計、5.5 ユニット実装と検証、5.6 統合と統合テスト、5.7 システムテスト、5.8 リリースの順に進む。',
        'mmd-5':'IEC 62304 図 6：ソフトウェア安全クラスごとに求められる活動の積み上がり。クラス A は計画・要求・実装・システムテスト・リリース。クラス B は A に加えて アーキテクチャ・ユニットへの分割・ユニット検証・統合テスト。クラス C は B に加えて 詳細設計・追加受入基準・分離の識別。',
        'mmd-16':'IEC 62304 図 17：初めて 62304 に取り組む手順の8ステップ。Step 1 製品の意図する用途と規制上の位置づけを確認、Step 2 QMS とリスクマネジメントの土台を確認、Step 3 ソフトウェアシステムを識別し安全クラスを仮決定、Step 4 開発計画 SDP を作成、Step 5 SOUP の識別・評価と一覧・構成管理を整備、Step 6 要求 → 設計 → 実装 → テストをトレーサビリティ付きで実施、Step 7 安全クラスを再確認し、クラス別の作業・検証を確認してからリリース判定と記録の確認、Step 8 保守・問題解決の運用開始の順に進む。Step 8 からは Step 3 へフィードバックが戻る。',
    };
    for(const [id,name] of Object.entries(NAMES)) it(`${id}: the accessible name states the topic and every node label in order`,()=>{
        const $=render('page');
        expect($(`#${id}`).attr('role')).toBe('img');
        expect($(`#${id}`).attr('aria-label')).toBe(name);
        const labels=diagrams.find(d=>d.id===id)!.nodes.flatMap(node=>node.label.split(/<br\/?>/));
        let from=0;
        for(const label of labels){const at=name.indexOf(label,from);expect(at,label).toBeGreaterThanOrEqual(from);from=at+label.length;}
    });
    it('mmd-5: class B adds unit decomposition and leaves class A and C unchanged',()=>{
        const original=inventory.diagrams.find(d=>d.id==='mmd-5')!,reviewed=diagrams.find(d=>d.id==='mmd-5')!;
        // 補正の空振りを防ぐため、補正先のノードが原本に存在し、原本の文言とは異なることを確かめる。
        expect(Object.keys(DIAGRAM_NODE_LABELS['mmd-5']!)).toEqual(['N5_CB']);
        expect(original.nodes.find(n=>n.id==='N5_CB')!.label).not.toContain('ユニットへの分割');
        expect(reviewed.nodes.find(n=>n.id==='N5_CB')!.label).toBe('クラス B<br/>A に加えて アーキテクチャ・ユニットへの分割・ユニット検証・統合テスト');
        expect(reviewed.nodes.filter(n=>n.id!=='N5_CB')).toEqual(original.nodes.filter(n=>n.id!=='N5_CB'));
        expect(reviewed.edges).toEqual(original.edges);
    });
    it('mmd-6: safety impact is assessed before the change decision and the no-change branch records its rationale',()=>{
        const original=inventory.diagrams.find(d=>d.id==='mmd-6')!,reviewed=diagrams.find(d=>d.id==='mmd-6')!;
        expect(original.edges.some(e=>e.from==='N6_M2'&&e.to==='N6_M3')).toBe(true);
        const next=(from:string)=>reviewed.edges.filter(e=>e.from===from).map(e=>e.to);
        expect(next('N6_M2')).toEqual(['N6_M4']);
        expect(next('N6_M4')).toEqual(['N6_M3']);
        expect(reviewed.edges.filter(e=>e.to==='N6_M3').map(e=>e.from)).toEqual(['N6_M4']);
        expect(reviewed.edges.find(e=>e.from==='N6_M3'&&e.label==='不要')!.to).toBe('N6_M9');
        expect(reviewed.nodes.find(n=>n.id==='N6_M9')!.label).toContain('根拠を記録');
    });
    it('mmd-6: the description covers both branches and is wired through aria-describedby',()=>{
        const $=render('page'),description=$('#mmd-6-description');
        expect($('#mmd-6').attr('aria-describedby')).toBe('mmd-6-description');
        expect($('#mmd-6').attr('aria-label')).toBe('IEC 62304 図 7');
        for(const text of ['変更が不要な場合','リリースには進まない','変更が必要な場合','変更依頼の承認','6.3 変更の実装','変更後のリリース'])expect(description.text()).toContain(text);
    });
    it('mmd-16: SOUP identification and evaluation come before the design and implementation step',()=>{
        const reviewed=diagrams.find(d=>d.id==='mmd-16')!,label=(id:string)=>reviewed.nodes.find(n=>n.id===id)!.label;
        expect(label('N16_T5')).toContain('SOUP の識別・評価');
        expect(label('N16_T6')).toContain('設計');
        expect(reviewed.edges.filter(e=>!e.dotted).map(e=>`${e.from}>${e.to}`)).toContain('N16_T5>N16_T6');
    });
    it('every diagram wrapper is keyboard focusable so narrow overflowing charts can scroll',()=>{
        const $=render('page');
        expect($('.mermaid-diagram').toArray().every(n=>$(n).attr('tabindex')==='0')).toBe(true);
        for(const diagram of $('.mermaid-diagram').toArray()){
            const image=$(diagram),description=image.attr('aria-describedby');
            const alternative=(image.attr('aria-label')??'')+(description?$(`#${description}`).text():'');
            expect(alternative.length,image.attr('id')).toBeGreaterThan(40);
        }
        const comparison=$('#mmd-3-description').text();
        for(const text of ['全体をクラス C','判断が単純','作業量が大きく','部品ごとにクラス付け','低リスク部分の負担','分離の正当化'])expect(comparison).toContain(text);
        expect($('#mmd-3').attr('aria-describedby')).toBe('mmd-3-description');
        expect(readFileSync(`${base}/guide.css`,'utf8')).toContain('.mermaid-diagram:focus-visible');
    });
    it('mmd-2 references its decision-branch description',()=>{
        const $=render('page');
        expect($('#mmd-2').attr('aria-describedby')).toBe(CLASS_DECISION_NOTE);
        expect($(`#${CLASS_DECISION_NOTE}`).text()).toBe(CLASS_DECISION_TEXT);
    });
    it('mmd-4 and mmd-5 reference their adjacent explanatory callouts',()=>{
        const $=render('page');
        expect($('#mmd-4').attr('aria-describedby')).toBe(PROCESS_ORDER_NOTE);
        expect($('#mmd-5').attr('aria-describedby')).toBe(CLASS_SUMMARY_NOTE);
        expect($(`#${PROCESS_ORDER_NOTE}`).is('blockquote.callout')).toBe(true);
        expect($(`#${PROCESS_ORDER_NOTE}`).text()).toContain('論理的な流れ');
        expect($(`#${CLASS_SUMMARY_NOTE}`).is('blockquote.callout')).toBe(true);
        expect($(`#${CLASS_SUMMARY_NOTE}`).text()).toContain('理解のための要約');
    });
});
describe('assembled source inventory', () => {
    let cached: ReturnType<typeof render>;
    const page=()=>cached??=render('page');
    const expected=source(inventory.originalBody);
    for(const [name,group] of Object.entries(inventory.groups)) {
        const items=name==='references'?withFdaReference(group.items):group.items;
        it(`${name}: exact ordered count`,()=>expect(page()(group.selector)).toHaveLength(items.length));
        items.forEach((html,i)=>it(`${name} ${i}: complete original element`,()=>expect(tree(page()(group.selector)[i]!)).toEqual(tree(source(html)('body').children()[0]!))));
    }
    for(const development of [false,true]) it(`complete page DOM and text, SWC development=${development}`,()=>{
        const $=render('page',development);
        expect(tree($('main')[0]!)).toEqual(tree(expected('main')[0]!));
        $('.mermaid-diagram').empty(); const ref=source(inventory.originalBody); ref('.mermaid-diagram').empty();
        expect(norm($('main').text())).toBe(norm(ref('main').text()));
        const ids=$('[id]').map((_,n)=>$(n).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length);
        $('.sidebar a').each((_,n)=>expect(ids.filter(id=>id===$(n).attr('href')!.slice(1))).toHaveLength(1));
        expect($('script,style,svg,table > div,tr > div')).toHaveLength(0);
        $('a[href^="http"]').each((_,n)=>{expect($(n).attr('rel')).toBe('noopener noreferrer');expect($(n).attr('target')).toBe('_blank');});
        const entry=readFileSync(`${base}/page.tsx`,'utf8'); expect(entry).toContain("import './guide.css'"); expect(entry).toContain('noto-sans-jp-800.css');
        expect(sourceModule(`${base}/page.tsx`).metadata).toMatchObject({title:inventory.title});
    });
});
describe('review corrections',()=>{
    const text=()=>norm(render('page')('main').text());
    it('every correction applies to the original body',()=>{
        const corrected=applyReviewCorrections(inventory.originalBody);
        for(const value of [FDA_CLASS_LABEL,FDA_CLASS_TEXT,FDA_MISTAKE_LABEL,FDA_MISTAKE_TEXT,FDA_SOURCE,FDA_SOURCE_DETAIL,IEC_SCOPE_REVIEWED,RISK_REVIEWED_PLAIN.replace('深刻度中心の分析','<strong>深刻度中心の分析</strong>')]) expect(corrected).toContain(value);
        expect(corrected.match(new RegExp(FDA_URL,'g'))).toHaveLength(2);
    });
    it('9.2 separates software failure probability from the probability of harm',()=>{
        const $=render('page'),paragraph=$('h3[id^="92-"]').nextAll('p').first();
        expect(paragraph.find('strong strong')).toHaveLength(0);
        expect(norm(paragraph.text())).toContain(RISK_REVIEWED_PLAIN);
        expect(text()).not.toContain('確率で評価するよりも');
    });
    it('sections 6 and 18 describe the Basic and Enhanced documentation levels',()=>{
        const $=render('page');
        for(const [label,detail] of [[FDA_CLASS_LABEL,FDA_CLASS_TEXT],[FDA_MISTAKE_LABEL,FDA_MISTAKE_TEXT]] as const) expect(norm($(`td:contains("${label}")`).closest('tr').text())).toContain(detail);
        expect(text()).not.toContain('FDA の Level of Concern');
    });
    it('section 20.1 cites the FDA guidance and scopes the IEC exclusion to the medical device',()=>{
        const $=render('page'),row=$(`a[href="${FDA_URL}"]`).closest('tr');
        expect(row.find('td').first().text()).toBe(FDA_SOURCE);
        expect($(`a[href="${FDA_URL}"]`).attr('rel')).toBe('noopener noreferrer');
        expect($(`a[href="${FDA_URL}"]`).attr('target')).toBe('_blank');
        expect(row.prev().text()).toContain('JFMDA');
        expect(text()).toContain(IEC_SCOPE_REVIEWED);
    });
});
describe('keyboard-operable table regions',()=>{
    const REGIONS: Record<string,readonly string[]> = {
        Section07:['ソフトウェア開発計画に含める内容の表','ソフトウェア要求事項の種類と例の表','アーキテクチャ設計の活動と要点の表','詳細設計のクラス別要求の表','ユニット実装と検証のクラス別要求の表','リリース活動と対象クラスの表','活動別・クラス別の要求サマリの表'],
        Section18:['よくある失敗と対策の表'],
    };
    for(const [file,labels] of Object.entries(REGIONS)) it(`${file}: every table wrapper is a named, focusable region`,()=>{
        const $=render(file),wrappers=$('.table-scroll').toArray();
        expect(wrappers.map(n=>$(n).attr('aria-label'))).toEqual([...labels]);
        for(const wrapper of wrappers){expect($(wrapper).attr('role')).toBe('region');expect($(wrapper).attr('tabindex')).toBe('0');expect($(wrapper).find('table')).toHaveLength(1);}
    });
    it('shows the existing focus outline on the regions',()=>{
        let declarations: string[]=[];
        postcss.parse(readFileSync(`${base}/guide.css`,'utf8')).walkRules(r=>{if(r.selectors.includes(`${scope} .table-scroll:focus-visible`))declarations=r.nodes.filter(n=>n.type==='decl').map(d=>d.toString());});
        expect(declarations).toEqual(['outline: 2px solid var(--acc)','outline-offset: 2px']);
    });
});
describe('original archives',()=>{
    for(const ext of ['html','md'] as const) {
        it(`${ext}: root original moved`,()=>expect(existsSync(`${inventory.source}.${ext}`)).toBe(false));
        it(`${ext}: exact original hash retained`,()=>expect(createHash('sha256').update(readFileSync(`archive/${ext}-archive/${inventory.source}.${ext}`)).digest('hex')).toBe(inventory.hashes[ext]));
    }
});
