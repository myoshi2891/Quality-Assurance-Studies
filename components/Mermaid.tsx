'use client';

import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark', // サイトに合わせてダークテーマかベーステーマを使用
  fontFamily: 'var(--font-body)',
  fontSize: 16,
  securityLevel: 'loose',
  htmlLabels: true,
});

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const [svgStr, setSvgStr] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    const renderMermaid = async () => {
      if (chart) {
        try {
          // ユニークなIDを付けて同一ページ内の複数図表に対応
          const id = `mermaid-svg-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
          const { svg } = await mermaid.render(id, chart);
          
          // DOMParserを使ってSVGのスタイルをインテリジェントに調整
          const parser = new DOMParser();
          const doc = parser.parseFromString(svg, 'image/svg+xml');
          const svgEl = doc.querySelector('svg');
          if (svgEl) {
            const isSequence = chart.includes('sequenceDiagram');
            const isFlowchartLR = chart.includes('flowchart LR') || chart.includes('graph LR');
            const isFlowchartTD = chart.includes('flowchart TD') || chart.includes('graph TD') || chart.includes('flowchart TB') || chart.includes('graph TB');
            
            svgEl.style.height = 'auto';
            svgEl.style.display = 'block';
            svgEl.style.margin = '0 auto';
            
            if (isSequence) {
              svgEl.style.width = '100%';
              svgEl.style.maxWidth = '650px';
            } else if (isFlowchartLR) {
              const originalWidth = svgEl.getAttribute('width');
              if (originalWidth && !originalWidth.includes('%')) {
                const widthVal = parseFloat(originalWidth);
                if (widthVal > 720) {
                  svgEl.style.minWidth = originalWidth;
                  svgEl.style.width = originalWidth;
                } else {
                  svgEl.style.width = '100%';
                  svgEl.style.maxWidth = originalWidth;
                }
              } else {
                svgEl.style.maxWidth = '100%';
              }
            } else if (isFlowchartTD) {
              svgEl.style.width = '100%';
              svgEl.style.maxWidth = '480px';
            } else {
              svgEl.style.maxWidth = '100%';
            }
            
            const serializer = new XMLSerializer();
            const newSvg = serializer.serializeToString(doc);
            if (isMounted) {
              setSvgStr(newSvg);
            }
          } else {
            if (isMounted) {
              setSvgStr(svg);
            }
          }
        } catch (error) {
          console.error("Mermaid rendering failed:", error);
          if (isMounted) {
            setSvgStr(`<p class="text-red-500">図表の描画に失敗しました</p>`);
          }
        }
      }
    };
    
    renderMermaid();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div 
      className="mermaid-wrapper flex justify-center my-8 p-4 bg-[#1a2235] rounded-xl border border-[var(--color-border)] shadow-lg overflow-x-auto max-w-[760px] mx-auto w-full"
      dangerouslySetInnerHTML={{ __html: svgStr }} 
    />
  );
}
