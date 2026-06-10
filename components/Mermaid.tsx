'use client';

import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark', // サイトに合わせてダークテーマかベーステーマを使用
  fontFamily: 'var(--font-body)',
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
          if (isMounted) {
            setSvgStr(svg);
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
      className="mermaid-wrapper flex justify-center my-8 p-4 bg-[#1a2235] rounded-xl border border-[var(--color-border)] shadow-lg overflow-x-auto max-w-[760px] mx-auto w-full [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svgStr }} 
    />
  );
}
