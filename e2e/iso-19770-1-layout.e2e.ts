import { test, expect } from '@playwright/test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { transformSync } from 'next/dist/build/swc';
import inventory from '../docs/migration-inventory/iso-19770-1-guide.json';
import { sourceModule } from '../tests/helpers/source-module';
const base = 'app/iso-19770-1-guide';
const retained = readFileSync('app/istqb-ct-game-complete-guide/istqb-ct-game-complete-guide.css', 'utf8');
const preflight = readFileSync('node_modules/tailwindcss/preflight.css', 'utf8');
const globals = readFileSync('app/globals.css', 'utf8');
const shared = readFileSync('components/Mermaid.tsx', 'utf8');
const initialization = shared.match(/mermaid.initialize\((\{[\s\S]*?\n\})\);/)?.[1];
if (!initialization) throw new Error('Missing shared Mermaid initialization');
const globalConfig = Function(`return (${initialization});`)() as object;
const start = shared.indexOf('function applySvgFixups');
const fixups = transformSync(shared.slice(start, shared.indexOf('/**', start)), { filename: 'fixups.ts', jsc: { parser: { syntax: 'typescript' } } }).code as string;
function markup() { const Page = sourceModule(`${base}/page.tsx`).default as React.ComponentType; return renderToStaticMarkup(React.createElement(Page)); }
const selectors = ['.main','.hero','.eyebrow','.hero-title','.hero-sub','.hero-meta','.hero-meta > div','.hero-meta span','.hero-meta strong','h2','h3','.step-num','main p','main ul','main ol','main li','strong','.table-scroll','table','thead','th','td','td strong','td a','.callout','.callout-icon','.callout-body','.callout-body p','.page-footer','.sidebar-title','.sidebar-title small','.sidebar ul','.sidebar a','.nav-h3 a','.nav-toggle','details','summary'];
const properties = ['color','backgroundColor','fontFamily','fontSize','fontWeight','fontStyle','textTransform','verticalAlign','lineHeight','letterSpacing','marginTop','marginBottom','marginLeft','marginRight','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth','borderTopColor','borderBottomColor','borderRadius','display','listStyleType','textAlign','whiteSpace','width','minWidth','maxWidth','boxShadow','backgroundImage','position','overflowX','webkitTextFillColor','backgroundClip','animationName','animationDuration','opacity','transform'];
for (const width of [390,900,901,1440]) {
    for (const order of ['before','after'] as const) {
        test(`${width}px CSS ${order}: every source design element matches computed styles`, async ({ page }) => {
            await page.setViewportSize({ width, height: 900 });
            const reference = await page.context().newPage(); await reference.setViewportSize({ width, height: 900 });
            await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody.replace(/<svg[\s\S]*?<\/svg>/g,'')} `);
            const own = readFileSync(`${base}/guide.css`, 'utf8');
            const css = preflight + globals + (order === 'before' ? retained + own : own + retained);
            await page.setContent(`<style>${css}</style>${markup()}`);
            const collect = ({ selectors, properties, root }: { selectors: string[]; properties: string[]; root: string }) => Object.fromEntries(selectors.map(selector => [selector, Array.from(document.querySelectorAll(root + selector)).map(el => { const style = getComputedStyle(el); return Object.fromEntries(properties.map(key => [key, style[key as keyof CSSStyleDeclaration]])); })]));
            const expected = await reference.evaluate(collect, { selectors, properties, root: '' });
            const actual = await page.evaluate(collect, { selectors, properties, root: '.iso19770-page ' });
            for (const selector of selectors) expect.soft(actual[selector], selector).toEqual(expected[selector]);
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
            await expect(page.locator('.hero')).toHaveCSS('min-height','0px');
            await expect(page.locator('.nav-toggle')).toHaveCSS('display', width <= 900 ? 'block' : 'none');
            for (const pseudo of ['::before','::after']) {
                const props = ['content','backgroundImage','width','height','position','top','right'];
                const snapshot = (el: Element, { pseudo, props }: { pseudo: string; props: string[] }) => Object.fromEntries(props.map(prop => [prop, getComputedStyle(el, pseudo)[prop as keyof CSSStyleDeclaration]]));
                expect(await page.locator('.hero').evaluate(snapshot, { pseudo, props })).toEqual(await reference.locator('.hero').evaluate(snapshot, { pseudo, props }));
            }
            const rowStyles = (row: Element) => ({ background: getComputedStyle(row).backgroundColor, cells: Array.from(row.children, cell => ({ background: getComputedStyle(cell).backgroundColor, color: getComputedStyle(cell).color })) });
            await reference.locator('tbody tr').first().hover(); await page.locator('tbody tr').first().hover();
            expect(await page.locator('tbody tr').first().evaluate(rowStyles)).toEqual(await reference.locator('tbody tr').first().evaluate(rowStyles));
            await reference.close();
        });
    }
}
for(const width of [390,1440])for(const [id,diagram]of inventory.diagrams.map(d=>[d.id,d] as const)) {
    test(`${width}px ${id}: exact SVG node and edge semantics, palette and scroll reachability`,async({page})=>{
        await page.setViewportSize({width,height:900});await page.setContent(`<style>${globals}${readFileSync(`${base}/guide.css`,'utf8')}</style>${markup()}`);
        await page.addScriptTag({path:'node_modules/mermaid/dist/mermaid.min.js'});
        const {DIAGRAMS}=sourceModule(`${base}/diagrams.ts`) as {DIAGRAMS:Record<string,string>};
        const reference=await page.context().newPage();await reference.setViewportSize({width,height:900});await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody}`);
        const collect=(outer:Element)=>{
            const norm=(s:string|null)=>(s??'').replace(/\s+/g,' ').trim();
            const nodes=Array.from(outer.querySelectorAll('g.node'),n=>({id:n.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''),label:norm(n.querySelector('.nodeLabel')?.textContent??''),color:getComputedStyle(n.querySelector('.nodeLabel')!).color,fill:getComputedStyle(n.firstElementChild!).fill,shape:n.firstElementChild!.tagName,stroke:getComputedStyle(n.firstElementChild!).stroke,strokeWidth:getComputedStyle(n.firstElementChild!).strokeWidth}));
            const labels=Array.from(outer.querySelectorAll('g.edgeLabels > g.edgeLabel'),n=>norm(n.textContent));
            const edges=Array.from(outer.querySelectorAll('g.edgePaths path[data-id]'),n=>({id:n.getAttribute('data-id')||n.id,dotted:n.classList.contains('edge-pattern-dotted'),stroke:getComputedStyle(n).stroke,strokeWidth:getComputedStyle(n).strokeWidth,arrowEnd:/pointEnd/.test(n.getAttribute('marker-end')??''),arrowStart:/pointStart/.test(n.getAttribute('marker-start')??'')}));
            const clusters=Array.from(outer.querySelectorAll('g.cluster rect'),n=>({fill:getComputedStyle(n).fill,stroke:getComputedStyle(n).stroke,strokeWidth:getComputedStyle(n).strokeWidth,arrowEnd:/pointEnd/.test(n.getAttribute('marker-end')??''),arrowStart:/pointStart/.test(n.getAttribute('marker-start')??'')}));
            return {nodes,labels,edges,clusters};
        };
        const expected=await reference.locator('#'+id).evaluate(collect);
        await page.evaluate(async({id,chart,globalConfig,fixups})=>{const mermaid=(window as unknown as {mermaid:{initialize:(c:object)=>void;render:(id:string,chart:string)=>Promise<{svg:string}>}}).mermaid;mermaid.initialize(globalConfig);const {svg}=await mermaid.render('itam-new-'+id,chart);const inner=document.getElementById(id)!.querySelector('.mermaid-wrapper')!;inner.innerHTML=svg;Function(`${fixups};return applySvgFixups;`)()(inner.querySelector('svg'),chart);},{id,chart:DIAGRAMS[id]!,globalConfig,fixups});
        expect(await page.locator('#'+id).evaluate(collect)).toEqual(expected);

        // Compare each source edge's dominant direction, independently of generated layout coordinates.
        const centers=(outer:Element)=>Object.fromEntries(Array.from(outer.querySelectorAll('g.node'),n=>{const r=n.getBoundingClientRect();return [n.id.replace(/^.*flowchart-/,'').replace(/-\d+$/,''),{x:r.x+r.width/2,y:r.y+r.height/2}];}));
        const sourceCenters=await reference.locator('#'+id).evaluate(centers);
        const actualCenters=await page.locator('#'+id).evaluate(centers);
        for(const edge of diagram.edges){const from=sourceCenters[edge.from],to=sourceCenters[edge.to];if(!from||!to)continue;
            const axis=Math.abs(to.x-from.x)>Math.abs(to.y-from.y)?'x':'y';
            expect(Math.sign(actualCenters[edge.to]![axis]-actualCenters[edge.from]![axis]),`${id} ${edge.from} -> ${edge.to} direction ${axis}`).toBe(Math.sign(to[axis]-from[axis]));
        }
        // An SVG can exist with correct labels/palette while a CSS reset makes every node zero-sized.
        const geometry = await page.locator('#'+id+' g.node').evaluateAll(nodes => nodes.map(node => {
            const bounds = node.getBoundingClientRect();
            const attribute = (node as SVGGraphicsElement).transform.baseVal.consolidate()?.matrix;
            // Use matrices directly: CSSOM serializes transform strings to six significant digits.
            const parentMatrix = (node.parentElement as unknown as SVGGraphicsElement).getCTM()!;
            const computed = parentMatrix.inverse().multiply((node as SVGGraphicsElement).getCTM()!);
            return { width: bounds.width, height: bounds.height,
                expected: attribute ? [attribute.a,attribute.b,attribute.c,attribute.d,attribute.e,attribute.f] : null,
                actual: [computed.a,computed.b,computed.c,computed.d,computed.e,computed.f] };
        }));
        expect(geometry).not.toHaveLength(0);
        for (const node of geometry) {
            expect(node.width).toBeGreaterThan(0); expect(node.height).toBeGreaterThan(0);
            expect(node.expected).not.toBeNull();
            node.expected!.forEach((value,index) => expect(node.actual[index]).toBeCloseTo(value,3));
        }

        expect(await page.locator('#'+id+' g.node').count()).toBe(diagram.nodes.length);
        const reach=await page.locator('#'+id).evaluate(el=>{const svg=el.querySelector('svg')!,initial=svg.getBoundingClientRect().left;el.scrollLeft=el.scrollWidth;return {initial,left:el.getBoundingClientRect().left,movement:initial-svg.getBoundingClientRect().left,scroll:el.scrollLeft,required:el.scrollWidth-el.clientWidth};});
        expect(reach.initial).toBeGreaterThanOrEqual(reach.left);expect(Math.abs(reach.scroll-reach.required)).toBeLessThanOrEqual(1);expect(Math.abs(reach.movement-reach.scroll)).toBeLessThanOrEqual(1);
        await expect(page.locator('#'+id+' .mermaid-wrapper')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');await reference.close();
    });
}

