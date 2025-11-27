'use client';

import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';
import { useEffect, useState } from 'react';

export default function ScalarWrapper({ specContent }: { specContent: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          content: specContent,
        },
        theme: 'deepSpace',
        darkMode: true,
        hideModels: true,
      } as any}
    />
  );
}
