import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '../../layout.config';
import { source } from '@/lib/source';
import { RootProvider } from 'fumadocs-ui/provider/next';

export default async function Layout({ 
  params, 
  children 
}: { 
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  
  return (
    <RootProvider 
      i18n={{
        locale: lang,
        locales: [
          { name: 'English', locale: 'en' },
          { name: '简体中文', locale: 'zh-CN' }
        ]
      }}
    >
      <DocsLayout tree={source.pageTree[lang]} {...baseOptions}>
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
