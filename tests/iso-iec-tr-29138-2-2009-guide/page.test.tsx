import { expect, it } from 'bun:test';
import React from 'react';
import type { AnyNode } from 'domhandler';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { load } from 'cheerio';
import postcss from 'postcss';
import rawInventory from '../../docs/migration-inventory/iso-iec-tr-29138-2-2009-guide.json';
import { sourceModule } from '../helpers/source-module';
const base = 'app/iso-iec-tr-29138-2-2009-guide';
// レビュー修正: 原本インベントリへ重ねる検証済みの訂正。原本の記録とハッシュは変更せず、差分だけをここで明示する
const corrections: ReadonlyArray<readonly [string, string]> = [
    ['https://www.iso.org/ru/standard/33987.html', 'https://www.iso.org/standard/57385.html'],
    ['V3.2.1（2021年3月）がWCAG 2.1 AAを取り込む。V4.1.1 でWCAG 2.2 に更新予定', 'V3.2.1（2021年3月）がWCAG 2.1 AAを取り込む。WCAG 2.2 に更新した V4.1.1 は2026年9月にETSIが公表した。EU官報（Official Journal）への引用は公表とは別の手続きで、2026年11月2日時点では確認できていない'],
    ['注：EN 301 549 V4.1.1 の公表時期については、「2026年10月に公報掲載の見込み」とする情報があります（accessible.org）。2026年10月13日時点で実際に公表されたかは、今回は確認できていません。使う前にETSIや欧州委員会の公式情報で確認してください。', '注：EN 301 549 V4.1.1 は、2026年9月にETSIから公表されました。ETSIによる公表と、EU官報（Official Journal）への引用は別の段階です。官報に引用されるまでは、EU法令上の整合規格としての効力を持ちません。2026年11月2日時点で引用は確認できていないため、使う前にETSIや欧州委員会の公式情報で確認してください。'],
    ['EN 301 549 V4.1.1 の公表状況は、2026年10月13日時点で未確認です', 'EN 301 549 V4.1.1 は2026年9月に公表済みです。EU官報への引用は、2026年11月2日時点で未確認です'],
    ['規格の全文は有償で、読めたのは無料サンプルの範囲です。', '読めたのは無料サンプルの範囲です（全文のPDFは、ISO公式ページから無償で入手できます）。'],
];
function correct<T>(value: T): T {
    if (typeof value === 'string') return corrections.reduce((text, [from, to]) => text.split(from).join(to), value as string) as T;
    if (Array.isArray(value)) return value.map(correct) as T;
    if (value !== null && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, correct(v)])) as T;
    return value;
}
const inventory = { ...correct(rawInventory), hashes: rawInventory.hashes };
// レビュー修正: 図4（WK5）は後継版の採用後に④の確認へ戻り、⑥へ進む（原本は③と2009年の一覧へ戻っていた）
const reviewedEdges: Record<number, Record<string, string>> = { 4: { 'WK5 --> WK3': 'WK5 --> WK4' } };
corrections.forEach(([from, to]) => it('reviewed correction is applied exactly: ' + to.slice(0, 24), () => {
    const raw = JSON.stringify(rawInventory), fixed = JSON.stringify(inventory);
    expect(raw).toContain(from); expect(fixed).not.toContain(from); expect(fixed).toContain(to);
}));
function tree(n: AnyNode): unknown {
    if (n.type === 'text') return n.data.replace(/\s+/g, ' ').trim() || null;
    if (n.type !== 'tag') return null;
    if (n.attribs.class === 'mermaid-diagram') return { tag: 'diagram', id: n.attribs.id };
    const attrs = { ...n.attribs }; delete attrs['aria-current'];
    return { tag: n.name, attrs, children: n.children.map(tree).filter(Boolean) };
}
function html() { const Page = sourceModule(base + '/page.tsx').default as React.ComponentType; return load(renderToStaticMarkup(<Page />)); }
for (const [key, group] of Object.entries(inventory.groups)) {
    it(key + ' exact count and order', () => expect(html()(group.selector).toArray().map(tree)).toEqual(group.items));
    group.items.forEach((item, i) => it(key + ' ' + i, () => expect(tree(html()(group.selector)[i]!)).toEqual(item)));
}
for (const development of [true, false]) it('complete main DOM SWC ' + development, () => {
    const Page = sourceModule(base + '/page.tsx', { development }).default as React.ComponentType;
    expect(load(renderToStaticMarkup(<Page />))('main').contents().toArray().map(tree).filter(Boolean)).toEqual(inventory.main);
});
inventory.categories.forEach((nodes, i) => it('category ' + i + ' complete structure', () => {
    const Category = sourceModule(base + '/Category' + i + '.tsx').default as React.ComponentType;
    expect(load(renderToStaticMarkup(<Category />))('body').contents().toArray().map(tree).filter(Boolean)).toEqual(nodes);
}));
inventory.css.forEach((r, i) => it('CSS ' + i + ' ' + r.selector, () => {
    const selector = r.selector.split(',').map(s => [':root', 'html', 'body'].includes(s.trim()) ? '.iso29138-page' : '.iso29138-page ' + s.trim()).join(', ');
    const found: unknown[] = [];
    postcss.parse(readFileSync(base + '/iso-iec-tr-29138-2-2009-guide.css', 'utf8')).walkRules(rule => {
        if (rule.selector === selector && (rule.parent?.type === 'atrule' ? (rule.parent as postcss.AtRule).params : null) === r.media)
            found.push(rule.nodes.filter(d => d.type === 'decl').map(d => { const v = d as postcss.Declaration; return [v.prop, v.value, v.important || false]; }));
    }); expect(found).toContainEqual(r.decls);
}));
inventory.diagrams.forEach((d, i) => it('diagram ' + i + ' exact original node labels, shapes and edges', async () => {
 const charts = sourceModule(base + '/diagrams.ts') as Record<string,string>;
 const chart = charts['DIAGRAM_' + i]!;
 expect(chart.startsWith(charts.MERMAID_CONFIG! + '\n')).toBe(true);
 for (const n of d.nodes) expect(chart).toContain(n.id + (n.shape === 'polygon' ? '{"' : '["') + n.html?.replace(/<br\s*\/?\s*>/g,'<br/>') + (n.shape === 'polygon' ? '"}' : '"]'));
 const md = readFileSync(existsSync('Iso-iec-tr-29138-2-2009-guide.md') ? 'Iso-iec-tr-29138-2-2009-guide.md' : 'archive/md-archive/iso/Iso-iec-tr-29138-2-2009-guide.md','utf8');
 const original = [...md.matchAll(/```mermaid\n([\s\S]*?)```/g)][i]![1]!;
 expect(chart.split('\n').filter(line => /(?:-->|-\.->)/.test(line))).toEqual(original.split('\n').filter(line=>/(?:-->|-\.->)/.test(line)).map(line=>line.trim()).map(line=>reviewedEdges[i]?.[line] ?? line));
 const mermaid = (await import('mermaid/dist/mermaid.esm.min.mjs')).default;
 expect(await mermaid.parse(chart)).toBeTruthy();
}));
for (const ext of ['html', 'md'] as const) it('archive ' + ext + ' exact bytes and tracked relocation', () => {
    const path = 'archive/' + ext + '-archive/iso/Iso-iec-tr-29138-2-2009-guide.' + ext;
    expect(createHash('sha256').update(readFileSync(path)).digest('hex')).toBe(inventory.hashes[ext]);
    expect(existsSync('Iso-iec-tr-29138-2-2009-guide.' + ext)).toBe(false);
    expect(execFileSync('git', ['ls-files', '--', path], { encoding: 'utf8' }).trim()).toBe(path);
});
it('route registered', () => expect(readFileSync('lib/navigation.ts', 'utf8')).toContain("href: '/iso-iec-tr-29138-2-2009-guide'"));
it('unique IDs and resolving anchors', () => { const $ = html(); const ids = $('[id]').map((_, e) => $(e).attr('id')).get(); expect(new Set(ids).size).toBe(ids.length); $('a[href^="#"]').each((_, a) => expect(ids.filter(id => id === $(a).attr('href')!.slice(1))).toHaveLength(1)); });
it('no whitespace text inside table structure', () => { const $ = html(); expect($('table,thead,tbody,tfoot,tr').toArray().filter(e => e.children.some(c => c.type === 'text'))).toEqual([]); });
it('imports scoped CSS and exact title metadata', () => {
    expect(readFileSync(base + '/page.tsx', 'utf8')).toContain("import './iso-iec-tr-29138-2-2009-guide.css'");
    expect(sourceModule(base + '/page.tsx').metadata).toEqual({ title: "ISO/IEC TR 29138-2:2009 初学者向けステップバイステップ解説ガイド" });
});

