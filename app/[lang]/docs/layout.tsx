import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { dictionary } from '@/lib/dictionary';
import { Github } from 'lucide-react';

export default async function Layout({ 
  params, 
  children 
}: { 
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  const dict = dictionary[lang as keyof typeof dictionary] || dictionary.en;
  
  return (
    <DocsLayout 
      tree={source.pageTree[lang]} 
      {...baseOptions}
      sidebar={{
        footer: (
          <a
            href="https://github.com/MehguViewer/MehguViewer.Proto"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="size-4" />
            <span>MehguViewer.Proto</span>
          </a>
        ),
      }}
      links={[
        {
          text: dict.nav.documentation,
          url: `/${lang}/docs`,
          active: 'nested-url',
        },
        {
          text: dict.nav.coreApi,
          url: `/${lang}/api-reference/core`,
          active: 'nested-url',
        },
        {
          text: dict.nav.authApi,
          url: `/${lang}/api-reference/auth`,
          active: 'nested-url',
        }
      ]}
    >
      {children}
    </DocsLayout>
  );
}
