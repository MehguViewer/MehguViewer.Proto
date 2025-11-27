import { redirect } from 'next/navigation';

export default async function ApiReferencePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  redirect(`/${lang}/api-reference/core`);
}
