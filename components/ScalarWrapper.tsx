'use client';

import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';

export default function ScalarWrapper({ specContent }: { specContent: string }) {
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
