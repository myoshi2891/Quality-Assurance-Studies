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
import { corrections, correct, withExternalLinkAttrs } from './reviewed-corrections';
const base = 'app/iso-iec-tr-29138-2-2009-guide';
const inventory = { ...withExternalLinkAttrs(correct(rawInventory)), hashes: rawInventory.hashes };
it('every external link opens in a new tab with noopener noreferrer', () => {
    const $ = html(); const links = $('a[href^="http"]').toArray();
    expect(links.length).toBeGreaterThan(0);
    expect(links.filter(a => a.attribs.target !== '_blank' || a.attribs.rel !== 'noopener noreferrer').map(a => a.attribs.href)).toEqual([]);
});
// レビュー修正: 図4（WK5）は後継版の採用後に④の確認へ戻り、⑥へ進む（原本は③と2009年の一覧へ戻っていた）
// さらに、後継がない場合は対象から外すか別の該当規格を選んで⑥へ進む（④⇄⑤の無限ループにしない）
const reviewedEdges: Record<number, Record<string, readonly string[]>> = { 4: { 'WK5 --> WK3': ['WK5 --> WK8', 'WK8 -->|"ある 後継版を採用"| WK4', 'WK8 -->|"ない"| WK9', 'WK9 --> WK6'] } };
const reviewedNodes: Record<number, readonly string[]> = { 4: ['WK8{"後継の規格や法令はあるか"}', 'WK9["対象から外す または ほかに当てはまる規格を選ぶ"]'] };
it('diagram 4 terminates the WK4/WK5 check when no successor exists and routes that outcome to WK6', () => {
    const chart = (sourceModule(base + '/diagrams.ts') as Record<string, string>).DIAGRAM_4!;
    for (const node of reviewedNodes[4]!) expect(chart).toContain(node);
    expect(chart).not.toContain('WK5 --> WK4');
    expect(chart).toContain('WK8 -->|"ない"| WK9\nWK9 --> WK6');
});
// 視差効果を減らす設定では、スムーズスクロールと目次のスライドを止める（閉じた目次の visibility: hidden は維持する）
it('reduced motion disables smooth scrolling and transitions including the sidebar slide', () => {
    const decls: Record<string, Record<string, string>> = {};
    postcss.parse(readFileSync(base + '/iso-iec-tr-29138-2-2009-guide.css', 'utf8')).walkAtRules('media', at => {
        if (!/prefers-reduced-motion:\s*reduce/.test(at.params)) return;
        at.walkRules(rule => { for (const s of rule.selectors) rule.walkDecls(d => { (decls[s] ??= {})[d.prop] = d.value; }); });
    });
    for (const s of ['html:has(.iso29138-page)', '.iso29138-page']) expect(decls[s]?.['scroll-behavior']).toBe('auto');
    for (const s of ['.iso29138-page *', '.iso29138-page .sidebar', '.iso29138-page .sidebar.open']) expect(decls[s]?.transition).toBe('none');
    expect(Object.values(decls).filter(d => 'visibility' in d)).toEqual([]);
});
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
 expect(chart.split('\n').filter(line => /(?:-->|-\.->)/.test(line))).toEqual(original.split('\n').filter(line=>/(?:-->|-\.->)/.test(line)).map(line=>line.trim()).flatMap(line=>reviewedEdges[i]?.[line] ?? [line]));
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
