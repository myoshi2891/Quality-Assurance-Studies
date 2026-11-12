import { describe, expect, it } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import { isTag, type AnyNode } from 'domhandler';
import postcss from 'postcss';
import inventory from '../../docs/migration-inventory/iso-19770-1-guide.json';
import { sourceModule } from '../helpers/source-module';
import { DIAGRAM_CORRECTIONS, MISCONCEPTION_HEADING, TIER_GROUPS, applyReviewCorrections, reviewedDiagrams } from './review-corrections';
const base = 'app/iso-19770-1-guide';
const scope = '.iso19770-page';
// 図はレビューで承認した補正を適用した定義と照合する。インベントリ自体は原本の記録として変更しない。
const diagrams = reviewedDiagrams(inventory.diagrams);
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
function tree(n: AnyNode): unknown {
    if (n.type === 'text') return norm(n.data) || null;
    if (!isTag(n)) return null;
    const attrs = { ...n.attribs };
    for (const k of ['role','aria-label','aria-labelledby','aria-current','aria-expanded','aria-controls','tabindex','type']) delete attrs[k];
    if (attrs.class) attrs.class = attrs.class.replace(/\s+active\b/g, '');
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
describe('source diagrams', () => {
    for(const diagram of diagrams) it(`${diagram.id}: exact HTML nodes, shapes, edges, labels and clusters reach shared Mermaid`, async () => {
        const charts: string[]=[];
        const C=sourceModule(`${base}/Diagram.tsx`,{onMermaidChart:chart=>charts.push(chart)}).default as React.ComponentType<{id:string}>;
        renderToStaticMarkup(<C id={diagram.id}/>);
        expect(charts).toHaveLength(1);
        const entry: string = 'mermaid/dist/mermaid.esm.mjs';
        const mermaid = (await import(entry)).default;
        await expect(mermaid.parse(charts[0]!)).resolves.toBeTruthy();
        const chart=charts[0]!;
        expect(chart).toContain(`flowchart ${diagram.direction}\n`);
        const nodeOrder=[...chart.matchAll(/^([A-Za-z0-9_]+)(?:\[|\{)"/gm)].map(match=>match[1]);
        expect(nodeOrder).toEqual(diagram.nodes.map(node=>node.id));
        for(const node of diagram.nodes) expect(chart).toContain(node.shape==='polygon' ? `${node.id}{"${node.label}"}` : `${node.id}["${node.label}"]`);
        for(const edge of diagram.edges) expect(chart).toContain(`${edge.from} ${edge.invisible?'~~~':edge.dotted?(edge.arrowEnd?'-.->':'-.-'):edge.arrowStart?'<-->':edge.arrowEnd?'-->':'---'}${edge.label?`|"${edge.label}"|`:''} ${edge.to}`);
        for(const cluster of diagram.clusters) expect(chart).toContain(`subgraph ${cluster.id}["${cluster.label}"]`);
        // 置き換えた辺が残っていないよう、辺の本数も定義と一致させる。
        expect(chart.split('}%%')[1]!.split('\n').filter(line=>/ (-->|-\.->|-\.-|<-->|---|~~~)[ |]/.test(line))).toHaveLength(diagram.edges.length);
        expect(chart).toContain('"mainBkg": "#13294a"');
        expect(chart.split('}%%')[0]).not.toContain("'");
    });
});
describe('assembled source inventory', () => {
    let cached: ReturnType<typeof render>;
    const page=()=>cached??=render('page');
    const expected=source(inventory.originalBody);
    for(const [name,group] of Object.entries(inventory.groups)) {
        it(`${name}: exact ordered count`,()=>expect(page()(group.selector)).toHaveLength(group.items.length));
        group.items.forEach((html,i)=>it(`${name} ${i}: complete original element`,()=>expect(tree(page()(group.selector)[i]!)).toEqual(tree(source(html)('body').children()[0]!))));
    }
    for(const development of [false,true]) it(`complete page DOM and text, SWC development=${development}`,()=>{
        const $=render('page',development);
        expect(tree($('main')[0]!)).toEqual(tree(expected('main')[0]!));
        expect(tree($('.sidebar')[0]!)).toEqual(tree(expected('.sidebar')[0]!));
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
    it('removes the nested strong and the literal Markdown asterisks from the reference',()=>{
        const corrected=applyReviewCorrections(inventory.originalBody);
        expect(inventory.originalBody).toMatch(/<strong>[^<]*<strong>/);
        expect(inventory.originalBody).toContain('**');
        expect(corrected).not.toMatch(/<strong>[^<]*<strong>/);
        expect(corrected).not.toContain('**');
    });
    it('emphasizes only the intended phrases',()=>{
        expect(render('Section07')('p:has(strong) strong').map((_,n)=>load(n).text()).get()).toEqual(expect.arrayContaining(['適用宣言書（Statement of Applicability）','15のプロセス領域']));
        expect(render('Section07')('strong strong')).toHaveLength(0);
        const q1=render('Section13')('details').first();
        expect(q1.find('p strong').text()).toBe('IT資産全般のマネジメントシステム（ITAMS）');
        expect(q1.text()).not.toContain('**');
    });
});
describe('table structure',()=>{
    const tierTable=($:ReturnType<typeof load>)=>$('table').filter((_,n)=>$(n).find('thead th').first().text()==='ティア（カテゴリ）');
    it('the correction regroups the original tier table and keeps every process area in order',()=>{
        const original=load(inventory.originalBody),corrected=load(applyReviewCorrections(inventory.originalBody));
        expect(tierTable(original).find('tbody')).toHaveLength(1);
        const areas=($:ReturnType<typeof load>)=>tierTable($).find('tbody tr').map((_,tr)=>$(tr).children('td').eq(-2).text()).get();
        expect(areas(corrected)).toEqual(areas(original));
        expect(areas(original)).toHaveLength(14);
    });
    it('STEP 7: each tier is a row group whose header spans all of its process areas',()=>{
        const $=render('Section07'),table=tierTable($);
        expect(table).toHaveLength(1);
        const groups=table.find('tbody').toArray();
        expect(groups.map(g=>{const header=$(g).find('tr').first().children().first();return [header.text(),Number(header.attr('rowspan'))];})).toEqual(TIER_GROUPS.map(([tier,rows])=>[tier,rows]));
        for(const [i,group] of groups.entries()){
            const rows=$(group).children('tr');
            expect(rows).toHaveLength(TIER_GROUPS[i]![1]);
            const header=rows.first().children().first();
            expect(header.is('th')).toBe(true);expect(header.attr('scope')).toBe('rowgroup');
            expect(header.find('strong').text()).toBe(TIER_GROUPS[i]![0]);
            // 2行目以降は見出しを持たず、空のセルも残さない。
            rows.slice(1).each((_,row)=>{expect($(row).children('th')).toHaveLength(0);expect($(row).children('td')).toHaveLength(2);});
            expect($(group).find('td').filter((_,td)=>$(td).text().trim()==='')).toHaveLength(0);
        }
    });
    it('STEP 12: the table wrapper is a focusable region named by its heading, with a visible focus outline',()=>{
        const $=render('Section12'),wrapper=$('.table-scroll');
        expect(wrapper).toHaveLength(1);
        expect(wrapper.attr('tabindex')).toBe('0');expect(wrapper.attr('role')).toBe('region');
        expect(wrapper.attr('aria-labelledby')).toBe(MISCONCEPTION_HEADING);
        expect($(`h2[id="${MISCONCEPTION_HEADING}"]`)).toHaveLength(1);
        let declarations: string[]=[];
        postcss.parse(readFileSync(`${base}/guide.css`,'utf8')).walkRules(r=>{if(r.selectors.includes(`${scope} .table-scroll:focus-visible`))declarations=r.nodes.filter(n=>n.type==='decl').map(d=>d.toString());});
        expect(declarations).toEqual(['outline: 2px solid var(--accent)','outline-offset: 2px']);
    });
});
describe('diagram accessible names',()=>{
    const accessibleName=(id:string)=>{
        const C=sourceModule(`${base}/Diagram.tsx`).default as React.ComponentType<{id:string}>;
        return load(renderToStaticMarkup(<C id={id}/>))('[role="img"]').attr('aria-label') ?? '';
    };
    diagrams.forEach((diagram,i)=>it(`${diagram.id}: states the subject, every node, cluster and edge label`,()=>{
        const name=accessibleName(diagram.id);
        expect(name.startsWith(`ISO/IEC 19770-1 図 ${i+1}：`)).toBe(true);
        const labels=[...diagram.nodes.map(n=>n.label),...diagram.clusters.map(c=>c.label),...diagram.edges.flatMap(e=>e.label?[e.label]:[])];
        for(const fragment of labels.flatMap(label=>label.split('<br/>'))) expect(name).toContain(fragment);
    }));
    it('roadmap: lists the eight steps in order and the feedback from step 8 to step 3',()=>{
        const name=accessibleName('mermaid-diagram-8');
        const positions=[...'①②③④⑤⑥⑦⑧'].map(step=>name.indexOf(step));
        expect(positions.every(position=>position>=0)).toBe(true);
        expect(positions).toEqual([...positions].sort((a,b)=>a-b));
        expect(name).toContain('⑧から点線で③へ戻り、継続する');
        expect(name).toContain('⑤・⑥・⑦の各ティアの導入中から点線（評価・改善）で⑧へつながり');
    });
    it('cycle and lifecycle: state the return path, and undirected links imply no direction',()=>{
        expect(accessibleName('mermaid-diagram-3')).toContain('箇条10から箇条4へ点線で戻る（継続的改善）');
        const lifecycle=accessibleName('mermaid-diagram-5');
        expect(lifecycle).toContain('廃棄から仕様策定へ点線で戻る（再利用・教訓）');
        expect(lifecycle).toContain('Trustworthy Data（変更・データ・ライセンス・セキュリティ）は仕様策定と運用に関連し');
        expect(lifecycle).toContain('Optimization（関係・財務・SLA）は運用に関連する');
        expect(lifecycle).toContain('必須の順序ではなく、資産によって該当する段階は異なる');
        expect(lifecycle).toContain('購入した SaaS・機器など開発やリリースを要しない資産は、調達から点線で展開へ進む');
    });
    it('corrections replace existing nodes and edges, keeping every other node unchanged',()=>{
        for(const [id,correction] of Object.entries(DIAGRAM_CORRECTIONS)){
            const original=inventory.diagrams.find(d=>d.id===id)!,reviewed=diagrams.find(d=>d.id===id)!;
            const ids=original.nodes.map(n=>n.id);
            for(const edge of correction.edges){expect(ids).toContain(edge.from);expect(ids).toContain(edge.to);}
            for(const nodeId of Object.keys(correction.nodes??{}))expect(ids).toContain(nodeId);
            expect(reviewed.edges).not.toEqual(original.edges);
            expect(reviewed.nodes.filter(n=>!(n.id in (correction.nodes??{})))).toEqual(original.nodes.filter(n=>!(n.id in (correction.nodes??{}))));
        }
        // 図5: 開発・リリースは条件付きで、購入資産は調達から展開へ直接進む。図8: 各ティアから評価と改善へつながる。
        const lifecycle=diagrams.find(d=>d.id==='mermaid-diagram-5')!.edges;
        expect(lifecycle.find(e=>e.from==='N5_AQ'&&e.to==='N5_DV')).toMatchObject({dotted:true,label:'開発する場合'});
        expect(lifecycle.find(e=>e.from==='N5_AQ'&&e.to==='N5_DP')).toMatchObject({dotted:true,arrowEnd:true});
        const roadmap=diagrams.find(d=>d.id==='mermaid-diagram-8')!.edges;
        expect(roadmap.filter(e=>e.to==='N8_S8').map(e=>e.from)).toEqual(['N8_S5','N8_S6','N8_S7']);
        expect(roadmap.filter(e=>e.to==='N8_S8').every(e=>e.dotted)).toBe(true);
    });
});
describe('original archives',()=>{
    for(const ext of ['html','md'] as const) {
        it(`${ext}: root original moved`,()=>expect(existsSync(`${inventory.source}.${ext}`)).toBe(false));
        it(`${ext}: exact original hash retained`,()=>expect(createHash('sha256').update(readFileSync(`archive/${ext}-archive/${inventory.source}.${ext}`)).digest('hex')).toBe(inventory.hashes[ext]));
    }
});
