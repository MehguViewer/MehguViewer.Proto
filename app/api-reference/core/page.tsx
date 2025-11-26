'use client';

import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';

export default function CoreApiPage() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: '/specs/core/openapi.yaml',
        },
        theme: 'deepSpace',
        darkMode: true,
        hideModels: true,
      } as any}
    />
  );
}
