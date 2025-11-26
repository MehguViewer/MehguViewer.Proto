import { readFile } from 'node:fs/promises';
import path from 'node:path';
import ScalarWrapper from '@/components/ScalarWrapper';

export default async function AuthApiPage() {
  const filePath = path.join(process.cwd(), 'public/specs/auth/openapi.yaml');
  const specContent = await readFile(filePath, 'utf-8');

  return <ScalarWrapper specContent={specContent} />;
}

