'use client';

import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';

export default function AuthApiPage() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: '/specs/auth/openapi.yaml',
        },
        theme: 'deepSpace',
        darkMode: true,
        hideModels: true,
      } as any}
    />
  );
}
