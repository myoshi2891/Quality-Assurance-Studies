'use client';

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    themeVariables: {
        primaryColor: '#1a73e8',
        primaryTextColor: '#e8f0fe',
        primaryBorderColor: '#1a73e8',
        lineColor: '#5f7fb8',
        secondaryColor: '#0f9d58',
        tertiaryColor: '#0d1a2e',
        background: '#060b14',
        mainBkg: '#0f2040',
        nodeBorder: '#1a73e8',
        clusterBkg: '#0d1a2e',
        titleColor: '#e8f0fe',
        edgeLabelBackground: '#0d1a2e',
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: '13px',
    },
    flowchart: { curve: 'basis', padding: 20 },
    sequence: { actorMargin: 60, mirrorActors: true },
});

interface MermaidProps {
    chart: string;
}

/**
 * Adjusts a rendered Mermaid SVG for layout and sizing.
 *
 * @param chart - The Mermaid diagram source, used to determine the extra bottom padding for some diagram types.
 */
function applySvgFixups(svgEl: SVGSVGElement, chart: string): void {
    svgEl.removeAttribute('width');
    svgEl.removeAttribute('height');
    svgEl.style.height = 'auto';
    svgEl.style.overflow = 'visible';
    svgEl.style.display = 'block';
    svgEl.style.margin = '0 auto';
    svgEl.style.marginBottom = '10px';

    const viewBox = svgEl.getAttribute('viewBox');
    if (!viewBox) return;
    const parts = viewBox.split(/\s+/).map(Number);
    if (parts.length !== 4 || !parts.every((n) => Number.isFinite(n))) return;

    const [x, y, w, h] = parts as [number, number, number, number];
    const trimmed = chart.trim();
    const isSequenceOrState =
        trimmed.startsWith('sequenceDiagram') || trimmed.startsWith('stateDiagram');
    const extraHeight = isSequenceOrState ? 110 : 15;

    // ⚠️ SVG 幅の鉄則:
    //   viewBox 由来の自然 px 幅 + maxWidth:100% を使う。
    //   width:'100%' は viewBox のみで intrinsic サイズを持たない SVG をコンテナ全幅へ
    //   伸ばし、小さい図を異常拡大させるため使わない。
    //   width:${w}px + maxWidth:100% なら「親より広い図のみ縮小、小さい図は自然サイズ」となる。
    svgEl.style.width = `${w}px`;
    svgEl.style.maxWidth = '100%';
    svgEl.setAttribute('viewBox', `${x} ${y} ${w} ${h + extraHeight}`);
}

/**
 * Renders a Mermaid diagram from a chart definition.
 *
 * @param chart - Mermaid diagram source code
 */
export default function Mermaid({ chart }: MermaidProps) {
    const [svgStr, setSvgStr] = useState<string>('');
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Step 1: mermaid.render() で SVG 文字列を生成して state へ格納
    useEffect(() => {
        let isMounted = true;
        if (!chart) {
            setSvgStr('');
            return;
        }

        const renderMermaid = async () => {
            try {
                // Web フォント（Noto Sans JP 等）の読み込み完了を待ってから描画する。
                // 未読込のフォールバックフォントで mermaid.render() するとノード幅が
                // 誤計算され、確定後に文字がはみ出す/見切れるため。
                if (typeof document !== 'undefined' && 'fonts' in document) {
                    await document.fonts.ready;
                }
                if (!isMounted) return;
                const id = `mermaid-svg-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
                const { svg } = await mermaid.render(id, chart);
                if (isMounted) setSvgStr(svg);
            } catch (error) {
                console.error('Mermaid rendering failed:', error);
                if (isMounted)
                    setSvgStr(`<p class="text-red-500">図表の描画に失敗しました</p>`);
            }
        };

        renderMermaid();
        return () => {
            isMounted = false;
        };
    }, [chart]);

    // Step 2: 注入済みの実 DOM 上の svg 要素に applySvgFixups を適用
    useEffect(() => {
        if (!svgStr || !wrapperRef.current) return;
        const svgEl = wrapperRef.current.querySelector('svg');
        if (svgEl) applySvgFixups(svgEl as SVGSVGElement, chart);
    }, [svgStr, chart]);

    return (
        <div
            ref={wrapperRef}
            className="mermaid-wrapper"
            dangerouslySetInnerHTML={{ __html: svgStr }}
        />
    );
}