for(const width of [390,1440]) test(`${width}px: all six native answers retain original closed and opened styles`,async({page})=>{
    await page.setViewportSize({width,height:900});
    const reference=await page.context().newPage();await reference.setViewportSize({width,height:900});
    await reference.setContent(`<style>${inventory.originalCss}</style>${inventory.originalBody.replace(/<svg[\s\S]*?<\/svg>/g,'')}`);
    await page.setContent(`<style>${preflight}${globals}${readFileSync(`${base}/guide.css`,'utf8')}</style>${markup()}`);
    const collect=(el:Element)=>Array.from(el.querySelectorAll('summary,p,ol,li'),n=>{const c=getComputedStyle(n);return {tag:n.tagName,color:c.color,background:c.backgroundColor,fontSize:c.fontSize,lineHeight:c.lineHeight,padding:c.padding,margin:c.margin,border:c.borderBottom};});
    for(let i=0;i<6;i++){
        const actual=page.locator('details').nth(i),expected=reference.locator('details').nth(i);
        expect(await actual.evaluate(collect)).toEqual(await expected.evaluate(collect));
        await actual.locator('summary').click();await expected.locator('summary').click();
        await expect(actual).toHaveAttribute('open','');
        expect(await actual.evaluate(collect)).toEqual(await expected.evaluate(collect));
        await actual.locator('summary').click();await expect(actual).not.toHaveAttribute('open','');
    }
    await reference.close();
});
for(const width of [390,900,901,1440])test(`${width}px: all heading anchors clear fixed header and disclaimer`,async({page})=>{
    await page.setViewportSize({width,height:900});await page.setContent(`<style>${preflight}${globals}${readFileSync(`${base}/guide.css`,'utf8')}</style>${markup()}`);
    const banner=width<=900?76:38;await page.evaluate(height=>document.documentElement.style.setProperty('--disclaimer-height',height+'px'),banner);
    expect(await page.locator('main h2[id],main h3[id]').evaluateAll(els=>els.map(el=>getComputedStyle(el).scrollMarginTop))).toEqual(Array(30).fill(`${80+banner}px`));
    await expect(page.locator('.sidebar')).toHaveCSS('top',`${60+banner}px`);await expect(page.locator('.nav-toggle')).toHaveCSS('top',`${72+banner}px`);
});