it('passes every original chart to the shared renderer in document order', () => {
    const charts = sourceModule(base + '/diagrams.ts') as Record<string,string>;
    const actual: string[] = [];
    function visit(value: React.ReactNode): void {
        React.Children.forEach(value, child => {
            if (!React.isValidElement<{ chart?: string; children?: React.ReactNode }>(child)) return;
            if (child.props.chart) actual.push(child.props.chart);
            if (child.props.children) visit(child.props.children);
        });
    }
    inventory.categories.forEach((_,i)=> {
        const Category = sourceModule(base + '/Category' + i + '.tsx').default as () => React.ReactNode;
        visit(Category());
    });
    expect(actual).toEqual(inventory.diagrams.map((_, i)=>charts['DIAGRAM_'+i]));
});

it('mobile sidebar is removed from keyboard focus while closed and becomes visible when opened, keeping the slide', () => {
    const decls: Record<string, Record<string, string>> = {};
    postcss.parse(readFileSync(base + '/iso-iec-tr-29138-2-2009-guide.css', 'utf8')).walkRules(rule => {
        if (rule.parent?.type !== 'atrule' || (rule.parent as postcss.AtRule).params !== '(max-width: 900px)') return;
        if (rule.selector !== '.iso29138-page .sidebar' && rule.selector !== '.iso29138-page .sidebar.open') return;
        rule.walkDecls(d => { (decls[rule.selector] ??= {})[d.prop] = d.value; });
    });
    expect(decls['.iso29138-page .sidebar']).toMatchObject({ transform: 'translateX(-100%)', visibility: 'hidden' });
    expect(decls['.iso29138-page .sidebar.open']).toMatchObject({ transform: 'none', visibility: 'visible' });
    for (const selector of ['.iso29138-page .sidebar', '.iso29138-page .sidebar.open']) {
        expect(decls[selector]!.transition).toContain('transform 0.2s');
        expect(decls[selector]!.transition).toContain('visibility');
    }
});
