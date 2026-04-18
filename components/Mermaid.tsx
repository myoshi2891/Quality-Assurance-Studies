'use client';

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svgStr, setSvgStr] = useState<string>('');

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark', // サイトに合わせてダークテーマかベーステーマを使用
      fontFamily: 'var(--font-body)',
    });

    const renderMermaid = async () => {
      if (ref.current && chart) {
        try {
          // ユニークなIDを付けて同一ページ内の複数図表に対応
          const id = `mermaid-svg-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
          const { svg } = await mermaid.render(id, chart);
          setSvgStr(svg);
        } catch (error) {
          console.error("Mermaid rendering failed:", error);
          setSvgStr(`<p class="text-red-500">図表の描画に失敗しました</p>`);
        }
      }
    };
    renderMermaid();
  }, [chart]);

  return (
    <div 
      className="mermaid-wrapper flex justify-center my-8 p-4 bg-[#1a2235] rounded-xl border border-[var(--color-border)] shadow-lg overflow-x-auto"
      ref={ref} 
      dangerouslySetInnerHTML={{ __html: svgStr }} 
    />
  );
}
