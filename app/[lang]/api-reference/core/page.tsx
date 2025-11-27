import { readFile } from 'node:fs/promises';
import path from 'node:path';
import ScalarWrapper from '@/components/ScalarWrapper';
import { existsSync } from 'node:fs';

export default async function CoreApiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  // Try to find localized spec
  let specPath = path.join(process.cwd(), `public/specs/core/openapi.${lang}.yaml`);
  if (!existsSync(specPath)) {
    specPath = path.join(process.cwd(), 'public/specs/core/openapi.yaml');
  }
  
  const specContent = await readFile(specPath, 'utf-8');

  return <ScalarWrapper specContent={specContent} />;
}

