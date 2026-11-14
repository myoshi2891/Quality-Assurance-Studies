import { LAYOUTS } from './diagram-layouts';
/** Retain the archived layout across Mermaid's font-measurement and wrapping changes.
 * Text, topology, theme and accessible errors still come from the shared renderer.
 */
export function restoreDiagramLayout(svg: SVGSVGElement, index: number) {
    const layout = LAYOUTS[index];
    // The reviewed restricted-use flow has new edges; let Mermaid lay it out.
    if (!layout || index === 6) return;
    const apply = (node: Element | null | undefined, attributes: object) => {
        if (node) for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, String(value));
    };
    for (const node of layout.nodes) {
        const target = Array.from(svg.querySelectorAll('g.node')).find(n => n.id.replace(/^.*flowchart-/, '').replace(/-\d+$/, '') === node.id);
        if (!target) continue;
        apply(target, node.attrs);
        const shapes = Array.from(target.children).filter(n => ['rect', 'polygon', 'path', 'circle', 'ellipse'].includes(n.tagName));
        node.shapes.forEach((attributes, i) => apply(shapes[i], attributes));
        apply(target.querySelector('g.label'), node.label);
        apply(target.querySelector('foreignObject'), node.foreign);
        if (node.style) target.querySelector('foreignObject > div')?.setAttribute('style', node.style);
    }
    for (const edge of layout.edges) {
        const path = Array.from(svg.querySelectorAll<SVGPathElement>('.flowchart-link')).find(n => n.getAttribute('data-id')?.replace(/^.*L_/, 'L_') === edge.id);
        apply(path, edge.attrs);
        // Mermaid 11.16's neo renderer encodes marker clearance in inline dashes.
        // Its dash generator is private: retain the rendered start/end offsets and
        // repeat its 2px dash/gap pattern using the restored path's measured length.
        const dash = path?.style.strokeDasharray.split(/[,\s]+/).map(Number) ?? [];
        if (path && typeof path.getTotalLength === 'function' && dash.length >= 4 && dash[0] === 0 && dash.every(Number.isFinite)) {
            const start = dash[1]!;
            const end = dash.at(-1)!;
            const middle = Math.max(0, path.getTotalLength() - start - end);
            const dotted = path.classList.contains('edge-pattern-dotted') || path.classList.contains('edge-pattern-dashed');
            const pattern = dotted ? Array(Math.floor(middle / 4)).fill('2 2').join(' ') : String(middle);
            path.style.strokeDasharray = `0 ${start} ${pattern} ${end}`;
        }
    }
    for (const label of layout.labels) {
        const target = Array.from(svg.querySelectorAll('.edgeLabel')).find(n => n.querySelector('[data-id]')?.getAttribute('data-id')?.replace(/^.*L_/, 'L_') === label.id);
        apply(target, label.attrs);
    }
    svg.setAttribute('viewBox', layout.viewBox);
    svg.style.width = layout.viewBox.split(/\s+/)[2] + 'px';
    svg.style.marginBottom = '0';
}
