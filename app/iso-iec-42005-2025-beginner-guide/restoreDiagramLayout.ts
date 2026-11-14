import { LAYOUTS } from './diagram-layouts';
/** Retain the archived layout across Mermaid's font-measurement and wrapping changes.
 * Text, topology, theme and accessible errors still come from the shared renderer.
 */
export function restoreDiagramLayout(svg: SVGSVGElement, index: number) {
    const layout = LAYOUTS[index];
    if (!layout) return;
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
        const path = Array.from(svg.querySelectorAll('.flowchart-link')).find(n => n.getAttribute('data-id')?.replace(/^.*L_/, 'L_') === edge.id);
        apply(path, edge.attrs);
    }
    for (const label of layout.labels) {
        const target = Array.from(svg.querySelectorAll('.edgeLabel')).find(n => n.querySelector('[data-id]')?.getAttribute('data-id')?.replace(/^.*L_/, 'L_') === label.id);
        apply(target, label.attrs);
    }
    svg.setAttribute('viewBox', layout.viewBox);
    svg.style.width = layout.viewBox.split(/\s+/)[2] + 'px';
    svg.style.marginBottom = '0';
}
