'use client';

import { useEffect, useState, useId } from 'react';

export function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState('');
  const id = useId().replace(/:/g, '');

  useEffect(() => {
    const renderChart = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          securityLevel: 'loose',
        });
        const { svg } = await mermaid.render(`mermaid-${id}`, chart);
        setSvg(svg);
      } catch (error) {
        console.error('Mermaid render error:', error);
        setSvg('<div class="text-red-500">Failed to render diagram</div>');
      }
    };
    renderChart();
  }, [chart, id]);

  return (
    <div
      className="mermaid flex justify-center p-4 bg-white dark:bg-neutral-900 rounded-lg overflow-x-auto my-4"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
