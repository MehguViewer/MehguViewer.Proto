'use client';

import mermaid from 'mermaid';
import { useEffect, useRef, useState } from 'react';

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
});

export function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState('');
  const [id] = useState(() => `mermaid-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    mermaid.render(id, chart).then(({ svg }) => {
      setSvg(svg);
    });
  }, [chart, id]);

  return (
    <div
      className="mermaid flex justify-center p-4 bg-white dark:bg-neutral-900 rounded-lg overflow-x-auto my-4"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
